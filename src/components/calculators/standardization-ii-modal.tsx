
"use client"

import { useState, memo, useCallback, useEffect, useMemo } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { componentProps } from "@/lib/data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  ArrowLeft, 
  Blend, 
  Milk, 
  SlidersHorizontal, 
  Combine, 
  Bot, 
  Calculator, 
  Settings, 
  ChevronsUp, 
  Target, 
  Droplets, 
  Info, 
  Weight, 
  Thermometer, 
  ShieldAlert, 
  DollarSign,
  // ✅ NEW ICONS FOR ADVANCED CALCULATOR
  Beaker,
  Scale,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  Plus,
  X
} from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { snfFormulas } from "@/lib/data"
import { Checkbox } from "@/components/ui/checkbox"
// ✅ NEW IMPORTS FOR ADVANCED CALCULATOR
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


type CalculatorType = 'fat-snf-clr-ts' | 'fat-blending' | 'reconstituted-milk' | 'recombined-milk' | 'clr-blending' | 'milk-blending' | 'clr-increase' | 'two-milk-blending-target' | 'clr-correction' | 'kg-fat-snf' | 'two-component-standardization' | 'fat-snf-adjustment';


// 1️⃣ FIX: calculatorsInfo mein 'color' property add karein
const calculatorsInfo = {
    'fat-snf-clr-ts': { 
        title: "Fat, SNF, CLR & TS", 
        icon: Calculator, 
        component: FatSnfClrTsCalc,
        color: "from-blue-500 to-cyan-500" // 🔵 Blue
    },
    'milk-blending': { 
        title: "Milk Blending", 
        icon: Blend, 
        component: MilkBlendingCalc,
        color: "from-indigo-500 to-purple-600" // 🟣 Purple
    },
    'two-milk-blending-target': { 
        title: "Advanced Two-Milk Blending", 
        icon: Bot, 
        component: TwoMilkBlendingToTargetCalc,
        color: "from-violet-500 to-fuchsia-600" // 🤖 Violet
    },
    'two-component-standardization': { 
        title: "Automated Standardization", 
        icon: Bot, 
        component: TwoComponentStandardizationCalc,
        color: "from-emerald-500 to-teal-600" // ✅ Teal
    },
    'fat-snf-adjustment': { 
        title: 'Fat & SNF Adjustment', 
        icon: SlidersHorizontal, 
        component: FatSnfAdjustmentCalc,
        color: "from-orange-500 to-amber-500" // 🟠 Orange
    },
    'clr-increase': { 
        title: 'CLR Increase (by SMP)', 
        icon: ChevronsUp, 
        component: ClrIncreaseCalc,
        color: "from-green-500 to-emerald-600" // 🟢 Green
    },
    'fat-blending': { 
        title: "Fat Blending (Pearson)", 
        icon: Blend, 
        component: FatBlendingCalc,
        color: "from-blue-600 to-indigo-600" // 🔵 Deep Blue
    },
    'reconstituted-milk': { 
        title: "Reconstituted Milk", 
        icon: Milk, 
        component: ReconstitutedMilkCalc,
        color: "from-sky-400 to-blue-500" // 💧 Sky
    },
    'recombined-milk': { 
        title: "Recombined Milk", 
        icon: Combine, 
        component: RecombinedMilkCalc,
        color: "from-cyan-500 to-teal-500" // 🌊 Cyan
    },
    'clr-blending': { 
        title: "CLR Blending (Pearson)", 
        icon: Bot, 
        component: ClrBlendingCalc,
        color: "from-indigo-400 to-blue-500" // 🤖 Indigo
    },
    'clr-correction': { 
        title: "CLR Correction", 
        icon: Thermometer, 
        component: ClrCorrectionCalc,
        color: "from-red-500 to-rose-600" // 🌡️ Red
    },
    'kg-fat-snf': { 
        title: "Kg Fat & SNF", 
        icon: Weight, 
        component: KgFatSnfCalc,
        color: "from-slate-500 to-gray-600" // ⚖️ Gray
    },
};

