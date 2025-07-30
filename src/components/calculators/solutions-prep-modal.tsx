
"use client";

import { useState, Fragment } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { chemicals } from "@/lib/data";
import { AcidIcon, BaseIcon, DilutionIcon, IndicatorIcon, NormalityAdjustmentIcon, PercentageSolutionIcon, SpiritSolutionIcon, StandardizationIcon, StrengthIcon } from "@/components/icons";

const TABS = [
  { value: "acid-solution", label: "Acids", icon: AcidIcon },
  { value: "base-solution", label: "Bases", icon: BaseIcon },
  { value: "indicator-solution", label: "Indicators", icon: IndicatorIcon },
  { value: "percentage-solution", label: "% Ghol", icon: PercentageSolutionIcon },
  { value: "stock-solution", label: "Dilution", icon: DilutionIcon },
  { value: "standardization", label: "Standardization", icon: StandardizationIcon },
  { value: "strength-calculator", label: "Shakti", icon: StrengthIcon },
  { value: "spirit-solution", label: "Spirit Ghol", icon: SpiritSolutionIcon },
  { value: "normality-adjustment", label: "Samayojan", icon: NormalityAdjustmentIcon },
];

export function SolutionsPrepModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[95vh] flex flex-col p-0">
          <Tabs defaultValue="acid-solution" className="w-full flex-1 flex flex-col">
            <DialogHeader className="p-4 bg-primary text-primary-foreground rounded-t-lg">
                <DialogTitle className="text-center font-headline text-2xl">Solution Preparation Calculators</DialogTitle>
                <TabsList className="bg-primary/50 grid h-auto w-full grid-cols-3 sm:grid-cols-5 lg:grid-cols-9">
                  {TABS.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value} className="flex-col h-16 gap-1 p-1 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg text-primary-foreground">
                        <tab.icon className="w-6 h-6" />
                        <span className="text-xs hidden sm:inline">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
            </DialogHeader>
            <ScrollArea className="flex-1 bg-muted/30 p-6">
                <TabsContent value="acid-solution"><AcidSolutionCalc /></TabsContent>
                <TabsContent value="base-solution"><BaseSolutionCalc /></TabsContent>
                <TabsContent value="indicator-solution"><IndicatorCalc /></TabsContent>
                <TabsContent value="percentage-solution"><PercentageSolutionCalc /></TabsContent>
                <TabsContent value="stock-solution"><DilutionCalc /></TabsContent>
                <TabsContent value="standardization"><StandardizationCalc /></TabsContent>
                <TabsContent value="strength-calculator"><StrengthCalc /></TabsContent>
                <TabsContent value="spirit-solution"><SpiritSolutionCalc /></TabsContent>
                <TabsContent value="normality-adjustment"><NormalityAdjustmentCalc /></TabsContent>
            </ScrollArea>
          </Tabs>
      </DialogContent>
    </Dialog>
  );
}

