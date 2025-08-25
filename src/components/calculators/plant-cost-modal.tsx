
"use client";

import { useState, useMemo, useCallback, memo } from "react";
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

// Memoized Input Field to prevent re-renders on every keystroke
const MemoizedInputField = memo(function InputField({ label, value, name, setter, placeholder }: { label: string, value: string, name: string, setter: (name: string, value: string) => void, placeholder?: string }) {
    const [internalValue, setInternalValue] = useState(value);

    // Update internal state when props change
    if (value !== internalValue && document.activeElement?.getAttribute('name') !== name) {
        setInternalValue(value);
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setter(e.target.name, e.target.value);
    }
    
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <Input 
                type="number" 
                name={name} 
                id={name} 
                value={internalValue} 
                onChange={handleChange} 
                onBlur={handleBlur}
                placeholder={placeholder} 
            />
        </div>
    );
});


const FixedExpenseRow = memo(function FixedExpenseRow({ 
    item, 
    onChange, 
    onRemove 
}: { 
    item: FixedExpense, 
    onChange: (id: number, field: keyof FixedExpense, value: string) => void, 
    onRemove: (id: number) => void 
}) {
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
});


export function PlantCostModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [period, setPeriod] = useState("monthly");
  const [inputs, setInputs] = useState({
      milkProcessed: "30000",
      totalRevenue: "2100000",
      avgMilkPurchaseCost: '45',
      packagingPerLitre: '2.5',
      ingredientsPerLitre: '1.0',
      utilitiesPerLitre: '1.5',
      distributionPerLitre: '1.0',
  });
  
  const [fixedExpenses, setFixedExpenses] = useState<FixedExpense[]>([
    { id: 1, name: "Salaries & Wages", cost: "150000" },
    { id: 2, name: "Plant Rent/Lease", cost: "50000" },
    { id: 3, name: "Marketing & Admin", cost: "25000" },
    { id: 4, name: "Maintenance & Repairs", cost: "15000" },
  ]);

  const handleInputChange = useCallback((name: string, value: string) => {
    setInputs(prev => ({...prev, [name]: value}));
  }, []);

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

  const results = useMemo(() => {
    const i = Object.fromEntries(Object.entries(inputs).map(([k, v]) => [k, parseFloat(v) || 0]));
    const { milkProcessed, totalRevenue, avgMilkPurchaseCost, packagingPerLitre, ingredientsPerLitre, utilitiesPerLitre, distributionPerLitre } = i;

    // --- Variable Costs ---
    const totalRawMaterialCost = avgMilkPurchaseCost * milkProcessed;

    const packagingCost = packagingPerLitre * milkProcessed;
    const ingredientsCost = ingredientsPerLitre * milkProcessed;
    const utilitiesCost = utilitiesPerLitre * milkProcessed;
    const distributionCost = distributionPerLitre * milkProcessed;
    
    const totalOtherVariableCosts = packagingCost + ingredientsCost + utilitiesCost + distributionCost;
    const totalVariableCosts = totalRawMaterialCost + totalOtherVariableCosts;
    const variableCostPerLitre = milkProcessed > 0 ? totalVariableCosts / milkProcessed : 0;

    // --- Fixed Costs ---
    const monthlyFixedCost = fixedExpenses.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0);
    const totalFixedCost = period === 'monthly' ? monthlyFixedCost : monthlyFixedCost / 30; // Prorate for daily
    
    // --- Profitability ---
    const grossProfit = totalRevenue - totalVariableCosts;
    const netProfit = grossProfit - totalFixedCost;
    
    const grossMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0;
    const netMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;
    
    // --- Break-Even Analysis ---
    const contributionMarginRatio = totalRevenue > 0 ? grossProfit / totalRevenue : 0;
    const breakEvenRevenue = contributionMarginRatio > 0 ? totalFixedCost / contributionMarginRatio : 0;

    return {
        revenue: totalRevenue,
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
  }, [inputs, fixedExpenses, period]);
  

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
                    <MemoizedInputField label={`Total Milk Processed (${period})`} value={inputs.milkProcessed} name="milkProcessed" setter={handleInputChange} placeholder="e.g., 30000" />
                    <MemoizedInputField label={`Total Sales Revenue (${period})`} value={inputs.totalRevenue} name="totalRevenue" setter={handleInputChange} placeholder="e.g., 2100000" />
                </div>
            </Section>

            <Section title="2. Variable Costs" description="Costs that change in proportion to your production volume.">
                <h4 className="font-semibold text-gray-700">A. Raw Material Cost</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                     <div>
                        <MemoizedInputField label="Average Purchase Cost of Milk (₹ per Litre)" value={inputs.avgMilkPurchaseCost} name="avgMilkPurchaseCost" setter={handleInputChange} />
                    </div>
                 </div>

                 <h4 className="font-semibold text-gray-700 mt-6">B. Other Variable Costs (per Litre of milk processed)</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <MemoizedInputField label="Packaging (₹ per Litre)" value={inputs.packagingPerLitre} name="packagingPerLitre" setter={handleInputChange} />
                    <MemoizedInputField label="Other Ingredients (₹ per Litre)" value={inputs.ingredientsPerLitre} name="ingredientsPerLitre" setter={handleInputChange} />
                    <MemoizedInputField label="Utilities (₹ per Litre)" value={inputs.utilitiesPerLitre} name="utilitiesPerLitre" setter={handleInputChange} />
                    <MemoizedInputField label="Distribution (₹ per Litre)" value={inputs.distributionPerLitre} name="distributionPerLitre" setter={handleInputChange} />
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

