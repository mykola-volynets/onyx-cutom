"use client";

import React from "react";
import Link from "next/link";
import { FileText, Sparkles, UploadCloud } from "lucide-react";

// ---------------------------------------------------------------------------
// Card shown on the landing page. It tries to mimic the folder-looking cards
// from the reference screenshot (image header + label area).
// ---------------------------------------------------------------------------
const OptionCard: React.FC<{
  Icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  disabled?: boolean;
  pillLabel?: string; // e.g. "POPULAR"
}> = ({ Icon, title, description, href, disabled, pillLabel }) => {
  const Wrapper = disabled || !href ? React.Fragment : Link;

  return (
    <Wrapper {...(!(disabled || !href) && { href })}>
      <div
        className={`flex flex-col items-center justify-start rounded-xl overflow-hidden border transition-colors shadow-sm w-full h-full text-center ${
          disabled
            ? "bg-white/60 text-gray-400 cursor-not-allowed border-gray-300 shadow-none"
            : "bg-white/80 hover:bg-white text-gray-900 cursor-pointer border-gray-200"
        }`}
      >
        {/* "Folder" header */}
        <div className="w-full h-28 bg-gradient-to-tr from-indigo-300/60 to-pink-200/60 flex items-center justify-center relative">
          <Icon size={40} className="text-white drop-shadow-md" />
          {pillLabel && (
            <span className="absolute bottom-2 right-2 text-[10px] font-bold bg-white text-indigo-600 rounded-md px-1.5 py-0.5 shadow">
              {pillLabel}
            </span>
          )}
        </div>
        {/* Text area */}
        <div className="flex flex-col items-center gap-1 px-4 py-5">
          <h3 className="font-semibold text-base sm:text-lg leading-tight">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-normal">
            {description}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default function DataSourceLanding() {
  return (
    <main
      className="min-h-screen flex flex-col items-center pt-10 pb-20 px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,249,245,1) 0%, rgba(236,236,255,1) 30%, rgba(191,215,255,1) 60%, rgba(204,232,255,1) 100%)",
      }}
    >
      {/* Top-left home button */}
      <Link
        href="/projects"
        className="fixed top-4 left-4 flex items-center gap-1 text-sm font-medium bg-white/70 hover:bg-white backdrop-blur rounded-full px-3 py-1 shadow border border-gray-200"
      >
        {/* Using Home icon from Lucide */}
        <FileText size={14} className="-ml-0.5" />
        Home
      </Link>

      {/* Main content */}
      <div className="w-full max-w-4xl flex flex-col gap-10 items-center">
        {/* Headings */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Create with AI</h1>
          <p className="text-base sm:text-lg text-gray-600">How would you like to get started?</p>
        </div>

        {/* Option cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <OptionCard
            Icon={FileText}
            title="Paste in text"
            description="Create from notes, an outline, or existing content"
            disabled
          />
          <OptionCard
            Icon={Sparkles}
            title="Generate"
            description="Create from a one-line prompt in a few seconds"
            href="/create/generate"
            pillLabel="POPULAR"
          />
          <OptionCard
            Icon={UploadCloud}
            title="Import file or URL"
            description="Enhance existing docs, presentations, or webpages"
            disabled
          />
        </div>

        {/* Recent prompts */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Your recent prompts</h2>
          {/* Static example row */}
          <Link
            href="#"
            className="flex items-center justify-between bg-white/80 hover:bg-white transition-colors border border-gray-200 shadow-sm rounded-lg px-5 py-4"
          >
            <div className="flex flex-col">
              <span className="font-medium">How to learn web development</span>
              <span className="text-xs text-gray-500">Generate · 17 hours ago · DRAFT</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
} 