
"use client";

import { useState, memo, useCallback, useEffect, useMemo } from "react"
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
import { componentProps } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Percent, ChevronsUp, Target, Droplets, Info, Weight, Thermometer, ShieldAlert, Factory, Check, Minus, Plus } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { PaneerIcon, IceCreamIcon } from "../icons";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, XCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface BatchIngredient {
  id: number;
  name: string;
  amount: string;
  unit: 'g' | 'kg';
  percentage: string;
}

interface MixIngredient {
    id: number;
    name: string;
    amount: string;
    fat: string;
    msnf: string;
    sugar: string;
}


type CalculatorType =  'yields' | 'paneer-yield' | 'ice-cream' | 'plant-efficiency' | 'mass-balance';

const calculatorsInfo = {
    'yields': { title: "Product Yields", icon: Percent, component: YieldsCalc },
    'paneer-yield': { title: "Paneer Yield", icon: PaneerIcon, component: PaneerYieldCalc },
    'ice-cream': { title: "Ice Cream", icon: IceCreamIcon, component: IceCreamCalculators },
    'plant-efficiency': { title: "Plant Efficiency", icon: Factory, component: PlantEfficiencyCalc },
    'mass-balance': { title: "Fat/SNF Mass Balance", icon: Weight, component: MassBalanceCalc },
};

