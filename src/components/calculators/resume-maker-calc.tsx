"use client";

import React, { useState, useRef } from "react";
import { 
  Printer, Download, FileText, Building2, MapPin, Calendar, 
  Plus, Trash2, CheckCircle, Info, Loader2, FileDown,
  User, Mail, Phone, Globe, Linkedin, Briefcase, GraduationCap,
  Award, Sparkles, FolderKanban, Languages, Layout, Palette,
  Upload, Eye, Edit3, ArrowLeft, RefreshCw, FileJson, Save, FolderOpen,
  ChevronDown, Check, Star
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

export interface ResumeData {
  personal: PersonalInfo;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  languages: string[];
  declaration: {
    enabled: boolean;
    text: string;
    place: string;
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
];

// Sample Preset Resumes
const PRESETS: Record<string, { title: string; data: ResumeData }> = {
  dairy_qa: {
    title: "Dairy QA / QC Specialist Resume",
    data: {
      personal: {
        fullName: "Rahul Sharma",
        jobTitle: "Senior Dairy QA/QC Executive & Lab Specialist",
        email: "rahul.sharma@dairyhub.org",
        phone: "+91 98765 43210",
        location: "Anand, Gujarat, India",
        linkedin: "linkedin.com/in/rahul-dairy-qa",
        website: "dairyhub-qa-portfolio.com",
        photoUrl: "",
        summary: "Results-driven Dairy Quality Assurance Specialist with over 6 years of hands-on experience in chemical & microbiological analysis of milk & milk products (Milk, Butter, Ghee, Cheese, WMP, SMP). Proficient in FSSAI regulations, ISO 22000, HACCP, NABL accreditation, and lab instrumentation (FTIR Milk Analyzer, HPLC, Auto-Titrator, Somatic Cell Counter)."
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
            "Lead raw milk platform testing (MBRT, Clot-on-Boiling, Alcohol Test, Adulterant Detection for Urea, Starch, Neutralizers, Detergent).",
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
            "Prepared standardize laboratory reagents, volumetric solutions, and calibrated glassware & digital pH meters.",
            "Maintained batch release registers, COA generation, and SAP QM module entries."
          ]
        }
      ],
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
      languages: ["English (Professional)", "Hindi (Fluent)", "Gujarati (Native)"],
      declaration: {
        enabled: true,
        text: "I hereby declare that all the information provided above is true and accurate to the best of my knowledge.",
        place: "Anand, Gujarat"
      }
    }
  },
  plant_manager: {
    title: "Dairy Plant & Production Executive Resume",
    data: {
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
      languages: ["English", "Hindi", "Punjabi"],
      declaration: {
        enabled: true,
        text: "I hereby confirm the accuracy of the statements made in this document.",
        place: "Karnal, Haryana"
      }
    }
  }
};

