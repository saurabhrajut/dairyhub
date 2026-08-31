"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Beaker,
  FlaskConical,
  ShieldAlert,
  FileCheck2,
  BookOpen,
  Wheat,
  Droplet,
  Flame as ChiliIcon,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Calculator,
  ChevronRight,
  Microscope,
  Coffee,
  Candy,
  Container as SaltIcon,
  ArrowRight,
  Workflow,
  Atom,
  Sigma,
  Cookie,
  UtensilsCrossed,
  GlassWater,
  Bean,
  Drumstick,
  Sparkles,
  Layers,
  ArrowLeft,
  LayoutGrid,
  ShieldCheck,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FOOD_TESTING_DATABASE,
  FOOD_PRODUCT_CATALOG,
  FoodTestItem,
  FoodProductItem,
  TestType
} from "@/lib/content/food-testing";

interface FoodTestingModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function FoodTestingLaunchpadModal({ isOpen, setIsOpen }: FoodTestingModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<FoodProductItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [testTypeFilter, setTestTypeFilter] = useState<string>("All");
  const [activeTabMode, setActiveTabMode] = useState<Record<string, "sop" | "flowchart" | "formula">>({});

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const categoryGroups = [
    {
      groupLabel: "🌾 Cereal & Grain Products",
      groupIcon: Wheat,
      colorClass: "text-amber-600",
      bgClass: "bg-amber-50 hover:bg-amber-100",
      borderClass: "border-amber-200 hover:border-amber-400",
      products: FOOD_PRODUCT_CATALOG.filter((p) => p.categoryGroup === "🌾 Cereal & Grain Products")
    },
    {
      groupLabel: "🍪 Bakery & Confectionery",
      groupIcon: Cookie,
      colorClass: "text-orange-600",
      bgClass: "bg-orange-50 hover:bg-orange-100",
      borderClass: "border-orange-200 hover:border-orange-400",
      products: FOOD_PRODUCT_CATALOG.filter((p) => p.categoryGroup === "🍪 Bakery & Confectionery")
    },
    {
      groupLabel: "🥫 Processed & Packaged Foods",
      groupIcon: UtensilsCrossed,
      colorClass: "text-rose-600",
      bgClass: "bg-rose-50 hover:bg-rose-100",
      borderClass: "border-rose-200 hover:border-rose-400",
      products: FOOD_PRODUCT_CATALOG.filter((p) => p.categoryGroup === "🥫 Processed & Packaged Foods")
    },
    {
      groupLabel: "🥤 Beverages",
      groupIcon: GlassWater,
      colorClass: "text-cyan-600",
      bgClass: "bg-cyan-50 hover:bg-cyan-100",
      borderClass: "border-cyan-200 hover:border-cyan-400",
      products: FOOD_PRODUCT_CATALOG.filter((p) => p.categoryGroup === "🥤 Beverages")
    },
    {
      groupLabel: "🫘 Pulses, Oil & Spices",
      groupIcon: Bean,
      colorClass: "text-yellow-600",
      bgClass: "bg-yellow-50 hover:bg-yellow-100",
      borderClass: "border-yellow-200 hover:border-yellow-400",
      products: FOOD_PRODUCT_CATALOG.filter((p) => p.categoryGroup === "🫘 Pulses, Oil & Spices")
    },
    {
      groupLabel: "🍗 Meat & Other Products",
      groupIcon: Drumstick,
      colorClass: "text-red-600",
      bgClass: "bg-red-50 hover:bg-red-100",
      borderClass: "border-red-200 hover:border-red-400",
      products: FOOD_PRODUCT_CATALOG.filter((p) => p.categoryGroup === "🍗 Meat & Other Products")
    },
    {
      groupLabel: "🍟 Namkeens & Snacks",
      groupIcon: SaltIcon,
      colorClass: "text-orange-700",
      bgClass: "bg-orange-50 hover:bg-orange-100",
      borderClass: "border-orange-200 hover:border-orange-400",
      products: FOOD_PRODUCT_CATALOG.filter((p) => p.categoryGroup === "🍟 Namkeens & Snacks")
    }
  ];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedProduct(null);
      setSearchQuery("");
      setCategoryFilter("All");
      setTestTypeFilter("All");
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const handleSelectProduct = (product: FoodProductItem) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        scrollPosition.current = viewport.scrollTop;
      }
    }
    setSearchQuery("");
    setTestTypeFilter("All");
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setSearchQuery("");
    setTestTypeFilter("All");
  };

  useEffect(() => {
    if (!selectedProduct && scrollAreaRef.current) {
      const timeoutId = setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
          if (viewport) {
            viewport.scrollTop = scrollPosition.current;
          }
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedProduct]);

  const getTestTypeBadgeStyle = (type: TestType) => {
    switch (type) {
      case "Chemical":
        return "bg-amber-500/20 text-amber-900 border-amber-400 font-extrabold";
      case "Physical":
        return "bg-blue-500/20 text-blue-900 border-blue-400 font-extrabold";
      case "Microbiological":
        return "bg-purple-500/20 text-purple-900 border-purple-400 font-extrabold";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300 font-bold";
    }
  };

  const getTestTypeIcon = (type: TestType) => {
    switch (type) {
      case "Chemical":
        return <FlaskConical className="w-3.5 h-3.5 text-amber-600 inline-block mr-1" />;
      case "Physical":
        return <Scale className="w-3.5 h-3.5 text-blue-600 inline-block mr-1" />;
      case "Microbiological":
        return <Microscope className="w-3.5 h-3.5 text-purple-600 inline-block mr-1" />;
    }
  };

  // Get tests associated with the currently selected product
  const currentProductTests = selectedProduct
    ? FOOD_TESTING_DATABASE.filter((test) => selectedProduct.testIds.includes(test.id)).filter((test) => {
        const matchesTestType = testTypeFilter === "All" || test.testType === testTypeFilter;
        const matchesSearch =
          searchQuery.trim() === "" ||
          test.testName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          test.referenceStandard.toLowerCase().includes(searchQuery.toLowerCase()) ||
          test.prescribedLimit.toLowerCase().includes(searchQuery.toLowerCase()) ||
          test.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTestType && matchesSearch;
      })
    : [];

  const getTabMode = (testId: string) => activeTabMode[testId] || "sop";
  const setTabMode = (testId: string, mode: "sop" | "flowchart" | "formula") => {
    setActiveTabMode((prev) => ({ ...prev, [testId]: mode }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
        [&>button]:!text-white
      ">
        {/* ── Top Header Bar (Matching Compositional Analysis) ────────────────── */}
        <div className="bg-gradient-to-br from-indigo-900 via-sky-900 to-indigo-950 px-3 sm:px-6 py-2.5 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight flex items-center justify-center gap-2">
              <span>🔬 Food Testing Scientific Launchpad</span>
            </DialogTitle>
            <DialogDescription className={`text-center text-sky-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${selectedProduct ? "hidden sm:block" : "block"}`}>
              {selectedProduct ? selectedProduct.subtitle : "Comprehensive FSSAI & ISO Chemical, Physical & Microbiological Testing SOPs"}
            </DialogDescription>
          </DialogHeader>

          {/* Stats Pills */}
          {!selectedProduct && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {FOOD_PRODUCT_CATALOG.length} Food Products
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <Layers className="w-3 h-3 shrink-0" /> 7 Food Categories
              </span>
              <span className="inline-flex items-center gap-1 bg-sky-500/30 text-sky-200 text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-sky-500/40">
                <Beaker className="w-3 h-3 shrink-0" /> {FOOD_TESTING_DATABASE.length} Master Testing SOPs
              </span>
            </div>
          )}

          {/* Back Button inside Detail View */}
          {selectedProduct && (
            <div className="flex items-center gap-2 mt-1.5 sm:mt-2 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg shrink-0 text-xs px-2 h-6 sm:h-7"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                Back to Products
              </Button>
              <div className="flex items-center gap-1.5 text-white/90 text-[10px] sm:text-xs min-w-0 overflow-hidden">
                <selectedProduct.icon className="w-3.5 h-3.5 shrink-0 text-amber-300" />
                <span className="font-bold truncate min-w-0">{selectedProduct.title}</span>
                <Badge variant="secondary" className="text-[9px] px-1.5 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none">
                  {selectedProduct.categoryGroup.split(" ").slice(1).join(" ")}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {selectedProduct ? (

          /* ── PRODUCT TESTING DETAIL VIEW (Compositional Analysis Accordion Style) ── */
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50">
            <div className="p-3 sm:p-4 max-w-4xl mx-auto w-full pb-10 min-w-0">
              {/* Sticky Search & Test Type Filter Bar */}
              <div className="sticky top-0 z-10 bg-gradient-to-br from-slate-50 to-slate-100 pb-3 pt-1 space-y-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder={`Search tests in ${selectedProduct.title}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 shadow-xs transition-all"
                    />
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
                    {["All", "Chemical", "Physical", "Microbiological"].map((tType) => (
                      <button
                        key={tType}
                        onClick={() => setTestTypeFilter(tType)}
                        className={cn(
                          "px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border shrink-0 flex items-center gap-1",
                          testTypeFilter === tType
                            ? "bg-sky-900 text-white border-sky-900 shadow-xs"
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                        )}
                      >
                        {tType === "Chemical" && <FlaskConical className="w-3 h-3 text-amber-400" />}
                        {tType === "Physical" && <Scale className="w-3 h-3 text-blue-400" />}
                        {tType === "Microbiological" && <Microscope className="w-3 h-3 text-purple-400" />}
                        <span>{tType === "All" ? "All Tests" : tType}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compositional Analysis Card Wrapper */}
              <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm border mt-2 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-sky-950 font-headline mb-1 break-words flex items-center gap-2">
                  <selectedProduct.icon className="w-5 h-5 text-sky-600" />
                  <span>{selectedProduct.title} — Quality & Safety SOPs</span>
                </h3>
                <p className="text-xs text-slate-500 mb-4">{selectedProduct.description}</p>

                {currentProductTests.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full min-w-0 space-y-2">
                    {currentProductTests.map((test) => {
                      const mode = getTabMode(test.id);
                      return (
                        <AccordionItem
                          key={test.id}
                          value={test.id}
                          className="border border-slate-200 rounded-xl px-3 py-1 bg-white hover:border-sky-300 transition-all shadow-xs"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-2.5">
                            <div className="flex flex-col text-left pr-4 min-w-0 max-w-full space-y-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="outline" className={getTestTypeBadgeStyle(test.testType)}>
                                  {getTestTypeIcon(test.testType)}
                                  {test.testType} Test
                                </Badge>
                                <Badge className="bg-slate-900 text-amber-300 font-mono text-[9px]">
                                  {test.referenceStandard.split("/")[0]}
                                </Badge>
                              </div>
                              <span className="font-bold text-sm sm:text-base text-slate-900 break-words">
                                {test.testName}
                              </span>
                              <span className="text-xs text-slate-600 font-normal leading-snug line-clamp-2">
                                {test.shortSummary}
                              </span>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="pt-2 pb-4 space-y-4">
                            {/* Standards & Risk Banners */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                  <h5 className="text-[10px] font-black uppercase text-emerald-900">
                                    Prescribed FSSAI Limit
                                  </h5>
                                  <p className="text-xs font-bold text-emerald-800 mt-0.5">
                                    {test.prescribedLimit}
                                  </p>
                                </div>
                              </div>

                              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5">
                                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                <div>
                                  <h5 className="text-[10px] font-black uppercase text-rose-900">
                                    Quality & Health Hazard (If Failed)
                                  </h5>
                                  <p className="text-xs font-medium text-rose-800 mt-0.5">
                                    {test.riskIfFailed}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Sub-Tab Mode Switcher Pills */}
                            <div className="flex items-center gap-1.5 border-b border-slate-200 pb-1.5 overflow-x-auto">
                              <button
                                onClick={() => setTabMode(test.id, "sop")}
                                className={cn(
                                  "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-extrabold transition-all border shrink-0",
                                  mode === "sop"
                                    ? "bg-sky-900 text-white border-sky-900 shadow-xs"
                                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                )}
                              >
                                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                                Textbook SOP & Principles
                              </button>

                              <button
                                onClick={() => setTabMode(test.id, "flowchart")}
                                className={cn(
                                  "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-extrabold transition-all border shrink-0",
                                  mode === "flowchart"
                                    ? "bg-sky-900 text-white border-sky-900 shadow-xs"
                                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                )}
                              >
                                <Workflow className="w-3.5 h-3.5 text-amber-400" />
                                5-Phase Flowchart
                              </button>

                              <button
                                onClick={() => setTabMode(test.id, "formula")}
                                className={cn(
                                  "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-extrabold transition-all border shrink-0",
                                  mode === "formula"
                                    ? "bg-sky-900 text-white border-sky-900 shadow-xs"
                                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                )}
                              >
                                <Sigma className="w-3.5 h-3.5 text-cyan-400" />
                                Formula & Calculations
                              </button>
                            </div>

                            {/* MODE 1: TEXTBOOK SOP */}
                            {mode === "sop" && (
                              <div className="space-y-3 pt-1 text-xs">
                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                                  <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                                    <Atom className="w-4 h-4 text-indigo-600" />
                                    Biochemical Context & Scientific Rationale:
                                  </h5>
                                  <p className="text-slate-700 leading-relaxed">{test.detailedScientificRationale}</p>

                                  <h5 className="font-extrabold text-slate-900 pt-2 flex items-center gap-1.5">
                                    <Beaker className="w-4 h-4 text-emerald-600" />
                                    Reaction Principle:
                                  </h5>
                                  <p className="text-slate-700 leading-relaxed">{test.detailedTestPrinciple}</p>

                                  {test.chemicalEquation && (
                                    <div className="p-3 bg-slate-900 text-amber-300 font-mono text-[11px] rounded-xl border border-slate-800 overflow-x-auto mt-2">
                                      <strong>Chemical Reaction:</strong> {test.chemicalEquation}
                                    </div>
                                  )}
                                </div>

                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                                  <h5 className="font-extrabold text-slate-900">Reagents & Laboratory Apparatus:</h5>
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                    {test.reagentsAndApparatus.map((rItem, rIdx) => (
                                      <li key={rIdx} className="flex items-center gap-2 p-1.5 bg-white rounded-lg border border-slate-200 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                        <span>{rItem}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                                  <h5 className="font-extrabold text-slate-900">Step-by-Step Analytical Operating Procedure (SOP):</h5>
                                  <div className="space-y-1.5">
                                    {test.procedureSteps.map((pStep, pIdx) => (
                                      <div key={pIdx} className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                                        <span className="w-5 h-5 rounded-full bg-sky-950 text-white font-extrabold flex items-center justify-center shrink-0 text-[10px]">
                                          {pIdx + 1}
                                        </span>
                                        <p className="text-slate-800 font-medium leading-relaxed mt-0.5">{pStep}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* MODE 2: FLOWCHART */}
                            {mode === "flowchart" && (
                              <div className="space-y-3 pt-1">
                                {test.flowchartSteps.map((node) => (
                                  <div key={node.stepNumber} className="relative pl-6 border-l-2 border-sky-300 space-y-1 pb-1">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-600 border-2 border-white flex items-center justify-center text-[9px] text-white font-black">
                                      {node.stepNumber}
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-black uppercase text-sky-700 tracking-wider">
                                          {node.phaseName}
                                        </span>
                                        {node.controlPoint && (
                                          <Badge className="bg-rose-500/15 text-rose-800 border-rose-300 text-[9px] font-extrabold">
                                            {node.controlPoint.split(":")[0]}
                                          </Badge>
                                        )}
                                      </div>
                                      <h5 className="font-bold text-slate-900">{node.title}</h5>
                                      <p className="text-slate-700 font-medium">{node.action}</p>
                                      <div className="p-2 bg-sky-50/70 rounded-lg text-[11px] text-sky-950 font-medium border border-sky-100 mt-1">
                                        <strong>Mechanism:</strong> {node.scientificMechanism}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* MODE 3: FORMULA */}
                            {mode === "formula" && (
                              <div className="space-y-3 pt-1 text-xs">
                                {test.formulaBreakdown ? (
                                  <div className="space-y-3">
                                    <div className="p-4 bg-slate-900 text-amber-300 font-mono text-sm rounded-2xl border border-slate-800 text-center">
                                      <span className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-wider block mb-1">
                                        Official Standard Formula:
                                      </span>
                                      <code className="text-base font-bold text-amber-300">
                                        {test.formulaBreakdown.formula}
                                      </code>
                                    </div>

                                    <div className="space-y-1.5">
                                      <h5 className="font-extrabold text-slate-900">Variables Breakdown:</h5>
                                      <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                                        {test.formulaBreakdown.variables.map((v, vIdx) => (
                                          <div key={vIdx} className="p-2.5 flex items-center justify-between text-xs gap-4">
                                            <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 shrink-0">
                                              {v.symbol}
                                            </span>
                                            <span className="text-slate-700 font-semibold text-right">
                                              {v.description}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    {test.formulaBreakdown.derivation && (
                                      <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-100 space-y-1">
                                        <h5 className="font-extrabold text-indigo-950 flex items-center gap-1.5">
                                          <Sigma className="w-3.5 h-3.5 text-indigo-600" />
                                          Mathematical Derivation & Mass Balance:
                                        </h5>
                                        <p className="text-slate-700 leading-relaxed">{test.formulaBreakdown.derivation}</p>
                                      </div>
                                    )}

                                    {test.formulaBreakdown.factorOrigin && (
                                      <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 space-y-1">
                                        <h5 className="font-extrabold text-amber-950 flex items-center gap-1.5">
                                          <Atom className="w-3.5 h-3.5 text-amber-700" />
                                          Chemical/Kinetic Origin of Multipliers & Constants:
                                        </h5>
                                        <p className="text-amber-900 leading-relaxed">{test.formulaBreakdown.factorOrigin}</p>
                                      </div>
                                    )}

                                    {test.formulaBreakdown.unitAnalysis && (
                                      <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 space-y-1">
                                        <h5 className="font-extrabold text-blue-950 flex items-center gap-1.5">
                                          <Scale className="w-3.5 h-3.5 text-blue-600" />
                                          Dimensional & Unit Analysis:
                                        </h5>
                                        <p className="text-blue-900 font-mono text-[11px] leading-relaxed">{test.formulaBreakdown.unitAnalysis}</p>
                                      </div>
                                    )}

                                    {test.formulaBreakdown.practicalExample && (
                                      <div className="p-3.5 bg-slate-900 text-emerald-300 rounded-xl border border-slate-800 space-y-1.5">
                                        <h5 className="font-extrabold text-white flex items-center gap-1.5 text-[11px]">
                                          <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                                          Worked-Out Practical Calculation Example:
                                        </h5>
                                        <div className="p-2.5 bg-slate-950 font-mono text-[11px] text-emerald-300 rounded-lg border border-slate-800 leading-relaxed overflow-x-auto">
                                          {test.formulaBreakdown.practicalExample}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="p-6 text-center text-slate-500 text-xs">
                                    Qualitative presence/absence determination test (No quantitative formula required).
                                  </div>
                                )}
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                ) : (
                  <div className="text-center py-10 px-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                      <Search className="h-6 w-6 text-slate-400" />
                    </div>
                    <p className="text-slate-600 font-medium break-words">
                      No tests found matching &quot;{searchQuery}&quot;
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Try searching with a different keyword or filter.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        ) : (

          /* ── PRODUCT CATALOG GRID / HOME VIEW (Compositional Analysis Style) ── */
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
            <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto">
                {categoryGroups.map((group) => (
                  <div key={group.groupLabel}>
                    {/* Group header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <group.groupIcon className="w-4 h-4 text-sky-500" />
                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-600">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-sky-200 to-transparent" />
                      <span className="text-[10px] text-sky-600 font-medium tabular-nums bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                        {group.products.length} Products
                      </span>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {group.products.map((product) => {
                        const Icon = product.icon;
                        return (
                          <button
                            key={product.id}
                            onClick={() => handleSelectProduct(product)}
                            className={`
                              relative flex items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                              text-left shadow-xs hover:shadow-md hover:-translate-y-1
                              ${product.bgClass} ${product.borderClass}
                              group w-full bg-white box-border
                            `}
                          >
                            {/* Icon */}
                            <div className="p-2 sm:p-2.5 rounded-lg shadow-xs mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100">
                              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${product.colorClass}`} />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0 overflow-hidden pt-0.5">
                              <div className="flex items-start gap-1.5 flex-wrap mb-1">
                                <span className="font-bold text-gray-800 text-[13px] sm:text-[15px] leading-tight break-words group-hover:text-black transition-colors">
                                  {product.title}
                                </span>
                                <Badge
                                  variant="secondary"
                                  className="text-[9px] px-1.5 py-0 shrink-0 font-mono font-medium"
                                >
                                  {product.testIds.length} SOPs
                                </Badge>
                              </div>
                              <p className="text-[10px] sm:text-xs text-gray-500 leading-snug line-clamp-2 break-words">
                                {product.subtitle}
                              </p>
                            </div>

                            {/* Arrow */}
                            <ChevronRight
                              className={`w-4 h-4 shrink-0 ml-1 mt-1.5 transition-transform duration-200 group-hover:translate-x-1 ${product.colorClass} opacity-50`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="h-6" />
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
