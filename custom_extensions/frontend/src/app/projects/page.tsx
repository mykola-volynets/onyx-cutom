// custom_extensions/frontend/src/app/projects/page.tsx
"use client";

import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectsTable from '../../components/ProjectsTable';

export default function ProjectsPage() {
  // This logic ensures the "Back to Chat" URL is absolute, fixing the redirect issue.
  const [chatUrl, setChatUrl] = useState("/chat");

  useEffect(() => {
    // This runs only on the client, where window.location.origin is available
    setChatUrl(`${window.location.origin}/chat`);
  }, []);

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-6 flex">
            <Link
                href={chatUrl}
                className="text-sm text-blue-600 hover:underline flex items-center px-4 py-2 w-fit bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
            >
                <ArrowLeft size={16} className="mr-2" />
                Back to Chat
            </Link>
        </div>
        <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading Projects...</div>}>
            <ProjectsTable />
        </Suspense>
      </div>
    </main>
  );
}
