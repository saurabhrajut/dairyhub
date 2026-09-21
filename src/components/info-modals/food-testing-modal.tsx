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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Beaker,
  FlaskConical,
  ShieldAlert,
  BookOpen,
  Wheat,
  CheckCircle2,
  Scale,
  Calculator,
  ChevronRight,
  Microscope,
  Workflow,
  Atom,
  Sigma,
  Cookie,
  UtensilsCrossed,
  GlassWater,
  Bean,
  Drumstick,
  ArrowLeft,
  LayoutGrid,
  Layers,
  ChevronDown,
  Container as SaltIcon,
  Target,
  HelpCircle,
  Droplet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FOOD_TESTING_DATABASE,
  FOOD_PRODUCT_CATALOG,
  FoodProductItem,
  TestType,
} from "@/lib/content/food-testing";

interface FoodTestingModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// ─────────────────────────────────────────────
// Shared sub-components (mirrors Compositional Analysis style)
// ─────────────────────────────────────────────

const InfoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-white p-3 sm:p-6 rounded-xl shadow-sm border border-slate-200 mt-2 min-w-0",
      className
    )}
  >
    {children}
  </div>
);

const SectionTitle = ({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
}) => (
  <h3 className="text-base sm:text-xl font-bold text-sky-950 font-headline mb-1 break-words flex items-center gap-2">
    {Icon && <Icon className="w-5 h-5 text-sky-600 shrink-0" />}
    <span>{children}</span>
  </h3>
);

// ─────────────────────────────────────────────
// Test type badge helper
// ─────────────────────────────────────────────
const getTestTypeBadge = (type: TestType) => {
  switch (type) {
    case "Chemical":
      return (
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-800 border-amber-300 font-bold text-[10px] px-2 py-0.5"
        >
          <FlaskConical className="w-3 h-3 text-amber-600 inline-block mr-1" />
          Chemical
        </Badge>
      );
    case "Physical":
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-800 border-blue-300 font-bold text-[10px] px-2 py-0.5"
        >
          <Scale className="w-3 h-3 text-blue-600 inline-block mr-1" />
          Physical
        </Badge>
      );
    case "Microbiological":
      return (
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-800 border-purple-300 font-bold text-[10px] px-2 py-0.5"
        >
          <Microscope className="w-3 h-3 text-purple-600 inline-block mr-1" />
          Microbio
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="text-[10px]">
          {type}
        </Badge>
      );
  }
};

