"use client";

import React, { useState, useRef, useMemo } from "react";
import { 
  Printer, Download, FileText, Building2, MapPin, Calendar, 
  Plus, Trash2, CheckCircle, Info, Loader2, FileDown,
  User, Mail, Phone, Globe, Linkedin, Briefcase, GraduationCap,
  Award, Sparkles, FolderKanban, Languages, Layout, Palette,
  Upload, Eye, Edit3, ArrowLeft, RefreshCw, FileJson, Save, FolderOpen,
  ChevronDown, Check, Star, Lightbulb, Zap, CheckSquare, ShieldCheck,
  BookOpen, HelpCircle, Layers, Settings, ChevronRight
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
  current: boolean;
  bullets: string[];
}

export interface InternshipItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  duration: string;
  learnings: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  validUntil: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  description: string;
  keyOutcome: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
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
    languages: boolean;
    declaration: boolean;
  };
}

// Color schemes
const ACCENT_COLORS = [
  { name: "Navy Blue", value: "#1e3a8a", class: "bg-blue-900" },
  { name: "Emerald Green", value: "#047857", class: "bg-emerald-700" },
  { name: "Slate Grey", value: "#334155", class: "bg-slate-700" },
  { name: "Royal Purple", value: "#581c87", class: "bg-purple-900" },
  { name: "Burgundy", value: "#881337", class: "bg-rose-900" },
  { name: "Ocean Teal", value: "#0f766e", class: "bg-teal-700" },
  { name: "Dark Charcoal", value: "#18181b", class: "bg-zinc-900" },
  { name: "Warm Amber", value: "#b45309", class: "bg-amber-700" },
];

// Pre-written High-Impact Bullet Points Library
const BULLET_LIBRARY = {
  qa_qc: [
    "Executed daily Gerber fat testing, SNF estimation, MBRT, and adulterant screening for raw milk reception.",
    "Operated and calibrated lab instruments including pH meters, FTIR MilkoScan analyzers, and auto-titrators per SOP.",
    "Maintained batch release registers and generated Certificates of Analysis (COA) for commercial dispatches.",
    "Participated in internal quality audits for ISO 22000, HACCP, NABL ISO/IEC 17025, and FSSAI compliance.",
    "Conducted microbiological plating (SPC, Coliform, Yeast & Mold) for equipment swabs and finished products."
  ],
  production: [
    "Supervised daily operations of HTST pasteurizers, homogenizers, and milk packaging lines.",
    "Executed automated CIP (Clean-In-Place) sanitation cycles, reducing chemical consumption by 12%.",
    "Calculated shift milk mass balance and fat/SNF yield losses, keeping processing losses under 1.0%.",
    "Managed shift operators and safety protocols in compliance with plant EHS and GMP guidelines.",
    "Coordinated with maintenance team for scheduled PM routines to minimize unplanned downtime."
  ],
  student_internship: [
    "Completed 6-month in-plant industrial training at commercial dairy plant, gaining hands-on exposure to dock reception and processing lines.",
    "Assisted Quality Control team in daily platform testing of milk tankers and packaging defect inspection.",
    "Executed final year dissertation project titled 'Evaluation of Shelf Life Extension in Pasteurised Milk using Natural Antimicrobials'.",
    "Coordinated department technical symposium and led a team of student volunteers.",
    "Secured 1st Rank in Departmental Technical Quiz on Food Safety Regulations & BIS Standards."
  ],
  general_admin: [
    "Managed client communications, documentation, record keeping, and weekly progress reporting.",
    "Implemented digital inventory tracking system, increasing record retrieval speed by 30%.",
    "Collaborated with cross-functional teams to ensure timely execution of operational deliverables.",
    "Organized administrative schedules, meetings, and official vendor correspondence."
  ]
};

