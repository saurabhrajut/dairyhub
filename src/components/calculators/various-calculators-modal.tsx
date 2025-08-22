
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
import { CheckCircle, PlusCircle, XCircle, Beaker, Thermometer, Weight, Percent, Scaling, Combine, Calculator, FlaskConical, ArrowLeft, RotateCw } from "lucide-react";
import { PaneerIcon, IceCreamIcon } from "../icons";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


interface BatchIngredient {
  id: number;
  name: string;
  amount: string;
}

interface MixIngredient {
    id: number;
    name: string;
    amount: string;
    fat: string;
    msnf: string;
    sugar: string;
}

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

type CalculatorType = 'acidity' | 'snf-standards' | 'yields' | 'paneer-yield' | 'ice-cream' | 'fat-dry' | 'clr-correction' | 'component-qty' | 'gravimetric' | 'formulas' | 'cip-strength';

const calculatorsInfo = {
    'acidity': { title: "Acidity", icon: Beaker, component: ProductAcidityCalc },
    'snf-standards': { title: "SNF/CLR", icon: Scaling, component: StatewiseSNFCalc },
    'yields': { title: "Product Yields", icon: Percent, component: YieldsCalc },
    'paneer-yield': { title: "Paneer Yield", icon: PaneerIcon, component: PaneerYieldCalc },
    'ice-cream': { title: "Ice Cream", icon: IceCreamIcon, component: IceCreamCalculators },
    'fat-dry': { title: "Fat on Dry Basis", icon: FlaskConical, component: FatOnDryBasisCalc },
    'clr-correction': { title: "CLR Correction", icon: Thermometer, component: ClrCorrectionCalc },
    'component-qty': { title: "Component Qty", icon: Combine, component: ComponentQtyCalc },
    'gravimetric': { title: "Gravimetric", icon: Weight, component: GravimetricAnalysisCalc },
    'cip-strength': { title: "CIP Strength", icon: RotateCw, component: SolutionStrengthCalc },
    'formulas': { title: "Common Formulas", icon: Calculator, component: FormulasTab },
};

export function VariousCalculatorsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const handleBack = () => setActiveCalculator(null);

  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) {
            setIsOpen(false);
            setActiveCalculator(null); // Reset on close
        } else {
            setIsOpen(true);
        }
    }}>
      <DialogContent className="max-w-4xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
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
                    <DialogTitle className="text-3xl font-bold text-center font-headline">Various Calculations</DialogTitle>
                    <DialogDescription className="text-center">Choose a calculator from the options below.</DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-full mt-4 pr-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
  );
}

// Individual Calculator Components

