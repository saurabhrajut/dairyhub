"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Bookmark,
  Sparkles,
  FileText,
  Calculator,
  CheckCircle2,
  Copy,
  Check,
  Trash2,
  Clock,
  ChevronRight,
  ShieldCheck,
  FlaskConical,
  Beaker,
  Scale,
  PlusCircle,
  Droplet,
  Wheat,
  Cookie,
  UtensilsCrossed,
  GlassWater,
  Bean,
  Drumstick,
  Container as SaltIcon,
  RefreshCw,
  AlertTriangle,
  Search,
  Filter,
  Layers,
  Zap,
  BookOpen,
  Gauge,
  Download,
  ArrowRight,
  CheckSquare,
  XCircle,
  Info,
  Flame,
  Thermometer,
  ShieldAlert,
  Sliders,
  TrendingUp,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/context/favorites-context";

interface BookmarksWorkspaceProps {
  bookmarkedTopics: any[];
  onOpenModal: (modalId: string) => void;
  onToggleFavorite: (item: any) => void;
}

const SCRATCHPAD_KEY = "dairyhub_shift_scratchpad_v2";
const CHECKLIST_KEY = "dairyhub_ccp_checklist_v2";

// ─────────────────────────────────────────────
// REGULATORY STANDARDS DATABASE (DAIRY + FOOD)
// ─────────────────────────────────────────────
interface RegulatoryStandard {
  id: string;
  category: "Dairy" | "Food" | "Beverages" | "Fats & Oils";
  productName: string;
  regulatoryBody: string;
  keyParameters: { label: string; limit: string; rule: string }[];
  criticalSafetyNotes: string;
}

const STANDARDS_DIRECTORY: RegulatoryStandard[] = [
  {
    id: "std-cow-milk",
    category: "Dairy",
    productName: "Cow Milk (Raw / Pasteurized / Packaged)",
    regulatoryBody: "FSSAI 2.1.1 / IS 1479",
    keyParameters: [
      { label: "Milk Fat", limit: "Min 3.2% (General India) / 3.5% (Specific states)", rule: "Gerber / Rose-Gottlieb" },
      { label: "Solids-Not-Fat (SNF)", limit: "Min 8.3% - 8.5%", rule: "Richmond Formula / Gravimetric" },
      { label: "Acidity (as Lactic)", limit: "0.12% - 0.14%", rule: "N/10 NaOH Titration" },
      { label: "MBRT Grade 1", limit: "> 4.5 Hours", rule: "Methylene Blue Reduction at 37°C" }
    ],
    criticalSafetyNotes: "COB (Clot on Boiling) and 68% Alcohol test must be strictly negative. Zero neutralizers, urea, or detergent allowed."
  },
  {
    id: "std-buffalo-milk",
    category: "Dairy",
    productName: "Buffalo Milk (Raw / Standardized)",
    regulatoryBody: "FSSAI 2.1.1 / IS 1479",
    keyParameters: [
      { label: "Milk Fat", limit: "Min 5.0% - 6.0% (State wise)", rule: "Gerber method with 10.75 mL milk" },
      { label: "Solids-Not-Fat (SNF)", limit: "Min 9.0%", rule: "Lactometer CLR 30-32 at 20°C" },
      { label: "Total Solids (TS)", limit: "Min 14.5% - 15.0%", rule: "Direct Oven Drying at 102°C" },
      { label: "Freezing Point", limit: "-0.530°C to -0.555°C", rule: "Cryoscope (Added water detection)" }
    ],
    criticalSafetyNotes: "Naturally high opacity and calcium caseinate content. Buffalo milk with SNF < 9.0% indicates added water adulteration."
  },
  {
    id: "std-toned-milk",
    category: "Dairy",
    productName: "Toned & Double Toned Milk (Pasteurized / UHT)",
    regulatoryBody: "FSSAI Standards 2011 (Amended)",
    keyParameters: [
      { label: "Toned Milk Fat", limit: "Min 3.0%", rule: "Statutory minimum" },
      { label: "Toned Milk SNF", limit: "Min 8.5%", rule: "Statutory minimum" },
      { label: "Double Toned Fat", limit: "Min 1.5%", rule: "Statutory minimum" },
      { label: "Double Toned SNF", limit: "Min 9.0%", rule: "Statutory minimum" }
    ],
    criticalSafetyNotes: "Phosphatase test must be completely negative (< 10 µg p-nitrophenol/mL) proving proper HTST pasteurization."
  },
  {
    id: "std-paneer",
    category: "Dairy",
    productName: "Paneer & Chhana (Fresh / Vacuum Packaged)",
    regulatoryBody: "FSSAI 2.1.16 / IS 10484",
    keyParameters: [
      { label: "Moisture Content", limit: "Max 60.0% (Medium fat: Max 65%)", rule: "Hot Air Oven 102°C" },
      { label: "Fat on Dry Matter (FDM)", limit: "Min 50.0% (Low fat: < 15%)", rule: "Mojonnier / Gerber acid digestion" },
      { label: "Titratable Acidity", limit: "Max 0.50% (as lactic acid)", rule: "Phenolphthalein titration" }
    ],
    criticalSafetyNotes: "FDM below 50% indicates skimming or replacement of milk fat with vegetable fat or starch addition."
  },
  {
    id: "std-ghee",
    category: "Dairy",
    productName: "Ghee / Butter Oil (Anhydrous Milk Fat)",
    regulatoryBody: "FSSAI 2.1.8 / Agmark Rules",
    keyParameters: [
      { label: "Milk Fat %", limit: "Min 99.5%", rule: "Gravimetric / Moisture loss" },
      { label: "Moisture %", limit: "Max 0.50%", rule: "Constant weight oven 105°C" },
      { label: "Reichert-Meissl (RM)", limit: "Min 28.0 (Cotton tract: Min 26)", rule: "Steam volatile fatty acids" },
      { label: "Polenske Value (PV)", limit: "1.0 - 2.0", rule: "Insoluble volatile acids" },
      { label: "Free Fatty Acids (FFA)", limit: "Max 0.50% - 1.4% (as Oleic)", rule: "Neutral alcohol titration" },
      { label: "Baudouin Test", limit: "Completely Negative", rule: "Sesame oil / Vanaspati test" }
    ],
    criticalSafetyNotes: "BR Reading at 40°C must strictly be between 40.0 and 43.0. Baudouin positive indicates vegetable fat adulteration."
  },
  {
    id: "std-wheat-atta",
    category: "Food",
    productName: "Whole Wheat Atta & Chakki Flour",
    regulatoryBody: "FSSAI 2.4.1 / IS 1155",
    keyParameters: [
      { label: "Moisture Content", limit: "Max 14.0%", rule: "Air Oven 105°C / 130°C" },
      { label: "Total Ash (dry basis)", limit: "Max 2.0%", rule: "Muffle furnace 600°C" },
      { label: "Acid Insoluble Ash", limit: "Max 0.15%", rule: "10% HCl wash (Sand/Dirt)" },
      { label: "Dry Gluten", limit: "Min 6.0%", rule: "2% NaCl wash & drying" },
      { label: "Alcoholic Acidity", limit: "Max 0.18% (as H2SO4)", rule: "90% Neutral ethanol extract" }
    ],
    criticalSafetyNotes: "Aflatoxin B1 must not exceed 15 ppb (µg/kg). Uric acid from insect infestation max 100 mg/kg."
  },
  {
    id: "std-maida",
    category: "Food",
    productName: "Maida (Refined Wheat Flour)",
    regulatoryBody: "FSSAI 2.4.2 / IS 1009",
    keyParameters: [
      { label: "Moisture Content", limit: "Max 13.0%", rule: "130°C 1 hr method" },
      { label: "Total Ash", limit: "Max 1.0%", rule: "550°C - 600°C incineration" },
      { label: "Acid Insoluble Ash", limit: "Max 0.10%", rule: "Sand & mineral dirt limit" },
      { label: "Wet Gluten", limit: "Min 22.0% - 28.0%", rule: "Glutomatic / Hand washing" },
      { label: "Dry Gluten", limit: "Min 7.5%", rule: "105°C oven dried gluten mass" }
    ],
    criticalSafetyNotes: "Chemical bleaching agents (Potassium bromate / Potassium iodate) are completely banned under FSSAI regulations."
  },
  {
    id: "std-edible-oils",
    category: "Fats & Oils",
    productName: "Edible Vegetable Oils (Mustard, Soybean, Sunflower)",
    regulatoryBody: "FSSAI 2.2.1 / Agmark",
    keyParameters: [
      { label: "Free Fatty Acids (FFA)", limit: "Max 0.25% (Refined) / Max 1.5% (Virgin/Kachhi Ghani)", rule: "Titration as Oleic Acid" },
      { label: "Peroxide Value (PV)", limit: "Max 5.0 - 10.0 meq O2/kg", rule: "Iodometric titration" },
      { label: "Argemone Oil Test", limit: "Completely Negative", rule: "TLC / Nitric acid colorimetric" },
      { label: "Trans Fatty Acids", limit: "Max 2.0% of total fat", rule: "GC-FID capillary column" }
    ],
    criticalSafetyNotes: "Argemone mexicana oil contamination causes epidemic dropsy and cardiac failure. Test using concentrated HNO3."
  },
  {
    id: "std-ketchup-sauces",
    category: "Food",
    productName: "Tomato Ketchup & Tomato Sauces",
    regulatoryBody: "FSSAI 2.3.27 / IS 3882",
    keyParameters: [
      { label: "Total Soluble Solids", limit: "Min 25.0% °Brix", rule: "Abbe Refractometer at 20°C" },
      { label: "Acidity (as Acetic)", limit: "Min 1.0% - 1.2%", rule: "Titration against 0.1 N NaOH" },
      { label: "Howard Mold Count", limit: "Max 50% positive fields", rule: "Microscopic counting chamber" },
      { label: "Sodium Benzoate", limit: "Max 750 ppm (mg/kg)", rule: "UV-Vis Spectrophotometry / HPLC" }
    ],
    criticalSafetyNotes: "Commercial tomato solids must be derived from genuine tomato puree/paste. Starch content maximum 1.0%."
  },
  {
    id: "std-packaged-water",
    category: "Beverages",
    productName: "Packaged Drinking Water (Other than Mineral Water)",
    regulatoryBody: "IS 14543 / FSSAI 2.10.8",
    keyParameters: [
      { label: "Total Dissolved Solids", limit: "75 to 500 mg/L (ppm)", rule: "Gravimetric at 180°C / Meter" },
      { label: "pH Range", limit: "6.5 to 8.5", rule: "Calibrated pH meter at 25°C" },
      { label: "Turbidity", limit: "Max 2.0 NTU", rule: "Nephelometric Turbidity Meter" },
      { label: "E. coli & Coliforms", limit: "Absent in 250 mL", rule: "Membrane Filtration on M-Endo" },
      { label: "Pseudomonas aeruginosa", limit: "Absent in 250 mL", rule: "Cetrimide Agar fluorescence" }
    ],
    criticalSafetyNotes: "Must undergo continuous UV irradiation and sub-micron filtration. Packaging in food-grade virgin PET."
  }
];

