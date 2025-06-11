"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MonitorPlay, BookOpen, FileText, Smartphone, Shuffle } from "lucide-react";

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
    className={`flex flex-col items-center gap-2 border rounded-md px-6 py-4 transition-colors min-w-[110px] ${
      active ? "bg-white shadow text-brand-primary border-brand-primary" : "bg-white/60 text-gray-600 hover:bg-white"
    }`}
  >
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function GenerateProductPicker() {
  // For prompt input and filters we keep in state and navigate later
  const [prompt, setPrompt] = useState("");
  const [cards, setCards] = useState("8 cards");
  const [design, setDesign] = useState("Default");
  const [language, setLanguage] = useState("en");

  const handleCourseOutlineStart = () => {
    if (!prompt.trim()) return;
    const params = new URLSearchParams({
      prompt,
      cards,
      design,
      lang: language,
    });
    window.location.href = `/create/course-outline?${params.toString()}`;
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        background: "linear-gradient(180deg, #FFF9F5 0%, #ECECFF 30%, #BFD7FF 65%, #CCE8FF 100%)",
      }}
    >
      <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-900">
        {/* Top back button */}
        <div className="flex items-center">
          <Link
            href="/create"
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 rounded-full px-3 py-1 border border-gray-300 bg-white/70"
          >
            <ArrowLeft size={14} /> Back
          </Link>
        </div>

        <h1 className="text-4xl font-semibold text-center">Generate</h1>
        <p className="text-center text-gray-700 text-lg -mt-4">What would you like to create today?</p>

        {/* Tab selector */}
        <div className="flex justify-center gap-4">
          <TabButton label="Presentation" Icon={MonitorPlay} active />
          <TabButton label="Webpage" Icon={FileText} />
          <TabButton label="Document" Icon={BookOpen} />
          <TabButton label="Social" Icon={Smartphone} />
        </div>

        {/* Dropdown chips */}
        <div className="flex flex-wrap justify-center gap-3">
          <select
            value={cards}
            onChange={(e) => setCards(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white/80 text-sm"
          >
            {["8 cards", "16 cards", "24 cards"].map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <select
            value={design}
            onChange={(e) => setDesign(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white/80 text-sm"
          >
            {["Default"].map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white/80 text-sm"
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

        {/* Example prompts */}
        <div className="flex flex-col gap-4">
          <h3 className="text-center text-gray-700 font-medium relative">
            <span className="before:absolute before:left-0 before:right-0 before:top-1/2 before:h-px before:bg-gray-300"> </span>
            <span className="bg-white/80 px-3 relative z-10">Example prompts</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "How the best creators build successful online courses",
              "How to learn web development",
              "Living your best life: how to maintain work-life balance for creatives",
              "The ABCs of personal branding",
              "Sales proposal for a b2b software company",
              "Quantum computing lesson plan",
            ].map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setPrompt(ex)}
                className="text-left border border-gray-200 rounded-md bg-white/60 px-4 py-3 text-sm hover:bg-white"
              >
                {ex}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-2">
            <button
              type="button"
              className="flex items-center gap-1 px-5 py-2 rounded-full border border-gray-300 bg-white/80 hover:bg-white text-gray-800 text-sm"
              onClick={() => {}}
            >
              <Shuffle size={16} /> Shuffle
            </button>
          </div>
        </div>

        {/* Continue button */}
        <button
          type="button"
          onClick={handleCourseOutlineStart}
          disabled={!prompt.trim()}
          className="self-center mt-6 px-6 py-3 rounded-md bg-brand-primary text-white hover:bg-brand-primary-hover disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </main>
  );
} 