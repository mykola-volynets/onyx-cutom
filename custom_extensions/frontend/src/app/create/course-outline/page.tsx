import { Suspense } from "react";
import CourseOutlineClient from "./CourseOutlineClient";

// Keep this page as a Server Component so that static export succeeds; the
// client-only logic (which relies on useSearchParams) lives in a nested Client
// Component that we wrap in <Suspense>.

export default function CourseOutlinePage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <CourseOutlineClient />
    </Suspense>
  );
}

// No static generation – this page must render per-request because we rely on
// query params. By returning "force-dynamic" Next.js skips pre-rendering during
// `next export` / `next build`.

export const dynamic = "force-dynamic"; 