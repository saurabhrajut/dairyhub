"use client";

import React, { useState, useMemo, useCallback, useRef } from "react";
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
  Droplet,
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
  X,
  FlaskConical,
  Beaker,
  IndianRupee,
  Thermometer,
  Box,
  Package,
  RefreshCw,
  BarChart3,
  Percent
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { savePdfFile } from "@/lib/mobile-download";
import { snfFormulas } from "@/lib/data";

// ==========================================
// INTERFACES & DEFINITIONS
// ==========================================

export type StreamRole =
  | "base_milk"
  | "fat_booster"
  | "snf_booster"
  | "sweetener"
  | "stabilizer"
  | "diluent"
  | "flavor";

export interface MultiSolidsRow {
  id: string;
  name: string;
  role: StreamRole;
  qty: number; // in kg or Liters based on batch unit
  fat: number; // % Fat
  snf: number; // % SNF (Milk Solids Not Fat)
  sugar: number; // % Sugar / Sweetener
  stabilizer: number; // % Stabilizer / Emulsifier
  ts: number; // Total Solids %
  clr: number; // Corrected Lactometer Reading
  acidity: number; // % Lactic Acid
  costRate: number; // ₹ per unit (kg or L)
  isLocked?: boolean; // If true, optimizer will NOT touch this stream
  isBase?: boolean; // Marked as primary base volume
}

export interface ProductPreset {
  id: string;
  name: string;
  category: string;
  targetFat: number;
  targetSnf: number;
  targetSugar: number;
  targetAdditives: number;
  targetAcidity?: number;
  defaultDensity?: number;
  description: string;
  processNotes?: string;
}

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
  isi: {
    id: "isi",
    name: "ISI / BIS Official (0.25×F + 0.44)",
    formulaText: "SNF% = (CLR/4) + (0.25 * Fat) + 0.44",
    getClr: (fat, snf) => Number((4 * (snf - 0.25 * fat - 0.44)).toFixed(2)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.25 * fat + 0.44).toFixed(2))
  },
  richmond: {
    id: "richmond",
    name: "Richmond's Formula (0.21×F + 0.36)",
    formulaText: "SNF% = (CLR/4) + (0.21 * Fat) + 0.36",
    getClr: (fat, snf) => Number((4 * (snf - 0.21 * fat - 0.36)).toFixed(2)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.21 * fat + 0.36).toFixed(2))
  },
  plant_special: {
    id: "plant_special",
    name: "Plant Special (0.20×F + 0.29)",
    formulaText: "SNF% = (CLR/4) + (0.20 * Fat) + 0.29",
    getClr: (fat, snf) => Number((4 * (snf - 0.20 * fat - 0.29)).toFixed(2)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.20 * fat + 0.29).toFixed(2))
  },
  cooperative: {
    id: "cooperative",
    name: "Modified Cooperative (0.25×F + 0.14)",
    formulaText: "SNF% = (CLR/4) + (0.25 * Fat) + 0.14",
    getClr: (fat, snf) => Number((4 * (snf - 0.25 * fat - 0.14)).toFixed(2)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.25 * fat + 0.14).toFixed(2))
  },
  punjab_haryana: {
    id: "punjab_haryana",
    name: "Punjab / Haryana (0.22×F + 0.36)",
    formulaText: "SNF% = (CLR/4) + (0.22 * Fat) + 0.36",
    getClr: (fat, snf) => Number((4 * (snf - 0.22 * fat - 0.36)).toFixed(2)),
    getSnf: (fat, clr) => Number(((clr / 4) + 0.22 * fat + 0.36).toFixed(2))
  }
};

// PRESET PRODUCT RECIPES (FSSAI & INDUSTRY STANDARDS)
export const PRODUCT_PRESETS: ProductPreset[] = [
  {
    id: "sweet-curd",
    name: "Sweet Curd (Mishti Doi)",
    category: "Fermented Products",
    targetFat: 3.5,
    targetSnf: 9.5,
    targetSugar: 12.0,
    targetAdditives: 0.0,
    targetAcidity: 0.15,
    defaultDensity: 1.065,
    description: "Standard formulation for rich Sweet Curd / Mishti Doi (TS ~ 25.0%)",
    processNotes: "Pasteurize at 85°C for 20 mins to denature whey proteins. Inoculate with DVS curd culture at 42°C."
  },
  {
    id: "sweet-lassi",
    name: "Commercial Sweet Lassi",
    category: "Fermented Drinks",
    targetFat: 2.5,
    targetSnf: 8.5,
    targetSugar: 10.0,
    targetAdditives: 0.2,
    targetAcidity: 0.14,
    defaultDensity: 1.055,
    description: "Refreshing Lassi formulation with standard viscosity and sweetness (TS ~ 21.2%)",
    processNotes: "Blend dahi with sugar syrup. Homogenize at 100 bar to prevent phase separation."
  },
  {
    id: "flavored-milk",
    name: "Flavored Milk (Chocolate/Elaichi)",
    category: "Beverages",
    targetFat: 1.5,
    targetSnf: 8.5,
    targetSugar: 8.0,
    targetAdditives: 1.0,
    targetAcidity: 0.13,
    defaultDensity: 1.050,
    description: "Double Toned Flavored Milk formulation with added cocoa/stabilizer (TS ~ 19.0%)",
    processNotes: "Dry blend cocoa powder and carrageenan with 2x sugar before dispersing in warm milk."
  },
  {
    id: "ice-cream-mix",
    name: "Premium Ice Cream Mix (10% Fat)",
    category: "Frozen Desserts",
    targetFat: 10.0,
    targetSnf: 11.0,
    targetSugar: 14.0,
    targetAdditives: 0.5,
    targetAcidity: 0.14,
    defaultDensity: 1.095,
    description: "Balanced Ice Cream mix formulation with high overrun potential (TS ~ 35.5%)",
    processNotes: "Homogenize 2-stage (180 bar / 35 bar) at 68°C. Age mix at 4°C for 4-12 hours before freezing."
  },
  {
    id: "comm-ice-cream",
    name: "Commercial Ice Cream (12% Fat)",
    category: "Frozen Desserts",
    targetFat: 12.0,
    targetSnf: 10.5,
    targetSugar: 14.5,
    targetAdditives: 0.5,
    targetAcidity: 0.14,
    defaultDensity: 1.100,
    description: "Rich, scoopable commercial ice cream formulation (TS ~ 37.5%)",
    processNotes: "High serum solids provide body; dry-blend stabilizers to eliminate icy texture."
  },
  {
    id: "kulfi-mix",
    name: "Traditional Kulfi / Rabdi Mix",
    category: "Traditional Desserts",
    targetFat: 8.0,
    targetSnf: 12.0,
    targetSugar: 12.0,
    targetAdditives: 0.5,
    targetAcidity: 0.15,
    defaultDensity: 1.085,
    description: "Dense, creamy Indian Kulfi formulation with caramelized flavor (TS ~ 32.5%)",
    processNotes: "Slow simmer with cardamom/saffron. No overrun required (0% overrun)."
  },
  {
    id: "high-protein-dahi",
    name: "High-Protein / Greek Dahi Base",
    category: "Health & Nutrition",
    targetFat: 3.0,
    targetSnf: 12.5,
    targetSugar: 0.0,
    targetAdditives: 0.0,
    targetAcidity: 0.16,
    defaultDensity: 1.050,
    description: "Fortified thick yogurt base with SMP / milk protein (TS ~ 15.5%)",
    processNotes: "High protein requires gentle agitation during hydration to prevent micro-clumping."
  },
  {
    id: "sweetened-condensed",
    name: "Sweetened Condensed Milk Base",
    category: "Concentrated Products",
    targetFat: 9.0,
    targetSnf: 22.0,
    targetSugar: 44.0,
    targetAdditives: 0.0,
    targetAcidity: 0.16,
    defaultDensity: 1.300,
    description: "High solids condensed milk mix formulation (Total Solids ~ 75.0%)",
    processNotes: "Seed lactose crystals at 30°C with vigorous stirring to prevent sandiness."
  },
  {
    id: "paneer-milk",
    name: "Paneer Processing Milk (5.8/9.0)",
    category: "Cheese & Coagulated",
    targetFat: 5.8,
    targetSnf: 9.0,
    targetSugar: 0.0,
    targetAdditives: 0.0,
    targetAcidity: 0.14,
    defaultDensity: 1.031,
    description: "Optimized fat-to-SNF ratio for high yield, soft malai paneer (TS ~ 14.8%)",
    processNotes: "Coagulate at 82-85°C with 1-2% citric acid solution for maximum moisture retention."
  }
];

// DEFAULT ROWS FOR SPREADSHEET
const DEFAULT_ROWS: MultiSolidsRow[] = [
  {
    id: "row-1",
    name: "Base Liquid Milk",
    role: "base_milk",
    qty: 740,
    fat: 4.0,
    snf: 8.5,
    sugar: 0.0,
    stabilizer: 0.0,
    ts: 12.5,
    clr: 28.0,
    acidity: 0.14,
    costRate: 36.0,
    isLocked: false,
    isBase: true
  },
  {
    id: "row-2",
    name: "Fresh Cream (40% Fat)",
    role: "fat_booster",
    qty: 0,
    fat: 40.0,
    snf: 5.4,
    sugar: 0.0,
    stabilizer: 0.0,
    ts: 45.4,
    clr: -11.5,
    acidity: 0.12,
    costRate: 260.0,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-3",
    name: "SMP (Skimmed Milk Powder)",
    role: "snf_booster",
    qty: 0,
    fat: 1.0,
    snf: 96.0,
    sugar: 0.0,
    stabilizer: 0.0,
    ts: 97.0,
    clr: 378.0,
    acidity: 0.14,
    costRate: 310.0,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-4",
    name: "White Sugar (Sucrose)",
    role: "sweetener",
    qty: 0,
    fat: 0.0,
    snf: 0.0,
    sugar: 100.0,
    stabilizer: 0.0,
    ts: 100.0,
    clr: 0.0,
    acidity: 0.0,
    costRate: 42.0,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-5",
    name: "Stabilizer / Emulsifier Blend",
    role: "stabilizer",
    qty: 0,
    fat: 0.0,
    snf: 0.0,
    sugar: 0.0,
    stabilizer: 100.0,
    ts: 100.0,
    clr: 0.0,
    acidity: 0.0,
    costRate: 280.0,
    isLocked: false,
    isBase: false
  },
  {
    id: "row-6",
    name: "RO Make-up Water",
    role: "diluent",
    qty: 0,
    fat: 0.0,
    snf: 0.0,
    sugar: 0.0,
    stabilizer: 0.0,
    ts: 0.0,
    clr: -1.16,
    acidity: 0.0,
    costRate: 0.2,
    isLocked: false,
    isBase: false
  }
];

