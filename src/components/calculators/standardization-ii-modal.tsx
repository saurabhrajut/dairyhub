
"use client"

import { useState } from "react"
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
import { ArrowLeft, Blend, Milk, SlidersHorizontal, Combine, Bot, Calculator, Settings } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type CalculatorType = 'fat-snf-clr-ts' | 'fat-blending' | 'fat-snf-adjustment' | 'reconstituted-milk' | 'recombined-milk' | 'clr-blending' | 'custom-calculator';

const calculatorsInfo = {
    'fat-snf-clr-ts': { title: "Fat, SNF, CLR & TS", icon: Calculator, component: FatSnfClrTsCalc },
    'fat-blending': { title: "Fat Blending", icon: Blend, component: FatBlendingCalc },
    'custom-calculator': { title: 'Custom Calculator', icon: Settings, component: CustomStandardizationCalc },
    'fat-snf-adjustment': { title: "Fat & SNF Adjustment", icon: SlidersHorizontal, component: FatSnfAdjustmentCalc },
    'reconstituted-milk': { title: "Reconstituted Milk", icon: Milk, component: ReconstitutedMilkCalc },
    'recombined-milk': { title: "Recombined Milk", icon: Combine, component: RecombinedMilkCalc },
    'clr-blending': { title: "CLR Blending", icon: Bot, component: ClrBlendingCalc },
};

export function StandardizationIIModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const handleBack = () => setActiveCalculator(null);

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

