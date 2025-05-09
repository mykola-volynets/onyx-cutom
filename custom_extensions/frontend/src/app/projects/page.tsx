// custom_extensions/frontend/src/app/projects/page.tsx
import ProjectsTable from '../../components/ProjectsTable';

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProjectsTable />
    </main>
  );
}