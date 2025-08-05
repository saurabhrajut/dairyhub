
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Alert, AlertDescription } from "@/components/ui/alert";

const qualityParams = [
  { param: "Fat Content", buffalo: "5.5% - 6.5%", cow: "3.5% - 4.5%", importance: "Directly impacts the final yield and texture of the paneer." },
  { param: "SNF (Solids-Not-Fat)", buffalo: "~9.0%", cow: "~8.5%", importance: "Contributes to the structure and firmness." },
  { param: "Acidity (% Lactic Acid)", buffalo: "0.14 - 0.16%", cow: "0.13 - 0.14%", importance: "Fresh milk is required. High acidity leads to poor texture and low yield." },
];

const processSteps = [
    { step: 1, stage: "Milk Standardization", params: "Milk is standardized to a specific Fat-to-SNF ratio, typically by adjusting the fat content to <strong>5.8-6.0%</strong> for consistent product quality." },
    { step: 2, stage: "Heating", params: "The standardized milk is heated to <strong>85-90°C</strong> and held for 5-10 minutes. This step kills pathogenic bacteria and denatures whey proteins, which increases the final yield." },
    { step: 3, stage: "Coagulation", params: "The milk is cooled to the coagulation temperature of <strong>70-75°C</strong>. A coagulant (typically 1-2% hot citric acid solution or sour whey) is slowly added while gently stirring until clear whey separates." },
    { step: 4, stage: "Draining the Whey", params: "The coagulated mass (curd) is allowed to settle for 5-10 minutes. Afterwards, the liquid whey is carefully drained off, leaving the solid paneer curd behind." },
    { step: 5, stage: "Hooping & Pressing", params: "The hot curd is transferred into stainless steel hoops (molds) lined with muslin cloth. The curd is then pressed using mechanical or pneumatic presses at a pressure of <strong>2-3 kg/cm² for 15-20 minutes</strong>." },
    { step: 6, stage: "Chilling", params: "After pressing, the solid block of paneer is removed from the hoops and immersed in chilled water (<strong>4-6°C</strong>) for 2-3 hours. This firms up the texture and improves shelf life." },
    { step: 7, stage: "Cutting & Packaging", params: "The chilled paneer block is cut into desired sizes and shapes. It is then vacuum-packed or packed in pouches with brine to maintain freshness and prevent microbial growth. The final product is stored at refrigeration temperatures (< 5°C)." },
]