// ─────────────────────────────────────────────
// HACCP & CCP CHECKLIST ITEMS
// ─────────────────────────────────────────────
interface CcpAuditItem {
  id: string;
  category: "Reception" | "Processing" | "Packaging" | "Hygiene";
  title: string;
  criterion: string;
  correctiveAction: string;
}

const CCP_AUDIT_MASTER: CcpAuditItem[] = [
  {
    id: "ccp-1",
    category: "Reception",
    title: "Raw Milk Chilling & Reception Temperature",
    criterion: "Tanker arrival temperature must be ≤ 4.0°C (Absolute max 6.0°C).",
    correctiveAction: "If > 7.0°C, run immediate MBRT, Alcohol test & COB. Divert to industrial curd/casein or reject."
  },
  {
    id: "ccp-2",
    category: "Reception",
    title: "Adulterant & Antibiotic Residue Screen",
    criterion: "Zero Beta-lactam/Tetracycline antibiotic residue. Negative for Urea, Starch, Neutralizers, Salt, Detergent.",
    correctiveAction: "Immediate isolation of compartment tanker. Quarantine milk silo and issue vendor non-conformance notice."
  },
  {
    id: "ccp-3",
    category: "Processing",
    title: "HTST Pasteurization Thermal Kill Limit (CCP-1)",
    criterion: "Minimum 72.0°C - 75.0°C with continuous dwell time of 15 seconds.",
    correctiveAction: "Flow Diversion Valve (FDV) must automatically recirculate unpasteurized milk to balance tank if temp drops < 72.0°C."
  },
  {
    id: "ccp-4",
    category: "Processing",
    title: "Plate Heat Exchanger Pressure Differential",
    criterion: "Pasteurized milk side pressure must exceed raw milk side by ≥ 0.5 Bar (≥ 7.25 PSI).",
    correctiveAction: "Prevents microscopic pinhole plate cross-contamination. If pressure differential drops, stop booster pump immediately."
  },
  {
    id: "ccp-5",
    category: "Packaging",
    title: "Metal Detector Foreign Body Screen (CCP-2)",
    criterion: "Detects 1.5mm Ferrous, 2.0mm Non-Ferrous, and 2.5mm Stainless Steel test wands.",
    correctiveAction: "Test pieces passed every 60 minutes. If fail, quarantine all finished product produced since last passed check."
  },
  {
    id: "ccp-6",
    category: "Packaging",
    title: "Pouch Seal Hermetic Integrity & Leak Check",
    criterion: "Vacuum dye penetration & squeeze burst test: 0% seal rupture or micro-channel leaks.",
    correctiveAction: "Inspect sealing jaw teflon tape, temperature controller thermocouple, and film tension roll immediately."
  },
  {
    id: "ccp-7",
    category: "Hygiene",
    title: "5-Stage CIP Chemical Concentration & Temperature",
    criterion: "Caustic Lye: 1.5-2.0% NaOH at 75-80°C. Acid: 0.8-1.0% HNO3 at 65-70°C. Final rinse neutral pH (6.8-7.2).",
    correctiveAction: "Titrate tank solutions with N/10 acid/alkali. Adjust dosing and re-rinse until phenolphthalein drops completely colorless."
  },
  {
    id: "ccp-8",
    category: "Hygiene",
    title: "Post-Sanitization Swab & Air Quality Test",
    criterion: "Silo / Tank internal surface swab TPC < 10 CFU/100 cm². Coliforms 0 CFU. Clean room air settle plate < 30 CFU.",
    correctiveAction: "Perform fogging with 0.5% peracetic acid or quaternary ammonium compound (QAC) before line restart."
  }
];

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export function BookmarksWorkspace({
  bookmarkedTopics,
  onOpenModal,
  onToggleFavorite,
}: BookmarksWorkspaceProps) {
  const { toast } = useToast();
  const { addFavorite } = useFavorites();

  // Navigation & Filter states
  const [activeTab, setActiveTab] = useState<"solvers" | "scratchpad" | "standards" | "audit" | "converters">("solvers");
  const [bookmarkCategoryFilter, setBookmarkCategoryFilter] = useState<string>("All");
  const [bookmarkSearchQuery, setBookmarkSearchQuery] = useState<string>("");

  // Scratchpad states
  const [shiftNotes, setShiftNotes] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // CCP Checklist states
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Standards search state
  const [standardSearch, setStandardSearch] = useState<string>("");
  const [standardCategory, setStandardCategory] = useState<string>("All");

  // ── SOLVER STATES ──
  // Solver 1: Richmond SNF & TS
  const [richmondFat, setRichmondFat] = useState<number>(4.2);
  const [richmondClr, setRichmondClr] = useState<number>(28.5);
  const [richmondTemp, setRichmondTemp] = useState<number>(20);

  // Solver 2: Pearson Square Standardization
  const [targetFat, setTargetFat] = useState<number>(3.0);
  const [highFat, setHighFat] = useState<number>(6.0);
  const [lowFat, setLowFat] = useState<number>(0.5);
  const [batchVolume, setBatchVolume] = useState<number>(10000);

  // Solver 3: Brix Dilution / Syrup
  const [brixVol, setBrixVol] = useState<number>(1000);
  const [currentBrix, setCurrentBrix] = useState<number>(32.0);
  const [targetBrix, setTargetBrix] = useState<number>(25.0);

  // Solver 4: CIP Chemical Dosing
  const [cipTankVol, setCipTankVol] = useState<number>(5000);
  const [cipChemical, setCipChemical] = useState<"naoh" | "hno3">("naoh");
  const [cipCurrentPct, setCipCurrentPct] = useState<number>(0.8);
  const [cipTargetPct, setCipTargetPct] = useState<number>(1.8);

  // Solver 5: Overrun %
  const [liquidMixWeight, setLiquidMixWeight] = useState<number>(105);
  const [foamWeight, setFoamWeight] = useState<number>(45);

  // Solver 6: Unit Converter (Liters to KG)
  const [milkLitres, setMilkLitres] = useState<number>(10000);
  const [convFat, setConvFat] = useState<number>(4.0);
  const [convSnf, setConvSnf] = useState<number>(8.5);

  // Load shift notes & checklist from localStorage
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem(SCRATCHPAD_KEY);
      if (savedNotes) setShiftNotes(savedNotes);

      const savedChecklist = localStorage.getItem(CHECKLIST_KEY);
      if (savedChecklist) setCheckedItems(JSON.parse(savedChecklist));
    } catch {
      // Ignore
    }
  }, []);

  // Save checklist
  const toggleCheckItem = (id: string) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(CHECKLIST_KEY, JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const resetChecklist = () => {
    setCheckedItems({});
    localStorage.removeItem(CHECKLIST_KEY);
    toast({
      title: "Checklist Reset",
      description: "All audit inspection checkmarks have been cleared for next shift.",
    });
  };

  // Shift details
  const getShiftInfo = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 14) {
      return {
        name: "Morning Reception & Processing Shift",
        time: "06:00 AM - 02:00 PM",
        icon: "☀️",
        color: "text-amber-400",
        bg: "bg-amber-950/40 border-amber-800/40"
      };
    }
    if (hour >= 14 && hour < 22) {
      return {
        name: "Evening Quality & Dispatch Shift",
        time: "02:00 PM - 10:00 PM",
        icon: "🌆",
        color: "text-blue-400",
        bg: "bg-blue-950/40 border-blue-800/40"
      };
    }
    return {
      name: "Night CIP & Plant Sanitation Shift",
      time: "10:00 PM - 06:00 AM",
      icon: "🌙",
      color: "text-purple-400",
      bg: "bg-purple-950/40 border-purple-800/40"
    };
  };

  const shift = getShiftInfo();

  // ── RICHMOND CALCULATIONS ──
  const richmondResults = useMemo(() => {
    const tempDiff = richmondTemp - 20;
    const correctedClr = Number((richmondClr + tempDiff * 0.2).toFixed(2));
    const snf = Number(((correctedClr / 4) + (0.2 * richmondFat) + 0.36).toFixed(2));
    const ts = Number((richmondFat + snf).toFixed(2));

    let milkClass = "Standard / Mixed Milk";
    let isCompliant = true;
    let waterAdulterationPct = 0;

    if (richmondFat >= 6.0 && snf >= 9.0) {
      milkClass = "Pure Buffalo Milk (High Quality)";
    } else if (richmondFat >= 3.2 && snf >= 8.3) {
      milkClass = "Cow Milk (Compliant)";
    } else if (richmondFat >= 3.0 && snf >= 8.5) {
      milkClass = "Toned Milk Standard";
    } else if (richmondFat >= 1.5 && snf >= 9.0) {
      milkClass = "Double Toned Milk Standard";
    } else {
      milkClass = "Sub-standard / Diluted Milk";
      isCompliant = false;
      const refSnf = richmondFat > 4.5 ? 9.0 : 8.5;
      if (snf < refSnf) {
        waterAdulterationPct = Number((((refSnf - snf) / refSnf) * 100).toFixed(1));
      }
    }

    return { correctedClr, snf, ts, milkClass, isCompliant, waterAdulterationPct };
  }, [richmondFat, richmondClr, richmondTemp]);

  // ── PEARSON SQUARE CALCULATIONS ──
  const pearsonResults = useMemo(() => {
    if (highFat <= lowFat || targetFat <= lowFat || targetFat >= highFat) {
      return { isValid: false, partsHigh: 0, partsLow: 0, litersHigh: 0, litersLow: 0 };
    }
    const partsHigh = Number((targetFat - lowFat).toFixed(2));
    const partsLow = Number((highFat - targetFat).toFixed(2));
    const totalParts = partsHigh + partsLow;
    const litersHigh = Math.round((partsHigh / totalParts) * batchVolume);
    const litersLow = Math.round(batchVolume - litersHigh);

    return { isValid: true, partsHigh, partsLow, litersHigh, litersLow, totalParts };
  }, [targetFat, highFat, lowFat, batchVolume]);

  // ── BRIX DILUTION CALCULATIONS ──
  const brixResults = useMemo(() => {
    if (currentBrix <= 0 || targetBrix <= 0 || brixVol <= 0) {
      return { action: "Invalid", amount: 0, finalVol: brixVol };
    }
    if (targetBrix < currentBrix) {
      // Dilution with water: C1 * V1 = C2 * V2 -> V2 = (C1 * V1) / C2
      const finalVol = Math.round((currentBrix * brixVol) / targetBrix);
      const waterToAdd = Math.round(finalVol - brixVol);
      return { action: "Dilute With Water", amount: waterToAdd, finalVol, unit: "Liters Water" };
    } else if (targetBrix > currentBrix) {
      // Sugar addition: sugar (kg) needed
      // (Brix1 * V1 + 100 * S) / (V1 + S) = Brix2
      const sugarToAdd = Math.round((brixVol * (targetBrix - currentBrix)) / (100 - targetBrix));
      return { action: "Add Pure Sugar", amount: sugarToAdd, finalVol: brixVol + sugarToAdd, unit: "Kg Dry Sugar" };
    }
    return { action: "Target Already Met", amount: 0, finalVol: brixVol, unit: "" };
  }, [brixVol, currentBrix, targetBrix]);

  // ── CIP DOSING CALCULATIONS ──
  const cipResults = useMemo(() => {
    const deficitPct = Math.max(0, cipTargetPct - cipCurrentPct);
    if (cipChemical === "naoh") {
      // For 1000 L of water, 1% NaOH = 10 kg Caustic flakes.
      // Deficit = deficitPct * (cipTankVol / 100)
      const kgToAdd = Number(((deficitPct / 100) * cipTankVol).toFixed(1));
      return { chemicalName: "Caustic Soda (Flakes 99-100%)", amount: kgToAdd, unit: "kg Flakes", deficitPct: Number(deficitPct.toFixed(2)) };
    } else {
      // For Nitric Acid: Commercial 68% conc, sp gr = 1.41
      // Effective HNO3 per Liter = 1.41 * 0.68 = 0.9588 kg/L
      const kgNeeded = (deficitPct / 100) * cipTankVol;
      const litersAcid = Number((kgNeeded / 0.9588).toFixed(1));
      return { chemicalName: "Nitric Acid (Commercial 68% Grade)", amount: litersAcid, unit: "Liters Concentrated Acid", deficitPct: Number(deficitPct.toFixed(2)) };
    }
  }, [cipTankVol, cipChemical, cipCurrentPct, cipTargetPct]);

  // ── OVERRUN CALCULATIONS ──
  const overrunResults = useMemo(() => {
    if (foamWeight <= 0 || liquidMixWeight <= foamWeight) {
      return { overrunPct: 0, airFraction: 0, status: "Invalid Weights" };
    }
    const overrun = Number((((liquidMixWeight - foamWeight) / foamWeight) * 100).toFixed(1));
    const airFraction = Number(((overrun / (100 + overrun)) * 100).toFixed(1));
    let status = "Moderate Density";
    if (overrun >= 150) status = "Ultra Light & Fluffy (Bakery Whipping / Mousse)";
    else if (overrun >= 80) status = "Optimal Commercial Standard (Ice Cream / Gelato)";
    else status = "Heavy & Dense Formulation";

    return { overrunPct: overrun, airFraction, status };
  }, [liquidMixWeight, foamWeight]);

  // ── DENSITY & WEIGHT CONVERTER ──
  const densityResults = useMemo(() => {
    // Exact milk density formula: 100 / (Fat/0.93 + SNF/1.608 + (100 - Fat - SNF)/1.0)
    const fatPart = convFat / 0.93;
    const snfPart = convSnf / 1.608;
    const waterPart = (100 - convFat - convSnf) / 1.0;
    const density = Number((100 / (fatPart + snfPart + waterPart)).toFixed(4)); // in kg/L or g/mL
    const weightKg = Math.round(milkLitres * density);
    return { density, weightKg };
  }, [milkLitres, convFat, convSnf]);

  // ── SCRATCHPAD ACTIONS ──
  const handleSaveNotes = (val: string) => {
    setShiftNotes(val);
    try {
      localStorage.setItem(SCRATCHPAD_KEY, val);
    } catch {
      // Ignore
    }
  };

  const handleCopyNotes = () => {
    if (!shiftNotes.trim()) {
      toast({
        title: "Scratchpad Empty",
        description: "Write or insert a template note first before copying.",
        variant: "destructive",
      });
      return;
    }
    navigator.clipboard.writeText(shiftNotes);
    setIsCopied(true);
    toast({
      title: "Shift Log Copied! 📋",
      description: "Ready to paste into WhatsApp, Email, or Shift Handover Log.",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownloadLog = () => {
    if (!shiftNotes.trim()) {
      toast({
        title: "No Content to Download",
        description: "Please enter your shift notes first.",
        variant: "destructive"
      });
      return;
    }
    const blob = new Blob([shiftNotes], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `DairyHub_Shift_Report_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Log Downloaded! 📥",
      description: "File saved to your local device.",
    });
  };

  const insertTemplate = (template: string) => {
    const updated = shiftNotes ? `${shiftNotes}\n\n${template}` : template;
    handleSaveNotes(updated);
    toast({
      title: "Template Inserted 📝",
      description: "Fill your plant readings into the inserted section.",
    });
  };

  // Starter pack handler
  const handleAddStarterPack = (packType: "dairy" | "food") => {
    const dairyItems = [
      { id: "lab-calculations", title: "Lab Calculations", category: "quality", description: "Yield, Acidity & TS Formulas" },
      { id: "std1", title: "Standardization I", category: "process", description: "Pearson Square Milk Blending" },
      { id: "fssai-standards", title: "FSSAI Standards", category: "quality", description: "Official FSSAI Milk Limits" },
      { id: "milk-handling", title: "Milk Handling", category: "process", description: "Reception & Chilling Guide" },
      { id: "solutions-prep", title: "Solutions Preparation", category: "quality", description: "N/10 NaOH & Acid Prep" },
      { id: "adulteration", title: "Adulteration Testing", category: "quality", description: "Urea, Starch & Salt Detection" },
    ];

    const foodItems = [
      { id: "food-testing", title: "Food Testing", category: "quality", description: "FSSAI Food SOPs & Lab Tests" },
      { id: "microbiology", title: "Microbiology", category: "quality", description: "Testing & Pathogen Isolation" },
      { id: "packaging-testing", title: "Packaging Testing", category: "quality", description: "Burst & Seam Integrity" },
      { id: "water-testing", title: "Water Testing", category: "quality", description: "WTP / ETP Water Analysis" },
      { id: "audits", title: "Audits & GMP", category: "quality", description: "Internal & External Inspection" },
      { id: "lab-equipments", title: "Lab Equipments", category: "quality", description: "HPLC, Spectro, Centrifuges" },
    ];

    const targetList = packType === "dairy" ? dairyItems : foodItems;
    targetList.forEach((item) => addFavorite(item));

    toast({
      title: packType === "dairy" ? "Dairy Pack Added! 🥛" : "Food QA Pack Added! 🌾",
      description: `6 essential ${packType === "dairy" ? "dairy processing" : "food technology"} tools added to your workspace.`,
    });
  };

  // Filtered bookmarks
  const filteredBookmarks = useMemo(() => {
    return bookmarkedTopics.filter((topic) => {
      const matchesCategory =
        bookmarkCategoryFilter === "All" || topic.category?.toLowerCase() === bookmarkCategoryFilter.toLowerCase();
      const matchesSearch =
        !bookmarkSearchQuery ||
        topic.title?.toLowerCase().includes(bookmarkSearchQuery.toLowerCase()) ||
        topic.description?.toLowerCase().includes(bookmarkSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [bookmarkedTopics, bookmarkCategoryFilter, bookmarkSearchQuery]);

  // Filtered standards
  const filteredStandards = useMemo(() => {
    return STANDARDS_DIRECTORY.filter((std) => {
      const matchesCat = standardCategory === "All" || std.category === standardCategory;
      const q = standardSearch.toLowerCase();
      const matchesQuery =
        !q ||
        std.productName.toLowerCase().includes(q) ||
        std.regulatoryBody.toLowerCase().includes(q) ||
        std.keyParameters.some((p) => p.label.toLowerCase().includes(q) || p.limit.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [standardSearch, standardCategory]);

  // Audit compliance score
  const totalAuditItems = CCP_AUDIT_MASTER.length;
  const passedAuditItems = Object.values(checkedItems).filter(Boolean).length;
  const auditScore = Math.round((passedAuditItems / totalAuditItems) * 100);

  return (
    <div className="space-y-6 pb-14 animate-fadeIn">
      {/* 👑 TOP HERO BANNER: PERSONAL COMMAND CENTER */}
      <div className="p-5 sm:p-7 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl shadow-xl border border-indigo-500/20 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -top-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                Dairy & Food Industry Operational Workspace
              </span>
              <span className="text-xs font-semibold text-indigo-300 bg-indigo-900/60 border border-indigo-700/50 px-3 py-0.5 rounded-full">
                {new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
              Plant Command & QA Companion
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Your high-speed operational console for instant plant calculations, FSSAI regulatory standards, 1-tap shift handover logs, and bookmarked professional modules.
            </p>
          </div>

          {/* Active Shift Indicator Box */}
          <div className={cn("p-4 rounded-2xl border backdrop-blur-md shrink-0 space-y-1.5 shadow-lg", shift.bg)}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                Current Plant Shift
              </span>
              <span className="text-base">{shift.icon}</span>
            </div>
            <div className={cn("text-xs sm:text-sm font-bold flex items-center gap-1.5", shift.color)}>
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{shift.name}</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {shift.time}
            </p>
          </div>
        </div>
      </div>

      {/* 📌 SECTION 1: BOOKMARKED MODULES & STARTER PACKS */}
      <div className="space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
              <Bookmark className="w-4 h-4 fill-amber-500" />
            </div>
            <h2 className="text-base font-black text-slate-900">
              My Saved Bookmarks ({bookmarkedTopics.length})
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddStarterPack("dairy")}
              className="h-8 text-xs font-bold border-indigo-200 text-indigo-700 bg-indigo-50/50 hover:bg-indigo-100 gap-1.5 rounded-xl"
            >
              <Droplet className="w-3.5 h-3.5 text-indigo-600" />
              + Add Dairy Starter Pack
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAddStarterPack("food")}
              className="h-8 text-xs font-bold border-emerald-200 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100 gap-1.5 rounded-xl"
            >
              <Wheat className="w-3.5 h-3.5 text-emerald-600" />
              + Add Food Tech Pack
            </Button>
          </div>
        </div>

        {bookmarkedTopics.length === 0 ? (
          /* Empty Bookmarks State */
          <Card className="rounded-3xl border-dashed border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/20 shadow-xs">
            <CardContent className="p-7 text-center space-y-4">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <Bookmark className="w-7 h-7 text-indigo-600" />
              </div>

              <div className="max-w-md mx-auto space-y-1">
                <h3 className="font-extrabold text-slate-900 text-base">
                  No Bookmarked Modules Saved Yet!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pin your most frequently used plant calculators, QA testing modules, or food technology SOPs for 1-tap shift access.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  onClick={() => handleAddStarterPack("dairy")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-sm gap-2"
                >
                  <Droplet className="w-4 h-4" />
                  Load Dairy Plant Suite (6 Tools)
                </Button>
                <Button
                  onClick={() => handleAddStarterPack("food")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-sm gap-2"
                >
                  <Wheat className="w-4 h-4" />
                  Load Food Tech Suite (6 Tools)
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Bookmarked Grid with search & filter */
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
              {/* Category pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {["All", "Quality", "Production", "Process"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setBookmarkCategoryFilter(cat)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0",
                      bookmarkCategoryFilter === cat
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Quick filter input */}
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Filter saved tools..."
                  value={bookmarkSearchQuery}
                  onChange={(e) => setBookmarkSearchQuery(e.target.value)}
                  className="h-8 pl-8 text-xs rounded-xl border-slate-200 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredBookmarks.map((topic) => {
                const IconComp = topic.icon || Bookmark;
                return (
                  <div
                    key={topic.id}
                    onClick={() => onOpenModal(topic.id)}
                    className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-400 transition-all group relative flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(topic);
                          }}
                          className="text-amber-500 hover:text-slate-300 transition-colors p-1"
                          title="Remove Bookmark"
                        >
                          <Bookmark className="w-4 h-4 fill-amber-500" />
                        </button>
                      </div>

                      <h3 className="font-extrabold text-slate-900 text-xs group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {topic.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5 leading-tight">
                        {topic.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-indigo-600">
                      <span>Launch</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 🛠️ SECTION 2: WORKSPACE ADVANCED INTERACTIVE TOOLKIT */}
      <div className="space-y-4 pt-2">
        {/* Workspace Navigation Bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("solvers")}
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "solvers"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <Calculator className="w-4 h-4" />
            Live Plant Quick-Solvers
          </button>

          <button
            onClick={() => setActiveTab("standards")}
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "standards"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <BookOpen className="w-4 h-4" />
            FSSAI & BIS Standards Matrix
          </button>

          <button
            onClick={() => setActiveTab("scratchpad")}
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "scratchpad"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <FileText className="w-4 h-4" />
            Smart Shift Handover Log
          </button>

          <button
            onClick={() => setActiveTab("audit")}
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "audit"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <ShieldCheck className="w-4 h-4" />
            HACCP & CCP Live Audit ({passedAuditItems}/{totalAuditItems})
          </button>

          <button
            onClick={() => setActiveTab("converters")}
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 shrink-0",
              activeTab === "converters"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <Gauge className="w-4 h-4" />
            Engineering Converters
          </button>
        </div>

        {/* ═════════════════════════════════════════════════════ */}
        {/* TAB 1: LIVE PLANT QUICK-SOLVERS (INTERACTIVE ENGINES) */}
        {/* ═════════════════════════════════════════════════════ */}
        {activeTab === "solvers" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* SOLVER 1: RICHMOND SNF & DILUTION ENGINE */}
            <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden bg-white">
              <CardHeader className="p-4 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-sky-400" />
                    Richmond's SNF & Water Adulteration Solver
                  </span>
                  <Badge className="bg-sky-500 text-white text-[10px]">Instant Live</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 space-y-4">
                {/* Inputs */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Fat % (Gerber)
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={richmondFat}
                      onChange={(e) => setRichmondFat(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Observed CLR
                    </label>
                    <Input
                      type="number"
                      step="0.5"
                      value={richmondClr}
                      onChange={(e) => setRichmondClr(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Temp (°C)
                    </label>
                    <Input
                      type="number"
                      step="1"
                      value={richmondTemp}
                      onChange={(e) => setRichmondTemp(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                </div>

                {/* Calculation Outputs Display */}
                <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-3 font-mono">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Corrected CLR (at 20°C):</span>
                    <span className="text-amber-300 font-bold">{richmondResults.correctedClr}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1 text-center">
                    <div className="p-2.5 bg-slate-800/80 rounded-xl">
                      <span className="text-[10px] text-slate-400 block uppercase">Calculated SNF %</span>
                      <span className="text-lg font-black text-sky-400">{richmondResults.snf}%</span>
                    </div>
                    <div className="p-2.5 bg-slate-800/80 rounded-xl">
                      <span className="text-[10px] text-slate-400 block uppercase">Total Solids (TS) %</span>
                      <span className="text-lg font-black text-emerald-400">{richmondResults.ts}%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-300">Grade Classification:</span>
                    <Badge
                      className={cn(
                        "text-[11px] font-bold px-2 py-0.5",
                        richmondResults.isCompliant
                          ? "bg-emerald-600 text-white"
                          : "bg-red-600 text-white animate-pulse"
                      )}
                    >
                      {richmondResults.milkClass}
                    </Badge>
                  </div>

                  {richmondResults.waterAdulterationPct > 0 && (
                    <div className="p-2 bg-red-950/60 border border-red-700/50 rounded-xl text-xs text-red-300 flex items-center justify-between font-sans">
                      <span className="flex items-center gap-1.5 font-bold">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        Added Water Adulteration:
                      </span>
                      <strong className="text-red-400 font-mono text-sm">{richmondResults.waterAdulterationPct}%</strong>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SOLVER 2: PEARSON'S SQUARE STANDARDIZATION SOLVER */}
            <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden bg-white">
              <CardHeader className="p-4 bg-gradient-to-r from-amber-900 to-orange-950 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-400" />
                    Pearson Square Standardization & Blending Solver
                  </span>
                  <Badge className="bg-amber-500 text-slate-950 font-black text-[10px]">Plant Batch</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Target Fat %
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={targetFat}
                      onChange={(e) => setTargetFat(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      High Fat %
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={highFat}
                      onChange={(e) => setHighFat(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Low Fat %
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={lowFat}
                      onChange={(e) => setLowFat(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Batch Vol (L)
                    </label>
                    <Input
                      type="number"
                      step="500"
                      value={batchVolume}
                      onChange={(e) => setBatchVolume(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                </div>

                {pearsonResults.isValid ? (
                  <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-3 font-mono">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                      <span>Blending Parts Ratio:</span>
                      <span className="text-amber-300 font-bold">
                        {pearsonResults.partsHigh} : {pearsonResults.partsLow} (Total {pearsonResults.totalParts} Parts)
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-2.5 bg-amber-950/40 border border-amber-800/40 rounded-xl">
                        <span className="text-[10px] text-amber-300 block uppercase font-bold">High Fat ({highFat}%) Needed</span>
                        <span className="text-base sm:text-lg font-black text-amber-400">
                          {pearsonResults.litersHigh.toLocaleString()} L
                        </span>
                      </div>
                      <div className="p-2.5 bg-blue-950/40 border border-blue-800/40 rounded-xl">
                        <span className="text-[10px] text-blue-300 block uppercase font-bold">Low Fat ({lowFat}%) Needed</span>
                        <span className="text-base sm:text-lg font-black text-blue-400">
                          {pearsonResults.litersLow.toLocaleString()} L
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-300 font-sans flex items-center justify-between pt-1">
                      <span>Total Standardized Milk:</span>
                      <strong className="text-emerald-400 font-mono text-sm">{batchVolume.toLocaleString()} Liters at {targetFat}% Fat</strong>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-amber-50 text-amber-800 rounded-xl text-xs font-medium border border-amber-200">
                    ⚠️ Invalid input: Target Fat % must be strictly between Low Fat % and High Fat %.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SOLVER 3: FOOD INDUSTRY BRIX & SUGAR SYRUP SOLVER */}
            <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden bg-white">
              <CardHeader className="p-4 bg-gradient-to-r from-rose-900 to-red-950 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <UtensilsCrossed className="w-4 h-4 text-rose-400" />
                    Food & Beverage °Brix Dilution & Syrup Engine
                  </span>
                  <Badge className="bg-rose-500 text-white text-[10px]">Ketchup / Juice</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-3 gap-2.5">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Batch Volume (L)
                    </label>
                    <Input
                      type="number"
                      step="100"
                      value={brixVol}
                      onChange={(e) => setBrixVol(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Current °Brix
                    </label>
                    <Input
                      type="number"
                      step="0.5"
                      value={currentBrix}
                      onChange={(e) => setCurrentBrix(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Target °Brix
                    </label>
                    <Input
                      type="number"
                      step="0.5"
                      value={targetBrix}
                      onChange={(e) => setTargetBrix(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-2.5 font-mono">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span>Adjustment Action:</span>
                    <Badge className="bg-rose-600 text-white text-xs">{brixResults.action}</Badge>
                  </div>

                  <div className="text-center p-3 bg-slate-800/80 rounded-xl">
                    <span className="text-[10px] text-slate-400 block uppercase">Addition Required</span>
                    <span className="text-xl font-black text-rose-400">
                      {brixResults.amount.toLocaleString()} {brixResults.unit}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 font-sans pt-1">
                    <span>Resulting Batch Volume:</span>
                    <strong className="text-emerald-400 font-mono text-sm">{brixResults.finalVol.toLocaleString()} Liters</strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SOLVER 4: CIP CHEMICAL TANK DOSING SOLVER */}
            <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden bg-white">
              <CardHeader className="p-4 bg-gradient-to-r from-purple-900 to-slate-900 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-purple-400" />
                    CIP Tank Chemical Dosing & Top-Up Engine
                  </span>
                  <Badge className="bg-purple-500 text-white text-[10px]">Plant Sanitation</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      CIP Tank (L)
                    </label>
                    <Input
                      type="number"
                      step="500"
                      value={cipTankVol}
                      onChange={(e) => setCipTankVol(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Chemical Type
                    </label>
                    <select
                      value={cipChemical}
                      onChange={(e) => setCipChemical(e.target.value as any)}
                      className="w-full text-xs font-bold h-9 px-2 rounded-md border border-slate-200 bg-white"
                    >
                      <option value="naoh">Caustic Lye (NaOH)</option>
                      <option value="hno3">Acid (68% HNO3)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Current %
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={cipCurrentPct}
                      onChange={(e) => setCipCurrentPct(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Target %
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={cipTargetPct}
                      onChange={(e) => setCipTargetPct(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-2.5 font-mono">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span>Concentration Deficit:</span>
                    <span className="text-purple-300 font-bold">+{cipResults.deficitPct}%</span>
                  </div>

                  <div className="text-center p-3 bg-purple-950/50 border border-purple-800/40 rounded-xl">
                    <span className="text-[10px] text-purple-300 block uppercase font-bold">Chemical Addition Required</span>
                    <span className="text-xl font-black text-purple-400">
                      {cipResults.amount} {cipResults.unit}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 font-sans leading-tight">
                    Add carefully under circulation at 60°C. Re-titrate with N/10 acid/alkali after 15 minutes of complete mixing.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SOLVER 5: WHIPPING OVERRUN % & AIR ENTRAPMENT */}
            <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden bg-white">
              <CardHeader className="p-4 bg-gradient-to-r from-teal-900 to-emerald-950 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Whipping Overrun % & Foam Structure Solver
                  </span>
                  <Badge className="bg-emerald-500 text-slate-950 font-black text-[10px]">NDC / Ice Cream</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Unit Liquid Mix Mass (g)
                    </label>
                    <Input
                      type="number"
                      step="1"
                      value={liquidMixWeight}
                      onChange={(e) => setLiquidMixWeight(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Same Volume Whipped Foam (g)
                    </label>
                    <Input
                      type="number"
                      step="1"
                      value={foamWeight}
                      onChange={(e) => setFoamWeight(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-2.5 font-mono">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-2.5 bg-slate-800 rounded-xl">
                      <span className="text-[10px] text-slate-400 block uppercase">Overrun %</span>
                      <span className="text-xl font-black text-emerald-400">{overrunResults.overrunPct}%</span>
                    </div>
                    <div className="p-2.5 bg-slate-800 rounded-xl">
                      <span className="text-[10px] text-slate-400 block uppercase">Air Volume Fraction</span>
                      <span className="text-xl font-black text-sky-400">{overrunResults.airFraction}%</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 font-sans flex items-center justify-between pt-1">
                    <span>Texture Classification:</span>
                    <Badge className="bg-emerald-700 text-white text-[11px]">{overrunResults.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SOLVER 6: MILK LITRES TO KG ACCURATE DENSITY ENGINE */}
            <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden bg-white">
              <CardHeader className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-blue-400" />
                    Milk Volume (L) ↔ Weight (Kg) Exact Converter
                  </span>
                  <Badge className="bg-blue-500 text-white text-[10px]">Silo Balance</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-3 gap-2.5">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Volume (Liters)
                    </label>
                    <Input
                      type="number"
                      step="500"
                      value={milkLitres}
                      onChange={(e) => setMilkLitres(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      Fat %
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={convFat}
                      onChange={(e) => setConvFat(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-700 block mb-1">
                      SNF %
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={convSnf}
                      onChange={(e) => setConvSnf(Number(e.target.value))}
                      className="text-xs font-bold h-9"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-2.5 font-mono">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span>True Specific Gravity:</span>
                    <span className="text-blue-300 font-bold">{densityResults.density} kg/L</span>
                  </div>

                  <div className="text-center p-3 bg-blue-950/40 border border-blue-800/40 rounded-xl">
                    <span className="text-[10px] text-blue-300 block uppercase font-bold">Exact Commercial Net Mass</span>
                    <span className="text-xl font-black text-blue-400">
                      {densityResults.weightKg.toLocaleString()} Kilograms (Kg)
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 font-sans leading-tight">
                    Never calculate 1 Liter = 1 Kg for milk. Standard raw milk density is 1.028 - 1.032 kg/L at 20°C.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════ */}
        {/* TAB 2: FSSAI & BIS STANDARDS SEARCH MATRIX */}
        {/* ═════════════════════════════════════════════════════ */}
        {activeTab === "standards" && (
          <div className="space-y-4">
            <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
              <CardHeader className="p-4 bg-slate-900 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-sm font-black flex items-center gap-2 text-white">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      Statutory Regulatory Standards Directory (FSSAI, BIS, Agmark)
                    </CardTitle>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Fast regulatory thresholds, statutory composition limits, and testing methods for Dairy and Food products.
                    </p>
                  </div>

                  {/* Category filter */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                    {["All", "Dairy", "Food", "Beverages", "Fats & Oils"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setStandardCategory(cat)}
                        className={cn(
                          "px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0",
                          standardCategory === cat
                            ? "bg-amber-400 text-slate-950 shadow-xs"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative mt-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search standard by product name, standard code, or parameter..."
                    value={standardSearch}
                    onChange={(e) => setStandardSearch(e.target.value)}
                    className="h-9 pl-9 text-xs rounded-xl bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredStandards.map((std) => (
                    <div
                      key={std.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2.5">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">
                            {std.category} Standard
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            {std.productName}
                          </h4>
                        </div>
                        <Badge variant="outline" className="text-[10px] font-bold border-indigo-200 text-indigo-700">
                          {std.regulatoryBody}
                        </Badge>
                      </div>

                      <div className="space-y-1.5">
                        {std.keyParameters.map((param, pIdx) => (
                          <div key={pIdx} className="flex items-center justify-between text-xs py-0.5">
                            <span className="text-slate-600 font-semibold">{param.label}:</span>
                            <div className="text-right">
                              <strong className="text-slate-900 font-mono">{param.limit}</strong>
                              <span className="text-[10px] text-slate-500 block">({param.rule})</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900">
                        <strong>⚠️ Statutory Critical:</strong> {std.criticalSafetyNotes}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════ */}
        {/* TAB 3: SMART SHIFT HANDOVER LOG (PLANT LOGBOOK 2.0)  */}
        {/* ═════════════════════════════════════════════════════ */}
        {activeTab === "scratchpad" && (
          <Card className="rounded-3xl border-slate-200 shadow-sm bg-white overflow-hidden">
            <CardHeader className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-slate-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-sm sm:text-base font-black flex items-center gap-2 text-white">
                    <FileText className="w-4 h-4 text-indigo-400" />
                    Digital Shift Handover & Operational Logbook
                  </CardTitle>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Structured plant log with 1-tap template inserts and instant export to WhatsApp / Shift Handover.
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Button
                    onClick={handleCopyNotes}
                    size="sm"
                    className="h-8 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold gap-1.5 rounded-xl shadow-xs"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    {isCopied ? "Copied!" : "Copy for WhatsApp 📋"}
                  </Button>
                  <Button
                    onClick={handleDownloadLog}
                    size="sm"
                    variant="outline"
                    className="h-8 text-xs bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 font-bold gap-1.5 rounded-xl"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download (.txt)
                  </Button>
                  <Button
                    onClick={() => {
                      setShiftNotes("");
                      localStorage.removeItem(SCRATCHPAD_KEY);
                      toast({ title: "Log Cleared", description: "Scratchpad emptied." });
                    }}
                    size="sm"
                    variant="ghost"
                    className="h-8 text-xs text-slate-400 hover:text-red-400 font-bold gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-5 space-y-4">
              {/* Quick Template Insert Buttons */}
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
                  1-Tap Structured Section Inserts:
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  <button
                    onClick={() =>
                      insertTemplate(
                        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🥛 [RAW MILK RECEPTION LOG]\n• Tanker No: RJ-14-XX-1234\n• Arrival Volume: 18,500 L\n• Arrival Temp: 4.2°C | CLR: 28.5 (at 20°C)\n• Fat: 4.30% | SNF: 8.58% | TS: 12.88%\n• Acidity: 0.130% | COB: Negative | Alcohol 68%: Passed\n• MBRT: > 5.0 Hours (Grade 1)\n• Adulteration: Urea, Starch, Neutralizer Negative\n• Destination Silo: Silo No. 2`
                      )
                    }
                    className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 rounded-xl text-xs font-bold shrink-0 transition-colors"
                  >
                    🥛 Milk Reception (RMRD)
                  </button>

                  <button
                    onClick={() =>
                      insertTemplate(
                        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚖️ [STANDARDIZATION & PASTEURIZER LOG]\n• Target Product: Toned Milk (3.0% Fat, 8.5% SNF)\n• Process Tank: MT-03 (Batch Size: 25,000 Liters)\n• High Fat Component: 15,000 L Whole Milk (4.5% Fat)\n• Skim Added: 10,000 L Skim Milk (0.05% Fat)\n• Final Verified Batch: 3.02% Fat, 8.55% SNF\n• Pasteurizer: HTST Temp 73.5°C | Holding: 16 sec\n• FDV Auto-Trip Test: Passed | Phosphatase: Negative`
                      )
                    }
                    className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-xl text-xs font-bold shrink-0 transition-colors"
                  >
                    ⚖️ Standardization Batch
                  </button>

                  <button
                    onClick={() =>
                      insertTemplate(
                        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🍪 [FOOD / BAKERY LINE INSPECTION]\n• Product: Premium Butter Cookies (Batch #BC-402)\n• Dough Temp: 22.5°C | Oven Bake Profile: 180°C / 14 min\n• Moisture: 3.2% (Max 5.0%) | Fat: 22.4%\n• Water Activity (aw): 0.42 (Stable)\n• Metal Detector CCP: 1.5mm Fe / 2.0mm Non-Fe Passed\n• Total Output: 1,450 Cartons Packed`
                      )
                    }
                    className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-bold shrink-0 transition-colors"
                  >
                    🍪 Food & Bakery QA
                  </button>

                  <button
                    onClick={() =>
                      insertTemplate(
                        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🧼 [5-STAGE PLANT CIP LOG]\n• Circuit: Pasteurizer & Line No. 1\n• 1. Pre-Rinse: 10 mins (Turbidity < 5 NTU)\n• 2. Caustic Lye: 1.8% NaOH at 78°C (20 mins)\n• 3. Intermediate Rinse: 5 mins\n• 4. Acid Circulation: 0.9% HNO3 at 68°C (15 mins)\n• 5. Final Sanitization: Hot Water 85°C | Final pH: 7.1 (Neutral)`
                      )
                    }
                    className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 rounded-xl text-xs font-bold shrink-0 transition-colors"
                  >
                    🧼 CIP Sanitation
                  </button>

                  <button
                    onClick={() =>
                      insertTemplate(
                        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚠️ [QUALITY DEVIATION & OOS INCIDENT]\n• Time of Incident: 11:30 AM\n• Line / Silo: Pouch Packing Machine #2\n• Parameter Out-of-Spec: Weight variation observed (485g vs 500g target)\n• Root Cause: Fill nozzle pneumatic pressure drop\n• Immediate Correction: Machine stopped, pressure regulator calibrated, 42 pouches re-packaged\n• Sign-off QA Officer: [Shift In-Charge]`
                      )
                    }
                    className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-900 border border-red-200 rounded-xl text-xs font-bold shrink-0 transition-colors"
                  >
                    ⚠️ Incident / OOS Note
                  </button>
                </div>
              </div>

              {/* Text Area */}
              <textarea
                value={shiftNotes}
                onChange={(e) => handleSaveNotes(e.target.value)}
                placeholder="Type shift handover notes, tanker readings, plant incidents, or tap any template above... (Auto-saved continuously to your local storage)"
                className="w-full h-64 sm:h-80 p-4 text-xs sm:text-sm font-mono border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50/50 leading-relaxed"
              />

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Auto-saved to local browser storage
                </span>
                <span className="font-mono">{shiftNotes.length} Characters</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ═════════════════════════════════════════════════════ */}
        {/* TAB 4: HACCP & CCP LIVE AUDIT CHECKLIST            */}
        {/* ═════════════════════════════════════════════════════ */}
        {activeTab === "audit" && (
          <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
            <CardHeader className="p-4 sm:p-5 bg-slate-900 text-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-sm sm:text-base font-black flex items-center gap-2 text-white">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    HACCP & FSSAI Critical Control Point (CCP) Shift Audit
                  </CardTitle>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Live verification checklist for dairy & food plant shift supervisors and QA managers.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-extrabold">
                      Compliance Score
                    </span>
                    <span className="text-sm sm:text-base font-black text-emerald-400 font-mono">
                      {auditScore}% ({passedAuditItems}/{totalAuditItems} Done)
                    </span>
                  </div>
                  <Button
                    onClick={resetChecklist}
                    size="sm"
                    variant="outline"
                    className="h-8 text-xs bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 rounded-xl"
                  >
                    Reset Shift
                  </Button>
                </div>
              </div>

              <div className="mt-3">
                <Progress value={auditScore} className="h-2 bg-slate-800" />
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-5 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {CCP_AUDIT_MASTER.map((item) => {
                  const isChecked = Boolean(checkedItems[item.id]);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheckItem(item.id)}
                      className={cn(
                        "p-4 rounded-2xl border transition-all cursor-pointer select-none space-y-2",
                        isChecked
                          ? "bg-emerald-50/70 border-emerald-300 shadow-xs"
                          : "bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-white"
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              "w-5 h-5 rounded-md flex items-center justify-center transition-colors border",
                              isChecked
                                ? "bg-emerald-600 border-emerald-600 text-white"
                                : "bg-white border-slate-300 text-transparent"
                            )}
                          >
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <h4 className={cn("text-xs font-bold", isChecked ? "text-emerald-950 line-through" : "text-slate-900")}>
                            {item.title}
                          </h4>
                        </div>
                        <Badge variant="outline" className="text-[10px] font-mono shrink-0">
                          {item.category}
                        </Badge>
                      </div>

                      <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                        <strong>Standard:</strong> {item.criterion}
                      </p>

                      <div className="text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded-xl border border-amber-100 ml-7">
                        <strong>Correction:</strong> {item.correctiveAction}
                      </div>
                    </div>
                  );
                })}
              </div>

              {auditScore === 100 && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-1 text-emerald-900">
                  <div className="flex items-center justify-center gap-2 font-black text-sm">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    100% Shift Audit Compliance Achieved!
                  </div>
                  <p className="text-xs text-emerald-700">
                    All Critical Control Points (CCPs) verified within prescribed regulatory tolerances.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* ═════════════════════════════════════════════════════ */}
        {/* TAB 5: ENGINEERING & STEAM CONSTANTS CONVERTER     */}
        {/* ═════════════════════════════════════════════════════ */}
        {activeTab === "converters" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Steam Table Card */}
            <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-slate-900 to-amber-950 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    Saturated Steam Pressure vs Temperature (Pasteurizer & Retort)
                  </span>
                  <Badge className="bg-amber-500 text-slate-950 font-black text-[10px]">Thermal Guide</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2.5 text-xs font-mono">
                <div className="grid grid-cols-3 font-bold border-b border-slate-200 pb-2 text-slate-700 text-[11px]">
                  <span>Gauge Press (Bar)</span>
                  <span>Steam Temp (°C)</span>
                  <span>Typical Plant Use</span>
                </div>

                {[
                  { bar: "0.5 bar (7.2 psi)", temp: "111.4°C", use: "CIP Hot Water Heating" },
                  { bar: "1.0 bar (14.5 psi)", temp: "120.4°C", use: "Commercial Retort Canning" },
                  { bar: "1.5 bar (21.7 psi)", temp: "127.4°C", use: "Evaporator Thermo-recompression" },
                  { bar: "2.0 bar (29.0 psi)", temp: "133.5°C", use: "Ghee Boiling Kettle" },
                  { bar: "3.0 bar (43.5 psi)", temp: "143.6°C", use: "UHT Direct Steam Injection" },
                  { bar: "4.0 bar (58.0 psi)", temp: "151.8°C", use: "Spray Dryer Air Heating" },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 text-[11px] py-1 border-b border-slate-100 last:border-none">
                    <span className="text-indigo-600 font-bold">{row.bar}</span>
                    <span className="text-red-600 font-bold">{row.temp}</span>
                    <span className="text-slate-600 font-sans">{row.use}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Chemical Normality Dilution Quick Solver */}
            <Card className="rounded-3xl border-slate-200 shadow-xs bg-white overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-slate-900 to-indigo-950 text-white">
                <CardTitle className="text-sm font-extrabold flex items-center justify-between text-white">
                  <span className="flex items-center gap-2">
                    <Beaker className="w-4 h-4 text-sky-400" />
                    Laboratory Standard Dilution ($N_1 V_1 = N_2 V_2$)
                  </span>
                  <Badge className="bg-sky-500 text-white text-[10px]">Lab Prep</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-xs">
                <p className="text-slate-600 text-[11px]">
                  Standard laboratory stock dilution formula for preparing volumetric analytical reagents:
                </p>

                <div className="p-3 bg-slate-900 text-sky-300 font-mono rounded-xl font-bold text-center text-sm">
                  V1 = (N2 × V2) / N1
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-[11px]">
                  <h5 className="font-extrabold text-slate-900">Standard Lab Reagent Recipe:</h5>
                  <p className="text-slate-700">
                    <strong>Preparation of 1000 mL N/10 (0.1 N) NaOH:</strong> <br />
                    Dissolve <strong>4.000 g</strong> analytical grade NaOH pellets in carbon dioxide-free distilled water and dilute to exactly 1000 mL. Standardize against 0.1 N Potassium Hydrogen Phthalate (KHP).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
