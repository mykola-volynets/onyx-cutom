// custom_extensions/frontend/src/components/ProjectsTable.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Link as LinkIcon, FileText, RefreshCw } from 'lucide-react';

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL;

// Reverted to the interfaces that ProjectsTable.tsx originally expected
interface MicroProduct {
  name: string;
  slug: string;
  webLinkPath?: string;
  pdfLinkPath?: string;
  details?: any; // Or your specific TrainingPlanData type if details are ever populated in this list view
}

interface ProjectEntry {
  projectName: string;
  projectSlug: string;
  product: string; // Maps to product_type from DB, transformed by backend
  productSlug: string;
  microProduct: MicroProduct;
}

const ProjectsTable: React.FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectEntry[]>([]); // Use original ProjectEntry
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      // const projectsApiUrl = `${CUSTOM_BACKEND_URL}/projects`;
      const projectsApiUrl = `/api/custom-projects-backend/projects`;
      console.log("Fetching projects from:", projectsApiUrl);
      try {
        const headers: HeadersInit = {};
        // Placeholder for sending dev user ID if your get_current_onyx_user_id in backend uses it
        const devUserId = "dummy-onyx-user-id-007"; // You'd get this from auth context ideally
        if (devUserId && process.env.NODE_ENV === 'development') { // Example condition
            headers['X-Dev-Onyx-User-ID'] = devUserId;
        }
        // If you implement actual token-based auth, add Authorization header here:
        // const token = getOnyxAuthToken(); // Implement this
        // if (token) headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(projectsApiUrl, { headers });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        const data: ProjectEntry[] = await response.json(); // Expecting ProjectEntry structure now
        console.log("Fetched projects data (expected ProjectEntry structure):", data);
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

  const handlePdfClick = (pdfPath: string | undefined) => {
    if (pdfPath) {
      // The backend now constructs pdfLinkPath like "pdf/generated-slug"
      // The actual /api/custom/pdf/{document_slug} endpoint in backend still uses MICROPRODUCT_DATA_FILES
      // For this to work with new DB entries, that PDF endpoint needs updating
      // or pdfPath needs to be a full URL if generated differently.
      // Assuming pdfPath is relative to CUSTOM_BACKEND_URL/api/custom/
      const fullPdfUrl = `${CUSTOM_BACKEND_URL}${pdfPath.startsWith('/') ? '' : '/'}${pdfPath.replace('/api/custom', '')}`;
      console.log("Attempting to open PDF: ", fullPdfUrl);
      window.open(fullPdfUrl, '_blank');

    } else {
      alert("PDF link not available for this item.");
    }
  };

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
              // webLinkPath is now constructed by the backend and included in item.microProduct
              const detailPageUrl = item.microProduct?.webLinkPath || '#';

              return (
                <tr key={`${item.projectSlug}-${item.productSlug}-${item.microProduct?.slug}-${index}`}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 border-b border-gray-200`}>
                  <td className="text-left py-3 px-4">{item.projectName}</td>
                  <td className="text-left py-3 px-4">{item.product}</td> {/* Expects item.product */}
                  <td className="text-left py-3 px-4">{item.microProduct?.name || 'N/A'}</td>
                  <td className="text-center py-3 px-4">
                    {item.microProduct?.webLinkPath ? (
                      <Link href={detailPageUrl} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 inline-block">
                          <LinkIcon size={18} />
                        </a>
                      </Link>
                    ) : (
                      <span className="text-gray-400"><LinkIcon size={18} /></span>
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
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
                      onClick={() => item.projectSlug && item.productSlug && item.microProduct?.slug && handleRefreshClick(item.projectSlug, item.productSlug, item.microProduct.slug)}
                      disabled={!(item.projectSlug && item.productSlug && item.microProduct?.slug)}
                      className={`text-gray-600 hover:text-gray-800 ${!(item.projectSlug && item.productSlug && item.microProduct?.slug) ? 'opacity-50 cursor-not-allowed' : ''}`}
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
