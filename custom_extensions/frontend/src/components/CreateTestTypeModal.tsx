// custom_extensions/frontend/src/components/CreateTestTypeModal.tsx
"use client";

import React from 'react';
import { X, CheckSquare } from 'lucide-react';

interface CreateTestTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle: string;
  moduleName: string;      // Added for context
  lessonNumber: number;    // Added for context
  sourceChatSessionId: string | null | undefined;
}

const testTypes = [
  { 
    name: "Quiz", 
    icon: <CheckSquare className="w-6 h-6" />, 
    disabled: false,
    tooltip: "Create a quiz for this lesson"
  },
];

// Self-contained Modal component
const Modal = ({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) => (
    <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center p-4"
        onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors z-10"
            aria-label="Close modal"
        >
            <X size={24} />
        </button>

        <div className="pt-10 pb-4 text-center">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        </div>
        
        {children}
      </div>
    </div>
);

// Self-contained StyledButton component
const StyledButton = ({ children, onClick, disabled, title, className = '' }: { children: React.ReactNode, onClick: () => void, disabled?: boolean, title?: string, className?: string }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        flex items-center w-full px-5 py-3
        rounded-xl
        text-md font-semibold text-slate-700 bg-slate-100
        hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        disabled:bg-slate-50 disabled:text-slate-400 disabled:scale-100 disabled:cursor-not-allowed
        transition-all duration-200 ease-in-out
        ${className}
      `}
    >
      {children}
    </button>
);


export const CreateTestTypeModal = ({ 
  isOpen, 
  onClose, 
  lessonTitle, 
  moduleName,
  lessonNumber,
  sourceChatSessionId 
}: CreateTestTypeModalProps) => {
  const handleTestCreate = (testType: string) => {
    if (!sourceChatSessionId) {
      alert("Error: Source chat session ID is not available. Cannot create test.");
      onClose();
      return;
    }

    const message = `Please create a ${testType} for the ${lessonTitle} (module: ${moduleName}, lesson: ${lessonNumber})`;
    
    const chatUrl = `/chat?chatId=${sourceChatSessionId}&user-prompt=${encodeURIComponent(message)}&send-on-load=true`;
    
    window.location.href = chatUrl;
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal title="Create Test" onClose={onClose}>
      <div className="px-6 pb-6">
        <div className="text-center mb-4">
          <p className="text-2xl font-bold text-indigo-600 break-words">
            {lessonTitle}
          </p>
        </div>
        <div className="space-y-4">
          {testTypes.map((type) => (
            <StyledButton
              key={type.name}
              onClick={() => handleTestCreate(type.name)}
              disabled={type.disabled}
              title={type.tooltip}
            >
                <div className="w-1/4 flex justify-center items-center">
                    {type.icon}
                </div>
                <div className="w-3/4 text-left">
                    {type.name}
                </div>
            </StyledButton>
          ))}
        </div>
      </div>
    </Modal>
  );
};
