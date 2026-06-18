
"use client";

import React from "react";
import { useState, memo, useCallback, useMemo, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  FileText,
  ArrowLeft,
  Percent,
  Calendar,
  ChevronDown,
  ChevronUp,
  ChevronsUp,
  Droplets,
  Info,
  Weight,
  Thermometer,
  Factory,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  PlusCircle,
  FileDown,
  Loader2,
  Plus,
  Minus,
  Scale,
  TrendingUp,
  TrendingDown,
  Beaker,
  Settings2,
  Calculator,
  BadgeIndianRupee,
  IceCream2,
  PieChart,
  ArrowRight,
  LayoutDashboard,
  Package,
  Flame,
  Snowflake,
  Milk,
  Target,
  // 👇 New Icons for Advanced Calculators 👇
  Ruler,         // Tank Dipstick
  PackageOpen,   // Packaging Film
  Cylinder,      // Pipeline Volume
  Recycle,       // Recombined Milk
  Pipette,       // Culture Dosing
  Trash2,        // ETP Waste
  Box,           // Cold Storage
  Truck,         // Dispatch Logistics
  Activity,      // Suite Header
  FlaskConical,  // Lab SNF
  Banknote,      // Rate Calculation
  Coins
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { PaneerIcon, IceCreamIcon } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// ==================== ENHANCED INTERFACES ===========================

interface ValidationResult {
    isValid: boolean;
    message?: string;
    severity?: "error" | "warning" | "info";
  }
  
  interface CalculationResult {
    value: number;
    unit: string;
    confidence: "high" | "medium" | "low";
    warnings?: string[];
    metadata?: Record<string, any>;
  }
  
  interface MixIngredient {
    id: number;
    name: string;
    amount: string;
    fat: string;
    msnf: string;
    sugar: string;
  }
  
  interface BatchIngredient {
    id: number;
    name: string;
    amount: string;
    unit: "g" | "kg";
    percentage: string;
  }
  
  // ✅ YE MISSING THA - ISKO ZAROOR ADD KAREIN
  interface FixedExpense {
    id: number;
    name: string;
    cost: string;
  }
  
  interface MassBalanceInputs {
    openingFat: string;
    openingSnf: string;
    intakeFat: string;
    intakeSnf: string;
    addedFat: string;
    addedSnf: string;
    dispatchedFat: string;
    dispatchedSnf: string;
    removedFat: string;
    removedSnf: string;
    closingFat: string;
    closingSnf: string;
  }
  
  // ✅ UPDATED: Added mass-balance
  type CalculatorType =
    | "yields"
    | "paneer-yield"
    | "ice-cream"
    | "plant-efficiency"
    | "plant-cost"
    | "mass-balance"; 
// ==================== VALIDATION UTILITIES ====================
const useInputValidation = () => {
  const validateNumber = useCallback(
    (
      value: string,
      min?: number,
      max?: number,
      fieldName?: string
    ): ValidationResult => {
      if (!value || value.trim() === "") {
        return {
          isValid: false,
          message: `${fieldName || "Field"} is required`,
          severity: "error",
        };
      }

      const num = parseFloat(value);

      if (isNaN(num)) {
        return {
          isValid: false,
          message: `${fieldName || "Field"} must be a valid number`,
          severity: "error",
        };
      }

      if (min !== undefined && num < min) {
        return {
          isValid: false,
          message: `${fieldName || "Value"} must be at least ${min}`,
          severity: "error",
        };
      }

      if (max !== undefined && num > max) {
        return {
          isValid: false,
          message: `${fieldName || "Value"} cannot exceed ${max}`,
          severity: "error",
        };
      }

      return { isValid: true };
    },
    []
  );

  const validatePercentage = useCallback(
    (value: string, fieldName?: string): ValidationResult => {
      return validateNumber(value, 0, 100, fieldName);
    },
    [validateNumber]
  );

  const validatePositive = useCallback(
    (value: string, fieldName?: string): ValidationResult => {
      return validateNumber(value, 0.001, undefined, fieldName);
    },
    [validateNumber]
  );

  return { validateNumber, validatePercentage, validatePositive };
};

// ==================== ENHANCED INPUT COMPONENT ====================
interface ValidatedInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  validation?: ValidationResult;
  type?: string;
  placeholder?: string;
  unit?: string;
  icon?: React.ReactNode;
  helpText?: string;
  colorScheme?: "blue" | "green" | "purple" | "orange" | "pink" | "yellow" | "red" | "violet" | "cyan" | "indigo" | "slate" | "teal" | "rose";
}

const ValidatedInput = memo(
  ({
    label,
    value,
    onChange,
    validation,
    type = "number",
    placeholder,
    unit,
    icon,
    helpText,
    colorScheme = "blue",
  }: ValidatedInputProps) => {
    const [touched, setTouched] = useState(false);
    const showValidation = touched && validation && !validation.isValid;

    const colorClasses = {
      blue: "focus-visible:ring-blue-500 border-blue-200",
      green: "focus-visible:ring-green-500 border-green-200",
      purple: "focus-visible:ring-purple-500 border-purple-200",
      orange: "focus-visible:ring-orange-500 border-orange-200",
      pink: "focus-visible:ring-pink-500 border-pink-200",
      yellow: "focus-visible:ring-yellow-500 border-yellow-200",
      red: "focus-visible:ring-red-500 border-red-200",
      violet: "focus-visible:ring-violet-500 border-violet-200",
      cyan: "focus-visible:ring-cyan-500 border-cyan-200",
      indigo: "focus-visible:ring-indigo-500 border-indigo-200",
      slate: "focus-visible:ring-slate-500 border-slate-200",
      teal: "focus-visible:ring-teal-500 border-teal-200",
      rose: "focus-visible:ring-rose-500 border-rose-200",
    };

    return (
      <div className="space-y-2">
        <Label className="text-sm font-semibold flex items-center gap-2">
          {icon}
          {label}
          {unit && (
            <Badge variant="outline" className="ml-auto text-xs">
              {unit}
            </Badge>
          )}
        </Label>
        <div className="relative">
          <Input
            type={type}
            inputMode="decimal"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder={placeholder}
            className={cn(
              "transition-all duration-200",
              colorClasses[colorScheme],
              showValidation && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          {validation?.isValid && touched && (
            <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
          )}
        </div>
        {showValidation && (
          <div className="flex items-start gap-2 text-sm text-red-600 animate-in slide-in-from-top-1">
            <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{validation.message}</span>
          </div>
        )}
        {helpText && !showValidation && (
          <p className="text-xs text-muted-foreground flex items-start gap-1">
            <Info className="h-3 w-3 mt-0.5 shrink-0" />
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

ValidatedInput.displayName = "ValidatedInput";

// ==================== RESULT CARD COMPONENT ====================
interface ResultCardProps {
  title: string;
  value: string | number;
  unit?: string;
  confidence?: "high" | "medium" | "low";
  icon?: React.ReactNode;
  colorScheme?: "blue" | "green" | "purple" | "orange" | "pink";
  subtitle?: string;
  warnings?: string[];
}

const ResultCard = memo(
  ({
    title,
    value,
    unit,
    confidence = "high",
    icon,
    colorScheme = "green",
    subtitle,
    warnings,
  }: ResultCardProps) => {
    const colorClasses = {
      blue: "from-blue-50 to-blue-100 border-blue-300 text-blue-900",
      green: "from-green-50 to-green-100 border-green-300 text-green-900",
      purple: "from-purple-50 to-purple-100 border-purple-300 text-purple-900",
      orange: "from-orange-50 to-orange-100 border-orange-300 text-orange-900",
      pink: "from-pink-50 to-pink-100 border-pink-300 text-pink-900",
    };

    const confidenceBadges = {
      high: <Badge className="bg-green-600">High Confidence</Badge>,
      medium: <Badge className="bg-yellow-600">Medium Confidence</Badge>,
      low: <Badge className="bg-orange-600">Low Confidence</Badge>,
    };

    return (
      <Card className={cn("border-2 bg-gradient-to-br", colorClasses[colorScheme])}>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              {icon}
              <h4 className="font-semibold text-sm">{title}</h4>
            </div>
            {confidenceBadges[confidence]}
          </div>
          <div className="text-4xl font-bold mb-1">
            {typeof value === "number" ? value.toFixed(3) : value}
            {unit && <span className="text-2xl ml-2 font-medium">{unit}</span>}
          </div>
          {subtitle && <p className="text-sm opacity-80 mt-2">{subtitle}</p>}
          {warnings && warnings.length > 0 && (
            <div className="mt-4 space-y-2">
              {warnings.map((warning, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs bg-white/50 p-2 rounded"
                >
                  <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{warning}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

ResultCard.displayName = "ResultCard";

function YieldsCalc() {
  const [activeCalc, setActiveCalc] = useState('cream-sep');

  const calculators = {
    'cream-sep': { title: "Cream Separation (क्रीम सेपरेशन)", component: <CreamSeparationCalc /> },
    'butter': { title: "Butter Yield (मक्खन यील्ड)", component: <ButterYieldCalc /> },
    'khoa': { title: "Khoa Yield (खोया यील्ड)", component: <KhoaYieldCalc /> },
    'shrikhand': { title: "Shrikhand Yield (श्रीखंड यील्ड)", component: <ShrikhandYieldCalc /> },
    'pedha': { title: "Pedha/Burfi Yield (पेड़ा/बर्फी यील्ड)", component: <PedhaBurfiYieldCalc /> },
  };

  const renderCalculator = () => {
    return calculators[activeCalc as keyof typeof calculators]?.component || null;
  };

  return (
    <Card className="border shadow-md">
      <CardHeader className="bg-slate-50/50 pb-3">
        <CardTitle className="text-sm font-bold text-slate-700 uppercase">Product Yield Calculators (उत्पाद यील्ड कैलकुलेटर)</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4">
          <Label className="text-xs font-semibold mb-2 block">कैलकुलेटर चुनें (Select Yield Calculator)</Label>
          <Select value={activeCalc} onValueChange={setActiveCalc}>
            <SelectTrigger className="w-full h-10 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(calculators).map(([key, { title }]) => (
                <SelectItem key={key} value={key} className="text-xs">{title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 border-t pt-4">
          {renderCalculator()}
        </div>
      </CardContent>
    </Card>
  );
}

// ==================== MAIN CALCULATOR MODAL ====================
const calculatorsInfo = {
    yields: {
      title: "Product Yields",
      icon: Percent,
      component: YieldsCalc,
      color: "from-blue-500 to-cyan-500", // ✅ Gradient Blue
    },
    "paneer-yield": {
      title: "Paneer Yield",
      icon: PaneerIcon,
      component: PaneerYieldCalc,
      color: "from-emerald-500 to-green-600", // ✅ Gradient Green
    },
    "ice-cream": {
      title: "Ice Cream Mix",
      icon: IceCreamIcon,
      component: IceCreamCalculators,
      color: "from-pink-500 to-rose-500", // ✅ Gradient Pink
    },
    "plant-efficiency": {
      title: "Plant Efficiency",
      icon: Factory,
      component: PlantEfficiencyCalc,
      color: "from-orange-500 to-amber-500", // ✅ Gradient Orange
    },
    "plant-cost": {
      title: "Plant Costing",
      icon: DollarSign,
      component: PlantCostCalc,
      color: "from-purple-500 to-indigo-600", // ✅ Gradient Purple
    },
    "mass-balance": {
      title: "Mass Balance",
      icon: Scale,
      component: MassBalanceCalc,
      color: "from-indigo-500 to-blue-600", // ✅ Gradient Indigo
    },
  };  

export function ProductionCalculationsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorType | null>(null);

  const handleBack = useCallback(() => setActiveCalculator(null), []);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveCalculator(null);
    }
    setIsOpen(open);
  };

  const ActiveCalculatorComponent = activeCalculator
    ? calculatorsInfo[activeCalculator].component
    : null;
  const ActiveIcon = activeCalculator
    ? calculatorsInfo[activeCalculator].icon
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[95vh] flex flex-col p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        {activeCalculator && ActiveCalculatorComponent ? (
          <>
            <DialogHeader className="flex-row items-center space-x-4 shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="shrink-0 hover:bg-white/50"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-3 rounded-xl bg-gradient-to-br text-white",
                    calculatorsInfo[activeCalculator].color
                  )}
                >
                  {ActiveIcon && <ActiveIcon className="h-6 w-6" />}
                </div>
                <div>
                  <DialogTitle className="text-xl sm:text-2xl font-bold font-headline">
                    {calculatorsInfo[activeCalculator].title}
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm">
                    Advanced precision calculations with mobile verification
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <ScrollArea className="h-full mt-6 pr-2">
              <ActiveCalculatorComponent />
            </ScrollArea>
          </>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                  <Calculator className="h-8 sm:h-12 w-8 sm:w-12 text-white" />
                </div>
              </div>
              <DialogTitle className="text-2xl sm:text-4xl font-bold text-center font-headline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Production Calculations
              </DialogTitle>
              <DialogDescription className="text-center text-sm sm:text-lg">
                Advanced calculators for precision dairy production
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="flex-1 mt-6 pr-2">
              {/* ALWAYS SHOW GRID - Mobile aur Desktop dono pe */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 p-2">
                {Object.entries(calculatorsInfo).map(
                  ([key, { title, icon: Icon, color }]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCalculator(key as CalculatorType)}
                      className="group relative flex flex-col items-center justify-center p-4 sm:p-8 bg-white hover:shadow-2xl rounded-2xl border-2 border-transparent hover:border-primary text-center aspect-square transition-all duration-300 transform hover:scale-105"
                    >
                      <div
                        className={cn(
                          "p-3 sm:p-4 rounded-xl bg-gradient-to-br text-white mb-2 sm:mb-4 transition-transform group-hover:scale-110",
                          color
                        )}
                      >
                        <Icon className="w-6 h-6 sm:w-10 sm:h-10" />
                      </div>
                      <span className="font-bold font-headline text-xs sm:text-lg text-card-foreground">
                        {title}
                      </span>
                      <Zap className="absolute top-2 right-2 sm:top-3 sm:right-3 h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  )
                )}
              </div>
            </ScrollArea>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ════════════════════════════════════════════════════════════
// ADVANCED PANEER YIELD CALCULATOR
// Drop-in Replacement for PaneerYieldCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana PaneerYieldCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

function PaneerYieldCalc() {
  const { toast } = useToast();
  const { validatePositive, validatePercentage, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // Theoretical inputs (Predictor)
  const [theo, setTheo] = useState({
    milkQty:      "1000",
    fat:          "4.5",
    snf:          "8.5",
    density:      "1.032",
    caseinInSnf:  "77",   // %
    fatRec:       "90",
    caseinRec:    "93",
    moisture:     "55",
    milkPrice:    "45",   // ₹/L
    paneerPrice:  "350",  // ₹/kg
    wheyPrice:    "2",    // ₹/kg
    batches:      "1",
  });

  // Actual inputs (Tracker)
  const [actual, setActual] = useState({
    milkUsed:      "1000",
    paneerObtained: "145",
    milkFat:       "4.5",
    milkSnf:       "8.5",
    moisture:      "55",
    density:       "1.032",
  });

  const [theoResult,   setTheoResult]   = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ── THEORETICAL CALCULATE ─────────────────────────────
  const calculateTheo = useCallback(() => {
    const qty       = parseFloat(theo.milkQty)     || 0;
    const fat       = parseFloat(theo.fat)         / 100;
    const snf       = parseFloat(theo.snf)         / 100;
    const density   = parseFloat(theo.density)     || 1.032;
    const caseinRat = parseFloat(theo.caseinInSnf) / 100;
    const fRec      = parseFloat(theo.fatRec)      / 100;
    const cRec      = parseFloat(theo.caseinRec)   / 100;
    const moisture  = parseFloat(theo.moisture)    / 100;
    const batches   = parseFloat(theo.batches)     || 1;

    const milkPr    = parseFloat(theo.milkPrice)   || 0;
    const paneerPr  = parseFloat(theo.paneerPrice) || 0;
    const wheyPr    = parseFloat(theo.wheyPrice)   || 0;

    if (qty <= 0 || fat <= 0 || snf <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया दूध की मात्रा, फैट (Fat) और एसएनएफ (SNF) सही दर्ज करें।" }); 
      return;
    }

    const milkKg         = qty * density;

    // Composition
    const totalFatKg     = milkKg * fat;
    const totalSnfKg     = milkKg * snf;
    const totalCaseinKg  = totalSnfKg * caseinRat;

    // Recovery
    const recovFatKg     = totalFatKg    * fRec;
    const recovCaseinKg  = totalCaseinKg * cRec;
    const totalSolids    = recovFatKg + recovCaseinKg;

    // Paneer yield (moisture basis)
    const paneerKg       = totalSolids / (1 - moisture);
    const yieldPct       = (paneerKg / milkKg) * 100;

    // Whey
    const wheyKg         = milkKg - paneerKg;
    const wheyFatKg      = totalFatKg * (1 - fRec);
    const wheyCaseinKg   = totalCaseinKg * (1 - cRec);

    // Paneer composition estimate
    const paneerFatKg    = recovFatKg;
    const paneerFatPct   = (paneerFatKg / paneerKg) * 100;
    const paneerMoistKg  = paneerKg * moisture;
    const paneerFDM      = (paneerFatKg / (paneerKg - paneerMoistKg)) * 100; // Fat in Dry Matter

    // Milk needed per kg paneer
    const milkPerKgPaneer= milkKg / paneerKg;
    const litrePerKgPaneer= qty / paneerKg;

    // Batch totals
    const paneerTotal    = paneerKg * batches;
    const wheyTotal      = wheyKg   * batches;

    // Economics
    const milkCost       = qty * batches * milkPr;
    const paneerRevenue  = paneerTotal * paneerPr;
    const wheyRevenue    = wheyTotal   * wheyPr;
    const totalRevenue   = paneerRevenue + wheyRevenue;
    const grossProfit    = totalRevenue - milkCost;
    const gpm            = milkCost > 0 ? (grossProfit / milkCost) * 100 : 0;
    const costPerKgPaneer= milkCost / paneerTotal;

    // Quality Alerts
    const warnings: string[] = [];
    if (fat * 100 < 3 || fat * 100 > 9)   { warnings.push(`दूध में फैट प्रतिशत (${(fat*100).toFixed(1)}%) सामान्य रेंज (3–9%) से अलग है।`); }
    if (fRec < 0.85)   warnings.push(`वसा की रिकवरी ${(fRec*100).toFixed(0)}% काफी कम है। कोगुलेशन तापमान और दबाने का दबाव बढ़ाएं।`);
    if (cRec < 0.90)   warnings.push(`केसीन रिकवरी ${(cRec*100).toFixed(0)}% कम है। कोगुलेंट की मात्रा और पीच (pH) की जाँच करें।`);
    if (moisture > 0.60) warnings.push(`पनीर में नमी ${(moisture*100).toFixed(0)}% FSSAI की अधिकतम सीमा (60%) से अधिक है।`);
    if (paneerFDM < 50)  warnings.push(`Fat in Dry Matter (FDM) ${paneerFDM.toFixed(1)}% है, जो FSSAI के न्यूनतम 50% से कम है। दूध में फैट बढ़ाएं।`);

    setTheoResult({
      milkKg, totalFatKg, totalSnfKg, totalCaseinKg,
      recovFatKg, recovCaseinKg, totalSolids,
      paneerKg, yieldPct, wheyKg, wheyFatKg, wheyCaseinKg,
      paneerFatPct, paneerMoistKg, paneerFDM,
      milkPerKgPaneer, litrePerKgPaneer,
      paneerTotal, wheyTotal,
      milkCost, paneerRevenue, wheyRevenue, totalRevenue, grossProfit, gpm, costPerKgPaneer,
      warnings,
      qty, batches,
    });

    toast({
      title: "🧮 गणना पूरी हुई (Calculated)",
      description: `अनुमानित पनीर उत्पादन: ${paneerKg.toFixed(2)} kg (${yieldPct.toFixed(2)}% yield)`,
    });
  }, [theo, toast]);

  // ── ACTUAL CALCULATE ──────────────────────────────────
  const calculateActual = useCallback(() => {
    const qty            = parseFloat(actual.milkUsed)        || 0;
    const paneerKg       = parseFloat(actual.paneerObtained)  || 0;
    const fat            = parseFloat(actual.milkFat)         / 100;
    const snf            = parseFloat(actual.milkSnf)         / 100;
    const density        = parseFloat(actual.density)         || 1.032;
    const moisture       = parseFloat(actual.moisture)        / 100;
    
    // Default Process recovery settings to evaluate baseline ideal
    const caseinRat = 0.77;
    const fRec      = 0.90;
    const cRec      = 0.93;

    if (qty <= 0 || paneerKg <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "दूध की मात्रा और पनीर का वजन सही दर्ज करें।" }); 
      return;
    }
    
    const milkKg         = qty * density;
    if (paneerKg > milkKg) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "पनीर का वजन इस्तेमाल किए गए दूध के कुल वजन से अधिक नहीं हो सकता।" }); 
      return;
    }

    const actualYieldPct = (paneerKg / milkKg) * 100;
    const litrePerKgPaneer = qty / paneerKg;

    // Calculate theoretical ideal base for comparison
    const idealFatKg     = milkKg * fat;
    const idealSnfKg     = milkKg * snf;
    const idealCaseinKg  = idealSnfKg * caseinRat;
    const idealSolids    = (idealFatKg * fRec) + (idealCaseinKg * cRec);
    const idealYieldKg   = idealSolids / (1 - moisture);
    const idealYieldPct  = (idealYieldKg / milkKg) * 100;

    const yieldEfficiency = (actualYieldPct / idealYieldPct) * 100;
    const lostPaneerKg    = Math.max(0, idealYieldKg - paneerKg);

    const warnings: string[] = [];
    if (actualYieldPct < 12) { 
      warnings.push(`वास्तविक उत्पादन ${actualYieldPct.toFixed(1)}% काफी कम है। कोगुलेशन, छानने, या दूध की गुणवत्ता की जांच करें।`); 
    }
    if (yieldEfficiency < 95) {
      warnings.push(`आप आदर्श क्षमता से ${(100 - yieldEfficiency).toFixed(1)}% पीछे हैं। लगभग ${lostPaneerKg.toFixed(1)} kg पनीर प्रोसेसिंग के नुकसान (Loss) में बह गया है।`);
    }

    setActualResult({
      milkKg, paneerKg, actualYieldPct,
      litrePerKgPaneer, idealYieldKg, idealYieldPct,
      yieldEfficiency, lostPaneerKg,
      warnings,
      qty,
    });

    toast({
      title: `बैच विश्लेषण पूरा हुआ`,
      description: `वास्तविक उत्पादन: ${actualYieldPct.toFixed(2)}% | दक्षता: ${yieldEfficiency.toFixed(1)}%`,
    });
  }, [actual, toast]);

  const fmt = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

  return (
    <Card className="border-2 border-emerald-200 shadow-lg bg-emerald-50/10">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-lg border-b border-emerald-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-emerald-800">
            <PaneerIcon className="h-6 w-6 text-emerald-600 animate-pulse" />
            Paneer Yield Calculator (पनीर उत्पादन कैलकुलेटर)
          </span>
          {theoResult && activeCalc === "theoretical" && (
            <Badge className="bg-emerald-600 text-white text-sm px-3 py-1 font-bold shadow-sm">
              {theoResult.yieldPct.toFixed(2)}% Yield (अनुमानित)
            </Badge>
          )}
          {actualResult && activeCalc === "actual" && (
            <Badge className={cn("text-white text-sm px-3 py-1 font-bold shadow-sm", actualResult.yieldEfficiency >= 95 ? "bg-green-600" : "bg-red-500")}>
              {actualResult.actualYieldPct.toFixed(2)}% Yield (वास्तविक)
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-emerald-700 font-medium text-xs">
          Predict Paneer Yield, manage production metrics, and identify process losses with high-precision formulas.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── MODE SELECTOR ─────────────────────────── */}
        <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button onClick={() => setActiveCalc("theoretical")}
            className={cn("p-2.5 rounded-lg text-xs font-bold transition-all text-center leading-tight shadow-sm flex flex-col justify-center items-center gap-0.5",
              activeCalc === "theoretical" ? "bg-emerald-600 text-white shadow" : "bg-transparent text-slate-600 hover:text-emerald-700"
            )}>
            <span className="text-sm">🧮 Yield Predictor</span>
            <span className="text-[9px] opacity-80">अनुमानित उत्पादन व मुनाफा</span>
          </button>
          <button onClick={() => setActiveCalc("actual")}
            className={cn("p-2.5 rounded-lg text-xs font-bold transition-all text-center leading-tight shadow-sm flex flex-col justify-center items-center gap-0.5",
              activeCalc === "actual" ? "bg-emerald-600 text-white shadow" : "bg-transparent text-slate-600 hover:text-emerald-700"
            )}>
            <span className="text-sm">✅ Batch Performance Tracker</span>
            <span className="text-[9px] opacity-80">वास्तविक उत्पादन व प्रोसेसिंग नुकसान</span>
          </button>
        </div>

        {/* ═══════════ PREDICTOR MODE ═══════════════ */}
        {activeCalc === "theoretical" && (
          <div className="space-y-4">

            {/* Inputs */}
            <Card className="border-emerald-100 bg-white shadow-sm">
              <CardHeader className="p-3 pb-2 bg-emerald-50/50 border-b border-emerald-100">
                <CardTitle className="text-xs font-bold text-emerald-700 uppercase flex items-center gap-1">
                  <Milk className="h-3.5 w-3.5" /> Core Processing Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 grid grid-cols-2 gap-3">
                <ValidatedInput label="Milk Quantity (दूध की मात्रा)" value={theo.milkQty} onChange={v => setT("milkQty", v)} validation={validatePositive(theo.milkQty, "Quantity")} unit="L" colorScheme="blue" />
                <ValidatedInput label="Batches / Cycles" value={theo.batches} onChange={v => setT("batches", v)} validation={validatePositive(theo.batches, "Batches")} colorScheme="blue" />
                <ValidatedInput label="Milk Fat % (फैट)" value={theo.fat} onChange={v => setT("fat", v)} validation={validatePercentage(theo.fat, "Fat")} unit="%" helpText="Typical: 3.5–8.0%" colorScheme="green" />
                <ValidatedInput label="Milk SNF % (एसएनएफ)" value={theo.snf} onChange={v => setT("snf", v)} validation={validatePercentage(theo.snf, "SNF")} unit="%" helpText="Typical: 8.5–9.5%" colorScheme="purple" />
                <ValidatedInput label="Paneer Moisture % (पनीर में नमी)" value={theo.moisture} onChange={v => setT("moisture", v)} validation={validateNumber(theo.moisture, 40, 70, "Moisture")} unit="%" helpText="Standard: 55%" colorScheme="pink" />
              </CardContent>
            </Card>

            {/* Collapsible Advanced Parameters */}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)} 
                type="button" 
                className="w-full p-3 bg-slate-50 flex justify-between items-center text-xs font-bold text-slate-700 border-b border-slate-200 hover:bg-slate-100 transition"
              >
                <span className="flex items-center gap-1.5"><Settings2 className="h-4 w-4 text-slate-500" /> Advanced Process Settings (एडवांस सेटिंग्स - वैकल्पिक)</span>
                {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {showAdvanced && (
                <div className="p-3 grid grid-cols-2 gap-3 bg-white animate-in slide-in-from-top-2">
                  <ValidatedInput label="Milk Density" value={theo.density} onChange={v => setT("density", v)} validation={{ isValid: true, severity: "info" }} unit="kg/L" helpText="Cow: 1.030 | Buffalo: 1.032" colorScheme="blue" />
                  <ValidatedInput label="Casein % in SNF" value={theo.caseinInSnf} onChange={v => setT("caseinInSnf", v)} validation={validateNumber(theo.caseinInSnf, 70, 85, "Casein ratio")} unit="%" helpText="Typically 77%" colorScheme="purple" />
                  <ValidatedInput label="Fat Recovery in Paneer" value={theo.fatRec} onChange={v => setT("fatRec", v)} validation={validatePercentage(theo.fatRec, "Fat rec")} unit="%" helpText="Normal: 90%" colorScheme="orange" />
                  <ValidatedInput label="Casein Recovery in Paneer" value={theo.caseinRec} onChange={v => setT("caseinRec", v)} validation={validatePercentage(theo.caseinRec, "Casein rec")} unit="%" helpText="Normal: 93%" colorScheme="orange" />
                </div>
              )}
            </div>

            {/* Optional Costing Toggle */}
            <div className="border border-slate-200 rounded-lg bg-white p-3 shadow-sm flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                  <BadgeIndianRupee className="h-4 w-4 text-indigo-600" /> Costing & Profitability Analysis (लागत गणना जोड़ें)
                </span>
                <span className="text-[10px] text-slate-400">Toggle to calculate batch expenses, revenue, and gross profit.</span>
              </div>
              <input 
                type="checkbox" 
                checked={enableCosting} 
                onChange={(e) => setEnableCosting(e.target.checked)} 
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded cursor-pointer"
              />
            </div>

            {/* Pricing Section (only visible if costing is enabled) */}
            {enableCosting && (
              <Card className="border-indigo-100 bg-white shadow-sm animate-in slide-in-from-top-2">
                <CardHeader className="p-3 pb-2 bg-indigo-50/50 border-b border-indigo-100">
                  <CardTitle className="text-xs font-bold text-indigo-700 uppercase flex items-center gap-1">
                    <BadgeIndianRupee className="h-3.5 w-3.5" /> Pricing Data
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 grid grid-cols-3 gap-3">
                  <ValidatedInput label="Milk Price" value={theo.milkPrice} onChange={v => setT("milkPrice", v)} validation={{ isValid: true, severity: "info" }} unit="₹/L" colorScheme="blue" />
                  <ValidatedInput label="Paneer Price" value={theo.paneerPrice} onChange={v => setT("paneerPrice", v)} validation={{ isValid: true, severity: "info" }} unit="₹/kg" colorScheme="green" />
                  <ValidatedInput label="Whey Price" value={theo.wheyPrice} onChange={v => setT("wheyPrice", v)} validation={{ isValid: true, severity: "info" }} unit="₹/kg" colorScheme="purple" />
                </CardContent>
              </Card>
            )}

            <Button onClick={calculateTheo}
              className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold shadow-md text-sm rounded-xl">
              <Calculator className="mr-2 h-4.5 w-4.5" />
              Predict Paneer Yield (गणना करें)
            </Button>

            {/* Theoretical Results */}
            {theoResult && (
              <div className="space-y-4 animate-in fade-in">

                {/* Main Yield KPIs */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Expected Paneer", value: theoResult.paneerKg.toFixed(2), unit: "kg/batch", color: "bg-emerald-600" },
                    { label: "Yield %",      value: theoResult.yieldPct.toFixed(2), unit: "% w/w",    color: "bg-teal-700" },
                    { label: "Whey Output",         value: theoResult.wheyKg.toFixed(0),   unit: "kg",       color: "bg-blue-600"   },
                  ].map((k, i) => (
                    <div key={i} className={`${k.color} text-white p-3 rounded-xl text-center shadow-sm`}>
                      <div className="text-[9px] uppercase opacity-90 font-extrabold tracking-wider">{k.label}</div>
                      <div className="text-xl sm:text-2xl font-black mt-0.5">{k.value}</div>
                      <div className="text-[9px] opacity-80 font-medium">{k.unit}</div>
                    </div>
                  ))}
                </div>

                {/* Conversion Ratio Summary */}
                <div className="bg-white border border-emerald-100 rounded-xl p-3 shadow-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Milk Required per kg Paneer</span>
                    <span className="text-base font-black text-emerald-800 mt-0.5">{theoResult.litrePerKgPaneer.toFixed(2)} Litres</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Solid Recovery</span>
                    <span className="text-base font-black text-emerald-800 mt-0.5">{theoResult.totalSolids.toFixed(2)} kg Solids</span>
                  </div>
                </div>

                {/* Economics statement (only visible if costing is enabled) */}
                {enableCosting && (
                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none shadow-md">
                    <CardContent className="p-4 space-y-3 text-sm">
                      <div className="text-xs text-slate-300 font-extrabold uppercase mb-1 tracking-wider flex items-center gap-1">
                        <BadgeIndianRupee className="h-4 w-4 text-emerald-400" /> Batch Economic Overview
                      </div>
                      {[
                        { label: "Raw Milk Expenses", value: `- ₹ ${fmt(theoResult.milkCost)}`, color: "text-red-400" },
                        { label: "Estimated Paneer Revenue", value: `+ ₹ ${fmt(theoResult.paneerRevenue)}`, color: "text-emerald-400" },
                        { label: "Estimated Whey Revenue", value: `+ ₹ ${fmt(theoResult.wheyRevenue)}`, color: "text-cyan-400" },
                        { label: "Gross Operating Profit", value: `₹ ${fmt(theoResult.grossProfit)}`, color: `${theoResult.grossProfit >= 0 ? "text-yellow-400 font-black text-base" : "text-red-400 font-black"}` },
                      ].map((r, i) => (
                        <div key={i} className={cn("flex justify-between py-0.5", i === 3 ? "border-t border-slate-700 pt-2 mt-1" : "")}>
                          <span className="text-slate-400 font-medium">{r.label}</span>
                          <span className={cn("font-bold", r.color)}>{r.value}</span>
                        </div>
                      ))}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {[
                          { label: "Gross Operating Margin", value: `${theoResult.gpm.toFixed(1)}%` },
                          { label: "Milk Cost / kg Paneer", value: `₹ ${theoResult.costPerKgPaneer.toFixed(2)}` },
                        ].map((c, i) => (
                          <div key={i} className="bg-slate-700/60 border border-slate-700 rounded p-2 text-center">
                            <div className="text-[9px] text-slate-400 font-bold uppercase">{c.label}</div>
                            <div className="font-extrabold text-white text-sm mt-0.5">{c.value}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Composition estimate */}
                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardContent className="p-3 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 text-sm border-b pb-1.5">🧀 Estimated Paneer Composition</div>
                    {[
                      { label: "Fat Content in Paneer", value: `${theoResult.paneerFatPct.toFixed(1)}%` },
                      { label: "Fat in Dry Matter (FDM)", value: `${theoResult.paneerFDM.toFixed(1)}%` },
                      { label: "FSSAI Compliance Status", value: theoResult.paneerFDM >= 50 ? "✅ Compliant (Standard Paneer)" : "⚠️ Low FDM (< 50% - verify fat)" },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between py-0.5">
                        <span className="text-slate-500 font-medium">{r.label}</span>
                        <span className={cn("font-bold", i === 2 && (theoResult.paneerFDM >= 50 ? "text-green-600" : "text-red-500"))}>{r.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Warnings */}
                {theoResult.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 animate-bounce" />
                    <AlertTitle className="text-yellow-800 text-xs font-bold">Process & Quality Warnings</AlertTitle>
                    <AlertDescription className="text-[11px] text-yellow-700 space-y-1 mt-1 font-medium">
                      {theoResult.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Multi-batch total */}
                {theoResult.batches > 1 && (
                  <Card className="bg-emerald-50/50 border border-emerald-100">
                    <CardContent className="p-3 text-xs space-y-1.5">
                      <div className="font-bold text-emerald-800 uppercase tracking-wider text-[10px]">Total Production Summary ({theoResult.batches} batches)</div>
                      <div className="flex justify-between text-slate-600">
                        <span>Cumulative Paneer Yield:</span>
                        <span className="font-black text-slate-800">{fmt(theoResult.paneerTotal)} kg</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Cumulative Whey Output:</span>
                        <span className="font-black text-slate-800">{fmt(theoResult.wheyTotal)} kg</span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Formulas Explained */}
                <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1 leading-relaxed">
                  <div className="font-bold text-slate-600 text-xs mb-1">📐 Underlying Calculation:</div>
                  <div>• Milk Weight (kg) = Qty ({theoResult.qty} L) × Density ({theo.density}) = {theoResult.milkKg.toFixed(2)} kg</div>
                  <div>• Casein (kg) = Milk Weight × SNF ({theo.snf}%) × Casein/SNF ({theo.caseinInSnf}%) = {theoResult.totalCaseinKg.toFixed(3)} kg</div>
                  <div>• Total Solids recovered in curd (kg) = (Fat × {theo.fatRec}%) + (Casein × {theo.caseinRec}%) = {theoResult.totalSolids.toFixed(3)} kg</div>
                  <div>• Predicted Yield (kg) = Solids / (1 − Moisture ({theo.moisture}%)) = {theoResult.paneerKg.toFixed(3)} kg</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══════════ TRACKER MODE ═════════════════════ */}
        {activeCalc === "actual" && (
          <div className="space-y-4">
            <Alert className="bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-xs text-blue-700 font-medium">
                Enter your actual production data to check process efficiency and calculate product loss gaps.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-2 gap-3">
              <ValidatedInput label="Milk Used (इस्तेमाल किया दूध)" value={actual.milkUsed} onChange={v => setA("milkUsed", v)} validation={validatePositive(actual.milkUsed, "Milk used")} unit="L" colorScheme="blue" />
              <ValidatedInput label="Paneer Obtained (प्राप्त पनीर)" value={actual.paneerObtained} onChange={v => setA("paneerObtained", v)} validation={validatePositive(actual.paneerObtained, "Paneer")} unit="kg" colorScheme="green" />
              <ValidatedInput label="Milk Fat % (फैट)" value={actual.milkFat} onChange={v => setA("milkFat", v)} validation={validatePercentage(actual.milkFat, "Fat")} unit="%" colorScheme="orange" />
              <ValidatedInput label="Milk SNF % (एसएनएफ)" value={actual.milkSnf} onChange={v => setA("milkSnf", v)} validation={validatePercentage(actual.milkSnf, "SNF")} unit="%" colorScheme="purple" />
            </div>

            {/* Collapsible Advanced Parameters for Actual */}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)} 
                type="button" 
                className="w-full p-2.5 bg-slate-50 flex justify-between items-center text-xs font-bold text-slate-700 border-b border-slate-200 hover:bg-slate-100 transition"
              >
                <span className="flex items-center gap-1.5"><Settings2 className="h-4 w-4 text-slate-500" /> Advanced Parameters</span>
                {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {showAdvanced && (
                <div className="p-3 grid grid-cols-2 gap-3 bg-white animate-in slide-in-from-top-2">
                  <ValidatedInput label="Milk Density" value={actual.density} onChange={v => setA("density", v)} validation={{ isValid: true, severity: "info" }} unit="kg/L" colorScheme="blue" />
                  <ValidatedInput label="Paneer Moisture %" value={actual.moisture} onChange={v => setA("moisture", v)} validation={validateNumber(actual.moisture, 40, 70, "Moisture")} unit="%" colorScheme="pink" />
                </div>
              )}
            </div>

            <Button onClick={calculateActual}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-md text-sm rounded-xl">
              <Calculator className="mr-2 h-4.5 w-4.5" />
              Analyse Production Efficiency (विश्लेषण करें)
            </Button>

            {actualResult && (
              <div className="space-y-4 animate-in fade-in">

                {/* Recovery Efficiency Rating */}
                <div className={cn("p-5 rounded-xl border-2 text-center",
                  actualResult.yieldEfficiency >= 98 ? "bg-green-50 border-green-300" :
                  actualResult.yieldEfficiency >= 94 ? "bg-yellow-50 border-yellow-300" : "bg-red-50 border-red-300"
                )}>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Process Recovery Efficiency</div>
                  <div className={cn("text-4xl sm:text-5xl font-black",
                    actualResult.yieldEfficiency >= 98 ? "text-green-700" :
                    actualResult.yieldEfficiency >= 94 ? "text-yellow-700" : "text-red-700"
                  )}>
                    {actualResult.yieldEfficiency.toFixed(1)}%
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 font-medium">
                    Actual Yield: <strong>{actualResult.actualYieldPct.toFixed(2)}%</strong> vs. Theoretical Ideal: <strong>{actualResult.idealYieldPct.toFixed(2)}%</strong>
                  </p>
                  <div className="text-[10px] px-2 py-0.5 rounded-full inline-block mt-2 font-bold uppercase tracking-wide bg-slate-200/50 text-slate-700">
                    {actualResult.yieldEfficiency >= 98 ? "🏆 Excellent (विश्वसनीय रिकवरी)" : 
                     actualResult.yieldEfficiency >= 94 ? "⚠️ Normal (नियमित रिकवरी - कुछ सुधार संभव)" : "🚨 High Solids Loss (अत्यधिक नुकसान - प्रक्रिया जांचें)"}
                  </div>
                </div>

                {/* Loss Deficit Summary */}
                {actualResult.lostPaneerKg > 0 && (
                  <Card className="bg-red-50/50 border border-red-200 shadow-sm">
                    <CardContent className="p-3 text-xs space-y-1">
                      <div className="font-bold text-red-800 uppercase tracking-wider text-[10px]">solids loss deficit (उत्पादन नुकसान)</div>
                      <div className="flex justify-between text-slate-600">
                        <span>Solids Lost in Whey:</span>
                        <span className="font-black text-red-600">{actualResult.lostPaneerKg.toFixed(2)} kg Paneer</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 italic leading-normal">
                        This represent paneer lost in processing due to poor curd strength, high washing losses, or overpressing.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Conversion KPIs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 shadow-sm text-center">
                    <div className="text-[10px] text-blue-600 font-extrabold uppercase">Milk Consumption Rate</div>
                    <div className="text-xl sm:text-2xl font-black text-blue-800 mt-1">{actualResult.litrePerKgPaneer.toFixed(2)} L</div>
                    <div className="text-[9px] text-blue-500 mt-0.5">per 1 kg Paneer obtained</div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 shadow-sm text-center">
                    <div className="text-[10px] text-emerald-600 font-extrabold uppercase">Ideal Expected Yield</div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-800 mt-1">{actualResult.idealYieldKg.toFixed(1)} kg</div>
                    <div className="text-[9px] text-emerald-500 mt-0.5">at 100% ideal recovery</div>
                  </div>
                </div>

                {/* Warnings */}
                {actualResult.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 text-xs font-bold">Process Quality Warnings</AlertTitle>
                    <AlertDescription className="text-[11px] text-yellow-700 space-y-1 mt-1 font-medium">
                      {actualResult.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
// ============================================================
// 4 NEW DAIRY PRODUCTION CALCULATORS
// Drop these into your YieldsCalc calculators object
// ============================================================

// ════════════════════════════════════════════════════════════
// CALCULATOR 1: CIP (Clean-In-Place) Chemical Dosing
// ════════════════════════════════════════════════════════════
function CIPChemicalCalc() {
  const { toast } = useToast();

  const [inputs, setInputs] = useState({
    systemVolume:     "500",   // L — total pipe + vessel volume
    causticConc:      "1.5",   // % target NaOH concentration
    acidConc:         "1.0",   // % target HNO3 / phosphoric
    causticStock:     "50",    // % NaOH stock solution strength
    acidStock:        "60",    // % acid stock solution strength
    causticTemp:      "75",    // °C recommended
    acidTemp:         "60",    // °C
    causticTime:      "20",    // min
    acidTime:         "15",    // min
    rinseVolume:      "200",   // L per rinse
    rinseCount:       "3",     // number of rinses
    causticDensity:   "1.53",  // kg/L for 50% NaOH
    acidDensity:      "1.37",  // kg/L for 60% HNO3
    causticCostPerKg: "35",    // ₹/kg
    acidCostPerKg:    "85",    // ₹/kg
    waterCostPerL:    "0.05",  // ₹/L
    cyclesPerDay:     "2",
    workingDays:      "26",
  });

  const [result, setResult] = useState<any>(null);
  const [showSteps, setShowSteps] = useState(false);

  const set = (k: string, v: string) => setInputs(p => ({ ...p, [k]: v }));

  const calculate = useCallback(() => {
    const V      = parseFloat(inputs.systemVolume)     || 0;
    const Cc     = parseFloat(inputs.causticConc)      / 100;
    const Ac     = parseFloat(inputs.acidConc)         / 100;
    const Cs     = parseFloat(inputs.causticStock)     / 100;
    const As     = parseFloat(inputs.acidStock)        / 100;
    const Cd     = parseFloat(inputs.causticDensity)   || 1.53;
    const Ad     = parseFloat(inputs.acidDensity)      || 1.37;
    const Cp     = parseFloat(inputs.causticCostPerKg) || 0;
    const Ap     = parseFloat(inputs.acidCostPerKg)    || 0;
    const Wp     = parseFloat(inputs.waterCostPerL)    || 0;
    const Rv     = parseFloat(inputs.rinseVolume)      || 0;
    const Rn     = parseFloat(inputs.rinseCount)       || 0;
    const cycles = parseFloat(inputs.cyclesPerDay)     || 1;
    const days   = parseFloat(inputs.workingDays)      || 26;

    if (V <= 0) { toast({ variant: "destructive", title: "Error", description: "System volume must be > 0" }); return; }
    if (Cs <= Cc) { toast({ variant: "destructive", title: "Error", description: "Stock NaOH% must be > target%" }); return; }
    if (As <= Ac) { toast({ variant: "destructive", title: "Error", description: "Stock acid% must be > target%" }); return; }

    // C1V1 = C2V2  →  stock required = (target% × circuit volume) / stock%
    // Volume of stock to add (L)
    const causticStockVol = (Cc * V) / Cs;          // L of stock NaOH
    const acidStockVol    = (Ac * V) / As;           // L of stock acid
    const waterForCaustic = V - causticStockVol;     // makeup water
    const waterForAcid    = V - acidStockVol;

    // Mass of actual chemical
    const causticMassKg   = causticStockVol * Cd * Cs;   // kg pure NaOH
    const acidMassKg      = acidStockVol    * Ad * As;   // kg pure acid

    // Cost per cycle
    const causticCost = causticMassKg * Cp;
    const acidCost    = acidMassKg    * Ap;
    const rinseWater  = Rv * Rn;
    const waterCost   = (waterForCaustic + waterForAcid + rinseWater) * Wp;
    const totalCycleChemCost = causticCost + acidCost + waterCost;

    // Monthly cost
    const monthlyCycles = cycles * days;
    const monthlyCost   = totalCycleChemCost * monthlyCycles;
    const totalWaterPerCycle = waterForCaustic + waterForAcid + rinseWater;

    // Titration verification
    const causticTitreCheck = (causticStockVol * Cs * 1000) / (40.0 * V); // mol/L NaOH
    const normality = causticTitreCheck;

    const warnings = [];
    if (parseFloat(inputs.causticTemp) < 70) warnings.push("NaOH temp below 70°C — fat removal may be incomplete. Recommend 75–85°C.");
    if (parseFloat(inputs.acidTemp) < 55) warnings.push("Acid temp below 55°C — mineral deposit removal may be poor. Recommend 60–70°C.");
    if (parseFloat(inputs.causticConc) > 3) warnings.push("NaOH > 3% — check equipment material compatibility (rubber seals).");
    if (parseFloat(inputs.rinseCount) < 2) warnings.push("Less than 2 rinses — residual chemical risk. Recommend minimum 3 rinses.");

    setResult({
      causticStockVol, acidStockVol,
      waterForCaustic, waterForAcid,
      causticMassKg, acidMassKg,
      causticCost, acidCost, waterCost,
      totalCycleChemCost, monthlyCost,
      rinseWater, totalWaterPerCycle,
      normality, monthlyCycles, warnings,
    });

    toast({ title: "CIP Calculated", description: `Cycle cost: ₹${totalCycleChemCost.toFixed(2)} | Monthly: ₹${monthlyCost.toFixed(0)}` });
  }, [inputs, toast]);

  const InputRow = ({ label, k, suffix, help }: { label: string; k: keyof typeof inputs; suffix?: string; help?: string }) => (
    <div className="space-y-1">
      <Label className="text-xs font-semibold text-slate-600 flex justify-between">
        {label} {suffix && <span className="text-muted-foreground font-normal">{suffix}</span>}
      </Label>
      <Input type="number" inputMode="decimal" className="h-8 text-sm"
        value={inputs[k]} onChange={e => set(k, e.target.value)} />
      {help && <p className="text-[10px] text-muted-foreground">{help}</p>}
    </div>
  );

  return (
    <div className="space-y-4 w-full">
      <Alert className="bg-orange-50 border-orange-200">
        <Beaker className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-sm font-bold">CIP Chemical Dosing Calculator</AlertTitle>
        <AlertDescription className="text-xs">
          Calculate exact NaOH & acid volumes using C₁V₁ = C₂V₂. Accurate chemical cost per cycle and monthly.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1: System */}
        <Card className="border-orange-100">
          <CardHeader className="p-3 pb-2 bg-orange-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-2">
              <Factory className="w-3 h-3" /> System Parameters
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <InputRow label="Circuit Volume" k="systemVolume" suffix="L" help="Total pipe + vessel + balance tank volume" />
            <InputRow label="CIP Cycles / Day" k="cyclesPerDay" suffix="times" />
            <InputRow label="Working Days / Month" k="workingDays" suffix="days" />
            <InputRow label="Rinse Volume / Rinse" k="rinseVolume" suffix="L" />
            <InputRow label="Number of Rinses" k="rinseCount" suffix="cycles" help="Min 2 pre + 1 post recommended" />
          </CardContent>
        </Card>

        {/* Column 2: Chemicals */}
        <Card className="border-red-100">
          <CardHeader className="p-3 pb-2 bg-red-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-red-700 uppercase tracking-wider flex items-center gap-2">
              <Droplets className="w-3 h-3" /> Chemical Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase border-b pb-1">Caustic (NaOH)</div>
            <InputRow label="Target Conc" k="causticConc" suffix="%" help="Typically 1.0–2.5%" />
            <InputRow label="Stock Strength" k="causticStock" suffix="%" help="Usually 30–50% liquid" />
            <InputRow label="Temp" k="causticTemp" suffix="°C" />
            <InputRow label="Contact Time" k="causticTime" suffix="min" />
            <div className="text-[10px] font-bold text-slate-500 uppercase border-b pb-1 mt-2">Acid (HNO₃ / Phosphoric)</div>
            <InputRow label="Target Conc" k="acidConc" suffix="%" help="Typically 0.5–1.5%" />
            <InputRow label="Stock Strength" k="acidStock" suffix="%" />
            <InputRow label="Temp" k="acidTemp" suffix="°C" />
            <InputRow label="Contact Time" k="acidTime" suffix="min" />
          </CardContent>
        </Card>

        {/* Column 3: Cost */}
        <Card className="border-green-100">
          <CardHeader className="p-3 pb-2 bg-green-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-green-700 uppercase tracking-wider flex items-center gap-2">
              <DollarSign className="w-3 h-3" /> Cost Inputs
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <InputRow label="NaOH Stock Cost" k="causticCostPerKg" suffix="₹/kg" />
            <InputRow label="NaOH Stock Density" k="causticDensity" suffix="kg/L" help="50% NaOH ≈ 1.53 kg/L" />
            <InputRow label="Acid Stock Cost" k="acidCostPerKg" suffix="₹/kg" />
            <InputRow label="Acid Stock Density" k="acidDensity" suffix="kg/L" help="60% HNO₃ ≈ 1.37 kg/L" />
            <InputRow label="Water Cost" k="waterCostPerL" suffix="₹/L" />
          </CardContent>
        </Card>
      </div>

      <Button onClick={calculate} className="w-full h-11 bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-md">
        <Calculator className="w-4 h-4 mr-2" /> Calculate CIP Dosing
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-2">
          {result.warnings.length > 0 && (
            <Alert className="border-yellow-300 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-800 text-sm">Process Warnings</AlertTitle>
              <AlertDescription className="text-xs space-y-1">
                {result.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
              </AlertDescription>
            </Alert>
          )}

          {/* Dosing Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="p-3 pb-1">
                <CardTitle className="text-sm text-red-800">🧪 Caustic (NaOH) Dosing</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Stock to add</span><span className="font-bold text-red-700">{result.causticStockVol.toFixed(2)} L</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Makeup water</span><span className="font-bold">{result.waterForCaustic.toFixed(2)} L</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Pure NaOH</span><span className="font-bold">{result.causticMassKg.toFixed(3)} kg</span></div>
                <div className="flex justify-between border-t pt-1"><span className="text-slate-600">Normality check</span><span className="font-bold text-orange-600">{result.normality.toFixed(4)} N</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Cost / cycle</span><span className="font-bold text-green-700">₹ {result.causticCost.toFixed(2)}</span></div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="p-3 pb-1">
                <CardTitle className="text-sm text-blue-800">🧪 Acid (HNO₃) Dosing</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Stock to add</span><span className="font-bold text-blue-700">{result.acidStockVol.toFixed(2)} L</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Makeup water</span><span className="font-bold">{result.waterForAcid.toFixed(2)} L</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Pure acid</span><span className="font-bold">{result.acidMassKg.toFixed(3)} kg</span></div>
                <div className="flex justify-between border-t pt-1"><span className="text-slate-600">Rinse water (all)</span><span className="font-bold">{result.rinseWater.toFixed(1)} L</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Cost / cycle</span><span className="font-bold text-green-700">₹ {result.acidCost.toFixed(2)}</span></div>
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white border-none">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Total Water / Cycle</div>
                  <div className="text-xl font-black text-cyan-400">{result.totalWaterPerCycle.toFixed(0)} <span className="text-sm">L</span></div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Chem Cost / Cycle</div>
                  <div className="text-xl font-black text-yellow-400">₹ {result.totalCycleChemCost.toFixed(0)}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Cycles / Month</div>
                  <div className="text-xl font-black text-green-400">{result.monthlyCycles}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Monthly CIP Cost</div>
                  <div className="text-xl font-black text-orange-400">₹ {result.monthlyCost.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-step */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="text-xs font-bold text-slate-600 mb-2">📐 Formula Reference (C₁V₁ = C₂V₂)</div>
            <div className="text-xs text-slate-500 space-y-1 font-mono">
              <div>Caustic stock vol = (Target% × Circuit Vol) / Stock%</div>
              <div>= ({inputs.causticConc}% × {inputs.systemVolume}L) / {inputs.causticStock}% = <strong>{result.causticStockVol.toFixed(2)} L</strong></div>
              <div className="mt-1">Acid stock vol = ({inputs.acidConc}% × {inputs.systemVolume}L) / {inputs.acidStock}% = <strong>{result.acidStockVol.toFixed(2)} L</strong></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// ════════════════════════════════════════════════════════════
// CALCULATOR 2: EVAPORATOR / CONCENTRATOR
// Water evaporation load, steam economy, concentration ratio
// ════════════════════════════════════════════════════════════
function EvaporatorCalc() {
  const { toast } = useToast();

  const [inputs, setInputs] = useState({
    feedQty:        "1000",   // kg/h feed milk
    feedTS:         "13.0",   // % total solids in feed
    targetTS:       "48.0",   // % TS in concentrate (e.g. condensed milk 28%, khoa 72%)
    feedTemp:       "72",     // °C (after pasteurization)
    boilingTemp:    "65",     // °C (vacuum evaporator — 1st effect)
    steamPressure:  "3.0",    // bar (steam supply)
    numEffects:     "3",      // number of effects (1, 2, 3)
    steamCostPerKg: "2.5",    // ₹/kg steam
    electricCost:   "7",      // ₹/kWh
    pumpLoad:       "15",     // kW pump + vacuum
    productType:    "condensed", // condensed | khoa | wpc
  });

  const [result, setResult] = useState<any>(null);
  const set = (k: string, v: string) => setInputs(p => ({ ...p, [k]: v }));

  // Latent heat of vaporization table by temp (°C → kJ/kg)
  const latentHeat = (T: number) => {
    // Approximation: Lv ≈ 2501 - 2.37 × T (kJ/kg) — accurate within 0.5% for 40–100°C
    return 2501 - 2.37 * T;
  };

  const calculate = useCallback(() => {
    const F    = parseFloat(inputs.feedQty)        || 0;
    const TSf  = parseFloat(inputs.feedTS)         / 100;
    const TSc  = parseFloat(inputs.targetTS)       / 100;
    const Tf   = parseFloat(inputs.feedTemp)       || 72;
    const Tb   = parseFloat(inputs.boilingTemp)    || 65;
    const n    = parseInt(inputs.numEffects)       || 1;
    const Ps   = parseFloat(inputs.steamPressure)  || 3;
    const Sc   = parseFloat(inputs.steamCostPerKg) || 0;
    const Ec   = parseFloat(inputs.electricCost)   || 0;
    const Pl   = parseFloat(inputs.pumpLoad)       || 0;

    if (F <= 0) { toast({ variant: "destructive", title: "Error", description: "Feed quantity must be > 0" }); return; }
    if (TSc <= TSf) { toast({ variant: "destructive", title: "Error", description: "Target TS% must be higher than feed TS%" }); return; }
    if (TSc >= 100) { toast({ variant: "destructive", title: "Error", description: "Target TS% must be less than 100%" }); return; }

    // Mass balance: F × TSf = C × TSc → Concentrate C = F × TSf / TSc
    const C = F * TSf / TSc;             // kg/h concentrate
    const W = F - C;                     // kg/h water evaporated
    const concRatio = F / C;            // Concentration ratio

    // Steam saturation temp at given pressure (Antoine approx)
    // Ts_sat ≈ 100 + 28.5 × log10(P/1.01325) for P in bar
    const Ts_sat = 100 + 28.5 * Math.log10(Ps / 1.01325);

    // Latent heat of steam at Ts_sat & evaporation at Tb
    const Lv_steam = latentHeat(Ts_sat);   // kJ/kg steam
    const Lv_evap  = latentHeat(Tb);       // kJ/kg water evaporated

    // Heat load on 1st effect (sensible + evaporation)
    const Cp_milk = 3.93;  // kJ/(kg·°C) typical for milk
    const Q_sensible = F * Cp_milk * Math.max(0, Ts_sat - Tf);  // kJ/h (preheat)
    const Q_evap     = W * Lv_evap;                              // kJ/h total evaporation
    const Q_total    = Q_sensible + Q_evap;                      // kJ/h

    // Steam consumption — single effect
    const steamSingleEffect = Q_total / Lv_steam;  // kg/h
    // Multi-effect economy: ~0.9 kg water/kg steam per effect
    const steamEconomy = n * 0.88;   // kg water evaporated per kg steam (typical: 1-eff=0.9, 2=1.7, 3=2.5)
    const steamRequired = W / steamEconomy;   // kg/h

    // Thermal energy
    const thermalEnergyKJh = steamRequired * Lv_steam;   // kJ/h
    const thermalEnergyKW  = thermalEnergyKJh / 3600;    // kW

    // Electric load
    const totalElecKW = Pl;
    const totalPowerKW = thermalEnergyKW + totalElecKW;

    // Costs per hour
    const steamCostPerH  = steamRequired * Sc;
    const elecCostPerH   = totalElecKW   * Ec;
    const totalCostPerH  = steamCostPerH + elecCostPerH;

    // Cost per kg concentrate
    const costPerKgConc  = totalCostPerH / C;
    const costPerKgWater = totalCostPerH / W;

    const warnings = [];
    if (TSc > 72) warnings.push("TS > 72% — product may scorch in evaporator. Consider short-time high-temp (STHT) finishing.");
    if (Tb > 80) warnings.push("Boiling temp > 80°C — use vacuum evaporation to prevent coagulation and browning.");
    if (n === 1) warnings.push("Single-effect evaporator — steam economy is low (~0.9). Consider multi-effect to reduce costs.");
    if (concRatio > 10) warnings.push(`High concentration ratio (${concRatio.toFixed(1)}×) — viscosity rise may affect heat transfer in later stages.`);

    setResult({
      C, W, concRatio, steamRequired, steamEconomy,
      thermalEnergyKW, Ts_sat, Lv_steam, Lv_evap,
      Q_sensible, Q_evap, Q_total,
      steamCostPerH, elecCostPerH, totalCostPerH,
      costPerKgConc, costPerKgWater, warnings,
    });

    toast({ title: "Evaporator Calculated", description: `Evaporate ${W.toFixed(0)} kg/h water | Concentrate: ${C.toFixed(0)} kg/h` });
  }, [inputs, toast]);

  const InputRow = ({ label, k, suffix, help }: { label: string; k: keyof typeof inputs; suffix?: string; help?: string }) => (
    <div className="space-y-1">
      <Label className="text-xs font-semibold text-slate-600 flex justify-between">
        {label} {suffix && <span className="text-muted-foreground font-normal">{suffix}</span>}
      </Label>
      <Input type="number" inputMode="decimal" className="h-8 text-sm"
        value={inputs[k]} onChange={e => set(k, e.target.value)} />
      {help && <p className="text-[10px] text-muted-foreground">{help}</p>}
    </div>
  );

  return (
    <div className="space-y-4 w-full">
      <Alert className="bg-amber-50 border-amber-200">
        <Thermometer className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-sm font-bold">Evaporator / Concentrator Calculator</AlertTitle>
        <AlertDescription className="text-xs">
          Mass balance, steam economy & operating cost for milk concentration. Valid for condensed milk, khoa base, WPC pre-concentration.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-amber-100">
          <CardHeader className="p-3 pb-2 bg-amber-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-amber-700 uppercase tracking-wider">📥 Feed & Target</CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <InputRow label="Feed Milk" k="feedQty" suffix="kg/h" help="Hourly feed rate to evaporator" />
            <InputRow label="Feed Total Solids" k="feedTS" suffix="%" help="Typical pasteurized milk: 13–15%" />
            <InputRow label="Target Total Solids" k="targetTS" suffix="%" help="Condensed: 26–30% | Khoa base: 65–72% | WPC: 20–25%" />
            <InputRow label="Feed Temperature" k="feedTemp" suffix="°C" help="After PHE preheat, typically 65–75°C" />
            <InputRow label="Boiling Temp (1st Effect)" k="boilingTemp" suffix="°C" help="Vacuum evap: 55–70°C recommended" />
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-slate-600">Number of Effects</Label>
              <select value={inputs.numEffects} onChange={e => set("numEffects", e.target.value)}
                className="w-full border rounded-md px-2 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option value="1">1 Effect (Economy ≈ 0.9)</option>
                <option value="2">2 Effects (Economy ≈ 1.7)</option>
                <option value="3">3 Effects (Economy ≈ 2.5)</option>
                <option value="4">4 Effects (Economy ≈ 3.2)</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardHeader className="p-3 pb-2 bg-orange-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-orange-700 uppercase tracking-wider">⚡ Energy & Cost</CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <InputRow label="Steam Pressure" k="steamPressure" suffix="bar" help="Boiler steam pressure (2–6 bar typical)" />
            <InputRow label="Steam Cost" k="steamCostPerKg" suffix="₹/kg" help="Typically ₹2–4/kg generated steam" />
            <InputRow label="Electricity Cost" k="electricCost" suffix="₹/kWh" />
            <InputRow label="Pump + Vacuum Load" k="pumpLoad" suffix="kW" help="Vacuum pump + condensate + feed pump combined" />
          </CardContent>
        </Card>
      </div>

      <Button onClick={calculate} className="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white font-bold">
        <Calculator className="w-4 h-4 mr-2" /> Calculate Evaporator Load
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-2">
          {result.warnings.length > 0 && (
            <Alert className="border-yellow-300 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-sm text-yellow-800">Process Notes</AlertTitle>
              <AlertDescription className="text-xs space-y-1">
                {result.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
              </AlertDescription>
            </Alert>
          )}

          {/* Mass Balance */}
          <Card>
            <CardHeader className="p-3 pb-2 bg-slate-50 border-b">
              <CardTitle className="text-sm">📊 Mass Balance</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <div className="text-[10px] font-bold text-blue-600 uppercase">Feed In</div>
                  <div className="text-2xl font-black text-blue-800">{parseFloat(inputs.feedQty).toFixed(0)}</div>
                  <div className="text-xs text-blue-500">kg/h</div>
                </div>
                <div className="bg-slate-100 rounded-lg p-3 border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Water Out</div>
                  <div className="text-2xl font-black text-slate-700">{result.W.toFixed(0)}</div>
                  <div className="text-xs text-slate-400">kg/h evaporated</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                  <div className="text-[10px] font-bold text-green-600 uppercase">Concentrate</div>
                  <div className="text-2xl font-black text-green-800">{result.C.toFixed(1)}</div>
                  <div className="text-xs text-green-500">kg/h ({inputs.targetTS}% TS)</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between bg-slate-50 rounded p-2">
                  <span className="text-slate-500">Concentration Ratio</span>
                  <span className="font-bold">{result.concRatio.toFixed(2)}×</span>
                </div>
                <div className="flex justify-between bg-slate-50 rounded p-2">
                  <span className="text-slate-500">Steam Economy</span>
                  <span className="font-bold text-amber-600">{result.steamEconomy.toFixed(2)} kg/kg</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Energy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader className="p-3 pb-1"><CardTitle className="text-sm text-orange-800">🔥 Steam Requirement</CardTitle></CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Sat. steam temp</span><span className="font-bold">{result.Ts_sat.toFixed(1)} °C</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Latent heat (steam)</span><span className="font-bold">{result.Lv_steam.toFixed(0)} kJ/kg</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Latent heat (evap)</span><span className="font-bold">{result.Lv_evap.toFixed(0)} kJ/kg</span></div>
                <div className="flex justify-between border-t pt-1"><span className="text-slate-600">Steam required</span><span className="font-black text-orange-700">{result.steamRequired.toFixed(1)} kg/h</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Thermal load</span><span className="font-bold">{result.thermalEnergyKW.toFixed(1)} kW</span></div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-800 to-green-900 text-white border-none">
              <CardHeader className="p-3 pb-1"><CardTitle className="text-sm text-green-200">💰 Operating Cost</CardTitle></CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-green-300">Steam cost / h</span><span className="font-bold">₹ {result.steamCostPerH.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-green-300">Electric cost / h</span><span className="font-bold">₹ {result.elecCostPerH.toFixed(2)}</span></div>
                <div className="flex justify-between border-t border-green-600 pt-1"><span className="text-green-200">Total cost / h</span><span className="font-black text-yellow-300 text-base">₹ {result.totalCostPerH.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-green-300">Cost / kg concentrate</span><span className="font-bold text-yellow-300">₹ {result.costPerKgConc.toFixed(3)}</span></div>
                <div className="flex justify-between"><span className="text-green-300">Cost / kg water evap</span><span className="font-bold">₹ {result.costPerKgWater.toFixed(3)}</span></div>
              </CardContent>
            </Card>
          </div>

          {/* Formula reference */}
          <div className="bg-slate-50 border rounded-lg p-3 text-xs font-mono text-slate-500 space-y-1">
            <div className="font-bold text-slate-700 mb-1">📐 Mass Balance Formulas Used:</div>
            <div>Concentrate = Feed × (Feed TS%) / (Target TS%)</div>
            <div>= {inputs.feedQty} × {inputs.feedTS}% / {inputs.targetTS}% = <strong className="text-slate-700">{result.C.toFixed(1)} kg/h</strong></div>
            <div className="mt-1">Water Evaporated = Feed − Concentrate = {inputs.feedQty} − {result.C.toFixed(1)} = <strong className="text-slate-700">{result.W.toFixed(1)} kg/h</strong></div>
            <div>Steam = Water Evap / Steam Economy = {result.W.toFixed(1)} / {result.steamEconomy.toFixed(2)} = <strong className="text-slate-700">{result.steamRequired.toFixed(1)} kg/h</strong></div>
          </div>
        </div>
      )}
    </div>
  );
}


// ════════════════════════════════════════════════════════════
// CALCULATOR 3: SPRAY DRYER YIELD & EFFICIENCY
// Feed → powder yield, moisture, energy, outlet humidity
// ════════════════════════════════════════════════════════════
function SprayDryerCalc() {
  const { toast } = useToast();

  const [inputs, setInputs] = useState({
    feedRate:        "500",   // kg/h liquid feed
    feedTS:          "48",    // % total solids (concentrate from evaporator)
    targetMoisture:  "3.5",   // % final powder moisture
    inletTemp:       "180",   // °C hot air inlet
    outletTemp:      "85",    // °C exhaust air outlet
    ambientTemp:     "30",    // °C ambient
    ambientRH:       "60",    // % relative humidity
    airFlowRate:     "5000",  // kg/h drying air
    fuelCostPerKg:   "55",    // ₹/kg LPG / furnace oil
    fuelCalorific:   "46000", // kJ/kg LPG ≈ 46000 | FO ≈ 42000
    electricCost:    "7",     // ₹/kWh
    atomiserLoad:    "22",    // kW atomiser motor
    fanLoad:         "45",    // kW main air fan
  });

  const [result, setResult] = useState<any>(null);
  const set = (k: string, v: string) => setInputs(p => ({ ...p, [k]: v }));

  const calculate = useCallback(() => {
    const F   = parseFloat(inputs.feedRate)       || 0;
    const TSf = parseFloat(inputs.feedTS)         / 100;
    const Mw  = parseFloat(inputs.targetMoisture) / 100;
    const Ti  = parseFloat(inputs.inletTemp)      || 0;
    const To  = parseFloat(inputs.outletTemp)     || 0;
    const Ta  = parseFloat(inputs.ambientTemp)    || 30;
    const RH  = parseFloat(inputs.ambientRH)      / 100;
    const Ga  = parseFloat(inputs.airFlowRate)    || 0;
    const Fc  = parseFloat(inputs.fuelCostPerKg)  || 0;
    const Cv  = parseFloat(inputs.fuelCalorific)  || 46000;
    const Ec  = parseFloat(inputs.electricCost)   || 0;
    const Pal = parseFloat(inputs.atomiserLoad)   || 0;
    const Pfl = parseFloat(inputs.fanLoad)        || 0;

    if (F <= 0 || TSf <= 0) { toast({ variant: "destructive", title: "Error", description: "Feed rate and TS% must be > 0" }); return; }
    if (Ti <= To) { toast({ variant: "destructive", title: "Error", description: "Inlet temp must be higher than outlet temp" }); return; }
    if (TSf + Mw >= 1) { toast({ variant: "destructive", title: "Error", description: "Feed TS% + moisture% cannot exceed 100%" }); return; }

    // Mass balance
    // Solids in feed = F × TSf
    // Feed water = F × (1 - TSf)
    // Powder: Solid / (1 - Mw) = powder yield
    const solidsIn   = F * TSf;
    const feedWater  = F * (1 - TSf);
    const powderYield = solidsIn / (1 - Mw);        // kg/h powder
    const waterEvaporated = F - powderYield;         // kg/h removed
    const yieldPct   = (powderYield / (F * TSf / (1 - 0.04))) * 100; // vs ideal 4% moisture

    // Thermal efficiency (approximate enthalpy method)
    const Cp_air = 1.005;   // kJ/(kg·°C)
    const Lv_85  = 2501 - 2.37 * 85; // latent at ~85°C outlet
    // Heat to raise air temp from Ta → Ti
    const Q_heat = Ga * Cp_air * (Ti - Ta);           // kJ/h heat input to air
    // Heat used for evaporation
    const Q_evap = waterEvaporated * Lv_85;           // kJ/h useful
    const thermalEfficiency = (Q_evap / Q_heat) * 100;

    // Fuel consumption
    const fuelRate    = Q_heat / Cv;                  // kg/h fuel
    const fuelCostPerH = fuelRate * Fc;
    const elecCostPerH = (Pal + Pfl) * Ec;
    const totalCostPerH = fuelCostPerH + elecCostPerH;

    // Evaporation rate check
    const evapRate = waterEvaporated / (Ga / 1000);  // kg water / 1000 kg air

    // Humidity of outlet air (absolute humidity increase)
    // Sat vapour pressure at Ta: Psat ≈ 0.6108 × exp(17.27×Ta/(Ta+237.3)) kPa
    const Psat_a = 0.6108 * Math.exp(17.27 * Ta / (Ta + 237.3));
    const w_in   = 0.622 * (RH * Psat_a) / (101.325 - RH * Psat_a); // kg/kg dry air
    const w_out  = w_in + waterEvaporated / Ga;     // kg/kg dry air (approx)
    const outletRH_approx = (w_out * 101.325) / ((0.622 + w_out) * (0.6108 * Math.exp(17.27 * To / (To + 237.3)))) * 100;

    const warnings = [];
    if (To > 90) warnings.push("Outlet temp > 90°C — may cause powder browning / denaturation especially for WMP/SMP.");
    if (To < 75) warnings.push("Outlet temp < 75°C — powder moisture may be high; check final moisture.");
    if (thermalEfficiency < 40) warnings.push("Thermal efficiency < 40% — consider heat recovery on exhaust air.");
    if (outletRH_approx > 15) warnings.push(`Outlet RH ≈ ${outletRH_approx.toFixed(0)}% — above 15%, powder stickiness risk in cyclone. Check outlet temp.`);
    if (TSf < 0.40) warnings.push("Feed TS < 40% — evaporation load is high. Pre-concentrate to ≥45% for better dryer efficiency.");

    setResult({
      solidsIn, feedWater, powderYield, waterEvaporated, yieldPct,
      Q_heat, Q_evap, thermalEfficiency,
      fuelRate, fuelCostPerH, elecCostPerH, totalCostPerH,
      evapRate, w_in, w_out, outletRH_approx,
      costPerKgPowder: totalCostPerH / powderYield,
      warnings,
    });

    toast({ title: "Spray Dryer Calculated", description: `Powder: ${powderYield.toFixed(0)} kg/h | Efficiency: ${thermalEfficiency.toFixed(1)}%` });
  }, [inputs, toast]);

  const InputRow = ({ label, k, suffix, help }: { label: string; k: keyof typeof inputs; suffix?: string; help?: string }) => (
    <div className="space-y-1">
      <Label className="text-xs font-semibold text-slate-600 flex justify-between">
        {label} {suffix && <span className="text-muted-foreground font-normal">{suffix}</span>}
      </Label>
      <Input type="number" inputMode="decimal" className="h-8 text-sm"
        value={inputs[k]} onChange={e => set(k, e.target.value)} />
      {help && <p className="text-[10px] text-muted-foreground">{help}</p>}
    </div>
  );

  return (
    <div className="space-y-4 w-full">
      <Alert className="bg-sky-50 border-sky-200">
        <Zap className="h-4 w-4 text-sky-600" />
        <AlertTitle className="text-sm font-bold">Spray Dryer Yield & Efficiency Calculator</AlertTitle>
        <AlertDescription className="text-xs">
          Feed → powder mass balance, thermal efficiency, fuel & electric cost per kg powder. For SMP, WMP, WPC, infant formula.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-sky-100">
          <CardHeader className="p-3 pb-2 bg-sky-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-sky-700 uppercase tracking-wider">📥 Feed Conditions</CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <InputRow label="Feed Rate" k="feedRate" suffix="kg/h" help="Concentrated milk to atomiser" />
            <InputRow label="Feed Total Solids" k="feedTS" suffix="%" help="After evaporator: 45–55% for SMP" />
            <InputRow label="Target Powder Moisture" k="targetMoisture" suffix="%" help="SMP: 3–4% | WMP: 2.5–3.5%" />
            <InputRow label="Ambient Temp" k="ambientTemp" suffix="°C" />
            <InputRow label="Ambient RH" k="ambientRH" suffix="%" />
          </CardContent>
        </Card>

        <Card className="border-red-100">
          <CardHeader className="p-3 pb-2 bg-red-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-red-700 uppercase tracking-wider">🌡️ Air Conditions</CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <InputRow label="Inlet Air Temp" k="inletTemp" suffix="°C" help="SMP: 170–190°C | WMP: 160–175°C" />
            <InputRow label="Outlet Air Temp" k="outletTemp" suffix="°C" help="Typically 75–90°C" />
            <InputRow label="Drying Air Flow" k="airFlowRate" suffix="kg/h" help="From dryer design spec" />
            <InputRow label="Fuel Calorific Value" k="fuelCalorific" suffix="kJ/kg" help="LPG≈46000 | FO≈42000 | NG≈44000" />
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardHeader className="p-3 pb-2 bg-green-50 rounded-t-lg">
            <CardTitle className="text-xs font-bold text-green-700 uppercase tracking-wider">💰 Cost & Power</CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <InputRow label="Fuel Cost" k="fuelCostPerKg" suffix="₹/kg" help="LPG market rate" />
            <InputRow label="Electricity" k="electricCost" suffix="₹/kWh" />
            <InputRow label="Atomiser Motor" k="atomiserLoad" suffix="kW" />
            <InputRow label="Main Air Fan" k="fanLoad" suffix="kW" />
          </CardContent>
        </Card>
      </div>

      <Button onClick={calculate} className="w-full h-11 bg-sky-600 hover:bg-sky-700 text-white font-bold">
        <Calculator className="w-4 h-4 mr-2" /> Calculate Dryer Performance
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-2">
          {result.warnings.length > 0 && (
            <Alert className="border-yellow-300 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-sm text-yellow-800">Process Warnings</AlertTitle>
              <AlertDescription className="text-xs space-y-1">
                {result.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
              </AlertDescription>
            </Alert>
          )}

          {/* Key Outputs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Powder Yield",       value: result.powderYield.toFixed(1),        unit: "kg/h",  color: "bg-green-600" },
              { label: "Water Evaporated",   value: result.waterEvaporated.toFixed(1),     unit: "kg/h",  color: "bg-blue-500"  },
              { label: "Thermal Efficiency", value: result.thermalEfficiency.toFixed(1),   unit: "%",     color: result.thermalEfficiency > 50 ? "bg-emerald-600" : "bg-orange-500" },
              { label: "Cost / kg Powder",   value: `₹${result.costPerKgPowder.toFixed(2)}`, unit: "/kg", color: "bg-purple-600" },
            ].map((item, i) => (
              <div key={i} className={`${item.color} text-white rounded-xl p-3 text-center`}>
                <div className="text-[10px] font-bold uppercase opacity-80">{item.label}</div>
                <div className="text-xl font-black">{item.value}</div>
                <div className="text-[10px] opacity-70">{item.unit}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="p-3 pb-2 bg-slate-50 border-b">
                <CardTitle className="text-sm">📊 Mass Balance</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Solids in feed</span><span className="font-bold">{result.solidsIn.toFixed(1)} kg/h</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Water in feed</span><span className="font-bold">{result.feedWater.toFixed(1)} kg/h</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Water removed</span><span className="font-bold text-blue-600">{result.waterEvaporated.toFixed(1)} kg/h</span></div>
                <div className="flex justify-between border-t pt-1"><span className="text-slate-500">Powder @ {inputs.targetMoisture}% moisture</span><span className="font-black text-green-700">{result.powderYield.toFixed(1)} kg/h</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Outlet air humidity</span><span className="font-bold">{result.outletRH_approx.toFixed(1)}% RH</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-3 pb-2 bg-slate-50 border-b">
                <CardTitle className="text-sm">🔥 Energy & Cost</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Heat input to air</span><span className="font-bold">{(result.Q_heat / 3600).toFixed(1)} kW</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Heat for evaporation</span><span className="font-bold">{(result.Q_evap / 3600).toFixed(1)} kW</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Fuel rate</span><span className="font-bold">{result.fuelRate.toFixed(2)} kg/h</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Fuel cost / h</span><span className="font-bold text-orange-600">₹ {result.fuelCostPerH.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Electric cost / h</span><span className="font-bold">₹ {result.elecCostPerH.toFixed(2)}</span></div>
                <div className="flex justify-between border-t pt-1"><span className="font-bold">Total cost / h</span><span className="font-black text-green-700">₹ {result.totalCostPerH.toFixed(2)}</span></div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 border rounded-lg p-3 text-xs font-mono text-slate-500 space-y-1">
            <div className="font-bold text-slate-700 mb-1">📐 Key Formulas:</div>
            <div>Powder = Solids / (1 − Moisture%) = {result.solidsIn.toFixed(1)} / {(1 - parseFloat(inputs.targetMoisture)/100).toFixed(3)} = <strong className="text-slate-700">{result.powderYield.toFixed(1)} kg/h</strong></div>
            <div>Water removed = Feed − Powder = {inputs.feedRate} − {result.powderYield.toFixed(1)} = <strong className="text-slate-700">{result.waterEvaporated.toFixed(1)} kg/h</strong></div>
            <div>Thermal η = Q_evap / Q_air = {(result.Q_evap/3600).toFixed(1)} / {(result.Q_heat/3600).toFixed(1)} = <strong className="text-slate-700">{result.thermalEfficiency.toFixed(1)}%</strong></div>
          </div>
        </div>
      )}
    </div>
  );
}


// ════════════════════════════════════════════════════════════
// CALCULATOR 4: PASTEURIZATION LOG REDUCTION & D-VALUE
// HTST / LTLT / UHT validation, microbial kill, holding time
// ════════════════════════════════════════════════════════════
export function PasteurizationCalc() {
  const { toast } = useToast();

  const [activeMode, setActiveMode] = useState("htst"); // htst | ltlt | uht | dvalue

  const [htst, setHtst] = useState({
    targetTemp:    "72",    // °C
    holdingTime:   "15",    // sec
    flowRate:      "5000",  // L/h
    holdingTubeID: "38",    // mm internal diameter
    pathogen:      "listeria", // e.coli | listeria | salmonella | tb
  });

  const [dval, setDval] = useState({
    dValue:      "0.5",   // min at reference temp
    zValue:      "7.0",   // °C z-value
    refTemp:     "72",    // °C reference
    processTemp: "72",    // °C actual process
    processTime: "0.25",  // min (15 sec default)
    initialLoad: "1000000", // CFU/mL initial count
  });

  const [result, setResult] = useState<any>(null);

  // FIXED: Corrected the syntax for e.coli object below
  const pathogenData: any = {
    listeria:    { name: "Listeria monocytogenes", D72: 0.5,  z: 7.0,  target6log: true  },
    salmonella:  { name: "Salmonella spp.",        D72: 0.14, z: 5.6,  target6log: true  },
    "e.coli":    { name: "E. coli O157:H7",        D72: 0.12, z: 6.4,  target6log: true  },
    tb:          { name: "M. tuberculosis (TB)",   D72: 0.5,  z: 6.5,  target6log: false },
    coxiella:    { name: "Coxiella burnetii (Q-fever)", D72: 0.4, z: 5.5, target6log: false },
  };

  const setH = (k: string, v: string) => setHtst(p => ({ ...p, [k]: v }));
  const setD = (k: string, v: string) => setDval(p => ({ ...p, [k]: v }));

  const calculateHTST = useCallback(() => {
    const T    = parseFloat(htst.targetTemp)    || 72;
    const t    = parseFloat(htst.holdingTime)   || 15;   // sec
    const Q    = parseFloat(htst.flowRate)      || 5000; // L/h
    const D    = parseFloat(htst.holdingTubeID) / 1000;  // m

    const pathogen = pathogenData[htst.pathogen] || pathogenData["listeria"];

    // D value at process temp using z-value
    const D_process = pathogen.D72 * Math.pow(10, (pathogen.refTemp || 72 - T) / pathogen.z);
    
    // Log reduction = t(min) / D_process(min)
    const t_min    = t / 60;
    const logRed   = t_min / D_process;
    const killedPct = (1 - Math.pow(10, -logRed)) * 100;

    // Pasteurization Equivalent at 72°C (PE)
    const PE = t_min * Math.pow(10, (T - 72) / pathogen.z);

    // HTST compliance (legal: 72°C / 15 sec for cow milk in India / EU / US)
    const legalTemp = 72, legalTime = 15;
    const compliant = T >= legalTemp && t >= legalTime;

    // Holding tube sizing
    const Q_m3s  = Q / 3600 / 1000;                          // m³/s
    const area   = Math.PI * Math.pow(D / 2, 2);             // m²
    const velocity = area > 0 ? Q_m3s / area : 0;            // m/s
    const holdingTubeLength = velocity * t;                  // m needed for given holding time

    const warnings = [];
    if (!compliant) warnings.push(`⚠️ Below legal minimum: 72°C / 15 sec. Current: ${T}°C / ${t} sec.`);
    if (logRed < 5) warnings.push(`Log reduction ${logRed.toFixed(2)} < 5 — insufficient pasteurization for ${pathogen.name}.`);
    if (velocity < 0.1) warnings.push("Very low flow velocity — risk of plug flow issues and temperature stratification.");
    if (velocity > 2.0) warnings.push("High velocity — check turbulent flow (Re > 2100) assumption is maintained.");

    setResult({
      mode: "htst", pathogen, D_process, t_min, logRed, killedPct, PE,
      compliant, velocity, holdingTubeLength, area, warnings,
    });
    toast({ title: "HTST Calculated", description: `Log reduction: ${logRed.toFixed(2)} | ${pathogen.name}` });
  }, [htst, pathogenData, toast]);

  const calculateDValue = useCallback(() => {
    const Dref = parseFloat(dval.dValue)      || 0;
    const z    = parseFloat(dval.zValue)      || 7;
    const Tref = parseFloat(dval.refTemp)     || 72;
    const Tp   = parseFloat(dval.processTemp) || 72;
    const tp   = parseFloat(dval.processTime) || 0.25; // min
    const N0   = parseFloat(dval.initialLoad) || 1e6;

    if (Dref <= 0 || z <= 0) { 
      toast({ variant: "destructive", title: "Error", description: "D-value and z-value must be > 0" }); 
      return; 
    }

    const D_Tp     = Dref * Math.pow(10, (Tref - Tp) / z);
    const logRed   = tp / D_Tp;
    const Nfinal   = N0 * Math.pow(10, -logRed);
    const killedPct = (1 - Nfinal / N0) * 100;

    // Time needed for 6 log reduction at process temp
    const t_6log = 6 * D_Tp;
    const t_12log = 12 * D_Tp;

    // Equivalent holding times at different temps
    const equivTemps = [65, 68, 70, 72, 75, 80, 85].map(T => ({
      temp: T,
      D: Dref * Math.pow(10, (Tref - T) / z),
      t6log: 6 * Dref * Math.pow(10, (Tref - T) / z),
    }));

    setResult({ mode: "dvalue", D_Tp, logRed, Nfinal, killedPct, t_6log, t_12log, equivTemps, N0, warnings: [] });
    toast({ title: "D-Value Calculated", description: `At ${Tp}°C: D=${D_Tp.toFixed(4)} min | ${logRed.toFixed(2)} log reduction` });
  }, [dval, toast]);

  return (
    <div className="space-y-4 w-full">
      <Alert className="bg-rose-50 border-rose-200">
        <Thermometer className="h-4 w-4 text-rose-600" />
        <AlertTitle className="text-sm font-bold">Pasteurization Validation Calculator</AlertTitle>
        <AlertDescription className="text-xs">
          HTST compliance, microbial log reduction, D-value & z-value analysis. Based on FDA PMO & FSSAI standards.
        </AlertDescription>
      </Alert>

      {/* Mode Selector */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { id: "htst",   label: "HTST Validation",    desc: "72°C / 15 sec compliance" },
          { id: "dvalue", label: "D-Value / Log Kill",  desc: "Any temp, any pathogen"    },
        ].map(m => (
          <button key={m.id} onClick={() => { setActiveMode(m.id); setResult(null); }}
            className={`p-3 rounded-xl border-2 text-left transition-all ${activeMode === m.id ? "border-rose-500 bg-rose-50" : "border-slate-200 bg-white hover:border-rose-200"}`}>
            <div className={`text-sm font-bold ${activeMode === m.id ? "text-rose-700" : "text-slate-700"}`}>{m.label}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{m.desc}</div>
          </button>
        ))}
      </div>

      {/* HTST MODE */}
      {activeMode === "htst" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-rose-100">
              <CardHeader className="p-3 pb-2 bg-rose-50 rounded-t-lg">
                <CardTitle className="text-xs font-bold text-rose-700 uppercase tracking-wider">🌡️ Process Parameters</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-slate-600">Pathogen (Design Organism)</Label>
                  <select value={htst.pathogen} onChange={e => setH("pathogen", e.target.value)}
                    className="w-full border rounded-md px-2 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-rose-400">
                    <option value="listeria">Listeria monocytogenes</option>
                    <option value="salmonella">Salmonella spp.</option>
                    <option value="e.coli">E. coli O157:H7</option>
                    <option value="tb">M. tuberculosis (TB)</option>
                    <option value="coxiella">Coxiella burnetii (Q-Fever)</option>
                  </select>
                </div>
                {[
                  { label: "Process Temperature", k: "targetTemp", suffix: "°C", help: "Legal min: 72°C for HTST" },
                  { label: "Holding Time",        k: "holdingTime", suffix: "sec", help: "Legal min: 15 sec" },
                ].map(f => (
                  <div key={f.k} className="space-y-1">
                    <Label className="text-xs font-semibold text-slate-600 flex justify-between">{f.label}<span className="font-normal text-muted-foreground">{f.suffix}</span></Label>
                    <Input type="number" inputMode="decimal" className="h-8 text-sm" value={htst[f.k as keyof typeof htst]} onChange={e => setH(f.k, e.target.value)} />
                    {f.help && <p className="text-[10px] text-muted-foreground">{f.help}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardHeader className="p-3 pb-2 bg-purple-50 rounded-t-lg">
                <CardTitle className="text-xs font-bold text-purple-700 uppercase tracking-wider">🔧 Holding Tube Sizing</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                {[
                  { label: "Flow Rate",          k: "flowRate",      suffix: "L/h",  help: "Milk throughput" },
                  { label: "Holding Tube ID",    k: "holdingTubeID", suffix: "mm",   help: "Internal diameter of holding tube" },
                ].map(f => (
                  <div key={f.k} className="space-y-1">
                    <Label className="text-xs font-semibold text-slate-600 flex justify-between">{f.label}<span className="font-normal text-muted-foreground">{f.suffix}</span></Label>
                    <Input type="number" inputMode="decimal" className="h-8 text-sm" value={htst[f.k as keyof typeof htst]} onChange={e => setH(f.k, e.target.value)} />
                    {f.help && <p className="text-[10px] text-muted-foreground">{f.help}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <Button onClick={calculateHTST} className="w-full h-11 bg-rose-600 hover:bg-rose-700 text-white font-bold">
            <Calculator className="w-4 h-4 mr-2" /> Validate Pasteurization
          </Button>
        </div>
      )}

      {/* D-VALUE MODE */}
      {activeMode === "dvalue" && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "D-value (at ref temp)", k: "dValue", suffix: "min", help: "Decimal reduction time" },
              { label: "z-value",               k: "zValue", suffix: "°C",  help: "Temp for 10× D change" },
              { label: "Reference Temp",        k: "refTemp", suffix: "°C" },
              { label: "Process Temp",          k: "processTemp", suffix: "°C" },
              { label: "Process Time",          k: "processTime", suffix: "min", help: "e.g. 15 sec = 0.25 min" },
              { label: "Initial Count (N₀)",    k: "initialLoad", suffix: "CFU/mL" },
            ].map(f => (
              <div key={f.k} className="space-y-1">
                <Label className="text-xs font-semibold text-slate-600 flex justify-between">{f.label}<span className="font-normal text-muted-foreground">{f.suffix}</span></Label>
                <Input type="number" inputMode="decimal" className="h-8 text-sm" value={dval[f.k as keyof typeof dval]} onChange={e => setD(f.k, e.target.value)} />
                {f.help && <p className="text-[10px] text-muted-foreground">{f.help}</p>}
              </div>
            ))}
          </div>
          <Button onClick={calculateDValue} className="w-full h-11 bg-purple-600 hover:bg-purple-700 text-white font-bold">
            <Calculator className="w-4 h-4 mr-2" /> Calculate Log Reduction
          </Button>
        </div>
      )}

      {/* RESULTS */}
      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-2">
          {result.warnings.length > 0 && (
            <Alert className="border-red-300 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-sm text-red-800">Compliance Issues</AlertTitle>
              <AlertDescription className="text-xs space-y-1">
                {result.warnings.map((w: string, i: number) => <div key={i}>{w}</div>)}
              </AlertDescription>
            </Alert>
          )}

          {result.mode === "htst" && (
            <>
              {/* Compliance Badge */}
              <div className={`rounded-xl p-4 text-center ${result.compliant ? "bg-green-600" : "bg-red-600"} text-white`}>
                <div className="text-2xl mb-1">{result.compliant ? "✅" : "❌"}</div>
                <div className="text-lg font-black">{result.compliant ? "HTST COMPLIANT" : "NOT COMPLIANT"}</div>
                <div className="text-xs opacity-80 mt-1">FSSAI / FDA PMO: 72°C / 15 sec minimum</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Log Reduction",      value: result.logRed.toFixed(2),       unit: "log",   color: result.logRed >= 5 ? "text-green-700" : "text-red-600" },
                  { label: "Kill %",             value: result.killedPct.toFixed(4),    unit: "%",     color: "text-blue-700" },
                  { label: "D-value at temp",    value: result.D_process.toFixed(4),    unit: "min",   color: "text-purple-700" },
                  { label: "Pasteurization Eq.", value: result.PE.toFixed(4),           unit: "min@72°C", color: "text-orange-700" },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-3 border text-center">
                    <div className="text-[10px] text-muted-foreground uppercase font-bold">{c.label}</div>
                    <div className={`text-xl font-black ${c.color}`}>{c.value}</div>
                    <div className="text-[10px] text-muted-foreground">{c.unit}</div>
                  </div>
                ))}
              </div>

              <Card>
                <CardHeader className="p-3 pb-2 bg-slate-50 border-b">
                  <CardTitle className="text-sm">🔧 Holding Tube</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Flow velocity</span><span className="font-bold">{result.velocity.toFixed(3)} m/s</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Min tube length needed</span><span className="font-bold text-indigo-700">{result.holdingTubeLength.toFixed(2)} m</span></div>
                  <div className="text-[10px] text-muted-foreground">For {htst.holdingTime} sec residence time at {(parseFloat(htst.flowRate)/3600/1000).toFixed(5)} m³/s through {htst.holdingTubeID} mm ID tube</div>
                </CardContent>
              </Card>
            </>
          )}

          {result.mode === "dvalue" && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: `D at ${dval.processTemp}°C`, value: result.D_Tp.toFixed(4),      unit: "min",     color: "text-purple-700" },
                  { label: "Log Reduction",              value: result.logRed.toFixed(2),     unit: "log",     color: result.logRed >= 5 ? "text-green-700" : "text-red-600" },
                  { label: "Final Count",                value: result.Nfinal < 1 ? "<1" : result.Nfinal.toExponential(2), unit: "CFU/mL", color: "text-blue-700" },
                  { label: "Kill %",                     value: result.killedPct.toFixed(4),  unit: "%",       color: "text-teal-700" },
                  { label: "Time for 6-log kill",        value: result.t_6log.toFixed(4),     unit: "min",     color: "text-orange-700" },
                  { label: "Time for 12-log kill",       value: result.t_12log.toFixed(4),    unit: "min",     color: "text-red-700" },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-3 border text-center">
                    <div className="text-[10px] text-muted-foreground uppercase font-bold">{c.label}</div>
                    <div className={`text-xl font-black ${c.color}`}>{c.value}</div>
                    <div className="text-[10px] text-muted-foreground">{c.unit}</div>
                  </div>
                ))}
              </div>

              {/* Equivalent time table */}
              <Card>
                <CardHeader className="p-3 pb-2 bg-slate-50 border-b">
                  <CardTitle className="text-sm">📋 Equivalent Times for 6-Log Kill (Different Temperatures)</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="p-2 text-left font-bold">Temp (°C)</th>
                          <th className="p-2 text-right font-bold">D-value (min)</th>
                          <th className="p-2 text-right font-bold">Time for 6-log (min)</th>
                          <th className="p-2 text-right font-bold">Time for 6-log (sec)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.equivTemps.map((row: any, i: number) => (
                          <tr key={i} className={`border-t ${row.temp === parseFloat(dval.processTemp) ? "bg-purple-50 font-bold" : ""}`}>
                            <td className="p-2">{row.temp}°C {row.temp === parseFloat(dval.processTemp) ? "← current" : ""}</td>
                            <td className="p-2 text-right">{row.D.toFixed(5)}</td>
                            <td className="p-2 text-right">{row.t6log.toFixed(4)}</td>
                            <td className="p-2 text-right font-bold text-purple-700">{(row.t6log * 60).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Formula box */}
          <div className="bg-slate-50 border rounded-lg p-3 text-xs font-mono text-slate-500 space-y-1">
            <div className="font-bold text-slate-700 mb-1">📐 Formulas Used:</div>
            <div>D_T = D_ref × 10^((T_ref − T) / z)</div>
            <div>Log Reduction = t(min) / D_T</div>
            <div>N_final = N₀ × 10^(−Log Reduction)</div>
          </div>
        </div>
      )}
    </div>
  );
}
// ════════════════════════════════════════════════════════════
// GHEE RECOVERY & EFFICIENCY CALCULATOR (UPGRADED)
// Simplified inputs · Collapsible advanced settings
// Optional costing · Actual vs Theoretical tracker
// ════════════════════════════════════════════════════════════

export function GheeRecoveryCalc() {
  const { toast } = useToast();
  const { validatePositive, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // ── Theoretical Inputs (Predictor) ──
  const [theo, setTheo] = useState({
    quantity:       "1000",   // kg raw input (butter/cream)
    fatPercent:     "82",     // % fat in input
    moisture:       "16",     // % moisture in input
    snf:            "2",      // % SNF (protein+lactose+ash)
    // Advanced
    fatRecovery:    "98.5",   // % fat recovery efficiency
    fuelRate:       "0.08",   // kg LPG per kg input
    gheeFatPurity:  "99.7",   // % fat in final ghee (FSSAI ≥99.5)
    // Costing
    gheePrice:      "550",    // ₹/kg selling price
    residuePrice:   "80",     // ₹/kg khurchan
    fuelPrice:      "55",     // ₹/kg LPG
    batches:        "1",
    operDays:       "26",
  });

  // ── Actual Inputs (Tracker) ──
  const [actual, setActual] = useState({
    butterUsed:     "1000",
    inputFat:       "82",
    inputMoisture:  "16",
    inputSnf:       "2",
    gheeObtained:   "",
  });

  const [theoResult, setTheoResult]     = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ══════════════════════════════════════════════════════════
  // THEORETICAL CALCULATION (Predictor)
  // ══════════════════════════════════════════════════════════
  const calculateTheo = useCallback(() => {
    const Q       = parseFloat(theo.quantity)      || 0;
    const Fat     = parseFloat(theo.fatPercent)     / 100;
    const Moist   = parseFloat(theo.moisture)       / 100;
    const SNF     = parseFloat(theo.snf)            / 100;
    const Eff     = Math.min(parseFloat(theo.fatRecovery) / 100, 0.999);
    const fuelKg  = parseFloat(theo.fuelRate)       || 0.08;
    const purity  = parseFloat(theo.gheeFatPurity)  / 100;
    const batches = parseFloat(theo.batches)        || 1;
    const days    = parseFloat(theo.operDays)       || 26;

    const gheePrice    = parseFloat(theo.gheePrice)    || 0;
    const residuePrice = parseFloat(theo.residuePrice) || 0;
    const fuelPrice    = parseFloat(theo.fuelPrice)    || 0;

    if (Q <= 0 || Fat <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया मात्रा और फैट% सही दर्ज करें।" });
      return;
    }

    // ── 1. Input Composition ──
    const totalFatKg   = Q * Fat;
    const totalMoistKg = Q * Moist;
    const totalSnfKg   = Q * SNF;

    // ── 2. Ghee Yield (Fat Balance Method) ──
    // Ghee = (Total Fat × Recovery Efficiency) / Ghee Fat Purity
    const recoveredFatKg = totalFatKg * Eff;
    const gheeYieldKg    = recoveredFatKg / purity;
    const yieldPct       = (gheeYieldKg / Q) * 100;

    // ── 3. Fat Loss ──
    const fatLossKg  = totalFatKg - recoveredFatKg;
    const fatLossPct = totalFatKg > 0 ? (fatLossKg / totalFatKg) * 100 : 0;

    // ── 4. Moisture Evaporation ──
    const moistureEvapKg = totalMoistKg;

    // ── 5. Ghee Residue (Khurchan) ──
    // Residue ≈ (SNF × 0.90) + (Fat Loss × 0.80)
    const residueKg = (totalSnfKg * 0.90) + (fatLossKg * 0.80);

    // ── 6. Mass Balance Check ──
    const balanceOut   = gheeYieldKg + residueKg + moistureEvapKg;
    const balanceError = Q > 0 ? Math.abs(balanceOut - Q) / Q * 100 : 0;

    // ── 7. Fuel ──
    const totalFuelKg   = Q * batches * fuelKg;
    const totalFuelCost = totalFuelKg * fuelPrice;

    // ── 8. Economics ──
    const gheeKgTotal    = gheeYieldKg * batches;
    const residueKgTotal = residueKg * batches;
    const gheeRevenue    = gheeKgTotal * gheePrice;
    const residueRevenue = residueKgTotal * residuePrice;
    const totalRevenue   = gheeRevenue + residueRevenue;
    const netAfterFuel   = totalRevenue - totalFuelCost;
    const costPerKgGhee  = gheeKgTotal > 0 ? totalFuelCost / gheeKgTotal : 0;

    // Monthly
    const monthlyGheeKg  = gheeYieldKg * batches * days;
    const monthlyRevenue = monthlyGheeKg * gheePrice + (residueKg * batches * days) * residuePrice;
    const monthlyFuel    = totalFuelCost * days;
    const monthlyNet     = monthlyRevenue - monthlyFuel;

    // ── 9. Milk Equivalent ──
    // L milk per kg ghee (assuming ~4% fat milk, butter at input Fat%)
    const milkLPerKgGhee = Fat > 0 ? 1 / (0.04 * Fat * Eff) * purity : 0;

    // ── 10. Warnings ──
    const warnings: string[] = [];
    if (fatLossPct > 2.5)  warnings.push(`फैट लॉस ${fatLossPct.toFixed(2)}% अधिक है। तापमान (110–115°C) और डिकैंटेशन जाँचें। (Fat loss ${fatLossPct.toFixed(2)}% is high — check clarifier temp.)`);
    if (residueKg > Q * 0.05) warnings.push(`रेज़िड्यू ${(residueKg/Q*100).toFixed(1)}% — अधिक SNF या ज़्यादा गर्मी। (Residue is ${(residueKg/Q*100).toFixed(1)}% of input.)`);
    if (balanceError > 3)  warnings.push(`मास बैलेंस एरर ${balanceError.toFixed(1)}% — फैट/SNF/नमी इनपुट सत्यापित करें। (Mass balance error > 3%.)`);
    if (Eff < 0.96)        warnings.push(`एफ़िशिएंसी ${(Eff*100).toFixed(1)}% इंडस्ट्री स्टैंडर्ड (98%) से कम है। (Efficiency below industry standard.)`);
    if (Fat * 100 < 30)    warnings.push(`इनपुट फैट ${(Fat*100).toFixed(1)}% बहुत कम है — क्रीम/बटर की क्वालिटी जाँचें। (Input fat very low.)`);

    setTheoResult({
      totalFatKg, totalMoistKg, totalSnfKg,
      recoveredFatKg, gheeYieldKg, yieldPct,
      fatLossKg, fatLossPct, moistureEvapKg, residueKg,
      balanceOut, balanceError,
      totalFuelKg, totalFuelCost, costPerKgGhee,
      gheeKgTotal, residueKgTotal,
      gheeRevenue, residueRevenue, totalRevenue, netAfterFuel,
      monthlyGheeKg, monthlyRevenue, monthlyFuel, monthlyNet,
      milkLPerKgGhee,
      warnings, Q, batches, days, Eff, purity,
    });

    toast({
      title: "🧮 गणना पूरी (Calculated)",
      description: `घी उत्पादन: ${gheeYieldKg.toFixed(1)} kg (${yieldPct.toFixed(2)}% yield)`,
    });
  }, [theo, toast]);

  // ══════════════════════════════════════════════════════════
  // ACTUAL CALCULATION (Tracker)
  // ══════════════════════════════════════════════════════════
  const calculateActual = useCallback(() => {
    const Q        = parseFloat(actual.butterUsed)   || 0;
    const gheeKg   = parseFloat(actual.gheeObtained) || 0;
    const Fat      = parseFloat(actual.inputFat)     / 100;
    const Moist    = parseFloat(actual.inputMoisture)/ 100;
    const SNF      = parseFloat(actual.inputSnf)     / 100;

    if (Q <= 0 || Fat <= 0 || gheeKg <= 0) {
      toast({ variant: "destructive", title: "त्रुटि", description: "कृपया सभी इनपुट सही भरें।" });
      return;
    }

    // Theoretical ideal (at 98.5% efficiency, 99.7% purity)
    const idealEff      = 0.985;
    const idealPurity   = 0.997;
    const totalFatKg    = Q * Fat;
    const idealGheeKg   = (totalFatKg * idealEff) / idealPurity;
    const idealYieldPct = (idealGheeKg / Q) * 100;

    // Actual metrics
    const actualYieldPct    = (gheeKg / Q) * 100;
    const recoveryEffPct    = idealGheeKg > 0 ? (gheeKg / idealGheeKg) * 100 : 0;

    // Implied actual fat recovery
    const impliedFatRecPct  = totalFatKg > 0 ? (gheeKg * idealPurity / totalFatKg) * 100 : 0;

    // Fat loss
    const actualRecoveredFat = gheeKg * idealPurity;
    const actualFatLossKg    = totalFatKg - actualRecoveredFat;
    const actualFatLossPct   = totalFatKg > 0 ? (actualFatLossKg / totalFatKg) * 100 : 0;

    // Residue estimate
    const totalSnfKg    = Q * SNF;
    const residueKg     = (totalSnfKg * 0.90) + (Math.max(0, actualFatLossKg) * 0.80);
    const moistureKg    = Q * Moist;

    // Efficiency grade
    let grade = "", gradeColor = "", gradeEmoji = "";
    if (recoveryEffPct >= 98) {
      grade = "Excellent (उत्कृष्ट)"; gradeColor = "text-green-700 bg-green-50 border-green-300"; gradeEmoji = "🏆";
    } else if (recoveryEffPct >= 95) {
      grade = "Good (अच्छा)"; gradeColor = "text-blue-700 bg-blue-50 border-blue-300"; gradeEmoji = "👍";
    } else if (recoveryEffPct >= 92) {
      grade = "Needs Improvement (सुधार ज़रूरी)"; gradeColor = "text-yellow-700 bg-yellow-50 border-yellow-300"; gradeEmoji = "⚠️";
    } else {
      grade = "Action Required (कार्रवाई ज़रूरी)"; gradeColor = "text-red-700 bg-red-50 border-red-300"; gradeEmoji = "🔴";
    }

    // Warnings
    const warnings: string[] = [];
    if (recoveryEffPct < 95) warnings.push(`रिकवरी ${recoveryEffPct.toFixed(1)}% — प्रोसेस तापमान, समय, और डिकैंटेशन की समीक्षा करें। (Recovery ${recoveryEffPct.toFixed(1)}% — review process.)`);
    if (actualFatLossPct > 3) warnings.push(`फैट लॉस ${actualFatLossPct.toFixed(1)}% — क्लैरिफायर और सेटलिंग प्रक्रिया जाँचें। (Fat loss ${actualFatLossPct.toFixed(1)}% — check clarifier.)`);
    if (gheeKg > idealGheeKg * 1.05) warnings.push(`वास्तविक घी > आदर्श — क्या इनपुट फैट% सही है? शायद नमी अधिक है। (Actual > ideal — check if moisture is high in ghee.)`);

    setActualResult({
      idealGheeKg, idealYieldPct,
      actualYieldPct, recoveryEffPct, impliedFatRecPct,
      actualFatLossKg, actualFatLossPct,
      totalFatKg, residueKg, moistureKg,
      grade, gradeColor, gradeEmoji,
      warnings, Q, gheeKg,
    });

    toast({
      title: "📋 ट्रैकर गणना पूरी",
      description: `रिकवरी: ${recoveryEffPct.toFixed(1)}% — ${grade}`,
    });
  }, [actual, toast]);

  // ══════════════════════════════════════════════════════════
  // RENDER
  // ══════════════════════════════════════════════════════════
  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200">
        <Target className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="text-yellow-800 font-bold">घी रिकवरी और एफ़िशिएंसी कैलकुलेटर</AlertTitle>
        <AlertDescription className="text-xs text-yellow-700">
          बटर/क्रीम → घी यील्ड, मास बैलेंस, फैट लॉस विश्लेषण, और प्रॉफिटेबिलिटी<br/>
          <span className="text-yellow-500">Butter/Cream → Ghee yield, mass balance, fat loss analysis & profitability</span>
        </AlertDescription>
      </Alert>

      {/* ── Tab Toggle ── */}
      <Tabs value={activeCalc} onValueChange={v => setActiveCalc(v as "theoretical" | "actual")}>
        <TabsList className="grid grid-cols-2 bg-yellow-100">
          <TabsTrigger value="theoretical" className="text-xs font-bold data-[state=active]:bg-yellow-600 data-[state=active]:text-white">
            🧮 Predictor (अनुमान)
          </TabsTrigger>
          <TabsTrigger value="actual" className="text-xs font-bold data-[state=active]:bg-amber-600 data-[state=active]:text-white">
            📋 Tracker (वास्तविक)
          </TabsTrigger>
        </TabsList>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 1: PREDICTOR (Theoretical Yield)               */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="theoretical" className="space-y-4 pt-3">

          {/* ── Core Inputs ── */}
          <Card className="border-yellow-100 bg-white">
            <CardHeader className="p-3 pb-2 bg-yellow-50 border-b border-yellow-100">
              <CardTitle className="text-xs font-bold text-yellow-700 uppercase">🧈 इनपुट कम्पोज़ीशन (Input Composition)</CardTitle>
            </CardHeader>
            <CardContent className="p-3 grid grid-cols-2 gap-3">
              <ValidatedInput
                label="बटर/क्रीम मात्रा (Qty)"
                value={theo.quantity}
                onChange={v => setT("quantity", v)}
                validation={validatePositive(theo.quantity, "Quantity")}
                unit="kg"
                colorScheme="yellow"
              />
              <ValidatedInput
                label="फैट % (Fat)"
                value={theo.fatPercent}
                onChange={v => setT("fatPercent", v)}
                validation={validateNumber(theo.fatPercent, 25, 99, "Fat")}
                unit="%"
                helpText="बटर: 78–84% · क्रीम: 35–65%"
                colorScheme="orange"
              />
              <ValidatedInput
                label="नमी % (Moisture)"
                value={theo.moisture}
                onChange={v => setT("moisture", v)}
                validation={validateNumber(theo.moisture, 0, 65, "Moisture")}
                unit="%"
                helpText="बटर: 14–18% · क्रीम: 30–60%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="SNF %"
                value={theo.snf}
                onChange={v => setT("snf", v)}
                validation={validateNumber(theo.snf, 0, 15, "SNF")}
                unit="%"
                helpText="प्रोटीन + लैक्टोज़ + राख"
                colorScheme="purple"
              />
            </CardContent>
          </Card>

          {/* ── Advanced Process Settings (Collapsible) ── */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full flex justify-between items-center p-3 bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <span className="text-xs font-bold text-slate-600 uppercase flex items-center gap-2">
                <Settings2 className="w-3.5 h-3.5" /> एडवांस्ड प्रोसेस सेटिंग्स (Advanced Settings)
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
            </button>
            {showAdvanced && (
              <div className="p-3 grid grid-cols-2 gap-3 bg-white border-t border-slate-100">
                <ValidatedInput
                  label="फैट रिकवरी (Fat Recovery)"
                  value={theo.fatRecovery}
                  onChange={v => setT("fatRecovery", v)}
                  validation={validateNumber(theo.fatRecovery, 85, 99.9, "Recovery")}
                  unit="%"
                  helpText="इंडस्ट्री: 97–99%"
                  colorScheme="green"
                />
                <ValidatedInput
                  label="ईंधन दर (Fuel Rate)"
                  value={theo.fuelRate}
                  onChange={v => setT("fuelRate", v)}
                  validation={validateNumber(theo.fuelRate, 0.01, 0.5, "Fuel rate")}
                  unit="kg/kg input"
                  helpText="LPG: ~0.05–0.12"
                  colorScheme="red"
                />
                <ValidatedInput
                  label="घी फैट शुद्धता (Ghee Purity)"
                  value={theo.gheeFatPurity}
                  onChange={v => setT("gheeFatPurity", v)}
                  validation={validateNumber(theo.gheeFatPurity, 99, 100, "Purity")}
                  unit="%"
                  helpText="FSSAI: ≥99.5%"
                  colorScheme="green"
                />
              </div>
            )}
          </div>

          {/* ── Optional Costing Toggle ── */}
          <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
            <div>
              <p className="text-xs font-bold text-green-700">💰 कॉस्टिंग और प्रॉफिटेबिलिटी (Costing)</p>
              <p className="text-[10px] text-green-500">ऑप्शनल — बिक्री मूल्य, ईंधन लागत, मासिक आय</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={enableCosting} onChange={() => setEnableCosting(!enableCosting)} className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>

          {enableCosting && (
            <Card className="border-green-100 bg-white">
              <CardHeader className="p-3 pb-2 bg-green-50 border-b border-green-100">
                <CardTitle className="text-xs font-bold text-green-700 uppercase">💰 प्राइसिंग और लागत</CardTitle>
              </CardHeader>
              <CardContent className="p-3 grid grid-cols-2 gap-3">
                <ValidatedInput
                  label="घी बिक्री मूल्य"
                  value={theo.gheePrice}
                  onChange={v => setT("gheePrice", v)}
                  validation={validatePositive(theo.gheePrice, "Ghee price")}
                  unit="₹/kg"
                  colorScheme="green"
                />
                <ValidatedInput
                  label="खुरचन मूल्य (Residue)"
                  value={theo.residuePrice}
                  onChange={v => setT("residuePrice", v)}
                  validation={{ isValid: true, severity: "info" }}
                  unit="₹/kg"
                  colorScheme="orange"
                />
                <ValidatedInput
                  label="ईंधन मूल्य (Fuel)"
                  value={theo.fuelPrice}
                  onChange={v => setT("fuelPrice", v)}
                  validation={{ isValid: true, severity: "info" }}
                  unit="₹/kg"
                  helpText="LPG ~₹50–60/kg"
                  colorScheme="red"
                />
                <ValidatedInput
                  label="बैच/दिन (Batches)"
                  value={theo.batches}
                  onChange={v => setT("batches", v)}
                  validation={validatePositive(theo.batches, "Batches")}
                  colorScheme="blue"
                />
                <div className="col-span-2">
                  <ValidatedInput
                    label="कार्य दिवस/माह (Working Days)"
                    value={theo.operDays}
                    onChange={v => setT("operDays", v)}
                    validation={{ isValid: true, severity: "info" }}
                    unit="days"
                    colorScheme="blue"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* ── Calculate Button ── */}
          <Button onClick={calculateTheo}
            className="w-full h-11 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold shadow-md">
            <Calculator className="w-4 h-4 mr-2" /> घी यील्ड गणना करें (Calculate)
          </Button>

          {/* ═══ PREDICTOR RESULTS ═══ */}
          {theoResult && (
            <div className="space-y-4 animate-in slide-in-from-bottom-2">

              {/* Warnings */}
              {theoResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-300">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-sm">प्रोसेस अलर्ट</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {theoResult.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}

              {/* Hero KPIs */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-yellow-600 text-white p-4 rounded-xl shadow-lg text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">घी उत्पादन</div>
                  <div className="text-2xl font-black">{theoResult.gheeYieldKg.toFixed(1)}</div>
                  <div className="text-xs opacity-70">kg / batch</div>
                </div>
                <div className="bg-green-700 text-white p-4 rounded-xl shadow-lg text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">यील्ड %</div>
                  <div className="text-2xl font-black">{theoResult.yieldPct.toFixed(2)}</div>
                  <div className="text-xs opacity-70">% w/w</div>
                </div>
                <div className="bg-white border-2 border-yellow-200 p-4 rounded-xl text-center">
                  <div className="text-[10px] text-yellow-600 font-bold uppercase">दूध → 1 kg घी</div>
                  <div className="text-2xl font-black text-yellow-800">{theoResult.milkLPerKgGhee.toFixed(1)}</div>
                  <div className="text-xs text-slate-400">L milk equiv.</div>
                </div>
              </div>

              {/* Mass Balance */}
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="p-3 pb-1 border-b border-amber-100">
                  <CardTitle className="text-sm text-amber-800">⚖️ मास बैलेंस (Mass Balance)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-0">
                  <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">इनपुट ({theo.quantity} kg)</div>
                  {[
                    { label: "फैट (Fat)", value: theoResult.totalFatKg.toFixed(2), pct: parseFloat(theo.fatPercent), color: "bg-yellow-400" },
                    { label: "नमी (Moisture)", value: theoResult.totalMoistKg.toFixed(2), pct: parseFloat(theo.moisture), color: "bg-blue-300" },
                    { label: "SNF", value: theoResult.totalSnfKg.toFixed(2), pct: parseFloat(theo.snf), color: "bg-slate-300" },
                  ].map((r: any, i: number) => (
                    <div key={i} className="flex items-center gap-2 mb-1">
                      <div className={`h-2 rounded-full ${r.color}`} style={{ width: `${Math.min(r.pct * 1.5, 100)}%`, minWidth: "4px" }} />
                      <span className="text-xs text-slate-600 w-20">{r.label}</span>
                      <span className="text-xs font-bold">{r.value} kg ({r.pct}%)</span>
                    </div>
                  ))}

                  <div className="border-t border-amber-200 my-3" />

                  <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">आउटपुट (Output)</div>
                  {[
                    { label: "🧈 घी (Ghee)", value: theoResult.gheeYieldKg.toFixed(2), unit: "kg", cls: "text-yellow-700 font-black text-base" },
                    { label: "🫙 खुरचन (Residue)", value: theoResult.residueKg.toFixed(2), unit: "kg", cls: "text-orange-700 font-bold" },
                    { label: "💧 नमी वाष्पीकरण", value: theoResult.moistureEvapKg.toFixed(2), unit: "kg", cls: "text-blue-600" },
                    { label: "🔴 फैट लॉस", value: theoResult.fatLossKg.toFixed(3), unit: "kg", cls: "text-red-600 font-bold" },
                  ].map((r: any, i: number) => (
                    <div key={i} className="flex justify-between py-1">
                      <span className="text-slate-600 text-sm">{r.label}</span>
                      <span className={`text-sm ${r.cls}`}>{r.value} {r.unit}</span>
                    </div>
                  ))}

                  <div className={`mt-2 p-2 rounded text-xs font-bold text-center ${theoResult.balanceError < 3 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {theoResult.balanceError < 3
                      ? `✅ मास बैलेंस OK (एरर: ${theoResult.balanceError.toFixed(2)}%)`
                      : `⚠️ बैलेंस एरर ${theoResult.balanceError.toFixed(2)}% — इनपुट जाँचें`}
                  </div>
                </CardContent>
              </Card>

              {/* Fat Loss Detail */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                  <div className="text-[10px] text-red-500 font-bold uppercase">फैट लॉस</div>
                  <div className="text-2xl font-black text-red-700">{theoResult.fatLossKg.toFixed(2)} kg</div>
                  <div className="text-xs text-red-400">{theoResult.fatLossPct.toFixed(2)}% of input fat</div>
                </div>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 text-center">
                  <div className="text-[10px] text-orange-600 font-bold uppercase">खुरचन (Residue)</div>
                  <div className="text-2xl font-black text-orange-700">{theoResult.residueKg.toFixed(1)} kg</div>
                  <div className="text-xs text-orange-400">{(theoResult.residueKg / theoResult.Q * 100).toFixed(1)}% of input</div>
                </div>
              </div>

              {/* FSSAI Standards Quick Ref */}
              <Card className="bg-slate-50 border-slate-200">
                <CardHeader className="p-3 pb-1 border-b">
                  <CardTitle className="text-xs font-bold uppercase text-slate-600">📜 FSSAI Ghee Standards (IS 3508)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-1">
                  {[
                    { label: "Premium / Export", ffa: "≤0.3%", moist: "≤0.1%", colour: "Light golden" },
                    { label: "Standard (FSSAI)", ffa: "≤0.5%", moist: "≤0.2%", colour: "Golden" },
                    { label: "Table Grade", ffa: "≤1.0%", moist: "≤0.3%", colour: "Deep yellow" },
                    { label: "Industrial", ffa: "≤2.0%", moist: "≤0.5%", colour: "Any" },
                  ].map((g: any, i: number) => (
                    <div key={i} className="flex justify-between text-xs py-0.5">
                      <span className="font-semibold text-slate-700">{g.label}</span>
                      <div className="flex gap-3 text-slate-500">
                        <span>FFA {g.ffa}</span>
                        <span>Moist {g.moist}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Formula Reference */}
              <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
                <div className="font-bold text-slate-600 text-xs mb-1">📐 सूत्र (Formulas — Fat Balance Method):</div>
                <div>TotalFat = Q × Fat% = {theoResult.totalFatKg.toFixed(2)} kg</div>
                <div>RecoveredFat = TotalFat × Eff({(theoResult.Eff*100).toFixed(2)}%) = {theoResult.recoveredFatKg.toFixed(2)} kg</div>
                <div>GheeKg = RecoveredFat / {(theoResult.purity*100).toFixed(1)}% = {theoResult.gheeYieldKg.toFixed(2)} kg</div>
                <div>Residue ≈ (SNF × 0.90) + (FatLoss × 0.80) = {theoResult.residueKg.toFixed(2)} kg</div>
              </div>

              {/* ── OPTIONAL ECONOMICS ── */}
              {enableCosting && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-yellow-600 text-white p-4 rounded-xl text-center shadow-lg">
                      <div className="text-[10px] uppercase opacity-80 font-bold">घी रेवेन्यू</div>
                      <div className="text-2xl font-black">₹{theoResult.gheeRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                      <div className="text-xs opacity-70">{theoResult.gheeKgTotal.toFixed(1)} kg × ₹{theo.gheePrice}</div>
                    </div>
                    <div className="bg-orange-500 text-white p-4 rounded-xl text-center shadow-lg">
                      <div className="text-[10px] uppercase opacity-80 font-bold">खुरचन रेवेन्यू</div>
                      <div className="text-2xl font-black">₹{theoResult.residueRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                      <div className="text-xs opacity-70">{theoResult.residueKgTotal.toFixed(1)} kg × ₹{theo.residuePrice}</div>
                    </div>
                  </div>

                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none">
                    <CardHeader className="p-3 pb-1">
                      <CardTitle className="text-xs text-slate-300 font-bold uppercase">
                        📊 रेवेन्यू समरी ({theoResult.batches} batch{theoResult.batches > 1 ? "es" : ""})
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-2 text-sm">
                      {[
                        { label: "घी रेवेन्यू", value: `+₹${theoResult.gheeRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, color: "text-yellow-300" },
                        { label: "खुरचन रेवेन्यू", value: `+₹${theoResult.residueRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, color: "text-orange-300" },
                        { label: "ईंधन लागत", value: `-₹${theoResult.totalFuelCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, color: "text-red-400" },
                        { label: "नेट (ईंधन बाद)", value: `₹${theoResult.netAfterFuel.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, color: "text-green-300 font-black text-base" },
                      ].map((r: any, i: number) => (
                        <div key={i} className={`flex justify-between ${i === 3 ? "border-t border-slate-700 pt-2" : ""}`}>
                          <span className="text-slate-400">{r.label}</span>
                          <span className={`font-bold ${r.color}`}>{r.value}</span>
                        </div>
                      ))}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-slate-700 rounded-lg p-2 text-center">
                          <div className="text-[9px] text-slate-400 font-bold">ईंधन लागत/kg घी</div>
                          <div className="font-black text-white">₹{theoResult.costPerKgGhee.toFixed(2)}</div>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-2 text-center">
                          <div className="text-[9px] text-slate-400 font-bold">Monthly Net</div>
                          <div className="font-black text-green-300">₹{theoResult.monthlyNet.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader className="p-3 pb-1 border-b border-green-100">
                      <CardTitle className="text-sm text-green-800">📅 मासिक अनुमान ({theo.operDays} दिन)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-2 text-sm">
                      {[
                        { label: "मासिक घी उत्पादन", value: `${theoResult.monthlyGheeKg.toFixed(0)} kg` },
                        { label: "मासिक रेवेन्यू", value: `₹${theoResult.monthlyRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
                        { label: "मासिक ईंधन लागत", value: `₹${theoResult.monthlyFuel.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
                        { label: "मासिक नेट प्रॉफ़िट", value: `₹${theoResult.monthlyNet.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
                      ].map((r: any, i: number) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-slate-500">{r.label}</span>
                          <span className="font-bold text-green-800">{r.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}
        </TabsContent>

        {/* ═══════════════════════════════════════════════════ */}
        {/* TAB 2: TRACKER (Actual vs Theoretical)              */}
        {/* ═══════════════════════════════════════════════════ */}
        <TabsContent value="actual" className="space-y-4 pt-3">

          {/* Tracker Inputs */}
          <Card className="border-amber-100 bg-white">
            <CardHeader className="p-3 pb-2 bg-amber-50 border-b border-amber-100">
              <CardTitle className="text-xs font-bold text-amber-700 uppercase">📋 वास्तविक बैच डेटा (Actual Batch Data)</CardTitle>
            </CardHeader>
            <CardContent className="p-3 grid grid-cols-2 gap-3">
              <ValidatedInput
                label="बटर/क्रीम इस्तेमाल"
                value={actual.butterUsed}
                onChange={v => setA("butterUsed", v)}
                validation={validatePositive(actual.butterUsed, "Butter used")}
                unit="kg"
                colorScheme="yellow"
              />
              <ValidatedInput
                label="इनपुट फैट %"
                value={actual.inputFat}
                onChange={v => setA("inputFat", v)}
                validation={validateNumber(actual.inputFat, 25, 99, "Fat")}
                unit="%"
                colorScheme="orange"
              />
              <ValidatedInput
                label="इनपुट नमी %"
                value={actual.inputMoisture}
                onChange={v => setA("inputMoisture", v)}
                validation={validateNumber(actual.inputMoisture, 0, 65, "Moisture")}
                unit="%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="इनपुट SNF %"
                value={actual.inputSnf}
                onChange={v => setA("inputSnf", v)}
                validation={validateNumber(actual.inputSnf, 0, 15, "SNF")}
                unit="%"
                colorScheme="purple"
              />
              <div className="col-span-2">
                <ValidatedInput
                  label="🧈 वास्तविक घी प्राप्त (Actual Ghee Obtained)"
                  value={actual.gheeObtained}
                  onChange={v => setA("gheeObtained", v)}
                  validation={validatePositive(actual.gheeObtained, "Ghee obtained")}
                  unit="kg"
                  colorScheme="green"
                />
              </div>
            </CardContent>
          </Card>

          {/* Tracker Calculate Button */}
          <Button onClick={calculateActual}
            className="w-full h-11 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold shadow-md">
            <Calculator className="w-4 h-4 mr-2" /> ट्रैकर गणना करें (Analyze)
          </Button>

          {/* ═══ TRACKER RESULTS ═══ */}
          {actualResult && (
            <div className="space-y-4 animate-in slide-in-from-bottom-2">

              {/* Warnings */}
              {actualResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-300">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-sm">प्रोसेस अलर्ट</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {actualResult.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}

              {/* Efficiency Grade Badge */}
              <div className={`p-4 rounded-xl border-2 text-center ${actualResult.gradeColor}`}>
                <div className="text-3xl mb-1">{actualResult.gradeEmoji}</div>
                <div className="text-lg font-black">{actualResult.grade}</div>
                <div className="text-sm font-bold mt-1">रिकवरी: {actualResult.recoveryEffPct.toFixed(1)}%</div>
              </div>

              {/* Comparison Table */}
              <Card className="bg-white border-amber-200">
                <CardHeader className="p-3 pb-1 border-b border-amber-100">
                  <CardTitle className="text-sm text-amber-800">📊 आदर्श vs वास्तविक (Ideal vs Actual)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-0">
                  <div className="grid grid-cols-3 gap-2 text-xs font-bold text-slate-500 uppercase mb-2">
                    <div>मीट्रिक</div>
                    <div className="text-center">आदर्श (Ideal)</div>
                    <div className="text-center">वास्तविक (Actual)</div>
                  </div>
                  {[
                    { metric: "घी (kg)", ideal: actualResult.idealGheeKg.toFixed(1), actual: actualResult.gheeKg.toFixed(1), ok: actualResult.recoveryEffPct >= 95 },
                    { metric: "यील्ड %", ideal: actualResult.idealYieldPct.toFixed(2) + "%", actual: actualResult.actualYieldPct.toFixed(2) + "%", ok: actualResult.recoveryEffPct >= 95 },
                    { metric: "फैट लॉस %", ideal: "1.5%", actual: actualResult.actualFatLossPct.toFixed(2) + "%", ok: actualResult.actualFatLossPct <= 2.5 },
                  ].map((r: any, i: number) => (
                    <div key={i} className="grid grid-cols-3 gap-2 py-2 border-b border-slate-100 text-sm">
                      <div className="font-semibold text-slate-700">{r.metric}</div>
                      <div className="text-center text-blue-600 font-bold">{r.ideal}</div>
                      <div className={`text-center font-bold ${r.ok ? "text-green-600" : "text-red-600"}`}>{r.actual}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                  <div className="text-[10px] text-red-500 font-bold uppercase">फैट लॉस</div>
                  <div className="text-2xl font-black text-red-700">{actualResult.actualFatLossKg.toFixed(2)} kg</div>
                  <div className="text-xs text-red-400">{actualResult.actualFatLossPct.toFixed(2)}%</div>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                  <div className="text-[10px] text-green-500 font-bold uppercase">फैट रिकवरी</div>
                  <div className="text-2xl font-black text-green-700">{actualResult.impliedFatRecPct.toFixed(1)}%</div>
                  <div className="text-xs text-green-400">implied recovery</div>
                </div>
              </div>

              {/* Efficiency Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-semibold">एफ़िशिएंसी बार</span>
                  <span className={`font-bold ${actualResult.recoveryEffPct >= 95 ? "text-green-600" : "text-red-600"}`}>
                    {actualResult.recoveryEffPct.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      actualResult.recoveryEffPct >= 98 ? "bg-green-500" :
                      actualResult.recoveryEffPct >= 95 ? "bg-blue-500" :
                      actualResult.recoveryEffPct >= 92 ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(actualResult.recoveryEffPct, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400">
                  <span>0%</span>
                  <span className="text-red-400">92%</span>
                  <span className="text-yellow-500">95%</span>
                  <span className="text-green-500">98%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}


// ════════════════════════════════════════════════════════════
// ADVANCED CHEESE YIELD CALCULATOR (VAN SLYKE FORMULA)
// ════════════════════════════════════════════════════════════

export function CheeseYieldCalc() {
  const { toast } = useToast();
  const { validatePositive, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // ── Theoretical Inputs (Predictor) ──
  const [theo, setTheo] = useState({
    milkQty:          "1000",   // kg raw milk
    fat:              "4.0",    // % milk fat
    protein:          "3.3",    // % milk protein
    targetMoisture:   "37",     // % target cheese moisture
    // Advanced
    caseinRatio:      "78",     // % casein in total protein (typical 76-80)
    fatRetention:     "93",     // % fat retention in curd (typical 90-94)
    caseinRetention:  "96",     // % casein retention in curd (typical 94-97)
    saltPct:          "1.8",    // % salt in final cheese
    solidsFactor:     "1.09",   // solids factor (typically 1.09)
    // Costing
    milkPrice:        "45",     // ₹/kg raw milk
    cheesePrice:      "450",    // ₹/kg selling price of cheese
    wheyPrice:        "2",      // ₹/kg whey selling price
    batches:          "1",
    operDays:         "26",
  });

  // ── Actual Inputs (Tracker) ──
  const [actual, setActual] = useState({
    milkQty:          "1000",
    fat:              "4.0",
    protein:          "3.3",
    targetMoisture:   "37",
    cheeseObtained:   "",
  });

  const [theoResult, setTheoResult]     = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ══════════════════════════════════════════════════════════
  // THEORETICAL CALCULATION (Predictor)
  // ══════════════════════════════════════════════════════════
  const calculateTheo = useCallback(() => {
    const M   = parseFloat(theo.milkQty)          || 0;
    const F   = parseFloat(theo.fat)         / 100;
    const P   = parseFloat(theo.protein)     / 100;
    const W   = parseFloat(theo.targetMoisture) / 100;
    const CR  = parseFloat(theo.caseinRatio) / 100;
    const RF  = parseFloat(theo.fatRetention)   / 100;
    const RC  = parseFloat(theo.caseinRetention)/ 100;
    const S   = parseFloat(theo.saltPct)    / 100;
    const SF  = parseFloat(theo.solidsFactor)  || 1.09;
    const bat = parseFloat(theo.batches) || 1;
    const days = parseFloat(theo.operDays) || 26;

    if (M <= 0 || F <= 0 || P <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया दूध की मात्रा, फैट% और प्रोटीन% सही दर्ज करें।" });
      return;
    }

    // ── VAN SLYKE FORMULA ──
    const casein        = P * CR;                           // decimal
    const recoveredFat  = M * F * RF;                       // kg fat in curd
    const recoveredCas  = M * casein * RC;                  // kg casein in curd
    const otherSolids   = (recoveredFat + recoveredCas) * (SF - 1); // salt, whey proteins, etc.
    const totalSolids   = recoveredFat + recoveredCas + otherSolids;

    const cheeseKg      = totalSolids / (1 - W);            // Van Slyke yield kg per batch
    const yieldPct      = (cheeseKg / M) * 100;

    // Whey details
    const wheyKg        = M - cheeseKg;
    const wheyFatKg     = M * F * (1 - RF);                 // fat lost to whey
    const wheyProteinKg = M * P * (1 - RC);

    // Cheese composition estimate
    const cheeseWaterKg    = cheeseKg * W;
    const cheeseFatKg      = recoveredFat;
    const cheeseFatDM      = cheeseKg > 0 ? (cheeseFatKg / (cheeseKg - cheeseWaterKg)) * 100 : 0;
    const cheeseSaltKg     = cheeseKg * S;

    // Milk equivalent
    const milkPerKgCheese  = yieldPct > 0 ? 100 / yieldPct : 0;

    // Batch and economics
    const cheeseKgTotal   = cheeseKg * bat;
    const wheyKgTotal     = wheyKg * bat;
    const milkCost        = M * bat * (parseFloat(theo.milkPrice) || 0);
    const cheeseRevenue   = cheeseKgTotal * (parseFloat(theo.cheesePrice) || 0);
    const wheyRevenue     = wheyKgTotal * (parseFloat(theo.wheyPrice) || 0);
    const totalRevenue    = cheeseRevenue + wheyRevenue;
    const grossProfit     = totalRevenue - milkCost;
    const gpm             = milkCost > 0 ? (grossProfit / milkCost) * 100 : 0;

    // Monthly projections
    const monthlyCheeseKg = cheeseKgTotal * days;
    const monthlyRevenue  = totalRevenue * days;
    const monthlyCost     = milkCost * days;
    const monthlyProfit   = grossProfit * days;

    // Sensitivity: +0.1% fat -> change in yield
    const dYield_dF = RF * SF / (1 - W) * 0.001 * 100; // kg per +0.1% fat per 100kg milk

    const warnings: string[] = [];
    if (W > 0.55)         warnings.push(`नमी ${(W*100).toFixed(0)}% अधिक है - गुणवत्ता और सेल्फ-लाइफ प्रभावित हो सकती है। (Moisture ${(W*100).toFixed(0)}% is high — check pressing.)`);
    if (RF < 0.88)        warnings.push(`फैट रिटेंशन ${(RF*100).toFixed(0)}% कम है - कर्ड काटने और पकाने का तापमान जांचें। (Fat retention ${(RF*100).toFixed(0)}% is low.)`);
    if (yieldPct < 8)     warnings.push(`यील्ड ${yieldPct.toFixed(1)}% कम लग रही है - कृपया दूध की संरचना जांचें। (Yield seems low.)`);
    if (wheyFatKg > (M * F * 0.15)) warnings.push(`व्हे (whey) में वसा की कमी अधिक है - कर्ड की कटाई की सटीकता सुधारें। (High fat loss to whey.)`);

    setTheoResult({
      cheeseKg, yieldPct, wheyKg,
      recoveredFat, recoveredCas, otherSolids, totalSolids,
      cheeseWaterKg, cheeseFatKg, cheeseFatDM, cheeseSaltKg,
      wheyFatKg, wheyProteinKg,
      milkPerKgCheese, dYield_dF,
      milkCost, cheeseRevenue, wheyRevenue, totalRevenue, grossProfit, gpm,
      monthlyCheeseKg, monthlyRevenue, monthlyCost, monthlyProfit,
      warnings, M, bat, days
    });

    toast({
      title: "🧮 गणना पूरी (Calculated)",
      description: `चीज उत्पादन: ${cheeseKg.toFixed(1)} kg (${yieldPct.toFixed(2)}% yield)`,
    });
  }, [theo, toast]);

  // ══════════════════════════════════════════════════════════
  // ACTUAL CALCULATION (Tracker)
  // ══════════════════════════════════════════════════════════
  const calculateActual = useCallback(() => {
    const M            = parseFloat(actual.milkQty)          || 0;
    const F            = parseFloat(actual.fat)         / 100;
    const P            = parseFloat(actual.protein)     / 100;
    const W            = parseFloat(actual.targetMoisture) / 100;
    const cheeseObtained = parseFloat(actual.cheeseObtained) || 0;

    if (M <= 0 || F <= 0 || P <= 0 || cheeseObtained <= 0) {
      toast({ variant: "destructive", title: "त्रुटि", description: "कृपया सभी इनपुट सही भरें।" });
      return;
    }

    // Theoretical ideal (at typical standards: CR=0.78, RF=0.93, RC=0.96, SF=1.09)
    const idealCR = 0.78;
    const idealRF = 0.93;
    const idealRC = 0.96;
    const idealSF = 1.09;
    
    const casein        = P * idealCR;
    const recoveredFat  = M * F * idealRF;
    const recoveredCas  = M * casein * idealRC;
    const otherSolids   = (recoveredFat + recoveredCas) * (idealSF - 1);
    const totalSolids   = recoveredFat + recoveredCas + otherSolids;
    const idealCheeseKg = totalSolids / (1 - W);
    const idealYieldPct = (idealCheeseKg / M) * 100;

    // Actual metrics
    const actualYieldPct = (cheeseObtained / M) * 100;
    const recoveryEffPct = idealCheeseKg > 0 ? (cheeseObtained / idealCheeseKg) * 100 : 0;
    const deviationKg    = cheeseObtained - idealCheeseKg;
    const deviationPct   = idealCheeseKg > 0 ? (deviationKg / idealCheeseKg) * 100 : 0;

    // Efficiency grade
    let grade = "", gradeColor = "", gradeEmoji = "";
    if (recoveryEffPct >= 98) {
      grade = "Excellent (उत्कृष्ट)"; gradeColor = "text-green-700 bg-green-50 border-green-300"; gradeEmoji = "🏆";
    } else if (recoveryEffPct >= 94) {
      grade = "Good (अच्छा)"; gradeColor = "text-blue-700 bg-blue-50 border-blue-300"; gradeEmoji = "👍";
    } else if (recoveryEffPct >= 88) {
      grade = "Needs Improvement (सुधार ज़रूरी)"; gradeColor = "text-yellow-700 bg-yellow-50 border-yellow-300"; gradeEmoji = "⚠️";
    } else {
      grade = "Action Required (कार्रवाई ज़रूरी)"; gradeColor = "text-red-700 bg-red-50 border-red-300"; gradeEmoji = "🔴";
    }

    const warnings: string[] = [];
    if (recoveryEffPct < 94) warnings.push(`रिकवरी ${recoveryEffPct.toFixed(1)}% काफी कम है। कटिंग, पकाने या कर्ड हैंडलिंग में होने वाले नुकसान की जांच करें।`);
    if (deviationPct > 5) warnings.push(`वास्तविक यील्ड आदर्श यील्ड से 5% से अधिक है। चीज में अतिरिक्त नमी या गलत फैट% की जांच करें।`);

    setActualResult({
      idealCheeseKg, idealYieldPct,
      actualYieldPct, recoveryEffPct, deviationKg, deviationPct,
      grade, gradeColor, gradeEmoji,
      warnings, M, cheeseObtained
    });

    toast({
      title: "📋 ट्रैकर गणना पूरी",
      description: `रिकवरी: ${recoveryEffPct.toFixed(1)}% — ${grade}`,
    });
  }, [actual, toast]);

  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
        <Target className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-800 font-bold">चीज यील्ड (Van Slyke) और दक्षता ट्रैकर</AlertTitle>
        <AlertDescription className="text-xs text-orange-700">
          वैन स्लीक फॉर्मूला आधारित चीज यील्ड अनुमान, बाइ-प्रोडक्ट व्हे रिकवरी, आर्थिक विश्लेषण और दक्षता ट्रैकिंग।<br/>
          <span className="text-orange-500">Van Slyke formula-based Cheese yield prediction, whey recovery, economics & efficiency tracking.</span>
        </AlertDescription>
      </Alert>

      {/* ── Tab Toggle ── */}
      <Tabs value={activeCalc} onValueChange={v => setActiveCalc(v as "theoretical" | "actual")}>
        <TabsList className="grid grid-cols-2 bg-orange-100">
          <TabsTrigger value="theoretical" className="text-xs font-bold data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            🧮 Predictor (अनुमान)
          </TabsTrigger>
          <TabsTrigger value="actual" className="text-xs font-bold data-[state=active]:bg-amber-600 data-[state=active]:text-white">
            📋 Tracker (वास्तविक)
          </TabsTrigger>
        </TabsList>

        {/* ══════════════════════════════════════════════════════════
            TAB 1: THEORETICAL PREDICTOR
            ══════════════════════════════════════════════════════════ */}
        <TabsContent value="theoretical" className="space-y-4 pt-3">
          {/* Core Inputs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ValidatedInput
              label="दूध की मात्रा (Milk Qty)"
              value={theo.milkQty}
              onChange={v => setT("milkQty", v)}
              validation={validatePositive(theo.milkQty, "Quantity")}
              unit="kg"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वसा प्रतिशत (Milk Fat %)"
              value={theo.fat}
              onChange={v => setT("fat", v)}
              validation={validateNumber(theo.fat, 0.5, 15, "Fat")}
              unit="%"
              colorScheme="orange"
            />
            <ValidatedInput
              label="प्रोटीन प्रतिशत (Protein %)"
              value={theo.protein}
              onChange={v => setT("protein", v)}
              validation={validateNumber(theo.protein, 1, 10, "Protein")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="टारगेट नमी % (Target Moisture)"
              value={theo.targetMoisture}
              onChange={v => setT("targetMoisture", v)}
              validation={validateNumber(theo.targetMoisture, 15, 80, "Target Moisture")}
              unit="%"
              colorScheme="orange"
            />
          </div>

          {/* Advanced Drawer Toggle */}
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex justify-between items-center text-xs font-semibold py-2 px-3 border border-orange-100 hover:bg-orange-50/50 rounded-lg"
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <Settings2 className="w-3.5 h-3.5" /> एडवांस्ड प्रोसेस सेटिंग्स (Advanced Settings)
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
          </Button>

          {showAdvanced && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <ValidatedInput
                label="केसीन/प्रोटीन % (Casein Ratio)"
                value={theo.caseinRatio}
                onChange={v => setT("caseinRatio", v)}
                validation={validateNumber(theo.caseinRatio, 60, 90, "Casein ratio")}
                unit="%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="फैट रिटेंशन (Fat Ret %)"
                value={theo.fatRetention}
                onChange={v => setT("fatRetention", v)}
                validation={validateNumber(theo.fatRetention, 50, 99.9, "Fat retention")}
                unit="%"
                colorScheme="orange"
              />
              <ValidatedInput
                label="केसीन रिटेंशन (Casein Ret %)"
                value={theo.caseinRetention}
                onChange={v => setT("caseinRetention", v)}
                validation={validateNumber(theo.caseinRetention, 50, 99.9, "Casein retention")}
                unit="%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="नमक % (Salt in Cheese %)"
                value={theo.saltPct}
                onChange={v => setT("saltPct", v)}
                validation={validateNumber(theo.saltPct, 0, 10, "Salt %")}
                unit="%"
                colorScheme="orange"
              />
              <ValidatedInput
                label="सॉलिड फैक्टर (Solids Factor)"
                value={theo.solidsFactor}
                onChange={v => setT("solidsFactor", v)}
                validation={validateNumber(theo.solidsFactor, 0.8, 1.5, "Solids Factor")}
                unit="x"
                colorScheme="orange"
              />
            </div>
          )}

          {/* Costing Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox id="cheese-costing" checked={enableCosting} onCheckedChange={(c) => setEnableCosting(!!c)} />
            <Label htmlFor="cheese-costing" className="text-xs font-semibold cursor-pointer text-slate-700 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-green-600" /> कॉस्टिंग और प्रॉफिटेबिलिटी शामिल करें (Enable Costing & Profitability)
            </Label>
          </div>

          {enableCosting && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3 bg-green-50/30 rounded-xl border border-green-100">
              <ValidatedInput
                label="दूध का मूल्य (Milk Price)"
                value={theo.milkPrice}
                onChange={v => setT("milkPrice", v)}
                validation={validatePositive(theo.milkPrice, "Milk price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="चीज का मूल्य (Cheese Price)"
                value={theo.cheesePrice}
                onChange={v => setT("cheesePrice", v)}
                validation={validatePositive(theo.cheesePrice, "Cheese price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="व्हे का मूल्य (Whey Price)"
                value={theo.wheyPrice}
                onChange={v => setT("wheyPrice", v)}
                validation={validatePositive(theo.wheyPrice, "Whey price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="बैचेस (Batches)"
                value={theo.batches}
                onChange={v => setT("batches", v)}
                validation={validatePositive(theo.batches, "Batches")}
                unit="qty"
                colorScheme="blue"
              />
              <ValidatedInput
                label="कार्य दिवस (Operating Days)"
                value={theo.operDays}
                onChange={v => setT("operDays", v)}
                validation={validatePositive(theo.operDays, "Days")}
                unit="days"
                colorScheme="blue"
              />
            </div>
          )}

          <Button onClick={calculateTheo} className="w-full h-11 bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-md">
            🧮 यील्ड और मास बैलेंस गणना करें (Calculate Yield & Mass Balance)
          </Button>

          {/* Results Display */}
          {theoResult && (
            <div className="space-y-4">
              {/* KPIs */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-orange-600 text-white p-3.5 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">चीज उत्पादन (Cheese Yield)</div>
                  <div className="text-xl font-extrabold">{theoResult.cheeseKg.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">प्रति बैच / Per batch</div>
                </div>
                <div className="bg-green-600 text-white p-3.5 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">यील्ड प्रतिशत (Yield %)</div>
                  <div className="text-xl font-extrabold">{theoResult.yieldPct.toFixed(2)}%</div>
                  <div className="text-[9px] opacity-75">भार के अनुसार / w/w basis</div>
                </div>
                <div className="bg-blue-600 text-white p-3.5 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">व्हे मात्रा (Whey Output)</div>
                  <div className="text-xl font-extrabold">{theoResult.wheyKg.toFixed(0)} kg</div>
                  <div className="text-[9px] opacity-75">प्रति बैच / Per batch</div>
                </div>
              </div>

              {/* Solids & Composition Balance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-amber-50/50 border-amber-200">
                  <CardHeader className="p-3 pb-1 border-b border-amber-100">
                    <CardTitle className="text-xs font-bold text-amber-800 uppercase">🔬 कर्ड सॉलिड्स बैलेंस (Curd Solids & Composition)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-xs">
                    {[
                      { label: "रिकवर वसा (Fat recovered)", value: `${theoResult.recoveredFat.toFixed(2)} kg`, color: "text-orange-700" },
                      { label: "रिकवर केसीन (Casein recovered)", value: `${theoResult.recoveredCas.toFixed(2)} kg`, color: "text-blue-700" },
                      { label: "अन्य ठोस (Other solids in cheese)", value: `${theoResult.otherSolids.toFixed(2)} kg`, color: "text-slate-600" },
                      { label: "कुल ठोस मात्रा (Total cheese solids)", value: `${theoResult.totalSolids.toFixed(2)} kg`, color: "text-amber-800 font-bold" },
                      { label: "चीज में नमी (Cheese moisture)", value: `${theoResult.cheeseWaterKg.toFixed(2)} kg (${theo.targetMoisture}%)`, color: "text-cyan-700" },
                      { label: "शुष्क पदार्थ में वसा (Fat in Dry Matter - FDM)", value: `${theoResult.cheeseFatDM.toFixed(1)}%`, color: "text-orange-800 font-bold" },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between border-b border-amber-100/40 pb-1">
                        <span className="text-slate-500">{r.label}</span>
                        <span className={`font-semibold ${r.color}`}>{r.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-blue-50/50 border-blue-200">
                  <CardHeader className="p-3 pb-1 border-b border-blue-100">
                    <CardTitle className="text-xs font-bold text-blue-800 uppercase">🫧 व्हे हानि विवरण (Whey Losses & Composition)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-xs">
                    {[
                      { label: "व्हे की कुल मात्रा (Total whey)", value: `${theoResult.wheyKg.toFixed(1)} kg` },
                      { label: "व्हे में वसा की हानि (Fat lost to whey)", value: `${theoResult.wheyFatKg.toFixed(2)} kg`, warn: theoResult.wheyFatKg > (theoResult.M * 0.04 * 0.1) },
                      { label: "व्हे में प्रोटीन (Soluble proteins)", value: `${theoResult.wheyProteinKg.toFixed(2)} kg` },
                      { label: "प्रति किग्रा चीज के लिए दूध (Milk per kg cheese)", value: `${theoResult.milkPerKgCheese.toFixed(2)} kg` },
                      { label: "+0.1% फैट बढ़ाने पर अतिरिक्त यील्ड", value: `+${theoResult.dYield_dF.toFixed(3)}% (+${(theoResult.dYield_dF * theoResult.M / 100).toFixed(2)} kg)`, color: "text-green-700 font-bold" },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between border-b border-blue-100/40 pb-1">
                        <span className="text-slate-500">{r.label}</span>
                        <span className={`font-semibold ${r.warn ? "text-red-600" : r.color || "text-blue-700"}`}>{r.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Economics */}
              {enableCosting && (
                <Card className="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-none">
                  <CardHeader className="p-3 pb-1 border-b border-slate-800">
                    <CardTitle className="text-xs font-bold text-slate-400 uppercase">💰 आर्थिक विश्लेषण (Economics Projections)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <div className="text-[10px] text-slate-400 font-medium">कुल दूध की लागत (Milk Cost)</div>
                        <div className="text-sm font-bold text-red-300">₹ {theoResult.milkCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <div className="text-[10px] text-slate-400 font-medium">चीज राजस्व (Cheese Revenue)</div>
                        <div className="text-sm font-bold text-green-300">₹ {theoResult.cheeseRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <div className="text-[10px] text-slate-400 font-medium">व्हे राजस्व (Whey Revenue)</div>
                        <div className="text-sm font-bold text-cyan-300">₹ {theoResult.wheyRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <div className="text-[10px] text-slate-400 font-medium">कुल राजस्व (Total Revenue)</div>
                        <div className="text-sm font-bold text-green-400">₹ {theoResult.totalRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                      </div>
                    </div>

                    <div className="bg-slate-850 rounded-xl p-3 flex justify-between items-center border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-green-400">सकल लाभ (Gross Profit)</div>
                        <div className="text-[10px] text-slate-400">({theo.batches} बैच हेतु / For {theo.batches} batches)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-green-300">₹ {theoResult.grossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                        <div className="text-[11px] text-slate-400">मार्जिन (Margin): {theoResult.gpm.toFixed(1)}%</div>
                      </div>
                    </div>

                    {theoResult.days > 1 && (
                      <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2.5 text-center text-xs">
                        <div>
                          <span className="text-slate-400 block text-[10px]">मासिक उत्पादन (Monthly Cheese)</span>
                          <span className="font-semibold text-slate-200">{theoResult.monthlyCheeseKg.toFixed(0)} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">मासिक टर्नओवर (Monthly Revenue)</span>
                          <span className="font-semibold text-green-300">₹ {theoResult.monthlyRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">मासिक सकल लाभ (Monthly Profit)</span>
                          <span className="font-bold text-green-400">₹ {theoResult.monthlyProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Quality & Warning Alerts */}
              {theoResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">गुणवत्ता चेतावनियाँ (Process Warning Alerts)</AlertTitle>
                  <AlertDescription className="text-[11px] text-yellow-700 space-y-1">
                    {theoResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}

              {/* Formula & Reference */}
              <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-500">
                <span className="font-bold text-slate-700 block mb-1">📐 वैन स्लीक गणना विधि (Van Slyke Method):</span>
                <span>Cheese Yield kg = [ (RF × MilkFat) + (RC × Casein) ] × SolidsFactor / (1 − Target Moisture)</span>
              </div>
            </div>
          )}
        </TabsContent>

        {/* ══════════════════════════════════════════════════════════
            TAB 2: ACTUAL TRACKER
            ══════════════════════════════════════════════════════════ */}
        <TabsContent value="actual" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <ValidatedInput
              label="दूध की मात्रा (Milk Qty)"
              value={actual.milkQty}
              onChange={v => setA("milkQty", v)}
              validation={validatePositive(actual.milkQty, "Quantity")}
              unit="kg"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वसा प्रतिशत (Milk Fat %)"
              value={actual.fat}
              onChange={v => setA("fat", v)}
              validation={validateNumber(actual.fat, 0.5, 15, "Fat")}
              unit="%"
              colorScheme="orange"
            />
            <ValidatedInput
              label="प्रोटीन प्रतिशत (Protein %)"
              value={actual.protein}
              onChange={v => setA("protein", v)}
              validation={validateNumber(actual.protein, 1, 10, "Protein")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="चीज नमी % (Cheese Moisture %)"
              value={actual.targetMoisture}
              onChange={v => setA("targetMoisture", v)}
              validation={validateNumber(actual.targetMoisture, 15, 80, "Moisture")}
              unit="%"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वास्तविक चीज प्राप्त (Cheese Obtained)"
              value={actual.cheeseObtained}
              onChange={v => setA("cheeseObtained", v)}
              validation={validatePositive(actual.cheeseObtained, "Cheese obtained")}
              unit="kg"
              colorScheme="green"
            />
          </div>

          <Button onClick={calculateActual} className="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md">
            📊 वास्तविक दक्षता की तुलना करें (Compare Actual Efficiency)
          </Button>

          {actualResult && (
            <div className="space-y-4">
              {/* Grade Badge */}
              <div className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${actualResult.gradeColor}`}>
                <div className="text-4xl mb-1">{actualResult.gradeEmoji}</div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-85">बैच ग्रेड (Batch Efficiency Grade)</div>
                <div className="text-xl font-extrabold">{actualResult.grade}</div>
                <div className="text-sm font-bold mt-1">
                  दक्षता दर (Recovery Rate): {actualResult.recoveryEffPct.toFixed(1)}%
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-3.5 dark:bg-slate-700 overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    actualResult.recoveryEffPct >= 98 ? "bg-green-600" :
                    actualResult.recoveryEffPct >= 94 ? "bg-blue-600" :
                    actualResult.recoveryEffPct >= 88 ? "bg-yellow-500" : "bg-red-600"
                  }`}
                  style={{ width: `${Math.min(100, actualResult.recoveryEffPct)}%` }}
                />
              </div>

              {/* Comparison table */}
              <Card className="border-slate-200">
                <CardHeader className="p-3 pb-1 border-b">
                  <CardTitle className="text-xs font-bold text-slate-700 uppercase">📊 आदर्श बनाम वास्तविक (Ideal vs Actual Yield)</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                        <th className="p-2.5">पैरामीटर (Parameter)</th>
                        <th className="p-2.5 text-right">आदर्श (Ideal)</th>
                        <th className="p-2.5 text-right">वास्तविक (Actual)</th>
                        <th className="p-2.5 text-right">अंतर (Variance)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">चीज मात्रा (Cheese Yield)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealCheeseKg.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.cheeseObtained.toFixed(1)} kg</td>
                        <td className={`p-2.5 text-right font-bold ${actualResult.deviationKg >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {actualResult.deviationKg >= 0 ? "+" : ""}{actualResult.deviationKg.toFixed(1)} kg ({actualResult.deviationPct.toFixed(1)}%)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">यील्ड प्रतिशत (Yield %)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealYieldPct.toFixed(2)}%</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.actualYieldPct.toFixed(2)}%</td>
                        <td className={`p-2.5 text-right font-bold ${actualResult.deviationKg >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {actualResult.deviationKg >= 0 ? "+" : ""}{(actualResult.actualYieldPct - actualResult.idealYieldPct).toFixed(2)}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Alerts */}
              {actualResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">सुधार बिंदु (Actionable Points)</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {actualResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// ADVANCED MILK CHILLING LOAD CALCULATOR
// 
// INSTRUCTIONS:
// 1. Apni file mein purana ChillingLoadCalc() function dhundhein
//    (approximately line 900 ke aas paas, "// 4. MILK CHILLING LOAD" section)
// 2. Purana function DELETE karein (export function ChillingLoadCalc() { ... } tak)
// 3. Yeh poora code wahan PASTE kar dein
// 4. Baaki koi change nahi — sab kuch same rahega
// ════════════════════════════════════════════════════════════

// ── CONSTANTS (function ke bahar, file level pe) ──────────
const CHILLING_SEASON_FACTORS = {
  Summer:  { label: "☀️ Summer (Apr–Jun)", factor: 1.12, ambientC: 42 },
  Monsoon: { label: "🌧️ Monsoon (Jul–Sep)", factor: 1.05, ambientC: 32 },
  Winter:  { label: "❄️ Winter (Oct–Mar)", factor: 0.95, ambientC: 18 },
} as const;

const CHILLING_REFRIGERANTS = {
  "R-448A / R-449A": { cop: 3.1, note: "HFO blend, eco-friendly ✅" },
  "R-404A":          { cop: 2.5, note: "Common in dairy" },
  "R-134a":          { cop: 2.9, note: "Medium temp applications" },
  "R-22 (Legacy)":   { cop: 2.8, note: "Phase-out — avoid new installs" },
  "Ammonia (NH₃)":   { cop: 3.8, note: "Best COP, large plants only" },
} as const;

const CHILLING_PRESETS_DATA = {
  "Small Farm (500L)":    { volume: "500",   startTemp: "35", endTemp: "4", time: "1",   safetyMargin: "15" },
  "BMC Village (2000L)":  { volume: "2000",  startTemp: "36", endTemp: "4", time: "1.5", safetyMargin: "15" },
  "Medium Plant (5000L)": { volume: "5000",  startTemp: "35", endTemp: "4", time: "2",   safetyMargin: "15" },
  "Large Dairy (10000L)": { volume: "10000", startTemp: "34", endTemp: "4", time: "2.5", safetyMargin: "15" },
  "IBT Plant (25000L)":   { volume: "25000", startTemp: "33", endTemp: "3", time: "3",   safetyMargin: "20" },
} as const;

// ── MAIN COMPONENT ─────────────────────────────────────────
export function ChillingLoadCalc() {
  const { toast } = useToast();

  // Active tab
  const [activeTab, setActiveTab] = useState<"basic" | "advanced" | "results">("basic");

  // Multi-stage PHE toggle
  const [useMultiStage, setUseMultiStage] = useState(false);

  // All inputs in one object (easier to manage)
  const [inp, setInp] = useState({
    // Basic
    volume:       "5000",
    startTemp:    "35",
    endTemp:      "4",
    time:         "2",
    safetyMargin: "15",
    // Advanced
    density:         "1.032",
    cp:              "0.938",
    season:          "Summer" as keyof typeof CHILLING_SEASON_FACTORS,
    refrigerant:     "R-448A / R-449A" as keyof typeof CHILLING_REFRIGERANTS,
    tankInsulLoss:   "2",
    operatingHours:  "16",
    electricityRate: "7",
    pheEndTemp:      "12",
  });

  const [result, setResult] = useState<any>(null);

  // Helper to set single input field
  const setField = (k: string, v: string) => setInp(p => ({ ...p, [k]: v }));

  // Apply preset
  const applyPreset = (name: keyof typeof CHILLING_PRESETS_DATA) => {
    const p = CHILLING_PRESETS_DATA[name];
    setInp(prev => ({ ...prev, ...p }));
    toast({ title: `Preset Applied`, description: name });
  };

  // ── VALIDATIONS (same pattern as rest of the file) ──────
  const { validatePositive, validatePercentage, validateNumber } = useInputValidation();

  const volValidation  = useMemo(() => validatePositive(inp.volume,      "Volume"),     [inp.volume]);
  const timeValidation = useMemo(() => validatePositive(inp.time,        "Time"),       [inp.time]);
  const t1Validation   = useMemo(() => validateNumber(inp.startTemp,  20, 50, "Start Temp"), [inp.startTemp]);
  const t2Validation   = useMemo(() => validateNumber(inp.endTemp,     1, 15, "End Temp"),   [inp.endTemp]);
  const smValidation   = useMemo(() => validatePercentage(inp.safetyMargin, "Safety Margin"), [inp.safetyMargin]);

  // ── CALCULATE ────────────────────────────────────────────
  const calculate = useCallback(() => {
    const V      = parseFloat(inp.volume)       || 0;
    const D      = parseFloat(inp.density)      || 1.032;
    const Cp     = parseFloat(inp.cp)           || 0.938;
    const T1     = parseFloat(inp.startTemp)    || 0;
    const T2     = parseFloat(inp.endTemp)      || 0;
    const Hrs    = parseFloat(inp.time)         || 0;
    const Safety = 1 + (parseFloat(inp.safetyMargin) || 0) / 100;

    const sf   = CHILLING_SEASON_FACTORS[inp.season];
    const refg = CHILLING_REFRIGERANTS[inp.refrigerant];
    const elecR  = parseFloat(inp.electricityRate) || 7;
    const opHrs  = parseFloat(inp.operatingHours)  || 16;
    const tankL  = (parseFloat(inp.tankInsulLoss)  || 0) / 100;

    // Validation checks
    if (!volValidation.isValid || !timeValidation.isValid || !t1Validation.isValid || !t2Validation.isValid || !smValidation.isValid) {
      toast({ variant: "destructive", title: "Validation Error", description: "Kripya sahi values enter karein." });
      return;
    }
    if (T1 <= T2) {
      toast({ variant: "destructive", title: "Invalid Temps", description: "Start temp must be higher than end temp." });
      return;
    }
    if (Hrs <= 0 || V <= 0) return;

    const Mass = V * D; // kg

    // ── Stages heat calculation ──────────────────────────
    interface Stage { label: string; heatKcal: number; color: string; }
    let stages: Stage[] = [];

    if (useMultiStage) {
      const pheEnd = parseFloat(inp.pheEndTemp) || 12;
      stages.push({
        label: `PHE (${T1}°C → ${pheEnd}°C) — well water`,
        heatKcal: Mass * Cp * (T1 - pheEnd),
        color: "text-orange-600",
      });
      stages.push({
        label: `Bulk Cooler (${pheEnd}°C → ${T2}°C) — compressor`,
        heatKcal: Mass * Cp * (pheEnd - T2),
        color: "text-blue-600",
      });
    } else {
      stages.push({
        label: `Direct Chilling (${T1}°C → ${T2}°C)`,
        heatKcal: Mass * Cp * (T1 - T2),
        color: "text-blue-600",
      });
    }

    const totalBaseHeat = stages.reduce((s, st) => s + st.heatKcal, 0);
    const heatLoadHr    = totalBaseHeat / Hrs;
    const withSeason    = heatLoadHr * sf.factor;

    // Tank insulation heat gain
    const tankGain = Mass * Cp * (sf.ambientC - T2) * tankL;

    const requiredLoadKcal = (withSeason + tankGain) * Safety;
    const TR               = requiredLoadKcal / 3024;
    const kW_thermal       = TR * 3.517;
    const kW_electric      = kW_thermal / refg.cop;
    const kVA              = kW_electric / 0.85;

    // Energy cost
    const dailyUnits  = kW_electric * opHrs;
    const dailyCost   = dailyUnits * elecR;
    const monthlyCost = dailyCost * 26;

    // Warnings
    const warnings: string[] = [];
    if (TR > 50)       warnings.push(`${TR.toFixed(1)} TR is large — consider screw compressor.`);
    if (useMultiStage) warnings.push(`Multi-stage saves ~25–35% vs direct chilling. PHE needs well water ≤ 20°C.`);
    if (tankL > 0.04)  warnings.push(`Tank insulation loss > 4% — check PUF insulation integrity.`);

    setResult({
      stages, totalBaseHeat, heatLoadHr, requiredLoadKcal,
      TR, kW_thermal, kW_electric, kVA,
      dailyUnits, dailyCost, monthlyCost,
      recommendedTR: TR * 1.10,
      seasonFactor: sf.factor,
      tankGain, Mass, warnings,
    });

    // Auto switch to results tab
    setActiveTab("results");

    toast({
      title: "✅ Calculated",
      description: `Required: ${TR.toFixed(1)} TR | Recommended: ${(TR * 1.1).toFixed(1)} TR`,
    });
  }, [inp, useMultiStage, volValidation, timeValidation, t1Validation, t2Validation, smValidation, toast]);

  // ── RENDER ───────────────────────────────────────────────
  return (
    <Card className="border-blue-200 bg-blue-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-t-lg border-b border-blue-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-blue-800">
            <Snowflake className="w-5 h-5 text-blue-600" />
            Advanced Chilling Load (TR)
          </span>
          {result && (
            <Badge className="bg-blue-600 text-white text-sm px-3 py-1">
              {result.TR.toFixed(1)} TR
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-blue-600 text-xs">
          TR · kW · Energy Cost · Seasonal Correction · Multi-Stage PHE
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── QUICK PRESETS ───────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quick Presets</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(CHILLING_PRESETS_DATA) as Array<keyof typeof CHILLING_PRESETS_DATA>).map(name => (
              <button
                key={name}
                onClick={() => applyPreset(name)}
                className="px-3 py-1 rounded-full border border-blue-200 bg-white text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ── TABS ────────────────────────────────────── */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="basic"    className="text-xs">⚙️ Basic</TabsTrigger>
            <TabsTrigger value="advanced" className="text-xs">🔬 Advanced</TabsTrigger>
            <TabsTrigger value="results"  className="text-xs">📊 Results</TabsTrigger>
          </TabsList>

          {/* ═════ TAB 1: BASIC ════════════════════════ */}
          <TabsContent value="basic" className="space-y-4 pt-3">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ValidatedInput
                label="Milk Volume"
                value={inp.volume}
                onChange={v => setField("volume", v)}
                validation={volValidation}
                unit="L"
                icon={<Droplets className="h-3 w-3 text-blue-500" />}
                helpText="Total batch volume"
                colorScheme="blue"
              />
              <ValidatedInput
                label="Chilling Time"
                value={inp.time}
                onChange={v => setField("time", v)}
                validation={timeValidation}
                unit="hrs"
                icon={<Thermometer className="h-3 w-3 text-blue-500" />}
                helpText="Available hours"
                colorScheme="blue"
              />
              <ValidatedInput
                label="Inlet Temp"
                value={inp.startTemp}
                onChange={v => setField("startTemp", v)}
                validation={t1Validation}
                unit="°C"
                icon={<Thermometer className="h-3 w-3 text-red-500" />}
                helpText="Raw milk (33–38°C)"
                colorScheme="orange"
              />
              <ValidatedInput
                label="Target Temp"
                value={inp.endTemp}
                onChange={v => setField("endTemp", v)}
                validation={t2Validation}
                unit="°C"
                icon={<Snowflake className="h-3 w-3 text-blue-500" />}
                helpText="Storage (3–4°C)"
                colorScheme="blue"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ValidatedInput
                label="Safety Margin"
                value={inp.safetyMargin}
                onChange={v => setField("safetyMargin", v)}
                validation={smValidation}
                unit="%"
                helpText="Heat leaks + pump (10–20%)"
                colorScheme="orange"
              />
              <div className="space-y-2">
                <Label className="text-sm font-semibold flex items-center gap-1">
                  Season
                  <Badge variant="outline" className="ml-auto text-xs">
                    {CHILLING_SEASON_FACTORS[inp.season].label}
                  </Badge>
                </Label>
                <Select value={inp.season} onValueChange={v => setField("season", v)}>
                  <SelectTrigger className="h-10 bg-white border-blue-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.keys(CHILLING_SEASON_FACTORS) as Array<keyof typeof CHILLING_SEASON_FACTORS>).map(k => (
                      <SelectItem key={k} value={k}>
                        {CHILLING_SEASON_FACTORS[k].label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Multi-stage toggle */}
            <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <div>
                <div className="text-sm font-bold text-purple-800">⚡ Multi-Stage: PHE + Bulk Cooler</div>
                <div className="text-xs text-purple-500">Pre-cool with well water → then compressor (saves 25–35%)</div>
              </div>
              <Button
                size="sm"
                variant={useMultiStage ? "default" : "outline"}
                onClick={() => setUseMultiStage(!useMultiStage)}
                className={useMultiStage ? "bg-purple-600 hover:bg-purple-700" : "border-purple-300 text-purple-600"}
              >
                {useMultiStage ? "ON ✓" : "OFF"}
              </Button>
            </div>

            {useMultiStage && (
              <ValidatedInput
                label="PHE Outlet Temp"
                value={inp.pheEndTemp}
                onChange={v => setField("pheEndTemp", v)}
                validation={{ isValid: true, severity: "info" }}
                unit="°C"
                helpText="After PHE with well water (~12–15°C)"
                colorScheme="purple"
              />
            )}
          </TabsContent>

          {/* ═════ TAB 2: ADVANCED ═════════════════════ */}
          <TabsContent value="advanced" className="space-y-4 pt-3">

            {/* Refrigerant */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold">Refrigerant</Label>
              <Select value={inp.refrigerant} onValueChange={v => setField("refrigerant", v)}>
                <SelectTrigger className="h-10 bg-white border-blue-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(CHILLING_REFRIGERANTS) as Array<keyof typeof CHILLING_REFRIGERANTS>).map(k => (
                    <SelectItem key={k} value={k}>
                      <div className="flex flex-col">
                        <span className="font-semibold">{k}</span>
                        <span className="text-xs text-muted-foreground">
                          COP {CHILLING_REFRIGERANTS[k].cop} — {CHILLING_REFRIGERANTS[k].note}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Info className="h-3 w-3" />
                {CHILLING_REFRIGERANTS[inp.refrigerant].note} | COP: {CHILLING_REFRIGERANTS[inp.refrigerant].cop}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ValidatedInput
                label="Milk Density"
                value={inp.density}
                onChange={v => setField("density", v)}
                validation={{ isValid: true, severity: "info" }}
                unit="kg/L"
                helpText="Whole milk: 1.030–1.033"
                colorScheme="blue"
              />
              <ValidatedInput
                label="Specific Heat (Cp)"
                value={inp.cp}
                onChange={v => setField("cp", v)}
                validation={{ isValid: true, severity: "info" }}
                unit="kcal/kg°C"
                helpText="Whole milk: 0.938"
                colorScheme="blue"
              />
              <ValidatedInput
                label="Tank Insulation Loss"
                value={inp.tankInsulLoss}
                onChange={v => setField("tankInsulLoss", v)}
                validation={{ isValid: true, severity: "info" }}
                unit="%/hr"
                helpText="PUF: 1–2% | Older tanks: 3–5%"
                colorScheme="orange"
              />
              <ValidatedInput
                label="Daily Operating Hrs"
                value={inp.operatingHours}
                onChange={v => setField("operatingHours", v)}
                validation={{ isValid: true, severity: "info" }}
                unit="hrs"
                helpText="Compressor run time/day"
                colorScheme="blue"
              />
              <div className="col-span-2">
                <ValidatedInput
                  label="Electricity Rate"
                  value={inp.electricityRate}
                  onChange={v => setField("electricityRate", v)}
                  validation={{ isValid: true, severity: "info" }}
                  unit="₹/kWh"
                  helpText="Agri: ₹5 | Industrial LT: ₹7 | Diesel Gen: ₹18"
                  colorScheme="green"
                />
              </div>
            </div>
          </TabsContent>

          {/* ═════ TAB 3: RESULTS ══════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Main KPIs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800 text-white p-4 rounded-xl text-center shadow-lg">
                    <div className="text-[10px] uppercase opacity-70 font-bold">Required Capacity</div>
                    <div className="text-3xl font-black text-cyan-400">{result.TR.toFixed(1)} TR</div>
                    <div className="text-xs opacity-60 mt-1">{result.kW_thermal.toFixed(1)} kW Thermal</div>
                  </div>
                  <div className="bg-indigo-600 text-white p-4 rounded-xl text-center shadow-lg">
                    <div className="text-[10px] uppercase opacity-80 font-bold">Select Compressor</div>
                    <div className="text-3xl font-black text-yellow-300">{result.recommendedTR.toFixed(1)} TR</div>
                    <div className="text-xs opacity-70 mt-1">+10% starting margin</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <ResultCard
                    title="Electrical Demand"
                    value={result.kW_electric.toFixed(1)}
                    unit="kW"
                    icon={<Zap className="h-4 w-4" />}
                    colorScheme="blue"
                    confidence="high"
                    subtitle={`${result.kVA.toFixed(1)} kVA (PF 0.85)`}
                  />
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-4 text-center flex flex-col justify-center shadow-sm">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Heat Load</div>
                    <div className="text-xl font-black text-slate-700">
                      {result.requiredLoadKcal.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs text-slate-400">kcal/hr (with season + safety)</div>
                  </div>
                </div>

                {/* Heat Load Breakdown */}
                <Card className="bg-slate-50 border-slate-200">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-sm">📊 Heat Load Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {result.stages.map((s: { label: string; heatKcal: number; color: string }, i: number) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className={`${s.color} font-medium text-xs`}>{s.label}</span>
                        <span className="font-bold text-xs">
                          {(s.heatKcal / parseFloat(inp.time)).toLocaleString("en-IN", { maximumFractionDigits: 0 })} kcal/hr
                        </span>
                      </div>
                    ))}
                    {result.tankGain > 0 && (
                      <div className="flex justify-between border-t pt-1 text-red-600 text-xs">
                        <span>Tank Wall Heat Gain</span>
                        <span className="font-bold">
                          {result.tankGain.toLocaleString("en-IN", { maximumFractionDigits: 0 })} kcal/hr
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between border-t-2 pt-2 font-bold text-indigo-700 text-xs">
                      <span>Season × Safety Applied</span>
                      <span>
                        {inp.season} × {CHILLING_SEASON_FACTORS[inp.season].factor} × {(1 + parseFloat(inp.safetyMargin) / 100).toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Energy & Cost */}
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="p-3 pb-1 border-b border-green-100">
                    <CardTitle className="text-sm text-green-800">💰 Energy & Cost Estimate</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {[
                        { label: "Daily Units", value: result.dailyUnits.toFixed(0),                                                unit: "kWh" },
                        { label: "Daily Cost",  value: `₹${result.dailyCost.toFixed(0)}`,                                         unit: "per day" },
                        { label: "Monthly",     value: `₹${result.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, unit: "26 days" },
                      ].map((c, i) => (
                        <div key={i} className="bg-white p-2 rounded-lg border border-green-100">
                          <div className="text-[9px] text-green-700 font-bold uppercase">{c.label}</div>
                          <div className="text-base font-black text-green-800">{c.value}</div>
                          <div className="text-[9px] text-green-500">{c.unit}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 text-center">
                      {inp.refrigerant} · COP {CHILLING_REFRIGERANTS[inp.refrigerant].cop} · ₹{inp.electricityRate}/kWh · {inp.operatingHours} hrs/day
                    </p>
                  </CardContent>
                </Card>

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 text-sm">Process Notes</AlertTitle>
                    <AlertDescription className="text-xs text-yellow-700 space-y-1">
                      {result.warnings.map((w: string, i: number) => (
                        <div key={i}>⚠️ {w}</div>
                      ))}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Industrial Note */}
                <Alert className="bg-blue-50 border-blue-200">
                  <AlertTriangle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-xs text-blue-800">
                    <strong>Industrial Note:</strong> Select compressor rated{" "}
                    <strong>{result.recommendedTR.toFixed(1)} TR</strong> at evaporator −5°C to −10°C,
                    condenser 45°C (summer design point).
                    {result.TR <= 10 && " → Scroll/Reciprocating suitable."}
                    {result.TR > 10 && result.TR <= 100 && " → Screw compressor recommended."}
                    {result.TR > 100 && " → Consider centrifugal compressor."}
                  </AlertDescription>
                </Alert>

                {/* Formula Reference */}
                <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-600 mb-1 text-xs">📐 Formulas Used:</div>
                  <div>Q = Mass × Cp × ΔT = {result.Mass.toFixed(0)} × {inp.cp} × {(parseFloat(inp.startTemp) - parseFloat(inp.endTemp)).toFixed(0)} = {result.totalBaseHeat.toFixed(0)} kcal</div>
                  <div>Load = Q/hrs = {result.totalBaseHeat.toFixed(0)}/{inp.time} = {result.heatLoadHr.toFixed(0)} kcal/hr</div>
                  <div>TR = Final Load / 3024 = {result.requiredLoadKcal.toFixed(0)}/3024 = {result.TR.toFixed(2)} TR</div>
                  <div>kW(elec) = kW(thermal)/COP = {result.kW_thermal.toFixed(2)}/{CHILLING_REFRIGERANTS[inp.refrigerant].cop} = {result.kW_electric.toFixed(2)} kW</div>
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Snowflake className="h-10 w-10 mx-auto mb-3 text-blue-200" />
                <p>Basic tab mein values bharein aur <strong>Calculate</strong> press karein.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* ── CALCULATE BUTTON ────────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-md"
        >
          <Snowflake className="w-4 h-4 mr-2" />
          Calculate Chilling Load
        </Button>

      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED BOILER STEAM COST CALCULATOR
//
// INSTRUCTIONS:
// Apni file mein purana BoilerCostCalc() function delete karein
// aur yeh poora code wahan paste kar dein.
// Koi naya import nahi chahiye — sab already aapki file mein hai.
// ════════════════════════════════════════════════════════════

// ── CONSTANTS ──────────────────────────────────────────────
const BOILER_FUEL_PRESETS = {
  coal:   { label: "🪨 Indonesian Coal",     price: "12",  gcv: "4500", eff: "70", unit: "kg",  co2: 2.42 },
  husk:   { label: "🌾 Paddy Husk",          price: "4",   gcv: "3200", eff: "65", unit: "kg",  co2: 0.0  }, // biomass ~ carbon neutral
  wood:   { label: "🪵 Wood / Briquettes",   price: "6",   gcv: "3400", eff: "68", unit: "kg",  co2: 0.0  },
  gas:    { label: "🔵 Natural Gas (PNG)",   price: "45",  gcv: "8500", eff: "90", unit: "SCM", co2: 2.02 },
  lpg:    { label: "🟠 LPG",                price: "90",  gcv: "10800",eff: "88", unit: "kg",  co2: 2.98 },
  diesel: { label: "⚫ Diesel (HSD)",        price: "90",  gcv: "10200",eff: "85", unit: "kg",  co2: 2.66 },
  furnace:{ label: "🛢️ Furnace Oil (HFO)",  price: "70",  gcv: "9800", eff: "83", unit: "kg",  co2: 3.15 },
};

// Saturated steam enthalpy table (Bar → kcal/kg) — ASHRAE approximation
// H_sat ≈ 636 + 1.94×P − 0.008×P² for 2–20 bar range
const steamEnthalpy = (P: number) => 636 + 1.94 * P - 0.008 * P * P;

// ── MAIN COMPONENT ─────────────────────────────────────────
export function BoilerCostCalc() {
  const { toast } = useToast();

  const [fuelType, setFuelType] = useState<keyof typeof BOILER_FUEL_PRESETS>("coal");

  const [inp, setInp] = useState({
    fuelPrice:      "12",
    gcv:            "4500",
    efficiency:     "70",
    steamPressure:  "10",
    feedWaterTemp:  "85",
    steamCapacity:  "2000",   // kg/hr boiler rated capacity
    operatingHours: "16",     // hrs/day
    operatingDays:  "26",     // days/month
    electricityRate:"7",      // ₹/kWh (for FD/ID fans)
    auxiliaryLoad:  "15",     // kW fans + pumps
  });

  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"inputs" | "results" | "env">("inputs");

  const setF = (k: string, v: string) => setInp(p => ({ ...p, [k]: v }));

  // Apply fuel preset
  const applyFuel = (key: keyof typeof BOILER_FUEL_PRESETS) => {
    const f = BOILER_FUEL_PRESETS[key];
    setFuelType(key);
    setInp(p => ({ ...p, fuelPrice: f.price, gcv: f.gcv, efficiency: f.eff }));
  };

  // ── VALIDATIONS ───────────────────────────────────────────
  const { validatePositive, validateNumber } = useInputValidation();

  const gcvVal  = useMemo(() => validatePositive(inp.gcv,          "GCV"),         [inp.gcv]);
  const effVal  = useMemo(() => validateNumber(inp.efficiency, 30, 98, "Efficiency"), [inp.efficiency]);
  const presVal = useMemo(() => validateNumber(inp.steamPressure, 1, 50, "Pressure"),  [inp.steamPressure]);
  const fwVal   = useMemo(() => validateNumber(inp.feedWaterTemp, 20, 120, "Feed Water Temp"), [inp.feedWaterTemp]);

  // ── CALCULATE ─────────────────────────────────────────────
  const calculate = useCallback(() => {
    const P_fuel  = parseFloat(inp.fuelPrice)      || 0;
    const GCV     = parseFloat(inp.gcv)            || 0;
    const Eff     = (parseFloat(inp.efficiency)    || 0) / 100;
    const Tw      = parseFloat(inp.feedWaterTemp)  || 0;
    const P_bar   = parseFloat(inp.steamPressure)  || 10;
    const capKgh  = parseFloat(inp.steamCapacity)  || 0;
    const opHrs   = parseFloat(inp.operatingHours) || 0;
    const opDays  = parseFloat(inp.operatingDays)  || 26;
    const elecR   = parseFloat(inp.electricityRate)|| 7;
    const auxKW   = parseFloat(inp.auxiliaryLoad)  || 0;

    if (!gcvVal.isValid || !effVal.isValid || !presVal.isValid || !fwVal.isValid) {
      toast({ variant: "destructive", title: "Validation Error", description: "Kripya sahi values enter karein." });
      return;
    }

    // ── 1. Enthalpy calculations ─────────────────────────
    const H_steam = steamEnthalpy(P_bar);       // kcal/kg sat. steam
    const H_fw    = Tw * 1.0;                   // kcal/kg feed water (cp≈1)
    const H_evap  = H_steam - H_fw;            // Actual heat added per kg steam

    // ── 2. Fuel side ─────────────────────────────────────
    const heatAvailable   = GCV * Eff;          // kcal available per kg fuel
    const steamFuelRatio  = heatAvailable / H_evap; // kg steam per kg fuel
    const fuelPerKgSteam  = 1 / steamFuelRatio; // kg fuel needed per kg steam

    // ── 3. Cost per kg steam ──────────────────────────────
    const fuelCostPerKg   = P_fuel * fuelPerKgSteam;

    // Auxiliary (FD/ID fans, BFW pump) — spread over steam produced
    const steamPerHr      = capKgh;             // rated capacity
    const auxCostPerHr    = auxKW * elecR;
    const auxCostPerKgSt  = steamPerHr > 0 ? auxCostPerHr / steamPerHr : 0;

    const totalCostPerKg  = fuelCostPerKg + auxCostPerKgSt;

    // ── 4. Operational totals ─────────────────────────────
    const fuelPerHr       = steamPerHr * fuelPerKgSteam;   // kg fuel/hr
    const fuelCostPerHr   = fuelPerHr * P_fuel;
    const totalCostPerHr  = fuelCostPerHr + auxCostPerHr;

    const dailySteam      = steamPerHr * opHrs;
    const dailyFuel       = fuelPerHr  * opHrs;
    const dailyCost       = totalCostPerHr * opHrs;

    const monthlySteam    = dailySteam * opDays;
    const monthlyFuel     = dailyFuel  * opDays;
    const monthlyCost     = dailyCost  * opDays;

    // ── 5. Boiler Efficiency benchmarks ──────────────────
    const flueGasLoss     = (1 - Eff) * 100;            // %

    // ── 6. Environmental ─────────────────────────────────
    const fuelCO2Factor   = BOILER_FUEL_PRESETS[fuelType].co2; // kg CO2 per kg fuel
    const co2PerKgSteam   = fuelPerKgSteam * fuelCO2Factor;
    const dailyCO2        = dailyFuel * fuelCO2Factor;
    const monthlyCO2      = monthlyFuel * fuelCO2Factor;

    // ── 7. Condensate return savings ─────────────────────
    // If feed water temp rises from 30→85°C (condensate return), saving per kg steam:
    const savingBaseTemp  = 30; // if no condensate return, cold water at 30°C
    const H_evap_cold     = H_steam - savingBaseTemp;
    const steamFuel_cold  = heatAvailable / H_evap_cold;
    const savingPerKg     = P_fuel * (1/steamFuel_cold - fuelPerKgSteam);
    const monthlySaving   = savingPerKg * monthlySteam;

    const warnings: string[] = [];
    if (Eff < 0.70)   warnings.push(`Boiler efficiency ${(Eff*100).toFixed(0)}% is low. Target ≥ 75%. Check flue gas temp & excess air.`);
    if (Tw < 60)      warnings.push(`Feed water temp ${Tw}°C is low. Install economizer or improve condensate return to save ₹${savingPerKg.toFixed(2)}/kg steam.`);
    if (P_bar > 15)   warnings.push(`High pressure (${P_bar} bar). Ensure IBR certification & safety valves are calibrated.`);
    if (fuelType === "diesel" || fuelType === "furnace") warnings.push(`${BOILER_FUEL_PRESETS[fuelType].label} is expensive. Consider switching to PNG or biomass for cost reduction.`);

    setResult({
      H_steam, H_fw, H_evap, heatAvailable,
      steamFuelRatio, fuelPerKgSteam,
      fuelCostPerKg, auxCostPerKgSt, totalCostPerKg,
      fuelPerHr, fuelCostPerHr, auxCostPerHr, totalCostPerHr,
      dailySteam, dailyFuel, dailyCost,
      monthlySteam, monthlyFuel, monthlyCost,
      flueGasLoss, co2PerKgSteam, dailyCO2, monthlyCO2,
      savingPerKg, monthlySaving,
      warnings,
    });

    setActiveTab("results");
    toast({
      title: "✅ Calculated",
      description: `Steam cost: ₹${totalCostPerKg.toFixed(2)}/kg | Steam:Fuel = ${steamFuelRatio.toFixed(2)}`,
    });
  }, [inp, fuelType, gcvVal, effVal, presVal, fwVal, toast]);

  const fuelPreset = BOILER_FUEL_PRESETS[fuelType];

  // ── RENDER ────────────────────────────────────────────────
  return (
    <Card className="border-red-200 bg-red-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg border-b border-red-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-red-800">
            <Flame className="w-5 h-5 text-red-600" />
            Advanced Boiler Steam Cost
          </span>
          {result && (
            <Badge className="bg-red-600 text-white text-sm px-3 py-1">
              ₹{result.totalCostPerKg.toFixed(2)}/kg steam
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-red-600 text-xs">
          Steam cost · Fuel consumption · Monthly budget · CO₂ · Condensate savings
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── FUEL TYPE SELECTOR ──────────────────────── */}
        <div className="space-y-2">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fuel Type</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {(Object.keys(BOILER_FUEL_PRESETS) as Array<keyof typeof BOILER_FUEL_PRESETS>).map(key => (
              <button
                key={key}
                onClick={() => applyFuel(key)}
                className={`px-2 py-2 rounded-lg border text-xs font-semibold transition-all shadow-sm text-left leading-tight
                  ${fuelType === key
                    ? "bg-red-600 text-white border-red-600 shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-red-300 hover:text-red-600"
                  }`}
              >
                {BOILER_FUEL_PRESETS[key].label}
                <div className={`text-[9px] mt-0.5 ${fuelType === key ? "opacity-80" : "text-slate-400"}`}>
                  GCV {BOILER_FUEL_PRESETS[key].gcv} kcal/{BOILER_FUEL_PRESETS[key].unit}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── TABS ────────────────────────────────────── */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="inputs"  className="text-xs">⚙️ Inputs</TabsTrigger>
            <TabsTrigger value="results" className="text-xs">📊 Results</TabsTrigger>
            <TabsTrigger value="env"     className="text-xs">🌿 Eco & Savings</TabsTrigger>
          </TabsList>

          {/* ═════ TAB 1: INPUTS ════════════════════════ */}
          <TabsContent value="inputs" className="space-y-4 pt-3">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Left: Fuel & Boiler */}
              <Card className="border-red-100 bg-white">
                <CardHeader className="p-3 pb-2 bg-red-50 rounded-t-lg border-b border-red-100">
                  <CardTitle className="text-xs font-bold text-red-700 uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3 h-3" /> Fuel & Boiler
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <ValidatedInput
                    label={`Fuel Price (₹/${fuelPreset.unit})`}
                    value={inp.fuelPrice}
                    onChange={v => setF("fuelPrice", v)}
                    validation={validatePositive(inp.fuelPrice, "Fuel price")}
                    icon={<DollarSign className="h-3 w-3 text-red-500" />}
                    colorScheme="orange"
                  />
                  <ValidatedInput
                    label={`GCV (kcal/${fuelPreset.unit})`}
                    value={inp.gcv}
                    onChange={v => setF("gcv", v)}
                    validation={gcvVal}
                    helpText="Lab tested value preferred"
                    colorScheme="orange"
                  />
                  <ValidatedInput
                    label="Boiler Efficiency %"
                    value={inp.efficiency}
                    onChange={v => setF("efficiency", v)}
                    validation={effVal}
                    helpText="Modern boiler: 80–88%"
                    colorScheme="orange"
                  />
                  <ValidatedInput
                    label="Steam Pressure (Bar)"
                    value={inp.steamPressure}
                    onChange={v => setF("steamPressure", v)}
                    validation={presVal}
                    helpText="Typical dairy: 8–15 bar"
                    colorScheme="red"
                  />
                  <ValidatedInput
                    label="Feed Water Temp (°C)"
                    value={inp.feedWaterTemp}
                    onChange={v => setF("feedWaterTemp", v)}
                    validation={fwVal}
                    helpText="With condensate return: 80–95°C"
                    colorScheme="blue"
                  />
                </CardContent>
              </Card>

              {/* Right: Operations & Cost */}
              <Card className="border-orange-100 bg-white">
                <CardHeader className="p-3 pb-2 bg-orange-50 rounded-t-lg border-b border-orange-100">
                  <CardTitle className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-1">
                    <Factory className="w-3 h-3" /> Operations
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <ValidatedInput
                    label="Boiler Capacity (kg/hr)"
                    value={inp.steamCapacity}
                    onChange={v => setF("steamCapacity", v)}
                    validation={validatePositive(inp.steamCapacity, "Capacity")}
                    helpText="Nameplate rated steam output"
                    colorScheme="orange"
                  />
                  <ValidatedInput
                    label="Operating Hours/Day"
                    value={inp.operatingHours}
                    onChange={v => setF("operatingHours", v)}
                    validation={validateNumber(inp.operatingHours, 1, 24, "Operating hours")}
                    helpText="Actual run time"
                    colorScheme="blue"
                  />
                  <ValidatedInput
                    label="Working Days/Month"
                    value={inp.operatingDays}
                    onChange={v => setF("operatingDays", v)}
                    validation={validateNumber(inp.operatingDays, 1, 31, "Working days")}
                    colorScheme="blue"
                  />
                  <ValidatedInput
                    label="Electricity Rate (₹/kWh)"
                    value={inp.electricityRate}
                    onChange={v => setF("electricityRate", v)}
                    validation={validatePositive(inp.electricityRate, "Electricity rate")}
                    colorScheme="green"
                  />
                  <ValidatedInput
                    label="Aux. Load (kW)"
                    value={inp.auxiliaryLoad}
                    onChange={v => setF("auxiliaryLoad", v)}
                    validation={validatePositive(inp.auxiliaryLoad, "Aux load")}
                    helpText="FD/ID fans + BFW pump"
                    colorScheme="purple"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ═════ TAB 2: RESULTS ═══════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Top KPIs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-600 text-white p-4 rounded-xl text-center shadow-lg">
                    <div className="text-[10px] uppercase opacity-80 font-bold">Steam Cost</div>
                    <div className="text-3xl font-black">₹ {result.totalCostPerKg.toFixed(2)}</div>
                    <div className="text-xs opacity-70 mt-1">per kg steam</div>
                  </div>
                  <div className="bg-slate-800 text-white p-4 rounded-xl text-center shadow-lg">
                    <div className="text-[10px] uppercase opacity-70 font-bold">Steam : Fuel</div>
                    <div className="text-3xl font-black text-yellow-300">{result.steamFuelRatio.toFixed(2)}</div>
                    <div className="text-xs opacity-60 mt-1">kg steam / kg fuel</div>
                  </div>
                </div>

                {/* Enthalpy Breakdown */}
                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader className="p-3 pb-1 border-b border-amber-100">
                    <CardTitle className="text-sm text-amber-800">🔥 Thermal Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-1 text-sm">
                    {[
                      { label: "Sat. steam enthalpy",         value: `${result.H_steam.toFixed(1)} kcal/kg`,   color: "text-orange-700" },
                      { label: "Feed water enthalpy",         value: `${result.H_fw.toFixed(1)} kcal/kg`,      color: "text-blue-600"   },
                      { label: "Heat added per kg steam",     value: `${result.H_evap.toFixed(1)} kcal/kg`,    color: "text-red-700 font-bold" },
                      { label: "Available heat (fuel)",       value: `${result.heatAvailable.toFixed(0)} kcal/kg fuel`, color: "text-green-700" },
                      { label: "Flue gas + radiation loss",   value: `${result.flueGasLoss.toFixed(1)}%`,      color: "text-slate-500"  },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-600">{r.label}</span>
                        <span className={r.color}>{r.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Cost Breakdown */}
                <Card className="bg-slate-50 border-slate-200">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-sm">💰 Cost Breakdown (per kg steam)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Fuel cost</span>
                      <span className="font-bold text-red-700">₹ {result.fuelCostPerKg.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Auxiliary (fans/pump)</span>
                      <span className="font-bold text-purple-600">₹ {result.auxCostPerKgSt.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between border-t-2 pt-1 font-bold text-lg text-red-800">
                      <span>Total cost / kg steam</span>
                      <span>₹ {result.totalCostPerKg.toFixed(3)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Operational Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Card className="border-orange-100">
                    <CardHeader className="p-3 pb-1 bg-orange-50 border-b">
                      <CardTitle className="text-xs text-orange-800 font-bold uppercase">Daily Operations</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-1 text-sm">
                      {[
                        { label: "Steam generated",  value: `${result.dailySteam.toLocaleString("en-IN", { maximumFractionDigits: 0 })} kg/day` },
                        { label: `Fuel consumed (${fuelPreset.unit}/day)`, value: `${result.dailyFuel.toLocaleString("en-IN", { maximumFractionDigits: 1 })} ${fuelPreset.unit}` },
                        { label: "Fuel cost",         value: `₹ ${result.dailyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
                      ].map((r, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-slate-500">{r.label}</span>
                          <span className="font-bold">{r.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none">
                    <CardHeader className="p-3 pb-1">
                      <CardTitle className="text-xs text-slate-300 font-bold uppercase">Monthly Budget</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-1 text-sm">
                      {[
                        { label: "Steam generated",  value: `${result.monthlySteam.toLocaleString("en-IN", { maximumFractionDigits: 0 })} kg`, color: "text-cyan-400" },
                        { label: `Fuel consumed`,    value: `${result.monthlyFuel.toLocaleString("en-IN", { maximumFractionDigits: 0 })} ${fuelPreset.unit}`, color: "text-yellow-300" },
                        { label: "Monthly spend",    value: `₹ ${result.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, color: "text-green-300 text-base font-black" },
                      ].map((r, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-slate-400">{r.label}</span>
                          <span className={`font-bold ${r.color}`}>{r.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 text-sm">Optimization Tips</AlertTitle>
                    <AlertDescription className="text-xs text-yellow-700 space-y-1">
                      {result.warnings.map((w: string, i: number) => (
                        <div key={i}>⚠️ {w}</div>
                      ))}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Formula Reference */}
                <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-500 space-y-1">
                  <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas Used:</div>
                  <div>H_steam(P) = 636 + 1.94×P − 0.008×P² = {result.H_steam.toFixed(1)} kcal/kg at {inp.steamPressure} bar</div>
                  <div>Heat added = H_steam − H_feedwater = {result.H_steam.toFixed(1)} − {result.H_fw.toFixed(1)} = {result.H_evap.toFixed(1)} kcal/kg</div>
                  <div>Steam:Fuel = (GCV×η) / Heat_added = ({inp.gcv}×{(parseFloat(inp.efficiency)/100).toFixed(2)}) / {result.H_evap.toFixed(1)} = {result.steamFuelRatio.toFixed(3)}</div>
                  <div>Cost/kg = Fuel_price / Steam:Fuel = ₹{inp.fuelPrice} / {result.steamFuelRatio.toFixed(3)} = ₹{result.fuelCostPerKg.toFixed(3)}</div>
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Flame className="h-10 w-10 mx-auto mb-3 text-red-200" />
                <p>Inputs tab mein values bharein aur <strong>Calculate</strong> press karein.</p>
              </div>
            )}
          </TabsContent>

          {/* ═════ TAB 3: ECO & SAVINGS ═════════════════ */}
          <TabsContent value="env" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* CO2 Emissions */}
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="p-3 pb-2 border-b border-green-100">
                    <CardTitle className="text-sm text-green-800">🌿 CO₂ Emissions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {fuelPreset.co2 === 0 ? (
                      <Alert className="bg-emerald-50 border-emerald-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <AlertDescription className="text-emerald-800 text-xs">
                          <strong>Carbon Neutral Fuel!</strong> Biomass fuels (husk/wood) are considered carbon neutral as they re-absorb CO₂ during growth.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <div className="space-y-2">
                        {[
                          { label: "CO₂ per kg steam",   value: `${result.co2PerKgSteam.toFixed(3)} kg CO₂` },
                          { label: "Daily CO₂",          value: `${result.dailyCO2.toLocaleString("en-IN", { maximumFractionDigits: 0 })} kg` },
                          { label: "Monthly CO₂",        value: `${result.monthlyCO2.toLocaleString("en-IN", { maximumFractionDigits: 0 })} kg` },
                          { label: "Annual CO₂ (est.)",  value: `${(result.monthlyCO2 * 12 / 1000).toFixed(1)} tonnes` },
                        ].map((r, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-green-700">{r.label}</span>
                            <span className="font-bold text-green-900">{r.value}</span>
                          </div>
                        ))}
                        <p className="text-[10px] text-green-600 mt-1">
                          CO₂ factor for {fuelPreset.label}: {fuelPreset.co2} kg CO₂/kg fuel
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Condensate Return Savings */}
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="p-3 pb-2 border-b border-blue-100">
                    <CardTitle className="text-sm text-blue-800">💧 Condensate Return Benefit</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    <p className="text-xs text-blue-600">
                      Comparison: Your feed water at {inp.feedWaterTemp}°C vs. fresh cold water at 30°C
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <div className="bg-white p-3 rounded-lg border border-blue-100 text-center">
                        <div className="text-[9px] text-blue-500 font-bold uppercase">Savings / kg steam</div>
                        <div className="text-xl font-black text-blue-800">₹ {result.savingPerKg.toFixed(3)}</div>
                      </div>
                      <div className="bg-blue-600 text-white p-3 rounded-lg text-center">
                        <div className="text-[9px] opacity-80 font-bold uppercase">Monthly Savings</div>
                        <div className="text-xl font-black text-yellow-300">
                          ₹ {result.monthlySaving.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] text-blue-500 mt-1">
                      If condensate return is not yet installed, this is your potential monthly saving by installing a condensate recovery system.
                    </p>
                  </CardContent>
                </Card>

                {/* Efficiency Benchmarks */}
                <Card className="bg-white border-slate-200">
                  <CardHeader className="p-3 pb-2 border-b">
                    <CardTitle className="text-sm">📊 Industry Benchmarks</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-xs text-slate-600">
                    {[
                      { label: "Fire-tube boiler (coal/biomass)", range: "70–78%",  current: parseFloat(inp.efficiency) >= 70 && parseFloat(inp.efficiency) <= 78 },
                      { label: "Three-pass wet-back boiler",      range: "78–84%",  current: parseFloat(inp.efficiency) >= 78 && parseFloat(inp.efficiency) <= 84 },
                      { label: "Gas-fired/PNG boiler",            range: "85–92%",  current: parseFloat(inp.efficiency) >= 85 && parseFloat(inp.efficiency) <= 92 },
                      { label: "World-class with economizer",     range: "88–93%",  current: parseFloat(inp.efficiency) >= 88 },
                    ].map((b, i) => (
                      <div key={i} className={`flex justify-between p-2 rounded ${b.current ? "bg-green-50 border border-green-200" : ""}`}>
                        <span className={b.current ? "text-green-800 font-semibold" : ""}>{b.label}</span>
                        <span className={`font-bold ${b.current ? "text-green-600" : "text-slate-400"}`}>
                          {b.range} {b.current ? "✓" : ""}
                        </span>
                      </div>
                    ))}
                    <div className="mt-2 p-2 bg-amber-50 rounded border border-amber-200 text-amber-800">
                      <strong>Your boiler: {inp.efficiency}%</strong> — {
                        parseFloat(inp.efficiency) >= 85
                          ? "Excellent! Well-maintained."
                          : parseFloat(inp.efficiency) >= 75
                          ? "Good. Economizer installation can push to 85%+."
                          : "Below average. Check excess air, flue temp & insulation."
                      }
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Flame className="h-10 w-10 mx-auto mb-3 text-red-200" />
                <p>Calculate karein pehle — tab yahan data aayega.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* ── CALCULATE BUTTON ────────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-md"
        >
          <Flame className="w-4 h-4 mr-2" />
          Analyze Boiler Cost
        </Button>

      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED TANK VOLUME CALCULATOR — Drop-in Replacement
//
// INSTRUCTIONS:
// 1. Apni file mein purana TankVolumeCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── PRESETS ───────────────────────────────────────────────
const TANK_PRESETS = {
  "BMC 500L":       { type: "horizontal", diameter: "70",  length: "130", height: "35",  dishHeight: "12", endType: "dish" },
  "BMC 1000L":      { type: "horizontal", diameter: "90",  length: "165", height: "45",  dishHeight: "15", endType: "dish" },
  "BMC 2000L":      { type: "horizontal", diameter: "112", length: "210", height: "56",  dishHeight: "18", endType: "dish" },
  "Silo 5KL":       { type: "vertical",   diameter: "140", length: "320", height: "280", dishHeight: "35", endType: "cone" },
  "Silo 10KL":      { type: "vertical",   diameter: "180", length: "400", height: "350", dishHeight: "45", endType: "cone" },
  "Storage 25KL":   { type: "vertical",   diameter: "270", length: "450", height: "380", dishHeight: "55", endType: "dish" },
  "Buffer Tank":    { type: "vertical",   diameter: "100", length: "150", height: "100", dishHeight: "0",  endType: "flat" },
} as const;

// ── MATH HELPERS ──────────────────────────────────────────
// Precise horizontal partial-fill cylinder area
function horizontalSegmentArea(R: number, h: number): number {
  if (h <= 0) return 0;
  if (h >= 2 * R) return Math.PI * R * R;
  if (Math.abs(h - R) < 1e-9) return 0.5 * Math.PI * R * R;
  return R * R * Math.acos((R - h) / R) - (R - h) * Math.sqrt(2 * R * h - h * h);
}

// Dish (torispherical approx as oblate semi-ellipsoid) partial volume
// Full dish vol = (2/3)πR²D; partial fill via spherical-cap scaling
function dishPartialVol(R: number, D: number, h: number): number {
  if (D <= 0 || h <= 0) return 0;
  const fullVol = (2 / 3) * Math.PI * R * R * D;
  if (h >= D) return fullVol;
  // Ratio from exact oblate ellipsoid partial-fill integral
  const u = h / D;
  return fullVol * (1.5 * u * u - 0.5 * u * u * u);
}

// Cone partial volume
function conePartialVol(R: number, D: number, h: number): number {
  if (D <= 0 || h <= 0) return 0;
  if (h >= D) return (1 / 3) * Math.PI * R * R * D;
  const r_h = R * (h / D);
  return (1 / 3) * Math.PI * r_h * r_h * h;
}

// ── MAIN COMPONENT ────────────────────────────────────────
function TankVolumeCalc() {
  const { toast } = useToast();

  const [inp, setInp] = useState({
    type:       "horizontal" as "horizontal" | "vertical",
    endType:    "dish"       as "flat" | "dish" | "cone",
    diameter:   "112",
    length:     "210",
    height:     "56",
    dishHeight: "18",
  });

  const [result, setResult] = useState<any>(null);
  const setF = (k: string, v: string) => setInp(p => ({ ...p, [k]: v }));

  // Validations
  const { validatePositive, validateNumber } = useInputValidation();
  const R_num   = parseFloat(inp.diameter) / 2  || 0;
  const L_num   = parseFloat(inp.length)        || 0;
  const D_num   = parseFloat(inp.dishHeight)    || 0;
  const maxH    = inp.type === "horizontal" ? parseFloat(inp.diameter) : L_num + D_num;
  const hVal    = useMemo(() => validateNumber(inp.height, 0.1, maxH + 0.001, "Liquid Level"), [inp.height, maxH]);

  // Apply preset
  const applyPreset = (name: keyof typeof TANK_PRESETS) => {
    setInp(TANK_PRESETS[name] as any);
    toast({ title: "Preset Applied", description: name });
  };

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    const R  = parseFloat(inp.diameter)   / 2;
    const L  = parseFloat(inp.length)     || 0;
    const H  = parseFloat(inp.height)     || 0;
    const D  = parseFloat(inp.dishHeight) || 0;

    if (R <= 0 || L <= 0 || H <= 0) {
      toast({ variant: "destructive", title: "Invalid values", description: "Sahi dimensions enter karein." });
      return;
    }

    let volCm3      = 0;
    let volCylCm3   = 0;
    let volEndsCm3  = 0;
    let totalCapCm3 = 0;

    // ════ HORIZONTAL TANK ══════════════════════════════
    if (inp.type === "horizontal") {
      const H_clamp = Math.min(H, 2 * R);
      const segArea = horizontalSegmentArea(R, H_clamp);
      volCylCm3     = segArea * L;

      // Dish ends (2 ends), partial fill using area ratio
      if (inp.endType === "dish" && D > 0) {
        const fillRatio = segArea / (Math.PI * R * R);
        const fullDish  = 2 * (2 / 3) * Math.PI * R * R * D;
        volEndsCm3      = fullDish * fillRatio;
      }

      volCm3      = volCylCm3 + volEndsCm3;
      // Total capacity (full tank)
      totalCapCm3 = Math.PI * R * R * L + (inp.endType === "dish" && D > 0 ? 2 * (2/3) * Math.PI * R * R * D : 0);
    }

    // ════ VERTICAL TANK ════════════════════════════════
    else {
      if (H <= D) {
        // Liquid only in bottom
        if (inp.endType === "cone")       volEndsCm3 = conePartialVol(R, D, H);
        else if (inp.endType === "dish")  volEndsCm3 = dishPartialVol(R, D, H);
        else                              volEndsCm3 = Math.PI * R * R * H;
        volCylCm3  = 0;
      } else {
        // Full bottom + cylindrical portion
        if (inp.endType === "cone")       volEndsCm3 = (1/3) * Math.PI * R * R * D;
        else if (inp.endType === "dish")  volEndsCm3 = (2/3) * Math.PI * R * R * D;
        else                              volEndsCm3 = 0;
        volCylCm3  = Math.PI * R * R * (H - D);
      }
      volCm3      = volCylCm3 + volEndsCm3;

      // Total capacity
      const cylFull   = Math.PI * R * R * L;
      let   bottomFull = 0;
      if (inp.endType === "cone")       bottomFull = (1/3) * Math.PI * R * R * D;
      else if (inp.endType === "dish")  bottomFull = (2/3) * Math.PI * R * R * D;
      totalCapCm3 = cylFull + bottomFull;
    }

    const volLiters     = volCm3     / 1000;
    const totalCapL     = totalCapCm3 / 1000;
    const percentFull   = totalCapL > 0 ? (volLiters / totalCapL) * 100 : 0;
    const emptyVol      = totalCapL - volLiters;

    // Dipstick: cm per 100L (useful for field gauging)
    const cmPer100L     = H > 0 ? (H / volLiters) * 100 : 0;

    setResult({
      volLiters, totalCapL, percentFull, emptyVol,
      volCylL:  volCylCm3  / 1000,
      volEndsL: volEndsCm3 / 1000,
      cmPer100L,
      H, R, L, D,
    });

    toast({
      title: "✅ Calculated",
      description: `Volume: ${volLiters.toLocaleString("en-IN", { maximumFractionDigits: 1 })} L (${percentFull.toFixed(1)}% full)`,
    });
  }, [inp, toast]);

  const isHorizontal = inp.type === "horizontal";

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-slate-300 bg-slate-50/30">
      <CardHeader className="pb-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-lg border-b border-slate-200">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-800">
            <Ruler className="w-5 h-5 text-blue-600" />
            Precision Tank Volume
          </span>
          {result && (
            <Badge className="bg-blue-600 text-white text-sm px-3 py-1">
              {result.volLiters.toLocaleString("en-IN", { maximumFractionDigits: 0 })} L
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-slate-500 text-xs">
          Horizontal/Vertical · Dish/Cone/Flat ends · Dipstick reference · % filled
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── QUICK PRESETS ──────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quick Presets</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(TANK_PRESETS) as Array<keyof typeof TANK_PRESETS>).map(name => (
              <button
                key={name}
                onClick={() => applyPreset(name)}
                className="px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ── TANK TYPE & END TYPE ───────────────────── */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tank Orientation</Label>
            <Select
              value={inp.type}
              onValueChange={v =>
                setInp(p => ({
                  ...p,
                  type:    v as "horizontal" | "vertical",
                  endType: v === "horizontal" ? "dish" : "cone",
                }))
              }
            >
              <SelectTrigger className="h-10 bg-white border-slate-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="horizontal">🔵 Horizontal (BMC/Road Tanker)</SelectItem>
                <SelectItem value="vertical">🏛️ Vertical (Silo/Storage)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">End / Bottom Type</Label>
            <Select value={inp.endType} onValueChange={v => setF("endType", v)}>
              <SelectTrigger className="h-10 bg-white border-slate-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flat">⬛ Flat</SelectItem>
                <SelectItem value="dish">🥣 Dish / Torispherical</SelectItem>
                {inp.type === "vertical" && <SelectItem value="cone">🔺 Conical Bottom</SelectItem>}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* ── DIMENSIONS ────────────────────────────── */}
        <Card className="border-blue-100 bg-white">
          <CardHeader className="p-3 pb-2 bg-blue-50 rounded-t-lg border-b border-blue-100">
            <CardTitle className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              📐 Dimensions (all in cm — Internal)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 grid grid-cols-2 gap-3">
            <ValidatedInput
              label="Internal Diameter"
              value={inp.diameter}
              onChange={v => setF("diameter", v)}
              validation={validatePositive(inp.diameter, "Diameter")}
              unit="cm"
              helpText="ID (not OD)"
              colorScheme="blue"
              icon={<Ruler className="h-3 w-3 text-blue-500" />}
            />
            <ValidatedInput
              label={isHorizontal ? "Cylindrical Length" : "Straight Shell Height"}
              value={inp.length}
              onChange={v => setF("length", v)}
              validation={validatePositive(inp.length, "Length")}
              unit="cm"
              helpText="Shell only — exclude ends"
              colorScheme="blue"
            />
            <ValidatedInput
              label="Liquid Level (Dipstick)"
              value={inp.height}
              onChange={v => setF("height", v)}
              validation={hVal}
              unit="cm"
              helpText={isHorizontal ? "0 to Diameter" : "0 to total height"}
              colorScheme="green"
              icon={<Droplets className="h-3 w-3 text-green-500" />}
            />
            {inp.endType !== "flat" && (
              <ValidatedInput
                label={isHorizontal ? "Dish Depth" : inp.endType === "cone" ? "Cone Depth" : "Dish Depth"}
                value={inp.dishHeight}
                onChange={v => setF("dishHeight", v)}
                validation={validatePositive(inp.dishHeight, "Dish/Cone depth")}
                unit="cm"
                helpText="Depth of curve / cone"
                colorScheme="orange"
              />
            )}
          </CardContent>
        </Card>

        {/* ── CALCULATE ─────────────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white font-bold shadow-md"
        >
          <Ruler className="w-4 h-4 mr-2" />
          Calculate Volume
        </Button>

        {/* ── RESULTS ───────────────────────────────── */}
        {result && (
          <div className="space-y-3 animate-in fade-in">

            {/* Main KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-[10px] uppercase opacity-70 font-bold">Liquid Volume</div>
                <div className="text-3xl font-black">
                  {result.volLiters.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs opacity-80">Litres</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-4 rounded-xl shadow-sm text-center flex flex-col justify-center">
                <div className="text-[10px] uppercase text-slate-500 font-bold">Tank Capacity</div>
                <div className="text-2xl font-bold text-slate-700">
                  {result.totalCapL.toLocaleString("en-IN", { maximumFractionDigits: 0 })} L
                </div>
                <div className="text-[10px] text-slate-400">total rated</div>
              </div>
            </div>

            {/* Fill bar */}
            <Card className="bg-white border-slate-200">
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-slate-700">
                    {result.percentFull.toFixed(1)}% Full
                  </span>
                  <span className="text-slate-400 text-xs">
                    Empty: {result.emptyVol.toLocaleString("en-IN", { maximumFractionDigits: 0 })} L
                  </span>
                </div>
                <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className={`h-full rounded-full transition-all ${
                      result.percentFull > 90
                        ? "bg-red-500"
                        : result.percentFull > 70
                        ? "bg-orange-400"
                        : "bg-blue-500"
                    }`}
                    style={{ width: `${Math.min(result.percentFull, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>0 L</span>
                  <span>{(result.totalCapL / 2).toLocaleString("en-IN", { maximumFractionDigits: 0 })} L</span>
                  <span>{result.totalCapL.toLocaleString("en-IN", { maximumFractionDigits: 0 })} L</span>
                </div>
              </CardContent>
            </Card>

            {/* Volume breakdown */}
            <Card className="bg-slate-50 border-slate-200">
              <CardHeader className="p-3 pb-1 border-b">
                <CardTitle className="text-xs font-bold text-slate-600 uppercase">Volume Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Cylindrical shell</span>
                  <span className="font-bold">
                    {result.volCylL.toLocaleString("en-IN", { maximumFractionDigits: 1 })} L
                  </span>
                </div>
                {result.volEndsL > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      {isHorizontal ? "Dish ends (2×)" : `${inp.endType} bottom`}
                    </span>
                    <span className="font-bold text-orange-600">
                      {result.volEndsL.toLocaleString("en-IN", { maximumFractionDigits: 1 })} L
                    </span>
                  </div>
                )}
                <div className="flex justify-between border-t pt-1 font-bold text-blue-700">
                  <span>Total liquid</span>
                  <span>{result.volLiters.toLocaleString("en-IN", { maximumFractionDigits: 1 })} L</span>
                </div>
              </CardContent>
            </Card>

            {/* Dipstick reference */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="p-3 pb-1 border-b border-amber-100">
                <CardTitle className="text-xs font-bold text-amber-800 uppercase">📏 Dipstick Reference</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center bg-white p-2 rounded-lg border border-amber-100">
                    <div className="text-[10px] text-amber-600 font-bold">CM per 100L</div>
                    <div className="text-xl font-black text-amber-800">
                      {result.cmPer100L.toFixed(2)} cm
                    </div>
                  </div>
                  <div className="text-center bg-white p-2 rounded-lg border border-amber-100">
                    <div className="text-[10px] text-amber-600 font-bold">L per cm</div>
                    <div className="text-xl font-black text-amber-800">
                      {result.cmPer100L > 0 ? (100 / result.cmPer100L).toFixed(1) : "—"} L
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-amber-600 mt-2 text-center">
                  At current fill level ({result.H} cm). Varies non-linearly — use full dipstick chart for precision.
                </p>
              </CardContent>
            </Card>

            {/* Formula note */}
            <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
              <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas Used:</div>
              {isHorizontal ? (
                <>
                  <div>Cyl area = R²·cos⁻¹((R−H)/R) − (R−H)·√(2RH−H²)</div>
                  <div>Vol_cyl = Area × Length</div>
                  {inp.endType === "dish" && <div>Dish ends: fill ratio × 2×(2/3)πR²D</div>}
                </>
              ) : (
                <>
                  {inp.endType === "cone"  && <div>Cone: V = (1/3)πr²h where r = R×(h/D)</div>}
                  {inp.endType === "dish"  && <div>Dish: V = (2/3)πR²D × (1.5u² − 0.5u³), u=h/D</div>}
                  <div>Cylinder: V = πR²×(H−D)</div>
                </>
              )}
              <div>R={result.R.toFixed(1)}, L={result.L}, H={result.H}, D={result.D}</div>
            </div>

          </div>
        )}
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED PACKAGING FILM CALCULATOR
// Drop-in Replacement for PackagingFilmCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana PackagingFilmCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── MATERIAL DATABASE ─────────────────────────────────────
const FILM_MATERIAL_DB = {
  ldpe:      { label: "🥛 LDPE (Milk Pouch)",         density: 0.92, thkMin: 40,  thkMax: 80,  pricePerKg: 120, note: "Standard milk pouch — 50–60 micron"    },
  lldpe:     { label: "🥛 LLDPE (Premium Pouch)",     density: 0.95, thkMin: 40,  thkMax: 75,  pricePerKg: 130, note: "Better seal strength, less puncture"   },
  pet_plain: { label: "📦 PET (Plain)",               density: 1.40, thkMin: 10,  thkMax: 50,  pricePerKg: 180, note: "Outer layer of laminates"              },
  laminate:  { label: "📦 LDPE/PET Laminate",        density: 1.20, thkMin: 70,  thkMax: 130, pricePerKg: 220, note: "Curd cup lid, ghee pack, retort"        },
  bopp:      { label: "🏷️ BOPP (Butter wrap)",       density: 0.91, thkMin: 15,  thkMax: 40,  pricePerKg: 160, note: "Butter, cheese wrap"                   },
  pp_cup:    { label: "🫙 PP Sheet (Cup/Tub)",        density: 0.91, thkMin: 200, thkMax: 600, pricePerKg: 100, note: "Thermoformed dahi cup, ice cream tub"  },
  foil_lam:  { label: "🧈 Alu Foil Laminate",        density: 1.50, thkMin: 60,  thkMax: 120, pricePerKg: 350, note: "Butter, ghee, premium packs"           },
  shrink:    { label: "🎁 Shrink Film (Multipack)",  density: 0.92, thkMin: 20,  thkMax: 50,  pricePerKg: 140, note: "Bundling milk pouches"                 },
} as const;

type FilmKey = keyof typeof FILM_MATERIAL_DB;

// ── POUCH SIZE PRESETS ────────────────────────────────────
const POUCH_PRESETS = {
  "Milk 200ml":   { width: "195", repeat: "115", thickness: "50", pouches: "50000" },
  "Milk 500ml":   { width: "325", repeat: "150", thickness: "55", pouches: "15000" },
  "Milk 1L":      { width: "400", repeat: "200", thickness: "60", pouches: "5000"  },
  "Dahi Cup lid": { width: "105", repeat: "105", thickness: "80", pouches: "20000" },
  "Lassi 200ml":  { width: "200", repeat: "130", thickness: "55", pouches: "10000" },
  "Butter 100g":  { width: "250", repeat: "160", thickness: "30", pouches: "8000"  },
} as const;

// ── MAIN COMPONENT ────────────────────────────────────────
function PackagingFilmCalc() {
  const { toast } = useToast();

  const [material, setMaterial] = useState<FilmKey>("ldpe");
  const [inp, setInp] = useState({
    pouches:    "15000",
    width:      "325",     // mm
    repeat:     "150",     // mm (pitch length)
    thickness:  "55",      // micron
    wastage:    "2.0",     // %
    rollWeight: "25",      // kg per reel
    rollLength: "",        // m per reel (optional override)
    gusset:     "0",       // mm side gusset (0 = flat pouch)
    layers:     "1",       // number of plies/layers
    pricePerKg: "120",     // ₹/kg film
    batchDays:  "26",      // working days / month
    dailyPouches:"",       // if filled → auto-calc monthly
  });

  const [result, setResult] = useState<any>(null);
  const setF = (k: string, v: string) => setInp(p => ({ ...p, [k]: v }));
  const { validatePositive, validateNumber } = useInputValidation();

  // Apply material preset
  const applyMaterial = (key: FilmKey) => {
    const m = FILM_MATERIAL_DB[key];
    setMaterial(key);
    setInp(p => ({ ...p, pricePerKg: String(m.pricePerKg) }));
  };

  // Apply pouch preset
  const applyPouch = (name: keyof typeof POUCH_PRESETS) => {
    const pp = POUCH_PRESETS[name];
    setInp(p => ({ ...p, ...pp }));
    toast({ title: "Preset Applied", description: name });
  };

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    const mat      = FILM_MATERIAL_DB[material];
    const pouches  = parseFloat(inp.pouches)    || 0;
    const W        = parseFloat(inp.width)      || 0;   // mm
    const L        = parseFloat(inp.repeat)     || 0;   // mm
    const T        = parseFloat(inp.thickness)  || 0;   // micron
    const G        = parseFloat(inp.gusset)     || 0;   // mm
    const layers   = parseFloat(inp.layers)     || 1;
    const wastage  = 1 + (parseFloat(inp.wastage) || 0) / 100;
    const rollWt   = parseFloat(inp.rollWeight) || 25;  // kg
    const priceKg  = parseFloat(inp.pricePerKg) || 0;
    const days     = parseFloat(inp.batchDays)  || 26;
    const dailyP   = parseFloat(inp.dailyPouches) || 0;

    if (pouches <= 0 || W <= 0 || L <= 0 || T <= 0) {
      toast({ variant: "destructive", title: "Invalid values" }); return;
    }

    // ── 1. Effective pouch dimensions ────────────────
    // Gusset adds to effective width: W_eff = W + 2G
    const W_eff    = W + 2 * G;  // mm

    // ── 2. Film area per pouch (both sides = 2 layers for tube stock) ──
    // Flat area = Width × Repeat (one side)
    // For tube stock: 1 run = 2-ply, so area factor = layers
    const areaPerPouchCm2 = (W_eff / 10) * (L / 10) * layers;   // cm²

    // ── 3. Weight per pouch ───────────────────────────
    // Weight = Area × Thickness × Density
    // T in micron → cm: T / 10000
    const T_cm            = T / 10000;
    const weightPerPouchG = areaPerPouchCm2 * T_cm * mat.density;

    // ── 4. Total film requirement ──────────────────────
    const netKg           = (weightPerPouchG * pouches) / 1000;
    const grossKg         = netKg * wastage;

    // ── 5. Linear metres ──────────────────────────────
    // Total repeat length in metres
    const totalMeters     = (pouches * L) / 1000;  // metres
    const grossMeters     = totalMeters * wastage;

    // ── 6. Roll/Reel length (if not overridden) ───────
    // From roll weight and film specs:
    // Length (m) = RollWt(g) / (W_eff_m × T_cm × Density × 10000)
    // Area density (g/m) = W_eff(m) × T(micron) × Density / 1000
    const areaGPerM       = (W_eff / 1000) * T * mat.density / 1000 * 1000 * layers;
    // areaGPerM = (W_m × T_mic × density × 1000 / 1000) * layers  →  g/m
    const calcRollLenM    = inp.rollLength
      ? parseFloat(inp.rollLength)
      : (rollWt * 1000) / areaGPerM;

    // ── 7. Pouches per reel ───────────────────────────
    const pouchesPerReel  = Math.floor(calcRollLenM * 1000 / L);

    // ── 8. Reels needed ───────────────────────────────
    const reelsExact      = grossKg / rollWt;
    const reelsCeil       = Math.ceil(reelsExact);

    // ── 9. Yield ──────────────────────────────────────
    const yieldPouchPerKg = 1000 / weightPerPouchG;

    // ── 10. Cost ──────────────────────────────────────
    const batchCost       = grossKg * priceKg;
    const costPerPouch    = batchCost / pouches;
    const costPerThousand = costPerPouch * 1000;

    // Monthly (if daily pouches given)
    const monthlyPouches  = dailyP > 0 ? dailyP * days : pouches;
    const monthlyNetKg    = (weightPerPouchG * monthlyPouches) / 1000;
    const monthlyGrossKg  = monthlyNetKg * wastage;
    const monthlyReels    = Math.ceil(monthlyGrossKg / rollWt);
    const monthlyCost     = monthlyGrossKg * priceKg;

    // ── 11. Surface area (print area) ─────────────────
    const printAreaCm2    = W * L / 100;  // cm² per pouch (outer face only)
    const printAreaTotalM2= (printAreaCm2 * pouches) / 10000;

    const warnings: string[] = [];
    if (T < mat.thkMin) warnings.push(`Thickness ${T}μ is below minimum (${mat.thkMin}μ) for ${mat.label}. Risk of leaks/tears.`);
    if (T > mat.thkMax) warnings.push(`Thickness ${T}μ exceeds typical max (${mat.thkMax}μ). Unnecessary cost — verify spec.`);
    if (parseFloat(inp.wastage) > 4) warnings.push(`Wastage ${inp.wastage}% is high. Check sealing jaw alignment and film tension.`);
    if (pouchesPerReel < 500) warnings.push(`Only ${pouchesPerReel} pouches/reel — frequent reel changes. Consider heavier reels.`);

    setResult({
      weightPerPouchG, areaPerPouchCm2,
      netKg, grossKg, totalMeters, grossMeters,
      calcRollLenM, pouchesPerReel,
      reelsExact, reelsCeil, yieldPouchPerKg,
      batchCost, costPerPouch, costPerThousand,
      monthlyPouches, monthlyGrossKg, monthlyReels, monthlyCost,
      printAreaCm2, printAreaTotalM2,
      warnings, pouches,
    });

    toast({
      title: "✅ Calculated",
      description: `${grossKg.toFixed(1)} kg film · ${reelsCeil} reels · ₹${costPerThousand.toFixed(2)}/1000 pouches`,
    });
  }, [inp, material, toast]);

  const mat = FILM_MATERIAL_DB[material];

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-purple-200 bg-purple-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg border-b border-purple-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-purple-800">
            <PackageOpen className="w-5 h-5 text-purple-600" />
            Industrial Packaging Film Planner
          </span>
          {result && (
            <Badge className="bg-purple-600 text-white text-sm px-3 py-1">
              {result.reelsCeil} reels · ₹{result.costPerThousand.toFixed(1)}/K
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-purple-600 text-xs">
          8 materials · Gusset · Reel length · Monthly planning · Cost per 1000 pouches
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── MATERIAL SELECTOR ──────────────────────── */}
        <div className="space-y-2">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Film Material</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {(Object.keys(FILM_MATERIAL_DB) as FilmKey[]).map(key => (
              <button key={key} onClick={() => applyMaterial(key)}
                className={`p-2 rounded-lg border text-xs font-semibold transition-all text-left leading-tight shadow-sm
                  ${material === key
                    ? "bg-purple-600 text-white border-purple-600 shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-purple-300 hover:text-purple-700"
                  }`}>
                {FILM_MATERIAL_DB[key].label}
                <div className={`text-[9px] mt-0.5 ${material === key ? "opacity-80" : "text-slate-400"}`}>
                  ρ={FILM_MATERIAL_DB[key].density} · ₹{FILM_MATERIAL_DB[key].pricePerKg}/kg
                </div>
              </button>
            ))}
          </div>
          <p className="text-[10px] text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">
            📌 {mat.note} · Thickness range: {mat.thkMin}–{mat.thkMax} μ
          </p>
        </div>

        {/* ── POUCH PRESETS ────────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pouch Size Presets</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(POUCH_PRESETS) as Array<keyof typeof POUCH_PRESETS>).map(name => (
              <button key={name} onClick={() => applyPouch(name)}
                className="px-3 py-1 rounded-full border border-purple-200 bg-white text-xs font-semibold text-purple-700 hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ── FILM DIMENSIONS ──────────────────────────── */}
        <Card className="border-purple-100 bg-white">
          <CardHeader className="p-3 pb-2 bg-purple-50 rounded-t-lg border-b border-purple-100">
            <CardTitle className="text-xs font-bold text-purple-700 uppercase">📐 Film Dimensions</CardTitle>
          </CardHeader>
          <CardContent className="p-3 grid grid-cols-2 gap-3">
            <ValidatedInput
              label="Target Pouches"
              value={inp.pouches}
              onChange={v => setF("pouches", v)}
              validation={validatePositive(inp.pouches, "Pouches")}
              colorScheme="purple"
            />
            <ValidatedInput
              label="Film Width"
              value={inp.width}
              onChange={v => setF("width", v)}
              validation={validatePositive(inp.width, "Width")}
              unit="mm"
              helpText="As per machine spec"
              colorScheme="purple"
            />
            <ValidatedInput
              label="Repeat / Pitch"
              value={inp.repeat}
              onChange={v => setF("repeat", v)}
              validation={validatePositive(inp.repeat, "Repeat")}
              unit="mm"
              helpText="Pouch cut length"
              colorScheme="purple"
            />
            <ValidatedInput
              label="Thickness"
              value={inp.thickness}
              onChange={v => setF("thickness", v)}
              validation={validateNumber(inp.thickness, 5, 1000, "Thickness")}
              unit="μ"
              helpText={`Range: ${mat.thkMin}–${mat.thkMax} μ`}
              colorScheme="orange"
            />
            <ValidatedInput
              label="Side Gusset"
              value={inp.gusset}
              onChange={v => setF("gusset", v)}
              validation={{ isValid: parseFloat(inp.gusset) >= 0, severity: "error" }}
              unit="mm"
              helpText="0 = flat pouch"
              colorScheme="blue"
            />
            <ValidatedInput
              label="Layers (plies)"
              value={inp.layers}
              onChange={v => setF("layers", v)}
              validation={validateNumber(inp.layers, 1, 4, "Layers")}
              helpText="1=tube, 2=flat sheet"
              colorScheme="blue"
            />
          </CardContent>
        </Card>

        {/* ── REEL & COST ───────────────────────────────── */}
        <Card className="border-violet-100 bg-white">
          <CardHeader className="p-3 pb-2 bg-violet-50 rounded-t-lg border-b border-violet-100">
            <CardTitle className="text-xs font-bold text-violet-700 uppercase">🎞️ Reel & Cost</CardTitle>
          </CardHeader>
          <CardContent className="p-3 grid grid-cols-2 gap-3">
            <ValidatedInput
              label="Roll Weight"
              value={inp.rollWeight}
              onChange={v => setF("rollWeight", v)}
              validation={validatePositive(inp.rollWeight, "Roll weight")}
              unit="kg"
              helpText="Std: 20–30 kg"
              colorScheme="violet"
            />
            <ValidatedInput
              label="Roll Length (opt)"
              value={inp.rollLength}
              onChange={v => setF("rollLength", v)}
              validation={{ isValid: true, severity: "info" }}
              unit="m"
              helpText="Leave blank = auto-calc"
              colorScheme="violet"
            />
            <ValidatedInput
              label="Wastage %"
              value={inp.wastage}
              onChange={v => setF("wastage", v)}
              validation={validateNumber(inp.wastage, 0, 15, "Wastage")}
              unit="%"
              helpText="Std: 1.5–3%"
              colorScheme="red"
            />
            <ValidatedInput
              label="Film Price"
              value={inp.pricePerKg}
              onChange={v => setF("pricePerKg", v)}
              validation={validatePositive(inp.pricePerKg, "Price")}
              unit="₹/kg"
              colorScheme="green"
            />
            <ValidatedInput
              label="Daily Production"
              value={inp.dailyPouches}
              onChange={v => setF("dailyPouches", v)}
              validation={{ isValid: true, severity: "info" }}
              helpText="For monthly planning"
              colorScheme="blue"
            />
            <ValidatedInput
              label="Working Days/Month"
              value={inp.batchDays}
              onChange={v => setF("batchDays", v)}
              validation={{ isValid: true, severity: "info" }}
              colorScheme="blue"
            />
          </CardContent>
        </Card>

        {/* ── CALCULATE ───────────────────────────────── */}
        <Button onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold shadow-md">
          <PackageOpen className="w-4 h-4 mr-2" />
          Calculate Film Requirement
        </Button>

        {/* ── RESULTS ─────────────────────────────────── */}
        {result && (
          <div className="space-y-3 animate-in fade-in">

            {/* Main KPIs */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Gross Film",     value: result.grossKg.toFixed(1),  unit: "kg",   color: "bg-purple-600" },
                { label: "Reels (ceil)",   value: result.reelsCeil,            unit: "reels",color: "bg-slate-800"  },
                { label: "Film Length",    value: (result.grossMeters / 1000).toFixed(2), unit: "km", color: "bg-violet-600" },
              ].map((k, i) => (
                <div key={i} className={`${k.color} text-white p-3 rounded-xl text-center shadow`}>
                  <div className="text-[9px] uppercase opacity-80 font-bold">{k.label}</div>
                  <div className="text-2xl font-black">{k.value}</div>
                  <div className="text-[9px] opacity-70">{k.unit}</div>
                </div>
              ))}
            </div>

            {/* Per-pouch stats */}
            <Card className="bg-white border-purple-100">
              <CardHeader className="p-3 pb-1 border-b border-purple-100">
                <CardTitle className="text-xs text-purple-700 font-bold uppercase">📊 Per-Pouch Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                {[
                  { label: "Pouch film area",       value: `${result.areaPerPouchCm2.toFixed(2)} cm²` },
                  { label: "Weight per pouch",       value: `${result.weightPerPouchG.toFixed(3)} g` },
                  { label: "Yield",                  value: `${result.yieldPouchPerKg.toFixed(0)} pouches/kg` },
                  { label: "Pouches per reel",       value: `${result.pouchesPerReel.toLocaleString("en-IN")} pouches` },
                  { label: "Reel length (calc)",     value: `${result.calcRollLenM.toFixed(0)} m` },
                  { label: "Print area per pouch",   value: `${result.printAreaCm2.toFixed(0)} cm²` },
                  { label: "Total print area",       value: `${result.printAreaTotalM2.toFixed(1)} m²` },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-bold text-slate-700">{r.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Cost breakdown */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="p-3 pb-1 border-b border-green-100">
                <CardTitle className="text-sm text-green-800">💰 Cost Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                {[
                  { label: "Net film (no wastage)",   value: `${result.netKg.toFixed(2)} kg` },
                  { label: "Gross film (+ wastage)",  value: `${result.grossKg.toFixed(2)} kg` },
                  { label: "Batch film cost",         value: `₹ ${result.batchCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, bold: true },
                  { label: "Cost per pouch",          value: `₹ ${result.costPerPouch.toFixed(4)}` },
                  { label: "Cost per 1000 pouches",   value: `₹ ${result.costPerThousand.toFixed(2)}`, bold: true },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-500">{r.label}</span>
                    <span className={`${r.bold ? "font-black text-green-800 text-base" : "font-bold text-slate-700"}`}>{r.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Monthly planning */}
            {(parseFloat(inp.dailyPouches) > 0) && (
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none">
                <CardHeader className="p-3 pb-1">
                  <CardTitle className="text-xs text-slate-300 font-bold uppercase">
                    📅 Monthly Plan ({inp.batchDays} days · {result.monthlyPouches.toLocaleString("en-IN")} pouches)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-sm">
                  {[
                    { label: "Monthly film",    value: `${result.monthlyGrossKg.toFixed(1)} kg`,  color: "text-cyan-400"   },
                    { label: "Monthly reels",   value: `${result.monthlyReels} reels`,             color: "text-yellow-300" },
                    { label: "Monthly cost",    value: `₹ ${result.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, color: "text-green-300 font-black text-base" },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-slate-400">{r.label}</span>
                      <span className={`font-bold ${r.color}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <Alert className="bg-yellow-50 border-yellow-300">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800 text-sm">Packaging Alerts</AlertTitle>
                <AlertDescription className="text-xs text-yellow-700 space-y-1">
                  {result.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
                </AlertDescription>
              </Alert>
            )}

            {/* Formula note */}
            <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
              <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas:</div>
              <div>W_eff = Width + 2×Gusset = {parseFloat(inp.width) + 2 * parseFloat(inp.gusset || "0")} mm</div>
              <div>Area/pouch = W_eff × Repeat × Layers = {result.areaPerPouchCm2.toFixed(2)} cm²</div>
              <div>Wt/pouch = Area × (T/10000) × ρ = {result.weightPerPouchG.toFixed(4)} g</div>
              <div>Gross_kg = (Wt × Pouches / 1000) × (1 + Wastage%) = {result.grossKg.toFixed(3)} kg</div>
              <div>Reels = Gross_kg / RollWeight = {result.reelsExact.toFixed(3)} → {result.reelsCeil} reels</div>
            </div>

          </div>
        )}
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED PIPELINE HOLD-UP & CIP VOLUME CALCULATOR
// Drop-in Replacement for PipelineLossCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana PipelineLossCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── PIPE SIZE DATABASE (SMS/DIN 11850 Standards) ─────────
const PIPE_SIZES = [
  { label: '½"  (12.7mm OD)',  od: "12.7",  th: "1.0", dn: "DN10"  },
  { label: '¾"  (19.0mm OD)',  od: "19.0",  th: "1.0", dn: "DN15"  },
  { label: '1"  (25.4mm OD)',  od: "25.4",  th: "1.2", dn: "DN20"  },
  { label: '1½" (38.1mm OD)',  od: "38.1",  th: "1.2", dn: "DN32"  },
  { label: '2"  (51.0mm OD)',  od: "51.0",  th: "1.5", dn: "DN40"  },
  { label: '2½" (63.5mm OD)',  od: "63.5",  th: "1.5", dn: "DN50"  },
  { label: '3"  (76.2mm OD)',  od: "76.2",  th: "1.5", dn: "DN65"  },
  { label: '4"  (101.6mm OD)', od: "101.6", th: "2.0", dn: "DN100" },
  { label: '5"  (129.0mm OD)', od: "129.0", th: "2.0", dn: "DN125" },
  { label: '6"  (154.0mm OD)', od: "154.0", th: "2.0", dn: "DN150" },
] as const;

// ── FITTING VOLUMES (Approximate, per fitting, for given OD) ──
// L-equivalent per fitting in pipe diameters
const FITTING_L_EQUIV: Record<string, number> = {
  "Elbow 90°":          30,
  "Elbow 45°":          16,
  "Tee (flow-through)": 20,
  "Tee (branch)":       60,
  "Butterfly Valve":    40,
  "Ball Valve":         6,
  "Straight Reducer":   10,
};

// ── CIP VELOCITY GUIDELINE ──────────────────────────────
// Recommended CIP velocity: 1.5 m/s minimum (turbulent flow for cleaning)
// Re = ρvD/μ; for water: ρ=1000, μ=0.001 → Re = 1000*v*D/0.001
function cipFlowRate(id_m: number, velocity_ms = 1.5): number {
  return Math.PI * (id_m / 2) ** 2 * velocity_ms * 1000 * 3600; // L/hr
}

// ── MULTI-SEGMENT STATE ───────────────────────────────────
interface PipeSegment {
  id:        string;
  od:        string;
  thickness: string;
  length:    string;
  lines:     string;
  label:     string;
}

// ── MAIN COMPONENT ────────────────────────────────────────
function PipelineLossCalc() {
  const { toast } = useToast();

  // Multi-segment support
  const [segments, setSegments] = useState<PipeSegment[]>([
    { id: "s1", od: "51.0", thickness: "1.5", length: "100", lines: "1", label: "Main Line" },
  ]);

  // Fitting adder
  const [fittings, setFittings] = useState<{ type: string; count: string }[]>([]);

  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"segments" | "fittings" | "results">("segments");

  // ── SEGMENT HELPERS ──────────────────────────────────
  const addSegment = () => {
    setSegments(p => [...p, {
      id: `s${Date.now()}`, od: "51.0", thickness: "1.5",
      length: "50", lines: "1", label: `Line ${p.length + 1}`,
    }]);
  };

  const removeSegment = (id: string) => {
    if (segments.length === 1) return;
    setSegments(p => p.filter(s => s.id !== id));
  };

  const updateSegment = (id: string, key: keyof PipeSegment, val: string) => {
    setSegments(p => p.map(s => {
      if (s.id !== id) return s;
      // Auto-update thickness when OD changes
      if (key === "od") {
        const found = PIPE_SIZES.find(ps => ps.od === val);
        return { ...s, od: val, thickness: found ? found.th : s.thickness };
      }
      return { ...s, [key]: val };
    }));
  };

  // ── FITTING HELPERS ───────────────────────────────────
  const addFitting = (type: string) => {
    const existing = fittings.find(f => f.type === type);
    if (existing) {
      setFittings(p => p.map(f => f.type === type ? { ...f, count: String(parseInt(f.count) + 1) } : f));
    } else {
      setFittings(p => [...p, { type, count: "1" }]);
    }
  };
  const removeFitting = (type: string) => setFittings(p => p.filter(f => f.type !== type));

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    // Per-segment calculation
    const segResults = segments.map(s => {
      const OD  = parseFloat(s.od);
      const Th  = parseFloat(s.thickness);
      const Len = parseFloat(s.length);
      const N   = parseFloat(s.lines) || 1;
      const ID  = OD - 2 * Th;
      if (ID <= 0 || Len <= 0) return null;
      const id_m        = ID / 1000;
      const volPerLine  = Math.PI * (id_m / 2) ** 2 * Len * 1000; // litres
      const totalVol    = volPerLine * N;
      const lPerM       = volPerLine / Len;
      const cipFlowLhr  = cipFlowRate(id_m);
      const reynolds    = (1000 * 1.5 * id_m) / 0.001; // at 1.5 m/s CIP velocity
      return { label: s.label, ID, OD, Th, Len, N, totalVol, volPerLine, lPerM, cipFlowLhr, reynolds };
    }).filter(Boolean);

    if (segResults.length === 0) {
      toast({ variant: "destructive", title: "No valid segments", description: "Dimensions check karein." });
      return;
    }

    const totalPipeVol = segResults.reduce((s: number, r: any) => s + r.totalVol, 0);

    // Fittings equivalent volume
    // Use largest segment OD for fitting volume reference
    const refOD = parseFloat(segments[0].od) / 1000;
    const refTh = parseFloat(segments[0].thickness) / 1000;
    const refID = refOD - 2 * refTh;
    const refAreaM2 = Math.PI * (refID / 2) ** 2;

    let fittingVol = 0;
    const fittingDetails: { type: string; count: number; vol: number }[] = [];
    fittings.forEach(f => {
      const n        = parseInt(f.count) || 0;
      const lEquiv   = FITTING_L_EQUIV[f.type] || 0;
      const fvol     = refAreaM2 * lEquiv * refID * n * 1000; // litres
      fittingVol    += fvol;
      fittingDetails.push({ type: f.type, count: n, vol: fvol });
    });

    const totalSystemVol  = totalPipeVol + fittingVol;

    // CIP volumes
    const preRinseVol    = totalSystemVol * 1.5;   // 1.5× for pre-rinse
    const causticVol     = totalSystemVol * 2.0;   // 2× for caustic circulation
    const acidVol        = totalSystemVol * 2.0;   // 2× for acid wash
    const finalRinseVol  = totalSystemVol * 1.5;   // final rinse
    const totalCIPVol    = preRinseVol + causticVol + acidVol + finalRinseVol;

    // CIP pump sizing (for largest segment)
    const maxCipFlow = Math.max(...(segResults as any[]).map((r: any) => r.cipFlowLhr));

    // Milk loss cost (approximate ₹)
    const milkRate = 35; // ₹/L typical
    const milkLossCost = totalPipeVol * milkRate;

    setResult({
      segResults, totalPipeVol, fittingVol, fittingDetails,
      totalSystemVol, preRinseVol, causticVol, acidVol,
      finalRinseVol, totalCIPVol, maxCipFlow, milkLossCost,
    });

    setActiveTab("results");
    toast({
      title: "✅ Calculated",
      description: `Total hold-up: ${totalSystemVol.toFixed(1)} L | CIP: ${totalCIPVol.toFixed(0)} L`,
    });
  }, [segments, fittings, toast]);

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-orange-200 bg-orange-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-t-lg border-b border-orange-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-orange-800">
            <Cylinder className="w-5 h-5 text-orange-600" />
            Pipeline Hold-up & CIP
          </span>
          {result && (
            <Badge className="bg-orange-600 text-white text-sm px-3 py-1">
              {result.totalSystemVol.toFixed(1)} L
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-orange-600 text-xs">
          Multi-segment · Fittings · CIP volume per stage · Flow velocity · Milk loss cost
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="segments" className="text-xs">🔧 Segments</TabsTrigger>
            <TabsTrigger value="fittings" className="text-xs">🔩 Fittings</TabsTrigger>
            <TabsTrigger value="results"  className="text-xs">📊 Results</TabsTrigger>
          </TabsList>

          {/* ═════ TAB 1: SEGMENTS ══════════════════════ */}
          <TabsContent value="segments" className="space-y-3 pt-3">
            <p className="text-xs text-slate-500">
              Alag-alag diameter lines alag segment mein add karein. For example: main 2" line + CIP return 1.5" line.
            </p>

            {segments.map((seg, idx) => (
              <Card key={seg.id} className="border-orange-100 bg-white">
                <CardHeader className="p-3 pb-2 bg-orange-50 rounded-t-lg border-b border-orange-100 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="bg-orange-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <input
                      className="text-xs font-bold text-orange-800 bg-transparent border-none outline-none w-full"
                      value={seg.label}
                      onChange={e => updateSegment(seg.id, "label", e.target.value)}
                      placeholder="Line name…"
                    />
                  </div>
                  {segments.length > 1 && (
                    <button
                      onClick={() => removeSegment(seg.id)}
                      className="text-red-400 hover:text-red-600 text-xs font-bold ml-2"
                    >
                      ✕
                    </button>
                  )}
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  {/* Pipe standard selector */}
                  <div className="space-y-1">
                    <Label className="text-[10px] uppercase font-bold text-slate-500">
                      Pipe Standard (SMS/DIN 11850)
                    </Label>
                    <Select
                      value={seg.od}
                      onValueChange={v => updateSegment(seg.id, "od", v)}
                    >
                      <SelectTrigger className="h-9 text-xs bg-white border-orange-100">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PIPE_SIZES.map(ps => (
                          <SelectItem key={ps.od} value={ps.od}>
                            <span className="font-semibold">{ps.label}</span>
                            <span className="text-[10px] text-slate-400 ml-2">
                              ID: {(parseFloat(ps.od) - 2 * parseFloat(ps.th)).toFixed(1)}mm · {ps.dn}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <ValidatedInput
                      label="OD (mm)"
                      value={seg.od}
                      onChange={v => updateSegment(seg.id, "od", v)}
                      validation={{ isValid: parseFloat(seg.od) > 0, severity: "error" }}
                      helpText="Outer diameter"
                      colorScheme="orange"
                    />
                    <ValidatedInput
                      label="Wall Thickness (mm)"
                      value={seg.thickness}
                      onChange={v => updateSegment(seg.id, "thickness", v)}
                      validation={{ isValid: parseFloat(seg.thickness) > 0, severity: "error" }}
                      helpText={`ID = ${(parseFloat(seg.od) - 2 * parseFloat(seg.thickness)).toFixed(1)} mm`}
                      colorScheme="orange"
                    />
                    <ValidatedInput
                      label="Length (m)"
                      value={seg.length}
                      onChange={v => updateSegment(seg.id, "length", v)}
                      validation={{ isValid: parseFloat(seg.length) > 0, severity: "error" }}
                      colorScheme="blue"
                    />
                    <ValidatedInput
                      label="No. of Lines"
                      value={seg.lines}
                      onChange={v => updateSegment(seg.id, "lines", v)}
                      validation={{ isValid: parseFloat(seg.lines) >= 1, severity: "error" }}
                      helpText="Parallel lines"
                      colorScheme="blue"
                    />
                  </div>

                  {/* Quick ID preview */}
                  <div className="text-[10px] text-center bg-orange-50 rounded p-1 text-orange-700 font-mono">
                    ID = {seg.od} − 2×{seg.thickness} ={" "}
                    <strong>{(parseFloat(seg.od) - 2 * parseFloat(seg.thickness)).toFixed(1)} mm</strong>
                    {" | "}
                    ~{(Math.PI * ((parseFloat(seg.od) - 2 * parseFloat(seg.thickness)) / 2000) ** 2 * parseFloat(seg.length) * 1000).toFixed(2)} L
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={addSegment}
              className="w-full border-dashed border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              + Add Pipe Segment
            </Button>
          </TabsContent>

          {/* ═════ TAB 2: FITTINGS ══════════════════════ */}
          <TabsContent value="fittings" className="space-y-3 pt-3">
            <p className="text-xs text-slate-500">
              Fittings add karein — inhe pipe ke equivalent length mein convert karke total hold-up mein add kiya jaata hai.
            </p>

            {/* Fitting buttons */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(FITTING_L_EQUIV).map(type => (
                <button
                  key={type}
                  onClick={() => addFitting(type)}
                  className="px-3 py-1.5 rounded-lg border border-orange-200 bg-white text-xs font-semibold text-orange-700 hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                >
                  + {type}
                </button>
              ))}
            </div>

            {/* Added fittings */}
            {fittings.length > 0 ? (
              <Card className="border-orange-100 bg-white">
                <CardContent className="p-3 space-y-2">
                  {fittings.map(f => (
                    <div key={f.type} className="flex items-center gap-3">
                      <span className="flex-1 text-sm text-slate-700">{f.type}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setFittings(p => p.map(ff => ff.type === f.type ? { ...ff, count: String(Math.max(1, parseInt(ff.count) - 1)) } : ff))}
                          className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold text-sm flex items-center justify-center hover:bg-orange-200"
                        >−</button>
                        <span className="w-6 text-center font-bold text-sm">{f.count}</span>
                        <button
                          onClick={() => setFittings(p => p.map(ff => ff.type === f.type ? { ...ff, count: String(parseInt(ff.count) + 1) } : ff))}
                          className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold text-sm flex items-center justify-center hover:bg-orange-200"
                        >+</button>
                      </div>
                      <span className="text-[10px] text-slate-400 w-12 text-right">
                        {FITTING_L_EQUIV[f.type]}D equiv
                      </span>
                      <button onClick={() => removeFitting(f.type)} className="text-red-400 hover:text-red-600 text-xs">✕</button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-4 text-slate-400 text-xs border border-dashed border-slate-200 rounded-lg">
                Koi fitting add nahi ki — upar se click karein
              </div>
            )}

            <Alert className="bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-xs text-blue-700">
                Equivalent length = fitting ke L/D value × pipe ID. Yeh volume pipeline hold-up mein add hoga.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* ═════ TAB 3: RESULTS ═══════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Main KPIs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-orange-600 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-80 font-bold">Total Hold-up</div>
                    <div className="text-3xl font-black">{result.totalSystemVol.toFixed(1)}</div>
                    <div className="text-xs opacity-70">Litres (pipes + fittings)</div>
                  </div>
                  <div className="bg-slate-800 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-70 font-bold">Total CIP Water</div>
                    <div className="text-3xl font-black text-cyan-400">{result.totalCIPVol.toFixed(0)}</div>
                    <div className="text-xs opacity-60">Litres (4-stage)</div>
                  </div>
                </div>

                {/* Segment breakdown */}
                <Card className="bg-white border-orange-100">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-xs text-orange-700 font-bold uppercase">Segment Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2">
                    {result.segResults.map((r: any) => (
                      <div key={r.label} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-slate-700">{r.label}</span>
                          <span className="font-bold text-orange-600">{r.totalVol.toFixed(2)} L</span>
                        </div>
                        <div className="text-[10px] text-slate-400 flex gap-4">
                          <span>OD {r.OD}mm · ID {r.ID.toFixed(1)}mm</span>
                          <span>{r.Len}m × {r.N} line(s)</span>
                          <span>{r.lPerM.toFixed(3)} L/m</span>
                          <span className={r.reynolds >= 4000 ? "text-green-600" : "text-red-500"}>
                            CIP Re={r.reynolds.toFixed(0)} {r.reynolds >= 4000 ? "✓ turbulent" : "⚠ laminar"}
                          </span>
                        </div>
                      </div>
                    ))}
                    {result.fittingVol > 0 && (
                      <div className="border-t pt-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-slate-700">Fittings (equivalent)</span>
                          <span className="font-bold text-purple-600">{result.fittingVol.toFixed(2)} L</span>
                        </div>
                        {result.fittingDetails.map((fd: any) => (
                          <div key={fd.type} className="text-[10px] text-slate-400 flex justify-between px-2">
                            <span>{fd.type} × {fd.count}</span>
                            <span>{fd.vol.toFixed(3)} L</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="border-t-2 pt-2 flex justify-between font-bold text-base text-orange-800">
                      <span>Grand Total Hold-up</span>
                      <span>{result.totalSystemVol.toFixed(2)} L</span>
                    </div>
                  </CardContent>
                </Card>

                {/* CIP Stage Breakdown */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader className="p-3 pb-1 border-b border-blue-100">
                    <CardTitle className="text-sm text-blue-800">🧹 CIP Volume Per Stage</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {[
                      { stage: "Pre-Rinse (water flush)",    vol: result.preRinseVol,   mult: "1.5×", color: "text-blue-600"   },
                      { stage: "Caustic Circulation (NaOH)", vol: result.causticVol,    mult: "2.0×", color: "text-red-600"    },
                      { stage: "Acid Wash (HNO₃/HCl)",      vol: result.acidVol,       mult: "2.0×", color: "text-yellow-600" },
                      { stage: "Final Rinse",                vol: result.finalRinseVol, mult: "1.5×", color: "text-green-600"  },
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <div>
                          <span className={`font-semibold ${s.color}`}>{s.stage}</span>
                          <span className="text-[10px] text-slate-400 ml-2">({s.mult} hold-up)</span>
                        </div>
                        <span className="font-bold">{s.vol.toFixed(0)} L</span>
                      </div>
                    ))}
                    <div className="border-t-2 pt-2 flex justify-between font-black text-blue-800">
                      <span>Total CIP Water / Cycle</span>
                      <span>{result.totalCIPVol.toFixed(0)} L</span>
                    </div>
                    <div className="text-[10px] text-blue-500 mt-1">
                      CIP pump sizing: ≥ {(result.maxCipFlow / 1000).toFixed(1)} m³/hr to achieve 1.5 m/s velocity
                    </div>
                  </CardContent>
                </Card>

                {/* Milk Loss Cost */}
                <div className="grid grid-cols-2 gap-3">
                  <ResultCard
                    title="Per Meter (main line)"
                    value={(result.segResults[0]?.lPerM || 0).toFixed(3)}
                    unit="L/m"
                    colorScheme="orange"
                    confidence="high"
                  />
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                    <div className="text-[10px] text-red-500 font-bold uppercase">Milk Loss Value</div>
                    <div className="text-xl font-black text-red-700">
                      ₹ {result.milkLossCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-[10px] text-red-400">per flush @ ₹35/L</div>
                  </div>
                </div>

                {/* Formula note */}
                <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
                  <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas:</div>
                  <div>ID = OD − 2 × Wall_thickness</div>
                  <div>V = π × (ID/2)² × Length</div>
                  <div>CIP velocity = Q / (π × (ID/2)²) ≥ 1.5 m/s for turbulent flow</div>
                  <div>Re = ρvD/μ ≥ 4000 for turbulent (CIP effective)</div>
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Cylinder className="h-10 w-10 mx-auto mb-3 text-orange-200" />
                <p>Segments add karein aur <strong>Calculate</strong> press karein.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* ── CALCULATE BUTTON ─────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold shadow-md"
        >
          <Cylinder className="w-4 h-4 mr-2" />
          Calculate Hold-up & CIP
        </Button>
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED CULTURE DOSING & COSTING CALCULATOR
// Drop-in Replacement for CultureDosingCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana CultureDosingCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── CULTURE DATABASE ─────────────────────────────────────
const CULTURE_DB = {
  // DVS Cultures
  dvs: {
    "Curd / Dahi (Meso)":        { dose: 20,  pouchU: 50,  price: 650,  temp: "30–32°C", time: "6–8 hr",  ph: "4.6" },
    "Probiotic Dahi (LGG)":      { dose: 25,  pouchU: 50,  price: 1200, temp: "37°C",    time: "5–7 hr",  ph: "4.5" },
    "Shrikhand Starter":         { dose: 20,  pouchU: 50,  price: 750,  temp: "30°C",    time: "8–10 hr", ph: "4.5" },
    "Lassi / Chaas Starter":     { dose: 15,  pouchU: 50,  price: 550,  temp: "30–32°C", time: "5–6 hr",  ph: "4.6" },
    "Yoghurt (Thermo)":          { dose: 20,  pouchU: 50,  price: 850,  temp: "42–45°C", time: "4–6 hr",  ph: "4.5" },
    "Greek Yoghurt":             { dose: 25,  pouchU: 50,  price: 1100, temp: "42°C",    time: "5–7 hr",  ph: "4.2" },
    "Cultured Butter / Cream":   { dose: 10,  pouchU: 50,  price: 900,  temp: "20–22°C", time: "14–18 hr",ph: "4.8" },
    "Soft Cheese (Cottage)":     { dose: 20,  pouchU: 100, price: 1400, temp: "30°C",    time: "6–8 hr",  ph: "4.6" },
    "Acidophilus Milk":          { dose: 30,  pouchU: 50,  price: 1500, temp: "37°C",    time: "4–6 hr",  ph: "4.3" },
    "Kefir":                     { dose: 15,  pouchU: 50,  price: 950,  temp: "20–25°C", time: "20–24 hr",ph: "4.4" },
  },
  // Bulk Starter Cultures
  bulk: {
    "Standard Curd Starter":     { rate: 2.0, costPerL: 35,  temp: "30–32°C", inoTime: "6–8 hr"  },
    "Thermophilic (Yoghurt)":    { rate: 2.0, costPerL: 40,  temp: "42–45°C", inoTime: "4–6 hr"  },
    "Mesophilic (Butter/Cream)": { rate: 1.0, costPerL: 45,  temp: "22°C",    inoTime: "16–18 hr" },
    "High-Acid (Shrikhand)":     { rate: 2.5, costPerL: 38,  temp: "30°C",    inoTime: "8–10 hr"  },
    "Probiotic Blend":           { rate: 1.5, costPerL: 75,  temp: "37°C",    inoTime: "5–7 hr"   },
  },
} as const;

// ── MAIN COMPONENT ────────────────────────────────────────
function CultureDosingCalc() {
  const { toast } = useToast();

  const [method, setMethod] = useState<"dvs" | "bulk">("dvs");

  // DVS inputs
  const [dvsInp, setDvsInp] = useState({
    culture:      "Curd / Dahi (Meso)" as keyof typeof CULTURE_DB.dvs,
    batchSize:    "2000",
    dvsRate:      "20",
    pouchU:       "50",
    price:        "650",
    batches:      "1",    // batches per day
    workingDays:  "26",
  });

  // Bulk inputs
  const [bulkInp, setBulkInp] = useState({
    culture:      "Standard Curd Starter" as keyof typeof CULTURE_DB.bulk,
    batchSize:    "2000",
    bulkRate:     "2.0",
    costPerL:     "35",
    batches:      "1",
    workingDays:  "26",
  });

  const [result, setResult] = useState<any>(null);
  const { validatePositive } = useInputValidation();

  // Auto-fill from culture selection
  const applyDvsCulture = (name: keyof typeof CULTURE_DB.dvs) => {
    const c = CULTURE_DB.dvs[name];
    setDvsInp(p => ({ ...p, culture: name, dvsRate: String(c.dose), pouchU: String(c.pouchU), price: String(c.price) }));
  };

  const applyBulkCulture = (name: keyof typeof CULTURE_DB.bulk) => {
    const c = CULTURE_DB.bulk[name];
    setBulkInp(p => ({ ...p, culture: name, bulkRate: String(c.rate), costPerL: String(c.costPerL) }));
  };

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    if (method === "dvs") {
      const Vol       = parseFloat(dvsInp.batchSize)    || 0;
      const rate      = parseFloat(dvsInp.dvsRate)      || 0;
      const pouchU    = parseFloat(dvsInp.pouchU)       || 1;
      const price     = parseFloat(dvsInp.price)        || 0;
      const batches   = parseFloat(dvsInp.batches)      || 1;
      const days      = parseFloat(dvsInp.workingDays)  || 26;

      if (Vol <= 0 || rate <= 0) {
        toast({ variant: "destructive", title: "Invalid values" }); return;
      }

      const totalUnits      = (Vol / 1000) * rate;
      const pouchesExact    = totalUnits / pouchU;
      const pouchesCeil     = Math.ceil(pouchesExact);
      const costBatch       = pouchesExact * price;      // economic cost (exact)
      const costCeil        = pouchesCeil  * price;      // procurement cost (rounded up)
      const costPerL        = costBatch / Vol;
      const dailyCost       = costBatch * batches;
      const monthlyCost     = dailyCost * days;
      const monthlyPouches  = Math.ceil(pouchesExact * batches * days);

      const cultureInfo = CULTURE_DB.dvs[dvsInp.culture as keyof typeof CULTURE_DB.dvs];

      setResult({
        method: "dvs",
        totalUnits, pouchesExact, pouchesCeil,
        costBatch, costCeil, costPerL,
        dailyCost, monthlyCost, monthlyPouches,
        cultureInfo,
        Vol, batches, days,
      });

    } else {
      const Vol       = parseFloat(bulkInp.batchSize)   || 0;
      const rate      = parseFloat(bulkInp.bulkRate)    || 0;
      const cpl       = parseFloat(bulkInp.costPerL)    || 0;
      const batches   = parseFloat(bulkInp.batches)     || 1;
      const days      = parseFloat(bulkInp.workingDays) || 26;

      if (Vol <= 0 || rate <= 0) {
        toast({ variant: "destructive", title: "Invalid values" }); return;
      }

      const starterL    = Vol * (rate / 100);
      const milkForSt   = starterL;               // 1:1 approximation for propagation
      const costBatch   = starterL * cpl;
      const costPerL    = costBatch / Vol;
      const dailyCost   = costBatch * batches;
      const monthlyCost = dailyCost * days;
      const monthlyL    = starterL * batches * days;

      // Bulk starter tank size recommendation
      const tankSizeL   = Math.ceil(starterL * 1.2 / 50) * 50; // +20% buffer, round to 50L

      const cultureInfo = CULTURE_DB.bulk[bulkInp.culture as keyof typeof CULTURE_DB.bulk];

      setResult({
        method: "bulk",
        starterL, costBatch, costPerL,
        dailyCost, monthlyCost, monthlyL,
        tankSizeL, cultureInfo,
        Vol, batches, days,
      });
    }

    toast({ title: "✅ Calculated", description: "Culture dosing complete." });
  }, [method, dvsInp, bulkInp, toast]);

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-pink-200 bg-pink-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-t-lg border-b border-pink-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-pink-800">
            <Pipette className="w-5 h-5 text-pink-600" />
            Fermentation Culture Dosing
          </span>
          {result && (
            <Badge className="bg-pink-600 text-white text-sm px-3 py-1">
              ₹{result.costPerL.toFixed(2)}/L
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-pink-600 text-xs">
          DVS pouches · Bulk starter · Monthly budget · Fermentation parameters
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── METHOD TOGGLE ──────────────────────────── */}
        <div className="flex bg-white border border-pink-200 rounded-lg p-1 gap-1">
          {(["dvs", "bulk"] as const).map(m => (
            <button
              key={m}
              onClick={() => { setMethod(m); setResult(null); }}
              className={`flex-1 py-2 rounded-md text-xs font-bold transition-all ${
                method === m
                  ? "bg-pink-600 text-white shadow"
                  : "text-slate-500 hover:text-pink-600"
              }`}
            >
              {m === "dvs" ? "💊 DVS (Pouches)" : "🧪 Bulk Starter (%)"}
            </button>
          ))}
        </div>

        {/* ── DVS INPUTS ─────────────────────────────── */}
        {method === "dvs" && (
          <div className="space-y-3">
            {/* Culture selector */}
            <div className="space-y-1">
              <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Culture Type</Label>
              <Select
                value={dvsInp.culture}
                onValueChange={v => applyDvsCulture(v as keyof typeof CULTURE_DB.dvs)}
              >
                <SelectTrigger className="h-10 bg-white border-pink-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(CULTURE_DB.dvs) as Array<keyof typeof CULTURE_DB.dvs>).map(k => (
                    <SelectItem key={k} value={k}>
                      <div className="flex flex-col">
                        <span className="font-semibold">{k}</span>
                        <span className="text-[10px] text-slate-400">
                          {CULTURE_DB.dvs[k].dose} U/KL · {CULTURE_DB.dvs[k].temp} · {CULTURE_DB.dvs[k].time}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Culture info pill */}
              {(() => {
                const c = CULTURE_DB.dvs[dvsInp.culture];
                return (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {[
                      { label: "Temp", value: c.temp },
                      { label: "Time", value: c.time },
                      { label: "Target pH", value: c.ph },
                    ].map(i => (
                      <span key={i.label} className="bg-pink-100 text-pink-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {i.label}: {i.value}
                      </span>
                    ))}
                  </div>
                );
              })()}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ValidatedInput
                label="Batch Size"
                value={dvsInp.batchSize}
                onChange={v => setDvsInp(p => ({ ...p, batchSize: v }))}
                validation={validatePositive(dvsInp.batchSize, "Batch size")}
                unit="L"
                colorScheme="pink"
              />
              <ValidatedInput
                label="Dose Rate"
                value={dvsInp.dvsRate}
                onChange={v => setDvsInp(p => ({ ...p, dvsRate: v }))}
                validation={validatePositive(dvsInp.dvsRate, "Dose rate")}
                unit="U/KL"
                helpText="Standard: 20–50 U"
                colorScheme="pink"
              />
              <ValidatedInput
                label="Pouch Strength"
                value={dvsInp.pouchU}
                onChange={v => setDvsInp(p => ({ ...p, pouchU: v }))}
                validation={validatePositive(dvsInp.pouchU, "Pouch strength")}
                unit="Units"
                helpText="e.g. 50U, 100U, 200U"
                colorScheme="pink"
              />
              <ValidatedInput
                label="Price per Pouch"
                value={dvsInp.price}
                onChange={v => setDvsInp(p => ({ ...p, price: v }))}
                validation={validatePositive(dvsInp.price, "Price")}
                unit="₹"
                colorScheme="green"
              />
              <ValidatedInput
                label="Batches / Day"
                value={dvsInp.batches}
                onChange={v => setDvsInp(p => ({ ...p, batches: v }))}
                validation={validatePositive(dvsInp.batches, "Batches")}
                colorScheme="blue"
              />
              <ValidatedInput
                label="Working Days / Month"
                value={dvsInp.workingDays}
                onChange={v => setDvsInp(p => ({ ...p, workingDays: v }))}
                validation={validatePositive(dvsInp.workingDays, "Working days")}
                colorScheme="blue"
              />
            </div>
          </div>
        )}

        {/* ── BULK INPUTS ─────────────────────────────── */}
        {method === "bulk" && (
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Starter Type</Label>
              <Select
                value={bulkInp.culture}
                onValueChange={v => applyBulkCulture(v as keyof typeof CULTURE_DB.bulk)}
              >
                <SelectTrigger className="h-10 bg-white border-pink-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(CULTURE_DB.bulk) as Array<keyof typeof CULTURE_DB.bulk>).map(k => (
                    <SelectItem key={k} value={k}>
                      <div className="flex flex-col">
                        <span className="font-semibold">{k}</span>
                        <span className="text-[10px] text-slate-400">
                          {CULTURE_DB.bulk[k].rate}% · {CULTURE_DB.bulk[k].temp} · {CULTURE_DB.bulk[k].inoTime}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(() => {
                const c = CULTURE_DB.bulk[bulkInp.culture];
                return (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {[
                      { label: "Incubation Temp", value: c.temp },
                      { label: "Set Time", value: c.inoTime },
                    ].map(i => (
                      <span key={i.label} className="bg-pink-100 text-pink-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {i.label}: {i.value}
                      </span>
                    ))}
                  </div>
                );
              })()}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ValidatedInput
                label="Batch Size"
                value={bulkInp.batchSize}
                onChange={v => setBulkInp(p => ({ ...p, batchSize: v }))}
                validation={validatePositive(bulkInp.batchSize, "Batch size")}
                unit="L"
                colorScheme="pink"
              />
              <ValidatedInput
                label="Inoculation %"
                value={bulkInp.bulkRate}
                onChange={v => setBulkInp(p => ({ ...p, bulkRate: v }))}
                validation={validatePositive(bulkInp.bulkRate, "Rate")}
                unit="%"
                helpText="Standard: 1–3%"
                colorScheme="pink"
              />
              <ValidatedInput
                label="Starter Cost"
                value={bulkInp.costPerL}
                onChange={v => setBulkInp(p => ({ ...p, costPerL: v }))}
                validation={validatePositive(bulkInp.costPerL, "Cost")}
                unit="₹/L"
                colorScheme="green"
              />
              <ValidatedInput
                label="Batches / Day"
                value={bulkInp.batches}
                onChange={v => setBulkInp(p => ({ ...p, batches: v }))}
                validation={validatePositive(bulkInp.batches, "Batches")}
                colorScheme="blue"
              />
              <div className="col-span-2">
                <ValidatedInput
                  label="Working Days / Month"
                  value={bulkInp.workingDays}
                  onChange={v => setBulkInp(p => ({ ...p, workingDays: v }))}
                  validation={validatePositive(bulkInp.workingDays, "Working days")}
                  colorScheme="blue"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── CALCULATE BUTTON ───────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold shadow-md"
        >
          <Pipette className="w-4 h-4 mr-2" />
          Calculate Culture Dosing
        </Button>

        {/* ── RESULTS ────────────────────────────────── */}
        {result && (
          <div className="space-y-3 animate-in fade-in">

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-pink-600 text-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-[10px] uppercase opacity-80 font-bold">
                  {result.method === "dvs" ? "Units Required" : "Starter Required"}
                </div>
                <div className="text-2xl font-black">
                  {result.method === "dvs"
                    ? `${result.totalUnits.toFixed(1)} U`
                    : `${result.starterL.toFixed(1)} L`}
                </div>
                <div className="text-xs opacity-70">per batch of {result.Vol} L</div>
              </div>
              <div className="bg-slate-800 text-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-[10px] uppercase opacity-70 font-bold">Cost / Litre Milk</div>
                <div className="text-2xl font-black text-yellow-300">
                  ₹ {result.costPerL.toFixed(3)}
                </div>
                <div className="text-xs opacity-60">culture cost per L</div>
              </div>
            </div>

            {/* DVS: Pouch details */}
            {result.method === "dvs" && (
              <Card className="bg-white border-pink-100">
                <CardHeader className="p-3 pb-1 border-b border-pink-100">
                  <CardTitle className="text-xs text-pink-700 font-bold uppercase">💊 Pouch Calculation</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Exact pouches needed</span>
                    <span className="font-bold">{result.pouchesExact.toFixed(3)} pouches</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Procurement quantity (ceil)</span>
                    <span className="font-bold text-orange-600">{result.pouchesCeil} pouches</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Economic batch cost</span>
                    <span className="font-bold text-green-700">₹ {result.costBatch.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>If full pouch opened</span>
                    <span>₹ {result.costCeil.toFixed(2)} (wastage: ₹{(result.costCeil - result.costBatch).toFixed(2)})</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Bulk: Tank sizing */}
            {result.method === "bulk" && (
              <Card className="bg-white border-pink-100">
                <CardHeader className="p-3 pb-1 border-b border-pink-100">
                  <CardTitle className="text-xs text-pink-700 font-bold uppercase">🧪 Bulk Starter Details</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Starter required / batch</span>
                    <span className="font-bold">{result.starterL.toFixed(1)} L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Bulk tank size (recommended)</span>
                    <span className="font-bold text-orange-600">{result.tankSizeL} L (+20% buffer)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Batch cost</span>
                    <span className="font-bold text-green-700">₹ {result.costBatch.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Monthly summary */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none">
              <CardHeader className="p-3 pb-1">
                <CardTitle className="text-xs text-slate-300 font-bold uppercase">📅 Monthly Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Batches/month ({result.batches}/day × {result.days} days)</span>
                  <span className="font-bold text-cyan-400">{result.batches * result.days} batches</span>
                </div>
                {result.method === "dvs" ? (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pouches to procure</span>
                    <span className="font-bold text-yellow-300">{result.monthlyPouches} pouches</span>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Starter consumed</span>
                    <span className="font-bold text-yellow-300">{result.monthlyL.toFixed(0)} L</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-700 pt-2">
                  <span className="text-slate-300 font-bold">Monthly Culture Cost</span>
                  <span className="font-black text-green-300 text-base">
                    ₹ {result.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Fermentation process guide */}
            {result.cultureInfo && (
              <Alert className="bg-pink-50 border-pink-200">
                <Pipette className="h-4 w-4 text-pink-600" />
                <AlertTitle className="text-pink-800 text-sm">
                  Fermentation Guide — {method === "dvs" ? dvsInp.culture : bulkInp.culture}
                </AlertTitle>
                <AlertDescription className="text-xs text-pink-700 space-y-1 mt-1">
                  {method === "dvs" ? (
                    <>
                      <div>🌡️ Incubation temp: <strong>{result.cultureInfo.temp}</strong></div>
                      <div>⏱️ Set time: <strong>{result.cultureInfo.time}</strong></div>
                      <div>🧪 Target end pH: <strong>{result.cultureInfo.ph}</strong></div>
                      <div>📦 Pouch strength: <strong>{result.cultureInfo.pouchU} Units</strong></div>
                    </>
                  ) : (
                    <>
                      <div>🌡️ Incubation temp: <strong>{result.cultureInfo.temp}</strong></div>
                      <div>⏱️ Incubation time: <strong>{result.cultureInfo.inoTime}</strong></div>
                      <div>📊 Standard inoculation: <strong>{result.cultureInfo.rate}%</strong></div>
                    </>
                  )}
                </AlertDescription>
              </Alert>
            )}

            {/* Formula note */}
            <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
              <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas:</div>
              {result.method === "dvs" ? (
                <>
                  <div>Total Units = (Batch_L / 1000) × Dose_rate = ({result.Vol}/1000) × {dvsInp.dvsRate} = {result.totalUnits.toFixed(2)} U</div>
                  <div>Pouches = Total_Units / Pouch_strength = {result.totalUnits.toFixed(2)} / {dvsInp.pouchU} = {result.pouchesExact.toFixed(3)}</div>
                  <div>Cost/batch = Pouches × Price = {result.pouchesExact.toFixed(3)} × ₹{dvsInp.price} = ₹{result.costBatch.toFixed(2)}</div>
                </>
              ) : (
                <>
                  <div>Starter_L = Batch_L × (Rate/100) = {result.Vol} × ({bulkInp.bulkRate}/100) = {result.starterL.toFixed(2)} L</div>
                  <div>Cost/batch = Starter_L × Rate = {result.starterL.toFixed(2)} × ₹{bulkInp.costPerL} = ₹{result.costBatch.toFixed(2)}</div>
                </>
              )}
              <div>Monthly = Cost_batch × batches/day × days = ₹{result.costBatch.toFixed(2)} × {result.batches} × {result.days} = ₹{result.monthlyCost.toFixed(0)}</div>
            </div>

          </div>
        )}
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED ETP POLLUTION LOAD AUDIT CALCULATOR
// Drop-in Replacement for EtpLoadCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana EtpLoadCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── PRODUCT COD/BOD DATABASE ─────────────────────────────
// COD/BOD in kg per Litre/Kg of product
// Source: CPCB dairy effluent guidelines + industry data
const ETP_PRODUCT_DB = {
  milk_whole:  { label: "🥛 Whole Milk (3.5% fat)",   cod: 0.210, bod: 0.140, tss: 0.008, category: "milk"    },
  milk_toned:  { label: "🥛 Toned Milk (1.5% fat)",   cod: 0.120, bod: 0.080, tss: 0.006, category: "milk"    },
  milk_skim:   { label: "🥛 Skim Milk (0.1% fat)",    cod: 0.100, bod: 0.060, tss: 0.005, category: "milk"    },
  cream_40:    { label: "🧈 Cream (40% fat)",          cod: 0.450, bod: 0.250, tss: 0.015, category: "fat"     },
  butter_milk: { label: "🫙 Butter Milk / Chach",      cod: 0.080, bod: 0.050, tss: 0.004, category: "milk"    },
  whey_sweet:  { label: "🧀 Sweet Whey (cheese)",      cod: 0.070, bod: 0.050, tss: 0.006, category: "whey"    },
  whey_acid:   { label: "🧀 Acid Whey (paneer/curd)",  cod: 0.090, bod: 0.065, tss: 0.007, category: "whey"    },
  yoghurt:     { label: "🫙 Yoghurt / Curd",           cod: 0.170, bod: 0.110, tss: 0.010, category: "ferment" },
  ice_cream:   { label: "🍦 Ice Cream Mix",            cod: 0.300, bod: 0.180, tss: 0.020, category: "frozen"  },
  ghee:        { label: "🧈 Ghee / Clarified Butter",  cod: 0.800, bod: 0.400, tss: 0.050, category: "fat"     },
  condensed:   { label: "🥫 Condensed Milk",           cod: 0.380, bod: 0.220, tss: 0.025, category: "conc"    },
  khoa:        { label: "🍮 Khoa / Mawa",              cod: 0.420, bod: 0.260, tss: 0.030, category: "conc"    },
  cip_caustic: { label: "🧹 CIP Caustic Effluent",     cod: 0.005, bod: 0.002, tss: 0.001, category: "cip"     },
  cip_acid:    { label: "🧹 CIP Acid Effluent",        cod: 0.003, bod: 0.001, tss: 0.001, category: "cip"     },
  wash_water:  { label: "💧 General Wash Water",       cod: 0.002, bod: 0.001, tss: 0.001, category: "wash"    },
} as const;

// ── CPCB DISCHARGE STANDARDS (mg/L) ──────────────────────
const CPCB_STANDARDS = {
  COD:  250,   // mg/L for inland surface water
  BOD:  30,    // mg/L
  TSS:  100,   // mg/L
  pH:   { min: 6.5, max: 9.0 },
};

// ── MULTI-STREAM STATE ────────────────────────────────────
interface EtpStream {
  id:      string;
  product: keyof typeof ETP_PRODUCT_DB;
  qty:     string;
  label:   string;
}

// ── MAIN COMPONENT ────────────────────────────────────────
function EtpLoadCalc() {
  const { toast } = useToast();

  const [streams, setStreams] = useState<EtpStream[]>([
    { id: "s1", product: "milk_whole", qty: "50", label: "Milk Spill" },
  ]);

  const [treatCostCOD,  setTreatCostCOD]  = useState("5");   // ₹/kg COD
  const [effluentFlow,  setEffluentFlow]  = useState("50");  // m³/day ETP inlet
  const [operatingDays, setOperatingDays] = useState("300"); // days/year

  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"streams" | "results" | "compliance">("streams");

  // ── STREAM HELPERS ─────────────────────────────────────
  const addStream = () => setStreams(p => [
    ...p,
    { id: `s${Date.now()}`, product: "milk_whole", qty: "20", label: `Stream ${p.length + 1}` },
  ]);
  const removeStream = (id: string) => { if (streams.length > 1) setStreams(p => p.filter(s => s.id !== id)); };
  const updateStream = (id: string, key: keyof EtpStream, val: string) =>
    setStreams(p => p.map(s => s.id === id ? { ...s, [key]: val } : s));

  // ── CALCULATE ──────────────────────────────────────────
  const calculate = useCallback(() => {
    const treatCost = parseFloat(treatCostCOD) || 5;
    const flowM3    = parseFloat(effluentFlow) || 1;
    const opDays    = parseFloat(operatingDays) || 300;

    // Per-stream calculation
    const streamResults = streams.map(s => {
      const prod = ETP_PRODUCT_DB[s.product];
      const qty  = parseFloat(s.qty) || 0;
      return {
        label:  s.label,
        product: prod.label,
        qty,
        cod:    qty * prod.cod,
        bod:    qty * prod.bod,
        tss:    qty * prod.tss,
        category: prod.category,
      };
    });

    const totalCOD_kg  = streamResults.reduce((s, r) => s + r.cod, 0);
    const totalBOD_kg  = streamResults.reduce((s, r) => s + r.bod, 0);
    const totalTSS_kg  = streamResults.reduce((s, r) => s + r.tss, 0);

    // Concentration in effluent (mg/L = g/m³)
    const flowL        = flowM3 * 1000;
    const codMgL       = (totalCOD_kg * 1000 * 1000) / flowL;
    const bodMgL       = (totalBOD_kg * 1000 * 1000) / flowL;
    const tssMgL       = (totalTSS_kg * 1000 * 1000) / flowL;

    // CPCB compliance
    const codCompliant = codMgL <= CPCB_STANDARDS.COD;
    const bodCompliant = bodMgL <= CPCB_STANDARDS.BOD;
    const tssCompliant = tssMgL <= CPCB_STANDARDS.TSS;

    // Minimum dilution water needed to meet CPCB norms
    const dilutionCOD  = totalCOD_kg * 1e6 / CPCB_STANDARDS.COD / 1000; // m³
    const dilutionBOD  = totalBOD_kg * 1e6 / CPCB_STANDARDS.BOD / 1000;
    const minDilution  = Math.max(dilutionCOD, dilutionBOD);

    // Population Equivalent (1 PE = 0.06 kg BOD/day)
    const PE = totalBOD_kg / 0.06;

    // Treatment costs
    const dayCostCOD   = totalCOD_kg * treatCost;
    const annualCost   = dayCostCOD * opDays;

    // Biogas potential (anaerobic pre-treatment)
    // ~0.35 m³ CH4 per kg COD removed at 70% efficiency
    const biogasM3     = totalCOD_kg * 0.35 * 0.70;
    const biogasValue  = biogasM3 * 30; // ₹30/m³ equivalent CNG value

    // Water-to-milk ratio (WMR) — industry benchmark ≤ 2.5 L water per L milk
    const totalMilkL   = streams
      .filter(s => ETP_PRODUCT_DB[s.product].category === "milk")
      .reduce((s, r) => s + (parseFloat(r.qty) || 0), 0);
    const wmr          = totalMilkL > 0 ? flowM3 * 1000 / totalMilkL : null;

    const warnings: string[] = [];
    if (!codCompliant) warnings.push(`COD ${codMgL.toFixed(0)} mg/L > CPCB limit ${CPCB_STANDARDS.COD} mg/L. Needs ${(minDilution - flowM3).toFixed(1)} m³/day extra dilution or better treatment.`);
    if (!bodCompliant) warnings.push(`BOD ${bodMgL.toFixed(0)} mg/L > CPCB limit ${CPCB_STANDARDS.BOD} mg/L. Improve aeration / SBR efficiency.`);
    if (PE > 500)      warnings.push(`Population equivalent ${PE.toFixed(0)} PE is high. Ensure ETP capacity matches.`);
    if (wmr && wmr > 3) warnings.push(`Water:Milk ratio ${wmr.toFixed(1)} > 2.5 benchmark. Review CIP water usage & floor washing.`);

    setResult({
      streamResults, totalCOD_kg, totalBOD_kg, totalTSS_kg,
      codMgL, bodMgL, tssMgL,
      codCompliant, bodCompliant, tssCompliant,
      PE, dayCostCOD, annualCost,
      biogasM3, biogasValue, minDilution,
      wmr, warnings, flowM3, opDays,
    });

    setActiveTab("results");
    toast({
      title: "✅ Calculated",
      description: `COD: ${totalCOD_kg.toFixed(2)} kg/day | ${codMgL.toFixed(0)} mg/L`,
    });
  }, [streams, treatCostCOD, effluentFlow, operatingDays, toast]);

  // ── RENDER ─────────────────────────────────────────────
  return (
    <Card className="border-stone-300 bg-stone-50/30">
      <CardHeader className="pb-3 bg-gradient-to-r from-stone-50 to-red-50 rounded-t-lg border-b border-stone-200">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-stone-800">
            <Trash2 className="w-5 h-5 text-red-600" />
            ETP Pollution Load Audit
          </span>
          {result && (
            <Badge className={`text-white text-sm px-3 py-1 ${result.codCompliant && result.bodCompliant ? "bg-green-600" : "bg-red-600"}`}>
              {result.codCompliant && result.bodCompliant ? "✓ Compliant" : "⚠ Exceeds Norms"}
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-stone-500 text-xs">
          Multi-stream COD/BOD · CPCB compliance · Biogas potential · Annual cost
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="streams"    className="text-xs">🏭 Streams</TabsTrigger>
            <TabsTrigger value="results"    className="text-xs">📊 Results</TabsTrigger>
            <TabsTrigger value="compliance" className="text-xs">📋 CPCB</TabsTrigger>
          </TabsList>

          {/* ═════ TAB 1: STREAMS ═══════════════════════ */}
          <TabsContent value="streams" className="space-y-3 pt-3">
            <p className="text-xs text-slate-500">
              Plant ke different waste streams alag-alag add karein — milk spill, CIP effluent, whey drain, wash water, etc.
            </p>

            {streams.map((s, idx) => {
              const prod = ETP_PRODUCT_DB[s.product];
              return (
                <Card key={s.id} className="border-stone-200 bg-white">
                  <CardHeader className="p-3 pb-2 bg-stone-50 rounded-t-lg border-b border-stone-100 flex flex-row items-center justify-between">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <input
                        className="text-xs font-bold text-stone-800 bg-transparent border-none outline-none w-full"
                        value={s.label}
                        onChange={e => updateStream(s.id, "label", e.target.value)}
                        placeholder="Stream name…"
                      />
                    </div>
                    {streams.length > 1 && (
                      <button onClick={() => removeStream(s.id)} className="text-red-400 hover:text-red-600 text-xs font-bold ml-2">✕</button>
                    )}
                  </CardHeader>
                  <CardContent className="p-3 space-y-2">
                    <Select
                      value={s.product}
                      onValueChange={v => updateStream(s.id, "product", v)}
                    >
                      <SelectTrigger className="h-9 text-xs bg-white border-stone-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(Object.entries(ETP_PRODUCT_DB) as [keyof typeof ETP_PRODUCT_DB, any][]).map(([key, val]) => (
                          <SelectItem key={key} value={key}>
                            <div className="flex flex-col">
                              <span className="font-semibold">{val.label}</span>
                              <span className="text-[10px] text-slate-400">
                                COD: {val.cod} kg/L · BOD: {val.bod} kg/L
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* COD factor pills */}
                    <div className="flex gap-2">
                      {[
                        { label: "COD", value: prod.cod, color: "bg-red-100 text-red-800" },
                        { label: "BOD", value: prod.bod, color: "bg-orange-100 text-orange-800" },
                        { label: "TSS", value: prod.tss, color: "bg-yellow-100 text-yellow-800" },
                      ].map(p => (
                        <span key={p.label} className={`${p.color} text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                          {p.label}: {p.value} kg/L
                        </span>
                      ))}
                    </div>

                    <ValidatedInput
                      label={`Quantity (L or kg) — ${s.label}`}
                      value={s.qty}
                      onChange={v => updateStream(s.id, "qty", v)}
                      validation={{ isValid: parseFloat(s.qty) > 0, severity: "error" }}
                      unit="L/kg"
                      helpText={`→ COD: ${(parseFloat(s.qty) * prod.cod || 0).toFixed(2)} kg`}
                      colorScheme="red"
                    />
                  </CardContent>
                </Card>
              );
            })}

            <Button
              variant="outline" size="sm"
              onClick={addStream}
              className="w-full border-dashed border-stone-300 text-stone-600 hover:bg-stone-100"
            >
              + Add Waste Stream
            </Button>

            {/* ETP parameters */}
            <Card className="border-blue-100 bg-blue-50/50">
              <CardHeader className="p-3 pb-2 border-b border-blue-100">
                <CardTitle className="text-xs text-blue-700 font-bold uppercase">⚙️ ETP Parameters</CardTitle>
              </CardHeader>
              <CardContent className="p-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <ValidatedInput
                  label="ETP Inlet Flow"
                  value={effluentFlow}
                  onChange={setEffluentFlow}
                  validation={{ isValid: parseFloat(effluentFlow) > 0, severity: "error" }}
                  unit="m³/day"
                  helpText="Total effluent volume"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Treatment Cost"
                  value={treatCostCOD}
                  onChange={setTreatCostCOD}
                  validation={{ isValid: parseFloat(treatCostCOD) > 0, severity: "error" }}
                  unit="₹/kg COD"
                  helpText="Power + chemicals"
                  colorScheme="green"
                />
                <ValidatedInput
                  label="Operating Days/Year"
                  value={operatingDays}
                  onChange={setOperatingDays}
                  validation={{ isValid: parseFloat(operatingDays) > 0, severity: "error" }}
                  unit="days"
                  colorScheme="blue"
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ═════ TAB 2: RESULTS ═══════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Main KPIs */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "COD Load",    value: result.totalCOD_kg.toFixed(2), unit: "kg/day", color: "bg-red-600"    },
                    { label: "BOD Load",    value: result.totalBOD_kg.toFixed(2), unit: "kg/day", color: "bg-orange-500" },
                    { label: "TSS Load",    value: result.totalTSS_kg.toFixed(2), unit: "kg/day", color: "bg-yellow-600" },
                  ].map(k => (
                    <div key={k.label} className={`${k.color} text-white p-3 rounded-xl text-center shadow`}>
                      <div className="text-[9px] uppercase opacity-80 font-bold">{k.label}</div>
                      <div className="text-xl font-black">{k.value}</div>
                      <div className="text-[9px] opacity-70">{k.unit}</div>
                    </div>
                  ))}
                </div>

                {/* Stream breakdown */}
                <Card className="bg-white border-stone-200">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-xs text-stone-700 font-bold uppercase">Stream Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2">
                    {result.streamResults.map((r: any, i: number) => (
                      <div key={i} className="space-y-0.5">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-slate-700">{r.label}</span>
                          <span className="font-bold text-red-600">COD: {r.cod.toFixed(3)} kg</span>
                        </div>
                        <div className="text-[10px] text-slate-400 flex gap-4">
                          <span>{r.product}</span>
                          <span>{r.qty} L/kg</span>
                          <span>BOD: {r.bod.toFixed(3)} kg</span>
                          <span>TSS: {r.tss.toFixed(3)} kg</span>
                        </div>
                      </div>
                    ))}
                    <div className="border-t-2 pt-2 flex justify-between font-black text-red-800">
                      <span>Total COD</span>
                      <span>{result.totalCOD_kg.toFixed(3)} kg/day</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Population Equivalent + Cost */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-stone-800 text-white p-4 rounded-xl text-center shadow-lg">
                    <div className="text-[10px] uppercase opacity-70 font-bold">Population Equiv.</div>
                    <div className="text-2xl font-black text-yellow-300">{Math.ceil(result.PE)}</div>
                    <div className="text-[10px] opacity-60">human equivalents</div>
                  </div>
                  <div className="bg-white border-2 border-red-200 p-4 rounded-xl text-center">
                    <div className="text-[10px] text-red-500 font-bold uppercase">Daily Treatment Cost</div>
                    <div className="text-2xl font-black text-red-700">₹ {result.dayCostCOD.toFixed(0)}</div>
                    <div className="text-[10px] text-red-400">
                      ₹ {result.annualCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })} / year
                    </div>
                  </div>
                </div>

                {/* Biogas potential */}
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="p-3 pb-1 border-b border-green-100">
                    <CardTitle className="text-sm text-green-800">⚡ Biogas Recovery Potential</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center bg-white p-2 rounded-lg border border-green-100">
                      <div className="text-[10px] text-green-600 font-bold uppercase">CH₄ / day</div>
                      <div className="text-xl font-black text-green-800">{result.biogasM3.toFixed(1)} m³</div>
                    </div>
                    <div className="text-center bg-green-600 text-white p-2 rounded-lg">
                      <div className="text-[10px] opacity-80 font-bold uppercase">Daily Value</div>
                      <div className="text-xl font-black text-yellow-300">
                        ₹ {result.biogasValue.toFixed(0)}
                      </div>
                    </div>
                    <p className="col-span-2 text-[10px] text-green-600">
                      0.35 m³ CH₄/kg COD at 70% conversion. Install anaerobic pre-treatment (UASB/ABR) to recover value.
                      Annual: ₹ {(result.biogasValue * result.opDays).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </p>
                  </CardContent>
                </Card>

                {/* WMR */}
                {result.wmr !== null && (
                  <div className={`p-3 rounded-lg border text-sm flex justify-between items-center ${
                    result.wmr <= 2.5 ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-300"
                  }`}>
                    <span className="font-semibold text-slate-700">Water : Milk Ratio (WMR)</span>
                    <div className="text-right">
                      <div className={`text-lg font-black ${result.wmr <= 2.5 ? "text-green-700" : "text-orange-600"}`}>
                        {result.wmr.toFixed(2)} L/L
                      </div>
                      <div className="text-[10px] text-slate-400">Benchmark: ≤ 2.5 L/L</div>
                    </div>
                  </div>
                )}

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 text-sm">Action Required</AlertTitle>
                    <AlertDescription className="text-xs text-yellow-700 space-y-1">
                      {result.warnings.map((w: string, i: number) => (
                        <div key={i}>⚠️ {w}</div>
                      ))}
                    </AlertDescription>
                  </Alert>
                )}
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Trash2 className="h-10 w-10 mx-auto mb-3 text-stone-200" />
                <p>Streams add karein aur <strong>Calculate</strong> press karein.</p>
              </div>
            )}
          </TabsContent>

          {/* ═════ TAB 3: CPCB COMPLIANCE ═══════════════ */}
          <TabsContent value="compliance" className="space-y-4 pt-3">
            {result ? (
              <>
                <Card className="bg-white border-slate-200">
                  <CardHeader className="p-3 pb-2 border-b">
                    <CardTitle className="text-sm font-bold">📋 CPCB Discharge Standards (Inland)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    {[
                      {
                        param: "COD",
                        measured: result.codMgL,
                        limit:    CPCB_STANDARDS.COD,
                        unit:     "mg/L",
                        ok:       result.codCompliant,
                      },
                      {
                        param: "BOD",
                        measured: result.bodMgL,
                        limit:    CPCB_STANDARDS.BOD,
                        unit:     "mg/L",
                        ok:       result.bodCompliant,
                      },
                      {
                        param: "TSS",
                        measured: result.tssMgL,
                        limit:    CPCB_STANDARDS.TSS,
                        unit:     "mg/L",
                        ok:       result.tssCompliant,
                      },
                    ].map(r => (
                      <div key={r.param} className={`p-3 rounded-lg border ${r.ok ? "bg-green-50 border-green-200" : "bg-red-50 border-red-300"}`}>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-700">{r.param}</span>
                          <span className={`text-lg font-black ${r.ok ? "text-green-700" : "text-red-700"}`}>
                            {r.measured.toFixed(1)} {r.unit}
                          </span>
                        </div>
                        <div className="mt-1">
                          <div className="h-3 bg-slate-100 rounded-full overflow-hidden border">
                            <div
                              className={`h-full rounded-full ${r.ok ? "bg-green-500" : "bg-red-500"}`}
                              style={{ width: `${Math.min((r.measured / r.limit) * 100, 100)}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                            <span>0</span>
                            <span className={r.ok ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                              {r.ok ? `✓ Within limit (${r.limit} ${r.unit})` : `✗ Exceeds limit (${r.limit} ${r.unit})`}
                            </span>
                            <span>{(r.measured / r.limit * 100).toFixed(0)}% of limit</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Minimum dilution needed */}
                {(!result.codCompliant || !result.bodCompliant) && (
                  <Alert className="bg-red-50 border-red-300">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-800 text-sm">Minimum Treatment Required</AlertTitle>
                    <AlertDescription className="text-xs text-red-700 space-y-1">
                      <div>
                        Current ETP flow: <strong>{result.flowM3} m³/day</strong>. To meet CPCB norms, minimum effective treatment volume needed: <strong>{result.minDilution.toFixed(1)} m³/day</strong>.
                      </div>
                      <div>Options: (1) Increase ETP capacity, (2) Reduce product losses, (3) Improve biological treatment efficiency.</div>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Compliance Summary */}
                <div className={`p-4 rounded-xl text-center ${
                  result.codCompliant && result.bodCompliant && result.tssCompliant
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}>
                  <div className="text-2xl font-black mb-1">
                    {result.codCompliant && result.bodCompliant && result.tssCompliant
                      ? "✅ COMPLIANT"
                      : "❌ NON-COMPLIANT"}
                  </div>
                  <div className="text-xs opacity-80">
                    {result.codCompliant && result.bodCompliant && result.tssCompliant
                      ? "All parameters within CPCB inland discharge standards"
                      : "One or more parameters exceed permissible limits"}
                  </div>
                </div>

                {/* Formula */}
                <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
                  <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas:</div>
                  <div>COD_kg = Volume × COD_factor (kg/L) [per stream, then summed]</div>
                  <div>Concentration (mg/L) = (COD_kg × 10⁶) / Flow_L</div>
                  <div>Population Equiv. = BOD_kg / 0.06 (1 PE = 60g BOD/day)</div>
                  <div>Biogas = COD_kg × 0.35 m³/kg × 70% recovery</div>
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Trash2 className="h-10 w-10 mx-auto mb-3 text-stone-200" />
                <p>Pehle calculate karein — tab CPCB analysis aayegi.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* ── CALCULATE BUTTON ───────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-red-700 to-stone-700 hover:from-red-800 hover:to-stone-800 text-white font-bold shadow-md"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Calculate Environmental Load
        </Button>
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED COLD STORE CAPACITY PLANNER
// Drop-in Replacement for StorageCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana StorageCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── CRATE DATABASE ───────────────────────────────────────
const CRATE_DB = {
  milk_std:   { label: "🥛 Std Milk Crate (12L)",     l: 450, w: 350, h: 310, capL: 12,  weightKg: 1.8,  stackMax: 8  },
  milk_large: { label: "🥛 Large Milk Crate (20L)",   l: 600, w: 400, h: 320, capL: 20,  weightKg: 2.2,  stackMax: 7  },
  curd_cup:   { label: "🫙 Curd/Cup Crate (10L)",     l: 425, w: 325, h: 280, capL: 10,  weightKg: 1.6,  stackMax: 8  },
  pouch_tray: { label: "📦 Pouch Tray (6L)",          l: 500, w: 350, h: 150, capL: 6,   weightKg: 0.8,  stackMax: 12 },
  jumbo:      { label: "📦 Jumbo Crate (30L)",        l: 650, w: 450, h: 360, capL: 30,  weightKg: 3.0,  stackMax: 6  },
  butter_box: { label: "🧈 Butter/Paneer Box (5kg)",  l: 400, w: 300, h: 200, capL: 5,   weightKg: 0.6,  stackMax: 10 },
  ice_cream:  { label: "🍦 Ice Cream Tub Box (4L)",   l: 380, w: 280, h: 250, capL: 4,   weightKg: 0.5,  stackMax: 8  },
  pallet:     { label: "🏗️ Euro Pallet (1200×800)",  l: 1200,w: 800, h: 145, capL: 500, weightKg: 25,   stackMax: 3  },
} as const;

// ── COLD ROOM PRESETS ─────────────────────────────────────
const ROOM_PRESETS = {
  "Small Retail (10×12 ft)":    { len: "10", width: "12", heightFt: "10", efficiency: "65" },
  "Medium Plant (20×15 ft)":    { len: "20", width: "15", heightFt: "12", efficiency: "65" },
  "Large Dairy (30×25 ft)":     { len: "30", width: "25", heightFt: "14", efficiency: "70" },
  "Walk-in Chiller (8×10 ft)":  { len: "8",  width: "10", heightFt: "8",  efficiency: "60" },
  "Dispatch Bay (40×30 ft)":    { len: "40", width: "30", heightFt: "16", efficiency: "75" },
} as const;

// ── MAIN COMPONENT ────────────────────────────────────────
function StorageCalc() {
  const { toast } = useToast();

  const [unit,       setUnit]       = useState<"ft" | "m">("ft");
  const [crateType,  setCrateType]  = useState<keyof typeof CRATE_DB>("milk_std");
  const [inp, setInp] = useState({
    len:        "20",
    width:      "15",
    heightFt:   "12",
    stack:      "6",
    efficiency: "65",
  });
  const [useAutoStack, setUseAutoStack] = useState(true);
  const [result, setResult] = useState<any>(null);

  const setF = (k: string, v: string) => setInp(p => ({ ...p, [k]: v }));
  const { validatePositive, validateNumber } = useInputValidation();

  // Apply preset
  const applyPreset = (name: keyof typeof ROOM_PRESETS) => {
    const p = ROOM_PRESETS[name];
    setInp(prev => ({ ...prev, ...p }));
    toast({ title: "Preset Applied", description: name });
  };

  // Auto-stack = room height / crate height (with beam clearance)
  const crate      = CRATE_DB[crateType];
  const toMm       = (v: string) => unit === "ft"
    ? parseFloat(v) * 304.8
    : parseFloat(v) * 1000;

  const roomHeightMm = toMm(inp.heightFt);
  const beamClearMm  = 300; // min clearance for sprinklers/lights
  const autoStack    = Math.min(
    Math.floor((roomHeightMm - beamClearMm) / crate.h),
    crate.stackMax
  );

  const effectiveStack = useAutoStack ? autoStack : (parseInt(inp.stack) || 1);

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    const lenMm   = toMm(inp.len);
    const widMm   = toMm(inp.width);
    const eff     = (parseFloat(inp.efficiency) || 65) / 100;

    if (lenMm <= 0 || widMm <= 0) {
      toast({ variant: "destructive", title: "Invalid dimensions" }); return;
    }

    const roomAreaMm2   = lenMm * widMm;
    const usableAreaMm2 = roomAreaMm2 * eff;
    const crateAreaMm2  = crate.l * crate.w;

    // Arrange crates in both orientations, pick better
    const cratesNormal   = Math.floor(lenMm / crate.l) * Math.floor(widMm / crate.w);
    const cratesRotated  = Math.floor(lenMm / crate.w) * Math.floor(widMm / crate.l);
    const cratesPerLayer = Math.max(cratesNormal, cratesRotated);
    const bestRotated    = cratesRotated > cratesNormal;

    // Also compute area-based estimate for comparison
    const cratesAreaBased = Math.floor(usableAreaMm2 / crateAreaMm2);

    // Use whichever is more practical: grid arrangement
    const cratesFloor    = Math.min(cratesPerLayer, cratesAreaBased);

    const totalCrates    = cratesFloor * effectiveStack;
    const totalCapL      = totalCrates * crate.capL;
    const totalWeightKg  = totalCrates * crate.weightKg + totalCapL; // tare + product
    const totalWeightT   = totalWeightKg / 1000;

    // Floor loading (kg/m²)
    const roomAreaM2     = (lenMm / 1000) * (widMm / 1000);
    const floorLoadKgM2  = (totalWeightKg * eff) / (roomAreaM2 * eff);

    // Refrigeration load estimate (simple)
    // Rule: 1 TR per 500 kg of product in chiller mode (~4°C)
    const refrigTR       = totalCapL / 500;

    // Utilization metrics
    const usagePercent   = eff * 100;
    const aisleFt        = unit === "ft"
      ? ((1 - eff) * parseFloat(inp.len) * parseFloat(inp.width)).toFixed(0)
      : ((1 - eff) * parseFloat(inp.len) * parseFloat(inp.width)).toFixed(1);

    const roomAreaSqFt   = unit === "ft"
      ? parseFloat(inp.len) * parseFloat(inp.width)
      : parseFloat(inp.len) * parseFloat(inp.width) * 10.764;

    // SKU planning — how many products can fit
    const skuRows        = Math.floor(Math.sqrt(cratesFloor));

    setResult({
      cratesFloor, effectiveStack, totalCrates,
      totalCapL, totalWeightT, floorLoadKgM2,
      refrigTR, usagePercent, aisleFt,
      roomAreaSqFt, bestRotated, cratesAreaBased,
      skuRows, autoStack,
    });

    toast({
      title: "✅ Calculated",
      description: `${totalCrates.toLocaleString("en-IN")} crates · ${totalCapL.toLocaleString("en-IN")} L · ${totalWeightT.toFixed(1)} T`,
    });
  }, [inp, crateType, effectiveStack, unit, crate, toast]);

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-cyan-200 bg-cyan-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-t-lg border-b border-cyan-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-cyan-800">
            <Box className="w-5 h-5 text-cyan-600" />
            Cold Store Capacity Planner
          </span>
          {result && (
            <Badge className="bg-cyan-600 text-white text-sm px-3 py-1">
              {result.totalCapL.toLocaleString("en-IN")} L
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-cyan-600 text-xs">
          Grid layout · Auto stack height · Floor load · Refrigeration estimate · SKU planning
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── PRESETS ──────────────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Room Presets</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(ROOM_PRESETS) as Array<keyof typeof ROOM_PRESETS>).map(name => (
              <button
                key={name}
                onClick={() => applyPreset(name)}
                className="px-3 py-1 rounded-full border border-cyan-200 bg-white text-xs font-semibold text-cyan-700 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all shadow-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ── CRATE SELECTOR ───────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Crate / Container Type</Label>
          <Select value={crateType} onValueChange={v => { setCrateType(v as keyof typeof CRATE_DB); setResult(null); }}>
            <SelectTrigger className="h-10 bg-white border-cyan-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.entries(CRATE_DB) as [keyof typeof CRATE_DB, any][]).map(([k, v]) => (
                <SelectItem key={k} value={k}>
                  <div className="flex flex-col">
                    <span className="font-semibold">{v.label}</span>
                    <span className="text-[10px] text-slate-400">
                      {v.l}×{v.w}×{v.h}mm · {v.capL}L · max {v.stackMax} high
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* Crate spec pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {[
              { label: "Size",     value: `${crate.l}×${crate.w}×${crate.h} mm` },
              { label: "Capacity", value: `${crate.capL} L`                      },
              { label: "Tare",     value: `${crate.weightKg} kg`                 },
              { label: "Max Stack",value: `${crate.stackMax} high`               },
            ].map(p => (
              <span key={p.label} className="bg-cyan-100 text-cyan-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                {p.label}: {p.value}
              </span>
            ))}
          </div>
        </div>

        {/* ── ROOM DIMENSIONS ─────────────────────────── */}
        <Card className="border-cyan-100 bg-white">
          <CardHeader className="p-3 pb-2 bg-cyan-50 rounded-t-lg border-b border-cyan-100 flex flex-row items-center justify-between">
            <CardTitle className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
              📐 Room Dimensions
            </CardTitle>
            {/* Unit toggle */}
            <div className="flex bg-white border border-cyan-200 rounded p-0.5 gap-0.5">
              {(["ft", "m"] as const).map(u => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                    unit === u ? "bg-cyan-600 text-white" : "text-slate-400 hover:text-cyan-600"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-3 grid grid-cols-2 gap-3">
            <ValidatedInput
              label={`Length (${unit})`}
              value={inp.len}
              onChange={v => setF("len", v)}
              validation={validatePositive(inp.len, "Length")}
              unit={unit}
              colorScheme="cyan"
            />
            <ValidatedInput
              label={`Width (${unit})`}
              value={inp.width}
              onChange={v => setF("width", v)}
              validation={validatePositive(inp.width, "Width")}
              unit={unit}
              colorScheme="cyan"
            />
            <ValidatedInput
              label={`Room Height (${unit})`}
              value={inp.heightFt}
              onChange={v => setF("heightFt", v)}
              validation={validatePositive(inp.heightFt, "Height")}
              unit={unit}
              helpText="To ceiling/beam"
              colorScheme="blue"
            />
            <ValidatedInput
              label="Floor Usage %"
              value={inp.efficiency}
              onChange={v => setF("efficiency", v)}
              validation={validateNumber(inp.efficiency, 30, 90, "Usage %")}
              unit="%"
              helpText="Standard: 60–70%"
              colorScheme="orange"
            />
          </CardContent>
        </Card>

        {/* ── STACK HEIGHT ─────────────────────────────── */}
        <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div>
            <div className="text-sm font-bold text-blue-800">
              Auto Stack Height
              <Badge className="ml-2 bg-blue-600 text-white text-xs">
                {autoStack} tiers
              </Badge>
            </div>
            <div className="text-xs text-blue-500">
              = (Room height − 300mm clearance) ÷ {crate.h}mm crate · max {crate.stackMax}
            </div>
          </div>
          <Button
            size="sm"
            variant={useAutoStack ? "default" : "outline"}
            onClick={() => setUseAutoStack(!useAutoStack)}
            className={useAutoStack ? "bg-blue-600 hover:bg-blue-700" : "border-blue-300 text-blue-600"}
          >
            {useAutoStack ? "AUTO ✓" : "MANUAL"}
          </Button>
        </div>

        {!useAutoStack && (
          <ValidatedInput
            label="Manual Stack Tiers"
            value={inp.stack}
            onChange={v => setF("stack", v)}
            validation={validateNumber(inp.stack, 1, crate.stackMax, "Stack")}
            unit="tiers"
            helpText={`Max safe: ${crate.stackMax} for this crate`}
            colorScheme="orange"
          />
        )}

        {/* ── CALCULATE ───────────────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold shadow-md"
        >
          <Box className="w-4 h-4 mr-2" />
          Plan Cold Store Capacity
        </Button>

        {/* ── RESULTS ─────────────────────────────────── */}
        {result && (
          <div className="space-y-3 animate-in fade-in">

            {/* Main KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-cyan-600 text-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-[10px] uppercase opacity-80 font-bold">Storage Capacity</div>
                <div className="text-3xl font-black">
                  {result.totalCapL.toLocaleString("en-IN")}
                </div>
                <div className="text-xs opacity-70">Litres</div>
              </div>
              <div className="bg-slate-800 text-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-[10px] uppercase opacity-70 font-bold">Total Crates</div>
                <div className="text-3xl font-black text-yellow-300">
                  {result.totalCrates.toLocaleString("en-IN")}
                </div>
                <div className="text-xs opacity-60">
                  {result.cratesFloor} per layer × {result.effectiveStack} tiers
                </div>
              </div>
            </div>

            {/* Floor plan breakdown */}
            <Card className="bg-white border-cyan-100">
              <CardHeader className="p-3 pb-1 border-b border-cyan-100">
                <CardTitle className="text-xs text-cyan-700 font-bold uppercase">📐 Floor Plan Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                {[
                  { label: "Room area",              value: `${result.roomAreaSqFt.toFixed(0)} sq ft` },
                  { label: "Crates per layer (grid)",value: `${result.cratesFloor} crates ${result.bestRotated ? "(rotated layout better)" : ""}` },
                  { label: "Stack tiers",            value: `${result.effectiveStack} ${useAutoStack ? "(auto)" : "(manual)"}` },
                  { label: "Aisle + dead space",     value: `${(100 - result.usagePercent).toFixed(0)}% of floor` },
                  { label: "Orientation",            value: result.bestRotated ? "Rotated 90° for best fit" : "Standard layout" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-bold text-slate-700">{r.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Load & Infra */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="border-orange-100 bg-orange-50">
                <CardContent className="p-3 space-y-1 text-sm">
                  <div className="text-[10px] text-orange-700 font-bold uppercase">Floor Loading</div>
                  <div className="text-2xl font-black text-orange-800">
                    {result.floorLoadKgM2.toFixed(0)}
                  </div>
                  <div className="text-[10px] text-orange-600">kg/m² (full load)</div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Standard floor: 600–1000 kg/m²
                  </div>
                  <div className={`text-[10px] font-bold mt-1 ${result.floorLoadKgM2 > 1000 ? "text-red-600" : result.floorLoadKgM2 > 700 ? "text-orange-600" : "text-green-600"}`}>
                    {result.floorLoadKgM2 > 1000 ? "⚠ Exceeds standard — check RCC" : result.floorLoadKgM2 > 700 ? "⚡ Heavy load — verify slab" : "✓ Safe for standard floor"}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 bg-blue-50">
                <CardContent className="p-3 space-y-1 text-sm">
                  <div className="text-[10px] text-blue-700 font-bold uppercase">Refrigeration Est.</div>
                  <div className="text-2xl font-black text-blue-800">
                    {result.refrigTR.toFixed(1)} TR
                  </div>
                  <div className="text-[10px] text-blue-600">cooling required</div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Rule: 1 TR per 500 L product
                  </div>
                  <div className="text-[10px] text-blue-600 font-bold mt-1">
                    ≈ {(result.refrigTR * 3.517).toFixed(1)} kW thermal
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Total weight */}
            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm">
              <div>
                <div className="font-bold text-slate-700">Total Weight (full load)</div>
                <div className="text-xs text-slate-400">crate tare + product</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-slate-800">{result.totalWeightT.toFixed(1)} T</div>
                <div className="text-xs text-slate-400">
                  {(result.totalWeightT * 1000).toLocaleString("en-IN", { maximumFractionDigits: 0 })} kg
                </div>
              </div>
            </div>

            {/* SKU / dispatch planning */}
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="p-3 pb-1 border-b border-purple-100">
                <CardTitle className="text-sm text-purple-800">📦 SKU / Dispatch Planning</CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Crates per vehicle (6T truck)</span>
                  <span className="font-bold">{Math.floor(6000 / (crate.capL + crate.weightKg))} crates</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Full truckloads from store</span>
                  <span className="font-bold text-purple-700">
                    {Math.floor(result.totalCrates / Math.floor(6000 / (crate.capL + crate.weightKg)))} trucks
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Suggested aisle rows</span>
                  <span className="font-bold">{Math.max(2, result.skuRows)} rows</span>
                </div>
              </CardContent>
            </Card>

            {/* Formula note */}
            <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
              <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas:</div>
              <div>Crates/layer = floor(L/crate_L) × floor(W/crate_W) [grid packing]</div>
              <div>Auto stack = floor((room_H − 300mm) / crate_H), capped at {crate.stackMax}</div>
              <div>Total = Crates/layer × Stack × Capacity/crate</div>
              <div>Floor load = Total weight / (room area × efficiency)</div>
              <div>Refrigeration = Total product litres / 500</div>
            </div>

          </div>
        )}
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED PANEER COAGULANT DOSING CALCULATOR
// Drop-in Replacement for PaneerCoagulantCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana PaneerCoagulantCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── COAGULANT DATABASE ────────────────────────────────────
const COAGULANT_DB = {
  citric: {
    label:       "🍋 Citric Acid (Powder)",
    unit:        "g/L",
    rateMin:     1.8,
    rateMax:     2.5,
    rateDefault: "2.2",
    concDefault: "1.5",
    stockConc:   100,   // % (pure powder)
    tempC:       70,    // solution prep temp
    addTempC:    70,    // milk temp at addition
    purity:      98,    // % typical food grade
    price:       "85",  // ₹/kg
    priceUnit:   "kg",
    notes: [
      "Powder pehle 70°C pani mein dissolve karein",
      "Milk 70°C pe coagulate karo — soft texture",
      "Dheere-dheere add karo aur stir band karo",
      "Over-acidification se rubbery paneer hota hai",
    ],
    yieldFactor: 0.18,  // kg paneer per L milk (approx)
  },
  vinegar: {
    label:       "🧴 White Vinegar (Liquid)",
    unit:        "ml/L",
    rateMin:     25,
    rateMax:     35,
    rateDefault: "30",
    concDefault: "1.0",
    stockConc:   5,     // % acidity (standard food vinegar)
    tempC:       25,    // room temp liquid
    addTempC:    70,
    purity:      5,
    price:       "40",  // ₹/L
    priceUnit:   "L",
    notes: [
      "5% acidity vinegar standard hai",
      "Dilute karke add karo — direct dalne se uneven coag",
      "Slightly softer texture vs citric",
      "Rinse curd well — vinegar flavour residue",
    ],
    yieldFactor: 0.17,
  },
  lactic: {
    label:       "🧪 Lactic Acid (80% solution)",
    unit:        "ml/L",
    rateMin:     1.5,
    rateMax:     2.5,
    rateDefault: "2.0",
    concDefault: "0.8",
    stockConc:   80,
    tempC:       25,
    addTempC:    65,
    purity:      80,
    price:       "120",
    priceUnit:   "L",
    notes: [
      "Premium option — very smooth, soft texture",
      "65°C pe add karo for best curd structure",
      "FSSAI approved food grade use karein",
      "Khatte flavour se bachne ke liye rinse zaruri",
    ],
    yieldFactor: 0.185,
  },
  whey: {
    label:       "♻️ Acid Whey (Recycled)",
    unit:        "ml/L",
    rateMin:     100,
    rateMax:     200,
    rateDefault: "150",
    concDefault: "10",
    stockConc:   0.5,  // % titratable acidity
    tempC:       65,
    addTempC:    70,
    purity:      0.5,
    price:       "2",
    priceUnit:   "L",
    notes: [
      "Previous batch ki whey — zero waste approach",
      "pH 4.2–4.5 hona chahiye for effective coagulation",
      "Larger volume needed — plan whey storage tank",
      "Flavour slightly different — consumer feedback lein",
    ],
    yieldFactor: 0.175,
  },
} as const;

// ── PANEER VARIANT PRESETS ────────────────────────────────
const PANEER_VARIANTS = {
  "Standard Paneer":    { rate: "2.2", conc: "1.5", addTemp: "70", notes: "Regular coagulation, firm texture" },
  "Soft Paneer":        { rate: "1.8", conc: "1.0", addTemp: "68", notes: "Lower acid, softer body" },
  "Malai Paneer":       { rate: "2.0", conc: "1.2", addTemp: "70", notes: "Full fat milk, richer texture" },
  "Tofu-Style":         { rate: "2.5", conc: "2.0", addTemp: "72", notes: "Higher acid, press firmly for density" },
} as const;

// ── MAIN COMPONENT ────────────────────────────────────────
function PaneerCoagulantCalc() {
  const { toast } = useToast();

  const [coagType, setCoagType] = useState<keyof typeof COAGULANT_DB>("citric");
  const [inp, setInp] = useState({
    milk:    "1000",
    rate:    "2.2",
    conc:    "1.5",
    addTemp: "70",
    price:   "85",
    milkFat: "3.5",  // % fat — affects yield
  });
  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"inputs" | "results" | "process">("inputs");

  const setF = (k: string, v: string) => setInp(p => ({ ...p, [k]: v }));
  const { validatePositive, validateNumber } = useInputValidation();

  const coag = COAGULANT_DB[coagType];

  // Apply coagulant type defaults
  const applyCoagType = (type: keyof typeof COAGULANT_DB) => {
    const c = COAGULANT_DB[type];
    setCoagType(type);
    setInp(p => ({ ...p, rate: c.rateDefault, conc: c.concDefault, price: c.price }));
    setResult(null);
  };

  // Apply variant preset
  const applyVariant = (name: keyof typeof PANEER_VARIANTS) => {
    const v = PANEER_VARIANTS[name];
    setInp(p => ({ ...p, rate: v.rate, conc: v.conc, addTemp: v.addTemp }));
    toast({ title: `Preset: ${name}`, description: v.notes });
  };

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    const milk    = parseFloat(inp.milk)    || 0;
    const rate    = parseFloat(inp.rate)    || 0;
    const conc    = parseFloat(inp.conc)    || 1;
    const price   = parseFloat(inp.price)  || 0;
    const fat     = parseFloat(inp.milkFat)|| 3.5;

    if (milk <= 0 || rate <= 0 || conc <= 0) {
      toast({ variant: "destructive", title: "Invalid values" }); return;
    }

    // ── 1. Raw coagulant required ──────────────────────
    // For powder (citric): grams = milk_L × rate_g/L
    // For liquid: ml = milk_L × rate_ml/L
    const rawAmount   = milk * rate;
    const rawUnit     = coagType === "citric" ? "g" : "ml";

    // ── 2. Solution preparation ────────────────────────
    // C1V1 = C2V2
    // C1 = stock concentration, C2 = target working concentration
    // V1 = rawAmount (already in g or ml)
    // For citric powder: C1=100% (pure), need V_total such that conc%=(rawAmount/V_total_ml)*100
    // totalSolutionMl = rawAmount_g * 1000 / (density≈1) / (conc/100) → simplified:
    let totalSolutionL = 0;
    let waterToAddL    = 0;

    if (coagType === "citric") {
      // rawAmount in grams, conc in %
      // totalSolutionMl = (rawAmount_g / (conc/100)) / (density≈1g/ml)
      totalSolutionL = rawAmount / (conc / 100) / 1000;
      waterToAddL    = totalSolutionL - rawAmount / 1000; // subtract volume of dissolved powder (approx)
    } else if (coagType === "lactic") {
      // Stock = 80%, target = conc%
      // C1V1 = C2V2 → V1 = rawAmount ml (stock volume needed)
      // rawAmount already accounts for rate, now dilute to conc%
      totalSolutionL = rawAmount * (coag.stockConc / 100) / (conc / 100) / 1000;
      waterToAddL    = totalSolutionL - rawAmount / 1000;
    } else if (coagType === "vinegar") {
      // Stock vinegar = 5% acidity, target = conc% active acid
      // V_total = rawAmount_ml × (5/conc) / 1000
      totalSolutionL = rawAmount * (coag.stockConc / conc) / 1000;
      waterToAddL    = totalSolutionL - rawAmount / 1000;
    } else {
      // Whey — just volumetric, no significant dilution needed
      totalSolutionL = rawAmount / 1000;
      waterToAddL    = 0;
    }

    // Clamp negatives
    waterToAddL = Math.max(0, waterToAddL);

    // ── 3. Cost ───────────────────────────────────────
    let coagCost = 0;
    if (coagType === "citric") {
      coagCost = (rawAmount / 1000) * price; // g → kg × ₹/kg
    } else {
      coagCost = (rawAmount / 1000) * price; // ml → L × ₹/L
    }
    const costPerL = coagCost / milk;

    // ── 4. Paneer yield estimate ──────────────────────
    // Base yield 16–18% (v/v), fat adjusted: +0.3% per 0.1% fat above 3%
    const baseYield  = coag.yieldFactor;
    const fatAdj     = (fat - 3.0) * 0.003;
    const yieldFact  = Math.max(0.12, baseYield + fatAdj);
    const paneerKg   = milk * yieldFact;
    const wheyL      = milk - paneerKg; // approximate whey volume
    const costPerKgPaneer = coagCost / paneerKg;

    // ── 5. Acid addition rate warning ─────────────────
    const warnings: string[] = [];
    if (rate < coag.rateMin) warnings.push(`Rate ${rate} ${coag.unit} is below minimum (${coag.rateMin}). Under-coagulation risk.`);
    if (rate > coag.rateMax) warnings.push(`Rate ${rate} ${coag.unit} exceeds recommended max (${coag.rateMax}). Rubbery/sour paneer risk.`);
    if (conc > 2.5)          warnings.push(`Solution concentration > 2.5% — too concentrated. Uneven coagulation if not mixed well.`);
    if (totalSolutionL > milk * 0.15) warnings.push(`Solution volume (${totalSolutionL.toFixed(1)} L) is >15% of milk — may dilute milk fat.`);

    setResult({
      rawAmount, rawUnit, totalSolutionL, waterToAddL,
      coagCost, costPerL, paneerKg, wheyL, yieldFact,
      costPerKgPaneer, warnings,
    });
    setActiveTab("results");
    toast({
      title: "✅ Calculated",
      description: `${rawAmount.toFixed(0)} ${rawUnit} → ${totalSolutionL.toFixed(1)} L solution | Yield: ${paneerKg.toFixed(1)} kg paneer`,
    });
  }, [inp, coagType, coag, toast]);

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-green-200 bg-green-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-green-50 to-lime-50 rounded-t-lg border-b border-green-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-green-800">
            <Beaker className="w-5 h-5 text-green-600" />
            Paneer Coagulant Dosing
          </span>
          {result && (
            <Badge className="bg-green-600 text-white text-sm px-3 py-1">
              {result.paneerKg.toFixed(1)} kg paneer
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-green-600 text-xs">
          Citric · Vinegar · Lactic Acid · Whey · Yield estimate · Solution prep · Cost
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── COAGULANT TYPE ───────────────────────────── */}
        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(COAGULANT_DB) as Array<keyof typeof COAGULANT_DB>).map(key => (
            <button
              key={key}
              onClick={() => applyCoagType(key)}
              className={`p-2 rounded-lg border text-xs font-semibold transition-all text-left leading-tight shadow-sm
                ${coagType === key
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-green-300 hover:text-green-700"
                }`}
            >
              {COAGULANT_DB[key].label}
              <div className={`text-[9px] mt-0.5 ${coagType === key ? "opacity-80" : "text-slate-400"}`}>
                {COAGULANT_DB[key].rateMin}–{COAGULANT_DB[key].rateMax} {COAGULANT_DB[key].unit}
              </div>
            </button>
          ))}
        </div>

        {/* ── TABS ─────────────────────────────────────── */}
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="inputs"  className="text-xs">⚙️ Inputs</TabsTrigger>
            <TabsTrigger value="results" className="text-xs">📊 Results</TabsTrigger>
            <TabsTrigger value="process" className="text-xs">📋 Process</TabsTrigger>
          </TabsList>

          {/* ═════ TAB 1: INPUTS ═══════════════════════ */}
          <TabsContent value="inputs" className="space-y-4 pt-3">

            {/* Paneer variant presets */}
            <div className="space-y-1">
              <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Paneer Type Presets</Label>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(PANEER_VARIANTS) as Array<keyof typeof PANEER_VARIANTS>).map(name => (
                  <button
                    key={name}
                    onClick={() => applyVariant(name)}
                    className="px-3 py-1 rounded-full border border-green-200 bg-white text-xs font-semibold text-green-700 hover:bg-green-600 hover:text-white transition-all shadow-sm"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ValidatedInput
                label="Milk Volume"
                value={inp.milk}
                onChange={v => setF("milk", v)}
                validation={validatePositive(inp.milk, "Milk volume")}
                unit="L"
                colorScheme="green"
              />
              <ValidatedInput
                label="Milk Fat %"
                value={inp.milkFat}
                onChange={v => setF("milkFat", v)}
                validation={validateNumber(inp.milkFat, 0.1, 10, "Fat %")}
                unit="%"
                helpText="Affects paneer yield"
                colorScheme="green"
              />
              <ValidatedInput
                label={`Dose Rate (${coag.unit})`}
                value={inp.rate}
                onChange={v => setF("rate", v)}
                validation={validatePositive(inp.rate, "Dose rate")}
                helpText={`Range: ${coag.rateMin}–${coag.rateMax} ${coag.unit}`}
                colorScheme="orange"
              />
              <ValidatedInput
                label="Working Sol. Conc %"
                value={inp.conc}
                onChange={v => setF("conc", v)}
                validation={validateNumber(inp.conc, 0.5, 5, "Concentration")}
                unit="%"
                helpText="Standard: 1–2%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="Addition Temp"
                value={inp.addTemp}
                onChange={v => setF("addTemp", v)}
                validation={validateNumber(inp.addTemp, 50, 85, "Addition temp")}
                unit="°C"
                helpText={`Recommended: ${coag.addTempC}°C`}
                colorScheme="red"
              />
              <ValidatedInput
                label={`Coagulant Price`}
                value={inp.price}
                onChange={v => setF("price", v)}
                validation={validatePositive(inp.price, "Price")}
                unit={`₹/${coag.priceUnit}`}
                colorScheme="green"
              />
            </div>

            {/* Stock concentration info */}
            <Alert className="bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-xs text-blue-700">
                <strong>{coag.label}</strong> — Stock concentration: {coag.stockConc}% |
                Solution prep temp: {coag.tempC}°C |
                Optimal addition temp: {coag.addTempC}°C
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* ═════ TAB 2: RESULTS ══════════════════════ */}
          <TabsContent value="results" className="space-y-3 pt-3">
            {result ? (
              <>
                {/* Main KPIs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-600 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-80 font-bold">
                      {coagType === "citric" ? "Powder Needed" : coagType === "whey" ? "Whey Volume" : "Liquid Needed"}
                    </div>
                    <div className="text-3xl font-black">
                      {result.rawAmount.toFixed(1)}
                    </div>
                    <div className="text-xs opacity-70">{result.rawUnit}</div>
                  </div>
                  <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-80 font-bold">Working Solution</div>
                    <div className="text-3xl font-black">
                      {result.totalSolutionL.toFixed(2)} L
                    </div>
                    <div className="text-xs opacity-70">at {inp.conc}% concentration</div>
                  </div>
                </div>

                {/* Solution Preparation Box */}
                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader className="p-3 pb-1 border-b border-amber-100">
                    <CardTitle className="text-sm text-amber-800">🧪 Solution Preparation Guide</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {coagType !== "whey" ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-slate-600">
                            {coagType === "citric" ? "Powder" : "Stock liquid"} to weigh/measure
                          </span>
                          <span className="font-bold text-amber-800">
                            {result.rawAmount.toFixed(1)} {result.rawUnit}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Water to add ({coag.tempC}°C)</span>
                          <span className="font-bold text-blue-700">
                            {result.waterToAddL.toFixed(2)} L ({(result.waterToAddL * 1000).toFixed(0)} ml)
                          </span>
                        </div>
                        <div className="flex justify-between border-t pt-1 font-bold">
                          <span className="text-amber-800">Total working solution</span>
                          <span className="text-amber-800">{result.totalSolutionL.toFixed(2)} L</span>
                        </div>
                        <div className="bg-amber-100 rounded p-2 text-xs text-amber-800 mt-1">
                          📌 {coagType === "citric"
                            ? `Dissolve ${result.rawAmount.toFixed(0)}g powder in ${(result.waterToAddL * 1000).toFixed(0)}ml warm water (70°C). Stir until clear.`
                            : coagType === "vinegar"
                            ? `Mix ${result.rawAmount.toFixed(0)}ml vinegar + ${(result.waterToAddL * 1000).toFixed(0)}ml water. Room temp.`
                            : `Mix ${result.rawAmount.toFixed(0)}ml lactic acid + ${(result.waterToAddL * 1000).toFixed(0)}ml water. Handle with care.`
                          }
                        </div>
                      </>
                    ) : (
                      <div className="text-amber-800">
                        Use <strong>{result.totalSolutionL.toFixed(1)} L</strong> of recycled acid whey directly (pH 4.2–4.5). Heat to 65°C before addition.
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Yield & Economics */}
                <Card className="bg-white border-green-100">
                  <CardHeader className="p-3 pb-1 border-b border-green-100">
                    <CardTitle className="text-xs text-green-700 font-bold uppercase">📦 Yield & Economics</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {[
                      { label: "Paneer yield",             value: `${result.paneerKg.toFixed(1)} kg`, color: "text-green-700 font-black text-base" },
                      { label: "Yield factor",             value: `${(result.yieldFact * 100).toFixed(1)}% (fat-adjusted)` },
                      { label: "Whey generated",           value: `~${result.wheyL.toFixed(0)} L` },
                      { label: "Coagulant cost/batch",     value: `₹ ${result.coagCost.toFixed(2)}` },
                      { label: "Coagulant cost/L milk",    value: `₹ ${result.costPerL.toFixed(3)}` },
                      { label: "Coagulant cost/kg paneer", value: `₹ ${result.costPerKgPaneer.toFixed(2)}` },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-500">{r.label}</span>
                        <span className={r.color || "font-bold"}>{r.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 text-sm">Quality Alerts</AlertTitle>
                    <AlertDescription className="text-xs text-yellow-700 space-y-1">
                      {result.warnings.map((w: string, i: number) => (
                        <div key={i}>⚠️ {w}</div>
                      ))}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Formula */}
                <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
                  <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas:</div>
                  {coagType === "citric" && (
                    <>
                      <div>Raw = Milk_L × Rate = {inp.milk} × {inp.rate} = {result.rawAmount.toFixed(1)} g</div>
                      <div>Solution_L = Raw_g / (Conc%/100) / 1000 = {result.totalSolutionL.toFixed(3)} L</div>
                    </>
                  )}
                  {(coagType === "vinegar" || coagType === "lactic") && (
                    <>
                      <div>Raw = Milk_L × Rate = {inp.milk} × {inp.rate} = {result.rawAmount.toFixed(1)} ml</div>
                      <div>C₁V₁ = C₂V₂ → V_total = Raw × (C_stock/C_working) = {result.totalSolutionL.toFixed(3)} L</div>
                    </>
                  )}
                  <div>Yield = Milk × {(result.yieldFact * 100).toFixed(1)}% = {result.paneerKg.toFixed(2)} kg paneer</div>
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Beaker className="h-10 w-10 mx-auto mb-3 text-green-200" />
                <p>Inputs bharein aur <strong>Calculate</strong> press karein.</p>
              </div>
            )}
          </TabsContent>

          {/* ═════ TAB 3: PROCESS GUIDE ════════════════ */}
          <TabsContent value="process" className="space-y-3 pt-3">
            <Card className="bg-white border-green-100">
              <CardHeader className="p-3 pb-2 bg-green-50 border-b border-green-100">
                <CardTitle className="text-sm text-green-800">
                  📋 {coag.label} — Process Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                {coag.notes.map((note, i) => (
                  <div key={i} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-green-600 font-black mt-0.5">{i + 1}.</span>
                    <span>{note}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Standard Paneer Process Steps */}
            <Card className="bg-slate-50 border-slate-200">
              <CardHeader className="p-3 pb-2 border-b">
                <CardTitle className="text-sm font-bold text-slate-700">🏭 Standard Paneer Process</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                {[
                  { step: "1. Standardize",  detail: "Fat: 3.5–6% | SNF: 8.5%+ as required" },
                  { step: "2. Pasteurize",   detail: "72°C × 15 sec (HTST) or 85°C × 15 min (batch)" },
                  { step: "3. Heat to coag temp", detail: `${inp.addTemp}°C — critical for texture` },
                  { step: "4. Add coagulant", detail: `Add ${result ? result.totalSolutionL.toFixed(1) + "L solution" : "prepared solution"} slowly with gentle stir` },
                  { step: "5. Rest",          detail: "Stop stirring. Wait 5–10 min for clean whey separation" },
                  { step: "6. Drain whey",    detail: `~${result ? result.wheyL.toFixed(0) : "~900"} L expected whey` },
                  { step: "7. Hoop & press",  detail: "Press at 0.5–1.0 kg/cm² for 15–20 min" },
                  { step: "8. Cold water dip",detail: "Dip in ice water (4°C) for 30 min — firms texture" },
                  { step: "9. Cut & pack",    detail: "Cut to required weight. Pack in LDPE, vacuum optional" },
                  { step: "10. Chill",        detail: "Store at 4°C. Shelf life: 3–5 days without vacuum" },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 text-xs">
                    <span className="bg-green-600 text-white font-bold rounded px-1.5 py-0.5 text-[9px] h-fit mt-0.5 whitespace-nowrap">
                      {s.step}
                    </span>
                    <span className="text-slate-600">{s.detail}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FSSAI Standards */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="p-3 pb-1 border-b border-amber-100">
                <CardTitle className="text-xs text-amber-800 font-bold uppercase">📜 FSSAI Standards — Paneer</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-1 text-xs text-amber-800">
                {[
                  { param: "Moisture",   std: "≤ 70% (cow) · ≤ 65% (buffalo)" },
                  { param: "Fat/DM",     std: "≥ 50% (cow) · ≥ 55% (buffalo)" },
                  { param: "Ash",        std: "≤ 3.0%" },
                  { param: "Acidity",    std: "≤ 0.6% as lactic acid" },
                  { param: "Coliform",   std: "≤ 10 CFU/g" },
                  { param: "Yeast/Mold", std: "≤ 100 CFU/g" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="font-semibold">{r.param}</span>
                    <span>{r.std}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* ── CALCULATE BUTTON ─────────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white font-bold shadow-md"
        >
          <Beaker className="w-4 h-4 mr-2" />
          Calculate Coagulant Dosing
        </Button>
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED IBT CAPACITY & REFRIGERATION LOAD CALCULATOR
// Drop-in Replacement for IbtCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana IbtCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── CONSTANTS ────────────────────────────────────────────
const IBT_REFRIGERANTS = {
  "R-404A":          { cop: 2.5, note: "Common dairy IBT"         },
  "R-448A / R-449A": { cop: 3.0, note: "Eco-friendly HFO blend ✅" },
  "R-22 (Legacy)":   { cop: 2.8, note: "Phase-out — avoid new"    },
  "Ammonia (NH₃)":   { cop: 3.8, note: "Large plants, best COP"   },
} as const;

const IBT_PRESETS = {
  "Village BMC (2KL)":    { milkVol: "2000",  startT: "36", endT: "4", processHours: "2",  buildHours: "8",  losses: "12", tankVol: "2500"  },
  "Medium Plant (5KL)":   { milkVol: "5000",  startT: "35", endT: "4", processHours: "3",  buildHours: "10", losses: "10", tankVol: "6000"  },
  "Large Plant (10KL)":   { milkVol: "10000", startT: "35", endT: "4", processHours: "4",  buildHours: "10", losses: "10", tankVol: "12000" },
  "Mega Plant (25KL)":    { milkVol: "25000", startT: "34", endT: "3", processHours: "5",  buildHours: "12", losses: "8",  tankVol: "30000" },
  "IBT Chiller (50KL)":   { milkVol: "50000", startT: "33", endT: "3", processHours: "6",  buildHours: "14", losses: "8",  tankVol: "60000" },
} as const;

// ── MAIN COMPONENT ────────────────────────────────────────
function IbtCalc() {
  const { toast } = useToast();

  const [inp, setInp] = useState({
    milkVol:      "10000",
    startT:       "35",
    endT:         "4",
    processHours: "4",
    buildHours:   "10",
    losses:       "10",
    tankVol:      "12000",   // L — IBT tank volume
    refrigerant:  "R-404A" as keyof typeof IBT_REFRIGERANTS,
    electricRate: "7",       // ₹/kWh
    operDays:     "300",     // days/year
    milkDensity:  "1.032",
    milkCp:       "0.938",
    iceThickness: "25",      // mm — target ice build on coils
  });

  const [result, setResult]   = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"inputs" | "results" | "tank">("inputs");

  const setF = (k: string, v: string) => setInp(p => ({ ...p, [k]: v }));
  const { validatePositive, validateNumber } = useInputValidation();

  // Apply preset
  const applyPreset = (name: keyof typeof IBT_PRESETS) => {
    setInp(p => ({ ...p, ...IBT_PRESETS[name] }));
    toast({ title: "Preset Applied", description: name });
  };

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    const V         = parseFloat(inp.milkVol)      || 0;
    const D         = parseFloat(inp.milkDensity)  || 1.032;
    const Cp        = parseFloat(inp.milkCp)       || 0.938;
    const T1        = parseFloat(inp.startT)       || 0;
    const T2        = parseFloat(inp.endT)         || 0;
    const meltHrs   = parseFloat(inp.processHours) || 0;
    const buildHrs  = parseFloat(inp.buildHours)   || 0;
    const lossP     = parseFloat(inp.losses)       || 0;
    const tankL     = parseFloat(inp.tankVol)      || 0;
    const elecR     = parseFloat(inp.electricRate) || 7;
    const days      = parseFloat(inp.operDays)     || 300;
    const refg      = IBT_REFRIGERANTS[inp.refrigerant];

    if (V <= 0 || T1 <= T2 || meltHrs <= 0 || buildHrs <= 0) {
      toast({ variant: "destructive", title: "Invalid values", description: "Check temperatures & hours." });
      return;
    }

    const mass        = V * D;                              // kg milk
    const safety      = 1 + lossP / 100;

    // ── 1. Heat Loads ────────────────────────────────
    const Q_milk      = mass * Cp * (T1 - T2);             // kcal — product cooling
    const Q_total     = Q_milk * safety;                   // kcal — with losses

    // ── 2. Ice Required ──────────────────────────────
    // Latent heat of fusion = 80 kcal/kg
    // Ice also provides sensible cooling (0°C → ~1°C avg melt temp → ~1 kcal/kg extra)
    const L_ice       = 80;                                // kcal/kg
    const iceReqKg    = Q_total / L_ice;

    // Water volume for ice (density 0.917 kg/L)
    const iceVolL     = iceReqKg / 0.917;

    // ── 3. Compressor for BUILD phase ────────────────
    // Must freeze this ice in buildHours
    const buildLoadKcalHr  = Q_total / buildHrs;
    const compTR_build     = buildLoadKcalHr / 3024;
    const compTR_rec       = compTR_build * 1.10;           // +10% margin
    const compKW_thermal   = compTR_rec * 3.517;
    const compKW_electric  = compKW_thermal / refg.cop;
    const compKVA          = compKW_electric / 0.85;

    // ── 4. MELT phase peak demand ────────────────────
    const meltLoadKcalHr   = Q_total / meltHrs;
    const meltTR           = meltLoadKcalHr / 3024;        // instantaneous if all at once

    // ── 5. IBT Tank sizing ───────────────────────────
    // Tank water volume should hold the required ice + working fluid
    // Typical: tank vol ≥ iceVolL × 3 (ice + water + freeboard)
    const tankMinL    = iceVolL * 3;
    const tankOK      = tankL >= tankMinL;
    const tankUtilPc  = (iceVolL / (tankL / 3)) * 100;

    // Ice slab thickness check on coil
    // Typical coil area: 0.5 m² per TR of compressor (approx)
    const coilAreaM2  = compTR_rec * 0.5;
    const targetThkMm = parseFloat(inp.iceThickness) || 25;
    // Ice vol from thickness: V = A × t → iceVolM3 = coilAreaM2 × (targetThkMm/1000)
    const iceVolFromCoilM3 = coilAreaM2 * (targetThkMm / 1000);
    const iceVolFromCoilL  = iceVolFromCoilM3 * 1000;
    const thicknessOK = iceVolL <= iceVolFromCoilL;

    // ── 6. Energy & Cost ────────────────────────────
    const buildKwh     = compKW_electric * buildHrs;       // per day
    const dailyCost    = buildKwh * elecR;
    const annualCost   = dailyCost * days;

    // COP-based kW savings if upgraded refrigerant
    const currentCOP   = IBT_REFRIGERANTS["R-404A"].cop;
    const savingsKwPc  = (1 - currentCOP / refg.cop) * 100;

    // ── 7. Warnings ──────────────────────────────────
    const warnings: string[] = [];
    if (buildHrs < 8)  warnings.push(`Build time ${buildHrs}h is short — compressor will be oversized. Standard: 10–14h overnight.`);
    if (meltHrs < 2)   warnings.push(`Melt time ${meltHrs}h is very fast — ice may not transfer heat evenly. Slow down milk intake.`);
    if (!tankOK)       warnings.push(`Tank ${tankL}L may be undersized. Recommended ≥ ${tankMinL.toFixed(0)} L for this ice volume.`);
    if (lossP > 15)    warnings.push(`Heat loss ${lossP}% is high. Check tank insulation (PUF 75mm recommended).`);
    if (compTR_rec > 50) warnings.push(`${compTR_rec.toFixed(1)} TR — consider screw compressor for reliability.`);

    setResult({
      mass, Q_milk, Q_total,
      iceReqKg, iceVolL,
      compTR_build, compTR_rec, compKW_thermal, compKW_electric, compKVA,
      meltTR, buildLoadKcalHr, meltLoadKcalHr,
      tankMinL, tankOK, tankUtilPc,
      coilAreaM2, thicknessOK, iceVolFromCoilL,
      buildKwh, dailyCost, annualCost,
      savingsKwPc, warnings,
      lossP, buildHrs, meltHrs,
    });

    setActiveTab("results");
    toast({
      title: "✅ Calculated",
      description: `Ice: ${iceReqKg.toFixed(0)} kg | Compressor: ${compTR_rec.toFixed(1)} TR | Cost: ₹${dailyCost.toFixed(0)}/day`,
    });
  }, [inp, toast]);

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-blue-200 bg-blue-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-t-lg border-b border-blue-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-blue-800">
            <Snowflake className="w-5 h-5 text-blue-600" />
            IBT Energy & Ice Bank Planner
          </span>
          {result && (
            <Badge className="bg-blue-600 text-white text-sm px-3 py-1">
              {result.iceReqKg.toLocaleString("en-IN", { maximumFractionDigits: 0 })} kg ice
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-blue-600 text-xs">
          Ice kg · Compressor TR · Build vs Melt · Tank sizing · Energy cost · Coil check
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── PRESETS ──────────────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quick Presets</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(IBT_PRESETS) as Array<keyof typeof IBT_PRESETS>).map(name => (
              <button key={name} onClick={() => applyPreset(name)}
                className="px-3 py-1 rounded-full border border-blue-200 bg-white text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ── TABS ─────────────────────────────────────── */}
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="inputs"  className="text-xs">⚙️ Inputs</TabsTrigger>
            <TabsTrigger value="results" className="text-xs">📊 Results</TabsTrigger>
            <TabsTrigger value="tank"    className="text-xs">🧊 Tank & Energy</TabsTrigger>
          </TabsList>

          {/* ═════ TAB 1: INPUTS ════════════════════════ */}
          <TabsContent value="inputs" className="space-y-4 pt-3">

            {/* Process params */}
            <Card className="border-blue-100 bg-white">
              <CardHeader className="p-3 pb-2 bg-blue-50 rounded-t-lg border-b border-blue-100">
                <CardTitle className="text-xs font-bold text-blue-700 uppercase">🥛 Milk & Process</CardTitle>
              </CardHeader>
              <CardContent className="p-3 grid grid-cols-2 gap-3">
                <ValidatedInput
                  label="Milk Volume"
                  value={inp.milkVol}
                  onChange={v => setF("milkVol", v)}
                  validation={validatePositive(inp.milkVol, "Milk volume")}
                  unit="L"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Inlet Temp"
                  value={inp.startT}
                  onChange={v => setF("startT", v)}
                  validation={validateNumber(inp.startT, 20, 45, "Inlet temp")}
                  unit="°C"
                  colorScheme="red"
                />
                <ValidatedInput
                  label="Target Temp"
                  value={inp.endT}
                  onChange={v => setF("endT", v)}
                  validation={validateNumber(inp.endT, 1, 10, "Target temp")}
                  unit="°C"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Heat Losses"
                  value={inp.losses}
                  onChange={v => setF("losses", v)}
                  validation={validateNumber(inp.losses, 0, 30, "Losses")}
                  unit="%"
                  helpText="Std: 8–12%"
                  colorScheme="orange"
                />
                <ValidatedInput
                  label="Milk Density"
                  value={inp.milkDensity}
                  onChange={v => setF("milkDensity", v)}
                  validation={{ isValid: true, severity: "info" }}
                  unit="kg/L"
                  helpText="1.030–1.033"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Specific Heat (Cp)"
                  value={inp.milkCp}
                  onChange={v => setF("milkCp", v)}
                  validation={{ isValid: true, severity: "info" }}
                  unit="kcal/kg°C"
                  colorScheme="blue"
                />
              </CardContent>
            </Card>

            {/* Compressor & Timing */}
            <Card className="border-indigo-100 bg-white">
              <CardHeader className="p-3 pb-2 bg-indigo-50 rounded-t-lg border-b border-indigo-100">
                <CardTitle className="text-xs font-bold text-indigo-700 uppercase">⚙️ Compressor & Timing</CardTitle>
              </CardHeader>
              <CardContent className="p-3 grid grid-cols-2 gap-3">
                <ValidatedInput
                  label="Ice Build Time"
                  value={inp.buildHours}
                  onChange={v => setF("buildHours", v)}
                  validation={validateNumber(inp.buildHours, 2, 20, "Build time")}
                  unit="hrs"
                  helpText="Overnight: 10–14h"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Ice Melt Time"
                  value={inp.processHours}
                  onChange={v => setF("processHours", v)}
                  validation={validateNumber(inp.processHours, 1, 12, "Melt time")}
                  unit="hrs"
                  helpText="Milk intake window"
                  colorScheme="orange"
                />
                <ValidatedInput
                  label="IBT Tank Volume"
                  value={inp.tankVol}
                  onChange={v => setF("tankVol", v)}
                  validation={validatePositive(inp.tankVol, "Tank volume")}
                  unit="L"
                  helpText="Existing/planned tank"
                  colorScheme="cyan"
                />
                <ValidatedInput
                  label="Target Ice Thickness"
                  value={inp.iceThickness}
                  onChange={v => setF("iceThickness", v)}
                  validation={validateNumber(inp.iceThickness, 10, 60, "Ice thickness")}
                  unit="mm"
                  helpText="On coils: 20–35mm"
                  colorScheme="blue"
                />
                <div className="col-span-2 space-y-1">
                  <Label className="text-xs font-bold text-slate-500 uppercase">Refrigerant</Label>
                  <Select value={inp.refrigerant} onValueChange={v => setF("refrigerant", v)}>
                    <SelectTrigger className="h-10 bg-white border-indigo-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(Object.keys(IBT_REFRIGERANTS) as Array<keyof typeof IBT_REFRIGERANTS>).map(k => (
                        <SelectItem key={k} value={k}>
                          <span className="font-semibold">{k}</span>
                          <span className="text-[10px] text-slate-400 ml-2">
                            COP {IBT_REFRIGERANTS[k].cop} — {IBT_REFRIGERANTS[k].note}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <ValidatedInput
                  label="Electricity Rate"
                  value={inp.electricRate}
                  onChange={v => setF("electricRate", v)}
                  validation={{ isValid: true, severity: "info" }}
                  unit="₹/kWh"
                  colorScheme="green"
                />
                <ValidatedInput
                  label="Operating Days/Year"
                  value={inp.operDays}
                  onChange={v => setF("operDays", v)}
                  validation={{ isValid: true, severity: "info" }}
                  unit="days"
                  colorScheme="blue"
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ═════ TAB 2: RESULTS ═══════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Main KPIs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-70 font-bold">Ice Bank Required</div>
                    <div className="text-3xl font-black text-cyan-400">
                      {result.iceReqKg.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs opacity-60">kg ice</div>
                    <div className="text-[10px] opacity-50 mt-1">
                      = {result.iceVolL.toFixed(0)} L ice volume
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-80 font-bold">Compressor (Recommended)</div>
                    <div className="text-3xl font-black text-yellow-300">
                      {result.compTR_rec.toFixed(1)} TR
                    </div>
                    <div className="text-xs opacity-70">
                      ({result.compTR_build.toFixed(1)} TR + 10% margin)
                    </div>
                  </div>
                </div>

                {/* Thermal breakdown */}
                <Card className="bg-white border-blue-100">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-sm font-bold text-blue-800">🔥 Thermal Load Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {[
                      { label: "Product heat load (Q = mCpΔT)", value: `${(result.Q_milk / 1000).toFixed(1)} Mcal`, color: "text-slate-700" },
                      { label: `Heat losses (${result.lossP}%)`,     value: `${((result.Q_total - result.Q_milk) / 1000).toFixed(1)} Mcal`, color: "text-orange-600" },
                      { label: "Total thermal load",                  value: `${(result.Q_total / 1000).toFixed(1)} Mcal`, color: "text-blue-700 font-black text-base" },
                      { label: "Build rate required",                  value: `${(result.buildLoadKcalHr / 1000).toFixed(1)} Mcal/hr over ${result.buildHrs}h`, color: "text-indigo-700" },
                      { label: "Peak melt demand",                     value: `${result.meltTR.toFixed(1)} TR over ${result.meltHrs}h`, color: "text-red-600" },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-500">{r.label}</span>
                        <span className={r.color || "font-bold"}>{r.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Electrical specs */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: "kW Thermal",   value: result.compKW_thermal.toFixed(1),  unit: "kW", color: "bg-blue-50 border-blue-200 text-blue-800" },
                    { label: "kW Electrical", value: result.compKW_electric.toFixed(1), unit: "kW", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
                    { label: "kVA",           value: result.compKVA.toFixed(1),         unit: "kVA", color: "bg-purple-50 border-purple-200 text-purple-800" },
                  ].map((k, i) => (
                    <div key={i} className={`p-3 rounded-xl border ${k.color}`}>
                      <div className="text-[9px] font-bold uppercase opacity-70">{k.label}</div>
                      <div className="text-xl font-black">{k.value}</div>
                      <div className="text-[9px] opacity-60">{k.unit}</div>
                    </div>
                  ))}
                </div>

                {/* Compressor type recommendation */}
                <Alert className="bg-blue-50 border-blue-200">
                  <Snowflake className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-xs text-blue-800">
                    <strong>Recommended compressor type:</strong>{" "}
                    {result.compTR_rec <= 5
                      ? "Hermetic/semi-hermetic reciprocating (≤5 TR)"
                      : result.compTR_rec <= 20
                      ? "Open-type reciprocating or scroll (5–20 TR)"
                      : result.compTR_rec <= 60
                      ? "Semi-hermetic or open screw compressor (20–60 TR)"
                      : "Open screw / centrifugal compressor (>60 TR)"}
                    {" "}| {inp.refrigerant} · COP {IBT_REFRIGERANTS[inp.refrigerant].cop}
                  </AlertDescription>
                </Alert>

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 text-sm">Design Alerts</AlertTitle>
                    <AlertDescription className="text-xs text-yellow-700 space-y-1">
                      {result.warnings.map((w: string, i: number) => (
                        <div key={i}>⚠️ {w}</div>
                      ))}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Formula */}
                <div className="bg-slate-50 border rounded-lg p-3 text-[10px] font-mono text-slate-400 space-y-1">
                  <div className="font-bold text-slate-600 text-xs mb-1">📐 Formulas:</div>
                  <div>Q_milk = {result.mass.toFixed(0)} kg × {inp.milkCp} × {parseFloat(inp.startT) - parseFloat(inp.endT)}°C = {result.Q_milk.toFixed(0)} kcal</div>
                  <div>Q_total = Q × (1 + {result.lossP}%) = {result.Q_total.toFixed(0)} kcal</div>
                  <div>Ice_kg = Q_total / 80 kcal/kg = {result.iceReqKg.toFixed(0)} kg</div>
                  <div>TR_build = (Q_total/{result.buildHrs}h) / 3024 = {result.compTR_build.toFixed(2)} TR</div>
                  <div>kW_elec = (TR×3.517) / COP({IBT_REFRIGERANTS[inp.refrigerant].cop}) = {result.compKW_electric.toFixed(2)} kW</div>
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Snowflake className="h-10 w-10 mx-auto mb-3 text-blue-200" />
                <p>Inputs bharein aur <strong>Calculate</strong> press karein.</p>
              </div>
            )}
          </TabsContent>

          {/* ═════ TAB 3: TANK & ENERGY ═════════════════ */}
          <TabsContent value="tank" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Tank sizing */}
                <Card className={`border-2 ${result.tankOK ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"}`}>
                  <CardHeader className="p-3 pb-1 border-b border-current/20">
                    <CardTitle className={`text-sm font-bold ${result.tankOK ? "text-green-800" : "text-red-800"}`}>
                      🧊 IBT Tank Sizing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {[
                      { label: "Ice volume needed",       value: `${result.iceVolL.toFixed(0)} L` },
                      { label: "Recommended tank size",   value: `≥ ${result.tankMinL.toFixed(0)} L (3× ice vol)` },
                      { label: "Your tank",               value: `${inp.tankVol} L` },
                      { label: "Ice utilization",         value: `${result.tankUtilPc.toFixed(1)}%` },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-600">{r.label}</span>
                        <span className="font-bold">{r.value}</span>
                      </div>
                    ))}
                    <div className={`mt-2 p-2 rounded text-xs font-bold text-center ${result.tankOK ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                      {result.tankOK
                        ? `✅ Tank adequate — ${(parseFloat(inp.tankVol) - result.tankMinL).toFixed(0)} L headroom`
                        : `❌ Tank undersized by ${(result.tankMinL - parseFloat(inp.tankVol)).toFixed(0)} L`}
                    </div>
                  </CardContent>
                </Card>

                {/* Coil ice thickness check */}
                <Card className="bg-white border-indigo-100">
                  <CardHeader className="p-3 pb-1 border-b border-indigo-100">
                    <CardTitle className="text-sm text-indigo-800 font-bold">❄️ Coil Ice Thickness Check</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {[
                      { label: "Estimated coil area",         value: `${result.coilAreaM2.toFixed(1)} m² (0.5 m²/TR)` },
                      { label: `Ice vol at ${inp.iceThickness}mm thickness`, value: `${result.iceVolFromCoilL.toFixed(0)} L` },
                      { label: "Required ice volume",         value: `${result.iceVolL.toFixed(0)} L` },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-500">{r.label}</span>
                        <span className="font-bold">{r.value}</span>
                      </div>
                    ))}
                    <div className={`mt-1 p-2 rounded text-xs font-bold ${result.thicknessOK ? "bg-green-50 text-green-700 border border-green-200" : "bg-orange-50 text-orange-700 border border-orange-200"}`}>
                      {result.thicknessOK
                        ? `✅ Coil surface adequate for ${inp.iceThickness}mm ice build`
                        : `⚠️ Coil may need larger surface — consider increasing coil area or reducing ice thickness target`}
                    </div>
                  </CardContent>
                </Card>

                {/* Energy & Cost */}
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none">
                  <CardHeader className="p-3 pb-1">
                    <CardTitle className="text-xs text-slate-300 font-bold uppercase">💰 Energy & Annual Cost</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-sm">
                    {[
                      { label: `Daily units (${result.buildHrs}h build)`, value: `${result.buildKwh.toFixed(1)} kWh`, color: "text-cyan-400" },
                      { label: "Daily cost",   value: `₹ ${result.dailyCost.toFixed(0)}`, color: "text-yellow-300" },
                      { label: "Annual cost",  value: `₹ ${result.annualCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, color: "text-green-300 text-base font-black" },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-400">{r.label}</span>
                        <span className={`font-bold ${r.color}`}>{r.value}</span>
                      </div>
                    ))}
                    {inp.refrigerant !== "R-404A" && result.savingsKwPc > 0 && (
                      <div className="border-t border-slate-700 pt-2 text-emerald-400 text-xs">
                        💡 {inp.refrigerant} gives {result.savingsKwPc.toFixed(1)}% lower energy vs R-404A baseline
                        → Save ₹{(result.annualCost * result.savingsKwPc / 100).toLocaleString("en-IN", { maximumFractionDigits: 0 })}/year
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* IBT vs Direct chilling comparison */}
                <Alert className="bg-cyan-50 border-cyan-200">
                  <Info className="h-4 w-4 text-cyan-600" />
                  <AlertTitle className="text-cyan-800 text-sm">IBT Advantage vs Direct Chilling</AlertTitle>
                  <AlertDescription className="text-xs text-cyan-700 space-y-1 mt-1">
                    <div>✅ Smaller compressor needed — builds ice overnight at off-peak tariff</div>
                    <div>✅ Electricity cost saving: night tariff vs peak (~30–40% cheaper)</div>
                    <div>✅ No compressor running during peak milk intake — silent operation</div>
                    <div>✅ Power cuts handled — ice acts as energy buffer</div>
                  </AlertDescription>
                </Alert>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Snowflake className="h-10 w-10 mx-auto mb-3 text-blue-200" />
                <p>Pehle calculate karein — tab tank aur energy data aayega.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* ── CALCULATE BUTTON ─────────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-md"
        >
          <Snowflake className="w-4 h-4 mr-2" />
          Calculate IBT Load
        </Button>
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED WATER AUDIT (WMR) CALCULATOR
// Drop-in Replacement for WmrCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana WmrCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── BENCHMARKS ───────────────────────────────────────────
const WMR_BENCHMARKS = [
  { label: "World Class",     max: 1.0,  color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-300", badge: "bg-emerald-600" },
  { label: "Excellent",       max: 1.5,  color: "text-green-700",   bg: "bg-green-50 border-green-300",     badge: "bg-green-600"   },
  { label: "Good",            max: 2.0,  color: "text-blue-700",    bg: "bg-blue-50 border-blue-300",       badge: "bg-blue-600"    },
  { label: "Average",         max: 3.0,  color: "text-yellow-700",  bg: "bg-yellow-50 border-yellow-300",   badge: "bg-yellow-500"  },
  { label: "Poor",            max: 5.0,  color: "text-orange-700",  bg: "bg-orange-50 border-orange-300",   badge: "bg-orange-500"  },
  { label: "Critical",        max: Infinity, color: "text-red-700", bg: "bg-red-50 border-red-300",         badge: "bg-red-600"     },
] as const;

// Department-wise sub-categories
const DEPT_CATEGORIES = {
  process: {
    label: "🏭 Process Water",
    color: "blue",
    subs: [
      { key: "cip",       label: "CIP (Cleaning-in-Place)",     default: "20000", benchmark: 0.35 },
      { key: "crateWash", label: "Crate / Vessel Washing",      default: "8000",  benchmark: 0.15 },
      { key: "floor",     label: "Floor / Area Washing",        default: "6000",  benchmark: 0.10 },
      { key: "product",   label: "Product (dilution/rinse)",    default: "6000",  benchmark: 0.08 },
    ],
  },
  utility: {
    label: "⚙️ Utility Water",
    color: "orange",
    subs: [
      { key: "boiler",    label: "Boiler Feed Water",           default: "10000", benchmark: 0.18 },
      { key: "cooling",   label: "Cooling Tower Makeup",        default: "5000",  benchmark: 0.08 },
      { key: "chiller",   label: "Chiller / IBT Makeup",        default: "3000",  benchmark: 0.05 },
      { key: "vacuum",    label: "Vacuum Pump / Condenser",     default: "2000",  benchmark: 0.03 },
    ],
  },
  domestic: {
    label: "🏠 Domestic & Misc",
    color: "purple",
    subs: [
      { key: "staff",     label: "Staff / Canteen / Toilets",   default: "2000",  benchmark: 0.03 },
      { key: "garden",    label: "Gardening / Horticulture",    default: "1000",  benchmark: 0.01 },
      { key: "etp",       label: "ETP / STP Process",           default: "1500",  benchmark: 0.02 },
      { key: "misc",      label: "Misc / Losses / Leakages",    default: "500",   benchmark: 0.01 },
    ],
  },
} as const;

type DeptKey = keyof typeof DEPT_CATEGORIES;
type SubValues = Record<string, string>;

// ── PLANT PRESETS ─────────────────────────────────────────
const WMR_PRESETS = {
  "Small Dairy (20KL)":  { milk: "20000", cip: "7000",  crateWash: "3000", floor: "2000", product: "2000", boiler: "3000", cooling: "1500", chiller: "1000", vacuum: "500",  staff: "800",  garden: "300",  etp: "500",  misc: "200"  },
  "Medium Plant (50KL)": { milk: "50000", cip: "18000", crateWash: "7000", floor: "5000", product: "5000", boiler: "9000", cooling: "4000", chiller: "2500", vacuum: "1500", staff: "1500", garden: "600",  etp: "1000", misc: "400"  },
  "Large Plant (1L L)":  { milk: "100000",cip: "35000", crateWash: "14000",floor: "10000",product: "9000", boiler: "18000",cooling: "8000", chiller: "5000", vacuum: "3000", staff: "3000", garden: "1200", etp: "2000", misc: "800"  },
} as const;

// ── MAIN COMPONENT ────────────────────────────────────────
function WmrCalc() {
  const { toast } = useToast();

  const [milk, setMilk] = useState("50000");
  const [vals, setVals] = useState<SubValues>(() => {
    const v: SubValues = {};
    Object.values(DEPT_CATEGORIES).forEach(d => d.subs.forEach(s => { v[s.key] = s.default; }));
    return v;
  });
  const [result, setResult]     = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"inputs" | "results" | "savings">("inputs");
  const [waterCost, setWaterCost] = useState("15");  // ₹/KL
  const [operDays,  setOperDays]  = useState("300");

  const setV = (k: string, v: string) => setVals(p => ({ ...p, [k]: v }));
  const { validatePositive } = useInputValidation();

  // Apply preset
  const applyPreset = (name: keyof typeof WMR_PRESETS) => {
    const p = WMR_PRESETS[name] as Record<string, string>;
    setMilk(p.milk);
    setVals(prev => {
      const next = { ...prev };
      Object.keys(p).forEach(k => { if (k !== "milk") next[k] = p[k]; });
      return next;
    });
    setResult(null);
    toast({ title: "Preset Applied", description: name });
  };

  // Get benchmark grade
  const getGrade = (ratio: number) =>
    WMR_BENCHMARKS.find(b => ratio <= b.max) ?? WMR_BENCHMARKS[WMR_BENCHMARKS.length - 1];

  // ── CALCULATE ─────────────────────────────────────────
  const calculate = useCallback(() => {
    const M = parseFloat(milk) || 0;
    if (M <= 0) { toast({ variant: "destructive", title: "Enter milk processed volume." }); return; }

    const wCost = parseFloat(waterCost) || 15;
    const days  = parseFloat(operDays)  || 300;

    // Department totals
    const deptTotals: Record<DeptKey, number> = { process: 0, utility: 0, domestic: 0 };
    const subVals: Record<string, number>     = {};
    const subWMR:  Record<string, number>     = {};
    const subExcess: Record<string, number>   = {};

    Object.entries(DEPT_CATEGORIES).forEach(([dkey, dept]) => {
      dept.subs.forEach(s => {
        const v = parseFloat(vals[s.key]) || 0;
        subVals[s.key]   = v;
        subWMR[s.key]    = v / M;
        subExcess[s.key] = Math.max(0, v / M - s.benchmark);
        deptTotals[dkey as DeptKey] += v;
      });
    });

    const totalWater = Object.values(deptTotals).reduce((a, b) => a + b, 0);
    const wmr        = totalWater / M;
    const grade      = getGrade(wmr);

    // Dept WMR
    const deptWMR = {
      process:  deptTotals.process  / M,
      utility:  deptTotals.utility  / M,
      domestic: deptTotals.domestic / M,
    };

    // Benchmark totals per dept
    const benchmarkWMR = {
      process:  DEPT_CATEGORIES.process.subs.reduce((a, s)  => a + s.benchmark, 0),
      utility:  DEPT_CATEGORIES.utility.subs.reduce((a, s)  => a + s.benchmark, 0),
      domestic: DEPT_CATEGORIES.domestic.subs.reduce((a, s) => a + s.benchmark, 0),
    };
    const benchmarkTotal = Object.values(benchmarkWMR).reduce((a, b) => a + b, 0);

    // Savings potential
    const excessWMR       = Math.max(0, wmr - benchmarkTotal);
    const excessDailyL    = excessWMR * M;
    const excessDailyCost = excessDailyL / 1000 * wCost;
    const excessAnnualL   = excessDailyL * days;
    const excessAnnualCost = excessAnnualL / 1000 * wCost;

    // Top 3 over-consuming sub-categories
    const topExcess = Object.entries(subExcess)
      .filter(([, v]) => v > 0)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([key]) => {
        const sub = (Object.values(DEPT_CATEGORIES) as any[]).flatMap((d: any) => d.subs).find((s: any) => s.key === key)!;
        return { label: sub.label, excess: subExcess[key], val: subVals[key], bench: sub.benchmark };
      });

    const warnings: string[] = [];
    if (deptWMR.process  > benchmarkWMR.process  * 1.3) warnings.push(`Process water ${(deptWMR.process).toFixed(2)} L/L — CIP & washing review needed.`);
    if (deptWMR.utility  > benchmarkWMR.utility  * 1.3) warnings.push(`Utility water ${(deptWMR.utility).toFixed(2)} L/L — check boiler blowdown & cooling tower cycles.`);
    if (subExcess["misc"] > 0.02) warnings.push(`Misc/leakage WMR ${subWMR["misc"].toFixed(3)} L/L — conduct leak survey (pipes, valves, taps).`);
    if (wmr > 3.0) warnings.push(`Overall WMR ${wmr.toFixed(2)} is critical. Set 6-month target: ≤ 2.5 → ≤ 2.0.`);

    setResult({
      wmr, grade, totalWater, deptTotals, deptWMR,
      benchmarkTotal, benchmarkWMR,
      subWMR, subExcess, subVals,
      excessWMR, excessDailyL, excessDailyCost,
      excessAnnualL, excessAnnualCost,
      topExcess, warnings, M, days, wCost,
    });

    setActiveTab("results");
    toast({
      title: `WMR: ${wmr.toFixed(2)} L/L — ${getGrade(wmr).label}`,
      description: `Total: ${(totalWater / 1000).toFixed(0)} KL/day | Savings potential: ₹${excessAnnualCost.toFixed(0)}/yr`,
    });
  }, [milk, vals, waterCost, operDays, toast]);

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-teal-200 bg-teal-50/20">
      <CardHeader className="pb-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-t-lg border-b border-teal-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-teal-800">
            <Droplets className="w-5 h-5 text-teal-600" />
            Water Consumption Audit (WMR)
          </span>
          {result && (
            <Badge className={`text-white text-sm px-3 py-1 ${result.grade.badge}`}>
              {result.wmr.toFixed(2)} L/L — {result.grade.label}
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-teal-600 text-xs">
          Dept-wise breakdown · Benchmark comparison · Savings potential · Annual cost
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── PRESETS ──────────────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Plant Presets</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(WMR_PRESETS) as Array<keyof typeof WMR_PRESETS>).map(name => (
              <button key={name} onClick={() => applyPreset(name)}
                className="px-3 py-1 rounded-full border border-teal-200 bg-white text-xs font-semibold text-teal-700 hover:bg-teal-600 hover:text-white transition-all shadow-sm">
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ── TABS ─────────────────────────────────────── */}
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="inputs"  className="text-xs">💧 Inputs</TabsTrigger>
            <TabsTrigger value="results" className="text-xs">📊 Results</TabsTrigger>
            <TabsTrigger value="savings" className="text-xs">💰 Savings</TabsTrigger>
          </TabsList>

          {/* ═════ TAB 1: INPUTS ════════════════════════ */}
          <TabsContent value="inputs" className="space-y-4 pt-3">

            {/* Milk + audit settings */}
            <Card className="border-teal-100 bg-white">
              <CardHeader className="p-3 pb-2 bg-teal-50 border-b border-teal-100">
                <CardTitle className="text-xs font-bold text-teal-700 uppercase">🥛 Production & Settings</CardTitle>
              </CardHeader>
              <CardContent className="p-3 grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <ValidatedInput
                    label="Total Milk Processed"
                    value={milk}
                    onChange={setMilk}
                    validation={validatePositive(milk, "Milk")}
                    unit="L/day"
                    colorScheme="teal"
                    icon={<Droplets className="h-3 w-3 text-teal-500" />}
                  />
                </div>
                <ValidatedInput
                  label="Water Cost"
                  value={waterCost}
                  onChange={setWaterCost}
                  validation={{ isValid: true, severity: "info" }}
                  unit="₹/KL"
                  helpText="Borewell: ₹5 | Municipal: ₹15–30"
                  colorScheme="green"
                />
                <ValidatedInput
                  label="Operating Days/Year"
                  value={operDays}
                  onChange={setOperDays}
                  validation={{ isValid: true, severity: "info" }}
                  unit="days"
                  colorScheme="blue"
                />
              </CardContent>
            </Card>

            {/* Per-department inputs */}
            {(Object.entries(DEPT_CATEGORIES) as [DeptKey, typeof DEPT_CATEGORIES[DeptKey]][]).map(([dkey, dept]) => (
              <Card key={dkey} className={`border-${dept.color}-100 bg-white`}>
                <CardHeader className={`p-3 pb-2 bg-${dept.color}-50 border-b border-${dept.color}-100`}>
                  <CardTitle className={`text-xs font-bold text-${dept.color}-700 uppercase`}>
                    {dept.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 grid grid-cols-2 gap-3">
                  {dept.subs.map(sub => (
                    <ValidatedInput
                      key={sub.key}
                      label={sub.label}
                      value={vals[sub.key]}
                      onChange={v => setV(sub.key, v)}
                      validation={{ isValid: parseFloat(vals[sub.key]) >= 0, severity: "error" }}
                      unit="L/day"
                      helpText={`Benchmark: ${sub.benchmark} L/L`}
                      colorScheme={dept.color as any}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* ═════ TAB 2: RESULTS ═══════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Overall WMR */}
                <div className={`p-5 rounded-xl border-2 ${result.grade.bg} text-center`}>
                  <div className="text-xs uppercase font-bold text-slate-500 mb-1">Overall Water:Milk Ratio</div>
                  <div className={`text-5xl font-black ${result.grade.color}`}>
                    {result.wmr.toFixed(2)}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">L water per L milk</div>
                  <Badge className={`mt-2 ${result.grade.badge} text-white text-sm px-4 py-1`}>
                    {result.grade.label}
                  </Badge>
                </div>

                {/* WMR benchmark comparison bar */}
                <Card className="bg-white border-slate-200">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-xs font-bold text-slate-600 uppercase">Industry Benchmark Scale</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2">
                    {WMR_BENCHMARKS.filter(b => b.max < 6).map((b, i, arr) => {
                      const rangeMin = i === 0 ? 0 : arr[i - 1].max;
                      const isCurrent = result.wmr > rangeMin && result.wmr <= b.max;
                      return (
                        <div key={b.label} className={`flex items-center gap-3 p-2 rounded-lg ${isCurrent ? b.bg + " border" : ""}`}>
                          <div className={`w-2 h-2 rounded-full ${isCurrent ? b.badge : "bg-slate-200"}`} />
                          <span className={`text-xs font-semibold flex-1 ${isCurrent ? b.color : "text-slate-400"}`}>{b.label}</span>
                          <span className={`text-xs ${isCurrent ? b.color + " font-black" : "text-slate-400"}`}>
                            {rangeMin === 0 ? `≤ ${b.max}` : `${rangeMin}–${b.max}`} L/L
                            {isCurrent ? " ← You" : ""}
                          </span>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Dept breakdown */}
                <Card className="bg-white border-slate-200">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-xs font-bold text-slate-600 uppercase">Department Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    {(Object.entries(DEPT_CATEGORIES) as [DeptKey, any][]).map(([dkey, dept]) => {
                      const deptWMR  = result.deptWMR[dkey];
                      const benchWMR = result.benchmarkWMR[dkey];
                      const pct      = (result.deptTotals[dkey] / result.totalWater) * 100;
                      const over     = deptWMR > benchWMR;
                      return (
                        <div key={dkey} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold text-slate-700">{dept.label}</span>
                            <div className="text-right">
                              <span className={`font-black ${over ? "text-red-600" : "text-green-700"}`}>
                                {deptWMR.toFixed(3)} L/L
                              </span>
                              <span className="text-slate-400 text-xs ml-2">(bench: {benchWMR.toFixed(2)})</span>
                            </div>
                          </div>
                          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${over ? "bg-red-400" : "bg-teal-500"}`}
                              style={{ width: `${Math.min(pct, 100)}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-400">
                            <span>{(result.deptTotals[dkey] / 1000).toFixed(1)} KL/day ({pct.toFixed(0)}% of total)</span>
                            <span>{over ? `⚠️ +${((deptWMR - benchWMR)).toFixed(3)} above benchmark` : "✓ Within benchmark"}</span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="border-t-2 pt-2 flex justify-between font-bold text-teal-800">
                      <span>Total</span>
                      <span>{(result.totalWater / 1000).toFixed(1)} KL/day · {result.wmr.toFixed(2)} L/L</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Top over-consuming subcategories */}
                {result.topExcess.length > 0 && (
                  <Card className="bg-orange-50 border-orange-200">
                    <CardHeader className="p-3 pb-1 border-b border-orange-100">
                      <CardTitle className="text-sm text-orange-800">🔍 Top Improvement Opportunities</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-2 text-sm">
                      {result.topExcess.map((e: any, i: number) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-slate-700">{e.label}</span>
                          <div className="text-right">
                            <span className="font-bold text-orange-700">{(e.val / 1000).toFixed(1)} KL</span>
                            <span className="text-[10px] text-orange-500 ml-1">
                              (+{(e.excess).toFixed(3)} L/L above benchmark)
                            </span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <Alert className="bg-yellow-50 border-yellow-300">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 text-sm">Action Required</AlertTitle>
                    <AlertDescription className="text-xs text-yellow-700 space-y-1">
                      {result.warnings.map((w: string, i: number) => <div key={i}>⚠️ {w}</div>)}
                    </AlertDescription>
                  </Alert>
                )}
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Droplets className="h-10 w-10 mx-auto mb-3 text-teal-200" />
                <p>Inputs bharein aur <strong>Run Audit</strong> press karein.</p>
              </div>
            )}
          </TabsContent>

          {/* ═════ TAB 3: SAVINGS ═══════════════════════ */}
          <TabsContent value="savings" className="space-y-4 pt-3">
            {result ? (
              <>
                {/* Savings summary */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-teal-600 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-80 font-bold">Excess Water/Day</div>
                    <div className="text-2xl font-black">{(result.excessDailyL / 1000).toFixed(1)} KL</div>
                    <div className="text-xs opacity-70">above benchmark WMR</div>
                  </div>
                  <div className="bg-slate-800 text-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-[10px] uppercase opacity-70 font-bold">Annual Savings Potential</div>
                    <div className="text-2xl font-black text-green-300">
                      ₹{result.excessAnnualCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs opacity-60">
                      {(result.excessAnnualL / 1000).toFixed(0)} KL/year
                    </div>
                  </div>
                </div>

                {/* Sub-category savings table */}
                <Card className="bg-white border-teal-100">
                  <CardHeader className="p-3 pb-1 border-b">
                    <CardTitle className="text-xs font-bold text-teal-700 uppercase">Sub-Category vs Benchmark</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-1">
                    {(Object.values(DEPT_CATEGORIES) as any[]).flatMap((d: any) => d.subs).map((sub: any) => {
                      const actual = result.subWMR[sub.key];
                      const excess = result.subExcess[sub.key];
                      const over   = excess > 0;
                      const savL   = excess * result.M;
                      const savRs  = (savL / 1000) * result.wCost * result.days;
                      return (
                        <div key={sub.key} className={`flex justify-between items-center py-1 px-2 rounded text-xs ${over ? "bg-red-50" : ""}`}>
                          <span className={over ? "text-red-700 font-semibold" : "text-slate-500"}>{sub.label}</span>
                          <div className="text-right space-x-2">
                            <span className={over ? "text-red-600 font-bold" : "text-green-600 font-semibold"}>
                              {actual.toFixed(3)} / {sub.benchmark}
                            </span>
                            {over && (
                              <span className="text-orange-600 font-bold">
                                ₹{savRs.toLocaleString("en-IN", { maximumFractionDigits: 0 })}/yr
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Conservation tips */}
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="p-3 pb-1 border-b border-green-100">
                    <CardTitle className="text-sm text-green-800">🌿 Water Conservation Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2 text-xs text-green-800">
                    {[
                      { area: "CIP",         tip: "Optimize sequences — reduce pre-rinse. Install flow meters on CIP skid. Recover final rinse as pre-rinse for next cycle." },
                      { area: "Crate wash",  tip: "Recirculate wash water. Use high-pressure low-volume nozzles (saves 30–50%)." },
                      { area: "Boiler",      tip: "Increase condensate return to 80%+. Control TDS blowdown — continuous blowdown valve instead of manual." },
                      { area: "Cooling",     tip: "Increase cycles of concentration (CoC) from 3 to 5 — reduces makeup water by 30%." },
                      { area: "Leakages",    tip: "Monthly water audit walk. Fix dripping valves — 1 drip/sec = 30+ KL/year." },
                    ].map((t, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="bg-green-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded h-fit mt-0.5 whitespace-nowrap">{t.area}</span>
                        <span>{t.tip}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Monthly/annual summary */}
                <div className="bg-slate-50 border rounded-lg p-3 text-xs text-slate-500 space-y-1">
                  <div className="font-bold text-slate-600 mb-1">📅 Annual Water Summary ({result.days} days)</div>
                  <div className="flex justify-between">
                    <span>Total water consumed</span>
                    <span className="font-bold">{(result.totalWater * result.days / 1000000).toFixed(1)} ML/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Excess above benchmark</span>
                    <span className="font-bold text-orange-600">{(result.excessAnnualL / 1000000).toFixed(2)} ML/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost @ ₹{result.wCost}/KL</span>
                    <span className="font-bold text-red-600">₹{(result.totalWater * result.days / 1000 * result.wCost).toLocaleString("en-IN", { maximumFractionDigits: 0 })}/year</span>
                  </div>
                  <div className="flex justify-between font-bold text-green-700">
                    <span>Savings if WMR → benchmark</span>
                    <span>₹{result.excessAnnualCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}/year</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm">
                <Droplets className="h-10 w-10 mx-auto mb-3 text-teal-200" />
                <p>Pehle audit run karein — tab savings analysis aayega.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* ── CALCULATE BUTTON ─────────────────────────── */}
        <Button
          onClick={calculate}
          className="w-full h-11 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold shadow-md"
        >
          <Droplets className="w-4 h-4 mr-2" />
          Run Water Audit
        </Button>
      </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// ADVANCED DISPATCH LOGISTICS PLANNER
// Drop-in Replacement for DispatchCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana DispatchCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── PRODUCT DATABASE ─────────────────────────────────────
const DISPATCH_PRODUCTS = {
  pouch_500:   { label: "🥛 Milk Pouch 500ml",      perCrate: 24,  unitWtG: 510,  crateWtKg: 14.0, category: "pouch"  },
  pouch_1000:  { label: "🥛 Milk Pouch 1L",         perCrate: 12,  unitWtG: 1020, crateWtKg: 13.5, category: "pouch"  },
  pouch_200:   { label: "🥛 Pouch 200ml",           perCrate: 48,  unitWtG: 210,  crateWtKg: 11.0, category: "pouch"  },
  dahi_cup:    { label: "🫙 Dahi Cup 200g",         perCrate: 40,  unitWtG: 220,  crateWtKg: 10.0, category: "cup"    },
  dahi_400:    { label: "🫙 Dahi Cup 400g",         perCrate: 20,  unitWtG: 420,  crateWtKg: 9.5,  category: "cup"    },
  lassi_200:   { label: "🥤 Lassi Pouch 200ml",     perCrate: 48,  unitWtG: 215,  crateWtKg: 11.5, category: "pouch"  },
  lassi_500:   { label: "🥤 Lassi Bottle 500ml",    perCrate: 24,  unitWtG: 540,  crateWtKg: 14.0, category: "bottle" },
  paneer_200:  { label: "🧀 Paneer Block 200g",     perCrate: 20,  unitWtG: 220,  crateWtKg: 5.0,  category: "block"  },
  butter_100:  { label: "🧈 Butter 100g",           perCrate: 48,  unitWtG: 110,  crateWtKg: 6.5,  category: "block"  },
  ghee_1L:     { label: "🫙 Ghee Jar 1L",           perCrate: 12,  unitWtG: 980,  crateWtKg: 13.0, category: "jar"    },
  can_40L:     { label: "🪣 Bulk Can 40L",          perCrate: 1,   unitWtG: 43000,crateWtKg: 43.0, category: "can"    },
  can_20L:     { label: "🪣 Bulk Can 20L",          perCrate: 1,   unitWtG: 22000,crateWtKg: 22.0, category: "can"    },
} as const;

type ProductKey = keyof typeof DISPATCH_PRODUCTS;

// ── VEHICLE DATABASE ──────────────────────────────────────
const VEHICLES = [
  { label: "🛵 Two-Wheeler / Auto",      maxKg: 200,   maxCrates: 20,   costPerKm: 3,   coldChain: false },
  { label: "🚐 Small Van (Bolero/Innova)", maxKg: 700, maxCrates: 80,   costPerKm: 8,   coldChain: false },
  { label: "🚚 Mini Truck (Canter 407)",  maxKg: 2500,  maxCrates: 300,  costPerKm: 15,  coldChain: true  },
  { label: "🚛 Medium Truck (Eicher 1109)",maxKg: 6000, maxCrates: 750,  costPerKm: 22,  coldChain: true  },
  { label: "🚛 Large Truck (10T Tata)",   maxKg: 10000, maxCrates: 1200, costPerKm: 32,  coldChain: true  },
  { label: "🚛 Heavy Truck (12T+)",       maxKg: 15000, maxCrates: 1800, costPerKm: 40,  coldChain: true  },
];

// ── ROUTE PRESETS ─────────────────────────────────────────
const ROUTE_PRESETS = {
  "Local (15 km)":     "15",
  "City (40 km)":      "40",
  "District (80 km)":  "80",
  "Inter-city (150km)":"150",
} as const;

// ── DISPATCH ITEM STATE ───────────────────────────────────
interface DispatchItem {
  id:      string;
  product: ProductKey;
  qty:     string;   // number of units (packets, cans, etc.)
}

// ── MAIN COMPONENT ────────────────────────────────────────
function DispatchCalc() {
  const { toast } = useToast();

  const [items, setItems] = useState<DispatchItem[]>([
    { id: "i1", product: "pouch_500",  qty: "15000" },
    { id: "i2", product: "pouch_1000", qty: "2000"  },
    { id: "i3", product: "dahi_cup",   qty: "1000"  },
  ]);
  const [routeKm,    setRouteKm]    = useState("40");
  const [fuelRate,   setFuelRate]   = useState("12");  // km/L
  const [fuelPrice,  setFuelPrice]  = useState("100"); // ₹/L diesel
  const [coldChain,  setColdChain]  = useState(true);
  const [coldCostKm, setColdCostKm] = useState("5");   // ₹/km extra for reefer
  const [result, setResult]         = useState<any>(null);

  const addItem = () => setItems(p => [
    ...p, { id: `i${Date.now()}`, product: "pouch_500", qty: "500" },
  ]);
  const removeItem = (id: string) => { if (items.length > 1) setItems(p => p.filter(i => i.id !== id)); };
  const updateItem = (id: string, key: keyof DispatchItem, val: string) =>
    setItems(p => p.map(i => i.id === id ? { ...i, [key]: val } : i));

  const calculate = useCallback(() => {
    const km      = parseFloat(routeKm)   || 0;
    const fuelEff = parseFloat(fuelRate)  || 12;
    const fuelPr  = parseFloat(fuelPrice) || 100;
    const coldCKm = coldChain ? (parseFloat(coldCostKm) || 0) : 0;

    const itemResults = items.map(item => {
      const prod  = DISPATCH_PRODUCTS[item.product];
      const qty   = parseFloat(item.qty) || 0;
      const crates = Math.ceil(qty / prod.perCrate);
      const wt     = qty * prod.unitWtG / 1000;
      const crateWt= crates * 1.8; // avg crate tare 1.8 kg
      return {
        label:  prod.label,
        qty,
        crates,
        productWtKg: wt,
        crateWtKg:   crateWt,
        totalWtKg:   wt + crateWt,
        category:    prod.category,
        perCrate:    prod.perCrate,
      };
    });

    const totalCrates    = itemResults.reduce((s, r) => s + r.crates,     0);
    const totalProductKg = itemResults.reduce((s, r) => s + r.productWtKg,0);
    const totalTareKg    = itemResults.reduce((s, r) => s + r.crateWtKg,  0);
    const totalLoadKg    = totalProductKg + totalTareKg;
    const totalLoadT     = totalLoadKg / 1000;

    const suitableVehicles = VEHICLES.filter(v =>
      v.maxKg >= totalLoadKg &&
      v.maxCrates >= totalCrates &&
      (!coldChain || v.coldChain)
    );
    const recommended = suitableVehicles[0] ?? VEHICLES[VEHICLES.length - 1];

    const tripsWeight = Math.ceil(totalLoadKg  / recommended.maxKg);
    const tripsCrates = Math.ceil(totalCrates  / recommended.maxCrates);
    const tripsNeeded = Math.max(tripsWeight, tripsCrates, 1);

    const utilWt  = (totalLoadKg  / (recommended.maxKg     * tripsNeeded)) * 100;
    const utilCrt = (totalCrates  / (recommended.maxCrates  * tripsNeeded)) * 100;
    const avgUtil = (utilWt + utilCrt) / 2;

    const fuelCost = fuelEff > 0 ? (km / fuelEff) * fuelPr * tripsNeeded : 0;
    const transportCost = recommended.costPerKm * km * tripsNeeded;
    const coldCost = coldChain ? coldCKm * km * tripsNeeded : 0;
    const totalCost = fuelCost + transportCost + coldCost;

    setResult({
      itemResults,
      totalCrates,
      totalProductKg,
      totalTareKg,
      totalLoadKg,
      totalLoadT,
      recommended,
      tripsNeeded,
      utilWt,
      utilCrt,
      avgUtil,
      fuelCost,
      transportCost,
      coldCost,
      totalCost,
    });

    toast({
      title: "🚛 लॉजिस्टिक्स योजना तैयार (Logistics Planned)",
      description: `वाहन (Vehicle): ${recommended.label} | फेरे (Trips): ${tripsNeeded}`,
    });
  }, [items, routeKm, fuelRate, fuelPrice, coldChain, coldCostKm, toast]);

  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
        <Truck className="h-4 w-4 text-indigo-600" />
        <AlertTitle className="text-indigo-800 font-bold">डिस्पैच लॉजिस्टिक्स प्लानर (Dispatch Logistics Planner)</AlertTitle>
        <AlertDescription className="text-xs text-indigo-700">
          उत्पादों की मात्रा और क्रेट्स के आधार पर वाहन क्षमता चयन, फेरे और ईंधन लागत विश्लेषण।<br/>
          <span className="text-indigo-500 font-medium">Optimize vehicle capacity, trips & route cost based on total dispatch weight and crates.</span>
        </AlertDescription>
      </Alert>

      {/* Item Planner Section */}
      <Card className="border-indigo-100 bg-white">
        <CardHeader className="p-3 pb-2 bg-indigo-50/50 border-b border-indigo-100 flex flex-row justify-between items-center">
          <CardTitle className="text-xs font-bold text-indigo-800 uppercase">📦 डिस्पैच उत्पाद सूची (Dispatch Product List)</CardTitle>
          <Button variant="outline" size="sm" onClick={addItem} className="h-7 text-xs border-indigo-300 text-indigo-700 hover:bg-indigo-50">
            + उत्पाद जोड़ें (Add Item)
          </Button>
        </CardHeader>
        <CardContent className="p-3 space-y-2.5">
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_auto] gap-2 items-end border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
              <div className="space-y-1">
                <Label className="text-[10px] text-slate-500 font-semibold uppercase">उत्पाद (Product)</Label>
                <Select value={item.product} onValueChange={(val) => updateItem(item.id, "product", val as ProductKey)}>
                  <SelectTrigger className="h-9 bg-white border-slate-200 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(DISPATCH_PRODUCTS).map(([key, p]) => (
                      <SelectItem key={key} value={key} className="text-xs">
                        {p.label} (Crate: {p.perCrate} qty)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] text-slate-500 font-semibold uppercase">मात्रा पैकेट्स/नग (Qty Packs/Units)</Label>
                <Input
                  type="number"
                  value={item.qty}
                  onChange={(e) => updateItem(item.id, "qty", e.target.value)}
                  className="h-9 text-xs"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                disabled={items.length <= 1}
                onClick={() => removeItem(item.id)}
                className="h-9 w-9 text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Parameters */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
        <div>
          <Label className="text-[10px] text-slate-500 font-bold uppercase">दूरी (Route Distance)</Label>
          <div className="flex gap-1.5 mt-1">
            <Input
              type="number"
              value={routeKm}
              onChange={(e) => setRouteKm(e.target.value)}
              className="h-9 text-xs bg-white"
            />
            <span className="text-[10px] text-slate-400 self-center font-semibold">km</span>
          </div>
        </div>

        <div>
          <Label className="text-[10px] text-slate-500 font-bold uppercase">ईंधन माइलेज (Mileage)</Label>
          <div className="flex gap-1.5 mt-1">
            <Input
              type="number"
              value={fuelRate}
              onChange={(e) => setFuelRate(e.target.value)}
              className="h-9 text-xs bg-white"
            />
            <span className="text-[10px] text-slate-400 self-center font-semibold">km/L</span>
          </div>
        </div>

        <div>
          <Label className="text-[10px] text-slate-500 font-bold uppercase">ईंधन दर (Fuel Price)</Label>
          <div className="flex gap-1.5 mt-1">
            <Input
              type="number"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              className="h-9 text-xs bg-white"
            />
            <span className="text-[10px] text-slate-400 self-center font-semibold">₹/L</span>
          </div>
        </div>

        <div>
          <Label className="text-[10px] text-slate-500 font-bold uppercase">रीफर एक्स्ट्रा (Reefer Addon)</Label>
          <div className="flex gap-1.5 mt-1">
            <Input
              type="number"
              value={coldCostKm}
              onChange={(e) => setColdCostKm(e.target.value)}
              disabled={!coldChain}
              className="h-9 text-xs bg-white disabled:opacity-60"
            />
            <span className="text-[10px] text-slate-400 self-center font-semibold">₹/km</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-5">
          <Checkbox id="cold-chain" checked={coldChain} onCheckedChange={(c) => setColdChain(!!c)} />
          <Label htmlFor="cold-chain" className="text-xs font-semibold cursor-pointer text-slate-700 flex items-center gap-1">
            <Snowflake className="w-3.5 h-3.5 text-blue-500" /> कोल्ड चेन (Cold Chain)
          </Label>
        </div>
      </div>

      {/* Preset Route Buttons */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-slate-500 font-bold uppercase">दूरी प्रीसेट (Route Presets):</span>
        {Object.entries(ROUTE_PRESETS).map(([label, km]) => (
          <button
            key={label}
            onClick={() => setRouteKm(km)}
            className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border transition-all"
          >
            {label}
          </button>
        ))}
      </div>

      <Button onClick={calculate} className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md">
        🚛 लॉजिस्टिक्स मार्ग प्लान करें (Plan Dispatch Route)
      </Button>

      {/* Results */}
      {result && (
        <div className="space-y-4 animate-in fade-in">
          {/* Main KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="bg-indigo-600 text-white p-3 rounded-xl shadow-sm text-center">
              <div className="text-[9px] uppercase opacity-80 font-bold">अनुशंसित वाहन (Vehicle)</div>
              <div className="text-sm font-extrabold truncate">{result.recommended.label}</div>
              <div className="text-[9px] opacity-75">Max: {result.recommended.maxKg} kg</div>
            </div>
            <div className="bg-blue-600 text-white p-3 rounded-xl shadow-sm text-center">
              <div className="text-[9px] uppercase opacity-80 font-bold">कुल फेरे (Trips Needed)</div>
              <div className="text-xl font-extrabold">{result.tripsNeeded}</div>
              <div className="text-[9px] opacity-75">trips</div>
            </div>
            <div className="bg-violet-600 text-white p-3 rounded-xl shadow-sm text-center">
              <div className="text-[9px] uppercase opacity-80 font-bold">कुल क्रेट्स (Total Crates)</div>
              <div className="text-xl font-extrabold">{result.totalCrates}</div>
              <div className="text-[9px] opacity-75">crates</div>
            </div>
            <div className="bg-purple-600 text-white p-3 rounded-xl shadow-sm text-center">
              <div className="text-[9px] uppercase opacity-80 font-bold">कुल लोड (Total Weight)</div>
              <div className="text-xl font-extrabold">{result.totalLoadKg.toFixed(0)} kg</div>
              <div className="text-[9px] opacity-75">{(result.totalLoadT).toFixed(2)} tons</div>
            </div>
            <div className="bg-green-600 text-white p-3 rounded-xl shadow-sm text-center col-span-2 md:col-span-1">
              <div className="text-[9px] uppercase opacity-80 font-bold">कुल अनुमानित लागत (Est. Cost)</div>
              <div className="text-xl font-extrabold">₹ {result.totalCost.toFixed(0)}</div>
              <div className="text-[9px] opacity-75">Fuel + Toll + Addon</div>
            </div>
          </div>

          {/* Utilization & Cost Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card className="border-slate-100">
              <CardHeader className="p-3 pb-1 border-b">
                <CardTitle className="text-xs font-bold text-slate-600 uppercase">📊 वाहन क्षमता उपयोग (Vehicle Capacity Utilization)</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-3.5">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-500">वजन उपयोग (Weight Utilization)</span>
                    <span className="font-bold">{result.utilWt.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all ${result.utilWt > 100 ? "bg-red-500" : "bg-indigo-600"}`}
                      style={{ width: `${Math.min(100, result.utilWt)}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-500">क्रेट्स उपयोग (Crates Utilization)</span>
                    <span className="font-bold">{result.utilCrt.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all ${result.utilCrt > 100 ? "bg-red-500" : "bg-indigo-600"}`}
                      style={{ width: `${Math.min(100, result.utilCrt)}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between border-t border-slate-100 pt-2 text-xs">
                  <span className="text-slate-500 font-semibold">औसत क्षमता उपयोग (Avg Utilization):</span>
                  <span className="font-bold text-indigo-700">{result.avgUtil.toFixed(1)}%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-100">
              <CardHeader className="p-3 pb-1 border-b">
                <CardTitle className="text-xs font-bold text-slate-600 uppercase">💰 लागत का विवरण (Cost Breakdown)</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">ईंधन लागत (Fuel Cost)</span>
                  <span className="font-semibold text-slate-700">₹ {result.fuelCost.toFixed(0)}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">परिवहन बेस किराया (Base Vehicle Fare)</span>
                  <span className="font-semibold text-slate-700">₹ {result.transportCost.toFixed(0)}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">कोल्ड चेन अधिभार (Cold Chain Addon)</span>
                  <span className="font-semibold text-slate-700">₹ {result.coldCost.toFixed(0)}</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-green-700 text-sm">
                  <span>कुल अनुमानित लागत (Total Logistics Cost)</span>
                  <span>₹ {result.totalCost.toFixed(0)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function CreamSeparationCalc() {
  const { toast } = useToast();
  const { validatePositive, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // ── Theoretical Inputs (Predictor) ──
  const [theo, setTheo] = useState({
    milkQty:          "1000",   // kg milk input
    milkFat:          "4.5",    // % milk fat
    creamFat:         "40",     // % target cream fat
    skimFat:          "0.05",   // % skim milk fat
    // Advanced
    processLoss:      "0.1",    // % process spill/sludge loss
    // Costing
    milkPrice:        "45",     // ₹/kg raw milk
    creamPrice:       "350",    // ₹/kg cream sale price
    skimPrice:        "25",     // ₹/kg skim milk sale price
    batches:          "1",
    operDays:         "26",
  });

  // ── Actual Inputs (Tracker) ──
  const [actual, setActual] = useState({
    milkQty:          "1000",
    milkFat:          "4.5",
    creamFat:         "40",
    skimFat:          "0.05",
    creamObtained:    "",
    skimObtained:     "",
  });

  const [theoResult, setTheoResult]     = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ══════════════════════════════════════════════════════════
  // THEORETICAL CALCULATION (Predictor)
  // ══════════════════════════════════════════════════════════
  const calculateTheo = useCallback(() => {
    const M   = parseFloat(theo.milkQty)   || 0;
    const Fm  = parseFloat(theo.milkFat)  / 100;
    const Fc  = parseFloat(theo.creamFat) / 100;
    const Fs  = parseFloat(theo.skimFat)  / 100;
    const loss = parseFloat(theo.processLoss) / 100;
    const bat = parseFloat(theo.batches) || 1;
    const days = parseFloat(theo.operDays) || 26;

    const milkPrice  = parseFloat(theo.milkPrice)  || 0;
    const creamPrice = parseFloat(theo.creamPrice) || 0;
    const skimPrice  = parseFloat(theo.skimPrice)  || 0;

    if (M <= 0 || Fm <= 0 || Fc <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया सभी इनपुट मान सही भरें।" });
      return;
    }
    if (Fc <= Fm || Fm <= Fs) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "क्रीम वसा > दूध वसा > स्किम वसा होना चाहिए।" });
      return;
    }

    // Pearson Square Calculation
    let cream = (M * (Fm - Fs)) / (Fc - Fs);
    let skim = M - cream;

    // Apply process loss
    cream = cream * (1 - loss);
    skim = skim * (1 - loss);

    const creamYieldPct = (cream / M) * 100;
    const skimYieldPct = (skim / M) * 100;
    
    // Fat recovery
    const totalInputFat = M * Fm;
    const fatInCream = cream * Fc;
    const fatInSkim = skim * Fs;
    const fatLossKg = totalInputFat - (fatInCream + fatInSkim);
    const fatRecoveryPct = totalInputFat > 0 ? (fatInCream / totalInputFat) * 100 : 0;

    // Economics
    const totalMilkQty = M * bat;
    const milkCost = totalMilkQty * milkPrice;
    const creamRev = cream * bat * creamPrice;
    const skimRev = skim * bat * skimPrice;
    const totalRev = creamRev + skimRev;
    const grossProfit = totalRev - milkCost;
    const gpm = milkCost > 0 ? (grossProfit / milkCost) * 100 : 0;

    // Projections
    const monthlyCream = cream * bat * days;
    const monthlySkim = skim * bat * days;
    const monthlyRev = totalRev * days;
    const monthlyCost = milkCost * days;
    const monthlyProfit = grossProfit * days;

    const warnings: string[] = [];
    if (Fs > 0.001) warnings.push(`स्किम मिल्क में फैट प्रतिशत (${theo.skimFat}%) अधिक है। सेपरेटर डिस्क की सफाई या गति की जांच करें। (Skim milk fat is high. Check separator cleanliness or RPM.)`);
    if (Fc > 0.50) warnings.push(`क्रीम फैट ${theo.creamFat}% बहुत अधिक है। इतनी गाढ़ी क्रीम सेपरेशन लाइन में जाम का कारण बन सकती है। (Cream fat % is high, risk of choking the separator.)`);

    setTheoResult({
      cream, skim, creamYieldPct, skimYieldPct,
      fatInCream, fatInSkim, fatLossKg, fatRecoveryPct,
      milkCost, creamRev, skimRev, totalRev, grossProfit, gpm,
      monthlyCream, monthlySkim, monthlyRev, monthlyCost, monthlyProfit,
      warnings, M, bat, days
    });

    toast({
      title: "🧮 गणना पूरी (Calculated)",
      description: `क्रीम: ${cream.toFixed(1)} kg, स्किम: ${skim.toFixed(1)} kg`,
    });
  }, [theo, toast]);

  // ══════════════════════════════════════════════════════════
  // ACTUAL CALCULATION (Tracker)
  // ══════════════════════════════════════════════════════════
  const calculateActual = useCallback(() => {
    const M        = parseFloat(actual.milkQty)   || 0;
    const Fm       = parseFloat(actual.milkFat)  / 100;
    const Fc       = parseFloat(actual.creamFat) / 100;
    const Fs       = parseFloat(actual.skimFat)  / 100;
    const creamObt = parseFloat(actual.creamObtained) || 0;
    const skimObt  = parseFloat(actual.skimObtained)  || 0;

    if (M <= 0 || Fm <= 0 || creamObt <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया आवश्यक इनपुट भरें।" });
      return;
    }

    // Pearson Square Ideal
    const idealCream = (M * (Fm - Fs)) / (Fc - Fs);
    const idealSkim  = M - idealCream;

    // Actual recoveries
    const creamRecoveryPct = idealCream > 0 ? (creamObt / idealCream) * 100 : 0;
    const totalActualMass = creamObt + skimObt;
    const massLossKg = M - totalActualMass;
    const massLossPct = (massLossKg / M) * 100;

    // Efficiency grade
    let grade = "", gradeColor = "", gradeEmoji = "";
    if (creamRecoveryPct >= 99 && massLossPct <= 0.5) {
      grade = "Excellent (उत्कृष्ट)"; gradeColor = "text-green-700 bg-green-50 border-green-300"; gradeEmoji = "🏆";
    } else if (creamRecoveryPct >= 97 && massLossPct <= 1) {
      grade = "Good (अच्छा)"; gradeColor = "text-blue-700 bg-blue-50 border-blue-300"; gradeEmoji = "👍";
    } else if (creamRecoveryPct >= 94 && massLossPct <= 2) {
      grade = "Needs Improvement (सुधार ज़रूरी)"; gradeColor = "text-yellow-700 bg-yellow-50 border-yellow-300"; gradeEmoji = "⚠️";
    } else {
      grade = "Action Required (कार्रवाई ज़रूरी)"; gradeColor = "text-red-700 bg-red-50 border-red-300"; gradeEmoji = "🔴";
    }

    const warnings: string[] = [];
    if (creamRecoveryPct < 97) warnings.push(`क्रीम रिकवरी ${creamRecoveryPct.toFixed(1)}% कम है। सेपरेटर में फैट बायपास या असंतुलन की जांच करें। (Cream recovery is low. Check separator bypass.)`);
    if (massLossPct > 1.5) warnings.push(`दूध का कुल नुकसान ${massLossPct.toFixed(1)}% अधिक है। पाइपलाइन लीकेज या स्पिलेज की जांच करें। (Mass loss is high. Check for leaks or spillages.)`);

    setActualResult({
      idealCream, idealSkim,
      creamRecoveryPct, massLossKg, massLossPct,
      grade, gradeColor, gradeEmoji,
      warnings, M, creamObt, skimObt
    });

    toast({
      title: "📋 ट्रैकर गणना पूरी (Tracker Calculated)",
      description: `दक्षता (Efficiency): ${creamRecoveryPct.toFixed(1)}% — ${grade}`,
    });
  }, [actual, toast]);

  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <Droplets className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800 font-bold">क्रीम सेपरेशन (Pearson Square) और दक्षता ट्रैकर</AlertTitle>
        <AlertDescription className="text-xs text-blue-700">
          पियर्सन स्क्वायर विधि द्वारा क्रीम और स्किम मिल्क यील्ड, वसा रिकवरी दक्षता और आर्थिक विश्लेषण।<br/>
          <span className="text-blue-500 font-medium">Pearson Square method for Cream & Skim yields, fat recovery efficiency & economics.</span>
        </AlertDescription>
      </Alert>

      {/* ── Tab Toggle ── */}
      <Tabs value={activeCalc} onValueChange={v => setActiveCalc(v as "theoretical" | "actual")}>
        <TabsList className="grid grid-cols-2 bg-blue-100/55 p-1 rounded-lg">
          <TabsTrigger value="theoretical" className="text-xs font-bold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            🧮 Predictor (अनुमान)
          </TabsTrigger>
          <TabsTrigger value="actual" className="text-xs font-bold data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
            📋 Tracker (वास्तविक)
          </TabsTrigger>
        </TabsList>

        {/* ══════════════════════════════════════════════════════════
            TAB 1: THEORETICAL PREDICTOR
            ══════════════════════════════════════════════════════════ */}
        <TabsContent value="theoretical" className="space-y-4 pt-3">
          {/* Core Inputs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ValidatedInput
              label="दूध की मात्रा (Milk Qty)"
              value={theo.milkQty}
              onChange={v => setT("milkQty", v)}
              validation={validatePositive(theo.milkQty, "Milk quantity")}
              unit="kg"
              colorScheme="blue"
            />
            <ValidatedInput
              label="दूध वसा प्रतिशत (Milk Fat %)"
              value={theo.milkFat}
              onChange={v => setT("milkFat", v)}
              validation={validateNumber(theo.milkFat, 0.5, 15, "Milk fat")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="टारगेट क्रीम वसा (Cream Fat %)"
              value={theo.creamFat}
              onChange={v => setT("creamFat", v)}
              validation={validateNumber(theo.creamFat, 15, 65, "Cream fat")}
              unit="%"
              colorScheme="orange"
            />
            <ValidatedInput
              label="स्किम वसा प्रतिशत (Skim Fat %)"
              value={theo.skimFat}
              onChange={v => setT("skimFat", v)}
              validation={validateNumber(theo.skimFat, 0.01, 2, "Skim fat")}
              unit="%"
              colorScheme="blue"
            />
          </div>

          {/* Advanced Drawer Toggle */}
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex justify-between items-center text-xs font-semibold py-2 px-3 border border-blue-100 hover:bg-blue-50/50 rounded-lg"
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <Settings2 className="w-3.5 h-3.5" /> एडवांस्ड सेटिंग्स (Advanced Settings)
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
          </Button>

          {showAdvanced && (
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 max-w-sm">
              <ValidatedInput
                label="प्रोसेस वेस्ट/नुकसान % (Process Loss %)"
                value={theo.processLoss}
                onChange={v => setT("processLoss", v)}
                validation={validateNumber(theo.processLoss, 0, 5, "Process loss")}
                unit="%"
                colorScheme="red"
              />
            </div>
          )}

          {/* Costing Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox id="cream-costing" checked={enableCosting} onCheckedChange={(c) => setEnableCosting(!!c)} />
            <Label htmlFor="cream-costing" className="text-xs font-semibold cursor-pointer text-slate-700 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-green-600" /> कॉस्टिंग और प्रॉफिटेबिलिटी शामिल करें (Enable Costing & Profitability)
            </Label>
          </div>

          {enableCosting && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3 bg-green-50/30 rounded-xl border border-green-100">
              <ValidatedInput
                label="दूध का मूल्य (Milk Price)"
                value={theo.milkPrice}
                onChange={v => setT("milkPrice", v)}
                validation={validatePositive(theo.milkPrice, "Milk price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="क्रीम का मूल्य (Cream Price)"
                value={theo.creamPrice}
                onChange={v => setT("creamPrice", v)}
                validation={validatePositive(theo.creamPrice, "Cream price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="स्किम का मूल्य (Skim Price)"
                value={theo.skimPrice}
                onChange={v => setT("skimPrice", v)}
                validation={validatePositive(theo.skimPrice, "Skim price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="बैचेस (Batches)"
                value={theo.batches}
                onChange={v => setT("batches", v)}
                validation={validatePositive(theo.batches, "Batches")}
                unit="qty"
                colorScheme="blue"
              />
              <ValidatedInput
                label="कार्य दिवस (Operating Days)"
                value={theo.operDays}
                onChange={v => setT("operDays", v)}
                validation={validatePositive(theo.operDays, "Days")}
                unit="days"
                colorScheme="blue"
              />
            </div>
          )}

          <Button onClick={calculateTheo} className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md">
            🧮 यील्ड गणना करें (Calculate Separation Yields)
          </Button>

          {/* Results Display */}
          {theoResult && (
            <div className="space-y-4">
              {/* KPIs */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-orange-600 text-white p-3.5 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">क्रीम उत्पादन (Cream Output)</div>
                  <div className="text-xl font-extrabold">{theoResult.cream.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">{theoResult.creamYieldPct.toFixed(1)}% yield</div>
                </div>
                <div className="bg-blue-600 text-white p-3.5 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">स्किम मिल्क (Skim Milk)</div>
                  <div className="text-xl font-extrabold">{theoResult.skim.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">{theoResult.skimYieldPct.toFixed(1)}% yield</div>
                </div>
                <div className="bg-green-600 text-white p-3.5 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">वसा रिकवरी (Fat Recovery)</div>
                  <div className="text-xl font-extrabold">{theoResult.fatRecoveryPct.toFixed(2)}%</div>
                  <div className="text-[9px] opacity-75">क्रीम में सुरक्षित / in Cream</div>
                </div>
              </div>

              {/* Composition Breakdown */}
              <Card className="bg-blue-50/30 border-blue-200">
                <CardHeader className="p-3 pb-1 border-b border-blue-100">
                  <CardTitle className="text-xs font-bold text-blue-800 uppercase">🔬 वसा संतुलन (Fat Balance Breakdown)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-xs">
                  {[
                    { label: "दूध में कुल वसा (Total input fat in milk)", value: `${(theoResult.M * parseFloat(theo.milkFat) / 100).toFixed(2)} kg` },
                    { label: "क्रीम में कुल वसा (Fat recovered in cream)", value: `${theoResult.fatInCream.toFixed(2)} kg`, color: "text-orange-700" },
                    { label: "स्किम में कुल वसा (Fat lost to skim milk)", value: `${theoResult.fatInSkim.toFixed(2)} kg`, color: "text-blue-700" },
                    { label: "प्रोसेसिंग फैट वेस्ट (Process fat loss/waste)", value: `${theoResult.fatLossKg.toFixed(3)} kg`, color: "text-red-600" },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between border-b border-blue-100/40 pb-1">
                      <span className="text-slate-500">{r.label}</span>
                      <span className={`font-semibold ${r.color || "text-slate-800"}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Economics */}
              {enableCosting && (
                <Card className="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-none">
                  <CardHeader className="p-3 pb-1 border-b border-slate-800">
                    <CardTitle className="text-xs font-bold text-slate-400 uppercase">💰 आर्थिक विश्लेषण (Economics Projections)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">कुल इनपुट दूध लागत</span>
                        <span className="font-semibold text-red-300">₹ {theoResult.milkCost.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">क्रीम बिक्री राजस्व</span>
                        <span className="font-semibold text-green-300">₹ {theoResult.creamRev.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">स्किम बिक्री राजस्व</span>
                        <span className="font-semibold text-cyan-300">₹ {theoResult.skimRev.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="bg-slate-850 rounded-xl p-3 flex justify-between items-center border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-green-400">सकल लाभ (Gross Profit)</div>
                        <div className="text-[10px] text-slate-400">({theo.batches} बैच हेतु / For {theo.batches} batches)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-black text-green-300">₹ {theoResult.grossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                        <div className="text-[11px] text-slate-400">मार्जिन (Margin): {theoResult.gpm.toFixed(1)}%</div>
                      </div>
                    </div>

                    {theoResult.days > 1 && (
                      <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2.5 text-center text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक क्रीम (Monthly Cream)</span>
                          <span className="font-semibold text-slate-200">{theoResult.monthlyCream.toFixed(0)} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक टर्नओवर</span>
                          <span className="font-semibold text-green-300">₹ {theoResult.monthlyRev.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लाभ (Net profit)</span>
                          <span className="font-bold text-green-400">₹ {theoResult.monthlyProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Quality & Warning Alerts */}
              {theoResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">गुणवत्ता चेतावनियाँ (Process Warning Alerts)</AlertTitle>
                  <AlertDescription className="text-[11px] text-yellow-700 space-y-1">
                    {theoResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>

        {/* ══════════════════════════════════════════════════════════
            TAB 2: ACTUAL TRACKER
            ══════════════════════════════════════════════════════════ */}
        <TabsContent value="actual" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <ValidatedInput
              label="दूध की मात्रा (Milk Qty)"
              value={actual.milkQty}
              onChange={v => setA("milkQty", v)}
              validation={validatePositive(actual.milkQty, "Quantity")}
              unit="kg"
              colorScheme="blue"
            />
            <ValidatedInput
              label="दूध वसा प्रतिशत (Milk Fat %)"
              value={actual.milkFat}
              onChange={v => setA("milkFat", v)}
              validation={validateNumber(actual.milkFat, 0.5, 15, "Fat")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="टारगेट क्रीम वसा (Cream Fat %)"
              value={actual.creamFat}
              onChange={v => setA("creamFat", v)}
              validation={validateNumber(actual.creamFat, 15, 65, "Cream fat")}
              unit="%"
              colorScheme="orange"
            />
            <ValidatedInput
              label="स्किम वसा प्रतिशत (Skim Fat %)"
              value={actual.skimFat}
              onChange={v => setA("skimFat", v)}
              validation={validateNumber(actual.skimFat, 0.01, 2, "Skim fat")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="वास्तविक क्रीम (Cream Obtained)"
              value={actual.creamObtained}
              onChange={v => setA("creamObtained", v)}
              validation={validatePositive(actual.creamObtained, "Cream obtained")}
              unit="kg"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वास्तविक स्किम (Skim Obtained)"
              value={actual.skimObtained}
              onChange={v => setA("skimObtained", v)}
              validation={validatePositive(actual.skimObtained, "Skim obtained")}
              unit="kg"
              colorScheme="blue"
            />
          </div>

          <Button onClick={calculateActual} className="w-full h-11 bg-cyan-600 hover:bg-cyan-700 text-white font-bold shadow-md">
            📊 वास्तविक दक्षता की तुलना करें (Compare Actual Efficiency)
          </Button>

          {actualResult && (
            <div className="space-y-4">
              {/* Grade Badge */}
              <div className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${actualResult.gradeColor}`}>
                <div className="text-4xl mb-1">{actualResult.gradeEmoji}</div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-85">बैच ग्रेड (Batch Efficiency Grade)</div>
                <div className="text-xl font-extrabold">{actualResult.grade}</div>
                <div className="text-sm font-bold mt-1">
                  दक्षता दर (Recovery Rate): {actualResult.creamRecoveryPct.toFixed(1)}%
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-3.5 overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    actualResult.creamRecoveryPct >= 99 ? "bg-green-600" :
                    actualResult.creamRecoveryPct >= 97 ? "bg-blue-600" :
                    actualResult.creamRecoveryPct >= 94 ? "bg-yellow-500" : "bg-red-600"
                  }`}
                  style={{ width: `${Math.min(100, actualResult.creamRecoveryPct)}%` }}
                />
              </div>

              {/* Comparison table */}
              <Card className="border-slate-200">
                <CardHeader className="p-3 pb-1 border-b">
                  <CardTitle className="text-xs font-bold text-slate-700 uppercase">📊 आदर्श बनाम वास्तविक (Ideal vs Actual Separation)</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                        <th className="p-2.5">पैरामीटर (Parameter)</th>
                        <th className="p-2.5 text-right">आदर्श (Ideal)</th>
                        <th className="p-2.5 text-right">वास्तविक (Actual)</th>
                        <th className="p-2.5 text-right">हानि/नुकसान (Loss)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">क्रीम मात्रा (Cream Yield)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealCream.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.creamObt.toFixed(1)} kg</td>
                        <td className={`p-2.5 text-right font-bold ${actualResult.creamObt >= actualResult.idealCream ? "text-green-600" : "text-red-600"}`}>
                          {(actualResult.creamObt - actualResult.idealCream).toFixed(1)} kg
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">स्किम मिल्क (Skim Yield)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealSkim.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.skimObt.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-600">{(actualResult.skimObt - actualResult.idealSkim).toFixed(1)} kg</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="p-2.5 font-semibold text-slate-700">कुल प्रोसेसिंग द्रव्यमान हानि (Mass Loss)</td>
                        <td className="p-2.5 text-right text-slate-600">0.0 kg</td>
                        <td className="p-2.5 text-right text-slate-600">{(actualResult.M - actualResult.creamObt - actualResult.skimObt).toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-red-600 font-bold">{actualResult.massLossKg.toFixed(1)} kg ({actualResult.massLossPct.toFixed(2)}%)</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Alerts */}
              {actualResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">सुधार बिंदु (Actionable Points)</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {actualResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}


function ButterYieldCalc() {
  const { toast } = useToast();
  const { validatePositive, validatePercentage, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // ── Theoretical Inputs (Predictor) ──
  const [theo, setTheo] = useState({
    creamQty:        "1000",   // kg cream input
    creamFat:        "40",     // % cream fat
    butterFat:       "80",     // % target butter fat
    // Advanced
    fatLoss:         "1.5",    // % fat loss in buttermilk
    butterMoisture:  "16",     // % target butter moisture
    butterSalt:      "2.0",    // % target butter salt
    churnTemp:       "9",      // °C churning temp
    creamMoisture:   "57",     // % cream moisture
    creamSNF:        "3",      // % cream SNF
    // Costing
    creamPrice:      "250",    // ₹/kg cream
    butterPrice:     "450",    // ₹/kg butter sale price
    buttermilkPrice: "8",      // ₹/kg buttermilk sale price
    batches:         "1",
    operDays:        "26",
  });

  // ── Actual Inputs (Tracker) ──
  const [actual, setActual] = useState({
    creamQty:        "1000",
    creamFat:        "40",
    butterFat:       "80",
    butterObtained:  "",
    buttermilkObt:   "",
  });

  const [theoResult, setTheoResult]     = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ══════════════════════════════════════════════════════════
  // THEORETICAL CALCULATION (Predictor)
  // ══════════════════════════════════════════════════════════
  const calculateTheo = useCallback(() => {
    const C        = parseFloat(theo.creamQty)       || 0;
    const Fc       = parseFloat(theo.creamFat)  / 100;
    const Fb       = parseFloat(theo.butterFat) / 100;
    const L        = parseFloat(theo.fatLoss)   / 100;
    const Mb       = parseFloat(theo.butterMoisture) / 100;
    const Sb       = parseFloat(theo.butterSalt) / 100;
    const churnTemp= parseFloat(theo.churnTemp) || 9;
    const Mc       = parseFloat(theo.creamMoisture) / 100;
    const SNFc     = parseFloat(theo.creamSNF)  / 100;

    const cprice   = parseFloat(theo.creamPrice)      || 0;
    const bprice   = parseFloat(theo.butterPrice)     || 0;
    const bmlkPr   = parseFloat(theo.buttermilkPrice) || 0;
    const bat      = parseFloat(theo.batches)   || 1;
    const days     = parseFloat(theo.operDays)  || 26;

    if (C <= 0 || Fc <= 0 || Fb <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया क्रीम मात्रा, क्रीम फैट% और मक्खन फैट% सही दर्ज करें।" });
      return;
    }

    const totalFatKg     = C * Fc;
    const totalSNFKg     = C * SNFc;
    const recoveredFatKg = totalFatKg * (1 - L);
    const fatLostKg      = totalFatKg * L;

    // Butter yield (fat balance basis)
    const butterKg       = recoveredFatKg / Fb;
    const yieldPct       = (butterKg / C) * 100;
    const butterMoistKg  = butterKg * Mb;
    const butterSaltKg   = butterKg * Sb;
    const butterSNFKg    = butterKg * (1 - Fb - Mb - Sb);

    // Buttermilk
    const buttermilkKg   = C - butterKg;
    const buttermilkFatPct = buttermilkKg > 0 ? (fatLostKg / buttermilkKg) * 100 : 0;
    const buttermilkSNFKg  = totalSNFKg * 0.85;

    const fatEfficiency  = (recoveredFatKg / totalFatKg) * 100;
    const creamPerKgButter = C / butterKg;

    // Batch and operating totals
    const butterTotal     = butterKg   * bat;
    const buttermilkTotal = buttermilkKg * bat;

    // Economics
    const creamCost      = C * bat * cprice;
    const butterRevenue  = butterTotal     * bprice;
    const bmlkRevenue    = buttermilkTotal * bmlkPr;
    const totalRevenue   = butterRevenue + bmlkRevenue;
    const grossProfit    = totalRevenue - creamCost;
    const gpm            = creamCost > 0 ? (grossProfit / creamCost) * 100 : 0;

    const monthlyButter  = butterKg  * bat * days;
    const monthlyRevenue = totalRevenue * days;
    const monthlyCost    = creamCost * days;
    const monthlyProfit  = grossProfit * days;

    const warnings: string[] = [];
    if (L > 0.02) warnings.push(`वसा हानि (${(L * 100).toFixed(1)}%) अधिक है। मंथन (churning) गति और तापमान को संतुलित करें। (Fat loss in buttermilk is high. Optimize churn speed & temp.)`);
    if (Fb < 0.80) warnings.push(`मक्खन में वसा (${(Fb * 100).toFixed(0)}%) FSSAI मानक (कम से कम 80%) से कम है। (Butter fat % is less than FSSAI standard of min 80%.)`);
    if (Mb > 0.16) warnings.push(`नमी (${(Mb * 100).toFixed(0)}%) FSSAI मानक (अधिकतम 16%) से अधिक है। (Moisture is above FSSAI standard of max 16%.)`);
    const tempOK = churnTemp >= 7 && churnTemp <= 14;
    if (!tempOK) warnings.push(`मंथन तापमान (${churnTemp}°C) अनुकूल सीमा (7–14°C) से बाहर है। (Churning temp is outside optimal 7-14°C range.)`);
    if (buttermilkFatPct > 0.7) warnings.push(`मट्ठा (Buttermilk) में वसा (${buttermilkFatPct.toFixed(2)}%) अधिक है। (Buttermilk fat % is high.)`);

    setTheoResult({
      totalFatKg, recoveredFatKg, fatLostKg,
      butterKg, yieldPct, butterMoistKg, butterSaltKg, butterSNFKg,
      buttermilkKg, buttermilkFatPct, buttermilkSNFKg,
      fatEfficiency, creamPerKgButter,
      butterTotal, buttermilkTotal,
      creamCost, butterRevenue, bmlkRevenue, totalRevenue, grossProfit, gpm,
      monthlyButter, monthlyRevenue, monthlyCost, monthlyProfit,
      warnings, C, bat, days
    });

    toast({
      title: "🧮 गणना पूरी (Calculated)",
      description: `मक्खन: ${butterKg.toFixed(1)} kg, यील्ड: ${yieldPct.toFixed(1)}%`,
    });
  }, [theo, toast]);

  // ══════════════════════════════════════════════════════════
  // ACTUAL CALCULATION (Tracker)
  // ══════════════════════════════════════════════════════════
  const calculateActual = useCallback(() => {
    const C        = parseFloat(actual.creamQty)       || 0;
    const Fc       = parseFloat(actual.creamFat)  / 100;
    const Fb       = parseFloat(actual.butterFat) / 100;
    const butterObt= parseFloat(actual.butterObtained) || 0;
    const bmlkObt  = parseFloat(actual.buttermilkObt) || 0;

    // Use default process values for ideal comparison
    const L = parseFloat(theo.fatLoss) / 100;
    const Mb = parseFloat(theo.butterMoisture) / 100;

    if (C <= 0 || Fc <= 0 || butterObt <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया क्रीम मात्रा, वसा% और वास्तविक प्राप्त मक्खन सही दर्ज करें।" });
      return;
    }

    // Ideal yield
    const idealRecoveredFatKg = (C * Fc) * (1 - L);
    const idealButter = idealRecoveredFatKg / Fb;
    const idealButtermilk = C - idealButter;

    // Actual recoveries
    const butterRecoveryPct = idealButter > 0 ? (butterObt / idealButter) * 100 : 0;
    const totalActualMass = butterObt + bmlkObt;
    const massLossKg = C - totalActualMass;
    const massLossPct = (massLossKg / C) * 100;

    // Efficiency grade
    let grade = "", gradeColor = "", gradeEmoji = "";
    if (butterRecoveryPct >= 99 && massLossPct <= 0.5) {
      grade = "Excellent (उत्कृष्ट)"; gradeColor = "text-green-700 bg-green-50 border-green-300"; gradeEmoji = "🏆";
    } else if (butterRecoveryPct >= 97 && massLossPct <= 1) {
      grade = "Good (अच्छा)"; gradeColor = "text-blue-700 bg-blue-50 border-blue-300"; gradeEmoji = "👍";
    } else if (butterRecoveryPct >= 94 && massLossPct <= 2) {
      grade = "Needs Improvement (सुधार ज़रूरी)"; gradeColor = "text-yellow-700 bg-yellow-50 border-yellow-300"; gradeEmoji = "⚠️";
    } else {
      grade = "Action Required (कार्रवाई ज़रूरी)"; gradeColor = "text-red-700 bg-red-50 border-red-300"; gradeEmoji = "🔴";
    }

    const warnings: string[] = [];
    if (butterRecoveryPct < 97) warnings.push(`मक्खन रिकवरी ${butterRecoveryPct.toFixed(1)}% कम है। मंथन (churning) दक्षता की जांच करें। (Butter recovery is low. Check churning efficiency.)`);
    if (massLossPct > 1.5) warnings.push(`बैच में कुल द्रव्यमान हानि ${massLossPct.toFixed(1)}% अधिक है। (Mass loss is high.)`);

    setActualResult({
      idealButter, idealButtermilk,
      butterRecoveryPct, massLossKg, massLossPct,
      grade, gradeColor, gradeEmoji,
      warnings, C, butterObt, bmlkObt
    });

    toast({
      title: "📋 ट्रैकर गणना पूरी (Tracker Calculated)",
      description: `रिकवरी (Recovery): ${butterRecoveryPct.toFixed(1)}% — ${grade}`,
    });
  }, [actual, theo.fatLoss, theo.butterMoisture, toast]);

  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
        <Percent className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800 font-bold">मक्खन यील्ड और फैट बैलेंस ट्रैकर (Butter Yield & Fat Balance)</AlertTitle>
        <AlertDescription className="text-xs text-amber-700">
          क्रीम फैट और मंथन हानि के आधार पर मक्खन (Butter) एवं छाछ (Buttermilk) उत्पादकता, दक्षता और आर्थिक लाभ का आकलन।<br/>
          <span className="text-amber-600 font-medium">Butter & Buttermilk yield projection, churning efficiency, fat recovery & economics.</span>
        </AlertDescription>
      </Alert>

      {/* Tabs */}
      <Tabs value={activeCalc} onValueChange={v => setActiveCalc(v as "theoretical" | "actual")}>
        <TabsList className="grid grid-cols-2 bg-amber-100/55 p-1 rounded-lg">
          <TabsTrigger value="theoretical" className="text-xs font-bold data-[state=active]:bg-amber-600 data-[state=active]:text-white">
            🧮 Predictor (अनुमान)
          </TabsTrigger>
          <TabsTrigger value="actual" className="text-xs font-bold data-[state=active]:bg-yellow-600 data-[state=active]:text-white">
            📋 Tracker (वास्तविक)
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: PREDICTOR */}
        <TabsContent value="theoretical" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ValidatedInput
              label="क्रीम की मात्रा (Cream Qty)"
              value={theo.creamQty}
              onChange={v => setT("creamQty", v)}
              validation={validatePositive(theo.creamQty, "Cream quantity")}
              unit="kg"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="क्रीम वसा प्रतिशत (Cream Fat %)"
              value={theo.creamFat}
              onChange={v => setT("creamFat", v)}
              validation={validateNumber(theo.creamFat, 20, 60, "Cream fat")}
              unit="%"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="टारगेट मक्खन वसा (Target Butter Fat %)"
              value={theo.butterFat}
              onChange={v => setT("butterFat", v)}
              validation={validateNumber(theo.butterFat, 75, 85, "Butter fat")}
              unit="%"
              colorScheme="orange"
            />
          </div>

          {/* Advanced Drawer */}
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex justify-between items-center text-xs font-semibold py-2 px-3 border border-amber-100 hover:bg-amber-50/50 rounded-lg"
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <Settings2 className="w-3.5 h-3.5" /> एडवांस्ड सेटिंग्स (Advanced Settings)
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
          </Button>

          {showAdvanced && (
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-2 md:grid-cols-3 gap-3">
              <ValidatedInput
                label="छाछ में वसा हानि % (Buttermilk Fat Loss %)"
                value={theo.fatLoss}
                onChange={v => setT("fatLoss", v)}
                validation={validateNumber(theo.fatLoss, 0.1, 5, "Fat loss")}
                unit="%"
                colorScheme="red"
              />
              <ValidatedInput
                label="मक्खन नमी प्रतिशत (Butter Moisture %)"
                value={theo.butterMoisture}
                onChange={v => setT("butterMoisture", v)}
                validation={validateNumber(theo.butterMoisture, 10, 25, "Butter moisture")}
                unit="%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="मक्खन नमक प्रतिशत (Butter Salt %)"
                value={theo.butterSalt}
                onChange={v => setT("butterSalt", v)}
                validation={validateNumber(theo.butterSalt, 0, 5, "Butter salt")}
                unit="%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="मंथन तापमान (Churn Temp)"
                value={theo.churnTemp}
                onChange={v => setT("churnTemp", v)}
                validation={validateNumber(theo.churnTemp, 4, 20, "Churn temperature")}
                unit="°C"
                colorScheme="yellow"
              />
              <ValidatedInput
                label="क्रीम नमी प्रतिशत (Cream Moisture %)"
                value={theo.creamMoisture}
                onChange={v => setT("creamMoisture", v)}
                validation={validateNumber(theo.creamMoisture, 30, 75, "Cream moisture")}
                unit="%"
                colorScheme="yellow"
              />
              <ValidatedInput
                label="क्रीम एसएनएफ (Cream SNF %)"
                value={theo.creamSNF}
                onChange={v => setT("creamSNF", v)}
                validation={validateNumber(theo.creamSNF, 1, 10, "Cream SNF")}
                unit="%"
                colorScheme="yellow"
              />
            </div>
          )}

          {/* Costing Toggle */}
          <div className="flex items-center gap-2">
            <Checkbox id="butter-costing" checked={enableCosting} onCheckedChange={(c) => setEnableCosting(!!c)} />
            <Label htmlFor="butter-costing" className="text-xs font-semibold cursor-pointer text-slate-700 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-green-600" /> कॉस्टिंग और प्रॉफिटेबिलिटी शामिल करें (Enable Costing & Profitability)
            </Label>
          </div>

          {enableCosting && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3 bg-green-50/30 rounded-xl border border-green-100">
              <ValidatedInput
                label="क्रीम का मूल्य (Cream Price)"
                value={theo.creamPrice}
                onChange={v => setT("creamPrice", v)}
                validation={validatePositive(theo.creamPrice, "Cream price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="मक्खन मूल्य (Butter Price)"
                value={theo.butterPrice}
                onChange={v => setT("butterPrice", v)}
                validation={validatePositive(theo.butterPrice, "Butter price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="छाछ का मूल्य (Buttermilk Price)"
                value={theo.buttermilkPrice}
                onChange={v => setT("buttermilkPrice", v)}
                validation={validatePositive(theo.buttermilkPrice, "Buttermilk price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="बैचेस (Batches)"
                value={theo.batches}
                onChange={v => setT("batches", v)}
                validation={validatePositive(theo.batches, "Batches")}
                unit="qty"
                colorScheme="blue"
              />
              <ValidatedInput
                label="कार्य दिवस (Operating Days)"
                value={theo.operDays}
                onChange={v => setT("operDays", v)}
                validation={validatePositive(theo.operDays, "Days")}
                unit="days"
                colorScheme="blue"
              />
            </div>
          )}

          <Button onClick={calculateTheo} className="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md">
            🧮 मक्खन यील्ड की गणना करें (Calculate Butter Yields)
          </Button>

          {/* Results */}
          {theoResult && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-amber-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">मक्खन उत्पादन (Butter Output)</div>
                  <div className="text-xl font-extrabold">{theoResult.butterKg.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">{theoResult.yieldPct.toFixed(1)}% yield</div>
                </div>
                <div className="bg-orange-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">मट्ठा (Buttermilk)</div>
                  <div className="text-xl font-extrabold">{theoResult.buttermilkKg.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">Fat: {theoResult.buttermilkFatPct.toFixed(2)}%</div>
                </div>
                <div className="bg-yellow-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">वसा उपयोगिता (Fat Recovery)</div>
                  <div className="text-xl font-extrabold">{theoResult.fatEfficiency.toFixed(2)}%</div>
                  <div className="text-[9px] opacity-75">Efficiency rate</div>
                </div>
              </div>

              {/* Composition Breakdown */}
              <Card className="bg-amber-50/20 border-amber-200">
                <CardHeader className="p-3 pb-1 border-b border-amber-100">
                  <CardTitle className="text-xs font-bold text-amber-800 uppercase">🔬 वसा संतुलन और संरचना (Fat Balance & Composition)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-xs">
                  {[
                    { label: "इनपुट क्रीम में कुल वसा (Total fat in input cream)", value: `${theoResult.totalFatKg.toFixed(2)} kg` },
                    { label: "मक्खन में प्राप्त वsa (Fat recovered in butter)", value: `${theoResult.recoveredFatKg.toFixed(2)} kg`, color: "text-amber-700" },
                    { label: "मट्ठा (buttermilk) में वसा हानि (Fat lost in buttermilk)", value: `${theoResult.fatLostKg.toFixed(2)} kg`, color: "text-red-600" },
                    { label: "मक्खन घटक (Butter Moisture + Salt + SNF)", value: `Moist: ${theoResult.butterMoistKg.toFixed(1)} kg | Salt: ${theoResult.butterSaltKg.toFixed(1)} kg | SNF: ${theoResult.butterSNFKg.toFixed(1)} kg` },
                    { label: "मक्खन उत्पादन हेतु आवश्यक क्रीम (Cream required per kg butter)", value: `${theoResult.creamPerKgButter.toFixed(2)} kg` },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between border-b border-amber-100/40 pb-1.5 last:border-none">
                      <span className="text-slate-500">{r.label}</span>
                      <span className={`font-semibold ${r.color || "text-slate-800"}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Economics */}
              {enableCosting && (
                <Card className="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-none">
                  <CardHeader className="p-3 pb-1 border-b border-slate-800">
                    <CardTitle className="text-xs font-bold text-slate-400 uppercase">💰 आर्थिक विश्लेषण (Economics Projections)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">क्रीम कुल लागत (Cream Cost)</span>
                        <span className="font-semibold text-red-300">₹ {theoResult.creamCost.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">मक्खन राजस्व (Butter Revenue)</span>
                        <span className="font-semibold text-green-300">₹ {theoResult.butterRevenue.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">छाछ राजस्व (Buttermilk Rev)</span>
                        <span className="font-semibold text-cyan-300">₹ {theoResult.bmlkRevenue.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="bg-slate-850 rounded-xl p-3 flex justify-between items-center border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-green-400">सकल लाभ (Gross Profit)</div>
                        <div className="text-[10px] text-slate-400">({theo.batches} बैच हेतु / For {theo.batches} batches)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-black text-green-300">₹ {theoResult.grossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                        <div className="text-[11px] text-slate-400">मार्जिन (Margin): {theoResult.gpm.toFixed(1)}%</div>
                      </div>
                    </div>

                    {theoResult.days > 1 && (
                      <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2.5 text-center text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक मक्खन (Monthly Butter)</span>
                          <span className="font-semibold text-slate-200">{theoResult.monthlyButter.toFixed(0)} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लागत (Monthly Cost)</span>
                          <span className="font-semibold text-red-300">₹ {theoResult.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लाभ (Net profit)</span>
                          <span className="font-bold text-green-400">₹ {theoResult.monthlyProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Quality & Warning Alerts */}
              {theoResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">मक्खन गुणवत्ता चेतावनियाँ (Process Warnings)</AlertTitle>
                  <AlertDescription className="text-[11px] text-yellow-700 space-y-1">
                    {theoResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>

        {/* TAB 2: TRACKER */}
        <TabsContent value="actual" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <ValidatedInput
              label="क्रीम की मात्रा (Cream Qty)"
              value={actual.creamQty}
              onChange={v => setA("creamQty", v)}
              validation={validatePositive(actual.creamQty, "Cream quantity")}
              unit="kg"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="क्रीम वसा प्रतिशत (Cream Fat %)"
              value={actual.creamFat}
              onChange={v => setA("creamFat", v)}
              validation={validateNumber(actual.creamFat, 20, 60, "Cream fat")}
              unit="%"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="टारगेट मक्खन वसा (Target Butter Fat %)"
              value={actual.butterFat}
              onChange={v => setA("butterFat", v)}
              validation={validateNumber(actual.butterFat, 75, 85, "Butter fat")}
              unit="%"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वास्तविक मक्खन (Actual Butter Obt)"
              value={actual.butterObtained}
              onChange={v => setA("butterObtained", v)}
              validation={validatePositive(actual.butterObtained, "Butter obtained")}
              unit="kg"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वास्तविक मट्ठा (Actual Buttermilk Obt)"
              value={actual.buttermilkObt}
              onChange={v => setA("buttermilkObt", v)}
              validation={validatePositive(actual.buttermilkObt, "Buttermilk obtained")}
              unit="kg"
              colorScheme="yellow"
            />
          </div>

          <Button onClick={calculateActual} className="w-full h-11 bg-yellow-600 hover:bg-yellow-700 text-white font-bold shadow-md">
            📊 वास्तविक बैच दक्षता की तुलना करें (Compare Batch Efficiency)
          </Button>

          {actualResult && (
            <div className="space-y-4">
              {/* Grade Badge */}
              <div className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${actualResult.gradeColor}`}>
                <div className="text-4xl mb-1">{actualResult.gradeEmoji}</div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-85">बैच ग्रेड (Batch Efficiency Grade)</div>
                <div className="text-xl font-extrabold">{actualResult.grade}</div>
                <div className="text-sm font-bold mt-1">
                  रिकवरी दर (Recovery Rate): {actualResult.butterRecoveryPct.toFixed(1)}%
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-3.5 overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    actualResult.butterRecoveryPct >= 99 ? "bg-green-600" :
                    actualResult.butterRecoveryPct >= 97 ? "bg-blue-600" :
                    actualResult.butterRecoveryPct >= 94 ? "bg-yellow-500" : "bg-red-600"
                  }`}
                  style={{ width: `${Math.min(100, actualResult.butterRecoveryPct)}%` }}
                />
              </div>

              {/* Comparison table */}
              <Card className="border-slate-200">
                <CardHeader className="p-3 pb-1 border-b">
                  <CardTitle className="text-xs font-bold text-slate-700 uppercase">📊 आदर्श बनाम वास्तविक (Ideal vs Actual Yields)</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                        <th className="p-2.5">पैरामीटर (Parameter)</th>
                        <th className="p-2.5 text-right">आदर्श (Ideal)</th>
                        <th className="p-2.5 text-right">वास्तविक (Actual)</th>
                        <th className="p-2.5 text-right">हानि/नुकसान (Loss)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">मक्खन मात्रा (Butter Obtained)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealButter.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.butterObt.toFixed(1)} kg</td>
                        <td className={`p-2.5 text-right font-bold ${actualResult.butterObt >= actualResult.idealButter ? "text-green-600" : "text-red-600"}`}>
                          {(actualResult.butterObt - actualResult.idealButter).toFixed(1)} kg
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">छाछ मात्रा (Buttermilk Obtained)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealButtermilk.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.bmlkObt.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-600">{(actualResult.bmlkObt - actualResult.idealButtermilk).toFixed(1)} kg</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="p-2.5 font-semibold text-slate-700">कुल प्रोसेसिंग द्रव्यमान हानि (Mass Loss)</td>
                        <td className="p-2.5 text-right text-slate-600">0.0 kg</td>
                        <td className="p-2.5 text-right text-slate-600">{(actualResult.C - actualResult.butterObt - actualResult.bmlkObt).toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-red-600 font-bold">{actualResult.massLossKg.toFixed(1)} kg ({actualResult.massLossPct.toFixed(2)}%)</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Alerts */}
              {actualResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">सुधार बिंदु (Actionable Points)</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {actualResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function KhoaYieldCalc() {
  const { toast } = useToast();
  const { validatePositive, validatePercentage, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // ── Theoretical Inputs (Predictor) ──
  const [theo, setTheo] = useState({
    milkQty:          "1000",   // kg milk input
    milkFat:          "4.5",    // % milk fat
    milkSNF:          "8.5",    // % milk SNF
    khoaTS:           "70",     // % target Khoa TS
    // Advanced
    steamKgPerKgWater:"1.1",    // steam consumed (kg) per kg of water evaporated
    timeHrPer100kg:   "2.5",    // hours taken per 100kg milk
    processLoss:      "0.5",    // % process spill/solids loss
    steamPrice:       "2.0",    // ₹/kg steam
    // Costing
    milkPrice:        "45",     // ₹/kg milk
    khoaPrice:        "300",    // ₹/kg khoa sale price
    batches:          "1",
    operDays:         "26",
  });

  // ── Actual Inputs (Tracker) ──
  const [actual, setActual] = useState({
    milkQty:          "1000",
    milkFat:          "4.5",
    milkSNF:          "8.5",
    khoaTS:           "70",
    khoaObtained:     "",
  });

  const [theoResult, setTheoResult]     = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ══════════════════════════════════════════════════════════
  // THEORETICAL CALCULATION (Predictor)
  // ══════════════════════════════════════════════════════════
  const calculateTheo = useCallback(() => {
    const M       = parseFloat(theo.milkQty)       || 0;
    const fat     = parseFloat(theo.milkFat)       || 0;
    const snf     = parseFloat(theo.milkSNF)       || 0;
    const khoaTS  = parseFloat(theo.khoaTS)        || 0;

    const steamFact= parseFloat(theo.steamKgPerKgWater)|| 1.1;
    const timeFact = parseFloat(theo.timeHrPer100kg)   || 2.5;
    const loss     = parseFloat(theo.processLoss)    / 100;
    const steamPr  = parseFloat(theo.steamPrice)     || 0;

    const milkPrice= parseFloat(theo.milkPrice)      || 0;
    const khoaPrice= parseFloat(theo.khoaPrice)      || 0;
    const bat      = parseFloat(theo.batches)        || 1;
    const days     = parseFloat(theo.operDays)       || 26;

    const milkTS = fat + snf;
    const Tm = milkTS / 100;
    const Tk = khoaTS / 100;

    if (M <= 0 || milkTS <= 0 || khoaTS <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया दूध की मात्रा, फैट/SNF प्रतिशत और टारगेट खोया TS% सही दर्ज करें।" });
      return;
    }
    if (khoaTS <= milkTS) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "टारगेट खोया TS%, इनपुट दूध TS% से अधिक होना चाहिए।" });
      return;
    }

    // Yield (Total Solids Balance with process loss)
    const idealKhoaKg = (M * Tm) / Tk;
    const khoaKg = idealKhoaKg * (1 - loss);
    const yieldPct = (khoaKg / M) * 100;

    // Water Evaporation
    const waterEvapKg = M - khoaKg;
    const evapRatio = (waterEvapKg / M) * 100;

    // Composition
    const concFactor = Tm / Tk;
    const khoaFatPct = concFactor > 0 ? (fat / concFactor) : 0;
    const khoaSNFPct = concFactor > 0 ? (snf / concFactor) : 0;
    const khoaMoisturePct = 100 - khoaTS;

    // Energy & Process details
    const steamKg = waterEvapKg * steamFact;
    const steamCost = steamKg * steamPr;
    const processTimeHr = (M / 100) * timeFact;
    const evapRateKgHr = processTimeHr > 0 ? waterEvapKg / processTimeHr : 0;

    // Operating & Economics
    const khoaTotal = khoaKg * bat;
    const steamTotal = steamKg * bat;
    const steamCostTotal = steamCost * bat;

    const milkCost = M * bat * milkPrice;
    const khoaRevenue = khoaTotal * khoaPrice;
    const grossProfit = khoaRevenue - milkCost - steamCostTotal;
    const gpm = (milkCost + steamCostTotal) > 0 ? (grossProfit / (milkCost + steamCostTotal)) * 100 : 0;

    const monthlyKhoa = khoaKg * bat * days;
    const monthlyRevenue = monthlyKhoa * khoaPrice;
    const monthlyCost = (M * milkPrice + steamKg * steamPr) * bat * days;
    const monthlyProfit = grossProfit * days;

    const warnings: string[] = [];
    if (khoaTS < 62 || khoaTS > 78) warnings.push(`खोया कुल ठोस (TS) ${khoaTS}% सामान्य सीमा (62–78%) से बाहर है। (Khoa TS is outside typical 62–78% range.)`);
    if (khoaMoisturePct > 38) warnings.push(`नमी प्रतिशत (${khoaMoisturePct.toFixed(0)}%) अधिक है। बैक्टीरिया वृद्धि रोकने के लिए तुरंत प्रशीतित (refrigerate) करें। (Moisture is high, risk of microbial growth.)`);
    if (khoaFatPct < 20) warnings.push(`FSSAI मानक के अनुसार खोया (सूखे पदार्थ पर) में कम से कम 30% वसा होनी चाहिए। (Fat on dry matter must be min 30% per FSSAI.)`);
    if (processTimeHr > 4) warnings.push(`मंथन समय (${processTimeHr.toFixed(1)} घंटे) बहुत अधिक है। स्क्रैपड सरफेस हीट एक्सचेंजर (SSHE) का उपयोग करने पर विचार करें। (Process time is long. Consider SSHE.)`);

    setTheoResult({
      milkTS, khoaKg, yieldPct, waterEvapKg, evapRatio,
      khoaFatPct, khoaSNFPct, khoaMoisturePct,
      steamKg, steamCost, processTimeHr, evapRateKgHr,
      khoaTotal, steamTotal, steamCostTotal,
      milkCost, khoaRevenue, grossProfit, gpm,
      monthlyKhoa, monthlyRevenue, monthlyCost, monthlyProfit,
      warnings, M, bat, days
    });

    toast({
      title: "🧮 गणना पूरी (Calculated)",
      description: `खोया यील्ड: ${khoaKg.toFixed(1)} kg (${yieldPct.toFixed(1)}%)`,
    });
  }, [theo, toast]);

  // ══════════════════════════════════════════════════════════
  // ACTUAL CALCULATION (Tracker)
  // ══════════════════════════════════════════════════════════
  const calculateActual = useCallback(() => {
    const M       = parseFloat(actual.milkQty)       || 0;
    const fat     = parseFloat(actual.milkFat)       || 0;
    const snf     = parseFloat(actual.milkSNF)       || 0;
    const khoaTS  = parseFloat(actual.khoaTS)        || 0;
    const khoaObt = parseFloat(actual.khoaObtained)  || 0;

    const loss = parseFloat(theo.processLoss) / 100;
    const milkTS = fat + snf;
    const Tm = milkTS / 100;
    const Tk = khoaTS / 100;

    if (M <= 0 || milkTS <= 0 || khoaTS <= 0 || khoaObt <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया दूध मात्रा, वसा/SNF% और वास्तविक प्राप्त खोया सही दर्ज करें।" });
      return;
    }

    // Ideal yield
    const idealKhoa = ((M * Tm) / Tk) * (1 - loss);

    // Actual recoveries
    const khoaRecoveryPct = idealKhoa > 0 ? (khoaObt / idealKhoa) * 100 : 0;
    const massLossKg = M - khoaObt;
    const massLossPct = (massLossKg / M) * 100;

    // Efficiency grade
    let grade = "", gradeColor = "", gradeEmoji = "";
    if (khoaRecoveryPct >= 99 && massLossPct <= 85) {
      grade = "Excellent (उत्कृष्ट)"; gradeColor = "text-green-700 bg-green-50 border-green-300"; gradeEmoji = "🏆";
    } else if (khoaRecoveryPct >= 97) {
      grade = "Good (अच्छा)"; gradeColor = "text-blue-700 bg-blue-50 border-blue-300"; gradeEmoji = "👍";
    } else if (khoaRecoveryPct >= 94) {
      grade = "Needs Improvement (सुधार ज़रूरी)"; gradeColor = "text-yellow-700 bg-yellow-50 border-yellow-300"; gradeEmoji = "⚠️";
    } else {
      grade = "Action Required (कार्रवाई ज़रूरी)"; gradeColor = "text-red-700 bg-red-50 border-red-300"; gradeEmoji = "🔴";
    }

    const warnings: string[] = [];
    if (khoaRecoveryPct < 96) warnings.push(`खोया रिकवरी ${khoaRecoveryPct.toFixed(1)}% कम है। बर्तन की सतह पर चिपके रहने के कारण हुए नुकसान की जांच करें। (Khoa recovery is low. Check for pan-sticking losses.)`);

    setActualResult({
      idealKhoa,
      khoaRecoveryPct, massLossKg, massLossPct,
      grade, gradeColor, gradeEmoji,
      warnings, M, khoaObt
    });

    toast({
      title: "📋 ट्रैकर गणना पूरी (Tracker Calculated)",
      description: `रिकवरी (Recovery): ${khoaRecoveryPct.toFixed(1)}% — ${grade}`,
    });
  }, [actual, theo.processLoss, toast]);

  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <Scale className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800 font-bold">खोया / मावा यील्ड और ऊर्जा ट्रैकर (Khoa/Mawa Yield & Energy Tracker)</AlertTitle>
        <AlertDescription className="text-xs text-amber-700">
          इनपुट दूध के कुल ठोस (TS), वसा और एसएनएफ के आधार पर खोया उत्पादन, वाष्पीकरण जल हानि और हीटिंग लागत विश्लेषण।<br/>
          <span className="text-amber-600 font-medium">Khoa yield projection based on Total Solids (TS), water evaporation, steam cost & processing efficiency.</span>
        </AlertDescription>
      </Alert>

      {/* Tabs */}
      <Tabs value={activeCalc} onValueChange={v => setActiveCalc(v as "theoretical" | "actual")}>
        <TabsList className="grid grid-cols-2 bg-amber-100/55 p-1 rounded-lg">
          <TabsTrigger value="theoretical" className="text-xs font-bold data-[state=active]:bg-amber-600 data-[state=active]:text-white">
            🧮 Predictor (अनुमान)
          </TabsTrigger>
          <TabsTrigger value="actual" className="text-xs font-bold data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            📋 Tracker (वास्तविक)
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: PREDICTOR */}
        <TabsContent value="theoretical" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ValidatedInput
              label="दूध की मात्रा (Milk Qty)"
              value={theo.milkQty}
              onChange={v => setT("milkQty", v)}
              validation={validatePositive(theo.milkQty, "Milk quantity")}
              unit="kg"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="दूध वसा प्रतिशत (Milk Fat %)"
              value={theo.milkFat}
              onChange={v => setT("milkFat", v)}
              validation={validateNumber(theo.milkFat, 1, 15, "Milk fat")}
              unit="%"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="दूध एसएनएफ % (Milk SNF %)"
              value={theo.milkSNF}
              onChange={v => setT("milkSNF", v)}
              validation={validateNumber(theo.milkSNF, 5, 12, "Milk SNF")}
              unit="%"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="खोया टारगेट ठोस % (Khoa Target TS %)"
              value={theo.khoaTS}
              onChange={v => setT("khoaTS", v)}
              validation={validateNumber(theo.khoaTS, 55, 80, "Khoa TS")}
              unit="%"
              colorScheme="orange"
            />
          </div>

          {/* Advanced Settings */}
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex justify-between items-center text-xs font-semibold py-2 px-3 border border-amber-100 hover:bg-amber-50/50 rounded-lg"
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <Settings2 className="w-3.5 h-3.5" /> एडवांस्ड सेटिंग्स (Advanced Settings)
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
          </Button>

          {showAdvanced && (
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-3">
              <ValidatedInput
                label="भाप खपत कारक (Steam Kg/Kg Water)"
                value={theo.steamKgPerKgWater}
                onChange={v => setT("steamKgPerKgWater", v)}
                validation={validateNumber(theo.steamKgPerKgWater, 0.5, 2.0, "Steam ratio")}
                unit="kg"
                colorScheme="blue"
              />
              <ValidatedInput
                label="भाप दर (Steam Price)"
                value={theo.steamPrice}
                onChange={v => setT("steamPrice", v)}
                validation={validatePositive(theo.steamPrice, "Steam price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="समय प्रति 100kg दूध (Time/100kg milk)"
                value={theo.timeHrPer100kg}
                onChange={v => setT("timeHrPer100kg", v)}
                validation={validateNumber(theo.timeHrPer100kg, 0.1, 5, "Time ratio")}
                unit="hrs"
                colorScheme="blue"
              />
              <ValidatedInput
                label="प्रोसेसिंग नुकसान % (Process Loss %)"
                value={theo.processLoss}
                onChange={v => setT("processLoss", v)}
                validation={validateNumber(theo.processLoss, 0, 5, "Process loss")}
                unit="%"
                colorScheme="red"
              />
            </div>
          )}

          {/* Costing Toggle */}
          <div className="flex items-center gap-2">
            <Checkbox id="khoa-costing" checked={enableCosting} onCheckedChange={(c) => setEnableCosting(!!c)} />
            <Label htmlFor="khoa-costing" className="text-xs font-semibold cursor-pointer text-slate-700 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-green-600" /> कॉस्टिंग और प्रॉफिटेबिलिटी शामिल करें (Enable Costing & Profitability)
            </Label>
          </div>

          {enableCosting && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-green-50/30 rounded-xl border border-green-100">
              <ValidatedInput
                label="दूध का मूल्य (Milk Price)"
                value={theo.milkPrice}
                onChange={v => setT("milkPrice", v)}
                validation={validatePositive(theo.milkPrice, "Milk price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="खोया मूल्य (Khoa Price)"
                value={theo.khoaPrice}
                onChange={v => setT("khoaPrice", v)}
                validation={validatePositive(theo.khoaPrice, "Khoa price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="बैचेस (Batches)"
                value={theo.batches}
                onChange={v => setT("batches", v)}
                validation={validatePositive(theo.batches, "Batches")}
                unit="qty"
                colorScheme="blue"
              />
              <ValidatedInput
                label="कार्य दिवस (Operating Days)"
                value={theo.operDays}
                onChange={v => setT("operDays", v)}
                validation={validatePositive(theo.operDays, "Days")}
                unit="days"
                colorScheme="blue"
              />
            </div>
          )}

          <Button onClick={calculateTheo} className="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md">
            🧮 खोया यील्ड की गणना करें (Calculate Khoa Yield)
          </Button>

          {/* Results */}
          {theoResult && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-amber-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">खोया उत्पादन (Khoa Output)</div>
                  <div className="text-xl font-extrabold">{theoResult.khoaKg.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">{theoResult.yieldPct.toFixed(1)}% yield</div>
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">वाष्पीकृत पानी (Water Evaporated)</div>
                  <div className="text-xl font-extrabold">{theoResult.waterEvapKg.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">{theoResult.evapRatio.toFixed(1)}% evaporation</div>
                </div>
                <div className="bg-orange-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">प्रोसेसिंग समय (Process Time)</div>
                  <div className="text-xl font-extrabold">{theoResult.processTimeHr.toFixed(1)} hrs</div>
                  <div className="text-[9px] opacity-75">Rate: {theoResult.evapRateKgHr.toFixed(1)} kg/hr</div>
                </div>
              </div>

              {/* Composition */}
              <Card className="bg-amber-50/20 border-amber-200">
                <CardHeader className="p-3 pb-1 border-b border-amber-100">
                  <CardTitle className="text-xs font-bold text-amber-800 uppercase">🔬 खोया संरचना और घटक (Khoa Composition Estimate)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-xs">
                  {[
                    { label: "दूध का कुल ठोस % (Input Milk TS %)", value: `${theoResult.milkTS.toFixed(2)}% (Fat: ${theo.milkFat}%, SNF: ${theo.milkSNF}%)` },
                    { label: "खोया में अनुमानित वसा (Estimated Fat in Khoa)", value: `${theoResult.khoaFatPct.toFixed(1)}%`, color: "text-amber-700" },
                    { label: "खोया में एसएनएफ (Estimated SNF in Khoa)", value: `${theoResult.khoaSNFPct.toFixed(1)}%` },
                    { label: "नमी प्रतिशत (Estimated Moisture in Khoa)", value: `${theoResult.khoaMoisturePct.toFixed(1)}%` },
                    { label: "कुल भाप आवश्यकता (Total Steam Required)", value: `${theoResult.steamKg.toFixed(1)} kg` },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between border-b border-amber-100/40 pb-1.5 last:border-none">
                      <span className="text-slate-500">{r.label}</span>
                      <span className={`font-semibold ${r.color || "text-slate-800"}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Economics */}
              {enableCosting && (
                <Card className="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-none">
                  <CardHeader className="p-3 pb-1 border-b border-slate-800">
                    <CardTitle className="text-xs font-bold text-slate-400 uppercase">💰 आर्थिक विश्लेषण (Economics Projections)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">दूध कुल लागत (Milk Cost)</span>
                        <span className="font-semibold text-red-300">₹ {theoResult.milkCost.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">भाप की कुल लागत (Steam Cost)</span>
                        <span className="font-semibold text-amber-300">₹ {theoResult.steamCostTotal.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">खोया बिक्री राजस्व (Revenue)</span>
                        <span className="font-semibold text-green-300">₹ {theoResult.khoaRevenue.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="bg-slate-850 rounded-xl p-3 flex justify-between items-center border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-green-400">सकल लाभ (Gross Profit)</div>
                        <div className="text-[10px] text-slate-400">({theo.batches} बैच हेतु / For {theo.batches} batches)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-black text-green-300">₹ {theoResult.grossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                        <div className="text-[11px] text-slate-400">मार्जिन (Margin): {theoResult.gpm.toFixed(1)}%</div>
                      </div>
                    </div>

                    {theoResult.days > 1 && (
                      <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2.5 text-center text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक खोया (Monthly Khoa)</span>
                          <span className="font-semibold text-slate-200">{theoResult.monthlyKhoa.toFixed(0)} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लागत (Monthly Cost)</span>
                          <span className="font-semibold text-red-300">₹ {theoResult.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लाभ (Net profit)</span>
                          <span className="font-bold text-green-400">₹ {theoResult.monthlyProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Warnings */}
              {theoResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">खोया गुणवत्ता चेतावनियाँ (Process Warnings)</AlertTitle>
                  <AlertDescription className="text-[11px] text-yellow-700 space-y-1">
                    {theoResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>

        {/* TAB 2: TRACKER */}
        <TabsContent value="actual" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <ValidatedInput
              label="दूध की मात्रा (Milk Qty)"
              value={actual.milkQty}
              onChange={v => setA("milkQty", v)}
              validation={validatePositive(actual.milkQty, "Milk quantity")}
              unit="kg"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="दूध वसा प्रतिशत (Milk Fat %)"
              value={actual.milkFat}
              onChange={v => setA("milkFat", v)}
              validation={validateNumber(actual.milkFat, 1, 15, "Milk fat")}
              unit="%"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="दूध एसएनएफ % (Milk SNF %)"
              value={actual.milkSNF}
              onChange={v => setA("milkSNF", v)}
              validation={validateNumber(actual.milkSNF, 5, 12, "Milk SNF")}
              unit="%"
              colorScheme="yellow"
            />
            <ValidatedInput
              label="खोया टारगेट ठोस % (Khoa Target TS %)"
              value={actual.khoaTS}
              onChange={v => setA("khoaTS", v)}
              validation={validateNumber(actual.khoaTS, 55, 80, "Khoa TS")}
              unit="%"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वास्तविक खोया प्राप्त (Actual Khoa Obt)"
              value={actual.khoaObtained}
              onChange={v => setA("khoaObtained", v)}
              validation={validatePositive(actual.khoaObtained, "Khoa obtained")}
              unit="kg"
              colorScheme="orange"
            />
          </div>

          <Button onClick={calculateActual} className="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md">
            📊 वास्तविक बैच दक्षता की तुलना करें (Compare Batch Efficiency)
          </Button>

          {actualResult && (
            <div className="space-y-4">
              {/* Grade Badge */}
              <div className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${actualResult.gradeColor}`}>
                <div className="text-4xl mb-1">{actualResult.gradeEmoji}</div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-85">बैच ग्रेड (Batch Efficiency Grade)</div>
                <div className="text-xl font-extrabold">{actualResult.grade}</div>
                <div className="text-sm font-bold mt-1">
                  खोया रिकवरी दर (Recovery Rate): {actualResult.khoaRecoveryPct.toFixed(1)}%
                </div>
              </div>

              {/* Comparison table */}
              <Card className="border-slate-200">
                <CardHeader className="p-3 pb-1 border-b">
                  <CardTitle className="text-xs font-bold text-slate-700 uppercase">📊 आदर्श बनाम वास्तविक (Ideal vs Actual Yield)</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                        <th className="p-2.5">पैरामीटर (Parameter)</th>
                        <th className="p-2.5 text-right">आदर्श (Ideal)</th>
                        <th className="p-2.5 text-right">वास्तविक (Actual)</th>
                        <th className="p-2.5 text-right">हानि/नुकसान (Difference)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">खोया मात्रा (Khoa Yield)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealKhoa.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.khoaObt.toFixed(1)} kg</td>
                        <td className={`p-2.5 text-right font-bold ${actualResult.khoaObt >= actualResult.idealKhoa ? "text-green-600" : "text-red-600"}`}>
                          {(actualResult.khoaObt - actualResult.idealKhoa).toFixed(1)} kg
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold text-slate-700">अनुमानित वाष्पीकृत पानी (Est. Evaporated Water)</td>
                        <td className="p-2.5 text-right text-slate-600">{(actualResult.M - actualResult.idealKhoa).toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-600">{(actualResult.M - actualResult.khoaObt).toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-600">{(actualResult.idealKhoa - actualResult.khoaObt).toFixed(1)} kg</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Alerts */}
              {actualResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">सुधार बिंदु (Actionable Points)</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {actualResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}


function ShrikhandYieldCalc() {
  const { toast } = useToast();
  const { validatePositive, validatePercentage, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // ── Theoretical Inputs (Predictor) ──
  const [theo, setTheo] = useState({
    chakkaQty:        "1000",   // kg Chakka input
    chakkaTS:         "36",     // % Chakka total solids
    chakkaFat:        "15",     // % Chakka fat
    sugarAdded:       "720",    // kg sugar added
    // Advanced
    chakkaProtein:    "13",     // % Chakka protein
    sugarPurity:      "99.9",   // % sugar purity (sucrose content)
    extraIngredient:  "0",      // kg extras (mango pulp, dry fruits, etc.)
    // Costing
    chakkaPrice:      "120",    // ₹/kg Chakka
    sugarPrice:       "42",     // ₹/kg sugar
    shrikhandPrice:   "180",    // ₹/kg Shrikhand sale price
    packSize:         "100",    // g pack size
    packCostPerPack:  "3.5",    // ₹ packaging cost per pack
    batches:          "1",
    operDays:         "26",
  });

  // ── Actual Inputs (Tracker) ──
  const [actual, setActual] = useState({
    chakkaQty:        "1000",
    chakkaTS:         "36",
    chakkaFat:        "15",
    sugarAdded:       "720",
    shrikhandObtained:"",
  });

  const [theoResult, setTheoResult]     = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ══════════════════════════════════════════════════════════
  // THEORETICAL CALCULATION (Predictor)
  // ══════════════════════════════════════════════════════════
  const calculateTheo = useCallback(() => {
    const chakka      = parseFloat(theo.chakkaQty)      || 0;
    const Tc          = parseFloat(theo.chakkaTS)   / 100;
    const fatC        = parseFloat(theo.chakkaFat)  / 100;
    const sugar       = parseFloat(theo.sugarAdded)     || 0;

    const protC       = parseFloat(theo.chakkaProtein) / 100;
    const sugarPurity = parseFloat(theo.sugarPurity)  / 100;
    const extras      = parseFloat(theo.extraIngredient)|| 0;

    const chakkaPrice = parseFloat(theo.chakkaPrice)     || 0;
    const sugarPrice  = parseFloat(theo.sugarPrice)      || 0;
    const shrikhandPrice = parseFloat(theo.shrikhandPrice)|| 0;
    const packSizeG   = parseFloat(theo.packSize)        || 100;
    const packCost    = parseFloat(theo.packCostPerPack) || 0;
    const bat         = parseFloat(theo.batches)        || 1;
    const days        = parseFloat(theo.operDays)       || 26;

    if (chakka <= 0 || sugar <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया चक्का की मात्रा और चीनी की मात्रा सही दर्ज करें।" });
      return;
    }

    // Yield
    const shrikhandKg = chakka + sugar + extras;
    const yieldPct = (shrikhandKg / chakka) * 100;

    // Composition
    const chakkaTS_kg = chakka * Tc;
    const sugarTS_kg = sugar * sugarPurity;
    const extrasTS_kg = extras * 0.15; // default 15% TS for pulps
    const totalTS_kg = chakkaTS_kg + sugarTS_kg + extrasTS_kg;
    const finalTSPct = (totalTS_kg / shrikhandKg) * 100;
    const finalMoisturePct = 100 - finalTSPct;

    const sugarInProdPct = (sugarTS_kg / shrikhandKg) * 100;
    const fatInProdPct = ((chakka * fatC) / shrikhandKg) * 100;
    const protInProdPct = ((chakka * protC) / shrikhandKg) * 100;

    // Packaging
    const packsTotal = Math.floor(shrikhandKg * 1000 / packSizeG);
    const packCostTotal = packsTotal * packCost;

    // Economics
    const chakkaCost = chakka * bat * chakkaPrice;
    const sugarCost = sugar * bat * sugarPrice;
    const packCostAll = packCostTotal * bat;
    const totalInputCost = chakkaCost + sugarCost + packCostAll;
    const shrikhandTotal = shrikhandKg * bat;
    const revenue = shrikhandTotal * shrikhandPrice;
    const grossProfit = revenue - totalInputCost;
    const gpm = totalInputCost > 0 ? (grossProfit / totalInputCost) * 100 : 0;

    const monthlyShrikhand = shrikhandKg * bat * days;
    const monthlyRevenue = monthlyShrikhand * shrikhandPrice;
    const monthlyCost = totalInputCost * days;
    const monthlyProfit = grossProfit * days;

    // FSSAI checks
    const fssaiFatMin = 8.5; // for full fat
    const fssaiTSMin = 60.0; // standard limit
    const fssaiSugarMax = 42.0;

    const warnings: string[] = [];
    if (finalTSPct < fssaiTSMin) warnings.push(`श्रीखंड कुल ठोस (TS) ${finalTSPct.toFixed(1)}% FSSAI सीमा (कम से कम 60%) से कम है। चक्का में नमी कम करें। (Total solids is below FSSAI min 60%.)`);
    if (fatInProdPct < fssaiFatMin) warnings.push(`वसा प्रतिशत (${fatInProdPct.toFixed(1)}%) मानक (कम से कम 8.5%) से कम है। अधिक वसा वाले चक्का का उपयोग करें। (Fat is below FSSAI min 8.5%.)`);
    if (sugarInProdPct > fssaiSugarMax) warnings.push(`चीनी की मात्रा (${sugarInProdPct.toFixed(1)}%) अनुशंसित सीमा से अधिक है, उत्पाद अधिक मीठा हो सकता है। (Sugar is high, exceeds 42%.)`);
    if (Tc < 0.32) warnings.push(`चक्का में कुल ठोस (${(Tc*100).toFixed(0)}%) कम है। पानी निकालने (straining) का समय बढ़ाएं। (Chakka TS is low. Increase whey drainage.)`);

    setTheoResult({
      shrikhandKg, yieldPct, finalTSPct, finalMoisturePct,
      sugarInProdPct, fatInProdPct, protInProdPct,
      packsTotal, packCostTotal,
      chakkaCost, sugarCost, packCostAll, totalInputCost, shrikhandTotal, revenue, grossProfit, gpm,
      monthlyShrikhand, monthlyRevenue, monthlyCost, monthlyProfit,
      warnings, chakka, bat, days
    });

    toast({
      title: "🧮 गणना पूरी (Calculated)",
      description: `श्रीखंड यील्ड: ${shrikhandKg.toFixed(1)} kg (${yieldPct.toFixed(0)}%)`,
    });
  }, [theo, toast]);

  // ══════════════════════════════════════════════════════════
  // ACTUAL CALCULATION (Tracker)
  // ══════════════════════════════════════════════════════════
  const calculateActual = useCallback(() => {
    const chakka      = parseFloat(actual.chakkaQty)      || 0;
    const sugar       = parseFloat(actual.sugarAdded)     || 0;
    const shrikhandObt= parseFloat(actual.shrikhandObtained) || 0;

    const extras      = parseFloat(theo.extraIngredient)  || 0;

    if (chakka <= 0 || sugar <= 0 || shrikhandObt <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया चक्का, चीनी और वास्तविक श्रीखंड मात्रा दर्ज करें।" });
      return;
    }

    const idealShrikhand = chakka + sugar + extras;
    const shrikhandRecoveryPct = idealShrikhand > 0 ? (shrikhandObt / idealShrikhand) * 100 : 0;
    const massLossKg = idealShrikhand - shrikhandObt;
    const massLossPct = (massLossKg / idealShrikhand) * 100;

    // Efficiency grade
    let grade = "", gradeColor = "", gradeEmoji = "";
    if (shrikhandRecoveryPct >= 99 && massLossPct <= 0.5) {
      grade = "Excellent (उत्कृष्ट)"; gradeColor = "text-green-700 bg-green-50 border-green-300"; gradeEmoji = "🏆";
    } else if (shrikhandRecoveryPct >= 97) {
      grade = "Good (अच्छा)"; gradeColor = "text-blue-700 bg-blue-50 border-blue-300"; gradeEmoji = "👍";
    } else if (shrikhandRecoveryPct >= 94) {
      grade = "Needs Improvement (सुधार ज़रूरी)"; gradeColor = "text-yellow-700 bg-yellow-50 border-yellow-300"; gradeEmoji = "⚠️";
    } else {
      grade = "Action Required (कार्रवाई ज़रूरी)"; gradeColor = "text-red-700 bg-red-50 border-red-300"; gradeEmoji = "🔴";
    }

    const warnings: string[] = [];
    if (shrikhandRecoveryPct < 96) warnings.push(`श्रीखंड रिकवरी ${shrikhandRecoveryPct.toFixed(1)}% कम है। बर्तन की दीवार पर चिपके रहने से हुए नुकसान की जांच करें। (Shrikhand recovery is low. Check for process wastage.)`);

    setActualResult({
      idealShrikhand,
      shrikhandRecoveryPct, massLossKg, massLossPct,
      grade, gradeColor, gradeEmoji,
      warnings, chakka, shrikhandObt
    });

    toast({
      title: "📋 ट्रैकर गणना पूरी (Tracker Calculated)",
      description: `रिकवरी (Recovery): ${shrikhandRecoveryPct.toFixed(1)}% — ${grade}`,
    });
  }, [actual, theo.extraIngredient, toast]);

  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <Droplet className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800 font-bold">श्रीखंड यील्ड और मिश्रण ट्रैकर (Shrikhand Yield & Blending Tracker)</AlertTitle>
        <AlertDescription className="text-xs text-blue-700">
          चक्का, चीनी और अन्य अतिरिक्त घटकों (mango pulp/dry fruits) के आधार पर श्रीखंड उत्पादन, अंतिम वसा/ठोस संतुलन और लागत अनुमान।<br/>
          <span className="text-blue-600 font-medium">Shrikhand blending yield, fat & total solids composition, packaging cost & profit margin.</span>
        </AlertDescription>
      </Alert>

      {/* Tabs */}
      <Tabs value={activeCalc} onValueChange={v => setActiveCalc(v as "theoretical" | "actual")}>
        <TabsList className="grid grid-cols-2 bg-blue-100/55 p-1 rounded-lg">
          <TabsTrigger value="theoretical" className="text-xs font-bold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            🧮 Predictor (अनुमान)
          </TabsTrigger>
          <TabsTrigger value="actual" className="text-xs font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
            📋 Tracker (वास्तविक)
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: PREDICTOR */}
        <TabsContent value="theoretical" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ValidatedInput
              label="चक्का की मात्रा (Chakka Qty)"
              value={theo.chakkaQty}
              onChange={v => setT("chakkaQty", v)}
              validation={validatePositive(theo.chakkaQty, "Chakka quantity")}
              unit="kg"
              colorScheme="blue"
            />
            <ValidatedInput
              label="चक्का ठोस प्रतिशत (Chakka TS %)"
              value={theo.chakkaTS}
              onChange={v => setT("chakkaTS", v)}
              validation={validateNumber(theo.chakkaTS, 25, 45, "Chakka TS")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="चक्का वसा प्रतिशत (Chakka Fat %)"
              value={theo.chakkaFat}
              onChange={v => setT("chakkaFat", v)}
              validation={validateNumber(theo.chakkaFat, 2, 25, "Chakka fat")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="चीनी की मात्रा (Sugar Added)"
              value={theo.sugarAdded}
              onChange={v => setT("sugarAdded", v)}
              validation={validatePositive(theo.sugarAdded, "Sugar added")}
              unit="kg"
              colorScheme="orange"
            />
          </div>

          {/* Advanced Settings */}
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex justify-between items-center text-xs font-semibold py-2 px-3 border border-blue-100 hover:bg-blue-50/50 rounded-lg"
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <Settings2 className="w-3.5 h-3.5" /> एडवांस्ड सेटिंग्स (Advanced Settings)
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
          </Button>

          {showAdvanced && (
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-2 md:grid-cols-3 gap-3">
              <ValidatedInput
                label="चक्का प्रोटीन प्रतिशत (Chakka Protein %)"
                value={theo.chakkaProtein}
                onChange={v => setT("chakkaProtein", v)}
                validation={validateNumber(theo.chakkaProtein, 5, 20, "Chakka protein")}
                unit="%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="चीनी शुद्धता (Sugar Purity %)"
                value={theo.sugarPurity}
                onChange={v => setT("sugarPurity", v)}
                validation={validateNumber(theo.sugarPurity, 95, 100, "Sugar purity")}
                unit="%"
                colorScheme="blue"
              />
              <ValidatedInput
                label="अन्य अतिरिक्त सामग्री (Extras Pulp/Nuts)"
                value={theo.extraIngredient}
                onChange={v => setT("extraIngredient", v)}
                validation={validatePositive(theo.extraIngredient, "Extra ingredient")}
                unit="kg"
                colorScheme="orange"
              />
            </div>
          )}

          {/* Costing Toggle */}
          <div className="flex items-center gap-2">
            <Checkbox id="shrikhand-costing" checked={enableCosting} onCheckedChange={(c) => setEnableCosting(!!c)} />
            <Label htmlFor="shrikhand-costing" className="text-xs font-semibold cursor-pointer text-slate-700 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-green-600" /> कॉस्टिंग और प्रॉफिटेबिलिटी शामिल करें (Enable Costing & Profitability)
            </Label>
          </div>

          {enableCosting && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-green-50/30 rounded-xl border border-green-100">
              <ValidatedInput
                label="चक्का का मूल्य (Chakka Price)"
                value={theo.chakkaPrice}
                onChange={v => setT("chakkaPrice", v)}
                validation={validatePositive(theo.chakkaPrice, "Chakka price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="चीनी का मूल्य (Sugar Price)"
                value={theo.sugarPrice}
                onChange={v => setT("sugarPrice", v)}
                validation={validatePositive(theo.sugarPrice, "Sugar price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="श्रीखंड मूल्य (Shrikhand Price)"
                value={theo.shrikhandPrice}
                onChange={v => setT("shrikhandPrice", v)}
                validation={validatePositive(theo.shrikhandPrice, "Shrikhand price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="पैकेजिंग साइज (Pack Size)"
                value={theo.packSize}
                onChange={v => setT("packSize", v)}
                validation={validatePositive(theo.packSize, "Pack size")}
                unit="g"
                colorScheme="blue"
              />
              <ValidatedInput
                label="पैकेट पैके. लागत (Pack Packaging Cost)"
                value={theo.packCostPerPack}
                onChange={v => setT("packCostPerPack", v)}
                validation={validatePositive(theo.packCostPerPack, "Pack cost")}
                unit="₹/pack"
                colorScheme="green"
              />
              <ValidatedInput
                label="बैचेस (Batches)"
                value={theo.batches}
                onChange={v => setT("batches", v)}
                validation={validatePositive(theo.batches, "Batches")}
                unit="qty"
                colorScheme="blue"
              />
              <ValidatedInput
                label="कार्य दिवस (Operating Days)"
                value={theo.operDays}
                onChange={v => setT("operDays", v)}
                validation={validatePositive(theo.operDays, "Days")}
                unit="days"
                colorScheme="blue"
              />
            </div>
          )}

          <Button onClick={calculateTheo} className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md">
            🧮 श्रीखंड यील्ड की गणना करें (Calculate Shrikhand Yield)
          </Button>

          {/* Results */}
          {theoResult && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-blue-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">श्रीखंड उत्पादन (Shrikhand Output)</div>
                  <div className="text-xl font-extrabold">{theoResult.shrikhandKg.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">{theoResult.yieldPct.toFixed(1)}% yield vs chakka</div>
                </div>
                <div className="bg-indigo-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">कुल पैकेट्स (Packs Output)</div>
                  <div className="text-xl font-extrabold">{theoResult.packsTotal} packs</div>
                  <div className="text-[9px] opacity-75">Size: {theo.packSize}g</div>
                </div>
                <div className="bg-cyan-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">फाइनल वसा % (Final Fat %)</div>
                  <div className="text-xl font-extrabold">{theoResult.fatInProdPct.toFixed(2)}%</div>
                  <div className="text-[9px] opacity-75">TS: {theoResult.finalTSPct.toFixed(1)}%</div>
                </div>
              </div>

              {/* Composition */}
              <Card className="bg-blue-50/20 border-blue-200">
                <CardHeader className="p-3 pb-1 border-b border-blue-100">
                  <CardTitle className="text-xs font-bold text-blue-800 uppercase">🔬 श्रीखंड संरचना विवरण (Shrikhand Composition)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-xs">
                  {[
                    { label: "कुल ठोस मात्रा (Total solids in Shrikhand)", value: `${theoResult.finalTSPct.toFixed(2)}% (Moisture: ${theoResult.finalMoisturePct.toFixed(1)}%)` },
                    { label: "श्रीखंड में कुल वसा प्रतिशत (Final Fat %)", value: `${theoResult.fatInProdPct.toFixed(2)}%`, color: "text-blue-700" },
                    { label: "श्रीखंड में कुल प्रोटीन % (Final Protein %)", value: `${theoResult.protInProdPct.toFixed(2)}%` },
                    { label: "अंतिम चीनी प्रतिशत (Estimated Sugar %)", value: `${theoResult.sugarInProdPct.toFixed(1)}%` },
                    { label: "पैकेजिंग कुल लागत (Packaging cost)", value: `₹ ${theoResult.packCostTotal.toFixed(0)}` },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between border-b border-blue-100/40 pb-1.5 last:border-none">
                      <span className="text-slate-500">{r.label}</span>
                      <span className={`font-semibold ${r.color || "text-slate-800"}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Economics */}
              {enableCosting && (
                <Card className="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-none">
                  <CardHeader className="p-3 pb-1 border-b border-slate-800">
                    <CardTitle className="text-xs font-bold text-slate-400 uppercase">💰 आर्थिक विश्लेषण (Economics Projections)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">चक्का कुल लागत (Chakka Cost)</span>
                        <span className="font-semibold text-red-300">₹ {theoResult.chakkaCost.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">चीनी की लागत (Sugar Cost)</span>
                        <span className="font-semibold text-amber-300">₹ {theoResult.sugarCost.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">श्रीखंड राजस्व (Revenue)</span>
                        <span className="font-semibold text-green-300">₹ {theoResult.revenue.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="bg-slate-850 rounded-xl p-3 flex justify-between items-center border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-green-400">सकल लाभ (Gross Profit)</div>
                        <div className="text-[10px] text-slate-400">({theo.batches} बैच हेतु / For {theo.batches} batches)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-black text-green-300">₹ {theoResult.grossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                        <div className="text-[11px] text-slate-400">मार्जिन (Margin): {theoResult.gpm.toFixed(1)}%</div>
                      </div>
                    </div>

                    {theoResult.days > 1 && (
                      <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2.5 text-center text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक श्रीखंड (Monthly Yield)</span>
                          <span className="font-semibold text-slate-200">{theoResult.monthlyShrikhand.toFixed(0)} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लागत (Monthly Cost)</span>
                          <span className="font-semibold text-red-300">₹ {theoResult.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लाभ (Net profit)</span>
                          <span className="font-bold text-green-400">₹ {theoResult.monthlyProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Warnings */}
              {theoResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">श्रीखंड गुणवत्ता चेतावनियाँ (Process Warnings)</AlertTitle>
                  <AlertDescription className="text-[11px] text-yellow-700 space-y-1">
                    {theoResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>

        {/* TAB 2: TRACKER */}
        <TabsContent value="actual" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <ValidatedInput
              label="चक्का की मात्रा (Chakka Qty)"
              value={actual.chakkaQty}
              onChange={v => setA("chakkaQty", v)}
              validation={validatePositive(actual.chakkaQty, "Chakka quantity")}
              unit="kg"
              colorScheme="blue"
            />
            <ValidatedInput
              label="चक्का ठोस प्रतिशत (Chakka TS %)"
              value={actual.chakkaTS}
              onChange={v => setA("chakkaTS", v)}
              validation={validateNumber(actual.chakkaTS, 25, 45, "Chakka TS")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="चक्का वसा प्रतिशत (Chakka Fat %)"
              value={actual.chakkaFat}
              onChange={v => setA("chakkaFat", v)}
              validation={validateNumber(actual.chakkaFat, 2, 25, "Chakka fat")}
              unit="%"
              colorScheme="blue"
            />
            <ValidatedInput
              label="चीनी की मात्रा (Sugar Added)"
              value={actual.sugarAdded}
              onChange={v => setA("sugarAdded", v)}
              validation={validatePositive(actual.sugarAdded, "Sugar added")}
              unit="kg"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वास्तविक श्रीखंड प्राप्त (Actual Shrikhand Obt)"
              value={actual.shrikhandObtained}
              onChange={v => setA("shrikhandObtained", v)}
              validation={validatePositive(actual.shrikhandObtained, "Shrikhand obtained")}
              unit="kg"
              colorScheme="orange"
            />
          </div>

          <Button onClick={calculateActual} className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md">
            📊 वास्तविक बैच दक्षता की तुलना करें (Compare Batch Efficiency)
          </Button>

          {actualResult && (
            <div className="space-y-4">
              {/* Grade Badge */}
              <div className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${actualResult.gradeColor}`}>
                <div className="text-4xl mb-1">{actualResult.gradeEmoji}</div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-85">बैच ग्रेड (Batch Efficiency Grade)</div>
                <div className="text-xl font-extrabold">{actualResult.grade}</div>
                <div className="text-sm font-bold mt-1">
                  श्रीखंड रिकवरी दर (Recovery Rate): {actualResult.shrikhandRecoveryPct.toFixed(1)}%
                </div>
              </div>

              {/* Comparison table */}
              <Card className="border-slate-200">
                <CardHeader className="p-3 pb-1 border-b">
                  <CardTitle className="text-xs font-bold text-slate-700 uppercase">📊 आदर्श बनाम वास्तविक (Ideal vs Actual Yield)</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                        <th className="p-2.5">पैरामीटर (Parameter)</th>
                        <th className="p-2.5 text-right">आदर्श (Ideal)</th>
                        <th className="p-2.5 text-right">वास्तविक (Actual)</th>
                        <th className="p-2.5 text-right">हानि/नुकसान (Difference)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">श्रीखंड मात्रा (Shrikhand Yield)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealShrikhand.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.shrikhandObt.toFixed(1)} kg</td>
                        <td className={`p-2.5 text-right font-bold ${actualResult.shrikhandObt >= actualResult.idealShrikhand ? "text-green-600" : "text-red-600"}`}>
                          {(actualResult.shrikhandObt - actualResult.idealShrikhand).toFixed(1)} kg
                        </td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="p-2.5 font-semibold text-slate-700">प्रोसेसिंग द्रव्यमान हानि (Mass Loss)</td>
                        <td className="p-2.5 text-right text-slate-600">0.0 kg</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.massLossKg.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-red-600 font-bold">{actualResult.massLossKg.toFixed(1)} kg ({actualResult.massLossPct.toFixed(2)}%)</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Alerts */}
              {actualResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">सुधार बिंदु (Actionable Points)</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {actualResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PedhaBurfiYieldCalc() {
  const { toast } = useToast();
  const { validatePositive, validateNumber } = useInputValidation();

  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">("theoretical");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableCosting, setEnableCosting] = useState(false);

  // ── Theoretical Inputs (Predictor) ──
  const [theo, setTheo] = useState({
    khoaQty:       "100",     // kg Khoa input
    khoaTS:        "72",      // % Khoa total solids
    khoaFat:       "26",      // % Khoa fat content
    sugarAdded:    "32",      // kg sugar added
    // Advanced
    additiveQty:   "0",       // kg extra additives (besan, coconut, etc.)
    additiveTS:    "90",      // % additive TS
    moistureLoss:  "8",       // % moisture loss during cooking
    // Costing
    khoaPrice:     "265",     // ₹/kg Khoa
    sugarPrice:    "40",      // ₹/kg sugar
    sweetPrice:    "380",     // ₹/kg final sweet sale price
    packSize:      "250",     // g packaging box size
    packCost:      "8",       // ₹ per packaging box
    batches:       "1",
    operDays:      "26",
  });

  // ── Actual Inputs (Tracker) ──
  const [actual, setActual] = useState({
    khoaQty:       "100",
    khoaTS:        "72",
    khoaFat:       "26",
    sugarAdded:    "32",
    sweetObtained: "",
  });

  const [theoResult, setTheoResult]     = useState<any>(null);
  const [actualResult, setActualResult] = useState<any>(null);

  const setT = (k: string, v: string) => setTheo(p => ({ ...p, [k]: v }));
  const setA = (k: string, v: string) => setActual(p => ({ ...p, [k]: v }));

  // ══════════════════════════════════════════════════════════
  // THEORETICAL CALCULATION (Predictor)
  // ══════════════════════════════════════════════════════════
  const calculateTheo = useCallback(() => {
    const khoa     = parseFloat(theo.khoaQty)       || 0;
    const khoaTS   = parseFloat(theo.khoaTS)    / 100;
    const khoaFat  = parseFloat(theo.khoaFat)   / 100;
    const sugar    = parseFloat(theo.sugarAdded)    || 0;

    const addQty   = parseFloat(theo.additiveQty)   || 0;
    const addTS    = parseFloat(theo.additiveTS)    / 100;
    const mlPct    = parseFloat(theo.moistureLoss)  / 100;

    const khoaPr   = parseFloat(theo.khoaPrice)  || 0;
    const sugarPr  = parseFloat(theo.sugarPrice) || 0;
    const sweetPr  = parseFloat(theo.sweetPrice) || 0;
    const packSzG  = parseFloat(theo.packSize)   || 250;
    const pCost    = parseFloat(theo.packCost)   || 0;
    const bat      = parseFloat(theo.batches)       || 1;
    const days     = parseFloat(theo.operDays)      || 26;

    if (khoa <= 0 || sugar <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया खोया की मात्रा और चीनी की मात्रा सही दर्ज करें।" });
      return;
    }

    // Total mix before cooking
    const totalMix = khoa + sugar + addQty;

    // Moisture Loss during cooking
    const moistureKg = totalMix * mlPct;

    // Final Yield
    const yieldKg = totalMix - moistureKg;
    const yieldVsMixPct = (yieldKg / totalMix) * 100;
    const yieldVsKhoaPct = (yieldKg / khoa) * 100;

    // TS Contributions & Final Composition
    const khoaTS_kg = khoa * khoaTS;
    const sugarTS_kg = sugar * 0.999; // sugar ~99.9% TS
    const addTS_kg = addQty * addTS;
    const totalTS_kg = khoaTS_kg + sugarTS_kg + addTS_kg;
    const finalTSPct = (totalTS_kg / yieldKg) * 100;
    const finalMoistPct = 100 - finalTSPct;

    const sugarInProdPct = (sugarTS_kg / yieldKg) * 100;
    const fatInProdPct = ((khoa * khoaFat) / yieldKg) * 100;

    // Packing & Pieces
    const packsPerBatch = Math.floor(yieldKg * 1000 / packSzG);
    const packCostBatch = packsPerBatch * pCost;
    const piecesPerBatch = Math.floor(yieldKg * 1000 / 20); // 20g pedha

    // Batch and Operating totals
    const yieldTotal = yieldKg * bat;
    const packsTotal = packsPerBatch * bat;
    const packCostTotal = packCostBatch * bat;

    // Economics
    const khoaCost = khoa * bat * khoaPr;
    const sugarCost = sugar * bat * sugarPr;
    const totalInputCost = khoaCost + sugarCost + packCostTotal;
    const revenue = yieldTotal * sweetPr;
    const grossProfit = revenue - totalInputCost;
    const gpm = totalInputCost > 0 ? (grossProfit / totalInputCost) * 100 : 0;
    const costPerKg = totalInputCost / yieldTotal;
    const revenuePerKgKhoa = revenue / (khoa * bat);

    const monthlyYield = yieldTotal * days;
    const monthlyRev = revenue * days;
    const monthlyCost = totalInputCost * days;
    const monthlyProfit = grossProfit * days;

    const warnings: string[] = [];
    if (finalTSPct < 85) warnings.push(`स्वीट कुल ठोस (TS) ${finalTSPct.toFixed(1)}% कम है। सेल्फ लाइफ कम हो सकती है, अधिक पकाएं। (Final TS is low. Shelf life may be reduced.)`);
    if (finalMoistPct > 15) warnings.push(`नमी (${finalMoistPct.toFixed(1)}%) अनुशंसित सीमा (14% से कम) से अधिक है। (Moisture is above recommended limit of 14%.)`);
    if (sugarInProdPct > 35) warnings.push(`चीनी की मात्रा (${sugarInProdPct.toFixed(1)}%) अधिक है, मिठाई बहुत मीठी हो सकती है। (Sugar content is high.)`);
    if (fatInProdPct < 15) warnings.push(`वसा प्रतिशत (${fatInProdPct.toFixed(1)}%) कम है, बेहतर स्वाद के लिए उच्च फैट वाले खोया का प्रयोग करें। (Fat % is low for premium mouthfeel.)`);

    setTheoResult({
      totalMix, moistureKg, yieldKg, yieldVsMixPct, yieldVsKhoaPct,
      khoaTS_kg, sugarTS_kg, addTS_kg, totalTS_kg,
      finalTSPct, finalMoistPct, sugarInProdPct, fatInProdPct,
      packsPerBatch, packCostBatch, piecesPerBatch,
      yieldTotal, packsTotal, packCostTotal,
      khoaCost, sugarCost, totalInputCost,
      revenue, grossProfit, gpm, costPerKg, revenuePerKgKhoa,
      monthlyYield, monthlyRev, monthlyCost, monthlyProfit,
      warnings, khoa, bat, days
    });

    toast({
      title: "🧮 गणना पूरी (Calculated)",
      description: `मिठाई उत्पादन: ${yieldKg.toFixed(1)} kg (${yieldVsKhoaPct.toFixed(0)}% yield vs khoa)`,
    });
  }, [theo, toast]);

  // ══════════════════════════════════════════════════════════
  // ACTUAL CALCULATION (Tracker)
  // ══════════════════════════════════════════════════════════
  const calculateActual = useCallback(() => {
    const khoa     = parseFloat(actual.khoaQty)       || 0;
    const sugar    = parseFloat(actual.sugarAdded)    || 0;
    const sweetObt = parseFloat(actual.sweetObtained) || 0;

    const addQty   = parseFloat(theo.additiveQty)   || 0;
    const mlPct    = parseFloat(theo.moistureLoss)  / 100;

    if (khoa <= 0 || sugar <= 0 || sweetObt <= 0) {
      toast({ variant: "destructive", title: "त्रुटि (Error)", description: "कृपया खोया, चीनी और वास्तविक मिठाई मात्रा दर्ज करें।" });
      return;
    }

    const totalMix = khoa + sugar + addQty;
    const idealYield = totalMix * (1 - mlPct);

    const sweetRecoveryPct = idealYield > 0 ? (sweetObt / idealYield) * 100 : 0;
    const massLossKg = idealYield - sweetObt;
    const massLossPct = (massLossKg / idealYield) * 100;

    // Efficiency grade
    let grade = "", gradeColor = "", gradeEmoji = "";
    if (sweetRecoveryPct >= 99 && massLossPct <= 0.5) {
      grade = "Excellent (उत्कृष्ट)"; gradeColor = "text-green-700 bg-green-50 border-green-300"; gradeEmoji = "🏆";
    } else if (sweetRecoveryPct >= 97) {
      grade = "Good (अच्छा)"; gradeColor = "text-blue-700 bg-blue-50 border-blue-300"; gradeEmoji = "👍";
    } else if (sweetRecoveryPct >= 94) {
      grade = "Needs Improvement (सुधार ज़रूरी)"; gradeColor = "text-yellow-700 bg-yellow-50 border-yellow-300"; gradeEmoji = "⚠️";
    } else {
      grade = "Action Required (कार्रवाई ज़रूरी)"; gradeColor = "text-red-700 bg-red-50 border-red-300"; gradeEmoji = "🔴";
    }

    const warnings: string[] = [];
    if (sweetRecoveryPct < 96) warnings.push(`मिठाई रिकवरी ${sweetRecoveryPct.toFixed(1)}% कम है। कड़ाही में चिपकने या हैंडलिंग नुकसान की जांच करें। (Sweet recovery is low.)`);

    setActualResult({
      idealYield,
      sweetRecoveryPct, massLossKg, massLossPct,
      grade, gradeColor, gradeEmoji,
      warnings, khoa, sweetObt
    });

    toast({
      title: "📋 ट्रैकर गणना पूरी (Tracker Calculated)",
      description: `रिकवरी (Recovery): ${sweetRecoveryPct.toFixed(1)}% — ${grade}`,
    });
  }, [actual, theo.additiveQty, theo.moistureLoss, toast]);

  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <Alert className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
        <Scale className="h-4 w-4 text-rose-600" />
        <AlertTitle className="text-rose-800 font-bold">पेड़ा और बर्फी यील्ड कैलकुलेटर (Pedha & Burfi Yield & Blending)</AlertTitle>
        <AlertDescription className="text-xs text-rose-700">
          खोया, चीनी और अतिरिक्त सामग्री के आधार पर बर्फी/पेड़ा का कुल उत्पादन, नमी की कमी, कुल ठोस और आर्थिक मार्जिन आकलन।<br/>
          <span className="text-rose-600 font-medium">Pedha/Burfi batch yield, moisture loss during cooking, packaging cost & profit margin.</span>
        </AlertDescription>
      </Alert>

      {/* Tabs */}
      <Tabs value={activeCalc} onValueChange={v => setActiveCalc(v as "theoretical" | "actual")}>
        <TabsList className="grid grid-cols-2 bg-rose-100/55 p-1 rounded-lg">
          <TabsTrigger value="theoretical" className="text-xs font-bold data-[state=active]:bg-rose-600 data-[state=active]:text-white">
            🧮 Predictor (अनुमान)
          </TabsTrigger>
          <TabsTrigger value="actual" className="text-xs font-bold data-[state=active]:bg-pink-600 data-[state=active]:text-white">
            📋 Tracker (वास्तविक)
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: PREDICTOR */}
        <TabsContent value="theoretical" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ValidatedInput
              label="खोया की मात्रा (Khoa Qty)"
              value={theo.khoaQty}
              onChange={v => setT("khoaQty", v)}
              validation={validatePositive(theo.khoaQty, "Khoa quantity")}
              unit="kg"
              colorScheme="rose"
            />
            <ValidatedInput
              label="खोया ठोस प्रतिशत (Khoa TS %)"
              value={theo.khoaTS}
              onChange={v => setT("khoaTS", v)}
              validation={validateNumber(theo.khoaTS, 55, 80, "Khoa TS")}
              unit="%"
              colorScheme="rose"
            />
            <ValidatedInput
              label="खोया वसा प्रतिशत (Khoa Fat %)"
              value={theo.khoaFat}
              onChange={v => setT("khoaFat", v)}
              validation={validateNumber(theo.khoaFat, 10, 35, "Khoa fat")}
              unit="%"
              colorScheme="rose"
            />
            <ValidatedInput
              label="चीनी की मात्रा (Sugar Added)"
              value={theo.sugarAdded}
              onChange={v => setT("sugarAdded", v)}
              validation={validatePositive(theo.sugarAdded, "Sugar added")}
              unit="kg"
              colorScheme="orange"
            />
          </div>

          {/* Advanced Settings */}
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex justify-between items-center text-xs font-semibold py-2 px-3 border border-rose-100 hover:bg-rose-50/50 rounded-lg"
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <Settings2 className="w-3.5 h-3.5" /> एडवांस्ड सेटिंग्स (Advanced Settings)
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
          </Button>

          {showAdvanced && (
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-2 md:grid-cols-3 gap-3">
              <ValidatedInput
                label="अतिरिक्त सामग्री मात्रा (Additive Qty)"
                value={theo.additiveQty}
                onChange={v => setT("additiveQty", v)}
                validation={validatePositive(theo.additiveQty, "Additive qty")}
                unit="kg"
                colorScheme="rose"
              />
              <ValidatedInput
                label="अतिरिक्त सामग्री ठोस (Additive TS %)"
                value={theo.additiveTS}
                onChange={v => setT("additiveTS", v)}
                validation={validateNumber(theo.additiveTS, 50, 100, "Additive TS")}
                unit="%"
                colorScheme="rose"
              />
              <ValidatedInput
                label="खाना पकाने में नमी की कमी % (Cooking Moisture Loss %)"
                value={theo.moistureLoss}
                onChange={v => setT("moistureLoss", v)}
                validation={validateNumber(theo.moistureLoss, 2, 20, "Moisture loss")}
                unit="%"
                colorScheme="red"
              />
            </div>
          )}

          {/* Costing Toggle */}
          <div className="flex items-center gap-2">
            <Checkbox id="pedha-costing" checked={enableCosting} onCheckedChange={(c) => setEnableCosting(!!c)} />
            <Label htmlFor="pedha-costing" className="text-xs font-semibold cursor-pointer text-slate-700 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-green-600" /> कॉस्टिंग और प्रॉफिटेबिलिटी शामिल करें (Enable Costing & Profitability)
            </Label>
          </div>

          {enableCosting && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-green-50/30 rounded-xl border border-green-100">
              <ValidatedInput
                label="खोया का मूल्य (Khoa Price)"
                value={theo.khoaPrice}
                onChange={v => setT("khoaPrice", v)}
                validation={validatePositive(theo.khoaPrice, "Khoa price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="चीनी का मूल्य (Sugar Price)"
                value={theo.sugarPrice}
                onChange={v => setT("sugarPrice", v)}
                validation={validatePositive(theo.sugarPrice, "Sugar price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="मिठाई मूल्य (Sweet Price)"
                value={theo.sweetPrice}
                onChange={v => setT("sweetPrice", v)}
                validation={validatePositive(theo.sweetPrice, "Sweet price")}
                unit="₹/kg"
                colorScheme="green"
              />
              <ValidatedInput
                label="पैकेजिंग साइज (Pack Box Size)"
                value={theo.packSize}
                onChange={v => setT("packSize", v)}
                validation={validatePositive(theo.packSize, "Pack size")}
                unit="g"
                colorScheme="blue"
              />
              <ValidatedInput
                label="पैकेट बॉक्स लागत (Pack Box Cost)"
                value={theo.packCost}
                onChange={v => setT("packCost", v)}
                validation={validatePositive(theo.packCost, "Pack cost")}
                unit="₹/box"
                colorScheme="green"
              />
              <ValidatedInput
                label="बैचेस (Batches)"
                value={theo.batches}
                onChange={v => setT("batches", v)}
                validation={validatePositive(theo.batches, "Batches")}
                unit="qty"
                colorScheme="blue"
              />
              <ValidatedInput
                label="कार्य दिवस (Operating Days)"
                value={theo.operDays}
                onChange={v => setT("operDays", v)}
                validation={validatePositive(theo.operDays, "Days")}
                unit="days"
                colorScheme="blue"
              />
            </div>
          )}

          <Button onClick={calculateTheo} className="w-full h-11 bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-md">
            🧮 मिठाई यील्ड की गणना करें (Calculate Sweet Yield)
          </Button>

          {/* Results */}
          {theoResult && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-rose-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">मिठाई उत्पादन (Sweet Output)</div>
                  <div className="text-xl font-extrabold">{theoResult.yieldKg.toFixed(1)} kg</div>
                  <div className="text-[9px] opacity-75">{theoResult.yieldVsKhoaPct.toFixed(0)}% vs Khoa</div>
                </div>
                <div className="bg-pink-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">अनुमानित पीस (Estimated Pieces)</div>
                  <div className="text-xl font-extrabold">{theoResult.piecesPerBatch} pcs</div>
                  <div className="text-[9px] opacity-75">~20g per piece</div>
                </div>
                <div className="bg-amber-600 text-white p-3 rounded-xl shadow-sm text-center">
                  <div className="text-[10px] uppercase opacity-80 font-bold">फाइनल वसा % (Final Fat %)</div>
                  <div className="text-xl font-extrabold">{theoResult.fatInProdPct.toFixed(2)}%</div>
                  <div className="text-[9px] opacity-75">TS: {theoResult.finalTSPct.toFixed(1)}%</div>
                </div>
              </div>

              {/* Composition */}
              <Card className="bg-rose-50/20 border-rose-200">
                <CardHeader className="p-3 pb-1 border-b border-rose-100">
                  <CardTitle className="text-xs font-bold text-rose-800 uppercase">🔬 मिठाई घटक और संरचना (Pedha/Burfi Composition)</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-xs">
                  {[
                    { label: "कुल मिक्स पकाने से पहले (Total mix before cooking)", value: `${theoResult.totalMix.toFixed(1)} kg` },
                    { label: "वाष्पीकृत पानी (Moisture evaporated)", value: `${theoResult.moistureKg.toFixed(1)} kg`, color: "text-red-600" },
                    { label: "स्वीट कुल ठोस % (Final Sweet TS %)", value: `${theoResult.finalTSPct.toFixed(2)}% (Moisture: ${theoResult.finalMoistPct.toFixed(1)}%)` },
                    { label: "चीनी प्रतिशत (Sucrose %)", value: `${theoResult.sugarInProdPct.toFixed(1)}%` },
                    { label: "कुल बॉक्स आउटपुट (Box packaging output)", value: `${theoResult.packsTotal} boxes` },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between border-b border-rose-100/40 pb-1.5 last:border-none">
                      <span className="text-slate-500">{r.label}</span>
                      <span className={`font-semibold ${r.color || "text-slate-800"}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Economics */}
              {enableCosting && (
                <Card className="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-none">
                  <CardHeader className="p-3 pb-1 border-b border-slate-800">
                    <CardTitle className="text-xs font-bold text-slate-400 uppercase">💰 आर्थिक विश्लेषण (Economics Projections)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">खोया कुल लागत (Khoa Cost)</span>
                        <span className="font-semibold text-red-300">₹ {theoResult.khoaCost.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">चीनी कुल लागत (Sugar Cost)</span>
                        <span className="font-semibold text-amber-300">₹ {theoResult.sugarCost.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded-lg">
                        <span className="text-slate-400 block text-[9px]">मिठाई राजस्व (Revenue)</span>
                        <span className="font-semibold text-green-300">₹ {theoResult.revenue.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="bg-slate-850 rounded-xl p-3 flex justify-between items-center border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-green-400">सकल लाभ (Gross Profit)</div>
                        <div className="text-[10px] text-slate-400">({theo.batches} बैच हेतु / For {theo.batches} batches)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-black text-green-300">₹ {theoResult.grossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
                        <div className="text-[11px] text-slate-400">मार्जिन (Margin): {theoResult.gpm.toFixed(1)}%</div>
                      </div>
                    </div>

                    {theoResult.days > 1 && (
                      <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2.5 text-center text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक उत्पादन (Monthly Yield)</span>
                          <span className="font-semibold text-slate-200">{theoResult.monthlyYield.toFixed(0)} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लागत (Monthly Cost)</span>
                          <span className="font-semibold text-red-300">₹ {theoResult.monthlyCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px]">मासिक लाभ (Net profit)</span>
                          <span className="font-bold text-green-400">₹ {theoResult.monthlyProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Warnings */}
              {theoResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">मिठाई गुणवत्ता चेतावनियाँ (Process Warnings)</AlertTitle>
                  <AlertDescription className="text-[11px] text-yellow-700 space-y-1">
                    {theoResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>

        {/* TAB 2: TRACKER */}
        <TabsContent value="actual" className="space-y-4 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <ValidatedInput
              label="खोया की मात्रा (Khoa Qty)"
              value={actual.khoaQty}
              onChange={v => setA("khoaQty", v)}
              validation={validatePositive(actual.khoaQty, "Khoa quantity")}
              unit="kg"
              colorScheme="rose"
            />
            <ValidatedInput
              label="खोया ठोस प्रतिशत (Khoa TS %)"
              value={actual.khoaTS}
              onChange={v => setA("khoaTS", v)}
              validation={validateNumber(actual.khoaTS, 55, 80, "Khoa TS")}
              unit="%"
              colorScheme="rose"
            />
            <ValidatedInput
              label="खोया वसा प्रतिशत (Khoa Fat %)"
              value={actual.khoaFat}
              onChange={v => setA("khoaFat", v)}
              validation={validateNumber(actual.khoaFat, 10, 35, "Khoa fat")}
              unit="%"
              colorScheme="rose"
            />
            <ValidatedInput
              label="चीनी की मात्रा (Sugar Added)"
              value={actual.sugarAdded}
              onChange={v => setA("sugarAdded", v)}
              validation={validatePositive(actual.sugarAdded, "Sugar added")}
              unit="kg"
              colorScheme="orange"
            />
            <ValidatedInput
              label="वास्तविक प्राप्त मिठाई (Actual Sweet Obt)"
              value={actual.sweetObtained}
              onChange={v => setA("sweetObtained", v)}
              validation={validatePositive(actual.sweetObtained, "Sweet obtained")}
              unit="kg"
              colorScheme="orange"
            />
          </div>

          <Button onClick={calculateActual} className="w-full h-11 bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-md">
            📊 वास्तविक बैच दक्षता की तुलना करें (Compare Batch Efficiency)
          </Button>

          {actualResult && (
            <div className="space-y-4">
              {/* Grade Badge */}
              <div className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${actualResult.gradeColor}`}>
                <div className="text-4xl mb-1">{actualResult.gradeEmoji}</div>
                <div className="text-xs uppercase tracking-wider font-bold opacity-85">बैच ग्रेड (Batch Efficiency Grade)</div>
                <div className="text-xl font-extrabold">{actualResult.grade}</div>
                <div className="text-sm font-bold mt-1">
                  मिठाई रिकवरी दर (Recovery Rate): {actualResult.sweetRecoveryPct.toFixed(1)}%
                </div>
              </div>

              {/* Comparison table */}
              <Card className="border-slate-200">
                <CardHeader className="p-3 pb-1 border-b">
                  <CardTitle className="text-xs font-bold text-slate-700 uppercase">📊 आदर्श बनाम वास्तविक (Ideal vs Actual Yield)</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                        <th className="p-2.5">पैरामीटर (Parameter)</th>
                        <th className="p-2.5 text-right">आदर्श (Ideal)</th>
                        <th className="p-2.5 text-right">वास्तविक (Actual)</th>
                        <th className="p-2.5 text-right">हानि/नुकसान (Difference)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2.5 font-medium text-slate-700">मिठाई मात्रा (Sweet Yield)</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.idealYield.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-slate-900 font-bold">{actualResult.sweetObt.toFixed(1)} kg</td>
                        <td className={`p-2.5 text-right font-bold ${actualResult.sweetObt >= actualResult.idealYield ? "text-green-600" : "text-red-600"}`}>
                          {(actualResult.sweetObt - actualResult.idealYield).toFixed(1)} kg
                        </td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="p-2.5 font-semibold text-slate-700">प्रोसेसिंग द्रव्यमान हानि (Mass Loss)</td>
                        <td className="p-2.5 text-right text-slate-600">0.0 kg</td>
                        <td className="p-2.5 text-right text-slate-600">{actualResult.massLossKg.toFixed(1)} kg</td>
                        <td className="p-2.5 text-right text-red-600 font-bold">{actualResult.massLossKg.toFixed(1)} kg ({actualResult.massLossPct.toFixed(2)}%)</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Alerts */}
              {actualResult.warnings.length > 0 && (
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800 text-xs font-bold">सुधार बिंदु (Actionable Points)</AlertTitle>
                  <AlertDescription className="text-xs text-yellow-700 space-y-1">
                    {actualResult.warnings.map((w: string, i: number) => <div key={i}>• {w}</div>)}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}


// ==================== ENHANCED ICE CREAM CALCULATORS ====================
function IceCreamCalculators() {
  const [activeCalc, setActiveCalc] = useState("mix-comp");

  const calculators = {
    "mix-comp": {
      title: "Mix Composition",
      component: <MixCompositionCalc />,
      icon: Droplets,
      color: "text-purple-600",
    },
    "batch-scaling": {
      title: "Batch Scaling",
      component: <BatchScalingCalc />,
      icon: Weight,
      color: "text-blue-600",
    },
    // ✅ ADD THIS BLOCK
    "texture-balancer": {
      title: "Texture (POD/PAC)",
      component: <AdvancedBalancer />, // <--- This calls the new component
      icon: Snowflake,
      color: "text-indigo-600",
    },
    overrun: {
      title: "Overrun Calculator",
      component: <OverrunCalc />,
      icon: ChevronsUp,
      color: "text-green-600",
    },
    "freezing-point": {
      title: "Freezing Point",
      component: <FreezingPointCalc />,
      icon: Thermometer,
      color: "text-cyan-600",
    },
  };

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <IceCreamIcon className="h-6 sm:h-7 w-6 sm:w-7 text-purple-600" />
          Ice Cream Calculators
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Professional ice cream formulation and production calculations
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* DROPDOWN - BOTH Mobile & Desktop */}
        <div className="mb-6">
          <Label className="text-sm sm:text-base font-semibold mb-3 block">
            Select Calculator Type
          </Label>
          <Select value={activeCalc} onValueChange={setActiveCalc}>
            <SelectTrigger className="w-full h-12 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(calculators).map(
                ([key, { title, icon: Icon, color }]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center gap-2">
                      <Icon className={cn("h-4 w-4", color)} />
                      <span>{title}</span>
                    </div>
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="border-t pt-6">
          {calculators[activeCalc as keyof typeof calculators]?.component}
        </div>
      </CardContent>
    </Card>
  );
}

// ==================== ADVANCED MIX COMPOSITION & ACCURATE VERIFICATION ====================

// Extended Interface
interface MixIngredient {
  id: number;
  name: string;
  amount: string;      // kg
  fat: string;         // %
  msnf: string;        // %
  sugar: string;       // %
  stabilizer: string;  // %
  price: string;       // ₹ per kg
}

// Industry Standard Presets
// --- DATA & PRESETS (Updated with POD/PAC) ---
const INGREDIENT_PRESETS: Record<string, any> = {
  "Milk (Full Cream)": { fat: "6.0", msnf: "9.0", snf: "9.0", sugar: "0", stab: "0", pod: 0, pac: 0, solids: 15.0, price: "55" },
  "Raw Milk (Buffalo)": { fat: "6.5", msnf: "9.0", snf: "9.0", sugar: "0", stab: "0", pod: 0, pac: 0, solids: 15.5, price: "60" },
  "Cream (40%)": { fat: "40.0", msnf: "5.4", snf: "5.4", sugar: "0", stab: "0", pod: 0, pac: 0, solids: 45.4, price: "280" },
  "SMP (Skim Powder)": { fat: "0.5", msnf: "97.0", snf: "97.0", sugar: "0", stab: "0", pod: 0, pac: 0, solids: 97.5, price: "320" },
  "Sugar (Sucrose)": { fat: "0", msnf: "0", snf: "0", sugar: "100", stab: "0", pod: 100, pac: 100, solids: 100, price: "42" },
  "Dextrose": { fat: "0", msnf: "0", snf: "0", sugar: "92", stab: "0", pod: 70, pac: 190, solids: 92, price: "65" },
  "Glucose Syrup (42DE)": { fat: "0", msnf: "0", snf: "0", sugar: "80", stab: "0", pod: 50, pac: 80, solids: 80, price: "50" },
  "Invert Sugar": { fat: "0", msnf: "0", snf: "0", sugar: "75", stab: "0", pod: 130, pac: 190, solids: 75, price: "55" },
  "Stabilizer": { fat: "0", msnf: "0", snf: "0", sugar: "0", stab: "100", pod: 0, pac: 0, solids: 100, price: "850" },
  "Water": { fat: "0", msnf: "0", snf: "0", sugar: "0", stab: "0", pod: 0, pac: 0, solids: 0, price: "0" },
};

function MixCompositionCalc() {
  const { toast } = useToast();
  
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("input");
  const [ingredients, setIngredients] = useState<MixIngredient[]>([
    { id: 1, name: "Raw Milk (Buffalo)", amount: "65", fat: "6.5", msnf: "9.0", sugar: "0", stabilizer: "0", price: "55" },
    { id: 2, name: "Cream (40%)", amount: "10", fat: "40", msnf: "5.4", sugar: "0", stabilizer: "0", price: "280" },
    { id: 3, name: "SMP", amount: "4", fat: "0.5", msnf: "97", sugar: "0", stabilizer: "0", price: "320" },
    { id: 4, name: "Sugar", amount: "15", fat: "0", msnf: "0", sugar: "100", stabilizer: "0", price: "42" },
    { id: 5, name: "Stabilizer", amount: "0.3", fat: "0", msnf: "0", sugar: "0", stabilizer: "100", price: "850" },
  ]);

  const [result, setResult] = useState<{
    totalWeight: number;
    fatP: number; msnfP: number; sugarP: number; stabP: number;
    tsP: number; waterP: number;
    totalCost: number; costPerKg: number;
  } | null>(null);

  const [verificationData, setVerificationData] = useState<string[]>([]);

  // --- HANDLERS ---
  const addIngredient = (presetName: string = "") => {
    let preset = { fat: "", msnf: "", sugar: "", stab: "", price: "" };
    if (presetName && presetName !== "Custom" && INGREDIENT_PRESETS[presetName as keyof typeof INGREDIENT_PRESETS]) {
      preset = INGREDIENT_PRESETS[presetName as keyof typeof INGREDIENT_PRESETS];
    }

    setIngredients([
      ...ingredients,
      { 
        id: Date.now(), 
        name: presetName === "Custom" ? "" : presetName, 
        amount: "", 
        fat: preset.fat, 
        msnf: preset.msnf, 
        sugar: preset.sugar, 
        stabilizer: preset.stab, 
        price: preset.price 
      },
    ]);
  };

  const removeIngredient = (id: number) => {
    if (ingredients.length <= 1) return;
    setIngredients(ingredients.filter((ing) => ing.id !== id));
  };

  const handleChange = (id: number, field: keyof MixIngredient, value: string) => {
    setIngredients(ingredients.map((ing) => (ing.id === id ? { ...ing, [field]: value } : ing)));
  };

  // --- CALCULATION LOGIC ---
  const calculate = useCallback(() => {
    let totalWeight = 0;
    let totalFatKg = 0;
    let totalMsnfKg = 0;
    let totalSugarKg = 0;
    let totalStabKg = 0;
    let totalCost = 0;

    const steps: string[] = [];
    steps.push(`📊 **WEIGHTED AVERAGE CALCULATION:**`);

    ingredients.forEach(ing => {
      const amt = parseFloat(ing.amount) || 0;
      if (amt <= 0) return;

      const f = parseFloat(ing.fat) || 0;
      const m = parseFloat(ing.msnf) || 0;
      const s = parseFloat(ing.sugar) || 0;
      const st = parseFloat(ing.stabilizer) || 0;
      const p = parseFloat(ing.price) || 0;

      // Kg calculations
      const fKg = amt * (f / 100);
      const mKg = amt * (m / 100);
      const sKg = amt * (s / 100);
      const stKg = amt * (st / 100);
      const c = amt * p;

      totalWeight += amt;
      totalFatKg += fKg;
      totalMsnfKg += mKg;
      totalSugarKg += sKg;
      totalStabKg += stKg;
      totalCost += c;

      // Verification Step Log
      steps.push(`🔹 **${ing.name || 'Ingredient'} (${amt}kg):**`);
      if(f > 0) steps.push(`   - Fat: ${amt} × ${f}% = ${fKg.toFixed(3)} kg`);
      if(m > 0) steps.push(`   - MSNF: ${amt} × ${m}% = ${mKg.toFixed(3)} kg`);
      if(s > 0) steps.push(`   - Sugar: ${amt} × ${s}% = ${sKg.toFixed(3)} kg`);
      if(c > 0) steps.push(`   - Cost: ${amt} × ₹${p} = ₹${c.toFixed(2)}`);
    });

    if (totalWeight === 0) {
      toast({ title: "Error", description: "Total weight cannot be zero.", variant: "destructive" });
      return;
    }

    const fatP = (totalFatKg / totalWeight) * 100;
    const msnfP = (totalMsnfKg / totalWeight) * 100;
    const sugarP = (totalSugarKg / totalWeight) * 100;
    const stabP = (totalStabKg / totalWeight) * 100;
    const tsP = fatP + msnfP + sugarP + stabP;
    const waterP = 100 - tsP;
    const costPerKg = totalCost / totalWeight;

    // Final Verification Summary
    steps.push(`\n📝 **FINAL TOTALS:**`);
    steps.push(`   - Total Batch Weight: ${totalWeight.toFixed(2)} kg`);
    steps.push(`   - Total Fat Content: ${totalFatKg.toFixed(3)} kg`);
    steps.push(`   - Total Batch Cost: ₹${totalCost.toFixed(2)}`);
    steps.push(`\n🧮 **PERCENTAGE FORMULA:**`);
    steps.push(`   (Total Component Kg / Total Batch Kg) × 100`);
    steps.push(`   Fat % = (${totalFatKg.toFixed(3)} / ${totalWeight.toFixed(2)}) × 100 = **${fatP.toFixed(2)}%**`);
    steps.push(`\n💰 **COST FORMULA:**`);
    steps.push(`   Total Cost / Total Weight`);
    steps.push(`   ${totalCost.toFixed(2)} / ${totalWeight.toFixed(2)} = **₹${costPerKg.toFixed(2)} / kg**`);

    setVerificationData(steps);
    setResult({
      totalWeight, fatP, msnfP, sugarP, stabP, tsP, waterP, totalCost, costPerKg
    });

    toast({ title: "Calculated!", description: "Go to 'Verify Math' tab to see details." });

  }, [ingredients, toast]);

  return (
    <div className="w-full max-w-full space-y-4 p-1 overflow-x-hidden">
      <Alert className="bg-purple-50 border-purple-200">
        <Droplets className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-sm font-bold">Mix Analyzer</AlertTitle>
        <AlertDescription className="text-xs">
          Calculate Batch Weight, Costing & Composition accurately.
        </AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-muted/50">
          <TabsTrigger value="input" className="text-xs sm:text-sm py-2">Calculator</TabsTrigger>
          <TabsTrigger value="verification" className="text-xs sm:text-sm py-2 flex items-center gap-1">
             <FileText className="w-3 h-3"/> Verify Math
          </TabsTrigger>
        </TabsList>

        {/* --- TAB 1: INPUTS & SUMMARY --- */}
        <TabsContent value="input" className="space-y-4 animate-in fade-in-50">
          
          {/* Ingredient List - Fully Mobile Responsive */}
          <div className="space-y-3">
            {ingredients.map((ing) => (
              <Card key={ing.id} className="p-3 border-l-4 border-l-purple-500 shadow-sm">
                <div className="flex flex-col gap-3">
                  
                  {/* Row 1: Name & Weight & Price */}
                  <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-2 items-start">
                    <div className="space-y-1">
                      <Label className="text-[10px] text-muted-foreground uppercase">Ingredient</Label>
                      <Input 
                        value={ing.name} 
                        placeholder="Name"
                        className="h-8 text-xs font-medium"
                        onChange={(e) => handleChange(ing.id, "name", e.target.value)} 
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[10px] text-blue-600 uppercase font-bold">Weight (kg)</Label>
                      <Input 
                        type="number" inputMode="decimal" placeholder="0"
                        className="h-8 text-xs text-right font-bold bg-blue-50/50 border-blue-200"
                        value={ing.amount} onChange={(e) => handleChange(ing.id, "amount", e.target.value)} 
                      />
                    </div>
                    <div className="space-y-1 relative">
                      <Label className="text-[10px] text-green-600 uppercase font-bold">Rate (₹/kg)</Label>
                      <Input 
                        type="number" inputMode="decimal" placeholder="0"
                        className="h-8 text-xs text-right pr-4 border-green-200 bg-green-50/30"
                        value={ing.price} onChange={(e) => handleChange(ing.id, "price", e.target.value)} 
                      />
                    </div>
                  </div>

                  {/* Row 2: Composition Inputs (Grid) */}
                  <div className="grid grid-cols-4 gap-2 bg-slate-50 p-2 rounded-md border border-slate-100">
                    <div className="space-y-1">
                       <Label className="text-[10px] text-gray-500">Fat %</Label>
                       <Input type="number" inputMode="decimal" className="h-7 text-xs text-right px-1" value={ing.fat} onChange={(e) => handleChange(ing.id, "fat", e.target.value)} />
                    </div>
                    <div className="space-y-1">
                       <Label className="text-[10px] text-gray-500">MSNF %</Label>
                       <Input type="number" inputMode="decimal" className="h-7 text-xs text-right px-1" value={ing.msnf} onChange={(e) => handleChange(ing.id, "msnf", e.target.value)} />
                    </div>
                    <div className="space-y-1">
                       <Label className="text-[10px] text-gray-500">Sugar %</Label>
                       <Input type="number" inputMode="decimal" className="h-7 text-xs text-right px-1" value={ing.sugar} onChange={(e) => handleChange(ing.id, "sugar", e.target.value)} />
                    </div>
                    <div className="space-y-1 flex flex-col items-end">
                       <Button variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:text-red-600 mt-auto" onClick={() => removeIngredient(ing.id)}>
                          <XCircle className="h-4 w-4" />
                       </Button>
                    </div>
                  </div>

                </div>
              </Card>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Select onValueChange={(val) => addIngredient(val)}>
              <SelectTrigger className="bg-white border-dashed border-2 border-purple-300 h-10 text-sm">
                <SelectValue placeholder="+ Add Ingredient" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(INGREDIENT_PRESETS).map((key) => (
                  <SelectItem key={key} value={key}>{key}</SelectItem>
                ))}
                <SelectItem value="Custom">Custom Ingredient</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={calculate} className="bg-purple-700 hover:bg-purple-800 text-white h-10 shadow-md">
               <Calculator className="mr-2 h-4 w-4" /> Calculate
            </Button>
          </div>

          {/* --- CLEAR TRANSPARENT RESULTS (UPDATED) --- */}
          {result && (
            <div className="space-y-4 pt-4 border-t">
              
              <div className="grid grid-cols-2 gap-3">
                 {/* Card 1: Batch Weight */}
                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex flex-col justify-between">
                    <div className="flex items-center gap-1 text-blue-700 mb-1">
                        <Weight className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Batch Weight</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-blue-900">{result.totalWeight.toFixed(2)}</span>
                        <span className="text-xs font-medium text-blue-600">kg</span>
                    </div>
                 </div>

                 {/* Card 2: Total Solids */}
                 <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 flex flex-col justify-between">
                    <div className="flex items-center gap-1 text-purple-700 mb-1">
                        <Target className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Total Solids</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-purple-900">{result.tsP.toFixed(2)}</span>
                        <span className="text-xs font-medium text-purple-600">%</span>
                    </div>
                    <span className="text-[9px] text-purple-400">Fat+MSNF+Sugar</span>
                 </div>

                 {/* Card 3: Cost Per Kg */}
                 <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex flex-col justify-between">
                    <div className="flex items-center gap-1 text-green-700 mb-1">
                        <DollarSign className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Cost Per Kg</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-green-700">₹</span>
                        <span className="text-xl font-bold text-green-900">{result.costPerKg.toFixed(2)}</span>
                    </div>
                    <span className="text-[9px] text-green-500">per 1 kg mix</span>
                 </div>

                 {/* Card 4: Total Batch Cost */}
                 <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex flex-col justify-between">
                    <div className="flex items-center gap-1 text-orange-700 mb-1">
                        <DollarSign className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Batch Cost</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-orange-700">₹</span>
                        <span className="text-xl font-bold text-orange-900">{result.totalCost.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                    <span className="text-[9px] text-orange-500">for full batch</span>
                 </div>
              </div>

              <Card className="shadow-sm">
                <CardHeader className="p-3 bg-slate-50 border-b">
                  <CardTitle className="text-sm flex justify-between items-center">
                    <span>Final Composition</span>
                    <span className="text-xs text-muted-foreground">Detailed Breakdown</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs font-bold h-8">Component</TableHead>
                        <TableHead className="text-right text-xs font-bold h-8">% (Per 100g)</TableHead>
                        <TableHead className="text-right text-xs font-bold h-8">Weight (kg)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { l: "Fat", v: result.fatP, c: "text-purple-700" },
                        { l: "MSNF", v: result.msnfP, c: "text-blue-700" },
                        { l: "Sugar", v: result.sugarP, c: "text-pink-600" },
                        { l: "Stab/Emul", v: result.stabP, c: "text-orange-600" }
                      ].map((row, i) => (
                        <TableRow key={i} className="h-8">
                          <TableCell className={`py-2 text-xs font-medium ${row.c}`}>{row.l}</TableCell>
                          <TableCell className="py-2 text-right text-sm font-bold">{row.v.toFixed(2)}%</TableCell>
                          <TableCell className="py-2 text-right text-xs text-muted-foreground">{((row.v/100)*result.totalWeight).toFixed(2)} kg</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        {/* --- TAB 2: MOBILE VERIFICATION --- */}
        <TabsContent value="verification" className="space-y-4">
           <Card className="border-2 border-dashed border-gray-300 bg-gray-50/50">
             <CardHeader className="p-4 bg-white border-b">
                <CardTitle className="text-base flex items-center gap-2">
                   <FileText className="w-4 h-4 text-blue-600"/> Calculation Breakdown
                </CardTitle>
             </CardHeader>
             <CardContent className="p-0">
                {verificationData.length > 0 ? (
                  <ScrollArea className="h-[400px] w-full p-4">
                    <div className="text-xs font-mono space-y-3">
                      {verificationData.map((step, idx) => (
                         <div key={idx} className={cn(
                            "leading-relaxed whitespace-pre-wrap",
                            step.includes("**") ? "font-bold text-gray-800" : "text-gray-600",
                            step.includes("FINAL") ? "text-purple-700 text-sm pt-2 border-t" : ""
                         )}>
                           {step.replace(/\*\*/g, '')}
                         </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                   <div className="text-center py-12 text-muted-foreground text-sm p-4">
                      <p>No calculation data yet.</p>
                      <p className="text-xs mt-1">Go to <strong>Calculator</strong> tab, add ingredients, and press <strong>Calculate</strong>.</p>
                   </div>
                )}
             </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ==================== ADVANCED BALANCER (Fully Responsive Fix) ====================
export const AdvancedBalancer = () => {
  // const { toast } = useToast(); // Uncomment if needed

  const [ingredients, setIngredients] = useState([
    { id: 1, name: "Milk (Full Cream)", amount: "620", ...INGREDIENT_PRESETS["Milk (Full Cream)"] },
    { id: 2, name: "Cream (40%)", amount: "180", ...INGREDIENT_PRESETS["Cream (40%)"] },
    { id: 3, name: "Sugar (Sucrose)", amount: "140", ...INGREDIENT_PRESETS["Sugar (Sucrose)"] },
    { id: 4, name: "SMP (Skim Powder)", amount: "40", ...INGREDIENT_PRESETS["SMP (Skim Powder)"] },
    { id: 5, name: "Dextrose", amount: "20", ...INGREDIENT_PRESETS["Dextrose"] },
  ]);
  const [stats, setStats] = useState<any>(null);

  // Auto-calculate whenever ingredients change
  useEffect(() => {
    const totalWeight = ingredients.reduce((sum, ing) => sum + (parseFloat(ing.amount as string) || 0), 0);
    if (totalWeight === 0) return;

    let totals = { fat: 0, snf: 0, sugar: 0, ts: 0, pod: 0, pac: 0 };
    
    ingredients.forEach(ing => {
      const amt = parseFloat(ing.amount as string) || 0;
      const iFat = parseFloat(ing.fat) || 0;
      const iSnf = parseFloat(ing.snf || ing.msnf) || 0;
      const iSugar = parseFloat(ing.sugar) || 0;
      const iSolids = parseFloat(ing.solids) || (iFat + iSnf + iSugar);
      const iPod = parseFloat(ing.pod) || 0;
      const iPac = parseFloat(ing.pac) || 0;

      totals.fat += (amt * iFat) / 100;
      totals.snf += (amt * iSnf) / 100;
      totals.sugar += (amt * iSugar) / 100;
      totals.ts += (amt * iSolids) / 100;
      totals.pod += amt * iPod;
      totals.pac += amt * iPac;
    });

    const lactosePac = totals.snf; 
    
    setStats({
      weight: totalWeight,
      fat: (totals.fat / totalWeight) * 100,
      snf: (totals.snf / totalWeight) * 100,
      ts: (totals.ts / totalWeight) * 100,
      pod: totals.pod / totalWeight,
      pac: (totals.pac + (lactosePac * 100)) / totalWeight 
    });
  }, [ingredients]);

  const updateIng = (id: number, field: string, val: string) => {
    setIngredients(prev => prev.map(ing => ing.id === id ? { ...ing, [field]: val } : ing));
  };

  const handlePresetChange = (id: number, presetName: string) => {
    if (presetName === "Custom") {
        updateIng(id, "name", "Custom Ingredient");
        return;
    }
    const preset = INGREDIENT_PRESETS[presetName];
    if (preset) {
        setIngredients(prev => prev.map(ing => ing.id === id ? { 
            ...ing, 
            name: presetName,
            fat: preset.fat,
            snf: preset.snf || preset.msnf,
            sugar: preset.sugar,
            pod: preset.pod,
            pac: preset.pac,
            solids: preset.solids
        } : ing));
    }
  };

  const addRow = () => {
     setIngredients([...ingredients, { 
         id: Date.now(), 
         name: "New Item", 
         amount: "0", 
         fat: "0", snf: "0", sugar: "0", pod: "0", pac: "0", solids: "0" 
     }]);
  };

  const removeRow = (id: number) => {
      if(ingredients.length > 1) {
          setIngredients(prev => prev.filter(i => i.id !== id));
      }
  };

  return (
    <div className="space-y-6 w-full max-w-full">
      <Alert className="bg-indigo-50 border-indigo-200">
        <Snowflake className="h-4 w-4 text-indigo-600" />
        <AlertTitle className="text-sm font-bold">Texture Balancer</AlertTitle>
        <AlertDescription className="text-xs">
          Balance POD (Sweetness) & PAC (Softness) for perfect texture.
        </AlertDescription>
      </Alert>

      {/* ================= MOBILE VIEW (CARDS) ================= */}
      <div className="md:hidden space-y-4">
        {ingredients.map(ing => (
            <Card key={ing.id} className="p-3 border-l-4 border-l-indigo-500 shadow-sm">
                {/* Row 1: Name & Weight */}
                <div className="grid grid-cols-[2fr_1fr] gap-2 mb-3">
                    <div className="space-y-1">
                        <Label className="text-[10px] text-muted-foreground uppercase font-bold">Ingredient</Label>
                        <Select onValueChange={(val) => handlePresetChange(ing.id, val)}>
                            <SelectTrigger className="h-9 text-xs w-full">
                                <SelectValue placeholder={ing.name} />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.keys(INGREDIENT_PRESETS).map(key => (
                                    <SelectItem key={key} value={key}>{key}</SelectItem>
                                ))}
                                <SelectItem value="Custom">Custom...</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1">
                        <Label className="text-[10px] text-blue-600 uppercase font-bold">Qty (g)</Label>
                        <Input 
                            className="h-9 font-bold bg-blue-50/50 border-blue-200 text-right" 
                            value={ing.amount} 
                            type="number" 
                            onChange={e=>updateIng(ing.id, 'amount', e.target.value)} 
                        />
                    </div>
                </div>

                {/* Row 2: Composition Grid */}
                <div className="grid grid-cols-5 gap-1 mb-2 bg-slate-50 p-2 rounded border border-slate-100">
                    <div className="space-y-1">
                        <Label className="text-[9px] text-center block text-muted-foreground">Fat%</Label>
                        <Input className="h-7 text-[10px] text-center px-0" value={ing.fat} onChange={e=>updateIng(ing.id,'fat',e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-[9px] text-center block text-muted-foreground">SNF%</Label>
                        <Input className="h-7 text-[10px] text-center px-0" value={ing.snf} onChange={e=>updateIng(ing.id,'snf',e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-[9px] text-center block text-muted-foreground">Sug%</Label>
                        <Input className="h-7 text-[10px] text-center px-0" value={ing.sugar} onChange={e=>updateIng(ing.id,'sugar',e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-[9px] text-center block text-indigo-600 font-bold">POD</Label>
                        <Input className="h-7 text-[10px] text-center px-0 bg-indigo-50 border-indigo-100 font-medium text-indigo-700" value={ing.pod} onChange={e=>updateIng(ing.id,'pod',e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-[9px] text-center block text-blue-600 font-bold">PAC</Label>
                        <Input className="h-7 text-[10px] text-center px-0 bg-blue-50 border-blue-100 font-medium text-blue-700" value={ing.pac} onChange={e=>updateIng(ing.id,'pac',e.target.value)} />
                    </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full h-8 text-red-500 hover:bg-red-50 hover:text-red-700 text-xs" onClick={() => removeRow(ing.id)}>
                    <XCircle className="w-3 h-3 mr-1"/> Remove Ingredient
                </Button>
            </Card>
        ))}
      </div>

      {/* ================= DESKTOP VIEW (TABLE) ================= */}
      <div className="hidden md:block rounded-lg border bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[200px] pl-4">Ingredient</TableHead>
              <TableHead className="w-[100px]">Qty (g)</TableHead>
              <TableHead className="w-[70px] text-xs">Fat %</TableHead>
              <TableHead className="w-[70px] text-xs">SNF %</TableHead>
              <TableHead className="w-[70px] text-xs">Sugar %</TableHead>
              <TableHead className="w-[60px] text-xs text-indigo-600 font-bold bg-indigo-50/50">POD</TableHead>
              <TableHead className="w-[60px] text-xs text-blue-600 font-bold bg-blue-50/50">PAC</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ingredients.map(ing => (
              <TableRow key={ing.id}>
                <TableCell className="p-2 pl-4">
                    <Select onValueChange={(val) => handlePresetChange(ing.id, val)}>
                        <SelectTrigger className="h-9 text-xs w-full min-w-[140px]">
                            <SelectValue placeholder={ing.name} />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(INGREDIENT_PRESETS).map(key => (
                                <SelectItem key={key} value={key}>{key}</SelectItem>
                            ))}
                            <SelectItem value="Custom">Custom...</SelectItem>
                        </SelectContent>
                    </Select>
                </TableCell>
                <TableCell className="p-2">
                  <Input 
                    className="h-9 font-bold bg-slate-50 border-slate-200 w-full" 
                    value={ing.amount} 
                    type="number" 
                    onChange={e=>updateIng(ing.id, 'amount', e.target.value)} 
                  />
                </TableCell>
                <TableCell className="p-2"><Input className="h-8 text-xs text-center" value={ing.fat} onChange={e=>updateIng(ing.id,'fat',e.target.value)} /></TableCell>
                <TableCell className="p-2"><Input className="h-8 text-xs text-center" value={ing.snf} onChange={e=>updateIng(ing.id,'snf',e.target.value)} /></TableCell>
                <TableCell className="p-2"><Input className="h-8 text-xs text-center" value={ing.sugar} onChange={e=>updateIng(ing.id,'sugar',e.target.value)} /></TableCell>
                <TableCell className="p-2"><Input className="h-8 text-xs text-center font-semibold text-indigo-700 bg-indigo-50 border-indigo-100" value={ing.pod} onChange={e=>updateIng(ing.id,'pod',e.target.value)} /></TableCell>
                <TableCell className="p-2"><Input className="h-8 text-xs text-center font-semibold text-blue-700 bg-blue-50 border-blue-100" value={ing.pac} onChange={e=>updateIng(ing.id,'pac',e.target.value)} /></TableCell>
                <TableCell className="p-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50" onClick={() => removeRow(ing.id)}>
                        <XCircle className="w-4 h-4"/>
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>

      <div className="p-2">
        <Button variant="outline" size="sm" className="w-full h-10 border-dashed border-indigo-300 text-indigo-700 hover:bg-indigo-50" onClick={addRow}>
            <PlusCircle className="w-4 h-4 mr-2"/> Add Ingredient
        </Button>
      </div>

      {stats && (
        <div className="space-y-4 animate-in fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <Card className="bg-slate-800 text-white border-none shadow-lg">
                <CardHeader className="pb-1 pt-4 px-4"><CardTitle className="text-xs uppercase opacity-70 flex items-center gap-2"><Target className="w-3 h-3"/> Total Solids</CardTitle></CardHeader>
                <CardContent className="px-4 pb-4">
                   <div className="text-3xl font-bold">{stats.ts.toFixed(2)}%</div>
                   <div className="flex justify-between items-center text-[10px] opacity-70 mt-1">
                       <span>Target: 36-40%</span>
                       {stats.ts < 36 && <span className="text-red-300 font-bold">Too Low</span>}
                       {stats.ts > 42 && <span className="text-red-300 font-bold">Too High</span>}
                   </div>
                </CardContent>
             </Card>

             <Card className="bg-white border-slate-200 shadow-md">
                <CardHeader className="pb-1 pt-4 px-4"><CardTitle className="text-xs uppercase text-slate-500 flex items-center gap-2"><Scale className="w-3 h-3"/> Total Batch</CardTitle></CardHeader>
                <CardContent className="px-4 pb-4">
                   <div className="text-3xl font-bold text-slate-900">{stats.weight.toLocaleString()}</div>
                   <div className="text-[10px] text-slate-500 mt-1">Units (g/kg based on input)</div>
                </CardContent>
             </Card>

             <Card className="bg-blue-600 text-white border-none shadow-lg">
                <CardHeader className="pb-1 pt-4 px-4"><CardTitle className="text-xs uppercase opacity-70 flex items-center gap-2"><Snowflake className="w-3 h-3"/> Fat Content</CardTitle></CardHeader>
                <CardContent className="px-4 pb-4">
                   <div className="text-3xl font-bold">{stats.fat.toFixed(2)}%</div>
                   <div className="text-[10px] opacity-70 mt-1">Standard: 8-14%</div>
                </CardContent>
             </Card>
          </div>

          <Card className="border-indigo-100 bg-indigo-50/50">
             <CardHeader className="py-3 px-4 border-b border-indigo-100">
                 <CardTitle className="text-sm flex items-center gap-2 text-indigo-900 font-bold">
                     <Snowflake className="w-4 h-4"/> Texture Analysis
                 </CardTitle>
             </CardHeader>
             <CardContent className="py-4 px-4 space-y-5">
               <div>
                 <div className="flex justify-between text-sm font-medium mb-1">
                     <span className="text-slate-600">Relative Sweetness (POD)</span>
                     <span className="text-indigo-700 font-bold">{stats.pod.toFixed(1)}</span>
                 </div>
                 <Progress value={(stats.pod/25)*100} className="h-2.5 bg-indigo-200"/>
                 <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-medium">
                    <span>Bland (10)</span> 
                    <span className="text-indigo-600">Target: 14-18</span> 
                    <span>Too Sweet (22+)</span>
                 </div>
               </div>

               <div>
                 <div className="flex justify-between text-sm font-medium mb-1">
                     <span className="text-slate-600">Softness / Anti-Freeze (PAC)</span>
                     <span className="text-blue-700 font-bold">{stats.pac.toFixed(1)}</span>
                 </div>
                 <Progress value={(stats.pac/50)*100} className="h-2.5 bg-blue-200"/>
                 <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-medium">
                    <span>Hard (12)</span> 
                    <span className="text-blue-600">Scoopable (21-25)</span> 
                    <span>Soft/Melty (32+)</span>
                 </div>
                 <p className="text-[10px] text-slate-500 mt-2 italic bg-white p-2 rounded border border-slate-100">
                    *Higher PAC value means softer Ice Cream at same temperature. <br/>
                    <strong>Gelato:</strong> Aim for 22-26 | <strong>Hard Scoop:</strong> Aim for 14-18
                 </p>
               </div>
             </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
// ==================== BATCH SCALING & VERIFICATION CALCULATOR (UPGRADED v3) ====================

const IC_INGREDIENT_DB = {
  "Milk (Full Fat 6%)":         { fat: 6.0,  snf: 9.0,  sugar: 0,    ts: 15.0 },
  "Milk (Toned 3%)":            { fat: 3.0,  snf: 8.5,  sugar: 0,    ts: 11.5 },
  "Milk (Buffalo 7%)":          { fat: 7.0,  snf: 9.2,  sugar: 0,    ts: 16.2 },
  "Water":                      { fat: 0,    snf: 0,    sugar: 0,    ts: 0    },
  "Cream (40% fat)":            { fat: 40.0, snf: 5.4,  sugar: 0,    ts: 45.4 },
  "Cream (35% fat)":            { fat: 35.0, snf: 5.6,  sugar: 0,    ts: 40.6 },
  "Cream (25% fat)":            { fat: 25.0, snf: 6.5,  sugar: 0,    ts: 31.5 },
  "Veg Fat / Oil":              { fat: 99.5, snf: 0,    sugar: 0,    ts: 99.5 },
  "Coconut Oil":                { fat: 99.9, snf: 0,    sugar: 0,    ts: 99.9 },
  "Butter":                     { fat: 80.0, snf: 2.0,  sugar: 0,    ts: 82.0 },
  "SMP (Skim Milk Powder)":     { fat: 0.5,  snf: 97.0, sugar: 0,    ts: 97.5 },
  "WMP (Whole Milk Powder)":    { fat: 26.0, snf: 68.0, sugar: 0,    ts: 94.0 },
  "Condensed Milk (Sweet)":     { fat: 8.5,  snf: 20.5, sugar: 44.5, ts: 73.5 },
  "Sucrose":                    { fat: 0,    snf: 0,    sugar: 100,  ts: 100  },
  "Dextrose (DE 100)":          { fat: 0,    snf: 0,    sugar: 91.0, ts: 91.0 },
  "Maltodextrin (DE 18)":       { fat: 0,    snf: 0,    sugar: 10.0, ts: 95.0 },
  "Invert Sugar (syrup)":       { fat: 0,    snf: 0,    sugar: 70.0, ts: 75.0 },
  "Honey":                      { fat: 0.3,  snf: 0,    sugar: 80.0, ts: 82.0 },
  "Karo Light Corn Syrup":      { fat: 0,    snf: 0,    sugar: 75.0, ts: 80.0 },
  "Egg Yolks (fresh)":          { fat: 31.9, snf: 0,    sugar: 0,    ts: 51.0 },
  "Egg Whites (fresh)":         { fat: 0.2,  snf: 0,    sugar: 0,    ts: 12.0 },
  "Fruit 1 (Custom)":           { fat: 0,    snf: 0,    sugar: 12.0, ts: 14.0 },
  "Fruit 2 (Custom)":           { fat: 0,    snf: 0,    sugar: 12.0, ts: 14.0 },
  "Mango Pulp":                 { fat: 0.4,  snf: 0,    sugar: 14.0, ts: 17.0 },
  "Strawberry Puree":           { fat: 0.3,  snf: 0,    sugar: 7.0,  ts: 9.0  },
  "Cocoa Powder (10-12% fat)":  { fat: 11.0, snf: 0,    sugar: 0,    ts: 97.0 },
  "Dark Chocolate (70%)":       { fat: 42.0, snf: 0,    sugar: 28.0, ts: 97.0 },
  "Stabilizer Blend":           { fat: 0,    snf: 0,    sugar: 0,    ts: 95.0 },
  "Emulsifier (GMS)":           { fat: 0,    snf: 0,    sugar: 0,    ts: 98.0 },
  "Other (Custom)":             { fat: 0,    snf: 0,    sugar: 0,    ts: 0    },
};

const IC_CATEGORIES = {
  "🥛 Dairy Base":    ["Milk (Full Fat 6%)", "Milk (Toned 3%)", "Milk (Buffalo 7%)", "Water"],
  "🧴 Cream & Fat":  ["Cream (40% fat)", "Cream (35% fat)", "Cream (25% fat)", "Veg Fat / Oil", "Coconut Oil", "Butter"],
  "🥛 Milk Solids":  ["SMP (Skim Milk Powder)", "WMP (Whole Milk Powder)", "Condensed Milk (Sweet)"],
  "🍬 Sweeteners":   ["Sucrose", "Dextrose (DE 100)", "Maltodextrin (DE 18)", "Invert Sugar (syrup)", "Honey", "Karo Light Corn Syrup"],
  "🥚 Eggs":         ["Egg Yolks (fresh)", "Egg Whites (fresh)"],
  "🍓 Fruits":       ["Fruit 1 (Custom)", "Fruit 2 (Custom)", "Mango Pulp", "Strawberry Puree"],
  "🍫 Flavor":       ["Cocoa Powder (10-12% fat)", "Dark Chocolate (70%)"],
  "⚗️ Stabilizers": ["Stabilizer Blend", "Emulsifier (GMS)"],
  "✏️ Custom":       ["Other (Custom)"],
};

// Optional target ingredients that user can add on demand
const OPTIONAL_TARGET_OPTIONS = [
  { key: "dextrose",     label: "Dextrose" },
  { key: "maltodextrin", label: "Maltodextrin" },
  { key: "invertSugar",  label: "Invert Sugar" },
  { key: "honey",        label: "Honey" },
  { key: "cornSyrup",    label: "Karo Corn Syrup" },
  { key: "cocoa",        label: "Cocoa Powder" },
  { key: "chocolate",    label: "Dark Chocolate" },
  { key: "eggYolk",      label: "Egg Yolks" },
  { key: "eggWhite",     label: "Egg Whites" },
  { key: "mango",        label: "Mango Pulp" },
  { key: "strawberry",   label: "Strawberry Puree" },
  { key: "fruit1",       label: "Fruit 1 (Custom)" },
  { key: "fruit2",       label: "Fruit 2 (Custom)" },
  { key: "condensed",    label: "Condensed Milk" },
  { key: "emulsifier",   label: "Emulsifier (GMS)" },
];

// Map optional key → DB ingredient name for fat/snf lookup
const OPTIONAL_KEY_TO_DB = {
  dextrose:     "Dextrose (DE 100)",
  maltodextrin: "Maltodextrin (DE 18)",
  invertSugar:  "Invert Sugar (syrup)",
  honey:        "Honey",
  cornSyrup:    "Karo Light Corn Syrup",
  cocoa:        "Cocoa Powder (10-12% fat)",
  chocolate:    "Dark Chocolate (70%)",
  eggYolk:      "Egg Yolks (fresh)",
  eggWhite:     "Egg Whites (fresh)",
  mango:        "Mango Pulp",
  strawberry:   "Strawberry Puree",
  fruit1:       "Fruit 1 (Custom)",
  fruit2:       "Fruit 2 (Custom)",
  condensed:    "Condensed Milk (Sweet)",
  emulsifier:   "Emulsifier (GMS)",
};

// Source ingredient dropdown options (for extra source rows)
const EXTRA_SOURCE_OPTIONS = [
  "Condensed Milk (Sweet)", "WMP (Whole Milk Powder)", "Butter",
  "Coconut Oil", "Egg Yolks (fresh)", "Egg Whites (fresh)",
  "Mango Pulp", "Strawberry Puree", "Fruit 1 (Custom)", "Fruit 2 (Custom)",
  "Cocoa Powder (10-12% fat)", "Dark Chocolate (70%)",
  "Stabilizer Blend", "Emulsifier (GMS)", "Other (Custom)",
];

// ─────────────────────────────────────────────────────────────────────────────

function BatchScalingCalc() {
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState("solver");
  const [productType, setProductType] = useState("ice-cream");
  const [batchSize, setBatchSize] = useState("100");

  // Core target (always visible)
  const [coreTarget, setCoreTarget] = useState({
    fat:        "10",
    snf:        "11",
    sugar:      "14.5",
    stabilizer: "0.3",
  });

  // Optional target ingredients added by user: [{ key, label, value }]
  const [optionalTargets, setOptionalTargets] = useState<any[]>([]);

  // Raw materials — 3 solver variables
  const [rawMaterials, setRawMaterials] = useState<any>({
    base:      { name: "Milk (Full Fat 6%)",     fat: "6.0",  snf: "9.0" },
    fatSource: { name: "Cream (40% fat)",        fat: "40",   snf: "5.4" },
    smp:       { name: "SMP (Skim Milk Powder)", fat: "0.5",  snf: "97"  },
  });

  // Extra source ingredients added by user: [{ id, name, fat, snf, amount }]
  const [extraSources, setExtraSources] = useState<any[]>([]);

  const [solverResult, setSolverResult]           = useState<any>(null);
  const [verificationSteps, setVerificationSteps] = useState<any[]>([]);

  // Manual tab rows
  const [manualRows, setManualRows] = useState<any[]>([
    { id: 1, name: "Milk (Full Fat 6%)", amount: "55" },
  ]);

  // ── Optional target dropdown state ──
  const [showOptionalDropdown, setShowOptionalDropdown] = useState(false);
  const [showExtraSourceDropdown, setShowExtraSourceDropdown] = useState(false);

  // ── Helpers ───────────────────────────────────────────────────────────────

  const setRM = (key: string, field: string, value: string) =>
    setRawMaterials((prev: any) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));

  const handleRMSelect = (key: string, selectedName: string) => {
    const db: any = IC_INGREDIENT_DB[selectedName as keyof typeof IC_INGREDIENT_DB] || {};
    setRawMaterials((prev: any) => ({
      ...prev,
      [key]: { name: selectedName, fat: String(db.fat ?? prev[key].fat), snf: String(db.snf ?? prev[key].snf) },
    }));
  };

  const handleProductTypeChange = (type: string) => {
    setProductType(type);
    setSolverResult(null);
    setExtraSources([]);
    if (type === "ice-cream") {
      setRawMaterials({
        base:      { name: "Milk (Full Fat 6%)",     fat: "6.0",  snf: "9.0" },
        fatSource: { name: "Cream (40% fat)",        fat: "40",   snf: "5.4" },
        smp:       { name: "SMP (Skim Milk Powder)", fat: "0.5",  snf: "97"  },
      });
    } else {
      setRawMaterials({
        base:      { name: "Water",                  fat: "0",    snf: "0"   },
        fatSource: { name: "Veg Fat / Oil",          fat: "99.5", snf: "0"   },
        smp:       { name: "SMP (Skim Milk Powder)", fat: "0.5",  snf: "97"  },
      });
    }
  };

  // Add optional target ingredient
  const addOptionalTarget = (option: any) => {
    if (optionalTargets.find(o => o.key === option.key)) return; // already added
    setOptionalTargets(prev => [...prev, { ...option, value: "0" }]);
    setShowOptionalDropdown(false);
  };

  const removeOptionalTarget = (key: string) =>
    setOptionalTargets(prev => prev.filter(o => o.key !== key));

  const updateOptionalTarget = (key: string, value: string) =>
    setOptionalTargets(prev => prev.map(o => o.key === key ? { ...o, value } : o));

  // Add extra source ingredient
  const addExtraSource = (name: string) => {
    const db: any = IC_INGREDIENT_DB[name as keyof typeof IC_INGREDIENT_DB] || {};
    setExtraSources(prev => [
      ...prev,
      { id: Date.now(), name, fat: String(db.fat ?? 0), snf: String(db.snf ?? 0) },
    ]);
    setShowExtraSourceDropdown(false);
  };

  const removeExtraSource = (id: number) =>
    setExtraSources(prev => prev.filter(s => s.id !== id));

  const updateExtraSource = (id: number, field: string, value: string) =>
    setExtraSources(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));

  const handleExtraSourceSelect = (id: number, name: string) => {
    const db: any = IC_INGREDIENT_DB[name as keyof typeof IC_INGREDIENT_DB] || {};
    setExtraSources(prev => prev.map(s =>
      s.id === id ? { ...s, name, fat: String(db.fat ?? 0), snf: String(db.snf ?? 0) } : s
    ));
  };

  // ── Categorized ingredient select ─────────────────────────────────────────
  const IngredientSelect = ({ value, onChange, className = "" }: { value: string; onChange: (v: string) => void; className?: string }) => (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className={`w-full border rounded-md px-2 py-1 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
    >
      {Object.entries(IC_CATEGORIES).map(([cat, items]) => (
        <optgroup key={cat} label={cat}>
          {items.map(item => <option key={item} value={item}>{item}</option>)}
        </optgroup>
      ))}
    </select>
  );

  // ── SOLVER LOGIC ──────────────────────────────────────────────────────────
  const solveIceCreamMix = useCallback(() => {
    const size = parseFloat(batchSize);
    if (!size || size <= 0) {
      toast({ variant: "destructive", title: "Error", description: "Invalid batch size." });
      return;
    }

    const T_Fat   = parseFloat(coreTarget.fat)        || 0;
    const T_Snf   = parseFloat(coreTarget.snf)        || 0;
    const T_Sugar = parseFloat(coreTarget.sugar)      || 0;
    const T_Stab  = parseFloat(coreTarget.stabilizer) || 0;

    const M_f = (parseFloat(rawMaterials.base.fat)      || 0) / 100;
    const M_s = (parseFloat(rawMaterials.base.snf)      || 0) / 100;
    const C_f = (parseFloat(rawMaterials.fatSource.fat) || 0) / 100;
    const C_s = (parseFloat(rawMaterials.fatSource.snf) || 0) / 100;
    const S_f = (parseFloat(rawMaterials.smp.fat)       || 0) / 100;
    const S_s = (parseFloat(rawMaterials.smp.snf)       || 0) / 100;

    // Build fixed ingredient list from core (sugar, stabilizer) + optional targets
    const fixedList = [
      { name: "Sucrose / Sugar", qty: (T_Sugar / 100) * size, dbKey: "Sucrose" },
      { name: "Stabilizer",      qty: (T_Stab  / 100) * size, dbKey: "Stabilizer Blend" },
      ...optionalTargets.map(o => ({
        name:  o.label,
        qty:   ((parseFloat(o.value) || 0) / 100) * size,
        dbKey: OPTIONAL_KEY_TO_DB[o.key] || "Other (Custom)",
      })),
    ].filter(i => i.qty > 0);

    // Extra source ingredients (user-added, treated as known quantities — BUT we don't
    // have their kg amounts in the solver tab; we include them by percentage if provided.
    // For now extra sources are informational only — solver solves the 3-var system after
    // accounting for fixed target ingredients.)

    let fixedTotal = 0, fixedFat = 0, fixedSnf = 0;
    fixedList.forEach(({ qty, dbKey }) => {
      const db = IC_INGREDIENT_DB[dbKey] || {};
      fixedTotal += qty;
      fixedFat   += qty * ((db.fat ?? 0) / 100);
      fixedSnf   += qty * ((db.snf ?? 0) / 100);
    });

    const totalDairyMass = size         - fixedTotal;
    const totalFatNeeded = (T_Fat / 100) * size - fixedFat;
    const totalSnfNeeded = (T_Snf / 100) * size - fixedSnf;

    if (totalDairyMass <= 0) {
      toast({ variant: "destructive", title: "Error", description: "Fixed ingredients exceed batch size. Reduce percentages." });
      return;
    }

    // Cramer's Rule
    const a1=1, b1=1, c1=1, d1=totalDairyMass;
    const a2=M_f, b2=C_f, c2=S_f, d2=totalFatNeeded;
    const a3=M_s, b3=C_s, c3=S_s, d3=totalSnfNeeded;

    const D = a1*(b2*c3-c2*b3) - b1*(a2*c3-c2*a3) + c1*(a2*b3-b2*a3);
    if (Math.abs(D) < 1e-8) {
      toast({ variant: "destructive", title: "Math Error", description: "Impossible ingredient combination." });
      return;
    }

    const baseQty      = (d1*(b2*c3-c2*b3) - b1*(d2*c3-c2*d3) + c1*(d2*b3-b2*d3)) / D;
    const fatSourceQty = (a1*(d2*c3-c2*d3) - d1*(a2*c3-c2*a3) + c1*(a2*d3-d2*a3)) / D;
    const smpQty       = (a1*(b2*d3-d2*b3) - b1*(a2*d3-d2*a3) + d1*(a2*b3-b2*a3)) / D;

    // Verification steps
    const steps = [];
    steps.push(`🎯 **Target Batch:** ${size} kg (${productType === "ice-cream" ? "Ice Cream" : "Frozen Dessert"})`);
    fixedList.forEach(({ name, qty }) => steps.push(`🔹 **${name}:** ${qty.toFixed(2)} kg`));
    steps.push(`🔹 **Fixed Total:** ${fixedTotal.toFixed(2)} kg`);
    steps.push(`🔹 **Dairy / Base Mix Required:** ${totalDairyMass.toFixed(2)} kg`);
    steps.push(`---`);

    const neg = baseQty < -0.01 || fatSourceQty < -0.01 || smpQty < -0.01;
    if (neg) {
      steps.push(`⚠️ **WARNING:** Negative values — inputs are mathematically impossible.`);
    } else {
      steps.push(`✅ **Solution Found:**`);
      steps.push(`${rawMaterials.base.name}: ${Math.max(0, baseQty).toFixed(2)} kg`);
      steps.push(`${rawMaterials.fatSource.name}: ${Math.max(0, fatSourceQty).toFixed(2)} kg`);
      steps.push(`${rawMaterials.smp.name}: ${Math.max(0, smpQty).toFixed(2)} kg`);
      extraSources.forEach(s => steps.push(`ℹ️ ${s.name}: user-defined (add % or kg manually)`));
    }

    setVerificationSteps(steps);
    setSolverResult([
      { name: rawMaterials.base.name,      amount: Math.max(0, baseQty),      percent: (Math.max(0, baseQty)      / size) * 100 },
      { name: rawMaterials.fatSource.name, amount: Math.max(0, fatSourceQty), percent: (Math.max(0, fatSourceQty) / size) * 100 },
      { name: rawMaterials.smp.name,       amount: Math.max(0, smpQty),       percent: (Math.max(0, smpQty)       / size) * 100 },
      ...fixedList.map(({ name, qty }) => ({ name, amount: qty, percent: (qty / size) * 100 })),
    ]);

    toast({ title: "Calculated!", description: "Result updated below." });
  }, [batchSize, coreTarget, optionalTargets, rawMaterials, extraSources, productType, toast]);

  // ── Manual tab ────────────────────────────────────────────────────────────
  const handleManualChange   = (id, field, value) => setManualRows(p => p.map(r => r.id === id ? { ...r, [field]: value } : r));
  const handleManualSelect   = (id, name)         => setManualRows(p => p.map(r => r.id === id ? { ...r, name } : r));
  const addManualRow         = ()                  => setManualRows(p => [...p, { id: Date.now(), name: "Milk (Full Fat 6%)", amount: "" }]);
  const removeManualRow      = (id)                => { if (manualRows.length > 1) setManualRows(p => p.filter(r => r.id !== id)); };

  // Already-added optional keys (to hide from dropdown)
  const addedKeys = optionalTargets.map(o => o.key);
  const availableOptions = OPTIONAL_TARGET_OPTIONS.filter(o => !addedKeys.includes(o.key));

  // Already-added extra source names
  const addedSourceNames = extraSources.map(s => s.name);
  const availableExtraSources = EXTRA_SOURCE_OPTIONS.filter(n => !addedSourceNames.includes(n));

  // Total fixed %
  const fixedPct = [
    parseFloat(coreTarget.fat) || 0,
    parseFloat(coreTarget.snf) || 0,
    parseFloat(coreTarget.sugar) || 0,
    parseFloat(coreTarget.stabilizer) || 0,
    ...optionalTargets.map(o => parseFloat(o.value) || 0),
  ].reduce((a, b) => a + b, 0);

  const rmKeys = [
    { key: "base",      label: "Base" },
    { key: "fatSource", label: "Fat Src" },
    { key: "smp",       label: "Solids" },
  ];

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-full space-y-4 p-1 sm:p-2 overflow-x-hidden">
      <Alert className="bg-indigo-50 border-indigo-200">
        <Beaker className="h-4 w-4 text-indigo-600" />
        <AlertTitle className="text-sm font-bold">Smart Batch Solver</AlertTitle>
        <AlertDescription className="text-xs">
          Calculate recipes for Ice Cream or Frozen Dessert. Add extra ingredients as needed.
        </AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50">
          <TabsTrigger value="solver"         className="text-xs sm:text-sm py-2">Solver</TabsTrigger>
          <TabsTrigger value="verification"   className="text-xs sm:text-sm py-2">Verify</TabsTrigger>
          <TabsTrigger value="simple-scaling" className="text-xs sm:text-sm py-2">Manual</TabsTrigger>
        </TabsList>

        {/* ═══════════════════════════════════════
            TAB 1 — SOLVER
        ═══════════════════════════════════════ */}
        <TabsContent value="solver" className="space-y-4 animate-in fade-in-50">

          {/* Product Type Toggle */}
          <div className="flex justify-center">
            <div className="bg-slate-100 p-1 rounded-lg flex gap-1">
              <Button size="sm"
                variant={productType === "ice-cream" ? "default" : "ghost"}
                className={productType === "ice-cream" ? "bg-indigo-600 text-white" : "text-slate-600"}
                onClick={() => handleProductTypeChange("ice-cream")}
              >
                <IceCream2 className="w-4 h-4 mr-2" /> Ice Cream
              </Button>
              <Button size="sm"
                variant={productType === "frozen-dessert" ? "default" : "ghost"}
                className={productType === "frozen-dessert" ? "bg-indigo-600 text-white" : "text-slate-600"}
                onClick={() => handleProductTypeChange("frozen-dessert")}
              >
                <Snowflake className="w-4 h-4 mr-2" /> Frozen Dessert
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* ─── Target Composition Card ─── */}
            <Card className="border-indigo-100 shadow-sm">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <CardTitle className="text-sm font-medium flex items-center gap-2 text-indigo-700">
                  <Settings2 className="w-4 h-4" /> Target Composition (%)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 space-y-3">

                {/* Core fields — always visible */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "fat",        label: "Fat"       },
                    { key: "snf",        label: "SNF"       },
                    { key: "sugar",      label: "Sugar"     },
                    { key: "stabilizer", label: "Stabilizer"},
                  ].map(f => (
                    <div key={f.key}>
                      <Label className="text-xs text-muted-foreground">{f.label}</Label>
                      <Input
                        type="number" inputMode="decimal" className="h-9 text-sm"
                        value={coreTarget[f.key]}
                        onChange={e => setCoreTarget(prev => ({ ...prev, [f.key]: e.target.value }))}
                      />
                    </div>
                  ))}
                </div>

                {/* Optional added ingredients */}
                {optionalTargets.length > 0 && (
                  <div className="space-y-2 pt-1 border-t border-dashed border-indigo-100">
                    {optionalTargets.map(o => (
                      <div key={o.key} className="flex items-center gap-2">
                        <Label className="text-xs text-muted-foreground w-28 shrink-0">{o.label}</Label>
                        <Input
                          type="number" inputMode="decimal"
                          className="h-8 text-sm flex-1"
                          placeholder="0"
                          value={o.value}
                          onChange={e => updateOptionalTarget(o.key, e.target.value)}
                        />
                        <button
                          onClick={() => removeOptionalTarget(o.key)}
                          className="text-red-400 hover:text-red-600 shrink-0"
                          title="Remove"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* + Add Ingredient dropdown for target */}
                <div className="relative">
                  <button
                    onClick={() => setShowOptionalDropdown(p => !p)}
                    className="w-full flex items-center justify-center gap-1 text-xs text-indigo-600 font-semibold border border-dashed border-indigo-300 rounded-md py-1.5 hover:bg-indigo-50 transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add Ingredient
                  </button>

                  {showOptionalDropdown && (
                    <div className="absolute z-30 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden">
                      {availableOptions.length === 0 ? (
                        <div className="text-xs text-muted-foreground p-3 text-center">All ingredients added</div>
                      ) : (
                        <div className="max-h-52 overflow-y-auto divide-y divide-slate-50">
                          {availableOptions.map(opt => (
                            <button
                              key={opt.key}
                              onClick={() => addOptionalTarget(opt)}
                              className="w-full text-left px-3 py-2 text-xs hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                      <button
                        onClick={() => setShowOptionalDropdown(false)}
                        className="w-full text-xs text-muted-foreground py-1.5 bg-slate-50 hover:bg-slate-100 border-t"
                      >
                        Close ✕
                      </button>
                    </div>
                  )}
                </div>

                {/* Live % total */}
                <div className={`text-xs font-semibold px-2 py-1 rounded ${fixedPct > 100 ? "bg-red-50 text-red-600" : "bg-slate-50 text-slate-500"}`}>
                  Fixed % Total: {fixedPct.toFixed(1)}% {fixedPct > 100 && "⚠️ Exceeds 100%"}
                </div>
              </CardContent>
            </Card>

            {/* ─── Source Specs Card ─── */}
            <Card className="border-indigo-100 shadow-sm">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <CardTitle className="text-sm font-medium flex items-center gap-2 text-indigo-700">
                  <Beaker className="w-4 h-4" />
                  {productType === "ice-cream" ? "Dairy Inputs (%)" : "FD Ingredients (%)"}
                </CardTitle>
                <CardDescription className="text-xs">Dropdown se select karen — Fat% & SNF% auto-fill honge.</CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 space-y-4">

                {/* 3 solver variables */}
                {rmKeys.map(({ key, label }) => (
                  <div key={key} className="space-y-1">
                    <Label className="text-[10px] uppercase font-bold text-slate-500">{label}</Label>
                    <IngredientSelect
                      value={rawMaterials[key].name}
                      onChange={name => handleRMSelect(key, name)}
                      className="mb-1"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[9px] text-muted-foreground">Fat %</Label>
                        <Input
                          className="h-8 text-xs bg-slate-50" type="number" inputMode="decimal"
                          value={rawMaterials[key].fat}
                          onChange={e => setRM(key, "fat", e.target.value)}
                          readOnly={key === "base" && productType === "frozen-dessert"}
                        />
                      </div>
                      <div>
                        <Label className="text-[9px] text-muted-foreground">SNF %</Label>
                        <Input
                          className="h-8 text-xs bg-slate-50" type="number" inputMode="decimal"
                          value={rawMaterials[key].snf}
                          onChange={e => setRM(key, "snf", e.target.value)}
                          readOnly={key === "base" && productType === "frozen-dessert"}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Extra source ingredients added by user */}
                {extraSources.length > 0 && (
                  <div className="space-y-3 pt-1 border-t border-dashed border-indigo-100">
                    {extraSources.map(src => (
                      <div key={src.id} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Label className="text-[10px] uppercase font-bold text-slate-500">Extra</Label>
                          <button onClick={() => removeExtraSource(src.id)} className="text-red-400 hover:text-red-600">
                            <XCircle className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <IngredientSelect
                          value={src.name}
                          onChange={name => handleExtraSourceSelect(src.id, name)}
                          className="mb-1"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label className="text-[9px] text-muted-foreground">Fat %</Label>
                            <Input className="h-8 text-xs" type="number" inputMode="decimal"
                              value={src.fat} onChange={e => updateExtraSource(src.id, "fat", e.target.value)} />
                          </div>
                          <div>
                            <Label className="text-[9px] text-muted-foreground">SNF %</Label>
                            <Input className="h-8 text-xs" type="number" inputMode="decimal"
                              value={src.snf} onChange={e => updateExtraSource(src.id, "snf", e.target.value)} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* + Add Ingredient dropdown for sources */}
                <div className="relative">
                  <button
                    onClick={() => setShowExtraSourceDropdown(p => !p)}
                    className="w-full flex items-center justify-center gap-1 text-xs text-indigo-600 font-semibold border border-dashed border-indigo-300 rounded-md py-1.5 hover:bg-indigo-50 transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add Ingredient
                  </button>

                  {showExtraSourceDropdown && (
                    <div className="absolute z-30 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden">
                      <div className="max-h-52 overflow-y-auto divide-y divide-slate-50">
                        {availableExtraSources.map(name => (
                          <button
                            key={name}
                            onClick={() => addExtraSource(name)}
                            className="w-full text-left px-3 py-2 text-xs hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowExtraSourceDropdown(false)}
                        className="w-full text-xs text-muted-foreground py-1.5 bg-slate-50 hover:bg-slate-100 border-t"
                      >
                        Close ✕
                      </button>
                    </div>
                  )}
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Action Bar */}
          <div className="bg-white p-3 rounded-lg border shadow-sm flex flex-col sm:flex-row items-end sm:items-center gap-3">
            <div className="w-full sm:w-1/2">
              <Label className="text-xs font-bold uppercase text-muted-foreground">Total Batch Size (kg)</Label>
              <Input
                type="number" inputMode="decimal"
                className="bg-indigo-50/50 text-lg font-bold mt-1 h-10 border-indigo-200"
                value={batchSize}
                onChange={e => setBatchSize(e.target.value)}
              />
            </div>
            <Button
              onClick={solveIceCreamMix}
              className="w-full sm:w-auto h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md active:scale-95 transition-transform"
            >
              <Calculator className="w-4 h-4 mr-2" /> Calculate
            </Button>
          </div>

          {/* Result Table */}
          {solverResult && (
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-md animate-in slide-in-from-bottom-2">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base text-green-800 flex justify-between items-center">
                  <span>Final Formula</span>
                  <Badge variant="outline" className="bg-white text-green-700 border-green-300">
                    {productType === "ice-cream" ? "Ice Cream" : "Frozen Dessert"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-green-200 hover:bg-transparent">
                        <TableHead className="text-xs font-bold text-green-900 h-9">Ingredient</TableHead>
                        <TableHead className="text-xs font-bold text-green-900 text-right h-9">Kg</TableHead>
                        <TableHead className="text-xs font-bold text-green-900 text-right h-9">%</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {solverResult.map((res, i) => (
                        <TableRow key={i} className="border-green-100 hover:bg-green-100/50">
                          <TableCell className="py-2 text-xs font-medium">{res.name}</TableCell>
                          <TableCell className="py-2 text-right text-sm font-bold">{res.amount.toFixed(2)}</TableCell>
                          <TableCell className="py-2 text-right text-xs text-muted-foreground">{res.percent.toFixed(1)}%</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-green-200/50 font-bold border-t-2 border-green-300">
                        <TableCell className="py-2 text-xs">Total</TableCell>
                        <TableCell className="py-2 text-right text-sm">
                          {solverResult.reduce((a, b) => a + b.amount, 0).toFixed(2)}
                        </TableCell>
                        <TableCell className="py-2 text-right text-xs">100%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* ═══════════════════════════════════════
            TAB 2 — VERIFICATION
        ═══════════════════════════════════════ */}
        <TabsContent value="verification" className="space-y-4">
          <Card className="border-2 border-dashed border-gray-300 bg-gray-50/50">
            <CardHeader className="p-4">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> Calculation Process
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-2">
              {verificationSteps.length > 0 ? (
                <div className="text-xs sm:text-sm font-mono space-y-2 bg-white p-3 rounded border">
                  {verificationSteps.map((step, idx) => (
                    <div key={idx} className={cn(
                      "leading-relaxed",
                      step.includes("**")             ? "font-bold text-gray-800"                     : "text-gray-600",
                      step.includes("WARNING")        ? "text-red-600"                                 : "",
                      step.includes("Solution Found") ? "text-green-600 text-base border-t pt-2 mt-2" : "",
                    )}>
                      {step.replace(/\*\*/g, "")}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Press "Calculate" in Solver tab to see steps.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ═══════════════════════════════════════
            TAB 3 — MANUAL
        ═══════════════════════════════════════ */}
        <TabsContent value="simple-scaling" className="space-y-4">
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm text-slate-600">Manual Entry</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {manualRows.map(row => (
                <div key={row.id} className="space-y-1">
                  <IngredientSelect value={row.name} onChange={name => handleManualSelect(row.id, name)} />
                  <div className="flex gap-2 items-center">
                    <Input
                      placeholder="Kg" type="number"
                      className="h-9 text-sm"
                      value={row.amount}
                      onChange={e => handleManualChange(row.id, "amount", e.target.value)}
                    />
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-red-500" onClick={() => removeManualRow(row.id)}>
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addManualRow}
                className="w-full mt-2 h-9 border-dashed border-slate-400">
                <PlusCircle className="w-4 h-4 mr-2" /> Add Row
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ==================== OVERRUN CALCULATOR ====================
function OverrunCalc() {
  const { toast } = useToast();
  const { validatePositive } = useInputValidation();
  const [mixWeight, setMixWeight] = useState("1080");
  const [iceCreamWeight, setIceCreamWeight] = useState("560");
  const [result, setResult] = useState<{
    overrun: number;
    airIncorporated: number;
  } | null>(null);

  const calculate = useCallback(() => {
    const validations = [
      validatePositive(mixWeight, "Mix weight"),
      validatePositive(iceCreamWeight, "Ice cream weight"),
    ];

    const invalidField = validations.find((v) => !v.isValid);
    if (invalidField) {
      toast({
        title: "Validation Error",
        description: invalidField.message,
        variant: "destructive",
      });
      return;
    }

    const mixW = parseFloat(mixWeight);
    const icW = parseFloat(iceCreamWeight);

    if (mixW < icW) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Mix weight cannot be less than ice cream weight",
      });
      return;
    }

    const overrun = ((mixW - icW) / icW) * 100;
    const airIncorporated = mixW - icW;

    setResult({ overrun, airIncorporated });

    let quality = "Standard";
    if (overrun < 25) quality = "Low (Dense)";
    else if (overrun >= 70 && overrun <= 100) quality = "Premium";
    else if (overrun > 100) quality = "Economy";

    toast({
      title: "Calculation Complete",
      description: `Overrun: ${overrun.toFixed(2)}% (${quality})`,
    });
  }, [mixWeight, iceCreamWeight, validatePositive, toast]);

  return (
    <div className="space-y-6">
      <Alert className="bg-green-50 border-green-200">
        <ChevronsUp className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-sm sm:text-base">
          Overrun Calculator
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Measure air incorporation in ice cream production
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ValidatedInput
          label="Weight of Mix (1 Litre)"
          value={mixWeight}
          onChange={setMixWeight}
          validation={validatePositive(mixWeight)}
          unit="g"
          icon={<Weight className="h-4 w-4 text-blue-500" />}
          helpText="Typically 1000-1100g"
          colorScheme="blue"
        />
        <ValidatedInput
          label="Weight of Ice Cream (Same 1 Litre)"
          value={iceCreamWeight}
          onChange={setIceCreamWeight}
          validation={validatePositive(iceCreamWeight)}
          unit="g"
          icon={<IceCreamIcon className="h-4 w-4 text-purple-500" />}
          helpText="After freezing & aeration"
          colorScheme="purple"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full h-12 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        size="lg"
      >
        <Calculator className="mr-2 h-5 w-5" />
        Calculate Overrun
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard
              title="Overrun Percentage"
              value={result.overrun}
              unit="%"
              confidence="high"
              icon={<ChevronsUp className="h-5 w-5" />}
              colorScheme="green"
              subtitle="Air incorporation rate"
            />
            <ResultCard
              title="Air Incorporated"
              value={result.airIncorporated}
              unit="g"
              confidence="high"
              icon={<Droplets className="h-5 w-5" />}
              colorScheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-900 text-sm sm:text-base">
              Quality Classification
            </AlertTitle>
            <AlertDescription className="text-blue-800 text-xs sm:text-sm space-y-1">
              <div>
                <strong>Premium:</strong> 70-100% (Dense, creamy texture)
              </div>
              <div>
                <strong>Standard:</strong> 25-70% (Good balance)
              </div>
              <div>
                <strong>Economy:</strong> 100%+ (Light, fluffy texture)
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}

// ==================== FREEZING POINT CALCULATOR ====================
function FreezingPointCalc() {
  const { toast } = useToast();
  const { validatePositive } = useInputValidation();
  const [water, setWater] = useState("0.65");
  const [sucrose, setSucrose] = useState("150");
  const [dextrose, setDextrose] = useState("25");
  const [salt, setSalt] = useState("1");
  const [result, setResult] = useState<{
    freezingPoint: number;
    depression: number;
  } | null>(null);

  const calculate = useCallback(() => {
    const validations = [
      validatePositive(water, "Water weight"),
      validatePositive(sucrose, "Sucrose"),
      validatePositive(dextrose, "Dextrose"),
      validatePositive(salt, "Salt"),
    ];

    const waterKg = parseFloat(water);
    if (isNaN(waterKg) || waterKg <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter a valid weight for water in kg",
      });
      return;
    }

    const sucroseG = parseFloat(sucrose) || 0;
    const dextroseG = parseFloat(dextrose) || 0;
    const saltG = parseFloat(salt) || 0;

    // Constants
    const MOLAR_MASS_SUCROSE = 342.3;
    const MOLAR_MASS_DEXTROSE = 180.16;
    const MOLAR_MASS_SALT = 58.44;
    const KF_WATER = 1.86; // Cryoscopic constant
    const I_SALT = 2; // van't Hoff factor for NaCl
    const I_SUGAR = 1; // van't Hoff factor for sugars

    // Calculate moles
    const molesSucrose = sucroseG / MOLAR_MASS_SUCROSE;
    const molesDextrose = dextroseG / MOLAR_MASS_DEXTROSE;
    const molesSalt = saltG / MOLAR_MASS_SALT;

    // Calculate effective moles (considering van't Hoff factors)
    const totalEffectiveMoles =
      molesSucrose * I_SUGAR + molesDextrose * I_SUGAR + molesSalt * I_SALT;

    // Calculate molality
    const molality = totalEffectiveMoles / waterKg;

    // Calculate freezing point depression
    const freezingPointDepression = molality * KF_WATER;
    const finalFreezingPoint = 0 - freezingPointDepression;

    setResult({
      freezingPoint: finalFreezingPoint,
      depression: freezingPointDepression,
    });

    toast({
      title: "Calculation Complete",
      description: `Freezing point: ${finalFreezingPoint.toFixed(2)}°C`,
    });
  }, [water, sucrose, dextrose, salt, validatePositive, toast]);

  return (
    <div className="space-y-6">
      <Alert className="bg-cyan-50 border-cyan-200">
        <Thermometer className="h-4 w-4 text-cyan-600" />
        <AlertTitle className="text-sm sm:text-base">
          Freezing Point Depression
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Calculate mix freezing point based on solutes (colligative property)
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ValidatedInput
          label="Total Water in Mix"
          value={water}
          onChange={setWater}
          validation={validatePositive(water)}
          unit="kg"
          icon={<Droplets className="h-4 w-4 text-blue-500" />}
          helpText="Water content in the mix"
          colorScheme="blue"
        />
        <ValidatedInput
          label="Sucrose (Table Sugar)"
          value={sucrose}
          onChange={setSucrose}
          validation={validatePositive(sucrose)}
          unit="g"
          icon={<Target className="h-4 w-4 text-pink-500" />}
          colorScheme="pink"
        />
        <ValidatedInput
          label="Dextrose/Glucose"
          value={dextrose}
          onChange={setDextrose}
          validation={validatePositive(dextrose)}
          unit="g"
          icon={<Target className="h-4 w-4 text-orange-500" />}
          colorScheme="orange"
        />
        <ValidatedInput
          label="Salt (NaCl)"
          value={salt}
          onChange={setSalt}
          validation={validatePositive(salt)}
          unit="g"
          icon={<Target className="h-4 w-4 text-purple-500" />}
          helpText="Optional stabilizer"
          colorScheme="purple"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full h-12 text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
        size="lg"
      >
        <Calculator className="mr-2 h-5 w-5" />
        Calculate Freezing Point
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard
              title="Freezing Point"
              value={result.freezingPoint}
              unit="°C"
              confidence="high"
              icon={<Thermometer className="h-5 w-5" />}
              colorScheme="blue"
            />
            <ResultCard
              title="Depression Value"
              value={result.depression}
              unit="°C"
              confidence="high"
              icon={<Target className="h-5 w-5" />}
              colorScheme="cyan"
              subtitle="Below 0°C"
            />
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-200">
            <Info className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-900 text-sm sm:text-base">
              Freezing Point Guide
            </AlertTitle>
            <AlertDescription className="text-orange-800 text-xs sm:text-sm space-y-1">
              <div>
                <strong>-2°C to -4°C:</strong> Optimal for soft-serve
              </div>
              <div>
                <strong>-5°C to -6°C:</strong> Good for scoopable ice cream
              </div>
              <div>
                <strong>Below -6°C:</strong> Very hard, may affect texture
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// ADVANCED PLANT EFFICIENCY CALCULATOR
// Drop-in Replacement for PlantEfficiencyCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana PlantEfficiencyCalc() function dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── PLANT TYPE DATABASE ───────────────────────────────────
const PLANT_TYPE_DB = {
  liquid_milk:  { label: "🥛 Liquid Milk Plant",   energyBench: 0.12, wasteBench: 2.0, capBench: 80, timeBench: 92, note: "Pasteurisation + packing"        },
  uht:          { label: "🫙 UHT / Tetra Pack",    energyBench: 0.18, wasteBench: 1.5, capBench: 85, timeBench: 94, note: "High-heat processing"              },
  ghee:         { label: "🧈 Ghee / Butter Plant", energyBench: 0.22, wasteBench: 3.0, capBench: 75, timeBench: 88, note: "Clarification & packing"           },
  paneer:       { label: "🧀 Paneer / Khoa",       energyBench: 0.20, wasteBench: 4.0, capBench: 72, timeBench: 87, note: "Coagulation + pressing"            },
  powder:       { label: "💨 Milk Powder Plant",   energyBench: 0.55, wasteBench: 1.0, capBench: 88, timeBench: 95, note: "Evaporation + spray drying"        },
  ice_cream:    { label: "🍦 Ice Cream Plant",     energyBench: 0.35, wasteBench: 2.5, capBench: 78, timeBench: 90, note: "Freezing + hardening"              },
  curd_dahi:    { label: "🫙 Curd / Dahi Plant",   energyBench: 0.15, wasteBench: 2.0, capBench: 80, timeBench: 91, note: "Incubation + packing"              },
} as const;

type PlantTypeKey = keyof typeof PLANT_TYPE_DB;

// ── SHIFT PRESETS ─────────────────────────────────────────
const SHIFT_PRESETS = {
  "Best Practice":   { actualOutput: "9200", maxCapacity: "10000", stdTime: "10", actualTime: "10.8", energyConsumed: "1200", totalOutputEnergy: "9200", totalWaste: "184", totalInput: "10000", downtime: "0.5", rejectRate: "0.3" },
  "Typical Day":     { actualOutput: "8000", maxCapacity: "10000", stdTime: "10", actualTime: "12",   energyConsumed: "1000", totalOutputEnergy: "8000", totalWaste: "500", totalInput: "10000", downtime: "1.5", rejectRate: "1.2" },
  "Below Average":   { actualOutput: "5500", maxCapacity: "10000", stdTime: "10", actualTime: "15",   energyConsumed: "1300", totalOutputEnergy: "5500", totalWaste: "900", totalInput: "10000", downtime: "3.0", rejectRate: "3.5" },
  "Startup / New":   { actualOutput: "6000", maxCapacity: "10000", stdTime: "10", actualTime: "13",   energyConsumed: "1100", totalOutputEnergy: "6000", totalWaste: "700", totalInput: "10000", downtime: "2.0", rejectRate: "2.0" },
} as const;

// ── GRADE HELPERS ─────────────────────────────────────────
const getGrade = (score: number) => {
  if (score >= 90) return { label: "A+ World Class 🏆", color: "text-emerald-700", bg: "bg-emerald-600" };
  if (score >= 80) return { label: "A Excellent ✅",    color: "text-green-700",   bg: "bg-green-600"   };
  if (score >= 70) return { label: "B Good 👍",          color: "text-yellow-700",  bg: "bg-yellow-600"  };
  if (score >= 60) return { label: "C Average ⚠️",       color: "text-orange-700",  bg: "bg-orange-500"  };
  return                   { label: "D Poor ❌",          color: "text-red-700",     bg: "bg-red-600"     };
};

const getScoreColor = (score: number) =>
  score >= 80 ? "text-green-600" : score >= 60 ? "text-yellow-600" : "text-red-600";

// ── SCORE BAR ─────────────────────────────────────────────
function ScoreBar({ score, label, benchmark }: { score: number; label: string; benchmark: number }) {
  const color = score >= benchmark ? "bg-green-500" : score >= benchmark * 0.8 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="font-semibold text-slate-600">{label}</span>
        <div className="flex items-center gap-1">
          <span className={`font-black ${getScoreColor(score)}`}>{score.toFixed(1)}%</span>
          <span className="text-slate-400 text-[10px]">(bench: {benchmark}%)</span>
        </div>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden relative">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${Math.min(score, 100)}%` }} />
        {/* benchmark marker */}
        <div className="absolute top-0 h-full w-0.5 bg-slate-500 opacity-50" style={{ left: `${benchmark}%` }} />
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────
function PlantEfficiencyCalc() {
  const { toast } = useToast();
  const { validatePositive } = useInputValidation();

  const [plantType, setPlantType] = useState<PlantTypeKey>("liquid_milk");
  const [activeTab, setActiveTab] = useState<"inputs" | "results" | "actions">("inputs");

  const [inputs, setInputs] = useState({
    actualOutput:       "8000",
    maxCapacity:        "10000",
    stdTime:            "10",
    actualTime:         "12",
    energyConsumed:     "1000",
    totalOutputEnergy:  "8000",
    totalWaste:         "500",
    totalInput:         "10000",
    downtime:           "1.5",    // hours/shift
    totalShiftHours:    "8",      // hours
    rejectRate:         "1.2",    // % rejects/returns
    maintenanceCost:    "5000",   // ₹/month
    energyRate:         "8",      // ₹/kWh
  });

  const [weights, setWeights] = useState({
    capacity:   30,
    processing: 25,
    energy:     20,
    waste:      15,
    downtime:   10,
  });

  const handleInputChange  = useCallback((field: keyof typeof inputs, value: string) => setInputs(p => ({ ...p, [field]: value })), []);
  const handleWeightChange = useCallback((field: keyof typeof weights, value: number[]) => setWeights(p => ({ ...p, [field]: value[0] })), []);

  // Apply preset
  const applyPreset = (name: keyof typeof SHIFT_PRESETS) => {
    setInputs(p => ({ ...p, ...SHIFT_PRESETS[name] }));
    toast({ title: "Preset Applied", description: name });
  };

  // Apply plant type
  const applyPlantType = (key: PlantTypeKey) => {
    setPlantType(key);
    toast({ title: "Plant Type Set", description: PLANT_TYPE_DB[key].label });
  };

  // ── CALCULATE (live) ──────────────────────────────────
  const results = useMemo(() => {
    const n = (v: string) => parseFloat(v) || 0;
    const pt = PLANT_TYPE_DB[plantType];

    const actualOut  = n(inputs.actualOutput);
    const maxCap     = n(inputs.maxCapacity);
    const stdT       = n(inputs.stdTime);
    const actT       = n(inputs.actualTime);
    const energy     = n(inputs.energyConsumed);
    const energyOut  = n(inputs.totalOutputEnergy);
    const waste      = n(inputs.totalWaste);
    const totalIn    = n(inputs.totalInput);
    const downtime   = n(inputs.downtime);
    const shiftHrs   = n(inputs.totalShiftHours);
    const rejectRate = n(inputs.rejectRate);
    const maintCost  = n(inputs.maintenanceCost);
    const energyRate = n(inputs.energyRate);

    // ── Metric 1: Capacity Utilization ────────────────
    const capacityUtil   = maxCap > 0 ? (actualOut / maxCap) * 100 : 0;
    const capacityScore  = Math.min(100, Math.max(0, capacityUtil));

    // ── Metric 2: Processing Time Efficiency ──────────
    const timeEff        = actT > 0 ? (stdT / actT) * 100 : 0;
    const timeScore      = Math.min(100, Math.max(0, timeEff));

    // ── Metric 3: Energy Efficiency ───────────────────
    // kWh per litre — benchmark from plant type
    const kwhPerL        = energyOut > 0 ? energy / energyOut : 0;
    const bench_e        = pt.energyBench;
    // Score: 100 at bench, drops linearly → 0 at 4× bench
    const energyScore    = kwhPerL > 0
      ? Math.min(100, Math.max(0, 100 - ((kwhPerL - bench_e) / (bench_e * 3)) * 100))
      : 0;

    // ── Metric 4: Waste ───────────────────────────────
    const wastePct       = totalIn > 0 ? (waste / totalIn) * 100 : 0;
    const wasteScore     = Math.max(0, 100 - wastePct * (100 / (pt.wasteBench * 4)));

    // ── Metric 5: Downtime / OEE ─────────────────────
    const availabilityPct= shiftHrs > 0 ? ((shiftHrs - downtime) / shiftHrs) * 100 : 100;
    const downtimeScore  = Math.min(100, Math.max(0, availabilityPct));

    // ── OEE = Availability × Performance × Quality ────
    const availability   = availabilityPct / 100;
    const performance    = capacityUtil / 100;
    const quality        = Math.max(0, (100 - rejectRate)) / 100;
    const oee            = availability * performance * quality * 100;

    // ── Overall Weighted Score ────────────────────────
    const totalWeight = Object.values(weights).reduce((s, w) => s + w, 0);
    const overallEff  = totalWeight > 0
      ? (capacityScore * weights.capacity +
         timeScore      * weights.processing +
         energyScore    * weights.energy +
         wasteScore     * weights.waste +
         downtimeScore  * weights.downtime) / totalWeight
      : 0;

    // ── Financial ─────────────────────────────────────
    const energyCost     = energy * energyRate;
    const energyCostPerL = energyOut > 0 ? energyCost / energyOut : 0;
    const wasteValue     = waste * 40; // ₹40/L avg milk value

    // If capacity improved to benchmark: extra litres
    const capacityGap    = Math.max(0, (pt.capBench - capacityUtil) / 100 * maxCap);
    const potentialRevenue = capacityGap * 50; // ₹50/L avg revenue

    // ── Warnings ─────────────────────────────────────
    const warnings: string[] = [];
    if (capacityUtil < 60)      warnings.push(`Capacity ${capacityUtil.toFixed(1)}% is low (benchmark ${pt.capBench}%). Review production planning & demand forecast.`);
    if (timeEff < 80)           warnings.push(`Time efficiency ${timeEff.toFixed(1)}% below 80%. Check bottlenecks, changeover time, and CIP scheduling.`);
    if (kwhPerL > pt.energyBench * 1.5) warnings.push(`Energy ${kwhPerL.toFixed(3)} kWh/L is high (benchmark ${pt.energyBench} kWh/L). Audit refrigeration, heating, and compressed air.`);
    if (wastePct > pt.wasteBench)      warnings.push(`Waste ${wastePct.toFixed(1)}% above benchmark (${pt.wasteBench}%). Review QC rejections, overfill, and cleaning losses.`);
    if (downtime > shiftHrs * 0.15)    warnings.push(`Downtime ${downtime}h is >15% of shift. Review preventive maintenance schedule.`);
    if (rejectRate > 2)                warnings.push(`Reject rate ${rejectRate}% is high. Check standardisation, packaging seals, and cold chain.`);
    if (oee < 65)                      warnings.push(`OEE ${oee.toFixed(1)}% is below world class (85%). Focus on availability first.`);

    return {
      capacityUtil, capacityScore,
      timeEff, timeScore,
      kwhPerL, energyScore,
      wastePct, wasteScore,
      availabilityPct, downtimeScore,
      oee, quality, availability, performance,
      overallEff,
      energyCost, energyCostPerL, wasteValue,
      capacityGap, potentialRevenue,
      rejectRate,
      warnings,
    };
  }, [inputs, weights, plantType]);

  const pt = PLANT_TYPE_DB[plantType];
  const totalW = Object.values(weights).reduce((s, w) => s + w, 0);

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-2 border-orange-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 rounded-t-lg border-b border-orange-100">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-orange-800">
            <Factory className="h-6 w-6 text-orange-600" />
            Plant Efficiency Calculator
          </span>
          <div className="flex items-center gap-2">
            <Badge className={`text-sm px-3 py-1 ${getGrade(results.overallEff).bg} text-white`}>
              {results.overallEff.toFixed(1)}% Overall
            </Badge>
            <Badge variant="outline" className="text-xs text-orange-700 border-orange-300">
              OEE: {results.oee.toFixed(1)}%
            </Badge>
          </div>
        </CardTitle>
        <CardDescription className="text-orange-600 text-xs">
          7 plant types · 5 metrics · OEE · Custom weights · Financial impact · Action plan
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── PLANT TYPE ───────────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Plant Type (auto-sets benchmarks)</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(Object.keys(PLANT_TYPE_DB) as PlantTypeKey[]).map(key => (
              <button key={key} onClick={() => applyPlantType(key)}
                className={`p-2 rounded-lg border text-xs font-semibold transition-all text-left leading-tight shadow-sm
                  ${plantType === key
                    ? "bg-orange-600 text-white border-orange-600 shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-orange-300"
                  }`}>
                {PLANT_TYPE_DB[key].label}
                <div className={`text-[9px] mt-0.5 ${plantType === key ? "opacity-80" : "text-slate-400"}`}>
                  {PLANT_TYPE_DB[key].energyBench} kWh/L · Cap {PLANT_TYPE_DB[key].capBench}%
                </div>
              </button>
            ))}
          </div>
          <p className="text-[10px] text-orange-700 bg-orange-50 px-2 py-1 rounded border border-orange-100">
            📌 {pt.note} · Energy bench: {pt.energyBench} kWh/L · Waste bench: {pt.wasteBench}%
          </p>
        </div>

        {/* ── SHIFT PRESETS ─────────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase">Shift Presets</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(SHIFT_PRESETS) as Array<keyof typeof SHIFT_PRESETS>).map(name => (
              <button key={name} onClick={() => applyPreset(name)}
                className="px-3 py-1 rounded-full border border-orange-200 bg-white text-xs font-semibold text-orange-700 hover:bg-orange-600 hover:text-white transition-all shadow-sm">
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ── TABS ─────────────────────────────────────── */}
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="inputs"  className="text-xs">⚙️ Metrics & Weights</TabsTrigger>
            <TabsTrigger value="results" className="text-xs">📊 Scores & OEE</TabsTrigger>
            <TabsTrigger value="actions" className="text-xs">🎯 Action Plan</TabsTrigger>
          </TabsList>

          {/* ════ TAB 1: INPUTS ════════════════════════ */}
          <TabsContent value="inputs" className="space-y-4 pt-3">

            {/* Metric cards — 2 column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {/* Capacity */}
              <Card className="border-blue-200 bg-blue-50/30">
                <CardHeader className="p-3 pb-2 bg-blue-50 border-b border-blue-100">
                  <CardTitle className="text-xs font-bold text-blue-700 uppercase">🏭 1. Capacity Utilization</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <ValidatedInput label="Actual Output" value={inputs.actualOutput} onChange={v => handleInputChange("actualOutput", v)} validation={validatePositive(inputs.actualOutput)} unit="L" colorScheme="blue" />
                  <ValidatedInput label="Max Capacity" value={inputs.maxCapacity} onChange={v => handleInputChange("maxCapacity", v)} validation={validatePositive(inputs.maxCapacity)} unit="L" colorScheme="blue" />
                  <div className={`text-center text-2xl font-black p-2 rounded-lg bg-white border ${getScoreColor(results.capacityScore)}`}>
                    {results.capacityScore.toFixed(1)}%
                  </div>
                </CardContent>
              </Card>

              {/* Time */}
              <Card className="border-green-200 bg-green-50/30">
                <CardHeader className="p-3 pb-2 bg-green-50 border-b border-green-100">
                  <CardTitle className="text-xs font-bold text-green-700 uppercase">⏱️ 2. Time Efficiency</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <ValidatedInput label="Standard Time" value={inputs.stdTime} onChange={v => handleInputChange("stdTime", v)} validation={validatePositive(inputs.stdTime)} unit="min" colorScheme="green" />
                  <ValidatedInput label="Actual Time" value={inputs.actualTime} onChange={v => handleInputChange("actualTime", v)} validation={validatePositive(inputs.actualTime)} unit="min" colorScheme="green" />
                  <div className={`text-center text-2xl font-black p-2 rounded-lg bg-white border ${getScoreColor(results.timeScore)}`}>
                    {results.timeScore.toFixed(1)}%
                  </div>
                </CardContent>
              </Card>

              {/* Energy */}
              <Card className="border-yellow-200 bg-yellow-50/30">
                <CardHeader className="p-3 pb-2 bg-yellow-50 border-b border-yellow-100">
                  <CardTitle className="text-xs font-bold text-yellow-700 uppercase">⚡ 3. Energy Efficiency</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <ValidatedInput label="Energy Consumed" value={inputs.energyConsumed} onChange={v => handleInputChange("energyConsumed", v)} validation={validatePositive(inputs.energyConsumed)} unit="kWh" colorScheme="orange" />
                  <ValidatedInput label="Milk Output" value={inputs.totalOutputEnergy} onChange={v => handleInputChange("totalOutputEnergy", v)} validation={validatePositive(inputs.totalOutputEnergy)} unit="L" colorScheme="orange" />
                  <ValidatedInput label="Energy Rate" value={inputs.energyRate} onChange={v => handleInputChange("energyRate", v)} validation={validatePositive(inputs.energyRate)} unit="₹/kWh" colorScheme="orange" />
                  <div className="flex justify-between text-xs bg-white rounded-lg p-2 border border-yellow-200">
                    <span className="text-slate-500">kWh/L:</span>
                    <span className="font-black text-orange-700">{results.kwhPerL.toFixed(3)} <span className="text-slate-400">(bench: {pt.energyBench})</span></span>
                  </div>
                  <div className={`text-center text-2xl font-black p-2 rounded-lg bg-white border ${getScoreColor(results.energyScore)}`}>
                    {results.energyScore.toFixed(1)}%
                  </div>
                </CardContent>
              </Card>

              {/* Waste + Downtime + Reject */}
              <Card className="border-red-200 bg-red-50/30">
                <CardHeader className="p-3 pb-2 bg-red-50 border-b border-red-100">
                  <CardTitle className="text-xs font-bold text-red-700 uppercase">♻️ 4 & 5. Waste & Availability</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <ValidatedInput label="Total Waste" value={inputs.totalWaste} onChange={v => handleInputChange("totalWaste", v)} validation={validatePositive(inputs.totalWaste)} unit="L" colorScheme="red" />
                  <ValidatedInput label="Total Input" value={inputs.totalInput} onChange={v => handleInputChange("totalInput", v)} validation={validatePositive(inputs.totalInput)} unit="L" colorScheme="red" />
                  <ValidatedInput label="Downtime" value={inputs.downtime} onChange={v => handleInputChange("downtime", v)} validation={{ isValid: true, severity: "info" }} unit="hrs" helpText="Planned + unplanned" colorScheme="orange" />
                  <ValidatedInput label="Shift Hours" value={inputs.totalShiftHours} onChange={v => handleInputChange("totalShiftHours", v)} validation={validatePositive(inputs.totalShiftHours)} unit="hrs" colorScheme="blue" />
                  <ValidatedInput label="Reject Rate" value={inputs.rejectRate} onChange={v => handleInputChange("rejectRate", v)} validation={{ isValid: true, severity: "info" }} unit="%" helpText="Rework/returns%" colorScheme="red" />
                  <div className={`text-center text-2xl font-black p-2 rounded-lg bg-white border ${getScoreColor(results.wasteScore)}`}>
                    Waste: {results.wasteScore.toFixed(1)}%
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weights */}
            <Card className="border-purple-200 bg-purple-50/20">
              <CardHeader className="p-3 pb-2 bg-purple-50 border-b border-purple-100">
                <CardTitle className="text-xs font-bold text-purple-700 uppercase flex justify-between items-center">
                  🎚️ Importance Weights (custom)
                  <span className={`text-sm font-black ${totalW === 100 ? "text-green-600" : "text-orange-600"}`}>
                    Total: {totalW}% {totalW !== 100 && "(should be 100)"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                {([
                  { key: "capacity",   label: "Capacity Utilization",   color: "bg-blue-100"   },
                  { key: "processing", label: "Processing Time",         color: "bg-green-100"  },
                  { key: "energy",     label: "Energy Efficiency",       color: "bg-yellow-100" },
                  { key: "waste",      label: "Waste Management",        color: "bg-red-100"    },
                  { key: "downtime",   label: "Availability / Downtime", color: "bg-orange-100" },
                ] as { key: keyof typeof weights; label: string; color: string }[]).map(({ key, label, color }) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <Label className="text-xs font-semibold">{label}</Label>
                      <Badge variant="outline" className={`${color} text-xs`}>{weights[key]}%</Badge>
                    </div>
                    <Slider value={[weights[key]]} max={60} min={5} step={5}
                      onValueChange={v => handleWeightChange(key, v)}
                      className="cursor-pointer" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ════ TAB 2: RESULTS ════════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">

            {/* Overall Score */}
            <div className={`rounded-2xl p-6 text-center text-white shadow-xl ${getGrade(results.overallEff).bg}`}>
              <div className="text-[10px] uppercase opacity-80 font-bold mb-1">Overall Plant Efficiency</div>
              <div className="text-7xl font-black">{results.overallEff.toFixed(1)}%</div>
              <div className="text-sm opacity-90 font-bold mt-1">{getGrade(results.overallEff).label}</div>
            </div>

            {/* OEE Breakdown */}
            <Card className="bg-indigo-50 border-indigo-200">
              <CardHeader className="p-3 pb-1 border-b border-indigo-100">
                <CardTitle className="text-sm text-indigo-800 font-bold">🏭 OEE (Overall Equipment Effectiveness)</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                <div className="grid grid-cols-3 gap-2 text-center mb-2">
                  {[
                    { label: "Availability",  val: results.availabilityPct, color: "bg-green-100 text-green-700"  },
                    { label: "Performance",   val: results.capacityUtil,    color: "bg-blue-100 text-blue-700"    },
                    { label: "Quality",       val: results.quality * 100,   color: "bg-purple-100 text-purple-700"},
                  ].map((k, i) => (
                    <div key={i} className={`${k.color} rounded-lg p-2`}>
                      <div className="text-[10px] font-bold uppercase">{k.label}</div>
                      <div className="text-xl font-black">{k.val.toFixed(1)}%</div>
                    </div>
                  ))}
                </div>
                <div className={`text-center p-3 rounded-xl font-black text-xl ${results.oee >= 85 ? "bg-green-600 text-white" : results.oee >= 65 ? "bg-yellow-500 text-white" : "bg-red-600 text-white"}`}>
                  OEE = {results.oee.toFixed(2)}%
                  <div className="text-[10px] opacity-80 font-normal">World Class ≥ 85% · Typical 65–75%</div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 bg-slate-50 p-2 rounded border">
                  OEE = Availability × Performance × Quality = {(results.availability*100).toFixed(1)}% × {results.capacityUtil.toFixed(1)}% × {(results.quality*100).toFixed(1)}% = {results.oee.toFixed(2)}%
                </div>
              </CardContent>
            </Card>

            {/* Score bars vs benchmark */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="p-3 pb-1 border-b border-slate-200">
                <CardTitle className="text-xs font-bold text-slate-600 uppercase">📊 Individual Metric Scores vs Benchmark</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <ScoreBar score={results.capacityScore}  label="Capacity Utilization"  benchmark={pt.capBench}  />
                <ScoreBar score={results.timeScore}      label="Processing Time Eff."  benchmark={pt.timeBench} />
                <ScoreBar score={results.energyScore}    label="Energy Efficiency"     benchmark={85}           />
                <ScoreBar score={results.wasteScore}     label="Waste Management"      benchmark={80}           />
                <ScoreBar score={results.downtimeScore}  label="Availability (Uptime)"  benchmark={90}           />
              </CardContent>
            </Card>

            {/* Financial impact */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none">
              <CardContent className="p-3 space-y-2 text-sm">
                <div className="text-xs text-slate-300 font-bold uppercase mb-1">💸 Financial Analysis</div>
                {[
                  { label: "Energy cost (this shift)",        value: `₹${results.energyCost.toFixed(0)}`,           color: "text-yellow-300" },
                  { label: "Energy cost per litre",           value: `₹${results.energyCostPerL.toFixed(3)}/L`,     color: "text-yellow-300" },
                  { label: "Waste value lost",                value: `₹${results.wasteValue.toFixed(0)}`,           color: "text-red-400"    },
                  { label: "Capacity gap vs benchmark",       value: `${results.capacityGap.toFixed(0)} L/shift`,   color: "text-orange-300" },
                  { label: "Potential revenue if at benchmark",value: `₹${results.potentialRevenue.toFixed(0)}/shift`, color: "text-green-300 font-black text-base" },
                ].map((r, i) => (
                  <div key={i} className={`flex justify-between ${i === 4 ? "border-t border-slate-700 pt-2" : ""}`}>
                    <span className="text-slate-400">{r.label}</span>
                    <span className={`font-bold ${r.color}`}>{r.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Warnings */}
            {results.warnings.length > 0 && (
              <Alert className="bg-orange-50 border-orange-300">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertTitle className="text-orange-800 text-sm font-semibold">Improvement Alerts</AlertTitle>
                <AlertDescription className="text-xs text-orange-700 space-y-1 mt-1">
                  {results.warnings.map((w, i) => <div key={i}>⚠️ {w}</div>)}
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>

          {/* ════ TAB 3: ACTION PLAN ════════════════════ */}
          <TabsContent value="actions" className="space-y-4 pt-3">

            {/* Priority matrix */}
            <Card className="bg-white border-orange-100">
              <CardHeader className="p-3 pb-1 border-b border-orange-100">
                <CardTitle className="text-sm font-bold text-orange-700">🎯 Priority Action Matrix</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                {[
                  {
                    metric: "Capacity",
                    score: results.capacityScore,
                    bench: pt.capBench,
                    actions: ["Review production schedule & demand forecast", "Check separator / homogeniser downtime", "Optimize batch changeover sequence"],
                  },
                  {
                    metric: "Time Efficiency",
                    score: results.timeScore,
                    bench: pt.timeBench,
                    actions: ["Map process flow — identify waiting steps", "Reduce CIP time with hot water recycling", "Pre-stage materials before shift start"],
                  },
                  {
                    metric: "Energy",
                    score: results.energyScore,
                    bench: 85,
                    actions: [`Target ${pt.energyBench} kWh/L (current: ${results.kwhPerL.toFixed(3)})`, "Audit compressor & refrigeration insulation", "Off-peak ice building for milk chilling"],
                  },
                  {
                    metric: "Waste",
                    score: results.wasteScore,
                    bench: 80,
                    actions: ["Track line losses at each stage", "Optimize startup/shutdown volumes", "Recover flush milk from CIP returns"],
                  },
                  {
                    metric: "Availability",
                    score: results.downtimeScore,
                    bench: 90,
                    actions: ["Implement preventive maintenance schedule", "Stock critical spare parts on-site", "Train operators on minor stoppages"],
                  },
                ].sort((a, b) => a.score - b.score).map((item, i) => {
                  const gap = Math.max(0, item.bench - item.score);
                  const priority = gap > 20 ? "🔴 High" : gap > 10 ? "🟡 Medium" : "🟢 Low";
                  return (
                    <div key={i} className={`p-3 rounded-lg border ${gap > 20 ? "bg-red-50 border-red-200" : gap > 10 ? "bg-yellow-50 border-yellow-200" : "bg-green-50 border-green-200"}`}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-slate-700">{item.metric}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">{item.score.toFixed(0)}% vs {item.bench}%</span>
                          <span className="text-xs font-bold">{priority}</span>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        {item.actions.map((a, j) => (
                          <div key={j} className="text-xs text-slate-600 flex gap-1">
                            <span className="text-slate-400">→</span>{a}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Benchmark reference */}
            <Card className="bg-slate-50 border-slate-200">
              <CardHeader className="p-3 pb-1 border-b border-slate-200">
                <CardTitle className="text-xs font-bold text-slate-600 uppercase">📜 {pt.label} — Industry Benchmarks</CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-xs space-y-1 text-slate-600">
                {[
                  { label: "Capacity utilization", target: `${pt.capBench}%`,         current: `${results.capacityUtil.toFixed(1)}%`  },
                  { label: "Processing time eff.", target: `${pt.timeBench}%`,         current: `${results.timeEff.toFixed(1)}%`       },
                  { label: "Energy intensity",      target: `${pt.energyBench} kWh/L`, current: `${results.kwhPerL.toFixed(3)} kWh/L`  },
                  { label: "Waste generation",      target: `≤${pt.wasteBench}%`,      current: `${results.wastePct.toFixed(2)}%`      },
                  { label: "OEE",                   target: "≥85% (world class)",      current: `${results.oee.toFixed(2)}%`           },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between py-0.5 border-b border-slate-100">
                    <span className="font-semibold">{r.label}</span>
                    <div className="flex gap-4">
                      <span className="text-slate-400">Target: {r.target}</span>
                      <span className="font-bold text-slate-700">Now: {r.current}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

// --- 1. EXTENSIVE PRODUCT CATALOG (DATA) ---
const PRODUCT_CATALOG: Record<string, any> = {
  // --- LIQUID MILK ---
  "fcm": { label: "Full Cream Milk (FCM)", price: "66", yield: "1.0", type: "Liquid", packCost: "2.2" },
  "std": { label: "Standard Milk", price: "60", yield: "1.0", type: "Liquid", packCost: "2.0" },
  "tm": { label: "Toned Milk (TM)", price: "54", yield: "1.0", type: "Liquid", packCost: "1.8" },
  "dtm": { label: "Double Toned (DTM)", price: "48", yield: "1.0", type: "Liquid", packCost: "1.8" },
  "sm": { label: "Skimmed Milk (SM)", price: "42", yield: "1.0", type: "Liquid", packCost: "1.8" },

  // --- CURD / DAHI ---
  "curd_ton": { label: "Toned Curd", price: "65", yield: "1.0", type: "Fermented", packCost: "2.5" },
  "curd_skim": { label: "Skimmed Milk Curd", price: "50", yield: "1.0", type: "Fermented", packCost: "2.5" },
  "curd_part": { label: "Partial Curd", price: "60", yield: "1.0", type: "Fermented", packCost: "2.5" },
  
  // --- BEVERAGES (Yield > 1.0 means water/spices added) ---
  "lassi": { label: "Lassi", price: "90", yield: "1.2", type: "Drink", packCost: "3.5" },
  "chach_ms": { label: "Masala Chach", price: "35", yield: "1.6", type: "Drink", packCost: "2.0" },
  "chach_td": { label: "Tadka Chach", price: "40", yield: "1.6", type: "Drink", packCost: "2.2" },
  "chach_pn": { label: "Paneer Chach (Whey)", price: "10", yield: "0.9", type: "Drink", packCost: "1.0" }, 

  // --- SOLIDS ---
  "paneer": { label: "Paneer (Fresh)", price: "380", yield: "0.15", type: "Solid", packCost: "5.0" }, // 15% Yield
  "khoa": { label: "Khoa / Mawa", price: "400", yield: "0.18", type: "Solid", packCost: "4.0" },
  "shrikhand": { label: "Shrikhand", price: "350", yield: "0.7", type: "Solid", packCost: "8.0" },
  
  // --- FROZEN ---
  "ice_cream": { label: "Ice Cream", price: "250", yield: "1.8", type: "Frozen", packCost: "10.0" },
};

// Variable Cost Presets
const VARIABLE_COST_PRESETS = {
  packaging: [
    { label: "Pouch Film", value: "1.2" },
    { label: "Cup/Glass", value: "2.5" },
    { label: "Rigid Container", value: "6.0" },
  ],
  ingredients: [
    { label: "Culture/Rennet", value: "0.5" },
    { label: "Sugar/Spice", value: "2.5" },
    { label: "Stabilizer", value: "5.0" },
  ],
  energy: [
    { label: "Grid Power", value: "1.2" },
    { label: "Diesel Gen", value: "3.5" },
  ]
};

const FIXED_EXPENSE_TYPES = [
  { label: "Salaries & Wages", default: "150000" },
  { label: "Factory Rent", default: "50000" },
  { label: "Electricity (Fixed)", default: "15000" },
  { label: "Boiler Fuel", default: "15000" },
  { label: "Maintenance", default: "10000" },
  { label: "Marketing", default: "25000" },
];

// --- COMPONENTS ---

// 1. Smart Input with Dropdown
const SmartInput = memo(function SmartInput({
  label, value, name, setter, placeholder, validation, icon, colorScheme = "blue", suffix, options, readOnly
}: {
  label: string; value: string; name: string; setter: (name: string, value: string) => void;
  placeholder?: string; validation?: { isValid: boolean; message?: string };
  icon?: React.ReactNode; colorScheme?: "blue" | "green" | "purple" | "orange" | "pink";
  suffix?: string; options?: { label: string; value: string }[]; readOnly?: boolean;
}) {
  const [internalValue, setInternalValue] = useState(value);
  const [touched, setTouched] = useState(false);

  useEffect(() => { if (value !== internalValue) setInternalValue(value); }, [value]);

  const handleChange = (val: string) => {
    setInternalValue(val);
    setter(name, val);
  };

  const colorClasses: Record<string, string> = {
    blue: "focus:ring-blue-500 border-blue-200",
    green: "focus:ring-green-500 border-green-200",
    purple: "focus:ring-purple-500 border-purple-200",
    orange: "focus:ring-orange-500 border-orange-200",
    pink: "focus:ring-pink-500 border-pink-200",
  };

  return (
    <div className="space-y-1 w-full bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <Label className="text-xs font-bold flex items-center gap-1.5 text-slate-600 truncate">
            {icon} {label}
        </Label>
        {options && (
            <Select onValueChange={(v) => handleChange(v)}>
                <SelectTrigger className="h-5 text-[10px] w-auto border-none bg-slate-50 px-2 text-indigo-600 font-bold hover:bg-slate-100">
                    <SelectValue placeholder="Preset" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((opt, i) => (
                        <SelectItem key={i} value={opt.value} className="text-xs">
                            {opt.label} (₹{opt.value})
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        )}
      </div>
      <div className="relative">
        <Input
          type="number" inputMode="decimal"
          value={internalValue}
          onChange={(e) => handleChange(e.target.value)}
          readOnly={readOnly}
          className={cn(
            "transition-all h-9 text-sm font-semibold",
            colorClasses[colorScheme],
            readOnly && "bg-slate-100 text-slate-500 cursor-not-allowed",
            touched && validation && !validation.isValid && "border-red-500"
          )}
        />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium pointer-events-none">{suffix}</span>}
      </div>
    </div>
  );
});

// 2. Fixed Expense Row
const FixedExpenseRow = memo(function FixedExpenseRow({
  item, onChange, onRemove,
}: {
  item: FixedExpense; onChange: (id: number, field: keyof FixedExpense, value: string) => void; onRemove: (id: number) => void;
}) {
  return (
    <div className="flex gap-2 items-center bg-slate-50 p-2 rounded-md border border-slate-200">
        <div className="flex-grow grid grid-cols-[1.5fr_1fr] gap-2">
            <div className="relative">
                <Input placeholder="Name" value={item.name} onChange={(e) => onChange(item.id, "name", e.target.value)} className="h-8 text-xs bg-white" />
                <div className="absolute right-0 top-0 h-full">
                    <Select onValueChange={(val) => {
                        onChange(item.id, "name", val);
                        const p = FIXED_EXPENSE_TYPES.find(x=>x.label===val);
                        if(p && !item.cost) onChange(item.id, "cost", p.default);
                    }}>
                        <SelectTrigger className="h-full w-6 p-0 border-none opacity-0 hover:opacity-100"><span className="sr-only">Open</span></SelectTrigger>
                        <SelectContent>{FIXED_EXPENSE_TYPES.map((t, i) => <SelectItem key={i} value={t.label}>{t.label}</SelectItem>)}</SelectContent>
                    </Select>
                </div>
            </div>
            <div className="relative">
                <Input type="number" placeholder="Cost" value={item.cost} onChange={(e) => onChange(item.id, "cost", e.target.value)} className="h-8 text-xs bg-white pr-6" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400">₹</span>
            </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-red-50 shrink-0" onClick={() => onRemove(item.id)}><XCircle className="h-4 w-4" /></Button>
    </div>
  );
});

// 3. Result Card
const PlantResultCard = ({ title, value, unit, color, icon: Icon, subtitle }: any) => (
    <div className={cn("p-3 rounded-xl border flex flex-col justify-between h-full bg-white shadow-sm", color)}>
        <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">{title}</span>
            <Icon className="h-4 w-4 opacity-50"/>
        </div>
        <div>
            <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-bold">{value}</span>
                {unit && <span className="text-xs font-medium opacity-70">{unit}</span>}
            </div>
            {subtitle && <p className="text-[10px] opacity-60 mt-1">{subtitle}</p>}
        </div>
    </div>
);

// ==================== MAIN COMPONENT ====================
export default function PlantCostCalc() {
  const { toast } = useToast();
  const validatePositive = (val: string) => { const num = parseFloat(val); return { isValid: !isNaN(num) && num >= 0, message: "Invalid" }; };
  
  // State
  const [scope, setScope] = useState<"plant" | "product">("product"); // Scope Toggle
  const [period, setPeriod] = useState("monthly");
  const [selectedProduct, setSelectedProduct] = useState("fcm");
  
  const [inputs, setInputs] = useState({
    inputQty: "1000",          // Raw Material Input (Litres/Kg)
    avgSellingPrice: "66",     // Output Price
    yieldFactor: "1.0",        // Input to Output Ratio
    processLoss: "0.5",        // Wasted %
    rawMaterialCost: "45",     // Base Cost
    packagingCost: "2.0",      // Per Unit
    ingredientsCost: "0.0",    // Cultures, Masala
    energyCost: "1.5",         // Per Unit
    logisticsCost: "1.0",      // Per Unit
    taxRate: "0",
    workingDays: "25",         // Operating Days per Month
    batchesPerDay: "1"         // Batches per Day (for Product mode)
  });

  const [fixedExpenses, setFixedExpenses] = useState<FixedExpense[]>([
    { id: 1, name: "Salaries & Wages", cost: "50000" },
    { id: 2, name: "Rent & Utils", cost: "20000" },
  ]);

  const [isDownloading, setIsDownloading] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // --- HANDLERS ---
  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  // Scope Switcher
  const handleScopeChange = (val: "plant" | "product") => {
      setScope(val);
      if(val === 'plant') {
          // Reset to Plant Defaults
          setInputs(prev => ({
              ...prev,
              inputQty: "30000",      // Larger volume for plant
              avgSellingPrice: "60", // Avg realization
              yieldFactor: "1.0",    // Avg Yield
              packagingCost: "2.0",
              ingredientsCost: "0.5",
              workingDays: "25",
              batchesPerDay: "1"
          }));
      } else {
          // Reset to Product Defaults (Trigger currently selected product)
          handleProductChange(selectedProduct);
      }
  };

  const handleProductChange = (prodKey: string) => {
      setSelectedProduct(prodKey);
      const prod = PRODUCT_CATALOG[prodKey as keyof typeof PRODUCT_CATALOG];
      if (prod) {
          setInputs(prev => ({
              ...prev,
              inputQty: "1000", // Standard batch size
              avgSellingPrice: prod.price,
              yieldFactor: prod.yield,
              packagingCost: prod.packCost,
              ingredientsCost: prod.type === 'Drink' ? '2.0' : (prod.type === 'Fermented' ? '0.5' : '0.0'),
              workingDays: "25",
              batchesPerDay: "1"
          }));
      }
  };

  const handleFixedExpense = {
    add: () => setFixedExpenses(p => [...p, { id: Date.now(), name: "", cost: "" }]),
    remove: (id: number) => setFixedExpenses(p => p.filter(i => i.id !== id)),
    change: (id: number, field: keyof FixedExpense, val: string) => {
        setFixedExpenses(p => p.map(i => i.id === id ? { ...i, [field]: val } : i));
    }
  };

  // --- CORE LOGIC ---
  const results = useMemo(() => {
    const vals = Object.fromEntries(Object.entries(inputs).map(([k, v]) => [k, parseFloat(v) || 0]));
    
    const inputQty = vals.inputQty;
    const workingDays = vals.workingDays || 25;
    const batchesPerDay = scope === 'product' ? (vals.batchesPerDay || 1) : 1;
    
    // Total Milk Processed per day
    const dailyInputVolume = scope === 'product' ? (inputQty * batchesPerDay) : inputQty;
    // Total Milk Processed per month
    const monthlyInputVolume = dailyInputVolume * workingDays;
    
    // Selected period input volume
    const periodInputVolume = period === "monthly" ? monthlyInputVolume : dailyInputVolume;
    
    // Yield & Loss Calculations
    const periodGrossOutput = periodInputVolume * vals.yieldFactor;
    const periodLossQty = periodGrossOutput * (vals.processLoss / 100);
    const periodSaleableQty = periodGrossOutput - periodLossQty;
    
    // Revenue
    const totalRevenue = periodSaleableQty * vals.avgSellingPrice;

    // Period Costs
    const totalRawCost = vals.rawMaterialCost * periodInputVolume;
    const totalPackCost = vals.packagingCost * periodSaleableQty; 
    const totalIngCost = vals.ingredientsCost * periodSaleableQty;
    const totalEnergyCost = vals.energyCost * periodSaleableQty;
    const totalLogisticsCost = vals.logisticsCost * periodSaleableQty;

    const totalVariableCost = totalRawCost + totalPackCost + totalIngCost + totalEnergyCost + totalLogisticsCost;
    
    // Fixed Costs
    const monthlyFixed = fixedExpenses.reduce((sum, i) => sum + (parseFloat(i.cost) || 0), 0);
    const periodFixedCost = period === "monthly" ? monthlyFixed : monthlyFixed / workingDays;
    
    const totalCost = totalVariableCost + periodFixedCost;
    const grossProfit = totalRevenue - totalVariableCost;
    const netProfitPreTax = totalRevenue - totalCost;
    
    const taxAmount = netProfitPreTax > 0 ? netProfitPreTax * (vals.taxRate / 100) : 0;
    const netProfitPostTax = netProfitPreTax - taxAmount;

    const netMargin = totalRevenue > 0 ? (netProfitPostTax / totalRevenue) * 100 : 0;
    
    // Unit level metrics (Per Unit of Saleable Output)
    const unitRawCost = periodSaleableQty > 0 ? totalRawCost / periodSaleableQty : 0;
    const unitVariableCost = periodSaleableQty > 0 ? totalVariableCost / periodSaleableQty : 0;
    const unitFixedCost = periodSaleableQty > 0 ? periodFixedCost / periodSaleableQty : 0;
    const unitTotalCost = periodSaleableQty > 0 ? totalCost / periodSaleableQty : 0;
    const unitNetProfit = vals.avgSellingPrice - unitTotalCost;
    
    // Cost of Processing (CoP)
    const unitCoPVal = periodSaleableQty > 0 ? (totalCost - totalRawCost) / periodSaleableQty : 0;
    const unitVariableCoPVal = periodSaleableQty > 0 ? (totalVariableCost - totalRawCost) / periodSaleableQty : 0;

    // Break Even Point
    const unitContribution = vals.avgSellingPrice - unitVariableCost;
    const breakEvenUnits = unitContribution > 0 ? periodFixedCost / unitContribution : 0;
    const breakEvenRevenue = breakEvenUnits * vals.avgSellingPrice;
    const breakEvenCapacityPct = periodSaleableQty > 0 ? (breakEvenUnits / periodSaleableQty) * 100 : 0;
    const safetyMarginPct = 100 - breakEvenCapacityPct;
    
    const costStructure = {
        material: totalCost > 0 ? (totalRawCost / totalCost) * 100 : 0,
        overhead: totalCost > 0 ? ((totalCost - totalRawCost) / totalCost) * 100 : 0
    };

    return {
        dailyInputVolume,
        monthlyInputVolume,
        periodInputVolume,
        saleableQty: periodSaleableQty,
        totalRevenue,
        totalRawCost,
        totalVariableCost,
        periodFixedCost,
        totalCost,
        grossProfit,
        netProfitPreTax,
        taxAmount,
        netProfitPostTax,
        netMargin,
        breakEvenUnits,
        breakEvenRevenue,
        breakEvenCapacityPct,
        safetyMarginPct,
        unitRawCost,
        unitVariableCost,
        unitFixedCost,
        unitTotalCost,
        unitNetProfit,
        unitCoPVal,
        unitVariableCoPVal,
        costStructure
    };
  }, [inputs, fixedExpenses, period, scope]);

  // Helper
  const fmt = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  
  const downloadPdf = async () => {
      if(!reportRef.current) return;
      setIsDownloading(true);
      try {
          const canvas = await html2canvas(reportRef.current, { scale: 2, useCORS: true, backgroundColor: "#fff" });
          const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
          const img = canvas.toDataURL("image/png");
          const w = pdf.internal.pageSize.getWidth();
          const h = (canvas.height * w) / canvas.width;
          pdf.addImage(img, "PNG", 0, 0, w, h);
          pdf.save("Dairy_Cost_Report.pdf");
      } catch(e) { console.error(e); }
      setIsDownloading(false);
  };

  return (
    <Card className="border-2 shadow-lg bg-slate-50/50">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 border-b">
        <div className="flex flex-col gap-4">
            
            {/* Header: Title & Scope Switcher */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-indigo-900">
                        <Factory className="h-6 w-6 text-indigo-600" />
                        Dairy Plant Costing
                    </CardTitle>
                    <CardDescription>Industrial-Grade P&L Analysis, Break-even & Process Costing (CoP)</CardDescription>
                </div>
                
                {/* SCOPE DROPDOWN (PLANT vs PRODUCT) */}
                <div className="flex gap-2">
                    <Select value={scope} onValueChange={(v:any) => handleScopeChange(v)}>
                        <SelectTrigger className="w-[160px] bg-indigo-600 text-white font-bold h-10 border-none shadow-md">
                            <SelectValue placeholder="Scope" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="plant">
                                <div className="flex items-center gap-2"><LayoutDashboard className="w-4 h-4"/> Total Plant</div>
                            </SelectItem>
                            <SelectItem value="product">
                                <div className="flex items-center gap-2"><Package className="w-4 h-4"/> Product Wise</div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    
                    <div className="flex items-center bg-white rounded-lg p-1 border shadow-sm">
                        <Button size="sm" variant={period === "daily" ? "default" : "ghost"} onClick={() => setPeriod("daily")} className="h-8 text-xs">Daily</Button>
                        <Button size="sm" variant={period === "monthly" ? "default" : "ghost"} onClick={() => setPeriod("monthly")} className="h-8 text-xs">Monthly</Button>
                    </div>
                </div>
            </div>

            {/* PRODUCT SELECTOR (Visible only in Product Mode) */}
            {scope === 'product' && (
                <div className="w-full bg-white p-3 rounded-lg border border-indigo-100 shadow-sm animate-in slide-in-from-top-2">
                    <Label className="text-[10px] font-bold text-slate-400 mb-1 block tracking-wider uppercase">Select Product for Analysis</Label>
                    <Select value={selectedProduct} onValueChange={handleProductChange}>
                        <SelectTrigger className="w-full bg-indigo-50 border-indigo-200 text-indigo-800 font-bold h-11 text-base">
                            <SelectValue placeholder="Select Product" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                            <SelectItem value="header1" disabled className="font-bold bg-slate-100 opacity-100">-- Liquid Milk --</SelectItem>
                            <SelectItem value="fcm">Full Cream Milk</SelectItem>
                            <SelectItem value="std">Standard Milk</SelectItem>
                            <SelectItem value="tm">Toned Milk</SelectItem>
                            <SelectItem value="dtm">Double Toned</SelectItem>
                            <SelectItem value="sm">Skimmed Milk</SelectItem>
                            
                            <SelectItem value="header2" disabled className="font-bold bg-slate-100 opacity-100">-- Curd Products --</SelectItem>
                            <SelectItem value="curd_ton">Toned Curd</SelectItem>
                            <SelectItem value="curd_skim">Skimmed Curd</SelectItem>
                            <SelectItem value="curd_part">Partial Curd</SelectItem>
                            
                            <SelectItem value="header3" disabled className="font-bold bg-slate-100 opacity-100">-- Beverages --</SelectItem>
                            <SelectItem value="lassi">Sweet Lassi</SelectItem>
                            <SelectItem value="chach_ms">Masala Chach</SelectItem>
                            <SelectItem value="chach_td">Tadka Chach</SelectItem>
                            <SelectItem value="chach_pn">Paneer Chach</SelectItem>
                            
                            <SelectItem value="header4" disabled className="font-bold bg-slate-100 opacity-100">-- Solids/Frozen --</SelectItem>
                            <SelectItem value="paneer">Fresh Paneer</SelectItem>
                            <SelectItem value="khoa">Khoa</SelectItem>
                            <SelectItem value="shrikhand">Shrikhand</SelectItem>
                            <SelectItem value="ice_cream">Ice Cream</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 space-y-6">
        
        {/* === SECTION 1: PRODUCTION LOGIC === */}
        <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-2">
                <Calculator className="h-4 w-4"/> {scope === 'plant' ? 'Plant Capacity & Throughput' : 'Product Batch Configuration'}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                <SmartInput 
                    label={scope === 'plant' ? "Daily Milk Processed" : "Batch Size (Milk)"} 
                    name="inputQty" 
                    value={inputs.inputQty} 
                    setter={handleInputChange} 
                    validation={validatePositive(inputs.inputQty)} 
                    icon={<Droplets className="h-3 w-3"/>} 
                    suffix="L/Kg" 
                />
                {scope === 'product' && (
                    <SmartInput 
                        label="Batches / Day" 
                        name="batchesPerDay" 
                        value={inputs.batchesPerDay} 
                        setter={handleInputChange} 
                        validation={validatePositive(inputs.batchesPerDay)} 
                        icon={<Calculator className="h-3 w-3"/>} 
                        suffix="Batches" 
                        colorScheme="purple" 
                    />
                )}
                <SmartInput 
                    label="Operating Days / Month" 
                    name="workingDays" 
                    value={inputs.workingDays} 
                    setter={handleInputChange} 
                    validation={validatePositive(inputs.workingDays)} 
                    icon={<Calendar className="h-3 w-3"/>} 
                    suffix="Days" 
                    colorScheme="pink" 
                />
                <SmartInput 
                    label="Yield Factor" 
                    name="yieldFactor" 
                    value={inputs.yieldFactor} 
                    setter={handleInputChange} 
                    validation={validatePositive(inputs.yieldFactor)} 
                    icon={<Target className="h-3 w-3"/>} 
                    suffix="Out/In" 
                    colorScheme="orange" 
                    readOnly={scope==='product'} 
                />
                <SmartInput 
                    label="Avg Selling Price" 
                    name="avgSellingPrice" 
                    value={inputs.avgSellingPrice} 
                    setter={handleInputChange} 
                    validation={validatePositive(inputs.avgSellingPrice)} 
                    icon={<DollarSign className="h-3 w-3"/>} 
                    suffix="₹/Unit" 
                    colorScheme="green" 
                />
            </div>

            {/* Mass Balance Verification Panel */}
            <div className="grid grid-cols-3 gap-0 bg-slate-100 rounded-lg border border-slate-200 overflow-hidden text-center divide-x divide-slate-300">
                <div className="p-2">
                    <div className="text-[9px] font-bold text-slate-500 uppercase">Input Volume ({period})</div>
                    <div className="text-sm font-bold text-slate-800">{fmt(results.periodInputVolume)} L/Kg</div>
                    <div className="text-[9px] text-slate-400">
                      {scope === 'product' ? `${inputs.inputQty} L × ${inputs.batchesPerDay} batches` : `${inputs.inputQty} L/day`}
                      {period === 'monthly' && ` × ${inputs.workingDays} days`}
                    </div>
                </div>
                <div className="p-2 bg-indigo-50/50">
                    <div className="text-[9px] font-bold text-indigo-500 uppercase">Gross Output ({period})</div>
                    <div className="text-sm font-bold text-indigo-700">{fmt(results.periodInputVolume * parseFloat(inputs.yieldFactor))} L/Kg</div>
                    <div className="text-[9px] text-indigo-400">Yield Factor: {inputs.yieldFactor}x</div>
                </div>
                <div className="p-2 bg-green-50/50">
                    <div className="text-[9px] font-bold text-green-600 uppercase">Saleable Volume ({period})</div>
                    <div className="text-base font-extrabold text-green-700">{fmt(results.saleableQty)} Units</div>
                    <div className="text-[9px] text-green-500">Loss: {inputs.processLoss}%</div>
                </div>
            </div>
        </section>

        {/* === SECTION 2: VARIABLE COSTS === */}
        <section className="space-y-4 pt-4 border-t">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 flex items-center gap-2"><Weight className="h-4 w-4"/> Variable Cost Components</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <SmartInput label="Raw Milk Cost" name="rawMaterialCost" value={inputs.rawMaterialCost} setter={handleInputChange} colorScheme="orange" suffix="₹/L or kg" />
                <SmartInput label="Packaging" name="packagingCost" value={inputs.packagingCost} setter={handleInputChange} options={VARIABLE_COST_PRESETS.packaging} colorScheme="purple" suffix="₹/Unit" />
                <SmartInput label="Ingredients/Additives" name="ingredientsCost" value={inputs.ingredientsCost} setter={handleInputChange} options={VARIABLE_COST_PRESETS.ingredients} colorScheme="blue" suffix="₹/Unit" />
                <SmartInput label="Utility Power/Fuel" name="energyCost" value={inputs.energyCost} setter={handleInputChange} options={VARIABLE_COST_PRESETS.energy} colorScheme="orange" suffix="₹/Unit" />
                <SmartInput label="Logistics/Transport" name="logisticsCost" value={inputs.logisticsCost} setter={handleInputChange} colorScheme="pink" suffix="₹/Unit" />
                <SmartInput label="Process Loss Rate" name="processLoss" value={inputs.processLoss} setter={handleInputChange} colorScheme="orange" suffix="%" />
            </div>
        </section>

        {/* === SECTION 3: FIXED EXPENSES === */}
        <section className="space-y-4 pt-4 border-t">
            <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 flex items-center gap-2"><Factory className="h-4 w-4"/> Monthly Fixed Overheads</h3>
                <Button variant="outline" size="sm" onClick={handleFixedExpense.add} className="h-7 text-xs"><PlusCircle className="w-3 h-3 mr-1"/> Add Overhead</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {fixedExpenses.map(item => <FixedExpenseRow key={item.id} item={item} onChange={handleFixedExpense.change} onRemove={handleFixedExpense.remove} />)}
            </div>
        </section>

        {/* === RESULTS SECTION === */}
        <div ref={reportRef} className="bg-white border-2 border-indigo-100 rounded-xl overflow-hidden mt-6 shadow-md">
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2">
                    <PieChart className="w-5 h-5"/> 
                    {scope === 'plant' ? 'Total Plant Costing & P&L Statement' : `${PRODUCT_CATALOG[selectedProduct]?.label || 'Product'} Costing Sheet`}
                </h2>
                <Badge variant="secondary" className="bg-white/20 text-white font-bold">{period.toUpperCase()} ANALYSIS</Badge>
            </div>
            
            <div className="p-4 bg-slate-50 border-b">
                <div className="flex justify-between text-xs mb-1 font-medium text-slate-600">
                    <span>Raw Material Cost Contribution ({results.costStructure.material.toFixed(0)}%)</span>
                    <span>Processing & Overheads Contribution ({results.costStructure.overhead.toFixed(0)}%)</span>
                </div>
                <div className="h-3 w-full flex rounded-full overflow-hidden">
                    <div className="bg-blue-500 animate-pulse" style={{ width: `${results.costStructure.material}%` }} />
                    <div className="bg-orange-400" style={{ width: `${results.costStructure.overhead}%` }} />
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <Table className="w-full min-w-[500px]">
                    <TableHeader className="bg-slate-100">
                        <TableRow>
                            <TableHead className="font-bold text-slate-700 pl-4">Cost/Revenue Component</TableHead>
                            <TableHead className="text-right font-bold text-slate-700 pr-4">Per Finished Unit (₹/Unit)</TableHead>
                            <TableHead className="text-right font-bold text-slate-700 pr-4">Total Period Total ({period === 'monthly' ? 'Monthly' : 'Daily'})</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="hover:bg-slate-50 border-b">
                            <TableCell className="font-semibold text-slate-700 pl-4">Saleable Output Revenue</TableCell>
                            <TableCell className="text-right font-bold text-slate-800 pr-4">₹ {parseFloat(inputs.avgSellingPrice).toFixed(2)}</TableCell>
                            <TableCell className="text-right font-black text-green-600 pr-4 text-base">₹ {fmt(results.totalRevenue)}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50 border-b">
                            <TableCell className="font-medium text-slate-600 pl-4">Raw Milk Cost (Raw Input)</TableCell>
                            <TableCell className="text-right text-slate-600 pr-4">₹ {results.unitRawCost.toFixed(2)}</TableCell>
                            <TableCell className="text-right text-red-500 pr-4">- ₹ {fmt(results.totalRawCost)}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50 border-b">
                            <TableCell className="font-medium text-slate-600 pl-4">Variable Processing (Packaging, Ingredients, Utilities)</TableCell>
                            <TableCell className="text-right text-slate-600 pr-4">₹ {results.unitVariableCoPVal.toFixed(2)}</TableCell>
                            <TableCell className="text-right text-red-400 pr-4">- ₹ {fmt(results.totalVariableCost - results.totalRawCost)}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50 border-b">
                            <TableCell className="font-medium text-slate-600 pl-4">Fixed Overheads Allocation</TableCell>
                            <TableCell className="text-right text-slate-600 pr-4">₹ {results.unitFixedCost.toFixed(2)}</TableCell>
                            <TableCell className="text-right text-red-400 pr-4">- ₹ {fmt(results.periodFixedCost)}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50 border-b-2 font-bold bg-slate-50">
                            <TableCell className="font-bold text-slate-800 pl-4">Total Cost of Production (CoP_total)</TableCell>
                            <TableCell className="text-right font-bold text-slate-800 pr-4">₹ {results.unitTotalCost.toFixed(2)}</TableCell>
                            <TableCell className="text-right font-bold text-red-600 pr-4">- ₹ {fmt(results.totalCost)}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50 border-b font-bold bg-indigo-50/30">
                            <TableCell className="font-bold text-indigo-900 pl-4">Gross Operating Profit (Pre-Tax)</TableCell>
                            <TableCell className={cn("text-right font-bold pr-4", results.unitNetProfit > 0 ? "text-indigo-700" : "text-red-600")}>
                                ₹ {results.unitNetProfit.toFixed(2)}
                            </TableCell>
                            <TableCell className={cn("text-right font-extrabold pr-4 text-base", results.netProfitPreTax > 0 ? "text-indigo-700" : "text-red-600")}>
                                ₹ {fmt(results.netProfitPreTax)}
                            </TableCell>
                        </TableRow>
                        {parseFloat(inputs.taxRate) > 0 && (
                            <TableRow className="text-sm border-b">
                                <TableCell className="pl-4 text-muted-foreground">Tax @ {inputs.taxRate}%</TableCell>
                                <TableCell className="text-right text-red-400 pr-4">₹ {(results.taxAmount / results.saleableQty || 0).toFixed(2)}</TableCell>
                                <TableCell className="text-right text-red-400 pr-4">- ₹ {fmt(results.taxAmount)}</TableCell>
                            </TableRow>
                        )}
                        <TableRow className="bg-indigo-600 text-white font-extrabold hover:bg-indigo-700">
                            <TableCell className="pl-4 text-sm uppercase tracking-wider font-bold">Net Profit (Post-Tax)</TableCell>
                            <TableCell className="text-right pr-4 text-sm font-black">₹ {results.unitNetProfit.toFixed(2)}</TableCell>
                            <TableCell className="text-right pr-4 text-lg font-black">₹ {fmt(results.netProfitPostTax)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            {/* Break-Even Progress Bar & Health Meter */}
            <div className="p-4 bg-slate-50/50 border-t border-b">
                <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1">
                        <Target className="h-3.5 w-3.5 text-indigo-600" />
                        Break-Even Analysis & Safety Margin
                    </span>
                    <span className={cn("font-extrabold px-2 py-0.5 rounded-full text-[10px]", results.safetyMarginPct > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                        {results.safetyMarginPct > 0 ? `Safety Buffer: +${results.safetyMarginPct.toFixed(1)}%` : `Loss Gap: ${results.safetyMarginPct.toFixed(1)}%`}
                    </span>
                </div>
                {results.safetyMarginPct > 0 ? (
                    <div className="space-y-1">
                        <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                            <div className="bg-indigo-600 h-full" style={{ width: `${Math.max(0, Math.min(100, results.breakEvenCapacityPct))}%` }} />
                            <div className="bg-green-500 h-full" style={{ width: `${Math.max(0, Math.min(100, results.safetyMarginPct))}%` }} />
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                            <span>0 L</span>
                            <span>Break-Even Target: {fmt(results.breakEvenUnits)} Units ({results.breakEvenCapacityPct.toFixed(0)}% capacity)</span>
                            <span className="font-bold text-green-600">Current: {fmt(results.saleableQty)} Units</span>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-1">
                        <div className="h-2.5 w-full bg-red-100 rounded-full overflow-hidden flex">
                            <div className="bg-red-500 h-full animate-pulse" style={{ width: "100%" }} />
                        </div>
                        <p className="text-[10px] text-red-600 font-medium">
                            ⚠️ Warning: Operating below break-even! You need to process at least <strong>{fmt(results.breakEvenUnits - results.saleableQty)} more units</strong> or increase Selling Price to survive.
                        </p>
                    </div>
                )}
            </div>

            {/* Industrial Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-slate-50">
                <PlantResultCard 
                    title="Net Profit Margin" 
                    value={`${results.netMargin.toFixed(1)}%`} 
                    unit="" 
                    icon={Percent} 
                    color={results.netMargin > 15 ? "border-green-300 bg-green-50 text-green-900" : (results.netMargin > 0 ? "border-yellow-300 bg-yellow-50 text-yellow-900" : "border-red-300 bg-red-50 text-red-900")} 
                    subtitle={results.netMargin > 0 ? "Profitable Operation" : "Operating at Loss"}
                />
                <PlantResultCard 
                    title="Cost of Processing (CoP)" 
                    value={`₹${results.unitCoPVal.toFixed(2)}`} 
                    unit="/Unit" 
                    icon={Factory} 
                    color="border-blue-300 bg-blue-50 text-blue-900" 
                    subtitle="Conversion overhead" 
                />
                <PlantResultCard 
                    title="Break Even Volume" 
                    value={fmt(results.breakEvenUnits)} 
                    unit="Units" 
                    icon={ArrowRight} 
                    color="border-indigo-300 bg-indigo-50 text-indigo-900" 
                    subtitle={`Min. Revenue: ₹${fmt(results.breakEvenRevenue)}`} 
                />
                <div className="p-3 rounded-xl border bg-white flex flex-col justify-between shadow-sm border-slate-200">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase font-bold text-slate-400">TAX & PROFITABILITY</span>
                        <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Tax Rate:</span>
                            <div className="flex items-center gap-1">
                                <Input className="h-5 w-12 text-right text-[10px] p-1 font-bold" value={inputs.taxRate} onChange={(e) => handleInputChange('taxRate', e.target.value)} />
                                <span>%</span>
                            </div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500">Margin / Unit:</span>
                            <span className="font-extrabold text-indigo-600">₹{results.unitNetProfit.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bilingual Working Principles & Factors Description */}
        <Card className="border border-slate-200 mt-6 bg-slate-50">
          <CardHeader className="p-4 pb-2 border-b">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Info className="h-4 w-4 text-indigo-600" />
              Costing Working Principles & Factors (लागत के कार्य सिद्धांत)
            </CardTitle>
            <CardDescription className="text-xs">
              Key operational parameters explained to remove confusion and build operational confidence.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm space-y-1">
                <span className="font-bold text-indigo-700 block text-xs">1. Yield Factor (उत्पादन अनुपात)</span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>English:</strong> Output produced per unit of raw input. For example, 1 Litre raw milk yields 1 Litre of Toned Milk (1.0), but 1 Kg raw milk yields 0.15 Kg Paneer (0.15).
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> 1 यूनिट कच्चे दूध से कितना तैयार उत्पाद बनता है। पनीर के लिए यह 0.15 (15%) है, यानी 100 लीटर दूध से 15 किलो पनीर बनेगा।
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm space-y-1">
                <span className="font-bold text-indigo-700 block text-xs">2. Process Loss (प्रक्रिया नुकसान)</span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>English:</strong> Percentage of volume lost during filtration, pasteurization, packaging, or pipe hold-ups. Reduces final saleable output.
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> प्रोसेसिंग के दौरान पाइपों में रुकने, फैलने या भाप बनने से होने वाला नुकसान। यह बिक्री योग्य मात्रा (Saleable Qty) को सीधे कम करता है।
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm space-y-1">
                <span className="font-bold text-indigo-700 block text-xs">3. Cost of Processing (CoP - प्रोसेसिंग लागत)</span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>English:</strong> Total cost of processing milk (excluding raw material cost) per unit of finished product. Includes packaging, additives, energy, logistics, and labor overheads.
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> कच्चे दूध को छोड़कर 1 किलो/लीटर तैयार उत्पाद बनाने में लगने वाला कुल खर्च (पैकेजिंग, बिजली, ईंधन, मजदूरी और किराया)। इसे कम रखना ही मुनाफे की कुंजी है।
                </p>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm space-y-1">
                <span className="font-bold text-indigo-700 block text-xs">4. Break-Even Point (BEP - सम-विच्छेद बिंदु)</span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>English:</strong> The volume of production where Total Revenue equals Total Cost. Below this point, the plant operates at a loss.
                </p>
                <p className="text-slate-500 italic">
                  <strong>Hindi:</strong> वह बिक्री स्तर जहाँ न कोई मुनाफा हो न नुकसान। इस मात्रा से अधिक बेचने पर ही प्लांट फायदे में आता है।
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg space-y-1.5">
              <span className="font-bold text-indigo-800 block text-xs flex items-center gap-1">
                <Calculator className="h-3.5 w-3.5" /> Formula Dictionary (गणना सूत्र)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-700 font-mono">
                <div>• Saleable Qty = Input × Yield × (1 - Loss%)</div>
                <div>• Contribution Margin = Price - Variable Cost / Unit</div>
                <div>• Break-Even Qty = Fixed Cost ÷ Contribution Margin</div>
                <div>• Safety Margin % = (Saleable Qty - Break-Even Qty) ÷ Saleable Qty</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button onClick={downloadPdf} disabled={isDownloading} className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-lg shadow-md mt-4 font-bold text-white">
            {isDownloading ? <Loader2 className="mr-2 animate-spin"/> : <FileDown className="mr-2"/>} Download Costing Report PDF
        </Button>

      </CardContent>
    </Card>
  );
}

// ... (PlantCostCalc upar khatam ho gaya)

// ════════════════════════════════════════════════════════════
// ADVANCED FAT & SNF MASS BALANCE CALCULATOR
// Drop-in Replacement for MassBalanceCalc()
//
// INSTRUCTIONS:
// 1. Apni file mein purana MemoizedInputRow + MassBalanceCalc() dhundhein
// 2. Pura block DELETE karein
// 3. Yeh poora code wahan PASTE karein
// Koi naya import nahi chahiye.
// ════════════════════════════════════════════════════════════

// ── INDUSTRY BENCHMARKS ───────────────────────────────────
const MB_BENCHMARKS = {
  fat: {
    worldClass:  0.10,  // % loss
    excellent:   0.25,
    good:        0.50,
    acceptable:  1.00,
    poor:        2.00,
  },
  snf: {
    worldClass:  0.15,
    excellent:   0.35,
    good:        0.70,
    acceptable:  1.50,
    poor:        3.00,
  },
} as const;

// ── SHIFT / PERIOD PRESETS ────────────────────────────────
const MB_PERIOD_PRESETS = {
  "Daily Shift":      { label: "Daily",   icon: "📅" },
  "Weekly":           { label: "Weekly",  icon: "📆" },
  "Monthly":          { label: "Monthly", icon: "🗓️" },
  "Custom Period":    { label: "Custom",  icon: "⚙️" },
} as const;

// ── PLANT TYPE PRESETS ────────────────────────────────────
const MB_PLANT_PRESETS = {
  "Small Dairy (5KL)": {
    openingFat: "150", openingSnf: "430",
    intakeFat: "325",  intakeSnf: "765",
    addedFat: "0",     addedSnf: "0",
    dispatchedFat: "410", dispatchedSnf: "1050",
    removedFat: "52",  removedSnf: "50",
    closingFat: "12",  closingSnf: "90",
  },
  "Medium Plant (25KL)": {
    openingFat: "800",  openingSnf: "2100",
    intakeFat: "1625",  intakeSnf: "3825",
    addedFat: "12",     addedSnf: "85",
    dispatchedFat: "2050", dispatchedSnf: "5400",
    removedFat: "260",  removedSnf: "250",
    closingFat: "110",  closingSnf: "340",
  },
  "Large Plant (100KL)": {
    openingFat: "3200",  openingSnf: "8400",
    intakeFat: "6500",   intakeSnf: "15300",
    addedFat: "50",      addedSnf: "340",
    dispatchedFat: "8200", dispatchedSnf: "21600",
    removedFat: "1040",  removedSnf: "1000",
    closingFat: "450",   closingSnf: "1360",
  },
} as const;

// ── MEMOIZED INPUT ROW ────────────────────────────────────
const MemoizedInputRow = memo(({
  label, fatName, snfName, inputs, onInputChange, icon, colorScheme = "slate"
}: {
  label: string;
  fatName: keyof MassBalanceInputs;
  snfName: keyof MassBalanceInputs;
  inputs: MassBalanceInputs;
  onInputChange: (field: keyof MassBalanceInputs, value: string) => void;
  icon?: string;
  colorScheme?: "green" | "red" | "slate";
}) => {
  const borderColor = colorScheme === "green" ? "focus:border-green-500" : colorScheme === "red" ? "focus:border-red-500" : "focus:border-blue-400";
  return (
    <div className="space-y-1">
      {/* Label — full width on its own line */}
      <div className="flex items-center gap-1.5">
        {icon && <span className="text-sm">{icon}</span>}
        <Label className="text-xs font-semibold text-slate-700 leading-tight">{label}</Label>
      </div>
      {/* Two inputs side by side */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-0.5">
          <span className="text-[9px] text-yellow-700 font-bold uppercase pl-0.5">Fat (kg)</span>
          <Input
            type="number" step="0.001" min="0"
            value={inputs[fatName]}
            onChange={e => onInputChange(fatName, e.target.value)}
            placeholder="0.000"
            className={`h-9 text-sm border-2 bg-white ${borderColor}`}
          />
        </div>
        <div className="space-y-0.5">
          <span className="text-[9px] text-pink-700 font-bold uppercase pl-0.5">SNF (kg)</span>
          <Input
            type="number" step="0.001" min="0"
            value={inputs[snfName]}
            onChange={e => onInputChange(snfName, e.target.value)}
            placeholder="0.000"
            className={`h-9 text-sm border-2 bg-white ${borderColor}`}
          />
        </div>
      </div>
    </div>
  );
});
MemoizedInputRow.displayName = "MemoizedInputRow";

// ── GAUGE COMPONENT ───────────────────────────────────────
function LossGauge({ pct, label }: { pct: number; label: string }) {
  const bm = label === "Fat" ? MB_BENCHMARKS.fat : MB_BENCHMARKS.snf;
  const getColor = (p: number) => {
    if (p <= bm.worldClass)  return { bar: "bg-emerald-500", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", grade: "World Class" };
    if (p <= bm.excellent)   return { bar: "bg-green-500",   text: "text-green-700",   badge: "bg-green-100 text-green-700",   grade: "Excellent"   };
    if (p <= bm.good)        return { bar: "bg-yellow-500",  text: "text-yellow-700",  badge: "bg-yellow-100 text-yellow-700",  grade: "Good"        };
    if (p <= bm.acceptable)  return { bar: "bg-orange-500",  text: "text-orange-700",  badge: "bg-orange-100 text-orange-700",  grade: "Acceptable"  };
    return                          { bar: "bg-red-500",     text: "text-red-700",     badge: "bg-red-100 text-red-700",        grade: "Poor ⚠️"     };
  };
  const c = getColor(Math.abs(pct));
  const barWidth = Math.min(Math.abs(pct) / bm.poor * 100, 100);
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-600">{label} Loss %</span>
        <div className="flex items-center gap-1">
          <span className={`text-xs font-black ${c.text}`}>{Math.abs(pct).toFixed(4)}%</span>
          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${c.badge}`}>{c.grade}</span>
        </div>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${c.bar}`} style={{ width: `${barWidth}%` }} />
      </div>
      <div className="flex justify-between text-[9px] text-slate-400">
        <span>0%</span>
        <span>World Class ≤{bm.worldClass}%</span>
        <span>Poor &gt;{bm.poor}%</span>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────
function MassBalanceCalc() {
  const { toast } = useToast();
  const reportRef = useRef<HTMLDivElement>(null);

  const [period,  setPeriod]  = useState<keyof typeof MB_PERIOD_PRESETS>("Daily Shift");
  const [activeTab, setActiveTab] = useState<"inputs" | "results" | "trend">("inputs");

  const [inputs, setInputs] = useState<MassBalanceInputs>({
    openingFat: "", openingSnf: "",
    intakeFat:  "", intakeSnf:  "",
    addedFat:   "", addedSnf:   "",
    dispatchedFat: "", dispatchedSnf: "",
    removedFat:    "", removedSnf:    "",
    closingFat:    "", closingSnf:    "",
  });

  // Optional: TP (Third Party) cream/butter removed separately
  const [extraRows, setExtraRows] = useState({
    creamFat: "", creamSnf: "",
    wasteWashFat: "", wasteWashSnf: "",
  });

  const [isDownloading, setIsDownloading] = useState(false);

  const handleInputChange = useCallback((field: keyof MassBalanceInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  }, []);

  // Apply plant preset
  const applyPreset = (name: keyof typeof MB_PLANT_PRESETS) => {
    setInputs(MB_PLANT_PRESETS[name] as MassBalanceInputs);
    toast({ title: "Preset Applied", description: name });
  };

  // Clear all
  const clearAll = () => {
    setInputs({
      openingFat: "", openingSnf: "", intakeFat: "", intakeSnf: "",
      addedFat: "", addedSnf: "", dispatchedFat: "", dispatchedSnf: "",
      removedFat: "", removedSnf: "", closingFat: "", closingSnf: "",
    });
    setExtraRows({ creamFat: "", creamSnf: "", wasteWashFat: "", wasteWashSnf: "" });
  };

  // ── CALCULATE (live, useMemo) ─────────────────────────
  const results = useMemo(() => {
    const n = (v: string) => parseFloat(v) || 0;

    // Inputs
    const opF  = n(inputs.openingFat);    const opS  = n(inputs.openingSnf);
    const inF  = n(inputs.intakeFat);     const inS  = n(inputs.intakeSnf);
    const adF  = n(inputs.addedFat);      const adS  = n(inputs.addedSnf);
    const crF  = n(extraRows.creamFat);   const crS  = n(extraRows.creamSnf);
    const wwF  = n(extraRows.wasteWashFat); const wwS = n(extraRows.wasteWashSnf);

    // Outputs
    const dispF = n(inputs.dispatchedFat); const dispS = n(inputs.dispatchedSnf);
    const remF  = n(inputs.removedFat);    const remS  = n(inputs.removedSnf);
    const clF   = n(inputs.closingFat);    const clS   = n(inputs.closingSnf);

    // Totals
    const totalInFat  = opF + inF + adF;
    const totalInSnf  = opS + inS + adS;
    const totalOutFat = dispF + remF + clF + crF + wwF;
    const totalOutSnf = dispS + remS + clS + crS + wwS;

    const gainLossFat = totalInFat - totalOutFat;
    const gainLossSnf = totalInSnf - totalOutSnf;

    const fatLossPct = totalInFat > 0 ? (Math.abs(gainLossFat) / totalInFat) * 100 : 0;
    const snfLossPct = totalInSnf > 0 ? (Math.abs(gainLossSnf) / totalInSnf) * 100 : 0;

    // Overall plant efficiency
    const productFat    = dispF;
    const fatEfficiency = totalInFat > 0 ? (productFat / totalInFat) * 100 : 0;
    const productSnf    = dispS;
    const snfEfficiency = totalInSnf > 0 ? (productSnf / totalInSnf) * 100 : 0;

    // Unaccounted (wash + misc losses)
    const unaccountedFat = gainLossFat - crF - wwF;
    const unaccountedSnf = gainLossSnf - crS - wwS;

    // Grade
    const getFatGrade = (p: number) => {
      const b = MB_BENCHMARKS.fat;
      if (p <= b.worldClass)  return { grade: "World Class 🏆", color: "text-emerald-700" };
      if (p <= b.excellent)   return { grade: "Excellent ✅",   color: "text-green-700"   };
      if (p <= b.good)        return { grade: "Good 👍",         color: "text-yellow-700"  };
      if (p <= b.acceptable)  return { grade: "Acceptable ⚠️",  color: "text-orange-700"  };
      return                         { grade: "Poor ❌",         color: "text-red-700"     };
    };
    const getSnfGrade = (p: number) => {
      const b = MB_BENCHMARKS.snf;
      if (p <= b.worldClass)  return { grade: "World Class 🏆", color: "text-emerald-700" };
      if (p <= b.excellent)   return { grade: "Excellent ✅",   color: "text-green-700"   };
      if (p <= b.good)        return { grade: "Good 👍",         color: "text-yellow-700"  };
      if (p <= b.acceptable)  return { grade: "Acceptable ⚠️",  color: "text-orange-700"  };
      return                         { grade: "Poor ❌",         color: "text-red-700"     };
    };

    const fatGrade = getFatGrade(fatLossPct);
    const snfGrade = getSnfGrade(snfLossPct);

    // Financial impact (assume ₹50/kg fat, ₹30/kg SNF)
    const fatLossVal = Math.abs(gainLossFat) * 50;
    const snfLossVal = Math.abs(gainLossSnf) * 30;
    const totalLossVal = fatLossVal + snfLossVal;

    return {
      opF, inF, adF, dispF, remF, clF, crF, wwF,
      opS, inS, adS, dispS, remS, clS, crS, wwS,
      totalInFat, totalInSnf,
      totalOutFat, totalOutSnf,
      gainLossFat, gainLossSnf,
      fatLossPct, snfLossPct,
      fatEfficiency, snfEfficiency,
      unaccountedFat, unaccountedSnf,
      fatGrade, snfGrade,
      fatLossVal, snfLossVal, totalLossVal,
    };
  }, [inputs, extraRows]);

  // ── PDF DOWNLOAD ──────────────────────────────────────
  const handleDownloadPdf = async () => {
    const el = reportRef.current;
    if (!el) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();
      const ratio = canvas.width / canvas.height;
      let iw = pw - 20;
      let ih = iw / ratio;
      if (ih > ph - 20) { ih = ph - 20; iw = ih * ratio; }
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", (pw - iw) / 2, 10, iw, ih);
      pdf.save(`mass_balance_${period.replace(/\s/g, "_")}_${new Date().toISOString().slice(0, 10)}.pdf`);
      toast({ title: "✅ PDF Downloaded", description: "Mass balance report saved." });
    } catch (e) {
      toast({ variant: "destructive", title: "PDF Error", description: "Could not generate PDF." });
    } finally {
      setIsDownloading(false);
    }
  };

  // ── RENDER ────────────────────────────────────────────
  return (
    <Card className="border-2 border-blue-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b border-blue-100">
        <CardTitle className="flex items-center gap-2 text-blue-800 text-base sm:text-xl">
          <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
          <span className="leading-tight">Fat & SNF Mass Balance</span>
        </CardTitle>
        {/* Live badges — on own row, wrappable */}
        <div className="flex flex-wrap gap-2 mt-1">
          <Badge className={`text-xs px-2 py-1 ${results.gainLossFat < 0 ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"}`}>
            Fat: {results.gainLossFat >= 0 ? "+" : ""}{results.gainLossFat.toFixed(3)} kg
          </Badge>
          <Badge className={`text-xs px-2 py-1 ${results.gainLossSnf < 0 ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"}`}>
            SNF: {results.gainLossSnf >= 0 ? "+" : ""}{results.gainLossSnf.toFixed(3)} kg
          </Badge>
        </div>
        <CardDescription className="text-blue-600 text-xs">
          Live balance · 5 benchmarks · Plant efficiency · Financial impact · PDF export
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">

        {/* ── PERIOD SELECTOR ──────────────────────────── */}
        <div className="space-y-2">
          <Label className="text-xs font-bold text-slate-500 uppercase">Period</Label>
          <div className="flex gap-2">
            {(Object.keys(MB_PERIOD_PRESETS) as Array<keyof typeof MB_PERIOD_PRESETS>).map(key => (
              <button key={key} onClick={() => setPeriod(key)}
                className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-all shadow-sm flex items-center gap-1
                  ${period === key
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                  }`}>
                {MB_PERIOD_PRESETS[key].icon} {MB_PERIOD_PRESETS[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* ── PLANT PRESETS ─────────────────────────────── */}
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-500 uppercase">Plant Presets (sample data)</Label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(MB_PLANT_PRESETS) as Array<keyof typeof MB_PLANT_PRESETS>).map(name => (
              <button key={name} onClick={() => applyPreset(name)}
                className="px-3 py-1 rounded-full border border-blue-200 bg-white text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                {name}
              </button>
            ))}
            <button onClick={clearAll}
              className="px-3 py-1 rounded-full border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm">
              🗑️ Clear All
            </button>
          </div>
        </div>

        {/* ── TABS ─────────────────────────────────────── */}
        <Tabs value={activeTab} onValueChange={v => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-3 bg-slate-100">
            <TabsTrigger value="inputs"  className="text-[11px] px-1">📥 Inputs</TabsTrigger>
            <TabsTrigger value="results" className="text-[11px] px-1">⚖️ Balance</TabsTrigger>
            <TabsTrigger value="trend"   className="text-[11px] px-1">📊 Analysis</TabsTrigger>
          </TabsList>

          {/* ════ TAB 1: INPUTS ════════════════════════ */}
          <TabsContent value="inputs" className="space-y-4 pt-3">

            {/* INPUTS block */}
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader className="p-3 pb-2 bg-green-50 border-b border-green-100">
                <CardTitle className="text-sm text-green-700 flex items-center gap-1 flex-wrap">
                  <Plus className="w-4 h-4" /> Total Inputs
                  <div className="ml-auto flex gap-2 text-xs font-semibold">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">F: {results.totalInFat.toFixed(2)}</span>
                    <span className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full">SNF: {results.totalInSnf.toFixed(2)}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <MemoizedInputRow label="Opening Balance" icon="🏭" fatName="openingFat" snfName="openingSnf" inputs={inputs} onInputChange={handleInputChange} colorScheme="green" />
                <MemoizedInputRow label="Total Intake (Milk)" icon="🥛" fatName="intakeFat" snfName="intakeSnf" inputs={inputs} onInputChange={handleInputChange} colorScheme="green" />
                <MemoizedInputRow label="Added (SMP / Veg fat / WPC)" icon="➕" fatName="addedFat" snfName="addedSnf" inputs={inputs} onInputChange={handleInputChange} colorScheme="green" />

                {/* Live total */}
                <div className="flex justify-between items-center bg-green-100 rounded-lg p-2 border border-green-200">
                  <span className="text-xs font-bold text-green-700">TOTAL IN</span>
                  <div className="flex gap-3 text-sm font-black text-green-800">
                    <span>F: {results.totalInFat.toFixed(3)}</span>
                    <span>SNF: {results.totalInSnf.toFixed(3)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OUTPUTS block */}
            <Card className="border-red-200 bg-red-50/30">
              <CardHeader className="p-3 pb-2 bg-red-50 border-b border-red-100">
                <CardTitle className="text-sm text-red-700 flex items-center gap-1 flex-wrap">
                  <Minus className="w-4 h-4" /> Total Outputs
                  <div className="ml-auto flex gap-2 text-xs font-semibold">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">F: {results.totalOutFat.toFixed(2)}</span>
                    <span className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full">SNF: {results.totalOutSnf.toFixed(2)}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <MemoizedInputRow label="Dispatched (Products)" icon="🚚" fatName="dispatchedFat" snfName="dispatchedSnf" inputs={inputs} onInputChange={handleInputChange} colorScheme="red" />
                <MemoizedInputRow label="Removed (Cream/Butter)" icon="🧈" fatName="removedFat" snfName="removedSnf" inputs={inputs} onInputChange={handleInputChange} colorScheme="red" />
                <MemoizedInputRow label="Closing Balance" icon="🏭" fatName="closingFat" snfName="closingSnf" inputs={inputs} onInputChange={handleInputChange} colorScheme="red" />

                {/* Extended outputs — same stacked pattern */}
                <div className="border-t border-red-100 pt-2 space-y-3">
                  <div className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Optional (detailed accounting)</div>

                  {/* Cream Dispatch */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">🥤</span>
                      <Label className="text-xs font-semibold text-slate-600">Cream Dispatch</Label>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-yellow-700 font-bold uppercase pl-0.5">Fat (kg)</span>
                        <Input type="number" step="0.001" min="0" value={extraRows.creamFat}
                          onChange={e => setExtraRows(p => ({ ...p, creamFat: e.target.value }))}
                          placeholder="0.000" className="h-9 text-sm border-2 bg-white" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-pink-700 font-bold uppercase pl-0.5">SNF (kg)</span>
                        <Input type="number" step="0.001" min="0" value={extraRows.creamSnf}
                          onChange={e => setExtraRows(p => ({ ...p, creamSnf: e.target.value }))}
                          placeholder="0.000" className="h-9 text-sm border-2 bg-white" />
                      </div>
                    </div>
                  </div>

                  {/* CIP/Wash */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">🚿</span>
                      <Label className="text-xs font-semibold text-slate-600">CIP/Wash Loss</Label>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-yellow-700 font-bold uppercase pl-0.5">Fat (kg)</span>
                        <Input type="number" step="0.001" min="0" value={extraRows.wasteWashFat}
                          onChange={e => setExtraRows(p => ({ ...p, wasteWashFat: e.target.value }))}
                          placeholder="0.000" className="h-9 text-sm border-2 bg-white" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-pink-700 font-bold uppercase pl-0.5">SNF (kg)</span>
                        <Input type="number" step="0.001" min="0" value={extraRows.wasteWashSnf}
                          onChange={e => setExtraRows(p => ({ ...p, wasteWashSnf: e.target.value }))}
                          placeholder="0.000" className="h-9 text-sm border-2 bg-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live total */}
                <div className="flex justify-between items-center bg-red-100 rounded-lg p-2 border border-red-200">
                  <span className="text-xs font-bold text-red-700">TOTAL OUT</span>
                  <div className="flex gap-3 text-sm font-black text-red-800">
                    <span>F: {results.totalOutFat.toFixed(3)}</span>
                    <span>SNF: {results.totalOutSnf.toFixed(3)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ════ TAB 2: RESULTS ════════════════════════ */}
          <TabsContent value="results" className="space-y-4 pt-3">
            <div ref={reportRef} className="space-y-4">

              {/* Period label */}
              <div className="flex items-center gap-2 text-xs text-blue-600 font-bold">
                <span>{MB_PERIOD_PRESETS[period].icon}</span>
                <span>{period} Mass Balance Report — {new Date().toLocaleDateString("en-IN")}</span>
              </div>

              {/* Main KPIs */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Total Fat IN",   value: results.totalInFat,  color: "bg-green-600"  },
                  { label: "Total Fat OUT",  value: results.totalOutFat, color: "bg-red-600"    },
                  { label: "Total SNF IN",   value: results.totalInSnf,  color: "bg-green-700"  },
                  { label: "Total SNF OUT",  value: results.totalOutSnf, color: "bg-red-700"    },
                ].map((k, i) => (
                  <div key={i} className={`${k.color} text-white p-3 rounded-xl text-center shadow`}>
                    <div className="text-[10px] uppercase opacity-80 font-bold leading-tight">{k.label}</div>
                    <div className="text-2xl sm:text-3xl font-black break-all">{k.value.toFixed(2)}</div>
                    <div className="text-[10px] opacity-70">kg</div>
                  </div>
                ))}
              </div>

              {/* Gain / Loss boxes */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: `Fat ${results.gainLossFat >= 0 ? "Gain" : "Loss"}`,
                    val: results.gainLossFat,
                    pct: results.fatLossPct,
                    grade: results.fatGrade,
                  },
                  {
                    label: `SNF ${results.gainLossSnf >= 0 ? "Gain" : "Loss"}`,
                    val: results.gainLossSnf,
                    pct: results.snfLossPct,
                    grade: results.snfGrade,
                  },
                ].map((k, i) => (
                  <div key={i} className={`p-4 rounded-xl border-2 shadow ${
                    k.val >= 0
                      ? "bg-blue-50 border-blue-300"
                      : "bg-orange-50 border-orange-300"
                  }`}>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-600 mb-1">
                      {k.val >= 0 ? <CheckCircle2 className="w-3 h-3 text-blue-600" /> : <AlertTriangle className="w-3 h-3 text-orange-600" />}
                      {k.label}
                    </div>
                    <div className={`text-3xl font-black font-mono ${k.val >= 0 ? "text-blue-800" : "text-orange-800"}`}>
                      {k.val >= 0 ? "+" : ""}{k.val.toFixed(4)}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">kg ({k.pct.toFixed(4)}%)</div>
                    <div className={`text-xs font-black mt-1 ${k.grade.color}`}>{k.grade.grade}</div>
                  </div>
                ))}
              </div>

              {/* Loss gauges */}
              <Card className="bg-white border-blue-100">
                <CardHeader className="p-3 pb-1 border-b border-blue-100">
                  <CardTitle className="text-xs font-bold text-blue-700 uppercase">📊 Industry Benchmark Comparison</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-4">
                  <LossGauge pct={results.fatLossPct} label="Fat" />
                  <LossGauge pct={results.snfLossPct} label="SNF" />
                  <div className="text-[10px] text-slate-400 flex justify-between font-mono">
                    <span>🏆 World Class: Fat ≤{MB_BENCHMARKS.fat.worldClass}% | SNF ≤{MB_BENCHMARKS.snf.worldClass}%</span>
                    <span>❌ Poor: Fat &gt;{MB_BENCHMARKS.fat.poor}% | SNF &gt;{MB_BENCHMARKS.snf.poor}%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Plant efficiency */}
              <Card className="bg-indigo-50 border-indigo-200">
                <CardHeader className="p-3 pb-1 border-b border-indigo-100">
                  <CardTitle className="text-xs font-bold text-indigo-700 uppercase">🏭 Plant Recovery Efficiency</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2 text-sm">
                  {[
                    { label: "Fat recovery", sub: "dispatched / total in", value: `${results.fatEfficiency.toFixed(2)}%`,  ok: results.fatEfficiency >= 96 },
                    { label: "SNF recovery", sub: "dispatched / total in", value: `${results.snfEfficiency.toFixed(2)}%`,  ok: results.snfEfficiency >= 94 },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <div className="text-slate-700 font-semibold">{r.label}</div>
                        <div className="text-[10px] text-slate-400">{r.sub}</div>
                      </div>
                      <span className={`font-black text-lg ${r.ok ? "text-green-700" : "text-orange-600"}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Financial impact */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none">
                <CardContent className="p-3 space-y-2 text-sm">
                  <div className="text-xs text-slate-300 font-bold uppercase mb-2">💸 Financial Impact of Losses</div>
                  {[
                    { label: "Fat loss value",   value: `₹${results.fatLossVal.toFixed(0)}`,   color: "text-orange-300", note: "@ ₹50/kg fat"  },
                    { label: "SNF loss value",   value: `₹${results.snfLossVal.toFixed(0)}`,   color: "text-yellow-300", note: "@ ₹30/kg SNF"  },
                    { label: "Total loss value", value: `₹${results.totalLossVal.toFixed(0)}`, color: "text-red-300 font-black text-base", note: "per period"     },
                  ].map((r, i) => (
                    <div key={i} className={`flex justify-between ${i === 2 ? "border-t border-slate-700 pt-2" : ""}`}>
                      <span className="text-slate-400">{r.label} <span className="text-[10px] opacity-60">({r.note})</span></span>
                      <span className={`font-bold ${r.color}`}>{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Detailed steps */}
              <Card className="bg-slate-50 border-slate-200">
                <CardHeader className="p-3 pb-1 border-b border-slate-200">
                  <CardTitle className="text-xs font-bold text-slate-600 uppercase">🧮 Step-by-Step Calculation</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-72">
                    <div className="p-3 space-y-2 text-[11px]">

                      <div className="font-bold text-green-700 text-xs border-b border-green-200 pb-1">📥 FAT INPUTS</div>
                      {[
                        { label: "Opening",    val: results.opF  },
                        { label: "+ Intake",   val: results.inF  },
                        { label: "+ Added",    val: results.adF  },
                        { label: "= Total IN", val: results.totalInFat, bold: true, color: "text-green-700" },
                      ].map((r, i) => (
                        <div key={i} className={`flex justify-between ${(r as any).bold ? "font-bold border-t border-green-200 pt-1 " + ((r as any).color || "") : "text-slate-600"}`}>
                          <span>{r.label}</span><span>{r.val.toFixed(3)} kg</span>
                        </div>
                      ))}

                      <div className="font-bold text-green-700 text-xs border-b border-green-200 pb-1 mt-3">📥 SNF INPUTS</div>
                      {[
                        { label: "Opening",    val: results.opS  },
                        { label: "+ Intake",   val: results.inS  },
                        { label: "+ Added",    val: results.adS  },
                        { label: "= Total IN", val: results.totalInSnf, bold: true, color: "text-green-700" },
                      ].map((r, i) => (
                        <div key={i} className={`flex justify-between ${(r as any).bold ? "font-bold border-t border-green-200 pt-1 " + ((r as any).color || "") : "text-slate-600"}`}>
                          <span>{r.label}</span><span>{r.val.toFixed(3)} kg</span>
                        </div>
                      ))}

                      <div className="font-bold text-red-700 text-xs border-b border-red-200 pb-1 mt-3">📤 FAT OUTPUTS</div>
                      {[
                        { label: "Dispatched",  val: results.dispF },
                        { label: "+ Removed",   val: results.remF  },
                        { label: "+ Closing",   val: results.clF   },
                        { label: "+ Cream",     val: results.crF   },
                        { label: "+ CIP/Wash",  val: results.wwF   },
                        { label: "= Total OUT", val: results.totalOutFat, bold: true, color: "text-red-700" },
                      ].map((r, i) => (
                        <div key={i} className={`flex justify-between ${(r as any).bold ? "font-bold border-t border-red-200 pt-1 " + ((r as any).color || "") : "text-slate-600"}`}>
                          <span>{r.label}</span><span>{r.val.toFixed(3)} kg</span>
                        </div>
                      ))}

                      <div className="font-bold text-red-700 text-xs border-b border-red-200 pb-1 mt-3">📤 SNF OUTPUTS</div>
                      {[
                        { label: "Dispatched",  val: results.dispS },
                        { label: "+ Removed",   val: results.remS  },
                        { label: "+ Closing",   val: results.clS   },
                        { label: "+ Cream",     val: results.crS   },
                        { label: "+ CIP/Wash",  val: results.wwS   },
                        { label: "= Total OUT", val: results.totalOutSnf, bold: true, color: "text-red-700" },
                      ].map((r, i) => (
                        <div key={i} className={`flex justify-between ${(r as any).bold ? "font-bold border-t border-red-200 pt-1 " + ((r as any).color || "") : "text-slate-600"}`}>
                          <span>{r.label}</span><span>{r.val.toFixed(3)} kg</span>
                        </div>
                      ))}

                      <div className="font-bold text-blue-700 text-xs border-b border-blue-200 pb-1 mt-3">⚖️ RECONCILIATION</div>
                      {[
                        { label: "FAT: In − Out",  val: `${results.gainLossFat.toFixed(4)} kg`, status: results.gainLossFat >= 0 ? "GAIN" : "LOSS", color: results.gainLossFat >= 0 ? "text-blue-700" : "text-orange-700" },
                        { label: "FAT Loss %",      val: `${results.fatLossPct.toFixed(4)}%`,   status: results.fatGrade.grade, color: results.fatGrade.color },
                        { label: "SNF: In − Out",   val: `${results.gainLossSnf.toFixed(4)} kg`, status: results.gainLossSnf >= 0 ? "GAIN" : "LOSS", color: results.gainLossSnf >= 0 ? "text-blue-700" : "text-orange-700" },
                        { label: "SNF Loss %",      val: `${results.snfLossPct.toFixed(4)}%`,   status: results.snfGrade.grade, color: results.snfGrade.color },
                      ].map((r, i) => (
                        <div key={i} className={`flex justify-between font-bold ${r.color}`}>
                          <span>{r.label}</span>
                          <span>{r.val} ({r.status})</span>
                        </div>
                      ))}

                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* ════ TAB 3: ANALYSIS ═══════════════════════ */}
          <TabsContent value="trend" className="space-y-4 pt-3">

            {/* Waterfall-style flow */}
            <Card className="bg-white border-blue-100">
              <CardHeader className="p-3 pb-1 border-b border-blue-100">
                <CardTitle className="text-sm font-bold text-blue-700">🌊 Flow Waterfall (Fat kg)</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                {[
                  { label: "Opening",    val: results.opF,                  color: "bg-slate-400",  type: "+" },
                  { label: "Intake",     val: results.inF,                  color: "bg-green-500",  type: "+" },
                  { label: "Added",      val: results.adF,                  color: "bg-teal-400",   type: "+" },
                  { label: "Dispatched", val: -results.dispF,               color: "bg-red-500",    type: "−" },
                  { label: "Removed",    val: -results.remF,                color: "bg-orange-500", type: "−" },
                  { label: "CIP/Wash",   val: -results.wwF,                 color: "bg-yellow-500", type: "−" },
                  { label: "Closing",    val: -results.clF,                 color: "bg-slate-600",  type: "−" },
                  { label: "Net G/L",    val: results.gainLossFat,          color: results.gainLossFat >= 0 ? "bg-blue-500" : "bg-red-600", type: results.gainLossFat >= 0 ? "+" : "−" },
                ].map((r, i) => {
                  const maxVal = results.totalInFat || 1;
                  const w = Math.min(Math.abs(r.val) / maxVal * 100, 100);
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-20 text-[10px] text-slate-600 font-semibold text-right">{r.label}</div>
                      <div className="flex-1 h-5 bg-slate-100 rounded overflow-hidden">
                        <div className={`h-full ${r.color} flex items-center px-1 rounded`} style={{ width: `${w}%` }}>
                          <span className="text-[9px] text-white font-bold truncate">{r.type}{Math.abs(r.val).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Unaccounted loss breakdown */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="p-3 pb-1 border-b border-amber-100">
                <CardTitle className="text-sm font-bold text-amber-700">🔍 Unaccounted Loss Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 text-sm">
                <p className="text-xs text-amber-600">Unaccounted = Total loss − CIP/wash losses (these go unrecorded)</p>
                {[
                  { label: "Unaccounted Fat loss",   value: results.unaccountedFat, unit: "kg" },
                  { label: "Unaccounted SNF loss",   value: results.unaccountedSnf, unit: "kg" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-500">{r.label}</span>
                    <span className={`font-bold ${Math.abs(r.value) > 0.5 ? "text-red-600" : "text-green-600"}`}>
                      {r.value.toFixed(4)} {r.unit}
                    </span>
                  </div>
                ))}
                <Alert className="bg-white border-amber-200 mt-2">
                  <AlertDescription className="text-xs text-amber-700">
                    💡 Common causes: Measurement error, leakage, unrecorded samples, residue in pipes, weighment variance. Audit cream separator and dispatch weighment.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Benchmark table */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="p-3 pb-1 border-b border-slate-200">
                <CardTitle className="text-xs font-bold text-slate-600 uppercase">📜 Industry Loss Benchmarks</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-1">
                {[
                  { grade: "World Class", fatMax: 0.10, snfMax: 0.15, icon: "🏆" },
                  { grade: "Excellent",   fatMax: 0.25, snfMax: 0.35, icon: "✅" },
                  { grade: "Good",        fatMax: 0.50, snfMax: 0.70, icon: "👍" },
                  { grade: "Acceptable",  fatMax: 1.00, snfMax: 1.50, icon: "⚠️" },
                  { grade: "Poor",        fatMax: 2.00, snfMax: 3.00, icon: "❌" },
                ].map((b, i) => {
                  const isCurrent = results.fatGrade.grade.includes(b.grade) || results.snfGrade.grade.includes(b.grade);
                  return (
                    <div key={i} className={`flex justify-between items-center text-xs py-1.5 px-2 border-b border-slate-100 rounded ${isCurrent ? "bg-blue-50 font-bold" : ""}`}>
                      <span className="flex items-center gap-1 w-28">{b.icon} {b.grade}</span>
                      <span className="text-yellow-700">Fat ≤{b.fatMax}%</span>
                      <span className="text-pink-700">SNF ≤{b.snfMax}%</span>
                      {isCurrent && <span className="text-blue-600 text-[10px]">◀ Now</span>}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* ── DOWNLOAD ─────────────────────────────────── */}
        <div className="flex gap-3">
          <Button onClick={handleDownloadPdf} disabled={isDownloading}
            className="flex-1 h-11 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold shadow-md">
            {isDownloading
              ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Generating PDF...</>
              : <><FileDown className="mr-2 w-4 h-4" />Download Report (PDF)</>
            }
          </Button>
          <Button variant="outline" onClick={() => setActiveTab("results")} className="h-11 px-4 border-2 border-blue-200 text-blue-700 font-bold">
            View Report
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}
