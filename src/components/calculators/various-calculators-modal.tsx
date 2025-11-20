
"use client";

import { useState, memo, useCallback, useEffect, useMemo } from "react"
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
import { componentProps, chemicals } from "@/lib/data";
import { getSnf } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { CheckCircle, PlusCircle, XCircle, Beaker, Thermometer, Weight, Percent, Scaling, Combine, Calculator, FlaskConical, ArrowLeft, RotateCw, Dna, Atom, Droplet, DollarSign, Microscope, Recycle, Bug, ShieldCheck, FileSpreadsheet, Search, Wind, Factory, Flask, TrendingUp, TrendingDown, Info, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QRCodeSVG } from 'qrcode.react';

// ===== TYPES =====
type CalculatorType = 'acidity' | 'fat-dry' | 'gravimetric' | 'formulas' | 'cip-strength' | 'protein-casein' | 'minerals' | 'cream' | 'pricing' | 'rm-pv' | 'peroxide-value' | 'salt-percent' | 'ffa-percent' | 'oil-percent';
type ProductType = 'milk' | 'cream' | 'dahi' | 'butter' | 'other';
type UnitType = 'kg' | 'liters';

interface VerificationData {
  hash: string;
  timestamp: number;
  standardsReference: string;
  calculationSteps: string[];
}

// ===== CONSTANTS =====
const DAIRY_STANDARDS = {
  LACTIC_EQUIVALENT: 0.009,
  LACTIC_ACID_MW: 90.08,
  CITRIC_ACID_MW: 192.12,
  CITRIC_N_FACTOR: 3,
  NAOH_MW: 40.00,
  NA2CO3_MW: 105.99,
  NAHCO3_MW: 84.01,
  MILK_SG: 1.03,
  MAX_ACIDITY: {
    milk: 0.16,
    cream: 0.20,
    dahi: 1.0,
    butter: 0.30,
    other: 0.20
  }
};

