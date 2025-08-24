
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
import { getSnf } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Blend, Milk, SlidersHorizontal, Combine, Bot, Calculator, Settings, ChevronsUp, Target } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type CalculatorType = 'fat-snf-clr-ts' | 'fat-blending' | 'fat-snf-adjustment' | 'reconstituted-milk' | 'recombined-milk' | 'clr-blending' | 'custom-calculator' | 'milk-blending' | 'clr-increase' | 'fat-clr-maintainer' | 'two-milk-blending-target';

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
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setter(e.target.name, e.target.value);
    };
    
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <div className="flex items-center">
                <Input type="number" name={name} id={name} value={inputValue} onChange={handleChange} className={unit ? "rounded-r-none" : ""} placeholder={placeholder} />
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
        onValueChange(e.target.name, e.target.value);
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
             waterToAdd = (snf_diff * skF - fat_diff * skS) / det;
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
    const [values, setValues] = useState(initialValues);

    const handleChange = useCallback((field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const newValues = { ...values, [field]: value };
        setValues(newValues);
        onInputChange(milkNum, field, value);
    }, [values, onInputChange, milkNum]);

    return (
        <div className="bg-muted/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-gray-700 font-headline">Milk Source {milkNum}</h3>
            <div><Label>Quantity (kg/L)</Label><Input type="number" value={values.qty} onChange={handleChange('qty')} /></div>
            <div><Label>Fat %</Label><Input type="number" value={values.fat} onChange={handleChange('fat')} /></div>
            <div><Label>CLR</Label><Input type="number" value={values.clr} onChange={handleChange('clr')} /></div>
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
        fTarget: '4.5', cTarget: '28',
        qTotal: '1000'
    });
    const [result, setResult] = useState<{ q1: number, q2: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((field: string, value: string) => {
        setInputs(prev => ({ ...prev, [field]: value }));
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

        const det = (F1 * C2) - (F1 * CT) - (F2 * C1) + (F2 * CT) + (FT * C1) - (FT * C2);
        
        if (Math.abs(det) < 1e-9) {
            setError("Cannot solve. The milk properties might be linearly dependent or the target is unachievable with the given sources.");
            return;
        }

        const Q1 = QT * (F2 * C2 - F2 * CT - FT * C2 + FT * CT) / det;
        const Q2 = QT - Q1;

        if (Q1 < 0 || Q2 < 0 || Q1 > QT || Q2 > QT) {
             setError("The target composition is not achievable with the given milk sources. The target Fat and CLR must be between the values of the source milks.");
            return;
        }

        setResult({ q1: Q1, q2: Q2 });

    }, [inputs]);

    return (
        <CalculatorCard title="Two-Milk Blending to Target Calculator" description="Calculate the required quantities of two different milk sources to achieve a desired final batch composition (Fat% and CLR).">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Source 1</h3>
                    <div><Label>Fat %</Label><Input type="number" value={inputs.f1} onChange={e => handleInputChange('f1', e.target.value)} /></div>
                    <div><Label>CLR</Label><Input type="number" value={inputs.c1} onChange={e => handleInputChange('c1', e.target.value)} /></div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Source 2</h3>
                    <div><Label>Fat %</Label><Input type="number" value={inputs.f2} onChange={e => handleInputChange('f2', e.target.value)} /></div>
                    <div><Label>CLR</Label><Input type="number" value={inputs.c2} onChange={e => handleInputChange('c2', e.target.value)} /></div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg space-y-3 md:col-span-2">
                    <h3 className="font-semibold text-gray-700 font-headline">Target Batch</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div><Label>Total Batch Qty (kg/L)</Label><Input type="number" value={inputs.qTotal} onChange={e => handleInputChange('qTotal', e.target.value)} /></div>
                        <div><Label>Target Fat %</Label><Input type="number" value={inputs.fTarget} onChange={e => handleInputChange('fTarget', e.target.value)} /></div>
                        <div><Label>Target CLR</Label><Input type="number" value={inputs.cTarget} onChange={e => handleInputChange('cTarget', e.target.value)} /></div>
                    </div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Blend Quantities</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                 <Alert className="mt-4">
                    <AlertTitle>Required Quantities for {inputs.qTotal} kg/L Batch</AlertTitle>
                    <AlertDescription>
                        <div className="space-y-2 mt-2">
                           <p><strong>Milk Source 1:</strong> <span className="font-bold text-lg text-green-700">{result.q1.toFixed(3)} kg/L</span></p>
                           <p><strong>Milk Source 2:</strong> <span className="font-bold text-lg text-green-700">{result.q2.toFixed(3)} kg/L</span></p>
                        </div>
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
        setInputs(prev => ({...prev, correctionFactor: value}));
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
                    <Label>Manual Correction Factor</Label>
                    <Input id="manual-factor" type="number" placeholder="e.g., 0.75" value={inputs.manualFactor} onChange={e => handleInputChange('manualFactor', e.target.value)} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate SNF & TS</h4>
                    <div>
                        <Label htmlFor="fat-for-snf">Fat %</Label>
                        <Input id="fat-for-snf" type="number" value={inputs.fat} onChange={e => handleInputChange('fat', e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="clr-for-snf">CLR</Label>
                        <Input id="clr-for-snf" type="number" value={inputs.clr} onChange={e => handleInputChange('clr', e.target.value)} />
                    </div>
                    <Button onClick={handleCalcSnfTs} className="w-full">Calculate SNF & TS</Button>
                </div>

                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate CLR & TS</h4>
                    <div>
                        <Label htmlFor="fat-for-clr">Fat %</Label>
                        <Input id="fat-for-clr" type="number" value={inputs.fat} onChange={e => handleInputChange('fat', e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="snf-for-clr">SNF %</Label>
                        <Input id="snf-for-clr" type="number" value={inputs.snf} onChange={e => handleInputChange('snf', e.target.value)} />
                    </div>
                    <Button onClick={handleCalcClrTs} className="w-full">Calculate CLR & TS</Button>
                </div>
            </div>

            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function ClrIncreaseCalc() {
    const [initialQty, setInitialQty] = useState('100');
    const [initialClr, setInitialClr] = useState('27');
    const [targetClr, setTargetClr] = useState('28.5');
    const [smpSolids, setSmpSolids] = useState('96');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculate = useCallback(() => {
        const Q1 = parseFloat(initialQty);
        const CLR1 = parseFloat(initialClr);
        const CLR_target = parseFloat(targetClr);
        const smpSolidsPercent = parseFloat(smpSolids);
        
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
        
    }, [initialQty, initialClr, targetClr, smpSolids]);

    return (
        <CalculatorCard title="CLR Increase Calculator (with SMP)" description="Calculate the amount of Skimmed Milk Powder (SMP) needed to increase the CLR of milk using the provided formula.">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Initial Milk</h3>
                    <div><Label>Milk Quantity (kg)</Label><Input type="number" value={initialQty} onChange={e => setInitialQty(e.target.value)} /></div>
                    <div><Label>Initial CLR</Label><Input type="number" value={initialClr} onChange={e => setInitialClr(e.target.value)} /></div>
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target & Ingredient</h3>
                    <div><Label>Target CLR</Label><Input type="number" value={targetClr} onChange={e => setTargetClr(e.target.value)} /></div>
                    <div><Label>SMP Total Solids (%)</Label><Input type="number" value={smpSolids} onChange={e => setSmpSolids(e.target.value)} /></div>
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
                    <div><Label>Milk Quantity (kg)</Label><Input type="number" value={inputs.milkQty} onChange={e => handleInputChange('milkQty', e.target.value)} /></div>
                    <div><Label>Milk Fat %</Label><Input type="number" value={inputs.milkFat} onChange={e => handleInputChange('milkFat', e.target.value)} /></div>
                    <div><Label>Milk CLR</Label><Input type="number" value={inputs.milkClr} onChange={e => handleInputChange('milkClr', e.target.value)} /></div>
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target & Ingredients</h3>
                    <div><Label>Target Fat %</Label><Input type="number" value={inputs.targetFat} onChange={e => handleInputChange('targetFat', e.target.value)} /></div>
                    <div><Label>Cream Fat %</Label><Input type="number" value={inputs.creamFat} onChange={e => handleInputChange('creamFat', e.target.value)} /></div>
                </div>
            </div>
             <Button onClick={calculate} className="w-full mt-4">Calculate Cream & SMP</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    )
}

const PearsonSquareCalc = ({ unit, calcType }: { unit: string, calcType: 'Fat' | 'CLR' }) => {
    const [high, setHigh] = useState("");
    const [low, setLow] = useState("");
    const [target, setTarget] = useState("");
    const [qty, setQty] = useState("");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalc = useCallback(() => {
        const highVal = parseFloat(high);
        const lowVal = parseFloat(low);
        const targetVal = parseFloat(target);
        const qtyVal = parseFloat(qty);
        
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
    }, [high, low, target, qty, unit, calcType]);

    return (
         <CalculatorCard title={`${calcType} Blending Calculator`} description={`Do alag ${calcType} % wale doodh ko milakar naya product banayein.`}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 1 (High ${calcType})</h3>
                    <div><Label className="text-xs">{calcType} {unit}</Label><Input type="number" value={high} onChange={e => setHigh(e.target.value)} placeholder="e.g., 5.0" /></div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 2 (Low ${calcType})</h3>
                    <div><Label className="text-xs">{calcType} {unit}</Label><Input type="number" value={low} onChange={e => setLow(e.target.value)} placeholder="e.g., 0.5" /></div>
                </div>
            </div>
             <div className="bg-primary/10 p-4 rounded-lg mb-4">
                 <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Product</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label className="text-xs">Target ${calcType} {unit}</Label><Input type="number" value={target} onChange={e => setTarget(e.target.value)} placeholder="e.g., 3.0" /></div>
                    <div><Label className="text-xs">Target Batch Qty (Kg/Ltr)</Label><Input type="number" value={qty} onChange={e => setQty(e.target.value)} placeholder="e.g., 100" /></div>
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
    const [milkQty, setMilkQty] = useState('100');
    const [milkFat, setMilkFat] = useState('3.5');
    const [milkSnf, setMilkSnf] = useState('8.5');
    const [targetFat, setTargetFat] = useState('4.5');
    const [targetSnf, setTargetSnf] = useState('8.5');
    const [creamFat, setCreamFat] = useState('40');
    const [powderTs, setPowderTs] = useState('96');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const M = parseFloat(milkQty);
        const Fm = parseFloat(milkFat) / 100;
        const Sm = parseFloat(milkSnf) / 100;
        const Ft = parseFloat(targetFat) / 100;
        const St = parseFloat(targetSnf) / 100;
        const Fc = parseFloat(creamFat) / 100;
        const Sc = getSnf(parseFloat(creamFat), 20, 0.72) / 100; // Estimate cream SNF
        const Fp = 1 / 100; // Powder fat is ~1%
        const Sp = parseFloat(powderTs) / 100 - Fp; // Powder SNF

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
            For <strong>${M} kg</strong> of milk, to reach <strong>${targetFat}% Fat</strong> and <strong>${targetSnf}% SNF</strong>, you need to add:
            <ul class='list-disc list-inside mt-2'>
                ${C > 0 ? `<li>Cream (${creamFat}% Fat): <strong class='text-green-700 text-lg'>${C.toFixed(3)} kg</strong></li>` : ''}
                ${P > 0 ? `<li>SMP (${powderTs}% TS): <strong class='text-green-700 text-lg'>${P.toFixed(3)} kg</strong></li>` : ''}
            </ul>
            <p class='mt-3'>Final Batch Weight will be approximately <strong>${finalWeight.toFixed(3)} kg</strong>.</p>
        `);
    }, [milkQty, milkFat, milkSnf, targetFat, targetSnf, creamFat, powderTs]);

    return (
        <CalculatorCard title="Fat & SNF Adjustment Calculator" description="Calculate how much Cream and Skim Milk Powder (SMP) to add to standardize both Fat and SNF upwards.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Initial Milk</h3>
                    <div><Label>Milk Quantity (kg)</Label><Input type="number" value={milkQty} onChange={e => setMilkQty(e.target.value)} /></div>
                    <div><Label>Milk Fat %</Label><Input type="number" value={milkFat} onChange={e => setMilkFat(e.target.value)} /></div>
                    <div><Label>Milk SNF %</Label><Input type="number" value={milkSnf} onChange={e => setMilkSnf(e.target.value)} /></div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Milk</h3>
                    <div><Label>Target Fat %</Label><Input type="number" value={targetFat} onChange={e => setTargetFat(e.target.value)} /></div>
                    <div><Label>Target SNF %</Label><Input type="number" value={targetSnf} onChange={e => setTargetSnf(e.target.value)} /></div>
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3 md:col-span-2">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Ingredients for Adjustment</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div><Label>Cream Fat % (Manual)</Label><Input type="number" value={creamFat} onChange={e => setCreamFat(e.target.value)} /></div>
                         <div><Label>Powder Total Solids (TS) % (Manual)</Label><Input type="number" value={powderTs} onChange={e => setPowderTs(e.target.value)} /></div>
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
    const [batchQty, setBatchQty] = useState('100');
    const [targetTS, setTargetTS] = useState('12.5');
    const [powderTS, setPowderTS] = useState('96');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        const qty = parseFloat(batchQty);
        const tTS = parseFloat(targetTS) / 100;
        const pTS = parseFloat(powderTS) / 100;

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

        setResult(`To make <strong>${qty} kg</strong> of milk with <strong>${targetTS}% TS</strong>, you need:<br/>- <strong class='text-green-700'>${powderNeeded.toFixed(3)} kg</strong> of Milk Powder (${powderTS}%)<br/>- <strong class='text-green-700'>${waterNeeded.toFixed(3)} kg</strong> of Water`);
    }, [batchQty, targetTS, powderTS]);

    return (
        <CalculatorCard title="Reconstituted Milk Calculator" description="Calculate how much Milk Powder and Water are needed to create milk of a specific Total Solids (TS) content.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Target Batch Quantity (kg)</Label><Input type="number" value={batchQty} onChange={e => setBatchQty(e.target.value)} /></div>
                <div><Label>Target Total Solids (TS) %</Label><Input type="number" value={targetTS} onChange={e => setTargetTS(e.target.value)} /></div>
                <div><Label>Milk Powder Total Solids (TS) %</Label><Input type="number" value={powderTS} onChange={e => setPowderTS(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function RecombinedMilkCalc() {
    const [batchQty, setBatchQty] = useState('100');
    const [targetFat, setTargetFat] = useState('3.5');
    const [targetSNF, setTargetSNF] = useState('8.5');
    const [smpFat, setSmpFat] = useState('1.0');
    const [smpSNF, setSmpSNF] = useState('95.0');
    const [fatSourceFat, setFatSourceFat] = useState('99.8');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const Q = parseFloat(batchQty);
        const Ft = parseFloat(targetFat) / 100;
        const St = parseFloat(targetSNF) / 100;
        const Fp = parseFloat(smpFat) / 100;
        const Sp = parseFloat(smpSNF) / 100;
        const Fb = parseFloat(fatSourceFat) / 100;

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

        setResult(`To make <strong>${Q} kg</strong> of milk with <strong>${targetFat}% Fat</strong> and <strong>${targetSNF}% SNF</strong>, you need:<br/>
        - <strong class='text-green-700'>${P.toFixed(3)} kg</strong> of Skim Milk Powder<br/>
        - <strong class='text-green-700'>${B.toFixed(3)} kg</strong> of Butter Oil/AMF<br/>
        - <strong class='text-green-700'>${W.toFixed(3)} kg</strong> of Water`);
    }, [batchQty, targetFat, targetSNF, smpFat, smpSNF, fatSourceFat]);

    return (
        <CalculatorCard title="Recombined Milk Calculator" description="Calculate the required Skim Milk Powder (SMP), Butter Oil (or other fat source), and Water to create milk of a desired composition.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Milk</h3>
                    <div><Label>Target Batch Quantity (kg)</Label><Input type="number" value={batchQty} onChange={e => setBatchQty(e.target.value)} /></div>
                    <div><Label>Target Fat %</Label><Input type="number" value={targetFat} onChange={e => setTargetFat(e.target.value)} /></div>
                    <div><Label>Target SNF %</Label><Input type="number" value={targetSNF} onChange={e => setTargetSNF(e.target.value)} /></div>
                </div>
                 <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Ingredients Composition</h3>
                     <div><Label>Skim Milk Powder (SMP) Fat %</Label><Input type="number" value={smpFat} onChange={e => setSmpFat(e.target.value)} /></div>
                     <div><Label>Skim Milk Powder (SMP) SNF %</Label><Input type="number" value={smpSNF} onChange={e => setSmpSNF(e.target.value)} /></div>
                     <div><Label>Fat Source (e.g., Butter Oil) Fat %</Label><Input type="number" value={fatSourceFat} onChange={e => setFatSourceFat(e.target.value)} /></div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Recombined Milk</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}



    