export function ProductionCalculationsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const handleBack = useCallback(() => setActiveCalculator(null), []);
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveCalculator(null);
    }
    setIsOpen(open);
  };

  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 sm:p-6">
        {activeCalculator && ActiveCalculatorComponent ? (
          <>
            <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
              <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <DialogTitle className="text-xl font-bold font-headline">{calculatorsInfo[activeCalculator].title}</DialogTitle>
                <DialogDescription>Calculate specific production parameters.</DialogDescription>
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
              <DialogTitle className="text-3xl font-bold text-center font-headline">Production Calculations</DialogTitle>
              <DialogDescription className="text-center">Calculators for product yields, batch scaling, and more.</DialogDescription>
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


function PaneerYieldCalc() {
    const [activeCalc, setActiveCalc] = useState<'theoretical' | 'actual'>('theoretical');
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
            <p class="font-bold text-lg">Estimated Theoretical Yield: <span class="text-2xl text-green-700">${'paneerYieldKg.toFixed(2)'} kg</span></p>
            <p class="text-sm mt-1">This is approximately a <span class="font-bold">${'yieldPercentage.toFixed(2)'}%</span> yield from ${qty} Litres of milk.</p>
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
             <p class="font-bold text-lg">Actual Yield: <span class="text-2xl text-blue-700">${'actualYield.toFixed(2)'}%</span></p>
             <p class="text-sm mt-1">You obtained ${paneer} kg of paneer from ${milk} kg of milk.</p>
        `);
    };
    
    const renderCalculator = () => {
        if (activeCalc === 'theoretical') {
            return (
                 <div>
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
                 </div>
            )
        }
        if (activeCalc === 'actual') {
            return (
                <div>
                     <h3 className="font-semibold text-lg text-gray-700 mb-2">Actual Yield</h3>
                    <p className="text-xs text-muted-foreground mb-4">Calculate the actual yield achieved after a production batch.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><Label>Total Milk Used (kg)</Label><Input type="number" value={milkUsed} onChange={e => setMilkUsed(e.target.value)} placeholder="e.g., 103" /></div>
                        <div><Label>Paneer Obtained (kg)</Label><Input type="number" value={paneerObtained} onChange={e => setPaneerObtained(e.target.value)} placeholder="e.g., 15.5" /></div>
                    </div>
                     <Button onClick={handleActualCalc} className="w-full mt-4">Calculate Actual Yield</Button>
                    {actualResult && <Alert className="mt-4" dangerouslySetInnerHTML={{ __html: actualResult }} />}
                </div>
            )
        }
        return null;
    }

    return (
        <CalculatorCard title="Industrial Paneer Yield Calculator">
             <div className="mb-4">
                <Label>Select Yield Type</Label>
                <Select value={activeCalc} onValueChange={(val) => setActiveCalc(val as any)}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="theoretical">Theoretical Yield</SelectItem>
                        <SelectItem value="actual">Actual Yield</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-4 border-t pt-4">
                {renderCalculator()}
            </div>
        </CalculatorCard>
    );
}

function YieldsCalc() {
    const [activeCalc, setActiveCalc] = useState('cream-sep');

    const calculators = {
        'cream-sep': { title: "Cream Separation", component: <CreamSeparationCalc /> },
        'butter': { title: "Butter Yield", component: <ButterYieldCalc /> },
        'khoa': { title: "Khoa Yield", component: <KhoaYieldCalc /> },
        'shrikhand': { title: "Shrikhand Yield", component: <ShrikhandYieldCalc /> },
        'pedha': { title: "Pedha/Burfi Yield", component: <PedhaBurfiYieldCalc /> },
    };

    const renderCalculator = () => {
        return calculators[activeCalc as keyof typeof calculators]?.component || null;
    }

    return (
        <CalculatorCard title="Product Yield Calculators">
            <div className="mb-4">
                <Label>Select Yield Calculator</Label>
                <Select value={activeCalc} onValueChange={setActiveCalc}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                        {Object.entries(calculators).map(([key, { title }]) => (
                            <SelectItem key={key} value={key}>{title}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
             <div className="mt-4 border-t pt-4">
                {renderCalculator()}
            </div>
        </CalculatorCard>
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
        <div>
            <h4 className="font-semibold text-lg text-center mb-2">Cream Separation Calculator</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Milk Quantity (kg)</Label><Input type="number" value={milkQty} onChange={e => setMilkQty(e.target.value)} /></div>
                <div><Label>Milk Fat %</Label><Input type="number" value={milkFat} onChange={e => setMilkFat(e.target.value)} /></div>
                <div><Label>Target Cream Fat %</Label><Input type="number" value={creamFat} onChange={e => setCreamFat(e.target.value)} /></div>
                <div><Label>Skim Milk Fat %</Label><Input type="number" value={skimFat} onChange={e => setSkimFat(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </div>
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
        <div>
            <h4 className="font-semibold text-lg text-center mb-2">Butter Yield Calculator</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Cream Quantity (kg)</Label><Input type="number" value={creamQty} onChange={e => setCreamQty(e.target.value)} /></div>
                <div><Label>Cream Fat %</Label><Input type="number" value={creamFat} onChange={e => setCreamFat(e.target.value)} /></div>
                <div><Label>Butter Fat %</Label><Input type="number" value={butterFat} onChange={e => setButterFat(e.target.value)} /></div>
                <div><Label>Fat Loss in Buttermilk %</Label><Input type="number" value={fatLoss} onChange={e => setFatLoss(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </div>
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
        <div>
            <h4 className="font-semibold text-lg text-center mb-2">Khoa Yield Calculator</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Milk Quantity (kg)</Label><Input type="number" value={milkQty} onChange={e => setMilkQty(e.target.value)} /></div>
                <div><Label>Milk Total Solids %</Label><Input type="number" value={milkTS} onChange={e => setMilkTS(e.target.value)} /></div>
                <div><Label>Khoa Total Solids %</Label><Input type="number" value={khoaTS} onChange={e => setKhoaTS(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </div>
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
        <div>
            <h4 className="font-semibold text-lg text-center mb-2">Shrikhand Yield Calculator</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Chakka Quantity (kg)</Label><Input type="number" value={chakkaQty} onChange={e => setChakkaQty(e.target.value)} /></div>
                <div><Label>Chakka Total Solids %</Label><Input type="number" value={chakkaTS} onChange={e => setChakkaTS(e.target.value)} /></div>
                <div><Label>Sugar Added (kg)</Label><Input type="number" value={sugarAdded} onChange={e => setSugarAdded(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </div>
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
        <div>
            <h4 className="font-semibold text-lg text-center mb-2">Pedha / Burfi Yield Calculator</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Khoa Quantity (kg)</Label><Input type="number" value={khoaQty} onChange={e => setKhoaQty(e.target.value)} /></div>
                <div><Label>Sugar Added (kg)</Label><Input type="number" value={sugarAdded} onChange={e => setSugarAdded(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {result && <Alert className="mt-4"><AlertDescription dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </div>
    );
}

function IceCreamCalculators() {
    const [activeCalc, setActiveCalc] = useState('mix-comp');
    
    const calculators = {
        'mix-comp': { title: "Mix Composition", component: <MixCompositionCalc /> },
        'batch-scaling': { title: "Batch Scaling", component: <BatchScalingCalc /> },
        'overrun': { title: "Overrun", component: <OverrunCalc /> },
        'freezing-point': { title: "Freezing Point", component: <FreezingPointCalc /> },
    };
    
    const renderCalculator = () => {
        return calculators[activeCalc as keyof typeof calculators]?.component || null;
    }

    return (
        <CalculatorCard title="Ice Cream Calculators">
             <div className="mb-4">
                <Label>Select Ice Cream Calculator</Label>
                <Select value={activeCalc} onValueChange={setActiveCalc}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                        {Object.entries(calculators).map(([key, { title }]) => (
                            <SelectItem key={key} value={key}>{title}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
             <div className="mt-4 border-t pt-4">
                {renderCalculator()}
            </div>
        </CalculatorCard>
    )
}

function BatchScalingCalc() {
    const { toast } = useToast();
    const [ingredients, setIngredients] = useState<BatchIngredient[]>([{ id: 1, name: "Milk", amount: "55", unit: 'kg', percentage: "55" }]);
    const [finalBatchSize, setFinalBatchSize] = useState("100");
    const [result, setResult] = useState<any[] | null>(null);
    const [activeTab, setActiveTab] = useState<'by-weight' | 'by-percentage'>('by-weight');

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: "", amount: "", unit: 'kg', percentage: "" }]);
    };
    
    const removeIngredient = (id: number) => {
        setIngredients(ingredients.filter(ing => ing.id !== id));
    };

    const handleIngredientChange = (id: number, field: keyof BatchIngredient, value: string) => {
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
    };

    const calculateByWeight = () => {
        const finalSizeKg = parseFloat(finalBatchSize);
        if (isNaN(finalSizeKg) || finalSizeKg <= 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter a valid final batch size in kg." });
            return;
        }

        const validIngredients = ingredients.filter(ing => ing.name && parseFloat(ing.amount) > 0);
        if (validIngredients.length === 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter at least one ingredient with a valid amount." });
            return;
        }

        const baseTotalWeightKg = validIngredients.reduce((sum, ing) => {
            const amount = parseFloat(ing.amount) || 0;
            return sum + (ing.unit === 'g' ? amount / 1000 : amount);
        }, 0);

        if (baseTotalWeightKg === 0) return;

        const scaledIngredients = validIngredients.map(ing => {
            const amountKg = ing.unit === 'g' ? (parseFloat(ing.amount) || 0) / 1000 : (parseFloat(ing.amount) || 0);
            const scaledAmountKg = (amountKg / baseTotalWeightKg) * finalSizeKg;
            return { name: ing.name, amount: scaledAmountKg };
        });

        setResult(scaledIngredients);
        toast({ title: "Success", description: "Batch scaling calculated successfully!" });
    };

    const calculateByPercentage = () => {
        const finalSizeKg = parseFloat(finalBatchSize);
        if (isNaN(finalSizeKg) || finalSizeKg <= 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter a valid final batch size in kg." });
            return;
        }

        const validIngredients = ingredients.filter(ing => ing.name && parseFloat(ing.percentage) > 0);
        if (validIngredients.length === 0) {
            toast({ variant: "destructive", title: "Invalid Input", description: "Please enter at least one ingredient with a valid percentage." });
            return;
        }
        
        const totalPercentage = validIngredients.reduce((sum, ing) => sum + (parseFloat(ing.percentage) || 0), 0);
        if (Math.abs(totalPercentage - 100) > 0.01) {
            toast({ variant: "destructive", title: "Invalid Percentages", description: `Total percentage must be 100%, but it is ${totalPercentage.toFixed(2)}%.` });
            return;
        }

        const scaledIngredients = validIngredients.map(ing => {
            const scaledAmountKg = (parseFloat(ing.percentage) / 100) * finalSizeKg;
            return { name: ing.name, amount: scaledAmountKg };
        });
        
        setResult(scaledIngredients);
        toast({ title: "Success", description: "Batch scaling calculated successfully!" });
    }

    return (
        <div>
             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="by-weight">Scale by Weight</TabsTrigger>
                    <TabsTrigger value="by-percentage">Scale by Percentage</TabsTrigger>
                </TabsList>
                <TabsContent value="by-weight">
                    <p className="text-xs text-muted-foreground my-2">Enter your base recipe ingredients and their weights. Then enter the final batch size you want to make.</p>
                     <div className="space-y-2 mb-4">
                        {ingredients.map((ing) => (
                            <div key={ing.id} className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2 items-center">
                                <Input type="text" placeholder="Ingredient Name" value={ing.name} onChange={(e) => handleIngredientChange(ing.id, 'name', e.target.value)} />
                                <Input type="number" placeholder="Amount" value={ing.amount} onChange={(e) => handleIngredientChange(ing.id, 'amount', e.target.value)} />
                                <Select value={ing.unit} onValueChange={(val) => handleIngredientChange(ing.id, 'unit', val as 'g' | 'kg')}>
                                    <SelectTrigger><SelectValue/></SelectTrigger>
                                    <SelectContent><SelectItem value="kg">kg</SelectItem><SelectItem value="g">g</SelectItem></SelectContent>
                                </Select>
                                <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeIngredient(ing.id)}><XCircle /></Button>
                            </div>
                        ))}
                    </div>
                     <Button variant="outline" size="sm" onClick={addIngredient}><PlusCircle className="mr-2 h-4 w-4" /> Add Ingredient</Button>
                    <hr className="my-4" />
                    <Button onClick={calculateByWeight} className="mt-4 w-full">Scale Batch by Weight</Button>
                </TabsContent>
                <TabsContent value="by-percentage">
                    <p className="text-xs text-muted-foreground my-2">Enter your recipe as percentages (must add up to 100%).</p>
                    <div className="space-y-2 mb-4">
                        {ingredients.map((ing) => (
                            <div key={ing.id} className="grid grid-cols-[2fr_1fr_auto] gap-2 items-center">
                                <Input type="text" placeholder="Ingredient Name" value={ing.name} onChange={(e) => handleIngredientChange(ing.id, 'name', e.target.value)} />
                                <div className="relative">
                                    <Input type="number" placeholder="%" value={ing.percentage} onChange={(e) => handleIngredientChange(ing.id, 'percentage', e.target.value)} />
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                                </div>
                                <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeIngredient(ing.id)}><XCircle /></Button>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" size="sm" onClick={addIngredient}><PlusCircle className="mr-2 h-4 w-4" /> Add Ingredient</Button>
                    <hr className="my-4" />
                    <Button onClick={calculateByPercentage} className="mt-4 w-full">Scale Batch by Percentage</Button>
                </TabsContent>
            </Tabs>
            
            <div className="mt-4">
                <Label htmlFor="final-batch-size">Final Batch Size (kg)</Label>
                <Input type="number" id="final-batch-size" value={finalBatchSize} onChange={e => setFinalBatchSize(e.target.value)} placeholder="e.g. 100"/>
            </div>

            {result && (
                <Alert className="mt-4">
                    <AlertTitle>Ingredients for ${finalBatchSize} kg Batch</AlertTitle>
                    <AlertDescription>
                        <Table>
                            <TableHeader><TableRow><TableHead>Ingredient</TableHead><TableHead className="text-right">Required Amount</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {result.map((ing, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{ing.name}</TableCell>
                                        <TableCell className="text-right font-semibold">{ing.amount.toFixed(3)} kg</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow className="font-bold bg-muted">
                                    <TableCell>Total</TableCell>
                                    <TableCell className="text-right">{result.reduce((sum, ing) => sum + ing.amount, 0).toFixed(3)} kg</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </AlertDescription>
                </Alert>
            )}
        </div>
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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Weight of Mix (g)</Label><Input type="number" value={mixWeight} onChange={e => setMixWeight(e.target.value)} /></div>
                <div><Label>Weight of Same Volume of Ice Cream (g)</Label><Input type="number" value={iceCreamWeight} onChange={e => setIceCreamWeight(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="mt-4 w-full">Calculate Overrun</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold">{result}</AlertDescription></Alert>}
        </div>
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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Total Water in Mix (kg)</Label><Input type="number" value={water} onChange={e => setWater(e.target.value)} /></div>
                <div><Label>Sucrose (Sugar) (g)</Label><Input type="number" value={sucrose} onChange={e => setSucrose(e.target.value)} /></div>
                <div><Label>Dextrose/Glucose (g)</Label><Input type="number" value={dextrose} onChange={e => setDextrose(e.target.value)} /></div>
                <div><Label>Salt (NaCl) (g)</Label><Input type="number" value={salt} onChange={e => setSalt(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="mt-4 w-full">Calculate Freezing Point</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold">{result}</AlertDescription></Alert>}
        </div>
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
        <div>
            <div className="space-y-4 mb-4">
                <div className="hidden sm:grid grid-cols-[1fr_1fr_0.5fr_0.5fr_0.5fr_auto] gap-2 items-center">
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
        </div>
    );
}

function MassBalanceCalc() {
    const [inputs, setInputs] = useState({
        openingFat: '', openingSnf: '',
        intakeFat: '', intakeSnf: '',
        addedFat: '', addedSnf: '',
        dispatchedFat: '', dispatchedSnf: '',
        removedFat: '', removedSnf: '',
        closingFat: '', closingSnf: ''
    });

    const handleInputChange = useCallback((field: keyof typeof inputs, value: string) => {
        setInputs(prev => ({...prev, [field]: value}));
    }, []);

    const results = useMemo(() => {
        const opF = parseFloat(inputs.openingFat) || 0;
        const opS = parseFloat(inputs.openingSnf) || 0;
        const inF = parseFloat(inputs.intakeFat) || 0;
        const inS = parseFloat(inputs.intakeSnf) || 0;
        const adF = parseFloat(inputs.addedFat) || 0;
        const adS = parseFloat(inputs.addedSnf) || 0;
        const dispF = parseFloat(inputs.dispatchedFat) || 0;
        const dispS = parseFloat(inputs.dispatchedSnf) || 0;
        const remF = parseFloat(inputs.removedFat) || 0;
        const remS = parseFloat(inputs.removedSnf) || 0;
        const clF = parseFloat(inputs.closingFat) || 0;
        const clS = parseFloat(inputs.closingSnf) || 0;

        const totalInFat = opF + inF + adF;
        const totalInSnf = opS + inS + adS;
        
        const totalOutFat = dispF + remF + clF;
        const totalOutSnf = dispS + remS + clS;

        const gainLossFat = totalInFat - totalOutFat;
        const gainLossSnf = totalInSnf - totalOutSnf;

        return {
            totalInFat, totalInSnf,
            totalOutFat, totalOutSnf,
            gainLossFat, gainLossSnf,
        };
    }, [inputs]);

    const InputRow = ({ label, fatName, snfName }: { label: string, fatName: keyof typeof inputs, snfName: keyof typeof inputs }) => (
        <div className="grid grid-cols-3 items-center gap-4">
            <Label className="font-semibold text-gray-700">{label}</Label>
            <Input type="number" placeholder="Fat (kg)" value={inputs[fatName]} onChange={e => handleInputChange(fatName, e.target.value)} />
            <Input type="number" placeholder="SNF (kg)" value={inputs[snfName]} onChange={e => handleInputChange(snfName, e.target.value)} />
        </div>
    );

    return (
         <CalculatorCard 
            title="Fat & SNF Mass Balance" 
            description="Calculate the gain or loss of fat and SNF during processing to track plant efficiency. All values should be in Kilograms (kg).">
            
            <div className="space-y-6 p-4 bg-muted/30 rounded-lg">
                <div className="grid grid-cols-3 gap-4 font-bold text-center text-sm">
                    <span>Component</span>
                    <span>Fat (kg)</span>
                    <span>SNF (kg)</span>
                </div>
                
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-green-700 flex items-center gap-2"><Plus className="w-5 h-5"/> Inputs</h4>
                    <InputRow label="Opening Balance" fatName="openingFat" snfName="openingSnf"/>
                    <InputRow label="Total Intake" fatName="intakeFat" snfName="intakeSnf"/>
                    <InputRow label="Added (e.g. from SMP)" fatName="addedFat" snfName="addedSnf"/>
                </div>

                <hr/>

                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-red-700 flex items-center gap-2"><Minus className="w-5 h-5"/> Outputs</h4>
                    <InputRow label="Dispatched (in Products)" fatName="dispatchedFat" snfName="dispatchedSnf"/>
                    <InputRow label="Removed (as Cream/etc.)" fatName="removedFat" snfName="removedSnf"/>
                    <InputRow label="Closing Balance" fatName="closingFat" snfName="closingSnf"/>
                </div>
            </div>

            <div className="mt-6">
                <Alert>
                    <AlertTitle className="text-xl font-extrabold text-center">Reconciliation</AlertTitle>
                    <AlertDescription>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
                             <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <p className="text-sm font-medium text-gray-600">Total Fat In</p>
                                <p className="text-2xl font-bold text-green-800">{results.totalInFat.toFixed(3)} kg</p>
                             </div>
                              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <p className="text-sm font-medium text-gray-600">Total Fat Out</p>
                                <p className="text-2xl font-bold text-red-800">{results.totalOutFat.toFixed(3)} kg</p>
                             </div>
                             <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <p className="text-sm font-medium text-gray-600">Total SNF In</p>
                                <p className="text-2xl font-bold text-green-800">{results.totalInSnf.toFixed(3)} kg</p>
                             </div>
                             <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <p className="text-sm font-medium text-gray-600">Total SNF Out</p>
                                <p className="text-2xl font-bold text-red-800">{results.totalOutSnf.toFixed(3)} kg</p>
                             </div>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
                             <div className={`p-4 rounded-lg border ${results.gainLossFat >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'}`}>
                                <p className="text-sm font-medium text-gray-600">Fat Gain / Loss</p>
                                <p className={`text-2xl font-bold ${results.gainLossFat >= 0 ? 'text-blue-800' : 'text-orange-800'}`}>{results.gainLossFat.toFixed(3)} kg</p>
                             </div>
                             <div className={`p-4 rounded-lg border ${results.gainLossSnf >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'}`}>
                                <p className="text-sm font-medium text-gray-600">SNF Gain / Loss</p>
                                <p className={`text-2xl font-bold ${results.gainLossSnf >= 0 ? 'text-blue-800' : 'text-orange-800'}`}>{results.gainLossSnf.toFixed(3)} kg</p>
                             </div>
                         </div>
                    </AlertDescription>
                </Alert>
            </div>
        </CalculatorCard>
    );
}

function PlantEfficiencyCalc() {
    const [inputs, setInputs] = useState({
        actualOutput: '8000',
        maxCapacity: '10000',
        stdTime: '10',
        actualTime: '12',
        energyConsumed: '1000',
        totalOutputEnergy: '8000',
        totalWaste: '500',
        totalInput: '10000',
    });
    
    const [weights, setWeights] = useState({
        capacity: 30,
        processing: 25,
        energy: 25,
        waste: 20
    });

    const handleInputChange = useCallback((field: keyof typeof inputs, value: string) => {
        setInputs(prev => ({...prev, [field]: value}));
    }, []);
    
    const handleWeightChange = useCallback((field: keyof typeof weights, value: number) => {
        setWeights(prev => ({...prev, [field]: value}));
    }, []);

    const results = useMemo(() => {
        const capacityUtilization = (parseFloat(inputs.actualOutput) / parseFloat(inputs.maxCapacity)) * 100;
        const processingTimeEfficiency = (parseFloat(inputs.stdTime) / parseFloat(inputs.actualTime)) * 100;
        const energyConsumption = parseFloat(inputs.energyConsumed) / parseFloat(inputs.totalOutputEnergy);
        const wasteGeneration = (parseFloat(inputs.totalWaste) / parseFloat(inputs.totalInput)) * 100;
        
        // Normalize scores to be on a 0-100 scale where higher is better
        const capacityScore = isNaN(capacityUtilization) ? 0 : capacityUtilization;
        const timeScore = isNaN(processingTimeEfficiency) ? 0 : processingTimeEfficiency;
        const wasteScore = isNaN(wasteGeneration) ? 100 - wasteGeneration : 0;
        
        // A simple normalization for energy. Assumes 0.5 kWh/L is a poor score (0) and 0 is perfect (100).
        const energyScore = isNaN(energyConsumption) ? 0 : Math.max(0, 100 - (energyConsumption * 200));

        const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);

        const overallEfficiency = totalWeight > 0 ? 
            (
                (capacityScore * weights.capacity) + 
                (timeScore * weights.processing) + 
                (energyScore * weights.energy) + 
                (wasteScore * weights.waste)
            ) / totalWeight
            : 0;

        return {
            capacityUtilization: capacityScore,
            processingTimeEfficiency: timeScore,
            energyConsumption,
            wasteGeneration,
            overallEfficiency
        };

    }, [inputs, weights]);
    

    return (
        <CalculatorCard title="Overall Plant Efficiency Calculator" description="Evaluate your plant's performance across key metrics.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs Section */}
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold mb-2 text-gray-700">1. Capacity Utilization</h4>
                        <Input type="number" placeholder="Actual Output (liters)" value={inputs.actualOutput} onChange={e => handleInputChange('actualOutput', e.target.value)} />
                        <Input type="number" placeholder="Maximum Rated Capacity (liters)" className="mt-2" value={inputs.maxCapacity} onChange={e => handleInputChange('maxCapacity', e.target.value)} />
                        <p className="text-right mt-2 font-bold text-blue-600">Score: {results.capacityUtilization.toFixed(2)}%</p>
                    </div>
                     <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold mb-2 text-gray-700">2. Processing Time Efficiency</h4>
                        <Input type="number" placeholder="Standard Time (minutes)" value={inputs.stdTime} onChange={e => handleInputChange('stdTime', e.target.value)} />
                        <Input type="number" placeholder="Actual Time (minutes)" className="mt-2" value={inputs.actualTime} onChange={e => handleInputChange('actualTime', e.target.value)} />
                        <p className="text-right mt-2 font-bold text-blue-600">Score: {results.processingTimeEfficiency.toFixed(2)}%</p>
                    </div>
                     <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold mb-2 text-gray-700">3. Energy Consumption</h4>
                        <Input type="number" placeholder="Total Energy Consumed (kWh)" value={inputs.energyConsumed} onChange={e => handleInputChange('energyConsumed', e.target.value)} />
                        <Input type="number" placeholder="Total Output (liters)" className="mt-2" value={inputs.totalOutputEnergy} onChange={e => handleInputChange('totalOutputEnergy', e.target.value)} />
                        <p className="text-right mt-2 font-bold text-blue-600">kWh/liter: {isNaN(results.energyConsumption) ? '0.00' : results.energyConsumption.toFixed(3)}</p>
                    </div>
                     <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold mb-2 text-gray-700">4. Waste Generation</h4>
                        <Input type="number" placeholder="Total Waste Generated (liters)" value={inputs.totalWaste} onChange={e => handleInputChange('totalWaste', e.target.value)} />
                        <Input type="number" placeholder="Total Input (liters)" className="mt-2" value={inputs.totalInput} onChange={e => handleInputChange('totalInput', e.target.value)} />
                         <p className="text-right mt-2 font-bold text-blue-600">Waste: {isNaN(results.wasteGeneration) ? '0.00' : results.wasteGeneration.toFixed(2)}%</p>
                    </div>
                </div>
                 {/* Weights & Results Section */}
                 <div className="space-y-4">
                     <div className="p-4 border rounded-lg bg-primary/10">
                         <h4 className="font-semibold mb-4 text-gray-800">Assign Importance (Weights)</h4>
                         <div className="space-y-4">
                             <div>
                                <Label>Capacity Utilization (${weights.capacity}%)</Label>
                                <Slider defaultValue={[weights.capacity]} max={100} step={5} onValueChange={(v) => handleWeightChange('capacity', v[0])} />
                             </div>
                             <div>
                                <Label>Processing Time (${weights.processing}%)</Label>
                                <Slider defaultValue={[weights.processing]} max={100} step={5} onValueChange={(v) => handleWeightChange('processing', v[0])} />
                             </div>
                             <div>
                                <Label>Energy Efficiency (${weights.energy}%)</Label>
                                <Slider defaultValue={[weights.energy]} max={100} step={5} onValueChange={(v) => handleWeightChange('energy', v[0])} />
                             </div>
                             <div>
                                <Label>Waste Generation (${weights.waste}%)</Label>
                                <Slider defaultValue={[weights.waste]} max={100} step={5} onValueChange={(v) => handleWeightChange('waste', v[0])} />
                             </div>
                         </div>
                         <Alert className="mt-4 text-center">
                            <AlertTitle className="text-2xl font-extrabold text-green-700">Overall Plant Efficiency</AlertTitle>
                            <AlertDescription className="text-4xl font-bold text-green-600 mt-2">
                                {results.overallEfficiency.toFixed(2)}%
                            </AlertDescription>
                         </Alert>
                     </div>
                 </div>
            </div>
        </CalculatorCard>
    );
}



    



    