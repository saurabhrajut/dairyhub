"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Milk,
  Calculator,
  FileSpreadsheet,
  Bot,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Bookmark,
  Video,
  ShieldCheck,
  Recycle,
  Lightbulb,
  PackageCheck,
  Globe,
} from "lucide-react";
import { useAuth } from "@/context/auth-context";

interface TourStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  color: string;
  bgGradient: string;
  highlights: string[];
}

const TOUR_STEPS: TourStep[] = [
  {
    title: "Welcome to Dairy Hub! 🥛",
    subtitle: "Your Complete Digital Dairy Engineering & Processing Companion",
    description: "Access advanced milk standardization algorithms, dairy science modules, FSSAI quality audit formats, and industrial production calculators in one unified app.",
    icon: Milk,
    badge: "Step 1 of 10",
    color: "text-blue-500",
    bgGradient: "from-blue-600 via-indigo-600 to-purple-700",
    highlights: ["Complete Dairy Technology Suite", "Offline Capable Calculations", "Industry Standard Formats"]
  },
  {
    title: "Precision Standardization & Calculators 🧮",
    subtitle: "Zero-Tolerance Math Calibration",
    description: "Compute Pearson Square standardization, SMP/water blending equations, paneer yields, ice cream mixes, and ETP effluent plant parameters with scientific accuracy.",
    icon: Calculator,
    badge: "Step 2 of 10",
    color: "text-emerald-500",
    bgGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    highlights: ["Pearson Square Fat & SNF Blending", "Lactometer Temp Correction (CLR)", "Chemical Solutions Prep (N/10 NaOH)"]
  },
  {
    title: "QA/QC Formats & FSSAI Compliance 📋",
    subtitle: "Quality Standards & Platform Testing",
    description: "Instant lookup for FSSAI milk standards across all categories. Complete platform testing guides for MBRT, alcohol test, lactometer reading, and adulteration detection.",
    icon: ShieldCheck,
    badge: "Step 3 of 10",
    color: "text-amber-500",
    bgGradient: "from-amber-600 via-orange-600 to-red-700",
    highlights: ["FSSAI Regulatory Limits", "Rapid Adulteration Check (Urea, Starch)", "GMP Quality Audit Checklists"]
  },
  {
    title: "CIP Sanitization & Plant Engineering 🧼",
    subtitle: "Hygiene Compliance & Effluent Management",
    description: "Master Clean-In-Place chemical dosing calculations for Caustic Soda (NaOH) and Nitric Acid, rinse efficiency, and ETP effluent plant parameter calculations.",
    icon: Recycle,
    badge: "Step 4 of 10",
    color: "text-cyan-500",
    bgGradient: "from-cyan-600 via-teal-600 to-blue-800",
    highlights: ["CIP Chemical Strength Dosage", "Time-Temp Sanitization Cycles", "ETP Effluent Treatment Ratios"]
  },
  {
    title: "Packaging & Film Loss Reconciliation 📦",
    subtitle: "Pouch Packing Logs & Crate Tracking",
    description: "Create running packaging logs, pouch weight variation charts, film wastage accounting, and unaccounted milk loss reconciliations with A4 PDF export.",
    icon: PackageCheck,
    badge: "Step 5 of 10",
    color: "text-orange-500",
    bgGradient: "from-orange-600 via-amber-600 to-red-700",
    highlights: ["Film Wastage % Calculation", "Pouch Weight & Leak Testing Logs", "A4 PDF Exportable Reports"]
  },
  {
    title: "Daily Technical Tips & Insights 💡",
    subtitle: "Practical Industry Knowledge Feed",
    description: "Receive daily practical tips on milk reception docks, thermal kinetics, homogenization pressures, seasonal SNF variations, and ghee aroma optimization.",
    icon: Lightbulb,
    badge: "Step 6 of 10",
    color: "text-yellow-500",
    bgGradient: "from-amber-500 via-yellow-600 to-orange-700",
    highlights: ["Daily Practical Dairy Tips", "Troubleshooting Homogenization Pressures", "Seasonal Fat & SNF Seasonal Guidance"]
  },
  {
    title: "Saved Favorites & Quick Access ⭐",
    subtitle: "Personalized Profile & Custom Bookmarks",
    description: "Bookmark your most-used calculators and quality notes with 1-tap. Access your saved tools anytime from your profile dashboard for instant shift access.",
    icon: Bookmark,
    badge: "Step 7 of 10",
    color: "text-purple-500",
    bgGradient: "from-purple-600 via-violet-600 to-indigo-800",
    highlights: ["1-Tap Card Bookmarking", "Saved Favorites Profile List", "Quick Shift Launch Dashboard"]
  },
  {
    title: "Visual Video Tutorials 📺",
    subtitle: "Step-by-Step Practical Guides",
    description: "Watch step-by-step HD video tutorials covering milk standardization, platform testing, chemical titrations, and Sarathi AI usage directly inside the app.",
    icon: Video,
    badge: "Step 8 of 10",
    color: "text-pink-500",
    bgGradient: "from-pink-600 via-rose-600 to-red-700",
    highlights: ["Interactive HD Video Player", "Practical Lab Testing Demos", "Key Takeaways Summary"]
  },
  {
    title: "Multi-Language & Reading Themes 🌐",
    subtitle: "Bilingual Experience & Eye Protection",
    description: "Switch seamlessly between English and Hinglish. Activate eye-friendly reading mode themes (Sepia, Slate, Night, Paper, Mint) for long night shifts.",
    icon: Globe,
    badge: "Step 9 of 10",
    color: "text-blue-500",
    bgGradient: "from-sky-600 via-blue-600 to-indigo-800",
    highlights: ["English & Hinglish Support", "Eye Protection Themes (Sepia, Night)", "Custom Profile Options"]
  },
  {
    title: "Sarathi AI Assistant 🤖",
    subtitle: "Real-time Dairy Technology & QA Consultation",
    description: "Ask Sarathi AI any questions regarding milk microbiology, product defects (Dahi, Paneer, Ghee, Butter), CIP procedures, pasteurization CCPs, or lab equipment.",
    icon: Bot,
    badge: "Step 10 of 10",
    color: "text-emerald-500",
    bgGradient: "from-teal-600 via-emerald-600 to-indigo-800",
    highlights: ["24/7 Technical Consultation", "Product Defect Troubleshooting", "English & Hinglish Voice/Text Support"]
  }
];

