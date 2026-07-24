"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Milk, Calculator, FileSpreadsheet, Bot, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, Star } from "lucide-react";

interface TourStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  color: string;
  bgGradient: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    title: "Welcome to Dairy Hub! 🥛",
    subtitle: "Your Complete Digital Dairy Engineering & Processing Companion",
    description: "Access advanced standardization algorithms, dairy science modules, FSSAI quality audit formats, and industrial production calculators in one unified app.",
    icon: Milk,
    badge: "Step 1 of 4",
    color: "text-blue-500",
    bgGradient: "from-blue-600 via-indigo-600 to-purple-700"
  },
  {
    title: "Precision Calculators & Mass Balance 🧮",
    subtitle: "Zero-Tolerance Math Calibration",
    description: "Compute Pearson square standardization, SMP/water blending equations, paneer yields, ice cream mixes, and ETP effluent plant parameters with scientific accuracy.",
    icon: Calculator,
    badge: "Step 2 of 4",
    color: "text-emerald-500",
    bgGradient: "from-emerald-600 via-teal-600 to-cyan-700"
  },
  {
    title: "Excel Production Reports & A4 PDF 📦",
    subtitle: "Pouch Packing & Film Wastage Reconciliation",
    description: "Create running packaging logs, crate counts, and unaccounted loss reconciliations. Lock your plant templates and export official A4 PDF reports instantly.",
    icon: FileSpreadsheet,
    badge: "Step 3 of 4",
    color: "text-amber-500",
    bgGradient: "from-amber-600 via-orange-600 to-red-700"
  },
  {
    title: "Sarathi AI Assistant 🤖",
    subtitle: "Real-time Dairy Technology & QA Consultation",
    description: "Ask Sarathi AI any questions regarding milk microbiology, adulteration testing, CIP cleaning procedures, pasteurization CCPs, or lab equipment troubleshooting.",
    icon: Bot,
    badge: "Step 4 of 4",
    color: "text-purple-500",
    bgGradient: "from-purple-600 via-violet-600 to-indigo-800"
  }
];

export function OnboardingTourModal({
  isOpen,
  onClose
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (typeof isOpen === "boolean") {
      setInternalOpen(isOpen);
      if (isOpen) setCurrentStep(0);
    } else {
      // Auto-trigger for first-time users
      const hasCompleted = localStorage.getItem("dairyhub_onboarding_completed");
      if (!hasCompleted) {
        setInternalOpen(true);
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem("dairyhub_onboarding_completed", "true");
    setInternalOpen(false);
    if (onClose) onClose();
  };

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const stepData = TOUR_STEPS[currentStep];
  const StepIcon = stepData.icon;

  return (
    <Dialog open={internalOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl border-none shadow-2xl bg-slate-950 text-white">
        {/* Step Banner */}
        <div className={`p-8 bg-gradient-to-br ${stepData.bgGradient} relative flex flex-col items-center text-center space-y-3`}>
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-white/70 hover:text-white hover:bg-white/10 text-xs rounded-full px-3"
            >
              Skip
            </Button>
          </div>

          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider">
            {stepData.badge}
          </Badge>

          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
            <StepIcon className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-xl font-bold text-white tracking-tight">
            {stepData.title}
          </h2>
          <p className="text-xs text-white/80 font-medium max-w-xs">
            {stepData.subtitle}
          </p>
        </div>

        {/* Step Description & Navigation */}
        <div className="p-6 space-y-6 bg-slate-900">
          <p className="text-xs text-slate-300 leading-relaxed text-center">
            {stepData.description}
          </p>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5">
            {TOUR_STEPS.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentStep ? "w-6 bg-emerald-400" : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-30 text-xs rounded-xl"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>

            <Button
              size="sm"
              onClick={handleNext}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20"
            >
              {currentStep === TOUR_STEPS.length - 1 ? (
                <>
                  Get Started <CheckCircle2 className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default OnboardingTourModal;
