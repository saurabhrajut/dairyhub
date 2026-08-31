"use client";

import React, { useState, useEffect } from "react";
import {
  Bookmark,
  Sparkles,
  FileText,
  Calculator,
  CheckCircle2,
  Copy,
  Check,
  Trash2,
  Clock,
  ChevronRight,
  ShieldCheck,
  FlaskConical,
  Beaker,
  Scale,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/context/favorites-context";

interface BookmarksWorkspaceProps {
  bookmarkedTopics: any[];
  onOpenModal: (modalId: string) => void;
  onToggleFavorite: (item: any) => void;
}

const SCRATCHPAD_KEY = "dairyhub_shift_scratchpad_v1";

export function BookmarksWorkspace({
  bookmarkedTopics,
  onOpenModal,
  onToggleFavorite,
}: BookmarksWorkspaceProps) {
  const { toast } = useToast();
  const { addFavorite } = useFavorites();
  const [shiftNotes, setShiftNotes] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"scratchpad" | "formulas" | "checklist">("scratchpad");

  // Load shift notes from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SCRATCHPAD_KEY);
      if (saved) setShiftNotes(saved);
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Current shift calculation
  const getShiftName = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 14) return "☀️ Morning Reception & Processing Shift (06:00 AM - 02:00 PM)";
    if (hour >= 14 && hour < 22) return "🌆 Evening Quality & Dispatch Shift (02:00 PM - 10:00 PM)";
    return "🌙 Night CIP & Plant Sanitation Shift (10:00 PM - 06:00 AM)";
  };

  const handleSaveNotes = (val: string) => {
    setShiftNotes(val);
    try {
      localStorage.setItem(SCRATCHPAD_KEY, val);
    } catch {
      // Ignore
    }
  };

  const handleCopyNotes = () => {
    if (!shiftNotes.trim()) {
      toast({
        title: "Scratchpad Empty",
        description: "Write or insert a template note first before copying.",
        variant: "destructive",
      });
      return;
    }
    navigator.clipboard.writeText(shiftNotes);
    setIsCopied(true);
    toast({
      title: "Shift Log Copied! 📋",
      description: "Ready to paste into WhatsApp or Shift Handover report.",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClearNotes = () => {
    setShiftNotes("");
    localStorage.removeItem(SCRATCHPAD_KEY);
    toast({
      title: "Scratchpad Cleared",
      description: "Shift notes cleared.",
    });
  };

  const insertTemplate = (template: string) => {
    const updated = shiftNotes ? `${shiftNotes}\n\n${template}` : template;
    handleSaveNotes(updated);
    toast({
      title: "Template Inserted 📝",
      description: "Edit values according to your plant reading.",
    });
  };

  const handleAddStarterPack = () => {
    const starterItems = [
      { id: "lab-calculations", title: "Lab Calculations", category: "quality", description: "Yield, Acidity & TS Formulas" },
      { id: "std1", title: "Standardization I", category: "process", description: "Pearson Square Milk Blending" },
      { id: "fssai-standards", title: "FSSAI Standards", category: "quality", description: "Official FSSAI Milk Limits" },
      { id: "milk-handling", title: "Milk Handling", category: "process", description: "Reception & Chilling Guide" },
      { id: "solutions-prep", title: "Solutions Preparation", category: "quality", description: "N/10 NaOH & Acid Prep" },
      { id: "adulteration", title: "Adulteration Testing", category: "quality", description: "Urea, Starch & Salt Detection" },
    ];

    starterItems.forEach((item) => addFavorite(item));

    toast({
      title: "Starter Pack Added! ✨",
      description: "Top 6 essential dairy plant tools added to your saved bookmarks workspace.",
    });
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* 👑 Top Header Banner: Personal Plant Command Workspace */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white rounded-3xl shadow-xl border border-indigo-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 bg-amber-400/90 text-slate-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                ⭐ Dairy Tech Personal Command Center
              </span>
              <span className="text-xs font-semibold text-indigo-300 bg-indigo-900/60 border border-indigo-700/50 px-2.5 py-0.5 rounded-full">
                {new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              My Plant Workspace & Duty Companion
            </h2>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Your customized operational hub for instant milk calculations, shift handover notes, plant formulas & bookmarked modules.
            </p>
          </div>

          {/* Shift Indicator Pill */}
          <div className="p-3 bg-slate-900/90 border border-indigo-500/30 rounded-2xl shrink-0 space-y-1 backdrop-blur-md">
            <span className="text-[10px] font-extrabold text-indigo-300 uppercase tracking-wider block">
              Active Plant Shift
            </span>
            <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>{getShiftName()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 📌 SECTION 1: BOOKMARKED MODULES & TOOLS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
            Bookmarked Modules ({bookmarkedTopics.length})
          </h3>
          {bookmarkedTopics.length > 0 && (
            <span className="text-[11px] font-semibold text-slate-500">
              Tap any card to launch instantly
            </span>
          )}
        </div>

        {bookmarkedTopics.length === 0 ? (
          /* Empty Bookmarks State with 1-Tap Starter Pack */
          <Card className="rounded-3xl border-dashed border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 shadow-xs">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-7 h-7 animate-bounce" />
              </div>
              
              <div className="max-w-md mx-auto space-y-1">
                <h4 className="font-extrabold text-slate-900 text-base">
                  No Saved Bookmarks Yet!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Save your most frequently used plant calculators, QA formats, and processing modules for 1-tap access during your shift.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handleAddStarterPack}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md gap-2 transition-transform active:scale-95"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add Essential Dairy Tools Starter Pack (1-Tap)
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Bookmarked Cards Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {bookmarkedTopics.map((topic) => {
              const IconComp = topic.icon || Bookmark;
              return (
                <div
                  key={topic.id}
                  className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group relative flex flex-col justify-between cursor-pointer"
                  onClick={() => onOpenModal(topic.id)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(topic);
                        }}
                        className="text-amber-500 hover:text-slate-300 transition-colors p-1"
                        title="Remove Bookmark"
                      >
                        <Bookmark className="w-4 h-4 fill-amber-500" />
                      </button>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-xs group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {topic.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5 leading-tight">
                      {topic.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-indigo-600">
                    <span>Open Tool</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 🛠️ SECTION 2: WORKSPACE INTERACTIVE TOOLKIT TABS */}
      <div className="space-y-4 pt-2">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("scratchpad")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "scratchpad"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <FileText className="w-4 h-4" />
            Shift Handover & Plant Scratchpad
          </button>
          
          <button
            onClick={() => setActiveTab("formulas")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "formulas"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <Calculator className="w-4 h-4" />
            Instant Plant Formulas Cheat-Sheet
          </button>

          <button
            onClick={() => setActiveTab("checklist")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "checklist"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <ShieldCheck className="w-4 h-4" />
            Emergency Quality SOP Checklist
          </button>
        </div>

        {/* TAB 1: SHIFT HANDOVER & PLANT SCRATCHPAD */}
        {activeTab === "scratchpad" && (
          <Card className="rounded-3xl border-slate-200 shadow-sm bg-white overflow-hidden">
            <CardHeader className="p-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white border-b border-slate-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <CardTitle className="text-sm font-extrabold flex items-center gap-2 text-white">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  Real-time Plant Duty Scratchpad & Log
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleCopyNotes}
                    size="sm"
                    className="h-7 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold gap-1.5 rounded-lg"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    {isCopied ? "Copied!" : "Copy Log for WhatsApp"}
                  </Button>
                  <Button
                    onClick={handleClearNotes}
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs bg-slate-800 text-slate-300 border-slate-700 hover:bg-red-600 hover:text-white font-bold gap-1 rounded-lg"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {/* Pre-built Template Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider shrink-0">
                  Quick Insert Templates:
                </span>
                
                <button
                  onClick={() =>
                    insertTemplate(
                      `[RAW MILK RECEPTION LOG]\n• Tanker No: RJ-14-XX-1234\n• Tank Vol: 15,000 Liters\n• Temp: 4.5°C | CLR: 28.5 | Fat: 4.2% | SNF: 8.56%\n• Acidity: 0.135% Lactic Acid | COB: Negative | MBRT: 4.5 Hours`
                    )
                  }
                  className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 rounded-lg text-xs font-bold shrink-0 transition-colors"
                >
                  🥛 Milk Dip Log
                </button>

                <button
                  onClick={() =>
                    insertTemplate(
                      `[STANDARDIZATION BATCH LOG]\n• Target Product: Toned Milk (3.0% Fat, 8.5% SNF)\n• Tank Volume: 10,000 Liters\n• Initial Milk: 4.5% Fat, 8.5% SNF\n• Skimmed Milk Added: 5,000 Liters\n• Final Batch Verification: 3.02% Fat, 8.51% SNF (Passed)`
                    )
                  }
                  className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-lg text-xs font-bold shrink-0 transition-colors"
                >
                  ⚖️ Standardization Log
                </button>

                <button
                  onClick={() =>
                    insertTemplate(
                      `[PLANT CIP CHEMICAL CHECK]\n• CIP Circuit 1 (Pasteurizer Line)\n• Lye Tank: 1.5% NaOH (Temp: 78°C)\n• Acid Tank: 0.8% HNO3 (Temp: 68°C)\n• Final Rinse pH: 7.1 (Neutral)`
                    )
                  }
                  className="px-2.5 py-1 bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 rounded-lg text-xs font-bold shrink-0 transition-colors"
                >
                  🧼 CIP Sanitation Check
                </button>
              </div>

              {/* Textarea Scratchpad */}
              <textarea
                value={shiftNotes}
                onChange={(e) => handleSaveNotes(e.target.value)}
                placeholder="Write shift notes, tank dips, Fat/SNF readings, or paste template here... (Auto-saved locally on your phone)"
                className="w-full h-44 sm:h-52 p-3 text-xs sm:text-sm font-mono border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50/50 leading-relaxed"
              />

              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Auto-saved to local device storage
                </span>
                <span>{shiftNotes.length} Characters</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* TAB 2: INSTANT PLANT FORMULAS CHEAT-SHEET */}
        {activeTab === "formulas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Formula 1: Richmond's SNF Formula */}
            <Card className="rounded-2xl border-slate-200 shadow-xs">
              <CardHeader className="p-3.5 bg-indigo-50/80 rounded-t-2xl border-b border-indigo-100">
                <CardTitle className="text-xs font-extrabold text-indigo-950 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-indigo-600" />
                    1. Richmond's Milk SNF Formula
                  </span>
                  <Badge className="bg-indigo-600 text-white text-[10px]">Standard ISI</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3.5 space-y-2 text-xs">
                <div className="p-2.5 bg-slate-900 text-indigo-300 font-mono rounded-xl font-bold text-center text-sm">
                  SNF % = (CLR / 4) + (0.2 × Fat %) + 0.36
                </div>
                <p className="text-slate-600 text-[11px]">
                  <strong>Example:</strong> For CLR = 28.0 and Fat = 4.5%: <br />
                  SNF = (28/4) + (0.2 × 4.5) + 0.36 = 7.0 + 0.90 + 0.36 = <strong>8.26%</strong>
                </p>
              </CardContent>
            </Card>

            {/* Formula 2: CLR Temp Correction */}
            <Card className="rounded-2xl border-slate-200 shadow-xs">
              <CardHeader className="p-3.5 bg-amber-50/80 rounded-t-2xl border-b border-amber-100">
                <CardTitle className="text-xs font-extrabold text-amber-950 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-600" />
                    2. CLR Temperature Correction (Ref 20°C)
                  </span>
                  <Badge className="bg-amber-600 text-white text-[10px]">Temp Standard</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3.5 space-y-2 text-xs">
                <div className="p-2.5 bg-slate-900 text-amber-300 font-mono rounded-xl font-bold text-center text-sm">
                  Corrected CLR = Observed CLR ± [(Temp - 20) × 0.2]
                </div>
                <p className="text-slate-600 text-[11px]">
                  Add <strong>+0.2</strong> for every °C above 20°C. <br />
                  Subtract <strong>-0.2</strong> for every °C below 20°C.
                </p>
              </CardContent>
            </Card>

            {/* Formula 3: Water Addition % */}
            <Card className="rounded-2xl border-slate-200 shadow-xs">
              <CardHeader className="p-3.5 bg-blue-50/80 rounded-t-2xl border-b border-blue-100">
                <CardTitle className="text-xs font-extrabold text-blue-950 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Beaker className="w-4 h-4 text-blue-600" />
                    3. Water Adulteration Addition %
                  </span>
                  <Badge className="bg-blue-600 text-white text-[10px]">Adulteration</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3.5 space-y-2 text-xs">
                <div className="p-2.5 bg-slate-900 text-blue-300 font-mono rounded-xl font-bold text-center text-sm">
                  Added Water % = [(Std SNF - Obs SNF) / Std SNF] × 100
                </div>
                <p className="text-slate-600 text-[11px]">
                  If Standard Buffalo Milk SNF = 9.0% and Observed SNF = 7.2%: <br />
                  Added Water = [(9.0 - 7.2) / 9.0] × 100 = <strong>20.0% Water Added</strong>
                </p>
              </CardContent>
            </Card>

            {/* Formula 4: Titratable Acidity % */}
            <Card className="rounded-2xl border-slate-200 shadow-xs">
              <CardHeader className="p-3.5 bg-emerald-50/80 rounded-t-2xl border-b border-emerald-100">
                <CardTitle className="text-xs font-extrabold text-emerald-950 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-emerald-600" />
                    4. Milk Titratable Acidity % (N/10 NaOH)
                  </span>
                  <Badge className="bg-emerald-600 text-white text-[10px]">Lab QA</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3.5 space-y-2 text-xs">
                <div className="p-2.5 bg-slate-900 text-emerald-300 font-mono rounded-xl font-bold text-center text-sm">
                  Acidity % = [(N/10 NaOH mL × 0.009) / Milk Sample mL] × 100
                </div>
                <p className="text-slate-600 text-[11px]">
                  For 10 mL Milk Sample using 1.5 mL N/10 NaOH: <br />
                  Acidity = (1.5 × 0.009 / 10) × 100 = <strong>0.135% Lactic Acid</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* TAB 3: EMERGENCY QUALITY SOP CHECKLIST */}
        {activeTab === "checklist" && (
          <Card className="rounded-3xl border-slate-200 shadow-xs bg-white">
            <CardHeader className="p-4 bg-slate-900 text-white rounded-t-3xl border-b border-slate-800">
              <CardTitle className="text-sm font-extrabold flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Critical Plant Quality & Audit SOP Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1. Milk Reception Dock Platform Tests:
                </h5>
                <ul className="space-y-1 text-slate-700 pl-5 list-disc">
                  <li>Organoleptic Test (Smell, Appearance, Color, Off-flavors)</li>
                  <li>Clot on Boiling (COB) Test & 68% Ethanol Alcohol Test</li>
                  <li>MBRT Test (Grade 1 Milk &gt; 4.5 Hours)</li>
                  <li>Adulterant Strips Test (Urea, Starch, Neutralizers, Salt, Detergent)</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2. Pasteurizer Critical Control Point (CCP):
                </h5>
                <ul className="space-y-1 text-slate-700 pl-5 list-disc">
                  <li>Pasteurization Temperature: HTST 72°C - 75°C for 15 Seconds minimum</li>
                  <li>Flow Diversion Valve (FDV) Auto Trigger Calibration check</li>
                  <li>Positive pressure differential: Pasteurized side &gt; Raw side pressure</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
