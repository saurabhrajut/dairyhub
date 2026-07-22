"use client";

import React, { useState, useRef, useMemo } from "react";
import { 
  Printer, Download, FileText, Building2, MapPin, Calendar, 
  Plus, Trash2, CheckCircle, Info, Loader2, FileDown,
  ShieldCheck, ClipboardList, Beaker, FlaskConical, Droplet, TestTube, Scale,
  Columns, RotateCw
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
import { cn } from "@/lib/utils";

// Types for different formats
type FormatType = 
  | "raw-milk-tanker" 
  | "raw-milk-can" 
  | "raw-milk-silo" 
  | "finished-products" 
  | "lab-calibration" 
  | "chemical-reagent" 
  | "media-log" 
  | "sample-register-coa" 
  | "product-release" 
  | "water-testing" 
  | "micro-swabs"
  | "cip-validation"
  | "adulteration-strip"
  | "sensory-organoleptic"
  | "effluent-etp"
  | "packing-integrity"
  | "incubation-shelf-life"
  | "glass-brittle-audit"
  | "pest-control-hygiene"
  | "cip-sanitation-verification";

interface FormatInfo {
  id: FormatType;
  title: string;
  description: string;
  orientation: "portrait" | "landscape";
  icon: any;
}

const FORMATS_CATALOG: FormatInfo[] = [
  {
    id: "raw-milk-tanker",
    title: "Raw Milk Reception Log Sheet (Tankers)",
    description: "Quality control tracker for milk tankers receiving at dock.",
    orientation: "landscape",
    icon: TestTube
  },
  {
    id: "raw-milk-can",
    title: "Raw Milk Reception Log Sheet (Cans)",
    description: "Quality control tracker for milk cans/routes receiving at dock.",
    orientation: "landscape",
    icon: TestTube
  },
  {
    id: "raw-milk-silo",
    title: "Raw Milk Silo Storage Log Sheet",
    description: "Quality control and temperature tracker for raw milk storage silos.",
    orientation: "landscape",
    icon: TestTube
  },
  {
    id: "finished-products",
    title: "Finished Product Analysis Report",
    description: "Daily chemical & physical standards verification sheet for finished dairy products.",
    orientation: "landscape",
    icon: ShieldCheck
  },
  {
    id: "lab-calibration",
    title: "Laboratory Calibration & Equipment Log",
    description: "Accuracy check record for digital instruments, balances, and glassware.",
    orientation: "portrait",
    icon: Scale
  },
  {
    id: "chemical-reagent",
    title: "Chemical & Reagent Prep & Stock Log",
    description: "Log for chemical preparation, stock verification, standardization factor, and expiry.",
    orientation: "portrait",
    icon: Beaker
  },
  {
    id: "media-log",
    title: "Microbiology Culture Media Log Sheet",
    description: "Autoclave sterilization and prep log for microbiology agar and broth media.",
    orientation: "portrait",
    icon: FlaskConical
  },
  {
    id: "sample-register-coa",
    title: "Sample Register & COA Log",
    description: "Daily register of analysis results and Certificate of Analysis (COA) compliance checks.",
    orientation: "landscape",
    icon: ClipboardList
  },
  {
    id: "product-release",
    title: "Product Release Register",
    description: "Finished product batch release tracking sheet including chemical, micro, and sensory clearances.",
    orientation: "landscape",
    icon: CheckCircle
  },
  {
    id: "water-testing",
    title: "Water Quality Analysis Log Sheet",
    description: "Daily checks for pH, hardness, TDS, alkalinity, and residual chlorine in plant water systems.",
    orientation: "portrait",
    icon: Droplet
  },
  {
    id: "micro-swabs",
    title: "Microbiology Swab Testing Record",
    description: "Swab and environmental testing log for SPC, Coliform, Yeast & Mold in silos, packaging lines, and hands.",
    orientation: "landscape",
    icon: FlaskConical
  },
  {
    id: "cip-validation",
    title: "CIP Chemical & Wash Cycle Validation Register",
    description: "Tracking log for Caustic/Acid %, wash temps, flow rate, titration end-points, and rinse pH.",
    orientation: "landscape",
    icon: ClipboardList
  },
  {
    id: "adulteration-strip",
    title: "Milk Adulteration & Chemical Test Register",
    description: "Screening log for Urea, Starch, Detergent, Neutralizers, Glucose, H2O2, Salt, and Antibiotics.",
    orientation: "landscape",
    icon: Beaker
  },
  {
    id: "sensory-organoleptic",
    title: "Sensory & Organoleptic Evaluation Sheet",
    description: "Organoleptic panel rating for Flavor, Odor, Appearance, Texture, and Color score (1-10 scale).",
    orientation: "landscape",
    icon: CheckCircle
  },
  {
    id: "effluent-etp",
    title: "Effluent Treatment Plant (ETP) Wastewater Log",
    description: "Daily testing sheet for pH, BOD, COD, TSS, Oil & Grease, and treated water SPCB compliance.",
    orientation: "landscape",
    icon: Droplet
  },
  {
    id: "packing-integrity",
    title: "Pouch & Packaging Integrity Quality Sheet",
    description: "Inspection record for leak test (submerged 5 psi), seal strength, weight variation, and MRP legibility.",
    orientation: "portrait",
    icon: ShieldCheck
  },
  {
    id: "incubation-shelf-life",
    title: "Incubation & Shelf-Life Retention Register",
    description: "37°C & 4°C retention control sample monitoring log for gas formation, pH drop, and curdling.",
    orientation: "portrait",
    icon: Calendar
  },
  {
    id: "glass-brittle-audit",
    title: "Glass & Brittle Plastic Audit Register",
    description: "Physical audit log for lab glassware, windows, sight glasses, lamps, and hard plastic guards.",
    orientation: "portrait",
    icon: Scale
  },
  {
    id: "pest-control-hygiene",
    title: "Lab & Plant Pest Control & Hygiene Record",
    description: "Audit register for rodent bait stations, insect light traps (ILT), fly counts, and air hygiene.",
    orientation: "portrait",
    icon: Info
  },
  {
    id: "cip-sanitation-verification",
    title: "CIP Thermal & Chemical Sanitation Log",
    description: "Sanitizer concentration (Chlorine / PAA / 85°C Hot Water) and contact time validation sheet.",
    orientation: "landscape",
    icon: ShieldCheck
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
  
  const [selectedFormatId, setSelectedFormatId] = useState<FormatType>("raw-milk-tanker");
  const [isDownloading, setIsDownloading] = useState(false);

  // Initial States for Lab Formats Data
  const [rawMilkTankerRows, setRawMilkTankerRows] = useState([
    { id: 1, tankerNo: "HR-55-A-1234", source: "Banas Union", qty: "15000", temp: "4.2", acidity: "0.130", fat: "4.20", snf: "8.50", cob: "Negative", mbrt: "5.5", adulteration: "Nil", status: "Accepted", analyst: "Amit K." },
    { id: 2, tankerNo: "UP-16-T-8899", source: "Center-12 Raw", qty: "8500", temp: "5.5", acidity: "0.140", fat: "4.50", snf: "8.60", cob: "Negative", mbrt: "4.5", adulteration: "Nil", status: "Accepted", analyst: "Amit K." },
    { id: 3, tankerNo: "MH-12-Q-4567", source: "Saras Collection", qty: "12000", temp: "8.2", acidity: "0.180", fat: "3.80", snf: "8.10", cob: "Positive (COB)", mbrt: "1.5", adulteration: "Starch Trace", status: "Rejected", analyst: "Ritu S." }
  ]);

  const [rawMilkCanRows, setRawMilkCanRows] = useState([
    { id: 1, route: "R-102 (Meerut)", totalCans: "45", acceptedCans: "42", rejectedCans: "3", temp: "8.5", acidity: "0.180", fat: "3.80", snf: "8.10", cob: "Positive", adulteration: "Sour Milk", status: "Rejected Cans", analyst: "Ritu S." },
    { id: 2, route: "R-105 (Hapur)", totalCans: "80", acceptedCans: "80", rejectedCans: "0", temp: "6.2", acidity: "0.145", fat: "4.30", snf: "8.45", cob: "Negative", adulteration: "Nil", status: "Accepted", analyst: "Amit K." },
    { id: 3, route: "R-108 (Baghpat)", totalCans: "120", acceptedCans: "118", rejectedCans: "2", temp: "5.8", acidity: "0.140", fat: "4.50", snf: "8.55", cob: "Negative", adulteration: "Nil", status: "Accepted", analyst: "Amit K." }
  ]);

  const [rawMilkSiloRows, setRawMilkSiloRows] = useState([
    { id: 1, siloNo: "SILO-01", siloPosition: "Zone A - North", openingBal: "12000", receivedQty: "15000", source: "Tanker GP-12", temp: "4.0", acidity: "0.135", fat: "4.15", snf: "8.48", closingBal: "27000", remarks: "Rec. from Banas Tanker" },
    { id: 2, siloNo: "SILO-02", siloPosition: "Zone A - South", openingBal: "45000", receivedQty: "0", source: "-", temp: "4.2", acidity: "0.140", fat: "4.25", snf: "8.52", closingBal: "35000", remarks: "10000L sent to pasteurizer" },
    { id: 3, siloNo: "SILO-03", siloPosition: "Zone B - East", openingBal: "0", receivedQty: "12000", source: "Tanker GP-14", temp: "3.8", acidity: "0.130", fat: "4.40", snf: "8.60", closingBal: "12000", remarks: "CIP done, fresh fill" }
  ]);

  const [productRows, setProductRows] = useState([
    { id: 1, batchNo: "B-FCM-101", productName: "Full Cream Milk", packSize: "500 ml Pouch", fat: "6.05", snf: "9.02", moisture: "-", acidity: "0.135", phosphatase: "Negative", coliform: "Nil", organoleptic: "Excellent", analyst: "Dr. Verma" },
    { id: 2, batchNo: "B-PNR-05", productName: "Fresh Paneer", packSize: "200 g Pack", fat: "50.5 (DB)", snf: "-", moisture: "58.2", acidity: "0.200", phosphatase: "-", coliform: "Nil", organoleptic: "Good", analyst: "Amit K." },
    { id: 3, batchNo: "B-GHEE-12", productName: "Cow Ghee", packSize: "1 L Carton", fat: "99.8", snf: "-", moisture: "0.15", acidity: "0.12 (FFA)", phosphatase: "-", coliform: "Nil", organoleptic: "Pleasant", analyst: "Dr. Verma" }
  ]);

  const [labCalibrationRows, setLabCalibrationRows] = useState([
    { id: 1, equipId: "EQ-PH-02", type: "Digital pH Meter", nominalVol: "Buffer 4.0 & 7.0", waterTemp: "25.0", emptyWt: "7.00", filledWt: "7.03", netVol: "+0.03", error: "OK", accepted: "Yes", operator: "Amit K." },
    { id: 2, glasswareId: "G-PIP-01", type: "Milk Pipette", nominalVol: "10.75", waterTemp: "25.0", emptyWt: "18.250", filledWt: "28.930", netVol: "10.712", error: "-0.038", accepted: "Yes", operator: "Ritu S." },
    { id: 3, equipId: "EQ-BAL-01", type: "Analytical Balance", nominalVol: "Std Weight 100g", waterTemp: "22.5", emptyWt: "100.000", filledWt: "100.002", netVol: "+0.002", error: "OK", accepted: "Yes", operator: "Dr. Verma" }
  ]);

  const [chemicalReagentRows, setChemicalReagentRows] = useState([
    { id: 1, serial: "1", reagentName: "0.1N Sodium Hydroxide (NaOH)", normality: "0.1 N", factor: "0.1005 N", prepDate: "2026-07-01", expDate: "2026-07-31", preparedBy: "Amit K.", standardizedBy: "Dr. Verma", stock: "2.5 L", remarks: "Used for milk acidity" },
    { id: 2, serial: "2", reagentName: "0.1N Hydrochloric Acid (HCl)", normality: "0.1 N", factor: "0.0998 N", prepDate: "2026-07-05", expDate: "2026-10-05", preparedBy: "Amit K.", standardizedBy: "Dr. Verma", stock: "5.0 L", remarks: "Used for cleaning audits" },
    { id: 3, serial: "3", reagentName: "Starch Indicator Solution (1%)", normality: "1.0 %", factor: "1.00 %", prepDate: "2026-07-10", expDate: "2026-07-17", preparedBy: "Ritu S.", standardizedBy: "Amit K.", stock: "500 ml", remarks: "Fresh prep weekly" }
  ]);

  const [mediaLogRows, setMediaLogRows] = useState([
    { id: 1, date: "2026-07-14", mediaName: "Standard Plate Count Agar (SPCA)", batchNo: "M-SPC-54", qty: "500", temp: "121", pressure: "15", sterility: "No Growth", ph: "7.0", expDate: "2026-07-21", preparedBy: "Dr. Verma" },
    { id: 2, date: "2026-07-15", mediaName: "Violet Red Bile Agar (VRBA)", batchNo: "M-VRB-23", qty: "300", temp: "121", pressure: "15", sterility: "No Growth", ph: "7.4", expDate: "2026-07-18", preparedBy: "Amit K." }
  ]);

  const [sampleRegisterRows, setSampleRegisterRows] = useState([
    { id: 1, sampleId: "S-FCM-782", dateTime: "2026-07-18 09:30", sampleName: "Full Cream Milk", source: "Batch FCM-101", chemical: "Fat:6.05%, SNF:9.02%", micro: "SPC:15 CFU/ml", status: "Pass", coaRef: "COA-782", analyst: "Dr. Verma" },
    { id: 2, sampleId: "S-PNR-783", dateTime: "2026-07-18 10:15", sampleName: "Paneer", source: "Batch PNR-05", chemical: "Mst:58.2%, Fat:50.5% DB", micro: "Coliform:Nil", status: "Pass", coaRef: "COA-783", analyst: "Amit K." }
  ]);

  const [productReleaseRows, setProductReleaseRows] = useState([
    { id: 1, date: "2026-07-18", productName: "Full Cream Milk Pouch", batchNo: "B-FCM-101", mfgDate: "2026-07-18", qty: "9960 Pouches", chemical: "Clear", micro: "Clear", packing: "OK", status: "Released", analyst: "Dr. Verma" },
    { id: 2, date: "2026-07-18", productName: "Fresh Paneer", batchNo: "B-PNR-05", mfgDate: "2026-07-18", qty: "760 Packs", chemical: "Clear", micro: "Clear", packing: "OK", status: "Released", analyst: "Dr. Verma" }
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

  const [cipValidationRows, setCipValidationRows] = useState([
    { id: 1, circuit: "Pasteurizer #01 Line", washTime: "08:30 - 09:15", lyeConc: "1.50 %", lyeTemp: "78°C", acidConc: "0.85 %", acidTemp: "65°C", flowRate: "12,000 LPH", titrationVol: "15.0 ml NaOH", finalPh: "7.0 (Neutral)", status: "Validated", analyst: "Rahul V." },
    { id: 2, circuit: "Raw Milk Silo #03", washTime: "10:00 - 10:45", lyeConc: "1.60 %", lyeTemp: "80°C", acidConc: "0.90 %", acidTemp: "68°C", flowRate: "15,000 LPH", titrationVol: "16.0 ml NaOH", finalPh: "7.1 (Neutral)", status: "Validated", analyst: "Rahul V." }
  ]);

  const [adulterationRows, setAdulterationRows] = useState([
    { id: 1, sampleSource: "Tanker HR-55-1234", urea: "Negative", starch: "Negative", glucose: "Negative", detergent: "Negative", neutralizer: "Negative", h2o2: "Negative", nitrate: "Negative", salt: "Normal", antibiotic: "Negative", status: "Pass / Authentic", analyst: "Dr. Verma" },
    { id: 2, sampleSource: "Route-102 Cans", urea: "Trace Positive", starch: "Negative", glucose: "Negative", detergent: "Negative", neutralizer: "Positive (Carbonates)", h2o2: "Negative", nitrate: "Negative", salt: "High (0.28%)", antibiotic: "Negative", status: "REJECTED (Adulterated)", analyst: "Ritu S." }
  ]);

  const [sensoryRows, setSensoryRows] = useState([
    { id: 1, sampleName: "Pasteurized FCM Pouch", batchNo: "B-FCM-101", temp: "4°C", flavor: "Clean, Sweet Milk (9/10)", odor: "Fresh (9/10)", color: "Normal White (10/10)", texture: "Smooth (10/10)", overallScore: "9.5 / 10", decision: "Approved", panelist: "Panel A (3 Members)" },
    { id: 2, sampleName: "Fresh Cow Ghee", batchNo: "B-GHEE-12", temp: "25°C", flavor: "Pleasant Granular Nutty (10/10)", odor: "Aromatic (10/10)", color: "Golden Yellow (10/10)", texture: "Uniform Granular (9/10)", overallScore: "9.8 / 10", decision: "Approved", panelist: "Panel B (2 Members)" }
  ]);

  const [etpRows, setEtpRows] = useState([
    { id: 1, dateShift: "2026-07-18 A", sampleLocation: "Equalization Tank Inflow", ph: "5.8", bod: "1,200 mg/L", cod: "2,400 mg/L", tss: "650 mg/L", oilGrease: "85 mg/L", svi: "-", dischargeStatus: "Untreated Raw", analyst: "M. Sharma" },
    { id: 2, dateShift: "2026-07-18 A", sampleLocation: "Final Treated Discharge", ph: "7.45", bod: "18 mg/L", cod: "110 mg/L", tss: "32 mg/L", oilGrease: "4 mg/L", svi: "95 ml/g", dischargeStatus: "Compliant (SPCB Norms)", analyst: "M. Sharma" }
  ]);

  const [packingRows, setPackingRows] = useState([
    { id: 1, lineNo: "Pouch Filler #01", product: "Standard Milk 500ml", leakTest: "Pass (Submerged Water 5 psi)", sealStrength: "Pass (Good Fusion)", weightVar: "502.5 g (Within ±2g)", codePrint: "Clear Legible MRP/Date", status: "Approved", inspector: "K. Singh" },
    { id: 2, lineNo: "Dahi Cup Filler #02", product: "Plain Dahi 200g Cup", leakTest: "Pass (Foil Heat Seal Tight)", sealStrength: "Pass (No Peeling)", weightVar: "201.0 g (Within ±1g)", codePrint: "Clear Legible B.No", status: "Approved", inspector: "K. Singh" }
  ]);

  const [incubationRows, setIncubationRows] = useState([
    { id: 1, sampleName: "Full Cream Milk Pouch", batchNo: "B-FCM-101", storeTemp: "37°C Incubation", incubationDays: "48 Hours", phDrop: "6.68 ➔ 6.65 (Stable)", gasCurd: "No Gas / No Curd", tasteOdor: "Normal", shelfLifeStatus: "Pass (Completely Stable)", analyst: "Dr. Verma" },
    { id: 2, sampleName: "Flavored Milk Bottle", batchNo: "B-FMB-04", storeTemp: "37°C Incubation", incubationDays: "7 Days", phDrop: "6.55 ➔ 6.52 (Stable)", gasCurd: "No Gas / No Curd", tasteOdor: "Sweet Cardamom", shelfLifeStatus: "Pass (Stable 180 Days)", analyst: "Dr. Verma" }
  ]);

  const [glassAuditRows, setGlassAuditRows] = useState([
    { id: 1, area: "QC Wet Chemistry Lab", item: "Glass Burettes & Pipettes", condition: "Intact / No Cracks", protectiveShield: "Installed", actionRequired: "None", status: "Pass", auditor: "S. Patel" },
    { id: 2, area: "Processing Plant Floor", item: "Silo Sight Glass Window", condition: "Intact", protectiveShield: "Polycarbonate Guard OK", actionRequired: "None", status: "Pass", auditor: "S. Patel" }
  ]);

  const [pestControlRows, setPestControlRows] = useState([
    { id: 1, location: "Raw Milk Dock (Bait #01)", trapType: "Rodent Bait Station", inspectionResult: "Intact / No Bait Taken", fliesCount: "Nil", actionTaken: "Re-baited", status: "Satisfactory", auditor: "Pest Officer" },
    { id: 2, location: "Packaging Hall (Insect Trap #03)", trapType: "UV Insect Light Trap (ILT)", inspectionResult: "Cleaned Catch Tray", fliesCount: "4 Houseflies", actionTaken: "Tray Cleaned & Sticky Pad Changed", status: "Satisfactory", auditor: "Pest Officer" }
  ]);

  const [cipSanitationRows, setCipSanitationRows] = useState([
    { id: 1, equipment: "Milk Pasteurizer PHE", sanitizerType: "Hot Water 85°C", contactTime: "20 Mins", concPpm: "85°C Temp", swabRes: "SPC < 10 CFU", status: "Sanitized", analyst: "Rahul V." },
    { id: 2, equipment: "Siloline Piping", sanitizerType: "Peracetic Acid (PAA)", contactTime: "15 Mins", concPpm: "150 PPM", swabRes: "Coliform Nil", status: "Sanitized", analyst: "Rahul V." }
  ]);

  // Find active format info
  const selectedFormat = useMemo(() => {
    return FORMATS_CATALOG.find(f => f.id === selectedFormatId)!;
  }, [selectedFormatId]);

  // Dynamic custom columns & orientation state
  const [customColumnsMap, setCustomColumnsMap] = useState<Record<string, string[]>>({});
  const [customCellValues, setCustomCellValues] = useState<Record<string, Record<string | number, Record<string, string>>>>({});
  const [orientationMap, setOrientationMap] = useState<Record<string, "portrait" | "landscape">>({});

  const currentOrientation = orientationMap[selectedFormatId] || selectedFormat?.orientation || "portrait";

  const toggleOrientation = () => {
    const next = currentOrientation === "landscape" ? "portrait" : "landscape";
    setOrientationMap(prev => ({ ...prev, [selectedFormatId]: next }));
    toast({
      title: "Page Orientation Changed",
      description: `Layout set to ${next.toUpperCase()} A4 mode.`,
    });
  };

  const addColumn = () => {
    const existing = customColumnsMap[selectedFormatId] || [];
    const defaultName = `Custom Col ${existing.length + 1}`;
    const inputName = window.prompt("Enter new Column Header Name:", defaultName);
    if (inputName !== null && inputName.trim() !== "") {
      const colName = inputName.trim();
      setCustomColumnsMap(prev => ({
        ...prev,
        [selectedFormatId]: [...(prev[selectedFormatId] || []), colName]
      }));
      toast({
        title: "Custom Column Added",
        description: `Added column "${colName}".`,
      });
    }
  };

  const removeColumn = (colName: string) => {
    setCustomColumnsMap(prev => ({
      ...prev,
      [selectedFormatId]: (prev[selectedFormatId] || []).filter(c => c !== colName)
    }));
  };

  const updateCustomCell = (rowId: string | number, colName: string, value: string) => {
    setCustomCellValues(prev => ({
      ...prev,
      [selectedFormatId]: {
        ...(prev[selectedFormatId] || {}),
        [rowId]: {
          ...((prev[selectedFormatId] || {})[rowId] || {}),
          [colName]: value
        }
      }
    }));
  };

  const getCustomCell = (rowId: string | number, colName: string) => {
    return customCellValues[selectedFormatId]?.[rowId]?.[colName] || "";
  };

  const renderCustomHeaderCols = () => {
    const cols = customColumnsMap[selectedFormatId] || [];
    return cols.map((colName, cIdx) => (
      <th key={`custom-col-head-${cIdx}`} className="border border-black px-1.5 py-1 text-center font-bold min-w-[80px]">
        <div className="flex items-center justify-between gap-1">
          <span className="truncate">{colName}</span>
          <button
            type="button"
            onClick={() => removeColumn(colName)}
            className="text-red-500 hover:text-red-700 font-extrabold print:hidden text-[9px] px-1"
            title="Remove Column"
          >
            ×
          </button>
        </div>
      </th>
    ));
  };

  const renderCustomBodyCells = (rowId: number | string) => {
    const cols = customColumnsMap[selectedFormatId] || [];
    return cols.map((colName, cIdx) => (
      <td key={`custom-col-cell-${cIdx}`} className="border border-black p-0.5 text-center min-w-[80px]">
        <input
          type="text"
          value={getCustomCell(rowId, colName)}
          onChange={(e) => updateCustomCell(rowId, colName, e.target.value)}
          className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 focus:outline-none"
          placeholder="-"
        />
      </td>
    ));
  };

  // Actions
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (!printAreaRef.current) return;
    setIsDownloading(true);
    try {
      printAreaRef.current.classList.add("is-exporting-pdf");
      const canvas = await html2canvas(printAreaRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: printAreaRef.current.scrollWidth || 1200,
        windowHeight: printAreaRef.current.scrollHeight || 1600,
        scrollX: 0,
        scrollY: 0,
      });
      printAreaRef.current.classList.remove("is-exporting-pdf");
      const imgData = canvas.toDataURL("image/png");
      
      const isLandscape = currentOrientation === "landscape";
      const pdf = new jsPDF({ 
        orientation: isLandscape ? "l" : "p", 
        unit: "mm", 
        format: "a4" 
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      await savePdfFile(pdf, `lab_${selectedFormat.id}_${currentDate}.pdf`);
      
      toast({
        title: "PDF Format Generated",
        description: "Your printable PDF lab sheet is ready.",
      });
    } catch (e) {
      if (printAreaRef.current) {
        printAreaRef.current.classList.remove("is-exporting-pdf");
      }
      console.error(e);
      toast({
        title: "Export Failed",
        description: "Failed to generate PDF format.",
        variant: "destructive",
      });
    }
    setIsDownloading(false);
  };

  // Row update handlers
  const updateRawMilkTankerRow = (id: number, field: string, val: string) => {
    setRawMilkTankerRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateRawMilkCanRow = (id: number, field: string, val: string) => {
    setRawMilkCanRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateRawMilkSiloRow = (id: number, field: string, val: string) => {
    setRawMilkSiloRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateProductRow = (id: number, field: string, val: string) => {
    setProductRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateLabCalibrationRow = (id: number, field: string, val: string) => {
    setLabCalibrationRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateChemicalReagentRow = (id: number, field: string, val: string) => {
    setChemicalReagentRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateMediaLogRow = (id: number, field: string, val: string) => {
    setMediaLogRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateSampleRegisterRow = (id: number, field: string, val: string) => {
    setSampleRegisterRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateProductReleaseRow = (id: number, field: string, val: string) => {
    setProductReleaseRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateWaterRow = (id: number, field: string, val: string) => {
    setWaterRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateSwabRow = (id: number, field: string, val: string) => {
    setSwabRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateCipValidationRow = (id: number, field: string, val: string) => {
    setCipValidationRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateAdulterationRow = (id: number, field: string, val: string) => {
    setAdulterationRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateSensoryRow = (id: number, field: string, val: string) => {
    setSensoryRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateEtpRow = (id: number, field: string, val: string) => {
    setEtpRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updatePackingRow = (id: number, field: string, val: string) => {
    setPackingRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateIncubationRow = (id: number, field: string, val: string) => {
    setIncubationRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateGlassAuditRow = (id: number, field: string, val: string) => {
    setGlassAuditRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updatePestControlRow = (id: number, field: string, val: string) => {
    setPestControlRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const updateCipSanitationRow = (id: number, field: string, val: string) => {
    setCipSanitationRows(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  // Add / Delete row utilities
  const addRow = () => {
    switch (selectedFormatId) {
      case "raw-milk-tanker":
        setRawMilkTankerRows(prev => [...prev, { id: Date.now(), tankerNo: "", source: "", qty: "", temp: "", acidity: "", fat: "", snf: "", cob: "Negative", mbrt: "", adulteration: "Nil", status: "Accepted", analyst: "" }]);
        break;
      case "raw-milk-can":
        setRawMilkCanRows(prev => [...prev, { id: Date.now(), route: "", totalCans: "", acceptedCans: "", rejectedCans: "", temp: "", acidity: "", fat: "", snf: "", cob: "Negative", adulteration: "Nil", status: "Accepted", analyst: "" }]);
        break;
      case "raw-milk-silo":
        setRawMilkSiloRows(prev => [...prev, { id: Date.now(), siloNo: "", siloPosition: "", openingBal: "", receivedQty: "", source: "", temp: "", acidity: "", fat: "", snf: "", closingBal: "", remarks: "" }]);
        break;
      case "finished-products":
        setProductRows(prev => [...prev, { id: Date.now(), batchNo: "", productName: "", packSize: "", fat: "", snf: "", moisture: "", acidity: "", phosphatase: "", coliform: "", organoleptic: "", analyst: "" }]);
        break;
      case "lab-calibration":
        setLabCalibrationRows(prev => [...prev, { id: Date.now(), equipId: "", type: "", nominalVol: "", waterTemp: "", emptyWt: "", filledWt: "", netVol: "", error: "", accepted: "Yes", operator: "" }]);
        break;
      case "chemical-reagent":
        setChemicalReagentRows(prev => [...prev, { id: Date.now(), serial: (prev.length + 1).toString(), reagentName: "", normality: "", factor: "", prepDate: currentDate, expDate: "", preparedBy: "", standardizedBy: "", stock: "", remarks: "" }]);
        break;
      case "media-log":
        setMediaLogRows(prev => [...prev, { id: Date.now(), date: currentDate, mediaName: "", batchNo: "", qty: "", temp: "", pressure: "", sterility: "No Growth", ph: "", expDate: "", preparedBy: "" }]);
        break;
      case "sample-register-coa":
        setSampleRegisterRows(prev => [...prev, { id: Date.now(), sampleId: "", dateTime: "", sampleName: "", source: "", chemical: "", micro: "", status: "Pass", coaRef: "", analyst: "" }]);
        break;
      case "product-release":
        setProductReleaseRows(prev => [...prev, { id: Date.now(), date: currentDate, productName: "", batchNo: "", mfgDate: currentDate, qty: "", chemical: "Clear", micro: "Clear", packing: "OK", status: "Released", analyst: "" }]);
        break;
      case "water-testing":
        setWaterRows(prev => [...prev, { id: Date.now(), source: "", ph: "", hardness: "", tds: "", chlorine: "", alkalinity: "", coliform: "Absent", remarks: "" }]);
        break;
      case "micro-swabs":
        setSwabRows(prev => [...prev, { id: Date.now(), dateShift: currentDate, area: "", sanitizer: "", spc: "", coliform: "Absent", yeastMold: "Absent", status: "OK", analyst: "" }]);
        break;
      case "cip-validation":
        setCipValidationRows(prev => [...prev, { id: Date.now(), circuit: "", washTime: "", lyeConc: "", lyeTemp: "", acidConc: "", acidTemp: "", flowRate: "", titrationVol: "", finalPh: "7.0", status: "Validated", analyst: "" }]);
        break;
      case "adulteration-strip":
        setAdulterationRows(prev => [...prev, { id: Date.now(), sampleSource: "", urea: "Negative", starch: "Negative", glucose: "Negative", detergent: "Negative", neutralizer: "Negative", h2o2: "Negative", nitrate: "Negative", salt: "Normal", antibiotic: "Negative", status: "Pass / Authentic", analyst: "" }]);
        break;
      case "sensory-organoleptic":
        setSensoryRows(prev => [...prev, { id: Date.now(), sampleName: "", batchNo: "", temp: "", flavor: "", odor: "", color: "", texture: "", overallScore: "9.0 / 10", decision: "Approved", panelist: "" }]);
        break;
      case "effluent-etp":
        setEtpRows(prev => [...prev, { id: Date.now(), dateShift: currentDate, sampleLocation: "", ph: "", bod: "", cod: "", tss: "", oilGrease: "", svi: "", dischargeStatus: "Compliant", analyst: "" }]);
        break;
      case "packing-integrity":
        setPackingRows(prev => [...prev, { id: Date.now(), lineNo: "", product: "", leakTest: "Pass", sealStrength: "Pass", weightVar: "", codePrint: "Clear", status: "Approved", inspector: "" }]);
        break;
      case "incubation-shelf-life":
        setIncubationRows(prev => [...prev, { id: Date.now(), sampleName: "", batchNo: "", storeTemp: "37°C", incubationDays: "48 Hours", phDrop: "Stable", gasCurd: "No Gas", tasteOdor: "Normal", shelfLifeStatus: "Pass", analyst: "" }]);
        break;
      case "glass-brittle-audit":
        setGlassAuditRows(prev => [...prev, { id: Date.now(), area: "", item: "", condition: "Intact", protectiveShield: "Installed", actionRequired: "None", status: "Pass", auditor: "" }]);
        break;
      case "pest-control-hygiene":
        setPestControlRows(prev => [...prev, { id: Date.now(), location: "", trapType: "", inspectionResult: "Intact", fliesCount: "0", actionTaken: "Cleaned", status: "Satisfactory", auditor: "" }]);
        break;
      case "cip-sanitation-verification":
        setCipSanitationRows(prev => [...prev, { id: Date.now(), equipment: "", sanitizerType: "", contactTime: "", concPpm: "", swabRes: "Pass", status: "Sanitized", analyst: "" }]);
        break;
    }
  };

  const deleteRow = (id: number) => {
    switch (selectedFormatId) {
      case "raw-milk-tanker":
        if (rawMilkTankerRows.length > 1) setRawMilkTankerRows(prev => prev.filter(r => r.id !== id));
        break;
      case "raw-milk-can":
        if (rawMilkCanRows.length > 1) setRawMilkCanRows(prev => prev.filter(r => r.id !== id));
        break;
      case "raw-milk-silo":
        if (rawMilkSiloRows.length > 1) setRawMilkSiloRows(prev => prev.filter(r => r.id !== id));
        break;
      case "finished-products":
        if (productRows.length > 1) setProductRows(prev => prev.filter(r => r.id !== id));
        break;
      case "lab-calibration":
        if (labCalibrationRows.length > 1) setLabCalibrationRows(prev => prev.filter(r => r.id !== id));
        break;
      case "chemical-reagent":
        if (chemicalReagentRows.length > 1) setChemicalReagentRows(prev => prev.filter(r => r.id !== id).map((r, i) => ({ ...r, serial: (i + 1).toString() })));
        break;
      case "media-log":
        if (mediaLogRows.length > 1) setMediaLogRows(prev => prev.filter(r => r.id !== id));
        break;
      case "sample-register-coa":
        if (sampleRegisterRows.length > 1) setSampleRegisterRows(prev => prev.filter(r => r.id !== id));
        break;
      case "product-release":
        if (productReleaseRows.length > 1) setProductReleaseRows(prev => prev.filter(r => r.id !== id));
        break;
      case "water-testing":
        if (waterRows.length > 1) setWaterRows(prev => prev.filter(r => r.id !== id));
        break;
      case "micro-swabs":
        if (swabRows.length > 1) setSwabRows(prev => prev.filter(r => r.id !== id));
        break;
      case "cip-validation":
        if (cipValidationRows.length > 1) setCipValidationRows(prev => prev.filter(r => r.id !== id));
        break;
      case "adulteration-strip":
        if (adulterationRows.length > 1) setAdulterationRows(prev => prev.filter(r => r.id !== id));
        break;
      case "sensory-organoleptic":
        if (sensoryRows.length > 1) setSensoryRows(prev => prev.filter(r => r.id !== id));
        break;
      case "effluent-etp":
        if (etpRows.length > 1) setEtpRows(prev => prev.filter(r => r.id !== id));
        break;
      case "packing-integrity":
        if (packingRows.length > 1) setPackingRows(prev => prev.filter(r => r.id !== id));
        break;
      case "incubation-shelf-life":
        if (incubationRows.length > 1) setIncubationRows(prev => prev.filter(r => r.id !== id));
        break;
      case "glass-brittle-audit":
        if (glassAuditRows.length > 1) setGlassAuditRows(prev => prev.filter(r => r.id !== id));
        break;
      case "pest-control-hygiene":
        if (pestControlRows.length > 1) setPestControlRows(prev => prev.filter(r => r.id !== id));
        break;
      case "cip-sanitation-verification":
        if (cipSanitationRows.length > 1) setCipSanitationRows(prev => prev.filter(r => r.id !== id));
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
                Dairy Laboratory Formats & Log Sheets
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
                1. Lab Info & Configuration
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
                2. Choose Lab Format
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
          <div className="flex flex-wrap justify-between items-center bg-slate-100 p-3 rounded-xl border border-slate-200 gap-2 print:hidden">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-teal-100 text-teal-850 font-bold text-[10px] uppercase">
                {currentOrientation} A4
              </Badge>
              <span className="hidden sm:inline text-[11px] text-slate-500 font-semibold italic">Edit values directly in the tables below!</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={addRow} className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex gap-1">
                <Plus className="w-3.5 h-3.5" /> Add Row
              </Button>
              <Button size="sm" onClick={addColumn} variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50 font-bold text-xs flex gap-1">
                <Columns className="w-3.5 h-3.5" /> Add Column
              </Button>
              <Button size="sm" onClick={toggleOrientation} variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs flex gap-1">
                <RotateCw className="w-3.5 h-3.5" /> {currentOrientation === "landscape" ? "A4 Landscape" : "A4 Portrait"}
              </Button>
              <Button size="sm" onClick={handlePrint} className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex gap-1">
                <Printer className="w-4 h-4" /> Print
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
                currentOrientation === "landscape" 
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
                    </h2>
                  </div>

                  {/* Meta Details Row */}
                  <div className="grid grid-cols-3 border border-black p-2 bg-slate-50 text-[10px] font-bold gap-4">
                    <div>DATE: <span className="font-normal border-b border-black border-dotted ml-1">{currentDate}</span></div>
                    <div>LAB IN-CHARGE: <span className="font-normal border-b border-black border-dotted ml-1">_________________</span></div>
                    <div>DOC REF NO: <span className="font-normal border-b border-black border-dotted ml-1">QA-LAB-{selectedFormat.id.toUpperCase()}-2026</span></div>
                  </div>
                </div>

                {/* 2. Format Specific Contents */}
                <div className="flex-grow pt-2">

                  {/* CASE 1: Raw Milk Reception Log Sheet - Tankers (Landscape) */}
                  {selectedFormatId === "raw-milk-tanker" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Tanker No.</th>
                            <th className="border border-black px-1.5 py-1">Source / Supplier</th>
                            <th className="border border-black px-1.5 py-1 w-16">Qty (L)</th>
                            <th className="border border-black px-1.5 py-1 w-12">Temp (°C)</th>
                            <th className="border border-black px-1.5 py-1 w-14">Acidity (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">Fat (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">SNF (%)</th>
                            <th className="border border-black px-1.5 py-1 w-16">COB Test</th>
                            <th className="border border-black px-1.5 py-1 w-14">MBRT (hr)</th>
                            <th className="border border-black px-1.5 py-1 w-20">Adulteration</th>
                            <th className="border border-black px-1.5 py-1 w-16">Status</th>
                            <th className="border border-black px-1.5 py-1 w-16">Analyst</th>
                            {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rawMilkTankerRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.tankerNo} onChange={(e) => updateRawMilkTankerRow(row.id, "tankerNo", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5">
                                <input value={row.source} onChange={(e) => updateRawMilkTankerRow(row.id, "source", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono">
                                <input type="number" value={row.qty} onChange={(e) => updateRawMilkTankerRow(row.id, "qty", e.target.value)} className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="number" step="0.1" value={row.temp} onChange={(e) => updateRawMilkTankerRow(row.id, "temp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="number" step="0.005" value={row.acidity} onChange={(e) => updateRawMilkTankerRow(row.id, "acidity", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input type="number" step="0.1" value={row.fat} onChange={(e) => updateRawMilkTankerRow(row.id, "fat", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input type="number" step="0.1" value={row.snf} onChange={(e) => updateRawMilkTankerRow(row.id, "snf", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.cob} onChange={(e) => updateRawMilkTankerRow(row.id, "cob", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold", row.cob.toLowerCase().includes("positive") ? "text-red-700" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.mbrt} onChange={(e) => updateRawMilkTankerRow(row.id, "mbrt", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.adulteration} onChange={(e) => updateRawMilkTankerRow(row.id, "adulteration", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0", row.adulteration !== "Nil" && row.adulteration !== "" ? "text-orange-700 font-bold" : "")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateRawMilkTankerRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("reject") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateRawMilkTankerRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              {renderCustomBodyCells(row.id)}
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-slate-50 font-bold text-black border-t-2 border-black">
                            <td colSpan={2} className="border border-black px-1.5 py-1 text-left uppercase">Total Received (Tankers)</td>
                            <td className="border border-black px-1.5 py-1 text-right font-black">{rawMilkTankerRows.reduce((s, r) => s + (parseFloat(r.qty) || 0), 0).toLocaleString()} L</td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">{(rawMilkTankerRows.reduce((s, r) => s + (parseFloat(r.temp) || 0), 0) / rawMilkTankerRows.length || 0).toFixed(1)}°C</td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">{(rawMilkTankerRows.reduce((s, r) => s + (parseFloat(r.acidity) || 0), 0) / rawMilkTankerRows.length || 0).toFixed(3)}%</td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">{(rawMilkTankerRows.reduce((s, r) => s + (parseFloat(r.fat) || 0), 0) / rawMilkTankerRows.length || 0).toFixed(2)}%</td>
                            <td className="border border-black px-1.5 py-1 text-center font-mono">{(rawMilkTankerRows.reduce((s, r) => s + (parseFloat(r.snf) || 0), 0) / rawMilkTankerRows.length || 0).toFixed(2)}%</td>
                            <td colSpan={6} className="border border-black px-1.5 py-1 bg-slate-100"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 2: Raw Milk Reception Log Sheet - Cans (Landscape) */}
                  {selectedFormatId === "raw-milk-can" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Route / Collection Center</th>
                            <th className="border border-black px-1.5 py-1 w-14">Total Cans</th>
                            <th className="border border-black px-1.5 py-1 w-14">Acc. Cans</th>
                            <th className="border border-black px-1.5 py-1 w-14">Rej. Cans</th>
                            <th className="border border-black px-1.5 py-1 w-12">Temp (°C)</th>
                            <th className="border border-black px-1.5 py-1 w-14">Acidity (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">Fat (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">SNF (%)</th>
                            <th className="border border-black px-1.5 py-1 w-16">COB Test</th>
                            <th className="border border-black px-1.5 py-1 w-20">Adulteration</th>
                            <th className="border border-black px-1.5 py-1 w-16">Status</th>
                            <th className="border border-black px-1.5 py-1 w-16">Analyst</th>
                            {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rawMilkCanRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.route} onChange={(e) => updateRawMilkCanRow(row.id, "route", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.totalCans} onChange={(e) => updateRawMilkCanRow(row.id, "totalCans", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono text-green-700">
                                <input value={row.acceptedCans} onChange={(e) => updateRawMilkCanRow(row.id, "acceptedCans", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono text-green-700 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono text-red-700">
                                <input value={row.rejectedCans} onChange={(e) => updateRawMilkCanRow(row.id, "rejectedCans", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono text-red-700 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="number" step="0.1" value={row.temp} onChange={(e) => updateRawMilkCanRow(row.id, "temp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="number" step="0.005" value={row.acidity} onChange={(e) => updateRawMilkCanRow(row.id, "acidity", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input type="number" step="0.1" value={row.fat} onChange={(e) => updateRawMilkCanRow(row.id, "fat", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input type="number" step="0.1" value={row.snf} onChange={(e) => updateRawMilkCanRow(row.id, "snf", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.cob} onChange={(e) => updateRawMilkCanRow(row.id, "cob", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold", row.cob.toLowerCase().includes("positive") ? "text-red-700" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.adulteration} onChange={(e) => updateRawMilkCanRow(row.id, "adulteration", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0", row.adulteration !== "Nil" && row.adulteration !== "" ? "text-orange-700 font-bold" : "")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateRawMilkCanRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("reject") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateRawMilkCanRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              {renderCustomBodyCells(row.id)}
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-slate-50 font-bold text-black border-t-2 border-black">
                            <td className="border border-black px-1.5 py-1 text-left uppercase">Route Totals</td>
                            <td className="border border-black px-1.5 py-1 text-center font-black">{rawMilkCanRows.reduce((s, r) => s + (parseInt(r.totalCans) || 0), 0)}</td>
                            <td className="border border-black px-1.5 py-1 text-center font-black text-green-700">{rawMilkCanRows.reduce((s, r) => s + (parseInt(r.acceptedCans) || 0), 0)}</td>
                            <td className="border border-black px-1.5 py-1 text-center font-black text-red-700">{rawMilkCanRows.reduce((s, r) => s + (parseInt(r.rejectedCans) || 0), 0)}</td>
                            <td colSpan={9} className="border border-black px-1.5 py-1 bg-slate-100"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 3: Raw Milk Silo Storage Log Sheet (Landscape) */}
                  {selectedFormatId === "raw-milk-silo" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 w-16">Silo No.</th>
                            <th className="border border-black px-1.5 py-1">Silo Position</th>
                            <th className="border border-black px-1.5 py-1 w-18">Opening Bal. (L)</th>
                            <th className="border border-black px-1.5 py-1 w-18">Received Qty (L)</th>
                            <th className="border border-black px-1.5 py-1 text-left">Source / Tanker Ref</th>
                            <th className="border border-black px-1.5 py-1 w-12">Temp (°C)</th>
                            <th className="border border-black px-1.5 py-1 w-14">Acidity (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">Fat (%)</th>
                            <th className="border border-black px-1.5 py-1 w-12">SNF (%)</th>
                            <th className="border border-black px-1.5 py-1 w-20">Closing Bal. (L)</th>
                            <th className="border border-black px-1.5 py-1 text-left">Remarks</th>
                            {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rawMilkSiloRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input value={row.siloNo} onChange={(e) => updateRawMilkSiloRow(row.id, "siloNo", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center text-slate-700">
                                <input value={row.siloPosition ?? ""} onChange={(e) => updateRawMilkSiloRow(row.id, "siloPosition", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono">
                                <input value={row.openingBal} onChange={(e) => updateRawMilkSiloRow(row.id, "openingBal", e.target.value)} className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono text-teal-800 font-bold">
                                <input value={row.receivedQty} onChange={(e) => updateRawMilkSiloRow(row.id, "receivedQty", e.target.value)} className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono text-teal-800 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.source} onChange={(e) => updateRawMilkSiloRow(row.id, "source", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="number" step="0.1" value={row.temp} onChange={(e) => updateRawMilkSiloRow(row.id, "temp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="number" step="0.005" value={row.acidity} onChange={(e) => updateRawMilkSiloRow(row.id, "acidity", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input type="number" step="0.1" value={row.fat} onChange={(e) => updateRawMilkSiloRow(row.id, "fat", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input type="number" step="0.1" value={row.snf} onChange={(e) => updateRawMilkSiloRow(row.id, "snf", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono font-black">
                                <input value={row.closingBal} onChange={(e) => updateRawMilkSiloRow(row.id, "closingBal", e.target.value)} className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-black" />
                              </td>
                              <td className="border border-black p-0.5 text-left text-slate-600">
                                <input value={row.remarks} onChange={(e) => updateRawMilkSiloRow(row.id, "remarks", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 4: Finished Product Analysis Report (Landscape) */}
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
                            {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.batchNo} onChange={(e) => updateProductRow(row.id, "batchNo", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.productName} onChange={(e) => updateProductRow(row.id, "productName", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.packSize} onChange={(e) => updateProductRow(row.id, "packSize", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.fat} onChange={(e) => updateProductRow(row.id, "fat", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.snf} onChange={(e) => updateProductRow(row.id, "snf", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.moisture} onChange={(e) => updateProductRow(row.id, "moisture", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.acidity} onChange={(e) => updateProductRow(row.id, "acidity", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.phosphatase} onChange={(e) => updateProductRow(row.id, "phosphatase", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold", row.phosphatase.toLowerCase().includes("positive") ? "text-red-700 font-bold" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.coliform} onChange={(e) => updateProductRow(row.id, "coliform", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.organoleptic} onChange={(e) => updateProductRow(row.id, "organoleptic", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateProductRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 5: Laboratory Calibration & Equipment Log (Portrait) */}
                  {selectedFormatId === "lab-calibration" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1.5 w-20">Equip / Glass ID</th>
                            <th className="border border-black px-1.5 py-1.5 text-left">Equipment / Instrument Type</th>
                            <th className="border border-black px-1.5 py-1.5 w-22">Std Range / Vol</th>
                            <th className="border border-black px-1.5 py-1.5 w-14">Temp (°C)</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Std / Empty Wt</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Obs / Filled Wt</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Net Vol / Obs</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Error / Dev</th>
                            <th className="border border-black px-1.5 py-1.5 w-14">OK/Fail</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Checked By</th>
                            <th className="border border-black px-1.5 py-1.5 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {labCalibrationRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input value={row.equipId ?? (row as any).glasswareId ?? ""} onChange={(e) => updateLabCalibrationRow(row.id, "equipId", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.type} onChange={(e) => updateLabCalibrationRow(row.id, "type", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.nominalVol} onChange={(e) => updateLabCalibrationRow(row.id, "nominalVol", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-semibold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.waterTemp} onChange={(e) => updateLabCalibrationRow(row.id, "waterTemp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono">
                                <input value={row.emptyWt} onChange={(e) => updateLabCalibrationRow(row.id, "emptyWt", e.target.value)} className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono pr-1" />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono">
                                <input value={row.filledWt} onChange={(e) => updateLabCalibrationRow(row.id, "filledWt", e.target.value)} className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono pr-1" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.netVol} onChange={(e) => updateLabCalibrationRow(row.id, "netVol", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono text-red-700">
                                <input value={row.error} onChange={(e) => updateLabCalibrationRow(row.id, "error", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono text-red-700 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.accepted} onChange={(e) => updateLabCalibrationRow(row.id, "accepted", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.accepted.toLowerCase() === "no" || row.accepted.toLowerCase() === "fail" ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.operator} onChange={(e) => updateLabCalibrationRow(row.id, "operator", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 6: Chemical & Reagent Prep & Stock Log (Portrait) */}
                  {selectedFormatId === "chemical-reagent" && (
                    <div className="w-full">
                      <table className="w-full text-[9.5px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1.5 w-10">Sr.</th>
                            <th className="border border-black px-1.5 py-1.5 text-left">Chemical / Reagent Solution Name</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Target Norm.</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Actual / Factor</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Prep Date</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Expiry Date</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Prep By</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Std By</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Stock</th>
                            <th className="border border-black px-1.5 py-1.5 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {chemicalReagentRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.serial} onChange={(e) => updateChemicalReagentRow(row.id, "serial", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.reagentName} onChange={(e) => updateChemicalReagentRow(row.id, "reagentName", e.target.value)} className="w-full bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.normality} onChange={(e) => updateChemicalReagentRow(row.id, "normality", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.factor} onChange={(e) => updateChemicalReagentRow(row.id, "factor", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="date" value={row.prepDate} onChange={(e) => updateChemicalReagentRow(row.id, "prepDate", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="date" value={row.expDate} onChange={(e) => updateChemicalReagentRow(row.id, "expDate", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono text-red-700" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.preparedBy} onChange={(e) => updateChemicalReagentRow(row.id, "preparedBy", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.standardizedBy} onChange={(e) => updateChemicalReagentRow(row.id, "standardizedBy", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-semibold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono text-teal-800 font-semibold">
                                <input value={row.stock} onChange={(e) => updateChemicalReagentRow(row.id, "stock", e.target.value)} className="w-full text-center bg-transparent border-none text-[9.5px] p-1 focus:ring-0 font-mono text-teal-800 font-semibold" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 7: Microbiology Culture Media Log Sheet (Portrait) */}
                  {selectedFormatId === "media-log" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1.5 w-20">Prep Date</th>
                            <th className="border border-black px-1.5 py-1.5 text-left">Media Name</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Batch No.</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Qty (ml)</th>
                            <th className="border border-black px-1.5 py-1.5 w-14">Autoclave Temp (°C)</th>
                            <th className="border border-black px-1.5 py-1.5 w-16">Pressure (psi)</th>
                            <th className="border border-black px-1.5 py-1.5 w-24">Sterility Check</th>
                            <th className="border border-black px-1.5 py-1.5 w-14">pH (Post)</th>
                            <th className="border border-black px-1.5 py-1.5 w-20">Expiry Date</th>
                            <th className="border border-black px-1.5 py-1.5 w-18">Prepared By</th>
                            <th className="border border-black px-1.5 py-1.5 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mediaLogRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="date" value={row.date} onChange={(e) => updateMediaLogRow(row.id, "date", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.mediaName} onChange={(e) => updateMediaLogRow(row.id, "mediaName", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.batchNo} onChange={(e) => updateMediaLogRow(row.id, "batchNo", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.qty} onChange={(e) => updateMediaLogRow(row.id, "qty", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold text-teal-800">
                                <input value={row.temp} onChange={(e) => updateMediaLogRow(row.id, "temp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono text-teal-800 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.pressure} onChange={(e) => updateMediaLogRow(row.id, "pressure", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.sterility} onChange={(e) => updateMediaLogRow(row.id, "sterility", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold", row.sterility.toLowerCase().includes("growth") && !row.sterility.toLowerCase().includes("no") ? "text-red-700 font-bold" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.ph} onChange={(e) => updateMediaLogRow(row.id, "ph", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="date" value={row.expDate} onChange={(e) => updateMediaLogRow(row.id, "expDate", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono text-red-700" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.preparedBy} onChange={(e) => updateMediaLogRow(row.id, "preparedBy", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 8: Sample Register & COA Log (Landscape) */}
                  {selectedFormatId === "sample-register-coa" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 w-20">Sample ID</th>
                            <th className="border border-black px-1.5 py-1 w-24">Date & Time</th>
                            <th className="border border-black px-1.5 py-1 text-left">Sample Name</th>
                            <th className="border border-black px-1.5 py-1 w-22">Source / Batch</th>
                            <th className="border border-black px-1.5 py-1">Chemical Results</th>
                            <th className="border border-black px-1.5 py-1">Micro Results</th>
                            <th className="border border-black px-1.5 py-1 w-14">Status</th>
                            <th className="border border-black px-1.5 py-1 w-18">COA Ref No.</th>
                            <th className="border border-black px-1.5 py-1 w-16">Analyst</th>
                            {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sampleRegisterRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input value={row.sampleId} onChange={(e) => updateSampleRegisterRow(row.id, "sampleId", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.dateTime} onChange={(e) => updateSampleRegisterRow(row.id, "dateTime", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.sampleName} onChange={(e) => updateSampleRegisterRow(row.id, "sampleName", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.source} onChange={(e) => updateSampleRegisterRow(row.id, "source", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-mono text-[8.5px]">
                                <input value={row.chemical} onChange={(e) => updateSampleRegisterRow(row.id, "chemical", e.target.value)} className="w-full bg-transparent border-none text-[8.5px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-mono text-[8.5px]">
                                <input value={row.micro} onChange={(e) => updateSampleRegisterRow(row.id, "micro", e.target.value)} className="w-full bg-transparent border-none text-[8.5px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateSampleRegisterRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("fail") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.coaRef} onChange={(e) => updateSampleRegisterRow(row.id, "coaRef", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateSampleRegisterRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 9: Product Release Register (Landscape) */}
                  {selectedFormatId === "product-release" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 w-18">Date</th>
                            <th className="border border-black px-1.5 py-1 text-left">Product Name</th>
                            <th className="border border-black px-1.5 py-1 w-20">Batch No.</th>
                            <th className="border border-black px-1.5 py-1 w-18">Mfg Date</th>
                            <th className="border border-black px-1.5 py-1 w-20">Qty / Packs</th>
                            <th className="border border-black px-1.5 py-1 w-16">Chem. Clear</th>
                            <th className="border border-black px-1.5 py-1 w-16">Micro Clear</th>
                            <th className="border border-black px-1.5 py-1 w-16">Pkg. OK</th>
                            <th className="border border-black px-1.5 py-1 w-20">Release Status</th>
                            <th className="border border-black px-1.5 py-1 w-18">Released By</th>
                            {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productReleaseRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="date" value={row.date} onChange={(e) => updateProductReleaseRow(row.id, "date", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.productName} onChange={(e) => updateProductReleaseRow(row.id, "productName", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.batchNo} onChange={(e) => updateProductReleaseRow(row.id, "batchNo", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input type="date" value={row.mfgDate} onChange={(e) => updateProductReleaseRow(row.id, "mfgDate", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-right font-mono font-bold">
                                <input value={row.qty} onChange={(e) => updateProductReleaseRow(row.id, "qty", e.target.value)} className="w-full text-right bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.chemical} onChange={(e) => updateProductReleaseRow(row.id, "chemical", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.chemical.toLowerCase().includes("hold") || row.chemical.toLowerCase().includes("fail") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.micro} onChange={(e) => updateProductReleaseRow(row.id, "micro", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.micro.toLowerCase().includes("hold") || row.micro.toLowerCase().includes("fail") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.packing} onChange={(e) => updateProductReleaseRow(row.id, "packing", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.packing.toLowerCase() !== "ok" && row.packing !== "" ? "text-orange-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateProductReleaseRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-black text-[10px]", row.status.toLowerCase().includes("hold") || row.status.toLowerCase().includes("reject") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateProductReleaseRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 10: Water Quality Analysis Log Sheet (Portrait) */}
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
                                <input value={row.source} onChange={(e) => updateWaterRow(row.id, "source", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.ph} onChange={(e) => updateWaterRow(row.id, "ph", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.hardness} onChange={(e) => updateWaterRow(row.id, "hardness", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.tds} onChange={(e) => updateWaterRow(row.id, "tds", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.chlorine} onChange={(e) => updateWaterRow(row.id, "chlorine", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold text-teal-800" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.alkalinity} onChange={(e) => updateWaterRow(row.id, "alkalinity", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.coliform} onChange={(e) => updateWaterRow(row.id, "coliform", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold", row.coliform.toLowerCase().includes("present") ? "text-red-700 font-bold" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.remarks} onChange={(e) => updateWaterRow(row.id, "remarks", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 text-slate-700" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 11: Microbiology Swab Testing Record (Landscape) */}
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
                            {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {swabRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.dateShift} onChange={(e) => updateSwabRow(row.id, "dateShift", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.area} onChange={(e) => updateSwabRow(row.id, "area", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5">
                                <input value={row.sanitizer} onChange={(e) => updateSwabRow(row.id, "sanitizer", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 text-slate-700" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.spc} onChange={(e) => updateSwabRow(row.id, "spc", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.coliform} onChange={(e) => updateSwabRow(row.id, "coliform", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono", row.coliform.toLowerCase().includes("present") ? "text-red-700 font-bold" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.yeastMold} onChange={(e) => updateSwabRow(row.id, "yeastMold", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateSwabRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("alert") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateSwabRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 12: CIP Chemical & Wash Cycle Validation Register (Landscape) */}
                  {selectedFormatId === "cip-validation" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">CIP Circuit / Equipment</th>
                            <th className="border border-black px-1.5 py-1 w-24">Wash Time</th>
                            <th className="border border-black px-1.5 py-1 w-16">Caustic Lye %</th>
                            <th className="border border-black px-1.5 py-1 w-16">Lye Temp</th>
                            <th className="border border-black px-1.5 py-1 w-16">Acid %</th>
                            <th className="border border-black px-1.5 py-1 w-16">Acid Temp</th>
                            <th className="border border-black px-1.5 py-1 w-20">Flow Rate</th>
                            <th className="border border-black px-1.5 py-1 w-24">Titration Vol</th>
                            <th className="border border-black px-1.5 py-1 w-20">Rinse pH</th>
                            <th className="border border-black px-1.5 py-1 w-18">Status</th>
                            <th className="border border-black px-1.5 py-1 w-18">Analyst</th>
                            {renderCustomHeaderCols()}
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cipValidationRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.circuit} onChange={(e) => updateCipValidationRow(row.id, "circuit", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.washTime} onChange={(e) => updateCipValidationRow(row.id, "washTime", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold text-blue-900">
                                <input value={row.lyeConc} onChange={(e) => updateCipValidationRow(row.id, "lyeConc", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.lyeTemp} onChange={(e) => updateCipValidationRow(row.id, "lyeTemp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold text-amber-900">
                                <input value={row.acidConc} onChange={(e) => updateCipValidationRow(row.id, "acidConc", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.acidTemp} onChange={(e) => updateCipValidationRow(row.id, "acidTemp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.flowRate} onChange={(e) => updateCipValidationRow(row.id, "flowRate", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.titrationVol} onChange={(e) => updateCipValidationRow(row.id, "titrationVol", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.finalPh} onChange={(e) => updateCipValidationRow(row.id, "finalPh", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold text-emerald-800" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateCipValidationRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("fail") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateCipValidationRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              {renderCustomBodyCells(row.id)}
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 13: Milk Adulteration & Chemical Test Register (Landscape) */}
                  {selectedFormatId === "adulteration-strip" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1 py-1 text-left">Sample Source / Tanker</th>
                            <th className="border border-black px-1 py-1 w-14">Urea</th>
                            <th className="border border-black px-1 py-1 w-14">Starch</th>
                            <th className="border border-black px-1 py-1 w-14">Glucose</th>
                            <th className="border border-black px-1 py-1 w-14">Detergent</th>
                            <th className="border border-black px-1 py-1 w-20">Neutralizer</th>
                            <th className="border border-black px-1 py-1 w-14">H2O2</th>
                            <th className="border border-black px-1 py-1 w-14">Nitrate</th>
                            <th className="border border-black px-1 py-1 w-16">Salt %</th>
                            <th className="border border-black px-1 py-1 w-16">Antibiotics</th>
                            <th className="border border-black px-1 py-1 w-24">Final Status</th>
                            <th className="border border-black px-1 py-1 w-16">Analyst</th>
                            {renderCustomHeaderCols()}
                            <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {adulterationRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.sampleSource} onChange={(e) => updateAdulterationRow(row.id, "sampleSource", e.target.value)} className="w-full bg-transparent border-none text-[8.5px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.urea} onChange={(e) => updateAdulterationRow(row.id, "urea", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.urea.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.starch} onChange={(e) => updateAdulterationRow(row.id, "starch", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.starch.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.glucose} onChange={(e) => updateAdulterationRow(row.id, "glucose", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.glucose.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.detergent} onChange={(e) => updateAdulterationRow(row.id, "detergent", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.detergent.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.neutralizer} onChange={(e) => updateAdulterationRow(row.id, "neutralizer", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.neutralizer.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.h2o2} onChange={(e) => updateAdulterationRow(row.id, "h2o2", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.h2o2.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.nitrate} onChange={(e) => updateAdulterationRow(row.id, "nitrate", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.nitrate.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.salt} onChange={(e) => updateAdulterationRow(row.id, "salt", e.target.value)} className="w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.antibiotic} onChange={(e) => updateAdulterationRow(row.id, "antibiotic", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0", row.antibiotic.toLowerCase().includes("pos") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateAdulterationRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0 font-bold", row.status.toLowerCase().includes("reject") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateAdulterationRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[8.5px] p-0.5 focus:ring-0" />
                              </td>
                              {renderCustomBodyCells(row.id)}
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 14: Sensory & Organoleptic Evaluation Sheet (Landscape) */}
                  {selectedFormatId === "sensory-organoleptic" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Product Name</th>
                            <th className="border border-black px-1.5 py-1 w-20">Batch No.</th>
                            <th className="border border-black px-1.5 py-1 w-14">Temp</th>
                            <th className="border border-black px-1.5 py-1 text-left">Flavor & Taste (10)</th>
                            <th className="border border-black px-1.5 py-1 text-left">Odor / Aroma (10)</th>
                            <th className="border border-black px-1.5 py-1 text-left">Color (10)</th>
                            <th className="border border-black px-1.5 py-1 text-left">Texture & Body (10)</th>
                            <th className="border border-black px-1.5 py-1 w-20 font-bold">Overall Score</th>
                            <th className="border border-black px-1.5 py-1 w-18">Decision</th>
                            <th className="border border-black px-1.5 py-1 w-24">Panelist Ref</th>
                            {renderCustomHeaderCols()}
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sensoryRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.sampleName} onChange={(e) => updateSensoryRow(row.id, "sampleName", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.batchNo} onChange={(e) => updateSensoryRow(row.id, "batchNo", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.temp} onChange={(e) => updateSensoryRow(row.id, "temp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.flavor} onChange={(e) => updateSensoryRow(row.id, "flavor", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.odor} onChange={(e) => updateSensoryRow(row.id, "odor", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.color} onChange={(e) => updateSensoryRow(row.id, "color", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.texture} onChange={(e) => updateSensoryRow(row.id, "texture", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-bold font-mono text-blue-900">
                                <input value={row.overallScore} onChange={(e) => updateSensoryRow(row.id, "overallScore", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.decision} onChange={(e) => updateSensoryRow(row.id, "decision", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.decision.toLowerCase().includes("reject") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.panelist} onChange={(e) => updateSensoryRow(row.id, "panelist", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              {renderCustomBodyCells(row.id)}
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 15: Effluent Treatment Plant (ETP) Wastewater Log (Landscape) */}
                  {selectedFormatId === "effluent-etp" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 w-24">Date & Shift</th>
                            <th className="border border-black px-1.5 py-1 text-left">Sample Location / Tank</th>
                            <th className="border border-black px-1.5 py-1 w-16">pH</th>
                            <th className="border border-black px-1.5 py-1 w-20">BOD (mg/L)</th>
                            <th className="border border-black px-1.5 py-1 w-20">COD (mg/L)</th>
                            <th className="border border-black px-1.5 py-1 w-20">TSS (mg/L)</th>
                            <th className="border border-black px-1.5 py-1 w-20">Oil & Grease</th>
                            <th className="border border-black px-1.5 py-1 w-18">Sludge SVI</th>
                            <th className="border border-black px-1.5 py-1 text-left font-bold">SPCB Discharge Status</th>
                            <th className="border border-black px-1.5 py-1 w-20">Analyst</th>
                            {renderCustomHeaderCols()}
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {etpRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.dateShift} onChange={(e) => updateEtpRow(row.id, "dateShift", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.sampleLocation} onChange={(e) => updateEtpRow(row.id, "sampleLocation", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.ph} onChange={(e) => updateEtpRow(row.id, "ph", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input value={row.bod} onChange={(e) => updateEtpRow(row.id, "bod", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold">
                                <input value={row.cod} onChange={(e) => updateEtpRow(row.id, "cod", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.tss} onChange={(e) => updateEtpRow(row.id, "tss", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.oilGrease} onChange={(e) => updateEtpRow(row.id, "oilGrease", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.svi} onChange={(e) => updateEtpRow(row.id, "svi", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.dischargeStatus} onChange={(e) => updateEtpRow(row.id, "dischargeStatus", e.target.value)} className={cn("w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.dischargeStatus.toLowerCase().includes("non") ? "text-red-700" : "text-green-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateEtpRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              {renderCustomBodyCells(row.id)}
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 16: Pouch & Packaging Integrity Quality Sheet (Portrait) */}
                  {selectedFormatId === "packing-integrity" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Line & Machine No.</th>
                            <th className="border border-black px-1.5 py-1 text-left">Product Name</th>
                            <th className="border border-black px-1.5 py-1 w-28">Leak Test (5 psi)</th>
                            <th className="border border-black px-1.5 py-1 w-24">Seal Fusion</th>
                            <th className="border border-black px-1.5 py-1 w-28">Weight Variation</th>
                            <th className="border border-black px-1.5 py-1 text-left">MRP / Date Print</th>
                            <th className="border border-black px-1.5 py-1 w-20">Status</th>
                            <th className="border border-black px-1.5 py-1 w-20">Inspector</th>
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {packingRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.lineNo} onChange={(e) => updatePackingRow(row.id, "lineNo", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.product} onChange={(e) => updatePackingRow(row.id, "product", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.leakTest} onChange={(e) => updatePackingRow(row.id, "leakTest", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold", row.leakTest.toLowerCase().includes("fail") ? "text-red-700 font-bold" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.sealStrength} onChange={(e) => updatePackingRow(row.id, "sealStrength", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.weightVar} onChange={(e) => updatePackingRow(row.id, "weightVar", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.codePrint} onChange={(e) => updatePackingRow(row.id, "codePrint", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updatePackingRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("reject") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.inspector} onChange={(e) => updatePackingRow(row.id, "inspector", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 17: Incubation & Shelf-Life Retention Register (Portrait) */}
                  {selectedFormatId === "incubation-shelf-life" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Sample Product</th>
                            <th className="border border-black px-1.5 py-1 w-20">Batch No</th>
                            <th className="border border-black px-1.5 py-1 w-24">Storage Temp</th>
                            <th className="border border-black px-1.5 py-1 w-20">Incub. Period</th>
                            <th className="border border-black px-1.5 py-1 w-28">pH Drop Check</th>
                            <th className="border border-black px-1.5 py-1 w-24">Gas / Curd</th>
                            <th className="border border-black px-1.5 py-1 text-left">Taste & Odor</th>
                            <th className="border border-black px-1.5 py-1 w-20">Status</th>
                            <th className="border border-black px-1.5 py-1 w-18">Analyst</th>
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {incubationRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.sampleName} onChange={(e) => updateIncubationRow(row.id, "sampleName", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.batchNo} onChange={(e) => updateIncubationRow(row.id, "batchNo", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.storeTemp} onChange={(e) => updateIncubationRow(row.id, "storeTemp", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.incubationDays} onChange={(e) => updateIncubationRow(row.id, "incubationDays", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.phDrop} onChange={(e) => updateIncubationRow(row.id, "phDrop", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.gasCurd} onChange={(e) => updateIncubationRow(row.id, "gasCurd", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0", row.gasCurd.toLowerCase().includes("curd") || row.gasCurd.toLowerCase().includes("gas") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.tasteOdor} onChange={(e) => updateIncubationRow(row.id, "tasteOdor", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.shelfLifeStatus} onChange={(e) => updateIncubationRow(row.id, "shelfLifeStatus", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.shelfLifeStatus.toLowerCase().includes("fail") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateIncubationRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 18: Glass & Brittle Plastic Audit Register (Portrait) */}
                  {selectedFormatId === "glass-brittle-audit" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Location / Department Area</th>
                            <th className="border border-black px-1.5 py-1 text-left">Glass / Brittle Item Name</th>
                            <th className="border border-black px-1.5 py-1 w-24">Condition</th>
                            <th className="border border-black px-1.5 py-1 w-28">Protective Shield</th>
                            <th className="border border-black px-1.5 py-1 text-left">Corrective Action Needed</th>
                            <th className="border border-black px-1.5 py-1 w-20">Audit Status</th>
                            <th className="border border-black px-1.5 py-1 w-20">Auditor</th>
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {glassAuditRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.area} onChange={(e) => updateGlassAuditRow(row.id, "area", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.item} onChange={(e) => updateGlassAuditRow(row.id, "item", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.condition} onChange={(e) => updateGlassAuditRow(row.id, "condition", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-semibold", row.condition.toLowerCase().includes("broken") || row.condition.toLowerCase().includes("crack") ? "text-red-700 font-bold" : "text-slate-800")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.protectiveShield} onChange={(e) => updateGlassAuditRow(row.id, "protectiveShield", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.actionRequired} onChange={(e) => updateGlassAuditRow(row.id, "actionRequired", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 text-slate-700" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateGlassAuditRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("fail") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.auditor} onChange={(e) => updateGlassAuditRow(row.id, "auditor", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 19: Lab & Plant Pest Control & Hygiene Record (Portrait) */}
                  {selectedFormatId === "pest-control-hygiene" && (
                    <div className="w-full">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Location / Station No</th>
                            <th className="border border-black px-1.5 py-1 text-left">Trap Type</th>
                            <th className="border border-black px-1.5 py-1 w-32">Inspection Result</th>
                            <th className="border border-black px-1.5 py-1 w-20">Flies / Pest Count</th>
                            <th className="border border-black px-1.5 py-1 text-left">Action Taken</th>
                            <th className="border border-black px-1.5 py-1 w-24">Hygiene Status</th>
                            <th className="border border-black px-1.5 py-1 w-20">Auditor</th>
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pestControlRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.location} onChange={(e) => updatePestControlRow(row.id, "location", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.trapType} onChange={(e) => updatePestControlRow(row.id, "trapType", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.inspectionResult} onChange={(e) => updatePestControlRow(row.id, "inspectionResult", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.fliesCount} onChange={(e) => updatePestControlRow(row.id, "fliesCount", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.actionTaken} onChange={(e) => updatePestControlRow(row.id, "actionTaken", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 text-slate-700" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updatePestControlRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("unsat") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.auditor} onChange={(e) => updatePestControlRow(row.id, "auditor", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* CASE 20: CIP Thermal & Chemical Sanitation Log (Landscape) */}
                  {selectedFormatId === "cip-sanitation-verification" && (
                    <div className="w-full overflow-x-visible">
                      <table className="w-full text-[9px] border-collapse border border-black text-black">
                        <thead>
                          <tr className="bg-slate-100 text-center font-bold">
                            <th className="border border-black px-1.5 py-1 text-left">Equipment / Pipeline Circuit</th>
                            <th className="border border-black px-1.5 py-1 text-left">Sanitizer Agent Type</th>
                            <th className="border border-black px-1.5 py-1 w-24">Contact Time</th>
                            <th className="border border-black px-1.5 py-1 w-24">Concentration (PPM / °C)</th>
                            <th className="border border-black px-1.5 py-1 w-24 text-center">Post-Sanitation Swab</th>
                            <th className="border border-black px-1.5 py-1 w-20 text-center">Sanitation Status</th>
                            <th className="border border-black px-1.5 py-1 w-20">Verified By</th>
                            {renderCustomHeaderCols()}
                            <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cipSanitationRows.map((row) => (
                            <tr key={row.id}>
                              <td className="border border-black p-0.5 text-left font-bold">
                                <input value={row.equipment} onChange={(e) => updateCipSanitationRow(row.id, "equipment", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-left">
                                <input value={row.sanitizerType} onChange={(e) => updateCipSanitationRow(row.id, "sanitizerType", e.target.value)} className="w-full bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.contactTime} onChange={(e) => updateCipSanitationRow(row.id, "contactTime", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono font-bold text-teal-900">
                                <input value={row.concPpm} onChange={(e) => updateCipSanitationRow(row.id, "concPpm", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono font-bold" />
                              </td>
                              <td className="border border-black p-0.5 text-center font-mono">
                                <input value={row.swabRes} onChange={(e) => updateCipSanitationRow(row.id, "swabRes", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-mono" />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.status} onChange={(e) => updateCipSanitationRow(row.id, "status", e.target.value)} className={cn("w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0 font-bold", row.status.toLowerCase().includes("fail") ? "text-red-700" : "text-green-700")} />
                              </td>
                              <td className="border border-black p-0.5 text-center">
                                <input value={row.analyst} onChange={(e) => updateCipSanitationRow(row.id, "analyst", e.target.value)} className="w-full text-center bg-transparent border-none text-[9px] p-1 focus:ring-0" />
                              </td>
                              {renderCustomBodyCells(row.id)}
                              <td className="border border-black p-0.5 text-center print:hidden">
                                <button onClick={() => deleteRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button>
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
                      ANALYST SIGN
                    </div>
                    <div className="text-center w-32 border-t border-black pt-1">
                      VERIFIED BY
                    </div>
                    <div className="text-center w-32 border-t border-black pt-1">
                      QA MANAGER AUTHORIZED SIGN
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
      <style dangerouslySetInnerHTML={{
        __html: `
        .is-exporting-pdf .print\\:hidden,
        .is-exporting-pdf .no-pdf {
          display: none !important;
        }
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
            width: ${currentOrientation === 'landscape' ? '297mm' : '210mm'} !important;
            height: ${currentOrientation === 'landscape' ? '210mm' : '297mm'} !important;
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
      `}} />
    </div>
  );
}
