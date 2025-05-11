// custom_extensions/frontend/src/app/projects/[projectSlug]/[productSlug]/[microProductSlug]/page.tsx
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import TrainingPlanTableComponent from '@/components/TrainingPlanTable';
import { Suspense, useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { MicroProductDetail, TrainingPlanData, Section } from '@/types/trainingPlan'; // Assuming Section is exported

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL;

type MicroProductRouteParams = {
  projectSlug: string;
  productSlug: string;
  microProductSlug: string;
};

export default function MicroProductDetailPage() {
  const params = useParams<MicroProductRouteParams>();
  const [microProductData, setMicroProductData] = useState<MicroProductDetail | null>(null);
  const [pageState, setPageState] = useState<'initial_loading' | 'fetching' | 'error' | 'success' | 'nodata'>('initial_loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchMicroProductData = useCallback(async (projectSlug: string, productSlug: string, microProductSlug: string) => {
    setPageState('fetching'); // Indicate active fetching
    setErrorMessage(null);
    setMicroProductData(null);

    const apiUrl = `${CUSTOM_BACKEND_URL}/microproducts/${projectSlug}/${productSlug}/${microProductSlug}`;
    console.log("Fetching microproduct details from:", apiUrl);

    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) {
         const errorText = await res.text();
         console.error("Fetch error:", res.status, errorText);
         try { const jsonError = JSON.parse(errorText); throw new Error(jsonError.detail || `HTTP error ${res.status}`);
         } catch { throw new Error(`HTTP error ${res.status}`); } // Simplified error from response
      }
      const data: MicroProductDetail = await res.json();
      setMicroProductData(data);
      // More robust check for valid details
      if (data && data.details && Array.isArray(data.details.sections) && data.details.sections.length > 0) {
        setPageState('success');
      } else {
        console.warn("Data received but details.sections are missing, empty, or not an array.");
        setPageState('nodata');
      }
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setErrorMessage(err.message || "An unknown error occurred");
      setPageState('error');
    }
  }, []);

  useEffect(() => {
    const currentProjectSlug = params?.projectSlug;
    const currentProductSlug = params?.productSlug;
    const currentMicroProductSlug = params?.microProductSlug;

    console.log("MicroProductDetailPage params (useEffect):", { currentProjectSlug, currentProductSlug, currentMicroProductSlug });

    if (currentProjectSlug && currentProductSlug && currentMicroProductSlug) {
      if (pageState === 'initial_loading') { // Fetch only if in initial loading state and params are ready
        fetchMicroProductData(currentProjectSlug, currentProductSlug, currentMicroProductSlug);
      }
    } else {
      if (params && Object.keys(params).length > 0) { // Params object exists but slugs are undefined/empty
          setErrorMessage("Missing expected slug parameters in URL.");
          setPageState('error');
      }
      // If params is empty {}, pageState remains 'initial_loading', waiting for params to populate.
    }
  }, [params, fetchMicroProductData, pageState]); // Added pageState to prevent re-fetch loops

  // Initial, simplest possible render until params are resolved and data is fetched
  if (pageState === 'initial_loading' || pageState === 'fetching') {
    return <div className="p-8 text-center">Loading micro-product details...</div>;
  }

  if (pageState === 'error') {
    return <div className="p-8 text-center text-red-500">Error: {errorMessage || "Failed to load data."}</div>;
  }

  // If not loading and no error, but no data (pageState === 'nodata' or microProductData is null)
  if (pageState === 'nodata' || !microProductData) {
    return <div className="p-8 text-center text-orange-500">Micro-product data not found or details are unavailable.</div>;
  }

  // At this point, pageState === 'success' and microProductData is available
  const displayProjectSlug = decodeURIComponent(params?.projectSlug || '');
  const displayProductSlug = decodeURIComponent(params?.productSlug || '');
  const displayMicroProductSlug = decodeURIComponent(params?.microProductSlug || '');
  const displayName = microProductData.name || displayMicroProductSlug;

  return (
    <main className="p-4 md:p-8 bg-gray-50">
      <Suspense fallback={<div>Loading training plan table...</div>}>
        {/* microProductData.details should be valid TrainingPlanData here */}
        <TrainingPlanTableComponent initialData={microProductData.details} />
      </Suspense>
    </main>
  );
}
