
"use client"

import { useState, memo, useCallback } from "react"
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
import { ArrowLeft, Blend, Milk, SlidersHorizontal, Combine, Bot, Calculator, Settings, ChevronsUp, Target, Droplets, Info, Weight, Thermometer } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type CalculatorType = 'fat-snf-clr-ts' | 'fat-blending' | 'fat-snf-adjustment' | 'reconstituted-milk' | 'recombined-milk' | 'clr-blending' | 'custom-calculator' | 'milk-blending' | 'clr-increase' | 'fat-clr-maintainer' | 'two-milk-blending-target' | 'clr-correction' | 'kg-fat-snf';

const calculatorsInfo = {
    'fat-snf-clr-ts': { title: "Fat, SNF, CLR & TS", icon: Calculator, component: FatSnfClrTsCalc },
    'milk-blending': { title: "Milk Blending", icon: Blend, component: MilkBlendingCalc },
    'two-milk-blending-target': { title: "Two-Milk Blending (to Target)", icon: Target, component: TwoMilkBlendingToTargetCalc },
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


const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 rounded-xl shadow-sm border mt-4">
        <h3 className="text-xl font-bold text-primary mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);

const MemoizedInputField = memo(function InputField({ label, value, name, setter, unit, placeholder }: { label: string, value: string, name: string, setter: (name: string, value: string) => void, unit?: string, placeholder?: string }) {
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
                    type="number" 
                    name={name} 
                    id={name} 
                    value={internalValue} 
                    onChange={handleChange}
                    className={unit ? "rounded-r-none" : ""} 
                    placeholder={placeholder} 
                />
                {unit && <span className="p-2 bg-muted border border-l-0 rounded-r-md text-sm">{unit}</span>}
            </div>
        </div>
    );
});


const CustomCalculatorInput = memo(function CustomCalculatorInput({
    label,
    value,
    name,
    onValueChange,
    unit,
}: {
    label: string;
    value: string;
    name: string;
    onValueChange: (name: string, value: string) => void;
    unit?: string;
}) {
    const [internalValue, setInternalValue] = useState(value);

     // Update internal state when props change
    if (value !== internalValue && document.activeElement?.getAttribute('name') !== name) {
        setInternalValue(value);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onValueChange(e.target.name, e.target.value);
    }

    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <div className="flex items-center">
                <Input
                    type="number"
                    name={name}
                    id={name}
                    value={internalValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={unit ? "rounded-r-none" : ""}
                />
                {unit && <span className="p-2 bg-muted border border-l-0 rounded-r-md text-sm">{unit}</span>}
            </div>
        </div>
    );
});


