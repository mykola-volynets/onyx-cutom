// custom_extensions/frontend/src/app/projects/view/[projectId]/page.tsx
"use client";

import React, { Suspense, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ProjectInstanceDetail,
  MicroProductContentData,
  TrainingPlanData,
  PdfLessonData,
  QuizData,
} from '@/types/projectSpecificTypes';
import { VideoLessonData } from '@/types/videoLessonTypes';
import { ProjectListItem } from '@/types/products';
import TrainingPlanTableComponent from '@/components/TrainingPlanTable';
import PdfLessonDisplayComponent from '@/components/PdfLessonDisplay';
import VideoLessonDisplay from '@/components/VideoLessonDisplay';
import QuizDisplay from '@/components/QuizDisplay';
import { Save, Edit, ArrowDownToLine, Info, AlertTriangle, ArrowLeft, FolderOpen, MessageSquare } from 'lucide-react';

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || '/api/custom-projects-backend';

// Component Name Constants
const COMPONENT_NAME_TRAINING_PLAN = "TrainingPlanTable";
const COMPONENT_NAME_PDF_LESSON = "PdfLessonDisplay";
const COMPONENT_NAME_VIDEO_LESSON = "VideoLessonDisplay";
const COMPONENT_NAME_QUIZ = "QuizDisplay";

type ProjectViewParams = {
  projectId: string;
};

