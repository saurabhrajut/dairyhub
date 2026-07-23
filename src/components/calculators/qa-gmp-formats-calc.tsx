"use client";

import React, { useState, useRef, useMemo } from "react";
import { 
  Printer, Download, FileText, Building2, MapPin, Calendar, 
  Plus, Trash2, CheckCircle, Info, Loader2, FileDown,
  ShieldCheck, ClipboardList, Beaker, FlaskConical, Droplet, TestTube, Scale,
  Columns, RotateCw, UserCheck, HeartPulse, Sparkles, AlertTriangle, Bug,
  GraduationCap, Wrench, RefreshCw, Layers, ShieldAlert, Biohazard, Recycle,
  Search, CheckSquare, Eye, Truck, Snowflake, Package, Thermometer, Zap, Factory, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { savePdfFile } from "@/lib/mobile-download";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Types for all 30 Quality, GMP, Safety & Plant Audit Formats
export type QaFormatType = 
  | "personal-hygiene"
  | "hand-wash"
  | "health-declaration"
  | "gmp-checklist"
  | "5s-audit"
  | "kaizen-form"
  | "haccp-ccp"
  | "pre-op-hygiene"
  | "cip-verification"
  | "glass-brittle"
  | "pest-control"
  | "cleaning-sanitation"
  | "visitor-hygiene"
  | "calibration-record"
  | "internal-audit"
  | "capa-form"
  | "training-record"
  | "ppe-register"
  | "chemical-register"
  | "waste-disposal"
  | "truck-dock-inspection"
  | "cold-storage-temp"
  | "packaging-material-inspection"
  | "allergen-management"
  | "water-ice-micro"
  | "dispatch-sanitation"
  | "boiler-safety-log"
  | "dg-electrical-log"
  | "media-reagent-prep"
  | "product-quarantine";

interface FormatInfo {
  id: QaFormatType;
  title: string;
  category: "Hygiene & Health" | "GMP & Safety" | "HACCP & CIP" | "Audits & CAPA" | "Registers & Logs" | "Plant & Storage";
  description: string;
  defaultOrientation: "portrait" | "landscape";
  icon: any;
}

export const QA_FORMATS_CATALOG: FormatInfo[] = [
  // Hygiene & Health
  { id: "personal-hygiene", title: "Personal Hygiene Checklist", category: "Hygiene & Health", description: "Daily verification of worker attire, hairnet, nails, jewelry & boots.", defaultOrientation: "portrait", icon: UserCheck },
  { id: "hand-wash", title: "Hand Wash Record", category: "Hygiene & Health", description: "Hourly handwashing and sanitizer station compliance log.", defaultOrientation: "portrait", icon: Droplet },
  { id: "health-declaration", title: "Personnel Health Declaration", category: "Hygiene & Health", description: "Daily health check & fitness declaration for food handlers.", defaultOrientation: "portrait", icon: HeartPulse },
  { id: "visitor-hygiene", title: "Visitor Hygiene Checklist", category: "Hygiene & Health", description: "Health check, apron/hairnet issuance & escort record for guests.", defaultOrientation: "portrait", icon: ShieldCheck },
  
  // GMP & Safety
  { id: "gmp-checklist", title: "GMP Checklist", category: "GMP & Safety", description: "Good Manufacturing Practices facility audit & floor compliance.", defaultOrientation: "landscape", icon: Building2 },
  { id: "5s-audit", title: "5S Audit Checklist", category: "GMP & Safety", description: "Sort, Set, Shine, Standardize & Sustain workspace audit.", defaultOrientation: "landscape", icon: Sparkles },
  { id: "kaizen-form", title: "Kaizen Improvement Form", category: "GMP & Safety", description: "Continuous improvement ideas, problem statement & benefits.", defaultOrientation: "portrait", icon: RefreshCw },
  { id: "glass-brittle", title: "Glass & Brittle Plastic Register", category: "GMP & Safety", description: "Breakage prevention register & condition check for lights/gauges.", defaultOrientation: "landscape", icon: AlertTriangle },
  { id: "pest-control", title: "Pest Control Checklist", category: "GMP & Safety", description: "Bait station, insect light trap (ILT) & pest activity inspection.", defaultOrientation: "landscape", icon: Bug },

  // HACCP & CIP
  { id: "haccp-ccp", title: "HACCP CCP Monitoring Log", category: "HACCP & CIP", description: "Critical Control Point temperature, pressure & flow monitoring.", defaultOrientation: "landscape", icon: ShieldAlert },
  { id: "pre-op-hygiene", title: "Pre-Operational Hygiene Inspection", category: "HACCP & CIP", description: "Pre-start visual & swab inspection before production line clearance.", defaultOrientation: "landscape", icon: Eye },
  { id: "cip-verification", title: "CIP Verification Checklist", category: "HACCP & CIP", description: "Chemical concentration, temp, time & pH verification for CIP.", defaultOrientation: "landscape", icon: WavesIcon },
  { id: "cleaning-sanitation", title: "Cleaning & Sanitation Checklist", category: "HACCP & CIP", description: "Daily/weekly equipment & plant sanitation execution record.", defaultOrientation: "landscape", icon: ClipboardList },

  // Audits & CAPA
  { id: "internal-audit", title: "Internal Audit Checklist", category: "Audits & CAPA", description: "ISO 22000 / FSSC 22000 internal audit findings & clause review.", defaultOrientation: "landscape", icon: FileText },
  { id: "capa-form", title: "CAPA Form", category: "Audits & CAPA", description: "Corrective and Preventive Action tracker for non-conformities.", defaultOrientation: "portrait", icon: Wrench },
  { id: "calibration-record", title: "Calibration Record", category: "Audits & CAPA", description: "Master calibration log for plant thermometers, pressure gauges & scales.", defaultOrientation: "landscape", icon: Scale },
  { id: "training-record", title: "Training Attendance Record", category: "Audits & CAPA", description: "Food safety & operational staff training log with evaluation.", defaultOrientation: "portrait", icon: GraduationCap },

  // Registers & Logs
  { id: "ppe-register", title: "PPE Issue Register", category: "Registers & Logs", description: "Personal Protective Equipment issuance & replacement tracker.", defaultOrientation: "portrait", icon: ShieldCheck },
  { id: "chemical-register", title: "Chemical Usage Register", category: "Registers & Logs", description: "CIP acid, caustic & sanitizer inventory and usage log.", defaultOrientation: "landscape", icon: Biohazard },
  { id: "waste-disposal", title: "Waste Disposal Checklist", category: "Registers & Logs", description: "ETP sludge, solid waste & dairy byproduct disposal tracker.", defaultOrientation: "landscape", icon: Recycle },

  // Plant & Storage
  { id: "truck-dock-inspection", title: "Milk Tanker Dock Inspection Checklist", category: "Plant & Storage", description: "Tanker seal, temperature, cleanliness & driver hygiene checklist.", defaultOrientation: "landscape", icon: Truck },
  { id: "cold-storage-temp", title: "Cold Storage & Deep Freezer Log", category: "Plant & Storage", description: "Hourly temperature & humidity record for butter, cheese & milk cold rooms.", defaultOrientation: "landscape", icon: Snowflake },
  { id: "packaging-material-inspection", title: "Packaging Material Inspection Register", category: "Plant & Storage", description: "Polyfilm, pouch, carton & foil quality inspection log.", defaultOrientation: "landscape", icon: Package },
  { id: "allergen-management", title: "Allergen Storage & Handling Register", category: "Plant & Storage", description: "Nuts, flavorings & allergen ingredient isolation tracker.", defaultOrientation: "landscape", icon: Biohazard },
  { id: "water-ice-micro", title: "Water & Ice Microbiological Analysis Log", category: "Plant & Storage", description: "RO water, process water & ice microbiological quality log.", defaultOrientation: "landscape", icon: Droplet },
  { id: "dispatch-sanitation", title: "Dispatch Vehicle Sanitation & Temp Log", category: "Plant & Storage", description: "Refrigerated van temperature, pre-cooling & cleanliness check.", defaultOrientation: "landscape", icon: Truck },
  { id: "boiler-safety-log", title: "Boiler & Steam Safety Inspection Log", category: "Plant & Storage", description: "Boiler pressure, blowdown, soft water hardness & safety valve check.", defaultOrientation: "landscape", icon: Factory },
  { id: "dg-electrical-log", title: "DG Set & Electrical Power Log", category: "Plant & Storage", description: "Diesel generator runtime, fuel stock, voltage & load log.", defaultOrientation: "landscape", icon: Zap },
  { id: "media-reagent-prep", title: "Lab Media & Reagent Preparation Log", category: "Plant & Storage", description: "Microbiology agar media sterilization, batch & expiry log.", defaultOrientation: "portrait", icon: FlaskConical },
  { id: "product-quarantine", title: "Product Hold & Quarantine Register", category: "Plant & Storage", description: "Non-conforming product isolation, lab re-test & release log.", defaultOrientation: "landscape", icon: Lock },
];

function WavesIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

export function QaGmpFormatsCalc() {
  const { toast } = useToast();
  const printAreaRef = useRef<HTMLDivElement>(null);
  
  const [selectedFormatId, setSelectedFormatId] = useState<QaFormatType>("personal-hygiene");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isExporting, setIsExporting] = useState(false);
  const [isContentOn, setIsContentOn] = useState(true); // Content ON/OFF Toggle
  const [userOrientation, setUserOrientation] = useState<"portrait" | "landscape" | "default">("default"); // A4 Landscape / Portrait toggle

  // Header Details State
  const [plantName, setPlantName] = useState("DAIRY HUB PROCESSING PLANT");
  const [plantLocation, setPlantLocation] = useState("Main Processing Unit");
  const [docNo, setDocNo] = useState("DH/QA/GMP/2026/01");
  const [effectiveDate, setEffectiveDate] = useState(new Date().toISOString().split('T')[0]);
  const [revisionNo, setRevisionNo] = useState("02");
  const [preparedBy, setPreparedBy] = useState("QA Officer");
  const [approvedBy, setApprovedBy] = useState("Plant QA Head");

  // Custom Columns State
  const [customColumns, setCustomColumns] = useState<Record<string, string[]>>({});
  const [newColName, setNewColName] = useState("");
  const [customCellData, setCustomCellData] = useState<Record<string, Record<string, string>>>({});

  // Initial Form Data Rows for ALL 30 Formats
  const [personalHygieneRows, setPersonalHygieneRows] = useState([
    { id: "1", empName: "Rajesh Kumar", empId: "EMP-102", uniform: "Clean", nails: "Trimmed", hairnet: "Yes", jewelry: "No", boots: "Sanitized", remark: "Compliant" },
    { id: "2", empName: "Suresh Sharma", empId: "EMP-108", uniform: "Clean", nails: "Trimmed", hairnet: "Yes", jewelry: "No", boots: "Sanitized", remark: "Compliant" }
  ]);

  const [handWashRows, setHandWashRows] = useState([
    { id: "1", time: "08:00 AM", empName: "Amit Singh", area: "Packing Line 1", soapUsed: "Yes", sanitizerUsed: "Yes", verifiedBy: "Supervisor" },
    { id: "2", time: "09:00 AM", empName: "Vikas Verma", area: "Processing Section", soapUsed: "Yes", sanitizerUsed: "Yes", verifiedBy: "Supervisor" }
  ]);

  const [healthDecRows, setHealthDecRows] = useState([
    { id: "1", date: new Date().toISOString().split('T')[0], empName: "Pankaj Das", fever: "No", cough: "No", skinLesion: "No", fitForWork: "Yes", sign: "P.Das" },
    { id: "2", date: new Date().toISOString().split('T')[0], empName: "Ravi Teja", fever: "No", cough: "No", skinLesion: "No", fitForWork: "Yes", sign: "R.Teja" }
  ]);

  const [gmpChecklistRows, setGmpChecklistRows] = useState([
    { id: "1", area: "Raw Milk Reception Dock", parameter: "Floor clean, no standing water", status: "Pass", actionNeeded: "None", owner: "Dock Supervisor" },
    { id: "2", area: "Pasteurization Section", parameter: "Fly killer ILT operational", status: "Pass", actionNeeded: "None", owner: "Plant Eng" }
  ]);

  const [fiveSAuditRows, setFiveSAuditRows] = useState([
    { id: "1", zone: "Lab Chemical Store", pillar: "1S - Sort", finding: "Unused reagent bottles found", score: "3/5", action: "Dispose expired chemical", targetDate: "2026-07-30" },
    { id: "2", zone: "Packing Line 2", pillar: "2S - Set in Order", finding: "Tools labeled on shadow board", score: "5/5", action: "Maintained", targetDate: "2026-07-25" }
  ]);

  const [kaizenRows, setKaizenRows] = useState([
    { id: "1", dept: "Butter Processing", problem: "Fat loss in buttermilk stream", idea: "Optimize separator bowl speed", benefit: "0.2% yield gain", status: "Implemented" }
  ]);

  const [haccpCcpRows, setHaccpCcpRows] = useState([
    { id: "1", ccpNo: "CCP-1", process: "Pasteurization PHE", parameter: "Temperature", limit: ">= 72.0°C / 15s", actual: "72.4°C", devStatus: "Normal", correctedBy: "Operator" },
    { id: "2", ccpNo: "CCP-2", process: "Metal Detector", parameter: "Fe/Non-Fe/SS Test", limit: "No Detection", actual: "Passed 1.5mm Fe", devStatus: "Normal", correctedBy: "QA Tech" }
  ]);

  const [preOpHygieneRows, setPreOpHygieneRows] = useState([
    { id: "1", equipId: "PHE-01", visualClean: "Pass", chemicalResidue: "Nil", swabTbc: "<10 CFU", clearance: "Approved", inspector: "QA Inspector" },
    { id: "2", equipId: "Silo-03", visualClean: "Pass", chemicalResidue: "Nil", swabTbc: "<5 CFU", clearance: "Approved", inspector: "QA Inspector" }
  ]);

  const [cipVerificationRows, setCipVerificationRows] = useState([
    { id: "1", circuit: "Raw Milk Line 1", causticTemp: "82°C", causticConc: "1.8%", acidTemp: "65°C", acidConc: "1.2%", finalRinsePh: "7.0", status: "Verified" }
  ]);

  const [glassBrittleRows, setGlassBrittleRows] = useState([
    { id: "1", itemId: "GL-01", location: "Processing Hall Ceiling", itemDesc: "Tube Light Sleeve", condition: "Intact", frequency: "Weekly", checkedBy: "Safety Exec" },
    { id: "2", itemId: "GL-02", location: "Pasteurizer Panel", itemDesc: "Temp Gauge Glass", condition: "Intact", frequency: "Daily", checkedBy: "Operator" }
  ]);

  const [pestControlRows, setPestControlRows] = useState([
    { id: "1", stationId: "BS-04", location: "External Perimeter North", type: "Rodent Bait Box", condition: "Intact", activity: "Nil", actionTaken: "Bait Replenished" }
  ]);

  const [cleaningSanitationRows, setCleaningSanitationRows] = useState([
    { id: "1", equipArea: "Paneer Vat 1", frequency: "Daily", chemicalUsed: "Chlorinated Foam", conc: "2.0%", temp: "50°C", doneBy: "Cleaner A", verifiedBy: "QA Tech" }
  ]);

  const [visitorHygieneRows, setVisitorHygieneRows] = useState([
    { id: "1", date: new Date().toISOString().split('T')[0], visitorName: "Dr. A. Sharma", company: "FSSAI Auditor", healthDec: "Fit", ppeIssued: "Apron, Cap, Boots", escort: "Plant Head" }
  ]);

  const [calibrationRecordRows, setCalibrationRecordRows] = useState([
    { id: "1", instName: "Master Milk Weigher", tagId: "BAL-01", stdRef: "Class M1 Weights", calDate: "2026-07-01", dueDate: "2026-10-01", error: "0.00 kg", status: "Pass" }
  ]);

  const [internalAuditRows, setInternalAuditRows] = useState([
    { id: "1", clause: "FSSC 22000 - 8.2", dept: "Maintenance", finding: "Air filter change log overdue", category: "Minor NC", targetDate: "2026-08-05", auditor: "Lead Auditor" }
  ]);

  const [capaRows, setCapaRows] = useState([
    { id: "1", ncNo: "NC-2026-04", rootCause: "Gasket wear in pump P-102", correctiveAction: "Replaced EPDM gasket", preventiveAction: "Monthly PM check added", resp: "Maint Head", status: "Closed" }
  ]);

  const [trainingRecordRows, setTrainingRecordRows] = useState([
    { id: "1", topic: "Allergen Management & Cross-Contamination", trainer: "QA Head", date: "2026-07-15", participant: "Ramesh Singh", dept: "Packing", score: "90%" }
  ]);

  const [ppeRegisterRows, setPpeRegisterRows] = useState([
    { id: "1", empName: "Mahesh Kumar", dept: "Boiler House", itemIssued: "Heat Resistant Gloves & Goggles", issueDate: "2026-07-10", reason: "Replacement", sign: "M.Kumar" }
  ]);

  const [chemicalRegisterRows, setChemicalRegisterRows] = useState([
    { id: "1", chemName: "Sodium Hydroxide (Caustic)", batchNo: "NaOH-882", openingStock: "500 kg", qtyIssued: "50 kg", purpose: "Silo-01 CIP", balanceStock: "450 kg", user: "CIP Operator" }
  ]);

  const [wasteDisposalRows, setWasteDisposalRows] = useState([
    { id: "1", category: "ETP Dried Sludge", qty: "1200 kg", storageArea: "Hazardous Waste Yard", disposalMethod: "Authorized Recycler", vendorName: "CleanEarth Ltd", manifestNo: "MN-9041" }
  ]);

  const [truckDockRows, setTruckDockRows] = useState([
    { id: "1", tankerNo: "RJ-14-GC-9012", supplier: "Federation Route 4", temp: "3.8°C", sealNo: "SL-9910", visualClean: "Clean", driverHygiene: "Good", inspector: "Dock QA" }
  ]);

  const [coldStorageRows, setColdStorageRows] = useState([
    { id: "1", time: "06:00 AM", roomName: "Butter Cold Room 1", setTemp: "-18°C", actualTemp: "-18.5°C", humidity: "85%", defrostStatus: "Normal", operator: "Cold Maint" },
    { id: "2", time: "10:00 AM", roomName: "Milk Storage Room", setTemp: "2°C", actualTemp: "2.3°C", humidity: "80%", defrostStatus: "Normal", operator: "Cold Maint" }
  ]);

  const [packagingMatRows, setPackagingMatRows] = useState([
    { id: "1", matName: "500ml Milk Pouch Film", supplier: "PolyFlex Ltd", batchNo: "PF-881", thickness: "55 µm", printQuality: "Pass", pinholeTest: "Nil", status: "Approved" }
  ]);

  const [allergenRows, setAllergenRows] = useState([
    { id: "1", allergenName: "Almond Flakes (Badam Milk)", storageZone: "Isolated Locker B", quantity: "25 kg", labelStatus: "Allergen Warning Attached", handwashVerified: "Yes", supervisor: "QA Exec" }
  ]);

  const [waterIceMicroRows, setWaterIceMicroRows] = useState([
    { id: "1", sampleSource: "RO Plant Outlet", samplingDate: "2026-07-20", tbcCount: "4 CFU/ml", coliform: "Absent/100ml", eColi: "Absent", result: "Pass", microLab: "QA Microbiologist" }
  ]);

  const [dispatchSanitationRows, setDispatchSanitationRows] = useState([
    { id: "1", vehicleNo: "MH-12-PQ-4411", driverName: "Sunil Verma", preCoolTemp: "3.5°C", floorClean: "Pass", doorSeal: "Intact", odometer: "45,210 km", inspector: "Logistics Officer" }
  ]);

  const [boilerSafetyRows, setBoilerSafetyRows] = useState([
    { id: "1", boilerNo: "BLR-01", steamPressure: "10.5 bar", softWaterHardness: "<5 ppm", blowdownDone: "Yes", safetyValveTest: "Pass", engineer: "Boiler Attendant" }
  ]);

  const [dgElectricalRows, setDgElectricalRows] = useState([
    { id: "1", dgSetNo: "DG-02 (500 KVA)", runHours: "1,240 hrs", dieselLevel: "450 L", outputVoltage: "415 V", oilPressure: "4.2 bar", tech: "Electrician" }
  ]);

  const [mediaReagentRows, setMediaReagentRows] = useState([
    { id: "1", mediaName: "MacConkey Agar", batchNo: "MC-901", prepDate: "2026-07-22", sterilizeTemp: "121°C / 15m", phValue: "7.1", expiryDate: "2026-08-05", analyst: "Lab Chemist" }
  ]);

  const [productQuarantineRows, setProductQuarantineRows] = useState([
    { id: "1", batchNo: "BTR-2026-78", productName: "Table Butter 500g", holdQty: "500 Cartons", reason: "Moisture high 16.3%", labReTest: "Re-blended OK", releaseStatus: "Released", QAHead: "QA Manager" }
  ]);

  const currentFormat = useMemo(() => {
    return QA_FORMATS_CATALOG.find(f => f.id === selectedFormatId) || QA_FORMATS_CATALOG[0];
  }, [selectedFormatId]);

  // Orientation Computation (Allows User Override to A4 Landscape or Portrait)
  const currentOrientation = useMemo(() => {
    if (userOrientation === "default") return currentFormat.defaultOrientation;
    return userOrientation;
  }, [userOrientation, currentFormat]);

  // Helper function to return empty string when Content is OFF
  const cellVal = (val: any) => {
    if (!isContentOn) return "";
    return val !== null && val !== undefined ? String(val) : "";
  };

  // Filter Catalog
  const filteredCatalog = useMemo(() => {
    return QA_FORMATS_CATALOG.filter(f => {
      const matchSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = selectedCategory === "All" || f.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory]);

  // Dynamic Row Addition
  const addRow = () => {
    const newId = String(Date.now());
    switch (selectedFormatId) {
      case "personal-hygiene": setPersonalHygieneRows([...personalHygieneRows, { id: newId, empName: "", empId: "", uniform: "Clean", nails: "Trimmed", hairnet: "Yes", jewelry: "No", boots: "Sanitized", remark: "" }]); break;
      case "hand-wash": setHandWashRows([...handWashRows, { id: newId, time: "", empName: "", area: "", soapUsed: "Yes", sanitizerUsed: "Yes", verifiedBy: "" }]); break;
      case "health-declaration": setHealthDecRows([...healthDecRows, { id: newId, date: new Date().toISOString().split('T')[0], empName: "", fever: "No", cough: "No", skinLesion: "No", fitForWork: "Yes", sign: "" }]); break;
      case "gmp-checklist": setGmpChecklistRows([...gmpChecklistRows, { id: newId, area: "", parameter: "", status: "Pass", actionNeeded: "", owner: "" }]); break;
      case "5s-audit": setFiveSAuditRows([...fiveSAuditRows, { id: newId, zone: "", pillar: "1S - Sort", finding: "", score: "5/5", action: "", targetDate: "" }]); break;
      case "kaizen-form": setKaizenRows([...kaizenRows, { id: newId, dept: "", problem: "", idea: "", benefit: "", status: "New" }]); break;
      case "haccp-ccp": setHaccpCcpRows([...haccpCcpRows, { id: newId, ccpNo: "CCP-1", process: "", parameter: "", limit: "", actual: "", devStatus: "Normal", correctedBy: "" }]); break;
      case "pre-op-hygiene": setPreOpHygieneRows([...preOpHygieneRows, { id: newId, equipId: "", visualClean: "Pass", chemicalResidue: "Nil", swabTbc: "<10 CFU", clearance: "Approved", inspector: "" }]); break;
      case "cip-verification": setCipVerificationRows([...cipVerificationRows, { id: newId, circuit: "", causticTemp: "", causticConc: "", acidTemp: "", acidConc: "", finalRinsePh: "", status: "Verified" }]); break;
      case "glass-brittle": setGlassBrittleRows([...glassBrittleRows, { id: newId, itemId: "", location: "", itemDesc: "", condition: "Intact", frequency: "Daily", checkedBy: "" }]); break;
      case "pest-control": setPestControlRows([...pestControlRows, { id: newId, stationId: "", location: "", type: "Bait Box", condition: "Intact", activity: "Nil", actionTaken: "" }]); break;
      case "cleaning-sanitation": setCleaningSanitationRows([...cleaningSanitationRows, { id: newId, equipArea: "", frequency: "Daily", chemicalUsed: "", conc: "", temp: "", doneBy: "", verifiedBy: "" }]); break;
      case "visitor-hygiene": setVisitorHygieneRows([...visitorHygieneRows, { id: newId, date: new Date().toISOString().split('T')[0], visitorName: "", company: "", healthDec: "Fit", ppeIssued: "Apron, Cap", escort: "" }]); break;
      case "calibration-record": setCalibrationRecordRows([...calibrationRecordRows, { id: newId, instName: "", tagId: "", stdRef: "", calDate: "", dueDate: "", error: "0.00", status: "Pass" }]); break;
      case "internal-audit": setInternalAuditRows([...internalAuditRows, { id: newId, clause: "", dept: "", finding: "", category: "Minor NC", targetDate: "", auditor: "" }]); break;
      case "capa-form": setCapaRows([...capaRows, { id: newId, ncNo: "", rootCause: "", correctiveAction: "", preventiveAction: "", resp: "", status: "Open" }]); break;
      case "training-record": setTrainingRecordRows([...trainingRecordRows, { id: newId, topic: "", trainer: "", date: new Date().toISOString().split('T')[0], participant: "", dept: "", score: "" }]); break;
      case "ppe-register": setPpeRegisterRows([...ppeRegisterRows, { id: newId, empName: "", dept: "", itemIssued: "", issueDate: new Date().toISOString().split('T')[0], reason: "New Issue", sign: "" }]); break;
      case "chemical-register": setChemicalRegisterRows([...chemicalRegisterRows, { id: newId, chemName: "", batchNo: "", openingStock: "", qtyIssued: "", purpose: "", balanceStock: "", user: "" }]); break;
      case "waste-disposal": setWasteDisposalRows([...wasteDisposalRows, { id: newId, category: "", qty: "", storageArea: "", disposalMethod: "", vendorName: "", manifestNo: "" }]); break;
      case "truck-dock-inspection": setTruckDockRows([...truckDockRows, { id: newId, tankerNo: "", supplier: "", temp: "", sealNo: "", visualClean: "Clean", driverHygiene: "Good", inspector: "" }]); break;
      case "cold-storage-temp": setColdStorageRows([...coldStorageRows, { id: newId, time: "", roomName: "", setTemp: "", actualTemp: "", humidity: "", defrostStatus: "Normal", operator: "" }]); break;
      case "packaging-material-inspection": setPackagingMatRows([...packagingMatRows, { id: newId, matName: "", supplier: "", batchNo: "", thickness: "", printQuality: "Pass", pinholeTest: "Nil", status: "Approved" }]); break;
      case "allergen-management": setAllergenRows([...allergenRows, { id: newId, allergenName: "", storageZone: "", quantity: "", labelStatus: "Labeled", handwashVerified: "Yes", supervisor: "" }]); break;
      case "water-ice-micro": setWaterIceMicroRows([...waterIceMicroRows, { id: newId, sampleSource: "", samplingDate: "", tbcCount: "", coliform: "Absent", eColi: "Absent", result: "Pass", microLab: "" }]); break;
      case "dispatch-sanitation": setDispatchSanitationRows([...dispatchSanitationRows, { id: newId, vehicleNo: "", driverName: "", preCoolTemp: "", floorClean: "Pass", doorSeal: "Intact", odometer: "", inspector: "" }]); break;
      case "boiler-safety-log": setBoilerSafetyRows([...boilerSafetyRows, { id: newId, boilerNo: "", steamPressure: "", softWaterHardness: "", blowdownDone: "Yes", safetyValveTest: "Pass", engineer: "" }]); break;
      case "dg-electrical-log": setDgElectricalRows([...dgElectricalRows, { id: newId, dgSetNo: "", runHours: "", dieselLevel: "", outputVoltage: "415V", oilPressure: "", tech: "" }]); break;
      case "media-reagent-prep": setMediaReagentRows([...mediaReagentRows, { id: newId, mediaName: "", batchNo: "", prepDate: "", sterilizeTemp: "", phValue: "", expiryDate: "", analyst: "" }]); break;
      case "product-quarantine": setProductQuarantineRows([...productQuarantineRows, { id: newId, batchNo: "", productName: "", holdQty: "", reason: "", labReTest: "", releaseStatus: "Hold", QAHead: "" }]); break;
    }
  };

  // Row Deletion
  const deleteRow = (id: string) => {
    switch (selectedFormatId) {
      case "personal-hygiene": setPersonalHygieneRows(personalHygieneRows.filter(r => r.id !== id)); break;
      case "hand-wash": setHandWashRows(handWashRows.filter(r => r.id !== id)); break;
      case "health-declaration": setHealthDecRows(healthDecRows.filter(r => r.id !== id)); break;
      case "gmp-checklist": setGmpChecklistRows(gmpChecklistRows.filter(r => r.id !== id)); break;
      case "5s-audit": setFiveSAuditRows(fiveSAuditRows.filter(r => r.id !== id)); break;
      case "kaizen-form": setKaizenRows(kaizenRows.filter(r => r.id !== id)); break;
      case "haccp-ccp": setHaccpCcpRows(haccpCcpRows.filter(r => r.id !== id)); break;
      case "pre-op-hygiene": setPreOpHygieneRows(preOpHygieneRows.filter(r => r.id !== id)); break;
      case "cip-verification": setCipVerificationRows(cipVerificationRows.filter(r => r.id !== id)); break;
      case "glass-brittle": setGlassBrittleRows(glassBrittleRows.filter(r => r.id !== id)); break;
      case "pest-control": setPestControlRows(pestControlRows.filter(r => r.id !== id)); break;
      case "cleaning-sanitation": setCleaningSanitationRows(cleaningSanitationRows.filter(r => r.id !== id)); break;
      case "visitor-hygiene": setVisitorHygieneRows(visitorHygieneRows.filter(r => r.id !== id)); break;
      case "calibration-record": setCalibrationRecordRows(calibrationRecordRows.filter(r => r.id !== id)); break;
      case "internal-audit": setInternalAuditRows(internalAuditRows.filter(r => r.id !== id)); break;
      case "capa-form": setCapaRows(capaRows.filter(r => r.id !== id)); break;
      case "training-record": setTrainingRecordRows(trainingRecordRows.filter(r => r.id !== id)); break;
      case "ppe-register": setPpeRegisterRows(ppeRegisterRows.filter(r => r.id !== id)); break;
      case "chemical-register": setChemicalRegisterRows(chemicalRegisterRows.filter(r => r.id !== id)); break;
      case "waste-disposal": setWasteDisposalRows(wasteDisposalRows.filter(r => r.id !== id)); break;
      case "truck-dock-inspection": setTruckDockRows(truckDockRows.filter(r => r.id !== id)); break;
      case "cold-storage-temp": setColdStorageRows(coldStorageRows.filter(r => r.id !== id)); break;
      case "packaging-material-inspection": setPackagingMatRows(packagingMatRows.filter(r => r.id !== id)); break;
      case "allergen-management": setAllergenRows(allergenRows.filter(r => r.id !== id)); break;
      case "water-ice-micro": setWaterIceMicroRows(waterIceMicroRows.filter(r => r.id !== id)); break;
      case "dispatch-sanitation": setDispatchSanitationRows(dispatchSanitationRows.filter(r => r.id !== id)); break;
      case "boiler-safety-log": setBoilerSafetyRows(boilerSafetyRows.filter(r => r.id !== id)); break;
      case "dg-electrical-log": setDgElectricalRows(dgElectricalRows.filter(r => r.id !== id)); break;
      case "media-reagent-prep": setMediaReagentRows(mediaReagentRows.filter(r => r.id !== id)); break;
      case "product-quarantine": setProductQuarantineRows(productQuarantineRows.filter(r => r.id !== id)); break;
    }
  };

  // Custom Columns Handling
  const addCustomColumn = () => {
    if (!newColName.trim()) return;
    const colKey = newColName.trim();
    setCustomColumns(prev => ({
      ...prev,
      [selectedFormatId]: [...(prev[selectedFormatId] || []), colKey]
    }));
    setNewColName("");
    toast({ title: "Column Added", description: `Added custom column "${colKey}" before Remarks/Verification.` });
  };

  const renderCustomHeaderCols = () => {
    const cols = customColumns[selectedFormatId] || [];
    return cols.map((col, idx) => (
      <th key={idx} className="border border-black px-1.5 py-1 text-center font-bold bg-amber-50/50">{col}</th>
    ));
  };

  const renderCustomBodyCells = (rowId: string) => {
    const cols = customColumns[selectedFormatId] || [];
    return cols.map((col, idx) => {
      const val = customCellData[rowId]?.[col] || "";
      return (
        <td key={idx} className="border border-black p-0.5 text-center">
          <input
            value={cellVal(val)}
            onChange={(e) => {
              const text = e.target.value;
              setCustomCellData(prev => ({
                ...prev,
                [rowId]: { ...(prev[rowId] || {}), [col]: text }
              }));
            }}
            className="w-full bg-transparent border-none text-[9px] p-0.5 text-center focus:ring-0"
          />
        </td>
      );
    });
  };

  // PDF Export
  const handleExportPdf = async () => {
    if (!printAreaRef.current) return;
    setIsExporting(true);

    try {
      const element = printAreaRef.current;
      element.classList.add("is-exporting-pdf");

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: 1200
      });

      element.classList.remove("is-exporting-pdf");

      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const isLandscape = currentOrientation === "landscape";
      const pdf = new jsPDF({
        orientation: isLandscape ? "landscape" : "portrait",
        unit: "mm",
        format: "a4"
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      } else {
        let heightLeft = imgHeight;
        let position = 0;
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }
      }

      const fileName = `${currentFormat.id}_${isContentOn ? 'filled' : 'blank_format'}_${new Date().toISOString().slice(0,10)}.pdf`;

      await savePdfFile(pdf, fileName);
      toast({ title: "PDF Exported!", description: `Downloaded ${fileName} successfully.` });
    } catch (err: any) {
      toast({ title: "PDF Export Failed", description: err.message || "Could not generate PDF", variant: "destructive" });
    } finally {
      setIsExporting(false);
    }
  };

  // Print
  const handlePrint = () => {
    window.print();
  };

  const categories = ["All", "Hygiene & Health", "GMP & Safety", "HACCP & CIP", "Audits & CAPA", "Registers & Logs", "Plant & Storage"];

  return (
    <div className="w-full flex flex-col gap-4 p-2 sm:p-4 text-slate-800">
      
      {/* Top Controls Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm print:hidden">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            GMP, Quality, Plant & Audit Formats (30 Official Registers)
          </h2>
          <p className="text-xs text-slate-500">Official ready-to-use registers for GMP, Personal Hygiene, HACCP, Audits, Plant Safety & Cold Storage.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {/* A4 Landscape / Portrait Orientation Toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <Button
              variant={currentOrientation === "portrait" ? "default" : "ghost"}
              size="sm"
              onClick={() => setUserOrientation("portrait")}
              className={cn("h-7 text-[11px] px-2", currentOrientation === "portrait" && "bg-indigo-600 hover:bg-indigo-700")}
            >
              A4 Portrait
            </Button>
            <Button
              variant={currentOrientation === "landscape" ? "default" : "ghost"}
              size="sm"
              onClick={() => setUserOrientation("landscape")}
              className={cn("h-7 text-[11px] px-2", currentOrientation === "landscape" && "bg-indigo-600 hover:bg-indigo-700")}
            >
              A4 Landscape
            </Button>
          </div>

          {/* Content ON/OFF Toggle */}
          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg">
            <Switch
              id="qa-content-toggle"
              checked={isContentOn}
              onCheckedChange={setIsContentOn}
            />
            <Label htmlFor="qa-content-toggle" className="text-xs font-semibold cursor-pointer text-indigo-900 flex items-center gap-1">
              {isContentOn ? "Content ON (Sample Data)" : "Content OFF (Blank Template)"}
            </Label>
          </div>

          <Button variant="outline" size="sm" onClick={handlePrint} className="gap-1 text-xs">
            <Printer className="w-3.5 h-3.5" /> Print
          </Button>

          <Button variant="default" size="sm" onClick={handleExportPdf} disabled={isExporting} className="gap-1 text-xs bg-indigo-600 hover:bg-indigo-700">
            {isExporting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
            Export PDF
          </Button>
        </div>
      </div>

      {/* Main Layout: Sidebar & Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Sidebar: Catalog & Config */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4 print:hidden">
          
          {/* Format Selector Card */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="p-3 sm:p-4 pb-2">
              <CardTitle className="text-sm font-bold text-slate-800 flex items-center justify-between">
                <span>Select Format ({filteredCatalog.length})</span>
                <Badge variant="secondary" className="text-[10px] bg-indigo-100 text-indigo-800">
                  {currentOrientation.toUpperCase()}
                </Badge>
              </CardTitle>

              {/* Search Bar */}
              <div className="relative mt-2">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                <Input
                  placeholder="Search 30 formats..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-8 text-xs h-8"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1 mt-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "text-[10px] px-2 py-0.5 rounded-full border transition-all",
                      selectedCategory === cat 
                        ? "bg-indigo-600 text-white border-indigo-600 font-semibold" 
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </CardHeader>

            <CardContent className="p-2 sm:p-3 pt-0 max-h-[380px] overflow-y-auto space-y-1">
              {filteredCatalog.map(item => {
                const IconComponent = item.icon;
                const isSelected = item.id === selectedFormatId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFormatId(item.id)}
                    className={cn(
                      "w-full text-left p-2 rounded-lg border text-xs transition-all flex items-start gap-2.5",
                      isSelected
                        ? "bg-indigo-50/80 border-indigo-500 text-indigo-950 font-medium shadow-xs"
                        : "bg-white border-slate-150 hover:bg-slate-50 text-slate-700"
                    )}
                  >
                    <IconComponent className={cn("w-4 h-4 shrink-0 mt-0.5", isSelected ? "text-indigo-600" : "text-slate-400")} />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-[11.5px] truncate">{item.title}</div>
                      <div className="text-[9.5px] text-slate-500 line-clamp-1">{item.description}</div>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Plant Header Information Editor */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="p-3 pb-2">
              <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-indigo-600" /> Header Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 space-y-2 text-xs">
              <div>
                <Label className="text-[10px]">Plant Name</Label>
                <Input value={plantName} onChange={e => setPlantName(e.target.value)} className="h-7 text-xs" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-[10px]">Doc No.</Label>
                  <Input value={docNo} onChange={e => setDocNo(e.target.value)} className="h-7 text-xs font-mono" />
                </div>
                <div>
                  <Label className="text-[10px]">Rev No.</Label>
                  <Input value={revisionNo} onChange={e => setRevisionNo(e.target.value)} className="h-7 text-xs font-mono" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-[10px]">Prepared By</Label>
                  <Input value={preparedBy} onChange={e => setPreparedBy(e.target.value)} className="h-7 text-xs" />
                </div>
                <div>
                  <Label className="text-[10px]">Approved By</Label>
                  <Input value={approvedBy} onChange={e => setApprovedBy(e.target.value)} className="h-7 text-xs" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add Custom Column & Row Actions */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="p-3 pb-2">
              <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Columns className="w-3.5 h-3.5 text-indigo-600" /> Actions & Custom Fields
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 space-y-2">
              <Button onClick={addRow} variant="outline" size="sm" className="w-full text-xs gap-1 border-dashed">
                <Plus className="w-3.5 h-3.5 text-green-600" /> Add New Row Entry
              </Button>

              <div className="flex items-center gap-1.5 pt-1">
                <Input
                  placeholder="New column name..."
                  value={newColName}
                  onChange={e => setNewColName(e.target.value)}
                  className="h-7 text-xs"
                />
                <Button onClick={addCustomColumn} size="sm" className="h-7 text-xs px-2 bg-indigo-600 hover:bg-indigo-700">
                  Add Col
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Area: Printable Format Preview Sheet */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col items-center">
          
          <div className="w-full overflow-x-auto pb-6">
            <div
              ref={printAreaRef}
              id="print-area-qa-formats"
              className={cn(
                "bg-white text-black p-4 sm:p-6 shadow-md border border-slate-300 mx-auto transition-all",
                currentOrientation === "landscape" ? "w-[297mm] min-h-[210mm]" : "w-[210mm] min-h-[297mm]"
              )}
              style={{ boxSizing: "border-box" }}
            >
              {/* Official Header Table */}
              <div className="border border-black mb-4 text-black">
                <div className="grid grid-cols-12 border-b border-black text-center items-center">
                  <div className="col-span-3 p-2 border-r border-black font-black text-sm uppercase tracking-wider flex flex-col justify-center items-center">
                    <ShieldCheck className="w-8 h-8 mb-1 text-black" />
                    <span>DAIRY HUB</span>
                  </div>
                  <div className="col-span-6 p-2 border-r border-black font-bold">
                    <div className="text-xs uppercase text-slate-700 font-mono">{plantName}</div>
                    <div className="text-sm uppercase font-black tracking-wide my-0.5">{currentFormat.title}</div>
                    <div className="text-[9px] text-slate-600 font-sans">{plantLocation} • Food Safety Management System</div>
                  </div>
                  <div className="col-span-3 text-[8.5px] font-mono text-left p-1.5 space-y-0.5 bg-slate-50/50">
                    <div><strong>Doc No:</strong> {docNo}</div>
                    <div><strong>Effective:</strong> {effectiveDate}</div>
                    <div><strong>Rev No:</strong> {revisionNo}</div>
                    <div><strong>Page:</strong> 1 of 1</div>
                  </div>
                </div>
              </div>

              {/* FORMAT CONTENTS RENDERER - Custom columns are placed BEFORE Remarks/Verification */}
              
              {/* 1. Personal Hygiene Checklist */}
              {selectedFormatId === "personal-hygiene" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-8">#</th>
                      <th className="border border-black px-1.5 py-1 text-left">Employee Name</th>
                      <th className="border border-black px-1.5 py-1 w-20">Emp ID</th>
                      <th className="border border-black px-1.5 py-1 w-16">Uniform</th>
                      <th className="border border-black px-1.5 py-1 w-16">Nails</th>
                      <th className="border border-black px-1.5 py-1 w-16">Hairnet</th>
                      <th className="border border-black px-1.5 py-1 w-16">Jewelry No</th>
                      <th className="border border-black px-1.5 py-1 w-18">Boots</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-left">Remarks</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {personalHygieneRows.map((r, i) => (
                      <tr key={r.id}>
                        <td className="border border-black p-1 text-center font-mono">{i + 1}</td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.empName)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, empName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.empId)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, empId: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.uniform)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, uniform: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.nails)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, nails: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.hairnet)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, hairnet: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.jewelry)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, jewelry: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.boots)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, boots: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.remark)} onChange={e => { const v = e.target.value; setPersonalHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, remark: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 2. Hand Wash Record */}
              {selectedFormatId === "hand-wash" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-16">Time</th>
                      <th className="border border-black px-1.5 py-1 text-left">Employee Name</th>
                      <th className="border border-black px-1.5 py-1 text-left">Work Area</th>
                      <th className="border border-black px-1.5 py-1 w-20">Soap Used</th>
                      <th className="border border-black px-1.5 py-1 w-24">Sanitizer Used</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Verified By</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {handWashRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.time)} onChange={e => { const v = e.target.value; setHandWashRows(rr => rr.map(x => x.id === r.id ? { ...x, time: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.empName)} onChange={e => { const v = e.target.value; setHandWashRows(rr => rr.map(x => x.id === r.id ? { ...x, empName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.area)} onChange={e => { const v = e.target.value; setHandWashRows(rr => rr.map(x => x.id === r.id ? { ...x, area: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.soapUsed)} onChange={e => { const v = e.target.value; setHandWashRows(rr => rr.map(x => x.id === r.id ? { ...x, soapUsed: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.sanitizerUsed)} onChange={e => { const v = e.target.value; setHandWashRows(rr => rr.map(x => x.id === r.id ? { ...x, sanitizerUsed: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.verifiedBy)} onChange={e => { const v = e.target.value; setHandWashRows(rr => rr.map(x => x.id === r.id ? { ...x, verifiedBy: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 3. Personnel Health Declaration */}
              {selectedFormatId === "health-declaration" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-20">Date</th>
                      <th className="border border-black px-1.5 py-1 text-left">Employee Name</th>
                      <th className="border border-black px-1.5 py-1 w-16">Fever</th>
                      <th className="border border-black px-1.5 py-1 w-16">Cough</th>
                      <th className="border border-black px-1.5 py-1 w-20">Skin Lesion</th>
                      <th className="border border-black px-1.5 py-1 w-20">Fit for Work</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Signature</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {healthDecRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.date)} onChange={e => { const v = e.target.value; setHealthDecRows(rr => rr.map(x => x.id === r.id ? { ...x, date: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.empName)} onChange={e => { const v = e.target.value; setHealthDecRows(rr => rr.map(x => x.id === r.id ? { ...x, empName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.fever)} onChange={e => { const v = e.target.value; setHealthDecRows(rr => rr.map(x => x.id === r.id ? { ...x, fever: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.cough)} onChange={e => { const v = e.target.value; setHealthDecRows(rr => rr.map(x => x.id === r.id ? { ...x, cough: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.skinLesion)} onChange={e => { const v = e.target.value; setHealthDecRows(rr => rr.map(x => x.id === r.id ? { ...x, skinLesion: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.fitForWork)} onChange={e => { const v = e.target.value; setHealthDecRows(rr => rr.map(x => x.id === r.id ? { ...x, fitForWork: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-green-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.sign)} onChange={e => { const v = e.target.value; setHealthDecRows(rr => rr.map(x => x.id === r.id ? { ...x, sign: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 4. GMP Checklist */}
              {selectedFormatId === "gmp-checklist" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-36">Plant Area</th>
                      <th className="border border-black px-1.5 py-1 text-left">GMP Parameter Inspected</th>
                      <th className="border border-black px-1.5 py-1 w-20">Status</th>
                      <th className="border border-black px-1.5 py-1 text-left">Action Needed</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-24">Area Owner</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gmpChecklistRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.area)} onChange={e => { const v = e.target.value; setGmpChecklistRows(rr => rr.map(x => x.id === r.id ? { ...x, area: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.parameter)} onChange={e => { const v = e.target.value; setGmpChecklistRows(rr => rr.map(x => x.id === r.id ? { ...x, parameter: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.status)} onChange={e => { const v = e.target.value; setGmpChecklistRows(rr => rr.map(x => x.id === r.id ? { ...x, status: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.actionNeeded)} onChange={e => { const v = e.target.value; setGmpChecklistRows(rr => rr.map(x => x.id === r.id ? { ...x, actionNeeded: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.owner)} onChange={e => { const v = e.target.value; setGmpChecklistRows(rr => rr.map(x => x.id === r.id ? { ...x, owner: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 5. 5S Audit Checklist */}
              {selectedFormatId === "5s-audit" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-32">Zone / Section</th>
                      <th className="border border-black px-1.5 py-1 w-28">5S Pillar</th>
                      <th className="border border-black px-1.5 py-1 text-left">Audit Finding / Observation</th>
                      <th className="border border-black px-1.5 py-1 w-16">Score</th>
                      <th className="border border-black px-1.5 py-1 text-left">Corrective Action</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-20">Target Date</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fiveSAuditRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.zone)} onChange={e => { const v = e.target.value; setFiveSAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, zone: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.pillar)} onChange={e => { const v = e.target.value; setFiveSAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, pillar: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.finding)} onChange={e => { const v = e.target.value; setFiveSAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, finding: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.score)} onChange={e => { const v = e.target.value; setFiveSAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, score: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.action)} onChange={e => { const v = e.target.value; setFiveSAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, action: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.targetDate)} onChange={e => { const v = e.target.value; setFiveSAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, targetDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 6. Kaizen Improvement Form */}
              {selectedFormatId === "kaizen-form" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-28">Department</th>
                      <th className="border border-black px-1.5 py-1 text-left">Problem Statement</th>
                      <th className="border border-black px-1.5 py-1 text-left">Kaizen Idea / Solution</th>
                      <th className="border border-black px-1.5 py-1 text-left">Expected Benefit</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-24">Status</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kaizenRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.dept)} onChange={e => { const v = e.target.value; setKaizenRows(rr => rr.map(x => x.id === r.id ? { ...x, dept: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.problem)} onChange={e => { const v = e.target.value; setKaizenRows(rr => rr.map(x => x.id === r.id ? { ...x, problem: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.idea)} onChange={e => { const v = e.target.value; setKaizenRows(rr => rr.map(x => x.id === r.id ? { ...x, idea: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.benefit)} onChange={e => { const v = e.target.value; setKaizenRows(rr => rr.map(x => x.id === r.id ? { ...x, benefit: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.status)} onChange={e => { const v = e.target.value; setKaizenRows(rr => rr.map(x => x.id === r.id ? { ...x, status: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-indigo-800" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 7. HACCP CCP Monitoring Log */}
              {selectedFormatId === "haccp-ccp" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-16">CCP No</th>
                      <th className="border border-black px-1.5 py-1 text-left">Process / Equipment</th>
                      <th className="border border-black px-1.5 py-1 text-left">Monitored Parameter</th>
                      <th className="border border-black px-1.5 py-1 w-28">Critical Limit</th>
                      <th className="border border-black px-1.5 py-1 w-20">Actual Value</th>
                      <th className="border border-black px-1.5 py-1 w-20">Dev Status</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Corrected By</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {haccpCcpRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.ccpNo)} onChange={e => { const v = e.target.value; setHaccpCcpRows(rr => rr.map(x => x.id === r.id ? { ...x, ccpNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold font-mono text-red-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.process)} onChange={e => { const v = e.target.value; setHaccpCcpRows(rr => rr.map(x => x.id === r.id ? { ...x, process: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.parameter)} onChange={e => { const v = e.target.value; setHaccpCcpRows(rr => rr.map(x => x.id === r.id ? { ...x, parameter: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.limit)} onChange={e => { const v = e.target.value; setHaccpCcpRows(rr => rr.map(x => x.id === r.id ? { ...x, limit: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.actual)} onChange={e => { const v = e.target.value; setHaccpCcpRows(rr => rr.map(x => x.id === r.id ? { ...x, actual: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.devStatus)} onChange={e => { const v = e.target.value; setHaccpCcpRows(rr => rr.map(x => x.id === r.id ? { ...x, devStatus: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.correctedBy)} onChange={e => { const v = e.target.value; setHaccpCcpRows(rr => rr.map(x => x.id === r.id ? { ...x, correctedBy: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 8. Pre-Operational Hygiene Inspection */}
              {selectedFormatId === "pre-op-hygiene" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-32">Equipment ID</th>
                      <th className="border border-black px-1.5 py-1 w-24">Visual Clean</th>
                      <th className="border border-black px-1.5 py-1 w-28">Chemical Residue</th>
                      <th className="border border-black px-1.5 py-1 w-24">Swab TBC</th>
                      <th className="border border-black px-1.5 py-1 w-24">Line Clearance</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-28">Inspector</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preOpHygieneRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.equipId)} onChange={e => { const v = e.target.value; setPreOpHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, equipId: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-bold font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.visualClean)} onChange={e => { const v = e.target.value; setPreOpHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, visualClean: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.chemicalResidue)} onChange={e => { const v = e.target.value; setPreOpHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, chemicalResidue: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.swabTbc)} onChange={e => { const v = e.target.value; setPreOpHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, swabTbc: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.clearance)} onChange={e => { const v = e.target.value; setPreOpHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, clearance: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-green-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.inspector)} onChange={e => { const v = e.target.value; setPreOpHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, inspector: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 9. CIP Verification Checklist */}
              {selectedFormatId === "cip-verification" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-32">CIP Circuit ID</th>
                      <th className="border border-black px-1.5 py-1 w-20">Caustic Temp</th>
                      <th className="border border-black px-1.5 py-1 w-20">Caustic Conc</th>
                      <th className="border border-black px-1.5 py-1 w-20">Acid Temp</th>
                      <th className="border border-black px-1.5 py-1 w-20">Acid Conc</th>
                      <th className="border border-black px-1.5 py-1 w-24">Final Rinse pH</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-20">Status</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cipVerificationRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.circuit)} onChange={e => { const v = e.target.value; setCipVerificationRows(rr => rr.map(x => x.id === r.id ? { ...x, circuit: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.causticTemp)} onChange={e => { const v = e.target.value; setCipVerificationRows(rr => rr.map(x => x.id === r.id ? { ...x, causticTemp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.causticConc)} onChange={e => { const v = e.target.value; setCipVerificationRows(rr => rr.map(x => x.id === r.id ? { ...x, causticConc: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.acidTemp)} onChange={e => { const v = e.target.value; setCipVerificationRows(rr => rr.map(x => x.id === r.id ? { ...x, acidTemp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.acidConc)} onChange={e => { const v = e.target.value; setCipVerificationRows(rr => rr.map(x => x.id === r.id ? { ...x, acidConc: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.finalRinsePh)} onChange={e => { const v = e.target.value; setCipVerificationRows(rr => rr.map(x => x.id === r.id ? { ...x, finalRinsePh: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold text-teal-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.status)} onChange={e => { const v = e.target.value; setCipVerificationRows(rr => rr.map(x => x.id === r.id ? { ...x, status: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 10. Glass & Brittle Plastic Register */}
              {selectedFormatId === "glass-brittle" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-16">Item ID</th>
                      <th className="border border-black px-1.5 py-1 text-left">Location</th>
                      <th className="border border-black px-1.5 py-1 text-left">Item Description</th>
                      <th className="border border-black px-1.5 py-1 w-20">Condition</th>
                      <th className="border border-black px-1.5 py-1 w-20">Inspect Freq</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-28">Checked By</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {glassBrittleRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.itemId)} onChange={e => { const v = e.target.value; setGlassBrittleRows(rr => rr.map(x => x.id === r.id ? { ...x, itemId: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.location)} onChange={e => { const v = e.target.value; setGlassBrittleRows(rr => rr.map(x => x.id === r.id ? { ...x, location: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.itemDesc)} onChange={e => { const v = e.target.value; setGlassBrittleRows(rr => rr.map(x => x.id === r.id ? { ...x, itemDesc: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.condition)} onChange={e => { const v = e.target.value; setGlassBrittleRows(rr => rr.map(x => x.id === r.id ? { ...x, condition: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.frequency)} onChange={e => { const v = e.target.value; setGlassBrittleRows(rr => rr.map(x => x.id === r.id ? { ...x, frequency: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.checkedBy)} onChange={e => { const v = e.target.value; setGlassBrittleRows(rr => rr.map(x => x.id === r.id ? { ...x, checkedBy: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 11. Pest Control Checklist */}
              {selectedFormatId === "pest-control" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-20">Station ID</th>
                      <th className="border border-black px-1.5 py-1 text-left">Location</th>
                      <th className="border border-black px-1.5 py-1 w-28">Pest Control Type</th>
                      <th className="border border-black px-1.5 py-1 w-20">Condition</th>
                      <th className="border border-black px-1.5 py-1 w-20">Pest Activity</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-left">Action Taken</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pestControlRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.stationId)} onChange={e => { const v = e.target.value; setPestControlRows(rr => rr.map(x => x.id === r.id ? { ...x, stationId: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.location)} onChange={e => { const v = e.target.value; setPestControlRows(rr => rr.map(x => x.id === r.id ? { ...x, location: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.type)} onChange={e => { const v = e.target.value; setPestControlRows(rr => rr.map(x => x.id === r.id ? { ...x, type: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.condition)} onChange={e => { const v = e.target.value; setPestControlRows(rr => rr.map(x => x.id === r.id ? { ...x, condition: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.activity)} onChange={e => { const v = e.target.value; setPestControlRows(rr => rr.map(x => x.id === r.id ? { ...x, activity: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.actionTaken)} onChange={e => { const v = e.target.value; setPestControlRows(rr => rr.map(x => x.id === r.id ? { ...x, actionTaken: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 12. Cleaning & Sanitation Checklist */}
              {selectedFormatId === "cleaning-sanitation" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Equipment / Area</th>
                      <th className="border border-black px-1.5 py-1 w-20">Frequency</th>
                      <th className="border border-black px-1.5 py-1 text-left">Chemical Used</th>
                      <th className="border border-black px-1.5 py-1 w-16">Conc %</th>
                      <th className="border border-black px-1.5 py-1 w-16">Temp °C</th>
                      <th className="border border-black px-1.5 py-1 text-center w-24">Done By</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Verified By</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cleaningSanitationRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.equipArea)} onChange={e => { const v = e.target.value; setCleaningSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, equipArea: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.frequency)} onChange={e => { const v = e.target.value; setCleaningSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, frequency: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.chemicalUsed)} onChange={e => { const v = e.target.value; setCleaningSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, chemicalUsed: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.conc)} onChange={e => { const v = e.target.value; setCleaningSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, conc: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.temp)} onChange={e => { const v = e.target.value; setCleaningSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, temp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.doneBy)} onChange={e => { const v = e.target.value; setCleaningSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, doneBy: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.verifiedBy)} onChange={e => { const v = e.target.value; setCleaningSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, verifiedBy: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 13. Visitor Hygiene Checklist */}
              {selectedFormatId === "visitor-hygiene" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-20">Date</th>
                      <th className="border border-black px-1.5 py-1 text-left">Visitor Name</th>
                      <th className="border border-black px-1.5 py-1 text-left">Company / Org</th>
                      <th className="border border-black px-1.5 py-1 w-20">Health Dec</th>
                      <th className="border border-black px-1.5 py-1 text-left">PPE Issued</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-28">Escort Name</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitorHygieneRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.date)} onChange={e => { const v = e.target.value; setVisitorHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, date: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.visitorName)} onChange={e => { const v = e.target.value; setVisitorHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, visitorName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.company)} onChange={e => { const v = e.target.value; setVisitorHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, company: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.healthDec)} onChange={e => { const v = e.target.value; setVisitorHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, healthDec: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-green-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.ppeIssued)} onChange={e => { const v = e.target.value; setVisitorHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, ppeIssued: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.escort)} onChange={e => { const v = e.target.value; setVisitorHygieneRows(rr => rr.map(x => x.id === r.id ? { ...x, escort: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 14. Calibration Record */}
              {selectedFormatId === "calibration-record" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Instrument Name</th>
                      <th className="border border-black px-1.5 py-1 w-20">Tag / ID</th>
                      <th className="border border-black px-1.5 py-1 text-left">Std Reference</th>
                      <th className="border border-black px-1.5 py-1 w-20">Cal Date</th>
                      <th className="border border-black px-1.5 py-1 w-20">Due Date</th>
                      <th className="border border-black px-1.5 py-1 w-20">Error / Dev</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-16">Status</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calibrationRecordRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.instName)} onChange={e => { const v = e.target.value; setCalibrationRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, instName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.tagId)} onChange={e => { const v = e.target.value; setCalibrationRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, tagId: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.stdRef)} onChange={e => { const v = e.target.value; setCalibrationRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, stdRef: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.calDate)} onChange={e => { const v = e.target.value; setCalibrationRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, calDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.dueDate)} onChange={e => { const v = e.target.value; setCalibrationRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, dueDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.error)} onChange={e => { const v = e.target.value; setCalibrationRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, error: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.status)} onChange={e => { const v = e.target.value; setCalibrationRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, status: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 15. Internal Audit Checklist */}
              {selectedFormatId === "internal-audit" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-24">Clause / Std</th>
                      <th className="border border-black px-1.5 py-1 text-left w-28">Department</th>
                      <th className="border border-black px-1.5 py-1 text-left">Audit Finding / Observation</th>
                      <th className="border border-black px-1.5 py-1 w-24">NC Category</th>
                      <th className="border border-black px-1.5 py-1 w-20">Target Date</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Auditor</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internalAuditRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.clause)} onChange={e => { const v = e.target.value; setInternalAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, clause: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.dept)} onChange={e => { const v = e.target.value; setInternalAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, dept: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.finding)} onChange={e => { const v = e.target.value; setInternalAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, finding: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.category)} onChange={e => { const v = e.target.value; setInternalAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, category: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-amber-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.targetDate)} onChange={e => { const v = e.target.value; setInternalAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, targetDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.auditor)} onChange={e => { const v = e.target.value; setInternalAuditRows(rr => rr.map(x => x.id === r.id ? { ...x, auditor: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 16. CAPA Form */}
              {selectedFormatId === "capa-form" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-20">NC Ref No</th>
                      <th className="border border-black px-1.5 py-1 text-left">Root Cause Analysis (RCA)</th>
                      <th className="border border-black px-1.5 py-1 text-left">Corrective Action</th>
                      <th className="border border-black px-1.5 py-1 text-left">Preventive Action</th>
                      <th className="border border-black px-1.5 py-1 w-24">Responsibility</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-16">Status</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {capaRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.ncNo)} onChange={e => { const v = e.target.value; setCapaRows(rr => rr.map(x => x.id === r.id ? { ...x, ncNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold text-red-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.rootCause)} onChange={e => { const v = e.target.value; setCapaRows(rr => rr.map(x => x.id === r.id ? { ...x, rootCause: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.correctiveAction)} onChange={e => { const v = e.target.value; setCapaRows(rr => rr.map(x => x.id === r.id ? { ...x, correctiveAction: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.preventiveAction)} onChange={e => { const v = e.target.value; setCapaRows(rr => rr.map(x => x.id === r.id ? { ...x, preventiveAction: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.resp)} onChange={e => { const v = e.target.value; setCapaRows(rr => rr.map(x => x.id === r.id ? { ...x, resp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.status)} onChange={e => { const v = e.target.value; setCapaRows(rr => rr.map(x => x.id === r.id ? { ...x, status: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 17. Training Attendance Record */}
              {selectedFormatId === "training-record" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Training Topic</th>
                      <th className="border border-black px-1.5 py-1 text-left w-28">Trainer</th>
                      <th className="border border-black px-1.5 py-1 w-20">Date</th>
                      <th className="border border-black px-1.5 py-1 text-left">Participant Name</th>
                      <th className="border border-black px-1.5 py-1 text-left w-24">Department</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-16">Score</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingRecordRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.topic)} onChange={e => { const v = e.target.value; setTrainingRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, topic: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.trainer)} onChange={e => { const v = e.target.value; setTrainingRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, trainer: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.date)} onChange={e => { const v = e.target.value; setTrainingRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, date: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.participant)} onChange={e => { const v = e.target.value; setTrainingRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, participant: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.dept)} onChange={e => { const v = e.target.value; setTrainingRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, dept: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.score)} onChange={e => { const v = e.target.value; setTrainingRecordRows(rr => rr.map(x => x.id === r.id ? { ...x, score: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 18. PPE Issue Register */}
              {selectedFormatId === "ppe-register" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Employee Name</th>
                      <th className="border border-black px-1.5 py-1 text-left w-24">Department</th>
                      <th className="border border-black px-1.5 py-1 text-left">PPE Item Issued</th>
                      <th className="border border-black px-1.5 py-1 w-20">Issue Date</th>
                      <th className="border border-black px-1.5 py-1 text-left w-28">Replacement Reason</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-20">Signature</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ppeRegisterRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.empName)} onChange={e => { const v = e.target.value; setPpeRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, empName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.dept)} onChange={e => { const v = e.target.value; setPpeRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, dept: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.itemIssued)} onChange={e => { const v = e.target.value; setPpeRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, itemIssued: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.issueDate)} onChange={e => { const v = e.target.value; setPpeRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, issueDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.reason)} onChange={e => { const v = e.target.value; setPpeRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, reason: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.sign)} onChange={e => { const v = e.target.value; setPpeRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, sign: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 19. Chemical Usage Register */}
              {selectedFormatId === "chemical-register" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Chemical Name</th>
                      <th className="border border-black px-1.5 py-1 w-20">Batch No</th>
                      <th className="border border-black px-1.5 py-1 w-20">Opening Stock</th>
                      <th className="border border-black px-1.5 py-1 w-20">Qty Issued</th>
                      <th className="border border-black px-1.5 py-1 text-left">Purpose / Area</th>
                      <th className="border border-black px-1.5 py-1 w-20">Balance Stock</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">User / Sign</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalRegisterRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.chemName)} onChange={e => { const v = e.target.value; setChemicalRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, chemName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.batchNo)} onChange={e => { const v = e.target.value; setChemicalRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, batchNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.openingStock)} onChange={e => { const v = e.target.value; setChemicalRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, openingStock: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.qtyIssued)} onChange={e => { const v = e.target.value; setChemicalRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, qtyIssued: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.purpose)} onChange={e => { const v = e.target.value; setChemicalRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, purpose: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.balanceStock)} onChange={e => { const v = e.target.value; setChemicalRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, balanceStock: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold text-teal-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.user)} onChange={e => { const v = e.target.value; setChemicalRegisterRows(rr => rr.map(x => x.id === r.id ? { ...x, user: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 20. Waste Disposal Checklist */}
              {selectedFormatId === "waste-disposal" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Waste Category</th>
                      <th className="border border-black px-1.5 py-1 w-20">Qty / Weight</th>
                      <th className="border border-black px-1.5 py-1 text-left">Storage Area</th>
                      <th className="border border-black px-1.5 py-1 text-left">Disposal Method</th>
                      <th className="border border-black px-1.5 py-1 text-left">Vendor Name</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-24">Manifest No</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wasteDisposalRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.category)} onChange={e => { const v = e.target.value; setWasteDisposalRows(rr => rr.map(x => x.id === r.id ? { ...x, category: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.qty)} onChange={e => { const v = e.target.value; setWasteDisposalRows(rr => rr.map(x => x.id === r.id ? { ...x, qty: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.storageArea)} onChange={e => { const v = e.target.value; setWasteDisposalRows(rr => rr.map(x => x.id === r.id ? { ...x, storageArea: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.disposalMethod)} onChange={e => { const v = e.target.value; setWasteDisposalRows(rr => rr.map(x => x.id === r.id ? { ...x, disposalMethod: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.vendorName)} onChange={e => { const v = e.target.value; setWasteDisposalRows(rr => rr.map(x => x.id === r.id ? { ...x, vendorName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.manifestNo)} onChange={e => { const v = e.target.value; setWasteDisposalRows(rr => rr.map(x => x.id === r.id ? { ...x, manifestNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 21. Milk Tanker Dock Inspection */}
              {selectedFormatId === "truck-dock-inspection" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-24">Tanker No</th>
                      <th className="border border-black px-1.5 py-1 text-left">Supplier / Route</th>
                      <th className="border border-black px-1.5 py-1 w-16">Milk Temp</th>
                      <th className="border border-black px-1.5 py-1 w-20">Seal No</th>
                      <th className="border border-black px-1.5 py-1 w-20">Visual Clean</th>
                      <th className="border border-black px-1.5 py-1 w-24">Driver Hygiene</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Inspector</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {truckDockRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.tankerNo)} onChange={e => { const v = e.target.value; setTruckDockRows(rr => rr.map(x => x.id === r.id ? { ...x, tankerNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.supplier)} onChange={e => { const v = e.target.value; setTruckDockRows(rr => rr.map(x => x.id === r.id ? { ...x, supplier: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.temp)} onChange={e => { const v = e.target.value; setTruckDockRows(rr => rr.map(x => x.id === r.id ? { ...x, temp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold text-teal-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.sealNo)} onChange={e => { const v = e.target.value; setTruckDockRows(rr => rr.map(x => x.id === r.id ? { ...x, sealNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.visualClean)} onChange={e => { const v = e.target.value; setTruckDockRows(rr => rr.map(x => x.id === r.id ? { ...x, visualClean: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 text-green-800 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.driverHygiene)} onChange={e => { const v = e.target.value; setTruckDockRows(rr => rr.map(x => x.id === r.id ? { ...x, driverHygiene: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.inspector)} onChange={e => { const v = e.target.value; setTruckDockRows(rr => rr.map(x => x.id === r.id ? { ...x, inspector: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 22. Cold Storage & Deep Freezer Temp Log */}
              {selectedFormatId === "cold-storage-temp" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-16">Time</th>
                      <th className="border border-black px-1.5 py-1 text-left">Cold Room Name</th>
                      <th className="border border-black px-1.5 py-1 w-20">Set Temp</th>
                      <th className="border border-black px-1.5 py-1 w-20">Actual Temp</th>
                      <th className="border border-black px-1.5 py-1 w-20">Humidity</th>
                      <th className="border border-black px-1.5 py-1 w-24">Defrost Status</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Operator</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coldStorageRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.time)} onChange={e => { const v = e.target.value; setColdStorageRows(rr => rr.map(x => x.id === r.id ? { ...x, time: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.roomName)} onChange={e => { const v = e.target.value; setColdStorageRows(rr => rr.map(x => x.id === r.id ? { ...x, roomName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.setTemp)} onChange={e => { const v = e.target.value; setColdStorageRows(rr => rr.map(x => x.id === r.id ? { ...x, setTemp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.actualTemp)} onChange={e => { const v = e.target.value; setColdStorageRows(rr => rr.map(x => x.id === r.id ? { ...x, actualTemp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold text-sky-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.humidity)} onChange={e => { const v = e.target.value; setColdStorageRows(rr => rr.map(x => x.id === r.id ? { ...x, humidity: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.defrostStatus)} onChange={e => { const v = e.target.value; setColdStorageRows(rr => rr.map(x => x.id === r.id ? { ...x, defrostStatus: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.operator)} onChange={e => { const v = e.target.value; setColdStorageRows(rr => rr.map(x => x.id === r.id ? { ...x, operator: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 23. Packaging Material Inspection */}
              {selectedFormatId === "packaging-material-inspection" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Material Name</th>
                      <th className="border border-black px-1.5 py-1 text-left">Supplier</th>
                      <th className="border border-black px-1.5 py-1 w-20">Batch No</th>
                      <th className="border border-black px-1.5 py-1 w-20">Thickness</th>
                      <th className="border border-black px-1.5 py-1 w-20">Print Quality</th>
                      <th className="border border-black px-1.5 py-1 w-20">Pinhole Test</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 w-20">Status</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packagingMatRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.matName)} onChange={e => { const v = e.target.value; setPackagingMatRows(rr => rr.map(x => x.id === r.id ? { ...x, matName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.supplier)} onChange={e => { const v = e.target.value; setPackagingMatRows(rr => rr.map(x => x.id === r.id ? { ...x, supplier: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.batchNo)} onChange={e => { const v = e.target.value; setPackagingMatRows(rr => rr.map(x => x.id === r.id ? { ...x, batchNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.thickness)} onChange={e => { const v = e.target.value; setPackagingMatRows(rr => rr.map(x => x.id === r.id ? { ...x, thickness: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.printQuality)} onChange={e => { const v = e.target.value; setPackagingMatRows(rr => rr.map(x => x.id === r.id ? { ...x, printQuality: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.pinholeTest)} onChange={e => { const v = e.target.value; setPackagingMatRows(rr => rr.map(x => x.id === r.id ? { ...x, pinholeTest: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.status)} onChange={e => { const v = e.target.value; setPackagingMatRows(rr => rr.map(x => x.id === r.id ? { ...x, status: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 24. Allergen Management */}
              {selectedFormatId === "allergen-management" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Allergen Ingredient</th>
                      <th className="border border-black px-1.5 py-1 text-left">Storage Zone</th>
                      <th className="border border-black px-1.5 py-1 w-20">Quantity</th>
                      <th className="border border-black px-1.5 py-1 text-left">Label Warning Status</th>
                      <th className="border border-black px-1.5 py-1 w-24">Handwash Check</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Supervisor</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allergenRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.allergenName)} onChange={e => { const v = e.target.value; setAllergenRows(rr => rr.map(x => x.id === r.id ? { ...x, allergenName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold text-rose-900" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.storageZone)} onChange={e => { const v = e.target.value; setAllergenRows(rr => rr.map(x => x.id === r.id ? { ...x, storageZone: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.quantity)} onChange={e => { const v = e.target.value; setAllergenRows(rr => rr.map(x => x.id === r.id ? { ...x, quantity: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.labelStatus)} onChange={e => { const v = e.target.value; setAllergenRows(rr => rr.map(x => x.id === r.id ? { ...x, labelStatus: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.handwashVerified)} onChange={e => { const v = e.target.value; setAllergenRows(rr => rr.map(x => x.id === r.id ? { ...x, handwashVerified: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.supervisor)} onChange={e => { const v = e.target.value; setAllergenRows(rr => rr.map(x => x.id === r.id ? { ...x, supervisor: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 25. Water & Ice Microbiological Analysis Log */}
              {selectedFormatId === "water-ice-micro" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Sample Source</th>
                      <th className="border border-black px-1.5 py-1 w-20">Sampling Date</th>
                      <th className="border border-black px-1.5 py-1 w-20">TBC Count</th>
                      <th className="border border-black px-1.5 py-1 w-24">Coliform / 100ml</th>
                      <th className="border border-black px-1.5 py-1 w-20">E. Coli</th>
                      <th className="border border-black px-1.5 py-1 w-16">Result</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-28">Micro Analyst</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waterIceMicroRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.sampleSource)} onChange={e => { const v = e.target.value; setWaterIceMicroRows(rr => rr.map(x => x.id === r.id ? { ...x, sampleSource: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.samplingDate)} onChange={e => { const v = e.target.value; setWaterIceMicroRows(rr => rr.map(x => x.id === r.id ? { ...x, samplingDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.tbcCount)} onChange={e => { const v = e.target.value; setWaterIceMicroRows(rr => rr.map(x => x.id === r.id ? { ...x, tbcCount: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.coliform)} onChange={e => { const v = e.target.value; setWaterIceMicroRows(rr => rr.map(x => x.id === r.id ? { ...x, coliform: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.eColi)} onChange={e => { const v = e.target.value; setWaterIceMicroRows(rr => rr.map(x => x.id === r.id ? { ...x, eColi: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.result)} onChange={e => { const v = e.target.value; setWaterIceMicroRows(rr => rr.map(x => x.id === r.id ? { ...x, result: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-green-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.microLab)} onChange={e => { const v = e.target.value; setWaterIceMicroRows(rr => rr.map(x => x.id === r.id ? { ...x, microLab: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 26. Dispatch Vehicle Sanitation & Temp Log */}
              {selectedFormatId === "dispatch-sanitation" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-24">Vehicle No</th>
                      <th className="border border-black px-1.5 py-1 text-left">Driver Name</th>
                      <th className="border border-black px-1.5 py-1 w-20">Pre-Cool Temp</th>
                      <th className="border border-black px-1.5 py-1 w-20">Floor Clean</th>
                      <th className="border border-black px-1.5 py-1 w-20">Door Seal</th>
                      <th className="border border-black px-1.5 py-1 w-24">Odometer</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-28">Inspector</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dispatchSanitationRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.vehicleNo)} onChange={e => { const v = e.target.value; setDispatchSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, vehicleNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.driverName)} onChange={e => { const v = e.target.value; setDispatchSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, driverName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.preCoolTemp)} onChange={e => { const v = e.target.value; setDispatchSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, preCoolTemp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono text-teal-800 font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.floorClean)} onChange={e => { const v = e.target.value; setDispatchSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, floorClean: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.doorSeal)} onChange={e => { const v = e.target.value; setDispatchSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, doorSeal: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.odometer)} onChange={e => { const v = e.target.value; setDispatchSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, odometer: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.inspector)} onChange={e => { const v = e.target.value; setDispatchSanitationRows(rr => rr.map(x => x.id === r.id ? { ...x, inspector: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 27. Boiler & Steam Safety Inspection Log */}
              {selectedFormatId === "boiler-safety-log" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-20">Boiler No</th>
                      <th className="border border-black px-1.5 py-1 w-24">Steam Pressure</th>
                      <th className="border border-black px-1.5 py-1 w-28">Soft Water Hardness</th>
                      <th className="border border-black px-1.5 py-1 w-24">Blowdown Done</th>
                      <th className="border border-black px-1.5 py-1 w-24">Safety Valve Test</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-28">Engineer</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boilerSafetyRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.boilerNo)} onChange={e => { const v = e.target.value; setBoilerSafetyRows(rr => rr.map(x => x.id === r.id ? { ...x, boilerNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.steamPressure)} onChange={e => { const v = e.target.value; setBoilerSafetyRows(rr => rr.map(x => x.id === r.id ? { ...x, steamPressure: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.softWaterHardness)} onChange={e => { const v = e.target.value; setBoilerSafetyRows(rr => rr.map(x => x.id === r.id ? { ...x, softWaterHardness: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.blowdownDone)} onChange={e => { const v = e.target.value; setBoilerSafetyRows(rr => rr.map(x => x.id === r.id ? { ...x, blowdownDone: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.safetyValveTest)} onChange={e => { const v = e.target.value; setBoilerSafetyRows(rr => rr.map(x => x.id === r.id ? { ...x, safetyValveTest: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-green-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.engineer)} onChange={e => { const v = e.target.value; setBoilerSafetyRows(rr => rr.map(x => x.id === r.id ? { ...x, engineer: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 28. DG Set & Electrical Power Log */}
              {selectedFormatId === "dg-electrical-log" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left w-28">DG Set No</th>
                      <th className="border border-black px-1.5 py-1 w-20">Run Hours</th>
                      <th className="border border-black px-1.5 py-1 w-20">Diesel Level</th>
                      <th className="border border-black px-1.5 py-1 w-20">Output Voltage</th>
                      <th className="border border-black px-1.5 py-1 w-20">Oil Pressure</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Technician</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dgElectricalRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.dgSetNo)} onChange={e => { const v = e.target.value; setDgElectricalRows(rr => rr.map(x => x.id === r.id ? { ...x, dgSetNo: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.runHours)} onChange={e => { const v = e.target.value; setDgElectricalRows(rr => rr.map(x => x.id === r.id ? { ...x, runHours: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.dieselLevel)} onChange={e => { const v = e.target.value; setDgElectricalRows(rr => rr.map(x => x.id === r.id ? { ...x, dieselLevel: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.outputVoltage)} onChange={e => { const v = e.target.value; setDgElectricalRows(rr => rr.map(x => x.id === r.id ? { ...x, outputVoltage: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.oilPressure)} onChange={e => { const v = e.target.value; setDgElectricalRows(rr => rr.map(x => x.id === r.id ? { ...x, oilPressure: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.tech)} onChange={e => { const v = e.target.value; setDgElectricalRows(rr => rr.map(x => x.id === r.id ? { ...x, tech: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 29. Lab Media & Reagent Preparation Log */}
              {selectedFormatId === "media-reagent-prep" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 text-left">Media / Reagent Name</th>
                      <th className="border border-black px-1.5 py-1 w-20">Batch No</th>
                      <th className="border border-black px-1.5 py-1 w-20">Prep Date</th>
                      <th className="border border-black px-1.5 py-1 w-24">Sterilize Temp</th>
                      <th className="border border-black px-1.5 py-1 w-16">pH Value</th>
                      <th className="border border-black px-1.5 py-1 w-20">Expiry Date</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">Analyst</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mediaReagentRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.mediaName)} onChange={e => { const v = e.target.value; setMediaReagentRows(rr => rr.map(x => x.id === r.id ? { ...x, mediaName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold text-indigo-900" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.batchNo)} onChange={e => { const v = e.target.value; setMediaReagentRows(rr => rr.map(x => x.id === r.id ? { ...x, batchNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.prepDate)} onChange={e => { const v = e.target.value; setMediaReagentRows(rr => rr.map(x => x.id === r.id ? { ...x, prepDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.sterilizeTemp)} onChange={e => { const v = e.target.value; setMediaReagentRows(rr => rr.map(x => x.id === r.id ? { ...x, sterilizeTemp: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.phValue)} onChange={e => { const v = e.target.value; setMediaReagentRows(rr => rr.map(x => x.id === r.id ? { ...x, phValue: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.expiryDate)} onChange={e => { const v = e.target.value; setMediaReagentRows(rr => rr.map(x => x.id === r.id ? { ...x, expiryDate: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.analyst)} onChange={e => { const v = e.target.value; setMediaReagentRows(rr => rr.map(x => x.id === r.id ? { ...x, analyst: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* 30. Product Hold & Quarantine Register */}
              {selectedFormatId === "product-quarantine" && (
                <table className="w-full text-[9px] border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black px-1.5 py-1 w-20">Batch No</th>
                      <th className="border border-black px-1.5 py-1 text-left">Product Name</th>
                      <th className="border border-black px-1.5 py-1 w-20">Hold Qty</th>
                      <th className="border border-black px-1.5 py-1 text-left">Hold Reason</th>
                      <th className="border border-black px-1.5 py-1 text-left">Lab Re-Test Result</th>
                      <th className="border border-black px-1.5 py-1 w-20">Release Status</th>
                      {renderCustomHeaderCols()}
                      <th className="border border-black px-1.5 py-1 text-center w-24">QA Head</th>
                      <th className="border border-black px-1 py-1 w-8 print:hidden">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productQuarantineRows.map((r) => (
                      <tr key={r.id}>
                        <td className="border border-black p-0.5"><input value={cellVal(r.batchNo)} onChange={e => { const v = e.target.value; setProductQuarantineRows(rr => rr.map(x => x.id === r.id ? { ...x, batchNo: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold text-red-800" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.productName)} onChange={e => { const v = e.target.value; setProductQuarantineRows(rr => rr.map(x => x.id === r.id ? { ...x, productName: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5 font-semibold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.holdQty)} onChange={e => { const v = e.target.value; setProductQuarantineRows(rr => rr.map(x => x.id === r.id ? { ...x, holdQty: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-mono font-bold" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.reason)} onChange={e => { const v = e.target.value; setProductQuarantineRows(rr => rr.map(x => x.id === r.id ? { ...x, reason: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.labReTest)} onChange={e => { const v = e.target.value; setProductQuarantineRows(rr => rr.map(x => x.id === r.id ? { ...x, labReTest: v } : x)); }} className="w-full bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5"><input value={cellVal(r.releaseStatus)} onChange={e => { const v = e.target.value; setProductQuarantineRows(rr => rr.map(x => x.id === r.id ? { ...x, releaseStatus: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5 font-bold text-emerald-800" /></td>
                        {renderCustomBodyCells(r.id)}
                        <td className="border border-black p-0.5"><input value={cellVal(r.QAHead)} onChange={e => { const v = e.target.value; setProductQuarantineRows(rr => rr.map(x => x.id === r.id ? { ...x, QAHead: v } : x)); }} className="w-full text-center bg-transparent border-none text-[9px] p-0.5" /></td>
                        <td className="border border-black p-0.5 text-center print:hidden"><button onClick={() => deleteRow(r.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5 mx-auto" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* Official Footer */}
              <div className="mt-8 pt-4 border-t border-black text-[9px] flex justify-between items-end">
                <div className="space-y-4">
                  <div><strong>Prepared By:</strong> ______________________ ({preparedBy})</div>
                  <div><strong>Verified By:</strong> ______________________ (QA Inspector)</div>
                </div>
                <div className="text-center font-mono">
                  <div className="font-bold">FOOD SAFETY & QUALITY ASSURANCE DEPT</div>
                </div>
                <div className="space-y-4 text-right">
                  <div><strong>Approved By:</strong> ______________________ ({approvedBy})</div>
                  <div><strong>Date & Stamp:</strong> ______________________</div>
                </div>
              </div>

              {/* ERP Footer Branding */}
              <div className="border-t border-slate-300 pt-2 mt-4 text-center text-[7.5px] text-slate-400 font-bold tracking-widest uppercase">
                POWERED BY DAIRY HUB ERP SYSTEM
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
          #print-area-qa-formats, #print-area-qa-formats * {
            visibility: visible;
          }
          #print-area-qa-formats {
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
          .print\\:hidden {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