function CustomStandardizationCalc() {
    const [inputs, setInputs] = useState({
        milkQty: '1000', milkFat: '3.5', milkSnf: '8.5',
        creamFat: '40', skimFat: '0.1', skimSnf: '8.8',
        smpFat: '1.0', smpSnf: '96.0',
        reqFat: '4.5', reqSnf: '8.5',
        waterFat: '0', waterSnf: '0',
    });

    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
    
        const i = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, parseFloat(value) || 0]));
    
        const { milkQty, milkFat, milkSnf, creamFat, skimFat, skimSnf, smpFat, smpSnf, reqFat, reqSnf, waterFat, waterSnf } = i;

        // Convert percentages to decimals
        const mF = milkFat / 100, mS = milkSnf / 100;
        const cF = creamFat / 100, cS = getSnf(creamFat, 20) / 100;
        const skF = skimFat / 100, skS = skimSnf / 100;
        const pF = smpFat / 100, pS = smpSnf / 100;
        const wF = waterFat / 100, wS = waterSnf / 100;
        const rF = reqFat / 100, rS = reqSnf / 100;

        let creamToAdd = 0, skimToAdd = 0, smpToAdd = 0, waterToAdd = 0;

        const fat_diff = (milkQty * rF) - (milkQty * mF);
        const snf_diff = (milkQty * rS) - (milkQty * mS);

        if (fat_diff > 0 && snf_diff > 0) { // Add Cream and SMP
            const det = (cF * pS) - (pF * cS);
            if (Math.abs(det) < 1e-9) { setError("Cannot solve: Cream and SMP properties are too similar."); return; }
            creamToAdd = (fat_diff * pS - snf_diff * pF) / det;
            smpToAdd = (snf_diff * cF - fat_diff * cS) / det;
        } else if (fat_diff < 0 && snf_diff > 0) { // Add Skim Milk and SMP
             const det = (skF * pS) - (pF * skS);
             if (Math.abs(det) < 1e-9) { setError("Cannot solve: Skim milk and SMP properties are too similar."); return; }
             skimToAdd = (fat_diff * pS - snf_diff * pF) / det;
             smpToAdd = (snf_diff * skF - fat_diff * skS) / det;
        } else if (fat_diff > 0 && snf_diff < 0) { // Add Cream and Water
             const det = (cF * wS) - (wF * cS);
             if (Math.abs(det) < 1e-9) { setError("Cannot solve: Cream and Water properties are too similar."); return; }
             creamToAdd = (fat_diff * wS - snf_diff * wF) / det;
             waterToAdd = (snf_diff * cF - fat_diff * cS) / det;
        } else if (fat_diff < 0 && snf_diff < 0) { // Add Skim milk and Water
            const det = (skF * wS) - (wF * skS);
             if (Math.abs(det) < 1e-9) { setError("Cannot solve: Skim milk and Water properties are too similar."); return; }
             skimToAdd = (fat_diff * wS - snf_diff * wF) / det;
             waterToAdd = (snf_diff * skF - fat_diff * cS) / det;
        } else {
             if (Math.abs(fat_diff) < 1e-3 && Math.abs(snf_diff) < 1e-3) {
                 setResult("<p>No addition/removal required. Milk already meets specifications.</p>");
                 return;
            }
        }

        let resultText = "<p>To standardize your milk, you need to:</p><ul class='list-disc list-inside mt-2 text-lg'>";
        let operations: string[] = [];

        if (creamToAdd > 0) operations.push(`Add <strong>Cream:</strong> ${creamToAdd.toFixed(3)} kg`);
        if (skimToAdd > 0) operations.push(`Add <strong>Skim Milk:</strong> ${skimToAdd.toFixed(3)} kg`);
        if (smpToAdd > 0) operations.push(`Add <strong>SMP:</strong> ${smpToAdd.toFixed(3)} kg`);
        if (waterToAdd > 0) operations.push(`Add <strong>Water:</strong> ${waterToAdd.toFixed(3)} kg`);
        
        if (operations.length > 0) {
             operations.forEach(op => resultText += `<li>${op}</li>`);
        } else {
             resultText += "<li>No suitable operation found or values are negative. Please check inputs.</li>";
        }
        resultText += "</ul>";
        
        creamToAdd = Math.max(0, creamToAdd);
        skimToAdd = Math.max(0, skimToAdd);
        smpToAdd = Math.max(0, smpToAdd);
        waterToAdd = Math.max(0, waterToAdd);
        
        const finalQty = milkQty + creamToAdd + skimToAdd + smpToAdd + waterToAdd;
        const finalFatMass = (milkQty * mF) + (creamToAdd * cF) + (skimToAdd * skF) + (smpToAdd * pF) + (waterToAdd * wF);
        const finalSnfMass = (milkQty * mS) + (creamToAdd * cS) + (skimToAdd * skS) + (smpToAdd * pS) + (waterToAdd * wS);
        
        const finalFatPercent = (finalFatMass / finalQty) * 100;
        const finalSnfPercent = (finalSnfMass / finalQty) * 100;

        resultText += "<hr class='my-4' />";
        resultText += "<h4 class='font-bold text-md'>Final Batch Summary:</h4><ul class='list-disc list-inside mt-2 text-lg'>";
        resultText += `<li><strong>Final Milk Quantity:</strong> ${finalQty.toFixed(3)} kg</li>`;
        resultText += `<li><strong>Final Fat % Achieved:</strong> ${finalFatPercent.toFixed(2)}%</li>`;
        resultText += `<li><strong>Final SNF % Achieved:</strong> ${finalSnfPercent.toFixed(2)}%</li>`;
        resultText += "</ul>";
    
        setResult(resultText);

    }, [inputs]);

    return (
        <CalculatorCard title="Multi-Purpose Milk Standardization Calculator" description="A precise tool to adjust Fat and SNF using various sources like Cream, Skim Milk, SMP, and Water. Enter all values; the calculator will determine what to add or remove.">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="space-y-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg border-b pb-2">1. Your Milk</h3>
                    <CustomCalculatorInput label="Milk Quantity" value={inputs.milkQty} name="milkQty" onValueChange={handleInputChange} unit="kg" />
                    <CustomCalculatorInput label="Fat in Milk" value={inputs.milkFat} name="milkFat" onValueChange={handleInputChange} unit="%" />
                    <CustomCalculatorInput label="SNF in Milk" value={inputs.milkSnf} name="milkSnf" onValueChange={handleInputChange} unit="%" />
                </div>

                <div className="space-y-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 lg:col-span-2">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg border-b pb-2">2. Available Sources (for adjustments)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 p-2 bg-yellow-100/50 rounded">
                           <p className="font-medium text-sm">Cream</p>
                           <CustomCalculatorInput label="Cream Fat" value={inputs.creamFat} name="creamFat" onValueChange={handleInputChange} unit="%" />
                        </div>
                         <div className="space-y-2 p-2 bg-yellow-100/50 rounded">
                           <p className="font-medium text-sm">Skim Milk</p>
                           <CustomCalculatorInput label="Skim Milk Fat" value={inputs.skimFat} name="skimFat" onValueChange={handleInputChange} unit="%" />
                           <CustomCalculatorInput label="Skim Milk SNF" value={inputs.skimSnf} name="skimSnf" onValueChange={handleInputChange} unit="%" />
                        </div>
                         <div className="space-y-2 p-2 bg-yellow-100/50 rounded">
                           <p className="font-medium text-sm">Powder (SMP)</p>
                           <CustomCalculatorInput label="SMP Fat" value={inputs.smpFat} name="smpFat" onValueChange={handleInputChange} unit="%" />
                           <CustomCalculatorInput label="SMP SNF" value={inputs.smpSnf} name="smpSnf" onValueChange={handleInputChange} unit="%" />
                        </div>
                        <div className="space-y-2 p-2 bg-yellow-100/50 rounded">
                            <p className="font-medium text-sm">Water</p>
                           <CustomCalculatorInput label="Water Fat" value={inputs.waterFat} name="waterFat" onValueChange={handleInputChange} unit="%" />
                           <CustomCalculatorInput label="Water SNF" value={inputs.waterSnf} name="waterSnf" onValueChange={handleInputChange} unit="%" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4 bg-green-50 p-4 rounded-lg border border-green-200 md:col-span-2 lg:col-span-1">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg border-b pb-2">3. Your Target</h3>
                    <CustomCalculatorInput label="Required Fat" value={inputs.reqFat} name="reqFat" onValueChange={handleInputChange} unit="%" />
                    <CustomCalculatorInput label="Required SNF" value={inputs.reqSnf} name="reqSnf" onValueChange={handleInputChange} unit="%" />
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
            <Button onClick={calculate} className="w-full mt-4">Calculate Blend & Adjust</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                 <Alert className="mt-4">
                    <AlertTitle>Blending & Adjustment Plan</AlertTitle>
                    <AlertDescription>
                        <div className="mt-2 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: result }}/>
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
        correctionFactor: "0.72",
        manualFactor: ""
    });

    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const handleSelectChange = useCallback((value: string) => {
        setInputs(prev => ({...prev, correctionFactor: value, manualFactor: ''})); // Clear manual when select changes
    }, []);

    const getFactor = () => parseFloat(inputs.manualFactor) || parseFloat(inputs.correctionFactor);

    const handleCalcSnfTs = useCallback(() => {
        const fatNum = parseFloat(inputs.fat);
        const clrNum = parseFloat(inputs.clr);
        const factor = getFactor();

        setError(null);
        setResult(null);

        if (isNaN(fatNum) || isNaN(clrNum)) {
            setError("Please enter valid Fat and CLR values.");
            return;
        }

        const calculatedSnf = getSnf(fatNum, clrNum, factor);
        const calculatedTs = fatNum + calculatedSnf;
        setResult(`Calculated SNF: <strong>${calculatedSnf.toFixed(2)}%</strong><br/>Calculated TS: <strong>${calculatedTs.toFixed(2)}%</strong>`);
    }, [inputs]);

    const handleCalcClrTs = useCallback(() => {
        const fatNum = parseFloat(inputs.fat);
        const snfNum = parseFloat(inputs.snf);
        const factor = getFactor();

        setError(null);
        setResult(null);

        if (isNaN(fatNum) || isNaN(snfNum)) {
            setError("Please enter valid Fat and SNF values.");
            return;
        }

        const calculatedClr = (snfNum - (0.25 * fatNum) - factor) * 4;
        const calculatedTs = fatNum + snfNum;
        setResult(`Calculated CLR: <strong>${calculatedClr.toFixed(2)}</strong><br/>Calculated TS: <strong>${calculatedTs.toFixed(2)}%</strong>`);
    }, [inputs]);

    return (
        <CalculatorCard title="Fat, SNF, CLR & TS Calculator" description="Richmond's formula ke adhaar par doodh ke components ki aapas mein ganana karein.">
             <div className="bg-muted/50 p-4 rounded-lg mb-6 grid grid-cols-2 gap-4">
                <div>
                    <Label>Milk Type (Correction Factor)</Label>
                    <Select value={inputs.correctionFactor} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Correction Factor" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0.72">Cow Milk (0.72)</SelectItem>
                            <SelectItem value="0.85">Buffalo Milk (0.85)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <MemoizedInputField label="Manual Correction Factor" value={inputs.manualFactor} name="manualFactor" setter={handleInputChange} placeholder="e.g., 0.75" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate SNF & TS</h4>
                    <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} />
                    <MemoizedInputField label="CLR" value={inputs.clr} name="clr" setter={handleInputChange} />
                    <Button onClick={handleCalcSnfTs} className="w-full">Calculate SNF & TS</Button>
                </div>

                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate CLR & TS</h4>
                    <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} />
                    <MemoizedInputField label="SNF %" value={inputs.snf} name="snf" setter={handleInputChange} />
                    <Button onClick={handleCalcClrTs} className="w-full">Calculate CLR & TS</Button>
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
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target & Ingredient</h3>
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
    const [inputs, setInputs] = useState({
        milkQty: '100', milkFat: '3.0', milkClr: '28',
        creamFat: '40', targetFat: '4.5',
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const M_milk = parseFloat(inputs.milkQty);
        const F_milk = parseFloat(inputs.milkFat);
        const CLR_milk = parseFloat(inputs.milkClr);
        const F_cream = parseFloat(inputs.creamFat);
        const F_target = parseFloat(inputs.targetFat);

        if (isNaN(M_milk) || isNaN(F_milk) || isNaN(CLR_milk) || isNaN(F_cream) || isNaN(F_target)) {
            setError("Please fill all fields with valid numbers."); return;
        }
        if (F_target <= F_milk) {
            setError("Target Fat % must be higher than Initial Fat %."); return;
        }
        if (F_cream <= F_target) {
            setError("Cream Fat % must be higher than Target Fat %."); return;
        }

        // Step 1: Calculate cream needed to raise fat
        const M_cream = M_milk * (F_target - F_milk) / (F_cream - F_target);

        // Step 2: Calculate the new, lower CLR after adding cream
        const SNF_milk_percent = getSnf(F_milk, CLR_milk);
        const SNF_cream_percent = getSnf(F_cream, 20, 0.85); // Approx CLR for cream is ~20
        
        const total_snf_after_cream = (M_milk * SNF_milk_percent/100) + (M_cream * SNF_cream_percent/100);
        const total_milk_after_cream = M_milk + M_cream;
        const SNF_intermediate_percent = (total_snf_after_cream / total_milk_after_cream) * 100;
        
        const CLR_intermediate = (SNF_intermediate_percent - (0.25 * F_target) - 0.72) * 4;

        // Step 3: Calculate SMP needed to raise CLR back to original
        const smpSolidsPercent = 96; // Standard value for SMP total solids
        const smpNeeded = (total_milk_after_cream * (CLR_milk - CLR_intermediate) * 0.25) / smpSolidsPercent;
        
        setResult(`
            To increase Fat from <strong>${F_milk}%</strong> to <strong>${F_target}%</strong> and maintain CLR at <strong>${CLR_milk}</strong> for <strong>${M_milk} kg</strong> of milk, you need to add:
            <ul class='list-disc list-inside mt-2 text-lg'>
                <li>Cream (${F_cream}% Fat): <strong class='text-green-700'>${M_cream.toFixed(3)} kg</strong></li>
                <li>SMP (~96% TS): <strong class='text-blue-700'>${smpNeeded.toFixed(3)} kg</strong></li>
            </ul>
        `);

    }, [inputs]);
    
    return (
        <CalculatorCard title="Fat & CLR Maintainer Calculator" description="Increase milk Fat % with cream while maintaining the original CLR by adding Skimmed Milk Powder (SMP).">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Initial Milk</h3>
                    <MemoizedInputField label="Milk Quantity (kg)" value={inputs.milkQty} name="milkQty" setter={handleInputChange} />
                    <MemoizedInputField label="Milk Fat %" value={inputs.milkFat} name="milkFat" setter={handleInputChange} />
                    <MemoizedInputField label="Milk CLR" value={inputs.milkClr} name="milkClr" setter={handleInputChange} />
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target & Ingredients</h3>
                    <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                    <MemoizedInputField label="Cream Fat %" value={inputs.creamFat} name="creamFat" setter={handleInputChange} />
                </div>
            </div>
             <Button onClick={calculate} className="w-full mt-4">Calculate Cream & SMP</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    )
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
         <CalculatorCard title={`${calcType} Blending Calculator`} description={`Do alag ${calcType} % wale doodh ko milakar naya product banayein.`}>
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
    )
}

