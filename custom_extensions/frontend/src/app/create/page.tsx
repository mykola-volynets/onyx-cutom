"use client";

import React from "react";
import Link from "next/link";
import { FileText, Sparkles, UploadCloud } from "lucide-react";

// Simple card component
const OptionCard: React.FC<{
  Icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  disabled?: boolean;
}> = ({ Icon, title, description, href, disabled }) => {
  const content = (
    <div
      className={`flex flex-col items-center justify-center gap-3 border rounded-lg p-6  transition-colors w-full h-full text-center shadow-sm ${
        disabled
          ? "bg-white/60 text-gray-400 cursor-not-allowed border-gray-300 shadow-none"
          : "bg-white/80 hover:bg-white text-gray-900 cursor-pointer shadow border-gray-200"
      }`}
    >
      <Icon size={32} className="mb-1" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 max-w-xs">{description}</p>
    </div>
  );

  if (disabled || !href) return content;
  return <Link href={href}>{content}</Link>;
};

export default function DataSourceLanding() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: "linear-gradient(180deg, #FFF9F5 0%, #ECECFF 30%, #BFD7FF 65%, #CCE8FF 100%)",
      }}
    >
      <div className="w-full max-w-3xl flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center">Choose a data source</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <OptionCard
            Icon={FileText}
            title="Paste in text"
            description="Provide raw text to build your product from."
            disabled
          />
          <OptionCard
            Icon={Sparkles}
            title="Generate"
            description="Have the AI generate content for you from a prompt."
            href="/create/generate"
          />
          <OptionCard
            Icon={UploadCloud}
            title="Import file or URL"
            description="Upload a document or reference URL to use as source material."
            disabled
          />
        </div>
      </div>
    </main>
  );
} 