"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Briefcase,
  UserCheck,
  Building2,
  MapPin,
  GraduationCap,
  Send,
  Search,
  PlusCircle,
  Clock,
  ExternalLink,
  Mail,
  Phone,
  Filter,
  Trash2,
  Share2,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export interface LaunchpadPost {
  id: string;
  type: "hiring" | "seeking";
  title: string;
  orgOrCandidate: string;
  sector: "Government / Cooperative" | "Private / MNC";
  location: string;
  qualification: string[];
  experience: string;
  salaryOrCtc: string;
  contactEmail: string;
  contactPhone?: string;
  applyOrLinkedinUrl?: string;
  skills: string[];
  description: string;
  timestamp: string;
  createdMs: number;
  isUserCreated?: boolean;
}

const STORAGE_KEY = "dairyhub_job_launchpad_posts_v1";

const INITIAL_COMMUNITY_POSTS: LaunchpadPost[] = [
  {
    id: "init-post-1",
    type: "hiring",
    title: "QA Executive & RMRD Shift Incharge",
    orgOrCandidate: "Amul Federation (Kaira Milk Union)",
    sector: "Government / Cooperative",
    location: "Anand, Gujarat",
    qualification: ["B.Tech Dairy Technology", "M.Sc Dairy Chemistry"],
    experience: "1 - 3 Years",
    salaryOrCtc: "₹5.2 LPA - ₹7.0 LPA",
    contactEmail: "careers@amuldairy.com",
    applyOrLinkedinUrl: "https://www.amul.com/m/careers",
    skills: ["RMRD Platform Tests", "Gerber Fat Test", "HTST Pasteurization", "CIP 5-Stage"],
    description: "Urgent vacancy for Shift Officers at Anand processing plant. Responsible for milk reception dock quality screening, adulterant strip testing, and pasteurizer temperature-time logs.",
    timestamp: "2 hours ago",
    createdMs: Date.now() - 2 * 60 * 60 * 1000,
  },
  {
    id: "init-post-2",
    type: "seeking",
    title: "B.Tech Dairy Tech Graduate Seeking QA / Lab Analyst Role",
    orgOrCandidate: "Saurabh Sharma (ICAR Accredited)",
    sector: "Private / MNC",
    location: "Delhi NCR / UP / Haryana",
    qualification: ["B.Tech Dairy Technology (First Class)"],
    experience: "Fresher (6 Months Internship at Mother Dairy)",
    salaryOrCtc: "Expected ₹4.0 - ₹5.5 LPA",
    contactEmail: "saurabh.dairytech@gmail.com",
    contactPhone: "+91 9876543210",
    applyOrLinkedinUrl: "https://linkedin.com",
    skills: ["Microbiology MBRT", "HPLC Analysis", "HACCP ISO 22000", "Sensory Evaluation"],
    description: "Completed B.Tech Dairy Technology. Hands-on experience in Gerber Fat testing, CLR SNF calculations, neutralizer testing, and liquid milk packaging QA.",
    timestamp: "4 hours ago",
    createdMs: Date.now() - 4 * 60 * 60 * 1000,
  },
  {
    id: "init-post-3",
    type: "hiring",
    title: "Microbiologist & Hygiene Lead",
    orgOrCandidate: "Nestlé India Ltd. (Moga Unit)",
    sector: "Private / MNC",
    location: "Moga, Punjab",
    qualification: ["M.Sc Microbiology", "B.Tech Food Tech"],
    experience: "2 - 5 Years",
    salaryOrCtc: "₹7.5 LPA - ₹11.0 LPA",
    contactEmail: "moga.careers@nestle.in",
    applyOrLinkedinUrl: "https://www.nestle.in/careers",
    skills: ["Pathogen Testing", "Salmonella & Listeria Assay", "FSSC 22000", "Air Quality Monitoring"],
    description: "Seeking experienced Microbiologist for infant spray drying and liquid milk plant. Knowledge of environmental swab testing and clean room hygiene required.",
    timestamp: "6 hours ago",
    createdMs: Date.now() - 6 * 60 * 60 * 1000,
  },
  {
    id: "init-post-4",
    type: "hiring",
    title: "Assistant Dairy Manager (Cold Chain & Distribution)",
    orgOrCandidate: "Mother Dairy Fruit & Vegetable",
    sector: "Government / Cooperative",
    location: "Noida / Delhi NCR",
    qualification: ["B.Tech Dairy Tech", "MBA Supply Chain"],
    experience: "3 - 6 Years",
    salaryOrCtc: "₹8.0 LPA - ₹12.0 LPA",
    contactEmail: "hr.recruitment@motherdairy.com",
    applyOrLinkedinUrl: "https://www.motherdairy.com/careers",
    skills: ["Cold Chain Storage", "Visi-Cooler Maintenance", "Bulk Milk Coolers (BMC)", "Tetra Pak Logistics"],
    description: "Hiring Operations Executive for cold chain logistics and BMC chilling centers across Delhi-NCR network.",
    timestamp: "1 day ago",
    createdMs: Date.now() - 24 * 60 * 60 * 1000,
  },
  {
    id: "init-post-5",
    type: "seeking",
    title: "Senior Dairy Processing Engineer Seeking Operations Manager Role",
    orgOrCandidate: "Rajesh Kumar (M.Tech Dairy Engg)",
    sector: "Private / MNC",
    location: "Gujarat / Maharashtra / South India",
    qualification: ["M.Tech Dairy Engineering", "B.Tech Mechanical"],
    experience: "7 Years Experience in Evaporators & Spray Dryers",
    salaryOrCtc: "Expected ₹14.0 LPA",
    contactEmail: "rajesh.dairyengg@outlook.com",
    contactPhone: "+91 9123456789",
    skills: ["Triple Effect Evaporators", "Homogenizer Overhaul", "Ammonia Refrigeration", "ETP Operation"],
    description: "7+ years expertise in milk powder spray drying towers, CIP automation, boiler steam management, and plant utility maintenance.",
    timestamp: "1 day ago",
    createdMs: Date.now() - 26 * 60 * 60 * 1000,
  },
  {
    id: "init-post-6",
    type: "hiring",
    title: "Quality Control Officer (Paneer & Cheese Plant)",
    orgOrCandidate: "Milky Mist Dairy Food Ltd.",
    sector: "Private / MNC",
    location: "Erode, Tamil Nadu",
    qualification: ["B.Tech Food Tech / Dairy Tech", "B.Sc Chemistry"],
    experience: "1 - 3 Years",
    salaryOrCtc: "₹4.5 LPA - ₹6.5 LPA",
    contactEmail: "careers@milkymist.com",
    applyOrLinkedinUrl: "https://www.milkymist.com/careers",
    skills: ["Paneer Yield Optimization", "Cheese Texture Analysis", "Moisture Assay", "HACCP Documentation"],
    description: "Responsible for in-line quality testing of coagulated paneer curd, whey draining, packaging seal integrity, and cold room storage.",
    timestamp: "2 days ago",
    createdMs: Date.now() - 48 * 60 * 60 * 1000,
  },
];

