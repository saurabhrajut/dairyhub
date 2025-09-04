
"use client"

import { useState, memo, useCallback, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getSnf, componentProps } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Blend, Milk, SlidersHorizontal, Combine, Bot, Calculator, Settings, ChevronsUp, Target, Droplets, Info, Weight, Thermometer, ShieldAlert } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type CalculatorType = 'fat-snf-clr-ts' | 'fat-blending' | 'fat-snf-adjustment' | 'reconstituted-milk' | 'recombined-milk' | 'clr-blending' | 'custom-calculator' | 'milk-blending' | 'clr-increase' | 'fat-clr-maintainer' | 'two-milk-blending-target' | 'clr-correction' | 'kg-fat-snf' | 'fat-reduction-clr-maintain' | 'two-component-standardization' | 'multi-component-batch';

const calculatorsInfo = {
    'fat-snf-clr-ts': { title: "Fat, SNF, CLR & TS", icon: Calculator, component: FatSnfClrTsCalc },
    'milk-blending': { title: "Milk Blending", icon: Blend, component: MilkBlendingCalc },
    'two-milk-blending-target': { title: "Two-Milk Blending (to Target)", icon: Target, component: TwoMilkBlendingToTargetCalc },
    'fat-reduction-clr-maintain': { title: "Fat & CLR Corrector", icon: ShieldAlert, component: FatReductionClrMaintainCalc },
    'two-component-standardization': { title: "Two-Component Standardization", icon: Combine, component: TwoComponentStandardizationCalc },
    'multi-component-batch': { title: "Multi-Component Batch", icon: Combine, component: MultiComponentBatchCalc },
    'custom-calculator': { title: 'Custom Calculator', icon: Settings, component: CustomStandardizationCalc },
    'clr-increase': { title: 'CLR Increase (by SMP)', icon: ChevronsUp, component: ClrIncreaseCalc },
    'fat-clr-maintainer': { title: 'Fat & CLR Maintainer', icon: Target, component: FatClrMaintainerCalc },
    'fat-blending': { title: "Fat Blending (Pearson)", icon: Blend, component: FatBlendingCalc },
    'fat-snf-adjustment': { title: "Fat & SNF Adjustment", icon: SlidersHorizontal, component: FatSnfAdjustmentCalc },
    'reconstituted-milk': { title: "Reconstituted Milk", icon: Milk, component: ReconstitutedMilkCalc },
    'recombined-milk': { title: "Recombined Milk", icon: Combine, component: RecombinedMilkCalc },
    'clr-blending': { title: "CLR Blending (Pearson)", icon: Bot, component: ClrBlendingCalc },
    'clr-correction': { title: "CLR Correction", icon: Thermometer, component: ClrCorrectionCalc },
    'kg-fat-snf': { title: "Kg Fat & SNF", icon: Weight, component: KgFatSnfCalc },
};