function PaneerYieldCalc() {
    // State for theoretical calculation
    const [milkQtyLtr, setMilkQtyLtr] = useState('100');
    const [fatPercent, setFatPercent] = useState('6.0');
    const [snfPercent, setSnfPercent] = useState('9.0');
    const [fatRecovery, setFatRecovery] = useState('90');
    const [caseinRecovery, setCaseinRecovery] = useState('93');
    const [finalMoisture, setFinalMoisture] = useState('55');
    const [theoreticalResult, setTheoreticalResult] = useState<string | null>(null);

    // State for actual calculation
    const [milkUsed, setMilkUsed] = useState('');
    const [paneerObtained, setPaneerObtained] = useState('');
    const [actualResult, setActualResult] = useState<string | null>(null);

    const handleTheoreticalCalc = () => {
        const qty = parseFloat(milkQtyLtr);
        const fat = parseFloat(fatPercent);
        const snf = parseFloat(snfPercent);
        const fRec = parseFloat(fatRecovery) / 100;
        const cRec = parseFloat(caseinRecovery) / 100;
        const moisture = parseFloat(finalMoisture) / 100;

        if ([qty, fat, snf, fRec, cRec, moisture].some(isNaN) || qty <= 0) {
            setTheoreticalResult('<p class="text-red-500">Please enter valid positive numbers for all fields.</p>');
            return;
        }

        const caseinInSnf = 0.77; // Standard factor for casein in milk SNF
        const milkWeightKg = qty * componentProps.milkDensity;

        const recoveredFatKg = (milkWeightKg * (fat / 100)) * fRec;
        const recoveredCaseinKg = (milkWeightKg * (snf / 100) * caseinInSnf) * cRec;
        const totalRecoveredSolidsKg = recoveredFatKg + recoveredCaseinKg;
        
        const paneerYieldKg = totalRecoveredSolidsKg / (1 - moisture);
        const yieldPercentage = (paneerYieldKg / milkWeightKg) * 100;

        setTheoreticalResult(`
            <p class="font-bold text-lg">Estimated Theoretical Yield: <span class="text-2xl text-green-700">${paneerYieldKg.toFixed(2)} kg</span></p>
            <p class="text-sm mt-1">This is approximately a <span class="font-bold">${yieldPercentage.toFixed(2)}%</span> yield from ${qty} Litres of milk.</p>
            <p class="text-xs mt-2">This is a scientific estimate based on solid recovery. Actual yield will vary.</p>
        `);
    };

    const handleActualCalc = () => {
        const milk = parseFloat(milkUsed);
        const paneer = parseFloat(paneerObtained);

        if (isNaN(milk) || isNaN(paneer) || milk <= 0) {
            setActualResult('<p class="text-red-500">Please enter valid positive weights.</p>');
            return;
        }
         if (paneer > milk) {
            setActualResult('<p class="text-red-500">Paneer weight cannot be greater than milk weight.</p>');
            return;
        }

        const actualYield = (paneer / milk) * 100;
        setActualResult(`
             <p class="font-bold text-lg">Actual Yield: <span class="text-2xl text-blue-700">${actualYield.toFixed(2)}%</span></p>
             <p class="text-sm mt-1">You obtained ${paneer} kg of paneer from ${milk} kg of milk.</p>
        `);
    };

    return (
        <CalculatorCard title="Industrial Paneer Yield Calculator">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">Theoretical Yield</h3>
             <p className="text-xs text-muted-foreground mb-4">Predict paneer yield based on milk composition before production.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Milk Quantity (Litres)</Label><Input type="number" value={milkQtyLtr} onChange={e => setMilkQtyLtr(e.target.value)} /></div>
                <div><Label>Final Paneer Moisture %</Label><Input type="number" value={finalMoisture} onChange={e => setFinalMoisture(e.target.value)} /></div>
                <div><Label>Milk Fat %</Label><Input type="number" value={fatPercent} onChange={e => setFatPercent(e.target.value)} /></div>
                <div><Label>Fat Recovery %</Label><Input type="number" value={fatRecovery} onChange={e => setFatRecovery(e.target.value)} /></div>
                <div><Label>Milk SNF %</Label><Input type="number" value={snfPercent} onChange={e => setSnfPercent(e.target.value)} /></div>
                <div><Label>Casein Recovery %</Label><Input type="number" value={caseinRecovery} onChange={e => setCaseinRecovery(e.target.value)} /></div>
            </div>
            <Button onClick={handleTheoreticalCalc} className="w-full mt-4">Calculate Theoretical Yield</Button>
            {theoreticalResult && <Alert className="mt-4" dangerouslySetInnerHTML={{ __html: theoreticalResult }} />}
            
            <hr className="my-6"/>

            <h3 className="font-semibold text-lg text-gray-700 mb-2">Actual Yield</h3>
            <p className="text-xs text-muted-foreground mb-4">Calculate the actual yield achieved after a production batch.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Total Milk Used (kg)</Label><Input type="number" value={milkUsed} onChange={e => setMilkUsed(e.target.value)} placeholder="e.g., 103" /></div>
                <div><Label>Paneer Obtained (kg)</Label><Input type="number" value={paneerObtained} onChange={e => setPaneerObtained(e.target.value)} placeholder="e.g., 15.5" /></div>
            </div>
             <Button onClick={handleActualCalc} className="w-full mt-4">Calculate Actual Yield</Button>
            {actualResult && <Alert className="mt-4" dangerouslySetInnerHTML={{ __html: actualResult }} />}
        </CalculatorCard>
    );
}

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
    const [calcFat, setCalcFat] = useState("4.5");
    const [calcClr, setCalcClr] = useState("28.0");
    const [calcTargetSnf, setCalcTargetSnf] = useState("");
    const [calcFactorType, setCalcFactorType] = useState("cow");
    const [manualFactor, setManualFactor] = useState("");
    const [calcResult, setCalcResult] = useState<string | null>(null);
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