const calculatorsInfo = {
    'pricing': { 
        title: "Milk Pricing", 
        icon: DollarSign, 
        component: MilkPricingCalculators,
        color: "from-emerald-500 to-green-600" 
    },
    'rm-pv': { 
        title: "RM & Polenske Value", 
        icon: FlaskConical, 
        component: RMPVCalc,
        color: "from-orange-400 to-red-500" 
    },
    'ffa-percent': { 
        title: "FFA % & Acid Value", 
        icon: FlaskConical, 
        component: FfaPercentCalc,
        color: "from-yellow-400 to-orange-500" 
    },
    'peroxide-value': { 
        title: "Peroxide Value", 
        icon: FlaskConical, 
        component: PeroxideValueCalc,
        color: "from-red-500 to-rose-600" 
    },
    'salt-percent': { 
        title: "Salt %", 
        icon: FlaskConical, 
        component: SaltPercentCalc,
        color: "from-cyan-400 to-blue-500" 
    },
    'oil-percent': { 
        title: "Oil % (Soxhlet)", 
        icon: FlaskConical, 
        component: OilPercentCalc,
        color: "from-amber-400 to-yellow-500" 
    },
    'acidity': { 
        title: "Acidity", 
        icon: Beaker, 
        component: ProductAcidityCalc,
        color: "from-lime-500 to-green-600" 
    },
    'protein-casein': { 
        title: "Protein & Casein", 
        icon: Dna, 
        component: ProteinCaseinCalc,
        color: "from-violet-500 to-purple-600" 
    },
    'minerals': { 
        title: "Minerals (Na/K)", 
        icon: Atom, 
        component: MineralAnalysisCalc,
        color: "from-indigo-500 to-blue-600" 
    },
    'cream': { 
        title: "Cream", 
        icon: Droplet, 
        component: CreamCalculators,
        color: "from-sky-400 to-blue-500" 
    },
    'gravimetric': { 
        title: "Gravimetric Analysis", 
        icon: Weight, 
        component: GravimetricAnalysisCalc,
        color: "from-slate-500 to-gray-600" 
    },
    'cip-strength': { 
        title: "CIP Strength", 
        icon: RotateCw, 
        component: SolutionStrengthCalc,
        color: "from-teal-400 to-emerald-500" 
    },
    'formulas': { 
        title: "Common Formulas", 
        icon: Calculator, 
        component: FormulasTab,
        color: "from-blue-600 to-indigo-700" 
    },
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
      setActiveCalculator(null);
    }
    setIsOpen(open);
  };
  
  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        {activeCalculator && ActiveCalculatorComponent ? (
            <>
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
                     <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                        <ArrowLeft className="h-5 w-5" />
                     </Button>
                     <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-sm", calculatorsInfo[activeCalculator].color)}>
                            {(() => {
                                const Icon = calculatorsInfo[activeCalculator].icon;
                                return <Icon className="h-5 w-5" />;
                            })()}
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold font-headline">{calculatorsInfo[activeCalculator].title}</DialogTitle>
                            <DialogDescription>Calculate specific dairy parameters.</DialogDescription>
                        </div>
                     </div>
                </DialogHeader>
                <ScrollArea className="h-full mt-4 pr-4 w-full">
                    <div className="p-4 sm:p-0 px-1">
                      <ActiveCalculatorComponent />
                    </div>
                </ScrollArea>
            </>
        ) : (
            <>
                <DialogHeader className="p-4 sm:p-0">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                            <FlaskConical className="h-8 w-8 text-blue-600" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-center font-headline">Lab Calculations</DialogTitle>
                    <DialogDescription className="text-center">Choose a specific analysis tool below.</DialogDescription>
                </DialogHeader>
                
                <ScrollArea className="h-full mt-4 pr-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                       {Object.entries(calculatorsInfo).map(([key, { title, icon: Icon, color }]) => (
                            <button 
                                key={key} 
                                onClick={() => setActiveCalculator(key as CalculatorType)}
                                className="group relative flex flex-col items-center justify-center p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center aspect-square transition-all duration-300 transform hover:scale-105"
                            >
                                <div className={cn(
                                    "p-4 rounded-full bg-gradient-to-br text-white mb-3 shadow-md transition-transform group-hover:scale-110", 
                                    color
                                )}>
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                </div>
                                <span className="font-bold text-sm sm:text-base font-headline text-slate-700 group-hover:text-primary transition-colors">
                                    {title}
                                </span>
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
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-slate-100 mt-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-slate-500 mb-4">{description}</p>}
        {children}
    </div>
);

// ===== 🎨 ADVANCED ACIDITY CALCULATOR =====
function ProductAcidityCalc() {
    const [activeCalc, setActiveCalc] = useState('check');

    const renderCalculator = () => {
        switch (activeCalc) {
            case 'maintenance':
                return <AcidityMaintenanceCalc />;
            case 'increase':
                return <IncreaseAcidityCalc />;
            case 'check':
            default:
                return <AcidityCheckCalc />;
        }
    };

    return (
        <CalculatorCard title="🧪 Advanced Acidity Calculators" description="Precise dairy product acidity analysis with step-by-step verification">
            <div className="mb-6">
                <Label className="text-base font-semibold mb-3 block">Select Calculator Type</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                        onClick={() => setActiveCalc('check')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'check'
                                ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                    >
                        <Flask className={`mx-auto mb-2 ${activeCalc === 'check' ? 'text-blue-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'check' ? 'text-blue-700' : 'text-gray-700'}`}>
                            Check Acidity
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Measure current acidity</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('maintenance')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'maintenance'
                                ? 'border-green-500 bg-green-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                        }`}
                    >
                        <TrendingDown className={`mx-auto mb-2 ${activeCalc === 'maintenance' ? 'text-green-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'maintenance' ? 'text-green-700' : 'text-gray-700'}`}>
                            Decrease Acidity
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Calculate neutralizer</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('increase')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'increase'
                                ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                        }`}
                    >
                        <TrendingUp className={`mx-auto mb-2 ${activeCalc === 'increase' ? 'text-purple-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'increase' ? 'text-purple-700' : 'text-gray-700'}`}>
                            Increase Acidity
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Calculate acid required</div>
                    </button>
                </div>
            </div>
            {renderCalculator()}
        </CalculatorCard>
    );
}

const productSampleWeights: Record<string, string> = {
    'milk': '10.0',
    'cream': '10.0',
    'dahi': '10.0',
    'butter': '10.0',
    'other': ''
};

const productColors: Record<string, { bg: string; border: string; text: string }> = {
    'milk': { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700' },
    'cream': { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-700' },
    'dahi': { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-700' },
    'butter': { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700' },
    'other': { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-700' }
};

// ===== ACIDITY CHECK CALCULATOR =====
function AcidityCheckCalc() {
    const { toast } = useToast();
    const [productType, setProductType] = useState<ProductType>('milk');
    const [inputs, setInputs] = useState({
        sampleWeight: productSampleWeights.milk,
        titreValue: '',
        naohNormality: '0.1'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleProductChange = (value: string) => {
        setProductType(value as ProductType);
        setInputs(prev => ({...prev, sampleWeight: productSampleWeights[value] || ''}));
        setResult(null);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculateAcidity = () => {
        const W = parseFloat(inputs.sampleWeight);
        const V = parseFloat(inputs.titreValue);
        const N = parseFloat(inputs.naohNormality);
        
        if (isNaN(W) || isNaN(V) || isNaN(N) || W <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const acidity = (9 * V * N) / W;
            const acidityPrecise = parseFloat(acidity.toFixed(4));
            
            const step1 = V * N;
            const step2 = step1 * 9;
            const step3 = step2 / W;
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (productType === 'milk') {
                if (acidityPrecise >= 0.13 && acidityPrecise <= 0.16) {
                    quality = 'Fresh Milk - Excellent Quality';
                    qualityColor = 'text-green-600';
                    qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                } else if (acidityPrecise < 0.13) {
                    quality = 'Low Acidity - Check for Adulteration';
                    qualityColor = 'text-yellow-600';
                    qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                } else {
                    quality = 'High Acidity - Milk is Deteriorating';
                    qualityColor = 'text-red-600';
                    qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                }
            }
            
            setResult({
                acidity: acidityPrecise,
                quality,
                qualityColor,
                qualityIcon,
                steps: {
                    step1: step1.toFixed(4),
                    step2: step2.toFixed(4),
                    step3: step3.toFixed(4)
                },
                inputs: { W, V, N }
            });
            setIsCalculating(false);
        }, 500);
    };
    
    const colors = productColors[productType];
    
    return (
        <div className="space-y-6">
            <div className={`p-4 rounded-lg border-2 ${colors.border} ${colors.bg} transition-all duration-300`}>
                <div className="flex items-center gap-2 mb-4">
                    <Info size={20} className={colors.text} />
                    <span className={`font-semibold ${colors.text}`}>
                        Testing: {productType.charAt(0).toUpperCase() + productType.slice(1)}
                    </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Select Product Type</Label>
                        <Select value={productType} onValueChange={handleProductChange}>
                            <SelectTrigger className="h-12 text-base">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="milk">🥛 Milk</SelectItem>
                                <SelectItem value="cream">🍦 Cream</SelectItem>
                                <SelectItem value="dahi">🥣 Dahi / Yoghurt</SelectItem>
                                <SelectItem value="butter">🧈 Butter</SelectItem>
                                <SelectItem value="other">📦 Other Product</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (grams)
                            <span className="text-xs text-gray-500 ml-2">Standard: 10.0g</span>
                        </Label>
                        <Input 
                            name="sampleWeight" 
                            value={inputs.sampleWeight} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            type="number"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Titre Value (ml of NaOH)
                            <span className="text-xs text-gray-500 ml-2">Burette reading</span>
                        </Label>
                        <Input 
                            name="titreValue" 
                            value={inputs.titreValue} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            type="number"
                            step="0.01"
                            placeholder="e.g., 1.4"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Normality of NaOH (N)
                            <span className="text-xs text-gray-500 ml-2">Standard: 0.1N</span>
                        </Label>
                        <Input 
                            name="naohNormality" 
                            value={inputs.naohNormality} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            type="number"
                            step="0.01"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculateAcidity} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Calculator className="mr-2" size={24} />
                        Calculate Acidity
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-blue-900 mb-4">
                            📊 Calculation Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Acidity Level</div>
                                    <div className="text-5xl font-bold text-blue-600 mb-2">
                                        {result.acidity}%
                                    </div>
                                    <div className="text-sm text-gray-500">Lactic Acid Equivalent</div>
                                </div>
                            </div>
                            
                            {result.quality && (
                                <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                    <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                        {result.qualityIcon}
                                        {result.quality}
                                    </div>
                                </div>
                            )}
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Step-by-Step Verification
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Calculation Breakdown (IS:11766 Method)
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Given:</strong>
                                        </div>
                                        <div>Sample Weight (W) = <span className="text-blue-600 font-bold">{result.inputs.W} g</span></div>
                                        <div>Titre Value (V) = <span className="text-blue-600 font-bold">{result.inputs.V} ml</span></div>
                                        <div>NaOH Normality (N) = <span className="text-blue-600 font-bold">{result.inputs.N} N</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> Acidity (%) = (9 × V × N) / W
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> V × N = {result.inputs.V} × {result.inputs.N} = <span className="text-green-600 font-bold">{result.steps.step1}</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Result × 9 = {result.steps.step1} × 9 = <span className="text-green-600 font-bold">{result.steps.step2}</span>
                                        </div>
                                        <div>
                                            <strong>Step 3:</strong> Result ÷ W = {result.steps.step2} ÷ {result.inputs.W} = <span className="text-green-600 font-bold">{result.steps.step3}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg border-2 border-blue-400">
                                        <div className="text-center">
                                            <div className="text-gray-700 font-sans">
                                                <strong>Final Answer:</strong>
                                            </div>
                                            <div className="text-3xl font-bold text-blue-600 mt-2">
                                                {result.acidity}% Lactic Acid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== ACIDITY MAINTENANCE CALCULATOR =====
function AcidityMaintenanceCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({ milkQty: "100", initialAcidity: "0.14", targetAcidity: "0.13" });
    const [milkUnit, setMilkUnit] = useState<UnitType>('kg');
    const [results, setResults] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
        setResults(null);
    };
    
    const calculate = () => {
        const qtyValue = parseFloat(inputs.milkQty);
        const qtyInKg = milkUnit === 'liters' ? qtyValue * 1.03 : qtyValue;
        const initial = parseFloat(inputs.initialAcidity);
        const target = parseFloat(inputs.targetAcidity);

        if(isNaN(qtyInKg) || isNaN(initial) || isNaN(target) || qtyInKg <= 0 || initial < 0 || target < 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        if (initial <= target) {
            toast({
                title: "⚠️ Invalid Range",
                description: "Initial acidity must be higher than the target acidity.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const acidityToNeutralizePercent = initial - target;
            const totalLacticAcidGrams = (acidityToNeutralizePercent / 100) * qtyInKg * 1000;
            
            const MM_LACTIC_ACID = 90.08;
            const MM_NAOH = 40.00;
            const MM_NA2CO3 = 105.99;
            const MM_NAHCO3 = 84.01;

            const molesLacticAcid = totalLacticAcidGrams / MM_LACTIC_ACID;
            const molesNaOH = molesLacticAcid;
            const gramsNaOH = molesNaOH * MM_NAOH;
            const molesNa2CO3 = molesLacticAcid / 2;
            const gramsNa2CO3 = molesNa2CO3 * MM_NA2CO3;
            const molesNaHCO3 = molesLacticAcid;
            const gramsNaHCO3 = molesNaHCO3 * MM_NAHCO3;

            setResults({
                naoh: gramsNaOH.toFixed(3),
                na2co3: gramsNa2CO3.toFixed(3),
                nahco3: gramsNaHCO3.toFixed(3),
                calculations: {
                    qtyInKg: qtyInKg.toFixed(2),
                    acidityDiff: acidityToNeutralizePercent.toFixed(4),
                    lacticAcidGrams: totalLacticAcidGrams.toFixed(4),
                    molesLactic: molesLacticAcid.toFixed(6)
                }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300">
                <div className="flex items-center gap-2 mb-4">
                    <TrendingDown size={20} className="text-green-600" />
                    <span className="font-semibold text-green-700">Acidity Reduction Calculator</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Milk Quantity</Label>
                        <div className="flex gap-2">
                            <Input 
                                name="milkQty" 
                                value={inputs.milkQty} 
                                onChange={handleInputChange} 
                                className="h-12 text-base font-mono flex-1"
                                type="number"
                                step="0.1"
                            />
                            <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as UnitType)}>
                                <SelectTrigger className="w-[120px] h-12">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="kg">Kilograms</SelectItem>
                                    <SelectItem value="liters">Liters</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                            {milkUnit === 'liters' && `≈ ${(parseFloat(inputs.milkQty || '0') * 1.03).toFixed(2)} kg`}
                        </div>
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Initial Acidity (% Lactic Acid)
                            <span className="text-xs text-gray-500 ml-2">Current level</span>
                        </Label>
                        <Input 
                            name="initialAcidity" 
                            value={inputs.initialAcidity} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            type="number"
                            step="0.01"
                        />
                    </div>
                    
                    <div className="md:col-span-2">
                        <Label className="text-sm font-semibold mb-2 block">
                            Target Acidity (% Lactic Acid)
                            <span className="text-xs text-gray-500 ml-2">Desired level</span>
                        </Label>
                        <Input 
                            name="targetAcidity" 
                            value={inputs.targetAcidity} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            type="number"
                            step="0.01"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Flask className="mr-2" size={24} />
                        Calculate Neutralizer Required
                    </>
                )}
            </Button>

            {results && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-green-900 mb-4">
                            🧪 Required Neutralizers
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white rounded-lg border-2 border-green-200 overflow-hidden">
                                <Table>
                                    <TableBody>
                                        <TableRow className="hover:bg-blue-50">
                                            <TableCell className="font-semibold">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                                    Sodium Hydroxide
                                                </div>
                                                <div className="text-xs text-gray-500 ml-5">NaOH (Caustic Soda)</div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="text-2xl font-bold text-blue-600">{results.naoh}</div>
                                                <div className="text-sm text-gray-500">grams</div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="hover:bg-green-50">
                                            <TableCell className="font-semibold">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                    Sodium Carbonate
                                                </div>
                                                <div className="text-xs text-gray-500 ml-5">Na₂CO₃ (Washing Soda)</div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="text-2xl font-bold text-green-600">{results.na2co3}</div>
                                                <div className="text-sm text-gray-500">grams</div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="hover:bg-yellow-50">
                                            <TableCell className="font-semibold">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    Sodium Bicarbonate
                                                </div>
                                                <div className="text-xs text-gray-500 ml-5">NaHCO₃ (Baking Soda)</div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="text-2xl font-bold text-yellow-600">{results.nahco3}</div>
                                                <div className="text-sm text-gray-500">grams</div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            
                            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-yellow-800">
                                        <strong>Important:</strong> Use only ONE neutralizer. Values shown are alternatives, not additions. Always verify pH after neutralization.
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculations
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4">
                                        🔬 Stoichiometric Calculations
                                    </div>
                                    
                                    <div className="space-y-3 pl-4 border-l-4 border-blue-400">
                                        <div><strong>Milk Quantity:</strong> {results.calculations.qtyInKg} kg</div>
                                        <div><strong>Acidity Reduction:</strong> {results.calculations.acidityDiff}%</div>
                                        <div><strong>Lactic Acid to Neutralize:</strong> {results.calculations.lacticAcidGrams} g</div>
                                        <div><strong>Moles of Lactic Acid:</strong> {results.calculations.molesLactic} mol</div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300"></div>
                                    
                                    <div className="space-y-2 text-xs">
                                        <div className="font-sans font-semibold text-gray-700">Reactions:</div>
                                        <div className="bg-blue-50 p-2 rounded">C₃H₆O₃ + NaOH → C₃H₅O₃Na + H₂O (1:1)</div>
                                        <div className="bg-green-50 p-2 rounded">2C₃H₆O₃ + Na₂CO₃ → 2C₃H₅O₃Na + H₂O + CO₂ (2:1)</div>
                                        <div className="bg-yellow-50 p-2 rounded">C₃H₆O₃ + NaHCO₃ → C₃H₅O₃Na + H₂O + CO₂ (1:1)</div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== INCREASE ACIDITY CALCULATOR =====
function IncreaseAcidityCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({ milkQty: "100", initialAcidity: "0.14", targetAcidity: "0.18" });
    const [milkUnit, setMilkUnit] = useState<UnitType>('kg');
    const [results, setResults] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
        setResults(null);
    };
    
    const calculate = () => {
        const qtyValue = parseFloat(inputs.milkQty);
        const qtyInKg = milkUnit === 'liters' ? qtyValue * 1.03 : qtyValue;
        const initial = parseFloat(inputs.initialAcidity);
        const target = parseFloat(inputs.targetAcidity);

        if(isNaN(qtyInKg) || isNaN(initial) || isNaN(target) || qtyInKg <= 0 || initial < 0 || target <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        if (target <= initial) {
            toast({
                title: "⚠️ Invalid Range",
                description: "Target acidity must be higher than the initial acidity.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const acidityToIncreasePercent = target - initial;
            const gramsLacticAcidEquivalent = (acidityToIncreasePercent / 100) * qtyInKg * 1000;
            
            const MM_LACTIC = 90.08;
            const MM_CITRIC = 192.12;
            const N_FACTOR_LACTIC = 1;
            const N_FACTOR_CITRIC = 3;
            const EQ_WT_LACTIC = MM_LACTIC / N_FACTOR_LACTIC;
            const EQ_WT_CITRIC = MM_CITRIC / N_FACTOR_CITRIC;
            const gramsCitricAcid = gramsLacticAcidEquivalent * (EQ_WT_CITRIC / EQ_WT_LACTIC);

            setResults({
                lactic: gramsLacticAcidEquivalent.toFixed(3),
                citric: gramsCitricAcid.toFixed(3),
                calculations: {
                    qtyInKg: qtyInKg.toFixed(2),
                    acidityIncrease: acidityToIncreasePercent.toFixed(4),
                    eqWtRatio: (EQ_WT_CITRIC / EQ_WT_LACTIC).toFixed(4)
                }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-300">
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={20} className="text-purple-600" />
                    <span className="font-semibold text-purple-700">Acidity Enhancement Calculator</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Milk Quantity</Label>
                        <div className="flex gap-2">
                            <Input 
                                name="milkQty" 
                                value={inputs.milkQty} 
                                onChange={handleInputChange} 
                                className="h-12 text-base font-mono flex-1"
                                type="number"
                                step="0.1"
                            />
                            <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as UnitType)}>
                                <SelectTrigger className="w-[120px] h-12">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="kg">Kilograms</SelectItem>
                                    <SelectItem value="liters">Liters</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                            {milkUnit === 'liters' && `≈ ${(parseFloat(inputs.milkQty || '0') * 1.03).toFixed(2)} kg`}
                        </div>
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Initial Acidity (% Lactic Acid)
                            <span className="text-xs text-gray-500 ml-2">Current level</span>
                        </Label>
                        <Input 
                            name="initialAcidity" 
                            value={inputs.initialAcidity} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            type="number"
                            step="0.01"
                        />
                    </div>
                    
                    <div className="md:col-span-2">
                        <Label className="text-sm font-semibold mb-2 block">
                            Target Acidity (% Lactic Acid)
                            <span className="text-xs text-gray-500 ml-2">Desired level</span>
                        </Label>
                        <Input 
                            name="targetAcidity" 
                            value={inputs.targetAcidity} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            type="number"
                            step="0.01"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Flask className="mr-2" size={24} />
                        Calculate Acid Required
                    </>
                )}
            </Button>

            {results && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-purple-900 mb-4">
                            🧪 Required Acids
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white rounded-lg border-2 border-purple-200 overflow-hidden">
                                <Table>
                                    <TableBody>
                                        <TableRow className="hover:bg-purple-50">
                                            <TableCell className="font-semibold">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                                    Lactic Acid
                                                </div>
                                                <div className="text-xs text-gray-500 ml-5">C₃H₆O₃ (Direct Method)</div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="text-2xl font-bold text-purple-600">{results.lactic}</div>
                                                <div className="text-sm text-gray-500">grams</div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="hover:bg-pink-50">
                                            <TableCell className="font-semibold">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                                                    Citric Acid
                                                </div>
                                                <div className="text-xs text-gray-500 ml-5">C₆H₈O₇ (Alternative)</div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="text-2xl font-bold text-pink-600">{results.citric}</div>
                                                <div className="text-sm text-gray-500">grams</div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            
                            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-blue-800">
                                        <strong>Note:</strong> Both acids are calculated on equivalent basis. Citric acid is triprotic (3 acidic hydrogens) vs lactic acid which is monoprotic (1 acidic hydrogen).
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculations
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4">
                                        🔬 Equivalent Weight Calculations
                                    </div>
                                    
                                    <div className="space-y-3 pl-4 border-l-4 border-purple-400">
                                        <div><strong>Milk Quantity:</strong> {results.calculations.qtyInKg} kg</div>
                                        <div><strong>Acidity Increase:</strong> {results.calculations.acidityIncrease}%</div>
                                        <div><strong>Lactic Acid Required:</strong> {results.lactic} g</div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-pink-400">
                                        <div className="font-sans font-semibold text-gray-700">Citric Acid Calculation:</div>
                                        <div>Eq. Wt. Lactic Acid = 90.08 / 1 = 90.08</div>
                                        <div>Eq. Wt. Citric Acid = 192.12 / 3 = 64.04</div>
                                        <div>Conversion Ratio = 64.04 / 90.08 = {results.calculations.eqWtRatio}</div>
                                        <div className="bg-pink-50 p-2 rounded mt-2">
                                            <strong>Citric Acid = {results.lactic} × {results.calculations.eqWtRatio} = {results.citric} g</strong>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== VERIFICATION PANEL (Keep as is) =====
function VerificationPanel({ verification }: { verification: VerificationData }) {
    const [showQR, setShowQR] = useState(false);
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mt-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-800">🔒 Verification Report</h3>
                <button 
                    onClick={() => setShowQR(!showQR)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                    {showQR ? '📱 Hide QR' : '📱 Show QR'}
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="text-slate-600"><strong>Verification Hash:</strong></p>
                    <code className="bg-slate-100 p-2 rounded block mt-1 font-mono text-sm break-all">{verification.hash}</code>
                    
                    <p className="text-slate-600 mt-3"><strong>Standards:</strong></p>
                    <p className="text-slate-800">{verification.standardsReference}</p>
                    
                    <p className="text-slate-600 mt-3"><strong>Timestamp:</strong></p>
                    <p className="text-slate-800">{new Date(verification.timestamp).toLocaleString()}</p>
                </div>
                
                {showQR && (
                    <div className="flex justify-center items-center">
                        <QRCodeSVG value={JSON.stringify(verification)} size={150} level="H" />
                    </div>
                )}
            </div>

            <div className="mt-4">
                <p className="text-slate-600 font-medium mb-2">Calculation Steps:</p>
                <ol className="list-decimal list-inside space-y-1 text-slate-700 text-sm">
                    {verification.calculationSteps.map((step: string, i: number) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
// ===== 🧪 PEROXIDE VALUE CALCULATOR =====
function PeroxideValueCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        sampleWeight: '5.0',
        sampleTitre: '',
        blankTitre: '',
        normality: '0.01'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculate = () => {
        const W = parseFloat(inputs.sampleWeight);
        const S = parseFloat(inputs.sampleTitre);
        const B = parseFloat(inputs.blankTitre);
        const N = parseFloat(inputs.normality);
        
        if (isNaN(W) || isNaN(S) || isNaN(B) || isNaN(N) || W <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const pv = ((S - B) * N * 1000) / W;
            const pvPrecise = parseFloat(pv.toFixed(3));
            
            // Quality assessment based on FSSAI standards
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (pvPrecise < 4) {
                quality = 'Fresh & Healthy - Excellent Quality';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (pvPrecise >= 4 && pvPrecise <= 10) {
                quality = 'Acceptable - Safe for Consumption';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Rancid - Unsafe for Consumption';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
            }
            
            const step1 = S - B;
            const step2 = step1 * N;
            const step3 = step2 * 1000;
            const step4 = step3 / W;
            
            setResult({
                pv: pvPrecise,
                quality,
                qualityColor,
                qualityIcon,
                steps: {
                    step1: step1.toFixed(4),
                    step2: step2.toFixed(6),
                    step3: step3.toFixed(4),
                    step4: step4.toFixed(3)
                },
                inputs: { W, S, B, N }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <CalculatorCard 
            title="🧪 Peroxide Value (PV) Calculator" 
            description="Measures oxidative rancidity in fats and oils with FSSAI compliance"
        >
            <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-lg border-2 border-red-300 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <FlaskConical size={20} className="text-red-600" />
                    <span className="font-semibold text-red-700">Oxidative Rancidity Test</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (grams)
                            <span className="text-xs text-gray-500 ml-2">Standard: 5.0g</span>
                        </Label>
                        <Input 
                            name="sampleWeight"
                            type="number" 
                            value={inputs.sampleWeight} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Normality of Na₂S₂O₃
                            <span className="text-xs text-gray-500 ml-2">Sodium Thiosulphate</span>
                        </Label>
                        <Input 
                            name="normality"
                            type="number" 
                            step="0.001" 
                            value={inputs.normality} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Titration (ml)
                            <span className="text-xs text-gray-500 ml-2">Volume S</span>
                        </Label>
                        <Input 
                            name="sampleTitre"
                            type="number" 
                            value={inputs.sampleTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 2.5"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Blank Titration (ml)
                            <span className="text-xs text-gray-500 ml-2">Volume B</span>
                        </Label>
                        <Input 
                            name="blankTitre"
                            type="number" 
                            value={inputs.blankTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 0.2"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <FlaskConical className="mr-2" size={24} />
                        Calculate Peroxide Value
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-red-900 mb-4">
                            📊 Peroxide Value Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Peroxide Value</div>
                                    <div className="text-5xl font-bold text-red-600 mb-2">
                                        {result.pv}
                                    </div>
                                    <div className="text-sm text-gray-500">meq O₂/kg</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-blue-800">
                                        <strong>FSSAI Standard:</strong> PV &lt; 10 meq/kg for refined oils. Values above 10 indicate oxidative rancidity.
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-red-400 hover:bg-red-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Step-by-Step Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Calculation Breakdown (ISO 3960 Method)
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-red-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Sample Weight (W) = <span className="text-red-600 font-bold">{result.inputs.W} g</span></div>
                                        <div>Sample Titre (S) = <span className="text-red-600 font-bold">{result.inputs.S} ml</span></div>
                                        <div>Blank Titre (B) = <span className="text-red-600 font-bold">{result.inputs.B} ml</span></div>
                                        <div>Normality (N) = <span className="text-red-600 font-bold">{result.inputs.N} N</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> PV = [(S - B) × N × 1000] / W
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> S - B = {result.inputs.S} - {result.inputs.B} = <span className="text-green-600 font-bold">{result.steps.step1}</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Result × N = {result.steps.step1} × {result.inputs.N} = <span className="text-green-600 font-bold">{result.steps.step2}</span>
                                        </div>
                                        <div>
                                            <strong>Step 3:</strong> Result × 1000 = {result.steps.step2} × 1000 = <span className="text-green-600 font-bold">{result.steps.step3}</span>
                                        </div>
                                        <div>
                                            <strong>Step 4:</strong> Result ÷ W = {result.steps.step3} ÷ {result.inputs.W} = <span className="text-green-600 font-bold">{result.steps.step4}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-gradient-to-r from-red-100 to-rose-100 p-4 rounded-lg border-2 border-red-400">
                                        <div className="text-center">
                                            <div className="text-gray-700 font-sans"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-red-600 mt-2">
                                                {result.pv} meq O₂/kg
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CalculatorCard>
    );
}

// ===== 🧂 SALT PERCENTAGE CALCULATOR =====
function SaltPercentCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        sampleWeight: '2.0',
        titrantVolume: '',
        normality: '0.1'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculate = () => {
        const W = parseFloat(inputs.sampleWeight);
        const V = parseFloat(inputs.titrantVolume);
        const N = parseFloat(inputs.normality);
        
        if (isNaN(W) || isNaN(V) || isNaN(N) || W <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // Equivalent weight of NaCl = 58.45 / 1 = 58.45 ≈ 58.5
            // But commonly used factor is 5.845 for percentage calculation
            const saltPercent = (5.845 * V * N) / W;
            const saltPrecise = parseFloat(saltPercent.toFixed(3));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            // Butter typically has 1-2% salt
            if (saltPrecise < 1) {
                quality = 'Low Salt Content';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            } else if (saltPrecise >= 1 && saltPrecise <= 2.5) {
                quality = 'Normal Range for Butter';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'High Salt Content';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            const step1 = V * N;
            const step2 = step1 * 5.845;
            const step3 = step2 / W;
            
            setResult({
                saltPercent: saltPrecise,
                quality,
                qualityColor,
                qualityIcon,
                steps: {
                    step1: step1.toFixed(4),
                    step2: step2.toFixed(4),
                    step3: step3.toFixed(3)
                },
                inputs: { W, V, N }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <CalculatorCard 
            title="🧂 Salt Percentage Calculator" 
            description="Calculate salt percentage using AgNO₃ titration method"
        >
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border-2 border-cyan-300 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <Droplet size={20} className="text-cyan-600" />
                    <span className="font-semibold text-cyan-700">Mohr's Method (AgNO₃ Titration)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (grams)
                            <span className="text-xs text-gray-500 ml-2">Standard: 2.0g</span>
                        </Label>
                        <Input 
                            name="sampleWeight"
                            type="number" 
                            value={inputs.sampleWeight} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Volume of AgNO₃ Used (ml)
                            <span className="text-xs text-gray-500 ml-2">Titre value</span>
                        </Label>
                        <Input 
                            name="titrantVolume"
                            type="number" 
                            value={inputs.titrantVolume} 
                            onChange={handleInputChange}
                            placeholder="e.g., 3.5"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Normality of AgNO₃ (N)
                            <span className="text-xs text-gray-500 ml-2">Standard: 0.1N</span>
                        </Label>
                        <Input 
                            name="normality"
                            type="number" 
                            step="0.01" 
                            value={inputs.normality} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Beaker className="mr-2" size={24} />
                        Calculate Salt %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-cyan-900 mb-4">
                            📊 Salt Content Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-cyan-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Salt Percentage</div>
                                    <div className="text-5xl font-bold text-cyan-600 mb-2">
                                        {result.saltPercent}%
                                    </div>
                                    <div className="text-sm text-gray-500">NaCl Content</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-yellow-800">
                                        <strong>Typical Range:</strong> Butter: 1-2%, Cheese: 1.5-4%, Processed Cheese: 2.5-3.5%
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-cyan-400 hover:bg-cyan-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Mohr's Method Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-cyan-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Sample Weight (W) = <span className="text-cyan-600 font-bold">{result.inputs.W} g</span></div>
                                        <div>AgNO₃ Volume (V) = <span className="text-cyan-600 font-bold">{result.inputs.V} ml</span></div>
                                        <div>Normality (N) = <span className="text-cyan-600 font-bold">{result.inputs.N} N</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> Salt % = (5.845 × V × N) / W
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Where 5.845 = (Eq. Wt. of NaCl / 10) = 58.45 / 10
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> V × N = {result.inputs.V} × {result.inputs.N} = <span className="text-green-600 font-bold">{result.steps.step1}</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Result × 5.845 = {result.steps.step1} × 5.845 = <span className="text-green-600 font-bold">{result.steps.step2}</span>
                                        </div>
                                        <div>
                                            <strong>Step 3:</strong> Result ÷ W = {result.steps.step2} ÷ {result.inputs.W} = <span className="text-green-600 font-bold">{result.steps.step3}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-blue-50 p-2 rounded text-xs">
                                        <strong>Reaction:</strong> NaCl + AgNO₃ → AgCl↓ + NaNO₃
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-lg border-2 border-cyan-400">
                                        <div className="text-center">
                                            <div className="text-gray-700 font-sans"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-cyan-600 mt-2">
                                                {result.saltPercent}% NaCl
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CalculatorCard>
    );
}

// ===== 🧴 FREE FATTY ACID (FFA) CALCULATOR =====
function FfaPercentCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        sampleWeight: '15.0',
        titrantVolume: '',
        normality: '0.1'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculate = () => {
        const W = parseFloat(inputs.sampleWeight);
        const V = parseFloat(inputs.titrantVolume);
        const N = parseFloat(inputs.normality);
        
        if (isNaN(W) || isNaN(V) || isNaN(N) || W <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // FFA % as Oleic Acid = (28.2 × V × N) / W
            // Where 28.2 = Molecular weight of Oleic acid / 10 = 282 / 10
            const ffaPercent = (28.2 * V * N) / W;
            const acidValue = ffaPercent * 1.99; // Conversion factor
            const ffaPrecise = parseFloat(ffaPercent.toFixed(3));
            const avPrecise = parseFloat(acidValue.toFixed(3));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            // Quality assessment for dairy products
            if (ffaPrecise < 0.5) {
                quality = 'Fresh - Excellent Quality';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (ffaPrecise >= 0.5 && ffaPrecise <= 1.2) {
                quality = 'Acceptable Quality';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Elevated FFA - Quality Concern';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
            }
            
            const step1 = V * N;
            const step2 = step1 * 28.2;
            const step3 = step2 / W;
            const step4 = step3 * 1.99;
            
            setResult({
                ffa: ffaPrecise,
                acidValue: avPrecise,
                quality,
                qualityColor,
                qualityIcon,
                steps: {
                    step1: step1.toFixed(4),
                    step2: step2.toFixed(4),
                    step3: step3.toFixed(3),
                    step4: step4.toFixed(3)
                },
                inputs: { W, V, N }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <CalculatorCard 
            title="🧴 Free Fatty Acid (FFA) % Calculator" 
            description="Calculate FFA as oleic acid and corresponding acid value"
        >
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-2 border-yellow-300 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <FlaskConical size={20} className="text-yellow-600" />
                    <span className="font-semibold text-yellow-700">Lipolytic Rancidity Test</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (grams)
                            <span className="text-xs text-gray-500 ml-2">Standard: 15.0g</span>
                        </Label>
                        <Input 
                            name="sampleWeight"
                            type="number" 
                            value={inputs.sampleWeight} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Volume of NaOH Used (ml)
                            <span className="text-xs text-gray-500 ml-2">Titre value</span>
                        </Label>
                        <Input 
                            name="titrantVolume"
                            type="number" 
                            value={inputs.titrantVolume} 
                            onChange={handleInputChange}
                            placeholder="e.g., 0.5"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Normality of NaOH (N)
                            <span className="text-xs text-gray-500 ml-2">Standard: 0.1N</span>
                        </Label>
                        <Input 
                            name="normality"
                            type="number" 
                            step="0.01" 
                            value={inputs.normality} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-700 hover:from-yellow-700 hover:to-orange-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <FlaskConical className="mr-2" size={24} />
                        Calculate FFA %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-yellow-900 mb-4">
                            📊 FFA Analysis Results
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-lg border-2 border-yellow-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">FFA (as Oleic Acid)</div>
                                        <div className="text-4xl font-bold text-yellow-600 mb-2">
                                            {result.ffa}%
                                        </div>
                                        <div className="text-xs text-gray-500">Free Fatty Acid</div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg border-2 border-orange-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Acid Value</div>
                                        <div className="text-4xl font-bold text-orange-600 mb-2">
                                            {result.acidValue}
                                        </div>
                                        <div className="text-xs text-gray-500">mg KOH/g</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-blue-800">
                                        <strong>Dairy Standards:</strong> FFA &gt; 1.2 mmol/100g indicates elevated lipolysis. Acid Value = FFA% × 1.99
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        FFA Calculation (Oleic Acid Basis)
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-yellow-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Sample Weight (W) = <span className="text-yellow-600 font-bold">{result.inputs.W} g</span></div>
                                        <div>NaOH Volume (V) = <span className="text-yellow-600 font-bold">{result.inputs.V} ml</span></div>
                                        <div>Normality (N) = <span className="text-yellow-600 font-bold">{result.inputs.N} N</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>FFA % Formula:</strong> (28.2 × V × N) / W
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Where 28.2 = MW of Oleic Acid / 10 = 282.46 / 10
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> V × N = {result.inputs.V} × {result.inputs.N} = <span className="text-green-600 font-bold">{result.steps.step1}</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Result × 28.2 = {result.steps.step1} × 28.2 = <span className="text-green-600 font-bold">{result.steps.step2}</span>
                                        </div>
                                        <div>
                                            <strong>Step 3:</strong> Result ÷ W = {result.steps.step2} ÷ {result.inputs.W} = <span className="text-green-600 font-bold">{result.steps.step3}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600">
                                            <strong>Acid Value Calculation:</strong>
                                        </div>
                                        <div>
                                            <strong>Step 4:</strong> FFA% × 1.99 = {result.steps.step3} × 1.99 = <span className="text-orange-600 font-bold">{result.steps.step4}</span>
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Conversion factor: 1.99 (relates oleic acid to KOH)
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-yellow-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Results:</strong></div>
                                            <div className="text-2xl font-bold text-yellow-600 mt-2">
                                                FFA: {result.ffa}% | AV: {result.acidValue}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CalculatorCard>
    );
}

// ===== 🫗 OIL PERCENTAGE CALCULATOR (SOXHLET METHOD) =====
function OilPercentCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        w1: '', // Empty thimble
        w2: '', // Thimble + Sample
        w4: '', // Empty RBF
        w5: ''  // RBF + Oil
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculate = () => {
        const numW1 = parseFloat(inputs.w1);
        const numW2 = parseFloat(inputs.w2);
        const numW4 = parseFloat(inputs.w4);
        const numW5 = parseFloat(inputs.w5);

        if ([numW1, numW2, numW4, numW5].some(isNaN)) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for all weights.",
                variant: "destructive"
            });
            return;
        }

        const w3 = numW2 - numW1; // Sample Weight
        const w6 = numW5 - numW4; // Oil Weight

        if (w3 <= 0 || w6 < 0) {
            toast({
                title: "⚠️ Invalid Weights",
                description: "Sample weight must be positive and oil weight cannot be negative.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const fatPercent = (w6 * 100) / w3;
            const fatPrecise = parseFloat(fatPercent.toFixed(3));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            // Quality assessment for dairy products
            if (fatPrecise < 20) {
                quality = 'Low Fat Content';
                qualityColor = 'text-blue-600';
                qualityIcon = <Info className="inline mr-2" size={20} />;
            } else if (fatPrecise >= 20 && fatPrecise <= 40) {
                quality = 'Normal Fat Range';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'High Fat Content';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            setResult({
                fatPercent: fatPrecise,
                sampleWeight: w3.toFixed(3),
                oilWeight: w6.toFixed(3),
                quality,
                qualityColor,
                qualityIcon,
                inputs: { numW1, numW2, numW4, numW5, w3, w6 }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <CalculatorCard 
            title="🫗 Oil/Fat % Calculator (Soxhlet Method)" 
            description="Calculate oil/fat percentage using gravimetric Soxhlet extraction"
        >
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-2 border-amber-300 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <Weight size={20} className="text-amber-600" />
                    <span className="font-semibold text-amber-700">Soxhlet Extraction Method</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Weight of Empty Thimble (W₁)
                            <span className="text-xs text-gray-500 ml-2">Before sample</span>
                        </Label>
                        <Input 
                            name="w1"
                            type="number" 
                            value={inputs.w1} 
                            onChange={handleInputChange}
                            placeholder="e.g., 15.250"
                            className="h-12 text-base font-mono"
                            step="0.001"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Weight of Thimble + Sample (W₂)
                            <span className="text-xs text-gray-500 ml-2">After loading</span>
                        </Label>
                        <Input 
                            name="w2"
                            type="number" 
                            value={inputs.w2} 
                            onChange={handleInputChange}
                            placeholder="e.g., 20.250"
                            className="h-12 text-base font-mono"
                            step="0.001"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Weight of Empty R.B. Flask (W₄)
                            <span className="text-xs text-gray-500 ml-2">Round bottom flask</span>
                        </Label>
                        <Input 
                            name="w4"
                            type="number" 
                            value={inputs.w4} 
                            onChange={handleInputChange}
                            placeholder="e.g., 85.500"
                            className="h-12 text-base font-mono"
                            step="0.001"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Weight of Flask + Extracted Oil (W₅)
                            <span className="text-xs text-gray-500 ml-2">After extraction</span>
                        </Label>
                        <Input 
                            name="w5"
                            type="number" 
                            value={inputs.w5} 
                            onChange={handleInputChange}
                            placeholder="e.g., 86.500"
                            className="h-12 text-base font-mono"
                            step="0.001"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Weight className="mr-2" size={24} />
                        Calculate Oil %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-amber-900 mb-4">
                            📊 Oil/Fat Content Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Oil/Fat Percentage</div>
                                    <div className="text-5xl font-bold text-amber-600 mb-2">
                                        {result.fatPercent}%
                                    </div>
                                    <div className="text-sm text-gray-500">Lipid Content</div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    <div className="text-xs text-gray-600">Sample Weight (W₃)</div>
                                    <div className="text-lg font-bold text-blue-600">{result.sampleWeight} g</div>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                    <div className="text-xs text-gray-600">Extracted Oil (W₆)</div>
                                    <div className="text-lg font-bold text-green-600">{result.oilWeight} g</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>

                            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-purple-800">
                                        <strong>Reference:</strong> Butter: 80-82%, Cheese: 25-35%, Cream: 18-40%, Whole Milk Powder: 26-28%
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-amber-400 hover:bg-amber-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Details
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Gravimetric Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-amber-400">
                                        <div className="text-gray-600"><strong>Given Weights:</strong></div>
                                        <div>Empty Thimble (W₁) = <span className="text-amber-600 font-bold">{result.inputs.numW1} g</span></div>
                                        <div>Thimble + Sample (W₂) = <span className="text-amber-600 font-bold">{result.inputs.numW2} g</span></div>
                                        <div>Empty Flask (W₄) = <span className="text-amber-600 font-bold">{result.inputs.numW4} g</span></div>
                                        <div>Flask + Oil (W₅) = <span className="text-amber-600 font-bold">{result.inputs.numW5} g</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600"><strong>Sample Weight Calculation:</strong></div>
                                        <div>
                                            W₃ = W₂ - W₁ = {result.inputs.numW2} - {result.inputs.numW1} = <span className="text-blue-600 font-bold">{result.sampleWeight} g</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600"><strong>Oil Weight Calculation:</strong></div>
                                        <div>
                                            W₆ = W₅ - W₄ = {result.inputs.numW5} - {result.inputs.numW4} = <span className="text-green-600 font-bold">{result.oilWeight} g</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600">
                                            <strong>Fat % Formula:</strong> (W₆ × 100) / W₃
                                        </div>
                                        <div>
                                            Fat % = ({result.oilWeight} × 100) / {result.sampleWeight}
                                        </div>
                                        <div>
                                            Fat % = <span className="text-purple-600 font-bold">{result.fatPercent}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-4 rounded-lg border-2 border-amber-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-amber-600 mt-2">
                                                {result.fatPercent}% Oil/Fat
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
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

// ===== 🧪 RM & POLENSKE VALUE CALCULATORS =====
function RMPVCalc() {
    const [activeCalc, setActiveCalc] = useState('rm-volume');

    const renderCalculator = () => {
        switch (activeCalc) {
            case 'rm-weight':
                return <RMCalcByWeight />;
            case 'pv':
                return <PVCalc />;
            case 'rm-volume':
            default:
                return <RMCalcByVolume />;
        }
    };

    return (
        <CalculatorCard 
            title="🧪 RM & Polenske Value Calculators" 
            description="Analyze volatile fatty acids for ghee and butter quality assessment"
        >
            <div className="mb-6">
                <Label className="text-base font-semibold mb-3 block">Select Calculator Type</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                        onClick={() => setActiveCalc('rm-volume')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'rm-volume'
                                ? 'border-orange-500 bg-orange-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                        }`}
                    >
                        <FlaskConical className={`mx-auto mb-2 ${activeCalc === 'rm-volume' ? 'text-orange-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'rm-volume' ? 'text-orange-700' : 'text-gray-700'}`}>
                            RM Value (Volume)
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Standard method</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('rm-weight')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'rm-weight'
                                ? 'border-amber-500 bg-amber-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                        }`}
                    >
                        <Weight className={`mx-auto mb-2 ${activeCalc === 'rm-weight' ? 'text-amber-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'rm-weight' ? 'text-amber-700' : 'text-gray-700'}`}>
                            RM Value (Weight)
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Adjusted method</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('pv')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'pv'
                                ? 'border-rose-500 bg-rose-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-rose-300 hover:bg-gray-50'
                        }`}
                    >
                        <Beaker className={`mx-auto mb-2 ${activeCalc === 'pv' ? 'text-rose-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'pv' ? 'text-rose-700' : 'text-gray-700'}`}>
                            Polenske Value
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Insoluble acids</div>
                    </button>
                </div>
            </div>
            {renderCalculator()}
        </CalculatorCard>
    );
}

// ===== RM VALUE BY VOLUME =====
function RMCalcByVolume() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        reading: '',
        blank: '0.2'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculate = () => {
        const r = parseFloat(inputs.reading);
        const b = parseFloat(inputs.blank);
        
        if (isNaN(r) || isNaN(b)) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for reading and blank.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const rmValue = (r - b) * 1.1;
            const rmPrecise = parseFloat(rmValue.toFixed(2));
            
            // Quality assessment based on standards
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let productType = '';
            
            if (rmPrecise >= 28 && rmPrecise <= 35) {
                quality = 'Pure Ghee/Butter - Excellent Quality';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = rmPrecise >= 30 ? 'Buffalo Ghee Range' : 'Cow Ghee Range';
            } else if (rmPrecise >= 24 && rmPrecise < 28) {
                quality = 'Acceptable - May indicate adulteration';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Below Standard';
            } else if (rmPrecise < 24) {
                quality = 'Adulterated - Vegetable oil/fat detected';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
                productType = 'Non-dairy fat present';
            } else {
                quality = 'Unusually High - Verify procedure';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Check for errors';
            }
            
            const step1 = r - b;
            const step2 = step1 * 1.1;
            
            setResult({
                rmValue: rmPrecise,
                quality,
                qualityColor,
                qualityIcon,
                productType,
                steps: {
                    step1: step1.toFixed(3),
                    step2: step2.toFixed(2)
                },
                inputs: { r, b }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-2 border-orange-300">
                <div className="flex items-center gap-2 mb-4">
                    <FlaskConical size={20} className="text-orange-600" />
                    <span className="font-semibold text-orange-700">Reichert-Meissl Value (Standard Method)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Titration Reading (ml)
                            <span className="text-xs text-gray-500 ml-2">Sample reading</span>
                        </Label>
                        <Input 
                            name="reading"
                            type="number" 
                            value={inputs.reading} 
                            onChange={handleInputChange}
                            placeholder="e.g., 28.5"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Blank Reading (ml)
                            <span className="text-xs text-gray-500 ml-2">Standard: 0.2ml</span>
                        </Label>
                        <Input 
                            name="blank"
                            type="number" 
                            value={inputs.blank} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <FlaskConical className="mr-2" size={24} />
                        Calculate RM Value
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-orange-900 mb-4">
                            📊 Reichert-Meissl Value Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-orange-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">RM Value</div>
                                    <div className="text-5xl font-bold text-orange-600 mb-2">
                                        {result.rmValue}
                                    </div>
                                    <div className="text-sm text-gray-500">Water-Soluble Volatile Fatty Acids</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    <strong>Classification:</strong> {result.productType}
                                </div>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-blue-800">
                                        <strong>FSSAI Standards:</strong> RM Value ≥ 28 for ghee. Cow ghee: 26-29, Buffalo ghee: 30-35. Lower values indicate adulteration with vegetable oils.
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-orange-400 hover:bg-orange-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Breakdown
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        RM Value Calculation (FSSAI Method)
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Titration Reading (R) = <span className="text-orange-600 font-bold">{result.inputs.r} ml</span></div>
                                        <div>Blank Reading (B) = <span className="text-orange-600 font-bold">{result.inputs.b} ml</span></div>
                                        <div className="text-xs text-gray-500 mt-2">
                                            Factor: 1.1 (Standardization constant for 5g sample)
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> RM Value = (R - B) × 1.1
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> R - B = {result.inputs.r} - {result.inputs.b} = <span className="text-green-600 font-bold">{result.steps.step1} ml</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Result × 1.1 = {result.steps.step1} × 1.1 = <span className="text-green-600 font-bold">{result.steps.step2}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Standard Ranges:</div>
                                        <div>• Cow Ghee: 26-29</div>
                                        <div>• Buffalo Ghee: 30-35</div>
                                        <div>• Butter: 24-32</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg border-2 border-orange-400">
                                        <div className="text-center">
                                            <div className="text-gray-700 font-sans"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-orange-600 mt-2">
                                                RM Value: {result.rmValue}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== RM VALUE BY WEIGHT =====
function RMCalcByWeight() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        reading: '',
        blank: '0.2',
        weight: '5.0'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculate = () => {
        const r = parseFloat(inputs.reading);
        const b = parseFloat(inputs.blank);
        const w = parseFloat(inputs.weight);
        
        if (isNaN(r) || isNaN(b) || isNaN(w) || w <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const rmValue = ((r - b) * 5.5) / w;
            const rmPrecise = parseFloat(rmValue.toFixed(2));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let productType = '';
            
            if (rmPrecise >= 28 && rmPrecise <= 35) {
                quality = 'Pure Ghee/Butter - Excellent Quality';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = rmPrecise >= 30 ? 'Buffalo Ghee Range' : 'Cow Ghee Range';
            } else if (rmPrecise >= 24 && rmPrecise < 28) {
                quality = 'Acceptable - May indicate adulteration';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Below Standard';
            } else if (rmPrecise < 24) {
                quality = 'Adulterated - Vegetable oil/fat detected';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
                productType = 'Non-dairy fat present';
            } else {
                quality = 'Unusually High - Verify procedure';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Check for errors';
            }
            
            const step1 = r - b;
            const step2 = step1 * 5.5;
            const step3 = step2 / w;
            
            setResult({
                rmValue: rmPrecise,
                quality,
                qualityColor,
                qualityIcon,
                productType,
                steps: {
                    step1: step1.toFixed(3),
                    step2: step2.toFixed(4),
                    step3: step3.toFixed(2)
                },
                inputs: { r, b, w }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-300">
                <div className="flex items-center gap-2 mb-4">
                    <Weight size={20} className="text-amber-600" />
                    <span className="font-semibold text-amber-700">RM Value (Weight-Adjusted Method)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Titration Reading (ml)
                            <span className="text-xs text-gray-500 ml-2">Sample</span>
                        </Label>
                        <Input 
                            name="reading"
                            type="number" 
                            value={inputs.reading} 
                            onChange={handleInputChange}
                            placeholder="e.g., 25.8"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Blank Reading (ml)
                            <span className="text-xs text-gray-500 ml-2">Control</span>
                        </Label>
                        <Input 
                            name="blank"
                            type="number" 
                            value={inputs.blank} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (g)
                            <span className="text-xs text-gray-500 ml-2">Standard: 5.0g</span>
                        </Label>
                        <Input 
                            name="weight"
                            type="number" 
                            value={inputs.weight} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Weight className="mr-2" size={24} />
                        Calculate RM Value
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-amber-900 mb-4">
                            📊 RM Value Result (Weight-Based)
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Reichert-Meissl Value</div>
                                    <div className="text-5xl font-bold text-amber-600 mb-2">
                                        {result.rmValue}
                                    </div>
                                    <div className="text-sm text-gray-500">Adjusted for sample weight</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    <strong>Classification:</strong> {result.productType}
                                </div>
                            </div>

                            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-purple-800">
                                        <strong>Note:</strong> This method adjusts for variations in sample weight. Factor 5.5 = 0.1N NaOH equivalent × 55 (normality × equivalent weight of butyric acid).
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-amber-400 hover:bg-amber-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Weight-Adjusted RM Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-amber-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Titration Reading (R) = <span className="text-amber-600 font-bold">{result.inputs.r} ml</span></div>
                                        <div>Blank Reading (B) = <span className="text-amber-600 font-bold">{result.inputs.b} ml</span></div>
                                        <div>Sample Weight (W) = <span className="text-amber-600 font-bold">{result.inputs.w} g</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> RM Value = [(R - B) × 5.5] / W
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> R - B = {result.inputs.r} - {result.inputs.b} = <span className="text-green-600 font-bold">{result.steps.step1} ml</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Result × 5.5 = {result.steps.step1} × 5.5 = <span className="text-green-600 font-bold">{result.steps.step2}</span>
                                        </div>
                                        <div>
                                            <strong>Step 3:</strong> Result ÷ W = {result.steps.step2} ÷ {result.inputs.w} = <span className="text-green-600 font-bold">{result.steps.step3}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border-2 border-amber-400">
                                        <div className="text-center">
                                            <div className="text-gray-700 font-sans"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-amber-600 mt-2">
                                                RM Value: {result.rmValue}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== POLENSKE VALUE =====
function PVCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        reading: '',
        blank: '0.1'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResult(null);
    };

    const calculate = () => {
        const r = parseFloat(inputs.reading);
        const b = parseFloat(inputs.blank);
        
        if (isNaN(r) || isNaN(b)) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for reading and blank.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const pvValue = r - b;
            const pvPrecise = parseFloat(pvValue.toFixed(2));
            
            // Quality assessment based on standards
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let productType = '';
            
            if (pvPrecise >= 1.2 && pvPrecise <= 2.4) {
                quality = 'Pure Ghee - Excellent Quality';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = pvPrecise >= 1.8 ? 'Cow Ghee Range' : 'Buffalo Ghee Range';
            } else if (pvPrecise >= 0.8 && pvPrecise < 1.2) {
                quality = 'Borderline - Further testing recommended';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Below normal range';
            } else if (pvPrecise < 0.8) {
                quality = 'Adulterated - Likely vegetable oil';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
                productType = 'Non-dairy fat detected';
            } else {
                quality = 'Above Normal - Verify sample';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Unusual reading';
            }
            
            setResult({
                pvValue: pvPrecise,
                quality,
                qualityColor,
                qualityIcon,
                productType,
                inputs: { r, b }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border-2 border-rose-300">
                <div className="flex items-center gap-2 mb-4">
                    <Beaker size={20} className="text-rose-600" />
                    <span className="font-semibold text-rose-700">Polenske Value (Insoluble Fatty Acids)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Titration Reading (ml)
                            <span className="text-xs text-gray-500 ml-2">Sample reading</span>
                        </Label>
                        <Input 
                            name="reading"
                            type="number" 
                            value={inputs.reading} 
                            onChange={handleInputChange}
                            placeholder="e.g., 1.5"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Blank Reading (ml)
                            <span className="text-xs text-gray-500 ml-2">Standard: 0.1ml</span>
                        </Label>
                        <Input 
                            name="blank"
                            type="number" 
                            value={inputs.blank} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Beaker className="mr-2" size={24} />
                        Calculate Polenske Value
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-rose-900 mb-4">
                            📊 Polenske Value Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-rose-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Polenske Value</div>
                                    <div className="text-5xl font-bold text-rose-600 mb-2">
                                        {result.pvValue}
                                    </div>
                                    <div className="text-sm text-gray-500">Water-Insoluble Volatile Fatty Acids</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    <strong>Classification:</strong> {result.productType}
                                </div>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-blue-800">
                                        <strong>FSSAI Standards:</strong> PV for pure ghee: 1.2-2.4. Cow ghee: 1.02-2.00, Buffalo ghee: 0.35-1.85. Lower values suggest vegetable oil adulteration.
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-rose-400 hover:bg-rose-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Details
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-3 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Polenske Value Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-rose-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Titration Reading (R) = <span className="text-rose-600 font-bold">{result.inputs.r} ml</span></div>
                                        <div>Blank Reading (B) = <span className="text-rose-600 font-bold">{result.inputs.b} ml</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> PV = R - B
                                        </div>
                                        <div>
                                            <strong>Calculation:</strong> {result.inputs.r} - {result.inputs.b} = <span className="text-green-600 font-bold">{result.pvValue}</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2">
                                            Direct calculation - no multiplication factor needed
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Standard Ranges:</div>
                                        <div>• Cow Ghee: 1.02-2.00</div>
                                        <div>• Buffalo Ghee: 0.35-1.85</div>
                                        <div>• Pure Ghee: 1.2-2.4</div>
                                        <div>• Vegetable Oils: &lt; 1.0</div>
                                    </div>
                                    
                                    <div className="bg-pink-50 p-3 rounded text-xs">
                                        <div className="font-sans font-semibold mb-1">What is Polenske Value?</div>
                                        <div className="text-gray-700">
                                            Measures volatile fatty acids insoluble in water (C8-C10 fatty acids). 
                                            Performed after RM value determination on the same sample.
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-4 rounded-lg border-2 border-rose-400">
                                        <div className="text-center">
                                            <div className="text-gray-700 font-sans"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-rose-600 mt-2">
                                                PV: {result.pvValue}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 💰 TWO-AXIS PRICING CALCULATOR =====
function TwoAxisPricingCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        fatPercent: '4.5',
        clr: '28',
        fatRate: '300',
        snfRate: '200'
    });
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

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
        
        // Two-axis pricing formula
        const pricePerKg = ((fat / 100) * fatRate) + ((snf / 100) * snfRate);
        const pricePerLitre = pricePerKg * componentProps.milkDensity;
        
        // Quality assessment based on FSSAI standards
        let milkType = '';
        let quality = '';
        let qualityColor = '';
        let qualityIcon = null;
        
        if (fat >= 6 && snf >= 9) {
            milkType = 'Buffalo Milk';
            quality = 'Premium Quality';
            qualityColor = 'text-green-600';
            qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
        } else if (fat >= 4.5 && snf >= 8.5) {
            milkType = fat >= 5 ? 'Mixed Milk' : 'Cow Milk';
            quality = 'Good Quality';
            qualityColor = 'text-blue-600';
            qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
        } else if (fat >= 3.5 && snf >= 8.5) {
            milkType = 'Cow Milk';
            quality = 'Standard Quality';
            qualityColor = 'text-yellow-600';
            qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
        } else {
            milkType = 'Substandard';
            quality = 'Below FSSAI Standards';
            qualityColor = 'text-red-600';
            qualityIcon = <XCircle className="inline mr-2" size={20} />;
        }
        
        // Calculate step-by-step
        const fatContribution = (fat / 100) * fatRate;
        const snfContribution = (snf / 100) * snfRate;
        
        return {
            snf: snf.toFixed(2),
            pricePerKg: pricePerKg.toFixed(2),
            pricePerLitre: pricePerLitre.toFixed(2),
            milkType,
            quality,
            qualityColor,
            qualityIcon,
            fatContribution: fatContribution.toFixed(2),
            snfContribution: snfContribution.toFixed(2)
        };
    }, [inputs]);

    const calculate = () => {
        if (!results) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }
        
        setIsCalculating(true);
        setTimeout(() => {
            setIsCalculating(false);
            toast({
                title: "✅ Calculation Complete",
                description: `Price: ₹${results.pricePerLitre}/L`,
            });
        }, 500);
    };

    return (
        <CalculatorCard 
            title="💰 Milk Pricing Calculator (Two-Axis Method)" 
            description="Calculate milk price based on Fat and SNF content - Industry standard method"
        >
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border-2 border-blue-300 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Droplet size={20} className="text-blue-600" />
                            <h3 className="font-semibold text-blue-800 font-headline">Milk Composition</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Fat Percentage (%)
                                    <span className="text-xs text-gray-500 ml-2">Cow: 3.5-5%, Buffalo: 6-8%</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="fatPercent" 
                                    value={inputs.fatPercent} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 4.5"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    CLR (Corrected Lactometer Reading)
                                    <span className="text-xs text-gray-500 ml-2">Normal: 26-32</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="clr" 
                                    value={inputs.clr} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 28.0"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-lg border-2 border-yellow-300 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <DollarSign size={20} className="text-yellow-600" />
                            <h3 className="font-semibold text-yellow-800 font-headline">Market Rates (per Kg)</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Fat Rate (₹ per Kg)
                                    <span className="text-xs text-gray-500 ml-2">Typical: ₹250-400</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="fatRate" 
                                    value={inputs.fatRate} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 300"
                                    className="h-12 text-base font-mono"
                                />
                            </div>
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    SNF Rate (₹ per Kg)
                                    <span className="text-xs text-gray-500 ml-2">Typical: ₹150-250</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="snfRate" 
                                    value={inputs.snfRate} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 200"
                                    className="h-12 text-base font-mono"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                        <Info size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-purple-800">
                            <strong>Two-Axis Method:</strong> Price is calculated based on both Fat and SNF content. SNF is typically valued at 2/3rd of Fat rate. This method discourages adulteration and is recommended by NDDB.
                        </div>
                    </div>
                </div>
                
                <Button 
                    onClick={calculate} 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 shadow-lg"
                    disabled={isCalculating || !results}
                >
                    {isCalculating ? (
                        <>
                            <Calculator className="mr-2 animate-spin" size={24} />
                            Calculating...
                        </>
                    ) : (
                        <>
                            <DollarSign className="mr-2" size={24} />
                            Calculate Milk Price
                        </>
                    )}
                </Button>
            </div>
            
            {results && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-green-900 mb-4">
                            💰 Calculated Milk Price
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border-2 border-green-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Price per Litre</div>
                                        <div className="text-4xl font-bold text-green-600 mb-1">
                                            ₹{results.pricePerLitre}
                                        </div>
                                        <div className="text-xs text-gray-500">Standard measure</div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg border-2 border-blue-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Price per Kg</div>
                                        <div className="text-4xl font-bold text-blue-600 mb-1">
                                            ₹{results.pricePerKg}
                                        </div>
                                        <div className="text-xs text-gray-500">Weight basis</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-gray-600">Calculated SNF:</span>
                                        <span className="font-bold text-gray-900 ml-2">{results.snf}%</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Milk Type:</span>
                                        <span className="font-bold text-gray-900 ml-2">{results.milkType}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${results.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${results.qualityColor}`}>
                                    {results.qualityIcon}
                                    {results.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Two-Axis Pricing Breakdown
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600"><strong>Given Values:</strong></div>
                                        <div>Fat % = <span className="text-blue-600 font-bold">{inputs.fatPercent}%</span></div>
                                        <div>CLR = <span className="text-blue-600 font-bold">{inputs.clr}</span></div>
                                        <div>Fat Rate = <span className="text-blue-600 font-bold">₹{inputs.fatRate}/kg</span></div>
                                        <div>SNF Rate = <span className="text-blue-600 font-bold">₹{inputs.snfRate}/kg</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600"><strong>Step 1: Calculate SNF</strong></div>
                                        <div className="text-xs text-gray-500">Formula: SNF = (CLR/4) + 0.2F + 0.14</div>
                                        <div>SNF = <span className="text-purple-600 font-bold">{results.snf}%</span></div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600"><strong>Step 2: Calculate Price Contributions</strong></div>
                                        <div>Fat Contribution = ({inputs.fatPercent}/100) × ₹{inputs.fatRate}</div>
                                        <div className="ml-4">= <span className="text-green-600 font-bold">₹{results.fatContribution}/kg</span></div>
                                        <div>SNF Contribution = ({results.snf}/100) × ₹{inputs.snfRate}</div>
                                        <div className="ml-4">= <span className="text-green-600 font-bold">₹{results.snfContribution}/kg</span></div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600"><strong>Step 3: Total Price per Kg</strong></div>
                                        <div>Price/Kg = ₹{results.fatContribution} + ₹{results.snfContribution}</div>
                                        <div className="ml-4">= <span className="text-orange-600 font-bold">₹{results.pricePerKg}/kg</span></div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-pink-400">
                                        <div className="text-gray-600"><strong>Step 4: Convert to per Litre</strong></div>
                                        <div>Price/L = Price/Kg × Density</div>
                                        <div className="ml-4">= ₹{results.pricePerKg} × {componentProps.milkDensity}</div>
                                        <div className="ml-4">= <span className="text-pink-600 font-bold">₹{results.pricePerLitre}/L</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">FSSAI Standards:</div>
                                        <div>• Cow Milk: 3.5% Fat, 8.5% SNF (minimum)</div>
                                        <div>• Buffalo Milk: 6.0% Fat, 9.0% SNF (minimum)</div>
                                        <div>• SNF Rate typically 2/3rd of Fat Rate</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Milk Price:</strong></div>
                                            <div className="text-3xl font-bold text-green-600 mt-2">
                                                ₹{results.pricePerLitre} per Litre
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CalculatorCard>
    );
}

// ===== 📊 POINT-BASED PRICING CALCULATOR =====
function PointBasedPricingCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        fatPercent: '4.5',
        clr: '28',
        ratePerFat: '7.0',
        ratePerClr: '3.0'
    });
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

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

        const snf = getSnf(fat, clr);
        
        // Point-based calculation
        const pricePerLitre = (fat * ratePerFat) + (clr * ratePerClr);
        const pricePerKg = pricePerLitre / componentProps.milkDensity;
        
        // Quality assessment
        let milkType = '';
        let quality = '';
        let qualityColor = '';
        let qualityIcon = null;
        
        if (fat >= 6 && clr >= 29) {
            milkType = 'Buffalo Milk';
            quality = 'Premium Quality';
            qualityColor = 'text-green-600';
            qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
        } else if (fat >= 4.5 && clr >= 27) {
            milkType = fat >= 5 ? 'Mixed Milk' : 'Cow Milk';
            quality = 'Good Quality';
            qualityColor = 'text-blue-600';
            qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
        } else if (fat >= 3.5 && clr >= 26) {
            milkType = 'Cow Milk';
            quality = 'Standard Quality';
            qualityColor = 'text-yellow-600';
            qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
        } else {
            milkType = 'Substandard';
            quality = 'Below Standards';
            qualityColor = 'text-red-600';
            qualityIcon = <XCircle className="inline mr-2" size={20} />;
        }
        
        const fatPoints = fat * ratePerFat;
        const clrPoints = clr * ratePerClr;

        return {
            snf: snf.toFixed(2),
            pricePerLitre: pricePerLitre.toFixed(2),
            pricePerKg: pricePerKg.toFixed(2),
            milkType,
            quality,
            qualityColor,
            qualityIcon,
            fatPoints: fatPoints.toFixed(2),
            clrPoints: clrPoints.toFixed(2)
        };
    }, [inputs]);

    const calculate = () => {
        if (!results) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }
        
        setIsCalculating(true);
        setTimeout(() => {
            setIsCalculating(false);
            toast({
                title: "✅ Calculation Complete",
                description: `Price: ₹${results.pricePerLitre}/L`,
            });
        }, 500);
    };

    return (
        <CalculatorCard 
            title="📊 Milk Pricing Calculator (Point-Based Method)" 
            description="Calculate milk price using rate per point of Fat and CLR - Common at collection centers"
        >
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border-2 border-blue-300 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Beaker size={20} className="text-blue-600" />
                            <h3 className="font-semibold text-blue-800 font-headline">Milk Composition</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Fat Percentage (%)
                                    <span className="text-xs text-gray-500 ml-2">Points from fat</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="fatPercent" 
                                    value={inputs.fatPercent} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 4.5"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    CLR (Corrected Lactometer Reading)
                                    <span className="text-xs text-gray-500 ml-2">Points from CLR</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="clr" 
                                    value={inputs.clr} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 28.0"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-lg border-2 border-orange-300 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <DollarSign size={20} className="text-orange-600" />
                            <h3 className="font-semibold text-orange-800 font-headline">Point Rates (per Litre)</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Rate per Fat Point (₹)
                                    <span className="text-xs text-gray-500 ml-2">Typical: ₹5-10</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="ratePerFat" 
                                    value={inputs.ratePerFat} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 7.0"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Rate per CLR Point (₹)
                                    <span className="text-xs text-gray-500 ml-2">Typical: ₹2-5</span>
                                </Label>
                                <Input 
                                    type="number" 
                                    name="ratePerClr" 
                                    value={inputs.ratePerClr} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g., 3.0"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                        <Info size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-cyan-800">
                            <strong>Point-Based Method:</strong> Simple and quick calculation method commonly used at milk collection centers. Price = (Fat% × Fat Rate) + (CLR × CLR Rate). Easy to implement in the field.
                        </div>
                    </div>
                </div>
                
                <Button 
                    onClick={calculate} 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg"
                    disabled={isCalculating || !results}
                >
                    {isCalculating ? (
                        <>
                            <Calculator className="mr-2 animate-spin" size={24} />
                            Calculating...
                        </>
                    ) : (
                        <>
                            <DollarSign className="mr-2" size={24} />
                            Calculate Milk Price
                        </>
                    )}
                </Button>
            </div>
            
            {results && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-blue-900 mb-4">
                            💰 Calculated Milk Price
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border-2 border-blue-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Price per Litre</div>
                                        <div className="text-4xl font-bold text-blue-600 mb-1">
                                            ₹{results.pricePerLitre}
                                        </div>
                                        <div className="text-xs text-gray-500">Primary measure</div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg border-2 border-indigo-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Price per Kg</div>
                                        <div className="text-4xl font-bold text-indigo-600 mb-1">
                                            ₹{results.pricePerKg}
                                        </div>
                                        <div className="text-xs text-gray-500">Weight basis</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-gray-600">Calculated SNF:</span>
                                        <span className="font-bold text-gray-900 ml-2">{results.snf}%</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Milk Type:</span>
                                        <span className="font-bold text-gray-900 ml-2">{results.milkType}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${results.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${results.qualityColor}`}>
                                    {results.qualityIcon}
                                    {results.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Point-Based Pricing Breakdown
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600"><strong>Given Values:</strong></div>
                                        <div>Fat % = <span className="text-blue-600 font-bold">{inputs.fatPercent}%</span></div>
                                        <div>CLR = <span className="text-blue-600 font-bold">{inputs.clr}</span></div>
                                        <div>Rate per Fat Point = <span className="text-blue-600 font-bold">₹{inputs.ratePerFat}/L</span></div>
                                        <div>Rate per CLR Point = <span className="text-blue-600 font-bold">₹{inputs.ratePerClr}/L</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600"><strong>Step 1: Calculate SNF (Reference)</strong></div>
                                        <div className="text-xs text-gray-500">Formula: SNF = (CLR/4) + 0.2F + 0.14</div>
                                        <div>SNF = <span className="text-purple-600 font-bold">{results.snf}%</span></div>
                                        <div className="text-xs text-gray-500 mt-1">Note: SNF is for quality reference only</div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600"><strong>Step 2: Calculate Points Value</strong></div>
                                        <div>Fat Points = Fat% × Rate/Fat</div>
                                        <div className="ml-4">= {inputs.fatPercent} × ₹{inputs.ratePerFat}</div>
                                        <div className="ml-4">= <span className="text-green-600 font-bold">₹{results.fatPoints}</span></div>
                                        
                                        <div className="mt-2">CLR Points = CLR × Rate/CLR</div>
                                        <div className="ml-4">= {inputs.clr} × ₹{inputs.ratePerClr}</div>
                                        <div className="ml-4">= <span className="text-green-600 font-bold">₹{results.clrPoints}</span></div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600"><strong>Step 3: Total Price per Litre</strong></div>
                                        <div>Price/L = Fat Points + CLR Points</div>
                                        <div className="ml-4">= ₹{results.fatPoints} + ₹{results.clrPoints}</div>
                                        <div className="ml-4">= <span className="text-orange-600 font-bold">₹{results.pricePerLitre}/L</span></div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-pink-400">
                                        <div className="text-gray-600"><strong>Step 4: Convert to per Kg</strong></div>
                                        <div>Price/Kg = Price/L ÷ Density</div>
                                        <div className="ml-4">= ₹{results.pricePerLitre} ÷ {componentProps.milkDensity}</div>
                                        <div className="ml-4">= <span className="text-pink-600 font-bold">₹{results.pricePerKg}/kg</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Advantages of Point-Based Method:</div>
                                        <div>• Simple and quick calculation</div>
                                        <div>• Easy to implement at collection centers</div>
                                        <div>• No need for SNF calculation during payment</div>
                                        <div>• Farmers easily understand the system</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg border-2 border-blue-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Milk Price:</strong></div>
                                            <div className="text-3xl font-bold text-blue-600 mt-2">
                                                ₹{results.pricePerLitre} per Litre
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CalculatorCard>
    );
}


// ===== 🍦 CREAM CALCULATORS =====
function CreamCalculators() {
    const [activeCalc, setActiveCalc] = useState('cream-dilution');

    const renderCalculator = () => {
        switch (activeCalc) {
            case 'fat-percent':
                return <CreamFatCalc />;
            case 'actual-snf':
                return <ActualCreamSnfCalc />;
            case 'cream-dilution':
            default:
                return <CreamDilutionCalc />;
        }
    };
    
    return (
        <CalculatorCard 
            title="🍦 Cream Analysis Calculators" 
            description="Comprehensive cream quality and composition analysis tools"
        >
            <div className="mb-6">
                <Label className="text-base font-semibold mb-3 block">Select Calculator Type</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                        onClick={() => setActiveCalc('cream-dilution')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'cream-dilution'
                                ? 'border-sky-500 bg-sky-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-sky-300 hover:bg-gray-50'
                        }`}
                    >
                        <Droplet className={`mx-auto mb-2 ${activeCalc === 'cream-dilution' ? 'text-sky-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'cream-dilution' ? 'text-sky-700' : 'text-gray-700'}`}>
                            Cream Dilution
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Water addition</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('fat-percent')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'fat-percent'
                                ? 'border-yellow-500 bg-yellow-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50'
                        }`}
                    >
                        <Percent className={`mx-auto mb-2 ${activeCalc === 'fat-percent' ? 'text-yellow-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'fat-percent' ? 'text-yellow-700' : 'text-gray-700'}`}>
                            Fat Percentage
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Gerber method</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('actual-snf')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'actual-snf'
                                ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                        }`}
                    >
                        <Calculator className={`mx-auto mb-2 ${activeCalc === 'actual-snf' ? 'text-purple-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'actual-snf' ? 'text-purple-700' : 'text-gray-700'}`}>
                            Actual SNF
                        </div>
                        <div className="text-xs text-gray-500 mt-1">From TS & Fat</div>
                    </button>
                </div>
            </div>
            {renderCalculator()}
        </CalculatorCard>
    );
}

// ===== 💧 CREAM DILUTION CALCULATOR =====
function CreamDilutionCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        initialQty: '100',
        initialFat: '40',
        targetFat: '30'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const initialQty = parseFloat(inputs.initialQty);
        const initialFat = parseFloat(inputs.initialFat);
        const targetFat = parseFloat(inputs.targetFat);

        if ([initialQty, initialFat, targetFat].some(isNaN) || initialQty <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please fill all fields with valid positive numbers.",
                variant: "destructive"
            });
            return;
        }

        if (initialFat <= targetFat) {
            toast({
                title: "⚠️ Invalid Range",
                description: "Target Fat % must be lower than Initial Fat %.",
                variant: "destructive"
            });
            return;
        }
        
        if (targetFat <= 0) {
            toast({
                title: "⚠️ Invalid Value",
                description: "Target Fat % must be a positive number.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // Dilution formula: W = Q × (F₁/F₂ - 1)
            const waterToAdd = initialQty * (initialFat / targetFat - 1);
            const finalVolume = initialQty + waterToAdd;
            
            // Quality assessment
            let creamType = '';
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (targetFat >= 25 && targetFat < 35) {
                creamType = 'Light Cream';
                quality = 'FSSAI Compliant (≥25% fat)';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (targetFat >= 35 && targetFat < 45) {
                creamType = 'Medium Fat Cream';
                quality = 'Standard Cream Range';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (targetFat >= 45) {
                creamType = 'High Fat Cream / Heavy Cream';
                quality = 'Premium Quality';
                qualityColor = 'text-purple-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else {
                creamType = 'Below Standards';
                quality = 'Below FSSAI Minimum (25% fat)';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
            }
            
            const ratio = initialFat / targetFat;
            
            setResult({
                waterToAdd: waterToAdd.toFixed(2),
                finalVolume: finalVolume.toFixed(2),
                creamType,
                quality,
                qualityColor,
                qualityIcon,
                ratio: ratio.toFixed(4),
                inputs: { initialQty, initialFat, targetFat }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-5 rounded-lg border-2 border-sky-300">
                <div className="flex items-center gap-2 mb-4">
                    <Droplet size={20} className="text-sky-600" />
                    <span className="font-semibold text-sky-700">Cream Dilution Calculator</span>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Initial Cream Quantity (kg)
                            <span className="text-xs text-gray-500 ml-2">Starting amount</span>
                        </Label>
                        <Input 
                            name="initialQty"
                            type="number" 
                            value={inputs.initialQty} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                            placeholder="e.g., 100"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Initial Cream Fat (%)
                            <span className="text-xs text-gray-500 ml-2">Current fat content</span>
                        </Label>
                        <Input 
                            name="initialFat"
                            type="number" 
                            value={inputs.initialFat} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                            placeholder="e.g., 40"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Target Cream Fat (%)
                            <span className="text-xs text-gray-500 ml-2">Desired fat content</span>
                        </Label>
                        <Input 
                            name="targetFat"
                            type="number" 
                            value={inputs.targetFat} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                            placeholder="e.g., 30"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                        <strong>FSSAI Standard:</strong> Cream must contain minimum 25% fat and maximum 72% moisture. Common types: Light (25-35%), Medium (35-45%), Heavy (45%+).
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Droplet className="mr-2" size={24} />
                        Calculate Water to Add
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-sky-900 mb-4">
                            💧 Dilution Results
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-sky-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Water to Add</div>
                                    <div className="text-5xl font-bold text-sky-600 mb-2">
                                        {result.waterToAdd} kg
                                    </div>
                                    <div className="text-sm text-gray-500">Final Volume: {result.finalVolume} kg</div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-gray-600">Cream Type:</span>
                                        <span className="font-bold text-gray-900 ml-2">{result.creamType}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Dilution Ratio:</span>
                                        <span className="font-bold text-gray-900 ml-2">1:{result.ratio}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-sky-400 hover:bg-sky-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Cream Dilution Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-sky-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Initial Quantity (Q) = <span className="text-sky-600 font-bold">{result.inputs.initialQty} kg</span></div>
                                        <div>Initial Fat (F₁) = <span className="text-sky-600 font-bold">{result.inputs.initialFat}%</span></div>
                                        <div>Target Fat (F₂) = <span className="text-sky-600 font-bold">{result.inputs.targetFat}%</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> Water (W) = Q × (F₁/F₂ - 1)
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Based on mass balance: Q × F₁ = (Q + W) × F₂
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> Calculate ratio F₁/F₂
                                        </div>
                                        <div className="ml-4">
                                            = {result.inputs.initialFat} / {result.inputs.targetFat} = <span className="text-green-600 font-bold">{result.ratio}</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Subtract 1 from ratio
                                        </div>
                                        <div className="ml-4">
                                            = {result.ratio} - 1 = <span className="text-green-600 font-bold">{(parseFloat(result.ratio) - 1).toFixed(4)}</span>
                                        </div>
                                        <div>
                                            <strong>Step 3:</strong> Multiply by initial quantity
                                        </div>
                                        <div className="ml-4">
                                            = {result.inputs.initialQty} × {(parseFloat(result.ratio) - 1).toFixed(4)}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.waterToAdd} kg water</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600"><strong>Step 4: Final Volume</strong></div>
                                        <div>Final Volume = Initial + Water</div>
                                        <div className="ml-4">
                                            = {result.inputs.initialQty} + {result.waterToAdd}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-purple-600 font-bold">{result.finalVolume} kg</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Cream Types by Fat Content:</div>
                                        <div>• Light Cream: 25-35% fat</div>
                                        <div>• Medium Cream: 35-45% fat</div>
                                        <div>• Heavy/Double Cream: 45%+ fat</div>
                                        <div>• Whipping Cream: 30-35% fat</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-sky-100 to-blue-100 p-4 rounded-lg border-2 border-sky-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Add Water:</strong></div>
                                            <div className="text-3xl font-bold text-sky-600 mt-2">
                                                {result.waterToAdd} kg
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 🧈 CREAM FAT PERCENTAGE CALCULATOR =====
function CreamFatCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        reading: '',
        weight: '5'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const r = parseFloat(inputs.reading);
        const w = parseFloat(inputs.weight);
        
        if (isNaN(r) || isNaN(w) || w <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for reading and weight.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // Gerber method formula: Fat% = (R × 11.25) / W
            // Where 11.25 is the calibration factor for milk butyrometer
            const fatPercent = (r * 11.25) / w;
            const fatPrecise = parseFloat(fatPercent.toFixed(2));
            
            // Quality assessment
            let creamType = '';
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (fatPrecise >= 25 && fatPrecise < 35) {
                creamType = 'Light Cream';
                quality = 'FSSAI Compliant';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (fatPrecise >= 35 && fatPrecise < 45) {
                creamType = 'Medium Fat Cream';
                quality = 'Standard Cream Range';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (fatPrecise >= 45 && fatPrecise <= 60) {
                creamType = 'Heavy Cream / Double Cream';
                quality = 'Premium Quality';
                qualityColor = 'text-purple-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (fatPrecise < 25) {
                creamType = 'Substandard';
                quality = 'Below FSSAI Minimum (25%)';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
            } else {
                creamType = 'Ultra-High Fat';
                quality = 'Verify Reading - Unusually High';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            const step1 = r * 11.25;
            const step2 = step1 / w;
            
            setResult({
                fatPercent: fatPrecise,
                creamType,
                quality,
                qualityColor,
                qualityIcon,
                steps: {
                    step1: step1.toFixed(4),
                    step2: step2.toFixed(2)
                },
                inputs: { r, w }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg border-2 border-yellow-300">
                <div className="flex items-center gap-2 mb-4">
                    <Percent size={20} className="text-yellow-600" />
                    <span className="font-semibold text-yellow-700">Cream Fat % Calculator (Gerber Method)</span>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Butyrometer Reading
                            <span className="text-xs text-gray-500 ml-2">Scale reading (divisions)</span>
                        </Label>
                        <Input 
                            name="reading"
                            type="number" 
                            value={inputs.reading} 
                            onChange={handleInputChange}
                            placeholder="e.g., 8.0"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (grams)
                            <span className="text-xs text-gray-500 ml-2">Standard: 5g</span>
                        </Label>
                        <Input 
                            name="weight"
                            type="number" 
                            value={inputs.weight} 
                            onChange={handleInputChange}
                            placeholder="e.g., 5"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-purple-800">
                        <strong>Gerber Method:</strong> This calculation is based on the Gerber method for cream using a standard 10.75 milk butyrometer with variable sample weight. Factor 11.25 accounts for calibration and dilution.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-700 hover:from-yellow-700 hover:to-orange-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Percent className="mr-2" size={24} />
                        Calculate Fat %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-yellow-900 mb-4">
                            🧈 Cream Fat Content Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-yellow-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Cream Fat Percentage</div>
                                    <div className="text-5xl font-bold text-yellow-600 mb-2">
                                        {result.fatPercent}%
                                    </div>
                                    <div className="text-sm text-gray-500">Gerber Method</div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">Cream Classification</div>
                                    <div className="text-xl font-bold text-gray-900 mt-1">{result.creamType}</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Breakdown
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Gerber Method Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-yellow-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Butyrometer Reading (R) = <span className="text-yellow-600 font-bold">{result.inputs.r}</span></div>
                                        <div>Sample Weight (W) = <span className="text-yellow-600 font-bold">{result.inputs.w} g</span></div>
                                        <div className="text-xs text-gray-500 mt-2">
                                            Factor: 11.25 (Standard calibration constant)
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> Fat% = (R × 11.25) / W
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> R × 11.25 = {result.inputs.r} × 11.25
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.steps.step1}</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Result ÷ W = {result.steps.step1} ÷ {result.inputs.w}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.steps.step2}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-blue-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">About Gerber Method:</div>
                                        <div className="text-gray-700">
                                            • Developed by Dr. Niklaus Gerber in 1891
                                        </div>
                                        <div className="text-gray-700">
                                            • Uses sulfuric acid (H₂SO₄) and amyl alcohol
                                        </div>
                                        <div className="text-gray-700">
                                            • Acid dissolves proteins, releasing fat
                                        </div>
                                        <div className="text-gray-700">
                                            • Amyl alcohol prevents charring
                                        </div>
                                        <div className="text-gray-700">
                                            • Centrifuged at 1100 rpm for 5 minutes
                                        </div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Cream Classifications:</div>
                                        <div>• Light Cream: 25-35% fat</div>
                                        <div>• Medium Cream: 35-45% fat</div>
                                        <div>• Heavy/Double Cream: 45-60% fat</div>
                                        <div>• FSSAI Minimum: 25% fat</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-yellow-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-yellow-600 mt-2">
                                                {result.fatPercent}% Fat
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 📊 ACTUAL CREAM SNF CALCULATOR =====
function ActualCreamSnfCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        ts: '',
        fat: ''
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const totalSolids = parseFloat(inputs.ts);
        const fatPercent = parseFloat(inputs.fat);
        
        if (isNaN(totalSolids) || isNaN(fatPercent)) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for TS and Fat.",
                variant: "destructive"
            });
            return;
        }
        
        if (fatPercent > totalSolids) {
            toast({
                title: "⚠️ Invalid Values",
                description: "Fat % cannot be greater than Total Solids %.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const snfPercent = totalSolids - fatPercent;
            const snfPrecise = parseFloat(snfPercent.toFixed(2));
            
            // Quality assessment
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (snfPrecise >= 6 && snfPrecise <= 10) {
                quality = 'Normal SNF Range for Cream';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (snfPrecise > 10) {
                quality = 'High SNF - Verify TS measurement';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Low SNF - Check for dilution';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            setResult({
                snfPercent: snfPrecise,
                quality,
                qualityColor,
                qualityIcon,
                inputs: { totalSolids, fatPercent }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-2 border-purple-300">
                <div className="flex items-center gap-2 mb-4">
                    <Calculator size={20} className="text-purple-600" />
                    <span className="font-semibold text-purple-700">Actual Cream SNF Calculator</span>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Total Solids (TS) %
                            <span className="text-xs text-gray-500 ml-2">Typically 28-72%</span>
                        </Label>
                        <Input 
                            name="ts"
                            type="number" 
                            value={inputs.ts} 
                            onChange={handleInputChange}
                            placeholder="e.g., 45.5"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Fat Percentage (%)
                            <span className="text-xs text-gray-500 ml-2">Cream fat content</span>
                        </Label>
                        <Input 
                            name="fat"
                            type="number" 
                            value={inputs.fat} 
                            onChange={handleInputChange}
                            placeholder="e.g., 40.0"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-cyan-800">
                        <strong>Formula:</strong> SNF = TS - Fat. SNF (Solids-Not-Fat) includes proteins, lactose, and minerals. Normal cream SNF ranges from 6-10%.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Calculator className="mr-2" size={24} />
                        Calculate SNF %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-purple-900 mb-4">
                            📊 Actual Cream SNF Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Solids-Not-Fat (SNF)</div>
                                    <div className="text-5xl font-bold text-purple-600 mb-2">
                                        {result.snfPercent}%
                                    </div>
                                    <div className="text-sm text-gray-500">Non-fat milk solids</div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    <div className="text-xs text-gray-600">Total Solids</div>
                                    <div className="text-lg font-bold text-blue-600">{result.inputs.totalSolids}%</div>
                                </div>
                                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                                    <div className="text-xs text-gray-600">Fat Content</div>
                                    <div className="text-lg font-bold text-orange-600">{result.inputs.fatPercent}%</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Details
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        SNF Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Total Solids (TS) = <span className="text-purple-600 font-bold">{result.inputs.totalSolids}%</span></div>
                                        <div>Fat % = <span className="text-purple-600 font-bold">{result.inputs.fatPercent}%</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> SNF = TS - Fat
                                        </div>
                                        <div>
                                            <strong>Calculation:</strong>
                                        </div>
                                        <div className="ml-4">
                                            SNF = {result.inputs.totalSolids} - {result.inputs.fatPercent}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.snfPercent}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-blue-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">SNF Components in Cream:</div>
                                        <div className="text-gray-700">• Proteins (mainly casein): 2-3%</div>
                                        <div className="text-gray-700">• Lactose (milk sugar): 3-4%</div>
                                        <div className="text-gray-700">• Minerals (ash): 0.5-0.7%</div>
                                        <div className="text-gray-700">• Other solids: trace amounts</div>
                                        <div className="text-gray-700 mt-2">
                                            <strong>Total SNF typically:</strong> 6-10% in cream
                                        </div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Quality Indicators:</div>
                                        <div>• Normal SNF: 6-10%</div>
                                        <div>• High SNF (&gt;10%): Check TS measurement</div>
                                        <div>• Low SNF (&lt;6%): Possible water addition</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-2 border-purple-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-purple-600 mt-2">
                                                SNF: {result.snfPercent}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}


// ===== 🔬 MINERAL ANALYSIS CALCULATOR (FLAME PHOTOMETRY) =====
function MineralAnalysisCalc() {
    const { toast } = useToast();
    const [mineral, setMineral] = useState<'sodium' | 'potassium'>('sodium');
    const [inputs, setInputs] = useState({
        stdConc: '10',
        stdReading: '',
        sampleReading: '',
        dilutionFactor: '100'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const stdC = parseFloat(inputs.stdConc);
        const stdR = parseFloat(inputs.stdReading);
        const sampleR = parseFloat(inputs.sampleReading);
        const dilution = parseFloat(inputs.dilutionFactor);

        if (isNaN(stdC) || isNaN(stdR) || isNaN(sampleR) || isNaN(dilution) || stdR <= 0 || dilution <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // Calibration factor
            const factor = stdC / stdR;
            
            // Concentration in diluted sample
            const dilutedConcentration = sampleR * factor;
            
            // Final concentration accounting for dilution
            const finalConcentration = dilutedConcentration * dilution;
            const finalPrecise = parseFloat(finalConcentration.toFixed(2));
            
            // Quality assessment based on standards
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let standardRange = '';
            
            if (mineral === 'sodium') {
                standardRange = '400-500 ppm (Cow Milk)';
                if (finalPrecise >= 400 && finalPrecise <= 500) {
                    quality = 'Normal Sodium Range - Cow Milk';
                    qualityColor = 'text-green-600';
                    qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                } else if (finalPrecise > 500 && finalPrecise <= 650) {
                    quality = 'Elevated - Check for Contamination';
                    qualityColor = 'text-yellow-600';
                    qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                } else if (finalPrecise > 650) {
                    quality = 'Exceeds FSSAI Limit (>650mg/100g)';
                    qualityColor = 'text-red-600';
                    qualityIcon = <XCircle className="inline mr-2" size={20} />;
                } else {
                    quality = 'Below Normal - Verify Dilution';
                    qualityColor = 'text-orange-600';
                    qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                }
            } else { // potassium
                standardRange = '1400-1600 ppm (Cow Milk)';
                if (finalPrecise >= 1400 && finalPrecise <= 1600) {
                    quality = 'Normal Potassium Range - Cow Milk';
                    qualityColor = 'text-green-600';
                    qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                } else if (finalPrecise > 1600 && finalPrecise <= 2000) {
                    quality = 'Slightly Elevated - Acceptable';
                    qualityColor = 'text-blue-600';
                    qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                } else if (finalPrecise < 1400 && finalPrecise >= 1000) {
                    quality = 'Below Normal - Check Sample';
                    qualityColor = 'text-yellow-600';
                    qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                } else if (finalPrecise < 1000) {
                    quality = 'Very Low - Verify Procedure';
                    qualityColor = 'text-orange-600';
                    qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                } else {
                    quality = 'Unusually High - Verify Reading';
                    qualityColor = 'text-red-600';
                    qualityIcon = <XCircle className="inline mr-2" size={20} />;
                }
            }
            
            // Convert to mg/100g for comparison with FSSAI standards
            const mgPer100g = finalPrecise / 10;
            
            setResult({
                finalConcentration: finalPrecise,
                mgPer100g: mgPer100g.toFixed(2),
                quality,
                qualityColor,
                qualityIcon,
                standardRange,
                factor: factor.toFixed(4),
                dilutedConc: dilutedConcentration.toFixed(4),
                inputs: { stdC, stdR, sampleR, dilution }
            });
            setIsCalculating(false);
        }, 500);
    };

    const mineralColor = mineral === 'sodium' ? {
        gradient: 'from-indigo-50 to-blue-50',
        border: 'border-indigo-300',
        text: 'text-indigo-700',
        icon: 'text-indigo-600'
    } : {
        gradient: 'from-violet-50 to-purple-50',
        border: 'border-violet-300',
        text: 'text-violet-700',
        icon: 'text-violet-600'
    };

    return (
        <CalculatorCard 
            title="🔬 Mineral Analysis Calculator (Flame Photometry)" 
            description="Estimate Sodium (Na) and Potassium (K) content in milk using flame photometer readings"
        >
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">Select Mineral</Label>
                        <Select value={mineral} onValueChange={(val) => setMineral(val as any)}>
                            <SelectTrigger className="h-12">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sodium">
                                    <div className="flex items-center gap-2">
                                        <Atom size={16} className="text-indigo-600" />
                                        Sodium (Na) - 589nm
                                    </div>
                                </SelectItem>
                                <SelectItem value="potassium">
                                    <div className="flex items-center gap-2">
                                        <Atom size={16} className="text-violet-600" />
                                        Potassium (K) - 766nm
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Dilution Factor
                            <span className="text-xs text-gray-500 ml-2">Typical: 100x</span>
                        </Label>
                        <Input 
                            name="dilutionFactor"
                            type="number" 
                            value={inputs.dilutionFactor} 
                            onChange={handleInputChange}
                            placeholder="e.g., 100"
                            className="h-12 text-base font-mono"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`bg-gradient-to-br ${mineralColor.gradient} p-5 rounded-lg border-2 ${mineralColor.border} shadow-sm`}>
                        <div className="flex items-center gap-2 mb-4">
                            <Beaker size={20} className={mineralColor.icon} />
                            <h4 className={`font-semibold ${mineralColor.text} font-headline`}>Standard Calibration</h4>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Standard Concentration (ppm)
                                    <span className="text-xs text-gray-500 ml-2">Known value</span>
                                </Label>
                                <Input 
                                    name="stdConc"
                                    type="number" 
                                    value={inputs.stdConc} 
                                    onChange={handleInputChange}
                                    className="h-12 text-base font-mono"
                                    placeholder="e.g., 10"
                                />
                            </div>
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Standard Reading
                                    <span className="text-xs text-gray-500 ml-2">Photometer reading</span>
                                </Label>
                                <Input 
                                    name="stdReading"
                                    type="number" 
                                    value={inputs.stdReading} 
                                    onChange={handleInputChange}
                                    placeholder="e.g., 50"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-lg border-2 border-orange-300 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Droplet size={20} className="text-orange-600" />
                            <h4 className="font-semibold text-orange-700 font-headline">Milk Sample</h4>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Label className="text-sm font-semibold mb-2 block">
                                    Sample Reading
                                    <span className="text-xs text-gray-500 ml-2">Diluted sample</span>
                                </Label>
                                <Input 
                                    name="sampleReading"
                                    type="number" 
                                    value={inputs.sampleReading} 
                                    onChange={handleInputChange}
                                    placeholder="e.g., 25"
                                    className="h-12 text-base font-mono"
                                    step="0.1"
                                />
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-orange-200">
                                <div className="text-xs text-gray-600">Expected Range (Cow Milk)</div>
                                <div className="text-sm font-bold text-gray-900 mt-1">
                                    {mineral === 'sodium' ? 'Na: 400-500 ppm' : 'K: 1400-1600 ppm'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                        <Info size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-cyan-800">
                            <strong>Flame Photometry:</strong> Measures light emission when elements are excited in a flame. Sodium emits yellow light (589nm), Potassium emits violet light (766nm). FSSAI limit for Na in milk: 650mg/100g (6500 ppm).
                        </div>
                    </div>
                </div>

                <Button 
                    onClick={calculate} 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 shadow-lg"
                    disabled={isCalculating}
                >
                    {isCalculating ? (
                        <>
                            <Calculator className="mr-2 animate-spin" size={24} />
                            Calculating...
                        </>
                    ) : (
                        <>
                            <Atom className="mr-2" size={24} />
                            Calculate {mineral === 'sodium' ? 'Sodium' : 'Potassium'} Content
                        </>
                    )}
                </Button>
            </div>

            {result && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-500">
                    <Alert className={`bg-gradient-to-r ${mineralColor.gradient} border-2 ${mineralColor.border} shadow-lg`}>
                        <AlertTitle className="text-xl font-bold text-gray-900 mb-4">
                            🔬 {mineral === 'sodium' ? 'Sodium (Na)' : 'Potassium (K)'} Analysis Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">
                                        {mineral === 'sodium' ? 'Sodium' : 'Potassium'} Content
                                    </div>
                                    <div className={`text-5xl font-bold mb-2 ${mineral === 'sodium' ? 'text-indigo-600' : 'text-violet-600'}`}>
                                        {result.finalConcentration}
                                    </div>
                                    <div className="text-sm text-gray-500">ppm (parts per million)</div>
                                    <div className="text-xs text-gray-400 mt-2">
                                        = {result.mgPer100g} mg/100g
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-gray-600">Standard Range:</span>
                                        <span className="font-bold text-gray-900 ml-2 block text-xs mt-1">{result.standardRange}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Calibration Factor:</span>
                                        <span className="font-bold text-gray-900 ml-2 block">{result.factor}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>

                            {mineral === 'sodium' && parseFloat(result.mgPer100g) > 65 && (
                                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                                    <div className="flex items-start gap-2">
                                        <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                        <div className="text-sm text-red-800">
                                            <strong>FSSAI Alert:</strong> Sodium content exceeds 650mg/100g limit. Sample may be adulterated or contaminated.
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className={`w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:${mineralColor.border} hover:${mineralColor.gradient.replace('from-', 'bg-').split(' ')[0]} transition-all font-semibold text-gray-700`}
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Flame Photometry Calculation
                                    </div>
                                    
                                    <div className={`space-y-2 pl-4 border-l-4 ${mineral === 'sodium' ? 'border-indigo-400' : 'border-violet-400'}`}>
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Standard Concentration (Cs) = <span className={`${mineral === 'sodium' ? 'text-indigo-600' : 'text-violet-600'} font-bold`}>{result.inputs.stdC} ppm</span></div>
                                        <div>Standard Reading (Rs) = <span className={`${mineral === 'sodium' ? 'text-indigo-600' : 'text-violet-600'} font-bold`}>{result.inputs.stdR}</span></div>
                                        <div>Sample Reading (Rx) = <span className={`${mineral === 'sodium' ? 'text-indigo-600' : 'text-violet-600'} font-bold`}>{result.inputs.sampleR}</span></div>
                                        <div>Dilution Factor (D) = <span className={`${mineral === 'sodium' ? 'text-indigo-600' : 'text-violet-600'} font-bold`}>{result.inputs.dilution}x</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Step 1: Calculate Calibration Factor</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Factor (F) = Cs / Rs
                                        </div>
                                        <div>
                                            F = {result.inputs.stdC} / {result.inputs.stdR}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.factor} ppm/unit</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Step 2: Calculate Diluted Sample Concentration</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Conc. (diluted) = Rx × F
                                        </div>
                                        <div>
                                            = {result.inputs.sampleR} × {result.factor}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-blue-600 font-bold">{result.dilutedConc} ppm</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600">
                                            <strong>Step 3: Account for Dilution</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Final Conc. = Conc. (diluted) × D
                                        </div>
                                        <div>
                                            = {result.dilutedConc} × {result.inputs.dilution}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-purple-600 font-bold">{result.finalConcentration} ppm</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600">
                                            <strong>Step 4: Convert to mg/100g</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            mg/100g = ppm / 10
                                        </div>
                                        <div>
                                            = {result.finalConcentration} / 10
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-orange-600 font-bold">{result.mgPer100g} mg/100g</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-blue-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Flame Photometry Principles:</div>
                                        <div className="text-gray-700">
                                            • Sample atomized into flame (~2500°C)
                                        </div>
                                        <div className="text-gray-700">
                                            • Atoms absorb thermal energy and get excited
                                        </div>
                                        <div className="text-gray-700">
                                            • Emit characteristic wavelength light on returning to ground state
                                        </div>
                                        <div className="text-gray-700">
                                            • Sodium (Na): Yellow flame, 589nm
                                        </div>
                                        <div className="text-gray-700">
                                            • Potassium (K): Violet flame, 766nm
                                        </div>
                                        <div className="text-gray-700">
                                            • Light intensity proportional to concentration
                                        </div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Reference Standards:</div>
                                        <div><strong>Sodium (Na) in Cow Milk:</strong></div>
                                        <div>• Normal Range: 400-500 ppm (40-50 mg/100ml)</div>
                                        <div>• FSSAI Maximum: 650 mg/100g (6500 ppm)</div>
                                        <div className="mt-2"><strong>Potassium (K) in Cow Milk:</strong></div>
                                        <div>• Normal Range: 1400-1600 ppm (140-160 mg/100ml)</div>
                                        <div>• Buffalo Milk: Slightly higher (~1600-1800 ppm)</div>
                                    </div>
                                    
                                    <div className={`bg-gradient-to-r ${mineralColor.gradient} p-4 rounded-lg border-2 ${mineralColor.border}`}>
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Answer:</strong></div>
                                            <div className={`text-3xl font-bold mt-2 ${mineral === 'sodium' ? 'text-indigo-600' : 'text-violet-600'}`}>
                                                {result.finalConcentration} ppm
                                            </div>
                                            <div className="text-sm text-gray-600 mt-1">
                                                ({result.mgPer100g} mg/100g)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </CalculatorCard>
    );
}


// ===== 🧬 PROTEIN & CASEIN CALCULATORS =====
function ProteinCaseinCalc() {
    const [activeCalc, setActiveCalc] = useState<'kjeldahl' | 'formol' | 'casein-titration' | 'casein-factor' | 'protein-factor'>('kjeldahl');

    const renderCalculator = () => {
        switch (activeCalc) {
            case 'formol': return <FormolTitrationCalc />;
            case 'casein-titration': return <CaseinTitrationCalc />;
            case 'casein-factor': return <CaseinFromProteinCalc />;
            case 'protein-factor': return <ProteinFromCaseinCalc />;
            case 'kjeldahl':
            default: return <KjeldahlProteinCalc />;
        }
    };

    return (
        <CalculatorCard 
            title="🧬 Protein & Casein Analysis Calculators" 
            description="Comprehensive protein and casein determination methods for dairy products"
        >
            <div className="mb-6">
                <Label className="text-base font-semibold mb-3 block">Select Analysis Method</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <button
                        onClick={() => setActiveCalc('kjeldahl')}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'kjeldahl'
                                ? 'border-violet-500 bg-violet-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-violet-300 hover:bg-gray-50'
                        }`}
                    >
                        <Dna className={`mx-auto mb-1 ${activeCalc === 'kjeldahl' ? 'text-violet-600' : 'text-gray-500'}`} size={24} />
                        <div className={`font-semibold text-xs ${activeCalc === 'kjeldahl' ? 'text-violet-700' : 'text-gray-700'}`}>
                            Kjeldahl
                        </div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('formol')}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'formol'
                                ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                    >
                        <Beaker className={`mx-auto mb-1 ${activeCalc === 'formol' ? 'text-blue-600' : 'text-gray-500'}`} size={24} />
                        <div className={`font-semibold text-xs ${activeCalc === 'formol' ? 'text-blue-700' : 'text-gray-700'}`}>
                            Formol
                        </div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('casein-titration')}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'casein-titration'
                                ? 'border-green-500 bg-green-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                        }`}
                    >
                        <FlaskConical className={`mx-auto mb-1 ${activeCalc === 'casein-titration' ? 'text-green-600' : 'text-gray-500'}`} size={24} />
                        <div className={`font-semibold text-xs ${activeCalc === 'casein-titration' ? 'text-green-700' : 'text-gray-700'}`}>
                            Casein Titr.
                        </div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('casein-factor')}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'casein-factor'
                                ? 'border-orange-500 bg-orange-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                        }`}
                    >
                        <Calculator className={`mx-auto mb-1 ${activeCalc === 'casein-factor' ? 'text-orange-600' : 'text-gray-500'}`} size={24} />
                        <div className={`font-semibold text-xs ${activeCalc === 'casein-factor' ? 'text-orange-700' : 'text-gray-700'}`}>
                            Casein Est.
                        </div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('protein-factor')}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'protein-factor'
                                ? 'border-pink-500 bg-pink-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-pink-300 hover:bg-gray-50'
                        }`}
                    >
                        <Percent className={`mx-auto mb-1 ${activeCalc === 'protein-factor' ? 'text-pink-600' : 'text-gray-500'}`} size={24} />
                        <div className={`font-semibold text-xs ${activeCalc === 'protein-factor' ? 'text-pink-700' : 'text-gray-700'}`}>
                            Protein Est.
                        </div>
                    </button>
                </div>
            </div>
            {renderCalculator()}
        </CalculatorCard>
    );
}

// ===== 🧬 KJELDAHL PROTEIN CALCULATOR =====
function KjeldahlProteinCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        sampleWeight: '5',
        sampleTitre: '',
        blankTitre: '0.1',
        acidNormality: '0.1'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const W = parseFloat(inputs.sampleWeight);
        const Vs = parseFloat(inputs.sampleTitre);
        const Vb = parseFloat(inputs.blankTitre);
        const N = parseFloat(inputs.acidNormality);
        
        if (isNaN(W) || isNaN(Vs) || isNaN(Vb) || isNaN(N) || W <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // Kjeldahl formula: %N = ((Vs - Vb) × N × 14.007) / W
            const nitrogenPercent = ((Vs - Vb) * N * 1.4007) / W;
            // Protein = Nitrogen × 6.38 (factor for milk proteins)
            const proteinPercent = nitrogenPercent * 6.38;
            
            const nPrecise = parseFloat(nitrogenPercent.toFixed(4));
            const pPrecise = parseFloat(proteinPercent.toFixed(2));
            
            // Quality assessment
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (pPrecise >= 3.2 && pPrecise <= 3.8) {
                quality = 'Normal Protein Range - Cow Milk';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (pPrecise > 3.8 && pPrecise <= 4.5) {
                quality = 'High Protein - Buffalo Milk Range';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (pPrecise < 3.2 && pPrecise >= 2.8) {
                quality = 'Below Standard - Check Sample';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            } else if (pPrecise < 2.8) {
                quality = 'Very Low - Possible Adulteration';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Unusually High - Verify Procedure';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            const titreDiff = Vs - Vb;
            const nIntermediate = titreDiff * N * 1.4007;
            
            setResult({
                nitrogen: nPrecise,
                protein: pPrecise,
                quality,
                qualityColor,
                qualityIcon,
                steps: {
                    titreDiff: titreDiff.toFixed(4),
                    nIntermediate: nIntermediate.toFixed(4)
                },
                inputs: { W, Vs, Vb, N }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-5 rounded-lg border-2 border-violet-300">
                <div className="flex items-center gap-2 mb-4">
                    <Dna size={20} className="text-violet-600" />
                    <span className="font-semibold text-violet-700">Kjeldahl Method (AOAC 991.20)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (grams)
                            <span className="text-xs text-gray-500 ml-2">Standard: 5.0g</span>
                        </Label>
                        <Input 
                            name="sampleWeight"
                            type="number" 
                            value={inputs.sampleWeight} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Normality of HCl/H₂SO₄
                            <span className="text-xs text-gray-500 ml-2">Typical: 0.1N</span>
                        </Label>
                        <Input 
                            name="acidNormality"
                            type="number" 
                            step="0.01" 
                            value={inputs.acidNormality} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Titre Value (ml)
                            <span className="text-xs text-gray-500 ml-2">Back titration</span>
                        </Label>
                        <Input 
                            name="sampleTitre"
                            type="number" 
                            value={inputs.sampleTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 8.5"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Blank Titre Value (ml)
                            <span className="text-xs text-gray-500 ml-2">Control</span>
                        </Label>
                        <Input 
                            name="blankTitre"
                            type="number" 
                            value={inputs.blankTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 0.1"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                        <strong>Kjeldahl Method:</strong> Standard reference method (since 1883) for protein determination. Factor 6.38 for milk proteins established by Hammar & Seien (1892). FSSAI minimum: 3.0% protein in cow milk.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Dna className="mr-2" size={24} />
                        Calculate Protein %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-violet-900 mb-4">
                            🧬 Protein Analysis Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border-2 border-purple-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Total Nitrogen</div>
                                        <div className="text-4xl font-bold text-purple-600 mb-1">
                                            {result.nitrogen}%
                                        </div>
                                        <div className="text-xs text-gray-500">N content</div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg border-2 border-violet-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Crude Protein</div>
                                        <div className="text-4xl font-bold text-violet-600 mb-1">
                                            {result.protein}%
                                        </div>
                                        <div className="text-xs text-gray-500">Total protein</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-violet-400 hover:bg-violet-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Kjeldahl Method Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-violet-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Sample Weight (W) = <span className="text-violet-600 font-bold">{result.inputs.W} g</span></div>
                                        <div>Sample Titre (Vs) = <span className="text-violet-600 font-bold">{result.inputs.Vs} ml</span></div>
                                        <div>Blank Titre (Vb) = <span className="text-violet-600 font-bold">{result.inputs.Vb} ml</span></div>
                                        <div>Acid Normality (N) = <span className="text-violet-600 font-bold">{result.inputs.N} N</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Step 1: Calculate Titre Difference</strong>
                                        </div>
                                        <div>
                                            ΔV = Vs - Vb = {result.inputs.Vs} - {result.inputs.Vb}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.steps.titreDiff} ml</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Step 2: Calculate Nitrogen %</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: %N = (ΔV × N × 14.007) / W
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Where 14.007 = Atomic weight of Nitrogen (mg/mmol)
                                        </div>
                                        <div className="mt-2">
                                            %N = ({result.steps.titreDiff} × {result.inputs.N} × 1.4007) / {result.inputs.W}
                                        </div>
                                        <div className="ml-4">
                                            = {result.steps.nIntermediate} / {result.inputs.W}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-blue-600 font-bold">{result.nitrogen}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600">
                                            <strong>Step 3: Convert to Protein %</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Protein% = Nitrogen% × 6.38
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Factor 6.38 specific for milk proteins (established 1892)
                                        </div>
                                        <div className="mt-2">
                                            Protein% = {result.nitrogen} × 6.38
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-purple-600 font-bold">{result.protein}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-cyan-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Kjeldahl Method Steps:</div>
                                        <div><strong>1. Digestion:</strong> Sample + H₂SO₄ + Catalyst → (NH₄)₂SO₄</div>
                                        <div><strong>2. Distillation:</strong> (NH₄)₂SO₄ + NaOH → NH₃ + H₂O</div>
                                        <div><strong>3. Titration:</strong> NH₃ + HCl (excess) → NH₄Cl</div>
                                        <div className="mt-1">• Back titrate excess HCl with NaOH</div>
                                        <div>• Temperature: ~400°C during digestion</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Protein Standards (FSSAI):</div>
                                        <div>• Cow Milk: Minimum 3.0%, Typical 3.2-3.4%</div>
                                        <div>• Buffalo Milk: Typical 3.8-4.2%</div>
                                        <div>• Casein: ~80% of total protein (2.5-2.8%)</div>
                                        <div>• Whey Proteins: ~20% (0.6-0.7%)</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-4 rounded-lg border-2 border-violet-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Results:</strong></div>
                                            <div className="text-2xl font-bold text-violet-600 mt-2">
                                                Nitrogen: {result.nitrogen}%
                                            </div>
                                            <div className="text-3xl font-bold text-purple-600 mt-1">
                                                Protein: {result.protein}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 🧪 FORMOL TITRATION CALCULATOR =====
function FormolTitrationCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        initialTitre: '',
        finalTitre: '',
        factor: '1.7'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const v1 = parseFloat(inputs.initialTitre);
        const v2 = parseFloat(inputs.finalTitre);
        const f = parseFloat(inputs.factor);
        
        if (isNaN(v1) || isNaN(v2) || isNaN(f)) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const proteinPercent = (v2 - v1) * f;
            const pPrecise = parseFloat(proteinPercent.toFixed(2));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (pPrecise >= 3.2 && pPrecise <= 3.8) {
                quality = 'Normal Range - Cow Milk';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (pPrecise > 3.8 && pPrecise <= 4.5) {
                quality = 'High Protein - Buffalo Milk';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (pPrecise < 3.2) {
                quality = 'Below Standard';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Verify Reading';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            const titreDiff = v2 - v1;
            
            setResult({
                protein: pPrecise,
                quality,
                qualityColor,
                qualityIcon,
                titreDiff: titreDiff.toFixed(3),
                inputs: { v1, v2, f }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-4">
                    <Beaker size={20} className="text-blue-600" />
                    <span className="font-semibold text-blue-700">Formol Titration Method (Walker Method)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Initial Titre (V₁)
                            <span className="text-xs text-gray-500 ml-2">Before formaldehyde</span>
                        </Label>
                        <Input 
                            name="initialTitre"
                            type="number" 
                            value={inputs.initialTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 2.5"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Final Titre (V₂)
                            <span className="text-xs text-gray-500 ml-2">After formaldehyde</span>
                        </Label>
                        <Input 
                            name="finalTitre"
                            type="number" 
                            value={inputs.finalTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 4.5"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Formol Factor
                            <span className="text-xs text-gray-500 ml-2">Typical: 1.7</span>
                        </Label>
                        <Input 
                            name="factor"
                            type="number" 
                            value={inputs.factor} 
                            onChange={handleInputChange}
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-purple-800">
                        <strong>Formol Titration:</strong> Quick method where formaldehyde binds to amino groups, releasing H⁺ ions for titration. Factor 1.7 correlates titre difference to protein%. Suitable for rapid field testing.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Beaker className="mr-2" size={24} />
                        Calculate Protein %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-blue-900 mb-4">
                            🧪 Formol Titration Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Estimated Protein</div>
                                    <div className="text-5xl font-bold text-blue-600 mb-2">
                                        {result.protein}%
                                    </div>
                                    <div className="text-sm text-gray-500">Rapid method</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Details
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Formol Titration Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Initial Titre (V₁) = <span className="text-blue-600 font-bold">{result.inputs.v1} ml</span></div>
                                        <div>Final Titre (V₂) = <span className="text-blue-600 font-bold">{result.inputs.v2} ml</span></div>
                                        <div>Formol Factor (F) = <span className="text-blue-600 font-bold">{result.inputs.f}</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Formula:</strong> Protein% = (V₂ - V₁) × F
                                        </div>
                                        <div>
                                            <strong>Step 1:</strong> Calculate titre difference
                                        </div>
                                        <div className="ml-4">
                                            ΔV = {result.inputs.v2} - {result.inputs.v1} = <span className="text-green-600 font-bold">{result.titreDiff} ml</span>
                                        </div>
                                        <div>
                                            <strong>Step 2:</strong> Apply formol factor
                                        </div>
                                        <div className="ml-4">
                                            Protein% = {result.titreDiff} × {result.inputs.f}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.protein}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-cyan-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Formol Method Principle:</div>
                                        <div>• Formaldehyde (HCHO) reacts with amino groups (-NH₂)</div>
                                        <div>• Forms methylol derivatives: R-NH₂ + HCHO → R-NH-CH₂OH</div>
                                        <div>• This blocks amino groups and releases H⁺ ions</div>
                                        <div>• Additional H⁺ requires more NaOH for neutralization</div>
                                        <div>• Titre increase proportional to amino acid content</div>
                                        <div>• Quick method (~10 minutes vs hours for Kjeldahl)</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Method Notes:</div>
                                        <div>• Less accurate than Kjeldahl but much faster</div>
                                        <div>• Factor varies: 1.6-1.8 depending on milk type</div>
                                        <div>• Use neutral formaldehyde (pH 7-8)</div>
                                        <div>• Best for routine quality checks</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-2 border-blue-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Estimated Protein:</strong></div>
                                            <div className="text-3xl font-bold text-blue-600 mt-2">
                                                {result.protein}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 🥛 CASEIN TITRATION CALCULATOR =====
function CaseinTitrationCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        sampleWeight: '10',
        sampleTitre: '',
        blankTitre: '0.1',
        acidNormality: '0.1'
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const W = parseFloat(inputs.sampleWeight);
        const Vs = parseFloat(inputs.sampleTitre);
        const Vb = parseFloat(inputs.blankTitre);
        const N = parseFloat(inputs.acidNormality);
        
        if (isNaN(W) || isNaN(Vs) || isNaN(Vb) || isNaN(N) || W <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid positive numbers for all fields.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const nitrogenPercent = ((Vs - Vb) * N * 1.4007) / W;
            const caseinPercent = nitrogenPercent * 6.38;
            const cPrecise = parseFloat(caseinPercent.toFixed(2));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (cPrecise >= 2.5 && cPrecise <= 2.8) {
                quality = 'Normal Casein Range - Cow Milk';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (cPrecise > 2.8 && cPrecise <= 3.5) {
                quality = 'High Casein - Buffalo Milk';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (cPrecise < 2.5 && cPrecise >= 2.0) {
                quality = 'Below Standard';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            } else if (cPrecise < 2.0) {
                quality = 'Very Low - Check Procedure';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Unusually High';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            const titreDiff = Vs - Vb;
            const nIntermediate = titreDiff * N * 1.4007;
            
            setResult({
                casein: cPrecise,
                nitrogen: parseFloat(nitrogenPercent.toFixed(4)),
                quality,
                qualityColor,
                qualityIcon,
                steps: {
                    titreDiff: titreDiff.toFixed(4),
                    nIntermediate: nIntermediate.toFixed(4)
                },
                inputs: { W, Vs, Vb, N }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-2 border-green-300">
                <div className="flex items-center gap-2 mb-4">
                    <FlaskConical size={20} className="text-green-600" />
                    <span className="font-semibold text-green-700">Casein Determination by Precipitation</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Weight (grams)
                            <span className="text-xs text-gray-500 ml-2">Standard: 10.0g</span>
                        </Label>
                        <Input 
                            name="sampleWeight"
                            type="number" 
                            value={inputs.sampleWeight} 
                            onChange={handleInputChange}
                            placeholder="e.g., 10"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Normality of HCl/H₂SO₄
                            <span className="text-xs text-gray-500 ml-2">Typical: 0.1N</span>
                        </Label>
                        <Input 
                            name="acidNormality"
                            type="number" 
                            step="0.01" 
                            value={inputs.acidNormality} 
                            onChange={handleInputChange}
                            placeholder="e.g., 0.1"
                            className="h-12 text-base font-mono"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Sample Titre Value (ml)
                            <span className="text-xs text-gray-500 ml-2">Precipitate</span>
                        </Label>
                        <Input 
                            name="sampleTitre"
                            type="number" 
                            value={inputs.sampleTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 2.5"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Blank Titre Value (ml)
                            <span className="text-xs text-gray-500 ml-2">Control</span>
                        </Label>
                        <Input 
                            name="blankTitre"
                            type="number" 
                            value={inputs.blankTitre} 
                            onChange={handleInputChange}
                            placeholder="e.g., 0.1"
                            className="h-12 text-base font-mono"
                            step="0.01"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-teal-50 border-2 border-teal-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-teal-800">
                        <strong>Casein Precipitation:</strong> Milk acidified to pH 4.6 (isoelectric point) precipitates casein. Precipitate analyzed by Kjeldahl for nitrogen, then converted to casein using factor 6.38. ~80% of milk protein.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <FlaskConical className="mr-2" size={24} />
                        Calculate Casein %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-green-900 mb-4">
                            🥛 Casein Analysis Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Estimated Casein</div>
                                    <div className="text-5xl font-bold text-green-600 mb-2">
                                        {result.casein}%
                                    </div>
                                    <div className="text-sm text-gray-500">Casein content</div>
                                    <div className="text-xs text-gray-400 mt-2">
                                        Nitrogen: {result.nitrogen}%
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Casein by Precipitation Method
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Sample Weight (W) = <span className="text-green-600 font-bold">{result.inputs.W} g</span></div>
                                        <div>Sample Titre (Vs) = <span className="text-green-600 font-bold">{result.inputs.Vs} ml</span></div>
                                        <div>Blank Titre (Vb) = <span className="text-green-600 font-bold">{result.inputs.Vb} ml</span></div>
                                        <div>Acid Normality (N) = <span className="text-green-600 font-bold">{result.inputs.N} N</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Step 1: Calculate Nitrogen in Precipitate</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: %N = ((Vs - Vb) × N × 14.007) / W
                                        </div>
                                        <div>
                                            ΔV = {result.inputs.Vs} - {result.inputs.Vb} = <span className="text-blue-600 font-bold">{result.steps.titreDiff} ml</span>
                                        </div>
                                        <div>
                                            %N = ({result.steps.titreDiff} × {result.inputs.N} × 1.4007) / {result.inputs.W}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-blue-600 font-bold">{result.nitrogen}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600">
                                            <strong>Step 2: Convert Nitrogen to Casein</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Casein% = Nitrogen% × 6.38
                                        </div>
                                        <div>
                                            Casein% = {result.nitrogen} × 6.38
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-purple-600 font-bold">{result.casein}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-cyan-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Casein Precipitation Procedure:</div>
                                        <div><strong>1. Acidification:</strong> Add dilute acid to milk</div>
                                        <div><strong>2. pH Adjustment:</strong> Bring to pH 4.6 (isoelectric point)</div>
                                        <div><strong>3. Precipitation:</strong> Casein becomes insoluble and precipitates</div>
                                        <div><strong>4. Filtration:</strong> Separate casein from whey</div>
                                        <div><strong>5. Washing:</strong> Remove residual lactose and salts</div>
                                        <div><strong>6. Analysis:</strong> Kjeldahl method on dried precipitate</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Casein Standards:</div>
                                        <div>• Cow Milk: 2.5-2.8% (78-82% of total protein)</div>
                                        <div>• Buffalo Milk: 3.0-3.5%</div>
                                        <div>• Types: α-casein, β-casein, κ-casein</div>
                                        <div>• Isoelectric point: pH 4.6</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-green-600 mt-2">
                                                Casein: {result.casein}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 📊 CASEIN FROM PROTEIN CALCULATOR =====
function CaseinFromProteinCalc() {
    const { toast } = useToast();
    const [protein, setProtein] = useState('');
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const calculate = () => {
        const p = parseFloat(protein);
        
        if (isNaN(p) || p <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter a valid protein percentage.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // Casein is approximately 78-82% of total protein, using factor 0.8
            const caseinPercent = p * 0.8;
            const cPrecise = parseFloat(caseinPercent.toFixed(2));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (cPrecise >= 2.5 && cPrecise <= 2.8) {
                quality = 'Normal Casein Range';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (cPrecise > 2.8) {
                quality = 'High Casein Content';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Below Normal Range';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            const wheyProtein = p * 0.2;
            
            setResult({
                casein: cPrecise,
                whey: parseFloat(wheyProtein.toFixed(2)),
                quality,
                qualityColor,
                qualityIcon,
                inputs: { p }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg border-2 border-orange-300">
                <div className="flex items-center gap-2 mb-4">
                    <Calculator size={20} className="text-orange-600" />
                    <span className="font-semibold text-orange-700">Estimate Casein from Total Protein</span>
                </div>
                
                <div>
                    <Label className="text-sm font-semibold mb-2 block">
                        Total Protein Percentage (%)
                        <span className="text-xs text-gray-500 ml-2">From Kjeldahl or other method</span>
                    </Label>
                    <Input 
                        type="number" 
                        value={protein} 
                        onChange={e => setProtein(e.target.value)}
                        placeholder="e.g., 3.4"
                        className="h-12 text-base font-mono"
                        step="0.1"
                    />
                </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">
                        <strong>Estimation Method:</strong> In cow's milk, casein constitutes approximately 78-82% of total protein (factor 0.8), while whey proteins comprise 18-22% (factor 0.2). This is a quick estimation method.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Percent className="mr-2" size={24} />
                        Estimate Casein %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-orange-900 mb-4">
                            📊 Casein Estimation Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border-2 border-orange-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Estimated Casein</div>
                                        <div className="text-4xl font-bold text-orange-600 mb-1">
                                            ~{result.casein}%
                                        </div>
                                        <div className="text-xs text-gray-500">80% of protein</div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg border-2 border-amber-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Whey Proteins</div>
                                        <div className="text-4xl font-bold text-amber-600 mb-1">
                                            ~{result.whey}%
                                        </div>
                                        <div className="text-xs text-gray-500">20% of protein</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-orange-400 hover:bg-orange-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Details
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Protein Fractionation Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Total Protein = <span className="text-orange-600 font-bold">{result.inputs.p}%</span></div>
                                        <div className="text-xs text-gray-500 mt-2">
                                            Standard milk protein composition factors
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Casein Calculation:</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Casein% = Total Protein × 0.80
                                        </div>
                                        <div>
                                            Casein = {result.inputs.p} × 0.80
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">~{result.casein}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Whey Protein Calculation:</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Whey% = Total Protein × 0.20
                                        </div>
                                        <div>
                                            Whey = {result.inputs.p} × 0.20
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-blue-600 font-bold">~{result.whey}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-cyan-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Milk Protein Fractions:</div>
                                        <div><strong>Casein Proteins (80%):</strong></div>
                                        <div className="ml-3">• αs1-casein: ~38%</div>
                                        <div className="ml-3">• αs2-casein: ~10%</div>
                                        <div className="ml-3">• β-casein: ~36%</div>
                                        <div className="ml-3">• κ-casein: ~13%</div>
                                        <div className="ml-3">• γ-casein: ~3%</div>
                                        
                                        <div className="mt-2"><strong>Whey Proteins (20%):</strong></div>
                                        <div className="ml-3">• β-lactoglobulin: ~50%</div>
                                        <div className="ml-3">• α-lactalbumin: ~20%</div>
                                        <div className="ml-3">• BSA, Immunoglobulins: ~30%</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Key Differences:</div>
                                        <div>• Casein: Precipitates at pH 4.6, forms micelles</div>
                                        <div>• Whey: Soluble at pH 4.6, heat-sensitive</div>
                                        <div>• Casein used for: Cheese, caseinates</div>
                                        <div>• Whey used for: Supplements, infant formula</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-lg border-2 border-orange-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Estimated Composition:</strong></div>
                                            <div className="text-2xl font-bold text-orange-600 mt-2">
                                                Casein: ~{result.casein}%
                                            </div>
                                            <div className="text-lg font-bold text-amber-600 mt-1">
                                                Whey: ~{result.whey}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 🔄 PROTEIN FROM CASEIN CALCULATOR =====
function ProteinFromCaseinCalc() {
    const { toast } = useToast();
    const [casein, setCasein] = useState('');
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const calculate = () => {
        const c = parseFloat(casein);
        
        if (isNaN(c) || c <= 0) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter a valid casein percentage.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            // Protein = Casein / 0.8 (or Casein × 1.25)
            const proteinPercent = c / 0.8;
            const pPrecise = parseFloat(proteinPercent.toFixed(2));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            
            if (pPrecise >= 3.2 && pPrecise <= 3.8) {
                quality = 'Normal Protein Range - Cow Milk';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else if (pPrecise > 3.8) {
                quality = 'High Protein Content';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
            } else {
                quality = 'Below Standard';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
            }
            
            const wheyProtein = pPrecise * 0.2;
            
            setResult({
                protein: pPrecise,
                whey: parseFloat(wheyProtein.toFixed(2)),
                quality,
                qualityColor,
                qualityIcon,
                inputs: { c }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-lg border-2 border-pink-300">
                <div className="flex items-center gap-2 mb-4">
                    <Percent size={20} className="text-pink-600" />
                    <span className="font-semibold text-pink-700">Estimate Total Protein from Casein</span>
                </div>
                
                <div>
                    <Label className="text-sm font-semibold mb-2 block">
                        Casein Percentage (%)
                        <span className="text-xs text-gray-500 ml-2">From precipitation or other method</span>
                    </Label>
                    <Input 
                        type="number" 
                        value={casein} 
                        onChange={e => setCasein(e.target.value)}
                        placeholder="e.g., 2.7"
                        className="h-12 text-base font-mono"
                        step="0.1"
                    />
                </div>
            </div>

            <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-rose-800">
                        <strong>Reverse Calculation:</strong> Since casein is ~80% of total protein, we can estimate total protein by dividing casein by 0.8 (or multiplying by 1.25). Useful when only casein data is available.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-700 hover:from-pink-700 hover:to-rose-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Dna className="mr-2" size={24} />
                        Estimate Total Protein %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-pink-900 mb-4">
                            🔄 Protein Estimation Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border-2 border-pink-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Estimated Total Protein</div>
                                        <div className="text-4xl font-bold text-pink-600 mb-1">
                                            ~{result.protein}%
                                        </div>
                                        <div className="text-xs text-gray-500">Crude protein</div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg border-2 border-rose-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Estimated Whey</div>
                                        <div className="text-4xl font-bold text-rose-600 mb-1">
                                            ~{result.whey}%
                                        </div>
                                        <div className="text-xs text-gray-500">Remaining protein</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-pink-400 hover:bg-pink-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Details
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Reverse Protein Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-pink-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Casein Content = <span className="text-pink-600 font-bold">{result.inputs.c}%</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Total Protein Calculation:</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Total Protein% = Casein% / 0.80
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            (or equivalently: Casein% × 1.25)
                                        </div>
                                        <div className="mt-2">
                                            Protein = {result.inputs.c} / 0.80
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">~{result.protein}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Whey Protein Estimation:</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Whey% = Total Protein% × 0.20
                                        </div>
                                        <div>
                                            Whey = {result.protein} × 0.20
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-blue-600 font-bold">~{result.whey}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-purple-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Calculation Basis:</div>
                                        <div>• Standard milk protein ratio: 80% casein, 20% whey</div>
                                        <div>• If Casein = 80%, then Total = 100%</div>
                                        <div>• Multiplier: 1.00 / 0.80 = 1.25</div>
                                        <div>• Applicable to cow, buffalo, and most mammalian milk</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Use Cases:</div>
                                        <div>• When only casein analysis available</div>
                                        <div>• Quick estimation without full Kjeldahl</div>
                                        <div>• Quality control verification</div>
                                        <div>• Cheese-making calculations</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-lg border-2 border-pink-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Estimated Composition:</strong></div>
                                            <div className="text-3xl font-bold text-pink-600 mt-2">
                                                Protein: ~{result.protein}%
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                (Casein: {result.inputs.c}% + Whey: ~{result.whey}%)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}


// ===== ⚖️ GRAVIMETRIC ANALYSIS CALCULATORS =====
function GravimetricAnalysisCalc() {
    const [activeCalc, setActiveCalc] = useState('moisture-ts');

    const renderCalculator = () => {
        switch (activeCalc) {
            case 'ash': return <AshCalc />;
            case 'fat-on-dry-basis': return <FatOnDryBasisCalc />;
            case 'moisture-ts':
            default: return <MoistureTsCalc />;
        }
    };

    return (
        <CalculatorCard 
            title="⚖️ Gravimetric Analysis Calculators" 
            description="Precise weight-based analysis for dairy product composition"
        >
            <div className="mb-6">
                <Label className="text-base font-semibold mb-3 block">Select Analysis Type</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                        onClick={() => setActiveCalc('moisture-ts')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'moisture-ts'
                                ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                    >
                        <Droplet className={`mx-auto mb-2 ${activeCalc === 'moisture-ts' ? 'text-blue-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'moisture-ts' ? 'text-blue-700' : 'text-gray-700'}`}>
                            Moisture & TS
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Oven drying method</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('ash')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'ash'
                                ? 'border-orange-500 bg-orange-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                        }`}
                    >
                        <Weight className={`mx-auto mb-2 ${activeCalc === 'ash' ? 'text-orange-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'ash' ? 'text-orange-700' : 'text-gray-700'}`}>
                            Ash Content
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Incineration method</div>
                    </button>
                    
                    <button
                        onClick={() => setActiveCalc('fat-on-dry-basis')}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            activeCalc === 'fat-on-dry-basis'
                                ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                        }`}
                    >
                        <Percent className={`mx-auto mb-2 ${activeCalc === 'fat-on-dry-basis' ? 'text-purple-600' : 'text-gray-500'}`} size={28} />
                        <div className={`font-semibold ${activeCalc === 'fat-on-dry-basis' ? 'text-purple-700' : 'text-gray-700'}`}>
                            Fat on Dry Basis
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Moisture correction</div>
                    </button>
                </div>
            </div>
            {renderCalculator()}
        </CalculatorCard>
    );
}

// ===== 💧 MOISTURE & TOTAL SOLIDS CALCULATOR =====
function MoistureTsCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        w1: '', // Empty Dish
        w2: '', // Dish + Sample
        w3: ''  // Dish + Dried
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const numW1 = parseFloat(inputs.w1);
        const numW2 = parseFloat(inputs.w2);
        const numW3 = parseFloat(inputs.w3);
        
        if ([numW1, numW2, numW3].some(isNaN) || numW2 <= numW1 || numW3 < numW1) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid weights. W2 > W1 and W3 ≥ W1",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const sampleWeight = numW2 - numW1;
            const moistureWeight = numW2 - numW3;
            const moisture = (moistureWeight / sampleWeight) * 100;
            const ts = 100 - moisture;
            
            const moisturePrecise = parseFloat(moisture.toFixed(2));
            const tsPrecise = parseFloat(ts.toFixed(2));
            
            // Quality assessment for milk
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let productType = '';
            
            if (tsPrecise >= 12 && tsPrecise <= 13) {
                quality = 'Normal TS - Fresh Cow Milk';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = 'Cow Milk';
            } else if (tsPrecise > 13 && tsPrecise <= 16) {
                quality = 'High TS - Buffalo Milk / Concentrated';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = 'Buffalo Milk';
            } else if (tsPrecise > 16) {
                quality = 'Very High TS - Concentrated/Powder';
                qualityColor = 'text-purple-600';
                qualityIcon = <Info className="inline mr-2" size={20} />;
                productType = 'Concentrated Product';
            } else {
                quality = 'Low TS - Check for Dilution';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Below Standard';
            }
            
            setResult({
                moisture: moisturePrecise,
                ts: tsPrecise,
                quality,
                qualityColor,
                qualityIcon,
                productType,
                calculations: {
                    sampleWeight: sampleWeight.toFixed(4),
                    moistureWeight: moistureWeight.toFixed(4)
                },
                inputs: { numW1, numW2, numW3 }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-4">
                    <Droplet size={20} className="text-blue-600" />
                    <span className="font-semibold text-blue-700">Moisture & Total Solids (AOAC 925.23)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Empty Dish Weight (W₁)
                            <span className="text-xs text-gray-500 ml-2">Tared weight</span>
                        </Label>
                        <Input 
                            name="w1"
                            type="number" 
                            value={inputs.w1} 
                            onChange={handleInputChange}
                            placeholder="e.g., 25.5000"
                            className="h-12 text-base font-mono"
                            step="0.0001"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Dish + Sample Weight (W₂)
                            <span className="text-xs text-gray-500 ml-2">Before drying</span>
                        </Label>
                        <Input 
                            name="w2"
                            type="number" 
                            value={inputs.w2} 
                            onChange={handleInputChange}
                            placeholder="e.g., 28.5000"
                            className="h-12 text-base font-mono"
                            step="0.0001"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Dish + Dried Sample (W₃)
                            <span className="text-xs text-gray-500 ml-2">After drying</span>
                        </Label>
                        <Input 
                            name="w3"
                            type="number" 
                            value={inputs.w3} 
                            onChange={handleInputChange}
                            placeholder="e.g., 25.8500"
                            className="h-12 text-base font-mono"
                            step="0.0001"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-cyan-800">
                        <strong>AOAC Method 925.23:</strong> Samples dried at 102°C for 3 hours in air oven. Typical milk: 87-88% moisture, 12-13% total solids. Use 4-place analytical balance for precision.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Droplet className="mr-2" size={24} />
                        Calculate Moisture & TS
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-blue-900 mb-4">
                            💧 Analysis Results
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-lg border-2 border-blue-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Moisture Content</div>
                                        <div className="text-4xl font-bold text-blue-600 mb-1">
                                            {result.moisture}%
                                        </div>
                                        <div className="text-xs text-gray-500">Water content</div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-5 rounded-lg border-2 border-cyan-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Total Solids (TS)</div>
                                        <div className="text-4xl font-bold text-cyan-600 mb-1">
                                            {result.ts}%
                                        </div>
                                        <div className="text-xs text-gray-500">Dry matter</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">Product Type</div>
                                    <div className="text-xl font-bold text-gray-900 mt-1">{result.productType}</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Gravimetric Analysis Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600"><strong>Given Weights:</strong></div>
                                        <div>Empty Dish (W₁) = <span className="text-blue-600 font-bold">{result.inputs.numW1} g</span></div>
                                        <div>Dish + Sample (W₂) = <span className="text-blue-600 font-bold">{result.inputs.numW2} g</span></div>
                                        <div>Dish + Dried (W₃) = <span className="text-blue-600 font-bold">{result.inputs.numW3} g</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Step 1: Calculate Sample Weight</strong>
                                        </div>
                                        <div>
                                            Sample Weight = W₂ - W₁
                                        </div>
                                        <div className="ml-4">
                                            = {result.inputs.numW2} - {result.inputs.numW1}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.calculations.sampleWeight} g</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600">
                                            <strong>Step 2: Calculate Moisture Weight</strong>
                                        </div>
                                        <div>
                                            Moisture Weight = W₂ - W₃
                                        </div>
                                        <div className="ml-4">
                                            = {result.inputs.numW2} - {result.inputs.numW3}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-purple-600 font-bold">{result.calculations.moistureWeight} g</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600">
                                            <strong>Step 3: Calculate Moisture %</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Moisture% = (Moisture Weight / Sample Weight) × 100
                                        </div>
                                        <div>
                                            Moisture% = ({result.calculations.moistureWeight} / {result.calculations.sampleWeight}) × 100
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-orange-600 font-bold">{result.moisture}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-pink-400">
                                        <div className="text-gray-600">
                                            <strong>Step 4: Calculate Total Solids %</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: TS% = 100 - Moisture%
                                        </div>
                                        <div>
                                            TS% = 100 - {result.moisture}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-pink-600 font-bold">{result.ts}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-cyan-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">AOAC Method 925.23 Procedure:</div>
                                        <div><strong>1. Preparation:</strong> Clean and dry flat-bottom dish (5cm dia.)</div>
                                        <div><strong>2. Weighing:</strong> Tare empty dish, add 2.5-3g sample</div>
                                        <div><strong>3. Drying:</strong> Place in air oven at 102±2°C for 3 hours</div>
                                        <div><strong>4. Cooling:</strong> Cover dish, cool in desiccator (45 min)</div>
                                        <div><strong>5. Final Weight:</strong> Weigh dish + dried sample</div>
                                        <div><strong>6. Calculation:</strong> Determine moisture and TS%</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Typical TS Values (FSSAI):</div>
                                        <div>• Cow Milk: 12.0-13.0% TS (87-88% moisture)</div>
                                        <div>• Buffalo Milk: 15.0-16.0% TS (84-85% moisture)</div>
                                        <div>• Skim Milk: 8.5-9.0% TS</div>
                                        <div>• Whole Milk Powder: 96-97% TS</div>
                                        <div>• Condensed Milk: 28-30% TS</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-2 border-blue-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Results:</strong></div>
                                            <div className="text-2xl font-bold text-blue-600 mt-2">
                                                Moisture: {result.moisture}%
                                            </div>
                                            <div className="text-2xl font-bold text-cyan-600 mt-1">
                                                Total Solids: {result.ts}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 🔥 ASH PERCENTAGE CALCULATOR =====
function AshCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        w1: '', // Empty Crucible
        w2: '', // Crucible + Sample
        w3: ''  // Crucible + Ash
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const numW1 = parseFloat(inputs.w1);
        const numW2 = parseFloat(inputs.w2);
        const numW3 = parseFloat(inputs.w3);
        
        if ([numW1, numW2, numW3].some(isNaN) || numW2 <= numW1 || numW3 < numW1) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid weights. W2 > W1 and W3 ≥ W1",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const sampleWeight = numW2 - numW1;
            const ashWeight = numW3 - numW1;
            const ashPercent = (ashWeight / sampleWeight) * 100;
            const ashPrecise = parseFloat(ashPercent.toFixed(3));
            
            // Quality assessment
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let productType = '';
            
            if (ashPrecise >= 0.65 && ashPrecise <= 0.75) {
                quality = 'Normal Ash Range - Cow Milk';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = 'Cow Milk';
            } else if (ashPrecise > 0.75 && ashPrecise <= 0.90) {
                quality = 'Higher Ash - Buffalo Milk';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = 'Buffalo Milk';
            } else if (ashPrecise < 0.65 && ashPrecise >= 0.50) {
                quality = 'Below Normal - Check Sample';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Low Mineral Content';
            } else if (ashPrecise < 0.50) {
                quality = 'Very Low - Possible Adulteration';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
                productType = 'Below Standard';
            } else {
                quality = 'Unusually High';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Verify Procedure';
            }
            
            setResult({
                ash: ashPrecise,
                quality,
                qualityColor,
                qualityIcon,
                productType,
                calculations: {
                    sampleWeight: sampleWeight.toFixed(4),
                    ashWeight: ashWeight.toFixed(4)
                },
                inputs: { numW1, numW2, numW3 }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg border-2 border-orange-300">
                <div className="flex items-center gap-2 mb-4">
                    <Weight size={20} className="text-orange-600" />
                    <span className="font-semibold text-orange-700">Ash Content Determination (Muffle Furnace Method)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Empty Crucible (W₁)
                            <span className="text-xs text-gray-500 ml-2">Ignited & cooled</span>
                        </Label>
                        <Input 
                            name="w1"
                            type="number" 
                            value={inputs.w1} 
                            onChange={handleInputChange}
                            placeholder="e.g., 35.2500"
                            className="h-12 text-base font-mono"
                            step="0.0001"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Crucible + Sample (W₂)
                            <span className="text-xs text-gray-500 ml-2">Before ignition</span>
                        </Label>
                        <Input 
                            name="w2"
                            type="number" 
                            value={inputs.w2} 
                            onChange={handleInputChange}
                            placeholder="e.g., 40.2500"
                            className="h-12 text-base font-mono"
                            step="0.0001"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Crucible + Ash (W₃)
                            <span className="text-xs text-gray-500 ml-2">After ignition</span>
                        </Label>
                        <Input 
                            name="w3"
                            type="number" 
                            value={inputs.w3} 
                            onChange={handleInputChange}
                            placeholder="e.g., 35.2850"
                            className="h-12 text-base font-mono"
                            step="0.0001"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-red-800">
                        <strong>Muffle Furnace Method:</strong> Sample incinerated at 550-600°C until white/gray ash remains. Ash represents mineral content (Ca, P, Mg, Na, K, Cl). Typical milk ash: 0.65-0.75%.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Weight className="mr-2" size={24} />
                        Calculate Ash %
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-orange-900 mb-4">
                            🔥 Ash Content Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-orange-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Ash Percentage</div>
                                    <div className="text-5xl font-bold text-orange-600 mb-2">
                                        {result.ash}%
                                    </div>
                                    <div className="text-sm text-gray-500">Mineral content</div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">Product Classification</div>
                                    <div className="text-xl font-bold text-gray-900 mt-1">{result.productType}</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-orange-400 hover:bg-orange-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Ash Content Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-orange-400">
                                        <div className="text-gray-600"><strong>Given Weights:</strong></div>
                                        <div>Empty Crucible (W₁) = <span className="text-orange-600 font-bold">{result.inputs.numW1} g</span></div>
                                        <div>Crucible + Sample (W₂) = <span className="text-orange-600 font-bold">{result.inputs.numW2} g</span></div>
                                        <div>Crucible + Ash (W₃) = <span className="text-orange-600 font-bold">{result.inputs.numW3} g</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Step 1: Calculate Sample Weight</strong>
                                        </div>
                                        <div>
                                            Sample Weight = W₂ - W₁
                                        </div>
                                        <div className="ml-4">
                                            = {result.inputs.numW2} - {result.inputs.numW1}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.calculations.sampleWeight} g</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Step 2: Calculate Ash Weight</strong>
                                        </div>
                                        <div>
                                            Ash Weight = W₃ - W₁
                                        </div>
                                        <div className="ml-4">
                                            = {result.inputs.numW3} - {result.inputs.numW1}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-blue-600 font-bold">{result.calculations.ashWeight} g</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600">
                                            <strong>Step 3: Calculate Ash %</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: Ash% = (Ash Weight / Sample Weight) × 100
                                        </div>
                                        <div>
                                            Ash% = ({result.calculations.ashWeight} / {result.calculations.sampleWeight}) × 100
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-purple-600 font-bold">{result.ash}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-red-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Muffle Furnace Procedure:</div>
                                        <div><strong>1. Pre-ignition:</strong> Heat empty crucible at 550°C for 30 min</div>
                                        <div><strong>2. Cooling:</strong> Cool in desiccator, weigh (W₁)</div>
                                        <div><strong>3. Sample:</strong> Add 3-5g sample, weigh (W₂)</div>
                                        <div><strong>4. Charring:</strong> Heat gently on hotplate until charred</div>
                                        <div><strong>5. Incineration:</strong> Place in furnace at 550-600°C for 3-5 hours</div>
                                        <div><strong>6. Completion:</strong> Heat until white/gray ash (no carbon)</div>
                                        <div><strong>7. Final Weight:</strong> Cool in desiccator, weigh (W₃)</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">Ash Content Standards:</div>
                                        <div>• Cow Milk: 0.65-0.75%</div>
                                        <div>• Buffalo Milk: 0.75-0.85%</div>
                                        <div>• Milk Powder: 5-6%</div>
                                        <div>• Cheese: 3-4%</div>
                                        <div>• Major Minerals: Ca, P, Mg, Na, K, Cl</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-lg border-2 border-orange-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-orange-600 mt-2">
                                                Ash: {result.ash}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}

// ===== 📐 FAT ON DRY BASIS CALCULATOR =====
function FatOnDryBasisCalc() {
    const { toast } = useToast();
    const [inputs, setInputs] = useState({
        fatPercent: '',
        moisturePercent: ''
    });
    const [result, setResult] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
        setResult(null);
    };

    const calculate = () => {
        const fat = parseFloat(inputs.fatPercent);
        const moisture = parseFloat(inputs.moisturePercent);
        
        if (isNaN(fat) || isNaN(moisture)) {
            toast({
                title: "❌ Invalid Input",
                description: "Please enter valid numbers for fat and moisture.",
                variant: "destructive"
            });
            return;
        }
        
        if (moisture >= 100) {
            toast({
                title: "⚠️ Invalid Value",
                description: "Moisture content must be less than 100%.",
                variant: "destructive"
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const totalSolids = 100 - moisture;
            const fatOnDryBasis = (fat / totalSolids) * 100;
            const fatPrecise = parseFloat(fatOnDryBasis.toFixed(2));
            
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let productType = '';
            
            if (fatPrecise >= 26 && fatPrecise <= 28) {
                quality = 'Normal Fat-in-DM - Whole Milk Powder';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = 'Whole Milk Powder';
            } else if (fatPrecise > 28 && fatPrecise <= 45) {
                quality = 'High Fat Product';
                qualityColor = 'text-blue-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                productType = 'Cream/Butter Type';
            } else if (fatPrecise < 26 && fatPrecise >= 15) {
                quality = 'Medium Fat Product';
                qualityColor = 'text-yellow-600';
                qualityIcon = <Info className="inline mr-2" size={20} />;
                productType = 'Partially Skimmed';
            } else if (fatPrecise < 15) {
                quality = 'Low Fat Product';
                qualityColor = 'text-cyan-600';
                qualityIcon = <Info className="inline mr-2" size={20} />;
                productType = 'Skim/Low Fat';
            } else {
                quality = 'Very High Fat';
                qualityColor = 'text-purple-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                productType = 'Concentrated Fat Product';
            }
            
            setResult({
                fatOnDryBasis: fatPrecise,
                totalSolids: parseFloat(totalSolids.toFixed(2)),
                quality,
                qualityColor,
                qualityIcon,
                productType,
                inputs: { fat, moisture }
            });
            setIsCalculating(false);
        }, 500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-2 border-purple-300">
                <div className="flex items-center gap-2 mb-4">
                    <Percent size={20} className="text-purple-600" />
                    <span className="font-semibold text-purple-700">Fat on Dry Matter Basis</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Fat % in Product (as is basis)
                            <span className="text-xs text-gray-500 ml-2">Wet basis</span>
                        </Label>
                        <Input 
                            name="fatPercent"
                            type="number" 
                            value={inputs.fatPercent} 
                            onChange={handleInputChange}
                            placeholder="e.g., 25.0"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-sm font-semibold mb-2 block">
                            Moisture % in Product
                            <span className="text-xs text-gray-500 ml-2">Water content</span>
                        </Label>
                        <Input 
                            name="moisturePercent"
                            type="number" 
                            value={inputs.moisturePercent} 
                            onChange={handleInputChange}
                            placeholder="e.g., 4.0"
                            className="h-12 text-base font-mono"
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
                <div className="flex items-start gap-2">
                    <Info size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-indigo-800">
                        <strong>Fat-in-Dry-Matter (FDM):</strong> Expresses fat content relative to dry matter, eliminating moisture variation effects. Essential for comparing products with different moisture levels. FSSAI uses this for powder standards.
                    </div>
                </div>
            </div>

            <Button 
                onClick={calculate} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 shadow-lg"
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <>
                        <Calculator className="mr-2 animate-spin" size={24} />
                        Calculating...
                    </>
                ) : (
                    <>
                        <Percent className="mr-2" size={24} />
                        Calculate Fat on Dry Basis
                    </>
                )}
            </Button>

            {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                    <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 shadow-lg">
                        <AlertTitle className="text-xl font-bold text-purple-900 mb-4">
                            📐 Fat-in-Dry-Matter Result
                        </AlertTitle>
                        <AlertDescription className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600 mb-2">Fat % on Dry Basis</div>
                                    <div className="text-5xl font-bold text-purple-600 mb-2">
                                        {result.fatOnDryBasis}%
                                    </div>
                                    <div className="text-sm text-gray-500">Fat-in-dry-matter (FDM)</div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    <div className="text-xs text-gray-600">Total Solids</div>
                                    <div className="text-lg font-bold text-blue-600">{result.totalSolids}%</div>
                                </div>
                                <div className="bg-pink-50 p-3 rounded-lg border border-pink-200">
                                    <div className="text-xs text-gray-600">Fat (as is)</div>
                                    <div className="text-lg font-bold text-pink-600">{result.inputs.fat}%</div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">Product Type</div>
                                    <div className="text-xl font-bold text-gray-900 mt-1">{result.productType}</div>
                                </div>
                            </div>
                            
                            <div className={`p-4 rounded-lg border-2 ${result.qualityColor} bg-white`}>
                                <div className={`font-semibold text-lg ${result.qualityColor}`}>
                                    {result.qualityIcon}
                                    {result.quality}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setShowSteps(!showSteps)}
                                className="w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all font-semibold text-gray-700"
                            >
                                {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Detailed Calculation
                            </button>
                            
                            {showSteps && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                    <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                        <Calculator size={18} />
                                        Fat-in-Dry-Matter Calculation
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                        <div className="text-gray-600"><strong>Given:</strong></div>
                                        <div>Fat % (as is) = <span className="text-purple-600 font-bold">{result.inputs.fat}%</span></div>
                                        <div>Moisture % = <span className="text-purple-600 font-bold">{result.inputs.moisture}%</span></div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                        <div className="text-gray-600">
                                            <strong>Step 1: Calculate Total Solids</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: TS% = 100 - Moisture%
                                        </div>
                                        <div>
                                            TS = 100 - {result.inputs.moisture}
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-green-600 font-bold">{result.totalSolids}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pl-4 border-l-4 border-blue-400">
                                        <div className="text-gray-600">
                                            <strong>Step 2: Calculate Fat on Dry Basis</strong>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">
                                            Formula: FDM% = (Fat% / TS%) × 100
                                        </div>
                                        <div>
                                            FDM = ({result.inputs.fat} / {result.totalSolids}) × 100
                                        </div>
                                        <div className="ml-4">
                                            = <span className="text-blue-600 font-bold">{result.fatOnDryBasis}%</span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gray-300 my-4"></div>
                                    
                                    <div className="bg-pink-50 p-3 rounded text-xs space-y-2">
                                        <div className="font-sans font-semibold">Why Calculate FDM?</div>
                                        <div>• Eliminates moisture variation effects</div>
                                        <div>• Allows comparison across products with different moisture</div>
                                        <div>• Used in FSSAI standards for powders</div>
                                        <div>• Essential for quality control</div>
                                        <div>• Useful for product standardization</div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                        <div className="font-sans font-semibold">FDM Standards (FSSAI):</div>
                                        <div>• Whole Milk Powder: Min. 26% FDM</div>
                                        <div>• Skim Milk Powder: Max. 1.5% FDM</div>
                                        <div>• Partly Skimmed Milk Powder: 1.5-26% FDM</div>
                                        <div>• Buttermilk Powder: Max. 8% FDM</div>
                                        <div>• Cheese: Min. 45% FDM (varies by type)</div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-2 border-purple-400">
                                        <div className="text-center font-sans">
                                            <div className="text-gray-700"><strong>Final Answer:</strong></div>
                                            <div className="text-3xl font-bold text-purple-600 mt-2">
                                                FDM: {result.fatOnDryBasis}%
                                            </div>
                                            <div className="text-sm text-gray-600 mt-2">
                                                ({result.inputs.fat}% fat in {result.totalSolids}% TS)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}


function FormulasTab() {
    const [expandedFormula, setExpandedFormula] = useState<string | null>(null);

    const toggleFormula = (id: string) => {
        setExpandedFormula(expandedFormula === id ? null : id);
    };

    return (
        <div className="space-y-6">
            {/* SNF CALCULATIONS */}
            <CalculatorCard title="🧮 SNF Calculation Formulas">
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-300">
                        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                            <Calculator size={18} />
                            Richmond's Formula (Original)
                        </h3>
                        <div className="font-mono text-sm bg-white p-3 rounded border border-blue-200">
                            SNF% = (CLR ÷ 4) + (0.2 × Fat%) + 0.14
                        </div>
                        <div className="mt-3 text-xs text-blue-800 space-y-1">
                            <p>• Most widely used formula worldwide</p>
                            <p>• CLR = Corrected Lactometer Reading at 15°C</p>
                            <p>• Constant 0.14 is empirical correction factor</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-300">
                        <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                            <Sparkles size={18} />
                            Modified Richmond's Formulas (Regional)
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded border border-purple-200">
                                <div className="font-semibold text-sm text-purple-700 mb-1">BSI Formula (British):</div>
                                <div className="font-mono text-sm">SNF% = (CLR ÷ 4) + (0.22 × Fat%) + 0.72</div>
                            </div>
                            <div className="bg-white p-3 rounded border border-purple-200">
                                <div className="font-semibold text-sm text-purple-700 mb-1">Zeal Lactometer Formula:</div>
                                <div className="font-mono text-sm">SNF% = (0.25 × LR) + (0.2 × Fat%) + 0.50</div>
                            </div>
                            <div className="bg-white p-3 rounded border border-purple-200">
                                <div className="font-semibold text-sm text-purple-700 mb-1">Pakistan/Engro Formula:</div>
                                <div className="font-mono text-sm">SNF% = (0.25 × LR) + (0.22 × Fat%) + 0.72</div>
                            </div>
                        </div>
                        <div className="mt-3 text-xs text-purple-800">
                            <p>💡 <strong>Secret:</strong> Correction factor varies by region (0.14 to 1.24) due to breed, feed, and climate differences!</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-300">
                        <h3 className="font-semibold text-amber-900 mb-3">Breed-Specific Correction Factors</h3>
                        <Table className="text-sm bg-white">
                            <TableBody>
                                <TableRow><TableCell className="font-medium">Cow Milk (Indian)</TableCell><TableCell className="font-mono">+0.72</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Buffalo Milk</TableCell><TableCell className="font-mono">+0.85</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Jersey Cow</TableCell><TableCell className="font-mono">+0.65</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Holstein Friesian</TableCell><TableCell className="font-mono">+0.60</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Goat Milk</TableCell><TableCell className="font-mono">+0.55</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CalculatorCard>

            {/* TEMPERATURE CORRECTION */}
            <CalculatorCard title="🌡️ Temperature Correction Formulas">
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300">
                        <h3 className="font-semibold text-green-900 mb-3">CLR Temperature Correction</h3>
                        <div className="font-mono text-sm bg-white p-3 rounded border border-green-200 mb-3">
                            CLR = Observed_LR + [(Temp_°C - 15) × 0.2]
                        </div>
                        <div className="bg-white p-3 rounded border border-green-200">
                            <div className="font-semibold text-sm text-green-700 mb-2">Alternative (if calibrated at 20°C):</div>
                            <div className="font-mono text-sm">CLR = Observed_LR + [(Temp_°C - 20) × 0.2]</div>
                        </div>
                        <div className="mt-3 text-xs text-green-800 space-y-1">
                            <p>• Add 0.2 for every 1°C above standard temperature</p>
                            <p>• Subtract 0.2 for every 1°C below standard temperature</p>
                            <p>• Most lactometers calibrated at 15°C or 20°C</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border-2 border-cyan-300">
                        <h3 className="font-semibold text-cyan-900 mb-3">Density Correction (Advanced)</h3>
                        <div className="font-mono text-sm bg-white p-3 rounded border border-cyan-200">
                            ρ₁₅ = ρₜ + [0.00025 × (T - 15)]
                        </div>
                        <div className="mt-2 text-xs text-cyan-800">
                            Where: ρ = density (g/cm³), T = temperature (°C)
                        </div>
                    </div>
                </div>
            </CalculatorCard>

            {/* PEARSON'S SQUARE */}
            <CalculatorCard title="⬜ Pearson's Square Method (Blending/Standardization)">
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-lg border-2 border-violet-300">
                        <h3 className="font-semibold text-violet-900 mb-3">Basic Formula</h3>
                        <div className="bg-white p-4 rounded border border-violet-200 space-y-2">
                            <div className="font-mono text-sm">Parts_A = |Target - B|</div>
                            <div className="font-mono text-sm">Parts_B = |A - Target|</div>
                            <div className="font-mono text-sm text-violet-700 mt-3">Qty_A = (Total × Parts_A) ÷ (Parts_A + Parts_B)</div>
                            <div className="font-mono text-sm text-violet-700">Qty_B = (Total × Parts_B) ÷ (Parts_A + Parts_B)</div>
                        </div>
                        <button
                            onClick={() => toggleFormula('pearson')}
                            className="mt-3 text-sm text-violet-700 hover:text-violet-900 font-semibold flex items-center gap-1"
                        >
                            {expandedFormula === 'pearson' ? '▼' : '▶'} Show Visual Example
                        </button>
                        {expandedFormula === 'pearson' && (
                            <div className="mt-3 bg-white p-4 rounded border border-violet-200">
                                <div className="text-center space-y-2 font-mono text-sm">
                                    <div className="text-gray-700">Cream (40% fat) ———— 3.0 parts</div>
                                    <div className="text-2xl text-violet-700">╲ ╱</div>
                                    <div className="text-xl font-bold text-violet-900">Target: 3.5%</div>
                                    <div className="text-2xl text-violet-700">╱ ╲</div>
                                    <div className="text-gray-700">Skim (0.5% fat) ———— 36.5 parts</div>
                                    <div className="mt-4 text-xs text-gray-600">
                                        For 100L: Cream = (3/39.5)×100 = 7.59L, Skim = 92.41L
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-2 border-orange-300">
                        <h3 className="font-semibold text-orange-900 mb-3">Mass Balance Equations (Alternative)</h3>
                        <div className="bg-white p-3 rounded border border-orange-200 space-y-2 text-sm">
                            <div className="font-mono">Total: W₁ + W₂ = W_total</div>
                            <div className="font-mono">Component: (W₁ × C₁) + (W₂ × C₂) = W_total × C_target</div>
                        </div>
                        <div className="mt-3 text-xs text-orange-800">
                            <p>💡 More accurate for complex standardization with multiple components</p>
                        </div>
                    </div>
                </div>
            </CalculatorCard>

            {/* COMPONENT CALCULATIONS */}
            <CalculatorCard title="🧪 Component Quantity Calculations">
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border-2 border-yellow-300">
                        <h3 className="font-semibold text-yellow-900 mb-3">Weight & Volume Conversions</h3>
                        <div className="space-y-2 bg-white p-3 rounded border border-yellow-200">
                            <div className="font-mono text-sm">Milk_Weight (kg) = Liters × 1.032</div>
                            <div className="font-mono text-sm">Milk_Volume (L) = Weight_kg × 0.970</div>
                            <div className="font-mono text-sm text-yellow-700 mt-3">Fat_kg = Weight_kg × (Fat% ÷ 100)</div>
                            <div className="font-mono text-sm text-yellow-700">SNF_kg = Weight_kg × (SNF% ÷ 100)</div>
                            <div className="font-mono text-sm text-yellow-700">TS_kg = Weight_kg × (TS% ÷ 100)</div>
                        </div>
                        <div className="mt-3 text-xs text-yellow-800">
                            <p>💡 <strong>Secret:</strong> Use 1.032 for accurate conversions (not 1.03)!</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg border-2 border-pink-300">
                        <h3 className="font-semibold text-pink-900 mb-3">Total Solids & CLR Relationship</h3>
                        <div className="bg-white p-3 rounded border border-pink-200 space-y-2">
                            <div className="font-mono text-sm">TS% = Fat% + SNF%</div>
                            <div className="font-mono text-sm">Moisture% = 100 - TS%</div>
                            <div className="font-mono text-sm text-pink-700 mt-3">CLR ≈ 4 × (SNF% - 0.2×Fat% - 0.14)</div>
                        </div>
                    </div>
                </div>
            </CalculatorCard>

            {/* ADVANCED FORMULAS */}
            <CalculatorCard title="🔬 Advanced & Secret Formulas">
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border-2 border-indigo-300">
                        <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                            <Sparkles size={18} />
                            Protein from SNF Estimation
                        </h3>
                        <div className="bg-white p-3 rounded border border-indigo-200 space-y-2">
                            <div className="font-mono text-sm">Protein% ≈ (SNF% - 5.0) × 0.55</div>
                            <div className="font-mono text-sm">Lactose% ≈ SNF% × 0.54</div>
                            <div className="font-mono text-sm">Ash% ≈ SNF% × 0.08</div>
                        </div>
                        <div className="mt-3 text-xs text-indigo-800">
                            <p>💎 Industry secret: SNF composition is ~38% protein, 54% lactose, 8% ash</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-2 border-teal-300">
                        <h3 className="font-semibold text-teal-900 mb-3">Acidity Calculations</h3>
                        <div className="bg-white p-3 rounded border border-teal-200 space-y-2">
                            <div className="font-mono text-sm">°SH = (V × N × 100) ÷ W</div>
                            <div className="font-mono text-sm">Lactic_Acid% = °SH ÷ 111</div>
                            <div className="font-mono text-sm">pH ≈ 6.8 - (0.02 × °SH)</div>
                        </div>
                        <div className="mt-2 text-xs text-teal-800">
                            Where: V=titre(ml), N=normality, W=sample weight, °SH=Soxhlet-Henkel degrees
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border-2 border-red-300">
                        <h3 className="font-semibold text-red-900 mb-3">Energy Content Calculation</h3>
                        <div className="bg-white p-3 rounded border border-red-200 space-y-2">
                            <div className="font-mono text-sm">Energy (kcal/100g) = (Fat% × 9) + (Protein% × 4) + (Lactose% × 4)</div>
                            <div className="font-mono text-sm text-red-700 mt-2">≈ (Fat% × 9) + (SNF% × 4.1)</div>
                        </div>
                        <div className="mt-3 text-xs text-red-800">
                            <p>🔥 Typical whole milk: ~65-70 kcal/100ml</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg border-2 border-emerald-300">
                        <h3 className="font-semibold text-emerald-900 mb-3">Freezing Point Depression</h3>
                        <div className="bg-white p-3 rounded border border-emerald-200 space-y-2">
                            <div className="font-mono text-sm">FPD(°C) ≈ -0.0206 × Lactose%</div>
                            <div className="font-mono text-sm">Added_Water% = [(FPD_pure - FPD_sample) ÷ FPD_pure] × 100</div>
                        </div>
                        <div className="mt-3 text-xs text-emerald-800">
                            <p>❄️ Normal milk FPD: -0.520°C to -0.540°C. Higher values indicate water addition!</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-4 rounded-lg border-2 border-purple-300">
                        <h3 className="font-semibold text-purple-900 mb-3">Cheese Yield Prediction</h3>
                        <div className="bg-white p-3 rounded border border-purple-200 space-y-2">
                            <div className="font-mono text-sm">Yield% ≈ (Fat% × 0.93) + (Casein% × 0.76) - 0.1</div>
                            <div className="font-mono text-sm text-purple-700">Simplified: Yield% ≈ (Fat% + Protein%) × 1.18</div>
                        </div>
                        <div className="mt-3 text-xs text-purple-800">
                            <p>🧀 Van Slyke formula: Accounts for moisture retention and salt addition</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-2 border-amber-300">
                        <h3 className="font-semibold text-amber-900 mb-3">Cream Separation Efficiency</h3>
                        <div className="bg-white p-3 rounded border border-amber-200 space-y-2">
                            <div className="font-mono text-sm">Efficiency% = [(F_cream - F_skim) ÷ (F_milk - F_skim)] × 100</div>
                            <div className="font-mono text-sm text-amber-700">Fat_Loss% = (Skim_kg × F_skim) ÷ (Milk_kg × F_milk) × 100</div>
                        </div>
                        <div className="mt-3 text-xs text-amber-800">
                            <p>⚙️ Modern separators: 98-99.5% efficiency, skim fat: 0.03-0.05%</p>
                        </div>
                    </div>
                </div>
            </CalculatorCard>

            {/* CONVERSION TABLES */}
            <CalculatorCard title="📊 Quick Reference Conversion Tables">
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-lg border-2 border-slate-300">
                        <h3 className="font-semibold text-slate-900 mb-3">Density & Weight Conversions</h3>
                        <Table className="text-sm bg-white">
                            <TableBody>
                                <TableRow><TableCell className="font-medium">1 Liter Milk (3.5% fat)</TableCell><TableCell className="font-mono">1.032 kg</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">1 Kg Milk</TableCell><TableCell className="font-mono">0.970 liters</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">1 Liter Skim Milk</TableCell><TableCell className="font-mono">1.036 kg</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">1 Liter Cream (40% fat)</TableCell><TableCell className="font-mono">1.012 kg</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">1 Liter Water</TableCell><TableCell className="font-mono">1.000 kg</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-300">
                        <h3 className="font-semibold text-blue-900 mb-3">Lactometer Reading Standards</h3>
                        <Table className="text-sm bg-white">
                            <TableBody>
                                <TableRow><TableCell className="font-medium">Cow Milk (Normal)</TableCell><TableCell className="font-mono">27-32 LR</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Buffalo Milk</TableCell><TableCell className="font-mono">32-36 LR</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Water (Pure)</TableCell><TableCell className="font-mono">0 LR</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">10% Water Added</TableCell><TableCell className="font-mono">~25 LR</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Below 26 LR</TableCell><TableCell className="text-red-600">Suspect Adulteration</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300">
                        <h3 className="font-semibold text-green-900 mb-3">Temperature Equivalents</h3>
                        <Table className="text-sm bg-white">
                            <TableBody>
                                <TableRow><TableCell className="font-medium">Standard Lactometer Temp</TableCell><TableCell className="font-mono">15°C (59°F)</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Alternate Standard</TableCell><TableCell className="font-mono">20°C (68°F)</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Body Temperature</TableCell><TableCell className="font-mono">37°C (98.6°F)</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Pasteurization (HTST)</TableCell><TableCell className="font-mono">72°C for 15s</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Pasteurization (LTH)</TableCell><TableCell className="font-mono">63°C for 30min</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border-2 border-rose-300">
                        <h3 className="font-semibold text-rose-900 mb-3">Precision Guidelines</h3>
                        <Table className="text-sm bg-white">
                            <TableBody>
                                <TableRow><TableCell className="font-medium">Fat % (Gerber)</TableCell><TableCell className="font-mono">±0.1%</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">SNF % (Richmond)</TableCell><TableCell className="font-mono">±0.2%</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Lactometer Reading</TableCell><TableCell className="font-mono">±0.5 LR</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Weight (Analytical)</TableCell><TableCell className="font-mono">±0.0001g</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Temperature</TableCell><TableCell className="font-mono">±0.5°C</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CalculatorCard>

            {/* PRO TIPS */}
            <CalculatorCard title="💡 Pro Tips & Industry Secrets">
                <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 p-5 rounded-lg border-2 border-yellow-300">
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                            <Sparkles className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                            <p><strong>Secret #1:</strong> For ultra-precise SNF, use plant-specific correction factors calibrated monthly using gravimetric reference samples.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Sparkles className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                            <p><strong>Secret #2:</strong> Lactometer readings can be manipulated by adding sugar or starch. Always cross-verify with freezing point test!</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Sparkles className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                            <p><strong>Secret #3:</strong> The ratio SNF/Fat should be 2.25-2.35 for genuine milk. Deviations indicate possible adulteration.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Sparkles className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                            <p><strong>Secret #4:</strong> Protein% × 6.38 = Nitrogen%. This reverse calculation helps verify Kjeldahl results quickly.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Sparkles className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                            <p><strong>Secret #5:</strong> For instant SNF check: If (CLR/4) + (Fat×0.25) ≈ SNF-0.5, milk is likely genuine!</p>
                        </div>
                    </div>
                </div>
            </CalculatorCard>
        </div>
    );
}

function SolutionStrengthCalc() {
    const { toast } = useToast();
    const [activeCalc, setActiveCalc] = useState('naoh');
    const [inputs, setInputs] = useState({
        sampleQuantity: "10",
        sampleUnit: 'ml' as 'ml' | 'gm',
        titreValue: "",
        titrant: "hcl",
        titrantNormality: "0.1",
        targetStrength: "",
        currentVolume: "",
        volumeUnit: 'L' as 'L' | 'ml'
    });
    const [currentStrength, setCurrentStrength] = useState<any>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const calculatorInfo = {
        naoh: { 
            label: "Acid Used (ml)", 
            eqWt: 40.0, 
            unit: '%', 
            type: 'base', 
            chemical: 'NaOH',
            fullName: 'Sodium Hydroxide (Caustic Soda)',
            density: 1.05,
            color: 'from-blue-50 to-indigo-50',
            borderColor: 'border-blue-300',
            textColor: 'text-blue-700',
            iconColor: 'text-blue-600',
            ranges: { low: 0.5, normal: 1.5, high: 2.0, max: 4.0 },
            tempRange: '60-85°C',
            purpose: 'Removes fats, proteins, carbohydrates'
        },
        hno3: { 
            label: "Base Used (ml)", 
            eqWt: 63.0, 
            unit: '%', 
            type: 'acid', 
            chemical: 'HNO₃',
            fullName: 'Nitric Acid',
            density: 1.51,
            color: 'from-red-50 to-orange-50',
            borderColor: 'border-red-300',
            textColor: 'text-red-700',
            iconColor: 'text-red-600',
            ranges: { low: 0.5, normal: 1.0, high: 1.5, max: 2.0 },
            tempRange: '50-65°C',
            purpose: 'Removes mineral deposits, calcium, phosphate'
        },
        h3po4: { 
            label: "Base Used (ml)", 
            eqWt: 49.0, 
            unit: '%', 
            type: 'acid', 
            chemical: 'H₃PO₄',
            fullName: 'Phosphoric Acid',
            density: 1.88,
            color: 'from-amber-50 to-yellow-50',
            borderColor: 'border-amber-300',
            textColor: 'text-amber-700',
            iconColor: 'text-amber-600',
            ranges: { low: 0.5, normal: 1.0, high: 1.5, max: 2.0 },
            tempRange: '50-70°C',
            purpose: 'Removes iron deposits, milkstone'
        },
        chlorine: { 
            label: "Sodium Thiosulphate Used (ml)", 
            eqWt: 35.45, 
            unit: 'ppm', 
            type: 'sanitizer', 
            chemical: 'Chlorine',
            fullName: 'Chlorine (Sodium Hypochlorite)',
            density: 1.1,
            color: 'from-green-50 to-emerald-50',
            borderColor: 'border-green-300',
            textColor: 'text-green-700',
            iconColor: 'text-green-600',
            ranges: { low: 50, normal: 100, high: 200, max: 400 },
            tempRange: '20-40°C',
            purpose: 'Sanitization, microbial control'
        }
    };
    
    const currentCalc = calculatorInfo[activeCalc as keyof typeof calculatorInfo];

    const handleInputChange = (field: string, value: any) => {
        setInputs(prev => ({...prev, [field]: value}));
        if (field !== 'targetStrength' && field !== 'currentVolume' && field !== 'volumeUnit') {
            setCurrentStrength(null);
        }
    };

    const calculate = () => {
        const sampleQty = parseFloat(inputs.sampleQuantity);
        const titre = parseFloat(inputs.titreValue);
        const normality = parseFloat(inputs.titrantNormality);
        
        if (isNaN(sampleQty) || isNaN(titre) || isNaN(normality) || sampleQty <= 0) {
            toast({ 
                variant: 'destructive', 
                title: "❌ Invalid Input", 
                description: "Please enter valid sample quantity, titre value, and normality." 
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const sampleVolumeInMl = inputs.sampleUnit === 'gm' ? sampleQty / currentCalc.density : sampleQty;
            
            let strength: number;
            if (currentCalc.unit === '%') {
                strength = (titre * normality * currentCalc.eqWt) / (sampleVolumeInMl * 10);
            } else { // ppm
                strength = (titre * normality * currentCalc.eqWt * 1000) / sampleVolumeInMl;
            }

            const strengthPrecise = parseFloat(strength.toFixed(currentCalc.unit === '%' ? 3 : 1));
            
            // Quality assessment
            let quality = '';
            let qualityColor = '';
            let qualityIcon = null;
            let recommendation = '';
            
            if (strengthPrecise < currentCalc.ranges.low) {
                quality = 'Too Low - Ineffective Cleaning';
                qualityColor = 'text-red-600';
                qualityIcon = <XCircle className="inline mr-2" size={20} />;
                recommendation = 'Increase concentration for effective cleaning';
            } else if (strengthPrecise >= currentCalc.ranges.low && strengthPrecise < currentCalc.ranges.normal) {
                quality = 'Low Range - Light Soil Only';
                qualityColor = 'text-yellow-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                recommendation = 'Suitable for lightly soiled equipment';
            } else if (strengthPrecise >= currentCalc.ranges.normal && strengthPrecise <= currentCalc.ranges.high) {
                quality = 'Optimal Range - Recommended';
                qualityColor = 'text-green-600';
                qualityIcon = <CheckCircle className="inline mr-2" size={20} />;
                recommendation = 'Perfect for standard CIP operations';
            } else if (strengthPrecise > currentCalc.ranges.high && strengthPrecise <= currentCalc.ranges.max) {
                quality = 'High Range - Heavy Soil';
                qualityColor = 'text-blue-600';
                qualityIcon = <Info className="inline mr-2" size={20} />;
                recommendation = 'Use for heavily soiled equipment';
            } else {
                quality = 'Excessively High - Reduce!';
                qualityColor = 'text-orange-600';
                qualityIcon = <AlertCircle className="inline mr-2" size={20} />;
                recommendation = 'Risk of equipment corrosion and waste';
            }
            
            setCurrentStrength({
                value: strengthPrecise,
                quality,
                qualityColor,
                qualityIcon,
                recommendation,
                calculations: {
                    sampleVolumeInMl: sampleVolumeInMl.toFixed(4),
                    numerator: (titre * normality * currentCalc.eqWt).toFixed(4),
                    denominator: currentCalc.unit === '%' ? (sampleVolumeInMl * 10).toFixed(4) : sampleVolumeInMl.toFixed(4)
                },
                inputs: {
                    sampleQty,
                    titre,
                    normality,
                    sampleVolumeInMl
                }
            });
            setIsCalculating(false);
            
            toast({ 
                title: "✅ Calculated Successfully", 
                description: `Current Strength: ${strengthPrecise} ${currentCalc.unit}` 
            });
        }, 500);
    };

    const calculateAdjustment = () => {
        if (!currentStrength) {
            toast({ 
                variant: 'destructive', 
                title: "⚠️ Error", 
                description: "Please calculate current strength first." 
            });
            return;
        }

        const target = parseFloat(inputs.targetStrength);
        const volumeValue = parseFloat(inputs.currentVolume);
        const volumeInLiters = inputs.volumeUnit === 'ml' ? volumeValue / 1000 : volumeValue;

        if (isNaN(target) || isNaN(volumeValue) || target <= 0 || volumeValue <= 0) {
            toast({ 
                variant: 'destructive', 
                title: "❌ Invalid Input", 
                description: "Please enter valid target strength and volume." 
            });
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            let adjustmentData: any = {};
            
            if (currentStrength.value > target) { // Dilution
                const finalVolume = (currentStrength.value * volumeInLiters) / target;
                const waterToAdd = finalVolume - volumeInLiters;
                adjustmentData = {
                    type: 'dilution',
                    action: 'Add Water',
                    amount: waterToAdd.toFixed(3),
                    unit: 'L',
                    finalVolume: finalVolume.toFixed(3),
                    color: 'from-cyan-50 to-blue-50',
                    borderColor: 'border-cyan-300'
                };
            } else if (currentStrength.value < target) { // Fortification
                const neededStrength = target - currentStrength.value;
                
                if (currentCalc.type === 'base' || currentCalc.type === 'sanitizer') {
                    const chemicalToAddInKg = currentCalc.unit === '%' 
                        ? (neededStrength / 100) * volumeInLiters 
                        : (neededStrength * volumeInLiters) / 1000000;
                    const chemicalToAddInGm = chemicalToAddInKg * 1000;
                    adjustmentData = {
                        type: 'fortification',
                        action: `Add ${currentCalc.chemical}`,
                        amount: chemicalToAddInGm.toFixed(2),
                        unit: 'gm',
                        amountKg: chemicalToAddInKg.toFixed(4),
                        color: 'from-green-50 to-emerald-50',
                        borderColor: 'border-green-300'
                    };
                } else { // Acid
                    const massOfPureChemicalToAdd_kg = (neededStrength / 100) * volumeInLiters;
                    const purity = 0.68; // Typical commercial grade
                    const volumeOfStockChemicalToAdd_L = massOfPureChemicalToAdd_kg / (currentCalc.density * purity);
                    adjustmentData = {
                        type: 'fortification',
                        action: `Add ${currentCalc.chemical}`,
                        amount: (volumeOfStockChemicalToAdd_L * 1000).toFixed(2),
                        unit: 'ml',
                        amountL: volumeOfStockChemicalToAdd_L.toFixed(4),
                        color: 'from-orange-50 to-red-50',
                        borderColor: 'border-orange-300'
                    };
                }
            } else {
                adjustmentData = {
                    type: 'none',
                    action: 'No Adjustment Needed',
                    color: 'from-green-50 to-emerald-50',
                    borderColor: 'border-green-300'
                };
            }
            
            setCurrentStrength((prev: any) => ({...prev, adjustment: adjustmentData}));
            setIsCalculating(false);
        }, 300);
    };

    return (
        <CalculatorCard 
            title="🧼 CIP Solution Strength Calculator" 
            description="Check and adjust cleaning solution concentrations for dairy CIP systems"
        >
            <div className="space-y-6">
                {/* Solution Selector */}
                <div>
                    <Label className="text-base font-semibold mb-3 block">Select CIP Solution</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {Object.entries(calculatorInfo).map(([key, info]) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setActiveCalc(key);
                                    setCurrentStrength(null);
                                    setInputs(prev => ({...prev, titreValue: '', targetStrength: '', currentVolume: ''}));
                                }}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                    activeCalc === key
                                        ? `${info.borderColor} bg-gradient-to-br ${info.color} shadow-lg scale-105`
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                <Beaker className={`mx-auto mb-2 ${activeCalc === key ? info.iconColor : 'text-gray-500'}`} size={24} />
                                <div className={`font-semibold text-sm ${activeCalc === key ? info.textColor : 'text-gray-700'}`}>
                                    {info.chemical}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{info.ranges.normal}{info.unit}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Strength Check Section */}
                <div className={`bg-gradient-to-r ${currentCalc.color} p-5 rounded-lg border-2 ${currentCalc.borderColor}`}>
                    <div className="flex items-center gap-2 mb-4">
                        <FlaskConical size={20} className={currentCalc.iconColor} />
                        <h3 className={`font-semibold ${currentCalc.textColor}`}>
                            {currentCalc.fullName} - Strength Check
                        </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Sample Quantity</Label>
                            <div className="flex">
                                <Input 
                                    type="number" 
                                    value={inputs.sampleQuantity} 
                                    onChange={(e) => handleInputChange('sampleQuantity', e.target.value)}
                                    placeholder="e.g., 10"
                                    className="rounded-r-none h-12 text-base font-mono"
                                    step="0.1"
                                />
                                <Select 
                                    value={inputs.sampleUnit} 
                                    onValueChange={(v) => handleInputChange('sampleUnit', v)}
                                >
                                    <SelectTrigger className="w-[80px] rounded-l-none h-12">
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ml">ml</SelectItem>
                                        <SelectItem value="gm">gm</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <Label className="text-sm font-semibold mb-2 block">
                                {currentCalc.label}
                            </Label>
                            <Input 
                                type="number" 
                                value={inputs.titreValue} 
                                onChange={(e) => handleInputChange('titreValue', e.target.value)}
                                placeholder="e.g., 2.5"
                                className="h-12 text-base font-mono"
                                step="0.01"
                            />
                        </div>

                        <div>
                            <Label className="text-sm font-semibold mb-2 block">Titrant Normality</Label>
                            <Input 
                                type="number" 
                                value={inputs.titrantNormality} 
                                onChange={(e) => handleInputChange('titrantNormality', e.target.value)}
                                placeholder="e.g., 0.1"
                                className="h-12 text-base font-mono"
                                step="0.01"
                            />
                        </div>

                        <div className="bg-white p-3 rounded border-2 border-gray-200">
                            <div className="text-xs text-gray-600">Standard Range</div>
                            <div className="text-lg font-bold text-gray-900">
                                {currentCalc.ranges.normal}-{currentCalc.ranges.high}{currentCalc.unit}
                            </div>
                            <div className="text-xs text-gray-500">{currentCalc.tempRange}</div>
                        </div>
                    </div>

                    <div className="mt-4 bg-white p-3 rounded border border-gray-200 text-sm text-gray-700">
                        <strong>Purpose:</strong> {currentCalc.purpose}
                    </div>

                    <Button 
                        onClick={calculate} 
                        className={`w-full h-14 mt-4 text-lg font-semibold bg-gradient-to-r ${currentCalc.color.replace('50', '600').replace('to-', 'to-')} shadow-lg`}
                        disabled={isCalculating}
                    >
                        {isCalculating ? (
                            <>
                                <Calculator className="mr-2 animate-spin" size={24} />
                                Calculating...
                            </>
                        ) : (
                            <>
                                <FlaskConical className="mr-2" size={24} />
                                Check Current Strength
                            </>
                        )}
                    </Button>
                </div>

                {/* Results Section */}
                {currentStrength && (
                    <div className="space-y-4 animate-in fade-in duration-500">
                        <Alert className={`bg-gradient-to-r ${currentCalc.color} border-2 ${currentCalc.borderColor} shadow-lg`}>
                            <AlertTitle className="text-xl font-bold text-gray-900 mb-4">
                                🧪 Current Strength Analysis
                            </AlertTitle>
                            <AlertDescription className="space-y-4">
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                                    <div className="text-center">
                                        <div className="text-sm text-gray-600 mb-2">Current Strength</div>
                                        <div className={`text-5xl font-bold mb-2 ${currentCalc.textColor}`}>
                                            {currentStrength.value} {currentCalc.unit}
                                        </div>
                                        <div className="text-sm text-gray-500">{currentCalc.fullName}</div>
                                    </div>
                                </div>

                                <div className={`p-4 rounded-lg border-2 ${currentStrength.qualityColor} bg-white`}>
                                    <div className={`font-semibold text-lg ${currentStrength.qualityColor}`}>
                                        {currentStrength.qualityIcon}
                                        {currentStrength.quality}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2">
                                        <strong>Recommendation:</strong> {currentStrength.recommendation}
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                                    <div className="flex items-start gap-2">
                                        <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div className="text-sm text-blue-800">
                                            <strong>CIP Standards:</strong> {currentCalc.chemical} at {currentCalc.tempRange} for {currentCalc.type === 'base' ? '15-30' : currentCalc.type === 'acid' ? '20-40' : '5-10'} minutes. {currentCalc.purpose}.
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowSteps(!showSteps)}
                                    className={`w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:${currentCalc.borderColor} transition-all font-semibold text-gray-700`}
                                >
                                    {showSteps ? '▼' : '▶'} {showSteps ? 'Hide' : 'Show'} Calculation Details
                                </button>

                                {showSteps && (
                                    <div className="bg-white p-6 rounded-lg border-2 border-gray-300 space-y-4 font-mono text-sm">
                                        <div className="font-sans font-bold text-gray-700 mb-4 flex items-center gap-2">
                                            <Calculator size={18} />
                                            Titration Calculation
                                        </div>

                                        <div className={`space-y-2 pl-4 border-l-4 ${currentCalc.borderColor}`}>
                                            <div className="text-gray-600"><strong>Given:</strong></div>
                                            <div>Sample Quantity = <span className={`${currentCalc.textColor} font-bold`}>{currentStrength.inputs.sampleQty} {inputs.sampleUnit}</span></div>
                                            <div>Titre Value = <span className={`${currentCalc.textColor} font-bold`}>{currentStrength.inputs.titre} ml</span></div>
                                            <div>Titrant Normality = <span className={`${currentCalc.textColor} font-bold`}>{currentStrength.inputs.normality} N</span></div>
                                            <div>Equivalent Weight = <span className={`${currentCalc.textColor} font-bold`}>{currentCalc.eqWt}</span></div>
                                        </div>

                                        <div className="h-px bg-gray-300 my-4"></div>

                                        {inputs.sampleUnit === 'gm' && (
                                            <div className="space-y-2 pl-4 border-l-4 border-purple-400">
                                                <div className="text-gray-600"><strong>Step 1: Convert to Volume</strong></div>
                                                <div>Volume = Mass ÷ Density</div>
                                                <div className="ml-4">
                                                    = {currentStrength.inputs.sampleQty} ÷ {currentCalc.density}
                                                </div>
                                                <div className="ml-4">
                                                    = <span className="text-purple-600 font-bold">{currentStrength.calculations.sampleVolumeInMl} ml</span>
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-2 pl-4 border-l-4 border-green-400">
                                            <div className="text-gray-600">
                                                <strong>Step {inputs.sampleUnit === 'gm' ? '2' : '1'}: Calculate Strength</strong>
                                            </div>
                                            <div className="text-xs text-gray-500 mb-2">
                                                {currentCalc.unit === '%' 
                                                    ? 'Formula: Strength% = (V × N × EqWt) ÷ (Sample_ml × 10)'
                                                    : 'Formula: Strength(ppm) = (V × N × EqWt × 1000) ÷ Sample_ml'
                                                }
                                            </div>
                                            <div>
                                                Numerator = {currentStrength.inputs.titre} × {currentStrength.inputs.normality} × {currentCalc.eqWt}
                                                {currentCalc.unit === 'ppm' && ' × 1000'}
                                            </div>
                                            <div className="ml-4">
                                                = <span className="text-green-600 font-bold">{currentStrength.calculations.numerator}</span>
                                            </div>
                                            <div>
                                                Denominator = {currentStrength.calculations.sampleVolumeInMl} {currentCalc.unit === '%' && '× 10'}
                                            </div>
                                            <div className="ml-4">
                                                = <span className="text-green-600 font-bold">{currentStrength.calculations.denominator}</span>
                                            </div>
                                            <div>
                                                Strength = {currentStrength.calculations.numerator} ÷ {currentStrength.calculations.denominator}
                                            </div>
                                            <div className="ml-4">
                                                = <span className="text-green-600 font-bold">{currentStrength.value} {currentCalc.unit}</span>
                                            </div>
                                        </div>

                                        <div className="h-px bg-gray-300 my-4"></div>

                                        <div className="bg-yellow-50 p-3 rounded text-xs space-y-1">
                                            <div className="font-sans font-semibold">CIP Application Guidelines:</div>
                                            <div>• Light Soil: {currentCalc.ranges.low}{currentCalc.unit}</div>
                                            <div>• Normal Soil: {currentCalc.ranges.normal}{currentCalc.unit}</div>
                                            <div>• Heavy Soil: {currentCalc.ranges.high}{currentCalc.unit}</div>
                                            <div>• Maximum: {currentCalc.ranges.max}{currentCalc.unit}</div>
                                            <div>• Temperature: {currentCalc.tempRange}</div>
                                        </div>

                                        <div className={`bg-gradient-to-r ${currentCalc.color} p-4 rounded-lg border-2 ${currentCalc.borderColor}`}>
                                            <div className="text-center font-sans">
                                                <div className="text-gray-700"><strong>Final Result:</strong></div>
                                                <div className={`text-3xl font-bold ${currentCalc.textColor} mt-2`}>
                                                    {currentStrength.value} {currentCalc.unit}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Adjustment Section */}
                                <div className="pt-6 border-t-2 border-gray-200">
                                    <h4 className="font-semibold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
                                        <Droplet size={20} />
                                        Strength Adjustment Calculator
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-sm font-semibold mb-2 block">Current Volume</Label>
                                            <div className="flex">
                                                <Input 
                                                    type="number" 
                                                    value={inputs.currentVolume} 
                                                    onChange={(e) => handleInputChange('currentVolume', e.target.value)}
                                                    placeholder="e.g., 1000"
                                                    className="rounded-r-none h-12 text-base font-mono"
                                                />
                                                <Select 
                                                    value={inputs.volumeUnit} 
                                                    onValueChange={(v) => handleInputChange('volumeUnit', v)}
                                                >
                                                    <SelectTrigger className="w-[100px] rounded-l-none h-12">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="L">Liters</SelectItem>
                                                        <SelectItem value="ml">ml</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-semibold mb-2 block">
                                                Target Strength ({currentCalc.unit})
                                            </Label>
                                            <Input 
                                                type="number" 
                                                value={inputs.targetStrength} 
                                                onChange={(e) => handleInputChange('targetStrength', e.target.value)}
                                                placeholder={`e.g., ${currentCalc.ranges.normal}`}
                                                className="h-12 text-base font-mono"
                                                step={currentCalc.unit === '%' ? '0.1' : '10'}
                                            />
                                        </div>
                                    </div>
                                    <Button 
                                        onClick={calculateAdjustment} 
                                        className="w-full h-14 mt-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 shadow-lg"
                                        disabled={isCalculating}
                                    >
                                        {isCalculating ? (
                                            <>
                                                <Calculator className="mr-2 animate-spin" size={24} />
                                                Calculating...
                                            </>
                                        ) : (
                                            <>
                                                <Droplet className="mr-2" size={24} />
                                                Calculate Adjustment
                                            </>
                                        )}
                                    </Button>

                                    {currentStrength.adjustment && (
                                        <Alert className={`mt-4 bg-gradient-to-r ${currentStrength.adjustment.color} border-2 ${currentStrength.adjustment.borderColor} shadow-lg`}>
                                            <AlertTitle className="text-lg font-bold text-gray-900">
                                                📋 Adjustment Instructions
                                            </AlertTitle>
                                            <AlertDescription className="space-y-3 mt-3">
                                                {currentStrength.adjustment.type !== 'none' ? (
                                                    <>
                                                        <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                                            <div className="text-center">
                                                                <div className="text-sm text-gray-600 mb-2">{currentStrength.adjustment.action}</div>
                                                                <div className="text-4xl font-bold text-gray-900 mb-1">
                                                                    {currentStrength.adjustment.amount} {currentStrength.adjustment.unit}
                                                                </div>
                                                                {currentStrength.adjustment.type === 'dilution' && (
                                                                    <div className="text-sm text-gray-500 mt-2">
                                                                        Final Volume: {currentStrength.adjustment.finalVolume} L
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="text-sm text-gray-700 bg-white p-3 rounded border border-gray-200">
                                                            To adjust from <strong>{currentStrength.value}{currentCalc.unit}</strong> to <strong>{inputs.targetStrength}{currentCalc.unit}</strong> in <strong>{inputs.currentVolume} {inputs.volumeUnit}</strong>:
                                                            <div className="mt-2 font-semibold text-gray-900">
                                                                {currentStrength.adjustment.action}: {currentStrength.adjustment.amount} {currentStrength.adjustment.unit}
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className="text-center text-green-700 font-semibold">
                                                        ✅ Current strength matches target. No adjustment needed!
                                                    </div>
                                                )}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </div>
        </CalculatorCard>
    );
}
