"use client"

import { useState, useTransition } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { milkStandards, componentProps } from "@/lib/data"
import { getSnf } from "@/lib/utils"
import { getRecipeSuggestions } from "@/app/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Sparkles, Loader2 } from "lucide-react"

type MilkType = keyof typeof milkStandards

interface Results {
  cream: number;
  smp: number;
  water: number;
  finalVolume: number;
  finalWeight: number;
  finalFat: number;
  finalSnf: number;
  infoMsg: string;
}

export function StandardizationIModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [milkVolume, setMilkVolume] = useState("1000")
  const [milkFat, setMilkFat] = useState("3.8")
  const [milkClr, setMilkClr] = useState("27.5")
  const [targetMilkType, setTargetMilkType] = useState<MilkType>("toned")
  const [results, setResults] = useState<Results | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [recipe, setRecipe] = useState<string | null>(null)
  const [isRecipeLoading, startRecipeTransition] = useTransition()

  const handleCalculate = () => {
    setError(null)
    setResults(null)
    setRecipe(null)
    
    const volume = parseFloat(milkVolume) || 0;
    const fat = parseFloat(milkFat) || 0;
    const clr = parseFloat(milkClr) || 0;

    if (volume <= 0 || fat <= 0 || clr <= 0) {
      setError('Please enter valid positive numbers for all milk inputs.')
      return;
    }

    const target = milkStandards[targetMilkType];
    const M = volume * componentProps.milkDensity;
    const Sm_perc = getSnf(fat, clr);

    const Fm = fat / 100, Sm = Sm_perc / 100;
    const Ft = target.fat / 100, St = target.snf / 100;
    const Fc = componentProps.cream.fat / 100, Sc = componentProps.cream.snf / 100;
    const Fp = componentProps.smp.fat / 100, Sp = componentProps.smp.snf / 100;

    let C = 0, P = 0, W = 0;
    let infoMsg = "";

    const A1 = Fc - Ft, B1 = Fp - Ft, K1 = M * (Ft - Fm);
    const A2 = Sc - St, B2 = Sp - St, K2 = M * (St - Sm);
    const det = A1 * B2 - B1 * A2;

    if (Math.abs(det) < 1e-9) {
      setError("Cannot standardize. Properties of cream and SMP are too similar.")
      return;
    }

    C = (K1 * B2 - K2 * B1) / det;
    P = (K2 * A1 - K1 * A2) / det;
    
    if (C < 0 || P < 0) {
        // Fallback logic if simple pearson square fails
        if (Fm > Ft && Sm > St) {
            W = M * (Sm/St - 1);
            infoMsg = "Both Fat and SNF are high. Diluted with water to match SNF.";
            C = 0; P = 0;
        } else {
            // Complex scenario, add dummy values for now
            infoMsg = "Complex standardization required. Results are an approximation.";
        }
    } else {
        infoMsg = "Standardized with Cream and SMP."
    }
    
    C = Math.max(0, C); P = Math.max(0, P); W = Math.max(0, W);

    const finalMass = M + C + P + W;
    const finalVolume = finalMass / componentProps.milkDensity;
    const finalFatMass = M*Fm + C*Fc + P*Fp;
    const finalSnfMass = M*Sm + C*Sc + P*Sp;

    setResults({
        cream: C,
        smp: P,
        water: W,
        finalVolume,
        finalWeight: finalMass,
        finalFat: (finalFatMass / finalMass) * 100,
        finalSnf: (finalSnfMass / finalMass) * 100,
        infoMsg
    })
  }
  
  const handleRecipe = () => {
    if (!results) return;
    startRecipeTransition(async () => {
        setRecipe("Sujhav la raha hu...");
        try {
            const res = await getRecipeSuggestions({
                milkType: milkStandards[targetMilkType].name,
                fatPercentage: results.finalFat,
                snfPercentage: results.finalSnf,
            })
            setRecipe(res.recipeSuggestions)
        } catch(e) {
            setRecipe("Oops! Recipe laane mein dikkat ho gayi. Fir se try karein.")
        }
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Milk Standardization</DialogTitle>
          <DialogDescription className="text-center">Basic Calculator using Pearson Square method.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <div className="bg-muted/50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2 font-headline">1. Raw Milk</h3>
                        <div className="space-y-4">
                            <div><Label htmlFor="milkVolume">Volume (Liters)</Label><Input type="number" id="milkVolume" value={milkVolume} onChange={(e) => setMilkVolume(e.target.value)} placeholder="1000" /></div>
                            <div><Label htmlFor="milkFat">Fat %</Label><Input type="number" id="milkFat" value={milkFat} onChange={(e) => setMilkFat(e.target.value)} step="0.1" placeholder="3.8" /></div>
                            <div><Label htmlFor="milkClr">CLR</Label><Input type="number" id="milkClr" value={milkClr} onChange={(e) => setMilkClr(e.target.value)} step="0.1" placeholder="27.5" /></div>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2 font-headline">2. Target</h3>
                        <Label htmlFor="targetMilkType">Milk Type</Label>
                        <Select value={targetMilkType} onValueChange={(v) => setTargetMilkType(v as MilkType)}>
                           <SelectTrigger><SelectValue/></SelectTrigger>
                           <SelectContent>
                               {Object.entries(milkStandards).map(([key, {name}]) => (
                                   <SelectItem key={key} value={key}>{name}</SelectItem>
                               ))}
                           </SelectContent>
                        </Select>
                        <div className="grid grid-cols-2 gap-3 mt-4 p-3 rounded-lg bg-primary/10">
                            <div className="text-center"><p className="text-xs text-primary/80">Target Fat</p><p className="font-bold text-lg text-primary">{milkStandards[targetMilkType].fat.toFixed(1)}%</p></div>
                            <div className="text-center"><p className="text-xs text-primary/80">Target SNF</p><p className="font-bold text-lg text-primary">{milkStandards[targetMilkType].snf.toFixed(1)}%</p></div>
                        </div>
                    </div>
                </div>
                 <div className="mt-6 md:col-span-2"><Button onClick={handleCalculate} className="w-full">Calculate</Button></div>
            </div>

            {error && <Alert variant="destructive" className="mt-4"><AlertTitle>Error</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}

            {results && (
                <div className="bg-muted/50 p-6 rounded-xl mt-4">
                     <h3 className="text-xl font-semibold text-gray-800 mb-4 font-headline">Results</h3>
                     <Alert className="mb-4"><AlertDescription>{results.infoMsg}</AlertDescription></Alert>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                         <div className="bg-gray-200 p-3 rounded-lg text-center"><p className="text-sm">Cream (40% F)</p><p className="text-xl font-bold">{results.cream.toFixed(2)} kg</p></div>
                         <div className="bg-gray-200 p-3 rounded-lg text-center"><p className="text-sm">SMP (95% TS)</p><p className="text-xl font-bold">{results.smp.toFixed(2)} kg</p></div>
                         <div className="bg-gray-200 p-3 rounded-lg text-center"><p className="text-sm">Water</p><p className="text-xl font-bold">{results.water.toFixed(2)} L</p></div>
                     </div>
                     <h4 className="font-semibold text-gray-600 mb-3 mt-5 font-headline">Final Batch Summary</h4>
                     <div className="grid grid-cols-2 gap-3">
                         <div className="bg-gray-200 p-3 rounded-lg"><p className="text-sm">Total Volume</p><p className="text-lg font-bold">{results.finalVolume.toFixed(2)} L</p></div>
                         <div className="bg-gray-200 p-3 rounded-lg"><p className="text-sm">Total Weight</p><p className="text-lg font-bold">{results.finalWeight.toFixed(2)} kg</p></div>
                         <div className="bg-gray-200 p-3 rounded-lg"><p className="text-sm">Final Fat</p><p className="text-lg font-bold">{results.finalFat.toFixed(2)} %</p></div>
                         <div className="bg-gray-200 p-3 rounded-lg"><p className="text-sm">Final SNF</p><p className="text-lg font-bold">{results.finalSnf.toFixed(2)} %</p></div>
                     </div>
                     <div className="text-center mt-6">
                         <Button onClick={handleRecipe} disabled={isRecipeLoading} className="bg-gradient-to-r from-primary to-indigo-400 text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                           {isRecipeLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                           Isse kya banayein?
                         </Button>
                     </div>
                     {recipe && <div className="mt-4 p-4 bg-primary/5 rounded-lg prose prose-sm max-w-none" dangerouslySetInnerHTML={{__html: recipe.replace(/\n/g, '<br />')}} />}
                </div>
            )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
