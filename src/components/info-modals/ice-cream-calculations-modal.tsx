
"use client"

import { useState } from "react"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PlusCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BatchIngredient {
  id: number
  name: string
  amount: string
}

interface MixIngredient {
    id: number;
    name: string;
    amount: string;
    fat: string;
    msnf: string;
    sugar: string;
}

export function IceCreamCalculationsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2 font-headline">
            Ice Cream Production Calculators 🍦
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            Calculators for Batch Scaling, Overrun, Freezing Point & Mix Composition
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <div className="space-y-12">
                <BatchScalingCalc />
                <OverrunCalc />
                <FreezingPointCalc />
                <MixCompositionCalc />
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => {
    return (
        <div className="bg-card p-6 rounded-2xl shadow-md border">
            <h2 className="text-2xl font-bold text-primary mb-2 font-headline">{title}</h2>
            {description && <p className="text-sm text-muted-foreground mb-6">{description}</p>}
            {children}
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
                    <div key={ing.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="hidden sm:grid grid-cols-5 gap-4">
                    <Label className="col-span-2">Ingredient Name & Amount (g)</Label>
                    <Label>Fat (%)</Label>
                    <Label>MSNF (%)</Label>
                    <Label>Sugar (%)</Label>
                </div>
                {ingredients.map(ing => (
                    <div key={ing.id} className="grid grid-cols-2 sm:grid-cols-5 gap-2 items-center">
                        <Input className="col-span-2 sm:col-span-1" type="text" placeholder="Name" value={ing.name} onChange={e => handleChange(ing.id, 'name', e.target.value)} />
                        <Input type="number" placeholder="g" value={ing.amount} onChange={e => handleChange(ing.id, 'amount', e.target.value)} />
                        <Input type="number" placeholder="Fat %" value={ing.fat} onChange={e => handleChange(ing.id, 'fat', e.target.value)} />
                        <Input type="number" placeholder="MSNF %" value={ing.msnf} onChange={e => handleChange(ing.id, 'msnf', e.target.value)} />
                        <Input type="number" placeholder="Sugar %" value={ing.sugar} onChange={e => handleChange(ing.id, 'sugar', e.target.value)} />
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
