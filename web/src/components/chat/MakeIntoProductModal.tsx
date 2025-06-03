// web/src/components/chat/MakeIntoProductModal.tsx

"use client";

import React, { useState, useEffect, useCallback, useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertTriangle } from "lucide-react";

// Update the import for the type of data we'll be fetching
// Remove: import { Pipeline } from '@/types/pipelines';
import { DesignTemplateResponse } from '@/types/designTemplates';

interface MakeIntoProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (message: string) => void; // Changed from string[] to string
}

const MakeIntoProductModal: React.FC<MakeIntoProductModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  // Update state type to DesignTemplateResponse
  const [designs, setDesigns] = useState<DesignTemplateResponse[]>([]);
  const [selectedDesignId, setSelectedDesignId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDesigns = useCallback(async () => { // Renamed from fetchProducts
    setIsLoading(true);
    setError(null);
    try {
      // Change the API endpoint to fetch design templates
      const response = await fetch('/api/custom-projects-backend/design_templates'); //
      if (!response.ok) {
        const errData = await response.json().catch(() => ({ detail: "Failed to fetch designs" }));
        throw new Error(errData.detail || `HTTP error! status: ${response.status}`);
      }
      const dataFromApi: DesignTemplateResponse[] = await response.json(); //

      // Filter designs if necessary (e.g., only show certain component_names)
      // For now, we'll display all fetched designs.
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
      fetchDesigns(); // Call fetchDesigns
      setSelectedDesignId(null); // Reset selection when opened
    }
  }, [isOpen, fetchDesigns]);

  const handleApply = () => {
    if (selectedDesignId) {
      const chosenDesign = designs.find(d => d.id.toString() === selectedDesignId);
      if (chosenDesign) {
        // Construct the message using the chosen design's template_name
        const messageToSend = `Hi, I would like to create a ${chosenDesign.template_name}`;
        onApply(messageToSend); // Send the message string to ChatPage
      }
    }
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Choose a Product Design</DialogTitle> {/* Updated Title */}
        </DialogHeader>
        {isLoading && (
          <div className="flex items-center justify-center h-32">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="ml-2">Loading Designs...</p> {/* Updated text */}
          </div>
        )}
        {error && !isLoading && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!isLoading && !error && designs.length === 0 && (
          <div className="py-4 text-center text-gray-500">
            No product designs found. Please configure designs in the admin section. {/* Updated text */}
          </div>
        )}
        {!isLoading && !error && designs.length > 0 && (
          <div className="py-4">
            <RadioGroup
              value={selectedDesignId || undefined}
              onValueChange={setSelectedDesignId}
              className="space-y-2 max-h-60 overflow-y-auto"
            >
              {designs.map((design) => ( // Changed 'product' to 'design'
                <div key={design.id} className="flex items-center space-x-2 p-2 border rounded-md hover:bg-accent">
                  <RadioGroupItem value={design.id.toString()} id={`design-${design.id}`} />
                  <Label htmlFor={`design-${design.id}`} className="flex-1 cursor-pointer">
                    <div className="font-medium">{design.template_name}</div> {/* Display template_name */}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        <DialogFooter>
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
            Choose Design
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MakeIntoProductModal;
