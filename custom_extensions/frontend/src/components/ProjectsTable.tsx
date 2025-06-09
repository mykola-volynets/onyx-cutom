// custom_extensions/frontend/src/components/ProjectsTable.tsx
"use client";

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import {
  FileText,
  Trash2,
  ChevronDown,
  ChevronRight,
  ListOrdered,
  Edit2
} from 'lucide-react';
import { ProjectListItem } from '@/types/trainingPlan';

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || '/api/custom-projects-backend';

interface GroupedProjects {
  [projectName: string]: ProjectListItem[];
}

const ProjectsTable: React.FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProjectIds, setSelectedProjectIds] = useState<number[]>([]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});
  
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editingItemType, setEditingItemType] = useState<'projectName' | 'instanceName' | null>(null);
  const [editText, setEditText] = useState<string>('');

  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    const projectsApiUrl = `${CUSTOM_BACKEND_URL}/projects`;
    try {
      const headers: HeadersInit = {};
      const devUserId = "dummy-onyx-user-id-for-testing";
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const response = await fetch(projectsApiUrl, { headers, cache: 'no-store' });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText.substring(0, 200)}`);
      }
      const data: ProjectListItem[] = await response.json();
      setProjectsData(data);
      const initialExpansionState: Record<string, boolean> = {};
      data.forEach(project => {
        if (initialExpansionState[project.projectName] === undefined) {
          initialExpansionState[project.projectName] = false;
        }
      });
      setExpandedProjects(initialExpansionState);
    } catch (e: any) {
      setError(e.message || "Failed to load products.");
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
      alert("No valid products selected for deletion.");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete ${validSelectedIds.length} selected products?`)) {
      return;
    }
    setIsDeleting(true);
    const deleteApiUrl = `${CUSTOM_BACKEND_URL}/projects/delete-multiple`;
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
      await response.json();
      fetchProjects();
    } catch (e: any) {
      alert(`Error deleting projects: ${e.message || "Unknown error."}`);
    } finally {
      setIsDeleting(false);
      setSelectedProjectIds([]);
    }
  };

  const startInlineEdit = (item: ProjectListItem, type: 'projectName' | 'instanceName') => {
    if (typeof item.id !== 'number') return;
    setEditingItemId(item.id);
    setEditingItemType(type);
    if (type === 'projectName') {
      setEditText(item.projectName);
    } else {
      const instanceDisplayName = item.microproduct_name || item.design_template_name || '';
      setEditText(instanceDisplayName);
    }
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  const handleUpdateName = async (item: ProjectListItem) => {
    if (typeof item.id !== 'number') {
      setEditingItemId(null);
      setEditingItemType(null);
      return;
    }
    if (!editText.trim()) {
      const originalName = editingItemType === 'projectName'
        ? item.projectName
        : (item.microproduct_name || item.design_template_name || '');
      if (!originalName.trim() || originalName === "N/A") {
        setEditingItemId(null);
        setEditingItemType(null);
        setEditText('');
        return;
      }
      setEditingItemId(null);
      setEditingItemType(null);
      return;
    }

    const updateApiUrl = `${CUSTOM_BACKEND_URL}/projects/update/${item.id}`;
    const payload: { projectName?: string; microProductName?: string } = {};

    if (editingItemType === 'projectName') {
      if (item.projectName === editText) {
        setEditingItemId(null); setEditingItemType(null); return;
      }
      payload.projectName = editText;
    } else if (editingItemType === 'instanceName') {
      const currentInstanceName = item.microproduct_name || item.design_template_name || '';
      if (currentInstanceName === editText) {
        setEditingItemId(null); setEditingItemType(null); return;
      }
      payload.microProductName = editText;
    }

    if (Object.keys(payload).length === 0) {
      setEditingItemId(null);
      setEditingItemType(null);
      return;
    }

    try {
      const headers: HeadersInit = { 'Content-Type': 'application/json' };
      const devUserId = "dummy-onyx-user-id-for-testing";
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const response = await fetch(updateApiUrl, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: `HTTP error! status: ${response.status}` }));
        throw new Error(errorData.detail || 'Failed to update name.');
      }
      fetchProjects();
    } catch (e: any) {
      alert(`Error updating name: ${e.message || 'Unknown error.'}`);
    } finally {
      setEditingItemId(null);
      setEditingItemType(null);
    }
  };

  const handleEditBlur = (item: ProjectListItem) => {
    handleUpdateName(item);
  };

  const handleEditKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, item: ProjectListItem) => {
    if (event.key === 'Enter') {
      handleUpdateName(item);
    } else if (event.key === 'Escape') {
      setEditingItemId(null);
      setEditingItemType(null);
      setEditText('');
    }
  };

  if (loading) return <div className="p-8 text-center">Loading products...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  const allProjectIds = projectsData.map(p => p.id).filter(id => typeof id === 'number');
  const isAllSelected = allProjectIds.length > 0 && selectedProjectIds.length === allProjectIds.length;
  const isAnySelected = selectedProjectIds.length > 0;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button
          onClick={handleDeleteSelected}
          disabled={!isAnySelected || isDeleting}
          className={`px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm flex items-center transition-colors duration-150 ease-in-out ${isAnySelected && !isDeleting
            ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-2 focus:ring-offset-2'
            : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          <Trash2 size={16} className="mr-2" />
          {isDeleting ? 'Deleting...' : `Delete Selected (${selectedProjectIds.length})`}
        </button>
      </div>

      {(!projectsData || projectsData.length === 0) ? (
        <div className="p-8 text-center">No products found. <Link href="/add-to-project" className="text-blue-600 hover:underline">Add a new one?</Link></div>
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
                <th className="w-full text-left py-3 px-4 uppercase font-semibold text-sm">Projects/Products</th>
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

              const groupHeaderBg = groupIndex % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50';

              return (
                <tbody className="text-gray-700" key={projectName + groupIndex}>
                  {entries.length > 1 && (
                    <tr
                      className={`${groupHeaderBg} border-b border-gray-300 hover:bg-gray-200 cursor-pointer`}
                      onClick={() => handleToggleExpand(projectName)}>
                      <td className="py-3 px-4 text-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          checked={areAllInGroupSelected} onChange={handleSelectGroupChange} disabled={projectIdsInGroup.length === 0}
                          onClick={(e) => e.stopPropagation()} />
                      </td>
                      <td colSpan={1} className="text-left py-3 px-4 font-semibold">
                        <div className="flex items-center">
                          {isCurrentlyExpanded ? <ChevronDown size={18} className="mr-2 expand-collapse-icon" /> : <ChevronRight size={18} className="mr-2 expand-collapse-icon" />}
                          {projectName} ({entries.length} products)
                        </div>
                      </td>
                    </tr>
                  )}

                  {entries.map((item, itemIndex) => {
                    const detailPageUrl = `/projects/view/${item.id}`;
                    const isRowSelected = typeof item.id === 'number' && selectedProjectIds.includes(item.id);
                    const singleItemGroupBg = entries.length === 1 ? (groupIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white') : (itemIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50');
                    
                    const itemRowClasses = `
                      project-item-row 
                      ${entries.length > 1 ? (isCurrentlyExpanded ? 'expanded-group-item-visible' : 'expanded-group-item-hidden') : ''}
                      ${singleItemGroupBg}
                       border-b border-gray-200 
                    `;

                    const isEditingThisItem = editingItemId === item.id &&
                                            (entries.length === 1 ? editingItemType === 'projectName' : editingItemType === 'instanceName');

                    return (
                      <tr 
                        key={item.id || `project-row-${groupIndex}-${itemIndex}`} 
                        className={itemRowClasses}
                        onMouseEnter={() => typeof item.id === 'number' && setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                      >
                        <td className="py-3 px-4 text-center">
                          <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            checked={isRowSelected} disabled={typeof item.id !== 'number'}
                            onChange={(e) => { if (typeof item.id === 'number') handleRowCheckboxChange(item.id, e.target.checked) }} />
                        </td>
                        
                        <td className={`w-full text-left py-3 px-4 ${entries.length > 1 ? 'pl-10' : ''}`}>
                          {isEditingThisItem ? (
                            entries.length === 1 ? (
                              <input
                                type="text" value={editText} onChange={handleEditChange}
                                onBlur={() => handleEditBlur(item)} onKeyDown={(e) => handleEditKeyDown(e, item)}
                                autoFocus className="form-input w-full px-2 py-1 border border-indigo-500 rounded-md text-sm"
                                onClick={(e) => e.stopPropagation()}
                              />
                            ) : (
                              <div className="flex items-center">
                                {(item.design_microproduct_type === "Training Plan" || item.design_microproduct_type === "Course Module") && <ListOrdered size={16} className="mr-2 text-gray-500 flex-shrink-0" />}
                                {item.design_microproduct_type === "PDF Lesson" && <FileText size={16} className="mr-2 text-gray-500 flex-shrink-0" />}
                                <input
                                  type="text" value={editText} onChange={handleEditChange}
                                  onBlur={() => handleEditBlur(item)} onKeyDown={(e) => handleEditKeyDown(e, item)}
                                  autoFocus className="form-input w-full px-2 py-1 border border-indigo-500 rounded-md text-sm"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            )
                          ) : (
                            <div className="flex items-center justify-between group">
                              <Link href={detailPageUrl} className="block flex-grow cursor-pointer py-1">
                                {entries.length === 1 ? (
                                  <span className="hover:text-blue-600 hover:underline">
                                    {item.projectName}
                                  </span>
                                ) : (
                                  <div className="flex items-center hover:text-blue-600">
                                    {(item.design_microproduct_type === "Training Plan" || item.design_microproduct_type === "Course Module") && <ListOrdered size={16} className="mr-2 text-gray-500 flex-shrink-0" />}
                                    {item.design_microproduct_type === "PDF Lesson" && <FileText size={16} className="mr-2 text-gray-500 flex-shrink-0" />}
                                    <span className="hover:underline">{item.microproduct_name || item.design_template_name || 'N/A'}</span>
                                  </div>
                                )}
                              </Link>
                              {hoveredItemId === item.id && typeof item.id === 'number' && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const typeToEdit = entries.length === 1 ? 'projectName' : 'instanceName';
                                    startInlineEdit(item, typeToEdit);
                                  }}
                                  className="p-1 ml-2 text-gray-400 hover:text-blue-600 focus:outline-none"
                                  aria-label="Edit name"
                                >
                                  <Edit2 size={16} />
                                </button>
                              )}
                            </div>
                          )}
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
      <style jsx>{`
        .expanded-group-item-hidden {
          display: none;
        }
        .expanded-group-item-visible {
          display: table-row; 
        }
      `}</style>
    </div>
  );
};

export default ProjectsTable;
