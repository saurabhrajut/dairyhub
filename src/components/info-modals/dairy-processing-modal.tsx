
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckCircle,
  Thermometer,
  Scale,
  Package,
  Warehouse,
  ChevronRight,
  TestTube,
} from "lucide-react";

const processingSteps = [
  {
    icon: TestTube,
    title: "1. Reception & Quality Testing",
    description: "Milk arrives at the plant and is immediately tested for quality (fat, SNF, acidity, adulterants) before being accepted. Only high-quality milk proceeds to the next stage.",
    color: "bg-sky-100 text-sky-800",
  },
  {
    icon: Thermometer,
    title: "2. Chilling",
    description: "Accepted milk is chilled to 4-5°C to prevent bacterial growth and preserve its freshness until it's ready for processing.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: Scale,
    title: "3. Standardization",
    description: "The milk's fat and SNF content is adjusted to meet legal and product-specific standards (e.g., for toned, double-toned, or full-cream milk).",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    icon: CheckCircle,
    title: "4. Pasteurization",
    description: "The milk is heated (typically to 72°C for 15 seconds - HTST) to kill harmful bacteria, ensuring it's safe for consumption and has a longer shelf life.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: Package,
    title: "5. Homogenization",
    description: "Milk is passed through a high-pressure homogenizer to break down large fat globules into smaller ones. This prevents a cream layer from forming and gives the milk a richer, smoother consistency.",
    color: "bg-orange-100 text-orange-800",
  },
  {
    icon: Package,
    title: "6. Packaging",
    description: "The processed milk is filled into sanitized pouches or cartons in a sterile environment to prevent re-contamination.",
    color: "bg-green-100 text-green-800",
  },
  {
    icon: Warehouse,
    title: "7. Storage & Despatch",
    description: "Packaged milk is stored in a cold storage (below 5°C) before being dispatched to the market.",
    color: "bg-gray-200 text-gray-800",
  },
];

export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            The Journey of Milk: From Farm to Table
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            An overview of the industrial milk processing workflow.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 mt-4">
          <div className="space-y-4">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 font-headline">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
             <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
                <h4 className="font-bold text-primary font-headline">Did you know?</h4>
                <p className="text-sm text-primary/90 mt-1">
                    After pasteurization, milk can also be diverted to produce other value-added products like Dahi (Curd), Paneer, Cheese, and more!
                </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
