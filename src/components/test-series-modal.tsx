"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  GraduationCap,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Play,
  Trophy,
  FileText,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Layers,
  Monitor,
  Smartphone,
  Grid,
  Zap,
  Printer,
  Download,
  User,
  Loader2,
  Image,
  MoveHorizontal,
  ChevronLeft,
  ChevronRight,
  ZoomIn
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/auth-context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { savePdfFile, saveFile } from "@/lib/mobile-download";
import { useToast } from "@/hooks/use-toast";

import {
  Question,
  DisciplineType,
  TestModeType,
  SeriesSetInfo,
  TEST_SERIES_SETS,
  ALL_DAIRY_QUESTIONS,
  ALL_FOOD_QUESTIONS,
  ALL_BIOTECH_QUESTIONS,
  generateDynamicPaper,
} from "@/lib/content/test-series";

export type { Question, DisciplineType, TestModeType, SeriesSetInfo };
export { TEST_SERIES_SETS, ALL_DAIRY_QUESTIONS, ALL_FOOD_QUESTIONS, ALL_BIOTECH_QUESTIONS, generateDynamicPaper };


export function TestSeriesModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  // Navigation & View Mode State
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineType>("dairy");
  const [selectedTestMode, setSelectedTestMode] = useState<TestModeType>("full");
  const [selectedSeriesSet, setSelectedSeriesSet] = useState<number>(1);
  const [testStatus, setTestStatus] = useState<"hub" | "instructions" | "running" | "scorecard">("hub");

  const [isDesktopMode, setIsDesktopMode] = useState<boolean>(false);
  const [showMobilePaletteDrawer, setShowMobilePaletteDrawer] = useState<boolean>(false);

  // Current Live Paper Metadata
  const [paperMetadata, setPaperMetadata] = useState<{ 
    questions: Question[]; 
    paperId: string;
    totalQs: number;
    timeMins: number;
  }>({ questions: [], paperId: "", totalQs: 120, timeMins: 120 });

  const [paperSeedCounter, setPaperSeedCounter] = useState<number>(101);
  const [usedQuestionTexts, setUsedQuestionTexts] = useState<Set<string>>(new Set());

  // Current Test Execution State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({});

  const { user } = useAuth();
  const { toast } = useToast();

  // Candidate Profile State for Scorecard Certificate
  const [studentName, setStudentName] = useState<string>("DairyHub Scholar");
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  // Timer & Submit State (in seconds)
  const [timeRemaining, setTimeRemaining] = useState<number>(7200);
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState<boolean>(false);

  // Load fresh paper set
  const loadFreshPaperSet = useCallback((disc: DisciplineType, mode: TestModeType, setNum: number, seed: number) => {

    const freshSet = generateDynamicPaper(disc, mode, setNum, seed, usedQuestionTexts);
    setPaperMetadata(freshSet);
  }, []);

  useEffect(() => {
    loadFreshPaperSet(selectedDiscipline, selectedTestMode, selectedSeriesSet, paperSeedCounter);
  }, [selectedDiscipline, selectedTestMode, selectedSeriesSet, paperSeedCounter, loadFreshPaperSet]);

  // Sync profile name from useAuth
  useEffect(() => {
    if (user?.displayName) {
      setStudentName(user.displayName);
    } else if (user?.email) {
      setStudentName(user.email.split("@")[0]);
    }
  }, [user]);

  // Timer Countdown Effect
  useEffect(() => {
    let timer: any;
    if (testStatus === "running" && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setTestStatus("scorecard");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStatus, timeRemaining]);

  const handleStartTest = () => {
    const nextSeed = paperSeedCounter + 1;
    setPaperSeedCounter(nextSeed);

    // Track used questions so next tests present 100% fresh questions
    const newlyUsed = new Set(usedQuestionTexts);
    paperMetadata.questions.forEach(q => newlyUsed.add(q.question.trim()));

    let poolSize = ALL_DAIRY_QUESTIONS.length;
    if (selectedDiscipline === "food") poolSize = ALL_FOOD_QUESTIONS.length;
    else if (selectedDiscipline === "biotech") poolSize = ALL_BIOTECH_QUESTIONS.length;

    if (newlyUsed.size >= poolSize * 0.75) {
      newlyUsed.clear();
    }
    setUsedQuestionTexts(newlyUsed);

    loadFreshPaperSet(selectedDiscipline, selectedTestMode, selectedSeriesSet, nextSeed);

    const initialSecs = paperMetadata.timeMins * 60;
    setTimeRemaining(initialSecs);
    setUserAnswers({});
    setMarkedForReview({});
    setVisited({ 1: true });
    setCurrentIndex(0);
    setShowMobilePaletteDrawer(false);
    setTestStatus("running");
  };

  // Certificate Generation Ref, Container Ref & Responsive Scaling State
  const certRef = React.useRef<HTMLDivElement>(null);
  const certContainerRef = React.useRef<HTMLDivElement>(null);
  const [certScale, setCertScale] = useState<number>(1);
  const [isGeneratingCert, setIsGeneratingCert] = useState<boolean>(false);
  // Certificate View Mode: "move" (Movable / swipeable 1000px wide mode) or "fit" (scaled to fit single screen)
  const [certViewMode, setCertViewMode] = useState<"move" | "fit">("move");
  const [isCertMouseDragging, setIsCertMouseDragging] = useState<boolean>(false);
  const certDragStartXRef = React.useRef<number>(0);
  const certDragScrollLeftRef = React.useRef<number>(0);

  const updateCertScale = React.useCallback(() => {
    if (certContainerRef.current) {
      const containerWidth = certContainerRef.current.clientWidth;
      if (containerWidth > 0) {
        if (certViewMode === "fit") {
          // Exactly fit inside container with padding so whole certificate is visible on mobile screen without scrolling
          const availableWidth = Math.max(280, containerWidth - 16);
          setCertScale(Math.min(1, availableWidth / 1000));
        } else {
          // Movable Mode: 100% scale (1000px wide) so it can be moved/swiped left-right on touch
          setCertScale(1);
        }
      }
    }
  }, [certViewMode]);

  React.useEffect(() => {
    if (testStatus === "scorecard") {
      updateCertScale();
      const timer = setTimeout(updateCertScale, 50);
      const timer2 = setTimeout(updateCertScale, 200);

      window.addEventListener("resize", updateCertScale);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        window.removeEventListener("resize", updateCertScale);
      };
    }
  }, [testStatus, updateCertScale]);

  // Touch & Mouse Drag Scroll Handlers for Smooth Certificate Swiping (Plant Formats Style)
  const scrollCertBy = (amount: number) => {
    if (certContainerRef.current) {
      certContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const scrollToCertPosition = (position: "left" | "center" | "right") => {
    if (!certContainerRef.current) return;
    const maxScroll = certContainerRef.current.scrollWidth - certContainerRef.current.clientWidth;
    if (position === "left") {
      certContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else if (position === "center") {
      certContainerRef.current.scrollTo({ left: Math.max(0, maxScroll / 2), behavior: "smooth" });
    } else if (position === "right") {
      certContainerRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
    }
  };

  const handleCertMouseDown = (e: React.MouseEvent) => {
    // Only drag with primary mouse button on desktop, never hijack touch
    if (e.button !== 0 || !certContainerRef.current) return;
    setIsCertMouseDragging(true);
    certDragStartXRef.current = e.pageX;
    certDragScrollLeftRef.current = certContainerRef.current.scrollLeft;
  };

  const handleCertMouseMove = (e: React.MouseEvent) => {
    if (!isCertMouseDragging || !certContainerRef.current) return;
    const walk = (e.pageX - certDragStartXRef.current) * 1.5;
    certContainerRef.current.scrollLeft = certDragScrollLeftRef.current - walk;
  };

  const handleCertMouseUp = () => {
    setIsCertMouseDragging(false);
  };

  // Universal Mobile APK & Web Download Handler (PDF) with Exact Aspect Ratio Preservation
  const handleDownloadCertificatePdf = async () => {
    if (!certRef.current) return;
    setIsGeneratingCert(true);

    const element = certRef.current;
    const prevTransform = element.style.transform;
    const prevOrigin = element.style.transformOrigin;

    // Temporarily reset transform for 1:1 high-resolution html2canvas capture
    element.style.transform = "none";
    element.style.transformOrigin = "initial";

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#0f172a",
        logging: false,
        width: 1000,
        height: 707,
        onclone: (clonedDoc, clonedElement) => {
          if (clonedElement) {
            clonedElement.style.transform = "none";
            clonedElement.style.width = "1000px";
            clonedElement.style.height = "707px";
          }
        }
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Mathematically preserve exact canvas aspect ratio on PDF page (centered with equal margins)
      const canvasAspect = canvas.width / canvas.height;

      let renderWidth = pdfWidth;
      let renderHeight = pdfWidth / canvasAspect;

      if (renderHeight > pdfHeight) {
        renderHeight = pdfHeight;
        renderWidth = pdfHeight * canvasAspect;
      }

      const xOffset = (pdfWidth - renderWidth) / 2;
      const yOffset = (pdfHeight - renderHeight) / 2;

      pdf.addImage(imgData, "JPEG", xOffset, yOffset, renderWidth, renderHeight, undefined, "FAST");

      const candidateName = studentName.trim() || user?.displayName || "Scholar";
      const fileName = `DairyHub_Certificate_${candidateName.replace(/\s+/g, "_")}.pdf`;

      await savePdfFile(pdf, fileName);

      toast({
        title: "Certificate PDF Downloaded! 🏆",
        description: `Saved ${fileName} with perfect 100% aspect ratio.`,
      });
    } catch (err) {
      console.error("Certificate PDF render error:", err);
      toast({
        title: "Download Fallback",
        description: "Opening print view for direct PDF saving...",
        variant: "destructive",
      });
      handlePrintCertificate();
    } finally {
      element.style.transform = prevTransform;
      element.style.transformOrigin = prevOrigin;
      setIsGeneratingCert(false);
    }
  };

  // Download High-Res Image (PNG) Handler for Mobile Gallery
  const handleDownloadCertificateImage = async () => {
    if (!certRef.current) return;
    setIsGeneratingCert(true);

    const element = certRef.current;
    const prevTransform = element.style.transform;
    const prevOrigin = element.style.transformOrigin;

    // Temporarily reset transform for 1:1 high-resolution html2canvas capture
    element.style.transform = "none";
    element.style.transformOrigin = "initial";

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#0f172a",
        logging: false,
        width: 1000,
        height: 707,
        onclone: (clonedDoc, clonedElement) => {
          if (clonedElement) {
            clonedElement.style.transform = "none";
            clonedElement.style.width = "1000px";
            clonedElement.style.height = "707px";
          }
        }
      });

      const dataUrl = canvas.toDataURL("image/png");
      const candidateName = studentName.trim() || user?.displayName || "Scholar";
      const fileName = `DairyHub_Certificate_${candidateName.replace(/\s+/g, "_")}.png`;

      const res = await fetch(dataUrl);
      const blob = await res.blob();

      await saveFile(blob, fileName, "image/png");
      toast({
        title: "Certificate Image Saved! 🖼️",
        description: `Saved ${fileName} to gallery / downloads with perfect proportions.`,
      });
    } catch (err) {
      console.error("Certificate PNG render error:", err);
      toast({
        title: "Download Failed",
        description: "Unable to generate image. Please try PDF download instead.",
        variant: "destructive",
      });
    } finally {
      element.style.transform = prevTransform;
      element.style.transformOrigin = prevOrigin;
      setIsGeneratingCert(false);
    }
  };

  const handlePrintCertificate = () => {
    if (typeof window === "undefined") return;

    const candidateName = studentName.trim() || user?.displayName || user?.email?.split('@')[0] || "DairyHub Scholar";
    const dateStr = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const origin = window.location.origin;

    const pct = stats.maxScore > 0 ? (stats.score / stats.maxScore) * 100 : 0;
    const acc = parseFloat(stats.accuracy) || 0;

    let tierTitle = "🥉 BRONZE ACHIEVER CERTIFICATE";
    let tierColor = "#cd7f32";
    let bgGrad = "linear-gradient(135deg, #0f172a 0%, #451a03 100%)";
    let badgeText = "BRONZE TIER";

    if (pct >= 85 || acc >= 90) {
      tierTitle = "👑 PLATINUM DISTINCTION CERTIFICATE";
      tierColor = "#38bdf8";
      bgGrad = "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0369a1 100%)";
      badgeText = "PLATINUM TIER";
    } else if (pct >= 70 || acc >= 75) {
      tierTitle = "🥇 GOLD MASTER CERTIFICATE";
      tierColor = "#f59e0b";
      bgGrad = "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #78350f 100%)";
      badgeText = "GOLD TIER";
    } else if (pct >= 50 || acc >= 60) {
      tierTitle = "🥈 SILVER SCHOLAR CERTIFICATE";
      tierColor = "#cbd5e1";
      bgGrad = "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)";
      badgeText = "SILVER TIER";
    }

    try {
      const printWin = window.open('', '_blank', 'width=900,height=1000');
      if (!printWin) {
        toast({
          title: "Saving Certificate to Device... 🏆",
          description: "Generating official PDF certificate directly for your mobile storage.",
        });
        handleDownloadCertificatePdf();
        return;
      }

      printWin.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>DairyHub Official Test Certificate - ${candidateName}</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap');
              body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 40px; text-align: center; }
              .cert-box { border: 6px double ${tierColor}; padding: 45px 30px; border-radius: 24px; background: ${bgGrad}; box-shadow: 0 20px 50px rgba(0,0,0,0.6); position: relative; overflow: hidden; }
              .watermark-grid { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(7, 1fr); gap: 30px 15px; padding: 20px; pointer-events: none; opacity: 0.08; overflow: hidden; z-index: 0; }
              .watermark-item { font-size: 10px; font-weight: 900; color: #fde68a; letter-spacing: 2px; text-transform: uppercase; transform: rotate(-25deg); white-space: nowrap; text-align: center; }
              .logo-header { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 8px; position: relative; z-index: 1; }
              .portal-tag { color: #94a3b8; font-size: 11px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 25px; position: relative; z-index: 1; }
              .tier-badge { display: inline-block; padding: 6px 18px; border-radius: 9999px; background: ${tierColor}; color: #0f172a; font-weight: 900; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px; position: relative; z-index: 1; }
              .cert-title { font-size: 24px; color: ${tierColor}; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; position: relative; z-index: 1; }
              .p-text { font-size: 14px; color: #cbd5e1; margin: 10px 0; position: relative; z-index: 1; }
              .candidate-name { font-size: 36px; font-weight: 900; color: #ffffff; margin: 15px 0; border-bottom: 3px solid ${tierColor}; display: inline-block; padding-bottom: 8px; padding-left: 25px; padding-right: 25px; position: relative; z-index: 1; }
              .disc-title { font-size: 17px; font-weight: 800; color: #818cf8; margin-top: 15px; position: relative; z-index: 1; }
              .stats-container { display: flex; justify-content: center; gap: 18px; margin: 35px 0; flex-wrap: wrap; position: relative; z-index: 1; }
              .stat-card { background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255,255,255,0.12); padding: 16px 22px; border-radius: 16px; min-width: 110px; }
              .stat-val { font-size: 24px; font-weight: 900; }
              .stat-lbl { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #94a3b8; margin-top: 4px; }
              .footer-info { margin-top: 35px; font-size: 12px; color: #64748b; font-family: monospace; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; position: relative; z-index: 1; }
            </style>
          </head>
          <body>
            <div class="cert-box">
              <div class="watermark-grid">
                ${Array.from({ length: 35 }).map(() => `<div class="watermark-item">DAIRYHUB CERTIFIED</div>`).join('')}
              </div>
              <div class="logo-header">
                <img src="${origin}/dairyhub-logo.png" alt="DairyHub Logo" class="logo-img" />
                <div class="logo-text">Dairy<span style="color: #f59e0b;">Hub</span></div>
              </div>
              <div class="portal-tag">Official Performance & Skill Certification Portal</div>
              <div class="tier-badge">${badgeText}</div>
              <div class="cert-title">${tierTitle}</div>
              <div class="p-text">This official performance certificate is proudly presented to</div>
              <div class="candidate-name">${candidateName}</div>
              <div class="disc-title">
                ${selectedDiscipline.toUpperCase()} TECHNOLOGY (${selectedTestMode === "mock" ? "30 Qs Quick Mock Test" : "120 Qs Examination"})
              </div>
              <div class="p-text" style="font-family: monospace;">Certificate ID: CERT-DH-2026-#${paperMetadata.paperId}-${paperSeedCounter}</div>

              <div class="stats-container">
                <div class="stat-card">
                  <div class="stat-val" style="color: ${tierColor};">${stats.score} / ${stats.maxScore}</div>
                  <div class="stat-lbl">Final Score</div>
                </div>
                <div class="stat-card">
                  <div class="stat-val" style="color: #34d399;">${stats.accuracy}%</div>
                  <div class="stat-lbl">Accuracy</div>
                </div>
                <div class="stat-card">
                  <div class="stat-val" style="color: #60a5fa;">${stats.correct}</div>
                  <div class="stat-lbl">Correct Qs</div>
                </div>
                <div class="stat-card">
                  <div class="stat-val" style="color: #f87171;">${stats.incorrect}</div>
                  <div class="stat-lbl">Incorrect Qs</div>
                </div>
              </div>

              <div class="footer-info">
                Issued on ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} • DairyHub Academic Committee
              </div>
            </div>
            <script>
              window.onload = function() { window.print(); }
            </script>
          </body>
        </html>
      `);
      printWin.document.close();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    const qId = paperMetadata.questions[currentIndex].id;
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const handleClearResponse = () => {
    const qId = paperMetadata.questions[currentIndex].id;
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  const handleMarkForReviewNext = () => {
    const qId = paperMetadata.questions[currentIndex].id;
    setMarkedForReview((prev) => ({ ...prev, [qId]: true }));
    if (currentIndex < paperMetadata.questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setVisited((prev) => ({ ...prev, [paperMetadata.questions[nextIndex].id]: true }));
    }
  };

  const handleSaveNext = () => {
    if (currentIndex < paperMetadata.questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setVisited((prev) => ({ ...prev, [paperMetadata.questions[nextIndex].id]: true }));
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setVisited((prev) => ({ ...prev, [paperMetadata.questions[index].id]: true }));
    setShowMobilePaletteDrawer(false);
  };

  // Stats calculation
  const stats = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let markedOnly = 0;
    let answeredAndMarked = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    paperMetadata.questions.forEach((q) => {
      const isAns = userAnswers[q.id] !== undefined;
      const isRev = markedForReview[q.id];

      if (isAns && isRev) answeredAndMarked++;
      else if (isAns) answered++;
      else if (isRev) markedOnly++;
      else notAnswered++;

      if (isAns) {
        if (userAnswers[q.id] === q.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      } else {
        unattempted++;
      }
    });

    const score = correct * 4 - incorrect * 1;
    const maxScore = paperMetadata.questions.length * 4;
    const accuracy = (answered + answeredAndMarked) > 0 
      ? ((correct / (answered + answeredAndMarked)) * 100).toFixed(1) 
      : "0";

    return {
      answered,
      notAnswered,
      markedOnly,
      answeredAndMarked,
      correct,
      incorrect,
      unattempted,
      score,
      maxScore,
      accuracy
    };
  }, [paperMetadata.questions, userAnswers, markedForReview]);

  const currentTierInfo = useMemo(() => {
    const pct = stats.maxScore > 0 ? (stats.score / stats.maxScore) * 100 : 0;
    const acc = parseFloat(stats.accuracy) || 0;

    if (pct >= 85 || acc >= 90) {
      return {
        tierName: "Platinum Tier",
        fullName: "PLATINUM TIER CERTIFICATE",
        textColor: "text-amber-300",
        badgeClass: "bg-sky-500 text-slate-950 border-sky-300 font-black",
        icon: "👑"
      };
    } else if (pct >= 70 || acc >= 75) {
      return {
        tierName: "Gold Tier",
        fullName: "GOLD TIER CERTIFICATE",
        textColor: "text-amber-400",
        badgeClass: "bg-amber-500 text-slate-950 border-amber-300 font-black",
        icon: "🥇"
      };
    } else if (pct >= 50 || acc >= 60) {
      return {
        tierName: "Silver Tier",
        fullName: "SILVER TIER CERTIFICATE",
        textColor: "text-slate-200",
        badgeClass: "bg-slate-300 text-slate-950 border-white font-black",
        icon: "🥈"
      };
    } else {
      return {
        tierName: "Bronze Tier",
        fullName: "BRONZE TIER CERTIFICATE",
        textColor: "text-amber-500",
        badgeClass: "bg-amber-800 text-amber-100 border-amber-600 font-black",
        icon: "🥉"
      };
    }
  }, [stats.score, stats.maxScore, stats.accuracy]);

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return hrs > 0 
      ? `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
      : `${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleToggleDesktopMode = async () => {
    const nextState = !isDesktopMode;
    setIsDesktopMode(nextState);

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (nextState) {
        try {
          const docEl = document.documentElement as any;
          if (docEl.requestFullscreen) await docEl.requestFullscreen();
          else if (docEl.webkitRequestFullscreen) await docEl.webkitRequestFullscreen();
        } catch (err) {}

        if (window.screen && (window.screen as any).orientation) {
          try {
            await (window.screen as any).orientation.lock("landscape").catch(() => {});
          } catch (err) {}
        }
      } else {
        try {
          const docElement = document as any;
          if (docElement.fullscreenElement || docElement.webkitFullscreenElement) {
            if (document.exitFullscreen) await document.exitFullscreen();
          }
        } catch (err) {}

        if (window.screen && (window.screen as any).orientation) {
          try {
            (window.screen as any).orientation.unlock();
          } catch (err) {}
        }
      }
    }
  };

  const currentQ = paperMetadata.questions[currentIndex] || paperMetadata.questions[0];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={cn(
        "w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none sm:w-[98vw] sm:h-[96vh] sm:max-w-7xl sm:rounded-2xl p-0 flex flex-col bg-slate-900 text-white overflow-hidden border border-slate-800 transition-all duration-300",
        isDesktopMode && "fixed inset-0 !top-0 !left-0 !translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none !max-h-none !rounded-none !border-0 font-sans z-[99999] p-0 m-0 bg-slate-900"
      )}>
        
        {/* HEADER BAR */}
        <div className="bg-slate-950 border-b border-slate-800 p-2.5 sm:p-4 flex flex-wrap items-center justify-between gap-2 shrink-0 shadow-md">
          <div className="flex items-center gap-2.5">
            {testStatus !== "hub" && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setTestStatus("hub")}
                className="h-8 w-8 p-0 text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-sm shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="font-extrabold text-xs sm:text-base text-white flex items-center gap-2">
                National Exam & Mock Test Hub
                <Badge className="bg-amber-500 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase">
                  Auto-Updating
                </Badge>
              </h2>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono">
                {testStatus === "hub" ? "Select Discipline & Test Mode" : `Set ID: ${paperMetadata.paperId}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Desktop Fullscreen Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleToggleDesktopMode}
              className={cn(
                "h-8 sm:h-9 text-xs font-bold px-2.5 rounded-xl border flex items-center gap-1.5 transition-all",
                isDesktopMode
                  ? "bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 font-black shadow-md"
                  : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300"
              )}
            >
              {isDesktopMode ? <Monitor className="w-4 h-4 text-slate-950" /> : <Smartphone className="w-4 h-4 text-amber-400" />}
              {isDesktopMode ? "🖥️ Exit Fullscreen" : "🖥️ Fullscreen Desktop View"}
            </Button>

            {testStatus === "running" && (
              <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded-xl animate-pulse">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {formatTime(timeRemaining)}
              </div>
            )}
          </div>
        </div>

        {/* ================= VIEW 0: ENTRY LANDING HUB SCREEN ================= */}
        {testStatus === "hub" && (
          <ScrollArea className="flex-1 p-4 sm:p-8 bg-slate-900">
            <div className="max-w-5xl mx-auto space-y-6">
              
              {/* Welcome Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 border border-indigo-500/30 text-white shadow-2xl space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Live Dynamic Question Bank
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Dairy, Food Tech & Biotechnology Test Series
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Choose your stream below to attempt <strong>30-Question Quick Mock Tests</strong> or <strong>120-Question NTA/GATE Style Live Examinations</strong>. Questions update automatically every single time!
                </p>
              </div>
              {/* TEST SERIES SET SELECTION DROPDOWN */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-amber-500/40 text-white shadow-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Label className="text-xs sm:text-sm font-black text-amber-400 flex items-center gap-2 uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-amber-400" /> Select Test Series Paper Set (5 Unique Paper Series Available):
                  </Label>
                  <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-[10px] uppercase px-2.5 py-0.5 shadow-sm">
                    Series Set #{selectedSeriesSet} Active
                  </Badge>
                </div>

                <Select
                  value={selectedSeriesSet.toString()}
                  onValueChange={(val) => {
                    const setNum = parseInt(val);
                    setSelectedSeriesSet(setNum);
                    loadFreshPaperSet(selectedDiscipline, selectedTestMode, setNum, paperSeedCounter);
                  }}
                >
                  <SelectTrigger className="bg-slate-950 border-amber-500/50 text-white font-extrabold text-xs sm:text-sm h-12 rounded-xl focus:ring-amber-500">
                    <SelectValue placeholder="Choose Test Series Paper Set" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-950 border-amber-500/50 text-white font-bold text-xs sm:text-sm">
                    {TEST_SERIES_SETS.map((sSet) => (
                      <SelectItem key={sSet.id} value={sSet.id.toString()} className="py-2.5 focus:bg-indigo-950 focus:text-amber-300">
                        <div className="flex flex-col">
                          <span className="font-extrabold text-amber-300">{sSet.title}</span>
                          <span className="text-[10px] text-slate-400 font-normal">{sSet.subtitle}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <p className="text-[11px] text-slate-400 italic">
                  * Select any of the 5 series sets above. Each set contains 100% completely different & unique questions crafted for GATE, NTA, FSSAI & Plant exams!
                </p>
              </div>

              {/* DISCIPLINE SELECTION CARDS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 🥛 DAIRY TECHNOLOGY CARD */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                      🥛
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-indigo-400 transition-colors">
                      Dairy Technology
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      ICAR AIEEA PG, ICAR NET, Dairy Chemistry, Engineering, Microbiology & Processing MCQs.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("dairy");
                        setSelectedTestMode("mock");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-slate-800 hover:bg-indigo-600 text-white font-bold text-xs h-9 rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      30 Qs Quick Mock Test
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("dairy");
                        setSelectedTestMode("full");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-xs h-9 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-300" />
                      120 Qs NTA Live Exam
                    </Button>
                  </div>
                </div>

                {/* 🍕 FOOD TECHNOLOGY CARD */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                      🍕
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-amber-400 transition-colors">
                      Food Technology
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      GATE XE/XL, CFTRI Entrance, FSSAI CFSO/TO, Food Safety & Preservation MCQs.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("food");
                        setSelectedTestMode("mock");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-slate-800 hover:bg-amber-600 hover:text-slate-950 text-white font-bold text-xs h-9 rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      30 Qs Quick Mock Test
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("food");
                        setSelectedTestMode("full");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs h-9 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Trophy className="w-3.5 h-3.5 text-slate-950" />
                      120 Qs GATE Live Exam
                    </Button>
                  </div>
                </div>

                {/* 🧬 BIOTECHNOLOGY CARD */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                      🧬
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-teal-400 transition-colors">
                      Biotechnology
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      GAT-B, GATE BT, Recombinant DNA, Fermentation, Downstream Processing & PCR MCQs.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("biotech");
                        setSelectedTestMode("mock");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-slate-800 hover:bg-teal-600 text-white font-bold text-xs h-9 rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      30 Qs Quick Mock Test
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("biotech");
                        setSelectedTestMode("full");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-slate-950 font-black text-xs h-9 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Trophy className="w-3.5 h-3.5 text-slate-950" />
                      120 Qs GAT-B Live Exam
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </ScrollArea>
        )}

        {/* ================= VIEW 1: INSTRUCTIONS SCREEN ================= */}
        {testStatus === "instructions" && (
          <ScrollArea className="flex-1 p-4 sm:p-8 bg-slate-900">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Exam Title Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-900 border border-indigo-500/30 text-white shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Live Auto-Updating Test Engine
                  </span>
                  <Badge className="bg-indigo-600 text-white font-mono text-[10px]">
                    Paper Set #{paperSeedCounter}
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedDiscipline === "dairy" ? "🥛 Dairy Technology" : selectedDiscipline === "food" ? "🍕 Food Technology" : "🧬 Biotechnology"}{" "}
                  {selectedTestMode === "mock" ? "Quick Mock Test (30 Qs)" : "National Live Exam (120 Qs)"}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every time you take or retake a test, our engine automatically shuffles & generates a fresh randomized paper set!
                </p>

                {/* Series Dropdown Selector inside Instructions view */}
                <div className="pt-2">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-amber-500/40 space-y-2">
                    <Label className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
                      <Layers className="w-3.5 h-3.5 text-amber-400" /> Switch Test Series Paper Set:
                    </Label>
                    <Select
                      value={selectedSeriesSet.toString()}
                      onValueChange={(val) => {
                        const setNum = parseInt(val);
                        setSelectedSeriesSet(setNum);
                        loadFreshPaperSet(selectedDiscipline, selectedTestMode, setNum, paperSeedCounter);
                      }}
                    >
                      <SelectTrigger className="bg-slate-900 border-amber-500/50 text-white font-extrabold text-xs h-10 rounded-lg">
                        <SelectValue placeholder="Choose Test Series Set" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-950 border-amber-500/50 text-white font-bold text-xs">
                        {TEST_SERIES_SETS.map((sSet) => (
                          <SelectItem key={sSet.id} value={sSet.id.toString()} className="py-2 focus:bg-indigo-950 focus:text-amber-300">
                            {sSet.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Questions</span>
                    <span className="text-lg font-black text-white">{paperMetadata.totalQs} MCQs</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Time</span>
                    <span className="text-lg font-black text-amber-400">{paperMetadata.timeMins} Mins</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Max Marks</span>
                    <span className="text-lg font-black text-emerald-400">{paperMetadata.totalQs * 4} Marks</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Marking Scheme</span>
                    <span className="text-lg font-black text-purple-400">+4 / -1 Mark</span>
                  </div>
                </div>
              </div>

              {/* Instructions Box */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  Official Examination Guidelines & Navigation Symbols:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center font-bold text-white shrink-0">1</span>
                    <span className="text-slate-300"><strong>Grey:</strong> You have not visited the question yet.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white shrink-0">2</span>
                    <span className="text-slate-300"><strong>Red:</strong> You have visited but not answered the question.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white shrink-0">3</span>
                    <span className="text-slate-300"><strong>Green:</strong> You have answered the question.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">4</span>
                    <span className="text-slate-300"><strong>Purple:</strong> Marked for Review (Not answered).</span>
                  </div>
                </div>

                <div className="p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 leading-relaxed flex items-center justify-between gap-3">
                  <div>
                    📱 <strong>For Real Desktop Experience on Mobile:</strong> Click the <strong>"🖥️ Fullscreen Desktop View"</strong> button at top right to auto-rotate screen into Landscape Mode.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setTestStatus("hub")}
                  className="bg-slate-800 border-slate-700 text-white font-bold text-xs h-12 px-6 rounded-2xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Selection Hub
                </Button>
                <Button
                  onClick={handleStartTest}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm px-8 h-12 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Play className="w-5 h-5 fill-slate-950" />
                  START {paperMetadata.totalQs} Qs TEST NOW
                </Button>
              </div>
            </div>
          </ScrollArea>
        )}

        {/* ================= VIEW 2: LIVE TEST RUNNING INTERFACE ================= */}
        {testStatus === "running" && paperMetadata.questions.length > 0 && currentQ && (
          <div className={cn(
            "flex-1 flex overflow-hidden bg-slate-900 relative w-full h-full",
            isDesktopMode ? "flex-row w-full" : "flex-col md:flex-row"
          )}>
            
            {/* Left Area: Main Question & Options */}
            <div className="flex-1 flex flex-col justify-between p-3 sm:p-6 overflow-y-auto border-r border-slate-800">
              <div className="space-y-3 sm:space-y-4">
                {/* Question Info Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="font-extrabold text-xs sm:text-sm text-indigo-400 flex items-center gap-2">
                    Question {currentIndex + 1} of {paperMetadata.questions.length}
                    <Badge variant="outline" className="text-[9px] sm:text-[10px] bg-slate-800 border-slate-700 text-slate-300">
                      {currentQ.category}
                    </Badge>
                  </span>
                  <span className="text-[11px] sm:text-xs text-emerald-400 font-mono font-bold">
                    +4 Marks / -1 Negative
                  </span>
                </div>

                {/* Question Text */}
                <div className="p-3.5 sm:p-5 bg-slate-950 rounded-2xl border border-slate-800">
                  <p className="text-xs sm:text-base font-bold text-white leading-relaxed">
                    {currentQ.question}
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-2 pt-1">
                  {currentQ.options.map((opt, idx) => {
                    const qId = currentQ.id;
                    const isSelected = userAnswers[qId] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={cn(
                          "w-full p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-start gap-3",
                          isSelected
                            ? "bg-indigo-600/30 border-indigo-500 text-white shadow-md ring-1 ring-indigo-400"
                            : "bg-slate-950/60 hover:bg-slate-800/80 border-slate-800 text-slate-300"
                        )}
                      >
                        <span className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5",
                          isSelected ? "bg-indigo-500 text-white" : "bg-slate-800 text-slate-400"
                        )}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Control Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-800 mt-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Button
                    onClick={handleMarkForReviewNext}
                    variant="outline"
                    className="bg-purple-950/60 hover:bg-purple-900/80 border-purple-700 text-purple-200 text-[11px] sm:text-xs font-bold h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl"
                  >
                    Review & Next
                  </Button>
                  <Button
                    onClick={handleClearResponse}
                    variant="outline"
                    className="bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 text-[11px] sm:text-xs font-bold h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl"
                  >
                    Clear
                  </Button>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {!isDesktopMode && (
                    <Button
                      onClick={() => setShowMobilePaletteDrawer(!showMobilePaletteDrawer)}
                      variant="outline"
                      className="bg-indigo-950/80 border-indigo-700 text-indigo-300 text-[11px] font-bold h-9 px-2.5 rounded-xl md:hidden"
                    >
                      <Grid className="w-3.5 h-3.5 mr-1" /> Grid ({paperMetadata.totalQs})
                    </Button>
                  )}
                  <Button
                    onClick={() => handleJumpToQuestion(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    variant="outline"
                    className="bg-slate-800 border-slate-700 text-white text-[11px] sm:text-xs font-bold h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Prev
                  </Button>
                  <Button
                    onClick={handleSaveNext}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-extrabold text-[11px] sm:text-xs h-9 sm:h-10 px-4 sm:px-5 rounded-xl shadow-md"
                  >
                    Save & Next <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Area: Question Palette Sidebar */}
            <div className={cn(
              "bg-slate-950 p-3 sm:p-4 border-t md:border-t-0 md:border-l border-slate-800 flex flex-col justify-between overflow-y-auto transition-all",
              isDesktopMode ? "w-80 flex" : "w-full md:w-80",
              !isDesktopMode && !showMobilePaletteDrawer && "hidden md:flex"
            )}>
              <div className="space-y-3">
                {/* Palette Header */}
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      CBT
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Question Palette</span>
                      <span className="text-[10px] text-slate-400 block font-mono">Set #{paperSeedCounter}</span>
                    </div>
                  </div>
                  {!isDesktopMode && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowMobilePaletteDrawer(false)}
                      className="text-xs text-slate-400 md:hidden p-1 h-7"
                    >
                      ✕ Close
                    </Button>
                  )}
                </div>

                {/* Status Color Legend */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] sm:text-[11px] font-bold">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-emerald-600"></span> Answered ({stats.answered})
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-red-600"></span> Not Answered ({stats.notAnswered})
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-purple-600"></span> Review ({stats.markedOnly})
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-slate-700"></span> Not Visited
                  </div>
                </div>

                {/* Question Palette Grid */}
                <div className="pt-1">
                  <span className="text-[11px] font-extrabold text-slate-300 block mb-1.5">Questions (1 - {paperMetadata.totalQs}):</span>
                  <ScrollArea className="h-56 sm:h-72 pr-2">
                    <div className="grid grid-cols-5 gap-1.5">
                      {paperMetadata.questions.map((q, idx) => {
                        const isAns = userAnswers[q.id] !== undefined;
                        const isRev = markedForReview[q.id];
                        const isVis = visited[q.id];
                        const isCurrent = currentIndex === idx;

                        let bgClass = "bg-slate-800 text-slate-400";
                        if (isAns && isRev) bgClass = "bg-purple-600 text-white border-2 border-emerald-400";
                        else if (isAns) bgClass = "bg-emerald-600 text-white font-bold";
                        else if (isRev) bgClass = "bg-purple-600 text-white";
                        else if (isVis) bgClass = "bg-red-600 text-white";

                        return (
                          <button
                            key={q.id}
                            onClick={() => handleJumpToQuestion(idx)}
                            className={cn(
                              "h-7 sm:h-8 rounded-lg text-xs font-mono font-bold transition-transform flex items-center justify-center",
                              bgClass,
                              isCurrent && "ring-2 ring-amber-400 scale-105 z-10 shadow-lg"
                            )}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </div>
              </div>

              {/* Submit Test Button */}
              <div className="pt-3 border-t border-slate-800 mt-2">
                <Button
                  onClick={() => setIsSubmitConfirmOpen(true)}
                  className="w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-black text-xs h-10 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  SUBMIT FINAL TEST
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW 3: DETAILED SCORECARD & SOLUTION KEY ================= */}
        {testStatus === "scorecard" && (
          <div className="flex-1 w-full max-w-full min-w-0 overflow-y-auto p-3 sm:p-6 md:p-8 bg-slate-900 custom-scrollbar overscroll-contain">
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Scorecard Hero Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border border-indigo-500/30 text-white shadow-2xl text-center space-y-3">
                <Trophy className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Official Performance Scorecard & Analysis
                </h1>
                <p className="text-xs text-slate-300 font-mono">
                  Set ID: {paperMetadata.paperId} | {selectedDiscipline.toUpperCase()} {selectedTestMode.toUpperCase()}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl mx-auto">
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-indigo-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Your Final Score</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">{stats.score} / {stats.maxScore}</span>
                  </div>
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-emerald-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Accuracy %</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400">{stats.accuracy}%</span>
                  </div>
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-blue-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Correct Answers</span>
                    <span className="text-2xl sm:text-3xl font-black text-blue-400">{stats.correct}</span>
                  </div>
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-red-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Incorrect Answers</span>
                    <span className="text-2xl sm:text-3xl font-black text-red-400">{stats.incorrect}</span>
                  </div>
                </div>
              </div>

              {/* OFFICIAL HIGH-RES CERTIFICATE PREVIEW & DOWNLOAD SECTION */}
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-slate-950 rounded-2xl border border-amber-500/40 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-black text-sm sm:text-base text-amber-400 flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400 animate-pulse shrink-0" />
                        Official DairyHub National Certificate
                      </h3>
                      <Badge className={cn("text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold", currentTierInfo.badgeClass)}>
                        {currentTierInfo.icon} {currentTierInfo.tierName}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-300">
                      Edit candidate name below & download your high-resolution authenticated PDF/Image certificate directly to your phone or desktop.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-1">
                      <Label className="text-xs font-bold text-slate-300 shrink-0 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-amber-400" /> Candidate Name on Certificate:
                      </Label>
                      <Input
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Enter Candidate Full Name"
                        className="bg-slate-900 border-amber-500/40 text-white font-black text-xs h-9 w-full sm:max-w-xs rounded-xl focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Universal Mobile & Desktop Download Action Buttons */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                    <Button
                      onClick={handleDownloadCertificatePdf}
                      disabled={isGeneratingCert}
                      className="flex-1 sm:flex-initial bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs h-10 px-4 rounded-xl shadow-lg flex items-center justify-center gap-1.5 active:scale-95 border border-amber-400/40"
                    >
                      {isGeneratingCert ? (
                        <Loader2 className="w-4 h-4 text-slate-950 animate-spin" />
                      ) : (
                        <Download className="w-4 h-4 text-slate-950" />
                      )}
                      Download PDF Certificate
                    </Button>

                    <Button
                      onClick={handleDownloadCertificateImage}
                      disabled={isGeneratingCert}
                      variant="outline"
                      className="flex-1 sm:flex-initial bg-slate-900 border-indigo-500/50 hover:bg-indigo-950 text-indigo-300 font-bold text-xs h-10 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <Image className="w-4 h-4 text-indigo-400" />
                      Save PNG Image
                    </Button>

                    <Button
                      onClick={handlePrintCertificate}
                      variant="ghost"
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold h-10 px-3 rounded-xl shrink-0"
                      title="Print / Pop-up Preview"
                    >
                      <Printer className="w-4 h-4 text-slate-400" />
                    </Button>
                  </div>
                </div>

                {/* THE RESPONSIVE HIGH-RES CERTIFICATE PREVIEW CONTAINER WITH TOUCH PANNING (IDENTICAL TO PLANT FORMATS) */}
                <div
                  ref={certContainerRef}
                  className={cn(
                    "w-full overflow-x-auto print:overflow-visible touch-pan-x pb-4 pt-1 custom-scrollbar overscroll-x-contain",
                    isCertMouseDragging ? "cursor-grabbing select-none" : "cursor-grab"
                  )}
                  style={{
                    touchAction: "pan-x",
                    WebkitOverflowScrolling: "touch",
                  }}
                  onMouseDown={handleCertMouseDown}
                  onMouseMove={handleCertMouseMove}
                  onMouseUp={handleCertMouseUp}
                  onMouseLeave={handleCertMouseUp}
                >
                  <div className="inline-block min-w-[1000px] shrink-0">
                    <div
                      ref={certRef}
                      id="dairyhub-official-certificate"
                      className="w-[1000px] h-[707px] min-w-[1000px] min-h-[707px] p-10 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 border-8 border-double border-amber-400/90 text-white relative shadow-2xl overflow-hidden font-sans flex flex-col justify-between shrink-0 select-none my-1"
                      style={{
                        backgroundImage: `radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(245, 158, 11, 0.2) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 60%)`,
                      }}
                    >
                      {/* REPEATING SMALL TILED SECURITY WATERMARK GRID ACROSS ENTIRE CERTIFICATE BACKGROUND */}
                      <div className="absolute inset-0 grid grid-cols-5 grid-rows-7 gap-y-12 gap-x-6 p-6 pointer-events-none select-none overflow-hidden z-0 opacity-[0.08] justify-items-center items-center">
                        {Array.from({ length: 35 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="text-[10px] font-black text-amber-200 tracking-widest uppercase rotate-[-25deg] whitespace-nowrap"
                          >
                            DAIRYHUB CERTIFIED
                          </div>
                        ))}
                      </div>

                      {/* Corner Ornaments */}
                      <div className="absolute top-3 left-3 w-8 h-8 border-t-4 border-l-4 border-amber-400 rounded-tl-lg pointer-events-none" />
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-4 border-r-4 border-amber-400 rounded-tr-lg pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-4 border-l-4 border-amber-400 rounded-bl-lg pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-4 border-r-4 border-amber-400 rounded-br-lg pointer-events-none" />

                      {/* Certificate Header */}
                      <div className="flex items-center justify-between border-b-2 border-amber-400/80 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-0.5 shadow-lg shrink-0">
                            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center p-1">
                              <img src="/dairyhub-logo.png" alt="DairyHub" className="w-full h-full object-contain rounded-lg" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-white tracking-wide uppercase flex items-center gap-1.5">
                              Dairy<span className="text-amber-400">Hub</span> Test Series
                            </h4>
                            <p className="text-[10px] text-amber-300 font-extrabold uppercase tracking-widest">
                              Official Performance & Skill Certification Portal
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 font-mono block uppercase">Certificate ID</span>
                          <span className="text-xs font-mono font-bold text-amber-400">
                            CERT-DH-2026-#{paperMetadata.paperId}-{paperSeedCounter}
                          </span>
                        </div>
                      </div>

                      {/* Certificate Main Title */}
                      <div className="text-center space-y-2 py-2">
                        <div className="inline-flex items-center gap-2 bg-slate-900/90 border-2 border-amber-400/80 px-4 py-1 rounded-full text-amber-300 font-black text-xs tracking-widest uppercase">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Official Certificate of Achievement
                        </div>

                        {/* Left & Right Golden Accent Lines Flanking Bright Title */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 py-1">
                          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-400 to-amber-300 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)] shrink-0" />
                          <h2 className={cn("text-3xl font-black uppercase tracking-wider text-center drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)] whitespace-nowrap", currentTierInfo.textColor)}>
                            {currentTierInfo.icon} {currentTierInfo.fullName}
                          </h2>
                          <div className="h-1 w-16 sm:w-24 bg-gradient-to-l from-transparent via-amber-400 to-amber-300 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)] shrink-0" />
                        </div>

                        <p className="text-xs text-slate-300 font-medium italic">
                          This official certificate is proudly awarded to
                        </p>

                        <div className="py-2">
                          <h1 className="text-4xl font-extrabold text-white tracking-wide underline decoration-amber-400 decoration-4 underline-offset-8">
                            {studentName.trim() || user?.displayName || "Dairy Technology Scholar"}
                          </h1>
                        </div>

                        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed pt-1">
                          for successfully completing the Online CBT Test Series Examination in
                        </p>

                        <div className="inline-block bg-indigo-950/80 border border-indigo-500/40 px-5 py-1.5 rounded-xl text-indigo-300 font-black text-sm uppercase tracking-wider shadow-inner">
                          {selectedDiscipline.toUpperCase()} TECHNOLOGY ({selectedTestMode === "mock" ? "30 Qs Quick Mock Test" : "120 Qs Examination"})
                        </div>
                      </div>

                      {/* Official Performance Breakdown Metrics */}
                      <div className="grid grid-cols-4 gap-3 bg-slate-900/90 p-4 rounded-2xl border-2 border-amber-400/80 text-center shadow-lg">
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-amber-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Final Score</span>
                          <span className="text-lg font-black text-amber-400">{stats.score} / {stats.maxScore}</span>
                        </div>
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-emerald-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Accuracy Rate</span>
                          <span className="text-lg font-black text-emerald-400">{stats.accuracy}%</span>
                        </div>
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-blue-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Correct Qs</span>
                          <span className="text-lg font-black text-blue-400">{stats.correct}</span>
                        </div>
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-purple-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Grade Rank</span>
                          <span className="text-lg font-black text-purple-300">
                            {parseFloat(stats.accuracy) >= 90 ? "A+ Grade" : parseFloat(stats.accuracy) >= 75 ? "A Grade" : "Pass"}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Signatures & Seal Footer */}
                      <div className="flex items-center justify-between pt-4 border-t-2 border-amber-400/80 text-xs">
                        {/* Left: Issue Date */}
                        <div className="text-left">
                          <span className="text-[10px] text-slate-400 block uppercase font-mono">Date of Issue</span>
                          <span className="text-xs font-bold text-slate-200">
                            {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                          </span>
                        </div>

                        {/* Center: Royal 32-Point Chakra Cut Gold Certificate Seal */}
                        <div className="relative w-24 h-24 flex items-center justify-center shrink-0 filter drop-shadow-[0_4px_14px_rgba(245,158,11,0.6)]">
                          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <defs>
                              <linearGradient id="goldChakraOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fef08a" />
                                <stop offset="25%" stopColor="#f59e0b" />
                                <stop offset="50%" stopColor="#fbbf24" />
                                <stop offset="75%" stopColor="#d97706" />
                                <stop offset="100%" stopColor="#92400e" />
                              </linearGradient>
                              <linearGradient id="goldChakraInner" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#78350f" />
                                <stop offset="40%" stopColor="#d97706" />
                                <stop offset="70%" stopColor="#f59e0b" />
                                <stop offset="100%" stopColor="#fef08a" />
                              </linearGradient>
                              <radialGradient id="centerDisc" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#1e1b4b" />
                                <stop offset="85%" stopColor="#0f172a" />
                                <stop offset="100%" stopColor="#020617" />
                              </radialGradient>
                            </defs>

                            {/* 32-Point Serrated Chakra Cut Outer Rosette */}
                            <polygon
                              points="50.00,1.00 54.26,6.71 59.56,1.94 62.63,8.37 68.75,4.73 70.51,11.64 77.22,9.26 77.60,16.37 84.65,15.35 83.63,22.40 90.74,22.78 88.36,29.49 95.27,31.25 91.63,37.37 98.06,40.44 93.29,45.74 99.00,50.00 93.29,54.26 98.06,59.56 91.63,62.63 95.27,68.75 88.36,70.51 90.74,77.22 83.63,77.60 84.65,84.65 77.60,83.63 77.22,90.74 70.51,88.36 68.75,95.27 62.63,91.63 59.56,98.06 54.26,93.29 50.00,99.00 45.74,93.29 40.44,98.06 37.37,91.63 31.25,95.27 29.49,88.36 22.78,90.74 22.40,83.63 15.35,84.65 16.37,77.60 9.26,77.22 11.64,70.51 4.73,68.75 8.37,62.63 1.94,59.56 6.71,54.26 1.00,50.00 6.71,45.74 1.94,40.44 8.37,37.37 4.73,31.25 11.64,29.49 9.26,22.78 16.37,22.40 15.35,15.35 22.40,16.37 22.78,9.26 29.49,11.64 31.25,4.73 37.37,8.37 40.44,1.94 45.74,6.71"
                              fill="url(#goldChakraOuter)"
                              stroke="#ca8a04"
                              strokeWidth="0.8"
                            />

                            {/* Concentric Golden Outer Border Ring */}
                            <circle cx="50" cy="50" r="41" fill="none" stroke="url(#goldChakraInner)" strokeWidth="1.5" />
                            <circle cx="50" cy="50" r="38.5" fill="none" stroke="#fef08a" strokeWidth="0.6" strokeDasharray="1.2 1.2" />

                            {/* Chakra Spokes (24 Spokes like Ashoka / Royal Chakra) */}
                            {Array.from({ length: 24 }).map((_, i) => (
                              <line
                                key={i}
                                x1="50"
                                y1="50"
                                x2={(50 + 38 * Math.cos((i * Math.PI) / 12)).toFixed(2)}
                                y2={(50 + 38 * Math.sin((i * Math.PI) / 12)).toFixed(2)}
                                stroke="#f59e0b"
                                strokeWidth="0.5"
                                strokeOpacity="0.4"
                              />
                            ))}

                            {/* Center Deep Midnight / Indigo Disc with Gold Rim */}
                            <circle cx="50" cy="50" r="34" fill="url(#centerDisc)" stroke="url(#goldChakraOuter)" strokeWidth="1.5" />
                            <circle cx="50" cy="50" r="31.5" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="1 1" />

                            {/* Top Curved Text: DAIRYHUB (Rounded along the top circumference) */}
                            <text x="36.85" y="26.99" transform="rotate(-29.8 36.85 26.99)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">D</text>
                            <text x="40.40" y="25.30" transform="rotate(-21.3 40.40 25.30)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">A</text>
                            <text x="44.15" y="24.15" transform="rotate(-12.8 44.15 24.15)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">I</text>
                            <text x="48.04" y="23.57" transform="rotate(-4.3 48.04 23.57)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">R</text>
                            <text x="51.96" y="23.57" transform="rotate(4.3 51.96 23.57)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">Y</text>
                            <text x="55.85" y="24.15" transform="rotate(12.8 55.85 24.15)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">H</text>
                            <text x="59.60" y="25.30" transform="rotate(21.3 59.60 25.30)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">U</text>
                            <text x="63.15" y="26.99" transform="rotate(29.8 63.15 26.99)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">B</text>

                            {/* Bottom Curved Text: OFFICIAL SEAL (Rounded along the bottom circumference) */}
                            <text x="34.88" y="71.76" transform="rotate(34.8 34.88 71.76)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">O</text>
                            <text x="37.15" y="73.18" transform="rotate(29.0 37.15 73.18)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">F</text>
                            <text x="39.56" y="74.36" transform="rotate(23.2 39.56 74.36)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">F</text>
                            <text x="42.08" y="75.29" transform="rotate(17.4 42.08 75.29)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">I</text>
                            <text x="44.67" y="75.96" transform="rotate(11.6 44.67 75.96)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">C</text>
                            <text x="47.32" y="76.36" transform="rotate(5.8 47.32 76.36)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">I</text>
                            <text x="50.00" y="76.50" transform="rotate(0.0 50.00 76.50)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">A</text>
                            <text x="52.68" y="76.36" transform="rotate(-5.8 52.68 76.36)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">L</text>
                            <text x="55.33" y="75.96" transform="rotate(-11.6 55.33 75.96)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif"> </text>
                            <text x="57.92" y="75.29" transform="rotate(-17.4 57.92 75.29)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">S</text>
                            <text x="60.44" y="74.36" transform="rotate(-23.2 60.44 74.36)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">E</text>
                            <text x="62.85" y="73.18" transform="rotate(-29.0 62.85 73.18)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">A</text>
                            <text x="65.12" y="71.76" transform="rotate(-34.8 65.12 71.76)" textAnchor="middle" dominantBaseline="central" fill="#fde047" fontSize="4.2" fontWeight="900" fontFamily="sans-serif">L</text>
                          </svg>

                          {/* Center Shield Emblem (Completely separated, perfectly centered, no collision) */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                            <ShieldCheck className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                          </div>
                        </div>

                        {/* Right: Signature */}
                        <div className="text-right">
                          <div className="font-extrabold text-amber-400 text-sm leading-tight uppercase">
                            DairyHub
                          </div>
                          <div className="text-[10px] font-bold text-slate-300 border-t border-slate-700 pt-1 mt-0.5">
                            Academic Committee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base sm:text-lg text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                  Detailed Question-by-Question Solution Key:
                </h3>
                <Button
                  onClick={handleStartTest}
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1" /> Retake Fresh Test (Set #{paperSeedCounter + 1})
                </Button>
              </div>

              {/* Solutions List */}
              <div className="space-y-4">
                {paperMetadata.questions.map((q, idx) => {
                  const uAns = userAnswers[q.id];
                  const isCorrect = uAns === q.correctAnswer;
                  const isUnattempted = uAns === undefined;

                  return (
                    <div
                      key={q.id}
                      className={cn(
                        "p-4 sm:p-5 rounded-2xl border transition-all text-xs space-y-3",
                        isCorrect
                          ? "bg-emerald-950/20 border-emerald-500/40"
                          : isUnattempted
                          ? "bg-slate-950/60 border-slate-800"
                          : "bg-red-950/20 border-red-500/40"
                      )}
                    >
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                        <span className="font-extrabold text-sm text-white">
                          Q{idx + 1}. {q.question}
                        </span>
                        <Badge
                          className={cn(
                            "text-[10px] font-extrabold",
                            isCorrect
                              ? "bg-emerald-500 text-slate-950"
                              : isUnattempted
                              ? "bg-slate-700 text-slate-300"
                              : "bg-red-500 text-white"
                          )}
                        >
                          {isCorrect ? "Correct (+4)" : isUnattempted ? "Unattempted (0)" : "Incorrect (-1)"}
                        </Badge>
                      </div>

                      {/* Options breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isUserPicked = uAns === oIdx;
                          const isRightAnswer = q.correctAnswer === oIdx;
                          return (
                            <div
                              key={oIdx}
                              className={cn(
                                "p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between",
                                isRightAnswer
                                  ? "bg-emerald-600/30 border-emerald-500 text-emerald-200"
                                  : isUserPicked
                                  ? "bg-red-600/30 border-red-500 text-red-200"
                                  : "bg-slate-900 border-slate-800 text-slate-400"
                              )}
                            >
                              <span>
                                <strong>{String.fromCharCode(65 + oIdx)}.</strong> {opt}
                              </span>
                              {isRightAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                              {isUserPicked && !isRightAnswer && <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
                            </div>
                          );
                        })}
                      </div>

                      {/* Detailed Solution Explanation */}
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300 leading-relaxed">
                        <span className="font-extrabold text-amber-400 block mb-1">📘 Solution & Explanation:</span>
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* SUBMIT CONFIRMATION MODAL */}
        <Dialog open={isSubmitConfirmOpen} onOpenChange={setIsSubmitConfirmOpen}>
          <DialogContent className="max-w-md bg-slate-900 border-slate-800 text-white rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-black text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Submit Test Series Confirmation?
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-400">
                Are you sure you want to finish and view your final score?
              </DialogDescription>
            </DialogHeader>

            <div className="my-4 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span>Total Answered:</span>
                <span className="font-bold text-emerald-400">{stats.answered + stats.answeredAndMarked}</span>
              </div>
              <div className="flex justify-between">
                <span>Not Answered:</span>
                <span className="font-bold text-red-400">{stats.notAnswered}</span>
              </div>
              <div className="flex justify-between">
                <span>Marked for Review:</span>
                <span className="font-bold text-purple-400">{stats.markedOnly}</span>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setIsSubmitConfirmOpen(false)}
                className="bg-slate-800 border-slate-700 text-white text-xs font-bold"
              >
                Back to Test
              </Button>
              <Button
                onClick={() => {
                  setIsSubmitConfirmOpen(false);
                  setTestStatus("scorecard");
                }}
                className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-black text-xs"
              >
                Confirm & Submit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}