function YieldsCalc() {
    return (
        <div className="space-y-6">
            <CreamSeparationCalc />
            <ButterYieldCalc />
            <KhoaYieldCalc />
            <ShrikhandYieldCalc />
            <PedhaBurfiYieldCalc />
        </div>
    )
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
        <CalculatorCard title="Component Quantity Calculator" description="Find out the amount (in Kg) of Fat and Powder (SNF) in milk.">
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

function IceCreamCalculators() {
    return (
        <div className="space-y-6">
            <BatchScalingCalc />
            <OverrunCalc />
            <FreezingPointCalc />
            <MixCompositionCalc />
        </div>
    )
}

function BatchScalingCalc() {
    const { toast } = useToast();
    const [ingredients, setIngredients] = useState<BatchIngredient[]>([{ id: 1, name: "Milk", amount: "550" }]);
    const [finalBatchSize, setFinalBatchSize] = useState("100");
    const [result, setResult] = useState<any[] | null>(null);

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: "", amount: "" }]);
    };
    
    const removeIngredient = (id: number) => {
        setIngredients(ingredients.filter(ing => ing.id !== id));
    };

    const handleIngredientChange = (id: number, field: keyof BatchIngredient, value: string) => {
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const calculate = () => {
        const finalSize = parseFloat(finalBatchSize);
        if (isNaN(finalSize) || finalSize <= 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter a valid final batch size." });
            return;
        }

        const validIngredients = ingredients.filter(ing => parseFloat(ing.amount) > 0);
        if (validIngredients.length === 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter a valid amount for at least one ingredient." });
            return;
        }

        const baseTotalWeight = validIngredients.reduce((sum, ing) => sum + parseFloat(ing.amount), 0);
        if (baseTotalWeight === 0) return;

        const scaledIngredients = validIngredients.map(ing => {
            const scaledAmount = (parseFloat(ing.amount) / baseTotalWeight) * (finalSize * 1000);
            return { name: ing.name || `Ingredient`, amount: scaledAmount };
        });

        setResult(scaledIngredients);
        toast({ title: "Success", description: "Batch scaling calculated successfully!" });
    };

    return (
        <CalculatorCard title="Batch Scaling Calculator">
            <div className="space-y-4 mb-4">
                {ingredients.map((ing) => (
                    <div key={ing.id} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <Input
                                type="text"
                                placeholder="Ingredient Name"
                                value={ing.name}
                                onChange={(e) => handleIngredientChange(ing.id, 'name', e.target.value)}
                            />
                            <Input
                                type="number"
                                placeholder="Amount (g)"
                                value={ing.amount}
                                onChange={(e) => handleIngredientChange(ing.id, 'amount', e.target.value)}
                            />
                        </div>
                        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeIngredient(ing.id)}><XCircle /></Button>
                    </div>
                ))}
            </div>
            <Button variant="outline" size="sm" onClick={addIngredient}><PlusCircle className="mr-2 h-4 w-4" /> Add Ingredient</Button>
            <hr className="my-6" />
            <div>
                <Label htmlFor="final-batch-size">Final Batch Size (kg)</Label>
                <Input type="number" id="final-batch-size" value={finalBatchSize} onChange={e => setFinalBatchSize(e.target.value)} />
            </div>
            <Button onClick={calculate} className="mt-4 w-full">Calculate Batch</Button>
            {result && (
                <Alert className="mt-4">
                    <AlertTitle>Ingredients for {finalBatchSize} kg Batch</AlertTitle>
                    <AlertDescription>
                        <Table>
                            <TableHeader><TableRow><TableHead>Ingredient</TableHead><TableHead>Required Amount</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {result.map((ing, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{ing.name}</TableCell>
                                        <TableCell>{ing.amount.toFixed(2)} g ({(ing.amount / 1000).toFixed(3)} kg)</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

function OverrunCalc() {
    const { toast } = useToast();
    const [mixWeight, setMixWeight] = useState("1080");
    const [iceCreamWeight, setIceCreamWeight] = useState("560");
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const mixW = parseFloat(mixWeight);
        const icW = parseFloat(iceCreamWeight);

        if (isNaN(mixW) || isNaN(icW) || mixW <= 0 || icW <= 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter valid positive weights." });
            return;
        }
        if (mixW < icW) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Mix weight cannot be less than ice cream weight." });
            return;
        }

        const overrun = ((mixW - icW) / icW) * 100;
        setResult(`Calculated Overrun: ${overrun.toFixed(2)}%`);
        toast({ title: "Success", description: "Overrun calculated successfully!" });
    };
    
    return (
        <CalculatorCard title="Overrun Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Weight of Mix (g)</Label><Input type="number" value={mixWeight} onChange={e => setMixWeight(e.target.value)} /></div>
                <div><Label>Weight of Same Volume of Ice Cream (g)</Label><Input type="number" value={iceCreamWeight} onChange={e => setIceCreamWeight(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="mt-4 w-full">Calculate Overrun</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold">{result}</AlertDescription></Alert>}
        </CalculatorCard>
    );
}

function FreezingPointCalc() {
    const { toast } = useToast();
    const [water, setWater] = useState("0.65");
    const [sucrose, setSucrose] = useState("150");
    const [dextrose, setDextrose] = useState("25");
    const [salt, setSalt] = useState("1");
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const waterKg = parseFloat(water);
        if (isNaN(waterKg) || waterKg <= 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter a valid weight for water in kg." });
            return;
        }
        const sucroseG = parseFloat(sucrose) || 0;
        const dextroseG = parseFloat(dextrose) || 0;
        const saltG = parseFloat(salt) || 0;

        const MOLAR_MASS_SUCROSE = 342.3, MOLAR_MASS_DEXTROSE = 180.16, MOLAR_MASS_SALT = 58.44;
        const KF_WATER = 1.86;
        const I_SALT = 2, I_SUGAR = 1;

        const molesSucrose = sucroseG / MOLAR_MASS_SUCROSE;
        const molesDextrose = dextroseG / MOLAR_MASS_DEXTROSE;
        const molesSalt = saltG / MOLAR_MASS_SALT;

        const totalEffectiveMoles = (molesSucrose * I_SUGAR) + (molesDextrose * I_SUGAR) + (molesSalt * I_SALT);
        const molality = totalEffectiveMoles / waterKg;
        const freezingPointDepression = molality * KF_WATER;
        const finalFreezingPoint = 0 - freezingPointDepression;

        setResult(`Estimated Freezing Point: ${finalFreezingPoint.toFixed(2)} °C`);
        toast({ title: "Success", description: "Freezing point calculated successfully!" });
    };

    return (
        <CalculatorCard title="Freezing Point Calculator" description="Estimates the freezing point based on sugars and salt in your mix.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Total Water in Mix (kg)</Label><Input type="number" value={water} onChange={e => setWater(e.target.value)} /></div>
                <div><Label>Sucrose (Sugar) (g)</Label><Input type="number" value={sucrose} onChange={e => setSucrose(e.target.value)} /></div>
                <div><Label>Dextrose/Glucose (g)</Label><Input type="number" value={dextrose} onChange={e => setDextrose(e.target.value)} /></div>
                <div><Label>Salt (NaCl) (g)</Label><Input type="number" value={salt} onChange={e => setSalt(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="mt-4 w-full">Calculate Freezing Point</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold">{result}</AlertDescription></Alert>}
        </CalculatorCard>
    );
}

function MixCompositionCalc() {
    const { toast } = useToast();
    const [ingredients, setIngredients] = useState<MixIngredient[]>([
        { id: 1, name: "Cream 40%", amount: "250", fat: "40", msnf: "5.5", sugar: "0" },
        { id: 2, name: "Milk 3.5%", amount: "500", fat: "3.5", msnf: "8.5", sugar: "0" },
        { id: 3, name: "Sugar", amount: "150", fat: "0", msnf: "0", sugar: "100" },
    ]);
    const [result, setResult] = useState<{ total: number; fat: number; msnf: number; sugar: number } | null>(null);

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: "", amount: "", fat: "", msnf: "", sugar: "" }]);
    };

    const removeIngredient = (id: number) => {
        setIngredients(ingredients.filter(ing => ing.id !== id));
    };
    
    const handleChange = (id: number, field: keyof MixIngredient, value: string) => {
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const calculate = () => {
        const validIngredients = ingredients.filter(ing => parseFloat(ing.amount) > 0);
        if (validIngredients.length === 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please provide at least one ingredient with a valid amount." });
            return;
        }

        let totalMixWeight = 0, totalFat = 0, totalMSNF = 0, totalSugar = 0;

        validIngredients.forEach(ing => {
            const amount = parseFloat(ing.amount);
            totalMixWeight += amount;
            totalFat += (amount * (parseFloat(ing.fat) || 0)) / 100;
            totalMSNF += (amount * (parseFloat(ing.msnf) || 0)) / 100;
            totalSugar += (amount * (parseFloat(ing.sugar) || 0)) / 100;
        });

        if (totalMixWeight === 0) return;

        setResult({
            total: totalMixWeight,
            fat: (totalFat / totalMixWeight) * 100,
            msnf: (totalMSNF / totalMixWeight) * 100,
            sugar: (totalSugar / totalMixWeight) * 100,
        });
        toast({ title: "Success", description: "Mix composition calculated successfully!" });
    }

    return (
        <CalculatorCard title="Mix Composition Calculator" description="Enter the weight and composition of each ingredient to find the overall percentages in your mix.">
            <div className="space-y-4 mb-4">
                <div className="hidden sm:grid grid-cols-[1fr_1fr_0.5fr_0.5fr_0.5fr_auto] gap-4 items-center">
                    <Label>Ingredient Name</Label>
                    <Label>Amount (g)</Label>
                    <Label>Fat %</Label>
                    <Label>MSNF %</Label>
                    <Label>Sugar %</Label>
                    <div/>
                </div>
                {ingredients.map(ing => (
                    <div key={ing.id} className="grid grid-cols-2 sm:grid-cols-[1fr_1fr_0.5fr_0.5fr_0.5fr_auto] gap-2 items-center">
                        <Input type="text" placeholder="Name" value={ing.name} onChange={e => handleChange(ing.id, 'name', e.target.value)} />
                        <Input type="number" placeholder="g" value={ing.amount} onChange={e => handleChange(ing.id, 'amount', e.target.value)} />
                        <Input type="number" placeholder="Fat %" value={ing.fat} onChange={e => handleChange(ing.id, 'fat', e.target.value)} />
                        <Input type="number" placeholder="MSNF %" value={ing.msnf} onChange={e => handleChange(ing.id, 'msnf', e.target.value)} />
                        <Input type="number" placeholder="Sugar %" value={ing.sugar} onChange={e => handleChange(ing.id, 'sugar', e.target.value)} />
                        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeIngredient(ing.id)}><XCircle /></Button>
                    </div>
                ))}
            </div>
             <Button variant="outline" size="sm" onClick={addIngredient}><PlusCircle className="mr-2 h-4 w-4" /> Add Mix Ingredient</Button>
            <Button onClick={calculate} className="mt-4 w-full">Calculate Mix Composition</Button>
            {result && (
                 <Alert className="mt-4">
                    <AlertTitle>Overall Mix Composition</AlertTitle>
                    <AlertDescription>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Component</TableHead>
                                    <TableHead>Value</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>Total Mix Weight</TableCell><TableCell>{result.total.toFixed(2)} g</TableCell></TableRow>
                                <TableRow><TableCell>Fat</TableCell><TableCell>{result.fat.toFixed(2)}%</TableCell></TableRow>
                                <TableRow><TableCell>Milk Solids Non-Fat (MSNF)</TableCell><TableCell>{result.msnf.toFixed(2)}%</TableCell></TableRow>
                                <TableRow><TableCell>Sugar</TableCell><TableCell>{result.sugar.toFixed(2)}%</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

function SolutionStrengthCalc() {
    const { toast } = useToast();
    const [naohTitre, setNaohTitre] = useState("");
    const [naohResult, setNaohResult] = useState<string | null>(null);

    const [hno3Titre, setHno3Titre] = useState("");
    const [hno3Result, setHno3Result] = useState<string | null>(null);
    
    const [h3po4Titre, setH3po4Titre] = useState("");
    const [h3po4Result, setH3po4Result] = useState<string | null>(null);

    const [chlorineTitre, setChlorineTitre] = useState("");
    const [chlorineResult, setChlorineResult] = useState<string | null>(null);


    const handleCalc = (type: 'naoh' | 'hno3' | 'h3po4' | 'chlorine') => {
        let titre, resultText;

        try {
            switch(type) {
                case 'naoh':
                    titre = parseFloat(naohTitre);
                    if(isNaN(titre) || titre < 0) throw new Error("Please enter a valid titre value.");
                    resultText = `Caustic Soda (NaOH): ${(titre * 0.4).toFixed(3)}%`;
                    setNaohResult(resultText);
                    break;
                case 'hno3':
                    titre = parseFloat(hno3Titre);
                     if(isNaN(titre) || titre < 0) throw new Error("Please enter a valid titre value.");
                    resultText = `Nitric Acid (HNO₃): ${(titre * 0.63).toFixed(3)}%`;
                    setHno3Result(resultText);
                    break;
                case 'h3po4':
                    titre = parseFloat(h3po4Titre);
                     if(isNaN(titre) || titre < 0) throw new Error("Please enter a valid titre value.");
                    // H3PO4 has n-factor of 3, but in titration often only 1 or 2 protons react. Assuming reaction to HPO4(2-), n=2.
                    // Eq. Wt = 98/2 = 49. Strength % = Titre * N_base * Eq. Wt / (Sample_Vol * 10)
                    resultText = `Phosphoric Acid (H₃PO₄): ${(titre * 0.49).toFixed(3)}%`;
                    setH3po4Result(resultText);
                    break;
                case 'chlorine':
                    titre = parseFloat(chlorineTitre);
                     if(isNaN(titre) || titre < 0) throw new Error("Please enter a valid titre value.");
                     const ppm = titre * 35.45; // V * N_thio * Eq.Wt_Cl * 1000 / Sample_Vol. For 0.01N Thio & 100ml sample, it simplifies
                    resultText = `Available Chlorine: ${ppm.toFixed(2)} ppm`;
                    setChlorineResult(resultText);
                    break;
            }
            toast({ title: "Calculated Successfully", description: resultText });
        } catch(e: any) {
            toast({ variant: 'destructive', title: "Error", description: e.message });
        }
    }


    return (
        <CalculatorCard title="CIP Solution Strength Calculator" description="Check the strength of common Cleaning-In-Place solutions.">
             <Tabs defaultValue="naoh">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                    <TabsTrigger value="naoh">NaOH (%)</TabsTrigger>
                    <TabsTrigger value="hno3">HNO₃ (%)</TabsTrigger>
                    <TabsTrigger value="h3po4">H₃PO₄ (%)</TabsTrigger>
                    <TabsTrigger value="chlorine">Chlorine (ppm)</TabsTrigger>
                </TabsList>
                <TabsContent value="naoh" className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">Titrate a 10ml sample of the CIP solution with 0.1 N acid (e.g., HCl) using phenolphthalein indicator.</p>
                    <div><Label>0.1 N Acid Used (ml)</Label><Input type="number" value={naohTitre} onChange={e => setNaohTitre(e.target.value)} placeholder="e.g., 2.5"/></div>
                    <Button onClick={() => handleCalc('naoh')} className="w-full mt-4">Calculate NaOH %</Button>
                    {naohResult && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{naohResult}</AlertDescription></Alert>}
                </TabsContent>
                 <TabsContent value="hno3" className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">Titrate a 10ml sample of the CIP solution with 0.1 N base (e.g., NaOH) using phenolphthalein indicator.</p>
                    <div><Label>0.1 N Base Used (ml)</Label><Input type="number" value={hno3Titre} onChange={e => setHno3Titre(e.target.value)} placeholder="e.g., 1.8"/></div>
                    <Button onClick={() => handleCalc('hno3')} className="w-full mt-4">Calculate HNO₃ %</Button>
                    {hno3Result && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{hno3Result}</AlertDescription></Alert>}
                </TabsContent>
                <TabsContent value="h3po4" className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">Titrate a 10ml sample of the CIP solution with 0.1 N base (e.g., NaOH) using phenolphthalein indicator.</p>
                    <div><Label>0.1 N Base Used (ml)</Label><Input type="number" value={h3po4Titre} onChange={e => setH3po4Titre(e.target.value)} placeholder="e.g., 2.1"/></div>
                    <Button onClick={() => handleCalc('h3po4')} className="w-full mt-4">Calculate H₃PO₄ %</Button>
                    {h3po4Result && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{h3po4Result}</AlertDescription></Alert>}
                </TabsContent>
                 <TabsContent value="chlorine" className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">Titrate a 100ml sample of the CIP solution using the iodometric titration method with 0.01 N Sodium Thiosulphate.</p>
                    <div><Label>0.01 N Sodium Thiosulphate Used (ml)</Label><Input type="number" value={chlorineTitre} onChange={e => setChlorineTitre(e.target.value)} placeholder="e.g., 4.2"/></div>
                    <Button onClick={() => handleCalc('chlorine')} className="w-full mt-4">Calculate Chlorine (ppm)</Button>
                    {chlorineResult && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{chlorineResult}</AlertDescription></Alert>}
                </TabsContent>
            </Tabs>
        </CalculatorCard>
    )
}
