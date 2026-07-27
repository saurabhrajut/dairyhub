"use client";

import React, { useState, useMemo, useRef } from "react";
import { 
  Calculator, Plus, Trash2, Printer, Download, FileText, 
  Beaker, RefreshCw, CheckCircle, Scale, Droplet, Sparkles,
  Info, Loader2, FileDown, Layers, Percent, Flame, Building2,
  Calendar, Award, ChevronRight, AlertCircle, Save, FolderOpen,
  ChevronDown, ChevronUp, SlidersHorizontal, Milk, DollarSign, Package,
  CheckCircle2, IndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { savePdfFile } from "@/lib/mobile-download";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { snfFormulas } from "@/lib/data";
import { ScrollArea } from "@/components/ui/scroll-area";

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mt-2 bg-slate-50/50">
        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);

// Preset Product Recipes
export interface ProductPreset {
  id: string;
  name: string;
  category: string;
  targetFat: number;
  targetSnf: number;
  targetSugar: number;
  targetAdditives: number;
  description: string;
}

const PRODUCT_PRESETS: ProductPreset[] = [
  {
    id: "sweet-curd",
    name: "Sweet Curd (Mishti Doi)",
    category: "Fermented Products",
    targetFat: 3.5,
    targetSnf: 9.5,
    targetSugar: 12.0,
    targetAdditives: 0.0,
    description: "Standard formulation for rich Sweet Curd / Mishti Doi (TS ~ 25.0%)"
  },
  {
    id: "sweet-lassi",
    name: "Commercial Sweet Lassi",
    category: "Fermented Drinks",
    targetFat: 2.5,
    targetSnf: 8.5,
    targetSugar: 10.0,
    targetAdditives: 0.2,
    description: "Refreshing Lassi formulation with standard viscosity and sweetness (TS ~ 21.2%)"
  },
  {
    id: "flavored-milk",
    name: "Flavored Milk (Chocolate / Elaichi)",
    category: "Beverages",
    targetFat: 1.5,
    targetSnf: 8.5,
    targetSugar: 8.0,
    targetAdditives: 1.0,
    description: "Double Toned Flavored Milk formulation with added cocoa/stabilizer (TS ~ 19.0%)"
  },
  {
    id: "ice-cream-mix",
    name: "Standard Ice Cream Mix (10% Fat)",
    category: "Frozen Desserts",
    targetFat: 10.0,
    targetSnf: 11.0,
    targetSugar: 14.0,
    targetAdditives: 0.5,
    description: "Balanced Ice Cream mix formulation (Total Solids ~ 35.5%)"
  },
  {
    id: "sweetened-condensed",
    name: "Sweetened Condensed Milk Base",
    category: "Concentrated Products",
    targetFat: 9.0,
    targetSnf: 22.0,
    targetSugar: 44.0,
    targetAdditives: 0.0,
    description: "High solids condensed milk mix formulation (Total Solids ~ 75.0%)"
  }
];

