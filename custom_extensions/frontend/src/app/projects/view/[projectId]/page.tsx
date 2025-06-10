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
  TextPresentationData,
} from '@/types/projectSpecificTypes';
import { VideoLessonData } from '@/types/videoLessonTypes';
import { ProjectListItem } from '@/types/products';
import TrainingPlanTableComponent from '@/components/TrainingPlanTable';
import PdfLessonDisplayComponent from '@/components/PdfLessonDisplay';
import VideoLessonDisplay from '@/components/VideoLessonDisplay';
import QuizDisplay from '@/components/QuizDisplay';
import TextPresentationDisplay from '@/components/TextPresentationDisplay';
import { Save, Edit, ArrowDownToLine, Info, AlertTriangle, ArrowLeft, FolderOpen, MessageSquare } from 'lucide-react';
import { locales } from '@/locales';

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || '/api/custom-projects-backend';

// Component Name Constants
const COMPONENT_NAME_TRAINING_PLAN = "TrainingPlanTable";
const COMPONENT_NAME_PDF_LESSON = "PdfLessonDisplay";
const COMPONENT_NAME_VIDEO_LESSON = "VideoLessonDisplay";
const COMPONENT_NAME_QUIZ = "QuizDisplay";
const COMPONENT_NAME_TEXT_PRESENTATION = "TextPresentationDisplay";

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

