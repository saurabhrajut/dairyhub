
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
  Banknote       // Rate Calculation
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
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// ==================== ENHANCED INTERFACES ===========================

interface ValidationResult {
    isValid: boolean;
    message?: string;
    severity: "error" | "warning" | "info";
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
  colorScheme?: "blue" | "green" | "purple" | "orange" | "pink";
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

// ==================== ENHANCED PANEER YIELD CALCULATOR ====================
function PaneerYieldCalc() {
  const [activeCalc, setActiveCalc] = useState<"theoretical" | "actual">(
    "theoretical"
  );
  const { validatePositive, validatePercentage } = useInputValidation();
  const { toast } = useToast();

  // Theoretical calculation state
  const [milkQtyLtr, setMilkQtyLtr] = useState("100");
  const [fatPercent, setFatPercent] = useState("6.0");
  const [snfPercent, setSnfPercent] = useState("9.0");
  const [fatRecovery, setFatRecovery] = useState("90");
  const [caseinRecovery, setCaseinRecovery] = useState("93");
  const [finalMoisture, setFinalMoisture] = useState("55");
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Actual calculation state
  const [milkUsed, setMilkUsed] = useState("");
  const [paneerObtained, setPaneerObtained] = useState("");
  const [actualResult, setActualResult] = useState<CalculationResult | null>(
    null
  );

  // Validation states
  const milkValidation = useMemo(
    () => validatePositive(milkQtyLtr, "Milk quantity"),
    [milkQtyLtr, validatePositive]
  );
  const fatValidation = useMemo(
    () => validatePercentage(fatPercent, "Fat percentage"),
    [fatPercent, validatePercentage]
  );
  const snfValidation = useMemo(
    () => validatePercentage(snfPercent, "SNF percentage"),
    [snfPercent, validatePercentage]
  );

  const handleTheoreticalCalc = useCallback(() => {
    const validations = [
      validatePositive(milkQtyLtr, "Milk quantity"),
      validatePercentage(fatPercent, "Fat percentage"),
      validatePercentage(snfPercent, "SNF percentage"),
      validatePercentage(fatRecovery, "Fat recovery"),
      validatePercentage(caseinRecovery, "Casein recovery"),
      validatePercentage(finalMoisture, "Final moisture"),
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

    const qty = parseFloat(milkQtyLtr);
    const fat = parseFloat(fatPercent);
    const snf = parseFloat(snfPercent);
    const fRec = parseFloat(fatRecovery) / 100;
    const cRec = parseFloat(caseinRecovery) / 100;
    const moisture = parseFloat(finalMoisture) / 100;

    const caseinInSnf = 0.77;
    const milkDensity = 1.032;
    const milkWeightKg = qty * milkDensity;

    const totalFatKg = milkWeightKg * (fat / 100);
    const totalSnfKg = milkWeightKg * (snf / 100);
    const totalCaseinKg = totalSnfKg * caseinInSnf;

    const recoveredFatKg = totalFatKg * fRec;
    const recoveredCaseinKg = totalCaseinKg * cRec;
    const totalRecoveredSolidsKg = recoveredFatKg + recoveredCaseinKg;

    const paneerYieldKg = totalRecoveredSolidsKg / (1 - moisture);
    const yieldPercentage = (paneerYieldKg / milkWeightKg) * 100;

    let confidence: "high" | "medium" | "low" = "high";
    const warnings: string[] = [];

    if (fat < 4 || fat > 8) {
      confidence = "medium";
      warnings.push(
        "Fat percentage is outside typical range (4-8%). Results may vary."
      );
    }
    if (fRec < 0.85 || cRec < 0.9) {
      confidence = "medium";
      warnings.push("Low recovery rates may indicate process inefficiencies.");
    }
    if (moisture > 0.6 || moisture < 0.5) {
      warnings.push(
        "Moisture content is outside FSSAI recommended range (50-60%)."
      );
    }

    setResult({
      value: paneerYieldKg,
      unit: "kg",
      confidence,
      warnings,
      metadata: {
        yieldPercentage: yieldPercentage.toFixed(3),
        milkWeight: milkWeightKg.toFixed(3),
        recoveredFat: recoveredFatKg.toFixed(3),
        recoveredCasein: recoveredCaseinKg.toFixed(3),
      },
    });

    toast({
      title: "Calculation Complete",
      description: `Theoretical yield: ${paneerYieldKg.toFixed(3)} kg`,
    });
  }, [
    milkQtyLtr,
    fatPercent,
    snfPercent,
    fatRecovery,
    caseinRecovery,
    finalMoisture,
    validatePositive,
    validatePercentage,
    toast,
  ]);

  const handleActualCalc = useCallback(() => {
    const milk = parseFloat(milkUsed);
    const paneer = parseFloat(paneerObtained);

    const validations = [
      validatePositive(milkUsed, "Milk used"),
      validatePositive(paneerObtained, "Paneer obtained"),
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

    if (paneer > milk) {
      toast({
        title: "Invalid Input",
        description: "Paneer weight cannot exceed milk weight",
        variant: "destructive",
      });
      return;
    }

    const actualYield = (paneer / milk) * 100;
    const warnings: string[] = [];
    let confidence: "high" | "medium" | "low" = "high";

    if (actualYield < 12) {
      confidence = "low";
      warnings.push(
        "Yield is below industry standard (12-18%). Check process parameters."
      );
    } else if (actualYield > 18) {
      confidence = "medium";
      warnings.push("Yield is above typical range. Verify moisture content.");
    }

    setActualResult({
      value: actualYield,
      unit: "%",
      confidence,
      warnings,
      metadata: {
        paneerKg: paneer,
        milkKg: milk,
      },
    });

    toast({
      title: "Calculation Complete",
      description: `Actual yield: ${actualYield.toFixed(3)}%`,
    });
  }, [milkUsed, paneerObtained, validatePositive, toast]);

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <PaneerIcon className="h-6 sm:h-7 w-6 sm:w-7 text-green-600" />
          Advanced Paneer Yield Calculator
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Scientific precision calculations with FSSAI standards validation
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* DROPDOWN for sub-calculator selection - BOTH Mobile & Desktop */}
        <div className="mb-6">
          <Label className="text-sm font-semibold mb-3 block">
            Select Calculation Type
          </Label>
          <Select value={activeCalc} onValueChange={(v) => setActiveCalc(v as any)}>
            <SelectTrigger className="w-full h-12 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="theoretical">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-600" />
                  <span>Theoretical Yield</span>
                </div>
              </SelectItem>
              <SelectItem value="actual">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  <span>Actual Yield</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="border-t pt-6">
          {activeCalc === "theoretical" && (
            <div className="space-y-6">
              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4" />
                <AlertTitle className="text-sm sm:text-base">
                  Theoretical Prediction
                </AlertTitle>
                <AlertDescription className="text-xs sm:text-sm">
                  Estimate paneer yield before production based on milk composition
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <ValidatedInput
                  label="Milk Quantity"
                  value={milkQtyLtr}
                  onChange={setMilkQtyLtr}
                  validation={milkValidation}
                  unit="Litres"
                  icon={<Droplets className="h-4 w-4 text-blue-500" />}
                  helpText="Total milk volume for processing"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Final Moisture"
                  value={finalMoisture}
                  onChange={setFinalMoisture}
                  validation={validatePercentage(finalMoisture)}
                  unit="%"
                  icon={<Droplets className="h-4 w-4 text-cyan-500" />}
                  helpText="FSSAI: 50-60%"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Milk Fat"
                  value={fatPercent}
                  onChange={setFatPercent}
                  validation={fatValidation}
                  unit="%"
                  icon={<Target className="h-4 w-4 text-green-500" />}
                  helpText="Typical: 4-8%"
                  colorScheme="green"
                />
                <ValidatedInput
                  label="Fat Recovery"
                  value={fatRecovery}
                  onChange={setFatRecovery}
                  validation={validatePercentage(fatRecovery)}
                  unit="%"
                  icon={<ChevronsUp className="h-4 w-4 text-green-600" />}
                  helpText="Standard: 85-95%"
                  colorScheme="green"
                />
                <ValidatedInput
                  label="Milk SNF"
                  value={snfPercent}
                  onChange={setSnfPercent}
                  validation={snfValidation}
                  unit="%"
                  icon={<Weight className="h-4 w-4 text-purple-500" />}
                  helpText="Typical: 8.5-10%"
                  colorScheme="purple"
                />
                <ValidatedInput
                  label="Casein Recovery"
                  value={caseinRecovery}
                  onChange={setCaseinRecovery}
                  validation={validatePercentage(caseinRecovery)}
                  unit="%"
                  icon={<ChevronsUp className="h-4 w-4 text-purple-600" />}
                  helpText="Standard: 90-95%"
                  colorScheme="purple"
                />
              </div>

              <Button
                onClick={handleTheoreticalCalc}
                className="w-full h-11 sm:h-12 text-sm sm:text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                size="lg"
              >
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculate Theoretical Yield
              </Button>

              {result && (
                <div className="space-y-4 animate-in slide-in-from-bottom-4">
                  <ResultCard
                    title="Estimated Paneer Yield"
                    value={result.value}
                    unit={result.unit}
                    confidence={result.confidence}
                    icon={<PaneerIcon className="h-5 w-5" />}
                    colorScheme="green"
                    subtitle={`Yield: ${result.metadata?.yieldPercentage}% | Milk: ${result.metadata?.milkWeight} kg`}
                    warnings={result.warnings}
                  />

                  <Card className="bg-gradient-to-br from-slate-50 to-slate-100">
                    <CardHeader>
                      <CardTitle className="text-base sm:text-lg">
                        Detailed Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Recovered Fat:</span>
                        <span className="text-green-700 font-semibold">
                          {result.metadata?.recoveredFat} kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Recovered Casein:</span>
                        <span className="text-purple-700 font-semibold">
                          {result.metadata?.recoveredCasein} kg
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="font-bold">Total Milk Weight:</span>
                        <span className="text-blue-700 font-bold">
                          {result.metadata?.milkWeight} kg
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}

          {activeCalc === "actual" && (
            <div className="space-y-6">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle className="text-sm sm:text-base">
                  Actual Production Analysis
                </AlertTitle>
                <AlertDescription className="text-xs sm:text-sm">
                  Calculate actual yield and compare with industry benchmarks
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <ValidatedInput
                  label="Total Milk Used"
                  value={milkUsed}
                  onChange={setMilkUsed}
                  validation={validatePositive(milkUsed)}
                  unit="kg"
                  icon={<Weight className="h-4 w-4 text-blue-500" />}
                  placeholder="e.g., 103.2"
                  helpText="Actual milk processed"
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Paneer Obtained"
                  value={paneerObtained}
                  onChange={setPaneerObtained}
                  validation={validatePositive(paneerObtained)}
                  unit="kg"
                  icon={<PaneerIcon className="h-4 w-4 text-green-500" />}
                  placeholder="e.g., 15.8"
                  helpText="Final paneer weight"
                  colorScheme="green"
                />
              </div>

              <Button
                onClick={handleActualCalc}
                className="w-full h-11 sm:h-12 text-sm sm:text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                size="lg"
              >
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculate Actual Yield
              </Button>

              {actualResult && (
                <div className="space-y-4 animate-in slide-in-from-bottom-4">
                  <ResultCard
                    title="Actual Yield Percentage"
                    value={actualResult.value}
                    unit={actualResult.unit}
                    confidence={actualResult.confidence}
                    icon={<CheckCircle2 className="h-5 w-5" />}
                    colorScheme="blue"
                    subtitle={`${actualResult.metadata?.paneerKg} kg from ${actualResult.metadata?.milkKg} kg milk`}
                    warnings={actualResult.warnings}
                  />

                  <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-200">
                    <Info className="h-4 w-4 text-orange-600" />
                    <AlertTitle className="text-orange-900 text-sm sm:text-base">
                      Industry Benchmark
                    </AlertTitle>
                    <AlertDescription className="text-orange-800 text-xs sm:text-sm">
                      Standard paneer yield: <strong>12-18%</strong> depending on
                      milk quality
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </div>
          )}
        </div>
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

  const [result, setResult] = useState(null);
  const [showSteps, setShowSteps] = useState(false);

  const set = (k, v) => setInputs(p => ({ ...p, [k]: v }));

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

  const InputRow = ({ label, k, suffix, help }) => (
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
                {result.warnings.map((w, i) => <div key={i}>⚠️ {w}</div>)}
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

  const [result, setResult] = useState(null);
  const set = (k, v) => setInputs(p => ({ ...p, [k]: v }));

  // Latent heat of vaporization table by temp (°C → kJ/kg)
  const latentHeat = (T) => {
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

  const InputRow = ({ label, k, suffix, help }) => (
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
                {result.warnings.map((w, i) => <div key={i}>⚠️ {w}</div>)}
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

  const [result, setResult] = useState(null);
  const set = (k, v) => setInputs(p => ({ ...p, [k]: v }));

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

  const InputRow = ({ label, k, suffix, help }) => (
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
                {result.warnings.map((w, i) => <div key={i}>⚠️ {w}</div>)}
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
// ══════════════════════════════════════════════════════════════
// SIRF YAHI FUNCTION COPY KARO — apni file mein purana
// YieldsCalc function delete karke yeh paste karo.
// Baaki sab same rahega.
// ══════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════
// 2. ADVANCED GHEE RECOVERY & LOSS CALCULATOR
// Industry Standard: Fat Balance Method
// ════════════════════════════════════════════════════════════
export function GheeRecoveryCalc() {
  const [inputs, setInputs] = useState({
    inputType: "butter", // butter | cream
    quantity: "1000",    // kg
    fatPercent: "82",    // % (White Butter usually 80-82%, Cream 40-60%)
    moisture: "16",      // % moisture in input
    efficiency: "98.5",  // % Fat Recovery Efficiency (Industrial standard)
    gheePrice: "550",    // ₹/kg
    residuePrice: "40",  // ₹/kg (Ghee Residue/Khurchan)
  });

  const [result, setResult] = useState<any>(null);

  const calculate = useCallback(() => {
    const Q = parseFloat(inputs.quantity) || 0;
    const Fat = parseFloat(inputs.fatPercent) / 100;
    const Eff = parseFloat(inputs.efficiency) / 100;
    const GheeRate = parseFloat(inputs.gheePrice);
    const ResidueRate = parseFloat(inputs.residuePrice);

    // 1. Total Fat Available
    const totalFatInput = Q * Fat;

    // 2. Expected Ghee Yield (Pure Fat recovered)
    // Ghee is 99.7% fat, usually calculated as pure fat * efficiency
    const gheeYieldKg = (totalFatInput * Eff) / 0.997; 

    // 3. Fat Loss
    const fatLossKg = totalFatInput - (gheeYieldKg * 0.997);

    // 4. Ghee Residue (SNF solids + burnt portion)
    // Estimation: Non-fat solids usually precipitate as residue.
    // Residue approx = (Total Solids - Recovered Fat) * burning_factor (approx 0.8 moisture evap)
    // Simplified industrial estimation: 1-2% of cream/butter weight depending on SNF
    const solidsNotFat = Q * (1 - Fat - (parseFloat(inputs.moisture)/100));
    const estimatedResidue = solidsNotFat * 0.9; // Assuming 10% moisture in residue

    // 5. Economics
    const gheeValue = gheeYieldKg * GheeRate;
    const residueValue = estimatedResidue * ResidueRate;
    const totalValue = gheeValue + residueValue;

    setResult({
      gheeYieldKg,
      totalFatInput,
      fatLossKg,
      estimatedResidue,
      totalValue,
      recoveryPercent: ((gheeYieldKg / Q) * 100).toFixed(2)
    });
  }, [inputs]);

  return (
    <Card className="border-yellow-200 bg-yellow-50/30">
      <CardHeader className="pb-2 bg-yellow-100/50 rounded-t-lg">
        <CardTitle className="text-lg text-yellow-800 flex gap-2">
          <Target className="w-5 h-5"/> Industrial Ghee Recovery
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500">Input Type</label>
            <select 
              className="w-full h-9 border rounded px-2 text-sm"
              value={inputs.inputType}
              onChange={e => setInputs({...inputs, inputType: e.target.value, fatPercent: e.target.value === 'butter' ? '82' : '40', moisture: e.target.value === 'butter' ? '16' : '54'})}
            >
              <option value="butter">White Butter</option>
              <option value="cream">Cream</option>
            </select>
          </div>
          <ValidatedInput label="Quantity" value={inputs.quantity} onChange={v=>setInputs({...inputs, quantity:v})} unit="kg" colorScheme="yellow" />
          <ValidatedInput label="Fat %" value={inputs.fatPercent} onChange={v=>setInputs({...inputs, fatPercent:v})} unit="%" colorScheme="orange" />
          <ValidatedInput label="Plant Efficiency" value={inputs.efficiency} onChange={v=>setInputs({...inputs, efficiency:v})} unit="%" helpText="Std: 98-99%" colorScheme="green" />
          <ValidatedInput label="Ghee Price" value={inputs.gheePrice} onChange={v=>setInputs({...inputs, gheePrice:v})} unit="₹" />
        </div>

        <Button onClick={calculate} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Calculate Yield</Button>

        {result && (
          <div className="space-y-3 animate-in slide-in-from-bottom-2">
            <div className="grid grid-cols-2 gap-3">
              <ResultCard title="Expected Ghee" value={result.gheeYieldKg.toFixed(1)} unit="kg" icon={<Droplets className="w-4 h-4"/>} colorScheme="orange" />
              <ResultCard title="Recovery %" value={result.recoveryPercent} unit="%" icon={<Target className="w-4 h-4"/>} colorScheme="green" />
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-yellow-200 text-sm space-y-2">
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Total Fat Input</span>
                <span className="font-bold">{result.totalFatInput.toFixed(1)} kg</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Fat Loss</span>
                <span className="font-bold text-red-600">{result.fatLossKg.toFixed(2)} kg</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Ghee Residue</span>
                <span className="font-bold">{result.estimatedResidue.toFixed(1)} kg</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500 font-bold">Total Batch Value</span>
                <span className="font-bold text-green-700 text-lg">₹ {result.totalValue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ════════════════════════════════════════════════════════════
// 3. CHEESE YIELD CALCULATOR (VAN SLYKE FORMULA)
// The Gold Standard for Cheddar/Hard Cheese
// ════════════════════════════════════════════════════════════
export function CheeseYieldCalc() {
  const [inputs, setInputs] = useState({
    milkQty: "1000",
    fat: "4.0",
    protein: "3.3",      // Total protein
    caseinRatio: "78",   // Casein is typically 78% of protein
    targetMoisture: "37",// Cheddar ~37%, Mozzarella ~48%
    fatRetention: "93",  // Process efficiency (93% typical)
    caseinRetention: "96"// Process efficiency (96% typical)
  });
  const [result, setResult] = useState<any>(null);

  const calculate = useCallback(() => {
    const M = parseFloat(inputs.milkQty);
    const F = parseFloat(inputs.fat) / 100; // Fat decimal
    const P = parseFloat(inputs.protein) / 100; 
    const CaseinPct = parseFloat(inputs.caseinRatio) / 100;
    const C = P * CaseinPct; // Casein decimal
    const W = parseFloat(inputs.targetMoisture) / 100; // Target Moisture decimal
    
    // Efficiency factors
    const RF = parseFloat(inputs.fatRetention) / 100; // Fat Recovery
    const RC = parseFloat(inputs.caseinRetention) / 100; // Casein Recovery (solids retention)

    // Van Slyke Formula Generic:
    // Yield = [ (RF * Fat) + (RC * Casein) ] * SolidsFactor / (1 - Moisture)
    // SolidsFactor (Salt + Whey Solids) is typically 1.09 for Cheddar
    const solidsFactor = 1.09;

    const yieldPct = ((RF * inputs.fat * 1.0) + (RC * (inputs.protein * CaseinPct * 100))) * solidsFactor / (100 - parseFloat(inputs.targetMoisture)) * 100; // Simplified calculation in %
    
    // Detailed Kg Calculation
    const recoveredFat = M * F * RF;
    const recoveredCasein = M * C * RC;
    const otherSolids = (recoveredFat + recoveredCasein) * (solidsFactor - 1); // Salt etc
    const totalSolids = recoveredFat + recoveredCasein + otherSolids;
    
    const cheeseWeight = totalSolids / (1 - W);
    const actualYieldPct = (cheeseWeight / M) * 100;

    const wheyVolume = M - cheeseWeight;

    setResult({ cheeseWeight, actualYieldPct, wheyVolume, recoveredFat });
  }, [inputs]);

  return (
    <Card className="border-orange-200 bg-orange-50/30">
      <CardHeader className="pb-2 bg-orange-100/50 rounded-t-lg">
        <CardTitle className="text-lg text-orange-800 flex gap-2">
          <Milk className="w-5 h-5"/> Cheese Yield (Van Slyke)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <ValidatedInput label="Milk Qty (kg)" value={inputs.milkQty} onChange={v=>setInputs({...inputs, milkQty:v})} />
          <ValidatedInput label="Milk Fat %" value={inputs.fat} onChange={v=>setInputs({...inputs, fat:v})} colorScheme="orange" />
          <ValidatedInput label="Protein %" value={inputs.protein} onChange={v=>setInputs({...inputs, protein:v})} colorScheme="blue" />
          
          <ValidatedInput label="Target Moisture %" value={inputs.targetMoisture} onChange={v=>setInputs({...inputs, targetMoisture:v})} helpText="Cheddar 37, Mozz 48" />
          <ValidatedInput label="Fat Retention %" value={inputs.fatRetention} onChange={v=>setInputs({...inputs, fatRetention:v})} helpText="Typical 93%" />
          <ValidatedInput label="Casein Retention %" value={inputs.caseinRetention} onChange={v=>setInputs({...inputs, caseinRetention:v})} helpText="Typical 96%" />
        </div>

        <Button onClick={calculate} className="w-full bg-orange-600 hover:bg-orange-700 text-white">Predict Yield</Button>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 animate-in fade-in">
             <ResultCard title="Cheese Output" value={result.cheeseWeight.toFixed(1)} unit="kg" icon={<Target className="w-4 h-4"/>} colorScheme="orange" />
             <ResultCard title="Yield %" value={result.actualYieldPct.toFixed(2)} unit="%" icon={<Factory className="w-4 h-4"/>} colorScheme="green" />
             <div className="p-3 rounded-xl border bg-white flex flex-col justify-center items-center shadow-sm">
                <span className="text-xs uppercase font-bold text-slate-400">Whey Generated</span>
                <span className="text-xl font-bold text-blue-600">{result.wheyVolume.toFixed(0)} kg</span>
             </div>
          </div>
        )}
      </CardContent>
    </Card>
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
// 1. ADVANCED TANK VOLUME CALCULATOR
// Supports: Horizontal/Vertical, Dish Ends, Conical Bottoms
// ════════════════════════════════════════════════════════════
function TankVolumeCalc() {
  const [input, setInput] = useState({ 
    type: "horizontal", // horizontal | vertical
    diameter: "200",    // cm (Internal Diameter)
    length: "300",      // cm (Cylindrical length only)
    height: "100",      // cm (Liquid Level)
    dishHeight: "20",   // cm (Depth of the dish end/cone)
    endType: "dish",    // flat | dish | cone (only for vertical)
  });
  
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const R = parseFloat(input.diameter) / 2; // Radius
    const L = parseFloat(input.length);       // Cylindrical Length
    const H = parseFloat(input.height);       // Liquid Height
    const D = parseFloat(input.dishHeight);   // Dish/Cone Depth

    // Validation
    if (input.type === "horizontal" && H > parseFloat(input.diameter)) {
       setResult({ error: "Liquid level cannot exceed diameter" }); return;
    }
    if (input.type === "vertical" && H > (L + D)) { // Approx total height check
       // Allow for now, but usually H is total liquid height
    }

    let volLiters = 0;
    let percentFull = 0;

    // --- CASE 1: HORIZONTAL TANK (e.g., BMC) ---
    if (input.type === "horizontal") {
        // 1. Cylindrical Part (Partial Volume)
        // Formula: L * [R² * cos⁻¹((R-H)/R) - (R-H) * √(2RH - H²)]
        // If H > R, calculation flips. 
        // Easier Trig approach:
        
        let areaCyl = 0;
        
        // Clamp H to Diameter
        const h_cyl = Math.min(H, 2 * R);
        
        if (h_cyl > 0) {
            if (h_cyl === R) {
                areaCyl = 0.5 * Math.PI * R * R;
            } else {
                const term1 = R * R * Math.acos((R - h_cyl) / R);
                const term2 = (R - h_cyl) * Math.sqrt(2 * R * h_cyl - h_cyl * h_cyl);
                areaCyl = term1 - term2;
            }
        }
        
        const volCyl = areaCyl * L; // cm³

        // 2. Dish Ends (2 ends) - Approximate Torispherical partial volume
        // Full Dish Volume approx = 0.081 * Dia³ (Standard ASME) OR slightly less.
        // Mathematical Approx for Partial Dish:
        // V_dish_partial ≈ V_dish_total * (Area_segment / Area_circle) * correction
        // Simplified High-Accuracy for partial dish: 
        // V = (π * h² / 3) * (3R - h) is for sphere cap.
        // We scale it by the dish depth factor.
        
        let volDish = 0;
        if (input.endType === "dish") {
            // Volume of ONE dish end (full) ≈ (2/3) * π * R² * D (Elliptical approximation)
            // Partial fill logic is complex. Using spherical cap approximation scaled.
            // Sphere Radius R_s = (R² + D²) / (2D)
            
            // Simplified ratio for industrial use:
            // Volume ratio follows the area ratio roughly but slightly fuller at bottom
            const fillRatio = areaCyl / (Math.PI * R * R);
            const totalDishVol = 2 * ((2/3) * Math.PI * R * R * D); // 2 ends
            volDish = totalDishVol * fillRatio; 
        }

        volLiters = (volCyl + volDish) / 1000;
        percentFull = (H / (2 * R)) * 100;
    }

    // --- CASE 2: VERTICAL TANK (e.g., Silo) ---
    else {
        // H is total liquid height from bottom zero point.
        // Structure: Bottom (Dish/Cone) + Cylinder
        
        let volBottom = 0;
        let volCyl = 0;

        // 1. Bottom Section
        if (H <= D) {
            // Liquid is only in the bottom dish/cone
            if (input.endType === "cone") {
                // Cone partial volume: V = (1/3) * π * r_level² * h_level
                // r_level = R * (H / D)
                const r_h = R * (H / D);
                volBottom = (1/3) * Math.PI * r_h * r_h * H;
            } else if (input.endType === "dish") {
                // Spherical Cap approximation
                // V = (π * H² / 3) * (3*Radius_of_curvature - H)
                // Use Elliptical approximation for standard dish
                // V_partial = π * R² * H * (H/D - (H/D)³/3 ) ? No, standard formula:
                // V = (π * R² * D) * ( (H/D)^2 * (1.5 - 0.5*(H/D)) ) for 2:1 Ellipsoidal?
                // Simple Spherical cap is best generic fit: V = (π/6) * H * (3*r_at_h^2 + H^2)
                
                // Effective logic:
                volBottom = (Math.PI * R * R * D) / 2 * Math.pow(H/D, 2) * (3 - H/D) / 2; // Approx for dish bottom fill
            } else {
                // Flat bottom - theoretically H starts from 0, D is 0.
                volBottom = Math.PI * R * R * H;
            }
        } else {
            // Liquid covers bottom + part of cylinder
            // Full Bottom Volume
            if (input.endType === "cone") {
                volBottom = (1/3) * Math.PI * R * R * D;
            } else if (input.endType === "dish") {
                volBottom = (2/3) * Math.PI * R * R * D; // Half ellipsoid
            }
            
            // Cylindrical Part
            const h_cyl = H - D;
            volCyl = Math.PI * R * R * h_cyl;
        }

        volLiters = (volBottom + volCyl) / 1000;
        percentFull = (H / (L + D)) * 100;
    }

    setResult({ volLiters, percentFull });
  };

  return (
    <Card className="border-slate-300 bg-slate-50 shadow-md">
        <CardHeader className="pb-2 border-b border-slate-200 bg-white rounded-t-lg">
            <CardTitle className="text-sm font-bold flex items-center gap-2 text-slate-700">
                <Ruler className="w-5 h-5 text-blue-600"/> 
                Precision Tank Volume
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            {/* Configuration Row */}
            <div className="flex gap-2">
                <div className="w-1/2 space-y-1">
                    <Label className="text-[10px] uppercase font-bold text-slate-500">Tank Shape</Label>
                    <Select value={input.type} onValueChange={v=>setInput({...input, type:v, endType: v==='horizontal'?'dish':'cone'})}>
                        <SelectTrigger className="h-8 text-xs bg-white"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="horizontal">Horizontal (BMC)</SelectItem>
                            <SelectItem value="vertical">Vertical (Silo)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-1/2 space-y-1">
                    <Label className="text-[10px] uppercase font-bold text-slate-500">End Type</Label>
                    <Select value={input.endType} onValueChange={v=>setInput({...input, endType:v})}>
                        <SelectTrigger className="h-8 text-xs bg-white"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="flat">Flat</SelectItem>
                            <SelectItem value="dish">Dish / Torispherical</SelectItem>
                            {input.type === 'vertical' && <SelectItem value="cone">Conical Bottom</SelectItem>}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Dimensions Grid */}
            <div className="grid grid-cols-2 gap-3 bg-white p-3 rounded-lg border border-slate-200">
                <ValidatedInput label="Liquid Level (cm)" value={input.height} onChange={v=>setInput({...input, height:v})} colorScheme="blue" icon={<Ruler className="w-3 h-3"/>} />
                <ValidatedInput label="Tank Diameter (cm)" value={input.diameter} onChange={v=>setInput({...input, diameter:v})} helpText="Internal Dia" />
                <ValidatedInput label="Cyl. Length/Height (cm)" value={input.length} onChange={v=>setInput({...input, length:v})} helpText="Straight shell only" />
                {input.endType !== 'flat' && (
                    <ValidatedInput 
                        label={input.type==='vertical' ? 'Bottom Depth (cm)' : 'Dish Depth (cm)'} 
                        value={input.dishHeight} 
                        onChange={v=>setInput({...input, dishHeight:v})} 
                        colorScheme="orange" 
                        helpText="Curve/Cone height"
                    />
                )}
            </div>

            <Button onClick={calculate} size="lg" className="w-full bg-slate-800 hover:bg-slate-900 shadow-lg">
                Calculate Volume
            </Button>

            {result && !result.error && (
                <div className="grid grid-cols-2 gap-3 animate-in slide-in-from-bottom-2">
                    <div className="bg-blue-600 text-white p-3 rounded-xl shadow-md text-center">
                        <div className="text-[10px] uppercase opacity-70 font-bold">Total Volume</div>
                        <div className="text-3xl font-black">{result.volLiters.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                        <div className="text-xs opacity-80">Liters</div>
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm text-center flex flex-col justify-center">
                        <div className="text-[10px] uppercase text-slate-500 font-bold">Tank Capacity Used</div>
                        <div className="text-2xl font-bold text-slate-700">{result.percentFull.toFixed(1)}%</div>
                        <div className="h-2 w-full bg-slate-100 rounded-full mt-1 overflow-hidden">
                            <div className="h-full bg-blue-500" style={{width: `${Math.min(result.percentFull, 100)}%`}}></div>
                        </div>
                    </div>
                </div>
            )}
            
            {result?.error && (
                <div className="p-3 bg-red-50 text-red-600 text-xs rounded border border-red-200 text-center font-bold">
                    ⚠️ {result.error}
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 2. ADVANCED PACKAGING FILM CALCULATOR
// Calculates: Film Weight, Roll Length, No. of Reels
// ════════════════════════════════════════════════════════════
function PackagingFilmCalc() {
  const [p, setP] = useState({ 
    pouches: "10000", 
    width: "325",    // mm (Standard 500ml pouch)
    repeat: "150",   // mm (Pouch Length)
    thickness: "55", // microns
    density: "0.92", // g/cm³ (LDPE)
    wastage: "2.0",  // % Process Wastage
    rollWeight: "25" // kg (Standard Roll Size)
  });
  const [res, setRes] = useState<any>(null);

  const calculate = () => {
    // 1. Single Pouch Weight
    // Volume cm³ = (W/10) * (L/10) * (Thickness/10000)
    const W_cm = parseFloat(p.width) / 10;
    const L_cm = parseFloat(p.repeat) / 10;
    const T_cm = parseFloat(p.thickness) / 10000;
    const D = parseFloat(p.density);
    const Wastage = 1 + (parseFloat(p.wastage) / 100);

    const weightPerPouchG = (W_cm * L_cm * T_cm * D);
    
    // 2. Total Requirement
    const netKg = (weightPerPouchG * parseFloat(p.pouches)) / 1000;
    const grossKg = netKg * Wastage; // Adding wastage

    // 3. Roll Logic (Yield)
    // Yield (m²/kg) = 1000 / (Density * Thickness_micron * 10^-3) ??
    // Simpler: Yield (Pouch/kg) = 1000g / WeightPerPouch
    const yieldPouchPerKg = 1000 / weightPerPouchG;
    
    // 4. Meters Calculation
    // Total Length (m) = (Pouches * Repeat_mm) / 1000
    const totalMeters = (parseFloat(p.pouches) * parseFloat(p.repeat)) / 1000;
    
    // 5. Reels Needed
    const reels = grossKg / parseFloat(p.rollWeight);

    setRes({ 
        weightPerPouchG, 
        netKg, 
        grossKg, 
        yieldPouchPerKg,
        totalMeters,
        reels
    });
  };

  return (
    <Card className="border-purple-200 bg-purple-50/30">
        <CardHeader className="pb-2 border-b border-purple-100 bg-purple-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-purple-800">
                <PackageOpen className="w-4 h-4"/> Industrial Packaging Planner
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            {/* Material Selector */}
            <div className="space-y-1">
                <Label className="text-[10px] uppercase font-bold text-slate-500">Material Type</Label>
                <Select value={p.density} onValueChange={v=>setP({...p, density:v})}>
                    <SelectTrigger className="h-8 text-xs bg-white"><SelectValue placeholder="Select Material"/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0.92">LDPE (Milk Pouch) - 0.92</SelectItem>
                        <SelectItem value="1.40">Polyester (PET) - 1.40</SelectItem>
                        <SelectItem value="0.95">LLDPE - 0.95</SelectItem>
                        <SelectItem value="1.20">Laminate (Avg) - 1.20</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <ValidatedInput label="Target Pouches" value={p.pouches} onChange={v=>setP({...p, pouches:v})} />
                <ValidatedInput label="Film Width (mm)" value={p.width} onChange={v=>setP({...p, width:v})} />
                <ValidatedInput label="Repeat Len (mm)" value={p.repeat} onChange={v=>setP({...p, repeat:v})} />
                <ValidatedInput label="Thickness (mic)" value={p.thickness} onChange={v=>setP({...p, thickness:v})} />
                <ValidatedInput label="Wastage %" value={p.wastage} onChange={v=>setP({...p, wastage:v})} colorScheme="red" />
                <ValidatedInput label="Roll Weight (kg)" value={p.rollWeight} onChange={v=>setP({...p, rollWeight:v})} helpText="Std Reel Wt" />
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-purple-600 hover:bg-purple-700 shadow-md">Calculate Requirement</Button>
            
            {res && (
                <div className="space-y-2 animate-in slide-in-from-bottom-2">
                    {/* Main Result */}
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-purple-200 shadow-sm">
                        <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Total Film Needed</div>
                            <div className="text-2xl font-black text-purple-700">{res.grossKg.toFixed(1)} <span className="text-sm text-slate-500">kg</span></div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] uppercase font-bold text-slate-400">Est. Reels</div>
                            <div className="text-xl font-bold text-slate-700">{Math.ceil(res.reels)} <span className="text-xs font-normal">({res.reels.toFixed(1)})</span></div>
                        </div>
                    </div>

                    {/* Detailed Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-purple-100 p-2 rounded border border-purple-200">
                            <div className="text-[9px] text-purple-800 font-bold uppercase">Yield</div>
                            <div className="font-bold text-sm">{res.yieldPouchPerKg.toFixed(0)} <span className="text-[9px]">pouch/kg</span></div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded border border-slate-200">
                            <div className="text-[9px] text-slate-500 font-bold uppercase">Weight/Pouch</div>
                            <div className="font-bold text-sm">{res.weightPerPouchG.toFixed(3)} g</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded border border-slate-200">
                            <div className="text-[9px] text-slate-500 font-bold uppercase">Total Length</div>
                            <div className="font-bold text-sm">{(res.totalMeters/1000).toFixed(2)} km</div>
                        </div>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 3. ADVANCED PIPELINE LOSS & CIP VOLUME
// Uses Internal Diameter (ID) based on Pipe Schedule (Thickness)
// ════════════════════════════════════════════════════════════
function PipelineLossCalc() {
  const [p, setP] = useState({ 
    sizeOD: "51",     // mm (Standard Dairy OD)
    thickness: "1.2", // mm (Wall thickness - SMS/DIN standard)
    length: "100",    // m
    lines: "1"        // Number of parallel lines
  });
  const [res, setRes] = useState<any>(null);

  const calculate = () => {
    const OD = parseFloat(p.sizeOD);
    const Th = parseFloat(p.thickness);
    
    // Internal Diameter (ID) = OD - (2 * Thickness)
    const ID_mm = OD - (2 * Th);
    
    if (ID_mm <= 0) { 
        setRes(null); return; // Error handle
    }

    const radius_mm = ID_mm / 2;
    const length_mm = parseFloat(p.length) * 1000;
    const count = parseFloat(p.lines);

    // Volume in mm³ = π * r² * h
    const vol_mm3 = Math.PI * radius_mm * radius_mm * length_mm;
    
    // Volume in Liters = mm³ / 1,000,000
    const singleLineVolL = vol_mm3 / 1000000;
    const totalMilkVol = singleLineVolL * count;

    // CIP Calculation (Rule of Thumb: 1.5x pipe volume for flush)
    const cipWater = totalMilkVol * 1.5;

    // Flow Velocity Check (Optional insight)
    // At 5000 L/h flow, velocity (m/s) = Q / Area
    // Area (m²) = vol_liters / length_m / 1000
    // Not calculating here to keep simple, but volume is key.

    setRes({ ID_mm, singleLineVolL, totalMilkVol, cipWater });
  };

  return (
    <Card className="border-orange-200 bg-orange-50/30">
        <CardHeader className="pb-2 border-b border-orange-100 bg-orange-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-orange-800">
                <Cylinder className="w-4 h-4"/> Pipeline Hold-up & CIP
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            {/* Pipe Standard Selector */}
            <div className="space-y-1">
                <Label className="text-[10px] uppercase font-bold text-slate-500">Pipe Standard (SMS/DIN)</Label>
                <Select value={p.sizeOD} onValueChange={v=>{
                    // Auto-set standard thickness based on size (Approx SMS standard)
                    let th = "1.2";
                    if(v === "63.5" || v === "76.2") th = "1.5";
                    if(v === "101.6") th = "2.0";
                    setP({...p, sizeOD: v, thickness: th});
                }}>
                    <SelectTrigger className="h-8 text-xs bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="25.4">1.0 Inch (25mm)</SelectItem>
                        <SelectItem value="38.1">1.5 Inch (38mm)</SelectItem>
                        <SelectItem value="51">2.0 Inch (51mm)</SelectItem>
                        <SelectItem value="63.5">2.5 Inch (63.5mm)</SelectItem>
                        <SelectItem value="76.2">3.0 Inch (76mm)</SelectItem>
                        <SelectItem value="101.6">4.0 Inch (102mm)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <ValidatedInput label="Pipe OD (mm)" value={p.sizeOD} onChange={v=>setP({...p, sizeOD:v})} />
                <ValidatedInput label="Wall Thk (mm)" value={p.thickness} onChange={v=>setP({...p, thickness:v})} helpText="ID calc" />
                <ValidatedInput label="Length (m)" value={p.length} onChange={v=>setP({...p, length:v})} />
                <div className="col-span-3">
                    <ValidatedInput label="No. of Lines" value={p.lines} onChange={v=>setP({...p, lines:v})} />
                </div>
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-md">Calculate Loss</Button>

            {res && (
                <div className="space-y-2 animate-in slide-in-from-bottom-2">
                    {/* Main Volume Card */}
                    <div className="bg-white p-3 rounded-xl border border-orange-200 shadow-sm text-center">
                        <div className="text-[10px] uppercase font-bold text-slate-400">Total Milk Hold-up (Loss)</div>
                        <div className="text-3xl font-black text-orange-600">{res.totalMilkVol.toFixed(1)} <span className="text-lg font-medium text-slate-500">Liters</span></div>
                        <div className="text-[10px] text-slate-400 mt-1">Based on ID: {res.ID_mm.toFixed(1)} mm</div>
                    </div>

                    {/* Secondary Stats */}
                    <div className="flex gap-2">
                        <div className="flex-1 bg-blue-50 p-2 rounded border border-blue-100 text-center">
                            <div className="text-[9px] font-bold text-blue-600 uppercase">Per Meter</div>
                            <div className="font-bold text-blue-900">{(res.singleLineVolL / parseFloat(p.length)).toFixed(3)} L/m</div>
                        </div>
                        <div className="flex-1 bg-green-50 p-2 rounded border border-green-100 text-center">
                            <div className="text-[9px] font-bold text-green-600 uppercase">Min CIP Water</div>
                            <div className="font-bold text-green-900">~{Math.ceil(res.cipWater)} L</div>
                        </div>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 4. ADVANCED CULTURE DOSING & COSTING
// Supports: DVS (Direct Vat Set) & Bulk Starter Logic
// ════════════════════════════════════════════════════════════
function CultureDosingCalc() {
  const [c, setC] = useState({ 
    method: "dvs",      // dvs (units) | bulk (%)
    batchSize: "2000",  // Liters
    // DVS Params
    dvsRate: "50",      // Units per 1000L (Standard DVS rate)
    pouchStrength: "50",// Units per Pouch
    pouchPrice: "850",  // ₹ per Pouch
    // Bulk Params
    bulkRate: "2.0",    // % Inoculation
    bulkCost: "40"      // ₹ per Liter of starter
  });
  const [res, setRes] = useState<any>(null);

  const calculate = () => {
    const Vol = parseFloat(c.batchSize);
    
    if (c.method === "dvs") {
        // DVS Calculation
        const rate = parseFloat(c.dvsRate); // U/1000L
        const pouchU = parseFloat(c.pouchStrength);
        const price = parseFloat(c.pouchPrice);

        const totalUnits = (Vol / 1000) * rate;
        const pouchesNeeded = totalUnits / pouchU;
        // Round up pouches for procurement, but calculating exact cost for batch logic usually uses partial if open allowed, 
        // but industrially we open full pouches. Let's show exact ratio.
        const totalCost = pouchesNeeded * price;
        
        setRes({ 
            req: `${totalUnits.toFixed(1)} Units`, 
            pack: `${pouchesNeeded.toFixed(2)} Pouches`, 
            totalCost, 
            costPerL: totalCost / Vol 
        });
    } else {
        // Bulk Starter Calculation
        const rate = parseFloat(c.bulkRate); // %
        const price = parseFloat(c.bulkCost);

        const starterLiters = Vol * (rate / 100);
        const totalCost = starterLiters * price;

        setRes({ 
            req: `${starterLiters.toFixed(1)} Liters`, 
            pack: "Bulk Tank", 
            totalCost, 
            costPerL: totalCost / Vol 
        });
    }
  };

  return (
    <Card className="border-pink-200 bg-pink-50/30">
        <CardHeader className="pb-2 border-b border-pink-100 bg-pink-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-pink-800">
                <Pipette className="w-4 h-4"/> Fermentation Culture Dosing
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            {/* Method Selector */}
            <div className="flex justify-center bg-white p-1 rounded border mb-2">
                <button 
                    onClick={() => setC({...c, method: "dvs"})} 
                    className={`flex-1 text-xs font-bold py-1.5 rounded transition-all ${c.method==='dvs' ? 'bg-pink-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    DVS (Pouches)
                </button>
                <button 
                    onClick={() => setC({...c, method: "bulk"})} 
                    className={`flex-1 text-xs font-bold py-1.5 rounded transition-all ${c.method==='bulk' ? 'bg-pink-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    Bulk Starter (%)
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <ValidatedInput label="Batch Size (L)" value={c.batchSize} onChange={v=>setC({...c, batchSize:v})} />
                
                {c.method === 'dvs' ? (
                    <>
                        <ValidatedInput label="Dose (U/1KL)" value={c.dvsRate} onChange={v=>setC({...c, dvsRate:v})} helpText="Std: 20-50 U" />
                        <ValidatedInput label="Pouch Unit" value={c.pouchStrength} onChange={v=>setC({...c, pouchStrength:v})} helpText="e.g. 50U, 200U" />
                        <ValidatedInput label="Price/Pouch" value={c.pouchPrice} onChange={v=>setC({...c, pouchPrice:v})} unit="₹" colorScheme="green" />
                    </>
                ) : (
                    <>
                        <ValidatedInput label="Inoculation %" value={c.bulkRate} onChange={v=>setC({...c, bulkRate:v})} helpText="Std: 1-3%" />
                        <ValidatedInput label="Starter Cost" value={c.bulkCost} onChange={v=>setC({...c, bulkCost:v})} unit="₹/L" colorScheme="green" />
                    </>
                )}
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-pink-600 hover:bg-pink-700 shadow-md">Calculate Costing</Button>
            
            {res && (
                <div className="space-y-2 animate-in fade-in">
                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-white p-2 rounded border border-pink-200">
                            <div className="text-[9px] uppercase text-slate-500 font-bold">Requirement</div>
                            <div className="font-black text-lg text-slate-800">{res.req}</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-pink-200">
                            <div className="text-[9px] uppercase text-slate-500 font-bold">{c.method==='dvs'?'Pouch Count':'Format'}</div>
                            <div className="font-black text-lg text-pink-600">{res.pack}</div>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center bg-pink-100 p-2 rounded border border-pink-300">
                        <div className="text-xs text-pink-900 font-bold">Cost Impact: ₹ {res.costPerL.toFixed(2)} / L</div>
                        <div className="text-sm font-black text-pink-900">Total: ₹ {Math.round(res.totalCost).toLocaleString()}</div>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 5. ADVANCED ETP POLLUTION LOAD
// Calculates COD/BOD kg based on specific product waste
// ════════════════════════════════════════════════════════════
function EtpLoadCalc() {
  const [e, setE] = useState({ 
    lossVol: "50",     // Liters/Kg spilled
    product: "milk",   // product type
    treatmentCost: "5" // ₹ per kg COD removal (Electricity + Chem)
  });
  const [res, setRes] = useState<any>(null);

  // Industry Standard COD Factors (kg COD per Liter/Kg of product)
  const COD_FACTORS: any = {
    milk:  { label: "Whole Milk", cod: 0.21,  bod: 0.14 }, // ~210,000 mg/L
    skim:  { label: "Skim Milk",  cod: 0.10,  bod: 0.06 }, // Less fat = less COD
    whey:  { label: "Cheese Whey",cod: 0.07,  bod: 0.05 }, // Lactose mainly
    cream: { label: "Cream (40%)",cod: 0.45,  bod: 0.25 }, // High Fat = Massive COD
    ice:   { label: "Ice Cream Mix",cod: 0.30,bod: 0.18 }, // High sugar/solids
    ghee:  { label: "Ghee Residue",cod: 0.80, bod: 0.40 }, // Very concentrated
  };

  const calculate = () => {
    const V = parseFloat(e.lossVol);
    const prod = COD_FACTORS[e.product];
    
    // Total Loads
    const totalCOD = V * prod.cod;
    const totalBOD = V * prod.bod; // Or typically 0.6 * COD if data missing
    
    // Population Equivalent (PE)
    // 1 PE ≈ 0.06 kg BOD per day (Human equivalent waste)
    const PE = totalBOD / 0.06;

    // Treatment Cost Estimate
    const cost = totalCOD * parseFloat(e.treatmentCost);

    setRes({ totalCOD, totalBOD, PE, cost, prodName: prod.label });
  };

  return (
    <Card className="border-stone-300 bg-stone-50">
        <CardHeader className="pb-2 border-b border-stone-200 bg-stone-100 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-stone-700">
                <Trash2 className="w-4 h-4"/> ETP Pollution Load Audit
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            <div className="space-y-1">
                <Label className="text-[10px] uppercase font-bold text-slate-500">Spilled Product</Label>
                <Select value={e.product} onValueChange={v=>setE({...e, product:v})}>
                    <SelectTrigger className="h-9 text-sm bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent>
                        {Object.entries(COD_FACTORS).map(([key, val]: any) => (
                            <SelectItem key={key} value={key}>{val.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <ValidatedInput label="Quantity (L/Kg)" value={e.lossVol} onChange={v=>setE({...e, lossVol:v})} colorScheme="red" />
                <ValidatedInput label="Treat. Cost (₹/kg COD)" value={e.treatmentCost} onChange={v=>setE({...e, treatmentCost:v})} helpText="Power+Chem" />
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-red-700 hover:bg-red-800 text-white shadow-md">Calculate Environmental Impact</Button>
            
            {res && (
                <div className="space-y-2 animate-in slide-in-from-bottom-2">
                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-white p-3 rounded-lg border border-red-300 shadow-sm">
                            <div className="text-[9px] font-bold text-slate-500 uppercase">COD Load</div>
                            <div className="text-2xl font-black text-red-700">{res.totalCOD.toFixed(2)} <span className="text-sm font-normal">kg</span></div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-orange-300 shadow-sm">
                            <div className="text-[9px] font-bold text-slate-500 uppercase">BOD Load</div>
                            <div className="text-2xl font-black text-orange-600">{res.totalBOD.toFixed(2)} <span className="text-sm font-normal">kg</span></div>
                        </div>
                    </div>

                    <div className="bg-stone-200 p-2 rounded border border-stone-300 text-center">
                        <span className="text-xs text-stone-700 font-bold">Population Equivalent: </span>
                        <span className="text-sm font-black text-stone-900">~{Math.ceil(res.PE)} Humans</span>
                        <div className="text-[9px] text-stone-500 italic mt-1">Est. Treatment Cost: ₹ {Math.ceil(res.cost)}</div>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 6. ADVANCED COLD STORE CAPACITY PLANNER
// Calculates Crates & Volume based on Room Dim & Usage Eff.
// ════════════════════════════════════════════════════════════
function StorageCalc() {
  const [s, setS] = useState({ 
    len: "20", width: "15", // Feet
    stack: "6", // Crates high
    efficiency: "65", // % Floor usage (remaining for aisles/movement)
    crateType: "milk_std" // Preset selection
  });
  const [res, setRes] = useState<any>(null);

  // Standard Crate Dimensions (mm)
  // Milk: 450x350 (12L), Curd: 425x325, Large: 600x400
  const CRATES: any = {
    milk_std: { l: 450, w: 350, cap: 12, label: "Std Milk Crate (12L)" },
    curd_cup: { l: 425, w: 325, cap: 10, label: "Curd/Cup Crate" },
    jumbo:    { l: 600, w: 400, cap: 20, label: "Jumbo Crate (20L)" },
    custom:   { l: 450, w: 350, cap: 12, label: "Custom Size" } // Default fallback
  };

  const calculate = () => {
    // 1. Room Area in sq.mm
    // 1 Foot = 304.8 mm
    const roomL_mm = parseFloat(s.len) * 304.8;
    const roomW_mm = parseFloat(s.width) * 304.8;
    const totalArea = roomL_mm * roomW_mm;

    // 2. Usable Area
    const eff = parseFloat(s.efficiency) / 100;
    const usableArea = totalArea * eff;

    // 3. Crate Footprint
    const crate = CRATES[s.crateType];
    const crateArea = crate.l * crate.w;

    // 4. Crates Calculation
    const cratesPerLayer = Math.floor(usableArea / crateArea);
    const totalCrates = cratesPerLayer * parseFloat(s.stack);
    
    // 5. Product Capacity
    const totalCapacity = totalCrates * crate.cap;

    setRes({ totalCrates, totalCapacity, cratesPerLayer });
  };

  return (
    <Card className="border-cyan-200 bg-cyan-50/30">
        <CardHeader className="pb-2 border-b border-cyan-100 bg-cyan-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-cyan-800">
                <Box className="w-4 h-4"/> Cold Store Capacity Planner
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            {/* Crate Selector */}
            <div className="space-y-1">
                <Label className="text-[10px] uppercase font-bold text-slate-500">Crate Standard</Label>
                <Select value={s.crateType} onValueChange={v=>setS({...s, crateType:v})}>
                    <SelectTrigger className="h-8 text-xs bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent>
                        {Object.entries(CRATES).map(([k, v]: any) => (
                            <SelectItem key={k} value={k}>{v.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <ValidatedInput label="Room Length (ft)" value={s.len} onChange={v=>setS({...s, len:v})} />
                <ValidatedInput label="Room Width (ft)" value={s.width} onChange={v=>setS({...s, width:v})} />
                <ValidatedInput label="Stack Height" value={s.stack} onChange={v=>setS({...s, stack:v})} helpText="Tiers (High)" />
                <ValidatedInput label="Floor Usage %" value={s.efficiency} onChange={v=>setS({...s, efficiency:v})} helpText="Std: 60-70%" colorScheme="blue" />
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700 shadow-md">Plan Storage</Button>
            
            {res && (
                <div className="space-y-2 animate-in slide-in-from-bottom-2">
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-cyan-200 shadow-sm">
                        <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Total Storage</div>
                            <div className="text-2xl font-black text-cyan-700">{res.totalCapacity.toLocaleString()} <span className="text-sm text-slate-500">Liters/Kg</span></div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] uppercase font-bold text-slate-400">Total Crates</div>
                            <div className="text-xl font-bold text-slate-700">{res.totalCrates.toLocaleString()}</div>
                        </div>
                    </div>
                    
                    <div className="text-center p-2 bg-cyan-100 rounded border border-cyan-300 text-xs text-cyan-900 font-medium">
                        Floor Plan: approx <strong>{res.cratesPerLayer} crates</strong> spread per layer
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 7. ADVANCED PANEER COAGULANT CALCULATOR
// Calculates: Powder req, Solution Volume & Dilution Ratio
// ════════════════════════════════════════════════════════════
function PaneerCoagulantCalc() {
  const [p, setP] = useState({ 
    milk: "1000",      // Liters
    type: "citric",    // citric | vinegar
    rate: "2.5",       // g/L or ml/L
    solConc: "1.5"     // % Concentration for solution (Important for soft texture)
  });
  const [res, setRes] = useState<any>(null);

  const calculate = () => {
    const milk = parseFloat(p.milk);
    const rate = parseFloat(p.rate);
    const conc = parseFloat(p.solConc); // %

    let rawAmount = 0; // grams or ml
    let unit = "g";

    if (p.type === "citric") {
        // Citric Acid Powder
        rawAmount = milk * rate; // Total grams needed
        unit = "g";
    } else {
        // Vinegar (Liquid) - Rate is ml/L
        rawAmount = milk * rate; // Total ml needed
        unit = "ml";
    }

    // Solution Preparation Logic
    // We never add raw acid. We make a dilute solution (1-2%).
    // Volume (L) = (Amount_raw / 1000) / (Concentration% / 100)
    // If Vinegar (already liquid 4-5%), we dilute it further? 
    // Usually industrial practice: 
    // Citric: Dissolve powder in water.
    // Vinegar: Dilute 1:4 or 1:5 with water.
    
    let totalSolutionL = 0;
    
    if (p.type === "citric") {
        // g -> kg -> divide by %
        totalSolutionL = (rawAmount / 1000) / (conc / 100);
    } else {
        // Vinegar dilution strategy (Target typically 1-2% acidity final)
        // Store vinegar is ~5%. If we want 1%, we dilute 1 part vinegar + 4 parts water.
        // Formula based on user % input:
        // Assume input vinegar is 100% relative strength for calc, usually we just set volume.
        // Better logic: Total Solution Volume needed to maintain gentle coagulation.
        // Approx standard: Solution volume should be 10-15% of milk volume for very soft paneer? 
        // No, standard is driven by concentration.
        // Let's stick to Concentration math:
        // To get 'conc'% solution from 'rawAmount' active.
        // For vinegar, we assume 'rawAmount' is the active agent volume.
        totalSolutionL = (rawAmount / 1000) * (5 / conc); // Assuming stock vinegar is 5%
    }

    setRes({ rawAmount, unit, totalSolutionL });
  };

  return (
    <Card className="border-green-200 bg-green-50/30">
        <CardHeader className="pb-2 border-b border-green-100 bg-green-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-green-800">
                <Beaker className="w-4 h-4"/> Paneer Coagulant Dosing
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            {/* Type Selector */}
            <div className="flex justify-center bg-white p-1 rounded border mb-2">
                <button 
                    onClick={() => setP({...p, type: "citric", rate: "2.5", solConc: "1.5"})} 
                    className={`flex-1 text-xs font-bold py-1.5 rounded transition-all ${p.type==='citric' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    Citric Acid
                </button>
                <button 
                    onClick={() => setP({...p, type: "vinegar", rate: "30", solConc: "1.0"})} 
                    className={`flex-1 text-xs font-bold py-1.5 rounded transition-all ${p.type==='vinegar' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    Vinegar
                </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <ValidatedInput label="Milk Qty (L)" value={p.milk} onChange={v=>setP({...p, milk:v})} />
                <ValidatedInput label={p.type==='citric'?"Rate (g/L)":"Rate (ml/L)"} value={p.rate} onChange={v=>setP({...p, rate:v})} helpText={p.type==='citric'?"Std: 2.0-2.5":"Std: 25-35"} />
                <ValidatedInput label="Sol. Conc %" value={p.solConc} onChange={v=>setP({...p, solConc:v})} helpText="Std: 1% - 2%" colorScheme="blue" />
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-green-600 hover:bg-green-700 shadow-md">Calculate Mix</Button>
            
            {res && (
                <div className="space-y-2 animate-in fade-in">
                    <div className="flex gap-2">
                        <div className="flex-1 bg-white p-2 rounded border border-green-200 text-center">
                            <div className="text-[9px] uppercase text-slate-500 font-bold">{p.type==='citric'?'Powder Needed':'Vinegar Needed'}</div>
                            <div className="font-black text-xl text-green-800">{res.rawAmount.toFixed(0)} <span className="text-sm font-normal text-slate-500">{res.unit}</span></div>
                        </div>
                        <div className="flex-1 bg-blue-50 p-2 rounded border border-blue-200 text-center">
                            <div className="text-[9px] uppercase text-blue-600 font-bold">Total Solution</div>
                            <div className="font-black text-xl text-blue-800">{res.totalSolutionL.toFixed(1)} <span className="text-sm font-normal text-blue-500">Liters</span></div>
                        </div>
                    </div>
                    
                    <div className="text-center p-2 bg-slate-50 rounded border border-slate-200 text-[10px] text-slate-500">
                        <strong>Preparation:</strong> Mix <strong>{res.rawAmount} {res.unit}</strong> into <strong>{(res.totalSolutionL - (p.type==='citric'?0:(res.rawAmount/1000))).toFixed(1)} L</strong> clean water (70°C).
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 8. ADVANCED IBT CAPACITY & REFRIGERATION LOAD
// Calculates: Total Heat Load, Ice Kg, & Compressor TR req.
// ════════════════════════════════════════════════════════════
function IbtCalc() {
  const [i, setI] = useState({ 
    milkVol: "10000",    // Liters
    startT: "35",        // °C
    endT: "4",           // °C
    processHours: "4",   // Time available to cool milk (Melt time)
    buildHours: "10",    // Compressor run time to build ice
    losses: "10"         // % Heat loss (Insulation/Agitator)
  });
  const [res, setRes] = useState<any>(null);

  const calculate = () => {
    const mass = parseFloat(i.milkVol) * 1.03; // Density
    const dT = parseFloat(i.startT) - parseFloat(i.endT);
    const safety = 1 + (parseFloat(i.losses) / 100);

    // 1. Product Heat Load (Q = m * Cp * dT)
    // Milk Cp = 0.93 kcal/kg°C
    const productLoad = mass * 0.93 * dT;

    // 2. Total Thermal Load (inc. losses)
    const totalLoadKcal = productLoad * safety;

    // 3. Ice Required
    // Latent heat of fusion of Ice = 80 kcal/kg
    const iceReqKg = totalLoadKcal / 80;

    // 4. Compressor Capacity (TR) needed to build this ice
    // If we build this ice over 'buildHours' (usually night)
    // 1 TR = 3024 kcal/hr
    const hourlyLoadBuilding = totalLoadKcal / parseFloat(i.buildHours);
    const compressorTR = hourlyLoadBuilding / 3024;

    // 5. Rate of Cooling (Process side)
    const peakLoadProcess = (totalLoadKcal / parseFloat(i.processHours)) / 3024; // Peak demand in TR

    setRes({ totalLoadKcal, iceReqKg, compressorTR, peakLoadProcess });
  };

  return (
    <Card className="border-blue-200 bg-blue-50/30">
        <CardHeader className="pb-2 border-b border-blue-100 bg-blue-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-blue-800">
                <Snowflake className="w-4 h-4"/> IBT Energy & Ice Planner
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <ValidatedInput label="Milk Volume (L)" value={i.milkVol} onChange={v=>setI({...i, milkVol:v})} />
                <ValidatedInput label="Start Temp °C" value={i.startT} onChange={v=>setI({...i, startT:v})} colorScheme="red" />
                <ValidatedInput label="End Temp °C" value={i.endT} onChange={v=>setI({...i, endT:v})} colorScheme="blue" />
                <ValidatedInput label="Melt Time (Hrs)" value={i.processHours} onChange={v=>setI({...i, processHours:v})} helpText="Processing Duration" />
                <ValidatedInput label="Build Time (Hrs)" value={i.buildHours} onChange={v=>setI({...i, buildHours:v})} helpText="Comp. Run Time" />
                <ValidatedInput label="Heat Loss %" value={i.losses} onChange={v=>setI({...i, losses:v})} helpText="Std: 10-15%" />
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-blue-600 hover:bg-blue-700 shadow-md">Calculate Load</Button>
            
            {res && (
                <div className="space-y-2 animate-in fade-in">
                    {/* Main Ice Result */}
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-blue-200 shadow-sm">
                        <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Total Ice Bank</div>
                            <div className="text-2xl font-black text-blue-700">{res.iceReqKg.toLocaleString('en-IN', {maximumFractionDigits:0})} <span className="text-sm text-slate-500">kg</span></div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] uppercase font-bold text-slate-400">Total Load</div>
                            <div className="text-lg font-bold text-slate-700">{(res.totalLoadKcal/1000).toFixed(0)} Mcal</div>
                        </div>
                    </div>

                    {/* Compressor Specs */}
                    <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-slate-50 p-2 rounded border border-slate-200">
                            <div className="text-[9px] text-slate-500 font-bold uppercase">Compressor Needed</div>
                            <div className="font-bold text-sm text-blue-900">{res.compressorTR.toFixed(1)} TR</div>
                            <div className="text-[9px] text-slate-400">(to build in {i.buildHours}h)</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded border border-slate-200">
                            <div className="text-[9px] text-slate-500 font-bold uppercase">Peak Process Load</div>
                            <div className="font-bold text-sm text-orange-700">{res.peakLoadProcess.toFixed(1)} TR</div>
                            <div className="text-[9px] text-slate-400">(if Direct Expansion)</div>
                        </div>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 9. ADVANCED WATER AUDIT (WMR)
// Breakdown of Water Usage by Department vs Production
// ════════════════════════════════════════════════════════════
function WmrCalc() {
  const [w, setW] = useState({ 
    milkProcessed: "50000", // Liters
    waterProcess: "40000",  // L (CIP, Crates, Floors)
    waterUtility: "20000",  // L (Boiler, Cooling Tower, Chiller)
    waterDomestic: "5000"   // L (Canteen, Gardening, Toilets)
  });
  const [res, setRes] = useState<any>(null);

  const calculate = () => {
    const M = parseFloat(w.milkProcessed);
    const W_proc = parseFloat(w.waterProcess);
    const W_util = parseFloat(w.waterUtility);
    const W_dom = parseFloat(w.waterDomestic);

    const totalWater = W_proc + W_util + W_dom;
    const ratio = totalWater / M;

    // Benchmarking (Indian Dairy Standard)
    // < 1.5 : Excellent (World Class)
    // 1.5 - 2.0 : Good
    // 2.0 - 3.0 : Average
    // > 3.0 : Poor
    let grade = "Poor";
    let color = "text-red-600";
    let bg = "bg-red-50 border-red-200";

    if (ratio <= 1.5) { grade = "Excellent"; color = "text-green-700"; bg = "bg-green-50 border-green-200"; }
    else if (ratio <= 2.0) { grade = "Good"; color = "text-emerald-600"; bg = "bg-emerald-50 border-emerald-200"; }
    else if (ratio <= 3.0) { grade = "Average"; color = "text-yellow-600"; bg = "bg-yellow-50 border-yellow-200"; }

    setRes({ totalWater, ratio, grade, color, bg });
  };

  return (
    <Card className="border-teal-200 bg-teal-50/30">
        <CardHeader className="pb-2 border-b border-teal-100 bg-teal-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-teal-800">
                <Droplets className="w-4 h-4"/> Water Consumption Audit
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                    <ValidatedInput label="Total Milk Processed (L)" value={w.milkProcessed} onChange={v=>setW({...w, milkProcessed:v})} />
                </div>
                <ValidatedInput label="Process Water (L)" value={w.waterProcess} onChange={v=>setW({...w, waterProcess:v})} helpText="CIP, Floor wash" />
                <ValidatedInput label="Utility Water (L)" value={w.waterUtility} onChange={v=>setW({...w, waterUtility:v})} helpText="Boiler, Cooling" />
                <ValidatedInput label="Domestic/Misc (L)" value={w.waterDomestic} onChange={v=>setW({...w, waterDomestic:v})} helpText="Staff, Gardens" />
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-teal-600 hover:bg-teal-700 shadow-md">Run Audit</Button>
            
            {res && (
                <div className="space-y-2 animate-in fade-in">
                    <div className={`flex justify-between items-center p-3 rounded-lg border shadow-sm ${res.bg}`}>
                        <div>
                            <div className="text-[10px] uppercase font-bold text-slate-500">Specific Water Consumption</div>
                            <div className={`text-3xl font-black ${res.color}`}>{res.ratio.toFixed(2)} <span className="text-base text-slate-500">L/L</span></div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] uppercase font-bold text-slate-500">Efficiency Grade</div>
                            <div className={`text-xl font-bold ${res.color}`}>{res.grade}</div>
                        </div>
                    </div>
                    <div className="text-center text-xs text-slate-500">
                        Total Water Used: <strong>{res.totalWater.toLocaleString()} Liters</strong>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
// ════════════════════════════════════════════════════════════
// 10. ADVANCED DISPATCH LOGISTICS PLANNER
// Calculates: Crates, Weight Load & Suggested Vehicle
// ════════════════════════════════════════════════════════════
function DispatchCalc() {
  const [d, setD] = useState({ 
    pouch500: "15000", // Pkts
    pouch1000: "2000", // Pkts
    cups: "1000",      // Pkts
    bulkCans: "10"     // No. of 40L Cans
  });
  const [res, setRes] = useState<any>(null);

  const calculate = () => {
    // 1. Crate Logic
    // Std Crate holds: 24 x 500ml OR 12 x 1000ml OR ~40 Cups
    const crates500 = Math.ceil(parseFloat(d.pouch500) / 24);
    const crates1000 = Math.ceil(parseFloat(d.pouch1000) / 12);
    const cratesCups = Math.ceil(parseFloat(d.cups) / 40);
    
    // Bulk Cans are separate, but take floor space. 
    // Approx 1 Can footprint = 1.5 Crates
    const canEquivalentCrates = parseFloat(d.bulkCans) * 1.5;

    const totalCrates = crates500 + crates1000 + cratesCups;
    const totalSpaceUnits = totalCrates + canEquivalentCrates;

    // 2. Weight Logic (Approx)
    // 1 Crate full ~ 13-14 kg. 1 Can ~ 42 kg.
    const weightCrates = totalCrates * 14; 
    const weightCans = parseFloat(d.bulkCans) * 42;
    const totalWeightKg = weightCrates + weightCans;

    // 3. Vehicle Suggestion
    // Small Pickup (Bolero): ~800kg / 120 crates
    // Light Truck (Canter/407): ~2500kg / 350 crates
    // Medium Truck (1109): ~6000kg / 800 crates
    // Heavy Truck: >8000kg
    
    let vehicle = "Heavy Truck (10 Ton)";
    if (totalWeightKg < 900) vehicle = "Small Pickup (Bolero)";
    else if (totalWeightKg < 2800) vehicle = "Light Truck (Canter/407)";
    else if (totalWeightKg < 6500) vehicle = "Medium Truck (Eicher 1109)";

    setRes({ 
        totalCrates, 
        totalWeightKg, 
        vehicle, 
        spaceIndex: Math.ceil(totalSpaceUnits) 
    });
  };

  return (
    <Card className="border-indigo-200 bg-indigo-50/30">
        <CardHeader className="pb-2 border-b border-indigo-100 bg-indigo-50 rounded-t-lg">
            <CardTitle className="text-sm font-bold flex gap-2 text-indigo-800">
                <Truck className="w-4 h-4"/> Logistics & Dispatch Planner
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
            
            <div className="grid grid-cols-2 gap-3">
                <ValidatedInput label="500ml Pouches" value={d.pouch500} onChange={v=>setD({...d, pouch500:v})} />
                <ValidatedInput label="1L Pouches" value={d.pouch1000} onChange={v=>setD({...d, pouch1000:v})} />
                <ValidatedInput label="Cups/Dahi" value={d.cups} onChange={v=>setD({...d, cups:v})} />
                <ValidatedInput label="Bulk Cans (40L)" value={d.bulkCans} onChange={v=>setD({...d, bulkCans:v})} />
            </div>

            <Button onClick={calculate} size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-md">Plan Vehicle</Button>
            
            {res && (
                <div className="space-y-2 animate-in fade-in">
                    <div className="flex gap-2">
                        <div className="flex-1 bg-white p-2 rounded border border-indigo-200 text-center">
                            <div className="text-[9px] uppercase text-slate-500 font-bold">Total Crates</div>
                            <div className="font-black text-xl text-indigo-800">{res.totalCrates}</div>
                        </div>
                        <div className="flex-1 bg-white p-2 rounded border border-indigo-200 text-center">
                            <div className="text-[9px] uppercase text-slate-500 font-bold">Total Load</div>
                            <div className="font-black text-xl text-indigo-900">{res.totalWeightKg.toLocaleString()} <span className="text-sm text-slate-400">kg</span></div>
                        </div>
                    </div>
                    
                    <div className="bg-indigo-100 p-2 rounded border border-indigo-300 text-center">
                        <span className="text-xs text-indigo-700 font-bold uppercase">Suggested Vehicle</span>
                        <div className="text-lg font-black text-indigo-900">{res.vehicle}</div>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}

function YieldsCalc() {
  const [activeCalc, setActiveCalc] = useState("cream-sep");

  // ── 1. Grouped Keys for Dropdown Sections (Cleaned) ──
  
  // A. Product Yields (Basic + New Ghee/Cheese)
  const yieldKeys = [
    "cream-sep", 
    "butter", 
    "ghee-recovery", 
    "cheese-yield", 
    "khoa", 
    "shrikhand", 
    "pedha"
  ];

  // B. Production & Processing (Only Essential Process Tools)
  const processKeys = [
    "pasteurization", 
    "culture-dose",    // Culture Dosing
    "paneer-coag",     // Paneer Coagulant
    "cip-dosing", 
    "evaporator", 
    "spray-dryer"
  ];

  // C. Utility, Engineering & Store (All Industrial Tools)
  const utilityKeys = [
    "tank-vol",      // Dipstick
    "pipe-vol",      // Pipeline Loss
    "pack-film",     // Packaging Film
    "chilling-load", // Refrigeration
    "ibt-calc",      // Ice Bank
    "boiler-cost",   // Steam Cost
    "storage-cap",   // Cold Room
    "etp-load",      // ETP Waste
    "wmr-calc",      // Water:Milk Ratio
    "dispatch-plan"  // Logistics
  ];

  // ── 2. Component Mapping ──
  const calculators: Record<string, {
    title: string;
    component: React.ReactNode;
    icon: React.ElementType;
    color: string;
  }> = {
    // === YIELDS ===
    "cream-sep": { title: "Cream Separation", component: <CreamSeparationCalc />, icon: Droplets, color: "text-blue-600" },
    butter: { title: "Butter Yield", component: <ButterYieldCalc />, icon: Target, color: "text-yellow-600" },
    "ghee-recovery": { title: "Ghee Recovery", component: <GheeRecoveryCalc />, icon: Target, color: "text-yellow-700" },
    "cheese-yield": { title: "Cheese Yield (Van Slyke)", component: <CheeseYieldCalc />, icon: Milk, color: "text-orange-500" },
    khoa: { title: "Khoa Yield", component: <KhoaYieldCalc />, icon: Thermometer, color: "text-orange-600" },
    shrikhand: { title: "Shrikhand Yield", component: <ShrikhandYieldCalc />, icon: Weight, color: "text-purple-600" },
    pedha: { title: "Pedha/Burfi Yield", component: <PedhaBurfiYieldCalc />, icon: PaneerIcon, color: "text-pink-600" },

    // === PROCESS ===
    pasteurization: { title: "Pasteurization Validation", component: <PasteurizationCalc />, icon: CheckCircle2, color: "text-rose-600" },
    "culture-dose": { title: "Culture Dosing", component: <CultureDosingCalc />, icon: Pipette, color: "text-pink-600" },
    "paneer-coag": { title: "Paneer Coagulant", component: <PaneerCoagulantCalc />, icon: Beaker, color: "text-green-600" },
    "cip-dosing": { title: "CIP Chemical Dosing", component: <CIPChemicalCalc />, icon: Beaker, color: "text-orange-600" },
    evaporator: { title: "Evaporator / Concentrator", component: <EvaporatorCalc />, icon: Thermometer, color: "text-amber-600" },
    "spray-dryer": { title: "Spray Dryer Yield", component: <SprayDryerCalc />, icon: Zap, color: "text-sky-600" },

    // === UTILITY ===
    "tank-vol": { title: "Tank Volume (Dipstick)", component: <TankVolumeCalc />, icon: Ruler, color: "text-slate-600" },
    "pipe-vol": { title: "Pipeline Loss/Vol", component: <PipelineLossCalc />, icon: Cylinder, color: "text-orange-600" },
    "pack-film": { title: "Packaging Film Calc", component: <PackagingFilmCalc />, icon: PackageOpen, color: "text-purple-600" },
    "chilling-load": { title: "Chilling Load (TR)", component: <ChillingLoadCalc />, icon: Snowflake, color: "text-blue-700" },
    "ibt-calc": { title: "IBT Ice Capacity", component: <IbtCalc />, icon: Snowflake, color: "text-cyan-600" },
    "boiler-cost": { title: "Boiler Steam Cost", component: <BoilerCostCalc />, icon: Flame, color: "text-red-600" },
    "storage-cap": { title: "Cold Room Capacity", component: <StorageCalc />, icon: Box, color: "text-slate-700" },
    "etp-load": { title: "ETP Waste Load", component: <EtpLoadCalc />, icon: Trash2, color: "text-stone-600" },
    "wmr-calc": { title: "Water:Milk Ratio", component: <WmrCalc />, icon: Droplets, color: "text-teal-600" },
    "dispatch-plan": { title: "Dispatch Planner", component: <DispatchCalc />, icon: Truck, color: "text-indigo-600" },
  };

  const active = calculators[activeCalc];

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <Activity className="h-6 sm:h-7 w-6 sm:w-7 text-blue-600" />
          Industrial Production Suite
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Advanced tools for Yields, Process, and Plant Utility management
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <Label className="text-sm sm:text-base font-semibold mb-3 block">
            Select Management Tool
          </Label>
          <Select value={activeCalc} onValueChange={setActiveCalc}>
            <SelectTrigger className="w-full h-12 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-[350px]">
              
              <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border-b">
                📊 Product Yields
              </div>
              {yieldKeys.map((key) => {
                const item = calculators[key];
                return (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center gap-2">
                      <div className={item.color}>{React.createElement(item.icon, { className: "w-4 h-4" })}</div>
                      <span>{item.title}</span>
                    </div>
                  </SelectItem>
                );
              })}

              <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border-y mt-1">
                ⚡ Production Process
              </div>
              {processKeys.map((key) => {
                const item = calculators[key];
                return (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center gap-2">
                      <div className={item.color}>{React.createElement(item.icon, { className: "w-4 h-4" })}</div>
                      <span>{item.title}</span>
                    </div>
                  </SelectItem>
                );
              })}

              <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border-y mt-1">
                🛠️ Utility & Infrastructure
              </div>
              {utilityKeys.map((key) => {
                const item = calculators[key];
                return (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center gap-2">
                      <div className={item.color}>{React.createElement(item.icon, { className: "w-4 h-4" })}</div>
                      <span>{item.title}</span>
                    </div>
                  </SelectItem>
                );
              })}

            </SelectContent>
          </Select>
        </div>

        <div className="border-t pt-6">
          {active?.component}
        </div>
      </CardContent>
    </Card>
  );
}

// ==================== SUB-CALCULATORS (same as before) ====================
function CreamSeparationCalc() {
  const [milkQty, setMilkQty] = useState("100");
  const [milkFat, setMilkFat] = useState("4.5");
  const [creamFat, setCreamFat] = useState("40");
  const [skimFat, setSkimFat] = useState("0.05");
  const [result, setResult] = useState<{
    cream: number;
    skim: number;
    efficiency: number;
  } | null>(null);

  const { validatePositive, validatePercentage } = useInputValidation();
  const { toast } = useToast();

  const calculate = useCallback(() => {
    const validations = [
      validatePositive(milkQty, "Milk quantity"),
      validatePercentage(milkFat, "Milk fat"),
      validatePercentage(creamFat, "Cream fat"),
      validatePercentage(skimFat, "Skim fat"),
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

    const M = parseFloat(milkQty);
    const Fm = parseFloat(milkFat);
    const Fc = parseFloat(creamFat);
    const Fs = parseFloat(skimFat);

    if (Fc <= Fm || Fm <= Fs) {
      toast({
        title: "Invalid Parameters",
        description: "Cream fat must be > Milk fat > Skim milk fat",
        variant: "destructive",
      });
      return;
    }

    const C = (M * (Fm - Fs)) / (Fc - Fs);
    const S = M - C;
    const efficiency = ((C * Fc + S * Fs) / (M * Fm)) * 100;

    setResult({ cream: C, skim: S, efficiency });

    toast({
      title: "Calculation Complete",
      description: `Cream: ${C.toFixed(3)} kg, Skim: ${S.toFixed(3)} kg`,
    });
  }, [
    milkQty,
    milkFat,
    creamFat,
    skimFat,
    validatePositive,
    validatePercentage,
    toast,
  ]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Alert className="bg-blue-50 border-blue-200">
        <Droplets className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-sm sm:text-base">
          Cream Separation Calculator
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Calculate cream and skim milk yields using Pearson Square method
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ValidatedInput
          label="Milk Quantity"
          value={milkQty}
          onChange={setMilkQty}
          validation={validatePositive(milkQty)}
          unit="kg"
          icon={<Weight className="h-4 w-4 text-blue-500" />}
          colorScheme="blue"
        />
        <ValidatedInput
          label="Milk Fat"
          value={milkFat}
          onChange={setMilkFat}
          validation={validatePercentage(milkFat)}
          unit="%"
          icon={<Percent className="h-4 w-4 text-green-500" />}
          colorScheme="green"
        />
        <ValidatedInput
          label="Target Cream Fat"
          value={creamFat}
          onChange={setCreamFat}
          validation={validatePercentage(creamFat)}
          unit="%"
          icon={<Target className="h-4 w-4 text-yellow-500" />}
          helpText="Typical: 35-45%"
          colorScheme="orange"
        />
        <ValidatedInput
          label="Skim Milk Fat"
          value={skimFat}
          onChange={setSkimFat}
          validation={validatePercentage(skimFat)}
          unit="%"
          icon={<Droplets className="h-4 w-4 text-cyan-500" />}
          helpText="Typical: 0.03-0.1%"
          colorScheme="blue"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full h-11 sm:h-12 text-sm sm:text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
        size="lg"
      >
        <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        Calculate Separation
      </Button>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 animate-in slide-in-from-bottom-4">
          <ResultCard
            title="Cream Yield"
            value={result.cream}
            unit="kg"
            confidence="high"
            icon={<Droplets className="h-5 w-5" />}
            colorScheme="orange"
          />
          <ResultCard
            title="Skim Milk"
            value={result.skim}
            unit="kg"
            confidence="high"
            icon={<Droplets className="h-5 w-5" />}
            colorScheme="blue"
          />
          <ResultCard
            title="Efficiency"
            value={result.efficiency}
            unit="%"
            confidence="high"
            icon={<CheckCircle2 className="h-5 w-5" />}
            colorScheme="green"
          />
        </div>
      )}
    </div>
  );
}

function ButterYieldCalc() {
  const [creamQty, setCreamQty] = useState("100");
  const [creamFat, setCreamFat] = useState("40");
  const [butterFat, setButterFat] = useState("80");
  const [fatLoss, setFatLoss] = useState("1.5");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const { validatePositive, validatePercentage } = useInputValidation();
  const { toast } = useToast();

  const calculate = useCallback(() => {
    const validations = [
      validatePositive(creamQty, "Cream quantity"),
      validatePercentage(creamFat, "Cream fat"),
      validatePercentage(butterFat, "Butter fat"),
      validatePercentage(fatLoss, "Fat loss"),
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

    const C = parseFloat(creamQty);
    const Fc = parseFloat(creamFat) / 100;
    const Fb = parseFloat(butterFat) / 100;
    const L = parseFloat(fatLoss) / 100;

    const totalFatInCream = C * Fc;
    const recoveredFat = totalFatInCream * (1 - L);
    const butterYield = recoveredFat / Fb;
    const buttermilk = C - butterYield;
    const efficiency = (recoveredFat / totalFatInCream) * 100;

    const warnings: string[] = [];
    let confidence: "high" | "medium" | "low" = "high";

    if (L > 0.02) {
      confidence = "medium";
      warnings.push("Fat loss exceeds 2%. Consider optimizing churning process.");
    }

    if (Fb < 0.78 || Fb > 0.82) {
      warnings.push(
        "Butter fat outside FSSAI standard (78-82%). Verify composition."
      );
    }

    setResult({
      value: butterYield,
      unit: "kg",
      confidence,
      warnings,
      metadata: {
        buttermilk: buttermilk.toFixed(3),
        efficiency: efficiency.toFixed(2),
        recoveredFat: recoveredFat.toFixed(3),
      },
    });

    toast({
      title: "Calculation Complete",
      description: `Butter yield: ${butterYield.toFixed(3)} kg`,
    });
  }, [
    creamQty,
    creamFat,
    butterFat,
    fatLoss,
    validatePositive,
    validatePercentage,
    toast,
  ]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Alert className="bg-yellow-50 border-yellow-200">
        <Target className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="text-sm sm:text-base">
          Butter Yield Calculator
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Calculate butter production with churning efficiency analysis
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ValidatedInput
          label="Cream Quantity"
          value={creamQty}
          onChange={setCreamQty}
          validation={validatePositive(creamQty)}
          unit="kg"
          icon={<Weight className="h-4 w-4 text-yellow-500" />}
          colorScheme="orange"
        />
        <ValidatedInput
          label="Cream Fat"
          value={creamFat}
          onChange={setCreamFat}
          validation={validatePercentage(creamFat)}
          unit="%"
          icon={<Percent className="h-4 w-4 text-orange-500" />}
          helpText="Typical: 35-45%"
          colorScheme="orange"
        />
        <ValidatedInput
          label="Butter Fat"
          value={butterFat}
          onChange={setButterFat}
          validation={validatePercentage(butterFat)}
          unit="%"
          icon={<Target className="h-4 w-4 text-yellow-600" />}
          helpText="FSSAI: 78-82%"
          colorScheme="orange"
        />
        <ValidatedInput
          label="Fat Loss in Buttermilk"
          value={fatLoss}
          onChange={setFatLoss}
          validation={validatePercentage(fatLoss)}
          unit="%"
          icon={<Droplets className="h-4 w-4 text-blue-500" />}
          helpText="Typical: 0.5-2%"
          colorScheme="blue"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full h-11 sm:h-12 text-sm sm:text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
        size="lg"
      >
        <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        Calculate Butter Yield
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4">
          <ResultCard
            title="Estimated Butter Yield"
            value={result.value}
            unit={result.unit}
            confidence={result.confidence}
            icon={<Target className="h-5 w-5" />}
            colorScheme="orange"
            subtitle={`Buttermilk: ${result.metadata?.buttermilk} kg | Efficiency: ${result.metadata?.efficiency}%`}
            warnings={result.warnings}
          />
        </div>
      )}
    </div>
  );
}

function KhoaYieldCalc() {
  const [milkQty, setMilkQty] = useState("100");
  const [milkTS, setMilkTS] = useState("15");
  const [khoaTS, setKhoaTS] = useState("70");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const { validatePositive, validatePercentage } = useInputValidation();
  const { toast } = useToast();

  const calculate = useCallback(() => {
    const validations = [
      validatePositive(milkQty, "Milk quantity"),
      validatePercentage(milkTS, "Milk total solids"),
      validatePercentage(khoaTS, "Khoa total solids"),
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

    const M = parseFloat(milkQty);
    const Tm = parseFloat(milkTS) / 100;
    const Tk = parseFloat(khoaTS) / 100;

    const yieldAmt = (M * Tm) / Tk;
    const yieldPercentage = (yieldAmt / M) * 100;
    const waterEvaporated = M - yieldAmt;

    const warnings: string[] = [];
    let confidence: "high" | "medium" | "low" = "high";

    if (Tk < 0.65 || Tk > 0.75) {
      confidence = "medium";
      warnings.push("Khoa TS outside typical range (65-75%). Verify consistency.");
    }

    setResult({
      value: yieldAmt,
      unit: "kg",
      confidence,
      warnings,
      metadata: {
        yieldPercentage: yieldPercentage.toFixed(2),
        waterEvaporated: waterEvaporated.toFixed(3),
      },
    });

    toast({
      title: "Calculation Complete",
      description: `Khoa yield: ${yieldAmt.toFixed(3)} kg`,
    });
  }, [milkQty, milkTS, khoaTS, validatePositive, validatePercentage, toast]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Alert className="bg-orange-50 border-orange-200">
        <Thermometer className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-sm sm:text-base">
          Khoa Yield Calculator
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Calculate khoa production based on milk solid concentration
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <ValidatedInput
          label="Milk Quantity"
          value={milkQty}
          onChange={setMilkQty}
          validation={validatePositive(milkQty)}
          unit="kg"
          icon={<Weight className="h-4 w-4 text-blue-500" />}
          colorScheme="blue"
        />
        <ValidatedInput
          label="Milk Total Solids"
          value={milkTS}
          onChange={setMilkTS}
          validation={validatePercentage(milkTS)}
          unit="%"
          icon={<Percent className="h-4 w-4 text-green-500" />}
          helpText="Typical: 13-16%"
          colorScheme="green"
        />
        <ValidatedInput
          label="Khoa Total Solids"
          value={khoaTS}
          onChange={setKhoaTS}
          validation={validatePercentage(khoaTS)}
          unit="%"
          icon={<Target className="h-4 w-4 text-orange-500" />}
          helpText="Typical: 65-75%"
          colorScheme="orange"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full h-11 sm:h-12 text-sm sm:text-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
        size="lg"
      >
        <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        Calculate Khoa Yield
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4">
          <ResultCard
            title="Estimated Khoa Yield"
            value={result.value}
            unit={result.unit}
            confidence={result.confidence}
            icon={<Thermometer className="h-5 w-5" />}
            colorScheme="orange"
            subtitle={`Yield: ${result.metadata?.yieldPercentage}% | Water evaporated: ${result.metadata?.waterEvaporated} kg`}
            warnings={result.warnings}
          />
        </div>
      )}
    </div>
  );
}

function ShrikhandYieldCalc() {
  const [chakkaQty, setChakkaQty] = useState("100");
  const [chakkaTS, setChakkaTS] = useState("35");
  const [sugarAdded, setSugarAdded] = useState("80");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const { validatePositive, validatePercentage } = useInputValidation();
  const { toast } = useToast();

  const calculate = useCallback(() => {
    const validations = [
      validatePositive(chakkaQty, "Chakka quantity"),
      validatePercentage(chakkaTS, "Chakka total solids"),
      validatePositive(sugarAdded, "Sugar added"),
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

    const chakka = parseFloat(chakkaQty);
    const ts = parseFloat(chakkaTS) / 100;
    const sugar = parseFloat(sugarAdded);

    const shrikhandYield = chakka + sugar;
    const finalTS = ((chakka * ts + sugar) / shrikhandYield) * 100;
    const sugarPercentage = (sugar / shrikhandYield) * 100;

    const warnings: string[] = [];
    let confidence: "high" | "medium" | "low" = "high";

    if (finalTS < 68 || finalTS > 74) {
      confidence = "medium";
      warnings.push("Final TS outside FSSAI standard range (68-74%).");
    }

    if (sugarPercentage < 35 || sugarPercentage > 45) {
      warnings.push("Sugar content outside typical range (35-45%).");
    }

    setResult({
      value: shrikhandYield,
      unit: "kg",
      confidence,
      warnings,
      metadata: {
        finalTS: finalTS.toFixed(2),
        sugarPercentage: sugarPercentage.toFixed(2),
      },
    });

    toast({
      title: "Calculation Complete",
      description: `Shrikhand yield: ${shrikhandYield.toFixed(3)} kg`,
    });
  }, [
    chakkaQty,
    chakkaTS,
    sugarAdded,
    validatePositive,
    validatePercentage,
    toast,
  ]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Alert className="bg-purple-50 border-purple-200">
        <Weight className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-sm sm:text-base">
          Shrikhand Yield Calculator
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Calculate shrikhand production with FSSAI compliance check
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <ValidatedInput
          label="Chakka Quantity"
          value={chakkaQty}
          onChange={setChakkaQty}
          validation={validatePositive(chakkaQty)}
          unit="kg"
          icon={<Weight className="h-4 w-4 text-purple-500" />}
          colorScheme="purple"
        />
        <ValidatedInput
          label="Chakka Total Solids"
          value={chakkaTS}
          onChange={setChakkaTS}
          validation={validatePercentage(chakkaTS)}
          unit="%"
          icon={<Percent className="h-4 w-4 text-purple-600" />}
          helpText="Typical: 30-40%"
          colorScheme="purple"
        />
        <ValidatedInput
          label="Sugar Added"
          value={sugarAdded}
          onChange={setSugarAdded}
          validation={validatePositive(sugarAdded)}
          unit="kg"
          icon={<Target className="h-4 w-4 text-pink-500" />}
          colorScheme="pink"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full h-11 sm:h-12 text-sm sm:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        size="lg"
      >
        <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        Calculate Shrikhand Yield
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4">
          <ResultCard
            title="Estimated Shrikhand Yield"
            value={result.value}
            unit={result.unit}
            confidence={result.confidence}
            icon={<Weight className="h-5 w-5" />}
            colorScheme="purple"
            subtitle={`Final TS: ${result.metadata?.finalTS}% | Sugar: ${result.metadata?.sugarPercentage}%`}
            warnings={result.warnings}
          />
        </div>
      )}
    </div>
  );
}

function PedhaBurfiYieldCalc() {
  const [khoaQty, setKhoaQty] = useState("10");
  const [sugarAdded, setSugarAdded] = useState("3");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const { validatePositive } = useInputValidation();
  const { toast } = useToast();

  const calculate = useCallback(() => {
    const validations = [
      validatePositive(khoaQty, "Khoa quantity"),
      validatePositive(sugarAdded, "Sugar added"),
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

    const khoa = parseFloat(khoaQty);
    const sugar = parseFloat(sugarAdded);
    const totalMix = khoa + sugar;

    const moistureLoss = totalMix * 0.06;
    const yieldAmt = totalMix - moistureLoss;
    const sugarPercentage = (sugar / yieldAmt) * 100;

    const warnings: string[] = [];
    let confidence: "high" | "medium" | "low" = "high";

    if (sugarPercentage < 25 || sugarPercentage > 35) {
      warnings.push("Sugar content outside typical range (25-35%).");
    }

    setResult({
      value: yieldAmt,
      unit: "kg",
      confidence,
      warnings,
      metadata: {
        moistureLoss: moistureLoss.toFixed(3),
        sugarPercentage: sugarPercentage.toFixed(2),
        yieldPercentage: ((yieldAmt / totalMix) * 100).toFixed(2),
      },
    });

    toast({
      title: "Calculation Complete",
      description: `Pedha/Burfi yield: ${yieldAmt.toFixed(3)} kg`,
    });
  }, [khoaQty, sugarAdded, validatePositive, toast]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Alert className="bg-pink-50 border-pink-200">
        <PaneerIcon className="h-4 w-4 text-pink-600" />
        <AlertTitle className="text-sm sm:text-base">
          Pedha / Burfi Yield Calculator
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Calculate traditional sweets yield with moisture loss factor
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ValidatedInput
          label="Khoa Quantity"
          value={khoaQty}
          onChange={setKhoaQty}
          validation={validatePositive(khoaQty)}
          unit="kg"
          icon={<Weight className="h-4 w-4 text-orange-500" />}
          colorScheme="orange"
        />
        <ValidatedInput
          label="Sugar Added"
          value={sugarAdded}
          onChange={setSugarAdded}
          validation={validatePositive(sugarAdded)}
          unit="kg"
          icon={<Target className="h-4 w-4 text-pink-500" />}
          helpText="Typical: 25-35% of khoa"
          colorScheme="pink"
        />
      </div>

      <Button
        onClick={calculate}
        className="w-full h-11 sm:h-12 text-sm sm:text-lg bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
        size="lg"
      >
        <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        Calculate Yield
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4">
          <ResultCard
            title="Estimated Pedha/Burfi Yield"
            value={result.value}
            unit={result.unit}
            confidence={result.confidence}
            icon={<PaneerIcon className="h-5 w-5" />}
            colorScheme="pink"
            subtitle={`Moisture loss: ${result.metadata?.moistureLoss} kg | Sugar: ${result.metadata?.sugarPercentage}% | Yield: ${result.metadata?.yieldPercentage}%`}
            warnings={result.warnings}
          />
        </div>
      )}
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
  const [optionalTargets, setOptionalTargets] = useState([]);

  // Raw materials — 3 solver variables
  const [rawMaterials, setRawMaterials] = useState({
    base:      { name: "Milk (Full Fat 6%)",     fat: "6.0",  snf: "9.0" },
    fatSource: { name: "Cream (40% fat)",        fat: "40",   snf: "5.4" },
    smp:       { name: "SMP (Skim Milk Powder)", fat: "0.5",  snf: "97"  },
  });

  // Extra source ingredients added by user: [{ id, name, fat, snf, amount }]
  const [extraSources, setExtraSources] = useState([]);

  const [solverResult, setSolverResult]           = useState(null);
  const [verificationSteps, setVerificationSteps] = useState([]);

  // Manual tab rows
  const [manualRows, setManualRows] = useState([
    { id: 1, name: "Milk (Full Fat 6%)", amount: "55" },
  ]);

  // ── Optional target dropdown state ──
  const [showOptionalDropdown, setShowOptionalDropdown] = useState(false);
  const [showExtraSourceDropdown, setShowExtraSourceDropdown] = useState(false);

  // ── Helpers ───────────────────────────────────────────────────────────────

  const setRM = (key, field, value) =>
    setRawMaterials(prev => ({ ...prev, [key]: { ...prev[key], [field]: value } }));

  const handleRMSelect = (key, selectedName) => {
    const db = IC_INGREDIENT_DB[selectedName] || {};
    setRawMaterials(prev => ({
      ...prev,
      [key]: { name: selectedName, fat: String(db.fat ?? prev[key].fat), snf: String(db.snf ?? prev[key].snf) },
    }));
  };

  const handleProductTypeChange = (type) => {
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
  const addOptionalTarget = (option) => {
    if (optionalTargets.find(o => o.key === option.key)) return; // already added
    setOptionalTargets(prev => [...prev, { ...option, value: "0" }]);
    setShowOptionalDropdown(false);
  };

  const removeOptionalTarget = (key) =>
    setOptionalTargets(prev => prev.filter(o => o.key !== key));

  const updateOptionalTarget = (key, value) =>
    setOptionalTargets(prev => prev.map(o => o.key === key ? { ...o, value } : o));

  // Add extra source ingredient
  const addExtraSource = (name) => {
    const db = IC_INGREDIENT_DB[name] || {};
    setExtraSources(prev => [
      ...prev,
      { id: Date.now(), name, fat: String(db.fat ?? 0), snf: String(db.snf ?? 0) },
    ]);
    setShowExtraSourceDropdown(false);
  };

  const removeExtraSource = (id) =>
    setExtraSources(prev => prev.filter(s => s.id !== id));

  const updateExtraSource = (id, field, value) =>
    setExtraSources(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));

  const handleExtraSourceSelect = (id, name) => {
    const db = IC_INGREDIENT_DB[name] || {};
    setExtraSources(prev => prev.map(s =>
      s.id === id ? { ...s, name, fat: String(db.fat ?? 0), snf: String(db.snf ?? 0) } : s
    ));
  };

  // ── Categorized ingredient select ─────────────────────────────────────────
  const IngredientSelect = ({ value, onChange, className = "" }) => (
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

// ==================== ENHANCED PLANT EFFICIENCY CALCULATOR ====================
function PlantEfficiencyCalc() {
  const { toast } = useToast();
  const { validatePositive } = useInputValidation();

  const [inputs, setInputs] = useState({
    actualOutput: "8000",
    maxCapacity: "10000",
    stdTime: "10",
    actualTime: "12",
    energyConsumed: "1000",
    totalOutputEnergy: "8000",
    totalWaste: "500",
    totalInput: "10000",
  });

  const [weights, setWeights] = useState({
    capacity: 30,
    processing: 25,
    energy: 25,
    waste: 20,
  });

  const handleInputChange = useCallback(
    (field: keyof typeof inputs, value: string) => {
      setInputs((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleWeightChange = useCallback(
    (field: keyof typeof weights, value: number[]) => {
      setWeights((prev) => ({ ...prev, [field]: value[0] }));
    },
    []
  );

  const results = useMemo(() => {
    const actualOut = parseFloat(inputs.actualOutput);
    const maxCap = parseFloat(inputs.maxCapacity);
    const stdT = parseFloat(inputs.stdTime);
    const actT = parseFloat(inputs.actualTime);
    const energyConsumed = parseFloat(inputs.energyConsumed);
    const energyOutput = parseFloat(inputs.totalOutputEnergy);
    const waste = parseFloat(inputs.totalWaste);
    const totalIn = parseFloat(inputs.totalInput);

    // Calculate individual metrics
    const capacityUtilization = maxCap > 0 ? (actualOut / maxCap) * 100 : 0;
    const processingTimeEfficiency = actT > 0 ? (stdT / actT) * 100 : 0;
    const energyConsumptionPerUnit =
      energyOutput > 0 ? energyConsumed / energyOutput : 0;
    const wasteGeneration = totalIn > 0 ? (waste / totalIn) * 100 : 0;

    // Normalize scores (0-100, higher is better)
    const capacityScore = Math.min(100, Math.max(0, capacityUtilization));
    const timeScore = Math.min(100, Math.max(0, processingTimeEfficiency));
    const wasteScore = Math.max(0, 100 - wasteGeneration);

    // Energy score: Assumes 0.125 kWh/L is optimal (100), 0.5 kWh/L is poor (0)
    const energyScore =
      energyConsumptionPerUnit > 0
        ? Math.min(
            100,
            Math.max(0, 100 - (energyConsumptionPerUnit - 0.125) * 266.67)
          )
        : 0;

    const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);

    const overallEfficiency =
      totalWeight > 0
        ? (capacityScore * weights.capacity +
            timeScore * weights.processing +
            energyScore * weights.energy +
            wasteScore * weights.waste) /
          totalWeight
        : 0;

    // Determine confidence and warnings
    let confidence: "high" | "medium" | "low" = "high";
    const warnings: string[] = [];

    if (capacityUtilization < 60) {
      confidence = "medium";
      warnings.push("Capacity utilization below 60%. Consider production planning.");
    }
    if (processingTimeEfficiency < 80) {
      warnings.push("Processing efficiency below 80%. Review workflow optimization.");
    }
    if (energyConsumptionPerUnit > 0.2) {
      warnings.push("High energy consumption. Consider energy audit.");
    }
    if (wasteGeneration > 5) {
      warnings.push("Waste generation above 5%. Review quality control.");
    }

    return {
      capacityUtilization,
      processingTimeEfficiency,
      energyConsumptionPerUnit,
      wasteGeneration,
      capacityScore,
      timeScore,
      energyScore,
      wasteScore,
      overallEfficiency,
      confidence,
      warnings,
    };
  }, [inputs, weights]);

  const getEfficiencyGrade = (score: number): string => {
    if (score >= 90) return "A+ Excellent";
    if (score >= 80) return "A Good";
    if (score >= 70) return "B Average";
    if (score >= 60) return "C Below Average";
    return "D Poor";
  };

  const getScoreColor = (score: number): string => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <Factory className="h-6 sm:h-7 w-6 sm:w-7 text-orange-600" />
          Plant Efficiency Calculator
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Comprehensive plant performance analysis with weighted scoring
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT COLUMN - Input Metrics */}
          <div className="space-y-4">
            <Alert className="bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-sm font-semibold">
                Performance Metrics
              </AlertTitle>
              <AlertDescription className="text-xs">
                Enter actual operational data for each metric
              </AlertDescription>
            </Alert>

            {/* 1. Capacity Utilization */}
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  1. Capacity Utilization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ValidatedInput
                  label="Actual Output"
                  value={inputs.actualOutput}
                  onChange={(v) => handleInputChange("actualOutput", v)}
                  validation={validatePositive(inputs.actualOutput)}
                  unit="liters"
                  icon={<Droplets className="h-4 w-4 text-blue-500" />}
                  colorScheme="blue"
                />
                <ValidatedInput
                  label="Maximum Capacity"
                  value={inputs.maxCapacity}
                  onChange={(v) => handleInputChange("maxCapacity", v)}
                  validation={validatePositive(inputs.maxCapacity)}
                  unit="liters"
                  icon={<ChevronsUp className="h-4 w-4 text-blue-600" />}
                  colorScheme="blue"
                />
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-sm font-medium">Score:</span>
                  <span
                    className={cn(
                      "text-2xl font-bold",
                      getScoreColor(results.capacityScore)
                    )}
                  >
                    {results.capacityScore.toFixed(1)}%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 2. Processing Time Efficiency */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  2. Processing Time Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ValidatedInput
                  label="Standard Time"
                  value={inputs.stdTime}
                  onChange={(v) => handleInputChange("stdTime", v)}
                  validation={validatePositive(inputs.stdTime)}
                  unit="minutes"
                  icon={<Target className="h-4 w-4 text-green-500" />}
                  colorScheme="green"
                />
                <ValidatedInput
                  label="Actual Time Taken"
                  value={inputs.actualTime}
                  onChange={(v) => handleInputChange("actualTime", v)}
                  validation={validatePositive(inputs.actualTime)}
                  unit="minutes"
                  icon={<Thermometer className="h-4 w-4 text-green-600" />}
                  colorScheme="green"
                />
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-sm font-medium">Score:</span>
                  <span
                    className={cn(
                      "text-2xl font-bold",
                      getScoreColor(results.timeScore)
                    )}
                  >
                    {results.timeScore.toFixed(1)}%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 3. Energy Consumption */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  3. Energy Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ValidatedInput
                  label="Energy Consumed"
                  value={inputs.energyConsumed}
                  onChange={(v) => handleInputChange("energyConsumed", v)}
                  validation={validatePositive(inputs.energyConsumed)}
                  unit="kWh"
                  icon={<Zap className="h-4 w-4 text-yellow-500" />}
                  colorScheme="orange"
                />
                <ValidatedInput
                  label="Total Output"
                  value={inputs.totalOutputEnergy}
                  onChange={(v) => handleInputChange("totalOutputEnergy", v)}
                  validation={validatePositive(inputs.totalOutputEnergy)}
                  unit="liters"
                  icon={<Droplets className="h-4 w-4 text-orange-500" />}
                  colorScheme="orange"
                />
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium">kWh/Liter:</span>
                    <span className="text-lg font-bold text-orange-700">
                      {results.energyConsumptionPerUnit.toFixed(3)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium">Score:</span>
                    <span
                      className={cn(
                        "text-2xl font-bold",
                        getScoreColor(results.energyScore)
                      )}
                    >
                      {results.energyScore.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Waste Generation */}
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  4. Waste Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ValidatedInput
                  label="Total Waste Generated"
                  value={inputs.totalWaste}
                  onChange={(v) => handleInputChange("totalWaste", v)}
                  validation={validatePositive(inputs.totalWaste)}
                  unit="liters"
                  icon={<AlertTriangle className="h-4 w-4 text-red-500" />}
                  colorScheme="pink"
                />
                <ValidatedInput
                  label="Total Input"
                  value={inputs.totalInput}
                  onChange={(v) => handleInputChange("totalInput", v)}
                  validation={validatePositive(inputs.totalInput)}
                  unit="liters"
                  icon={<Droplets className="h-4 w-4 text-pink-500" />}
                  colorScheme="pink"
                />
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium">Waste %:</span>
                    <span className="text-lg font-bold text-red-700">
                      {results.wasteGeneration.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm font-medium">Score:</span>
                    <span
                      className={cn(
                        "text-2xl font-bold",
                        getScoreColor(results.wasteScore)
                      )}
                    >
                      {results.wasteScore.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN - Weights & Results */}
          <div className="space-y-4">
            <Alert className="bg-purple-50 border-purple-200">
              <Info className="h-4 w-4 text-purple-600" />
              <AlertTitle className="text-sm font-semibold">
                Custom Weighting
              </AlertTitle>
              <AlertDescription className="text-xs">
                Adjust importance of each metric based on your priorities
              </AlertDescription>
            </Alert>

            {/* Weights Configuration */}
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Assign Importance Weights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label className="text-sm font-medium">
                        Capacity Utilization
                      </Label>
                      <Badge variant="outline" className="bg-blue-100">
                        {weights.capacity}%
                      </Badge>
                    </div>
                    <Slider
                      value={[weights.capacity]}
                      max={100}
                      step={5}
                      onValueChange={(v) => handleWeightChange("capacity", v)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label className="text-sm font-medium">
                        Processing Time
                      </Label>
                      <Badge variant="outline" className="bg-green-100">
                        {weights.processing}%
                      </Badge>
                    </div>
                    <Slider
                      value={[weights.processing]}
                      max={100}
                      step={5}
                      onValueChange={(v) => handleWeightChange("processing", v)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label className="text-sm font-medium">
                        Energy Efficiency
                      </Label>
                      <Badge variant="outline" className="bg-yellow-100">
                        {weights.energy}%
                      </Badge>
                    </div>
                    <Slider
                      value={[weights.energy]}
                      max={100}
                      step={5}
                      onValueChange={(v) => handleWeightChange("energy", v)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label className="text-sm font-medium">
                        Waste Management
                      </Label>
                      <Badge variant="outline" className="bg-red-100">
                        {weights.waste}%
                      </Badge>
                    </div>
                    <Slider
                      value={[weights.waste]}
                      max={100}
                      step={5}
                      onValueChange={(v) => handleWeightChange("waste", v)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg border-2 border-purple-300">
                  <span className="font-semibold">Total Weight:</span>
                  <span
                    className={cn(
                      "text-xl font-bold",
                      Object.values(weights).reduce((a, b) => a + b, 0) === 100
                        ? "text-green-600"
                        : "text-orange-600"
                    )}
                  >
                    {Object.values(weights).reduce((a, b) => a + b, 0)}%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Overall Efficiency Result */}
            <Card className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 border-4 border-green-400 shadow-xl animate-in slide-in-from-bottom-4">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-2xl font-bold text-green-800 flex items-center justify-center gap-2">
                  <Factory className="h-7 w-7" />
                  Overall Plant Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-7xl font-extrabold text-green-700 drop-shadow-lg">
                  {results.overallEfficiency.toFixed(1)}%
                </div>
                <Badge
                  className={cn(
                    "text-lg px-4 py-2",
                    results.overallEfficiency >= 80
                      ? "bg-green-600"
                      : results.overallEfficiency >= 60
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  )}
                >
                  {getEfficiencyGrade(results.overallEfficiency)}
                </Badge>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-xs text-muted-foreground">Capacity</div>
                    <div
                      className={cn(
                        "text-xl font-bold",
                        getScoreColor(results.capacityScore)
                      )}
                    >
                      {results.capacityScore.toFixed(0)}%
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-xs text-muted-foreground">Time</div>
                    <div
                      className={cn(
                        "text-xl font-bold",
                        getScoreColor(results.timeScore)
                      )}
                    >
                      {results.timeScore.toFixed(0)}%
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-xs text-muted-foreground">Energy</div>
                    <div
                      className={cn(
                        "text-xl font-bold",
                        getScoreColor(results.energyScore)
                      )}
                    >
                      {results.energyScore.toFixed(0)}%
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-xs text-muted-foreground">Waste</div>
                    <div
                      className={cn(
                        "text-xl font-bold",
                        getScoreColor(results.wasteScore)
                      )}
                    >
                      {results.wasteScore.toFixed(0)}%
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warnings & Recommendations */}
            {results.warnings.length > 0 && (
              <Alert className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-300">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertTitle className="text-orange-900 font-semibold">
                  Improvement Recommendations
                </AlertTitle>
                <AlertDescription className="text-orange-800">
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm mt-2">
                    {results.warnings.map((warning, idx) => (
                      <li key={idx}>{warning}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Industry Benchmarks */}
            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900 font-semibold text-sm sm:text-base">
                Industry Benchmarks
              </AlertTitle>
              <AlertDescription className="text-blue-800 text-xs sm:text-sm space-y-1 mt-2">
                <div>
                  <strong>Capacity:</strong> 75-85% is optimal
                </div>
                <div>
                  <strong>Processing:</strong> 90%+ efficiency expected
                </div>
                <div>
                  <strong>Energy:</strong> 0.1-0.15 kWh/L is excellent
                </div>
                <div>
                  <strong>Waste:</strong> Below 3% is industry standard
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
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
              inputQty: "30000", // Larger volume for plant
              avgSellingPrice: "60", // Avg realization
              yieldFactor: "1.0", // Avg Yield
              packagingCost: "2.0",
              ingredientsCost: "0.5"
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
          }));
          // toast({ title: "Loaded", description: `${prod.label} settings applied.` });
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
    
    const inputVolume = vals.inputQty;
    const grossOutput = inputVolume * vals.yieldFactor;
    const lossQty = grossOutput * (vals.processLoss / 100);
    const saleableQty = grossOutput - lossQty;
    
    const totalRevenue = saleableQty * vals.avgSellingPrice;

    const totalRawCost = vals.rawMaterialCost * inputVolume;
    const totalPackCost = vals.packagingCost * saleableQty; 
    const totalIngCost = vals.ingredientsCost * saleableQty;
    const totalEnergyCost = vals.energyCost * saleableQty;
    const totalLogisticsCost = vals.logisticsCost * saleableQty;

    const totalVariableCost = totalRawCost + totalPackCost + totalIngCost + totalEnergyCost + totalLogisticsCost;
    const unitVariableCost = saleableQty > 0 ? totalVariableCost / saleableQty : 0;

    const monthlyFixed = fixedExpenses.reduce((sum, i) => sum + (parseFloat(i.cost) || 0), 0);
    const periodFixedCost = period === "monthly" ? monthlyFixed : monthlyFixed / 30;
    
    // In product mode, we allocate fixed cost based on share? 
    // No, for simplicity in "Product" mode, user typically sees Batch P&L against Total Fixed Cost
    // To make it realistic per product, we might check Break Even
    
    const totalCost = totalVariableCost + periodFixedCost;
    const grossProfit = totalRevenue - totalVariableCost;
    const netProfitPreTax = totalRevenue - totalCost;
    
    const taxAmount = netProfitPreTax > 0 ? netProfitPreTax * (vals.taxRate / 100) : 0;
    const netProfitPostTax = netProfitPreTax - taxAmount;

    const netMargin = totalRevenue > 0 ? (netProfitPostTax / totalRevenue) * 100 : 0;
    const breakEvenUnits = (vals.avgSellingPrice - unitVariableCost) > 0 
        ? periodFixedCost / (vals.avgSellingPrice - unitVariableCost) 
        : 0;
    
    const costStructure = {
        material: (totalRawCost / totalCost) * 100,
        overhead: ((totalCost - totalRawCost) / totalCost) * 100
    };

    return {
        saleableQty, totalRevenue, totalRawCost, totalVariableCost, periodFixedCost, totalCost,
        grossProfit, netProfitPreTax, taxAmount, netProfitPostTax, netMargin, breakEvenUnits,
        unitVariableCost, costStructure
    };
  }, [inputs, fixedExpenses, period]);

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
                    <CardDescription>P&L Analysis, Break-even & Tax Calculations</CardDescription>
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
                            <SelectItem value="curd_fcm">Premium Curd</SelectItem>
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
                <Calculator className="h-4 w-4"/> {scope === 'plant' ? 'Plant Throughput' : 'Product Batching'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SmartInput label="Input (Milk)" name="inputQty" value={inputs.inputQty} setter={handleInputChange} validation={validatePositive(inputs.inputQty)} icon={<Droplets className="h-3 w-3"/>} suffix="L/Kg" />
                <SmartInput label="Yield Factor" name="yieldFactor" value={inputs.yieldFactor} setter={handleInputChange} validation={validatePositive(inputs.yieldFactor)} icon={<Target className="h-3 w-3"/>} suffix="Out/In" colorScheme="orange" readOnly={scope==='product'} />
                <SmartInput label="Selling Price" name="avgSellingPrice" value={inputs.avgSellingPrice} setter={handleInputChange} validation={validatePositive(inputs.avgSellingPrice)} icon={<DollarSign className="h-3 w-3"/>} suffix="₹/Unit" colorScheme="green" />
            </div>

            <div className="grid grid-cols-3 gap-0 bg-slate-100 rounded-lg border border-slate-200 overflow-hidden text-center divide-x divide-slate-300">
                <div className="p-2">
                    <div className="text-[9px] font-bold text-slate-500 uppercase">Input</div>
                    <div className="text-sm font-bold text-slate-800">{inputs.inputQty}</div>
                </div>
                <div className="p-2 bg-indigo-50/50">
                    <div className="text-[9px] font-bold text-indigo-500 uppercase">Gross Output</div>
                    <div className="text-sm font-bold text-indigo-700">{fmt(inputs.inputQty * parseFloat(inputs.yieldFactor))}</div>
                </div>
                <div className="p-2 bg-green-50/50">
                    <div className="text-[9px] font-bold text-green-600 uppercase">Saleable</div>
                    <div className="text-base font-extrabold text-green-700">{fmt(results.saleableQty)}</div>
                </div>
            </div>
        </section>

        {/* === SECTION 2: VARIABLE COSTS === */}
        <section className="space-y-4 pt-4 border-t">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 flex items-center gap-2"><Weight className="h-4 w-4"/> Variable Costs</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <SmartInput label="Raw Milk" name="rawMaterialCost" value={inputs.rawMaterialCost} setter={handleInputChange} colorScheme="orange" suffix="₹/In" />
                <SmartInput label="Packaging" name="packagingCost" value={inputs.packagingCost} setter={handleInputChange} options={VARIABLE_COST_PRESETS.packaging} colorScheme="purple" suffix="₹/Out" />
                <SmartInput label="Additives/Spice" name="ingredientsCost" value={inputs.ingredientsCost} setter={handleInputChange} options={VARIABLE_COST_PRESETS.ingredients} colorScheme="blue" suffix="₹/Out" />
                <SmartInput label="Energy/Fuel" name="energyCost" value={inputs.energyCost} setter={handleInputChange} options={VARIABLE_COST_PRESETS.energy} colorScheme="orange" suffix="₹/Out" />
                <SmartInput label="Logistics" name="logisticsCost" value={inputs.logisticsCost} setter={handleInputChange} colorScheme="pink" suffix="₹/Out" />
                <SmartInput label="Process Loss" name="processLoss" value={inputs.processLoss} setter={handleInputChange} colorScheme="red" suffix="%" />
            </div>
        </section>

        {/* === SECTION 3: FIXED EXPENSES === */}
        <section className="space-y-4 pt-4 border-t">
            <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 flex items-center gap-2"><Factory className="h-4 w-4"/> Fixed Overheads ({period})</h3>
                <Button variant="outline" size="sm" onClick={handleFixedExpense.add} className="h-7 text-xs"><PlusCircle className="w-3 h-3 mr-1"/> Add</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {fixedExpenses.map(item => <FixedExpenseRow key={item.id} item={item} onChange={handleFixedExpense.change} onRemove={handleFixedExpense.remove} />)}
            </div>
        </section>

        {/* === RESULTS SECTION === */}
        <div ref={reportRef} className="bg-white border-2 border-indigo-100 rounded-xl overflow-hidden mt-6 shadow-sm">
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2"><PieChart className="w-5 h-5"/> {scope === 'plant' ? 'Total Plant Report' : `${PRODUCT_CATALOG[selectedProduct]?.label || 'Product'} Report`}</h2>
                <Badge variant="secondary" className="bg-white/20 text-white">{period.toUpperCase()}</Badge>
            </div>
            
            <div className="p-4 bg-slate-50 border-b">
                <div className="flex justify-between text-xs mb-1 font-medium text-slate-600">
                    <span>Raw Material ({results.costStructure.material.toFixed(0)}%)</span>
                    <span>Overheads & Ops ({results.costStructure.overhead.toFixed(0)}%)</span>
                </div>
                <div className="h-3 w-full flex rounded-full overflow-hidden">
                    <div className="bg-blue-500" style={{ width: `${results.costStructure.material}%` }} />
                    <div className="bg-orange-400" style={{ width: `${results.costStructure.overhead}%` }} />
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <Table className="w-full min-w-[300px]">
                    <TableBody>
                        <TableRow className="hover:bg-slate-50">
                            <TableCell className="font-medium text-slate-600 pl-4">Revenue ({fmt(results.saleableQty)} units)</TableCell>
                            <TableCell className="text-right font-bold text-green-600 pr-4 text-lg">₹ {fmt(results.totalRevenue)}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50">
                            <TableCell className="font-medium text-slate-600 pl-4">Total Expenses</TableCell>
                            <TableCell className="text-right font-bold text-red-500 pr-4">- ₹ {fmt(results.totalCost)}</TableCell>
                        </TableRow>
                        <TableRow className="bg-slate-100 border-t-2 border-slate-200">
                            <TableCell className="font-bold pl-4">Gross Profit (Pre-Tax)</TableCell>
                            <TableCell className={cn("text-right font-bold text-lg pr-4", results.netProfitPreTax > 0 ? "text-indigo-700" : "text-red-600")}>
                                ₹ {fmt(results.netProfitPreTax)}
                            </TableCell>
                        </TableRow>
                        {parseFloat(inputs.taxRate) > 0 && (
                            <TableRow className="text-sm">
                                <TableCell className="pl-4 text-muted-foreground">Tax @ {inputs.taxRate}%</TableCell>
                                <TableCell className="text-right text-red-400 pr-4">- ₹ {fmt(results.taxAmount)}</TableCell>
                            </TableRow>
                        )}
                        <TableRow className="bg-indigo-50 border-t border-indigo-100">
                            <TableCell className="font-extrabold pl-4 text-indigo-900">NET PROFIT (Post-Tax)</TableCell>
                            <TableCell className={cn("text-right font-extrabold text-xl pr-4", results.netProfitPostTax > 0 ? "text-green-600" : "text-red-600")}>
                                ₹ {fmt(results.netProfitPostTax)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-slate-50">
                <PlantResultCard title="Net Margin" value={results.netMargin.toFixed(1)} unit="%" icon={Target} color={results.netMargin > 15 ? "border-green-300 bg-green-50 text-green-900" : "border-orange-300 bg-orange-50 text-orange-900"} />
                <PlantResultCard title="Break Even" value={fmt(results.breakEvenUnits)} unit="Units" icon={ArrowRight} color="border-blue-300 bg-blue-50 text-blue-900" subtitle="To survive" />
                <div className="col-span-2 md:col-span-2 p-3 rounded-xl border bg-white flex items-center justify-between shadow-sm">
                    <div className="flex flex-col"><span className="text-[10px] uppercase font-bold text-slate-400">Taxation</span><div className="flex items-center gap-2"><span className="text-sm font-semibold">Rate:</span><Input className="h-6 w-16 text-right text-xs" value={inputs.taxRate} onChange={(e) => handleInputChange('taxRate', e.target.value)} /><span className="text-sm">%</span></div></div>
                    <div className="text-right"><span className="text-[10px] uppercase font-bold text-slate-400">Profit / Unit</span><div className="text-lg font-bold text-indigo-600">₹ {(results.netProfitPostTax / results.saleableQty || 0).toFixed(1)}</div></div>
                </div>
            </div>
        </div>

        <Button onClick={downloadPdf} disabled={isDownloading} className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-lg shadow-md mt-4">
            {isDownloading ? <Loader2 className="mr-2 animate-spin"/> : <FileDown className="mr-2"/>} Download Report PDF
        </Button>

      </CardContent>
    </Card>
  );
}

// ... (PlantCostCalc upar khatam ho gaya)

// ==================== MASS BALANCE CALCULATOR ====================

// MemoizedInputRow Component
const MemoizedInputRow = memo(({ 
    label, 
    fatName, 
    snfName, 
    inputs, 
    onInputChange 
}: { 
    label: string; 
    fatName: keyof MassBalanceInputs; 
    snfName: keyof MassBalanceInputs; 
    inputs: MassBalanceInputs; 
    onInputChange: (field: keyof MassBalanceInputs, value: string) => void;
}) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center">
        <Label className="text-sm md:text-base font-semibold">{label}</Label>
        <Input 
            type="number" 
            step="0.001"
            value={inputs[fatName]} 
            onChange={(e) => onInputChange(fatName, e.target.value)} 
            placeholder="0.000"
            className="h-10 md:h-11 text-sm md:text-base border-2"
        />
        <Input 
            type="number" 
            step="0.001"
            value={inputs[snfName]} 
            onChange={(e) => onInputChange(snfName, e.target.value)} 
            placeholder="0.000"
            className="h-10 md:h-11 text-sm md:text-base border-2"
        />
    </div>
));

MemoizedInputRow.displayName = 'MemoizedInputRow';

function MassBalanceCalc() {
    const [inputs, setInputs] = useState<MassBalanceInputs>({
        openingFat: '', openingSnf: '',
        intakeFat: '', intakeSnf: '',
        addedFat: '', addedSnf: '',
        dispatchedFat: '', dispatchedSnf: '',
        removedFat: '', removedSnf: '',
        closingFat: '', closingSnf: ''
    });
    
    const [calculationSteps, setCalculationSteps] = useState<string[]>([]);
    const [isDownloading, setIsDownloading] = useState(false);
    const reportRef = useRef<HTMLDivElement>(null);
    // const { toast } = useToast(); // Already imported at top

    const handleInputChange = useCallback((field: keyof MassBalanceInputs, value: string) => {
        setInputs(prev => ({...prev, [field]: value}));
    }, []);

    const results = useMemo(() => {
        const opF = parseFloat(inputs.openingFat) || 0;
        const opS = parseFloat(inputs.openingSnf) || 0;
        const inF = parseFloat(inputs.intakeFat) || 0;
        const inS = parseFloat(inputs.intakeSnf) || 0;
        const adF = parseFloat(inputs.addedFat) || 0;
        const adS = parseFloat(inputs.addedSnf) || 0;
        const dispF = parseFloat(inputs.dispatchedFat) || 0;
        const dispS = parseFloat(inputs.dispatchedSnf) || 0;
        const remF = parseFloat(inputs.removedFat) || 0;
        const remS = parseFloat(inputs.removedSnf) || 0;
        const clF = parseFloat(inputs.closingFat) || 0;
        const clS = parseFloat(inputs.closingSnf) || 0;

        const totalInFat = opF + inF + adF;
        const totalInSnf = opS + inS + adS;
        
        const totalOutFat = dispF + remF + clF;
        const totalOutSnf = dispS + remS + clS;

        const gainLossFat = totalInFat - totalOutFat;
        const gainLossSnf = totalInSnf - totalOutSnf;

        // Generate calculation steps
        const steps: string[] = [];
        
        steps.push(`📊 **═══════════ MASS BALANCE CALCULATION ═══════════**`);
        
        steps.push(`\n\n📥 **═══════════ STEP 1: TOTAL INPUTS ═══════════**`);
        steps.push(`\n   FAT INPUTS:`);
        steps.push(`     Opening Balance: ${opF.toFixed(6)} kg`);
        steps.push(`     Total Intake: ${inF.toFixed(6)} kg`);
        steps.push(`     Added (SMP/etc): ${adF.toFixed(6)} kg`);
        steps.push(`     ─────────────────────────────`);
        steps.push(`     Total Fat In = ${opF.toFixed(6)} + ${inF.toFixed(6)} + ${adF.toFixed(6)}`);
        steps.push(`                  = ${totalInFat.toFixed(8)} kg`);
        
        steps.push(`\n   SNF INPUTS:`);
        steps.push(`     Opening Balance: ${opS.toFixed(6)} kg`);
        steps.push(`     Total Intake: ${inS.toFixed(6)} kg`);
        steps.push(`     Added (SMP/etc): ${adS.toFixed(6)} kg`);
        steps.push(`     ─────────────────────────────`);
        steps.push(`     Total SNF In = ${opS.toFixed(6)} + ${inS.toFixed(6)} + ${adS.toFixed(6)}`);
        steps.push(`                  = ${totalInSnf.toFixed(8)} kg`);

        steps.push(`\n\n📤 **═══════════ STEP 2: TOTAL OUTPUTS ═══════════**`);
        steps.push(`\n   FAT OUTPUTS:`);
        steps.push(`     Dispatched (Products): ${dispF.toFixed(6)} kg`);
        steps.push(`     Removed (Cream/etc): ${remF.toFixed(6)} kg`);
        steps.push(`     Closing Balance: ${clF.toFixed(6)} kg`);
        steps.push(`     ─────────────────────────────`);
        steps.push(`     Total Fat Out = ${dispF.toFixed(6)} + ${remF.toFixed(6)} + ${clF.toFixed(6)}`);
        steps.push(`                   = ${totalOutFat.toFixed(8)} kg`);
        
        steps.push(`\n   SNF OUTPUTS:`);
        steps.push(`     Dispatched (Products): ${dispS.toFixed(6)} kg`);
        steps.push(`     Removed (Cream/etc): ${remS.toFixed(6)} kg`);
        steps.push(`     Closing Balance: ${clS.toFixed(6)} kg`);
        steps.push(`     ─────────────────────────────`);
        steps.push(`     Total SNF Out = ${dispS.toFixed(6)} + ${remS.toFixed(6)} + ${clS.toFixed(6)}`);
        steps.push(`                   = ${totalOutSnf.toFixed(8)} kg`);

        steps.push(`\n\n⚖️ **═══════════ STEP 3: MASS BALANCE RECONCILIATION ═══════════**`);
        steps.push(`\n   FAT RECONCILIATION:`);
        steps.push(`     Total Fat In: ${totalInFat.toFixed(8)} kg`);
        steps.push(`     Total Fat Out: ${totalOutFat.toFixed(8)} kg`);
        steps.push(`     Fat Gain/Loss = In - Out`);
        steps.push(`                   = ${totalInFat.toFixed(8)} - ${totalOutFat.toFixed(8)}`);
        steps.push(`                   = ${gainLossFat.toFixed(8)} kg`);
        steps.push(`     Status: ${gainLossFat >= 0 ? '✅ Gain' : '⚠️ Loss'} (${Math.abs(gainLossFat).toFixed(8)} kg)`);
        
        steps.push(`\n   SNF RECONCILIATION:`);
        steps.push(`     Total SNF In: ${totalInSnf.toFixed(8)} kg`);
        steps.push(`     Total SNF Out: ${totalOutSnf.toFixed(8)} kg`);
        steps.push(`     SNF Gain/Loss = In - Out`);
        steps.push(`                   = ${totalInSnf.toFixed(8)} - ${totalOutSnf.toFixed(8)}`);
        steps.push(`                   = ${gainLossSnf.toFixed(8)} kg`);
        steps.push(`     Status: ${gainLossSnf >= 0 ? '✅ Gain' : '⚠️ Loss'} (${Math.abs(gainLossSnf).toFixed(8)} kg)`);

        steps.push(`\n\n📈 **═══════════ STEP 4: PERCENTAGE ANALYSIS ═══════════**`);
        const fatLossPercentage = totalInFat > 0 ? (Math.abs(gainLossFat) / totalInFat) * 100 : 0;
        const snfLossPercentage = totalInSnf > 0 ? (Math.abs(gainLossSnf) / totalInSnf) * 100 : 0;
        
        steps.push(`\n   FAT LOSS/GAIN PERCENTAGE:`);
        steps.push(`     = (|Gain/Loss| / Total In) × 100`);
        steps.push(`     = (${Math.abs(gainLossFat).toFixed(8)} / ${totalInFat.toFixed(8)}) × 100`);
        steps.push(`     = ${fatLossPercentage.toFixed(6)}%`);
        
        steps.push(`\n   SNF LOSS/GAIN PERCENTAGE:`);
        steps.push(`     = (|Gain/Loss| / Total In) × 100`);
        steps.push(`     = (${Math.abs(gainLossSnf).toFixed(8)} / ${totalInSnf.toFixed(8)}) × 100`);
        steps.push(`     = ${snfLossPercentage.toFixed(6)}%`);

        steps.push(`\n\n✨ **═══════════ FINAL SUMMARY ═══════════**`);
        steps.push(`\n   Fat Balance:`);
        steps.push(`     - Total In: ${totalInFat.toFixed(6)} kg`);
        steps.push(`     - Total Out: ${totalOutFat.toFixed(6)} kg`);
        steps.push(`     - Net: ${gainLossFat >= 0 ? 'Gain' : 'Loss'} of ${Math.abs(gainLossFat).toFixed(6)} kg (${fatLossPercentage.toFixed(4)}%)`);
        
        steps.push(`\n   SNF Balance:`);
        steps.push(`     - Total In: ${totalInSnf.toFixed(6)} kg`);
        steps.push(`     - Total Out: ${totalOutSnf.toFixed(6)} kg`);
        steps.push(`     - Net: ${gainLossSnf >= 0 ? 'Gain' : 'Loss'} of ${Math.abs(gainLossSnf).toFixed(6)} kg (${snfLossPercentage.toFixed(4)}%)`);

        setCalculationSteps(steps);

        return {
            totalInFat, totalInSnf,
            totalOutFat, totalOutSnf,
            gainLossFat, gainLossSnf,
            fatLossPercentage, snfLossPercentage
        };
    }, [inputs]);

    const handleDownloadPdf = async () => {
        const reportElement = reportRef.current;
        if (!reportElement) return;

        setIsDownloading(true);
        try {
            const canvas = await html2canvas(reportElement, {
                scale: 2, 
                useCORS: true,
                backgroundColor: '#ffffff'
            });
            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = imgWidth / imgHeight;
            
            let finalImgWidth = pdfWidth - 20;
            let finalImgHeight = finalImgWidth / ratio;
            
            if (finalImgHeight > pdfHeight - 20) {
                finalImgHeight = pdfHeight - 20;
                finalImgWidth = finalImgHeight * ratio;
            }

            const x = (pdfWidth - finalImgWidth) / 2;
            const y = 10;
            
            pdf.addImage(imgData, 'PNG', x, y, finalImgWidth, finalImgHeight);
            pdf.save(`mass_balance_report_${new Date().toISOString().slice(0,10)}.pdf`);
            
            // toast({
            //     title: "✅ PDF Downloaded",
            //     description: "Mass balance report has been saved successfully."
            // });
        } catch (error) {
            console.error("Failed to generate PDF", error);
            // toast({ 
            //     variant: "destructive", 
            //     title: "PDF Error", 
            //     description: "Could not generate the PDF report." 
            // });
        } finally {
            setIsDownloading(false);
        }
    };
    
    return (
        <Card className="border-2 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                    <Scale className="h-6 sm:h-7 w-6 sm:w-7 text-blue-600" />
                    Fat & SNF Mass Balance Calculator
                </CardTitle>
                <CardDescription>
                    Track plant efficiency by calculating gain/loss of fat and SNF during processing. All values in Kilograms (kg).
                </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
            {/* Input Section */}
            <div className="space-y-6 p-4 md:p-6 bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl border-2 border-gray-300 shadow-md">
                {/* Header Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 font-bold text-center text-sm md:text-base bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-lg border-2 border-indigo-300">
                    <span className="text-indigo-800">Component</span>
                    <span className="text-yellow-800">Fat (kg)</span>
                    <span className="text-pink-800">SNF (kg)</span>
                </div>
                
                {/* INPUTS Section */}
                <div className="space-y-4 bg-green-50 p-4 md:p-5 rounded-xl border-2 border-green-300">
                    <h4 className="text-lg md:text-xl font-bold text-green-700 flex items-center gap-2">
                        <Plus className="w-5 h-5 md:w-6 md:h-6"/>
                        Total Inputs
                    </h4>
                    <MemoizedInputRow label="Opening Balance" fatName="openingFat" snfName="openingSnf" inputs={inputs} onInputChange={handleInputChange}/>
                    <MemoizedInputRow label="Total Intake" fatName="intakeFat" snfName="intakeSnf" inputs={inputs} onInputChange={handleInputChange}/>
                    <MemoizedInputRow label="Added (SMP/etc)" fatName="addedFat" snfName="addedSnf" inputs={inputs} onInputChange={handleInputChange}/>
                </div>

                <hr className="border-2 border-dashed border-gray-400"/>

                {/* OUTPUTS Section */}
                <div className="space-y-4 bg-red-50 p-4 md:p-5 rounded-xl border-2 border-red-300">
                    <h4 className="text-lg md:text-xl font-bold text-red-700 flex items-center gap-2">
                        <Minus className="w-5 h-5 md:w-6 md:h-6"/>
                        Total Outputs
                    </h4>
                    <MemoizedInputRow label="Dispatched (Products)" fatName="dispatchedFat" snfName="dispatchedSnf" inputs={inputs} onInputChange={handleInputChange}/>
                    <MemoizedInputRow label="Removed (Cream/etc)" fatName="removedFat" snfName="removedSnf" inputs={inputs} onInputChange={handleInputChange}/>
                    <MemoizedInputRow label="Closing Balance" fatName="closingFat" snfName="closingSnf" inputs={inputs} onInputChange={handleInputChange}/>
                </div>
            </div>

            {/* Results Section */}
            <div ref={reportRef} className="mt-6 space-y-6">
                <Alert className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 border-3 border-blue-500 shadow-xl">
                    <Scale className="h-6 w-6 md:h-8 md:w-8 text-blue-700" />
                    <AlertTitle className="text-xl md:text-2xl font-extrabold text-center text-blue-900 mb-4">
                        ⚖️ Mass Balance Reconciliation
                    </AlertTitle>
                    <AlertDescription>
                        {/* In vs Out Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 md:p-5 rounded-xl border-2 border-green-400 shadow-md">
                                <p className="text-xs md:text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Total Fat In
                                </p>
                                <p className="text-3xl md:text-4xl font-extrabold text-green-800">{results.totalInFat.toFixed(4)}</p>
                                <p className="text-sm text-green-600">kg</p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-red-100 to-rose-100 p-4 md:p-5 rounded-xl border-2 border-red-400 shadow-md">
                                <p className="text-xs md:text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                                    <TrendingDown className="w-4 h-4" />
                                    Total Fat Out
                                </p>
                                <p className="text-3xl md:text-4xl font-extrabold text-red-800">{results.totalOutFat.toFixed(4)}</p>
                                <p className="text-sm text-red-600">kg</p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 md:p-5 rounded-xl border-2 border-green-400 shadow-md">
                                <p className="text-xs md:text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Total SNF In
                                </p>
                                <p className="text-3xl md:text-4xl font-extrabold text-green-800">{results.totalInSnf.toFixed(4)}</p>
                                <p className="text-sm text-green-600">kg</p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-red-100 to-rose-100 p-4 md:p-5 rounded-xl border-2 border-red-400 shadow-md">
                                <p className="text-xs md:text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                                    <TrendingDown className="w-4 h-4" />
                                    Total SNF Out
                                </p>
                                <p className="text-3xl md:text-4xl font-extrabold text-red-800">{results.totalOutSnf.toFixed(4)}</p>
                                <p className="text-sm text-red-600">kg</p>
                            </div>
                        </div>

                        {/* Gain/Loss Analysis */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className={cn(
                                "p-4 md:p-5 rounded-xl border-2 shadow-md",
                                results.gainLossFat >= 0 
                                    ? "bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-400" 
                                    : "bg-gradient-to-br from-orange-100 to-amber-100 border-orange-400"
                            )}>
                                <p className="text-xs md:text-sm font-semibold mb-2 flex items-center gap-2">
                                    {results.gainLossFat >= 0 ? (
                                        <CheckCircle2 className="w-4 h-4 text-blue-700" />
                                    ) : (
                                        <AlertTriangle className="w-4 h-4 text-orange-700" />
                                    )}
                                    Fat {results.gainLossFat >= 0 ? 'Gain' : 'Loss'}
                                </p>
                                <p className={cn(
                                    "text-3xl md:text-4xl font-extrabold",
                                    results.gainLossFat >= 0 ? "text-blue-800" : "text-orange-800"
                                )}>
                                    {results.gainLossFat >= 0 ? '+' : ''}{results.gainLossFat.toFixed(4)}
                                </p>
                                <p className="text-sm mt-1">kg ({results.fatLossPercentage.toFixed(4)}%)</p>
                            </div>
                            
                            <div className={cn(
                                "p-4 md:p-5 rounded-xl border-2 shadow-md",
                                results.gainLossSnf >= 0 
                                    ? "bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-400" 
                                    : "bg-gradient-to-br from-orange-100 to-amber-100 border-orange-400"
                            )}>
                                <p className="text-xs md:text-sm font-semibold mb-2 flex items-center gap-2">
                                    {results.gainLossSnf >= 0 ? (
                                        <CheckCircle2 className="w-4 h-4 text-blue-700" />
                                    ) : (
                                        <AlertTriangle className="w-4 h-4 text-orange-700" />
                                    )}
                                    SNF {results.gainLossSnf >= 0 ? 'Gain' : 'Loss'}
                                </p>
                                <p className={cn(
                                    "text-3xl md:text-4xl font-extrabold",
                                    results.gainLossSnf >= 0 ? "text-blue-800" : "text-orange-800"
                                )}>
                                    {results.gainLossSnf >= 0 ? '+' : ''}{results.gainLossSnf.toFixed(4)}
                                </p>
                                <p className="text-sm mt-1">kg ({results.snfLossPercentage.toFixed(4)}%)</p>
                            </div>
                        </div>
                    </AlertDescription>
                </Alert>

                {/* Calculation Steps */}
                <div className="bg-gradient-to-br from-gray-100 to-slate-200 p-4 md:p-6 rounded-xl border-2 border-gray-400 shadow-xl">
                    <h4 className="font-extrabold text-base md:text-xl mb-3 md:mb-4 flex items-center gap-2 text-gray-800">
                        <Calculator className="w-5 h-5 md:w-6 md:h-6" />
                        Complete Mass Balance Calculation
                    </h4>
                    <ScrollArea className="h-[300px] md:h-[500px] pr-2 md:pr-4">
                        <div className="space-y-1 text-xs md:text-sm font-mono leading-relaxed">
                            {calculationSteps.map((step, idx) => (
                                <p 
                                    key={idx} 
                                    className={cn(
                                        step.includes('**') && 'font-extrabold mt-3 text-gray-900 text-sm md:text-base',
                                        step.includes('═══') && 'text-purple-700 font-extrabold text-base md:text-lg',
                                        step.includes('✅') && 'text-green-700 font-bold',
                                        step.includes('⚠️') && 'text-yellow-700 font-bold',
                                        !step.includes('**') && !step.includes('✅') && !step.includes('⚠️') && !step.includes('═══') && 'text-gray-700'
                                    )}
                                >
                                    {step.replace(/\*\*/g, '')}
                                </p>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="mt-3 md:mt-4 p-3 md:p-4 bg-green-100 border-2 border-green-300 rounded-xl shadow-md">
                        <p className="text-xs md:text-sm text-green-900 font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                            <span>✓ Complete mass balance verification with percentage analysis!</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <div className="text-center mt-6">
                <Button 
                    onClick={handleDownloadPdf} 
                    disabled={isDownloading}
                    className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                    {isDownloading ? (
                        <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Generating PDF...
                        </>
                    ) : (
                        <>
                            <FileDown className="mr-2 w-5 h-5" />
                            Download Report as PDF
                        </>
                    )}
                </Button>
            </div>
            </CardContent>
        </Card>
    );
}
