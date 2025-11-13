
"use client";
import { useState, Fragment, useCallback, memo, useEffect, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { chemicals, reagentRecipes } from "@/lib/data";
import { 
  ArrowLeft, 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Beaker, 
  FlaskConical, 
  Eye, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { 
  AcidIcon, 
  BaseIcon, 
  DilutionIcon, 
  IndicatorIcon, 
  PercentageSolutionIcon, 
  ReagentIcon, 
  SpiritSolutionIcon, 
  StandardizationIcon, 
  StrengthIcon 
} from "@/components/icons";

type CalculatorType = 'acid-solution' | 'base-solution' | 'indicator-solution' | 'reagent-calculator' | 'percentage-solution' | 'stock-solution' | 'standardization' | 'strength-calculator' | 'spirit-solution';

const indicatorsInfo: Record<string, { name: string; usage: string; endpoint: string; type: ('strong_acid_strong_base' | 'weak_acid_strong_base' | 'strong_acid_weak_base')[] }> = {
    phenolphthalein: { name: 'Phenolphthalein', usage: '2-3 drops of 0.5% solution', endpoint: 'Colorless to Pink', type: ['strong_acid_strong_base', 'weak_acid_strong_base'] },
    methyl_orange: { name: 'Methyl Orange', usage: '2-3 drops of 0.1% solution', endpoint: 'Yellow to Red/Orange', type: ['strong_acid_strong_base', 'strong_acid_weak_base'] },
    'kjeldahl-mixed': { name: 'Kjeldahl Mixed Indicator', usage: 'Few drops', endpoint: 'Green to Violet/Pink', type: ['strong_acid_strong_base', 'strong_acid_weak_base'] },
    'bromothymol-blue': { name: 'Bromothymol Blue', usage: '2-3 drops', endpoint: 'Yellow to Blue (at pH 7)', type: ['strong_acid_strong_base'] },
  };
  const sortedReagentKeys = Object.keys(reagentRecipes).sort((a, b) => 
    reagentRecipes[a as keyof typeof reagentRecipes].name.localeCompare(
      reagentRecipes[b as keyof typeof reagentRecipes].name
    )
  );
  const calculatorsInfo = {
    'acid-solution': { title: "Acids", icon: AcidIcon, component: AcidSolutionCalc, color: "from-red-500 to-orange-500" },
    'base-solution': { title: "Bases", icon: BaseIcon, component: BaseSolutionCalc, color: "from-blue-500 to-cyan-500" },
    'indicator-solution': { title: "Indicators", icon: IndicatorIcon, component: IndicatorCalc, color: "from-purple-500 to-pink-500" },
    'reagent-calculator': { title: "Reagents", icon: ReagentIcon, component: ReagentCalculator, color: "from-green-500 to-emerald-500" },
    'percentage-solution': { title: "Percentage Solution", icon: PercentageSolutionIcon, component: PercentageSolutionCalc, color: "from-yellow-500 to-amber-500" },
    'stock-solution': { title: "Dilution", icon: DilutionIcon, component: DilutionCalc, color: "from-indigo-500 to-violet-500" },
    'standardization': { title: "Standardization", icon: StandardizationIcon, component: StandardizationCalc, color: "from-teal-500 to-cyan-500" },
    'strength-calculator': { title: "Strength", icon: StrengthIcon, component: StrengthCalc, color: "from-rose-500 to-pink-500" },
    'spirit-solution': { title: "Spirit Solution", icon: SpiritSolutionIcon, component: SpiritSolutionCalc, color: "from-fuchsia-500 to-purple-500" },
  };

export function SolutionsPrepModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);
  const handleBack = useCallback(() => setActiveCalculator(null), []);
  
  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;
  const activeColor = activeCalculator ? calculatorsInfo[activeCalculator].color : "";
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) {
            setIsOpen(false);
            setActiveCalculator(null);
        } else {
            setIsOpen(true);
        }
    }}>
      <DialogContent className="max-w-5xl h-[92vh] flex flex-col p-0 sm:p-6">
        {activeCalculator && ActiveCalculatorComponent ? (
            <>
              <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
                  <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-primary/10">
                      <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div className="flex-1">
                      <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${activeColor}`}>
                              {(() => {
                                  const IconComponent = calculatorsInfo[activeCalculator].icon;
                                  return <IconComponent className="h-6 w-6 text-white" />;
                              })()}
                          </div>
                          <div>
                              <DialogTitle className="text-2xl font-bold font-headline">{calculatorsInfo[activeCalculator].title} Calculator</DialogTitle>
                              <DialogDescription>Advanced calculation with step-by-step verification</DialogDescription>
                          </div>
                      </div>
                  </div>
              </DialogHeader>
              <ScrollArea className="h-full mt-6 pr-4">
                  <div className="p-4 sm:p-0">
                      <ActiveCalculatorComponent />
                  </div>
              </ScrollArea>
            </>
        ) : (
            <>
               <DialogHeader className="p-4 sm:p-0">
                  <div className="text-center space-y-2">
                      <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-2">
                          <Beaker className="h-8 w-8 text-white" />
                      </div>
                      <DialogTitle className="text-3xl font-bold font-headline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Solution Preparation Lab
                      </DialogTitle>
                      <DialogDescription className="text-base">
                          Professional calculators with verification for laboratory solutions
                      </DialogDescription>
                  </div>
              </DialogHeader>
              <ScrollArea className="flex-1 mt-6 pr-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                      {Object.entries(calculatorsInfo).map(([key, { title, icon: Icon, color }]) => (
                          <button
                              key={key}
                              onClick={() => setActiveCalculator(key as CalculatorType)}
                              className="group relative flex flex-col items-center justify-center p-6 bg-card hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center aspect-square transition-all duration-300 overflow-hidden"
                          >
                              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                              <div className={`relative p-3 rounded-xl bg-gradient-to-br ${color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                  <Icon className="w-8 h-8 text-white" />
                              </div>
                              <span className="relative font-semibold font-headline text-card-foreground text-sm group-hover:text-primary transition-colors">
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

// Verification Step Component
const VerificationStep = memo(({ 
    stepNumber, 
    title, 
    description, 
    status, 
    children 
}: { 
    stepNumber: number; 
    title: string; 
    description?: string; 
    status: 'pending' | 'active' | 'complete'; 
    children?: React.ReactNode 
}) => {
    const statusConfig = {
        pending: { icon: Info, color: "text-gray-400", bg: "bg-gray-100", border: "border-gray-300" },
        active: { icon: Calculator, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500" },
        complete: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50", border: "border-green-500" }
    };
    
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
        <div className={`flex gap-4 p-4 rounded-xl border-2 ${config.border} ${config.bg} transition-all duration-300`}>
            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${config.bg} border-2 ${config.border} flex items-center justify-center ${config.color} font-bold`}>
                {status === 'complete' ? <Icon className="w-6 h-6" /> : stepNumber}
            </div>
            <div className="flex-1 space-y-2">
                <h4 className={`font-bold text-lg ${config.color}`}>{title}</h4>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
                {children}
            </div>
        </div>
    );
});

VerificationStep.displayName = "VerificationStep";

// Calculation Breakdown Component
const CalculationBreakdown = memo(({ steps }: { steps: { label: string; value: string; formula?: string; unit?: string }[] }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader className="pb-3">
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between hover:bg-transparent p-0">
                            <div className="flex items-center gap-2">
                                <FlaskConical className="h-5 w-5 text-purple-600" />
                                <CardTitle className="text-lg">Calculation Breakdown</CardTitle>
                            </div>
                            {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </Button>
                    </CollapsibleTrigger>
                    <CardDescription>Step-by-step calculation verification</CardDescription>
                </CardHeader>
                <CollapsibleContent>
                    <CardContent className="space-y-3 pt-0">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-lg border border-purple-200">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-sm font-medium text-gray-700">{step.label}:</span>
                                    <Badge variant="outline" className="font-mono text-base bg-purple-100 text-purple-800 border-purple-300">
                                        {step.value} {step.unit || ''}
                                    </Badge>
                                </div>
                                {step.formula && (
                                    <div className="mt-2 p-2 bg-gray-50 rounded text-xs font-mono text-gray-600 overflow-x-auto">
                                        {step.formula}
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </CollapsibleContent>
            </Card>
        </Collapsible>
    );
});

CalculationBreakdown.displayName = "CalculationBreakdown";

// Mobile Verification Component
const MobileVerification = memo(({ 
    inputValues, 
    calculations, 
    warnings 
}: { 
    inputValues: { label: string; value: string }[]; 
    calculations: { label: string; value: string; formula?: string; unit?: string }[];
    warnings?: string[];
}) => {
    return (
        <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-amber-600" />
                    <CardTitle className="text-lg">Verification Summary</CardTitle>
                </div>
                <CardDescription>Review your inputs and calculations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold text-sm text-amber-800 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" /> Input Values
                    </h4>
                    <div className="space-y-2">
                        {inputValues.map((input, idx) => (
                            <div key={idx} className="flex justify-between items-center bg-white p-2 rounded border border-amber-200">
                                <span className="text-sm text-gray-700">{input.label}</span>
                                <span className="font-semibold text-amber-800">{input.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <Separator />
                
                <div>
                    <h4 className="font-semibold text-sm text-green-800 mb-2 flex items-center gap-2">
                        <Calculator className="h-4 w-4" /> Calculated Results
                    </h4>
                    <div className="space-y-2">
                        {calculations.map((calc, idx) => (
                            <div key={idx} className="bg-white p-2 rounded border border-green-200">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-700">{calc.label}</span>
                                    <Badge className="bg-green-100 text-green-800 border-green-300">
                                        {calc.value} {calc.unit || ''}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {warnings && warnings.length > 0 && (
                    <>
                        <Separator />
                        <div>
                            <h4 className="font-semibold text-sm text-red-800 mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4" /> Safety Warnings
                            </h4>
                            <div className="space-y-2">
                                {warnings.map((warning, idx) => (
                                    <Alert key={idx} variant="destructive" className="py-2">
                                        <AlertDescription className="text-sm">{warning}</AlertDescription>
                                    </Alert>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
});

MobileVerification.displayName = "MobileVerification";

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border-2 border-primary/10 mt-4">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-primary font-headline">{title}</h3>
                {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
            </div>
        </div>
        {children}
    </div>
);

function SolutionCalculator({ chemType, title, idPrefix }: { chemType: 'acids' | 'bases' | 'other_reagents'; title: string; idPrefix: string; }) {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [chemicalKey, setChemicalKey] = useState("");
    const [strength, setStrength] = useState("");
    const [volume, setVolume] = useState("");
    const [prepBy, setPrepBy] = useState<'normality' | 'molarity'>('normality');
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);

    const chemical = useCallback(() => {
        if (!chemicalKey) return null;
        return (chemicals as any)[chemType][chemicalKey];
    }, [chemicalKey, chemType])();

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        const str = parseFloat(strength);
        const vol = parseFloat(volume);
        
        if (!chemical || isNaN(str) || isNaN(vol) || str <= 0 || vol <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }
        
        const steps: any[] = [];
        let resultText = '';
        const warnings: string[] = [];
        
        if (chemical.type === 'solid') {
            const equivalentWeight = prepBy === 'normality' ? chemical.molarMass / chemical.nFactor : chemical.molarMass;
            const weight = str * equivalentWeight * (vol / 1000);
            
            steps.push({
                label: prepBy === 'normality' ? 'Equivalent Weight' : 'Molecular Weight',
                value: equivalentWeight.toFixed(4),
                formula: prepBy === 'normality' ? `Molecular Weight / n-factor = ${chemical.molarMass} / ${chemical.nFactor}` : `Molecular Weight = ${chemical.molarMass}`,
                unit: 'g/mol'
            });
            
            steps.push({
                label: 'Volume in Liters',
                value: (vol / 1000).toFixed(4),
                formula: `${vol} mL ÷ 1000`,
                unit: 'L'
            });
            
            steps.push({
                label: 'Required Weight',
                value: weight.toFixed(4),
                formula: `${prepBy === 'normality' ? 'Normality' : 'Molarity'} × Equivalent Weight × Volume = ${str} × ${equivalentWeight.toFixed(4)} × ${(vol/1000).toFixed(4)}`,
                unit: 'g'
            });
            
            resultText = `To prepare <strong>${vol} mL</strong> of <strong>${str} ${prepBy === 'normality' ? 'N' : 'M'}</strong> ${chemical.name}:<br/><br/>
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300 my-3">
                <span class="text-lg">📊 <strong>Dissolve ${weight.toFixed(4)} g</strong> of ${chemical.name}</span>
            </div>
            in distilled water and make the final volume up to <strong>${vol} mL</strong> using a volumetric flask.`;
            
            warnings.push('⚠️ Wear appropriate PPE (gloves, goggles, lab coat)');
            warnings.push('⚠️ Use an analytical balance for accurate weighing');
            
            setVerificationData({
                inputValues: [
                    { label: 'Chemical', value: chemical.name },
                    { label: 'Method', value: prepBy === 'normality' ? 'Normality' : 'Molarity' },
                    { label: 'Required Strength', value: `${str} ${prepBy === 'normality' ? 'N' : 'M'}` },
                    { label: 'Final Volume', value: `${vol} mL` }
                ],
                calculations: [
                    { label: 'Weight Required', value: weight.toFixed(4), unit: 'g' },
                    { label: 'Equivalent/Molecular Weight', value: equivalentWeight.toFixed(4), unit: 'g/mol' }
                ],
                warnings
            });
            
        } else if (chemical.type === 'liquid') {
            const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
            const stockStrength = prepBy === 'normality' ? stockMolarity * chemical.nFactor : stockMolarity;
            const requiredVolume = (str * vol) / stockStrength;
            
            steps.push({
                label: 'Stock Molarity',
                value: stockMolarity.toFixed(4),
                formula: `(Purity × Density × 1000) / Molecular Weight = (${chemical.purity} × ${chemical.density} × 1000) / ${chemical.molarMass}`,
                unit: 'M'
            });
            
            steps.push({
                label: prepBy === 'normality' ? 'Stock Normality' : 'Stock Molarity',
                value: stockStrength.toFixed(4),
                formula: prepBy === 'normality' ? `Stock Molarity × n-factor = ${stockMolarity.toFixed(4)} × ${chemical.nFactor}` : `Stock Molarity = ${stockMolarity.toFixed(4)}`,
                unit: prepBy === 'normality' ? 'N' : 'M'
            });
            
            steps.push({
                label: 'Required Volume (C1V1=C2V2)',
                value: requiredVolume.toFixed(4),
                formula: `(C2 × V2) / C1 = (${str} × ${vol}) / ${stockStrength.toFixed(4)}`,
                unit: 'mL'
            });
            
            resultText = `To prepare <strong>${vol} mL</strong> of <strong>${str} ${prepBy === 'normality' ? 'N' : 'M'}</strong> ${chemical.name}:<br/><br/>
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-300 my-3">
                <span class="text-lg">📊 <strong>Take ${requiredVolume.toFixed(4)} mL</strong> of concentrated ${chemical.name}</span><br/>
                <span class="text-sm text-gray-600">(Purity: ${chemical.purity}%, Density: ${chemical.density} g/mL, Stock: ${stockStrength.toFixed(2)} ${prepBy === 'normality' ? 'N' : 'M'})</span>
            </div>
            and <strong>carefully add it to distilled water</strong>, then make the final volume up to <strong>${vol} mL</strong>.`;
            
            warnings.push('🔴 ALWAYS ADD ACID TO WATER, NEVER WATER TO ACID!');
            warnings.push('⚠️ Add slowly with constant stirring');
            warnings.push('⚠️ Allow solution to cool before final volume adjustment');
            warnings.push('⚠️ Work in a fume hood with proper ventilation');
            
            setVerificationData({
                inputValues: [
                    { label: 'Chemical', value: chemical.name },
                    { label: 'Method', value: prepBy === 'normality' ? 'Normality' : 'Molarity' },
                    { label: 'Required Strength', value: `${str} ${prepBy === 'normality' ? 'N' : 'M'}` },
                    { label: 'Final Volume', value: `${vol} mL` },
                    { label: 'Stock Purity', value: `${chemical.purity}%` },
                    { label: 'Stock Density', value: `${chemical.density} g/mL` }
                ],
                calculations: [
                    { label: 'Volume Required', value: requiredVolume.toFixed(4), unit: 'mL' },
                    { label: 'Stock Strength', value: stockStrength.toFixed(4), unit: prepBy === 'normality' ? 'N' : 'M' },
                    { label: 'Dilution Factor', value: (stockStrength / str).toFixed(2), unit: 'x' }
                ],
                warnings
            });
        }
        
        setCalculationSteps(steps);
        setResult(resultText);
    }, [strength, volume, chemical, prepBy]);
    
    return (
        <CalculatorCard title={title} description="Enter the parameters below to calculate the required amount">
            <form onSubmit={handleSubmit} className="space-y-6">
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Preparation Method" 
                    description="Choose between Normality or Molarity"
                    status={prepBy ? 'complete' : 'active'}
                >
                    <Select value={prepBy} onValueChange={(val) => setPrepBy(val as any)}>
                        <SelectTrigger className="w-full border-2">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="normality">
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-blue-100 text-blue-800">N</Badge>
                                    Prepare by Normality
                                </div>
                            </SelectItem>
                            <SelectItem value="molarity">
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-purple-100 text-purple-800">M</Badge>
                                    Prepare by Molarity
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </VerificationStep>
                
                <VerificationStep 
                    stepNumber={2} 
                    title="Select Chemical" 
                    description="Choose the chemical compound"
                    status={chemicalKey ? 'complete' : 'pending'}
                >
                    <div className="space-y-3">
                        <Select name={`${idPrefix}-select`} value={chemicalKey} onValueChange={setChemicalKey} required>
                            <SelectTrigger className="border-2">
                                <SelectValue placeholder="Select a chemical" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries((chemicals as any)[chemType]).map(([key, value]: [string, any]) => (
                                    <SelectItem key={key} value={key}>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className={value.type === 'solid' ? 'bg-amber-50' : 'bg-blue-50'}>
                                                {value.type === 'solid' ? '🧂' : '💧'}
                                            </Badge>
                                            {value.name}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        
                        {chemical && (
                            <Card className="border-2 border-blue-200 bg-blue-50">
                                <CardContent className="pt-4 space-y-2">
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Type:</span>
                                            <Badge variant="outline">{chemical.type === 'solid' ? 'Solid 🧂' : 'Liquid 💧'}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">MW:</span>
                                            <Badge className="bg-blue-100 text-blue-800">{chemical.molarMass} g/mol</Badge>
                                        </div>
                                        {chemical.nFactor > 0 && (
                                            <>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">n-factor:</span>
                                                    <Badge className="bg-green-100 text-green-800">{chemical.nFactor}</Badge>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Eq. Wt:</span>
                                                    <Badge className="bg-purple-100 text-purple-800">
                                                        {(chemical.molarMass / chemical.nFactor).toFixed(2)} g/eq
                                                    </Badge>
                                                </div>
                                            </>
                                        )}
                                        {chemical.type === 'liquid' && (
                                            <>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Purity:</span>
                                                    <Badge className="bg-yellow-100 text-yellow-800">{chemical.purity}%</Badge>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Density:</span>
                                                    <Badge className="bg-cyan-100 text-cyan-800">{chemical.density} g/mL</Badge>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </VerificationStep>
                
                <VerificationStep 
                    stepNumber={3} 
                    title="Enter Preparation Parameters" 
                    description="Specify the required strength and volume"
                    status={strength && volume ? 'complete' : 'pending'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor={`${idPrefix}-strength`} className="text-base font-semibold">
                                Required {prepBy === 'normality' ? 'Normality (N)' : 'Molarity (M)'}
                            </Label>
                            <Input 
                                type="number" 
                                name={`${idPrefix}-strength`} 
                                placeholder="e.g., 0.1" 
                                step="any" 
                                value={strength} 
                                onChange={(e) => setStrength(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                        <div>
                            <Label htmlFor={`${idPrefix}-volume`} className="text-base font-semibold">
                                Final Volume (mL)
                            </Label>
                            <Input 
                                type="number" 
                                name={`${idPrefix}-volume`} 
                                placeholder="e.g., 1000" 
                                step="any" 
                                value={volume} 
                                onChange={(e) => setVolume(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                    </div>
                </VerificationStep>
                
                <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Solution
                </Button>
                
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {result && verificationData && (
                    <div className="space-y-4 mt-6">
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        <Alert className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <AlertTitle className="text-lg font-bold text-green-800">
                                Preparation Instructions
                            </AlertTitle>
                            <AlertDescription>
                                <div 
                                    className="prose prose-sm max-w-none mt-2" 
                                    dangerouslySetInnerHTML={{__html: result}} 
                                />
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </form>
        </CalculatorCard>
    );
}

function AcidSolutionCalc() { 
    return <SolutionCalculator chemType="acids" title="Prepare Acid Solution" idPrefix="acid" />; 
}

function BaseSolutionCalc() { 
    return <SolutionCalculator chemType="bases" title="Prepare Base Solution" idPrefix="base" />; 
}
function IndicatorCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [indicatorKey, setIndicatorKey] = useState("");
    const [volume, setVolume] = useState("100");
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);

    const indicator = indicatorKey ? chemicals.indicators[indicatorKey as keyof typeof chemicals.indicators] : null;

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        if (!indicatorKey) { 
            setError("Please select an indicator."); 
            return; 
        }
        
        const vol = parseFloat(volume);
        if (isNaN(vol) || vol <= 0) { 
            setError("Please enter a valid positive volume."); 
            return; 
        }
        
        const indicator = chemicals.indicators[indicatorKey as keyof typeof chemicals.indicators];
        const steps: any[] = [];
        let resultText = '';
        const warnings: string[] = [];
        const inputValues: any[] = [
            { label: 'Indicator', value: indicator.name },
            { label: 'Final Volume', value: `${vol} mL` },
            { label: 'Base Volume', value: `${indicator.baseVolume} mL` },
            { label: 'Preparation Type', value: indicator.type.toUpperCase().replace('_', ' ') }
        ];
        
        const scaleFactor = vol / indicator.baseVolume;
        
        steps.push({
            label: 'Scale Factor',
            value: scaleFactor.toFixed(4),
            formula: `Required Volume / Base Volume = ${vol} / ${indicator.baseVolume}`,
            unit: 'x'
        });
        
        const calculations: any[] = [
            { label: 'Scale Factor', value: scaleFactor.toFixed(4), unit: 'x' }
        ];
        
        switch (indicator.type) {
            case 'w/v':
                const weight = indicator.weight! * scaleFactor;
                
                steps.push({
                    label: 'Required Weight',
                    value: weight.toFixed(4),
                    formula: `Base Weight × Scale Factor = ${indicator.weight} g × ${scaleFactor.toFixed(4)}`,
                    unit: 'g'
                });
                
                calculations.push({ label: 'Weight Required', value: weight.toFixed(4), unit: 'g' });
                
                resultText = `To prepare <strong>${vol} mL</strong> of <strong>${indicator.name}</strong> indicator:<br/><br/>
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300 my-3">
                    <span class="text-lg">📊 <strong>Dissolve ${weight.toFixed(4)} g</strong> of ${indicator.name} powder</span>
                </div>
                in <strong>${vol} mL</strong> of <strong>${indicator.solvent}</strong> with gentle stirring.`;
                
                warnings.push('⚠️ Use analytical grade chemicals');
                warnings.push('⚠️ Store in amber bottle away from light');
                warnings.push('⚠️ Label with preparation date');
                break;
                
            case 'v/v':
                const liquidVol = indicator.volume! * scaleFactor;
                
                steps.push({
                    label: 'Stock Volume Required',
                    value: liquidVol.toFixed(4),
                    formula: `Base Volume × Scale Factor = ${indicator.volume} mL × ${scaleFactor.toFixed(4)}`,
                    unit: 'mL'
                });
                
                steps.push({
                    label: 'Dilution Volume',
                    value: (vol - liquidVol).toFixed(4),
                    formula: `Final Volume - Stock Volume = ${vol} - ${liquidVol.toFixed(4)}`,
                    unit: 'mL'
                });
                
                calculations.push({ label: 'Stock Volume', value: liquidVol.toFixed(4), unit: 'mL' });
                calculations.push({ label: 'Dilution Volume', value: (vol - liquidVol).toFixed(4), unit: 'mL' });
                
                resultText = `To prepare <strong>${vol} mL</strong> of <strong>${indicator.name}</strong> indicator:<br/><br/>
                <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-300 my-3">
                    <span class="text-lg">📊 <strong>Take ${liquidVol.toFixed(4)} mL</strong> of stock solution</span>
                </div>
                and dilute with <strong>${indicator.solvent}</strong> to a final volume of <strong>${vol} mL</strong>.`;
                
                warnings.push('⚠️ Use volumetric flask for accuracy');
                warnings.push('⚠️ Mix thoroughly after dilution');
                warnings.push('⚠️ Store in dark conditions');
                break;
                
            case 'complex_liquid':
                const naohVol = indicator.naohVolume! * scaleFactor;
                const finalWeight = indicator.weight! * scaleFactor;
                const waterVol = vol - naohVol;
                
                steps.push({
                    label: 'Indicator Weight',
                    value: finalWeight.toFixed(4),
                    formula: `Base Weight × Scale Factor = ${indicator.weight} g × ${scaleFactor.toFixed(4)}`,
                    unit: 'g'
                });
                
                steps.push({
                    label: 'NaOH Solution Volume',
                    value: naohVol.toFixed(4),
                    formula: `Base NaOH Volume × Scale Factor = ${indicator.naohVolume} mL × ${scaleFactor.toFixed(4)}`,
                    unit: 'mL'
                });
                
                steps.push({
                    label: 'Water Volume',
                    value: waterVol.toFixed(4),
                    formula: `Final Volume - NaOH Volume = ${vol} - ${naohVol.toFixed(4)}`,
                    unit: 'mL'
                });
                
                calculations.push({ label: 'Indicator Weight', value: finalWeight.toFixed(4), unit: 'g' });
                calculations.push({ label: 'NaOH Solution', value: naohVol.toFixed(4), unit: 'mL (N/50)' });
                calculations.push({ label: 'Distilled Water', value: waterVol.toFixed(4), unit: 'mL' });
                
                resultText = `To prepare <strong>${vol} mL</strong> of <strong>${indicator.name}</strong> indicator:<br/><br/>
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-300 my-3">
                    <div class="space-y-2">
                        <p class="text-lg"><strong>Step 1:</strong> Weigh <strong>${finalWeight.toFixed(4)} g</strong> of indicator powder</p>
                        <p class="text-lg"><strong>Step 2:</strong> Add <strong>${naohVol.toFixed(4)} mL</strong> of N/50 NaOH solution</p>
                        <p class="text-lg"><strong>Step 3:</strong> Dilute with distilled water to <strong>${vol} mL</strong></p>
                    </div>
                </div>`;
                
                warnings.push('⚠️ Add NaOH solution first to dissolve indicator');
                warnings.push('⚠️ Mix well between each addition');
                warnings.push('⚠️ Use freshly prepared N/50 NaOH');
                warnings.push('⚠️ Filter if necessary before use');
                break;
                
            case 'mixed':
                resultText = `<div class="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-400">
                    <p class="text-lg font-semibold mb-3">⚠️ Mixed Indicator - Fixed Recipe</p>
                    <p class="mb-2">This is a mixed indicator with a fixed recipe and cannot be scaled easily.</p>
                    <p class="font-medium">Standard Preparation Method:</p>
                    <div class="mt-2 p-3 bg-white rounded border border-amber-300">
                        ${indicator.note || 'Follow standard laboratory protocol'}
                    </div>
                </div>`;
                
                warnings.push('⚠️ Follow exact proportions as specified');
                warnings.push('⚠️ Do not attempt to scale this recipe');
                break;
                
            default:
                resultText = `<div class="p-4 bg-blue-50 rounded-lg border border-blue-300">
                    ${indicator.note || "No specific instructions available. Please consult laboratory manual."}
                </div>`;
                break;
        }
        
        warnings.push('✓ Wear safety goggles and lab coat');
        warnings.push('✓ Work in well-ventilated area');
        
        setVerificationData({
            inputValues,
            calculations,
            warnings
        });
        
        setCalculationSteps(steps);
        setResult(resultText);
    }, [indicatorKey, volume]);

    return (
        <CalculatorCard 
            title="Prepare Indicator Solution" 
            description="Calculate precise amounts for pH indicators and titration indicators"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Indicator" 
                    description="Choose the pH or titration indicator"
                    status={indicatorKey ? 'complete' : 'active'}
                >
                    <div className="space-y-3">
                        <Select name="indicator-select" value={indicatorKey} onValueChange={setIndicatorKey} required>
                            <SelectTrigger className="border-2">
                                <SelectValue placeholder="Select an indicator" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.indicators).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="bg-gradient-to-r from-pink-50 to-purple-50">
                                                {value.type === 'w/v' ? '🧂' : value.type === 'v/v' ? '💧' : value.type === 'complex_liquid' ? '🧪' : '🔬'}
                                            </Badge>
                                            {value.name}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        
                        {indicator && (
                            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                                <CardContent className="pt-4 space-y-3">
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="col-span-2">
                                            <Badge className="bg-purple-600 text-white">Indicator Details</Badge>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Type:</span>
                                            <Badge variant="outline" className="bg-blue-50">
                                                {indicator.type.toUpperCase().replace('_', ' ')}
                                            </Badge>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Base Volume:</span>
                                            <Badge className="bg-green-100 text-green-800">
                                                {indicator.baseVolume} mL
                                            </Badge>
                                        </div>
                                        
                                        {indicator.weight && (
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Base Weight:</span>
                                                <Badge className="bg-amber-100 text-amber-800">
                                                    {indicator.weight} g
                                                </Badge>
                                            </div>
                                        )}
                                        
                                        {indicator.volume && (
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Stock Vol:</span>
                                                <Badge className="bg-cyan-100 text-cyan-800">
                                                    {indicator.volume} mL
                                                </Badge>
                                            </div>
                                        )}
                                        
                                        {indicator.solvent && (
                                            <div className="flex justify-between col-span-2">
                                                <span className="text-gray-600">Solvent:</span>
                                                <Badge className="bg-indigo-100 text-indigo-800">
                                                    {indicator.solvent}
                                                </Badge>
                                            </div>
                                        )}
                                        
                                        {indicator.naohVolume && (
                                            <div className="flex justify-between col-span-2">
                                                <span className="text-gray-600">NaOH (N/50):</span>
                                                <Badge className="bg-rose-100 text-rose-800">
                                                    {indicator.naohVolume} mL
                                                </Badge>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {indicator.note && (
                                        <Alert className="mt-3 bg-white border-purple-300">
                                            <Info className="h-4 w-4" />
                                            <AlertDescription className="text-xs">
                                                {indicator.note}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </VerificationStep>
                
                <VerificationStep 
                    stepNumber={2} 
                    title="Enter Required Volume" 
                    description="Specify the final volume needed"
                    status={volume && parseFloat(volume) > 0 ? 'complete' : 'pending'}
                >
                    <div>
                        <Label htmlFor="indicator-volume" className="text-base font-semibold">
                            Final Volume (mL)
                        </Label>
                        <Input 
                            type="number" 
                            name="indicator-volume" 
                            placeholder="e.g., 100" 
                            step="any" 
                            value={volume} 
                            onChange={e => setVolume(e.target.value)} 
                            className="mt-2 border-2 text-lg"
                            required 
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                            💡 Common volumes: 50 mL, 100 mL, 250 mL, 500 mL
                        </p>
                    </div>
                </VerificationStep>
                
                <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
                >
                    <Beaker className="mr-2 h-5 w-5" />
                    Get Preparation Instructions
                </Button>
                
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {result && verificationData && (
                    <div className="space-y-4 mt-6">
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        {indicatorKey && indicatorsInfo[indicatorKey] && (
                            <Card className="border-2 border-cyan-300 bg-gradient-to-br from-cyan-50 to-blue-50">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <FlaskConical className="h-5 w-5 text-cyan-600" />
                                        <CardTitle className="text-lg">Usage Information</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-white p-3 rounded-lg border border-cyan-200">
                                            <p className="text-xs text-gray-600 mb-1">Usage Amount:</p>
                                            <p className="font-semibold text-cyan-800">
                                                {indicatorsInfo[indicatorKey].usage}
                                            </p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg border border-cyan-200">
                                            <p className="text-xs text-gray-600 mb-1">Color Change:</p>
                                            <p className="font-semibold text-cyan-800">
                                                {indicatorsInfo[indicatorKey].endpoint}
                                            </p>
                                        </div>
                                        <div className="col-span-full bg-white p-3 rounded-lg border border-cyan-200">
                                            <p className="text-xs text-gray-600 mb-2">Suitable for Titrations:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {indicatorsInfo[indicatorKey].type.map((type, idx) => (
                                                    <Badge key={idx} className="bg-cyan-100 text-cyan-800 border-cyan-300">
                                                        {type.replace(/_/g, ' ').toUpperCase()}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                        
                        <Alert className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <AlertTitle className="text-lg font-bold text-green-800">
                                Preparation Instructions
                            </AlertTitle>
                            <AlertDescription>
                                <div 
                                    className="prose prose-sm max-w-none mt-2" 
                                    dangerouslySetInnerHTML={{__html: result}} 
                                />
                            </AlertDescription>
                        </Alert>
                        
                        <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-amber-50">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                                    <CardTitle className="text-lg">Storage Guidelines</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Store in amber/dark glass bottles to prevent light degradation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Label with name, concentration, preparation date, and expiry</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Keep away from direct sunlight and heat sources</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Most indicators remain stable for 6-12 months if stored properly</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Discard if precipitation, discoloration, or contamination occurs</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </form>
        </CalculatorCard>
    );
}

function ReagentCalculator() {
    const [selectedReagent, setSelectedReagent] = useState("");
    const [volume, setVolume] = useState("100");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);

    const recipe = selectedReagent ? reagentRecipes[selectedReagent as keyof typeof reagentRecipes] : null;

    const handleCalculate = useCallback(() => {
        setError(null);
        setResult(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        const vol = parseFloat(volume);
        if (!selectedReagent) {
            setError("Please select a reagent first.");
            return;
        }
        if (isNaN(vol) || vol <= 0) {
            setError("Please enter a valid volume (in ml).");
            return;
        }

        const recipe = reagentRecipes[selectedReagent as keyof typeof reagentRecipes];
        const steps: any[] = [];
        const warnings: string[] = [];
        const inputValues: any[] = [
            { label: 'Reagent', value: recipe.name },
            { label: 'Test Name', value: recipe.testName },
            { label: 'Final Volume', value: `${vol} mL` },
            { label: 'Base Volume', value: '100 mL' },
            { label: 'Preparation Type', value: recipe.type.toUpperCase().replace('_', ' ') }
        ];
        
        let resultHTML = '';
        const calculations: any[] = [];
        const factor = vol / 100;

        steps.push({
            label: 'Scale Factor',
            value: factor.toFixed(4),
            formula: `Required Volume / Base Volume = ${vol} / 100`,
            unit: 'x'
        });

        calculations.push({ label: 'Scale Factor', value: factor.toFixed(4), unit: 'x' });

        switch(recipe.type) {
            case 'w/v':
                resultHTML += `<div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300 my-3">`;
                resultHTML += `<h4 class="font-bold text-lg mb-3 text-green-800">📊 Components Required:</h4>`;
                resultHTML += '<ul class="space-y-2">';
                
                recipe.components.forEach(c => {
                    const calculatedAmount = c.amount * factor;
                    
                    steps.push({
                        label: c.name,
                        value: calculatedAmount.toFixed(4),
                        formula: `${c.amount} ${c.unit} × ${factor.toFixed(4)}`,
                        unit: c.unit
                    });
                    
                    calculations.push({ label: c.name, value: calculatedAmount.toFixed(4), unit: c.unit });
                    
                    resultHTML += `<li class="flex justify-between items-center bg-white p-2 rounded border border-green-200">`;
                    resultHTML += `<span class="font-medium">${c.name}:</span>`;
                    resultHTML += `<span class="font-bold text-green-800">${calculatedAmount.toFixed(4)} ${c.unit}</span>`;
                    resultHTML += `</li>`;
                });
                
                resultHTML += '</ul></div>';
                resultHTML += `<div class="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">`;
                resultHTML += `<p class="text-sm text-gray-700"><strong>Instructions:</strong> ${recipe.instructions}</p>`;
                resultHTML += `</div>`;
                
                warnings.push('⚠️ Weigh chemicals accurately using analytical balance');
                warnings.push('⚠️ Dissolve in distilled water');
                warnings.push('⚠️ Store in properly labeled bottles');
                break;
            
            case 'v/v':
                resultHTML += `<div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-300 my-3">`;
                resultHTML += `<h4 class="font-bold text-lg mb-3 text-blue-800">📊 Liquid Components:</h4>`;
                resultHTML += '<ul class="space-y-2">';
                
                recipe.components.forEach(c => {
                    const calculatedAmount = c.amount * factor;
                    
                    steps.push({
                        label: c.name,
                        value: calculatedAmount.toFixed(4),
                        formula: `${c.amount} ${c.unit} × ${factor.toFixed(4)}`,
                        unit: c.unit
                    });
                    
                    calculations.push({ label: c.name, value: calculatedAmount.toFixed(4), unit: c.unit });
                    
                    resultHTML += `<li class="flex justify-between items-center bg-white p-2 rounded border border-blue-200">`;
                    resultHTML += `<span class="font-medium">${c.name}:</span>`;
                    resultHTML += `<span class="font-bold text-blue-800">${calculatedAmount.toFixed(4)} ${c.unit}</span>`;
                    resultHTML += `</li>`;
                });
                
                resultHTML += '</ul></div>';
                resultHTML += `<div class="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">`;
                resultHTML += `<p class="text-sm text-gray-700"><strong>Instructions:</strong> ${recipe.instructions}</p>`;
                resultHTML += `</div>`;
                
                warnings.push('⚠️ Use volumetric pipettes for accuracy');
                warnings.push('⚠️ Mix thoroughly after adding each component');
                warnings.push('⚠️ Add liquids in the order specified');
                break;
            
            case 'w/v_in_acid':
                resultHTML += `<div class="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border-2 border-red-300 my-3">`;
                resultHTML += `<h4 class="font-bold text-lg mb-3 text-red-800">📊 Components (In Acid Solution):</h4>`;
                resultHTML += '<ul class="space-y-2">';
                
                recipe.components.forEach(c => {
                    const calculatedAmount = c.amount * factor;
                    
                    steps.push({
                        label: c.name,
                        value: calculatedAmount.toFixed(4),
                        formula: `${c.amount} ${c.unit} × ${factor.toFixed(4)}`,
                        unit: c.unit
                    });
                    
                    calculations.push({ label: c.name, value: calculatedAmount.toFixed(4), unit: c.unit });
                    
                    resultHTML += `<li class="flex justify-between items-center bg-white p-2 rounded border border-red-200">`;
                    resultHTML += `<span class="font-medium">${c.name}:</span>`;
                    resultHTML += `<span class="font-bold text-red-800">${calculatedAmount.toFixed(4)} ${c.unit}</span>`;
                    resultHTML += `</li>`;
                });
                
                resultHTML += '</ul></div>';
                resultHTML += `<div class="mt-3 p-3 bg-yellow-50 rounded-lg border-2 border-yellow-400">`;
                resultHTML += `<p class="text-sm text-gray-700"><strong>⚠️ Important:</strong> ${recipe.instructions}</p>`;
                resultHTML += `</div>`;
                
                warnings.push('🔴 Work in fume hood - acid vapors present');
                warnings.push('🔴 ALWAYS add acid to water, never reverse');
                warnings.push('⚠️ Wear acid-resistant gloves and face shield');
                warnings.push('⚠️ Allow solution to cool before use');
                break;
            
            case 'complex':
                resultHTML += `<div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-300 my-3">`;
                resultHTML += `<h4 class="font-bold text-lg mb-3 text-purple-800">📊 Multi-Step Preparation:</h4>`;
                resultHTML += '<ul class="space-y-2">';
                
                recipe.components.forEach((c, idx) => {
                    const calculatedAmount = c.amount * factor;
                    
                    steps.push({
                        label: `Step ${idx + 1}: ${c.name}`,
                        value: calculatedAmount.toFixed(3),
                        formula: `${c.amount} ${c.unit} × ${factor.toFixed(4)}`,
                        unit: c.unit
                    });
                    
                    calculations.push({ label: c.name, value: calculatedAmount.toFixed(3), unit: c.unit });
                    
                    resultHTML += `<li class="bg-white p-3 rounded border border-purple-200">`;
                    resultHTML += `<div class="flex justify-between items-center mb-1">`;
                    resultHTML += `<span class="font-medium text-purple-700">Step ${idx + 1}: ${c.name}</span>`;
                    resultHTML += `<span class="font-bold text-purple-800">${calculatedAmount.toFixed(3)} ${c.unit}</span>`;
                    resultHTML += `</div>`;
                    resultHTML += `</li>`;
                });
                
                resultHTML += '</ul></div>';
                resultHTML += `<div class="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">`;
                resultHTML += `<p class="text-sm text-gray-700"><strong>Procedure:</strong> ${recipe.instructions}</p>`;
                resultHTML += `</div>`;
                
                warnings.push('⚠️ Follow steps in exact order');
                warnings.push('⚠️ Allow adequate mixing time between steps');
                warnings.push('⚠️ Note preparation date and expiry');
                break;
            
            case 'ratio':
                const totalParts = recipe.components.reduce((sum, c) => sum + c.ratio, 0);
                
                steps.push({
                    label: 'Total Parts',
                    value: totalParts.toString(),
                    formula: recipe.components.map(c => c.ratio).join(' + '),
                    unit: 'parts'
                });
                
                resultHTML += `<div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-2 border-teal-300 my-3">`;
                resultHTML += `<h4 class="font-bold text-lg mb-3 text-teal-800">📊 Ratio-Based Mixing (Total: ${totalParts} parts):</h4>`;
                resultHTML += '<ul class="space-y-2">';
                
                recipe.components.forEach(c => {
                    const calculatedAmount = (vol * c.ratio / totalParts);
                    
                    steps.push({
                        label: c.name,
                        value: calculatedAmount.toFixed(3),
                        formula: `(${vol} mL × ${c.ratio}) / ${totalParts}`,
                        unit: 'mL'
                    });
                    
                    calculations.push({ label: `${c.name} (${c.ratio} parts)`, value: calculatedAmount.toFixed(3), unit: 'mL' });
                    
                    resultHTML += `<li class="bg-white p-3 rounded border border-teal-200">`;
                    resultHTML += `<div class="flex justify-between items-center">`;
                    resultHTML += `<div><span class="font-medium">${c.name}</span><br/><span class="text-xs text-gray-500">Ratio: ${c.ratio} parts</span></div>`;
                    resultHTML += `<span class="font-bold text-teal-800">${calculatedAmount.toFixed(3)} mL</span>`;
                    resultHTML += `</div>`;
                    resultHTML += `</li>`;
                });
                
                resultHTML += '</ul></div>';
                resultHTML += `<div class="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">`;
                resultHTML += `<p class="text-sm text-gray-700"><strong>Mixing Instructions:</strong> ${recipe.instructions}</p>`;
                resultHTML += `</div>`;
                
                warnings.push('⚠️ Maintain exact ratio for accurate results');
                warnings.push('⚠️ Mix components in order listed');
                warnings.push('⚠️ Use graduated cylinders for volume measurement');
                break;

            case 'fixed':
                resultHTML += `<div class="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-400">`;
                resultHTML += `<h4 class="font-bold text-lg mb-3 text-amber-800">⚠️ Fixed Recipe - Cannot Scale</h4>`;
                resultHTML += `<p class="text-gray-700 mb-3">${recipe.instructions}</p>`;
                resultHTML += `<div class="bg-white p-3 rounded border border-amber-300">`;
                resultHTML += `<p class="text-sm font-semibold text-amber-900">Standard Preparation:</p>`;
                resultHTML += `<ul class="list-disc list-inside mt-2 space-y-1">`;
                recipe.components.forEach(c => {
                    resultHTML += `<li>${c.name}: ${c.amount} ${c.unit}</li>`;
                });
                resultHTML += `</ul></div></div>`;
                
                warnings.push('🔴 Do NOT scale this recipe');
                warnings.push('⚠️ Use exact amounts as specified');
                warnings.push('⚠️ Follow standard laboratory protocol');
                break;
        }

        warnings.push('✓ Wear appropriate PPE');
        warnings.push('✓ Label container with reagent name and date');
        warnings.push('✓ Store as per chemical compatibility guidelines');

        setVerificationData({
            inputValues,
            calculations,
            warnings
        });
        
        setCalculationSteps(steps);
        setResult(resultHTML);
    }, [selectedReagent, volume]);

    return (
        <CalculatorCard 
            title="Reagent Calculator" 
            description="Calculate precise amounts for laboratory reagent preparation"
        >
            <div className="space-y-6">
                {/* Step 1: Reagent Selection */}
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Reagent" 
                    description="Choose the reagent you want to prepare"
                    status={selectedReagent ? 'complete' : 'active'}
                >
                    <div className="space-y-3">
                        <Select value={selectedReagent} onValueChange={setSelectedReagent}>
                            <SelectTrigger className="border-2">
                                <SelectValue placeholder="-- Please select a reagent --" />
                            </SelectTrigger>
                            <SelectContent>
                                {sortedReagentKeys.map((key, index) => {
                                    const reagent = reagentRecipes[key as keyof typeof reagentRecipes];
                                    return (
                                        <SelectItem key={key} value={key}>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline" className={
                                                    reagent.type === 'w/v' ? 'bg-green-50' :
                                                    reagent.type === 'v/v' ? 'bg-blue-50' :
                                                    reagent.type === 'w/v_in_acid' ? 'bg-red-50' :
                                                    reagent.type === 'complex' ? 'bg-purple-50' :
                                                    reagent.type === 'ratio' ? 'bg-teal-50' :
                                                    'bg-amber-50'
                                                }>
                                                    {index + 1}
                                                </Badge>
                                                <div className="flex flex-col">
                                                    <span className="font-semibold">{reagent.name}</span>
                                                    <span className="text-xs text-muted-foreground">{reagent.testName}</span>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                        
                        {recipe && (
                            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                                <CardContent className="pt-4 space-y-3">
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="col-span-2">
                                            <Badge className="bg-green-600 text-white">Reagent Details</Badge>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Test Name:</span>
                                            <Badge variant="outline" className="bg-blue-50">
                                                {recipe.testName}
                                            </Badge>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Type:</span>
                                            <Badge className="bg-purple-100 text-purple-800">
                                                {recipe.type.toUpperCase().replace('_', ' ')}
                                            </Badge>
                                        </div>
                                        
                                        <div className="col-span-2 flex justify-between">
                                            <span className="text-gray-600">Components:</span>
                                            <Badge className="bg-amber-100 text-amber-800">
                                                {recipe.components.length} items
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </VerificationStep>
                
                {/* Step 2: Volume Entry */}
                <VerificationStep 
                    stepNumber={2} 
                    title="Enter Required Volume" 
                    description="Specify the final volume needed (base: 100 mL)"
                    status={volume && parseFloat(volume) > 0 ? 'complete' : 'pending'}
                >
                    <div>
                        <Label htmlFor="reagent-volume" className="text-base font-semibold">
                            Final Volume (mL)
                        </Label>
                        <Input 
                            type="number" 
                            id="reagent-volume" 
                            value={volume} 
                            onChange={e => setVolume(e.target.value)} 
                            placeholder="e.g., 100" 
                            className="mt-2 border-2 text-lg"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                            💡 Common volumes: 50 mL, 100 mL, 250 mL, 500 mL, 1000 mL
                        </p>
                    </div>
                </VerificationStep>
                
                {/* Calculate Button */}
                <Button 
                    onClick={handleCalculate} 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                >
                    <FlaskConical className="mr-2 h-5 w-5" />
                    Calculate Reagent Amounts
                </Button>
                
                {/* Error Display */}
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {/* Results Display */}
                {result && verificationData && (
                    <div className="space-y-4 mt-6">
                        {/* Mobile Verification Summary */}
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {/* Calculation Breakdown */}
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        {/* Final Instructions */}
                        <Alert className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <AlertTitle className="text-lg font-bold text-green-800">
                                Preparation Instructions
                            </AlertTitle>
                            <AlertDescription>
                                <div 
                                    className="prose prose-sm max-w-none mt-2" 
                                    dangerouslySetInnerHTML={{ __html: result }} 
                                />
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </div>
        </CalculatorCard>
    );
}
function StandardizationCalc() {
    const [standardizationMethod, setStandardizationMethod] = useState<'primary' | 'secondary'>('primary');
    const [calculatedNormality, setCalculatedNormality] = useState<number | null>(null);
    const [adjustmentResult, setAdjustmentResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);
    
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};
    const [indicatorKey, setIndicatorKey] = useState('');
    const [primaryTitrantKey, setPrimaryTitrantKey] = useState("");
    const [primaryStdKey, setPrimaryStdKey] = useState("");
    const [stdWeight, setStdWeight] = useState("");
    const [stdVol, setStdVol] = useState("100");
    const [titrantVol, setTitrantVol] = useState("");
    const [primaryStdTakenVol, setPrimaryStdTakenVol] = useState("10");
    const [secondaryAnalyteKey, setSecondaryAnalyteKey] = useState("");
    const [secondaryTitrantKey, setSecondaryTitrantKey] = useState("");
    const [secondaryTitrantNormality, setSecondaryTitrantNormality] = useState("");
    const [analyteVolume, setAnalyteVolume] = useState("10");
    const [secondaryTitrantVolume, setSecondaryTitrantVolume] = useState("");
    const [targetNormality, setTargetNormality] = useState("");
    const [currentVolume, setCurrentVolume] = useState("");
    const [volumeUnit, setVolumeUnit] = useState<'L'|'ml'>('L');

    const selectedIndicator = indicatorKey ? indicatorsInfo[indicatorKey] : null;
    
    const resetAll = useCallback(() => {
        setCalculatedNormality(null);
        setAdjustmentResult(null);
        setError(null);
        setTargetNormality("");
        setCurrentVolume("");
        setIndicatorKey('');
        setVerificationData(null);
        setCalculationSteps([]);
    }, []);

    useEffect(() => {
        resetAll();
    }, [standardizationMethod, primaryTitrantKey, primaryStdKey, secondaryAnalyteKey, secondaryTitrantKey, resetAll]);
    
    // ↓↓↓ FIX 1: useCallback() ko useMemo() se replace karo ↓↓↓
    const { availableTitrants, availableIndicators } = useMemo(() => {
        const acids = Object.keys(chemicals.acids || {});
        const bases = Object.keys(chemicals.bases || {});
        let titrants: string[] = [];
        let indicators: string[] = [];
        let titrationType: 'strong_acid_strong_base' | 'weak_acid_strong_base' | 'strong_acid_weak_base' | null = null;
        
        let analyteKey = standardizationMethod === 'primary' ? primaryStdKey : secondaryAnalyteKey;
        let titrantKey = standardizationMethod === 'primary' ? primaryTitrantKey : secondaryTitrantKey;
        
        const isAnalyteBase = bases.includes(analyteKey) || (chemicals.primaryStandards?.[analyteKey as keyof typeof chemicals.primaryStandards]?.type === 'base');
        const isTitrantBase = bases.includes(titrantKey);
        
        if (isAnalyteBase && !isTitrantBase) titrationType = 'strong_acid_weak_base';
        if (!isAnalyteBase && isTitrantBase) titrationType = 'weak_acid_strong_base'; 

        if (analyteKey && titrantKey) {
             const analyte = allChemicals[analyteKey as keyof typeof allChemicals] || chemicals.primaryStandards?.[analyteKey as keyof typeof chemicals.primaryStandards];
             const titrant = allChemicals[titrantKey as keyof typeof allChemicals];
             if(analyte && titrant && !titrationType) {
                 titrationType = 'strong_acid_strong_base'; 
             }
        }
        
        if (titrationType && indicatorsInfo) {
            indicators = Object.keys(indicatorsInfo).filter(key => 
                indicatorsInfo[key]?.type?.includes(titrationType!)
            );
        }

        if (secondaryAnalyteKey) {
            if (acids.includes(secondaryAnalyteKey)) titrants = bases;
            else if (bases.includes(secondaryAnalyteKey)) titrants = acids;
        }
        
        return { 
            availableTitrants: titrants || [], 
            availableIndicators: indicators || [] 
        };
    }, [standardizationMethod, primaryTitrantKey, primaryStdKey, secondaryAnalyteKey, secondaryTitrantKey, allChemicals]);

    useEffect(() => {
        if (availableTitrants.length > 0 && !availableTitrants.includes(secondaryTitrantKey)) {
            setSecondaryTitrantKey("");
        }
    }, [availableTitrants, secondaryTitrantKey]);

    const handleCalculateNormality = useCallback(() => {
        setCalculatedNormality(null);
        setAdjustmentResult(null);
        setError(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        const steps: any[] = [];
        const warnings: string[] = [];
        const inputValues: any[] = [];
        const calculations: any[] = [];
        
        if (standardizationMethod === 'primary') {
            const weight = parseFloat(stdWeight);
            const vol1 = parseFloat(stdVol);
            const vol2 = parseFloat(titrantVol);
            const volTaken = parseFloat(primaryStdTakenVol);
            
            if (!primaryStdKey || !primaryTitrantKey || isNaN(weight) || isNaN(vol1) || isNaN(vol2) || isNaN(volTaken) || [weight, vol1, vol2, volTaken].some(v => v <= 0)) {
                setError('Please enter valid positive numbers in all fields for primary standardization.');
                return;
            }
            
            const primaryStd = chemicals.primaryStandards[primaryStdKey as keyof typeof chemicals.primaryStandards];
            const titrant = allChemicals[primaryTitrantKey as keyof typeof allChemicals];
            
            inputValues.push(
                { label: 'Standardization Method', value: 'Primary Standard' },
                { label: 'Primary Standard', value: primaryStd.name },
                { label: 'Titrant (Solution)', value: titrant.name },
                { label: 'Weight of Standard', value: `${weight} g` },
                { label: 'Volume of Standard Solution', value: `${vol1} mL` },
                { label: 'Volume Taken for Titration', value: `${volTaken} mL` },
                { label: 'Titrant Volume Used', value: `${vol2} mL` }
            );
            
            const equivalentWeight = primaryStd.molarMass / primaryStd.nFactor;
            
            steps.push({
                label: 'Equivalent Weight',
                value: equivalentWeight.toFixed(4),
                formula: `Molecular Weight / n-factor = ${primaryStd.molarMass} / ${primaryStd.nFactor}`,
                unit: 'g/eq'
            });
            
            const n1 = (weight * 1000) / (equivalentWeight * vol1);
            
            steps.push({
                label: 'Normality of Standard Solution (N₁)',
                value: n1.toFixed(6),
                formula: `(Weight × 1000) / (Eq. Weight × Volume) = (${weight} × 1000) / (${equivalentWeight.toFixed(4)} × ${vol1})`,
                unit: 'N'
            });
            
            const n2 = (n1 * volTaken) / vol2;
            
            steps.push({
                label: 'Normality of Titrant (N₂)',
                value: n2.toFixed(6),
                formula: `N₁V₁ = N₂V₂ → N₂ = (N₁ × V₁) / V₂ = (${n1.toFixed(6)} × ${volTaken}) / ${vol2}`,
                unit: 'N'
            });
            
            calculations.push(
                { label: 'Equivalent Weight', value: equivalentWeight.toFixed(4), unit: 'g/eq' },
                { label: 'Standard Solution Normality', value: n1.toFixed(6), unit: 'N' },
                { label: 'Calculated Titrant Normality', value: n2.toFixed(6), unit: 'N' }
            );
            
            setCalculatedNormality(n2);
            
            warnings.push('✓ Primary standardization provides highest accuracy');
            warnings.push('✓ Use analytical balance for weighing');
            warnings.push('✓ Perform titration in triplicate for best results');
            
        } else { // secondary
            const n1 = parseFloat(secondaryTitrantNormality);
            const v1 = parseFloat(secondaryTitrantVolume);
            const v2 = parseFloat(analyteVolume);
            
            if (!secondaryAnalyteKey || !secondaryTitrantKey || isNaN(n1) || isNaN(v1) || isNaN(v2) || [n1, v1, v2].some(v => v <= 0)) {
                setError('Please fill all fields for secondary standardization with valid positive numbers.');
                return;
            }
            
            const analyte = allChemicals[secondaryAnalyteKey as keyof typeof allChemicals];
            const titrant = allChemicals[secondaryTitrantKey as keyof typeof allChemicals];
            
            inputValues.push(
                { label: 'Standardization Method', value: 'Secondary Standard' },
                { label: 'Analyte (Solution to Standardize)', value: analyte.name },
                { label: 'Titrant (Standard Solution)', value: titrant.name },
                { label: 'Titrant Normality (N₁)', value: `${n1} N` },
                { label: 'Titrant Volume (V₁)', value: `${v1} mL` },
                { label: 'Analyte Volume (V₂)', value: `${v2} mL` }
            );
            
            steps.push({
                label: 'Using Equivalence Formula',
                value: 'N₁V₁ = N₂V₂',
                formula: `At equivalence point, number of equivalents are equal`,
                unit: ''
            });
            
            const n2 = (n1 * v1) / v2;
            
            steps.push({
                label: 'Normality of Analyte (N₂)',
                value: n2.toFixed(6),
                formula: `N₂ = (N₁ × V₁) / V₂ = (${n1} × ${v1}) / ${v2}`,
                unit: 'N'
            });
            
            calculations.push(
                { label: 'Calculated Analyte Normality', value: n2.toFixed(6), unit: 'N' }
            );
            
            setCalculatedNormality(n2);
            
            warnings.push('⚠️ Titrant must be previously standardized');
            warnings.push('✓ Perform multiple titrations for accuracy');
            warnings.push('✓ Note endpoint color change carefully');
        }
        
        warnings.push('✓ Record burette readings accurately');
        warnings.push('✓ Rinse glassware with solution before use');
        
        if (indicatorKey && selectedIndicator) {
            inputValues.push({ label: 'Indicator Used', value: selectedIndicator.name });
        }
        
        setVerificationData({ inputValues, calculations, warnings });
        setCalculationSteps(steps);
    }, [
        standardizationMethod,
        stdWeight, stdVol, titrantVol, primaryStdTakenVol, primaryStdKey, primaryTitrantKey,
        secondaryTitrantNormality, secondaryTitrantVolume, analyteVolume, secondaryAnalyteKey, secondaryTitrantKey,
        allChemicals, indicatorKey, selectedIndicator
    ]);

    const handleAdjustNormality = useCallback(() => {
        if (calculatedNormality === null) { 
            setError("Please calculate the exact normality first."); 
            return; 
        }
        
        setError(null);
        setAdjustmentResult(null);
        
        const n_have = calculatedNormality;
        const v_have_input = parseFloat(currentVolume);
        const v_have_liters = volumeUnit === 'ml' ? v_have_input / 1000 : v_have_input;
        const n_req = parseFloat(targetNormality);

        if (isNaN(v_have_input) || isNaN(n_req) || v_have_input <= 0 || n_req <= 0) { 
            setError("Please provide a valid target normality and current volume."); 
            return; 
        }
        
        let resultMsg = "";
        const chemicalKeyToUse = standardizationMethod === 'primary' ? primaryTitrantKey : secondaryAnalyteKey;
        
        if (n_have > n_req) {
            const v_final = (n_have * v_have_liters) / n_req;
            const water_to_add = v_final - v_have_liters;
            
            resultMsg = `<div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-300">
                <h4 class="font-bold text-lg mb-3 text-blue-800">💧 Dilution Required</h4>
                <p class="mb-3">To decrease normality from <strong class="text-blue-900">${n_have.toFixed(4)} N</strong> to <strong class="text-blue-900">${n_req} N</strong>:</p>
                <div class="bg-white p-3 rounded border border-blue-200">
                    <p class="text-lg"><strong>Add ${(water_to_add * 1000).toFixed(2)} mL</strong> of distilled water</p>
                    <p class="text-sm text-gray-600 mt-2">Current volume: ${currentVolume} ${volumeUnit} → Final volume: ${(v_final * (volumeUnit === 'L' ? 1 : 1000)).toFixed(2)} ${volumeUnit}</p>
                </div>
            </div>`;
            
        } else if (n_have < n_req) {
            const chemical = allChemicals[chemicalKeyToUse as keyof typeof allChemicals];
            if (!chemical) { 
                setError("Selected chemical for fortification is not valid."); 
                return; 
            }
            
            const equivalents_needed = n_req * v_have_liters;
            const equivalents_have = n_have * v_have_liters;
            const equivalents_to_add = equivalents_needed - equivalents_have;
            
            if (chemical.type === 'solid') {
                const equivalentWeight = chemical.molarMass / chemical.nFactor;
                const weight_to_add_g = equivalents_to_add * equivalentWeight;
                
                resultMsg = `<div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 class="font-bold text-lg mb-3 text-green-800">⚗️ Fortification Required (Solid)</h4>
                    <p class="mb-3">To increase normality from <strong class="text-green-900">${n_have.toFixed(4)} N</strong> to <strong class="text-green-900">${n_req} N</strong>:</p>
                    <div class="bg-white p-3 rounded border border-green-200">
                        <p class="text-lg"><strong>Add ${weight_to_add_g.toFixed(4)} g</strong> of <strong>${chemical.name}</strong></p>
                        <p class="text-sm text-gray-600 mt-2">(${(weight_to_add_g * 1000).toFixed(2)} mg)</p>
                        <p class="text-sm text-gray-600">To ${currentVolume} ${volumeUnit} of solution</p>
                    </div>
                    <div class="mt-3 p-2 bg-yellow-50 rounded border border-yellow-300">
                        <p class="text-xs text-gray-700">⚠️ Dissolve completely and mix thoroughly</p>
                    </div>
                </div>`;
                
            } else if (chemical.type === 'liquid') {
                const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
                const stockNormality = stockMolarity * chemical.nFactor;
                const vol_to_add_ml = (equivalents_to_add / stockNormality) * 1000;
                
                resultMsg = `<div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-300">
                    <h4 class="font-bold text-lg mb-3 text-purple-800">💧 Fortification Required (Liquid)</h4>
                    <p class="mb-3">To increase normality from <strong class="text-purple-900">${n_have.toFixed(4)} N</strong> to <strong class="text-purple-900">${n_req} N</strong>:</p>
                    <div class="bg-white p-3 rounded border border-purple-200">
                        <p class="text-lg"><strong>Add ${vol_to_add_ml.toFixed(3)} mL</strong> of concentrated <strong>${chemical.name}</strong></p>
                        <p class="text-sm text-gray-600 mt-2">Stock: ${stockNormality.toFixed(4)} N (${chemical.purity}%, ${chemical.density} g/mL)</p>
                        <p class="text-sm text-gray-600">To ${currentVolume} ${volumeUnit} of solution</p>
                    </div>
                    <div class="mt-3 p-2 bg-red-50 rounded border border-red-300">
                        <p class="text-xs text-red-700"><strong>🔴 CAUTION:</strong> Add acid to water slowly with stirring!</p>
                    </div>
                </div>`;
            }
        } else {
            resultMsg = `<div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-2 border-teal-300">
                <h4 class="font-bold text-lg text-teal-800">✓ No Adjustment Needed</h4>
                <p class="text-gray-700">Current normality is already at the target value.</p>
            </div>`;
        }
        
        setAdjustmentResult(resultMsg);
    }, [calculatedNormality, targetNormality, currentVolume, volumeUnit, standardizationMethod, primaryTitrantKey, secondaryAnalyteKey, allChemicals]);

    return (
        <CalculatorCard 
            title="Solution Standardization & Adjustment" 
            description="Determine exact normality using primary/secondary standards and adjust concentration"
        >
            <div className="space-y-6">
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Standardization Method" 
                    description="Choose between primary or secondary standard"
                    status="complete"
                >
                    <Select value={standardizationMethod} onValueChange={(v) => setStandardizationMethod(v as 'primary' | 'secondary')}>
                        <SelectTrigger className="border-2">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="primary">
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-blue-100 text-blue-800">⭐ Primary</Badge>
                                    <span>Standardize with Primary Standard</span>
                                </div>
                            </SelectItem>
                            <SelectItem value="secondary">
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-purple-100 text-purple-800">🔄 Secondary</Badge>
                                    <span>Standardize with Secondary Standard</span>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </VerificationStep>
                
                {standardizationMethod === 'primary' ? (
                    <>
                        <VerificationStep 
                            stepNumber={2} 
                            title="Select Chemicals" 
                            description="Choose titrant and primary standard"
                            status={primaryTitrantKey && primaryStdKey ? 'complete' : 'active'}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label>Solution to Standardize (Titrant)</Label>
                                    <Select value={primaryTitrantKey} onValueChange={setPrimaryTitrantKey}>
                                        <SelectTrigger className="border-2"><SelectValue placeholder="Select Titrant" /></SelectTrigger>
                                        <SelectContent>
                                            {/* ↓↓↓ FIX 2: SelectGroup remove karo ↓↓↓ */}
                                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">Acids</div>
                                            {Object.entries(chemicals.acids).map(([key, value]) => (
                                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                            ))}
                                            
                                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Bases</div>
                                            {Object.entries(chemicals.bases).map(([key, value]) => (
                                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                            ))}
                                            
                                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Other Reagents</div>
                                            {Object.entries(chemicals.other_reagents).map(([key, value]) => (
                                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Primary Standard Used</Label>
                                    <Select value={primaryStdKey} onValueChange={setPrimaryStdKey}>
                                        <SelectTrigger className="border-2"><SelectValue placeholder="Select Primary Standard" /></SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(chemicals.primaryStandards).map(([key, value]) => (
                                                <SelectItem key={key} value={key}>
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant="outline" className="bg-amber-50">⭐</Badge>
                                                        {value.name}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </VerificationStep>
                        
                        <VerificationStep 
                            stepNumber={3} 
                            title="Enter Titration Data" 
                            description="Input weighing and volume measurements"
                            status={stdWeight && stdVol && titrantVol && primaryStdTakenVol ? 'complete' : 'pending'}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label>Weight of Primary Std (g)</Label>
                                    <Input type="number" value={stdWeight} onChange={e => setStdWeight(e.target.value)} placeholder="e.g., 0.53" step="any" className="border-2" />
                                </div>
                                <div>
                                    <Label>Final Vol. of Std Sol. (mL)</Label>
                                    <Input type="number" value={stdVol} onChange={e => setStdVol(e.target.value)} placeholder="e.g., 100" step="any" className="border-2" />
                                </div>
                                <div>
                                    <Label>Vol. of Std Sol. Taken (mL)</Label>
                                    <Input type="number" value={primaryStdTakenVol} onChange={e => setPrimaryStdTakenVol(e.target.value)} placeholder="e.g., 10" step="any" className="border-2" />
                                </div>
                                <div>
                                    <Label>Titrant Volume Used (mL)</Label>
                                    <Input type="number" value={titrantVol} onChange={e => setTitrantVol(e.target.value)} placeholder="e.g., 9.8" step="any" className="border-2" />
                                </div>
                                <div className="md:col-span-2">
                                    <Label>Indicator</Label>
                                    <Select value={indicatorKey} onValueChange={setIndicatorKey}>
                                        <SelectTrigger className="border-2"><SelectValue placeholder="Select Indicator" /></SelectTrigger>
                                        <SelectContent>
                                            {/* ↓↓↓ FIX 3: Safe check for array ↓↓↓ */}
                                            {availableIndicators && availableIndicators.length > 0 ? (
                                                availableIndicators.map(key => (
                                                    <SelectItem key={key} value={key}>{indicatorsInfo[key].name}</SelectItem>
                                                ))
                                            ) : (
                                                <SelectItem value="none" disabled>Select chemicals first</SelectItem>
                                            )}
                                        </SelectContent>
                                    </Select>
                                    {selectedIndicator && (
                                        <p className="text-xs text-muted-foreground mt-2">
                                            Usage: {selectedIndicator.usage} | Endpoint: <strong>{selectedIndicator.endpoint}</strong>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </VerificationStep>
                    </>
                ) : (
                    <>
                        <VerificationStep 
                            stepNumber={2} 
                            title="Select Chemicals" 
                            description="Choose analyte and titrant"
                            status={secondaryAnalyteKey && secondaryTitrantKey ? 'complete' : 'active'}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label>Solution to Standardize (Analyte)</Label>
                                    <Select value={secondaryAnalyteKey} onValueChange={setSecondaryAnalyteKey}>
                                        <SelectTrigger className="border-2"><SelectValue placeholder="Select Analyte" /></SelectTrigger>
                                        <SelectContent>
                                            {/* ↓↓↓ FIX 2: SelectGroup remove karo ↓↓↓ */}
                                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">Acids</div>
                                            {Object.entries(chemicals.acids).map(([key, value]) => (
                                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                            ))}
                                            
                                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Bases</div>
                                            {Object.entries(chemicals.bases).map(([key, value]) => (
                                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Standard Solution Used (Titrant)</Label>
                                    <Select value={secondaryTitrantKey} onValueChange={setSecondaryTitrantKey} disabled={!secondaryAnalyteKey || availableTitrants.length === 0}>
                                        <SelectTrigger className="border-2"><SelectValue placeholder="Select Titrant" /></SelectTrigger>
                                        <SelectContent>
                                            {/* ↓↓↓ FIX 3: Safe check for array ↓↓↓ */}
                                            {availableTitrants && availableTitrants.length > 0 ? (
                                                availableTitrants.map((key: string) => (
                                                    <SelectItem key={key} value={key}>{allChemicals[key as keyof typeof allChemicals].name}</SelectItem>
                                                ))
                                            ) : (
                                                <SelectItem value="none" disabled>Select analyte first</SelectItem>
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </VerificationStep>
                        
                        <VerificationStep 
                            stepNumber={3} 
                            title="Enter Titration Data" 
                            description="Input normality and volume measurements"
                            status={secondaryTitrantNormality && analyteVolume && secondaryTitrantVolume ? 'complete' : 'pending'}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label>Normality of Titrant (N₁)</Label>
                                    <Input type="number" value={secondaryTitrantNormality} onChange={e => setSecondaryTitrantNormality(e.target.value)} placeholder="e.g., 0.1000" step="any" className="border-2" />
                                </div>
                                <div>
                                    <Label>Volume of Analyte (V₂)</Label>
                                    <Input type="number" value={analyteVolume} onChange={e => setAnalyteVolume(e.target.value)} placeholder="e.g., 10" step="any" className="border-2" />
                                </div>
                                <div>
                                    <Label>Volume of Titrant (V₁)</Label>
                                    <Input type="number" value={secondaryTitrantVolume} onChange={e => setSecondaryTitrantVolume(e.target.value)} placeholder="e.g., 9.8" step="any" className="border-2" />
                                </div>
                                <div>
                                    <Label>Indicator</Label>
                                    <Select value={indicatorKey} onValueChange={setIndicatorKey}>
                                        <SelectTrigger className="border-2"><SelectValue placeholder="Select Indicator" /></SelectTrigger>
                                        <SelectContent>
                                            {availableIndicators && availableIndicators.length > 0 ? (
                                                availableIndicators.map(key => (
                                                    <SelectItem key={key} value={key}>{indicatorsInfo[key].name}</SelectItem>
                                                ))
                                            ) : (
                                                <SelectItem value="none" disabled>Select chemicals first</SelectItem>
                                            )}
                                        </SelectContent>
                                    </Select>
                                    {selectedIndicator && (
                                        <p className="text-xs text-muted-foreground mt-2">
                                            Usage: {selectedIndicator.usage} | Endpoint: <strong>{selectedIndicator.endpoint}</strong>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </VerificationStep>
                    </>
                )}
                
                <Button 
                    onClick={handleCalculateNormality} 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-lg"
                >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Exact Normality
                </Button>
                
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {calculatedNormality !== null && verificationData && (
                    <div className="space-y-4 mt-6">
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        <Alert className="border-2 border-teal-500 bg-gradient-to-br from-teal-50 to-cyan-50">
                            <CheckCircle2 className="h-5 w-5 text-teal-600" />
                            <AlertTitle className="text-lg font-bold text-teal-800">Calculated Normality</AlertTitle>
                            <AlertDescription>
                                <div className="text-4xl font-bold text-teal-700 mt-2">
                                    {calculatedNormality.toFixed(6)} N
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    This is the exact normality of your {standardizationMethod === 'primary' ? 'titrant' : 'analyte'} solution
                                </p>
                            </AlertDescription>
                        </Alert>
                        
                        <div className="pt-6 mt-6 border-t-2 border-dashed">
                            <VerificationStep 
                                stepNumber={standardizationMethod === 'primary' ? 4 : 4} 
                                title="Adjust Normality (Optional)" 
                                description="Dilute or fortify to reach target concentration"
                                status={targetNormality && currentVolume ? 'complete' : 'pending'}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Target Normality (N)</Label>
                                        <Input 
                                            type="number" 
                                            placeholder="e.g., 0.1000" 
                                            value={targetNormality} 
                                            onChange={e => setTargetNormality(e.target.value)} 
                                            className="border-2"
                                        />
                                    </div>
                                    <div>
                                        <Label>Current Volume of Solution</Label>
                                        <div className="flex">
                                            <Input 
                                                type="number" 
                                                placeholder="e.g., 950" 
                                                className="rounded-r-none border-2" 
                                                value={currentVolume} 
                                                onChange={e => setCurrentVolume(e.target.value)} 
                                            />
                                            <Select value={volumeUnit} onValueChange={(val) => setVolumeUnit(val as 'L'|'ml')}>
                                                <SelectTrigger className="w-[80px] rounded-l-none border-2">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="L">L</SelectItem>
                                                    <SelectItem value="ml">mL</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                
                                <Button 
                                    onClick={handleAdjustNormality} 
                                    className="w-full mt-4 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                                >
                                    <Beaker className="mr-2 h-5 w-5" />
                                    Calculate Adjustment
                                </Button>
                            </VerificationStep>
                            
                            {adjustmentResult && (
                                <Alert className="mt-4 border-2">
                                    <AlertTitle className="text-lg font-bold">Adjustment Instructions</AlertTitle>
                                    <AlertDescription>
                                        <div 
                                            className="mt-2" 
                                            dangerouslySetInnerHTML={{ __html: adjustmentResult }} 
                                        />
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </CalculatorCard>
    );
}

function StrengthCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};
    const [chemicalKey, setChemicalKey] = useState("");
    const [normality, setNormality] = useState("");

    const chemical = chemicalKey ? allChemicals[chemicalKey as keyof typeof allChemicals] : null;

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        const norm = parseFloat(normality);
        
        if (!chemicalKey || isNaN(norm) || norm <= 0) {
            setError('Please select a chemical and enter a valid normality.');
            return;
        }
        
        const chemical = allChemicals[chemicalKey as keyof typeof allChemicals];
        const equivalentWeight = chemical.molarMass / chemical.nFactor;
        const strength = norm * equivalentWeight;
        
        const steps: any[] = [];
        const warnings: string[] = [];
        
        const inputValues = [
            { label: 'Chemical', value: chemical.name },
            { label: 'Normality', value: `${norm} N` },
            { label: 'Molecular Weight', value: `${chemical.molarMass} g/mol` },
            { label: 'n-factor', value: chemical.nFactor.toString() }
        ];
        
        steps.push({
            label: 'Equivalent Weight',
            value: equivalentWeight.toFixed(4),
            formula: `Molecular Weight / n-factor = ${chemical.molarMass} / ${chemical.nFactor}`,
            unit: 'g/eq'
        });
        
        steps.push({
            label: 'Strength Calculation',
            value: strength.toFixed(4),
            formula: `Strength = Normality × Equivalent Weight = ${norm} × ${equivalentWeight.toFixed(4)}`,
            unit: 'g/L'
        });
        
        const calculations = [
            { label: 'Equivalent Weight', value: equivalentWeight.toFixed(4), unit: 'g/eq' },
            { label: 'Calculated Strength', value: strength.toFixed(4), unit: 'g/L' },
            { label: 'Strength (g/100mL)', value: (strength / 10).toFixed(4), unit: 'g' }
        ];
        
        const resultText = `<div class="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border-2 border-rose-300 my-3">
            <h4 class="font-bold text-lg mb-3 text-rose-800">📊 Strength Calculation Result</h4>
            <p class="mb-3">The strength of <strong>${norm} N</strong> ${chemical.name}:</p>
            <div class="space-y-2">
                <div class="bg-white p-3 rounded border border-rose-200">
                    <div class="flex justify-between items-center">
                        <span class="font-medium">Strength:</span>
                        <span class="font-bold text-rose-800 text-xl">${strength.toFixed(4)} g/L</span>
                    </div>
                </div>
                <div class="bg-white p-3 rounded border border-rose-200">
                    <div class="flex justify-between items-center">
                        <span class="font-medium">Equivalent (per 100 mL):</span>
                        <span class="font-bold text-rose-800">${(strength / 10).toFixed(4)} g</span>
                    </div>
                </div>
            </div>
        </div>`;
        
        warnings.push('✓ Strength is mass per unit volume (g/L)');
        warnings.push('✓ Also known as titre or concentration');
        warnings.push('✓ Relationship: Strength = Normality × Equivalent Weight');
        
        setVerificationData({ inputValues, calculations, warnings });
        setCalculationSteps(steps);
        setResult(resultText);
    }, [chemicalKey, normality, allChemicals]);

    return (
        <CalculatorCard 
            title="Strength Calculator" 
            description="Convert normality to strength (g/L)"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Chemical" 
                    description="Choose the chemical compound"
                    status={chemicalKey ? 'complete' : 'active'}
                >
                    <div className="space-y-3">
                        <Select value={chemicalKey} onValueChange={setChemicalKey}>
                            <SelectTrigger className="border-2">
                                <SelectValue placeholder="Select a chemical" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* ↓↓↓ FIXED: Remove SelectGroup ↓↓↓ */}
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">Acids</div>
                                {Object.entries(chemicals.acids).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                                
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Bases</div>
                                {Object.entries(chemicals.bases).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                                
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Other Reagents</div>
                                {Object.entries(chemicals.other_reagents).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        
                        {chemical && (
                            <Card className="border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50">
                                <CardContent className="pt-4">
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">MW:</span>
                                            <Badge className="bg-blue-100 text-blue-800">{chemical.molarMass} g/mol</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">n-factor:</span>
                                            <Badge className="bg-green-100 text-green-800">{chemical.nFactor}</Badge>
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                            <span className="text-gray-600">Eq. Weight:</span>
                                            <Badge className="bg-purple-100 text-purple-800">
                                                {(chemical.molarMass / chemical.nFactor).toFixed(4)} g/eq
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </VerificationStep>
                
                <VerificationStep 
                    stepNumber={2} 
                    title="Enter Normality" 
                    description="Input the normality value"
                    status={normality ? 'complete' : 'pending'}
                >
                    <div>
                        <Label className="text-base font-semibold">Normality (N)</Label>
                        <Input 
                            type="number" 
                            placeholder="e.g., 0.1012" 
                            step="any" 
                            value={normality} 
                            onChange={e => setNormality(e.target.value)} 
                            className="mt-2 border-2 text-lg"
                            required 
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                            💡 Strength = Normality × Equivalent Weight
                        </p>
                    </div>
                </VerificationStep>
                
                <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg"
                >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Strength
                </Button>
                
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {result && verificationData && (
                    <div className="space-y-4 mt-6">
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        <Alert className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <AlertTitle className="text-lg font-bold text-green-800">
                                Strength Result
                            </AlertTitle>
                            <AlertDescription>
                                <div 
                                    className="prose prose-sm max-w-none mt-2" 
                                    dangerouslySetInnerHTML={{__html: result}} 
                                />
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </form>
        </CalculatorCard>
    );
}

function SpiritSolutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);
    const [spiritKey, setSpiritKey] = useState("");
    const [reqStrength, setReqStrength] = useState("");
    const [reqVolume, setReqVolume] = useState("");

    const spirit = spiritKey ? chemicals.spirits[spiritKey as keyof typeof chemicals.spirits] : null;

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        const requiredStrength = parseFloat(reqStrength);
        const requiredVolume = parseFloat(reqVolume);
        
        if (!spiritKey || isNaN(requiredStrength) || isNaN(requiredVolume) || requiredStrength <= 0 || requiredVolume <= 0) {
            setError('Please provide valid positive numbers for all fields.');
            return;
        }
        
        const spirit = chemicals.spirits[spiritKey as keyof typeof chemicals.spirits];
        
        if (requiredStrength > spirit.stockPurity) {
            setError(`Required strength cannot be higher than stock purity (${spirit.stockPurity}%).`);
            return;
        }

        const v1 = (requiredStrength * requiredVolume) / spirit.stockPurity;
        const waterVolume = requiredVolume - v1;
        
        const steps: any[] = [];
        const warnings: string[] = [];
        
        const inputValues = [
            { label: 'Spirit', value: spirit.name },
            { label: 'Stock Purity', value: `${spirit.stockPurity}%` },
            { label: 'Required Strength', value: `${requiredStrength}%` },
            { label: 'Required Volume', value: `${requiredVolume} mL` }
        ];
        
        steps.push({
            label: 'Dilution Formula',
            value: 'C₁V₁ = C₂V₂',
            formula: 'Stock × Volume = Required × Final Volume',
            unit: ''
        });
        
        steps.push({
            label: 'Stock Volume Required (V₁)',
            value: v1.toFixed(4),
            formula: `V₁ = (C₂ × V₂) / C₁ = (${requiredStrength} × ${requiredVolume}) / ${spirit.stockPurity}`,
            unit: 'mL'
        });
        
        steps.push({
            label: 'Water to Add',
            value: waterVolume.toFixed(4),
            formula: `V₂ - V₁ = ${requiredVolume} - ${v1.toFixed(4)}`,
            unit: 'mL'
        });
        
        const calculations = [
            { label: 'Stock Volume', value: v1.toFixed(4), unit: 'mL' },
            { label: 'Water Volume', value: waterVolume.toFixed(4), unit: 'mL' },
            { label: 'Dilution Factor', value: (spirit.stockPurity / requiredStrength).toFixed(2), unit: 'x' }
        ];
        
        const resultText = `<div class="bg-gradient-to-r from-fuchsia-50 to-purple-50 p-4 rounded-lg border-2 border-fuchsia-300 my-3">
            <h4 class="font-bold text-lg mb-3 text-fuchsia-800">📊 Spirit/Alcohol Dilution (C₁V₁ = C₂V₂)</h4>
            <p class="mb-3">To prepare <strong>${requiredVolume} mL</strong> of <strong>${requiredStrength}%</strong> ${spirit.name}:</p>
            <div class="space-y-2">
                <div class="bg-white p-3 rounded border border-fuchsia-200">
                    <p class="text-lg"><strong>Step 1:</strong> Take <strong>${v1.toFixed(3)} mL</strong> of ${spirit.stockPurity}% stock solution</p>
                </div>
                <div class="bg-white p-3 rounded border border-fuchsia-200">
                    <p class="text-lg"><strong>Step 2:</strong> Add <strong>${waterVolume.toFixed(3)} mL</strong> of distilled water</p>
                </div>
                <div class="bg-white p-3 rounded border border-fuchsia-200">
                    <p class="text-sm text-gray-600">Dilution factor: <strong>${(spirit.stockPurity / requiredStrength).toFixed(2)}x</strong></p>
                </div>
            </div>
        </div>`;
        
        warnings.push('⚠️ Use distilled water for dilution');
        warnings.push('⚠️ Mix thoroughly after dilution');
        warnings.push('⚠️ Store in tightly sealed bottles');
        warnings.push('✓ Label with concentration and preparation date');
        warnings.push('⚠️ Handle in well-ventilated area (flammable)');
        
        setVerificationData({ inputValues, calculations, warnings });
        setCalculationSteps(steps);
        setResult(resultText);
    }, [spiritKey, reqStrength, reqVolume]);

    return (
        <CalculatorCard 
            title="Spirit/Alcohol Solution" 
            description="Dilute alcohol using C₁V₁ = C₂V₂ formula"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Spirit" 
                    description="Choose the alcohol type"
                    status={spiritKey ? 'complete' : 'active'}
                >
                    <div className="space-y-3">
                        <Select value={spiritKey} onValueChange={setSpiritKey}>
                            <SelectTrigger className="border-2">
                                <SelectValue placeholder="Select a spirit" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.spirits).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="bg-fuchsia-50">🍷</Badge>
                                            {`${value.name} (${value.stockPurity}%)`}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        
                        {spirit && (
                            <Card className="border-2 border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-purple-50">
                                <CardContent className="pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 font-medium">Stock Purity:</span>
                                        <Badge className="bg-fuchsia-100 text-fuchsia-800 text-lg">
                                            {spirit.stockPurity}%
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </VerificationStep>
                
                <VerificationStep 
                    stepNumber={2} 
                    title="Enter Dilution Parameters" 
                    description="Required strength and volume"
                    status={reqStrength && reqVolume ? 'complete' : 'pending'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-base font-semibold">Required Strength (%)</Label>
                            <Input 
                                type="number" 
                                placeholder="e.g., 70" 
                                step="any" 
                                value={reqStrength} 
                                onChange={e => setReqStrength(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                        <div>
                            <Label className="text-base font-semibold">Required Volume (mL)</Label>
                            <Input 
                                type="number" 
                                placeholder="e.g., 1000" 
                                step="any" 
                                value={reqVolume} 
                                onChange={e => setReqVolume(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                    </div>
                </VerificationStep>
                
                <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 shadow-lg"
                >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Spirit Dilution
                </Button>
                
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {result && verificationData && (
                    <div className="space-y-4 mt-6">
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        <Alert className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <AlertTitle className="text-lg font-bold text-green-800">
                                Dilution Instructions
                            </AlertTitle>
                            <AlertDescription>
                                <div 
                                    className="prose prose-sm max-w-none mt-2" 
                                    dangerouslySetInnerHTML={{__html: result}} 
                                />
                            </AlertDescription>
                        </Alert>
                        
                        <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-red-600" />
                                    <CardTitle className="text-lg">Safety Warnings</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>FLAMMABLE:</strong> Keep away from open flames and heat sources</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                        <span>Work in well-ventilated area to avoid vapor inhalation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Store in tightly sealed containers in cool, dry place</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </form>
        </CalculatorCard>
    );
}

function PercentageSolutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};
    const [chemicalKey, setChemicalKey] = useState("");
    const [percentage, setPercentage] = useState("");
    const [volume, setVolume] = useState("");

    const chemical = chemicalKey ? allChemicals[chemicalKey as keyof typeof allChemicals] : null;

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        const perc = parseFloat(percentage);
        const vol = parseFloat(volume);
        
        if (!chemicalKey || isNaN(perc) || isNaN(vol) || perc <= 0 || vol <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }
        
        const chemical = allChemicals[chemicalKey as keyof typeof allChemicals];
        const steps: any[] = [];
        const warnings: string[] = [];
        let resultText = '';
        const calculations: any[] = [];
        
        const inputValues = [
            { label: 'Chemical', value: chemical.name },
            { label: 'Required Percentage', value: `${perc}% w/v` },
            { label: 'Final Volume', value: `${vol} mL` },
            { label: 'Type', value: chemical.type === 'solid' ? 'Solid' : 'Liquid' }
        ];
        
        if (chemical.type === 'solid') {
            const weight = (perc / 100) * vol;
            
            steps.push({
                label: 'Weight Calculation',
                value: weight.toFixed(4),
                formula: `(Percentage / 100) × Volume = (${perc} / 100) × ${vol}`,
                unit: 'g'
            });
            
            calculations.push({ label: 'Weight Required', value: weight.toFixed(4), unit: 'g' });
            
            resultText = `<div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300 my-3">
                <h4 class="font-bold text-lg mb-3 text-green-800">📊 Solid Preparation (w/v)</h4>
                <p class="mb-3">To prepare <strong>${vol} mL</strong> of <strong>${perc}% w/v</strong> ${chemical.name}:</p>
                <div class="bg-white p-3 rounded border border-green-200">
                    <p class="text-lg"><strong>Dissolve ${weight.toFixed(4)} g</strong> of ${chemical.name}</p>
                    <p class="text-sm text-gray-600 mt-2">Make final volume up to ${vol} mL with distilled water</p>
                </div>
            </div>`;
            
            warnings.push('⚠️ Weigh accurately using analytical balance');
            warnings.push('⚠️ Dissolve completely before making final volume');
            warnings.push('⚠️ Use volumetric flask for accuracy');
            
        } else if (chemical.type === 'liquid') {
            const pureWeightNeeded = (perc / 100) * vol;
            const stockWeightNeeded = pureWeightNeeded / (chemical.purity / 100);
            const stockVolumeNeeded = stockWeightNeeded / chemical.density;
            
            steps.push({
                label: 'Pure Chemical Weight Needed',
                value: pureWeightNeeded.toFixed(4),
                formula: `(${perc} / 100) × ${vol}`,
                unit: 'g'
            });
            
            steps.push({
                label: 'Stock Weight Needed',
                value: stockWeightNeeded.toFixed(4),
                formula: `Pure Weight / (Purity / 100) = ${pureWeightNeeded.toFixed(4)} / (${chemical.purity} / 100)`,
                unit: 'g'
            });
            
            steps.push({
                label: 'Stock Volume Needed',
                value: stockVolumeNeeded.toFixed(4),
                formula: `Stock Weight / Density = ${stockWeightNeeded.toFixed(4)} / ${chemical.density}`,
                unit: 'mL'
            });
            
            calculations.push(
                { label: 'Stock Volume Required', value: stockVolumeNeeded.toFixed(4), unit: 'mL' },
                { label: 'Stock Purity', value: `${chemical.purity}%`, unit: '' }
            );
            
            resultText = `<div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-300 my-3">
                <h4 class="font-bold text-lg mb-3 text-blue-800">📊 Liquid Preparation (w/v)</h4>
                <p class="mb-3">To prepare <strong>${vol} mL</strong> of <strong>${perc}% w/v</strong> ${chemical.name}:</p>
                <div class="bg-white p-3 rounded border border-blue-200">
                    <p class="text-lg"><strong>Take ${stockVolumeNeeded.toFixed(4)} mL</strong> of concentrated ${chemical.name}</p>
                    <p class="text-sm text-gray-600 mt-1">Stock: ${chemical.purity}% purity, ${chemical.density} g/mL density</p>
                    <p class="text-sm text-gray-600 mt-2">Make final volume up to ${vol} mL with distilled water</p>
                </div>
            </div>`;
            
            warnings.push('🔴 ALWAYS add acid to water, never reverse!');
            warnings.push('⚠️ Add slowly with constant stirring');
            warnings.push('⚠️ Allow to cool before final volume adjustment');
        }
        
        warnings.push('✓ Label container properly');
        warnings.push('✓ Store as per chemical compatibility');
        
        setVerificationData({ inputValues, calculations, warnings });
        setCalculationSteps(steps);
        setResult(resultText);
    }, [chemicalKey, percentage, volume, allChemicals]);
    
    return (
        <CalculatorCard 
            title="Percentage Solution Calculator" 
            description="Calculate w/v percentage solutions"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Chemical" 
                    description="Choose the chemical compound"
                    status={chemicalKey ? 'complete' : 'active'}
                >
                    <Select value={chemicalKey} onValueChange={setChemicalKey}>
                        <SelectTrigger className="border-2">
                            <SelectValue placeholder="Select a chemical" />
                        </SelectTrigger>
                        <SelectContent>
                            {/* ↓↓↓ FIXED: Remove SelectGroup ↓↓↓ */}
                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">Acids</div>
                            {Object.entries(chemicals.acids).map(([key, value]) => (
                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                            ))}
                            
                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Bases</div>
                            {Object.entries(chemicals.bases).map(([key, value]) => (
                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                            ))}
                            
                            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Other Reagents</div>
                            {Object.entries(chemicals.other_reagents).map(([key, value]) => (
                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    
                    {chemical && (
                        <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 mt-3">
                            <CardContent className="pt-4">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Type:</span>
                                        <Badge variant="outline">{chemical.type === 'solid' ? 'Solid 🧂' : 'Liquid 💧'}</Badge>
                                    </div>
                                    {chemical.type === 'liquid' && (
                                        <>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Purity:</span>
                                                <Badge className="bg-yellow-100 text-yellow-800">{chemical.purity}%</Badge>
                                            </div>
                                            <div className="flex justify-between col-span-2">
                                                <span className="text-gray-600">Density:</span>
                                                <Badge className="bg-cyan-100 text-cyan-800">{chemical.density} g/mL</Badge>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </VerificationStep>
                
                <VerificationStep 
                    stepNumber={2} 
                    title="Enter Parameters" 
                    description="Specify percentage and volume"
                    status={percentage && volume ? 'complete' : 'pending'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-base font-semibold">Required Percentage (% w/v)</Label>
                            <Input 
                                type="number" 
                                placeholder="e.g., 10" 
                                step="any" 
                                value={percentage} 
                                onChange={e => setPercentage(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                        <div>
                            <Label className="text-base font-semibold">Final Volume (mL)</Label>
                            <Input 
                                type="number" 
                                placeholder="e.g., 500" 
                                step="any" 
                                value={volume} 
                                onChange={e => setVolume(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                    </div>
                </VerificationStep>
                
                <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 shadow-lg"
                >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Percentage Solution
                </Button>
                
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {result && verificationData && (
                    <div className="space-y-4 mt-6">
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        <Alert className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <AlertTitle className="text-lg font-bold text-green-800">
                                Preparation Instructions
                            </AlertTitle>
                            <AlertDescription>
                                <div 
                                    className="prose prose-sm max-w-none mt-2" 
                                    dangerouslySetInnerHTML={{__html: result}} 
                                />
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </form>
        </CalculatorCard>
    );
}

function DilutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [verificationData, setVerificationData] = useState<any>(null);
    const [calculationSteps, setCalculationSteps] = useState<any[]>([]);
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [v2, setV2] = useState("");
    const [chemicalKey, setChemicalKey] = useState("");
    const allChemicals = {...chemicals.acids, ...chemicals.bases};

    const chemical = chemicalKey ? allChemicals[chemicalKey as keyof typeof allChemicals] : null;

    const handleChemChange = useCallback((key: string) => {
        setChemicalKey(key);
        const chemical = allChemicals[key as keyof typeof allChemicals];
        if (chemical && chemical.type === 'liquid') {
            const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
            const stockNormality = stockMolarity * chemical.nFactor;
            setN1(stockNormality.toFixed(4));
        } else {
            setN1("");
        }
    }, [allChemicals]);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        setVerificationData(null);
        setCalculationSteps([]);
        
        const n1Val = parseFloat(n1);
        const n2Val = parseFloat(n2);
        const v2Val = parseFloat(v2);
        
        if (isNaN(n1Val) || isNaN(n2Val) || isNaN(v2Val) || n1Val <= 0 || n2Val <= 0 || v2Val <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }
        if (n2Val > n1Val) {
            setError(`Final normality (N₂) cannot be greater than stock normality (N₁).`);
            return;
        }

        const v1 = (n2Val * v2Val) / n1Val;
        const waterVolume = v2Val - v1;
        
        const steps: any[] = [];
        const warnings: string[] = [];
        
        const inputValues = [
            { label: 'Stock Normality (N₁)', value: `${n1Val} N` },
            { label: 'Required Normality (N₂)', value: `${n2Val} N` },
            { label: 'Final Volume (V₂)', value: `${v2Val} mL` }
        ];
        
        if (chemical) {
            inputValues.unshift({ label: 'Chemical', value: chemical.name });
        }
        
        steps.push({
            label: 'Dilution Formula',
            value: 'N₁V₁ = N₂V₂',
            formula: 'At equilibrium, equivalents remain constant',
            unit: ''
        });
        
        steps.push({
            label: 'Stock Volume Required (V₁)',
            value: v1.toFixed(4),
            formula: `V₁ = (N₂ × V₂) / N₁ = (${n2Val} × ${v2Val}) / ${n1Val}`,
            unit: 'mL'
        });
        
        steps.push({
            label: 'Water/Solvent to Add',
            value: waterVolume.toFixed(4),
            formula: `V₂ - V₁ = ${v2Val} - ${v1.toFixed(4)}`,
            unit: 'mL'
        });
        
        const calculations = [
            { label: 'Stock Volume (V₁)', value: v1.toFixed(4), unit: 'mL' },
            { label: 'Water/Solvent', value: waterVolume.toFixed(4), unit: 'mL' },
            { label: 'Dilution Factor', value: (n1Val / n2Val).toFixed(2), unit: 'x' }
        ];
        
        const resultText = `<div class="bg-gradient-to-r from-indigo-50 to-violet-50 p-4 rounded-lg border-2 border-indigo-300 my-3">
            <h4 class="font-bold text-lg mb-3 text-indigo-800">📊 Dilution Instructions (C₁V₁ = C₂V₂)</h4>
            <p class="mb-3">To prepare <strong>${v2Val} mL</strong> of <strong>${n2Val} N</strong> solution from <strong>${n1Val} N</strong> stock:</p>
            <div class="space-y-2">
                <div class="bg-white p-3 rounded border border-indigo-200">
                    <p class="text-lg"><strong>Step 1:</strong> Take <strong>${v1.toFixed(4)} mL</strong> of stock solution</p>
                </div>
                <div class="bg-white p-3 rounded border border-indigo-200">
                    <p class="text-lg"><strong>Step 2:</strong> Add <strong>${waterVolume.toFixed(4)} mL</strong> of distilled water</p>
                </div>
                <div class="bg-white p-3 rounded border border-indigo-200">
                    <p class="text-sm text-gray-600">Dilution factor: <strong>${(n1Val / n2Val).toFixed(2)}x</strong></p>
                </div>
            </div>
        </div>`;
        
        warnings.push('⚠️ Use volumetric flask for accurate final volume');
        warnings.push('⚠️ If diluting acids, add acid to water slowly');
        warnings.push('⚠️ Mix thoroughly after dilution');
        warnings.push('✓ Label with new concentration and date');
        
        setVerificationData({ inputValues, calculations, warnings });
        setCalculationSteps(steps);
        setResult(resultText);
    }, [n1, n2, v2, chemical]);

    return (
        <CalculatorCard 
            title="Stock Solution Dilution" 
            description="Use N₁V₁ = N₂V₂ formula to calculate dilutions"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <VerificationStep 
                    stepNumber={1} 
                    title="Select Stock Chemical (Optional)" 
                    description="Auto-calculates stock normality for liquids"
                    status={chemicalKey ? 'complete' : 'active'}
                >
                    <Select value={chemicalKey} onValueChange={handleChemChange}>
                        <SelectTrigger className="border-2">
                            <SelectValue placeholder="Select an acid or base" />
                        </SelectTrigger>
                        <SelectContent>
                            <ScrollArea className="h-72">
                                {/* ↓↓↓ FIXED: Remove SelectGroup ↓↓↓ */}
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">Acids</div>
                                {Object.entries(chemicals.acids).filter(([,chem])=>chem.type === 'liquid').map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                                
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 border-t">Bases</div>
                                {Object.entries(chemicals.bases).filter(([,chem])=>chem.type === 'liquid').map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                    
                    {chemical && chemical.type === 'liquid' && (
                        <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 mt-3">
                            <CardContent className="pt-4">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex justify-between col-span-2">
                                        <span className="text-gray-600">Stock Purity:</span>
                                        <Badge className="bg-yellow-100 text-yellow-800">{chemical.purity}%</Badge>
                                    </div>
                                    <div className="flex justify-between col-span-2">
                                        <span className="text-gray-600">Calculated Stock Normality:</span>
                                        <Badge className="bg-indigo-100 text-indigo-800">{n1} N</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </VerificationStep>
                
                <VerificationStep 
                    stepNumber={2} 
                    title="Enter Dilution Parameters" 
                    description="Stock normality, required normality, and final volume"
                    status={n1 && n2 && v2 ? 'complete' : 'pending'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Label className="text-base font-semibold">Stock Normality (N₁)</Label>
                            <Input 
                                type="number" 
                                placeholder="e.g., 1.0" 
                                step="any" 
                                value={n1} 
                                onChange={e => setN1(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                        <div>
                            <Label className="text-base font-semibold">Required Normality (N₂)</Label>
                            <Input 
                                type="number" 
                                placeholder="e.g., 0.1" 
                                step="any" 
                                value={n2} 
                                onChange={e => setN2(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                        <div>
                            <Label className="text-base font-semibold">Final Volume (V₂, mL)</Label>
                            <Input 
                                type="number" 
                                placeholder="e.g., 1000" 
                                step="any" 
                                value={v2} 
                                onChange={e => setV2(e.target.value)} 
                                className="mt-2 border-2 text-lg"
                                required 
                            />
                        </div>
                    </div>
                </VerificationStep>
                
                <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg"
                >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Dilution (V₁)
                </Button>
                
                {error && (
                    <Alert variant="destructive" className="border-2">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {result && verificationData && (
                    <div className="space-y-4 mt-6">
                        <MobileVerification 
                            inputValues={verificationData.inputValues}
                            calculations={verificationData.calculations}
                            warnings={verificationData.warnings}
                        />
                        
                        {calculationSteps.length > 0 && (
                            <CalculationBreakdown steps={calculationSteps} />
                        )}
                        
                        <Alert className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <AlertTitle className="text-lg font-bold text-green-800">
                                Dilution Instructions
                            </AlertTitle>
                            <AlertDescription>
                                <div 
                                    className="prose prose-sm max-w-none mt-2" 
                                    dangerouslySetInnerHTML={{__html: result}} 
                                />
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </form>
        </CalculatorCard>
    );
}
