"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Scale, FileText, Printer, Download, Trash2, Plus, RefreshCw, Info, Edit3, Calendar, Beaker, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { snfFormulas } from "@/lib/data";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { savePdfFile, saveFile } from "@/lib/mobile-download";

// Interfaces
interface MassBalanceRow {
  id: string;
  name: string;
  liters: string;
  fat: string;
  clr: string;
  snf?: string;
}

interface SeparationState {
  separatedLiters: string;
  density: string;
  creamRemovedKg: string;
  creamDensity: string;
  creamFatPct: string;
  creamSnfPct: string;
}

// Module-level Default Constants to reuse across resets/date switching
const DEFAULT_SOURCES: MassBalanceRow[] = [
  { id: "s1", name: "Tanker 1", liters: "10400", fat: "6.3", clr: "30" },
  { id: "s2", name: "Tanker Night", liters: "6890", fat: "5.2", clr: "29.5" },
  { id: "s3", name: "Tanker Day", liters: "5360", fat: "6.0", clr: "28.5" },
  { id: "s4", name: "Balance 1", liters: "1500", fat: "4.2", clr: "29.5" },
  { id: "s5", name: "Milk", liters: "0", fat: "3.8", clr: "29" }
];

const DEFAULT_SEPARATION: SeparationState = {
  separatedLiters: "7000",
  density: "1.029",
  creamRemovedKg: "1400",
  creamDensity: "0.98",
  creamFatPct: "40",
  creamSnfPct: "0.5"
};

const DEFAULT_VARIANTS: MassBalanceRow[] = [
  { id: "v1", name: "FCM", liters: "4150", fat: "5.9", clr: "29.5" },
  { id: "v2", name: "Ts", liters: "3904", fat: "4.2", clr: "31" },
  { id: "v3", name: "T gold", liters: "8039", fat: "4.0", clr: "31" },
  { id: "v4", name: "Std", liters: "648", fat: "4.0", clr: "29" },
  { id: "v5", name: "Htm", liters: "568.9", fat: "2.2", clr: "30" },
  { id: "v6", name: "DTM", liters: "2268.7", fat: "1.1", clr: "31" },
  { id: "v7", name: "Sm", liters: "325.2", fat: "0.05", clr: "31" },
  { id: "v8", name: "Tm curd", liters: "914.8", fat: "2.6", clr: "38" },
  { id: "v9", name: "Sm curd", liters: "913.2", fat: "0.05", clr: "38" },
  { id: "v10", name: "Chach", liters: "1389.1", fat: "1.1", clr: "31" },
  { id: "v11", name: "T. Chach", liters: "54", fat: "1.41", clr: "15.23" },
  { id: "v12", name: "Paneer", liters: "0", fat: "5.0", clr: "29" }
];

const DEFAULT_BALANCES: MassBalanceRow[] = [
  { id: "b1", name: "Tm Dahi", liters: "372.48", fat: "2.6", clr: "38" },
  { id: "b2", name: "Sm Dahi", liters: "409", fat: "0.05", clr: "38" },
  { id: "b3", name: "Chach", liters: "232.5", fat: "1.1", clr: "31" },
  { id: "b4", name: "T. Chach", liters: "13", fat: "1.41", clr: "15.23" },
  { id: "b5", name: "Paneer", liters: "0", fat: "5.0", clr: "29" },
  { id: "b6", name: "Night Balance milk", liters: "2200", fat: "2.9", clr: "28.5" }
];