export function AdvancedStandardizationCalc() {
  const { toast } = useToast();
  const printAreaRef = useRef<HTMLDivElement>(null);

  // Active Tab: matrix | scenarios | economics | audit
  const [activeTab, setActiveTab] = useState<string>("matrix");

  // Settings drawer state
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Active Formula
  const [selectedFormulaKey, setSelectedFormulaKey] = useState<FormulaId>("isi");
  const [formulaFatFactor, setFormulaFatFactor] = useState<number>(0.25);
  const [formulaConstant, setFormulaConstant] = useState<number>(0.44);

  // Active Preset & Target specs
  const [selectedPresetId, setSelectedPresetId] = useState<string>("sweet-curd");
  const [targetBatchVolume, setTargetBatchVolume] = useState<number>(1000);
  const [targetUnit, setTargetUnit] = useState<"liters" | "kg">("liters");
  const [customDensity, setCustomDensity] = useState<number>(1.065);
  const [autoDensity, setAutoDensity] = useState<boolean>(true);

  // Target composition (%)
  const [targetFat, setTargetFat] = useState<number>(3.5);
  const [targetSnf, setTargetSnf] = useState<number>(9.5);
  const [targetSugar, setTargetSugar] = useState<number>(12.0);
  const [targetStabilizer, setTargetStabilizer] = useState<number>(0.0);
  const [targetAcidity, setTargetAcidity] = useState<number>(0.15);

  // View Mode: Excel Spreadsheet Table vs Mobile Touch Cards
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Scenario 5 Solver State (Acidity Neutralization & Sour Mix Stabilization)
  const [scenario5Volume, setScenario5Volume] = useState<number>(1000);
  const [scenario5InitialAcidity, setScenario5InitialAcidity] = useState<number>(0.18);
  const [scenario5TargetAcidity, setScenario5TargetAcidity] = useState<number>(0.14);
  const [scenario5Neutralizer, setScenario5Neutralizer] = useState<"nahco3" | "na2co3" | "naoh">("nahco3");

  // Rows state for Master Spreadsheet
  const [rows, setRows] = useState<MultiSolidsRow[]>(DEFAULT_ROWS);

  // Optimizer solver state
  const [optimizerResult, setOptimizerResult] = useState<{
    timestamp: number;
    status: "exact" | "partial" | "optimal";
    title: string;
    explanation: string;
    finalQty: number;
    finalFat: number;
    finalSnf: number;
    finalSugar: number;
    finalStab: number;
    finalTs: number;
    fatDiff: number;
    snfDiff: number;
    sugarDiff: number;
    stabDiff: number;
    tsDiff: number;
    isExact: boolean;
    allocations: {
      id: string;
      name: string;
      qty: number;
      ts: number;
    }[];
  } | null>(null);

  // Economics Margin & Cost Overheads state
  const [processingOverheadPerUnit, setProcessingOverheadPerUnit] = useState<number>(1.5); // ₹/L or kg
  const [packagingUnitCost, setPackagingUnitCost] = useState<number>(2.0); // ₹ per cup/pouch
  const [packagingUnitSize, setPackagingUnitSize] = useState<number>(0.2); // 200g or 200ml
  const [targetGrossMarginPct, setTargetGrossMarginPct] = useState<number>(30); // 30% margin
  const [retailMarkupPct, setRetailMarkupPct] = useState<number>(25); // 25% retail markup

  // QA Interactive Checklist state
  const [qaChecks, setQaChecks] = useState<{ [key: string]: boolean }>({
    rawMilkTemp: true,
    fatSnfVerified: true,
    sugarDissolution: true,
    homoPressure: true,
    pasteurTemp: true,
    microOrganoTest: false,
    packagingSeal: false
  });

  // Export & PDF loading state
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // ─────────────────────────────────────────────
  // ACTIVE FORMULA RESOLVER
  // ─────────────────────────────────────────────
  const activeFormula = useMemo(() => {
    const a = Number(formulaFatFactor) || 0.25;
    const b = Number(formulaConstant) || 0.44;
    return {
      id: selectedFormulaKey,
      name: FORMULA_SPECS[selectedFormulaKey]?.name || `Custom (${a}×F + ${b})`,
      formulaText: `SNF% = (CLR / 4) + (${a} × Fat) + ${b}`,
      getClr: (f: number, s: number) => Number((4 * (s - a * f - b)).toFixed(2)),
      getSnf: (f: number, c: number) => Number(((c / 4) + a * f + b).toFixed(2)),
      a,
      b
    };
  }, [selectedFormulaKey, formulaFatFactor, formulaConstant]);

  // Handle Preset Selection
  const handleSelectPreset = useCallback((presetId: string) => {
    setSelectedPresetId(presetId);
    const p = PRODUCT_PRESETS.find((item) => item.id === presetId);
    if (!p) return;

    setTargetFat(p.targetFat);
    setTargetSnf(p.targetSnf);
    setTargetSugar(p.targetSugar);
    setTargetStabilizer(p.targetAdditives);
    if (p.targetAcidity !== undefined) setTargetAcidity(p.targetAcidity);
    if (p.defaultDensity !== undefined) setCustomDensity(p.defaultDensity);

    setOptimizerResult(null);
    toast({
      title: `Loaded ${p.name} 🧁`,
      description: `Target specs loaded: Fat ${p.targetFat}%, SNF ${p.targetSnf}%, Sugar ${p.targetSugar}%, TS ${(p.targetFat + p.targetSnf + p.targetSugar + p.targetAdditives).toFixed(1)}%`
    });
  }, [toast]);

  // ─────────────────────────────────────────────
  // AUTO DENSITY & TARGET WEIGHT CALCULATION
  // ─────────────────────────────────────────────
  // Finished mix density formula based on standard dairy solids:
  // Density = 100 / [ (Fat/0.93) + (SNF/1.60) + (Sugar/1.62) + (Stab/1.50) + (Water/1.00) ]
  const targetTsSum = useMemo(() => {
    return Number((targetFat + targetSnf + targetSugar + targetStabilizer).toFixed(2));
  }, [targetFat, targetSnf, targetSugar, targetStabilizer]);

  const effectiveDensity = useMemo(() => {
    if (!autoDensity) return customDensity > 0 ? customDensity : 1.055;
    const waterPct = Math.max(0, 100 - targetTsSum);
    const denom =
      (targetFat / 0.93) +
      (targetSnf / 1.60) +
      (targetSugar / 1.62) +
      (targetStabilizer / 1.50) +
      (waterPct / 1.00);
    if (denom <= 0) return 1.055;
    return Number((100 / denom).toFixed(3));
  }, [autoDensity, customDensity, targetFat, targetSnf, targetSugar, targetStabilizer, targetTsSum]);

  const targetWeightKg = useMemo(() => {
    const vol = Number(targetBatchVolume) || 0;
    return targetUnit === "liters" ? Number((vol * effectiveDensity).toFixed(2)) : vol;
  }, [targetBatchVolume, targetUnit, effectiveDensity]);

  // ─────────────────────────────────────────────
  // LIVE COMPUTED BATCH SUMMARY & SPREADSHEET ROWS
  // ─────────────────────────────────────────────
  const batchSummary = useMemo(() => {
    let totalQty = 0;
    let totalKgFat = 0;
    let totalKgSnf = 0;
    let totalKgSugar = 0;
    let totalKgStabilizer = 0;
    let totalKgTs = 0;
    let totalKgAcidity = 0;
    let totalBatchCost = 0;

    const totalBatchMassKg = targetUnit === "liters"
      ? Number((totalQty * effectiveDensity).toFixed(2))
      : totalQty;

    const computedRows = rows.map((r) => {
      const q = Number(r.qty) || 0;
      const f = Number(r.fat) || 0;
      const s = Number(r.snf) || 0;
      const sug = Number(r.sugar) || 0;
      const stab = Number(r.stabilizer) || 0;
      const acid = Number(r.acidity) || 0;
      const rate = Number(r.costRate) || 0;

      // Row TS is sum of all solids
      const rowTs = Number((f + s + sug + stab).toFixed(2));
      const rowMassKg = targetUnit === "liters"
        ? (r.role === "base_milk" || r.role === "fat_booster" || r.role === "diluent" ? q * effectiveDensity : q)
        : q;

      const kgFat = Number(((q * f) / 100).toFixed(3));
      const kgSnf = Number(((q * s) / 100).toFixed(3));
      const kgSugar = Number(((q * sug) / 100).toFixed(3));
      const kgStabilizer = Number(((q * stab) / 100).toFixed(3));
      const kgTs = Number(((q * rowTs) / 100).toFixed(3));
      const kgAcidity = Number(((rowMassKg * acid) / 100).toFixed(4));
      const rowCost = Number((q * rate).toFixed(2));

      totalQty += q;
      totalKgFat += kgFat;
      totalKgSnf += kgSnf;
      totalKgSugar += kgSugar;
      totalKgStabilizer += kgStabilizer;
      totalKgTs += kgTs;
      totalKgAcidity += kgAcidity;
      totalBatchCost += rowCost;

      return {
        ...r,
        ts: rowTs,
        kgFat,
        kgSnf,
        kgSugar,
        kgStabilizer,
        kgTs,
        kgAcidity,
        rowCost
      };
    });

    const weightedFat = totalQty > 0 ? Number(((totalKgFat / totalQty) * 100).toFixed(2)) : 0;
    const weightedSnf = totalQty > 0 ? Number(((totalKgSnf / totalQty) * 100).toFixed(2)) : 0;
    const weightedSugar = totalQty > 0 ? Number(((totalKgSugar / totalQty) * 100).toFixed(2)) : 0;
    const weightedStabilizer = totalQty > 0 ? Number(((totalKgStabilizer / totalQty) * 100).toFixed(2)) : 0;
    const weightedTs = totalQty > 0 ? Number(((totalKgTs / totalQty) * 100).toFixed(2)) : 0;
    const weightedAcidity = totalBatchMassKg > 0 ? Number(((totalKgAcidity / totalBatchMassKg) * 100).toFixed(3)) : 0;
    const weightedClr = activeFormula.getClr(weightedFat, weightedSnf);

    // Variances vs Target
    const fatDiff = Number((weightedFat - targetFat).toFixed(2));
    const snfDiff = Number((weightedSnf - targetSnf).toFixed(2));
    const sugarDiff = Number((weightedSugar - targetSugar).toFixed(2));
    const stabDiff = Number((weightedStabilizer - targetStabilizer).toFixed(2));
    const tsDiff = Number((weightedTs - targetTsSum).toFixed(2));
    const acidityDiff = Number((weightedAcidity - targetAcidity).toFixed(3));

    const isFatMatched = Math.abs(fatDiff) <= 0.05;
    const isSnfMatched = Math.abs(snfDiff) <= 0.05;
    const isSugarMatched = Math.abs(sugarDiff) <= 0.05;
    const isStabMatched = Math.abs(stabDiff) <= 0.02;
    const isTsMatched = Math.abs(tsDiff) <= 0.1;
    const isBatchCompliant = isFatMatched && isSnfMatched && isSugarMatched && isTsMatched;

    // Costing
    const costPerKg = totalQty > 0 ? Number((totalBatchCost / (targetUnit === "kg" ? totalQty : totalBatchMassKg)).toFixed(2)) : 0;
    const costPerLiter = effectiveDensity > 0 ? Number((costPerKg * effectiveDensity).toFixed(2)) : costPerKg;

    // Excess acidity check & stoichiometric chemical neutralizers
    const isAcidityHigh = acidityDiff > 0.005;
    const isAcidityNormal = Math.abs(acidityDiff) <= 0.005;
    const isAcidityCompliant = weightedAcidity <= targetAcidity + 0.005;

    // Excess lactic acid mass
    const totalExcessLacticAcidKg = Math.max(0, Number(((acidityDiff / 100) * totalBatchMassKg).toFixed(4)));
    const totalExcessLacticAcidGrams = Number((totalExcessLacticAcidKg * 1000).toFixed(1));

    // 1. Baking Soda (NaHCO3, MW 84.01 / LA 90.08 = 0.9326)
    const gramsNaHCO3 = Number((totalExcessLacticAcidGrams * 0.9326).toFixed(1));
    const kgNaHCO3 = Number((gramsNaHCO3 / 1000).toFixed(3));

    // 2. Soda Ash (Na2CO3, MW 105.99 / (2 * 90.08) = 0.5883)
    const gramsNa2CO3 = Number((totalExcessLacticAcidGrams * 0.5883).toFixed(1));
    const kgNa2CO3 = Number((gramsNa2CO3 / 1000).toFixed(3));

    // 3. Caustic Soda (NaOH, MW 40.00 / 90.08 = 0.4441)
    const gramsNaOH = Number((totalExcessLacticAcidGrams * 0.4441).toFixed(1));
    const kgNaOH = Number((gramsNaOH / 1000).toFixed(3));

    return {
      computedRows,
      totalQty: Number(totalQty.toFixed(2)),
      totalBatchMassKg,
      totalKgFat: Number(totalKgFat.toFixed(2)),
      totalKgSnf: Number(totalKgSnf.toFixed(2)),
      totalKgSugar: Number(totalKgSugar.toFixed(2)),
      totalKgStabilizer: Number(totalKgStabilizer.toFixed(2)),
      totalKgTs: Number(totalKgTs.toFixed(2)),
      totalKgAcidity: Number(totalKgAcidity.toFixed(3)),
      totalBatchCost: Number(totalBatchCost.toFixed(2)),
      costPerKg,
      costPerLiter,
      weightedFat,
      weightedSnf,
      weightedSugar,
      weightedStabilizer,
      weightedTs,
      weightedAcidity,
      weightedClr,
      fatDiff,
      snfDiff,
      sugarDiff,
      stabDiff,
      tsDiff,
      acidityDiff,
      isFatMatched,
      isSnfMatched,
      isSugarMatched,
      isStabMatched,
      isTsMatched,
      isBatchCompliant,
      isAcidityHigh,
      isAcidityNormal,
      isAcidityCompliant,
      totalExcessLacticAcidKg,
      totalExcessLacticAcidGrams,
      gramsNaHCO3,
      kgNaHCO3,
      gramsNa2CO3,
      kgNa2CO3,
      gramsNaOH,
      kgNaOH,
      gramsBakingSoda: gramsNaHCO3
    };
  }, [
    rows,
    targetFat,
    targetSnf,
    targetSugar,
    targetStabilizer,
    targetAcidity,
    targetTsSum,
    activeFormula,
    effectiveDensity,
    targetUnit
  ]);

  // ─────────────────────────────────────────────
  // CELL EDIT & SPREADSHEET ACTIONS
  // ─────────────────────────────────────────────
  const handleUpdateCell = useCallback(
    (id: string, field: keyof MultiSolidsRow, value: any) => {
      setRows((prev) =>
        prev.map((r) => {
          if (r.id !== id) return r;
          const updated = { ...r, [field]: value };

          // Auto-recalculate CLR or SNF
          if (field === "fat" || field === "snf") {
            const f = field === "fat" ? Number(value) : r.fat;
            const s = field === "snf" ? Number(value) : r.snf;
            updated.clr = activeFormula.getClr(f, s);
            updated.ts = Number((f + s + (r.sugar || 0) + (r.stabilizer || 0)).toFixed(2));
          } else if (field === "sugar" || field === "stabilizer") {
            const sug = field === "sugar" ? Number(value) : r.sugar;
            const stab = field === "stabilizer" ? Number(value) : r.stabilizer;
            updated.ts = Number((r.fat + r.snf + sug + stab).toFixed(2));
          } else if (field === "clr") {
            const c = Number(value);
            updated.snf = activeFormula.getSnf(r.fat, c);
            updated.ts = Number((r.fat + updated.snf + (r.sugar || 0) + (r.stabilizer || 0)).toFixed(2));
          }

          return updated;
        })
      );
    },
    [activeFormula]
  );

  const handleToggleLock = useCallback((id: string) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const nextLock = !r.isLocked;
        return { ...r, isLocked: nextLock };
      })
    );
  }, []);

  const handleToggleBase = useCallback((id: string) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          return { ...r, isBase: !r.isBase };
        }
        return r;
      })
    );
  }, []);

  const handleRemoveRow = useCallback(
    (id: string) => {
      if (rows.length <= 1) {
        toast({
          title: "Cannot Delete Row",
          description: "At least one ingredient stream must remain in the batch spreadsheet.",
          variant: "destructive"
        });
        return;
      }
      setRows((prev) => prev.filter((r) => r.id !== id));
    },
    [rows.length, toast]
  );

  const handleAddRow = useCallback(() => {
    const newId = `row-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const newRow: MultiSolidsRow = {
      id: newId,
      name: `Custom Stream ${rows.length + 1}`,
      role: "base_milk",
      qty: 0,
      fat: 0,
      snf: 0,
      sugar: 0,
      stabilizer: 0,
      ts: 0,
      clr: activeFormula.getClr(0, 0),
      acidity: 0.14,
      costRate: 0,
      isLocked: false,
      isBase: false
    };
    setRows((prev) => [...prev, newRow]);
    toast({
      title: "Stream Added ➕",
      description: `New ingredient row ${rows.length + 1} added.`
    });
  }, [rows.length, activeFormula, toast]);

  const handleAddPresetStream = useCallback(
    (
      presetName: string,
      role: StreamRole,
      fat: number,
      snf: number,
      sugar: number = 0,
      stabilizer: number = 0,
      costRate: number = 0,
      acidity: number = 0.14
    ) => {
      const newId = `row-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
      const clr = activeFormula.getClr(fat, snf);
      const ts = Number((fat + snf + sugar + stabilizer).toFixed(2));
      const newRow: MultiSolidsRow = {
        id: newId,
        name: presetName,
        role,
        qty: 0,
        fat,
        snf,
        sugar,
        stabilizer,
        ts,
        clr,
        acidity,
        costRate,
        isLocked: false,
        isBase: false
      };
      setRows((prev) => [...prev, newRow]);
      toast({
        title: `${presetName} Added 📦`,
        description: `Stream added with ${ts}% Total Solids.`
      });
    },
    [activeFormula, toast]
  );

  const handleZeroAllAdditions = useCallback(() => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.isLocked || r.isBase) return r;
        return { ...r, qty: 0 };
      })
    );
    setOptimizerResult(null);
    toast({
      title: "Additions Zeroed 🧹",
      description: "All unlocked streams have been reset to 0 quantity."
    });
  }, [toast]);

  const handleResetToDefault = useCallback(() => {
    setRows(DEFAULT_ROWS);
    handleSelectPreset("sweet-curd");
    setOptimizerResult(null);
    toast({
      title: "Default Template Restored 🔄",
      description: "Sweet Curd formulation with standard 6 streams restored."
    });
  }, [handleSelectPreset, toast]);

  // ─────────────────────────────────────────────
  // ⚡ 1-CLICK MULTI-SOLIDS MASS BALANCE SOLVER
  // ─────────────────────────────────────────────
  const handleAutoSolveBatch = useCallback(() => {
    const W = targetWeightKg;
    if (W <= 0) {
      toast({
        title: "Target Batch Size Required",
        description: "Please specify target batch quantity greater than 0.",
        variant: "destructive"
      });
      return;
    }

    // 1. Calculate Required Solids Mass (kg)
    const reqFatKg = (W * targetFat) / 100;
    const reqSnfKg = (W * targetSnf) / 100;
    const reqSugarKg = (W * targetSugar) / 100;
    const reqStabKg = (W * targetStabilizer) / 100;

    // 2. Identify Locked vs Unlocked streams
    const lockedRows = rows.filter((r) => r.isLocked);
    let lockedQty = 0;
    let lockedFatKg = 0;
    let lockedSnfKg = 0;
    let lockedSugarKg = 0;
    let lockedStabKg = 0;

    lockedRows.forEach((r) => {
      const q = r.qty || 0;
      lockedQty += q;
      lockedFatKg += (q * r.fat) / 100;
      lockedSnfKg += (q * r.snf) / 100;
      lockedSugarKg += (q * r.sugar) / 100;
      lockedStabKg += (q * r.stabilizer) / 100;
    });

    const netWeightRemaining = Math.max(0, W - lockedQty);
    const deficitFatKg = Math.max(0, reqFatKg - lockedFatKg);
    const deficitSnfKg = Math.max(0, reqSnfKg - lockedSnfKg);
    const deficitSugarKg = Math.max(0, reqSugarKg - lockedSugarKg);
    const deficitStabKg = Math.max(0, reqStabKg - lockedStabKg);

    // 3. Find Unlocked Candidate Streams
    const unlockedRows = rows.filter((r) => !r.isLocked);

    // Find Sugar row (highest sugar content)
    const sugarRow = unlockedRows.find(
      (r) => r.sugar >= 90 || r.role === "sweetener" || r.name.toLowerCase().includes("sugar")
    );
    // Find Stabilizer row
    const stabRow = unlockedRows.find(
      (r) => r.stabilizer >= 50 || r.role === "stabilizer" || r.name.toLowerCase().includes("stab")
    );
    // Find Fat booster (Cream / Butteroil)
    const creamRow = unlockedRows.find(
      (r) => r.fat >= 25 || r.role === "fat_booster" || r.name.toLowerCase().includes("cream")
    );
    // Find SNF booster (SMP / WMP)
    const smpRow = unlockedRows.find(
      (r) => r.snf >= 70 || r.role === "snf_booster" || r.name.toLowerCase().includes("smp")
    );
    // Find Base Liquid Milk row
    const baseMilkRow = unlockedRows.find(
      (r) =>
        r.isBase ||
        r.role === "base_milk" ||
        (r !== sugarRow && r !== stabRow && r !== creamRow && r !== smpRow && r.fat < 10 && r.snf < 15 && !r.name.toLowerCase().includes("water"))
    );
    // Find Water row
    const waterRow = unlockedRows.find(
      (r) => r.role === "diluent" || r.name.toLowerCase().includes("water")
    );

    // 4. Solve dry solids first
    let sugarAllocated = 0;
    if (sugarRow && deficitSugarKg > 0) {
      const sugarPct = sugarRow.sugar || 100;
      sugarAllocated = Number(((deficitSugarKg * 100) / sugarPct).toFixed(2));
    }

    let stabAllocated = 0;
    if (stabRow && deficitStabKg > 0) {
      const stabPct = stabRow.stabilizer || 100;
      stabAllocated = Number(((deficitStabKg * 100) / stabPct).toFixed(2));
    }

    // Remaining liquid space
    const liquidWeightNeeded = Math.max(0, netWeightRemaining - sugarAllocated - stabAllocated);

    // Base Milk Specs
    const bFat = baseMilkRow ? baseMilkRow.fat : 4.0;
    const bSnf = baseMilkRow ? baseMilkRow.snf : 8.5;

    // Fat Booster Specs
    const cFat = creamRow ? creamRow.fat : 40.0;
    const cSnf = creamRow ? creamRow.snf : 5.4;

    // SNF Booster Specs
    const sSnf = smpRow ? smpRow.snf : 96.0;
    const sFat = smpRow ? smpRow.fat : 1.0;

    // Fat & SNF delivered by base liquid milk if it occupied the full liquid weight
    const baseFatDelivered = (liquidWeightNeeded * bFat) / 100;
    const baseSnfDelivered = (liquidWeightNeeded * bSnf) / 100;

    const fatGap = deficitFatKg - baseFatDelivered;
    const snfGap = deficitSnfKg - baseSnfDelivered;

    let creamAllocated = 0;
    let smpAllocated = 0;
    let baseMilkAllocated = 0;
    let waterAllocated = 0;

    if (creamRow && fatGap > 0) {
      const denomF = (cFat - bFat) / 100;
      if (denomF > 0) creamAllocated = Number((fatGap / denomF).toFixed(2));
    }

    if (smpRow && snfGap > 0) {
      const denomS = (sSnf - bSnf) / 100;
      if (denomS > 0) smpAllocated = Number((snfGap / denomS).toFixed(2));
    }

    baseMilkAllocated = Math.max(0, liquidWeightNeeded - creamAllocated - smpAllocated);

    // If liquidWeightNeeded exceeds base milk + adjusters, fill with water if water row exists
    const currentSum =
      lockedQty + sugarAllocated + stabAllocated + creamAllocated + smpAllocated + baseMilkAllocated;
    if (waterRow && currentSum < W) {
      waterAllocated = Number((W - currentSum).toFixed(2));
    }

    // 5. Update rows with new allocated quantities
    const newAllocations: { id: string; name: string; qty: number; ts: number }[] = [];

    const updatedRows = rows.map((r) => {
      if (r.isLocked) return r;

      let alloc = 0;
      if (sugarRow && r.id === sugarRow.id) alloc = sugarAllocated;
      else if (stabRow && r.id === stabRow.id) alloc = stabAllocated;
      else if (creamRow && r.id === creamRow.id) alloc = creamAllocated;
      else if (smpRow && r.id === smpRow.id) alloc = smpAllocated;
      else if (baseMilkRow && r.id === baseMilkRow.id) alloc = baseMilkAllocated;
      else if (waterRow && r.id === waterRow.id) alloc = waterAllocated;

      if (alloc > 0) {
        newAllocations.push({
          id: r.id,
          name: r.name,
          qty: alloc,
          ts: r.ts
        });
      }

      return {
        ...r,
        qty: alloc
      };
    });

    setRows(updatedRows);

    // Verification metrics
    const totalAllocatedBatch =
      lockedQty + sugarAllocated + stabAllocated + creamAllocated + smpAllocated + baseMilkAllocated + waterAllocated;
    const finalFatKg =
      lockedFatKg +
      (creamAllocated * cFat) / 100 +
      (smpAllocated * sFat) / 100 +
      (baseMilkAllocated * bFat) / 100;
    const finalSnfKg =
      lockedSnfKg +
      (creamAllocated * cSnf) / 100 +
      (smpAllocated * sSnf) / 100 +
      (baseMilkAllocated * bSnf) / 100;
    const finalSugarKg = lockedSugarKg + (sugarAllocated * (sugarRow?.sugar || 100)) / 100;
    const finalStabKg = lockedStabKg + (stabAllocated * (stabRow?.stabilizer || 100)) / 100;

    const calcFatPct = totalAllocatedBatch > 0 ? (finalFatKg / totalAllocatedBatch) * 100 : 0;
    const calcSnfPct = totalAllocatedBatch > 0 ? (finalSnfKg / totalAllocatedBatch) * 100 : 0;
    const calcSugarPct = totalAllocatedBatch > 0 ? (finalSugarKg / totalAllocatedBatch) * 100 : 0;
    const calcStabPct = totalAllocatedBatch > 0 ? (finalStabKg / totalAllocatedBatch) * 100 : 0;
    const calcTsPct = calcFatPct + calcSnfPct + calcSugarPct + calcStabPct;

    const diffF = Number((calcFatPct - targetFat).toFixed(2));
    const diffS = Number((calcSnfPct - targetSnf).toFixed(2));
    const diffSug = Number((calcSugarPct - targetSugar).toFixed(2));
    const diffStab = Number((calcStabPct - targetStabilizer).toFixed(2));
    const diffTs = Number((calcTsPct - targetTsSum).toFixed(2));

    const exact =
      Math.abs(diffF) <= 0.05 &&
      Math.abs(diffS) <= 0.05 &&
      Math.abs(diffSug) <= 0.05 &&
      Math.abs(diffTs) <= 0.1;

    setOptimizerResult({
      timestamp: Date.now(),
      status: exact ? "exact" : "optimal",
      title: exact ? "100% Target Matched 🎯" : "Optimal Mass Allocation Balanced ⚡",
      explanation: exact
        ? `Batch recipe balanced using linear mass conservation. Hit exact ${targetFat}% Fat, ${targetSnf}% SNF, ${targetSugar}% Sugar and ${targetTsSum}% Total Solids.`
        : `Allocated available streams to get within 0.05% tolerance of target standards.`,
      finalQty: Math.round(totalAllocatedBatch),
      finalFat: Number(calcFatPct.toFixed(2)),
      finalSnf: Number(calcSnfPct.toFixed(2)),
      finalSugar: Number(calcSugarPct.toFixed(2)),
      finalStab: Number(calcStabPct.toFixed(2)),
      finalTs: Number(calcTsPct.toFixed(2)),
      fatDiff: diffF,
      snfDiff: diffS,
      sugarDiff: diffSug,
      stabDiff: diffStab,
      tsDiff: diffTs,
      isExact: exact,
      allocations: newAllocations
    });

    toast({
      title: exact ? "Batch Perfectly Balanced! 🎯" : "Batch Recipe Optimized ⚡",
      description: `Target Volume: ${W} kg/L | TS: ${calcTsPct.toFixed(2)}% | Fat: ${calcFatPct.toFixed(2)}% | SNF: ${calcSnfPct.toFixed(2)}%`
    });
  }, [
    rows,
    targetWeightKg,
    targetFat,
    targetSnf,
    targetSugar,
    targetStabilizer,
    targetTsSum,
    toast
  ]);

  // ─────────────────────────────────────────────
  // EXPORT, WHATSAPP & PDF HANDLERS
  // ─────────────────────────────────────────────
  const handlePrint = () => {
    window.print();
  };

  const handleCopyExcelTsv = useCallback(() => {
    let tsv = `Multi-Solids Batch Formulation Matrix (${selectedPresetId.toUpperCase()})\n`;
    tsv += `Target Specs:\tFat: ${targetFat}%\tSNF: ${targetSnf}%\tSugar: ${targetSugar}%\tStab: ${targetStabilizer}%\tTotal Solids: ${targetTsSum}%\tTarget Acidity: ${targetAcidity}% LA\tMix Density: ${effectiveDensity} kg/L\n\n`;
    tsv += "S.No\tStream Name\tRole\tQuantity (" + targetUnit + ")\tFat %\tKg Fat\tSNF %\tKg SNF\tSugar %\tKg Sugar\tStab %\tKg Stab\tTS %\tKg TS\tAcidity % (LA)\tKg Acidity\tCLR\tRate (INR)\tCost (INR)\n";

    batchSummary.computedRows.forEach((r, idx) => {
      tsv += `${idx + 1}\t${r.name}\t${r.role}\t${r.qty}\t${r.fat}\t${r.kgFat}\t${r.snf}\t${r.kgSnf}\t${r.sugar}\t${r.kgSugar}\t${r.stabilizer}\t${r.kgStabilizer}\t${r.ts}\t${r.kgTs}\t${r.acidity}\t${r.kgAcidity}\t${r.clr}\t${r.costRate}\t${r.rowCost}\n`;
    });

    tsv += `Total\tGrand Total\tALL\t${batchSummary.totalQty}\t${batchSummary.weightedFat}\t${batchSummary.totalKgFat}\t${batchSummary.weightedSnf}\t${batchSummary.totalKgSnf}\t${batchSummary.weightedSugar}\t${batchSummary.totalKgSugar}\t${batchSummary.weightedStabilizer}\t${batchSummary.totalKgStabilizer}\t${batchSummary.weightedTs}\t${batchSummary.totalKgTs}\t${batchSummary.weightedAcidity}\t${batchSummary.totalKgAcidity}\t${batchSummary.weightedClr}\tAvg\t${batchSummary.totalBatchCost}\n`;

    if (batchSummary.isAcidityHigh) {
      tsv += `\nAcidity Status:\tHIGH - Excess Lactic Acid: ${batchSummary.totalExcessLacticAcidGrams} g (${batchSummary.totalExcessLacticAcidKg} kg)\n`;
      tsv += `Neutralizer Dosing:\tNaHCO3 (Baking Soda): ${batchSummary.gramsNaHCO3} g\tNa2CO3 (Soda Ash): ${batchSummary.gramsNa2CO3} g\tNaOH (Caustic): ${batchSummary.gramsNaOH} g\n`;
    } else {
      tsv += `\nAcidity Status:\tCOMPLIANT / SAFE (${batchSummary.weightedAcidity}% LA)\n`;
    }

    navigator.clipboard.writeText(tsv);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast({
      title: "Excel Data Copied! 📋",
      description: "Paste directly into Microsoft Excel or Google Sheets (Ctrl+V)."
    });
  }, [batchSummary, selectedPresetId, targetFat, targetSnf, targetSugar, targetStabilizer, targetTsSum, targetAcidity, effectiveDensity, targetUnit, toast]);

  const handleDownloadCsv = useCallback(() => {
    let csv = `Multi-Solids Batch Formulation Matrix (${selectedPresetId})\n`;
    csv += `"Target",Fat,${targetFat}%,SNF,${targetSnf}%,Sugar,${targetSugar}%,Stab,${targetStabilizer}%,TS,${targetTsSum}%,Acidity,${targetAcidity}%,Density,${effectiveDensity}\n`;
    csv += "S.No,Stream Name,Role,Quantity,Fat %,Kg Fat,SNF %,Kg SNF,Sugar %,Kg Sugar,Stab %,Kg Stab,TS %,Kg TS,Acidity %,Kg Acidity,CLR,Rate,Cost\n";

    batchSummary.computedRows.forEach((r, idx) => {
      csv += `${idx + 1},"${r.name.replace(/"/g, '""')}",${r.role},${r.qty},${r.fat},${r.kgFat},${r.snf},${r.kgSnf},${r.sugar},${r.kgSugar},${r.stabilizer},${r.kgStabilizer},${r.ts},${r.kgTs},${r.acidity},${r.kgAcidity},${r.clr},${r.costRate},${r.rowCost}\n`;
    });

    csv += `Total,"Grand Total",ALL,${batchSummary.totalQty},${batchSummary.weightedFat},${batchSummary.totalKgFat},${batchSummary.weightedSnf},${batchSummary.totalKgSnf},${batchSummary.weightedSugar},${batchSummary.totalKgSugar},${batchSummary.weightedStabilizer},${batchSummary.totalKgStabilizer},${batchSummary.weightedTs},${batchSummary.totalKgTs},${batchSummary.weightedAcidity},${batchSummary.totalKgAcidity},${batchSummary.weightedClr},Avg,${batchSummary.totalBatchCost}\n`;

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Multi_Solids_Batch_${selectedPresetId}_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "CSV Downloaded! 📥",
      description: "Formulation sheet saved to your device."
    });
  }, [batchSummary, selectedPresetId, targetFat, targetSnf, targetSugar, targetStabilizer, targetTsSum, targetAcidity, effectiveDensity, toast]);

  const handleDownloadPdf = async () => {
    if (!printAreaRef.current) return;
    setIsDownloading(true);
    toast({
      title: "Generating A4 Recipe Card PDF...",
      description: "Compiling multi-solids formulation sheet."
    });

    try {
      printAreaRef.current.classList.add("is-exporting-pdf");
      const canvas = await html2canvas(printAreaRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: printAreaRef.current.scrollWidth || 1000,
        scrollX: 0,
        scrollY: 0
      });
      printAreaRef.current.classList.remove("is-exporting-pdf");

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      await savePdfFile(pdf, `Multi_Solids_Batch_${selectedPresetId}_${Date.now()}.pdf`);
      toast({
        title: "PDF Saved Successfully! 📄",
        description: "Your Multi-Solids Recipe Card has been downloaded."
      });
    } catch (e) {
      console.error(e);
      toast({
        title: "PDF Generation Failed",
        description: "Could not export PDF. Please try Print instead.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShareWhatsApp = useCallback(() => {
    const text = `🥛 *DAIRYHUB MULTI-SOLIDS BATCH RECIPE* 🧁
Product: *${PRODUCT_PRESETS.find((p) => p.id === selectedPresetId)?.name || "Custom Mix"}*
Batch Size: *${batchSummary.totalQty.toLocaleString()} ${targetUnit.toUpperCase()}* (${targetWeightKg.toFixed(1)} kg)
Finished Mix Density: *${effectiveDensity} kg/L*

━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 *TARGET SPECIFICATIONS:*
• Target Fat: *${targetFat}%*
• Target SNF: *${targetSnf}%*
• Target Sugar: *${targetSugar}%*
• Target Stabilizer: *${targetStabilizer}%*
• Total Target Solids (TS): *${targetTsSum}%*
• Max Acidity: *${targetAcidity}% LA*

━━━━━━━━━━━━━━━━━━━━━━━━━━
⚖️ *INGREDIENT STREAM ALLOCATIONS:*
${batchSummary.computedRows
  .filter((r) => r.qty > 0)
  .map(
    (r, i) =>
      `• ${i + 1}. *${r.name}*: ${r.qty.toLocaleString()} ${targetUnit} | Fat: ${r.fat}% (${r.kgFat} kg) | SNF: ${r.snf}% (${r.kgSnf} kg) | Sug: ${r.sugar}% (${r.kgSugar} kg) | Stab: ${r.stabilizer}% (${r.kgStabilizer} kg) | TS: ${r.ts}% (${r.kgTs} kg) | Acidity: ${r.acidity}% (${r.kgAcidity} kg) | Rate: ₹${r.costRate}`
  )
  .join("\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━
🔬 *VERIFIED BATCH COMPOSITION & MASS TOTALS:*
• Total Solids (TS): *${batchSummary.weightedTs}%* (${batchSummary.totalKgTs} kg TS) [Dev: ${batchSummary.tsDiff > 0 ? "+" : ""}${batchSummary.tsDiff}%]
• Final Fat: *${batchSummary.weightedFat}%* (${batchSummary.totalKgFat} kg Fat)
• Final SNF: *${batchSummary.weightedSnf}%* (${batchSummary.totalKgSnf} kg SNF)
• Final Sugar: *${batchSummary.weightedSugar}%* (${batchSummary.totalKgSugar} kg)
• Final Stabilizer: *${batchSummary.weightedStabilizer}%* (${batchSummary.totalKgStabilizer} kg)
• Final Acidity: *${batchSummary.weightedAcidity}% LA* (${batchSummary.totalKgAcidity} kg Lactic Acid) ${
  batchSummary.isAcidityHigh
    ? `[⚠️ HIGH - Neutralizer: ${batchSummary.kgNaHCO3 >= 1 ? `${batchSummary.kgNaHCO3} kg` : `${Math.round(batchSummary.gramsNaHCO3)} g`} NaHCO₃ / Baking Soda]`
    : "[✅ SAFE & COMPLIANT]"
}
• Average CLR: *${batchSummary.weightedClr}*

━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *COMMERCIAL COSTING:*
• Total Batch Cost: *₹${batchSummary.totalBatchCost.toLocaleString("en-IN")}*
• Unit Cost: *₹${batchSummary.costPerKg}/kg* | *₹${batchSummary.costPerLiter}/Liter*
• Compliance: *${batchSummary.isBatchCompliant ? "✅ 100% IN COMPLIANCE" : "⚠️ VARIANCE DETECTED"}*

Generated via DairyHub Master Multi-Solids Engine`;

    navigator.clipboard.writeText(text);
    toast({
      title: "WhatsApp Report Copied! 📱",
      description: "Ready to paste into your Plant Operations & Production team."
    });
  }, [
    selectedPresetId,
    batchSummary,
    targetUnit,
    targetWeightKg,
    effectiveDensity,
    targetFat,
    targetSnf,
    targetSugar,
    targetStabilizer,
    targetTsSum,
    targetAcidity,
    toast
  ]);

  // ─────────────────────────────────────────────
  // RENDER MAIN COMPONENT
  // ─────────────────────────────────────────────
  return (
    <div className="space-y-4 sm:space-y-6 pb-12 animate-fadeIn max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-x-hidden px-1 sm:px-0">
      {/* 👑 COMPACT HEADER & DROPDOWN SETTINGS */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-md p-2.5 sm:p-3 space-y-2.5 w-full min-w-0 max-w-full">
        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          {/* Left: Compact Title & Live Specs Badges */}
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1 shadow-xs">
              <Award className="w-3 h-3 fill-white" />
              Master Edition
            </span>
            <h2 className="text-xs sm:text-sm font-black text-white truncate flex items-center gap-1.5">
              <span>Multi-Solids Batch</span>
              <span className="text-slate-400 font-normal hidden md:inline text-xs">
                (Sweet Curd, Lassi, Ice Cream, Condensed Milk)
              </span>
            </h2>

            {/* Live Target Pill */}
            <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/70 border border-purple-800/40 px-2 py-0.5 rounded-lg shrink-0">
              🎯 TS: {targetTsSum}% ({targetFat}%F | {targetSnf}%S | {targetSugar}%Sug | {targetAcidity}%LA)
            </span>

            {/* Density & Volume Pill */}
            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-800/40 px-2 py-0.5 rounded-lg shrink-0">
              {targetBatchVolume} {targetUnit.toUpperCase()} ({targetWeightKg.toFixed(0)} kg @ {effectiveDensity} kg/L)
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
                ? "bg-purple-400 text-slate-950 border-purple-300 shadow-xs font-black"
                : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 hover:text-white"
            )}
          >
            <Settings2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Target Specs & Settings</span>
            {isSettingsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </Button>
        </div>

        {/* 🛠️ COLLAPSIBLE SETTINGS DRAWER */}
        {isSettingsOpen && (
          <div className="pt-2 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs animate-in fade-in slide-in-from-top-1 duration-200">
            {/* 1. Target Standards Preset */}
            <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
              <Label className="text-[11px] font-bold text-purple-300 flex items-center justify-between">
                <span>🧁 Product Formulation Preset:</span>
                <span className="text-[10px] text-slate-400">FSSAI Standards</span>
              </Label>
              <Select value={selectedPresetId} onValueChange={handleSelectPreset}>
                <SelectTrigger className="h-8 text-xs font-semibold bg-slate-900 border-slate-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {PRODUCT_PRESETS.map((p) => (
                    <SelectItem key={p.id} value={p.id} className="text-xs">
                      {p.name} (TS ~{(p.targetFat + p.targetSnf + p.targetSugar + p.targetAdditives).toFixed(1)}%)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-[10px] text-slate-400 leading-tight">
                {PRODUCT_PRESETS.find((p) => p.id === selectedPresetId)?.description}
              </p>
            </div>

            {/* 2. Target Composition Percentages */}
            <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
              <Label className="text-[11px] font-bold text-amber-300 flex items-center justify-between">
                <span>🎯 Target Solids (%):</span>
                <span className="text-[10px] text-amber-400 font-mono font-bold">Sum TS: {targetTsSum}%</span>
              </Label>
              <div className="grid grid-cols-4 gap-1.5 font-mono">
                <div>
                  <span className="text-[9px] text-amber-400/80 block">Fat %</span>
                  <Input
                    type="number"
                    step="0.1"
                    value={targetFat}
                    onChange={(e) => setTargetFat(Number(e.target.value) || 0)}
                    className="h-7 text-xs bg-slate-900 border-slate-700 text-amber-400 font-bold px-1.5"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-sky-400/80 block">SNF %</span>
                  <Input
                    type="number"
                    step="0.1"
                    value={targetSnf}
                    onChange={(e) => setTargetSnf(Number(e.target.value) || 0)}
                    className="h-7 text-xs bg-slate-900 border-slate-700 text-sky-400 font-bold px-1.5"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-pink-400/80 block">Sugar %</span>
                  <Input
                    type="number"
                    step="0.1"
                    value={targetSugar}
                    onChange={(e) => setTargetSugar(Number(e.target.value) || 0)}
                    className="h-7 text-xs bg-slate-900 border-slate-700 text-pink-400 font-bold px-1.5"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-purple-400/80 block">Stab %</span>
                  <Input
                    type="number"
                    step="0.1"
                    value={targetStabilizer}
                    onChange={(e) => setTargetStabilizer(Number(e.target.value) || 0)}
                    className="h-7 text-xs bg-slate-900 border-slate-700 text-purple-400 font-bold px-1.5"
                  />
                </div>
              </div>
            </div>

            {/* 3. Target Acidity & Quality Specs */}
            <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
              <Label className="text-[11px] font-bold text-emerald-300 flex items-center justify-between">
                <span>🧪 Target Acidity (% LA):</span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">Standard: 0.14-0.15%</span>
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  step="0.005"
                  value={targetAcidity}
                  onChange={(e) => setTargetAcidity(Number(e.target.value) || 0)}
                  className="h-7 text-xs bg-slate-900 border-slate-700 text-emerald-400 font-mono font-bold w-24"
                />
                <div className="flex items-center gap-1 flex-wrap">
                  {[0.13, 0.14, 0.15, 0.16].map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setTargetAcidity(a)}
                      className={cn(
                        "text-[9px] font-bold px-1.5 py-0.5 rounded transition-all border",
                        targetAcidity === a
                          ? "bg-emerald-500 text-slate-950 border-emerald-400"
                          : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                      )}
                    >
                      {a}%
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Used to compute chemical neutralizer dosing in batch final results.
              </p>
            </div>

            {/* 4. Batch Size, Units & Density */}
            <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
              <Label className="text-[11px] font-bold text-cyan-300 flex items-center justify-between">
                <span>📦 Batch Size & Units:</span>
                <span className="text-[10px] text-slate-400">Density: {effectiveDensity} kg/L</span>
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[9px] text-slate-400 block">Batch Volume</span>
                  <Input
                    type="number"
                    step="50"
                    value={targetBatchVolume}
                    onChange={(e) => setTargetBatchVolume(Number(e.target.value) || 0)}
                    className="h-7 text-xs bg-slate-900 border-slate-700 text-white font-mono font-bold"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block">Unit Mode</span>
                  <Select value={targetUnit} onValueChange={(val: any) => setTargetUnit(val)}>
                    <SelectTrigger className="h-7 text-xs bg-slate-900 border-slate-700 text-white font-semibold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="liters">Liters (L)</SelectItem>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 🧭 NAVIGATION TABS */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full min-w-0 max-w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full h-auto p-1 bg-slate-200/90 rounded-2xl border border-slate-300 gap-1 min-w-0 max-w-full shadow-xs">
          <TabsTrigger
            value="matrix"
            className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-black data-[state=active]:bg-white data-[state=active]:text-purple-950 data-[state=active]:shadow-sm flex items-center justify-center gap-1 sm:gap-1.5 truncate"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span className="truncate">1. Master Batch (Excel)</span>
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
            <span className="truncate">3. Cost Economics</span>
          </TabsTrigger>
          <TabsTrigger
            value="audit"
            className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-black data-[state=active]:bg-white data-[state=active]:text-sky-950 data-[state=active]:shadow-sm flex items-center justify-center gap-1 sm:gap-1.5 truncate"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span className="truncate">4. Plant SOP & QA</span>
          </TabsTrigger>
        </TabsList>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 1: MASTER BATCH MATRIX (LIVE EXCEL SPREADSHEET) */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="matrix" className="space-y-4 pt-1 w-full min-w-0 max-w-full">
          {/* Quick Stream Preset Buttons (Touch scroll on mobile) */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 p-2 rounded-xl sm:rounded-2xl border border-slate-200 overflow-x-auto touch-pan-x no-scrollbar w-full min-w-0 max-w-full">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 shrink-0">
              ⚡ Quick Stream:
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Whole Milk Base", "base_milk", 4.0, 8.5, 0, 0, 36.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-slate-300 bg-white hover:bg-slate-50 gap-1 shrink-0 whitespace-nowrap"
            >
              🥛 + Whole Milk (4.0/8.5)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Skimmed Milk", "base_milk", 0.05, 8.8, 0, 0, 28.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-slate-300 bg-white hover:bg-slate-50 gap-1 shrink-0 whitespace-nowrap"
            >
              🥛 + Skim Milk (0.05/8.8)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Fresh Cream 40%", "fat_booster", 40.0, 5.4, 0, 0, 260.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-amber-300 bg-amber-50/50 hover:bg-amber-100 text-amber-950 gap-1 shrink-0 whitespace-nowrap"
            >
              🧈 + Fresh Cream (40% Fat)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("SMP Powder (96% SNF)", "snf_booster", 1.0, 96.0, 0, 0, 310.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-blue-300 bg-blue-50/50 hover:bg-blue-100 text-blue-950 gap-1 shrink-0 whitespace-nowrap"
            >
              🌾 + SMP Powder (96% SNF)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Granulated Sugar", "sweetener", 0, 0, 100.0, 0, 42.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-pink-300 bg-pink-50/50 hover:bg-pink-100 text-pink-950 gap-1 shrink-0 whitespace-nowrap"
            >
              🍬 + Sugar (100% Sucrose)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Stabilizer / Emulsifier", "stabilizer", 0, 0, 0, 100.0, 280.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-purple-300 bg-purple-50/50 hover:bg-purple-100 text-purple-950 gap-1 shrink-0 whitespace-nowrap"
            >
              🧪 + Stabilizer (100% TS)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("RO Water Diluent", "diluent", 0, 0, 0, 0, 0.2)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-cyan-300 bg-cyan-50/50 hover:bg-cyan-100 text-cyan-950 gap-1 shrink-0 whitespace-nowrap"
            >
              💧 + RO Make-up Water
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddPresetStream("Cocoa Powder / Flavor", "flavor", 10.0, 0, 0, 0, 350.0)}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg border-amber-400 bg-amber-50 hover:bg-amber-100 text-amber-950 gap-1 shrink-0 whitespace-nowrap"
            >
              🍫 + Cocoa Powder
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleAddRow}
              className="h-7 text-[11px] sm:text-xs font-bold rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 gap-1 shrink-0 ml-auto whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" /> Custom Row
            </Button>
          </div>

          {/* ⚡ ACTION BAR: 1-Click Auto Solve, View Switcher, Share, Zero, Reset */}
          <div className="flex flex-col gap-2.5 bg-white p-2.5 sm:p-3.5 rounded-2xl border border-slate-200 shadow-xs w-full min-w-0 max-w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <Button
                  onClick={handleAutoSolveBatch}
                  className="h-8 sm:h-9 px-3.5 sm:px-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 animate-pulse" />
                  <span>⚡ Auto-Solve & Balance Batch</span>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAddRow}
                  className="h-8 text-[11px] sm:text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border-slate-300 gap-1 rounded-xl"
                >
                  <Plus className="w-3.5 h-3.5" /> Custom Stream
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleZeroAllAdditions}
                  className="h-8 text-[11px] sm:text-xs font-bold text-amber-800 hover:bg-amber-50 gap-1 rounded-xl"
                  title="Reset additions to 0"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Zero Additions</span>
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleResetToDefault}
                  className="h-8 text-[11px] sm:text-xs font-bold text-slate-600 hover:text-slate-900 gap-1 rounded-xl"
                  title="Reset to default formulation"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Reset</span>
                </Button>
              </div>

              {/* View Mode Switcher for Desktop / Mobile */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={cn(
                    "px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1",
                    viewMode === "table" ? "bg-white text-purple-950 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  <FileSpreadsheet className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600" /> Table (Excel Grid)
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("cards")}
                  className={cn(
                    "px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1",
                    viewMode === "cards" ? "bg-white text-purple-950 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600" /> Mobile Cards
                </button>
              </div>
            </div>

            {/* Secondary Export Row */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1.5 border-t border-slate-100 justify-between">
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
                  onClick={handlePrint}
                  className="h-7 text-[11px] font-bold border-slate-300 text-slate-800 hover:bg-slate-100 gap-1 rounded-lg px-2 hidden sm:inline-flex"
                >
                  <Printer className="w-3 h-3" /> Print
                </Button>
              </div>

              <Button
                size="sm"
                onClick={handleShareWhatsApp}
                className="h-7 text-[11px] font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white gap-1 rounded-lg shadow-xs px-2.5 ml-auto"
              >
                <Share2 className="w-3 h-3" /> WhatsApp Report
              </Button>
            </div>
          </div>

          {/* 🎯 OPTIMIZER RESULT BANNER (If Auto-Solved) */}
          {optimizerResult && (
            <div
              className={cn(
                "p-3 sm:p-4 rounded-2xl border shadow-sm transition-all space-y-2.5",
                optimizerResult.isExact
                  ? "bg-gradient-to-r from-emerald-950/80 via-slate-900 to-emerald-950/70 border-emerald-500/60 text-white"
                  : "bg-gradient-to-r from-slate-900 via-amber-950/60 to-slate-900 border-amber-500/50 text-white"
              )}
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <Badge
                    className={cn(
                      "text-[10px] font-black uppercase px-2 py-0.5",
                      optimizerResult.isExact ? "bg-emerald-500 text-slate-950" : "bg-amber-500 text-slate-950"
                    )}
                  >
                    {optimizerResult.isExact ? "🎯 100% Target Matched" : "⚡ Optimal Allocation"}
                  </Badge>
                  <h4 className="text-xs sm:text-sm font-black text-white">{optimizerResult.title}</h4>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setOptimizerResult(null)}
                  className="h-6 w-6 p-0 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Solved Results Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 font-mono text-xs">
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 font-sans block">Total Batch Qty</span>
                  <strong className="text-white text-sm">{optimizerResult.finalQty.toLocaleString()} {targetUnit}</strong>
                </div>
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <span className="text-[10px] text-amber-300 font-sans block">Solved Fat %</span>
                  <strong className="text-amber-400 text-sm">{optimizerResult.finalFat}%</strong>
                  <span className="text-[10px] text-slate-400 block">Dev: {optimizerResult.fatDiff > 0 ? `+${optimizerResult.fatDiff}` : optimizerResult.fatDiff}%</span>
                </div>
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <span className="text-[10px] text-sky-300 font-sans block">Solved SNF %</span>
                  <strong className="text-sky-300 text-sm">{optimizerResult.finalSnf}%</strong>
                  <span className="text-[10px] text-slate-400 block">Dev: {optimizerResult.snfDiff > 0 ? `+${optimizerResult.snfDiff}` : optimizerResult.snfDiff}%</span>
                </div>
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <span className="text-[10px] text-pink-300 font-sans block">Solved Sugar %</span>
                  <strong className="text-pink-300 text-sm">{optimizerResult.finalSugar}%</strong>
                  <span className="text-[10px] text-slate-400 block">Dev: {optimizerResult.sugarDiff > 0 ? `+${optimizerResult.sugarDiff}` : optimizerResult.sugarDiff}%</span>
                </div>
                <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                  <span className="text-[10px] text-purple-300 font-sans block">Solved TS %</span>
                  <strong className="text-purple-300 text-sm">{optimizerResult.finalTs}%</strong>
                  <span className="text-[10px] text-slate-400 block">Target: {targetTsSum}%</span>
                </div>
              </div>

              {/* Allocations Pill List */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                <span className="text-[10px] font-sans text-slate-400">Allocated Additions:</span>
                {optimizerResult.allocations.map((a) => (
                  <span
                    key={a.id}
                    className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-lg border border-white/15 text-white"
                  >
                    {a.name}: <strong>{a.qty.toLocaleString()} {targetUnit}</strong>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* VIEW MODE 1: EXCEL SPREADSHEET TABLE */}
          {viewMode === "table" ? (
            <Card className="border border-slate-200 shadow-md overflow-hidden bg-white rounded-2xl w-full min-w-0 max-w-full">
              <CardHeader className="p-3 sm:p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border-b border-slate-800 flex flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <CardTitle className="text-xs sm:text-sm font-black text-white">
                      Multi-Solids Batch Formulation Matrix (Excel Grid)
                    </CardTitle>
                    <p className="text-[10.5px] text-slate-300">
                      Live interactive spreadsheet with real-time solids mass balance, acidity tracking & costing
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    className={cn(
                      "text-[10px] font-mono font-bold",
                      batchSummary.isBatchCompliant ? "bg-emerald-500 text-slate-950" : "bg-amber-500 text-slate-950"
                    )}
                  >
                    {batchSummary.isBatchCompliant ? "✓ Compliant" : `Dev: TS ${batchSummary.tsDiff > 0 ? "+" : ""}${batchSummary.tsDiff}%`}
                  </Badge>
                </div>
              </CardHeader>

              {/* Mobile Horizontal Scroll Tip */}
              <div className="sm:hidden px-3 py-1.5 bg-purple-50 border-b border-purple-200 flex items-center justify-between text-[10px] text-purple-900 font-bold">
                <span>↔️ Swipe horizontally to view all solids & acidity columns</span>
                <span className="bg-purple-200/80 px-1.5 py-0.5 rounded font-mono">19 Columns</span>
              </div>

              <div className="overflow-x-auto touch-pan-x w-full">
                <table className="w-full border-collapse text-xs font-sans">
                  <thead>
                    {/* Excel Column Letters Indicator */}
                    <tr className="bg-slate-200/90 text-slate-500 text-[10px] font-mono font-bold border-b border-slate-300 text-center select-none">
                      <th className="py-1 px-1">A</th>
                      <th className="py-1 px-1">B</th>
                      <th className="py-1 px-3 text-left">C</th>
                      <th className="py-1 px-2">D</th>
                      <th className="py-1 px-2 text-right">E</th>
                      <th className="py-1 px-2 text-right">F</th>
                      <th className="py-1 px-2 text-right">G</th>
                      <th className="py-1 px-2 text-right">H</th>
                      <th className="py-1 px-2 text-right">I</th>
                      <th className="py-1 px-2 text-right">J</th>
                      <th className="py-1 px-2 text-right">K</th>
                      <th className="py-1 px-2 text-right">L</th>
                      <th className="py-1 px-2 text-right">M</th>
                      <th className="py-1 px-2 text-right">N</th>
                      <th className="py-1 px-2 text-right">O</th>
                      <th className="py-1 px-2 text-right">P</th>
                      <th className="py-1 px-2 text-right">Q</th>
                      <th className="py-1 px-2 text-right">R</th>
                      <th className="py-1 px-2 text-right">S</th>
                      <th className="py-1 px-2 text-right">T</th>
                      <th className="py-1 px-2">U</th>
                    </tr>

                    <tr className="bg-slate-100 text-slate-700 text-[11px] font-bold border-b border-slate-300 uppercase tracking-wider text-left">
                      <th className="py-2.5 px-2 text-center w-8">#</th>
                      <th className="py-2.5 px-1.5 text-center w-12" title="Lock stream quantity">Lock</th>
                      <th className="py-2.5 px-3 min-w-[160px] whitespace-nowrap">Ingredient Stream</th>
                      <th className="py-2.5 px-2 text-center min-w-[65px]">Role</th>
                      <th className="py-2.5 px-2 text-right min-w-[95px] text-purple-950 font-black">
                        QTY ({targetUnit})
                      </th>
                      <th className="py-2.5 px-2 text-right min-w-[70px] text-amber-900">Fat %</th>
                      <th className="py-2.5 px-2 text-right min-w-[75px] bg-amber-50/70 text-amber-950 font-mono">Kg Fat</th>
                      <th className="py-2.5 px-2 text-right min-w-[70px] text-blue-900">SNF %</th>
                      <th className="py-2.5 px-2 text-right min-w-[75px] bg-blue-50/70 text-blue-950 font-mono">Kg SNF</th>
                      <th className="py-2.5 px-2 text-right min-w-[70px] text-pink-900">Sugar %</th>
                      <th className="py-2.5 px-2 text-right min-w-[75px] bg-pink-50/70 text-pink-950 font-mono">Kg Sugar</th>
                      <th className="py-2.5 px-2 text-right min-w-[70px] text-purple-900">Stab %</th>
                      <th className="py-2.5 px-2 text-right min-w-[75px] bg-purple-50/70 text-purple-950 font-mono">Kg Stab</th>
                      <th className="py-2.5 px-2 text-right min-w-[75px] text-emerald-950 font-black bg-emerald-50/70">
                        TS %
                      </th>
                      <th className="py-2.5 px-2 text-right min-w-[80px] bg-emerald-100/60 text-emerald-950 font-mono font-bold">Kg TS</th>
                      {/* Acidity Columns (User Focus) */}
                      <th className="py-2.5 px-2 text-right min-w-[75px] text-rose-950 bg-rose-50/70 font-mono font-bold">
                        Acidity %
                      </th>
                      <th className="py-2.5 px-2 text-right min-w-[80px] text-teal-950 bg-teal-50/70 font-mono font-bold">
                        Kg Acid
                      </th>
                      <th className="py-2.5 px-2 text-right min-w-[65px] text-slate-600">CLR</th>
                      <th className="py-2.5 px-2 text-right min-w-[75px] text-teal-900">Rate (₹)</th>
                      <th className="py-2.5 px-2 text-right min-w-[85px] text-slate-900 font-bold">Cost (₹)</th>
                      <th className="py-2.5 px-2 text-center min-w-[45px]">Del</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {batchSummary.computedRows.map((r, idx) => (
                      <tr
                        key={r.id}
                        className={cn(
                          "hover:bg-purple-50/40 transition-colors",
                          r.isLocked && "bg-slate-50/80 font-medium",
                          r.isBase && "bg-blue-50/40"
                        )}
                      >
                        {/* A. S.No */}
                        <td className="py-2 px-2 text-center text-slate-400 font-mono text-[11px]">
                          {idx + 1}
                        </td>

                        {/* B. Lock */}
                        <td className="py-2 px-1 text-center">
                          <button
                            type="button"
                            onClick={() => handleToggleLock(r.id)}
                            className={cn(
                              "p-1 rounded-md text-xs font-black transition-all border flex items-center justify-center mx-auto",
                              r.isLocked
                                ? "bg-amber-100 border-amber-300 text-amber-900"
                                : "bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                            )}
                            title={r.isLocked ? "Locked: Optimizer will not change" : "Unlocked: Free to solve"}
                          >
                            {r.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                          </button>
                        </td>

                        {/* C. Stream Name */}
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-1.5">
                            <Input
                              type="text"
                              value={r.name}
                              onChange={(e) => handleUpdateCell(r.id, "name", e.target.value)}
                              className="h-7 text-xs font-bold bg-transparent border-slate-200 focus:bg-white"
                            />
                          </div>
                        </td>

                        {/* D. Stream Role Badge */}
                        <td className="py-2 px-2 text-center">
                          <span
                            className={cn(
                              "text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold",
                              r.role === "base_milk" && "bg-blue-100 text-blue-800",
                              r.role === "fat_booster" && "bg-amber-100 text-amber-800",
                              r.role === "snf_booster" && "bg-sky-100 text-sky-800",
                              r.role === "sweetener" && "bg-pink-100 text-pink-800",
                              r.role === "stabilizer" && "bg-purple-100 text-purple-800",
                              r.role === "diluent" && "bg-cyan-100 text-cyan-800",
                              r.role === "flavor" && "bg-orange-100 text-orange-800"
                            )}
                          >
                            {r.role === "base_milk"
                              ? "Base"
                              : r.role === "fat_booster"
                              ? "Fat"
                              : r.role === "snf_booster"
                              ? "SNF"
                              : r.role === "sweetener"
                              ? "Sugar"
                              : r.role === "stabilizer"
                              ? "Stab"
                              : r.role === "diluent"
                              ? "Water"
                              : "Flavor"}
                          </span>
                        </td>

                        {/* E. Quantity */}
                        <td className="py-2 px-2 text-right">
                          <Input
                            type="number"
                            step="1"
                            value={r.qty === 0 ? "" : r.qty}
                            placeholder="0"
                            onFocus={(e) => e.target.select()}
                            onChange={(e) => handleUpdateCell(r.id, "qty", Number(e.target.value) || 0)}
                            className={cn(
                              "h-7 text-xs font-mono font-bold text-right border-purple-200 focus:bg-white",
                              r.qty > 0 ? "text-purple-950 font-black bg-purple-50/50" : "text-slate-400 bg-transparent"
                            )}
                          />
                        </td>

                        {/* F. Fat % */}
                        <td className="py-2 px-2 text-right">
                          <Input
                            type="number"
                            step="0.05"
                            value={r.fat}
                            onChange={(e) => handleUpdateCell(r.id, "fat", Number(e.target.value) || 0)}
                            className="h-7 text-xs font-mono text-right border-slate-200 text-amber-900 bg-transparent focus:bg-white px-1.5"
                          />
                        </td>

                        {/* G. Kg Fat */}
                        <td className="py-2 px-2 text-right font-mono text-amber-900 bg-amber-50/50 font-semibold">
                          {r.kgFat.toFixed(2)}
                        </td>

                        {/* H. SNF % */}
                        <td className="py-2 px-2 text-right">
                          <Input
                            type="number"
                            step="0.05"
                            value={r.snf}
                            onChange={(e) => handleUpdateCell(r.id, "snf", Number(e.target.value) || 0)}
                            className="h-7 text-xs font-mono text-right border-slate-200 text-blue-900 bg-transparent focus:bg-white px-1.5"
                          />
                        </td>

                        {/* I. Kg SNF */}
                        <td className="py-2 px-2 text-right font-mono text-blue-900 bg-blue-50/50 font-semibold">
                          {r.kgSnf.toFixed(2)}
                        </td>

                        {/* J. Sugar % */}
                        <td className="py-2 px-2 text-right">
                          <Input
                            type="number"
                            step="0.1"
                            value={r.sugar}
                            onChange={(e) => handleUpdateCell(r.id, "sugar", Number(e.target.value) || 0)}
                            className="h-7 text-xs font-mono text-right border-slate-200 text-pink-900 bg-transparent focus:bg-white px-1.5"
                          />
                        </td>

                        {/* K. Kg Sugar */}
                        <td className="py-2 px-2 text-right font-mono text-pink-900 bg-pink-50/50 font-semibold">
                          {r.kgSugar.toFixed(2)}
                        </td>

                        {/* L. Stabilizer % */}
                        <td className="py-2 px-2 text-right">
                          <Input
                            type="number"
                            step="0.1"
                            value={r.stabilizer}
                            onChange={(e) => handleUpdateCell(r.id, "stabilizer", Number(e.target.value) || 0)}
                            className="h-7 text-xs font-mono text-right border-slate-200 text-purple-900 bg-transparent focus:bg-white px-1.5"
                          />
                        </td>

                        {/* M. Kg Stabilizer */}
                        <td className="py-2 px-2 text-right font-mono text-purple-900 bg-purple-50/50 font-semibold">
                          {r.kgStabilizer.toFixed(2)}
                        </td>

                        {/* N. Total Solids (TS %) */}
                        <td className="py-2 px-2 text-right font-mono font-black text-emerald-950 bg-emerald-50/70">
                          {r.ts.toFixed(1)}%
                        </td>

                        {/* O. Kg TS */}
                        <td className="py-2 px-2 text-right font-mono font-bold text-emerald-950 bg-emerald-100/60">
                          {r.kgTs.toFixed(2)}
                        </td>

                        {/* P. Acidity % (LA) */}
                        <td className="py-2 px-2 text-right">
                          <Input
                            type="number"
                            step="0.005"
                            value={r.acidity}
                            onChange={(e) => handleUpdateCell(r.id, "acidity", Number(e.target.value) || 0)}
                            className="h-7 text-xs font-mono text-right border-rose-200 text-rose-950 bg-rose-50/50 focus:bg-white px-1.5 font-bold"
                          />
                        </td>

                        {/* Q. Kg Acidity */}
                        <td className="py-2 px-2 text-right font-mono font-bold text-teal-900 bg-teal-50/70">
                          {r.kgAcidity.toFixed(3)}
                        </td>

                        {/* R. CLR */}
                        <td className="py-2 px-2 text-right font-mono text-slate-600 text-[11px]">
                          {r.clr.toFixed(1)}
                        </td>

                        {/* S. Cost Rate (₹) */}
                        <td className="py-2 px-2 text-right">
                          <Input
                            type="number"
                            step="1"
                            value={r.costRate}
                            onChange={(e) => handleUpdateCell(r.id, "costRate", Number(e.target.value) || 0)}
                            className="h-7 text-xs font-mono text-right border-slate-200 text-teal-900 bg-transparent focus:bg-white px-1.5"
                          />
                        </td>

                        {/* T. Total Cost (₹) */}
                        <td className="py-2 px-2 text-right font-mono font-bold text-slate-800">
                          ₹{r.rowCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                        </td>

                        {/* U. Delete Button */}
                        <td className="py-2 px-2 text-center">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleRemoveRow(r.id)}
                            className="h-7 w-7 p-0 text-slate-400 hover:text-rose-600 rounded-lg"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </td>
                      </tr>
                    ))}

                    {/* 🏆 GRAND TOTAL ROW (FINAL RESULT WITH ACIDITY ADJUSTMENT SYSTEM) */}
                    <tr className="bg-slate-900 text-white font-mono font-bold text-xs border-t-2 border-slate-700">
                      <td className="py-3 px-2 text-center text-amber-400 font-black">Σ</td>
                      <td className="py-3 px-1 text-center text-slate-400 text-[10px]">ALL</td>
                      <td className="py-3 px-3 uppercase tracking-wider font-black flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>Grand Batch Total:</span>
                      </td>
                      <td className="py-3 px-2 text-center text-slate-400 text-[10px]">TOTAL</td>
                      <td className="py-3 px-2 text-right text-purple-300 font-black text-sm">
                        {batchSummary.totalQty.toLocaleString()}
                      </td>
                      <td className="py-3 px-2 text-right text-amber-400 font-black">
                        {batchSummary.weightedFat}%
                      </td>
                      <td className="py-3 px-2 text-right text-amber-300 font-mono text-[11px] bg-slate-950/60">
                        {batchSummary.totalKgFat} kg
                      </td>
                      <td className="py-3 px-2 text-right text-sky-400 font-black">
                        {batchSummary.weightedSnf}%
                      </td>
                      <td className="py-3 px-2 text-right text-sky-300 font-mono text-[11px] bg-slate-950/60">
                        {batchSummary.totalKgSnf} kg
                      </td>
                      <td className="py-3 px-2 text-right text-pink-400 font-black">
                        {batchSummary.weightedSugar}%
                      </td>
                      <td className="py-3 px-2 text-right text-pink-300 font-mono text-[11px] bg-slate-950/60">
                        {batchSummary.totalKgSugar} kg
                      </td>
                      <td className="py-3 px-2 text-right text-purple-400 font-black">
                        {batchSummary.weightedStabilizer}%
                      </td>
                      <td className="py-3 px-2 text-right text-purple-300 font-mono text-[11px] bg-slate-950/60">
                        {batchSummary.totalKgStabilizer} kg
                      </td>
                      <td className="py-3 px-2 text-right text-emerald-400 font-black text-sm bg-emerald-950/60">
                        {batchSummary.weightedTs}%
                      </td>
                      <td className="py-3 px-2 text-right text-emerald-300 font-mono text-[11px] bg-emerald-950/80 font-bold">
                        {batchSummary.totalKgTs} kg
                      </td>
                      {/* Final Result: Weighted Acidity % */}
                      <td className={cn(
                        "py-3 px-2 text-right font-mono font-black text-xs sm:text-sm",
                        batchSummary.isAcidityHigh ? "text-rose-400 bg-rose-950/70" : "text-emerald-300 bg-emerald-950/50"
                      )}>
                        {batchSummary.weightedAcidity}%
                      </td>
                      {/* Final Result: Total Kg Acidity */}
                      <td className="py-3 px-2 text-right text-teal-300 font-mono text-[11px] bg-teal-950/60 font-bold">
                        {batchSummary.totalKgAcidity} kg
                      </td>
                      <td className="py-3 px-2 text-right text-slate-300 text-[11px]">
                        {batchSummary.weightedClr}
                      </td>
                      <td className="py-3 px-2 text-right text-slate-400 text-[10px]">Avg</td>
                      <td className="py-3 px-2 text-right text-teal-300 font-black">
                        ₹{batchSummary.totalBatchCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {batchSummary.isAcidityHigh ? (
                          <span title="Acidity adjustment required" className="inline-block">
                            <AlertCircle className="w-4 h-4 text-amber-400 mx-auto" />
                          </span>
                        ) : (
                          <span title="Batch compliant" className="inline-block">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          ) : (
            /* VIEW MODE 2: MOBILE TOUCH CARDS VIEW (ZERO HORIZONTAL SCROLL) */
            <div className="space-y-3 w-full min-w-0 max-w-full">
              <div className="flex items-center justify-between px-1 text-xs text-slate-600 font-bold">
                <span>📱 Ingredient Streams ({batchSummary.computedRows.length} Rows)</span>
                <span className="text-[11px] text-purple-700">Zero Horizontal Scroll Mode</span>
              </div>

              {batchSummary.computedRows.map((r, idx) => (
                <Card
                  key={r.id}
                  className={cn(
                    "border rounded-2xl shadow-xs overflow-hidden transition-all",
                    r.isLocked ? "bg-amber-50/30 border-amber-200" : "bg-white border-slate-200"
                  )}
                >
                  <CardHeader className="p-3 bg-slate-50/80 border-b border-slate-200 flex flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-xs font-mono font-bold text-slate-500 w-5">#{idx + 1}</span>
                      <Input
                        type="text"
                        value={r.name}
                        onChange={(e) => handleUpdateCell(r.id, "name", e.target.value)}
                        className="h-7 text-xs font-bold border-transparent hover:border-slate-300 focus:border-purple-500 bg-transparent px-1.5 flex-1"
                      />
                      <span
                        className={cn(
                          "text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold shrink-0",
                          r.role === "base_milk" && "bg-blue-100 text-blue-800",
                          r.role === "fat_booster" && "bg-amber-100 text-amber-800",
                          r.role === "snf_booster" && "bg-sky-100 text-sky-800",
                          r.role === "sweetener" && "bg-pink-100 text-pink-800",
                          r.role === "stabilizer" && "bg-purple-100 text-purple-800",
                          r.role === "diluent" && "bg-cyan-100 text-cyan-800",
                          r.role === "flavor" && "bg-orange-100 text-orange-800"
                        )}
                      >
                        {r.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleToggleLock(r.id)}
                        className={cn(
                          "h-7 w-7 p-0 rounded-lg",
                          r.isLocked ? "bg-amber-100 text-amber-900" : "text-slate-400 hover:text-slate-700"
                        )}
                      >
                        {r.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemoveRow(r.id)}
                        className="h-7 w-7 p-0 text-slate-400 hover:text-rose-600 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-3 space-y-2.5 text-xs">
                    {/* QTY & Cost Row */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-purple-50/60 p-2 rounded-xl border border-purple-100">
                        <span className="text-[10px] text-purple-800 font-bold block mb-0.5">Quantity ({targetUnit})</span>
                        <Input
                          type="number"
                          step="1"
                          value={r.qty === 0 ? "" : r.qty}
                          placeholder="0"
                          onFocus={(e) => e.target.select()}
                          onChange={(e) => handleUpdateCell(r.id, "qty", Number(e.target.value) || 0)}
                          className="h-7 text-xs font-mono font-black text-right border-purple-200 bg-white"
                        />
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                        <span className="text-[10px] text-slate-600 font-bold block mb-0.5">Rate (₹/{targetUnit})</span>
                        <Input
                          type="number"
                          step="1"
                          value={r.costRate}
                          onChange={(e) => handleUpdateCell(r.id, "costRate", Number(e.target.value) || 0)}
                          className="h-7 text-xs font-mono text-right border-slate-200 bg-white"
                        />
                      </div>
                      <div className="bg-teal-50/60 p-2 rounded-xl border border-teal-100">
                        <span className="text-[10px] text-teal-800 font-bold block mb-0.5">Stream Cost</span>
                        <div className="h-7 flex items-center justify-end font-mono font-bold text-teal-950 text-xs sm:text-sm">
                          ₹{r.rowCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                        </div>
                      </div>
                    </div>

                    {/* Solids Breakdown Grid: Fat, SNF, Sugar, Stab, TS, Acidity */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      <div className="bg-amber-50/60 p-2 rounded-xl border border-amber-100">
                        <span className="text-[10px] text-amber-900 font-bold block">Fat %</span>
                        <Input
                          type="number"
                          step="0.05"
                          value={r.fat}
                          onChange={(e) => handleUpdateCell(r.id, "fat", Number(e.target.value) || 0)}
                          className="h-6 text-xs font-mono text-right border-amber-200 bg-white px-1"
                        />
                        <span className="text-[9px] text-amber-800 font-mono block text-right pt-0.5">{r.kgFat} kg</span>
                      </div>

                      <div className="bg-blue-50/60 p-2 rounded-xl border border-blue-100">
                        <span className="text-[10px] text-blue-900 font-bold block">SNF %</span>
                        <Input
                          type="number"
                          step="0.05"
                          value={r.snf}
                          onChange={(e) => handleUpdateCell(r.id, "snf", Number(e.target.value) || 0)}
                          className="h-6 text-xs font-mono text-right border-blue-200 bg-white px-1"
                        />
                        <span className="text-[9px] text-blue-800 font-mono block text-right pt-0.5">{r.kgSnf} kg</span>
                      </div>

                      <div className="bg-pink-50/60 p-2 rounded-xl border border-pink-100">
                        <span className="text-[10px] text-pink-900 font-bold block">Sugar %</span>
                        <Input
                          type="number"
                          step="0.1"
                          value={r.sugar}
                          onChange={(e) => handleUpdateCell(r.id, "sugar", Number(e.target.value) || 0)}
                          className="h-6 text-xs font-mono text-right border-pink-200 bg-white px-1"
                        />
                        <span className="text-[9px] text-pink-800 font-mono block text-right pt-0.5">{r.kgSugar} kg</span>
                      </div>

                      <div className="bg-purple-50/60 p-2 rounded-xl border border-purple-100">
                        <span className="text-[10px] text-purple-900 font-bold block">Stab %</span>
                        <Input
                          type="number"
                          step="0.1"
                          value={r.stabilizer}
                          onChange={(e) => handleUpdateCell(r.id, "stabilizer", Number(e.target.value) || 0)}
                          className="h-6 text-xs font-mono text-right border-purple-200 bg-white px-1"
                        />
                        <span className="text-[9px] text-purple-800 font-mono block text-right pt-0.5">{r.kgStabilizer} kg</span>
                      </div>

                      <div className="bg-emerald-50/80 p-2 rounded-xl border border-emerald-200">
                        <span className="text-[10px] text-emerald-950 font-black block">Total Solids %</span>
                        <div className="h-6 flex items-center justify-end font-mono font-black text-emerald-900 text-xs">
                          {r.ts.toFixed(1)}%
                        </div>
                        <span className="text-[9px] text-emerald-800 font-mono block text-right pt-0.5">{r.kgTs} kg</span>
                      </div>

                      {/* Acidity Column (Mobile) */}
                      <div className="bg-rose-50/70 p-2 rounded-xl border border-rose-200">
                        <span className="text-[10px] text-rose-950 font-black block">Acidity % (LA)</span>
                        <Input
                          type="number"
                          step="0.005"
                          value={r.acidity}
                          onChange={(e) => handleUpdateCell(r.id, "acidity", Number(e.target.value) || 0)}
                          className="h-6 text-xs font-mono text-right border-rose-300 bg-white px-1 font-bold text-rose-900"
                        />
                        <span className="text-[9px] text-teal-900 font-mono font-bold block text-right pt-0.5">{r.kgAcidity} kg</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* 🌟 GRAND SUMMARY KPI CARDS (VERIFIED MASS BALANCE) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {/* Card 1: Total Solids */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white p-3 rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-black text-emerald-100 block">
                Total Solids (TS %)
              </span>
              <p className="text-xl sm:text-2xl font-black font-mono">{batchSummary.weightedTs}%</p>
              <div className="flex items-center justify-between text-[10px] text-emerald-100">
                <span>Target: {targetTsSum}%</span>
                <span className="font-bold">({batchSummary.totalKgTs} kg)</span>
              </div>
            </div>

            {/* Card 2: Fat */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-3 rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-black text-amber-100 block">
                Final Fat %
              </span>
              <p className="text-xl sm:text-2xl font-black font-mono">{batchSummary.weightedFat}%</p>
              <div className="flex items-center justify-between text-[10px] text-amber-100">
                <span>Target: {targetFat}%</span>
                <span className="font-bold">({batchSummary.totalKgFat} kg)</span>
              </div>
            </div>

            {/* Card 3: SNF */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-black text-blue-100 block">
                Final SNF %
              </span>
              <p className="text-xl sm:text-2xl font-black font-mono">{batchSummary.weightedSnf}%</p>
              <div className="flex items-center justify-between text-[10px] text-blue-100">
                <span>Target: {targetSnf}%</span>
                <span className="font-bold">({batchSummary.totalKgSnf} kg)</span>
              </div>
            </div>

            {/* Card 4: Sugar */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-3 rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-black text-pink-100 block">
                Final Sugar %
              </span>
              <p className="text-xl sm:text-2xl font-black font-mono">{batchSummary.weightedSugar}%</p>
              <div className="flex items-center justify-between text-[10px] text-pink-100">
                <span>Target: {targetSugar}%</span>
                <span className="font-bold">({batchSummary.totalKgSugar} kg)</span>
              </div>
            </div>

            {/* Card 5: Density & CLR */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-700 text-white p-3 rounded-2xl shadow-sm space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-black text-purple-100 block">
                Mix Density & CLR
              </span>
              <p className="text-xl sm:text-2xl font-black font-mono">{effectiveDensity} kg/L</p>
              <div className="flex items-center justify-between text-[10px] text-purple-100">
                <span>CLR: {batchSummary.weightedClr}</span>
                <span>{batchSummary.totalQty.toLocaleString()} {targetUnit}</span>
              </div>
            </div>

            {/* Card 6: Batch Acidity (% LA) - USER's PRIMARY REQUIREMENT */}
            <div className={cn(
              "p-3 rounded-2xl shadow-sm space-y-1 text-white transition-all",
              batchSummary.isAcidityHigh
                ? "bg-gradient-to-br from-rose-600 to-amber-700"
                : "bg-gradient-to-br from-teal-600 to-emerald-800"
            )}>
              <span className="text-[10px] uppercase tracking-wider font-black text-white/90 block">
                Batch Acidity (% LA)
              </span>
              <p className="text-xl sm:text-2xl font-black font-mono">{batchSummary.weightedAcidity}%</p>
              <div className="flex items-center justify-between text-[10px] text-white/90">
                <span>Target: {targetAcidity}%</span>
                <span className="font-bold">
                  {batchSummary.isAcidityHigh ? "⚠️ Neutralize" : "✓ Normal"}
                </span>
              </div>
            </div>
          </div>

          {/* 🧪 ACIDITY ADJUSTMENT & NEUTRALIZATION SYSTEM (FINAL RESULT) */}
          <div className={cn(
            "p-3.5 sm:p-4 rounded-2xl border shadow-sm transition-all space-y-3 w-full min-w-0 max-w-full",
            batchSummary.isAcidityHigh
              ? "bg-gradient-to-br from-rose-950/80 via-slate-900 to-amber-950/70 border-rose-500/60 text-white"
              : "bg-gradient-to-br from-slate-900 via-teal-950/60 to-slate-900 border-teal-500/40 text-white"
          )}>
            <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "p-1.5 rounded-xl text-white font-black text-xs flex items-center gap-1",
                  batchSummary.isAcidityHigh ? "bg-rose-600" : "bg-teal-600"
                )}>
                  <FlaskConical className="w-4 h-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xs sm:text-sm font-black text-white">
                      Acidity Adjustment & Neutralization System
                    </h3>
                    <Badge className={cn(
                      "text-[10px] font-black uppercase px-2 py-0.5",
                      batchSummary.isAcidityHigh ? "bg-rose-500 text-slate-950 animate-pulse" : "bg-emerald-500 text-slate-950"
                    )}>
                      {batchSummary.isAcidityHigh ? "⚠️ Neutralization Required" : "✓ Within FSSAI Range"}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Weighted blend acidity audit based on mass conservation and chemical neutralization stoichiometry
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="bg-black/40 px-2.5 py-1 rounded-xl border border-white/10">
                  Batch Acidity: <strong className={batchSummary.isAcidityHigh ? "text-rose-400" : "text-emerald-400"}>{batchSummary.weightedAcidity}% LA</strong>
                </span>
                <span className="bg-black/40 px-2.5 py-1 rounded-xl border border-white/10 text-slate-300">
                  Target Max: <strong className="text-amber-300">{targetAcidity}% LA</strong>
                </span>
              </div>
            </div>

            {/* Grid of Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 block mb-0.5">Total Lactic Acid Present</span>
                <strong className="text-xs sm:text-sm font-mono text-white">{batchSummary.totalKgAcidity} kg</strong>
                <span className="text-[10px] text-slate-400 block">in {batchSummary.totalQty.toLocaleString()} {targetUnit} batch</span>
              </div>

              <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 block mb-0.5">Acidity Deviation vs Target</span>
                <strong className={cn(
                  "text-xs sm:text-sm font-mono font-black",
                  batchSummary.acidityDiff > 0 ? "text-rose-400" : "text-emerald-400"
                )}>
                  {batchSummary.acidityDiff > 0 ? `+${batchSummary.acidityDiff}` : batchSummary.acidityDiff}% LA
                </strong>
                <span className="text-[10px] text-slate-400 block">
                  {batchSummary.isAcidityHigh ? "Exceeds standard spec" : "Within specification"}
                </span>
              </div>

              <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 block mb-0.5">Excess Lactic Acid to Neutralize</span>
                <strong className={cn(
                  "text-xs sm:text-sm font-mono font-black",
                  batchSummary.totalExcessLacticAcidGrams > 0 ? "text-amber-300" : "text-slate-400"
                )}>
                  {batchSummary.totalExcessLacticAcidGrams > 0 ? `${batchSummary.totalExcessLacticAcidGrams} g (${batchSummary.totalExcessLacticAcidKg} kg)` : "0 g (None)"}
                </strong>
                <span className="text-[10px] text-slate-400 block">Density corr. {effectiveDensity} kg/L</span>
              </div>

              <div className="bg-black/40 p-2 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 block mb-0.5">Primary Dosing (Baking Soda)</span>
                <strong className={cn(
                  "text-xs sm:text-sm font-mono font-black",
                  batchSummary.gramsNaHCO3 > 0 ? "text-emerald-300" : "text-slate-400"
                )}>
                  {batchSummary.gramsNaHCO3 > 0
                    ? batchSummary.kgNaHCO3 >= 1
                      ? `${batchSummary.kgNaHCO3} kg`
                      : `${Math.round(batchSummary.gramsNaHCO3)} g`
                    : "0 g (Not required)"}
                </strong>
                <span className="text-[10px] text-slate-400 block">NaHCO₃ (Food Grade)</span>
              </div>
            </div>

            {/* Chemical Neutralizer Dosing Table */}
            <div className="p-3 bg-black/50 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs flex-wrap gap-1">
                <span className="font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                  <Beaker className="w-3.5 h-3.5 text-amber-400" />
                  Chemical Neutralizer Dosing Options (Select Available Food-Grade Reagent):
                </span>
                <span className="text-[10px] text-slate-300">
                  Molecular Weight Stoichiometry with Lactic Acid C₃H₆O₃ (90.08 g/mol)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-mono">
                {/* 1. Sodium Bicarbonate */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <span className="font-bold text-emerald-300">1. Baking Soda (NaHCO₃)</span>
                    <Badge className="bg-emerald-600 text-white text-[9px] px-1.5 py-0">Recommended</Badge>
                  </div>
                  <div className="text-base font-black text-white">
                    {batchSummary.gramsNaHCO3 > 0
                      ? batchSummary.kgNaHCO3 >= 1
                        ? `${batchSummary.kgNaHCO3} kg`
                        : `${Math.round(batchSummary.gramsNaHCO3)} g`
                      : "0 g"}
                  </div>
                  <p className="text-[10px] font-sans text-slate-400">
                    Mildest neutralizer. Factor: 0.933 g NaHCO₃ / g Lactic Acid. Safe & clean taste.
                  </p>
                </div>

                {/* 2. Sodium Carbonate */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <span className="font-bold text-sky-300">2. Soda Ash (Na₂CO₃)</span>
                    <Badge className="bg-sky-700 text-white text-[9px] px-1.5 py-0">Standard</Badge>
                  </div>
                  <div className="text-base font-black text-white">
                    {batchSummary.gramsNa2CO3 > 0
                      ? batchSummary.kgNa2CO3 >= 1
                        ? `${batchSummary.kgNa2CO3} kg`
                        : `${Math.round(batchSummary.gramsNa2CO3)} g`
                      : "0 g"}
                  </div>
                  <p className="text-[10px] font-sans text-slate-400">
                    Dibasic neutralizer. Factor: 0.588 g Na₂CO₃ / g Lactic Acid. Economical.
                  </p>
                </div>

                {/* 3. Caustic Soda */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <span className="font-bold text-amber-300">3. Caustic Soda (NaOH)</span>
                    <Badge className="bg-amber-600 text-slate-950 text-[9px] px-1.5 py-0 font-bold">Industrial</Badge>
                  </div>
                  <div className="text-base font-black text-white">
                    {batchSummary.gramsNaOH > 0
                      ? batchSummary.kgNaOH >= 1
                        ? `${batchSummary.kgNaOH} kg`
                        : `${Math.round(batchSummary.gramsNaOH)} g`
                      : "0 g"}
                  </div>
                  <p className="text-[10px] font-sans text-slate-400">
                    Strong alkali. Factor: 0.444 g NaOH / g Lactic Acid. Strict safety precautions required.
                  </p>
                </div>
              </div>

              {/* SOP Dosing Guidelines */}
              <div className="mt-2 p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1 font-sans">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Industrial SOP Dosing Guidelines:
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[10.5px] text-slate-400">
                  <li>
                    Always prepare a <strong>10% w/v aqueous solution</strong> by dissolving the weighed neutralizer powder in clean potable water (approx. {batchSummary.gramsNaHCO3 > 0 ? (batchSummary.gramsNaHCO3 / 100).toFixed(1) : "0"} Liters water).
                  </li>
                  <li>
                    Cool solution to <strong>&lt; 10°C</strong> before addition. Never add concentrated alkali directly into hot milk or dry powder form.
                  </li>
                  <li>
                    Add slowly with continuous agitation to prevent localized protein precipitation (curdling) and soapy off-flavors.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🔍 MULTI-SOLIDS MASS BALANCE & DIAGNOSTICS TILES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {/* Tile 1: Total Solids Balance */}
            <Card className="border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 to-white shadow-xs">
              <CardHeader className="p-3 bg-emerald-100/50 border-b border-emerald-200/60 pb-2">
                <CardTitle className="text-xs font-bold text-emerald-950 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-emerald-700" />
                    1. Total Solids (TS Balance)
                  </span>
                  <Badge className={batchSummary.isTsMatched ? "bg-emerald-600 text-white text-[9px]" : "bg-amber-500 text-slate-950 text-[9px]"}>
                    {batchSummary.isTsMatched ? "Matched" : "Variance"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">Target vs Actual:</span>
                  <strong>{targetTsSum}% vs {batchSummary.weightedTs}%</strong>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">TS Mass Delivered:</span>
                  <strong>{batchSummary.totalKgTs} kg TS</strong>
                </div>
                <div className="flex justify-between text-slate-700 border-t pt-1">
                  <span className="font-sans">Giveaway Variance:</span>
                  <strong className={batchSummary.tsDiff > 0 ? "text-rose-600 font-bold" : "text-emerald-700"}>
                    {batchSummary.tsDiff > 0 ? `+${batchSummary.tsDiff}% (Giveaway)` : `${batchSummary.tsDiff}%`}
                  </strong>
                </div>
              </CardContent>
            </Card>

            {/* Tile 2: Fat & SNF Balance */}
            <Card className="border-amber-200/80 bg-gradient-to-br from-amber-50/40 to-white shadow-xs">
              <CardHeader className="p-3 bg-amber-100/50 border-b border-amber-200/60 pb-2">
                <CardTitle className="text-xs font-bold text-amber-950 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Milk className="w-3.5 h-3.5 text-amber-700" />
                    2. Fat & SNF Dairy Solids
                  </span>
                  <Badge className="bg-amber-500 text-slate-950 text-[9px]">
                    Ratio: {batchSummary.weightedSnf > 0 ? (batchSummary.weightedFat / batchSummary.weightedSnf).toFixed(2) : "0"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">Fat Mass:</span>
                  <strong>{batchSummary.totalKgFat} kg ({batchSummary.weightedFat}%)</strong>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">SNF Mass:</span>
                  <strong>{batchSummary.totalKgSnf} kg ({batchSummary.weightedSnf}%)</strong>
                </div>
                <div className="flex justify-between text-slate-700 border-t pt-1">
                  <span className="font-sans">CLR Reading:</span>
                  <strong className="text-amber-900">{batchSummary.weightedClr}</strong>
                </div>
              </CardContent>
            </Card>

            {/* Tile 3: Sweetener & Non-Dairy Solids */}
            <Card className="border-pink-200/80 bg-gradient-to-br from-pink-50/40 to-white shadow-xs">
              <CardHeader className="p-3 bg-pink-100/50 border-b border-pink-200/60 pb-2">
                <CardTitle className="text-xs font-bold text-pink-950 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-pink-700" />
                    3. Sweetener & Brix (POD)
                  </span>
                  <Badge className="bg-pink-600 text-white text-[9px]">
                    ~{(batchSummary.weightedSugar + batchSummary.weightedSnf * 0.55).toFixed(1)}° Brix
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">Added Sugar:</span>
                  <strong>{batchSummary.totalKgSugar} kg ({batchSummary.weightedSugar}%)</strong>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">Stabilizer:</span>
                  <strong>{batchSummary.totalKgStabilizer} kg ({batchSummary.weightedStabilizer}%)</strong>
                </div>
                <div className="flex justify-between text-slate-700 border-t pt-1">
                  <span className="font-sans">Sweetness Index:</span>
                  <strong className="text-pink-900">
                    {(batchSummary.weightedSugar * 1.0 + batchSummary.weightedSnf * 0.54 * 0.16).toFixed(1)} POD
                  </strong>
                </div>
              </CardContent>
            </Card>

            {/* Tile 4: Acidity Adjustment System */}
            <Card className={cn(
              "shadow-xs transition-all",
              batchSummary.isAcidityHigh
                ? "border-rose-300 bg-gradient-to-br from-rose-50/60 to-white"
                : "border-teal-200/80 bg-gradient-to-br from-teal-50/40 to-white"
            )}>
              <CardHeader className={cn(
                "p-3 border-b pb-2",
                batchSummary.isAcidityHigh ? "bg-rose-100/60 border-rose-200" : "bg-teal-100/50 border-teal-200/60"
              )}>
                <CardTitle className="text-xs font-bold flex items-center justify-between text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <FlaskConical className={cn("w-3.5 h-3.5", batchSummary.isAcidityHigh ? "text-rose-700" : "text-teal-700")} />
                    4. Acidity System
                  </span>
                  <Badge className={batchSummary.isAcidityHigh ? "bg-rose-600 text-white text-[9px]" : "bg-emerald-600 text-white text-[9px]"}>
                    {batchSummary.isAcidityHigh ? "Dosing Req" : "Compliant"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">Batch Titratable Acidity:</span>
                  <strong className={batchSummary.isAcidityHigh ? "text-rose-700 font-bold" : "text-emerald-700"}>
                    {batchSummary.weightedAcidity}% LA
                  </strong>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="font-sans">Total Pure Lactic Acid:</span>
                  <strong>{batchSummary.totalKgAcidity} kg</strong>
                </div>
                <div className="flex justify-between text-slate-700 border-t pt-1">
                  <span className="font-sans">Baking Soda Antidote:</span>
                  <strong className={batchSummary.gramsNaHCO3 > 0 ? "text-amber-800 font-bold" : "text-slate-500"}>
                    {batchSummary.gramsNaHCO3 > 0 ? `${Math.round(batchSummary.gramsNaHCO3)} g` : "0 g"}
                  </strong>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 2: PROBLEM SOLVERS & PLANT SCENARIOS */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="scenarios" className="space-y-4 pt-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Scenario 1: Solids Giveaway & Yield Cost Saver */}
            <Card className="border-purple-200 shadow-sm bg-gradient-to-br from-purple-50/50 to-white">
              <CardHeader className="p-4 bg-purple-100/60 border-b border-purple-200">
                <CardTitle className="text-sm font-bold text-purple-950 flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-purple-700" />
                  Solids Giveaway & Financial Loss Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  When actual Total Solids (TS) or Fat exceed formulation specifications by even 0.2% - 0.5%, commercial dairies lose lakhs of rupees every month in unbilled giveaway.
                </p>
                <div className="p-3 bg-white rounded-xl border border-purple-200 space-y-2 font-mono">
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Batch Size:</span>
                    <strong className="text-slate-900">{batchSummary.totalQty.toLocaleString()} kg/L</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Target TS vs Actual TS:</span>
                    <strong>{targetTsSum}% vs {batchSummary.weightedTs}%</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>TS Giveaway Variance:</span>
                    <strong className={batchSummary.tsDiff > 0 ? "text-rose-600" : "text-emerald-600"}>
                      {batchSummary.tsDiff > 0 ? `+${batchSummary.tsDiff}% (Excess Giveaway)` : `${batchSummary.tsDiff}% (Normal)`}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700 border-t pt-1.5">
                    <span>Extra Dry Solids Given Away:</span>
                    <strong className="text-rose-700">
                      {Math.max(0, (batchSummary.tsDiff * batchSummary.totalQty) / 100).toFixed(1)} kg TS / batch
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-900 font-bold bg-rose-50 p-2 rounded-lg border border-rose-200">
                    <span>Financial Loss (at ₹300/kg TS):</span>
                    <strong className="text-rose-700 text-sm">
                      ₹{((Math.max(0, (batchSummary.tsDiff * batchSummary.totalQty) / 100) * 300)).toLocaleString("en-IN", { maximumFractionDigits: 0 })} / batch
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 2: Low SNF / Watery Curd Quick Rescue */}
            <Card className="border-blue-200 shadow-sm bg-gradient-to-br from-blue-50/50 to-white">
              <CardHeader className="p-4 bg-blue-100/60 border-b border-blue-200">
                <CardTitle className="text-sm font-bold text-blue-950 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-700" />
                  Low SNF / Watery Curd Vat Rescue Solver
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  If the milk in your vat is already loaded and laboratory testing reveals SNF is below standard (causing watery, fragile curd), compute the exact SMP addition required:
                </p>
                <div className="p-3 bg-white rounded-xl border border-blue-200 space-y-2 font-mono">
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Target SNF:</span>
                    <strong className="text-blue-900">{targetSnf}%</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Current Blend SNF:</span>
                    <strong>{batchSummary.weightedSnf}%</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>SNF Deficit:</span>
                    <strong className="text-blue-700">
                      {Math.max(0, targetSnf - batchSummary.weightedSnf).toFixed(2)}%
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-900 font-bold bg-blue-50 p-2 rounded-lg border border-blue-200 border-t">
                    <span>SMP Powder Required to Rescue:</span>
                    <strong className="text-blue-900 text-sm">
                      {((Math.max(0, targetSnf - batchSummary.weightedSnf) * batchSummary.totalQty) / 95).toFixed(2)} kg SMP
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 3: Sugar Brix & Sweetness Index (POD/PAC) */}
            <Card className="border-pink-200 shadow-sm bg-gradient-to-br from-pink-50/50 to-white">
              <CardHeader className="p-4 bg-pink-100/60 border-b border-pink-200">
                <CardTitle className="text-sm font-bold text-pink-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-700" />
                  Sugar Brix & Sweetness Index (POD / PAC)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  Calculates perceived sweetness power (POD) and freezing point depression factor (PAC) for ice cream, kulfi and sweetened curd:
                </p>
                <div className="p-3 bg-white rounded-xl border border-pink-200 space-y-2 font-mono">
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Sucrose Content:</span>
                    <strong>{batchSummary.weightedSugar}%</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Lactose from Milk SNF (~54%):</span>
                    <strong>{(batchSummary.weightedSnf * 0.54).toFixed(1)}% Lactose</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Total Soluble Solids (Refractometer Brix):</span>
                    <strong className="text-pink-900">
                      ~{(batchSummary.weightedSugar + (batchSummary.weightedSnf * 0.55)).toFixed(1)}° Brix
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-900 font-bold bg-pink-50 p-2 rounded-lg border border-pink-200">
                    <span>Perceived Relative Sweetness (POD):</span>
                    <strong className="text-pink-900 text-sm">
                      {(batchSummary.weightedSugar * 1.0 + (batchSummary.weightedSnf * 0.54 * 0.16)).toFixed(1)} POD
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 4: Ice Cream Freezing Point Depression & Overrun */}
            <Card className="border-teal-200 shadow-sm bg-gradient-to-br from-teal-50/50 to-white">
              <CardHeader className="p-4 bg-teal-100/60 border-b border-teal-200">
                <CardTitle className="text-sm font-bold text-teal-950 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-teal-700" />
                  Ice Cream Freezing Point Depression & Overrun
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  High sugar and serum solids depress freezing point, controlling soft scoopability in deep freezers (-18°C) and batch volume overrun:
                </p>
                <div className="p-3 bg-white rounded-xl border border-teal-200 space-y-2 font-mono">
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Water Fraction in Mix:</span>
                    <strong>{(100 - batchSummary.weightedTs).toFixed(1)}%</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Initial Freezing Point:</span>
                    <strong className="text-teal-900">
                      -{(1.86 * (batchSummary.weightedSugar / 342.3 + (batchSummary.weightedSnf * 0.54) / 342.3) * (100 / Math.max(1, 100 - batchSummary.weightedTs))).toFixed(2)}°C
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Yield at 100% Commercial Overrun:</span>
                    <strong>{(batchSummary.totalQty * 2.0).toLocaleString()} Liters finished ice cream</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-900 font-bold bg-teal-50 p-2 rounded-lg border border-teal-200">
                    <span>Cost per 1 Liter Frozen Tub (100% Overrun):</span>
                    <strong className="text-teal-900 text-sm">
                      ₹{(batchSummary.costPerLiter / 2).toFixed(2)} / L
                    </strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 5: Batch Acidity Neutralization & Sour Mix Stabilization Solver */}
            <Card className="border-amber-300 shadow-md bg-gradient-to-br from-amber-50/70 via-orange-50/30 to-white md:col-span-2 rounded-2xl overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-transparent border-b border-amber-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-sm font-bold text-amber-950 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-amber-700" />
                    Scenario 5: Batch Acidity Neutralization & Sour Mix Stabilization Solver
                  </CardTitle>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setScenario5Volume(batchSummary.totalQty);
                      setScenario5InitialAcidity(batchSummary.weightedAcidity);
                      setScenario5TargetAcidity(targetAcidity);
                    }}
                    className="h-7 text-xs bg-white text-amber-900 border-amber-300 hover:bg-amber-100/60 shadow-xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5 mr-1 text-amber-700" />
                    Sync Current Master Batch ({batchSummary.totalQty.toLocaleString()} kg @ {batchSummary.weightedAcidity}% LA)
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 space-y-4 text-xs">
                <p className="text-slate-700">
                  When incoming raw milk, cream, or curd mix develops excess lactic acid due to warm ambient temperatures or microbial growth, heating during pasteurization or UHT causes protein destabilization and curd precipitation. This tool calculates the exact stoichiometric neutralizer required to bring acidity safely down to standard.
                </p>

                {/* Interactive Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white p-3.5 rounded-xl border border-amber-200 shadow-xs">
                  <div className="space-y-1">
                    <Label className="text-[11px] font-bold text-slate-700">Batch Quantity (Liters / kg):</Label>
                    <Input
                      type="number"
                      min="1"
                      step="50"
                      value={scenario5Volume}
                      onChange={(e) => setScenario5Volume(Math.max(1, Number(e.target.value) || 0))}
                      className="h-8 font-mono text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-[11px] font-bold text-slate-700">Current Measured Acidity (% LA):</Label>
                    <Input
                      type="number"
                      min="0.05"
                      max="1.5"
                      step="0.01"
                      value={scenario5InitialAcidity}
                      onChange={(e) => setScenario5InitialAcidity(Number(e.target.value) || 0)}
                      className="h-8 font-mono text-xs text-rose-600 font-bold"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-[11px] font-bold text-slate-700">Target Maximum Acidity (% LA):</Label>
                    <Input
                      type="number"
                      min="0.05"
                      max="1.5"
                      step="0.01"
                      value={scenario5TargetAcidity}
                      onChange={(e) => setScenario5TargetAcidity(Number(e.target.value) || 0)}
                      className="h-8 font-mono text-xs text-emerald-700 font-bold"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-[11px] font-bold text-slate-700">Food-Grade Neutralizer:</Label>
                    <Select
                      value={scenario5Neutralizer}
                      onValueChange={(v: "nahco3" | "na2co3" | "naoh") => setScenario5Neutralizer(v)}
                    >
                      <SelectTrigger className="h-8 text-xs font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nahco3">Baking Soda (NaHCO₃) - Recommended</SelectItem>
                        <SelectItem value="na2co3">Soda Ash (Na₂CO₃) - Dibasic</SelectItem>
                        <SelectItem value="naoh">Caustic Soda (NaOH) - High Caution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Calculation Output Cards */}
                {(() => {
                  const deltaAcidity = Math.max(0, scenario5InitialAcidity - scenario5TargetAcidity);
                  // Approx density of 1.03 kg/L for volumetric milk batches
                  const massKg = scenario5Volume * 1.030;
                  const excessLacticAcidKg = (massKg * deltaAcidity) / 100;
                  const excessLacticAcidGrams = excessLacticAcidKg * 1000;

                  // Stoichiometric factors (grams reagent per gram pure lactic acid MW 90.08)
                  // NaHCO3: 84.01 / 90.08 = 0.9326
                  // Na2CO3: 105.99 / (2 * 90.08) = 0.5883
                  // NaOH: 40.00 / 90.08 = 0.4441
                  const factor =
                    scenario5Neutralizer === "nahco3"
                      ? 0.9326
                      : scenario5Neutralizer === "na2co3"
                      ? 0.5883
                      : 0.4441;

                  const neutralizerDoseGrams = excessLacticAcidGrams * factor;
                  const neutralizerDoseKg = neutralizerDoseGrams / 1000;
                  // Water volume for 10% solution (100g in 1L water)
                  const waterLitersFor10Pct = neutralizerDoseGrams / 100;

                  return (
                    <div className="space-y-3 font-mono">
                      {deltaAcidity <= 0 ? (
                        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-sans">
                            Acidity is already compliant (Initial {scenario5InitialAcidity}% ≤ Target {scenario5TargetAcidity}%). No chemical neutralization required.
                          </span>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="p-3 bg-white rounded-xl border border-amber-200">
                            <span className="text-[10px] text-slate-500 font-sans block">Acidity Delta to Strip:</span>
                            <strong className="text-amber-800 text-sm">
                              -{deltaAcidity.toFixed(3)}% LA
                            </strong>
                            <span className="text-[10px] text-slate-400 block mt-0.5">
                              From {scenario5InitialAcidity}% to {scenario5TargetAcidity}%
                            </span>
                          </div>

                          <div className="p-3 bg-white rounded-xl border border-rose-200">
                            <span className="text-[10px] text-slate-500 font-sans block">Excess Lactic Acid Mass:</span>
                            <strong className="text-rose-700 text-sm">
                              {excessLacticAcidGrams >= 1000 ? `${excessLacticAcidKg.toFixed(2)} kg` : `${excessLacticAcidGrams.toFixed(1)} g`}
                            </strong>
                            <span className="text-[10px] text-slate-400 block mt-0.5">
                              Across {massKg.toFixed(0)} kg mix mass
                            </span>
                          </div>

                          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-300">
                            <span className="text-[10px] text-amber-900 font-sans block font-semibold">
                              {scenario5Neutralizer === "nahco3" ? "Baking Soda (NaHCO₃)" : scenario5Neutralizer === "na2co3" ? "Soda Ash (Na₂CO₃)" : "Caustic Soda (NaOH)"} Dose:
                            </span>
                            <strong className="text-amber-950 text-base font-bold">
                              {neutralizerDoseGrams >= 1000 ? `${neutralizerDoseKg.toFixed(3)} kg` : `${neutralizerDoseGrams.toFixed(1)} g`}
                            </strong>
                            <span className="text-[10px] text-amber-800/80 block mt-0.5">
                              Stoichiometric 100% active dose
                            </span>
                          </div>

                          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                            <span className="text-[10px] text-blue-900 font-sans block font-semibold">
                              10% w/v Prep Solution:
                            </span>
                            <strong className="text-blue-950 text-sm font-bold">
                              {waterLitersFor10Pct.toFixed(1)} L Potable Water
                            </strong>
                            <span className="text-[10px] text-blue-700 block mt-0.5">
                              Dissolve @ 40-45°C warm water
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Plant SOP Protocol Checklist */}
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2 text-slate-700 font-sans">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          Dairy Plant Neutralization SOP (Standard Operating Procedure)
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-600">
                          <li>
                            <strong>Never add dry powder directly to milk vat:</strong> Local concentration spikes will precipitate casein curd clumps and impart a bitter soapy taste.
                          </li>
                          <li>
                            <strong>Solution Preparation:</strong> Dissolve {neutralizerDoseGrams.toFixed(0)} g of food-grade {scenario5Neutralizer === "nahco3" ? "Sodium Bicarbonate" : scenario5Neutralizer === "na2co3" ? "Sodium Carbonate" : "Sodium Hydroxide"} in ~{Math.max(1, waterLitersFor10Pct).toFixed(1)} Liters of clean warm water (40°C - 45°C) to prepare a clear 10% solution.
                          </li>
                          <li>
                            <strong>Vat Dosing:</strong> Turn on mechanical agitation at moderate speed. Pour the dissolved solution slowly in a thin, continuous stream right in front of the agitator blade over 8–10 minutes.
                          </li>
                          <li>
                            <strong>Agitation & Testing:</strong> Agitate vigorously for at least 15 minutes before pasteurization or curd setting. Draw a representative sample and verify titratable acidity with 0.1 N NaOH to confirm compliance.
                          </li>
                          {scenario5Neutralizer === "nahco3" && (
                            <li className="text-amber-800 font-medium">
                              <strong>CO₂ Degassing Notice:</strong> Bicarbonate reaction produces carbon dioxide gas effervescence. Ensure vat vent is open during agitation before heat treatment.
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 3: COMMERCIAL ECONOMICS & MARGIN MASTER */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="economics" className="space-y-4 pt-1">
          <Card className="border border-slate-200 shadow-md bg-white rounded-2xl">
            <CardHeader className="p-4 bg-gradient-to-r from-emerald-950 to-slate-900 text-white border-b border-slate-800">
              <CardTitle className="text-sm font-bold flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Commercial Economics & Profit Margin Master
                </span>
                <span className="text-xs font-mono text-emerald-300">
                  Total Batch Cost: ₹{batchSummary.totalBatchCost.toLocaleString()}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-6">
              {/* Cost Inputs & Margin Slider */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700">Processing Overhead (₹/L or kg):</Label>
                  <Input
                    type="number"
                    step="0.2"
                    value={processingOverheadPerUnit}
                    onChange={(e) => setProcessingOverheadPerUnit(Number(e.target.value) || 0)}
                    className="h-8 font-mono text-xs"
                  />
                  <p className="text-[10px] text-slate-500">Steam, electricity, chilling & labor</p>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700">Packaging Cup/Pouch Cost (₹/pack):</Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={packagingUnitCost}
                    onChange={(e) => setPackagingUnitCost(Number(e.target.value) || 0)}
                    className="h-8 font-mono text-xs"
                  />
                  <p className="text-[10px] text-slate-500">Cup, heat seal foil, spoon & master carton</p>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700">Pack Size (kg or L):</Label>
                  <Input
                    type="number"
                    step="0.05"
                    value={packagingUnitSize}
                    onChange={(e) => setPackagingUnitSize(Number(e.target.value) || 0.2)}
                    className="h-8 font-mono text-xs"
                  />
                  <p className="text-[10px] text-slate-500">e.g. 0.20 kg (200g cup) or 0.50 L</p>
                </div>
              </div>

              {/* Gross Margin Slider */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <Label className="font-bold text-slate-800">Target Factory Gross Margin (%):</Label>
                  <span className="font-mono font-black text-emerald-800 text-sm">{targetGrossMarginPct}%</span>
                </div>
                <Slider
                  value={[targetGrossMarginPct]}
                  onValueChange={(val) => setTargetGrossMarginPct(val[0])}
                  min={10}
                  max={60}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Economic Computations */}
              {(() => {
                const totalUnitsInBatch =
                  packagingUnitSize > 0 ? Math.floor(batchSummary.totalQty / packagingUnitSize) : 0;
                const rawCostPerPack = batchSummary.costPerKg * packagingUnitSize;
                const overheadPerPack = processingOverheadPerUnit * packagingUnitSize;
                const totalPackCogs = rawCostPerPack + overheadPerPack + packagingUnitCost;

                const exFactoryPrice = totalPackCogs / (1 - targetGrossMarginPct / 100);
                const retailMrp = exFactoryPrice * (1 + retailMarkupPct / 100);

                const batchGrossProfit = (exFactoryPrice - totalPackCogs) * totalUnitsInBatch;
                const monthlyProfitEstimate = batchGrossProfit * 25; // 25 production days

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="bg-purple-50 p-3.5 rounded-xl border border-purple-200 space-y-1">
                      <span className="text-[10px] text-purple-700 font-bold uppercase block">
                        COGS per Pack ({packagingUnitSize * 1000}g)
                      </span>
                      <strong className="text-xl font-mono text-purple-950">₹{totalPackCogs.toFixed(2)}</strong>
                      <span className="text-[10px] text-slate-500 block">
                        Raw: ₹{rawCostPerPack.toFixed(1)} | Pack: ₹{packagingUnitCost}
                      </span>
                    </div>

                    <div className="bg-indigo-50 p-3.5 rounded-xl border border-indigo-200 space-y-1">
                      <span className="text-[10px] text-indigo-700 font-bold uppercase block">
                        Ex-Factory Wholesale Price
                      </span>
                      <strong className="text-xl font-mono text-indigo-950">₹{exFactoryPrice.toFixed(2)}</strong>
                      <span className="text-[10px] text-indigo-600 block">
                        At {targetGrossMarginPct}% factory margin
                      </span>
                    </div>

                    <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 space-y-1">
                      <span className="text-[10px] text-emerald-700 font-bold uppercase block">
                        Recommended Retail MRP
                      </span>
                      <strong className="text-xl font-mono text-emerald-950">₹{Math.ceil(retailMrp)}</strong>
                      <span className="text-[10px] text-slate-500 block">
                        Allows {retailMarkupPct}% trade margin
                      </span>
                    </div>

                    <div className="bg-teal-50 p-3.5 rounded-xl border border-teal-200 space-y-1">
                      <span className="text-[10px] text-teal-700 font-bold uppercase block">
                        Net Profit per Batch
                      </span>
                      <strong className="text-xl font-mono text-teal-950">
                        ₹{batchGrossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                      </strong>
                      <span className="text-[10px] text-teal-700 block">
                        ~₹{monthlyProfitEstimate.toLocaleString("en-IN", { maximumFractionDigits: 0 })}/month
                      </span>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 4: PLANT SOP & QUALITY ASSURANCE AUDIT */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="audit" className="space-y-4 pt-1">
          <div ref={printAreaRef} className="space-y-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
            {/* Header info in Print Area */}
            <div className="flex items-center justify-between border-b pb-3 flex-wrap gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  Industrial Batch Standard Operating Procedure (SOP)
                </h3>
                <p className="text-xs text-slate-500">
                  Standardized Blending Protocol & QA Release Audit for Commercial Production
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePrint}
                  className="h-8 text-xs font-bold gap-1 rounded-xl"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  Print SOP
                </Button>
                <Button
                  size="sm"
                  onClick={handleDownloadPdf}
                  disabled={isDownloading}
                  className="h-8 text-xs font-bold gap-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-white" />
                  {isDownloading ? "Generating..." : "Download PDF"}
                </Button>
              </div>
            </div>

            {/* 7-Stage Chronological Blending Sequence */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Chronological Blending Sequence
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Stage 1: Base Milk Reception & Tempering</span>
                  <p className="text-slate-600 text-[11px]">
                    Pump base liquid milk ({batchSummary.computedRows.find((r) => r.isBase)?.qty || 0} kg) into the process vat. Warm to 40°C - 45°C. Never dissolve dry powders into cold milk below 30°C.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Stage 2: Dry Pre-blend Preparation</span>
                  <p className="text-slate-600 text-[11px]">
                    Thoroughly dry-blend all stabilizer/emulsifier powder with 2x to 3x its weight of granulated sugar. This prevents "fish-eye" lumps when contacting liquid milk.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Stage 3: High-Shear Powder Dispersion</span>
                  <p className="text-slate-600 text-[11px]">
                    Turn on the high-shear tri-blender or recirculation venturi funnel. Slowly draw in SMP powder and the dry sugar-stabilizer mix. Recirculate for 10-15 minutes until completely smooth.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Stage 4: Fresh Cream / Fat Addition</span>
                  <p className="text-slate-600 text-[11px]">
                    Pump in fresh cream ({batchSummary.computedRows.find((r) => r.role === "fat_booster")?.qty || 0} kg) and remaining granulated sugar. Agitate continuously for complete dissolution.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Stage 5: Two-Stage Homogenization</span>
                  <p className="text-slate-600 text-[11px]">
                    Pass mix through a high-pressure homogenizer at 65°C - 70°C. Stage 1: 150-180 bar (breaks fat globules); Stage 2: 35-50 bar (prevents clumping).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Stage 6: Thermal Pasteurization</span>
                  <p className="text-slate-600 text-[11px]">
                    For Sweet Curd: Heat to 85°C for 20-30 mins or 90°C for 5 mins (denatures whey proteins for firm curd set). For Ice Cream: 82°C for 20 seconds.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1 sm:col-span-2">
                  <span className="font-bold text-slate-900 block">Stage 7: Inoculation / Aging & Packaging</span>
                  <p className="text-slate-600 text-[11px]">
                    For Dahi: Cool immediately to 42°C - 43°C. Inoculate with active thermophilic starter culture. Fill into retail cups and incubate at 42°C for 4.5 - 5 hours until pH 4.5. For Ice Cream: Cool to 4°C and age for 4-24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* QA Interactive Checklist */}
            <div className="space-y-3 pt-2 border-t">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>2. QA Release Checklist</span>
                <span className="text-[10px] text-slate-500 font-normal">Check off before batch dispatch</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { key: "rawMilkTemp", label: "Base milk organoleptic & MBRT quality approved" },
                  { key: "fatSnfVerified", label: `Batch Fat (${batchSummary.weightedFat}%) & SNF (${batchSummary.weightedSnf}%) verified by Gerber/Lactometer` },
                  { key: "sugarDissolution", label: `Total Solids refractometer brix verified (${batchSummary.weightedTs}% TS)` },
                  { key: "homoPressure", label: "Homogenizer stage 1 (180 bar) and stage 2 (35 bar) recorded" },
                  { key: "pasteurTemp", label: "Pasteurization chart recorder temperature & holding time approved" },
                  { key: "microOrganoTest", label: "Finished product taste, texture, viscosity and acidity passed" },
                  { key: "packagingSeal", label: "Cup foil hermetic heat seal & batch coding verified" }
                ].map((item) => (
                  <label
                    key={item.key}
                    onClick={() =>
                      setQaChecks((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                    }
                    className={cn(
                      "flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer select-none transition-all",
                      qaChecks[item.key]
                        ? "bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    <div
                      className={cn(
                        "w-4 h-4 rounded border flex items-center justify-center shrink-0",
                        qaChecks[item.key]
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-slate-300 bg-white"
                      )}
                    >
                      {qaChecks[item.key] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-[11px] leading-tight">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdvancedStandardizationCalc;
