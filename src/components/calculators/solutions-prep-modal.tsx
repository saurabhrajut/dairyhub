"use client";

import { useState, Fragment } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
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

const IndicatorCalc = () => <div><h2 className="text-2xl font-bold text-primary mb-6 font-headline">Prepare Indicator Solution</h2><p>Indicator calculator coming soon.</p></div>
const StandardizationCalc = () => <div><h2 className="text-2xl font-bold text-primary mb-6 font-headline">Standardize a Solution</h2><p>Standardization calculator coming soon.</p></div>
const StrengthCalc = () => <div><h2 className="text-2xl font-bold text-primary mb-6 font-headline">Shakti (Strength) Calculator</h2><p>Shakti calculator coming soon.</p></div>
const SpiritSolutionCalc = () => <div><h2 className="text-2xl font-bold text-primary mb-6 font-headline">Spirit Ghol Calculator</h2><p>Spirit Ghol calculator coming soon.</p></div>
const NormalityAdjustmentCalc = () => <div><h2 className="text-2xl font-bold text-primary mb-6 font-headline">Normality Samayojan (Adjustment) Calculator</h2><p>Samayojan calculator coming soon.</p></div>

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
        
        const chemical = allChemicals[key];
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
                            {Object.entries(allChemicals).map(([key, value]) => (
                                <SelectItem key={key} value={key}>{value.name}</SelectItem>
                            ))}
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
