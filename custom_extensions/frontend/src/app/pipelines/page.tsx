// custom_extensions/frontend/src/app/pipelines/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // For navigation
import { Pipeline } from '@/types/pipelines';
import { Eye, XCircle, CheckCircle2, Plus, Edit3, Trash2 } from 'lucide-react';

const PipelinesPageComponent = () => {
  const router = useRouter();
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPipelines = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/custom-projects-backend/pipelines');
      if (!response.ok) {
        const errData = await response.json().catch(() => ({ detail: "Failed to fetch products"}));
        throw new Error(errData.detail || `HTTP error! status: ${response.status}`);
      }
      const data: Pipeline[] = await response.json();
      setPipelines(data);
    } catch (err: any) {
      console.error("Failed to fetch products:", err);
      setError(err.message || "Could not load prpjects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPipelines();
  }, []);

  const handleEdit = (pipelineId: number) => {
    router.push(`/pipelines/edit/${pipelineId}`);
  };

  const handleDelete = async (pipelineId: number, pipelineName: string) => {
    if (window.confirm(`Are you sure you want to delete the product "${pipelineName}"? This action cannot be undone.`)) {
      try {
        const response = await fetch(`/api/custom-projects-backend/pipelines/delete/${pipelineId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ detail: "Failed to delete product" }));
          throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
        }
        alert('Product deleted successfully!');
        // Refresh the list of products
        fetchPipelines();
      } catch (err: any) {
        console.error("Failed to delete product:", err);
        setError(err.message || "Could not delete product.");
        alert(`Error: ${err.message || "Could not delete product."}`);
      }
    }
  };


  if (loading) {
    return <div className="p-8 text-center font-['Inter',_sans-serif] text-black">Loading project...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500 font-['Inter',_sans-serif]">Error: {error}</div>;
  }

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Products</h1>
          <Link href="/pipelines/new" legacyBehavior>
            <a className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Plus size={18} className="mr-2" /> Add New Product
            </a>
          </Link>
        </div>

        {pipelines.length === 0 && !loading ? (
          <div className="text-center text-gray-500 py-10">
            No products configured yet. Click &quot;Add New Product&quot; to get started.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Collects Data
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Formats Data
                  </th>
                  {/* Removed Created At, Collection Prompts, Formatting Prompts direct view */}
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pipelines.map((pipeline) => (
                  <tr key={pipeline.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                      {pipeline.pipeline_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-black break-words max-w-xs whitespace-pre-wrap">
                      {pipeline.pipeline_description || <span className="text-xs text-gray-400 italic">N/A</span>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black text-center">
                      {pipeline.is_prompts_data_collection ?
                        <CheckCircle2 className="h-5 w-5 text-green-500 inline-block" aria-label="Yes" /> :
                        <XCircle className="h-5 w-5 text-red-500 inline-block" aria-label="No" />
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black text-center">
                      {pipeline.is_prompts_data_formating ?
                        <CheckCircle2 className="h-5 w-5 text-green-500 inline-block" aria-label="Yes" /> :
                        <XCircle className="h-5 w-5 text-red-500 inline-block" aria-label="No" />
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center space-x-2">
                      <button
                        onClick={() => handleEdit(pipeline.id)}
                        className="text-indigo-600 hover:text-indigo-900 inline-flex items-center text-xs p-1"
                        title="Edit Project"
                        aria-label={`Edit project ${pipeline.pipeline_name}`}
                      >
                        <Edit3 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(pipeline.id, pipeline.pipeline_name)}
                        className="text-red-600 hover:text-red-900 inline-flex items-center text-xs p-1"
                        title="Delete Project"
                        aria-label={`Delete project ${pipeline.pipeline_name}`}
                      >
                        <Trash2 size={16} />
                      </button>
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

export default function PipelinesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading Products page...</div>}>
      <PipelinesPageComponent />
    </Suspense>
  );
}
