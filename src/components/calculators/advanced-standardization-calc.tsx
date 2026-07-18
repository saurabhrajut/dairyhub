"use client";

import React, { useState, useMemo, useRef } from "react";
import { 
  Calculator, Plus, Trash2, Printer, Download, FileText, 
  Beaker, RefreshCw, CheckCircle, Scale, Droplet, Sparkles,
  Info, Loader2, FileDown, Layers, Percent, Flame, Building2,
  Calendar, Award, ChevronRight, AlertCircle, Save, FolderOpen,
  ChevronDown, ChevronUp, SlidersHorizontal, Milk, DollarSign, Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { snfFormulas } from "@/lib/data";

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

  // Selection for Adjustment Ingredients
  const [fatAdjuster, setFatAdjuster] = useState<"cream" | "rich_milk">("cream");
  const [snfAdjuster, setSnfAdjuster] = useState<"smp" | "skim_milk">("smp");

  // Raw Materials Specs
  const [baseMilkFat, setBaseMilkFat] = useState<string>("4.0");
  const [baseMilkSnf, setBaseMilkSnf] = useState<string>("8.5");
  const [baseMilkClr, setBaseMilkClr] = useState<string>("28.0");
  const [baseMilkDensity, setBaseMilkDensity] = useState<string>("1.028");
  const [calcSnfMode, setCalcSnfMode] = useState<"direct" | "clr">("direct");

  const [creamFat, setCreamFat] = useState<string>("40.0");
  const [creamSnf, setCreamSnf] = useState<string>("5.4");

  const [richMilkFat, setRichMilkFat] = useState<string>("6.0");
  const [richMilkSnf, setRichMilkSnf] = useState<string>("9.0");
  const [richMilkClr, setRichMilkClr] = useState<string>("29.0");
  const [richMilkDensity, setRichMilkDensity] = useState<string>("1.031");

  const [smpSnf, setSmpSnf] = useState<string>("96.0");
  const [smpFat, setSmpFat] = useState<string>("0.8");

  const [skimMilkFat, setSkimMilkFat] = useState<string>("0.1");
  const [skimMilkSnf, setSkimMilkSnf] = useState<string>("8.8");
  const [skimMilkClr, setSkimMilkClr] = useState<string>("34.0");
  const [skimMilkDensity, setSkimMilkDensity] = useState<string>("1.034");

  const [sugarTs, setSugarTs] = useState<string>("100.0");
  const [additiveTs, setAdditiveTs] = useState<string>("100.0");
  const [waterChoice, setWaterChoice] = useState<"auto" | "none">("auto");

  // Collapsible Dropdown Open/Close Accordion States for Adjustment Components
  const [openCream, setOpenCream] = useState<boolean>(false);
  const [openRichMilk, setOpenRichMilk] = useState<boolean>(false);
  const [openSmp, setOpenSmp] = useState<boolean>(false);
  const [openSkimMilk, setOpenSkimMilk] = useState<boolean>(false);
  const [openWater, setOpenWater] = useState<boolean>(false);

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
      cCost2
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
        backgroundColor: "#ffffff"
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
      pdf.save(`Advanced_Standardization_${selectedPresetId}_${Date.now()}.pdf`);

      toast({
        title: "PDF Saved Successfully!",
        description: "Your recipe standardization sheet is downloaded.",
      });
    } catch (e) {
      if (printAreaRef.current) {
        printAreaRef.current.classList.remove("is-exporting-pdf");
      }
      console.error(e);
      toast({
        title: "Export Failed",
        description: "Opening print dialog as fallback.",
        variant: "destructive"
      });
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Calculator className="h-6 w-6 text-purple-600" />
              Advanced Dairy Batch Standardization
            </h2>
            <Badge className="bg-purple-100 text-purple-800 border-purple-200">Sweet Curd, Lassi & Multi-Solids</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Calculate accurate ingredient recipes (Milk, Cream, SMP, Skim Milk, Water, Sugar) with Custom SNF Formulas & Full Costing Breakdown.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint} className="h-9 text-xs border-slate-300">
            <Printer className="h-3.5 w-3.5 mr-1" /> Print Recipe Card
          </Button>

          <Button 
            size="sm" 
            onClick={handleDownloadPdf} 
            disabled={isDownloading}
            className="h-9 text-xs bg-purple-700 hover:bg-purple-800 text-white shadow-sm"
          >
            {isDownloading ? (
              <Loader2 className="h-3.5 w-3.5 mr-1 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5 mr-1" />
            )}
            Download PDF
          </Button>
        </div>
      </div>

      {/* PRESET SELECTOR BAR */}
      <Card className="border-purple-200 bg-purple-50/40 print:hidden">
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

      {/* Main Grid Layout: Inputs (5 Cols) & Printable Recipe Card (7 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: INPUT PARAMETERS */}
        <div className="lg:col-span-5 space-y-4 print:hidden">

          {/* 1. BATCH TARGET PARAMETERS */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <TargetIcon className="h-4 w-4 text-purple-600" />
                1. Target Batch Requirements
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

              <div>
                <Label className="text-xs font-semibold">Finished Mix Density (kg/L)</Label>
                <Input 
                  type="number"
                  step="0.001"
                  value={batchDensity} 
                  onChange={e => setBatchDensity(e.target.value)} 
                  className="h-8 text-xs font-mono"
                  placeholder="1.055"
                />
                <span className="text-[10px] text-slate-400">Sweet Curd / Lassi mix density is typically ~1.050 - 1.060 kg/L</span>
              </div>

              {/* TARGET SOLIDS MATRIX */}
              <div className="pt-2 border-t border-slate-200">
                <Label className="text-xs font-bold text-purple-900 block mb-2">Target Product Composition (%)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-[11px]">Target Fat %</Label>
                    <Input type="number" step="0.1" value={targetFat} onChange={e => setTargetFat(e.target.value)} className="h-8 text-xs font-bold text-amber-700" />
                  </div>
                  <div>
                    <Label className="text-[11px]">Target SNF %</Label>
                    <Input type="number" step="0.1" value={targetSnf} onChange={e => setTargetSnf(e.target.value)} className="h-8 text-xs font-bold text-blue-700" />
                  </div>
                  <div>
                    <Label className="text-[11px]">Target Sugar %</Label>
                    <Input type="number" step="0.1" value={targetSugar} onChange={e => setTargetSugar(e.target.value)} className="h-8 text-xs font-bold text-rose-700" />
                  </div>
                  <div>
                    <Label className="text-[11px]">Stabilizer/Flavor %</Label>
                    <Input type="number" step="0.05" value={targetAdditives} onChange={e => setTargetAdditives(e.target.value)} className="h-8 text-xs font-bold text-emerald-700" />
                  </div>
                </div>

                <div className="mt-2 bg-purple-50 p-2 rounded border border-purple-200 flex justify-between items-center text-xs">
                  <span className="font-bold text-purple-900">Total Target Solids (TS %):</span>
                  <span className="font-extrabold text-purple-950 text-sm">
                    {(parseFloat(targetFat) + parseFloat(targetSnf) + parseFloat(targetSugar) + parseFloat(targetAdditives)).toFixed(2)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. BASE RAW MATERIAL SPECS */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <Beaker className="h-4 w-4 text-purple-600" />
                2. Base Raw Material Specs & Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {/* SNF Calculation Formula Selector (Including Custom Formula) */}
              <div className="space-y-1.5 p-2.5 bg-purple-50/70 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-purple-900 block">Select SNF Calculation Formula</span>
                  <Badge variant="outline" className="bg-white text-[10px] text-purple-800 border-purple-300 font-mono font-bold">
                    {selectedSnfFormulaKey === "custom" ? "Custom Formula" : (snfFormulas[selectedSnfFormulaKey]?.name || "ISI Standard")}
                  </Badge>
                </div>
                <Select value={selectedSnfFormulaKey} onValueChange={setSelectedSnfFormulaKey}>
                  <SelectTrigger className="h-8 text-xs font-medium bg-white border-purple-300">
                    <SelectValue placeholder="Select SNF Formula..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(snfFormulas).map(([key, { name, formulaText }]) => (
                      <SelectItem key={key} value={key} className="text-xs">
                        <span className="font-semibold">{name}</span> — <span className="text-slate-500 font-mono text-[10px]">{formulaText}</span>
                      </SelectItem>
                    ))}
                    <SelectItem value="custom" className="text-xs font-bold text-purple-900">
                      ⚙️ Custom Formula (CLR/4 + a*Fat + b)
                    </SelectItem>
                  </SelectContent>
                </Select>

                {/* CUSTOM SNF FORMULA INPUTS */}
                {selectedSnfFormulaKey === "custom" ? (
                  <div className="grid grid-cols-2 gap-2 mt-2 p-2 bg-white rounded border border-purple-200">
                    <div>
                      <Label className="text-[10px]">Fat Multiplier (a)</Label>
                      <Input 
                        type="number" 
                        step="0.01" 
                        value={customFatMultiplier} 
                        onChange={e => setCustomFatMultiplier(e.target.value)} 
                        className="h-7 text-xs font-mono font-bold" 
                        placeholder="0.25"
                      />
                    </div>
                    <div>
                      <Label className="text-[10px]">Constant Factor (b)</Label>
                      <Input 
                        type="number" 
                        step="0.01" 
                        value={customConstant} 
                        onChange={e => setCustomConstant(e.target.value)} 
                        className="h-7 text-xs font-mono font-bold" 
                        placeholder="0.44"
                      />
                    </div>
                    <div className="col-span-2 text-[9.5px] text-purple-800 font-mono font-semibold">
                      SNF% = (CLR/4) + ({customFatMultiplier} × Fat) + {customConstant}
                    </div>
                  </div>
                ) : (
                  <span className="text-[10px] text-purple-700 italic block">
                    Formula: {snfFormulas[selectedSnfFormulaKey]?.formulaText}
                  </span>
                )}
              </div>

              {/* Base Liquid Milk Specs (ALWAYS VISIBLE - NOT IN DROPDOWN) */}
              <div className="space-y-2 p-3 bg-purple-50/40 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-purple-950 flex items-center gap-1">
                    <Milk className="h-3.5 w-3.5 text-purple-600" /> Base Liquid Milk Specs
                  </span>
                  <div className="flex items-center gap-1">
                    <button 
                      type="button"
                      onClick={() => setCalcSnfMode("direct")}
                      className={cn("px-2 py-0.5 text-[9.5px] rounded font-bold transition-all", calcSnfMode === "direct" ? "bg-purple-700 text-white" : "bg-white border text-slate-700")}
                    >
                      Direct SNF%
                    </button>
                    <button 
                      type="button"
                      onClick={() => setCalcSnfMode("clr")}
                      className={cn("px-2 py-0.5 text-[9.5px] rounded font-bold transition-all", calcSnfMode === "clr" ? "bg-purple-700 text-white" : "bg-white border text-slate-700")}
                    >
                      Via CLR
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div>
                    <Label className="text-[10.5px] font-semibold">Base Fat %</Label>
                    <Input type="number" step="0.1" value={baseMilkFat} onChange={e => setBaseMilkFat(e.target.value)} className="h-8 text-xs font-mono font-bold" />
                  </div>
                  {calcSnfMode === "clr" ? (
                    <div>
                      <Label className="text-[10.5px] font-semibold">Base CLR (15°C)</Label>
                      <Input type="number" step="0.1" value={baseMilkClr} onChange={e => setBaseMilkClr(e.target.value)} className="h-8 text-xs font-mono font-bold text-purple-800" />
                    </div>
                  ) : (
                    <div>
                      <Label className="text-[10.5px] font-semibold">Base SNF %</Label>
                      <Input type="number" step="0.1" value={baseMilkSnf} onChange={e => setBaseMilkSnf(e.target.value)} className="h-8 text-xs font-mono font-bold text-blue-800" />
                    </div>
                  )}
                  <div>
                    <Label className="text-[10.5px] font-semibold">Density (kg/L)</Label>
                    <Input type="number" step="0.001" value={baseMilkDensity} onChange={e => setBaseMilkDensity(e.target.value)} className="h-8 text-xs font-mono" />
                  </div>
                </div>

                {calcSnfMode === "clr" && (
                  <div className="text-[10px] text-purple-900 bg-white p-1.5 rounded border border-purple-200 font-semibold flex justify-between">
                    <span>Effective Calculated Base SNF%:</span>
                    <span className="font-mono font-extrabold text-purple-950">{calculations.effectiveBaseSnf.toFixed(2)}%</span>
                  </div>
                )}
              </div>

              {/* ADJUSTMENT COMPONENTS DROPDOWN SECTION HEADER */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Adjustment Components Specs (Collapsible Dropdowns)
                </span>
                <div className="grid grid-cols-2 gap-2 p-2 bg-slate-100 rounded-lg border border-slate-300 mb-3">
                  <div>
                    <Label className="text-[10px] font-bold text-slate-700">Fat Adjuster</Label>
                    <Select value={fatAdjuster} onValueChange={(val: any) => setFatAdjuster(val)}>
                      <SelectTrigger className="h-7 text-[11px] bg-white font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cream">Cream (40% Fat)</SelectItem>
                        <SelectItem value="rich_milk">Rich Whole Milk (6% Fat)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-[10px] font-bold text-slate-700">SNF Adjuster</Label>
                    <Select value={snfAdjuster} onValueChange={(val: any) => setSnfAdjuster(val)}>
                      <SelectTrigger className="h-7 text-[11px] bg-white font-semibold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smp">SMP Powder (96% TS)</SelectItem>
                        <SelectItem value="skim_milk">Skimmed Milk (0.1% Fat)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* 1. Cream Specs Dropdown */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button 
                  type="button" 
                  onClick={() => setOpenCream(!openCream)}
                  className="w-full p-2.5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center text-xs font-bold text-slate-800 transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-amber-600" />
                    <span>Cream Specs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      Fat: {creamFat}% | SNF: {creamSnf}%
                    </span>
                    {openCream ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                  </div>
                </button>

                {openCream && (
                  <div className="p-3 bg-white grid grid-cols-2 gap-2 border-t border-slate-200">
                    <div>
                      <Label className="text-[10px]">Cream Fat %</Label>
                      <Input type="number" step="0.5" value={creamFat} onChange={e => setCreamFat(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                    <div>
                      <Label className="text-[10px]">Cream SNF %</Label>
                      <Input type="number" step="0.1" value={creamSnf} onChange={e => setCreamSnf(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Rich Milk Specs Dropdown */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button 
                  type="button" 
                  onClick={() => setOpenRichMilk(!openRichMilk)}
                  className="w-full p-2.5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center text-xs font-bold text-slate-800 transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <Droplet className="h-3.5 w-3.5 text-orange-600" />
                    <span>Rich / Whole Milk Specs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-orange-800 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                      Fat: {richMilkFat}% | SNF: {richMilkSnf}%
                    </span>
                    {openRichMilk ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                  </div>
                </button>

                {openRichMilk && (
                  <div className="p-3 bg-white grid grid-cols-3 gap-1.5 border-t border-slate-200">
                    <div>
                      <Label className="text-[10px]">Rich Fat %</Label>
                      <Input type="number" step="0.1" value={richMilkFat} onChange={e => setRichMilkFat(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                    <div>
                      <Label className="text-[10px]">Rich SNF %</Label>
                      <Input type="number" step="0.1" value={richMilkSnf} onChange={e => setRichMilkSnf(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                    <div>
                      <Label className="text-[10px]">Density</Label>
                      <Input type="number" step="0.001" value={richMilkDensity} onChange={e => setRichMilkDensity(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                  </div>
                )}
              </div>

              {/* 3. SMP Powder Specs Dropdown */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button 
                  type="button" 
                  onClick={() => setOpenSmp(!openSmp)}
                  className="w-full p-2.5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center text-xs font-bold text-slate-800 transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <Beaker className="h-3.5 w-3.5 text-blue-600" />
                    <span>Skimmed Milk Powder (SMP) Specs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      TS: {smpSnf}% | Fat: {smpFat}%
                    </span>
                    {openSmp ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                  </div>
                </button>

                {openSmp && (
                  <div className="p-3 bg-white grid grid-cols-2 gap-2 border-t border-slate-200">
                    <div>
                      <Label className="text-[10px]">SMP SNF/TS %</Label>
                      <Input type="number" step="0.5" value={smpSnf} onChange={e => setSmpSnf(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                    <div>
                      <Label className="text-[10px]">SMP Fat %</Label>
                      <Input type="number" step="0.1" value={smpFat} onChange={e => setSmpFat(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Skimmed Milk Specs Dropdown */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button 
                  type="button" 
                  onClick={() => setOpenSkimMilk(!openSkimMilk)}
                  className="w-full p-2.5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center text-xs font-bold text-slate-800 transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <Droplet className="h-3.5 w-3.5 text-sky-600" />
                    <span>Skimmed Milk Specs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                      Fat: {skimMilkFat}% | SNF: {skimMilkSnf}%
                    </span>
                    {openSkimMilk ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                  </div>
                </button>

                {openSkimMilk && (
                  <div className="p-3 bg-white grid grid-cols-3 gap-1.5 border-t border-slate-200">
                    <div>
                      <Label className="text-[10px]">Skim Fat %</Label>
                      <Input type="number" step="0.05" value={skimMilkFat} onChange={e => setSkimMilkFat(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                    <div>
                      <Label className="text-[10px]">Skim SNF %</Label>
                      <Input type="number" step="0.1" value={skimMilkSnf} onChange={e => setSkimMilkSnf(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                    <div>
                      <Label className="text-[10px]">Density</Label>
                      <Input type="number" step="0.001" value={skimMilkDensity} onChange={e => setSkimMilkDensity(e.target.value)} className="h-7 text-xs font-mono" />
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Water Specs Dropdown */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button 
                  type="button" 
                  onClick={() => setOpenWater(!openWater)}
                  className="w-full p-2.5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center text-xs font-bold text-slate-800 transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <Droplet className="h-3.5 w-3.5 text-cyan-600" />
                    <span>Makeup Water (Dilution)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-cyan-800 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
                      0% Fat | 0% SNF
                    </span>
                    {openWater ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                  </div>
                </button>

                {openWater && (
                  <div className="p-3 bg-white space-y-2 border-t border-slate-200">
                    <Label className="text-[10px] font-bold">Auto Water Dilution</Label>
                    <Select value={waterChoice} onValueChange={(val: any) => setWaterChoice(val)}>
                      <SelectTrigger className="h-7 text-xs bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto calculate added water if required</SelectItem>
                        <SelectItem value="none">No water addition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

            </CardContent>
          </Card>

          {/* 3. RAW MATERIAL & OPERATIONAL COSTING (DETAILED & HIGH ACCURACY) */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <Scale className="h-4 w-4 text-purple-600" />
                3. Raw Material & Operational Costing Rates (Optional)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <Label className="text-[10.5px] font-semibold">Base Milk Rate (₹ / L)</Label>
                  <Input type="number" value={milkCostPerL} onChange={e => setMilkCostPerL(e.target.value)} className="h-7 text-xs font-mono" />
                </div>
                {fatAdjuster === "cream" ? (
                  <div>
                    <Label className="text-[10.5px] font-semibold">Cream Rate (₹ / kg)</Label>
                    <Input type="number" value={creamCostPerKg} onChange={e => setCreamCostPerKg(e.target.value)} className="h-7 text-xs font-mono" />
                  </div>
                ) : (
                  <div>
                    <Label className="text-[10.5px] font-semibold">Rich Milk Rate (₹ / L)</Label>
                    <Input type="number" value={richMilkCostPerL} onChange={e => setRichMilkCostPerL(e.target.value)} className="h-7 text-xs font-mono" />
                  </div>
                )}

                {snfAdjuster === "smp" ? (
                  <div>
                    <Label className="text-[10.5px] font-semibold">SMP Rate (₹ / kg)</Label>
                    <Input type="number" value={smpCostPerKg} onChange={e => setSmpCostPerKg(e.target.value)} className="h-7 text-xs font-mono" />
                  </div>
                ) : (
                  <div>
                    <Label className="text-[10.5px] font-semibold">Skim Milk Rate (₹ / L)</Label>
                    <Input type="number" value={skimMilkCostPerL} onChange={e => setSkimMilkCostPerL(e.target.value)} className="h-7 text-xs font-mono" />
                  </div>
                )}

                <div>
                  <Label className="text-[10.5px] font-semibold">Sugar Rate (₹ / kg)</Label>
                  <Input type="number" value={sugarCostPerKg} onChange={e => setSugarCostPerKg(e.target.value)} className="h-7 text-xs font-mono" />
                </div>

                <div>
                  <Label className="text-[10.5px] font-semibold">Stabilizer Rate (₹ / kg)</Label>
                  <Input type="number" value={additiveCostPerKg} onChange={e => setAdditiveCostPerKg(e.target.value)} className="h-7 text-xs font-mono" />
                </div>

                <div>
                  <Label className="text-[10.5px] font-semibold">Starter Culture (₹ / Batch)</Label>
                  <Input type="number" value={cultureCost} onChange={e => setCultureCost(e.target.value)} className="h-7 text-xs font-mono" />
                </div>

                <div className="col-span-2">
                  <Label className="text-[10.5px] font-semibold">Processing Overhead Cost (₹ / Unit Volume)</Label>
                  <Input type="number" step="0.1" value={overheadCostPerUnit} onChange={e => setOverheadCostPerUnit(e.target.value)} className="h-7 text-xs font-mono" />
                </div>
              </div>

              {/* DYNAMIC CUSTOM COST ROWS */}
              <div className="pt-2 border-t border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-purple-900 block">Custom Additional Cost Lines</span>
                <div className="grid grid-cols-12 gap-1.5 items-center">
                  <div className="col-span-7">
                    <Input value={customCost1Label} onChange={e => setCustomCost1Label(e.target.value)} placeholder="Custom Cost 1 Label" className="h-7 text-[11px]" />
                  </div>
                  <div className="col-span-5">
                    <Input type="number" value={customCost1Val} onChange={e => setCustomCost1Val(e.target.value)} placeholder="₹ Amount" className="h-7 text-xs font-mono" />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-1.5 items-center">
                  <div className="col-span-7">
                    <Input value={customCost2Label} onChange={e => setCustomCost2Label(e.target.value)} placeholder="Custom Cost 2 Label" className="h-7 text-[11px]" />
                  </div>
                  <div className="col-span-5">
                    <Input type="number" value={customCost2Val} onChange={e => setCustomCost2Val(e.target.value)} placeholder="₹ Amount" className="h-7 text-xs font-mono" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* RIGHT COLUMN: PRINTABLE RECIPE CARD & MASS BALANCE */}
        <div className="lg:col-span-7 space-y-4">

          <div className="w-full overflow-x-auto flex justify-center pb-8">
            <div 
              ref={printAreaRef}
              id="print-area-formats"
              className="bg-white text-slate-900 shadow-xl border border-slate-300 relative box-border font-sans p-6 w-[210mm] min-h-[297mm]"
              style={{ boxSizing: "border-box" }}
            >
              {/* DOCUMENT HEADER */}
              <div className="border-b-2 border-purple-900 pb-3 mb-4 flex justify-between items-start">
                <div>
                  <h1 className="text-xl font-extrabold text-purple-900 uppercase tracking-wide">
                    DAIRY BATCH RECIPE & STANDARDIZATION SHEET
                  </h1>
                  <p className="text-xs font-bold text-slate-600 mt-0.5 flex items-center gap-2">
                    PRODUCT: {PRODUCT_PRESETS.find(p => p.id === selectedPresetId)?.name || "CUSTOM MIX"}
                    <span className="text-[10px] text-purple-900 bg-purple-100 px-1.5 py-0.5 rounded font-mono font-semibold">
                      SNF Standard: {selectedSnfFormulaKey === "custom" ? "Custom Formula" : snfFormulas[selectedSnfFormulaKey]?.name}
                    </span>
                  </p>
                </div>
                <div className="text-right text-[10px] text-slate-500">
                  <div>Date: <span className="font-bold text-slate-800">{new Date().toISOString().split("T")[0]}</span></div>
                  <div>Doc Ref: <span className="font-mono text-slate-800">STD-BATCH-2026</span></div>
                </div>
              </div>

              {/* BATCH TARGET SUMMARY */}
              <div className="grid grid-cols-4 gap-2 bg-purple-50 p-3 rounded-lg border border-purple-200 mb-4 text-center">
                <div>
                  <span className="text-[9px] text-slate-500 font-bold block uppercase">BATCH SIZE</span>
                  <span className="text-sm font-extrabold text-purple-950">
                    {parseFloat(targetBatchVolume).toLocaleString()} {targetUnit.toUpperCase()}
                  </span>
                  <span className="text-[9px] text-slate-500 block">({calculations.targetWeightKg.toFixed(1)} kg)</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 font-bold block uppercase">TARGET FAT %</span>
                  <span className="text-sm font-extrabold text-amber-700">{targetFat}%</span>
                  <span className="text-[9px] text-slate-500 block">({calculations.reqFatKg.toFixed(2)} kg)</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 font-bold block uppercase">TARGET SNF %</span>
                  <span className="text-sm font-extrabold text-blue-700">{targetSnf}%</span>
                  <span className="text-[9px] text-slate-500 block">({calculations.reqSnfKg.toFixed(2)} kg)</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 font-bold block uppercase">TOTAL SOLIDS (TS)</span>
                  <span className="text-sm font-extrabold text-purple-900">
                    {calculations.actualTsPct.toFixed(2)}%
                  </span>
                  <span className="text-[9px] text-slate-500 block">({calculations.reqTsKg.toFixed(2)} kg)</span>
                </div>
              </div>

              {/* INGREDIENTS REQUIREMENT TABLE */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1">
                  <Layers className="h-3.5 w-3.5" /> Required Ingredients Recipe Breakdown
                </h3>
                <table className="w-full text-[10px] border-collapse border border-slate-300 text-slate-800">
                  <thead>
                    <tr className="bg-slate-100 font-bold text-center border-b border-slate-300">
                      <th className="border border-slate-300 px-2 py-1.5 text-left">Ingredient Name</th>
                      <th className="border border-slate-300 px-2 py-1.5 w-24">Req Weight (kg)</th>
                      <th className="border border-slate-300 px-2 py-1.5 w-24">Req Volume (L)</th>
                      <th className="border border-slate-300 px-2 py-1.5 w-20">Fat Cont. (kg)</th>
                      <th className="border border-slate-300 px-2 py-1.5 w-20">SNF Cont. (kg)</th>
                      <th className="border border-slate-300 px-2 py-1.5 w-20">Sugar/Add (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-2 py-1 font-bold">Base Milk ({baseMilkFat}% Fat, {calculations.effectiveBaseSnf.toFixed(2)}% SNF)</td>
                      <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold">{calculations.baseMilkKg.toFixed(2)} kg</td>
                      <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-purple-900">{calculations.baseMilkLiters.toFixed(2)} L</td>
                      <td className="border border-slate-300 px-2 py-1 text-right font-mono font-semibold text-amber-700">{(calculations.baseMilkKg * parseFloat(baseMilkFat) / 100).toFixed(2)}</td>
                      <td className="border border-slate-300 px-2 py-1 text-right font-mono font-semibold text-blue-700">{(calculations.baseMilkKg * calculations.effectiveBaseSnf / 100).toFixed(2)}</td>
                      <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                    </tr>
                    {calculations.fatAdjKg > 0.05 && (
                      <tr>
                        <td className="border border-slate-300 px-2 py-1 font-bold">
                          {fatAdjuster === "cream" ? `Cream (${creamFat}% Fat)` : `Rich Whole Milk (${richMilkFat}% Fat)`}
                        </td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-amber-800">{calculations.fatAdjKg.toFixed(2)} kg</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono">{(calculations.fatAdjKg / (fatAdjuster === "cream" ? 0.98 : (parseFloat(richMilkDensity)||1.031))).toFixed(2)} L</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-semibold text-amber-700">
                          {(calculations.fatAdjKg * (fatAdjuster === "cream" ? parseFloat(creamFat) : parseFloat(richMilkFat)) / 100).toFixed(2)}
                        </td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono text-slate-600">
                          {(calculations.fatAdjKg * (fatAdjuster === "cream" ? parseFloat(creamSnf) : parseFloat(richMilkSnf)) / 100).toFixed(2)}
                        </td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                      </tr>
                    )}
                    {calculations.snfAdjKg > 0.05 && (
                      <tr>
                        <td className="border border-slate-300 px-2 py-1 font-bold">
                          {snfAdjuster === "smp" ? `Skim Milk Powder - SMP (${smpSnf}% SNF)` : `Skimmed Milk (${skimMilkSnf}% SNF)`}
                        </td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-blue-800">{calculations.snfAdjKg.toFixed(2)} kg</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">
                          {snfAdjuster === "skim_milk" ? `${(calculations.snfAdjKg / (parseFloat(skimMilkDensity)||1.034)).toFixed(2)} L` : "-"}
                        </td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono text-slate-600">
                          {(calculations.snfAdjKg * (snfAdjuster === "smp" ? parseFloat(smpFat) : parseFloat(skimMilkFat)) / 100).toFixed(2)}
                        </td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-semibold text-blue-700">
                          {(calculations.snfAdjKg * (snfAdjuster === "smp" ? parseFloat(smpSnf) : parseFloat(skimMilkSnf)) / 100).toFixed(2)}
                        </td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                      </tr>
                    )}
                    {calculations.sugarKg > 0.05 && (
                      <tr>
                        <td className="border border-slate-300 px-2 py-1 font-bold">Sugar (Commercial Sucrose)</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800">{calculations.sugarKg.toFixed(2)} kg</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-semibold text-rose-700">{calculations.sugarKg.toFixed(2)}</td>
                      </tr>
                    )}
                    {calculations.additivesKg > 0.05 && (
                      <tr>
                        <td className="border border-slate-300 px-2 py-1 font-bold">Stabilizer / Flavoring Additive</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800">{calculations.additivesKg.toFixed(2)} kg</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono font-semibold text-emerald-700">{calculations.additivesKg.toFixed(2)}</td>
                      </tr>
                    )}
                    {calculations.addedWaterKg > 0.05 && (
                      <tr>
                        <td className="border border-slate-300 px-2 py-1 font-bold text-slate-600">Makeup Water (Dilution)</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono text-slate-700">{calculations.addedWaterKg.toFixed(2)} kg</td>
                        <td className="border border-slate-300 px-2 py-1 text-right font-mono text-slate-700">{calculations.addedWaterLiters.toFixed(2)} L</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                        <td className="border border-slate-300 px-2 py-1 text-center font-mono">-</td>
                      </tr>
                    )}
                    <tr className="bg-slate-100 font-extrabold border-t-2 border-slate-400">
                      <td className="border border-slate-300 px-2 py-1.5 uppercase text-purple-950">TOTAL BATCH MIX</td>
                      <td className="border border-slate-300 px-2 py-1.5 text-right font-mono text-purple-950 text-xs">{calculations.actualTotalKg.toFixed(2)} kg</td>
                      <td className="border border-slate-300 px-2 py-1.5 text-right font-mono text-purple-950 text-xs">{calculations.targetLiters.toFixed(2)} L</td>
                      <td className="border border-slate-300 px-2 py-1.5 text-right font-mono text-amber-800">{calculations.actualFatKg.toFixed(2)} kg</td>
                      <td className="border border-slate-300 px-2 py-1.5 text-right font-mono text-blue-800">{calculations.actualSnfKg.toFixed(2)} kg</td>
                      <td className="border border-slate-300 px-2 py-1.5 text-right font-mono text-rose-800">{(calculations.actualSugarKg + calculations.actualAdditivesKg).toFixed(2)} kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* MASS BALANCE VERIFICATION MATRIX */}
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" /> Mass Balance Verification & Accuracy Check
                </h3>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 border border-slate-200 rounded bg-slate-50">
                    <div className="flex justify-between font-bold border-b pb-1">
                      <span>Target Composition</span>
                      <span>Target %</span>
                    </div>
                    <div className="flex justify-between py-0.5"><span>Fat %:</span><span>{targetFat}%</span></div>
                    <div className="flex justify-between py-0.5"><span>SNF %:</span><span>{targetSnf}%</span></div>
                    <div className="flex justify-between py-0.5"><span>Sugar %:</span><span>{targetSugar}%</span></div>
                    <div className="flex justify-between py-0.5"><span>Additives %:</span><span>{targetAdditives}%</span></div>
                    <div className="flex justify-between font-bold pt-1 border-t text-purple-900"><span>Total Solids (TS %):</span><span>{calculations.reqTsKg ? ((calculations.reqTsKg/calculations.targetWeightKg)*100).toFixed(2) : 0}%</span></div>
                  </div>

                  <div className="p-2 border border-emerald-200 rounded bg-emerald-50/50">
                    <div className="flex justify-between font-bold border-b border-emerald-200 pb-1 text-emerald-900">
                      <span>Actual Calculated Batch</span>
                      <span>Achieved %</span>
                    </div>
                    <div className="flex justify-between py-0.5 font-bold text-amber-800"><span>Fat %:</span><span>{calculations.actualFatPct.toFixed(2)}%</span></div>
                    <div className="flex justify-between py-0.5 font-bold text-blue-800"><span>SNF %:</span><span>{calculations.actualSnfPct.toFixed(2)}%</span></div>
                    <div className="flex justify-between py-0.5 font-bold text-rose-800"><span>Sugar %:</span><span>{calculations.actualSugarPct.toFixed(2)}%</span></div>
                    <div className="flex justify-between py-0.5 font-bold text-emerald-800"><span>Additives %:</span><span>{calculations.actualAdditivesPct.toFixed(2)}%</span></div>
                    <div className="flex justify-between font-extrabold pt-1 border-t border-emerald-200 text-purple-950"><span>Total Solids (TS %):</span><span>{calculations.actualTsPct.toFixed(2)}%</span></div>
                  </div>
                </div>
              </div>

              {/* ITEMIZED COSTING SUMMARY TABLE */}
              {calculations.totalBatchCost > 0 && (
                <div className="mb-5 p-3 border border-purple-200 rounded-lg bg-purple-50/40 text-[10px]">
                  <div className="flex justify-between items-center font-extrabold text-purple-950 border-b border-purple-300 pb-1.5 mb-2">
                    <span className="flex items-center gap-1 uppercase tracking-wider text-xs">
                      <Scale className="h-3.5 w-3.5 text-purple-700" /> BATCH PRODUCTION COST BREAKDOWN
                    </span>
                    <span className="text-base font-black text-purple-950">₹ {calculations.totalBatchCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>

                  <table className="w-full border-collapse text-slate-800 mb-2">
                    <thead>
                      <tr className="border-b border-purple-200 font-bold text-left text-slate-600">
                        <th className="py-0.5">Component</th>
                        <th className="py-0.5 text-right">Rate</th>
                        <th className="py-0.5 text-right">Cost (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100">
                      {calculations.baseMilkTotalCost > 0 && (
                        <tr>
                          <td className="py-1">Base Milk ({calculations.baseMilkLiters.toFixed(1)} L)</td>
                          <td className="py-1 text-right font-mono">₹{milkCostPerL}/L</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.baseMilkTotalCost.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.fatAdjTotalCost > 0 && (
                        <tr>
                          <td className="py-1">{fatAdjuster === "cream" ? "Cream" : "Rich Whole Milk"} ({calculations.fatAdjKg.toFixed(1)} kg)</td>
                          <td className="py-1 text-right font-mono">₹{fatAdjuster === "cream" ? creamCostPerKg : richMilkCostPerL}/{fatAdjuster === "cream" ? "kg" : "L"}</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.fatAdjTotalCost.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.snfAdjTotalCost > 0 && (
                        <tr>
                          <td className="py-1">{snfAdjuster === "smp" ? "SMP Powder" : "Skimmed Milk"} ({calculations.snfAdjKg.toFixed(1)} kg)</td>
                          <td className="py-1 text-right font-mono">₹{snfAdjuster === "smp" ? smpCostPerKg : skimMilkCostPerL}/{snfAdjuster === "smp" ? "kg" : "L"}</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.snfAdjTotalCost.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.sugarTotalCost > 0 && (
                        <tr>
                          <td className="py-1">Sugar ({calculations.sugarKg.toFixed(1)} kg)</td>
                          <td className="py-1 text-right font-mono">₹{sugarCostPerKg}/kg</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.sugarTotalCost.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.additiveTotalCost > 0 && (
                        <tr>
                          <td className="py-1">Stabilizers ({calculations.additivesKg.toFixed(1)} kg)</td>
                          <td className="py-1 text-right font-mono">₹{additiveCostPerKg}/kg</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.additiveTotalCost.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.cultCost > 0 && (
                        <tr>
                          <td className="py-1">Starter Culture</td>
                          <td className="py-1 text-right font-mono">Fixed</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.cultCost.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.overheadTotalCost > 0 && (
                        <tr>
                          <td className="py-1">Operational Overhead</td>
                          <td className="py-1 text-right font-mono">₹{overheadCostPerUnit}/unit</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.overheadTotalCost.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.cCost1 > 0 && (
                        <tr>
                          <td className="py-1">{customCost1Label || "Custom Cost 1"}</td>
                          <td className="py-1 text-right font-mono">Custom</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.cCost1.toFixed(2)}</td>
                        </tr>
                      )}
                      {calculations.cCost2 > 0 && (
                        <tr>
                          <td className="py-1">{customCost2Label || "Custom Cost 2"}</td>
                          <td className="py-1 text-right font-mono">Custom</td>
                          <td className="py-1 text-right font-mono font-bold">₹{calculations.cCost2.toFixed(2)}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-purple-200 text-purple-950 font-bold">
                    <div>Final Cost per Kg: <span className="font-extrabold text-purple-900">₹ {calculations.costPerKg.toFixed(2)} / kg</span></div>
                    <div>Final Cost per Liter: <span className="font-extrabold text-purple-900">₹ {calculations.costPerLiter.toFixed(2)} / L</span></div>
                  </div>
                </div>
              )}

              {/* SIGNATURE BLOCK */}
              <div className="pt-6 space-y-4">
                <div className="flex justify-between items-center text-[8.5px] font-bold uppercase tracking-wider">
                  <div className="text-center w-32 border-t border-black pt-1">MIX PREPARED BY</div>
                  <div className="text-center w-32 border-t border-black pt-1">QA CHEMIST VERIFIED</div>
                  <div className="text-center w-32 border-t border-black pt-1">PLANT MANAGER SIGN</div>
                </div>

                <div className="border-t border-slate-300 pt-2 text-center text-[7.5px] text-slate-400 font-bold tracking-widest uppercase">
                  POWERED BY DAIRY HUB ERP SYSTEM
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* SWC build safe style tag */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .is-exporting-pdf .print\\:hidden,
        .is-exporting-pdf .no-pdf {
          display: none !important;
        }
        @media print {
          body * { visibility: hidden; }
          #print-area-formats, #print-area-formats * { visibility: visible; }
          #print-area-formats {
            position: absolute; left: 0; top: 0;
            width: 210mm !important;
            min-height: 297mm !important;
            padding: 10mm !important; margin: 0 !important;
            border: none !important; box-shadow: none !important;
            background-color: white !important;
            -webkit-print-color-adjust: exact; print-color-adjust: exact;
          }
          .print\\:hidden { display: none !important; }
        }
      `}} />
    </div>
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
