
"use client";

import { useState, useMemo, memo, useCallback } from "react";
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
import { CheckCircle, PlusCircle, XCircle, Beaker, Thermometer, Weight, Percent, Scaling, Combine, Calculator, FlaskConical, ArrowLeft, RotateCw, Dna, Atom, Droplet, DollarSign, Microscope, Recycle, Bug, ShieldCheck, FileSpreadsheet, Search, Wind } from "lucide-react";
import { PaneerIcon, IceCreamIcon } from "../icons";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


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

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 rounded-xl shadow-sm border mt-4">
        <h3 className="text-xl font-bold text-primary mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);

type CalculatorType = 'acidity' | 'yields' | 'paneer-yield' | 'ice-cream' | 'fat-dry' | 'gravimetric' | 'formulas' | 'cip-strength' | 'protein-casein' | 'minerals' | 'cream' | 'pricing' | 'rm-pv' | 'peroxide-value' | 'salt-percent' | 'ffa-percent' | 'oil-percent';

const calculatorsInfo = {
    'pricing': { title: "Milk Pricing", icon: DollarSign, component: MilkPricingCalculators },
    'rm-pv': { title: "RM & Polenske Value", icon: FlaskConical, component: RMPVCalc },
    'ffa-percent': { title: "FFA % & Acid Value", icon: FlaskConical, component: FfaPercentCalc },
    'peroxide-value': { title: "Peroxide Value", icon: FlaskConical, component: PeroxideValueCalc },
    'salt-percent': { title: "Salt %", icon: FlaskConical, component: SaltPercentCalc },
    'oil-percent': { title: "Oil % (Soxhlet)", icon: FlaskConical, component: OilPercentCalc },
    'acidity': { title: "Acidity", icon: Beaker, component: ProductAcidityCalc },
    'protein-casein': { title: "Protein & Casein", icon: Dna, component: ProteinCaseinCalc },
    'minerals': { title: "Minerals (Na/K)", icon: Atom, component: MineralAnalysisCalc },
    'yields': { title: "Product Yields", icon: Percent, component: YieldsCalc },
    'paneer-yield': { title: "Paneer Yield", icon: PaneerIcon, component: PaneerYieldCalc },
    'ice-cream': { title: "Ice Cream", icon: IceCreamIcon, component: IceCreamCalculators },
    'cream': { title: "Cream", icon: Droplet, component: CreamCalculators },
    'fat-dry': { title: "Fat on Dry Basis", icon: FlaskConical, component: FatOnDryBasisCalc },
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

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveCalculator(null); // Reset on close
    }
    setIsOpen(open);
  };
  
  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
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

