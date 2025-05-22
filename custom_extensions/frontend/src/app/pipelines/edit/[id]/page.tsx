// custom_extensions/frontend/src/app/pipelines/edit/[id]/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { PipelineCreateFormData, PipelineEditData, PROMPT_TEMPLATES } from '@/types/pipelines'; 
import { PlusCircle, Trash2, Save, ArrowUpCircle, ArrowDownCircle, BookOpen } from 'lucide-react';

const EditPipelinePageComponent = () => {
  const router = useRouter();
  const params = useParams();
  const pipelineId = params.id ? parseInt(params.id as string) : null;

  const [formData, setFormData] = useState<PipelineCreateFormData>({
    pipeline_name: '',
    pipeline_description: '',
    is_prompts_data_collection: false,
    is_prompts_data_formating: false,
    prompts_data_collection_list: [''],
    prompts_data_formating_list: [''],
  });
  const [initialPipelineName, setInitialPipelineName] = useState<string>(""); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pipelineId) {
      const fetchPipelineData = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/custom-projects-backend/pipelines/${pipelineId}`);
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ detail: "Failed to fetch project data" }));
            throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
          }
          const data: PipelineEditData = await response.json();
          setFormData({
            id: data.id,
            pipeline_name: data.pipeline_name,
            pipeline_description: data.pipeline_description || '',
            is_prompts_data_collection: data.is_prompts_data_collection,
            is_prompts_data_formating: data.is_prompts_data_formating,
            prompts_data_collection_list: data.prompts_data_collection_list.length > 0 ? data.prompts_data_collection_list : [''],
            prompts_data_formating_list: data.prompts_data_formating_list.length > 0 ? data.prompts_data_formating_list : [''],
          });
          setInitialPipelineName(data.pipeline_name);
        } catch (err: any) {
          console.error("Failed to fetch product data:", err);
          setError(err.message || "Could not load product data.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchPipelineData();
    } else {
      setError("Product ID not found.");
      setIsLoading(false);
    }
  }, [pipelineId]);


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

  const movePrompt = (
    listType: 'prompts_data_collection_list' | 'prompts_data_formating_list',
    index: number,
    direction: 'up' | 'down'
  ) => {
    setFormData(prev => {
      const newList = [...prev[listType]];
      const item = newList[index];
      if (direction === 'up' && index > 0) {
        newList.splice(index, 1);
        newList.splice(index - 1, 0, item);
      } else if (direction === 'down' && index < newList.length - 1) {
        newList.splice(index, 1);
        newList.splice(index + 1, 0, item);
      }
      return { ...prev, [listType]: newList };
    });
  };

  const handleTemplateSelect = (
    listType: 'prompts_data_collection_list' | 'prompts_data_formating_list',
    index: number,
    templateId: string
  ) => {
    const selectedTemplate = PROMPT_TEMPLATES.find(t => t.id === templateId);
    if (selectedTemplate) {
      handlePromptChange(listType, index, selectedTemplate.templateText);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pipelineId) {
        setError("Cannot update product without an ID.");
        return;
    }
    setIsSubmitting(true);
    setError(null);

    const payload: PipelineCreateFormData = {
        ...formData, 
        prompts_data_collection_list: formData.prompts_data_collection_list.filter(p => p.trim() !== ''),
        prompts_data_formating_list: formData.prompts_data_formating_list.filter(p => p.trim() !== ''),
    };

    try {
      const response = await fetch(`/api/custom-projects-backend/pipelines/update/${pipelineId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: "Failed to update product" }));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }
      alert('Product updated successfully!');
      router.push('/pipelines'); 
    } catch (err: any) {
      console.error("Failed to submit product update:", err);
      setError(err.message || "An unknown error occurred.");
      alert(`Error: ${err.message || "Could not update product."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClasses = "block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black";
  const labelBaseClasses = "block text-sm font-medium text-black mb-1";
  const buttonBaseClasses = "p-1 text-gray-600 hover:text-gray-800 disabled:opacity-50";

  const renderPromptInputs = (listType: 'prompts_data_collection_list' | 'prompts_data_formating_list', sectionTitle: string) => (
    <div className="pl-6 space-y-3 border-l-2 border-indigo-200 py-2">
      <label className={`${labelBaseClasses} text-sm font-semibold`}>{sectionTitle}:</label>
      {formData[listType].map((prompt, index) => (
        <div key={`${listType}-${index}`} className="space-y-1 p-2 border border-gray-200 rounded-md">
          <div className="flex items-start space-x-2">
            <span className="text-black text-sm font-medium pt-2">{index + 1}.</span>
            <textarea
              value={prompt}
              onChange={(e) => handlePromptChange(listType, index, e.target.value)}
              placeholder="Enter prompt text or select a template"
              className={`${inputBaseClasses} flex-grow min-h-[80px]`}
              rows={4}
            />
            <div className="flex flex-col space-y-1 items-center pt-1">
              <button type="button" onClick={() => movePrompt(listType, index, 'up')} disabled={index === 0} className={buttonBaseClasses} title="Move Up">
                <ArrowUpCircle size={18} />
              </button>
              <button type="button" onClick={() => movePrompt(listType, index, 'down')} disabled={index === formData[listType].length - 1} className={buttonBaseClasses} title="Move Down">
                <ArrowDownCircle size={18} />
              </button>
              <button type="button" onClick={() => removePromptInput(listType, index)} className={`${buttonBaseClasses} text-red-500 hover:text-red-700`} title="Remove Prompt">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-6">
            <BookOpen size={16} className="text-gray-500" />
            <select
              onChange={(e) => handleTemplateSelect(listType, index, e.target.value)}
              className="text-xs p-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-black bg-white"
              value="" 
            >
              <option value="" disabled>Select a template...</option>
              {PROMPT_TEMPLATES.map(template => (
                <option key={template.id} value={template.id}>{template.name}</option>
              ))}
            </select>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => addPromptInput(listType)} className="mt-1 flex items-center text-xs text-blue-600 hover:text-blue-800">
        <PlusCircle size={14} className="mr-1"/> Add {sectionTitle.replace(" Prompts:", "")} Prompt
      </button>
    </div>
  );


  if (isLoading) {
    return <div className="p-8 text-center font-['Inter',_sans-serif] text-black">Loading product data...</div>;
  }

  if (error && !formData.pipeline_name && !initialPipelineName) { 
    return <div className="p-8 text-center text-red-500 font-['Inter',_sans-serif]">Error: {error}</div>;
  }

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-black">Edit Product: {initialPipelineName || "..."}</h1>
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="pipeline_name" className={labelBaseClasses}>Product Name <span className="text-red-500">*</span></label>
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
            <label htmlFor="pipeline_description" className={labelBaseClasses}>Product Description</label>
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

          {formData.is_prompts_data_collection && renderPromptInputs('prompts_data_collection_list', 'Data Collection Prompts')}

          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_prompts_data_formating"
              id="is_prompts_data_formating"
              checked={formData.is_prompts_data_formating}
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
            />
            <label htmlFor="is_prompts_data_formating" className="text-sm text-black">Enable Data Formatting Prompts?</label>
          </div>

          {formData.is_prompts_data_formating && renderPromptInputs('prompts_data_formating_list', 'Data Formatting Prompts')}


          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => router.push('/pipelines')} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.pipeline_name || isLoading}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
            >
              <Save size={16} className="mr-2 inline-block" />
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default function EditPipelinePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading Edit Product page...</div>}>
      <EditPipelinePageComponent />
    </Suspense>
  );
}
