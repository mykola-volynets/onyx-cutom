// custom_extensions/frontend/src/app/projects/edit/[id]/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  TrainingPlanData, 
  Section as SectionType,
  Lesson as LessonType,
  StatusInfo,
  ProjectDetailDataForEdit,
} from '@/types/trainingPlan'; // Adjust path to your types file
import { PlusCircle, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

// Helper Functions
const createEmptyStatusInfo = (): StatusInfo => ({ type: 'unknown', text: '' });

const createEmptyLesson = (idSuffix: string | number = Date.now()): LessonType => ({
  id: `L${idSuffix}_${Math.random().toString(36).substr(2, 5)}`,
  title: '',
  check: createEmptyStatusInfo(),
  contentAvailable: createEmptyStatusInfo(), 
  source: '',
  hours: 0,
});

const createEmptySection = (idSuffix: string | number = Date.now()): SectionType => ({
  id: `S_${idSuffix}_${Math.random().toString(36).substr(2, 5)}`,
  title: '',
  totalHours: 0,
  lessons: [createEmptyLesson(1)],
});

const createEmptyTrainingPlan = (initialProjectName?: string): TrainingPlanData => ({
  mainTitle: initialProjectName || "New Training Plan",
  sections: [createEmptySection(1)],
  detectedLanguage: 'en', 
});


const EditProjectPageComponent = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : null;

  const [projectName, setProjectName] = useState('');
  const [product, setProduct] = useState('');
  const [microProductType, setMicroProductType] = useState('');
  const [microProductName, setMicroProductName] = useState('');
  
  const [trainingPlanData, setTrainingPlanData] = useState<TrainingPlanData | null>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  const productOptions = ["Strategy", "*Audit"];
  const microProductTypeOptions: { [key: string]: string[] } = {
    "Strategy": ["Training Plan"],
    "*Audit": ["Training Plan"],
    "": []
  };

  const loadProjectData = useCallback(async () => {
    if (!projectId) return;
    setIsLoading(true);
    setError(null);
    try {
      const headers: HeadersInit = {};
      const devUserId = "dummy-onyx-user-id-for-testing"; 
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }

      const response = await fetch(`/api/custom-projects-backend/projects/${projectId}`, { headers });
      if (!response.ok) {
        const errorDataText = await response.text();
        let errorDetail = `HTTP error! status: ${response.status}`;
        try {
            const errorJson = JSON.parse(errorDataText);
            errorDetail = errorJson.detail || errorDetail;
        } catch(e) {
            errorDetail = `${errorDetail} - ${errorDataText.substring(0,100)}`;
        }
        throw new Error(errorDetail);
      }
      const data: ProjectDetailDataForEdit = await response.json();
      
      setProjectName(data.projectName || '');
      setProduct(data.product || '');
      setMicroProductType(data.microProductType || '');
      setMicroProductName(data.microProductName || '');
      
      if (data.microProductContent) {
        setTrainingPlanData(data.microProductContent);
      } else {
        setTrainingPlanData(createEmptyTrainingPlan(data.projectName));
      }
      setInitialDataLoaded(true);
    } catch (err: any) {
      console.error("Failed to fetch project:", err);
      setError(err.message || "Could not load project data.");
      setTrainingPlanData(createEmptyTrainingPlan('Error Loading Project Name'));
    } finally {
      setIsLoading(false);
    }
  }, [projectId]); 

  useEffect(() => {
    if (projectId && !initialDataLoaded) {
      loadProjectData();
    }
  }, [projectId, initialDataLoaded, loadProjectData]);

  const handleSave = async () => {
    if (!projectId) {
      alert("Project ID is missing.");
      return;
    }
    if (!trainingPlanData) {
        alert("Training plan data is not initialized.");
        return;
    }
    setIsSaving(true);
    setError(null);

    const payload = {
      projectName,
      product,
      microProductType,
      microProductName,
      microProductContent: trainingPlanData,
    };

    try {
      const headers: HeadersInit = { 'Content-Type': 'application/json' };
      const devUserId = "dummy-onyx-user-id-for-testing"; 
      if (devUserId && process.env.NODE_ENV === 'development') {
        headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      
      const response = await fetch(`/api/custom-projects-backend/projects/update/${projectId}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorDataText = await response.text();
        let errorDetail = `HTTP error! status: ${response.status}`;
        try {
            const errorJson = JSON.parse(errorDataText);
            errorDetail = errorJson.detail || errorDetail;
        } catch(e) {
             errorDetail = `${errorDetail} - ${errorDataText.substring(0,100)}`;
        }
        throw new Error(errorDetail);
      }
      alert("Project updated successfully!");
      router.push('/projects');
    } catch (err: any) {
      console.error("Failed to save project:", err);
      setError(err.message || "Could not save project data.");
      alert(`Error: ${err.message || "Could not save project data."}`);
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleTrainingPlanDataChange = (field: keyof TrainingPlanData, value: any) => {
    setTrainingPlanData(prev => {
        const basePlan = prev || createEmptyTrainingPlan(projectName);
        return { ...basePlan, [field]: value };
    });
  };

  const handleSectionChange = (sectionIndex: number, field: keyof SectionType, value: any) => {
    if (!trainingPlanData) return;
    const newSections = trainingPlanData.sections.map((s, idx) => 
      idx === sectionIndex ? { ...s, [field]: value } : s
    );
    setTrainingPlanData({ ...trainingPlanData, sections: newSections });
  };

  const handleLessonChange = (sectionIndex: number, lessonIndex: number, field: keyof LessonType, value: any) => {
    if (!trainingPlanData) return;
    const newSections = [...trainingPlanData.sections];
    const currentSection = { ...newSections[sectionIndex] };
    const newLessons = [...currentSection.lessons];
    const updatedLesson = { ...newLessons[lessonIndex], [field]: value };
    newLessons[lessonIndex] = updatedLesson;
    currentSection.lessons = newLessons;

    if (field === 'hours') {
      currentSection.totalHours = newLessons.reduce((sum, lesson) => sum + (Number(lesson.hours) || 0), 0);
    }
    newSections[sectionIndex] = currentSection;
    setTrainingPlanData({ ...trainingPlanData, sections: newSections });
  };
  
  const handleLessonStatusChange = (sectionIndex: number, lessonIndex: number, field: 'check' | 'contentAvailable', subField: keyof StatusInfo, value: string) => {
      if (!trainingPlanData) return;
      const newSections = [...trainingPlanData.sections];
      const currentSection = { ...newSections[sectionIndex] };
      const newLessons = [...currentSection.lessons];
      const lesson = { ...newLessons[lessonIndex] };
      const updatedStatusInfo = { ...(lesson[field] || createEmptyStatusInfo()), [subField]: value };
      (lesson as any)[field] = updatedStatusInfo;
      
      newLessons[lessonIndex] = lesson;
      currentSection.lessons = newLessons;
      newSections[sectionIndex] = currentSection;
      setTrainingPlanData({ ...trainingPlanData, sections: newSections });
  };

  const addSection = () => {
    setTrainingPlanData(prev => {
        const basePlan = prev || createEmptyTrainingPlan(projectName);
        return {
            ...basePlan,
            sections: [...(basePlan.sections || []), createEmptySection(basePlan.sections?.length ? basePlan.sections.length + 1 : 1)],
        };
    });
  };

  const removeSection = (sectionIndex: number) => {
    if (!trainingPlanData) return;
    const newSections = trainingPlanData.sections.filter((_, i) => i !== sectionIndex);
    setTrainingPlanData({ ...trainingPlanData, sections: newSections });
  };

  const addLesson = (sectionIndex: number) => {
    if (!trainingPlanData) return;
    const newSections = [...trainingPlanData.sections];
    if (newSections[sectionIndex]) {
        const currentSection = { ...newSections[sectionIndex] };
        currentSection.lessons = [...(currentSection.lessons || []), createEmptyLesson(currentSection.lessons?.length ? currentSection.lessons.length + 1 : 1)];
        newSections[sectionIndex] = currentSection;
        setTrainingPlanData({ ...trainingPlanData, sections: newSections });
    }
  };

  const removeLesson = (sectionIndex: number, lessonIndex: number) => {
    if (!trainingPlanData) return;
    const newSections = [...trainingPlanData.sections];
    if (newSections[sectionIndex]) {
        const currentSection = { ...newSections[sectionIndex] };
        currentSection.lessons = currentSection.lessons.filter((_, i) => i !== lessonIndex);
        currentSection.totalHours = currentSection.lessons.reduce((sum, lesson) => sum + (Number(lesson.hours) || 0), 0);
        newSections[sectionIndex] = currentSection;
        setTrainingPlanData({ ...trainingPlanData, sections: newSections });
    }
  };
  
   const moveLesson = (sectionIndex: number, lessonIndex: number, direction: 'up' | 'down') => {
    if (!trainingPlanData) return;
    const newSections = [...trainingPlanData.sections];
    if (!newSections[sectionIndex]) return;

    const currentSection = { ...newSections[sectionIndex] };
    const lessons = [...currentSection.lessons];
    const targetIndex = direction === 'up' ? lessonIndex - 1 : lessonIndex + 1;

    if (targetIndex < 0 || targetIndex >= lessons.length) return;

    const temp = lessons[lessonIndex];
    lessons[lessonIndex] = lessons[targetIndex];
    lessons[targetIndex] = temp;
    
    currentSection.lessons = lessons;
    newSections[sectionIndex] = currentSection;
    setTrainingPlanData({ ...trainingPlanData, sections: newSections });
  };

  if (isLoading && !initialDataLoaded) return <div className="p-8 text-center font-['Inter',_sans-serif]">Loading project details...</div>;
  if (error && !trainingPlanData) return <div className="p-8 text-center text-red-500 font-['Inter',_sans-serif]">Error: {error}</div>;
  if (!projectId || !trainingPlanData) return <div className="p-8 text-center text-red-500 font-['Inter',_sans-serif]">Error: Project data not fully available.</div>;

  const inputBaseClasses = "block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
  const labelBaseClasses = "block text-sm font-medium text-black mb-1"; // Changed to text-black
  const smallInputClasses = `${inputBaseClasses} text-black`; // Added text-black
  const sectionTitleClasses = "text-lg font-semibold text-black p-2 border border-gray-300 rounded-md w-full"; // Changed to text-black
  const lessonTitleClasses = `${inputBaseClasses} text-black`; // Changed to text-black

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-black">Edit Project (ID: {projectId})</h1> {/* Changed to text-black */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 pb-6 border-b border-gray-200">
          <div>
            <label htmlFor="projectName" className={labelBaseClasses}>Project Name:</label>
            <input type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} className={`${inputBaseClasses} text-black`}/>
          </div>
          <div>
            <label htmlFor="product" className={labelBaseClasses}>Product:</label>
            <select id="product" value={product} onChange={(e) => { setProduct(e.target.value); setMicroProductType(''); setMicroProductName(''); }} className={`${inputBaseClasses} text-black bg-white`}>
              <option value="">-- Choose Product --</option>
              {productOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="microProductType" className={labelBaseClasses}>Microproduct Type:</label>
            <select id="microProductType" value={microProductType} onChange={(e) => setMicroProductType(e.target.value)} className={`${inputBaseClasses} text-black bg-white`} disabled={!product}>
              <option value="">-- Choose Microproduct Type --</option>
              {(microProductTypeOptions[product] || []).map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="microProductName" className={labelBaseClasses}>Microproduct Name (Optional):</label>
            <input
              type="text" id="microProductName" value={microProductName}
              onChange={(e) => setMicroProductName(e.target.value)}
              className={`${inputBaseClasses} text-black`}
              placeholder="Custom name (e.g., Onboarding Plan)"
            />
             <p className="mt-1 text-xs text-gray-500">If blank, type will be used as name.</p>
          </div>
        </div>

        {trainingPlanData && (
          <div className="pt-6">
            <div className="flex justify-between items-center mb-4">
                 <h2 className="text-xl font-semibold text-black"> {/* Changed to text-black */}
                    Training Plan Details
                    {trainingPlanData.detectedLanguage && ` (${trainingPlanData.detectedLanguage.toUpperCase()})`}
                </h2>
                 <button onClick={addSection} className="flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <PlusCircle size={16} className="mr-2"/> Add Section
                </button>
            </div>
            <div className="mb-4">
                 <label htmlFor="mainTitle" className={labelBaseClasses}>Main Training Plan Title:</label>
                 <input
                    type="text"
                    id="mainTitle"
                    value={trainingPlanData.mainTitle || ''}
                    onChange={(e) => handleTrainingPlanDataChange('mainTitle', e.target.value)}
                    placeholder="Main Plan Title"
                    className={`${inputBaseClasses} text-black`}
                />
            </div>

            {trainingPlanData.sections.map((section, sectionIdx) => (
              <div key={section.id || `section-${sectionIdx}`} className="mb-6 p-4 border border-gray-300 rounded-lg bg-slate-50 shadow">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex-grow mr-2">
                         <label className="block text-xs font-medium text-black">Section Title (e.g., Module 1: Introduction)</label> {/* Changed to text-black */}
                        <input
                            type="text"
                            value={section.title}
                            onChange={(e) => handleSectionChange(sectionIdx, 'title', e.target.value)}
                            placeholder="Section Title"
                            className={sectionTitleClasses} // Uses updated class
                        />
                    </div>
                  <button onClick={() => removeSection(sectionIdx)} className="p-1.5 text-red-500 hover:text-red-700" title="Remove Section">
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-xs font-medium text-black">Section ID (e.g., №1, Mod1):</label> {/* Changed to text-black */}
                        <input
                            type="text"
                            value={section.id}
                            onChange={(e) => handleSectionChange(sectionIdx, 'id', e.target.value)}
                            placeholder="Section ID"
                            className={smallInputClasses} // Uses updated class
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-black">Total Hours (auto-calculated):</label> {/* Changed to text-black */}
                        <input
                            type="number"
                            value={section.totalHours.toFixed(1)}
                            readOnly 
                            className={`${smallInputClasses} bg-gray-100`}
                        />
                    </div>
                </div>
                
                <h4 className="text-md font-semibold text-black mb-2 mt-4">Lessons:</h4> {/* Changed to text-black */}
                {section.lessons.map((lesson, lessonIdx) => (
                  <div key={lesson.id || `lesson-${sectionIdx}-${lessonIdx}`} className="ml-4 mb-4 p-3 border border-gray-200 rounded-md bg-white shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex-grow">
                            <label className="block text-xs font-medium text-black">Lesson {lessonIdx + 1} Title:</label> {/* Changed to text-black */}
                            <input type="text" value={lesson.title} onChange={(e) => handleLessonChange(sectionIdx, lessonIdx, 'title', e.target.value)} placeholder="Lesson Title" className={lessonTitleClasses}/>
                        </div>
                        <div className="flex items-center ml-2 flex-shrink-0">
                            <button onClick={() => moveLesson(sectionIdx, lessonIdx, 'up')} disabled={lessonIdx === 0} className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30" title="Move Up"><ArrowUp size={16}/></button>
                            <button onClick={() => moveLesson(sectionIdx, lessonIdx, 'down')} disabled={lessonIdx === section.lessons.length - 1} className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30" title="Move Down"><ArrowDown size={16}/></button>
                            <button onClick={() => removeLesson(sectionIdx, lessonIdx)} className="p-1 text-red-500 hover:text-red-700 ml-1" title="Remove Lesson"><Trash2 size={16}/></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div>
                            <label className="block text-xs font-medium text-black">Hours:</label> {/* Changed to text-black */}
                            <input type="number" step="0.1" value={lesson.hours} onChange={(e) => handleLessonChange(sectionIdx, lessonIdx, 'hours', parseFloat(e.target.value) || 0)} placeholder="Hours" className={smallInputClasses}/>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-black">Source:</label> {/* Changed to text-black */}
                            <input type="text" value={lesson.source} onChange={(e) => handleLessonChange(sectionIdx, lessonIdx, 'source', e.target.value)} placeholder="Source" className={smallInputClasses}/>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-black">Knowledge Assessment Text:</label> {/* Changed to text-black */}
                            <input type="text" value={lesson.check.text} onChange={(e) => handleLessonStatusChange(sectionIdx, lessonIdx, 'check', 'text', e.target.value)} placeholder="Assessment Text" className={smallInputClasses}/>
                        </div>
                         <div>
                            <label className="block text-xs font-medium text-black">Content Available Text:</label> {/* Changed to text-black */}
                            <input type="text" value={lesson.contentAvailable.text} onChange={(e) => handleLessonStatusChange(sectionIdx, lessonIdx, 'contentAvailable', 'text', e.target.value)} placeholder="Content Availability Text" className={smallInputClasses}/>
                        </div>
                    </div>
                  </div>
                ))}
                <button onClick={() => addLesson(sectionIdx)} className="mt-2 flex items-center text-sm text-green-600 hover:text-green-800">
                  <PlusCircle size={16} className="mr-1"/> Add Lesson to this Section
                </button>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-end gap-3 mt-8">
          <button type="button" onClick={() => router.push('/projects')} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving || isLoading || !projectName || !product || !microProductType}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default function EditProjectPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading page...</div>}>
      <EditProjectPageComponent />
    </Suspense>
  );
}
