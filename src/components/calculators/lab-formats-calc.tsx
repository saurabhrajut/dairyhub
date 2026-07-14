"use client";

import React, { useState, useRef, useMemo } from "react";
import { 
  Printer, Download, FileText, Building2, MapPin, Calendar, 
  Plus, Trash2, CheckCircle, Info, Loader2, FileDown,
  ShieldCheck, ClipboardList, Beaker, FlaskConical, Droplet, TestTube, Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Types for different formats
type FormatType = "rmrd-milk" | "finished-products" | "reagents-prep" | "glassware-calib" | "water-testing" | "micro-swabs";

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
    id: "rmrd-milk",
    title: "Milk Reception Lab Record (RMRD)",
    titleHi: "दूध आवक प्रयोगशाला रिकॉर्ड",
    description: "Quality control tracker for milk tankers and cans receiving at dock (RMRD).",
    orientation: "landscape",
    icon: TestTube
  },
  {
    id: "finished-products",
    title: "Finished Product Analysis Report",
    titleHi: "तैयार उत्पाद रासायनिक विश्लेषण",
    description: "Daily chemical & physical standards verification sheet for finished dairy products.",
    orientation: "landscape",
    icon: ShieldCheck
  },
  {
    id: "reagents-prep",
    title: "Reagents & Standard Solutions Prep Register",
    titleHi: "अभिकर्मक एवं मानक घोल तैयारी रजिस्टर",
    description: "Log for chemical preparation, normality verification, standardization, and expiry.",
    orientation: "portrait",
    icon: Beaker
  },
  {
    id: "glassware-calib",
    title: "Glassware Calibration & Verification Log",
    titleHi: "कांच के उपकरणों का अंशांकन और सत्यापन",
    description: "Accuracy check record for pipettes, burettes, lactometers, and butyrometers.",
    orientation: "portrait",
    icon: Scale
  },
  {
    id: "water-testing",
    title: "Water Quality Analysis Log Sheet",
    titleHi: "पानी की गुणवत्ता का विश्लेषण लॉग",
    description: "Daily checks for pH, hardness, TDS, alkalinity, and residual chlorine in plant water systems.",
    orientation: "portrait",
    icon: Droplet
  },
  {
    id: "micro-swabs",
    title: "Microbiology Swab Testing Record",
    titleHi: "सूक्ष्मजीवविज्ञानी स्वैब परीक्षण रिकॉर्ड",
    description: "Swab and environmental testing log for SPC, Coliform, Yeast & Mold in silos, packaging lines, and hands.",
    orientation: "landscape",
    icon: FlaskConical
  }
];