export default function MassBalanceCalc() {
  const reportRef = useRef<HTMLDivElement>(null);
  const monthlyReportRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"edit" | "report" | "monthly">("edit");

  // Date management states
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    // Offset local timezone format YYYY-MM-DD
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  const [selectedMonth, setSelectedMonth] = useState(() => new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(() => new Date().getFullYear());

  // Global settings
  const [overallDensity, setOverallDensity] = useState("1.029");
  const [snfFormula, setSnfFormula] = useState<string>("new_formula");
  const [customFatMultiplier, setCustomFatMultiplier] = useState<string>("0.21");
  const [customConstant, setCustomConstant] = useState<string>("0.29");

  // State arrays for selectedDate
  const [sources, setSources] = useState<MassBalanceRow[]>(DEFAULT_SOURCES);
  const [separation, setSeparation] = useState<SeparationState>(DEFAULT_SEPARATION);
  const [variants, setVariants] = useState<MassBalanceRow[]>(DEFAULT_VARIANTS);
  const [balances, setBalances] = useState<MassBalanceRow[]>(DEFAULT_BALANCES);

  const [isExporting, setIsExporting] = useState(false);

  // Load state from localStorage when selectedDate changes
  useEffect(() => {
    try {
      const savedSources = localStorage.getItem(`dairy_mb_sources_${selectedDate}`);
      const savedSeparation = localStorage.getItem(`dairy_mb_separation_${selectedDate}`);
      const savedVariants = localStorage.getItem(`dairy_mb_variants_${selectedDate}`);
      const savedBalances = localStorage.getItem(`dairy_mb_balances_${selectedDate}`);
      const savedDensity = localStorage.getItem(`dairy_mb_density_${selectedDate}`);
      const savedFormula = localStorage.getItem(`dairy_mb_snf_formula_${selectedDate}`);
      const savedCustomMult = localStorage.getItem(`dairy_mb_custom_fat_mult_${selectedDate}`);
      const savedCustomConst = localStorage.getItem(`dairy_mb_custom_const_${selectedDate}`);

      if (savedSources) {
        setSources(JSON.parse(savedSources));
      } else {
        // Fallback to legacy unsuffixed keys if date is today and legacy keys exist
        const todayStr = new Date().toISOString().split("T")[0];
        const legacySources = selectedDate === todayStr ? localStorage.getItem("dairy_mb_sources") : null;
        setSources(legacySources ? JSON.parse(legacySources) : DEFAULT_SOURCES);
      }

      if (savedSeparation) {
        setSeparation(JSON.parse(savedSeparation));
      } else {
        const todayStr = new Date().toISOString().split("T")[0];
        const legacySeparation = selectedDate === todayStr ? localStorage.getItem("dairy_mb_separation") : null;
        setSeparation(legacySeparation ? JSON.parse(legacySeparation) : DEFAULT_SEPARATION);
      }

      if (savedVariants) {
        setVariants(JSON.parse(savedVariants));
      } else {
        const todayStr = new Date().toISOString().split("T")[0];
        const legacyVariants = selectedDate === todayStr ? localStorage.getItem("dairy_mb_variants") : null;
        setVariants(legacyVariants ? JSON.parse(legacyVariants) : DEFAULT_VARIANTS);
      }

      if (savedBalances) {
        setBalances(JSON.parse(savedBalances));
      } else {
        const todayStr = new Date().toISOString().split("T")[0];
        const legacyBalances = selectedDate === todayStr ? localStorage.getItem("dairy_mb_balances") : null;
        setBalances(legacyBalances ? JSON.parse(legacyBalances) : DEFAULT_BALANCES);
      }

      if (savedDensity) {
        setOverallDensity(savedDensity);
      } else {
        const todayStr = new Date().toISOString().split("T")[0];
        const legacyDensity = selectedDate === todayStr ? localStorage.getItem("dairy_mb_density") : null;
        setOverallDensity(legacyDensity || "1.029");
      }

      if (savedFormula) {
        setSnfFormula(savedFormula);
      } else {
        const legacyFormula = localStorage.getItem("dairy_mb_snf_formula");
        setSnfFormula(legacyFormula || "new_formula");
      }

      if (savedCustomMult) {
        setCustomFatMultiplier(savedCustomMult);
      } else {
        const legacyMult = localStorage.getItem("dairy_mb_custom_fat_mult");
        setCustomFatMultiplier(legacyMult || "0.21");
      }

      if (savedCustomConst) {
        setCustomConstant(savedCustomConst);
      } else {
        const legacyConst = localStorage.getItem("dairy_mb_custom_const");
        setCustomConstant(legacyConst || "0.29");
      }
    } catch (e) {
      console.error("Failed to load mass balance draft", e);
    }
  }, [selectedDate]);

  // Save draft to localStorage suffixing targetDate
  const saveDraft = useCallback((
    updatedSources: MassBalanceRow[],
    updatedSeparation: SeparationState,
    updatedVariants: MassBalanceRow[],
    updatedBalances: MassBalanceRow[],
    updatedDensity: string,
    targetDate: string,
    updatedSnfFormula: string = snfFormula,
    updatedCustomMult: string = customFatMultiplier,
    updatedCustomConst: string = customConstant
  ) => {
    try {
      localStorage.setItem(`dairy_mb_sources_${targetDate}`, JSON.stringify(updatedSources));
      localStorage.setItem(`dairy_mb_separation_${targetDate}`, JSON.stringify(updatedSeparation));
      localStorage.setItem(`dairy_mb_variants_${targetDate}`, JSON.stringify(updatedVariants));
      localStorage.setItem(`dairy_mb_balances_${targetDate}`, JSON.stringify(updatedBalances));
      localStorage.setItem(`dairy_mb_density_${targetDate}`, updatedDensity);
      localStorage.setItem(`dairy_mb_snf_formula_${targetDate}`, updatedSnfFormula);
      localStorage.setItem(`dairy_mb_custom_fat_mult_${targetDate}`, updatedCustomMult);
      localStorage.setItem(`dairy_mb_custom_const_${targetDate}`, updatedCustomConst);

      // Track saved dates to allow quick lookups in the month summaries
      const savedDates = localStorage.getItem("dairy_mb_saved_dates");
      const list: string[] = savedDates ? JSON.parse(savedDates) : [];
      if (!list.includes(targetDate)) {
        list.push(targetDate);
        localStorage.setItem("dairy_mb_saved_dates", JSON.stringify(list));
      }
    } catch (e) {
      console.error("Failed to save draft", e);
    }
  }, [snfFormula, customFatMultiplier, customConstant]);

  // Row update handlers
  const updateRow = (
    type: "sources" | "variants" | "balances",
    id: string,
    field: keyof MassBalanceRow,
    value: string
  ) => {
    if (type === "sources") {
      const updated = sources.map(r => r.id === id ? { ...r, [field]: value } : r);
      setSources(updated);
      saveDraft(updated, separation, variants, balances, overallDensity, selectedDate);
    } else if (type === "variants") {
      const updated = variants.map(r => r.id === id ? { ...r, [field]: value } : r);
      setVariants(updated);
      saveDraft(sources, separation, updated, balances, overallDensity, selectedDate);
    } else {
      const updated = balances.map(r => r.id === id ? { ...r, [field]: value } : r);
      setBalances(updated);
      saveDraft(sources, separation, variants, updated, overallDensity, selectedDate);
    }
  };

  const addRow = (type: "sources" | "variants" | "balances") => {
    const newRow = {
      id: Math.random().toString(36).substring(2, 9),
      name: `New ${type === "sources" ? "Source" : type === "variants" ? "Variant" : "Balance"}`,
      liters: "",
      fat: "",
      clr: "",
      snf: ""
    };
    if (type === "sources") {
      const updated = [...sources, newRow];
      setSources(updated);
      saveDraft(updated, separation, variants, balances, overallDensity, selectedDate);
    } else if (type === "variants") {
      const updated = [...variants, newRow];
      setVariants(updated);
      saveDraft(sources, separation, updated, balances, overallDensity, selectedDate);
    } else {
      const updated = [...balances, newRow];
      setBalances(updated);
      saveDraft(sources, separation, variants, updated, overallDensity, selectedDate);
    }
  };

  const deleteRow = (type: "sources" | "variants" | "balances", id: string) => {
    if (type === "sources") {
      const updated = sources.filter(r => r.id !== id);
      setSources(updated);
      saveDraft(updated, separation, variants, balances, overallDensity, selectedDate);
    } else if (type === "variants") {
      const updated = variants.filter(r => r.id !== id);
      setVariants(updated);
      saveDraft(sources, separation, updated, balances, overallDensity, selectedDate);
    } else {
      const updated = balances.filter(r => r.id !== id);
      setBalances(updated);
      saveDraft(sources, separation, variants, updated, overallDensity, selectedDate);
    }
  };

  const resetAll = () => {
    if (window.confirm("Are you sure you want to reset this date's calculations to default values?")) {
      setSources(DEFAULT_SOURCES);
      setSeparation(DEFAULT_SEPARATION);
      setVariants(DEFAULT_VARIANTS);
      setBalances(DEFAULT_BALANCES);
      setOverallDensity("1.029");
      setSnfFormula("new_formula");
      setCustomFatMultiplier("0.21");
      setCustomConstant("0.29");
      saveDraft(DEFAULT_SOURCES, DEFAULT_SEPARATION, DEFAULT_VARIANTS, DEFAULT_BALANCES, "1.029", selectedDate, "new_formula", "0.21", "0.29");
      toast({ title: "Reset Successful", description: "Calculator values reset to default." });
    }
  };

  // getMonthlyData aggregates daily reports for a given month and year
  // Automated Math Logic
  const calcRowStats = useCallback((
    liters: string,
    fat: string,
    clr: string,
    density: number,
    directSnf?: string,
    formulaKey: string = snfFormula,
    fatMult: string = customFatMultiplier,
    constVal: string = customConstant
  ) => {
    const ltr = parseFloat(liters) || 0;
    const f = parseFloat(fat) || 0;
    const c = parseFloat(clr) || 0;

    const mass = ltr * density;

    let snfPct = 0;
    // Direct SNF override takes priority if entered
    if (directSnf !== undefined && directSnf.trim() !== "" && !isNaN(parseFloat(directSnf))) {
      snfPct = parseFloat(directSnf);
    } else if (ltr > 0 || c > 0 || f > 0) {
      if (formulaKey === "custom") {
        const mult = parseFloat(fatMult) || 0.21;
        const cVal = parseFloat(constVal) || 0.29;
        snfPct = (c / 4) + (mult * f) + cVal;
      } else {
        const formulaObj = snfFormulas[formulaKey as keyof typeof snfFormulas];
        snfPct = formulaObj ? formulaObj.calc(c, f) : (c / 4) + (0.21 * f) + 0.29;
      }
    }

    const fatKg = mass * f / 100;
    const snfKg = mass * snfPct / 100;

    return { mass, snfPct, fatKg, snfKg, ltr, f, c, snfDirect: directSnf };
  }, [snfFormula, customFatMultiplier, customConstant]);

  const getMonthlyData = useCallback((year: number, month: number) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const list = [];
    let totalSourceLtr = 0;
    let totalSourceFatKg = 0;
    let totalSourceSnfKg = 0;
    let totalVariantLtr = 0;
    let totalVariantFatKg = 0;
    let totalVariantSnfKg = 0;
    let totalBalanceLtr = 0;
    let totalBalanceFatKg = 0;
    let totalBalanceSnfKg = 0;
    let totalCreamKg = 0;

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const savedSources = localStorage.getItem(`dairy_mb_sources_${dateStr}`);
      const savedSeparation = localStorage.getItem(`dairy_mb_separation_${dateStr}`);
      const savedVariants = localStorage.getItem(`dairy_mb_variants_${dateStr}`);
      const savedBalances = localStorage.getItem(`dairy_mb_balances_${dateStr}`);
      const savedDensity = localStorage.getItem(`dairy_mb_density_${dateStr}`);
      const savedFormula = localStorage.getItem(`dairy_mb_snf_formula_${dateStr}`) || "new_formula";
      const savedCustomMult = localStorage.getItem(`dairy_mb_custom_fat_mult_${dateStr}`) || "0.21";
      const savedCustomConst = localStorage.getItem(`dairy_mb_custom_const_${dateStr}`) || "0.29";

      if (savedSources && savedSeparation && savedVariants && savedBalances) {
        try {
          const sRows: MassBalanceRow[] = JSON.parse(savedSources);
          const sep: SeparationState = JSON.parse(savedSeparation);
          const vRows: MassBalanceRow[] = JSON.parse(savedVariants);
          const bRows: MassBalanceRow[] = JSON.parse(savedBalances);
          const dens = parseFloat(savedDensity || "1.029") || 1.029;

          // Helper row stats
          let daySrcLtr = 0, daySrcFat = 0, daySrcSnf = 0;
          sRows.forEach(r => {
            const stats = calcRowStats(r.liters, r.fat, r.clr, dens, r.snf, savedFormula, savedCustomMult, savedCustomConst);
            daySrcLtr += stats.ltr;
            daySrcFat += stats.fatKg;
            daySrcSnf += stats.snfKg;
          });

          let dayVarLtr = 0, dayVarFat = 0, dayVarSnf = 0;
          vRows.forEach(r => {
            const stats = calcRowStats(r.liters, r.fat, r.clr, dens, r.snf, savedFormula, savedCustomMult, savedCustomConst);
            dayVarLtr += stats.ltr;
            dayVarFat += stats.fatKg;
            dayVarSnf += stats.snfKg;
          });

          let dayBalLtr = 0, dayBalFat = 0, dayBalSnf = 0;
          bRows.forEach(r => {
            const stats = calcRowStats(r.liters, r.fat, r.clr, dens, r.snf, savedFormula, savedCustomMult, savedCustomConst);
            dayBalLtr += stats.ltr;
            dayBalFat += stats.fatKg;
            dayBalSnf += stats.snfKg;
          });

          const creamRemovedKg = parseFloat(sep.creamRemovedKg) || 0;
          const creamDensity = parseFloat(sep.creamDensity) || 0.98;
          const creamFatPct = parseFloat(sep.creamFatPct) || 0;
          const creamSnfPct = parseFloat(sep.creamSnfPct) || 0;

          const creamLiters = creamDensity > 0 ? creamRemovedKg / creamDensity : 0;
          const creamFatKg = creamLiters * creamDensity * (creamFatPct / 100);
          const creamSnfKg = creamLiters * creamDensity * (creamSnfPct / 100);

          const combinedFatPct = (daySrcLtr * dens) > 0 ? (daySrcFat / (daySrcLtr * dens)) * 100 : 0;
          const combinedSnfPct = (daySrcLtr * dens) > 0 ? (daySrcSnf / (daySrcLtr * dens)) * 100 : 0;
          const skimmedMilkMassKg = (parseFloat(sep.separatedLiters) || 0) - creamLiters;
          const skimmedFatKg = skimmedMilkMassKg * (combinedFatPct / 100);
          const skimmedSnfKg = skimmedMilkMassKg * (combinedSnfPct / 100);

          const reconFat = daySrcFat - dayVarFat - dayBalFat - (creamFatKg - skimmedFatKg);
          const reconSnf = daySrcSnf - dayVarSnf - dayBalSnf - (creamSnfKg - skimmedSnfKg);

          const reconFatPct = daySrcFat > 0 ? (reconFat / daySrcFat) * 100 : 0;
          const reconSnfPct = daySrcSnf > 0 ? (reconSnf / daySrcSnf) * 100 : 0;

          totalSourceLtr += daySrcLtr;
          totalSourceFatKg += daySrcFat;
          totalSourceSnfKg += daySrcSnf;
          totalVariantLtr += dayVarLtr;
          totalVariantFatKg += dayVarFat;
          totalVariantSnfKg += dayVarSnf;
          totalBalanceLtr += dayBalLtr;
          totalBalanceFatKg += dayBalFat;
          totalBalanceSnfKg += dayBalSnf;
          totalCreamKg += creamRemovedKg;

          list.push({
            date: dateStr,
            hasData: true,
            srcLiters: daySrcLtr,
            srcFatKg: daySrcFat,
            srcSnfKg: daySrcSnf,
            varLiters: dayVarLtr,
            varFatKg: dayVarFat,
            varSnfKg: dayVarSnf,
            balLiters: dayBalLtr,
            balFatKg: dayBalFat,
            balSnfKg: dayBalSnf,
            creamKg: creamRemovedKg,
            fatLossPct: reconFatPct,
            snfLossPct: reconSnfPct
          });
        } catch (e) {
          console.error("Failed to parse monthly entry", dateStr, e);
          list.push({ date: dateStr, hasData: false });
        }
      } else {
        list.push({ date: dateStr, hasData: false });
      }
    }

    return {
      dailyList: list,
      totals: {
        srcLiters: totalSourceLtr,
        srcFatKg: totalSourceFatKg,
        srcSnfKg: totalSourceSnfKg,
        varLiters: totalVariantLtr,
        varFatKg: totalVariantFatKg,
        varSnfKg: totalVariantSnfKg,
        balLiters: totalBalanceLtr,
        balFatKg: totalBalanceFatKg,
        balSnfKg: totalBalanceSnfKg,
        creamKg: totalCreamKg
      }
    };
  }, [calcRowStats]);

  const handlePrintMonthly = () => {
    window.print();
  };

  const handleExportMonthlyCSV = async () => {
    const data = getMonthlyData(selectedYear, selectedMonth);
    const headers = [
      "Date", "Source Liters", "Source Fat (kg)", "Source SNF (kg)",
      "Variant Liters", "Variant Fat (kg)", "Variant SNF (kg)",
      "Balance Liters", "Cream Removed (kg)", "Fat Loss (%)", "SNF Loss (%)"
    ];

    const rows = data.dailyList.map(row => {
      if (!row.hasData) {
        return [row.date, "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"];
      }
      return [
        row.date,
        row.srcLiters?.toFixed(1) || "0",
        row.srcFatKg?.toFixed(2) || "0",
        row.srcSnfKg?.toFixed(2) || "0",
        row.varLiters?.toFixed(1) || "0",
        row.varFatKg?.toFixed(2) || "0",
        row.varSnfKg?.toFixed(2) || "0",
        row.balLiters?.toFixed(1) || "0",
        row.creamKg?.toFixed(1) || "0",
        row.fatLossPct?.toFixed(2) || "0",
        row.snfLossPct?.toFixed(2) || "0"
      ];
    });

    // Add Totals row
    rows.push([
      "Total",
      data.totals.srcLiters.toFixed(1),
      data.totals.srcFatKg.toFixed(2),
      data.totals.srcSnfKg.toFixed(2),
      data.totals.varLiters.toFixed(1),
      data.totals.varFatKg.toFixed(2),
      data.totals.varSnfKg.toFixed(2),
      data.totals.balLiters.toFixed(1),
      data.totals.creamKg.toFixed(1),
      "—",
      "—"
    ]);

    const csvRawText = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    await saveFile(csvRawText, `Mass_Balance_Monthly_Summary_${selectedYear}_${selectedMonth}.csv`, "text/csv;charset=utf-8;");
  };

  const densityVal = parseFloat(overallDensity) || 1.029;

  // 1. Source (Input Tanker) totals
  let sourceLitersTotal = 0;
  let sourceMassTotal = 0;
  let sourceFatTotal = 0;
  let sourceSnfTotal = 0;
  
  const sourcesCalced = sources.map(row => {
    const stats = calcRowStats(row.liters, row.fat, row.clr, densityVal, row.snf);
    sourceLitersTotal += stats.ltr;
    sourceMassTotal += stats.mass;
    sourceFatTotal += stats.fatKg;
    sourceSnfTotal += stats.snfKg;
    return { ...row, ...stats };
  });

  const combinedFatPct = sourceMassTotal > 0 ? (sourceFatTotal / sourceMassTotal) * 100 : 0;
  const combinedSnfPct = sourceMassTotal > 0 ? (sourceSnfTotal / sourceMassTotal) * 100 : 0;
  // Weighted CLR by liters
  let sumLitersClr = 0;
  sourcesCalced.forEach(s => {
    sumLitersClr += s.ltr * s.c;
  });
  const combinedClr = sourceLitersTotal > 0 ? sumLitersClr / sourceLitersTotal : 0;

  // 2. Separation totals
  const sepLtr = parseFloat(separation.separatedLiters) || 0;
  const sepDensity = parseFloat(separation.density) || 1.029;
  const creamKg = parseFloat(separation.creamRemovedKg) || 0;
  const creamDensity = parseFloat(separation.creamDensity) || 0.98;
  const creamFatPct = parseFloat(separation.creamFatPct) || 0;
  const creamSnfPct = parseFloat(separation.creamSnfPct) || 0;

  const milkSeparatedKg = sepLtr * sepDensity;
  const creamRemovedLiters = creamDensity > 0 ? creamKg / creamDensity : 0;
  const effectiveCreamLiters = creamKg > 0 ? creamRemovedLiters : sepLtr * parseFloat(separation.creamFatPct || "0.05"); // Fallback
  
  // Cream Fat and SNF kg based on Effective Cream Liters
  const creamFatKg = effectiveCreamLiters * creamDensity * (creamFatPct / 100);
  const creamSnfKg = effectiveCreamLiters * creamDensity * (creamSnfPct / 100);

  // Skimmed Milk Mass and Volume matching the Excel math
  const skimmedMilkMassKg = sepLtr - effectiveCreamLiters;
  const skimmedMilkLiters = sepDensity > 0 ? skimmedMilkMassKg / sepDensity : 0;

  // Skimmed milk fat & SNF based on mass balance
  const skimmedFatKg = skimmedMilkMassKg * (combinedFatPct / 100);
  const skimmedSnfKg = skimmedMilkMassKg * (combinedSnfPct / 100);

  // 3. Variant (Dispatched) totals
  let variantLitersTotal = 0;
  let variantMassTotal = 0;
  let variantFatTotal = 0;
  let variantSnfTotal = 0;

  const variantsCalced = variants.map(row => {
    const stats = calcRowStats(row.liters, row.fat, row.clr, densityVal, row.snf);
    variantLitersTotal += stats.ltr;
    variantMassTotal += stats.mass;
    variantFatTotal += stats.fatKg;
    variantSnfTotal += stats.snfKg;
    return { ...row, ...stats };
  });

  // 4. Balance totals
  let balanceLitersTotal = 0;
  let balanceMassTotal = 0;
  let balanceFatTotal = 0;
  let balanceSnfTotal = 0;

  const balancesCalced = balances.map(row => {
    const stats = calcRowStats(row.liters, row.fat, row.clr, densityVal, row.snf);
    balanceLitersTotal += stats.ltr;
    balanceMassTotal += stats.mass;
    balanceFatTotal += stats.fatKg;
    balanceSnfTotal += stats.snfKg;
    return { ...row, ...stats };
  });

  // 5. Plant Reconciliation Formulas
  // Reconciliation Fat = Bought Fat - Dispatched Fat - Balance Fat - (Cream Fat - Skimmed Fat)
  const reconciliationFat = sourceFatTotal - variantFatTotal - balanceFatTotal - (creamFatKg - skimmedFatKg);
  // Reconciliation SNF = Bought SNF - Dispatched SNF - Balance SNF - (Cream SNF - Skimmed SNF)
  const reconciliationSnf = sourceSnfTotal - variantSnfTotal - balanceSnfTotal - (creamSnfKg - skimmedSnfKg);

  const reconciliationFatPct = sourceFatTotal > 0 ? (reconciliationFat / sourceFatTotal) * 100 : 0;
  const reconciliationSnfPct = sourceSnfTotal > 0 ? (reconciliationSnf / sourceSnfTotal) * 100 : 0;

  // Graded Benchmark Analysis
  const getGrade = (pct: number, isFat: boolean) => {
    const absPct = Math.abs(pct);
    const limits = isFat 
      ? { wc: 0.10, exc: 0.25, gd: 0.50, acc: 1.00 }
      : { wc: 0.15, exc: 0.35, gd: 0.70, acc: 1.50 };

    if (absPct <= limits.wc) return { label: "World Class (अति-उत्कृष्ट)", color: "text-emerald-500 bg-emerald-50 border-emerald-200" };
    if (absPct <= limits.exc) return { label: "Excellent (उत्कृष्ट)", color: "text-green-500 bg-green-50 border-green-200" };
    if (absPct <= limits.gd) return { label: "Good (अच्छा)", color: "text-blue-500 bg-blue-50 border-blue-200" };
    if (absPct <= limits.acc) return { label: "Acceptable (संतोषजनक)", color: "text-yellow-600 bg-yellow-50 border-yellow-200" };
    return { label: "Poor (सुधार की आवश्यकता) ⚠️", color: "text-red-500 bg-red-50 border-red-200" };
  };

  const fatGrade = getGrade(reconciliationFatPct, true);
  const snfGrade = getGrade(reconciliationSnfPct, false);

  // PDF Export handler
  const handleExportPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    toast({ title: "Preparing Document", description: "Generating high-quality PDF report..." });

    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: reportRef.current.scrollWidth || 1000,
        scrollX: 0,
        scrollY: 0,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const imgWidth = 210; // A4 Width in mm
      const pageHeight = 295; // A4 Height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      await savePdfFile(pdf, `Mass_Balance_Report_${new Date().toISOString().split("T")[0]}.pdf`);
      toast({ title: "Success", description: "PDF downloaded successfully!" });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast({ title: "Error", description: "Failed to download PDF.", variant: "destructive" });
    } finally {
      setIsExporting(false);
    }
  };

  // Direct Browser Print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full space-y-6">
      {/* Tab Control */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 print:hidden">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-500 rounded-lg text-white">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Fat & SNF Mass Balance Calculator</h2>
            <p className="text-xs text-slate-500">Real-time dairy plant mass verification & reconciliation</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <Button 
            variant={activeTab === "edit" ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("edit")}
            className="flex-1 sm:flex-none text-xs font-semibold"
          >
            <Edit3 className="w-3.5 h-3.5 mr-1.5" /> Edit Sheet (शीट एडिट)
          </Button>
          <Button 
            variant={activeTab === "report" ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("report")}
            className="flex-1 sm:flex-none text-xs font-semibold"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5" /> View Report (रिपोर्ट देखें)
          </Button>
          <Button 
            variant={activeTab === "monthly" ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("monthly")}
            className="flex-1 sm:flex-none text-xs font-semibold"
          >
            <Scale className="w-3.5 h-3.5 mr-1.5" /> Monthly Summary (मासिक सारांश)
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetAll}
            className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> Reset (रीसेट)
          </Button>
        </div>
      </div>

      {/* ── DATE / MONTH SELECTOR PANEL ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm print:hidden">
        {activeTab !== "monthly" ? (
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Report Date:</span>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer"
              />
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              Data auto-saves for this date.
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Month:</span>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(2026, i, 1).toLocaleString("en-IN", { month: "long" })}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer"
              >
                {[2024, 2025, 2026, 2027, 2028].map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="flex gap-2 w-full sm:w-auto justify-end">
          {activeTab === "monthly" && (
            <>
              <Button size="sm" onClick={handlePrintMonthly} className="text-xs bg-slate-800 hover:bg-slate-900 text-white">
                <Printer className="w-3.5 h-3.5 mr-1.5" /> Print Summary (प्रिंट)
              </Button>
              <Button size="sm" onClick={handleExportMonthlyCSV} className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500">
                <Download className="w-3.5 h-3.5 mr-1.5" /> Export Excel (CSV)
              </Button>
            </>
          )}
        </div>
      </div>

      {/* EDIT SHEET VIEW */}
      {activeTab === "edit" && (
        <div className="space-y-6 print:hidden">
          {/* Settings Card */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Milk Density */}
              <div className="lg:col-span-4 space-y-1">
                <Label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-indigo-500" /> Overall Milk Density (kg/L)
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number" step="0.001"
                    value={overallDensity}
                    onChange={e => {
                      setOverallDensity(e.target.value);
                      saveDraft(sources, separation, variants, balances, e.target.value, selectedDate, snfFormula, customFatMultiplier, customConstant);
                    }}
                    className="text-sm font-semibold border-2 h-9"
                  />
                </div>
                <p className="text-[10px] text-slate-500">Converts volume (L) to mass (kg).</p>
              </div>

              {/* SNF Formula Selector */}
              <div className="lg:col-span-8 space-y-1">
                <Label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Beaker className="w-3.5 h-3.5 text-indigo-500" /> SNF Formula Selector (एस.एन.एफ. फ़ॉर्मूला चयन)
                </Label>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center">
                  <div className="w-full sm:flex-1 min-w-[220px]">
                    <Select
                      value={snfFormula}
                      onValueChange={(val) => {
                        setSnfFormula(val);
                        saveDraft(sources, separation, variants, balances, overallDensity, selectedDate, val, customFatMultiplier, customConstant);
                      }}
                    >
                      <SelectTrigger className="h-9 text-xs font-semibold bg-white border-2">
                        <SelectValue placeholder="Select SNF Formula" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(snfFormulas).map(([key, { name, formulaText }]) => (
                          <SelectItem key={key} value={key} className="text-xs">
                            <span className="font-semibold">{name}</span>
                            <span className="text-[10px] text-slate-400 block">{formulaText}</span>
                          </SelectItem>
                        ))}
                        <SelectItem value="custom" className="text-xs font-semibold">
                          ⚙️ Custom Formula (कस्टम फ़ॉर्मूला)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {snfFormula === "custom" && (
                    <div className="flex items-center gap-2">
                      <div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase block">Fat Mult</span>
                        <Input
                          type="number" step="0.01"
                          value={customFatMultiplier}
                          onChange={e => {
                            setCustomFatMultiplier(e.target.value);
                            saveDraft(sources, separation, variants, balances, overallDensity, selectedDate, snfFormula, e.target.value, customConstant);
                          }}
                          className="h-8 text-xs font-semibold w-20 px-2"
                          placeholder="0.21"
                        />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase block">Const</span>
                        <Input
                          type="number" step="0.01"
                          value={customConstant}
                          onChange={e => {
                            setCustomConstant(e.target.value);
                            saveDraft(sources, separation, variants, balances, overallDensity, selectedDate, snfFormula, customFatMultiplier, e.target.value);
                          }}
                          className="h-8 text-xs font-semibold w-20 px-2"
                          placeholder="0.29"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Active Formula Banner */}
            <div className="text-xs text-indigo-900 bg-indigo-50/80 px-3 py-2 rounded-lg border border-indigo-150 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>
                  <strong>Active SNF Standard:</strong>{" "}
                  {snfFormula === "custom"
                    ? `Custom: SNF % = (CLR / 4) + (${customFatMultiplier || "0.21"} × Fat) + ${customConstant || "0.29"}`
                    : snfFormulas[snfFormula as keyof typeof snfFormulas]?.name + " — " + snfFormulas[snfFormula as keyof typeof snfFormulas]?.formulaText}
                </span>
              </div>
              <span className="text-[10px] text-indigo-600 font-medium bg-indigo-100/70 px-2 py-0.5 rounded">
                💡 Tip: Type into SNF % cell in tables to override with direct lab reading
              </span>
            </div>
          </div>

          {/* Grid Layout for Tables */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Table 1: Source (Input Milk) */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  🟢 Table 1: Source (Input Milk Tankers)
                </h3>
                <Button size="sm" onClick={() => addRow("sources")} variant="outline" className="h-7 text-[10px]">
                  <Plus className="w-3 h-3 mr-1" /> Add Row
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                      <th className="px-3 py-2 text-left w-32">Source Name</th>
                      <th className="px-3 py-2 text-right">Liters</th>
                      <th className="px-3 py-2 text-right">Fat %</th>
                      <th className="px-3 py-2 text-right">CLR</th>
                      <th className="px-3 py-2 text-right text-slate-500">Mass (kg)</th>
                      <th className="px-3 py-2 text-right text-slate-700">SNF %</th>
                      <th className="px-3 py-2 text-right text-slate-500">Fat kg</th>
                      <th className="px-3 py-2 text-right text-slate-500">SNF kg</th>
                      <th className="px-2 py-2 text-center w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sources.map((row) => {
                      const calced = calcRowStats(row.liters, row.fat, row.clr, densityVal, row.snf);
                      return (
                        <tr key={row.id} className="hover:bg-slate-50/50">
                          <td className="p-2">
                            <Input 
                              value={row.name} 
                              onChange={e => updateRow("sources", row.id, "name", e.target.value)}
                              className="h-8 text-xs font-semibold px-2"
                            />
                          </td>
                          <td className="p-2 w-24">
                            <Input 
                              type="number" step="0.01" 
                              value={row.liters} 
                              onChange={e => updateRow("sources", row.id, "liters", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="p-2 w-16">
                            <Input 
                              type="number" step="0.1" 
                              value={row.fat} 
                              onChange={e => updateRow("sources", row.id, "fat", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="p-2 w-16">
                            <Input 
                              type="number" step="0.5" 
                              value={row.clr} 
                              onChange={e => updateRow("sources", row.id, "clr", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="px-3 py-2 text-right font-medium text-slate-600 bg-slate-50/50">
                            {calced.mass.toFixed(1)}
                          </td>
                          <td className="p-2 w-20">
                            <Input 
                              type="number" step="0.01" 
                              placeholder={calced.snfPct > 0 ? calced.snfPct.toFixed(2) : "SNF%"}
                              value={row.snf || ""} 
                              onChange={e => updateRow("sources", row.id, "snf", e.target.value)}
                              className={`h-8 text-xs text-right px-2 font-semibold ${row.snf ? "border-indigo-400 bg-indigo-50/40 text-indigo-900" : ""}`}
                              title={row.snf ? "Direct SNF entered" : `Calculated using ${snfFormula === 'custom' ? 'Custom Formula' : snfFormulas[snfFormula as keyof typeof snfFormulas]?.name}`}
                            />
                          </td>
                          <td className="px-3 py-2 text-right font-semibold text-amber-700 bg-amber-50/20">
                            {calced.fatKg.toFixed(2)}
                          </td>
                          <td className="px-3 py-2 text-right font-semibold text-rose-700 bg-rose-50/20">
                            {calced.snfKg.toFixed(2)}
                          </td>
                          <td className="p-1 text-center">
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-7 w-7 text-slate-400 hover:text-red-500"
                              onClick={() => deleteRow("sources", row.id)}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                    {/* Totals Row */}
                    <tr className="bg-indigo-50/30 font-bold border-t-2 border-slate-200">
                      <td className="px-3 py-2.5">Combined / Total</td>
                      <td className="px-3 py-2.5 text-right text-indigo-900">{sourceLitersTotal.toFixed(0)} L</td>
                      <td className="px-3 py-2.5 text-right text-amber-900">{combinedFatPct.toFixed(3)}%</td>
                      <td className="px-3 py-2.5 text-right text-indigo-900">{combinedClr.toFixed(2)}</td>
                      <td className="px-3 py-2.5 text-right text-slate-700">{sourceMassTotal.toFixed(1)} kg</td>
                      <td className="px-3 py-2.5 text-right text-rose-900">{combinedSnfPct.toFixed(3)}%</td>
                      <td className="px-3 py-2.5 text-right text-amber-700 bg-amber-50/40">{sourceFatTotal.toFixed(2)} kg</td>
                      <td className="px-3 py-2.5 text-right text-rose-700 bg-rose-50/40">{sourceSnfTotal.toFixed(2)} kg</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Milk Separation Summary Panel */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm h-fit">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  ⚡ Milk Separation Summary (दूध पृथक्करण विवरण)
                </h3>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Milk Separated Liters (पृथक्कृत दूध - ली.)</Label>
                    <Input 
                      type="number" 
                      value={separation.separatedLiters}
                      onChange={e => {
                        const updated = { ...separation, separatedLiters: e.target.value };
                        setSeparation(updated);
                        saveDraft(sources, updated, variants, balances, overallDensity, selectedDate);
                      }}
                      className="h-8.5 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Separation Density (kg/L)</Label>
                    <Input 
                      type="number" step="0.001"
                      value={separation.density}
                      onChange={e => {
                        const updated = { ...separation, density: e.target.value };
                        setSeparation(updated);
                        saveDraft(sources, updated, variants, balances, overallDensity, selectedDate);
                      }}
                      className="h-8.5 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Cream Removed (kg)</Label>
                    <Input 
                      type="number" 
                      value={separation.creamRemovedKg}
                      onChange={e => {
                        const updated = { ...separation, creamRemovedKg: e.target.value };
                        setSeparation(updated);
                        saveDraft(sources, updated, variants, balances, overallDensity, selectedDate);
                      }}
                      className="h-8.5 text-xs mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Cream Fat %</Label>
                    <Input 
                      type="number" step="0.1"
                      value={separation.creamFatPct}
                      onChange={e => {
                        const updated = { ...separation, creamFatPct: e.target.value };
                        setSeparation(updated);
                        saveDraft(sources, updated, variants, balances, overallDensity, selectedDate);
                      }}
                      className="h-8.5 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Cream SNF %</Label>
                    <Input 
                      type="number" step="0.1"
                      value={separation.creamSnfPct}
                      onChange={e => {
                        const updated = { ...separation, creamSnfPct: e.target.value };
                        setSeparation(updated);
                        saveDraft(sources, updated, variants, balances, overallDensity, selectedDate);
                      }}
                      className="h-8.5 text-xs mt-1"
                    />
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 mt-5 space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Cream Vol (L):</span>
                      <span className="font-bold">{effectiveCreamLiters.toFixed(1)} L</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Cream Fat / SNF (kg):</span>
                      <span className="font-bold">{creamFatKg.toFixed(1)} / {creamSnfKg.toFixed(1)} kg</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-650 border-t pt-1 font-semibold text-indigo-700">
                      <span>Skimmed Vol / Mass:</span>
                      <span>{skimmedMilkLiters.toFixed(1)} L / {skimmedMilkMassKg.toFixed(1)} kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table 2: Variant (Products Dispatched) */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm xl:col-span-2">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  🔵 Table 2: Variant (Products Dispatched)
                </h3>
                <Button size="sm" onClick={() => addRow("variants")} variant="outline" className="h-7 text-[10px]">
                  <Plus className="w-3 h-3 mr-1" /> Add Product
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                      <th className="px-3 py-2 text-left w-36">Product / Variant</th>
                      <th className="px-3 py-2 text-right">Liters</th>
                      <th className="px-3 py-2 text-right">Fat %</th>
                      <th className="px-3 py-2 text-right">CLR</th>
                      <th className="px-3 py-2 text-right text-slate-500">Mass (kg)</th>
                      <th className="px-3 py-2 text-right text-slate-700">SNF %</th>
                      <th className="px-3 py-2 text-right text-slate-500">Fat kg</th>
                      <th className="px-3 py-2 text-right text-slate-500">SNF kg</th>
                      <th className="px-2 py-2 text-center w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {variants.map((row) => {
                      const calced = calcRowStats(row.liters, row.fat, row.clr, densityVal, row.snf);
                      return (
                        <tr key={row.id} className="hover:bg-slate-50/50">
                          <td className="p-2">
                            <Input 
                              value={row.name} 
                              onChange={e => updateRow("variants", row.id, "name", e.target.value)}
                              className="h-8 text-xs font-semibold px-2"
                            />
                          </td>
                          <td className="p-2 w-28">
                            <Input 
                              type="number" step="0.01" 
                              value={row.liters} 
                              onChange={e => updateRow("variants", row.id, "liters", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="p-2 w-20">
                            <Input 
                              type="number" step="0.1" 
                              value={row.fat} 
                              onChange={e => updateRow("variants", row.id, "fat", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="p-2 w-20">
                            <Input 
                              type="number" step="0.5" 
                              value={row.clr} 
                              onChange={e => updateRow("variants", row.id, "clr", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="px-3 py-2 text-right font-medium text-slate-600 bg-slate-50/50">
                            {calced.mass.toFixed(1)}
                          </td>
                          <td className="p-2 w-20">
                            <Input 
                              type="number" step="0.01" 
                              placeholder={calced.snfPct > 0 ? calced.snfPct.toFixed(2) : "SNF%"}
                              value={row.snf || ""} 
                              onChange={e => updateRow("variants", row.id, "snf", e.target.value)}
                              className={`h-8 text-xs text-right px-2 font-semibold ${row.snf ? "border-indigo-400 bg-indigo-50/40 text-indigo-900" : ""}`}
                              title={row.snf ? "Direct SNF entered" : `Calculated using ${snfFormula === 'custom' ? 'Custom Formula' : snfFormulas[snfFormula as keyof typeof snfFormulas]?.name}`}
                            />
                          </td>
                          <td className="px-3 py-2 text-right font-semibold text-amber-700 bg-amber-50/20">
                            {calced.fatKg.toFixed(2)}
                          </td>
                          <td className="px-3 py-2 text-right font-semibold text-rose-700 bg-rose-50/20">
                            {calced.snfKg.toFixed(2)}
                          </td>
                          <td className="p-1 text-center">
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-7 w-7 text-slate-400 hover:text-red-500"
                              onClick={() => deleteRow("variants", row.id)}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                    {/* Totals Row */}
                    <tr className="bg-blue-50/30 font-bold border-t-2 border-slate-200">
                      <td className="px-3 py-2.5">Total Dispatched Products</td>
                      <td className="px-3 py-2.5 text-right text-blue-900">{variantLitersTotal.toFixed(1)} L</td>
                      <td className="px-3 py-2.5 text-right text-slate-500">-</td>
                      <td className="px-3 py-2.5 text-right text-slate-500">-</td>
                      <td className="px-3 py-2.5 text-right text-slate-700">{variantMassTotal.toFixed(1)} kg</td>
                      <td className="px-3 py-2.5 text-right text-slate-500">-</td>
                      <td className="px-3 py-2.5 text-right text-amber-700 bg-amber-50/40">{variantFatTotal.toFixed(2)} kg</td>
                      <td className="px-3 py-2.5 text-right text-rose-700 bg-rose-50/40">{variantSnfTotal.toFixed(2)} kg</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Balance (Remaining Stock) */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm xl:col-span-2">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  🟡 Table 3: Balance (Remaining Stock / क्लोजिंग स्टॉक)
                </h3>
                <Button size="sm" onClick={() => addRow("balances")} variant="outline" className="h-7 text-[10px]">
                  <Plus className="w-3 h-3 mr-1" /> Add Stock
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                      <th className="px-3 py-2 text-left w-36">Stock Item</th>
                      <th className="px-3 py-2 text-right">Liters</th>
                      <th className="px-3 py-2 text-right">Fat %</th>
                      <th className="px-3 py-2 text-right">CLR</th>
                      <th className="px-3 py-2 text-right text-slate-500">Mass (kg)</th>
                      <th className="px-3 py-2 text-right text-slate-700">SNF %</th>
                      <th className="px-3 py-2 text-right text-slate-500">Fat kg</th>
                      <th className="px-3 py-2 text-right text-slate-500">SNF kg</th>
                      <th className="px-2 py-2 text-center w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {balances.map((row) => {
                      const calced = calcRowStats(row.liters, row.fat, row.clr, densityVal, row.snf);
                      return (
                        <tr key={row.id} className="hover:bg-slate-50/50">
                          <td className="p-2">
                            <Input 
                              value={row.name} 
                              onChange={e => updateRow("balances", row.id, "name", e.target.value)}
                              className="h-8 text-xs font-semibold px-2"
                            />
                          </td>
                          <td className="p-2 w-28">
                            <Input 
                              type="number" step="0.01" 
                              value={row.liters} 
                              onChange={e => updateRow("balances", row.id, "liters", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="p-2 w-20">
                            <Input 
                              type="number" step="0.1" 
                              value={row.fat} 
                              onChange={e => updateRow("balances", row.id, "fat", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="p-2 w-20">
                            <Input 
                              type="number" step="0.5" 
                              value={row.clr} 
                              onChange={e => updateRow("balances", row.id, "clr", e.target.value)}
                              className="h-8 text-xs text-right px-2"
                            />
                          </td>
                          <td className="px-3 py-2 text-right font-medium text-slate-600 bg-slate-50/50">
                            {calced.mass.toFixed(1)}
                          </td>
                          <td className="p-2 w-20">
                            <Input 
                              type="number" step="0.01" 
                              placeholder={calced.snfPct > 0 ? calced.snfPct.toFixed(2) : "SNF%"}
                              value={row.snf || ""} 
                              onChange={e => updateRow("balances", row.id, "snf", e.target.value)}
                              className={`h-8 text-xs text-right px-2 font-semibold ${row.snf ? "border-indigo-400 bg-indigo-50/40 text-indigo-900" : ""}`}
                              title={row.snf ? "Direct SNF entered" : `Calculated using ${snfFormula === 'custom' ? 'Custom Formula' : snfFormulas[snfFormula as keyof typeof snfFormulas]?.name}`}
                            />
                          </td>
                          <td className="px-3 py-2 text-right font-semibold text-amber-700 bg-amber-50/20">
                            {calced.fatKg.toFixed(2)}
                          </td>
                          <td className="px-3 py-2 text-right font-semibold text-rose-700 bg-rose-50/20">
                            {calced.snfKg.toFixed(2)}
                          </td>
                          <td className="p-1 text-center">
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-7 w-7 text-slate-400 hover:text-red-500"
                              onClick={() => deleteRow("balances", row.id)}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                    {/* Totals Row */}
                    <tr className="bg-yellow-50/20 font-bold border-t-2 border-slate-200">
                      <td className="px-3 py-2.5">Total Closing Stock</td>
                      <td className="px-3 py-2.5 text-right text-yellow-900">{balanceLitersTotal.toFixed(1)} L</td>
                      <td className="px-3 py-2.5 text-right text-slate-500">-</td>
                      <td className="px-3 py-2.5 text-right text-slate-500">-</td>
                      <td className="px-3 py-2.5 text-right text-slate-700">{balanceMassTotal.toFixed(1)} kg</td>
                      <td className="px-3 py-2.5 text-right text-slate-500">-</td>
                      <td className="px-3 py-2.5 text-right text-amber-700 bg-amber-50/40">{balanceFatTotal.toFixed(2)} kg</td>
                      <td className="px-3 py-2.5 text-right text-rose-700 bg-rose-50/40">{balanceSnfTotal.toFixed(2)} kg</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Plant Reconciliation Summary Widget */}
          <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              📊 Plant Reconciliation Dashboard (समाधान डैशबोर्ड)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-355">Fat Loss (फैट हानि)</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${fatGrade.color}`}>
                    {fatGrade.label}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-bold text-amber-400">{reconciliationFat.toFixed(3)} kg</span>
                  <span className="text-xs text-slate-400">({reconciliationFatPct.toFixed(4)}%)</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-400 rounded-full" 
                    style={{ width: `${Math.min(Math.abs(reconciliationFatPct) / 1.0 * 100, 100)}%` }} 
                  />
                </div>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-355">SNF Loss (एस.एन.एफ. हानि)</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${snfGrade.color}`}>
                    {snfGrade.label}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-bold text-rose-400">{reconciliationSnf.toFixed(3)} kg</span>
                  <span className="text-xs text-slate-400">({reconciliationSnfPct.toFixed(4)}%)</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-rose-400 rounded-full" 
                    style={{ width: `${Math.min(Math.abs(reconciliationSnfPct) / 1.5 * 100, 100)}%` }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REPORT & A4 PRINT VIEW */}
      {activeTab === "report" && (
        <div className="space-y-4">
          <div className="flex gap-2 print:hidden justify-end bg-slate-50 p-3 rounded-lg border border-slate-200">
            <Button size="sm" onClick={handlePrint} className="text-xs bg-slate-800 text-white">
              <Printer className="w-3.5 h-3.5 mr-1.5" /> Print A4 (प्रिंट करें)
            </Button>
            <Button size="sm" onClick={handleExportPDF} disabled={isExporting} className="text-xs bg-indigo-600 hover:bg-indigo-700">
              <Download className="w-3.5 h-3.5 mr-1.5" /> {isExporting ? "Generating..." : "Download PDF (रिपोर्ट डाउनलोड)"}
            </Button>
          </div>

          {/* Printable Container */}
          <div 
            ref={reportRef} 
            id="print-area"
            className="bg-white p-8 rounded-xl border border-slate-350 shadow-sm mx-auto print:border-none print:shadow-none print:p-0 print:m-0"
            style={{ width: "210mm", minHeight: "297mm", boxSizing: "border-box" }}
          >
            {/* Report Header */}
            <div className="border-b-2 border-indigo-600 pb-4 mb-4 flex justify-between items-end">
              <div>
                <h1 className="text-xl font-black text-indigo-950 uppercase tracking-tight">Dairy Plant Mass Balance Report</h1>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Automated Yield, Fat & SNF Mass Balancing Sheet</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  A4 Print Format
                </span>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold">Date: {selectedDate}</p>
              </div>
            </div>

            {/* Active SNF Standard Banner in Report */}
            <div className="text-[10px] text-indigo-900 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-md mb-4 flex justify-between items-center">
              <span>
                <strong>SNF Standard Formula:</strong>{" "}
                {snfFormula === "custom"
                  ? `Custom Formula: SNF% = (CLR/4) + (${customFatMultiplier}*Fat) + ${customConstant}`
                  : `${snfFormulas[snfFormula as keyof typeof snfFormulas]?.name || "New Formula"} (${snfFormulas[snfFormula as keyof typeof snfFormulas]?.formulaText || ""})`}
              </span>
              <span className="text-[9px] text-indigo-700 font-semibold uppercase tracking-wider">High Accuracy Mode</span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Total Intake</span>
                <span className="text-sm font-extrabold text-indigo-950">{sourceLitersTotal.toFixed(0)} L</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Combined Fat %</span>
                <span className="text-sm font-extrabold text-indigo-950">{combinedFatPct.toFixed(3)}%</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Separated Milk</span>
                <span className="text-sm font-extrabold text-indigo-950">{sepLtr.toFixed(0)} L</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Cream Output</span>
                <span className="text-sm font-extrabold text-indigo-950">{effectiveCreamLiters.toFixed(0)} L</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Table 1: Source */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 border-l-3 border-emerald-500 pl-2">
                  Table 1: Source (Input Milk Tankers)
                </h3>
                <table className="w-full text-[10px] border-collapse border border-slate-250">
                  <thead>
                    <tr className="bg-slate-100 font-bold border-b border-slate-250 text-slate-700">
                      <th className="border border-slate-250 px-2 py-1.5 text-left">Source Name</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Liters</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Fat %</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">CLR</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Mass (kg)</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">SNF %</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Fat kg</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">SNF kg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sourcesCalced.map(s => (
                      <tr key={s.id} className="border-b border-slate-200">
                        <td className="border border-slate-250 px-2 py-1.5 font-medium">{s.name}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{s.ltr.toFixed(0)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{s.f.toFixed(1)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{s.c.toFixed(1)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right text-slate-600">{s.mass.toFixed(1)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right text-slate-600">{s.snfPct.toFixed(3)}%</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right font-semibold text-slate-800">{s.fatKg.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right font-semibold text-slate-800">{s.snfKg.toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50 font-bold border-t-2 border-slate-350 text-slate-800">
                      <td className="border border-slate-250 px-2 py-1.5">Combined / Total</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{sourceLitersTotal.toFixed(0)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{combinedFatPct.toFixed(3)}%</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{combinedClr.toFixed(2)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{sourceMassTotal.toFixed(1)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{combinedSnfPct.toFixed(3)}%</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{sourceFatTotal.toFixed(2)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{sourceSnfTotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Separation & Cream Removal */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 border-l-3 border-indigo-500 pl-2">
                    Milk Separation Summary
                  </h3>
                  <table className="w-full text-[10px] border-collapse border border-slate-250">
                    <tbody>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Separated Milk Volume</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-bold">{sepLtr.toFixed(0)} L</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Separated Milk Kg</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-semibold">{milkSeparatedKg.toFixed(1)} kg</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Cream Removed Kg</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-bold">{creamKg.toFixed(1)} kg</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Effective Cream Liters</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-semibold">{effectiveCreamLiters.toFixed(1)} L</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 border-l-3 border-indigo-500 pl-2">
                    Cream Details & Skimmed Milk
                  </h3>
                  <table className="w-full text-[10px] border-collapse border border-slate-250">
                    <tbody>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Cream Fat / SNF %</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-bold">{creamFatPct}% / {creamSnfPct}%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Cream Fat / SNF Kg</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-semibold">{creamFatKg.toFixed(2)} / {creamSnfKg.toFixed(2)} kg</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Skimmed Milk Volume</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-bold">{skimmedMilkLiters.toFixed(1)} L</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-250 px-2.5 py-1.5 bg-slate-50 font-medium">Skimmed Milk Mass Kg</td>
                        <td className="border border-slate-250 px-2.5 py-1.5 text-right font-semibold">{skimmedMilkMassKg.toFixed(1)} kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: Variants */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 border-l-3 border-blue-500 pl-2">
                  Table 2: Variant (Products Dispatched)
                </h3>
                <table className="w-full text-[10px] border-collapse border border-slate-250">
                  <thead>
                    <tr className="bg-slate-100 font-bold border-b border-slate-250 text-slate-700">
                      <th className="border border-slate-250 px-2 py-1.5 text-left">Variant Name</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Liters</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Fat %</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">CLR</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Mass (kg)</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">SNF %</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Fat kg</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">SNF kg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variantsCalced.map(v => (
                      <tr key={v.id} className="border-b border-slate-200">
                        <td className="border border-slate-250 px-2 py-1.5 font-medium">{v.name}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{v.ltr.toFixed(1)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{v.f.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{v.c.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right text-slate-600">{v.mass.toFixed(1)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right text-slate-600">{v.snfPct.toFixed(3)}%</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right font-semibold text-slate-800">{v.fatKg.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right font-semibold text-slate-800">{v.snfKg.toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50 font-bold border-t-2 border-slate-350 text-slate-800">
                      <td className="border border-slate-250 px-2 py-1.5">Total Variants</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{variantLitersTotal.toFixed(1)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">-</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">-</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{variantMassTotal.toFixed(1)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">-</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{variantFatTotal.toFixed(2)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{variantSnfTotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 3: Balances */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2 border-l-3 border-yellow-500 pl-2">
                  Table 3: Balance (Remaining Stock)
                </h3>
                <table className="w-full text-[10px] border-collapse border border-slate-250">
                  <thead>
                    <tr className="bg-slate-100 font-bold border-b border-slate-250 text-slate-700">
                      <th className="border border-slate-250 px-2 py-1.5 text-left">Stock Item</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Liters</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Fat %</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">CLR</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Mass (kg)</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">SNF %</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">Fat kg</th>
                      <th className="border border-slate-250 px-2 py-1.5 text-right">SNF kg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {balancesCalced.map(b => (
                      <tr key={b.id} className="border-b border-slate-200">
                        <td className="border border-slate-250 px-2 py-1.5 font-medium">{b.name}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{b.ltr.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{b.f.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right">{b.c.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right text-slate-600">{b.mass.toFixed(1)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right text-slate-600">{b.snfPct.toFixed(3)}%</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right font-semibold text-slate-800">{b.fatKg.toFixed(2)}</td>
                        <td className="border border-slate-250 px-2 py-1.5 text-right font-semibold text-slate-800">{b.snfKg.toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50 font-bold border-t-2 border-slate-350 text-slate-800">
                      <td className="border border-slate-250 px-2 py-1.5">Total Balances</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{balanceLitersTotal.toFixed(2)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">-</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">-</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{balanceMassTotal.toFixed(1)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">-</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{balanceFatTotal.toFixed(2)}</td>
                      <td className="border border-slate-250 px-2 py-1.5 text-right">{balanceSnfTotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Plant Reconciliation section */}
              <div className="border border-slate-355 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-3 py-2 font-bold text-[11px] text-slate-800 uppercase tracking-wider border-b border-slate-355">
                  Plant Mass Reconciliation (प्लांट समाधान)
                </div>
                <div className="grid grid-cols-2 divide-x divide-slate-355">
                  <div className="p-3 space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-semibold text-slate-650">Reconciliation - Fat (Bought - Dispatched - Balance)</span>
                      <span className="font-black text-slate-900">{reconciliationFat.toFixed(3)} kg</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-medium">Fat Loss Percentage:</span>
                      <span className="font-bold text-slate-800">{reconciliationFatPct.toFixed(4)}%</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-medium">Fat Reconciliation Status:</span>
                      <span className="font-bold text-indigo-700">{fatGrade.label}</span>
                    </div>
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-semibold text-slate-650">Reconciliation - SNF (Bought - Dispatched - Balance)</span>
                      <span className="font-black text-slate-900">{reconciliationSnf.toFixed(3)} kg</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-medium">SNF Loss Percentage:</span>
                      <span className="font-bold text-slate-800">{reconciliationSnfPct.toFixed(4)}%</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-medium">SNF Reconciliation Status:</span>
                      <span className="font-bold text-indigo-700">{snfGrade.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Footer */}
            <div className="mt-8 pt-4 border-t border-slate-300 text-center text-[9px] text-slate-400 font-semibold uppercase tracking-wider">
              POWERED BY DAIRY HUB ERP SYSTEM
            </div>
          </div>
        </div>
      )}

      {/* ── MONTHLY SUMMARY VIEW ── */}
      {activeTab === "monthly" && (() => {
        const mData = getMonthlyData(selectedYear, selectedMonth);
        return (
          <div className="space-y-6">
            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 print:hidden">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Source Liters</span>
                <span className="text-xl font-extrabold text-indigo-950">
                  {mData.totals.srcLiters.toLocaleString("en-IN")} L
                </span>
                <span className="text-[10px] text-slate-500">Total milk bought this month</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-emerald-600">Total Dispatched Liters</span>
                <span className="text-xl font-extrabold text-emerald-850">
                  {mData.totals.varLiters.toLocaleString("en-IN")} L
                </span>
                <span className="text-[10px] text-slate-500">Total processed products dispatched</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-amber-600">Total Cream Removed</span>
                <span className="text-xl font-extrabold text-amber-800">
                  {mData.totals.creamKg.toLocaleString("en-IN")} kg
                </span>
                <span className="text-[10px] text-slate-500">Total separated cream mass</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-indigo-600">Active Records</span>
                <span className="text-xl font-extrabold text-indigo-800">
                  {mData.dailyList.filter(d => d.hasData).length} / {mData.dailyList.length} Days
                </span>
                <span className="text-[10px] text-slate-500">Reporting complete days</span>
              </div>
            </div>

            {/* Excel spreadsheet container */}
            <div 
              ref={monthlyReportRef}
              id="print-area"
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-hidden print:border-none print:shadow-none print:p-0 print:m-0 print:w-[297mm] print:h-[210mm]"
            >
              {/* Report Header for printing */}
              <div className="hidden print:flex justify-between items-end border-b-2 border-slate-800 pb-3 mb-4">
                <div>
                  <h1 className="text-base font-black text-slate-900 uppercase">Dairy Plant Monthly Mass Balance Summary</h1>
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
                      <th className="border border-slate-200 px-2 py-2 text-right">Src Liters</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Src Fat kg</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Src SNF kg</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Disp Liters</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Disp Fat kg</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Disp SNF kg</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Bal Liters</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Cream kg</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">Fat Loss %</th>
                      <th className="border border-slate-200 px-2 py-2 text-right">SNF Loss %</th>
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
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right font-medium">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-right font-medium">—</td>
                            <td className="border border-slate-200 px-2 py-1.5 text-center print:hidden">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-6 px-2 text-[10px]"
                                onClick={() => {
                                  setSelectedDate(row.date);
                                  setActiveTab("edit");
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
                          <td className="border border-slate-200 px-2 py-1.5 text-right font-semibold">{row.srcLiters?.toFixed(0)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-slate-600">{row.srcFatKg?.toFixed(1)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-slate-600">{row.srcSnfKg?.toFixed(1)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right font-semibold text-emerald-700">{row.varLiters?.toFixed(0)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-slate-600">{row.varFatKg?.toFixed(1)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-slate-600">{row.varSnfKg?.toFixed(1)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-slate-500">{row.balLiters?.toFixed(0)}</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-right text-amber-700 font-medium">{row.creamKg?.toFixed(0)}</td>
                          <td className={`border border-slate-200 px-2 py-1.5 text-right font-bold ${Math.abs(row.fatLossPct || 0) > 0.5 ? "text-rose-600" : "text-emerald-600"}`}>
                            {row.fatLossPct?.toFixed(2)}%
                          </td>
                          <td className={`border border-slate-200 px-2 py-1.5 text-right font-bold ${Math.abs(row.snfLossPct || 0) > 0.7 ? "text-rose-600" : "text-emerald-600"}`}>
                            {row.snfLossPct?.toFixed(2)}%
                          </td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center print:hidden">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-6 px-2 text-[10px] text-indigo-600 hover:text-indigo-850"
                              onClick={() => {
                                setSelectedDate(row.date);
                                setActiveTab("edit");
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
                      <td className="border border-slate-200 px-2 py-2 text-right">{mData.totals.srcLiters.toFixed(0)} L</td>
                      <td className="border border-slate-200 px-2 py-2 text-right">{mData.totals.srcFatKg.toFixed(1)} kg</td>
                      <td className="border border-slate-200 px-2 py-2 text-right">{mData.totals.srcSnfKg.toFixed(1)} kg</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-emerald-800">{mData.totals.varLiters.toFixed(0)} L</td>
                      <td className="border border-slate-200 px-2 py-2 text-right">{mData.totals.varFatKg.toFixed(1)} kg</td>
                      <td className="border border-slate-200 px-2 py-2 text-right">{mData.totals.varSnfKg.toFixed(1)} kg</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-slate-650">{mData.totals.balLiters.toFixed(0)} L</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-amber-800">{mData.totals.creamKg.toFixed(0)} kg</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-slate-400">—</td>
                      <td className="border border-slate-200 px-2 py-2 text-right text-slate-400">—</td>
                      <td className="border border-slate-200 px-2 py-2 text-center print:hidden"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Print footer for monthly summary */}
              <div className="hidden print:block mt-6 pt-3 border-t border-slate-300 text-center text-[8px] text-slate-400 font-semibold uppercase tracking-wider">
                POWERED BY DAIRY HUB ERP SYSTEM
              </div>
            </div>
          </div>
        );
      })()}

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
          }
          /* Hide tabs, header and buttons when printing */
          .print\\:hidden {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