// ─────────────────────────────────────────────
// Category groups configuration
// ─────────────────────────────────────────────
const CATEGORY_GROUPS = [
  {
    groupLabel: "🥛 Non-Dairy Cream (NDC) / Whipping Cream",
    groupIcon: Droplet,
    colorClass: "text-indigo-600",
    bgClass: "bg-white hover:bg-indigo-50",
    borderClass: "border-indigo-200 hover:border-indigo-400",
    badge: "NDC",
    categoryKey: "🥛 Non-Dairy Cream (NDC) / Whipping Cream",
  },
  {
    groupLabel: "🌾 Cereal & Grain Products",
    groupIcon: Wheat,
    colorClass: "text-amber-600",
    bgClass: "bg-white hover:bg-amber-50",
    borderClass: "border-amber-200 hover:border-amber-400",
    badge: "Cereal",
    categoryKey: "🌾 Cereal & Grain Products",
  },
  {
    groupLabel: "🍪 Bakery & Confectionery",
    groupIcon: Cookie,
    colorClass: "text-orange-600",
    bgClass: "bg-white hover:bg-orange-50",
    borderClass: "border-orange-200 hover:border-orange-400",
    badge: "Bakery",
    categoryKey: "🍪 Bakery & Confectionery",
  },
  {
    groupLabel: "🥫 Processed & Packaged Foods",
    groupIcon: UtensilsCrossed,
    colorClass: "text-rose-600",
    bgClass: "bg-white hover:bg-rose-50",
    borderClass: "border-rose-200 hover:border-rose-400",
    badge: "Processed",
    categoryKey: "🥫 Processed & Packaged Foods",
  },
  {
    groupLabel: "🥤 Beverages",
    groupIcon: GlassWater,
    colorClass: "text-cyan-600",
    bgClass: "bg-white hover:bg-cyan-50",
    borderClass: "border-cyan-200 hover:border-cyan-400",
    badge: "Beverage",
    categoryKey: "🥤 Beverages",
  },
  {
    groupLabel: "🫘 Pulses, Oil & Spices",
    groupIcon: Bean,
    colorClass: "text-yellow-600",
    bgClass: "bg-white hover:bg-yellow-50",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    badge: "Pulses",
    categoryKey: "🫘 Pulses, Oil & Spices",
  },
  {
    groupLabel: "🍗 Meat & Other Products",
    groupIcon: Drumstick,
    colorClass: "text-red-600",
    bgClass: "bg-white hover:bg-red-50",
    borderClass: "border-red-200 hover:border-red-400",
    badge: "Meat",
    categoryKey: "🍗 Meat & Other Products",
  },
  {
    groupLabel: "🍟 Namkeens & Snacks",
    groupIcon: SaltIcon,
    colorClass: "text-orange-700",
    bgClass: "bg-white hover:bg-orange-50",
    borderClass: "border-orange-300 hover:border-orange-500",
    badge: "Snacks",
    categoryKey: "🍟 Namkeens & Snacks",
  },
];

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function FoodTestingLaunchpadModal({
  isOpen,
  setIsOpen,
}: FoodTestingModalProps) {
  const [selectedProduct, setSelectedProduct] =
    useState<FoodProductItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [testTypeFilter, setTestTypeFilter] = useState<string>("All");

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  // Build groups with products injected
  const categoryGroups = CATEGORY_GROUPS.map((group) => ({
    ...group,
    products: FOOD_PRODUCT_CATALOG.filter(
      (p) => p.categoryGroup === group.categoryKey
    ),
  })).filter((g) => g.products.length > 0);

  // ── Handlers ──────────────────────────────
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedProduct(null);
      setSearchQuery("");
      setTestTypeFilter("All");
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const handleSelectProduct = (product: FoodProductItem) => {
    // Save scroll position before navigating
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
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

  // Restore scroll position when returning to grid
  useEffect(() => {
    if (!selectedProduct && scrollAreaRef.current) {
      const timeoutId = setTimeout(() => {
        const viewport = scrollAreaRef.current?.querySelector(
          "[data-radix-scroll-area-viewport]"
        );
        if (viewport) {
          viewport.scrollTop = scrollPosition.current;
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedProduct]);

  // ── Filtered tests for selected product ───
  const currentProductTests = selectedProduct
    ? FOOD_TESTING_DATABASE.filter((test) =>
        selectedProduct.testIds.includes(test.id)
      ).filter((test) => {
        const matchesType =
          testTypeFilter === "All" || test.testType === testTypeFilter;
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !q ||
          test.testName.toLowerCase().includes(q) ||
          test.referenceStandard.toLowerCase().includes(q) ||
          test.prescribedLimit.toLowerCase().includes(q) ||
          test.shortSummary.toLowerCase().includes(q);
        return matchesType && matchesSearch;
      })
    : [];

  // ── Detail view renderer ───────────────────
  const renderDetailView = () => {
    if (!selectedProduct) return null;

    return (
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-slate-50">
        <div className="p-3 sm:p-5 max-w-4xl mx-auto w-full pb-10 min-w-0">
          {/* Sticky search + filter bar — mirrors Compositional Analysis */}
          <div className="sticky top-0 z-10 bg-gradient-to-b from-slate-50 to-slate-50/95 pb-3 pt-1 space-y-2">
            {/* Search input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Search tests in ${selectedProduct.title}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 shadow-sm transition-all"
              />
            </div>

            {/* Test type filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
              {(["All", "Chemical", "Physical", "Microbiological"] as const).map(
                (tType) => (
                  <button
                    key={tType}
                    onClick={() => setTestTypeFilter(tType)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border shrink-0 flex items-center gap-1",
                      testTypeFilter === tType
                        ? "bg-sky-900 text-white border-sky-900 shadow-sm"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                    )}
                  >
                    {tType === "Chemical" && (
                      <FlaskConical className="w-3 h-3 text-amber-400" />
                    )}
                    {tType === "Physical" && (
                      <Scale className="w-3 h-3 text-blue-400" />
                    )}
                    {tType === "Microbiological" && (
                      <Microscope className="w-3 h-3 text-purple-400" />
                    )}
                    {tType === "All" ? "All Tests" : tType}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Main content card — identical wrapper to Compositional Analysis InfoCard */}
          <InfoCard>
            <SectionTitle icon={selectedProduct.icon}>
              {selectedProduct.title} — Analytical Testing & Quality SOPs
            </SectionTitle>
            <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
              {selectedProduct.description}
            </p>

            {currentProductTests.length > 0 ? (
              <Accordion
                type="single"
                collapsible
                className="w-full min-w-0 space-y-3"
              >
                {currentProductTests.map((test, idx) => (
                  <AccordionItem
                    key={test.id}
                    value={test.id}
                    className="border border-slate-200 rounded-xl px-3 sm:px-4 py-1 bg-white hover:border-sky-300 transition-all shadow-sm"
                  >
                    {/* ── Accordion Trigger (clean, bold title + purpose subtitle - mirrors Compositional Analysis) */}
                    <AccordionTrigger className="text-left hover:no-underline px-1 py-3">
                      <div className="flex flex-col text-left pr-4 min-w-0 max-w-full">
                        <span className="font-bold text-sm sm:text-lg text-slate-800 break-words leading-snug">
                          {test.testName}
                        </span>
                        <span className="text-xs text-muted-foreground font-normal mt-1 leading-snug break-words">
                          {test.shortSummary}
                        </span>
                      </div>
                    </AccordionTrigger>

                    {/* ── Accordion Content ── */}
                    <AccordionContent className="pt-2 pb-5 min-w-0">
                      <div className="space-y-5 food-test-sop-content">

                        {/* 0 ── Purpose & Objective / Test Scope */}
                        {test.shortSummary && (
                          <section className="p-3.5 bg-gradient-to-r from-sky-50 via-slate-50 to-indigo-50 border-l-4 border-sky-600 rounded-r-xl border-y border-r border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed shadow-sm">
                            <div className="flex items-center gap-1.5 text-sky-900 font-bold uppercase tracking-wide text-[11px] mb-1">
                              <Target className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                              Purpose & Scope of Testing:
                            </div>
                            <p className="font-medium text-slate-700">
                              {test.shortSummary}
                            </p>
                          </section>
                        )}

                        {/* 1 ── Principle */}
                        <section className="space-y-2.5">
                          <h4 className="text-xs sm:text-sm font-bold text-sky-950 uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                            <Atom className="w-4 h-4 text-sky-600 shrink-0" />
                            1. Test Principle & Biochemical Rationale
                          </h4>
                          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                            <div>
                              <strong className="text-slate-900 block mb-1">
                                Reaction Principle:
                              </strong>
                              <p>{test.detailedTestPrinciple}</p>
                            </div>
                            <div>
                              <strong className="text-slate-900 block mb-1">
                                Scientific & Quality Rationale:
                              </strong>
                              <p>{test.detailedScientificRationale}</p>
                            </div>
                            {test.chemicalEquation && (
                              <div className="p-3 bg-white text-indigo-950 font-mono text-xs rounded-lg border border-indigo-100 overflow-x-auto shadow-sm">
                                <strong className="text-indigo-900">
                                  Chemical Reaction:
                                </strong>{" "}
                                {test.chemicalEquation}
                              </div>
                            )}
                          </div>
                        </section>

                        {/* 2 ── Reagents & Apparatus */}
                        <section className="space-y-2.5">
                          <h4 className="text-xs sm:text-sm font-bold text-sky-950 uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                            <Beaker className="w-4 h-4 text-emerald-600 shrink-0" />
                            2. Reagents & Laboratory Apparatus
                          </h4>
                          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                              {test.reagentsAndApparatus.map((item, rIdx) => (
                                <li
                                  key={rIdx}
                                  className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 text-slate-800 font-medium shadow-sm"
                                >
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                  <span className="break-words">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </section>

                        {/* 3 ── Har Number & Factor Kyun? (Complete Scientific Explanation) */}
                        {((test.factorsExplanation && test.factorsExplanation.length > 0) ||
                          (test.factorsSummaryTable && test.factorsSummaryTable.length > 0) ||
                          test.formulaBreakdown?.factorOrigin) && (
                          <section className="space-y-2.5">
                            <h4 className="text-xs sm:text-sm font-bold text-sky-950 uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                              3. 🔬 Har Number & Factor Kyun? — Factors & Constants ki Complete Scientific Explanation
                            </h4>
                            <div className="bg-blue-50/70 border-l-4 border-blue-500 p-3.5 sm:p-4 rounded-r-xl border-y border-r border-blue-100 space-y-4">
                              <p className="text-xs sm:text-sm text-blue-950 font-semibold leading-relaxed">
                                Testing SOP mein use hone wale har weight, volume, chemical concentration aur mathematical factor ke peeche ka exact scientific & stoichiometric reason:
                              </p>

                              {/* Structured Q&A Items */}
                              {test.factorsExplanation && test.factorsExplanation.length > 0 && (
                                <div className="space-y-3">
                                  {test.factorsExplanation.map((qa, qIdx) => (
                                    <div key={qIdx} className="bg-white p-3 sm:p-3.5 rounded-lg border border-blue-100 shadow-sm space-y-1.5">
                                      <h5 className="font-bold text-xs sm:text-sm text-blue-900 flex items-start gap-1.5">
                                        <span className="text-blue-600 font-bold shrink-0">❓</span>
                                        <span>{qa.question}</span>
                                      </h5>
                                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5 font-medium whitespace-pre-line">
                                        {qa.answer}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Additional Factor Origin Note */}
                              {test.formulaBreakdown?.factorOrigin && (!test.factorsExplanation || test.factorsExplanation.length === 0) && (
                                <div className="bg-white p-3 sm:p-3.5 rounded-lg border border-blue-100 shadow-sm space-y-1.5">
                                  <h5 className="font-bold text-xs sm:text-sm text-blue-900 flex items-center gap-1.5">
                                    <Atom className="w-4 h-4 text-blue-600 shrink-0" />
                                    <span>Method & Factor Scientific Logic:</span>
                                  </h5>
                                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium">
                                    {test.formulaBreakdown.factorOrigin}
                                  </div>
                                </div>
                              )}

                              {/* Summary Table: Parameter | Value | Scientific Reason */}
                              {test.factorsSummaryTable && test.factorsSummaryTable.length > 0 && (
                                <div className="space-y-1.5 pt-1">
                                  <h5 className="text-xs font-bold text-blue-900 uppercase tracking-wide flex items-center gap-1.5">
                                    <Scale className="w-3.5 h-3.5 text-blue-600" />
                                    📊 Summary Table — Sab Ek Nazar Mein:
                                  </h5>
                                  <div className="overflow-x-auto rounded-lg border border-blue-200 bg-white shadow-sm">
                                    <table className="w-full text-left text-xs border-collapse min-w-[420px]">
                                      <thead>
                                        <tr className="bg-blue-100/70 text-blue-900 border-b border-blue-200 font-bold">
                                          <th className="p-2 sm:p-2.5 border-r border-blue-200">Parameter</th>
                                          <th className="p-2 sm:p-2.5 border-r border-blue-200">Value / Spec</th>
                                          <th className="p-2 sm:p-2.5">Scientific Reason</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-blue-100 text-slate-700">
                                        {test.factorsSummaryTable.map((row, rIdx) => (
                                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-blue-50/30"}>
                                            <td className="p-2 sm:p-2.5 font-bold text-slate-900 border-r border-blue-100">{row.parameter}</td>
                                            <td className="p-2 sm:p-2.5 font-mono text-blue-800 font-bold border-r border-blue-100">{row.value}</td>
                                            <td className="p-2 sm:p-2.5 leading-relaxed">{row.reason}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                            </div>
                          </section>
                        )}

                        {/* 4 ── Step-by-Step Procedure */}
                        <section className="space-y-2.5">
                          <h4 className="text-xs sm:text-sm font-bold text-sky-950 uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                            <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />
                            4. Step-by-Step Analytical Procedure (SOP)
                          </h4>
                          <div className="space-y-2">
                            {test.procedureSteps.map((step, pIdx) => {
                              const parts = step.split(/(\([^)]+\))/g);
                              return (
                                <div
                                  key={pIdx}
                                  className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 shadow-sm"
                                >
                                  <span className="w-5 h-5 rounded-full bg-sky-900 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                                    {pIdx + 1}
                                  </span>
                                  <div className="leading-relaxed font-medium">
                                    {parts.map((part, i) => {
                                      if (part.startsWith("(") && part.endsWith(")")) {
                                        return (
                                          <span
                                            key={i}
                                            className="text-[11px] sm:text-xs text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100 font-normal ml-1 inline-block my-0.5"
                                          >
                                            {part}
                                          </span>
                                        );
                                      }
                                      return <span key={i}>{part}</span>;
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </section>

                        {/* 5 ── Formula & Calculations */}
                        {test.formulaBreakdown && (
                          <section className="space-y-2.5">
                            <h4 className="text-xs sm:text-sm font-bold text-sky-950 uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                              <Sigma className="w-4 h-4 text-cyan-600 shrink-0" />
                              5. Formula & Quantitative Calculation
                            </h4>
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3.5">
                              {/* Formula highlight */}
                              <div className="p-3.5 bg-indigo-50 text-indigo-950 font-mono text-sm sm:text-base rounded-xl border border-indigo-200 text-center font-bold">
                                <span className="text-[10px] text-indigo-700 font-sans uppercase font-bold tracking-wider block mb-1">
                                  Official Calculation Formula:
                                </span>
                                <code>{test.formulaBreakdown.formula}</code>
                              </div>

                              {/* Variables */}
                              <div>
                                <strong className="text-xs sm:text-sm text-slate-900 block mb-1.5">
                                  Variables Explanation:
                                </strong>
                                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                                  {test.formulaBreakdown.variables.map(
                                    (v, vIdx) => (
                                      <div
                                        key={vIdx}
                                        className="p-2 sm:p-2.5 flex items-center justify-between text-xs sm:text-sm gap-4"
                                      >
                                        <span className="font-mono font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 shrink-0">
                                          {v.symbol}
                                        </span>
                                        <span className="text-slate-700 text-right font-medium">
                                          {v.description}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              {test.formulaBreakdown.derivation && (
                                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm">
                                  <strong className="text-slate-900 block mb-1">
                                    Derivation & Mass Balance:
                                  </strong>
                                  <p className="text-slate-700 leading-relaxed">
                                    {test.formulaBreakdown.derivation}
                                  </p>
                                </div>
                              )}

                              {/* Unit Analysis */}
                              {test.formulaBreakdown.unitAnalysis && (
                                <div className="p-2.5 bg-slate-100 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-800">
                                  <span className="font-bold text-slate-900 font-sans mr-1">Unit Dimensional Analysis:</span>
                                  {test.formulaBreakdown.unitAnalysis}
                                </div>
                              )}

                              {test.formulaBreakdown.practicalExample && (
                                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950 space-y-1">
                                  <strong className="text-emerald-900 flex items-center gap-1.5 font-bold">
                                    <Calculator className="w-4 h-4 text-emerald-700 shrink-0" />
                                    Worked Calculation Example:
                                  </strong>
                                  <p className="font-mono text-emerald-900 leading-relaxed pt-1">
                                    {test.formulaBreakdown.practicalExample}
                                  </p>
                                </div>
                              )}
                            </div>
                          </section>
                        )}

                        {/* 6 ── Regulatory Limits & Risk */}
                        <section className="space-y-2.5">
                          <h4 className="text-xs sm:text-sm font-bold text-sky-950 uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                            <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                            6. FSSAI Regulatory Limits & Quality Risk
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-[11px] font-bold uppercase text-emerald-900 tracking-wide">
                                  Prescribed FSSAI Limit
                                </h5>
                                <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
                                  {test.prescribedLimit}
                                </p>
                              </div>
                            </div>
                            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5">
                              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-[11px] font-bold uppercase text-rose-900 tracking-wide">
                                  Quality & Health Hazard (If Failed)
                                </h5>
                                <p className="text-xs sm:text-sm font-medium text-rose-800 mt-0.5">
                                  {test.riskIfFailed}
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* ── Standard Reference & Test Classification (BOTTOM) ── */}
                        {test.referenceStandard && (
                          <div className="mt-4 p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="space-y-1">
                              <p className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                Official Standard Reference:
                              </p>
                              <p className="text-xs text-blue-800 font-semibold break-words">
                                {test.referenceStandard}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 flex-wrap">
                              <span className="text-[11px] font-semibold text-slate-500">Classification:</span>
                              {getTestTypeBadge(test.testType)}
                              <Badge variant="outline" className="bg-white text-slate-700 border-slate-300 text-[10px] font-semibold">
                                {test.category}
                              </Badge>
                            </div>
                          </div>
                        )}

                        {/* 7 ── Flowchart with full CCP & Reagents */}
                        {test.flowchartSteps &&
                          test.flowchartSteps.length > 0 && (
                            <details className="group border border-slate-200 rounded-xl bg-slate-50 overflow-hidden text-xs">
                              <summary className="cursor-pointer p-3 font-bold text-slate-700 flex items-center justify-between hover:bg-slate-100 select-none transition-colors">
                                <span className="flex items-center gap-1.5">
                                  <Workflow className="w-4 h-4 text-sky-600 shrink-0" />
                                  Quick 5-Phase Process Flowchart & Control
                                  Points (CCP)
                                </span>
                                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                              </summary>
                              <div className="p-3.5 space-y-3 border-t border-slate-200 bg-white">
                                {test.flowchartSteps.map((node) => (
                                  <div
                                    key={node.stepNumber}
                                    className="relative pl-5 border-l-2 border-sky-300 space-y-1 pb-2"
                                  >
                                    <div className="absolute -left-[7px] top-0 w-3.5 h-3.5 rounded-full bg-sky-600 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
                                      {node.stepNumber}
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                                      <div className="flex items-center justify-between gap-2 flex-wrap">
                                        <span className="text-[10px] font-bold uppercase text-sky-700">
                                          {node.phaseName}
                                        </span>
                                        {node.controlPoint && (
                                          <Badge className="bg-rose-50 text-rose-700 border-rose-200 text-[9px] font-bold">
                                            {node.controlPoint.split(":")[0]}
                                          </Badge>
                                        )}
                                      </div>
                                      <h5 className="font-bold text-slate-900 text-xs">
                                        {node.title}
                                      </h5>
                                      <p className="text-slate-700 font-medium">
                                        {node.action}
                                      </p>
                                      <div className="p-2 bg-sky-50 rounded text-[11px] text-sky-900 border border-sky-100">
                                        <strong>Mechanism:</strong>{" "}
                                        {node.scientificMechanism}
                                      </div>
                                      {node.controlPoint && (
                                        <div className="p-2 bg-rose-50/80 rounded text-[11px] text-rose-900 border border-rose-100">
                                          <strong>Control:</strong>{" "}
                                          {node.controlPoint}
                                        </div>
                                      )}
                                      {node.reagentsInvolved && node.reagentsInvolved.length > 0 && (
                                        <div className="flex items-center gap-1.5 flex-wrap pt-1">
                                          <span className="text-[10px] text-slate-500 font-semibold">Reagents/Equipment:</span>
                                          {node.reagentsInvolved.map((r, rIndex) => (
                                            <span
                                              key={rIndex}
                                              className="inline-block px-1.5 py-0.5 bg-slate-200/80 text-slate-700 rounded text-[10px] font-medium"
                                            >
                                              {r}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </details>
                          )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              /* Empty state — identical to Compositional Analysis */
              <div className="text-center py-10 px-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                  <Search className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-slate-600 font-medium break-words">
                  No tests found matching &quot;{searchQuery}&quot;
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Try searching with a different keyword or filter.
                </p>
              </div>
            )}
          </InfoCard>
        </div>
      </div>
    );
  };

  // ── Grid / Home view renderer ──────────────
  const renderGridView = () => (
    <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
      <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
        <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto">
          {categoryGroups.map((group) => (
            <div key={group.groupLabel}>
              {/* Group header — identical to Compositional Analysis */}
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

              {/* Cards grid — identical structure to Compositional Analysis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {group.products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <button
                      key={product.id}
                      onClick={() => handleSelectProduct(product)}
                      className={cn(
                        "relative flex items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200",
                        "text-left shadow-sm hover:shadow-md hover:-translate-y-1",
                        "group w-full box-border",
                        group.bgClass,
                        group.borderClass
                      )}
                    >
                      {/* Icon wrapper */}
                      <div className="p-2 sm:p-2.5 rounded-lg shadow-sm mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100">
                        <Icon
                          className={cn(
                            "w-5 h-5 sm:w-6 sm:h-6",
                            group.colorClass
                          )}
                        />
                      </div>

                      {/* Text content */}
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
                        className={cn(
                          "w-4 h-4 shrink-0 ml-1 mt-1.5 transition-transform duration-200 group-hover:translate-x-1 opacity-50",
                          group.colorClass
                        )}
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
  );

  return (
    <>
      {/* Global overflow protection — mirrors Compositional Analysis style tag */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .food-test-sop-content * {
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
            .food-test-sop-content pre {
              white-space: pre-wrap !important;
              word-break: break-word !important;
              overflow-x: auto !important;
            }
          `,
        }}
      />

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          className={cn(
            // Full-screen on mobile, contained on larger screens — identical to Compositional Analysis
            "w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none",
            "sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl",
            "lg:max-w-6xl",
            "flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border",
            "[&>button]:!text-white"
          )}
        >
          {/* ── Header — pixel-perfect match to Compositional Analysis ── */}
          <div className="bg-gradient-to-br from-indigo-900 via-sky-900 to-indigo-950 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
            <DialogHeader>
              <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
                🔬 Non-Dairy Food Products Testing & Quality SOPs
              </DialogTitle>
              <DialogDescription
                className={cn(
                  "text-center text-sky-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1",
                  selectedProduct ? "hidden sm:block" : "block"
                )}
              >
                {selectedProduct
                  ? selectedProduct.subtitle
                  : "FSSAI, BIS & ISO Quality, Physical, Chemical & Microbiological Testing Procedures"}
              </DialogDescription>
            </DialogHeader>

            {/* Stats pills — hidden on mobile, shown on sm+ */}
            {!selectedProduct && (
              <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
                <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  <LayoutGrid className="w-3 h-3 shrink-0" />{" "}
                  {FOOD_PRODUCT_CATALOG.length} Products
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  <Layers className="w-3 h-3 shrink-0" /> 7 Categories
                </span>
                <span className="inline-flex items-center gap-1 bg-sky-500/30 text-sky-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-sky-500/40">
                  <Beaker className="w-3 h-3 shrink-0" />{" "}
                  {FOOD_TESTING_DATABASE.length} Master Testing SOPs
                </span>
              </div>
            )}

            {/* Back button + breadcrumb — identical layout to Compositional Analysis */}
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
                <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs min-w-0 overflow-hidden">
                  <selectedProduct.icon className="w-3 h-3 shrink-0 text-amber-300" />
                  <span className="font-medium truncate min-w-0">
                    {selectedProduct.title}
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none"
                  >
                    {selectedProduct.categoryGroup.split(" ").slice(1).join(" ")}
                  </Badge>
                </div>
              </div>
            )}
          </div>

          {/* ── Content area — switches between grid and detail view ── */}
          {selectedProduct ? renderDetailView() : renderGridView()}
        </DialogContent>
      </Dialog>
    </>
  );
}

export const FoodTestingModal = FoodTestingLaunchpadModal;
export default FoodTestingModal;
