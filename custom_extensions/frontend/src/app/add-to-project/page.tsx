// custom_extensions/frontend/src/app/add-to-project/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
// import Image from 'next/image'; // No longer needed
import { DesignTemplateResponse } from '@/types/designTemplates'; 

const CUSTOM_API_BASE_URL = '/api/custom-projects-backend'; 
// const CUSTOM_BACKEND_ROOT_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_ROOT_URL || ''; // No longer needed

const AddToProjectPageComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [selectedDesignTemplateId, setSelectedDesignTemplateId] = useState<string>('');
  const [microProductName, setMicroProductName] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [designTemplates, setDesignTemplates] = useState<DesignTemplateResponse[]>([]);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true);
  
  const [selectedTemplateName, setSelectedTemplateName] = useState<string>('');

  useEffect(() => {
    const fetchTemplates = async () => {
      setIsLoadingTemplates(true);
      try {
        const response = await fetch(`${CUSTOM_API_BASE_URL}/design_templates`);
        if (!response.ok) {
          throw new Error('Failed to fetch design templates');
        }
        const data: DesignTemplateResponse[] = await response.json();
        setDesignTemplates(data);
      } catch (error) {
        console.error("Error fetching design templates:", error);
      } finally {
        setIsLoadingTemplates(false);
      }
    };
    fetchTemplates();
  }, []);

  useEffect(() => {
    const responseKey = searchParams.get('responseKey');
    if (responseKey) {
      try {
        const storedResponse = sessionStorage.getItem(decodeURIComponent(responseKey));
        if (storedResponse !== null) {
          setAiResponse(storedResponse);
          sessionStorage.removeItem(decodeURIComponent(responseKey));
        } else {
          console.warn("AI response key found, but no data in sessionStorage.");
        }
      } catch (e) {
        console.error("Error reading from sessionStorage:", e);
        setAiResponse("Error: Could not retrieve AI response.");
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedDesignTemplateId) {
      const template = designTemplates.find(dt => dt.id.toString() === selectedDesignTemplateId);
      setSelectedTemplateName(template?.template_name || '');
      // No longer setting image path
    } else {
      setSelectedTemplateName('');
      // No longer setting image path
    }
  }, [selectedDesignTemplateId, designTemplates]);

  const handleSubmit = async () => {
    if (!selectedDesignTemplateId) { 
        alert("Please select a design template.");
        return;
    }
    setIsSubmitting(true);
    
    const finalMicroProductName = microProductName.trim() || selectedTemplateName || projectName;

    const payload = {
      projectName,
      design_template_id: parseInt(selectedDesignTemplateId, 10),
      microProductName: finalMicroProductName, 
      aiResponse,
    };

    const API_ENDPOINT = `${CUSTOM_API_BASE_URL}/projects/add`;

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      const devUserId = "dummy-onyx-user-id-for-testing"; 
      if (devUserId && process.env.NODE_ENV === 'development') { 
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorData}`);
      }
      await response.json();
      router.push('/projects'); 
    } catch (error) {
      console.error('Failed to submit project:', error);
      alert(`Error while adding the Project: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Project Instance</h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">Project Name:</label>
              <input type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"/>
            </div>
            
            <div>
              <label htmlFor="designTemplate" className="block text-sm font-medium text-gray-700 mb-1">Design Template:</label>
              <select 
                id="designTemplate" 
                value={selectedDesignTemplateId} 
                onChange={(e) => setSelectedDesignTemplateId(e.target.value)} 
                className="block w-full p-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white text-gray-900"
                disabled={isLoadingTemplates || designTemplates.length === 0}
              >
                <option value="">-- Choose Design Template --</option>
                {isLoadingTemplates ? (
                  <option disabled>Loading templates...</option>
                ) : (
                  designTemplates.map(template => (
                    <option key={template.id} value={template.id.toString()}>{template.template_name} ({template.component_name})</option>
                  ))
                )}
              </select>
              {designTemplates.length === 0 && !isLoadingTemplates && (
                <p className="mt-1 text-xs text-red-500">No design templates available. Please add some first.</p>
              )}
              {/* Image display removed */}
            </div>

            <div>
              <label htmlFor="microProductName" className="block text-sm font-medium text-gray-700 mb-1">Instance Name (Optional):</label>
              <input
                type="text" id="microProductName" value={microProductName}
                onChange={(e) => setMicroProductName(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                placeholder="Custom name (e.g., Q1 Onboarding Plan)"
              />
              <p className="mt-1 text-xs text-gray-500">
                If left blank, the Design Template's name will be used.
              </p>
            </div>

            <div className="mt-2">
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting || !projectName || !selectedDesignTemplateId || designTemplates.length === 0} 
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Creating...' : 'Create Project Instance'}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="aiResponse" className="block text-sm font-medium text-gray-700 mb-1">Content (Paste from AI):</label>
            <textarea id="aiResponse" value={aiResponse} onChange={(e) => setAiResponse(e.target.value)} className="block w-full h-96 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono text-xs text-gray-900" placeholder="Paste the unstructured content here... The selected Design Template will guide its structuring."/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default function AddToProjectPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading page details...</div>}>
      <AddToProjectPageComponent />
    </Suspense>
  );
}
