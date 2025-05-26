// custom_extensions/frontend/src/components/ProjectsTable.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Link as LinkIcon, FileText, Trash2, Plus, Minus, ChevronDown, ChevronRight, Pencil } from 'lucide-react';

// Fallback for environment variables
const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || "";

interface MicroProduct {
  name: string;
  slug: string;
  webLinkPath?: string;
  pdfLinkPath?: string;
  details?: any; 
}

interface ProjectEntry {
  id: number;
  projectName: string;
  projectSlug: string;
  product: string;
  productSlug: string;
  microProduct: MicroProduct;
}

interface GroupedProjects {
  [projectName: string]: ProjectEntry[];
}

const ProjectsTable: React.FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProjectIds, setSelectedProjectIds] = useState<number[]>([]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    const projectsApiUrl = `/api/custom-projects-backend/projects`;
    try {
      const headers: HeadersInit = {};
      const devUserId = "dummy-onyx-user-id-007";
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const response = await fetch(projectsApiUrl, { headers });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }
      const data: ProjectEntry[] = await response.json();
      setProjectsData(data);
    } catch (e: any) {
      setError(e.message || "Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const groupedProjects = useMemo(() => {
    return projectsData.reduce((acc, project) => {
      const { projectName } = project;
      if (!acc[projectName]) {
        acc[projectName] = [];
      }
      acc[projectName].push(project);
      return acc;
    }, {} as GroupedProjects);
  }, [projectsData]);

  const handleToggleExpand = (projectName: string) => {
    setExpandedProjects(prev => ({ ...prev, [projectName]: !prev[projectName] }));
  };

  const handlePdfClick = (pdfPath: string | undefined) => {
    if (pdfPath) {
      const fullProxiedPdfUrl = `/api/custom-projects-backend/${pdfPath}`;
      window.open(fullProxiedPdfUrl, '_blank');
    } else {
      alert("PDF link not available for this item.");
    }
  };

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      const allIds = projectsData.map(p => p.id).filter(id => typeof id === 'number');
      setSelectedProjectIds(allIds);
    } else {
      setSelectedProjectIds([]);
    }
  };

  const handleRowCheckboxChange = (projectId: number, checked: boolean) => {
    if (typeof projectId !== 'number') return;
    setSelectedProjectIds(currentSelectedIds => {
      const newSelectedIdsSet = new Set(currentSelectedIds);
      if (checked) newSelectedIdsSet.add(projectId);
      else newSelectedIdsSet.delete(projectId);
      return Array.from(newSelectedIdsSet);
    });
  };

  const handleDeleteSelected = async () => {
    const validSelectedIds = selectedProjectIds.filter(id => typeof id === 'number');
    if (validSelectedIds.length === 0) {
      alert("No valid projects selected for deletion.");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete ${validSelectedIds.length} selected project(s)?`)) {
      return;
    }
    setIsDeleting(true);
    const deleteApiUrl = '/api/custom-projects-backend/projects/delete-multiple';
    try {
      const headers: HeadersInit = { 'Content-Type': 'application/json' };
      const devUserId = "dummy-onyx-user-id-for-testing";
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const response = await fetch(deleteApiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ project_ids: validSelectedIds }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: `HTTP error! status: ${response.status}` }));
        throw new Error(errorData.detail);
      }
      const result = await response.json();
      setProjectsData(prevProjects => prevProjects.filter(p => !validSelectedIds.includes(p.id)));
      setSelectedProjectIds([]);
      alert(result.detail || `${validSelectedIds.length} project(s) deleted successfully.`);
    } catch (e: any) {
      alert(`Error deleting projects: ${e.message || "Unknown error."}`);
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading projects...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  const allProjectIds = projectsData.map(p => p.id).filter(id => typeof id === 'number');
  const isAllSelected = allProjectIds.length > 0 && selectedProjectIds.length === allProjectIds.length;
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
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Edit</th>
              </tr>
            </thead>
            {Object.entries(groupedProjects).map(([projectName, entries], groupIndex) => {
              const isCurrentlyExpanded = !!expandedProjects[projectName];
              const projectIdsInGroup = entries.map(e => e.id).filter(id => typeof id === 'number');
              const areAllInGroupSelected = projectIdsInGroup.length > 0 && projectIdsInGroup.every(id => selectedProjectIds.includes(id));
              
              const handleSelectGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                  const isChecked = event.target.checked;
                  setSelectedProjectIds(currentSelectedIds => {
                      const newSelectedIdsSet = new Set(currentSelectedIds);
                      projectIdsInGroup.forEach(id => isChecked ? newSelectedIdsSet.add(id) : newSelectedIdsSet.delete(id));
                      return Array.from(newSelectedIdsSet);
                  });
              };

              if (entries.length === 1) {
                const item = entries[0];
                const detailPageUrl = item.microProduct?.webLinkPath || '#';
                const isRowSelected = typeof item.id === 'number' && selectedProjectIds.includes(item.id);
                const rowBackground = groupIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white';

                return (
                    <tbody className="text-gray-700" key={item.id || `project-row-single-${groupIndex}`}>
                        <tr className={`${rowBackground} hover:bg-gray-100 border-b border-gray-200 project-item-row project-item-row-expanded`}>
                             <td className="py-3 px-4 text-center">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    checked={isRowSelected} disabled={typeof item.id !== 'number'}
                                    onChange={(e) => {if (typeof item.id === 'number') handleRowCheckboxChange(item.id, e.target.checked)}} />
                            </td>
                            <td className="text-left py-3 px-4">{item.projectName}</td>
                            <td className="text-left py-3 px-4">{item.product}</td>
                            <td className="text-left py-3 px-4">{item.microProduct?.name || 'N/A'}</td>
                            <td className="text-center py-3 px-4">
                                {item.microProduct?.webLinkPath ? (
                                <Link href={detailPageUrl} legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 inline-block"><LinkIcon size={18} /></a>
                                </Link>
                                ) : <span className="text-gray-400"><LinkIcon size={18} /></span>}
                            </td>
                            <td className="text-center py-3 px-4">
                                <button onClick={() => handlePdfClick(item.microProduct?.pdfLinkPath)} disabled={!item.microProduct?.pdfLinkPath}
                                className={`text-red-500 hover:text-red-700 inline-block ${!item.microProduct?.pdfLinkPath ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                <FileText size={18} />
                                </button>
                            </td>
                            <td className="text-center py-3 px-4">
                                <button
                                    onClick={() => router.push(`/projects/edit/${item.id}`)}
                                    disabled={typeof item.id !== 'number'}
                                    className={`text-blue-600 hover:text-blue-800 ${typeof item.id !== 'number' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    title="Edit Project"
                                >
                                    <Pencil size={18} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                );
              }

              return (
                <tbody className="text-gray-700" key={projectName}>
                  <tr className={`${groupIndex % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} border-b border-gray-300 hover:bg-gray-200 cursor-pointer`}
                      onClick={() => handleToggleExpand(projectName)}>
                    <td className="py-3 px-4 text-center">
                       <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        checked={areAllInGroupSelected} onChange={handleSelectGroupChange} disabled={projectIdsInGroup.length === 0} 
                        onClick={(e) => e.stopPropagation()} />
                    </td>
                    <td colSpan={6} className="text-left py-3 px-4 font-semibold"> {/* Adjusted colSpan */}
                      <div className="flex items-center">
                        {isCurrentlyExpanded ? <ChevronDown size={18} className="mr-2 expand-collapse-icon" /> : <ChevronRight size={18} className="mr-2 expand-collapse-icon" />}
                        {projectName} ({entries.length})
                      </div>
                    </td>
                  </tr>
                  
                  {entries.map((item, itemIndex) => {
                    const detailPageUrl = item.microProduct?.webLinkPath || '#';
                    const isRowSelected = typeof item.id === 'number' && selectedProjectIds.includes(item.id);
                    
                    const itemRowBackground = isCurrentlyExpanded 
                                              ? (itemIndex % 2 === 0 ? 'expanded-group-item-even' : 'expanded-group-item-odd')
                                              : (itemIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50');

                    const itemClasses = `
                      project-item-row
                      ${isCurrentlyExpanded ? 'project-item-row-expanded' : 'project-item-row-collapsed'}
                      ${itemRowBackground}
                      ${isCurrentlyExpanded ? 'border-b border-gray-200' : 'border-transparent'}
                       hover:bg-gray-100 
                    `;
                    const cellPaddingClass = isCurrentlyExpanded ? "py-3 px-4" : "p-0";
                    const firstCellPaddingClass = isCurrentlyExpanded ? "py-3 px-4 pl-10" : "p-0";

                    return (
                      <tr key={item.id || `project-row-${groupIndex}-${itemIndex}`} className={itemClasses}>
                        <td className={`text-center ${cellPaddingClass}`}>
                          <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            checked={isRowSelected} disabled={typeof item.id !== 'number'}
                            onChange={(e) => {if (typeof item.id === 'number') handleRowCheckboxChange(item.id, e.target.checked)}} />
                        </td>
                        <td className={`text-left ${firstCellPaddingClass}`}></td>
                        <td className={`text-left ${cellPaddingClass}`}>{item.product}</td>
                        <td className={`text-left ${cellPaddingClass}`}>{item.microProduct?.name || 'N/A'}</td>
                        <td className={`text-center ${cellPaddingClass}`}>
                          {item.microProduct?.webLinkPath ? (
                            <Link href={detailPageUrl} legacyBehavior>
                              <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 inline-block"><LinkIcon size={18} /></a>
                            </Link>
                          ) : <span className="text-gray-400"><LinkIcon size={18} /></span>}
                        </td>
                        <td className={`text-center ${cellPaddingClass}`}>
                          <button onClick={() => handlePdfClick(item.microProduct?.pdfLinkPath)} disabled={!item.microProduct?.pdfLinkPath}
                           className={`text-red-500 hover:text-red-700 inline-block ${!item.microProduct?.pdfLinkPath ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            <FileText size={18} />
                          </button>
                        </td>
                        <td className={`text-center ${cellPaddingClass}`}>
                          <button
                            onClick={() => router.push(`/projects/edit/${item.id}`)}
                             disabled={typeof item.id !== 'number'}
                            className={`text-blue-600 hover:text-blue-800 ${typeof item.id !== 'number' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            title="Edit Project"
                          >
                            <Pencil size={18} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectsTable;
