// web/src/components/chat/NewChatProductSelectionModal.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertTriangle, Palette } from "lucide-react";

// Define the DesignTemplate structure based on your backend
interface DesignTemplate {
  id: number;
  template_name: string;
  microproduct_type: string;
  component_name: string;
  design_image_path?: string | null;
  // template_structuring_prompt: string; // Not directly used in selection UI
  // date_created: string; // Or Date object if parsed
}

interface NewChatProductSelectionModalProps {
  isOpen: boolean;
  onClose: () => void; 
  onProductSelect: (productName: string) => void; // Keep prop name for now if ChatPage uses it
}

const NewChatProductSelectionModal: React.FC<NewChatProductSelectionModalProps> = ({
  isOpen,
  onClose,
  onProductSelect, // This will receive the design's template_name
}) => {
  const [designs, setDesigns] = useState<DesignTemplate[]>([]);
  const [selectedDesignId, setSelectedDesignId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDesigns = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/custom/design_templates'); // MODIFIED: Endpoint
      if (!response.ok) {
        const errData = await response.json().catch(() => ({ detail: "Failed to fetch designs" }));
        throw new Error(errData.detail || `HTTP error! status: ${response.status}`);
      }
      const dataFromApi: DesignTemplate[] = await response.json();
      
      const relevantDesigns = dataFromApi.filter(d => d.template_name && d.template_name.trim() !== "");
      setDesigns(relevantDesigns);
      setSelectedDesignId(null);

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
    }
  }, [isOpen, fetchDesigns]);

  const handleDesignSelected = () => {
    if (selectedDesignId) {
      const selectedDesign = designs.find(d => d.id.toString() === selectedDesignId);
      if (selectedDesign && selectedDesign.template_name) {
        onProductSelect(selectedDesign.template_name); // Pass template_name
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(openState: boolean) => { if (!openState) onClose(); }}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Start with a Design Template</DialogTitle> {/* MODIFIED: Title */}
          <DialogDescription>
            Select a design template to kickstart your chat, or start fresh.
          </DialogDescription>
        </DialogHeader>
        {isLoading && (
          <div className="flex items-center justify-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="ml-3 text-muted-foreground">Loading Design Templates...</p>
          </div>
        )}
        {error && !isLoading && (
          <Alert variant="destructive" className="my-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error Loading Designs</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!isLoading && !error && designs.length === 0 && (
          <div className="py-6 text-center text-muted-foreground">
            No design templates found. You can start a general chat.
          </div>
        )}
        {!isLoading && !error && designs.length > 0 && (
          <div className="py-4">
            <RadioGroup
              value={selectedDesignId || undefined}
              onValueChange={setSelectedDesignId}
              className="space-y-3 max-h-72 overflow-y-auto pr-2"
            >
              {designs.map((design) => (
                <div 
                  key={design.id} 
                  className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-accent has-[input:checked]:bg-accent has-[input:checked]:ring-2 has-[input:checked]:ring-primary transition-colors"
                >
                  {design.design_image_path ? (
                    <img 
                      src={design.design_image_path} 
                      alt={design.template_name} 
                      className="h-16 w-16 rounded-md object-cover flex-shrink-0 bg-muted border"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        const fallback = parent?.querySelector('.fallback-icon-container');
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback Icon Container (initially hidden if image path exists) */}
                  <div 
                    className={`fallback-icon-container h-16 w-16 rounded-md bg-muted border flex items-center justify-center flex-shrink-0 ${design.design_image_path ? 'hidden' : 'flex'}`}
                  >
                    <Palette className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <RadioGroupItem value={design.id.toString()} id={`design-select-${design.id}`} className="sr-only" />
                  <Label htmlFor={`design-select-${design.id}`} className="flex-1 cursor-pointer pt-1">
                    <div className="font-semibold text-base">{design.template_name}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      Type: {design.microproduct_type} (Component: {design.component_name})
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        <DialogFooter className="mt-6 sm:justify-between">
          <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Start Blank Chat
          </Button>
          <Button
            type="button"
            onClick={handleDesignSelected}
            disabled={!selectedDesignId || isLoading || designs.length === 0}
            className="w-full sm:w-auto mt-2 sm:mt-0"
          >
            Use Selected Design
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewChatProductSelectionModal;
