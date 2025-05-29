// custom_extensions/frontend/src/app/projects/view/[projectId]/page.tsx
"use client";

import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ProjectInstanceDetail, 
  TrainingPlanData, 
  PdfLessonData 
} from '@/types/projectSpecificTypes'; 
import TrainingPlanTableComponent from '@/components/TrainingPlanTable';
import PdfLessonDisplayComponent from '@/components/PdfLessonDisplay';
import { Save, Edit } from 'lucide-react';

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || '/api/custom-projects-backend';
const COMPONENT_NAME_TRAINING_PLAN = "TrainingPlanTable";
const COMPONENT_NAME_PDF_LESSON = "PdfLessonDisplay";

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

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState<PdfLessonData | TrainingPlanData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const fetchProjectInstanceData = useCallback(async (currentProjectId: string) => {
    setPageState('fetching'); 
    setErrorMessage(null);
    setProjectInstanceData(null); 
    setIsEditing(false); 

    const apiUrl = `${CUSTOM_BACKEND_URL}/projects/view/${currentProjectId}`;
    try {
      const headers: HeadersInit = {};
      const devUserId = "dummy-onyx-user-id-for-testing"; 
      if (devUserId && process.env.NODE_ENV === 'development') headers['X-Dev-Onyx-User-ID'] = devUserId;
      const res = await fetch(apiUrl, { cache: 'no-store', headers });
      if (!res.ok) { 
        const errorText = await res.text(); console.error("Fetch error:", res.status, errorText);
        let errorDetail = `HTTP error ${res.status}`;
        try { const jsonError = JSON.parse(errorText); errorDetail = jsonError.detail || errorDetail; } 
        catch { errorDetail = `${errorDetail} - ${errorText.substring(0, 150)}`;}
        throw new Error(errorDetail);
      }
      const data: ProjectInstanceDetail = await res.json();
      setProjectInstanceData(data);
      
      if (data && data.component_name === COMPONENT_NAME_PDF_LESSON) {
        if (data.details) {
          setEditableData(JSON.parse(JSON.stringify(data.details as PdfLessonData)));
        } else {
          const defaultPdfData: PdfLessonData = { 
              lessonTitle: data.name || "New Lesson",
              contentBlocks: [], 
              detectedLanguage: "en" 
          };
          setEditableData(defaultPdfData);
        }
      } else if (data && data.component_name === COMPONENT_NAME_TRAINING_PLAN && data.details) {
         setEditableData(JSON.parse(JSON.stringify(data.details as TrainingPlanData)));
      }
      setPageState(data ? 'success' : 'nodata'); 
    } catch (err: any) {
      console.error("Error fetching project instance data for", currentProjectId, ":", err);
      setErrorMessage(err.message || "An unknown error occurred while fetching project data.");
      setPageState('error');
    }
  }, []);

  useEffect(() => { 
    if (projectId) {
      if (pageState === 'initial_loading' || 
          (projectId !== projectInstanceData?.project_id?.toString() && (pageState === 'error' || pageState === 'nodata'))) { 
        fetchProjectInstanceData(projectId);
      }
    } else if (params && Object.keys(params).length > 0 && !projectId) {
        setErrorMessage("Project ID is missing in URL.");
        setPageState('error');
    }
  }, [projectId, params, fetchProjectInstanceData, pageState, projectInstanceData?.project_id]);

  const handleTextChange = useCallback((path: (string | number)[], newText: string) => {
    if (projectInstanceData?.component_name === COMPONENT_NAME_PDF_LESSON) {
      setEditableData(currentData => {
        if (!currentData) return null;
        const currentPdfData = currentData as PdfLessonData; 
        const newData = JSON.parse(JSON.stringify(currentPdfData)) as PdfLessonData;
        let target: any = newData;
        try {
          for (let i = 0; i < path.length - 1; i++) {
            const segment = path[i];
            if (target[segment] === undefined || target[segment] === null) {
              if (typeof path[i+1] === 'number') target[segment] = []; else target[segment] = {};
            }
            target = target[segment];
          }
          const finalKey = path[path.length - 1];
          if (typeof target === 'object' && target !== null) target[finalKey] = newText;
          else if (Array.isArray(target) && typeof finalKey === 'number' && finalKey < target.length) target[finalKey] = newText;
          else throw new Error(`Final key ${finalKey} not valid for target type ${typeof target}`);
        } catch (e: any) {
          console.error("Error updating editableData at path:", path, e.message);
          return currentPdfData; 
        }
        return newData;
      });
    }
  }, [projectInstanceData?.component_name]);

  const handleSave = async () => {
    if (!projectId || !editableData || projectInstanceData?.component_name !== COMPONENT_NAME_PDF_LESSON) {
      setSaveError("Cannot save: Project ID, editable data, or correct component type is missing.");
      alert("Error: Cannot save. Invalid data or context.");
      return;
    }
    setIsSaving(true);
    setSaveError(null);
    try {
      const payload = { microProductContent: editableData }; 
      const response = await fetch(`${CUSTOM_BACKEND_URL}/projects/update/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', /* 'X-Dev-Onyx-User-ID': "..." */ },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorDataText = await response.text();
        let errorDetail = `HTTP error ${response.status}`;
        try { const errorJson = JSON.parse(errorDataText); errorDetail = errorJson.detail || errorDetail; } 
        catch(e) { /* ignore */ }
        throw new Error(errorDetail);
      }
      setIsEditing(false);
      window.location.reload(); 
    } catch (err: any) {
      console.error("Failed to save lesson data:", err);
      setSaveError(err.message || "Could not save data.");
      alert(`Save failed: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleEdit = () => {
    if (projectInstanceData?.component_name !== COMPONENT_NAME_PDF_LESSON) {
        alert("Content editing is currently supported for PDF Lesson type on this page.");
        return;
    }
    if (isEditing) {
      handleSave();
    } else {
      if (projectInstanceData && projectInstanceData.details && projectInstanceData.component_name === COMPONENT_NAME_PDF_LESSON) {
        setEditableData(JSON.parse(JSON.stringify(projectInstanceData.details as PdfLessonData)));
      } else if (projectInstanceData && projectInstanceData.component_name === COMPONENT_NAME_PDF_LESSON) { 
        const defaultPdfData: PdfLessonData = { 
            lessonTitle: projectInstanceData.name || "New Lesson", 
            contentBlocks: [], 
            detectedLanguage: "en"
        };
        setEditableData(defaultPdfData);
      }
      setIsEditing(true);
    }
  };

  if (pageState === 'initial_loading' || pageState === 'fetching') {
    return <div className="p-8 text-center">Loading project details...</div>;
  }
  if (pageState === 'error') {
    return <div className="p-8 text-center text-red-500">Error: {errorMessage || "Failed to load data."}</div>;
  }
  if (!projectInstanceData && pageState !== 'nodata') { 
    return <div className="p-8 text-center text-orange-500">Project data could not be loaded or found.</div>;
  }

  const displayContent = () => {
    if (!projectInstanceData) { 
      return <div className="p-4 text-center text-gray-500">Project data is not available.</div>;
    }
    
    if (projectInstanceData.component_name !== COMPONENT_NAME_PDF_LESSON && 
        projectInstanceData.component_name !== COMPONENT_NAME_TRAINING_PLAN && 
        !projectInstanceData.details && pageState !== 'nodata') {
         return <div className="p-4 text-center text-gray-500">Content is not available for this project type.</div>;
    }

    switch (projectInstanceData.component_name) {
      case COMPONENT_NAME_TRAINING_PLAN:
        return <TrainingPlanTableComponent initialData={projectInstanceData.details as TrainingPlanData | null} />;
      case COMPONENT_NAME_PDF_LESSON:
        const dataForPdfDisplay = isEditing 
            ? (editableData as PdfLessonData | null) 
            : (projectInstanceData.details as PdfLessonData | null);
        const safeDataForPdfDisplay = isEditing && !editableData 
            ? { lessonTitle: projectInstanceData.name || "New Lesson", contentBlocks: [], detectedLanguage: "en" }
            : dataForPdfDisplay;
        return <PdfLessonDisplayComponent 
                 dataToDisplay={safeDataForPdfDisplay} 
                 isEditing={isEditing}
                 onTextChange={handleTextChange}
               />;
      default:
        return <DefaultDisplayComponent instanceData={projectInstanceData} />;
    }
  };

  const displayName = projectInstanceData?.name || `Project ${projectId}`;

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <button onClick={() => router.push('/projects')} className="text-blue-600 hover:text-blue-800 text-sm">
            &larr; Back to Projects
          </button>
          {projectInstanceData?.component_name === COMPONENT_NAME_PDF_LESSON && projectId && (
            <button
              onClick={handleToggleEdit}
              disabled={isSaving}
              className="px-3 py-1.5 text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 flex items-center"
            >
              {isEditing ? (<> <Save size={16} className="mr-1.5" /> {isSaving ? 'Saving...' : 'Save Content'} </>) 
                         : (<> <Edit size={16} className="mr-1.5" /> Edit Content </>)}
            </button>
          )}
        </div>
        {saveError && <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded text-xs">{saveError}</div>}

        <h1 className="text-3xl font-bold text-gray-800 mb-2">{displayName}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Design Slug: {projectInstanceData?.slug} (Component: {projectInstanceData?.component_name || 'Default Viewer'})
        </p>
        
        <Suspense fallback={<div className="p-8 text-center">Loading content display...</div>}>
          {displayContent()}
        </Suspense>
      </div>
    </main>
  );
}