export function LabFormatsCalc() {
  const { toast } = useToast();
  const printAreaRef = useRef<HTMLDivElement>(null);
  
  const [companyName, setCompanyName] = useState("DAIRY HUB COOPERATIVE");
  const [labLocation, setLabLocation] = useState("QUALITY CONTROL LABORATORY");
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  
  const [selectedFormatId, setSelectedFormatId] = useState<FormatType>("rmrd-milk");
  const [isDownloading, setIsDownloading] = useState(false);

  // Initial States for Lab Formats Data
  const [rmrdRows, setRmrdRows] = useState([
    { id: 1, source: "Banas Union", tankerNo: "HR-55-A-1234", qty: "15000", temp: "4.2", acidity: "0.13", fat: "4.2", snf: "8.5", cob: "Negative", adulteration: "Nil", status: "Accepted", analyst: "Amit K." },
    { id: 2, source: "Center-12 Raw", tankerNo: "UP-16-T-8899", qty: "2500", temp: "5.5", acidity: "0.14", fat: "4.5", snf: "8.6", cob: "Negative", adulteration: "Nil", status: "Accepted", analyst: "Amit K." },
    { id: 3, source: "Local Vendor B", tankerNo: "Cans-Mix", qty: "850", temp: "8.2", acidity: "0.18", fat: "3.8", snf: "8.1", cob: "Positive (COB)", adulteration: "Starch Trace", status: "Rejected", analyst: "Ritu S." }
  ]);

  const [productRows, setProductRows] = useState([
    { id: 1, batchNo: "B-FCM-101", productName: "Full Cream Milk", packSize: "500 ml Pouch", fat: "6.05", snf: "9.02", moisture: "-", acidity: "0.135", phosphatase: "Negative", coliform: "Nil", organoleptic: "Excellent", analyst: "Dr. Verma" },
    { id: 2, batchNo: "B-PNR-05", productName: "Fresh Paneer", packSize: "200 g Pack", fat: "50.5 (DB)", snf: "-", moisture: "58.2", acidity: "0.20", phosphatase: "-", coliform: "Nil", organoleptic: "Good", analyst: "Amit K." },
    { id: 3, batchNo: "B-GHEE-12", productName: "Cow Ghee", packSize: "1 L Carton", fat: "99.8", snf: "-", moisture: "0.15", acidity: "0.12 (FFA)", phosphatase: "-", coliform: "Nil", organoleptic: "Pleasant", analyst: "Dr. Verma" }
  ]);

  const [reagentRows, setReagentRows] = useState([
    { id: 1, serial: "1", reagentName: "0.1N Sodium Hydroxide (NaOH)", normality: "0.1 N", factor: "0.1005 N", prepDate: "2026-07-01", expDate: "2026-07-31", preparedBy: "Amit K.", standardizedBy: "Dr. Verma", remarks: "Used for milk acidity" },
    { id: 2, serial: "2", reagentName: "0.1N Hydrochloric Acid (HCl)", normality: "0.1 N", factor: "0.0998 N", prepDate: "2026-07-05", expDate: "2026-10-05", preparedBy: "Amit K.", standardizedBy: "Dr. Verma", remarks: "Used for detergent CIP checks" },
    { id: 3, serial: "3", reagentName: "Starch Indicator Solution (1%)", normality: "1.0 %", factor: "1.00 %", prepDate: "2026-07-10", expDate: "2026-07-17", preparedBy: "Ritu S.", standardizedBy: "Amit K.", remarks: "Fresh prep weekly" }
  ]);

  const [glasswareRows, setGlasswareRows] = useState([
    { id: 1, glasswareId: "G-PIP-01", type: "Milk Pipette", nominalVol: "10.75", waterTemp: "25.0", emptyWt: "18.250", filledWt: "28.930", netVol: "10.712", error: "-0.038", accepted: "Yes", operator: "Ritu S." },
    { id: 2, glasswareId: "G-BUR-03", type: "Burette", nominalVol: "50.00", waterTemp: "25.0", emptyWt: "42.110", filledWt: "91.960", netVol: "49.998", error: "-0.002", accepted: "Yes", operator: "Ritu S." },
    { id: 3, glasswareId: "G-LACT-12", type: "Lactometer (Zeal)", nominalVol: "LR 0-40", waterTemp: "29.0", emptyWt: "-", filledWt: "-", netVol: "-", error: "-0.2 (Corr)", accepted: "Yes", operator: "Amit K." }
  ]);

  const [waterRows, setWaterRows] = useState([
    { id: 1, source: "Raw Water (Borewell)", ph: "7.4", hardness: "280", tds: "450", chlorine: "Nil", alkalinity: "180", coliform: "Present", remarks: "Requires chlorination" },
    { id: 2, source: "Soft Water (Softener Out)", ph: "7.2", hardness: "5", tds: "410", chlorine: "Nil", alkalinity: "150", coliform: "Nil", remarks: "OK for boiler feed" },
    { id: 3, source: "RO Treated Water", ph: "6.8", hardness: "12", tds: "45", chlorine: "0.2", alkalinity: "10", coliform: "Absent", remarks: "Safe drinking water" }
  ]);

  const [swabRows, setSwabRows] = useState([
    { id: 1, dateShift: "2026-07-14 A", area: "Tanker Manhole Gasket", sanitizer: "Peracetic Acid (100ppm)", spc: "15", coliform: "Absent", yeastMold: "Absent", status: "OK", analyst: "Dr. Verma" },
    { id: 2, dateShift: "2026-07-14 A", area: "Pasteurizer Balance Tank", sanitizer: "Hot Water Wash", spc: "4", coliform: "Absent", yeastMold: "Absent", status: "OK", analyst: "Dr. Verma" },
    { id: 3, dateShift: "2026-07-14 B", area: "Pouch Filler Nozzle", sanitizer: "Ethanol Spray (70%)", spc: "85", coliform: "Present (1 CFU)", yeastMold: "Absent", status: "Alert", analyst: "Dr. Verma" }
  ]);

  // Find active format info
  const selectedFormat = useMemo(() => {
    return FORMATS_CATALOG.find(f => f.id === selectedFormatId)!;
  }, [selectedFormatId]);

  // Actions
  const handlePrint = () => {
    window.print();
  };

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
      pdf.save(`lab_${selectedFormat.id}_${currentDate}.pdf`);
      
      toast({
        title: "PDF Format Generated",
        description: "Your printable PDF lab sheet is ready.",
      });
    } catch (e) {
      console.error(e);
      toast({
        title: "Export Failed",
        description: "Failed to generate report PDF.",
        variant: "destructive"
      });
    }
    setIsDownloading(false);
  };

  // Row update handlers
  const updateRmrdRow = (id: number, field: string, val: string) => {
    setRmrdRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateProductRow = (id: number, field: string, val: string) => {
    setProductRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateReagentRow = (id: number, field: string, val: string) => {
    setReagentRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateGlasswareRow = (id: number, field: string, val: string) => {
    setGlasswareRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateWaterRow = (id: number, field: string, val: string) => {
    setWaterRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateSwabRow = (id: number, field: string, val: string) => {
    setSwabRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  // Add / Delete row utilities
  const addRow = () => {
    switch (selectedFormatId) {
      case "rmrd-milk":
        setRmrdRows(prev => [...prev, { id: Date.now(), source: "", tankerNo: "", qty: "", temp: "", acidity: "", fat: "", snf: "", cob: "Negative", adulteration: "Nil", status: "Accepted", analyst: "" }]);
        break;
      case "finished-products":
        setProductRows(prev => [...prev, { id: Date.now(), batchNo: "", productName: "", packSize: "", fat: "", snf: "", moisture: "", acidity: "", phosphatase: "", coliform: "", organoleptic: "", analyst: "" }]);
        break;
      case "reagents-prep":
        setReagentRows(prev => [...prev, { id: Date.now(), serial: (prev.length + 1).toString(), reagentName: "", normality: "", factor: "", prepDate: currentDate, expDate: "", preparedBy: "", standardizedBy: "", remarks: "" }]);
        break;
      case "glassware-calib":
        setGlasswareRows(prev => [...prev, { id: Date.now(), glasswareId: "", type: "", nominalVol: "", waterTemp: "", emptyWt: "", filledWt: "", netVol: "", error: "", accepted: "Yes", operator: "" }]);
        break;
      case "water-testing":
        setWaterRows(prev => [...prev, { id: Date.now(), source: "", ph: "", hardness: "", tds: "", chlorine: "", alkalinity: "", coliform: "Absent", remarks: "" }]);
        break;
      case "micro-swabs":
        setSwabRows(prev => [...prev, { id: Date.now(), dateShift: currentDate, area: "", sanitizer: "", spc: "", coliform: "Absent", yeastMold: "Absent", status: "OK", analyst: "" }]);
        break;
    }
  };

  const deleteRow = (id: number) => {
    switch (selectedFormatId) {
      case "rmrd-milk":
        if (rmrdRows.length > 1) setRmrdRows(prev => prev.filter(r => r.id !== id));
        break;
      case "finished-products":
        if (productRows.length > 1) setProductRows(prev => prev.filter(r => r.id !== id));
        break;
      case "reagents-prep":
        if (reagentRows.length > 1) setReagentRows(prev => prev.filter(r => r.id !== id).map((r, i) => ({ ...r, serial: (i + 1).toString() })));
        break;
      case "glassware-calib":
        if (glasswareRows.length > 1) setGlasswareRows(prev => prev.filter(r => r.id !== id));
        break;
      case "water-testing":
        if (waterRows.length > 1) setWaterRows(prev => prev.filter(r => r.id !== id));
        break;
      case "micro-swabs":
        if (swabRows.length > 1) setSwabRows(prev => prev.filter(r => r.id !== id));
        break;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Card */}
      <Card className="border-b-4 border-b-teal-600 shadow-md">
        <CardHeader className="bg-gradient-to-br from-teal-950 to-slate-900 text-white p-6 rounded-t-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold font-headline">
                <FileText className="h-7 w-7 text-teal-400" />
                Dairy Laboratory Formats & Log Sheets (प्रयोगशाला प्रारूप)
              </CardTitle>
              <CardDescription className="text-teal-200 mt-1 text-xs md:text-sm">
                Ready-to-print laboratory log sheets. Enter your company name, edit standard entries, and download as clean A4 templates.
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
                1. Lab Info (प्रयोगशाला विवरण)
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
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Lab Unit / Location</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input 
                    value={labLocation} 
                    onChange={(e) => setLabLocation(e.target.value.toUpperCase())}
                    className="pl-9 h-9 text-xs font-semibold border-slate-200" 
                  />
                </div>
              </div>

              <div>
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Date of Record</Label>
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
                2. Choose Lab Format (प्रारूप चुनें)
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
                        ? "bg-teal-50 text-teal-800 border-l-4 border-l-teal-600 shadow-sm" 
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
              <Info className="w-4 h-4 text-indigo-600" /> Print Guidelines
            </h4>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              These formats match physical quality registers. Landscape layouts automatically export horizontally on A4 sheets for wide analytical logs.
            </p>
          </Card>
        </div>

        {/* Live Preview & Print Window Column */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Print Controls Header */}
          <div className="flex justify-between items-center bg-slate-100 p-3 rounded-xl border border-slate-200 print:hidden">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-teal-100 text-teal-850 font-bold text-[10px] uppercase">
                {selectedFormat.orientation} A4
              </Badge>
              <span className="hidden sm:inline text-[11px] text-slate-500 font-semibold italic">Edit values directly in the tables below!</span>
            </div>
            
            <div className="flex gap-2">
              <Button size="sm" onClick={addRow} className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex gap-1">
                <Plus className="w-3.5 h-3.5" /> Add Row (जोड़ें)
              </Button>
              <Button size="sm" onClick={handlePrint} className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex gap-1">
                <Printer className="w-4 h-4" /> Print (प्रिंट)
              </Button>
              <Button size="sm" onClick={handleDownloadPdf} disabled={isDownloading} className="bg-teal-850 hover:bg-teal-900 text-white font-bold text-xs flex gap-1">
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
                      {companyName || "DAIRY HUB COOPERATIVE LABS"}
                    </h1>
                    <p className="text-[10px] font-bold text-slate-800 mt-1 uppercase">
                      {labLocation || "QUALITY ASSURANCE DIVISION"}
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
                    <div>LAB IN-CHARGE: <span className="font-normal border-b border-black border-dotted ml-1">_________________</span></div>
                    <div>DOC REF NO: <span className="font-normal border-b border-black border-dotted ml-1">QA-LAB-{selectedFormat.id.toUpperCase()}-2026</span></div>
                  </div>
                </div>

                {/* 2. Format Specific Contents */}
                <div className="flex-grow pt-2">
                  
                  {/* CASE 1: RMRD Milk Reception Lab Record (Landscape) */}
                  {selectedFormatId === "rmrd-milk" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Tanker/Can No</th>
                            <th className="border border-black px-1.5 py-1">Source</th>
                            <th className="border border-black px-1.5 py-1 w-16">Qty (Kg/L)</th>
                            <th className="border border-black px-1.5 py-1 w-12">Temp (°C)</th>
                            <th className="border border-black px-1.5 py-1 w-14">Acidity (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">Fat (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">SNF (%)</th>
                            <th className="border border-black px-1.5 py-1 w-16">COB Test</th>
                            <th className="border border-black px-1.5 py-1 w-20">Adulteration</th>
                            <th className="border border-black px-1.5 py-1 w-16">Status</th>
                            <th className="border border-black px-1.5 py-1 w-16">Analyst</th>
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rmrdRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input 
                                  value={row.tankerNo} 
                                  onChange={(e) => updateRmrdRow(row.id, "tankerNo", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5">
                                <input 
                                  value={row.source} 
                                  onChange={(e) => updateRmrdRow(row.id, "source", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono">
                                <input 
                                  type="number"
                                  value={row.qty} 
                                  onChange={(e) => updateRmrdRow(row.id, "qty", e.target.value)} 
                                  className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  type="number" step="0.1"
                                  value={row.temp} 
                                  onChange={(e) => updateRmrdRow(row.id, "temp", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  type="number" step="0.005"
                                  value={row.acidity} 
                                  onChange={(e) => updateRmrdRow(row.id, "acidity", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input 
                                  type="number" step="0.1"
                                  value={row.fat} 
                                  onChange={(e) => updateRmrdRow(row.id, "fat", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input 
                                  type="number" step="0.1"
                                  value={row.snf} 
                                  onChange={(e) => updateRmrdRow(row.id, "snf", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.cob} 
                                  onChange={(e) => updateRmrdRow(row.id, "cob", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold",
                                    row.cob.toLowerCase().includes("positive") ? "text-red-700" : "text-slate-800"
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.adulteration} 
                                  onChange={(e) => updateRmrdRow(row.id, "adulteration", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0",
                                    row.adulteration !== "Nil" && row.adulteration !== "" ? "text-orange-700 font-bold" : ""
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.status} 
                                  onChange={(e) => updateRmrdRow(row.id, "status", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold",
                                    row.status.toLowerCase().includes("reject") ? "text-red-700" : "text-green-700"
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.analyst} 
                                  onChange={(e) => updateRmrdRow(row.id, "analyst", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700">
                                  <Trash2 className="w-3.5 h-3.5 mx-auto" />
                                </button>
                              </td>
                            </tr>
                          ))}
                          {/* Totals row */}
                          <tr className="bg-slate-50 font-bold text-black border-t-2 border-black">
                            <td colSpan={2} className="border border-black px-1.5 py-1 text-left uppercase">Total Received Volume</td>
                            <td className="border border-black px-1.5 py-1 text-right font-black">
                              {rmrdRows.reduce((sum, r) => sum + (parseFloat(r.qty) || 0), 0).toLocaleString()} Kg/L
                            </td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">
                              {(rmrdRows.reduce((s, r) => s + (parseFloat(r.temp) || 0), 0) / rmrdRows.length || 0).toFixed(1)}°C
                            </td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">
                              {(rmrdRows.reduce((s, r) => s + (parseFloat(r.acidity) || 0), 0) / rmrdRows.length || 0).toFixed(3)}%
                            </td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">
                              {(rmrdRows.reduce((s, r) => s + (parseFloat(r.fat) || 0), 0) / rmrdRows.length || 0).toFixed(2)}%
                            </td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">
                              {(rmrdRows.reduce((s, r) => s + (parseFloat(r.snf) || 0), 0) / rmrdRows.length || 0).toFixed(2)}%
                            </td>
                            <td colSpan={5} className="border border-black px-1.5 py-1 bg-slate-100"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 2: Finished Product Analysis Report (Landscape) */}
                  {selectedFormatId === "finished-products" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 w-20">Batch No</th>
                            <th className="border border-black px-1.5 py-1 text-left">Product Name</th>
                            <th className="border border-black px-1.5 py-1 w-20">Pack Size</th>
                            <th className="border border-black px-1.5 py-1 w-12">Fat (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">SNF (%)</th>
                            <th className="border border-black px-1.5 py-1 w-16">Moisture (%)</th>
                            <th className="border border-black px-1.5 py-1 w-16">Acidity (%)</th>
                            <th className="border border-black px-1.5 py-1 w-20">Phosphatase</th>
                            <th className="border border-black px-1.5 py-1 w-16">Coliform / ml</th>
                            <th className="border border-black px-1.5 py-1 w-20">Organoleptic</th>
                            <th className="border border-black px-1.5 py-1 w-16">Analyst</th>
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.batchNo} 
                                  onChange={(e) => updateProductRow(row.id, "batchNo", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input 
                                  value={row.productName} 
                                  onChange={(e) => updateProductRow(row.id, "productName", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.packSize} 
                                  onChange={(e) => updateProductRow(row.id, "packSize", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.fat} 
                                  onChange={(e) => updateProductRow(row.id, "fat", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.snf} 
                                  onChange={(e) => updateProductRow(row.id, "snf", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.moisture} 
                                  onChange={(e) => updateProductRow(row.id, "moisture", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.acidity} 
                                  onChange={(e) => updateProductRow(row.id, "acidity", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.phosphatase} 
                                  onChange={(e) => updateProductRow(row.id, "phosphatase", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold",
                                    row.phosphatase.toLowerCase().includes("positive") ? "text-red-700 font-bold" : "text-green-700"
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.coliform} 
                                  onChange={(e) => updateProductRow(row.id, "coliform", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.organoleptic} 
                                  onChange={(e) => updateProductRow(row.id, "organoleptic", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.analyst} 
                                  onChange={(e) => updateProductRow(row.id, "analyst", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700">
                                  <Trash2 className="w-3.5 h-3.5 mx-auto" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 3: Reagents & Standard Solutions Prep Register (Portrait) */}
                  {selectedFormatId === "reagents-prep" && (
                    <div className="w-full">
                      <table className="w-full text-[9.5px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1.5 w-10">Sr.No.</th>
                            <th className="border border-black px-1.5 py-1.5 text-left">Chemical / Reagent Solution Name</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Target Norm.</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Actual Norm. / F</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Prep Date</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Expiry Date</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Prep By</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Std By</th>
                            <th className="border border-black px-1.5 py-1.5 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reagentRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.serial} 
                                  onChange={(e) => updateReagentRow(row.id, "serial", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input 
                                  value={row.reagentName} 
                                  onChange={(e) => updateReagentRow(row.id, "reagentName", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.normality} 
                                  onChange={(e) => updateReagentRow(row.id, "normality", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.factor} 
                                  onChange={(e) => updateReagentRow(row.id, "factor", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  type="date"
                                  value={row.prepDate} 
                                  onChange={(e) => updateReagentRow(row.id, "prepDate", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  type="date"
                                  value={row.expDate} 
                                  onChange={(e) => updateReagentRow(row.id, "expDate", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono text-red-700" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.preparedBy} 
                                  onChange={(e) => updateReagentRow(row.id, "preparedBy", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.standardizedBy} 
                                  onChange={(e) => updateReagentRow(row.id, "standardizedBy", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-semibold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700">
                                  <Trash2 className="w-3.5 h-3.5 mx-auto" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 4: Glassware Calibration & Verification Log (Portrait) */}
                  {selectedFormatId === "glassware-calib" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1.5 w-18">Glassware ID</th>
                            <th className="border border-black px-1.5 py-1.5 text-left">Glassware Type</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Nominal Vol (ml)</th>
                            <th className="border border-black px-1.5 py-1.5 w-14">Temp (°C)</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Dry Wt (g)</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Water Wt (g)</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Obs. Vol (ml)</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Error (ml)</th>
                            <th className="border border-black px-1.5 py-1.5 w-14">OK/Fail</th>
                            <th className="border border-black px-1.5 py-1.5 w-14">Checked By</th>
                            <th className="border border-black px-1.5 py-1.5 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {glasswareRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input 
                                  value={row.glasswareId} 
                                  onChange={(e) => updateGlasswareRow(row.id, "glasswareId", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input 
                                  value={row.type} 
                                  onChange={(e) => updateGlasswareRow(row.id, "type", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.nominalVol} 
                                  onChange={(e) => updateGlasswareRow(row.id, "nominalVol", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-semibold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.waterTemp} 
                                  onChange={(e) => updateGlasswareRow(row.id, "waterTemp", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono">
                                <input 
                                  value={row.emptyWt} 
                                  onChange={(e) => updateGlasswareRow(row.id, "emptyWt", e.target.value)} 
                                  className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono pr-1" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono">
                                <input 
                                  value={row.filledWt} 
                                  onChange={(e) => updateGlasswareRow(row.id, "filledWt", e.target.value)} 
                                  className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono pr-1" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.netVol} 
                                  onChange={(e) => updateGlasswareRow(row.id, "netVol", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono text-red-700">
                                <input 
                                  value={row.error} 
                                  onChange={(e) => updateGlasswareRow(row.id, "error", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono text-red-700 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.accepted} 
                                  onChange={(e) => updateGlasswareRow(row.id, "accepted", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold",
                                    row.accepted.toLowerCase() === "no" ? "text-red-700" : "text-green-700"
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.operator} 
                                  onChange={(e) => updateGlasswareRow(row.id, "operator", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700">
                                  <Trash2 className="w-3.5 h-3.5 mx-auto" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 5: Water Quality Analysis Log Sheet (Portrait) */}
                  {selectedFormatId === "water-testing" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1.5 text-left">Water Sample Source</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">pH</th>
                            <th className="border border-black px-1.5 py-1.5 w-24">Hardness (ppm)</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">TDS (ppm)</th>
                            <th className="border border-black px-1.5 py-1.5 w-24">Residual Cl (ppm)</th>
                            <th className="border border-black px-1.5 py-1.5 w-24">Alkalinity (ppm)</th>
                            <th className="border border-black px-1.5 py-1.5 w-24">Coliform / 100ml</th>
                            <th className="border border-black px-1.5 py-1.5 text-left">Remarks / Actions</th>
                            <th className="border border-black px-1.5 py-1.5 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {waterRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input 
                                  value={row.source} 
                                  onChange={(e) => updateWaterRow(row.id, "source", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.ph} 
                                  onChange={(e) => updateWaterRow(row.id, "ph", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.hardness} 
                                  onChange={(e) => updateWaterRow(row.id, "hardness", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.tds} 
                                  onChange={(e) => updateWaterRow(row.id, "tds", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.chlorine} 
                                  onChange={(e) => updateWaterRow(row.id, "chlorine", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold text-teal-800" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.alkalinity} 
                                  onChange={(e) => updateWaterRow(row.id, "alkalinity", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.coliform} 
                                  onChange={(e) => updateWaterRow(row.id, "coliform", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold",
                                    row.coliform.toLowerCase().includes("present") ? "text-red-700 font-bold" : "text-green-700"
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input 
                                  value={row.remarks} 
                                  onChange={(e) => updateWaterRow(row.id, "remarks", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 text-slate-700" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700">
                                  <Trash2 className="w-3.5 h-3.5 mx-auto" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 6: Microbiology Swab Testing Record (Landscape) */}
                  {selectedFormatId === "micro-swabs" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 w-24">Date & Shift</th>
                            <th className="border border-black px-1.5 py-1 text-left">Swab Area / Sampling Surface</th>
                            <th className="border border-black px-1.5 py-1 w-32">Sanitizer & Concentration</th>
                            <th className="border border-black px-1.5 py-1 w-24 text-center">SPC (CFU/cm²)</th>
                            <th className="border border-black px-1.5 py-1 w-24 text-center">Coliform Count</th>
                            <th className="border border-black px-1.5 py-1 w-24 text-center">Yeast & Mold</th>
                            <th className="border border-black px-1.5 py-1 w-20 text-center">Status</th>
                            <th className="border border-black px-1.5 py-1 w-20">Analyst</th>
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {swabRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.dateShift} 
                                  onChange={(e) => updateSwabRow(row.id, "dateShift", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input 
                                  value={row.area} 
                                  onChange={(e) => updateSwabRow(row.id, "area", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" 
                                />
                              </td>
                              <td className="border border-black p-0.5">
                                <input 
                                  value={row.sanitizer} 
                                  onChange={(e) => updateSwabRow(row.id, "sanitizer", e.target.value)} 
                                  className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 text-slate-700" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.spc} 
                                  onChange={(e) => updateSwabRow(row.id, "spc", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.coliform} 
                                  onChange={(e) => updateSwabRow(row.id, "coliform", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono",
                                    row.coliform.toLowerCase().includes("present") ? "text-red-700 font-bold" : "text-green-700"
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input 
                                  value={row.yeastMold} 
                                  onChange={(e) => updateSwabRow(row.id, "yeastMold", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.status} 
                                  onChange={(e) => updateSwabRow(row.id, "status", e.target.value)} 
                                  className={cn(
                                    "w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold",
                                    row.status.toLowerCase().includes("alert") ? "text-red-700" : "text-green-700"
                                  )} 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input 
                                  value={row.analyst} 
                                  onChange={(e) => updateSwabRow(row.id, "analyst", e.target.value)} 
                                  className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" 
                                />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700">
                                  <Trash2 className="w-3.5 h-3.5 mx-auto" />
                                </button>
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
                  <div className="flex justify-between items-center text-[8.5px] font-bold uppercase tracking-wider px-4">
                    <div className="text-center w-32 border-t border-black pt-1">
                      ANALYST SIGN (परीक्षक हस्ताक्षर)
                    </div>
                    <div className="text-center w-32 border-t border-black pt-1">
                      VERIFIED BY (सत्यापितकर्ता)
                    </div>
                    <div className="text-center w-32 border-t border-black pt-1">
                      QA MANAGER AUTHORIZED SIGN
                    </div>
                  </div>

                  {/* Brand Footer */}
                  <div className="border-t border-slate-300 pt-2 text-center text-[7.5px] text-slate-400 font-bold tracking-widest uppercase">
                    POWERED BY DAIRY HUB QUALITY SYSTEM
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
