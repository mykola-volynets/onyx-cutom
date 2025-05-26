// web/src/components/chat/MakeIntoProductModal.tsx
"use client";

import React, { useState, useEffect, useCallback, useContext } from 'react';
// These imports should now work correctly as they are resolved by web/tsconfig.json
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

// This import path for Pipeline might need adjustment if it's defined in custom_extensions
// If Pipeline type is shared or also moved to web, then "@/types/pipelines" might be correct.
// If it's specific to custom_extensions and you still want to use it, you might need
// a relative path or another alias in web/tsconfig.json to point to custom_extensions/frontend/src/types.
// For now, let's assume Pipeline type is accessible via "@/types/pipelines" from web context.
import { Pipeline } from '@/types/pipelines'; 

interface MakeIntoProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (discoveryPrompts: string[]) => void;
}

const MakeIntoProductModal: React.FC<MakeIntoProductModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [products, setProducts] = useState<Pipeline[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // This API endpoint is for the custom_backend, so it remains the same
      const response = await fetch('/api/custom-projects-backend/pipelines');
      if (!response.ok) {
        const errData = await response.json().catch(() => ({ detail: "Failed to fetch products" }));
        throw new Error(errData.detail || `HTTP error! status: ${response.status}`);
      }
      const dataFromApi: Pipeline[] = await response.json(); 
      
      // Assuming backend sends discovery_prompts_list directly (Option 1 from previous discussion)
      const relevantProducts = dataFromApi.filter(
        (p) => p.is_discovery_prompts && p.discovery_prompts_list && p.discovery_prompts_list.length > 0
      );
      setProducts(relevantProducts);
    } catch (err: any) {
      console.error("Failed to fetch products for modal:", err);
      setError(err.message || "Could not load products.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchProducts();
    }
  }, [isOpen, fetchProducts]);

  const handleApply = () => {
    if (selectedProductId) {
      const selectedProduct = products.find(p => p.id.toString() === selectedProductId);
      if (selectedProduct && selectedProduct.discovery_prompts_list) { 
        onApply(selectedProduct.discovery_prompts_list);
      }
    }
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    // The onOpenChange fix is already included
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Make into Product</DialogTitle>
        </DialogHeader>
        {isLoading && (
          <div className="flex items-center justify-center h-32">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="ml-2">Loading Products...</p>
          </div>
        )}
        {error && !isLoading && (
          <Alert variant="destructive"> {/* This variant="destructive" should work now */}
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!isLoading && !error && products.length === 0 && (
          <div className="py-4 text-center text-gray-500">
            No products with discovery prompts found. Please configure products with discovery prompts in the admin section.
          </div>
        )}
        {!isLoading && !error && products.length > 0 && (
          <div className="py-4">
            <RadioGroup
              value={selectedProductId || undefined}
              onValueChange={setSelectedProductId}
              className="space-y-2 max-h-60 overflow-y-auto"
            >
              {products.map((product) => (
                <div key={product.id} className="flex items-center space-x-2 p-2 border rounded-md hover:bg-accent">
                  <RadioGroupItem value={product.id.toString()} id={`product-${product.id}`} />
                  <Label htmlFor={`product-${product.id}`} className="flex-1 cursor-pointer">
                    <div className="font-medium">{product.pipeline_name}</div>
                    {product.pipeline_description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {product.pipeline_description}
                      </div>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            {/* The Button variant="outline" should now work correctly */}
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={handleApply}
            disabled={!selectedProductId || isLoading || products.length === 0}
          >
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MakeIntoProductModal;