function FatBlendingCalc() { return <PearsonSquareCalc unit="%" calcType="Fat" /> }
function ClrBlendingCalc() { return <PearsonSquareCalc unit="" calcType="CLR" /> }


function FatSnfAdjustmentCalc() {
    const [inputs, setInputs] = useState({
        milkQty: '100', milkFat: '3.5', milkSnf: '8.5',
        targetFat: '4.5', targetSnf: '8.5',
        creamFat: '40', powderTs: '96'
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const M = parseFloat(inputs.milkQty);
        const Fm = parseFloat(inputs.milkFat) / 100;
        const Sm = parseFloat(inputs.milkSnf) / 100;
        const Ft = parseFloat(inputs.targetFat) / 100;
        const St = parseFloat(inputs.targetSnf) / 100;
        const Fc = parseFloat(inputs.creamFat) / 100;
        const Sc = getSnf(parseFloat(inputs.creamFat), 20, 0.72) / 100; // Estimate cream SNF
        const Fp = 1 / 100; // Powder fat is ~1%
        const Sp = parseFloat(inputs.powderTs) / 100 - Fp; // Powder SNF

        if ([M, Fm, Sm, Ft, St, Fc, Fp, Sp].some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
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

        if (C < 0 && P < 0) {
            setError("Calculation resulted in negative values. Please check your inputs. This might happen if target SNF is lower than initial SNF after fat adjustment.");
            return;
        }
        
        const finalWeight = M + (C > 0 ? C : 0) + (P > 0 ? P : 0);
        
        setResult(`
            For <strong>${M} kg</strong> of milk, to reach <strong>${inputs.targetFat}% Fat</strong> and <strong>${inputs.targetSnf}% SNF</strong>, you need to add:
            <ul class='list-disc list-inside mt-2'>
                ${C > 0 ? `<li>Cream (${inputs.creamFat}% Fat): <strong class='text-green-700 text-lg'>${C.toFixed(3)} kg</strong></li>` : ''}
                ${P > 0 ? `<li>SMP (${inputs.powderTs}% TS): <strong class='text-green-700 text-lg'>${P.toFixed(3)} kg</strong></li>` : ''}
            </ul>
            <p class='mt-3'>Final Batch Weight will be approximately <strong>${finalWeight.toFixed(3)} kg</strong>.</p>
        `);
    }, [inputs]);

    return (
        <CalculatorCard title="Fat & SNF Adjustment Calculator" description="Calculate how much Cream and Skim Milk Powder (SMP) to add to standardize both Fat and SNF upwards.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Initial Milk</h3>
                     <MemoizedInputField label="Milk Quantity (kg)" value={inputs.milkQty} name="milkQty" setter={handleInputChange} />
                     <MemoizedInputField label="Milk Fat %" value={inputs.milkFat} name="milkFat" setter={handleInputChange} />
                     <MemoizedInputField label="Milk SNF %" value={inputs.milkSnf} name="milkSnf" setter={handleInputChange} />
                </div>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Milk</h3>
                     <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                     <MemoizedInputField label="Target SNF %" value={inputs.targetSnf} name="targetSnf" setter={handleInputChange} />
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3 md:col-span-2">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Ingredients for Adjustment</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <MemoizedInputField label="Cream Fat % (Manual)" value={inputs.creamFat} name="creamFat" setter={handleInputChange} />
                         <MemoizedInputField label="Powder Total Solids (TS) % (Manual)" value={inputs.powderTs} name="powderTs" setter={handleInputChange} />
                     </div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Adjustment</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    )
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
    )
}

