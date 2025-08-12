
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const TABS = [
    { value: "fat-blending", label: "Fat Blending" },
    { value: "fat-adjustment", label: "Fat & SNF Adjustment" },
    { value: "reconstituted-milk", label: "Reconstituted Milk" },
    { value: "recombined-milk", label: "Recombined Milk" },
    { value: "clr-blending", label: "CLR Blending" },
]

export function StandardizationIIModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Advanced Standardization</DialogTitle>
          <DialogDescription className="text-center">Advanced calculators for precise dairy processing.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="fat-blending" className="w-full flex flex-col flex-1 min-h-0">
          <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-5">
            {TABS.map(tab => (
                <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm p-2 h-auto">{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <TabsContent value="fat-blending" className="mt-0"><FatBlendingCalc /></TabsContent>
            <TabsContent value="fat-adjustment" className="mt-0"><FatSnfAdjustmentCalc /></TabsContent>
            <TabsContent value="reconstituted-milk" className="mt-0"><ReconstitutedMilkCalc /></TabsContent>
            <TabsContent value="recombined-milk" className="mt-0"><RecombinedMilkCalc /></TabsContent>
            <TabsContent value="clr-blending" className="mt-0"><ClrBlendingCalc /></TabsContent>
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
        </div>
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

        const totalSolidsNeeded = qty * tTS;
        const powderNeeded = totalSolidsNeeded / pTS;
        const waterNeeded = qty - powderNeeded;

        if (waterNeeded < 0) {
            setError("Powder TS% cannot be less than Target TS%. Please check your inputs.");
            return;
        }

        setResult(`To make <strong>${qty} kg</strong> of milk with <strong>${targetTS}% TS</strong>, you need:<br/>- <strong class='text-green-700'>${powderNeeded.toFixed(3)} kg</strong> of Milk Powder (${powderTS}%)<br/>- <strong class='text-green-700'>${waterNeeded.toFixed(3)} kg</strong> of Water`);
    };

    return (
        <div>
            <p className="text-center text-sm text-gray-500 mb-4">Calculate how much Milk Powder and Water are needed to create milk of a specific Total Solids (TS) content.</p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Target Batch Quantity (kg)</Label><Input type="number" value={batchQty} onChange={e => setBatchQty(e.target.value)} /></div>
                <div><Label>Target Total Solids (TS) %</Label><Input type="number" value={targetTS} onChange={e => setTargetTS(e.target.value)} /></div>
                <div><Label>Milk Powder Total Solids (TS) %</Label><Input type="number" value={powderTS} onChange={e => setPowderTS(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </div>
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
        <div>
             <p className="text-center text-sm text-gray-500 mb-4">Calculate the required Skim Milk Powder (SMP), Butter Oil (or other fat source), and Water to create milk of a desired composition.</p>
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
        </div>
    );
}
