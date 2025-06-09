// web/src/components/chat/MakeIntoProductModal.tsx

"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertTriangle, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DesignTemplateResponse } from '@/types/designTemplates';

import './MakeIntoProductModal.css';

interface MakeIntoProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (message: string) => void;
}

const CUSTOM_BACKEND_ROOT_URL = process.env.NEXT_PUBLIC_CUSTOM_BACKEND_ROOT_URL || '';

const getFullImagePath = (imagePath?: string | null) => {
  if (!imagePath) {
    return '/images/placeholder-image.png';
  }
  if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
    return imagePath;
  }
  return `${CUSTOM_BACKEND_ROOT_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};


const MakeIntoProductModal: React.FC<MakeIntoProductModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [designs, setDesigns] = useState<DesignTemplateResponse[]>([]);
  const [selectedDesignId, setSelectedDesignId] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const forceWhiteBackgroundStyle = {
    backgroundColor: '#FFFFFF !important' as any,
  };

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'uk', label: 'Ukrainian' },
    { value: 'es', label: 'Spanish' },
    { value: 'ru', label: 'Russian' },
  ];

  const messageTemplates: { [key: string]: string } = {
    en: "Hi, I would like to create a",
    uk: "Привіт, я хочу створити",
    es: "Hola, me gustaría crear un",
    ru: "Привет, я хочу создать",
  };

  const fetchDesigns = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/custom-projects-backend/design_templates');
      if (!response.ok) {
        const errData = await response.json().catch(() => ({ detail: "Failed to fetch designs" }));
        throw new Error(errData.detail || `HTTP error! status: ${response.status}`);
      }
      const dataFromApi: DesignTemplateResponse[] = await response.json();
      setDesigns(dataFromApi);
    } catch (err: any) {
      console.error("Failed to fetch designs for modal:", err);
      setError(err.message || "Could not load designs.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchDesigns();
      setSelectedDesignId(null);
      setSelectedLanguage('en');
    }
  }, [isOpen, fetchDesigns]);

  const handleApply = () => {
    if (selectedDesignId) {
      const chosenDesign = designs.find(d => d.id.toString() === selectedDesignId);
      if (chosenDesign) {
        const template = messageTemplates[selectedLanguage] || messageTemplates.en;
        const messageToSend = `${template} ${chosenDesign.template_name}`;
        onApply(messageToSend);
      }
    }
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Choose a Product to Create</DialogTitle>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto pr-2">
          {isLoading && (
            <div className="flex items-center justify-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <p className="ml-2">Loading Designs...</p>
            </div>
          )}
          {error && !isLoading && (
            <Alert variant="destructive" className="my-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {!isLoading && !error && designs.length === 0 && (
            <div className="py-4 text-center text-gray-500">
              No product designs found. Please configure designs in the admin section.
            </div>
          )}
          {!isLoading && !error && designs.length > 0 && (
            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {designs.map((design) => (
                <button
                  key={design.id}
                  onClick={() => setSelectedDesignId(design.id.toString())}
                  // CHANGE #1: Add 'force-white-background' to the button's className
                  className={`
                    relative border-2 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    flex flex-col items-center
                    force-white-background
                    ${selectedDesignId === design.id.toString()
                      // The blue border and ring will still show when selected!
                      ? 'border-blue-600 ring-2 ring-blue-500'
                      : 'border-gray-300 hover:border-blue-400'
                    }
                  `}
                >
                  {/* CHANGE #2: Removed the redundant class from the div */}
                  <div 
                    className="w-full h-32 relative mb-2 rounded"
                  >
                    <Image
                      src={getFullImagePath(design.design_image_path)}
                      alt={design.template_name}
                      layout="fill"
                      objectFit="contain"
                      // CHANGE #3: Removed the redundant class from the Image
                      className="rounded"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder-image.png';
                        (e.target as HTMLImageElement).alt = 'Placeholder Image';
                      }}
                    />
                  </div>
                  <h3 
                    className="text-xs font-semibold text-gray-800 text-center truncate w-full"
                    title={design.template_name}
                  >
                    {design.template_name}
                  </h3>
                  {selectedDesignId === design.id.toString() && (
                    <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                      <CheckCircle size={12} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
        <DialogFooter className="mt-4 pt-4 border-t flex justify-between items-center">
          <div className="w-40">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={handleApply}
              disabled={!selectedDesignId || isLoading || designs.length === 0}
            >
              Choose & Start Chat
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MakeIntoProductModal;
