"use client";

import React, { useState, useRef, useMemo } from "react";
import { 
  Printer, Download, FileText, Building2, MapPin, Calendar, 
  Plus, Trash2, CheckCircle, Info, Loader2, FileDown,
  Layout, AlignLeft, ShieldCheck, ClipboardList, Package, ArrowRight
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

// Types for different formats
type FormatType = "gate-pass" | "production-log" | "cip-log" | "machine-track" | "housekeeping" | "material-issue";
interface FormatInfo {
  id: FormatType;
  title: string;
  titleHi: string;
  description: string;
  orientation: "portrait" | "landscape";
  icon: any;
}

const FORMATS_CATALOG: FormatInfo[] = [
  {
    id: "gate-pass",
    title: "Gate Pass (Inward/Outward)",
    titleHi: "गेट पास (आवक/जावक)",
    description: "Standard document to track vehicle and material movement at the plant gate.",
    orientation: "portrait",
    icon: ShieldCheck
  },
  {
    id: "production-log",
    title: "Daily Production Log Sheet",
    titleHi: "दैनिक उत्पादन लॉग शीट",
    description: "Detailed daily batch tracker for liquid milk and solids processing.",
    orientation: "landscape",
    icon: ClipboardList
  },
  {
    id: "cip-log",
    title: "CIP Log Sheet (Clean-In-Place)",
    titleHi: "CIP लॉग शीट (मशीन सफाई रिकॉर्ड)",
    description: "Log sheet to audit chemical CIP temperature, concentration, and timing.",
    orientation: "landscape",
    icon: ShieldCheck
  },
  {
    id: "machine-track",
    title: "Hourly Machine Track Record",
    titleHi: "प्रति घंटा मशीन ट्रैक रिकॉर्ड",
    description: "Hourly checklist for packaging and pasteurizing machines.",
    orientation: "landscape",
    icon: Layout
  },
  {
    id: "housekeeping",
    title: "Housekeeping & Hygiene Checklist",
    titleHi: "हाउसकीपिंग एवं स्वच्छता चेकलिस्ट",
    description: "Daily cleanliness checklist for process halls, docks, and cold storage.",
    orientation: "portrait",
    icon: AlignLeft
  },
  {
    id: "material-issue",
    title: "Material Issue Slip (Store Requisition)",
    titleHi: "सामग्री जारी पर्ची (स्टोर मांग slip)",
    description: "Requisition slip to issue raw materials, ingredients, or spares from store.",
    orientation: "portrait",
    icon: Package
  }
];

export default function PlantFormatsCalc() {
  const { toast } = useToast();
  const printAreaRef = useRef<HTMLDivElement>(null);
  
  const [companyName, setCompanyName] = useState("DAIRY HUB COOPERATIVE");
  const [plantLocation, setPlantLocation] = useState("MAIN PROCESS PLANT");
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  
  const [selectedFormatId, setSelectedFormatId] = useState<FormatType>("gate-pass");
  const [isDownloading, setIsDownloading] = useState(false);

  // Editable states for table rows in preview
  const [gatePassData, setGatePassData] = useState({
    passNo: "GP-2026-0701",
    passType: "INWARD",
    vehicleNo: "HR-55-A-1234",
    driverName: "Ramesh Singh",
    driverLic: "DL-1202604561",
    supplier: "Banas Milk Supplier Assoc.",
    materialName: "Raw Chilled Milk",
    quantity: "15,000 Litres",
    challanNo: "CH-98745",
    remarks: "Direct silo intake"
  });

  const [productionRows, setProductionRows] = useState([
    { id: 1, shift: "A", productName: "Full Cream Milk Pouch", batchNo: "B-FCM-101", tankNo: "PMST-1", milkQty: "5000", outputQty: "4980", loss: "0.4", operator: "Amit" },
    { id: 2, shift: "A", productName: "Toned Milk Pouch", batchNo: "B-TM-154", tankNo: "PMST-2", milkQty: "4000", outputQty: "3985", loss: "0.38", operator: "Amit" },
    { id: 3, shift: "B", productName: "Fresh Paneer", batchNo: "B-PNR-05", tankNo: "RC Tank", milkQty: "1000", outputQty: "152", loss: "1.2", operator: "Sunil" },
    { id: 4, shift: "B", productName: "Sweet Lassi", batchNo: "B-LSS-20", tankNo: "VMST-1", milkQty: "800", outputQty: "950", loss: "1.0", operator: "Sunil" },
  ]);

  const [cipRows, setCipRows] = useState([
    { id: 1, equip: "Pasteurizer-01", type: "Acid Wash", temp: "72", conc: "1.5", start: "08:15", end: "08:45", operator: "Vijay", status: "QC OK" },
    { id: 2, equip: "Pasteurizer-01", type: "Lye Wash", temp: "80", conc: "2.0", start: "08:50", end: "09:30", operator: "Vijay", status: "QC OK" },
    { id: 3, equip: "Milk Silo RMST-1", type: "Sanitation", temp: "85", conc: "0.2", start: "10:10", end: "10:30", operator: "Rakesh", status: "QC OK" },
    { id: 4, equip: "Filling Line 1", type: "Hot Water Run", temp: "90", conc: "0.0", start: "11:00", end: "11:20", operator: "Rakesh", status: "QC OK" }
  ]);

  const [machineRows, setMachineRows] = useState([
    { id: 1, time: "08:00", speed: "90 packs/m", temp: "4.2", press: "2.5", volt: "415", loss: "0.2", operator: "Ram" },
    { id: 2, time: "09:00", speed: "90 packs/m", temp: "4.5", press: "2.5", volt: "412", loss: "0.15", operator: "Ram" },
    { id: 3, time: "10:00", speed: "88 packs/m", temp: "4.4", press: "2.4", volt: "410", loss: "0.3", operator: "Ram" },
    { id: 4, time: "11:00", speed: "90 packs/m", temp: "4.3", press: "2.5", volt: "415", loss: "0.2", operator: "Ram" }
  ]);

  const [housekeepingRows, setHousekeepingRows] = useState([
    { id: 1, area: "Raw Milk Reception Dock (RMRD)", statusA: "OK", statusB: "OK", statusC: "OK", remarks: "Washed with hot water" },
    { id: 2, block: "Pasteurizer Processing Hall", statusA: "OK", statusB: "OK", statusC: "OK", remarks: "CIP and floor sanitized" },
    { id: 3, block: "Filling & Packing Section", statusA: "OK", statusB: "NOT OK", statusC: "OK", remarks: "Film scrap cleared in B shift" },
    { id: 4, block: "Cold Room Storage (4°C)", statusA: "OK", statusB: "OK", statusC: "OK", remarks: "Crates stacked neatly" },
    { id: 5, block: "ETP Yard & Outside Areas", statusA: "OK", statusB: "OK", statusC: "OK", remarks: "Drain cleared" }
  ]);

  const [materialRows, setMaterialRows] = useState([
    { id: 1, desc: "FCM Packaging Film Rolls", uom: "Kg", req: "100", issued: "100", bal: "250", remarks: "Batch 101" },
    { id: 2, desc: "Paneer Corrugated Outer Box", uom: "Nos", req: "50", issued: "50", bal: "340", remarks: "Standard 200g" },
    { id: 3, desc: "Liquid Sugar Syrup (Carboy)", uom: "Kg", req: "250", issued: "250", bal: "1200", remarks: "Lassi Batch" },
    { id: 4, desc: "Dairy Culture - DVS Yoghurt", uom: "Alu-Pouch", req: "10", issued: "10", bal: "45", remarks: "Dahi Batch" }
  ]);

  // Find active format info
  const selectedFormat = useMemo(() => {
    return FORMATS_CATALOG.find(f => f.id === selectedFormatId)!;
  }, [selectedFormatId]);

  // Browser Print handler
  const handlePrint = () => {
    window.print();
  };

  // PDF Export Report
  const handleDownloadPdf = async () => {
    if (!printAreaRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(printAreaRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      
      const isLandscape = selectedFormat.orientation === "landscape";
      const pdf = new jsPDF({ 
        orientation: isLandscape ? "l" : "p", 
        unit: "mm", 
        format: "a4" 
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${selectedFormat.id}_${currentDate}.pdf`);
      
      toast({
        title: "Format Downloaded",
        description: "Your printable PDF format has been downloaded.",
      });
    } catch (e) {
      console.error(e);
      toast({
        title: "Export Failed",
        description: "Failed to generate format PDF.",
        variant: "destructive"
      });
    }
    setIsDownloading(false);
  };

  // Row update helpers for preview grids
  const updateProductionRow = (id: number, field: string, val: string) => {
    setProductionRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateCipRow = (id: number, field: string, val: string) => {
    setCipRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateMachineRow = (id: number, field: string, val: string) => {
    setMachineRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateHousekeepingRow = (id: number, field: string, val: string) => {
    setHousekeepingRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateMaterialRow = (id: number, field: string, val: string) => {
    setMaterialRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Card */}
      <Card className="border-b-4 border-b-emerald-600 shadow-md">
        <CardHeader className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white p-6 rounded-t-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold font-headline">
                <FileText className="h-7 w-7 text-emerald-400" />
                Dairy Plant Formats & Log Sheets (लॉग शीट और प्रारूप)
              </CardTitle>
              <CardDescription className="text-emerald-200 mt-1 text-xs md:text-sm">
                Ready-to-print plant operational sheets. Enter your company name, customize fields, and print on A4.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Editor & Configuration Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Configurations Column */}
        <div className="lg:col-span-1 space-y-6 print:hidden">
          
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-100 p-4 border-b">
              <CardTitle className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                1. Plant Info (कंपनी की जानकारी)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div>
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Company/Firm Name</Label>
                <div className="relative mt-1">
                  <Building2 className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input 
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value.toUpperCase())}
                    className="pl-9 h-9 text-xs font-bold border-slate-200" 
                  />
                </div>
              </div>

              <div>
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Plant Location/Title</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input 
                    value={plantLocation} 
                    onChange={(e) => setPlantLocation(e.target.value.toUpperCase())}
                    className="pl-9 h-9 text-xs font-semibold border-slate-200" 
                  />
                </div>
              </div>

              <div>
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Report Date</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input 
                    type="date"
                    value={currentDate} 
                    onChange={(e) => setCurrentDate(e.target.value)}
                    className="pl-9 h-9 text-xs border-slate-200" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-100 p-4 border-b">
              <CardTitle className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                2. Choose Format (प्रारूप चुनें)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 space-y-1">
              {FORMATS_CATALOG.map((f) => {
                const Icon = f.icon;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFormatId(f.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg flex items-start gap-2.5 transition-all text-xs font-semibold",
                      selectedFormatId === f.id 
                        ? "bg-emerald-50 text-emerald-800 border-l-4 border-l-emerald-600 shadow-sm" 
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <Icon className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">{f.title}</div>
                      <div className="text-[10px] text-slate-400 font-normal mt-0.5">{f.titleHi}</div>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card className="border border-indigo-100 bg-indigo-50/20 p-4 space-y-3">
            <h4 className="font-bold text-xs text-indigo-900 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-indigo-600" /> Print Instructions
            </h4>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              These formats are configured to match physical register formats. Landscape log sheets will automatically print horizontally on A4 sheets.
            </p>
          </Card>
        </div>

        {/* Live Preview & Print Window Column */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Print Controls Header */}
          <div className="flex justify-between items-center bg-slate-100 p-3 rounded-xl border border-slate-200 print:hidden">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-850 font-bold text-[10px] uppercase">
                {selectedFormat.orientation} A4
              </Badge>
              <span className="text-xs text-slate-500 font-semibold italic">Edit values directly in the tables below before printing!</span>
            </div>
            
            <div className="flex gap-2">
              <Button size="sm" onClick={handlePrint} className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex gap-1">
                <Printer className="w-4 h-4" /> Print Form (प्रिंट)
              </Button>
              <Button size="sm" onClick={handleDownloadPdf} disabled={isDownloading} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex gap-1">
                {isDownloading ? <Loader2 className="w-4 h-4 animate-spin"/> : <FileDown className="w-4 h-4"/>} 
                Download PDF
              </Button>
            </div>
          </div>

          {/* Document Sheet Area */}
          <div className="overflow-x-auto print:overflow-visible">
            <div 
              ref={printAreaRef}
              id="print-area-formats"
              className={cn(
                "bg-white border shadow-md font-sans text-black mx-auto overflow-hidden print:border-none print:shadow-none print:p-0 print:m-0",
                selectedFormat.orientation === "landscape" 
                  ? "w-[297mm] min-h-[210mm] p-[15mm] print:w-[297mm] print:h-[210mm]" 
                  : "w-[210mm] min-h-[297mm] p-[15mm] print:w-[210mm] print:h-[297mm]"
              )}
              style={{
                boxSizing: "border-box"
              }}
            >
              {/* Paper Layout Container */}
              <div className="space-y-4 h-full flex flex-col justify-between">
                
                {/* 1. Header Box */}
                <div className="space-y-3">
                  <div className="border-2 border-black p-3 text-center">
                    <h1 className="text-lg font-black tracking-wide text-black uppercase leading-none">
                      {companyName || "DAIRY COOPERATIVE PLANT"}
                    </h1>
                    <p className="text-[10px] font-bold text-slate-800 mt-1 uppercase">
                      {plantLocation || "MAIN LOGISTICS DIVISION"}
                    </p>
                    <div className="border-t border-black my-2" />
                    <h2 className="text-sm font-black tracking-widest text-black uppercase leading-none flex justify-center items-center gap-1.5">
                      {selectedFormat.title.toUpperCase()}
                      <span className="text-xs font-normal">({selectedFormat.titleHi})</span>
                    </h2>
                  </div>

                  {/* Meta Details Row */}
                  <div className="grid grid-cols-3 border border-black p-2 bg-slate-50 text-[10px] font-bold gap-4">
                    <div>DATE (दिनांक): <span className="font-normal border-b border-black border-dotted ml-1">{currentDate}</span></div>
                    <div>SHIFT (पाली): <span className="font-normal border-b border-black border-dotted ml-1">_________________</span></div>
                    <div>DOC REF (संदर्भ संख्या): <span className="font-normal border-b border-black border-dotted ml-1">{selectedFormat.id.toUpperCase()}-2026</span></div>
                  </div>
                </div>

                {/* 2. Format Specific Contents */}
                <div className="flex-grow pt-2">
                  
                  {/* CASE 1: GATE PASS (Portrait) */}
                  {selectedFormatId === "gate-pass" && (
                    <div className="space-y-6 text-xs text-black border border-black p-4">
                      
                      {/* Gate Pass Type */}
                      <div className="flex justify-end gap-6 font-bold pb-2 border-b">
                        <label className="flex items-center gap-1 cursor-pointer">
                          <input 
                            type="radio" 
                            checked={gatePassData.passType === "INWARD"} 
                            onChange={() => setGatePassData(prev => ({ ...prev, passType: "INWARD" }))} 
                            className="print:accent-black accent-black" 
                          /> INWARD (आवक)
                        </label>
                        <label className="flex items-center gap-1 cursor-pointer">
                          <input 
                            type="radio" 
                            checked={gatePassData.passType === "OUTWARD"} 
                            onChange={() => setGatePassData(prev => ({ ...prev, passType: "OUTWARD" }))} 
                            className="print:accent-black accent-black" 
                          /> OUTWARD (जावक)
                        </label>
                      </div>

                      {/* Main fields layout */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        <div className="space-y-1">
                          <Label className="text-[10px] font-black text-black">PASS NO (पास संख्या):</Label>
                          <Input 
                            value={gatePassData.passNo} 
                            onChange={(e) => setGatePassData(prev => ({ ...prev, passNo: e.target.value }))}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] font-black text-black">VEHICLE NO (वाहन संख्या):</Label>
                          <Input 
                            value={gatePassData.vehicleNo} 
                            onChange={(e) => setGatePassData(prev => ({ ...prev, vehicleNo: e.target.value }))}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] font-black text-black">DRIVER NAME (चालक का नाम):</Label>
                          <Input 
                            value={gatePassData.driverName} 
                            onChange={(e) => setGatePassData(prev => ({ ...prev, driverName: e.target.value }))}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] font-black text-black">LICENSE NO (लाइसेंस संख्या):</Label>
                          <Input 
                            value={gatePassData.driverLic} 
                            onChange={(e) => setGatePassData(prev => ({ ...prev, driverLic: e.target.value }))}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] font-black text-black">SUPPLIER / PARTY (आपूर्तिकर्ता):</Label>
                          <Input 
                            value={gatePassData.supplier} 
                            onChange={(e) => setGatePassData(prev => ({ ...prev, supplier: e.target.value }))}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] font-black text-black">CHALLAN / BILL NO (चालान संख्या):</Label>
                          <Input 
                            value={gatePassData.challanNo} 
                            onChange={(e) => setGatePassData(prev => ({ ...prev, challanNo: e.target.value }))}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                        <div className="col-span-2 space-y-1">
                          <Label className="text-[10px] font-black text-black">MATERIAL DESCRIPTION & QUANTITY (सामग्री एवं मात्रा):</Label>
                          <Input 
                            value={gatePassData.materialName + " — " + gatePassData.quantity} 
                            onChange={(e) => {
                              const parts = e.target.value.split(" — ");
                              setGatePassData(prev => ({ 
                                ...prev, 
                                materialName: parts[0] || "", 
                                quantity: parts[1] || "" 
                              }));
                            }}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                        <div className="col-span-2 space-y-1">
                          <Label className="text-[10px] font-black text-black">REMARKS / SECURITY CHECKS (टिप्पणी):</Label>
                          <Input 
                            value={gatePassData.remarks} 
                            onChange={(e) => setGatePassData(prev => ({ ...prev, remarks: e.target.value }))}
                            className="h-8 text-xs border-black bg-transparent rounded-none" 
                          />
                        </div>
                      </div>

                      {/* Security Checklist block */}
                      <div className="border border-black p-2 mt-4 space-y-1">
                        <div className="font-bold text-[9px] uppercase tracking-wide">Security Verification Check:</div>
                        <div className="grid grid-cols-3 gap-2 text-[9px] font-semibold">
                          <label className="flex items-center gap-1"><input type="checkbox" defaultChecked className="print:accent-black accent-black" /> Seal Intact (सील सही)</label>
                          <label className="flex items-center gap-1"><input type="checkbox" defaultChecked className="print:accent-black accent-black" /> Weight Slip OK (कांटा पर्ची)</label>
                          <label className="flex items-center gap-1"><input type="checkbox" defaultChecked className="print:accent-black accent-black" /> QC Accepted (परीक्षण पास)</label>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* CASE 2: PRODUCTION LOG SHEET (Landscape) */}
                  {selectedFormatId === "production-log" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[10px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-2 py-1.5 w-12">Shift</th>
                            <th className="border border-black px-2 py-1.5 text-left">Product Name</th>
                            <th className="border border-black px-2 py-1.5 w-24">Batch No</th>
                            <th className="border border-black px-2 py-1.5 w-16">Silo/Tank</th>
                            <th className="border border-black px-2 py-1.5 text-right w-24">Milk Qty (L)</th>
                            <th className="border border-black px-2 py-1.5 text-right w-24">Output (Kg/L)</th>
                            <th className="border border-black px-2 py-1.5 text-right w-16">Loss (%)</th>
                            <th className="border border-black px-2 py-1.5 w-24">Operator</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productionRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black text-center p-1">
                                <input 
                                  value={row.shift} 
                                  onChange={(e) => updateProductionRow(row.id, "shift", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 font-semibold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-left">
                                <input 
                                  value={row.productName} 
                                  onChange={(e) => updateProductionRow(row.id, "productName", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[10px] p-0 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  value={row.batchNo} 
                                  onChange={(e) => updateProductionRow(row.id, "batchNo", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.tankNo} 
                                  onChange={(e) => updateProductionRow(row.id, "tankNo", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-right">
                                <input 
                                  type="number"
                                  value={row.milkQty} 
                                  onChange={(e) => updateProductionRow(row.id, "milkQty", e.target.value)} 
                                  className="w-full text-right bg-transparent border-none text-[10px] p-0 focus:ring-0 font-semibold pr-1" 
                                />
                              </td>
                              <td className="border border-black p-1 text-right">
                                <input 
                                  type="number"
                                  value={row.outputQty} 
                                  onChange={(e) => updateProductionRow(row.id, "outputQty", e.target.value)} 
                                  className="w-full text-right bg-transparent border-none text-[10px] p-0 focus:ring-0 font-semibold pr-1" 
                                />
                              </td>
                              <td className="border border-black p-1 text-right text-red-600 font-bold">
                                <input 
                                  type="number" step="0.01"
                                  value={row.loss} 
                                  onChange={(e) => updateProductionRow(row.id, "loss", e.target.value)} 
                                  className="w-full text-right bg-transparent border-none text-[10px] p-0 focus:ring-0 text-red-600 font-bold pr-1" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.operator} 
                                  onChange={(e) => updateProductionRow(row.id, "operator", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                            </tr>
                          ))}
                          {/* Total row */}
                          <tr className="bg-slate-50 font-bold text-black border-t-2 border-black">
                            <td colSpan={4} className="border border-black px-2 py-1.5 text-left uppercase">Total Volume processed</td>
                            <td className="border border-black px-2 py-1.5 text-right font-black">
                              {productionRows.reduce((s, r) => s + (parseFloat(r.milkQty) || 0), 0).toLocaleString()} L
                            </td>
                            <td className="border border-black px-2 py-1.5 text-right font-black">
                              {productionRows.reduce((s, r) => s + (parseFloat(r.outputQty) || 0), 0).toLocaleString()} Kg/L
                            </td>
                            <td className="border border-black px-2 py-1.5 text-right text-red-600 font-black">
                              {(productionRows.reduce((s, r) => s + (parseFloat(r.loss) || 0), 0) / productionRows.length || 0).toFixed(2)}%
                            </td>
                            <td className="border border-black px-2 py-1.5"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 3: CIP LOG RECORD (Landscape) */}
                  {selectedFormatId === "cip-log" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[10px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-2 py-1.5 text-left">Equipment / Line Name</th>
                            <th className="border border-black px-2 py-1.5 w-24">CIP Wash Type</th>
                            <th className="border border-black px-2 py-1.5 w-16 text-center">Temp (°C)</th>
                            <th className="border border-black px-2 py-1.5 w-16 text-center">Conc (%)</th>
                            <th className="border border-black px-2 py-1.5 w-16 text-center">Start Time</th>
                            <th className="border border-black px-2 py-1.5 w-16 text-center">End Time</th>
                            <th className="border border-black px-2 py-1.5 w-20 text-center">Operator</th>
                            <th className="border border-black px-2 py-1.5 w-20 text-center">QC Check</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cipRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-1 text-left font-bold">
                                <input 
                                  value={row.equip} 
                                  onChange={(e) => updateCipRow(row.id, "equip", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[10px] p-0 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.type} 
                                  onChange={(e) => updateCipRow(row.id, "type", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono font-semibold">
                                <input 
                                  type="number"
                                  value={row.temp} 
                                  onChange={(e) => updateCipRow(row.id, "temp", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 font-semibold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  type="number" step="0.1"
                                  value={row.conc} 
                                  onChange={(e) => updateCipRow(row.id, "conc", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  type="text"
                                  value={row.start} 
                                  onChange={(e) => updateCipRow(row.id, "start", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  type="text"
                                  value={row.end} 
                                  onChange={(e) => updateCipRow(row.id, "end", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.operator} 
                                  onChange={(e) => updateCipRow(row.id, "operator", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.status} 
                                  onChange={(e) => updateCipRow(row.id, "status", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 text-green-700 font-bold" 
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 4: HOURLY MACHINE TRACK RECORD (Landscape) */}
                  {selectedFormatId === "machine-track" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[10px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-2 py-1.5 w-16">Hour (समय)</th>
                            <th className="border border-black px-2 py-1.5 w-32">Speed (packs/m)</th>
                            <th className="border border-black px-2 py-1.5 w-24">Temp (°C)</th>
                            <th className="border border-black px-2 py-1.5 w-24">Air Press (bar)</th>
                            <th className="border border-black px-2 py-1.5 w-24">Voltage (V)</th>
                            <th className="border border-black px-2 py-1.5 w-24">Film Loss (%)</th>
                            <th className="border border-black px-2 py-1.5 w-24">Operator</th>
                          </tr>
                        </thead>
                        <tbody>
                          {machineRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-1 text-center font-mono font-bold">
                                <input 
                                  value={row.time} 
                                  onChange={(e) => updateMachineRow(row.id, "time", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.speed} 
                                  onChange={(e) => updateMachineRow(row.id, "speed", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 font-semibold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  type="number" step="0.1"
                                  value={row.temp} 
                                  onChange={(e) => updateMachineRow(row.id, "temp", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  type="number" step="0.1"
                                  value={row.press} 
                                  onChange={(e) => updateMachineRow(row.id, "press", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  type="number"
                                  value={row.volt} 
                                  onChange={(e) => updateMachineRow(row.id, "volt", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono text-red-600 font-bold">
                                <input 
                                  type="number" step="0.01"
                                  value={row.loss} 
                                  onChange={(e) => updateMachineRow(row.id, "loss", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 text-red-600 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.operator} 
                                  onChange={(e) => updateMachineRow(row.id, "operator", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 5: HOUSEKEEPING CHECKLIST (Portrait) */}
                  {selectedFormatId === "housekeeping" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[10px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-2 py-1.5 text-left">Area Parameter (क्षेत्र/स्वच्छता मानक)</th>
                            <th className="border border-black px-2 py-1.5 w-16">Shift A</th>
                            <th className="border border-black px-2 py-1.5 w-16">Shift B</th>
                            <th className="border border-black px-2 py-1.5 w-16">Shift C</th>
                            <th className="border border-black px-2 py-1.5 text-left w-36">Remarks / Deficiencies</th>
                          </tr>
                        </thead>
                        <tbody>
                          {housekeepingRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-2 text-left font-bold bg-slate-50/50">
                                <input 
                                  value={row.area || (row as any).block} 
                                  onChange={(e) => updateHousekeepingRow(row.id, "area", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[10px] p-0 focus:ring-0 font-bold text-slate-800" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono font-bold text-green-700">
                                <input 
                                  value={row.statusA} 
                                  onChange={(e) => updateHousekeepingRow(row.id, "statusA", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 text-green-700 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono font-bold text-green-700">
                                <input 
                                  value={row.statusB} 
                                  onChange={(e) => updateHousekeepingRow(row.id, "statusB", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 text-green-700 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono font-bold text-green-700">
                                <input 
                                  value={row.statusC} 
                                  onChange={(e) => updateHousekeepingRow(row.id, "statusC", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 text-green-700 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-left text-slate-500">
                                <input 
                                  value={row.remarks} 
                                  onChange={(e) => updateHousekeepingRow(row.id, "remarks", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[10px] p-0 focus:ring-0 text-slate-600" 
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 6: MATERIAL ISSUE SLIP (Portrait) */}
                  {selectedFormatId === "material-issue" && (
                    <div className="space-y-4">
                      
                      {/* Top Slip Info */}
                      <div className="grid grid-cols-2 gap-4 border border-black p-2 bg-slate-50 text-[10px] font-bold">
                        <div>REQUISITION NO: <span className="font-normal border-b border-black border-dotted ml-1">REQ-2026-084</span></div>
                        <div>ISSUING DEPARTMENT: <span className="font-normal border-b border-black border-dotted ml-1">PRODUCTION BLOCK</span></div>
                      </div>

                      {/* Material rows table */}
                      <table className="w-full text-[10px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-2 py-1.5 text-left">Material Description</th>
                            <th className="border border-black px-2 py-1.5 w-16 text-center">Unit</th>
                            <th className="border border-black px-2 py-1.5 w-20 text-center">Req Qty</th>
                            <th className="border border-black px-2 py-1.5 w-20 text-center">Issued Qty</th>
                            <th className="border border-black px-2 py-1.5 w-20 text-center">Balance</th>
                            <th className="border border-black px-2 py-1.5 text-left w-36">Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {materialRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-1 text-left font-bold">
                                <input 
                                  value={row.desc} 
                                  onChange={(e) => updateMaterialRow(row.id, "desc", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[10px] p-0 focus:ring-0 font-bold text-slate-800" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center">
                                <input 
                                  value={row.uom} 
                                  onChange={(e) => updateMaterialRow(row.id, "uom", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono">
                                <input 
                                  type="number"
                                  value={row.req} 
                                  onChange={(e) => updateMaterialRow(row.id, "req", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 font-semibold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono font-bold">
                                <input 
                                  type="number"
                                  value={row.issued} 
                                  onChange={(e) => updateMaterialRow(row.id, "issued", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-1 text-center font-mono text-slate-500">
                                <input 
                                  type="number"
                                  value={row.bal} 
                                  onChange={(e) => updateMaterialRow(row.id, "bal", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[10px] p-0 focus:ring-0 text-slate-500" 
                                />
                              </td>
                              <td className="border border-black p-1 text-left text-slate-500">
                                <input 
                                  value={row.remarks} 
                                  onChange={(e) => updateMaterialRow(row.id, "remarks", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[10px] p-0 focus:ring-0 text-slate-600" 
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>

                {/* 3. Signature & Brand Footer */}
                <div className="pt-8 space-y-4">
                  
                  {/* Standard Sign block */}
                  <div className="flex justify-between items-center text-[8px] font-bold uppercase tracking-wider px-4">
                    <div className="text-center w-28 border-t border-black pt-1">
                      PREPARED BY (तैयारकर्ता)
                    </div>
                    <div className="text-center w-28 border-t border-black pt-1">
                      VERIFIED BY (सत्यापितकर्ता)
                    </div>
                    <div className="text-center w-28 border-t border-black pt-1">
                      PLANT AUTHORIZED SIGN
                    </div>
                  </div>

                  {/* Brand Footer */}
                  <div className="border-t border-slate-300 pt-2 text-center text-[7.5px] text-slate-400 font-bold tracking-widest uppercase">
                    POWERED BY DAIRY HUB ERP SYSTEM
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Global CSS overrides for A4 Printing layout */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area-formats, #print-area-formats * {
            visibility: visible;
          }
          #print-area-formats {
            position: absolute;
            left: 0;
            top: 0;
            width: ${selectedFormat.orientation === 'landscape' ? '297mm' : '210mm'} !important;
            height: ${selectedFormat.orientation === 'landscape' ? '210mm' : '297mm'} !important;
            padding: 10mm !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background-color: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Hide tabs, header and buttons when printing */
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
