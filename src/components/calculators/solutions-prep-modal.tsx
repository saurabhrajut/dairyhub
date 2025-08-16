
"use client";

import { useState, Fragment } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { chemicals, reagentRecipes } from "@/lib/data";
import { ArrowLeft, ChevronsUp } from 'lucide-react';
import { AcidIcon, BaseIcon, DilutionIcon, IndicatorIcon, NormalityAdjustmentIcon, PercentageSolutionIcon, ReagentIcon, SpiritSolutionIcon, StandardizationIcon, StrengthIcon } from "@/components/icons";

const sortedReagentKeys = Object.keys(reagentRecipes).sort((a,b) => reagentRecipes[a as keyof typeof reagentRecipes].name.localeCompare(reagentRecipes[b as keyof typeof reagentRecipes].name));

type CalculatorType = 'acid-solution' | 'base-solution' | 'indicator-solution' | 'reagent-calculator' | 'percentage-solution' | 'stock-solution' | 'standardization' | 'strength-calculator' | 'spirit-solution' | 'normality-adjustment' | 'increase-normality';

const IncreaseNormalityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 11v-4a1 1 0 0 1 1-1h3"/><path d="M11 11h4a1 1 0 0 0 1-1V7"/><path d="M5 21v-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7"/><path d="m16 5-4-4-4 4"/>
    </svg>
);


const calculatorsInfo = {
  'acid-solution': { title: "Acids", icon: AcidIcon, component: AcidSolutionCalc },
  'base-solution': { title: "Bases", icon: BaseIcon, component: BaseSolutionCalc },
  'indicator-solution': { title: "Indicators", icon: IndicatorIcon, component: IndicatorCalc },
  'reagent-calculator': { title: "Reagents", icon: ReagentIcon, component: ReagentCalculator },
  'percentage-solution': { title: "Percentage Solution", icon: PercentageSolutionIcon, component: PercentageSolutionCalc },
  'stock-solution': { title: "Dilution", icon: DilutionIcon, component: DilutionCalc },
  'standardization': { title: "Standardization", icon: StandardizationIcon, component: StandardizationCalc },
  'strength-calculator': { title: "Strength", icon: StrengthIcon, component: StrengthCalc },
  'spirit-solution': { title: "Spirit Solution", icon: SpiritSolutionIcon, component: SpiritSolutionCalc },
  'normality-adjustment': { title: "Adjust Normality (Dilute)", icon: NormalityAdjustmentIcon, component: NormalityAdjustmentCalc },
  'increase-normality': { title: "Increase Normality", icon: IncreaseNormalityIcon, component: IncreaseNormalityCalc },
};