export function StandardizationIIModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const handleBack = useCallback(() => setActiveCalculator(null), []);

  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) {
            setIsOpen(false);
            setActiveCalculator(null);
        } else {
            setIsOpen(true);
        }
    }}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 sm:p-6">
        {activeCalculator && ActiveCalculatorComponent ? (
          <>
            <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
              <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <DialogTitle className="text-xl font-bold font-headline">{calculatorsInfo[activeCalculator].title}</DialogTitle>
                <DialogDescription>Calculate specific dairy parameters.</DialogDescription>
              </div>
            </DialogHeader>
            <ScrollArea className="h-full mt-4 pr-4">
              <div className="p-4 sm:p-0">
                <ActiveCalculatorComponent />
              </div>
            </ScrollArea>
          </>
        ) : (
          <>
            <DialogHeader className="p-4 sm:p-0">
              <DialogTitle className="text-3xl font-bold text-center font-headline">Advanced Standardization</DialogTitle>
              <DialogDescription className="text-center">Advanced calculators for precise dairy processing.</DialogDescription>
            </DialogHeader>
            <ScrollArea className="flex-1 mt-4 pr-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {Object.entries(calculatorsInfo).map(([key, { title, icon: Icon }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCalculator(key as CalculatorType)}
                    className="flex flex-col items-center justify-center p-6 bg-card hover:bg-primary/10 rounded-xl shadow-sm border text-center aspect-square transition-all duration-200"
                  >
                    <Icon className="w-12 h-12 text-primary mb-3" />
                    <span className="font-semibold font-headline text-card-foreground">{title}</span>
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

function MultiComponentBatchCalc() {
    const [inputs, setInputs] = useState({
        // Target Batch
        targetQty: '800', targetFat: '4.0', targetClr: '31.0',
        // Fixed Milk
        fixedQty: '70', fixedFat: '1.1', fixedClr: '31.0',
        // Available Milk 1 (Skim)
        avail1Fat: '0.05', avail1Clr: '31.0',
        // Available Milk 2 (Rich)
        avail2Fat: '5.8', avail2Clr: '28.0',
        // Powder for CLR Adjustment
        smpTs: '96'
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);

        const i = {
            Q_target: parseFloat(inputs.targetQty), F_target: parseFloat(inputs.targetFat), C_target: parseFloat(inputs.targetClr),
            Q_fixed: parseFloat(inputs.fixedQty), F_fixed: parseFloat(inputs.fixedFat), C_fixed: parseFloat(inputs.fixedClr),
            F_avail1: parseFloat(inputs.avail1Fat), C_avail1: parseFloat(inputs.avail1Clr),
            F_avail2: parseFloat(inputs.avail2Fat), C_avail2: parseFloat(inputs.avail2Clr),
            SMP_TS: parseFloat(inputs.smpTs)
        };

        if (Object.values(i).some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        if (i.Q_fixed >= i.Q_target) {
            setError("Fixed milk quantity cannot be greater than or equal to the total target quantity.");
            return;
        }

        // Step 1: Calculate remaining quantity and required properties
        const Q_remaining = i.Q_target - i.Q_fixed;
        const Total_Fat_Needed = i.Q_target * i.F_target;
        const Fat_From_Fixed = i.Q_fixed * i.F_fixed;
        const Fat_Needed_In_Remaining = Total_Fat_Needed - Fat_From_Fixed;
        const F_avg_remaining_needed = (Fat_Needed_In_Remaining / Q_remaining);

        if (F_avg_remaining_needed > i.F_avail2 || F_avg_remaining_needed < i.F_avail1) {
            setError(`Target fat of ${F_avg_remaining_needed.toFixed(2)}% for the remaining milk is not achievable with the available milks (0.05% and 5.8%).`);
            return;
        }

        // Step 2: Use Pearson Square to find quantities of available milks
        const highParts = F_avg_remaining_needed - i.F_avail1;
        const lowParts = i.F_avail2 - F_avg_remaining_needed;
        const totalParts = highParts + lowParts;
        
        if(totalParts === 0) {
            setError("Cannot calculate blend as the fat percentages of available milks are the same.");
            return;
        }
        
        const Q_avail1 = (Q_remaining * lowParts) / totalParts; // Skim
        const Q_avail2 = (Q_remaining * highParts) / totalParts; // Rich
        
        // Step 3: Check CLR and calculate SMP needed for adjustment
        const Total_CLR_Kg_Fixed = i.Q_fixed * i.C_fixed;
        const Total_CLR_Kg_Avail1 = Q_avail1 * i.C_avail1;
        const Total_CLR_Kg_Avail2 = Q_avail2 * i.C_avail2;
        const Initial_Blended_CLR = (Total_CLR_Kg_Fixed + Total_CLR_Kg_Avail1 + Total_CLR_Kg_Avail2) / i.Q_target;
        
        const CLR_diff = i.C_target - Initial_Blended_CLR;
        let smpNeeded = 0;
        let finalMessage = "";

        if (Math.abs(CLR_diff) < 0.05) {
            finalMessage = "No CLR adjustment needed.";
        } else if (CLR_diff > 0) { // Need to increase CLR
            const smpSolidsPercent = i.SMP_TS;
            smpNeeded = (i.Q_target * CLR_diff * 0.25) / smpSolidsPercent;
            finalMessage = `The initial blend resulted in a CLR of <strong>${Initial_Blended_CLR.toFixed(2)}</strong>. To reach the target of ${i.C_target}, SMP must be added.`;
        } else { // CLR is too high, need water
            finalMessage = `The initial blend resulted in a CLR of <strong>${Initial_Blended_CLR.toFixed(2)}</strong>, which is higher than the target. This scenario requires water addition, which this calculator does not currently support.`;
            setError(finalMessage);
            return;
        }

        let resultHTML = `<h4 class='font-bold text-md'>Blending Plan:</h4>
            <ul class='list-disc list-inside mt-2 text-lg'>
                <li>Fixed Milk (1.1% Fat): <strong class='text-gray-700'>${i.Q_fixed.toFixed(2)} Ltr</strong> (Given)</li>
                <li>Skim Milk (0.05% Fat): <strong class='text-blue-700'>${Q_avail1.toFixed(2)} Ltr</strong></li>
                <li>Rich Milk (5.8% Fat): <strong class='text-green-700'>${Q_avail2.toFixed(2)} Ltr</strong></li>
            </ul>
            <hr class='my-3' />
            <h4 class='font-bold text-md'>CLR Adjustment:</h4>
            <p class='text-sm'>${finalMessage}</p>
            ${smpNeeded > 0 ? `<p class='text-lg mt-2'>Add SMP (~${i.SMP_TS}% TS): <strong class='text-purple-700'>${smpNeeded.toFixed(3)} kg</strong></p>` : ''}
        `;
        
        setResult(resultHTML);

    }, [inputs]);

    return (
        <CalculatorCard title="Multi-Component Batch Calculator" description="Standardize a batch using a fixed quantity of one milk, and balancing with two other available milks, with CLR adjustment using SMP.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {/* Target Batch */}
                <div className="bg-green-50 p-4 rounded-lg space-y-3 border border-green-200">
                    <h3 className="font-semibold text-gray-700 font-headline">1. Target Batch</h3>
                    <MemoizedInputField label="Total Quantity (Ltr)" value={inputs.targetQty} name="targetQty" setter={handleInputChange} />
                    <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                    <MemoizedInputField label="Target CLR" value={inputs.targetClr} name="targetClr" setter={handleInputChange} />
                </div>
                {/* Fixed Milk */}
                <div className="bg-yellow-50 p-4 rounded-lg space-y-3 border border-yellow-200">
                     <h3 className="font-semibold text-gray-700 font-headline">2. Fixed Milk</h3>
                    <MemoizedInputField label="Quantity (Ltr)" value={inputs.fixedQty} name="fixedQty" setter={handleInputChange} />
                    <MemoizedInputField label="Fat %" value={inputs.fixedFat} name="fixedFat" setter={handleInputChange} />
                    <MemoizedInputField label="CLR" value={inputs.fixedClr} name="fixedClr" setter={handleInputChange} />
                </div>
                {/* Available Milks & SMP */}
                <div className="bg-blue-50 p-4 rounded-lg space-y-3 border border-blue-200">
                     <h3 className="font-semibold text-gray-700 font-headline">3. Available Sources</h3>
                    <MemoizedInputField label="Skim Milk Fat %" value={inputs.avail1Fat} name="avail1Fat" setter={handleInputChange} />
                    <MemoizedInputField label="Skim Milk CLR" value={inputs.avail1Clr} name="avail1Clr" setter={handleInputChange} />
                    <hr/>
                    <MemoizedInputField label="Rich Milk Fat %" value={inputs.avail2Fat} name="avail2Fat" setter={handleInputChange} />
                    <MemoizedInputField label="Rich Milk CLR" value={inputs.avail2Clr} name="avail2Clr" setter={handleInputChange} />
                     <hr/>
                    <MemoizedInputField label="SMP Total Solids %" value={inputs.smpTs} name="smpTs" setter={handleInputChange} />
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Batch</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                <Alert className="mt-4">
                    <AlertTitle>Batch Standardization Plan</AlertTitle>
                    <AlertDescription>
                        <div className="mt-2 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: result }}/>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
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
    if (value !== internalValue && document.activeElement?.getAttribute('name') !== name) {
        setInternalValue(value);
    }
    
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

const snfFormulas: Record<string, { name: string; formulaText: string; calc: (clr: number, fat: number, c?: number) => number; inverse: (snf: number, fat: number, c?: number) => number }> = {
    'isi': { name: 'ISI / BIS (Official)', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.44', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.44, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.44) * 4 },
    'richmond': { name: 'Richmond’s Formula', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.36', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.36, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.36) * 4 },
    'cooperative': { name: 'Modified ISI / Cooperative', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.14', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.14, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.14) * 4 },
    'dairy_union': { name: 'Simplified Dairy Union', formulaText: 'SNF % = (CLR/4) + (Fat/5) + 0.44', calc: (clr, fat) => (clr / 4) + (fat / 5) + 0.44, inverse: (snf, fat) => (snf - (fat/5) - 0.44) * 4 },
    'punjab_haryana': { name: 'Punjab / Haryana Variation', formulaText: 'SNF % = (CLR/4) + (0.22 * Fat) + 0.36', calc: (clr, fat) => (clr / 4) + (0.22 * fat) + 0.36, inverse: (snf, fat) => (snf - (0.22 * fat) - 0.36) * 4 },
    'andhra': { name: 'Andhra Pradesh Practice', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.35', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.35, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.35) * 4 },
    'karnataka_tamil': { name: 'Karnataka / Tamil Nadu Practice', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.20', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.20, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.20) * 4 },
    'general': { name: 'General Shortcut (Variable C)', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + C', calc: (clr, fat, c = 0.72) => (clr / 4) + (0.25 * fat) + c, inverse: (snf, fat, c = 0.72) => (snf - (0.25 * fat) - c) * 4 },
};

function CustomStandardizationCalc() {
    const [inputs, setInputs] = useState({
        milkQty: '1000', milkFat: '3.5', milkClr: '28.0',
        creamFat: '40', creamSnf: '5.4',
        smpFat: '1.0', smpSnf: '96.0',
        skimFat: '0.05', skimSnf: '8.8',
        reqFat: '4.5', reqClr: '28.5',
        formula: "isi",
        customC: "0.72"
    });

    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        const formulaKey = inputs.formula as keyof typeof snfFormulas;
        if (formulaKey === 'general') {
            return snfFormulas.general.calc(clr, fat, parseFloat(inputs.customC));
        }
        return snfFormulas[formulaKey].calc(clr, fat);
    }, [inputs.formula, inputs.customC]);

    const milkSnf = parseFloat(inputs.milkFat) && parseFloat(inputs.milkClr) ? calculateSnf(parseFloat(inputs.milkClr), parseFloat(inputs.milkFat)) : 0;
    const reqSnf = parseFloat(inputs.reqFat) && parseFloat(inputs.reqClr) ? calculateSnf(parseFloat(inputs.reqClr), parseFloat(inputs.reqFat)) : 0;


    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
    
        const i = {
            M: parseFloat(inputs.milkQty) || 0,
            Fm: parseFloat(inputs.milkFat) / 100,
            Sm: milkSnf / 100,
            Fc: parseFloat(inputs.creamFat) / 100,
            Sc: parseFloat(inputs.creamSnf) / 100,
            Fp: parseFloat(inputs.smpFat) / 100,
            Sp: parseFloat(inputs.smpSnf) / 100,
            Fs: parseFloat(inputs.skimFat) / 100,
            Ss: parseFloat(inputs.skimSnf) / 100,
            Fr: parseFloat(inputs.reqFat) / 100,
            Sr: reqSnf / 100
        };

        if (Object.values(i).some(v => isNaN(v)) || i.M <= 0) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        // Mass balance equations
        // For Fat: M*Fm + X*Fx + Y*Fy = (M+X+Y)*Fr
        // For SNF: M*Sm + X*Sx + Y*Sy = (M+X+Y)*Sr
        // Where X and Y are the quantities of the two ingredients to be added.
        
        let X = 0, Y = 0;
        let ingredientXName = "", ingredientYName = "";

        // Case 1: Fat and SNF are both low -> Add Cream and SMP
        if (i.Fr > i.Fm && i.Sr > i.Sm) {
            ingredientXName = "Cream"; ingredientYName = "SMP";
            const A1 = i.Fc - i.Fr, B1 = i.Fp - i.Fr, C1 = i.M * (i.Fr - i.Fm);
            const A2 = i.Sc - i.Sr, B2 = i.Sp - i.Sr, C2 = i.M * (i.Sr - i.Sm);
            const det = A1 * B2 - B1 * A2;
            if (Math.abs(det) < 1e-9) { setError("Cannot solve. Ingredients properties are too similar."); return; }
            X = (C1 * B2 - B1 * C2) / det;
            Y = (A1 * C2 - C1 * A2) / det;
        } 
        // Case 2: Fat is high, SNF is low -> Add Skim Milk and SMP
        else if (i.Fr < i.Fm && i.Sr > i.Sm) {
            ingredientXName = "Skim Milk"; ingredientYName = "SMP";
            const A1 = i.Fs - i.Fr, B1 = i.Fp - i.Fr, C1 = i.M * (i.Fr - i.Fm);
            const A2 = i.Ss - i.Sr, B2 = i.Sp - i.Sr, C2 = i.M * (i.Sr - i.Sm);
            const det = A1 * B2 - B1 * A2;
            if (Math.abs(det) < 1e-9) { setError("Cannot solve. Ingredients properties are too similar."); return; }
            X = (C1 * B2 - B1 * C2) / det;
            Y = (A1 * C2 - C1 * A2) / det;
        }
        // Case 3: Fat is low, SNF is high -> Add Cream and Water
        else if (i.Fr > i.Fm && i.Sr < i.Sm) {
             ingredientXName = "Cream"; ingredientYName = "Water";
             const A1 = i.Fc - i.Fr, B1 = 0 - i.Fr, C1 = i.M * (i.Fr - i.Fm);
             const A2 = i.Sc - i.Sr, B2 = 0 - i.Sr, C2 = i.M * (i.Sr - i.Sm);
             const det = A1 * B2 - B1 * A2;
             if (Math.abs(det) < 1e-9) { setError("Cannot solve. Ingredients properties are too similar."); return; }
             X = (C1 * B2 - B1 * C2) / det;
             Y = (A1 * C2 - C1 * A2) / det;
        }
        // Case 4: Fat is high, SNF is high -> Add Skim Milk and Water
        else if (i.Fr < i.Fm && i.Sr < i.Sm) {
             ingredientXName = "Skim Milk"; ingredientYName = "Water";
             const A1 = i.Fs - i.Fr, B1 = 0 - i.Fr, C1 = i.M * (i.Fr - i.Fm);
             const A2 = i.Ss - i.Sr, B2 = 0 - i.Sr, C2 = i.M * (i.Sr - i.Sm);
             const det = A1 * B2 - B1 * A2;
             if (Math.abs(det) < 1e-9) { setError("Cannot solve. Ingredients properties are too similar."); return; }
             X = (C1 * B2 - B1 * C2) / det;
             Y = (A1 * C2 - C1 * A2) / det;
        } else {
            setError("This combination is not standard (e.g., Fat is correct, but SNF is not). Please check your inputs or use a different calculator.");
            return;
        }


        if (X < 0 || Y < 0) {
            setError("Calculation resulted in negative values. This scenario is not supported. Please check inputs.");
            return;
        }

        const finalQty = i.M + X + Y;
        const finalFatMass = (i.M * i.Fm) + (X * (ingredientXName === "Cream" ? i.Fc : i.Fs)) + (Y * (ingredientYName === "SMP" ? i.Fp : 0));
        const finalSnfMass = (i.M * i.Sm) + (X * (ingredientXName === "Cream" ? i.Sc : i.Ss)) + (Y * (ingredientYName === "SMP" ? i.Sp : 0));

        const finalFatPercent = (finalFatMass / finalQty) * 100;
        const finalSnfPercent = (finalSnfMass / finalQty) * 100;
        
        let resultText = `<p>To standardize your milk, you need to:</p><ul class='list-disc list-inside mt-2 text-lg'>`;
        resultText += `<li>Add <strong>${ingredientXName}:</strong> ${X.toFixed(3)} kg</li>`;
        resultText += `<li>Add <strong>${ingredientYName}:</strong> ${Y.toFixed(3)} kg</li>`;
        resultText += "</ul>";
        
        resultText += "<hr class='my-4' />";
        resultText += "<h4 class='font-bold text-md'>Final Batch Summary:</h4><ul class='list-disc list-inside mt-2 text-lg'>";
        resultText += `<li><strong>Final Milk Quantity:</strong> ${finalQty.toFixed(3)} kg</li>`;
        resultText += `<li><strong>Final Fat % Achieved:</strong> ${finalFatPercent.toFixed(2)}%</li>`;
        resultText += `<li><strong>Final SNF % Achieved:</strong> ${finalSnfPercent.toFixed(2)}%</li>`;
        resultText += "</ul>";
    
        setResult(resultText);

    }, [inputs, milkSnf, reqSnf, calculateSnf]);

    return (
        <CalculatorCard title="Multi-Purpose Milk Standardization Calculator" description="A precise tool to adjust Fat and SNF using various sources. Enter all values; the calculator will determine what to add.">
             
             <div className="bg-muted/50 p-4 rounded-lg mb-6">
                 <Label>Select SNF Calculation Formula</Label>
                 <Select value={inputs.formula} onValueChange={(val) => handleInputChange('formula', val)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key}>
                                <div className="flex flex-col">
                                    <span className="font-semibold">{name}</span>
                                    <span className="text-xs text-muted-foreground">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                 </Select>
                 {inputs.formula === 'general' && (
                     <div className="mt-2">
                        <MemoizedInputField label="Custom Constant (C)" value={inputs.customC} name="customC" setter={handleInputChange} />
                     </div>
                 )}
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                
                <div className="space-y-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg border-b pb-2">1. Your Milk</h3>
                    <MemoizedInputField label="Milk Quantity (kg)" value={inputs.milkQty} name="milkQty" setter={handleInputChange} />
                    <MemoizedInputField label="Fat in Milk (%)" value={inputs.milkFat} name="milkFat" setter={handleInputChange} />
                    <MemoizedInputField label="CLR in Milk" value={inputs.milkClr} name="milkClr" setter={handleInputChange} />
                    <div className="text-sm p-2 bg-blue-100 rounded">Calculated SNF: <strong className="font-bold">{milkSnf.toFixed(2)}%</strong></div>
                </div>

                 <div className="space-y-4 bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg border-b pb-2">2. Your Target</h3>
                    <MemoizedInputField label="Required Fat (%)" value={inputs.reqFat} name="reqFat" setter={handleInputChange} />
                    <MemoizedInputField label="Required CLR" value={inputs.reqClr} name="reqClr" setter={handleInputChange} />
                     <div className="text-sm p-2 bg-green-100 rounded">Calculated Target SNF: <strong className="font-bold">{reqSnf.toFixed(2)}%</strong></div>
                </div>

                <div className="space-y-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 md:col-span-2">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg border-b pb-2">3. Available Sources Composition</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <MemoizedInputField label="Cream Fat (%)" value={inputs.creamFat} name="creamFat" setter={handleInputChange} />
                        <MemoizedInputField label="Cream SNF (%)" value={inputs.creamSnf} name="creamSnf" setter={handleInputChange} />
                        <MemoizedInputField label="SMP Fat (%)" value={inputs.smpFat} name="smpFat" setter={handleInputChange} />
                        <MemoizedInputField label="SMP SNF (%)" value={inputs.smpSnf} name="smpSnf" setter={handleInputChange} />
                         <MemoizedInputField label="Skim Milk Fat (%)" value={inputs.skimFat} name="skimFat" setter={handleInputChange} />
                        <MemoizedInputField label="Skim Milk SNF (%)" value={inputs.skimSnf} name="skimSnf" setter={handleInputChange} />
                    </div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-6 text-lg py-6">➡️ Calculate Standardization</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle className="text-xl font-bold mb-4">📊 Results</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

const MemoizedMilkInputGroup = memo(function MilkInputGroup({
    milkNum,
    onInputChange,
    initialValues,
}: {
    milkNum: 1 | 2;
    onInputChange: (milkNum: 1 | 2, field: string, value: string) => void;
    initialValues: { qty: string; fat: string; clr: string };
}) {

    return (
        <div className="bg-muted/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-gray-700 font-headline">Milk Source {milkNum}</h3>
            <MemoizedInputField label="Quantity (kg/L)" value={initialValues.qty} name="qty" setter={(name, val) => onInputChange(milkNum, name, val)} />
            <MemoizedInputField label="Fat %" value={initialValues.fat} name="fat" setter={(name, val) => onInputChange(milkNum, name, val)} />
            <MemoizedInputField label="CLR" value={initialValues.clr} name="clr" setter={(name, val) => onInputChange(milkNum, name, val)} />
        </div>
    );
});

function MilkBlendingCalc() {
    const [milk1, setMilk1] = useState({ qty: '500', fat: '6.5', clr: '29' });
    const [milk2, setMilk2] = useState({ qty: '500', fat: '2.5', clr: '27' });

    const [result, setResult] = useState<{ finalQty: number; finalFat: number; finalClr: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((milkNum: 1 | 2, field: string, value: string) => {
        const setter = milkNum === 1 ? setMilk1 : setMilk2;
        setter(prev => ({ ...prev, [field]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const q1 = parseFloat(milk1.qty);
        const f1 = parseFloat(milk1.fat);
        const c1 = parseFloat(milk1.clr);
        const q2 = parseFloat(milk2.qty);
        const f2 = parseFloat(milk2.fat);
        const c2 = parseFloat(milk2.clr);

        if ([q1, f1, c1, q2, f2, c2].some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        if (q1 <= 0 || q2 <= 0) {
            setError("Quantities must be positive numbers.");
            return;
        }

        const finalQty = q1 + q2;
        const finalFat = ((q1 * f1) + (q2 * f2)) / finalQty;
        const finalClr = ((q1 * c1) + (q2 * c2)) / finalQty;

        setResult({ finalQty, finalFat, finalClr });
    }, [milk1, milk2]);

    return (
        <CalculatorCard title="Milk Blending Calculator" description="Calculate the final Fat% and CLR after mixing two different milk sources.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <MemoizedMilkInputGroup 
                    milkNum={1} 
                    onInputChange={handleInputChange} 
                    initialValues={milk1}
                />
                <MemoizedMilkInputGroup 
                    milkNum={2}
                    onInputChange={handleInputChange} 
                    initialValues={milk2}
                />
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Blend</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                <Alert className="mt-4">
                    <AlertTitle>Blend Result</AlertTitle>
                    <AlertDescription>
                        <div className="space-y-2 mt-2">
                           <p><strong>Total Quantity:</strong> {result.finalQty.toFixed(2)} kg/L</p>
                           <p><strong>Final Fat:</strong> {result.finalFat.toFixed(2)} %</p>
                           <p><strong>Final CLR:</strong> {result.finalClr.toFixed(2)}</p>
                        </div>
                    </AlertDescription>
                </Alert>
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
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const F1 = parseFloat(inputs.f1);
        const C1 = parseFloat(inputs.c1);
        const F2 = parseFloat(inputs.f2);
        const C2 = parseFloat(inputs.c2);
        const FT = parseFloat(inputs.fTarget);
        const CT = parseFloat(inputs.cTarget);
        const QT = parseFloat(inputs.qTotal);

        if ([F1, C1, F2, C2, FT, CT, QT].some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        if (QT <= 0) {
            setError("Total Batch Quantity must be a positive number.");
            return;
        }

        if ( (FT > Math.max(F1,F2)) || (FT < Math.min(F1,F2)) ) {
            setError("The target Fat % is not achievable. It must be between the Fat % of the source milks.");
            return;
        }

        // --- Step 1: Calculate milk quantities to achieve Target Fat ---
        let q1, q2;

        if (Math.abs(F1 - F2) < 1e-9) { // If both milks have same fat
            if (Math.abs(F1 - FT) > 1e-9) { // and it's not the target fat
                 setError("Cannot achieve target fat as both source milks have the same fat percentage, which is different from the target.");
                 return;
            }
            // If fat is same and matches target, we can't solve for ratio based on fat.
            // Arbitrarily set q1 to half and check CLR later.
            q1 = QT / 2;
            q2 = QT / 2;
        } else {
            q1 = QT * (FT - F2) / (F1 - F2);
            q2 = QT - q1;
        }
        
        if (q1 < 0 || q2 < 0) {
             setError("Calculation error: Negative milk quantity resulted. This can happen if target fat is outside the range of source milks.");
             return;
        }

        // --- Step 2: Check the resulting CLR and adjust if necessary ---
        const finalClrCheck = (q1 * C1 + q2 * C2) / QT;
        const clrDifference = CT - finalClrCheck;

        let resultHTML = `To achieve the target Fat of <strong>${FT}%</strong>, you need to blend:<br/>
            <ul class='list-disc list-inside mt-2 text-lg'>
                <li>Milk Source 1: <strong class='text-green-700'>${q1.toFixed(3)} kg/L</strong></li>
                <li>Milk Source 2: <strong class='text-green-700'>${q2.toFixed(3)} kg/L</strong></li>
            </ul>
            <p class='mt-3'>This blend will result in a CLR of approximately <strong>${finalClrCheck.toFixed(2)}</strong>.</p>
            <hr class='my-4' />
        `;

        if (Math.abs(clrDifference) < 0.05) { // If CLR is already close enough
            resultHTML += "<h4 class='font-bold text-md text-blue-700'>No CLR adjustment needed.</h4>";
        } else if (clrDifference > 0) { // If CLR is LOW and needs to be increased
            const smpSolidsPercent = 96;
            const smpNeeded = (QT * clrDifference * 0.25) / smpSolidsPercent;
            resultHTML += `<h4 class='font-bold text-md'>CLR Adjustment Required:</h4>
            To increase CLR from <strong>${finalClrCheck.toFixed(2)}</strong> to <strong>${CT}</strong>, you need to add:
            <ul class='list-disc list-inside mt-2 text-lg'>
                <li>Skimmed Milk Powder (SMP): <strong class='text-blue-700'>${smpNeeded.toFixed(3)} kg</strong></li>
            </ul>
            `;
        } else { // If CLR is HIGH and needs to be decreased
            const clrToDecrease = finalClrCheck - CT;
            const waterNeeded = (clrToDecrease * QT) / 50; // Simplified from (clrToDecrease * 20 * QT) / 1000
            resultHTML += `<h4 class='font-bold text-md'>CLR Adjustment Required:</h4>
            To decrease CLR from <strong>${finalClrCheck.toFixed(2)}</strong> to <strong>${CT}</strong>, you need to add:
            <ul class='list-disc list-inside mt-2 text-lg'>
                <li>Water: <strong class='text-blue-700'>${waterNeeded.toFixed(3)} L</strong></li>
            </ul>
            `;
        }
        
        setResult(resultHTML);

    }, [inputs]);

    return (
        <CalculatorCard title="Advanced Two-Milk Blending to Target" description="Calculate required quantities of two milk sources to hit a target Fat %, with automatic adjustment for CLR using SMP or water.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Source 1</h3>
                    <MemoizedInputField label="Fat % (F₁)" value={inputs.f1} name="f1" setter={handleInputChange} />
                    <MemoizedInputField label="CLR (C₁)" value={inputs.c1} name="c1" setter={handleInputChange} />
                </div>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Source 2</h3>
                    <MemoizedInputField label="Fat % (F₂)" value={inputs.f2} name="f2" setter={handleInputChange} />
                    <MemoizedInputField label="CLR (C₂)" value={inputs.c2} name="c2" setter={handleInputChange} />
                </div>
                <div className="bg-primary/10 p-4 rounded-lg space-y-3 md:col-span-2">
                    <h3 className="font-semibold text-gray-700 font-headline">Target Batch</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <MemoizedInputField label="Total Batch Qty (Qᴛ) kg/L" value={inputs.qTotal} name="qTotal" setter={handleInputChange} />
                        <MemoizedInputField label="Target Fat % (Fᴛ)" value={inputs.fTarget} name="fTarget" setter={handleInputChange} />
                        <MemoizedInputField label="Target CLR (Cᴛ)" value={inputs.cTarget} name="cTarget" setter={handleInputChange} />
                    </div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Blend &amp; Adjust</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                 <Alert className="mt-4">
                    <AlertTitle>Blending &amp; Adjustment Plan</AlertTitle>
                    <AlertDescription>
                        <div className="mt-2 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: result }}/>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

function FatReductionClrMaintainCalc() {
    const [inputs, setInputs] = useState({
        initialVolume: '1000',
        initialFat: '6.3',
        initialClr: '29.5',
        targetFat: '5.9',
        targetClr: '29.5',
        skimFat: '0.05',
        skimClr: '34.5',
    });

    const [results, setResults] = useState<{ skim: string, water: string, finalVolume: string, finalFat: string, finalClr: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);
    
    const calculate = useCallback(() => {
        const V0 = parseFloat(inputs.initialVolume);
        const F0 = parseFloat(inputs.initialFat);
        const C0 = parseFloat(inputs.initialClr);
        const Ft = parseFloat(inputs.targetFat);
        const Ct = parseFloat(inputs.targetClr);
        const Fs = parseFloat(inputs.skimFat);
        const Cs = parseFloat(inputs.skimClr);

        if ([V0, F0, C0, Ft, Ct, Fs, Cs].some(isNaN)) {
            setError("Please enter valid numbers in all input boxes.");
            setResults(null);
            return;
        }

        const a = (Cs - Ct);
        const b = -Ct;
        const d = (Ct - C0) * V0;
        
        const a2 = (Fs - Ft);
        const b2 = -Ft;
        const d2 = (Ft - F0) * V0;

        const D = a * b2 - b * a2;

        if (Math.abs(D) < 1e-9) {
            setError("Calculation is not possible. Please check the inputs.");
            setResults(null);
            return;
        }

        const x = (d * b2 - b * d2) / D;
        const y = (a * d2 - d * a2) / D;

        if (x < 0 || y < 0) {
             setError("Result is negative. Standardization is not possible in this case.");
             setResults(null);
             return;
        }

        setError(null);

        const finalVolume = V0 + x + y;
        const finalFatCheck = ((F0 * V0) + (Fs * x)) / finalVolume;
        const finalClrCheck = ((C0 * V0) + (Cs * x)) / finalVolume;

        setResults({
            skim: `${x.toFixed(2)} L`,
            water: `${y.toFixed(2)} L`,
            finalVolume: `${finalVolume.toFixed(2)} L`,
            finalFat: `${finalFatCheck.toFixed(2)} %`,
            finalClr: `${finalClrCheck.toFixed(2)}`
        });

    }, [inputs]);

    return (
        <CalculatorCard 
            title="Fat &amp; CLR Corrector"
            description="Calculate the amount of skimmed milk and water needed to correct your batch to the target fat and CLR.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                    <h2 className="text-xl md:text-lg font-semibold mb-6 text-blue-700">Inputs</h2>
                    <div className="space-y-4">
                        <MemoizedInputField label="Initial Volume (V₀):" value={inputs.initialVolume} name="initialVolume" setter={handleInputChange} inputClassName="bg-yellow-100 border-yellow-300" unit="L" />
                        <MemoizedInputField label="Initial Fat (F₀) %:" value={inputs.initialFat} name="initialFat" setter={handleInputChange} inputClassName="bg-yellow-100 border-yellow-300" unit="%" />
                        <MemoizedInputField label="Initial CLR (C₀):" value={inputs.initialClr} name="initialClr" setter={handleInputChange} inputClassName="bg-yellow-100 border-yellow-300" />
                        <MemoizedInputField label="Target Fat (Ft) %:" value={inputs.targetFat} name="targetFat" setter={handleInputChange} inputClassName="bg-yellow-100 border-yellow-300" unit="%" />
                        <MemoizedInputField label="Target CLR (Ct):" value={inputs.targetClr} name="targetClr" setter={handleInputChange} inputClassName="bg-yellow-100 border-yellow-300" />
                        <MemoizedInputField label="Skimmed Milk Fat (Fs) %:" value={inputs.skimFat} name="skimFat" setter={handleInputChange} inputClassName="bg-yellow-100 border-yellow-300" unit="%" />
                        <MemoizedInputField label="Skimmed Milk CLR (Cs):" value={inputs.skimClr} name="skimClr" setter={handleInputChange} inputClassName="bg-yellow-100 border-yellow-300" />
                    </div>
                </div>
                 <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-green-700">Outputs (Result)</h2>
                    {error ? (
                        <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>
                    ) : (
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-green-300">
                                <p className="text-sm font-medium text-gray-600">Skimmed Milk to Add (x):</p>
                                <p className="text-2xl font-bold text-green-800">{results?.skim || '0 L'}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md border border-green-300">
                                <p className="text-sm font-medium text-gray-600">Water to Add (y):</p>
                                <p className="text-2xl font-bold text-green-800">{results?.water || '0 L'}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md border border-green-300">
                                <p className="text-sm font-medium text-gray-600">Final Volume:</p>
                                <p className="text-2xl font-bold text-green-800">{results?.finalVolume || '0 L'}</p>
                            </div>
                            <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
                                <p className="text-lg font-semibold text-yellow-800">Check Result</p>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray-700">Final Fat %:</span>
                                    <span className="font-bold text-blue-600">{results?.finalFat || '-'}</span>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <span className="text-gray-700">Final CLR:</span>
                                    <span className="font-bold text-blue-600">{results?.finalClr || '-'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                 </div>
            </div>
             <Button onClick={calculate} className="w-full mt-6">Calculate</Button>
        </CalculatorCard>
    );
}

function TwoComponentStandardizationCalc() {
    return (
        <Tabs defaultValue="cream">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cream">Water &amp; Cream</TabsTrigger>
                <TabsTrigger value="richMilk">Water &amp; Rich Milk</TabsTrigger>
            </TabsList>
            <TabsContent value="cream" className="pt-4">
                <StandardizeWithCream />
            </TabsContent>
            <TabsContent value="richMilk" className="pt-4">
                <StandardizeWithRichMilk />
            </TabsContent>
        </Tabs>
    );
}

const StandardizeWithCream = () => {
    const [inputs, setInputs] = useState({ V0: '700', Fi: '4', CLR0: '31.5', Ft: '4', CLRt: '29', Fc: '40', CLRc: '10' });
    const [results, setResults] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResults(null);
        setError(null);

        const V0 = parseFloat(inputs.V0) || 0;
        const Fi = parseFloat(inputs.Fi) || 0;
        const CLR0 = parseFloat(inputs.CLR0) || 0;
        const Ft = parseFloat(inputs.Ft) || 0;
        const CLRt = parseFloat(inputs.CLRt) || 0;
        const Fc = parseFloat(inputs.Fc) || 0;
        const CLRc = parseFloat(inputs.CLRc) || 0;

        if ([V0, Fi, CLR0, Ft, CLRt, Fc, CLRc].some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        // Using formula: SNF % = CLR/4 + 0.2*Fat + 0.36
        const formula = (clr: number, fat: number) => clr / 4 + 0.2 * fat + 0.36;

        const SNF_i = formula(CLR0, Fi);
        const SNF_t = formula(CLRt, Ft);
        const SNF_c = formula(CLRc, Fc);

        const a1 = -Ft;
        const b1 = Fc - Ft;
        const a2 = -SNF_t;
        const b2 = SNF_c - SNF_t;
        const c1 = V0 * (Ft - Fi);
        const c2 = V0 * (SNF_t - SNF_i);
        const D = a1 * b2 - a2 * b1;
        
        if (Math.abs(D) < 1e-9) {
            setError("Cannot calculate with current inputs. The target values may not be achievable with the given ingredients.");
            return;
        }

        const x = (c1 * b2 - c2 * b1) / D; // water
        const y = (a1 * c2 - a2 * c1) / D; // cream

        if (x < 0 || y < 0) {
             setError("Cannot calculate. Resulting quantities are negative.");
             return;
        }

        const Vf = V0 + x + y;
        const totalFatKg = (Fi / 100 * V0) + (Fc / 100 * y);
        const finalFatPercent = totalFatKg / Vf * 100;
        const totalSnfKg = (SNF_i / 100 * V0) + (SNF_c / 100 * y);
        const finalSnfPercent = totalSnfKg / Vf * 100;
        const finalClrCheck = 4 * (finalSnfPercent - 0.2 * finalFatPercent - 0.36);

        setResults({ x, y, Vf, finalFatPercent, finalSnfPercent, finalClrCheck });
    }, [inputs]);

    return (
        <CalculatorCard title="Standardize with Water & Cream" description="Calculate the amount of water and cream to add to achieve target Fat and CLR.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Initial Milk</h4>
                    <MemoizedInputField label="Volume (V₀) L" value={inputs.V0} name="V0" setter={handleInputChange} />
                    <MemoizedInputField label="Fat (Fᵢ) %" value={inputs.Fi} name="Fi" setter={handleInputChange} />
                    <MemoizedInputField label="CLR₀" value={inputs.CLR0} name="CLR0" setter={handleInputChange} />
                </div>
                <div className="bg-green-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Target Milk</h4>
                    <MemoizedInputField label="Fat (Fₜ) %" value={inputs.Ft} name="Ft" setter={handleInputChange} />
                    <MemoizedInputField label="CLRₜ" value={inputs.CLRt} name="CLRt" setter={handleInputChange} />
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Cream</h4>
                    <MemoizedInputField label="Fat (F꜀) %" value={inputs.Fc} name="Fc" setter={handleInputChange} />
                    <MemoizedInputField label="CLR꜀" value={inputs.CLRc} name="CLRc" setter={handleInputChange} />
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {results && (
                <Alert className="mt-4">
                    <AlertTitle>Results</AlertTitle>
                    <AlertDescription>
                        <p><strong>Water to add:</strong> {results.x.toFixed(2)} L</p>
                        <p><strong>Cream to add:</strong> {results.y.toFixed(2)} L</p>
                        <hr className="my-2"/>
                        <p><strong>Final Volume:</strong> {results.Vf.toFixed(2)} L</p>
                        <p><strong>Final Fat Check:</strong> {results.finalFatPercent.toFixed(2)}%</p>
                        <p><strong>Final SNF Check:</strong> {results.finalSnfPercent.toFixed(2)}%</p>
                        <p><strong>Final CLR Check:</strong> {results.finalClrCheck.toFixed(2)}</p>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
};

const StandardizeWithRichMilk = () => {
    const [inputs, setInputs] = useState({ V0: '700', Fi: '4', CLR0: '31.5', Ft: '4', CLRt: '29', Fr: '6', CLRr: '30' });
    const [results, setResults] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResults(null);
        setError(null);

        const V0 = parseFloat(inputs.V0) || 0;
        const Fi = parseFloat(inputs.Fi) || 0;
        const CLR0 = parseFloat(inputs.CLR0) || 0;
        const Ft = parseFloat(inputs.Ft) || 0;
        const CLRt = parseFloat(inputs.CLRt) || 0;
        const Fr = parseFloat(inputs.Fr) || 0;
        const CLRr = parseFloat(inputs.CLRr) || 0;

        if ([V0, Fi, CLR0, Ft, CLRt, Fr, CLRr].some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }
        
        const formula = (clr: number, fat: number) => clr / 4 + 0.2 * fat + 0.36;

        const SNF_i = formula(CLR0, Fi);
        const SNF_t = formula(CLRt, Ft);
        const SNF_r = formula(CLRr, Fr);

        const a1 = -Ft;
        const b1 = Fr - Ft;
        const a2 = -SNF_t;
        const b2 = SNF_r - SNF_t;
        const c1 = V0 * (Ft - Fi);
        const c2 = V0 * (SNF_t - SNF_i);
        const D = a1 * b2 - a2 * b1;
        
        if (Math.abs(D) < 1e-9) {
            setError("Cannot calculate with current inputs. The target values may not be achievable with the given ingredients.");
            return;
        }

        const x = (c1 * b2 - c2 * b1) / D; // water
        const y = (a1 * c2 - a2 * c1) / D; // rich milk
        
        if (x < 0 || y < 0) {
             setError("Cannot calculate. Resulting quantities are negative.");
             return;
        }

        const Vf = V0 + x + y;
        const totalFatKg = (Fi / 100 * V0) + (Fr / 100 * y);
        const finalFatPercent = totalFatKg / Vf * 100;
        const totalSnfKg = (SNF_i / 100 * V0) + (SNF_r / 100 * y);
        const finalSnfPercent = totalSnfKg / Vf * 100;
        const finalClrCheck = 4 * (finalSnfPercent - 0.2 * finalFatPercent - 0.36);

        setResults({ x, y, Vf, finalFatPercent, finalSnfPercent, finalClrCheck });

    }, [inputs]);

    return (
        <CalculatorCard title="Standardize with Water & Rich Milk" description="Calculate the amount of water and rich milk to add to achieve target Fat and CLR.">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Initial Milk</h4>
                    <MemoizedInputField label="Volume (V₀) L" value={inputs.V0} name="V0" setter={handleInputChange} />
                    <MemoizedInputField label="Fat (Fᵢ) %" value={inputs.Fi} name="Fi" setter={handleInputChange} />
                    <MemoizedInputField label="CLR₀" value={inputs.CLR0} name="CLR0" setter={handleInputChange} />
                </div>
                <div className="bg-green-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Target Milk</h4>
                    <MemoizedInputField label="Fat (Fₜ) %" value={inputs.Ft} name="Ft" setter={handleInputChange} />
                    <MemoizedInputField label="CLRₜ" value={inputs.CLRt} name="CLRt" setter={handleInputChange} />
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Rich Milk</h4>
                    <MemoizedInputField label="Fat (Fᵣ) %" value={inputs.Fr} name="Fr" setter={handleInputChange} />
                    <MemoizedInputField label="CLRᵣ" value={inputs.CLRr} name="CLRr" setter={handleInputChange} />
                </div>
            </div>
             <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {results && (
                <Alert className="mt-4">
                    <AlertTitle>Results</AlertTitle>
                    <AlertDescription>
                        <p><strong>Water to add:</strong> {results.x.toFixed(2)} L</p>
                        <p><strong>Rich Milk to add:</strong> {results.y.toFixed(2)} L</p>
                        <hr className="my-2"/>
                        <p><strong>Final Volume:</strong> {results.Vf.toFixed(2)} L</p>
                        <p><strong>Final Fat Check:</strong> {results.finalFatPercent.toFixed(2)}%</p>
                        <p><strong>Final SNF Check:</strong> {results.finalSnfPercent.toFixed(2)}%</p>
                        <p><strong>Final CLR Check:</strong> {results.finalClrCheck.toFixed(2)}</p>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

function FatSnfClrTsCalc() {
    const [inputs, setInputs] = useState({
        fat: "4.5",
        clr: "28.0",
        snf: "8.5",
        formula: "isi",
        customC: "0.72"
    });

    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const handleCalcSnfTs = useCallback(() => {
        const fatNum = parseFloat(inputs.fat);
        const clrNum = parseFloat(inputs.clr);
        const formulaKey = inputs.formula as keyof typeof snfFormulas;
        const c = parseFloat(inputs.customC);

        setError(null);
        setResult(null);

        if (isNaN(fatNum) || isNaN(clrNum)) {
            setError("Please enter valid Fat and CLR values.");
            return;
        }

        const calculatedSnf = snfFormulas[formulaKey].calc(clrNum, fatNum, c);
        const calculatedTs = fatNum + calculatedSnf;
        setResult(`Calculated SNF: <strong>${calculatedSnf.toFixed(2)}%</strong><br/>Calculated TS: <strong>${calculatedTs.toFixed(2)}%</strong>`);
    }, [inputs]);

    const handleCalcClrTs = useCallback(() => {
        const fatNum = parseFloat(inputs.fat);
        const snfNum = parseFloat(inputs.snf);
        const formulaKey = inputs.formula as keyof typeof snfFormulas;
        const c = parseFloat(inputs.customC);

        setError(null);
        setResult(null);

        if (isNaN(fatNum) || isNaN(snfNum)) {
            setError("Please enter valid Fat and SNF values.");
            return;
        }
        
        const calculatedClr = snfFormulas[formulaKey].inverse(snfNum, fatNum, c);
        const calculatedTs = fatNum + snfNum;
        setResult(`Calculated CLR: <strong>${calculatedClr.toFixed(2)}</strong><br/>Calculated TS: <strong>${calculatedTs.toFixed(2)}%</strong>`);
    }, [inputs]);

    return (
        <CalculatorCard title="Fat, SNF, CLR &amp; TS Calculator" description="Calculate milk components interchangeably based on various regional and standard formulas.">
             <div className="bg-muted/50 p-4 rounded-lg mb-6">
                 <Label>Select SNF Calculation Formula</Label>
                 <Select value={inputs.formula} onValueChange={(val) => handleInputChange('formula', val)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key}>
                                <div className="flex flex-col">
                                    <span className="font-semibold">{name}</span>
                                    <span className="text-xs text-muted-foreground">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                 </Select>
                 {inputs.formula === 'general' && (
                     <div className="mt-2">
                        <MemoizedInputField label="Custom Constant (C)" value={inputs.customC} name="customC" setter={handleInputChange} />
                     </div>
                 )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate SNF &amp; TS</h4>
                    <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} />
                    <MemoizedInputField label="CLR" value={inputs.clr} name="clr" setter={handleInputChange} />
                    <Button onClick={handleCalcSnfTs} className="w-full">Calculate SNF &amp; TS</Button>
                </div>

                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate CLR &amp; TS</h4>
                    <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} />
                    <MemoizedInputField label="SNF %" value={inputs.snf} name="snf" setter={handleInputChange} />
                    <Button onClick={handleCalcClrTs} className="w-full">Calculate CLR &amp; TS</Button>
                </div>
            </div>

            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function ClrIncreaseCalc() {
    const [inputs, setInputs] = useState({
        initialQty: '100',
        initialClr: '27',
        targetClr: '28.5',
        smpSolids: '96'
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        const Q1 = parseFloat(inputs.initialQty);
        const CLR1 = parseFloat(inputs.initialClr);
        const CLR_target = parseFloat(inputs.targetClr);
        const smpSolidsPercent = parseFloat(inputs.smpSolids);
        
        setError(null);
        setResult(null);

        if (isNaN(Q1) || isNaN(CLR1) || isNaN(CLR_target) || isNaN(smpSolidsPercent) || Q1 <= 0 || smpSolidsPercent <= 0) {
            setError("Please enter valid positive numbers for all fields.");
            return;
        }

        if (CLR_target <= CLR1) {
            setError("Target CLR must be higher than the initial CLR.");
            return;
        }
        
        const smpNeeded = (Q1 * (CLR_target - CLR1) * 0.25) / smpSolidsPercent;
        
        setResult(`To increase CLR from <strong>${CLR1}</strong> to <strong>${CLR_target}</strong> in <strong>${Q1} kg</strong> of milk, you need to add approximately <strong class='text-green-700 text-lg'>${smpNeeded.toFixed(4)} kg</strong> of SMP.`);
        
    }, [inputs]);

    return (
        <CalculatorCard title="CLR Increase Calculator (with SMP)" description="Calculate the amount of Skimmed Milk Powder (SMP) needed to increase the CLR of milk using the provided formula.">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Initial Milk</h3>
                    <MemoizedInputField label="Milk Quantity (kg)" value={inputs.initialQty} name="initialQty" setter={handleInputChange} />
                    <MemoizedInputField label="Initial CLR" value={inputs.initialClr} name="initialClr" setter={handleInputChange} />
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target &amp; Ingredient</h3>
                    <MemoizedInputField label="Target CLR" value={inputs.targetClr} name="targetClr" setter={handleInputChange} />
                    <MemoizedInputField label="SMP Total Solids (%)" value={inputs.smpSolids} name="smpSolids" setter={handleInputChange} />
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate SMP Required</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function FatClrMaintainerCalc() {
    const [fatSourceType, setFatSourceType] = useState<'richMilk' | 'cream'>('richMilk');
    const [inputs, setInputs] = useState({
        milkQty: '1000', milkFat: '3.6', milkClr: '31',
        richMilkFat: '6.25', richMilkClr: '29.75',
        creamFat: '40.0', creamSnf: '5.4',
        targetFat: '4.0', targetClr: '31',
        smpSolids: '96',
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);

        const M_milk = parseFloat(inputs.milkQty);
        const F_milk = parseFloat(inputs.milkFat) / 100;
        const CLR_milk = parseFloat(inputs.milkClr);
        const F_target = parseFloat(inputs.targetFat) / 100;
        const CLR_target = parseFloat(inputs.targetClr);
        const smpSolidsPercent = parseFloat(inputs.smpSolids) / 100;

        if (fatSourceType === 'richMilk') {
            const F_rich = parseFloat(inputs.richMilkFat) / 100;
            const CLR_rich = parseFloat(inputs.richMilkClr);
            if ([M_milk, F_milk, CLR_milk, F_rich, CLR_rich, F_target, CLR_target, smpSolidsPercent].some(isNaN)) {
                setError("Please fill all fields with valid numbers."); return;
            }
            const M_rich_needed = M_milk * (F_target - F_milk) / (F_rich - F_target);
            if (M_rich_needed < 0) {
                 setError("Target fat is not between initial and rich milk fat. Cannot calculate."); return;
            }
            const M_total_after_rich = M_milk + M_rich_needed;
            const CLR_intermediate = ((M_milk * CLR_milk) + (M_rich_needed * CLR_rich)) / M_total_after_rich;

            if (CLR_intermediate > CLR_target) {
                setError(`Adding rich milk results in a CLR of ${CLR_intermediate.toFixed(2)}, which is already higher than the target. Cannot maintain CLR by adding SMP.`);
                return;
            }
            
            const SNF_intermediate = getSnf(F_target*100, CLR_intermediate) / 100;
            const SNF_target = getSnf(F_target*100, CLR_target) / 100;
            const SNF_needed_from_smp = (M_total_after_rich * (SNF_target - SNF_intermediate));
            const M_smp_needed = SNF_needed_from_smp / (smpSolidsPercent - SNF_target);
            
             if(M_smp_needed < 0) {
                setError("Calculated negative SMP. Please check inputs. This can happen if the intermediate CLR is already higher than the target.");
                return;
            }

            setResult(`To standardize <strong>${M_milk} kg</strong> of milk, you need to add:
                <ul class='list-disc list-inside mt-2 text-lg'>
                    <li>Rich Milk (${inputs.richMilkFat}% Fat): <strong class='text-green-700'>${M_rich_needed.toFixed(3)} kg</strong></li>
                    <li>SMP (~${inputs.smpSolids}% TS): <strong class='text-blue-700'>${M_smp_needed.toFixed(3)} kg</strong></li>
                </ul>`);
        } else { // Cream
            const F_cream = parseFloat(inputs.creamFat) / 100;
            const SNF_cream = parseFloat(inputs.creamSnf) / 100;
             if ([M_milk, F_milk, CLR_milk, F_cream, SNF_cream, F_target, CLR_target, smpSolidsPercent].some(isNaN)) {
                setError("Please fill all fields with valid numbers."); return;
            }
            const SNF_milk = getSnf(F_milk*100, CLR_milk) / 100;
            const SNF_target = getSnf(F_target*100, CLR_target) / 100;

            const Fp = 0.01; // SMP Fat approx 1%
            const Sp = smpSolidsPercent - Fp; // SMP SNF

            const K1 = M_milk * (F_target - F_milk);
            const K2 = M_milk * (SNF_target - SNF_milk);

            const A1 = F_cream - F_target;
            const B1 = Fp - F_target;

            const A2 = SNF_cream - SNF_target;
            const B2 = Sp - SNF_target;

            const det = A1 * B2 - B1 * A2;

            if (Math.abs(det) < 1e-9) {
                setError("Cannot solve. Ingredients properties might be too similar."); return;
            }

            const M_cream_needed = (K1 * B2 - K2 * B1) / det;
            const M_smp_needed = (K2 * A1 - K1 * A2) / det;
            
             if (M_cream_needed < 0 || M_smp_needed < 0) {
                setError("Calculation resulted in negative values. This scenario is not possible with the given inputs (e.g., target might be lower than initial values).");
                return;
            }

             setResult(`To standardize <strong>${M_milk} kg</strong> of milk, you need to add:
                <ul class='list-disc list-inside mt-2 text-lg'>
                    <li>Cream (${inputs.creamFat}% Fat): <strong class='text-green-700'>${M_cream_needed.toFixed(3)} kg</strong></li>
                    <li>SMP (~${inputs.smpSolids}% TS): <strong class='text-blue-700'>${M_smp_needed.toFixed(3)} kg</strong></li>
                </ul>`);
        }
    }, [inputs, fatSourceType]);

    return (
        <CalculatorCard title="Fat &amp; CLR Maintainer Calculator" description="Increase milk Fat % using a fat source (Rich Milk or Cream) while maintaining the original CLR by adding Skimmed Milk Powder (SMP).">
             <div className="mb-4">
                 <Label>Select Fat Source</Label>
                 <Select value={fatSourceType} onValueChange={(val) => setFatSourceType(val as 'richMilk' | 'cream')}>
                     <SelectTrigger><SelectValue /></SelectTrigger>
                     <SelectContent>
                         <SelectItem value="richMilk">Rich Milk</SelectItem>
                         <SelectItem value="cream">Cream</SelectItem>
                     </SelectContent>
                 </Select>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                 <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Initial Batch</h3>
                     <MemoizedInputField label="Milk Quantity (kg)" value={inputs.milkQty} name="milkQty" setter={handleInputChange} />
                     <MemoizedInputField label="Initial Fat %" value={inputs.milkFat} name="milkFat" setter={handleInputChange} />
                     <MemoizedInputField label="Initial CLR" value={inputs.milkClr} name="milkClr" setter={handleInputChange} />
                 </div>
                  <div className="bg-yellow-50 p-4 rounded-lg space-y-3">
                      <h3 className="font-semibold text-gray-700 mb-2 font-headline">Available Fat Source</h3>
                      {fatSourceType === 'richMilk' ? (
                          <>
                              <MemoizedInputField label="Rich Milk Fat %" value={inputs.richMilkFat} name="richMilkFat" setter={handleInputChange} />
                              <MemoizedInputField label="Rich Milk CLR" value={inputs.richMilkClr} name="richMilkClr" setter={handleInputChange} />
                          </>
                      ) : (
                          <>
                              <MemoizedInputField label="Cream Fat %" value={inputs.creamFat} name="creamFat" setter={handleInputChange} />
                              <MemoizedInputField label="Cream SNF %" value={inputs.creamSnf} name="creamSnf" setter={handleInputChange} />
                          </>
                      )}
                 </div>
                  <div className="bg-green-50 p-4 rounded-lg space-y-3 md:col-span-2">
                      <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target &amp; Other Ingredients</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                         <MemoizedInputField label="Target CLR" value={inputs.targetClr} name="targetClr" setter={handleInputChange} />
                         <MemoizedInputField label="SMP Total Solids (%)" value={inputs.smpSolids} name="smpSolids" setter={handleInputChange} />
                      </div>
                 </div>
             </div>
              <Button onClick={calculate} className="w-full mt-4">Calculate Standardization</Button>
             {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
             {result && <Alert className="mt-4"><AlertTitle>Standardization Plan</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

const PearsonSquareCalc = ({ unit, calcType }: { unit: string, calcType: 'Fat' | 'CLR' }) => {
    const [inputs, setInputs] = useState({ high: "", low: "", target: "", qty: "" });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const handleCalc = useCallback(() => {
        const highVal = parseFloat(inputs.high);
        const lowVal = parseFloat(inputs.low);
        const targetVal = parseFloat(inputs.target);
        const qtyVal = parseFloat(inputs.qty);
        
        setResult(null);
        setError(null);

        if (isNaN(highVal) || isNaN(lowVal) || isNaN(targetVal) || isNaN(qtyVal)) {
            setError("Please fill all fields with numbers.");
            return;
        }

        if (targetVal > highVal || targetVal < lowVal) {
            setError(`Target ${calcType} must be between the High and Low values.`);
            return;
        }

        const highParts = targetVal - lowVal;
        const lowParts = highVal - targetVal;
        const totalParts = highParts + lowParts;

        if (totalParts === 0) {
            setError("Cannot calculate, total parts is zero. Check your inputs.");
            return;
        }

        const highQty = (qtyVal * highParts) / totalParts;
        const lowQty = (qtyVal * lowParts) / totalParts;

        setResult(`To get ${qtyVal} Kg/Ltr of ${targetVal}${unit} product, you need to mix:<br/><strong class="text-green-700">${highQty.toFixed(2)} Kg/Ltr</strong> of High ${calcType} milk and <strong class="text-green-700">${lowQty.toFixed(2)} Kg/Ltr</strong> of Low ${calcType} milk.`);
    }, [inputs, unit, calcType]);

    return (
         <CalculatorCard title={`${calcType} Blending Calculator`} description={`Blend two milks with different ${calcType}% to create a new product.`}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 1 (High ${calcType})</h3>
                    <MemoizedInputField label={`${calcType} ${unit}`} value={inputs.high} name="high" setter={handleInputChange} placeholder="e.g., 5.0" />
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 2 (Low ${calcType})</h3>
                    <MemoizedInputField label={`${calcType} ${unit}`} value={inputs.low} name="low" setter={handleInputChange} placeholder="e.g., 0.5" />
                </div>
            </div>
             <div className="bg-primary/10 p-4 rounded-lg mb-4">
                 <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Product</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MemoizedInputField label={`Target ${calcType} ${unit}`} value={inputs.target} name="target" setter={handleInputChange} placeholder="e.g., 3.0" />
                    <MemoizedInputField label="Target Batch Qty (Kg/Ltr)" value={inputs.qty} name="qty" setter={handleInputChange} placeholder="e.g., 100" />
                </div>
            </div>
            <Button onClick={handleCalc} className="w-full">Calculate Blend</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function FatBlendingCalc() { return <PearsonSquareCalc unit="%" calcType="Fat" /> }
function ClrBlendingCalc() { return <PearsonSquareCalc unit="" calcType="CLR" /> }

function FatSnfAdjustmentCalc() {
    const [inputs, setInputs] = useState({
        milkQty: '100', milkFat: '3.5', milkClr: '28.0',
        targetFat: '4.5', targetClr: '28.5',
        creamFat: '40', powderTs: '96',
        formula: 'isi',
        customC: '0.72'
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        const formulaKey = inputs.formula as keyof typeof snfFormulas;
        if (formulaKey === 'general') {
            return snfFormulas.general.calc(clr, fat, parseFloat(inputs.customC));
        }
        return snfFormulas[formulaKey].calc(clr, fat);
    }, [inputs.formula, inputs.customC]);

    const milkSnf = parseFloat(inputs.milkFat) && parseFloat(inputs.milkClr) ? calculateSnf(parseFloat(inputs.milkClr), parseFloat(inputs.milkFat)) : 0;
    const targetSnf = parseFloat(inputs.targetFat) && parseFloat(inputs.targetClr) ? calculateSnf(parseFloat(inputs.targetClr), parseFloat(inputs.targetFat)) : 0;

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);

        const M = parseFloat(inputs.milkQty);
        const Fm = parseFloat(inputs.milkFat) / 100;
        const Ft = parseFloat(inputs.targetFat) / 100;
        const Fc = parseFloat(inputs.creamFat) / 100;
        const Fp = 1 / 100; // Powder fat is ~1%
        const Sp = (parseFloat(inputs.powderTs) / 100) - Fp; // Powder SNF
        
        const Sm = milkSnf / 100;
        const St = targetSnf / 100;

        // Estimate cream SNF
        const creamSnfFromFat = snfFormulas.isi.calc(20, parseFloat(inputs.creamFat));
        const Sc = creamSnfFromFat / 100;


        if ([M, Fm, Ft, Fc, Fp, Sp, Sm, St].some(isNaN) || M <= 0) {
            setError("Please fill all fields with valid positive numbers.");
            return;
        }

        const K1 = M * (Ft - Fm);
        const K2 = M * (St - Sm);
        
        const A1 = Fc - Ft;
        const B1 = Fp - Ft;
        
        const A2 = Sc - St;
        const B2 = Sp - St;
        
        const det = A1 * B2 - B1 * A2;

        if (Math.abs(det) < 1e-9) {
            setError("Cannot solve. Ingredients properties are too similar or invalid.");
            return;
        }

        const C = (K1 * B2 - K2 * B1) / det;
        const P = (K2 * A1 - K1 * A2) / det;

        if (C < -1e-9 || P < -1e-9) { // Allow for small floating point inaccuracies
            setError("Calculation resulted in negative values. This standardization is not possible with the given inputs (e.g., you might need to add skim milk instead).");
            return;
        }
        
        const creamToAdd = Math.max(0, C);
        const powderToAdd = Math.max(0, P);
        const finalWeight = M + creamToAdd + powderToAdd;
        
        setResult(`
            For <strong>${M} kg</strong> of milk, to reach <strong>${inputs.targetFat}% Fat</strong> and <strong>${targetSnf.toFixed(2)}% SNF</strong>, you need to add:
            <ul class='list-disc list-inside mt-2'>
                <li>Cream (${inputs.creamFat}% Fat): <strong class='text-green-700 text-lg'>${creamToAdd.toFixed(3)} kg</strong></li>
                <li>SMP (${inputs.powderTs}% TS): <strong class='text-green-700 text-lg'>${powderToAdd.toFixed(3)} kg</strong></li>
            </ul>
            <p class='mt-3'>Final Batch Weight will be approximately <strong>${finalWeight.toFixed(3)} kg</strong>.</p>
        `);
    }, [inputs, milkSnf, targetSnf, calculateSnf]);

    return (
        <CalculatorCard title="Fat &amp; SNF Adjustment Calculator" description="Calculate how much Cream and Skimmed Milk Powder (SMP) to add to standardize both Fat and SNF upwards.">
            <div className="bg-primary/10 p-4 rounded-lg mb-4">
                 <h3 className="font-semibold text-gray-700 mb-2 font-headline">SNF Calculation Formula</h3>
                 <Select value={inputs.formula} onValueChange={(val) => handleInputChange('formula', val)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key}>
                                <div className="flex flex-col">
                                    <p className="font-semibold">{name}</p>
                                    <p className="text-xs text-muted-foreground">{formulaText}</p>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                 </Select>
                 {inputs.formula === 'general' && (
                     <div className="mt-2">
                        <MemoizedInputField label="Custom Constant (C)" value={inputs.customC} name="customC" setter={handleInputChange} />
                     </div>
                 )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Initial Milk</h3>
                     <MemoizedInputField label="Milk Quantity (kg)" value={inputs.milkQty} name="milkQty" setter={handleInputChange} />
                     <MemoizedInputField label="Milk Fat %" value={inputs.milkFat} name="milkFat" setter={handleInputChange} />
                     <MemoizedInputField label="Milk CLR" value={inputs.milkClr} name="milkClr" setter={handleInputChange} />
                     <div className="text-sm p-2 bg-blue-100 rounded">Calculated SNF: <strong className="font-bold">{milkSnf.toFixed(2)}%</strong></div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Milk</h3>
                     <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                     <MemoizedInputField label="Target CLR" value={inputs.targetClr} name="targetClr" setter={handleInputChange} />
                      <div className="text-sm p-2 bg-green-100 rounded">Calculated Target SNF: <strong className="font-bold">{targetSnf.toFixed(2)}%</strong></div>
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3 md:col-span-2">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Ingredients for Adjustment</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <MemoizedInputField label="Cream Fat %" value={inputs.creamFat} name="creamFat" setter={handleInputChange} />
                         <MemoizedInputField label="Powder Total Solids (TS) %" value={inputs.powderTs} name="powderTs" setter={handleInputChange} />
                     </div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Adjustment</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function ReconstitutedMilkCalc() {
    const [inputs, setInputs] = useState({ batchQty: '100', targetTS: '12.5', powderTS: '96' });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        const qty = parseFloat(inputs.batchQty);
        const tTS = parseFloat(inputs.targetTS) / 100;
        const pTS = parseFloat(inputs.powderTS) / 100;

        if ([qty, tTS, pTS].some(isNaN) || qty <= 0 || tTS <= 0 || pTS <= 0) {
            setError("Please fill all fields with valid positive numbers.");
            return;
        }

        if (pTS < tTS) {
            setError("Powder TS% cannot be less than Target TS%. Please check your inputs.");
            return;
        }

        const totalSolidsNeeded = qty * tTS;
        const powderNeeded = totalSolidsNeeded / pTS;
        const waterNeeded = qty - powderNeeded;

        if (waterNeeded < 0) {
            setError("Calculation resulted in negative water. Please check your inputs.");
            return;
        }

        setResult(`To make <strong>${qty} kg</strong> of milk with <strong>${inputs.targetTS}% TS</strong>, you need:<br/>- <strong class='text-green-700'>${powderNeeded.toFixed(3)} kg</strong> of Milk Powder (${inputs.powderTS}%)<br/>- <strong class='text-green-700'>${waterNeeded.toFixed(3)} kg</strong> of Water`);
    }, [inputs]);

    return (
        <CalculatorCard title="Reconstituted Milk Calculator" description="Calculate how much Milk Powder and Water are needed to create milk of a specific Total Solids (TS) content.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <MemoizedInputField label="Target Batch Quantity (kg)" value={inputs.batchQty} name="batchQty" setter={handleInputChange} />
                <MemoizedInputField label="Target Total Solids (TS) %" value={inputs.targetTS} name="targetTS" setter={handleInputChange} />
                <MemoizedInputField label="Milk Powder Total Solids (TS) %" value={inputs.powderTS} name="powderTS" setter={handleInputChange} />
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function RecombinedMilkCalc() {
    const [inputs, setInputs] = useState({
        batchQty: '100', targetFat: '3.5', targetSNF: '8.5',
        smpFat: '1.0', smpSNF: '95.0', fatSourceFat: '99.8'
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const Q = parseFloat(inputs.batchQty);
        const Ft = parseFloat(inputs.targetFat) / 100;
        const St = parseFloat(inputs.targetSNF) / 100;
        const Fp = parseFloat(inputs.smpFat) / 100;
        const Sp = parseFloat(inputs.smpSNF) / 100;
        const Fb = parseFloat(inputs.fatSourceFat) / 100;

        if ([Q, Ft, St, Fp, Sp, Fb].some(isNaN) || Q <= 0) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        // Equations:
        // P*Sp = Q*St => P = Q*St / Sp
        // B*Fb + P*Fp = Q*Ft
        // B*Fb = Q*Ft - P*Fp
        // B = (Q*Ft - P*Fp) / Fb

        const P = (Q * St) / Sp; // Powder needed
        const B = (Q * Ft - P * Fp) / Fb; // Butter oil needed
        const W = Q - P - B; // Water needed

        if (P < 0 || B < 0 || W < 0) {
            setError("Calculation resulted in negative values. Please check your inputs. This can happen if ingredient compositions are not logical (e.g., SMP fat is higher than target fat).");
            return;
        }

        setResult(`To make <strong>${Q} kg</strong> of milk with <strong>${inputs.targetFat}% Fat</strong> and <strong>${inputs.targetSNF}% SNF</strong>, you need:<br/>
        - <strong class='text-green-700'>${P.toFixed(3)} kg</strong> of Skim Milk Powder<br/>
        - <strong class='text-green-700'>${B.toFixed(3)} kg</strong> of Butter Oil/AMF<br/>
        - <strong class='text-green-700'>${W.toFixed(3)} kg</strong> of Water`);
    }, [inputs]);

    return (
        <CalculatorCard title="Recombined Milk Calculator" description="Calculate the required Skim Milk Powder (SMP), Butter Oil (or other fat source), and Water to create milk of a desired composition.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Milk</h3>
                    <MemoizedInputField label="Target Batch Quantity (kg)" value={inputs.batchQty} name="batchQty" setter={handleInputChange} />
                    <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                    <MemoizedInputField label="Target SNF %" value={inputs.targetSNF} name="targetSNF" setter={handleInputChange} />
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Ingredients Composition</h3>
                     <MemoizedInputField label="Skim Milk Powder (SMP) Fat %" value={inputs.smpFat} name="smpFat" setter={handleInputChange} />
                     <MemoizedInputField label="Skim Milk Powder (SMP) SNF %" value={inputs.smpSNF} name="smpSNF" setter={handleInputChange} />
                     <MemoizedInputField label="Fat Source (e.g., Butter Oil) Fat %" value={inputs.fatSourceFat} name="fatSourceFat" setter={handleInputChange} />
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Recombined Milk</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function ClrCorrectionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [olr, setOlr] = useState("28.5");
    const [temp, setTemp] = useState("29");

    const handleCalc = () => {
        const olrNum = parseFloat(olr);
        const tempNum = parseFloat(temp);
        if (isNaN(olrNum) || isNaN(tempNum)) {
            setResult('Invalid Input'); return;
        }
        const clr = olrNum + (tempNum - 27) * 0.2;
        setResult(clr.toFixed(2));
    }

    return (
        <CalculatorCard title="CLR Correction Calculator" description="Correct Lactometer Reading based on temperature.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Observed Lactometer Reading (OLR)</Label><Input type="number" value={olr} onChange={e => setOlr(e.target.value)} placeholder="28.5" /></div>
                <div><Label>Milk Temperature (°C)</Label><Input type="number" value={temp} onChange={e => setTemp(e.target.value)} placeholder="29" /></div>
                <p className="text-xs text-gray-500">Note: Standard calibration temperature is 27°C.</p>
            </div>
            <Button onClick={handleCalc} className="w-full mt-4">Correct CLR</Button>
            {result && <div className="mt-4 text-center"><p className="text-gray-600">Corrected Lactometer Reading (CLR):</p><p className="text-3xl font-bold text-green-700">{result}</p></div>}
        </CalculatorCard>
    );
}

function KgFatSnfCalc() {
    const [inputs, setInputs] = useState({ literQty: "1000", kgQty: "", fat: "4.5", snf: "8.5" });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("liter");

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculateByLiter = () => {
        const litersVal = parseFloat(inputs.literQty);
        const fatVal = parseFloat(inputs.fat);
        const snfVal = parseFloat(inputs.snf);
        setResult(null); setError(null);

        if([litersVal, fatVal, snfVal].some(isNaN)) {
            setError("Please fill all fields with numbers."); return;
        }
        
        const milkWeight = litersVal * componentProps.milkDensity;
        const fatKg = milkWeight * (fatVal / 100);
        const snfKg = milkWeight * (snfVal / 100);
        setResult(`In <strong>${litersVal} Ltr</strong> of milk:<br/>- <strong>Total Fat:</strong> ${fatKg.toFixed(2)} Kg<br/>- <strong>Total SNF (Powder):</strong> ${snfKg.toFixed(2)} Kg`);
    };

    const calculateByKg = () => {
        const kgVal = parseFloat(inputs.kgQty);
        const fatVal = parseFloat(inputs.fat);
        const snfVal = parseFloat(inputs.snf);
        setResult(null); setError(null);

        if([kgVal, fatVal, snfVal].some(isNaN)) {
            setError("Please fill all fields with numbers."); return;
        }
        
        const fatKg = kgVal * (fatVal / 100);
        const snfKg = kgVal * (snfVal / 100);
        setResult(`In <strong>${kgVal} Kg</strong> of milk:<br/>- <strong>Total Fat:</strong> ${fatKg.toFixed(2)} Kg<br/>- <strong>Total SNF (Powder):</strong> ${snfKg.toFixed(2)} Kg`);
    };

    return (
        <CalculatorCard title="Kg Fat &amp; SNF Calculator" description="Find out the amount (in Kg) of Fat and Powder (SNF) from a given quantity of milk.">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="liter">Calculate by Liter</TabsTrigger>
                    <TabsTrigger value="kg">Calculate by Kg</TabsTrigger>
                </TabsList>
                <TabsContent value="liter">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-3 mt-4">
                        <MemoizedInputField label="Milk Quantity (Liters)" value={inputs.literQty} name="literQty" setter={handleInputChange} placeholder="1000" />
                        <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} placeholder="4.5" />
                        <MemoizedInputField label="SNF %" value={inputs.snf} name="snf" setter={handleInputChange} placeholder="8.5" />
                    </div>
                    <Button onClick={calculateByLiter} className="w-full mt-4">Calculate from Liters</Button>
                </TabsContent>
                <TabsContent value="kg">
                     <div className="bg-muted/50 p-4 rounded-lg space-y-3 mt-4">
                        <MemoizedInputField label="Milk Quantity (Kg)" value={inputs.kgQty} name="kgQty" setter={handleInputChange} placeholder="1030" />
                        <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} placeholder="4.5" />
                        <MemoizedInputField label="SNF %" value={inputs.snf} name="snf" setter={handleInputChange} placeholder="8.5" />
                    </div>
                    <Button onClick={calculateByKg} className="w-full mt-4">Calculate from Kg</Button>
                </TabsContent>
            </Tabs>
            
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}