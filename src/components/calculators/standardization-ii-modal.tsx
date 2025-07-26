
"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getSnf } from "@/lib/utils"
import { componentProps } from "@/lib/data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const TABS = [
    { value: "fat-blending", label: "Fat Blending" },
    { value: "fat-adjustment", label: "Fat & SNF Adjustment" },
    { value: "clr-blending", label: "CLR Blending" },
    { value: "clr-correction", label: "CLR Correction" },
    { value: "component-qty", label: "Component Qty" },
    { value: "snf", label: "SNF Calculator" },
]

export function StandardizationIIModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Advanced Standardization</DialogTitle>
          <DialogDescription className="text-center">Advanced calculators for precise dairy processing.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="fat-blending" className="w-full flex flex-col h-full">
          <div className="flex justify-center">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-auto">
              {TABS.map(tab => (
                  <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">{tab.label}</TabsTrigger>
              ))}
            </TabsList>
          </div>
          <ScrollArea className="flex-1 mt-4 pr-2">
            <TabsContent value="fat-blending"><FatBlendingCalc /></TabsContent>
            <TabsContent value="fat-adjustment"><FatSnfAdjustmentCalc /></TabsContent>
            <TabsContent value="clr-blending"><ClrBlendingCalc /></TabsContent>
            <TabsContent value="clr-correction"><ClrCorrectionCalc /></TabsContent>
            <TabsContent value="component-qty"><ComponentQtyCalc /></TabsContent>
            <TabsContent value="snf"><SnfCalc /></TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
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
         <div>
            <p className="text-center text-sm text-gray-500 mb-4">Do alag {calcType} % wale doodh ko milakar naya product banayein.</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 1 (High {calcType})</h3>
                    <div><Label className="text-xs">{calcType} {unit}</Label><Input type="number" value={high} onChange={e => setHigh(e.target.value)} placeholder="e.g., 5.0" /></div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 2 (Low {calcType})</h3>
                    <div><Label className="text-xs">{calcType} {unit}</Label><Input type="number" value={low} onChange={e => setLow(e.target.value)} placeholder="e.g., 0.5" /></div>
                </div>
            </div>
             <div className="bg-primary/10 p-4 rounded-lg mb-4">
                 <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Product</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label className="text-xs">Target {calcType} {unit}</Label><Input type="number" value={target} onChange={e => setTarget(e.target.value)} placeholder="e.g., 3.0" /></div>
                    <div><Label className="text-xs">Target Batch Qty (Kg/Ltr)</Label><Input type="number" value={qty} onChange={e => setQty(e.target.value)} placeholder="e.g., 100" /></div>
                </div>
            </div>
            <Button onClick={handleCalc} className="w-full">Calculate Blend</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </div>
    )
}

function FatBlendingCalc() { return <PearsonSquareCalc unit="%" calcType="Fat" /> }
function ClrBlendingCalc() { return <PearsonSquareCalc unit="" calcType="CLR" /> }


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
        <div>
            <p className="text-center text-sm text-gray-500 mb-4">Temperature ke aadhar par Lactometer Reading ko correct karein.</p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Observed Lactometer Reading (OLR)</Label><Input type="number" value={olr} onChange={e => setOlr(e.target.value)} placeholder="28.5" /></div>
                <div><Label>Milk Temperature (°C)</Label><Input type="number" value={temp} onChange={e => setTemp(e.target.value)} placeholder="29" /></div>
                <p className="text-xs text-gray-500">Note: Standard calibration temperature is 27°C.</p>
            </div>
            <Button onClick={handleCalc} className="w-full mt-4">Correct CLR</Button>
            {result && <div className="mt-4 text-center"><p className="text-gray-600">Corrected Lactometer Reading (CLR):</p><p className="text-3xl font-bold text-green-700">{result}</p></div>}
        </div>
    )
}

function ComponentQtyCalc() {
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
        <div>
            <p className="text-center text-sm text-gray-500 mb-4">Doodh mein Fat aur Powder (SNF) ki matra (Kg mein) pata karein.</p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Milk Quantity (Liters)</Label><Input type="number" value={liters} onChange={e => setLiters(e.target.value)} placeholder="1000" /></div>
                <div><Label>Fat %</Label><Input type="number" value={fat} onChange={e => setFat(e.target.value)} placeholder="4.5" /></div>
                <div><Label>SNF %</Label><Input type="number" value={snf} onChange={e => setSnf(e.target.value)} placeholder="8.5" /></div>
            </div>
            <Button onClick={handleCalc} className="w-full mt-4">Calculate Components</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </div>
    )
}

