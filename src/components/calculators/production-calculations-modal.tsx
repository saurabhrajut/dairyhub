
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
  Target,
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
  BadgeIndianRupee, // <--- YE ADD KAREIN
  Snowflake,
  IceCream2,
  PieChart,
  ArrowRight,
  LayoutDashboard, // <--- YE ADD KAREIN
  Package,         // <--- YE BHI ADD KAREIN
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

// ==================== ENHANCED YIELDS CALCULATOR ====================
function YieldsCalc() {
  const [activeCalc, setActiveCalc] = useState("cream-sep");

  const calculators = {
    "cream-sep": {
      title: "Cream Separation",
      component: <CreamSeparationCalc />,
      icon: Droplets,
      color: "text-blue-600",
    },
    butter: {
      title: "Butter Yield",
      component: <ButterYieldCalc />,
      icon: Target,
      color: "text-yellow-600",
    },
    khoa: {
      title: "Khoa Yield",
      component: <KhoaYieldCalc />,
      icon: Thermometer,
      color: "text-orange-600",
    },
    shrikhand: {
      title: "Shrikhand Yield",
      component: <ShrikhandYieldCalc />,
      icon: Weight,
      color: "text-purple-600",
    },
    pedha: {
      title: "Pedha/Burfi Yield",
      component: <PedhaBurfiYieldCalc />,
      icon: PaneerIcon,
      color: "text-pink-600",
    },
  };

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <Percent className="h-6 sm:h-7 w-6 sm:w-7 text-blue-600" />
          Product Yield Calculators
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Precision yield calculations for various dairy products
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* DROPDOWN - BOTH Mobile & Desktop */}
        <div className="mb-6">
          <Label className="text-sm sm:text-base font-semibold mb-3 block">
            Select Product Calculator
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