const slugify = (text: string | null | undefined): string => {
  if (!text) return "document";
  return text.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

const DefaultDisplayComponent = ({ instanceData }: { instanceData: ProjectInstanceDetail | null }) => (
  <div className="p-6 border rounded-lg bg-gray-50 shadow-md">
    <div className="flex items-center text-blue-600 mb-3">
        <Info size={24} className="mr-3" />
        <h2 className="text-2xl font-semibold">{instanceData?.name || 'Content Details'}</h2>
    </div>
    <p className="text-gray-700 mb-2">
      This project instance utilizes the design component: <strong className="font-medium text-gray-800">&quot;{instanceData?.component_name || 'Unknown'}&quot;</strong>.
    </p>
    <p className="text-gray-600 mb-4">
      A specific UI for direct viewing or editing this component type might not yet be fully implemented on this page.
      You can typically edit the project&apos;s general details (like name or design template) via the main project editing page.
    </p>
    <details className="group text-sm">
        <summary className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-150 group-open:mb-2 font-medium">
            Toggle Raw Content Preview
        </summary>
        <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto whitespace-pre-wrap border border-gray-200 mt-1 max-h-96">
            {JSON.stringify(instanceData?.details, null, 2)}
        </pre>
    </details>
  </div>
);


export default function ProjectInstanceViewPage() {
  const params = useParams<ProjectViewParams>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { projectId } = params;

  const [projectInstanceData, setProjectInstanceData] = useState<ProjectInstanceDetail | null>(null);
  const [allUserMicroproducts, setAllUserMicroproducts] = useState<ProjectListItem[] | undefined>(undefined);
  const [parentProjectNameForCurrentView, setParentProjectNameForCurrentView] = useState<string | undefined>(undefined);

  const [pageState, setPageState] = useState<'initial_loading' | 'fetching' | 'error' | 'success' | 'nodata'>('initial_loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState<MicroProductContentData>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  
  // State for the absolute chat URL
  const [chatRedirectUrl, setChatRedirectUrl] = useState<string | null>(null);

  const fetchPageData = useCallback(async (currentProjectIdStr: string) => {
    setPageState('fetching');
    setErrorMessage(null);
    setProjectInstanceData(null);
    setAllUserMicroproducts(undefined);
    setParentProjectNameForCurrentView(undefined);
    setEditableData(null);
    setIsEditing(false);
    setSaveError(null);

    const currentProjectIdNum = parseInt(currentProjectIdStr, 10);
    if (isNaN(currentProjectIdNum)) {
      setErrorMessage("Invalid Project ID format.");
      setPageState('error');
      return;
    }

    const commonHeaders: HeadersInit = {};
    const devUserId = typeof window !== "undefined" ? sessionStorage.getItem("dev_user_id") || "dummy-onyx-user-id-for-testing" : "dummy-onyx-user-id-for-testing";
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
        try { const errorJson = JSON.parse(errorText); errorDetail = errorJson.detail || errorDetail; }
        catch { errorDetail = `${errorDetail} - ${errorText.substring(0, 150)}`; }
        throw new Error(errorDetail);
      }
      const instanceData: ProjectInstanceDetail = await instanceRes.json();
      setProjectInstanceData(instanceData);
      
      if (typeof window !== 'undefined' && instanceData.sourceChatSessionId) {
        setChatRedirectUrl(`${window.location.origin}/chat?chatId=${instanceData.sourceChatSessionId}`);
      }

      if (listRes.ok) {
        const allMicroproductsData: ProjectListItem[] = await listRes.json();
        setAllUserMicroproducts(allMicroproductsData);
        const currentMicroproductInList = allMicroproductsData.find(mp => mp.id === instanceData.project_id);
        setParentProjectNameForCurrentView(currentMicroproductInList?.projectName);
      } else {
          console.warn("Could not fetch full projects list to determine parent project name.");
      }

      if (instanceData.details) {
        const copiedDetails = JSON.parse(JSON.stringify(instanceData.details));
        if (instanceData.component_name === COMPONENT_NAME_TRAINING_PLAN) {
          setEditableData(copiedDetails as TrainingPlanData);
        } else if (instanceData.component_name === COMPONENT_NAME_PDF_LESSON) {
          setEditableData(copiedDetails as PdfLessonData);
        } else if (instanceData.component_name === COMPONENT_NAME_VIDEO_LESSON) {
          setEditableData(copiedDetails as VideoLessonData);
        } else {
          setEditableData(copiedDetails); 
        }
      } else {
        const lang = instanceData.detectedLanguage || 'en'; 
        if (instanceData.component_name === COMPONENT_NAME_TRAINING_PLAN) {
          setEditableData({ mainTitle: instanceData.name || "New Training Plan", sections: [], detectedLanguage: lang });
        } else if (instanceData.component_name === COMPONENT_NAME_PDF_LESSON) {
          setEditableData({ lessonTitle: instanceData.name || "New PDF Lesson", contentBlocks: [], detectedLanguage: lang });
        } else if (instanceData.component_name === COMPONENT_NAME_VIDEO_LESSON) {
          setEditableData({ mainPresentationTitle: instanceData.name || "New Video Lesson", slides: [], detectedLanguage: lang });
        } else {
          setEditableData(null);
        }
      }
      setPageState(instanceData ? 'success' : 'nodata');
    } catch (err: any) {
      console.error("Fetch Page Data Error:", err);
      setErrorMessage(err.message || "An unknown error occurred while fetching project data.");
      setPageState('error');
    }
  }, []);

  useEffect(() => {
    if (projectId) {
      const needsFetch = pageState === 'initial_loading' ||
        (projectInstanceData && projectInstanceData.project_id?.toString() !== projectId) ||
        (!projectInstanceData && (pageState === 'error' || pageState === 'nodata'));

      if (needsFetch) {
        fetchPageData(projectId);
      }
    } else if (params && Object.keys(params).length > 0 && !projectId) {
      setErrorMessage("Project ID is missing in URL.");
      setPageState('error');
    }
  }, [projectId, params, fetchPageData, pageState, projectInstanceData]);


  const handleTextChange = useCallback((path: (string | number)[], newValue: string | number | boolean) => {
    setEditableData(currentData => {
      if (currentData === null || currentData === undefined) {
        console.warn("Attempted to update null or undefined editableData at path:", path);
        return null;
      }

      const newData = JSON.parse(JSON.stringify(currentData));
      let target: any = newData;

      try {
        for (let i = 0; i < path.length - 1; i++) {
          const segment = path[i];
          if (target[segment] === undefined || target[segment] === null) {
            target[segment] = (typeof path[i + 1] === 'number') ? [] : {};
          }
          target = target[segment];
        }

        const finalKey = path[path.length - 1];
        if (typeof target === 'object' && target !== null && (typeof finalKey === 'string' || typeof finalKey === 'number')) {
          target[finalKey] = newValue;
        } else if (Array.isArray(target) && typeof finalKey === 'number') {
          if (finalKey <= target.length) {
              target[finalKey] = newValue;
          } else {
            console.warn("Index out of bounds for array update at path:", path, "Target length:", target.length, "Index:", finalKey);
            return currentData;
          }
        } else {
          console.warn(`Cannot set value at path: ${path.join('.')}. Final key '${finalKey}' not valid for target type '${typeof target}'`);
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
    if (!projectId || !editableData) {
      setSaveError("Project ID or editable data is missing.");
      alert("Error: Project ID or data is missing.");
      return;
    }
    if (!projectInstanceData) {
      setSaveError("Project instance data not loaded.");
      alert("Error: Project instance data not loaded.");
      return;
    }
    const editableComponentTypes = [
      COMPONENT_NAME_PDF_LESSON,
      COMPONENT_NAME_TRAINING_PLAN,
      COMPONENT_NAME_VIDEO_LESSON,
      COMPONENT_NAME_QUIZ
    ];
    if (!editableComponentTypes.includes(projectInstanceData.component_name)) {
      setSaveError("Content editing is not supported for this component type on this page.");
      alert("Error: Cannot save. Content editing for this component type is not supported here.");
      return;
    }

    setIsSaving(true);
    setSaveError(null);

    const saveOperationHeaders: HeadersInit = { 'Content-Type': 'application/json' };
    const devUserId = typeof window !== "undefined" ? sessionStorage.getItem("dev_user_id") || "dummy-onyx-user-id-for-testing" : "dummy-onyx-user-id-for-testing";
    if (devUserId && process.env.NODE_ENV === 'development') {
      saveOperationHeaders['X-Dev-Onyx-User-ID'] = devUserId;
    }

    try {
      const payload = { microProductContent: editableData };
      const response = await fetch(`${CUSTOM_BACKEND_URL}/projects/update/${projectId}`, {
        method: 'PUT', headers: saveOperationHeaders, body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorDataText = await response.text();
        let errorDetail = `HTTP error ${response.status}`;
        try { const errorJson = JSON.parse(errorDataText); errorDetail = errorJson.detail || errorDetail; }
        catch (e) { /* ignore */ }
        throw new Error(errorDetail);
      }
      setIsEditing(false);
      await fetchPageData(projectId);
      alert("Content saved successfully!");
    } catch (err: any) {
      setSaveError(err.message || "Could not save data.");
      alert(`Save failed: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleEdit = () => {
    if (!projectInstanceData) { alert("Project data not loaded yet."); return; }
    const editableComponentTypes = [
      COMPONENT_NAME_PDF_LESSON,
      COMPONENT_NAME_TRAINING_PLAN,
      COMPONENT_NAME_VIDEO_LESSON,
      COMPONENT_NAME_QUIZ
    ];
    if (!editableComponentTypes.includes(projectInstanceData.component_name)) {
      alert(`Content editing is currently supported for ${editableComponentTypes.join(', ')} types on this page.`);
      return;
    }

    if (isEditing) {
      handleSave();
    } else {
      const lang = projectInstanceData.details?.detectedLanguage || 'en';
      if (projectInstanceData.details) {
        setEditableData(JSON.parse(JSON.stringify(projectInstanceData.details)));
      } else { 
        if (projectInstanceData.component_name === COMPONENT_NAME_TRAINING_PLAN) {
          setEditableData({ mainTitle: projectInstanceData.name || "New Training Plan", sections: [], detectedLanguage: lang });
        } else if (projectInstanceData.component_name === COMPONENT_NAME_PDF_LESSON) {
          setEditableData({ lessonTitle: projectInstanceData.name || "New PDF Lesson", contentBlocks: [], detectedLanguage: lang });
        } else if (projectInstanceData.component_name === COMPONENT_NAME_VIDEO_LESSON) {
          setEditableData({ mainPresentationTitle: projectInstanceData.name || "New Video Lesson", slides: [], detectedLanguage: lang });
        } else {
          setEditableData(null);
        }
      }
      setIsEditing(true);
    }
  };

  const handlePdfDownload = () => {
    if (!projectInstanceData || typeof projectInstanceData.project_id !== 'number') {
        alert("Project data or ID is not available for download.");
        return;
    }
    const nameForSlug = projectInstanceData.name || 'document';
    const docNameSlug = slugify(nameForSlug);
    const pdfProjectId = projectInstanceData.project_id;

    const parentProjectName = searchParams.get('parentProjectName');
    const lessonNumber = searchParams.get('lessonNumber');

    let pdfUrl = `${CUSTOM_BACKEND_URL}/pdf/${pdfProjectId}/${docNameSlug}`;
    
    const queryParams = new URLSearchParams();
    if (parentProjectName) {
        queryParams.append('parentProjectName', parentProjectName);
    }
    if (lessonNumber) {
        queryParams.append('lessonNumber', lessonNumber);
    }

    if (queryParams.toString()) {
        pdfUrl += `?${queryParams.toString()}`;
    }

    window.open(pdfUrl, '_blank');
  };

  if (pageState === 'initial_loading' || pageState === 'fetching') {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100"><div className="p-8 text-center text-lg text-gray-600">Loading project details...</div></div>;
  }
  if (pageState === 'error') {
    return <div className="flex items-center justify-center min-h-screen bg-red-50"><div className="p-8 text-center text-red-700 text-lg">Error: {errorMessage || "Failed to load project data."}</div></div>;
  }
    if (!projectInstanceData) {
      return <div className="flex items-center justify-center min-h-screen bg-gray-100"><div className="p-8 text-center text-gray-500">Project not found or data unavailable.</div></div>;
  }

  const displayContent = () => {
    if (!projectInstanceData) return null;

    switch (projectInstanceData.component_name) {
      case COMPONENT_NAME_TRAINING_PLAN:
        return (
          <TrainingPlanTableComponent
            dataToDisplay={editableData as TrainingPlanData}
            isEditing={isEditing}
            onTextChange={handleTextChange}
            sourceChatSessionId={projectInstanceData.sourceChatSessionId}
            allUserMicroproducts={allUserMicroproducts}
            parentProjectName={parentProjectNameForCurrentView}
          />
        );
      case COMPONENT_NAME_PDF_LESSON:
        return (
          <PdfLessonDisplayComponent
            dataToDisplay={editableData as PdfLessonData}
            isEditing={isEditing}
            onTextChange={handleTextChange}
          />
        );
      case COMPONENT_NAME_VIDEO_LESSON:
        return (
          <VideoLessonDisplay
            dataToDisplay={editableData as VideoLessonData}
            isEditing={isEditing}
            onTextChange={handleTextChange}
          />
        );
      case COMPONENT_NAME_QUIZ:
        return (
          <QuizDisplay
            dataToDisplay={editableData as QuizData}
            isEditing={isEditing}
            onTextChange={handleTextChange}
          />
        );
      default:
        return <DefaultDisplayComponent instanceData={projectInstanceData} />;
    }
  };

  const displayName = projectInstanceData?.name || `Project ${projectId}`;
  const canEditContent = projectInstanceData &&
                          [COMPONENT_NAME_TRAINING_PLAN, COMPONENT_NAME_PDF_LESSON, COMPONENT_NAME_VIDEO_LESSON, COMPONENT_NAME_QUIZ].includes(projectInstanceData.component_name);

  return (
    <main className="p-4 md:p-8 bg-gray-100 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back
            </button>
            
            <Link
                href="/projects"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
                >
                <FolderOpen size={16} className="mr-2" />
                Open Products
            </Link>

            {chatRedirectUrl && (
                <Link
                  href={chatRedirectUrl}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <MessageSquare size={16} className="mr-2" />
                  Open Chat
                </Link>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {projectInstanceData && (typeof projectInstanceData.project_id === 'number') && (
                  <button
                    onClick={handlePdfDownload}
                    disabled={isSaving}
                    className="px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 flex items-center"
                    title="Download content as PDF"
                  >
                   <ArrowDownToLine size={16} className="mr-2" /> Download PDF
                  </button>
            )}
            {canEditContent && projectId && (
              <button
                onClick={handleToggleEdit}
                disabled={isSaving}
                className={`px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 flex items-center
                                ${isEditing ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' : 'bg-orange-500 hover:bg-orange-600 focus:ring-orange-500'}`}
                title={isEditing ? "Save current changes" : "Edit content"}
              >
                {isEditing ? (
                  <> <Save size={16} className="mr-2" /> {isSaving ? 'Saving...' : 'Save Content'} </>
                ) : (
                  <> <Edit size={16} className="mr-2" /> Edit Content </>
                )}
              </button>
            )}
          </div>
        </div>

        {saveError &&
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded-md text-sm flex items-center">
            <AlertTriangle size={18} className="mr-2 flex-shrink-0" />
            <span>{saveError}</span>
          </div>
        }

        <div className="bg-white p-4 sm:p-6 md:p-8 shadow-xl rounded-xl border border-gray-200">
            <Suspense fallback={<div className="py-10 text-center text-gray-500">Loading content display...</div>}>
              {displayContent()}
            </Suspense>
        </div>
      </div>
    </main>
  );
}
