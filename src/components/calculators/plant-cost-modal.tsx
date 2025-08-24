
"use client";

import { useState, useMemo, useCallback } from "react";
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
import { PlusCircle, XCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


interface FixedExpense {
  id: number;
  name: string;
  cost: string;
}

const FixedExpenseRow = ({ 
    item, 
    onChange, 
    onRemove 
}: { 
    item: FixedExpense, 
    onChange: (id: number, field: keyof FixedExpense, value: string) => void, 
    onRemove: (id: number) => void 
}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_auto] gap-2 items-center">
            <Input 
                placeholder="Expense (e.g., Salaries)" 
                value={item.name} 
                onChange={(e) => onChange(item.id, 'name', e.target.value)} 
            />
            <Input 
                type="number" 
                placeholder="Monthly Cost (₹)" 
                value={item.cost} 
                onChange={(e) => onChange(item.id, 'cost', e.target.value)} 
            />
            <Button variant="ghost" size="icon" className="text-destructive" onClick={() => onRemove(item.id)}>
                <XCircle />
            </Button>
        </div>
    );
};


export function PlantCostModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [period, setPeriod] = useState("monthly");
  const [milkProcessed, setMilkProcessed] = useState("30000"); // Liters per period
  const [totalRevenue, setTotalRevenue] = useState("2100000"); // Rupees per period

  const [rawMaterialCosts, setRawMaterialCosts] = useState({
      avgMilkPurchaseCost: '45', // per liter
  });

  const [otherVariableCosts, setOtherVariableCosts] = useState({
      packagingPerLitre: '2.5',
      ingredientsPerLitre: '1.0', // Other ingredients like cultures, sugar etc.
      utilitiesPerLitre: '1.5', // Electricity, water etc. per litre processed
      distributionPerLitre: '1.0',
  });
  
  const [fixedExpenses, setFixedExpenses] = useState<FixedExpense[]>([
    { id: 1, name: "Salaries & Wages", cost: "150000" },
    { id: 2, name: "Plant Rent/Lease", cost: "50000" },
    { id: 3, name: "Marketing & Admin", cost: "25000" },
    { id: 4, name: "Maintenance & Repairs", cost: "15000" },
  ]);

  const handleAddFixedExpense = () => {
    setFixedExpenses(prev => [...prev, { id: Date.now(), name: "", cost: "" }]);
  };
  
  const handleRemoveFixedExpense = (id: number) => {
    setFixedExpenses(prev => prev.filter(item => item.id !== id));
  };

  const handleFixedExpenseChange = useCallback((id: number, field: keyof FixedExpense, value: string) => {
    setFixedExpenses(prev => 
        prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  }, []);

  const handleVariableCostChange = useCallback((field: keyof typeof otherVariableCosts | keyof typeof rawMaterialCosts, value: string) => {
      if (field in otherVariableCosts) {
          setOtherVariableCosts(prev => ({...prev, [field]: value}));
      } else {
          setRawMaterialCosts(prev => ({...prev, [field]: value}));
      }
  }, []);
  

  const results = useMemo(() => {
    const milkQty = parseFloat(milkProcessed) || 0;
    const revenue = parseFloat(totalRevenue) || 0;

    // --- Variable Costs ---
    const milkPurchaseCostPerLitre = parseFloat(rawMaterialCosts.avgMilkPurchaseCost) || 0;
    const totalRawMaterialCost = milkPurchaseCostPerLitre * milkQty;

    const packagingCost = (parseFloat(otherVariableCosts.packagingPerLitre) || 0) * milkQty;
    const ingredientsCost = (parseFloat(otherVariableCosts.ingredientsPerLitre) || 0) * milkQty;
    const utilitiesCost = (parseFloat(otherVariableCosts.utilitiesPerLitre) || 0) * milkQty;
    const distributionCost = (parseFloat(otherVariableCosts.distributionPerLitre) || 0) * milkQty;
    
    const totalOtherVariableCosts = packagingCost + ingredientsCost + utilitiesCost + distributionCost;
    const totalVariableCosts = totalRawMaterialCost + totalOtherVariableCosts;
    const variableCostPerLitre = milkQty > 0 ? totalVariableCosts / milkQty : 0;

    // --- Fixed Costs ---
    const monthlyFixedCost = fixedExpenses.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0);
    const totalFixedCost = period === 'monthly' ? monthlyFixedCost : monthlyFixedCost / 30; // Prorate for daily
    
    // --- Profitability ---
    const grossProfit = revenue - totalVariableCosts;
    const netProfit = grossProfit - totalFixedCost;
    
    const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
    const netMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;
    
    // --- Break-Even Analysis ---
    const contributionMarginRatio = revenue > 0 ? grossProfit / revenue : 0;
    const breakEvenRevenue = contributionMarginRatio > 0 ? totalFixedCost / contributionMarginRatio : 0;

    return {
        revenue,
        totalRawMaterialCost,
        totalOtherVariableCosts,
        totalVariableCosts,
        variableCostPerLitre,
        grossProfit,
        totalFixedCost,
        netProfit,
        grossMargin,
        netMargin,
        breakEvenRevenue
    };
  }, [milkProcessed, totalRevenue, rawMaterialCosts, otherVariableCosts, fixedExpenses, period]);
  

  const Section = ({ title, children, description }: { title: string, children: React.ReactNode, description?: string }) => (
      <div className="bg-card p-4 rounded-lg border mt-6">
          <h3 className="text-lg font-bold text-primary font-headline mb-2">{title}</h3>
          {description && <p className="text-xs text-muted-foreground mb-4">{description}</p>}
          {children}
      </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Dairy Plant Profit &amp; Loss Calculator</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">Analyze the financial health of your entire dairy operation.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 mt-4">
            <div className="bg-muted/50 p-4 rounded-lg mb-6 grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="period-select">Calculation Period</Label>
                    <Select value={period} onValueChange={setPeriod}>
                        <SelectTrigger id="period-select"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Assumption</Label>
                    <p className="text-xs text-muted-foreground mt-1">For daily calculations, monthly fixed costs are divided by 30.</p>
                </div>
            </div>

            <Section title="1. Production & Revenue Details" description="Define your production volume and total sales for the selected period.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="milk-processed">Total Milk Processed ({period})</Label>
                        <Input id="milk-processed" type="number" value={milkProcessed} onChange={e => setMilkProcessed(e.target.value)} placeholder="e.g., 30000" />
                    </div>
                    <div>
                        <Label htmlFor="total-revenue">Total Sales Revenue ({period})</Label>
                        <Input id="total-revenue" type="number" value={totalRevenue} onChange={e => setTotalRevenue(e.target.value)} placeholder="e.g., 2100000"/>
                    </div>
                </div>
            </Section>

            <Section title="2. Variable Costs" description="Costs that change in proportion to your production volume.">
                <h4 className="font-semibold text-gray-700">A. Raw Material Cost</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                     <div>
                        <Label htmlFor="avg-milk-cost">Average Purchase Cost of Milk (₹ per Litre)</Label>
                        <Input id="avg-milk-cost" type="number" value={rawMaterialCosts.avgMilkPurchaseCost} onChange={e => handleVariableCostChange('avgMilkPurchaseCost', e.target.value)} />
                    </div>
                 </div>

                 <h4 className="font-semibold text-gray-700 mt-6">B. Other Variable Costs (per Litre of milk processed)</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div>
                        <Label htmlFor="packaging-cost">Packaging (₹ per Litre)</Label>
                        <Input id="packaging-cost" type="number" value={otherVariableCosts.packagingPerLitre} onChange={e => handleVariableCostChange('packagingPerLitre', e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="ingredients-cost">Other Ingredients (₹ per Litre)</Label>
                        <Input id="ingredients-cost" type="number" value={otherVariableCosts.ingredientsPerLitre} onChange={e => handleVariableCostChange('ingredientsPerLitre', e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="utilities-cost">Utilities (₹ per Litre)</Label>
                        <Input id="utilities-cost" type="number" value={otherVariableCosts.utilitiesPerLitre} onChange={e => handleVariableCostChange('utilitiesPerLitre', e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="distribution-cost">Distribution (₹ per Litre)</Label>
                        <Input id="distribution-cost" type="number" value={otherVariableCosts.distributionPerLitre} onChange={e => handleVariableCostChange('distributionPerLitre', e.target.value)} />
                    </div>
                 </div>
            </Section>

            <Section title="3. Fixed Expenses (Monthly Overhead)" description="Costs that remain constant regardless of production volume.">
                 <div className="space-y-3">
                     <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_auto] gap-2 items-center text-sm font-medium text-muted-foreground">
                        <p>Expense Name</p><p>Monthly Cost (₹)</p><div />
                    </div>
                    {fixedExpenses.map((item) => (
                        <FixedExpenseRow
                            key={item.id}
                            item={item}
                            onChange={handleFixedExpenseChange}
                            onRemove={handleRemoveFixedExpense}
                        />
                    ))}
                </div>
                <Button variant="outline" size="sm" onClick={handleAddFixedExpense} className="mt-4"><PlusCircle className="mr-2"/> Add Fixed Expense</Button>
            </Section>
            
            <Alert className={`mt-8 ${results.netProfit >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <AlertTitle className="text-xl font-bold">Financial Summary ({period})</AlertTitle>
                <AlertDescription>
                    <div className="mt-4 text-base">
                        <Table>
                           <TableBody>
                             <TableRow><TableCell>Total Revenue</TableCell><TableCell className="text-right font-semibold">₹ {results.revenue.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell></TableRow>
                             <TableRow><TableCell>Total Variable Costs</TableCell><TableCell className="text-right font-semibold text-red-600">- ₹ {results.totalVariableCosts.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell></TableRow>
                             <TableRow className="bg-muted/50 text-lg"><TableCell className="font-bold">Gross Profit</TableCell><TableCell className="font-bold text-right">₹ {results.grossProfit.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell></TableRow>
                             <TableRow><TableCell>Total Fixed Costs</TableCell><TableCell className="text-right font-semibold text-red-600">- ₹ {results.totalFixedCost.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell></TableRow>
                             <TableRow className={`font-extrabold text-xl ${results.netProfit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                <TableCell>{results.netProfit >= 0 ? 'Net Profit' : 'Net Loss'}</TableCell>
                                <TableCell className="text-right">₹ {results.netProfit.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                             </TableRow>
                           </TableBody>
                        </Table>
                         <h4 className="font-semibold mt-6 mb-2 text-center text-gray-600">Key Metrics</h4>
                         <Table>
                            <TableBody>
                                <TableRow><TableCell>Gross Profit Margin</TableCell><TableCell className="font-bold text-right">{results.grossMargin.toFixed(2)} %</TableCell></TableRow>
                                <TableRow><TableCell>Net Profit Margin</TableCell><TableCell className="font-bold text-right">{results.netMargin.toFixed(2)} %</TableCell></TableRow>
                                <TableRow><TableCell>Break-Even Revenue</TableCell><TableCell className="font-bold text-right">₹ {results.breakEvenRevenue.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell></TableRow>
                            </TableBody>
                         </Table>
                    </div>
                </AlertDescription>
            </Alert>
            <div className="h-12"></div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
