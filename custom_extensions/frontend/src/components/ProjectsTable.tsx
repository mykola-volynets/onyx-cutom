"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Link as LinkIcon, FileText, RefreshCw, Trash2 } from 'lucide-react';

// It's good practice to have a fallback for environment variables
const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || ""; 

interface MicroProduct {
  name: string; 
  slug: string; 
  webLinkPath?: string;
  pdfLinkPath?: string;
  details?: any; 
}

interface ProjectEntry {
  id: number; // This is CRUCIAL and was missing in your network response
  projectName: string;
  projectSlug: string;
  product: string; 
  productSlug: string;
  microProduct: MicroProduct;
}

const ProjectsTable: React.FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProjectIds, setSelectedProjectIds] = useState<number[]>([]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    // This URL is relative to the frontend and should be handled by Next.js rewrites
    const projectsApiUrl = `/api/custom-projects-backend/projects`; 
    console.log("Fetching projects from:", projectsApiUrl);
    try {
      const headers: HeadersInit = {};
      const devUserId = "dummy-onyx-user-id-007"; // Replace with actual user ID logic for dev if needed
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const response = await fetch(projectsApiUrl, { headers });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }
      const data: ProjectEntry[] = await response.json();
      console.log("Fetched projects data (verify 'id' field is present for each project):", data);
      setProjectsData(data);
    } catch (e: any) {
      console.error("Failed to fetch projects:", e);
      setError(e.message || "Failed to load projects. Ensure the custom backend is running and sending project IDs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handlePdfClick = (pdfPath: string | undefined) => {
    if (pdfPath) { // pdfPath from backend is like "pdf/some-slug"
        // URL should be relative to frontend, to be caught by Next.js rewrite
        const fullProxiedPdfUrl = `/api/custom-projects-backend/${pdfPath}`;
        console.log("Attempting to open PDF via proxy: ", fullProxiedPdfUrl);
        window.open(fullProxiedPdfUrl, '_blank');
    } else {
        alert("PDF link not available for this item.");
    }
  };

  const handleRefreshClick = (projectSlug: string, productSlug: string, microProductSlug: string) => {
    alert(`TODO: Implement Refresh API Call for: ${projectSlug}/${productSlug}/${microProductSlug}`);
  };

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      const allIds = projectsData.map(p => p.id).filter(id => typeof id === 'number'); // Filter out undefined IDs
      setSelectedProjectIds(allIds);
    } else {
      setSelectedProjectIds([]);
    }
  };

  const handleRowCheckboxChange = (projectId: number, checked: boolean) => {
    // Ensure projectId is valid before updating state
    if (typeof projectId !== 'number') {
        console.error("Attempted to select a project with an undefined ID.");
        return;
    }
    setSelectedProjectIds(currentSelectedIds => {
      const newSelectedIdsSet = new Set(currentSelectedIds);
      if (checked) {
        newSelectedIdsSet.add(projectId);
      } else {
        newSelectedIdsSet.delete(projectId);
      }
      const updatedIds = Array.from(newSelectedIdsSet);
      console.log("Selected IDs after change:", updatedIds, "; Clicked ID:", projectId, "; Is Checked:", checked);
      return updatedIds;
    });
  };
  
  const handleDeleteSelected = async () => {
    const validSelectedIds = selectedProjectIds.filter(id => typeof id === 'number'); // Ensure only valid IDs are sent
    if (validSelectedIds.length === 0) {
      alert("No valid projects selected for deletion.");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete ${validSelectedIds.length} selected project(s)? This action cannot be undone.`)) {
      return;
    }

    setIsDeleting(true);
    // This URL must be a STRING, and relative to frontend for proxying
    const deleteApiUrl = '/api/custom-projects-backend/projects/delete-multiple'; 
    console.log("Attempting to delete projects with IDs:", validSelectedIds, "via URL:", deleteApiUrl);

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      const devUserId = "dummy-onyx-user-id-for-testing"; 
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }

      const response = await fetch(deleteApiUrl, {
        method: 'POST', 
        headers: headers,
        body: JSON.stringify({ project_ids: validSelectedIds }), // Send only valid IDs
      });

      if (!response.ok) {
        let errorDetail = `HTTP error! status: ${response.status}`;
        try {
            const errorData = await response.json();
            errorDetail = errorData.detail || errorDetail;
        } catch (jsonError) {
            const textError = await response.text().catch(() => ""); // Attempt to get text if JSON fails
            errorDetail = textError || errorDetail;
        }
        console.error("Delete API response error:", response.status, errorDetail);
        throw new Error(errorDetail); // Throw the detailed error message
      }

      const result = await response.json();
      console.log('Deletion successful:', result);
      setProjectsData(prevProjects => prevProjects.filter(p => !validSelectedIds.includes(p.id)));
      setSelectedProjectIds([]);
      alert(result.detail || `${validSelectedIds.length} project(s) deleted successfully.`);

    } catch (e: any) {
      console.error('Failed to delete projects:', e);
      alert(`Error deleting projects: ${e.message || "Unknown error. Check console and backend logs."}`);
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading projects...</div>;
  }
  if (error) {
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  }

  const isAllSelected = projectsData.length > 0 && selectedProjectIds.length === projectsData.length && projectsData.every(p => typeof p.id === 'number');
  const isAnySelected = selectedProjectIds.length > 0;

  return (
    <div className="p-4 md:p-8 font-['Inter',_sans-serif] flex-grow bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <button
          onClick={handleDeleteSelected}
          disabled={!isAnySelected || isDeleting}
          className={`px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm flex items-center transition-colors duration-150 ease-in-out ${
            isAnySelected && !isDeleting 
            ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-2 focus:ring-offset-2' 
            : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          <Trash2 size={16} className="mr-2" />
          {isDeleting ? 'Deleting...' : `Delete Selected (${selectedProjectIds.length})`}
        </button>
      </div>

      {(!projectsData || projectsData.length === 0) ? (
         <div className="p-8 text-center">No projects found.</div>
      ) : (
        <div className="shadow-lg rounded-lg overflow-x-auto border border-gray-200 bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-center w-12">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    checked={isAllSelected}
                    onChange={handleSelectAllChange}
                    disabled={projectsData.length === 0}
                  />
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Product</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Microproduct</th>
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">WebView</th>
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">PDF</th>
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Update</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {projectsData.map((item, index) => {
                const detailPageUrl = item.microProduct?.webLinkPath || '#';
                return (
                  <tr key={item.id || `project-row-${index}`} // Use index as fallback key if id is undefined
                      className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 border-b border-gray-200`}>
                    <td className="py-3 px-4 text-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        checked={typeof item.id === 'number' && selectedProjectIds.includes(item.id)}
                        disabled={typeof item.id !== 'number'} // Disable if ID is not valid
                        onChange={(e) => {
                            if (typeof item.id === 'number') {
                                handleRowCheckboxChange(item.id, e.target.checked);
                            } else {
                                console.warn("Checkbox clicked for item with invalid ID:", item);
                            }
                        }}
                      />
                    </td>
                    <td className="text-left py-3 px-4">{item.projectName}</td>
                    <td className="text-left py-3 px-4">{item.product}</td>
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
      )}
    </div>
  );
};

export default ProjectsTable;
