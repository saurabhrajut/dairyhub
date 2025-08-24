
"use client";

import { useState, useMemo, memo, useCallback } from "react";
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


interface MixIngredient {
  id: number;
  name: string;
  percentage: string;
  costPerKg: string;
}

interface FixedExpense {
  id: number;
  name: string;
  cost: string;
}

const MemoizedMixIngredient = memo(function MixIngredientRow({ item, onChange, onRemove }: { item: MixIngredient, onChange: (item: MixIngredient) => void, onRemove: (id: number) => void }) {
    const [ingredient, setIngredient] = useState(item);

    const handleChange = (field: keyof MixIngredient, value: string) => {
        const updatedItem = { ...ingredient, [field]: value };
        setIngredient(updatedItem);
        onChange(updatedItem);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
            <Input className="sm:col-span-2" placeholder="Ingredient (e.g., Milk)" value={ingredient.name} onChange={(e) => handleChange('name', e.target.value)} />
            <Input type="number" placeholder="Mix %" value={ingredient.percentage} onChange={(e) => handleChange('percentage', e.target.value)} />
            <div className="flex items-center gap-2">
                <Input type="number" placeholder="Cost/Kg" value={ingredient.costPerKg} onChange={(e) => handleChange('costPerKg', e.target.value)} />
                <Button variant="ghost" size="icon" className="text-destructive" onClick={() => onRemove(ingredient.id)}><XCircle /></Button>
            </div>
        </div>
    );
});