// Sample Presets
const PRESETS: Record<string, { title: string; subtitle: string; mode: "student" | "experienced"; data: ResumeData }> = {
  student_fresher: {
    title: "Student / Fresh Graduate (Dairy / Food Tech / B.Sc)",
    subtitle: "Best for Internships & Entry-Level Job Seekers",
    mode: "student",
    data: {
      userMode: "student",
      personal: {
        fullName: "Aniket Patel",
        jobTitle: "Dairy Technology Graduate / Trainee Chemist",
        email: "aniket.patel@gmail.com",
        phone: "+91 98765 12345",
        location: "Anand, Gujarat, India",
        linkedin: "linkedin.com/in/aniket-patel-dairy",
        website: "aniket-portfolio.com",
        photoUrl: "",
        summary: "Enthusiastic Dairy Technology Graduate (B.Tech) with hands-on in-plant training experience at Amul Dairy. Proficient in milk platform testing (Gerber fat, SNF, acidity), pasteurization operations, and FSSAI basic food safety standards. Eager to contribute as a Quality Trainee / Production Executive."
      },
      experiences: [],
      internships: [
        {
          id: "intern-1",
          title: "In-Plant Industrial Trainee",
          organization: "Kaira District Co-op Milk Producers' Union (Amul)",
          location: "Anand, Gujarat",
          duration: "Jan 2024 – Jun 2024 (6 Months)",
          learnings: [
            "Gained hands-on experience in raw milk dock reception, platform testing (MBRT, alcohol, adulteration detection).",
            "Observed HTST pasteurization, milk pouch packaging machine calibration, and CIP cleaning cycles.",
            "Prepared daily quality reports and logged CIP chemical titration values under QA Chemist supervision."
          ]
        }
      ],
      education: [
        {
          id: "edu-1",
          degree: "B.Tech in Dairy Technology",
          field: "Dairy Science & Technology",
          institution: "College of Dairy Science & Technology (AAU)",
          location: "Anand, Gujarat",
          year: "2020 – 2024",
          grade: "8.45 / 10.0 CGPA"
        },
        {
          id: "edu-2",
          degree: "Higher Secondary (12th Science)",
          field: "PCM (Physics, Chemistry, Maths)",
          institution: "Gujarat State Board School",
          location: "Anand, Gujarat",
          year: "2020",
          grade: "88.5%"
        }
      ],
      skills: [
        { id: "sk-1", name: "Raw Milk Platform Testing", category: "Lab Testing", level: "Advanced" },
        { id: "sk-2", name: "Gerber Fat & SNF Estimation", category: "Lab Testing", level: "Expert" },
        { id: "sk-3", name: "HTST Pasteurization Basics", category: "Processing", level: "Intermediate" },
        { id: "sk-4", name: "FSSAI & FoSTaC Standards", category: "Food Safety", level: "Advanced" },
        { id: "sk-5", name: "MS Office & Data Logging", category: "IT Skills", level: "Advanced" }
      ],
      certifications: [
        { id: "cert-1", name: "FoSTaC Certified Food Safety Supervisor", issuer: "FSSAI", year: "2023", validUntil: "2028" }
      ],
      projects: [
        {
          id: "proj-1",
          title: "B.Tech Research Dissertation Project",
          role: "Student Researcher",
          description: "Studied the effect of herbal extracts on shelf-life extension of pasteurized milk under refrigerated storage.",
          keyOutcome: "Published paper in College Annual Research Bulletin & awarded Best Project."
        }
      ],
      achievements: [
        {
          id: "ach-1",
          title: "1st Rank - All India Dairy Quiz Competition",
          organization: "Indian Dairy Association (IDA)",
          year: "2023",
          description: "Stood first among 40 participating college teams across India."
        }
      ],
      languages: ["English (Professional)", "Hindi (Fluent)", "Gujarati (Native)"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all the details provided above are true to the best of my knowledge.",
        place: "Anand, Gujarat"
      },
      sectionVisibility: {
        summary: true,
        experience: false,
        internships: true,
        education: true,
        skills: true,
        certifications: true,
        projects: true,
        achievements: true,
        languages: true,
        declaration: true
      }
    }
  },
  dairy_qa: {
    title: "Dairy QA / QC Specialist Resume",
    subtitle: "For Experienced Quality Chemists & Lab Analysts",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Rahul Sharma",
        jobTitle: "Senior Dairy QA/QC Executive & Lab Specialist",
        email: "rahul.sharma@dairyhub.org",
        phone: "+91 98765 43210",
        location: "Anand, Gujarat, India",
        linkedin: "linkedin.com/in/rahul-dairy-qa",
        website: "dairyhub-qa-portfolio.com",
        photoUrl: "",
        summary: "Results-driven Dairy Quality Assurance Specialist with 6+ years of experience in chemical & microbiological testing of milk & milk products (Milk, Butter, Ghee, Cheese, WMP, SMP). Proficient in FSSAI regulations, ISO 22000, HACCP, NABL accreditation, and lab instrumentation (FTIR Milk Analyzer, HPLC, Auto-Titrator)."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Senior Quality Assurance Executive",
          company: "Amul Dairy Federation / Mother Dairy",
          location: "Anand, Gujarat",
          startDate: "06/2021",
          endDate: "Present",
          current: true,
          bullets: [
            "Lead raw milk platform testing (MBRT, Clot-on-Boiling, Alcohol Test, Adulterant Detection for Urea, Starch, Detergent).",
            "Supervise Daily Chemical & Microbiological analysis of finished goods ensuring compliance with FSSAI & BIS standards.",
            "Managed successful NABL audit ISO/IEC 17025:2017 renewal with zero major non-conformities.",
            "Implemented automated CIP titrations reducing chemical wastage by 14% across plant processing lines."
          ]
        },
        {
          id: "exp-2",
          designation: "Quality Control Lab Chemist",
          company: "Heritage Foods Limited",
          location: "Hyderabad, India",
          startDate: "07/2018",
          endDate: "05/2021",
          current: false,
          bullets: [
            "Conducted moisture, fat (Gerber method), SNF, acidity, FFA, peroxide value, and RM/PV tests on butter & ghee batches.",
            "Prepared standardized laboratory reagents, volumetric solutions, and calibrated digital pH meters.",
            "Maintained batch release registers, COA generation, and SAP QM module entries."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "B.Tech in Dairy Technology",
          field: "Dairy Science & Food Technology",
          institution: "College of Dairy Science & Technology (AAU)",
          location: "Anand, Gujarat",
          year: "2018",
          grade: "8.6 / 10 CGPA"
        }
      ],
      skills: [
        { id: "sk-1", name: "Raw Milk Platform Testing", category: "Lab Testing", level: "Expert" },
        { id: "sk-2", name: "Gerber Fat & SNF Testing", category: "Lab Testing", level: "Expert" },
        { id: "sk-3", name: "RM & Polenske Value (Ghee)", category: "Lab Testing", level: "Advanced" },
        { id: "sk-4", name: "FSSAI & BIS Standards", category: "Compliance", level: "Expert" },
        { id: "sk-5", name: "ISO 22000 & HACCP", category: "Quality Systems", level: "Advanced" },
        { id: "sk-6", name: "FTIR Lactoscan / MilkoScan", category: "Instruments", level: "Expert" }
      ],
      certifications: [
        { id: "cert-1", name: "FOSTAC Certified Food Safety Supervisor", issuer: "FSSAI India", year: "2022", validUntil: "2027" },
        { id: "cert-2", name: "Internal Auditor ISO/IEC 17025:2017", issuer: "NABL / TUV SUD", year: "2021", validUntil: "Lifetime" }
      ],
      projects: [
        {
          id: "proj-1",
          title: "Adulteration Prevention Protocol Development",
          role: "Lead Quality Executive",
          description: "Developed rapid chemical strip test screening method for detecting synthetic milk adulterants at milk collection centers.",
          keyOutcome: "Zero adulterated raw milk tankers entered plant processing in FY 2022-23."
        }
      ],
      achievements: [],
      languages: ["English (Professional)", "Hindi (Fluent)", "Gujarati (Native)"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all the information provided above is true and accurate to the best of my knowledge.",
        place: "Anand, Gujarat"
      },
      sectionVisibility: {
        summary: true,
        experience: true,
        internships: false,
        education: true,
        skills: true,
        certifications: true,
        projects: true,
        achievements: false,
        languages: true,
        declaration: true
      }
    }
  },
  plant_manager: {
    title: "Dairy Plant & Production Manager Resume",
    subtitle: "For Operations, Production & Shift Managers",
    mode: "experienced",
    data: {
      userMode: "experienced",
      personal: {
        fullName: "Priya Verma",
        jobTitle: "Dairy Plant Processing Manager",
        email: "priya.verma@dairyhub.org",
        phone: "+91 91234 56789",
        location: "Karnal, Haryana, India",
        linkedin: "linkedin.com/in/priya-verma-dairy",
        website: "",
        photoUrl: "",
        summary: "Dynamic Dairy Production Manager with 8+ years of expertise in liquid milk processing, HTST pasteurization, milk powder manufacturing (Spray Drying), CIP automation, mass balance tracking, and yield optimization."
      },
      experiences: [
        {
          id: "exp-1",
          designation: "Plant Operations Manager",
          company: "Verka Dairy Industries",
          location: "Karnal, Haryana",
          startDate: "01/2020",
          endDate: "Present",
          current: true,
          bullets: [
            "Manage daily operations of 500,000 Liters/day milk processing plant, homogenizer, and packaging section.",
            "Reduced milk processing losses from 1.8% to 0.95% through automated mass balance and leak audit protocols.",
            "Supervise shift engineers, operators, and safety protocols adhering to OHSAS & FSSAI."
          ]
        }
      ],
      internships: [],
      education: [
        {
          id: "edu-1",
          degree: "M.Tech in Dairy Engineering",
          field: "Dairy & Food Process Engineering",
          institution: "National Dairy Research Institute (NDRI)",
          location: "Karnal, Haryana",
          year: "2016",
          grade: "1st Class Distinction"
        }
      ],
      skills: [
        { id: "sk-1", name: "HTST Pasteurization & Homogenization", category: "Plant Ops", level: "Expert" },
        { id: "sk-2", name: "Evaporator & Spray Dryer Ops", category: "Processing", level: "Advanced" },
        { id: "sk-3", name: "Mass & Fat Balance Calculations", category: "Yield Control", level: "Expert" },
        { id: "sk-4", name: "Automated CIP System Management", category: "Sanitation", level: "Expert" }
      ],
      certifications: [
        { id: "cert-1", name: "Certified HACCP Lead Auditor", issuer: "DNV GL", year: "2019", validUntil: "2025" }
      ],
      projects: [],
      achievements: [],
      languages: ["English", "Hindi", "Punjabi"],
      declaration: {
        enabled: true,
        text: "I hereby confirm the accuracy of the statements made in this document.",
        place: "Karnal, Haryana"
      },
      sectionVisibility: {
        summary: true,
        experience: true,
        internships: false,
        education: true,
        skills: true,
        certifications: true,
        projects: false,
        achievements: false,
        languages: true,
        declaration: true
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

  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        languages: true,
        declaration: true
      }
    });
    toast({
      title: "Cleared Form",
      description: "You can now build your resume from scratch.",
    });
  };

  // Handlers for Personal Info
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
      designation: "Quality Chemist",
      company: "Dairy / Food Company Name",
      location: "City, State",
      startDate: "2022",
      endDate: "Present",
      current: true,
      bullets: ["Executed Gerber fat test, SNF estimation, and dock platform testing."]
    };
    setResumeData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newItem]
    }));
  };

  const updateExperience = (id: string, field: keyof ExperienceItem, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const deleteExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
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
      id: `intern-${Date.now()}`,
      title: "Industrial Trainee / Intern",
      organization: "Company / Plant Name",
      location: "City, State",
      duration: "Jan 2024 - Jun 2024",
      learnings: ["Gained hands-on training in plant operations and QA testing."]
    };
    setResumeData(prev => ({
      ...prev,
      internships: [...prev.internships, newItem]
    }));
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
      degree: "Bachelor of Technology",
      field: "Dairy / Food Technology",
      institution: "College / University Name",
      location: "City, State",
      year: "2024",
      grade: "8.5 CGPA"
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newItem]
    }));
  };

  const updateEducation = (id: string, field: keyof EducationItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    }));
  };

  const deleteEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  // Handlers for Skills
  const addSkill = (name = "New Skill", level: any = "Advanced") => {
    const newItem: SkillItem = {
      id: `sk-${Date.now()}`,
      name,
      category: "Technical",
      level
    };
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, newItem]
    }));
  };

  const updateSkill = (id: string, field: keyof SkillItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(sk => sk.id === id ? { ...sk, [field]: value } : sk)
    }));
  };

  const deleteSkill = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(sk => sk.id !== id)
    }));
  };

  // Handlers for Certifications
  const addCertification = () => {
    const newItem: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: "Certification Title",
      issuer: "Issuing Organization (FSSAI / ISO / NABL)",
      year: "2023",
      validUntil: "Lifetime"
    };
    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newItem]
    }));
  };

  const updateCertification = (id: string, field: keyof CertificationItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert => cert.id === id ? { ...cert, [field]: value } : cert)
    }));
  };

  const deleteCertification = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  // Handlers for Projects
  const addProject = () => {
    const newItem: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: "Project / Research Title",
      role: "Lead Student / Chemist",
      description: "Brief summary of project objectives, methodology, and outcome.",
      keyOutcome: "Key result achieved."
    };
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, newItem]
    }));
  };

  const updateProject = (id: string, field: keyof ProjectItem, value: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj => proj.id === id ? { ...proj, [field]: value } : proj)
    }));
  };

  const deleteProject = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  // Handlers for Achievements
  const addAchievement = () => {
    const newItem: AchievementItem = {
      id: `ach-${Date.now()}`,
      title: "Award / Honor / Rank",
      organization: "Issuing College / Organization",
      year: "2023",
      description: "Brief details of award or competition."
    };
    setResumeData(prev => ({
      ...prev,
      achievements: [...prev.achievements, newItem]
    }));
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

  // Export & Import JSON
  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumeData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${resumeData.personal.fullName.replace(/\s+/g, "_") || "My"}_Resume_Data.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && parsed.personal) {
            setResumeData(parsed);
            toast({
              title: "Import Successful",
              description: "Resume data imported successfully into editor.",
            });
          }
        } catch (err) {
          toast({
            title: "Import Failed",
            description: "Invalid JSON resume format.",
            variant: "destructive"
          });
        }
      };
    }
  };

  // Print PDF via Browser Print
  const handlePrint = () => {
    window.print();
  };

  // Direct PDF Download via html2canvas & jsPDF
  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    setIsDownloading(true);
    toast({
      title: "Rendering High-Quality PDF...",
      description: "Generating your A4 document. Please wait a few seconds.",
    });

    try {
      const element = previewRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff"
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 5) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      const fileName = `${resumeData.personal.fullName || "Resume"}_CV.pdf`.replace(/\s+/g, "_");
      pdf.save(fileName);

      toast({
        title: "PDF Saved Successfully!",
        description: `Saved ${fileName}`,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "PDF Render Fallback",
        description: "Opening print preview dialog.",
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">For Students & Experienced Pros</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Build ATS-friendly, multi-page A4 resumes with pre-written bullet suggestions, instant sample presets, and customizable sections.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Preset Selector */}
          <Select onValueChange={handleLoadPreset}>
            <SelectTrigger className="w-[190px] h-9 text-xs font-semibold">
              <SelectValue placeholder="Load Sample Resume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student_fresher">🎓 Student / Fresh Graduate</SelectItem>
              <SelectItem value="dairy_qa">🧪 Dairy QA/QC Specialist</SelectItem>
              <SelectItem value="plant_manager">🏭 Dairy Plant Manager</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" onClick={handleResetBlank} className="h-9 text-xs">
            <RefreshCw className="h-3.5 w-3.5 mr-1" /> Reset
          </Button>

          <Button variant="outline" size="sm" onClick={exportJSON} className="h-9 text-xs">
            <Save className="h-3.5 w-3.5 mr-1" /> Save JSON
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => fileInputRef.current?.click()} 
            className="h-9 text-xs"
          >
            <FolderOpen className="h-3.5 w-3.5 mr-1" /> Load JSON
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept=".json" 
              onChange={importJSON} 
            />
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

      {/* USER MODE SELECTOR & STRENGTH METER BAR */}
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

        {/* LEFT COLUMN: EDITOR FORM */}
        <div className="lg:col-span-5 space-y-4 print:hidden">

          {/* Section Selector Dropdown */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Layout className="h-4 w-4 text-blue-600" />
                  Edit Section
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
                  <SelectItem value="theme">🎨 10. Styling, Colors & Sections</SelectItem>
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
                    placeholder="e.g. Dairy Technology Graduate / QA Executive"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Email Address *</Label>
                    <Input 
                      value={resumeData.personal.email} 
                      onChange={e => handlePersonalChange("email", e.target.value)} 
                      placeholder="aniket@example.com"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Phone Number *</Label>
                    <Input 
                      value={resumeData.personal.phone} 
                      onChange={e => handlePersonalChange("phone", e.target.value)} 
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Location (City, State)</Label>
                  <Input 
                    value={resumeData.personal.location} 
                    onChange={e => handlePersonalChange("location", e.target.value)} 
                    placeholder="Anand, Gujarat, India"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">LinkedIn Profile URL</Label>
                    <Input 
                      value={resumeData.personal.linkedin} 
                      onChange={e => handlePersonalChange("linkedin", e.target.value)} 
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Portfolio / Website</Label>
                    <Input 
                      value={resumeData.personal.website} 
                      onChange={e => handlePersonalChange("website", e.target.value)} 
                      placeholder="my-portfolio.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 2. SUMMARY */}
          {activeSection === "summary" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  Professional Summary / Career Objective
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <Label className="text-xs">Bio Summary (3-4 sentences)</Label>
                <textarea
                  className="w-full min-h-[140px] p-3 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={resumeData.personal.summary}
                  onChange={e => handlePersonalChange("summary", e.target.value)}
                  placeholder="Write a brief profile summary highlighting your degree, key technical competencies, training/experience, and career goal..."
                />
              </CardContent>
            </Card>
          )}

          {/* 3. EDUCATION */}
          {activeSection === "education" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  Education & Qualifications ({resumeData.education.length})
                </CardTitle>
                <Button size="sm" variant="default" onClick={addEducation} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Education
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {resumeData.education.map((edu, idx) => (
                  <div key={edu.id} className="p-3 border border-slate-200 rounded-lg space-y-2 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700">Degree #{idx + 1}</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-500" onClick={() => deleteEducation(edu.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[11px]">Degree / Diploma</Label>
                        <Input value={edu.degree} onChange={e => updateEducation(edu.id, "degree", e.target.value)} className="h-8 text-xs" placeholder="e.g. B.Tech / B.Sc" />
                      </div>
                      <div>
                        <Label className="text-[11px]">Field of Study</Label>
                        <Input value={edu.field} onChange={e => updateEducation(edu.id, "field", e.target.value)} className="h-8 text-xs" placeholder="e.g. Dairy Science" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-[11px]">Institution / University</Label>
                      <Input value={edu.institution} onChange={e => updateEducation(edu.id, "institution", e.target.value)} className="h-8 text-xs" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[11px]">Year / Duration</Label>
                        <Input value={edu.year} onChange={e => updateEducation(edu.id, "year", e.target.value)} className="h-8 text-xs" placeholder="2020 – 2024" />
                      </div>
                      <div>
                        <Label className="text-[11px]">CGPA / Percentage</Label>
                        <Input value={edu.grade} onChange={e => updateEducation(edu.id, "grade", e.target.value)} className="h-8 text-xs" placeholder="8.5 CGPA / 85%" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 4. INTERNSHIPS (FOR STUDENTS/FRESHERS) */}
          {activeSection === "internships" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  Internships & Industrial Training ({resumeData.internships.length})
                </CardTitle>
                <Button size="sm" variant="default" onClick={addInternship} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Internship
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
                {resumeData.internships.map((intern, idx) => (
                  <div key={intern.id} className="p-3 border border-slate-200 rounded-lg space-y-3 bg-slate-50/50">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-xs font-bold text-slate-700">Internship #{idx + 1}</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-500" onClick={() => deleteInternship(intern.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[11px]">Training / Role Title</Label>
                        <Input value={intern.title} onChange={e => updateInternship(intern.id, "title", e.target.value)} className="h-8 text-xs" />
                      </div>
                      <div>
                        <Label className="text-[11px]">Organization / Plant</Label>
                        <Input value={intern.organization} onChange={e => updateInternship(intern.id, "organization", e.target.value)} className="h-8 text-xs" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[11px]">Duration</Label>
                        <Input value={intern.duration} onChange={e => updateInternship(intern.id, "duration", e.target.value)} className="h-8 text-xs" placeholder="Jan 2024 - Jun 2024" />
                      </div>
                      <div>
                        <Label className="text-[11px]">Location</Label>
                        <Input value={intern.location} onChange={e => updateInternship(intern.id, "location", e.target.value)} className="h-8 text-xs" />
                      </div>
                    </div>

                    {/* Pre-written Suggestions */}
                    <div className="pt-1">
                      <Label className="text-[10px] font-semibold text-blue-700 flex items-center gap-1 mb-1">
                        <Lightbulb className="h-3 w-3" /> Quick Add Pre-written Student Bullets:
                      </Label>
                      <div className="flex flex-wrap gap-1">
                        {BULLET_LIBRARY.student_internship.map((bText, bIdx) => (
                          <button
                            key={bIdx}
                            onClick={() => {
                              const newLearnings = [...intern.learnings, bText];
                              updateInternship(intern.id, "learnings", newLearnings);
                            }}
                            className="text-[10px] bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded text-left truncate max-w-full"
                          >
                            + {bText.substring(0, 45)}...
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bullets List */}
                    <div className="space-y-1.5 pt-2 border-t">
                      {intern.learnings.map((l, lIdx) => (
                        <div key={lIdx} className="flex items-center gap-1">
                          <Input 
                            value={l} 
                            onChange={e => {
                              const newLearnings = [...intern.learnings];
                              newLearnings[lIdx] = e.target.value;
                              updateInternship(intern.id, "learnings", newLearnings);
                            }} 
                            className="h-7 text-xs flex-1"
                          />
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="h-7 w-7 p-0 text-slate-400 hover:text-red-500"
                            onClick={() => {
                              const newLearnings = intern.learnings.filter((_, i) => i !== lIdx);
                              updateInternship(intern.id, "learnings", newLearnings);
                            }}
                          >
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

          {/* 5. WORK EXPERIENCE */}
          {activeSection === "experience" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                  Work Experience ({resumeData.experiences.length})
                </CardTitle>
                <Button size="sm" variant="default" onClick={addExperience} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Position
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-4 max-h-[550px] overflow-y-auto">
                {resumeData.experiences.map((exp, idx) => (
                  <div key={exp.id} className="p-3 border border-slate-200 rounded-lg space-y-3 bg-slate-50/50">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-xs font-bold text-slate-700">Role #{idx + 1}</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-500" onClick={() => deleteExperience(exp.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[11px]">Designation / Job Title</Label>
                        <Input value={exp.designation} onChange={e => updateExperience(exp.id, "designation", e.target.value)} className="h-8 text-xs" />
                      </div>
                      <div>
                        <Label className="text-[11px]">Company / Organization</Label>
                        <Input value={exp.company} onChange={e => updateExperience(exp.id, "company", e.target.value)} className="h-8 text-xs" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <Label className="text-[11px]">Start Date</Label>
                        <Input value={exp.startDate} onChange={e => updateExperience(exp.id, "startDate", e.target.value)} className="h-8 text-xs" placeholder="MM/YYYY" />
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
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  Skills & Technical Competencies
                </CardTitle>
                <Button size="sm" variant="default" onClick={() => addSkill()} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Skill
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {/* Quick Add Suggestions */}
                <div className="pb-2 border-b">
                  <Label className="text-[10px] font-semibold text-slate-500 mb-1 block">Quick Add Dairy & Lab Skills:</Label>
                  <div className="flex flex-wrap gap-1">
                    {["Raw Milk Testing", "Gerber Fat Test", "HTST Pasteurization", "FSSAI Compliance", "ISO 22000 & HACCP", "CIP Systems", "FTIR Milk Analyzer"].map((sName) => (
                      <button
                        key={sName}
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
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  Certifications & Licenses
                </CardTitle>
                <Button size="sm" variant="default" onClick={addCertification} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Cert
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
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
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <FolderKanban className="h-4 w-4 text-blue-600" />
                  Projects & Research Work
                </CardTitle>
                <Button size="sm" variant="default" onClick={addProject} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Project
                </Button>
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
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  Honors, Awards & Extracurriculars
                </CardTitle>
                <Button size="sm" variant="default" onClick={addAchievement} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Award
                </Button>
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

          {/* 10. THEME & SECTION VISIBILITY */}
          {activeSection === "theme" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Palette className="h-4 w-4 text-blue-600" />
                  Theme, Layout & Section Visibility
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
                  <Label className="text-xs font-semibold">Languages Spoken (Comma Separated)</Label>
                  <Input 
                    value={resumeData.languages.join(", ")}
                    onChange={e => handleLanguagesChange(e.target.value)}
                    placeholder="English, Hindi, Gujarati"
                    className="h-8 text-xs mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          )}

        </div>

        {/* RIGHT COLUMN: LIVE A4 PRINTABLE PREVIEW */}
        <div className={cn(
          "lg:col-span-7 flex flex-col items-center",
          activeViewTab === "edit" ? "hidden lg:flex" : "flex"
        )}>

          <div className="w-full overflow-x-auto flex justify-center pb-8">
            <div 
              id="resume-a4-preview"
              ref={previewRef}
              className="bg-white text-slate-900 shadow-xl border border-slate-300 relative box-border font-sans transition-all"
              style={{
                width: "210mm",
                minHeight: "297mm",
                padding: "16mm 18mm",
                fontSize: "11px",
                lineHeight: "1.45"
              }}
            >
              {/* HEADER SECTION */}
              <div 
                className="pb-4 border-b-2 mb-5 space-y-2"
                style={{ borderColor: accentColor }}
              >
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

              {/* SUMMARY SECTION */}
              {resumeData.sectionVisibility.summary && resumeData.personal.summary && (
                <div className="mb-4">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Profile Summary
                  </h3>
                  <p className="text-slate-700 text-[11px] leading-relaxed text-justify">
                    {resumeData.personal.summary}
                  </p>
                </div>
              )}

              {/* EDUCATION SECTION (PRIORITIZED FIRST IN STUDENT MODE) */}
              {resumeData.sectionVisibility.education && resumeData.education.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Education & Academic Qualifications
                  </h3>
                  <div className="space-y-2">
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="flex justify-between items-baseline">
                        <div>
                          <span className="font-bold text-slate-800 text-[11px]">{edu.degree} in {edu.field}</span>
                          <div className="text-[10px] text-slate-600 font-medium">{edu.institution}, {edu.location}</div>
                        </div>
                        <div className="text-right text-[10px] font-semibold text-slate-600">
                          <div>{edu.year}</div>
                          {edu.grade && <div className="text-slate-500">{edu.grade}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* INTERNSHIPS & INDUSTRIAL TRAINING (FOR STUDENTS) */}
              {resumeData.sectionVisibility.internships && resumeData.internships.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Industrial Training & Internships
                  </h3>
                  <div className="space-y-3">
                    {resumeData.internships.map((intern) => (
                      <div key={intern.id} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-slate-800 text-[11.5px]">
                            {intern.title} <span className="font-medium text-slate-600">| {intern.organization}</span>
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500">
                            {intern.duration} ({intern.location})
                          </span>
                        </div>
                        {intern.learnings.length > 0 && (
                          <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[10.5px]">
                            {intern.learnings.map((l, lIdx) => (
                              <li key={lIdx} className="leading-snug">
                                <span className="text-slate-800">{l}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WORK EXPERIENCE SECTION */}
              {resumeData.sectionVisibility.experience && resumeData.experiences.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Work Experience
                  </h3>
                  <div className="space-y-3.5">
                    {resumeData.experiences.map((exp) => (
                      <div key={exp.id} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-slate-800 text-[11.5px]">
                            {exp.designation} <span className="font-medium text-slate-600">| {exp.company}</span>
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500">
                            {exp.startDate} – {exp.endDate} ({exp.location})
                          </span>
                        </div>
                        {exp.bullets.length > 0 && (
                          <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[10.5px]">
                            {exp.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="leading-snug">
                                <span className="text-slate-800">{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SKILLS SECTION */}
              {resumeData.sectionVisibility.skills && resumeData.skills.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Technical Skills & Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {resumeData.skills.map((sk) => (
                      <span 
                        key={sk.id} 
                        className="px-2 py-0.5 rounded text-[10px] font-medium border bg-slate-50 border-slate-200 text-slate-800"
                      >
                        {sk.name} <span className="text-[9px] text-slate-500 font-normal">({sk.level})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CERTIFICATIONS SECTION */}
              {resumeData.sectionVisibility.certifications && resumeData.certifications.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Certifications & Licenses
                  </h3>
                  <div className="space-y-1.5">
                    {resumeData.certifications.map((cert) => (
                      <div key={cert.id} className="flex justify-between text-[10.5px]">
                        <span className="font-semibold text-slate-800">{cert.name} <span className="font-normal text-slate-600">({cert.issuer})</span></span>
                        <span className="text-slate-500 font-medium">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROJECTS SECTION */}
              {resumeData.sectionVisibility.projects && resumeData.projects.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Projects & Academic Research
                  </h3>
                  <div className="space-y-2">
                    {resumeData.projects.map((proj) => (
                      <div key={proj.id} className="text-[10.5px]">
                        <span className="font-bold text-slate-800">{proj.title}</span>
                        <p className="text-slate-700">{proj.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ACHIEVEMENTS SECTION */}
              {resumeData.sectionVisibility.achievements && resumeData.achievements.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Honors & Extracurricular Achievements
                  </h3>
                  <div className="space-y-1.5">
                    {resumeData.achievements.map((ach) => (
                      <div key={ach.id} className="flex justify-between text-[10.5px]">
                        <span className="font-semibold text-slate-800">{ach.title} <span className="font-normal text-slate-600">({ach.organization})</span></span>
                        <span className="text-slate-500 font-medium">{ach.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LANGUAGES SECTION */}
              {resumeData.sectionVisibility.languages && resumeData.languages.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Languages Spoken
                  </h3>
                  <p className="text-[10.5px] text-slate-700 font-medium">{resumeData.languages.join(" • ")}</p>
                </div>
              )}

              {/* DECLARATION SECTION */}
              {resumeData.sectionVisibility.declaration && resumeData.declaration.enabled && (
                <div className="mt-8 pt-4 border-t border-slate-300 text-[10px] text-slate-600 space-y-4">
                  <p>{resumeData.declaration.text}</p>
                  <div className="flex justify-between items-end pt-4">
                    <div>
                      <div>Date: ____________</div>
                      <div>Place: {resumeData.declaration.place}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-800 uppercase">{resumeData.personal.fullName}</div>
                      <div className="text-[9px] text-slate-400">(Signature)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* BRANDING FOOTER */}
              <div className="mt-8 border-t border-slate-300 pt-2 text-center text-[8px] text-slate-400 font-bold tracking-widest uppercase">
                POWERED BY DAIRY HUB ERP SYSTEM
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Standard React Style tag for A4 Printing overrides (SWC build hang safe) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          body * {
            visibility: hidden !important;
          }
          #resume-a4-preview, #resume-a4-preview * {
            visibility: visible !important;
          }
          #resume-a4-preview {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            min-height: 297mm !important;
            padding: 15mm 18mm !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background-color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}} />

    </div>
  );
}