function ProjectInstanceViewPageContent() {
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
  
  const [chatRedirectUrl, setChatRedirectUrl] = useState<string | null>(null);

  const lang = useMemo(() => {
    const data = isEditing ? editableData : projectInstanceData?.details;
    return data?.detectedLanguage || 'en';
  }, [projectInstanceData, editableData, isEditing]);

  const locale = useMemo(() => locales[lang as keyof typeof locales] || locales.en, [lang]);

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
        } else if (instanceData.component_name === COMPONENT_NAME_QUIZ) {
          setEditableData(copiedDetails as QuizData);
        } else if (instanceData.component_name === COMPONENT_NAME_TEXT_PRESENTATION) {
          setEditableData(copiedDetails as TextPresentationData);
        } else {
          setEditableData(copiedDetails); 
        }
      } else {
        const detectedLang = instanceData.detectedLanguage || 'en'; 
        if (instanceData.component_name === COMPONENT_NAME_TRAINING_PLAN) {
          setEditableData({ mainTitle: instanceData.name || "New Training Plan", sections: [], detectedLanguage: detectedLang });
        } else if (instanceData.component_name === COMPONENT_NAME_PDF_LESSON) {
          setEditableData({ lessonTitle: instanceData.name || "New PDF Lesson", contentBlocks: [], detectedLanguage: detectedLang });
        } else if (instanceData.component_name === COMPONENT_NAME_VIDEO_LESSON) {
          setEditableData({ mainPresentationTitle: instanceData.name || "New Video Lesson", slides: [], detectedLanguage: detectedLang });
        } else if (instanceData.component_name === COMPONENT_NAME_QUIZ) {
          setEditableData({ quizTitle: instanceData.name || "New Quiz", questions: [], detectedLanguage: detectedLang });
        } else if (instanceData.component_name === COMPONENT_NAME_TEXT_PRESENTATION) {
            setEditableData({ textTitle: instanceData.name || "New Text Presentation", contentBlocks: [], detectedLanguage: detectedLang });
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


  const handleTextChange = useCallback((path: (string | number)[], newValue: any) => {
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
    setIsSaving(true);
    setSaveError(null);
    try {
      const apiUrl = `${CUSTOM_BACKEND_URL}/projects/update/${projectId}`;
      const headers: HeadersInit = { 'Content-Type': 'application/json' };
      const devUserId = sessionStorage.getItem("dev_user_id");
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ microProductContent: editableData }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        let errorDetail = `Failed to save changes (HTTP ${response.status}).`;
        try { const errorJson = JSON.parse(errorText); errorDetail = errorJson.detail || errorDetail; }
        catch { errorDetail = `${errorDetail} - ${errorText.substring(0, 150)}`; }
        throw new Error(errorDetail);
      }
      const updatedProject = await response.json();
      setProjectInstanceData(prev => prev ? { ...prev, details: updatedProject.microproduct_content } : null);
      setIsEditing(false);
    } catch (err: any) {
      setSaveError(err.message || "An unknown error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleEdit = () => {
    if (isEditing && projectInstanceData?.details) {
      const confirmed = window.confirm(locale.common.confirmCancelEdit);
      if (confirmed) {
        setEditableData(JSON.parse(JSON.stringify(projectInstanceData.details)));
        setIsEditing(false);
        setSaveError(null);
      }
    } else {
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

  const displayContent = () => {
    if (!projectInstanceData || editableData === undefined) {
      return <div className="text-center p-4">{locale.common.rendering || 'Rendering content...'}</div>;
    }

    const componentName = projectInstanceData.component_name;
    const dataToRender = isEditing ? editableData : projectInstanceData.details;
    const lessonNumber = (projectInstanceData.details && 'lessonNumber' in projectInstanceData.details) ? projectInstanceData.details.lessonNumber : undefined;

    switch (componentName) {
      case COMPONENT_NAME_TRAINING_PLAN:
        return <TrainingPlanTableComponent dataToDisplay={dataToRender as TrainingPlanData} isEditing={isEditing} onTextChange={handleTextChange} />;
      case COMPONENT_NAME_PDF_LESSON:
        return <PdfLessonDisplayComponent dataToDisplay={dataToRender as PdfLessonData} isEditing={isEditing} onTextChange={handleTextChange} parentProjectName={parentProjectNameForCurrentView} lessonNumber={lessonNumber}/>;
      case COMPONENT_NAME_VIDEO_LESSON:
        return <VideoLessonDisplay dataToDisplay={dataToRender as VideoLessonData} isEditing={isEditing} onTextChange={handleTextChange} />;
      case COMPONENT_NAME_QUIZ:
        return <QuizDisplay dataToDisplay={dataToRender as QuizData} isEditing={isEditing} onTextChange={handleTextChange} />;
      case COMPONENT_NAME_TEXT_PRESENTATION:
        return <TextPresentationDisplay dataToDisplay={dataToRender as TextPresentationData} isEditing={isEditing} onTextChange={handleTextChange} parentProjectName={parentProjectNameForCurrentView} />;
      default:
        return <DefaultDisplayComponent instanceData={projectInstanceData} />;
    }
  };

  if (pageState === 'initial_loading' || (pageState === 'fetching' && !projectInstanceData)) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center text-gray-500">
          <svg className="animate-spin h-8 w-8 text-blue-500 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="font-medium text-lg">{locale.projects.loadingProject || "Loading Project..."}</p>
        </div>
      </div>
    );
  }
  if (pageState === 'error') {
    return (
      <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <div className="flex items-center">
            <AlertTriangle size={24} className="text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-800">{locale.projects.errorLoadingProjectTitle || "Error Loading Project"}</h2>
        </div>
        <p className="text-red-700 mt-2">
            {locale.projects.errorLoadingProjectMessage || "There was a problem fetching the project data. Please try again later."}
        </p>
        <p className="mt-2 text-sm text-red-600 bg-red-100 p-2 rounded border border-red-200">
            <strong>{locale.common.errorDetails || "Details:"}</strong> {errorMessage}
        </p>
         <button onClick={() => router.push('/projects')} className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-md hover:bg-blue-100">
            <ArrowLeft size={16}/>
            {locale.projects.returnToProjects || "Return to Projects List"}
        </button>
      </div>
    );
  }
   if (pageState === 'nodata' || !projectInstanceData) {
    return (
       <div className="p-6 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <div className="flex items-center">
            <Info size={24} className="text-yellow-600 mr-3" />
            <h2 className="text-2xl font-bold text-yellow-800">{locale.projects.projectNotFoundTitle || "Project Not Found"}</h2>
        </div>
        <p className="text-yellow-700 mt-2">
            {locale.projects.projectNotFoundMessage || "The project you are looking for could not be found or you may not have permission to view it."}
        </p>
        <button onClick={() => router.push('/projects')} className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-md hover:bg-blue-100">
            <ArrowLeft size={16}/>
            {locale.projects.returnToProjects || "Return to Projects List"}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-4 flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/projects" passHref>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-md hover:bg-gray-100">
                    <ArrowLeft size={18} />
                    <FolderOpen size={18} className="hidden sm:inline-block"/>
                    <span className="hidden sm:inline-block">{locale.projects.allProjects || "All Projects"}</span>
                </button>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 truncate" title={projectInstanceData.name}>
              {projectInstanceData.name}
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            {chatRedirectUrl && (
              <a href={chatRedirectUrl} target="_blank" rel="noopener noreferrer" title={locale.common.sourceChatTooltip}
                 className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-md hover:bg-blue-50">
                <MessageSquare size={18}/>
                <span className="hidden sm:inline-block">{locale.common.sourceChat || "Source Chat"}</span>
              </a>
            )}
             <button
                onClick={handleToggleEdit}
                className={`flex items-center gap-2 text-sm font-medium p-2 rounded-md transition-all duration-200 ${
                  isEditing
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
            >
                <Edit size={18} />
                <span className="hidden sm:inline-block">{isEditing ? (locale.common.cancelEdit || "Cancel") : (locale.common.edit || "Edit")}</span>
            </button>
             <button
                onClick={handlePdfDownload}
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md transition-colors bg-green-100 text-green-700 hover:bg-green-200"
            >
                <ArrowDownToLine size={18} />
                <span className="hidden sm:inline-block">{locale.common.downloadPdf || "Download PDF"}</span>
            </button>
            {isEditing && (
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md transition-colors bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400"
              >
                <Save size={18} />
                <span className="hidden sm:inline-block">{isSaving ? (locale.common.saving || "Saving...") : (locale.common.save || "Save")}</span>
              </button>
            )}
          </div>
        </header>

         {saveError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
            <strong className="font-bold">{locale.common.saveErrorTitle || "Save Error:"} </strong>
            <span className="block sm:inline">{saveError}</span>
          </div>
        )}

        <main className="bg-white rounded-lg shadow-sm border border-gray-200">
           {displayContent()}
        </main>
      </div>
    </div>
  );
}

export default function ProjectInstanceViewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectInstanceViewPageContent />
    </Suspense>
  );
}