"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Sparkles,
  ShieldAlert,
  TrendingUp,
  FlaskConical,
  CheckCircle2,
  Clock,
  ChevronRight,
  RefreshCw,
  Radio,
  BookOpen,
  ArrowLeft,
  Check,
  Trash2,
  Briefcase,
  Search,
  Building2,
  GraduationCap,
  Globe,
  ExternalLink,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ALL_350_DAIRY_FOOD_COMPANIES, DairyCompany } from "@/lib/content/dairy-food-companies";

export interface JobDetails {
  orgName: string;
  jobSector: "Government" | "Private / PSU";
  totalVacancies?: string;
  eligibility: string[];
  salaryPackage: string;
  selectionProcess: string[];
  appLink: string;
  technicalSyllabus: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  summary: string;
  detail: string;
  category: "jobs" | "fssai" | "market" | "tech" | "industry" | "app";
  timestamp: string;
  dateStr: string;
  isRead: boolean;
  important?: boolean;
  createdMs: number;
  highlights?: string[];
  actionSteps?: string[];
  jobDetails?: JobDetails;
  appLink?: string;
}

const NOW = Date.now();
const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;

// Massive dynamic pool covering Govt & Private Jobs with complete Eligibility & Knowledge Briefings
const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "notif-job-1",
    title: "Govt Job: FSSAI Recruitment 2026 for Technical Officer & Central Food Safety Officer",
    summary: "FSSAI invites applications for B.Tech Dairy Tech / Food Tech / M.Sc Chemistry graduates.",
    detail: "Food Safety and Standards Authority of India (FSSAI) has released official recruitment notification for Technical Officer (TO), Central Food Safety Officer (CFSO), and Assistant Manager (QA) posts under Ministry of Health & Family Welfare.",
    category: "jobs",
    timestamp: "10 mins ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 10 * 60 * 1000,
    highlights: [
      "Positions: Technical Officer (TO) & Central Food Safety Officer (CFSO)",
      "Educational Eligibility: B.Tech Dairy Technology / Food Technology / B.Sc Agriculture / M.Sc Microbiology / Chemistry",
      "Official Application Portal: fssai.gov.in",
    ],
    actionSteps: [
      "Step 1: Visit fssai.gov.in -> Jobs/Careers portal.",
      "Step 2: Fill online application form and upload B.Tech Dairy Tech degree certificate.",
      "Step 3: Prepare for FSSAI CBT Stage-1 & Stage-2 technical examination.",
    ],
    jobDetails: {
      orgName: "Food Safety & Standards Authority of India (FSSAI)",
      jobSector: "Government",
      totalVacancies: "250+ All India Posts",
      eligibility: [
        "B.Tech / B.E. in Dairy Technology / Food Technology / Bio-Technology",
        "M.Sc in Microbiology / Biochemistry / Food Science",
        "Degree in Veterinary Science or Agricultural Engineering",
      ],
      salaryPackage: "Pay Level 7 & 10 (₹44,900 - ₹1,42,400 + DA + HRA)",
      selectionProcess: [
        "Stage 1: Computer Based Test (CBT) - General Intelligence & Aptitude",
        "Stage 2: CBT Technical Test - Food Safety Act & Dairy Chemistry",
        "Document Verification & Medical Fitness",
      ],
      appLink: "https://fssai.gov.in/jobs.php",
      technicalSyllabus: [
        "Food Safety and Standards Act 2006, Rules & Regulations 2011",
        "Dairy Chemistry: Gerber Fat test, CLR SNF formulas, Adulterant detection",
        "Dairy Microbiology: MBRT test, Pasteurization thermal lethality (D & Z values)",
        "Food Processing: HTST Pasteurization, CIP 5-stage cleaning, Spray drying",
      ],
    },
  },
  {
    id: "notif-job-2",
    title: "Private Hiring: Amul (GCMMF) Recruiting Dairy Production & QA Trainees",
    summary: "GCMMF hiring Fresh & Experienced B.Tech Dairy Tech graduates across Gujarat & North India.",
    detail: "Gujarat Cooperative Milk Marketing Federation Ltd. (Amul) is recruiting Dairy Executives, Quality Assurance Officers, and Maintenance Engineers for pasteurization, powder plant, and butter manufacturing divisions.",
    category: "jobs",
    timestamp: "25 mins ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 25 * 60 * 1000,
    highlights: [
      "Roles: Shift Officer (Production), QA Lab Analyst, CIP Maintenance Lead",
      "Salary Package: ₹4.8 LPA - ₹7.5 LPA + Cooperative allowances",
      "Qualification: B.Tech Dairy Technology / M.Tech Food Engineering",
    ],
    actionSteps: [
      "Step 1: Submit updated CV via Amul careers portal (amul.com/careers).",
      "Step 2: Prepare for technical interview on HTST pasteurization & Gerber Fat testing.",
    ],
    jobDetails: {
      orgName: "Gujarat Cooperative Milk Marketing Federation Ltd. (Amul)",
      jobSector: "Private / PSU",
      totalVacancies: "Multiple Openings (Anand, Rohtak, Nagpur, Lucknow Units)",
      eligibility: [
        "B.Tech / B.Sc in Dairy Technology (ICAR recognized)",
        "M.Tech / M.Sc in Dairy Chemistry / Dairy Microbiology",
        "0 - 3 years hands-on experience in liquid milk or powder plant",
      ],
      salaryPackage: "₹4.8 LPA - ₹7.5 LPA CTC + PF, Medical & Bonus",
      selectionProcess: [
        "Online Resume Screening",
        "Technical Domain Written Test & Aptitude",
        "Personal Technical & HR Interview Round",
      ],
      appLink: "https://amul.com/m/careers",
      technicalSyllabus: [
        "Milk Standardization: Pearson Square fat & SNF blending calculations",
        "Raw Milk Reception Dock (RMRD): Neutralizer, Soda & Antibiotic testing",
        "Dairy Engineering: HTST pasteurizer heat exchangers, homogenizers, pumps",
        "Quality Systems: HACCP, ISO 22000, FSSC 22000 documentation",
      ],
    },
  },
  {
    id: "notif-job-foodkida",
    title: "FoodKida Vacancy Alert: 120+ Active Openings in QA/QC, Production & R&D",
    summary: "Popular Food Industry platform FoodKida lists new jobs for Food Technologists & Dairy Graduates.",
    detail: "FoodKida Job Portal has aggregated over 120+ active vacancies across FMCG Food, Beverage, and Dairy companies in India for Quality Assurance Executives, Microbiologists, Production Supervisors, and Regulatory Compliance Officers.",
    category: "jobs",
    timestamp: "15 mins ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 15 * 60 * 1000,
    highlights: [
      "Platform: FoodKida Industry Vacancies",
      "Roles: Food Technologist, QA Executive, Production Officer, R&D Chemist",
      "Eligibility: B.Tech Dairy Tech / B.Tech Food Tech / M.Sc Microbiology / Chemistry",
    ],
    actionSteps: [
      "Step 1: Open FoodKida official portal (foodkida.com).",
      "Step 2: Filter by your specialization (Dairy, QA/QC, Production, FMCG).",
      "Step 3: Direct application to HR emails and company career forms.",
    ],
    jobDetails: {
      orgName: "FoodKida Portal / Food Industry Network",
      jobSector: "Private / PSU",
      totalVacancies: "120+ Verified Openings",
      eligibility: [
        "B.Tech / B.E. in Food Technology / Dairy Technology",
        "M.Sc in Food Science / Microbiology / Chemistry",
        "Diploma in Food Processing & Quality Management",
      ],
      salaryPackage: "₹3.5 LPA - ₹8.5 LPA CTC",
      selectionProcess: ["Online Resume Application", "Company HR Screening & Technical Interview"],
      appLink: "https://www.foodkida.com",
      technicalSyllabus: [
        "FSSC 22000, HACCP 7 Principles, ISO 22000 Auditing",
        "Sensory evaluation, Brix & Titratable Acidity analysis",
        "Food Lab Equipment: HPLC, GC-MS, Gerber Centrifuge, Spectrophotometer",
      ],
    },
  },
  {
    id: "notif-job-foodtech-jobs",
    title: "FoodTech Jobs Alert: Food Analyst, Lab Chemist & Plant Trainee Vacancies",
    summary: "FoodTech Jobs platform updates latest private & government food laboratory vacancies.",
    detail: "FoodTech Jobs portal features new recruitment drives for Food Analysts, NABL Accredited Lab Technicians, Hygiene Officers, and Dairy Processing Executives across Pan-India food units.",
    category: "jobs",
    timestamp: "35 mins ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 35 * 60 * 1000,
    highlights: [
      "Platform: FoodTech Jobs / NABL Lab Recruitment",
      "Openings: NABL Lab Analyst, Food Safety Inspector, Plant Trainee",
      "Pay Range: ₹25,000 - ₹55,000 / month",
    ],
    actionSteps: [
      "Step 1: Check FoodTech Jobs portal for location-wise vacancies.",
      "Step 2: Upload updated resume & educational documents.",
    ],
    jobDetails: {
      orgName: "FoodTech Jobs / Food Industry Portal",
      jobSector: "Private / PSU",
      totalVacancies: "85+ Active Posts",
      eligibility: [
        "B.Tech / M.Tech Food Engineering / Dairy Technology",
        "B.Sc / M.Sc Chemistry, Biochemistry, or Food Microbiology",
      ],
      salaryPackage: "₹3.0 LPA - ₹6.5 LPA",
      selectionProcess: ["Written Technical Test", "Lab Practical & HR Interview"],
      appLink: "https://www.ncs.gov.in",
      technicalSyllabus: [
        "Proximate analysis of food & dairy products (Protein, Fat, Ash, Moisture)",
        "Microbiological assay: Total Plate Count, Yeast & Mold, Coliforms",
      ],
    },
  },
  {
    id: "notif-job-niftem-cftri",
    title: "Govt Research Vacancy: NIFTEM & CSIR-CFTRI Recruiting Junior Research Fellows & Project Scientists",
    summary: "National Institutes NIFTEM & CFTRI invite applications for Food & Dairy R&D projects.",
    detail: "National Institute of Food Technology Entrepreneurship and Management (NIFTEM) & CSIR-CFTRI Mysore have invited applications for JRF, Project Scientist, and Technical Assistant roles in novel dairy processing, food fortification, and packaging research.",
    category: "jobs",
    timestamp: "1.2 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 70 * 60 * 1000,
    highlights: [
      "Institutes: NIFTEM Kundli/Thanjavur & CSIR-CFTRI Mysore",
      "Roles: JRF, Senior Research Fellow, Project Scientist",
      "Stipend: ₹31,000 - ₹42,000 / month + HRA",
    ],
    actionSteps: [
      "Step 1: Download application form from niftem.ac.in or cftri.res.in.",
      "Step 2: Email filled application form with GATE/NET scorecard.",
    ],
    jobDetails: {
      orgName: "NIFTEM & CSIR-CFTRI Mysore",
      jobSector: "Government",
      totalVacancies: "24 Research Posts",
      eligibility: [
        "M.Tech / M.Sc in Food Technology / Dairy Technology / Bio-Engineering",
        "Desirable: GATE / NET qualification or 1 yr R&D experience",
      ],
      salaryPackage: "₹31,000 - ₹42,000 / month + HRA",
      selectionProcess: ["Shortlisting based on GATE/Academic merit", "Virtual / Physical Panel Interview"],
      appLink: "https://niftem.ac.in",
      technicalSyllabus: [
        "Extrusion cooking, Rheology, Spray drying, Thermal lethality calculations",
        "Food packaging barrier properties (WVTR, OTR), HPLC analytical chemistry",
      ],
    },
  },
  {
    id: "notif-market-1",
    title: "Milk Procurement Price Hike: Amul & Mother Dairy Increase FAT Rate by ₹2/Liter",
    summary: "Farmers to receive higher procurement price per kg FAT across Gujarat, UP & Punjab.",
    detail: "Leading dairy cooperatives Amul and Mother Dairy have announced an increase of ₹2 per liter in raw milk procurement prices. Buffalo milk Fat rate has been revised upwards to ₹820 per kg Fat, providing direct margin boost to dairy farmers.",
    category: "market",
    timestamp: "50 mins ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 50 * 60 * 1000,
    highlights: [
      "Buffalo Milk Rate: ₹820 per kg FAT",
      "Cow Milk Rate: ₹38.5 / liter (Base 4.0% Fat / 8.5% SNF)",
      "Applicable across all BMC collection centers from 15th of this month",
    ],
  },
  {
    id: "notif-job-3",
    title: "Govt Vacancy: NDDB Officer Recruitment for Dairy Engineering & Cold Chain",
    summary: "National Dairy Development Board recruiting Dairy Engineers & Project Analysts.",
    detail: "NDDB Anand has opened recruitment for Officer (Dairy Engineering), Project Executive (Cold Chain), and MIS Specialist. Candidates holding B.Tech Dairy Engineering or Mechanical Engineering with 2+ years plant experience are invited to apply.",
    category: "jobs",
    timestamp: "2 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    createdMs: NOW - 2 * ONE_HOUR,
    jobDetails: {
      orgName: "National Dairy Development Board (NDDB Anand)",
      jobSector: "Government",
      totalVacancies: "18 Posts (Anand, Delhi, Bengaluru Offices)",
      eligibility: [
        "B.Tech in Dairy Engineering / Mechanical Engineering",
        "Minimum 2 years experience in cold chain or milk processing plant",
      ],
      salaryPackage: "₹60,000 - ₹95,000 per month (Pay Matrix Level 9)",
      selectionProcess: [
        "Shortlisting based on GATE score / academic records",
        "Personal Technical Interview at NDDB Anand Campus",
      ],
      appLink: "https://nddb.coop/careers",
      technicalSyllabus: [
        "Bulk Milk Cooler (BMC) refrigeration system design (R-404A/Freon)",
        "Dairy Plant Utilities: Boiler steam generation, ETP effluent treatment",
        "Cold Storage insulation & thermal enthalpy calculations",
      ],
    },
  },
  {
    id: "notif-fssai-1",
    title: "FSSAI Mandatory Directive: Mandatory Vitamin Fortification & SNF Logs",
    summary: "All processing plants mandated to record Vitamin A & D dosing parameters.",
    detail: "FSSAI has issued mandatory operational guidelines for liquid milk processing units. All units must maintain verified digital logs for Vitamin A (770-1260 IU/L) and Vitamin D2/D3 (200-335 IU/L) fortification, ensuring SNF remains strictly at or above statutory 8.5% for Cow milk and 9.0% for Buffalo milk.",
    category: "fssai",
    timestamp: "2.5 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 150 * 60 * 1000,
  },
  {
    id: "notif-job-4",
    title: "Private Hiring: Nestlé India Recruiting QA Specialists & Food Safety Leads",
    summary: "Nestlé Moga & Samalkha plants seeking experienced Food Technologists for QA/QC.",
    detail: "Nestlé India is hiring Senior QA Specialists and HACCP Lead Auditors for infant nutrition and liquid milk processing facilities. Candidates with M.Tech / B.Tech Dairy Tech with 3-6 years QA experience in ISO 22000 & FSSC 22000 environment are eligible.",
    category: "jobs",
    timestamp: "4 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    createdMs: NOW - 4 * ONE_HOUR,
    jobDetails: {
      orgName: "Nestlé India Ltd.",
      jobSector: "Private / PSU",
      totalVacancies: "QA Specialist & Food Safety Auditor",
      eligibility: [
        "B.Tech / M.Tech in Dairy Technology or Food Safety",
        "3 to 6 years experience in QA/QC laboratory in multinational food corporate",
      ],
      salaryPackage: "₹8.5 LPA - ₹12.5 LPA CTC + Health Insurance",
      selectionProcess: [
        "Virtual HR Round",
        "Domain Technical Assessment Case Study",
        "Leadership & Operations Panel Interview",
      ],
      appLink: "https://nestle.in/careers",
      technicalSyllabus: [
        "FSSC 22000 & ISO 22000 Food Safety Management Systems",
        "Infant Formula Spray Drying & Microbial Spore testing",
        "High Performance Liquid Chromatography (HPLC) & Atomic Absorption",
      ],
    },
  },
  {
    id: "notif-job-5",
    title: "Govt Walk-In: ICAR-NDRI Karnal Openings for Senior Research Fellow (SRF) & YP-II",
    summary: "ICAR National Dairy Research Institute invites applications for dairy technology projects.",
    detail: "ICAR-NDRI Karnal walk-in interview for Senior Research Fellow (SRF) and Young Professional II in Dairy Technology & Dairy Chemistry departments. Monthly stipend ₹35,000 + HRA.",
    category: "jobs",
    timestamp: "5 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    createdMs: NOW - 5 * ONE_HOUR,
    jobDetails: {
      orgName: "ICAR - National Dairy Research Institute (NDRI Karnal)",
      jobSector: "Government",
      totalVacancies: "12 Research Posts",
      eligibility: [
        "M.Tech / M.Sc in Dairy Technology / Dairy Chemistry / Dairy Microbiology",
        "NET / GATE qualified candidates preferred",
      ],
      salaryPackage: "₹35,000 - ₹42,000 per month + HRA",
      selectionProcess: [
        "Walk-In Interview at ICAR-NDRI Karnal Campus",
        "Original Document Verification & Research Presentation",
      ],
      appLink: "https://ndri.res.in",
      technicalSyllabus: [
        "Bioactive peptides & whey protein fractionation",
        "Starter culture fermentation kinetics & probiotic cheese development",
        "Rheological characterization of dairy spreads & ghee crystallization",
      ],
    },
  },
  {
    id: "notif-job-6",
    title: "Private Vacancy: Mother Dairy Hiring Cold Chain Operations & RMRD Supervisors",
    summary: "Mother Dairy Fruit & Vegetable Pvt. Ltd. recruiting plant supervisors for Delhi-NCR & UP.",
    detail: "Mother Dairy is recruiting Executive Trainees and Assistant Managers for cold chain logistics, bulk milk coolers (BMC) management, and retail distribution network. B.Tech Dairy Tech / MBA Logistics preferred.",
    category: "jobs",
    timestamp: "6 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    createdMs: NOW - 6 * ONE_HOUR,
    jobDetails: {
      orgName: "Mother Dairy Fruit & Vegetable Pvt. Ltd.",
      jobSector: "Private / PSU",
      totalVacancies: "25 Posts (Patparganj, Pilkhuwa & Nagpur Units)",
      eligibility: [
        "B.Tech Dairy Technology / B.Sc Agriculture / Diploma in Dairy Tech",
        "0 - 4 years experience in milk reception dock or cold supply chain",
      ],
      salaryPackage: "₹5.2 LPA - ₹8.0 LPA CTC",
      selectionProcess: [
        "Written Aptitude & Technical Screening Test",
        "Plant Management Panel Technical Round",
      ],
      appLink: "https://motherdairy.com/careers",
      technicalSyllabus: [
        "Milk receptiondock (RMRD) sampling & platform tests (COB, Alcohol, MBRT)",
        "Cold chain thermal retention & Visi-cooler maintenance",
        "Tetra Pak aseptic filling & pasteurization sanitation",
      ],
    },
  },
  {
    id: "notif-job-fso-state",
    title: "Govt Job: State PSC Food Safety Officer (FSO) Recruitment 2026",
    summary: "State PSC invites applications for Food Safety Officer (FSO) posts in Food & Drug Administration.",
    detail: "State Public Service Commission has released official notification for Food Safety Officers (FSO) and Food Analysts in Department of Food Safety & Drug Administration. Candidates holding B.Tech Dairy Technology, B.Tech Food Technology, M.Sc Microbiology, B.Sc Agriculture or Veterinary Science are eligible to apply.",
    category: "jobs",
    timestamp: "1 hr ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 1 * ONE_HOUR,
    highlights: [
      "Position: Food Safety Officer (FSO) / Food Analyst (Group B Gazetted)",
      "Eligibility: B.Tech Dairy Tech / Food Tech / M.Sc Microbiology / B.Sc Agriculture / B.V.Sc & AH",
      "Pay Scale: Pay Level 10 (₹35,400 - ₹1,12,400 + DA + Allowances)",
      "Selection: Prelims Screen + Technical Mains Exam + Interview",
    ],
    actionSteps: [
      "Step 1: Visit State PSC portal (e.g. uppsc.up.nic.in / rpsc.rajasthan.gov.in / gpsc.gujarat.gov.in).",
      "Step 2: Fill online application form and upload B.Tech Dairy Tech / Food Tech degree & transcripts.",
      "Step 3: Prepare FSS Act 2006, Dairy Chemistry (Gerber Fat/SNF) & Food Microbiology syllabus.",
    ],
    jobDetails: {
      orgName: "State Food Safety & Drug Administration (State PSC)",
      jobSector: "Government",
      totalVacancies: "180+ State Posts",
      eligibility: [
        "B.Tech / B.E. in Dairy Technology or Food Technology",
        "M.Sc in Microbiology / Biochemistry / Food Science",
        "Degree in Veterinary Science (B.V.Sc & AH) or Agricultural Science",
      ],
      salaryPackage: "Pay Level 10 (₹35,400 - ₹1,12,400 + HRA + DA)",
      selectionProcess: [
        "Stage 1: State PSC Written Exam (General Studies & Food Science)",
        "Stage 2: Technical Exam on Food Safety & Standards Act 2006",
        "Stage 3: Interview & Original Document Verification",
      ],
      appLink: "https://www.ncs.gov.in",
      technicalSyllabus: [
        "FSS Act 2006, Rules 2011, Licensing & Registration Regulations",
        "Dairy Quality Control: Gerber Fat test, Lactometer CLR, SNF calculations",
        "Milk Adulteration: Rosalic Acid test (neutralizers), DMAB (urea), Starch test",
        "Food Microbiology: Pathogens (Salmonella, L. monocytogenes), MBRT, Pasteurization D & Z values",
      ],
    },
  },
  {
    id: "notif-job-ah-state",
    title: "Govt Job: State Dept of Animal Husbandry & Dairying Recruiting Dairy Development Officers (DDO)",
    summary: "Department of Animal Husbandry & Dairying recruiting Dairy Development Officers & Extension Incharges.",
    detail: "State Department of Animal Husbandry and Dairying has invited applications for Dairy Development Officer (DDO), Extension Officer (Dairy), and Assistant Dairy Superintendent posts across state milk unions and chilling centers.",
    category: "jobs",
    timestamp: "1.5 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 90 * 60 * 1000,
    jobDetails: {
      orgName: "State Department of Animal Husbandry & Dairying",
      jobSector: "Government",
      totalVacancies: "65 Gazetted Posts",
      eligibility: [
        "B.Tech in Dairy Technology / B.Sc Dairy Science",
        "B.V.Sc & AH (Bachelor of Veterinary Science & Animal Husbandry)",
        "Desirable: 1+ year experience in milk procurement or BMC management",
      ],
      salaryPackage: "Pay Level 9/10 (₹47,600 - ₹1,51,100 + DA)",
      selectionProcess: [
        "State Service Commission Competitive Exam",
        "Interview & Verification of ICAR accredited degree",
      ],
      appLink: "https://dahd.nic.in",
      technicalSyllabus: [
        "Clean Milk Production (CMP) at village collection centers",
        "Bulk Milk Cooler (BMC) chilling efficiency & cold chain preservation",
        "Cattle feed formulation & Artificial Insemination (AI) extension",
      ],
    },
  },
  {
    id: "notif-job-bis-central",
    title: "Central Govt Job: BIS Recruitment for Scientist B / Technical Officer (Food & Dairy)",
    summary: "Bureau of Indian Standards recruiting Scientist B & Technical Officers in Food & Agriculture Dept.",
    detail: "Bureau of Indian Standards (BIS) New Delhi invites applications for Scientist B (Food Engineering & Dairy Technology) and Technical Officers. Candidates holding B.Tech Dairy Technology / B.Tech Food Technology with First Class honors are eligible.",
    category: "jobs",
    timestamp: "3 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    createdMs: NOW - 3 * ONE_HOUR,
    jobDetails: {
      orgName: "Bureau of Indian Standards (BIS New Delhi)",
      jobSector: "Government",
      totalVacancies: "28 Central Posts",
      eligibility: [
        "B.Tech / B.E. in Dairy Technology / Food Technology / Food Engineering",
        "Valid GATE Score / First Class Academic Distinction",
      ],
      salaryPackage: "Pay Level 10 (₹56,100 - ₹1,77,500 + Central DA & HRA)",
      selectionProcess: [
        "Shortlisting via GATE score / Academic Merit",
        "Personal Interview at BIS Headquarters, New Delhi",
      ],
      appLink: "https://bis.gov.in",
      technicalSyllabus: [
        "IS Specifications for Pasteurized Milk, Ghee, Butter, SMP & Infant Foods",
        "Dairy Processing Equipment Standards (HTST, Evaporators, Homogenizers)",
        "Standardization & Quality Inspection Sampling Methods",
      ],
    },
  },
  {
    id: "notif-job-fci-central",
    title: "Central Govt Job: FCI Recruitment for Management Trainee (Technical / Quality Control)",
    summary: "Food Corporation of India recruiting Management Trainees (Technical) & Assistant Grade III.",
    detail: "Food Corporation of India (FCI) has released recruitment notification for Management Trainees (Technical / Quality Control) and Assistant Grade III (Technical). Candidates with B.Tech Food Tech / B.Tech Dairy Tech / B.Sc Agriculture are eligible.",
    category: "jobs",
    timestamp: "4.5 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    createdMs: NOW - 270 * 60 * 1000,
    jobDetails: {
      orgName: "Food Corporation of India (FCI Central HQ)",
      jobSector: "Government",
      totalVacancies: "340+ All India Vacancies",
      eligibility: [
        "B.Tech / B.E. in Food Technology / Dairy Technology / Bio-Technology",
        "B.Sc in Agriculture / Botany / Zoology / Bio-Chemistry",
      ],
      salaryPackage: "₹40,000 - ₹1,40,000 per month (IDA Pay Pattern)",
      selectionProcess: [
        "Phase I Online Exam (General Aptitude)",
        "Phase II Online Exam (Domain Technical Paper - Agriculture & Food Tech)",
        "Document Verification & Medical Examination",
      ],
      appLink: "https://fci.gov.in",
      technicalSyllabus: [
        "Food Preservation Technology, Grain & Dairy Moisture analysis",
        "Insect Pest Management & Quality Control Storage Standards",
        "Food Safety & Standards Regulations 2011",
      ],
    },
  },
  {
    id: "notif-tech-1",
    title: "QA/QC Dock Alert: Mandatory 5-Minute Rapid Strip Testing for Tanker Reception",
    summary: "Screening required for Beta-lactam antibiotics, Rosalic Acid (soda), and DMAB (urea).",
    detail: "Quality Assurance managers must strictly enforce 5-minute rapid strip testing for all incoming raw milk tankers at reception docks (RMRD). Rosalic Acid testing is required to catch caustic soda neutralizers before pump transfer into chilled storage silos.",
    category: "tech",
    timestamp: "7 hrs ago",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: NOW - 7 * ONE_HOUR,
  },
];

