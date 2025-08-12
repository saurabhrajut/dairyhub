
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const stateWiseStandards = {
    'Andaman & Nicobar Islands': { Cow: { fat: 3.2, snf: 8.3 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Andhra Pradesh': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.7 } },
    'Arunachal Pradesh': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Assam': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Bihar': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.7 } },
    'Chandigarh': { Cow: { fat: 4.0, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.8 } },
    'Chhattisgarh': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Dadra & Nagar Haveli': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Daman & Diu': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Delhi': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.8 } },
    'Goa': { Cow: { fat: 3.5, snf: 8.3 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Gujarat': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Haryana': { Cow: { fat: 4.0, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.8 } },
    'Himachal Pradesh': { Cow: { fat: 4.0, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.8 } },
    'Jammu & Kashmir': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Jharkhand': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.7 } },
    'Karnataka': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Kerala': { Cow: { fat: 3.2, snf: 8.3 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Lakshadweep': { Cow: { fat: 3.2, snf: 8.3 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Madhya Pradesh': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Maharashtra': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Manipur': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Meghalaya': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Mizoram': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Nagaland': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Orissa': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Puducherry': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Punjab': { Cow: { fat: 4.0, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.8 } },
    'Rajasthan': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.7 } },
    'Sikkim': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Tamil Nadu': { Cow: { fat: 3.2, snf: 8.3 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Telangana': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.7 } },
    'Tripura': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } },
    'Uttar Pradesh': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.7 } },
    'Uttarakhand': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 6.0, snf: 9.0 }, Mixed: { fat: 5.0, snf: 8.7 } },
    'West Bengal': { Cow: { fat: 3.5, snf: 8.5 }, Buffalo: { fat: 5.0, snf: 9.0 }, Mixed: { fat: 4.5, snf: 8.5 } }
};

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 rounded-xl shadow-sm border mt-4">
        <h3 className="text-xl font-bold text-primary mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);

export function VariousCalculatorsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center font-headline">Various Calculators</DialogTitle>
          <DialogDescription className="text-center">A collection of useful calculators for dairy processing.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="acidity" className="w-full flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="acidity">Acidity</TabsTrigger>
            <TabsTrigger value="snf">SNF Standards</TabsTrigger>
            <TabsTrigger value="yield">Yield</TabsTrigger>
            <TabsTrigger value="fat-dry">Fat (Dry Basis)</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <TabsContent value="acidity" className="mt-0">
                <ProductAcidityCalc />
            </TabsContent>
            <TabsContent value="snf" className="mt-0">
                <StatewiseSNFCalc />
            </TabsContent>
            <TabsContent value="yield" className="mt-0 space-y-6">
                <CreamSeparationCalc />
                <ButterYieldCalc />
                <KhoaYieldCalc />
                <ShrikhandYieldCalc />
                <PedhaBurfiYieldCalc />
            </TabsContent>
             <TabsContent value="fat-dry" className="mt-0">
                <FatOnDryBasisCalc />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

// Individual Calculator Components

