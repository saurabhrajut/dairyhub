"use client"

import { useState, useMemo, useCallback } from "react"
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
import { milkStandards, componentProps, snfFormulas } from "@/lib/data"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Calculator,
  Milk,
  Target,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  FlaskConical,
  Scale,
  Droplets,
  Sigma,
  Settings2,
  FunctionSquare
} from "lucide-react"
import { cn } from "@/lib/utils"

// Types
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
  // Input states
  const [milkQuantity, setMilkQuantity] = useState("1000");
  const [milkUnit, setMilkUnit] = useState<'liters' | 'kg'>('liters');
  const [milkFat, setMilkFat] = useState("3.8")
  const [milkClr, setMilkClr] = useState("27.5")
  const [targetMilkType, setTargetMilkType] = useState<string>("toned")
  const [mainComponent, setMainComponent] = useState<MainComponent>('cream');
  const [snfFormula, setSnfFormula] = useState('isi');
  const [customSnfConstants, setCustomSnfConstants] = useState({ fatMultiplier: "0.25", constant: "0.36" });

  // Ingredient properties states
  const [creamFat, setCreamFat] = useState("40.0");
  const [creamSnf, setCreamSnf] = useState("5.4");
  const [richMilkFat, setRichMilkFat] = useState("6.0");
  const [richMilkClr, setRichMilkClr] = useState("29.0");
  const [skimMilkFat, setSkimMilkFat] = useState("0.05");
  const [skimMilkClr, setSkimMilkClr] = useState("28.0");
  const [smpFat, setSmpFat] = useState("0.5");
  const [smpTs, setSmpTs] = useState("96.0");

  // Output states
  const [results, setResults] = useState<Results | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [calculationSteps, setCalculationSteps] = useState<string[]>([])
  const [showCalculationSteps, setShowCalculationSteps] = useState(false)

  // Merging external standards with new Professional Curd options
  const allStandards = useMemo(() => {
    return {
      ...milkStandards,
      'dahi_std': { name: 'Curd / Dahi (Standard)', fat: 3.0, snf: 8.5 },
      'dahi_part_skim': { name: 'Partly Skimmed Curd', fat: 1.5, snf: 8.5 }, 
      'dahi_skim': { name: 'Skimmed Curd', fat: 0.5, snf: 8.5 }
    }
  }, []);

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

  const currentSnf = useMemo(() => milkClr && milkFat ? calculateSnf(parseFloat(milkFat), parseFloat(milkClr)) : 0, [milkFat, milkClr, calculateSnf]);
  
  const selectedStandard = allStandards[targetMilkType as keyof typeof allStandards];

  // Get current formula display text
  const currentFormulaText = useMemo(() => {
    if (snfFormula === 'custom') return `(CLR / 4) + (Fat * ${customSnfConstants.fatMultiplier}) + ${customSnfConstants.constant}`;
    return snfFormulas[snfFormula as keyof typeof snfFormulas]?.formulaText || '';
  }, [snfFormula, customSnfConstants]);
  
  const handleCalculate = useCallback(() => {
    setError(null);
    setResults(null);
    setCalculationSteps([]);
    setShowCalculationSteps(false);

    const steps: string[] = [];
    const initialQty = parseFloat(milkQuantity);
    const initialFat = parseFloat(milkFat) / 100;
    const initialSnf = calculateSnf(parseFloat(milkFat), parseFloat(milkClr)) / 100;

    if (!selectedStandard) {
        setError('Invalid Target Selection');
        return;
    }

    const targetFat = selectedStandard.fat / 100;
    const targetSnfValue = selectedStandard.snf / 100;

    const M_base = milkUnit === 'liters' ? initialQty * componentProps.milkDensity : initialQty;

    if (isNaN(M_base) || isNaN(initialFat) || isNaN(initialSnf) || M_base <= 0) {
        setError('⚠️ Please enter valid positive numbers in all initial milk fields.');
        return;
    }

    // ============ LOG: STEP 1 - Initialization ============
    steps.push(`📝 **STEP 1: INITIALIZATION & CONVERSION**`);
    steps.push(`   Target: ${selectedStandard.name} (Fat: ${(targetFat*100).toFixed(2)}%, SNF: ${(targetSnfValue*100).toFixed(2)}%)`);
    steps.push(`   Formula: ${currentFormulaText}`);
    steps.push(`   Base Milk Mass (M_base): ${M_base.toFixed(2)} kg`);
    steps.push(`   Base Composition: Fat=${(initialFat*100).toFixed(2)}%, SNF=${(initialSnf*100).toFixed(2)}%`);
    
    const F_p = parseFloat(smpFat) / 100;
    const S_p = (parseFloat(smpTs) - F_p * 100) / 100;
    const F_w = 0, S_w = 0;

    let mainComp: { name: string; F_m: number; S_m: number; };

    if (mainComponent === 'cream') {
        mainComp = { name: "Cream", F_m: parseFloat(creamFat)/100, S_m: parseFloat(creamSnf)/100 };
    } else if (mainComponent === 'rich_milk') {
        const richFatVal = parseFloat(richMilkFat);
        const richSnfVal = calculateSnf(richFatVal, parseFloat(richMilkClr));
        mainComp = { name: "Rich Milk", F_m: richFatVal/100, S_m: richSnfVal/100 };
    } else {
        const skimFatVal = parseFloat(skimMilkFat);
        const skimSnfVal = calculateSnf(skimFatVal, parseFloat(skimMilkClr));
        mainComp = { name: "Skim Milk", F_m: skimFatVal/100, S_m: skimSnfVal/100 };
    }

    steps.push(`   Main Component (${mainComp.name}): Fat=${(mainComp.F_m*100).toFixed(2)}%, SNF=${(mainComp.S_m*100).toFixed(2)}%`);

    if (isNaN(mainComp.F_m) || isNaN(mainComp.S_m)) {
        setError('❌ Invalid Main Component properties.');
        return;
    }

    // ============ LOG: STEP 2 - Mathematical Model ============
    steps.push(`\n📐 **STEP 2: MATHEMATICAL MODEL (Double Pearson)**`);
    steps.push(`   System of Equations:`);
    steps.push(`   1) Fat Balance: X(F_m - F_t) + Y(F_y - F_t) = M_base(F_t - F_b)`);
    steps.push(`   2) SNF Balance: X(S_m - S_t) + Y(S_y - S_t) = M_base(S_t - S_b)`);

    const solveSystem = (F_y: number, S_y: number, compName: string) => {
        const a1 = mainComp.F_m - targetFat;
        const b1 = F_y - targetFat;
        const c1 = M_base * (targetFat - initialFat);

        const a2 = mainComp.S_m - targetSnfValue;
        const b2 = S_y - targetSnfValue;
        const c2 = M_base * (targetSnfValue - initialSnf);

        const det = a1 * b2 - a2 * b1;
        
        return { X: (c1 * b2 - c2 * b1) / det, Y: (a1 * c2 - c1 * a2) / det, det, a1, b1, c1, a2, b2, c2 };
    };

    const solSMP = solveSystem(F_p, S_p, "SMP");
    const solWater = solveSystem(F_w, S_w, "Water");

    let mainAmount = 0, smpAmount = 0, waterAmount = 0, infoMsg = "";
    let selectedSol = null;
    let selectedType = "";

    if (solSMP.X >= -1e-6 && solSMP.Y >= -1e-6) {
        mainAmount = solSMP.X; smpAmount = solSMP.Y;
        selectedSol = solSMP; selectedType = "SMP";
        infoMsg = "Solution Found: Main Component + SMP";
    } else if (solWater.X >= -1e-6 && solWater.Y >= -1e-6) {
        mainAmount = solWater.X; waterAmount = solWater.Y;
        selectedSol = solWater; selectedType = "Water";
        infoMsg = "Solution Found: Main Component + Water";
    } else {
        steps.push(`❌ **Optimization Failed:** Negative values encountered.`);
        setError("❌ Standardization not possible with current ingredients. Try changing Main Component.");
        return;
    }

    // ============ LOG: STEP 3 - Execution ============
    if (selectedSol) {
        steps.push(`\n⚙️ **STEP 3: SOLVING FOR ${mainComp.name} + ${selectedType}**`);
        steps.push(`   Determinant = ${selectedSol.det.toFixed(8)}`);
        steps.push(`   X (${mainComp.name}) = ${mainAmount.toFixed(4)} kg`);
        steps.push(`   Y (${selectedType}) = ${selectedType === 'SMP' ? smpAmount.toFixed(4) : waterAmount.toFixed(4)} kg`);
    }

    mainAmount = Math.max(0, mainAmount);
    smpAmount = Math.max(0, smpAmount);
    waterAmount = Math.max(0, waterAmount);

    const finalWeight = M_base + mainAmount + smpAmount + waterAmount;
    const finalWeightLiters = finalWeight / componentProps.milkDensity;
    
    // Mass Balance Check
    const totalFatIn = (initialFat * M_base) + (mainComp.F_m * mainAmount) + (F_p * smpAmount) + (F_w * waterAmount);
    const totalSnfIn = (initialSnf * M_base) + (mainComp.S_m * mainAmount) + (S_p * smpAmount) + (S_w * waterAmount);

    const finalFatPercent = (totalFatIn / finalWeight) * 100;
    const finalSnfPercent = (totalSnfIn / finalWeight) * 100;

    // ============ LOG: STEP 4 - Verification ============
    steps.push(`\n⚖️ **STEP 4: FINAL MASS BALANCE VERIFICATION**`);
    steps.push(`   **Total Fat Check:**`);
    steps.push(`     Total In: ${totalFatIn.toFixed(3)} kg`);
    steps.push(`     Expected Out: ${(finalWeight * targetFat).toFixed(3)} kg`);
    steps.push(`     Status: ${Math.abs(totalFatIn - (finalWeight * targetFat)) < 0.01 ? '✅ OK' : '❌ Drift'}`);

    steps.push(`   **Total SNF Check:**`);
    steps.push(`     Total In: ${totalSnfIn.toFixed(3)} kg`);
    steps.push(`     Expected Out: ${(finalWeight * targetSnfValue).toFixed(3)} kg`);
    steps.push(`     Status: ${Math.abs(totalSnfIn - (finalWeight * targetSnfValue)) < 0.01 ? '✅ OK' : '❌ Drift'}`);

    setCalculationSteps(steps);
    setResults({
      mainComponentAmount: mainAmount,
      smpAmount: smpAmount,
      waterAmount: waterAmount,
      finalWeight: finalWeight,
      finalWeightLiters,
      finalFat: finalFatPercent,
      finalSnf: finalSnfPercent,
      finalTS: finalFatPercent + finalSnfPercent,
      infoMsg: infoMsg,
      mainComponentName: mainComp.name,
      fatError: Math.abs(finalFatPercent - (targetFat * 100)),
      snfError: Math.abs(finalSnfPercent - (targetSnfValue * 100))
    });

  }, [milkQuantity, milkUnit, milkFat, milkClr, selectedStandard, mainComponent, creamFat, creamSnf, richMilkFat, richMilkClr, skimMilkFat, skimMilkClr, smpFat, smpTs, calculateSnf, snfFormula, currentFormulaText]);

  // Check for Curd Quality Suggestion
  const showCurdQualityTip = useMemo(() => {
    if (!results) return false;
    const isCurdTarget = targetMilkType.includes('dahi') || targetMilkType.includes('curd');
    return isCurdTarget && results.finalSnf < 10.0;
  }, [results, targetMilkType]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[95vh] bg-white p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
          <DialogTitle className="font-bold text-2xl text-center bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <FlaskConical className="w-7 h-7 text-blue-600" />
            Standardization Calculator
          </DialogTitle>
          <DialogDescription className="text-center text-blue-600/80 font-medium">
            Professional Mass Balance • Precision Analysis
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-full px-4 sm:px-6 py-6">
          
          {/* INPUTS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            
            {/* Raw Milk Section */}
            <div className="bg-blue-50/50 p-5 rounded-xl border-2 border-blue-200 shadow-sm relative overflow-hidden">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Milk className="w-5 h-5 text-blue-700" />
                Input: Raw Milk / Base
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 sm:col-span-2">
                        <Label className="text-blue-700 text-xs uppercase tracking-wider font-bold">Quantity</Label>
                        <div className="flex gap-2 mt-1">
                            <Input 
                                value={milkQuantity} 
                                onChange={(e) => setMilkQuantity(e.target.value)} 
                                className="h-11 border-blue-300 focus:border-blue-500 font-mono text-lg bg-white" 
                            />
                            <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as 'liters' | 'kg')}>
                                <SelectTrigger className="w-[110px] h-11 bg-blue-100/50 border-blue-300 font-semibold text-blue-900">
                                    <SelectValue/>
                                </SelectTrigger>
                                <SelectContent><SelectItem value="liters">Liters</SelectItem><SelectItem value="kg">Kg</SelectItem></SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Label className="text-blue-700 text-xs uppercase tracking-wider font-bold">Fat %</Label>
                        <Input value={milkFat} onChange={(e) => setMilkFat(e.target.value)} className="mt-1 font-mono h-11 border-blue-300 bg-white" />
                    </div>
                    <div>
                        <Label className="text-blue-700 text-xs uppercase tracking-wider font-bold">CLR</Label>
                        <Input value={milkClr} onChange={(e) => setMilkClr(e.target.value)} className="mt-1 font-mono h-11 border-blue-300 bg-white" />
                    </div>
                </div>
                {currentSnf > 0 && (
                  <div className="flex justify-between items-center bg-blue-100/80 px-4 py-2 rounded-lg border border-blue-200">
                    <span className="text-xs text-blue-800 font-bold uppercase">Calculated SNF</span>
                    <span className="text-lg font-bold text-blue-900 font-mono">{currentSnf.toFixed(2)}%</span>
                  </div>
                )}
              </div>
            </div>

            {/* Target Section */}
            <div className="bg-emerald-50/50 p-5 rounded-xl border-2 border-emerald-200 shadow-sm relative overflow-hidden">
              <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-700" />
                Target Specification
              </h3>
              <div className="space-y-5">
                <div>
                  <Label className="text-emerald-700 text-xs uppercase tracking-wider font-bold">Product Variant</Label>
                  <Select value={targetMilkType} onValueChange={setTargetMilkType}>
                    <SelectTrigger className="h-11 mt-1 border-emerald-300 focus:ring-emerald-500 bg-white font-medium text-emerald-900">
                      <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(allStandards).map(([key, {name}]) => (
                        <SelectItem key={key} value={key} className="font-medium">
                            {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-100/80 p-3 rounded-lg border border-emerald-200 text-center">
                    <span className="text-xs text-emerald-700 font-bold uppercase block mb-1">Target Fat</span>
                    <span className="text-3xl font-bold text-emerald-900 font-mono">
                        {allStandards[targetMilkType as keyof typeof allStandards]?.fat.toFixed(1)}%
                    </span>
                  </div>
                  <div className="bg-emerald-100/80 p-3 rounded-lg border border-emerald-200 text-center">
                    <span className="text-xs text-emerald-700 font-bold uppercase block mb-1">Target SNF</span>
                    <span className="text-3xl font-bold text-emerald-900 font-mono">
                        {allStandards[targetMilkType as keyof typeof allStandards]?.snf.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {targetMilkType.includes('dahi') && (
                    <div className="flex gap-2 items-start bg-emerald-200/30 p-3 rounded border border-emerald-200 text-xs text-emerald-800 leading-relaxed font-medium">
                        <Info className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
                        <p>
                           <strong>Note:</strong> FSSAI parameters. Industry often uses higher SNF for thicker curd texture.
                        </p>
                    </div>
                )}
              </div>
            </div>
          </div>

          {/* SNF FORMULA SETTINGS (Mobile Optimized) */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl border border-violet-200 shadow-sm mb-6">
             <div className="flex flex-col gap-3">
                <div className="flex-1">
                    <Label className="text-violet-800 text-xs uppercase tracking-wider font-bold flex items-center gap-2 mb-2">
                        <Settings2 className="w-4 h-4" /> SNF Calculation Method
                    </Label>
                    <Select value={snfFormula} onValueChange={setSnfFormula}>
                        <SelectTrigger className="h-10 border-violet-300 bg-white text-violet-900">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(snfFormulas).map(([key, {name}]) => (
                            <SelectItem key={key} value={key} className="font-semibold">
                                {name}
                            </SelectItem>
                            ))}
                            <SelectItem value="custom" className="font-semibold text-violet-700">Custom Formula</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Formula Preview Box - Separated for Mobile Layout */}
                <div className="bg-violet-100/50 rounded-md p-3 border border-violet-200 flex items-center gap-2">
                    <FunctionSquare className="w-4 h-4 text-violet-600 shrink-0" />
                    <span className="text-xs font-mono text-violet-800 break-all">
                        {currentFormulaText}
                    </span>
                </div>
             
                {/* Custom Inputs Logic - Stacked on Mobile */}
                {snfFormula === 'custom' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                        <div>
                            <Label className="text-[10px] text-violet-700 uppercase font-bold">Fat Multiplier</Label>
                            <Input 
                                value={customSnfConstants.fatMultiplier} 
                                onChange={(e) => setCustomSnfConstants(prev => ({...prev, fatMultiplier: e.target.value}))}
                                className="h-10 border-violet-300 bg-white mt-1"
                                placeholder="0.25"
                            />
                        </div>
                        <div>
                            <Label className="text-[10px] text-violet-700 uppercase font-bold">Constant (C)</Label>
                            <Input 
                                value={customSnfConstants.constant} 
                                onChange={(e) => setCustomSnfConstants(prev => ({...prev, constant: e.target.value}))}
                                className="h-10 border-violet-300 bg-white mt-1"
                                placeholder="0.36"
                            />
                        </div>
                    </div>
                )}
             </div>
          </div>

          {/* Ingredients Bar */}
          <div className="bg-amber-50/50 p-5 rounded-xl border-2 border-amber-200 shadow-sm mb-6 relative overflow-hidden">
             <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <Label className="text-amber-800 text-xs uppercase tracking-wider font-bold mb-2 block flex items-center gap-1">
                        <Droplets className="w-4 h-4" /> Balancing Ingredient
                    </Label>
                    <Select value={mainComponent} onValueChange={(v) => setMainComponent(v as MainComponent)}>
                        <SelectTrigger className="h-11 border-amber-300 bg-white font-medium text-amber-900"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cream">Cream (Fat source)</SelectItem>
                            <SelectItem value="rich_milk">Rich Milk</SelectItem>
                            <SelectItem value="skim_milk">Skim Milk (Fat reduction)</SelectItem>
                        </SelectContent>
                    </Select>
                    
                    <div className="flex flex-wrap gap-4 mt-3">
                        {mainComponent === 'cream' && (<>
                            <div><Label className="text-[10px] text-amber-700 uppercase font-bold">Fat %</Label><Input value={creamFat} onChange={e => setCreamFat(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/></div>
                            <div><Label className="text-[10px] text-amber-700 uppercase font-bold">SNF %</Label><Input value={creamSnf} onChange={e => setCreamSnf(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/></div>
                        </>)}
                        {mainComponent === 'rich_milk' && (<>
                            <div><Label className="text-[10px] text-amber-700 uppercase font-bold">Fat %</Label><Input value={richMilkFat} onChange={e => setRichMilkFat(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/></div>
                            <div><Label className="text-[10px] text-amber-700 uppercase font-bold">CLR</Label><Input value={richMilkClr} onChange={e => setRichMilkClr(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/></div>
                        </>)}
                        {mainComponent === 'skim_milk' && (<>
                            <div><Label className="text-[10px] text-amber-700 uppercase font-bold">Fat %</Label><Input value={skimMilkFat} onChange={e => setSkimMilkFat(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/></div>
                            <div><Label className="text-[10px] text-amber-700 uppercase font-bold">CLR</Label><Input value={skimMilkClr} onChange={e => setSkimMilkClr(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/></div>
                        </>)}
                    </div>
                </div>
                
                <div className="w-px bg-amber-300 hidden md:block"></div>
                
                <div className="flex-1">
                    <Label className="text-amber-800 text-xs uppercase tracking-wider font-bold mb-2 block flex items-center gap-1">
                        <Scale className="w-4 h-4" /> Powder (SMP) Specs
                    </Label>
                    <div className="flex flex-wrap gap-4 items-end">
                        <div>
                            <Label className="text-[10px] text-amber-700 uppercase font-bold">Fat %</Label>
                            <Input value={smpFat} onChange={(e)=>setSmpFat(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/>
                        </div>
                        <div>
                            <Label className="text-[10px] text-amber-700 uppercase font-bold">Total Solids (TS) %</Label>
                            <Input value={smpTs} onChange={(e)=>setSmpTs(e.target.value)} className="h-9 w-24 border-amber-300 bg-white"/>
                        </div>
                        <div className="text-xs text-amber-600 pb-2 italic font-medium">
                            (Used automatically)
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <Button onClick={handleCalculate} className="w-full h-14 text-lg font-bold tracking-wide bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg transition-all mb-8">
            <Calculator className="w-6 h-6 mr-3" />
            COMPUTE BATCH
          </Button>

          {error && (
            <Alert variant="destructive" className="mt-6 border-2 border-red-300 bg-red-50 text-red-900 font-medium">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {results && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-6">
              
              {showCurdQualityTip && (
                  <Alert className="bg-yellow-50 border-l-4 border-yellow-500 shadow-sm">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      <AlertTitle className="text-yellow-800 font-bold text-sm uppercase tracking-wide">Quality Recommendation</AlertTitle>
                      <AlertDescription className="text-yellow-900 text-sm mt-1 font-medium">
                          Current Batch SNF: <strong>{results.finalSnf.toFixed(2)}%</strong> (FSSAI Compliant).<br/>
                          However, for commercial <strong>Thick Curd/Dahi</strong>, industry standard is <strong>10.0% - 10.5% SNF</strong>.
                      </AlertDescription>
                  </Alert>
              )}

              {/* Main Result Card */}
              <div className="bg-white rounded-xl border-2 border-blue-100 shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-100 flex flex-wrap gap-2 justify-between items-center">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                        <span className="font-bold text-lg text-blue-900">{results.infoMsg}</span>
                    </div>
                    <Badge variant="secondary" className="bg-white border-2 border-blue-200 text-blue-800 text-base px-3 py-1">
                        Total Batch: {results.finalWeightLiters.toFixed(1)} L
                    </Badge>
                </div>

                <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className={cn("p-4 rounded-xl border-2 text-center transition-all shadow-sm", results.mainComponentAmount > 0.001 ? "bg-amber-50 border-amber-300 text-amber-900" : "bg-gray-50 border-gray-200 text-gray-400 opacity-60")}>
                            <span className="text-xs uppercase font-extrabold block mb-1">{results.mainComponentName}</span>
                            <span className="text-3xl font-extrabold">{results.mainComponentAmount.toFixed(2)}</span>
                            <span className="text-sm font-bold block opacity-70">kg</span>
                        </div>
                        <div className={cn("p-4 rounded-xl border-2 text-center transition-all shadow-sm", results.smpAmount > 0.001 ? "bg-orange-50 border-orange-300 text-orange-900" : "bg-gray-50 border-gray-200 text-gray-400 opacity-60")}>
                            <span className="text-xs uppercase font-extrabold block mb-1">Skim Milk Powder</span>
                            <span className="text-3xl font-extrabold">{results.smpAmount.toFixed(2)}</span>
                            <span className="text-sm font-bold block opacity-70">kg</span>
                        </div>
                        <div className={cn("p-4 rounded-xl border-2 text-center transition-all shadow-sm", results.waterAmount > 0.001 ? "bg-cyan-50 border-cyan-300 text-cyan-900" : "bg-gray-50 border-gray-200 text-gray-400 opacity-60")}>
                            <span className="text-xs uppercase font-extrabold block mb-1">Water</span>
                            <span className="text-3xl font-extrabold">{results.waterAmount.toFixed(2)}</span>
                            <span className="text-sm font-bold block opacity-70">kg</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                        <div className="bg-blue-50/80 p-3 rounded-lg border border-blue-200 text-center">
                            <span className="text-[10px] sm:text-xs uppercase font-bold text-blue-700">Final Weight</span>
                            <div className="text-lg sm:text-xl font-extrabold text-blue-900">{results.finalWeight.toFixed(1)}</div>
                            <span className="text-[10px] text-blue-600 font-semibold">kg</span>
                        </div>
                        <div className="bg-emerald-50/80 p-3 rounded-lg border border-emerald-200 text-center relative">
                            <span className="text-[10px] sm:text-xs uppercase font-bold text-emerald-700">Final Fat</span>
                            <div className="text-lg sm:text-xl font-extrabold text-emerald-900">{results.finalFat.toFixed(2)}%</div>
                            <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${results.fatError < 0.05 ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
                        </div>
                        <div className="bg-emerald-50/80 p-3 rounded-lg border border-emerald-200 text-center relative">
                            <span className="text-[10px] sm:text-xs uppercase font-bold text-emerald-700">Final SNF</span>
                            <div className="text-lg sm:text-xl font-extrabold text-emerald-900">{results.finalSnf.toFixed(2)}%</div>
                            <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${results.snfError < 0.05 ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
                        </div>
                        <div className="bg-indigo-50/80 p-3 rounded-lg border border-indigo-200 text-center">
                            <span className="text-[10px] sm:text-xs uppercase font-bold text-indigo-700">Total Solids</span>
                            <div className="text-lg sm:text-xl font-extrabold text-indigo-900">{results.finalTS.toFixed(2)}%</div>
                        </div>
                    </div>
                </div>
              </div>

              {/* Enhanced Detailed Logs */}
              <div className="rounded-xl border-2 border-gray-200 bg-gray-50 overflow-hidden shadow-sm">
                <Button 
                    variant="ghost" 
                    onClick={() => setShowCalculationSteps(!showCalculationSteps)}
                    className="w-full flex justify-between items-center p-4 hover:bg-gray-100 h-auto text-gray-800 font-bold border-b border-gray-200"
                >
                    <span className="flex items-center gap-2">
                        <Sigma className="w-5 h-5 text-purple-600" />
                        Verification: Full Math Process
                    </span>
                    {showCalculationSteps ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Button>
                
                {showCalculationSteps && (
                    <div className="p-4 bg-white">
                        <ScrollArea className="h-[400px] pr-4">
                        <div className="space-y-2 text-xs font-mono text-gray-700 leading-relaxed">
                            {calculationSteps.map((step, idx) => (
                            <p key={idx} className={cn(
                                "py-1 px-2 rounded-sm",
                                step.includes('**STEP') && 'bg-gray-100 font-extrabold text-sm text-gray-900 mt-4 border-l-4 border-blue-500',
                                step.includes('✅') && 'bg-green-50 text-emerald-800 font-bold border border-green-100',
                                step.includes('❌') && 'bg-red-50 text-red-800 font-bold border border-red-100',
                                !step.includes('**') && 'ml-2 border-l border-gray-200 pl-2'
                            )}>
                                {step.replace(/\*\*/g, '')}
                            </p>
                            ))}
                        </div>
                        </ScrollArea>
                    </div>
                )}
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
