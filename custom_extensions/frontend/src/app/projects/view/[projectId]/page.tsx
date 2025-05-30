// custom_extensions/frontend/src/app/projects/view/[projectId]/page.tsx
"use client";

import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ProjectInstanceDetail, // Ensure this type has: project_id: number (or string); name: string; component_name: string; details: any;
  TrainingPlanData,
  PdfLessonData,
} from '@/types/projectSpecificTypes'; 
import { ProjectListItem } from '@/types/products'; 
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
  const [allUserMicroproducts, setAllUserMicroproducts] = useState<ProjectListItem[] | undefined>(undefined);
  const [parentProjectNameForCurrentView, setParentProjectNameForCurrentView] = useState<string | undefined>(undefined);

  const [pageState, setPageState] = useState<'initial_loading' | 'fetching' | 'error' | 'success' | 'nodata'>('initial_loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState<TrainingPlanData | PdfLessonData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const fetchPageData = useCallback(async (currentProjectIdStr: string) => {
    setPageState('fetching');
    setErrorMessage(null);
    setProjectInstanceData(null);
    setAllUserMicroproducts(undefined);
    setParentProjectNameForCurrentView(undefined);
    setEditableData(null);
    setIsEditing(false);

    console.log("ProjectInstanceViewPage: Starting to fetch page data for projectId:", currentProjectIdStr);

    const currentProjectIdNum = parseInt(currentProjectIdStr, 10);
    if (isNaN(currentProjectIdNum)) {
        setErrorMessage("Invalid Project ID format.");
        setPageState('error');
        console.error("ProjectInstanceViewPage: Invalid Project ID format:", currentProjectIdStr);
        return;
    }

    const commonHeaders: HeadersInit = {};
    const devUserId = "dummy-onyx-user-id-for-testing"; 
    if (devUserId && process.env.NODE_ENV === 'development') {
      commonHeaders['X-Dev-Onyx-User-ID'] = devUserId;
    }

    try {
      const instanceApiUrl = `${CUSTOM_BACKEND_URL}/projects/view/${currentProjectIdStr}`;
      const instanceResPromise = fetch(instanceApiUrl, { cache: 'no-store', headers: commonHeaders });

      const listApiUrl = `${CUSTOM_BACKEND_URL}/projects`;
      const listResPromise = fetch(listApiUrl, { cache: 'no-store', headers: commonHeaders });

      const [instanceRes, listRes] = await Promise.all([instanceResPromise, listResPromise]);

      if (!instanceRes.ok) {
        const errorText = await instanceRes.text();
        let errorDetail = `HTTP error ${instanceRes.status} fetching project instance (ID: ${currentProjectIdStr})`;
        try { const jsonError = JSON.parse(errorText); errorDetail = jsonError.detail || errorDetail; }
        catch { errorDetail = `${errorDetail} - ${errorText.substring(0, 150)}`;}
        throw new Error(errorDetail);
      }
      const instanceData: ProjectInstanceDetail = await instanceRes.json();
      setProjectInstanceData(instanceData);
      console.log("ProjectInstanceViewPage: Fetched projectInstanceData:", instanceData);


      if (!listRes.ok) {
        const errorText = await listRes.text();
        let errorDetail = `HTTP error ${listRes.status} fetching projects list`;
        try { const jsonError = JSON.parse(errorText); errorDetail = jsonError.detail || errorDetail; }
        catch { errorDetail = `${errorDetail} - ${errorText.substring(0, 150)}`;}
        throw new Error(errorDetail);
      }
      const allMicroproductsData: ProjectListItem[] = await listRes.json();
      setAllUserMicroproducts(allMicroproductsData);
      console.log("ProjectInstanceViewPage: Fetched allUserMicroproducts:", allMicroproductsData);
      
      const viewedMicroproductId = instanceData.project_id; // Assuming project_id on ProjectInstanceDetail is the ID of the microproduct itself
      const currentMicroproductInList = allMicroproductsData.find(mp => mp.id === viewedMicroproductId);
      
      if (currentMicroproductInList) {
        setParentProjectNameForCurrentView(currentMicroproductInList.projectName);
        console.log("ProjectInstanceViewPage: Derived parentProjectNameForCurrentView:", currentMicroproductInList.projectName);
      } else {
        setParentProjectNameForCurrentView(undefined); // Explicitly set to undefined if not found
        console.warn(`ProjectInstanceViewPage: Could not find current project (ID: ${viewedMicroproductId}) in the list of all microproducts to determine its parentProjectName.`);
      }
      
      if (instanceData.component_name === COMPONENT_NAME_PDF_LESSON) {
        if (instanceData.details) {
          setEditableData(JSON.parse(JSON.stringify(instanceData.details as PdfLessonData)));
        } else {
          setEditableData({ lessonTitle: instanceData.name || "New PDF Lesson", contentBlocks: [], detectedLanguage: "en" });
        }
      } else if (instanceData.component_name === COMPONENT_NAME_TRAINING_PLAN) {
        if (instanceData.details) {
          setEditableData(JSON.parse(JSON.stringify(instanceData.details as TrainingPlanData)));
        } else {
          setEditableData({ mainTitle: instanceData.name || "New Training Plan", sections: [], detectedLanguage: "en" });
        }
      } else {
        setEditableData(null);
      }

      setPageState(instanceData ? 'success' : 'nodata');

    } catch (err: any) {
      console.error("Error in fetchPageData for project ID", currentProjectIdStr, ":", err);
      setErrorMessage(err.message || "An unknown error occurred while fetching project data.");
      setPageState('error');
    }
  }, []);

  useEffect(() => {
    if (projectId) {
      if (pageState === 'initial_loading' || 
          (projectInstanceData && projectInstanceData.project_id?.toString() !== projectId) ||
          (!projectInstanceData && (pageState === 'error' || pageState === 'nodata'))) {
        fetchPageData(projectId);
      }
    } else if (params && Object.keys(params).length > 0 && !projectId) {
        setErrorMessage("Project ID is missing in URL.");
        setPageState('error');
    }
  }, [projectId, params, fetchPageData, pageState, projectInstanceData]);

  const handleTextChange = useCallback((path: (string | number)[], newValue: string | number | boolean) => {
    setEditableData(currentData => {
      if (!currentData) return null;
      const newData = JSON.parse(JSON.stringify(currentData)); 
      let target: any = newData;
      try {
        for (let i = 0; i < path.length - 1; i++) {
          const segment = path[i];
          if (target[segment] === undefined || target[segment] === null) {
            target[segment] = (typeof path[i+1] === 'number') ? [] : {};
          }
          target = target[segment];
        }
        const finalKey = path[path.length - 1];
        if (typeof target === 'object' && target !== null && (typeof finalKey === 'string' || typeof finalKey === 'number')) {
            // @ts-ignore
            target[finalKey] = newValue;
        } else if (Array.isArray(target) && typeof finalKey === 'number') {
            if(finalKey <= target.length) target[finalKey] = newValue;
            else { console.warn("Index out of bounds for array update at path:", path, "Target length:", target.length, "Index:", finalKey); return currentData; }
        } else {
            console.warn(`Cannot set value at path: ${path.join('.')}. Final key ${finalKey} not valid for target type ${typeof target}`);
            return currentData;
        }
      } catch (e: any) {
        console.error("Error updating editableData at path:", path, e.message);
        return currentData;
      }
      return newData;
    });
  }, []);

  const handleSave = async () => {
    if (!projectId || !editableData ) {
      setSaveError("Project ID or editable data is missing. Cannot save.");
      alert("Error: Project ID or data is missing.");
      return;
    }
    if (!projectInstanceData || (projectInstanceData.component_name !== COMPONENT_NAME_PDF_LESSON && projectInstanceData.component_name !== COMPONENT_NAME_TRAINING_PLAN)) {
        setSaveError("Cannot save: Invalid component type context for editing.");
        alert("Error: Cannot save. Invalid component type.");
        return;
    }

    setIsSaving(true);
    setSaveError(null);

    const saveOperationHeaders: HeadersInit = { 'Content-Type': 'application/json' };
    const devUserId = "dummy-onyx-user-id-for-testing"; 
    if (devUserId && process.env.NODE_ENV === 'development') {
      saveOperationHeaders['X-Dev-Onyx-User-ID'] = devUserId;
    }

    try {
      const payload = { microProductContent: editableData };
      const response = await fetch(`${CUSTOM_BACKEND_URL}/projects/update/${projectId}`, {
        method: 'PUT',
        headers: saveOperationHeaders, 
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
      fetchPageData(projectId); 
    } catch (err: any) {
        console.error("Failed to save data:", err);
        setSaveError(err.message || "Could not save data.");
        alert(`Save failed: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleEdit = () => {
    if (!projectInstanceData) { alert("Project data not loaded yet."); return; }
    if (projectInstanceData.component_name !== COMPONENT_NAME_PDF_LESSON &&
        projectInstanceData.component_name !== COMPONENT_NAME_TRAINING_PLAN) {
        alert("Content editing is only supported for PDF Lesson or Training Plan types on this page.");
        return;
    }
    if (isEditing) {
      handleSave();
    } else {
      if (projectInstanceData.details) {
        setEditableData(JSON.parse(JSON.stringify(projectInstanceData.details)));
      } else {
        if (projectInstanceData.component_name === COMPONENT_NAME_PDF_LESSON) {
          setEditableData({ lessonTitle: projectInstanceData.name || "New PDF Lesson", contentBlocks: [], detectedLanguage: "en" });
        } else if (projectInstanceData.component_name === COMPONENT_NAME_TRAINING_PLAN) {
          setEditableData({ mainTitle: projectInstanceData.name || "New Training Plan", sections: [], detectedLanguage: "en" });
        }
      }
      setIsEditing(true);
    }
  };

  if (pageState === 'initial_loading' || pageState === 'fetching') {
    return <div className="p-8 text-center text-lg">Loading project details...</div>;
  }
  if (pageState === 'error') {
    return <div className="p-8 text-center text-red-600 text-lg">Error: {errorMessage || "Failed to load project data."}</div>;
  }
  if (!projectInstanceData && pageState === 'nodata') {
    return <div className="p-8 text-center text-gray-600 text-lg">Project not found or no data available.</div>;
  }
   if (!projectInstanceData && (pageState === 'success' || pageState === 'nodata')) {
     return <div className="p-8 text-center text-orange-500">Project data could not be loaded.</div>;
   }

  const displayContent = () => {
    if (!projectInstanceData) {
      return <div className="p-4 text-center text-gray-500">Project data is not available for display.</div>;
    }

    const currentDataForDisplay = isEditing ? editableData : projectInstanceData.details;

    switch (projectInstanceData.component_name) {
      case COMPONENT_NAME_TRAINING_PLAN:
        const tpData = currentDataForDisplay as TrainingPlanData | null ??
                       { mainTitle: projectInstanceData.name || "New Training Plan", sections: [], detectedLanguage: "en" };
        return <TrainingPlanTableComponent 
                  dataToDisplay={tpData} 
                  isEditing={isEditing} 
                  onTextChange={handleTextChange}
                  allUserMicroproducts={allUserMicroproducts}
                  parentProjectName={parentProjectNameForCurrentView}
               />;

      case COMPONENT_NAME_PDF_LESSON:
        const pdfData = currentDataForDisplay as PdfLessonData | null ??
                        { lessonTitle: projectInstanceData.name || "New PDF Lesson", contentBlocks: [], detectedLanguage: "en" };
        return <PdfLessonDisplayComponent 
                  dataToDisplay={pdfData} 
                  isEditing={isEditing} 
                  onTextChange={handleTextChange}
               />;
      default:
        return <DefaultDisplayComponent instanceData={projectInstanceData} />;
    }
  };

  const displayName = projectInstanceData?.name || `Project ${projectId}`;

  // Reverted JSX Structure
  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 flex justify-between items-center"> {/* Original mb-4 */}
          <button onClick={() => router.push('/projects')} className="text-blue-600 hover:text-blue-800 text-sm"> {/* Original classes */}
            &larr; Back to Projects
          </button>
          {(projectInstanceData?.component_name === COMPONENT_NAME_PDF_LESSON || projectInstanceData?.component_name === COMPONENT_NAME_TRAINING_PLAN) && projectId && (
            <button
              onClick={handleToggleEdit}
              disabled={isSaving}
              // Original classes for Edit/Save button from user's provided file in previous turn for headers error
              className="px-3 py-1.5 text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 flex items-center"
            >
              {isEditing ? (<> <Save size={16} className="mr-1.5" /> {isSaving ? 'Saving...' : 'Save Content'} </>)
                          : (<> <Edit size={16} className="mr-1.5" /> Edit Content </>)}
            </button>
          )}
        </div>
        {saveError && <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded text-xs">{saveError}</div>} {/* Original classes */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{displayName}</h1> {/* Original classes and structure */}
        {/* The <p> tag that previously displayed slug and component has been removed - maintained from user's version */}
        <Suspense fallback={<div className="p-8 text-center">Loading content display...</div>}> {/* Original fallback */}
          {displayContent()}
        </Suspense>
      </div>
    </main>
  );
}