// 2️⃣ FIX: Modal Component Update karein
export function StandardizationIIModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const handleBack = useCallback(() => setActiveCalculator(null), []);

  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveCalculator(null);
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* ✅ Mobile Width Fix: w-[95vw] */}
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        {activeCalculator && ActiveCalculatorComponent ? (
          <>
            {/* ✅ Header Update: Added Colorful Icon here */}
            <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
              <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                 <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md", calculatorsInfo[activeCalculator].color)}>
                    {(() => {
                        const Icon = calculatorsInfo[activeCalculator].icon;
                        return <Icon className="h-5 w-5" />;
                    })()}
                 </div>
                 <div>
                    <DialogTitle className="text-xl font-bold font-headline">{calculatorsInfo[activeCalculator].title}</DialogTitle>
                    <DialogDescription>Calculate specific dairy parameters.</DialogDescription>
                 </div>
              </div>
            </DialogHeader>
            
            <ScrollArea className="h-full mt-4 pr-2 w-full">
              <div className="p-2 sm:p-0 px-1">
                <ActiveCalculatorComponent />
              </div>
            </ScrollArea>
          </>
        ) : (
          <>
            <DialogHeader className="p-4 sm:p-0">
              <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-md">
                      {/* Generic Icon */}
                      <Blend className="h-8 w-8 text-indigo-600" />
                  </div>
              </div>
              <DialogTitle className="text-2xl sm:text-4xl font-bold text-center font-headline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Standardization
              </DialogTitle>
              <DialogDescription className="text-center text-sm sm:text-lg">
                Advanced calculators for precise dairy processing.
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="flex-1 mt-4 pr-2">
              {/* ✅ Grid Layout Update: Colorful Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 p-4">
                {Object.entries(calculatorsInfo).map(([key, { title, icon: Icon, color }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCalculator(key as CalculatorType)}
                    className="group relative flex flex-col items-center justify-center p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center aspect-square transition-all duration-300 transform hover:scale-105"
                  >
                    {/* Gradient Circle */}
                    <div className={cn(
                        "p-4 rounded-full bg-gradient-to-br text-white mb-3 shadow-md transition-transform group-hover:scale-110", 
                        color
                    )}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    
                    <span className="font-bold text-sm sm:text-base font-headline text-slate-700 group-hover:text-primary transition-colors">
                        {title}
                    </span>

                     {/* Flash Icon (Make sure Zap is imported from lucide-react) */}
                     {/* <Zap className="absolute top-2 right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 rounded-xl shadow-sm border mt-4">
        <h3 className="text-xl font-bold text-primary mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);

const MemoizedInputField = memo(function InputField({ label, value, name, setter, unit, placeholder, inputClassName, type = "number", step = "any" }: { label: string, value: string, name: string, setter: (name: string, value: string) => void, unit?: string, placeholder?: string, inputClassName?: string, type?: string, step?: string }) {
    const [internalValue, setInternalValue] = useState(value);

    // Update internal state when props change, but not if the element has focus
    useEffect(() => {
      if (value !== internalValue && document.activeElement?.getAttribute('name') !== name) {
          setInternalValue(value);
      }
    }, [value, name, internalValue]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
        setter(e.target.name, e.target.value); // Update parent state on change
    };
    
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <div className="flex items-center">
                <Input 
                    type={type} 
                    name={name} 
                    id={name} 
                    value={internalValue} 
                    onChange={handleChange}
                    className={cn(unit ? "rounded-r-none" : "", inputClassName || '')}
                    placeholder={placeholder} 
                    step={step}
                />
                {unit && <span className="p-2 bg-muted border border-l-0 rounded-r-md text-sm">{unit}</span>}
            </div>
        </div>
    );
});

function FatSnfClrTsCalc() {
    const [inputs, setInputs] = useState({
        fat: '4.5',
        clr: '28.0',
        snf: '8.94',
    });
    const [result, setResult] = useState<{ 
        snf: number; 
        clr: number; 
        ts: number;
        lactose: number;
        protein: number;
    } | null>(null);
    const [formula, setFormula] = useState('isi');
    const [basis, setBasis] = useState<'fat_clr' | 'fat_snf'>('fat_clr');
    const [customConstants, setCustomConstants] = useState({ fatMultiplier: "0.25", constant: "0.72" });
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleCustomConstChange = useCallback((name: string, value: string) => {
        setCustomConstants(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setCalculationSteps([]);
        
        const fat = parseFloat(inputs.fat);
        const clr = parseFloat(inputs.clr);
        const snf = parseFloat(inputs.snf);
        
        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Fat = ${inputs.fat}%`);
        if (basis === 'fat_clr') {
            steps.push(`   CLR = ${inputs.clr}`);
            steps.push(`   Calculation Mode: Fat + CLR → Calculate SNF & TS`);
        } else {
            steps.push(`   SNF = ${inputs.snf}%`);
            steps.push(`   Calculation Mode: Fat + SNF → Calculate CLR & TS`);
        }
        
        let newSnf = NaN, newTs = NaN, newClr = NaN;
        
        // ============ STEP 2: SELECT FORMULA ============
        steps.push(`\n\n🧪 **═══════════ STEP 2: SNF FORMULA SELECTION ═══════════**`);
        
        let selectedFormula;
        if (formula === 'custom') {
            const multi = parseFloat(customConstants.fatMultiplier) || 0;
            const constFactor = parseFloat(customConstants.constant) || 0;
            selectedFormula = {
                name: 'Custom Formula',
                formulaText: `SNF = (CLR/4) + (Fat × ${multi}) + ${constFactor}`,
                calc: (c: number, f: number) => (c / 4) + (f * multi) + constFactor,
                inverse: (s: number, f: number) => (s - (f * multi) - constFactor) * 4
            };
            steps.push(`   Selected: **CUSTOM FORMULA**`);
            steps.push(`   Formula: SNF = (CLR/4) + (Fat × ${multi}) + ${constFactor}`);
        } else {
            selectedFormula = snfFormulas[formula as keyof typeof snfFormulas] || snfFormulas.isi;
            steps.push(`   Selected: **${selectedFormula.name}**`);
            steps.push(`   Formula: ${selectedFormula.formulaText}`);
        }

        // ============ STEP 3: CALCULATIONS ============
        steps.push(`\n\n🔢 **═══════════ STEP 3: CALCULATIONS ═══════════**`);

        if (basis === 'fat_clr') {
            if (!isNaN(fat) && !isNaN(clr)) {
                steps.push(`\n   **Calculating SNF from Fat & CLR:**`);
                
                if (formula === 'custom') {
                    const multi = parseFloat(customConstants.fatMultiplier) || 0;
                    const constFactor = parseFloat(customConstants.constant) || 0;
                    steps.push(`     SNF = (CLR/4) + (Fat × ${multi}) + ${constFactor}`);
                    steps.push(`         = (${clr}/4) + (${fat} × ${multi}) + ${constFactor}`);
                    steps.push(`         = ${(clr/4).toFixed(6)} + ${(fat * multi).toFixed(6)} + ${constFactor}`);
                } else {
                    steps.push(`     Using ${selectedFormula.name} formula`);
                    steps.push(`     SNF = f(CLR=${clr}, Fat=${fat}%)`);
                }
                
                newSnf = selectedFormula.calc(clr, fat);
                steps.push(`         = ${newSnf.toFixed(6)}%`);
                
                newTs = newSnf + fat;
                steps.push(`\n   **Calculating Total Solids (TS):**`);
                steps.push(`     TS = SNF + Fat`);
                steps.push(`        = ${newSnf.toFixed(6)} + ${fat}`);
                steps.push(`        = ${newTs.toFixed(6)}%`);
                
                newClr = clr;
                steps.push(`\n   **CLR (given):** ${newClr}`);
            } else {
                steps.push(`   ❌ Error: Invalid Fat or CLR values`);
            }
        } else if (basis === 'fat_snf') {
            if (!isNaN(fat) && !isNaN(snf)) {
                steps.push(`\n   **Calculating CLR from Fat & SNF:**`);
                steps.push(`     Using inverse of ${selectedFormula.name} formula`);
                
                if (formula === 'custom') {
                    const multi = parseFloat(customConstants.fatMultiplier) || 0;
                    const constFactor = parseFloat(customConstants.constant) || 0;
                    steps.push(`     Original: SNF = (CLR/4) + (Fat × ${multi}) + ${constFactor}`);
                    steps.push(`     Inverse: CLR = (SNF - Fat × ${multi} - ${constFactor}) × 4`);
                    steps.push(`            = (${snf} - ${fat} × ${multi} - ${constFactor}) × 4`);
                    steps.push(`            = (${snf} - ${(fat * multi).toFixed(6)} - ${constFactor}) × 4`);
                    steps.push(`            = ${(snf - (fat * multi) - constFactor).toFixed(6)} × 4`);
                } else {
                    steps.push(`     CLR = inverse_formula(SNF=${snf}%, Fat=${fat}%)`);
                }
                
                newClr = selectedFormula.inverse(snf, fat);
                steps.push(`         = ${newClr.toFixed(6)}`);
                
                newTs = snf + fat;
                steps.push(`\n   **Calculating Total Solids (TS):**`);
                steps.push(`     TS = SNF + Fat`);
                steps.push(`        = ${snf} + ${fat}`);
                steps.push(`        = ${newTs.toFixed(6)}%`);
                
                newSnf = snf;
                steps.push(`\n   **SNF (given):** ${newSnf}%`);
            } else {
                steps.push(`   ❌ Error: Invalid Fat or SNF values`);
            }
        }

        // ============ STEP 4: ADDITIONAL CALCULATIONS ============
        if (!isNaN(newSnf) && !isNaN(fat)) {
            steps.push(`\n\n🔬 **═══════════ STEP 4: ADDITIONAL COMPONENTS ═══════════**`);
            
            // Approximate Lactose (typically ~4.8-5.0% of milk)
            const lactose = newSnf * 0.55; // Lactose is approximately 55% of SNF
            steps.push(`\n   **Lactose (Approximate):**`);
            steps.push(`     Lactose ≈ SNF × 0.55`);
            steps.push(`             ≈ ${newSnf.toFixed(6)} × 0.55`);
            steps.push(`             ≈ ${lactose.toFixed(6)}%`);
            
            // Approximate Protein (typically ~3.2-3.5% of milk)
            const protein = newSnf * 0.38; // Protein is approximately 38% of SNF
            steps.push(`\n   **Protein (Approximate):**`);
            steps.push(`     Protein ≈ SNF × 0.38`);
            steps.push(`             ≈ ${newSnf.toFixed(6)} × 0.38`);
            steps.push(`             ≈ ${protein.toFixed(6)}%`);
            
            setResult({
                snf: newSnf,
                clr: newClr,
                ts: newTs,
                lactose,
                protein
            });
        } else {
            steps.push(`\n   ❌ Cannot calculate additional components due to invalid values`);
        }

        // ============ STEP 5: SUMMARY ============
        steps.push(`\n\n✨ **═══════════ STEP 5: FINAL SUMMARY ═══════════**`);
        steps.push(`\n   Input Values:`);
        steps.push(`     Fat: ${fat}%`);
        if (basis === 'fat_clr') {
            steps.push(`     CLR: ${clr} (input)`);
        } else {
            steps.push(`     SNF: ${snf}% (input)`);
        }
        
        steps.push(`\n   Calculated Values:`);
        if (basis === 'fat_clr') {
            steps.push(`     SNF: ${newSnf.toFixed(6)}% (calculated)`);
        } else {
            steps.push(`     CLR: ${newClr.toFixed(6)} (calculated)`);
        }
        steps.push(`     TS: ${newTs.toFixed(6)}%`);
        steps.push(`     Lactose: ~${(newSnf * 0.55).toFixed(6)}%`);
        steps.push(`     Protein: ~${(newSnf * 0.38).toFixed(6)}%`);

        setCalculationSteps(steps);

    }, [inputs, basis, formula, customConstants]);
    
    return (
        <CalculatorCard 
            title="Fat, SNF, CLR & TS Calculator" 
            description="Calculate milk composition parameters using industry-standard formulas with detailed step-by-step calculations"
        >
            {/* Formula Selection */}
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-5 rounded-xl border-2 border-indigo-300 shadow-md mb-6">
                <Label className="text-base font-bold mb-3 block flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Select SNF Formula
                </Label>
                <Select value={formula} onValueChange={setFormula}>
                    <SelectTrigger className="bg-white border-2 border-indigo-200 h-12 text-base font-medium">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key} className="text-base py-3">
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800">{name}</span>
                                    <span className="text-xs text-muted-foreground mt-1">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                        <SelectItem value="custom" className="text-base py-3">Custom Formula</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Custom Formula */}
            {formula === 'custom' && (
                <div className="grid grid-cols-2 gap-4 p-5 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50 mb-6">
                    <MemoizedInputField 
                        label="Fat Multiplier" 
                        value={customConstants.fatMultiplier} 
                        name="fatMultiplier" 
                        setter={handleCustomConstChange}
                        placeholder="e.g., 0.25"
                    />
                    <MemoizedInputField 
                        label="Constant (C)" 
                        value={customConstants.constant} 
                        name="constant" 
                        setter={handleCustomConstChange}
                        placeholder="e.g., 0.72"
                    />
                    <Alert className="col-span-2 bg-purple-200 border-2 border-purple-400">
                        <Info className="h-4 w-4" />
                        <AlertDescription className="text-xs font-semibold text-purple-900">
                            Custom Formula: <strong>SNF = (CLR/4) + (Fat × Fat Multiplier) + Constant</strong>
                        </AlertDescription>
                    </Alert>
                </div>
            )}

            {/* Calculation Basis */}
            <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-5 rounded-xl border-2 border-amber-300 shadow-md mb-6">
                <Label className="text-base font-bold mb-3 block flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Calculate Based On
                </Label>
                <Select value={basis} onValueChange={(val: 'fat_clr' | 'fat_snf') => setBasis(val)}>
                    <SelectTrigger className="bg-white border-2 border-amber-200 h-12 text-base font-medium">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fat_clr" className="text-base font-medium py-3">
                            <div className="flex flex-col">
                                <span className="font-bold">Fat & CLR</span>
                                <span className="text-xs text-muted-foreground">Calculate SNF and TS</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="fat_snf" className="text-base font-medium py-3">
                            <div className="flex flex-col">
                                <span className="font-bold">Fat & SNF</span>
                                <span className="text-xs text-muted-foreground">Calculate CLR and TS</span>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Fat - Always Required */}
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                        <Droplets className="w-5 h-5" />
                        Fat Content
                    </h3>
                    <MemoizedInputField 
                        label="Fat %" 
                        value={inputs.fat} 
                        name="fat" 
                        setter={handleInputChange} 
                    />
                </div>

                {/* CLR or SNF - Based on Selection */}
                {basis === 'fat_clr' ? (
                    <div className="bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                            <Thermometer className="w-5 h-5" />
                            CLR Reading
                        </h3>
                        <MemoizedInputField 
                            label="CLR" 
                            value={inputs.clr} 
                            name="clr" 
                            setter={handleInputChange} 
                        />
                    </div>
                ) : (
                    <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100 p-6 rounded-xl border-2 border-purple-400 shadow-lg">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-purple-800">
                            <Beaker className="w-5 h-5" />
                            SNF Content
                        </h3>
                        <MemoizedInputField 
                            label="SNF %" 
                            value={inputs.snf} 
                            name="snf" 
                            setter={handleInputChange} 
                        />
                    </div>
                )}
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Values
            </Button>

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Results Display */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Calculated Values
                        </AlertTitle>
                        <AlertDescription>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                                {/* CLR */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Thermometer className="w-5 h-5 text-green-700" />
                                        <p className="text-sm font-bold text-muted-foreground">CLR</p>
                                    </div>
                                    <p className="text-4xl font-extrabold text-green-700">
                                        {result.clr.toFixed(4)}
                                    </p>
                                    <Badge className={basis === 'fat_clr' ? 'bg-blue-500 mt-2' : 'bg-purple-500 mt-2'}>
                                        {basis === 'fat_clr' ? 'Input' : 'Calculated'}
                                    </Badge>
                                </div>

                                {/* SNF */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-purple-300 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Beaker className="w-5 h-5 text-purple-700" />
                                        <p className="text-sm font-bold text-muted-foreground">SNF %</p>
                                    </div>
                                    <p className="text-4xl font-extrabold text-purple-700">
                                        {result.snf.toFixed(4)}
                                    </p>
                                    <Badge className={basis === 'fat_snf' ? 'bg-blue-500 mt-2' : 'bg-purple-500 mt-2'}>
                                        {basis === 'fat_snf' ? 'Input' : 'Calculated'}
                                    </Badge>
                                </div>

                                {/* TS */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-pink-300 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Scale className="w-5 h-5 text-pink-700" />
                                        <p className="text-sm font-bold text-muted-foreground">TS %</p>
                                    </div>
                                    <p className="text-4xl font-extrabold text-pink-700">
                                        {result.ts.toFixed(4)}
                                    </p>
                                    <Badge className="bg-purple-500 mt-2">Calculated</Badge>
                                </div>

                                {/* Lactose */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-amber-300 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Droplets className="w-5 h-5 text-amber-700" />
                                        <p className="text-sm font-bold text-muted-foreground">Lactose %</p>
                                    </div>
                                    <p className="text-4xl font-extrabold text-amber-700">
                                        {result.lactose.toFixed(4)}
                                    </p>
                                    <Badge className="bg-amber-500 mt-2">Estimate</Badge>
                                </div>

                                {/* Protein */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-indigo-300 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Weight className="w-5 h-5 text-indigo-700" />
                                        <p className="text-sm font-bold text-muted-foreground">Protein %</p>
                                    </div>
                                    <p className="text-4xl font-extrabold text-indigo-700">
                                        {result.protein.toFixed(4)}
                                    </p>
                                    <Badge className="bg-indigo-500 mt-2">Estimate</Badge>
                                </div>

                                {/* Fat (for reference) */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-blue-300 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Milk className="w-5 h-5 text-blue-700" />
                                        <p className="text-sm font-bold text-muted-foreground">Fat %</p>
                                    </div>
                                    <p className="text-4xl font-extrabold text-blue-700">
                                        {parseFloat(inputs.fat).toFixed(4)}
                                    </p>
                                    <Badge className="bg-blue-500 mt-2">Input</Badge>
                                </div>
                            </div>

                            {/* Info Alert */}
                            <Alert className="mt-5 bg-blue-100 border-2 border-blue-300">
                                <Info className="h-5 w-5 text-blue-700" />
                                <AlertDescription className="text-sm font-semibold text-blue-900">
                                    <strong>Note:</strong> Lactose and Protein values are approximate estimates based on typical milk composition ratios.
                                </AlertDescription>
                            </Alert>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Detailed Calculation Process (Mobile Calculator Verification)
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
                                            step.includes('⚠️') && 'text-yellow-700 font-bold',
                                            step.includes('❌') && 'text-red-700 font-bold',
                                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                                            step.includes('🔢') && 'text-purple-700 font-bold text-lg',
                                            step.includes('🧪') && 'text-orange-700 font-bold text-lg',
                                            step.includes('🔬') && 'text-pink-700 font-bold text-lg',
                                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('❌') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ All calculations shown step-by-step - verify each step with your calculator!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}

// ✅ Keep MemoizedMilkInputGroup as is
const MemoizedMilkInputGroup = memo(function MilkInputGroup({
    milkNum,
    onInputChange,
    initialValues,
}: {
    milkNum: 1 | 2;
    onInputChange: (milkNum: 1 | 2, field: string, value: string) => void;
    initialValues: { qty: string; fat: string; clr: string, unit: 'kg' | 'liters' };
}) {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
            <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-blue-800">
                <Droplets className="w-6 h-6" />
                Milk Source {milkNum}
            </h3>
            <div className="space-y-4">
                <div>
                    <Label className="text-sm font-semibold mb-2 block">Quantity</Label>
                    <div className="flex gap-2">
                        <Input 
                            type="number" 
                            value={initialValues.qty} 
                            onChange={(e) => onInputChange(milkNum, 'qty', e.target.value)} 
                            className="flex-1 h-11 text-base font-medium border-2 border-blue-300"
                            step="0.001"
                        />
                        <Select value={initialValues.unit} onValueChange={(val) => onInputChange(milkNum, 'unit', val)}>
                            <SelectTrigger className="w-[110px] h-11 border-2 border-blue-300 font-semibold">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <MemoizedInputField label="Fat %" value={initialValues.fat} name="fat" setter={(name, val) => onInputChange(milkNum, name, val)} />
                <MemoizedInputField label="CLR" value={initialValues.clr} name="clr" setter={(name, val) => onInputChange(milkNum, name, val)} />
            </div>
        </div>
    );
});

function MilkBlendingCalc() {
    const [numberOfMilks, setNumberOfMilks] = useState('2');
    const [milks, setMilks] = useState([
        { id: 1, qty: '500', fat: '6.5', clr: '29', unit: 'kg' as 'kg' | 'liters' },
        { id: 2, qty: '500', fat: '2.5', clr: '27', unit: 'kg' as 'kg' | 'liters' }
    ]);
    const [snfFormula, setSnfFormula] = useState('isi');
    const [result, setResult] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);
    const [showSteps, setShowSteps] = useState(false);

    useEffect(() => {
        const num = parseInt(numberOfMilks, 10);
        setMilks(currentMilks => {
            const newMilks = [...currentMilks];
            while (newMilks.length < num) {
                newMilks.push({ id: Date.now() + newMilks.length, qty: '100', fat: '3.5', clr: '28', unit: 'kg' });
            }
            return newMilks.slice(0, num);
        });
    }, [numberOfMilks]);
    
    const handleInputChange = useCallback((milkId: number, field: string, value: string) => {
        setMilks(prevMilks => prevMilks.map(milk => 
            milk.id === milkId ? { ...milk, [field]: value } : milk
        ));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        const formula = snfFormulas[snfFormula as keyof typeof snfFormulas] || snfFormulas.isi;
        return formula.calc(clr, fat);
    }, [snfFormula]);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);
        setShowSteps(false);
        
        const milkData = milks.map(milk => ({
            qtyVal: parseFloat(milk.qty),
            unit: milk.unit,
            fat: parseFloat(milk.fat),
            clr: parseFloat(milk.clr),
        }));

        if (milkData.some(m => isNaN(m.qtyVal) || isNaN(m.fat) || isNaN(m.clr) || m.qtyVal <= 0)) {
            setError("⚠️ Please fill all fields for all milk sources with valid positive numbers.");
            return;
        }

        const steps: string[] = ["📊 **═══════════ STEP 1: INPUT VALUES & CONVERSIONS ═══════════**"];
        let totalQtyKg = 0;
        let totalFatMass = 0;
        let totalClrMass = 0;

        const processedMilks = milkData.map((milk, index) => {
            const qtyKg = milk.unit === 'liters' ? milk.qtyVal * componentProps.milkDensity : milk.qtyVal;
            const snf = calculateSnf(milk.clr, milk.fat);
            
            steps.push(`\n   **Milk Source ${index + 1}:**`);
            steps.push(`     Quantity = ${milk.qtyVal} ${milk.unit} → ${qtyKg.toFixed(4)} kg`);
            steps.push(`     Fat = ${milk.fat}%`);
            steps.push(`     CLR = ${milk.clr}`);
            steps.push(`     Calculated SNF = ${snf.toFixed(4)}%`);
            
            totalQtyKg += qtyKg;
            totalFatMass += qtyKg * milk.fat;
            totalClrMass += qtyKg * milk.clr;
            
            return { ...milk, qtyKg, snf };
        });

        steps.push(`\n\n🔢 **═══════════ STEP 2: CALCULATE TOTALS ═══════════**`);
        steps.push(`   Total Quantity (Kg) = ${processedMilks.map(m => m.qtyKg.toFixed(4)).join(' + ')} = ${totalQtyKg.toFixed(4)} kg`);
        steps.push(`   Total Fat Mass = Σ(Qty × Fat%) = ${totalFatMass.toFixed(4)}`);
        steps.push(`   Total CLR Mass = Σ(Qty × CLR) = ${totalClrMass.toFixed(4)}`);

        if (totalQtyKg === 0) {
            setError("Total quantity cannot be zero.");
            return;
        }

        steps.push(`\n\n🔬 **═══════════ STEP 3: CALCULATE FINAL COMPOSITION ═══════════**`);
        
        const finalFat = totalFatMass / totalQtyKg;
        steps.push(`   Final Fat % = Total Fat Mass / Total Qty = ${totalFatMass.toFixed(4)} / ${totalQtyKg.toFixed(4)} = **${finalFat.toFixed(4)}%**`);
        
        const finalClr = totalClrMass / totalQtyKg;
        steps.push(`   Final CLR = Total CLR Mass / Total Qty = ${totalClrMass.toFixed(4)} / ${totalQtyKg.toFixed(4)} = **${finalClr.toFixed(4)}**`);
        
        const finalSnf = calculateSnf(finalClr, finalFat);
        steps.push(`   Final SNF % (using final Fat & CLR) = **${finalSnf.toFixed(4)}%**`);

        const finalTs = finalFat + finalSnf;
        steps.push(`   Final Total Solids (TS) % = Final Fat % + Final SNF % = ${finalFat.toFixed(4)} + ${finalSnf.toFixed(4)} = **${finalTs.toFixed(4)}%**`);
        
        const finalQtyLiters = totalQtyKg / componentProps.milkDensity;

        setCalculationSteps(steps);
        setResult({
            finalQtyKg: totalQtyKg,
            finalQtyLiters,
            finalFat,
            finalClr,
            finalSnf,
            finalTs,
            blendedMilks: processedMilks
        });

    }, [milks, calculateSnf]);

    return (
        <CalculatorCard 
            title="Multi-Milk Blending Calculator" 
            description="Calculate the final composition when blending two to six different milk sources."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <Label className="text-base font-bold mb-3 block">Number of Milk Sources</Label>
                    <Select value={numberOfMilks} onValueChange={setNumberOfMilks}>
                        <SelectTrigger className="h-12 text-base font-medium">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2">Two Milk Blending</SelectItem>
                            <SelectItem value="3">Three Milk Blending</SelectItem>
                            <SelectItem value="4">Four Milk Blending</SelectItem>
                            <SelectItem value="5">Five Milk Blending</SelectItem>
                            <SelectItem value="6">Six Milk Blending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4 rounded-xl border-2 border-indigo-300">
                    <Label className="text-base font-bold mb-2 block">SNF Formula</Label>
                    <Select value={snfFormula} onValueChange={setSnfFormula}>
                        <SelectTrigger className="bg-white border-2 border-indigo-200 h-11 font-medium text-sm">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(snfFormulas).map(([key, {name}]) => (
                                <SelectItem key={key} value={key}>{name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {milks.map((milk, index) => (
                     <MemoizedMilkInputGroup 
                        key={milk.id}
                        milkNum={index + 1} 
                        onInputChange={(id, field, value) => handleInputChange(milk.id, field, value)} 
                        initialValues={milk}
                    />
                ))}
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Blend className="w-6 h-6 mr-3" />
                Calculate Blend
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">✅ Final Blend Composition</AlertTitle>
                        <AlertDescription>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="bg-white/90 p-4 rounded-lg shadow-sm border">
                                    <p className="text-sm font-semibold text-muted-foreground">Final Fat</p>
                                    <p className="text-2xl font-bold text-green-700">{result.finalFat.toFixed(4)}%</p>
                                </div>
                                <div className="bg-white/90 p-4 rounded-lg shadow-sm border">
                                    <p className="text-sm font-semibold text-muted-foreground">Final CLR</p>
                                    <p className="text-2xl font-bold text-blue-700">{result.finalClr.toFixed(4)}</p>
                                </div>
                                <div className="bg-white/90 p-4 rounded-lg shadow-sm border">
                                    <p className="text-sm font-semibold text-muted-foreground">Final SNF</p>
                                    <p className="text-2xl font-bold text-purple-700">{result.finalSnf.toFixed(4)}%</p>
                                </div>
                                <div className="bg-white/90 p-4 rounded-lg shadow-sm border">
                                    <p className="text-sm font-semibold text-muted-foreground">Final TS</p>
                                    <p className="text-2xl font-bold text-orange-700">{result.finalTs.toFixed(4)}%</p>
                                </div>
                                <div className="col-span-full bg-white/90 p-4 rounded-lg shadow-sm border">
                                    <p className="text-sm font-semibold text-muted-foreground">Total Quantity</p>
                                    <p className="text-2xl font-bold text-teal-700">{result.finalQtyKg.toFixed(4)} kg ({result.finalQtyLiters.toFixed(4)} Liters)</p>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>
                    
                    <Button variant="outline" onClick={() => setShowSteps(s => !s)} className="w-full">
                        {showSteps ? 'Hide' : 'Show'} Calculation Steps
                    </Button>

                    {showSteps && (
                        <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                            <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                                <Calculator className="w-6 h-6" /> Detailed Calculation Process
                            </h4>
                            <ScrollArea className="h-[400px] pr-4">
                                <div className="space-y-1 text-sm font-mono leading-relaxed">
                                    {calculationSteps.map((step, idx) => (
                                        <p key={idx} className={cn("whitespace-pre-wrap", step.includes('**') && 'font-extrabold mt-3 text-gray-900 text-base', step.includes('═══') && 'text-purple-700')}>
                                            {step.replace(/\*\*/g, '')}
                                        </p>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                    )}
                </div>
            )}
        </CalculatorCard>
    );
}

function FatSnfAdjustmentCalc() {
    const [adjustmentComponent, setAdjustmentComponent] = useState<'cream' | 'rich_milk' | 'skim_milk'>('cream');
    const [baseUnit, setBaseUnit] = useState<'kg' | 'liters'>('kg');
    const [snfFormula, setSnfFormula] = useState('isi');
    const [customConstants, setCustomConstants] = useState({ fatMultiplier: "0.25", constant: "0.72" });

    const [inputs, setInputs] = useState({
        baseQty: '1000',
        baseFat: '3.5',
        baseClr: '28',
        targetFat: '4.5',
        targetSnf: '8.7',
        creamFat: '40',
        creamClr: '15',
        richMilkFat: '6.0',
        richMilkClr: '29.5',
        skimMilkFat: '0.1',
        skimMilkClr: '35',
    });

    const [result, setResult] = useState<{
        mainCompName: string;
        mainCompQty: number;
        mainCompQtyLiters: number;
        comp2Name: string;
        comp2Qty: number;
        comp2QtyLiters: number;
        finalWeight: number;
        finalWeightLiters: number;
        finalFat: number;
        finalSnf: number;
        targetFat: number;
        targetSnf: number;
        fatError: number;
        snfError: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);
    
    const handleCustomConstChange = useCallback((name: string, value: string) => {
        setCustomConstants(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        if (snfFormula === 'custom') {
            const multi = parseFloat(customConstants.fatMultiplier) || 0;
            const constFactor = parseFloat(customConstants.constant) || 0;
            return (clr / 4) + (fat * multi) + constFactor;
        }
        const formula = snfFormulas[snfFormula as keyof typeof snfFormulas] || snfFormulas.isi;
        return formula.calc(clr, fat);
    }, [snfFormula, customConstants]);

    const baseSnf = useMemo(() => {
        const fat = parseFloat(inputs.baseFat);
        const clr = parseFloat(inputs.baseClr);
        return !isNaN(fat) && !isNaN(clr) ? calculateSnf(clr, fat) : 0;
    }, [inputs.baseFat, inputs.baseClr, calculateSnf]);
    
    const adjustmentCompSnf = useMemo(() => {
        let fat=0, clr=0;
        switch(adjustmentComponent) {
            case 'cream': fat = parseFloat(inputs.creamFat); clr = parseFloat(inputs.creamClr); break;
            case 'rich_milk': fat = parseFloat(inputs.richMilkFat); clr = parseFloat(inputs.richMilkClr); break;
            case 'skim_milk': fat = parseFloat(inputs.skimMilkFat); clr = parseFloat(inputs.skimMilkClr); break;
        }
        return !isNaN(fat) && !isNaN(clr) ? calculateSnf(clr, fat) : 0;
    }, [adjustmentComponent, inputs, calculateSnf]);

    const calculate = useCallback(() => {
        setError(null);
        setResult(null);
        setCalculationSteps([]);

        const baseQtyValue = parseFloat(inputs.baseQty);
        const Qm = baseUnit === 'liters' ? baseQtyValue * componentProps.milkDensity : baseQtyValue;

        const Fm_percent = parseFloat(inputs.baseFat);
        const Sm_percent = baseSnf;
        const Ft_percent = parseFloat(inputs.targetFat);
        const St_percent = parseFloat(inputs.targetSnf);

        if ([Qm, Fm_percent, Sm_percent, Ft_percent, St_percent].some(isNaN) || Qm <= 0 || Sm_percent <= 0) {
            setError("⚠️ Please fill all base and target fields with valid numbers.");
            return;
        }

        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Base Milk:`);
        steps.push(`     Quantity = ${baseQtyValue} ${baseUnit} → ${Qm.toFixed(6)} kg`);
        steps.push(`     Fat (Fₘ) = ${Fm_percent}%`);
        steps.push(`     CLR = ${inputs.baseClr}`);
        steps.push(`     SNF (Sₘ) = ${Sm_percent.toFixed(6)}% (Calculated)`);
        
        steps.push(`\n   Target Milk:`);
        steps.push(`     Target Fat (Fₜ) = ${Ft_percent}%`);
        steps.push(`     Target SNF (Sₜ) = ${St_percent}%`);

        // ============ STEP 2: ADJUSTMENT COMPONENT ============
        let mainComp: { name: string; F_percent: number; S_percent: number; CLR: number; };
        
        steps.push(`\n\n🧪 **═══════════ STEP 2: ADJUSTMENT COMPONENT ═══════════**`);
        
        switch(adjustmentComponent) {
            case 'rich_milk':
                mainComp = { 
                    name: "Rich Milk", 
                    F_percent: parseFloat(inputs.richMilkFat), 
                    S_percent: adjustmentCompSnf,
                    CLR: parseFloat(inputs.richMilkClr)
                };
                steps.push(`   Selected: **RICH MILK**`);
                steps.push(`     Fat = ${inputs.richMilkFat}%`);
                steps.push(`     CLR = ${inputs.richMilkClr}`);
                break;
            case 'skim_milk':
                mainComp = { 
                    name: "Skim Milk", 
                    F_percent: parseFloat(inputs.skimMilkFat), 
                    S_percent: adjustmentCompSnf,
                    CLR: parseFloat(inputs.skimMilkClr)
                };
                steps.push(`   Selected: **SKIM MILK**`);
                steps.push(`     Fat = ${inputs.skimMilkFat}%`);
                steps.push(`     CLR = ${inputs.skimMilkClr}`);
                break;
            case 'cream':
            default:
                mainComp = { 
                    name: "Cream", 
                    F_percent: parseFloat(inputs.creamFat), 
                    S_percent: adjustmentCompSnf,
                    CLR: parseFloat(inputs.creamClr)
                };
                steps.push(`   Selected: **CREAM**`);
                steps.push(`     Fat = ${inputs.creamFat}%`);
                steps.push(`     CLR = ${inputs.creamClr}`);
                break;
        }
        
        steps.push(`     SNF = ${mainComp.S_percent.toFixed(6)}% (Calculated)`);

        if (isNaN(mainComp.F_percent) || isNaN(mainComp.S_percent) || adjustmentCompSnf <= 0) {
            setError("❌ Invalid properties for adjustment component. Please check values.");
            return;
        }

        // ============ STEP 3: CONVERT TO DECIMAL ============
        steps.push(`\n\n🔢 **═══════════ STEP 3: CONVERT TO DECIMAL FORM ═══════════**`);
        
        const F_m = Fm_percent / 100;
        const S_m = Sm_percent / 100;
        const F_t = Ft_percent / 100;
        const S_t = St_percent / 100;
        const F_adj = mainComp.F_percent / 100;
        const S_adj = mainComp.S_percent / 100;
        const F_smp = componentProps.smp.fat / 100;
        const S_smp = componentProps.smp.ts / 100 - F_smp;
        const F_w = 0;
        const S_w = 0;

        steps.push(`   Base Milk: Fₘ = ${F_m.toFixed(8)}, Sₘ = ${S_m.toFixed(8)}`);
        steps.push(`   Target: Fₜ = ${F_t.toFixed(8)}, Sₜ = ${S_t.toFixed(8)}`);
        steps.push(`   ${mainComp.name}: F_adj = ${F_adj.toFixed(8)}, S_adj = ${S_adj.toFixed(8)}`);
        steps.push(`   SMP: F_smp = ${F_smp.toFixed(8)}, S_smp = ${S_smp.toFixed(8)}`);
        steps.push(`   Water: F_w = ${F_w}, S_w = ${S_w}`);

        // ============ STEP 4: CALCULATE DIFFERENCES ============
        steps.push(`\n\n📈 **═══════════ STEP 4: REQUIRED CHANGES ═══════════**`);
        
        const fatDifference = F_t - F_m;
        const snfDifference = S_t - S_m;
        
        steps.push(`\n   Fat Difference (ΔF):`);
        steps.push(`     ΔF = Fₜ - Fₘ`);
        steps.push(`        = ${F_t.toFixed(8)} - ${F_m.toFixed(8)}`);
        steps.push(`        = ${fatDifference.toFixed(8)}`);
        
        steps.push(`\n   SNF Difference (ΔS):`);
        steps.push(`     ΔS = Sₜ - Sₘ`);
        steps.push(`        = ${S_t.toFixed(8)} - ${S_m.toFixed(8)}`);
        steps.push(`        = ${snfDifference.toFixed(8)}`);

        // ============ STEP 5: SOLVE LINEAR SYSTEM ============
        steps.push(`\n\n🧮 **═══════════ STEP 5: SOLVE LINEAR EQUATIONS ═══════════**`);
        steps.push(`   We need to find X (main component) and Y (secondary component)`);
        steps.push(`   Such that: X × component + Y × (SMP or Water) = required changes`);

        let comp2: { name: string; F: number; S: number; };
        let comp2Needed = 0, mainCompNeeded = 0;
        let solutionType = '';

        // Try with SMP first
        steps.push(`\n   **Attempt 1: ${mainComp.name} + SMP**`);
        steps.push(`   Linear Equations:`);
        steps.push(`     X × (F_adj - Fₜ) + Y × (F_smp - Fₜ) = Qₘ × ΔF`);
        steps.push(`     X × (S_adj - Sₜ) + Y × (S_smp - Sₜ) = Qₘ × ΔS`);
        
        let determinant = (F_adj - F_t) * (S_smp - S_t) - (F_smp - F_t) * (S_adj - S_t);
        
        steps.push(`\n   Determinant Calculation:`);
        steps.push(`     det = (F_adj - Fₜ) × (S_smp - Sₜ) - (F_smp - Fₜ) × (S_adj - Sₜ)`);
        steps.push(`         = (${F_adj.toFixed(8)} - ${F_t.toFixed(8)}) × (${S_smp.toFixed(8)} - ${S_t.toFixed(8)}) - (${F_smp.toFixed(8)} - ${F_t.toFixed(8)}) × (${S_adj.toFixed(8)} - ${S_t.toFixed(8)})`);
        steps.push(`         = ${(F_adj - F_t).toFixed(8)} × ${(S_smp - S_t).toFixed(8)} - ${(F_smp - F_t).toFixed(8)} × ${(S_adj - S_t).toFixed(8)}`);
        steps.push(`         = ${determinant.toFixed(10)}`);
        
        if (Math.abs(determinant) > 1e-9) {
            mainCompNeeded = (Qm * (fatDifference * (S_smp - S_t) - snfDifference * (F_smp - F_t))) / determinant;
            comp2Needed = (Qm * (snfDifference * (F_adj - F_t) - fatDifference * (S_adj - S_t))) / determinant;
            comp2 = { name: "SMP", F: F_smp, S: S_smp };

            steps.push(`\n   Solution (Cramer's Rule):`);
            steps.push(`     X (${mainComp.name}) = ${mainCompNeeded.toFixed(8)} kg`);
            steps.push(`     Y (SMP) = ${comp2Needed.toFixed(8)} kg`);
            steps.push(`     Valid: ${mainCompNeeded >= -1e-6 && comp2Needed >= -1e-6 ? '✅ YES' : '❌ NO (negative values)'}`);

            if (mainCompNeeded < -1e-6 || comp2Needed < -1e-6) {
                // Try with Water
                steps.push(`\n   **Attempt 2: ${mainComp.name} + Water**`);
                steps.push(`   (Previous solution had negative values, trying with Water)`);
                
                determinant = (F_adj - F_t) * (S_w - S_t) - (F_w - F_t) * (S_adj - S_t);
                
                steps.push(`\n   Determinant Calculation:`);
                steps.push(`     det = (F_adj - Fₜ) × (S_w - Sₜ) - (F_w - Fₜ) × (S_adj - Sₜ)`);
                steps.push(`         = ${determinant.toFixed(10)}`);
                
                if(Math.abs(determinant) > 1e-9) {
                    mainCompNeeded = (Qm * (fatDifference * (S_w - S_t) - snfDifference * (F_w - F_t))) / determinant;
                    comp2Needed = (Qm * (snfDifference * (F_adj - F_t) - fatDifference * (S_adj - S_t))) / determinant;
                    comp2 = { name: "Water", F: F_w, S: S_w };
                    
                    steps.push(`\n   Solution (Cramer's Rule):`);
                    steps.push(`     X (${mainComp.name}) = ${mainCompNeeded.toFixed(8)} kg`);
                    steps.push(`     Y (Water) = ${comp2Needed.toFixed(8)} kg`);
                    steps.push(`     Valid: ${mainCompNeeded >= -1e-6 && comp2Needed >= -1e-6 ? '✅ YES' : '❌ NO (negative values)'}`);
                } else {
                    mainCompNeeded = -1;
                    steps.push(`     ⚠️ Determinant ≈ 0, no unique solution`);
                }
            } else {
                solutionType = 'smp';
            }
        } else {
            setError("❌ Cannot calculate: Components may be too similar or target unachievable.");
            return;
        }

        if (mainCompNeeded < -1e-6 || comp2Needed < -1e-6) {
            setError(`❌ Target not achievable with ${mainComp.name} and SMP/Water. Try different components.`);
            return;
        }

        mainCompNeeded = Math.max(0, mainCompNeeded);
        comp2Needed = Math.max(0, comp2Needed);
        solutionType = comp2.name === 'SMP' ? 'smp' : 'water';

        steps.push(`\n   ✅ **Selected Solution: ${mainComp.name} + ${comp2.name}**`);

        // ============ STEP 6: CALCULATE FINAL PROPERTIES ============
        steps.push(`\n\n🔬 **═══════════ STEP 6: FINAL BATCH PROPERTIES ═══════════**`);
        
        const finalWeight = Qm + mainCompNeeded + comp2Needed;
        const finalWeightLiters = finalWeight / componentProps.milkDensity;
        
        steps.push(`\n   Final Weight:`);
        steps.push(`     Final Weight = Qₘ + X + Y`);
        steps.push(`                  = ${Qm.toFixed(6)} + ${mainCompNeeded.toFixed(8)} + ${comp2Needed.toFixed(8)}`);
        steps.push(`                  = ${finalWeight.toFixed(8)} kg`);
        steps.push(`                  = ${finalWeightLiters.toFixed(8)} liters`);
        
        const finalFatMass = (F_m * Qm) + (F_adj * mainCompNeeded) + (comp2.F * comp2Needed);
        const finalFat = (finalFatMass / finalWeight) * 100;
        
        steps.push(`\n   Final Fat Calculation:`);
        steps.push(`     Fat Mass = (Fₘ × Qₘ) + (F_adj × X) + (F_comp2 × Y)`);
        steps.push(`              = (${F_m.toFixed(8)} × ${Qm.toFixed(6)}) + (${F_adj.toFixed(8)} × ${mainCompNeeded.toFixed(8)}) + (${comp2.F.toFixed(8)} × ${comp2Needed.toFixed(8)})`);
        steps.push(`              = ${(F_m * Qm).toFixed(8)} + ${(F_adj * mainCompNeeded).toFixed(8)} + ${(comp2.F * comp2Needed).toFixed(8)}`);
        steps.push(`              = ${finalFatMass.toFixed(8)} kg`);
        steps.push(`     Final Fat% = (Fat Mass / Final Weight) × 100`);
        steps.push(`                = (${finalFatMass.toFixed(8)} / ${finalWeight.toFixed(8)}) × 100`);
        steps.push(`                = ${finalFat.toFixed(8)}%`);
        
        const finalSnfMass = (S_m * Qm) + (S_adj * mainCompNeeded) + (comp2.S * comp2Needed);
        const finalSnf = (finalSnfMass / finalWeight) * 100;
        
        steps.push(`\n   Final SNF Calculation:`);
        steps.push(`     SNF Mass = (Sₘ × Qₘ) + (S_adj × X) + (S_comp2 × Y)`);
        steps.push(`              = (${S_m.toFixed(8)} × ${Qm.toFixed(6)}) + (${S_adj.toFixed(8)} × ${mainCompNeeded.toFixed(8)}) + (${comp2.S.toFixed(8)} × ${comp2Needed.toFixed(8)})`);
        steps.push(`              = ${(S_m * Qm).toFixed(8)} + ${(S_adj * mainCompNeeded).toFixed(8)} + ${(comp2.S * comp2Needed).toFixed(8)}`);
        steps.push(`              = ${finalSnfMass.toFixed(8)} kg`);
        steps.push(`     Final SNF% = (SNF Mass / Final Weight) × 100`);
        steps.push(`                = (${finalSnfMass.toFixed(8)} / ${finalWeight.toFixed(8)}) × 100`);
        steps.push(`                = ${finalSnf.toFixed(8)}%`);

        // ============ STEP 7: ACCURACY CHECK ============
        steps.push(`\n\n📊 **═══════════ STEP 7: ACCURACY CHECK ═══════════**`);
        
        const fatError = Math.abs(finalFat - Ft_percent);
        const snfError = Math.abs(finalSnf - St_percent);
        
        steps.push(`\n   Target vs Achieved:`);
        steps.push(`     Fat Error = |${finalFat.toFixed(8)} - ${Ft_percent}| = ${fatError.toFixed(8)}%`);
        steps.push(`     SNF Error = |${finalSnf.toFixed(8)} - ${St_percent}| = ${snfError.toFixed(8)}%`);
        
        steps.push(`\n   Accuracy Status:`);
        steps.push(`     Fat: ${fatError <= 0.05 ? '✅ Excellent (≤0.05%)' : fatError <= 0.1 ? '⚠️ Good (≤0.1%)' : '❌ Needs Review'}`);
        steps.push(`     SNF: ${snfError <= 0.05 ? '✅ Excellent (≤0.05%)' : snfError <= 0.1 ? '⚠️ Good (≤0.1%)' : '❌ Needs Review'}`);

        setCalculationSteps(steps);
        setResult({
            mainCompName: mainComp.name,
            mainCompQty: mainCompNeeded,
            mainCompQtyLiters: mainCompNeeded / componentProps.milkDensity,
            comp2Name: comp2.name,
            comp2Qty: comp2Needed,
            comp2QtyLiters: comp2Needed / (comp2.name === 'Water' ? 1.0 : componentProps.milkDensity),
            finalWeight,
            finalWeightLiters,
            finalFat,
            finalSnf,
            targetFat: Ft_percent,
            targetSnf: St_percent,
            fatError,
            snfError
        });

    }, [inputs, adjustmentComponent, baseUnit, baseSnf, adjustmentCompSnf, calculateSnf]);

    return (
        <CalculatorCard 
            title="Fat & SNF Adjustment Calculator" 
            description="Calculate required amounts of adjustment components (Cream/Rich Milk/Skim Milk) with automatic SMP/Water fine-tuning"
        >
            {/* SNF Formula Selection */}
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-5 rounded-xl border-2 border-indigo-300 shadow-md mb-6">
                <Label className="text-base font-bold mb-3 block flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    SNF Calculation Formula
                </Label>
                <Select value={snfFormula} onValueChange={setSnfFormula}>
                    <SelectTrigger className="bg-white border-2 border-indigo-200 h-12 text-base font-medium">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key} className="text-base py-3">
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800">{name}</span>
                                    <span className="text-xs text-muted-foreground mt-1">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                        <SelectItem value="custom" className="text-base py-3">Custom Formula</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {snfFormula === 'custom' && (
                <div className="grid grid-cols-2 gap-4 mb-6 p-5 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50">
                    <MemoizedInputField 
                        label="Fat Multiplier" 
                        value={customConstants.fatMultiplier} 
                        name="fatMultiplier" 
                        setter={handleCustomConstChange}
                    />
                    <MemoizedInputField 
                        label="Constant (C)" 
                        value={customConstants.constant} 
                        name="constant" 
                        setter={handleCustomConstChange}
                    />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Base Milk */}
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-blue-800">
                        <Droplets className="w-6 h-6" />
                        Base Milk
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Quantity</Label>
                            <div className="flex gap-2">
                                <Input
                                    type="number"
                                    value={inputs.baseQty}
                                    onChange={(e) => handleInputChange('baseQty', e.target.value)}
                                    className="flex-1 h-11 text-base font-medium border-2 border-blue-300"
                                    step="0.001"
                                />
                                <Select value={baseUnit} onValueChange={(val) => setBaseUnit(val as 'kg' | 'liters')}>
                                    <SelectTrigger className="w-[110px] h-11 border-2 border-blue-300 font-semibold">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                        <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <MemoizedInputField label="Fat %" value={inputs.baseFat} name="baseFat" setter={handleInputChange} />
                        <MemoizedInputField label="CLR" value={inputs.baseClr} name="baseClr" setter={handleInputChange} />
                        <Alert className="bg-blue-200 border-2 border-blue-400">
                            <Info className="h-4 w-4" />
                            <AlertDescription className="font-bold text-blue-900">
                                Calculated SNF: {baseSnf > 0 ? baseSnf.toFixed(4) + '%' : '...'}
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>

                {/* Target Milk */}
                <div className="bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-green-800">
                        <Target className="w-6 h-6" />
                        Target Milk
                    </h3>
                    <div className="space-y-4">
                        <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                        <MemoizedInputField label="Target SNF %" value={inputs.targetSnf} name="targetSnf" setter={handleInputChange} />
                    </div>
                </div>
            </div>

            {/* Adjustment Component */}
            <div className="bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 p-6 rounded-xl border-2 border-yellow-400 shadow-lg mb-6">
                <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-orange-800">
                    <Beaker className="w-6 h-6" />
                    Select Adjustment Component
                </h3>
                <div className="space-y-4">
                    <Select value={adjustmentComponent} onValueChange={(val) => setAdjustmentComponent(val as any)}>
                        <SelectTrigger className="h-11 border-2 border-yellow-300 font-semibold text-base">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cream" className="text-base font-medium">Cream</SelectItem>
                            <SelectItem value="rich_milk" className="text-base font-medium">Rich Milk</SelectItem>
                            <SelectItem value="skim_milk" className="text-base font-medium">Skim Milk</SelectItem>
                        </SelectContent>
                    </Select>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {adjustmentComponent === 'cream' && (<>
                            <MemoizedInputField label="Cream Fat %" value={inputs.creamFat} name="creamFat" setter={handleInputChange} />
                            <MemoizedInputField label="Cream CLR" value={inputs.creamClr} name="creamClr" setter={handleInputChange} />
                        </>)}
                        {adjustmentComponent === 'rich_milk' && (<>
                            <MemoizedInputField label="Rich Milk Fat %" value={inputs.richMilkFat} name="richMilkFat" setter={handleInputChange} />
                            <MemoizedInputField label="Rich Milk CLR" value={inputs.richMilkClr} name="richMilkClr" setter={handleInputChange} />
                        </>)}
                        {adjustmentComponent === 'skim_milk' && (<>
                            <MemoizedInputField label="Skim Milk Fat %" value={inputs.skimMilkFat} name="skimMilkFat" setter={handleInputChange} />
                            <MemoizedInputField label="Skim Milk CLR" value={inputs.skimMilkClr} name="skimMilkClr" setter={handleInputChange} />
                        </>)}
                    </div>
                    
                    <Alert className="bg-amber-200 border-2 border-amber-400">
                        <Info className="h-4 w-4" />
                        <AlertDescription className="font-bold text-amber-900">
                            Component SNF: {adjustmentCompSnf > 0 ? adjustmentCompSnf.toFixed(4) + '%' : '...'}
                        </AlertDescription>
                    </Alert>
                    
                    <Alert className="bg-blue-100 border-2 border-blue-300">
                        <Info className="h-5 w-5 text-blue-700" />
                        <AlertDescription className="text-sm font-semibold text-blue-800">
                            <strong>Auto Fine-Tuning:</strong> Calculator will automatically use SMP (0.5% Fat, 96% TS) or Water for precise results.
                        </AlertDescription>
                    </Alert>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Adjustment Plan
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Adjustment Plan Ready!
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* Components to Add */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300">
                                    <h5 className="font-bold text-lg text-green-800 mb-3 flex items-center gap-2">
                                        <Plus className="w-5 h-5" />
                                        Components to Add
                                    </h5>
                                    <div className="space-y-3">
                                        {result.mainCompQty > 0.001 && (
                                            <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border-2 border-amber-300">
                                                <span className="font-semibold text-lg text-amber-900">{result.mainCompName}</span>
                                                <div className="text-right">
                                                    <p className="font-bold text-2xl text-amber-700">{result.mainCompQty.toFixed(4)} kg</p>
                                                    <p className="text-sm text-amber-600">{result.mainCompQtyLiters.toFixed(4)} liters</p>
                                                </div>
                                            </div>
                                        )}
                                        {result.comp2Qty > 0.001 && (
                                            <div className="flex justify-between items-center p-4 bg-cyan-50 rounded-lg border-2 border-cyan-300">
                                                <span className="font-semibold text-lg text-cyan-900">{result.comp2Name}</span>
                                                <div className="text-right">
                                                    <p className="font-bold text-2xl text-cyan-700">{result.comp2Qty.toFixed(4)} kg</p>
                                                    <p className="text-sm text-cyan-600">
                                                        {result.comp2Name === 'Water' ? `= ${result.comp2QtyLiters.toFixed(4)} liters` : `≈ ${result.comp2QtyLiters.toFixed(4)} liters`}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Final Batch */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-teal-300">
                                    <h5 className="font-bold text-lg text-teal-800 mb-4 flex items-center gap-2">
                                        <Scale className="w-5 h-5" />
                                        Final Batch Summary
                                    </h5>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        <div className="text-center bg-teal-50 p-4 rounded-lg border border-teal-200">
                                            <p className="text-xs text-muted-foreground font-semibold mb-2">Final Weight</p>
                                            <p className="font-bold text-2xl text-teal-700">{result.finalWeight.toFixed(4)} kg</p>
                                            <p className="text-sm text-teal-600">{result.finalWeightLiters.toFixed(4)} liters</p>
                                        </div>
                                        <div className="text-center bg-purple-50 p-4 rounded-lg border border-purple-200">
                                            <p className="text-xs text-muted-foreground font-semibold mb-2">Final Fat</p>
                                            <p className="font-bold text-2xl text-purple-700">{result.finalFat.toFixed(4)}%</p>
                                            <Badge className={cn(
                                                result.fatError <= 0.05 ? "bg-green-500" : 
                                                result.fatError <= 0.1 ? "bg-yellow-500" : "bg-red-500"
                                            )}>
                                                Target: {result.targetFat}%
                                            </Badge>
                                        </div>
                                        <div className="text-center bg-pink-50 p-4 rounded-lg border border-pink-200">
                                            <p className="text-xs text-muted-foreground font-semibold mb-2">Final SNF</p>
                                            <p className="font-bold text-2xl text-pink-700">{result.finalSnf.toFixed(4)}%</p>
                                            <Badge className={cn(
                                                result.snfError <= 0.05 ? "bg-green-500" : 
                                                result.snfError <= 0.1 ? "bg-yellow-500" : "bg-red-500"
                                            )}>
                                                Target: {result.targetSnf}%
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Accuracy Status */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-300">
                                    <h5 className="font-bold text-base text-blue-900 mb-3 flex items-center gap-2">
                                        <Target className="w-5 h-5" />
                                        Accuracy Status
                                    </h5>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <p className="text-xs font-semibold mb-1">Fat Error</p>
                                            <p className="text-xl font-bold text-purple-700">{result.fatError.toFixed(6)}%</p>
                                            <p className="text-xs mt-1">{result.fatError <= 0.05 ? '✅ Excellent' : result.fatError <= 0.1 ? '⚠️ Good' : '❌ Review'}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-semibold mb-1">SNF Error</p>
                                            <p className="text-xl font-bold text-pink-700">{result.snfError.toFixed(6)}%</p>
                                            <p className="text-xs mt-1">{result.snfError <= 0.05 ? '✅ Excellent' : result.snfError <= 0.1 ? '⚠️ Good' : '❌ Review'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete Calculation Process (Mobile Calculator Verification)
                        </h4>
                        <ScrollArea className="h-[500px] pr-4">
                            <div className="space-y-1 text-sm font-mono leading-relaxed">
                                {calculationSteps.map((step, idx) => (
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
                                            step.includes('🧮') && 'text-indigo-700 font-bold text-lg',
                                            step.includes('🔬') && 'text-pink-700 font-bold text-lg',
                                            step.includes('🧪') && 'text-orange-700 font-bold text-lg',
                                            step.includes('📈') && 'text-teal-700 font-bold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('❌') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ Every step shown with complete mathematical detail - verify with your calculator!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}
function TwoMilkBlendingToTargetCalc() {
    const [inputs, setInputs] = useState({
        f1: '6.5', c1: '29',
        f2: '2.5', c2: '27',
        fTarget: '4.5', cTarget: '28.5',
        qTotal: '1000'
    });
    const [totalQtyUnit, setTotalQtyUnit] = useState<'kg' | 'liters'>('kg');
    const [snfFormula, setSnfFormula] = useState('isi');
    const [result, setResult] = useState<{
        q1: number;
        q2: number;
        q1Liters: number;
        q2Liters: number;
        totalQtyKg: number;
        finalFat: number;
        finalClr: number;
        finalSnf: number;
        targetSnf: number;
        clrDifference: number;
        adjustment: {
            type: 'none' | 'smp' | 'water';
            amount: number;
            amountLiters: number;
        };
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value }));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        const formula = snfFormulas[snfFormula as keyof typeof snfFormulas] || snfFormulas.isi;
        return formula.calc(clr, fat);
    }, [snfFormula]);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);
        
        const F1 = parseFloat(inputs.f1);
        const C1 = parseFloat(inputs.c1);
        const F2 = parseFloat(inputs.f2);
        const C2 = parseFloat(inputs.c2);
        const FT = parseFloat(inputs.fTarget);
        const CT = parseFloat(inputs.cTarget);
        const qTotalVal = parseFloat(inputs.qTotal);

        const QT = totalQtyUnit === 'liters' ? qTotalVal * componentProps.milkDensity : qTotalVal;

        if ([F1, C1, F2, C2, FT, CT, qTotalVal].some(isNaN)) {
            setError("⚠️ Please fill all fields with valid numbers.");
            return;
        }

        if (QT <= 0) {
            setError("⚠️ Total Batch Quantity must be a positive number.");
            return;
        }

        if ( (FT > Math.max(F1,F2)) || (FT < Math.min(F1,F2)) ) {
            setError(`❌ Target Fat% (${FT}%) must be between ${Math.min(F1,F2)}% and ${Math.max(F1,F2)}%`);
            return;
        }

        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Milk Source 1:`);
        steps.push(`     Fat (F₁) = ${F1}%`);
        steps.push(`     CLR (C₁) = ${C1}`);
        steps.push(`\n   Milk Source 2:`);
        steps.push(`     Fat (F₂) = ${F2}%`);
        steps.push(`     CLR (C₂) = ${C2}`);
        steps.push(`\n   Target Batch:`);
        steps.push(`     Total Quantity = ${qTotalVal} ${totalQtyUnit} → ${QT.toFixed(6)} kg`);
        steps.push(`     Target Fat (Fᴛ) = ${FT}%`);
        steps.push(`     Target CLR (Cᴛ) = ${CT}`);

        // ============ STEP 2: CALCULATE MILK QUANTITIES (PEARSON SQUARE) ============
        let q1, q2;

        steps.push(`\n\n🔢 **═══════════ STEP 2: PEARSON SQUARE METHOD ═══════════**`);
        steps.push(`   (To achieve Target Fat% of ${FT}%)`);

        if (Math.abs(F1 - F2) < 1e-9) {
            if (Math.abs(F1 - FT) > 1e-9) {
                setError("❌ Cannot achieve target fat: Both source milks have identical fat percentage.");
                return;
            }
            q1 = QT / 2;
            q2 = QT / 2;
            steps.push(`\n   ⚠️ Both milks have same Fat% (${F1}%)`);
            steps.push(`   Using equal split: q₁ = q₂ = ${QT.toFixed(6)} / 2`);
        } else {
            // Pearson Square Method
            const highFat = F1 >= F2 ? { fat: F1, clr: C1, isM1: true } : { fat: F2, clr: C2, isM1: false };
            const lowFat = F1 < F2 ? { fat: F1, clr: C1, isM1: true } : { fat: F2, clr: C2, isM1: false };
            
            const partsHigh = FT - lowFat.fat;
            const partsLow = highFat.fat - FT;
            const totalParts = partsHigh + partsLow;
            
            steps.push(`\n   Pearson Square Calculation:`);
            steps.push(`     High Fat Milk: ${highFat.fat}%`);
            steps.push(`     Low Fat Milk: ${lowFat.fat}%`);
            steps.push(`     Target Fat: ${FT}%`);
            steps.push(`\n   Parts Calculation:`);
            steps.push(`     Parts High Fat = Fᴛ - Low Fat`);
            steps.push(`                    = ${FT} - ${lowFat.fat}`);
            steps.push(`                    = ${partsHigh.toFixed(8)}`);
            steps.push(`\n     Parts Low Fat = High Fat - Fᴛ`);
            steps.push(`                   = ${highFat.fat} - ${FT}`);
            steps.push(`                   = ${partsLow.toFixed(8)}`);
            steps.push(`\n     Total Parts = ${partsHigh.toFixed(8)} + ${partsLow.toFixed(8)}`);
            steps.push(`                 = ${totalParts.toFixed(8)}`);
            
            const qtyHigh = (QT * partsHigh) / totalParts;
            const qtyLow = (QT * partsLow) / totalParts;
            
            steps.push(`\n   Quantity Calculation:`);
            steps.push(`     High Fat Milk Qty = (Total Qty × Parts High) / Total Parts`);
            steps.push(`                       = (${QT.toFixed(6)} × ${partsHigh.toFixed(8)}) / ${totalParts.toFixed(8)}`);
            steps.push(`                       = ${(QT * partsHigh).toFixed(8)} / ${totalParts.toFixed(8)}`);
            steps.push(`                       = ${qtyHigh.toFixed(8)} kg`);
            steps.push(`\n     Low Fat Milk Qty = (Total Qty × Parts Low) / Total Parts`);
            steps.push(`                      = (${QT.toFixed(6)} × ${partsLow.toFixed(8)}) / ${totalParts.toFixed(8)}`);
            steps.push(`                      = ${(QT * partsLow).toFixed(8)} / ${totalParts.toFixed(8)}`);
            steps.push(`                      = ${qtyLow.toFixed(8)} kg`);
            
            q1 = highFat.isM1 ? qtyHigh : qtyLow;
            q2 = highFat.isM1 ? qtyLow : qtyHigh;
            
            steps.push(`\n   ✅ RESULT:`);
            steps.push(`     Milk Source 1 (q₁) = ${q1.toFixed(8)} kg`);
            steps.push(`     Milk Source 2 (q₂) = ${q2.toFixed(8)} kg`);
        }
        
        if (q1 < 0 || q2 < 0) {
            setError("❌ Calculation error: Negative milk quantity. Check input values.");
            return;
        }

        const q1Liters = q1 / componentProps.milkDensity;
        const q2Liters = q2 / componentProps.milkDensity;
        
        steps.push(`\n   Conversion to Liters:`);
        steps.push(`     Milk Source 1 = ${q1.toFixed(8)} / ${componentProps.milkDensity} = ${q1Liters.toFixed(8)} liters`);
        steps.push(`     Milk Source 2 = ${q2.toFixed(8)} / ${componentProps.milkDensity} = ${q2Liters.toFixed(8)} liters`);

        // ============ STEP 3: VERIFY FAT & CALCULATE CLR ============
        steps.push(`\n\n🧮 **═══════════ STEP 3: VERIFY FAT & CALCULATE CLR ═══════════**`);
        
        const finalFat = (q1 * F1 + q2 * F2) / QT;
        const finalClr = (q1 * C1 + q2 * C2) / QT;
        
        steps.push(`\n   Final Fat Calculation:`);
        steps.push(`     Final Fat = (q₁ × F₁ + q₂ × F₂) / Qᴛ`);
        steps.push(`               = (${q1.toFixed(8)} × ${F1} + ${q2.toFixed(8)} × ${F2}) / ${QT.toFixed(6)}`);
        steps.push(`               = (${(q1 * F1).toFixed(8)} + ${(q2 * F2).toFixed(8)}) / ${QT.toFixed(6)}`);
        steps.push(`               = ${(q1 * F1 + q2 * F2).toFixed(8)} / ${QT.toFixed(6)}`);
        steps.push(`               = ${finalFat.toFixed(8)}%`);
        steps.push(`     ✅ Fat Verification: ${finalFat.toFixed(8)}% ≈ ${FT}% (Target)`);
        
        steps.push(`\n   Final CLR Calculation:`);
        steps.push(`     Final CLR = (q₁ × C₁ + q₂ × C₂) / Qᴛ`);
        steps.push(`               = (${q1.toFixed(8)} × ${C1} + ${q2.toFixed(8)} × ${C2}) / ${QT.toFixed(6)}`);
        steps.push(`               = (${(q1 * C1).toFixed(8)} + ${(q2 * C2).toFixed(8)}) / ${QT.toFixed(6)}`);
        steps.push(`               = ${(q1 * C1 + q2 * C2).toFixed(8)} / ${QT.toFixed(6)}`);
        steps.push(`               = ${finalClr.toFixed(8)}`);

        const clrDifference = CT - finalClr;
        steps.push(`\n   CLR Difference from Target:`);
        steps.push(`     CLR Difference = Cᴛ - Final CLR`);
        steps.push(`                    = ${CT} - ${finalClr.toFixed(8)}`);
        steps.push(`                    = ${clrDifference.toFixed(8)}`);

        // ============ STEP 4: CALCULATE SNF ============
        const finalSnf = calculateSnf(finalClr, finalFat);
        const targetSnf = calculateSnf(CT, FT);
        
        steps.push(`\n\n🔬 **═══════════ STEP 4: CALCULATE SNF ═══════════**`);
        steps.push(`   Formula: ${snfFormulas[snfFormula as keyof typeof snfFormulas]?.name || 'Custom'}`);
        steps.push(`\n   Current SNF (with Final CLR & Fat):`);
        steps.push(`     SNF = ${finalSnf.toFixed(8)}%`);
        steps.push(`\n   Target SNF (with Target CLR & Fat):`);
        steps.push(`     SNF = ${targetSnf.toFixed(8)}%`);

        // ============ STEP 5: CLR ADJUSTMENT ============
        let adjustment: { type: 'none' | 'smp' | 'water'; amount: number; amountLiters: number } = {
            type: 'none',
            amount: 0,
            amountLiters: 0
        };

        steps.push(`\n\n⚙️ **═══════════ STEP 5: CLR ADJUSTMENT ═══════════**`);
        
        if (Math.abs(clrDifference) < 0.05) {
            steps.push(`\n   ✅ NO ADJUSTMENT NEEDED`);
            steps.push(`   CLR is already within acceptable range (±0.05)`);
            steps.push(`   Final CLR: ${finalClr.toFixed(8)}`);
            steps.push(`   Target CLR: ${CT}`);
        } else if (clrDifference > 0) {
            // CLR is LOW - Add SMP
            steps.push(`\n   ⚠️ CLR IS LOW - Adding SMP (Skim Milk Powder)`);
            steps.push(`   Need to increase CLR by: ${clrDifference.toFixed(8)}`);
            
            const smpFat = 0.5;
            const smpSolidsPercent = 96;
            const smpSnf = 95.5;
            
            steps.push(`\n   SMP Properties:`);
            steps.push(`     Fat = ${smpFat}%`);
            steps.push(`     Total Solids = ${smpSolidsPercent}%`);
            steps.push(`     SNF = ${smpSnf}%`);
            
            // More accurate SMP calculation
            const smpNeeded = (QT * clrDifference * 0.25) / smpSolidsPercent;
            const smpNeededLiters = smpNeeded / componentProps.milkDensity;
            
            steps.push(`\n   SMP Calculation:`);
            steps.push(`     SMP Needed = (Qᴛ × CLR Diff × 0.25) / SMP Solids%`);
            steps.push(`                = (${QT.toFixed(6)} × ${clrDifference.toFixed(8)} × 0.25) / ${smpSolidsPercent}`);
            steps.push(`                = ${(QT * clrDifference * 0.25).toFixed(8)} / ${smpSolidsPercent}`);
            steps.push(`                = ${smpNeeded.toFixed(8)} kg`);
            steps.push(`                ≈ ${smpNeededLiters.toFixed(8)} liters (equivalent)`);
            
            adjustment = {
                type: 'smp',
                amount: smpNeeded,
                amountLiters: smpNeededLiters
            };
            
            const newTotalQty = QT + smpNeeded;
            const newFat = ((QT * finalFat) + (smpNeeded * smpFat)) / newTotalQty;
            const newClr = ((QT * finalClr) + (smpNeeded * 380)) / newTotalQty; // SMP CLR ≈ 380
            
            steps.push(`\n   After Adding SMP:`);
            steps.push(`     New Total Qty = ${QT.toFixed(6)} + ${smpNeeded.toFixed(8)} = ${newTotalQty.toFixed(8)} kg`);
            steps.push(`     New Fat = ${newFat.toFixed(8)}%`);
            steps.push(`     New CLR = ${newClr.toFixed(8)} (closer to target ${CT})`);
            
        } else {
            // CLR is HIGH - Add Water
            steps.push(`\n   ⚠️ CLR IS HIGH - Adding Water`);
            steps.push(`   Need to decrease CLR by: ${Math.abs(clrDifference).toFixed(8)}`);
            
            const clrToDecrease = Math.abs(clrDifference);
            const waterNeeded = (clrToDecrease * QT) / 50; // Simplified formula
            const waterNeededLiters = waterNeeded / 1.0; // Water density = 1.0
            
            steps.push(`\n   Water Calculation:`);
            steps.push(`     Water Needed = (CLR to Decrease × Qᴛ) / 50`);
            steps.push(`                  = (${clrToDecrease.toFixed(8)} × ${QT.toFixed(6)}) / 50`);
            steps.push(`                  = ${(clrToDecrease * QT).toFixed(8)} / 50`);
            steps.push(`                  = ${waterNeeded.toFixed(8)} kg`);
            steps.push(`                  = ${waterNeededLiters.toFixed(8)} liters`);
            
            adjustment = {
                type: 'water',
                amount: waterNeeded,
                amountLiters: waterNeededLiters
            };
            
            const newTotalQty = QT + waterNeeded;
            const newFat = (QT * finalFat) / newTotalQty;
            const newClr = (QT * finalClr) / newTotalQty;
            
            steps.push(`\n   After Adding Water:`);
            steps.push(`     New Total Qty = ${QT.toFixed(6)} + ${waterNeeded.toFixed(8)} = ${newTotalQty.toFixed(8)} kg`);
            steps.push(`     New Fat = ${newFat.toFixed(8)}%`);
            steps.push(`     New CLR = ${newClr.toFixed(8)} (closer to target ${CT})`);
        }

        // ============ FINAL SUMMARY ============
        steps.push(`\n\n✨ **═══════════ FINAL SUMMARY ═══════════**`);
        steps.push(`\n   Initial Blend:`);
        steps.push(`     Milk Source 1: ${q1.toFixed(8)} kg (${q1Liters.toFixed(8)} liters)`);
        steps.push(`     Milk Source 2: ${q2.toFixed(8)} kg (${q2Liters.toFixed(8)} liters)`);
        steps.push(`     Achieved Fat: ${finalFat.toFixed(8)}% ✓`);
        steps.push(`     Achieved CLR: ${finalClr.toFixed(8)}`);
        steps.push(`     Achieved SNF: ${finalSnf.toFixed(8)}%`);
        
        if (adjustment.type !== 'none') {
            steps.push(`\n   Adjustment:`);
            if (adjustment.type === 'smp') {
                steps.push(`     Add SMP: ${adjustment.amount.toFixed(8)} kg`);
            } else {
                steps.push(`     Add Water: ${adjustment.amount.toFixed(8)} kg (${adjustment.amountLiters.toFixed(8)} liters)`);
            }
        }
        
        steps.push(`\n   📊 Accuracy Check:`);
        steps.push(`     Fat Error: ${Math.abs(finalFat - FT).toFixed(8)}%`);
        steps.push(`     CLR Error: ${Math.abs(clrDifference).toFixed(8)}`);
        steps.push(`     SNF Difference: ${Math.abs(finalSnf - targetSnf).toFixed(8)}%`);

        setCalculationSteps(steps);
        setResult({
            q1,
            q2,
            q1Liters,
            q2Liters,
            totalQtyKg: QT,
            finalFat,
            finalClr,
            finalSnf,
            targetSnf,
            clrDifference,
            adjustment
        });

    }, [inputs, totalQtyUnit, calculateSnf, snfFormula]);

    return (
        <CalculatorCard 
            title="Advanced Two-Milk Blending to Target" 
            description="Calculate required quantities of two milk sources to achieve target Fat% & CLR with automatic SMP/water adjustment"
        >
            {/* SNF Formula Selection */}
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-5 rounded-xl border-2 border-indigo-300 shadow-md mb-6">
                <Label className="text-base font-bold mb-3 block flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    SNF Calculation Formula
                </Label>
                <Select value={snfFormula} onValueChange={setSnfFormula}>
                    <SelectTrigger className="bg-white border-2 border-indigo-200 h-12 text-base font-medium">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key} className="text-base py-3">
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800">{name}</span>
                                    <span className="text-xs text-muted-foreground mt-1">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Milk Source 1 */}
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-blue-800">
                        <Droplets className="w-6 h-6" />
                        Milk Source 1
                    </h3>
                    <div className="space-y-4">
                        <MemoizedInputField label="Fat % (F₁)" value={inputs.f1} name="f1" setter={handleInputChange} />
                        <MemoizedInputField label="CLR (C₁)" value={inputs.c1} name="c1" setter={handleInputChange} />
                    </div>
                </div>

                {/* Milk Source 2 */}
                <div className="bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-green-800">
                        <Droplets className="w-6 h-6" />
                        Milk Source 2
                    </h3>
                    <div className="space-y-4">
                        <MemoizedInputField label="Fat % (F₂)" value={inputs.f2} name="f2" setter={handleInputChange} />
                        <MemoizedInputField label="CLR (C₂)" value={inputs.c2} name="c2" setter={handleInputChange} />
                    </div>
                </div>

                {/* Target Batch */}
                <div className="bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 p-6 rounded-xl border-2 border-yellow-400 shadow-lg md:col-span-2">
                    <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-orange-800">
                        <Target className="w-6 h-6" />
                        Target Batch Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Total Batch Qty (Qᴛ)</Label>
                            <div className="flex gap-2">
                                <Input 
                                    type="number" 
                                    value={inputs.qTotal} 
                                    onChange={e => handleInputChange('qTotal', e.target.value)} 
                                    className="flex-1 h-11 text-base font-medium border-2 border-yellow-300"
                                    step="0.001"
                                />
                                <Select value={totalQtyUnit} onValueChange={(val) => setTotalQtyUnit(val as 'kg' | 'liters')}>
                                    <SelectTrigger className="w-[110px] h-11 border-2 border-yellow-300 font-semibold">
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                        <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <MemoizedInputField label="Target Fat % (Fᴛ)" value={inputs.fTarget} name="fTarget" setter={handleInputChange} />
                        <MemoizedInputField label="Target CLR (Cᴛ)" value={inputs.cTarget} name="cTarget" setter={handleInputChange} />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Blend &amp; Adjust
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Blending Plan Calculated Successfully!
                        </AlertTitle>
                        <AlertDescription>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Milk Source 1 */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-blue-300">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Droplets className="w-5 h-5 text-blue-600" />
                                        <p className="text-sm font-bold text-blue-800">Milk Source 1</p>
                                    </div>
                                    <p className="font-extrabold text-3xl text-blue-700 mb-1">
                                        {result.q1.toFixed(4)} kg
                                    </p>
                                    <p className="text-sm text-blue-600 font-semibold">
                                        {result.q1Liters.toFixed(4)} liters
                                    </p>
                                </div>

                                {/* Milk Source 2 */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Droplets className="w-5 h-5 text-green-600" />
                                        <p className="text-sm font-bold text-green-800">Milk Source 2</p>
                                    </div>
                                    <p className="font-extrabold text-3xl text-green-700 mb-1">
                                        {result.q2.toFixed(4)} kg
                                    </p>
                                    <p className="text-sm text-green-600 font-semibold">
                                        {result.q2Liters.toFixed(4)} liters
                                    </p>
                                </div>

                                {/* Achieved Values */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-purple-300">
                                    <p className="text-sm font-bold text-muted-foreground mb-3">Achieved Values</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-semibold">Fat:</span>
                                            <Badge className="bg-green-500 text-white">
                                                {result.finalFat.toFixed(6)}% ✓
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-semibold">CLR:</span>
                                            <Badge className={cn(
                                                Math.abs(result.clrDifference) < 0.05 ? "bg-green-500" : 
                                                Math.abs(result.clrDifference) < 0.15 ? "bg-yellow-500" : "bg-orange-500"
                                            )}>
                                                {result.finalClr.toFixed(6)}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-semibold">SNF:</span>
                                            <Badge className="bg-blue-500 text-white">
                                                {result.finalSnf.toFixed(6)}%
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Adjustment */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-amber-300">
                                    <p className="text-sm font-bold text-muted-foreground mb-3">CLR Adjustment</p>
                                    {result.adjustment.type === 'none' ? (
                                        <div className="flex items-center gap-2 text-green-700">
                                            <CheckCircle2 className="w-6 h-6" />
                                            <span className="font-bold text-lg">No Adjustment Needed</span>
                                        </div>
                                    ) : result.adjustment.type === 'smp' ? (
                                        <div>
                                            <p className="font-bold text-xl text-amber-700 mb-2">Add SMP</p>
                                            <p className="text-2xl font-extrabold text-amber-800">
                                                {result.adjustment.amount.toFixed(4)} kg
                                            </p>
                                            <p className="text-sm text-amber-600 font-semibold">
                                                ≈ {result.adjustment.amountLiters.toFixed(4)} liters
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="font-bold text-xl text-cyan-700 mb-2">Add Water</p>
                                            <p className="text-2xl font-extrabold text-cyan-800">
                                                {result.adjustment.amount.toFixed(4)} kg
                                            </p>
                                            <p className="text-sm text-cyan-600 font-semibold">
                                                = {result.adjustment.amountLiters.toFixed(4)} liters
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete Calculation Process (Mobile Calculator Verification)
                        </h4>
                        <ScrollArea className="h-[500px] pr-4">
                            <div className="space-y-1 text-sm font-mono leading-relaxed">
                                {calculationSteps.map((step, idx) => (
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
                                            step.includes('🧮') && 'text-indigo-700 font-bold text-lg',
                                            step.includes('🔬') && 'text-pink-700 font-bold text-lg',
                                            step.includes('⚙️') && 'text-orange-700 font-bold text-lg',
                                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('❌') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ All calculations shown step-by-step can be verified manually using any mobile calculator for complete transparency
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}

function TwoComponentStandardizationCalc() {
    const [correctionType, setCorrectionType] = useState('cream');
    const [milkUnit, setMilkUnit] = useState<'liters' | 'kg'>('kg');
    const [snfFormula, setSnfFormula] = useState('isi');
    const [inputs, setInputs] = useState({
        V0: '700', Fi: '3.5', CLRi: '28',
        Ft: '4.5', CLRt: '28.5',
        Fc: '40', CLRc: '10',    // Cream
        Fr: '6', CLRr: '30',     // Rich Milk
        Fs: '0.1', CLRs: '27',   // Skim Milk
        smpSnf: '96', smpFat: '0.5'
    });
    const [results, setResults] = useState<{
        x: number;
        y: number;
        z: number;
        Vf: number;
        VfLiters: number;
        finalFatPercent: number;
        finalSnfPercent: number;
        finalClr: number;
        ingName: string;
        targetFat: number;
        targetClr: number;
        targetSnf: number;
        fatError: number;
        clrError: number;
        snfError: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculateSnf = useCallback((clr: number, fatPercent: number) => {
        const formula = snfFormulas[snfFormula as keyof typeof snfFormulas] || snfFormulas.isi;
        return formula.calc(clr, fatPercent);
    }, [snfFormula]);

    const calculate = useCallback(() => {
        setResults(null);
        setError(null);
        setCalculationSteps([]);
        
        let V0 = parseFloat(inputs.V0) || 0;
        const V0Input = V0;
        const unitInput = milkUnit;
        
        if (milkUnit === 'liters') {
            V0 = V0 * componentProps.milkDensity;
        }

        const Fi = parseFloat(inputs.Fi) / 100;
        const CLRi = parseFloat(inputs.CLRi) || 0;
        const Ft = parseFloat(inputs.Ft) / 100;
        const CLRt = parseFloat(inputs.CLRt) || 0;
        const smpSnf = parseFloat(inputs.smpSnf) / 100;
        const smpFat = parseFloat(inputs.smpFat) / 100;

        if ([V0, Fi, CLRi, Ft, CLRt, smpSnf, smpFat].some(isNaN) || V0 <= 0) {
            setError("⚠️ Please fill all fields with valid positive numbers.");
            return;
        }

        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Initial Milk:`);
        steps.push(`     Volume (V₀) = ${V0Input} ${unitInput} → ${V0.toFixed(6)} kg`);
        steps.push(`     Fat (Fᵢ) = ${inputs.Fi}% → ${Fi.toFixed(8)} (decimal)`);
        steps.push(`     CLR (CLRᵢ) = ${CLRi}`);
        
        const SNFi = calculateSnf(CLRi, parseFloat(inputs.Fi)) / 100;
        steps.push(`     SNF (SNFᵢ) = ${(SNFi * 100).toFixed(8)}%`);
        
        steps.push(`\n   Target Milk:`);
        steps.push(`     Target Fat (Fₜ) = ${inputs.Ft}% → ${Ft.toFixed(8)} (decimal)`);
        steps.push(`     Target CLR (CLRₜ) = ${CLRt}`);
        
        const SNFt = calculateSnf(CLRt, parseFloat(inputs.Ft)) / 100;
        steps.push(`     Target SNF (SNFₜ) = ${(SNFt * 100).toFixed(8)}%`);
        
        steps.push(`\n   SMP Properties:`);
        steps.push(`     Fat = ${inputs.smpFat}% → ${smpFat.toFixed(8)} (decimal)`);
        steps.push(`     SNF = ${inputs.smpSnf}% → ${smpSnf.toFixed(8)} (decimal)`);

        // ============ STEP 2: DETERMINE MAIN INGREDIENT ============
        let mainIng: { F: number, SNF: number, name: string, CLR: number, fatInput: string };
        
        steps.push(`\n\n🧪 **═══════════ STEP 2: MAIN CORRECTION INGREDIENT ═══════════**`);
        
        switch(correctionType) {
            case 'cream':
                const Fc = parseFloat(inputs.Fc);
                const CLRc = parseFloat(inputs.CLRc);
                const SNFc = calculateSnf(CLRc, Fc) / 100;
                mainIng = { 
                    F: Fc/100, 
                    SNF: SNFc,
                    CLR: CLRc,
                    name: "Cream",
                    fatInput: inputs.Fc
                };
                steps.push(`   Selected: **CREAM**`);
                steps.push(`     Fat (F꜀) = ${inputs.Fc}% → ${(Fc/100).toFixed(8)} (decimal)`);
                steps.push(`     CLR (CLR꜀) = ${CLRc}`);
                steps.push(`     SNF (SNF꜀) = ${(SNFc * 100).toFixed(8)}%`);
                break;
            case 'rich_milk':
                const Fr = parseFloat(inputs.Fr);
                const CLRr = parseFloat(inputs.CLRr);
                const SNFr = calculateSnf(CLRr, Fr) / 100;
                mainIng = { 
                    F: Fr/100, 
                    SNF: SNFr,
                    CLR: CLRr,
                    name: "Rich Milk",
                    fatInput: inputs.Fr
                };
                steps.push(`   Selected: **RICH MILK**`);
                steps.push(`     Fat (Fᵣ) = ${inputs.Fr}% → ${(Fr/100).toFixed(8)} (decimal)`);
                steps.push(`     CLR (CLRᵣ) = ${CLRr}`);
                steps.push(`     SNF (SNFᵣ) = ${(SNFr * 100).toFixed(8)}%`);
                break;
            case 'skim_milk':
                const Fs = parseFloat(inputs.Fs);
                const CLRs = parseFloat(inputs.CLRs);
                const SNFs = calculateSnf(CLRs, Fs) / 100;
                mainIng = { 
                    F: Fs/100, 
                    SNF: SNFs,
                    CLR: CLRs,
                    name: "Skimmed Milk",
                    fatInput: inputs.Fs
                };
                steps.push(`   Selected: **SKIMMED MILK**`);
                steps.push(`     Fat (Fₛ) = ${inputs.Fs}% → ${(Fs/100).toFixed(8)} (decimal)`);
                steps.push(`     CLR (CLRₛ) = ${CLRs}`);
                steps.push(`     SNF (SNFₛ) = ${(SNFs * 100).toFixed(8)}%`);
                break;
            default:
                setError("❌ Invalid correction ingredient selected.");
                return;
        }
        
        const water = { F: 0, SNF: 0, name: "Water", CLR: 0 };
        const smp = { F: smpFat, SNF: smpSnf, name: "SMP", CLR: 380 }; // Approximate CLR for SMP

        // ============ STEP 3: CALCULATE REQUIRED CHANGES ============
        steps.push(`\n\n🔢 **═══════════ STEP 3: CALCULATE REQUIRED CHANGES ═══════════**`);
        
        const deltaF = V0 * (Ft - Fi);
        const deltaSNF = V0 * (SNFt - SNFi);
        
        steps.push(`\n   Required Fat Change (ΔF):`);
        steps.push(`     ΔF = V₀ × (Fₜ - Fᵢ)`);
        steps.push(`        = ${V0.toFixed(6)} × (${Ft.toFixed(8)} - ${Fi.toFixed(8)})`);
        steps.push(`        = ${V0.toFixed(6)} × ${(Ft - Fi).toFixed(8)}`);
        steps.push(`        = ${deltaF.toFixed(8)} kg`);
        
        steps.push(`\n   Required SNF Change (ΔSNF):`);
        steps.push(`     ΔSNF = V₀ × (SNFₜ - SNFᵢ)`);
        steps.push(`          = ${V0.toFixed(6)} × (${SNFt.toFixed(8)} - ${SNFi.toFixed(8)})`);
        steps.push(`          = ${V0.toFixed(6)} × ${(SNFt - SNFi).toFixed(8)}`);
        steps.push(`          = ${deltaSNF.toFixed(8)} kg`);

        const C = [deltaF, deltaSNF];

        // ============ STEP 4: SOLVE LINEAR SYSTEM ============
        steps.push(`\n\n🧮 **═══════════ STEP 4: SOLVE LINEAR EQUATIONS ═══════════**`);
        steps.push(`   We need to solve: X × (ingredient) + Y × (water/SMP) = required changes`);

        // System 1: Main Ingredient (X) and Water (Y)
        steps.push(`\n   **System 1: ${mainIng.name} + Water**`);
        steps.push(`   Linear Equations:`);
        steps.push(`     X × (F_ing - Fₜ) + Y × (F_water - Fₜ) = ΔF`);
        steps.push(`     X × (SNF_ing - SNFₜ) + Y × (SNF_water - SNFₜ) = ΔSNF`);
        
        const det1 = (mainIng.F - Ft) * (water.SNF - SNFt) - (water.F - Ft) * (mainIng.SNF - SNFt);
        steps.push(`\n   Determinant (det₁):`);
        steps.push(`     det₁ = (${mainIng.F.toFixed(8)} - ${Ft.toFixed(8)}) × (${water.SNF.toFixed(8)} - ${SNFt.toFixed(8)}) - (${water.F.toFixed(8)} - ${Ft.toFixed(8)}) × (${mainIng.SNF.toFixed(8)} - ${SNFt.toFixed(8)})`);
        steps.push(`          = ${(mainIng.F - Ft).toFixed(8)} × ${(water.SNF - SNFt).toFixed(8)} - ${(water.F - Ft).toFixed(8)} × ${(mainIng.SNF - SNFt).toFixed(8)}`);
        steps.push(`          = ${det1.toFixed(10)}`);
        
        let X1 = Infinity, Y1 = Infinity;
        if (Math.abs(det1) > 1e-9) {
            X1 = (C[0] * (water.SNF - SNFt) - (water.F - Ft) * C[1]) / det1;
            Y1 = ((mainIng.F - Ft) * C[1] - C[0] * (mainIng.SNF - SNFt)) / det1;
            
            steps.push(`\n   Solution (Cramer's Rule):`);
            steps.push(`     X₁ = ${X1.toFixed(8)} kg`);
            steps.push(`     Y₁ (Water) = ${Y1.toFixed(8)} kg`);
            steps.push(`     Valid: ${X1 >= -1e-6 && Y1 >= -1e-6 ? '✅ YES' : '❌ NO (negative values)'}`);
        } else {
            steps.push(`     ⚠️ System 1 has no unique solution (determinant ≈ 0)`);
        }

        // System 2: Main Ingredient (X) and SMP (Z)
        steps.push(`\n   **System 2: ${mainIng.name} + SMP**`);
        steps.push(`   Linear Equations:`);
        steps.push(`     X × (F_ing - Fₜ) + Z × (F_smp - Fₜ) = ΔF`);
        steps.push(`     X × (SNF_ing - SNFₜ) + Z × (SNF_smp - SNFₜ) = ΔSNF`);
        
        const det2 = (mainIng.F - Ft) * (smp.SNF - SNFt) - (smp.F - Ft) * (mainIng.SNF - SNFt);
        steps.push(`\n   Determinant (det₂):`);
        steps.push(`     det₂ = (${mainIng.F.toFixed(8)} - ${Ft.toFixed(8)}) × (${smp.SNF.toFixed(8)} - ${SNFt.toFixed(8)}) - (${smp.F.toFixed(8)} - ${Ft.toFixed(8)}) × (${mainIng.SNF.toFixed(8)} - ${SNFt.toFixed(8)})`);
        steps.push(`          = ${det2.toFixed(10)}`);
        
        let X2 = Infinity, Z2 = Infinity;
        if (Math.abs(det2) > 1e-9) {
            X2 = (C[0] * (smp.SNF - SNFt) - (smp.F - Ft) * C[1]) / det2;
            Z2 = ((mainIng.F - Ft) * C[1] - C[0] * (mainIng.SNF - SNFt)) / det2;
            
            steps.push(`\n   Solution (Cramer's Rule):`);
            steps.push(`     X₂ = ${X2.toFixed(8)} kg`);
            steps.push(`     Z₂ (SMP) = ${Z2.toFixed(8)} kg`);
            steps.push(`     Valid: ${X2 >= -1e-6 && Z2 >= -1e-6 ? '✅ YES' : '❌ NO (negative values)'}`);
        } else {
            steps.push(`     ⚠️ System 2 has no unique solution (determinant ≈ 0)`);
        }

        // ============ STEP 5: SELECT BEST SOLUTION ============
        steps.push(`\n\n⚙️ **═══════════ STEP 5: SELECT BEST SOLUTION ═══════════**`);
        
        let X = 0, Y = 0, Z = 0;
        let solutionType = '';

        if (X1 >= -1e-6 && Y1 >= -1e-6) {
            X = Math.max(0, X1);
            Y = Math.max(0, Y1);
            solutionType = 'water';
            steps.push(`   ✅ Selected: ${mainIng.name} + Water`);
            steps.push(`   This solution uses water for dilution`);
        } else if (X2 >= -1e-6 && Z2 >= -1e-6) {
            X = Math.max(0, X2);
            Z = Math.max(0, Z2);
            solutionType = 'smp';
            steps.push(`   ✅ Selected: ${mainIng.name} + SMP`);
            steps.push(`   This solution uses SMP for SNF enrichment`);
        } else {
            setError("❌ Cannot find valid solution with two ingredients. The target may require a different combination or be impossible with given components.");
            return;
        }

        steps.push(`\n   Final Quantities to Add:`);
        steps.push(`     ${mainIng.name}: ${X.toFixed(8)} kg`);
        if (Y > 0.001) steps.push(`     Water: ${Y.toFixed(8)} kg`);
        if (Z > 0.001) steps.push(`     SMP: ${Z.toFixed(8)} kg`);

        // ============ STEP 6: CALCULATE FINAL PROPERTIES ============
        steps.push(`\n\n🔬 **═══════════ STEP 6: FINAL BATCH PROPERTIES ═══════════**`);
        
        const Vf = V0 + X + Y + Z;
        const VfLiters = Vf / componentProps.milkDensity;
        
        steps.push(`\n   Final Volume:`);
        steps.push(`     Vf = V₀ + X + Y + Z`);
        steps.push(`        = ${V0.toFixed(6)} + ${X.toFixed(8)} + ${Y.toFixed(8)} + ${Z.toFixed(8)}`);
        steps.push(`        = ${Vf.toFixed(8)} kg`);
        steps.push(`        = ${VfLiters.toFixed(8)} liters`);
        
        const finalFatMass = (Fi * V0) + (mainIng.F * X) + (water.F * Y) + (smp.F * Z);
        const finalFatPercent = (finalFatMass / Vf) * 100;
        
        steps.push(`\n   Final Fat Calculation:`);
        steps.push(`     Fat Mass = (Fᵢ × V₀) + (F_ing × X) + (F_water × Y) + (F_smp × Z)`);
        steps.push(`              = (${Fi.toFixed(8)} × ${V0.toFixed(6)}) + (${mainIng.F.toFixed(8)} × ${X.toFixed(8)}) + (${water.F} × ${Y.toFixed(8)}) + (${smp.F.toFixed(8)} × ${Z.toFixed(8)})`);
        steps.push(`              = ${(Fi * V0).toFixed(8)} + ${(mainIng.F * X).toFixed(8)} + ${(water.F * Y).toFixed(8)} + ${(smp.F * Z).toFixed(8)}`);
        steps.push(`              = ${finalFatMass.toFixed(8)} kg`);
        steps.push(`     Final Fat% = (Fat Mass / Vf) × 100`);
        steps.push(`                = (${finalFatMass.toFixed(8)} / ${Vf.toFixed(8)}) × 100`);
        steps.push(`                = ${finalFatPercent.toFixed(8)}%`);
        
        const finalSnfMass = (SNFi * V0) + (mainIng.SNF * X) + (water.SNF * Y) + (smp.SNF * Z);
        const finalSnfPercent = (finalSnfMass / Vf) * 100;
        
        steps.push(`\n   Final SNF Calculation:`);
        steps.push(`     SNF Mass = (SNFᵢ × V₀) + (SNF_ing × X) + (SNF_water × Y) + (SNF_smp × Z)`);
        steps.push(`              = (${SNFi.toFixed(8)} × ${V0.toFixed(6)}) + (${mainIng.SNF.toFixed(8)} × ${X.toFixed(8)}) + (${water.SNF} × ${Y.toFixed(8)}) + (${smp.SNF.toFixed(8)} × ${Z.toFixed(8)})`);
        steps.push(`              = ${(SNFi * V0).toFixed(8)} + ${(mainIng.SNF * X).toFixed(8)} + ${(water.SNF * Y).toFixed(8)} + ${(smp.SNF * Z).toFixed(8)}`);
        steps.push(`              = ${finalSnfMass.toFixed(8)} kg`);
        steps.push(`     Final SNF% = (SNF Mass / Vf) × 100`);
        steps.push(`                = (${finalSnfMass.toFixed(8)} / ${Vf.toFixed(8)}) × 100`);
        steps.push(`                = ${finalSnfPercent.toFixed(8)}%`);
        
        // Calculate CLR from SNF and Fat (inverse formula)
        const formula = snfFormulas[snfFormula as keyof typeof snfFormulas] || snfFormulas.isi;
        const finalClr = formula.inverse ? formula.inverse(finalSnfPercent, finalFatPercent) : 
                        4 * (finalSnfPercent/100 - 0.25 * finalFatPercent/100 - 0.0044);
        
        steps.push(`\n   Final CLR Calculation (Inverse of SNF formula):`);
        steps.push(`     Final CLR = ${finalClr.toFixed(8)}`);

        // ============ STEP 7: ACCURACY CHECK ============
        steps.push(`\n\n📊 **═══════════ STEP 7: ACCURACY CHECK ═══════════**`);
        
        const fatError = Math.abs(finalFatPercent - parseFloat(inputs.Ft));
        const clrError = Math.abs(finalClr - CLRt);
        const snfError = Math.abs(finalSnfPercent - (SNFt * 100));
        
        steps.push(`\n   Target vs Achieved:`);
        steps.push(`     Fat Error = |${finalFatPercent.toFixed(8)} - ${inputs.Ft}| = ${fatError.toFixed(8)}%`);
        steps.push(`     CLR Error = |${finalClr.toFixed(8)} - ${CLRt}| = ${clrError.toFixed(8)}`);
        steps.push(`     SNF Error = |${finalSnfPercent.toFixed(8)} - ${(SNFt * 100).toFixed(8)}| = ${snfError.toFixed(8)}%`);
        
        steps.push(`\n   Accuracy Status:`);
        steps.push(`     Fat: ${fatError <= 0.05 ? '✅ Excellent' : fatError <= 0.1 ? '⚠️ Good' : '❌ Needs Review'}`);
        steps.push(`     CLR: ${clrError <= 0.15 ? '✅ Excellent' : clrError <= 0.3 ? '⚠️ Good' : '❌ Needs Review'}`);
        steps.push(`     SNF: ${snfError <= 0.05 ? '✅ Excellent' : snfError <= 0.1 ? '⚠️ Good' : '❌ Needs Review'}`);

        setCalculationSteps(steps);
        setResults({
            x: X,
            y: Y,
            z: Z,
            Vf,
            VfLiters,
            finalFatPercent,
            finalSnfPercent,
            finalClr,
            ingName: mainIng.name,
            targetFat: parseFloat(inputs.Ft),
            targetClr: CLRt,
            targetSnf: SNFt * 100,
            fatError,
            clrError,
            snfError
        });

    }, [inputs, correctionType, milkUnit, calculateSnf, snfFormula]);

    return (
        <CalculatorCard 
            title="Automated Milk Standardization" 
            description="Standardize milk using one main ingredient with automatic Water or SMP fine-tuning for precise results"
        >
            {/* SNF Formula Selection */}
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-5 rounded-xl border-2 border-indigo-300 shadow-md mb-6">
                <Label className="text-base font-bold mb-3 block flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    SNF Calculation Formula
                </Label>
                <Select value={snfFormula} onValueChange={setSnfFormula}>
                    <SelectTrigger className="bg-white border-2 border-indigo-200 h-12 text-base font-medium">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key} className="text-base py-3">
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800">{name}</span>
                                    <span className="text-xs text-muted-foreground mt-1">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Initial Milk */}
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h4 className="font-bold text-xl mb-5 flex items-center gap-2 text-blue-800">
                        <Droplets className="w-6 h-6" />
                        Initial Milk
                    </h4>
                    <div className="space-y-4">
                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Volume (V₀)</Label>
                            <div className="flex gap-2">
                                <Input 
                                    type="number" 
                                    value={inputs.V0} 
                                    onChange={e => handleInputChange('V0', e.target.value)} 
                                    className="flex-1 h-11 text-base font-medium border-2 border-blue-300"
                                    step="0.001"
                                />
                                <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as 'liters' | 'kg')}>
                                    <SelectTrigger className="w-[110px] h-11 border-2 border-blue-300 font-semibold">
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                        <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <MemoizedInputField label="Fat (Fᵢ) %" value={inputs.Fi} name="Fi" setter={handleInputChange} />
                        <MemoizedInputField label="CLR (CLRᵢ)" value={inputs.CLRi} name="CLRi" setter={handleInputChange} />
                    </div>
                </div>

                {/* Target Milk */}
                <div className="bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h4 className="font-bold text-xl mb-5 flex items-center gap-2 text-green-800">
                        <Target className="w-6 h-6" />
                        Target Milk
                    </h4>
                    <div className="space-y-4">
                        <MemoizedInputField label="Target Fat (Fₜ) %" value={inputs.Ft} name="Ft" setter={handleInputChange} />
                        <MemoizedInputField label="Target CLR (CLRₜ)" value={inputs.CLRt} name="CLRt" setter={handleInputChange} />
                    </div>
                </div>
            </div>
            
            {/* Correction Ingredient */}
            <div className="bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 p-6 rounded-xl border-2 border-yellow-400 shadow-lg mb-6">
                <h4 className="font-bold text-xl mb-5 flex items-center gap-2 text-orange-800">
                    <Beaker className="w-6 h-6" />
                    Main Correction Ingredient
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Select Ingredient</Label>
                        <Select value={correctionType} onValueChange={(v) => setCorrectionType(v)}>
                            <SelectTrigger className="h-11 border-2 border-yellow-300 font-semibold text-base">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cream" className="text-base font-medium">Cream</SelectItem>
                                <SelectItem value="rich_milk" className="text-base font-medium">Rich Milk</SelectItem>
                                <SelectItem value="skim_milk" className="text-base font-medium">Skimmed Milk</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {correctionType === 'cream' && (<>
                        <MemoizedInputField label="Cream Fat (F꜀) %" value={inputs.Fc} name="Fc" setter={handleInputChange} />
                        <MemoizedInputField label="Cream CLR (CLR꜀)" value={inputs.CLRc} name="CLRc" setter={handleInputChange} />
                    </>)}
                    {correctionType === 'rich_milk' && (<>
                        <MemoizedInputField label="Rich Milk Fat (Fᵣ) %" value={inputs.Fr} name="Fr" setter={handleInputChange} />
                        <MemoizedInputField label="Rich Milk CLR (CLRᵣ)" value={inputs.CLRr} name="CLRr" setter={handleInputChange} />
                    </>)}
                    {correctionType === 'skim_milk' && (<>
                        <MemoizedInputField label="Skim Milk Fat (Fₛ) %" value={inputs.Fs} name="Fs" setter={handleInputChange} />
                        <MemoizedInputField label="Skim Milk CLR (CLRₛ)" value={inputs.CLRs} name="CLRs" setter={handleInputChange} />
                    </>)}
                </div>
                <Alert className="mt-4 bg-blue-100 border-2 border-blue-300">
                    <Info className="h-5 w-5 text-blue-700" />
                    <AlertDescription className="text-sm font-semibold text-blue-800">
                        <strong>Auto Fine-Tuning:</strong> Water (0% Fat, 0 CLR) and SMP (0.5% Fat, 96% SNF) will be used automatically for precise standardization.
                    </AlertDescription>
                </Alert>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Standardization Plan
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {results && (
                <div className="mt-6 space-y-6">
                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Standardization Plan Ready!
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* Ingredients to Add */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300">
                                    <h5 className="font-bold text-lg text-green-800 mb-3 flex items-center gap-2">
                                        <Plus className="w-5 h-5" />
                                        Ingredients to Add
                                    </h5>
                                    <div className="space-y-3">
                                        {results.x > 0.001 && (
                                            <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                                                <span className="font-semibold text-amber-900">{results.ingName}</span>
                                                <div className="text-right">
                                                    <p className="font-bold text-xl text-amber-700">{results.x.toFixed(4)} kg</p>
                                                    <p className="text-xs text-amber-600">{(results.x / componentProps.milkDensity).toFixed(4)} liters</p>
                                                </div>
                                            </div>
                                        )}
                                        {results.y > 0.001 && (
                                            <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                                                <span className="font-semibold text-cyan-900">Water</span>
                                                <div className="text-right">
                                                    <p className="font-bold text-xl text-cyan-700">{results.y.toFixed(4)} kg</p>
                                                    <p className="text-xs text-cyan-600">= {results.y.toFixed(4)} liters</p>
                                                </div>
                                            </div>
                                        )}
                                        {results.z > 0.001 && (
                                            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                                                <span className="font-semibold text-purple-900">SMP (Skim Milk Powder)</span>
                                                <div className="text-right">
                                                    <p className="font-bold text-xl text-purple-700">{results.z.toFixed(4)} kg</p>
                                                    <p className="text-xs text-purple-600">Powder form</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Final Batch Summary */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-teal-300">
                                    <h5 className="font-bold text-lg text-teal-800 mb-4 flex items-center gap-2">
                                        <Scale className="w-5 h-5" />
                                        Final Batch Summary
                                    </h5>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <p className="text-xs text-muted-foreground font-semibold mb-1">Final Volume</p>
                                            <p className="font-bold text-xl text-teal-700">{results.Vf.toFixed(4)} kg</p>
                                            <p className="text-xs text-teal-600">{results.VfLiters.toFixed(4)} L</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-muted-foreground font-semibold mb-1">Final Fat</p>
                                            <p className="font-bold text-xl text-purple-700">{results.finalFatPercent.toFixed(4)}%</p>
                                            <Badge className={cn(
                                                results.fatError <= 0.05 ? "bg-green-500" : 
                                                results.fatError <= 0.1 ? "bg-yellow-500" : "bg-red-500"
                                            )}>
                                                Target: {results.targetFat}%
                                            </Badge>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-muted-foreground font-semibold mb-1">Final CLR</p>
                                            <p className="font-bold text-xl text-pink-700">{results.finalClr.toFixed(4)}</p>
                                            <Badge className={cn(
                                                results.clrError <= 0.15 ? "bg-green-500" : 
                                                results.clrError <= 0.3 ? "bg-yellow-500" : "bg-red-500"
                                            )}>
                                                Target: {results.targetClr}
                                            </Badge>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-muted-foreground font-semibold mb-1">Final SNF</p>
                                            <p className="font-bold text-xl text-indigo-700">{results.finalSnfPercent.toFixed(4)}%</p>
                                            <Badge className={cn(
                                                results.snfError <= 0.05 ? "bg-green-500" : 
                                                results.snfError <= 0.1 ? "bg-yellow-500" : "bg-red-500"
                                            )}>
                                                Target: {results.targetSnf.toFixed(2)}%
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Accuracy Status */}
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-2 border-blue-300">
                                    <h5 className="font-bold text-base text-blue-900 mb-3 flex items-center gap-2">
                                        <Target className="w-5 h-5" />
                                        Accuracy Status
                                    </h5>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="text-center">
                                            <p className="text-xs font-semibold mb-1">Fat Error</p>
                                            <p className="text-lg font-bold">{results.fatError.toFixed(6)}%</p>
                                            <p className="text-xs">{results.fatError <= 0.05 ? '✅ Excellent' : results.fatError <= 0.1 ? '⚠️ Good' : '❌ Review'}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-semibold mb-1">CLR Error</p>
                                            <p className="text-lg font-bold">{results.clrError.toFixed(6)}</p>
                                            <p className="text-xs">{results.clrError <= 0.15 ? '✅ Excellent' : results.clrError <= 0.3 ? '⚠️ Good' : '❌ Review'}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-semibold mb-1">SNF Error</p>
                                            <p className="text-lg font-bold">{results.snfError.toFixed(6)}%</p>
                                            <p className="text-xs">{results.snfError <= 0.05 ? '✅ Excellent' : results.snfError <= 0.1 ? '⚠️ Good' : '❌ Review'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete Calculation Process (Mobile Calculator Verification)
                        </h4>
                        <ScrollArea className="h-[500px] pr-4">
                            <div className="space-y-1 text-sm font-mono leading-relaxed">
                                {calculationSteps.map((step, idx) => (
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
                                            step.includes('🧮') && 'text-indigo-700 font-bold text-lg',
                                            step.includes('🔬') && 'text-pink-700 font-bold text-lg',
                                            step.includes('🧪') && 'text-orange-700 font-bold text-lg',
                                            step.includes('⚙️') && 'text-teal-700 font-bold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('❌') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ All calculations shown with complete mathematical steps - verify each calculation with your mobile calculator!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}

function FatBlendingCalc() {
    const [highFat, setHighFat] = useState('40'); // e.g., Cream
    const [lowFat, setLowFat] = useState('3.5'); // e.g., Milk
    const [targetFat, setTargetFat] = useState('20');
    const [batchSize, setBatchSize] = useState('100');
    const [batchUnit, setBatchUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<{
        qtyHigh: number;
        qtyLow: number;
        qtyHighLiters: number;
        qtyLowLiters: number;
        totalQtyKg: number;
        partsHigh: number;
        partsLow: number;
        totalParts: number;
        highFatValue: number;
        lowFatValue: number;
        targetFatValue: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);

        const h = parseFloat(highFat);
        const l = parseFloat(lowFat);
        const t = parseFloat(targetFat);
        const qInput = parseFloat(batchSize);
        
        const q = batchUnit === 'liters' ? qInput * componentProps.milkDensity : qInput;

        if (isNaN(h) || isNaN(l) || isNaN(t) || isNaN(q)) {
            setError("⚠️ Please fill all fields with valid numbers.");
            return;
        }

        if (q <= 0) {
            setError("⚠️ Batch size must be a positive number.");
            return;
        }

        if (t > h || t < l) {
            setError(`❌ Target fat (${t}%) must be between low fat (${l}%) and high fat (${h}%).`);
            return;
        }

        if (Math.abs(h - l) < 0.001) {
            setError("❌ High fat and low fat sources must have different fat percentages.");
            return;
        }

        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   High Fat Source: ${h}%`);
        steps.push(`   Low Fat Source: ${l}%`);
        steps.push(`   Target Fat: ${t}%`);
        steps.push(`   Batch Size: ${qInput} ${batchUnit} → ${q.toFixed(6)} kg`);

        // ============ STEP 2: PEARSON SQUARE METHOD ============
        steps.push(`\n\n🔢 **═══════════ STEP 2: PEARSON SQUARE METHOD ═══════════**`);
        steps.push(`   The Pearson Square is a visual method for calculating proportions.`);
        steps.push(`\n   **Pearson Square Diagram:**`);
        steps.push(`   `);
        steps.push(`        High Fat (${h}%)          Target - Low`);
        steps.push(`                    ╲           ${t} - ${l} = ${(t - l).toFixed(4)}`);
        steps.push(`                     ╲          Parts of High Fat`);
        steps.push(`                      ╲`);
        steps.push(`            Target → ${t}%`);
        steps.push(`                      ╱`);
        steps.push(`                     ╱          High - Target`);
        steps.push(`                    ╱           ${h} - ${t} = ${(h - t).toFixed(4)}`);
        steps.push(`        Low Fat (${l}%)           Parts of Low Fat`);

        // ============ STEP 3: CALCULATE PARTS ============
        steps.push(`\n\n📐 **═══════════ STEP 3: CALCULATE PARTS ═══════════**`);
        
        const partsHigh = t - l;
        const partsLow = h - t;
        const totalParts = partsHigh + partsLow;

        steps.push(`\n   **Parts of High Fat Source:**`);
        steps.push(`     Parts High = Target - Low Fat`);
        steps.push(`                = ${t} - ${l}`);
        steps.push(`                = ${partsHigh.toFixed(8)}`);

        steps.push(`\n   **Parts of Low Fat Source:**`);
        steps.push(`     Parts Low = High Fat - Target`);
        steps.push(`               = ${h} - ${t}`);
        steps.push(`               = ${partsLow.toFixed(8)}`);

        steps.push(`\n   **Total Parts:**`);
        steps.push(`     Total Parts = Parts High + Parts Low`);
        steps.push(`                 = ${partsHigh.toFixed(8)} + ${partsLow.toFixed(8)}`);
        steps.push(`                 = ${totalParts.toFixed(8)}`);

        // ============ STEP 4: CALCULATE QUANTITIES ============
        steps.push(`\n\n⚖️ **═══════════ STEP 4: CALCULATE QUANTITIES ═══════════**`);

        const qtyHigh = (q * partsHigh) / totalParts;
        const qtyLow = (q * partsLow) / totalParts;

        steps.push(`\n   **Quantity of High Fat Source:**`);
        steps.push(`     Qty High = (Total Batch × Parts High) / Total Parts`);
        steps.push(`              = (${q.toFixed(6)} × ${partsHigh.toFixed(8)}) / ${totalParts.toFixed(8)}`);
        steps.push(`              = ${(q * partsHigh).toFixed(8)} / ${totalParts.toFixed(8)}`);
        steps.push(`              = ${qtyHigh.toFixed(8)} kg`);

        steps.push(`\n   **Quantity of Low Fat Source:**`);
        steps.push(`     Qty Low = (Total Batch × Parts Low) / Total Parts`);
        steps.push(`             = (${q.toFixed(6)} × ${partsLow.toFixed(8)}) / ${totalParts.toFixed(8)}`);
        steps.push(`             = ${(q * partsLow).toFixed(8)} / ${totalParts.toFixed(8)}`);
        steps.push(`             = ${qtyLow.toFixed(8)} kg`);

        // ============ STEP 5: CONVERT TO LITERS ============
        steps.push(`\n\n🥛 **═══════════ STEP 5: CONVERT TO LITERS ═══════════**`);
        
        const qtyHighLiters = qtyHigh / componentProps.milkDensity;
        const qtyLowLiters = qtyLow / componentProps.milkDensity;

        steps.push(`\n   Milk Density = ${componentProps.milkDensity} kg/liter`);
        steps.push(`\n   High Fat Source in Liters:`);
        steps.push(`     = ${qtyHigh.toFixed(8)} / ${componentProps.milkDensity}`);
        steps.push(`     = ${qtyHighLiters.toFixed(8)} liters`);

        steps.push(`\n   Low Fat Source in Liters:`);
        steps.push(`     = ${qtyLow.toFixed(8)} / ${componentProps.milkDensity}`);
        steps.push(`     = ${qtyLowLiters.toFixed(8)} liters`);

        // ============ STEP 6: VERIFICATION ============
        steps.push(`\n\n✅ **═══════════ STEP 6: VERIFICATION ═══════════**`);
        
        steps.push(`\n   **Check Total Quantity:**`);
        steps.push(`     Qty High + Qty Low = ${qtyHigh.toFixed(8)} + ${qtyLow.toFixed(8)}`);
        steps.push(`                        = ${(qtyHigh + qtyLow).toFixed(8)} kg`);
        steps.push(`     Expected: ${q.toFixed(6)} kg`);
        steps.push(`     Match: ${Math.abs((qtyHigh + qtyLow) - q) < 0.0001 ? '✓ Perfect' : '⚠️ Check calculations'}`);

        steps.push(`\n   **Check Final Fat Percentage:**`);
        steps.push(`     Final Fat = (Qty High × High Fat + Qty Low × Low Fat) / Total Qty`);
        steps.push(`               = (${qtyHigh.toFixed(8)} × ${h} + ${qtyLow.toFixed(8)} × ${l}) / ${q.toFixed(6)}`);
        steps.push(`               = (${(qtyHigh * h).toFixed(8)} + ${(qtyLow * l).toFixed(8)}) / ${q.toFixed(6)}`);
        steps.push(`               = ${(qtyHigh * h + qtyLow * l).toFixed(8)} / ${q.toFixed(6)}`);
        const finalFatCheck = (qtyHigh * h + qtyLow * l) / q;
        steps.push(`               = ${finalFatCheck.toFixed(8)}%`);
        steps.push(`     Expected: ${t}%`);
        steps.push(`     Match: ${Math.abs(finalFatCheck - t) < 0.0001 ? '✓ Perfect' : '⚠️ Check calculations'}`);

        // ============ STEP 7: RATIO ============
        steps.push(`\n\n📊 **═══════════ STEP 7: BLENDING RATIO ═══════════**`);
        
        const ratioHigh = (qtyHigh / q) * 100;
        const ratioLow = (qtyLow / q) * 100;

        steps.push(`\n   High Fat Source Percentage:`);
        steps.push(`     = (${qtyHigh.toFixed(8)} / ${q.toFixed(6)}) × 100`);
        steps.push(`     = ${ratioHigh.toFixed(4)}%`);

        steps.push(`\n   Low Fat Source Percentage:`);
        steps.push(`     = (${qtyLow.toFixed(8)} / ${q.toFixed(6)}) × 100`);
        steps.push(`     = ${ratioLow.toFixed(4)}%`);

        // ============ STEP 8: SUMMARY ============
        steps.push(`\n\n✨ **═══════════ STEP 8: FINAL SUMMARY ═══════════**`);
        steps.push(`\n   To produce ${q.toFixed(6)} kg (${(q / componentProps.milkDensity).toFixed(6)} liters)`);
        steps.push(`   of ${t}% fat product, blend:`);
        steps.push(`\n   ✓ ${qtyHigh.toFixed(6)} kg (${qtyHighLiters.toFixed(6)} L) of ${h}% fat source`);
        steps.push(`   ✓ ${qtyLow.toFixed(6)} kg (${qtyLowLiters.toFixed(6)} L) of ${l}% fat source`);
        steps.push(`\n   Ratio: ${ratioHigh.toFixed(2)}% : ${ratioLow.toFixed(2)}%`);

        setCalculationSteps(steps);
        setResult({
            qtyHigh,
            qtyLow,
            qtyHighLiters,
            qtyLowLiters,
            totalQtyKg: q,
            partsHigh,
            partsLow,
            totalParts,
            highFatValue: h,
            lowFatValue: l,
            targetFatValue: t
        });

    }, [highFat, lowFat, targetFat, batchSize, batchUnit]);
    
    return (
        <CalculatorCard 
            title="Fat Blending (Pearson Square Method)" 
            description="Calculate precise proportions of two fat sources to achieve target fat percentage using the Pearson Square technique"
        >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* High Fat Source */}
                <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-6 rounded-xl border-2 border-amber-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-800">
                        <TrendingUp className="w-5 h-5" />
                        High Fat Source
                    </h3>
                    <MemoizedInputField 
                        label="High Fat %" 
                        value={highFat} 
                        name="highFat" 
                        setter={(_, val) => setHighFat(val)} 
                    />
                    <p className="text-xs text-amber-700 mt-2 font-semibold">e.g., Cream (35-40%), Butter Oil (99%)</p>
                </div>

                {/* Low Fat Source */}
                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                        <TrendingDown className="w-5 h-5" />
                        Low Fat Source
                    </h3>
                    <MemoizedInputField 
                        label="Low Fat %" 
                        value={lowFat} 
                        name="lowFat" 
                        setter={(_, val) => setLowFat(val)} 
                    />
                    <p className="text-xs text-blue-700 mt-2 font-semibold">e.g., Whole Milk (3.5%), Skim Milk (0.1%)</p>
                </div>

                {/* Target Fat */}
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                        <Target className="w-5 h-5" />
                        Target Fat
                    </h3>
                    <MemoizedInputField 
                        label="Target Fat %" 
                        value={targetFat} 
                        name="targetFat" 
                        setter={(_, val) => setTargetFat(val)} 
                    />
                </div>

                {/* Batch Size */}
                <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 p-6 rounded-xl border-2 border-purple-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-purple-800">
                        <Scale className="w-5 h-5" />
                        Batch Size
                    </h3>
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Total Batch Size</Label>
                        <div className="flex gap-2">
                            <Input 
                                type="number" 
                                value={batchSize} 
                                onChange={(e) => setBatchSize(e.target.value)} 
                                className="flex-1 h-11 text-base font-medium border-2 border-purple-300"
                                step="0.001"
                            />
                            <Select value={batchUnit} onValueChange={(v: 'kg' | 'liters') => setBatchUnit(v)}>
                                <SelectTrigger className="w-[110px] h-11 border-2 border-purple-300 font-semibold">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                    <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Blend (Pearson Square)
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Pearson Square Visualization */}
                    <Alert className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border-3 border-indigo-500 shadow-2xl">
                        <Info className="h-8 w-8 text-indigo-700" />
                        <AlertTitle className="text-2xl font-extrabold text-indigo-900 mb-4">
                            📐 Pearson Square Diagram
                        </AlertTitle>
                        <AlertDescription>
                            <div className="bg-white/90 p-8 rounded-xl shadow-md border-2 border-indigo-300">
                                <div className="font-mono text-base space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-amber-700 text-xl">{result.highFatValue}%</span>
                                        <span className="text-gray-400">╲</span>
                                        <span className="font-bold text-green-700 text-xl">{result.partsHigh.toFixed(4)}</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="text-gray-400">╲</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="font-extrabold text-purple-700 text-3xl border-4 border-purple-500 rounded-full px-6 py-3 bg-purple-50">
                                            {result.targetFatValue}%
                                        </span>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="text-gray-400">╱</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-blue-700 text-xl">{result.lowFatValue}%</span>
                                        <span className="text-gray-400">╱</span>
                                        <span className="font-bold text-green-700 text-xl">{result.partsLow.toFixed(4)}</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <p className="text-sm font-semibold text-indigo-900 text-center">
                                        Total Parts: <strong className="text-xl text-indigo-700">{result.totalParts.toFixed(4)}</strong>
                                    </p>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Blending Formula
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* Quantities to Mix */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300">
                                    <h5 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
                                        <Beaker className="w-5 h-5" />
                                        Quantities to Mix
                                    </h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* High Fat Source */}
                                        <div className="bg-amber-50 p-5 rounded-lg border-2 border-amber-300">
                                            <div className="flex items-center gap-2 mb-3">
                                                <TrendingUp className="w-5 h-5 text-amber-700" />
                                                <p className="text-sm font-bold text-amber-900">High Fat Source ({result.highFatValue}%)</p>
                                            </div>
                                            <p className="text-4xl font-extrabold text-amber-700 mb-1">
                                                {result.qtyHigh.toFixed(4)} kg
                                            </p>
                                            <p className="text-lg text-amber-600 font-semibold">
                                                {result.qtyHighLiters.toFixed(4)} liters
                                            </p>
                                            <Badge className="bg-amber-500 mt-3">
                                                {((result.qtyHigh / result.totalQtyKg) * 100).toFixed(2)}% of blend
                                            </Badge>
                                        </div>

                                        {/* Low Fat Source */}
                                        <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
                                            <div className="flex items-center gap-2 mb-3">
                                                <TrendingDown className="w-5 h-5 text-blue-700" />
                                                <p className="text-sm font-bold text-blue-900">Low Fat Source ({result.lowFatValue}%)</p>
                                            </div>
                                            <p className="text-4xl font-extrabold text-blue-700 mb-1">
                                                {result.qtyLow.toFixed(4)} kg
                                            </p>
                                            <p className="text-lg text-blue-600 font-semibold">
                                                {result.qtyLowLiters.toFixed(4)} liters
                                            </p>
                                            <Badge className="bg-blue-500 mt-3">
                                                {((result.qtyLow / result.totalQtyKg) * 100).toFixed(2)}% of blend
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Final Product */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border-2 border-purple-300">
                                    <h5 className="font-bold text-lg text-purple-800 mb-3 flex items-center gap-2">
                                        <Target className="w-5 h-5" />
                                        Final Product
                                    </h5>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground mb-1">Total Quantity</p>
                                            <p className="text-2xl font-bold text-purple-700">{result.totalQtyKg.toFixed(4)} kg</p>
                                            <p className="text-sm text-purple-600">{(result.totalQtyKg / componentProps.milkDensity).toFixed(4)} L</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground mb-1">Fat Percentage</p>
                                            <p className="text-2xl font-bold text-green-700">{result.targetFatValue}%</p>
                                            <Badge className="bg-green-500 mt-1">Target Achieved</Badge>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground mb-1">Blending Ratio</p>
                                            <p className="text-xl font-bold text-indigo-700">
                                                {((result.qtyHigh / result.totalQtyKg) * 100).toFixed(1)} : {((result.qtyLow / result.totalQtyKg) * 100).toFixed(1)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete Pearson Square Calculation (Mobile Calculator Verification)
                        </h4>
                        <ScrollArea className="h-[500px] pr-4">
                            <div className="space-y-1 text-sm font-mono leading-relaxed">
                                {calculationSteps.map((step, idx) => (
                                    <p 
                                        key={idx} 
                                        className={cn(
                                            step.includes('**') && 'font-extrabold mt-3 text-gray-900 text-base',
                                            step.includes('═══') && 'text-purple-700 font-extrabold text-lg',
                                            step.includes('✅') && 'text-green-700 font-bold',
                                            step.includes('⚠️') && 'text-yellow-700 font-bold',
                                            step.includes('❌') && 'text-red-700 font-bold',
                                            step.includes('✓') && 'text-green-700 font-bold',
                                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                                            step.includes('🔢') && 'text-purple-700 font-bold text-lg',
                                            step.includes('📐') && 'text-orange-700 font-bold text-lg',
                                            step.includes('⚖️') && 'text-indigo-700 font-bold text-lg',
                                            step.includes('🥛') && 'text-cyan-700 font-bold text-lg',
                                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                                            (step.includes('╲') || step.includes('╱') || step.includes('→')) && 'text-gray-500 font-bold',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('❌') && !step.includes('═══') && !step.includes('╲') && !step.includes('╱') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ Complete Pearson Square method shown step-by-step - verify with your calculator!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}

function ReconstitutedMilkCalc() {
    const [inputs, setInputs] = useState({ 
        batchQty: '100', 
        targetTS: '12.5', 
        powderTS: '96',
        targetFat: '3.5',
        powderFat: '26'
    });
    const [batchUnit, setBatchUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<{
        powderNeeded: number;
        waterNeeded: number;
        totalQtyKg: number;
        totalQtyLiters: number;
        finalTS: number;
        finalFat: number;
        finalSNF: number;
        reconstitutionRatio: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);
        
        const qtyVal = parseFloat(inputs.batchQty);
        const qty = batchUnit === 'liters' ? qtyVal * componentProps.milkDensity : qtyVal;
        const tTS = parseFloat(inputs.targetTS) / 100;
        const pTS = parseFloat(inputs.powderTS) / 100;
        const tFat = parseFloat(inputs.targetFat);
        const pFat = parseFloat(inputs.powderFat);

        if ([qty, tTS, pTS, tFat, pFat].some(isNaN) || qty <= 0 || tTS <= 0 || pTS <= 0) {
            setError("⚠️ Please fill all fields with valid positive numbers.");
            return;
        }

        if (pTS < tTS) {
            setError("❌ Powder TS% cannot be less than Target TS%. Check your inputs.");
            return;
        }

        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Target Batch Quantity: ${qtyVal} ${batchUnit} → ${qty.toFixed(6)} kg`);
        steps.push(`   Target Total Solids (TS): ${inputs.targetTS}% → ${tTS.toFixed(8)} (decimal)`);
        steps.push(`   Target Fat: ${tFat}%`);
        steps.push(`   Milk Powder TS: ${inputs.powderTS}% → ${pTS.toFixed(8)} (decimal)`);
        steps.push(`   Milk Powder Fat: ${pFat}%`);

        // ============ STEP 2: CALCULATE TOTAL SOLIDS NEEDED ============
        steps.push(`\n\n🔢 **═══════════ STEP 2: CALCULATE TOTAL SOLIDS NEEDED ═══════════**`);
        
        const totalSolidsNeeded = qty * tTS;
        
        steps.push(`\n   Formula: Total Solids Needed = Batch Quantity × Target TS`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Total Solids Needed = ${qty.toFixed(6)} × ${tTS.toFixed(8)}`);
        steps.push(`                         = ${totalSolidsNeeded.toFixed(8)} kg`);

        // ============ STEP 3: CALCULATE MILK POWDER NEEDED ============
        steps.push(`\n\n🥛 **═══════════ STEP 3: CALCULATE MILK POWDER REQUIRED ═══════════**`);
        
        const powderNeeded = totalSolidsNeeded / pTS;
        
        steps.push(`\n   Formula: Powder Needed = Total Solids Needed / Powder TS%`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Powder Needed = ${totalSolidsNeeded.toFixed(8)} / ${pTS.toFixed(8)}`);
        steps.push(`                   = ${powderNeeded.toFixed(8)} kg`);

        // ============ STEP 4: CALCULATE WATER NEEDED ============
        steps.push(`\n\n💧 **═══════════ STEP 4: CALCULATE WATER REQUIRED ═══════════**`);
        
        const waterNeeded = qty - powderNeeded;
        
        steps.push(`\n   Formula: Water Needed = Batch Quantity - Powder Needed`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Water Needed = ${qty.toFixed(6)} - ${powderNeeded.toFixed(8)}`);
        steps.push(`                  = ${waterNeeded.toFixed(8)} kg`);

        if (waterNeeded < 0) {
            setError("❌ Calculation resulted in negative water. Please check your inputs.");
            return;
        }

        const waterNeededLiters = waterNeeded / 1.0; // Water density = 1.0 kg/L

        steps.push(`\n   Conversion to Liters:`);
        steps.push(`     Water = ${waterNeeded.toFixed(8)} kg = ${waterNeededLiters.toFixed(8)} liters`);
        steps.push(`     (Water density = 1.0 kg/liter)`);

        // ============ STEP 5: CALCULATE RECONSTITUTION RATIO ============
        steps.push(`\n\n📐 **═══════════ STEP 5: RECONSTITUTION RATIO ═══════════**`);
        
        const reconstitutionRatio = waterNeeded / powderNeeded;
        
        steps.push(`\n   Formula: Reconstitution Ratio = Water / Powder`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Ratio = ${waterNeeded.toFixed(8)} / ${powderNeeded.toFixed(8)}`);
        steps.push(`           = ${reconstitutionRatio.toFixed(4)} : 1`);
        steps.push(`\n   This means: ${reconstitutionRatio.toFixed(2)} kg water per 1 kg powder`);

        // ============ STEP 6: CALCULATE FINAL COMPOSITION ============
        steps.push(`\n\n🔬 **═══════════ STEP 6: FINAL COMPOSITION VERIFICATION ═══════════**`);
        
        const finalTS = ((powderNeeded * pTS) / qty) * 100;
        const finalFat = ((powderNeeded * (pFat / 100)) / qty) * 100;
        const finalSNF = finalTS - finalFat;
        
        steps.push(`\n   **Final Total Solids (TS):**`);
        steps.push(`     Final TS = (Powder × Powder TS) / Total Qty × 100`);
        steps.push(`              = (${powderNeeded.toFixed(8)} × ${pTS.toFixed(8)}) / ${qty.toFixed(6)} × 100`);
        steps.push(`              = ${(powderNeeded * pTS).toFixed(8)} / ${qty.toFixed(6)} × 100`);
        steps.push(`              = ${finalTS.toFixed(8)}%`);
        steps.push(`     Expected: ${inputs.targetTS}%`);
        steps.push(`     Match: ${Math.abs(finalTS - parseFloat(inputs.targetTS)) < 0.0001 ? '✓ Perfect' : '⚠️ Close'}`);

        steps.push(`\n   **Final Fat:**`);
        steps.push(`     Final Fat = (Powder × Powder Fat%) / Total Qty × 100`);
        steps.push(`               = (${powderNeeded.toFixed(8)} × ${(pFat/100).toFixed(8)}) / ${qty.toFixed(6)} × 100`);
        steps.push(`               = ${(powderNeeded * (pFat/100)).toFixed(8)} / ${qty.toFixed(6)} × 100`);
        steps.push(`               = ${finalFat.toFixed(8)}%`);

        steps.push(`\n   **Final SNF:**`);
        steps.push(`     Final SNF = Final TS - Final Fat`);
        steps.push(`               = ${finalTS.toFixed(8)} - ${finalFat.toFixed(8)}`);
        steps.push(`               = ${finalSNF.toFixed(8)}%`);

        // ============ STEP 7: MASS BALANCE CHECK ============
        steps.push(`\n\n✅ **═══════════ STEP 7: MASS BALANCE VERIFICATION ═══════════**`);
        
        steps.push(`\n   Total Input Mass:`);
        steps.push(`     Powder + Water = ${powderNeeded.toFixed(8)} + ${waterNeeded.toFixed(8)}`);
        steps.push(`                    = ${(powderNeeded + waterNeeded).toFixed(8)} kg`);
        steps.push(`\n   Expected Output:`);
        steps.push(`     Batch Quantity = ${qty.toFixed(6)} kg`);
        steps.push(`\n   Verification: ${Math.abs((powderNeeded + waterNeeded) - qty) < 0.0001 ? '✓ Mass Balance Perfect' : '⚠️ Check calculations'}`);

        // ============ STEP 8: SUMMARY ============
        steps.push(`\n\n✨ **═══════════ STEP 8: FINAL SUMMARY ═══════════**`);
        steps.push(`\n   To produce ${qty.toFixed(6)} kg (${(qty / componentProps.milkDensity).toFixed(6)} liters)`);
        steps.push(`   of reconstituted milk with ${inputs.targetTS}% TS:`);
        steps.push(`\n   ✓ Milk Powder: ${powderNeeded.toFixed(6)} kg (${inputs.powderTS}% TS)`);
        steps.push(`   ✓ Water: ${waterNeeded.toFixed(6)} kg (${waterNeededLiters.toFixed(6)} liters)`);
        steps.push(`\n   Reconstitution Ratio: ${reconstitutionRatio.toFixed(2)} : 1 (water : powder)`);
        steps.push(`\n   Final Composition:`);
        steps.push(`     - Total Solids: ${finalTS.toFixed(6)}%`);
        steps.push(`     - Fat: ${finalFat.toFixed(6)}%`);
        steps.push(`     - SNF: ${finalSNF.toFixed(6)}%`);

        setCalculationSteps(steps);
        setResult({
            powderNeeded,
            waterNeeded,
            totalQtyKg: qty,
            totalQtyLiters: qty / componentProps.milkDensity,
            finalTS,
            finalFat,
            finalSNF,
            reconstitutionRatio
        });

    }, [inputs, batchUnit]);

    return (
        <CalculatorCard 
            title="Reconstituted Milk Calculator" 
            description="Calculate precise amounts of milk powder and water needed to create reconstituted milk with specific Total Solids content"
        >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Target Batch */}
                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                        <Target className="w-5 h-5" />
                        Target Batch
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Batch Quantity</Label>
                            <div className="flex gap-2">
                                <Input 
                                    type="number" 
                                    value={inputs.batchQty} 
                                    onChange={(e) => handleInputChange('batchQty', e.target.value)} 
                                    className="flex-1 h-11 text-base font-medium border-2 border-blue-300"
                                    step="0.001"
                                />
                                <Select value={batchUnit} onValueChange={(val) => setBatchUnit(val as any)}>
                                    <SelectTrigger className="w-[110px] h-11 border-2 border-blue-300 font-semibold">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                        <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <MemoizedInputField 
                            label="Target Total Solids (TS) %" 
                            value={inputs.targetTS} 
                            name="targetTS" 
                            setter={handleInputChange} 
                        />
                        <MemoizedInputField 
                            label="Target Fat %" 
                            value={inputs.targetFat} 
                            name="targetFat" 
                            setter={handleInputChange} 
                        />
                    </div>
                </div>

                {/* Milk Powder Properties */}
                <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-6 rounded-xl border-2 border-amber-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-800">
                        <Milk className="w-5 h-5" />
                        Milk Powder Properties
                    </h3>
                    <div className="space-y-4">
                        <MemoizedInputField 
                            label="Milk Powder TS %" 
                            value={inputs.powderTS} 
                            name="powderTS" 
                            setter={handleInputChange} 
                        />
                        <MemoizedInputField 
                            label="Milk Powder Fat %" 
                            value={inputs.powderFat} 
                            name="powderFat" 
                            setter={handleInputChange} 
                        />
                        <Alert className="bg-amber-200 border-2 border-amber-400">
                            <Info className="h-4 w-4" />
                            <AlertDescription className="text-xs font-semibold text-amber-900">
                                <strong>Common Values:</strong> WMP (96% TS, 26% Fat), SMP (96% TS, 0.5% Fat)
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Reconstitution Formula
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Reconstitution Formula
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* Ingredients Required */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300">
                                    <h5 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
                                        <Beaker className="w-5 h-5" />
                                        Ingredients Required
                                    </h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* Milk Powder */}
                                        <div className="bg-amber-50 p-5 rounded-lg border-2 border-amber-300">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Milk className="w-5 h-5 text-amber-700" />
                                                <p className="text-sm font-bold text-amber-900">Milk Powder</p>
                                            </div>
                                            <p className="text-4xl font-extrabold text-amber-700 mb-2">
                                                {result.powderNeeded.toFixed(4)}
                                            </p>
                                            <p className="text-lg text-amber-600 font-semibold">kg</p>
                                            <div className="mt-3 p-2 bg-amber-100 rounded border border-amber-200">
                                                <p className="text-xs font-semibold text-amber-800">TS: {inputs.powderTS}%</p>
                                                <p className="text-xs font-semibold text-amber-800">Fat: {inputs.powderFat}%</p>
                                            </div>
                                            <Badge className="bg-amber-500 mt-3">
                                                {((result.powderNeeded / result.totalQtyKg) * 100).toFixed(2)}% of total
                                            </Badge>
                                        </div>

                                        {/* Water */}
                                        <div className="bg-cyan-50 p-5 rounded-lg border-2 border-cyan-300">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Droplets className="w-5 h-5 text-cyan-700" />
                                                <p className="text-sm font-bold text-cyan-900">Water</p>
                                            </div>
                                            <p className="text-4xl font-extrabold text-cyan-700 mb-2">
                                                {result.waterNeeded.toFixed(4)}
                                            </p>
                                            <p className="text-lg text-cyan-600 font-semibold">kg</p>
                                            <p className="text-base text-cyan-600 font-semibold mt-1">
                                                = {(result.waterNeeded / 1.0).toFixed(4)} liters
                                            </p>
                                            <Badge className="bg-cyan-500 mt-3">
                                                {((result.waterNeeded / result.totalQtyKg) * 100).toFixed(2)}% of total
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Reconstitution Ratio */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border-2 border-purple-300">
                                    <h5 className="font-bold text-lg text-purple-800 mb-3 flex items-center gap-2">
                                        <Scale className="w-5 h-5" />
                                        Reconstitution Ratio
                                    </h5>
                                    <div className="text-center">
                                        <p className="text-5xl font-extrabold text-purple-700">
                                            {result.reconstitutionRatio.toFixed(2)} : 1
                                        </p>
                                        <p className="text-lg text-purple-600 font-semibold mt-2">
                                            (Water : Powder)
                                        </p>
                                        <p className="text-sm text-purple-600 mt-3">
                                            Mix {result.reconstitutionRatio.toFixed(2)} kg water with 1 kg powder
                                        </p>
                                    </div>
                                </div>

                                {/* Final Product */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-teal-300">
                                    <h5 className="font-bold text-lg text-teal-800 mb-4 flex items-center gap-2">
                                        <Target className="w-5 h-5" />
                                        Final Reconstituted Milk
                                    </h5>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="text-center bg-teal-50 p-3 rounded-lg border border-teal-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Total Quantity</p>
                                            <p className="text-2xl font-bold text-teal-700">{result.totalQtyKg.toFixed(4)}</p>
                                            <p className="text-sm text-teal-600">kg</p>
                                            <p className="text-xs text-teal-600 mt-1">{result.totalQtyLiters.toFixed(4)} L</p>
                                        </div>
                                        <div className="text-center bg-purple-50 p-3 rounded-lg border border-purple-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Total Solids</p>
                                            <p className="text-2xl font-bold text-purple-700">{result.finalTS.toFixed(4)}</p>
                                            <p className="text-sm text-purple-600">%</p>
                                            <Badge className="bg-green-500 mt-1 text-xs">Target Match</Badge>
                                        </div>
                                        <div className="text-center bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Fat</p>
                                            <p className="text-2xl font-bold text-yellow-700">{result.finalFat.toFixed(4)}</p>
                                            <p className="text-sm text-yellow-600">%</p>
                                        </div>
                                        <div className="text-center bg-pink-50 p-3 rounded-lg border border-pink-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">SNF</p>
                                            <p className="text-2xl font-bold text-pink-700">{result.finalSNF.toFixed(4)}</p>
                                            <p className="text-sm text-pink-600">%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete Reconstitution Calculation (Mobile Calculator Verification)
                        </h4>
                        <ScrollArea className="h-[500px] pr-4">
                            <div className="space-y-1 text-sm font-mono leading-relaxed">
                                {calculationSteps.map((step, idx) => (
                                    <p 
                                        key={idx} 
                                        className={cn(
                                            step.includes('**') && 'font-extrabold mt-3 text-gray-900 text-base',
                                            step.includes('═══') && 'text-purple-700 font-extrabold text-lg',
                                            step.includes('✅') && 'text-green-700 font-bold',
                                            step.includes('⚠️') && 'text-yellow-700 font-bold',
                                            step.includes('✓') && 'text-green-700 font-bold',
                                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                                            step.includes('🔢') && 'text-purple-700 font-bold text-lg',
                                            step.includes('🥛') && 'text-amber-700 font-bold text-lg',
                                            step.includes('💧') && 'text-cyan-700 font-bold text-lg',
                                            step.includes('📐') && 'text-indigo-700 font-bold text-lg',
                                            step.includes('🔬') && 'text-pink-700 font-bold text-lg',
                                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('✓') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ Complete reconstitution process with mass balance verification - verify each step!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}

function RecombinedMilkCalc() {
    const [inputs, setInputs] = useState({
        batchQty: '100',
        targetFat: '3.5',
        targetClr: '28.5',
        smpFat: '1.0',
        smpSNF: '95.0',
        fatSourceFat: '99.8',
        formula: 'isi',
        customFatMultiplier: '0.25',
        customConstant: '0.72'
    });
    const [batchUnit, setBatchUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<{
        smpNeeded: number;
        butterOilNeeded: number;
        waterNeeded: number;
        totalQtyKg: number;
        totalQtyLiters: number;
        finalFat: number;
        finalSnf: number;
        finalTS: number;
        finalClr: number;
        targetSnf: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        if (inputs.formula === 'custom') {
            const multi = parseFloat(inputs.customFatMultiplier) || 0;
            const constFactor = parseFloat(inputs.customConstant) || 0;
            return (clr / 4) + (fat * multi) + constFactor;
        }
        const formula = snfFormulas[inputs.formula as keyof typeof snfFormulas] || snfFormulas.isi;
        return formula.calc(clr, fat);
    }, [inputs.formula, inputs.customFatMultiplier, inputs.customConstant]);
    
    const targetSnf = useMemo(() => {
        const fat = parseFloat(inputs.targetFat);
        const clr = parseFloat(inputs.targetClr);
        return !isNaN(fat) && !isNaN(clr) ? calculateSnf(clr, fat) : 0;
    }, [inputs.targetFat, inputs.targetClr, calculateSnf]);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);
        
        const Q_val = parseFloat(inputs.batchQty);
        const Q = batchUnit === 'liters' ? Q_val * componentProps.milkDensity : Q_val;

        const Ft = parseFloat(inputs.targetFat) / 100;
        const St = targetSnf / 100;
        const Fp = parseFloat(inputs.smpFat) / 100;
        const Sp = parseFloat(inputs.smpSNF) / 100;
        const Fb = parseFloat(inputs.fatSourceFat) / 100;

        if ([Q, Ft, St, Fp, Sp, Fb].some(isNaN) || Q <= 0) {
            setError("⚠️ Please fill all fields with valid numbers.");
            return;
        }

        if (St <= 0) {
            setError("❌ Calculated Target SNF is zero or negative. Check Fat and CLR values.");
            return;
        }

        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Target Batch:`);
        steps.push(`     Quantity: ${Q_val} ${batchUnit} → ${Q.toFixed(6)} kg`);
        steps.push(`     Target Fat: ${inputs.targetFat}% → ${Ft.toFixed(8)} (decimal)`);
        steps.push(`     Target CLR: ${inputs.targetClr}`);
        
        const formulaUsed = inputs.formula === 'custom' ? 'Custom Formula' : 
                           snfFormulas[inputs.formula as keyof typeof snfFormulas]?.name || 'ISI Formula';
        steps.push(`\n   SNF Calculation:`);
        steps.push(`     Formula: ${formulaUsed}`);
        steps.push(`     Target SNF: ${targetSnf.toFixed(6)}% → ${St.toFixed(8)} (decimal)`);
        
        steps.push(`\n   Ingredient Properties:`);
        steps.push(`     SMP Fat: ${inputs.smpFat}% → ${Fp.toFixed(8)} (decimal)`);
        steps.push(`     SMP SNF: ${inputs.smpSNF}% → ${Sp.toFixed(8)} (decimal)`);
        steps.push(`     Fat Source (Butter Oil/AMF): ${inputs.fatSourceFat}% → ${Fb.toFixed(8)} (decimal)`);
        steps.push(`     Water: Fat = 0%, SNF = 0%`);

        // ============ STEP 2: CALCULATE SMP NEEDED ============
        steps.push(`\n\n🥛 **═══════════ STEP 2: CALCULATE SMP REQUIRED ═══════════**`);
        
        const P = (Q * St) / Sp;
        
        steps.push(`\n   Formula: SMP Needed (P) = (Batch Qty × Target SNF) / SMP SNF`);
        steps.push(`\n   Calculation:`);
        steps.push(`     P = (${Q.toFixed(6)} × ${St.toFixed(8)}) / ${Sp.toFixed(8)}`);
        steps.push(`       = ${(Q * St).toFixed(8)} / ${Sp.toFixed(8)}`);
        steps.push(`       = ${P.toFixed(8)} kg`);

        // ============ STEP 3: CALCULATE BUTTER OIL NEEDED ============
        steps.push(`\n\n🧈 **═══════════ STEP 3: CALCULATE BUTTER OIL/AMF REQUIRED ═══════════**`);
        
        const B = (Q * Ft - P * Fp) / Fb;
        
        steps.push(`\n   Formula: Butter Oil (B) = (Batch Qty × Target Fat - SMP × SMP Fat) / Butter Oil Fat`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Total Fat Needed = Batch Qty × Target Fat`);
        steps.push(`                      = ${Q.toFixed(6)} × ${Ft.toFixed(8)}`);
        steps.push(`                      = ${(Q * Ft).toFixed(8)} kg`);
        
        steps.push(`\n     Fat from SMP = SMP Qty × SMP Fat`);
        steps.push(`                  = ${P.toFixed(8)} × ${Fp.toFixed(8)}`);
        steps.push(`                  = ${(P * Fp).toFixed(8)} kg`);
        
        steps.push(`\n     Fat from Butter Oil = Total Fat Needed - Fat from SMP`);
        steps.push(`                         = ${(Q * Ft).toFixed(8)} - ${(P * Fp).toFixed(8)}`);
        steps.push(`                         = ${(Q * Ft - P * Fp).toFixed(8)} kg`);
        
        steps.push(`\n     B = Fat from Butter Oil / Butter Oil Fat%`);
        steps.push(`       = ${(Q * Ft - P * Fp).toFixed(8)} / ${Fb.toFixed(8)}`);
        steps.push(`       = ${B.toFixed(8)} kg`);

        // ============ STEP 4: CALCULATE WATER NEEDED ============
        steps.push(`\n\n💧 **═══════════ STEP 4: CALCULATE WATER REQUIRED ═══════════**`);
        
        const W = Q - P - B;
        
        steps.push(`\n   Formula: Water (W) = Batch Qty - SMP - Butter Oil`);
        steps.push(`\n   Calculation:`);
        steps.push(`     W = ${Q.toFixed(6)} - ${P.toFixed(8)} - ${B.toFixed(8)}`);
        steps.push(`       = ${W.toFixed(8)} kg`);
        
        const waterLiters = W / 1.0;
        steps.push(`\n   Conversion to Liters:`);
        steps.push(`     Water = ${W.toFixed(8)} kg = ${waterLiters.toFixed(8)} liters`);

        if (P < 0 || B < 0 || W < 0) {
            setError("❌ Calculation resulted in negative values. Check your inputs - ingredient compositions may not be logical.");
            return;
        }

        // ============ STEP 5: VERIFICATION ============
        steps.push(`\n\n✅ **═══════════ STEP 5: VERIFICATION ═══════════**`);
        
        steps.push(`\n   **Mass Balance Check:**`);
        steps.push(`     Total Input = SMP + Butter Oil + Water`);
        steps.push(`                 = ${P.toFixed(8)} + ${B.toFixed(8)} + ${W.toFixed(8)}`);
        steps.push(`                 = ${(P + B + W).toFixed(8)} kg`);
        steps.push(`     Expected Output = ${Q.toFixed(6)} kg`);
        steps.push(`     Match: ${Math.abs((P + B + W) - Q) < 0.0001 ? '✓ Perfect' : '⚠️ Check calculations'}`);

        // Calculate final composition
        const finalFat = ((P * Fp) + (B * Fb)) / Q * 100;
        const finalSnf = (P * Sp) / Q * 100;
        const finalTS = finalFat + finalSnf;
        const formulaObj = snfFormulas[inputs.formula as keyof typeof snfFormulas] || snfFormulas.isi;
        const finalClr = formulaObj.inverse ? formulaObj.inverse(finalSnf, finalFat) : 
                        4 * (finalSnf/100 - 0.25 * finalFat/100 - 0.0044);

        steps.push(`\n   **Final Fat Verification:**`);
        steps.push(`     Final Fat = [(SMP × SMP Fat) + (Butter Oil × BO Fat)] / Total Qty × 100`);
        steps.push(`               = [(${P.toFixed(8)} × ${Fp.toFixed(8)}) + (${B.toFixed(8)} × ${Fb.toFixed(8)})] / ${Q.toFixed(6)} × 100`);
        steps.push(`               = [${(P * Fp).toFixed(8)} + ${(B * Fb).toFixed(8)}] / ${Q.toFixed(6)} × 100`);
        steps.push(`               = ${((P * Fp) + (B * Fb)).toFixed(8)} / ${Q.toFixed(6)} × 100`);
        steps.push(`               = ${finalFat.toFixed(8)}%`);
        steps.push(`     Expected: ${inputs.targetFat}%`);
        steps.push(`     Match: ${Math.abs(finalFat - parseFloat(inputs.targetFat)) < 0.0001 ? '✓ Perfect' : '⚠️ Close'}`);

        steps.push(`\n   **Final SNF Verification:**`);
        steps.push(`     Final SNF = (SMP × SMP SNF) / Total Qty × 100`);
        steps.push(`               = (${P.toFixed(8)} × ${Sp.toFixed(8)}) / ${Q.toFixed(6)} × 100`);
        steps.push(`               = ${(P * Sp).toFixed(8)} / ${Q.toFixed(6)} × 100`);
        steps.push(`               = ${finalSnf.toFixed(8)}%`);
        steps.push(`     Expected: ${targetSnf.toFixed(6)}%`);
        steps.push(`     Match: ${Math.abs(finalSnf - targetSnf) < 0.0001 ? '✓ Perfect' : '⚠️ Close'}`);

        steps.push(`\n   **Final CLR (Calculated):**`);
        steps.push(`     Final CLR = ${finalClr.toFixed(8)}`);
        steps.push(`     Expected: ${inputs.targetClr}`);

        // ============ STEP 6: PERCENTAGE BREAKDOWN ============
        steps.push(`\n\n📊 **═══════════ STEP 6: COMPOSITION BREAKDOWN ═══════════**`);
        
        const smpPercent = (P / Q) * 100;
        const boPercent = (B / Q) * 100;
        const waterPercent = (W / Q) * 100;

        steps.push(`\n   Ingredient Percentages (by weight):`);
        steps.push(`     SMP: ${smpPercent.toFixed(4)}%`);
        steps.push(`     Butter Oil/AMF: ${boPercent.toFixed(4)}%`);
        steps.push(`     Water: ${waterPercent.toFixed(4)}%`);
        steps.push(`     Total: ${(smpPercent + boPercent + waterPercent).toFixed(4)}%`);

        // ============ STEP 7: SUMMARY ============
        steps.push(`\n\n✨ **═══════════ STEP 7: FINAL SUMMARY ═══════════**`);
        steps.push(`\n   To produce ${Q.toFixed(6)} kg (${(Q / componentProps.milkDensity).toFixed(6)} liters)`);
        steps.push(`   of recombined milk with ${inputs.targetFat}% Fat and ${targetSnf.toFixed(2)}% SNF:`);
        steps.push(`\n   ✓ SMP: ${P.toFixed(6)} kg (${smpPercent.toFixed(2)}%)`);
        steps.push(`   ✓ Butter Oil/AMF: ${B.toFixed(6)} kg (${boPercent.toFixed(2)}%)`);
        steps.push(`   ✓ Water: ${W.toFixed(6)} kg = ${waterLiters.toFixed(6)} liters (${waterPercent.toFixed(2)}%)`);
        steps.push(`\n   Final Composition:`);
        steps.push(`     - Total Solids (TS): ${finalTS.toFixed(6)}%`);
        steps.push(`     - Fat: ${finalFat.toFixed(6)}%`);
        steps.push(`     - SNF: ${finalSnf.toFixed(6)}%`);
        steps.push(`     - CLR: ${finalClr.toFixed(6)}`);

        setCalculationSteps(steps);
        setResult({
            smpNeeded: P,
            butterOilNeeded: B,
            waterNeeded: W,
            totalQtyKg: Q,
            totalQtyLiters: Q / componentProps.milkDensity,
            finalFat,
            finalSnf,
            finalTS,
            finalClr,
            targetSnf
        });

    }, [inputs, batchUnit, targetSnf, calculateSnf]);

    return (
        <CalculatorCard 
            title="Recombined Milk Calculator" 
            description="Calculate precise amounts of SMP, Butter Oil/AMF, and Water to create recombined milk with specific Fat and SNF content"
        >
            {/* SNF Formula Selection */}
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-5 rounded-xl border-2 border-indigo-300 shadow-md mb-6">
                <Label className="text-base font-bold mb-3 block flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    SNF Calculation Formula
                </Label>
                <Select value={inputs.formula} onValueChange={(val) => handleInputChange('formula', val)}>
                    <SelectTrigger className="bg-white border-2 border-indigo-200 h-12 text-base font-medium">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key} className="text-base py-3">
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800">{name}</span>
                                    <span className="text-xs text-muted-foreground mt-1">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                        <SelectItem value="custom" className="text-base py-3">Custom Formula</SelectItem>
                    </SelectContent>
                </Select>
                
                {inputs.formula === 'custom' && (
                    <div className="grid grid-cols-2 gap-4 mt-4 p-4 border-2 border-dashed border-purple-300 rounded-lg bg-purple-50">
                        <MemoizedInputField 
                            label="Fat Multiplier" 
                            value={inputs.customFatMultiplier} 
                            name="customFatMultiplier" 
                            setter={(name, val) => handleInputChange(name, val)} 
                        />
                        <MemoizedInputField 
                            label="Constant (C)" 
                            value={inputs.customConstant} 
                            name="customConstant" 
                            setter={(name, val) => handleInputChange(name, val)} 
                        />
                    </div>
                )}
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Target Milk */}
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                        <Target className="w-5 h-5" />
                        Target Milk Composition
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Batch Quantity</Label>
                            <div className="flex gap-2">
                                <Input 
                                    type="number" 
                                    value={inputs.batchQty} 
                                    onChange={(e) => handleInputChange('batchQty', e.target.value)} 
                                    className="flex-1 h-11 text-base font-medium border-2 border-green-300"
                                    step="0.001"
                                />
                                <Select value={batchUnit} onValueChange={(val) => setBatchUnit(val as any)}>
                                    <SelectTrigger className="w-[110px] h-11 border-2 border-green-300 font-semibold">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                        <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <MemoizedInputField 
                            label="Target Fat %" 
                            value={inputs.targetFat} 
                            name="targetFat" 
                            setter={handleInputChange} 
                        />
                        <MemoizedInputField 
                            label="Target CLR" 
                            value={inputs.targetClr} 
                            name="targetClr" 
                            setter={handleInputChange} 
                        />
                        <Alert className="bg-green-200 border-2 border-green-400">
                            <Info className="h-4 w-4" />
                            <AlertDescription className="font-bold text-green-900">
                                Calculated Target SNF: {targetSnf > 0 ? targetSnf.toFixed(4) + '%' : '...'}
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>

                {/* Ingredient Properties */}
                <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-6 rounded-xl border-2 border-amber-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-800">
                        <Beaker className="w-5 h-5" />
                        Ingredient Specifications
                    </h3>
                    <div className="space-y-4">
                        <MemoizedInputField 
                            label="SMP Fat %" 
                            value={inputs.smpFat} 
                            name="smpFat" 
                            setter={handleInputChange} 
                        />
                        <MemoizedInputField 
                            label="SMP SNF %" 
                            value={inputs.smpSNF} 
                            name="smpSNF" 
                            setter={handleInputChange} 
                        />
                        <MemoizedInputField 
                            label="Butter Oil/AMF Fat %" 
                            value={inputs.fatSourceFat} 
                            name="fatSourceFat" 
                            setter={handleInputChange} 
                        />
                        <Alert className="bg-amber-200 border-2 border-amber-400">
                            <Info className="h-4 w-4" />
                            <AlertDescription className="text-xs font-semibold text-amber-900">
                                <strong>Typical:</strong> SMP (1% Fat, 95% SNF), Butter Oil (99.8% Fat)
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Recombined Milk Formula
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Recombination Formula
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* Ingredients Required */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300">
                                    <h5 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
                                        <Milk className="w-5 h-5" />
                                        Ingredients Required
                                    </h5>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {/* SMP */}
                                        <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-300">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Weight className="w-5 h-5 text-yellow-700" />
                                                <p className="text-sm font-bold text-yellow-900">SMP</p>
                                            </div>
                                            <p className="text-4xl font-extrabold text-yellow-700 mb-2">
                                                {result.smpNeeded.toFixed(4)}
                                            </p>
                                            <p className="text-lg text-yellow-600 font-semibold">kg</p>
                                            <Badge className="bg-yellow-500 mt-3">
                                                {((result.smpNeeded / result.totalQtyKg) * 100).toFixed(2)}% of total
                                            </Badge>
                                        </div>

                                        {/* Butter Oil */}
                                        <div className="bg-orange-50 p-5 rounded-lg border-2 border-orange-300">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Droplets className="w-5 h-5 text-orange-700" />
                                                <p className="text-sm font-bold text-orange-900">Butter Oil/AMF</p>
                                            </div>
                                            <p className="text-4xl font-extrabold text-orange-700 mb-2">
                                                {result.butterOilNeeded.toFixed(4)}
                                            </p>
                                            <p className="text-lg text-orange-600 font-semibold">kg</p>
                                            <Badge className="bg-orange-500 mt-3">
                                                {((result.butterOilNeeded / result.totalQtyKg) * 100).toFixed(2)}% of total
                                            </Badge>
                                        </div>

                                        {/* Water */}
                                        <div className="bg-cyan-50 p-5 rounded-lg border-2 border-cyan-300">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Droplets className="w-5 h-5 text-cyan-700" />
                                                <p className="text-sm font-bold text-cyan-900">Water</p>
                                            </div>
                                            <p className="text-4xl font-extrabold text-cyan-700 mb-2">
                                                {result.waterNeeded.toFixed(4)}
                                            </p>
                                            <p className="text-lg text-cyan-600 font-semibold">kg</p>
                                            <p className="text-base text-cyan-600 font-semibold">
                                                = {(result.waterNeeded / 1.0).toFixed(4)} L
                                            </p>
                                            <Badge className="bg-cyan-500 mt-3">
                                                {((result.waterNeeded / result.totalQtyKg) * 100).toFixed(2)}% of total
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Final Product */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-teal-300">
                                    <h5 className="font-bold text-lg text-teal-800 mb-4 flex items-center gap-2">
                                        <Target className="w-5 h-5" />
                                        Final Recombined Milk
                                    </h5>
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                        <div className="text-center bg-teal-50 p-3 rounded-lg border border-teal-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Total Qty</p>
                                            <p className="text-xl font-bold text-teal-700">{result.totalQtyKg.toFixed(4)}</p>
                                            <p className="text-xs text-teal-600">kg</p>
                                            <p className="text-xs text-teal-600">{result.totalQtyLiters.toFixed(4)} L</p>
                                        </div>
                                        <div className="text-center bg-purple-50 p-3 rounded-lg border border-purple-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">TS</p>
                                            <p className="text-xl font-bold text-purple-700">{result.finalTS.toFixed(4)}</p>
                                            <p className="text-xs text-purple-600">%</p>
                                        </div>
                                        <div className="text-center bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Fat</p>
                                            <p className="text-xl font-bold text-yellow-700">{result.finalFat.toFixed(4)}</p>
                                            <p className="text-xs text-yellow-600">%</p>
                                            <Badge className="bg-green-500 mt-1 text-[10px]">Match</Badge>
                                        </div>
                                        <div className="text-center bg-pink-50 p-3 rounded-lg border border-pink-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">SNF</p>
                                            <p className="text-xl font-bold text-pink-700">{result.finalSnf.toFixed(4)}</p>
                                            <p className="text-xs text-pink-600">%</p>
                                            <Badge className="bg-green-500 mt-1 text-[10px]">Match</Badge>
                                        </div>
                                        <div className="text-center bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">CLR</p>
                                            <p className="text-xl font-bold text-indigo-700">{result.finalClr.toFixed(4)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete Recombination Calculation (Mobile Calculator Verification)
                        </h4>
                        <ScrollArea className="h-[500px] pr-4">
                            <div className="space-y-1 text-sm font-mono leading-relaxed">
                                {calculationSteps.map((step, idx) => (
                                    <p 
                                        key={idx} 
                                        className={cn(
                                            step.includes('**') && 'font-extrabold mt-3 text-gray-900 text-base',
                                            step.includes('═══') && 'text-purple-700 font-extrabold text-lg',
                                            step.includes('✅') && 'text-green-700 font-bold',
                                            step.includes('⚠️') && 'text-yellow-700 font-bold',
                                            step.includes('✓') && 'text-green-700 font-bold',
                                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                                            step.includes('🥛') && 'text-amber-700 font-bold text-lg',
                                            step.includes('🧈') && 'text-orange-700 font-bold text-lg',
                                            step.includes('💧') && 'text-cyan-700 font-bold text-lg',
                                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('✓') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ Complete recombination process with mass and composition verification!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}

function ClrCorrectionCalc() {
    const [olr, setOlr] = useState("28.5");
    const [temp, setTemp] = useState("29");
    const [result, setResult] = useState<{
        clr: number;
        olr: number;
        temp: number;
        correction: number;
        standardTemp: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleCalc = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);
        
        const olrNum = parseFloat(olr);
        const tempNum = parseFloat(temp);
        
        if (isNaN(olrNum) || isNaN(tempNum)) {
            setError('⚠️ Please enter valid numbers for both fields.');
            return;
        }

        const steps: string[] = [];
        const standardTemp = 27;
        const correctionFactor = 0.2;
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Observed Lactometer Reading (OLR): ${olrNum}`);
        steps.push(`   Milk Temperature: ${tempNum}°C`);
        steps.push(`   Standard Calibration Temperature: ${standardTemp}°C`);
        steps.push(`   Correction Factor: ${correctionFactor} per °C`);

        // ============ STEP 2: CALCULATE TEMPERATURE DIFFERENCE ============
        steps.push(`\n\n🌡️ **═══════════ STEP 2: TEMPERATURE DIFFERENCE ═══════════**`);
        
        const tempDiff = tempNum - standardTemp;
        
        steps.push(`\n   Formula: Temperature Difference = Actual Temp - Standard Temp`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Temperature Difference = ${tempNum} - ${standardTemp}`);
        steps.push(`                            = ${tempDiff.toFixed(6)}°C`);
        
        if (tempDiff > 0) {
            steps.push(`\n   ⚠️ Temperature is ${Math.abs(tempDiff).toFixed(2)}°C ABOVE standard`);
            steps.push(`      → CLR reading will be LOWER than actual`);
            steps.push(`      → Need to ADD correction`);
        } else if (tempDiff < 0) {
            steps.push(`\n   ⚠️ Temperature is ${Math.abs(tempDiff).toFixed(2)}°C BELOW standard`);
            steps.push(`      → CLR reading will be HIGHER than actual`);
            steps.push(`      → Need to SUBTRACT correction`);
        } else {
            steps.push(`\n   ✅ Temperature matches standard - no correction needed`);
        }

        // ============ STEP 3: CALCULATE CORRECTION ============
        steps.push(`\n\n🔢 **═══════════ STEP 3: CALCULATE CORRECTION VALUE ═══════════**`);
        
        const correction = tempDiff * correctionFactor;
        
        steps.push(`\n   Formula: Correction = Temperature Difference × Correction Factor`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Correction = ${tempDiff.toFixed(6)} × ${correctionFactor}`);
        steps.push(`                = ${correction.toFixed(8)}`);

        // ============ STEP 4: CALCULATE CORRECTED CLR ============
        steps.push(`\n\n✅ **═══════════ STEP 4: CALCULATE CORRECTED CLR ═══════════**`);
        
        const clr = olrNum + correction;
        
        steps.push(`\n   Formula: Corrected CLR = OLR + Correction`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Corrected CLR = ${olrNum} + ${correction.toFixed(8)}`);
        steps.push(`                   = ${clr.toFixed(8)}`);

        // ============ STEP 5: INTERPRETATION ============
        steps.push(`\n\n📈 **═══════════ STEP 5: RESULT INTERPRETATION ═══════════**`);
        
        steps.push(`\n   Observed Reading (OLR): ${olrNum}`);
        steps.push(`   Corrected Reading (CLR): ${clr.toFixed(4)}`);
        steps.push(`   Difference: ${Math.abs(clr - olrNum).toFixed(4)}`);
        
        if (Math.abs(tempDiff) < 0.5) {
            steps.push(`\n   ✓ Temperature very close to standard - minimal correction applied`);
        } else if (Math.abs(tempDiff) > 3) {
            steps.push(`\n   ⚠️ Large temperature difference detected`);
            steps.push(`      Consider re-testing at closer to standard temperature for accuracy`);
        }

        setCalculationSteps(steps);
        setResult({
            clr,
            olr: olrNum,
            temp: tempNum,
            correction,
            standardTemp
        });
    }, [olr, temp]);

    return (
        <CalculatorCard 
            title="CLR Temperature Correction Calculator" 
            description="Correct Lactometer Reading (CLR) based on milk temperature deviation from standard 27°C"
        >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* OLR Input */}
                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                        <Thermometer className="w-5 h-5" />
                        Observed Reading
                    </h3>
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Observed Lactometer Reading (OLR)</Label>
                        <Input 
                            type="number" 
                            value={olr} 
                            onChange={e => setOlr(e.target.value)} 
                            className="h-11 text-base font-medium border-2 border-blue-300"
                            placeholder="28.5"
                            step="0.1"
                        />
                    </div>
                </div>

                {/* Temperature Input */}
                <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6 rounded-xl border-2 border-orange-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-orange-800">
                        <Thermometer className="w-5 h-5" />
                        Milk Temperature
                    </h3>
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Temperature (°C)</Label>
                        <Input 
                            type="number" 
                            value={temp} 
                            onChange={e => setTemp(e.target.value)} 
                            className="h-11 text-base font-medium border-2 border-orange-300"
                            placeholder="29"
                            step="0.1"
                        />
                        <p className="text-xs text-orange-700 mt-2 font-semibold">
                            Standard calibration: 27°C
                        </p>
                    </div>
                </div>
            </div>

            <Button 
                onClick={handleCalc} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Corrected CLR
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Result Display */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Corrected CLR
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* Main Result */}
                                <div className="bg-white/90 p-8 rounded-xl shadow-md border-2 border-green-300 text-center">
                                    <p className="text-sm text-muted-foreground font-semibold mb-2">
                                        Corrected Lactometer Reading (CLR)
                                    </p>
                                    <p className="text-6xl font-extrabold text-green-700 mb-4">
                                        {result.clr.toFixed(4)}
                                    </p>
                                    {Math.abs(result.correction) > 0.01 && (
                                        <Badge className={result.correction > 0 ? "bg-blue-500" : "bg-orange-500"}>
                                            {result.correction > 0 ? '+' : ''}{result.correction.toFixed(4)} correction applied
                                        </Badge>
                                    )}
                                </div>

                                {/* Comparison */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">Observed (OLR)</p>
                                        <p className="text-3xl font-bold text-blue-700">{result.olr.toFixed(4)}</p>
                                        <p className="text-xs text-blue-600 mt-1">At {result.temp}°C</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">Temperature Diff</p>
                                        <p className="text-3xl font-bold text-purple-700">
                                            {(result.temp - result.standardTemp) > 0 ? '+' : ''}{(result.temp - result.standardTemp).toFixed(2)}°C
                                        </p>
                                        <p className="text-xs text-purple-600 mt-1">From standard</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">Corrected (CLR)</p>
                                        <p className="text-3xl font-bold text-green-700">{result.clr.toFixed(4)}</p>
                                        <p className="text-xs text-green-600 mt-1">At 27°C standard</p>
                                    </div>
                                </div>

                                {/* Info Alert */}
                                <Alert className="bg-blue-100 border-2 border-blue-300">
                                    <Info className="h-5 w-5 text-blue-700" />
                                    <AlertDescription className="text-sm font-semibold text-blue-900">
                                        <strong>Note:</strong> Lactometers are calibrated at 27°C (80.6°F). Readings taken at different temperatures must be corrected using 0.2 per °C deviation.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Temperature Correction Calculation Process
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
                                            step.includes('⚠️') && 'text-yellow-700 font-bold',
                                            step.includes('✓') && 'text-green-700 font-bold',
                                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                                            step.includes('🌡️') && 'text-orange-700 font-bold text-lg',
                                            step.includes('🔢') && 'text-purple-700 font-bold text-lg',
                                            step.includes('📈') && 'text-green-700 font-bold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('✓') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ Temperature correction formula: CLR = OLR + (Temp - 27) × 0.2
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}

function KgFatSnfCalc() {
    const [inputs, setInputs] = useState({
        qty: "1000",
        fat: "4.5",
        snf: "8.5",
    });
    const [unit, setUnit] = useState<'liter' | 'kg'>('liter');
    const [result, setResult] = useState<{
        milkQtyKg: number;
        milkQtyLiters: number;
        fatKg: number;
        snfKg: number;
        totalSolidsKg: number;
        waterKg: number;
        fatPercent: number;
        snfPercent: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        const qtyVal = parseFloat(inputs.qty);
        const fatVal = parseFloat(inputs.fat);
        const snfVal = parseFloat(inputs.snf);
        setResult(null);
        setError(null);
        setCalculationSteps([]);

        if ([qtyVal, fatVal, snfVal].some(isNaN) || qtyVal <= 0) {
            setError("⚠️ Please fill all fields with valid positive numbers.");
            return;
        }

        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Milk Quantity: ${qtyVal} ${unit}`);
        steps.push(`   Fat Percentage: ${fatVal}%`);
        steps.push(`   SNF Percentage: ${snfVal}%`);
        steps.push(`   Milk Density: ${componentProps.milkDensity} kg/liter`);

        // ============ STEP 2: CONVERT TO KG ============
        const milkWeight = unit === 'liter' ? qtyVal * componentProps.milkDensity : qtyVal;
        const milkLiters = unit === 'kg' ? qtyVal / componentProps.milkDensity : qtyVal;
        
        steps.push(`\n\n⚖️ **═══════════ STEP 2: CONVERT TO STANDARD UNITS ═══════════**`);
        
        if (unit === 'liter') {
            steps.push(`\n   Converting Liters to Kg:`);
            steps.push(`     Milk Weight (kg) = Volume (liters) × Density`);
            steps.push(`                      = ${qtyVal} × ${componentProps.milkDensity}`);
            steps.push(`                      = ${milkWeight.toFixed(6)} kg`);
        } else {
            steps.push(`\n   Already in Kg: ${milkWeight.toFixed(6)} kg`);
            steps.push(`\n   Converting to Liters:`);
            steps.push(`     Volume (liters) = Weight (kg) / Density`);
            steps.push(`                     = ${qtyVal} / ${componentProps.milkDensity}`);
            steps.push(`                     = ${milkLiters.toFixed(6)} liters`);
        }

        // ============ STEP 3: CALCULATE FAT IN KG ============
        steps.push(`\n\n🧈 **═══════════ STEP 3: CALCULATE TOTAL FAT ═══════════**`);
        
        const fatKg = milkWeight * (fatVal / 100);
        
        steps.push(`\n   Formula: Total Fat (kg) = Milk Weight × (Fat% / 100)`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Total Fat = ${milkWeight.toFixed(6)} × (${fatVal} / 100)`);
        steps.push(`               = ${milkWeight.toFixed(6)} × ${(fatVal / 100).toFixed(8)}`);
        steps.push(`               = ${fatKg.toFixed(8)} kg`);

        // ============ STEP 4: CALCULATE SNF IN KG ============
        steps.push(`\n\n🥛 **═══════════ STEP 4: CALCULATE TOTAL SNF ═══════════**`);
        
        const snfKg = milkWeight * (snfVal / 100);
        
        steps.push(`\n   Formula: Total SNF (kg) = Milk Weight × (SNF% / 100)`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Total SNF = ${milkWeight.toFixed(6)} × (${snfVal} / 100)`);
        steps.push(`              = ${milkWeight.toFixed(6)} × ${(snfVal / 100).toFixed(8)}`);
        steps.push(`              = ${snfKg.toFixed(8)} kg`);

        // ============ STEP 5: CALCULATE TOTAL SOLIDS ============
        steps.push(`\n\n📦 **═══════════ STEP 5: CALCULATE TOTAL SOLIDS ═══════════**`);
        
        const totalSolidsKg = fatKg + snfKg;
        const totalSolidsPercent = fatVal + snfVal;
        
        steps.push(`\n   Formula: Total Solids (TS) = Fat + SNF`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Total Solids = ${fatKg.toFixed(8)} + ${snfKg.toFixed(8)}`);
        steps.push(`                  = ${totalSolidsKg.toFixed(8)} kg`);
        steps.push(`\n   As Percentage:`);
        steps.push(`     TS% = Fat% + SNF%`);
        steps.push(`         = ${fatVal}% + ${snfVal}%`);
        steps.push(`         = ${totalSolidsPercent.toFixed(4)}%`);

        // ============ STEP 6: CALCULATE WATER CONTENT ============
        steps.push(`\n\n💧 **═══════════ STEP 6: CALCULATE WATER CONTENT ═══════════**`);
        
        const waterKg = milkWeight - totalSolidsKg;
        const waterPercent = 100 - totalSolidsPercent;
        
        steps.push(`\n   Formula: Water = Total Milk - Total Solids`);
        steps.push(`\n   Calculation:`);
        steps.push(`     Water = ${milkWeight.toFixed(6)} - ${totalSolidsKg.toFixed(8)}`);
        steps.push(`           = ${waterKg.toFixed(8)} kg`);
        steps.push(`\n   As Percentage:`);
        steps.push(`     Water% = 100% - TS%`);
        steps.push(`            = 100% - ${totalSolidsPercent.toFixed(4)}%`);
        steps.push(`            = ${waterPercent.toFixed(4)}%`);

        // ============ STEP 7: SUMMARY ============
        steps.push(`\n\n✨ **═══════════ STEP 7: FINAL SUMMARY ═══════════**`);
        steps.push(`\n   In ${qtyVal} ${unit} of milk:`);
        steps.push(`     Total Weight: ${milkWeight.toFixed(6)} kg (${milkLiters.toFixed(6)} liters)`);
        steps.push(`\n   Composition Breakdown:`);
        steps.push(`     ✓ Fat: ${fatKg.toFixed(6)} kg (${fatVal}%)`);
        steps.push(`     ✓ SNF: ${snfKg.toFixed(6)} kg (${snfVal}%)`);
        steps.push(`     ✓ Total Solids: ${totalSolidsKg.toFixed(6)} kg (${totalSolidsPercent.toFixed(4)}%)`);
        steps.push(`     ✓ Water: ${waterKg.toFixed(6)} kg (${waterPercent.toFixed(4)}%)`);

        setCalculationSteps(steps);
        setResult({
            milkQtyKg: milkWeight,
            milkQtyLiters: milkLiters,
            fatKg,
            snfKg,
            totalSolidsKg,
            waterKg,
            fatPercent: fatVal,
            snfPercent: snfVal
        });
    }, [inputs, unit]);

    return (
        <CalculatorCard 
            title="Kg Fat & SNF Calculator" 
            description="Calculate the exact amount (in kg) of Fat and SNF from a given quantity of milk"
        >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Milk Quantity */}
                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                        <Milk className="w-5 h-5" />
                        Milk Quantity
                    </h3>
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Quantity</Label>
                        <div className="flex gap-2">
                            <Input 
                                type="number" 
                                name="qty" 
                                value={inputs.qty} 
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)} 
                                className="flex-1 h-11 text-base font-medium border-2 border-blue-300"
                                placeholder="1000"
                                step="0.001"
                            />
                            <Select value={unit} onValueChange={(v) => setUnit(v as 'liter' | 'kg')}>
                                <SelectTrigger className="w-[110px] h-11 border-2 border-blue-300 font-semibold">
                                    <SelectValue/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="liter" className="text-base font-medium">Liters</SelectItem>
                                    <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Composition */}
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                        <Beaker className="w-5 h-5" />
                        Milk Composition
                    </h3>
                    <div className="space-y-4">
                        <MemoizedInputField 
                            label="Fat %" 
                            value={inputs.fat} 
                            name="fat" 
                            setter={handleInputChange} 
                            placeholder="4.5" 
                        />
                        <MemoizedInputField 
                            label="SNF %" 
                            value={inputs.snf} 
                            name="snf" 
                            setter={handleInputChange} 
                            placeholder="8.5" 
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Fat & SNF in Kg
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ Composition in Kilograms
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* Total Milk */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-teal-300">
                                    <h5 className="font-bold text-lg text-teal-800 mb-3 flex items-center gap-2">
                                        <Milk className="w-5 h-5" />
                                        Total Milk
                                    </h5>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Weight</p>
                                            <p className="text-3xl font-bold text-teal-700">{result.milkQtyKg.toFixed(4)}</p>
                                            <p className="text-sm text-teal-600 font-semibold">kg</p>
                                        </div>
                                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Volume</p>
                                            <p className="text-3xl font-bold text-teal-700">{result.milkQtyLiters.toFixed(4)}</p>
                                            <p className="text-sm text-teal-600 font-semibold">liters</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Composition Breakdown */}
                                <div className="bg-white/90 p-5 rounded-xl shadow-md border-2 border-green-300">
                                    <h5 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
                                        <Weight className="w-5 h-5" />
                                        Composition Breakdown
                                    </h5>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300 text-center">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Fat</p>
                                            <p className="text-3xl font-bold text-yellow-700">{result.fatKg.toFixed(4)}</p>
                                            <p className="text-sm text-yellow-600 font-semibold">kg</p>
                                            <Badge className="bg-yellow-500 mt-2">{result.fatPercent}%</Badge>
                                        </div>
                                        <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-300 text-center">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">SNF</p>
                                            <p className="text-3xl font-bold text-pink-700">{result.snfKg.toFixed(4)}</p>
                                            <p className="text-sm text-pink-600 font-semibold">kg</p>
                                            <Badge className="bg-pink-500 mt-2">{result.snfPercent}%</Badge>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Total Solids</p>
                                            <p className="text-3xl font-bold text-purple-700">{result.totalSolidsKg.toFixed(4)}</p>
                                            <p className="text-sm text-purple-600 font-semibold">kg</p>
                                            <Badge className="bg-purple-500 mt-2">
                                                {(result.fatPercent + result.snfPercent).toFixed(2)}%
                                            </Badge>
                                        </div>
                                        <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-300 text-center">
                                            <p className="text-xs font-semibold text-muted-foreground mb-1">Water</p>
                                            <p className="text-3xl font-bold text-cyan-700">{result.waterKg.toFixed(4)}</p>
                                            <p className="text-sm text-cyan-600 font-semibold">kg</p>
                                            <Badge className="bg-cyan-500 mt-2">
                                                {(100 - result.fatPercent - result.snfPercent).toFixed(2)}%
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete Calculation Process
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
                                            step.includes('✓') && 'text-green-700 font-bold',
                                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                                            step.includes('⚖️') && 'text-indigo-700 font-bold text-lg',
                                            step.includes('🧈') && 'text-amber-700 font-bold text-lg',
                                            step.includes('🥛') && 'text-pink-700 font-bold text-lg',
                                            step.includes('📦') && 'text-purple-700 font-bold text-lg',
                                            step.includes('💧') && 'text-cyan-700 font-bold text-lg',
                                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('✓') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ All calculations shown with complete mass breakdown verification!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}
function ClrIncreaseCalc() {
    const [inputs, setInputs] = useState({
        initialVolume: '1000',
        initialClr: '27',
        targetClr: '29',
        smpSnf: '96'
    });
    const [volumeUnit, setVolumeUnit] = useState<'kg' | 'liters'>('liters');
    const [result, setResult] = useState<{
        smpNeeded: number;
        snfToAdd: number;
        initialVolumeLiters: number;
        initialVolumeKg: number;
        finalVolume: number;
        clrIncrease: number;
        snfIncrease: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);
        
        const initialVolumeValue = parseFloat(inputs.initialVolume);
        const C0 = parseFloat(inputs.initialClr);
        const Ct = parseFloat(inputs.targetClr);
        const Ps = parseFloat(inputs.smpSnf);

        if ([initialVolumeValue, C0, Ct, Ps].some(isNaN) || initialVolumeValue <= 0 || Ps <= 0) {
            setError("⚠️ Please fill all fields with valid positive numbers.");
            return;
        }
        
        if (Ct <= C0) {
            setError("❌ Target CLR must be higher than Initial CLR.");
            return;
        }
        
        const steps: string[] = [];
        
        // ============ STEP 1: INPUT VALUES ============
        steps.push(`📊 **═══════════ STEP 1: INPUT VALUES ═══════════**`);
        steps.push(`\n   Initial Milk Volume: ${initialVolumeValue} ${volumeUnit}`);
        steps.push(`   Initial CLR: ${C0}`);
        steps.push(`   Target CLR: ${Ct}`);
        steps.push(`   SMP SNF Content: ${Ps}%`);
        steps.push(`   Milk Density: ${componentProps.milkDensity} kg/liter`);
        
        // ============ STEP 2: CONVERT TO LITERS ============
        const volumeInLiters = volumeUnit === 'kg' ? initialVolumeValue / componentProps.milkDensity : initialVolumeValue;
        const volumeInKg = volumeUnit === 'liters' ? initialVolumeValue * componentProps.milkDensity : initialVolumeValue;
        
        steps.push(`\n\n⚖️ **═══════════ STEP 2: STANDARDIZE VOLUME ═══════════**`);
        
        if (volumeUnit === 'kg') {
            steps.push(`\n   Converting Kg to Liters:`);
            steps.push(`     Volume (liters) = Weight (kg) / Density`);
            steps.push(`                     = ${initialVolumeValue} / ${componentProps.milkDensity}`);
            steps.push(`                     = ${volumeInLiters.toFixed(6)} liters`);
        } else {
            steps.push(`\n   Already in Liters: ${volumeInLiters.toFixed(6)} liters`);
            steps.push(`\n   Converting to Kg:`);
            steps.push(`     Weight (kg) = Volume (liters) × Density`);
            steps.push(`                 = ${initialVolumeValue} × ${componentProps.milkDensity}`);
            steps.push(`                 = ${volumeInKg.toFixed(6)} kg`);
        }

        // ============ STEP 3: CALCULATE CLR INCREASE ============
        steps.push(`\n\n📈 **═══════════ STEP 3: CALCULATE CLR INCREASE ═══════════**`);
        
        const clrIncrease = Ct - C0;
        
        steps.push(`\n   Required CLR Increase:`);
        steps.push(`     CLR Increase = Target CLR - Initial CLR`);
        steps.push(`                  = ${Ct} - ${C0}`);
        steps.push(`                  = ${clrIncrease.toFixed(6)}`);

        // ============ STEP 4: CALCULATE SNF TO ADD ============
        steps.push(`\n\n🥛 **═══════════ STEP 4: CALCULATE SNF REQUIRED ═══════════**`);
        
        const snfKgToAdd = (volumeInLiters * clrIncrease * 0.25) / 100;
        
        steps.push(`\n   Formula: SNF to Add (kg) = (Volume × CLR Increase × 0.25) / 100`);
        steps.push(`\n   Note: 0.25 is the conversion factor (1 CLR unit ≈ 0.25% SNF per liter)`);
        steps.push(`\n   Calculation:`);
        steps.push(`     SNF to Add = (${volumeInLiters.toFixed(6)} × ${clrIncrease.toFixed(6)} × 0.25) / 100`);
        steps.push(`                = (${(volumeInLiters * clrIncrease).toFixed(8)} × 0.25) / 100`);
        steps.push(`                = ${(volumeInLiters * clrIncrease * 0.25).toFixed(8)} / 100`);
        steps.push(`                = ${snfKgToAdd.toFixed(8)} kg`);

        // ============ STEP 5: CALCULATE SMP NEEDED ============
        steps.push(`\n\n📦 **═══════════ STEP 5: CALCULATE SMP REQUIRED ═══════════**`);
        
        const smpNeeded = (snfKgToAdd * 100) / Ps;
        
        steps.push(`\n   Formula: SMP Needed = (SNF to Add × 100) / SMP SNF%`);
        steps.push(`\n   Calculation:`);
        steps.push(`     SMP Needed = (${snfKgToAdd.toFixed(8)} × 100) / ${Ps}`);
        steps.push(`                = ${(snfKgToAdd * 100).toFixed(8)} / ${Ps}`);
        steps.push(`                = ${smpNeeded.toFixed(8)} kg`);

        // ============ STEP 6: CALCULATE FINAL VOLUME ============
        steps.push(`\n\n📊 **═══════════ STEP 6: FINAL BATCH VOLUME ═══════════**`);
        
        const finalVolume = volumeInKg + smpNeeded;
        
        steps.push(`\n   Final Volume Calculation:`);
        steps.push(`     Final Volume = Initial Volume + SMP Added`);
        steps.push(`                  = ${volumeInKg.toFixed(6)} + ${smpNeeded.toFixed(8)}`);
        steps.push(`                  = ${finalVolume.toFixed(8)} kg`);

        // ============ STEP 7: CALCULATE SNF INCREASE ============
        steps.push(`\n\n🔬 **═══════════ STEP 7: SNF PERCENTAGE INCREASE ═══════════**`);
        
        const snfIncrease = (snfKgToAdd / volumeInKg) * 100;
        
        steps.push(`\n   SNF % Increase Calculation:`);
        steps.push(`     SNF Increase% = (SNF Added / Initial Volume) × 100`);
        steps.push(`                   = (${snfKgToAdd.toFixed(8)} / ${volumeInKg.toFixed(6)}) × 100`);
        steps.push(`                   = ${snfIncrease.toFixed(8)}%`);

        // ============ STEP 8: SUMMARY ============
        steps.push(`\n\n✨ **═══════════ STEP 8: FINAL SUMMARY ═══════════**`);
        steps.push(`\n   To increase CLR from ${C0} to ${Ct}:`);
        steps.push(`\n   Initial Milk:`);
        steps.push(`     Volume: ${volumeInLiters.toFixed(6)} liters (${volumeInKg.toFixed(6)} kg)`);
        steps.push(`     CLR: ${C0}`);
        steps.push(`\n   Required Addition:`);
        steps.push(`     ✓ SMP: ${smpNeeded.toFixed(6)} kg (${Ps}% SNF)`);
        steps.push(`     ✓ SNF Addition: ${snfKgToAdd.toFixed(6)} kg`);
        steps.push(`\n   Final Batch:`);
        steps.push(`     Total Volume: ${finalVolume.toFixed(6)} kg`);
        steps.push(`     CLR Increase: ${clrIncrease.toFixed(4)} units`);
        steps.push(`     SNF Increase: ${snfIncrease.toFixed(4)}%`);

        setCalculationSteps(steps);
        setResult({
            smpNeeded,
            snfToAdd: snfKgToAdd,
            initialVolumeLiters: volumeInLiters,
            initialVolumeKg: volumeInKg,
            finalVolume,
            clrIncrease,
            snfIncrease
        });
    }, [inputs, volumeUnit]);

    return (
        <CalculatorCard 
            title="CLR Increase Calculator (SMP Addition)" 
            description="Calculate the precise amount of Skimmed Milk Powder (SMP) needed to increase CLR of milk batch"
        >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Initial Milk */}
                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                        <Milk className="w-5 h-5" />
                        Initial Milk
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Volume</Label>
                            <div className="flex gap-2">
                                <Input 
                                    type="number" 
                                    value={inputs.initialVolume} 
                                    onChange={(e) => handleInputChange('initialVolume', e.target.value)} 
                                    className="flex-1 h-11 text-base font-medium border-2 border-blue-300"
                                    step="0.001"
                                />
                                <Select value={volumeUnit} onValueChange={(v) => setVolumeUnit(v as any)}>
                                    <SelectTrigger className="w-[110px] h-11 border-2 border-blue-300 font-semibold">
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="liters" className="text-base font-medium">Liters</SelectItem>
                                        <SelectItem value="kg" className="text-base font-medium">Kg</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <MemoizedInputField 
                            label="Initial CLR" 
                            value={inputs.initialClr} 
                            name="initialClr" 
                            setter={handleInputChange} 
                        />
                    </div>
                </div>

                {/* Target & SMP */}
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                        <Target className="w-5 h-5" />
                        Target & SMP Specs
                    </h3>
                    <div className="space-y-4">
                        <MemoizedInputField 
                            label="Target CLR" 
                            value={inputs.targetClr} 
                            name="targetClr" 
                            setter={handleInputChange} 
                        />
                        <MemoizedInputField 
                            label="SNF in SMP (%)" 
                            value={inputs.smpSnf} 
                            name="smpSnf" 
                            setter={handleInputChange} 
                        />
                        <Alert className="bg-green-200 border-2 border-green-400">
                            <Info className="h-4 w-4" />
                            <AlertDescription className="text-xs font-semibold text-green-900">
                                Standard SMP: 96% SNF
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <ChevronsUp className="w-6 h-6 mr-3" />
                Calculate SMP Needed for CLR Increase
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6 space-y-6">
                    {/* Result Summary */}
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ SMP Required
                        </AlertTitle>
                        <AlertDescription>
                            <div className="space-y-5">
                                {/* SMP Needed - Main Result */}
                                <div className="bg-white/90 p-8 rounded-xl shadow-md border-2 border-amber-300 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <Weight className="w-6 h-6 text-amber-700" />
                                        <p className="text-base font-bold text-muted-foreground">Add SMP (Skim Milk Powder)</p>
                                    </div>
                                    <p className="text-6xl font-extrabold text-amber-700 mb-2">
                                        {result.smpNeeded.toFixed(4)}
                                    </p>
                                    <p className="text-2xl text-amber-600 font-bold">kg</p>
                                    <Badge className="bg-amber-500 mt-4 text-base">
                                        {inputs.smpSnf}% SNF Content
                                    </Badge>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">Initial CLR</p>
                                        <p className="text-2xl font-bold text-blue-700">{inputs.initialClr}</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">Target CLR</p>
                                        <p className="text-2xl font-bold text-green-700">{inputs.targetClr}</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">CLR Increase</p>
                                        <p className="text-2xl font-bold text-purple-700">+{result.clrIncrease.toFixed(4)}</p>
                                    </div>
                                    <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">SNF Added</p>
                                        <p className="text-2xl font-bold text-cyan-700">{result.snfToAdd.toFixed(4)}</p>
                                        <p className="text-xs text-cyan-600">kg</p>
                                    </div>
                                    <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">SNF Increase</p>
                                        <p className="text-2xl font-bold text-pink-700">+{result.snfIncrease.toFixed(4)}</p>
                                        <p className="text-xs text-pink-600">%</p>
                                    </div>
                                    <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-300 text-center">
                                        <p className="text-xs font-semibold text-muted-foreground mb-1">Final Volume</p>
                                        <p className="text-2xl font-bold text-teal-700">{result.finalVolume.toFixed(4)}</p>
                                        <p className="text-xs text-teal-600">kg</p>
                                    </div>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Calculation Steps */}
                    <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                        <h4 className="font-extrabold text-xl mb-4 flex items-center gap-2 text-gray-800">
                            <Calculator className="w-6 h-6" />
                            Complete CLR Increase Calculation
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
                                            step.includes('✓') && 'text-green-700 font-bold',
                                            step.includes('📊') && 'text-blue-700 font-bold text-lg',
                                            step.includes('⚖️') && 'text-indigo-700 font-bold text-lg',
                                            step.includes('📈') && 'text-green-700 font-bold text-lg',
                                            step.includes('🥛') && 'text-cyan-700 font-bold text-lg',
                                            step.includes('📦') && 'text-amber-700 font-bold text-lg',
                                            step.includes('🔬') && 'text-pink-700 font-bold text-lg',
                                            step.includes('✨') && 'text-green-700 font-extrabold text-lg',
                                            !step.includes('**') && !step.includes('✅') && !step.includes('✓') && !step.includes('═══') && 'text-gray-700'
                                        )}
                                    >
                                        {step.replace(/\*\*/g, '')}
                                    </p>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                            <p className="text-sm text-green-900 font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                ✓ Complete SMP addition calculation with CLR increase formula verification!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </CalculatorCard>
    );
}
function ClrBlendingCalc() {
    const [highClr, setHighClr] = useState('30');
    const [lowClr, setLowClr] = useState('26');
    const [targetClr, setTargetClr] = useState('28');
    const [batchSize, setBatchSize] = useState('100');
    const [batchUnit, setBatchUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<{
        qtyHigh: number;
        qtyLow: number;
        qtyHighLiters: number;
        qtyLowLiters: number;
        totalQtyKg: number;
        partsHigh: number;
        partsLow: number;
        totalParts: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        setCalculationSteps([]);

        const h = parseFloat(highClr);
        const l = parseFloat(lowClr);
        const t = parseFloat(targetClr);
        const qInput = parseFloat(batchSize);
        
        const q = batchUnit === 'liters' ? qInput * componentProps.milkDensity : qInput;

        if (isNaN(h) || isNaN(l) || isNaN(t) || isNaN(q)) {
            setError("⚠️ Please fill all fields with valid numbers.");
            return;
        }

        if (q <= 0) {
            setError("⚠️ Batch size must be positive.");
            return;
        }

        if (t > h || t < l) {
            setError(`❌ Target CLR (${t}) must be between low CLR (${l}) and high CLR (${h}).`);
            return;
        }

        if (Math.abs(h - l) < 0.001) {
            setError("❌ High CLR and low CLR must be different.");
            return;
        }

        const steps: string[] = [];
        
        steps.push(`📊 **═══════════ STEP 1: PEARSON SQUARE FOR CLR ═══════════**`);
        steps.push(`\n   High CLR: ${h}`);
        steps.push(`   Low CLR: ${l}`);
        steps.push(`   Target CLR: ${t}`);
        steps.push(`   Batch Size: ${qInput} ${batchUnit} → ${q.toFixed(6)} kg`);

        const partsHigh = t - l;
        const partsLow = h - t;
        const totalParts = partsHigh + partsLow;

        steps.push(`\n   Parts High CLR = Target - Low = ${t} - ${l} = ${partsHigh.toFixed(8)}`);
        steps.push(`   Parts Low CLR = High - Target = ${h} - ${t} = ${partsLow.toFixed(8)}`);
        steps.push(`   Total Parts = ${totalParts.toFixed(8)}`);

        const qtyHigh = (q * partsHigh) / totalParts;
        const qtyLow = (q * partsLow) / totalParts;

        steps.push(`\n   High CLR Qty = ${qtyHigh.toFixed(8)} kg`);
        steps.push(`   Low CLR Qty = ${qtyLow.toFixed(8)} kg`);

        setCalculationSteps(steps);
        setResult({
            qtyHigh,
            qtyLow,
            qtyHighLiters: qtyHigh / componentProps.milkDensity,
            qtyLowLiters: qtyLow / componentProps.milkDensity,
            totalQtyKg: q,
            partsHigh,
            partsLow,
            totalParts
        });
    }, [highClr, lowClr, targetClr, batchSize, batchUnit]);

    return (
        <CalculatorCard 
            title="CLR Blending (Pearson Square)" 
            description="Calculate proportions to blend two milks with different CLR values to achieve target CLR"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                        <TrendingUp className="w-5 h-5" />
                        High CLR Milk
                    </h3>
                    <Input 
                        type="number" 
                        value={highClr} 
                        onChange={e => setHighClr(e.target.value)} 
                        className="h-11 text-base font-medium border-2 border-green-300"
                        placeholder="30"
                    />
                </div>

                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                        <TrendingDown className="w-5 h-5" />
                        Low CLR Milk
                    </h3>
                    <Input 
                        type="number" 
                        value={lowClr} 
                        onChange={e => setLowClr(e.target.value)} 
                        className="h-11 text-base font-medium border-2 border-blue-300"
                        placeholder="26"
                    />
                </div>

                <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 p-6 rounded-xl border-2 border-purple-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-purple-800">
                        <Target className="w-5 h-5" />
                        Target CLR
                    </h3>
                    <Input 
                        type="number" 
                        value={targetClr} 
                        onChange={e => setTargetClr(e.target.value)} 
                        className="h-11 text-base font-medium border-2 border-purple-300"
                        placeholder="28"
                    />
                </div>

                <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-6 rounded-xl border-2 border-amber-400 shadow-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-800">
                        <Scale className="w-5 h-5" />
                        Batch Size
                    </h3>
                    <div className="flex gap-2">
                        <Input 
                            type="number" 
                            value={batchSize} 
                            onChange={e => setBatchSize(e.target.value)} 
                            className="flex-1 h-11 text-base font-medium border-2 border-amber-300"
                            placeholder="100"
                        />
                        <Select value={batchUnit} onValueChange={(v: 'kg' | 'liters') => setBatchUnit(v)}>
                            <SelectTrigger className="w-[110px] h-11 border-2 border-amber-300 font-semibold">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="kg" className="text-base">Kg</SelectItem>
                                <SelectItem value="liters" className="text-base">Liters</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all"
            >
                <Blend className="w-6 h-6 mr-3" />
                Calculate CLR Blend
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 border-2 shadow-lg">
                    <AlertTriangle className="h-6 w-6" />
                    <AlertDescription className="text-base font-semibold">{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                <div className="mt-6">
                    <Alert className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-3 border-green-500 shadow-2xl">
                        <CheckCircle2 className="h-8 w-8 text-green-700" />
                        <AlertTitle className="text-2xl font-extrabold text-green-900 mb-4">
                            ✅ CLR Blending Result
                        </AlertTitle>
                        <AlertDescription>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                                    <p className="text-sm font-bold text-green-900 mb-2">High CLR Milk ({highClr})</p>
                                    <p className="text-4xl font-extrabold text-green-700">{result.qtyHigh.toFixed(4)}</p>
                                    <p className="text-lg text-green-600">kg ({result.qtyHighLiters.toFixed(4)} L)</p>
                                </div>
                                <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
                                    <p className="text-sm font-bold text-blue-900 mb-2">Low CLR Milk ({lowClr})</p>
                                    <p className="text-4xl font-extrabold text-blue-700">{result.qtyLow.toFixed(4)}</p>
                                    <p className="text-lg text-blue-600">kg ({result.qtyLowLiters.toFixed(4)} L)</p>
                                </div>
                            </div>
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CalculatorCard>
    );
}
    

    

    

    

    

    