function KgFatSnfCalc() {
    const [liters, setLiters] = useState("");
    const [fat, setFat] = useState("");
    const [snf, setSnf] = useState("");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalc = () => {
        const litersVal = parseFloat(liters);
        const fatVal = parseFloat(fat);
        const snfVal = parseFloat(snf);

        setResult(null);
        setError(null);
        
        if(isNaN(litersVal) || isNaN(fatVal) || isNaN(snfVal)) {
            setError("Please fill all fields with numbers.");
            return;
        }

        const milkWeight = litersVal * componentProps.milkDensity;
        const fatKg = milkWeight * (fatVal / 100);
        const snfKg = milkWeight * (snfVal / 100);

        setResult(`In ${litersVal} Ltr of milk:<br/>- <strong>Total Fat:</strong> ${fatKg.toFixed(2)} Kg<br/>- <strong>Total SNF (Powder):</strong> ${snfKg.toFixed(2)} Kg`);
    }

    return (
        <CalculatorCard title="Kg Fat & SNF Calculator" description="Find out the amount (in Kg) of Fat and Powder (SNF) in milk from a given volume.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Milk Quantity (Liters)</Label><Input type="number" value={liters} onChange={e => setLiters(e.target.value)} placeholder="1000" /></div>
                <div><Label>Fat %</Label><Input type="number" value={fat} onChange={e => setFat(e.target.value)} placeholder="4.5" /></div>
                <div><Label>SNF %</Label><Input type="number" value={snf} onChange={e => setSnf(e.target.value)} placeholder="8.5" /></div>
            </div>
            <Button onClick={handleCalc} className="w-full mt-4">Calculate Components</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    )
}
    