export function PaneerProductionModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
    const [milkType, setMilkType] = useState("buffalo");
    const [milkQty, setMilkQty] = useState("100");
    const [fatPercent, setFatPercent] = useState("6.0");
    const [snfPercent, setSnfPercent] = useState("9.0");
    const [yieldResult, setYieldResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(milkType === "buffalo") {
            setFatPercent("6.0");
            setSnfPercent("9.0");
        } else {
            setFatPercent("4.0");
            setSnfPercent("8.5");
        }
    }, [milkType]);

    const handleCalculate = () => {
        const qty = parseFloat(milkQty);
        const fat = parseFloat(fatPercent);
        const snf = parseFloat(snfPercent);

        if(isNaN(qty) || isNaN(fat) || isNaN(snf) || qty <= 0) {
            setError("Please enter valid positive numbers for all fields.");
            setYieldResult(null);
            return;
        }
        setError(null);

        const caseinInSnf = 0.77; 
        const fatRecovery = 0.85;
        const caseinRecovery = 0.93;
        const finalMoisture = 0.55;

        const recoveredFat = fat * fatRecovery;
        const recoveredCasein = snf * caseinInSnf * caseinRecovery;
        
        const totalRecoveredSolidsPercent = recoveredFat + recoveredCasein;
        const yieldPercent = totalRecoveredSolidsPercent / (1 - finalMoisture);
        
        const milkWeightKg = qty * 1.03;
        const estimatedPaneerKg = (milkWeightKg * yieldPercent) / 100;

        setYieldResult(`
            <p class="font-bold">Estimated Yield: <span class="text-xl">${estimatedPaneerKg.toFixed(2)} kg</span></p>
            <p class="text-sm mt-1">From ${qty} litres of milk with ${fat}% fat and ${snf}% SNF.</p>
            <p class="text-xs mt-2">Note: This is an estimate. Actual yield depends on process efficiency, protein denaturation, and moisture control.</p>
        `);
    }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2 font-headline">Industrial Paneer Production</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">Process, Yield & Quality Control 🧀</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <section id="raw-material" className="mb-12">
                <h2 className="text-2xl font-bold text-blue-700 bg-blue-50 p-4 rounded-lg mt-6 mb-6 border-l-4 border-blue-700 font-headline">1. Raw Material & Quality Control</h2>
                <p className="text-gray-600 leading-relaxed mb-6">The quality of paneer is directly dependent on the quality of the incoming milk. In a dairy industry setting, milk is first tested for critical parameters before being accepted for processing.</p>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Parameter</TableHead>
                                <TableHead>Ideal Range (Buffalo Milk)</TableHead>
                                <TableHead>Ideal Range (Cow Milk)</TableHead>
                                <TableHead>Importance</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {qualityParams.map(item => (
                                <TableRow key={item.param}>
                                    <TableCell className="font-medium">{item.param}</TableCell>
                                    <TableCell>{item.buffalo}</TableCell>
                                    <TableCell>{item.cow}</TableCell>
                                    <TableCell>{item.importance}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>

            <section id="production-process" className="mb-12">
                <h2 className="text-2xl font-bold text-blue-700 bg-blue-50 p-4 rounded-lg mt-6 mb-6 border-l-4 border-blue-700 font-headline">2. Step-by-Step Production Process</h2>
                <p className="text-gray-600 leading-relaxed mb-6">The following table outlines the standardized procedure for manufacturing paneer at an industrial scale.</p>
                <div className="overflow-x-auto">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Step No.</TableHead>
                                <TableHead>Process Stage</TableHead>
                                <TableHead>Key Parameters & Procedure</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {processSteps.map(item => (
                                <TableRow key={item.step}>
                                    <TableCell>{item.step}</TableCell>
                                    <TableCell className="font-medium">{item.stage}</TableCell>
                                    <TableCell dangerouslySetInnerHTML={{__html: item.params}} />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>

            <section id="yield-calculator" className="mb-12">
                <h2 className="text-2xl font-bold text-blue-700 bg-blue-50 p-4 rounded-lg mt-6 mb-6 border-l-4 border-blue-700 font-headline">3. Interactive Paneer Yield Calculator</h2>
                <div className="bg-muted/50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="milkType">Milk Type</Label>
                            <Select value={milkType} onValueChange={setMilkType}>
                                <SelectTrigger><SelectValue/></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="buffalo">Buffalo Milk</SelectItem>
                                    <SelectItem value="cow">Cow Milk</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="milkQty">Milk Quantity (in Litres)</Label>
                            <Input type="number" id="milkQty" value={milkQty} onChange={e => setMilkQty(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="fatPercent">Fat %</Label>
                            <Input type="number" step="0.1" id="fatPercent" value={fatPercent} onChange={e => setFatPercent(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="snfPercent">SNF %</Label>
                            <Input type="number" step="0.1" id="snfPercent" value={snfPercent} onChange={e => setSnfPercent(e.target.value)} />
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button onClick={handleCalculate} className="w-full">
                            Calculate Estimated Yield
                        </Button>
                    </div>
                     {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
                     {yieldResult && <Alert className="mt-4" dangerouslySetInnerHTML={{__html: yieldResult}} />}
                </div>
            </section>

             <section id="advanced-topics" className="mb-12">
                <h2 className="text-2xl font-bold text-blue-700 bg-blue-50 p-4 rounded-lg mt-6 mb-6 border-l-4 border-blue-700 font-headline">4. Advanced Production Insights</h2>

                <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4 font-headline">4.1 Coagulants: Types and Usage</h3>
                <p className="text-gray-600 leading-relaxed mb-4">The choice of coagulant affects the texture, flavor, and yield of the paneer.</p>
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Citric Acid</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> 1-2% solution (10-20g of citric acid powder in 1 litre of hot water at 70°C).<br/><strong>Usage:</strong> Most common industrial coagulant. Provides a clean, acidic flavor and consistent results. Add slowly to hot milk (70-75°C) with gentle stirring until clear whey separates. Over-addition can make paneer sour.</p></div>
                    <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Acetic Acid (Vinegar)</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> 1-2% solution (10-20ml of food-grade white vinegar in 1 litre of hot water).<br/><strong>Usage:</strong> A widely available and effective coagulant. It can sometimes impart a slight pungent or vinegar-like flavor, which is why citric acid is often preferred for a more neutral taste profile. Use in the same manner as citric acid solution.</p></div>
                    <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Sour Whey</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> Use whey from a previous batch, allowed to develop natural acidity (0.8-0.9% lactic acid).<br/><strong>Usage:</strong> A traditional and economical method. Often results in a softer, more traditional-flavored paneer. Can be less consistent than citric acid.</p></div>
                    <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Calcium Chloride</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> Often added to milk *before* the acid coagulant.<br/><strong>Usage:</strong> Not a primary coagulant, but added to milk (especially cow milk or pasteurized milk) to improve the coagulation properties and firmness of the curd, which can slightly increase yield by improving moisture retention.</p></div>
                </div>

                <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4 font-headline">4.2 How to Increase Paneer Yield</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Maximizing yield is key to profitability. Here are the most effective methods:</p>
                <ul className="list-disc list-outside pl-5 space-y-3 text-muted-foreground">
                    <li><strong>Optimal Heating:</strong> Heating milk to 85-90°C denatures whey proteins (like β-lactoglobulin and α-lactalbumin). These proteins then get trapped in the casein curd during coagulation, increasing the total solid recovery and thus the yield.</li>
                    <li><strong>Correct Coagulation pH:</strong> The ideal pH for paneer coagulation is around 5.2. Adding the coagulant correctly to reach this pH ensures maximum protein precipitation without making the paneer too acidic, which would cause it to lose moisture and yield.</li>
                    <li><strong>Gentle Stirring:</strong> Stirring too vigorously during coagulation breaks the curd into fine particles, which are then lost in the whey. Gentle, slow stirring helps form a firm, consolidated curd mass.</li>
                    <li><strong>Controlled Pressing:</strong> Applying the correct pressure (2-3 kg/cm²) for the right amount of time (15-20 mins) is crucial. Over-pressing squeezes out too much moisture and fat, reducing yield and creating a hard paneer. Under-pressing results in a product with too much moisture, which has a shorter shelf life.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4 font-headline">4.3 Safe Yield Increasers for Consumption</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Certain additives can be used to safely increase the yield and improve the texture of paneer.</p>
                <Alert variant="default" className="bg-green-50 border-green-500 text-green-800">
                    <AlertDescription><strong>Whey Protein Concentrate (WPC):</strong> Adding WPC powder to milk before heating is a modern technique to boost the protein content. This directly increases the amount of solids available for coagulation, leading to a higher yield and a softer, more nutritious paneer. This is a common and safe practice in the industry.</AlertDescription>
                </Alert>

                <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4 font-headline">4.4 Paneer Texture Explained: Hard, Soft, and Fluffy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">The final texture of paneer is a result of several factors throughout the production process.</p>
                <div className="overflow-x-auto">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Texture</TableHead>
                                <TableHead>Primary Causes</TableHead>
                                <TableHead>Result</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-medium text-red-600">Hard / Rubbery</TableCell><TableCell>Low fat content in milk, over-pressing, high coagulation temperature, excessive cooking.</TableCell><TableCell>Chewy, dry, and does not absorb flavors well. Low moisture content.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium text-green-600">Soft / Spongy (Ideal)</TableCell><TableCell>Standardized milk (6% fat), correct coagulation temp (70-75°C), controlled pressing, proper chilling.</TableCell><TableCell>Holds its shape, has a smooth bite, and absorbs gravies. This is the desired texture for high-quality paneer.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium text-yellow-600">Fluffy / Crumbly</TableCell><TableCell>High acidity in milk, coagulation at too low a temperature, insufficient pressing.</TableCell><TableCell>Breaks apart easily, difficult to cut into cubes, may taste overly acidic.</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

    