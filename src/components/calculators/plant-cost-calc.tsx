"use client";

import React, { useState, useRef, useMemo } from "react";
import {
  Printer, Download, FileText, Building2, MapPin, Calendar,
  Plus, Trash2, Loader2,
  ShieldCheck, ClipboardList, Package, Wrench, BarChart3, Truck, Factory,
  Settings, BookOpen, Archive, Zap, Droplets, ClipboardCheck,
  Columns, RotateCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FormatType =
  // ── Plant Operations (Production) ──
  | "rm-reception"
  | "bmr"
  | "process-monitoring"
  | "processing-standardization"
  | "qa-lab-log"
  | "packing-dispatch"
  | "packaging-qc"
  | "cold-room-register"
  | "cip-cleaning"
  | "curd-dahi-log"
  | "machine-breakdown"
  | "yield-handover"
  // ── Maintenance (Mechanical & Utilities) ──
  | "pm-log"
  | "breakdown-log"
  | "equipment-history"
  | "spare-parts"
  | "utility-log"
  | "boiler-log"
  | "refrigeration-log"
  | "electrical-dg-log"
  | "compressor-log"
  | "calibration-register"
  | "etp-wtp-log"
  | "lubrication-log"
  | "work-permit";

interface FormatInfo {
  id: FormatType;
  title: string;
  description: string;
  orientation: "portrait" | "landscape";
  icon: any;
  group: string;
}

const FORMATS_CATALOG: FormatInfo[] = [
  // ── PLANT OPERATIONS GROUP (12 Formats) ──
  { id: "rm-reception",              title: "Raw Milk Reception & Storage Log",          description: "Dock-to-silo reception record for tankers.",                               orientation: "landscape", icon: Truck,          group: "Plant Operations" },
  { id: "bmr",                       title: "Batch Manufacturing Record (BMR)",           description: "Step-by-step batch record with CCP sign-off.",                             orientation: "landscape", icon: ClipboardList,  group: "Plant Operations" },
  { id: "process-monitoring",        title: "Process Monitoring Log",                     description: "Hourly pasteurizer temp, pressure & flow log.",                            orientation: "landscape", icon: Factory,        group: "Plant Operations" },
  { id: "processing-standardization",title: "Milk Processing & Standardization Log",   description: "Fat/SNF standardization, cream separation & Pearson dosage.",             orientation: "landscape", icon: Factory,        group: "Plant Operations" },
  { id: "qa-lab-log",                title: "Quality & Lab Testing Register",            description: "Organoleptic, Fat%, SNF%, Acidity, MBRT, Alcohol & heat stability.",      orientation: "landscape", icon: ShieldCheck,    group: "Plant Operations" },
  { id: "packing-dispatch",          title: "Packing & Dispatch Log",                    description: "Packed qty, vehicle loading & dispatch clearance.",                        orientation: "landscape", icon: Package,        group: "Plant Operations" },
  { id: "packaging-qc",              title: "Packaging QC & Weight Check Log",          description: "Pouch weight variation, leakage test, sealing temp & print quality.",       orientation: "landscape", icon: Package,        group: "Plant Operations" },
  { id: "cold-room-register",        title: "Cold Room Temp & Stock Register",          description: "Cold room temp log (-25°C to 4°C), stack height & FIFO dispatch.",        orientation: "landscape", icon: Archive,        group: "Plant Operations" },
  { id: "cip-cleaning",              title: "CIP & Cleaning Log",                        description: "Chemical CIP log: temp, concentration, duration, QA.",                    orientation: "landscape", icon: ShieldCheck,    group: "Plant Operations" },
  { id: "curd-dahi-log",             title: "Dahi, Lassi & Culturing Process Log",      description: "Inoculation temp, starter culture dosage, incubation time & acidity.",     orientation: "landscape", icon: ClipboardList,  group: "Plant Operations" },
  { id: "machine-breakdown",         title: "Machine Breakdown & Maintenance Log",        description: "Downtime tracker for failures, corrective actions.",                       orientation: "portrait",  icon: Wrench,         group: "Plant Operations" },
  { id: "yield-handover",            title: "Production Yield & Shift Handover Report",   description: "Shift summary: milk input, output, yield%, pending.",                      orientation: "landscape", icon: BarChart3,      group: "Plant Operations" },

  // ── MAINTENANCE GROUP (13 Formats) ──
  { id: "pm-log",                    title: "Preventive Maintenance (PM) Log",            description: "Scheduled PM tasks, frequency, status & sign-off.",                       orientation: "landscape", icon: Settings,       group: "Maintenance" },
  { id: "breakdown-log",             title: "Breakdown Maintenance Log",                  description: "Detailed breakdown root cause, CAPA & downtime log.",                     orientation: "landscape", icon: Wrench,         group: "Maintenance" },
  { id: "equipment-history",         title: "Equipment History Card",                     description: "Full lifecycle record: PM, breakdown, calibration events.",                orientation: "portrait",  icon: BookOpen,       group: "Maintenance" },
  { id: "spare-parts",               title: "Spare Parts Inventory Register",             description: "Stock in/out register for maintenance spare parts.",                       orientation: "landscape", icon: Archive,        group: "Maintenance" },
  { id: "utility-log",               title: "Utility Log Sheet",                          description: "Boiler, chiller, compressor & RO daily readings log.",                    orientation: "landscape", icon: Zap,            group: "Maintenance" },
  { id: "boiler-log",                title: "Boiler & Steam Generation Log",              description: "Steam pressure, feed water temp, blowdown, fuel cons & flue temp.",       orientation: "landscape", icon: Zap,            group: "Maintenance" },
  { id: "refrigeration-log",         title: "Refrigeration & Ammonia Plant Log",          description: "Suction/Discharge pressure, oil pressure, glycol temp & load.",        orientation: "landscape", icon: Wrench,         group: "Maintenance" },
  { id: "electrical-dg-log",         title: "Electrical Power & DG Set Daily Log",        description: "Power Factor (PF), EB kWh meter, DG run hours, diesel level & load.",     orientation: "landscape", icon: Zap,            group: "Maintenance" },
  { id: "compressor-log",            title: "Air Compressor & Pneumatic Log",             description: "Line pressure (bar), dew point, oil level, moisture drain & hours.",       orientation: "portrait",  icon: Settings,       group: "Maintenance" },
  { id: "calibration-register",      title: "Instrument Calibration Register",            description: "Pressure gauges, RTD temp sensors, flow meters & balance calib log.",      orientation: "landscape", icon: BookOpen,       group: "Maintenance" },
  { id: "etp-wtp-log",               title: "ETP & WTP Environmental Log",                description: "Influent/Effluent pH, COD, BOD, TSS, aeration & chemical dosing.",        orientation: "landscape", icon: Droplets,       group: "Maintenance" },
  { id: "lubrication-log",           title: "Lubrication Log Sheet",                      description: "Scheduled lubrication points, lubricant grade & quantity.",                orientation: "portrait",  icon: Droplets,       group: "Maintenance" },
  { id: "work-permit",               title: "Daily Maintenance / Work Permit Register",   description: "Hot/cold work permits, hazard control & closure record.",                  orientation: "landscape", icon: ClipboardCheck, group: "Maintenance" },
];

const GROUPS = ["Plant Operations", "Maintenance"];

export default function PlantFormatsCalc() {
  const { toast } = useToast();
  const printAreaRef = useRef<HTMLDivElement>(null);

  const [companyName, setCompanyName] = useState("DAIRY HUB COOPERATIVE");
  const [plantLocation, setPlantLocation] = useState("MAIN PROCESS PLANT");
  const [currentDate, setCurrentDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [selectedFormatId, setSelectedFormatId] = useState<FormatType>("rm-reception");
  const [isDownloading, setIsDownloading] = useState(false);

  // ════════════════════════════════════════════════════
  //  STATE — PLANT OPERATIONS (7 formats)
  // ════════════════════════════════════════════════════

  const [rmReceptionRows, setRmReceptionRows] = useState([
    { id: 1, tankerNo: "HR-55-A-1234", supplier: "Banas Union",       arrivalTime: "06:15", qty: "15000", temp: "4.2", acidity: "0.130", fat: "4.20", snf: "8.50", cob: "Negative", status: "Accepted", siloAllotted: "SILO-01", operator: "Amit K." },
    { id: 2, tankerNo: "UP-16-T-8899", supplier: "Center-12 Raw",     arrivalTime: "07:45", qty: "8500",  temp: "5.5", acidity: "0.140", fat: "4.50", snf: "8.60", cob: "Negative", status: "Accepted", siloAllotted: "SILO-02", operator: "Ritu S." },
    { id: 3, tankerNo: "MH-12-Q-4567", supplier: "Saras Collection",  arrivalTime: "09:00", qty: "12000", temp: "8.2", acidity: "0.180", fat: "3.80", snf: "8.10", cob: "Positive", status: "Rejected", siloAllotted: "-",       operator: "Amit K." },
  ]);

  const [bmrRows, setBmrRows] = useState([
    { id: 1, step: "01", operation: "Raw Milk Intake from SILO-01",          startTime: "06:30", endTime: "07:00", milkQty: "10000", temp: "4.2",  remarks: "Chilled, COB Clear",          doneBy: "Amit K.",    verified: "Mgr. Rao"  },
    { id: 2, step: "02", operation: "Pre-heating & Clarification",            startTime: "07:05", endTime: "07:20", milkQty: "10000", temp: "40.0", remarks: "Clarifier running OK",         doneBy: "Suresh V.",  verified: "Mgr. Rao"  },
    { id: 3, step: "03", operation: "Pasteurization (HTST 72°C/15s)",         startTime: "07:20", endTime: "08:30", milkQty: "10000", temp: "72.5", remarks: "FDV open, no flow divert",     doneBy: "Suresh V.",  verified: "Dr. Verma" },
    { id: 4, step: "04", operation: "Homogenization (200/50 bar)",            startTime: "07:20", endTime: "08:30", milkQty: "10000", temp: "68.0", remarks: "Pressure stable",              doneBy: "Ritu S.",    verified: "Dr. Verma" },
    { id: 5, step: "05", operation: "Chilling & Transfer to PMST-1",          startTime: "08:30", endTime: "09:00", milkQty: "9980",  temp: "4.5",  remarks: "0.2% process loss OK",        doneBy: "Ritu S.",    verified: "Mgr. Rao"  },
  ]);

  const [processRows, setProcessRows] = useState([
    { id: 1, time: "06:00", equipment: "Pasteurizer-01", inletTemp: "4.2", htTemp: "72.8", outTemp: "4.0", pressure: "2.5", flowRate: "10000", phpStatus: "Pass",  operator: "Suresh V." },
    { id: 2, time: "07:00", equipment: "Pasteurizer-01", inletTemp: "4.5", htTemp: "72.6", outTemp: "4.1", pressure: "2.5", flowRate: "10000", phpStatus: "Pass",  operator: "Suresh V." },
    { id: 3, time: "08:00", equipment: "Pasteurizer-01", inletTemp: "4.8", htTemp: "71.9", outTemp: "4.2", pressure: "2.4", flowRate: "9800",  phpStatus: "Alert", operator: "Suresh V." },
    { id: 4, time: "09:00", equipment: "Pasteurizer-01", inletTemp: "4.3", htTemp: "72.5", outTemp: "4.0", pressure: "2.5", flowRate: "10000", phpStatus: "Pass",  operator: "Ritu S."   },
  ]);

  const [packingRows, setPackingRows] = useState([
    { id: 1, batchNo: "B-FCM-101", product: "Full Cream Milk Pouch 500ml", shift: "A", packedQty: "9960 Pouches", vehicle: "HR-55-T-2200",  destination: "Depot - Delhi NCR",     dispatchTime: "14:00", tempAtDispatch: "4.5", status: "Dispatched", operator: "Vikram S." },
    { id: 2, batchNo: "B-TM-154",  product: "Toned Milk Pouch 500ml",     shift: "A", packedQty: "7970 Pouches", vehicle: "UP-80-AB-5512", destination: "Depot - Meerut",        dispatchTime: "14:30", tempAtDispatch: "4.8", status: "Dispatched", operator: "Vikram S." },
    { id: 3, batchNo: "B-PNR-05",  product: "Fresh Paneer 200g",          shift: "B", packedQty: "760 Packs",    vehicle: "HR-26-C-9988",  destination: "Hotel Chain Delivery",  dispatchTime: "17:00", tempAtDispatch: "5.0", status: "Dispatched", operator: "Rakesh M." },
  ]);

  const [cipRows, setCipRows] = useState([
    { id: 1, equipment: "Pasteurizer-01",    cipType: "Pre-Rinse (Water)",          startTime: "05:30", endTime: "05:45", temp: "60", causticConc: "-",   acidConc: "-",   duration: "15 min", operator: "Vijay K.", qaStatus: "OK" },
    { id: 2, equipment: "Pasteurizer-01",    cipType: "Caustic Wash (NaOH 2%)",    startTime: "05:45", endTime: "06:15", temp: "80", causticConc: "2.0", acidConc: "-",   duration: "30 min", operator: "Vijay K.", qaStatus: "OK" },
    { id: 3, equipment: "Pasteurizer-01",    cipType: "Acid Wash (HNO₃ 1.5%)",     startTime: "06:25", endTime: "06:55", temp: "70", causticConc: "-",   acidConc: "1.5", duration: "30 min", operator: "Vijay K.", qaStatus: "OK" },
    { id: 4, equipment: "Milk Silo RMST-1",  cipType: "Full CIP Cycle",            startTime: "10:00", endTime: "11:30", temp: "85", causticConc: "2.5", acidConc: "1.5", duration: "90 min", operator: "Rakesh M.", qaStatus: "OK" },
  ]);

  const [breakdownMaintRows, setBreakdownMaintRows] = useState([
    { id: 1, date: "2026-07-14", machine: "Pouch Filling Machine - FL1",     breakdownTime: "09:15", rootCause: "Film roll jam in sealing jaw",        action: "Replaced sealing jaw silicon pad",    resumedTime: "09:55", downtime: "40 min",  spareUsed: "Silicon Pad (2 pcs)",  engineer: "Manoj P.",  status: "Resolved" },
    { id: 2, date: "2026-07-15", machine: "Pasteurizer-01 Pump",             breakdownTime: "14:30", rootCause: "Vibration - bearing noise",           action: "Bearing replaced & pump re-aligned",  resumedTime: "16:00", downtime: "90 min",  spareUsed: "SKF Bearing 6204",     engineer: "Manoj P.",  status: "Resolved" },
    { id: 3, date: "2026-07-16", machine: "Refrigeration Compressor-2",      breakdownTime: "22:00", rootCause: "High pressure trip",                  action: "Gas leak found, topped up & sealed",  resumedTime: "23:30", downtime: "90 min",  spareUsed: "R-404A 2 kg",          engineer: "Rajiv S.",  status: "Resolved" },
  ]);

  const [yieldRows, setYieldRows] = useState([
    { id: 1, shift: "A (06:00-14:00)", product: "Full Cream Milk Pouch", milkInput: "10000", output: "9960",   yieldPct: "99.6",       rejections: "0",         pendingBatches: "Nil", operator: "Suresh V." },
    { id: 2, shift: "A (06:00-14:00)", product: "Fresh Paneer",          milkInput: "1000",  output: "152 Kg", yieldPct: "15.2 (conv)", rejections: "0",         pendingBatches: "Nil", operator: "Suresh V." },
    { id: 3, shift: "B (14:00-22:00)", product: "Toned Milk Pouch",      milkInput: "8000",  output: "7970",   yieldPct: "99.6",        rejections: "10 Leak",   pendingBatches: "Nil", operator: "Rakesh M." },
    { id: 4, shift: "B (14:00-22:00)", product: "Sweet Lassi Pouch",     milkInput: "500",   output: "590",    yieldPct: "118 (sugar)", rejections: "0",         pendingBatches: "Nil", operator: "Rakesh M." },
  ]);

  // ════════════════════════════════════════════════════
  //  STATE — MAINTENANCE (7 formats)
  // ════════════════════════════════════════════════════

  const [pmLogRows, setPmLogRows] = useState([
    { id: 1, srNo: "01", equipment: "Pasteurizer-01",          pmTask: "Check & clean heat exchanger plates",        frequency: "Monthly",    scheduledDate: "2026-07-15", doneDate: "2026-07-15", parametersChecked: "Plate gap, gasket condition",  status: "Done",    doneBy: "Manoj P.", verified: "Mgr. Rao"  },
    { id: 2, srNo: "02", equipment: "Milk Silo RMST-1",        pmTask: "Agitator seal & bearing inspection",          frequency: "Monthly",    scheduledDate: "2026-07-15", doneDate: "2026-07-15", parametersChecked: "Seal leakage, bearing temp",    status: "Done",    doneBy: "Manoj P.", verified: "Mgr. Rao"  },
    { id: 3, srNo: "03", equipment: "Pouch Filling Machine FL1",pmTask: "Clean & lubricate sealing jaw assembly",     frequency: "Weekly",     scheduledDate: "2026-07-18", doneDate: "2026-07-18", parametersChecked: "Seal temp, film alignment",     status: "Done",    doneBy: "Rajiv S.", verified: "Mgr. Rao"  },
    { id: 4, srNo: "04", equipment: "Refrigeration Comp. R-2", pmTask: "Check refrigerant level & oil pressure",     frequency: "Fortnightly",scheduledDate: "2026-07-20", doneDate: "-",          parametersChecked: "Gas pressure, oil level",       status: "Pending", doneBy: "-",        verified: "-"         },
    { id: 5, srNo: "05", equipment: "Boiler (IBR)",             pmTask: "Blow-down, safety valve & gauge check",     frequency: "Weekly",     scheduledDate: "2026-07-18", doneDate: "2026-07-18", parametersChecked: "Safety valve lift, pressure",   status: "Done",    doneBy: "Vijay K.", verified: "Mgr. Rao"  },
  ]);

  const [breakdownLogRows, setBreakdownLogRows] = useState([
    { id: 1, reportNo: "BD-01/26", date: "2026-07-14", machine: "Pouch Filling Machine - FL1", breakdownTime: "09:15", resumedTime: "09:55", downtime: "40 min",  rootCause: "Film roll jam in sealing jaw",       correctiveAction: "Replaced sealing jaw silicon pad",    preventiveAction: "Weekly jaw inspection added to PM",  spareUsed: "Silicon Pad (2 pcs)", engineer: "Manoj P.", status: "Closed" },
    { id: 2, reportNo: "BD-02/26", date: "2026-07-15", machine: "Pasteurizer-01 Pump",          breakdownTime: "14:30", resumedTime: "16:00", downtime: "90 min",  rootCause: "Bearing failure - vibration noise",  correctiveAction: "Bearing replaced & pump re-aligned",  preventiveAction: "Vibration monitoring quarterly",     spareUsed: "SKF Bearing 6204",    engineer: "Manoj P.", status: "Closed" },
    { id: 3, reportNo: "BD-03/26", date: "2026-07-16", machine: "Refrigeration Comp.-2",        breakdownTime: "22:00", resumedTime: "23:30", downtime: "90 min",  rootCause: "Refrigerant leak - high pressure",  correctiveAction: "Leak sealed & gas recharged",          preventiveAction: "Gas pressure check fortnightly",     spareUsed: "R-404A 2 kg",         engineer: "Rajiv S.", status: "Closed" },
  ]);

  const [equipHistoryRows, setEquipHistoryRows] = useState([
    { id: 1, date: "2026-07-15", equipId: "PAST-01", eventType: "PM",         description: "Heat exchanger plate inspection & cleaning",       techName: "Manoj P.", sparesUsed: "Gasket Set (8 pcs)", cost: "₹ 1,200", nextDueDate: "2026-08-15", remarks: "Plates OK, no pitting" },
    { id: 2, date: "2026-07-15", equipId: "PAST-01", eventType: "Calibration",description: "Temperature sensor & FDV calibration",              techName: "Dr. Verma",sparesUsed: "Nil",               cost: "Nil",      nextDueDate: "2027-01-15", remarks: "Calibration cert issued" },
    { id: 3, date: "2026-07-15", equipId: "FL1",     eventType: "Breakdown",  description: "Sealing jaw silicon pad replaced",                  techName: "Manoj P.", sparesUsed: "Silicon Pad x2",     cost: "₹ 450",   nextDueDate: "2026-07-22", remarks: "BD Report BD-01/26" },
    { id: 4, date: "2026-07-10", equipId: "RMST-1",  eventType: "PM",         description: "Agitator seal & bearing greasing done",            techName: "Rajiv S.", sparesUsed: "Grease 200g",        cost: "₹ 180",   nextDueDate: "2026-08-10", remarks: "OK, no leakage" },
  ]);

  const [sparePartsRows, setSparePartsRows] = useState([
    { id: 1, partCode: "SP-SK-6204",  partName: "SKF Ball Bearing 6204",          equipUsedFor: "Pasteurizer Pump",      uom: "Nos",  openingStock: "3",  received: "2",  issued: "1",  closingStock: "4",  minLevel: "2", reorderQty: "5", supplier: "SKF India",      remarks: "Last issued BD-02/26" },
    { id: 2, partCode: "SP-SJ-PAD",   partName: "Sealing Jaw Silicon Pad",        equipUsedFor: "Filling Machine FL1",   uom: "Nos",  openingStock: "10", received: "0",  issued: "2",  closingStock: "8",  minLevel: "4", reorderQty: "10",supplier: "Tetra Pak",      remarks: "BD-01/26 used 2 pcs" },
    { id: 3, partCode: "SP-GS-PH01",  partName: "PHE Gasket Set (Pasteurizer)",   equipUsedFor: "Pasteurizer PAST-01",   uom: "Set",  openingStock: "2",  received: "3",  issued: "1",  closingStock: "4",  minLevel: "2", reorderQty: "5", supplier: "APV India",      remarks: "PM July use" },
    { id: 4, partCode: "SP-RF-404A",  partName: "R-404A Refrigerant Gas",         equipUsedFor: "Refrigeration Comp.",   uom: "Kg",   openingStock: "5",  received: "4",  issued: "2",  closingStock: "7",  minLevel: "4", reorderQty: "8", supplier: "Bry-Air",        remarks: "BD-03/26 used 2 kg" },
    { id: 5, partCode: "SP-OIL-HYD",  partName: "Hydraulic Oil ISO 46",           equipUsedFor: "Homogenizer",           uom: "Ltrs", openingStock: "10", received: "20", issued: "5",  closingStock: "25", minLevel: "10",reorderQty: "20",supplier: "Castrol India",  remarks: "Routine oil change" },
  ]);

  const [utilityLogRows, setUtilityLogRows] = useState([
    { id: 1, dateTime: "2026-07-18 06:00", utility: "Boiler (IBR Fired)",            param1Label: "Steam Press (kg/cm²)", param1: "7.5", param2Label: "Feed Water Temp (°C)", param2: "80",  param3Label: "Fuel Used (Litre)", param3: "45",  param4Label: "Efficiency (%)", param4: "82", status: "Normal", operator: "Vijay K." },
    { id: 2, dateTime: "2026-07-18 06:00", utility: "Chiller Unit-1",               param1Label: "Suction Temp (°C)",   param1: "2.5", param2Label: "Discharge Pr (bar)",   param2: "12.5",param3Label: "Chilled Water Temp",param3: "1.5", param4Label: "Amp Draw (A)",   param4: "42", status: "Normal", operator: "Vijay K." },
    { id: 3, dateTime: "2026-07-18 06:00", utility: "Air Compressor",              param1Label: "Line Pressure (bar)",  param1: "7.2", param2Label: "Oil Level",            param2: "OK",  param3Label: "Drain Blow Done",   param3: "Yes", param4Label: "Amp Draw (A)",   param4: "28", status: "Normal", operator: "Vijay K." },
    { id: 4, dateTime: "2026-07-18 06:00", utility: "RO Water Plant",              param1Label: "Feed TDS (ppm)",      param1: "450", param2Label: "Product TDS (ppm)",    param2: "45",  param3Label: "Rejection Rate (%)",param3: "40",  param4Label: "Flow (L/hr)",    param4: "500", status: "Normal", operator: "Rakesh M." },
    { id: 5, dateTime: "2026-07-18 14:00", utility: "Boiler (IBR Fired)",            param1Label: "Steam Press (kg/cm²)", param1: "7.8", param2Label: "Feed Water Temp (°C)", param2: "82",  param3Label: "Fuel Used (Litre)", param3: "48",  param4Label: "Efficiency (%)", param4: "83", status: "Normal", operator: "Rakesh M." },
  ]);

  const [lubricationRows, setLubricationRows] = useState([
    { id: 1, equipId: "PAST-01", machine: "Pasteurizer-01",          lubricationPoint: "Pump bearing housing",         lubricantGrade: "Castrol Molub-Alloy 777", frequency: "Monthly",     lastDoneDate: "2026-07-01", nextDueDate: "2026-08-01", qtyUsed: "50 g",  doneBy: "Manoj P.", verified: "Mgr. Rao",  remarks: "OK" },
    { id: 2, equipId: "FL1",     machine: "Filling Machine FL1",     lubricationPoint: "Sealing jaw pivot & rails",    lubricantGrade: "Food Grade Oil ISO 46",    frequency: "Weekly",      lastDoneDate: "2026-07-14", nextDueDate: "2026-07-21", qtyUsed: "10 ml", doneBy: "Rajiv S.", verified: "Mgr. Rao",  remarks: "PM done" },
    { id: 3, equipId: "HMGN-01", machine: "Homogenizer",             lubricationPoint: "Crankshaft & con-rod bearings",lubricantGrade: "Hydraulic Oil ISO 46",      frequency: "Fortnightly", lastDoneDate: "2026-07-10", nextDueDate: "2026-07-24", qtyUsed: "200 ml",doneBy: "Manoj P.", verified: "Mgr. Rao",  remarks: "No leak" },
    { id: 4, equipId: "COMP-02", machine: "Refrigeration Comp.-2",   lubricationPoint: "Compressor crankcase oil",     lubricantGrade: "Suniso 3GS Ref. Oil",       frequency: "Monthly",     lastDoneDate: "2026-07-05", nextDueDate: "2026-08-05", qtyUsed: "1 Ltr", doneBy: "Rajiv S.", verified: "Mgr. Rao",  remarks: "Level topped" },
    { id: 5, equipId: "BOILER",  machine: "Boiler Feed Water Pump",  lubricationPoint: "Pump coupling & bearing",      lubricantGrade: "Grease - Lithium EP2",      frequency: "Monthly",     lastDoneDate: "2026-07-08", nextDueDate: "2026-08-08", qtyUsed: "30 g",  doneBy: "Vijay K.", verified: "Mgr. Rao",  remarks: "OK" },
  ]);

  const [workPermitRows, setWorkPermitRows] = useState([
    { id: 1, permitNo: "WP-2026-01", date: "2026-07-14", workDescription: "Hot work - welding on boiler steam line",    equipment: "Boiler Steam Line",    workType: "Hot Work",  hazard: "Burn / Fire",        precautions: "Fire extinguisher standby, PPE full",   issuedBy: "Mgr. Rao",  startTime: "10:00", endTime: "12:00", status: "Closed", closedBy: "Mgr. Rao"  },
    { id: 2, permitNo: "WP-2026-02", date: "2026-07-15", workDescription: "Electrical panel maintenance - pasteurizer", equipment: "Pasteurizer DB Panel", workType: "Electrical",hazard: "Electrocution",       precautions: "LOTO applied, rubber gloves, insulated tools",issuedBy: "Mgr. Rao",  startTime: "09:00", endTime: "11:30", status: "Closed", closedBy: "Mgr. Rao"  },
    { id: 3, permitNo: "WP-2026-03", date: "2026-07-16", workDescription: "Confined space entry - silo RMST-1 cleaning",equipment: "Milk Silo RMST-1",     workType: "Confined Space",hazard: "Asphyxiation / Fall",precautions: "Gas test done, lifeline, buddy system",  issuedBy: "Mgr. Rao",  startTime: "14:00", endTime: "17:00", status: "Closed", closedBy: "Mgr. Rao"  },
  ]);

  // ── New Plant Operations (Production) Formats ──
  const [processingRows, setProcessingRows] = useState([
    { id: 1, silo: "SILO-01", milkQty: "10000", rawFat: "4.50", rawSnf: "8.50", targetFat: "4.00", targetSnf: "8.50", skimAdded: "1250", creamAdded: "0", finalFat: "4.00", finalSnf: "8.50", operator: "Amit K." },
    { id: 2, silo: "SILO-02", milkQty: "8000",  rawFat: "3.80", rawSnf: "8.40", targetFat: "4.50", targetSnf: "8.50", skimAdded: "0",    creamAdded: "180", finalFat: "4.50", finalSnf: "8.50", operator: "Suresh V." }
  ]);

  const [qaLabRows, setQaLabRows] = useState([
    { id: 1, source: "Tanker HR-55-A-1234", batchNo: "TK-101", temp: "4.2", acidity: "0.135", mbrt: "5.5 hrs", alcoholTest: "Negative (68%)", cob: "Negative", fat: "4.20", snf: "8.55", analyst: "Dr. Verma" },
    { id: 2, source: "Pasteurizer Outlet",   batchNo: "PST-202", temp: "4.0", acidity: "0.130", mbrt: ">6 hrs",  alcoholTest: "Negative (68%)", cob: "Negative", fat: "4.00", snf: "8.50", analyst: "Ritu S." }
  ]);

  const [packagingQcRows, setPackagingQcRows] = useState([
    { id: 1, machineNo: "FL-01", product: "Full Cream 500ml", time: "09:00", targetWeight: "505g", actualWeight: "504.8g", sealingTemp: "165°C", leakCheck: "Pass", printCheck: "Clear (MRP/Exp)", inspector: "Rajesh T." },
    { id: 2, machineNo: "FL-02", product: "Toned Milk 500ml",  time: "09:30", targetWeight: "504g", actualWeight: "504.2g", sealingTemp: "162°C", leakCheck: "Pass", printCheck: "Clear (MRP/Exp)", inspector: "Rajesh T." }
  ]);

  const [coldRoomRegRows, setColdRoomRegRows] = useState([
    { id: 1, coldRoomNo: "Cold Room #1", time: "08:00", temp: "3.5°C", product: "Milk Pouches (FCM/TM)", crateCount: "1250", stackHeight: "5 Crates", fifoStatus: "Maintained", defrostStatus: "Normal", incharge: "Vikram S." },
    { id: 2, coldRoomNo: "Cold Room #2", time: "08:00", temp: "2.8°C", product: "Paneer & Dahi Crates",  crateCount: "420",  stackHeight: "4 Crates", fifoStatus: "Maintained", defrostStatus: "Defrosting", incharge: "Vikram S." }
  ]);

  const [curdDahiRows, setCurdDahiRows] = useState([
    { id: 1, batchNo: "DH-2026-01", product: "Pouch Dahi 400g", milkQty: "2000 L", cultureCode: "YC-380", inocTemp: "43.0°C", startTime: "10:00", setTime: "14:30", finalAcidity: "0.75%", operator: "Suresh V." },
    { id: 2, batchNo: "LS-2026-04", product: "Sweet Lassi 200ml", milkQty: "1500 L", cultureCode: "ABT-5",   inocTemp: "42.5°C", startTime: "11:00", setTime: "15:15", finalAcidity: "0.68%", operator: "Ritu S." }
  ]);

  // ── New Maintenance (Mechanical & Utilities) Formats ──
  const [boilerLogRows, setBoilerLogRows] = useState([
    { id: 1, shiftTime: "06:00", steamPress: "7.5 bar", feedTemp: "82°C", softenerHardness: "<5 ppm", blowdown: "Done (10s)", fuelCons: "45 L/hr", flueTemp: "185°C", operator: "Vijay K." },
    { id: 2, shiftTime: "10:00", steamPress: "7.8 bar", feedTemp: "85°C", softenerHardness: "<5 ppm", blowdown: "Done (10s)", fuelCons: "48 L/hr", flueTemp: "188°C", operator: "Vijay K." }
  ]);

  const [refrigerationLogRows, setRefrigerationLogRows] = useState([
    { id: 1, compNo: "Ammonia Comp #1", suctionPress: "2.1 bar", dischargePress: "12.2 bar", oilPress: "3.5 bar", glycolTemp: "1.2°C", condenserWaterTemp: "28.5°C", ampDraw: "145 A", operator: "Rajiv S." },
    { id: 2, compNo: "Ammonia Comp #2", suctionPress: "2.2 bar", dischargePress: "12.0 bar", oilPress: "3.4 bar", glycolTemp: "1.5°C", condenserWaterTemp: "28.0°C", ampDraw: "140 A", operator: "Rajiv S." }
  ]);

  const [electricalDgRows, setElectricalDgRows] = useState([
    { id: 1, time: "06:00", ebMeterKwh: "145280", powerFactor: "0.98", dgRunHrs: "1240.5 h", dieselLevel: "450 L", phaseAmp: "R:320 A, Y:315 A, B:322 A", voltage: "415 V", electrician: "Manoj P." },
    { id: 2, time: "14:00", ebMeterKwh: "147110", powerFactor: "0.97", dgRunHrs: "1240.5 h", dieselLevel: "450 L", phaseAmp: "R:340 A, Y:335 A, B:338 A", voltage: "412 V", electrician: "Manoj P." }
  ]);

  const [compressorRows, setCompressorRows] = useState([
    { id: 1, compId: "Screw Comp AC-1", time: "06:00", linePress: "7.2 bar", dewPoint: "3.0°C", oilLevel: "Normal (3/4)", moistureDrain: "Auto Blow OK", totalRunHrs: "3420 h", operator: "Vijay K." },
    { id: 2, compId: "Vane Comp AC-2",  time: "06:00", linePress: "7.0 bar", dewPoint: "3.5°C", oilLevel: "Normal (1/2)", moistureDrain: "Auto Blow OK", totalRunHrs: "2150 h", operator: "Vijay K." }
  ]);

  const [calibrationRegRows, setCalibrationRegRows] = useState([
    { id: 1, tagNo: "PG-PST-01", instName: "Pasteurizer Inlet Pressure Gauge", location: "Pasteurizer #1", range: "0 - 10 bar", lastCalibDate: "2026-01-10", nextDueDate: "2027-01-10", standardUsed: "Master Calibrator", errorDeviation: "0.02 bar", technician: "Dr. Verma", certNo: "CAL-2026-88" },
    { id: 2, tagNo: "RTD-SILO-02", instName: "Pt-100 Temp Sensor",              location: "Milk Silo #2",   range: "-20 to 100°C", lastCalibDate: "2026-03-15", nextDueDate: "2027-03-15", standardUsed: "Fluke Calibrator",  errorDeviation: "0.1°C",     technician: "Dr. Verma", certNo: "CAL-2026-104" }
  ]);

  const [etpWtpRows, setEtpWtpRows] = useState([
    { id: 1, time: "08:00", rawWaterFlow: "120 m³", treatedWaterPh: "7.2", etpInletPh: "6.5", aerationDo: "2.5 ppm", sludgeDischarge: "500 L", dosingChem: "Alum 5kg, Polymer 1kg", operator: "Rakesh M." },
    { id: 2, time: "16:00", rawWaterFlow: "115 m³", treatedWaterPh: "7.4", etpInletPh: "6.8", aerationDo: "2.8 ppm", sludgeDischarge: "450 L", dosingChem: "Alum 5kg, Polymer 1kg", operator: "Rakesh M." }
  ]);

  // ════════════════════════════════════════════════════
  //  MEMOS & HANDLERS
  // ════════════════════════════════════════════════════

  const selectedFormat = useMemo(() => FORMATS_CATALOG.find(f => f.id === selectedFormatId)!, [selectedFormatId]);

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

  const handlePrint = () => window.print();

  const handleDownloadPdf = async () => {
    if (!printAreaRef.current) return;
    setIsDownloading(true);
    try {
      printAreaRef.current.classList.add("is-exporting-pdf");
      const canvas = await html2canvas(printAreaRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      printAreaRef.current.classList.remove("is-exporting-pdf");
      const imgData = canvas.toDataURL("image/png");
      const isLandscape = currentOrientation === "landscape";
      const pdf = new jsPDF({ orientation: isLandscape ? "l" : "p", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, (canvas.height * pdfWidth) / canvas.width);
      pdf.save(`plant_${selectedFormat.id}_${currentDate}.pdf`);
      toast({ title: "PDF Generated", description: "Your printable PDF log sheet is ready." });
    } catch (e) {
      if (printAreaRef.current) {
        printAreaRef.current.classList.remove("is-exporting-pdf");
      }
      toast({ title: "Export Failed", description: "Failed to generate PDF.", variant: "destructive" });
    }
    setIsDownloading(false);
  };

  // ── Update helpers ──
  const updateRmReceptionRow   = (id: number, f: string, v: string) => setRmReceptionRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateBmrRow           = (id: number, f: string, v: string) => setBmrRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateProcessRow       = (id: number, f: string, v: string) => setProcessRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updatePackingRow       = (id: number, f: string, v: string) => setPackingRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateCipRow           = (id: number, f: string, v: string) => setCipRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateBreakdownMaintRow= (id: number, f: string, v: string) => setBreakdownMaintRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateYieldRow         = (id: number, f: string, v: string) => setYieldRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updatePmLogRow         = (id: number, f: string, v: string) => setPmLogRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateBreakdownLogRow  = (id: number, f: string, v: string) => setBreakdownLogRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateEquipHistoryRow  = (id: number, f: string, v: string) => setEquipHistoryRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateSparePartsRow    = (id: number, f: string, v: string) => setSparePartsRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateUtilityLogRow    = (id: number, f: string, v: string) => setUtilityLogRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateLubricationRow   = (id: number, f: string, v: string) => setLubricationRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateWorkPermitRow    = (id: number, f: string, v: string) => setWorkPermitRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateProcessingRow        = (id: number, f: string, v: string) => setProcessingRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateQaLabRow             = (id: number, f: string, v: string) => setQaLabRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updatePackagingQcRow       = (id: number, f: string, v: string) => setPackagingQcRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateColdRoomRegRow       = (id: number, f: string, v: string) => setColdRoomRegRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateCurdDahiRow          = (id: number, f: string, v: string) => setCurdDahiRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateBoilerLogRow         = (id: number, f: string, v: string) => setBoilerLogRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateRefrigerationLogRow  = (id: number, f: string, v: string) => setRefrigerationLogRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateElectricalDgRow      = (id: number, f: string, v: string) => setElectricalDgRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateCompressorRow        = (id: number, f: string, v: string) => setCompressorRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateCalibrationRegRow    = (id: number, f: string, v: string) => setCalibrationRegRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));
  const updateEtpWtpRow            = (id: number, f: string, v: string) => setEtpWtpRows(p => p.map(r => r.id===id?{...r,[f]:v}:r));

  // ── Add Row ──
  const addRow = () => {
    const now = Date.now();
    switch (selectedFormatId) {
      case "rm-reception":    setRmReceptionRows(p=>[...p,{id:now,tankerNo:"",supplier:"",arrivalTime:"",qty:"",temp:"",acidity:"",fat:"",snf:"",cob:"Negative",status:"Accepted",siloAllotted:"",operator:""}]); break;
      case "bmr":             setBmrRows(p=>[...p,{id:now,step:String(p.length+1).padStart(2,"0"),operation:"",startTime:"",endTime:"",milkQty:"",temp:"",remarks:"",doneBy:"",verified:""}]); break;
      case "process-monitoring": setProcessRows(p=>[...p,{id:now,time:"",equipment:"",inletTemp:"",htTemp:"",outTemp:"",pressure:"",flowRate:"",phpStatus:"Pass",operator:""}]); break;
      case "processing-standardization": setProcessingRows(p=>[...p,{id:now,silo:"",milkQty:"",rawFat:"",rawSnf:"",targetFat:"",targetSnf:"",skimAdded:"",creamAdded:"",finalFat:"",finalSnf:"",operator:""}]); break;
      case "qa-lab-log":                setQaLabRows(p=>[...p,{id:now,source:"",batchNo:"",temp:"",acidity:"",mbrt:"",alcoholTest:"",cob:"Negative",fat:"",snf:"",analyst:""}]); break;
      case "packing-dispatch":setPackingRows(p=>[...p,{id:now,batchNo:"",product:"",shift:"",packedQty:"",vehicle:"",destination:"",dispatchTime:"",tempAtDispatch:"",status:"Dispatched",operator:""}]); break;
      case "packaging-qc":              setPackagingQcRows(p=>[...p,{id:now,machineNo:"",product:"",time:"",targetWeight:"",actualWeight:"",sealingTemp:"",leakCheck:"Pass",printCheck:"Clear",inspector:""}]); break;
      case "cold-room-register":        setColdRoomRegRows(p=>[...p,{id:now,coldRoomNo:"",time:"",temp:"",product:"",crateCount:"",stackHeight:"",fifoStatus:"Maintained",defrostStatus:"Normal",incharge:""}]); break;
      case "cip-cleaning":    setCipRows(p=>[...p,{id:now,equipment:"",cipType:"",startTime:"",endTime:"",temp:"",causticConc:"",acidConc:"",duration:"",operator:"",qaStatus:"OK"}]); break;
      case "curd-dahi-log":             setCurdDahiRows(p=>[...p,{id:now,batchNo:"",product:"",milkQty:"",cultureCode:"",inocTemp:"",startTime:"",setTime:"",finalAcidity:"",operator:""}]); break;
      case "machine-breakdown":setBreakdownMaintRows(p=>[...p,{id:now,date:currentDate,machine:"",breakdownTime:"",rootCause:"",action:"",resumedTime:"",downtime:"",spareUsed:"",engineer:"",status:"Resolved"}]); break;
      case "yield-handover":  setYieldRows(p=>[...p,{id:now,shift:"",product:"",milkInput:"",output:"",yieldPct:"",rejections:"0",pendingBatches:"Nil",operator:""}]); break;
      case "pm-log":          setPmLogRows(p=>[...p,{id:now,srNo:String(p.length+1).padStart(2,"0"),equipment:"",pmTask:"",frequency:"Monthly",scheduledDate:currentDate,doneDate:"",parametersChecked:"",status:"Pending",doneBy:"",verified:""}]); break;
      case "breakdown-log":   setBreakdownLogRows(p=>[...p,{id:now,reportNo:`BD-${String(p.length+1).padStart(2,"0")}/26`,date:currentDate,machine:"",breakdownTime:"",resumedTime:"",downtime:"",rootCause:"",correctiveAction:"",preventiveAction:"",spareUsed:"",engineer:"",status:"Open"}]); break;
      case "equipment-history":setEquipHistoryRows(p=>[...p,{id:now,date:currentDate,equipId:"",eventType:"PM",description:"",techName:"",sparesUsed:"Nil",cost:"Nil",nextDueDate:"",remarks:""}]); break;
      case "spare-parts":     setSparePartsRows(p=>[...p,{id:now,partCode:"",partName:"",equipUsedFor:"",uom:"Nos",openingStock:"0",received:"0",issued:"0",closingStock:"0",minLevel:"",reorderQty:"",supplier:"",remarks:""}]); break;
      case "utility-log":     setUtilityLogRows(p=>[...p,{id:now,dateTime:"",utility:"",param1Label:"Reading 1",param1:"",param2Label:"Reading 2",param2:"",param3Label:"Reading 3",param3:"",param4Label:"Reading 4",param4:"",status:"Normal",operator:""}]); break;
      case "boiler-log":                setBoilerLogRows(p=>[...p,{id:now,shiftTime:"",steamPress:"",feedTemp:"",softenerHardness:"",blowdown:"",fuelCons:"",flueTemp:"",operator:""}]); break;
      case "refrigeration-log":         setRefrigerationLogRows(p=>[...p,{id:now,compNo:"",suctionPress:"",dischargePress:"",oilPress:"",glycolTemp:"",condenserWaterTemp:"",ampDraw:"",operator:""}]); break;
      case "electrical-dg-log":         setElectricalDgRows(p=>[...p,{id:now,time:"",ebMeterKwh:"",powerFactor:"",dgRunHrs:"",dieselLevel:"",phaseAmp:"",voltage:"",electrician:""}]); break;
      case "compressor-log":            setCompressorRows(p=>[...p,{id:now,compId:"",time:"",linePress:"",dewPoint:"",oilLevel:"",moistureDrain:"",totalRunHrs:"",operator:""}]); break;
      case "calibration-register":      setCalibrationRegRows(p=>[...p,{id:now,tagNo:"",instName:"",location:"",range:"",lastCalibDate:currentDate,nextDueDate:"",standardUsed:"",errorDeviation:"",technician:"",certNo:""}]); break;
      case "etp-wtp-log":               setEtpWtpRows(p=>[...p,{id:now,time:"",rawWaterFlow:"",treatedWaterPh:"",etpInletPh:"",aerationDo:"",sludgeDischarge:"",dosingChem:"",operator:""}]); break;
      case "lubrication-log": setLubricationRows(p=>[...p,{id:now,equipId:"",machine:"",lubricationPoint:"",lubricantGrade:"",frequency:"Monthly",lastDoneDate:currentDate,nextDueDate:"",qtyUsed:"",doneBy:"",verified:"",remarks:""}]); break;
      case "work-permit":     setWorkPermitRows(p=>[...p,{id:now,permitNo:`WP-2026-${String(p.length+1).padStart(2,"0")}`,date:currentDate,workDescription:"",equipment:"",workType:"Cold Work",hazard:"",precautions:"",issuedBy:"",startTime:"",endTime:"",status:"Open",closedBy:""}]); break;
    }
  };

  // ── Delete Row ──
  const deleteRow = (id: number) => {
    switch (selectedFormatId) {
      case "rm-reception":     if(rmReceptionRows.length>1)   setRmReceptionRows(p=>p.filter(r=>r.id!==id));    break;
      case "bmr":              if(bmrRows.length>1)            setBmrRows(p=>p.filter(r=>r.id!==id));            break;
      case "process-monitoring":if(processRows.length>1)       setProcessRows(p=>p.filter(r=>r.id!==id));        break;
      case "processing-standardization": if(processingRows.length>1) setProcessingRows(p=>p.filter(r=>r.id!==id)); break;
      case "qa-lab-log":       if(qaLabRows.length>1)          setQaLabRows(p=>p.filter(r=>r.id!==id));          break;
      case "packing-dispatch": if(packingRows.length>1)        setPackingRows(p=>p.filter(r=>r.id!==id));        break;
      case "packaging-qc":     if(packagingQcRows.length>1)    setPackagingQcRows(p=>p.filter(r=>r.id!==id));    break;
      case "cold-room-register": if(coldRoomRegRows.length>1)  setColdRoomRegRows(p=>p.filter(r=>r.id!==id));    break;
      case "cip-cleaning":     if(cipRows.length>1)            setCipRows(p=>p.filter(r=>r.id!==id));            break;
      case "curd-dahi-log":    if(curdDahiRows.length>1)       setCurdDahiRows(p=>p.filter(r=>r.id!==id));       break;
      case "machine-breakdown":if(breakdownMaintRows.length>1) setBreakdownMaintRows(p=>p.filter(r=>r.id!==id)); break;
      case "yield-handover":   if(yieldRows.length>1)          setYieldRows(p=>p.filter(r=>r.id!==id));          break;
      case "pm-log":           if(pmLogRows.length>1)          setPmLogRows(p=>p.filter(r=>r.id!==id));          break;
      case "breakdown-log":    if(breakdownLogRows.length>1)   setBreakdownLogRows(p=>p.filter(r=>r.id!==id));   break;
      case "equipment-history":if(equipHistoryRows.length>1)   setEquipHistoryRows(p=>p.filter(r=>r.id!==id));   break;
      case "spare-parts":      if(sparePartsRows.length>1)     setSparePartsRows(p=>p.filter(r=>r.id!==id));     break;
      case "utility-log":      if(utilityLogRows.length>1)     setUtilityLogRows(p=>p.filter(r=>r.id!==id));     break;
      case "boiler-log":       if(boilerLogRows.length>1)      setBoilerLogRows(p=>p.filter(r=>r.id!==id));      break;
      case "refrigeration-log":if(refrigerationLogRows.length>1) setRefrigerationLogRows(p=>p.filter(r=>r.id!==id)); break;
      case "electrical-dg-log":if(electricalDgRows.length>1)   setElectricalDgRows(p=>p.filter(r=>r.id!==id));   break;
      case "compressor-log":   if(compressorRows.length>1)     setCompressorRows(p=>p.filter(r=>r.id!==id));     break;
      case "calibration-register": if(calibrationRegRows.length>1) setCalibrationRegRows(p=>p.filter(r=>r.id!==id)); break;
      case "etp-wtp-log":      if(etpWtpRows.length>1)         setEtpWtpRows(p=>p.filter(r=>r.id!==id));         break;
      case "lubrication-log":  if(lubricationRows.length>1)    setLubricationRows(p=>p.filter(r=>r.id!==id));    break;
      case "work-permit":      if(workPermitRows.length>1)     setWorkPermitRows(p=>p.filter(r=>r.id!==id));     break;
    }
  };

  const inp = "w-full bg-transparent border-none focus:ring-0";

  return (
    <div className="space-y-6">

      {/* Top Header Card */}
      <Card className="border-b-4 border-b-emerald-600 shadow-md">
        <CardHeader className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white p-6 rounded-t-xl">
          <div>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold font-headline">
              <FileText className="h-7 w-7 text-emerald-400" />
              Dairy Plant Formats & Log Sheets
            </CardTitle>
            <CardDescription className="text-emerald-200 mt-1 text-xs md:text-sm">
              Ready-to-print dairy plant operational & maintenance log sheets. Customize, fill, and export as A4 PDF.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ── Sidebar ── */}
        <div className="lg:col-span-1 space-y-4 print:hidden">

          {/* Plant Info */}
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-100 p-4 border-b">
              <CardTitle className="text-xs font-bold text-slate-800 uppercase tracking-wider">1. Plant Info</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div>
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Company Name</Label>
                <div className="relative mt-1">
                  <Building2 className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input value={companyName} onChange={e => setCompanyName(e.target.value.toUpperCase())} className="pl-9 h-9 text-xs font-bold border-slate-200" />
                </div>
              </div>
              <div>
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Plant / Unit</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input value={plantLocation} onChange={e => setPlantLocation(e.target.value.toUpperCase())} className="pl-9 h-9 text-xs border-slate-200" />
                </div>
              </div>
              <div>
                <Label className="text-[10px] font-bold text-slate-500 uppercase">Date</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input type="date" value={currentDate} onChange={e => setCurrentDate(e.target.value)} className="pl-9 h-9 text-xs border-slate-200" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Format Selector — grouped */}
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-100 p-4 border-b">
              <CardTitle className="text-xs font-bold text-slate-800 uppercase tracking-wider">2. Select Format</CardTitle>
            </CardHeader>
            <CardContent className="p-3 space-y-3">
              {GROUPS.map(group => (
                <div key={group}>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 px-1 mb-1.5">{group}</div>
                  <div className="space-y-1.5">
                    {FORMATS_CATALOG.filter(f => f.group === group).map(fmt => {
                      const Icon = fmt.icon;
                      return (
                        <button
                          key={fmt.id}
                          onClick={() => setSelectedFormatId(fmt.id)}
                          className={cn(
                            "w-full text-left p-2.5 rounded-lg border text-xs transition-all",
                            selectedFormatId === fmt.id
                              ? "bg-emerald-700 border-emerald-600 text-white font-bold shadow"
                              : "bg-white border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="leading-tight">{fmt.title}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-100 p-4 border-b">
              <CardTitle className="text-xs font-bold text-slate-800 uppercase tracking-wider">3. Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-3 space-y-2">
              <Button onClick={addRow} variant="outline" size="sm" className="w-full text-xs border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold">
                <Plus className="w-3.5 h-3.5 mr-2" /> Add Row
              </Button>
              <Button onClick={addColumn} variant="outline" size="sm" className="w-full text-xs border-blue-600 text-blue-700 hover:bg-blue-50 font-bold">
                <Columns className="w-3.5 h-3.5 mr-2" /> Add Column
              </Button>
              <Button onClick={toggleOrientation} variant="outline" size="sm" className="w-full text-xs border-slate-300 text-slate-700 hover:bg-slate-50 font-bold">
                <RotateCw className="w-3.5 h-3.5 mr-2" /> {currentOrientation === "landscape" ? "A4 Landscape" : "A4 Portrait"}
              </Button>
              <Button onClick={handlePrint} variant="outline" size="sm" className="w-full text-xs border-slate-300 font-semibold">
                <Printer className="w-3.5 h-3.5 mr-2" /> Print
              </Button>
              <Button onClick={handleDownloadPdf} disabled={isDownloading} size="sm" className="w-full text-xs bg-emerald-700 hover:bg-emerald-800 text-white font-bold">
                {isDownloading ? <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" /> : <Download className="w-3.5 h-3.5 mr-2" />}
                Download PDF
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* ── Preview Column ── */}
        <div className="lg:col-span-3 space-y-4">

          {/* Print Controls Top Bar */}
          <div className="flex flex-wrap justify-between items-center bg-slate-100 p-3 rounded-xl border border-slate-200 gap-2 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700 uppercase">Layout: {currentOrientation} A4</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={addRow} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex gap-1">
                <Plus className="w-3.5 h-3.5" /> Add Row
              </Button>
              <Button size="sm" onClick={addColumn} variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50 font-bold text-xs flex gap-1">
                <Columns className="w-3.5 h-3.5" /> Add Column
              </Button>
              <Button size="sm" onClick={toggleOrientation} variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs flex gap-1">
                <RotateCw className="w-3.5 h-3.5" /> {currentOrientation === "landscape" ? "A4 Landscape" : "A4 Portrait"}
              </Button>
              <Button size="sm" onClick={handlePrint} className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex gap-1">
                <Printer className="w-4 h-4" /> Print
              </Button>
              <Button size="sm" onClick={handleDownloadPdf} disabled={isDownloading} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex gap-1">
                {isDownloading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Download className="w-4 h-4"/>} 
                Download PDF
              </Button>
            </div>
          </div>

          {/* Document Sheet Area with Touch Horizontal Scroll for Mobile */}
          <div className="overflow-x-auto print:overflow-visible touch-pan-x pb-4">
            <div
              id="print-area-formats"
              ref={printAreaRef}
              className={cn(
                "bg-white border border-slate-200 shadow-md font-sans text-black mx-auto overflow-hidden print:border-none print:shadow-none print:p-0 print:m-0",
                currentOrientation === "landscape" 
                  ? "w-[297mm] min-h-[210mm] p-[15mm] print:w-[297mm] print:h-[210mm]" 
                  : "w-[210mm] min-h-[297mm] p-[15mm] print:w-[210mm] print:h-[297mm]"
              )}
              style={{ boxSizing: "border-box" }}
            >
            {/* Document Header */}
            <div className="space-y-3 mb-4">
              <div className="border-2 border-black p-3 text-center bg-white">
                <h1 className="text-base font-black tracking-widest text-black uppercase leading-tight">
                  {companyName || "DAIRY HUB COOPERATIVE"}
                </h1>
                <p className="text-[10px] font-bold text-slate-800 uppercase mt-1 tracking-wider">
                  {plantLocation || "MAIN PROCESS PLANT"}
                </p>
                <div className="border-t border-black my-2" />
                <h2 className="text-sm font-black tracking-widest text-black uppercase leading-none">
                  {selectedFormat?.title}
                </h2>
              </div>

              {/* Meta Details Row */}
              <div className="grid grid-cols-3 border border-black p-2 bg-slate-50 text-[10px] font-bold gap-2 text-black">
                <div>DATE: <span className="font-normal border-b border-black border-dotted ml-1">{currentDate}</span></div>
                <div className="text-center">SHIFT IN-CHARGE: <span className="font-normal border-b border-black border-dotted ml-1">_________________</span></div>
                <div className="text-right">FORMAT NO: <span className="font-mono font-normal border-b border-black border-dotted ml-1">PLT-{selectedFormat?.id.toUpperCase().replace(/-/g,"")}-{currentDate.replace(/-/g,"")}</span></div>
              </div>
            </div>

            {/* ── Format Tables ── */}
            <div className="space-y-3">

              {/* ═══ 1. Raw Milk Reception & Storage Log ═══ */}
              {selectedFormatId === "rm-reception" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-20">Tanker No.</th>
                      <th className="border border-black px-1.5 py-1 text-left">Supplier</th>
                      <th className="border border-black px-1.5 py-1 w-14">Time</th>
                      <th className="border border-black px-1.5 py-1 w-14">Qty (L)</th>
                      <th className="border border-black px-1.5 py-1 w-12">Temp (°C)</th>
                      <th className="border border-black px-1.5 py-1 w-14">Acidity</th>
                      <th className="border border-black px-1.5 py-1 w-10">Fat</th>
                      <th className="border border-black px-1.5 py-1 w-10">SNF</th>
                      <th className="border border-black px-1.5 py-1 w-16">COB Test</th>
                      <th className="border border-black px-1.5 py-1 w-14">Status</th>
                      <th className="border border-black px-1.5 py-1 w-14">Silo</th>
                      <th className="border border-black px-1.5 py-1 w-14">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {rmReceptionRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.tankerNo} onChange={e=>updateRmReceptionRow(r.id,"tankerNo",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.supplier} onChange={e=>updateRmReceptionRow(r.id,"supplier",e.target.value)} className={cn(inp,"text-[9px] p-1")} /></td>
                          <td className="border border-black p-0.5"><input value={r.arrivalTime} onChange={e=>updateRmReceptionRow(r.id,"arrivalTime",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.qty} onChange={e=>updateRmReceptionRow(r.id,"qty",e.target.value)} className={cn(inp,"text-[9px] p-1 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.temp} onChange={e=>updateRmReceptionRow(r.id,"temp",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.acidity} onChange={e=>updateRmReceptionRow(r.id,"acidity",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.fat} onChange={e=>updateRmReceptionRow(r.id,"fat",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.snf} onChange={e=>updateRmReceptionRow(r.id,"snf",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.cob} onChange={e=>updateRmReceptionRow(r.id,"cob",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-semibold",r.cob.toLowerCase().includes("positive")?"text-red-700":"text-slate-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.status} onChange={e=>updateRmReceptionRow(r.id,"status",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold",r.status.toLowerCase().includes("reject")?"text-red-700":"text-green-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.siloAllotted} onChange={e=>updateRmReceptionRow(r.id,"siloAllotted",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateRmReceptionRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50 font-bold border-t-2 border-black">
                        <td colSpan={3} className="border border-black px-1.5 py-1 text-[9px] uppercase">Total Received</td>
                        <td className="border border-black px-1.5 py-1 text-right font-black font-mono text-[9px]">{rmReceptionRows.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toLocaleString()} L</td>
                        <td colSpan={9} className="border border-black px-1.5 py-1 bg-slate-100"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 2. Batch Manufacturing Record (BMR) ═══ */}
              {selectedFormatId === "bmr" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-10">Step</th>
                      <th className="border border-black px-1.5 py-1 text-left">Operation / Process Step</th>
                      <th className="border border-black px-1.5 py-1 w-14">Start</th>
                      <th className="border border-black px-1.5 py-1 w-14">End</th>
                      <th className="border border-black px-1.5 py-1 w-16">Milk Qty (L)</th>
                      <th className="border border-black px-1.5 py-1 w-12">Temp (°C)</th>
                      <th className="border border-black px-1.5 py-1 text-left">Remarks / CCP</th>
                      <th className="border border-black px-1.5 py-1 w-16">Done By</th>
                      <th className="border border-black px-1.5 py-1 w-18">Verified By</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {bmrRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.step} onChange={e=>updateBmrRow(r.id,"step",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operation} onChange={e=>updateBmrRow(r.id,"operation",e.target.value)} className={cn(inp,"text-[9px] p-1 font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.startTime} onChange={e=>updateBmrRow(r.id,"startTime",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.endTime} onChange={e=>updateBmrRow(r.id,"endTime",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.milkQty} onChange={e=>updateBmrRow(r.id,"milkQty",e.target.value)} className={cn(inp,"text-[9px] p-1 text-right font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.temp} onChange={e=>updateBmrRow(r.id,"temp",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.remarks} onChange={e=>updateBmrRow(r.id,"remarks",e.target.value)} className={cn(inp,"text-[9px] p-1 text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.doneBy} onChange={e=>updateBmrRow(r.id,"doneBy",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.verified} onChange={e=>updateBmrRow(r.id,"verified",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-semibold")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 3. Process Monitoring Log ═══ */}
              {selectedFormatId === "process-monitoring" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-12">Time</th>
                      <th className="border border-black px-1.5 py-1 text-left">Equipment</th>
                      <th className="border border-black px-1.5 py-1 w-16">Inlet Temp</th>
                      <th className="border border-black px-1.5 py-1 w-16">HT Temp (°C)</th>
                      <th className="border border-black px-1.5 py-1 w-16">Outlet Temp</th>
                      <th className="border border-black px-1.5 py-1 w-14">Press (bar)</th>
                      <th className="border border-black px-1.5 py-1 w-16">Flow (L/hr)</th>
                      <th className="border border-black px-1.5 py-1 w-14">PHP Status</th>
                      <th className="border border-black px-1.5 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {processRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.time} onChange={e=>updateProcessRow(r.id,"time",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.equipment} onChange={e=>updateProcessRow(r.id,"equipment",e.target.value)} className={cn(inp,"text-[9px] p-1")} /></td>
                          <td className="border border-black p-0.5"><input value={r.inletTemp} onChange={e=>updateProcessRow(r.id,"inletTemp",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.htTemp} onChange={e=>updateProcessRow(r.id,"htTemp",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold",parseFloat(r.htTemp)<72?"text-red-700":"text-green-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.outTemp} onChange={e=>updateProcessRow(r.id,"outTemp",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.pressure} onChange={e=>updateProcessRow(r.id,"pressure",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.flowRate} onChange={e=>updateProcessRow(r.id,"flowRate",e.target.value)} className={cn(inp,"text-[9px] p-1 text-right font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.phpStatus} onChange={e=>updateProcessRow(r.id,"phpStatus",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold",r.phpStatus.toLowerCase()==="alert"||r.phpStatus.toLowerCase()==="fail"?"text-red-700":"text-green-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateProcessRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 4. Packing & Dispatch Log ═══ */}
              {selectedFormatId === "packing-dispatch" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-16">Batch No.</th>
                      <th className="border border-black px-1.5 py-1 text-left">Product</th>
                      <th className="border border-black px-1.5 py-1 w-10">Shift</th>
                      <th className="border border-black px-1.5 py-1 w-18">Packed Qty</th>
                      <th className="border border-black px-1.5 py-1 w-18">Vehicle No.</th>
                      <th className="border border-black px-1.5 py-1 text-left">Destination</th>
                      <th className="border border-black px-1.5 py-1 w-14">Dispatch</th>
                      <th className="border border-black px-1.5 py-1 w-12">Temp</th>
                      <th className="border border-black px-1.5 py-1 w-14">Status</th>
                      <th className="border border-black px-1.5 py-1 w-14">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {packingRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.batchNo} onChange={e=>updatePackingRow(r.id,"batchNo",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.product} onChange={e=>updatePackingRow(r.id,"product",e.target.value)} className={cn(inp,"text-[9px] p-1 font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.shift} onChange={e=>updatePackingRow(r.id,"shift",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.packedQty} onChange={e=>updatePackingRow(r.id,"packedQty",e.target.value)} className={cn(inp,"text-[9px] p-1 text-right font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.vehicle} onChange={e=>updatePackingRow(r.id,"vehicle",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.destination} onChange={e=>updatePackingRow(r.id,"destination",e.target.value)} className={cn(inp,"text-[9px] p-1")} /></td>
                          <td className="border border-black p-0.5"><input value={r.dispatchTime} onChange={e=>updatePackingRow(r.id,"dispatchTime",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.tempAtDispatch} onChange={e=>updatePackingRow(r.id,"tempAtDispatch",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.status} onChange={e=>updatePackingRow(r.id,"status",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold",r.status.toLowerCase()==="dispatched"?"text-green-700":"text-orange-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updatePackingRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 5. CIP & Cleaning Log ═══ */}
              {selectedFormatId === "cip-cleaning" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Equipment</th>
                      <th className="border border-black px-1.5 py-1 text-left">CIP Type / Step</th>
                      <th className="border border-black px-1.5 py-1 w-12">Start</th>
                      <th className="border border-black px-1.5 py-1 w-12">End</th>
                      <th className="border border-black px-1.5 py-1 w-12">Temp</th>
                      <th className="border border-black px-1.5 py-1 w-14">Caustic (%)</th>
                      <th className="border border-black px-1.5 py-1 w-12">Acid (%)</th>
                      <th className="border border-black px-1.5 py-1 w-14">Duration</th>
                      <th className="border border-black px-1.5 py-1 w-14">Operator</th>
                      <th className="border border-black px-1.5 py-1 w-12">QA</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {cipRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.equipment} onChange={e=>updateCipRow(r.id,"equipment",e.target.value)} className={cn(inp,"text-[9px] p-1 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.cipType} onChange={e=>updateCipRow(r.id,"cipType",e.target.value)} className={cn(inp,"text-[9px] p-1")} /></td>
                          <td className="border border-black p-0.5"><input value={r.startTime} onChange={e=>updateCipRow(r.id,"startTime",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.endTime} onChange={e=>updateCipRow(r.id,"endTime",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.temp} onChange={e=>updateCipRow(r.id,"temp",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold text-red-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.causticConc} onChange={e=>updateCipRow(r.id,"causticConc",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.acidConc} onChange={e=>updateCipRow(r.id,"acidConc",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.duration} onChange={e=>updateCipRow(r.id,"duration",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateCipRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.qaStatus} onChange={e=>updateCipRow(r.id,"qaStatus",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold",r.qaStatus.toLowerCase()!=="ok"?"text-red-700":"text-green-700")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 6. Machine Breakdown & Maintenance Log ═══ */}
              {selectedFormatId === "machine-breakdown" && (
                <div className="w-full">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-16">Date</th>
                      <th className="border border-black px-1 py-1 text-left">Machine</th>
                      <th className="border border-black px-1 py-1 w-12">B/D Time</th>
                      <th className="border border-black px-1 py-1 text-left">Root Cause</th>
                      <th className="border border-black px-1 py-1 text-left">Action Taken</th>
                      <th className="border border-black px-1 py-1 w-12">Resumed</th>
                      <th className="border border-black px-1 py-1 w-12">Downtime</th>
                      <th className="border border-black px-1 py-1 text-left">Spare Used</th>
                      <th className="border border-black px-1 py-1 w-14">Engineer</th>
                      <th className="border border-black px-1 py-1 w-12">Status</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {breakdownMaintRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input type="date" value={r.date} onChange={e=>updateBreakdownMaintRow(r.id,"date",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.machine} onChange={e=>updateBreakdownMaintRow(r.id,"machine",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.breakdownTime} onChange={e=>updateBreakdownMaintRow(r.id,"breakdownTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono text-red-700 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.rootCause} onChange={e=>updateBreakdownMaintRow(r.id,"rootCause",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.action} onChange={e=>updateBreakdownMaintRow(r.id,"action",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.resumedTime} onChange={e=>updateBreakdownMaintRow(r.id,"resumedTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono text-green-700 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.downtime} onChange={e=>updateBreakdownMaintRow(r.id,"downtime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.spareUsed} onChange={e=>updateBreakdownMaintRow(r.id,"spareUsed",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.engineer} onChange={e=>updateBreakdownMaintRow(r.id,"engineer",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.status} onChange={e=>updateBreakdownMaintRow(r.id,"status",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold",r.status.toLowerCase()==="resolved"?"text-green-700":"text-red-700")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 7. Production Yield & Shift Handover Report ═══ */}
              {selectedFormatId === "yield-handover" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Shift / Timing</th>
                      <th className="border border-black px-1.5 py-1 text-left">Product</th>
                      <th className="border border-black px-1.5 py-1 w-18">Milk Input (L)</th>
                      <th className="border border-black px-1.5 py-1 w-16">Output Qty</th>
                      <th className="border border-black px-1.5 py-1 w-14">Yield (%)</th>
                      <th className="border border-black px-1.5 py-1 w-16">Rejections</th>
                      <th className="border border-black px-1.5 py-1 w-18">Pending Batches</th>
                      <th className="border border-black px-1.5 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {yieldRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.shift} onChange={e=>updateYieldRow(r.id,"shift",e.target.value)} className={cn(inp,"text-[9px] p-1 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.product} onChange={e=>updateYieldRow(r.id,"product",e.target.value)} className={cn(inp,"text-[9px] p-1 font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.milkInput} onChange={e=>updateYieldRow(r.id,"milkInput",e.target.value)} className={cn(inp,"text-[9px] p-1 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.output} onChange={e=>updateYieldRow(r.id,"output",e.target.value)} className={cn(inp,"text-[9px] p-1 text-right font-mono font-bold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.yieldPct} onChange={e=>updateYieldRow(r.id,"yieldPct",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold",parseFloat(r.yieldPct)<98?"text-orange-700":"text-green-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.rejections} onChange={e=>updateYieldRow(r.id,"rejections",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center",r.rejections==="0"||r.rejections.toLowerCase()==="nil"?"text-green-700":"text-red-700 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.pendingBatches} onChange={e=>updateYieldRow(r.id,"pendingBatches",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateYieldRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50 font-bold border-t-2 border-black">
                        <td colSpan={2} className="border border-black px-1.5 py-1 text-[9px] uppercase">Total Milk Processed</td>
                        <td className="border border-black px-1.5 py-1 text-right font-black font-mono text-[9px]">{yieldRows.reduce((s,r)=>s+(parseFloat(r.milkInput)||0),0).toLocaleString()} L</td>
                        <td colSpan={5} className="border border-black px-1.5 py-1 bg-slate-100"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══════════════ MAINTENANCE FORMATS ═══════════════ */}

              {/* ═══ 8. Preventive Maintenance (PM) Log ═══ */}
              {selectedFormatId === "pm-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-8">Sr.</th>
                      <th className="border border-black px-1.5 py-1 text-left">Equipment / Machine</th>
                      <th className="border border-black px-1.5 py-1 text-left">PM Task Description</th>
                      <th className="border border-black px-1.5 py-1 w-18">Frequency</th>
                      <th className="border border-black px-1.5 py-1 w-18">Scheduled Date</th>
                      <th className="border border-black px-1.5 py-1 w-18">Done Date</th>
                      <th className="border border-black px-1.5 py-1 text-left">Parameters Checked</th>
                      <th className="border border-black px-1.5 py-1 w-14">Status</th>
                      <th className="border border-black px-1.5 py-1 w-14">Done By</th>
                      <th className="border border-black px-1.5 py-1 w-16">Verified By</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {pmLogRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.srNo} onChange={e=>updatePmLogRow(r.id,"srNo",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.equipment} onChange={e=>updatePmLogRow(r.id,"equipment",e.target.value)} className={cn(inp,"text-[9px] p-1 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.pmTask} onChange={e=>updatePmLogRow(r.id,"pmTask",e.target.value)} className={cn(inp,"text-[9px] p-1")} /></td>
                          <td className="border border-black p-0.5"><input value={r.frequency} onChange={e=>updatePmLogRow(r.id,"frequency",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.scheduledDate} onChange={e=>updatePmLogRow(r.id,"scheduledDate",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.doneDate} onChange={e=>updatePmLogRow(r.id,"doneDate",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.parametersChecked} onChange={e=>updatePmLogRow(r.id,"parametersChecked",e.target.value)} className={cn(inp,"text-[9px] p-1 text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.status} onChange={e=>updatePmLogRow(r.id,"status",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold",r.status.toLowerCase()==="done"?"text-green-700":r.status.toLowerCase()==="pending"?"text-orange-600":"text-red-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.doneBy} onChange={e=>updatePmLogRow(r.id,"doneBy",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.verified} onChange={e=>updatePmLogRow(r.id,"verified",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-semibold")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 9. Breakdown Maintenance Log ═══ */}
              {selectedFormatId === "breakdown-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-16">Report No.</th>
                      <th className="border border-black px-1 py-1 w-14">Date</th>
                      <th className="border border-black px-1 py-1 text-left">Machine</th>
                      <th className="border border-black px-1 py-1 w-12">B/D Time</th>
                      <th className="border border-black px-1 py-1 w-12">Resumed</th>
                      <th className="border border-black px-1 py-1 w-12">Downtime</th>
                      <th className="border border-black px-1 py-1 text-left">Root Cause</th>
                      <th className="border border-black px-1 py-1 text-left">Corrective Action</th>
                      <th className="border border-black px-1 py-1 text-left">Preventive Action (CAPA)</th>
                      <th className="border border-black px-1 py-1 text-left">Spare Used</th>
                      <th className="border border-black px-1 py-1 w-14">Engineer</th>
                      <th className="border border-black px-1 py-1 w-12">Status</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {breakdownLogRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.reportNo} onChange={e=>updateBreakdownLogRow(r.id,"reportNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.date} onChange={e=>updateBreakdownLogRow(r.id,"date",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.machine} onChange={e=>updateBreakdownLogRow(r.id,"machine",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.breakdownTime} onChange={e=>updateBreakdownLogRow(r.id,"breakdownTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono text-red-700 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.resumedTime} onChange={e=>updateBreakdownLogRow(r.id,"resumedTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono text-green-700 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.downtime} onChange={e=>updateBreakdownLogRow(r.id,"downtime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.rootCause} onChange={e=>updateBreakdownLogRow(r.id,"rootCause",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.correctiveAction} onChange={e=>updateBreakdownLogRow(r.id,"correctiveAction",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.preventiveAction} onChange={e=>updateBreakdownLogRow(r.id,"preventiveAction",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-slate-600")} /></td>
                          <td className="border border-black p-0.5"><input value={r.spareUsed} onChange={e=>updateBreakdownLogRow(r.id,"spareUsed",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.engineer} onChange={e=>updateBreakdownLogRow(r.id,"engineer",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.status} onChange={e=>updateBreakdownLogRow(r.id,"status",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold",r.status.toLowerCase()==="closed"?"text-green-700":"text-red-700")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 10. Equipment History Card ═══ */}
              {selectedFormatId === "equipment-history" && (
                <div className="w-full">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-18">Date</th>
                      <th className="border border-black px-1.5 py-1 w-16">Equip ID</th>
                      <th className="border border-black px-1.5 py-1 w-18">Event Type</th>
                      <th className="border border-black px-1.5 py-1 text-left">Description</th>
                      <th className="border border-black px-1.5 py-1 w-16">Technician</th>
                      <th className="border border-black px-1.5 py-1 w-20">Spares Used</th>
                      <th className="border border-black px-1.5 py-1 w-14">Cost</th>
                      <th className="border border-black px-1.5 py-1 w-18">Next Due</th>
                      <th className="border border-black px-1.5 py-1 text-left">Remarks</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {equipHistoryRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input type="date" value={r.date} onChange={e=>updateEquipHistoryRow(r.id,"date",e.target.value)} className={cn(inp,"text-[8px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.equipId} onChange={e=>updateEquipHistoryRow(r.id,"equipId",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.eventType} onChange={e=>updateEquipHistoryRow(r.id,"eventType",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-bold",r.eventType==="Breakdown"?"text-red-700":r.eventType==="PM"?"text-teal-700":"text-blue-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.description} onChange={e=>updateEquipHistoryRow(r.id,"description",e.target.value)} className={cn(inp,"text-[9px] p-1 font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.techName} onChange={e=>updateEquipHistoryRow(r.id,"techName",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.sparesUsed} onChange={e=>updateEquipHistoryRow(r.id,"sparesUsed",e.target.value)} className={cn(inp,"text-[9px] p-1 text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.cost} onChange={e=>updateEquipHistoryRow(r.id,"cost",e.target.value)} className={cn(inp,"text-[9px] p-1 text-right font-mono")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.nextDueDate} onChange={e=>updateEquipHistoryRow(r.id,"nextDueDate",e.target.value)} className={cn(inp,"text-[8px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.remarks} onChange={e=>updateEquipHistoryRow(r.id,"remarks",e.target.value)} className={cn(inp,"text-[9px] p-1 text-slate-600")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 11. Spare Parts Inventory Register ═══ */}
              {selectedFormatId === "spare-parts" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-16">Part Code</th>
                      <th className="border border-black px-1 py-1 text-left">Part Name</th>
                      <th className="border border-black px-1 py-1 text-left">Equipment Used For</th>
                      <th className="border border-black px-1 py-1 w-10">UOM</th>
                      <th className="border border-black px-1 py-1 w-14">Opening Stock</th>
                      <th className="border border-black px-1 py-1 w-14">Received</th>
                      <th className="border border-black px-1 py-1 w-12">Issued</th>
                      <th className="border border-black px-1 py-1 w-14">Closing Stock</th>
                      <th className="border border-black px-1 py-1 w-12">Min Level</th>
                      <th className="border border-black px-1 py-1 w-14">Reorder Qty</th>
                      <th className="border border-black px-1 py-1 w-18">Supplier</th>
                      <th className="border border-black px-1 py-1 text-left">Remarks</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {sparePartsRows.map(r => (
                        <tr key={r.id} className={cn((parseInt(r.closingStock)||0)<=(parseInt(r.minLevel)||0)?"bg-red-50":"")}>
                          <td className="border border-black p-0.5"><input value={r.partCode} onChange={e=>updateSparePartsRow(r.id,"partCode",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.partName} onChange={e=>updateSparePartsRow(r.id,"partName",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.equipUsedFor} onChange={e=>updateSparePartsRow(r.id,"equipUsedFor",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.uom} onChange={e=>updateSparePartsRow(r.id,"uom",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.openingStock} onChange={e=>updateSparePartsRow(r.id,"openingStock",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.received} onChange={e=>updateSparePartsRow(r.id,"received",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono text-teal-700 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.issued} onChange={e=>updateSparePartsRow(r.id,"issued",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono text-orange-700 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.closingStock} onChange={e=>updateSparePartsRow(r.id,"closingStock",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono font-black",parseInt(r.closingStock)<=parseInt(r.minLevel)?"text-red-700":"")} /></td>
                          <td className="border border-black p-0.5"><input value={r.minLevel} onChange={e=>updateSparePartsRow(r.id,"minLevel",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.reorderQty} onChange={e=>updateSparePartsRow(r.id,"reorderQty",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.supplier} onChange={e=>updateSparePartsRow(r.id,"supplier",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.remarks} onChange={e=>updateSparePartsRow(r.id,"remarks",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-slate-600")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="text-[8px] text-red-600 font-semibold mt-1">* Red highlighted rows = stock at or below minimum level (reorder required)</div>
                </div>
              )}

              {/* ═══ 12. Utility Log Sheet ═══ */}
              {selectedFormatId === "utility-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-24">Date & Time</th>
                      <th className="border border-black px-1 py-1 text-left">Utility / Equipment</th>
                      <th className="border border-black px-1 py-1 text-left">Parameter 1</th>
                      <th className="border border-black px-1 py-1 w-12">Value</th>
                      <th className="border border-black px-1 py-1 text-left">Parameter 2</th>
                      <th className="border border-black px-1 py-1 w-12">Value</th>
                      <th className="border border-black px-1 py-1 text-left">Parameter 3</th>
                      <th className="border border-black px-1 py-1 w-12">Value</th>
                      <th className="border border-black px-1 py-1 text-left">Parameter 4</th>
                      <th className="border border-black px-1 py-1 w-12">Value</th>
                      <th className="border border-black px-1 py-1 w-14">Status</th>
                      <th className="border border-black px-1 py-1 w-14">Operator</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {utilityLogRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.dateTime} onChange={e=>updateUtilityLogRow(r.id,"dateTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.utility} onChange={e=>updateUtilityLogRow(r.id,"utility",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param1Label} onChange={e=>updateUtilityLogRow(r.id,"param1Label",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-slate-600 italic")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param1} onChange={e=>updateUtilityLogRow(r.id,"param1",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param2Label} onChange={e=>updateUtilityLogRow(r.id,"param2Label",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-slate-600 italic")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param2} onChange={e=>updateUtilityLogRow(r.id,"param2",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param3Label} onChange={e=>updateUtilityLogRow(r.id,"param3Label",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-slate-600 italic")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param3} onChange={e=>updateUtilityLogRow(r.id,"param3",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param4Label} onChange={e=>updateUtilityLogRow(r.id,"param4Label",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-slate-600 italic")} /></td>
                          <td className="border border-black p-0.5"><input value={r.param4} onChange={e=>updateUtilityLogRow(r.id,"param4",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.status} onChange={e=>updateUtilityLogRow(r.id,"status",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold",r.status.toLowerCase()==="normal"?"text-green-700":"text-red-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateUtilityLogRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 13. Lubrication Log Sheet ═══ */}
              {selectedFormatId === "lubrication-log" && (
                <div className="w-full">
                  <table className="w-full text-[9px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-16">Equip ID</th>
                      <th className="border border-black px-1.5 py-1 text-left">Machine / Equipment</th>
                      <th className="border border-black px-1.5 py-1 text-left">Lubrication Point</th>
                      <th className="border border-black px-1.5 py-1 text-left">Lubricant Grade</th>
                      <th className="border border-black px-1.5 py-1 w-18">Frequency</th>
                      <th className="border border-black px-1.5 py-1 w-18">Last Done</th>
                      <th className="border border-black px-1.5 py-1 w-18">Next Due</th>
                      <th className="border border-black px-1.5 py-1 w-14">Qty Used</th>
                      <th className="border border-black px-1.5 py-1 w-14">Done By</th>
                      <th className="border border-black px-1.5 py-1 w-14">Verified</th>
                      <th className="border border-black px-1.5 py-1 text-left">Remarks</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {lubricationRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.equipId} onChange={e=>updateLubricationRow(r.id,"equipId",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.machine} onChange={e=>updateLubricationRow(r.id,"machine",e.target.value)} className={cn(inp,"text-[9px] p-1 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.lubricationPoint} onChange={e=>updateLubricationRow(r.id,"lubricationPoint",e.target.value)} className={cn(inp,"text-[9px] p-1")} /></td>
                          <td className="border border-black p-0.5"><input value={r.lubricantGrade} onChange={e=>updateLubricationRow(r.id,"lubricantGrade",e.target.value)} className={cn(inp,"text-[9px] p-1 font-mono text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.frequency} onChange={e=>updateLubricationRow(r.id,"frequency",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.lastDoneDate} onChange={e=>updateLubricationRow(r.id,"lastDoneDate",e.target.value)} className={cn(inp,"text-[8px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.nextDueDate} onChange={e=>updateLubricationRow(r.id,"nextDueDate",e.target.value)} className={cn(inp,"text-[8px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.qtyUsed} onChange={e=>updateLubricationRow(r.id,"qtyUsed",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.doneBy} onChange={e=>updateLubricationRow(r.id,"doneBy",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.verified} onChange={e=>updateLubricationRow(r.id,"verified",e.target.value)} className={cn(inp,"text-[9px] p-1 text-center font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.remarks} onChange={e=>updateLubricationRow(r.id,"remarks",e.target.value)} className={cn(inp,"text-[9px] p-1 text-slate-600")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 14. Daily Maintenance / Work Permit Register ═══ */}
              {selectedFormatId === "work-permit" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-16">Permit No.</th>
                      <th className="border border-black px-1 py-1 w-14">Date</th>
                      <th className="border border-black px-1 py-1 text-left">Work Description</th>
                      <th className="border border-black px-1 py-1 text-left">Equipment / Area</th>
                      <th className="border border-black px-1 py-1 w-18">Work Type</th>
                      <th className="border border-black px-1 py-1 text-left">Hazard Identified</th>
                      <th className="border border-black px-1 py-1 text-left">Precautions Taken</th>
                      <th className="border border-black px-1 py-1 w-16">Issued By</th>
                      <th className="border border-black px-1 py-1 w-12">Start</th>
                      <th className="border border-black px-1 py-1 w-12">End</th>
                      <th className="border border-black px-1 py-1 w-12">Status</th>
                      <th className="border border-black px-1 py-1 w-14">Closed By</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {workPermitRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.permitNo} onChange={e=>updateWorkPermitRow(r.id,"permitNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.date} onChange={e=>updateWorkPermitRow(r.id,"date",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.workDescription} onChange={e=>updateWorkPermitRow(r.id,"workDescription",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.equipment} onChange={e=>updateWorkPermitRow(r.id,"equipment",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.workType} onChange={e=>updateWorkPermitRow(r.id,"workType",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold",r.workType==="Hot Work"?"text-red-700":r.workType==="Electrical"?"text-orange-700":"text-slate-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.hazard} onChange={e=>updateWorkPermitRow(r.id,"hazard",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-red-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.precautions} onChange={e=>updateWorkPermitRow(r.id,"precautions",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.issuedBy} onChange={e=>updateWorkPermitRow(r.id,"issuedBy",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.startTime} onChange={e=>updateWorkPermitRow(r.id,"startTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.endTime} onChange={e=>updateWorkPermitRow(r.id,"endTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.status} onChange={e=>updateWorkPermitRow(r.id,"status",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold",r.status.toLowerCase()==="closed"?"text-green-700":"text-orange-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.closedBy} onChange={e=>updateWorkPermitRow(r.id,"closedBy",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 15. Milk Processing & Standardization Log ═══ */}
              {selectedFormatId === "processing-standardization" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-14">Silo / Tank</th>
                      <th className="border border-black px-1 py-1 w-16">Milk Qty (L)</th>
                      <th className="border border-black px-1 py-1 w-12">Raw Fat%</th>
                      <th className="border border-black px-1 py-1 w-12">Raw SNF%</th>
                      <th className="border border-black px-1 py-1 w-12">Tgt Fat%</th>
                      <th className="border border-black px-1 py-1 w-12">Tgt SNF%</th>
                      <th className="border border-black px-1 py-1 w-16">Skim Added (L)</th>
                      <th className="border border-black px-1 py-1 w-16">Cream Added (kg)</th>
                      <th className="border border-black px-1 py-1 w-12">Final Fat%</th>
                      <th className="border border-black px-1 py-1 w-12">Final SNF%</th>
                      <th className="border border-black px-1 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {processingRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.silo} onChange={e=>updateProcessingRow(r.id,"silo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.milkQty} onChange={e=>updateProcessingRow(r.id,"milkQty",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.rawFat} onChange={e=>updateProcessingRow(r.id,"rawFat",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.rawSnf} onChange={e=>updateProcessingRow(r.id,"rawSnf",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.targetFat} onChange={e=>updateProcessingRow(r.id,"targetFat",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.targetSnf} onChange={e=>updateProcessingRow(r.id,"targetSnf",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.skimAdded} onChange={e=>updateProcessingRow(r.id,"skimAdded",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.creamAdded} onChange={e=>updateProcessingRow(r.id,"creamAdded",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.finalFat} onChange={e=>updateProcessingRow(r.id,"finalFat",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-black text-blue-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.finalSnf} onChange={e=>updateProcessingRow(r.id,"finalSnf",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-black text-blue-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateProcessingRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 16. Quality & Lab Testing Register ═══ */}
              {selectedFormatId === "qa-lab-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 text-left">Sample Source</th>
                      <th className="border border-black px-1 py-1 w-16">Batch/Tanker</th>
                      <th className="border border-black px-1 py-1 w-12">Temp (°C)</th>
                      <th className="border border-black px-1 py-1 w-12">Acidity</th>
                      <th className="border border-black px-1 py-1 w-14">MBRT</th>
                      <th className="border border-black px-1 py-1 text-left">Alcohol Test</th>
                      <th className="border border-black px-1 py-1 w-14">COB</th>
                      <th className="border border-black px-1 py-1 w-10">Fat%</th>
                      <th className="border border-black px-1 py-1 w-10">SNF%</th>
                      <th className="border border-black px-1 py-1 w-16">Analyst</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {qaLabRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.source} onChange={e=>updateQaLabRow(r.id,"source",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.batchNo} onChange={e=>updateQaLabRow(r.id,"batchNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.temp} onChange={e=>updateQaLabRow(r.id,"temp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.acidity} onChange={e=>updateQaLabRow(r.id,"acidity",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.mbrt} onChange={e=>updateQaLabRow(r.id,"mbrt",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-semibold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.alcoholTest} onChange={e=>updateQaLabRow(r.id,"alcoholTest",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.cob} onChange={e=>updateQaLabRow(r.id,"cob",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold",r.cob.toLowerCase().includes("positive")?"text-red-700":"text-green-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.fat} onChange={e=>updateQaLabRow(r.id,"fat",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.snf} onChange={e=>updateQaLabRow(r.id,"snf",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.analyst} onChange={e=>updateQaLabRow(r.id,"analyst",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 17. Packaging QC & Weight Check Log ═══ */}
              {selectedFormatId === "packaging-qc" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-14">Machine No</th>
                      <th className="border border-black px-1 py-1 text-left">Product / Variant</th>
                      <th className="border border-black px-1 py-1 w-12">Time</th>
                      <th className="border border-black px-1 py-1 w-16">Target Wt</th>
                      <th className="border border-black px-1 py-1 w-16">Actual Wt</th>
                      <th className="border border-black px-1 py-1 w-16">Sealing Temp</th>
                      <th className="border border-black px-1 py-1 w-14">Leak Check</th>
                      <th className="border border-black px-1 py-1 text-left">Print/MRP Check</th>
                      <th className="border border-black px-1 py-1 w-16">Inspector</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {packagingQcRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.machineNo} onChange={e=>updatePackagingQcRow(r.id,"machineNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.product} onChange={e=>updatePackagingQcRow(r.id,"product",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.time} onChange={e=>updatePackagingQcRow(r.id,"time",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.targetWeight} onChange={e=>updatePackagingQcRow(r.id,"targetWeight",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.actualWeight} onChange={e=>updatePackagingQcRow(r.id,"actualWeight",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.sealingTemp} onChange={e=>updatePackagingQcRow(r.id,"sealingTemp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.leakCheck} onChange={e=>updatePackagingQcRow(r.id,"leakCheck",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold",r.leakCheck.toLowerCase()==="pass"?"text-green-700":"text-red-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.printCheck} onChange={e=>updatePackagingQcRow(r.id,"printCheck",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.inspector} onChange={e=>updatePackagingQcRow(r.id,"inspector",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 18. Cold Room Temp & Stock Register ═══ */}
              {selectedFormatId === "cold-room-register" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-20">Cold Room</th>
                      <th className="border border-black px-1 py-1 w-12">Time</th>
                      <th className="border border-black px-1 py-1 w-14">Room Temp</th>
                      <th className="border border-black px-1 py-1 text-left">Product Variant</th>
                      <th className="border border-black px-1 py-1 w-16">Crate Count</th>
                      <th className="border border-black px-1 py-1 w-18">Stack Height</th>
                      <th className="border border-black px-1 py-1 w-20">FIFO Status</th>
                      <th className="border border-black px-1 py-1 w-18">Defrost Status</th>
                      <th className="border border-black px-1 py-1 w-16">Incharge</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {coldRoomRegRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.coldRoomNo} onChange={e=>updateColdRoomRegRow(r.id,"coldRoomNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.time} onChange={e=>updateColdRoomRegRow(r.id,"time",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.temp} onChange={e=>updateColdRoomRegRow(r.id,"temp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-cyan-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.product} onChange={e=>updateColdRoomRegRow(r.id,"product",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.crateCount} onChange={e=>updateColdRoomRegRow(r.id,"crateCount",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.stackHeight} onChange={e=>updateColdRoomRegRow(r.id,"stackHeight",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.fifoStatus} onChange={e=>updateColdRoomRegRow(r.id,"fifoStatus",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-semibold text-green-700")} /></td>
                          <td className="border border-black p-0.5"><input value={r.defrostStatus} onChange={e=>updateColdRoomRegRow(r.id,"defrostStatus",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.incharge} onChange={e=>updateColdRoomRegRow(r.id,"incharge",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 19. Dahi, Lassi & Culturing Process Log ═══ */}
              {selectedFormatId === "curd-dahi-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-16">Batch No</th>
                      <th className="border border-black px-1 py-1 text-left">Product</th>
                      <th className="border border-black px-1 py-1 w-14">Milk Qty</th>
                      <th className="border border-black px-1 py-1 w-16">Culture Code</th>
                      <th className="border border-black px-1 py-1 w-14">Inoc. Temp</th>
                      <th className="border border-black px-1 py-1 w-12">Start</th>
                      <th className="border border-black px-1 py-1 w-12">Set Time</th>
                      <th className="border border-black px-1 py-1 w-16">Final Acidity</th>
                      <th className="border border-black px-1 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {curdDahiRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.batchNo} onChange={e=>updateCurdDahiRow(r.id,"batchNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.product} onChange={e=>updateCurdDahiRow(r.id,"product",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.milkQty} onChange={e=>updateCurdDahiRow(r.id,"milkQty",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.cultureCode} onChange={e=>updateCurdDahiRow(r.id,"cultureCode",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.inocTemp} onChange={e=>updateCurdDahiRow(r.id,"inocTemp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.startTime} onChange={e=>updateCurdDahiRow(r.id,"startTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.setTime} onChange={e=>updateCurdDahiRow(r.id,"setTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.finalAcidity} onChange={e=>updateCurdDahiRow(r.id,"finalAcidity",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-amber-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateCurdDahiRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 20. Boiler & Steam Generation Log ═══ */}
              {selectedFormatId === "boiler-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-14">Shift/Time</th>
                      <th className="border border-black px-1 py-1 w-16">Steam Press</th>
                      <th className="border border-black px-1 py-1 w-14">Feed Temp</th>
                      <th className="border border-black px-1 py-1 text-left">Softener Hardness</th>
                      <th className="border border-black px-1 py-1 w-18">Blowdown Status</th>
                      <th className="border border-black px-1 py-1 w-16">Fuel Consumed</th>
                      <th className="border border-black px-1 py-1 w-14">Flue Temp</th>
                      <th className="border border-black px-1 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {boilerLogRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.shiftTime} onChange={e=>updateBoilerLogRow(r.id,"shiftTime",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.steamPress} onChange={e=>updateBoilerLogRow(r.id,"steamPress",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-red-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.feedTemp} onChange={e=>updateBoilerLogRow(r.id,"feedTemp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.softenerHardness} onChange={e=>updateBoilerLogRow(r.id,"softenerHardness",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.blowdown} onChange={e=>updateBoilerLogRow(r.id,"blowdown",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-semibold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.fuelCons} onChange={e=>updateBoilerLogRow(r.id,"fuelCons",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.flueTemp} onChange={e=>updateBoilerLogRow(r.id,"flueTemp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateBoilerLogRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 21. Refrigeration & Ammonia Plant Log ═══ */}
              {selectedFormatId === "refrigeration-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 text-left">Compressor ID</th>
                      <th className="border border-black px-1 py-1 w-14">Suction Pr</th>
                      <th className="border border-black px-1 py-1 w-14">Disch Pr</th>
                      <th className="border border-black px-1 py-1 w-14">Oil Pr</th>
                      <th className="border border-black px-1 py-1 w-16">Glycol Temp</th>
                      <th className="border border-black px-1 py-1 w-20">Condenser Temp</th>
                      <th className="border border-black px-1 py-1 w-14">Amp Draw</th>
                      <th className="border border-black px-1 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {refrigerationLogRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.compNo} onChange={e=>updateRefrigerationLogRow(r.id,"compNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.suctionPress} onChange={e=>updateRefrigerationLogRow(r.id,"suctionPress",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.dischargePress} onChange={e=>updateRefrigerationLogRow(r.id,"dischargePress",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.oilPress} onChange={e=>updateRefrigerationLogRow(r.id,"oilPress",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.glycolTemp} onChange={e=>updateRefrigerationLogRow(r.id,"glycolTemp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-cyan-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.condenserWaterTemp} onChange={e=>updateRefrigerationLogRow(r.id,"condenserWaterTemp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.ampDraw} onChange={e=>updateRefrigerationLogRow(r.id,"ampDraw",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateRefrigerationLogRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 22. Electrical Power & DG Set Daily Log ═══ */}
              {selectedFormatId === "electrical-dg-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-12">Time</th>
                      <th className="border border-black px-1 py-1 w-20">EB Meter kWh</th>
                      <th className="border border-black px-1 py-1 w-14">Power Factor</th>
                      <th className="border border-black px-1 py-1 w-18">DG Run Hours</th>
                      <th className="border border-black px-1 py-1 w-16">Diesel Level</th>
                      <th className="border border-black px-1 py-1 text-left">Phase Load (A)</th>
                      <th className="border border-black px-1 py-1 w-14">Voltage (V)</th>
                      <th className="border border-black px-1 py-1 w-16">Electrician</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {electricalDgRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.time} onChange={e=>updateElectricalDgRow(r.id,"time",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.ebMeterKwh} onChange={e=>updateElectricalDgRow(r.id,"ebMeterKwh",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.powerFactor} onChange={e=>updateElectricalDgRow(r.id,"powerFactor",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.dgRunHrs} onChange={e=>updateElectricalDgRow(r.id,"dgRunHrs",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.dieselLevel} onChange={e=>updateElectricalDgRow(r.id,"dieselLevel",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.phaseAmp} onChange={e=>updateElectricalDgRow(r.id,"phaseAmp",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.voltage} onChange={e=>updateElectricalDgRow(r.id,"voltage",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.electrician} onChange={e=>updateElectricalDgRow(r.id,"electrician",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 23. Air Compressor & Pneumatic Log ═══ */}
              {selectedFormatId === "compressor-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 text-left">Compressor ID</th>
                      <th className="border border-black px-1 py-1 w-12">Time</th>
                      <th className="border border-black px-1 py-1 w-16">Line Press</th>
                      <th className="border border-black px-1 py-1 w-14">Dew Point</th>
                      <th className="border border-black px-1 py-1 w-16">Oil Level</th>
                      <th className="border border-black px-1 py-1 text-left">Moisture Drain</th>
                      <th className="border border-black px-1 py-1 w-16">Total Run Hrs</th>
                      <th className="border border-black px-1 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {compressorRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.compId} onChange={e=>updateCompressorRow(r.id,"compId",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.time} onChange={e=>updateCompressorRow(r.id,"time",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.linePress} onChange={e=>updateCompressorRow(r.id,"linePress",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.dewPoint} onChange={e=>updateCompressorRow(r.id,"dewPoint",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.oilLevel} onChange={e=>updateCompressorRow(r.id,"oilLevel",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.moistureDrain} onChange={e=>updateCompressorRow(r.id,"moistureDrain",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.totalRunHrs} onChange={e=>updateCompressorRow(r.id,"totalRunHrs",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateCompressorRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 24. Instrument Calibration Register ═══ */}
              {selectedFormatId === "calibration-register" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-16">Tag No</th>
                      <th className="border border-black px-1 py-1 text-left">Instrument Name</th>
                      <th className="border border-black px-1 py-1 text-left">Location</th>
                      <th className="border border-black px-1 py-1 w-16">Range</th>
                      <th className="border border-black px-1 py-1 w-16">Last Calib</th>
                      <th className="border border-black px-1 py-1 w-16">Next Due</th>
                      <th className="border border-black px-1 py-1 text-left">Standard Used</th>
                      <th className="border border-black px-1 py-1 w-14">Error</th>
                      <th className="border border-black px-1 py-1 w-16">Technician</th>
                      <th className="border border-black px-1 py-1 w-18">Cert No.</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {calibrationRegRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.tagNo} onChange={e=>updateCalibrationRegRow(r.id,"tagNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.instName} onChange={e=>updateCalibrationRegRow(r.id,"instName",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.location} onChange={e=>updateCalibrationRegRow(r.id,"location",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.range} onChange={e=>updateCalibrationRegRow(r.id,"range",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.lastCalibDate} onChange={e=>updateCalibrationRegRow(r.id,"lastCalibDate",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input type="date" value={r.nextDueDate} onChange={e=>updateCalibrationRegRow(r.id,"nextDueDate",e.target.value)} className={cn(inp,"text-[8px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.standardUsed} onChange={e=>updateCalibrationRegRow(r.id,"standardUsed",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.errorDeviation} onChange={e=>updateCalibrationRegRow(r.id,"errorDeviation",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.technician} onChange={e=>updateCalibrationRegRow(r.id,"technician",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          <td className="border border-black p-0.5"><input value={r.certNo} onChange={e=>updateCalibrationRegRow(r.id,"certNo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono text-teal-800")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ═══ 25. ETP & WTP Environmental Daily Log ═══ */}
              {selectedFormatId === "etp-wtp-log" && (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-[8.5px] border-collapse border border-black text-black">
                    <thead><tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1 py-1 w-12">Time</th>
                      <th className="border border-black px-1 py-1 w-16">Raw Water Flow</th>
                      <th className="border border-black px-1 py-1 w-14">Treated pH</th>
                      <th className="border border-black px-1 py-1 w-14">ETP Inlet pH</th>
                      <th className="border border-black px-1 py-1 w-16">Aeration DO</th>
                      <th className="border border-black px-1 py-1 w-18">Sludge Discharge</th>
                      <th className="border border-black px-1 py-1 text-left">Dosing Chemical Used</th>
                      <th className="border border-black px-1 py-1 w-16">Operator</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr></thead>
                    <tbody>
                      {etpWtpRows.map(r => (
                        <tr key={r.id}>
                          <td className="border border-black p-0.5"><input value={r.time} onChange={e=>updateEtpWtpRow(r.id,"time",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.rawWaterFlow} onChange={e=>updateEtpWtpRow(r.id,"rawWaterFlow",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-right font-mono font-bold")} /></td>
                          <td className="border border-black p-0.5"><input value={r.treatedWaterPh} onChange={e=>updateEtpWtpRow(r.id,"treatedWaterPh",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono font-bold text-teal-800")} /></td>
                          <td className="border border-black p-0.5"><input value={r.etpInletPh} onChange={e=>updateEtpWtpRow(r.id,"etpInletPh",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.aerationDo} onChange={e=>updateEtpWtpRow(r.id,"aerationDo",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.sludgeDischarge} onChange={e=>updateEtpWtpRow(r.id,"sludgeDischarge",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center font-mono")} /></td>
                          <td className="border border-black p-0.5"><input value={r.dosingChem} onChange={e=>updateEtpWtpRow(r.id,"dosingChem",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5")} /></td>
                          <td className="border border-black p-0.5"><input value={r.operator} onChange={e=>updateEtpWtpRow(r.id,"operator",e.target.value)} className={cn(inp,"text-[8.5px] p-0.5 text-center")} /></td>
                          {renderCustomBodyCells(r.id)}
                          <td className="border border-black p-0.5 text-center print:hidden"><button onClick={()=>deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto"/></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>

            {/* Signature Footer */}
            <div className="pt-8 space-y-4">
              <div className="flex justify-between items-center text-[8.5px] font-bold uppercase tracking-wider px-4">
                <div className="text-center w-32 border-t border-black pt-1">OPERATOR SIGN</div>
                <div className="text-center w-32 border-t border-black pt-1">SHIFT INCHARGE</div>
                <div className="text-center w-32 border-t border-black pt-1">PLANT MANAGER SIGN</div>
              </div>
              <div className="border-t border-slate-300 pt-2 text-center text-[7.5px] text-slate-400 font-bold tracking-widest uppercase">
                POWERED BY DAIRY HUB ERP SYSTEM
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .is-exporting-pdf .print\\:hidden,
        .is-exporting-pdf .no-pdf {
          display: none !important;
        }
        @media print {
          body * { visibility: hidden; }
          #print-area-formats, #print-area-formats * { visibility: visible; }
          #print-area-formats {
            position: absolute; left: 0; top: 0;
            width: ${currentOrientation === 'landscape' ? '297mm' : '210mm'} !important;
            height: ${currentOrientation === 'landscape' ? '210mm' : '297mm'} !important;
            padding: 10mm !important; margin: 0 !important;
            border: none !important; box-shadow: none !important;
            background-color: white !important;
            -webkit-print-color-adjust: exact; print-color-adjust: exact;
          }
          .print\\:hidden { display: none !important; }
        }
      `}} />
    </div>
  );
}