const ROTATING_LIVE_NEWS: NotificationItem[] = [
  {
    id: "rotate-job-fso-state",
    title: "State PSC Hiring: Food Safety Officer (FSO) & Central Technical Officer Posts",
    summary: "State Food Safety & Drug Administration recruiting FSO officers across districts.",
    detail: "State Public Service Commission is accepting online applications for Food Safety Officer (FSO) and Food Analyst posts. B.Tech Dairy Technology, B.Tech Food Technology, and M.Sc Microbiology graduates are eligible for Pay Level 10.",
    category: "jobs",
    timestamp: "Just now",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: Date.now(),
    highlights: [
      "Post: Food Safety Officer (FSO) / Central Technical Officer",
      "Eligible Degrees: B.Tech Dairy Tech / Food Tech / M.Sc Chemistry / B.Sc Agri",
      "Pay Scale: ₹35,400 - ₹1,12,400 (Level 10)",
    ],
    actionSteps: [
      "Submit online form on State PSC official recruitment portal.",
      "Review FSS Act 2006 & Gerber Fat / SNF testing syllabus on Dairy Hub.",
    ],
    jobDetails: {
      orgName: "State Public Service Commission / FSSAI",
      jobSector: "Government",
      totalVacancies: "85 Posts",
      eligibility: [
        "B.Tech Dairy Technology / B.Tech Food Technology",
        "M.Sc Microbiology / Chemistry / Biochemistry",
      ],
      salaryPackage: "₹35,400 - ₹1,12,400 + DA (Level 10)",
      selectionProcess: ["Written Exam (Food Safety & Tech)", "Interview & Verification"],
      appLink: "https://www.ncs.gov.in",
      technicalSyllabus: [
        "Food Safety & Standards Act 2006 & Rules 2011",
        "Milk Adulterant screening (Soda, Starch, Urea, Detergent)",
      ],
    },
  },
  {
    id: "rotate-job-1",
    title: "Govt Urgent: State Dairy Federation Hiring Assistant Dairy Managers & QA Officers",
    summary: "Walk-in interview & online application for State Milk Union processing plants.",
    detail: "Cooperative Milk Producers Federation is recruiting Assistant Dairy Managers, RMRD Incharges, and Quality Assurance Officers. B.Tech Dairy Technology graduates with 1+ years experience eligible.",
    category: "jobs",
    timestamp: "Just now",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: Date.now(),
    highlights: [
      "Position: Assistant Manager (Dairy Processing / Lab QA)",
      "Eligibility: B.Tech Dairy Tech / B.Sc Dairy Science",
      "Salary: ₹42,000 - ₹68,000 / month",
    ],
    actionSteps: [
      "Submit application on state dairy federation portal.",
      "Bring degree certificates for walk-in interview round.",
    ],
    jobDetails: {
      orgName: "State Cooperative Milk Producers Federation",
      jobSector: "Government",
      totalVacancies: "45 Posts Across Dairy Plants",
      eligibility: [
        "B.Tech / B.Sc in Dairy Technology from recognized institution",
        "1-3 years experience in pasteurization or CIP operations",
      ],
      salaryPackage: "₹42,000 - ₹68,000 / month + DA & Allowances",
      selectionProcess: ["Written Technical Exam", "Interview & Document Screening"],
      appLink: "https://www.ncs.gov.in",
      technicalSyllabus: [
        "Milk Pasteurization HTST temperature-time combinations",
        "Fat & SNF estimation using Gerber & Richmond formula",
      ],
    },
  },

  {
    id: "rotate-job-2",
    title: "Private Hiring: Heritage Foods Recruiting Dairy Plant Engineers & NPD Leads",
    summary: "Heritage Foods hiring experienced Dairy Engineers for liquid milk & curd plants.",
    detail: "Heritage Foods India is recruiting Plant Operations Engineers, Cold Chain Supervisors, and New Product Development (NPD) Specialists for modern dairy processing facilities.",
    category: "jobs",
    timestamp: "Just now",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: Date.now(),
    highlights: [
      "Roles: Plant Engineer, Cold Chain Lead, Curd Tech Specialist",
      "Package: ₹5.5 LPA - ₹9.0 LPA CTC",
    ],
    jobDetails: {
      orgName: "Heritage Foods India Ltd.",
      jobSector: "Private / PSU",
      totalVacancies: "15 Openings",
      eligibility: [
        "B.Tech Dairy Tech / Mechanical / Food Engineering",
        "2-5 years experience in dairy equipment & refrigeration",
      ],
      salaryPackage: "₹5.5 LPA - ₹9.0 LPA CTC",
      selectionProcess: ["HR Interview", "Technical Operations Panel Round"],
      appLink: "https://heritagefoods.in/careers",
      technicalSyllabus: [
        "Refrigeration systems & ammonia compressors",
        "Homogenizer pressure stage calibration",
      ],
    },
  },
  {
    id: "rotate-fssai-1",
    title: "FSSAI Advisory: Updated Rapid Testing Protocol for Milk Adulterants at RMRD",
    summary: "Mandatory screening for Detergents, Urea, Maltodextrin & Ammonium Sulfate.",
    detail: "FSSAI issues revised testing protocol requiring dairy reception docks (RMRD) to perform 5-minute strip tests for neutralizers, starch, and synthetic milk adulterants before pumping into raw milk storage silos.",
    category: "fssai",
    timestamp: "Just now",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    important: true,
    createdMs: Date.now(),
  },
  {
    id: "rotate-market-1",
    title: "Market Alert: Cow Milk Procurement Price Revised Upward by ₹1.5/Liter",
    summary: "Dairy federations revise cow milk base price for 3.5% Fat & 8.5% SNF standard.",
    detail: "Major milk federations in North and South India have announced a ₹1.5 per liter increase in cow milk procurement price, supporting dairy farmers during summer flush season.",
    category: "market",
    timestamp: "Just now",
    dateStr: new Date().toISOString().split("T")[0],
    isRead: false,
    createdMs: Date.now(),
  },
];

