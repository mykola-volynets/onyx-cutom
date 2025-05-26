// custom_extensions/frontend/src/app/projects/view/[projectId]/page.tsx
"use client";

import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ProjectInstanceDetail, TrainingPlanData } from '@/types/trainingPlan'; // Ensure TrainingPlanData is imported if needed by TrainingPlanTableComponent
import TrainingPlanTableComponent from '@/components/TrainingPlanTable';
// Import other display components here as you create them
// import FAQDisplayComponent from '@/components/FAQDisplayComponent'; 
// import MarketingCopyDisplayComponent from '@/components/MarketingCopyDisplayComponent';

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || '/api/custom-projects-backend';

type ProjectViewParams = {
  projectId: string;
};

// Default component for unmapped component_name or as a fallback
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

// Example of how other components might be structured (they should also take consistent props)
// const FAQDisplayComponent = ({ instanceData }: { instanceData: ProjectInstanceDetail | null }) => (
// <div>Displaying FAQ: {instanceData?.name}</div>
// );


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
    setProjectInstanceData(null);

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
         try { const jsonError = JSON.parse(errorText); throw new Error(jsonError.detail || `HTTP error ${res.status}`); }
         catch { throw new Error(`HTTP error ${res.status} - ${errorText.substring(0, 150)}`); }
      }
      const data: ProjectInstanceDetail = await res.json();
      setProjectInstanceData(data);
      
      if (data && data.details) { 
        setPageState('success');
      } else {
        console.warn("Data received but details are missing or empty.");
        setProjectInstanceData(data); // Still set data to show other info if details are missing
        setPageState('nodata'); // Indicate that main content might be missing
      }
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setErrorMessage(err.message || "An unknown error occurred");
      setPageState('error');
    }
  }, []);

  useEffect(() => {
    if (projectId) {
      if (pageState === 'initial_loading') {
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
  
  // Handle case where projectInstanceData itself is null after attempting fetch (e.g. 404 not caught as error)
  if (!projectInstanceData) {
    return <div className="p-8 text-center text-orange-500">Project data not found.</div>;
  }

  // If nodata state, but we have projectInstanceData, show default viewer with potentially empty details
  const displayContent = () => {
    if (!projectInstanceData.component_name) {
      return <DefaultDisplayComponent instanceData={projectInstanceData} />;
    }

    switch (projectInstanceData.component_name) {
      case 'TrainingPlanTable':
        // TrainingPlanTableComponent expects 'initialData' prop with the 'details' part
        return <TrainingPlanTableComponent initialData={projectInstanceData.details} />;
      // Add other cases here as you create more components:
      // case 'FAQComponent':
      //   return <FAQDisplayComponent instanceData={projectInstanceData} />; 
      default:
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
        <p className="text-sm text-gray-500 mb-6">Design: {projectInstanceData.slug} (Component: {projectInstanceData.component_name || 'Default Viewer'})</p>
        
        <Suspense fallback={<div>Loading content...</div>}>
          {displayContent()}
        </Suspense>
      </div>
    </main>
  );
}