const MemoizedFixedExpense = memo(function FixedExpenseRow({ item, onChange, onRemove }: { item: FixedExpense, onChange: (item: FixedExpense) => void, onRemove: (id: number) => void }) {
    const [expense, setExpense] = useState(item);

    const handleChange = (field: keyof FixedExpense, value: string) => {
        const updatedItem = { ...expense, [field]: value };
        setExpense(updatedItem);
        onChange(updatedItem);
    };
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
            <Input placeholder="Expense (e.g., Salaries)" value={expense.name} onChange={(e) => handleChange('name', e.target.value)} />
            <div className="flex items-center gap-2">
                <Input type="number" placeholder="Monthly Cost" value={expense.cost} onChange={(e) => handleChange('cost', e.target.value)} />
                <Button variant="ghost" size="icon" className="text-destructive" onClick={() => onRemove(item.id)}><XCircle /></Button>
            </div>
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
  const [batchSize, setBatchSize] = useState("100"); // kg
  const [unitsPerBatch, setUnitsPerBatch] = useState("1000"); // e.g., 1000 units of 100ml cups
  const [salePricePerUnit, setSalePricePerUnit] = useState("20");

  const [mixIngredients, setMixIngredients] = useState<MixIngredient[]>([
    { id: 1, name: "Milk", percentage: "60", costPerKg: "40" },
    { id: 2, name: "Cream", percentage: "15", costPerKg: "250" },
    { id: 3, name: "Sugar", percentage: "15", costPerKg: "50" },
    { id: 4, name: "SMP", percentage: "8", costPerKg: "300" },
    { id: 5, name: "Stabilizer/Emulsifier", percentage: "0.5", costPerKg: "800" },
  ]);

  const [otherVariableCosts, setOtherVariableCosts] = useState({
      packagingPerUnit: '2.5',
      flavorColorPerUnit: '1.0',
      utilitiesPerUnit: '0.5' // Electricity, water etc.
  });
  
  const [fixedExpenses, setFixedExpenses] = useState<FixedExpense[]>([
    { id: 1, name: "Salaries", cost: "150000" },
    { id: 2, name: "Rent", cost: "50000" },
    { id: 3, name: "Marketing & Other", cost: "25000" },
  ]);


  const handleAddMixIngredient = () => {
    setMixIngredients(prev => [...prev, { id: Date.now(), name: "", percentage: "", costPerKg: "" }]);
  };
  const handleRemoveMixIngredient = (id: number) => {
    setMixIngredients(prev => prev.filter(item => item.id !== id));
  };
  const handleMixIngredientChange = (updatedItem: MixIngredient) => {
    setMixIngredients(prev => prev.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const handleAddFixedExpense = () => {
    setFixedExpenses(prev => [...prev, { id: Date.now(), name: "", cost: "" }]);
  };
  const handleRemoveFixedExpense = (id: number) => {
    setFixedExpenses(prev => prev.filter(item => item.id !== id));
  };
  const handleFixedExpenseChange = (updatedItem: FixedExpense) => {
    setFixedExpenses(prev => prev.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const handleVariableCostChange = useCallback((field: keyof typeof otherVariableCosts, value: string) => {
      setOtherVariableCosts(prev => ({...prev, [field]: value}));
  }, []);
  

  const { totalRevenue, totalCogs, grossProfit, totalFixedCost, netProfitOrLoss, cogsPerUnit, profitPerUnit } = useMemo(() => {
    const bSize = parseFloat(batchSize) || 0;
    const units = parseFloat(unitsPerBatch) || 0;
    const salePrice = parseFloat(salePricePerUnit) || 0;
    
    if(bSize === 0 || units === 0) return { totalRevenue: 0, totalCogs: 0, grossProfit: 0, totalFixedCost: 0, netProfitOrLoss: 0, cogsPerUnit: 0, profitPerUnit: 0};

    const batchesPerMonth = 30; // Assuming daily production for monthly calculation
    const totalUnits = period === 'monthly' ? units * batchesPerMonth : units;

    // Revenue
    const totalRevenue = totalUnits * salePrice;
    
    // COGS
    const mixCostPerKg = mixIngredients.reduce((sum, item) => {
        const percentage = parseFloat(item.percentage) || 0;
        const costPerKg = parseFloat(item.costPerKg) || 0;
        return sum + ((percentage / 100) * costPerKg);
    }, 0);
    const totalMixCostPerBatch = mixCostPerKg * bSize;
    
    const packagingCostPerUnit = parseFloat(otherVariableCosts.packagingPerUnit) || 0;
    const flavorCostPerUnit = parseFloat(otherVariableCosts.flavorColorPerUnit) || 0;
    const utilitiesCostPerUnit = parseFloat(otherVariableCosts.utilitiesPerUnit) || 0;
    const otherVariableCostPerUnit = packagingCostPerUnit + flavorCostPerUnit + utilitiesCostPerUnit;
    const totalOtherVariableCostPerBatch = otherVariableCostPerUnit * units;

    const cogsPerBatch = totalMixCostPerBatch + totalOtherVariableCostPerBatch;
    const totalCogs = period === 'monthly' ? cogsPerBatch * batchesPerMonth : cogsPerBatch;
    const cogsPerUnit = totalCogs / totalUnits;
    
    // Profit
    const grossProfit = totalRevenue - totalCogs;

    const monthlyFixedCost = fixedExpenses.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0);
    const totalFixedCost = period === 'monthly' ? monthlyFixedCost : monthlyFixedCost / 30;
    
    const netProfitOrLoss = grossProfit - totalFixedCost;
    const profitPerUnit = netProfitOrLoss / totalUnits;

    return { totalRevenue, totalCogs, grossProfit, totalFixedCost, netProfitOrLoss, cogsPerUnit, profitPerUnit };
  }, [batchSize, unitsPerBatch, salePricePerUnit, mixIngredients, otherVariableCosts, fixedExpenses, period]);
  
  const totalMixPercentage = useMemo(() => {
    return mixIngredients.reduce((sum, item) => sum + (parseFloat(item.percentage) || 0), 0);
  }, [mixIngredients]);


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
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Ice Cream Plant Profit &amp; Loss Calculator</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">Analyze the financial health of your ice cream production.</DialogDescription>
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
                    <Label>Production Assumption</Label>
                    <p className="text-xs text-muted-foreground mt-1">Monthly calculations assume 30 production days.</p>
                </div>
            </div>

            <Section title="1. Batch &amp; Revenue Details" description="Define your production batch and sale price.">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <Label htmlFor="batch-size">Batch Size (kg)</Label>
                        <Input id="batch-size" type="number" value={batchSize} onChange={e => setBatchSize(e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="units-per-batch">Units per Batch</Label>
                        <Input id="units-per-batch" type="number" value={unitsPerBatch} onChange={e => setUnitsPerBatch(e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="sale-price">Sale Price per Unit (₹)</Label>
                        <Input id="sale-price" type="number" value={salePricePerUnit} onChange={e => setSalePricePerUnit(e.target.value)} />
                    </div>
                </div>
            </Section>

            <Section title="2. Cost of Goods Sold (COGS) - Variable Costs">
                <h4 className="font-semibold text-gray-700">A. Mix Ingredients</h4>
                <div className="space-y-3 mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center text-sm font-medium text-muted-foreground">
                        <p className="sm:col-span-2">Ingredient</p><p>Mix %</p><p>Cost/Kg (₹)</p>
                    </div>
                    {mixIngredients.map((item) => (
                        <MemoizedMixIngredient 
                            key={item.id}
                            item={item}
                            onChange={handleMixIngredientChange}
                            onRemove={handleRemoveMixIngredient}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <Button variant="outline" size="sm" onClick={handleAddMixIngredient}><PlusCircle className="mr-2"/> Add Ingredient</Button>
                    <p className={`text-sm font-bold ${totalMixPercentage !== 100 ? 'text-destructive' : 'text-green-600'}`}>Total: {totalMixPercentage.toFixed(1)}%</p>
                </div>
                 <h4 className="font-semibold text-gray-700 mt-6">B. Other Variable Costs (Per Unit)</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <div>
                        <Label htmlFor="packaging-cost">Packaging Cost (₹)</Label>
                        <Input id="packaging-cost" type="number" value={otherVariableCosts.packagingPerUnit} onChange={e => handleVariableCostChange('packagingPerUnit', e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="flavor-cost">Flavor/Color Cost (₹)</Label>
                        <Input id="flavor-cost" type="number" value={otherVariableCosts.flavorColorPerUnit} onChange={e => handleVariableCostChange('flavorColorPerUnit', e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor="utilities-cost">Utilities Cost (₹)</Label>
                        <Input id="utilities-cost" type="number" value={otherVariableCosts.utilitiesPerUnit} onChange={e => handleVariableCostChange('utilitiesPerUnit', e.target.value)} />
                    </div>
                 </div>
            </Section>

            <Section title="3. Fixed Expenses (Monthly Overhead)">
                 <div className="space-y-3">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center text-sm font-medium text-muted-foreground">
                        <p>Expense Name</p><p>Monthly Cost (₹)</p>
                    </div>
                    {fixedExpenses.map((item) => (
                        <MemoizedFixedExpense 
                            key={item.id}
                            item={item}
                            onChange={handleFixedExpenseChange}
                            onRemove={handleRemoveFixedExpense}
                        />
                    ))}
                </div>
                <Button variant="outline" size="sm" onClick={handleAddFixedExpense} className="mt-4"><PlusCircle className="mr-2"/> Add Fixed Expense</Button>
            </Section>
            
            <Alert className={`mt-8 ${netProfitOrLoss >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <AlertTitle className="text-xl font-bold">Financial Summary ({period})</AlertTitle>
                <AlertDescription>
                    <div className="mt-2 text-base">
                        <Table>
                           <TableBody>
                             <TableRow><TableCell>Total Revenue</TableCell><TableCell className="font-bold text-right">₹ {totalRevenue.toFixed(2)}</TableCell></TableRow>
                             <TableRow><TableCell>Total Cost of Goods Sold (COGS)</TableCell><TableCell className="font-bold text-right">₹ {totalCogs.toFixed(2)}</TableCell></TableRow>
                             <TableRow className="bg-muted/50"><TableCell className="font-semibold">Gross Profit</TableCell><TableCell className="font-bold text-right">₹ {grossProfit.toFixed(2)}</TableCell></TableRow>
                             <TableRow><TableCell>Total Fixed Costs</TableCell><TableCell className="font-bold text-right">₹ {totalFixedCost.toFixed(2)}</TableCell></TableRow>
                             <TableRow className={`font-bold text-lg ${netProfitOrLoss >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                <TableCell>{netProfitOrLoss >= 0 ? 'Net Profit' : 'Net Loss'}</TableCell>
                                <TableCell className="text-right">₹ {netProfitOrLoss.toFixed(2)}</TableCell>
                             </TableRow>
                           </TableBody>
                        </Table>
                         <h4 className="font-semibold mt-4 mb-2 text-center text-gray-600">Per Unit Economics</h4>
                         <Table>
                            <TableBody>
                                <TableRow><TableCell>Cost per Unit</TableCell><TableCell className="font-bold text-right">₹ {cogsPerUnit.toFixed(2)}</TableCell></TableRow>
                                <TableRow><TableCell>Profit per Unit</TableCell><TableCell className="font-bold text-right">₹ {profitPerUnit.toFixed(2)}</TableCell></TableRow>
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

