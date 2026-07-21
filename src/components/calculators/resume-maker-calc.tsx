"use client";

import React, { useState, useRef, useMemo } from "react";
import { 
  Printer, Download, FileText, Building2, MapPin, Calendar, 
  Plus, Trash2, CheckCircle, Info, Loader2, FileDown,
  User, Mail, Phone, Globe, Linkedin, Briefcase, GraduationCap,
  Award, Sparkles, FolderKanban, Languages, Layout, Palette,
  Upload, Eye, Edit3, ArrowLeft, RefreshCw,
  ChevronDown, Check, Star, Lightbulb, Zap, CheckSquare, ShieldCheck,
  BookOpen, HelpCircle, Layers, Settings, ChevronRight,
  Target, Copy, Type, FileCode, Sliders, Scissors, AlignLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// ===== TYPES =====

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  photoUrl: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  designation: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  bullets: string[];
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface ResumeData {
  userMode: "student" | "experienced" | "custom";
  personal: PersonalInfo;
  experiences: ExperienceItem[];
  internships: InternshipItem[];
  education: EducationItem[];
  skills: SkillItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  languages: string[];
  declaration: {
    enabled: boolean;
    text: string;
    place: string;
  };
  sectionVisibility: {
    summary: boolean;
    experience: boolean;
    internships: boolean;
    education: boolean;
    skills: boolean;
    certifications: boolean;
    projects: boolean;
    achievements: boolean;
    declaration: boolean;
  };
  customSectionTitles?: Record<string, string>;
}

// Accent Colors List
const ACCENT_COLORS = [
  { name: "Navy Blue", value: "#1e3a8a", class: "bg-blue-900" },
  { name: "Teal Emerald", value: "#047857", class: "bg-emerald-700" },
  { name: "Royal Indigo", value: "#4338ca", class: "bg-indigo-700" },
  { name: "Corporate Slate", value: "#334155", class: "bg-slate-700 font-bold" },
  { name: "Burgundy Maroon", value: "#881337", class: "bg-rose-900" },
  { name: "Dark Chocolate", value: "#451a03", class: "bg-amber-950" }
];

// Pre-written Action Verbs Library
const ACTION_VERBS_LIBRARY = {
  qa_qc: [
    "Standardized", "Calibrated", "Validated", "Audited", "Inspected",
    "Tested", "Enforced", "Certified", "Diagnosed", "Verified"
  ],
  operations: [
    "Pasteurised", "Formulated", "Processed", "Homogenised", "Monitored",
    "Sanitised", "Commissioned", "Maintained", "Automated", "Operated"
  ],
  leadership: [
    "Spearheaded", "Supervised", "Coordinated", "Directed", "Orchestrated",
    "Trained", "Mentored", "Delegated", "Led", "Executed"
  ],
  optimization: [
    "Optimized", "Streamlined", "Reduced", "Accelerated", "Enhanced",
    "Maximized", "Eliminated", "Improved", "Consolidated", "Boosted"
  ]
};

// Common Multi-Industry & Industrial ATS Keywords
const COMMON_DAIRY_ATS_KEYWORDS = [
  "HACCP", "CIP & SIP", "ISO 22000", "FSSAI FoSTaC", "Gerber Fat Test",
  "SNF Testing", "FTIR Milk Analyzer", "HTST Pasteurization", "Homogenizer",
  "Microbiology", "Yield Optimization", "Standardization", "Quality Assurance",
  "QA/QC", "SOP Compliance", "Audit Preparation", "Sanitation Protocols",
  "cGMP Compliance", "Cleanroom Protocols", "HPLC Analysis", "Gas Chromatography",
  "USFDA Norms", "BRCGS Standards", "Batch Manufacturing Record (BMR)",
  "OEE Optimization", "SCADA Control", "Kaizen & 5S", "Lab Equipment Calibration"
];

// Pre-written Bullets Library Across Domains
const BULLET_LIBRARY = {
  qa_qc: [
    "Conducted daily chemical & microbiological testing of raw milk, ingredients, and finished products per FSSAI/BIS/ISO standards.",
    "Operated FTIR Milk Analyzer, Gerber Centrifuge, and spectrophotometers to verify fat, SNF, protein, and purity with 99.8% precision.",
    "Implemented ISO 22000 & HACCP food safety hazard monitoring across raw reception, processing, and packaging lines.",
    "Calibrated laboratory instruments (pH meters, refractometers, lactometers) and maintained audit-ready quality logs.",
    "Executed cleanroom environmental monitoring, swab testing, and microbial pathogen isolation per cGMP norms."
  ],
  processing: [
    "Supervised HTST Pasteurizer and Homogenizer operations at 15,000 LPH flow rate ensuring zero thermal degradation.",
    "Managed Automated CIP (Cleaning-In-Place) and SIP cycles with 1.5% NaOH lye and 0.8% HNO3 acid solutions.",
    "Monitored automated SCADA controls, milk chilling silos (-4°C), and spray dryer evaporators with zero batch deviation.",
    "Optimized product standardization recipes reducing fat and SNF giveaways by 1.2% while maximizing yield."
  ],
  management: [
    "Led a shift team of 15 operators and lab technicians, achieving zero safety incidents and 98% plant OEE uptime.",
    "Reduced daily processing losses from 0.85% to 0.40% through strict valve leak audits and condensate recovery protocols.",
    "Coordinated with regulatory auditors for FSSAI, USFDA, and BRCGS renewal certification with zero major non-conformances.",
    "Prepared daily shift production reports, material mass balance sheets, and utility consumption logs."
  ],
  pharma_bio: [
    "Enforced cGMP (Current Good Manufacturing Practice) compliance across cleanroom Class 100 and formulation areas.",
    "Prepared and reviewed Batch Manufacturing Records (BMR) and Batch Packaging Records (BPR) per regulatory guidelines.",
    "Conducted HPLC and Gas Chromatography (GC) assay testing for raw material release and active ingredient purity.",
    "Managed stability testing chambers and out-of-specification (OOS) investigation reports."
  ]
};

// Multi-Industry Domain Job Role Presets
const JOB_ROLE_PRESETS = [
  { domain: "Dairy", title: "Dairy Production Executive" },
  { domain: "Dairy", title: "Quality Assurance Executive (Dairy)" },
  { domain: "Dairy", title: "Shift Incharge (Dairy Operations)" },
  { domain: "Dairy", title: "QC Lab Chemist & Analyst" },
  { domain: "Dairy", title: "QA/QC Plant Manager" },
  { domain: "Food", title: "Food Technologist" },
  { domain: "Food", title: "Quality Control Officer (FMCG)" },
  { domain: "Food", title: "Beverage Process Executive" },
  { domain: "Food", title: "Hygiene & Sanitation Officer" },
  { domain: "Pharma", title: "Pharma QA Officer" },
  { domain: "Pharma", title: "QC Analyst (HPLC / GC)" },
  { domain: "Pharma", title: "cGMP Compliance Specialist" },
  { domain: "Engineering", title: "Plant Maintenance Executive" },
  { domain: "Engineering", title: "Utility & Boiler Incharge" }
];

// Preset Sample Resumes Across All Domains & Roles
const PRESETS: Record<string, { title: string; subtitle: string; mode: "student" | "experienced"; data: ResumeData }> = {
  student_fresher: {
    title: "🎓 Student / Fresh Graduate (Dairy & Food Tech)",
    subtitle: "Ideal for B.Tech / B.Sc Dairy & Food Tech students & freshers",
    mode: "student",
    data: {
      userMode: "student",
      personal: {
        fullName: "Rohan V. Sharma",
        jobTitle: "Dairy Technology Graduate / Quality Trainee",
        email: "rohan.sharma.dairy@gmail.com",
        phone: "+91 98765 43210",
        location: "Anand, Gujarat, India",
        linkedin: "linkedin.com/in/rohan-sharma-dairy",
        website: "",
        photoUrl: "",
        summary: "Motivated B.Tech Dairy Technology graduate with hands-on practical exposure in raw milk testing, Gerber fat/SNF estimation, pasteurization plants, and HACCP food safety norms. Eager to start a career as QA/QC Executive or Shift Production In-charge."
      },
      experiences: [],
      internships: [
        {
          id: "int-1",
          role: "Industrial Summer Trainee",
          company: "Amul Dairy (Kaira District Co-op Milk Union)",
          location: "Anand, Gujarat",
          duration: "May 2024 - July 2024 (2 Months)",
          bullets: [
            "Assisted in daily quality testing of 200,000+ liters of incoming raw milk at reception dock.",
            "Learned operation of HTST pasteurizer (15,000 LPH), PHE plate heat exchangers, and homogenizer.",
            "Conducted CIP cleaning validation using phenolphthalein titration for NaOH and HNO3 strength."
          ]
        }
      ],
      education: [
        {
          id: "edu-1",
          degree: "B.Tech in Dairy Technology",
          institution: "College of Dairy Science & Technology, Anand Agricultural University",
          year: "2021 - 2025",
          grade: "CGPA: 8.45 / 10"
        }
      ],
      skills: [
        { id: "sk-1", name: "Raw Milk Fat & SNF Testing", level: "Expert" },
        { id: "sk-2", name: "Gerber Fat Method & Lactometer", level: "Advanced" },
        { id: "sk-3", name: "HTST Pasteurizer Operation", level: "Intermediate" },
        { id: "sk-4", name: "CIP & SIP Sanitation Protocols", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "FSSAI FoSTaC Advanced Manufacturing Certification", issuer: "FSSAI India", year: "2024" }
      ],
      projects: [
        {
          id: "proj-1",
          title: "Study of Shelf-Life Extension in Flavored Milk using Herbal Extracts",
          description: "Formulated herbal flavored milk and evaluated sensory, microbiological, and chemical stability over 21 days at 4°C refrigeration."
        }
      ],
      achievements: [
        { id: "ach-1", title: "1st Rank in Inter-College Dairy Product Judging Contest", organization: "Indian Dairy Association (IDA)", year: "2024" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all information provided above is true and accurate to the best of my knowledge.",
        place: "Anand, Gujarat"
      },
      sectionVisibility: {
        summary: true, experience: false, internships: true, education: true, skills: true, certifications: true, projects: true, achievements: true, declaration: true
      }
    }
  },

  dairy_production: {
    title: "🥛 Production Executive (Dairy Plant Operations)",
    subtitle: "Tailored for Milk Processing, HTST Pasteurization & Silo Operations",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Rahul V. Verma",
        jobTitle: "Production Executive — Dairy Processing",
        email: "rahul.verma.prod@gmail.com",
        phone: "+91 98765 11223",
        location: "Anand, Gujarat, India",
        linkedin: "linkedin.com/in/rahul-verma-dairyprod",
        website: "",
        photoUrl: "",
        summary: "Energetic Dairy Production Executive with 3+ years of experience managing high-throughput liquid milk processing (300,000 LPD), HTST pasteurization, homogenizers, milk standardization, and automated CIP cycles."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Production Executive",
          company: "Amul Federation (GCMMF)",
          location: "Anand, Gujarat",
          startDate: "Aug 2022",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Supervise daily operations of 300,000 LPD liquid milk processing line, HTST pasteurizer (15,000 LPH), and PHE plate exchangers.",
            "Execute milk standardization recipes (Standard Milk, Toned Milk, Double Toned Milk) with zero fat/SNF giveaways.",
            "Manage automated 3-circuit CIP cleaning validation using titration analysis for 1.5% NaOH lye and 0.8% HNO3 acid.",
            "Reduced shift milk losses by 0.35% through strict valve sealing audits and condensate recovery."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "B.Tech in Dairy Technology",
          institution: "College of Dairy Science, Anand Agricultural University",
          year: "2018 - 2022",
          grade: "CGPA: 8.2 / 10"
        }
      ],
      skills: [
        { id: "sk-1", name: "HTST Pasteurization & Homogenizer", level: "Expert" },
        { id: "sk-2", name: "SCADA & Automated Silo Controls", level: "Advanced" },
        { id: "sk-3", name: "CIP & SIP Sanitation Protocols", level: "Expert" },
        { id: "sk-4", name: "Milk Standardization Recipes", level: "Expert" }
      ],
      certifications: [
        { id: "cert-1", name: "FSSAI FoSTaC Advanced Manufacturing", issuer: "FSSAI India", year: "2023" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "Best Production Shift Award", organization: "Amul Dairy", year: "2023" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      declaration: {
        enabled: true,
        text: "I hereby declare that the particulars stated above are true to the best of my knowledge.",
        place: "Anand, Gujarat"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  shift_incharge: {
    title: "⏱️ Shift Incharge (Dairy & Process Operations)",
    subtitle: "Tailored for Shift Supervisors & Operations In-Charges",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Amit K. Singh",
        jobTitle: "Shift Incharge — Dairy Plant Operations",
        email: "amit.singh.shift@gmail.com",
        phone: "+91 98112 33445",
        location: "Karnal, Haryana, India",
        linkedin: "linkedin.com/in/amit-singh-shiftincharge",
        website: "",
        photoUrl: "",
        summary: "Dedicated Shift Incharge with 5+ years of experience leading shift operations in large-scale dairy processing units (500,000 LPD). Expert in manpower allocation, raw milk reception dock, SCADA plant automation, yield loss reduction, and shift safety compliance."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Shift Incharge",
          company: "Mother Dairy Fruit & Vegetable Pvt. Ltd.",
          location: "Karnal, Haryana",
          startDate: "Jan 2021",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Lead a shift team of 18 operators, technicians, and packaging staff for 500,000 LPD processing plant.",
            "Achieved 98.5% shift OEE uptime by enforcing preventive maintenance schedules and rapid downtime resolution.",
            "Managed raw milk reception dock, platform testing verification, and tanker CIP washing cycles.",
            "Prepared daily shift production reports, material mass balance sheets, and utility logs."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "B.Tech in Dairy Technology",
          institution: "NDRI, Karnal",
          year: "2016 - 2020",
          grade: "First Class"
        }
      ],
      skills: [
        { id: "sk-1", name: "Shift Operations & Leadership", level: "Expert" },
        { id: "sk-2", name: "Plant OEE & Yield Loss Reduction", level: "Expert" },
        { id: "sk-3", name: "Raw Milk Reception & CIP", level: "Advanced" },
        { id: "sk-4", name: "Safety & SOP Enforcement", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "FSSAI Food Safety Supervisor", issuer: "FSSAI", year: "2022" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "Zero Incident Safety Record", organization: "Mother Dairy", year: "2023" }
      ],
      languages: ["English", "Hindi", "Punjabi"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all details furnished above are correct to the best of my knowledge.",
        place: "Karnal, Haryana"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  dairy_qa: {
    title: "🧪 Quality Assurance Executive (Dairy & Food QA)",
    subtitle: "Tailored for Quality Assurance Officers, Chemist & Lab In-charges",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Priya S. Nambiar",
        jobTitle: "Senior Quality Assurance Executive (Dairy & Beverage)",
        email: "priya.nambiar.qa@gmail.com",
        phone: "+91 99887 76655",
        location: "Karnal, Haryana, India",
        linkedin: "linkedin.com/in/priya-nambiar-qa",
        website: "",
        photoUrl: "",
        summary: "Results-driven Quality Assurance Specialist with 4+ years of hands-on experience in dairy processing plants, chemical analysis, microbiological audits, and NABL/FSSAI regulatory compliance."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Quality Assurance Executive",
          company: "Mother Dairy Fruit & Vegetable Pvt. Ltd.",
          location: "Karnal, India",
          startDate: "Jan 2022",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Lead chemical & microbiological testing for 400,000 LPD liquid milk and pouch packaging unit.",
            "Calibrate and validate FTIR MilkoScan, Automatic Nitrogen Analyzer, and moisture meters daily.",
            "Enforce CIP concentration checks (NaOH 1.5-2.0% & HNO3 0.8-1.0%) preventing mineral scale buildup.",
            "Managed successful FSSAI annual surveillance audit and ISO 22000 re-certification."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "M.Tech in Dairy Chemistry",
          institution: "ICAR - National Dairy Research Institute (NDRI), Karnal",
          year: "2018 - 2020",
          grade: "CGPA: 8.8 / 10"
        }
      ],
      skills: [
        { id: "sk-1", name: "FSSAI & NABL Compliance", level: "Expert" },
        { id: "sk-2", name: "FTIR MilkoScan & HPLC", level: "Advanced" },
        { id: "sk-3", name: "Microbiological Pathogen Testing", level: "Advanced" },
        { id: "sk-4", name: "CIP / SIP Cleaning Validation", level: "Expert" }
      ],
      certifications: [
        { id: "cert-1", name: "ISO 22000:2018 Lead Auditor", issuer: "IRCA Certified", year: "2023" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "Best Employee of the Year (QA Wing)", organization: "Mother Dairy", year: "2023" }
      ],
      languages: ["English", "Hindi", "Malayalam"],
      declaration: {
        enabled: true,
        text: "I hereby declare that the particulars given above are correct and authentic.",
        place: "Karnal, Haryana"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  lab_chemist: {
    title: "🔬 QC Lab Chemist & Analyst (Lab & Testing)",
    subtitle: "Tailored for Raw Material Testing, Wet Chemistry & Lab Calibration",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Siddharth R. Patel",
        jobTitle: "QC Lab Chemist & Analyst",
        email: "siddharth.patel.qc@gmail.com",
        phone: "+91 97234 56789",
        location: "Vadodara, Gujarat, India",
        linkedin: "linkedin.com/in/siddharth-patel-qc",
        website: "",
        photoUrl: "",
        summary: "Detail-oriented QC Chemist with 3+ years of experience in raw milk platform testing, wet chemistry titrations, FTIR MilkoScan analysis, Gerber fat estimation, and NABL ISO 17025 lab equipment calibration."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "QC Chemist",
          company: "Baroda District Co-op Milk Producers Union (Sugam Dairy)",
          location: "Vadodara, Gujarat",
          startDate: "May 2021",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Perform daily platform testing (MBRT, Acidity, Alcohol Test, Clot on Boiling) for 150+ incoming milk tankers.",
            "Calibrate pH meters, refractometers, lactometers, and FTIR MilkoScan analyzers daily.",
            "Analyze butter, ghee, and milk powder batches for moisture, FFA, peroxide value, and solubility index.",
            "Maintain audit-ready laboratory logbooks, chemical reagent standardization records, and NABL reports."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "B.Sc in Chemistry",
          institution: "MS University of Baroda",
          year: "2018 - 2021",
          grade: "First Class with Distinction"
        }
      ],
      skills: [
        { id: "sk-1", name: "Gerber Fat & SNF Titration", level: "Expert" },
        { id: "sk-2", name: "FTIR MilkoScan Calibration", level: "Advanced" },
        { id: "sk-3", name: "Platform Testing (MBRT / Acidity)", level: "Expert" },
        { id: "sk-4", name: "NABL & ISO 17025 Documentation", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "NABL Internal Auditor Certification", issuer: "NABL", year: "2023" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "100% Accuracy Rating in Inter-Lab Test", organization: "NABL", year: "2023" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all particulars stated above are true to the best of my knowledge.",
        place: "Vadodara, Gujarat"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  qa_manager: {
    title: "🛡️ QA/QC Plant Manager (Audits & Compliance)",
    subtitle: "Tailored for QA Heads, Food Safety Managers & Audit In-Charges",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Anuradha M. Nair",
        jobTitle: "Quality Assurance & Food Safety Manager",
        email: "anuradha.nair.qa@gmail.com",
        phone: "+91 98950 12345",
        location: "Kochi, Kerala, India",
        linkedin: "linkedin.com/in/anuradha-nair-qa",
        website: "",
        photoUrl: "",
        summary: "Seasoned Quality Assurance Manager with 7+ years of expertise in food safety management systems, ISO 22000, HACCP, FSSAI regulations, BRCGS audits, and CIP cleaning validation."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "QA & Regulatory Compliance Manager",
          company: "Milma (Kerala Co-operative Milk Marketing Federation)",
          location: "Kochi, Kerala",
          startDate: "Feb 2019",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Oversee quality assurance and microbiological safety across 3 processing plants (600,000 LPD).",
            "Led successful BRCGS Grade AA certification and FSSAI annual surveillance audits.",
            "Enforce plant-wide HACCP CCP monitoring, CIP chemical validation, and hygiene swab testing.",
            "Reduced customer quality complaints by 65% through root cause analysis (CAPA) implementation."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "M.Sc in Food Science & Quality Control",
          institution: "Mahatma Gandhi University, Kerala",
          year: "2014 - 2016",
          grade: "Gold Medalist"
        }
      ],
      skills: [
        { id: "sk-1", name: "ISO 22000 & BRCGS Auditing", level: "Expert" },
        { id: "sk-2", name: "FSSAI Regulatory Compliance", level: "Expert" },
        { id: "sk-3", name: "HACCP & TACCP Hazard Control", level: "Expert" },
        { id: "sk-4", name: "CAPA & Root Cause Analysis", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "ISO 22000:2018 Lead Auditor", issuer: "IRCA", year: "2021" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "National Quality Excellence Award", organization: "QCFI", year: "2023" }
      ],
      languages: ["English", "Hindi", "Malayalam"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all information given above is true and authentic.",
        place: "Kochi, Kerala"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  food_technologist: {
    title: "🍕 Food Technologist & FMCG Specialist",
    subtitle: "Tailored for Food Processing, Beverage & Bakery Specialists",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Karan D. Mehta",
        jobTitle: "Senior Food Technologist (FMCG & Beverages)",
        email: "karan.mehta.foodtech@gmail.com",
        phone: "+91 98200 54321",
        location: "Mumbai, Maharashtra, India",
        linkedin: "linkedin.com/in/karan-mehta-foodtech",
        website: "",
        photoUrl: "",
        summary: "Innovative Food Technologist with 4+ years of experience in product development, thermal processing, shelf-life extension, beverage formulation, and packaging technology."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Senior Food Technologist",
          company: "Parle Agro Pvt. Ltd.",
          location: "Mumbai, India",
          startDate: "Jul 2020",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Develop new beverage and dairy-based drink formulations from lab scale to commercial trial.",
            "Conduct accelerated thermal processing and shelf-life stability trials at 37°C incubation.",
            "Formulate cost-optimized ingredient blends reducing raw material costs by 8%.",
            "Ensure compliance with FSSAI Food Additives Standards and packaging label requirements."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "B.Sc (Hons) in Food Technology",
          institution: "Institute of Chemical Technology (ICT), Mumbai",
          year: "2016 - 2020",
          grade: "First Class"
        }
      ],
      skills: [
        { id: "sk-1", name: "Product Formulation & NPD", level: "Expert" },
        { id: "sk-2", name: "Shelf-Life Stability Testing", level: "Advanced" },
        { id: "sk-3", name: "Sensory Evaluation Protocols", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "Certified Food Scientist (CFS)", issuer: "IFT", year: "2022" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "Commercialization of 2 Beverage Brands", organization: "Parle Agro", year: "2023" }
      ],
      languages: ["English", "Hindi", "Marathi"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all particulars given above are correct.",
        place: "Mumbai, Maharashtra"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  pharma_qa: {
    title: "💊 Pharma & Biotech QA Officer (cGMP)",
    subtitle: "Tailored for cGMP, Cleanroom, HPLC & USFDA Compliance Roles",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Dr. Rajesh K. Gupta",
        jobTitle: "Senior Pharma Quality Assurance Officer",
        email: "rajesh.gupta.pharma@gmail.com",
        phone: "+91 98799 88776",
        location: "Ahmedabad, Gujarat, India",
        linkedin: "linkedin.com/in/rajesh-gupta-pharmaqa",
        website: "",
        photoUrl: "",
        summary: "Meticulous Pharma QA Officer with 5+ years of experience in sterile liquid formulations, cleanroom Class 100 protocols, Batch Manufacturing Records (BMR), HPLC assay testing, and cGMP / USFDA regulatory compliance."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Quality Assurance Executive",
          company: "Cadila Healthcare (Zydus Lifesciences)",
          location: "Ahmedabad, Gujarat",
          startDate: "Jan 2019",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Review and approve Batch Manufacturing Records (BMR) and Batch Packaging Records (BPR) for sterile injection lines.",
            "Enforce cGMP compliance across cleanroom Class 100 areas and HEPA filter validation.",
            "Manage Out-of-Specification (OOS) investigations, deviation logs, and CAPA implementation.",
            "Participated in USFDA and WHO-GMP audits with zero critical observations."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "B.Pharm (Bachelor of Pharmacy)",
          institution: "Nirma University, Ahmedabad",
          year: "2014 - 2018",
          grade: "First Class with Distinction"
        }
      ],
      skills: [
        { id: "sk-1", name: "cGMP & USFDA Compliance", level: "Expert" },
        { id: "sk-2", name: "BMR & BPR Document Review", level: "Expert" },
        { id: "sk-3", name: "Cleanroom & HEPA Validation", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "Certified Quality Auditor (CQA)", issuer: "ASQ", year: "2021" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "Successful USFDA Plant Inspection Lead", organization: "Zydus", year: "2023" }
      ],
      languages: ["English", "Hindi", "Gujarati"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all information stated above is accurate and true.",
        place: "Ahmedabad, Gujarat"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  plant_maintenance: {
    title: "⚙️ Plant Maintenance & Utility Incharge",
    subtitle: "Tailored for Mechanical, Electrical, Boiler & SCADA Specialists",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Manish K. Sharma",
        jobTitle: "Plant Maintenance & Utility Executive",
        email: "manish.sharma.maint@gmail.com",
        phone: "+91 94140 98765",
        location: "Jaipur, Rajasthan, India",
        linkedin: "linkedin.com/in/manish-sharma-plantmaint",
        website: "",
        photoUrl: "",
        summary: "Proactive Plant Maintenance Engineer with 6+ years of experience in food and dairy plant utilities, steam boilers, ammonia refrigeration plants, air compressors, SCADA automation, and preventive maintenance."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Maintenance Executive",
          company: "Saras Dairy (Rajasthan Co-op Milk Federation)",
          location: "Jaipur, Rajasthan",
          startDate: "Mar 2018",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Oversee mechanical and electrical maintenance for 400,000 LPD plant utilities including steam boiler (5 TPH) and ammonia chillers.",
            "Reduced breakdown downtime by 40% through strict implementation of Preventive Maintenance (PM) schedules.",
            "Managed annual boiler inspection and pressure vessel safety certification per Indian Boiler Regulations (IBR).",
            "Supervised CIP pump overhauling, PHE plate regasketting, and homogenizer valve grinding."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "Diploma / B.E. in Mechanical Engineering",
          institution: "MNIT Jaipur",
          year: "2014 - 2018",
          grade: "First Class"
        }
      ],
      skills: [
        { id: "sk-1", name: "Steam Boiler & Refrigeration", level: "Expert" },
        { id: "sk-2", name: "Preventive & Predictive Maintenance", level: "Expert" },
        { id: "sk-3", name: "SCADA & Pneumatic Controls", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "Boiler Operation Engineer (BOE)", issuer: "Govt of Rajasthan", year: "2020" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "Energy Conservation Award for Boiler Steam Recovery", organization: "Saras Dairy", year: "2022" }
      ],
      languages: ["English", "Hindi"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all details furnished above are correct.",
        place: "Jaipur, Rajasthan"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  },

  plant_manager: {
    title: "🏭 Dairy Plant Operations Manager",
    subtitle: "Tailored for Shift In-charges, Plant Managers & Operations Leaders",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Vikramjit Singh",
        jobTitle: "Plant Operations Manager — Dairy Processing",
        email: "vikramjit.singh.dairy@gmail.com",
        phone: "+91 98123 45678",
        location: "Ludhiana, Punjab, India",
        linkedin: "linkedin.com/in/vikramjit-singh-dairyops",
        website: "",
        photoUrl: "",
        summary: "Accomplished Dairy Operations Manager with 8+ years of expertise overseeing multi-line processing plants (800,000 LPD). Specializing in milk processing, pasteurization, butter/ghee/powder plants, cost reduction, and yield optimization."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Plant Operations Manager",
          company: "Verka Dairy (Punjab State Milk Federation)",
          location: "Ludhiana, Punjab",
          startDate: "Mar 2021",
          endDate: "Present",
          isCurrent: true,
          bullets: [
            "Direct 24/7 processing operations of 800,000 LPD facility managing 65 staff members.",
            "Reduced operational milk fat/SNF losses from 0.72% to 0.38%, saving ₹42 Lakhs annually.",
            "Commissioned automated 3-circuit CIP recirculation system cutting water consumption by 30%."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "B.Tech in Dairy Technology",
          institution: "GADVASU, Ludhiana",
          year: "2013 - 2017",
          grade: "First Class Honors"
        }
      ],
      skills: [
        { id: "sk-1", name: "Plant Operations & SCADA Control", level: "Expert" },
        { id: "sk-2", name: "Yield & Loss Optimization", level: "Expert" },
        { id: "sk-3", name: "CIP & Utility Management", level: "Expert" }
      ],
      certifications: [
        { id: "cert-1", name: "Certified Lean Six Sigma Green Belt", issuer: "ASQ", year: "2022" }
      ],
      projects: [],
      achievements: [
        { id: "ach-1", title: "National Energy Conservation Award", organization: "Ministry of Power", year: "2023" }
      ],
      languages: ["English", "Hindi", "Punjabi"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all details furnished above are genuine to the best of my knowledge.",
        place: "Ludhiana, Punjab"
      },
      sectionVisibility: {
        summary: true, experience: true, internships: false, education: true, skills: true, certifications: true, projects: false, achievements: true, declaration: true
      }
    }
  }
};

export function ResumeMakerCalc() {
  const { toast } = useToast();

  // State
  const [resumeData, setResumeData] = useState<ResumeData>(PRESETS.student_fresher.data);
  const [activeSection, setActiveSection] = useState<string>("personal");
  const [accentColor, setAccentColor] = useState<string>("#1e3a8a");
  const [templateLayout, setTemplateLayout] = useState<"modern" | "classic" | "compact" | "student">("modern");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [activeViewTab, setActiveViewTab] = useState<"edit" | "preview">("edit");

  // Professional Tools State: Typography & Layout Spacing
  const [fontFamily, setFontFamily] = useState<"sans" | "serif" | "roboto" | "mono">("sans");
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [lineSpacing, setLineSpacing] = useState<"tight" | "normal" | "relaxed">("normal");
  const [pageMargin, setPageMargin] = useState<"compact" | "standard" | "wide">("standard");

  // Professional Tools State: ATS Job Description Scanner
  const [jdText, setJdText] = useState<string>("");

  // Professional Tools State: Cover Letter Generator
  const [coverTargetCompany, setCoverTargetCompany] = useState<string>("Dairy Enterprise");
  const [coverRecipientTitle, setCoverRecipientTitle] = useState<string>("Hiring Manager");

  // Custom Write-in Skill State
  const [customSkillInput, setCustomSkillInput] = useState<string>("");
  const [customSkillLevel, setCustomSkillLevel] = useState<SkillItem["level"]>("Advanced");

  const previewRef = useRef<HTMLDivElement>(null);

  // ATS / Strength Meter Score Calculation (0-100%)
  const atsScore = useMemo(() => {
    let score = 0;
    const { personal, experiences, internships, education, skills, certifications, projects, languages } = resumeData;

    if (personal.fullName.trim().length > 2) score += 10;
    if (personal.jobTitle.trim().length > 2) score += 10;
    if (personal.email.trim().length > 4) score += 10;
    if (personal.phone.trim().length > 5) score += 10;
    if (personal.summary.trim().length > 30) score += 15;

    if (experiences.length > 0 || internships.length > 0) score += 20;
    if (education.length > 0) score += 15;
    if (skills.length >= 3) score += 10;

    return Math.min(score, 100);
  }, [resumeData]);

  // ATS Job Description Analysis Memo
  const atsJdAnalysis = useMemo(() => {
    if (!jdText.trim()) return { matchScore: 0, matched: [], missing: COMMON_DAIRY_ATS_KEYWORDS.slice(0, 8) };

    const resumeString = [
      resumeData.personal.fullName,
      resumeData.personal.jobTitle,
      resumeData.personal.summary,
      ...resumeData.experiences.flatMap(e => [e.designation, e.company, ...e.bullets]),
      ...resumeData.internships.flatMap(i => [i.role, i.company, ...i.bullets]),
      ...resumeData.skills.map(s => s.name),
      ...resumeData.certifications.map(c => c.name),
      ...resumeData.projects.map(p => p.title + " " + p.description)
    ].join(" ").toLowerCase();

    const matchedKeywords: string[] = [];
    const missingKeywords: string[] = [];

    COMMON_DAIRY_ATS_KEYWORDS.forEach(kw => {
      if (resumeString.includes(kw.toLowerCase())) {
        matchedKeywords.push(kw);
      } else if (jdText.toLowerCase().includes(kw.toLowerCase())) {
        missingKeywords.push(kw);
      }
    });

    const totalTerms = Math.max(matchedKeywords.length + missingKeywords.length, 1);
    const matchScore = Math.round((matchedKeywords.length / totalTerms) * 100);

    return { matchScore, matched: matchedKeywords, missing: missingKeywords };
  }, [jdText, resumeData]);

  // Auto-Generated Professional Cover Letter Memo
  const generatedCoverLetter = useMemo(() => {
    const name = resumeData.personal.fullName || "Candidate Name";
    const title = resumeData.personal.jobTitle || "Dairy & Food Professional";
    const email = resumeData.personal.email || "candidate@email.com";
    const phone = resumeData.personal.phone || "+91 98765 43210";
    const loc = resumeData.personal.location || "India";
    const topSkills = resumeData.skills.slice(0, 5).map(s => s.name).join(", ");
    const company = coverTargetCompany || "Target Company";
    const manager = coverRecipientTitle || "Hiring Manager";
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return `${today}

To,
The ${manager}
${company}

Subject: Application for the Position of ${title}

Dear ${manager},

I am writing to express my strong interest in the ${title} role at ${company}. With a background in dairy science, quality control, and processing plant operations, I am eager to contribute my technical competencies to your esteemed organization.

Key Qualifications & Core Competencies:
${topSkills ? `• Core Skills: ${topSkills}\n` : ""}• Hands-on expertise in milk processing, pasteurization, CIP/SIP sanitation, and raw milk analysis.
• Thorough knowledge of FSSAI, ISO 22000, and HACCP compliance standards.
• Proven track record in process optimization, waste reduction, and maintaining audit-ready quality logs.

I am particularly impressed by ${company}'s reputation in the dairy industry. I welcome the opportunity to discuss how my qualifications and practical experience align with your team's objectives.

Thank you for your time and consideration.

Sincerely,

${name}
Phone: ${phone} | Email: ${email}
Location: ${loc}`;
  }, [resumeData, coverTargetCompany, coverRecipientTitle]);

  // Copy Cover Letter to Clipboard
  const copyCoverLetter = () => {
    navigator.clipboard.writeText(generatedCoverLetter);
    toast({
      title: "Cover Letter Copied!",
      description: "Text copied to clipboard. You can paste it into Word or Email.",
    });
  };

  // One-click Add Missing Keyword to Skills
  const addMissingKeywordToSkills = (kw: string) => {
    const exists = resumeData.skills.some(s => s.name.toLowerCase() === kw.toLowerCase());
    if (!exists) {
      const newSkill: SkillItem = { id: `sk-${Date.now()}`, name: kw, level: "Advanced" };
      setResumeData(prev => ({ ...prev, skills: [...prev.skills, newSkill] }));
      toast({
        title: `Skill Added: ${kw}`,
        description: `Added "${kw}" to your Skills list.`,
      });
    }
  };

  // Load Preset
  const handleLoadPreset = (key: string) => {
    if (PRESETS[key]) {
      setResumeData(JSON.parse(JSON.stringify(PRESETS[key].data)));
      toast({
        title: "Preset Loaded!",
        description: `Loaded template: ${PRESETS[key].title}`,
      });
    }
  };

  // Switch User Mode
  const handleModeSwitch = (mode: "student" | "experienced" | "custom") => {
    setResumeData(prev => ({
      ...prev,
      userMode: mode,
      sectionVisibility: {
        ...prev.sectionVisibility,
        experience: mode === "experienced" || mode === "custom",
        internships: mode === "student" || mode === "custom",
        achievements: mode === "student" || mode === "custom",
      }
    }));
    toast({
      title: `Switched to ${mode.toUpperCase()} Mode`,
      description: mode === "student" ? "Prioritizing Education, Internships & Student Projects" : "Prioritizing Work History & Corporate Metrics",
    });
  };

  // Reset Blank
  const handleResetBlank = () => {
    setResumeData({
      userMode: "student",
      personal: {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        website: "",
        photoUrl: "",
        summary: ""
      },
      experiences: [],
      internships: [],
      education: [],
      skills: [],
      certifications: [],
      projects: [],
      achievements: [],
      languages: [],
      declaration: { enabled: false, text: "", place: "" },
      sectionVisibility: {
        summary: true,
        experience: true,
        internships: true,
        education: true,
        skills: true,
        certifications: true,
        projects: true,
        achievements: true,
        declaration: false
      }
    });
    toast({
      title: "Reset Completed",
      description: "Cleared all fields for a fresh resume.",
    });
  };

  // Handlers for Personal Details
  const handlePersonalChange = (field: keyof PersonalInfo, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  // Handlers for Experience
  const addExperience = () => {
    const newItem: ExperienceItem = {
      id: `exp-${Date.now()}`,
      designation: "Quality / Production Officer",
      company: "Dairy Industries",
      location: "City, State",
      startDate: "2022",
      endDate: "Present",
      isCurrent: true,
      bullets: ["Supervised daily production operations ensuring compliance with quality specs."]
    };
    setResumeData(prev => ({ ...prev, experiences: [...prev.experiences, newItem] }));
  };

  const updateExperience = (id: string, field: keyof ExperienceItem, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(item => item.id !== id)
    }));
  };

  const addExpBullet = (expId: string, customText?: string) => {
    const textToAdd = customText || "New key achievement or responsibility.";
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => {
        if (exp.id === expId) {
          return { ...exp, bullets: [...exp.bullets, textToAdd] };
        }
        return exp;
      })
    }));
  };

  const updateExpBullet = (expId: string, index: number, value: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => {
        if (exp.id === expId) {
          const newBullets = [...exp.bullets];
          newBullets[index] = value;
          return { ...exp, bullets: newBullets };
        }
        return exp;
      })
    }));
  };

  const deleteExpBullet = (expId: string, index: number) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => {
        if (exp.id === expId) {
          const newBullets = exp.bullets.filter((_, i) => i !== index);
          return { ...exp, bullets: newBullets };
        }
        return exp;
      })
    }));
  };

  // Handlers for Internships
  const addInternship = () => {
    const newItem: InternshipItem = {
      id: `int-${Date.now()}`,
      role: "Industrial Summer Trainee",
      company: "Milk Union / Plant",
      location: "City",
      duration: "2 Months",
      bullets: ["Gained practical exposure in raw milk testing and CIP cleaning."]
    };
    setResumeData(prev => ({ ...prev, internships: [...prev.internships, newItem] }));
  };

  const updateInternship = (id: string, field: keyof InternshipItem, value: any) => {
    setResumeData(prev => ({
      ...prev,
      internships: prev.internships.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteInternship = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      internships: prev.internships.filter(item => item.id !== id)
    }));
  };

  // Handlers for Education
  const addEducation = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: "B.Tech / B.Sc in Dairy Technology",
      institution: "University / College Name",
      year: "2021 - 2025",
      grade: "CGPA / Percentage"
    };
    setResumeData(prev => ({ ...prev, education: [...prev.education, newItem] }));
  };

  const updateEducation = (id: string, field: keyof EducationItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(item => item.id !== id)
    }));
  };

  // Handlers for Skills
  const addSkill = (name = "New Technical Skill", level: SkillItem["level"] = "Advanced") => {
    const newItem: SkillItem = { id: `sk-${Date.now()}`, name, level };
    setResumeData(prev => ({ ...prev, skills: [...prev.skills, newItem] }));
  };

  const updateSkill = (id: string, field: keyof SkillItem, value: any) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteSkill = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(item => item.id !== id)
    }));
  };

  // Handlers for Certifications
  const addCertification = () => {
    const newItem: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: "FoSTaC / ISO 22000 Certification",
      issuer: "FSSAI / NABL",
      year: "2024"
    };
    setResumeData(prev => ({ ...prev, certifications: [...prev.certifications, newItem] }));
  };

  const updateCertification = (id: string, field: keyof CertificationItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteCertification = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(item => item.id !== id)
    }));
  };

  // Handlers for Projects
  const addProject = () => {
    const newItem: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: "Dairy Process Improvement Study",
      description: "Conducted research on shelf-life extension and sensory evaluation."
    };
    setResumeData(prev => ({ ...prev, projects: [...prev.projects, newItem] }));
  };

  const updateProject = (id: string, field: keyof ProjectItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteProject = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(item => item.id !== id)
    }));
  };

  // Handlers for Achievements
  const addAchievement = () => {
    const newItem: AchievementItem = {
      id: `ach-${Date.now()}`,
      title: "First Prize in Tech Fest",
      organization: "College / Association",
      year: "2024"
    };
    setResumeData(prev => ({ ...prev, achievements: [...prev.achievements, newItem] }));
  };

  const updateAchievement = (id: string, field: keyof AchievementItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      achievements: prev.achievements.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteAchievement = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(item => item.id !== id)
    }));
  };

  // Section Visibility Toggle
  const toggleSectionVisibility = (section: keyof ResumeData["sectionVisibility"]) => {
    setResumeData(prev => ({
      ...prev,
      sectionVisibility: {
        ...prev.sectionVisibility,
        [section]: !prev.sectionVisibility[section]
      }
    }));
  };

  // Languages Handler
  const handleLanguagesChange = (str: string) => {
    const list = str.split(",").map(s => s.trim()).filter(Boolean);
    setResumeData(prev => ({ ...prev, languages: list }));
  };

  // Print PDF via Browser Print
  const handlePrint = () => {
    setActiveViewTab("preview");
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Direct High-Quality A4 PDF Download via html2canvas & jsPDF
  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    setIsDownloading(true);
    toast({
      title: "Rendering High-Quality A4 PDF...",
      description: "Optimizing typography and page margins. Please wait a moment.",
    });

    try {
      // Ensure preview tab is active for rendering
      setActiveViewTab("preview");
      await new Promise((resolve) => setTimeout(resolve, 150));

      const element = previewRef.current;

      // Render canvas with scale 2.5 (High resolution) for crisp fonts with zero clipping or text loss
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById("resume-a4-preview");
          if (clonedElement) {
            clonedElement.style.display = "block";
            clonedElement.style.visibility = "visible";
            clonedElement.style.boxShadow = "none";
            clonedElement.style.margin = "0 auto";
            clonedElement.style.border = "none";

            // Force all child text and headings to be explicitly visible
            clonedElement.querySelectorAll("*").forEach((child) => {
              (child as HTMLElement).style.visibility = "visible";
            });
          }
        }
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= pdfHeight;

      // Multi-page clean layout slice if content extends beyond 1 page
      while (heightLeft >= 2) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
        heightLeft -= pdfHeight;
      }

      const fileName = `${resumeData.personal.fullName || "Resume"}_CV.pdf`.replace(/\s+/g, "_");
      pdf.save(fileName);

      toast({
        title: "A4 PDF Saved Successfully!",
        description: `Downloaded ${fileName} with full content.`,
      });
    } catch (err) {
      console.error("PDF render error:", err);
      toast({
        title: "PDF Render Fallback",
        description: "Opening browser print preview dialog for direct PDF saving.",
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
              <FileText className="h-6 w-6 text-blue-600" />
              Easy & Advanced Resume / CV Maker
            </h2>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">ATS Pro Toolkit</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Build ATS-friendly A4 resumes with pre-written bullet suggestions, Job Description ATS keyword matcher, Action Verbs assistant, and Cover Letter generator.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Preset Selector */}
          <Select onValueChange={handleLoadPreset}>
            <SelectTrigger className="w-[240px] h-9 text-xs font-semibold bg-blue-50/60 border-blue-200 text-blue-900 hover:bg-blue-100">
              <SelectValue placeholder="⚡ Load Sample Resume Preset..." />
            </SelectTrigger>
            <SelectContent className="max-h-[320px]">
              <SelectItem value="student_fresher">🎓 Student / Fresh Graduate (Dairy & Food)</SelectItem>
              <SelectItem value="dairy_production">🥛 Production Executive (Dairy Operations)</SelectItem>
              <SelectItem value="shift_incharge">⏱️ Shift Incharge (Dairy & Process Plant)</SelectItem>
              <SelectItem value="dairy_qa">🧪 Quality Assurance Executive (Dairy & Food)</SelectItem>
              <SelectItem value="lab_chemist">🔬 QC Lab Chemist & Analyst (Lab Testing)</SelectItem>
              <SelectItem value="qa_manager">🛡️ QA/QC Plant Manager (Audits & HACCP)</SelectItem>
              <SelectItem value="food_technologist">🍕 Food Technologist & FMCG Specialist</SelectItem>
              <SelectItem value="pharma_qa">💊 Pharma & Biotech QA Officer (cGMP)</SelectItem>
              <SelectItem value="plant_maintenance">⚙️ Plant Maintenance & Utility Incharge</SelectItem>
              <SelectItem value="plant_manager">🏭 Dairy Plant Operations Manager</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" onClick={handleResetBlank} className="h-9 text-xs">
            <RefreshCw className="h-3.5 w-3.5 mr-1" /> Reset
          </Button>

          <Button variant="outline" size="sm" onClick={handlePrint} className="h-9 text-xs border-blue-300 text-blue-700 hover:bg-blue-50">
            <Printer className="h-3.5 w-3.5 mr-1" /> Print / PDF
          </Button>

          <Button 
            size="sm" 
            onClick={handleDownloadPDF} 
            disabled={isDownloading}
            className="h-9 text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
          >
            {isDownloading ? (
              <Loader2 className="h-3.5 w-3.5 mr-1 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5 mr-1" />
            )}
            Download PDF
          </Button>
        </div>
      </div>

      {/* Top Professional Tools Bar: Mode Selector & ATS Strength Meter */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 print:hidden">

        {/* Mode Selector */}
        <div className="md:col-span-7 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <div>
              <span className="text-xs font-bold text-slate-800 block">Select Profile Mode:</span>
              <span className="text-[10px] text-slate-500">Tailors layout for students vs experienced roles</span>
            </div>
          </div>
          <div className="flex gap-1.5 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => handleModeSwitch("student")}
              className={cn(
                "px-3 py-1.5 text-xs rounded-md font-semibold transition-all flex items-center gap-1",
                resumeData.userMode === "student" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
              )}
            >
              🎓 Student / Fresher
            </button>
            <button
              onClick={() => handleModeSwitch("experienced")}
              className={cn(
                "px-3 py-1.5 text-xs rounded-md font-semibold transition-all flex items-center gap-1",
                resumeData.userMode === "experienced" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
              )}
            >
              💼 Experienced Pro
            </button>
          </div>
        </div>

        {/* ATS Resume Strength Indicator */}
        <div className="md:col-span-5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="relative flex items-center justify-center shrink-0">
            <div className="w-11 h-11 rounded-full border-4 border-blue-500 flex items-center justify-center font-extrabold text-xs text-blue-700">
              {atsScore}%
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1">
              <span>ATS Resume Score</span>
              <span className={cn(
                "text-[10px] px-1.5 py-0.5 rounded font-semibold",
                atsScore >= 80 ? "bg-emerald-100 text-emerald-800" : atsScore >= 50 ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"
              )}>
                {atsScore >= 80 ? "Excellent!" : atsScore >= 50 ? "Good Start" : "Needs Info"}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-500" 
                style={{ width: `${atsScore}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Main Content Grid: Editor Form (5 cols) & Live Preview (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: EDITOR FORM & PROFESSIONAL TOOLS */}
        <div className="lg:col-span-5 space-y-4 print:hidden">

          {/* Section Selector Dropdown */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Layout className="h-4 w-4 text-blue-600" />
                  Edit Section & Professional Tools
                </CardTitle>
                <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveViewTab("edit")}
                    className={cn(
                      "px-2.5 py-1 text-xs rounded-md font-medium transition-all",
                      activeViewTab === "edit" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
                    )}
                  >
                    Editor
                  </button>
                  <button
                    onClick={() => setActiveViewTab("preview")}
                    className={cn(
                      "px-2.5 py-1 text-xs rounded-md font-medium transition-all lg:hidden",
                      activeViewTab === "preview" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
                    )}
                  >
                    Preview
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <Select value={activeSection} onValueChange={setActiveSection}>
                <SelectTrigger className="w-full font-medium">
                  <SelectValue placeholder="Choose section..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">👤 1. Personal & Contact Info</SelectItem>
                  <SelectItem value="summary">📝 2. Summary & Profile Objective</SelectItem>
                  <SelectItem value="education">🎓 3. Education & Qualification</SelectItem>
                  {resumeData.userMode === "student" && (
                    <SelectItem value="internships">🏢 4. Internships & Industrial Training</SelectItem>
                  )}
                  <SelectItem value="experience">💼 5. Work Experience</SelectItem>
                  <SelectItem value="skills">⚡ 6. Skills & Core Competencies</SelectItem>
                  <SelectItem value="certifications">🏅 7. Certifications & Licenses</SelectItem>
                  <SelectItem value="projects">📂 8. Projects & Research</SelectItem>
                  <SelectItem value="achievements">🏆 9. Honors & Achievements</SelectItem>
                  <SelectItem value="theme">🎨 10. Styling, Fonts & Spacing</SelectItem>
                  <SelectItem value="ats_scanner">🎯 11. ATS Job Description Matcher</SelectItem>
                  <SelectItem value="action_verbs">🚀 12. Action Verbs Assistant</SelectItem>
                  <SelectItem value="cover_letter">✉️ 13. Cover Letter Builder</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* DYNAMIC FORM PANELS */}

          {/* 1. PERSONAL DETAILS */}
          {activeSection === "personal" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  Personal & Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div>
                  <Label className="text-xs">Full Name *</Label>
                  <Input 
                    value={resumeData.personal.fullName} 
                    onChange={e => handlePersonalChange("fullName", e.target.value)} 
                    placeholder="e.g. Aniket Patel"
                  />
                </div>
                <div>
                  <Label className="text-xs">Target Job Title / Field *</Label>
                  <Input 
                    value={resumeData.personal.jobTitle} 
                    onChange={e => handlePersonalChange("jobTitle", e.target.value)} 
                    placeholder="e.g. Dairy Technology Graduate / QA Executive / Shift Incharge"
                  />
                  {/* Role Presets Chips */}
                  <div className="pt-1.5 space-y-1">
                    <span className="text-[10px] font-semibold text-slate-500 block">Quick-Select Role Presets (or type custom title):</span>
                    <div className="flex flex-wrap gap-1">
                      {JOB_ROLE_PRESETS.map((preset, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => handlePersonalChange("jobTitle", preset.title)}
                          className="text-[10px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 border border-slate-200 px-2 py-0.5 rounded font-medium transition-all"
                        >
                          + {preset.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Email Address *</Label>
                    <Input 
                      value={resumeData.personal.email} 
                      onChange={e => handlePersonalChange("email", e.target.value)} 
                      placeholder="name@gmail.com"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Phone Number *</Label>
                    <Input 
                      value={resumeData.personal.phone} 
                      onChange={e => handlePersonalChange("phone", e.target.value)} 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">City & State *</Label>
                    <Input 
                      value={resumeData.personal.location} 
                      onChange={e => handlePersonalChange("location", e.target.value)} 
                      placeholder="Anand, Gujarat"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">LinkedIn Profile (Optional)</Label>
                    <Input 
                      value={resumeData.personal.linkedin} 
                      onChange={e => handlePersonalChange("linkedin", e.target.value)} 
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>

                {/* OPTIONAL PROFILE PHOTO UPLOAD */}
                <div className="pt-2 border-t border-slate-200 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs font-semibold text-slate-800">Candidate Passport Photo (Optional)</Label>
                    {resumeData.personal.photoUrl && (
                      <button
                        type="button"
                        onClick={() => handlePersonalChange("photoUrl", "")}
                        className="text-[11px] text-red-600 hover:underline flex items-center gap-1 font-medium"
                      >
                        <Trash2 className="h-3 w-3" /> Remove Photo
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {resumeData.personal.photoUrl ? (
                      <div className="w-12 h-14 rounded border border-blue-500 overflow-hidden shrink-0 bg-slate-100 shadow-xs">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={resumeData.personal.photoUrl} alt="Candidate Preview" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-12 h-14 rounded border border-dashed border-slate-300 flex items-center justify-center shrink-0 text-slate-400 bg-slate-50">
                        <User className="h-6 w-6" />
                      </div>
                    )}

                    <div className="flex-1 space-y-1">
                      <input
                        type="file"
                        accept="image/*"
                        id="candidate-photo-upload"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            reader.onload = (evt) => {
                              if (evt.target?.result) {
                                handlePersonalChange("photoUrl", evt.target.result as string);
                                toast({ title: "Photo Uploaded!", description: "Profile photo added to resume header." });
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => document.getElementById("candidate-photo-upload")?.click()}
                        className="h-8 text-xs w-full bg-white border-blue-200 text-blue-800 hover:bg-blue-50"
                      >
                        <Upload className="h-3.5 w-3.5 mr-1" />
                        {resumeData.personal.photoUrl ? "Change Passport Photo" : "Upload Candidate Photo"}
                      </Button>
                      <span className="text-[10px] text-slate-500 block">Optional: Uploads photo onto final A4 resume header.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 2. SUMMARY */}
          {activeSection === "summary" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Summary & Profile Objective
                  </CardTitle>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.summary || "Professional Summary"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, summary: e.target.value }
                    }))}
                    placeholder="e.g. Executive Summary / Career Objective"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <textarea
                  value={resumeData.personal.summary}
                  onChange={e => handlePersonalChange("summary", e.target.value)}
                  placeholder="Summarize your technical background, dairy processing expertise, and career goals..."
                  rows={5}
                  className="w-full text-xs p-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="p-2.5 bg-blue-50/70 border border-blue-100 rounded-lg text-[11px] text-blue-900 space-y-1">
                  <span className="font-semibold block flex items-center gap-1">
                    <Lightbulb className="h-3.5 w-3.5 text-amber-600" /> Professional Tip:
                  </span>
                  <span>Include years of experience, core dairy/food domain skills (e.g. FSSAI, CIP, Pasteurization), and quantitative achievements (e.g. reduced milk losses by 0.4%).</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 3. EDUCATION */}
          {activeSection === "education" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    Education & Qualifications
                  </CardTitle>
                  <Button size="sm" variant="default" onClick={addEducation} className="h-7 text-xs bg-blue-600">
                    <Plus className="h-3.5 w-3.5 mr-1" /> Add Degree
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.education || "Education & Academic Qualifications"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, education: e.target.value }
                    }))}
                    placeholder="e.g. Academic Degrees & Qualifications"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {/* Degree Preset Chips */}
                <div className="pb-2 border-b">
                  <Label className="text-[10px] font-semibold text-slate-500 mb-1 block">Quick-Select Degree (or type custom degree below):</Label>
                  <div className="flex flex-wrap gap-1">
                    {["B.Tech in Dairy Technology", "B.Sc in Food Technology", "M.Sc in Microbiology", "B.Pharm (Pharmaceutical Sciences)", "B.Sc in Chemistry", "Diploma in Dairy / Mechanical Tech", "Higher Secondary (10+2 Science)"].map((degName, dIdx) => (
                      <button
                        key={dIdx}
                        type="button"
                        onClick={() => {
                          if (resumeData.education.length > 0) {
                            updateEducation(resumeData.education[0].id, "degree", degName);
                          } else {
                            addEducation();
                          }
                        }}
                        className="text-[10px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 border border-slate-200 px-2 py-0.5 rounded font-medium transition-all"
                      >
                        + {degName}
                      </button>
                    ))}
                  </div>
                </div>

                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="p-3 border border-slate-200 rounded-lg space-y-2 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <Input 
                        value={edu.degree} 
                        onChange={e => updateEducation(edu.id, "degree", e.target.value)} 
                        placeholder="Degree / Course Name"
                        className="h-8 text-xs font-semibold flex-1"
                      />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500" onClick={() => deleteEducation(edu.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <Input 
                      value={edu.institution} 
                      onChange={e => updateEducation(edu.id, "institution", e.target.value)} 
                      placeholder="University / College / Board Name"
                      className="h-7 text-xs"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input 
                        value={edu.year} 
                        onChange={e => updateEducation(edu.id, "year", e.target.value)} 
                        placeholder="Passing Year (e.g. 2021 - 2025)"
                        className="h-7 text-xs"
                      />
                      <Input 
                        value={edu.grade} 
                        onChange={e => updateEducation(edu.id, "grade", e.target.value)} 
                        placeholder="CGPA / % Grade"
                        className="h-7 text-xs"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 4. INTERNSHIPS */}
          {activeSection === "internships" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    Industrial Training & Internships
                  </CardTitle>
                  <Button size="sm" variant="default" onClick={addInternship} className="h-7 text-xs bg-blue-600">
                    <Plus className="h-3.5 w-3.5 mr-1" /> Add Internship
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.internships || "Industrial Training & Summer Internships"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, internships: e.target.value }
                    }))}
                    placeholder="e.g. Summer Internships / Plant Training"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {resumeData.internships.map((int) => (
                  <div key={int.id} className="p-3 border border-slate-200 rounded-lg space-y-2 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <Input value={int.role} onChange={e => updateInternship(int.id, "role", e.target.value)} placeholder="Training Role" className="h-8 text-xs font-semibold flex-1" />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500" onClick={() => deleteInternship(int.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input value={int.company} onChange={e => updateInternship(int.id, "company", e.target.value)} placeholder="Company / Dairy Union" className="h-7 text-xs" />
                      <Input value={int.duration} onChange={e => updateInternship(int.id, "duration", e.target.value)} placeholder="Duration (e.g. 2 Months)" className="h-7 text-xs" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 5. WORK EXPERIENCE */}
          {activeSection === "experience" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                    Work History & Experience
                  </CardTitle>
                  <Button size="sm" variant="default" onClick={addExperience} className="h-7 text-xs bg-blue-600">
                    <Plus className="h-3.5 w-3.5 mr-1" /> Add Job
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.experience || "Professional Work History"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, experience: e.target.value }
                    }))}
                    placeholder="e.g. Professional Experience / Employment"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {resumeData.experiences.map((exp) => (
                  <div key={exp.id} className="p-3.5 border border-slate-200 rounded-lg space-y-3 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <Input value={exp.designation} onChange={e => updateExperience(exp.id, "designation", e.target.value)} placeholder="Designation / Role Title" className="h-8 text-xs font-semibold flex-1" />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500 ml-2" onClick={() => deleteExperience(exp.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <Input value={exp.company} onChange={e => updateExperience(exp.id, "company", e.target.value)} placeholder="Company / Plant Name" className="h-8 text-xs" />
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <Label className="text-[11px]">Start Date</Label>
                        <Input value={exp.startDate} onChange={e => updateExperience(exp.id, "startDate", e.target.value)} className="h-8 text-xs" placeholder="Jan 2022" />
                      </div>
                      <div>
                        <Label className="text-[11px]">End Date</Label>
                        <Input value={exp.endDate} onChange={e => updateExperience(exp.id, "endDate", e.target.value)} className="h-8 text-xs" placeholder="Present / YYYY" />
                      </div>
                      <div>
                        <Label className="text-[11px]">Location</Label>
                        <Input value={exp.location} onChange={e => updateExperience(exp.id, "location", e.target.value)} className="h-8 text-xs" />
                      </div>
                    </div>

                    {/* Quick Pre-written Suggestions */}
                    <div className="pt-1">
                      <Label className="text-[10px] font-semibold text-blue-700 flex items-center gap-1 mb-1">
                        <Zap className="h-3 w-3" /> Insert Pre-written Professional Bullets:
                      </Label>
                      <div className="flex flex-wrap gap-1">
                        {BULLET_LIBRARY.qa_qc.slice(0, 3).map((bText, bIdx) => (
                          <button
                            key={bIdx}
                            onClick={() => addExpBullet(exp.id, bText)}
                            className="text-[10px] bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded text-left truncate max-w-full"
                          >
                            + {bText.substring(0, 42)}...
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bullets List */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <div className="flex justify-between items-center">
                        <Label className="text-[11px] font-semibold text-slate-700">Key Responsibilities / Achievements</Label>
                        <Button size="sm" variant="ghost" onClick={() => addExpBullet(exp.id)} className="h-6 text-[10px] text-blue-600">
                          <Plus className="h-3 w-3 mr-1" /> Add Bullet
                        </Button>
                      </div>
                      {exp.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1">
                          <Input value={b} onChange={e => updateExpBullet(exp.id, bIdx, e.target.value)} className="h-7 text-xs flex-1" />
                          <Button size="sm" variant="ghost" onClick={() => deleteExpBullet(exp.id, bIdx)} className="h-7 w-7 p-0 text-slate-400 hover:text-red-500">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 6. SKILLS */}
          {activeSection === "skills" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    Skills & Technical Competencies
                  </CardTitle>
                  <Button size="sm" variant="default" onClick={() => addSkill()} className="h-7 text-xs bg-blue-600">
                    <Plus className="h-3.5 w-3.5 mr-1" /> Add Skill
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.skills || "Technical Skills & Competencies"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, skills: e.target.value }
                    }))}
                    placeholder="e.g. Core Competencies / Technical Expertise"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {/* Custom Write-in Skill Input Bar */}
                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg space-y-2">
                  <Label className="text-xs font-semibold text-blue-900 flex items-center gap-1.5">
                    <Plus className="h-3.5 w-3.5 text-blue-600" /> Write & Add Custom Technical Skill:
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      value={customSkillInput}
                      onChange={e => setCustomSkillInput(e.target.value)}
                      placeholder="Type your own custom skill (e.g., SCADA Control / NABL Audit)..."
                      className="h-8 text-xs bg-white flex-1"
                      onKeyDown={e => {
                        if (e.key === "Enter" && customSkillInput.trim()) {
                          e.preventDefault();
                          addSkill(customSkillInput.trim(), customSkillLevel);
                          setCustomSkillInput("");
                          toast({ title: "Custom Skill Added!", description: `Added "${customSkillInput.trim()}"` });
                        }
                      }}
                    />
                    <Select value={customSkillLevel} onValueChange={(val: any) => setCustomSkillLevel(val)}>
                      <SelectTrigger className="w-[110px] h-8 text-xs bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      size="sm"
                      onClick={() => {
                        if (customSkillInput.trim()) {
                          addSkill(customSkillInput.trim(), customSkillLevel);
                          setCustomSkillInput("");
                          toast({ title: "Custom Skill Added!", description: `Added "${customSkillInput.trim()}"` });
                        }
                      }}
                      className="h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white shrink-0"
                    >
                      + Add
                    </Button>
                  </div>
                </div>

                {/* Quick Add Suggestions */}
                <div className="pb-2 border-b">
                  <Label className="text-[10px] font-semibold text-slate-500 mb-1 block">Quick Add Preset Skills:</Label>
                  <div className="flex flex-wrap gap-1">
                    {["Raw Milk Testing", "Gerber Fat Test", "HTST Pasteurization", "FSSAI Compliance", "ISO 22000 & HACCP", "CIP Systems", "FTIR Milk Analyzer"].map((sName) => (
                      <button
                        key={sName}
                        type="button"
                        onClick={() => addSkill(sName, "Advanced")}
                        className="text-[10px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 border border-slate-200 px-2 py-0.5 rounded font-medium"
                      >
                        + {sName}
                      </button>
                    ))}
                  </div>
                </div>

                {resumeData.skills.map((sk) => (
                  <div key={sk.id} className="flex items-center gap-2">
                    <Input 
                      value={sk.name} 
                      onChange={e => updateSkill(sk.id, "name", e.target.value)}
                      placeholder="Skill name" 
                      className="h-8 text-xs flex-1"
                    />
                    <Select value={sk.level} onValueChange={(val: any) => updateSkill(sk.id, "level", val)}>
                      <SelectTrigger className="w-[120px] h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm" variant="ghost" onClick={() => deleteSkill(sk.id)} className="h-8 w-8 p-0 text-slate-400 hover:text-red-500">
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 7. CERTIFICATIONS */}
          {activeSection === "certifications" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    Certifications & Licenses
                  </CardTitle>
                  <Button size="sm" variant="default" onClick={addCertification} className="h-7 text-xs bg-blue-600">
                    <Plus className="h-3.5 w-3.5 mr-1" /> Add Cert
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.certifications || "Certifications & Training Licenses"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, certifications: e.target.value }
                    }))}
                    placeholder="e.g. Licenses & Professional Certifications"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {/* Certifications Preset Chips */}
                <div className="pb-2 border-b">
                  <Label className="text-[10px] font-semibold text-slate-500 mb-1 block">Quick-Select Certification (or write custom certification):</Label>
                  <div className="flex flex-wrap gap-1">
                    {["FSSAI FoSTaC Manufacturing", "ISO 22000 Lead Auditor", "HACCP Level 3 Certification", "NABL Internal Auditor", "cGMP Quality Certification", "Lean Six Sigma Green Belt"].map((cName, cIdx) => (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => {
                          setResumeData(prev => ({
                            ...prev,
                            certifications: [
                              ...prev.certifications,
                              { id: `cert-${Date.now()}`, name: cName, issuer: "Certifying Body", year: "2024" }
                            ]
                          }));
                        }}
                        className="text-[10px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 border border-slate-200 px-2 py-0.5 rounded font-medium transition-all"
                      >
                        + {cName}
                      </button>
                    ))}
                  </div>
                </div>

                {resumeData.certifications.map((cert) => (
                  <div key={cert.id} className="p-3 border border-slate-200 rounded-lg space-y-2 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <Input value={cert.name} onChange={e => updateCertification(cert.id, "name", e.target.value)} placeholder="Cert Title (e.g. FoSTaC / NABL Internal Auditor)" className="h-8 text-xs font-semibold flex-1" />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500" onClick={() => deleteCertification(cert.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input value={cert.issuer} onChange={e => updateCertification(cert.id, "issuer", e.target.value)} placeholder="Issuer (FSSAI/ISO)" className="h-7 text-xs" />
                      <Input value={cert.year} onChange={e => updateCertification(cert.id, "year", e.target.value)} placeholder="Year (2023)" className="h-7 text-xs" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 8. PROJECTS */}
          {activeSection === "projects" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <FolderKanban className="h-4 w-4 text-blue-600" />
                    Projects & Research Work
                  </CardTitle>
                  <Button size="sm" variant="default" onClick={addProject} className="h-7 text-xs bg-blue-600">
                    <Plus className="h-3.5 w-3.5 mr-1" /> Add Project
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.projects || "Projects & Research Work"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, projects: e.target.value }
                    }))}
                    placeholder="e.g. Academic Projects & Publications"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {resumeData.projects.map((proj) => (
                  <div key={proj.id} className="p-3 border border-slate-200 rounded-lg space-y-2 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <Input value={proj.title} onChange={e => updateProject(proj.id, "title", e.target.value)} placeholder="Project Title" className="h-8 text-xs font-semibold flex-1" />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500" onClick={() => deleteProject(proj.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <textarea value={proj.description} onChange={e => updateProject(proj.id, "description", e.target.value)} placeholder="Project details and outcomes..." className="w-full text-xs p-2 border border-slate-200 rounded-md" />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 9. ACHIEVEMENTS */}
          {activeSection === "achievements" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-600" />
                    Honors, Awards & Extracurriculars
                  </CardTitle>
                  <Button size="sm" variant="default" onClick={addAchievement} className="h-7 text-xs bg-blue-600">
                    <Plus className="h-3.5 w-3.5 mr-1" /> Add Award
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                  <Label className="text-[11px] font-semibold text-slate-600 shrink-0">Custom Section Title Heading:</Label>
                  <Input
                    value={resumeData.customSectionTitles?.achievements || "Key Honors & Awards"}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      customSectionTitles: { ...prev.customSectionTitles, achievements: e.target.value }
                    }))}
                    placeholder="e.g. Honors, Awards & Accomplishments"
                    className="h-7 text-xs font-semibold bg-white flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {resumeData.achievements.map((ach) => (
                  <div key={ach.id} className="p-3 border border-slate-200 rounded-lg space-y-2 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <Input value={ach.title} onChange={e => updateAchievement(ach.id, "title", e.target.value)} placeholder="Award Title / Rank" className="h-8 text-xs font-semibold flex-1" />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500" onClick={() => deleteAchievement(ach.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input value={ach.organization} onChange={e => updateAchievement(ach.id, "organization", e.target.value)} placeholder="Organization / Contest" className="h-7 text-xs" />
                      <Input value={ach.year} onChange={e => updateAchievement(ach.id, "year", e.target.value)} placeholder="Year (2023)" className="h-7 text-xs" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 10. THEME, FONTS & SPACING CONTROLS */}
          {activeSection === "theme" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Palette className="h-4 w-4 text-blue-600" />
                  Theme, Layout, Fonts & Spacing Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div>
                  <Label className="text-xs font-semibold mb-2 block">Choose Primary Accent Color</Label>
                  <div className="flex flex-wrap gap-2">
                    {ACCENT_COLORS.map(c => (
                      <button
                        key={c.value}
                        onClick={() => setAccentColor(c.value)}
                        className={cn(
                          "w-8 h-8 rounded-full border-2 transition-transform",
                          c.class,
                          accentColor === c.value ? "scale-110 border-slate-900 shadow-md ring-2 ring-blue-400" : "border-transparent"
                        )}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-semibold mb-2 block">Font Family Typography</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setFontFamily("sans")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-sans font-medium", fontFamily === "sans" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Modern Sans
                    </button>
                    <button
                      onClick={() => setFontFamily("serif")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-serif font-medium", fontFamily === "serif" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Executive Serif
                    </button>
                    <button
                      onClick={() => setFontFamily("roboto")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-medium", fontFamily === "roboto" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Corporate Standard
                    </button>
                    <button
                      onClick={() => setFontFamily("mono")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-mono font-medium", fontFamily === "mono" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Technical Mono
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs font-semibold mb-1.5 block">Font Size Scale</Label>
                    <div className="flex gap-1">
                      {(["sm", "base", "lg"] as const).map(sz => (
                        <button
                          key={sz}
                          onClick={() => setFontSize(sz)}
                          className={cn(
                            "flex-1 py-1 text-xs border rounded font-medium capitalize",
                            fontSize === sz ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 border-slate-200"
                          )}
                        >
                          {sz === "sm" ? "10pt" : sz === "base" ? "11pt" : "12pt"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs font-semibold mb-1.5 block">Line Spacing / Height</Label>
                    <div className="flex gap-1">
                      {(["tight", "normal", "relaxed"] as const).map(sp => (
                        <button
                          key={sp}
                          onClick={() => setLineSpacing(sp)}
                          className={cn(
                            "flex-1 py-1 text-[11px] border rounded font-medium capitalize",
                            lineSpacing === sp ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 border-slate-200"
                          )}
                        >
                          {sp}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-semibold mb-2 block">Template Layout Style</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setTemplateLayout("modern")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-medium", templateLayout === "modern" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Modern Top Accent
                    </button>
                    <button
                      onClick={() => setTemplateLayout("classic")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-medium", templateLayout === "classic" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Classic Executive
                    </button>
                    <button
                      onClick={() => setTemplateLayout("compact")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-medium", templateLayout === "compact" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Two-Column Compact
                    </button>
                    <button
                      onClick={() => setTemplateLayout("student")}
                      className={cn("p-2 text-xs border rounded-lg text-center font-medium", templateLayout === "student" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200")}
                    >
                      Student / Academic
                    </button>
                  </div>
                </div>

                {/* Show/Hide Sections */}
                <div>
                  <Label className="text-xs font-semibold mb-2 block">Show / Hide Sections</Label>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {Object.entries(resumeData.sectionVisibility).map(([sKey, isVisible]) => (
                      <label key={sKey} className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isVisible}
                          onChange={() => toggleSectionVisibility(sKey as any)}
                          className="rounded text-blue-600"
                        />
                        <span className="capitalize text-slate-700 font-medium">{sKey}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-semibold">Languages Spoken (Comma Separated or Click Quick Chips)</Label>
                  <Input 
                    value={resumeData.languages.join(", ")}
                    onChange={e => handleLanguagesChange(e.target.value)}
                    placeholder="English, Hindi, Gujarati..."
                    className="h-8 text-xs mt-1"
                  />
                  <div className="flex flex-wrap gap-1 pt-1.5">
                    {["English", "Hindi", "Gujarati", "Punjabi", "Marathi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali"].map((langName) => (
                      <button
                        key={langName}
                        type="button"
                        onClick={() => {
                          if (!resumeData.languages.includes(langName)) {
                            setResumeData(prev => ({ ...prev, languages: [...prev.languages, langName] }));
                          }
                        }}
                        className="text-[10px] bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 border border-slate-200 px-2 py-0.5 rounded font-medium transition-all"
                      >
                        + {langName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DECLARATION WRITE-IN */}
                <div className="pt-2 border-t border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-semibold text-slate-800">Resume Declaration Statement</Label>
                    <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={resumeData.declaration.enabled}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          declaration: { ...prev.declaration, enabled: e.target.checked }
                        }))}
                        className="rounded text-blue-600"
                      />
                      <span>Show Declaration</span>
                    </label>
                  </div>
                  {resumeData.declaration.enabled && (
                    <div className="space-y-2">
                      <textarea
                        value={resumeData.declaration.text}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          declaration: { ...prev.declaration, text: e.target.value }
                        }))}
                        placeholder="Type custom declaration text..."
                        rows={2}
                        className="w-full text-xs p-2 border border-slate-200 rounded-md"
                      />
                      <div>
                        <Label className="text-[11px] text-slate-600">Declaration Place / City</Label>
                        <Input
                          value={resumeData.declaration.place}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            declaration: { ...prev.declaration, place: e.target.value }
                          }))}
                          placeholder="e.g. Anand, Gujarat / Ludhiana"
                          className="h-7 text-xs mt-0.5"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 11. PROFESSIONAL TOOL: ATS JOB DESCRIPTION SCANNER */}
          {activeSection === "ats_scanner" && (
            <Card className="border-indigo-200 shadow-sm bg-slate-50/50">
              <CardHeader className="p-4 bg-indigo-900 text-white rounded-t-xl">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Target className="h-4 w-4 text-emerald-400" />
                  ATS Job Description Keyword Matcher
                </CardTitle>
                <CardDescription className="text-indigo-200 text-xs">
                  Paste the target Job Description (JD) below to compare keywords in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div>
                  <Label className="text-xs font-semibold mb-1 block">Paste Job Description (JD) Text:</Label>
                  <textarea
                    value={jdText}
                    onChange={e => setJdText(e.target.value)}
                    placeholder="Paste the requirements, responsibilities, or skills required in the job posting..."
                    rows={5}
                    className="w-full text-xs p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-xs font-bold text-slate-800">Job Description Match Score:</span>
                    <Badge className={cn(
                      "font-extrabold text-xs px-2.5 py-0.5",
                      atsJdAnalysis.matchScore >= 70 ? "bg-emerald-600 text-white" : atsJdAnalysis.matchScore >= 40 ? "bg-amber-600 text-white" : "bg-slate-600 text-white"
                    )}>
                      {atsJdAnalysis.matchScore}% Match
                    </Badge>
                  </div>

                  {/* Matched Keywords */}
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mb-1">
                      ✓ Found in Your Resume ({atsJdAnalysis.matched.length}):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {atsJdAnalysis.matched.length > 0 ? (
                        atsJdAnalysis.matched.map(kw => (
                          <Badge key={kw} variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-300 text-[10px]">
                            ✓ {kw}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-[11px] text-slate-400 italic">No matching technical keywords found yet.</span>
                      )}
                    </div>
                  </div>

                  {/* Missing Keywords */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-amber-800 block mb-1">
                      ⚡ Missing Technical Keywords (Click to Add to Skills):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {atsJdAnalysis.missing.map(kw => (
                        <button
                          key={kw}
                          onClick={() => addMissingKeywordToSkills(kw)}
                          className="text-[10px] bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded flex items-center gap-1 font-medium"
                        >
                          + {kw}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 12. PROFESSIONAL TOOL: ACTION VERBS ASSISTANT */}
          {activeSection === "action_verbs" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-500" />
                  Action Verbs & Vocabulary Assistant
                </CardTitle>
                <CardDescription className="text-xs text-slate-500">
                  Strong action verbs at the beginning of bullet points increase ATS parser ranking and impact.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {Object.entries(ACTION_VERBS_LIBRARY).map(([catKey, verbs]) => (
                  <div key={catKey} className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700 capitalize flex items-center gap-1">
                      <ChevronRight className="h-3 w-3 text-blue-600" />
                      {catKey.replace("_", " & ")} Verbs:
                    </Label>
                    <div className="flex flex-wrap gap-1.5">
                      {verbs.map(verb => (
                        <button
                          key={verb}
                          onClick={() => {
                            navigator.clipboard.writeText(verb);
                            toast({ title: `Verb Copied!`, description: `"${verb}" copied to clipboard.` });
                          }}
                          className="text-xs bg-slate-100 hover:bg-blue-600 hover:text-white border border-slate-200 px-2.5 py-1 rounded font-medium transition-all"
                        >
                          {verb}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 13. PROFESSIONAL TOOL: COVER LETTER BUILDER */}
          {activeSection === "cover_letter" && (
            <Card className="border-blue-200 shadow-sm bg-blue-50/30">
              <CardHeader className="p-4 bg-blue-900 text-white rounded-t-xl">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-300" />
                  Professional Cover Letter Builder
                </CardTitle>
                <CardDescription className="text-blue-200 text-xs">
                  Generates a formal, tailored cover letter using your resume details.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Target Company / Union Name</Label>
                    <Input 
                      value={coverTargetCompany} 
                      onChange={e => setCoverTargetCompany(e.target.value)} 
                      placeholder="e.g. Amul / Mother Dairy"
                      className="bg-white text-xs"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Recipient Manager Title</Label>
                    <Input 
                      value={coverRecipientTitle} 
                      onChange={e => setCoverRecipientTitle(e.target.value)} 
                      placeholder="e.g. Hiring Manager"
                      className="bg-white text-xs"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label className="text-xs font-semibold">Generated Cover Letter Preview:</Label>
                    <Button size="sm" variant="outline" onClick={copyCoverLetter} className="h-7 text-xs bg-white">
                      <Copy className="h-3 w-3 mr-1" /> Copy Text
                    </Button>
                  </div>
                  <textarea
                    value={generatedCoverLetter}
                    readOnly
                    rows={12}
                    className="w-full text-xs p-3 font-mono border border-slate-300 rounded-md bg-white text-slate-800 leading-relaxed"
                  />
                </div>
              </CardContent>
            </Card>
          )}

        </div>

        {/* RIGHT COLUMN: LIVE A4 PRINTABLE PREVIEW & DENSITY INDICATOR */}
        <div className={cn(
          "lg:col-span-7 flex flex-col items-center print:block print:w-full print:static",
          activeViewTab === "edit" ? "hidden lg:flex" : "flex"
        )}>

          {/* PRINT & PDF STYLES INJECTION */}
          <style>{`
            @media print {
              @page {
                size: A4 portrait;
                margin: 0mm;
              }
              /* Explicitly hide non-printable UI elements */
              .print\\:hidden, header, footer, nav, button, input, select, textarea {
                display: none !important;
              }
              /* Ensure parent layout containers remain visible and unclipped */
              html, body, main, div, section {
                background: #ffffff !important;
                box-shadow: none !important;
                visibility: visible !important;
              }
              #resume-a4-preview {
                display: block !important;
                visibility: visible !important;
                position: relative !important;
                top: 0 !important;
                left: 0 !important;
                width: 210mm !important;
                min-height: 297mm !important;
                margin: 0 auto !important;
                padding: 15mm 18mm !important;
                box-shadow: none !important;
                border: none !important;
                color: #000000 !important;
              }
              #resume-a4-preview * {
                visibility: visible !important;
              }
              /* Prevent font clipping and middle-of-line page cuts */
              h1, h2, h3, h4, p, li, .space-y-2, .space-y-3, .mb-5 {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
              }
            }
          `}</style>

          {/* A4 Page Status & Density Banner */}
          <div className="w-full max-w-[210mm] mb-3 p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs print:hidden shadow-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <span className="font-bold text-slate-800">A4 Document Format:</span>
              <span className="text-slate-600">210mm × 297mm (Standard Print Ready)</span>
            </div>
            <Badge variant="outline" className="bg-white border-slate-300 text-slate-700 font-semibold text-[11px]">
              High-Res 300 DPI Export
            </Badge>
          </div>

          <div className="w-full overflow-x-auto flex justify-center pb-8">
            <div 
              id="resume-a4-preview"
              ref={previewRef}
              className={cn(
                "bg-white text-slate-900 shadow-xl border border-slate-300 relative box-border transition-all",
                fontFamily === "serif" ? "font-serif" : fontFamily === "roboto" ? "font-sans" : fontFamily === "mono" ? "font-mono" : "font-sans"
              )}
              style={{
                width: "210mm",
                minHeight: "297mm",
                padding: pageMargin === "compact" ? "12mm 14mm" : pageMargin === "wide" ? "20mm 22mm" : "16mm 18mm",
                fontSize: fontSize === "sm" ? "10px" : fontSize === "lg" ? "12px" : "11px",
                lineHeight: lineSpacing === "tight" ? "1.3" : lineSpacing === "relaxed" ? "1.6" : "1.45"
              }}
            >
              {/* HEADER SECTION */}
              <div 
                className="pb-4 border-b-2 mb-5 flex items-start justify-between gap-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex-1 space-y-2">
                  <h1 
                    className="text-2xl font-extrabold uppercase tracking-wide"
                    style={{ color: accentColor }}
                  >
                    {resumeData.personal.fullName || "YOUR FULL NAME"}
                  </h1>
                  <p className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                    {resumeData.personal.jobTitle || "TARGET JOB TITLE"}
                  </p>

                  {/* CONTACT DETAILS LINE */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] text-slate-600 font-medium pt-1">
                    {resumeData.personal.email && (
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" style={{ color: accentColor }} />
                        {resumeData.personal.email}
                      </span>
                    )}
                    {resumeData.personal.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" style={{ color: accentColor }} />
                        {resumeData.personal.phone}
                      </span>
                    )}
                    {resumeData.personal.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" style={{ color: accentColor }} />
                        {resumeData.personal.location}
                      </span>
                    )}
                    {resumeData.personal.linkedin && (
                      <span className="flex items-center gap-1">
                        <Linkedin className="h-3 w-3" style={{ color: accentColor }} />
                        {resumeData.personal.linkedin}
                      </span>
                    )}
                    {resumeData.personal.website && (
                      <span className="flex items-center gap-1">
                        <Globe className="h-3 w-3" style={{ color: accentColor }} />
                        {resumeData.personal.website}
                      </span>
                    )}
                  </div>
                </div>

                {/* OPTIONAL PASSPORT CANDIDATE PHOTO */}
                {resumeData.personal.photoUrl && (
                  <div 
                    className="shrink-0 border-2 rounded-md overflow-hidden bg-slate-100 shadow-xs"
                    style={{ borderColor: accentColor, width: "24mm", height: "28mm" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={resumeData.personal.photoUrl} 
                      alt={resumeData.personal.fullName || "Candidate Photo"} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}
              </div>

              {/* SUMMARY SECTION */}
              {resumeData.sectionVisibility.summary && resumeData.personal.summary && (
                <div className="mb-5 space-y-1.5">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <FileText className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.summary || "Professional Summary"}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-justify">
                    {resumeData.personal.summary}
                  </p>
                </div>
              )}

              {/* EDUCATION SECTION (Prioritized for Students) */}
              {resumeData.sectionVisibility.education && resumeData.userMode === "student" && resumeData.education.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <GraduationCap className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.education || "Education & Academic Qualifications"}
                  </h3>
                  <div className="space-y-2">
                    {resumeData.education.map(edu => (
                      <div key={edu.id} className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-slate-900">{edu.degree}</div>
                          <div className="text-slate-700 italic">{edu.institution}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-800">{edu.year}</div>
                          {edu.grade && <div className="text-[10px] font-bold text-blue-800">{edu.grade}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* INTERNSHIPS (Prioritized for Students) */}
              {resumeData.sectionVisibility.internships && resumeData.userMode === "student" && resumeData.internships.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <Building2 className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.internships || "Industrial Training & Summer Internships"}
                  </h3>
                  <div className="space-y-3">
                    {resumeData.internships.map(int => (
                      <div key={int.id} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-slate-900">{int.role} — <span className="font-semibold text-slate-700">{int.company}</span></span>
                          <span className="text-[10.5px] font-medium text-slate-600">{int.duration}</span>
                        </div>
                        {int.bullets.length > 0 && (
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                            {int.bullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WORK EXPERIENCE (Prioritized for Experienced) */}
              {resumeData.sectionVisibility.experience && resumeData.experiences.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <Briefcase className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.experience || "Professional Work History"}
                  </h3>
                  <div className="space-y-3.5">
                    {resumeData.experiences.map(exp => (
                      <div key={exp.id} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <div>
                            <span className="font-bold text-slate-900">{exp.designation}</span>
                            <span className="text-slate-600 font-medium"> | {exp.company}</span>
                            {exp.location && <span className="text-slate-500 text-[10px]"> ({exp.location})</span>}
                          </div>
                          <span className="text-[10.5px] font-medium text-slate-600">
                            {exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
                          </span>
                        </div>
                        {exp.bullets.length > 0 && (
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                            {exp.bullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EDUCATION SECTION (For Experienced Mode) */}
              {resumeData.sectionVisibility.education && resumeData.userMode !== "student" && resumeData.education.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <GraduationCap className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.education || "Education & Qualifications"}
                  </h3>
                  <div className="space-y-2">
                    {resumeData.education.map(edu => (
                      <div key={edu.id} className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-slate-900">{edu.degree}</div>
                          <div className="text-slate-700 italic">{edu.institution}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-800">{edu.year}</div>
                          {edu.grade && <div className="text-[10px] font-bold text-blue-800">{edu.grade}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SKILLS SECTION */}
              {resumeData.sectionVisibility.skills && resumeData.skills.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <Sparkles className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.skills || "Technical Skills & Competencies"}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {resumeData.skills.map(sk => (
                      <span 
                        key={sk.id}
                        className="px-2.5 py-0.5 rounded font-medium border text-slate-800"
                        style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}30` }}
                      >
                        {sk.name} {sk.level && <span className="text-[9px] text-slate-500 font-normal">({sk.level})</span>}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CERTIFICATIONS SECTION */}
              {resumeData.sectionVisibility.certifications && resumeData.certifications.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <Award className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.certifications || "Certifications & Training Licenses"}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {resumeData.certifications.map(cert => (
                      <div key={cert.id} className="border-l-2 pl-2 space-y-0.5" style={{ borderColor: accentColor }}>
                        <div className="font-bold text-slate-900">{cert.name}</div>
                        <div className="text-[10px] text-slate-600">{cert.issuer} {cert.year && `(${cert.year})`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROJECTS SECTION */}
              {resumeData.sectionVisibility.projects && resumeData.projects.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <FolderKanban className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.projects || "Projects & Research Work"}
                  </h3>
                  <div className="space-y-2">
                    {resumeData.projects.map(proj => (
                      <div key={proj.id}>
                        <div className="font-bold text-slate-900">{proj.title}</div>
                        <p className="text-slate-700">{proj.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACHIEVEMENTS & AWARDS */}
              {resumeData.sectionVisibility.achievements && resumeData.achievements.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h3 
                    className="text-xs font-extrabold uppercase tracking-wider border-b pb-1 flex items-center gap-1.5"
                    style={{ color: accentColor, borderColor: `${accentColor}40` }}
                  >
                    <Star className="h-3.5 w-3.5" /> {resumeData.customSectionTitles?.achievements || "Key Honors & Awards"}
                  </h3>
                  <div className="space-y-1">
                    {resumeData.achievements.map(ach => (
                      <div key={ach.id} className="flex justify-between items-baseline text-slate-800">
                        <span className="font-semibold">🏆 {ach.title} ({ach.organization})</span>
                        <span className="text-[10px] text-slate-600">{ach.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LANGUAGES & DECLARATION */}
              {(resumeData.languages.length > 0 || (resumeData.sectionVisibility.declaration && resumeData.declaration.enabled)) && (
                <div className="pt-3 border-t text-[10px] text-slate-600 space-y-2">
                  {resumeData.languages.length > 0 && (
                    <div>
                      <span className="font-bold text-slate-800">Languages Known: </span>
                      {resumeData.languages.join(", ")}
                    </div>
                  )}

                  {resumeData.sectionVisibility.declaration && resumeData.declaration.enabled && (
                    <div className="space-y-1 pt-1">
                      <p className="italic">{resumeData.declaration.text || "I hereby declare that all particulars stated above are true to the best of my knowledge."}</p>
                      <div className="flex justify-between font-medium pt-1">
                        <span>Place: {resumeData.declaration.place || "India"}</span>
                        <span>Signature: {resumeData.personal.fullName}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* FOOTER BRAND STAMP */}
              <div className="mt-8 pt-3 border-t border-slate-200 flex justify-between items-center text-[9.5px] text-slate-500 font-semibold uppercase tracking-wider">
                <span>Verified CV Document</span>
                <span className="font-bold tracking-widest text-slate-600">
                  POWERED BY DAIRY HUB ERP SYSTEM
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