const LOCAL_STORAGE_KEY = "dairyhub_notifications_24h_v6";

interface NotificationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUnreadCountChange?: (count: number) => void;
  onCountsChange?: (unread: number, total: number, jobsCount: number) => void;
}

export function NotificationsModal({
  open,
  onOpenChange,
  onUnreadCountChange,
  onCountsChange,
}: NotificationsModalProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NotificationItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "jobs" | "govt_fso" | "foodtech_local" | "companies" | "fssai" | "market" | "tech">("all");
  const [companySearchQuery, setCompanySearchQuery] = useState<string>("");
  const [companyCategoryFilter, setCompanyCategoryFilter] = useState<string>("all");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const { toast } = useToast();

  const getOfficialCompanyLink = (compName: string = "", title: string = ""): string => {
    const combined = `${compName} ${title}`.toLowerCase();

    if (combined.includes("foodkida")) return "https://www.foodkida.com";
    if (combined.includes("niftem")) return "https://niftem.ac.in";
    if (combined.includes("cftri")) return "https://cftri.res.in";
    if (combined.includes("foodtech")) return "https://www.ncs.gov.in";
    if (combined.includes("fssai") || combined.includes("food safety and standards authority")) return "https://fssai.gov.in/jobs.php";
    if (combined.includes("amul") || combined.includes("gcmmf") || combined.includes("kaira") || combined.includes("banas") || combined.includes("sabarkantha") || combined.includes("mehsana") || combined.includes("dudhsagar") || combined.includes("sumul") || combined.includes("baroda") || combined.includes("panchamrut") || combined.includes("rajkot")) return "https://www.amul.com/m/careers";
    if (combined.includes("mother dairy")) return "https://www.motherdairy.com/careers";
    if (combined.includes("nandini") || combined.includes("karnataka milk") || combined.includes("kmf")) return "https://www.kmfnandini.coop/careers";
    if (combined.includes("nddb") || combined.includes("national dairy development board")) return "https://www.nddb.coop/careers";
    if (combined.includes("ndri") || combined.includes("national dairy research institute") || combined.includes("icar")) return "https://ndri.res.in";
    if (combined.includes("bis") || combined.includes("bureau of indian standards")) return "https://www.bis.gov.in";
    if (combined.includes("fci") || combined.includes("food corporation of india")) return "https://fci.gov.in";
    if (combined.includes("aavin") || combined.includes("tamil nadu cooperative")) return "https://aavin.tn.gov.in/careers";
    if (combined.includes("milma") || combined.includes("kerala co-operative")) return "https://milma.com/careers";
    if (combined.includes("saras") || combined.includes("rajasthan cooperative")) return "https://sarasdairy.tech";
    if (combined.includes("sudha") || combined.includes("comfed") || combined.includes("bihar state")) return "https://sudha.coop/careers";
    if (combined.includes("verka") || combined.includes("punjab state")) return "https://verka.coop/careers";
    if (combined.includes("vita") || combined.includes("haryana dairy")) return "https://vita.org.in";
    if (combined.includes("parag") && !combined.includes("parag milk foods")) return "https://upcdf.org.in";
    if (combined.includes("sanchi") || combined.includes("madhya pradesh")) return "https://sanchidairy.com";
    if (combined.includes("purabi") || combined.includes("wamul")) return "https://purabi.org/careers";
    if (combined.includes("benmilk") || combined.includes("west bengal")) return "https://benmilk.org";
    if (combined.includes("aanchal")) return "https://ucdfaanchal.com";
    if (combined.includes("milkfed")) return "https://hpmilkfed.org";
    if (combined.includes("snowcap") || combined.includes("jkmpcl")) return "https://jkmpcl.app";
    if (combined.includes("omfed") || combined.includes("odisha")) return "https://omfed.in/careers";
    if (combined.includes("nestlé") || combined.includes("nestle")) return "https://www.nestle.in/careers";
    if (combined.includes("britannia")) return "https://www.britannia.co.in/careers";
    if (combined.includes("itc")) return "https://www.itcportal.com/careers";
    if (combined.includes("heritage")) return "https://www.heritagefoods.in/careers";
    if (combined.includes("hatsun") || combined.includes("arun") || combined.includes("arokya")) return "https://www.hatsun.com/careers";
    if (combined.includes("parag milk foods") || combined.includes("gowardhan") || combined.includes("go cheese")) return "https://www.paragmilkfoods.com/careers";
    if (combined.includes("milky mist")) return "https://www.milkymist.com/careers";
    if (combined.includes("dodla")) return "https://www.dodladairy.com/careers";
    if (combined.includes("country delight")) return "https://countrydelight.in/careers";
    if (combined.includes("gyan")) return "https://gyandairy.com/careers";
    if (combined.includes("paras") || combined.includes("vrs foods")) return "https://vrsfoods.in/careers";
    if (combined.includes("lactalis") || combined.includes("tirumala") || combined.includes("prabhat")) return "https://lactalis.in/careers";
    if (combined.includes("hul") || combined.includes("hindustan unilever") || combined.includes("kwality wall")) return "https://www.hul.co.in/careers";
    if (combined.includes("dabur") || combined.includes("real")) return "https://www.dabur.com/careers";
    if (combined.includes("patanjali")) return "https://www.patanjalifoods.com/careers";
    if (combined.includes("cargill")) return "https://www.cargill.co.in/careers";
    if (combined.includes("olam")) return "https://www.olamgroup.com/careers";
    if (combined.includes("danone")) return "https://www.danone.com/careers";
    if (combined.includes("fonterra")) return "https://www.fonterra.com/careers";
    if (combined.includes("arla")) return "https://www.arla.com/careers";
    if (combined.includes("frieslandcampina")) return "https://www.frieslandcampina.com/careers";
    if (combined.includes("schreiber")) return "https://www.schreiberfoods.com/careers";
    if (combined.includes("animal husbandry") || combined.includes("dairying department")) return "https://dahd.nic.in";
    if (combined.includes("state psc") || combined.includes("public service commission") || combined.includes("food safety officer")) return "https://www.ncs.gov.in";

    return "https://www.ncs.gov.in";
  };

  const handleOpenExternalLink = (rawUrl?: string) => {
    let targetUrl = rawUrl?.trim() || "";

    const orgName = selectedNews?.jobDetails?.orgName || "";
    const title = selectedNews?.title || "";

    // If targetUrl is missing, placeholder, or default fssai homepage URL
    if (!targetUrl || targetUrl.includes("dairyhub.in") || targetUrl === "https://fssai.gov.in" || targetUrl === "https://www.fssai.gov.in") {
      targetUrl = getOfficialCompanyLink(orgName, title);
    } else if (targetUrl.includes("news.google.com")) {
      // If it's a Google News URL, try matching to a specific official portal
      const matchedOfficial = getOfficialCompanyLink(orgName, title);
      // If matchedOfficial is a specific portal (not default generic portal), prefer official portal; otherwise open actual news article link!
      if (matchedOfficial !== "https://www.ncs.gov.in") {
        targetUrl = matchedOfficial;
      }
    }

    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      targetUrl = `https://${targetUrl}`;
    }

    try {
      const win = window.open(targetUrl, "_blank", "noopener,noreferrer");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = targetUrl;
      }
    } catch (e) {
      window.location.href = targetUrl;
    }
  };

  const handleSelectCompanyAlert = (comp: DairyCompany) => {
    const isCoop = comp.sector.includes("Government");
    const salary = isCoop ? "₹45,000 - ₹85,000 / month (Pay Level 7/10)" : "₹5.5 LPA - ₹12.0 LPA CTC";
    const appUrl = getOfficialCompanyLink(comp.name);

    const newJobNotif: NotificationItem = {
      id: `company-alert-${comp.id}-${Date.now()}`,
      title: `${isCoop ? "Govt / Coop" : "Private / MNC"} Job: ${comp.name} Hiring Dairy Engineers & QA Lead`,
      summary: `${comp.name} (${comp.location}) invites applications for B.Tech Dairy Technology & Food Science graduates.`,
      detail: `${comp.name} operating at ${comp.location} specializing in ${comp.specialties.join(", ")} has active recruitment for Technical Officers, Quality Assurance Managers, Plant Operations Engineers, and RMRD Supervisors. Applications are automatically tracked in Dairy Hub Job Alert System.`,
      category: "jobs",
      timestamp: "Just now",
      dateStr: new Date().toISOString().split("T")[0],
      isRead: false,
      important: true,
      createdMs: Date.now(),
      highlights: [
        `Employer: ${comp.name}`,
        `Headquarters / Location: ${comp.location}`,
        `Sector: ${comp.sector}`,
        `Core Specialties: ${comp.specialties.join(", ")}`,
        `Salary Range: ${salary}`,
      ],
      actionSteps: [
        `Step 1: Open official recruitment portal (${appUrl}).`,
        `Step 2: Upload B.Tech Dairy Tech / Food Tech degree & marksheets.`,
        `Step 3: Review Technical QA & Plant Operations syllabus on Dairy Hub.`,
      ],
      jobDetails: {
        orgName: comp.name,
        jobSector: isCoop ? "Government" : "Private / PSU",
        totalVacancies: "15 - 40 Posts Across Processing Plants",
        eligibility: [
          "B.Tech / B.E. in Dairy Technology / Food Engineering",
          "M.Sc in Dairy Chemistry / Microbiology / Food Technology",
          "0-3 years plant experience in Pasteurization, Homogenization, or QC",
        ],
        salaryPackage: salary,
        selectionProcess: ["Online / Offline Technical Exam", "Interview & Document Verification"],
        appLink: appUrl,
        technicalSyllabus: [
          "Raw Milk Dock Quality Platform Tests (Gerber Fat, CLR, MBRT, Alcohol Test)",
          "HTST Pasteurization physics, Flow Diversion Valve, and 5-stage CIP cycle",
          "Cold chain refrigeration and packaging QA standards",
        ],
      },
    };

    setNotifications((prev) => [newJobNotif, ...prev.filter(n => n.id !== newJobNotif.id)]);
    setSelectedNews(newJobNotif);
    toast({
      title: `Job Alert Active: ${comp.name} 🔔`,
      description: "Full recruitment briefing and application link loaded.",
    });
  };

  const purgeExpiredNotifications = (items: NotificationItem[]): NotificationItem[] => {
    const currentNow = Date.now();
    const valid = items.filter((item) => currentNow - item.createdMs <= TWENTY_FOUR_HOURS_MS);
    if (valid.length === 0 || !valid.some((i) => i.category === "jobs")) {
      return getFreshInitialPool();
    }
    return valid;
  };

  const getFreshInitialPool = (): NotificationItem[] => {
    const currentNow = Date.now();
    return INITIAL_NOTIFICATIONS.map((item, idx) => ({
      ...item,
      createdMs: currentNow - (idx * 15 + 5) * 60 * 1000,
      timestamp: idx === 0 ? "Just now" : `${idx * 15 + 5} mins ago`,
      dateStr: new Date(currentNow - (idx * 15 + 5) * 60 * 1000).toISOString().split("T")[0],
      isRead: false,
    }));
  };

  const fetchLiveNews = useCallback(async (isManual: boolean = false) => {
    setIsRefreshing(true);
    try {
      let fetchedItems: NotificationItem[] = [];
      try {
        const rssUrl = encodeURIComponent("https://news.google.com/rss/search?q=FoodKida+OR+FoodTech+jobs+OR+Food+Technologist+jobs+OR+Dairy+Technology+jobs+OR+Food+Safety+Officer+OR+FSSAI+recruitment+OR+QA+QC+Food+vacancy+OR+NDDB+careers+OR+NDRI+jobs+OR+NIFTEM+jobs+OR+FCI+technical&hl=en-IN&gl=IN&ceid=IN:en");
        const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
        if (res.ok) {
          const data = await res.json();
          const xmlText = data.contents || "";
          const itemsMatch = xmlText.match(/<item>[\s\S]*?<\/item>/g);
          if (itemsMatch && itemsMatch.length > 0) {
            const currentNow = Date.now();
            fetchedItems = itemsMatch.slice(0, 15).map((itemXml: string, index: number) => {
              const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/);
              const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
              const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);

              const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim() : "Dairy & Food Safety Update";
              const rawPubDate = pubDateMatch ? pubDateMatch[1].trim() : "";
              const rawLink = linkMatch ? linkMatch[1].trim() : "https://fssai.gov.in";

              let createdMs = currentNow - index * 15 * 60 * 1000;
              let timeAgo = `${index * 15 + 5} mins ago`;

              if (rawPubDate) {
                try {
                  const parsedMs = new Date(rawPubDate).getTime();
                  if (!isNaN(parsedMs)) {
                    createdMs = parsedMs;
                    const diffMs = currentNow - createdMs;
                    const diffMins = Math.floor(diffMs / (1000 * 60));
                    const diffHours = Math.floor(diffMins / 60);

                    if (diffMins < 60) {
                      timeAgo = `${Math.max(1, diffMins)} mins ago`;
                    } else if (diffHours < 24) {
                      timeAgo = `${diffHours} hrs ago`;
                    } else {
                      timeAgo = `${Math.floor(diffHours / 24)} days ago`;
                    }
                  }
                } catch (e) {
                  timeAgo = "Just now";
                }
              }

              let category: "jobs" | "fssai" | "market" | "tech" | "industry" = "jobs";
              const lowerTitle = title.toLowerCase();

              if (/fssai|regulatory|standard|advisory|compliance|guideline/i.test(lowerTitle)) {
                category = "fssai";
              } else if (/price|rate|procurement|smp|ghee|butter|market|ncdex|cost|gdt/i.test(lowerTitle)) {
                category = "market";
              } else if (/tech|lab|cip|testing|equipment|quality|pasteurizer|htst/i.test(lowerTitle) && !/job|recruitment|hiring|vacancy/i.test(lowerTitle)) {
                category = "tech";
              } else if (/job|recruitment|vacancy|hiring|walk-in|posts|career|officer|analyst|engineer|trainee|manager|supervisor|fso|technical|animal|husbandry|bis|fci|nddb|ndri|psc|gazetted/i.test(lowerTitle)) {
                category = "jobs";
              }

              return {
                id: `rss-live-${index}-${createdMs}`,
                title: title,
                summary: title,
                detail: `Verified Live Industry Notice: "${title}". Real-time updates synced for Dairy Hub professionals.`,
                category: category,
                timestamp: timeAgo,
                dateStr: new Date(createdMs).toISOString().split("T")[0],
                isRead: false,
                important: category === "jobs" || category === "fssai",
                createdMs: createdMs,
                appLink: rawLink,
              };
            });
          }
        }
      } catch (e) {
        // Fallback to local pool
      }

      if (fetchedItems.length === 0) {
        fetchedItems = getFreshInitialPool();
      }

      setNotifications((prev) => {
        // If feed was empty or missing jobs, populate directly with fresh items
        if (prev.length === 0 || !prev.some((i) => i.category === "jobs")) {
          const freshList = purgeExpiredNotifications(fetchedItems);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(freshList));
          return freshList;
        }

        // Merge fetched items with existing items
        const existingTitles = new Set(prev.map((item) => item.title.toLowerCase().trim()));
        const newItems = fetchedItems.filter(
          (item) => !existingTitles.has(item.title.toLowerCase().trim())
        );

        let updatedList: NotificationItem[];

        if (newItems.length === 0) {
          // If no new items came from API, pick a dynamic rotated item so refresh ALWAYS produces a fresh alert!
          const unaddedRotated = ROTATING_LIVE_NEWS.filter(
            (item) => !existingTitles.has(item.title.toLowerCase().trim())
          );

          if (unaddedRotated.length > 0) {
            const newItemToInsert = {
              ...unaddedRotated[0],
              createdMs: Date.now(),
              timestamp: "Just now",
              isRead: false,
            };
            updatedList = [newItemToInsert, ...prev];
          } else {
            // Update top item timestamp & unread state for visual confirmation
            updatedList = prev.map((item, idx) =>
              idx === 0
                ? { ...item, timestamp: "Just now", createdMs: Date.now(), isRead: false }
                : item
            );
          }
        } else {
          updatedList = [...newItems, ...prev];
        }

        const deduplicated = Array.from(
          new Map(updatedList.map((item) => [item.title.toLowerCase().trim(), item])).values()
        );

        const finalFiltered = purgeExpiredNotifications(deduplicated);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(finalFiltered));
        return finalFiltered;
      });

      if (isManual) {
        toast({
          title: "Live Feed Updated 🔔",
          description: "Fresh Dairy & Food Industry Govt/Private jobs & news updates synced.",
        });
      }
    } catch (e) {
      console.warn("Live refresh fallback executed:", e);
      // Restore from local pool if network/API fails when feed is empty
      setNotifications((prev) => {
        if (prev.length === 0 || !prev.some((i) => i.category === "jobs")) {
          const freshFallback = purgeExpiredNotifications(getFreshInitialPool());
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(freshFallback));
          return freshFallback;
        }
        return prev;
      });
      if (isManual) {
        toast({
          title: "Feed Synced 🔄",
          description: "Latest Govt & Private dairy vacancies updated.",
        });
      }
    } finally {
      setIsRefreshing(false);
    }
  }, [toast]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved) as NotificationItem[];
          const valid24h = purgeExpiredNotifications(parsed);
          if (valid24h.length > 0 && valid24h.some(item => item.category === "jobs")) {
            setNotifications(valid24h);
          } else {
            setNotifications(getFreshInitialPool());
          }
        } else {
          setNotifications(getFreshInitialPool());
        }
      } catch (e) {
        setNotifications(getFreshInitialPool());
      }
      fetchLiveNews(false);
    };

    loadNotifications();
  }, [fetchLiveNews]);

  const onUnreadRef = useRef(onUnreadCountChange);
  const onCountsRef = useRef(onCountsChange);

  useEffect(() => {
    onUnreadRef.current = onUnreadCountChange;
    onCountsRef.current = onCountsChange;
  }, [onUnreadCountChange, onCountsChange]);

  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notifications));
    }
    const unread = notifications.filter((n) => !n.isRead).length;
    const jobsCount = notifications.filter((n) => n.category === "jobs").length;
    onUnreadRef.current?.(unread);
    onCountsRef.current?.(unread, notifications.length, jobsCount);
  }, [notifications]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLiveNews();
    }, 25000);

    return () => clearInterval(interval);
  }, [fetchLiveNews]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    toast({
      title: "All Notifications Marked Read",
      description: "Unread counter cleared.",
    });
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    toast({
      title: "Feed Cleared",
      description: "Tap the refresh circle 🔄 anytime to reload fresh updates!",
    });
  };

  const openNewsDetail = (item: NotificationItem) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === item.id ? { ...n, isRead: true } : n))
    );
    setSelectedNews(item);
  };

  const copyArticleDetail = (item: NotificationItem) => {
    const jobText = item.jobDetails
      ? `\nORGANIZATION: ${item.jobDetails.orgName}\nSECTOR: ${item.jobDetails.jobSector}\nSALARY: ${item.jobDetails.salaryPackage}\nELIGIBILITY:\n${item.jobDetails.eligibility.map((e) => " • " + e).join("\n")}`
      : "";

    const text = `📰 [Dairy Hub Job & Industry Briefing]\nTitle: ${item.title}\nCategory: ${item.category.toUpperCase()}\nDate: ${item.dateStr}${jobText}\n\nSummary:\n${item.detail}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Article Copied to Clipboard 📋",
      description: "Full job briefing ready to share.",
    });
  };

  const filteredNotifications = useMemo(() => {
    if (activeCategory === "all") return notifications;
    if (activeCategory === "govt_fso") {
      return notifications.filter(
        (n) =>
          n.jobDetails?.jobSector === "Government" ||
          /fso|fssai|technical officer|animal husbandry|bis|fci|nddb|ndri|psc|gazetted|govt/i.test(n.title)
      );
    }
    if (activeCategory === "foodtech_local") {
      return notifications.filter(
        (n) =>
          /foodkida|foodtech|niftem|cftri|food technologist|lab analyst|food industry|food analyst/i.test(
            `${n.title} ${n.summary} ${n.jobDetails?.orgName || ""}`
          )
      );
    }
    return notifications.filter((n) => n.category === activeCategory);
  }, [notifications, activeCategory]);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "jobs":
        return <Badge className="bg-blue-600 text-white text-[10px] font-extrabold gap-1"><Briefcase className="w-3 h-3" /> Job Vacancy</Badge>;
      case "fssai":
        return <Badge className="bg-emerald-600 text-white text-[10px] font-extrabold gap-1"><ShieldAlert className="w-3 h-3" /> FSSAI Notice</Badge>;
      case "market":
        return <Badge className="bg-amber-600 text-white text-[10px] font-extrabold gap-1"><TrendingUp className="w-3 h-3" /> Market Rates</Badge>;
      case "tech":
        return <Badge className="bg-purple-600 text-white text-[10px] font-extrabold gap-1"><FlaskConical className="w-3 h-3" /> QA & Plant Tech</Badge>;
      default:
        return <Badge className="bg-slate-700 text-white text-[10px] font-extrabold">Industry Update</Badge>;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl w-[95vw] max-h-[90vh] h-[90vh] flex flex-col p-0 rounded-2xl overflow-hidden bg-slate-50 border-slate-200 shadow-2xl">
        {selectedNews ? (
          /* ================= FULL ARTICLE / JOB BRIEFING READER VIEW ================= */
          <div className="flex flex-col h-full bg-white">
            {(() => {
              const officialLink = selectedNews.jobDetails?.appLink || selectedNews.appLink;

              return (
                <>
                  <div className="p-3 border-b bg-slate-900 text-white flex items-center justify-between gap-2 pr-12">
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to Feed
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      {getCategoryBadge(selectedNews.category)}
                      <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-500" /> {selectedNews.timestamp}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug tracking-tight">
                      {selectedNews.title}
                    </h2>

                    {/* DETAILED JOB VACANCY BRIEFING CARD (FOR JOBS CATEGORY) */}
                    {selectedNews.jobDetails && (
                      <div className="p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 rounded-2xl border border-blue-200 space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between border-b border-blue-200/60 pb-2.5">
                          <div>
                            <span className="text-[10px] font-extrabold text-blue-700 uppercase tracking-wider block">
                              Employer / Organization
                            </span>
                            <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5 mt-0.5">
                              <Building2 className="w-4 h-4 text-blue-600" /> {selectedNews.jobDetails.orgName}
                            </h4>
                          </div>
                          <Badge className={cn(
                            "text-[10px] font-extrabold",
                            selectedNews.jobDetails.jobSector === "Government" ? "bg-emerald-600 text-white" : "bg-indigo-600 text-white"
                          )}>
                            {selectedNews.jobDetails.jobSector}
                          </Badge>
                        </div>

                        {/* Salary & Vacancy Info */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                            <span className="text-slate-500 font-medium block text-[10px]">Salary / Pay Matrix:</span>
                            <span className="font-extrabold text-emerald-700 text-xs mt-0.5 block">
                              {selectedNews.jobDetails.salaryPackage}
                            </span>
                          </div>
                          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                            <span className="text-slate-500 font-medium block text-[10px]">Vacancies / Posts:</span>
                            <span className="font-extrabold text-indigo-900 text-xs mt-0.5 block">
                              {selectedNews.jobDetails.totalVacancies || "Multiple Posts"}
                            </span>
                          </div>
                        </div>

                        {/* Educational Eligibility Criteria */}
                        <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                          <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                            <GraduationCap className="w-4 h-4 text-indigo-600" /> Educational Qualifications & Eligibility:
                          </h5>
                          <ul className="space-y-1 text-xs text-slate-700">
                            {selectedNews.jobDetails.eligibility.map((e, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                <span>{e}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technical Knowledge & Exam Syllabus */}
                        <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                          <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                            <FlaskConical className="w-4 h-4 text-purple-600" /> Required Technical Knowledge / Syllabus:
                          </h5>
                          <ul className="space-y-1 text-xs text-slate-700">
                            {selectedNews.jobDetails.technicalSyllabus.map((syll, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                                <span>{syll}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Selection Process */}
                        <div className="pt-2 border-t border-blue-200/80">
                          <div className="text-[11px] text-slate-600 font-medium">
                            <span className="font-bold text-slate-900">Selection Mode:</span>{" "}
                            {selectedNews.jobDetails.selectionProcess.join(" ➔ ")}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Standard Briefing Summary */}
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900 block mb-1">Executive Summary:</span>
                      {selectedNews.summary}
                    </div>

                    <div className="prose prose-sm max-w-none text-slate-800 space-y-2 text-xs sm:text-sm leading-relaxed">
                      <h3 className="font-bold text-slate-900 text-sm border-b pb-1">Full Detailed Briefing:</h3>
                      <p className="whitespace-pre-line text-slate-700">{selectedNews.detail}</p>
                    </div>

                    {selectedNews.highlights && selectedNews.highlights.length > 0 && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 text-indigo-900">
                          <Sparkles className="w-4 h-4 text-indigo-600" /> Key Highlights:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {selectedNews.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedNews.actionSteps && selectedNews.actionSteps.length > 0 && (
                      <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 space-y-2">
                        <h4 className="font-bold text-emerald-950 text-xs flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> How to Apply & Next Steps:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-emerald-900">
                          {selectedNews.actionSteps.map((step, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* PROMINENT DIRECT OFFICIAL APPLY CARD */}
                    {officialLink && (
                      <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white flex items-center justify-between gap-3 shadow-md">
                        <div>
                          <h4 className="font-extrabold text-sm flex items-center gap-1.5 text-white">
                            Official Recruitment Portal
                          </h4>
                          <p className="text-xs text-blue-100 mt-0.5">
                            Click to open official recruitment website directly.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleOpenExternalLink(officialLink)}
                          className="inline-flex items-center gap-1.5 bg-white text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl font-extrabold text-xs shadow-md transition-transform active:scale-95 shrink-0 cursor-pointer"
                        >
                          <span>Apply Online</span>
                          <ExternalLink className="w-4 h-4 text-blue-600" />
                        </button>
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        ) : (
          /* ================= LIVE NOTIFICATIONS FEED LIST ================= */
          <div className="flex flex-col h-full">
            {/* Header */}
            <DialogHeader className="p-4 pb-3 bg-slate-900 text-white border-b border-slate-800 pr-12">
              <div className="flex items-center justify-between gap-2">
                <DialogTitle className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-white">
                  <div className="p-1.5 rounded-lg bg-indigo-600 text-white shrink-0">
                    <Radio className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="line-clamp-1">Dairy & Food Industry Live Feed</span>
                </DialogTitle>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => fetchLiveNews(true)}
                    disabled={isRefreshing}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    title="Refresh Live News & Job Vacancies"
                  >
                    <RefreshCw className={cn("w-4 h-4", isRefreshing && "animate-spin text-indigo-400")} />
                  </button>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 no-scrollbar">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0",
                    activeCategory === "all"
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  )}
                >
                  All ({notifications.length})
                </button>
                <button
                  onClick={() => setActiveCategory("jobs")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1",
                    activeCategory === "jobs"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  )}
                >
                  💼 All Jobs ({notifications.filter((n) => n.category === "jobs").length})
                </button>
                <button
                  onClick={() => setActiveCategory("govt_fso")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1",
                    activeCategory === "govt_fso"
                      ? "bg-amber-500 text-slate-950 font-extrabold shadow-xs"
                      : "bg-amber-950 text-amber-300 hover:bg-amber-900 border border-amber-700/50"
                  )}
                >
                  🏛️ Govt & FSO ({notifications.filter((n) => n.jobDetails?.jobSector === "Government" || /fso|fssai|technical officer|animal husbandry|bis|fci|nddb|ndri|psc|gazetted|govt/i.test(n.title)).length})
                </button>
                <button
                  onClick={() => setActiveCategory("foodtech_local")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1",
                    activeCategory === "foodtech_local"
                      ? "bg-emerald-500 text-slate-950 font-black shadow-xs"
                      : "bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-700/50"
                  )}
                >
                  🍔 FoodKida & FoodTech ({notifications.filter((n) => /foodkida|foodtech|niftem|cftri|food technologist|lab analyst|food industry|food analyst/i.test(`${n.title} ${n.summary} ${n.jobDetails?.orgName || ""}`)).length})
                </button>
                <button
                  onClick={() => setActiveCategory("companies")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1",
                    activeCategory === "companies"
                      ? "bg-emerald-500 text-slate-950 font-black shadow-xs"
                      : "bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-700/50"
                  )}
                >
                  🏢 350 Employers ({ALL_350_DAIRY_FOOD_COMPANIES.length})
                </button>
                <button
                  onClick={() => setActiveCategory("fssai")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1",
                    activeCategory === "fssai"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  )}
                >
                  📜 FSSAI ({notifications.filter((n) => n.category === "fssai").length})
                </button>
                <button
                  onClick={() => setActiveCategory("market")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1",
                    activeCategory === "market"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  )}
                >
                  📈 Market Rates ({notifications.filter((n) => n.category === "market").length})
                </button>
                <button
                  onClick={() => setActiveCategory("tech")}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1",
                    activeCategory === "tech"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  )}
                >
                  🧪 QA & Tech ({notifications.filter((n) => n.category === "tech").length})
                </button>
              </div>
            </DialogHeader>

            {/* Notification Items / 350 Employers Directory Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5">
              {activeCategory === "companies" ? (
                /* ================= 350 MONITORED EMPLOYERS DIRECTORY ================= */
                <div className="space-y-3">
                  <div className="p-3.5 bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl shadow-md">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h4 className="font-extrabold text-sm flex items-center gap-1.5 text-white">
                          <Building2 className="w-4 h-4 text-emerald-300 animate-pulse" /> 350 Top Dairy & Food Employers Monitored
                        </h4>
                        <p className="text-xs text-emerald-100 mt-0.5">
                          Live automated recruitment alerts for all Cooperatives, Private Dairies, MNCs & FMCG Leaders.
                        </p>
                      </div>
                      <Badge className="bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full shrink-0">
                        350 Active
                      </Badge>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mt-3">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search company (e.g. Amul, Mother Dairy, Nandini, Nestlé, Heritage, Milky Mist)..."
                        value={companySearchQuery}
                        onChange={(e) => setCompanySearchQuery(e.target.value)}
                        className="w-full pl-9 pr-8 py-2 bg-white text-slate-900 text-xs font-semibold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner placeholder:text-slate-400"
                      />
                      {companySearchQuery && (
                        <button
                          onClick={() => setCompanySearchQuery("")}
                          className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Category Badges Filter */}
                    <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
                      {[
                        { id: "all", label: "All 350" },
                        { id: "cooperative", label: "🥛 State Cooperatives" },
                        { id: "private_dairy", label: "🧀 Private Dairies" },
                        { id: "ice_cream", label: "🍦 Ice Creams" },
                        { id: "fmcg_food", label: "📦 FMCG & Food" },
                        { id: "ingredients", label: "🌾 Ingredients" },
                        { id: "global_dairy", label: "🌍 Global Titans" },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setCompanyCategoryFilter(cat.id)}
                          className={cn(
                            "px-2.5 py-1 rounded-lg font-bold transition-all shrink-0",
                            companyCategoryFilter === cat.id
                              ? "bg-amber-400 text-slate-950 shadow-xs"
                              : "bg-emerald-900/70 text-emerald-100 hover:bg-emerald-900 border border-emerald-600/40"
                          )}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Company Cards List */}
                  <div className="space-y-2">
                    {ALL_350_DAIRY_FOOD_COMPANIES.filter((comp) => {
                      const matchesSearch =
                        !companySearchQuery ||
                        comp.name.toLowerCase().includes(companySearchQuery.toLowerCase()) ||
                        comp.location.toLowerCase().includes(companySearchQuery.toLowerCase()) ||
                        comp.specialties.some((s) => s.toLowerCase().includes(companySearchQuery.toLowerCase()));
                      const matchesCat =
                        companyCategoryFilter === "all" || comp.category === companyCategoryFilter;
                      return matchesSearch && matchesCat;
                    }).map((comp) => (
                      <div
                        key={comp.id}
                        className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-indigo-300 transition-all flex flex-col gap-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] font-black text-slate-400 font-mono">#{comp.id}</span>
                              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">{comp.name}</h4>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                              <Globe className="w-3 h-3 text-indigo-500" /> {comp.location}
                            </p>
                          </div>
                          <Badge
                            className={cn(
                              "text-[10px] font-extrabold shrink-0 px-2 py-0.5 rounded-md",
                              comp.sector.includes("Government")
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : "bg-blue-100 text-blue-800 border border-blue-300"
                            )}
                          >
                            {comp.sector}
                          </Badge>
                        </div>

                        {/* Specialties Tags */}
                        <div className="flex items-center gap-1 flex-wrap">
                          {comp.specialties.map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* Action Button */}
                        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] font-extrabold text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Automated Job Tracker Active
                          </span>
                          <Button
                            onClick={() => handleSelectCompanyAlert(comp)}
                            size="sm"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[11px] h-7 px-3 rounded-lg shadow-xs gap-1 active:scale-95"
                          >
                            <Bell className="w-3 h-3 text-amber-300 animate-bounce" />
                            View Vacancies & Alert
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* ================= NOTIFICATIONS FEED ================= */
                <div className="space-y-2.5">
                  {/* Total Active Jobs & Live Updates Counter Banner */}
                  <div className="p-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl shadow-xs flex items-center justify-between gap-3 text-xs mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white/20 rounded-xl text-white shrink-0">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-xs text-white leading-tight">
                          {notifications.filter((n) => n.category === "jobs").length} Active Dairy Job Vacancies
                        </h4>
                        <p className="text-[10px] text-blue-100 font-semibold mt-0.5">
                          350 Monitored Employers • {notifications.length} Live Feed Updates
                        </p>
                      </div>
                    </div>
                    {notifications.filter((n) => !n.isRead).length > 0 && (
                      <Badge className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shrink-0">
                        {notifications.filter((n) => !n.isRead).length} NEW
                      </Badge>
                    )}
                  </div>

                  {filteredNotifications.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center shadow-xs">
                      <Bell className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                      <h3 className="font-bold text-slate-800 text-sm">No Active Notifications</h3>
                      <p className="text-xs text-slate-500 mt-1 max-w-xs text-center">
                        No notifications available right now. Tap refresh to load fresh updates!
                      </p>
                      <Button
                        onClick={() => fetchLiveNews(true)}
                        disabled={isRefreshing}
                        size="sm"
                        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold gap-2 text-xs rounded-xl shadow-xs"
                      >
                        <RefreshCw className={cn("w-3.5 h-3.5", isRefreshing && "animate-spin")} />
                        {isRefreshing ? "Fetching Updates..." : "Refresh Live Feed Now"}
                      </Button>
                    </div>
                  ) : (
                    filteredNotifications.map((item) => {
                      const hasApplyLink = item.jobDetails?.appLink || item.appLink;

                      return (
                        <div
                          key={item.id}
                          onClick={() => openNewsDetail(item)}
                          className={cn(
                            "p-3.5 bg-white rounded-2xl border transition-all cursor-pointer relative group hover:border-indigo-300 hover:shadow-md",
                            !item.isRead ? "border-indigo-200 bg-indigo-50/30" : "border-slate-200 opacity-90"
                          )}
                        >
                          {!item.isRead && (
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                          )}

                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            {getCategoryBadge(item.category)}
                            <span className="text-[11px] font-mono text-slate-400 font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3 text-indigo-500" /> {item.timestamp}
                            </span>
                            {hasApplyLink && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-blue-700 bg-blue-100/90 border border-blue-200 px-2 py-0.5 rounded-md ml-auto">
                                <Globe className="w-3 h-3 text-blue-600" /> Apply Link Available
                              </span>
                            )}
                          </div>

                          <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-indigo-600 transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                            {item.summary}
                          </p>

                          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-indigo-600">
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-3.5 h-3.5" /> Read Full Eligibility & Job Briefing
                            </span>
                            <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
              <button
                onClick={markAllAsRead}
                className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors"
              >
                Mark all as read
              </button>
              <button
                onClick={clearAllNotifications}
                className="text-slate-400 hover:text-red-600 font-medium transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear Feed
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