function ProductAcidityCalc() {
    const [product, setProduct] = useState('milk');
    const [weight, setWeight] = useState('10');
    const [titre, setTitre] = useState('');
    const [normality, setNormality] = useState('0.1');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const w = parseFloat(weight);
        const t = parseFloat(titre);
        const n = parseFloat(normality);
        if (isNaN(w) || isNaN(t) || isNaN(n) || w <= 0) {
            setResult("Please enter valid positive numbers.");
            return;
        }
        const acidity = (t * n * 9) / w;
        setResult(`Acidity (% Lactic Acid): ${acidity.toFixed(4)}%`);
    };

    return (
        <CalculatorCard title="Dairy Product Acidity Calculator" description="Calculate the titratable acidity of various dairy products.">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label>Select Product</Label>
                    <Select value={product} onValueChange={setProduct}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="milk">Milk</SelectItem>
                            <SelectItem value="cream">Cream</SelectItem>
                            <SelectItem value="butter">Butter</SelectItem>
                            <SelectItem value="ghee">Ghee</SelectItem>
                            <SelectItem value="paneer">Paneer</SelectItem>
                            <SelectItem value="dahi">Dahi / Yoghurt</SelectItem>
                            <SelectItem value="khoa">Khoa</SelectItem>
                            <SelectItem value="ice_cream">Ice Cream</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div><Label>Sample Weight (g or ml)</Label><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></div>
                 <div><Label>Titre Value (ml of NaOH)</Label><Input type="number" value={titre} onChange={e => setTitre(e.target.value)} placeholder="e.g., 1.4" /></div>
                 <div><Label>Normality of NaOH</Label><Input type="number" step="0.01" value={normality} onChange={e => setNormality(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Acidity</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center">{result}</AlertDescription></Alert>}
        </CalculatorCard>
    )
}

function StatewiseSNFCalc() {
    const [state, setState] = useState('Delhi');
    const standards = stateWiseStandards[state as keyof typeof stateWiseStandards];

    return (
        <CalculatorCard title="State-wise SNF/Fat Standards" description="Check the legal minimum standards for Fat and SNF for different milk types across Indian states.">
             <div className="mb-4">
                <Label>Select State / Union Territory</Label>
                <Select value={state} onValueChange={setState}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        {Object.keys(stateWiseStandards).sort().map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            {standards && (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Milk Type</TableHead>
                            <TableHead>Minimum Fat %</TableHead>
                            <TableHead>Minimum SNF %</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Cow Milk</TableCell><TableCell>{standards.Cow.fat.toFixed(2)}</TableCell><TableCell>{standards.Cow.snf.toFixed(2)}</TableCell></TableRow>
                        <TableRow><TableCell>Buffalo Milk</TableCell><TableCell>{standards.Buffalo.fat.toFixed(2)}</TableCell><TableCell>{standards.Buffalo.snf.toFixed(2)}</TableCell></TableRow>
                        <TableRow><TableCell>Mixed Milk</TableCell><TableCell>{standards.Mixed.fat.toFixed(2)}</TableCell><TableCell>{standards.Mixed.snf.toFixed(2)}</TableCell></TableRow>
                    </TableBody>
                </Table>
            )}
        </CalculatorCard>
    );
}

function CreamSeparationCalc() {
    const [milkQty, setMilkQty] = useState('100');
    const [milkFat, setMilkFat] = useState('4.5');
    const [creamFat, setCreamFat] = useState('40');
    const [skimFat, setSkimFat] = useState('0.05');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const M = parseFloat(milkQty);
        const Fm = parseFloat(milkFat);
        const Fc = parseFloat(creamFat);
        const Fs = parseFloat(skimFat);
        if ([M, Fm, Fc, Fs].some(isNaN) || M <= 0) {
            setResult("Please enter valid positive numbers.");
            return;
        }
        if (Fc <= Fm || Fm <= Fs) {
            setResult("Fat percentages are not logical. Cream fat must be > Milk fat > Skim milk fat.");
            return;
        }

        const C = M * (Fm - Fs) / (Fc - Fs);
        const S = M - C;

        setResult(`From <strong>${M} kg</strong> of milk, you will get approximately:<br/>- Cream: <strong>${C.toFixed(2)} kg</strong><br/>- Skim Milk: <strong>${S.toFixed(2)} kg</strong>`);
    };

    return (
        <CalculatorCard title="Cream Separation Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Milk Quantity (kg)</Label><Input type="number" value={milkQty} onChange={e => setMilkQty(e.target.value)} /></div>
                <div><Label>Milk Fat %</Label><Input type="number" value={milkFat} onChange={e => setMilkFat(e.target.value)} /></div>
                <div><Label>Target Cream Fat %</Label><Input type="number" value={creamFat} onChange={e => setCreamFat(e.target.value)} /></div>
                <div><Label>Skim Milk Fat %</Label><Input type="number" value={skimFat} onChange={e => setSkimFat(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    )
}

function ButterYieldCalc() {
    const [creamQty, setCreamQty] = useState('100');
    const [creamFat, setCreamFat] = useState('40');
    const [butterFat, setButterFat] = useState('80');
    const [fatLoss, setFatLoss] = useState('1.5');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const C = parseFloat(creamQty);
        const Fc = parseFloat(creamFat) / 100;
        const Fb = parseFloat(butterFat) / 100;
        const L = parseFloat(fatLoss) / 100;
        if ([C, Fc, Fb, L].some(isNaN) || C <= 0) {
             setResult("Please enter valid positive numbers.");
            return;
        }
        const totalFatInCream = C * Fc;
        const recoveredFat = totalFatInCream * (1 - L);
        const butterYield = recoveredFat / Fb;
        setResult(`Estimated Butter Yield: <strong>${butterYield.toFixed(2)} kg</strong>`);
    };

    return (
        <CalculatorCard title="Butter Yield Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Cream Quantity (kg)</Label><Input type="number" value={creamQty} onChange={e => setCreamQty(e.target.value)} /></div>
                <div><Label>Cream Fat %</Label><Input type="number" value={creamFat} onChange={e => setCreamFat(e.target.value)} /></div>
                <div><Label>Butter Fat %</Label><Input type="number" value={butterFat} onChange={e => setButterFat(e.target.value)} /></div>
                <div><Label>Fat Loss in Buttermilk %</Label><Input type="number" value={fatLoss} onChange={e => setFatLoss(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function KhoaYieldCalc() {
    const [milkQty, setMilkQty] = useState('100');
    const [milkTS, setMilkTS] = useState('15');
    const [khoaTS, setKhoaTS] = useState('70');
    const [result, setResult] = useState<string | null>(null);
    
    const calculate = () => {
        const M = parseFloat(milkQty);
        const Tm = parseFloat(milkTS) / 100;
        const Tk = parseFloat(khoaTS) / 100;
        if ([M, Tm, Tk].some(isNaN) || M <= 0) {
            setResult("Please enter valid positive numbers.");
            return;
        }
        const yieldAmt = (M * Tm) / Tk;
        setResult(`Estimated Khoa Yield: <strong>${yieldAmt.toFixed(2)} kg</strong>`);
    };

    return (
         <CalculatorCard title="Khoa Yield Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Milk Quantity (kg)</Label><Input type="number" value={milkQty} onChange={e => setMilkQty(e.target.value)} /></div>
                <div><Label>Milk Total Solids %</Label><Input type="number" value={milkTS} onChange={e => setMilkTS(e.target.value)} /></div>
                <div><Label>Khoa Total Solids %</Label><Input type="number" value={khoaTS} onChange={e => setKhoaTS(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function ShrikhandYieldCalc() {
    const [chakkaQty, setChakkaQty] = useState('100');
    const [chakkaTS, setChakkaTS] = useState('35');
    const [sugarAdded, setSugarAdded] = useState('80');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const chakka = parseFloat(chakkaQty);
        const ts = parseFloat(chakkaTS) / 100;
        const sugar = parseFloat(sugarAdded);
        if ([chakka, ts, sugar].some(isNaN) || chakka <= 0) {
            setResult("Please enter valid positive numbers.");
            return;
        }
        const shrikhandYield = chakka + sugar;
        const finalTS = ((chakka * ts) + sugar) / shrikhandYield * 100;

        setResult(`Estimated Shrikhand Yield: <strong>${shrikhandYield.toFixed(2)} kg</strong><br/>Final Total Solids: <strong>~${finalTS.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Shrikhand Yield Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Chakka Quantity (kg)</Label><Input type="number" value={chakkaQty} onChange={e => setChakkaQty(e.target.value)} /></div>
                <div><Label>Chakka Total Solids %</Label><Input type="number" value={chakkaTS} onChange={e => setChakkaTS(e.target.value)} /></div>
                <div><Label>Sugar Added (kg)</Label><Input type="number" value={sugarAdded} onChange={e => setSugarAdded(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function PedhaBurfiYieldCalc() {
    const [khoaQty, setKhoaQty] = useState('10');
    const [sugarAdded, setSugarAdded] = useState('3');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const khoa = parseFloat(khoaQty);
        const sugar = parseFloat(sugarAdded);
        if (isNaN(khoa) || isNaN(sugar) || khoa <= 0) {
            setResult("Please enter valid positive numbers.");
            return;
        }
        const totalMix = khoa + sugar;
        const moistureLoss = totalMix * 0.05; // Approx 5% moisture loss during heating
        const yieldAmt = totalMix - moistureLoss;

        setResult(`Estimated Pedha/Burfi Yield: <strong>~${yieldAmt.toFixed(2)} kg</strong>`);
    }

    return (
        <CalculatorCard title="Pedha / Burfi Yield Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Khoa Quantity (kg)</Label><Input type="number" value={khoaQty} onChange={e => setKhoaQty(e.target.value)} /></div>
                <div><Label>Sugar Added (kg)</Label><Input type="number" value={sugarAdded} onChange={e => setSugarAdded(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function FatOnDryBasisCalc() {
    const [fatPercent, setFatPercent] = useState('');
    const [moisturePercent, setMoisturePercent] = useState('');
    const [result, setResult] = useState<string | null>(null);
    
    const calculate = () => {
        const fat = parseFloat(fatPercent);
        const moisture = parseFloat(moisturePercent);
        if (isNaN(fat) || isNaN(moisture)) {
            setResult("Please enter valid numbers for fat and moisture.");
            return;
        }
        if (moisture >= 100) {
            setResult("Moisture content must be less than 100%.");
            return;
        }
        const totalSolids = 100 - moisture;
        const fatOnDryBasis = (fat / totalSolids) * 100;
        setResult(`Fat % on Dry Basis: <strong>${fatOnDryBasis.toFixed(2)}%</strong>`);
    };

    return (
         <CalculatorCard title="Fat % on Dry Basis Calculator" description="Calculate the percentage of fat in the total solids of a product, a key FSSAI parameter for products like Paneer and Cheese.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Fat % in Product (as is)</Label><Input type="number" value={fatPercent} onChange={e => setFatPercent(e.target.value)} placeholder="e.g., 25" /></div>
                <div><Label>Moisture % in Product</Label><Input type="number" value={moisturePercent} onChange={e => setMoisturePercent(e.target.value)} placeholder="e.g., 55" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    )
}
