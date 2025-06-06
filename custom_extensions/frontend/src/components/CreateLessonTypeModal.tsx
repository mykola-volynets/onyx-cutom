"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { BookText, Video, Film, X } from 'lucide-react';

interface CreateLessonTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle: string;
  sourceChatSessionId: string | null | undefined;
}

const lessonTypes = [
  { 
    name: "Lesson Presentation", 
    icon: <BookText className="w-5 h-5 mr-3" />, 
    disabled: false 
  },
  { 
    name: "Video Lesson Script", 
    icon: <Video className="w-5 h-5 mr-3" />, 
    disabled: false 
  },
  { 
    name: "Video Lesson", 
    icon: <Film className="w-5 h-5 mr-3" />, 
    disabled: true,
    tooltip: "Coming soon!" 
  },
];

// A self-contained, Tailwind-styled Modal to avoid cross-project imports.
const Modal = ({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto" 
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-700 transition-colors">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
);

// A self-contained, Tailwind-styled Button to match the UI.
const StyledButton = ({ children, onClick, disabled, title, className = '' }: { children: React.ReactNode, onClick: () => void, disabled?: boolean, title?: string, className?: string }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        flex items-center w-full px-4 py-3 text-left
        border border-gray-300 rounded-md shadow-sm 
        text-sm font-medium text-gray-800 bg-white 
        hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed
        transition-colors duration-150
        ${className}
      `}
    >
      {children}
    </button>
);

export const CreateLessonTypeModal = ({ 
  isOpen, 
  onClose, 
  lessonTitle, 
  sourceChatSessionId 
}: CreateLessonTypeModalProps) => {
  const router = useRouter();

  const handleLessonCreate = (lessonType: string) => {
    if (!sourceChatSessionId) {
      alert("Error: Source chat session ID is not available. Cannot create lesson.");
      onClose();
      return;
    }

    const message = `Please create a ${lessonType} for the ${lessonTitle}`;
    
    // Construct the URL to redirect to the chat page with parameters to auto-send the message
    const chatUrl = `/chat?chatId=${sourceChatSessionId}&user-prompt=${encodeURIComponent(message)}&send-on-load=true`;
    
    window.location.href = chatUrl;
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose}>
        <Modal title={`Create a lesson for:`} onClose={onClose}>
            <div className="p-6 pt-2">
                <p className="text-base font-semibold text-indigo-600 mb-4 break-words">
                  &ldquo;{lessonTitle}&rdquo;
                </p>
                <div className="space-y-3">
                  {lessonTypes.map((type) => (
                      <StyledButton
                          key={type.name}
                          onClick={() => handleLessonCreate(type.name)}
                          disabled={type.disabled}
                          title={type.tooltip}
                      >
                          {type.icon}
                          {type.name}
                          {type.disabled && <span className="ml-auto text-xs font-normal text-gray-500">{type.tooltip}</span>}
                      </StyledButton>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                    <button 
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    </div>
  );
};
