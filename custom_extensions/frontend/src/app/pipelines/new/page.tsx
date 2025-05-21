// custom_extensions/frontend/src/app/custom-projects-ui/pipelines/new/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { PipelineCreateFormData } from '@/types/pipelines'; // Adjust path
import { PlusCircle, Trash2 } from 'lucide-react';

const AddPipelinePageComponent = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<PipelineCreateFormData>({
    pipeline_name: '',
    pipeline_description: '',
    is_prompts_data_collection: false,
    is_prompts_data_formating: false,
    prompts_data_collection_list: [''], // Start with one empty prompt input
    prompts_data_formating_list: [''],  // Start with one empty prompt input
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePromptChange = (
    listType: 'prompts_data_collection_list' | 'prompts_data_formating_list',
    index: number,
    value: string
  ) => {
    setFormData(prev => {
      const newList = [...prev[listType]];
      newList[index] = value;
      return { ...prev, [listType]: newList };
    });
  };

  const addPromptInput = (listType: 'prompts_data_collection_list' | 'prompts_data_formating_list') => {
    setFormData(prev => ({
      ...prev,
      [listType]: [...prev[listType], ''],
    }));
  };

  const removePromptInput = (listType: 'prompts_data_collection_list' | 'prompts_data_formating_list', index: number) => {
    setFormData(prev => ({
      ...prev,
      [listType]: prev[listType].filter((_, i) => i !== index),
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Filter out empty prompts before submitting
    const payload: PipelineCreateFormData = {
        ...formData,
        prompts_data_collection_list: formData.prompts_data_collection_list.filter(p => p.trim() !== ''),
        prompts_data_formating_list: formData.prompts_data_formating_list.filter(p => p.trim() !== ''),
    };


    try {
      const response = await fetch('/api/custom-projects-backend/pipelines/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: "Failed to create pipeline" }));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }
      alert('Pipeline created successfully!');
      router.push('/pipelines'); // Navigate to the pipelines list
    } catch (err: any) {
      console.error("Failed to submit pipeline:", err);
      setError(err.message || "An unknown error occurred.");
      alert(`Error: ${err.message || "Could not create pipeline."}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputBaseClasses = "block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black";
  const labelBaseClasses = "block text-sm font-medium text-black mb-1";


  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-black">Create New Pipeline</h1>
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="pipeline_name" className={labelBaseClasses}>Pipeline Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="pipeline_name"
              id="pipeline_name"
              value={formData.pipeline_name}
              onChange={handleInputChange}
              required
              className={inputBaseClasses}
            />
          </div>

          <div>
            <label htmlFor="pipeline_description" className={labelBaseClasses}>Pipeline Description</label>
            <textarea
              name="pipeline_description"
              id="pipeline_description"
              value={formData.pipeline_description || ''}
              onChange={handleInputChange}
              rows={3}
              className={inputBaseClasses}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_prompts_data_collection"
              id="is_prompts_data_collection"
              checked={formData.is_prompts_data_collection}
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
            />
            <label htmlFor="is_prompts_data_collection" className="text-sm text-black">Enable Data Collection Prompts?</label>
          </div>

          {formData.is_prompts_data_collection && (
            <div className="pl-6 space-y-2 border-l-2 border-indigo-200 py-2">
              <label className={`${labelBaseClasses} text-xs`}>Data Collection Prompts:</label>
              {formData.prompts_data_collection_list.map((prompt, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-black text-sm font-medium">{index + 1}.</span>
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => handlePromptChange('prompts_data_collection_list', index, e.target.value)}
                    placeholder="Enter prompt text"
                    className={`${inputBaseClasses} flex-grow`}
                  />
                  <button type="button" onClick={() => removePromptInput('prompts_data_collection_list', index)} className="p-1 text-red-500 hover:text-red-700" title="Remove Prompt">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addPromptInput('prompts_data_collection_list')} className="mt-1 flex items-center text-xs text-blue-600 hover:text-blue-800">
                <PlusCircle size={14} className="mr-1"/> Add Collection Prompt
              </button>
            </div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_prompts_data_formating" // Corrected name
              id="is_prompts_data_formating"   // Corrected id
              checked={formData.is_prompts_data_formating}
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
            />
            <label htmlFor="is_prompts_data_formating" className="text-sm text-black">Enable Data Formatting Prompts?</label> {/* Corrected htmlFor */}
          </div>

          {formData.is_prompts_data_formating && (
            <div className="pl-6 space-y-2 border-l-2 border-indigo-200 py-2">
              <label className={`${labelBaseClasses} text-xs`}>Data Formatting Prompts:</label>
              {formData.prompts_data_formating_list.map((prompt, index) => (
                <div key={index} className="flex items-center space-x-2">
                   <span className="text-black text-sm font-medium">{index + 1}.</span>
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => handlePromptChange('prompts_data_formating_list', index, e.target.value)}
                    placeholder="Enter prompt text"
                    className={`${inputBaseClasses} flex-grow`}
                  />
                  <button type="button" onClick={() => removePromptInput('prompts_data_formating_list', index)} className="p-1 text-red-500 hover:text-red-700" title="Remove Prompt">
                     <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addPromptInput('prompts_data_formating_list')} className="mt-1 flex items-center text-xs text-blue-600 hover:text-blue-800">
                <PlusCircle size={14} className="mr-1"/> Add Formatting Prompt
              </button>
            </div>
          )}


          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => router.push('/pipelines')} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.pipeline_name}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Saving...' : 'Save Pipeline'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default function AddPipelinePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading New Pipeline page...</div>}>
      <AddPipelinePageComponent />
    </Suspense>
  );
}
