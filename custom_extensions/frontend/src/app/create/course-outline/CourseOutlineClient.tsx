"use client";

// NOTE: this file simply contains the former logic from page.tsx so that the
// top-level page can remain a Server Component and wrap this one in <Suspense>,
// satisfying Next.js static-export rules.

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/chat/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, modules, lessonsPerModule, language }),
        });
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setPreview(data.modules || []);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPreview();
  }, []);

  const handleModuleChange = (index: number, value: string) => {
    setPreview((prev) => {
      const copy = [...prev];
      copy[index].title = value;
      return copy;
    });
  };

  const handleGenerateFinal = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/custom/projects/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectName: prompt,
          design_template_id: 1, // TODO: replace with real id
          aiResponse: JSON.stringify({ preview }),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      window.location.href = `/projects/view/${data.id}`;
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
              {preview.map((mod, idx) => (
                <div key={mod.id} className="bg-white border rounded-lg p-4 shadow-sm">
                  <input
                    type="text"
                    value={mod.title}
                    onChange={(e) => handleModuleChange(idx, e.target.value)}
                    className="font-medium text-lg w-full border-none focus:ring-0"
                  />
                  <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
                    {mod.lessons.map((les) => (
                      <li key={les}>{les}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Designs</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-md border focus:outline-none bg-blue-600 text-white">Default</button>
          </div>
        </section>

        <button
          type="button"
          onClick={handleGenerateFinal}
          className="self-start mt-4 px-6 py-3 rounded-md bg-brand-primary text-white hover:bg-brand-primary-hover disabled:opacity-50"
          disabled={loading}
        >
          Generate
        </button>
      </div>
    </main>
  );
} 