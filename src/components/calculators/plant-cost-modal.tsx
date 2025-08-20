
"use client";

import { useState, useMemo, memo } from "react";
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

interface RevenueItem {
  id: number;
  name: string;
  quantity: string;
  price: string;
}

interface ExpenseItem {
    id: number;
    name: string;
    cost: string;
}
  
interface ExpenseChangeArgs {
    id: number;
    type: "variable" | "fixed";
    field: keyof ExpenseItem;
    value: string;
}

// Memoized Revenue Item Row
const MemoizedRevenueItem = memo(function RevenueItemRow({ item, onChange, onRemove }: { item: RevenueItem, onChange: (id: number, field: keyof RevenueItem, value: string) => void, onRemove: (id: number) => void }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
            <Input className="sm:col-span-2" placeholder="Revenue Source (e.g., Milk Sale)" value={item.name} onChange={(e) => onChange(item.id, 'name', e.target.value)} />
            <Input type="number" placeholder="Quantity (Ltr/Kg)" value={item.quantity} onChange={(e) => onChange(item.id, 'quantity', e.target.value)} />
            <div className="flex items-center gap-2">
                <Input type="number" placeholder="Price per unit" value={item.price} onChange={(e) => onChange(item.id, 'price', e.target.value)} />
                <Button variant="ghost" size="icon" className="text-destructive" onClick={() => onRemove(item.id)}><XCircle /></Button>
            </div>
        </div>
    );
});

