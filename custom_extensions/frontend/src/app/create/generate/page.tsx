"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpenCheck, Presentation, Film, HelpCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  href?: string;
  disabled?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, Icon, href, disabled }) => {
  const inner = (
    <div
      className={`flex flex-col items-start gap-2 border rounded-lg p-6 shadow-sm transition-colors h-full w-full ${
        disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-50 cursor-pointer"
      }`}
    >
      <Icon size={28} />
      <h3 className="font-semibold text-lg mt-1">{title}</h3>
      <p className="text-sm text-gray-500 flex-1">{description}</p>
      {disabled && <span className="text-xs uppercase tracking-wide font-medium mt-auto">SOON</span>}
    </div>
  );
  if (disabled || !href) return inner;
  return <Link href={href}>{inner}</Link>;
};

export default function GenerateProductPicker() {
  // For prompt input and filters we keep in state and navigate later
  const [prompt, setPrompt] = useState("");
  const [modulesCount, setModulesCount] = useState(4);
  const [lessonsPerModule, setLessonsPerModule] = useState("3-4");
  const [language, setLanguage] = useState("en");

  const handleCourseOutlineStart = () => {
    if (!prompt.trim()) return;
    const params = new URLSearchParams({
      prompt,
      modules: String(modulesCount),
      lessons: lessonsPerModule,
      lang: language,
    });
    window.location.href = `/create/course-outline?${params.toString()}`;
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center">Select a product type</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <ProductCard
            title="Course Outline"
            description="Plan modules and lessons for an entire learning program."
            Icon={BookOpenCheck}
            // We'll show form below instead of href
          />
          <ProductCard title="Lesson Presentation" description="Coming soon" Icon={Presentation} disabled />
          <ProductCard title="Video Lesson Script" description="Coming soon" Icon={Film} disabled />
          <ProductCard title="Quiz" description="Coming soon" Icon={HelpCircle} disabled />
        </div>

        {/* Course Outline prompt section */}
        <section className="mt-8 flex flex-col gap-6">
          <label className="font-semibold text-lg">Describe what you'd like to make</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Code Optimization Course"
            className="w-full border rounded-md p-3 h-28 resize-none"
          />

          {/* Example prompts */}
          <div className="flex gap-2 flex-wrap text-sm">
            {["Code Optimization Course", "Junior AI/ML Engineer Training", "New Employee Onboarding"].map((ex) => (
              <button
                key={ex}
                type="button"
                className="px-3 py-1 border rounded-full hover:bg-gray-100"
                onClick={() => setPrompt(ex)}
              >
                {ex}
              </button>
            ))}
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Modules</label>
              <select value={modulesCount} onChange={(e) => setModulesCount(Number(e.target.value))} className="border rounded-md p-2">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Lessons per module</label>
              <select value={lessonsPerModule} onChange={(e) => setLessonsPerModule(e.target.value)} className="border rounded-md p-2">
                {["1-2", "3-4", "5-7", "8-10"].map((rng) => (
                  <option key={rng} value={rng}>{rng}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Language</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border rounded-md p-2">
                <option value="en">English</option>
                <option value="uk">Ukrainian</option>
                <option value="es">Spanish</option>
                <option value="ru">Russian</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCourseOutlineStart}
            disabled={!prompt.trim()}
            className="self-start px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Continue
          </button>
        </section>
      </div>
    </main>
  );
} 