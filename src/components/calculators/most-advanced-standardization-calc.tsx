"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  Plus,
  Trash2,
  Copy,
  Check,
  Download,
  RotateCcw,
  Zap,
  Sparkles,
  Layers,
  Scale,
  Droplets,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  Share2,
  Info,
  Sliders,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Award,
  Printer,
  Lock,
  Unlock,
  HelpCircle,
  Milk,
  Combine,
  Calculator,
  Flame,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Settings2,
  TrendingDown,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export interface BatchIngredientRow {
  id: string;
  name: string;
  qty: number;
  fat: number;
  snf: number;
  clr: number;
  isLocked?: boolean;
  isBase?: boolean;
}

// Target Product Standards Preset
export interface MilkStandardTarget {
  id: string;
  name: string;
  targetFat: number;
  targetSnf: number;
  description: string;
}

export const TARGET_STANDARDS: MilkStandardTarget[] = [
  {
    id: "toned",
    name: "Toned Milk (DT / Retail)",
    targetFat: 3.0,
    targetSnf: 8.5,
    description: "Standard Toned Milk per FSSAI (Min 3.0% Fat, 8.5% SNF)"
  },
  {
    id: "double-toned",
    name: "Double Toned Milk",
    targetFat: 1.5,
    targetSnf: 9.0,
    description: "Low fat, high protein milk (Min 1.5% Fat, 9.0% SNF)"
  },
  {
    id: "full-cream",
    name: "Full Cream Milk (FCM)",
    targetFat: 6.0,
    targetSnf: 9.0,
    description: "Rich full cream milk (Min 6.0% Fat, 9.0% SNF)"
  },
  {
    id: "cow-milk",
    name: "Standardized Cow Milk",
    targetFat: 3.5,
    targetSnf: 8.5,
    description: "Cow milk specification (Min 3.5% Fat, 8.5% SNF)"
  },
  {
    id: "std-milk",
    name: "Standardized Milk (4.5/8.5)",
    targetFat: 4.5,
    targetSnf: 8.5,
    description: "Commercial Standardized milk (Min 4.5% Fat, 8.5% SNF)"
  },
  {
    id: "buffalo-std",
    name: "Standardized Buffalo Milk",
    targetFat: 6.0,
    targetSnf: 9.0,
    description: "Buffalo milk specification (Min 6.0% Fat, 9.0% SNF)"
  },
  {
    id: "tea-special",
    name: "Tea / Coffee Special Milk",
    targetFat: 4.0,
    targetSnf: 8.5,
    description: "Commercial tea catering milk (4.0% Fat, 8.5% SNF)"
  },
  {
    id: "curd-dahi",
    name: "Dahi / Curd Processing Milk",
    targetFat: 3.5,
    targetSnf: 9.5,
    description: "High SNF milk for firm curd set without whey separation"
  },
  {
    id: "sweet-curd",
    name: "Sweet Curd / Mishti Doi Milk",
    targetFat: 3.0,
    targetSnf: 11.0,
    description: "Concentrated solids base for commercial sweetened dahi"
  },
  {
    id: "paneer-milk",
    name: "Paneer Processing Milk",
    targetFat: 5.8,
    targetSnf: 9.0,
    description: "Optimized fat-to-SNF ratio for soft, high-yield Malai Paneer"
  },
  {
    id: "ice-cream-mix",
    name: "Ice Cream Milk Base",
    targetFat: 10.0,
    targetSnf: 11.0,
    description: "High butterfat & serum solids base for rich ice cream"
  }
];

// Available CLR & SNF calculation formulas
export type FormulaId = "plant_special" | "richmond" | "isi" | "cooperative" | "punjab_haryana";

export interface FormulaSpec {
  id: FormulaId;
  name: string;
  formulaText: string;
  getClr: (fat: number, snf: number) => number;
  getSnf: (fat: number, clr: number) => number;
}

export const FORMULA_SPECS: Record<FormulaId, FormulaSpec> = {
  plant_special: {
    id: "plant_special",
    name: "Plant Special (0.20×F + 0.29)",
    formulaText: "SNF% = (CLR/4) + (0.20 * Fat) + 0.29",
    getClr: (fat, snf) => Number((4 * (snf - 0.20 * fat - 0.29)).toFixed(3)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.20 * fat + 0.29).toFixed(2))
  },
  richmond: {
    id: "richmond",
    name: "Richmond's Formula (0.21×F + 0.36)",
    formulaText: "SNF% = (CLR/4) + (0.21 * Fat) + 0.36",
    getClr: (fat, snf) => Number((4 * (snf - 0.21 * fat - 0.36)).toFixed(3)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.21 * fat + 0.36).toFixed(2))
  },
  isi: {
    id: "isi",
    name: "ISI / BIS Official (0.25×F + 0.44)",
    formulaText: "SNF% = (CLR/4) + (0.25 * Fat) + 0.44",
    getClr: (fat, snf) => Number((4 * (snf - 0.25 * fat - 0.44)).toFixed(3)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.25 * fat + 0.44).toFixed(2))
  },
  cooperative: {
    id: "cooperative",
    name: "Modified ISI / Cooperative (0.25×F + 0.14)",
    formulaText: "SNF% = (CLR/4) + (0.25 * Fat) + 0.14",
    getClr: (fat, snf) => Number((4 * (snf - 0.25 * fat - 0.14)).toFixed(3)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.25 * fat + 0.14).toFixed(2))
  },
  punjab_haryana: {
    id: "punjab_haryana",
    name: "Punjab / Haryana Variation (0.22×F + 0.36)",
    formulaText: "SNF% = (CLR/4) + (0.22 * Fat) + 0.36",
    getClr: (fat, snf) => Number((4 * (snf - 0.22 * fat - 0.36)).toFixed(3)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.22 * fat + 0.36).toFixed(2))
  }
};

// USER'S EXACT DEFAULT TEMPLATE (AS SPECIFIED IN PROMPT)
const DEFAULT_ROWS: BatchIngredientRow[] = [
  {
    id: "row-1",
    name: "Base milk 1",
    qty: 11300,
    fat: 3.12,
    snf: 8.56,
    clr: 30.584,
    isLocked: true,
    isBase: true
  },
  {
    id: "row-2",
    name: "Base milk 2",
    qty: 0,
    fat: 3.35,
    snf: 11.37,
    clr: 41.64,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-3",
    name: "SKIM MILK",
    qty: 0,
    fat: 0.05,
    snf: 8.8,
    clr: 34.8,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-4",
    name: "Cream",
    qty: 0,
    fat: 40.0,
    snf: 5.4,
    clr: -11.56,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-5",
    name: "SMP (Powder/Recon)",
    qty: 0,
    fat: 1.0,
    snf: 95.0,
    clr: 378.04,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-6",
    name: "Water",
    qty: 0,
    fat: 0.0,
    snf: 0.0,
    clr: -1.16,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-7",
    name: "Additional Stream",
    qty: 0,
    fat: 0.0,
    snf: 0.0,
    clr: -1.16,
    isLocked: false,
    isBase: false
  }
];

