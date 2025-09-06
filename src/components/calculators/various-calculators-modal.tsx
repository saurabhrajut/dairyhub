

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
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


type CalculatorType = 'acidity' | 'fat-dry' | 'gravimetric' | 'formulas' | 'cip-strength' | 'protein-casein' | 'minerals' | 'cream' | 'pricing' | 'rm-pv' | 'peroxide-value' | 'salt-percent' | 'ffa-percent' | 'oil-percent';

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
                    <DialogTitle className="text-3xl font-bold text-center font-headline">Lab Calculations</DialogTitle>
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

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 rounded-xl shadow-sm border mt-4">
        <h3 className="text-xl font-bold text-primary mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);


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


function ProductAcidityCalc() {
    const [inputs, setInputs] = useState({ milkQty: "100", initialAcidity: "0.14", targetAcidity: "0.13" });
    const [results, setResults] = useState<{ naoh: string, na2co3: string, nahco3: string } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    };
    
    const calculate = () => {
        const qty = parseFloat(inputs.milkQty);
        const initial = parseFloat(inputs.initialAcidity);
        const target = parseFloat(inputs.targetAcidity);

        if(isNaN(qty) || isNaN(initial) || isNaN(target) || qty <= 0 || initial <= 0 || target <= 0) {
            alert("Please enter valid positive numbers for all fields.");
            return;
        }

        if (initial <= target) {
            alert("Initial acidity must be higher than the target acidity.");
            return;
        }

        const acidityToNeutralize = initial - target;
        const totalLacticAcidKg = (acidityToNeutralize / 100) * qty;

        // Molecular weights: Lactic Acid (LA) = 90.08, NaOH = 40.00, Na2CO3 = 105.99, NaHCO3 = 84.01
        // Reactions:
        // LA + NaOH -> Na-Lactate + H2O (1:1 molar)
        // 2LA + Na2CO3 -> 2Na-Lactate + H2CO3 (2:1 molar)
        // LA + NaHCO3 -> Na-Lactate + H2CO3 (1:1 molar)

        const molesLA = (totalLacticAcidKg * 1000) / 90.08;

        const gramsNaOH = molesLA * 40.00;
        const gramsNa2CO3 = (molesLA / 2) * 105.99;
        const gramsNaHCO3 = molesLA * 84.01;
        
        setResults({
            naoh: gramsNaOH.toFixed(2),
            na2co3: gramsNa2CO3.toFixed(2),
            nahco3: gramsNaHCO3.toFixed(2),
        });
    }


    return (
        <CalculatorCard title="Acidity Maintenance Calculator" description="Calculate the amount of neutralizer needed to decrease the acidity of milk.">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><Label>Milk Quantity (kg)</Label><Input name="milkQty" value={inputs.milkQty} onChange={handleInputChange}/></div>
                <div><Label>Initial Acidity (% Lactic Acid)</Label><Input name="initialAcidity" value={inputs.initialAcidity} onChange={handleInputChange}/></div>
                <div><Label>Target Acidity (% Lactic Acid)</Label><Input name="targetAcidity" value={inputs.targetAcidity} onChange={handleInputChange}/></div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Neutralizer</Button>
            {results && (
                <Alert className="mt-4">
                    <AlertTitle>Required Neutralizer (in grams)</AlertTitle>
                    <AlertDescription>
                        <Table>
                            <TableBody>
                                <TableRow><TableCell>Sodium Hydroxide (NaOH)</TableCell><TableCell className="text-right font-bold text-lg">{results.naoh} g</TableCell></TableRow>
                                <TableRow><TableCell>Sodium Carbonate (Na₂CO₃)</TableCell><TableCell className="text-right font-bold text-lg">{results.na2co3} g</TableCell></TableRow>
                                <TableRow><TableCell>Sodium Bicarbonate (NaHCO₃)</TableCell><TableCell className="text-right font-bold text-lg">{results.nahco3} g</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    )
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