function CustomStandardizationCalc() {
    const [inputs, setInputs] = useState({
        milkQty: '1000',
        milkFat: '3.5',
        milkSnf: '8.5',
        creamFat: '40',
        creamSnf: '5.4', // Cream SNF is typically (100 - Fat%) * 0.09
        skimFat: '0.1',
        skimSnf: '8.8',
        smpFat: '1.0',
        smpSnf: '96.0',
        reqFat: '4.5',
        reqSnf: '8.5',
    });
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: keyof typeof inputs, value: string) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    const calculate = () => {
        setResult(null);
        setError(null);
    
        const numInputs = Object.entries(inputs).reduce((acc, [key, value]) => {
            acc[key as keyof typeof inputs] = parseFloat(value);
            return acc;
        }, {} as Record<keyof typeof inputs, number>);
    
        if (Object.values(numInputs).some(v => isNaN(v) && v !== undefined)) {
            setError("Please fill all numeric fields correctly.");
            return;
        }

        const { milkQty, milkFat, milkSnf, creamFat, creamSnf, skimFat, skimSnf, smpFat, smpSnf, reqFat, reqSnf } = numInputs;
    
        // Convert percentages to fractions
        const iF = milkFat / 100, iS = milkSnf / 100;
        const cF = creamFat / 100, cS = creamSnf / 100;
        const pF = smpFat / 100, pS = smpSnf / 100;
        const sF = skimFat / 100, sS = skimSnf / 100;
        const tF = reqFat / 100, tS = reqSnf / 100;
    
        // Fat and SNF deficit/surplus in the initial milk
        const fatDifference = tF - iF;
        const snfDifference = tS - iS;
    
        // Setup equations for a 2x2 system:
        // C * (cF - tF) + P * (pF - tF) + S * (sF - tF) + W * (0 - tF) = M * (tF - iF)
        // C * (cS - tS) + P * (pS - tS) + S * (sS - tS) + W * (0 - tS) = M * (tS - iS)
        // Simplified for Cream and SMP addition/removal
        
        const fatNeeded = milkQty * fatDifference;
        const snfNeeded = milkQty * snfDifference;
    
        // This is a system of linear equations:
        // Eq1: Cream_qty * cF + SMP_qty * pF + Skim_qty * sF + Water_qty * 0 = Fat_to_add/remove
        // Eq2: Cream_qty * cS + SMP_qty * pS + Skim_qty * sS + Water_qty * 0 = SNF_to_add/remove
        // Let's solve for the most common scenario: adding Cream and SMP.
    
        const det = (cF - tF) * (pS - tS) - (pF - tF) * (cS - tS);
    
        if (Math.abs(det) < 1e-6) {
            setError("Cannot calculate. The properties of your additives (Cream, SMP) are too similar to solve the equations. Please check your input percentages.");
            return;
        }
    
        let creamQty = (fatNeeded * (pS - tS) - snfNeeded * (pF - tF)) / det;
        let smpQty = (snfNeeded * (cF - tF) - fatNeeded * (cS - tS)) / det;
        let skimQty = 0;
        let waterQty = 0;
    
        // Handle other cases (removal or using skim/water)
        if (creamQty < 0) { // Need to remove fat, likely using skim milk
            skimQty = -creamQty * (cF/sF); // Approximation, should be resolved better
            creamQty = 0;
        }
        
        if (snfNeeded < 0 && fatNeeded > -1e-6) { // SNF is high, fat is okay or low -> add water
           // W * (-tS) = M * (tS - iS) => W = M * (iS/tS - 1)
           waterQty = milkQty * (iS/tS - 1);
           smpQty = 0;
        }
    
        const finalQty = milkQty + creamQty + smpQty + skimQty + waterQty;
        const finalFatMass = (milkQty * iF) + (creamQty * cF) + (smpQty * pF) + (skimQty * sF);
        const finalSnfMass = (milkQty * iS) + (creamQty * cS) + (smpQty * pS) + (skimQty * sS);
    
        const finalFatPercent = (finalFatMass / finalQty) * 100;
        const finalSnfPercent = (finalSnfMass / finalQty) * 100;
    
        let resultText = "<p>To standardize your milk, you need to add:</p><ul class='list-disc list-inside mt-2 text-lg'>";
        if (Math.abs(creamQty) > 1e-3) resultText += `<li><strong>Cream:</strong> ${creamQty.toFixed(3)} kg</li>`;
        if (Math.abs(smpQty) > 1e-3) resultText += `<li><strong>SMP:</strong> ${smpQty.toFixed(3)} kg</li>`;
        if (Math.abs(skimQty) > 1e-3) resultText += `<li><strong>Skim Milk:</strong> ${skimQty.toFixed(3)} kg</li>`;
        if (Math.abs(waterQty) > 1e-3) resultText += `<li><strong>Water:</strong> ${waterQty.toFixed(3)} kg</li>`;
        if (Math.abs(creamQty) < 1e-3 && Math.abs(smpQty) < 1e-3 && Math.abs(skimQty) < 1e-3 && Math.abs(waterQty) < 1e-3) {
            resultText += "<li>No addition required. Milk already meets specifications.</li>";
        }
        resultText += "</ul>";
        
        resultText += "<hr class='my-4' />";
        resultText += "<h4 class='font-bold text-md'>Final Batch Summary:</h4><ul class='list-disc list-inside mt-2 text-lg'>";
        resultText += `<li><strong>Final Milk Quantity:</strong> ${finalQty.toFixed(3)} kg</li>`;
        resultText += `<li><strong>Final Fat % Achieved:</strong> ${finalFatPercent.toFixed(2)}%</li>`;
        resultText += `<li><strong>Final SNF % Achieved:</strong> ${finalSnfPercent.toFixed(2)}%</li>`;
        resultText += "</ul>";
    
        setResult(resultText);
    };

    return (
        <CalculatorCard title="Multi-Purpose Milk Standardization Calculator" description="A precise tool to adjust Fat and SNF using various sources like Cream, Skim Milk, SMP, and Water.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-3 bg-muted/30 p-4 rounded-lg space-y-3 border-l-4 border-primary">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg">1. Initial Milk</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div><Label>Milk Quantity (kg)</Label><Input type="number" value={inputs.milkQty} onChange={e => handleInputChange('milkQty', e.target.value)} /></div>
                        <div><Label>Fat in Milk (%)</Label><Input type="number" value={inputs.milkFat} onChange={e => handleInputChange('milkFat', e.target.value)} /></div>
                        <div><Label>SNF in Milk (%)</Label><Input type="number" value={inputs.milkSnf} onChange={e => handleInputChange('milkSnf', e.target.value)} /></div>
                    </div>
                </div>
                <div className="lg:col-span-3 bg-muted/30 p-4 rounded-lg space-y-3 border-l-4 border-yellow-500">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg">2. Available Sources for Adjustment</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div><Label>Cream Fat (%)</Label><Input type="number" value={inputs.creamFat} onChange={e => handleInputChange('creamFat', e.target.value)} /></div>
                        <div><Label>Cream SNF (%)</Label><Input type="number" value={inputs.creamSnf} onChange={e => handleInputChange('creamSnf', e.target.value)} /></div>
                        <div><Label>SMP SNF (%)</Label><Input type="number" value={inputs.smpSnf} onChange={e => handleInputChange('smpSnf', e.target.value)} /></div>
                        <div><Label>SMP Fat (%)</Label><Input type="number" value={inputs.smpFat} onChange={e => handleInputChange('smpFat', e.target.value)} /></div>
                        <div><Label>Skim Milk Fat (%)</Label><Input type="number" value={inputs.skimFat} onChange={e => handleInputChange('skimFat', e.target.value)} /></div>
                        <div><Label>Skim Milk SNF (%)</Label><Input type="number" value={inputs.skimSnf} onChange={e => handleInputChange('skimSnf', e.target.value)} /></div>
                    </div>
                </div>
                <div className="lg:col-span-3 bg-muted/30 p-4 rounded-lg space-y-3 border-l-4 border-green-600">
                    <h3 className="font-semibold text-gray-800 font-headline text-lg">3. Final Requirement</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><Label>Required Fat (%)</Label><Input type="number" value={inputs.reqFat} onChange={e => handleInputChange('reqFat', e.target.value)} /></div>
                        <div><Label>Required SNF (%)</Label><Input type="number" value={inputs.reqSnf} onChange={e => handleInputChange('reqSnf', e.target.value)} /></div>
                    </div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-6 text-lg py-6">➡️ Calculate Standardization</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle className="text-xl font-bold mb-4">📊 Results</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function FatSnfClrTsCalc() {
    const [fat, setFat] = useState("4.5");
    const [clr, setClr] = useState("28.0");
    const [snf, setSnf] = useState("8.5");
    const [correctionFactor, setCorrectionFactor] = useState("0.72");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalcSnfTs = () => {
        const fatNum = parseFloat(fat);
        const clrNum = parseFloat(clr);
        const factor = parseFloat(correctionFactor);

        setError(null);
        setResult(null);

        if (isNaN(fatNum) || isNaN(clrNum)) {
            setError("Please enter valid Fat and CLR values.");
            return;
        }

        const calculatedSnf = getSnf(fatNum, clrNum, factor);
        const calculatedTs = fatNum + calculatedSnf;
        setResult(`Calculated SNF: <strong>${calculatedSnf.toFixed(2)}%</strong><br/>Calculated TS: <strong>${calculatedTs.toFixed(2)}%</strong>`);
    };

    const handleCalcClrTs = () => {
        const fatNum = parseFloat(fat);
        const snfNum = parseFloat(snf);
        const factor = parseFloat(correctionFactor);

        setError(null);
        setResult(null);

        if (isNaN(fatNum) || isNaN(snfNum)) {
            setError("Please enter valid Fat and SNF values.");
            return;
        }

        const calculatedClr = (snfNum - (0.25 * fatNum) - factor) * 4;
        const calculatedTs = fatNum + snfNum;
        setResult(`Calculated CLR: <strong>${calculatedClr.toFixed(2)}</strong><br/>Calculated TS: <strong>${calculatedTs.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Fat, SNF, CLR & TS Calculator" description="Richmond's formula ke adhaar par doodh ke components ki aapas mein ganana karein.">
            <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <Label>Correction Factor</Label>
                <Select value={correctionFactor} onValueChange={setCorrectionFactor}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Correction Factor" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0.72">Cow Milk (0.72)</SelectItem>
                        <SelectItem value="0.85">Buffalo Milk (0.85)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calculator 1: Calculate SNF & TS */}
                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate SNF & TS</h4>
                    <div>
                        <Label htmlFor="fat-for-snf">Fat %</Label>
                        <Input id="fat-for-snf" type="number" value={fat} onChange={e => setFat(e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="clr-for-snf">CLR</Label>
                        <Input id="clr-for-snf" type="number" value={clr} onChange={e => setClr(e.target.value)} />
                    </div>
                    <Button onClick={handleCalcSnfTs} className="w-full">Calculate SNF & TS</Button>
                </div>

                {/* Calculator 2: Calculate CLR & TS */}
                <div className="bg-card p-4 rounded-lg border space-y-4">
                    <h4 className="font-semibold text-gray-700 text-center font-headline">Calculate CLR & TS</h4>
                    <div>
                        <Label htmlFor="fat-for-clr">Fat %</Label>
                        <Input id="fat-for-clr" type="number" value={fat} onChange={e => setFat(e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="snf-for-clr">SNF %</Label>
                        <Input id="snf-for-clr" type="number" value={snf} onChange={e => setSnf(e.target.value)} />
                    </div>
                    <Button onClick={handleCalcClrTs} className="w-full">Calculate CLR & TS</Button>
                </div>
            </div>

            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}


const PearsonSquareCalc = ({ unit, calcType }: { unit: string, calcType: 'Fat' | 'CLR' }) => {
    const [high, setHigh] = useState("");
    const [low, setLow] = useState("");
    const [target, setTarget] = useState("");
    const [qty, setQty] = useState("");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalc = () => {
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
    }

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

    const calculate = () => {
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
    };

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

    const calculate = () => {
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
    };

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

    const calculate = () => {
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
    };

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

