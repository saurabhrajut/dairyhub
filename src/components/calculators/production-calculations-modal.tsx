
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
  Calculator,
  Zap,
  PlusCircle,
  FileDown,
  Loader2,
  Plus,          // ✅ ADDED
  Minus,         // ✅ ADDED
  Scale,         // ✅ ADDED
  TrendingUp,    // ✅ ADDED
  TrendingDown,  // ✅ ADDED
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

// ==================== MIX COMPOSITION CALCULATOR ====================
function MixCompositionCalc() {
  const { toast } = useToast();
  const { validatePositive, validatePercentage } = useInputValidation();
  const [ingredients, setIngredients] = useState<MixIngredient[]>([
    {
      id: 1,
      name: "Cream 40%",
      amount: "250",
      fat: "40",
      msnf: "5.5",
      sugar: "0",
    },
    {
      id: 2,
      name: "Milk 3.5%",
      amount: "500",
      fat: "3.5",
      msnf: "8.5",
      sugar: "0",
    },
    {
      id: 3,
      name: "Sugar",
      amount: "150",
      fat: "0",
      msnf: "0",
      sugar: "100",
    },
  ]);
  const [result, setResult] = useState<{
    total: number;
    fat: number;
    msnf: number;
    sugar: number;
    totalSolids: number;
  } | null>(null);

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: Date.now(), name: "", amount: "", fat: "", msnf: "", sugar: "" },
    ]);
  };

  const removeIngredient = (id: number) => {
    if (ingredients.length <= 1) {
      toast({
        title: "Cannot Remove",
        description: "At least one ingredient is required",
        variant: "destructive",
      });
      return;
    }
    setIngredients(ingredients.filter((ing) => ing.id !== id));
  };

  const handleChange = (
    id: number,
    field: keyof MixIngredient,
    value: string
  ) => {
    setIngredients(
      ingredients.map((ing) => (ing.id === id ? { ...ing, [field]: value } : ing))
    );
  };

  const calculate = useCallback(() => {
    const validIngredients = ingredients.filter(
      (ing) => ing.name && parseFloat(ing.amount) > 0
    );

    if (validIngredients.length === 0) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please provide at least one ingredient with valid data",
      });
      return;
    }

    let totalMixWeight = 0,
      totalFat = 0,
      totalMSNF = 0,
      totalSugar = 0;

    validIngredients.forEach((ing) => {
      const amount = parseFloat(ing.amount);
      const fat = parseFloat(ing.fat) || 0;
      const msnf = parseFloat(ing.msnf) || 0;
      const sugar = parseFloat(ing.sugar) || 0;

      totalMixWeight += amount;
      totalFat += (amount * fat) / 100;
      totalMSNF += (amount * msnf) / 100;
      totalSugar += (amount * sugar) / 100;
    });

    if (totalMixWeight === 0) return;

    const fatPercent = (totalFat / totalMixWeight) * 100;
    const msnfPercent = (totalMSNF / totalMixWeight) * 100;
    const sugarPercent = (totalSugar / totalMixWeight) * 100;
    const totalSolidsPercent = fatPercent + msnfPercent + sugarPercent;

    setResult({
      total: totalMixWeight,
      fat: fatPercent,
      msnf: msnfPercent,
      sugar: sugarPercent,
      totalSolids: totalSolidsPercent,
    });

    toast({
      title: "Calculation Complete",
      description: `Total solids: ${totalSolidsPercent.toFixed(2)}%`,
    });
  }, [ingredients, toast]);

  return (
    <div className="space-y-6">
      <Alert className="bg-purple-50 border-purple-200">
        <Droplets className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-sm sm:text-base">
          Ice Cream Mix Composition
        </AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Calculate final mix composition from multiple ingredients
        </AlertDescription>
      </Alert>

      <div className="space-y-3">
        {/* Header - Desktop only */}
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-2 items-center text-xs font-semibold text-muted-foreground">
          <span>Ingredient Name</span>
          <span>Amount (g)</span>
          <span>Fat %</span>
          <span>MSNF %</span>
          <span>Sugar %</span>
          <span></span>
        </div>

        {/* Ingredients */}
        {ingredients.map((ing, index) => (
          <Card
            key={ing.id}
            className="p-3 bg-gradient-to-r from-purple-50/50 to-pink-50/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-3 items-center">
              <div className="md:col-span-1">
                <Label className="text-xs md:hidden">Ingredient {index + 1}</Label>
                <Input
                  type="text"
                  placeholder="e.g., Cream 40%"
                  value={ing.name}
                  onChange={(e) => handleChange(ing.id, "name", e.target.value)}
                  className="mt-1 md:mt-0"
                />
              </div>

              <div>
                <Label className="text-xs md:hidden">Amount (g)</Label>
                <Input
                  type="number"
                  inputMode="decimal"
                  placeholder="g"
                  value={ing.amount}
                  onChange={(e) => handleChange(ing.id, "amount", e.target.value)}
                  className="mt-1 md:mt-0"
                />
              </div>

              <div>
                <Label className="text-xs md:hidden">Fat %</Label>
                <Input
                  type="number"
                  inputMode="decimal"
                  placeholder="Fat %"
                  value={ing.fat}
                  onChange={(e) => handleChange(ing.id, "fat", e.target.value)}
                  className="mt-1 md:mt-0"
                />
              </div>

              <div>
                <Label className="text-xs md:hidden">MSNF %</Label>
                <Input
                  type="number"
                  inputMode="decimal"
                  placeholder="MSNF %"
                  value={ing.msnf}
                  onChange={(e) => handleChange(ing.id, "msnf", e.target.value)}
                  className="mt-1 md:mt-0"
                />
              </div>

              <div>
                <Label className="text-xs md:hidden">Sugar %</Label>
                <Input
                  type="number"
                  inputMode="decimal"
                  placeholder="Sugar %"
                  value={ing.sugar}
                  onChange={(e) => handleChange(ing.id, "sugar", e.target.value)}
                  className="mt-1 md:mt-0"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:bg-red-100"
                onClick={() => removeIngredient(ing.id)}
              >
                <XCircle className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={addIngredient}
        className="w-full sm:w-auto border-purple-300 hover:bg-purple-50"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Ingredient
      </Button>

      <Button
        onClick={calculate}
        className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        size="lg"
      >
        <Calculator className="mr-2 h-5 w-5" />
        Calculate Mix Composition
      </Button>

      {result && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard
              title="Total Mix Weight"
              value={result.total}
              unit="g"
              confidence="high"
              icon={<Weight className="h-5 w-5" />}
              colorScheme="purple"
            />
            <ResultCard
              title="Total Solids"
              value={result.totalSolids}
              unit="%"
              confidence="high"
              icon={<Target className="h-5 w-5" />}
              colorScheme="pink"
              subtitle="Fat + MSNF + Sugar"
            />
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg">Detailed Composition</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                    <TableHead className="text-right">Weight (g)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Fat</TableCell>
                    <TableCell className="text-right font-semibold text-purple-700">
                      {result.fat.toFixed(3)}%
                    </TableCell>
                    <TableCell className="text-right">
                      {((result.fat / 100) * result.total).toFixed(2)} g
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">MSNF</TableCell>
                    <TableCell className="text-right font-semibold text-blue-700">
                      {result.msnf.toFixed(3)}%
                    </TableCell>
                    <TableCell className="text-right">
                      {((result.msnf / 100) * result.total).toFixed(2)} g
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sugar</TableCell>
                    <TableCell className="text-right font-semibold text-pink-700">
                      {result.sugar.toFixed(3)}%
                    </TableCell>
                    <TableCell className="text-right">
                      {((result.sugar / 100) * result.total).toFixed(2)} g
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-purple-100 font-bold">
                    <TableCell>Total Solids</TableCell>
                    <TableCell className="text-right text-purple-900">
                      {result.totalSolids.toFixed(3)}%
                    </TableCell>
                    <TableCell className="text-right">
                      {((result.totalSolids / 100) * result.total).toFixed(2)} g
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-900 text-sm sm:text-base">
              Industry Standards
            </AlertTitle>
            <AlertDescription className="text-blue-800 text-xs sm:text-sm">
              Premium ice cream: <strong>10-16% fat</strong>, <strong>36-40% total solids</strong>
              <br />
              Standard ice cream: <strong>8-12% fat</strong>, <strong>32-36% total solids</strong>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}

// ==================== BATCH SCALING CALCULATOR ====================
function BatchScalingCalc() {
  const { toast } = useToast();
  const { validatePositive } = useInputValidation();
  const [ingredients, setIngredients] = useState<BatchIngredient[]>([
    { id: 1, name: "Milk", amount: "55", unit: "kg", percentage: "55" },
  ]);
  const [finalBatchSize, setFinalBatchSize] = useState("100");
  const [result, setResult] = useState<any[] | null>(null);
  const [activeTab, setActiveTab] = useState<"by-weight" | "by-percentage">(
    "by-weight"
  );

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: Date.now(), name: "", amount: "", unit: "kg", percentage: "" },
    ]);
  };

  const removeIngredient = (id: number) => {
    if (ingredients.length <= 1) {
      toast({
        title: "Cannot Remove",
        description: "At least one ingredient is required",
        variant: "destructive",
      });
      return;
    }
    setIngredients(ingredients.filter((ing) => ing.id !== id));
  };

  const handleIngredientChange = (
    id: number,
    field: keyof BatchIngredient,
    value: string
  ) => {
    setIngredients(
      ingredients.map((ing) => (ing.id === id ? { ...ing, [field]: value } : ing))
    );
  };

  const calculateByWeight = useCallback(() => {
    const finalSizeKg = parseFloat(finalBatchSize);
    const validation = validatePositive(finalBatchSize, "Final batch size");

    if (!validation.isValid) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: validation.message,
      });
      return;
    }

    const validIngredients = ingredients.filter(
      (ing) => ing.name && parseFloat(ing.amount) > 0
    );

    if (validIngredients.length === 0) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter at least one ingredient with valid amount",
      });
      return;
    }

    const baseTotalWeightKg = validIngredients.reduce((sum, ing) => {
      const amount = parseFloat(ing.amount) || 0;
      return sum + (ing.unit === "g" ? amount / 1000 : amount);
    }, 0);

    if (baseTotalWeightKg === 0) return;

    const scaledIngredients = validIngredients.map((ing) => {
      const amountKg =
        ing.unit === "g"
          ? (parseFloat(ing.amount) || 0) / 1000
          : parseFloat(ing.amount) || 0;
      const scaledAmountKg = (amountKg / baseTotalWeightKg) * finalSizeKg;
      const percentage = (amountKg / baseTotalWeightKg) * 100;
      return {
        name: ing.name,
        amount: scaledAmountKg,
        percentage: percentage,
      };
    });

    setResult(scaledIngredients);
    toast({
      title: "Success",
      description: `Batch scaled to ${finalSizeKg} kg successfully!`,
    });
  }, [ingredients, finalBatchSize, validatePositive, toast]);

  const calculateByPercentage = useCallback(() => {
    const finalSizeKg = parseFloat(finalBatchSize);
    const validation = validatePositive(finalBatchSize, "Final batch size");

    if (!validation.isValid) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: validation.message,
      });
      return;
    }

    const validIngredients = ingredients.filter(
      (ing) => ing.name && parseFloat(ing.percentage) > 0
    );

    if (validIngredients.length === 0) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter at least one ingredient with valid percentage",
      });
      return;
    }

    const totalPercentage = validIngredients.reduce(
      (sum, ing) => sum + (parseFloat(ing.percentage) || 0),
      0
    );

    if (Math.abs(totalPercentage - 100) > 0.1) {
      toast({
        variant: "destructive",
        title: "Invalid Percentages",
        description: `Total must be 100%, currently ${totalPercentage.toFixed(
          2
        )}%`,
      });
      return;
    }

    const scaledIngredients = validIngredients.map((ing) => {
      const percentage = parseFloat(ing.percentage);
      const scaledAmountKg = (percentage / 100) * finalSizeKg;
      return {
        name: ing.name,
        amount: scaledAmountKg,
        percentage: percentage,
      };
    });

    setResult(scaledIngredients);
    toast({
      title: "Success",
      description: `Batch scaled to ${finalSizeKg} kg successfully!`,
    });
  }, [ingredients, finalBatchSize, validatePositive, toast]);

  return (
    <div className="space-y-6">
      <Alert className="bg-blue-50 border-blue-200">
        <Weight className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-sm sm:text-base">Batch Scaling</AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          Scale your recipe to any batch size using weight or percentage
        </AlertDescription>
      </Alert>

      <div className="mb-4">
        <Label className="text-sm font-semibold mb-3 block">
          Final Batch Size
        </Label>
        <ValidatedInput
          label=""
          value={finalBatchSize}
          onChange={setFinalBatchSize}
          validation={validatePositive(finalBatchSize, "Batch size")}
          unit="kg"
          icon={<Weight className="h-4 w-4 text-blue-500" />}
          placeholder="e.g., 100"
          colorScheme="blue"
        />
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as any)}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="by-weight">By Weight</TabsTrigger>
          <TabsTrigger value="by-percentage">By Percentage</TabsTrigger>
        </TabsList>

        <TabsContent value="by-weight" className="space-y-4">
          <p className="text-xs text-muted-foreground">
            Enter your base recipe ingredients and weights
          </p>

          <div className="space-y-3">
            {ingredients.map((ing, index) => (
              <Card
                key={ing.id}
                className="p-3 bg-gradient-to-r from-blue-50/50 to-cyan-50/50"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_auto] gap-3">
                  <div>
                    <Label className="text-xs sm:hidden">
                      Ingredient {index + 1}
                    </Label>
                    <Input
                      type="text"
                      placeholder="Ingredient name"
                      value={ing.name}
                      onChange={(e) =>
                        handleIngredientChange(ing.id, "name", e.target.value)
                      }
                      className="mt-1 sm:mt-0"
                    />
                  </div>
                  <div>
                    <Label className="text-xs sm:hidden">Amount</Label>
                    <Input
                      type="number"
                      inputMode="decimal"
                      placeholder="Amount"
                      value={ing.amount}
                      onChange={(e) =>
                        handleIngredientChange(ing.id, "amount", e.target.value)
                      }
                      className="mt-1 sm:mt-0"
                    />
                  </div>
                  <div>
                    <Label className="text-xs sm:hidden">Unit</Label>
                    <Select
                      value={ing.unit}
                      onValueChange={(val) =>
                        handleIngredientChange(ing.id, "unit", val as "g" | "kg")
                      }
                    >
                      <SelectTrigger className="mt-1 sm:mt-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="g">g</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-red-100"
                    onClick={() => removeIngredient(ing.id)}
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={addIngredient}
            className="w-full sm:w-auto border-blue-300 hover:bg-blue-50"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Ingredient
          </Button>

          <Button
            onClick={calculateByWeight}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            size="lg"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Scale Batch by Weight
          </Button>
        </TabsContent>

        <TabsContent value="by-percentage" className="space-y-4">
          <Alert className="bg-amber-50 border-amber-200">
            <Info className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-xs">
              Percentages must add up to <strong>100%</strong>
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            {ingredients.map((ing, index) => (
              <Card
                key={ing.id}
                className="p-3 bg-gradient-to-r from-purple-50/50 to-pink-50/50"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_auto] gap-3">
                  <div>
                    <Label className="text-xs sm:hidden">
                      Ingredient {index + 1}
                    </Label>
                    <Input
                      type="text"
                      placeholder="Ingredient name"
                      value={ing.name}
                      onChange={(e) =>
                        handleIngredientChange(ing.id, "name", e.target.value)
                      }
                      className="mt-1 sm:mt-0"
                    />
                  </div>
                  <div>
                    <Label className="text-xs sm:hidden">Percentage</Label>
                    <div className="relative mt-1 sm:mt-0">
                      <Input
                        type="number"
                        inputMode="decimal"
                        placeholder="%"
                        value={ing.percentage}
                        onChange={(e) =>
                          handleIngredientChange(
                            ing.id,
                            "percentage",
                            e.target.value
                          )
                        }
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                        %
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-red-100"
                    onClick={() => removeIngredient(ing.id)}
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <span className="font-semibold">Total Percentage:</span>
            <span
              className={cn(
                "text-lg font-bold",
                Math.abs(
                  ingredients.reduce(
                    (sum, ing) => sum + (parseFloat(ing.percentage) || 0),
                    0
                  ) - 100
                ) < 0.1
                  ? "text-green-600"
                  : "text-red-600"
              )}
            >
              {ingredients
                .reduce((sum, ing) => sum + (parseFloat(ing.percentage) || 0), 0)
                .toFixed(2)}
              %
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={addIngredient}
            className="w-full sm:w-auto border-purple-300 hover:bg-purple-50"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Ingredient
          </Button>

          <Button
            onClick={calculateByPercentage}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            size="lg"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Scale Batch by Percentage
          </Button>
        </TabsContent>
      </Tabs>

      {result && (
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 animate-in slide-in-from-bottom-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Scaled Batch: {finalBatchSize} kg
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ingredient</TableHead>
                  <TableHead className="text-right">Percentage</TableHead>
                  <TableHead className="text-right">Required Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result.map((ing, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{ing.name}</TableCell>
                    <TableCell className="text-right text-blue-700">
                      {ing.percentage.toFixed(2)}%
                    </TableCell>
                    <TableCell className="text-right font-semibold text-green-700">
                      {ing.amount.toFixed(3)} kg
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold bg-green-100">
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">100.00%</TableCell>
                  <TableCell className="text-right text-green-900">
                    {result.reduce((sum, ing) => sum + ing.amount, 0).toFixed(3)}{" "}
                    kg
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
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

// ==================== ENHANCED PLANT COST CALCULATOR ====================

// Memoized Input Field Component
const MemoizedInputField = memo(function InputField({
  label,
  value,
  name,
  setter,
  placeholder,
  validation,
  icon,
  colorScheme = "blue",
}: {
  label: string;
  value: string;
  name: string;
  setter: (name: string, value: string) => void;
  placeholder?: string;
  validation?: ValidationResult;
  icon?: React.ReactNode;
  colorScheme?: "blue" | "green" | "purple" | "orange" | "pink";
}) {
  const [internalValue, setInternalValue] = useState(value);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (
      value !== internalValue &&
      document.activeElement?.getAttribute("name") !== name
    ) {
      setInternalValue(value);
    }
  }, [value, name, internalValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    setter(e.target.name, e.target.value);
  };

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
      <Label htmlFor={name} className="text-sm font-semibold flex items-center gap-2">
        {icon}
        {label}
      </Label>
      <div className="relative">
        <Input
          type="number"
          inputMode="decimal"
          name={name}
          id={name}
          value={internalValue}
          onChange={handleChange}
          onBlur={handleBlur}
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
    </div>
  );
});

MemoizedInputField.displayName = "MemoizedInputField";

// Fixed Expense Row Component
const FixedExpenseRow = memo(function FixedExpenseRow({
  item,
  onChange,
  onRemove,
}: {
  item: FixedExpense;
  onChange: (id: number, field: keyof FixedExpense, value: string) => void;
  onRemove: (id: number) => void;
}) {
  const [name, setName] = useState(item.name);
  const [cost, setCost] = useState(item.cost);

  useEffect(() => {
    if (item.name !== name) setName(item.name);
    if (item.cost !== cost) setCost(item.cost);
  }, [item.name, item.cost, name, cost]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCost(e.target.value);

  const handleNameBlur = () => onChange(item.id, "name", name);
  const handleCostBlur = () => onChange(item.id, "cost", cost);

  return (
    <Card className="p-3 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_auto] gap-3 items-center">
        <div>
          <Label className="text-xs sm:hidden">Expense Name</Label>
          <Input
            placeholder="e.g., Salaries & Wages"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            className="mt-1 sm:mt-0"
          />
        </div>
        <div>
          <Label className="text-xs sm:hidden">Monthly Cost</Label>
          <div className="relative mt-1 sm:mt-0">
            <Input
              type="number"
              inputMode="decimal"
              placeholder="Monthly Cost"
              value={cost}
              onChange={handleCostChange}
              onBlur={handleCostBlur}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              ₹
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:bg-red-100"
          onClick={() => onRemove(item.id)}
        >
          <XCircle className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
});

FixedExpenseRow.displayName = "FixedExpenseRow";

// Main Plant Cost Calculator
function PlantCostCalc() {
  const { toast } = useToast();
  const { validatePositive } = useInputValidation();
  const [period, setPeriod] = useState("monthly");
  const [inputs, setInputs] = useState({
    milkProcessed: "30000",
    totalRevenue: "2100000",
    avgMilkPurchaseCost: "45",
    packagingPerLitre: "2.5",
    ingredientsPerLitre: "1.0",
    energyPerLitre: "1.2",
    waterPerLitre: "0.3",
    distributionPerLitre: "1.0",
  });

  const [fixedExpenses, setFixedExpenses] = useState<FixedExpense[]>([
    { id: 1, name: "Salaries & Wages", cost: "150000" },
    { id: 2, name: "Plant Rent/Lease", cost: "50000" },
    { id: 3, name: "Marketing & Admin", cost: "25000" },
    { id: 4, name: "Maintenance & Repairs", cost: "15000" },
    { id: 5, name: "Depreciation on Assets", cost: "20000" },
    { id: 6, name: "Interest on Loan", cost: "10000" },
  ]);

  const [isDownloading, setIsDownloading] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const handleInputChange = useCallback((name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleAddFixedExpense = () => {
    setFixedExpenses((prev) => [
      ...prev,
      { id: Date.now(), name: "", cost: "" },
    ]);
  };

  const handleRemoveFixedExpense = (id: number) => {
    if (fixedExpenses.length <= 1) {
      toast({
        title: "Cannot Remove",
        description: "At least one fixed expense is required",
        variant: "destructive",
      });
      return;
    }
    setFixedExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  const handleFixedExpenseChange = useCallback(
    (id: number, field: keyof FixedExpense, value: string) => {
      setFixedExpenses((prev) =>
        prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
      );
    },
    []
  );

  const results = useMemo(() => {
    const i = Object.fromEntries(
      Object.entries(inputs).map(([k, v]) => [k, parseFloat(v) || 0])
    );
    const {
      milkProcessed,
      totalRevenue,
      avgMilkPurchaseCost,
      packagingPerLitre,
      ingredientsPerLitre,
      energyPerLitre,
      waterPerLitre,
      distributionPerLitre,
    } = i;

    // Variable Costs
    const totalRawMaterialCost = avgMilkPurchaseCost * milkProcessed;
    const packagingCost = packagingPerLitre * milkProcessed;
    const ingredientsCost = ingredientsPerLitre * milkProcessed;
    const energyCost = energyPerLitre * milkProcessed;
    const waterCost = waterPerLitre * milkProcessed;
    const distributionCost = distributionPerLitre * milkProcessed;

    const totalOtherVariableCosts =
      packagingCost +
      ingredientsCost +
      energyCost +
      waterCost +
      distributionCost;
    const totalVariableCosts = totalRawMaterialCost + totalOtherVariableCosts;
    const variableCostPerLitre =
      milkProcessed > 0 ? totalVariableCosts / milkProcessed : 0;

    // Fixed Costs
    const monthlyFixedCost = fixedExpenses.reduce(
      (sum, item) => sum + (parseFloat(item.cost) || 0),
      0
    );
    const totalFixedCost =
      period === "monthly" ? monthlyFixedCost : monthlyFixedCost / 30;

    // Profitability
    const grossProfit = totalRevenue - totalVariableCosts;
    const netProfit = grossProfit - totalFixedCost;

    const grossMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0;
    const netMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;

    // Break-Even Analysis
    const contributionMarginRatio =
      totalRevenue > 0 ? grossProfit / totalRevenue : 0;
    const breakEvenRevenue =
      contributionMarginRatio > 0 ? totalFixedCost / contributionMarginRatio : 0;

    // ROI & Efficiency Metrics
    const revenuePerLitre = milkProcessed > 0 ? totalRevenue / milkProcessed : 0;
    const profitPerLitre = milkProcessed > 0 ? netProfit / milkProcessed : 0;

    // Performance Indicators
    const warnings: string[] = [];
    let confidence: "high" | "medium" | "low" = "high";

    if (netMargin < 5) {
      confidence = "low";
      warnings.push("Net margin below 5%. Review pricing and cost structure.");
    }
    if (grossMargin < 20) {
      confidence = "medium";
      warnings.push("Gross margin below 20%. Consider cost optimization.");
    }
    if (totalRevenue < breakEvenRevenue) {
      warnings.push("Revenue below break-even point. Increase sales or reduce costs.");
    }

    return {
      revenue: totalRevenue,
      totalRawMaterialCost,
      packagingCost,
      ingredientsCost,
      energyCost,
      waterCost,
      distributionCost,
      totalOtherVariableCosts,
      totalVariableCosts,
      variableCostPerLitre,
      grossProfit,
      totalFixedCost,
      netProfit,
      grossMargin,
      netMargin,
      breakEvenRevenue,
      revenuePerLitre,
      profitPerLitre,
      confidence,
      warnings,
    };
  }, [inputs, fixedExpenses, period]);

  const Section = ({
    title,
    children,
    description,
    icon,
  }: {
    title: string;
    children: React.ReactNode;
    description?: string;
    icon?: React.ReactNode;
  }) => (
    <Card className="mt-6 border-2 shadow-md">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-xs">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  );

  const handleDownloadPdf = async () => {
    const reportElement = reportRef.current;
    if (!reportElement) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(reportElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
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

      pdf.addImage(imgData, "PNG", x, y, finalImgWidth, finalImgHeight);
      pdf.save(
        `dairy_plant_report_${period}_${new Date().toISOString().slice(0, 10)}.pdf`
      );

      toast({
        title: "Success",
        description: "Report downloaded successfully!",
      });
    } catch (error) {
      console.error("Failed to generate PDF", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF report",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <DollarSign className="h-6 sm:h-7 w-6 sm:w-7 text-indigo-600" />
          Plant P&L Calculator
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Comprehensive profit & loss analysis with break-even calculation
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Period Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
          <div>
            <Label htmlFor="period-select" className="font-semibold">
              Calculation Period
            </Label>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger id="period-select" className="mt-2 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4" />
                    <span>Daily</span>
                  </div>
                </SelectItem>
                <SelectItem value="monthly">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Monthly</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Alert className="bg-amber-50 border-amber-200">
            <Info className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-sm font-semibold">Note</AlertTitle>
            <AlertDescription className="text-xs">
              For daily calculations, monthly fixed costs are divided by 30 days
            </AlertDescription>
          </Alert>
        </div>

        {/* 1. Production & Revenue */}
        <Section
          title="1. Production & Revenue Details"
          description="Define your production volume and total sales for the selected period"
          icon={<Target className="h-5 w-5 text-indigo-600" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MemoizedInputField
              label={`Total Milk Processed (${
                period === "monthly" ? "Litres/month" : "Litres/day"
              })`}
              value={inputs.milkProcessed}
              name="milkProcessed"
              setter={handleInputChange}
              placeholder="e.g., 30000"
              validation={validatePositive(inputs.milkProcessed)}
              icon={<Droplets className="h-4 w-4 text-blue-500" />}
              colorScheme="blue"
            />
            <MemoizedInputField
              label={`Total Sales Revenue (${
                period === "monthly" ? "₹/month" : "₹/day"
              })`}
              value={inputs.totalRevenue}
              name="totalRevenue"
              setter={handleInputChange}
              placeholder="e.g., 2100000"
              validation={validatePositive(inputs.totalRevenue)}
              icon={<DollarSign className="h-4 w-4 text-green-500" />}
              colorScheme="green"
            />
          </div>
        </Section>

        {/* 2. Variable Costs */}
        <Section
          title="2. Variable Costs"
          description="Costs that change in proportion to your production volume"
          icon={<Weight className="h-5 w-5 text-orange-600" />}
        >
          <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-red-500" />
            A. Raw Material Cost
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <MemoizedInputField
              label="Average Purchase Cost of Milk (₹ per Litre)"
              value={inputs.avgMilkPurchaseCost}
              name="avgMilkPurchaseCost"
              setter={handleInputChange}
              validation={validatePositive(inputs.avgMilkPurchaseCost)}
              icon={<Droplets className="h-4 w-4 text-red-500" />}
              colorScheme="orange"
            />
          </div>

          <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <ChevronsUp className="h-5 w-5 text-blue-500" />
            B. Other Variable Costs (per Litre)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MemoizedInputField
              label="Packaging (₹ per Litre)"
              value={inputs.packagingPerLitre}
              name="packagingPerLitre"
              setter={handleInputChange}
              validation={validatePositive(inputs.packagingPerLitre)}
              icon={<Target className="h-4 w-4 text-purple-500" />}
              colorScheme="purple"
            />
            <MemoizedInputField
              label="Other Ingredients (₹ per Litre)"
              value={inputs.ingredientsPerLitre}
              name="ingredientsPerLitre"
              setter={handleInputChange}
              validation={validatePositive(inputs.ingredientsPerLitre)}
              icon={<Droplets className="h-4 w-4 text-green-500" />}
              colorScheme="green"
            />
            <MemoizedInputField
              label="Energy (Electricity, Fuel) (₹ per Litre)"
              value={inputs.energyPerLitre}
              name="energyPerLitre"
              setter={handleInputChange}
              validation={validatePositive(inputs.energyPerLitre)}
              icon={<Zap className="h-4 w-4 text-yellow-500" />}
              colorScheme="orange"
            />
            <MemoizedInputField
              label="Water / ETP (₹ per Litre)"
              value={inputs.waterPerLitre}
              name="waterPerLitre"
              setter={handleInputChange}
              validation={validatePositive(inputs.waterPerLitre)}
              icon={<Droplets className="h-4 w-4 text-cyan-500" />}
              colorScheme="blue"
            />
            <MemoizedInputField
              label="Distribution & Logistics (₹ per Litre)"
              value={inputs.distributionPerLitre}
              name="distributionPerLitre"
              setter={handleInputChange}
              validation={validatePositive(inputs.distributionPerLitre)}
              icon={<Target className="h-4 w-4 text-pink-500" />}
              colorScheme="pink"
            />
          </div>
        </Section>

        {/* 3. Fixed Expenses */}
        <Section
          title="3. Fixed Expenses (Monthly Overhead)"
          description="Costs that remain constant regardless of production volume. Enter all costs on a monthly basis."
          icon={<Factory className="h-5 w-5 text-purple-600" />}
        >
          <div className="space-y-3">
            <div className="hidden sm:grid grid-cols-[2fr_1fr_auto] gap-2 items-center text-xs font-semibold text-muted-foreground">
              <span>Expense Name</span>
              <span>Monthly Cost (₹)</span>
              <span></span>
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
          <Button
            variant="outline"
            size="sm"
            onClick={handleAddFixedExpense}
            className="mt-4 w-full sm:w-auto border-purple-300 hover:bg-purple-50"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Fixed Expense
          </Button>
          <div className="flex justify-between items-center p-4 bg-purple-100 rounded-lg border-2 border-purple-300 mt-4">
            <span className="font-bold text-purple-900">
              Total Monthly Fixed Costs:
            </span>
            <span className="text-2xl font-bold text-purple-700">
              ₹{" "}
              {fixedExpenses
                .reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0)
                .toLocaleString("en-IN")}
            </span>
          </div>
        </Section>

        {/* Financial Summary */}
        <div ref={reportRef} className="p-1 mt-8">
          <Card
            className={cn(
              "border-4 shadow-2xl",
              results.netProfit >= 0
                ? "bg-gradient-to-br from-green-50 to-emerald-100 border-green-400"
                : "bg-gradient-to-br from-red-50 to-pink-100 border-red-400"
            )}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2">
                <DollarSign className="h-8 w-8" />
                Financial Summary ({period === "monthly" ? "Monthly" : "Daily"})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-4">
                <Table>
                  <TableBody>
                    <TableRow className="bg-blue-100">
                      <TableCell className="font-bold text-lg">
                        A. Total Revenue
                      </TableCell>
                      <TableCell className="text-right font-bold text-lg text-blue-700">
                        ₹{" "}
                        {results.revenue.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>

                    <TableRow className="bg-orange-100">
                      <TableCell colSpan={2} className="font-bold text-primary">
                        B. Variable Costs
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="pl-8">Raw Material (Milk)</TableCell>
                      <TableCell className="text-right text-red-600">
                        - ₹{" "}
                        {results.totalRawMaterialCost.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="pl-8">
                        Other Variable Costs
                      </TableCell>
                      <TableCell className="text-right text-red-600">
                        - ₹{" "}
                        {results.totalOtherVariableCosts.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-red-50">
                      <TableCell className="font-semibold pl-4">
                        Total Variable Costs
                      </TableCell>
                      <TableCell className="text-right font-semibold text-red-700">
                        - ₹{" "}
                        {results.totalVariableCosts.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>

                    <TableRow className="bg-green-100 text-lg">
                      <TableCell className="font-bold">
                        C. Gross Profit (A - B)
                      </TableCell>
                      <TableCell className="font-bold text-right text-green-700">
                        ₹{" "}
                        {results.grossProfit.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>

                    <TableRow className="bg-purple-100">
                      <TableCell className="font-bold text-primary">
                        D. Total Fixed Costs
                      </TableCell>
                      <TableCell className="text-right font-semibold text-red-600">
                        - ₹{" "}
                        {results.totalFixedCost.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>

                    <TableRow
                      className={cn(
                        "font-extrabold text-xl",
                        results.netProfit >= 0
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      )}
                    >
                      <TableCell className="text-lg">
                        E. {results.netProfit >= 0 ? "Net Profit" : "Net Loss"} (C
                        - D)
                      </TableCell>
                      <TableCell className="text-right text-2xl">
                        ₹{" "}
                        {results.netProfit.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <h4 className="font-bold mt-8 mb-4 text-center text-lg text-gray-700">
                  📊 Key Performance Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResultCard
                    title="Gross Profit Margin"
                    value={results.grossMargin}
                    unit="%"
                    confidence={results.confidence}
                    icon={<Target className="h-5 w-5" />}
                    colorScheme="green"
                  />
                  <ResultCard
                    title="Net Profit Margin"
                    value={results.netMargin}
                    unit="%"
                    confidence={results.confidence}
                    icon={<DollarSign className="h-5 w-5" />}
                    colorScheme={results.netProfit >= 0 ? "blue" : "pink"}
                  />
                  <ResultCard
                    title="Break-Even Revenue"
                    value={results.breakEvenRevenue}
                    unit="₹"
                    confidence="high"
                    icon={<Target className="h-5 w-5" />}
                    colorScheme="orange"
                    subtitle={period === "monthly" ? "Monthly" : "Daily"}
                  />
                  <ResultCard
                    title="Profit Per Litre"
                    value={results.profitPerLitre}
                    unit="₹"
                    confidence="high"
                    icon={<Droplets className="h-5 w-5" />}
                    colorScheme="purple"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Warnings */}
        {results.warnings.length > 0 && (
          <Alert className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 border-orange-300">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-900 font-semibold">
              Financial Health Alerts
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

        {/* Download Button */}
        <div className="text-center mt-8">
          <Button
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            size="lg"
            className="h-12 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <FileDown className="mr-2 h-5 w-5" />
                Download Report as PDF
              </>
            )}
          </Button>
        </div>
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