interface JobLaunchpadModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function JobLaunchpadModal({ isOpen, setIsOpen }: JobLaunchpadModalProps) {
  const [posts, setPosts] = useState<LaunchpadPost[]>([]);
  const [activeTab, setActiveTab] = useState<"browse" | "post-hiring" | "post-seeking">("browse");
  const [filterType, setFilterType] = useState<"all" | "hiring" | "seeking">("all");
  const [filterSector, setFilterSector] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { toast } = useToast();

  // Form State for Hiring Post
  const [hiringTitle, setHiringTitle] = useState("");
  const [hiringOrg, setHiringOrg] = useState("");
  const [hiringSector, setHiringSector] = useState<"Government / Cooperative" | "Private / MNC">("Private / MNC");
  const [hiringLocation, setHiringLocation] = useState("");
  const [hiringQual, setHiringQual] = useState("B.Tech Dairy Tech / Food Tech");
  const [hiringExp, setHiringExp] = useState("0 - 2 Years");
  const [hiringSalary, setHiringSalary] = useState("₹4.5 LPA - ₹7.0 LPA");
  const [hiringEmail, setHiringEmail] = useState("");
  const [hiringPhone, setHiringPhone] = useState("");
  const [hiringUrl, setHiringUrl] = useState("");
  const [hiringSkills, setHiringSkills] = useState("QA/QC, Gerber Fat Test, Pasteurization, HACCP");
  const [hiringDesc, setHiringDesc] = useState("");

