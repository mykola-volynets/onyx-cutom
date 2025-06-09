import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, CheckCircle, Circle } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface TrainingPlanProps {
  modules: Module[];
  onLessonClick: (lessonId: string) => void;
}

const TrainingPlan: React.FC<TrainingPlanProps> = ({ modules, onLessonClick }) => {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Training Plan</h2>
      <div className="space-y-4">
        {modules.map((module) => (
          <div key={module.id} className="border rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleModule(module.id)}
            >
              <h3 className="font-semibold">{module.title}</h3>
              {expandedModules[module.id] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </div>
            {expandedModules[module.id] && (
              <div className="p-4">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => onLessonClick(lesson.id)}
                  >
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      <span>{lesson.title}</span>
                    </div>
                    {lesson.completed ? <CheckCircle size={16} className="text-green-500" /> : <Circle size={16} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPlan; 