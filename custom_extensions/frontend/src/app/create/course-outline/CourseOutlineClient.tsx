"use client";

// @ts-nocheck – this component is compiled by Next.js but lives outside the main
// app dir, so local tsconfig paths/types do not apply. Disable type-checking to
// avoid IDE / build noise until shared tsconfig is wired up.

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

// Base URL so frontend can reach custom backend through nginx proxy
const CUSTOM_BACKEND_URL =
  process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || "/api/custom-projects-backend";

interface ModulePreview {
  id: string;
  title: string;
  lessons: string[];
}

// Simple bouncing dots loading animation
const LoadingAnimation: React.FC = () => (
  <div className="flex justify-center mt-4" aria-label="Loading">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="inline-block w-3 h-3 bg-[#0066FF] rounded-full animate-bounce"
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </div>
);

// Helper to retry fetch up to 2 times on 504 Gateway Timeout
async function fetchWithRetry(input: RequestInfo, init: RequestInit, retries = 2): Promise<Response> {
  let attempt = 0;
  while (true) {
    const res = await fetch(input, init);
    if (res.status !== 504 || attempt >= retries) return res;
    attempt += 1;
  }
}

export default function CourseOutlineClient() {
  const params = useSearchParams();
  const [prompt, setPrompt] = useState(params.get("prompt") || "");
  const [modules, setModules] = useState<number>(Number(params.get("modules") || 4));
  const [lessonsPerModule, setLessonsPerModule] = useState<string>(params.get("lessons") || "3-4");
  const [language, setLanguage] = useState<string>(params.get("lang") || "en");

  const [preview, setPreview] = useState<ModulePreview[]>([]);
  const [rawOutline, setRawOutline] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Track which lesson rows are expanded: key format `${modIdx}-${lessonIdx}` -> boolean
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const router = useRouter();

  // Keep a reference to the current in-flight preview request so we can cancel it
  const previewAbortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Skip preview fetching while the user is finalizing the outline
    if (isGenerating) return;

    // Abort any previously queued/in-flight request – we only want the very latest parameters
    if (previewAbortRef.current) {
      previewAbortRef.current.abort();
    }

    const abortController = new AbortController();
    previewAbortRef.current = abortController;

    const fetchPreview = async () => {
      setLoading(true);
      setError(null);
      setPreview([]);
      setRawOutline("");

      try {
        const res = await fetchWithRetry(`${CUSTOM_BACKEND_URL}/course-outline/preview`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, modules, lessonsPerModule, language }),
          signal: abortController.signal,
        });

        if (!res.ok) {
          throw new Error(`Bad response ${res.status}`);
        }

        const data = await res.json();
        // Backend returns {{modules, raw}}
        setPreview(Array.isArray(data.modules) ? data.modules : []);
        setRawOutline(typeof data.raw === "string" ? data.raw : "");
      } catch (e: any) {
        if (e.name === "AbortError") return; // request was cancelled – ignore
        setError(e.message);
      } finally {
        // Only clear loading if THIS request wasn't aborted; another newer request may be in-flight.
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPreview();

    // Cleanup: abort the request if the component unmounts or deps change before completion
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt, modules, lessonsPerModule, language, isGenerating]);

  const handleModuleChange = (index: number, value: string) => {
    setPreview((prev: ModulePreview[]) => {
      const copy = [...prev];
      copy[index].title = value;
      return copy;
    });
  };

  const handleLessonChange = (modIdx: number, lessonIdx: number, value: string) => {
    setPreview((prev: ModulePreview[]) => {
      const copy = [...prev];
      copy[modIdx].lessons[lessonIdx] = value;
      return copy;
    });
  };

  const handleLessonsTextareaChange = (modIdx: number, value: string) => {
    setPreview((prev: ModulePreview[]) => {
      const copy = [...prev];
      // Keep raw lines as-is during editing to prevent cursor jumps;
      // Final cleanup happens just before we send to backend.
      copy[modIdx].lessons = value.split(/\r?\n/);
      return copy;
    });
  };

  const handleGenerateFinal = async () => {
    setIsGenerating(true);
    setLoading(true);
    setError(null);
    try {
      const outlineForBackend = {
        mainTitle: prompt,
        sections: preview.map((m: ModulePreview, idx: number) => ({
          id: `№${idx + 1}`,
          title: m.title,
          totalHours: 0,
          lessons: m.lessons.map((les: string) => ({
            title: les,
            check: { type: "no", text: "" },
            contentAvailable: { type: "no", text: "" },
            source: "",
            hours: 0,
          })),
        })),
        detectedLanguage: language,
      };

      const res = await fetchWithRetry(`${CUSTOM_BACKEND_URL}/course-outline/finalize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          modules,
          lessonsPerModule,
          language,
          editedOutline: outlineForBackend,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      // Navigate to the newly-created product view. Using router.push ensures Next.js automatically
      // prefixes the configured `basePath` (e.g. "/custom-projects-ui") so we don't accidentally
      // leave the custom frontend and hit the main app's /projects route.
      router.push(`/projects/view/${data.id}`);
    } catch (e: any) {
      setError(e.message);
      // allow UI interaction again
      setIsGenerating(false);
      setLoading(false);
    }
  };

  const toggleExpanded = (modIdx: number, lessonIdx: number) => {
    const key = `${modIdx}-${lessonIdx}`;
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLessonTitleChange = (modIdx: number, lessonIdx: number, newTitle: string) => {
    setPreview((prev: ModulePreview[]) => {
      const copy = [...prev];
      const lines = copy[modIdx].lessons[lessonIdx].split(/\r?\n/);
      lines[0] = newTitle;
      copy[modIdx].lessons[lessonIdx] = lines.join("\n");
      return copy;
    });
  };

  const handleLessonDetailsChange = (modIdx: number, lessonIdx: number, detailIdx: number, newVal: string) => {
    setPreview((prev: ModulePreview[]) => {
      const copy = [...prev];
      const lines = copy[modIdx].lessons[lessonIdx].split(/\r?\n/);
      // detail lines start from index 1
      const original = lines[detailIdx + 1] || "";
      const match = original.match(/^\s*-?\s*\*\*(.+?)\*\*:\s*(.*)$/);
      if (match) {
        const label = match[1];
        lines[detailIdx + 1] = `- **${label}**: ${newVal}`;
      } else {
        // fallback keep original prefix until colon
        const parts = original.split(":");
        if (parts.length > 1) {
          parts[1] = ` ${newVal}`;
          lines[detailIdx + 1] = parts.join(":");
        } else {
          lines[detailIdx + 1] = newVal;
        }
      }
      copy[modIdx].lessons[lessonIdx] = lines.join("\n");
      return copy;
    });
  };

  return (
    <main
      /* Top-to-bottom pastel blue gradient identical to the reference */
      className="min-h-screen py-12 px-4 flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #E4ECFF 30%, #BFD7FF 65%, #CCE8FF 100%)",
      }}
    >
      <div className="w-full max-w-3xl flex flex-col gap-6 text-gray-900 relative">
        {/* Back button */}
        <Link
          href="/create/generate"
          className="fixed top-6 left-6 flex items-center gap-1 text-sm text-brand-primary hover:text-brand-primary-hover rounded-full px-3 py-1 border border-gray-300 bg-white z-20"
        >
          <ArrowLeft size={14} /> Back
        </Link>

        {/* Page title */}
        <h1 className="text-3xl font-semibold text-center text-black mt-10">Generate</h1>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-2">
          <select
            value={modules}
            onChange={(e) => setModules(Number(e.target.value))}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white/90 text-sm text-black"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n} Modules</option>
            ))}
          </select>
          <select
            value={lessonsPerModule}
            onChange={(e) => setLessonsPerModule(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white/90 text-sm text-black"
          >
            {["1-2", "3-4", "5-7", "8-10"].map((rng) => (
              <option key={rng} value={rng}>{rng} per module</option>
            ))}
          </select>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white/90 text-sm text-black"
          >
            <option value="en">English</option>
            <option value="uk">Ukrainian</option>
            <option value="es">Spanish</option>
            <option value="ru">Russian</option>
          </select>
        </div>

        {/* Prompt textarea */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 h-14 resize-none bg-white/90 placeholder-gray-500"
          placeholder="Describe what you'd like to make"
        />

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Outline</h2>
          {loading && <LoadingAnimation />}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && preview.length > 0 && (
            <div
              className="flex flex-col gap-6"
              style={{ animation: 'fadeInDown 0.25s ease-out both' }}
            >
              {preview.map((mod: ModulePreview, modIdx: number) => (
                <div key={mod.id} className="bg-white border rounded-xl p-5 shadow-sm">
                  {/* Module header with index badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-semibold">
                      {modIdx + 1}
                    </span>
                    <input
                      type="text"
                      value={mod.title}
                      onChange={(e) => handleModuleChange(modIdx, e.target.value)}
                      className="flex-grow font-medium text-lg border-none focus:ring-0 text-black"
                      placeholder={`Module ${modIdx + 1} title`}
                    />
                  </div>

                  {/* Lessons list */}
                  <div className="flex flex-col gap-2 pl-11">
                    {mod.lessons.map((les: string, lessonIdx: number) => {
                      const lines = les.split(/\r?\n/);
                      const titleLine = lines[0] || "";
                      const detailLines = lines.slice(1).join("\n");
                      const key = `${modIdx}-${lessonIdx}`;
                      const isOpen = !!expanded[key];
                      return (
                        <div key={lessonIdx} className="flex flex-col gap-1">
                          <div className="flex items-start gap-2">
                            <span className="w-6 text-right text-gray-600 select-none pt-1">{lessonIdx + 1}.</span>
                            <input
                              type="text"
                              value={titleLine}
                              onChange={(e) => handleLessonTitleChange(modIdx, lessonIdx, e.target.value)}
                              className="flex-grow bg-gray-50 border border-gray-300 rounded-md px-2 py-1 text-sm text-black focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                              placeholder={`Lesson ${lessonIdx + 1}`}
                            />
                            <button
                              type="button"
                              onClick={() => toggleExpanded(modIdx, lessonIdx)}
                              className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                              aria-label={isOpen ? "Collapse details" : "Expand details"}
                            >
                              <ChevronDown size={18} />
                            </button>
                          </div>
                          <div
                            className={
                              `ml-8 mt-1 flex flex-col gap-1 overflow-hidden transition-all duration-200 ` +
                              (isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')
                            }
                          >
                            {detailLines.split(/\r?\n/).map((ln, dIdx) => {
                              const m = ln.match(/^\s*-?\s*\*\*(.+?)\*\*:\s*(.*)$/);
                              if (m) {
                                const label = m[1];
                                const val = m[2];
                                return (
                                  <div key={dIdx} className="flex items-center gap-2">
                                    <span className="w-40 text-sm font-medium text-gray-700">{label}:</span>
                                    <input
                                      type="text"
                                      value={val}
                                      onChange={(e) => handleLessonDetailsChange(modIdx, lessonIdx, dIdx, e.target.value)}
                                      className="flex-grow bg-gray-50 border border-gray-300 rounded-md px-2 py-1 text-sm text-black focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                                    />
                                  </div>
                                );
                              }
                              // fallback raw line
                              return (
                                <input
                                  key={dIdx}
                                  type="text"
                                  value={ln}
                                  onChange={(e) => handleLessonDetailsChange(modIdx, lessonIdx, dIdx, e.target.value)}
                                  className="bg-gray-50 border border-gray-300 rounded-md px-2 py-1 text-sm text-black focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && preview.length === 1 && preview[0].lessons.length === 0 && rawOutline && (
            <pre className="whitespace-pre-wrap bg-gray-50 p-4 border rounded">
              {rawOutline}
            </pre>
          )}
        </section>

        {!loading && (
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Designs</h2>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 rounded-md border focus:outline-none bg-transparent hover:opacity-80 transition-opacity"
                title="Default design"
              >
                <svg width="120" height="68" viewBox="0 0 299 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-auto">
                  <path d="M3.68262 160.568C1.36322 157.303 5.50006e-08 153.31 0 149V20C0 8.95431 8.95431 0 20 0H279C283.133 6.99169e-07 286.974 1.25409 290.162 3.40234L3.68262 160.568ZM20 169C15.1224 169 10.6536 167.253 7.18262 164.352L294 7L293.684 6.42188C296.983 9.98821 299 14.7584 299 20V149C299 160.046 290.046 169 279 169H20Z" fill="#FF1313"/>
                  <path d="M20 169C15.1224 169 10.6536 167.253 7.18262 164.352L294 7L293.684 6.42188C296.983 9.98821 299 14.7584 299 20V149C299 160.046 290.046 169 279 169H20Z" fill="white"/>
                </svg>
              </button>
            </div>
          </section>
        )}

        {!loading && (
          <button
            type="button"
            onClick={handleGenerateFinal}
            className="self-start mt-6 px-8 py-3 rounded-md bg-[#0066FF] text-white hover:bg-[#0054d6] active:scale-95 shadow-lg transition-transform disabled:opacity-50"
            disabled={loading}
          >
            Generate
          </button>
        )}
      </div>

      {isGenerating && (
        <div className="fixed inset-0 bg-white/75 flex flex-col items-center justify-center z-50">
          <LoadingAnimation />
          <p className="mt-4 text-gray-800 font-medium">Creating your product...</p>
        </div>
      )}
    </main>
  );
}

// ----------- Styled-JSX keyframes (only included once) ------------
// eslint-disable-next-line @next/next/no-sync-scripts
<style jsx global>{`
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
`}</style> 