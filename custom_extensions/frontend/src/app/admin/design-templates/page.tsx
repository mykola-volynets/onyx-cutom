// custom_extensions/frontend/src/app/admin/design-templates/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // For Next.js optimized images
import { DesignTemplate } from '@/types/designTemplates';
import { fetchDesignTemplates } from '@/lib/designTemplateApi';
import { Plus, Edit3, Trash2, Eye } from 'lucide-react'; // Assuming you might add edit/delete later

const DesignTemplatesListPageComponent = () => {
  const [templates, setTemplates] = useState<DesignTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTemplates = async () => {
      setLoading(true);
      try {
        const data = await fetchDesignTemplates();
        setTemplates(data);
      } catch (err: any) {
        setError(err.message || "Could not load design templates.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadTemplates();
  }, []);

  if (loading) {
    return <div className="p-8 text-center font-['Inter',_sans-serif] text-black">Loading Design Templates...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500 font-['Inter',_sans-serif]">Error: {error}</div>;
  }

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Design Templates</h1>
          <Link href="/admin/design-templates/new" legacyBehavior>
            <a className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Plus size={18} className="mr-2" /> Add New Design Template
            </a>
          </Link>
        </div>

        {templates.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No design templates configured yet. Click &quot;Add New Design Template&quot; to get started.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Template Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Microproduct Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Component Name
                  </th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Date Created
                  </th>
                  {/* Add Actions column if needed later for Edit/Delete */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {templates.map((template) => (
                  <tr key={template.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {template.design_image_path ? (
                        <Image
                          src={template.design_image_path}
                          alt={template.template_name}
                          width={80} // Adjust size as needed
                          height={80}
                          className="object-contain rounded"
                          unoptimized={process.env.NODE_ENV === 'development'} // Useful if images are served locally by FastAPI dev server
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                          No Image
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                      {template.template_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {template.microproduct_type}
                    </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {template.component_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(template.date_created).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default function DesignTemplatesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading Design Templates...</div>}>
      <DesignTemplatesListPageComponent />
    </Suspense>
  );
}
