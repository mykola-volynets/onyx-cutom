"use client";

// @ts-nocheck – this component is compiled by Next.js but lives outside the main
// app dir, so local tsconfig paths/types do not apply. Disable type-checking to
// avoid IDE / build noise until shared tsconfig is wired up.

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Base URL so frontend can reach custom backend through nginx proxy
const CUSTOM_BACKEND_URL =
  process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || "/api/custom-projects-backend";

interface ModulePreview {
  id: string;
  title: string;
  lessons: string[];
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
  }, []);

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
      className="min-h-screen p-6 flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #FFF9F5 0%, #ECECFF 30%, #BFD7FF 65%, #CCE8FF 100%)",
      }}
    >
      <div className="w-full max-w-5xl flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center">Course Outline Preview</h1>

        <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col gap-2">
          <span className="text-sm text-gray-500">Prompt</span>
          <p className="font-medium">{prompt}</p>
          <div className="flex gap-4 text-sm text-gray-600 flex-wrap mt-2">
            <span>Modules: {modules}</span>
            <span>Lessons/Module: {lessonsPerModule}</span>
            <span>Language: {language.toUpperCase()}</span>
          </div>
        </div>

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Outline</h2>
          {loading && <p>Generating preview...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && preview.length > 0 && (
            <div className="flex flex-col gap-4">
              {preview.map((mod: ModulePreview, idx: number) => (
                <div key={mod.id} className="bg-white border rounded-lg p-4 shadow-sm">
                  <input
                    type="text"
                    value={mod.title}
                    onChange={(e) => handleModuleChange(idx, e.target.value)}
                    className="font-medium text-lg w-full border-none focus:ring-0"
                  />
                  <ul className="list-disc pl-6 mt-2 text-sm text-gray-800 space-y-1">
                    {mod.lessons.map((les: string, lIdx: number) => (
                      <li key={`m${idx}-l${lIdx}`} className="list-none">
                        <input
                          type="text"
                          value={les}
                          onChange={(e) => handleLessonChange(idx, lIdx, e.target.value)}
                          className="w-full border-b border-gray-300 focus:border-brand-primary focus:outline-none text-sm py-0.5 bg-transparent"
                        />
                      </li>
                    ))}
                  </ul>
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

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Designs</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-md border focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-hover transition-colors">Default</button>
          </div>
        </section>

        <button
          type="button"
          onClick={handleGenerateFinal}
          className="self-start mt-4 px-6 py-3 rounded-md bg-brand-primary text-white hover:bg-brand-primary-hover active:scale-95 shadow-lg transition transform disabled:opacity-50"
          disabled={loading}
        >
          Generate
        </button>
      </div>
    </main>
  );
} 