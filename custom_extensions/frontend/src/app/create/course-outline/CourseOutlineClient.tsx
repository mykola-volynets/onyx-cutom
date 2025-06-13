"use client";

// @ts-nocheck – this component is compiled by Next.js but lives outside the main
// app dir, so local tsconfig paths/types do not apply. Disable type-checking to
// avoid IDE / build noise until shared tsconfig is wired up.

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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

  const router = useRouter();

  useEffect(() => {
    const fetchPreview = async () => {
      setLoading(true);
      setError(null);
      setPreview([]);
      setRawOutline("");

      try {
        const res = await fetch(`${CUSTOM_BACKEND_URL}/course-outline/preview`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, modules, lessonsPerModule, language }),
        });

        if (!res.ok) {
          throw new Error(`Bad response ${res.status}`);
        }

        const data = await res.json();
        // Backend returns {{modules, raw}}
        setPreview(Array.isArray(data.modules) ? data.modules : []);
        setRawOutline(typeof data.raw === "string" ? data.raw : "");
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt, modules, lessonsPerModule, language]);

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
      // Split by newline, trim empty lines
      copy[modIdx].lessons = value.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      return copy;
    });
  };

  const handleGenerateFinal = async () => {
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

      const res = await fetch(`${CUSTOM_BACKEND_URL}/course-outline/finalize`, {
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
      // Navigate to the new project view without a full reload
      router.push(`/projects/view/${data.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
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
            <div className="flex flex-col gap-4">
              {preview.map((mod: ModulePreview, idx: number) => (
                <div key={mod.id} className="bg-white border rounded-xl p-4 shadow-sm">
                  <input
                    type="text"
                    value={mod.title}
                    onChange={(e) => handleModuleChange(idx, e.target.value)}
                    className="font-medium text-lg w-full border-none focus:ring-0 text-black mb-2"
                  />
                  <textarea
                    value={mod.lessons.join("\n")}
                    onChange={(e) => handleLessonsTextareaChange(idx, e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm text-black bg-gray-50 resize-none"
                    rows={mod.lessons.length || 3}
                    placeholder="Enter lessons, each on new line"
                  />
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
                className="px-4 py-2 rounded-md border focus:outline-none bg-[#0066FF] text-white hover:bg-[#0054d6] transition-colors shadow-sm"
              >
                Default
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
    </main>
  );
} 