export function AdvancedStandardizationCalc() {
  const { toast } = useToast();
  const printAreaRef = useRef<HTMLDivElement>(null);

  // Batch Configuration
  const [selectedPresetId, setSelectedPresetId] = useState<string>("sweet-curd");
  const [targetBatchVolume, setTargetBatchVolume] = useState<string>("1000"); // Liters or Kg
  const [targetUnit, setTargetUnit] = useState<"kg" | "liters">("liters");
  const [batchDensity, setBatchDensity] = useState<string>("1.055"); // kg/L for sweet mix

  // Target Percentages
  const [targetFat, setTargetFat] = useState<string>("3.5");
  const [targetSnf, setTargetSnf] = useState<string>("9.5");
  const [targetSugar, setTargetSugar] = useState<string>("12.0");
  const [targetAdditives, setTargetAdditives] = useState<string>("0.0");

  // SNF Formula Selection (including Custom option)
  const [selectedSnfFormulaKey, setSelectedSnfFormulaKey] = useState<string>("isi");
  const [customFatMultiplier, setCustomFatMultiplier] = useState<string>("0.25");
  const [customConstant, setCustomConstant] = useState<string>("0.44");

  // Primary Base Ingredient Selection (Whole Milk, Cream, Rich Milk, Skimmed Milk, Water)
  const [primaryBaseType, setPrimaryBaseType] = useState<string>("whole_milk");

  // Single Combo Selection for Correction Ingredients (Cream+SMP, Cream+Skim, Rich+SMP, etc.)
  const [correctionCombo, setCorrectionCombo] = useState<string>("cream_smp");

  // Selection for Adjustment Ingredients
  const [fatAdjuster, setFatAdjuster] = useState<"cream" | "rich_milk">("cream");
  const [snfAdjuster, setSnfAdjuster] = useState<"smp" | "skim_milk">("smp");

  // Manual Editable Component Names
  const [fatAdjName, setFatAdjName] = useState<string>("Fresh Cream");
  const [snfAdjName, setSnfAdjName] = useState<string>("SMP Powder");

  const handleComboChange = (combo: string) => {
    setCorrectionCombo(combo);
    setShowResults(false);
    if (combo === "cream_smp") {
      setFatAdjuster("cream");
      setSnfAdjuster("smp");
      setFatAdjName("Fresh Cream");
      setSnfAdjName("SMP Powder");
    } else if (combo === "cream_skim") {
      setFatAdjuster("cream");
      setSnfAdjuster("skim_milk");
      setFatAdjName("Fresh Cream");
      setSnfAdjName("Skimmed Milk");
    } else if (combo === "rich_smp") {
      setFatAdjuster("rich_milk");
      setSnfAdjuster("smp");
      setFatAdjName("Rich Whole Milk");
      setSnfAdjName("SMP Powder");
    } else if (combo === "rich_skim") {
      setFatAdjuster("rich_milk");
      setSnfAdjuster("skim_milk");
      setFatAdjName("Rich Whole Milk");
      setSnfAdjName("Skimmed Milk");
    } else if (combo === "custom") {
      setFatAdjName("Custom Fat Agent");
      setSnfAdjName("Custom SNF Agent");
    }
  };

  // Raw Materials Specs
  const [baseMilkFat, setBaseMilkFat] = useState<string>("4.0");
  const [baseMilkSnf, setBaseMilkSnf] = useState<string>("8.5");
  const [baseMilkClr, setBaseMilkClr] = useState<string>("28.0");
  const [baseMilkDensity, setBaseMilkDensity] = useState<string>("1.028");
  const [calcSnfMode, setCalcSnfMode] = useState<"direct" | "clr">("direct");

  const handlePrimaryBaseChange = (val: string) => {
    setPrimaryBaseType(val);
    setShowResults(false);
    if (val === "whole_milk") {
      setBaseMilkFat("4.0");
      setBaseMilkSnf("8.5");
      setBaseMilkClr("28.0");
      setBaseMilkDensity("1.028");
    } else if (val === "cream") {
      setBaseMilkFat("40.0");
      setBaseMilkSnf("5.4");
      setBaseMilkClr("10.0");
      setBaseMilkDensity("0.980");
    } else if (val === "rich_milk") {
      setBaseMilkFat("6.0");
      setBaseMilkSnf("9.0");
      setBaseMilkClr("29.0");
      setBaseMilkDensity("1.031");
    } else if (val === "skim_milk") {
      setBaseMilkFat("0.1");
      setBaseMilkSnf("8.8");
      setBaseMilkClr("34.0");
      setBaseMilkDensity("1.034");
    } else if (val === "water") {
      setBaseMilkFat("0.0");
      setBaseMilkSnf("0.0");
      setBaseMilkClr("0.0");
      setBaseMilkDensity("1.000");
    }
  };

  const getPrimaryBaseLabel = (type: string) => {
    switch (type) {
      case "cream": return "Heavy Cream Base";
      case "rich_milk": return "Rich Whole Milk Base";
      case "skim_milk": return "Skimmed Milk Base";
      case "water": return "Base Water";
      default: return "Base Milk";
    }
  };

  const [creamFat, setCreamFat] = useState<string>("40.0");
  const [creamSnf, setCreamSnf] = useState<string>("5.4");

  const [richMilkFat, setRichMilkFat] = useState<string>("6.0");
  const [richMilkSnf, setRichMilkSnf] = useState<string>("9.0");
  const [richMilkClr, setRichMilkClr] = useState<string>("29.0");
  const [richMilkDensity, setRichMilkDensity] = useState<string>("1.031");

  const [smpSnf, setSmpSnf] = useState<string>("96.0");
  const [smpFat, setSmpFat] = useState<string>("0.5");

  const [skimMilkFat, setSkimMilkFat] = useState<string>("0.1");
  const [skimMilkSnf, setSkimMilkSnf] = useState<string>("8.8");
  const [skimMilkClr, setSkimMilkClr] = useState<string>("34.0");
  const [skimMilkDensity, setSkimMilkDensity] = useState<string>("1.034");

  const [sugarTs, setSugarTs] = useState<string>("100.0");
  const [additiveTs, setAdditiveTs] = useState<string>("100.0");
  const [waterChoice, setWaterChoice] = useState<"auto" | "none">("auto");

  // Collapsible Dropdown Open/Close State for Adjustment Components, Costing Specs & Calculation Process
  const [openAdjustmentSpecs, setOpenAdjustmentSpecs] = useState<boolean>(false);
  const [openCostingSpecs, setOpenCostingSpecs] = useState<boolean>(false);
  const [openCalcProcess, setOpenCalcProcess] = useState<boolean>(false);

  // Result display state - Show results ONLY when user clicks Calculate
  const [showResults, setShowResults] = useState<boolean>(false);

  // Detailed Raw Material & Operational Costing Rates (Optional & Highly Accurate)
  const [milkCostPerL, setMilkCostPerL] = useState<string>("35.0");
  const [creamCostPerKg, setCreamCostPerKg] = useState<string>("250.0");
  const [richMilkCostPerL, setRichMilkCostPerL] = useState<string>("42.0");
  const [smpCostPerKg, setSmpCostPerKg] = useState<string>("300.0");
  const [skimMilkCostPerL, setSkimMilkCostPerL] = useState<string>("28.0");
  const [sugarCostPerKg, setSugarCostPerKg] = useState<string>("42.0");
  const [additiveCostPerKg, setAdditiveCostPerKg] = useState<string>("180.0");
  const [cultureCost, setCultureCost] = useState<string>("50.0");
  const [overheadCostPerUnit, setOverheadCostPerUnit] = useState<string>("1.50");
  const [customCost1Label, setCustomCost1Label] = useState<string>("Packaging & Foil");
  const [customCost1Val, setCustomCost1Val] = useState<string>("0.0");
  const [customCost2Label, setCustomCost2Label] = useState<string>("Flavours/Color");
  const [customCost2Val, setCustomCost2Val] = useState<string>("0.0");

  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Preset Selection Handler
  const handleSelectPreset = (presetId: string) => {
    setSelectedPresetId(presetId);
    setShowResults(false);
    const p = PRODUCT_PRESETS.find(item => item.id === presetId);
    if (p) {
      setTargetFat(p.targetFat.toString());
      setTargetSnf(p.targetSnf.toString());
      setTargetSugar(p.targetSugar.toString());
      setTargetAdditives(p.targetAdditives.toString());
      toast({
        title: `Loaded ${p.name}`,
        description: `Preset loaded: Fat ${p.targetFat}%, SNF ${p.targetSnf}%, Sugar ${p.targetSugar}%`,
      });
    }
  };

  // Helper SNF Calculator function based on selected formula (including custom)
  const calculateSnfVal = (clr: number, fat: number) => {
    if (selectedSnfFormulaKey === "custom") {
      const multi = parseFloat(customFatMultiplier) || 0;
      const constFactor = parseFloat(customConstant) || 0;
      return (clr / 4) + (fat * multi) + constFactor;
    }
    const formula = snfFormulas[selectedSnfFormulaKey] || snfFormulas.isi;
    return formula.calc(clr, fat);
  };

  // MATHEMATICAL CALCULATIONS (Linear Mass Balance & Accurate Costing System)
  const calculations = useMemo(() => {
    const vol = parseFloat(targetBatchVolume) || 0;
    const mixDensity = parseFloat(batchDensity) || 1.055;
    
    // Total Target Weight in kg
    const targetWeightKg = targetUnit === "liters" ? vol * mixDensity : vol;

    const tFatPct = parseFloat(targetFat) || 0;
    const tSnfPct = parseFloat(targetSnf) || 0;
    const tSugarPct = parseFloat(targetSugar) || 0;
    const tAdditivesPct = parseFloat(targetAdditives) || 0;
    const tTsPct = tFatPct + tSnfPct + tSugarPct + tAdditivesPct;

    // Required Solid Weights in kg
    const reqFatKg = (targetWeightKg * tFatPct) / 100;
    const reqSnfKg = (targetWeightKg * tSnfPct) / 100;
    const reqSugarKg = (targetWeightKg * tSugarPct) / 100;
    const reqAdditivesKg = (targetWeightKg * tAdditivesPct) / 100;
    const reqTsKg = (targetWeightKg * tTsPct) / 100;

    // Base Milk Specs
    const bFat = parseFloat(baseMilkFat) || 0;
    const bClr = parseFloat(baseMilkClr) || 0;
    let bSnf = parseFloat(baseMilkSnf) || 0;
    if (calcSnfMode === "clr") {
      bSnf = calculateSnfVal(bClr, bFat);
    }
    const mDensity = parseFloat(baseMilkDensity) || 1.028;

    // Fat Adjuster Specs (Cream or Rich Milk)
    const fAdjFat = fatAdjuster === "cream" ? (parseFloat(creamFat) || 40) : (parseFloat(richMilkFat) || 6);
    const fAdjSnf = fatAdjuster === "cream" ? (parseFloat(creamSnf) || 5.4) : (parseFloat(richMilkSnf) || 9);

    // SNF Adjuster Specs (SMP or Skimmed Milk)
    const sAdjSnf = snfAdjuster === "smp" ? (parseFloat(smpSnf) || 96) : (parseFloat(skimMilkSnf) || 8.8);
    const sAdjFat = snfAdjuster === "smp" ? (parseFloat(smpFat) || 0.8) : (parseFloat(skimMilkFat) || 0.1);

    const sugTs = parseFloat(sugarTs) || 100;
    const addTs = parseFloat(additiveTs) || 100;

    // Direct Dry Additions
    const sugarKg = (reqSugarKg * 100) / sugTs;
    const additivesKg = (reqAdditivesKg * 100) / addTs;

    // Estimate base liquid weight needed
    const estLiquidKg = Math.max(0, targetWeightKg - sugarKg - additivesKg);

    // Fat & SNF provided by Base Milk in liquid weight:
    const milkFatRatio = bFat / 100;
    const milkSnfRatio = bSnf / 100;

    const milkFatProvided = estLiquidKg * milkFatRatio;
    const milkSnfProvided = estLiquidKg * milkSnfRatio;

    const fatDeficit = reqFatKg - milkFatProvided;
    const snfDeficit = reqSnfKg - milkSnfProvided;

    let fatAdjKg = 0;
    let snfAdjKg = 0;
    let baseMilkKg = 0;
    let addedWaterKg = 0;

    if (fatDeficit > 0) {
      const denom = (fAdjFat / 100) - milkFatRatio;
      if (denom > 0) fatAdjKg = fatDeficit / denom;
    }

    if (snfDeficit > 0) {
      const denom = (sAdjSnf / 100) - milkSnfRatio;
      if (denom > 0) snfAdjKg = snfDeficit / denom;
    }

    baseMilkKg = Math.max(0, targetWeightKg - sugarKg - additivesKg - fatAdjKg - snfAdjKg);

    const totalIngredientsKg = baseMilkKg + fatAdjKg + snfAdjKg + sugarKg + additivesKg;
    if (totalIngredientsKg < targetWeightKg && waterChoice === "auto") {
      addedWaterKg = targetWeightKg - totalIngredientsKg;
    }

    // Actual Batch Mass Balance Verification
    const actualFatKg = (baseMilkKg * bFat / 100) + (fatAdjKg * fAdjFat / 100) + (snfAdjKg * sAdjFat / 100);
    const actualSnfKg = (baseMilkKg * bSnf / 100) + (fatAdjKg * fAdjSnf / 100) + (snfAdjKg * sAdjSnf / 100);
    const actualSugarKg = sugarKg * (sugTs / 100);
    const actualAdditivesKg = additivesKg * (addTs / 100);
    const actualTotalKg = baseMilkKg + fatAdjKg + snfAdjKg + sugarKg + additivesKg + addedWaterKg;

    const actualFatPct = actualTotalKg > 0 ? (actualFatKg / actualTotalKg) * 100 : 0;
    const actualSnfPct = actualTotalKg > 0 ? (actualSnfKg / actualTotalKg) * 100 : 0;
    const actualSugarPct = actualTotalKg > 0 ? (actualSugarKg / actualTotalKg) * 100 : 0;
    const actualAdditivesPct = actualTotalKg > 0 ? (actualAdditivesKg / actualTotalKg) * 100 : 0;
    const actualTsPct = actualFatPct + actualSnfPct + actualSugarPct + actualAdditivesPct;

    // Convert Base Milk & Water to Liters
    const baseMilkLiters = baseMilkKg / mDensity;
    const addedWaterLiters = addedWaterKg / 1.0;

    // Detailed Raw Material & Operational Costing
    const mCostPerL = parseFloat(milkCostPerL) || 0;
    const cCostPerKg = parseFloat(creamCostPerKg) || 0;
    const rMilkCostPerL = parseFloat(richMilkCostPerL) || 0;
    const sCostPerKg = parseFloat(smpCostPerKg) || 0;
    const skMilkCostPerL = parseFloat(skimMilkCostPerL) || 0;
    const sugCostPerKg = parseFloat(sugarCostPerKg) || 0;
    const addCostPerKg = parseFloat(additiveCostPerKg) || 0;
    const cultCost = parseFloat(cultureCost) || 0;
    const oheadRate = parseFloat(overheadCostPerUnit) || 0;
    const cCost1 = parseFloat(customCost1Val) || 0;
    const cCost2 = parseFloat(customCost2Val) || 0;

    const baseMilkTotalCost = baseMilkLiters * mCostPerL;
    
    let fatAdjTotalCost = 0;
    if (fatAdjuster === "cream") {
      fatAdjTotalCost = fatAdjKg * cCostPerKg;
    } else {
      fatAdjTotalCost = (fatAdjKg / (parseFloat(richMilkDensity) || 1.031)) * rMilkCostPerL;
    }

    let snfAdjTotalCost = 0;
    if (snfAdjuster === "smp") {
      snfAdjTotalCost = snfAdjKg * sCostPerKg;
    } else {
      snfAdjTotalCost = (snfAdjKg / (parseFloat(skimMilkDensity) || 1.034)) * skMilkCostPerL;
    }

    const sugarTotalCost = sugarKg * sugCostPerKg;
    const additiveTotalCost = additivesKg * addCostPerKg;
    const overheadTotalCost = vol * oheadRate;

    const totalBatchCost = baseMilkTotalCost + fatAdjTotalCost + snfAdjTotalCost + sugarTotalCost + additiveTotalCost + cultCost + overheadTotalCost + cCost1 + cCost2;
    const costPerKg = targetWeightKg > 0 ? totalBatchCost / targetWeightKg : 0;
    const costPerLiter = (targetWeightKg / mixDensity) > 0 ? totalBatchCost / (targetWeightKg / mixDensity) : 0;

    const steps: string[] = [];
    steps.push(`📊 **═══════════ STEP 1: BATCH TARGET REQUIREMENTS ═══════════**`);
    steps.push(`   Target Batch Size = ${vol} ${targetUnit}`);
    steps.push(`   Finished Mix Density = ${mixDensity} kg/L`);
    steps.push(`   Total Target Batch Weight = ${targetWeightKg.toFixed(2)} kg (${(targetWeightKg / mixDensity).toFixed(2)} Liters)`);
    steps.push(`   Target Product Composition:`);
    steps.push(`     • Target Fat = ${tFatPct}% (${reqFatKg.toFixed(3)} kg)`);
    steps.push(`     • Target SNF = ${tSnfPct}% (${reqSnfKg.toFixed(3)} kg)`);
    steps.push(`     • Target Sugar = ${tSugarPct}% (${reqSugarKg.toFixed(3)} kg)`);
    steps.push(`     • Target Additives = ${tAdditivesPct}% (${reqAdditivesKg.toFixed(3)} kg)`);
    steps.push(`     • Total Target Solids (TS) = ${tTsPct.toFixed(2)}% (${reqTsKg.toFixed(3)} kg)`);

    steps.push(`\n🧪 **═══════════ STEP 2: BASE MILK & FORMULA SPECS ═══════════**`);
    steps.push(`   Base Liquid Milk Specs:`);
    steps.push(`     • Fat = ${bFat}%`);
    if (calcSnfMode === "clr") {
      steps.push(`     • CLR = ${bClr} (15°C)`);
      steps.push(`     • Selected SNF Formula = ${selectedSnfFormulaKey === "custom" ? "Custom Formula" : (snfFormulas[selectedSnfFormulaKey]?.name || "ISI Standard")}`);
      steps.push(`     • Effective Calculated Base SNF = ${bSnf.toFixed(3)}%`);
    } else {
      steps.push(`     • SNF = ${bSnf}%`);
    }
    steps.push(`     • Milk Density = ${mDensity} kg/L`);

    steps.push(`\n🔢 **═══════════ STEP 3: INGREDIENT MASS BALANCE CALCULATIONS ═══════════**`);
    steps.push(`   Sugar Required (${sugTs}% TS) = ${sugarKg.toFixed(3)} kg`);
    steps.push(`   Stabilizers/Additives Required (${addTs}% TS) = ${additivesKg.toFixed(3)} kg`);
    steps.push(`   Fat Adjuster (${fatAdjuster === "cream" ? "Cream" : "Rich Whole Milk"} @ ${fAdjFat}% Fat, ${fAdjSnf}% SNF) = ${fatAdjKg.toFixed(3)} kg`);
    steps.push(`   SNF Adjuster (${snfAdjuster === "smp" ? "SMP Powder" : "Skimmed Milk"} @ ${sAdjSnf}% SNF, ${sAdjFat}% Fat) = ${snfAdjKg.toFixed(3)} kg`);
    steps.push(`   Base Liquid Milk Required = ${baseMilkKg.toFixed(3)} kg (${baseMilkLiters.toFixed(2)} Liters)`);
    if (addedWaterKg > 0) {
      steps.push(`   Added Water Required = ${addedWaterKg.toFixed(3)} kg (${addedWaterLiters.toFixed(2)} Liters)`);
    }

    steps.push(`\n🔬 **═══════════ STEP 4: BATCH VERIFICATION & FINANCIALS ═══════════**`);
    steps.push(`   Total Recipe Ingredients Weight = ${actualTotalKg.toFixed(2)} kg`);
    steps.push(`   Actual Recipe Composition:`);
    steps.push(`     • Fat = ${actualFatPct.toFixed(2)}% (Target: ${tFatPct}%)`);
    steps.push(`     • SNF = ${actualSnfPct.toFixed(2)}% (Target: ${tSnfPct}%)`);
    steps.push(`     • Sugar = ${actualSugarPct.toFixed(2)}% (Target: ${tSugarPct}%)`);
    steps.push(`     • Total Solids (TS) = ${actualTsPct.toFixed(2)}% (Target: ${tTsPct.toFixed(2)}%)`);
    steps.push(`   Batch Financial Breakdown:`);
    steps.push(`     • Total Batch Production Cost = ₹${totalBatchCost.toFixed(2)}`);
    steps.push(`     • Unit Cost per kg = ₹${costPerKg.toFixed(2)} / kg`);
    steps.push(`     • Unit Cost per Liter = ₹${costPerLiter.toFixed(2)} / Liter`);
    steps.push(`✨ **═══════════ MASS BALANCE VERIFICATION COMPLETE ═══════════**`);

    return {
      targetWeightKg,
      targetLiters: targetWeightKg / mixDensity,
      reqFatKg,
      reqSnfKg,
      reqSugarKg,
      reqAdditivesKg,
      reqTsKg,
      // Effective Base SNF
      effectiveBaseSnf: bSnf,
      // Results Ingredients
      baseMilkKg,
      baseMilkLiters,
      fatAdjKg,
      snfAdjKg,
      sugarKg,
      additivesKg,
      addedWaterKg,
      addedWaterLiters,
      totalIngredientsKg,
      // Actual Verified Specs
      actualFatKg,
      actualSnfKg,
      actualSugarKg,
      actualAdditivesKg,
      actualTotalKg,
      actualFatPct,
      actualSnfPct,
      actualSugarPct,
      actualAdditivesPct,
      actualTsPct,
      // Itemized Costing Breakdown
      totalBatchCost,
      costPerKg,
      costPerLiter,
      baseMilkTotalCost,
      fatAdjTotalCost,
      snfAdjTotalCost,
      sugarTotalCost,
      additiveTotalCost,
      cultCost,
      overheadTotalCost,
      cCost1,
      cCost2,
      calculationSteps: steps
    };
  }, [
    targetBatchVolume, targetUnit, batchDensity, targetFat, targetSnf, targetSugar, targetAdditives,
    baseMilkFat, baseMilkSnf, baseMilkClr, calcSnfMode, baseMilkDensity, selectedSnfFormulaKey, customFatMultiplier, customConstant,
    fatAdjuster, creamFat, creamSnf, richMilkFat, richMilkSnf, richMilkDensity,
    snfAdjuster, smpSnf, smpFat, skimMilkSnf, skimMilkFat, skimMilkDensity,
    sugarTs, additiveTs, waterChoice, 
    milkCostPerL, creamCostPerKg, richMilkCostPerL, smpCostPerKg, skimMilkCostPerL, sugarCostPerKg, additiveCostPerKg, cultureCost, overheadCostPerUnit, customCost1Val, customCost2Val
  ]);

  // Actions
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (!printAreaRef.current) return;
    setIsDownloading(true);
    toast({
      title: "Generating A4 Recipe Card PDF...",
      description: "Rendering high quality standardization sheet.",
    });

    try {
      printAreaRef.current.classList.add("is-exporting-pdf");
      const canvas = await html2canvas(printAreaRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: printAreaRef.current.scrollWidth || 1000,
        scrollX: 0,
        scrollY: 0,
      });
      printAreaRef.current.classList.remove("is-exporting-pdf");

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      await savePdfFile(pdf, `Advanced_Standardization_${selectedPresetId}_${Date.now()}.pdf`);
      toast({
        title: "PDF Saved Successfully!",
        description: "Your recipe standardization sheet is downloaded.",
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <CalculatorCard 
      title="Multi-Solids Batch (Sweet Curd/Lassi/Paneer/Ice Cream)"
      description="Calculate the exact ingredient formulation (Base Milk, Cream, SMP, Sugar, Water) for Sweet Curd, Lassi, Flavored Milk & Ice Cream"
    >
      <div className="w-full space-y-6 pb-6">
        {/* PRESET SELECTOR BAR */}
        <Card className="border-purple-200 bg-purple-50/60 shadow-sm">
          <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600 shrink-0" />
              <div>
                <span className="text-xs font-bold text-purple-900 block">Select Product Formulation Preset:</span>
                <span className="text-[11px] text-purple-700">Pre-loads standard FSSAI & commercial specs for popular sweet dairy products</span>
              </div>
            </div>
            <Select value={selectedPresetId} onValueChange={handleSelectPreset}>
              <SelectTrigger className="w-full md:w-[320px] bg-white font-semibold text-xs border-purple-300">
                <SelectValue placeholder="Choose preset..." />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_PRESETS.map(p => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name} (TS ~{(p.targetFat + p.targetSnf + p.targetSugar + p.targetAdditives).toFixed(1)}%)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* INPUT PARAMETERS GRID - 3 MAIN PARTS */}
        <div className="space-y-6">

          {/* TOP GRID: PART 1 & PART 2 SIDE BY SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PART 1: INITIAL MILK PARAMETERS */}
            <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-blue-50/50 to-slate-50/30">
              <CardHeader className="p-4 bg-blue-100/60 border-b border-blue-200">
                <CardTitle className="text-sm font-bold text-blue-950 flex items-center gap-2">
                  <Milk className="h-4 w-4 text-blue-600" />
                  1. Initial Milk Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {/* INITIAL MILK BASE DROPDOWN SELECTOR */}
                <div className="p-3 bg-blue-100/60 rounded-xl border border-blue-300 space-y-1.5 shadow-xs">
                  <Label className="text-xs font-extrabold text-blue-950 block">Initial Base Ingredient Type</Label>
                  <Select value={primaryBaseType} onValueChange={handlePrimaryBaseChange}>
                    <SelectTrigger className="h-9 text-xs font-bold bg-white border-blue-300 text-blue-950">
                      <SelectValue placeholder="Choose initial base..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whole_milk">🥛 Raw / Whole Milk (Initial Milk)</SelectItem>
                      <SelectItem value="cream">🧈 Heavy Cream Base (40% Fat)</SelectItem>
                      <SelectItem value="rich_milk">🥛 Rich Whole Milk Base (6% Fat)</SelectItem>
                      <SelectItem value="skim_milk">🥛 Skimmed Milk Base (0.1% Fat)</SelectItem>
                      <SelectItem value="water">💧 Pure Water / Reconstitution Base</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-[10px] text-blue-800 font-semibold block">
                    Base: {getPrimaryBaseLabel(primaryBaseType)} (Pre-fills initial testing specs below)
                  </span>
                </div>

                <div>
                  <Label className="text-xs font-semibold">Select SNF Formula Standard</Label>
                  <Select value={selectedSnfFormulaKey} onValueChange={setSelectedSnfFormulaKey}>
                    <SelectTrigger className="h-8 text-xs font-semibold bg-white border-blue-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(snfFormulas).map(([key, f]) => (
                        <SelectItem key={key} value={key} className="text-xs">
                          {f.name} ({f.formulaText})
                        </SelectItem>
                      ))}
                      <SelectItem value="custom" className="text-xs">Custom Formula (CLR/4 + a*Fat + b)</SelectItem>
                    </SelectContent>
                  </Select>

                  {selectedSnfFormulaKey === "custom" ? (
                    <div className="grid grid-cols-2 gap-2 mt-2 p-2 bg-purple-50 rounded border border-purple-200">
                      <div>
                        <Label className="text-[10px]">Fat Coeff (a)</Label>
                        <Input type="number" step="0.01" value={customFatMultiplier} onChange={e => setCustomFatMultiplier(e.target.value)} className="h-7 text-xs font-mono bg-white" />
                      </div>
                      <div>
                        <Label className="text-[10px]">Constant (b)</Label>
                        <Input type="number" step="0.01" value={customConstant} onChange={e => setCustomConstant(e.target.value)} className="h-7 text-xs font-mono bg-white" />
                      </div>
                    </div>
                  ) : (
                    <span className="text-[10px] text-purple-700 italic block mt-1">
                      Formula: {snfFormulas[selectedSnfFormulaKey]?.formulaText}
                    </span>
                  )}
                </div>

                {/* Initial Milk Testing Specs */}
                <div className="space-y-2 p-3 bg-white rounded-xl border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-blue-950 flex items-center gap-1">
                      <Milk className="h-3.5 w-3.5 text-blue-600" /> {getPrimaryBaseLabel(primaryBaseType)} Testing Specs
                    </span>
                    <div className="flex items-center gap-1">
                      <button 
                        type="button"
                        onClick={() => setCalcSnfMode("direct")}
                        className={cn("px-2 py-0.5 text-[9.5px] rounded font-bold transition-all", calcSnfMode === "direct" ? "bg-blue-700 text-white" : "bg-white border text-slate-700")}
                      >
                        Direct SNF%
                      </button>
                      <button 
                        type="button"
                        onClick={() => setCalcSnfMode("clr")}
                        className={cn("px-2 py-0.5 text-[9.5px] rounded font-bold transition-all", calcSnfMode === "clr" ? "bg-blue-700 text-white" : "bg-white border text-slate-700")}
                      >
                        Via CLR
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <Label className="text-[10.5px] font-semibold">Initial Fat %</Label>
                      <Input type="number" step="0.1" value={baseMilkFat} onChange={e => setBaseMilkFat(e.target.value)} className="h-8 text-xs font-mono font-bold text-amber-900 bg-amber-50/30 border-amber-200" />
                    </div>
                    {calcSnfMode === "clr" ? (
                      <div>
                        <Label className="text-[10.5px] font-semibold">Initial CLR</Label>
                        <Input type="number" step="0.1" value={baseMilkClr} onChange={e => setBaseMilkClr(e.target.value)} className="h-8 text-xs font-mono font-bold text-purple-800" />
                      </div>
                    ) : (
                      <div>
                        <Label className="text-[10.5px] font-semibold">Initial SNF %</Label>
                        <Input type="number" step="0.1" value={baseMilkSnf} onChange={e => setBaseMilkSnf(e.target.value)} className="h-8 text-xs font-mono font-bold text-blue-900 bg-blue-50/30 border-blue-200" />
                      </div>
                    )}
                  </div>

                  {calcSnfMode === "clr" && (
                    <div className="text-[10px] text-purple-900 bg-purple-50 p-1.5 rounded border border-purple-200 font-semibold flex justify-between">
                      <span>Effective Calculated SNF%:</span>
                      <span className="font-mono font-extrabold text-purple-950">{calculations.effectiveBaseSnf.toFixed(2)}%</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* PART 2: TARGET MILK PARAMETERS */}
            <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-purple-50/50 to-indigo-50/30">
              <CardHeader className="p-4 bg-purple-100/50 border-b border-purple-200">
                <CardTitle className="text-sm font-bold text-purple-950 flex items-center gap-2">
                  <TargetIcon className="h-4 w-4 text-purple-600" />
                  2. Target Milk Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs font-semibold">Target Batch Size</Label>
                    <Input 
                      type="number"
                      value={targetBatchVolume} 
                      onChange={e => setTargetBatchVolume(e.target.value)} 
                      placeholder="1000"
                      className="h-9 font-bold"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-semibold">Unit</Label>
                    <Select value={targetUnit} onValueChange={(val: any) => setTargetUnit(val)}>
                      <SelectTrigger className="h-9 text-xs font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="liters">Liters (L)</SelectItem>
                        <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-purple-200/60">
                  <div>
                    <Label className="text-xs font-semibold text-amber-900">Target Fat %</Label>
                    <Input 
                      type="number"
                      step="0.1"
                      value={targetFat} 
                      onChange={e => setTargetFat(e.target.value)} 
                      className="h-9 font-bold font-mono text-amber-800 bg-amber-50/50 border-amber-300"
                      placeholder="3.5"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-semibold text-blue-900">Target SNF %</Label>
                    <Input 
                      type="number"
                      step="0.1"
                      value={targetSnf} 
                      onChange={e => setTargetSnf(e.target.value)} 
                      className="h-9 font-bold font-mono text-blue-800 bg-blue-50/50 border-blue-300"
                      placeholder="10.0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs font-semibold text-pink-900">Target Sugar %</Label>
                    <Input 
                      type="number"
                      step="0.1"
                      value={targetSugar} 
                      onChange={e => setTargetSugar(e.target.value)} 
                      className="h-9 font-bold font-mono text-pink-800 bg-pink-50/50 border-pink-300"
                      placeholder="12.0"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-semibold text-purple-900">Target Additives %</Label>
                    <Input 
                      type="number"
                      step="0.05"
                      value={targetAdditives} 
                      onChange={e => setTargetAdditives(e.target.value)} 
                      className="h-9 font-bold font-mono text-purple-800 bg-purple-50/50 border-purple-300"
                      placeholder="0.2"
                    />
                  </div>
                </div>

                <div className="bg-white/80 p-2.5 rounded-lg border border-purple-200 text-xs font-semibold flex justify-between items-center">
                  <span className="text-purple-950 font-bold">Total Target Solids (TS %):</span>
                  <Badge className="bg-purple-700 text-white font-mono text-sm px-2.5 py-0.5">
                    {(parseFloat(targetFat || "0") + parseFloat(targetSnf || "0") + parseFloat(targetSugar || "0") + parseFloat(targetAdditives || "0")).toFixed(2)}%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* PART 3: MAIN CORRECTION INGREDIENTS (AUTOMATIC & MANUAL SPECS CARD) */}
          <Card className="border-emerald-200 shadow-sm bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-slate-50/30">
            <CardHeader className="p-4 bg-emerald-100/60 border-b border-emerald-200">
              <CardTitle className="text-sm font-bold text-emerald-950 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-emerald-600" />
                  <span>3. Main Correction Ingredients</span>
                </div>
                <Badge className="bg-emerald-700 text-white text-[10.5px]">Auto Balance Engine</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">

              {/* AUTOMATIC LOGIC EXPLANATION BANNER */}
              <div className="p-3 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-xl border border-emerald-300 shadow-xs flex items-center gap-2.5">
                <Sparkles className="h-5 w-5 text-emerald-700 shrink-0" />
                <div className="text-xs text-emerald-950">
                  <span className="font-extrabold block">⚡ Automatic Balance Logic:</span>
                  <span className="text-[11px] text-emerald-900">
                    If milk SNF is lower than target, <b>SMP Powder</b> is automatically added. If SNF or total solids are higher than target, <b>RO Water</b> dilution is automatically calculated.
                  </span>
                </div>
              </div>

              {/* MANUAL FILL INGREDIENTS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. FAT CORRECTION INGREDIENT MANUAL INPUT */}
                <div className="p-3.5 bg-white rounded-xl border border-amber-300 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-amber-950 block">1. Fat Correction Ingredient</span>
                  <div>
                    <Label className="text-[10.5px] font-semibold text-slate-700">Ingredient Name</Label>
                    <Input 
                      value={fatAdjName} 
                      onChange={e => setFatAdjName(e.target.value)} 
                      placeholder="e.g. Fresh Cream, Ghee, Butter"
                      className="h-8 text-xs font-bold text-amber-950 bg-amber-50/40 border-amber-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-[10px] font-semibold">Fat %</Label>
                      <Input type="number" step="0.1" value={fatAdjuster === "cream" ? creamFat : richMilkFat} onChange={e => fatAdjuster === "cream" ? setCreamFat(e.target.value) : setRichMilkFat(e.target.value)} className="h-7 text-xs font-mono font-bold text-amber-900" />
                    </div>
                    <div>
                      <Label className="text-[10px] font-semibold">SNF %</Label>
                      <Input type="number" step="0.1" value={fatAdjuster === "cream" ? creamSnf : richMilkSnf} onChange={e => fatAdjuster === "cream" ? setCreamSnf(e.target.value) : setRichMilkSnf(e.target.value)} className="h-7 text-xs font-mono font-bold text-amber-900" />
                    </div>
                  </div>
                </div>

                {/* 2. SNF CORRECTION INGREDIENT (SMP MANUAL INPUT) */}
                <div className="p-3.5 bg-white rounded-xl border border-blue-300 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-blue-950 block">2. SMP Powder (SNF Deficit Correction)</span>
                  <div>
                    <Label className="text-[10.5px] font-semibold text-slate-700">Ingredient Name</Label>
                    <Input 
                      value={snfAdjName} 
                      onChange={e => setSnfAdjName(e.target.value)} 
                      placeholder="e.g. SMP Powder, Condensed Milk"
                      className="h-8 text-xs font-bold text-blue-950 bg-blue-50/40 border-blue-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-[10px] font-semibold">SNF % (e.g. 96)</Label>
                      <Input type="number" step="0.1" value={smpSnf} onChange={e => setSmpSnf(e.target.value)} className="h-7 text-xs font-mono font-bold text-blue-900 bg-blue-50/50" />
                    </div>
                    <div>
                      <Label className="text-[10px] font-semibold">Fat % (e.g. 0.5)</Label>
                      <Input type="number" step="0.1" value={smpFat} onChange={e => setSmpFat(e.target.value)} className="h-7 text-xs font-mono font-bold text-blue-900 bg-blue-50/50" />
                    </div>
                  </div>
                </div>

              </div>

              {/* WATER & DILUTION OPTION */}
              <div className="p-3 bg-white rounded-xl border border-cyan-200 shadow-xs flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <span className="text-xs font-bold text-cyan-950 flex items-center gap-1.5">
                  <Droplet className="h-4 w-4 text-cyan-600" /> RO Water Auto-Dilution (If SNF / Solids are Excess)
                </span>
                <Select value={waterChoice} onValueChange={(val: any) => setWaterChoice(val)}>
                  <SelectTrigger className="h-7 text-xs font-semibold bg-white border-cyan-300 w-full sm:w-[260px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">💧 Auto-Balance Pure RO Water</SelectItem>
                    <SelectItem value="none">🚫 No Added Water</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* PROMINENT CALCULATE BUTTON (MATCHING FAT & SNF CALCULATOR) */}
        <Button 
          onClick={() => {
            setShowResults(true);
            setTimeout(() => {
              const resultElem = document.getElementById("multi-solids-results");
              if (resultElem) {
                resultElem.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }} 
          className="w-full h-14 sm:h-16 text-base sm:text-lg font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all rounded-2xl"
        >
          <Calculator className="w-6 h-6 mr-3" />
          Calculate Multi-Solids Batch Recipe
        </Button>

        {/* RESULT SECTION (SHOWS ONLY WHEN CALCULATE BUTTON IS CLICKED) */}
        {showResults && (
          <div id="multi-solids-results" className="space-y-6 pt-2">
            {/* 1. FORMULATION & MASS BALANCE SUMMARY ALERT */}
            <Alert className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-3 border-emerald-500 shadow-2xl p-6 rounded-2xl">
              <CheckCircle2 className="h-8 w-8 text-emerald-700 shrink-0" />
              <AlertTitle className="text-xl sm:text-2xl font-extrabold text-emerald-950 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>✅ Required Ingredients Recipe Breakdown</span>
                <Badge className="bg-emerald-700 text-white text-xs px-3 py-1 font-mono w-fit">
                  Batch: {targetBatchVolume} {targetUnit.toUpperCase()} ({calculations.targetWeightKg.toFixed(1)} kg)
                </Badge>
              </AlertTitle>
              <AlertDescription>
                <div className="space-y-6">
                  {/* Ingredients Grid Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Primary Base Ingredient Card */}
                    <div className="bg-white p-4 rounded-xl border-2 border-teal-300 shadow-md">
                      <h5 className="font-bold text-sm text-teal-800 mb-2 flex items-center gap-1.5">
                        <Milk className="w-4 h-4 text-teal-600" /> {getPrimaryBaseLabel(primaryBaseType)} Needed
                      </h5>
                      <p className="text-2xl font-extrabold text-teal-900">{calculations.baseMilkKg.toFixed(2)} <span className="text-sm font-semibold">kg</span></p>
                      <p className="text-xs text-teal-700 font-mono font-bold mt-1">({calculations.baseMilkLiters.toFixed(2)} Liters)</p>
                      <p className="text-[10.5px] text-slate-500 mt-1">Base: {baseMilkFat}% Fat | {calculations.effectiveBaseSnf.toFixed(2)}% SNF</p>
                    </div>

                    {/* Fat Adjuster (Cream / Rich Milk) Card */}
                    {calculations.fatAdjKg > 0.01 && (
                      <div className="bg-white p-4 rounded-xl border-2 border-amber-300 shadow-md">
                        <h5 className="font-bold text-sm text-amber-800 mb-2 flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-amber-600" /> {fatAdjName ? `${fatAdjName} Needed` : (fatAdjuster === "cream" ? "Cream Needed" : "Rich Whole Milk Needed")}
                        </h5>
                        <p className="text-2xl font-extrabold text-amber-900">{calculations.fatAdjKg.toFixed(2)} <span className="text-sm font-semibold">kg</span></p>
                        {fatAdjuster === "rich_milk" && (
                          <p className="text-xs text-amber-700 font-mono font-bold mt-1">({(calculations.fatAdjKg / (parseFloat(richMilkDensity) || 1.03)).toFixed(2)} Liters)</p>
                        )}
                        <p className="text-[10.5px] text-slate-500 mt-1">Specs: {fatAdjuster === "cream" ? creamFat : richMilkFat}% Fat</p>
                      </div>
                    )}

                    {/* SNF Adjuster (SMP / Skimmed Milk) Card */}
                    {calculations.snfAdjKg > 0.01 && (
                      <div className="bg-white p-4 rounded-xl border-2 border-blue-300 shadow-md">
                        <h5 className="font-bold text-sm text-blue-800 mb-2 flex items-center gap-1.5">
                          <Beaker className="w-4 h-4 text-blue-600" /> {snfAdjName ? `${snfAdjName} Needed` : (snfAdjuster === "smp" ? "SMP Powder Needed" : "Skimmed Milk Needed")}
                        </h5>
                        <p className="text-2xl font-extrabold text-blue-900">{calculations.snfAdjKg.toFixed(2)} <span className="text-sm font-semibold">kg</span></p>
                        {snfAdjuster === "skim_milk" && (
                          <p className="text-xs text-blue-700 font-mono font-bold mt-1">({(calculations.snfAdjKg / (parseFloat(skimMilkDensity) || 1.034)).toFixed(2)} Liters)</p>
                        )}
                        <p className="text-[10.5px] text-slate-500 mt-1">Specs: {snfAdjuster === "smp" ? smpSnf : skimMilkSnf}% SNF</p>
                      </div>
                    )}

                    {/* Sugar Card */}
                    {calculations.sugarKg > 0.01 && (
                      <div className="bg-white p-4 rounded-xl border-2 border-pink-300 shadow-md">
                        <h5 className="font-bold text-sm text-pink-800 mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-pink-600" /> Granulated Sugar Needed
                        </h5>
                        <p className="text-2xl font-extrabold text-pink-900">{calculations.sugarKg.toFixed(2)} <span className="text-sm font-semibold">kg</span></p>
                        <p className="text-[10.5px] text-slate-500 mt-1">Target Sugar: {targetSugar}%</p>
                      </div>
                    )}

                    {/* Additives / Stabilizer Card */}
                    {calculations.additivesKg > 0.01 && (
                      <div className="bg-white p-4 rounded-xl border-2 border-purple-300 shadow-md">
                        <h5 className="font-bold text-sm text-purple-800 mb-2 flex items-center gap-1.5">
                          <Beaker className="w-4 h-4 text-purple-600" /> Stabilizers / Additives Needed
                        </h5>
                        <p className="text-2xl font-extrabold text-purple-900">{calculations.additivesKg.toFixed(2)} <span className="text-sm font-semibold">kg</span></p>
                        <p className="text-[10.5px] text-slate-500 mt-1">Target Additives: {targetAdditives}%</p>
                      </div>
                    )}

                    {/* Makeup Water Card */}
                    {calculations.addedWaterKg > 0.01 && (
                      <div className="bg-white p-4 rounded-xl border-2 border-cyan-300 shadow-md">
                        <h5 className="font-bold text-sm text-cyan-800 mb-2 flex items-center gap-1.5">
                          <Droplet className="w-4 h-4 text-cyan-600" /> Added Makeup Water
                        </h5>
                        <p className="text-2xl font-extrabold text-cyan-900">{calculations.addedWaterKg.toFixed(2)} <span className="text-sm font-semibold">kg (Liters)</span></p>
                        <p className="text-[10.5px] text-slate-500 mt-1">Pure RO Water Dilution</p>
                      </div>
                    )}
                  </div>

                  {/* Verified Target Composition Badges Grid */}
                  <div className="bg-white p-5 rounded-xl shadow-md border-2 border-emerald-300">
                    <h5 className="font-bold text-base text-emerald-950 mb-3 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-emerald-700" />
                      Verified Final Batch Composition vs Target Specs
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-300">
                        <p className="text-xs font-semibold text-slate-600 mb-0.5">Final Fat %</p>
                        <p className="text-2xl font-extrabold text-amber-800">{calculations.actualFatPct.toFixed(2)}%</p>
                        <Badge className="bg-amber-600 mt-1 text-[10px]">Target: {targetFat}%</Badge>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-300">
                        <p className="text-xs font-semibold text-slate-600 mb-0.5">Final SNF %</p>
                        <p className="text-2xl font-extrabold text-blue-800">{calculations.actualSnfPct.toFixed(2)}%</p>
                        <Badge className="bg-blue-600 mt-1 text-[10px]">Target: {targetSnf}%</Badge>
                      </div>
                      <div className="bg-pink-50 p-3 rounded-lg border border-pink-300">
                        <p className="text-xs font-semibold text-slate-600 mb-0.5">Final Sugar %</p>
                        <p className="text-2xl font-extrabold text-pink-800">{calculations.actualSugarPct.toFixed(2)}%</p>
                        <Badge className="bg-pink-600 mt-1 text-[10px]">Target: {targetSugar}%</Badge>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border border-purple-300">
                        <p className="text-xs font-semibold text-slate-600 mb-0.5">Total Solids (TS %)</p>
                        <p className="text-2xl font-extrabold text-purple-800">{calculations.actualTsPct.toFixed(2)}%</p>
                        <Badge className="bg-purple-600 mt-1 text-[10px]">
                          Target TS: {(parseFloat(targetFat || "0") + parseFloat(targetSnf || "0") + parseFloat(targetSugar || "0") + parseFloat(targetAdditives || "0")).toFixed(2)}%
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Financial Costing Summary Card */}
                  {calculations.totalBatchCost > 0 && (
                    <div className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 p-5 rounded-xl shadow-md border-2 border-purple-400">
                      <h5 className="font-extrabold text-base text-purple-950 mb-3 flex items-center gap-2">
                        <IndianRupee className="w-5 h-5 text-purple-700" />
                        Financial Batch Costing Summary
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                        <div className="bg-white/90 p-3 rounded-lg border border-purple-300">
                          <p className="text-xs font-bold text-slate-600">Total Batch Cost</p>
                          <p className="text-2xl font-extrabold text-purple-950 mt-1">₹ {calculations.totalBatchCost.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                        </div>
                        <div className="bg-white/90 p-3 rounded-lg border border-purple-300">
                          <p className="text-xs font-bold text-slate-600">Cost per Kilogram</p>
                          <p className="text-2xl font-extrabold text-indigo-900 mt-1">₹ {calculations.costPerKg.toFixed(2)} / kg</p>
                        </div>
                        <div className="bg-white/90 p-3 rounded-lg border border-purple-300">
                          <p className="text-xs font-bold text-slate-600">Cost per Liter</p>
                          <p className="text-2xl font-extrabold text-blue-900 mt-1">₹ {calculations.costPerLiter.toFixed(2)} / L</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AlertDescription>
            </Alert>

            {/* 2. COMPLETE CALCULATION PROCESS (COLLAPSIBLE DROPDOWN TAB) */}
            <Card className="border-2 border-purple-300 shadow-xl overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50 to-purple-50">
              <button 
                type="button" 
                onClick={() => setOpenCalcProcess(!openCalcProcess)}
                className="w-full p-4 sm:p-5 bg-gradient-to-r from-gray-100 via-slate-100 to-purple-100 hover:from-purple-100 hover:to-indigo-100 flex justify-between items-center text-slate-900 transition-all font-headline border-b border-purple-200"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700 shrink-0" />
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 text-left">
                    Complete Calculation Process (Mobile Calculator Verification)
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-purple-900 bg-white/90 px-3 py-1 rounded-full border border-purple-300 shadow-xs">
                    {openCalcProcess ? "Hide Verification Steps 🔼" : "View Detailed Verification Steps 🔽"}
                  </span>
                  {openCalcProcess ? <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-800" /> : <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-purple-800" />}
                </div>
              </button>

              {openCalcProcess && (
                <CardContent className="p-4 sm:p-6 space-y-4 bg-gradient-to-br from-gray-100 via-slate-100 to-purple-50">
                  <ScrollArea className="h-[380px] pr-4">
                    <div className="space-y-1 text-sm font-mono leading-relaxed">
                      {calculations.calculationSteps.map((step, idx) => (
                        <p 
                          key={idx} 
                          className={cn(
                            step.includes('**') && 'font-extrabold mt-3 text-gray-900 text-base',
                            step.includes('═══') && 'text-purple-700 font-extrabold text-lg',
                            step.includes('✅') && 'text-green-700 font-bold',
                            step.includes('⚠️') && 'text-yellow-700 font-bold',
                            step.includes('❌') && 'text-red-700 font-bold',
                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                            step.includes('🔢') && 'text-purple-700 font-bold text-lg',
                            step.includes('🧪') && 'text-orange-700 font-bold text-lg',
                            step.includes('🔬') && 'text-pink-700 font-bold text-lg',
                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                            !step.includes('**') && !step.includes('═══') && 'text-gray-700'
                          )}
                        >
                          {step.replace(/\*\*/g, '')}
                        </p>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                    <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700" />
                      ✓ All calculations shown with complete mass balance & costing verification!
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        )}
      </div>
    </CalculatorCard>
  );
}

function TargetIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