function PeroxideValueCalc() {
    const [sampleWeight, setSampleWeight] = useState('5.0');
    const [sampleTitre, setSampleTitre] = useState('');
    const [blankTitre, setBlankTitre] = useState('');
    const [normality, setNormality] = useState('0.01');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const W = parseFloat(sampleWeight);
        const S = parseFloat(sampleTitre);
        const B = parseFloat(blankTitre);
        const N = parseFloat(normality);
        if (isNaN(W) || isNaN(S) || isNaN(B) || isNaN(N) || W <= 0) {
            setResult("Please enter valid positive numbers for all fields.");
            return;
        }
        const pv = ((S - B) * N * 1000) / W;
        setResult(`Peroxide Value (PV): <strong>${pv.toFixed(2)} meq/kg</strong>`);
    };

    return (
        <CalculatorCard title="Peroxide Value (PV) Calculator" description="Measures the initial stages of oxidative rancidity in fats and oils.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Sample Weight (g)</Label><Input type="number" value={sampleWeight} onChange={e => setSampleWeight(e.target.value)} /></div>
                <div><Label>Normality of Sodium Thiosulphate</Label><Input type="number" step="0.001" value={normality} onChange={e => setNormality(e.target.value)} /></div>
                <div><Label>Sample Titration Volume (S)</Label><Input type="number" value={sampleTitre} onChange={e => setSampleTitre(e.target.value)} placeholder="ml" /></div>
                <div><Label>Blank Titration Volume (B)</Label><Input type="number" value={blankTitre} onChange={e => setBlankTitre(e.target.value)} placeholder="ml" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Peroxide Value</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function SaltPercentCalc() {
    const [sampleWeight, setSampleWeight] = useState('2.0');
    const [titrantVolume, setTitrantVolume] = useState('');
    const [normality, setNormality] = useState('0.1');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const W = parseFloat(sampleWeight);
        const V = parseFloat(titrantVolume);
        const N = parseFloat(normality);
        if (isNaN(W) || isNaN(V) || isNaN(N) || W <= 0) {
            setResult("Please enter valid positive numbers for all fields.");
            return;
        }
        const saltPercent = (5.845 * V * N) / W;
        setResult(`Salt Percentage: <strong>${saltPercent.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Salt % Calculator" description="Calculate salt percentage using titration with silver nitrate.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><Label>Sample Weight (g)</Label><Input type="number" value={sampleWeight} onChange={e => setSampleWeight(e.target.value)} /></div>
                <div><Label>Volume of AgNO₃ Used (V)</Label><Input type="number" value={titrantVolume} onChange={e => setTitrantVolume(e.target.value)} placeholder="ml" /></div>
                <div><Label>Normality of AgNO₃ (N)</Label><Input type="number" step="0.01" value={normality} onChange={e => setNormality(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Salt %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function FfaPercentCalc() {
    const [sampleWeight, setSampleWeight] = useState('15.0');
    const [titrantVolume, setTitrantVolume] = useState('');
    const [normality, setNormality] = useState('0.1');
    const [result, setResult] = useState<{ ffa: string, acidValue: string } | null>(null);

    const calculate = () => {
        const W = parseFloat(sampleWeight);
        const V = parseFloat(titrantVolume);
        const N = parseFloat(normality);
        if (isNaN(W) || isNaN(V) || isNaN(N) || W <= 0) {
            setResult(null);
            alert("Please enter valid positive numbers for all fields.");
            return;
        }
        const ffaPercent = (28.2 * V * N) / W;
        const acidValue = ffaPercent * 1.99;
        setResult({
            ffa: ffaPercent.toFixed(3),
            acidValue: acidValue.toFixed(3)
        });
    };

    return (
        <CalculatorCard title="Free Fatty Acid (FFA) % Calculator" description="Calculate FFA as oleic acid and the corresponding Acid Value.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><Label>Sample Weight (g)</Label><Input type="number" value={sampleWeight} onChange={e => setSampleWeight(e.target.value)} /></div>
                <div><Label>Volume of NaOH Used (V)</Label><Input type="number" value={titrantVolume} onChange={e => setTitrantVolume(e.target.value)} placeholder="ml" /></div>
                <div><Label>Normality of NaOH (N)</Label><Input type="number" step="0.01" value={normality} onChange={e => setNormality(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate FFA %</Button>
            {result && (
                <Alert className="mt-4">
                    <AlertTitle>Results</AlertTitle>
                    <AlertDescription className="text-lg font-bold text-center space-y-2 mt-2">
                        <p>FFA as Oleic Acid: <strong>{result.ffa}%</strong></p>
                        <p>Acid Value: <strong>{result.acidValue}</strong></p>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

function OilPercentCalc() {
    const [w1, setW1] = useState(''); // Empty thimble
    const [w2, setW2] = useState(''); // Thimble + Sample
    const [w4, setW4] = useState(''); // Empty RBF
    const [w5, setW5] = useState(''); // RBF + Oil
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const numW1 = parseFloat(w1);
        const numW2 = parseFloat(w2);
        const numW4 = parseFloat(w4);
        const numW5 = parseFloat(w5);

        if ([numW1, numW2, numW4, numW5].some(isNaN)) {
             setResult("Please enter valid numbers for all weights.");
            return;
        }

        const w3 = numW2 - numW1; // Sample Weight
        const w6 = numW5 - numW4; // Oil Weight

        if (w3 <= 0 || w6 < 0) {
            setResult("Invalid weights. Please check your inputs.");
            return;
        }
        
        const fatPercent = (w6 * 100) / w3;
        setResult(`Oil/Fat Percentage: <strong>${fatPercent.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Oil % Calculator (Soxhlet Method)" description="Calculate oil/fat percentage using weights from the Soxhlet extraction method.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Weight of Empty Thimble (W1)</Label><Input type="number" value={w1} onChange={e => setW1(e.target.value)} placeholder="g" /></div>
                <div><Label>Weight of Thimble + Sample (W2)</Label><Input type="number" value={w2} onChange={e => setW2(e.target.value)} placeholder="g" /></div>
                <div><Label>Weight of Empty R.B. Flask (W4)</Label><Input type="number" value={w4} onChange={e => setW4(e.target.value)} placeholder="g" /></div>
                <div><Label>Weight of Flask + Extracted Oil (W5)</Label><Input type="number" value={w5} onChange={e => setW5(e.target.value)} placeholder="g" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Oil %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function MilkPricingCalculators() {
    const [activeTab, setActiveTab] = useState("two-axis");
    return (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="two-axis">Two-Axis Pricing</TabsTrigger>
                <TabsTrigger value="point-based">Point-Based Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="two-axis" className="pt-4">
                <TwoAxisPricingCalc />
            </TabsContent>
            <TabsContent value="point-based" className="pt-4">
                <PointBasedPricingCalc />
            </TabsContent>
        </Tabs>
    )
}

function RMPVCalc() {
    return (
        <div className="space-y-6">
            <RMCalcByVolume />
            <RMCalcByWeight />
            <PVCalc />
        </div>
    );
}

function RMCalcByVolume() {
    const [reading, setReading] = useState('');
    const [blank, setBlank] = useState('0.2');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const r = parseFloat(reading);
        const b = parseFloat(blank);
        if (isNaN(r) || isNaN(b)) {
            setResult("Please enter valid numbers for reading and blank.");
            return;
        }
        const rmValue = (r - b) * 1.1;
        setResult(`Reichert-Meissl (RM) Value: <strong>${rmValue.toFixed(2)}</strong>`);
    };

    return (
        <CalculatorCard title="RM Value Calculation (By Volume)" description="Standard method assuming a 5g sample where 100ml distillate is collected.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Titration Reading (ml)</Label><Input type="number" value={reading} onChange={e => setReading(e.target.value)} placeholder="e.g., 28.5" /></div>
                <div><Label>Blank Reading (ml)</Label><Input type="number" value={blank} onChange={e => setBlank(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate RM Value</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function RMCalcByWeight() {
    const [reading, setReading] = useState('');
    const [blank, setBlank] = useState('0.2');
    const [weight, setWeight] = useState('5.0');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const r = parseFloat(reading);
        const b = parseFloat(blank);
        const w = parseFloat(weight);
        if (isNaN(r) || isNaN(b) || isNaN(w) || w <= 0) {
            setResult("Please enter valid numbers for all fields.");
            return;
        }
        const rmValue = ((r - b) * 5.5) / w;
        setResult(`Reichert-Meissl (RM) Value: <strong>${rmValue.toFixed(2)}</strong>`);
    };

    return (
        <CalculatorCard title="RM Value Calculation (By Weight)" description="Use this method for higher accuracy when your sample weight is not exactly 5g.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><Label>Titration Reading (ml)</Label><Input type="number" value={reading} onChange={e => setReading(e.target.value)} placeholder="e.g., 28.5" /></div>
                <div><Label>Blank Reading (ml)</Label><Input type="number" value={blank} onChange={e => setBlank(e.target.value)} /></div>
                <div><Label>Sample Weight (g)</Label><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate RM Value</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function PVCalc() {
    const [reading, setReading] = useState('');
    const [blank, setBlank] = useState('0.1');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const r = parseFloat(reading);
        const b = parseFloat(blank);
        if (isNaN(r) || isNaN(b)) {
            setResult("Please enter valid numbers for reading and blank.");
            return;
        }
        const pvValue = r - b;
        setResult(`Polenske Value (PV): <strong>${pvValue.toFixed(2)}</strong>`);
    };

    return (
        <CalculatorCard title="Polenske Value (PV) Calculation" description="Measures water-insoluble volatile fatty acids, useful for detecting certain adulterants.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Titration Reading (ml)</Label><Input type="number" value={reading} onChange={e => setReading(e.target.value)} placeholder="e.g., 1.5" /></div>
                <div><Label>Blank Reading (ml)</Label><Input type="number" value={blank} onChange={e => setBlank(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Polenske Value</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}


function TwoAxisPricingCalc() {
    const [inputs, setInputs] = useState({
        fatPercent: '4.5',
        clr: '28',
        fatRate: '300',
        snfRate: '200'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
    };
    
    const results = useMemo(() => {
        const fat = parseFloat(inputs.fatPercent) || 0;
        const clr = parseFloat(inputs.clr) || 0;
        const fatRate = parseFloat(inputs.fatRate) || 0;
        const snfRate = parseFloat(inputs.snfRate) || 0;

        if (fat <= 0 || clr <= 0 || fatRate <= 0 || snfRate <= 0) {
            return null;
        }

        const snf = getSnf(fat, clr);
        const pricePerKg = ((fat / 100) * fatRate) + ((snf / 100) * snfRate);
        const pricePerLitre = pricePerKg * componentProps.milkDensity;

        return {
            snf: snf.toFixed(2),
            pricePerKg: pricePerKg.toFixed(2),
            pricePerLitre: pricePerLitre.toFixed(2)
        };
    }, [inputs]);

    return (
        <CalculatorCard title="Milk Pricing Calculator (Two-Axis)" description="Calculate the price of milk based on its Fat and SNF content, a standard industry practice.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Composition</h3>
                    <div><Label>Fat %</Label><Input type="number" name="fatPercent" value={inputs.fatPercent} onChange={handleInputChange} placeholder="e.g., 4.5" /></div>
                    <div><Label>CLR (Corrected Lactometer Reading)</Label><Input type="number" name="clr" value={inputs.clr} onChange={handleInputChange} placeholder="e.g., 28.0" /></div>
                </div>
                 <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Market Rates (per Kg)</h3>
                    <div><Label>Fat Rate (₹ per Kg)</Label><Input type="number" name="fatRate" value={inputs.fatRate} onChange={handleInputChange} placeholder="e.g., 300" /></div>
                    <div><Label>SNF Rate (₹ per Kg)</Label><Input type="number" name="snfRate" value={inputs.snfRate} onChange={handleInputChange} placeholder="e.g., 200" /></div>
                </div>
            </div>
            
            {results && (
                <Alert className="mt-6 bg-green-50 border-green-200">
                    <AlertTitle className="text-xl font-bold text-green-800">Calculated Price</AlertTitle>
                    <AlertDescription>
                        <div className="mt-2 text-lg space-y-2 text-gray-800">
                            <p>Calculated SNF: <strong className="text-gray-900">{results.snf}%</strong></p>
                            <hr className="my-2" />
                            <p>Price per Kg: <strong className="text-2xl text-green-700">₹ {results.pricePerKg}</strong></p>
                            <p>Price per Litre: <strong className="text-2xl text-green-700">₹ {results.pricePerLitre}</strong></p>
                        </div>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

function PointBasedPricingCalc() {
    const [inputs, setInputs] = useState({
        fatPercent: '4.5',
        clr: '28',
        ratePerFat: '7.0',
        ratePerClr: '3.0'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
    };

    const results = useMemo(() => {
        const fat = parseFloat(inputs.fatPercent) || 0;
        const clr = parseFloat(inputs.clr) || 0;
        const ratePerFat = parseFloat(inputs.ratePerFat) || 0;
        const ratePerClr = parseFloat(inputs.ratePerClr) || 0;

        if (fat <= 0 || clr <= 0 || ratePerFat <= 0 || ratePerClr <= 0) {
            return null;
        }

        const snf = getSnf(fat, clr); // Still useful to show
        const pricePerLitre = (fat * ratePerFat) + (clr * ratePerClr); // Direct calculation
        const pricePerKg = pricePerLitre / componentProps.milkDensity;

        return {
            snf: snf.toFixed(2),
            pricePerLitre: pricePerLitre.toFixed(2),
            pricePerKg: pricePerKg.toFixed(2)
        };
    }, [inputs]);

    return (
        <CalculatorCard title="Milk Pricing Calculator (Point-Based)" description="Calculate milk price based on rates per point of Fat and CLR. This method is common at collection centers.">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Composition</h3>
                    <div><Label>Fat %</Label><Input type="number" name="fatPercent" value={inputs.fatPercent} onChange={handleInputChange} placeholder="e.g., 4.5" /></div>
                    <div><Label>CLR (Corrected Lactometer Reading)</Label><Input type="number" name="clr" value={inputs.clr} onChange={handleInputChange} placeholder="e.g., 28.0" /></div>
                </div>
                 <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Point Rates (per Litre)</h3>
                    <div><Label>Rate per Fat Point (₹)</Label><Input type="number" name="ratePerFat" value={inputs.ratePerFat} onChange={handleInputChange} placeholder="e.g., 7.0" /></div>
                    <div><Label>Rate per CLR Point (₹)</Label><Input type="number" name="ratePerClr" value={inputs.ratePerClr} onChange={handleInputChange} placeholder="e.g., 3.0" /></div>
                </div>
            </div>
            
            {results && (
                <Alert className="mt-6 bg-green-50 border-green-200">
                    <AlertTitle className="text-xl font-bold text-green-800">Calculated Price</AlertTitle>
                    <AlertDescription>
                        <div className="mt-2 text-lg space-y-2 text-gray-800">
                            <p>Calculated SNF (for reference): <strong className="text-gray-900">{results.snf}%</strong></p>
                            <hr className="my-2" />
                            <p>Price per Litre: <strong className="text-2xl text-green-700">₹ {results.pricePerLitre}</strong></p>
                             <p>Price per Kg: <strong className="text-2xl text-green-700">₹ {results.pricePerKg}</strong></p>
                        </div>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}


function CreamCalculators() {
    return (
        <Tabs defaultValue="fat-percent" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger value="fat-percent">Fat %</TabsTrigger>
                <TabsTrigger value="actual-snf">Actual SNF</TabsTrigger>
                <TabsTrigger value="diluted-snf">Diluted SNF</TabsTrigger>
            </TabsList>
            <TabsContent value="fat-percent" className="pt-4"><CreamFatCalc /></TabsContent>
            <TabsContent value="actual-snf" className="pt-4"><ActualCreamSnfCalc /></TabsContent>
            <TabsContent value="diluted-snf" className="pt-4"><DilutedCreamSnfCalc /></TabsContent>
        </Tabs>
    );
}

function CreamFatCalc() {
    const [reading, setReading] = useState('');
    const [weight, setWeight] = useState('5');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const r = parseFloat(reading);
        const w = parseFloat(weight);
        if (isNaN(r) || isNaN(w) || w <= 0) {
            setResult("Please enter valid numbers for reading and weight.");
            return;
        }
        const fatPercent = (r * 11.25) / w;
        setResult(`Cream Fat: <strong>${fatPercent.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Cream Fat % Calculator (by Milk Butyrometer)" description="Calculate the fat percentage of cream using a milk butyrometer reading.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Butyrometer Reading</Label><Input type="number" value={reading} onChange={e => setReading(e.target.value)} placeholder="e.g., 8.0" /></div>
                <div><Label>Sample Weight (g)</Label><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g., 5" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Fat %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function ActualCreamSnfCalc() {
    const [ts, setTs] = useState('');
    const [fat, setFat] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const totalSolids = parseFloat(ts);
        const fatPercent = parseFloat(fat);
        if (isNaN(totalSolids) || isNaN(fatPercent)) {
            setResult("Please enter valid numbers for TS and Fat.");
            return;
        }
        if (fatPercent > totalSolids) {
            setResult("Fat % cannot be greater than Total Solids %.");
            return;
        }
        const snfPercent = totalSolids - fatPercent;
        setResult(`Actual Cream SNF: <strong>${snfPercent.toFixed(2)}%</strong>`);
    };
    
    return (
        <CalculatorCard title="Actual Cream SNF % Calculator" description="Calculate the actual Solids-Not-Fat percentage of your cream.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Total Solids (TS) %</Label><Input type="number" value={ts} onChange={e => setTs(e.target.value)} placeholder="e.g., 45.5" /></div>
                <div><Label>Fat %</Label><Input type="number" value={fat} onChange={e => setFat(e.target.value)} placeholder="e.g., 40.0" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate SNF %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function DilutedCreamSnfCalc() {
    const [initialSnf, setInitialSnf] = useState('5.5');
    const [initialWeight, setInitialWeight] = useState('100');
    const [waterWeight, setWaterWeight] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const iSnf = parseFloat(initialSnf);
        const iWeight = parseFloat(initialWeight);
        const wWeight = parseFloat(waterWeight);
        if (isNaN(iSnf) || isNaN(iWeight) || isNaN(wWeight) || iWeight <= 0 || wWeight < 0) {
            setResult("Please enter valid positive numbers for all fields.");
            return;
        }
        const finalWeight = iWeight + wWeight;
        const finalSnf = (iSnf * iWeight) / finalWeight;
        setResult(`Final SNF of Diluted Cream: <strong>${finalSnf.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Diluted Cream SNF % Calculator" description="Calculate the final SNF percentage after diluting high-fat cream with water.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><Label>Initial Cream SNF %</Label><Input type="number" value={initialSnf} onChange={e => setInitialSnf(e.target.value)} placeholder="e.g., 5.5" /></div>
                <div><Label>Initial Cream Weight (kg)</Label><Input type="number" value={initialWeight} onChange={e => setInitialWeight(e.target.value)} placeholder="e.g., 100" /></div>
                <div><Label>Water Added (kg)</Label><Input type="number" value={waterWeight} onChange={e => setWaterWeight(e.target.value)} placeholder="e.g., 20" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Final SNF %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}


function MineralAnalysisCalc() {
    const [mineral, setMineral] = useState<'sodium' | 'potassium'>('sodium');
    const [stdConc, setStdConc] = useState('10');
    const [stdReading, setStdReading] = useState('');
    const [sampleReading, setSampleReading] = useState('');
    const [dilutionFactor, setDilutionFactor] = useState('100');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const stdC = parseFloat(stdConc);
        const stdR = parseFloat(stdReading);
        const sampleR = parseFloat(sampleReading);
        const dilution = parseFloat(dilutionFactor);

        if (isNaN(stdC) || isNaN(stdR) || isNaN(sampleR) || isNaN(dilution) || stdR <= 0 || dilution <= 0) {
            setResult("Please enter valid positive numbers for all fields.");
            return;
        }

        const factor = stdC / stdR;
        const dilutedConcentration = sampleR * factor;
        const finalConcentration = dilutedConcentration * dilution;

        setResult(`Estimated ${mineral === 'sodium' ? 'Sodium' : 'Potassium'} Content: <strong>${finalConcentration.toFixed(2)} ppm</strong>`);
    };

    return (
        <CalculatorCard title="Sodium & Potassium Analysis (Flame Photometry)" description="Estimate Sodium (Na) and Potassium (K) content in milk using flame photometer readings. This calculator accounts for sample dilution during preparation.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label>Select Mineral</Label>
                    <Select value={mineral} onValueChange={(val) => setMineral(val as any)}>
                        <SelectTrigger><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sodium">Sodium (Na)</SelectItem>
                            <SelectItem value="potassium">Potassium (K)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                     <Label>Sample Dilution Factor</Label>
                     <Input type="number" value={dilutionFactor} onChange={e => setDilutionFactor(e.target.value)} placeholder="e.g., 100"/>
                </div> 
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700 font-headline">Standard Calibration</h4>
                    <div><Label>Standard Concentration (ppm)</Label><Input type="number" value={stdConc} onChange={e => setStdConc(e.target.value)} /></div>
                    <div><Label>Standard Reading</Label><Input type="number" value={stdReading} onChange={e => setStdReading(e.target.value)} placeholder="e.g., 50"/></div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h4 className="font-semibold text-gray-700 font-headline">Milk Sample</h4>
                    <div><Label>Sample Reading</Label><Input type="number" value={sampleReading} onChange={e => setSampleReading(e.target.value)} placeholder="e.g., 25" /></div>
                </div>
            </div>
             <Button onClick={calculate} className="w-full mt-6">Calculate Mineral Content</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}


function ProteinCaseinCalc() {
    return (
        <Tabs defaultValue="kjeldahl" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="kjeldahl">Kjeldahl Protein</TabsTrigger>
                <TabsTrigger value="formol">Formol Protein</TabsTrigger>
                <TabsTrigger value="casein-titration">Casein (Titration)</TabsTrigger>
                <TabsTrigger value="casein-factor">Casein (Factor)</TabsTrigger>
            </TabsList>
            <TabsContent value="kjeldahl" className="pt-4"><KjeldahlProteinCalc /></TabsContent>
            <TabsContent value="formol" className="pt-4"><FormolTitrationCalc /></TabsContent>
            <TabsContent value="casein-titration" className="pt-4"><CaseinTitrationCalc /></TabsContent>
            <TabsContent value="casein-factor" className="pt-4"><CaseinFromProteinCalc /></TabsContent>
        </Tabs>
    )
}

function KjeldahlProteinCalc() {
    const [sampleWeight, setSampleWeight] = useState('5');
    const [sampleTitre, setSampleTitre] = useState('');
    const [blankTitre, setBlankTitre] = useState('0.1');
    const [acidNormality, setAcidNormality] = useState('0.1');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const W = parseFloat(sampleWeight);
        const Vs = parseFloat(sampleTitre);
        const Vb = parseFloat(blankTitre);
        const N = parseFloat(acidNormality);
        if (isNaN(W) || isNaN(Vs) || isNaN(Vb) || isNaN(N) || W <= 0) {
            setResult("Please enter valid positive numbers for all fields.");
            return;
        }
        const nitrogenPercent = ( (Vs - Vb) * N * 1.4007 ) / W;
        const proteinPercent = nitrogenPercent * 6.38; // Factor for milk
        setResult(`Total Nitrogen: <strong>${nitrogenPercent.toFixed(4)}%</strong><br/>Crude Protein: <strong>${proteinPercent.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Protein Estimation (Kjeldahl Method)" description="Calculate crude protein by determining the total nitrogen content of the sample.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Sample Weight (g)</Label><Input type="number" value={sampleWeight} onChange={e => setSampleWeight(e.target.value)} /></div>
                <div><Label>Normality of HCl/H₂SO₄</Label><Input type="number" step="0.01" value={acidNormality} onChange={e => setAcidNormality(e.target.value)} /></div>
                <div><Label>Sample Titre Value (ml)</Label><Input type="number" value={sampleTitre} onChange={e => setSampleTitre(e.target.value)} placeholder="e.g., 8.5" /></div>
                <div><Label>Blank Titre Value (ml)</Label><Input type="number" value={blankTitre} onChange={e => setBlankTitre(e.target.value)} placeholder="e.g., 0.1" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Protein %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function FormolTitrationCalc() {
    const [initialTitre, setInitialTitre] = useState('');
    const [finalTitre, setFinalTitre] = useState('');
    const [factor, setFactor] = useState('1.7');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const v1 = parseFloat(initialTitre);
        const v2 = parseFloat(finalTitre);
        const f = parseFloat(factor);
        if (isNaN(v1) || isNaN(v2) || isNaN(f)) {
            setResult("Please enter valid numbers for all fields.");
            return;
        }
        const proteinPercent = (v2 - v1) * f;
        setResult(`Estimated Protein: <strong>${proteinPercent.toFixed(2)}%</strong>`);
    };
    
    return (
        <CalculatorCard title="Protein Estimation (Formaldehyde Titration)" description="A rapid method to estimate protein content by titrating before and after adding formaldehyde.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><Label>Initial Titre (V₁)</Label><Input type="number" value={initialTitre} onChange={e => setInitialTitre(e.target.value)} placeholder="Titre before formaldehyde" /></div>
                <div><Label>Final Titre (V₂)</Label><Input type="number" value={finalTitre} onChange={e => setFinalTitre(e.target.value)} placeholder="Titre after formaldehyde" /></div>
                <div><Label>Formol Factor</Label><Input type="number" value={factor} onChange={e => setFactor(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Protein %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function CaseinTitrationCalc() {
    const [sampleTitre, setSampleTitre] = useState('');
    const [blankTitre, setBlankTitre] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const vt = parseFloat(sampleTitre);
        const vb = parseFloat(blankTitre);
        if (isNaN(vt) || isNaN(vb)) {
            setResult("Please enter valid titre values.");
            return;
        }
        const caseinPercent = (vt - vb) * 1.08;
        setResult(`Estimated Casein: <strong>${caseinPercent.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Casein Estimation (Titration Method)" description="Calculate casein content by titrating the filtrate of milk coagulated with acetic acid.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Sample Titre Value (ml)</Label><Input type="number" value={sampleTitre} onChange={e => setSampleTitre(e.target.value)} placeholder="e.g., 2.5" /></div>
                <div><Label>Blank Titre Value (ml)</Label><Input type="number" value={blankTitre} onChange={e => setBlankTitre(e.target.value)} placeholder="e.g., 0.4" /></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Casein %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}

function CaseinFromProteinCalc() {
    const [protein, setProtein] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        const p = parseFloat(protein);
        if (isNaN(p)) {
            setResult("Please enter a valid protein percentage.");
            return;
        }
        // On average, casein is about 78-82% of total protein in cow's milk. Using a factor of 0.8.
        const caseinPercent = p * 0.8;
        setResult(`Estimated Casein: <strong>~${caseinPercent.toFixed(2)}%</strong>`);
    };

    return (
        <CalculatorCard title="Casein Estimation from Total Protein" description="Quickly estimate casein content if you already know the total protein percentage of the milk.">
            <div><Label>Total Protein %</Label><Input type="number" value={protein} onChange={e => setProtein(e.target.value)} placeholder="e.g., 3.4" /></div>
            <Button onClick={calculate} className="w-full mt-4">Estimate Casein %</Button>
            {result && <Alert className="mt-4"><AlertDescription className="text-lg font-bold text-center" dangerouslySetInnerHTML={{ __html: result }} /></Alert>}
        </CalculatorCard>
    );
}


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

function YieldsCalc() {
    return (
         <Tabs defaultValue="cream-sep" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                <TabsTrigger value="cream-sep">Cream Separation</TabsTrigger>
                <TabsTrigger value="butter">Butter Yield</TabsTrigger>
                <TabsTrigger value="khoa">Khoa Yield</TabsTrigger>
                <TabsTrigger value="shrikhand">Shrikhand Yield</TabsTrigger>
                <TabsTrigger value="pedha">Pedha/Burfi Yield</TabsTrigger>
            </TabsList>
            <TabsContent value="cream-sep" className="pt-4"><CreamSeparationCalc /></TabsContent>
            <TabsContent value="butter" className="pt-4"><ButterYieldCalc /></TabsContent>
            <TabsContent value="khoa" className="pt-4"><KhoaYieldCalc /></TabsContent>
            <TabsContent value="shrikhand" className="pt-4"><ShrikhandYieldCalc /></TabsContent>
            <TabsContent value="pedha" className="pt-4"><PedhaBurfiYieldCalc /></TabsContent>
        </Tabs>
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
         <Tabs defaultValue="mix-comp" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="mix-comp">Mix Composition</TabsTrigger>
                <TabsTrigger value="batch-scaling">Batch Scaling</TabsTrigger>
                <TabsTrigger value="overrun">Overrun</TabsTrigger>
                <TabsTrigger value="freezing-point">Freezing Point</TabsTrigger>
            </TabsList>
            <TabsContent value="mix-comp" className="pt-4"><MixCompositionCalc /></TabsContent>
            <TabsContent value="batch-scaling" className="pt-4"><BatchScalingCalc /></TabsContent>
            <TabsContent value="overrun" className="pt-4"><OverrunCalc /></TabsContent>
            <TabsContent value="freezing-point" className="pt-4"><FreezingPointCalc /></TabsContent>
        </Tabs>
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
        <CalculatorCard title="Batch Scaling Calculator (Industrial)">
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
                    <AlertTitle>Ingredients for {finalBatchSize} kg Batch</AlertTitle>
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

