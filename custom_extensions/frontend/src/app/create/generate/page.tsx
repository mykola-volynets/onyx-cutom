"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Book, Layout, Film, HelpCircle, Shuffle, Sparkles, Plus } from "lucide-react";

// Simple tab button
const TabButton: React.FC<{
  label: string;
  Icon: React.ElementType;
  active?: boolean;
  onClick?: () => void;
}> = ({ label, Icon, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex flex-col items-center gap-2 rounded-md px-5 py-3 transition-colors min-w-[120px] cursor-pointer ${
      active
        ? "bg-white shadow text-brand-primary border border-brand-primary"
        : "bg-white/70 text-gray-700 hover:bg-white"
    }`}
  >
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function GenerateProductPicker() {
  // For prompt input and filters we keep in state and navigate later
  const [prompt, setPrompt] = useState("");
  const [modulesCount, setModulesCount] = useState(4);
  const [lessonsPerModule, setLessonsPerModule] = useState("3-4");
  const [language, setLanguage] = useState("en");

  const allExamples = [
    "Code Optimization Course",
    "Junior AI/ML Engineer Training",
    "New Employee Onboarding",
    "Negotiating and closing deals to meet or exceed sales targets",
    "Choosing the right pricing strategy",
    "Workshop on effective communication skills for managers",
    "Half-day workshop for business innovation models",
    "Customer journey mapping",
    "A guide to investing in real estate",
  ];
  const getRandomExamples = () => {
    const shuffled = [...allExamples].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };
  const [examples, setExamples] = useState<string[]>(getRandomExamples());

  const shuffleExamples = () => setExamples(getRandomExamples());

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
    <main
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        background: "linear-gradient(180deg, #FFF9F5 0%, #B4DCFF 35%, #A3C2FF 60%, #E1E8FF 85%)",
      }}
    >
      <div className="w-full max-w-3xl flex flex-col gap-4 text-gray-900">
        {/* back button absolute top-left */}
        <Link
          href="/create"
          className="absolute top-6 left-6 flex items-center gap-1 text-sm text-brand-primary hover:text-brand-primary-hover rounded-full px-3 py-1 border border-gray-300 bg-white"
        >
          <ArrowLeft size={14} /> Back
        </Link>

        <h1 className="text-5xl font-semibold text-center tracking-wide text-gray-700 mt-8">Generate</h1>
        <p className="text-center text-gray-600 text-lg -mt-1">What would you like to create today?</p>

        {/* Tab selector */}
        <div className="flex justify-center gap-4">
          <TabButton label="Course Outline" Icon={Book} active />
          <TabButton label="Lesson Presentation" Icon={Layout} />
          <TabButton label="Video Lesson Script" Icon={Film} />
          <TabButton label="Quiz" Icon={HelpCircle} />
        </div>

        {/* Dropdown chips */}
        <div className="flex flex-wrap justify-center gap-2">
          <select
            value={modulesCount}
            onChange={(e) => setModulesCount(Number(e.target.value))}
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
              <option key={rng} value={rng}>{rng} Lessons</option>
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

        {/* Prompt input */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you'd like to make"
          className="w-full border border-gray-300 rounded-md p-3 h-14 resize-none bg-white/90 placeholder-gray-500"
        />

        {/* Example prompts block */}
        <div
          className={`transition-all duration-300 origin-top ${prompt.trim().length === 0 ? 'opacity-100 translate-y-0 max-h-[500px]' : 'opacity-0 -translate-y-2 pointer-events-none max-h-0 overflow-hidden'}`}
        >
          <div className="flex items-center gap-4 text-gray-600 font-medium text-base -mt-4">
            <hr className="flex-grow border-gray-300" />
            <span>Example prompts</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
            {examples.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setPrompt(ex)}
                className="relative text-left border border-gray-200 rounded-md bg-[#D9ECFF] px-4 py-3 text-sm hover:bg-white w-full cursor-pointer"
              >
                {ex}
                <Plus size={14} className="absolute right-2 top-2 text-gray-600 opacity-60" />
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-3">
            <button
              type="button"
              className="flex items-center gap-1 px-5 py-2 rounded-full bg-white text-brand-primary hover:bg-brand-primary/10 border border-gray-300 text-sm cursor-pointer"
              onClick={shuffleExamples}
            >
              <Shuffle size={16} /> Shuffle
            </button>
          </div>
        </div>

        {/* Generate button block */}
        <div
          className={`flex justify-center mt-6 transition-all duration-300 ${prompt.trim().length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'} z-10`}
        >
          <button
            type="button"
            onClick={handleCourseOutlineStart}
            className="flex items-center gap-2 px-8 py-3 rounded-full text-white hover:bg-brand-primary-hover active:scale-95 transition-all duration-200 text-lg font-semibold shadow-lg cursor-pointer"
            style={{ backgroundColor: '#0076FF' }}
          >
            <Sparkles size={18} /> Generate outline
          </button>
        </div>
      </div>
    </main>
  );
} 