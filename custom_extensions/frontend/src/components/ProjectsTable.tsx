// custom_extensions/frontend/src/components/ProjectsTable.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Use Next.js Link
import { Link as LinkIcon, FileText, RefreshCw } from 'lucide-react';

// Use environment variable for backend URL
const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL;

interface MicroProduct {
  name: string;
  slug: string; // Expect slug
  webLinkPath?: string; // Expect path based on slugs
  pdfLinkPath?: string; // Expect path based on slugs
  details?: any;
}

interface ProjectEntry {
  projectName: string;
  projectSlug: string; // Expect slug
  product: string;
  productSlug: string; // Expect slug
  microProduct: MicroProduct;
}

const ProjectsTable: React.FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      console.log("Fetching projects from:", `${CUSTOM_BACKEND_URL}/projects`);
      try {
        const response = await fetch(`${CUSTOM_BACKEND_URL}/projects`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        const data: ProjectEntry[] = await response.json();
        console.log("Fetched projects data:", data); // Log fetched data
        setProjectsData(data);
      } catch (e: any) {
        console.error("Failed to fetch projects:", e);
        setError(e.message || "Failed to load projects. Ensure the custom backend is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Function to handle PDF download click (builds full URL)
  const handlePdfClick = (pdfPath: string | undefined) => {
    if (pdfPath) {
      window.open(`${CUSTOM_BACKEND_URL}${pdfPath.startsWith('/') ? '' : '/'}${pdfPath.replace('/api/custom', '')}`, '_blank');
    } else {
      alert("PDF link not available.");
    }
  };

  // Function to handle Refresh click (Placeholder - TODO: Implement API call)
  const handleRefreshClick = (projectSlug: string, productSlug: string, microProductSlug: string) => {
      alert(`TODO: Implement Refresh API Call for: ${projectSlug}/${productSlug}/${microProductSlug}`);
  };


  if (loading) {
    return <div className="p-8 text-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  }

  if (!projectsData || projectsData.length === 0) {
      return <div className="p-8 text-center">No projects found.</div>;
  }

  return (
    <div className="p-4 md:p-8 font-['Inter',_sans-serif] flex-grow bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Проекты</h1>
      <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Название проекта</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Продукт</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Микропродукт</th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Веб</th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm">PDF</th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Обновить</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {projectsData.map((item, index) => {
              // Ensure all slugs are present before creating links/buttons
              const hasRequiredSlugs = item.projectSlug && item.productSlug && item.microProduct?.slug;

              // Construct detail page URL using slugs
              const detailPageUrl = hasRequiredSlugs
                ? `/projects/${item.projectSlug}/${item.productSlug}/${item.microProduct.slug}`
                : '#'; // Fallback if slugs are missing

              return (
                <tr key={`${item.projectSlug}-${item.productSlug}-${item.microProduct?.slug}-${index}`} // More stable key
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 border-b border-gray-200`}>
                  <td className="text-left py-3 px-4">{item.projectName}</td>
                  <td className="text-left py-3 px-4">{item.product}</td>
                  <td className="text-left py-3 px-4">{item.microProduct?.name || 'N/A'}</td>
                  <td className="text-center py-3 px-4">
                    {hasRequiredSlugs ? (
                      <Link href={detailPageUrl} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 inline-block">
                          <LinkIcon size={18} />
                        </a>
                      </Link>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
                     {/* Use onClick handler to build full URL */}
                    <button
                        onClick={() => handlePdfClick(item.microProduct?.pdfLinkPath)}
                        disabled={!item.microProduct?.pdfLinkPath}
                        className={`text-red-500 hover:text-red-700 inline-block ${!item.microProduct?.pdfLinkPath ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <FileText size={18} />
                    </button>
                  </td>
                  <td className="text-center py-3 px-4">
                    <button
                      onClick={() => hasRequiredSlugs && handleRefreshClick(item.projectSlug, item.productSlug, item.microProduct.slug)}
                      disabled={!hasRequiredSlugs}
                      className={`text-gray-600 hover:text-gray-800 ${!hasRequiredSlugs ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <RefreshCw size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
