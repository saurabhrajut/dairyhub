
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
import { componentProps, getSnf } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";


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

const TABS = [
  { value: "acidity", label: "Acidity" },
  { value: "snf-standards", label: "SNF Standards & Calc" },
  { value: "yield", label: "Yield" },
  { value: "fat-dry", label: "Fat (Dry Basis)" },
  { value: "clr-correction", label: "CLR Correction" },
  { value: "component-qty", label: "Component Qty" },
  { value: "gravimetric", label: "Gravimetric Analysis" },
  { value: "formulas", label: "Formulas" },
];


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
          <DialogTitle className="text-3xl font-bold text-center font-headline">Various Calculations</DialogTitle>
          <DialogDescription className="text-center">A collection of useful calculators for dairy processing.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="acidity" className="w-full flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 h-auto">
            {TABS.map(tab => <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm p-2 h-auto">{tab.label}</TabsTrigger>)}
          </TabsList>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <TabsContent value="acidity" className="mt-0">
                <ProductAcidityCalc />
            </TabsContent>
            <TabsContent value="snf-standards" className="mt-0">
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
            <TabsContent value="clr-correction" className="mt-0"><ClrCorrectionCalc /></TabsContent>
            <TabsContent value="component-qty" className="mt-0"><ComponentQtyCalc /></TabsContent>
            <TabsContent value="gravimetric" className="mt-0"><GravimetricAnalysisCalc /></TabsContent>
            <TabsContent value="formulas" className="mt-0"><FormulasTab /></TabsContent>
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

    // For SNF/CLR Calculator
    const [calcFat, setCalcFat] = useState("4.5");
    const [calcClr, setCalcClr] = useState("28.0");
    const [calcTargetSnf, setCalcTargetSnf] = useState("");
    const [calcFactorType, setCalcFactorType] = useState("cow");
    const [manualFactor, setManualFactor] = useState("");
    const [calcResult, setCalcResult] = useState<string | null>(null);

    // For Standard Check Calculator
    const [checkMilkType, setCheckMilkType] = useState<"Cow" | "Buffalo" | "Mixed">("Cow");
    const [checkFat, setCheckFat] = useState("");
    const [checkSnf, setCheckSnf] = useState("");
    const [checkResult, setCheckResult] = useState<React.ReactNode | null>(null);

    const handleCalcSnf = () => {
        const fatNum = parseFloat(calcFat);
        const clrNum = parseFloat(calcClr);
        const factor = parseFloat(manualFactor) || (calcFactorType === 'cow' ? 0.72 : 0.85);
        
        if (isNaN(fatNum) || isNaN(clrNum)) {
            setCalcResult("Invalid Input"); return;
        }
        setCalcResult(`Calculated SNF: ${getSnf(fatNum, clrNum, factor).toFixed(2)} %`);
    }

    const handleCalcClr = () => {
        const fatNum = parseFloat(calcFat);
        const snfNum = parseFloat(calcTargetSnf);
        const factor = parseFloat(manualFactor) || (calcFactorType === 'cow' ? 0.72 : 0.85);

        if (isNaN(fatNum) || isNaN(snfNum)) {
            setCalcResult("Invalid Input"); return;
        }

        const calculatedClr = (snfNum - (0.25 * fatNum) - factor) * 4;
        setCalcResult(`Required CLR: ${calculatedClr.toFixed(2)}`);
    }

    const handleCheckStandards = () => {
        const fat = parseFloat(checkFat);
        const snf = parseFloat(checkSnf);
        const legalStandards = standards[checkMilkType];

        if (isNaN(fat) || isNaN(snf)) {
            setCheckResult(<p className="text-red-600">Please enter valid Fat and SNF values.</p>);
            return;
        }
        
        const fatPass = fat >= legalStandards.fat;
        const snfPass = snf >= legalStandards.snf;

        const resultJsx = (
            <div>
                <p className="mb-2">Comparing against <strong>{state}</strong> standards for <strong>{checkMilkType} Milk</strong>:</p>
                <div className={`flex items-center gap-2 ${fatPass ? 'text-green-600' : 'text-red-600'}`}>
                    {fatPass ? <CheckCircle className="w-5 h-5"/> : <XCircle className="w-5 h-5"/>}
                    Fat: Your value is <strong>{fat.toFixed(2)}%</strong>. Legal minimum is <strong>{legalStandards.fat.toFixed(2)}%</strong>.
                </div>
                <div className={`flex items-center gap-2 mt-1 ${snfPass ? 'text-green-600' : 'text-red-600'}`}>
                    {snfPass ? <CheckCircle className="w-5 h-5"/> : <XCircle className="w-5 h-5"/>}
                    SNF: Your value is <strong>{snf.toFixed(2)}%</strong>. Legal minimum is <strong>{legalStandards.snf.toFixed(2)}%</strong>.
                </div>
                 <p className={`mt-3 font-bold text-lg ${fatPass && snfPass ? 'text-green-700' : 'text-red-700'}`}>
                    Result: Milk {fatPass && snfPass ? "MEETS" : "DOES NOT MEET"} the standards.
                </p>
            </div>
        );
        setCheckResult(resultJsx);
    }

    return (
        <CalculatorCard title="State-wise Standards & SNF Calculator" description="Check legal FSSAI standards for any Indian state and use the integrated calculator.">
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

            <div className="mt-6 bg-muted/50 p-4 rounded-lg space-y-3">
                <h4 className="font-bold text-lg text-primary">SNF / CLR Calculator</h4>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Milk Type</Label>
                        <Select value={calcFactorType} onValueChange={setCalcFactorType}>
                            <SelectTrigger><SelectValue/></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cow">Cow Milk (Factor: 0.72)</SelectItem>
                                <SelectItem value="buffalo">Buffalo Milk (Factor: 0.85)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Manual Correction Factor</Label>
                        <Input type="number" value={manualFactor} onChange={e => setManualFactor(e.target.value)} placeholder="e.g., 0.75" />
                    </div>
                </div>
                 <div><Label>Fat %</Label><Input type="number" value={calcFat} onChange={e => setCalcFat(e.target.value)} placeholder="4.5" /></div>
                
                <div className="grid grid-cols-2 gap-4 items-end">
                    <div>
                        <Label>CLR</Label>
                        <Input type="number" value={calcClr} onChange={e => setCalcClr(e.target.value)} placeholder="28.0" />
                        <Button onClick={handleCalcSnf} className="w-full mt-2">Calculate SNF</Button>
                    </div>
                    <div>
                        <Label>Target SNF %</Label>
                        <Input type="number" value={calcTargetSnf} onChange={e => setCalcTargetSnf(e.target.value)} placeholder="8.5" />
                        <Button onClick={handleCalcClr} className="w-full mt-2">Calculate CLR</Button>
                    </div>
                </div>
                 {calcResult && <div className="mt-4 text-center"><p className="text-xl font-bold text-green-700">{calcResult}</p></div>}
            </div>

            <div className="mt-6 bg-muted/50 p-4 rounded-lg space-y-3">
                <h4 className="font-bold text-lg text-primary">State-wise Standard Check</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div>
                        <Label>Milk Type</Label>
                        <Select value={checkMilkType} onValueChange={(v) => setCheckMilkType(v as any)}>
                            <SelectTrigger><SelectValue/></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Cow">Cow Milk</SelectItem>
                                <SelectItem value="Buffalo">Buffalo Milk</SelectItem>
                                <SelectItem value="Mixed">Mixed Milk</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div><Label>Enter Your Fat %</Label><Input type="number" value={checkFat} onChange={e => setCheckFat(e.target.value)} placeholder="e.g., 3.5"/></div>
                    <div><Label>Enter Your SNF %</Label><Input type="number" value={checkSnf} onChange={e => setCheckSnf(e.target.value)} placeholder="e.g., 8.5"/></div>
                </div>
                 <Button onClick={handleCheckStandards} className="w-full mt-4">Check Compliance</Button>
                 {checkResult && <Alert className="mt-4"><AlertDescription>{checkResult}</AlertDescription></Alert>}
            </div>
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
        <CalculatorCard title="CLR Correction Calculator" description="Temperature ke aadhar par Lactometer Reading ko correct karein.">
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
        <CalculatorCard title="Component Quantity Calculator" description="Doodh mein Fat aur Powder (SNF) ki matra (Kg mein) pata karein.">
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

function GravimetricAnalysisCalc() {
    const [dishWeight, setDishWeight] = useState('');
    const [dishSampleWeight, setDishSampleWeight] = useState('');
    const [dishDriedWeight, setDishDriedWeight] = useState('');
    const [dishAshWeight, setDishAshWeight] = useState('');
    const [results, setResults] = useState<{ moisture: number; ts: number; ash?: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = () => {
        const w1 = parseFloat(dishWeight); // Dish
        const w2 = parseFloat(dishSampleWeight); // Dish + Sample
        const w3 = parseFloat(dishDriedWeight); // Dish + Dried
        const w4 = parseFloat(dishAshWeight); // Dish + Ash

        setError(null);
        setResults(null);

        if (isNaN(w1) || isNaN(w2) || w2 <= w1) {
            setError("Please enter valid weights for the dish and sample.");
            return;
        }

        const sampleWeight = w2 - w1;
        let moisture = NaN, ts = NaN, ash;

        if (!isNaN(w3) && w3 >= w1) {
            const moistureWeight = w2 - w3;
            moisture = (moistureWeight / sampleWeight) * 100;
            ts = 100 - moisture;
        }

        if (!isNaN(w4) && w4 >= w1) {
            const ashWeight = w4 - w1;
            ash = (ashWeight / sampleWeight) * 100;
        }
        
        if (isNaN(moisture) && ash === undefined) {
             setError("Please enter weight for either dried sample or ashed sample to calculate.");
             return;
        }

        setResults({
            moisture: !isNaN(moisture) ? moisture : 100 - ts,
            ts: !isNaN(ts) ? ts : 100 - moisture,
            ash: ash
        });
    }

    return (
        <CalculatorCard title="Gravimetric Analysis Calculator" description="Calculate Moisture, Total Solids (TS), and Ash % using gravimetric weights.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label>Empty Dish Weight (g)</Label>
                        <Input type="number" value={dishWeight} onChange={e => setDishWeight(e.target.value)} placeholder="e.g., 25.1234" />
                    </div>
                    <div>
                        <Label>Dish + Sample Weight (g)</Label>
                        <Input type="number" value={dishSampleWeight} onChange={e => setDishSampleWeight(e.target.value)} placeholder="e.g., 30.1234" />
                    </div>
                    <div>
                        <Label>Dish + Dried Sample Weight (g)</Label>
                        <Input type="number" value={dishDriedWeight} onChange={e => setDishDriedWeight(e.target.value)} placeholder="For Moisture/TS" />
                    </div>
                     <div>
                        <Label>Dish + Ash Weight (g)</Label>
                        <Input type="number" value={dishAshWeight} onChange={e => setDishAshWeight(e.target.value)} placeholder="For Ash" />
                    </div>
                </div>
            </div>
            <Button onClick={handleCalculate} className="w-full mt-4">Calculate Analysis</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {results && (
                <Alert className="mt-4">
                    <AlertTitle>Analysis Results</AlertTitle>
                    <AlertDescription>
                        <Table>
                            <TableBody>
                                {!isNaN(results.moisture) && (
                                    <TableRow>
                                        <TableCell className="font-medium">Moisture</TableCell>
                                        <TableCell className="text-right font-bold">{results.moisture.toFixed(2)} %</TableCell>
                                    </TableRow>
                                )}
                                {!isNaN(results.ts) && (
                                     <TableRow>
                                        <TableCell className="font-medium">Total Solids (TS)</TableCell>
                                        <TableCell className="text-right font-bold">{results.ts.toFixed(2)} %</TableCell>
                                    </TableRow>
                                )}
                                {results.ash !== undefined && (
                                     <TableRow>
                                        <TableCell className="font-medium">Ash</TableCell>
                                        <TableCell className="text-right font-bold">{results.ash.toFixed(2)} %</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    )
}

function FormulasTab() {
    return (
        <div className="space-y-6">
            <CalculatorCard title="SNF Calculation (Richmond's Formula)">
                <p className="font-mono text-sm text-blue-900 mt-2">SNF % = (CLR / 4) + (0.25 * Fat %) + Correction_Factor</p>
                <p className="text-xs mt-2">Correction Factor: Cow Milk = 0.72, Buffalo Milk = 0.85</p>
            </CalculatorCard>
             <CalculatorCard title="CLR Correction Formula">
                <p className="font-mono text-sm text-green-900 mt-2">Corrected CLR = Observed_LR + (Milk_Temp_°C - 27) * 0.2</p>
            </CalculatorCard>
             <CalculatorCard title="Pearson Square (Blending)">
                <p className="font-mono text-sm text-purple-900 mt-2">Parts_High = Target - Low</p>
                <p className="font-mono text-sm text-purple-900">Parts_Low = High - Target</p>
                <p className="text-xs mt-2">Qty_High = (Total_Qty * Parts_High) / (Parts_High + Parts_Low)</p>
            </CalculatorCard>
             <CalculatorCard title="Component Quantity Calculation">
                <p className="font-mono text-sm text-yellow-900 mt-2">Milk Weight (Kg) = Milk_Liters * 1.03</p>
                <p className="font-mono text-sm text-yellow-900">Fat_Kg = Milk_Weight * (Fat % / 100)</p>
                 <p className="font-mono text-sm text-yellow-900">SNF_Kg = Milk_Weight * (SNF % / 100)</p>
            </CalculatorCard>
             <CalculatorCard title="Common Conversion Factors">
                 <Table className="mt-2 text-sm">
                     <TableBody>
                        <TableRow><TableCell className="font-medium">1 Liter Milk</TableCell><TableCell>approx. 1.03 Kg</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">1 Kg Milk</TableCell><TableCell>approx. 0.97 Liters</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">Kg to Grams</TableCell><TableCell>Multiply by 1000</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">Liters to Milliliters</TableCell><TableCell>Multiply by 1000</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CalculatorCard>
        </div>
    )
}