export function MostAdvancedStandardizationCalc() {
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<string>("matrix");
  const [rows, setRows] = useState<BatchIngredientRow[]>(DEFAULT_ROWS);
  const [targetFat, setTargetFat] = useState<number>(3.0);
  const [targetSnf, setTargetSnf] = useState<number>(8.5);
  const [formulaFatFactor, setFormulaFatFactor] = useState<number>(0.20);
  const [formulaConstant, setFormulaConstant] = useState<number>(0.29);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"table" | "cards">("cards");
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Optimizer Result State for Persistent, High-Accuracy Display
  const [optimizerResult, setOptimizerResult] = useState<{
    timestamp: number;
    status: "exact" | "partial" | "optimal";
    title: string;
    strategy: string;
    explanation: string;
    finalQty: number;
    finalFat: number;
    finalSnf: number;
    fatDiff: number;
    snfDiff: number;
    isExact: boolean;
    allocations: {
      id: string;
      name: string;
      qty: number;
      fat: number;
      snf: number;
    }[];
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setViewMode("table");
    }
  }, []);

  // Dedicated Scenario State
  const [tankCapacity, setTankCapacity] = useState<number>(15000);
  const [creamSeparationFat, setCreamSeparationFat] = useState<number>(40.0);
  const [creamSeparationSnf, setCreamSeparationSnf] = useState<number>(5.4);

  // Cost Configuration
  const [costBaseMilk, setCostBaseMilk] = useState<number>(38.0);
  const [costSkimMilk, setCostSkimMilk] = useState<number>(26.0);
  const [costCream, setCostCream] = useState<number>(320.0); // per kg
  const [costSmp, setCostSmp] = useState<number>(280.0); // per kg
  const [costWater, setCostWater] = useState<number>(0.2); // per L

  // Active Custom Formula (SNF% = CLR/4 + a*Fat + b)
  const activeFormula = useMemo(() => {
    const a = Number(formulaFatFactor) || 0.20;
    const b = Number(formulaConstant) || 0.29;
    return {
      id: "custom" as const,
      name: `Custom (${a}×F + ${b})`,
      formulaText: `SNF% = (CLR / 4) + (${a} × Fat) + ${b}`,
      getClr: (f: number, s: number) => Number((4 * (s - a * f - b)).toFixed(3)),
      getSnf: (f: number, c: number) => Number(((c / 4) + a * f + b).toFixed(2)),
      a,
      b
    };
  }, [formulaFatFactor, formulaConstant]);

  // Active Target Specification (Purely Custom & Directly Editable)
  const currentTarget = useMemo(() => {
    const f = Number(targetFat) || 0;
    const s = Number(targetSnf) || 0;
    const expClr = activeFormula.getClr(f, s);
    return {
      id: "custom",
      name: `Target (${f}% F / ${s}% SNF)`,
      targetFat: f,
      targetSnf: s,
      expectedClr: expClr,
      description: `Target Formulation: ${f}% Fat, ${s}% SNF`
    };
  }, [targetFat, targetSnf, activeFormula]);

  // Handle cell edits in spreadsheet
  const handleUpdateCell = useCallback(
    (id: string, field: keyof BatchIngredientRow, value: any) => {
      setRows((prev) =>
        prev.map((r) => {
          if (r.id !== id) return r;

          const updated = { ...r, [field]: value };

          // Auto update CLR when Fat or SNF changes
          if (field === "fat" || field === "snf") {
            const f = field === "fat" ? Number(value) : r.fat;
            const s = field === "snf" ? Number(value) : r.snf;
            updated.clr = activeFormula.getClr(f, s);
          } else if (field === "clr") {
            const c = Number(value);
            updated.snf = activeFormula.getSnf(r.fat, c);
          }

          return updated;
        })
      );
    },
    [activeFormula]
  );

  // Toggle Lock status of a row (Locked = Fixed Input, Unlocked = Auto-Solve stream)
  const handleToggleLock = useCallback((id: string) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const currentLocked = Boolean(r.isLocked ?? r.isBase);
        const nextLocked = !currentLocked;
        return { ...r, isLocked: nextLocked, isBase: nextLocked };
      })
    );
  }, []);

  const handleToggleBase = handleToggleLock;

  // Add Custom Row
  const handleAddRow = useCallback(() => {
    const newId = `row-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const newRow: BatchIngredientRow = {
      id: newId,
      name: `Stream ${rows.length + 1}`,
      qty: 0,
      fat: 0,
      snf: 0,
      clr: activeFormula.getClr(0, 0),
      isLocked: false,
      isBase: false
    };
    setRows((prev) => [...prev, newRow]);
    toast({
      title: "Row Added ➕",
      description: `New stream added at row ${rows.length + 1}.`
    });
  }, [rows.length, activeFormula, toast]);

  // Quick Preset Add
  const handleAddPresetStream = useCallback(
    (presetName: string, fat: number, snf: number) => {
      const newId = `row-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      const clr = activeFormula.getClr(fat, snf);
      const newRow: BatchIngredientRow = {
        id: newId,
        name: presetName,
        qty: 0,
        fat,
        snf,
        clr,
        isLocked: false,
        isBase: false
      };
      setRows((prev) => [...prev, newRow]);
      toast({
        title: `${presetName} Added 🥛`,
        description: `Preset with ${fat}% Fat and ${snf}% SNF appended to batch.`
      });
    },
    [activeFormula, toast]
  );

  // Remove Row
  const handleRemoveRow = useCallback(
    (id: string) => {
      if (rows.length <= 1) {
        toast({
          title: "Cannot Delete",
          description: "At least one row must remain in the batch spreadsheet.",
          variant: "destructive"
        });
        return;
      }
      setRows((prev) => prev.filter((r) => r.id !== id));
    },
    [rows.length, toast]
  );

  // Reset to Default Template
  const handleResetToDefault = useCallback(() => {
    setRows(DEFAULT_ROWS);
    setTargetFat(3.0);
    setTargetSnf(8.5);
    setFormulaFatFactor(0.20);
    setFormulaConstant(0.29);
    setOptimizerResult(null);
    toast({
      title: "Template Reset 🔄",
      description: "Default master batch (11,300 L Base Milk 1) restored."
    });
  }, [toast]);

  // Zero out all rows except the 1st Base Milk row
  const handleZeroAllExceptBase1 = useCallback(() => {
    setRows((prev) =>
      prev.map((r, idx) => {
        if (idx === 0) return r;
        return { ...r, qty: 0 };
      })
    );
    setOptimizerResult(null);
    toast({
      title: "All Additions Zeroed 🧹",
      description: "1st Base Milk ko chhodkar sabhi streams ki quantity 0 kar di gayi hai."
    });
  }, [toast]);

  // ─────────────────────────────────────────────
  // MASTER BATCH CALCULATIONS (TOTAL ROW)
  // ─────────────────────────────────────────────
  const batchSummary = useMemo(() => {
    let totalQty = 0;
    let totalKgFat = 0;
    let totalKgSnf = 0;

    const computedRows = rows.map((r) => {
      const kgFat = Number(((r.qty * r.fat) / 100).toFixed(2));
      const kgSnf = Number(((r.qty * r.snf) / 100).toFixed(2));
      totalQty += r.qty;
      totalKgFat += kgFat;
      totalKgSnf += kgSnf;
      return {
        ...r,
        kgFat,
        kgSnf
      };
    });

    const weightedFat = totalQty > 0 ? Number(((totalKgFat / totalQty) * 100).toFixed(2)) : 0;
    const weightedSnf = totalQty > 0 ? Number(((totalKgSnf / totalQty) * 100).toFixed(2)) : 0;
    const weightedClr = activeFormula.getClr(weightedFat, weightedSnf);
    const totalSolidsPct = Number((weightedFat + weightedSnf).toFixed(2));
    const totalKgTs = Number((totalKgFat + totalKgSnf).toFixed(2));

    // Variances against Target
    const fatDiff = Number((weightedFat - currentTarget.targetFat).toFixed(2));
    const snfDiff = Number((weightedSnf - currentTarget.targetSnf).toFixed(2));

    // Required Kg at Target for the current total volume
    const targetKgFat = Number(((totalQty * currentTarget.targetFat) / 100).toFixed(2));
    const targetKgSnf = Number(((totalQty * currentTarget.targetSnf) / 100).toFixed(2));

    const fatVarianceKg = Number((totalKgFat - targetKgFat).toFixed(2));
    const snfVarianceKg = Number((totalKgSnf - targetKgSnf).toFixed(2));

    const isFatMatched = Math.abs(fatDiff) <= 0.02;
    const isSnfMatched = Math.abs(snfDiff) <= 0.02;
    const isBatchPerfect = isFatMatched && isSnfMatched;

    // Base Milk Statistics (All Locked Rows)
    const baseRows = computedRows.filter((r) => Boolean(r.isLocked ?? r.isBase));
    let baseQty = 0;
    let baseKgFat = 0;
    let baseKgSnf = 0;
    baseRows.forEach((r) => {
      baseQty += r.qty;
      baseKgFat += r.kgFat;
      baseKgSnf += r.kgSnf;
    });
    const baseFatPct = baseQty > 0 ? Number(((baseKgFat / baseQty) * 100).toFixed(2)) : 0;
    const baseSnfPct = baseQty > 0 ? Number(((baseKgSnf / baseQty) * 100).toFixed(2)) : 0;

    // Batch Costing Estimation
    let totalCost = 0;
    computedRows.forEach((r) => {
      const lower = r.name.toLowerCase();
      if (lower.includes("water")) {
        totalCost += r.qty * costWater;
      } else if (lower.includes("smp")) {
        totalCost += r.qty * costSmp;
      } else if (lower.includes("cream")) {
        totalCost += r.qty * costCream;
      } else if (lower.includes("skim")) {
        totalCost += r.qty * costSkimMilk;
      } else {
        totalCost += r.qty * costBaseMilk;
      }
    });

    const costPerLiter = totalQty > 0 ? Number((totalCost / totalQty).toFixed(2)) : 0;

    return {
      computedRows,
      totalQty: Math.round(totalQty),
      totalKgFat: Number(totalKgFat.toFixed(2)),
      totalKgSnf: Number(totalKgSnf.toFixed(2)),
      weightedFat,
      weightedSnf,
      weightedClr,
      totalSolidsPct,
      totalKgTs,
      fatDiff,
      snfDiff,
      fatVarianceKg,
      snfVarianceKg,
      isFatMatched,
      isSnfMatched,
      isBatchPerfect,
      baseQty,
      baseKgFat: Number(baseKgFat.toFixed(2)),
      baseKgSnf: Number(baseKgSnf.toFixed(2)),
      baseFatPct,
      baseSnfPct,
      totalCost: Math.round(totalCost),
      costPerLiter
    };
  }, [
    rows,
    currentTarget,
    activeFormula,
    costBaseMilk,
    costSkimMilk,
    costCream,
    costSmp,
    costWater
  ]);

  // Helper to determine row unit cost for optimizer ranking
  const getIngredientCost = useCallback(
    (name: string) => {
      const lower = name.toLowerCase();
      if (lower.includes("water")) return costWater;
      if (lower.includes("skim")) return costSkimMilk;
      if (lower.includes("cream")) return costCream;
      if (lower.includes("smp") || lower.includes("powder")) return costSmp;
      return costBaseMilk;
    },
    [costWater, costSkimMilk, costCream, costSmp, costBaseMilk]
  );

  // Helper to format precision cleanly: keep up to 2 decimal places, or integer if whole
  const formatPrecision = (val: number): number => {
    if (val <= 0.0001) return 0;
    const rounded = Math.round(val);
    if (Math.abs(val - rounded) < 0.005) {
      return rounded;
    }
    return Number(val.toFixed(2));
  };

  // ─────────────────────────────────────────────
  // ⚡ ALWAYS-SOLVE ROW-LOCKING BATCH OPTIMIZER ENGINE
  // ─────────────────────────────────────────────
  const solveUniversalBalance = useCallback(() => {
    const isRowLocked = (r: BatchIngredientRow) => Boolean(r.isLocked ?? r.isBase);
    let lockedRows = rows.filter(isRowLocked);
    let unlockedRows = rows.filter((r) => !isRowLocked(r));

    let lockedQty = 0;
    let lockedKgFat = 0;
    let lockedKgSnf = 0;

    lockedRows.forEach((r) => {
      if (r.qty > 0) {
        lockedQty += r.qty;
        lockedKgFat += (r.qty * r.fat) / 100;
        lockedKgSnf += (r.qty * r.snf) / 100;
      }
    });

    // Smart Fallback: If user didn't explicitly click Lock on any row,
    // automatically treat rows with qty > 0 as fixed base milk, and rows with qty === 0 as auto-solve streams!
    if (lockedQty <= 0) {
      const rowsWithQty = rows.filter((r) => r.qty > 0);
      if (rowsWithQty.length > 0) {
        lockedRows = rowsWithQty;
        unlockedRows = rows.filter((r) => r.qty <= 0);
        rowsWithQty.forEach((r) => {
          lockedQty += r.qty;
          lockedKgFat += (r.qty * r.fat) / 100;
          lockedKgSnf += (r.qty * r.snf) / 100;
        });
      }
    }

    if (lockedQty <= 0) {
      return {
        status: "error" as const,
        error: "Kripya Base Milk me quantity darj karein taaki optimizer calculate kar sake."
      };
    }

    if (unlockedRows.length === 0) {
      return {
        status: "error" as const,
        error: "Kam se kam 1 ingredient row ko Unlock (🔓) karein taaki optimizer uski required quantity calculate karke show kar sake."
      };
    }

    const Ft = currentTarget.targetFat;
    const St = currentTarget.targetSnf;

    // Deficit: Target Kg required at current locked volume minus actual Kg present
    // Negative deficit = excess in locked milk, needs dilution
    // Positive deficit = shortfall in locked milk, needs fortification
    const deficitFat = (lockedQty * Ft) / 100 - lockedKgFat;
    const deficitSnf = (lockedQty * St) / 100 - lockedKgSnf;

    // Prepare unlocked streams with test values (fallback to standard dairy values if left 0)
    const preparedUnlocked = unlockedRows.map((u) => {
      let f = u.fat;
      let s = u.snf;
      const lower = u.name.toLowerCase();
      if (f === 0 && s === 0) {
        if (lower.includes("cream")) {
          f = 40.0;
          s = 5.4;
        } else if (lower.includes("skim")) {
          f = 0.05;
          s = 8.8;
        } else if (lower.includes("smp") || lower.includes("powder")) {
          f = 1.0;
          s = 95.0;
        } else if (lower.includes("water")) {
          f = 0.0;
          s = 0.0;
        } else if (lower.includes("cow")) {
          f = 3.5;
          s = 8.5;
        } else if (lower.includes("buffalo")) {
          f = 6.5;
          s = 9.0;
        }
      }
      return {
        ...u,
        fat: f,
        snf: s,
        cost: getIngredientCost(u.name)
      };
    });

    // Evaluator helper for any candidate quantity vector
    const evaluateSolution = (
      qMap: Map<string, number>,
      strategy: string,
      tier: number,
      explanation?: string
    ) => {
      let addedQty = 0;
      let addedKgFat = 0;
      let addedKgSnf = 0;
      let totalCost = 0;

      preparedUnlocked.forEach((u) => {
        const q = qMap.get(u.id) ?? 0;
        if (q > 0) {
          addedQty += q;
          addedKgFat += (q * u.fat) / 100;
          addedKgSnf += (q * u.snf) / 100;
          totalCost += q * u.cost;
        }
      });

      const finalQty = lockedQty + addedQty;
      const finalKgFat = lockedKgFat + addedKgFat;
      const finalKgSnf = lockedKgSnf + addedKgSnf;
      const finalFat = finalQty > 0 ? Number(((finalKgFat / finalQty) * 100).toFixed(2)) : 0;
      const finalSnf = finalQty > 0 ? Number(((finalKgSnf / finalQty) * 100).toFixed(2)) : 0;
      const fatDiff = Number((finalFat - Ft).toFixed(2));
      const snfDiff = Number((finalSnf - St).toFixed(2));
      const isExact = Math.abs(fatDiff) <= 0.02 && Math.abs(snfDiff) <= 0.02;

      // Penalties to prefer realistic plant formulations
      let penalty = 0;
      // Penalize huge water additions if dairy streams are unlocked
      preparedUnlocked.forEach((u) => {
        const q = qMap.get(u.id) ?? 0;
        if (q > 0 && u.name.toLowerCase().includes("water")) {
          penalty += 20000;
        }
      });
      // Penalize abnormal addition volume
      if (addedQty > lockedQty * 1.5) {
        penalty += 15000;
      }

      // Weighted total error: Fat error is weighted 2.5x as it's the primary pricing standard
      const totalError = Math.abs(fatDiff) * 2.5 + Math.abs(snfDiff);

      return {
        quantities: qMap,
        strategy,
        explanation: explanation || strategy,
        cost: totalCost + penalty,
        rawCost: totalCost,
        totalError,
        finalQty,
        finalFat,
        finalSnf,
        fatDiff,
        snfDiff,
        isExact,
        tier
      };
    };

    type EvaluatedSolution = ReturnType<typeof evaluateSolution>;
    const candidates: EvaluatedSolution[] = [];

    // Check if base milk is already on target
    if (Math.abs(deficitFat) < 0.01 && Math.abs(deficitSnf) < 0.01) {
      const qMap = new Map<string, number>();
      unlockedRows.forEach((u) => qMap.set(u.id, 0));
      return {
        status: "success" as const,
        quantities: qMap,
        strategy: "Batch already matches Target perfectly! 🎯",
        explanation: "Base milk is already within ±0.01% of Target Fat and SNF. No additional ingredient required.",
        finalQty: lockedQty,
        finalFat: Ft,
        finalSnf: St,
        fatDiff: 0,
        snfDiff: 0,
        isExact: true
      };
    }

    // ── Tier 1: Exact 2-Stream Simultaneous Balance (Linear Determinant) ──
    for (let i = 0; i < preparedUnlocked.length; i++) {
      for (let j = i + 1; j < preparedUnlocked.length; j++) {
        const u1 = preparedUnlocked[i];
        const u2 = preparedUnlocked[j];

        const a1 = (u1.fat - Ft) / 100;
        const b1 = (u1.snf - St) / 100;
        const a2 = (u2.fat - Ft) / 100;
        const b2 = (u2.snf - St) / 100;

        const det = a1 * b2 - a2 * b1;
        if (Math.abs(det) > 1e-7) {
          const x1 = (deficitFat * b2 - deficitSnf * a2) / det;
          const x2 = (a1 * deficitSnf - b1 * deficitFat) / det;

          // Physically feasible non-negative solutions
          if (x1 >= -0.05 && x2 >= -0.05) {
            const q1 = formatPrecision(Math.max(0, x1));
            const q2 = formatPrecision(Math.max(0, x2));

            const qMap = new Map<string, number>();
            unlockedRows.forEach((u) => qMap.set(u.id, 0));
            qMap.set(u1.id, q1);
            qMap.set(u2.id, q2);

            const strat = `${u1.name}: ${q1.toLocaleString()} L/Kg + ${u2.name}: ${q2.toLocaleString()} L/Kg`;
            const desc = `Target Fat (${Ft}%) aur SNF (${St}%) achieve karne ke liye ${u1.name} (${q1.toLocaleString()} L/Kg) aur ${u2.name} (${q2.toLocaleString()} L/Kg) add karein.`;
            candidates.push(evaluateSolution(qMap, strat, 1, desc));
          }
        }
      }
    }

    // ── Tier 2: Single-Stream Exact Solvers (Hits Target Fat or Target SNF) ──
    for (const u of preparedUnlocked) {
      const a = (u.fat - Ft) / 100;
      const b = (u.snf - St) / 100;

      // 1. Solve for Exact Target Fat:
      if (Math.abs(a) > 1e-5) {
        const x = deficitFat / a;
        if (x >= 0) {
          const q = formatPrecision(x);
          const qMap = new Map<string, number>();
          unlockedRows.forEach((row) => qMap.set(row.id, 0));
          qMap.set(u.id, q);

          const strat = `${u.name}: ${q.toLocaleString()} L/Kg (Target Fat: ${Ft}%)`;
          const desc = `${u.name} (${q.toLocaleString()} L/Kg) se Target Fat (${Ft}%) achieve hoga.`;
          candidates.push(evaluateSolution(qMap, strat, 2, desc));
        }
      }

      // 2. Solve for Exact Target SNF:
      if (Math.abs(b) > 1e-5) {
        const x = deficitSnf / b;
        if (x >= 0) {
          const q = formatPrecision(x);
          const qMap = new Map<string, number>();
          unlockedRows.forEach((row) => qMap.set(row.id, 0));
          qMap.set(u.id, q);

          const strat = `${u.name}: ${q.toLocaleString()} L/Kg (Target SNF: ${St}%)`;
          const desc = `${u.name} (${q.toLocaleString()} L/Kg) se Target SNF (${St}%) achieve hoga.`;
          candidates.push(evaluateSolution(qMap, strat, 2, desc));
        }
      }
    }

    // ── Tier 3: Constrained Non-Negative Multi-Stream Quadratic Minimization (NNLS) ──
    // Solves for the optimal combination of unlocked streams when exact dual balance is constrained
    for (let i = 0; i < preparedUnlocked.length; i++) {
      for (let j = i + 1; j < preparedUnlocked.length; j++) {
        const u1 = preparedUnlocked[i];
        const u2 = preparedUnlocked[j];

        const a1 = (u1.fat - Ft) / 100;
        const b1 = (u1.snf - St) / 100;
        const a2 = (u2.fat - Ft) / 100;
        const b2 = (u2.snf - St) / 100;

        const wf = 10;
        const ws = 1;
        const A = wf * a1 * a1 + ws * b1 * b1;
        const B = wf * a1 * a2 + ws * b1 * b2;
        const C = wf * a2 * a2 + ws * b2 * b2;
        const R1 = wf * a1 * deficitFat + ws * b1 * deficitSnf;
        const R2 = wf * a2 * deficitFat + ws * b2 * deficitSnf;

        const detQ = A * C - B * B;
        let optX1 = 0;
        let optX2 = 0;

        if (Math.abs(detQ) > 1e-12) {
          const uX1 = (R1 * C - R2 * B) / detQ;
          const uX2 = (A * R2 - B * R1) / detQ;

          if (uX1 >= 0 && uX2 >= 0) {
            optX1 = uX1;
            optX2 = uX2;
          } else if (uX1 < 0 && uX2 >= 0) {
            optX1 = 0;
            optX2 = Math.max(0, R2 / C);
          } else if (uX2 < 0 && uX1 >= 0) {
            optX1 = Math.max(0, R1 / A);
            optX2 = 0;
          } else {
            optX1 = 0;
            optX2 = 0;
          }
        }

        const q1 = formatPrecision(optX1);
        const q2 = formatPrecision(optX2);
        if (q1 > 0 || q2 > 0) {
          const qMap = new Map<string, number>();
          unlockedRows.forEach((u) => qMap.set(u.id, 0));
          qMap.set(u1.id, q1);
          qMap.set(u2.id, q2);

          const strat = `${u1.name}: ${q1.toLocaleString()} + ${u2.name}: ${q2.toLocaleString()} (Optimal Balance)`;
          const desc = `Unlocked streams se best possible optimal formulation calculate karke fill ki gayi hai.`;
          candidates.push(evaluateSolution(qMap, strat, 3, desc));
        }
      }
    }

    // Rank Candidates:
    // 1. Exact Dual Balance (isExact: true) ALWAYS first
    // 2. Lowest tier
    // 3. Lowest total weighted error
    // 4. Lowest cost / realistic volume
    candidates.sort((c1, c2) => {
      if (c1.isExact !== c2.isExact) {
        return c1.isExact ? -1 : 1;
      }
      if (c1.tier !== c2.tier) {
        return c1.tier - c2.tier;
      }
      if (Math.abs(c1.totalError - c2.totalError) > 0.005) {
        return c1.totalError - c2.totalError;
      }
      return c1.cost - c2.cost;
    });

    if (candidates.length === 0) {
      // Fallback: If no candidate was generated, return 0 for all unlocked rows
      const qMap = new Map<string, number>();
      unlockedRows.forEach((u) => qMap.set(u.id, 0));
      return {
        status: "success" as const,
        quantities: qMap,
        strategy: "Unlocked streams verified. No additional stream required.",
        explanation: "Unlocked rows verify ho gayi hain, base milk specs target ke anusaar theek hain.",
        finalQty: lockedQty,
        finalFat: Number(((lockedKgFat / lockedQty) * 100).toFixed(2)),
        finalSnf: Number(((lockedKgSnf / lockedQty) * 100).toFixed(2)),
        fatDiff: Number(((lockedKgFat / lockedQty) * 100 - Ft).toFixed(2)),
        snfDiff: Number(((lockedKgSnf / lockedQty) * 100 - St).toFixed(2)),
        isExact: false
      };
    }

    const best = candidates[0];
    return {
      status: "success" as const,
      quantities: best.quantities,
      strategy: best.strategy,
      explanation: best.explanation,
      finalQty: best.finalQty,
      finalFat: best.finalFat,
      finalSnf: best.finalSnf,
      fatDiff: best.fatDiff,
      snfDiff: best.snfDiff,
      isExact: best.isExact
    };
  }, [rows, currentTarget, getIngredientCost]);

  // Execute 1-Click Auto-Balance on the Spreadsheet
  const handleAutoBalanceBatch = useCallback(() => {
    const sol = solveUniversalBalance();
    if (!sol) return;

    if (sol.status === "error") {
      toast({
        title: "Optimizer Alert ⚠️",
        description: sol.error,
        variant: "destructive"
      });
      return;
    }

    // Set row quantities: ONLY unlocked rows are updated!
    // Locked rows are STRICTLY 100% UNTOUCHED!
    const allocatedStreamsList: {
      id: string;
      name: string;
      qty: number;
      fat: number;
      snf: number;
    }[] = [];

    const updatedRows = rows.map((r) => {
      const isLocked = Boolean(r.isLocked ?? r.isBase);
      // STRICT RULE: Never touch locked rows!
      if (isLocked) {
        return r;
      }

      const calculatedQty = sol.quantities.get(r.id) ?? 0;
      let f = r.fat;
      let s = r.snf;
      const lower = r.name.toLowerCase();
      if (f === 0 && s === 0) {
        if (lower.includes("cream")) {
          f = 40.0;
          s = 5.4;
        } else if (lower.includes("skim")) {
          f = 0.05;
          s = 8.8;
        } else if (lower.includes("smp") || lower.includes("powder")) {
          f = 1.0;
          s = 95.0;
        }
      }

      allocatedStreamsList.push({
        id: r.id,
        name: r.name,
        qty: calculatedQty,
        fat: f,
        snf: s
      });

      return {
        ...r,
        qty: calculatedQty,
        fat: f,
        snf: s,
        clr: activeFormula.getClr(f, s)
      };
    });

    setRows(updatedRows);

    // Save Optimizer Result into State for Persistent, High-Accuracy Display!
    setOptimizerResult({
      timestamp: Date.now(),
      status: sol.isExact ? "exact" : Math.abs(sol.fatDiff) <= 0.02 ? "partial" : "optimal",
      title: sol.isExact ? "Batch Perfectly Balanced! 🎯" : "Optimal Allocation Applied ⚡",
      strategy: sol.strategy,
      explanation: sol.explanation,
      finalQty: sol.finalQty,
      finalFat: sol.finalFat,
      finalSnf: sol.finalSnf,
      fatDiff: sol.fatDiff,
      snfDiff: sol.snfDiff,
      isExact: sol.isExact,
      allocations: allocatedStreamsList
    });

    // Toast feedback
    if (sol.isExact) {
      toast({
        title: "Batch Perfectly Balanced! 🎯",
        description: `Target: ${currentTarget.targetFat}% F / ${currentTarget.targetSnf}% S achieved. ${sol.strategy}`
      });
    } else {
      toast({
        title: "Optimized with Unlocked Rows 🥛",
        description: `Filled: ${sol.strategy}. Result: ${sol.finalFat}% Fat / ${sol.finalSnf}% SNF.`
      });
    }
  }, [rows, solveUniversalBalance, currentTarget, activeFormula, toast]);

  // Cream Separation Calculations
  const creamSeparationSummary = useMemo(() => {
    const baseQty = batchSummary.baseQty;
    const baseFat = batchSummary.baseFatPct;
    const baseSnf = batchSummary.baseSnfPct;
    const targetFat = currentTarget.targetFat;
    const creamFat = creamSeparationFat;
    const creamSnf = creamSeparationSnf;

    if (baseQty <= 0 || baseFat <= targetFat) {
      return {
        canSeparate: false,
        reason: baseFat <= targetFat ? "Base milk fat is already at or below target." : "No base milk quantity specified.",
        creamYieldLiters: 0,
        stdMilkRemaining: baseQty,
        resultSnf: baseSnf,
        creamRevenue: 0
      };
    }

    // Formula: Q_cream = Q_base * (Fat_base - Fat_target) / (Fat_cream - Fat_target)
    const creamQty = (baseQty * (baseFat - targetFat)) / (creamFat - targetFat);
    const stdQty = baseQty - creamQty;

    // Remaining SNF: (BaseKgSnf - CreamKgSnf) / StdQty
    const baseKgSnf = (baseQty * baseSnf) / 100;
    const creamKgSnf = (creamQty * creamSnf) / 100;
    const finalSnfPct = stdQty > 0 ? Number((((baseKgSnf - creamKgSnf) / stdQty) * 100).toFixed(2)) : 0;

    // Cream revenue: cream density ~ 0.99 kg/L
    const creamKg = creamQty * 0.99;
    const creamRevenue = Math.round(creamKg * costCream);

    return {
      canSeparate: true,
      creamYieldLiters: Math.round(creamQty),
      creamYieldKg: Number(creamKg.toFixed(1)),
      stdMilkRemaining: Math.round(stdQty),
      resultSnf: finalSnfPct,
      creamRevenue
    };
  }, [batchSummary, currentTarget, creamSeparationFat, creamSeparationSnf, costCream]);

  // ─────────────────────────────────────────────
  // 📋 EXPORT ENGINES (EXCEL, CSV, PRINT, WHATSAPP)
  // ─────────────────────────────────────────────
  const handleCopyExcelTsv = useCallback(() => {
    let tsv = "S.No\tComponent / Source\tQTY (L/Kg)\tFat%\tkg fat\tSnf%\tkg snf\tClr\n";

    batchSummary.computedRows.forEach((r, idx) => {
      tsv += `${idx + 1}\t${r.name}\t${r.qty}\t${r.fat}\t${r.kgFat}\t${r.snf}\t${r.kgSnf}\t${r.clr}\n`;
    });

    tsv += `Total\tGrand Total\t${batchSummary.totalQty}\t${batchSummary.weightedFat}\t${batchSummary.totalKgFat}\t${batchSummary.weightedSnf}\t${batchSummary.totalKgSnf}\t${batchSummary.weightedClr}\n`;

    navigator.clipboard.writeText(tsv);
    setIsCopied(true);
    toast({
      title: "Excel Data Copied! 📋",
      description: "Direct paste into Microsoft Excel or Google Sheets (Ctrl+V) enabled."
    });
    setTimeout(() => setIsCopied(false), 2000);
  }, [batchSummary, toast]);

  const handleDownloadCsv = useCallback(() => {
    let csv = "S.No,Component / Source,QTY (L/Kg),Fat%,kg fat,Snf%,kg snf,Clr\n";

    batchSummary.computedRows.forEach((r, idx) => {
      csv += `${idx + 1},"${r.name}",${r.qty},${r.fat},${r.kgFat},${r.snf},${r.kgSnf},${r.clr}\n`;
    });

    csv += `Total,"Grand Total",${batchSummary.totalQty},${batchSummary.weightedFat},${batchSummary.totalKgFat},${batchSummary.weightedSnf},${batchSummary.totalKgSnf},${batchSummary.weightedClr}\n`;

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Master_Standardization_Batch_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "CSV Downloaded! 📥",
      description: "Spreadsheet saved to your device."
    });
  }, [batchSummary, toast]);

  const handlePrintDocket = useCallback(() => {
    window.print();
  }, []);

  const handleCopyWhatsAppReport = useCallback(() => {
    const text = `🥛 *DAIRY PLANT BATCH STANDARDIZATION REPORT*
📅 Date: ${new Date().toLocaleDateString("en-IN")} | Shift: Master Batch
🎯 Target Spec: *${currentTarget.name}* (${currentTarget.targetFat}% Fat, ${currentTarget.targetSnf}% SNF)
📏 Formula: ${activeFormula.name}
━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *BATCH COMPOSITION MATRIX:*
${batchSummary.computedRows
  .filter((r) => r.qty > 0)
  .map(
    (r, i) =>
      `• ${i + 1}. *${r.name}*: ${r.qty.toLocaleString()} L/kg | Fat: ${r.fat}% (${r.kgFat} kg) | SNF: ${r.snf}% (${r.kgSnf} kg) | CLR: ${r.clr}`
  )
  .join("\n")}
━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 *FINAL BATCH AUDIT:*
• Total Volume: *${batchSummary.totalQty.toLocaleString()} Liters*
• Final Fat: *${batchSummary.weightedFat}%* (${batchSummary.totalKgFat} kg Fat)
• Final SNF: *${batchSummary.weightedSnf}%* (${batchSummary.totalKgSnf} kg SNF)
• Final CLR: *${batchSummary.weightedClr}*
• Total Solids (TS): *${batchSummary.totalSolidsPct}%* (${batchSummary.totalKgTs} kg TS)
• Compliance Status: *${batchSummary.isBatchPerfect ? "✅ PERFECT ON-TARGET (0.00% Variance)" : "⚠️ VARIANCE DETECTED"}*
• Est. Batch Cost: *₹${batchSummary.totalCost.toLocaleString()}* (₹${batchSummary.costPerLiter}/L)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated via DairyHub Advanced Standardization Engine`;

    navigator.clipboard.writeText(text);
    toast({
      title: "WhatsApp Report Copied! 📱",
      description: "Ready to paste into your Plant Operations & QA Group."
    });
  }, [batchSummary, currentTarget, activeFormula, toast]);

  return (
    <div className="space-y-4 sm:space-y-6 pb-12 animate-fadeIn max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-x-hidden px-1 sm:px-0">
      {/* 👑 COMPACT HEADER & DROPDOWN SETTINGS (Zero Screen Space Waste) */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-md p-2.5 sm:p-3 space-y-2.5 w-full min-w-0 max-w-full">
        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          {/* Left: Compact Title & Live Specs Badges */}
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Award className="w-3 h-3 fill-slate-950" />
              Master Edition
            </span>
            <h2 className="text-xs sm:text-sm font-black text-white truncate">
              Standardization Matrix
            </h2>
            
            {/* Live Target Pill */}
            <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-950/70 border border-amber-800/40 px-2 py-0.5 rounded-lg shrink-0">
              🎯 {currentTarget.targetFat}% F | {currentTarget.targetSnf}% S
            </span>

            {/* Live Expected CLR & Formula Pill */}
            <span className="text-[10px] font-mono text-sky-300 bg-sky-950/70 border border-sky-800/40 px-2 py-0.5 rounded-lg shrink-0">
              CLR: {currentTarget.expectedClr} ({activeFormula.a}F+{activeFormula.b})
            </span>
          </div>

          {/* Right: Dropdown Settings Button */}
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            className={cn(
              "h-7 sm:h-8 text-[11px] font-bold rounded-xl gap-1.5 transition-all shrink-0 ml-auto border",
              isSettingsOpen
                ? "bg-amber-400 text-slate-950 border-amber-300 shadow-xs font-black"
                : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 hover:text-white"
            )}
          >
            <Settings2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Target & Formula</span>
            {isSettingsOpen ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </Button>
        </div>

        {/* Collapsible Dropdown Content */}
        {isSettingsOpen && (
          <div className="pt-2.5 border-t border-slate-800 animate-fadeIn space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              {/* 1. Custom Target Product Standard */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    🎯 Custom Target Standard
                  </span>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-700/50">
                    Target CLR: <strong>{currentTarget.expectedClr}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800">
                    <label className="text-[10px] text-amber-300 font-bold block mb-0.5">Target Fat %</label>
                    <Input
                      type="number"
                      step="any"
                      inputMode="decimal"
                      value={targetFat === 0 ? "" : targetFat}
                      placeholder="0.00"
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        const val = e.target.value;
                        setTargetFat(val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                      }}
                      className="h-7 text-xs font-mono font-black text-amber-400 bg-slate-950 border-slate-700 focus:border-amber-500 text-right px-2"
                    />
                  </div>
                  <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800">
                    <label className="text-[10px] text-sky-300 font-bold block mb-0.5">Target SNF %</label>
                    <Input
                      type="number"
                      step="any"
                      inputMode="decimal"
                      value={targetSnf === 0 ? "" : targetSnf}
                      placeholder="0.00"
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        const val = e.target.value;
                        setTargetSnf(val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                      }}
                      className="h-7 text-xs font-mono font-black text-sky-400 bg-slate-950 border-slate-700 focus:border-sky-500 text-right px-2"
                    />
                  </div>
                </div>

                {/* Quick 1-Click Target Standard Chips */}
                <div className="flex items-center gap-1 flex-wrap pt-0.5">
                  <span className="text-[9px] text-slate-400 font-medium">Quick:</span>
                  {[
                    { label: "Toned 3.0/8.5", f: 3.0, s: 8.5 },
                    { label: "DTM 1.5/9.0", f: 1.5, s: 9.0 },
                    { label: "Cow 3.5/8.5", f: 3.5, s: 8.5 },
                    { label: "Full Cream 6.0/9.0", f: 6.0, s: 9.0 },
                    { label: "Std 4.5/8.5", f: 4.5, s: 8.5 }
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setTargetFat(item.f);
                        setTargetSnf(item.s);
                      }}
                      className={cn(
                        "text-[9px] font-bold px-1.5 py-0.5 rounded-md transition-all border",
                        targetFat === item.f && targetSnf === item.s
                          ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-xs"
                          : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Custom SNF Formula */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 flex items-center gap-1">
                    📐 Custom SNF Formula
                  </span>
                  <span className="text-[9px] font-mono text-sky-300">
                    CLR/4 + a×F + b
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800">
                    <label className="text-[10px] text-slate-300 font-bold block mb-0.5">Fat Factor (a)</label>
                    <Input
                      type="number"
                      step="any"
                      inputMode="decimal"
                      value={formulaFatFactor}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormulaFatFactor(val === "" ? 0 : parseFloat(val) || 0);
                      }}
                      className="h-7 text-xs font-mono font-bold text-white bg-slate-950 border-slate-700 focus:border-sky-500 text-right px-2"
                    />
                  </div>
                  <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800">
                    <label className="text-[10px] text-slate-300 font-bold block mb-0.5">Constant (b)</label>
                    <Input
                      type="number"
                      step="any"
                      inputMode="decimal"
                      value={formulaConstant}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormulaConstant(val === "" ? 0 : parseFloat(val) || 0);
                      }}
                      className="h-7 text-xs font-mono font-bold text-white bg-slate-950 border-slate-700 focus:border-sky-500 text-right px-2"
                    />
                  </div>
                </div>

                {/* Quick Formula Presets Chips */}
                <div className="flex items-center gap-1 flex-wrap pt-0.5">
                  <span className="text-[9px] text-slate-400 font-medium">Formulas:</span>
                  {[
                    { label: "Plant (0.20F+0.29)", a: 0.20, b: 0.29 },
                    { label: "Richmond (0.21F+0.36)", a: 0.21, b: 0.36 },
                    { label: "ISI (0.25F+0.44)", a: 0.25, b: 0.44 },
                    { label: "Pb/Hr (0.22F+0.32)", a: 0.22, b: 0.32 }
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setFormulaFatFactor(item.a);
                        setFormulaConstant(item.b);
                      }}
                      className={cn(
                        "text-[9px] font-bold px-1.5 py-0.5 rounded-md transition-all border",
                        formulaFatFactor === item.a && formulaConstant === item.b
                          ? "bg-sky-500 text-slate-950 border-sky-400 font-black shadow-xs"
                          : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsSettingsOpen(false)}
                className="h-6 text-[10px] text-slate-400 hover:text-white font-bold"
              >
                Close Settings ✕
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* 🧭 NAVIGATION TABS */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full min-w-0 max-w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full h-auto p-1 bg-slate-200/80 rounded-2xl border border-slate-300 gap-1 min-w-0 max-w-full">
          <TabsTrigger
            value="matrix"
            className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-black data-[state=active]:bg-white data-[state=active]:text-indigo-950 data-[state=active]:shadow-sm flex items-center justify-center gap-1 sm:gap-1.5 truncate"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="truncate">1. Master Batch</span>
          </TabsTrigger>
          <TabsTrigger
            value="scenarios"
            className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-black data-[state=active]:bg-white data-[state=active]:text-amber-950 data-[state=active]:shadow-sm flex items-center justify-center gap-1 sm:gap-1.5 truncate"
          >
            <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">2. Problem Solvers</span>
          </TabsTrigger>
          <TabsTrigger
            value="economics"
            className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-black data-[state=active]:bg-white data-[state=active]:text-emerald-950 data-[state=active]:shadow-sm flex items-center justify-center gap-1 sm:gap-1.5 truncate"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">3. Economics</span>
          </TabsTrigger>
          <TabsTrigger
            value="audit"
            className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-black data-[state=active]:bg-white data-[state=active]:text-sky-950 data-[state=active]:shadow-sm flex items-center justify-center gap-1 sm:gap-1.5 truncate"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span className="truncate">4. Plant SOP</span>
          </TabsTrigger>
        </TabsList>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 1: MASTER BATCH MATRIX (LIVE EXCEL SPREADSHEET) */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="matrix" className="space-y-4 pt-1 w-full min-w-0 max-w-full">
          {/* Quick Presets Bar (Smooth Touch Scroll on Mobile) */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 p-2 rounded-xl sm:rounded-2xl border border-slate-200 overflow-x-auto touch-pan-x no-scrollbar w-full min-w-0 max-w-full">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 shrink-0">
              ⚡ Quick Stream:
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Skim Milk (Liquid)", 0.05, 8.8)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-slate-300 bg-white hover:bg-slate-50 gap-1 shrink-0 whitespace-nowrap"
            >
              🥛 + Skim Milk
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Fresh Cream 40%", 40.0, 5.4)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-amber-300 bg-amber-50/50 hover:bg-amber-100 text-amber-900 gap-1 shrink-0 whitespace-nowrap"
            >
              🧈 + Cream 40%
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("SMP Powder", 1.0, 95.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-blue-300 bg-blue-50/50 hover:bg-blue-100 text-blue-900 gap-1 shrink-0 whitespace-nowrap"
            >
              🥄 + SMP Powder
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Treated Water", 0.0, 0.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-sky-300 bg-sky-50/50 hover:bg-sky-100 text-sky-900 gap-1 shrink-0 whitespace-nowrap"
            >
              💧 + Water
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Cow Milk Stream", 3.5, 8.5)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-emerald-300 bg-emerald-50/50 hover:bg-emerald-100 text-emerald-900 gap-1 shrink-0 whitespace-nowrap"
            >
              🐄 + Cow Milk
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Buffalo Milk Stream", 6.5, 9.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-purple-300 bg-purple-50/50 hover:bg-purple-100 text-purple-900 gap-1 shrink-0 whitespace-nowrap"
            >
              🐃 + Buffalo Milk
            </Button>
          </div>

          {/* SPREADSHEET TOOLBAR */}
          <div className="flex flex-col gap-2.5 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-slate-200 shadow-xs w-full min-w-0 max-w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <Button
                  size="sm"
                  onClick={handleAddRow}
                  className="h-7 sm:h-8 text-[11px] sm:text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white gap-1 rounded-xl shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" /> Stream
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAutoBalanceBatch}
                  className="h-7 sm:h-8 text-[11px] sm:text-xs font-black text-amber-900 bg-amber-50 hover:bg-amber-100 border-amber-400 gap-1 rounded-xl shadow-xs active:scale-95 transition-transform"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  ⚡ Auto-Balance
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleZeroAllExceptBase1}
                  className="h-7 sm:h-8 text-[11px] sm:text-xs font-bold text-slate-600 hover:text-red-700 gap-1 rounded-xl"
                  title="1st Base Milk ko chhodkar sabhi streams ki quantity 0 karein"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-rose-500" /> Zero All
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleResetToDefault}
                  className="h-7 sm:h-8 text-[11px] sm:text-xs font-bold text-slate-600 hover:text-slate-900 gap-1 rounded-xl"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </Button>
              </div>

              {/* View Mode Switcher for Mobile / Desktop */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={cn(
                    "px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1",
                    viewMode === "table" ? "bg-white text-indigo-950 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  <FileSpreadsheet className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600" /> Table
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("cards")}
                  className={cn(
                    "px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1",
                    viewMode === "cards" ? "bg-white text-indigo-950 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600" /> Mobile Cards
                </button>
              </div>
            </div>

            {/* Secondary Export Row */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-slate-100 justify-between">
              <div className="flex items-center gap-1.5 flex-wrap">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyExcelTsv}
                  className="h-7 text-[11px] font-bold border-slate-300 text-slate-800 hover:bg-slate-100 gap-1 rounded-lg px-2"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  {isCopied ? "Copied!" : "Excel TSV"}
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownloadCsv}
                  className="h-7 text-[11px] font-bold border-slate-300 text-slate-800 hover:bg-slate-100 gap-1 rounded-lg px-2"
                >
                  <Download className="w-3 h-3" /> CSV
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePrintDocket}
                  className="h-7 text-[11px] font-bold border-slate-300 text-slate-800 hover:bg-slate-100 gap-1 rounded-lg px-2 hidden sm:inline-flex"
                >
                  <Printer className="w-3 h-3" /> Print
                </Button>
              </div>

              <Button
                size="sm"
                onClick={handleCopyWhatsAppReport}
                className="h-7 text-[11px] font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white gap-1 rounded-lg shadow-xs px-2.5 ml-auto"
              >
                <Share2 className="w-3 h-3" /> WhatsApp Report
              </Button>
            </div>
          </div>

          {/* OPTIMIZER RESULT BANNER (PERSISTENT HIGH-ACCURACY DISPLAY) */}
          {optimizerResult && (
            <div
              className={cn(
                "p-3.5 sm:p-4 rounded-2xl border shadow-sm transition-all animate-in fade-in slide-in-from-top-2 duration-300 w-full",
                optimizerResult.isExact
                  ? "bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-emerald-500/60 text-white"
                  : "bg-gradient-to-r from-slate-900 via-amber-950/80 to-slate-900 border-amber-500/60 text-white"
              )}
            >
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shrink-0",
                      optimizerResult.isExact ? "bg-emerald-500 text-slate-950" : "bg-amber-500 text-slate-950"
                    )}
                  >
                    {optimizerResult.isExact ? "🎯 100% Target Matched" : "⚡ Optimal Allocation"}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    {optimizerResult.title}
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOptimizerResult(null)}
                  className="h-6 w-6 p-0 text-white/60 hover:text-white rounded-md shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </Button>
              </div>

              {/* Metric Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2.5">
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 font-medium">Target Standard</div>
                  <div className="text-xs sm:text-sm font-mono font-black text-amber-400">
                    {currentTarget.targetFat}% F | {currentTarget.targetSnf}% S
                  </div>
                </div>
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 font-medium">Achieved Composition</div>
                  <div
                    className={cn(
                      "text-xs sm:text-sm font-mono font-black",
                      optimizerResult.isExact ? "text-emerald-400" : "text-sky-300"
                    )}
                  >
                    {optimizerResult.finalFat}% F | {optimizerResult.finalSnf}% S
                  </div>
                </div>
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 font-medium">Variance vs Target</div>
                  <div className="text-xs sm:text-sm font-mono font-black text-amber-300">
                    {optimizerResult.fatDiff > 0 ? `+${optimizerResult.fatDiff}` : optimizerResult.fatDiff}% F | {optimizerResult.snfDiff > 0 ? `+${optimizerResult.snfDiff}` : optimizerResult.snfDiff}% S
                  </div>
                </div>
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <div className="text-[10px] text-slate-400 font-medium">Final Batch Volume</div>
                  <div className="text-xs sm:text-sm font-mono font-black text-white">
                    {optimizerResult.finalQty.toLocaleString()} L
                  </div>
                </div>
              </div>

              {/* Stream Allocations Detail (What got filled in the rows) */}
              <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  Filled into Unlocked Rows:
                </span>
                {optimizerResult.allocations.map((a, aIdx) => (
                  <span
                    key={`${a.id}-${aIdx}`}
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-white/10 border border-white/20 text-white flex items-center gap-1.5"
                  >
                    <span className="text-amber-300 font-sans">{a.name}:</span>
                    <strong className={a.qty > 0 ? "text-emerald-300 font-black" : "text-slate-400 font-normal"}>
                      {a.qty > 0 ? `${a.qty.toLocaleString()} L/Kg` : "0 (Not needed)"}
                    </strong>
                  </span>
                ))}
              </div>

              <p className="text-[11px] text-slate-300/95 pt-2 leading-relaxed">
                💡 <strong>Optimizer Detail:</strong> {optimizerResult.explanation}
              </p>
            </div>
          )}

          {/* VIEW MODE 1: EXCEL SPREADSHEET TABLE */}
          {viewMode === "table" ? (
            <Card className="rounded-2xl sm:rounded-3xl border-slate-200 shadow-md bg-white overflow-hidden w-full min-w-0 max-w-full">
              <CardHeader className="p-3 sm:p-4 bg-slate-900 text-white border-b border-slate-800">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-xs sm:text-sm font-black flex items-center gap-1.5 sm:gap-2 text-white truncate">
                    <FileSpreadsheet className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">Live Material Balance Matrix</span>
                  </CardTitle>
                  <Badge
                    className={cn(
                      "text-[10px] sm:text-xs font-black px-2 sm:px-3 py-0.5 sm:py-1 shrink-0",
                      batchSummary.isBatchPerfect
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-500 text-slate-950"
                    )}
                  >
                    {batchSummary.isBatchPerfect
                      ? "✓ On-Target"
                      : `Dev: ${batchSummary.fatDiff > 0 ? "+" : ""}${batchSummary.fatDiff}% F | ${batchSummary.snfDiff > 0 ? "+" : ""}${batchSummary.snfDiff}% S`}
                  </Badge>
                </div>
              </CardHeader>

              {/* Mobile Horizontal Scroll Tip */}
              <div className="sm:hidden px-3 py-1.5 bg-amber-50 border-b border-amber-200 flex items-center justify-between text-[10px] text-amber-900 font-bold">
                <span>↔️ Swipe horizontally to view full spreadsheet</span>
                <span className="bg-amber-200/80 px-1.5 py-0.5 rounded font-mono">9 Columns</span>
              </div>

              <CardContent className="p-0 w-full min-w-0 max-w-full overflow-hidden">
                <div className="w-full min-w-0 max-w-full overflow-x-auto touch-pan-x overscroll-x-contain scrollbar-thin">
                  <table className="min-w-[700px] w-full text-xs font-sans border-collapse">
                    <thead>
                      <tr className="bg-slate-100/90 text-slate-700 border-b border-slate-200 font-extrabold text-[11px] uppercase tracking-wider">
                        <th className="py-2.5 px-2 text-center w-10">S.No</th>
                        <th className="py-2.5 px-2 text-center w-14" title="🔒 Lock: Fixed Input | 🔓 Auto: Optimizer calculates QTY">
                          <span className="flex items-center justify-center gap-0.5 text-[10px] font-black uppercase text-amber-700">
                            <Lock className="w-3 h-3" /> Lock
                          </span>
                        </th>
                        <th className="py-2.5 px-3 text-left min-w-[150px]">Component / Stream Name</th>
                        <th className="py-2.5 px-3 text-right min-w-[110px]">QTY (L / Kg)</th>
                        <th className="py-2.5 px-2.5 text-right min-w-[85px]">Fat %</th>
                        <th className="py-2.5 px-3 text-right min-w-[95px] bg-amber-50/50 text-amber-900 font-mono">
                          Kg Fat
                        </th>
                        <th className="py-2.5 px-2.5 text-right min-w-[85px]">SNF %</th>
                        <th className="py-2.5 px-3 text-right min-w-[95px] bg-blue-50/50 text-blue-900 font-mono">
                          Kg SNF
                        </th>
                        <th className="py-2.5 px-2.5 text-right min-w-[85px]">CLR</th>
                        <th className="py-2.5 px-2 text-center w-10">Act</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {batchSummary.computedRows.map((row, idx) => {
                        const isRowLocked = Boolean(row.isLocked ?? row.isBase);
                        return (
                          <tr
                            key={`${row.id}-${idx}`}
                            className={cn(
                              "transition-colors",
                              isRowLocked ? "bg-amber-50/50 hover:bg-amber-50/80 font-medium" : "hover:bg-slate-50/80 bg-white"
                            )}
                          >
                            {/* S.No */}
                            <td className="py-2 px-2 text-center font-bold text-slate-500 font-mono text-[11px]">
                              {idx + 1}
                            </td>

                            {/* Lock vs Stream Toggle */}
                            <td className="py-2 px-2 text-center">
                              <button
                                type="button"
                                onClick={() => handleToggleLock(row.id)}
                                title={
                                  isRowLocked
                                    ? "🔒 Locked (Fixed): Optimizer will NEVER change this row"
                                    : "🔓 Unlocked (Auto-Solve): Optimizer will calculate required QTY"
                                }
                                className={cn(
                                  "p-1.5 rounded-lg text-xs font-black transition-all border flex items-center justify-center mx-auto shadow-xs",
                                  isRowLocked
                                    ? "bg-amber-100 border-amber-300 text-amber-900 hover:bg-amber-200"
                                    : "bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                                )}
                              >
                                {isRowLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                              </button>
                            </td>

                            {/* Component Name */}
                            <td className="py-2 px-3 font-bold text-slate-800">
                              <div className="flex items-center gap-1.5">
                                <Input
                                  type="text"
                                  value={row.name}
                                  onChange={(e) => handleUpdateCell(row.id, "name", e.target.value)}
                                  className="h-7 text-xs font-bold border-transparent hover:border-slate-300 focus:border-indigo-500 bg-transparent px-1.5 flex-1 min-w-0"
                                />
                                {isRowLocked ? (
                                  <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 border border-amber-300 shrink-0">
                                    🔒 Fixed
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                                    🔓 Auto
                                  </span>
                                )}
                              </div>
                            </td>

                          {/* QTY */}
                          <td className="py-2 px-3 text-right">
                            <Input
                              type="number"
                              step="any"
                              inputMode="decimal"
                              value={row.qty === 0 ? "" : row.qty}
                              placeholder="0"
                              onFocus={(e) => e.target.select()}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleUpdateCell(row.id, "qty", val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                              }}
                              className="h-7 text-xs font-mono font-black text-right border-slate-200 focus:border-indigo-500 focus:bg-amber-50/60 bg-white px-1.5"
                            />
                          </td>

                          {/* Fat % */}
                          <td className="py-2 px-2.5 text-right">
                            <Input
                              type="number"
                              step="any"
                              inputMode="decimal"
                              value={row.fat === 0 ? "" : row.fat}
                              placeholder="0.00"
                              onFocus={(e) => e.target.select()}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleUpdateCell(row.id, "fat", val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                              }}
                              className="h-7 text-xs font-mono font-bold text-right border-slate-200 focus:border-indigo-500 focus:bg-amber-50/60 bg-white px-1.5"
                            />
                          </td>

                          {/* Kg Fat (Auto Calculated) */}
                          <td className="py-2 px-3 text-right font-mono font-black text-amber-700 bg-amber-50/30 text-xs">
                            {row.kgFat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>

                          {/* SNF % */}
                          <td className="py-2 px-2.5 text-right">
                            <Input
                              type="number"
                              step="any"
                              inputMode="decimal"
                              value={row.snf === 0 ? "" : row.snf}
                              placeholder="0.00"
                              onFocus={(e) => e.target.select()}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleUpdateCell(row.id, "snf", val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                              }}
                              className="h-7 text-xs font-mono font-bold text-right border-slate-200 focus:border-indigo-500 focus:bg-blue-50/60 bg-white px-1.5"
                            />
                          </td>

                          {/* Kg SNF (Auto Calculated) */}
                          <td className="py-2 px-3 text-right font-mono font-black text-blue-700 bg-blue-50/30 text-xs">
                            {row.kgSnf.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>

                          {/* CLR (Auto Calculated or Editable) */}
                          <td className="py-2 px-2.5 text-right">
                            <Input
                              type="number"
                              step="any"
                              inputMode="decimal"
                              value={row.clr}
                              onFocus={(e) => e.target.select()}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleUpdateCell(row.id, "clr", val === "" ? 0 : parseFloat(val) || 0);
                              }}
                              className="h-7 text-xs font-mono font-bold text-right border-slate-200 focus:border-indigo-500 bg-slate-50/80 px-1.5"
                            />
                          </td>

                          {/* Actions */}
                          <td className="py-2 px-2 text-center">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleRemoveRow(row.id)}
                              className="h-7 w-7 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </td>
                        </tr>
                        );
                      })}
                    </tbody>

                    {/* 🏆 GRAND TOTAL ROW */}
                    <tfoot>
                      <tr className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white font-mono font-black text-xs border-t-2 border-amber-400">
                        <td className="py-2.5 px-2 text-center text-amber-400 font-bold">Total</td>
                        <td className="py-2.5 px-2 text-center text-slate-400 text-[10px]">ALL</td>
                        <td className="py-2.5 px-3 text-left font-sans font-black text-amber-300">
                          Grand Total
                        </td>
                        <td className="py-2.5 px-3 text-right text-white font-mono text-xs sm:text-sm">
                          {batchSummary.totalQty.toLocaleString()}
                        </td>
                        <td className="py-2.5 px-2.5 text-right text-amber-300 font-mono text-xs sm:text-sm">
                          {batchSummary.weightedFat}%
                        </td>
                        <td className="py-2.5 px-3 text-right text-amber-400 font-mono text-xs sm:text-sm bg-amber-950/40">
                          {batchSummary.totalKgFat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="py-2.5 px-2.5 text-right text-sky-300 font-mono text-xs sm:text-sm">
                          {batchSummary.weightedSnf}%
                        </td>
                        <td className="py-2.5 px-3 text-right text-sky-400 font-mono text-xs sm:text-sm bg-blue-950/40">
                          {batchSummary.totalKgSnf.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="py-2.5 px-2.5 text-right text-emerald-300 font-mono text-xs sm:text-sm">
                          {batchSummary.weightedClr}
                        </td>
                        <td className="py-2.5 px-2 text-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* VIEW MODE 2: MOBILE TOUCH CARDS VIEW (ZERO HORIZONTAL SCROLL) */
            <div className="space-y-3 w-full min-w-0 max-w-full">
              <div className="flex items-center justify-between px-1 text-xs text-slate-600 font-bold">
                <span>📱 Ingredient Streams ({batchSummary.computedRows.length} Rows)</span>
                <span className="text-amber-700 font-mono">Target: {currentTarget.targetFat}% F / {currentTarget.targetSnf}% S</span>
              </div>

              {batchSummary.computedRows.map((row, idx) => {
                const isRowLocked = Boolean(row.isLocked ?? row.isBase);
                return (
                  <div
                    key={`${row.id}-${idx}`}
                    className={cn(
                      "p-3 rounded-2xl border transition-all shadow-xs space-y-2.5 w-full min-w-0 max-w-full",
                      isRowLocked
                        ? "bg-amber-50/50 border-amber-300 ring-1 ring-amber-300/40"
                        : "bg-white border-slate-200"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold font-mono flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <Input
                          type="text"
                          value={row.name}
                          onChange={(e) => handleUpdateCell(row.id, "name", e.target.value)}
                          className="h-7 text-xs font-black border-transparent hover:border-slate-300 focus:border-indigo-500 bg-transparent px-1 min-w-0"
                        />
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleToggleLock(row.id)}
                          className={cn(
                            "px-2.5 py-1 rounded-lg text-[10px] font-black flex items-center gap-1 border transition-all shadow-xs",
                            isRowLocked
                              ? "bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200"
                              : "bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100"
                          )}
                        >
                          {isRowLocked ? <Lock className="w-3 h-3 text-amber-800" /> : <Unlock className="w-3 h-3 text-emerald-700" />}
                          {isRowLocked ? "🔒 Locked" : "🔓 Auto-Solve"}
                        </button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleRemoveRow(row.id)}
                          className="h-7 w-7 text-slate-400 hover:text-red-500 rounded-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-500 font-bold block mb-0.5">QTY (L/Kg)</label>
                      <Input
                        type="number"
                        step="any"
                        inputMode="decimal"
                        value={row.qty === 0 ? "" : row.qty}
                        placeholder="0"
                        onFocus={(e) => e.target.select()}
                        onChange={(e) => {
                          const val = e.target.value;
                          handleUpdateCell(row.id, "qty", val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                        }}
                        className="h-8 text-xs font-mono font-bold focus:bg-amber-50/60"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-amber-700 font-bold block mb-0.5">Fat %</label>
                      <Input
                        type="number"
                        step="any"
                        inputMode="decimal"
                        value={row.fat === 0 ? "" : row.fat}
                        placeholder="0.00"
                        onFocus={(e) => e.target.select()}
                        onChange={(e) => {
                          const val = e.target.value;
                          handleUpdateCell(row.id, "fat", val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                        }}
                        className="h-8 text-xs font-mono font-bold focus:bg-amber-50/60"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-blue-700 font-bold block mb-0.5">SNF %</label>
                      <Input
                        type="number"
                        step="any"
                        inputMode="decimal"
                        value={row.snf === 0 ? "" : row.snf}
                        placeholder="0.00"
                        onFocus={(e) => e.target.select()}
                        onChange={(e) => {
                          const val = e.target.value;
                          handleUpdateCell(row.id, "snf", val === "" ? 0 : Math.max(0, parseFloat(val) || 0));
                        }}
                        className="h-8 text-xs font-mono font-bold focus:bg-blue-50/60"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px] font-mono">
                    <span className="text-amber-800">Kg Fat: <strong>{row.kgFat} kg</strong></span>
                    <span className="text-blue-800">Kg SNF: <strong>{row.kgSnf} kg</strong></span>
                    <span className="text-emerald-700">CLR: <strong>{row.clr}</strong></span>
                  </div>
                </div>
              );
            })}
            </div>
          )}

          {/* 🏆 MOBILE-RESPONSIVE GRAND TOTAL SUMMARY BLOCK */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md border border-amber-400/40 space-y-2.5 w-full min-w-0 max-w-full">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Grand Batch Total Summary
              </span>
              <Badge className={cn("text-[10px] font-bold", batchSummary.isBatchPerfect ? "bg-emerald-500 text-white" : "bg-amber-500 text-slate-950")}>
                {batchSummary.isBatchPerfect ? "✓ Compliant" : `Dev: ${batchSummary.fatDiff > 0 ? "+" : ""}${batchSummary.fatDiff}% F | ${batchSummary.snfDiff > 0 ? "+" : ""}${batchSummary.snfDiff}% S`}
              </Badge>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-800 text-xs font-mono">
              <div className="bg-slate-800/60 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 font-sans block">Total Batch QTY</span>
                <strong className="text-white text-sm">{batchSummary.totalQty.toLocaleString()} L</strong>
              </div>
              <div className="bg-amber-950/40 p-2 rounded-xl border border-amber-700/30">
                <span className="text-[10px] text-amber-300 font-sans block">Final Fat %</span>
                <strong className="text-amber-400 text-sm">{batchSummary.weightedFat}%</strong>
                <span className="text-[10px] text-amber-200 block">({batchSummary.totalKgFat} kg)</span>
              </div>
              <div className="bg-blue-950/40 p-2 rounded-xl border border-blue-700/30">
                <span className="text-[10px] text-sky-300 font-sans block">Final SNF %</span>
                <strong className="text-sky-300 text-sm">{batchSummary.weightedSnf}%</strong>
                <span className="text-[10px] text-sky-200 block">({batchSummary.totalKgSnf} kg)</span>
              </div>
              <div className="bg-emerald-950/40 p-2 rounded-xl border border-emerald-700/30">
                <span className="text-[10px] text-emerald-300 font-sans block">CLR & Total Solids</span>
                <strong className="text-emerald-300 text-sm">{batchSummary.weightedClr} CLR</strong>
                <span className="text-[10px] text-emerald-200 block">{batchSummary.totalSolidsPct}% TS</span>
              </div>
            </div>
          </div>

          {/* 🎯 DIAGNOSTICS TILES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full min-w-0 max-w-full">
            {/* Card 1: Fat Balance */}
            <Card className="rounded-2xl border-slate-200 shadow-xs bg-white w-full min-w-0 max-w-full">
              <CardHeader className="p-3 bg-amber-50/80 rounded-t-2xl border-b border-amber-100">
                <CardTitle className="text-xs font-black text-amber-950 flex items-center justify-between">
                  <span>Fat Balance</span>
                  <Badge
                    className={cn(
                      "text-[10px] font-bold",
                      batchSummary.isFatMatched
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-600 text-white"
                    )}
                  >
                    {batchSummary.isFatMatched ? "Matched" : `${batchSummary.fatDiff > 0 ? "+" : ""}${batchSummary.fatDiff}%`}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-sans text-[11px]">Batch Fat %:</span>
                  <strong className="text-amber-900 text-xs sm:text-sm">{batchSummary.weightedFat}%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-sans text-[11px]">Target Fat %:</span>
                  <strong className="text-slate-700">{currentTarget.targetFat}%</strong>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <span className="text-slate-500 font-sans text-[11px]">Fat Variance:</span>
                  <strong
                    className={cn(
                      "text-xs",
                      batchSummary.fatVarianceKg > 0
                        ? "text-orange-600"
                        : batchSummary.fatVarianceKg < 0
                        ? "text-red-600"
                        : "text-emerald-600"
                    )}
                  >
                    {batchSummary.fatVarianceKg > 0 ? "+" : ""}
                    {batchSummary.fatVarianceKg} kg Fat
                  </strong>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: SNF Balance */}
            <Card className="rounded-2xl border-slate-200 shadow-xs bg-white w-full min-w-0 max-w-full">
              <CardHeader className="p-3 bg-blue-50/80 rounded-t-2xl border-b border-blue-100">
                <CardTitle className="text-xs font-black text-blue-950 flex items-center justify-between">
                  <span>SNF Balance</span>
                  <Badge
                    className={cn(
                      "text-[10px] font-bold",
                      batchSummary.isSnfMatched
                        ? "bg-emerald-600 text-white"
                        : "bg-blue-600 text-white"
                    )}
                  >
                    {batchSummary.isSnfMatched ? "Matched" : `${batchSummary.snfDiff > 0 ? "+" : ""}${batchSummary.snfDiff}%`}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-sans text-[11px]">Batch SNF %:</span>
                  <strong className="text-blue-900 text-xs sm:text-sm">{batchSummary.weightedSnf}%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-sans text-[11px]">Target SNF %:</span>
                  <strong className="text-slate-700">{currentTarget.targetSnf}%</strong>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <span className="text-slate-500 font-sans text-[11px]">SNF Variance:</span>
                  <strong
                    className={cn(
                      "text-xs",
                      batchSummary.snfVarianceKg > 0
                        ? "text-blue-600"
                        : batchSummary.snfVarianceKg < 0
                        ? "text-red-600"
                        : "text-emerald-600"
                    )}
                  >
                    {batchSummary.snfVarianceKg > 0 ? "+" : ""}
                    {batchSummary.snfVarianceKg} kg SNF
                  </strong>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Total Solids (TS) */}
            <Card className="rounded-2xl border-slate-200 shadow-xs bg-white w-full min-w-0 max-w-full">
              <CardHeader className="p-3 bg-emerald-50/80 rounded-t-2xl border-b border-emerald-100">
                <CardTitle className="text-xs font-black text-emerald-950 flex items-center justify-between">
                  <span>Total Solids (TS)</span>
                  <Badge className="bg-emerald-600 text-white text-[10px]">Composite</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-sans text-[11px]">Total Solids %:</span>
                  <strong className="text-emerald-900 text-xs sm:text-sm">{batchSummary.totalSolidsPct}%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-sans text-[11px]">Total Dry Solids:</span>
                  <strong className="text-slate-700">{batchSummary.totalKgTs.toLocaleString()} kg</strong>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <span className="text-slate-500 font-sans text-[11px]">Corrected CLR:</span>
                  <strong className="text-indigo-600 font-mono text-xs sm:text-sm">{batchSummary.weightedClr}</strong>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Quick Auto-Balance Call-to-Action */}
            <Card className="rounded-2xl border-amber-300 shadow-xs bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col justify-between p-3 w-full min-w-0 max-w-full">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-600 fill-amber-500" />
                  Auto-Balance (Row Locking)
                </span>
                <p className="text-[11px] text-slate-700 leading-snug">
                  🔒 <strong>Locked rows</strong> (Base Milk) remain 100% untouched. 🔓 <strong>Unlocked rows</strong> are auto-filled with required balancing quantities.
                </p>
              </div>
              <Button
                onClick={handleAutoBalanceBatch}
                className="w-full mt-2 h-7 sm:h-8 text-xs font-black bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl shadow-xs gap-1"
              >
                ⚡ Run Automatic Optimizer
              </Button>
            </Card>
          </div>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 2: HAR PROBLEM KA HAL (PLANT SCENARIO ENGINES) */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="scenarios" className="space-y-5 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Scenario A: Dilution with Water (Fat & SNF both High) */}
            <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-sky-900 to-blue-950 text-white">
                <CardTitle className="text-sm font-black flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-sky-400" />
                  Problem 1: Both Fat & SNF Are High (Water Dilution)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600 leading-relaxed">
                  When receiving rich whole milk (e.g. winter milk or mixed buffalo milk) where Fat & SNF exceed standard specifications. Calculate the exact quantity of treated potable water needed to bring the batch to standard volume without wasting solids.
                </p>
                <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200 space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">Current Base Volume:</span>
                    <strong>{batchSummary.baseQty.toLocaleString()} L</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">Current Base Fat / SNF:</span>
                    <strong>{batchSummary.baseFatPct}% F / {batchSummary.baseSnfPct}% SNF</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">Target Product:</span>
                    <strong className="text-sky-800">{currentTarget.name} ({currentTarget.targetFat}% F / {currentTarget.targetSnf}% SNF)</strong>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-sky-200 text-sm">
                    <span className="text-sky-950 font-sans font-bold">Required Water Addition:</span>
                    <strong className="text-sky-900 font-black">
                      {Math.max(
                        0,
                        Math.round(((batchSummary.baseKgFat / currentTarget.targetFat) * 100) - batchSummary.baseQty)
                      ).toLocaleString()} Liters
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario B: High Fat, Low SNF (Skim Milk + SMP Fortification) */}
            <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-amber-900 to-orange-950 text-white">
                <CardTitle className="text-sm font-black flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-400" />
                  Problem 2: Fat High, SNF Low (Skim Milk + SMP Addition)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600 leading-relaxed">
                  Very common during high fat buffalo milk reception. To drop the fat while raising SNF, we need a simultaneous addition of Liquid Skim Milk and high-purity Skimmed Milk Powder (SMP 95%).
                </p>
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">Fat Reduction Needed:</span>
                    <strong className="text-amber-900">
                      {Math.max(0, Number((batchSummary.baseFatPct - currentTarget.targetFat).toFixed(2)))}%
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">SNF Deficit:</span>
                    <strong className="text-amber-900">
                      {Math.max(0, Number((currentTarget.targetSnf - batchSummary.baseSnfPct).toFixed(2)))}%
                    </strong>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-amber-200 text-xs">
                    <span className="text-amber-950 font-sans font-bold">Auto-Balance Solution:</span>
                    <strong className="text-amber-900 font-black">
                      Ready in 1-Click Solver
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario C: Cream Separation (Mechanical Separator Run) */}
            <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-purple-900 to-indigo-950 text-white">
                <CardTitle className="text-sm font-black flex items-center gap-2">
                  <Combine className="w-4 h-4 text-purple-400" />
                  Problem 3: Cream Separation (Physical Fat Removal)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600 leading-relaxed">
                  When you cannot add liquid skim or water due to silo capacity constraints. Run the base milk through a cream separator to bleed off commercial high-fat cream (40%) to standardize the remainder.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-500 font-bold block">Cream Separator Fat %</label>
                    <Input
                      type="number"
                      step="0.5"
                      value={creamSeparationFat}
                      onChange={(e) => setCreamSeparationFat(Number(e.target.value))}
                      className="h-8 text-xs font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 font-bold block">Cream Separator SNF %</label>
                    <Input
                      type="number"
                      step="0.1"
                      value={creamSeparationSnf}
                      onChange={(e) => setCreamSeparationSnf(Number(e.target.value))}
                      className="h-8 text-xs font-mono font-bold"
                    />
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200 space-y-1.5 font-mono">
                  {creamSeparationSummary.canSeparate ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-sans">Cream Separated:</span>
                        <strong className="text-purple-900 text-sm">
                          {creamSeparationSummary.creamYieldLiters.toLocaleString()} Liters ({creamSeparationSummary.creamYieldKg} kg)
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-sans">Standardized Milk Yield:</span>
                        <strong className="text-indigo-900">
                          {creamSeparationSummary.stdMilkRemaining.toLocaleString()} Liters
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-sans">Resulting SNF in Milk:</span>
                        <strong className="text-slate-800">{creamSeparationSummary.resultSnf}%</strong>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-purple-200">
                        <span className="text-purple-950 font-sans font-bold">Est. Cream Sales Revenue:</span>
                        <strong className="text-emerald-700 font-black">
                          ₹{creamSeparationSummary.creamRevenue.toLocaleString()}
                        </strong>
                      </div>
                    </>
                  ) : (
                    <div className="text-amber-800 text-xs font-sans">
                      {creamSeparationSummary.reason}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Scenario D: Fixed Silo / Storage Tank Limit Batching */}
            <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-emerald-900 to-teal-950 text-white">
                <CardTitle className="text-sm font-black flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  Problem 4: Fixed Silo Capacity Constraint (e.g. 15,000 L Tank)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600 leading-relaxed">
                  When your blending silo has a fixed volume limit (e.g. 15,000 L, 20,000 L) and cannot accommodate uncontrolled expansion.
                </p>
                <div>
                  <label className="text-[10px] text-slate-500 font-bold block mb-1">Target Silo Capacity (Liters)</label>
                  <Input
                    type="number"
                    step="500"
                    value={tankCapacity}
                    onChange={(e) => setTankCapacity(Number(e.target.value))}
                    className="h-8 text-xs font-mono font-bold w-full"
                  />
                </div>

                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">Required Finished Volume:</span>
                    <strong>{tankCapacity.toLocaleString()} Liters</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">Target Fat Needed:</span>
                    <strong>{Number(((tankCapacity * currentTarget.targetFat) / 100).toFixed(2))} kg Fat</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-sans">Target SNF Needed:</span>
                    <strong>{Number(((tankCapacity * currentTarget.targetSnf) / 100).toFixed(2))} kg SNF</strong>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-emerald-200 text-xs">
                    <span className="text-emerald-950 font-sans font-bold">Capacity Utilization:</span>
                    <strong className="text-emerald-800">
                      {Math.round((batchSummary.totalQty / tankCapacity) * 100)}% of Silo Full
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 3: ECONOMICS & COMMERCIAL VALUE OPTIMIZER */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="economics" className="space-y-5 pt-2">
          <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
            <CardHeader className="p-4 bg-slate-900 text-white">
              <CardTitle className="text-sm font-black flex items-center gap-2 text-white">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                Raw Material Unit Costing & Batch Profitability Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-5 space-y-4 text-xs">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div>
                  <label className="text-[10px] text-slate-500 font-bold block mb-1">Base Milk (₹ / L)</label>
                  <Input
                    type="number"
                    step="0.5"
                    value={costBaseMilk}
                    onChange={(e) => setCostBaseMilk(Number(e.target.value))}
                    className="h-8 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-bold block mb-1">Skim Milk (₹ / L)</label>
                  <Input
                    type="number"
                    step="0.5"
                    value={costSkimMilk}
                    onChange={(e) => setCostSkimMilk(Number(e.target.value))}
                    className="h-8 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-bold block mb-1">Cream 40% (₹ / kg)</label>
                  <Input
                    type="number"
                    step="5"
                    value={costCream}
                    onChange={(e) => setCostCream(Number(e.target.value))}
                    className="h-8 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-bold block mb-1">SMP Powder (₹ / kg)</label>
                  <Input
                    type="number"
                    step="5"
                    value={costSmp}
                    onChange={(e) => setCostSmp(Number(e.target.value))}
                    className="h-8 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-bold block mb-1">Treated Water (₹ / L)</label>
                  <Input
                    type="number"
                    step="0.05"
                    value={costWater}
                    onChange={(e) => setCostWater(Number(e.target.value))}
                    className="h-8 text-xs font-mono font-bold"
                  />
                </div>
              </div>

              {/* Economic Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Total Batch Production Cost
                  </span>
                  <div className="text-xl font-black text-slate-900 font-mono">
                    ₹{batchSummary.totalCost.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    For {batchSummary.totalQty.toLocaleString()} Liters processed
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Cost per Liter of Finished Milk
                  </span>
                  <div className="text-xl font-black text-emerald-700 font-mono">
                    ₹{batchSummary.costPerLiter} / Liter
                  </div>
                  <span className="text-[11px] text-emerald-600 font-medium">
                    Compliant with FSSAI {currentTarget.name}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                    Solids Giveaway Elimination
                  </span>
                  <div className="text-xl font-black text-amber-700 font-mono">
                    ₹{(Math.abs(batchSummary.fatVarianceKg) * costCream * 0.025).toFixed(0)} Saved / Batch
                  </div>
                  <span className="text-[11px] text-amber-700">
                    By eliminating unnecessary excess fat & SNF giveaway
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 4: STEP-BY-STEP PLANT SOP & AUDIT PROOF */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="audit" className="space-y-5 pt-2">
          <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
            <CardHeader className="p-4 bg-slate-900 text-white">
              <CardTitle className="text-sm font-black flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Dairy Plant Quality Audit & Step-by-Step SOP Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-5 space-y-4 text-xs">
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                    Raw Milk Reception & Base Quality Analysis
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-[11px] pl-7">
                    Base Milk quantity is {batchSummary.baseQty.toLocaleString()} L with weighted average <strong>{batchSummary.baseFatPct}% Fat</strong>, <strong>{batchSummary.baseSnfPct}% SNF</strong>, containing {batchSummary.baseKgFat} kg Fat and {batchSummary.baseKgSnf} kg SNF.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                    Target Standard Alignment Check
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-[11px] pl-7">
                    The requested target product is <strong>{currentTarget.name}</strong>, requiring <strong>{currentTarget.targetFat}% Fat</strong> and <strong>{currentTarget.targetSnf}% SNF</strong>. Expected CLR based on formula ({activeFormula.name}) is <strong>{currentTarget.expectedClr}</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
                    Simultaneous Mass Balance Algebraic Equations
                  </h4>
                  <div className="pl-7 space-y-1 font-mono text-[11px] text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200">
                    <div>Equation 1 (Fat Balance): Σ(Q_i × Fat_i) = Q_total × {currentTarget.targetFat}%</div>
                    <div>Equation 2 (SNF Balance): Σ(Q_i × SNF_i) = Q_total × {currentTarget.targetSnf}%</div>
                    <div className="text-emerald-700 font-bold">
                      Calculated Final Volume = {batchSummary.totalQty.toLocaleString()} Liters | Final TS = {batchSummary.totalSolidsPct}%
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <h4 className="font-extrabold text-emerald-950 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Quality Assurance (QA) Batch Release Certification
                  </h4>
                  <p className="text-emerald-800 leading-relaxed text-[11px] pl-7">
                    Batch composition strictly conforms to FSSAI standards. No fat or SNF legal non-compliance detected. Ready for HTST Pasteurization (72°C / 15 sec) or UHT processing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
