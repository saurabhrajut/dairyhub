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
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto">
              {TABS.map(tab => (
                  <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">{tab.label}</TabsTrigger>
              ))}
            </TabsList>
          </div>
          <ScrollArea className="flex-1 mt-4 pr-2">
            <TabsContent value="fat-blending"><FatBlendingCalc /></TabsContent>
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
    const [result, setResult] = useState<string | null>(null);

    const handleCalc = () => {
        const fatNum = parseFloat(fat);
        const clrNum = parseFloat(clr);
        const factorNum = parseFloat(factor);
        if (isNaN(fatNum) || isNaN(clrNum) || isNaN(factorNum)) {
            setResult("Invalid Input"); return;
        }
        setResult(getSnf(fatNum, clrNum, factorNum).toFixed(2) + " %");
    }

    return (
        <div>
            <p className="text-center text-sm text-gray-500 mb-4">SNF ko Richmond formula aur correction factor se calculate karein.</p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Fat %</Label><Input type="number" value={fat} onChange={e => setFat(e.target.value)} placeholder="4.5" /></div>
                <div><Label>CLR</Label><Input type="number" value={clr} onChange={e => setClr(e.target.value)} placeholder="28.0" /></div>
                <div>
                    <Label>Milk Type (Correction Factor)</Label>
                    <Select value={factor} onValueChange={setFactor}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0.72">Cow Milk (Factor: 0.72)</SelectItem>
                            <SelectItem value="0.85">Buffalo Milk (Factor: 0.85)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button onClick={handleCalc} className="w-full mt-4">Calculate SNF</Button>
            {result && <div className="mt-4 text-center"><p className="text-gray-600">Calculated SNF:</p><p className="text-3xl font-bold text-green-700">{result}</p></div>}
        </div>
    )
}

    