export function SolutionsPrepModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const handleBack = () => setActiveCalculator(null);
  
  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) {
            setIsOpen(false);
            setActiveCalculator(null);
        } else {
            setIsOpen(true);
        }
    }}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 sm:p-6">
        {activeCalculator && ActiveCalculatorComponent ? (
            <>
              <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
                  <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0">
                      <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div>
                      <DialogTitle className="text-xl font-bold font-headline">{calculatorsInfo[activeCalculator].title}</DialogTitle>
                      <DialogDescription>Calculate specific solution parameters.</DialogDescription>
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
                  <DialogTitle className="text-3xl font-bold text-center font-headline">Solution Preparation</DialogTitle>
                  <DialogDescription className="text-center">Calculators for various lab solutions.</DialogDescription>
              </DialogHeader>
              <ScrollArea className="flex-1 mt-4 pr-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                      {Object.entries(calculatorsInfo).map(([key, { title, icon: Icon }]) => (
                          <button
                              key={key}
                              onClick={() => setActiveCalculator(key as CalculatorType)}
                              className="flex flex-col items-center justify-center p-6 bg-card hover:bg-primary/10 rounded-xl shadow-sm border text-center aspect-square transition-all duration-200"
                          >
                              <Icon className="w-12 h-12 text-primary mb-3" />
                              <span className="font-semibold font-headline text-card-foreground text-sm">{title}</span>
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

function SolutionCalculator({ chemType, title, idPrefix }: { chemType: 'acids' | 'bases' | 'other_reagents'; title: string; idPrefix: string; }) {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const key = formData.get(`${idPrefix}-select`) as string;
        const normality = parseFloat(formData.get(`${idPrefix}-normality`) as string);
        const volume = parseFloat(formData.get(`${idPrefix}-volume`) as string);

        if (!key || isNaN(normality) || isNaN(volume) || normality <= 0 || volume <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }
        
        const chemical = (chemicals as any)[chemType][key];
        let resultText = '';

        if (chemical.type === 'solid') {
            const equivalentWeight = chemical.molarMass / chemical.nFactor;
            const weight = normality * equivalentWeight * (volume / 1000);
            resultText = `To prepare ${volume} mL of ${normality} N ${chemical.name}, dissolve <code class="font-bold bg-green-100 p-1 rounded">${weight.toFixed(3)} g</code> of the solid in distilled water and make the final volume up to <code class="font-bold">${volume} mL</code>.`;
        } else if (chemical.type === 'liquid') {
            const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
            const stockNormality = stockMolarity * chemical.nFactor;
            const requiredVolume = (normality * volume) / stockNormality;
            resultText = `To prepare ${volume} mL of ${normality} N ${chemical.name}, take <code class="font-bold bg-green-100 p-1 rounded">${requiredVolume.toFixed(3)} mL</code> of the concentrated liquid (Purity: ${chemical.purity}%, Density: ${chemical.density} g/mL) and carefully add it to distilled water, then make the final volume up to <code class="font-bold">${volume} mL</code>. <strong class="block mt-2 text-yellow-700 bg-yellow-50 p-2 rounded">⚠️ Always add acid to water!</strong>`;
        }
        setResult(resultText);
    }
    
    return (
        <CalculatorCard title={title}>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor={`${idPrefix}-select`}>Select Chemical</Label>
                        <Select name={`${idPrefix}-select`} required>
                            <SelectTrigger><SelectValue placeholder={`Select a chemical`} /></SelectTrigger>
                            <SelectContent>
                                {Object.entries((chemicals as any)[chemType]).map(([key, value]: [string, any]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor={`${idPrefix}-normality`}>Required Normality (N)</Label>
                        <Input type="number" name={`${idPrefix}-normality`} placeholder="e.g., 0.1" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor={`${idPrefix}-volume`}>Final Volume (mL)</Label>
                        <Input type="number" name={`${idPrefix}-volume`} placeholder="e.g., 1000" step="any" required />
                    </div>
                    <Button type="submit" className="w-full">Calculate</Button>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
}

function AcidSolutionCalc() { return <SolutionCalculator chemType="acids" title="Prepare Acid Solution (by Normality)" idPrefix="acid" />; }
function BaseSolutionCalc() { return <SolutionCalculator chemType="bases" title="Prepare Base Solution (by Normality)" idPrefix="base" />; }

function IndicatorCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [volume, setVolume] = useState('100');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const key = formData.get('indicator-select') as string;
        const vol = parseFloat(formData.get('indicator-volume') as string);
        
        if (!key || isNaN(vol) || vol <= 0) {
            setError("Please select an indicator and enter a valid volume.");
            return;
        }

        const indicator = chemicals.indicators[key as keyof typeof chemicals.indicators];

        let resultText = "";
        if (indicator.type === 'mixed') {
            resultText = indicator.note || 'No specific instructions available.';
        } else {
            const weight = vol / 100;
            resultText = `To make ${vol} mL of solution, dissolve <code class="font-bold bg-green-100 p-1 rounded">${weight.toFixed(2)} g</code> of ${indicator.name} in <code class="font-bold">${vol} mL</code> of ${indicator.solvent}.`;
        }
        setResult(resultText);
    }

    return (
        <CalculatorCard title="Prepare Indicator Solution">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="indicator-select">Select Indicator</Label>
                        <Select name="indicator-select" required>
                            <SelectTrigger><SelectValue placeholder="Select an indicator" /></SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.indicators).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="indicator-volume">Final Volume (mL)</Label>
                        <Input type="number" name="indicator-volume" value={volume} onChange={e => setVolume(e.target.value)} step="any" required />
                    </div>
                    <div className="md:col-span-2">
                        <Button type="submit" className="w-full">Get Instructions</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Preparation</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function ReagentCalculator() {
    const [selectedReagent, setSelectedReagent] = useState("");
    const [volume, setVolume] = useState("100");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = () => {
        setError(null);
        setResult(null);

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
        let resultHTML = `<h4 class="font-bold text-lg mb-2">To make ${vol}ml of ${recipe.name}:</h4>`;
        
        const factor = vol / 100;

        switch(recipe.type) {
            case 'w/v':
            case 'v/v':
            case 'w/v_in_acid':
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (c.amount * factor).toFixed(3);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ${c.unit}</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;
            
            case 'complex':
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (c.amount * factor).toFixed(2);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ${c.unit}</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;

            case 'ratio':
                const totalParts = recipe.components.reduce((sum, c) => sum + c.ratio, 0);
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (vol * c.ratio / totalParts).toFixed(2);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ml</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;

            case 'fixed':
                resultHTML += `<p class="text-gray-700">${recipe.instructions}</p>`;
                break;
        }
        setResult(resultHTML);
    }

    return (
        <CalculatorCard title="Reagent Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                    <Label htmlFor="reagent-select">Select Reagent:</Label>
                    <Select value={selectedReagent} onValueChange={setSelectedReagent}>
                        <SelectTrigger id="reagent-select"><SelectValue placeholder="-- Please select a reagent --" /></SelectTrigger>
                        <SelectContent>
                            {sortedReagentKeys.map(key => (
                                <SelectItem key={key} value={key}>{reagentRecipes[key as keyof typeof reagentRecipes].name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="reagent-volume">Final Volume (ml)?</Label>
                    <Input type="number" id="reagent-volume" value={volume} onChange={e => setVolume(e.target.value)} placeholder="e.g., 100" />
                </div>
            </div>
            <div className="mt-4 text-center">
                <Button onClick={handleCalculate} className="w-full">
                    Calculate
                </Button>
            </div>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                <Alert className="mt-6 prose prose-sm max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: result }} />
                </Alert>
            )}
        </CalculatorCard>
    );
}

function StandardizationCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [primaryStd, setPrimaryStd] = useState<string>("");
    const [v1, setV1] = useState(""); // Primary std volume
    const [w1, setW1] = useState(""); // Primary std weight
    const [v2, setV2] = useState(""); // Titrant volume

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        const primaryStdKey = primaryStd;
        const vol1 = parseFloat(v1);
        const weight1 = parseFloat(w1);
        const vol2 = parseFloat(v2);

        if (!primaryStdKey || isNaN(weight1) || isNaN(vol1) || isNaN(vol2) || vol1 <= 0 || weight1 <= 0 || vol2 <= 0) {
            setError('Please enter valid positive numbers in all fields.');
            return;
        }
        
        const std = chemicals.primaryStandards[primaryStdKey as keyof typeof chemicals.primaryStandards];
        const equivalentWeight = std.molarMass / std.nFactor;

        // N1 = (Weight of Primary Std * 1000) / (Eq. Wt. * Volume of solution in ml)
        const n1 = (weight1 * 1000) / (equivalentWeight * vol1);
        const n2 = (n1 * 10) / vol2; // Assuming 10ml of primary std is taken for titration

        setResult(`The normality of the secondary standard solution is <code class="font-bold bg-green-100 p-1 rounded">${n2.toFixed(4)} N</code>.`);
    }

    return (
         <CalculatorCard title="Standardize a Solution (Titration)" description="Use the formula N₁V₁ = N₂V₂ to find the exact normality (N₂) of your prepared solution.">
            <form onSubmit={handleSubmit}>
                <h3 className="font-bold text-lg mb-2 text-gray-700">1. Prepare Primary Standard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end p-4 bg-muted rounded-lg">
                    <div>
                        <Label htmlFor="std-select">Select Primary Standard</Label>
                        <Select value={primaryStd} onValueChange={setPrimaryStd} name="std-select" required>
                            <SelectTrigger><SelectValue placeholder="Select a standard" /></SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.primaryStandards).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="std-weight">Weight taken (g)</Label>
                        <Input type="number" name="std-weight" value={w1} onChange={e => setW1(e.target.value)} placeholder="e.g., 0.53" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="std-vol1">Final Volume made (ml)</Label>
                        <Input type="number" name="std-vol1" value={v1} onChange={e => setV1(e.target.value)} placeholder="e.g., 100" step="any" required />
                    </div>
                </div>

                <h3 className="font-bold text-lg mt-6 mb-2 text-gray-700">2. Titration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end p-4 bg-muted rounded-lg">
                    <div>
                        <Label htmlFor="std-v2">Titrant Volume used for 10ml Primary Std (V₂)</Label>
                        <Input type="number" name="std-v2" value={v2} onChange={e => setV2(e.target.value)} placeholder="e.g., 9.8" step="any" required />
                    </div>
                    <Button type="submit" className="w-full">Calculate Normality (N₂)</Button>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function StrengthCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const key = formData.get('strength-chemical') as string;
        const normality = parseFloat(formData.get('strength-normality') as string);
        
        if (!key || isNaN(normality) || normality <= 0) {
            setError('Please select a chemical and enter a valid normality.');
            return;
        }
        
        const chemical = allChemicals[key as keyof typeof allChemicals];
        const equivalentWeight = chemical.molarMass / chemical.nFactor;
        const strength = normality * equivalentWeight;
        
        setResult(`The strength of ${normality} N ${chemical.name} is <code class="font-bold bg-green-100 p-1 rounded">${strength.toFixed(3)} g/L</code>.`);
    }

    return (
        <CalculatorCard title="Strength Calculator">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="strength-chemical">Select Chemical</Label>
                        <Select name="strength-chemical" required>
                            <SelectTrigger><SelectValue placeholder="Select a chemical" /></SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Acids</Label>
                                    {Object.entries(chemicals.acids).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Bases</Label>
                                    {Object.entries(chemicals.bases).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Other Reagents</Label>
                                    {Object.entries(chemicals.other_reagents).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="strength-normality">Normality (N)</Label>
                        <Input type="number" name="strength-normality" placeholder="e.g., 0.1012" step="any" required />
                    </div>
                    <div className="md:col-span-2">
                    <Button type="submit" className="w-full">Calculate Strength</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function SpiritSolutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const key = formData.get('spirit-select') as string;
        const requiredStrength = parseFloat(formData.get('spirit-required-strength') as string);
        const requiredVolume = parseFloat(formData.get('spirit-required-volume') as string);
        
        if (!key || isNaN(requiredStrength) || isNaN(requiredVolume) || requiredStrength <= 0 || requiredVolume <= 0) {
            setError('Please provide valid positive numbers for all fields.');
            return;
        }

        const spirit = chemicals.spirits[key as keyof typeof chemicals.spirits];
        if (requiredStrength > spirit.stockPurity) {
            setError(`Required strength cannot be higher than stock purity (${spirit.stockPurity}%).`);
            return;
        }

        const v1 = (requiredStrength * requiredVolume) / spirit.stockPurity;
        setResult(`To prepare ${requiredVolume} mL of ${requiredStrength}% ${spirit.name}, take <code class="font-bold bg-green-100 p-1 rounded">${v1.toFixed(2)} mL</code> of ${spirit.stockPurity}% stock solution and add <code class="font-bold bg-blue-100 p-1 rounded">${(requiredVolume - v1).toFixed(2)} mL</code> of distilled water.`);
    }

    return (
        <CalculatorCard title="Spirit Solution (Alcohol Dilution)" description="Use the formula C₁V₁ = C₂V₂.">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="spirit-select">Select Spirit</Label>
                        <Select name="spirit-select" required>
                            <SelectTrigger><SelectValue placeholder="Select a spirit" /></SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.spirits).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{`${value.name} (${value.stockPurity}%)`}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="spirit-required-strength">Required Strength (%)</Label>
                        <Input type="number" name="spirit-required-strength" placeholder="e.g., 70" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="spirit-required-volume">Required Volume (mL)</Label>
                        <Input type="number" name="spirit-required-volume" placeholder="e.g., 1000" step="any" required />
                    </div>
                    <div className="md:col-span-2">
                        <Button type="submit" className="w-full">Calculate</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function NormalityAdjustmentCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const n_have = parseFloat(formData.get('adj-n-have') as string);
        const v_have = parseFloat(formData.get('adj-v-have') as string);
        const n_req = parseFloat(formData.get('adj-n-req') as string);
        
        if (isNaN(n_have) || isNaN(v_have) || isNaN(n_req) || n_have <= 0 || v_have <= 0 || n_req <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }

        if (n_have <= n_req) {
            setError('Required normality must be lower than the normality you have.');
            return;
        }

        const v_add = v_have * ((n_have / n_req) - 1);
        setResult(`You need to add <code class="font-bold bg-green-100 p-1 rounded">${v_add.toFixed(2)} mL</code> of solvent to your <code class="font-bold">${v_have} mL</code> of <code class="font-bold">${n_have} N</code> solution to get a final normality of <code class="font-bold">${n_req} N</code>.`);
    }

    return (
        <CalculatorCard title="Normality Adjustment (Dilution)" description="Use this to dilute a solution of higher normality to a desired lower normality.">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                    <div>
                        <Label htmlFor="adj-n-have">Normality you have (N₁)</Label>
                        <Input type="number" name="adj-n-have" placeholder="e.g., 0.1150" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="adj-v-have">Volume you have (V₁)</Label>
                        <Input type="number" name="adj-v-have" placeholder="e.g., 950" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="adj-n-req">Normality you want (N₂)</Label>
                        <Input type="number" name="adj-n-req" placeholder="e.g., 0.1000" step="any" required />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                    <Button type="submit" className="w-full">Calculate</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function IncreaseNormalityCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const n_have = parseFloat(formData.get('inc-n-have') as string);
        const v_have = parseFloat(formData.get('inc-v-have') as string);
        const n_req = parseFloat(formData.get('inc-n-req') as string);
        const chemicalKey = formData.get('inc-chemical') as string;
        
        if (isNaN(n_have) || isNaN(v_have) || isNaN(n_req) || !chemicalKey) {
            setError('Please fill all fields with valid numbers and select a chemical.');
            return;
        }

        if (n_req <= n_have) {
            setError('Required normality must be higher than the normality you have.');
            return;
        }
        
        const chemical = allChemicals[chemicalKey as keyof typeof allChemicals];
        const equivalentsNeeded = n_req * (v_have / 1000);
        const equivalentsHave = n_have * (v_have / 1000);
        const equivalentsToAdd = equivalentsNeeded - equivalentsHave;

        let resultText = '';
        if (chemical.type === 'solid') {
            const equivalentWeight = chemical.molarMass / chemical.nFactor;
            const weightToAdd = equivalentsToAdd * equivalentWeight;
            resultText = `To increase the normality of your ${v_have} mL solution from ${n_have} N to ${n_req} N, you need to add <code class="font-bold bg-green-100 p-1 rounded">${weightToAdd.toFixed(4)} g</code> of <strong>${chemical.name}</strong>.`;
        } else if (chemical.type === 'liquid') {
            const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
            const stockNormality = stockMolarity * chemical.nFactor;
            const volumeToAdd = (equivalentsToAdd / stockNormality) * 1000;
            resultText = `To increase the normality of your ${v_have} mL solution from ${n_have} N to ${n_req} N, you need to add <code class="font-bold bg-green-100 p-1 rounded">${volumeToAdd.toFixed(3)} mL</code> of concentrated <strong>${chemical.name}</strong>.`;
        }
        setResult(resultText);
    }

    return (
        <CalculatorCard title="Increase Normality Calculator" description="Calculate how much chemical to add to increase the normality of your solution.">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="inc-n-have">Normality you have (N₁)</Label>
                        <Input type="number" name="inc-n-have" placeholder="e.g., 0.0850" step="any" required />
                    </div>
                     <div>
                        <Label htmlFor="inc-v-have">Volume you have (V₁)</Label>
                        <Input type="number" name="inc-v-have" placeholder="e.g., 900" step="any" required />
                    </div>
                     <div>
                        <Label htmlFor="inc-n-req">Normality you want (N₂)</Label>
                        <Input type="number" name="inc-n-req" placeholder="e.g., 0.1000" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="inc-chemical">Chemical to Add</Label>
                        <Select name="inc-chemical" required>
                            <SelectTrigger><SelectValue placeholder="Select a chemical" /></SelectTrigger>
                             <SelectContent>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Acids</Label>
                                    {Object.entries(chemicals.acids).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Bases</Label>
                                    {Object.entries(chemicals.bases).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="lg:col-span-2">
                        <Button type="submit" className="w-full">Calculate Amount to Add</Button>
                    </div>
                </div>
                 {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};


function PercentageSolutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const key = formData.get('percentage-chemical-select') as string;
        const percentage = parseFloat(formData.get('percentage-required') as string);
        const volume = parseFloat(formData.get('percentage-volume') as string);

        if (!key || isNaN(percentage) || isNaN(volume) || percentage <= 0 || volume <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }
        
        const chemical = allChemicals[key as keyof typeof allChemicals];
        let resultText = '';

        if (chemical.type === 'solid') {
            const weight = (percentage / 100) * volume;
            resultText = `To prepare ${volume} mL of ${percentage}% w/v ${chemical.name}, dissolve <code class="font-bold bg-green-100 p-1 rounded">${weight.toFixed(3)} g</code> of the solid in a solvent and make the final volume up to <code class="font-bold">${volume} mL</code>.`;
        } else if (chemical.type === 'liquid') {
            const pureWeightNeeded = (percentage / 100) * volume;
            const stockWeightNeeded = pureWeightNeeded / (chemical.purity / 100);
            const stockVolumeNeeded = stockWeightNeeded / chemical.density;
            resultText = `To prepare ${volume} mL of ${percentage}% w/v ${chemical.name}, take <code class="font-bold bg-green-100 p-1 rounded">${stockVolumeNeeded.toFixed(3)} mL</code> of the concentrated liquid and make the final volume up to <code class="font-bold">${volume} mL</code>.`;
        }
        setResult(resultText);
    }
    
    return (
        <CalculatorCard title="% Solution Calculator (w/v)">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                    <div>
                        <Label htmlFor="percentage-chemical-select">Select Chemical</Label>
                        <Select name="percentage-chemical-select" required>
                            <SelectTrigger><SelectValue placeholder="Select a chemical" /></SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Acids</Label>
                                    {Object.entries(chemicals.acids).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Bases</Label>
                                    {Object.entries(chemicals.bases).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Other Reagents</Label>
                                    {Object.entries(chemicals.other_reagents).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="percentage-required">Required Percentage (% w/v)</Label>
                        <Input type="number" name="percentage-required" placeholder="e.g., 10" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="percentage-volume">Final Volume (mL)</Label>
                        <Input type="number" name="percentage-volume" placeholder="e.g., 500" step="any" required />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                        <Button type="submit" className="w-full">Calculate</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function DilutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const n1 = parseFloat(formData.get('stock-normality') as string);
        const n2 = parseFloat(formData.get('final-normality') as string);
        const v2 = parseFloat(formData.get('final-volume') as string);

        if (isNaN(n1) || isNaN(n2) || isNaN(v2) || n1 <= 0 || n2 <= 0 || v2 <= 0) {
            setError('Please enter valid positive numbers in all fields.');
            return;
        }
        if (n2 > n1) {
            setError('Final normality (N₂) cannot be greater than stock normality (N₁).');
            return;
        }

        const v1 = (n2 * v2) / n1;
        const resultText = `To prepare <code class="font-bold">${v2} mL</code> of <code class="font-bold">${n2} N</code> solution, you need to take <code class="font-bold bg-green-100 p-1 rounded">${v1.toFixed(3)} mL</code> of your <code class="font-bold">${n1} N</code> stock solution and dilute it with the solvent up to a final volume of <code class="font-bold">${v2} mL</code>.`;
        setResult(resultText);
    }

    return (
        <CalculatorCard title="Working with Stock Solutions (Dilution)" description="Use the dilution formula: N₁V₁ = N₂V₂. Calculate the initial volume (V₁) needed from a stock solution.">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                    <div>
                        <Label htmlFor="stock-normality">Stock Normality (N₁)</Label>
                        <Input type="number" name="stock-normality" placeholder="e.g., 1.0" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="final-normality">Required Normality (N₂)</Label>
                        <Input type="number" name="final-normality" placeholder="e.g., 0.1" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="final-volume">Final Volume (V₂, mL)</Label>
                        <Input type="number" name="final-volume" placeholder="e.g., 1000" step="any" required />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                    <Button type="submit" className="w-full">Calculate V₁</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

    