export function OnboardingTourModal({
  isOpen,
  onClose
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const { user } = useAuth();
  const [internalOpen, setInternalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const getStorageKey = () => {
    return user?.uid ? `dairyhub_onboarding_done_${user.uid}` : "dairyhub_onboarding_completed";
  };

  useEffect(() => {
    if (typeof isOpen === "boolean") {
      setInternalOpen(isOpen);
      if (isOpen) setCurrentStep(0);
    } else {
      // Auto-trigger for new users logging in / signing up for the first time
      const storageKey = getStorageKey();
      const hasCompleted = localStorage.getItem(storageKey);
      if (!hasCompleted) {
        const timer = setTimeout(() => {
          setInternalOpen(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, user]);

  const handleClose = () => {
    const storageKey = getStorageKey();
    localStorage.setItem(storageKey, "true");
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
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl bg-slate-950 text-white">
        {/* Step Banner */}
        <div className={`p-7 bg-gradient-to-br ${stepData.bgGradient} relative flex flex-col items-center text-center space-y-3`}>
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-white/80 hover:text-white hover:bg-white/10 text-xs rounded-full px-3"
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

          <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
            {stepData.title}
          </h2>
          <p className="text-xs text-white/80 font-medium max-w-xs">
            {stepData.subtitle}
          </p>
        </div>

        {/* Step Description & Navigation */}
        <div className="p-6 space-y-5 bg-slate-900">
          <p className="text-xs text-slate-300 leading-relaxed text-center">
            {stepData.description}
          </p>

          {/* Highlights List */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block text-center">Key Highlights</span>
            <div className="space-y-1">
              {stepData.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1 overflow-x-auto py-1 no-scrollbar max-w-xs mx-auto">
            {TOUR_STEPS.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer shrink-0 ${
                  idx === currentStep ? "w-5 bg-emerald-400" : "w-1.5 bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-1">
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