  // Form State for Seeking Post
  const [seekingTitle, setSeekingTitle] = useState("");
  const [seekingName, setSeekingName] = useState("");
  const [seekingQual, setSeekingQual] = useState("B.Tech Dairy Technology");
  const [seekingExp, setSeekingExp] = useState("Fresher / 1 Year");
  const [seekingCtc, setSeekingCtc] = useState("₹4.0 LPA - ₹6.0 LPA");
  const [seekingLocation, setSeekingLocation] = useState("Pan-India / Flexible");
  const [seekingEmail, setSeekingEmail] = useState("");
  const [seekingPhone, setSeekingPhone] = useState("");
  const [seekingLinkedin, setSeekingLinkedin] = useState("");
  const [seekingSkills, setSeekingSkills] = useState("Milk Testing, Pasteurization, Microbiology, SNF Calculation");
  const [seekingDesc, setSeekingDesc] = useState("");

  // Load Saved Posts
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as LaunchpadPost[];
        if (parsed && parsed.length > 0) {
          setPosts(parsed);
          return;
        }
      }
    } catch (e) {
      console.error(e);
    }
    setPosts(INITIAL_COMMUNITY_POSTS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_COMMUNITY_POSTS));
  }, []);

  // Save to LocalStorage whenever posts change
  const savePosts = (updated: LaunchpadPost[]) => {
    setPosts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // Sync user post to live notifications feed
  const syncToNotificationFeed = (newPost: LaunchpadPost) => {
    try {
      const NOTIF_KEY = "dairyhub_notifications_24h_v6";
      const savedNotifs = localStorage.getItem(NOTIF_KEY);
      let currentNotifs: any[] = [];
      if (savedNotifs) {
        currentNotifs = JSON.parse(savedNotifs);
      }

      const newNotifItem = {
        id: `user-job-notif-${newPost.id}`,
        title: `${newPost.type === "hiring" ? "User Job Vacancy" : "Candidate Profile"}: ${newPost.title}`,
        summary: `${newPost.orgOrCandidate} (${newPost.location}) - ${newPost.qualification.join(", ")}`,
        detail: `${newPost.description}\n\nOrganization/Candidate: ${newPost.orgOrCandidate}\nLocation: ${newPost.location}\nSalary/CTC: ${newPost.salaryOrCtc}\nContact: ${newPost.contactEmail}`,
        category: "jobs",
        timestamp: "Just now",
        dateStr: new Date().toISOString().split("T")[0],
        isRead: false,
        important: true,
        createdMs: Date.now(),
        highlights: [
          `Post Type: ${newPost.type === "hiring" ? "Hiring Vacancy" : "Job Seeker Profile"}`,
          `Employer / Name: ${newPost.orgOrCandidate}`,
          `Location: ${newPost.location}`,
          `Salary / Package: ${newPost.salaryOrCtc}`,
        ],
        actionSteps: [
          `Step 1: Contact via Email (${newPost.contactEmail}).`,
          newPost.applyOrLinkedinUrl ? `Step 2: Visit portal (${newPost.applyOrLinkedinUrl}).` : "Step 2: Connect directly via Dairy Hub Launchpad.",
        ],
        jobDetails: {
          orgName: newPost.orgOrCandidate,
          jobSector: newPost.sector,
          totalVacancies: newPost.type === "hiring" ? "User Published Vacancy" : "1 Candidate Profile",
          eligibility: newPost.qualification,
          salaryPackage: newPost.salaryOrCtc,
          selectionProcess: ["Direct Contact & Interview"],
          appLink: newPost.applyOrLinkedinUrl || `mailto:${newPost.contactEmail}`,
          technicalSyllabus: newPost.skills,
        },
        appLink: newPost.applyOrLinkedinUrl || `mailto:${newPost.contactEmail}`,
      };

      localStorage.setItem(NOTIF_KEY, JSON.stringify([newNotifItem, ...currentNotifs]));
    } catch (e) {
      console.error("Failed to sync to notification feed", e);
    }
  };

  // Submit Hiring Vacancy Post
  const handleCreateHiringPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hiringTitle || !hiringOrg || !hiringEmail) {
      toast({
        title: "Required Fields Missing ⚠️",
        description: "Please fill Job Title, Organization Name, and Contact Email.",
        variant: "destructive",
      });
      return;
    }

    const newPost: LaunchpadPost = {
      id: `user-hiring-${Date.now()}`,
      type: "hiring",
      title: hiringTitle.trim(),
      orgOrCandidate: hiringOrg.trim(),
      sector: hiringSector,
      location: hiringLocation.trim() || "India",
      qualification: hiringQual.split(",").map((s) => s.trim()).filter(Boolean),
      experience: hiringExp.trim(),
      salaryOrCtc: hiringSalary.trim(),
      contactEmail: hiringEmail.trim(),
      contactPhone: hiringPhone.trim() || undefined,
      applyOrLinkedinUrl: hiringUrl.trim() || undefined,
      skills: hiringSkills.split(",").map((s) => s.trim()).filter(Boolean),
      description: hiringDesc.trim() || "No detailed description provided.",
      timestamp: "Just now",
      createdMs: Date.now(),
      isUserCreated: true,
    };

    const updated = [newPost, ...posts];
    savePosts(updated);
    syncToNotificationFeed(newPost);

    toast({
      title: "Job Vacancy Published Live 🚀",
      description: `Your job posting "${newPost.title}" is now visible on both Launchpad & Notifications Feed!`,
    });

    // Reset Form & switch tab
    setHiringTitle("");
    setHiringOrg("");
    setHiringEmail("");
    setHiringDesc("");
    setActiveTab("browse");
  };

  // Submit Seeking Candidate Profile
  const handleCreateSeekingPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!seekingTitle || !seekingName || !seekingEmail) {
      toast({
        title: "Required Fields Missing ⚠️",
        description: "Please fill Profile Headline, Your Name, and Contact Email.",
        variant: "destructive",
      });
      return;
    }

    const newPost: LaunchpadPost = {
      id: `user-seeking-${Date.now()}`,
      type: "seeking",
      title: seekingTitle.trim(),
      orgOrCandidate: seekingName.trim(),
      sector: "Private / MNC",
      location: seekingLocation.trim() || "Open to Relocate",
      qualification: seekingQual.split(",").map((s) => s.trim()).filter(Boolean),
      experience: seekingExp.trim(),
      salaryOrCtc: seekingCtc.trim(),
      contactEmail: seekingEmail.trim(),
      contactPhone: seekingPhone.trim() || undefined,
      applyOrLinkedinUrl: seekingLinkedin.trim() || undefined,
      skills: seekingSkills.split(",").map((s) => s.trim()).filter(Boolean),
      description: seekingDesc.trim() || "No bio description provided.",
      timestamp: "Just now",
      createdMs: Date.now(),
      isUserCreated: true,
    };

    const updated = [newPost, ...posts];
    savePosts(updated);
    syncToNotificationFeed(newPost);

    toast({
      title: "Candidate Profile Published 👤",
      description: "Your job-seeking profile is now visible to recruiters & employers!",
    });

    // Reset Form & switch tab
    setSeekingTitle("");
    setSeekingName("");
    setSeekingEmail("");
    setSeekingDesc("");
    setActiveTab("browse");
  };

  // Delete User Post
  const handleDeletePost = (id: string) => {
    const updated = posts.filter((p) => p.id !== id);
    savePosts(updated);
    toast({
      title: "Post Removed 🗑️",
      description: "Selected post deleted successfully.",
    });
  };

  // Share Post Copy
  const handleSharePost = (post: LaunchpadPost) => {
    const text = `🚀 [Dairy Hub Launchpad Post]\n${post.type === "hiring" ? "📢 HIRING VACANCY" : "🙋‍♂️ SEEKING JOB"}\nTitle: ${post.title}\nOrg/Name: ${post.orgOrCandidate}\nLocation: ${post.location}\nQualification: ${post.qualification.join(", ")}\nSalary/CTC: ${post.salaryOrCtc}\nContact Email: ${post.contactEmail}\n\nDescription:\n${post.description}`;
    navigator.clipboard.writeText(text);
    toast({
      title: "Post Copied to Clipboard 📋",
      description: "Share details via WhatsApp or Email.",
    });
  };

  // Filter Posts Logic
  const filteredPosts = posts.filter((p) => {
    const matchesType = filterType === "all" || p.type === filterType;
    const matchesSector = filterSector === "all" || p.sector === filterSector;
    const matchesQuery =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.orgOrCandidate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSector && matchesQuery;
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl w-[96vw] max-h-[92vh] h-[92vh] flex flex-col p-0 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-2xl">
        {/* Header */}
        <DialogHeader className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-slate-800 pr-12">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600/40 border border-indigo-400/40 text-amber-300 shrink-0">
                <Rocket className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <DialogTitle className="text-base sm:text-xl font-extrabold text-white flex items-center gap-2">
                  Dairy & Food Professional Job Launchpad
                  <Badge className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                    LIVE
                  </Badge>
                </DialogTitle>
                <p className="text-xs text-slate-300 mt-0.5">
                  Community Career Board to post hiring vacancies & candidate profiles for Food/Dairy professionals
                </p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => setActiveTab("browse")}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5",
                activeTab === "browse"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              )}
            >
              <Search className="w-3.5 h-3.5" /> Browse All Posts ({posts.length})
            </button>

            <button
              onClick={() => setActiveTab("post-hiring")}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5",
                activeTab === "post-hiring"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              )}
            >
              <PlusCircle className="w-3.5 h-3.5" /> 📢 Post Vacancy (Hiring)
            </button>

            <button
              onClick={() => setActiveTab("post-seeking")}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5",
                activeTab === "post-seeking"
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              )}
            >
              <UserCheck className="w-3.5 h-3.5" /> 🙋‍♂️ Post Profile (Seeking Job)
            </button>
          </div>
        </DialogHeader>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {activeTab === "browse" && (
            /* ================= BROWSE POSTS TAB ================= */
            <div className="space-y-4">
              {/* Create Job Announcement Banner */}
              <div className="p-4 bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white rounded-2xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-extrabold text-sm flex items-center gap-1.5 text-white">
                    <PlusCircle className="w-4 h-4 text-amber-300 animate-bounce" /> Post Your Vacancy or Candidate Profile
                  </h4>
                  <p className="text-xs text-emerald-100 mt-0.5">
                    Any user can publish a hiring vacancy for their company or post their own job-seeking profile in 1 click!
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    onClick={() => setActiveTab("post-hiring")}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shadow-xs gap-1 active:scale-95"
                  >
                    <PlusCircle className="w-4 h-4 text-slate-950" /> 📢 Post Vacancy
                  </Button>
                  <Button
                    onClick={() => setActiveTab("post-seeking")}
                    className="bg-white/20 hover:bg-white/30 text-white font-bold text-xs px-3.5 py-2 rounded-xl backdrop-blur-sm shadow-xs gap-1 active:scale-95 border border-white/30"
                  >
                    <UserCheck className="w-4 h-4 text-white" /> 🙋‍♂️ Post Profile
                  </Button>
                </div>
              </div>

              {/* Search & Filter Controls */}
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by role, company, city, or technical skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 text-slate-900 text-xs font-semibold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Type Filter */}
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as any)}
                    className="px-3 py-2 bg-slate-50 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 focus:outline-none"
                  >
                    <option value="all">All Types (Hiring + Seeking)</option>
                    <option value="hiring">📢 Hiring Vacancies</option>
                    <option value="seeking">🙋‍♂️ Job Seekers</option>
                  </select>

                  {/* Sector Filter */}
                  <select
                    value={filterSector}
                    onChange={(e) => setFilterSector(e.target.value)}
                    className="px-3 py-2 bg-slate-50 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 focus:outline-none"
                  >
                    <option value="all">All Sectors</option>
                    <option value="Government / Cooperative">Govt / Cooperatives</option>
                    <option value="Private / MNC">Private / MNC Dairies</option>
                  </select>
                </div>
              </div>

              {/* Feed Grid */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
                  <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <h3 className="font-bold text-slate-800 text-sm">No Posts Matching Filters</h3>
                  <p className="text-xs text-slate-500 mt-1">Try clearing your search query or create a new post!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className={cn(
                        "p-4 bg-white rounded-2xl border transition-all flex flex-col justify-between shadow-xs hover:shadow-md relative",
                        post.type === "hiring"
                          ? "border-blue-200 hover:border-blue-400"
                          : "border-purple-200 hover:border-purple-400"
                      )}
                    >
                      {/* Top Header Row */}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge
                              className={cn(
                                "text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1",
                                post.type === "hiring"
                                  ? "bg-blue-600 text-white"
                                  : "bg-purple-600 text-white"
                              )}
                            >
                              {post.type === "hiring" ? (
                                <>
                                  <Briefcase className="w-3 h-3" /> HIRING VACANCY
                                </>
                              ) : (
                                <>
                                  <UserCheck className="w-3 h-3" /> JOB SEEKER
                                </>
                              )}
                            </Badge>

                            <Badge className="bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-semibold">
                              {post.sector}
                            </Badge>
                          </div>

                          <span className="text-[10px] font-mono text-slate-400 font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3 text-indigo-500" /> {post.timestamp}
                          </span>
                        </div>

                        {/* Title & Organization / Candidate Name */}
                        <h3 className="font-extrabold text-slate-900 text-sm leading-snug">
                          {post.title}
                        </h3>

                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mt-1">
                          <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{post.orgOrCandidate}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-1">
                          <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span>{post.location}</span>
                        </div>

                        {/* Details Info Pill */}
                        <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                          <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="text-[10px] text-slate-500 block font-medium">Experience:</span>
                            <span className="font-bold text-slate-900 text-[11px] mt-0.5 block">{post.experience}</span>
                          </div>
                          <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="text-[10px] text-slate-500 block font-medium">
                              {post.type === "hiring" ? "Offered CTC:" : "Expected CTC:"}
                            </span>
                            <span className="font-extrabold text-emerald-700 text-[11px] mt-0.5 block">
                              {post.salaryOrCtc}
                            </span>
                          </div>
                        </div>

                        {/* Qualification & Skills */}
                        <div className="mt-3 space-y-1.5">
                          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                            <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            <span className="line-clamp-1">{post.qualification.join(" • ")}</span>
                          </div>

                          <div className="flex items-center gap-1 flex-wrap pt-1">
                            {post.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Description Summary */}
                        <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          {post.description}
                        </p>
                      </div>

                      {/* Actions Footer */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${post.contactEmail}`}
                            className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-lg shadow-2xs transition-transform active:scale-95"
                          >
                            <Mail className="w-3 h-3" /> Contact Email
                          </a>

                          {post.applyOrLinkedinUrl && (
                            <a
                              href={post.applyOrLinkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-lg shadow-2xs"
                            >
                              <ExternalLink className="w-3 h-3" /> Portal
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleSharePost(post)}
                            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Share Post Details"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>

                          {post.isUserCreated && (
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Post"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "post-hiring" && (
            /* ================= POST HIRING VACANCY FORM ================= */
            <form onSubmit={handleCreateHiringPost} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 max-w-2xl mx-auto">
              <div className="border-b pb-3">
                <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                  📢 Publish New Job Vacancy (Employer / Recruiter)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Post open hiring positions directly for B.Tech Dairy Tech, Food Tech, Microbiologists & Dairy Engineers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">Job Title / Designation *</Label>
                  <Input
                    placeholder="e.g. QA Manager / Shift Officer Pasteurization"
                    value={hiringTitle}
                    onChange={(e) => setHiringTitle(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                    required
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Company / Organization Name *</Label>
                  <Input
                    placeholder="e.g. Amul Dairy / Mother Dairy / Nestlé / Heritage"
                    value={hiringOrg}
                    onChange={(e) => setHiringOrg(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">Sector</Label>
                  <select
                    value={hiringSector}
                    onChange={(e) => setHiringSector(e.target.value as any)}
                    className="w-full mt-1 px-3 py-2 bg-slate-50 text-slate-900 text-xs font-semibold rounded-md border border-slate-200 focus:outline-none"
                  >
                    <option value="Private / MNC">Private / MNC</option>
                    <option value="Government / Cooperative">Government / Cooperative</option>
                  </select>
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Plant Location / City</Label>
                  <Input
                    placeholder="e.g. Anand, Gujarat / Pan-India"
                    value={hiringLocation}
                    onChange={(e) => setHiringLocation(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Offered CTC / Salary</Label>
                  <Input
                    placeholder="e.g. ₹5.5 LPA - ₹8.0 LPA"
                    value={hiringSalary}
                    onChange={(e) => setHiringSalary(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">Required Qualifications (Comma separated)</Label>
                  <Input
                    placeholder="e.g. B.Tech Dairy Tech, M.Sc Microbiology, B.Tech Food Tech"
                    value={hiringQual}
                    onChange={(e) => setHiringQual(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Required Experience</Label>
                  <Input
                    placeholder="e.g. Freshers Welcome / 1-3 Years"
                    value={hiringExp}
                    onChange={(e) => setHiringExp(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">HR Contact Email *</Label>
                  <Input
                    type="email"
                    placeholder="e.g. careers@company.com"
                    value={hiringEmail}
                    onChange={(e) => setHiringEmail(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                    required
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Official Apply URL / Portal (Optional)</Label>
                  <Input
                    placeholder="e.g. https://company.com/careers"
                    value={hiringUrl}
                    onChange={(e) => setHiringUrl(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-800">Key Technical Skills Required (Comma separated)</Label>
                <Input
                  placeholder="e.g. Gerber Fat Test, HTST Pasteurization, HACCP, CIP 5-Stage"
                  value={hiringSkills}
                  onChange={(e) => setHiringSkills(e.target.value)}
                  className="mt-1 text-xs font-semibold"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-800">Job Description & Plant Responsibilities</Label>
                <textarea
                  rows={4}
                  placeholder="Describe shift duties, equipment handling, quality assurance standards..."
                  value={hiringDesc}
                  onChange={(e) => setHiringDesc(e.target.value)}
                  className="w-full mt-1 p-3 bg-slate-50 text-slate-900 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setActiveTab("browse")} className="text-xs font-bold">
                  Cancel
                </Button>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs gap-1.5">
                  <Send className="w-4 h-4" /> Publish Vacancy Now
                </Button>
              </div>
            </form>
          )}

          {activeTab === "post-seeking" && (
            /* ================= POST SEEKING PROFILE FORM ================= */
            <form onSubmit={handleCreateSeekingPost} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 max-w-2xl mx-auto">
              <div className="border-b pb-3">
                <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                  🙋‍♂️ Post Candidate Profile (Job Seeker / Professional)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Showcase your dairy/food technology skills to plant managers, recruiters & HR teams.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">Profile Headline *</Label>
                  <Input
                    placeholder="e.g. B.Tech Dairy Tech Graduate Seeking QA Analyst Role"
                    value={seekingTitle}
                    onChange={(e) => setSeekingTitle(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                    required
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Your Full Name *</Label>
                  <Input
                    placeholder="e.g. Amit Verma"
                    value={seekingName}
                    onChange={(e) => setSeekingName(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">Highest Qualification</Label>
                  <Input
                    placeholder="e.g. B.Tech Dairy Tech / M.Sc Microbiology"
                    value={seekingQual}
                    onChange={(e) => setSeekingQual(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Total Experience</Label>
                  <Input
                    placeholder="e.g. Fresher / 2 Years Experience"
                    value={seekingExp}
                    onChange={(e) => setSeekingExp(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Expected CTC</Label>
                  <Input
                    placeholder="e.g. ₹4.5 LPA - ₹6.5 LPA"
                    value={seekingCtc}
                    onChange={(e) => setSeekingCtc(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">Preferred Work Location</Label>
                  <Input
                    placeholder="e.g. Gujarat / North India / Pan-India"
                    value={seekingLocation}
                    onChange={(e) => setSeekingLocation(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Contact Email *</Label>
                  <Input
                    type="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={seekingEmail}
                    onChange={(e) => setSeekingEmail(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold text-slate-800">Phone Number (Optional)</Label>
                  <Input
                    placeholder="e.g. +91 9876543210"
                    value={seekingPhone}
                    onChange={(e) => setSeekingPhone(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-800">Portfolio / Resume Link (Optional)</Label>
                  <Input
                    placeholder="e.g. https://drive.google.com/your-resume"
                    value={seekingLinkedin}
                    onChange={(e) => setSeekingLinkedin(e.target.value)}
                    className="mt-1 text-xs font-semibold"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-800">Key Technical Skills & Expertise (Comma separated)</Label>
                <Input
                  placeholder="e.g. Milk Testing, Pasteurization, HACCP, Gerber Fat, Microbiology MBRT"
                  value={seekingSkills}
                  onChange={(e) => setSeekingSkills(e.target.value)}
                  className="mt-1 text-xs font-semibold"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-800">Professional Bio & Career Summary</Label>
                <textarea
                  rows={4}
                  placeholder="Summarize your academic background, internships, lab experience, or machinery handled..."
                  value={seekingDesc}
                  onChange={(e) => setSeekingDesc(e.target.value)}
                  className="w-full mt-1 p-3 bg-slate-50 text-slate-900 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setActiveTab("browse")} className="text-xs font-bold">
                  Cancel
                </Button>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs gap-1.5">
                  <Send className="w-4 h-4" /> Publish Candidate Profile
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
