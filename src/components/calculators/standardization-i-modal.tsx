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
import { milkStandards, componentProps, snfFormulas } from "@/lib/data"
import { getRecipeSuggestions } from "@/app/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Loader2, 
  Calculator,
  Milk,
  Target,
  Beaker,
  CheckCircle2,
  AlertTriangle,
  Info,
  TrendingUp,
  Scale,
  Droplets
} from "lucide-react"
import { cn } from "@/lib/utils"

type MilkType = keyof typeof milkStandards
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
  const [targetMilkType, setTargetMilkType] = useState<MilkType>("toned")
  const [mainComponent, setMainComponent] = useState<MainComponent>('cream');
  const [snfFormula, setSnfFormula] = useState('isi');
  const [customSnfConstants, setCustomSnfConstants] = useState({ fatMultiplier: "0.25", constant: "0.72" });

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
  const [recipe, setRecipe] = useState<string | null>(null)
  const [isRecipeLoading, startRecipeTransition] = useTransition()

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
  const targetSnf = useMemo(() => calculateSnf(milkStandards[targetMilkType].fat, milkStandards[targetMilkType].clr), [targetMilkType, calculateSnf]);

  const handleCalculate = useCallback(() => {
    setError(null);
    setResults(null);
    setRecipe(null);
    setCalculationSteps([]);

    const steps: string[] = [];

    const initialQty = parseFloat(milkQuantity);
    const initialFat = parseFloat(milkFat) / 100;
    const initialSnf = calculateSnf(parseFloat(milkFat), parseFloat(milkClr)) / 100;

    const targetFat = milkStandards[targetMilkType].fat / 100;
    const targetSnfValue = milkStandards[targetMilkType].snf / 100;

    const M_base = milkUnit === 'liters' ? initialQty * componentProps.milkDensity : initialQty;

    if (isNaN(M_base) || isNaN(initialFat) || isNaN(initialSnf) || M_base <= 0) {
        setError('⚠️ Kripya sabhi initial milk fields mein valid positive numbers enter karein.');
        return;
    }

    // ============ STEP 1: INPUT VALUES ============
    steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
    steps.push(`\n   Raw Milk:`);
    steps.push(`     Quantity: ${initialQty} ${milkUnit} → ${M_base.toFixed(6)} kg`);
    steps.push(`     Fat: ${milkFat}% → ${initialFat.toFixed(8)} (decimal)`);
    steps.push(`     CLR: ${milkClr}`);
    steps.push(`     SNF: ${(initialSnf * 100).toFixed(6)}% (calculated)`);
    
    steps.push(`\n   Target: ${milkStandards[targetMilkType].name}`);
    steps.push(`     Fat: ${(targetFat * 100).toFixed(6)}% → ${targetFat.toFixed(8)} (decimal)`);
    steps.push(`     SNF: ${(targetSnfValue * 100).toFixed(6)}% → ${targetSnfValue.toFixed(8)} (decimal)`);

    const F_p = parseFloat(smpFat) / 100;
    const S_p = (parseFloat(smpTs) - F_p * 100) / 100;
    const F_w = 0, S_w = 0;

    steps.push(`\n   SMP Properties:`);
    steps.push(`     Fat: ${smpFat}% → ${F_p.toFixed(8)}`);
    steps.push(`     TS: ${smpTs}%`);
    steps.push(`     SNF: ${(S_p * 100).toFixed(6)}%`);

    let mainComp: { name: string; F_m: number; S_m: number; };

    // ============ STEP 2: MAIN COMPONENT ============
    steps.push(`\n\n🧪 **═══════════ STEP 2: MAIN COMPONENT SELECTION ═══════════**`);

    if (mainComponent === 'cream') {
        mainComp = { name: "Cream", F_m: parseFloat(creamFat)/100, S_m: parseFloat(creamSnf)/100 };
        steps.push(`   Selected: **CREAM**`);
        steps.push(`     Fat: ${creamFat}% → ${mainComp.F_m.toFixed(8)}`);
        steps.push(`     SNF: ${creamSnf}% → ${mainComp.S_m.toFixed(8)}`);
    } else if (mainComponent === 'rich_milk') {
        const richFatVal = parseFloat(richMilkFat);
        const richSnfVal = calculateSnf(richFatVal, parseFloat(richMilkClr));
        mainComp = { name: "Rich Milk", F_m: richFatVal/100, S_m: richSnfVal/100 };
        steps.push(`   Selected: **RICH MILK**`);
        steps.push(`     Fat: ${richMilkFat}% → ${mainComp.F_m.toFixed(8)}`);
        steps.push(`     CLR: ${richMilkClr}`);
        steps.push(`     SNF: ${richSnfVal.toFixed(6)}% → ${mainComp.S_m.toFixed(8)}`);
    } else {
        const skimFatVal = parseFloat(skimMilkFat);
        const skimSnfVal = calculateSnf(skimFatVal, parseFloat(skimMilkClr));
        mainComp = { name: "Skim Milk", F_m: skimFatVal/100, S_m: skimSnfVal/100 };
        steps.push(`   Selected: **SKIM MILK**`);
        steps.push(`     Fat: ${skimMilkFat}% → ${mainComp.F_m.toFixed(8)}`);
        steps.push(`     CLR: ${skimMilkClr}`);
        steps.push(`     SNF: ${skimSnfVal.toFixed(6)}% → ${mainComp.S_m.toFixed(8)}`);
    }

    if (isNaN(mainComp.F_m) || isNaN(mainComp.S_m)) {
        setError('❌ Please enter valid properties for the selected main component.');
        return;
    }

    // ============ STEP 3: SOLVE LINEAR EQUATIONS ============
    steps.push(`\n\n🧮 **═══════════ STEP 3: SOLVE LINEAR EQUATIONS ═══════════**`);
    steps.push(`   We need to solve for X (main component) and Y (SMP or Water)`);

    // System 1: Main Component + SMP
    steps.push(`\n   **System 1: ${mainComp.name} + SMP**`);
    steps.push(`   Equations:`);
    steps.push(`     X × (F_main - F_target) + Y × (F_smp - F_target) = M_base × (F_target - F_initial)`);
    steps.push(`     X × (S_main - S_target) + Y × (S_smp - S_target) = M_base × (S_target - S_initial)`);

    let det_smp = (mainComp.F_m - targetFat) * (S_p - targetSnfValue) - (F_p - targetFat) * (mainComp.S_m - targetSnfValue);
    let X_smp = 0;
    let Y_smp = 0;

    steps.push(`\n   Determinant:`);
    steps.push(`     det = (${mainComp.F_m.toFixed(8)} - ${targetFat.toFixed(8)}) × (${S_p.toFixed(8)} - ${targetSnfValue.toFixed(8)}) - (${F_p.toFixed(8)} - ${targetFat.toFixed(8)}) × (${mainComp.S_m.toFixed(8)} - ${targetSnfValue.toFixed(8)})`);
    steps.push(`         = ${det_smp.toFixed(10)}`);

    if (Math.abs(det_smp) > 1e-9) {
      X_smp = (M_base * ((targetFat - initialFat) * (S_p - targetSnfValue) - (targetSnfValue - initialSnf) * (F_p - targetFat))) / det_smp;
      Y_smp = (M_base * ((targetSnfValue - initialSnf) * (mainComp.F_m - targetFat) - (targetFat - initialFat) * (mainComp.S_m - targetSnfValue))) / det_smp;
      
      steps.push(`\n   Solution:`);
      steps.push(`     X (${mainComp.name}) = ${X_smp.toFixed(8)} kg`);
      steps.push(`     Y (SMP) = ${Y_smp.toFixed(8)} kg`);
      steps.push(`     Valid: ${X_smp >= -1e-6 && Y_smp >= -1e-6 ? '✅ YES' : '❌ NO (negative values)'}`);
    }

    // System 2: Main Component + Water
    steps.push(`\n   **System 2: ${mainComp.name} + Water**`);
    
    let det_water = (mainComp.F_m - targetFat) * (S_w - targetSnfValue) - (F_w - targetFat) * (mainComp.S_m - targetSnfValue);
    let X_water = 0;
    let Z_water = 0;

    steps.push(`\n   Determinant:`);
    steps.push(`     det = ${det_water.toFixed(10)}`);

    if (Math.abs(det_water) > 1e-9) {
      X_water = (M_base * ((targetFat - initialFat) * (S_w - targetSnfValue) - (targetSnfValue - initialSnf) * (F_w - targetFat))) / det_water;
      Z_water = (M_base * ((targetSnfValue - initialSnf) * (mainComp.F_m - targetFat) - (targetFat - initialFat) * (mainComp.S_m - targetSnfValue))) / det_water;
      
      steps.push(`\n   Solution:`);
      steps.push(`     X (${mainComp.name}) = ${X_water.toFixed(8)} kg`);
      steps.push(`     Z (Water) = ${Z_water.toFixed(8)} kg`);
      steps.push(`     Valid: ${X_water >= -1e-6 && Z_water >= -1e-6 ? '✅ YES' : '❌ NO (negative values)'}`);
    }

    // ============ STEP 4: SELECT SOLUTION ============
    steps.push(`\n\n⚙️ **═══════════ STEP 4: SELECT BEST SOLUTION ═══════════**`);

    let mainAmount = 0;
    let smpAmount = 0;
    let waterAmount = 0;
    let infoMsg = "";

    if (X_smp >= -1e-6 && Y_smp >= -1e-6) {
        mainAmount = X_smp;
        smpAmount = Y_smp;
        infoMsg = "Standardization achieved using Main Component and SMP.";
        steps.push(`   ✅ Selected: ${mainComp.name} + SMP`);
    } else if (X_water >= -1e-6 && Z_water >= -1e-6) {
        mainAmount = X_water;
        waterAmount = Z_water;
        infoMsg = "Standardization achieved using Main Component and Water.";
        steps.push(`   ✅ Selected: ${mainComp.name} + Water`);
    } else {
        setError("❌ Cannot achieve target with this combination. The required adjustment might be too large or the ingredient properties are not suitable.");
        return;
    }

    mainAmount = Math.max(0, mainAmount);
    smpAmount = Math.max(0, smpAmount);
    waterAmount = Math.max(0, waterAmount);

    steps.push(`\n   Final Quantities:`);
    steps.push(`     ${mainComp.name}: ${mainAmount.toFixed(8)} kg`);
    if (smpAmount > 0.001) steps.push(`     SMP: ${smpAmount.toFixed(8)} kg`);
    if (waterAmount > 0.001) steps.push(`     Water: ${waterAmount.toFixed(8)} kg`);

    // ============ STEP 5: CALCULATE FINAL PROPERTIES ============
    steps.push(`\n\n🔬 **═══════════ STEP 5: FINAL BATCH PROPERTIES ═══════════**`);

    const finalWeight = M_base + mainAmount + smpAmount + waterAmount;
    const finalWeightLiters = finalWeight / componentProps.milkDensity;
    
    steps.push(`\n   Final Weight:`);
    steps.push(`     = ${M_base.toFixed(6)} + ${mainAmount.toFixed(8)} + ${smpAmount.toFixed(8)} + ${waterAmount.toFixed(8)}`);
    steps.push(`     = ${finalWeight.toFixed(8)} kg`);
    steps.push(`     = ${finalWeightLiters.toFixed(8)} liters`);

    const finalFatMass = (initialFat * M_base) + (mainComp.F_m * mainAmount) + (F_p * smpAmount) + (F_w * waterAmount);
    const finalSnfMass = (initialSnf * M_base) + (mainComp.S_m * mainAmount) + (S_p * smpAmount) + (S_w * waterAmount);

    const finalFatPercent = (finalFatMass / finalWeight) * 100;
    const finalSnfPercent = (finalSnfMass / finalWeight) * 100;
    const finalTS = finalFatPercent + finalSnfPercent;

    steps.push(`\n   Final Fat:`);
    steps.push(`     Fat Mass = ${finalFatMass.toFixed(8)} kg`);
    steps.push(`     Fat% = ${finalFatPercent.toFixed(8)}%`);
    
    steps.push(`\n   Final SNF:`);
    steps.push(`     SNF Mass = ${finalSnfMass.toFixed(8)} kg`);
    steps.push(`     SNF% = ${finalSnfPercent.toFixed(8)}%`);

    // ============ STEP 6: ACCURACY CHECK ============
    steps.push(`\n\n📊 **═══════════ STEP 6: ACCURACY CHECK ═══════════**`);
    
    const fatError = Math.abs(finalFatPercent - (targetFat * 100));
    const snfError = Math.abs(finalSnfPercent - (targetSnfValue * 100));
    
    steps.push(`\n   Fat Error = |${finalFatPercent.toFixed(8)} - ${(targetFat * 100).toFixed(6)}| = ${fatError.toFixed(8)}%`);
    steps.push(`   SNF Error = |${finalSnfPercent.toFixed(8)} - ${(targetSnfValue * 100).toFixed(6)}| = ${snfError.toFixed(8)}%`);
    steps.push(`\n   Status:`);
    steps.push(`     Fat: ${fatError <= 0.05 ? '✅ Excellent' : fatError <= 0.1 ? '⚠️ Good' : '❌ Review'}`);
    steps.push(`     SNF: ${snfError <= 0.05 ? '✅ Excellent' : snfError <= 0.1 ? '⚠️ Good' : '❌ Review'}`);

    setCalculationSteps(steps);
    setResults({
      mainComponentAmount: mainAmount,
      smpAmount: smpAmount,
      waterAmount: waterAmount,
      finalWeight: finalWeight,
      finalWeightLiters,
      finalFat: finalFatPercent,
      finalSnf: finalSnfPercent,
      finalTS,
      infoMsg: infoMsg,
      mainComponentName: mainComp.name,
      fatError,
      snfError
    });

  }, [milkQuantity, milkUnit, milkFat, milkClr, targetMilkType, mainComponent, creamFat, creamSnf, richMilkFat, richMilkClr, skimMilkFat, skimMilkClr, smpFat, smpTs, calculateSnf]);

  const handleRecipe = () => {
    if (!results) return;
    startRecipeTransition(async () => {
      setRecipe("Sujhav la raha hu...");
      try {
        const res = await getRecipeSuggestions({
          milkType: milkStandards[targetMilkType].name,
          fatPercentage: results.finalFat,
          snfPercentage: results.finalSnf,
        })
        setRecipe(res.recipeSuggestions)
      } catch(e) {
        setRecipe("Oops! Recipe laane mein dikkat ho gayi. Fir se try karein.")
      }
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[95vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            🥛 Automated Milk Standardization
          </DialogTitle>
          <DialogDescription className="text-center text-base font-semibold">
            Mass Balance Method se precise calculation with step-by-step verification
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-full pr-6">
          {/* INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Raw Milk */}
            <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Milk className="w-6 h-6" />
                1. Raw Milk
              </h3>
              <div className="space-y-4">
                <div>
                  <Label className="font-semibold">Quantity</Label>
                  <div className="flex gap-2">
                    <Input value={milkQuantity} onChange={(e) => setMilkQuantity(e.target.value)} className="h-11 border-2 border-blue-300" />
                    <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as 'liters' | 'kg')}>
                      <SelectTrigger className="w-[120px] h-11 border-2 border-blue-300 font-semibold">
                        <SelectValue/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="liters">Liters</SelectItem>
                        <SelectItem value="kg">Kg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="font-semibold">Fat %</Label>
                  <Input value={milkFat} onChange={(e) => setMilkFat(e.target.value)} className="h-11 border-2 border-blue-300" />
                </div>
                <div>
                  <Label className="font-semibold">CLR</Label>
                  <Input value={milkClr} onChange={(e) => setMilkClr(e.target.value)} className="h-11 border-2 border-blue-300" />
                </div>
                {currentSnf > 0 && (
                  <Alert className="bg-blue-200 border-2 border-blue-400">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="font-bold text-blue-900">
                      Calculated SNF: {currentSnf.toFixed(4)}%
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>

            {/* Target */}
            <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" />
                2. Target Milk
              </h3>
              <div className="space-y-4">
                <div>
                  <Label className="font-semibold">Milk Type</Label>
                  <Select value={targetMilkType} onValueChange={(v) => setTargetMilkType(v as MilkType)}>
                    <SelectTrigger className="h-11 border-2 border-green-300 font-semibold">
                      <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(milkStandards).map(([key, {name}]) => (
                        <SelectItem key={key} value={key} className="font-medium">{name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 bg-green-200 rounded-xl border-2 border-green-400">
                  <div className="text-center">
                    <p className="text-xs font-semibold text-green-700">Target Fat</p>
                    <p className="text-3xl font-extrabold text-green-800">{milkStandards[targetMilkType].fat.toFixed(2)}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-green-700">Target SNF</p>
                    <p className="text-3xl font-extrabold text-green-800">{milkStandards[targetMilkType].snf.toFixed(2)}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SNF Formula */}
          <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-5 rounded-xl border-2 border-indigo-300 shadow-md mb-6">
            <Label className="text-base font-bold mb-3 block">SNF Calculation Formula</Label>
            <Select value={snfFormula} onValueChange={setSnfFormula}>
              <SelectTrigger className="bg-white border-2 border-indigo-200 h-11 font-medium">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex flex-col">
                      <span className="font-bold">{name}</span>
                      <span className="text-xs text-muted-foreground">{formulaText}</span>
                    </div>
                  </SelectItem>
                ))}
                <SelectItem value="custom">Custom Formula</SelectItem>
              </SelectContent>
            </Select>
            {snfFormula === 'custom' && (
              <div className="grid grid-cols-2 gap-4 p-4 border-2 border-dashed border-purple-300 rounded-lg bg-purple-50 mt-3">
                <div>
                  <Label>Fat Multiplier</Label>
                  <Input value={customSnfConstants.fatMultiplier} onChange={(e) => setCustomSnfConstants(prev => ({...prev, fatMultiplier: e.target.value}))}/>
                </div>
                <div>
                  <Label>Constant (C)</Label>
                  <Input value={customSnfConstants.constant} onChange={(e) => setCustomSnfConstants(prev => ({...prev, constant: e.target.value}))}/>
                </div>
              </div>
            )}
          </div>

          {/* Ingredients */}
          <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-6 rounded-xl border-2 border-amber-400 shadow-lg mb-6">
            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
              <Beaker className="w-6 h-6" />
              3. Standardization Ingredients
            </h3>
            <div className="space-y-4">
              <div>
                <Label className="font-semibold">Main Component</Label>
                <Select value={mainComponent} onValueChange={(v) => setMainComponent(v as MainComponent)}>
                  <SelectTrigger className="h-11 border-2 border-amber-300 font-semibold">
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cream">Cream (increase fat)</SelectItem>
                    <SelectItem value="rich_milk">Rich Milk (increase fat/snf)</SelectItem>
                    <SelectItem value="skim_milk">Skim Milk (decrease fat)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {mainComponent === 'cream' && (<>
                  <div><Label>Cream Fat %</Label><Input value={creamFat} onChange={e => setCreamFat(e.target.value)} className="border-2 border-amber-300"/></div>
                  <div><Label>Cream SNF %</Label><Input value={creamSnf} onChange={e => setCreamSnf(e.target.value)} className="border-2 border-amber-300"/></div>
                </>)}
                {mainComponent === 'rich_milk' && (<>
                  <div><Label>Rich Milk Fat %</Label><Input value={richMilkFat} onChange={e => setRichMilkFat(e.target.value)} className="border-2 border-amber-300"/></div>
                  <div><Label>Rich Milk CLR</Label><Input value={richMilkClr} onChange={e => setRichMilkClr(e.target.value)} className="border-2 border-amber-300"/></div>
                </>)}
                {mainComponent === 'skim_milk' && (<>
                  <div><Label>Skim Milk Fat %</Label><Input value={skimMilkFat} onChange={e => setSkimMilkFat(e.target.value)} className="border-2 border-amber-300"/></div>
                  <div><Label>Skim Milk CLR</Label><Input value={skimMilkClr} onChange={e => setSkimMilkClr(e.target.value)} className="border-2 border-amber-300"/></div>
                </>)}
              </div>

              <Alert className="bg-amber-200 border-2 border-amber-400">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs font-semibold text-amber-900">
                  <strong>Auto Components:</strong> SMP or Water will be used automatically. SMP Fat: 
                  <Input value={smpFat} onChange={(e)=>setSmpFat(e.target.value)} className="inline-block w-16 h-7 text-xs mx-1"/>%, 
                  TS: <Input value={smpTs} onChange={(e)=>setSmpTs(e.target.value)} className="inline-block w-16 h-7 text-xs mx-1"/>%
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <Button onClick={handleCalculate} className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl">
            <Calculator className="w-6 h-6 mr-3" />
            Calculate Standardization
          </Button>

          {error && (
            <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
              <AlertTriangle className="h-6 w-6" />
              <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
            </Alert>
          )}

          {results && (
            <div className="mt-6 space-y-6">
              <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                <CheckCircle2 className="h-8 w-8 text-green-700" />
                <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                  ✅ {results.infoMsg}
                </AlertTitle>
                <AlertDescription>
                  <div className="space-y-5">
                    <div className="grid grid-cols-3 gap-4">
                      {results.mainComponentAmount > 0.001 && (
                        <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300 text-center">
                          <p className="text-sm font-bold text-yellow-900">{results.mainComponentName}</p>
                          <p className="text-3xl font-extrabold text-yellow-700">{results.mainComponentAmount.toFixed(4)}</p>
                          <p className="text-sm text-yellow-600">kg</p>
                        </div>
                      )}
                      {results.smpAmount > 0.001 && (
                        <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300 text-center">
                          <p className="text-sm font-bold text-orange-900">SMP</p>
                          <p className="text-3xl font-extrabold text-orange-700">{results.smpAmount.toFixed(4)}</p>
                          <p className="text-sm text-orange-600">kg</p>
                        </div>
                      )}
                      {results.waterAmount > 0.001 && (
                        <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-300 text-center">
                          <p className="text-sm font-bold text-cyan-900">Water</p>
                          <p className="text-3xl font-extrabold text-cyan-700">{results.waterAmount.toFixed(4)}</p>
                          <p className="text-sm text-cyan-600">kg</p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-teal-50 p-3 rounded-lg border border-teal-200 text-center">
                        <p className="text-xs font-semibold text-muted-foreground">Final Weight</p>
                        <p className="text-xl font-bold text-teal-700">{results.finalWeight.toFixed(4)}</p>
                        <p className="text-xs text-teal-600">kg ({results.finalWeightLiters.toFixed(4)} L)</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                        <p className="text-xs font-semibold text-muted-foreground">Final Fat</p>
                        <p className="text-xl font-bold text-purple-700">{results.finalFat.toFixed(4)}%</p>
                        <Badge className={results.fatError <= 0.05 ? "bg-green-500" : "bg-yellow-500"}>
                          ±{results.fatError.toFixed(4)}%
                        </Badge>
                      </div>
                      <div className="bg-pink-50 p-3 rounded-lg border border-pink-200 text-center">
                        <p className="text-xs font-semibold text-muted-foreground">Final SNF</p>
                        <p className="text-xl font-bold text-pink-700">{results.finalSnf.toFixed(4)}%</p>
                        <Badge className={results.snfError <= 0.05 ? "bg-green-500" : "bg-yellow-500"}>
                          ±{results.snfError.toFixed(4)}%
                        </Badge>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200 text-center">
                        <p className="text-xs font-semibold text-muted-foreground">Final TS</p>
                        <p className="text-xl font-bold text-indigo-700">{results.finalTS.toFixed(4)}%</p>
                      </div>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>

              {/* Calculation Steps */}
              <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                  <Calculator className="w-6 h-6" />
                  Complete Calculation Process (Mobile Verification)
                </h4>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-1 text-sm font-mono leading-relaxed">
                    {calculationSteps.map((step, idx) => (
                      <p 
                        key={idx} 
                        className={cn(
                          step.includes('**') && 'font-extrabold mt-3 text-gray-900 text-base',
                          step.includes('═══') && 'text-purple-700 font-extrabold text-lg',
                          step.includes('✅') && 'text-green-700 font-bold',
                          step.includes('❌') && 'text-red-700 font-bold',
                          step.includes('⚠️') && 'text-yellow-700 font-bold',
                          !step.includes('**') && !step.includes('✅') && !step.includes('❌') && !step.includes('⚠️') && !step.includes('═══') && 'text-gray-700'
                        )}
                      >
                        {step.replace(/\*\*/g, '')}
                      </p>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <Button 
                onClick={handleRecipe} 
                disabled={isRecipeLoading} 
                className="w-full h-14 bg-gradient-to-r from-primary to-indigo-400 text-lg font-bold"
              >
                {isRecipeLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Loading...</> : <><Sparkles className="mr-2 h-5 w-5" />Isse kya banayein?</>}
              </Button>
              
              {recipe && (
                <div className="mt-4 p-6 bg-primary/5 rounded-xl prose prose-sm max-w-none border-2 border-primary/20" dangerouslySetInnerHTML={{__html: recipe.replace(/\n/g, '<br />')}} />
              )}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