const SolutionCalculator = ({ chemType, title, idPrefix }: { chemType: 'acids' | 'bases'; title: string; idPrefix: string; }) => {
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
        
        const chemical = chemicals[chemType][key];
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
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                <div>
                    <Label htmlFor={`${idPrefix}-select`}>Select Chemical</Label>
                    <Select name={`${idPrefix}-select`} required>
                        <SelectTrigger><SelectValue placeholder={`Select an ${chemType.slice(0, -1)}`} /></SelectTrigger>
                        <SelectContent>
                            {Object.entries(chemicals[chemType]).map(([key, value]) => (
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
    );
}

const AcidSolutionCalc = () => <SolutionCalculator chemType="acids" title="Prepare Acid Solution (by Normality)" idPrefix="acid" />;
const BaseSolutionCalc = () => <SolutionCalculator chemType="bases" title="Prepare Base Solution (by Normality)" idPrefix="base" />;

const IndicatorCalc = () => {
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
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Prepare Indicator Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                <div className="lg:col-span-2">
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
                <Button type="submit" className="w-full">Get Instructions</Button>
            </div>
            {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-8"><AlertTitle>Preparation</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </form>
    );
};

const StandardizationCalc = () => {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const v1 = parseFloat(formData.get('std-v1') as string); // Primary std volume
        const n1 = parseFloat(formData.get('std-n1') as string); // Primary std normality
        const v2 = parseFloat(formData.get('std-v2') as string); // Titrant volume

        if (isNaN(v1) || isNaN(n1) || isNaN(v2) || v1 <= 0 || n1 <= 0 || v2 <= 0) {
            setError('Please enter valid positive numbers in all fields.');
            return;
        }

        const n2 = (n1 * v1) / v2;
        setResult(`The normality of the secondary standard solution is <code class="font-bold bg-green-100 p-1 rounded">${n2.toFixed(4)} N</code>.`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Standardize a Solution (Titration)</h2>
            <p className="text-muted-foreground mb-4">Use the formula: <code className="bg-primary/10 text-primary font-mono p-1 rounded-md">N₁V₁ = N₂V₂</code> to find the exact normality (N₂) of your prepared solution.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                <div>
                    <Label htmlFor="std-v1">Primary Std. Volume (V₁)</Label>
                    <Input type="number" name="std-v1" placeholder="e.g., 20" step="any" required />
                </div>
                <div>
                    <Label htmlFor="std-n1">Primary Std. Normality (N₁)</Label>
                    <Input type="number" name="std-n1" placeholder="e.g., 0.1" step="any" required />
                </div>
                <div>
                    <Label htmlFor="std-v2">Titrant Volume used (V₂)</Label>
                    <Input type="number" name="std-v2" placeholder="e.g., 19.5" step="any" required />
                </div>
                <Button type="submit" className="w-full">Calculate Normality (N₂)</Button>
            </div>
            {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </form>
    );
};

const StrengthCalc = () => {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

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
        
        const allChemicals = {...chemicals.acids, ...chemicals.bases};
        const chemical = allChemicals[key as keyof typeof allChemicals];
        const equivalentWeight = chemical.molarMass / chemical.nFactor;
        const strength = normality * equivalentWeight;
        
        setResult(`The strength of ${normality} N ${chemical.name} is <code class="font-bold bg-green-100 p-1 rounded">${strength.toFixed(3)} g/L</code>.`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Shakti (Strength) Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
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
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="strength-normality">Normality (N)</Label>
                    <Input type="number" name="strength-normality" placeholder="e.g., 0.1012" step="any" required />
                </div>
                <Button type="submit" className="w-full">Calculate Strength</Button>
            </div>
            {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </form>
    );
};

const SpiritSolutionCalc = () => {
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
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Spirit Solution (Alcohol Dilution)</h2>
            <p className="text-muted-foreground mb-4">Use the formula: <code className="bg-primary/10 text-primary font-mono p-1 rounded-md">C₁V₁ = C₂V₂</code>.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
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
                <Button type="submit" className="w-full">Calculate</Button>
            </div>
            {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </form>
    );
};

const NormalityAdjustmentCalc = () => {
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
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Normality Adjustment Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
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
                <Button type="submit" className="w-full">Calculate</Button>
            </div>
            {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </form>
    );
};

const PercentageSolutionCalc = () => {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const allChemicals = {...chemicals.acids, ...chemicals.bases};

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
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">% Solution Calculator (w/v)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
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
                <Button type="submit" className="w-full">Calculate</Button>
            </div>
            {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </form>
    );
};

const DilutionCalc = () => {
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
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Working with Stock Solutions (Dilution)</h2>
            <p className="text-muted-foreground mb-4">Use the dilution formula: <code className="bg-primary/10 text-primary font-mono p-1 rounded-md">N₁V₁ = N₂V₂</code>. Calculate the initial volume (V₁) needed from a stock solution.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
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
                <Button type="submit" className="w-full">Calculate V₁</Button>
            </div>
            {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </form>
    );
};
