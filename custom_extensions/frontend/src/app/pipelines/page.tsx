// custom_extensions/frontend/src/app/custom-projects-ui/pipelines/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { Pipeline } from '@/types/pipelines'; // Adjust path if your types are elsewhere
import { Eye, XCircle, CheckCircle2, Plus } from 'lucide-react'; 

// Corrected Sample Data
const samplePipelines: Pipeline[] = [
  {
    id: 1,
    pipeline_name: "Content Summarization Pipeline",
    pipeline_description: "Summarizes long articles into concise paragraphs.",
    is_prompts_data_collection: true,
    is_prompts_data_formating: true,
    prompts_data_collection: { 
      "1": "Fetch the main content from the provided URL.",
      "2": "Identify key sentences and entities." 
    },
    prompts_data_formating: { 
      "1": "Summarize the extracted content into one paragraph.",
      "2": "Ensure the summary style is executive and concise.",
      "3": "Output format should be plain text."
    },
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), 
  },
  {
    id: 2,
    pipeline_name: "Data Extraction - Invoices",
    pipeline_description: "Extracts key information from PDF invoices.",
    is_prompts_data_collection: true,
    is_prompts_data_formating: false, 
    prompts_data_collection: { 
      "1": "Perform OCR on the invoice PDF.",
      "2": "Extract Invoice Number.",
      "3": "Extract Invoice Date.",
      "4": "Extract Total Amount."
    },
    prompts_data_formating: null, 
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), 
  },
  {
    id: 3,
    pipeline_name: "Sentiment Analysis Pipeline",
    pipeline_description: "Analyzes customer feedback for sentiment.",
    is_prompts_data_collection: false, 
    is_prompts_data_formating: true,
    prompts_data_collection: null,
    prompts_data_formating: { 
      "1": "Classify the sentiment of the input text.",
      "2": "Output categories should be: positive, negative, neutral.",
      "3": "Provide a confidence score if possible." 
    },
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), 
  },
];


const PipelinesPageComponent = () => {
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchPipelines = async () => {
      try {
        // TODO: Replace with your actual API endpoint for fetching pipelines
        const response = await fetch('/api/custom-projects-backend/pipelines'); 
        if (!response.ok) {
          const errData = await response.json().catch(() => ({ detail: "Failed to fetch pipelines"}));
          throw new Error(errData.detail || `HTTP error! status: ${response.status}`);
        }
        const data: Pipeline[] = await response.json();
        setPipelines(data);
      } catch (err: any) {
        console.error("Failed to fetch pipelines:", err);
        setError("Could not load pipelines from backend. Displaying sample data for now.");
        // Fallback to sample data on error if backend isn't ready or fails
        setPipelines(samplePipelines); 
      } finally {
        setLoading(false);
      }
    };
    
    // For now, we are using sample data as per the previous step.
    // When your backend is ready, uncomment fetchPipelines() and remove the direct setPipelines(samplePipelines).
    // fetchPipelines(); 
    setTimeout(() => { // Simulating fetch for sample data
        setPipelines(samplePipelines);
        setLoading(false);
    }, 500);


  }, []);

  const handleViewJson = (jsonData: any, title: string) => {
    // A more sophisticated modal would be better for real use.
    alert(`${title}:\n\n${JSON.stringify(jsonData, null, 2)}`);
  };

  if (loading) {
    return <div className="p-8 text-center font-['Inter',_sans-serif] text-black">Loading pipelines...</div>;
  }

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Microproduct Pipelines</h1>
          <Link href="/pipelines/new" legacyBehavior>
            <a className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Plus size={18} className="mr-2" /> Add New Pipeline
            </a>
          </Link>
        </div>

        {error && <div className="mb-4 p-3 bg-yellow-100 text-yellow-700 border border-yellow-300 rounded-md">{error}</div>}

        {pipelines.length === 0 && !loading ? (
          <div className="text-center text-gray-500 py-10">
            No pipelines configured yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Pipeline Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Collects Data
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Formats Data
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Collection Prompts
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Formatting Prompts
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pipelines.map((pipeline) => (
                  <tr key={pipeline.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                      {pipeline.pipeline_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-black break-words max-w-xs whitespace-pre-wrap">
                      {pipeline.pipeline_description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black text-center">
                      {pipeline.is_prompts_data_collection ? 
                        <CheckCircle2 className="h-5 w-5 text-green-500 inline-block" aria-label="Yes" /> :
                        <XCircle className="h-5 w-5 text-red-500 inline-block" aria-label="No" />
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black text-center">
                      {pipeline.is_prompts_data_formating ?
                        <CheckCircle2 className="h-5 w-5 text-green-500 inline-block" aria-label="Yes" /> :
                        <XCircle className="h-5 w-5 text-red-500 inline-block" aria-label="No" />
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {pipeline.prompts_data_collection && Object.keys(pipeline.prompts_data_collection).length > 0 ? (
                        <button 
                          onClick={() => handleViewJson(pipeline.prompts_data_collection, `${pipeline.pipeline_name} - Collection Prompts`)}
                          className="text-indigo-600 hover:text-indigo-900 inline-flex items-center text-xs"
                          aria-label={`View collection prompts for ${pipeline.pipeline_name}`}
                        >
                          <Eye size={14} className="mr-1"/> View ({Object.keys(pipeline.prompts_data_collection).length})
                        </button>
                      ) : (
                        <span className="text-xs text-gray-400 italic">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                       {pipeline.prompts_data_formating && Object.keys(pipeline.prompts_data_formating).length > 0 ? (
                        <button 
                          onClick={() => handleViewJson(pipeline.prompts_data_formating, `${pipeline.pipeline_name} - Formatting Prompts`)}
                          className="text-indigo-600 hover:text-indigo-900 inline-flex items-center text-xs"
                          aria-label={`View formatting prompts for ${pipeline.pipeline_name}`}
                        >
                           <Eye size={14} className="mr-1"/> View ({Object.keys(pipeline.prompts_data_formating).length})
                        </button>
                      ) : (
                        <span className="text-xs text-gray-400 italic">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {new Date(pipeline.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default function PipelinesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-['Inter',_sans-serif]">Loading Pipelines page...</div>}>
      <PipelinesPageComponent />
    </Suspense>
  );
}
