"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  FileSpreadsheet, Download, Printer, Plus, Trash2, Loader2,
  CheckCircle2, AlertTriangle, Package, BarChart3, RefreshCw, FileText,
  Sparkles, Calculator, SlidersHorizontal, Milk, Target, Layers,
  Building2, Calendar, User, ShieldCheck, Scale, Droplets, Info, ChevronRight,
  Lock, Unlock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { savePdfFile } from "@/lib/mobile-download";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

// Running Packaging Report Row Data Structure
export interface PackagingRow {
  id: string;
  productName: string;
  packSizeLiters: number;      // e.g., 0.5 (500ml), 1.0 (1L), 0.2 (200ml)
  pouchesPerCrate: number;     // e.g., 24
  filmGramsPerPouch: number;   // e.g., 2.5 grams film weight
  demandQty: number;           // Demand Required Pouches (Target)
  machineQty: number;          // Gross Machine Counter Pouches
  wastageQty: number;          // Machine Wastage Pouches (film error / leakage)
  packedQty: number;           // Good Packed Pouches
}

export function ProductionReportsCalc() {
  const { toast } = useToast();
  const printAreaRef = useRef<HTMLDivElement>(null);

  // Metadata State
  const [reportType, setReportType] = useState<"running-packaging" | "silo-dispatch" | "custom-excel">("running-packaging");
  const [companyName, setCompanyName] = useState<string>("DAIRY HUB PROCESSING PLANT");
  const [plantLocation, setPlantLocation] = useState<string>("Pouch Packing Section - Line #1");
  const [reportDate, setReportDate] = useState<string>(() => new Date().toISOString().split("T")[0]);
  const [shiftName, setShiftName] = useState<string>("Shift A (Morning 06:00 - 14:00)");
  const [operatorName, setOperatorName] = useState<string>("Amit Kumar");
  const [qcOfficerName, setQcOfficerName] = useState<string>("QC Incharge Sign");
  const [supervisorName, setSupervisorName] = useState<string>("Rajesh Sharma (Shift Supervisor)");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  // Initial Sample Packaging Rows
  const [packagingRows, setPackagingRows] = useState<PackagingRow[]>([
    {
      id: "row-1",
      productName: "Toned Milk Pouch (500ml)",
      packSizeLiters: 0.5,
      pouchesPerCrate: 24,
      filmGramsPerPouch: 2.5,
      demandQty: 10000,
      machineQty: 10250,
      wastageQty: 150,
      packedQty: 10100
    },
    {
      id: "row-2",
      productName: "Full Cream Milk Pouch (500ml)",
      packSizeLiters: 0.5,
      pouchesPerCrate: 24,
      filmGramsPerPouch: 2.6,
      demandQty: 8000,
      machineQty: 8180,
      wastageQty: 110,
      packedQty: 8070
    },
    {
      id: "row-3",
      productName: "Double Toned Milk (200ml)",
      packSizeLiters: 0.2,
      pouchesPerCrate: 50,
      filmGramsPerPouch: 1.2,
      demandQty: 5000,
      machineQty: 5090,
      wastageQty: 60,
      packedQty: 5030
    }
  ]);

  // Persistent localStorage Loader on Mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dairyhub_packaging_report_template");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.companyName) setCompanyName(parsed.companyName);
        if (parsed.plantLocation) setPlantLocation(parsed.plantLocation);
        if (parsed.operatorName) setOperatorName(parsed.operatorName);
        if (parsed.qcOfficerName) setQcOfficerName(parsed.qcOfficerName);
        if (parsed.supervisorName) setSupervisorName(parsed.supervisorName);
        if (Array.isArray(parsed.packagingRows) && parsed.packagingRows.length > 0) {
          setPackagingRows(parsed.packagingRows);
        }
        if (typeof parsed.isLocked === "boolean") {
          setIsLocked(parsed.isLocked);
        }
      }
    } catch (err) {
      console.error("Failed to restore saved template", err);
    }
  }, []);

  // Persistent localStorage Auto-Saver
  useEffect(() => {
    try {
      const dataToSave = {
        companyName,
        plantLocation,
        operatorName,
        qcOfficerName,
        supervisorName,
        packagingRows,
        isLocked,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem("dairyhub_packaging_report_template", JSON.stringify(dataToSave));
    } catch (err) {
      console.error("Failed to auto-save template", err);
    }
  }, [companyName, plantLocation, operatorName, qcOfficerName, supervisorName, packagingRows, isLocked]);

  // Lock / Unlock Toggle Handler
  const handleToggleLock = () => {
    const nextLockState = !isLocked;
    setIsLocked(nextLockState);
    toast({
      title: nextLockState ? "🔒 Template Locked & Saved" : "🔓 Template Unlocked for Editing",
      description: nextLockState
        ? "Product specifications, pack sizes & crate configs are now locked and saved safely in local storage."
        : "Template unlocked. You can now edit product specifications, pack sizes, or add/remove rows.",
    });
  };

  // Handlers for Row Editing
  const handleUpdateRow = (id: string, field: keyof PackagingRow, value: any) => {
    setPackagingRows(prev =>
      prev.map(row => {
        if (row.id === id) {
          const updated = { ...row, [field]: value };
          return updated;
        }
        return row;
      })
    );
  };

  const handleAddRow = () => {
    const newRow: PackagingRow = {
      id: `row-${Date.now()}`,
      productName: "Standard Milk (1000ml)",
      packSizeLiters: 1.0,
      pouchesPerCrate: 12,
      filmGramsPerPouch: 4.8,
      demandQty: 3000,
      machineQty: 3050,
      wastageQty: 30,
      packedQty: 3020
    };
    setPackagingRows(prev => [...prev, newRow]);
    toast({
      title: "Row Added",
      description: "New product packing line row added to report.",
    });
  };

  const handleDeleteRow = (id: string) => {
    if (packagingRows.length <= 1) {
      toast({
        title: "Cannot Delete",
        description: "Report must contain at least 1 product row.",
        variant: "destructive"
      });
      return;
    }
    setPackagingRows(prev => prev.filter(r => r.id !== id));
  };

  const handleResetDefaults = () => {
    setPackagingRows([
      {
        id: "row-1",
        productName: "Toned Milk Pouch (500ml)",
        packSizeLiters: 0.5,
        pouchesPerCrate: 24,
        filmGramsPerPouch: 2.5,
        demandQty: 10000,
        machineQty: 10250,
        wastageQty: 150,
        packedQty: 10100
      },
      {
        id: "row-2",
        productName: "Full Cream Milk Pouch (500ml)",
        packSizeLiters: 0.5,
        pouchesPerCrate: 24,
        filmGramsPerPouch: 2.6,
        demandQty: 8000,
        machineQty: 8180,
        wastageQty: 110,
        packedQty: 8070
      }
    ]);
    toast({
      title: "Report Reset",
      description: "Restored sample running packaging report values.",
    });
  };

  // ZERO-TOLERANCE MATHEMATICAL RECONCILIATION COMPUTATIONS
  const calculatedData = useMemo(() => {
    let totalDemand = 0;
    let totalMachine = 0;
    let totalWastage = 0;
    let totalPacked = 0;
    let totalExtra = 0;
    let totalUnaccountedLoss = 0;
    let totalVolumePackedLiters = 0;
    let totalMilkWastedLiters = 0;
    let totalFilmWastedKg = 0;
    let totalCrates = 0;

    const rowsWithCalcs = packagingRows.map(row => {
      const demand = Number(row.demandQty) || 0;
      const machine = Number(row.machineQty) || 0;
      const wastage = Number(row.wastageQty) || 0;
      const packed = Number(row.packedQty) || 0;
      const packSize = Number(row.packSizeLiters) || 0.5;
      const perCrate = Number(row.pouchesPerCrate) || 24;
      const filmWeightGrams = Number(row.filmGramsPerPouch) || 2.5;

      // 1. Extra / Surplus Pouches (vs Demand)
      const extraPouches = packed - demand;

      // 2. Expected Good Output = Machine Output - Machine Wastage
      const expectedGoodOutput = machine - wastage;

      // 3. Zero Tolerance Unaccounted Loss = Machine Output - (Packed + Wastage)
      const unaccountedLoss = machine - (packed + wastage);

      // 4. Wastage % = (Wastage / Machine Output) * 100
      const wastagePct = machine > 0 ? (wastage / machine) * 100 : 0;

      // 5. Efficiency % = (Packed / Demand) * 100
      const efficiencyPct = demand > 0 ? (packed / demand) * 100 : 0;

      // 6. Crates Count
      const cratesFull = Math.floor(packed / perCrate);
      const loosePouches = packed % perCrate;

      // 7. Volume & Weight conversions
      const volumePackedLiters = packed * packSize;
      const milkWastedLiters = wastage * packSize;
      const filmWastedKg = (wastage * filmWeightGrams) / 1000;

      // Accumulate Totals
      totalDemand += demand;
      totalMachine += machine;
      totalWastage += wastage;
      totalPacked += packed;
      totalExtra += extraPouches;
      totalUnaccountedLoss += unaccountedLoss;
      totalVolumePackedLiters += volumePackedLiters;
      totalMilkWastedLiters += milkWastedLiters;
      totalFilmWastedKg += filmWastedKg;
      totalCrates += cratesFull;

      return {
        ...row,
        extraPouches,
        expectedGoodOutput,
        unaccountedLoss,
        wastagePct,
        efficiencyPct,
        cratesFull,
        loosePouches,
        volumePackedLiters,
        milkWastedLiters,
        filmWastedKg
      };
    });

    const overallWastagePct = totalMachine > 0 ? (totalWastage / totalMachine) * 100 : 0;
    const overallEfficiencyPct = totalDemand > 0 ? (totalPacked / totalDemand) * 100 : 0;

    // Reconciliation Balance Status
    let balanceStatus: "balanced" | "surplus" | "discrepancy" = "balanced";
    if (totalUnaccountedLoss !== 0) {
      balanceStatus = "discrepancy";
    } else if (totalExtra > 0) {
      balanceStatus = "surplus";
    }

    return {
      rows: rowsWithCalcs,
      totalDemand,
      totalMachine,
      totalWastage,
      totalPacked,
      totalExtra,
      totalUnaccountedLoss,
      totalVolumePackedLiters,
      totalMilkWastedLiters,
      totalFilmWastedKg,
      totalCrates,
      overallWastagePct,
      overallEfficiencyPct,
      balanceStatus
    };
  }, [packagingRows]);

  // Actions
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (!printAreaRef.current) return;
    setIsDownloading(true);
    toast({
      title: "Generating A4 Report PDF...",
      description: "Rendering high precision packaging & reconciliation report.",
    });

    try {
      printAreaRef.current.classList.add("is-exporting-pdf");
      const canvas = await html2canvas(printAreaRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: printAreaRef.current.scrollWidth || 1000,
        scrollX: 0,
        scrollY: 0,
      });
      printAreaRef.current.classList.remove("is-exporting-pdf");

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      await savePdfFile(pdf, `Running_Packaging_Report_${reportDate}_${Date.now()}.pdf`);

      toast({
        title: "PDF Downloaded Successfully!",
        description: "Your A4 Packaging & Reconciliation Report is ready to share.",
      });
    } catch (e) {
      if (printAreaRef.current) {
        printAreaRef.current.classList.remove("is-exporting-pdf");
      }
      console.error(e);
      toast({
        title: "PDF Export Fallback",
        description: "Opening print dialog for PDF saving.",
        variant: "destructive"
      });
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FileSpreadsheet className="h-6 w-6 text-emerald-600" />
              Excel Production Reports & Reconciliation
            </h2>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">
              Zero-Tolerance Math & A4 Export
            </Badge>
            {isLocked && (
              <Badge className="bg-amber-600 text-white border-amber-700 animate-pulse flex items-center gap-1">
                <Lock className="h-3 w-3" /> Template Locked & Saved
              </Badge>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Automated Excel-based plant reports with zero-tolerance reconciliation math for pouch packing, losses & crates.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={isLocked ? "destructive" : "outline"}
            size="sm"
            onClick={handleToggleLock}
            className={cn(
              "h-9 text-xs font-bold transition-all shadow-sm",
              isLocked
                ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
                : "border-emerald-600 text-emerald-800 hover:bg-emerald-50"
            )}
          >
            {isLocked ? (
              <>
                <Lock className="h-3.5 w-3.5 mr-1" />
                🔒 Template Locked (Click to Edit)
              </>
            ) : (
              <>
                <Unlock className="h-3.5 w-3.5 mr-1" />
                🔓 Lock Template & Save
              </>
            )}
          </Button>

          <Button variant="outline" size="sm" onClick={handleResetDefaults} disabled={isLocked} className="h-9 text-xs border-slate-300 disabled:opacity-50">
            <RefreshCw className="h-3.5 w-3.5 mr-1" /> Reset Data
          </Button>

          <Button variant="outline" size="sm" onClick={handlePrint} className="h-9 text-xs border-slate-300">
            <Printer className="h-3.5 w-3.5 mr-1" /> Print A4 Sheet
          </Button>

          <Button
            size="sm"
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="h-9 text-xs bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm"
          >
            {isDownloading ? (
              <Loader2 className="h-3.5 w-3.5 mr-1 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5 mr-1" />
            )}
            Download A4 PDF
          </Button>
        </div>
      </div>

      {/* REPORT TYPE SELECTOR & METADATA BAR */}
      <Card className="border-emerald-200 bg-emerald-50/40 print:hidden">
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs font-bold text-emerald-950 block">Select Report Template:</span>
                <span className="text-[11px] text-emerald-700">Choose automated excel format with zero tolerance math</span>
              </div>
            </div>

            <Select value={reportType} onValueChange={(val: any) => setReportType(val)}>
              <SelectTrigger className="w-full md:w-[320px] bg-white font-semibold text-xs border-emerald-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="running-packaging">
                  📦 Running Packaging & Pouch Reconciliation Report
                </SelectItem>
                <SelectItem value="silo-dispatch">
                  🥛 Raw Milk Intake & Dispatch Balance Log
                </SelectItem>
                <SelectItem value="custom-excel">
                  📊 Custom Multi-Column Excel Sheet
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* EDITABLE REPORT METADATA */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-emerald-200/80">
            <div>
              <Label className="text-[10px] font-bold text-emerald-900">Company Name</Label>
              <Input
                type="text"
                value={companyName}
                disabled={isLocked}
                onChange={e => setCompanyName(e.target.value)}
                className="h-8 text-xs bg-white border-emerald-300 font-medium disabled:bg-slate-100 disabled:text-slate-900 disabled:font-bold disabled:opacity-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <Label className="text-[10px] font-bold text-emerald-900">Plant / Section / Line</Label>
              <Input
                type="text"
                value={plantLocation}
                disabled={isLocked}
                onChange={e => setPlantLocation(e.target.value)}
                className="h-8 text-xs bg-white border-emerald-300 font-medium disabled:bg-slate-100 disabled:text-slate-900 disabled:font-bold disabled:opacity-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <Label className="text-[10px] font-bold text-emerald-900">Report Date</Label>
              <Input
                type="date"
                value={reportDate}
                onChange={e => setReportDate(e.target.value)}
                className="h-8 text-xs bg-white border-emerald-300 font-mono font-bold"
              />
            </div>
            <div>
              <Label className="text-[10px] font-bold text-emerald-900">Shift Name</Label>
              <Input
                type="text"
                value={shiftName}
                onChange={e => setShiftName(e.target.value)}
                className="h-8 text-xs bg-white border-emerald-300 font-medium"
              />
            </div>

            {/* EDITABLE OFFICER NAMES */}
            <div>
              <Label className="text-[10px] font-bold text-emerald-900">Shift Packing Operator</Label>
              <Input
                type="text"
                value={operatorName}
                onChange={e => setOperatorName(e.target.value)}
                className="h-8 text-xs bg-white border-emerald-300 font-semibold text-slate-800"
                placeholder="e.g., Amit Kumar"
              />
            </div>
            <div>
              <Label className="text-[10px] font-bold text-emerald-900">Quality Control Officer</Label>
              <Input
                type="text"
                value={qcOfficerName}
                onChange={e => setQcOfficerName(e.target.value)}
                className="h-8 text-xs bg-white border-emerald-300 font-semibold text-slate-800"
                placeholder="e.g., Suresh Verma (QC Incharge)"
              />
            </div>
            <div className="col-span-2">
              <Label className="text-[10px] font-bold text-emerald-900">Shift Incharge / Plant Manager</Label>
              <Input
                type="text"
                value={supervisorName}
                onChange={e => setSupervisorName(e.target.value)}
                className="h-8 text-xs bg-white border-emerald-300 font-semibold text-slate-800"
                placeholder="e.g., Rajesh Sharma (Shift Supervisor)"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* RECONCILIATION SUMMARY DASHBOARD CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 print:hidden">
        {/* Total Demand */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-500">Demand Required</p>
              <p className="text-xl font-extrabold text-blue-900">
                {calculatedData.totalDemand.toLocaleString()} <span className="text-xs font-normal">Pouches</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Total Machine Output */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-lg">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-500">Machine Counter</p>
              <p className="text-xl font-extrabold text-purple-900">
                {calculatedData.totalMachine.toLocaleString()} <span className="text-xs font-normal">Pouches</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Machine Wastage */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 bg-amber-100 text-amber-700 rounded-lg">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-500">Machine Wastage</p>
              <p className="text-xl font-extrabold text-amber-700">
                {calculatedData.totalWastage.toLocaleString()} <span className="text-xs font-normal">({calculatedData.overallWastagePct.toFixed(2)}%)</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Net Good Packed */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-500">Net Good Packed</p>
              <p className="text-xl font-extrabold text-emerald-700">
                {calculatedData.totalPacked.toLocaleString()} <span className="text-xs font-normal">({calculatedData.totalCrates} Crates)</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ZERO TOLERANCE BALANCE STATUS ALERT */}
      <div className="print:hidden">
        {calculatedData.balanceStatus === "balanced" ? (
          <Alert className="bg-emerald-50 border-emerald-400 text-emerald-950">
            <CheckCircle2 className="h-5 w-5 text-emerald-700" />
            <AlertTitle className="text-sm font-bold text-emerald-900">
              ✅ 100% ZERO-TOLERANCE RECONCILIATION BALANCED
            </AlertTitle>
            <AlertDescription className="text-xs text-emerald-800">
              Machine Counter ({calculatedData.totalMachine}) matches Packed Pouches ({calculatedData.totalPacked}) + Machine Wastage ({calculatedData.totalWastage}). Unaccounted Loss = 0.
            </AlertDescription>
          </Alert>
        ) : calculatedData.totalUnaccountedLoss !== 0 ? (
          <Alert variant="destructive" className="bg-rose-50 border-rose-400 text-rose-950">
            <AlertTriangle className="h-5 w-5 text-rose-700" />
            <AlertTitle className="text-sm font-bold text-rose-900">
              ⚠️ UNACCOUNTED PACKING DISCREPANCY DETECTED
            </AlertTitle>
            <AlertDescription className="text-xs text-rose-800">
              Unaccounted Variance: <strong>{calculatedData.totalUnaccountedLoss} Pouches</strong>. Machine Counter ({calculatedData.totalMachine}) does not equal Packed ({calculatedData.totalPacked}) + Wastage ({calculatedData.totalWastage}).
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="bg-blue-50 border-blue-400 text-blue-950">
            <Info className="h-5 w-5 text-blue-700" />
            <AlertTitle className="text-sm font-bold text-blue-900">
              ℹ️ SURPLUS PACKING OUTPUT ({calculatedData.totalExtra > 0 ? `+${calculatedData.totalExtra}` : calculatedData.totalExtra} Pouches)
            </AlertTitle>
            <AlertDescription className="text-xs text-blue-800">
              Total Packed Pouches exceed initial demand by {calculatedData.totalExtra} pouches. All machine output is fully accounted for.
            </AlertDescription>
          </Alert>
        )}
      </div>

      {/* INPUT EDITABLE TABLE SECTION (Interactive Excel Grid) */}
      <Card className="border-slate-200 shadow-sm print:hidden">
        <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
              Running Packaging Data Entry Grid (Excel Format)
            </CardTitle>
            <CardDescription className="text-[11px] text-slate-500">
              Enter Demand Required, Machine Counter, Machine Wastage, and Good Packed Pouches.
            </CardDescription>
          </div>
          <Button onClick={handleAddRow} disabled={isLocked} size="sm" className="h-8 text-xs bg-emerald-700 hover:bg-emerald-800 text-white disabled:opacity-40">
            <Plus className="h-3.5 w-3.5 mr-1" /> Add Product Row
          </Button>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-100">
              <TableRow className="text-[11px]">
                <TableHead className="w-[180px] font-bold">Product / Brand Name</TableHead>
                <TableHead className="w-[80px] font-bold text-center">Pack Size (L)</TableHead>
                <TableHead className="w-[90px] font-bold text-center">Demand Required</TableHead>
                <TableHead className="w-[90px] font-bold text-center">Machine Counter</TableHead>
                <TableHead className="w-[90px] font-bold text-center">Machine Wastage</TableHead>
                <TableHead className="w-[90px] font-bold text-center">Packed Pouches</TableHead>
                <TableHead className="w-[90px] font-bold text-center">Extra / Deficit</TableHead>
                <TableHead className="w-[80px] font-bold text-center">Wastage %</TableHead>
                <TableHead className="w-[90px] font-bold text-center">Crates (Full+Loose)</TableHead>
                <TableHead className="w-[50px] text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calculatedData.rows.map((row, idx) => (
                <TableRow key={row.id} className="text-xs hover:bg-slate-50">
                  {/* Product Name */}
                  <TableCell className="p-2">
                    <Input
                      type="text"
                      value={row.productName}
                      disabled={isLocked}
                      onChange={e => handleUpdateRow(row.id, "productName", e.target.value)}
                      className="h-8 text-xs font-semibold disabled:bg-slate-100 disabled:text-slate-900 disabled:font-bold disabled:opacity-100 disabled:cursor-not-allowed border-slate-300"
                    />
                  </TableCell>

                  {/* Pack Size */}
                  <TableCell className="p-2 text-center">
                    <Input
                      type="number"
                      step="0.05"
                      value={row.packSizeLiters}
                      disabled={isLocked}
                      onChange={e => handleUpdateRow(row.id, "packSizeLiters", parseFloat(e.target.value) || 0)}
                      className="h-8 text-xs text-center font-mono disabled:bg-slate-100 disabled:text-slate-900 disabled:font-bold disabled:opacity-100 disabled:cursor-not-allowed border-slate-300"
                    />
                  </TableCell>

                  {/* Demand Required Pouches */}
                  <TableCell className="p-2 text-center">
                    <Input
                      type="number"
                      value={row.demandQty}
                      onChange={e => handleUpdateRow(row.id, "demandQty", parseInt(e.target.value) || 0)}
                      className="h-8 text-xs text-center font-mono font-bold text-blue-700"
                    />
                  </TableCell>

                  {/* Machine Counter Pouches */}
                  <TableCell className="p-2 text-center">
                    <Input
                      type="number"
                      value={row.machineQty}
                      onChange={e => handleUpdateRow(row.id, "machineQty", parseInt(e.target.value) || 0)}
                      className="h-8 text-xs text-center font-mono font-bold text-purple-700"
                    />
                  </TableCell>

                  {/* Machine Wastage Pouches */}
                  <TableCell className="p-2 text-center">
                    <Input
                      type="number"
                      value={row.wastageQty}
                      onChange={e => handleUpdateRow(row.id, "wastageQty", parseInt(e.target.value) || 0)}
                      className="h-8 text-xs text-center font-mono font-bold text-amber-700"
                    />
                  </TableCell>

                  {/* Packed Pouches */}
                  <TableCell className="p-2 text-center">
                    <Input
                      type="number"
                      value={row.packedQty}
                      onChange={e => handleUpdateRow(row.id, "packedQty", parseInt(e.target.value) || 0)}
                      className="h-8 text-xs text-center font-mono font-bold text-emerald-700"
                    />
                  </TableCell>

                  {/* Calculated Extra / Deficit */}
                  <TableCell className="p-2 text-center font-mono font-bold">
                    <span className={cn("px-2 py-0.5 rounded text-[11px]", row.extraPouches >= 0 ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800")}>
                      {row.extraPouches >= 0 ? `+${row.extraPouches}` : row.extraPouches}
                    </span>
                  </TableCell>

                  {/* Calculated Wastage % */}
                  <TableCell className="p-2 text-center font-mono text-[11px] font-semibold text-amber-800">
                    {row.wastagePct.toFixed(2)}%
                  </TableCell>

                  {/* Calculated Crates */}
                  <TableCell className="p-2 text-center font-mono text-[11px]">
                    <span className="font-bold text-slate-800">{row.cratesFull}</span>
                    <span className="text-[10px] text-slate-500"> (+{row.loosePouches})</span>
                  </TableCell>

                  {/* Delete Button */}
                  <TableCell className="p-2 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      disabled={isLocked}
                      onClick={() => handleDeleteRow(row.id)}
                      className="h-7 w-7 text-rose-500 hover:text-rose-700 hover:bg-rose-50 disabled:opacity-20"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ========================================================================= */}
      {/*  PRINT & PDF EXPORT SHEET — A4 SIZE PROFESSIONAL REPORT CARD             */}
      {/* ========================================================================= */}
      <div className="w-full flex justify-center pt-2">
        <div
          ref={printAreaRef}
          className="w-full max-w-[210mm] bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-300 font-sans text-slate-900 space-y-6 text-xs print:shadow-none print:border-none print:p-0"
          style={{ minHeight: "297mm" }}
        >
          {/* A4 REPORT HEADER */}
          <div className="border-b-2 border-emerald-700 pb-4 flex justify-between items-start">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-emerald-950 font-headline">
                {companyName}
              </h1>
              <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1 mt-0.5">
                <Building2 className="h-3.5 w-3.5" /> {plantLocation}
              </p>
              <h2 className="text-sm font-bold text-slate-700 mt-2 uppercase tracking-wider flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-emerald-700" />
                DAILY RUNNING PACKAGING & POUCH RECONCILIATION REPORT
              </h2>
            </div>
            <div className="text-right space-y-1">
              <Badge className="bg-emerald-900 text-white text-[10px] uppercase font-mono tracking-wider">
                OFFICIAL REPORT
              </Badge>
              <p className="text-[11px] font-mono text-slate-600">
                <strong>Date:</strong> {reportDate}
              </p>
              <p className="text-[11px] text-slate-600 font-medium">
                <strong>Shift:</strong> {shiftName}
              </p>
            </div>
          </div>

          {/* REPORT METADATA SUMMARY BAR */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px]">
            <div>
              <span className="text-slate-500 block">Shift Operator:</span>
              <span className="font-bold text-slate-900">{operatorName}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Shift Supervisor:</span>
              <span className="font-bold text-slate-900">{supervisorName}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Zero-Tolerance Balance:</span>
              <span className={cn("font-extrabold", calculatedData.totalUnaccountedLoss === 0 ? "text-emerald-700" : "text-rose-700")}>
                {calculatedData.totalUnaccountedLoss === 0 ? "✅ 100% BALANCED (Loss = 0)" : `⚠️ DISCREPANCY: ${calculatedData.totalUnaccountedLoss} P`}
              </span>
            </div>
          </div>

          {/* EXCEL STYLED DATA TABLE FOR PRINT / PDF */}
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="bg-emerald-800 text-white font-bold uppercase text-[10px] tracking-wider">
                  <th className="p-2 border-r border-emerald-700">#</th>
                  <th className="p-2 border-r border-emerald-700">Product Specification</th>
                  <th className="p-2 border-r border-emerald-700 text-center">Pack Size</th>
                  <th className="p-2 border-r border-emerald-700 text-right">Demand Required</th>
                  <th className="p-2 border-r border-emerald-700 text-right">Machine Counter</th>
                  <th className="p-2 border-r border-emerald-700 text-right">Machine Wastage</th>
                  <th className="p-2 border-r border-emerald-700 text-right">Packed Pouches</th>
                  <th className="p-2 border-r border-emerald-700 text-right">Extra / Shortage</th>
                  <th className="p-2 text-right">Wastage %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {calculatedData.rows.map((row, idx) => (
                  <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                    <td className="p-2 font-mono text-slate-500 border-r border-slate-200">{idx + 1}</td>
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">{row.productName}</td>
                    <td className="p-2 text-center font-mono border-r border-slate-200">{(row.packSizeLiters * 1000).toFixed(0)} ml</td>
                    <td className="p-2 text-right font-mono font-bold text-blue-900 border-r border-slate-200">{row.demandQty.toLocaleString()}</td>
                    <td className="p-2 text-right font-mono font-bold text-purple-900 border-r border-slate-200">{row.machineQty.toLocaleString()}</td>
                    <td className="p-2 text-right font-mono text-amber-800 border-r border-slate-200">{row.wastageQty.toLocaleString()}</td>
                    <td className="p-2 text-right font-mono font-bold text-emerald-900 border-r border-slate-200">{row.packedQty.toLocaleString()}</td>
                    <td className={cn("p-2 text-right font-mono font-bold border-r border-slate-200", row.extraPouches >= 0 ? "text-emerald-700" : "text-rose-700")}>
                      {row.extraPouches >= 0 ? `+${row.extraPouches}` : row.extraPouches}
                    </td>
                    <td className="p-2 text-right font-mono font-semibold text-amber-900">{row.wastagePct.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
              {/* GRAND TOTALS FOOTER ROW */}
              <tfoot>
                <tr className="bg-slate-200 font-extrabold border-t-2 border-slate-400 text-slate-950 text-[11px]">
                  <td colSpan={3} className="p-2 border-r border-slate-300 text-right uppercase">
                    SHIFT TOTALS / RECONCILIATION:
                  </td>
                  <td className="p-2 text-right font-mono border-r border-slate-300 text-blue-950">
                    {calculatedData.totalDemand.toLocaleString()}
                  </td>
                  <td className="p-2 text-right font-mono border-r border-slate-300 text-purple-950">
                    {calculatedData.totalMachine.toLocaleString()}
                  </td>
                  <td className="p-2 text-right font-mono border-r border-slate-300 text-amber-950">
                    {calculatedData.totalWastage.toLocaleString()}
                  </td>
                  <td className="p-2 text-right font-mono border-r border-slate-300 text-emerald-950">
                    {calculatedData.totalPacked.toLocaleString()}
                  </td>
                  <td className={cn("p-2 text-right font-mono border-r border-slate-300", calculatedData.totalExtra >= 0 ? "text-emerald-950" : "text-rose-950")}>
                    {calculatedData.totalExtra >= 0 ? `+${calculatedData.totalExtra}` : calculatedData.totalExtra}
                  </td>
                  <td className="p-2 text-right font-mono text-amber-950">
                    {calculatedData.overallWastagePct.toFixed(2)}%
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ITEMIZATION METRICS SUMMARY BLOCK */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Block: Crates & Milk Volume Summary */}
            <div className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-200 space-y-1.5 text-[11px]">
              <h3 className="font-bold text-emerald-950 uppercase text-[10.5px] border-b border-emerald-300 pb-1 flex items-center gap-1">
                <Package className="h-3.5 w-3.5 text-emerald-700" /> Dispatch & Crate Itemization
              </h3>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Crates Packed:</span>
                <span className="font-bold text-slate-900">{calculatedData.totalCrates} Full Crates</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Milk Packed:</span>
                <span className="font-bold text-emerald-900 font-mono">{calculatedData.totalVolumePackedLiters.toLocaleString()} Liters</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Liquid Milk Wasted:</span>
                <span className="font-bold text-amber-800 font-mono">{calculatedData.totalMilkWastedLiters.toFixed(1)} Liters</span>
              </div>
            </div>

            {/* Right Block: Film Wastage & Zero-Tolerance Loss */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1.5 text-[11px]">
              <h3 className="font-bold text-slate-900 uppercase text-[10.5px] border-b border-slate-300 pb-1 flex items-center gap-1">
                <Scale className="h-3.5 w-3.5 text-purple-700" /> Film & Reconciliation Balance
              </h3>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Film Wastage Equivalent:</span>
                <span className="font-bold text-amber-900 font-mono">{calculatedData.totalFilmWastedKg.toFixed(2)} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Unaccounted Output Loss:</span>
                <span className={cn("font-extrabold font-mono", calculatedData.totalUnaccountedLoss === 0 ? "text-emerald-700" : "text-rose-700")}>
                  {calculatedData.totalUnaccountedLoss} Pouches
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Target Packing Efficiency:</span>
                <span className="font-extrabold text-blue-900 font-mono">{calculatedData.overallEfficiencyPct.toFixed(2)}%</span>
              </div>
            </div>
          </div>

          {/* SIGNATURE & VERIFICATION BLOCK */}
          <div className="pt-6 border-t border-slate-300 grid grid-cols-3 gap-4 text-[10.5px] text-center text-slate-600">
            <div className="space-y-6">
              <p className="font-semibold">Shift Packing Operator</p>
              <div className="border-b border-dashed border-slate-400 w-3/4 mx-auto"></div>
              <p className="font-bold text-slate-900">{operatorName}</p>
            </div>
            <div className="space-y-6">
              <p className="font-semibold">Quality Control Officer</p>
              <div className="border-b border-dashed border-slate-400 w-3/4 mx-auto"></div>
              <p className="font-bold text-slate-900">{qcOfficerName}</p>
            </div>
            <div className="space-y-6">
              <p className="font-semibold">Shift Incharge / Plant Manager</p>
              <div className="border-b border-dashed border-slate-400 w-3/4 mx-auto"></div>
              <p className="font-bold text-slate-900">{supervisorName}</p>
            </div>
          </div>

          {/* BRANDING FOOTER FOR A4 PRINT & PDF EXPORT */}
          <div className="pt-6 border-t border-slate-200 text-center flex items-center justify-center text-[9.5px] text-slate-500 uppercase tracking-widest font-mono relative">
            <span className="font-extrabold text-emerald-800 tracking-wider">
              ⚡ POWERED BY DAIRY HUB ERP SYSTEM
            </span>
            <span className="absolute right-0">Page 1 of 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductionReportsCalc;
