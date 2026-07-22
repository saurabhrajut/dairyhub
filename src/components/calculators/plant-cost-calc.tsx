"use client";

import React, { useState, useEffect, useRef, useMemo, memo, useCallback } from "react";
import { 
  FileSpreadsheet, Printer, Download, Trash2, Plus, RefreshCw, Info, Edit3, Calendar as CalendarIcon,
  DollarSign, Droplets, Target, Percent, ArrowRight, CheckCircle2, Loader2, FileDown, 
  LayoutDashboard, Package, Calculator, Weight, PieChart, XCircle, Scale, PlusCircle, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Interfaces
interface ProductCostRow {
  id: string;
  name: string;
  allocatedMilk: string;      // Raw input volume (L or Kg)
  rawMilkCost: string;        // ₹/L or Kg
  yieldFactor: string;        // Output qty per unit input (e.g. 1.0 for milk, 0.15 for paneer)
  sellingPrice: string;       // ₹/Unit of finished product
  packagingCost: string;      // ₹/Unit
  ingredientsCost: string;    // ₹/Unit
  energyCost: string;         // ₹/Unit
  logisticsCost: string;      // ₹/Unit
  processLoss: string;        // %
  type: "Liquid" | "Fermented" | "Drink" | "Solid" | "Frozen" | "Custom";
}

interface FixedExpenseRowData {
  id: string;
  name: string;
  cost: string;
}

// Preset Products list to initialize the grid
const DEFAULT_PRODUCTS: ProductCostRow[] = [
  { id: "p1", name: "Full Cream Milk (FCM)", allocatedMilk: "5000", rawMilkCost: "45", yieldFactor: "1.0", sellingPrice: "66", packagingCost: "2.2", ingredientsCost: "0.0", energyCost: "1.2", logisticsCost: "1.0", processLoss: "0.5", type: "Liquid" },
  { id: "p2", name: "Standard Milk", allocatedMilk: "3000", rawMilkCost: "45", yieldFactor: "1.0", sellingPrice: "60", packagingCost: "2.0", ingredientsCost: "0.0", energyCost: "1.2", logisticsCost: "1.0", processLoss: "0.5", type: "Liquid" },
  { id: "p3", name: "Toned Milk (TM)", allocatedMilk: "4000", rawMilkCost: "45", yieldFactor: "1.0", sellingPrice: "54", packagingCost: "1.8", ingredientsCost: "0.0", energyCost: "1.2", logisticsCost: "1.0", processLoss: "0.5", type: "Liquid" },
  { id: "p4", name: "Double Toned (DTM)", allocatedMilk: "0", rawMilkCost: "45", yieldFactor: "1.0", sellingPrice: "48", packagingCost: "1.8", ingredientsCost: "0.0", energyCost: "1.2", logisticsCost: "1.0", processLoss: "0.5", type: "Liquid" },
  { id: "p5", name: "Skimmed Milk (SM)", allocatedMilk: "0", rawMilkCost: "45", yieldFactor: "1.0", sellingPrice: "42", packagingCost: "1.8", ingredientsCost: "0.0", energyCost: "1.2", logisticsCost: "1.0", processLoss: "0.5", type: "Liquid" },
  { id: "p6", name: "Toned Curd (Dahi)", allocatedMilk: "1500", rawMilkCost: "45", yieldFactor: "1.0", sellingPrice: "65", packagingCost: "2.5", ingredientsCost: "0.5", energyCost: "2.0", logisticsCost: "1.5", processLoss: "1.0", type: "Fermented" },
  { id: "p7", name: "Paneer (Fresh)", allocatedMilk: "1000", rawMilkCost: "45", yieldFactor: "0.15", sellingPrice: "380", packagingCost: "5.0", ingredientsCost: "0.0", energyCost: "5.0", logisticsCost: "3.0", processLoss: "2.0", type: "Solid" },
  { id: "p8", name: "Sweet Lassi", allocatedMilk: "800", rawMilkCost: "45", yieldFactor: "1.2", sellingPrice: "90", packagingCost: "3.5", ingredientsCost: "2.5", energyCost: "2.0", logisticsCost: "1.5", processLoss: "1.5", type: "Drink" },
  { id: "p9", name: "Masala Chach", allocatedMilk: "1200", rawMilkCost: "45", yieldFactor: "1.6", sellingPrice: "35", packagingCost: "2.0", ingredientsCost: "1.5", energyCost: "1.5", logisticsCost: "1.0", processLoss: "1.5", type: "Drink" },
  { id: "p10", name: "Ice Cream", allocatedMilk: "0", rawMilkCost: "45", yieldFactor: "1.8", sellingPrice: "250", packagingCost: "10.0", ingredientsCost: "8.0", energyCost: "8.0", logisticsCost: "4.0", processLoss: "1.5", type: "Frozen" }
];

const DEFAULT_FIXED_EXPENSES: FixedExpenseRowData[] = [
  { id: "f1", name: "Salaries & Wages", cost: "150000" },
  { id: "f2", name: "Factory Rent", cost: "50000" },
  { id: "f3", name: "Electricity (Fixed)", cost: "15000" },
  { id: "f4", name: "Boiler Fuel & Water", cost: "25000" },
  { id: "f5", name: "Plant Maintenance", cost: "12000" },
  { id: "f6", name: "Marketing & Sales", cost: "20000" }
];

export default function PlantCostCalc() {
  const { toast } = useToast();
  const reportRef = useRef<HTMLDivElement>(null);
  const monthlyReportRef = useRef<HTMLDivElement>(null);
  
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  const [selectedMonth, setSelectedMonth] = useState(() => new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(() => new Date().getFullYear());

  const [period, setPeriod] = useState<"daily" | "monthly">("monthly");
  const [products, setProducts] = useState<ProductCostRow[]>(DEFAULT_PRODUCTS);
  const [fixedExpenses, setFixedExpenses] = useState<FixedExpenseRowData[]>(DEFAULT_FIXED_EXPENSES);
  const [taxRate, setTaxRate] = useState("0");
  const [workingDays, setWorkingDays] = useState("25");
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<"sheet" | "report" | "monthly" | "principles">("sheet");

  // Load from localStorage when Date changes
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem(`dairyhub_plant_products_${selectedDate}`);
      const savedFixed = localStorage.getItem(`dairyhub_plant_fixed_${selectedDate}`);
      const savedTax = localStorage.getItem(`dairyhub_plant_tax_${selectedDate}`);
      const savedDays = localStorage.getItem(`dairyhub_plant_days_${selectedDate}`);

      if (savedProducts) setProducts(JSON.parse(savedProducts));
      else setProducts(DEFAULT_PRODUCTS);

      if (savedFixed) setFixedExpenses(JSON.parse(savedFixed));
      else setFixedExpenses(DEFAULT_FIXED_EXPENSES);

      if (savedTax) setTaxRate(savedTax);
      else setTaxRate("0");

      if (savedDays) setWorkingDays(savedDays);
      else setWorkingDays("25");
    } catch (e) {
      console.error("Failed to load plant costing draft", e);
    }
  }, [selectedDate]);

  // Save changes to localStorage helper
  const saveDraft = useCallback((
    updatedProducts: ProductCostRow[],
    updatedFixed: FixedExpenseRowData[],
    updatedTax: string,
    updatedDays: string,
    targetDate: string
  ) => {
    try {
      localStorage.setItem(`dairyhub_plant_products_${targetDate}`, JSON.stringify(updatedProducts));
      localStorage.setItem(`dairyhub_plant_fixed_${targetDate}`, JSON.stringify(updatedFixed));
      localStorage.setItem(`dairyhub_plant_tax_${targetDate}`, updatedTax);
      localStorage.setItem(`dairyhub_plant_days_${targetDate}`, updatedDays);

      // Track saved dates
      const savedDates = localStorage.getItem("dairyhub_plant_saved_dates");
      const list: string[] = savedDates ? JSON.parse(savedDates) : [];
      if (!list.includes(targetDate)) {
        list.push(targetDate);
        localStorage.setItem("dairyhub_plant_saved_dates", JSON.stringify(list));
      }
    } catch (e) {
      console.error("Failed to save draft", e);
    }
  }, []);

  // Update handlers
  const handleProductChange = (id: string, field: keyof ProductCostRow, val: string) => {
    const updated = products.map(p => p.id === id ? { ...p, [field]: val } : p);
    setProducts(updated);
    saveDraft(updated, fixedExpenses, taxRate, workingDays, selectedDate);
  };

  const handleFixedExpenseChange = (id: string, field: keyof FixedExpenseRowData, val: string) => {
    const updated = fixedExpenses.map(f => f.id === id ? { ...f, [field]: val } : f);
    setFixedExpenses(updated);
    saveDraft(products, updated, taxRate, workingDays, selectedDate);
  };

  const handleAddFixedExpense = () => {
    const updated = [...fixedExpenses, { id: `f_${Date.now()}`, name: "", cost: "0" }];
    setFixedExpenses(updated);
    saveDraft(products, updated, taxRate, workingDays, selectedDate);
  };

  const handleRemoveFixedExpense = (id: string) => {
    const updated = fixedExpenses.filter(f => f.id !== id);
    setFixedExpenses(updated);
    saveDraft(products, updated, taxRate, workingDays, selectedDate);
  };

  const handleAddProduct = () => {
    const updated: ProductCostRow[] = [...products, {
      id: `p_${Date.now()}`,
      name: "Custom Product",
      allocatedMilk: "0",
      rawMilkCost: "45",
      yieldFactor: "1.0",
      sellingPrice: "50",
      packagingCost: "2.0",
      ingredientsCost: "0.0",
      energyCost: "1.0",
      logisticsCost: "1.0",
      processLoss: "0.5",
      type: "Custom"
    }];
    setProducts(updated);
    saveDraft(updated, fixedExpenses, taxRate, workingDays, selectedDate);
  };

  const handleRemoveProduct = (id: string) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    saveDraft(updated, fixedExpenses, taxRate, workingDays, selectedDate);
  };

  const handleDaysChange = (val: string) => {
    setWorkingDays(val);
    saveDraft(products, fixedExpenses, taxRate, val, selectedDate);
  };

  const handleTaxChange = (val: string) => {
    setTaxRate(val);
    saveDraft(products, fixedExpenses, val, workingDays, selectedDate);
  };

  const handleReset = () => {
    if (window.confirm("क्या आप इस तारीख की गणनाओं को डिफ़ॉल्ट पर रीसेट करना चाहते हैं?")) {
      setProducts(DEFAULT_PRODUCTS);
      setFixedExpenses(DEFAULT_FIXED_EXPENSES);
      setTaxRate("0");
      setWorkingDays("25");
      saveDraft(DEFAULT_PRODUCTS, DEFAULT_FIXED_EXPENSES, "0", "25", selectedDate);
      toast({
        title: "Reset Successful",
        description: "Data has been reset to defaults for this date.",
      });
    }
  };

  // FINANCIAL CORE CALCULATION LOGIC
  const financials = useMemo(() => {
    const numDays = parseFloat(workingDays) || 25;
    const numTaxRate = parseFloat(taxRate) || 0;

    let totalAllocatedMilkDaily = 0;
    let totalRevenueDaily = 0;
    let totalRawMilkCostDaily = 0;
    let totalVariableProcessingCostDaily = 0;
    
    // Calculate product-wise details
    const productCalculations = products.map(prod => {
      const allocatedDaily = parseFloat(prod.allocatedMilk) || 0;
      const rawCostPerL = parseFloat(prod.rawMilkCost) || 0;
      const yieldFact = parseFloat(prod.yieldFactor) || 0;
      const sellPrice = parseFloat(prod.sellingPrice) || 0;
      const pack = parseFloat(prod.packagingCost) || 0;
      const ing = parseFloat(prod.ingredientsCost) || 0;
      const energy = parseFloat(prod.energyCost) || 0;
      const logistics = parseFloat(prod.logisticsCost) || 0;
      const lossPct = parseFloat(prod.processLoss) || 0;

      // Outputs
      const dailyGrossOutput = allocatedDaily * yieldFact;
      const dailyLossQty = dailyGrossOutput * (lossPct / 100);
      const dailySaleableQty = Math.max(0, dailyGrossOutput - dailyLossQty);

      // Financials
      const dailyRevenue = dailySaleableQty * sellPrice;
      const dailyRawMilkCost = allocatedDaily * rawCostPerL;
      const dailyVariableProcCost = dailySaleableQty * (pack + ing + energy + logistics);
      const dailyTotalVariableCost = dailyRawMilkCost + dailyVariableProcCost;
      const dailyContribution = dailyRevenue - dailyTotalVariableCost;

      // Totals Accumulation
      totalAllocatedMilkDaily += allocatedDaily;
      totalRevenueDaily += dailyRevenue;
      totalRawMilkCostDaily += dailyRawMilkCost;
      totalVariableProcessingCostDaily += dailyVariableProcCost;

      // Per Unit metrics
      const unitVariableCost = dailySaleableQty > 0 ? dailyTotalVariableCost / dailySaleableQty : 0;
      const unitContribution = sellPrice - unitVariableCost;
      const contributionMarginPct = sellPrice > 0 ? (unitContribution / sellPrice) * 100 : 0;

      return {
        id: prod.id,
        name: prod.name,
        allocatedDaily,
        dailySaleableQty,
        dailyRevenue,
        dailyRawMilkCost,
        dailyVariableProcCost,
        dailyTotalVariableCost,
        dailyContribution,
        unitVariableCost,
        unitContribution,
        contributionMarginPct,
        yieldFact,
        lossPct
      };
    });

    // Sum up totals based on the selected period (daily vs monthly)
    const multiplier = period === "monthly" ? numDays : 1;

    const periodAllocatedMilk = totalAllocatedMilkDaily * multiplier;
    const periodRevenue = totalRevenueDaily * multiplier;
    const periodRawMilkCost = totalRawMilkCostDaily * multiplier;
    const periodVariableProcessingCost = totalVariableProcessingCostDaily * multiplier;
    const periodTotalVariableCost = periodRawMilkCost + periodVariableProcessingCost;

    // Fixed Overheads
    const monthlyFixedExpenses = fixedExpenses.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0);
    const periodFixedCost = period === "monthly" ? monthlyFixedExpenses : monthlyFixedExpenses / numDays;

    const periodTotalCost = periodTotalVariableCost + periodFixedCost;
    
    // Profit Metrics
    const grossProfit = periodRevenue - periodTotalVariableCost;
    const netProfitPreTax = periodRevenue - periodTotalCost;
    const taxAmount = netProfitPreTax > 0 ? netProfitPreTax * (numTaxRate / 100) : 0;
    const netProfitPostTax = netProfitPreTax - taxAmount;
    const profitMarginPct = periodRevenue > 0 ? (netProfitPostTax / periodRevenue) * 100 : 0;

    // Overall Cost of Processing (CoP) per litre of milk intake
    const overallCoPPerLitre = periodAllocatedMilk > 0 ? (periodTotalCost - periodRawMilkCost) / periodAllocatedMilk : 0;

    // Multi-Product Break-Even calculations
    const totalContributionDaily = totalRevenueDaily - periodTotalVariableCost / multiplier;
    const overallCMR = totalRevenueDaily > 0 ? totalContributionDaily / totalRevenueDaily : 0;
    
    const breakEvenRevenue = overallCMR > 0 ? periodFixedCost / overallCMR : 0;
    const safetyMarginPct = periodRevenue > 0 ? ((periodRevenue - breakEvenRevenue) / periodRevenue) * 100 : 0;

    const costStructure = {
      rawMilk: periodTotalCost > 0 ? (periodRawMilkCost / periodTotalCost) * 100 : 0,
      processing: periodTotalCost > 0 ? (periodVariableProcessingCost / periodTotalCost) * 100 : 0,
      fixedOverheads: periodTotalCost > 0 ? (periodFixedCost / periodTotalCost) * 100 : 0,
    };

    return {
      periodAllocatedMilk,
      periodRevenue,
      periodRawMilkCost,
      periodVariableProcessingCost,
      periodTotalVariableCost,
      monthlyFixedExpenses,
      periodFixedCost,
      periodTotalCost,
      grossProfit,
      netProfitPreTax,
      taxAmount,
      netProfitPostTax,
      profitMarginPct,
      overallCoPPerLitre,
      breakEvenRevenue,
      safetyMarginPct,
      costStructure,
      productCalculations
    };
  }, [products, fixedExpenses, period, workingDays, taxRate]);

  // MONTHLY DYNAMIC DATA AGGREGATOR
  const getMonthlySummaryData = useCallback((year: number, month: number) => {
    // Correctly get number of days in the month (e.g. 28, 29, 30, 31)
    const daysInMonth = new Date(year, month, 0).getDate();
    const dailyList = [];
    
    let totalAllocatedMilk = 0;
    let totalRevenue = 0;
    let totalVariableCost = 0;
    let totalFixedCost = 0;
    let totalCost = 0;
    let totalNetProfit = 0;

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const savedProducts = localStorage.getItem(`dairyhub_plant_products_${dateStr}`);
      const savedFixed = localStorage.getItem(`dairyhub_plant_fixed_${dateStr}`);
      const savedTax = localStorage.getItem(`dairyhub_plant_tax_${dateStr}`);
      const savedDays = localStorage.getItem(`dairyhub_plant_days_${dateStr}`);

      if (savedProducts && savedFixed) {
        try {
          const productsList: ProductCostRow[] = JSON.parse(savedProducts);
          const fixedList: FixedExpenseRowData[] = JSON.parse(savedFixed);
          const numTaxRate = parseFloat(savedTax || "0") || 0;
          const numDays = parseFloat(savedDays || "25") || 25;

          let dayAllocated = 0;
          let dayRevenue = 0;
          let dayRawMilkCost = 0;
          let dayVariableProcCost = 0;

          productsList.forEach(prod => {
            const qty = parseFloat(prod.allocatedMilk) || 0;
            const raw = parseFloat(prod.rawMilkCost) || 0;
            const y = parseFloat(prod.yieldFactor) || 0;
            const price = parseFloat(prod.sellingPrice) || 0;
            const pack = parseFloat(prod.packagingCost) || 0;
            const ing = parseFloat(prod.ingredientsCost) || 0;
            const energy = parseFloat(prod.energyCost) || 0;
            const logistics = parseFloat(prod.logisticsCost) || 0;
            const loss = parseFloat(prod.processLoss) || 0;

            const gross = qty * y;
            const saleable = Math.max(0, gross - (gross * loss / 105)); // Exact loss percentage formula

            dayAllocated += qty;
            dayRevenue += saleable * price;
            dayRawMilkCost += qty * raw;
            dayVariableProcCost += saleable * (pack + ing + energy + logistics);
          });

          const dayVariableCost = dayRawMilkCost + dayVariableProcCost;
          
          const monthlyFixed = fixedList.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0);
          const dayFixedCost = monthlyFixed / numDays;

          const dayTotalCost = dayVariableCost + dayFixedCost;
          const dayNetProfitPreTax = dayRevenue - dayTotalCost;
          const dayTax = dayNetProfitPreTax > 0 ? dayNetProfitPreTax * (numTaxRate / 100) : 0;
          const dayNetProfit = dayNetProfitPreTax - dayTax;

          totalAllocatedMilk += dayAllocated;
          totalRevenue += dayRevenue;
          totalVariableCost += dayVariableCost;
          totalFixedCost += dayFixedCost;
          totalCost += dayTotalCost;
          totalNetProfit += dayNetProfit;

          dailyList.push({
            date: dateStr,
            hasData: true,
            allocatedMilk: dayAllocated,
            revenue: dayRevenue,
            variableCost: dayVariableCost,
            fixedCost: dayFixedCost,
            totalCost: dayTotalCost,
            netProfit: dayNetProfit
          });
        } catch (e) {
          console.error("Failed to parse daily plant costing", dateStr, e);
          dailyList.push({ date: dateStr, hasData: false });
        }
      } else {
        dailyList.push({ date: dateStr, hasData: false });
      }
    }

    return {
      dailyList,
      totals: {
        allocatedMilk: totalAllocatedMilk,
        revenue: totalRevenue,
        variableCost: totalVariableCost,
        fixedCost: totalFixedCost,
        totalCost: totalCost,
        netProfit: totalNetProfit
      }
    };
  }, []);

  // Browser Print handler
  const handlePrintMonthly = () => {
    window.print();
  };

  // CSV Export for Excel
  const handleExportMonthlyCSV = () => {
    const data = getMonthlySummaryData(selectedYear, selectedMonth);
    const headers = [
      "Date", "Milk Processed (L/Kg)", "Total Revenue (₹)", "Variable Cost (₹)", "Fixed Cost (₹)", "Total Cost (₹)", "Net Profit (₹)"
    ];

    const rows = data.dailyList.map(row => {
      const dayNum = row.date.split("-")[2];
      if (!row.hasData) {
        return [row.date, "—", "—", "—", "—", "—", "—"];
      }
      return [
        row.date,
        row.allocatedMilk || 0,
        row.revenue || 0,
        row.variableCost || 0,
        row.fixedCost || 0,
        row.totalCost || 0,
        row.netProfit || 0
      ];
    });

    // Add totals row
    rows.push([
      "Total",
      data.totals.allocatedMilk,
      data.totals.revenue,
      data.totals.variableCost,
      data.totals.fixedCost,
      data.totals.totalCost,
      data.totals.netProfit
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Plant_Costing_Monthly_Summary_${selectedYear}_${selectedMonth}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fmt = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  const fmtDec = (n: number, dec = 2) => n.toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec });

  const downloadPdf = async () => {
    if (!reportRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(reportRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Dairy_Hub_Plant_Cost_Report_${selectedDate}.pdf`);
      toast({
        title: "Export Completed",
        description: "Your PDF Costing Report has been downloaded.",
      });
    } catch (e) {
      console.error(e);
      toast({
        title: "Export Failed",
        description: "Failed to generate report PDF. Please try again.",
        variant: "destructive"
      });
    }
    setIsDownloading(false);
  };

  // PDF Export for monthly summary sheet
  const downloadMonthlyPdf = async () => {
    if (!monthlyReportRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(monthlyReportRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Dairy_Hub_Plant_Monthly_Cost_Summary_${selectedYear}_${selectedMonth}.pdf`);
      toast({
        title: "Export Completed",
        description: "Your PDF Monthly Costing Report has been downloaded.",
      });
    } catch (e) {
      console.error(e);
      toast({
        title: "Export Failed",
        description: "Failed to generate report PDF. Please try again.",
        variant: "destructive"
      });
    }
    setIsDownloading(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Card */}
      <Card className="border-b-4 border-b-indigo-600 shadow-md">
        <CardHeader className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-6 rounded-t-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold font-headline">
                <FileSpreadsheet className="h-7 w-7 text-indigo-400" />
                Dairy Plant Costing Calculator (लागत गणना पत्रक)
              </CardTitle>
              <CardDescription className="text-indigo-200 mt-1 text-xs md:text-sm">
                Real-time multi-product Excel-based spreadsheet simulation. Enter parameters to analyze plant P&L.
              </CardDescription>
            </div>
            
            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              
              {/* Daily / Monthly Period Tab selection */}
              {activeTab !== "monthly" && (
                <div className="flex items-center bg-white/10 rounded-lg p-1 border border-white/20">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => setPeriod("daily")} 
                    className={cn("h-8 text-xs text-white hover:bg-white/20 font-bold", period === "daily" && "bg-indigo-600 hover:bg-indigo-700")}
                  >
                    Daily
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => setPeriod("monthly")} 
                    className={cn("h-8 text-xs text-white hover:bg-white/20 font-bold", period === "monthly" && "bg-indigo-600 hover:bg-indigo-700")}
                  >
                    Monthly
                  </Button>
                </div>
              )}

              {/* Date Selector for daily views */}
              {activeTab !== "monthly" ? (
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg text-sm font-semibold">
                  <CalendarIcon className="h-4 w-4 text-indigo-400" />
                  <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-transparent border-none text-white focus:outline-none focus:ring-0 text-xs w-[115px] cursor-pointer" 
                  />
                </div>
              ) : (
                /* Month & Year selectors for monthly views */
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg text-sm font-semibold">
                    <span className="text-[10px] font-bold text-indigo-200 uppercase">Month:</span>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                      className="bg-transparent border-none text-white focus:outline-none text-xs w-[85px] cursor-pointer bg-indigo-900"
                    >
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1} className="text-black">
                          {new Date(2026, i, 1).toLocaleString("en-IN", { month: "long" })}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg text-sm font-semibold">
                    <span className="text-[10px] font-bold text-indigo-200 uppercase">Year:</span>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                      className="bg-transparent border-none text-white focus:outline-none text-xs w-[60px] cursor-pointer bg-indigo-900"
                    >
                      {[2024, 2025, 2026, 2027, 2028].map((y) => (
                        <option key={y} value={y} className="text-black">
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Reset */}
              {activeTab !== "monthly" && (
                <Button size="icon" variant="destructive" onClick={handleReset} title="Reset Data for selected date" className="h-9 w-9">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        {/* Tab Selection */}
        <div className="flex border-t bg-slate-50 overflow-x-auto text-sm">
          <button 
            onClick={() => setActiveTab("sheet")} 
            className={cn("px-6 py-3 font-bold border-b-2 transition-all flex items-center gap-2", activeTab === "sheet" ? "border-indigo-600 text-indigo-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-700")}
          >
            <Scale className="w-4 h-4"/> Input Spreadsheet Grid
          </button>
          <button 
            onClick={() => setActiveTab("report")} 
            className={cn("px-6 py-3 font-bold border-b-2 transition-all flex items-center gap-2", activeTab === "report" ? "border-indigo-600 text-indigo-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-700")}
          >
            <PieChart className="w-4 h-4"/> Daily P&L Dashboard
          </button>
          <button 
            onClick={() => setActiveTab("monthly")} 
            className={cn("px-6 py-3 font-bold border-b-2 transition-all flex items-center gap-2", activeTab === "monthly" ? "border-indigo-600 text-indigo-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-700")}
          >
            <FileSpreadsheet className="w-4 h-4"/> Monthly Summary (मासिक सारांश)
          </button>
          <button 
            onClick={() => setActiveTab("principles")} 
            className={cn("px-6 py-3 font-bold border-b-2 transition-all flex items-center gap-2", activeTab === "principles" ? "border-indigo-600 text-indigo-600 bg-white" : "border-transparent text-slate-500 hover:text-slate-700")}
          >
            <Info className="w-4 h-4"/> Formulas & Principles
          </button>
        </div>
      </Card>

      {/* Global Config Row (Daily edit mode only) */}
      {activeTab !== "monthly" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in slide-in-from-top-1">
          <Card className="p-3 border shadow-sm flex flex-col justify-between">
            <Label className="text-[10px] font-bold text-slate-400 uppercase">Working Days / Month (कार्य दिवस)</Label>
            <div className="flex items-center gap-2 mt-1">
              <Input 
                type="number" 
                value={workingDays} 
                onChange={(e) => handleDaysChange(e.target.value)} 
                className="h-8 text-sm font-bold border-indigo-200 focus:ring-indigo-500" 
              />
              <span className="text-xs text-slate-500 font-semibold">Days</span>
            </div>
          </Card>
          
          <Card className="p-3 border shadow-sm flex flex-col justify-between">
            <Label className="text-[10px] font-bold text-slate-400 uppercase">Income Tax Rate (आयकर दर)</Label>
            <div className="flex items-center gap-2 mt-1">
              <Input 
                type="number" 
                value={taxRate} 
                onChange={(e) => handleTaxChange(e.target.value)} 
                className="h-8 text-sm font-bold border-indigo-200 focus:ring-indigo-500" 
              />
              <span className="text-xs text-slate-500 font-semibold">%</span>
            </div>
          </Card>

          <Card className="p-3 border shadow-sm flex flex-col justify-between bg-indigo-50/50">
            <Label className="text-[10px] font-bold text-indigo-500 uppercase">Total Raw Milk Processed</Label>
            <div className="mt-1">
              <span className="text-lg font-extrabold text-indigo-900">{fmt(financials.periodAllocatedMilk)}</span>
              <span className="text-[10px] text-indigo-600 font-semibold ml-1">L/Kg per {period === 'monthly' ? 'month' : 'day'}</span>
            </div>
          </Card>

          <Card className="p-3 border shadow-sm flex flex-col justify-between bg-green-50/50">
            <Label className="text-[10px] font-bold text-green-600 uppercase">Net Profit (Post-Tax)</Label>
            <div className="mt-1">
              <span className={cn("text-lg font-extrabold", financials.netProfitPostTax >= 0 ? "text-green-700" : "text-red-600")}>
                ₹ {fmt(financials.netProfitPostTax)}
              </span>
              <span className="text-[10px] text-green-600 font-semibold ml-1">/ {period === 'monthly' ? 'Month' : 'Day'}</span>
            </div>
          </Card>
        </div>
      )}

      {/* TAB 1: SPREADSHEET GRID */}
      {activeTab === "sheet" && (
        <div className="space-y-6">
          
          {/* Main Grid Card */}
          <Card className="border border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-100 p-4 border-b">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base font-bold text-indigo-950 flex items-center gap-1.5">
                  <FileSpreadsheet className="h-5 w-5 text-indigo-600" />
                  Product Cost Parameters Spreadsheet (उत्पाद लागत विवरणिका)
                </CardTitle>
                <Button size="sm" variant="outline" onClick={handleAddProduct} className="h-8 text-xs bg-white text-indigo-600 font-bold border-indigo-200 hover:bg-indigo-50">
                  <Plus className="w-3.5 h-3.5 mr-1" /> Add Product
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full overflow-x-auto">
                <Table className="min-w-[1200px] text-xs">
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="font-bold text-slate-800 w-[180px]">Product Name</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[100px]">Milk Vol (L/Kg)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[90px]">Milk Cost (₹/L)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[80px]">Yield Factor</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[80px]">Price (₹/Unit)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[80px]">Pack (₹/U)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[80px]">Ingredients (₹/U)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[80px]">Energy (₹/U)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[80px]">Logistics (₹/U)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[70px]">Loss (%)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-right w-[110px] bg-indigo-50/50">Finished Qty</TableHead>
                      <TableHead className="font-bold text-slate-800 text-right w-[120px] bg-green-50/50">Margin (₹)</TableHead>
                      <TableHead className="font-bold text-slate-800 text-center w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((prod) => {
                      const calc = financials.productCalculations.find(c => c.id === prod.id);
                      return (
                        <TableRow key={prod.id} className="hover:bg-slate-50 border-b">
                          <TableCell className="font-bold text-slate-700">
                            <Input 
                              type="text" 
                              value={prod.name} 
                              onChange={(e) => handleProductChange(prod.id, "name", e.target.value)} 
                              className="h-8 text-xs font-bold border-transparent hover:border-slate-300 focus:border-indigo-500 bg-transparent py-1 px-2" 
                            />
                          </TableCell>
                          
                          <TableCell className="p-1">
                            <Input 
                              type="number" 
                              value={prod.allocatedMilk} 
                              onChange={(e) => handleProductChange(prod.id, "allocatedMilk", e.target.value)} 
                              className="h-8 text-xs text-center font-semibold" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" 
                              value={prod.rawMilkCost} 
                              onChange={(e) => handleProductChange(prod.id, "rawMilkCost", e.target.value)} 
                              className="h-8 text-xs text-center" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" step="0.01"
                              value={prod.yieldFactor} 
                              onChange={(e) => handleProductChange(prod.id, "yieldFactor", e.target.value)} 
                              className="h-8 text-xs text-center" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" 
                              value={prod.sellingPrice} 
                              onChange={(e) => handleProductChange(prod.id, "sellingPrice", e.target.value)} 
                              className="h-8 text-xs text-center font-bold text-green-700" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" step="0.1"
                              value={prod.packagingCost} 
                              onChange={(e) => handleProductChange(prod.id, "packagingCost", e.target.value)} 
                              className="h-8 text-xs text-center" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" step="0.1"
                              value={prod.ingredientsCost} 
                              onChange={(e) => handleProductChange(prod.id, "ingredientsCost", e.target.value)} 
                              className="h-8 text-xs text-center" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" step="0.1"
                              value={prod.energyCost} 
                              onChange={(e) => handleProductChange(prod.id, "energyCost", e.target.value)} 
                              className="h-8 text-xs text-center" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" step="0.1"
                              value={prod.logisticsCost} 
                              onChange={(e) => handleProductChange(prod.id, "logisticsCost", e.target.value)} 
                              className="h-8 text-xs text-center" 
                            />
                          </TableCell>

                          <TableCell className="p-1">
                            <Input 
                              type="number" step="0.1"
                              value={prod.processLoss} 
                              onChange={(e) => handleProductChange(prod.id, "processLoss", e.target.value)} 
                              className="h-8 text-xs text-center text-red-600" 
                            />
                          </TableCell>

                          <TableCell className="text-right font-bold bg-indigo-50/20 pr-3">
                            {calc ? fmt(calc.dailySaleableQty) : 0} units
                          </TableCell>

                          <TableCell className={cn("text-right font-bold pr-3 bg-green-50/20", (calc?.dailyContribution || 0) >= 0 ? "text-green-700" : "text-red-600")}>
                            ₹ {calc ? fmt(calc.dailyContribution) : 0}
                          </TableCell>

                          <TableCell className="text-center">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleRemoveProduct(prod.id)}
                              className="h-6 w-6 text-red-500 hover:bg-red-50"
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Fixed Expenses Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="md:col-span-2 border border-slate-200 shadow-sm">
              <CardHeader className="bg-slate-100 p-4 border-b flex flex-row justify-between items-center">
                <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Calculator className="h-4.5 w-4.5 text-indigo-600" />
                  Monthly Fixed Overheads (मासिक स्थिर खर्चे)
                </CardTitle>
                <Button size="sm" variant="outline" onClick={handleAddFixedExpense} className="h-7 text-xs bg-white border-slate-200">
                  <Plus className="w-3.5 h-3.5 mr-1" /> Add Expense
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {fixedExpenses.map((expense) => (
                    <div key={expense.id} className="flex gap-2 items-center bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <Input 
                        placeholder="Expense Name" 
                        value={expense.name} 
                        onChange={(e) => handleFixedExpenseChange(expense.id, "name", e.target.value)} 
                        className="h-8 text-xs bg-white font-semibold flex-grow" 
                      />
                      <div className="relative w-28 shrink-0">
                        <Input 
                          type="number" 
                          value={expense.cost} 
                          onChange={(e) => handleFixedExpenseChange(expense.id, "cost", e.target.value)} 
                          className="h-8 text-xs bg-white text-right pr-6 font-bold" 
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">₹</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleRemoveFixedExpense(expense.id)}
                        className="h-7 w-7 text-red-500 hover:bg-red-50 shrink-0"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t flex justify-between items-center text-xs font-bold text-slate-600 bg-slate-100 p-2 rounded-lg mt-2">
                  <span>कुल मासिक स्थिर ओवरहेड्स (Total Monthly Fixed Overheads):</span>
                  <span className="text-sm font-black text-indigo-900">₹ {fmt(financials.monthlyFixedExpenses)}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-indigo-100 bg-indigo-50/30 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5 mb-3">
                  <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                  Quick Financial Health
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-1.5 text-xs text-slate-600">
                    <span>Total Period Revenue:</span>
                    <strong className="text-green-700">₹ {fmt(financials.periodRevenue)}</strong>
                  </div>
                  <div className="flex justify-between border-b pb-1.5 text-xs text-slate-600">
                    <span>Total Period Cost:</span>
                    <strong className="text-red-600">₹ {fmt(financials.periodTotalCost)}</strong>
                  </div>
                  <div className="flex justify-between border-b pb-1.5 text-xs text-slate-600">
                    <span>Gross Operating Profit:</span>
                    <strong className="text-indigo-700">₹ {fmt(financials.grossProfit)}</strong>
                  </div>
                  <div className="flex justify-between pb-1 text-xs text-slate-600">
                    <span>Net Profit Margin:</span>
                    <Badge className={cn("text-[10px]", financials.profitMarginPct >= 15 ? "bg-green-600" : (financials.profitMarginPct > 0 ? "bg-amber-500" : "bg-red-500"))}>
                      {fmtDec(financials.profitMarginPct, 1)}%
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-indigo-100">
                <Button 
                  onClick={() => setActiveTab("report")}
                  className="w-full bg-indigo-600 text-white font-bold h-9 hover:bg-indigo-700 text-xs shadow-sm flex items-center justify-center gap-1"
                >
                  View P&L Report <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </Card>

          </div>

        </div>
      )}

      {/* TAB 2: DAILY P&L DASHBOARD */}
      {activeTab === "report" && (
        <div className="space-y-6 animate-in fade-in-50 duration-200">
          
          <div className="flex justify-end">
            <Button onClick={downloadPdf} disabled={isDownloading} className="bg-indigo-600 hover:bg-indigo-700 h-10 text-xs shadow-md font-bold text-white flex gap-1">
              {isDownloading ? <Loader2 className="w-4 h-4 animate-spin"/> : <FileDown className="w-4 h-4"/>} 
              Download Costing Report PDF
            </Button>
          </div>

          <div ref={reportRef} id="print-area" className="bg-white border-2 border-indigo-100 rounded-xl overflow-hidden shadow-lg p-6 space-y-6 print:border-none print:shadow-none print:p-0 print:m-0 print:w-[210mm] print:h-[297mm]">
            
            {/* Print Header */}
            <div className="flex justify-between items-start border-b pb-4">
              <div>
                <h1 className="text-xl font-bold text-indigo-950 tracking-tight font-headline flex items-center gap-1.5">
                  <FileSpreadsheet className="h-6 w-6 text-indigo-600" />
                  DAIRY HUB - PLANT COSTING & PROFITABILITY SHEET
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  Date of Generation: {selectedDate} | Analysis Period: {period.toUpperCase()} ({workingDays} operating days/mo)
                </p>
              </div>
              <Badge variant="outline" className="border-indigo-600 text-indigo-600 font-bold px-3 py-1 uppercase tracking-wider">
                {period} report
              </Badge>
            </div>

            {/* Overall Health Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border bg-slate-50 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400">Total Milk Processed</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-xl font-black text-slate-800">{fmt(financials.periodAllocatedMilk)}</span>
                  <span className="text-xs font-semibold text-slate-500">L/Kg</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border bg-slate-50 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400">Total Operating Cost</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-xl font-black text-red-600">₹ {fmt(financials.periodTotalCost)}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border bg-slate-50 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400">Net Profit (Post-Tax)</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className={cn("text-xl font-black", financials.netProfitPostTax >= 0 ? "text-green-600" : "text-red-500")}>
                    ₹ {fmt(financials.netProfitPostTax)}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl border bg-slate-50 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400">Cost of Processing (CoP)</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-xl font-black text-indigo-700">₹ {fmtDec(financials.overallCoPPerLitre)}</span>
                  <span className="text-xs font-semibold text-indigo-500">/Litre</span>
                </div>
              </div>
            </div>

            {/* Break-Even Progress Bar */}
            <Card className="p-4 border border-indigo-100 bg-slate-50/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Target className="h-4 w-4 text-indigo-600" />
                  Plant Break-Even Point (BEP) Analysis (सम-विच्छेद विश्लेषण)
                </span>
                <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-bold", financials.safetyMarginPct > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                  {financials.safetyMarginPct > 0 ? `Safety Margin: +${financials.safetyMarginPct.toFixed(1)}%` : `Operating at Loss: ${financials.safetyMarginPct.toFixed(1)}%`}
                </span>
              </div>
              
              {financials.safetyMarginPct > 0 ? (
                <div className="space-y-1">
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex border">
                    <div className="bg-indigo-600 h-full" style={{ width: `${Math.max(5, Math.min(95, 100 - financials.safetyMarginPct))}%` }} />
                    <div className="bg-green-500 h-full" style={{ width: `${Math.max(5, Math.min(95, financials.safetyMarginPct))}%` }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-500">
                    <span>Break-Even Turnaround: ₹ {fmt(financials.breakEvenRevenue)}</span>
                    <span className="font-bold text-green-700">Current Turnover: ₹ {fmt(financials.periodRevenue)}</span>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
                  <p className="text-[11px] text-red-700 font-semibold leading-relaxed">
                    चेतावनी: आपका प्लांट घाटे में चल रहा है। ब्रेक-ईवन तक पहुँचने के लिए बिक्री को कम से कम 
                    <strong> ₹ {fmt(financials.breakEvenRevenue - financials.periodRevenue)}</strong> बढ़ाना होगा।
                  </p>
                </div>
              )}
            </Card>

            {/* Split Visual Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Cost Contribution percentages */}
              <div className="md:col-span-1 border rounded-xl p-4 bg-slate-50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1">
                    <PieChart className="w-3.5 h-3.5 text-slate-400" /> Cost Structure Contribution
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>Raw Milk Cost (कच्चा दूध लागत)</span>
                        <span>{financials.costStructure.rawMilk.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: `${financials.costStructure.rawMilk}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>Variable Processing (परिवर्तनीय प्रसंस्करण)</span>
                        <span>{financials.costStructure.processing.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="bg-orange-400 h-full" style={{ width: `${financials.costStructure.processing}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>Fixed Overheads (स्थिर ओवरहेड्स)</span>
                        <span>{financials.costStructure.fixedOverheads.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full" style={{ width: `${financials.costStructure.fixedOverheads}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-3 text-[10px] text-slate-500 leading-relaxed font-mono mt-4">
                  * Raw Milk Cost (₹{fmt(financials.periodRawMilkCost)}) contributes the majority of expenses in dairy operations.
                </div>
              </div>

              {/* Financial Statement Sheet (The P&L Table) */}
              <div className="md:col-span-2 border rounded-xl overflow-hidden bg-white">
                <Table className="w-full text-xs">
                  <TableHeader className="bg-slate-100">
                    <TableRow>
                      <TableHead className="font-bold text-slate-700 pl-4 py-2.5">P&L Account Line Item</TableHead>
                      <TableHead className="text-right font-bold text-slate-700 pr-4 py-2.5">Value (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b">
                      <TableCell className="font-bold text-slate-800 pl-4 py-2">Saleable Product Turnover (Revenue)</TableCell>
                      <TableCell className="text-right font-black text-green-700 pr-4 py-2">₹ {fmt(financials.periodRevenue)}</TableCell>
                    </TableRow>
                    
                    <TableRow className="border-b">
                      <TableCell className="text-slate-600 pl-4 py-2">Less: Raw Material Intake Cost</TableCell>
                      <TableCell className="text-right text-red-500 pr-4 py-2">- ₹ {fmt(financials.periodRawMilkCost)}</TableCell>
                    </TableRow>
                    
                    <TableRow className="border-b">
                      <TableCell className="text-slate-600 pl-4 py-2">Less: Variable Processing Costs (Pack, Ingredients, Energy, Logistics)</TableCell>
                      <TableCell className="text-right text-red-400 pr-4 py-2">- ₹ {fmt(financials.periodVariableProcessingCost)}</TableCell>
                    </TableRow>
                    
                    <TableRow className="border-b font-bold bg-slate-50/50">
                      <TableCell className="text-indigo-900 pl-4 py-2">Gross Contribution (Operating Margin)</TableCell>
                      <TableCell className="text-right text-indigo-700 pr-4 py-2">₹ {fmt(financials.grossProfit)}</TableCell>
                    </TableRow>

                    <TableRow className="border-b">
                      <TableCell className="text-slate-600 pl-4 py-2">Less: Allocated Fixed Overheads (Salaries, Rent, Utilities)</TableCell>
                      <TableCell className="text-right text-red-400 pr-4 py-2">- ₹ {fmt(financials.periodFixedCost)}</TableCell>
                    </TableRow>
                    
                    <TableRow className="border-b font-bold bg-slate-50">
                      <TableCell className="text-slate-800 pl-4 py-2">Net Profit Before Income Tax (EBT)</TableCell>
                      <TableCell className="text-right font-extrabold text-slate-800 pr-4 py-2">₹ {fmt(financials.netProfitPreTax)}</TableCell>
                    </TableRow>

                    {financials.taxAmount > 0 && (
                      <TableRow className="border-b">
                        <TableCell className="text-slate-500 pl-4 py-2">Less: Income Tax Provision @ {taxRate}%</TableCell>
                        <TableCell className="text-right text-red-400 pr-4 py-2">- ₹ {fmt(financials.taxAmount)}</TableCell>
                      </TableRow>
                    )}

                    <TableRow className="bg-indigo-600 text-white font-extrabold hover:bg-indigo-700">
                      <TableCell className="pl-4 py-2.5 uppercase text-xs tracking-wider">Net Profit Post-Tax (EAT)</TableCell>
                      <TableCell className="text-right pr-4 py-2.5 text-base font-black">₹ {fmt(financials.netProfitPostTax)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

            </div>

            {/* Product wise performance card breakdown list */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <Package className="w-4 h-4 text-indigo-600" /> Individual Product Margins Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {financials.productCalculations.filter(c => c.allocatedDaily > 0).map(c => (
                  <div key={c.id} className="p-3 rounded-lg border border-slate-200 bg-white space-y-1.5 shadow-sm">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-800 text-xs truncate max-w-[150px]">{c.name}</span>
                      <Badge className={cn("text-[9px] px-1.5 py-0.5", c.dailyContribution >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                        {fmtDec(c.contributionMarginPct, 1)}% Margin
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-500">
                      <div>Milk Intake: <strong className="text-slate-700 font-mono">{fmt(c.allocatedDaily * (period === 'monthly' ? parseFloat(workingDays) : 1))} L</strong></div>
                      <div>Yield Output: <strong className="text-indigo-600 font-mono">{fmt(c.dailySaleableQty * (period === 'monthly' ? parseFloat(workingDays) : 1))} Units</strong></div>
                      <div className="col-span-2 border-t pt-1 mt-1 flex justify-between font-bold text-indigo-900">
                        <span>Period Contribution:</span>
                        <span>₹ {fmt(c.dailyContribution * (period === 'monthly' ? parseFloat(workingDays) : 1))}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden print:block mt-6 pt-3 border-t border-slate-350 text-center text-[8px] text-slate-400 font-bold uppercase tracking-wider">
              POWERED BY DAIRY HUB ERP SYSTEM
            </div>

          </div>

        </div>
      )}

      {/* TAB 3: MONTHLY SUMMARY OVERVIEW */}
      {activeTab === "monthly" && (() => {
        const mData = getMonthlySummaryData(selectedYear, selectedMonth);
        return (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            
            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 print:hidden">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Month Intake</span>
                <span className="text-xl font-extrabold text-indigo-950">
                  {fmt(mData.totals.allocatedMilk)} L/Kg
                </span>
                <span className="text-[10px] text-slate-500">Cumulative milk processed</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-green-600">Total Month Revenue</span>
                <span className="text-xl font-extrabold text-green-700">
                  ₹ {fmt(mData.totals.revenue)}
                </span>
                <span className="text-[10px] text-slate-500">Total turnover generated</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-emerald-600">Net Month Profit</span>
                <span className={cn("text-xl font-extrabold", mData.totals.netProfit >= 0 ? "text-emerald-700" : "text-rose-600")}>
                  ₹ {fmt(mData.totals.netProfit)}
                </span>
                <span className="text-[10px] text-slate-500">Combined net margin (post-tax)</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">Logged Days</span>
                <span className="text-xl font-extrabold text-indigo-800">
                  {mData.dailyList.filter(d => d.hasData).length} / {mData.dailyList.length} Days
                </span>
                <span className="text-[10px] text-slate-500">Active records in database</span>
              </div>
            </div>

            {/* Print/Export buttons */}
            <div className="flex gap-2 justify-end print:hidden">
              <Button size="sm" onClick={handlePrintMonthly} className="text-xs bg-slate-800 hover:bg-slate-900 text-white">
                <Printer className="w-3.5 h-3.5 mr-1.5" /> Print Summary (प्रिंट)
              </Button>
              <Button size="sm" onClick={downloadMonthlyPdf} disabled={isDownloading} className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white">
                {isDownloading ? <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin"/> : <FileDown className="w-3.5 h-3.5 mr-1.5" />}
                Download PDF
              </Button>
              <Button size="sm" onClick={handleExportMonthlyCSV} className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500">
                <Download className="w-3.5 h-3.5 mr-1.5" /> Export Excel (CSV)
              </Button>
            </div>

            {/* Monthly grid to print */}
            <div 
              ref={monthlyReportRef}
              id="print-area"
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-hidden print:border-none print:shadow-none print:p-0 print:m-0 print:w-[210mm] print:h-[297mm]"
            >
              {/* Report Header for printing */}
              <div className="hidden print:flex justify-between items-end border-b-2 border-slate-800 pb-3 mb-4">
                <div>
                  <h1 className="text-base font-black text-slate-900 uppercase">Dairy Plant Monthly Costing & Profitability Summary</h1>
                  <p className="text-[9px] text-slate-500 font-semibold mt-0.5">Month: {new Date(selectedYear, selectedMonth - 1, 1).toLocaleString("en-IN", { month: "long", year: "numeric" })}</p>
                </div>
                <div className="text-right">
                  <span className="text-[8px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Monthly Report</span>
                  <p className="text-[8px] text-slate-400 mt-0.5">Generated by Dairy Hub App</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[11px] border-collapse border border-slate-200 text-slate-700">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-350">
                      <th className="border border-slate-200 px-2 py-2 text-left w-16">Date</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Milk Processed (L)</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Revenue (₹)</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Variable Cost (₹)</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Fixed Cost (₹)</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Total Cost (₹)</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Net Profit (₹)</th>
                      <th className="border border-slate-200 px-2 py-2 text-center w-14 print:hidden">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150">
                    {mData.dailyList.map(row => {
                      const dayNum = row.date.split("-")[2];
                      if (!row.hasData) {
                        return (
                          <tr key={row.date} className="hover:bg-slate-50/40 text-slate-400">
                            <td className="border border-slate-200 px-2 py-1.5 font-bold font-mono">{dayNum}</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-center print:hidden">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-6 px-2 text-[10px] text-indigo-600 hover:text-indigo-850"
                                onClick={() => {
                                  setSelectedDate(row.date);
                                  setActiveTab("sheet");
                                }}
                              >
                                Create
                              </Button>
                            </td>
                          </tr>
                        );
                      }

                      return (
                        <tr key={row.date} className="hover:bg-slate-50 text-slate-700 bg-emerald-50/5">
                          <td className="border border-slate-200 px-2 py-1.5 font-black font-mono text-slate-800">{dayNum}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right font-semibold">{fmt(row.allocatedMilk || 0)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right font-semibold text-green-700">{fmt(row.revenue || 0)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-slate-650">{fmt(row.variableCost || 0)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-slate-500">{fmt(row.fixedCost || 0)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-red-600 font-medium">{fmt(row.totalCost || 0)}</td>
                          <td className={cn("border border-slate-200 px-2 py-1.5 text-right font-black", (row.netProfit || 0) >= 0 ? "text-emerald-700" : "text-rose-600")}>
                            ₹ {fmt(row.netProfit || 0)}
                          </td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center print:hidden">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-6 px-2 text-[10px] text-indigo-650 hover:text-indigo-800"
                              onClick={() => {
                                setSelectedDate(row.date);
                                setActiveTab("sheet");
                              }}
                            >
                              Edit
                            </Button>
                          </td>
                        </tr>
                      );
                    })}

                    {/* Grand Monthly Totals Row */}
                    <tr className="bg-slate-100 font-extrabold text-slate-900 border-t-2 border-slate-350">
                      <td className="border border-slate-200 px-2 py-2">Total</td>
                      <td className="border border-slate-200 px-2 py-2 text-right">{fmt(mData.totals.allocatedMilk)} L</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-green-700">₹ {fmt(mData.totals.revenue)}</td>
                      <td className="border border-slate-200 px-2 py-2 text-right">{fmt(mData.totals.variableCost)}</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-slate-600">{fmt(mData.totals.fixedCost)}</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-red-600">{fmt(mData.totals.totalCost)}</td>
                      <td className={cn("border border-slate-200 px-2 py-2 text-right text-base font-black", mData.totals.netProfit >= 0 ? "text-emerald-700" : "text-rose-600")}>
                        ₹ {fmt(mData.totals.netProfit)}
                      </td>
                      <td className="border border-slate-200 px-2 py-2 text-center print:hidden"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="hidden print:block mt-6 pt-3 border-t border-slate-300 text-center text-[8px] text-slate-400 font-semibold uppercase tracking-wider">
                POWERED BY DAIRY HUB ERP SYSTEM
              </div>
            </div>

          </div>
        );
      })()}

      {/* TAB 4: FORMULAS & PRINCIPLES */}
      {activeTab === "principles" && (
        <Card className="border border-slate-200 shadow-sm">
          <CardHeader className="bg-slate-100 p-4 border-b">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Info className="h-4.5 w-4.5 text-indigo-600" />
              Bilingual Costing Principles & Excel Formulas (लागत गणना सिद्धांत और एक्सेल सूत्र)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6 text-xs text-slate-700">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2 border-l-4 border-l-blue-500 pl-3">
                <h4 className="font-bold text-blue-900">1. Allocated Milk Volume & Yield (दूध की मात्रा और उत्पाद क्षमता)</h4>
                <p className="leading-relaxed">
                  <strong>English:</strong> Each product requires a specific amount of raw input. The yield factor determines how much finished product is made from 1 unit of milk.
                  <br />• <em>FCM / Toned Milk:</em> Yield is 1.0 (1 Litre milk gives 1 Litre pouch).
                  <br />• <em>Paneer:</em> Yield is 0.15 (1 Litre milk gives 150 grams / 0.15 kg Paneer).
                  <br />• <em>Lassi:</em> Yield is 1.2 (due to water, sugar, and solids addition).
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> कच्चे दूध की मात्रा का गुणन उत्पाद क्षमता (Yield) से किया जाता है। उदाहरण के लिए, पनीर की क्षमता 0.15 है, यानी 1000 लीटर कच्चे दूध से 150 किलो पनीर प्राप्त होगा।
                </p>
              </div>

              <div className="space-y-2 border-l-4 border-l-orange-500 pl-3">
                <h4 className="font-bold text-orange-950">2. Variable vs Fixed Costs (परिवर्तनीय बनाम स्थिर खर्चे)</h4>
                <p className="leading-relaxed">
                  <strong>English:</strong> 
                  <br />• <em>Variable:</em> Expenses that increase with every unit produced (Raw milk price, packaging film, energy/boiler, logistics).
                  <br />• <em>Fixed:</em> Overhead expenditures that remain constant monthly regardless of volume (Labor salaries, factory rent, fixed electricity meter charges).
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> 
                  <br />• <em>परिवर्तनीय खर्च:</em> उत्पादन बढ़ने के साथ बढ़ने वाले खर्च (कच्चा दूध, पैकेजिंग फिल्म, अतिरिक्त सामग्री, परिवहन)।
                  <br />• <em>स्थिर खर्च:</em> उत्पादन कम या ज्यादा होने पर भी समान रहने वाले मासिक खर्च (कर्मचारी वेतन, कारखाना किराया, मशीन मेंटेनेंस)।
                </p>
              </div>

              <div className="space-y-2 border-l-4 border-l-purple-500 pl-3">
                <h4 className="font-bold text-purple-950">3. Process Loss & Saleable Output (प्रक्रिया नुकसान और बिक्री मात्रा)</h4>
                <p className="leading-relaxed">
                  <strong>English:</strong> Leakage, evaporation, pipe remnants, or packing errors reduce output.
                  <br />• <strong>Saleable Qty = Milk Volume × Yield × (1 - Loss%)</strong>
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> पाइप में चिपकने, फैलने या पैकिंग में खराबी के कारण होने वाला नुकसान।
                  <br />• <strong>बिक्री योग्य मात्रा = दूध मात्रा × Yield × (1 - नुकसान%)</strong>
                </p>
              </div>

              <div className="space-y-2 border-l-4 border-l-green-500 pl-3">
                <h4 className="font-bold text-green-900">4. Break-Even Analysis (सम-विच्छेद विश्लेषण)</h4>
                <p className="leading-relaxed">
                  <strong>English:</strong> Break-even is computed via the Contribution Margin Ratio (CMR) to handle multiple products.
                  <br />• <strong>CMR = (Total Revenue - Total Variable Cost) ÷ Total Revenue</strong>
                  <br />• <strong>Break-Even Revenue = Total Fixed Overheads ÷ CMR</strong>
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> मल्टी-प्रोडक्ट प्लांट के लिए ब्रेक-ईवन टर्नओवर कुल योगदान अनुपात (CMR) के आधार पर निकाला जाता है।
                  <br />• <strong>BEP रेवेन्यू = कुल मासिक स्थिर खर्च ÷ CMR</strong>
                </p>
              </div>

            </div>

            {/* Formula Excel Cheat Sheet */}
            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl space-y-2">
              <h3 className="font-bold text-indigo-900 flex items-center gap-1 text-sm font-bold">
                <Calculator className="h-4 w-4" /> Excel Mathematical Formula Dictionary (एक्सेल सूत्र संदर्भ)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px] text-slate-800 p-2">
                <div className="space-y-1">
                  <div><strong>1. Finished Units Qty:</strong></div>
                  <div className="bg-white p-1.5 rounded border text-indigo-600 font-bold">=Milk_Qty * Yield_Factor * (1 - Process_Loss%)</div>
                </div>
                <div className="space-y-1">
                  <div><strong>2. Total Product Variable Cost:</strong></div>
                  <div className="bg-white p-1.5 rounded border text-indigo-600 font-bold">=(Milk_Qty * Raw_Milk_Rate) + (Finished_Units * Sum(Pack, Ingredients, Energy, Logistics))</div>
                </div>
                <div className="space-y-1">
                  <div><strong>3. Overall Plant Contribution:</strong></div>
                  <div className="bg-white p-1.5 rounded border text-indigo-600 font-bold">=Total_Revenue - Total_Variable_Costs</div>
                </div>
                <div className="space-y-1">
                  <div><strong>4. Net Profit Post-Tax:</strong></div>
                  <div className="bg-white p-1.5 rounded border text-indigo-600 font-bold">=(Gross_Profit - Fixed_Costs) * (1 - Tax_Rate%)</div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      )}

      {/* Global CSS overrides for A4 Printing layout */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm !important;
            height: 297mm !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background-color: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