function SnfCalc() {
    const [fat, setFat] = useState("4.5");
    const [clr, setClr] = useState("28.0");
    const [factor, setFactor] = useState("0.72");
    const [manualFactor, setManualFactor] = useState("");
    const [isManual, setIsManual] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleCalc = () => {
        const fatNum = parseFloat(fat);
        const clrNum = parseFloat(clr);
        const finalFactor = isManual ? parseFloat(manualFactor) : parseFloat(factor);
        
        if (isNaN(fatNum) || isNaN(clrNum) || isNaN(finalFactor)) {
            setResult("Invalid Input"); return;
        }
        setResult(getSnf(fatNum, clrNum, finalFactor).toFixed(2) + " %");
    }
    
    const handleSelectChange = (value: string) => {
        if (value === 'manual') {
            setIsManual(true);
            setFactor(value);
        } else {
            setIsManual(false);
            setFactor(value);
            setManualFactor("");
        }
    }


    return (
        <div>
            <p className="text-center text-sm text-gray-500 mb-4">SNF ko Richmond formula aur correction factor se calculate karein.</p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Fat %</Label><Input type="number" value={fat} onChange={e => setFat(e.target.value)} placeholder="4.5" /></div>
                <div><Label>CLR</Label><Input type="number" value={clr} onChange={e => setClr(e.target.value)} placeholder="28.0" /></div>
                <div>
                    <Label>Milk Type (Correction Factor)</Label>
                    <Select value={factor} onValueChange={handleSelectChange}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0.72">Cow Milk (Factor: 0.72)</SelectItem>
                            <SelectItem value="0.85">Buffalo Milk (Factor: 0.85)</SelectItem>
                            <SelectItem value="manual">Manual Factor</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {isManual && (
                     <div>
                        <Label>Manual Correction Factor</Label>
                        <Input type="number" value={manualFactor} onChange={e => setManualFactor(e.target.value)} placeholder="e.g., 0.75" />
                    </div>
                )}
            </div>
            <Button onClick={handleCalc} className="w-full mt-4">Calculate SNF</Button>
            {result && <div className="mt-4 text-center"><p className="text-gray-600">Calculated SNF:</p><p className="text-3xl font-bold text-green-700">{result}</p></div>}
        </div>
    )
}

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

        if (Ft < Fm) {
            setError("Target Fat must be higher than Milk Fat for this calculation.");
            return;
        }

        // Equations:
        // 1. M*Fm + C*Fc + P*Fp = (M+C+P)*Ft  (Fat balance)
        // 2. M*Sm + C*Sc + P*Sp = (M+C+P)*St  (SNF balance)
        // Solve for C (Cream) and P (Powder)
        
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

        if (C < 0 || P < 0) {
            setError("Calculation resulted in negative values. Please check your inputs. This might happen if target SNF is lower than initial SNF after fat adjustment.");
            return;
        }
        
        const finalWeight = M + C + P;
        
        setResult(`
            For <strong>${M} kg</strong> of milk, to reach <strong>${targetFat}% Fat</strong> and <strong>${targetSnf}% SNF</strong>, you need to add:
            <ul class='list-disc list-inside mt-2'>
                <li>Cream (${creamFat}% Fat): <strong class='text-green-700 text-lg'>${C.toFixed(3)} kg</strong></li>
                <li>SMP (${powderTs}% TS): <strong class='text-green-700 text-lg'>${P.toFixed(3)} kg</strong></li>
            </ul>
            <p class='mt-3'>Final Batch Weight will be approximately <strong>${finalWeight.toFixed(3)} kg</strong>.</p>
        `);
    };

    return (
        <div>
            <p className="text-center text-sm text-gray-500 mb-4">Calculate how much Cream and Skim Milk Powder (SMP) to add to standardize both Fat and SNF upwards.</p>
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
        </div>
    )
}
