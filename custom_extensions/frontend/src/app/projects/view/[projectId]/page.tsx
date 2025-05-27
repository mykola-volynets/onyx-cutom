// custom_extensions/frontend/src/app/projects/view/[projectId]/page.tsx
"use client";

import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
// MODIFIED: Import new types and the new component
import { 
  ProjectInstanceDetail, 
  MicroProductContentData, // Union type for different content structures
  TrainingPlanData,        // Specific type for TrainingPlanTable
  PdfLessonData            // Specific type for PdfLessonDisplay
} from '@/types/projectSpecificTypes'; // Ensure this path is correct
import TrainingPlanTableComponent from '@/components/TrainingPlanTable';
import PdfLessonDisplayComponent from '@/components/PdfLessonDisplay'; // MODIFIED: Import new component

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || '/api/custom-projects-backend';

// MODIFIED: Define component names from backend (ensure these match backend constants)
const COMPONENT_NAME_TRAINING_PLAN = "TrainingPlanTable";
const COMPONENT_NAME_PDF_LESSON = "PdfLessonDisplay"; // This should match the 'component_name' in your design_templates table for PDF Lessons

type ProjectViewParams = {
  projectId: string;
};

const DefaultDisplayComponent = ({ instanceData }: { instanceData: ProjectInstanceDetail | null }) => (
  <div className="p-4 border rounded-md bg-gray-100">
    <h2 className="text-xl font-semibold mb-2">{instanceData?.name || 'Content Details'}</h2>
    <p className="text-sm text-gray-600 mb-2">
      This project uses the design component &quot;{instanceData?.component_name || 'Unknown'}&quot;.
      A specific display component for this type might not be fully implemented or mapped yet.
    </p>
    <h3 className="text-lg font-medium mt-4 mb-1">Raw Content Preview:</h3>
    <pre className="bg-gray-200 p-3 rounded text-xs overflow-auto whitespace-pre-wrap">
      {JSON.stringify(instanceData?.details, null, 2)}
    </pre>
  </div>
);

export default function ProjectInstanceViewPage() {
  const params = useParams<ProjectViewParams>();
  const router = useRouter();
  const { projectId } = params;

  const [projectInstanceData, setProjectInstanceData] = useState<ProjectInstanceDetail | null>(null);
  const [pageState, setPageState] = useState<'initial_loading' | 'fetching' | 'error' | 'success' | 'nodata'>('initial_loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchProjectInstanceData = useCallback(async (currentProjectId: string) => {
    setPageState('fetching');
    setErrorMessage(null);
    setProjectInstanceData(null); // Clear previous data

    const apiUrl = `${CUSTOM_BACKEND_URL}/projects/view/${currentProjectId}`;
    console.log("Fetching project instance details from:", apiUrl);

    try {
      const headers: HeadersInit = {};
      const devUserId = "dummy-onyx-user-id-for-testing"; 
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const res = await fetch(apiUrl, { cache: 'no-store', headers });

      if (!res.ok) {
         const errorText = await res.text();
         console.error("Fetch error:", res.status, errorText);
         let errorDetail = `HTTP error ${res.status}`;
         try { 
            const jsonError = JSON.parse(errorText); 
            errorDetail = jsonError.detail || errorDetail;
         } catch { 
            errorDetail = `${errorDetail} - ${errorText.substring(0, 150)}`;
         }
         throw new Error(errorDetail);
      }
      const data: ProjectInstanceDetail = await res.json();
      setProjectInstanceData(data);
      
      if (data && data.details) { 
        setPageState('success');
      } else {
        console.warn("Data received but project details content (data.details) is missing or empty for project:", currentProjectId);
        setProjectInstanceData(data); 
        setPageState('nodata'); 
      }
    } catch (err: any) {
      console.error("Error fetching project instance data for", currentProjectId, ":", err);
      setErrorMessage(err.message || "An unknown error occurred while fetching project data.");
      setPageState('error');
    }
  }, []);

  useEffect(() => {
    if (projectId) {
      if (pageState === 'initial_loading') { // Fetch only on initial load or if projectId changes and it was an error state
        fetchProjectInstanceData(projectId);
      }
    } else if (params && Object.keys(params).length > 0 && !projectId) {
        setErrorMessage("Project ID is missing in URL.");
        setPageState('error');
    }
  }, [projectId, params, fetchProjectInstanceData, pageState]);

  if (pageState === 'initial_loading' || pageState === 'fetching') {
    return <div className="p-8 text-center">Loading project details...</div>;
  }

  if (pageState === 'error') {
    return <div className="p-8 text-center text-red-500">Error: {errorMessage || "Failed to load data."}</div>;
  }
  
  if (!projectInstanceData) {
    // This case should ideally be caught by the error state if fetch fails (e.g. 404)
    return <div className="p-8 text-center text-orange-500">Project data could not be loaded or found.</div>;
  }

  const displayContent = () => {
    // If details are explicitly null or undefined, even if component_name is present, show appropriate message or default.
    if (!projectInstanceData.details && pageState !== 'nodata') {
        // This might indicate an unexpected state if pageState is 'success' but details are null.
        // For 'nodata' state, it's expected that details might be null/empty.
        console.warn(`Project details are missing for component: ${projectInstanceData.component_name}`);
        return <div className="p-4 text-center text-gray-500">Content is not available for this project.</div>;
    }

    switch (projectInstanceData.component_name) {
      case COMPONENT_NAME_TRAINING_PLAN:
        return <TrainingPlanTableComponent initialData={projectInstanceData.details as TrainingPlanData | null} />;
      
      case COMPONENT_NAME_PDF_LESSON:
        return <PdfLessonDisplayComponent data={projectInstanceData.details as PdfLessonData | null} />;
      
      default:
        console.warn(`No specific display component mapped for: '${projectInstanceData.component_name}'. Using default display.`);
        return <DefaultDisplayComponent instanceData={projectInstanceData} />;
    }
  };

  const displayName = projectInstanceData.name || `Project ${projectId}`;

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
       <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <button
            onClick={() => router.push('/projects')} 
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            &larr; Back to Projects
          </button>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{displayName}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Design Slug: {projectInstanceData.slug} (Component: {projectInstanceData.component_name || 'Default Viewer'})
        </p>
        
        <Suspense fallback={<div className="p-8 text-center">Loading content display...</div>}>
          {displayContent()}
        </Suspense>
      </div>
    </main>
  );
}
