"use client"

import { useState, useMemo, useCallback, useTransition } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { milkStandards, snfFormulas } from "@/lib/data"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Calculator,
  Milk,
  Target,
  Beaker,
  CheckCircle2,
  AlertTriangle,
  Info,
  Scale,
  Droplets,
  Settings2,
  FunctionSquare,
  FileText,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import { cn } from "@/lib/utils"

type MainComponent = 'cream' | 'rich_milk' | 'skim_milk';

interface Results {
  mainComponentAmount: number;
  smpAmount: number;
  waterAmount: number;
  finalWeight: number;
  finalWeightLiters: number;
  finalFat: number;
  finalSnf: number;
  finalTS: number;
  infoMsg: string;
  mainComponentName: string;
  fatError: number;
  snfError: number;
}

export function StandardizationIModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [milkQuantity, setMilkQuantity] = useState("1000");
  const [milkUnit, setMilkUnit] = useState<'liters' | 'kg'>('liters');
  const [milkFat, setMilkFat] = useState("3.8")
  const [milkClr, setMilkClr] = useState("27.5")
  const [targetMilkType, setTargetMilkType] = useState<string>("toned")
  const [mainComponent, setMainComponent] = useState<MainComponent>('skim_milk');
  const [snfFormula, setSnfFormula] = useState('isi');
  const [customSnfConstants, setCustomSnfConstants] = useState({ fatMultiplier: "0.21", constant: "0.36" });

  const [creamFat, setCreamFat] = useState("40.0");
  const [creamSnf, setCreamSnf] = useState("5.4");
  const [richMilkFat, setRichMilkFat] = useState("6.0");
  const [richMilkClr, setRichMilkClr] = useState("29.0");
  const [skimMilkFat, setSkimMilkFat] = useState("0.05");
  const [skimMilkClr, setSkimMilkClr] = useState("28.0");
  const [smpFat, setSmpFat] = useState("0.5");
  const [smpTs, setSmpTs] = useState("97.0");

  const [results, setResults] = useState<Results | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [calculationSteps, setCalculationSteps] = useState<string[]>([])
  const [showCalculationSteps, setShowCalculationSteps] = useState(false)

  const allStandards = useMemo(() => ({
    ...milkStandards,
    'dahi_std': { name: 'Curd / Dahi (Standard)', fat: 3.0, snf: 10.0 },
    'dahi_part_skim': { name: 'Partly Skimmed Curd', fat: 1.5, snf: 10.0 },
    'dahi_skim': { name: 'Skimmed Curd', fat: 0.5, snf: 10.0 }
  }), []);

  const calculateSnf = useCallback((fat: number, clr: number) => {
    if (snfFormula === 'custom') {
        const multi = parseFloat(customSnfConstants.fatMultiplier);
        const constant = parseFloat(customSnfConstants.constant);
        if (!isNaN(multi) && !isNaN(constant)) {
            return (clr / 4) + (multi * fat) + constant;
        }
        return 0;
    }
    return snfFormulas[snfFormula as keyof typeof snfFormulas]?.calc(clr, fat) || 0;
  }, [snfFormula, customSnfConstants]);

  const currentFormulaText = useMemo(() => {
    if (snfFormula === 'custom') return `SNF = (CLR/4) + (${customSnfConstants.fatMultiplier} × Fat) + ${customSnfConstants.constant}`;
    return snfFormulas[snfFormula as keyof typeof snfFormulas]?.formulaText || '';
  }, [snfFormula, customSnfConstants]);

  const currentSnf = useMemo(() => milkClr && milkFat ? calculateSnf(parseFloat(milkFat), parseFloat(milkClr)) : 0, [milkFat, milkClr, calculateSnf]);
   
  const selectedStandard = allStandards[targetMilkType as keyof typeof allStandards];

  const handleCalculate = useCallback(() => {
    setError(null);
    setResults(null);
    setCalculationSteps([]);
    setShowCalculationSteps(false);

    const steps: string[] = [];
    const FIXED_DENSITY = 1.029; // ✅ Fixed average density

    const initialQty = parseFloat(milkQuantity);
    const initialFatRaw = parseFloat(milkFat);
    const initialClrRaw = parseFloat(milkClr);

    if (isNaN(initialQty) || initialQty <= 0) {
        setError('Please enter valid quantity');
        return;
    }

    const M_base = milkUnit === 'liters' ? initialQty * FIXED_DENSITY : initialQty;
    const initialFat = initialFatRaw / 100;
    const initialSnf = calculateSnf(initialFatRaw, initialClrRaw) / 100;

    if (!selectedStandard) { 
        setError('Invalid Target'); 
        return; 
    }

    const targetFat = selectedStandard.fat / 100;
    const targetSnfValue = selectedStandard.snf / 100;

    const isCurdTarget = targetMilkType.includes('dahi');
    let effectiveTargetSnf = targetSnfValue;
    let curdConcentrationFactor = 1.0;

    if (isCurdTarget) {
        curdConcentrationFactor = 0.88;
        effectiveTargetSnf = targetSnfValue / curdConcentrationFactor;
        steps.push(`🧀 CURD MODE: Milk SNF ${(effectiveTargetSnf*100).toFixed(2)}% → Curd ${(targetSnfValue*100).toFixed(2)}%`);
    }

    steps.push(`📊 Raw Milk: ${initialQty} ${milkUnit} (${M_base.toFixed(1)} kg)`);
    steps.push(`   Fat ${(initialFat*100).toFixed(2)}%, SNF ${(initialSnf*100).toFixed(2)}%`);
    steps.push(`🎯 Target: ${selectedStandard.name}`);

    const F_p = parseFloat(smpFat) / 100;
    const S_p = (parseFloat(smpTs) - parseFloat(smpFat)) / 100;
    const F_w = 0; 
    const S_w = 0;

    let mainComp: { name: string; F_m: number; S_m: number };
    if (mainComponent === 'cream') {
        mainComp = { name: "Cream", F_m: parseFloat(creamFat)/100, S_m: parseFloat(creamSnf)/100 };
    } else if (mainComponent === 'rich_milk') {
        const f = parseFloat(richMilkFat);
        const s = calculateSnf(f, parseFloat(richMilkClr));
        mainComp = { name: "Rich Milk", F_m: f/100, S_m: s/100 };
    } else {
        const f = parseFloat(skimMilkFat);
        const s = calculateSnf(f, parseFloat(skimMilkClr));
        mainComp = { name: "Skim Milk", F_m: f/100, S_m: s/100 };
    }

    const solveEquations = (F_other: number, S_other: number) => {
        const A1 = mainComp.F_m - targetFat;
        const B1 = F_other - targetFat;
        const C1 = M_base * (targetFat - initialFat);

        const A2 = mainComp.S_m - effectiveTargetSnf;
        const B2 = S_other - effectiveTargetSnf;
        const C2 = M_base * (effectiveTargetSnf - initialSnf);

        const det = (A1 * B2) - (A2 * B1);
        if (Math.abs(det) < 1e-10) return { x: -1, y: -1, valid: false };

        const x = ((C1 * B2) - (C2 * B1)) / det;
        const y = ((A1 * C2) - (C1 * A2)) / det;
        return { x, y, valid: true };
    };

    const solSMP = solveEquations(F_p, S_p);
    const solWater = solveEquations(F_w, S_w);

    let finalMain = 0, finalSmp = 0, finalWater = 0, success = false, infoMsg = "";
    const tolerance = 0.0001;

    if (solSMP.valid && solSMP.x > -tolerance && solSMP.y > -tolerance) {
        finalMain = Math.max(0, solSMP.x);
        finalSmp = Math.max(0, solSMP.y);
        success = true;
        infoMsg = `✅ Standardized using ${mainComp.name} + SMP`;
    } else if (solWater.valid && solWater.x > -tolerance && solWater.y > -tolerance) {
        finalMain = Math.max(0, solWater.x);
        finalWater = Math.max(0, solWater.y);
        success = true;
        infoMsg = `✅ Standardized using ${mainComp.name} + Water`;
    } else {
        setError("❌ Target unreachable. Try different Main Component.");
        return;
    }

    const totalWeight = M_base + finalMain + finalSmp + finalWater;
    const totalFatKg = (M_base * initialFat) + (finalMain * mainComp.F_m) + (finalSmp * F_p);
    const totalSnfKg = (M_base * initialSnf) + (finalMain * mainComp.S_m) + (finalSmp * S_p);

    let finalFatP = (totalFatKg / totalWeight) * 100;
    let finalSnfP = (totalSnfKg / totalWeight) * 100;
    const finalVolume = totalWeight / FIXED_DENSITY;

    let displaySnf = finalSnfP;
    if (isCurdTarget) {
        displaySnf = finalSnfP * (1 / curdConcentrationFactor);
    }

    steps.push(`🧮 ${mainComp.name}: ${finalMain.toFixed(1)}kg | SMP: ${finalSmp.toFixed(1)}kg | Water: ${finalWater.toFixed(1)}kg`);
    steps.push(`⚖️ Final: ${totalWeight.toFixed(1)}kg | Fat ${finalFatP.toFixed(2)}% | SNF ${displaySnf.toFixed(2)}%`);

    setCalculationSteps(steps);
    setResults({
      mainComponentAmount: finalMain,
      smpAmount: finalSmp,
      waterAmount: finalWater,
      finalWeight: totalWeight,
      finalWeightLiters: finalVolume,
      finalFat: finalFatP,
      finalSnf: displaySnf,
      finalTS: finalFatP + displaySnf,
      infoMsg,
      mainComponentName: mainComp.name,
      fatError: Math.abs(finalFatP - (targetFat * 100)),
      snfError: Math.abs(displaySnf - (targetSnfValue * 100))
    });

  }, [milkQuantity, milkUnit, milkFat, milkClr, targetMilkType, mainComponent, creamFat, creamSnf, richMilkFat, richMilkClr, skimMilkFat, skimMilkClr, smpFat, smpTs, calculateSnf, snfFormula, customSnfConstants, selectedStandard]);

  const showCurdQualityTip = useMemo(() => {
    if (!results) return false;
    return targetMilkType.includes('dahi') && results.finalSnf < 10.0;
  }, [results, targetMilkType]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-5xl h-[95vh] md:h-[90vh] p-0 md:p-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        
        <ScrollArea className="h-full">
          <div className="p-4 md:p-2">
            <DialogHeader className="text-center mb-6 md:mb-8 mt-4 md:mt-0">
              <DialogTitle className="text-2xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 tracking-tight">
                🥛 Milk Standardization
              </DialogTitle>
              <DialogDescription className="text-sm md:text-xl font-semibold text-slate-700 max-w-2xl mx-auto">
                Precision mass balance calculations (1.029 kg/L)
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 md:space-y-8 pb-8">
              {/* INPUT SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                {/* Raw Milk */}
                <div className="group bg-white/70 backdrop-blur-xl p-4 md:p-8 rounded-3xl border border-slate-200 shadow-xl md:shadow-2xl">
                  <div className="flex items-center gap-3 mb-4 md:mb-6 pb-4 border-b border-blue-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Milk className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">Raw Milk</h3>
                      <p className="text-xs md:text-sm text-slate-600 font-medium">Input parameters</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex flex-col md:flex-row gap-3 md:items-end">
                      <div className="flex-1">
                        <Label className="text-sm font-semibold text-slate-700 mb-2 block">Quantity</Label>
                        <Input value={milkQuantity} onChange={(e) => setMilkQuantity(e.target.value)} 
                               className="h-12 md:h-14 text-lg border-2 border-blue-200 focus:border-blue-500 shadow-sm" />
                      </div>
                      <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as 'liters' | 'kg')}>
                        <SelectTrigger className="h-12 md:h-14 w-full md:w-32 border-2 border-blue-200 focus:border-blue-500 shadow-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="liters">Liters</SelectItem>
                          <SelectItem value="kg">Kg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-semibold text-slate-700 mb-2 block">Fat %</Label>
                        <Input value={milkFat} onChange={(e) => setMilkFat(e.target.value)} 
                               className="h-12 md:h-14 text-lg border-2 border-blue-200 focus:border-blue-500 shadow-sm" />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-slate-700 mb-2 block">CLR</Label>
                        <Input value={milkClr} onChange={(e) => setMilkClr(e.target.value)} 
                               className="h-12 md:h-14 text-lg border-2 border-blue-200 focus:border-blue-500 shadow-sm" />
                      </div>
                    </div>

                    {currentSnf > 0 && (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                            <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm md:text-lg font-bold text-blue-900">Calculated SNF</p>
                            <p className="text-xl md:text-2xl font-black text-blue-700">{currentSnf.toFixed(2)}%</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Target */}
                <div className="group bg-white/70 backdrop-blur-xl p-4 md:p-8 rounded-3xl border border-slate-200 shadow-xl md:shadow-2xl">
                  <div className="flex items-center gap-3 mb-4 md:mb-6 pb-4 border-b border-emerald-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">Target</h3>
                      <p className="text-xs md:text-sm text-slate-600 font-medium">Select standard</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <Select value={targetMilkType} onValueChange={setTargetMilkType}>
                      <SelectTrigger className="h-14 md:h-16 border-2 border-emerald-200 focus:border-emerald-500 shadow-sm text-base md:text-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {Object.entries(allStandards).map(([key, {name}]) => (
                          <SelectItem key={key} value={key} className="text-base md:text-lg py-3 md:py-4 font-semibold">
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="grid grid-cols-2 gap-3 md:gap-6 p-4 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-200 shadow-inner">
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Target Fat</p>
                        <p className="text-2xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                          {selectedStandard?.fat?.toFixed(1)}%
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Target SNF</p>
                        <p className="text-2xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                          {selectedStandard?.snf?.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula & Ingredients */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                {/* SNF Formula */}
                <div className="group bg-white/70 backdrop-blur-xl p-4 md:p-8 rounded-3xl border border-slate-200 shadow-xl md:shadow-2xl">
                  <div className="flex items-center gap-3 mb-4 md:mb-6 pb-4 border-b border-violet-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Settings2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-transparent">SNF Formula</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <Select value={snfFormula} onValueChange={setSnfFormula}>
                      <SelectTrigger className="h-12 md:h-14 border-2 border-violet-200 focus:border-violet-500 shadow-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name}]) => (
                          <SelectItem key={key} value={key}>{name}</SelectItem>
                        ))}
                        <SelectItem value="custom" className="bg-violet-50 font-semibold">Custom Formula</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="p-3 md:p-4 bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl font-mono text-xs md:text-sm text-violet-800 min-h-[50px] md:min-h-[60px] flex items-center break-all">
                      {currentFormulaText || "Select formula..."}
                    </div>

                    {snfFormula === 'custom' && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-violet-200">
                        <div>
                          <Label className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-1 block">Fat ×</Label>
                          <Input value={customSnfConstants.fatMultiplier} onChange={(e) => setCustomSnfConstants(prev => ({...prev, fatMultiplier: e.target.value}))} 
                                 className="h-12 border-violet-300 focus:border-violet-500" />
                        </div>
                        <div>
                          <Label className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-1 block">+ C</Label>
                          <Input value={customSnfConstants.constant} onChange={(e) => setCustomSnfConstants(prev => ({...prev, constant: e.target.value}))} 
                                 className="h-12 border-violet-300 focus:border-violet-500" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ingredients */}
                <div className="group bg-white/70 backdrop-blur-xl p-4 md:p-8 rounded-3xl border border-slate-200 shadow-xl md:shadow-2xl">
                  <div className="flex items-center gap-3 mb-4 md:mb-6 pb-4 border-b border-amber-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Beaker className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">Ingredients</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <Label className="text-sm font-semibold text-slate-700 mb-3 block">Main Component</Label>
                      <Select value={mainComponent} onValueChange={(v) => setMainComponent(v as MainComponent)}>
                        <SelectTrigger className="h-12 md:h-14 border-2 border-amber-200 focus:border-amber-500 shadow-sm text-base md:text-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cream">🥛 Cream (increase fat)</SelectItem>
                          <SelectItem value="rich_milk">🐄 Rich Milk</SelectItem>
                          <SelectItem value="skim_milk">🧊 Skim Milk (decrease fat)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {mainComponent === 'cream' && (<>
                        <div><Label className="text-sm font-semibold mb-2 block">Cream Fat</Label><Input value={creamFat} onChange={e => setCreamFat(e.target.value)} className="h-12 border-2 border-amber-200 focus:border-amber-500" /></div>
                        <div><Label className="text-sm font-semibold mb-2 block">Cream SNF</Label><Input value={creamSnf} onChange={e => setCreamSnf(e.target.value)} className="h-12 border-2 border-amber-200 focus:border-amber-500" /></div>
                      </>)}
                      {mainComponent === 'rich_milk' && (<>
                        <div><Label className="text-sm font-semibold mb-2 block">Rich Fat</Label><Input value={richMilkFat} onChange={e => setRichMilkFat(e.target.value)} className="h-12 border-2 border-amber-200 focus:border-amber-500" /></div>
                        <div><Label className="text-sm font-semibold mb-2 block">Rich CLR</Label><Input value={richMilkClr} onChange={e => setRichMilkClr(e.target.value)} className="h-12 border-2 border-amber-200 focus:border-amber-500" /></div>
                      </>)}
                      {mainComponent === 'skim_milk' && (<>
                        <div><Label className="text-sm font-semibold mb-2 block">Skim Fat</Label><Input value={skimMilkFat} onChange={e => setSkimMilkFat(e.target.value)} className="h-12 border-2 border-amber-200 focus:border-amber-500" /></div>
                        <div><Label className="text-sm font-semibold mb-2 block">Skim CLR</Label><Input value={skimMilkClr} onChange={e => setSkimMilkClr(e.target.value)} className="h-12 border-2 border-amber-200 focus:border-amber-500" /></div>
                      </>)}
                    </div>

                    <div className="p-3 md:p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl text-xs md:text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-center gap-2 mb-1 w-full md:w-auto">
                          <Info className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                          <span className="font-bold text-amber-900">Auto SMP:</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>Fat:</span>
                          <Input value={smpFat} onChange={(e)=>setSmpFat(e.target.value)} className="inline-block w-16 h-8 md:w-20 md:h-10 text-xs md:text-sm" />
                          <span>%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>TS:</span>
                          <Input value={smpTs} onChange={(e)=>setSmpTs(e.target.value)} className="inline-block w-16 h-8 md:w-20 md:h-10 text-xs md:text-sm" />
                          <span>%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <Button onClick={handleCalculate} 
                      className="w-full h-16 md:h-20 text-xl md:text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200">
                <Calculator className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-4" />
                Calculate
              </Button>

              {/* Results */}
              {error && (
                <Alert className="border-4 border-red-200 bg-red-50 shadow-2xl p-4 md:p-8 rounded-3xl">
                  <AlertTriangle className="h-10 w-10 md:h-12 md:w-12 text-red-500" />
                  <AlertDescription className="text-lg md:text-xl font-bold text-red-900 mt-2 md:mt-4">{error}</AlertDescription>
                </Alert>
              )}

              {results && (
                <>
                  {showCurdQualityTip && (
                    <Alert className="border-4 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-2xl p-4 md:p-8 rounded-3xl">
                      <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Scale className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                        </div>
                        <div>
                          <AlertTitle className="text-xl md:text-2xl font-black text-yellow-900 mb-2 md:mb-3">Quality Note</AlertTitle>
                          <AlertDescription className="text-base md:text-lg text-yellow-900 leading-relaxed">
                            Current SNF <strong>{results.finalSnf.toFixed(2)}%</strong> is FSSAI compliant, but for premium thick curd aim for <strong>10.0-10.5% SNF</strong>.
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  )}

                  <Alert className="border-4 border-emerald-200 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 shadow-2xl p-4 md:p-10 rounded-3xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8 text-center md:text-left">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-emerald-600" />
                      </div>
                      <div>
                        <AlertTitle className="text-xl md:text-3xl font-black bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-2">
                          {results.infoMsg}
                        </AlertTitle>
                        <p className="text-base md:text-xl text-emerald-800 font-semibold">Precision: ±{(results.fatError + results.snfError).toFixed(3)}%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
                      {results.mainComponentAmount > 0.1 && (
                        <div className="group bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-xl p-4 md:p-8 rounded-3xl border-4 border-yellow-200 hover:border-yellow-300 transition-all duration-200 hover:scale-[1.02] text-center md:text-left">
                          <p className="text-base md:text-lg font-bold text-yellow-900 mb-2 md:mb-3">{results.mainComponentName}</p>
                          <p className="text-3xl md:text-5xl font-black text-yellow-700">{results.mainComponentAmount.toFixed(1)}</p>
                          <p className="text-sm md:text-lg font-semibold text-yellow-600 mt-2">kg</p>
                        </div>
                      )}
                      {results.smpAmount > 0.1 && (
                        <div className="group bg-gradient-to-br from-orange-400/20 to-red-400/20 backdrop-blur-xl p-4 md:p-8 rounded-3xl border-4 border-orange-200 hover:border-orange-300 transition-all duration-200 hover:scale-[1.02] text-center md:text-left">
                          <p className="text-base md:text-lg font-bold text-orange-900 mb-2 md:mb-3">SMP</p>
                          <p className="text-3xl md:text-5xl font-black text-orange-700">{results.smpAmount.toFixed(1)}</p>
                          <p className="text-sm md:text-lg font-semibold text-orange-600 mt-2">kg</p>
                        </div>
                      )}
                      {results.waterAmount > 0.1 && (
                        <div className="group bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-xl p-4 md:p-8 rounded-3xl border-4 border-cyan-200 hover:border-cyan-300 transition-all duration-200 hover:scale-[1.02] text-center md:text-left">
                          <p className="text-base md:text-lg font-bold text-cyan-900 mb-2 md:mb-3">Water</p>
                          <p className="text-3xl md:text-5xl font-black text-cyan-700">{results.waterAmount.toFixed(1)}</p>
                          <p className="text-sm md:text-lg font-semibold text-cyan-600 mt-2">kg</p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                      <div className="bg-white/50 backdrop-blur-xl p-4 md:p-8 rounded-2xl border-2 border-slate-200 text-center shadow-xl">
                        <p className="text-[10px] md:text-sm font-bold text-slate-600 uppercase tracking-wider mb-2 md:mb-3">Total Weight</p>
                        <p className="text-2xl md:text-4xl font-black text-slate-900">{results.finalWeight.toFixed(1)}</p>
                        <p className="text-xs md:text-lg text-slate-600">{results.finalWeightLiters.toFixed(1)} L</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-xl p-4 md:p-8 rounded-2xl border-2 border-purple-200 text-center shadow-xl">
                        <p className="text-[10px] md:text-sm font-bold text-purple-700 uppercase tracking-wider mb-2 md:mb-3">Final Fat</p>
                        <p className="text-2xl md:text-4xl font-black text-purple-700">{results.finalFat.toFixed(2)}%</p>
                        <Badge className={cn("text-xs md:text-lg px-2 md:px-4 py-1 md:py-2 mt-2 font-bold h-auto md:h-10", 
                              results.fatError <= 0.05 ? "bg-emerald-500" : "bg-yellow-500")}>
                          ±{results.fatError.toFixed(2)}%
                        </Badge>
                      </div>
                      <div className="bg-gradient-to-br from-pink-400/20 to-rose-400/20 backdrop-blur-xl p-4 md:p-8 rounded-2xl border-2 border-pink-200 text-center shadow-xl">
                        <p className="text-[10px] md:text-sm font-bold text-pink-700 uppercase tracking-wider mb-2 md:mb-3">Final SNF</p>
                        <p className="text-2xl md:text-4xl font-black text-pink-700">{results.finalSnf.toFixed(2)}%</p>
                        <Badge className={cn("text-xs md:text-lg px-2 md:px-4 py-1 md:py-2 mt-2 font-bold h-auto md:h-10", 
                              results.snfError <= 0.05 ? "bg-emerald-500" : "bg-yellow-500")}>
                          ±{results.snfError.toFixed(2)}%
                        </Badge>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-400/20 to-slate-400/20 backdrop-blur-xl p-4 md:p-8 rounded-2xl border-2 border-indigo-200 text-center shadow-xl">
                        <p className="text-[10px] md:text-sm font-bold text-indigo-700 uppercase tracking-wider mb-2 md:mb-3">Total Solids</p>
                        <p className="text-2xl md:text-4xl font-black text-indigo-700">{results.finalTS.toFixed(2)}%</p>
                      </div>
                    </div>
                  </Alert>
                </>
              )}

              {/* Calculation Steps */}
              {results && (
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden">
                  <Button 
                      variant="ghost" 
                      onClick={() => setShowCalculationSteps(!showCalculationSteps)}
                      className="w-full p-4 md:p-8 hover:bg-slate-50 border-b border-slate-200 text-left text-base md:text-xl font-bold text-slate-800 h-auto"
                  >
                    <div className="flex items-center gap-2 md:gap-4">
                      <FileText className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                      <span>📋 Detailed Calculation Steps</span>
                      {showCalculationSteps ? <ChevronUp className="w-5 h-5 md:w-6 md:h-6 ml-auto" /> : <ChevronDown className="w-5 h-5 md:w-6 md:h-6 ml-auto" />}
                    </div>
                  </Button>
                  
                  {showCalculationSteps && (
                    <div className="p-4 md:p-8 max-h-[500px]">
                      <ScrollArea className="h-full pr-4">
                        <div className="space-y-3 text-xs md:text-sm font-mono text-slate-800 leading-relaxed max-w-4xl">
                          {calculationSteps.map((step, idx) => (
                            <div key={idx} className={cn(
                              "p-3 md:p-4 rounded-2xl border-l-4",
                              step.includes('✅') && 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold',
                              step.includes('🧮') && 'bg-blue-50 border-blue-400 text-blue-900 font-semibold',
                              step.includes('🧀') && 'bg-amber-50 border-amber-400 text-amber-900 font-semibold',
                              step.includes('📊') && 'bg-slate-50 border-slate-400 text-slate-900 font-bold bg-gradient-to-r from-slate-100 to-slate-200'
                            )}>
                              {step}
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