export function ResumeMakerCalc() {
  const { toast } = useToast();

  // Resume State
  const [resumeData, setResumeData] = useState<ResumeData>(PRESETS.dairy_qa.data);
  const [activeSection, setActiveSection] = useState<string>("personal");
  const [accentColor, setAccentColor] = useState<string>("#1e3a8a");
  const [templateLayout, setTemplateLayout] = useState<"modern" | "classic" | "minimal">("modern");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [activeViewTab, setActiveViewTab] = useState<"edit" | "preview">("edit");

  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load Preset
  const handleLoadPreset = (key: string) => {
    if (PRESETS[key]) {
      setResumeData(JSON.parse(JSON.stringify(PRESETS[key].data)));
      toast({
        title: "Preset Loaded!",
        description: `Loaded ${PRESETS[key].title} template.`,
      });
    }
  };

  // Reset to Blank
  const handleResetBlank = () => {
    setResumeData({
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
      education: [],
      skills: [],
      certifications: [],
      projects: [],
      languages: [],
      declaration: { enabled: false, text: "", place: "" }
    });
    toast({
      title: "Cleared Form",
      description: "You can now build your resume from scratch.",
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
      designation: "Quality Chemist",
      company: "Company Name",
      location: "City, Country",
      startDate: "2022",
      endDate: "Present",
      current: true,
      bullets: ["Performed Gerber Fat test, SNF estimation, and platform tests."]
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

  const addExpBullet = (expId: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => {
        if (exp.id === expId) {
          return { ...exp, bullets: [...exp.bullets, "New key responsibility or achievement."] };
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

  // Handlers for Education
  const addEducation = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: "Bachelor of Technology",
      field: "Dairy / Food Technology",
      institution: "University Name",
      location: "City, State",
      year: "2020",
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
  const addSkill = () => {
    const newItem: SkillItem = {
      id: `sk-${Date.now()}`,
      name: "New Skill",
      category: "Technical",
      level: "Advanced"
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
      name: "Certification Name",
      issuer: "Issuing Organization",
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
      title: "Project Title",
      role: "Lead Chemist",
      description: "Brief summary of project objectives and scope.",
      keyOutcome: "Quantifiable achievement or result."
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
    downloadAnchor.setAttribute("download", `${resumeData.personal.fullName.replace(/\s+/g, "_")}_Resume_Data.json`);
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
              description: "Resume data imported into form successfully.",
            });
          }
        } catch (err) {
          toast({
            title: "Import Failed",
            description: "Invalid JSON format file.",
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
      title: "Generating High Quality PDF...",
      description: "Please wait a few seconds while your A4 resume is rendered.",
    });

    try {
      const element = previewRef.current;
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution
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

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Loop for multi-page resumes if content exceeds 1 page (297mm)
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
        description: `Downloaded ${fileName}`,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "PDF Download Error",
        description: "Standard browser print preview opening instead.",
        variant: "destructive"
      });
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              Professional Resume & CV Builder
            </h2>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">A4 PDF Multi-Page</Badge>
          </div>
          <p className="text-xs text-slate-5-0 text-slate-500 mt-1">
            Build, customize, and export professional ATS-ready resumes tailored for Dairy, Food Tech, and General Engineering careers.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Preset Selector */}
          <Select onValueChange={handleLoadPreset}>
            <SelectTrigger className="w-[180px] h-9 text-xs">
              <SelectValue placeholder="Load Sample Resume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dairy_qa">Dairy QA/QC Specialist</SelectItem>
              <SelectItem value="plant_manager">Dairy Plant Manager</SelectItem>
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

      {/* Main Grid: Left Form Controls, Right Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: Section Dropdown & Editor Form (6 cols) */}
        <div className="lg:col-span-5 space-y-4 print:hidden">

          {/* Section Selector Dropdown */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Layout className="h-4 w-4 text-blue-600" />
                  Select Section to Edit
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
                  <SelectItem value="summary">📝 2. Professional Summary</SelectItem>
                  <SelectItem value="experience">💼 3. Work Experience</SelectItem>
                  <SelectItem value="education">🎓 4. Education & Academic</SelectItem>
                  <SelectItem value="skills">⚡ 5. Skills & Competencies</SelectItem>
                  <SelectItem value="certifications">🏅 6. Certifications & Licenses</SelectItem>
                  <SelectItem value="projects">📂 7. Projects & Achievements</SelectItem>
                  <SelectItem value="theme">🎨 8. Styling & Color Theme</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* DYNAMIC FORM CONTENTS BASED ON ACTIVE SECTION */}

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
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div>
                  <Label className="text-xs">Target Job Title *</Label>
                  <Input 
                    value={resumeData.personal.jobTitle} 
                    onChange={e => handlePersonalChange("jobTitle", e.target.value)} 
                    placeholder="e.g. Senior Dairy QA/QC Executive"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Email Address</Label>
                    <Input 
                      value={resumeData.personal.email} 
                      onChange={e => handlePersonalChange("email", e.target.value)} 
                      placeholder="rahul@example.com"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Phone Number</Label>
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
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <Label className="text-xs">Summary Bio / Career Objective</Label>
                <textarea
                  className="w-full min-h-[140px] p-3 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={resumeData.personal.summary}
                  onChange={e => handlePersonalChange("summary", e.target.value)}
                  placeholder="Write 3-4 sentences highlighting your years of experience, core technical expertise, key dairy/lab competencies, and regulatory standard compliance..."
                />
              </CardContent>
            </Card>
          )}

          {/* 3. EXPERIENCE */}
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
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-500 hover:bg-red-50" onClick={() => deleteExperience(exp.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[11px]">Designation / Job Title</Label>
                        <Input 
                          value={exp.designation} 
                          onChange={e => updateExperience(exp.id, "designation", e.target.value)}
                          className="h-8 text-xs" 
                        />
                      </div>
                      <div>
                        <Label className="text-[11px]">Company / Organization</Label>
                        <Input 
                          value={exp.company} 
                          onChange={e => updateExperience(exp.id, "company", e.target.value)}
                          className="h-8 text-xs" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <Label className="text-[11px]">Start Date</Label>
                        <Input 
                          value={exp.startDate} 
                          onChange={e => updateExperience(exp.id, "startDate", e.target.value)}
                          className="h-8 text-xs" 
                          placeholder="MM/YYYY"
                        />
                      </div>
                      <div>
                        <Label className="text-[11px]">End Date</Label>
                        <Input 
                          value={exp.endDate} 
                          onChange={e => updateExperience(exp.id, "endDate", e.target.value)}
                          className="h-8 text-xs" 
                          placeholder="Present / YYYY"
                        />
                      </div>
                      <div>
                        <Label className="text-[11px]">Location</Label>
                        <Input 
                          value={exp.location} 
                          onChange={e => updateExperience(exp.id, "location", e.target.value)}
                          className="h-8 text-xs" 
                        />
                      </div>
                    </div>

                    {/* Bullets */}
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <div className="flex justify-between items-center">
                        <Label className="text-[11px] font-semibold text-slate-700">Key Achievements / Bullets</Label>
                        <Button size="sm" variant="ghost" onClick={() => addExpBullet(exp.id)} className="h-6 text-[10px] text-blue-600">
                          <Plus className="h-3 w-3 mr-1" /> Add Bullet
                        </Button>
                      </div>
                      {exp.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5">
                          <Input 
                            value={b} 
                            onChange={e => updateExpBullet(exp.id, bIdx, e.target.value)}
                            className="h-7 text-xs flex-1"
                          />
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

          {/* 4. EDUCATION */}
          {activeSection === "education" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  Education & Qualifications
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
                        <Input value={edu.degree} onChange={e => updateEducation(edu.id, "degree", e.target.value)} className="h-8 text-xs" />
                      </div>
                      <div>
                        <Label className="text-[11px]">Field of Study</Label>
                        <Input value={edu.field} onChange={e => updateEducation(edu.id, "field", e.target.value)} className="h-8 text-xs" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-[11px]">Institution / University</Label>
                      <Input value={edu.institution} onChange={e => updateEducation(edu.id, "institution", e.target.value)} className="h-8 text-xs" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-[11px]">Year of Passing</Label>
                        <Input value={edu.year} onChange={e => updateEducation(edu.id, "year", e.target.value)} className="h-8 text-xs" />
                      </div>
                      <div>
                        <Label className="text-[11px]">CGPA / Percentage</Label>
                        <Input value={edu.grade} onChange={e => updateEducation(edu.id, "grade", e.target.value)} className="h-8 text-xs" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 5. SKILLS */}
          {activeSection === "skills" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  Skills & Technical Competencies
                </CardTitle>
                <Button size="sm" variant="default" onClick={addSkill} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Skill
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
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

          {/* 6. CERTIFICATIONS */}
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
                      <Input 
                        value={cert.name} 
                        onChange={e => updateCertification(cert.id, "name", e.target.value)} 
                        placeholder="Certification Title (e.g. FOSTAC / NABL)"
                        className="h-8 text-xs flex-1 font-semibold" 
                      />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500" onClick={() => deleteCertification(cert.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input 
                        value={cert.issuer} 
                        onChange={e => updateCertification(cert.id, "issuer", e.target.value)} 
                        placeholder="Issuing Org (FSSAI/ISO)"
                        className="h-7 text-xs" 
                      />
                      <Input 
                        value={cert.year} 
                        onChange={e => updateCertification(cert.id, "year", e.target.value)} 
                        placeholder="Year (e.g. 2022)"
                        className="h-7 text-xs" 
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 7. PROJECTS */}
          {activeSection === "projects" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <FolderKanban className="h-4 w-4 text-blue-600" />
                  Key Projects & Initiatives
                </CardTitle>
                <Button size="sm" variant="default" onClick={addProject} className="h-7 text-xs bg-blue-600">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Add Project
                </Button>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {resumeData.projects.map((proj) => (
                  <div key={proj.id} className="p-3 border border-slate-200 rounded-lg space-y-2 bg-slate-50/50">
                    <div className="flex justify-between items-center">
                      <Input 
                        value={proj.title} 
                        onChange={e => updateProject(proj.id, "title", e.target.value)} 
                        placeholder="Project Name"
                        className="h-8 text-xs font-semibold flex-1"
                      />
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500" onClick={() => deleteProject(proj.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <textarea 
                      value={proj.description} 
                      onChange={e => updateProject(proj.id, "description", e.target.value)} 
                      placeholder="Project details..."
                      className="w-full text-xs p-2 border border-slate-200 rounded-md"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 8. THEME & COLORS */}
          {activeSection === "theme" && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="p-4 bg-slate-50 border-b border-slate-200">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Palette className="h-4 w-4 text-blue-600" />
                  Resume Layout & Color Theme
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
                  <Label className="text-xs font-semibold mb-2 block">Layout Header Style</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setTemplateLayout("modern")}
                      className={cn(
                        "p-2 text-xs border rounded-lg text-center font-medium",
                        templateLayout === "modern" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200"
                      )}
                    >
                      Modern Top
                    </button>
                    <button
                      onClick={() => setTemplateLayout("classic")}
                      className={cn(
                        "p-2 text-xs border rounded-lg text-center font-medium",
                        templateLayout === "classic" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200"
                      )}
                    >
                      Classic Serif
                    </button>
                    <button
                      onClick={() => setTemplateLayout("minimal")}
                      className={cn(
                        "p-2 text-xs border rounded-lg text-center font-medium",
                        templateLayout === "minimal" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200"
                      )}
                    >
                      Compact Clean
                    </button>
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

        {/* RIGHT COLUMN: LIVE A4 PRINTABLE RESUME PREVIEW (7 cols) */}
        <div className={cn(
          "lg:col-span-7 flex flex-col items-center",
          activeViewTab === "edit" ? "hidden lg:flex" : "flex"
        )}>

          {/* A4 Document Container */}
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

                {/* CONTACT INFO LINE */}
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
              {resumeData.personal.summary && (
                <div className="mb-4">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Professional Summary
                  </h3>
                  <p className="text-slate-700 text-[11px] leading-relaxed text-justify">
                    {resumeData.personal.summary}
                  </p>
                </div>
              )}

              {/* WORK EXPERIENCE SECTION */}
              {resumeData.experiences.length > 0 && (
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

              {/* EDUCATION SECTION */}
              {resumeData.education.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Education & Qualifications
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

              {/* SKILLS SECTION */}
              {resumeData.skills.length > 0 && (
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
              {resumeData.certifications.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Certifications & Professional Training
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
              {resumeData.projects.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Key Projects & Improvements
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

              {/* LANGUAGES & ADDITIONAL */}
              {resumeData.languages.length > 0 && (
                <div className="mb-5">
                  <h3 
                    className="text-[12px] font-bold uppercase tracking-wider pb-1 mb-2 border-b border-slate-200"
                    style={{ color: accentColor }}
                  >
                    Languages
                  </h3>
                  <p className="text-[10.5px] text-slate-700 font-medium">{resumeData.languages.join(" • ")}</p>
                </div>
              )}

              {/* DECLARATION */}
              {resumeData.declaration.enabled && (
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
