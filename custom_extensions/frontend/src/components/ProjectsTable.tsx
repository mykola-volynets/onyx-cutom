// custom_extensions/frontend/src/components/ProjectsTable.tsx
"use client";

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import {
  FileText,
  Trash2,
  ChevronDown,
  ChevronRight,
  ListOrdered,
  Edit2
} from 'lucide-react';
import { ProjectListItem } from '@/types/trainingPlan';
import { locales } from '@/locales';

const CUSTOM_BACKEND_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_URL || '/api/custom-projects-backend';

interface GroupedProjects {
  [projectName: string]: ProjectListItem[];
}

interface ProjectsTableProps {
  projects: Array<{
    id: string;
    name: string;
    description: string;
    status: string;
    createdAt: string;
  }>;
  onProjectClick: (projectId: string) => void;
  detectedLanguage?: 'en' | 'ru' | 'uk';
}

const ProjectsTable = ({ 
  projects, 
  onProjectClick,
  detectedLanguage = 'en'
}: ProjectsTableProps) => {
  const localized = locales[detectedLanguage]?.projects || locales['en'].projects;

  if (!projects.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        {localized.noProjects}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {localized.name}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {localized.description}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {localized.status}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {localized.createdAt}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr 
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="hover:bg-gray-50 cursor-pointer transition-colors duration-150"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{project.name}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">{project.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  project.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {localized[project.status as keyof typeof localized] || project.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(project.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