// Memoized Expense Item Row
const MemoizedExpenseItem = memo(function ExpenseItemRow({ item, type, onChange, onRemove }: { item: ExpenseItem, type: "variable" | "fixed", onChange: (args: ExpenseChangeArgs) => void, onRemove: (id: number) => void }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
            <Input placeholder="Expense (e.g., Raw Milk)" value={item.name} onChange={(e) => onChange({id: item.id, type: type, field: 'name', value: e.target.value})} />
            <div className="flex items-center gap-2">
                <Input type="number" placeholder="Cost" value={item.cost} onChange={(e) => onChange({id: item.id, type: type, field: 'cost', value: e.target.value})} />
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
  const [period, setPeriod] = useState("daily");
  
  const [revenues, setRevenues] = useState<RevenueItem[]>([
    { id: 1, name: "Milk Sale", quantity: "", price: "" },
    { id: 2, name: "Paneer Sale", quantity: "", price: "" },
  ]);
  const [variableExpenses, setVariableExpenses] = useState<ExpenseItem[]>([
    { id: 1, name: "Raw Milk Purchase", cost: "" },
    { id: 2, name: "Packaging", cost: "" },
    { id: 3, name: "Electricity/Fuel", cost: "" },
  ]);
  const [fixedExpenses, setFixedExpenses] = useState<ExpenseItem[]>([
    { id: 1, name: "Salaries", cost: "" },
    { id: 2, name: "Rent", cost: "" },
  ]);

  const handleAddItem = (type: "revenue" | "variable" | "fixed") => {
    const newItem = { id: Date.now(), name: "", cost: "", quantity: "", price: "" };
    if (type === "revenue") setRevenues([...revenues, newItem]);
    else if (type === "variable") setVariableExpenses([...variableExpenses, newItem as ExpenseItem]);
    else setFixedExpenses([...fixedExpenses, newItem as ExpenseItem]);
  };

  const handleRemoveItem = (id: number, type: "revenue" | "variable" | "fixed") => {
    if (type === "revenue") setRevenues(revenues.filter(item => item.id !== id));
    else if (type === "variable") setVariableExpenses(variableExpenses.filter(item => item.id !== id));
    else setFixedExpenses(fixedExpenses.filter(item => item.id !== id));
  };
  
  const handleRevenueChange = (id: number, field: keyof RevenueItem, value: string) => {
    setRevenues(revenues.map(item => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleExpenseChange = ({id, type, field, value}: ExpenseChangeArgs) => {
      const list = type === 'variable' ? variableExpenses : fixedExpenses;
      const setList = type === 'variable' ? setVariableExpenses : setFixedExpenses;
      setList(list.map(item => item.id === id ? {...item, [field]: value} : item));
  };

  const { totalRevenue, totalExpenses, profitOrLoss, periodMultiplier } = useMemo(() => {
    const periodMultiplier = period === "daily" ? 1 : 30;

    const totalRevenue = revenues.reduce((sum, item) => {
        const quantity = parseFloat(item.quantity) || 0;
        const price = parseFloat(item.price) || 0;
        return sum + (quantity * price);
    }, 0);

    const totalVariableCost = variableExpenses.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0);
    const totalFixedCostForPeriod = fixedExpenses.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0) / (period === "daily" ? 30 : 1);
    
    const totalExpenses = totalVariableCost + totalFixedCostForPeriod;

    const profitOrLoss = totalRevenue - totalExpenses;

    return { totalRevenue, totalExpenses, profitOrLoss, periodMultiplier };
  }, [revenues, variableExpenses, fixedExpenses, period]);
  

  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
      <div className="bg-card p-4 rounded-lg border mt-6">
          <h3 className="text-lg font-bold text-primary font-headline mb-4">{title}</h3>
          {children}
      </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Plant Profit & Loss Calculator</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">Calculate your dairy plant's financial health.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 mt-4">
            <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <Label htmlFor="period-select">Select Calculation Period</Label>
                <Select value={period} onValueChange={setPeriod}>
                    <SelectTrigger id="period-select"><SelectValue/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                </Select>
                 <p className="text-xs text-muted-foreground mt-2">Note: Fixed costs are always entered as monthly, and will be auto-adjusted for daily calculations.</p>
            </div>

            <Section title={`Total Revenue (${period})`}>
                 <div className="space-y-3">
                    {revenues.map((item) => (
                        <MemoizedRevenueItem 
                            key={item.id}
                            item={item}
                            onChange={handleRevenueChange}
                            onRemove={() => handleRemoveItem(item.id, 'revenue')}
                        />
                    ))}
                </div>
                <Button variant="outline" size="sm" onClick={() => handleAddItem('revenue')} className="mt-4"><PlusCircle className="mr-2"/> Add Revenue Item</Button>
            </Section>

            <Section title={`Total Variable Expenses (${period})`}>
                <div className="space-y-3">
                    {variableExpenses.map((item) => (
                        <MemoizedExpenseItem 
                            key={item.id}
                            item={item}
                            type="variable"
                            onChange={handleExpenseChange}
                            onRemove={() => handleRemoveItem(item.id, 'variable')}
                        />
                    ))}
                </div>
                <Button variant="outline" size="sm" onClick={() => handleAddItem('variable')} className="mt-4"><PlusCircle className="mr-2"/> Add Variable Expense</Button>
            </Section>

            <Section title="Total Fixed Expenses (Monthly)">
                 <div className="space-y-3">
                    {fixedExpenses.map((item) => (
                        <MemoizedExpenseItem 
                            key={item.id}
                            item={item}
                            type="fixed"
                            onChange={handleExpenseChange}
                            onRemove={() => handleRemoveItem(item.id, 'fixed')}
                        />
                    ))}
                </div>
                <Button variant="outline" size="sm" onClick={() => handleAddItem('fixed')} className="mt-4"><PlusCircle className="mr-2"/> Add Fixed Expense</Button>
            </Section>
            
            <Alert className={`mt-8 ${profitOrLoss >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <AlertTitle className="text-xl font-bold">Summary ({period})</AlertTitle>
                <AlertDescription>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <p>Total Revenue:</p> <p className="font-bold text-right">₹ {(totalRevenue * periodMultiplier).toFixed(2)}</p>
                        <p>Total Expenses:</p> <p className="font-bold text-right">₹ {(totalExpenses * periodMultiplier).toFixed(2)}</p>
                        <hr className="col-span-2 my-1" />
                        <p className="font-bold text-lg">{profitOrLoss >= 0 ? 'Profit' : 'Loss'}:</p>
                        <p className={`font-bold text-lg text-right ${profitOrLoss >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                            ₹ {(profitOrLoss * periodMultiplier).toFixed(2)}
                        </p>
                    </div>
                </AlertDescription>
            </Alert>
            <div className="h-12"></div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
