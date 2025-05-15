// custom_extensions/frontend/src/app/add-to-project/page.tsx
"use client"; 

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const AddToProjectPageComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [product, setProduct] = useState('');
  const [microProduct, setMicroProduct] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productOptions = ["Стратегия", "*Аудит"];
  const microProductOptions: { [key: string]: string[] } = {
    "Стратегия": ["План обучения"],
    "*Аудит": ["План обучения"],
    "": []
  };

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const payload = {
      projectName,
      product,
      microProduct,
      aiResponse,
    };

    console.log("Submitting to backend:", payload);
    const API_ENDPOINT = `/api/custom-projects-backend/projects/add`; 

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      const devUserId = "dummy-onyx-user-id-for-testing"; // Replace with actual user ID logic
      if (devUserId && process.env.NODE_ENV === 'development') { // Example condition
          headers['X-Dev-Onyx-User-ID'] = devUserId;
      }
      // If you implement actual token-based auth, add Authorization header here

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorData}`);
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      // alert('Проект успешно добавлен!'); // REMOVED THIS LINE
      
      router.push('/projects'); 
      
    } catch (error) {
      console.error('Failed to submit project:', error);
      alert(`Ошибка при добавлении проекта: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... (JSX for the form remains the same as in response #39) ...
  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen font-['Inter',_sans-serif]">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Добавить в проект из ответа ИИ</h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">Название проекта:</label>
              <input type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"/>
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Продукт:</label>
              <select id="product" value={product} onChange={(e) => { setProduct(e.target.value); setMicroProduct(''); }} className="block w-full p-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white text-gray-900">
                <option value="">-- Выберите продукт --</option>
                {productOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="microProduct" className="block text-sm font-medium text-gray-700 mb-1">Микропродукт:</label>
              <select id="microProduct" value={microProduct} onChange={(e) => setMicroProduct(e.target.value)} className="block w-full p-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white text-gray-900" disabled={!product}>
                <option value="">-- Выберите микропродукт --</option>
                {(microProductOptions[product] || []).map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div className="mt-2">
              <button onClick={handleSubmit} disabled={isSubmitting} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50">
                {isSubmitting ? 'Добавление...' : 'Добавить'}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="aiResponse" className="block text-sm font-medium text-gray-700 mb-1">Текст ответа ИИ (редактируемый):</label>
            <textarea id="aiResponse" value={aiResponse} onChange={(e) => setAiResponse(e.target.value)} className="block w-full h-96 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono text-xs text-gray-900" placeholder="AI response will appear here..."/>
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
