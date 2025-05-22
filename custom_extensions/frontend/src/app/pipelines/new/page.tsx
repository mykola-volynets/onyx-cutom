// custom_extensions/frontend/src/app/pipelines/new/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, Suspense, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { PipelineFormData, PROMPT_TEMPLATES, PromptTemplate } from '@/types/pipelines';
import { PlusCircle, Trash2, ArrowUpCircle, ArrowDownCircle, BookOpen, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

const AddPipelinePageComponent = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<PipelineFormData>({
    pipeline_name: '',
    pipeline_description: '',
    is_discovery_prompts: false,
    is_structuring_prompts: false,
    discovery_prompts_list: [''],
    structuring_prompts_list: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedStructuringTemplates, setSelectedStructuringTemplates] = useState<(PromptTemplate | null)[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDiscoveryPromptChange = (index: number, value: string) => {
    setFormData(prev => {
      const newList = [...prev.discovery_prompts_list];
      newList[index] = value;
      return { ...prev, discovery_prompts_list: newList };
    });
  };

  const addDiscoveryPromptInput = () => {
    setFormData(prev => ({
      ...prev,
      discovery_prompts_list: [...prev.discovery_prompts_list, ''],
    }));
  };

  const removeDiscoveryPromptInput = (index: number) => {
    setFormData(prev => ({
      ...prev,
      discovery_prompts_list: prev.discovery_prompts_list.filter((_, i) => i !== index),
    }));
  };
  
  const moveDiscoveryPrompt = (index: number, direction: 'up' | 'down') => {
    setFormData(prev => {
        const newList = [...prev.discovery_prompts_list];
        const item = newList[index];
        if (direction === 'up' && index > 0) {
            newList.splice(index, 1);
            newList.splice(index - 1, 0, item);
        } else if (direction === 'down' && index < newList.length - 1) {
            newList.splice(index, 1);
            newList.splice(index + 1, 0, item);
        }
        return { ...prev, discovery_prompts_list: newList };
    });
  };

  const handleStructuringTemplateSelect = (index: number, templateId: string) => {
    const selectedTemplate = PROMPT_TEMPLATES.find(t => t.id === templateId);
    if (selectedTemplate) {
      setFormData(prev => {
        const newList = [...prev.structuring_prompts_list];
        newList[index] = selectedTemplate.templateText; 
        return { ...prev, structuring_prompts_list: newList };
      });
      setSelectedStructuringTemplates(prev => {
        const newSelected = [...prev];
        newSelected[index] = selectedTemplate;
        return newSelected;
      });
    } else { 
        setFormData(prev => {
            const newList = [...prev.structuring_prompts_list];
            newList[index] = ""; 
            return { ...prev, structuring_prompts_list: newList };
          });
          setSelectedStructuringTemplates(prev => {
            const newSelected = [...prev];
            newSelected[index] = null;
            return newSelected;
          });
    }
  };

  const addStructuringPromptSlot = () => {
    setFormData(prev => ({
      ...prev,
      structuring_prompts_list: [...prev.structuring_prompts_list, ''], 
    }));
    setSelectedStructuringTemplates(prev => [...prev, null]); 
  };

  const removeStructuringPromptSlot = (index: number) => {
    setFormData(prev => ({
      ...prev,
      structuring_prompts_list: prev.structuring_prompts_list.filter((_, i) => i !== index),
    }));
    setSelectedStructuringTemplates(prev => prev.filter((_, i) => i !== index));
  };

  const moveStructuringPrompt = (index: number, direction: 'up' | 'down') => {
    setFormData(prevFormData => {
        const newList = [...prevFormData.structuring_prompts_list];
        const item = newList[index];
        // Changed 'let' to 'const' here as per ESLint suggestion
        const newSelectedTemplates = [...selectedStructuringTemplates]; 
        const selectedItem = newSelectedTemplates[index];

        if (direction === 'up' && index > 0) {
            newList.splice(index, 1);
            newList.splice(index - 1, 0, item);
            newSelectedTemplates.splice(index, 1);
            newSelectedTemplates.splice(index - 1, 0, selectedItem);
        } else if (direction === 'down' && index < newList.length - 1) {
            newList.splice(index, 1);
            newList.splice(index + 1, 0, item);
            newSelectedTemplates.splice(index, 1);
            newSelectedTemplates.splice(index + 1, 0, selectedItem);
        }
        setSelectedStructuringTemplates(newSelectedTemplates);
        return { ...prevFormData, structuring_prompts_list: newList };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload: PipelineFormData = { 
      ...formData,
      discovery_prompts_list: formData.discovery_prompts_list.filter(p => p.trim() !== ''),
      structuring_prompts_list: formData.structuring_prompts_list.filter(p => p.trim() !== ''),
    };
    delete payload.id;

    try {
      const response = await fetch('/api/custom-projects-backend/pipelines/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: "Failed to create product" }));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }
      alert('Product created successfully!');
      router.push('/pipelines');
    } catch (err: any) {
      console.error("Failed to submit product:", err);
      setError(err.message || "An unknown error occurred.");
      alert(`Error: ${err.message || "Could not create product."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClasses = "block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black";
  const labelBaseClasses = "block text-sm font-medium text-black mb-1";
  const buttonBaseClasses = "p-1 text-gray-600 hover:text-gray-800 disabled:opacity-50";

  const renderDiscoveryPromptInputs = () => (
    <div className="pl-6 space-y-3 border-l-2 border-indigo-200 py-2">
      <label className={`${labelBaseClasses} text-sm font-semibold`}>Discovery Prompts:</label>
      {formData.discovery_prompts_list.map((prompt, index) => (
        <div key={`discovery-${index}`} className="space-y-1 p-2 border border-gray-200 rounded-md">
          <div className="flex items-start space-x-2">
            <span className="text-black text-sm font-medium pt-2">{index + 1}.</span>
            <textarea
              value={prompt}
              onChange={(e) => handleDiscoveryPromptChange(index, e.target.value)}
              placeholder="Enter discovery prompt text"
              className={`${inputBaseClasses} flex-grow min-h-[80px]`}
              rows={3}
            />
            <div className="flex flex-col space-y-1 items-center pt-1">
              <button type="button" onClick={() => moveDiscoveryPrompt(index, 'up')} disabled={index === 0} className={buttonBaseClasses} title="Move Up">
                <ArrowUpCircle size={18} />
              </button>
              <button type="button" onClick={() => moveDiscoveryPrompt(index, 'down')} disabled={index === formData.discovery_prompts_list.length - 1} className={buttonBaseClasses} title="Move Down">
                <ArrowDownCircle size={18} />
              </button>
              <button type="button" onClick={() => removeDiscoveryPromptInput(index)} className={`${buttonBaseClasses} text-red-500 hover:text-red-700`} title="Remove Prompt">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={addDiscoveryPromptInput} className="mt-1 flex items-center text-xs text-blue-600 hover:text-blue-800">
        <PlusCircle size={14} className="mr-1"/> Add Discovery Prompt
      </button>
    </div>
  );

  const renderStructuringPromptInputs = () => (
    <div className="pl-6 space-y-3 border-l-2 border-teal-200 py-2">
      <label className={`${labelBaseClasses} text-sm font-semibold`}>Structuring Prompts (select from templates):</label>
      {formData.structuring_prompts_list.map((promptText, index) => {
        const currentSelectedTemplate = selectedStructuringTemplates[index];
        const selectedTemplateId = PROMPT_TEMPLATES.find(t => t.templateText === promptText)?.id || "";

        return (
          <div key={`structuring-${index}`} className="space-y-1 p-3 border border-gray-200 rounded-md bg-gray-50">
            <div className="flex items-start space-x-3">
                <span className="text-black text-sm font-medium pt-2">{index + 1}.</span>
                <div className="flex-grow space-y-2">
                <div className="flex items-center space-x-2">
                    <BookOpen size={16} className="text-gray-500 flex-shrink-0" />
                    <select
                    value={selectedTemplateId} 
                    onChange={(e) => handleStructuringTemplateSelect(index, e.target.value)}
                    className="flex-grow text-sm p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-black bg-white"
                    >
                    <option value="" disabled>Select a template...</option>
                    {PROMPT_TEMPLATES.map(template => (
                        <option key={template.id} value={template.id}>{template.name}</option>
                    ))}
                    </select>
                </div>
                {currentSelectedTemplate && (
                    <div className="p-2 border rounded-md bg-white flex items-start gap-3">
                        {currentSelectedTemplate.picture ? (
                             <Image src={currentSelectedTemplate.picture} alt={currentSelectedTemplate.name} width={64} height={64} className="rounded object-cover w-16 h-16 flex-shrink-0" />
                        ) : (
                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded flex-shrink-0">
                                <ImageIcon size={24} className="text-gray-400"/>
                            </div>
                        )}
                        <div>
                            <p className="text-xs text-gray-700 font-semibold">{currentSelectedTemplate.name}</p>
                            <p className="text-xs text-gray-500 mt-1 break-all">Text: &quot;{currentSelectedTemplate.templateText.substring(0,100)}{currentSelectedTemplate.templateText.length > 100 ? "..." : ""}&quot;</p>
                        </div>
                    </div>
                )}
                </div>
                <div className="flex flex-col space-y-1 items-center pt-1">
                <button type="button" onClick={() => moveStructuringPrompt(index, 'up')} disabled={index === 0} className={buttonBaseClasses} title="Move Up">
                    <ArrowUpCircle size={18} />
                </button>
                <button type="button" onClick={() => moveStructuringPrompt(index, 'down')} disabled={index === formData.structuring_prompts_list.length - 1} className={buttonBaseClasses} title="Move Down">
                    <ArrowDownCircle size={18} />
                </button>
                <button type="button" onClick={() => removeStructuringPromptSlot(index)} className={`${buttonBaseClasses} text-red-500 hover:text-red-700`} title="Remove Prompt">
                    <Trash2 size={18} />
                </button>
                </div>
            </div>
          </div>
        );
      })}
      <button type="button" onClick={addStructuringPromptSlot} className="mt-1 flex items-center text-xs text-teal-600 hover:text-teal-800">
        <PlusCircle size={14} className="mr-1"/> Add Structuring Prompt from Template
      </button>
    </div>
  );

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-black">Create New Product</h1>
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
              name="is_discovery_prompts" 
              id="is_discovery_prompts"   
              checked={formData.is_discovery_prompts} 
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
            />
            <label htmlFor="is_discovery_prompts" className="text-sm text-black">Enable Discovery Prompts?</label> 
          </div>

          {formData.is_discovery_prompts && renderDiscoveryPromptInputs()}

          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_structuring_prompts" 
              id="is_structuring_prompts"   
              checked={formData.is_structuring_prompts} 
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2"
            />
            <label htmlFor="is_structuring_prompts" className="text-sm text-black">Enable Structuring Prompts (from templates)?</label> 
          </div>

          {formData.is_structuring_prompts && renderStructuringPromptInputs()}

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => router.push('/pipelines')} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.pipeline_name}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Saving...' : 'Save Product'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default function AddPipelinePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading New Product page...</div>}>
      <AddPipelinePageComponent />
    </Suspense>
  );
}
