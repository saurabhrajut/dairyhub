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
import { QRCodeSVG } from "qrcode.react";

import {
  Question,
  MASTER_UNIQUE_QUESTIONS,
  generateMergedTestPaper,
} from "@/lib/content/test-series";

export type { Question };
export { MASTER_UNIQUE_QUESTIONS, generateMergedTestPaper };


export function TestSeriesModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  // Navigation & View Mode State
  const [testStatus, setTestStatus] = useState<"hub" | "instructions" | "running" | "scorecard">("hub");

  const [isDesktopMode, setIsDesktopMode] = useState<boolean>(false);
  const [showMobilePaletteDrawer, setShowMobilePaletteDrawer] = useState<boolean>(false);

  // Current Live Paper Metadata: 50 Questions, 60 Minutes
  const [paperMetadata, setPaperMetadata] = useState<{ 
    questions: Question[]; 
    paperId: string;
    totalQs: number;
    timeMins: number;
  }>({ questions: [], paperId: "", totalQs: 50, timeMins: 60 });

  const [paperSeedCounter, setPaperSeedCounter] = useState<number>(1);
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
  const [timeRemaining, setTimeRemaining] = useState<number>(3600);
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState<boolean>(false);

  // Load seen questions from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("dairyhub_test_series_seen_questions");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setUsedQuestionTexts(new Set(parsed));
          }
        }
      } catch (e) {}
    }
  }, []);

  // Initialize fresh paper metadata
  useEffect(() => {
    const freshSet = generateMergedTestPaper(50, 60, paperSeedCounter, usedQuestionTexts);
    setPaperMetadata({
      questions: freshSet.questions,
      paperId: freshSet.paperId,
      totalQs: freshSet.totalQs,
      timeMins: freshSet.timeMins
    });
  }, [paperSeedCounter]);

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

    const freshResult = generateMergedTestPaper(50, 60, nextSeed, usedQuestionTexts);
    setPaperMetadata({
      questions: freshResult.questions,
      paperId: freshResult.paperId,
      totalQs: freshResult.totalQs,
      timeMins: freshResult.timeMins
    });

    setUsedQuestionTexts(freshResult.newlyUsedSet);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "dairyhub_test_series_seen_questions",
          JSON.stringify(Array.from(freshResult.newlyUsedSet))
        );
      } catch (e) {}
    }

    const initialSecs = freshResult.timeMins * 60;
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
    if (stats.maxScore > 0 && !stats.isPassed) {
      toast({
        title: "Minimum 40 Marks Required ⚠️",
        description: `Your score is ${stats.score} Marks. Minimum 40 Marks (${stats.minPassingMarks} marks) is required to earn the official certificate.`,
        variant: "destructive",
      });
      return;
    }
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
            const nameEl = clonedElement.querySelector('#cert-candidate-name') as HTMLElement | null;
            if (nameEl) {
              nameEl.style.color = '#fef08a';
              nameEl.style.setProperty('-webkit-text-fill-color', '#fef08a');
              nameEl.style.background = 'transparent';
              nameEl.style.opacity = '1';
            }
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
    if (stats.maxScore > 0 && !stats.isPassed) {
      toast({
        title: "Minimum 40 Marks Required ⚠️",
        description: `Your score is ${stats.score} Marks. Minimum 40 Marks (${stats.minPassingMarks} marks) is required to earn the official certificate.`,
        variant: "destructive",
      });
      return;
    }
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
            const nameEl = clonedElement.querySelector('#cert-candidate-name') as HTMLElement | null;
            if (nameEl) {
              nameEl.style.color = '#fef08a';
              nameEl.style.setProperty('-webkit-text-fill-color', '#fef08a');
              nameEl.style.background = 'transparent';
              nameEl.style.opacity = '1';
            }
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
    if (stats.maxScore > 0 && !stats.isPassed) {
      toast({
        title: "Minimum 40 Marks Required ⚠️",
        description: `Your score is ${stats.score} Marks. Minimum 40 Marks (${stats.minPassingMarks} marks) is required to print the official certificate.`,
        variant: "destructive",
      });
      return;
    }

    const certElement = document.getElementById("dairyhub-official-certificate");
    if (!certElement) {
      handleDownloadCertificatePdf();
      return;
    }

    try {
      const printWin = window.open('', '_blank', 'width=1050,height=780');
      if (!printWin) {
        toast({
          title: "Saving Certificate to Device... 🏆",
          description: "Generating official PDF certificate directly for your storage.",
        });
        handleDownloadCertificatePdf();
        return;
      }

      // Collect all stylesheets from head
      const styleSheets = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
        .map(el => el.outerHTML)
        .join('\n');

      printWin.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>DairyHub Official Test Certificate - ${studentName.trim() || user?.displayName || "Dairy Scholar"}</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
            ${styleSheets}
            <style>
              body {
                background: #020617 !important;
                margin: 0;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                font-family: 'Plus Jakarta Sans', sans-serif;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              @page {
                size: 1000px 707px landscape;
                margin: 0;
              }
              @media print {
                body {
                  padding: 0 !important;
                  background: #020617 !important;
                }
                #dairyhub-official-certificate {
                  box-shadow: none !important;
                  width: 1000px !important;
                  height: 707px !important;
                  page-break-inside: avoid;
                }
              }
            </style>
          </head>
          <body>
            ${certElement.outerHTML}
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                }, 450);
              };
            </script>
          </body>
        </html>
      `);
      printWin.document.close();
    } catch (e) {
      console.error(e);
      handleDownloadCertificatePdf();
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
    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
    const minPassingMarks = 40;
    const isPassed = score >= 40;

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
      accuracy,
      percentage,
      isPassed,
      minPassingMarks
    };
  }, [paperMetadata.questions, userAnswers, markedForReview]);

  const currentTierInfo = useMemo(() => {
    const pct = stats.percentage;
    const acc = parseFloat(stats.accuracy) || 0;

    if (!stats.isPassed) {
      return {
        tierName: "Needs Improvement",
        fullName: "NOT QUALIFIED (MIN. 40 MARKS REQUIRED)",
        textColor: "text-red-400",
        badgeClass: "bg-red-500/20 text-red-300 border-red-500/50 font-black",
        icon: "❌",
        isPassed: false,
      };
    }

    if (pct >= 85 || acc >= 90) {
      return {
        tierName: "Platinum Distinction",
        fullName: "PLATINUM DISTINCTION CERTIFICATE",
        textColor: "text-amber-300",
        badgeClass: "bg-sky-500 text-slate-950 border-sky-300 font-black",
        icon: "👑",
        isPassed: true,
      };
    } else if (pct >= 70 || acc >= 75) {
      return {
        tierName: "Gold Master",
        fullName: "GOLD MASTER CERTIFICATE",
        textColor: "text-amber-400",
        badgeClass: "bg-amber-500 text-slate-950 border-amber-300 font-black",
        icon: "🥇",
        isPassed: true,
      };
    } else if (pct >= 55 || acc >= 60) {
      return {
        tierName: "Silver Scholar",
        fullName: "SILVER SCHOLAR CERTIFICATE",
        textColor: "text-slate-200",
        badgeClass: "bg-slate-300 text-slate-950 border-white font-black",
        icon: "🥈",
        isPassed: true,
      };
    } else {
      return {
        tierName: "Bronze Qualifier",
        fullName: "BRONZE QUALIFIER CERTIFICATE",
        textColor: "text-amber-500",
        badgeClass: "bg-amber-800 text-amber-100 border-amber-600 font-black",
        icon: "🥉",
        isPassed: true,
      };
    }
  }, [stats.percentage, stats.isPassed, stats.accuracy]);

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
                <Badge className="bg-emerald-500 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase">
                  Live Exam
                </Badge>
              </h2>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono">
                {testStatus === "hub" ? "Unified 50 MCQs Examination" : `Paper ID: ${paperMetadata.paperId}`}
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
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Unified Master Hero Banner */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 border border-indigo-500/30 text-white shadow-2xl space-y-4 text-center sm:text-left relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Unified National CBT Test Engine
                  </div>
                  <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-[10px] uppercase px-3 py-1 shadow-md">
                    National Examination Portal
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                    DairyHub All-India Master Test Series
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    A comprehensive, unified examination merging all core technical areas — <strong>Dairy Technology, Food Science, Microbiology, Plant Engineering, FSSAI Regulations & Industrial Calculations</strong> into one single live mock exam.
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-indigo-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Questions Per Test</span>
                    <span className="text-xl font-black text-white">50 MCQs</span>
                  </div>
                  <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-amber-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Duration</span>
                    <span className="text-xl font-black text-amber-400">60 Minutes</span>
                  </div>
                  <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-emerald-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Maximum Marks</span>
                    <span className="text-xl font-black text-emerald-400">200 Marks</span>
                  </div>
                  <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-purple-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Marking Scheme</span>
                    <span className="text-xl font-black text-purple-400">+4 / -1 Mark</span>
                  </div>
                </div>
              </div>

              {/* Professional Examination Pattern & Syllabus Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-xl space-y-4">
                <div className="border-b border-slate-800/80 pb-3">
                  <h3 className="font-extrabold text-sm sm:text-base text-amber-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Examination Structure & Qualifying Standards
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    Structured in accordance with national recruitment and entrance benchmarks (GATE, ICAR, FSSAI & Plant Quality standards).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-indigo-400 uppercase font-bold block mb-1">Subject Coverage</span>
                    <span className="text-xs text-slate-300 font-semibold block leading-relaxed">
                      Dairy Technology, Food Science, Microbiology, Plant Engineering & FSSAI Standards
                    </span>
                  </div>
                  <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold block mb-1">Marking Evaluation</span>
                    <span className="text-xs text-slate-300 font-semibold block leading-relaxed">
                      +4 Marks for correct answer; -1 Mark penalty for incorrect response. 0 for unattempted.
                    </span>
                  </div>
                  <div className="p-3.5 bg-amber-950/30 rounded-xl border border-amber-500/40">
                    <span className="text-[10px] text-amber-400 uppercase font-bold block mb-1">Passing Criterion</span>
                    <span className="text-xs text-amber-200 font-bold block leading-relaxed">
                      Minimum 40 Marks (out of 200) required to qualify and earn official certificate
                    </span>
                  </div>
                </div>

                {/* Exam Guidelines & Colors */}
                <div className="pt-2 space-y-3">
                  <span className="text-xs font-extrabold text-slate-300 block">
                    CBT Exam Navigation & Status Symbols:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="flex items-center gap-2 p-2 bg-slate-900 rounded-xl border border-slate-800/80">
                      <span className="w-3 h-3 rounded bg-emerald-600 shrink-0"></span>
                      <span className="text-slate-300 text-[11px]">Green: Answered</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-900 rounded-xl border border-slate-800/80">
                      <span className="w-3 h-3 rounded bg-red-600 shrink-0"></span>
                      <span className="text-slate-300 text-[11px]">Red: Not Answered</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-900 rounded-xl border border-slate-800/80">
                      <span className="w-3 h-3 rounded bg-purple-600 shrink-0"></span>
                      <span className="text-slate-300 text-[11px]">Purple: Review</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-900 rounded-xl border border-slate-800/80">
                      <span className="w-3 h-3 rounded bg-slate-700 shrink-0"></span>
                      <span className="text-slate-300 text-[11px]">Grey: Not Visited</span>
                    </div>
                  </div>
                </div>

                {/* Big Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[11px] text-slate-400 text-center sm:text-left">
                    * Qualifying Criteria: Minimum 40 Marks to pass and receive authenticated certificate.
                  </p>
                  <Button
                    onClick={handleStartTest}
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm px-8 h-12 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shrink-0"
                  >
                    <Play className="w-5 h-5 fill-slate-950" />
                    START 50 MCQs LIVE TEST NOW
                  </Button>
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
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> National Examination Portal
                  </span>
                  <Badge className="bg-indigo-600 text-white font-mono text-[10px]">
                    Paper #{paperSeedCounter}
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  DairyHub All-India Master Examination (50 MCQs)
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Real-time national CBT examination simulation with computerized timer and automated evaluation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
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
                  <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-500/50 text-center col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-amber-300 uppercase font-bold block">Passing Criteria</span>
                    <span className="text-lg font-black text-amber-400">40 Marks</span>
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
                  <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Test Hub
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
                <Trophy className={cn("w-12 h-12 mx-auto", currentTierInfo.isPassed ? "text-amber-400 animate-bounce" : "text-red-400")} />
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-black text-white">
                    Official Performance Scorecard & Analysis
                  </h1>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    {currentTierInfo.isPassed ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-black text-xs uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Status: PASSED / QUALIFIED (Score: {stats.score} Marks • Passing Cut-off: 40 Marks)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 font-black text-xs uppercase tracking-wider">
                        <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                        Status: NOT QUALIFIED (Min. 40 Marks Required to Pass)
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  Paper ID: {paperMetadata.paperId} | ALL-INDIA NATIONAL CBT EXAM | Passing Cut-off: 40 Marks
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 max-w-4xl mx-auto">
                  <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-indigo-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Your Final Score</span>
                    <span className="text-xl sm:text-2xl font-black text-amber-400">{stats.score} / {stats.maxScore}</span>
                  </div>
                  <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-emerald-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Accuracy %</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-400">{stats.accuracy}%</span>
                  </div>
                  <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-blue-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Correct Qs</span>
                    <span className="text-xl sm:text-2xl font-black text-blue-400">{stats.correct}</span>
                  </div>
                  <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-red-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Incorrect Qs</span>
                    <span className="text-xl sm:text-2xl font-black text-red-400">{stats.incorrect}</span>
                  </div>
                  <div className={cn("p-3.5 rounded-2xl border text-center col-span-2 sm:col-span-1", currentTierInfo.isPassed ? "bg-emerald-950/40 border-emerald-500/50" : "bg-red-950/40 border-red-500/50")}>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Passing Result</span>
                    <span className={cn("text-xl sm:text-2xl font-black", currentTierInfo.isPassed ? "text-emerald-400" : "text-red-400")}>
                      {currentTierInfo.isPassed ? "PASSED" : "FAILED"}
                    </span>
                  </div>
                </div>
              </div>

              {/* OFFICIAL HIGH-RES CERTIFICATE PREVIEW & DOWNLOAD SECTION */}
              {!currentTierInfo.isPassed ? (
                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950 border-2 border-red-500/40 text-center space-y-4 shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/50 flex items-center justify-center mx-auto text-red-400 shadow-inner">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5 max-w-xl mx-auto">
                    <h3 className="text-xl font-black text-white">
                      Official Certificate Locked (Minimum 40 Marks Cut-off Required)
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Aapne <strong className="text-red-400">{stats.score} Marks ({stats.percentage.toFixed(1)}%)</strong> score kiya hai. DairyHub Official Performance Certificate hasil karne ke liye kam se kam <strong className="text-amber-300">40 Marks</strong> prapt karna anivarya hai.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 max-w-sm mx-auto flex items-center justify-around text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase">Aapka Score</span>
                      <span className="text-sm font-black text-red-400">{stats.score} / {stats.maxScore}</span>
                    </div>
                    <div className="h-6 w-px bg-slate-700" />
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase">Passing Cut-off</span>
                      <span className="text-sm font-black text-emerald-400">40 Marks</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button
                      onClick={handleStartTest}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs px-6 h-10 rounded-xl shadow-lg flex items-center justify-center gap-2 mx-auto active:scale-95"
                    >
                      <RotateCcw className="w-4 h-4" /> Retake Test to Qualify (Min. 40 Marks)
                    </Button>
                  </div>
                </div>
              ) : (
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
                      className="w-[1000px] h-[707px] min-w-[1000px] min-h-[707px] p-9 rounded-3xl bg-gradient-to-br from-[#030712] via-[#071329] to-[#02050e] border-[6px] border-[#eab308] ring-4 ring-[#78350f]/60 text-white relative shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(234,179,8,0.35),inset_0_0_80px_rgba(0,0,0,0.8)] overflow-hidden font-sans flex flex-col justify-between shrink-0 select-none my-1"
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 12%, rgba(245, 158, 11, 0.22) 0%, transparent 48%), radial-gradient(circle at 12% 50%, rgba(14, 165, 233, 0.16) 0%, transparent 44%), radial-gradient(circle at 88% 50%, rgba(16, 185, 129, 0.16) 0%, transparent 44%), radial-gradient(circle at 50% 90%, rgba(99, 102, 241, 0.20) 0%, transparent 52%)`,
                      }}
                    >
                      {/* ========================================================================= */}
                      {/* LUXURY ROYAL CERTIFICATE FRAME & FOOD/DAIRY TESTING EQUIPMENT WATERMARK */}
                      {/* ========================================================================= */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                        viewBox="0 0 1000 707"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient id="certGoldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="25%" stopColor="#f59e0b" />
                            <stop offset="55%" stopColor="#fbbf24" />
                            <stop offset="80%" stopColor="#d97706" />
                            <stop offset="100%" stopColor="#92400e" />
                          </linearGradient>
                          <linearGradient id="certGoldGleam" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#78350f" />
                            <stop offset="40%" stopColor="#d97706" />
                            <stop offset="70%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#fffbeb" />
                          </linearGradient>
                          <radialGradient id="certCenterGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.18" />
                            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                          </radialGradient>
                          <linearGradient id="cyanStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7dd3fc" />
                            <stop offset="100%" stopColor="#0284c7" />
                          </linearGradient>
                          <linearGradient id="emeraldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6ee7b7" />
                            <stop offset="100%" stopColor="#059669" />
                          </linearGradient>
                        </defs>

                        {/* Central Ambient Radial Glow */}
                        <rect x="0" y="0" width="1000" height="707" fill="url(#certCenterGlow)" />

                        {/* Guilloche Security Lattice Background Waves */}
                        <g opacity="0.12" stroke="url(#certGoldPrimary)" strokeWidth="0.8">
                          <path d="M 0,90 Q 250,30 500,90 T 1000,90" fill="none" />
                          <path d="M 0,110 Q 250,50 500,110 T 1000,110" fill="none" />
                          <path d="M 0,130 Q 250,70 500,130 T 1000,130" fill="none" />
                          <path d="M 0,570 Q 250,630 500,570 T 1000,570" fill="none" />
                          <path d="M 0,590 Q 250,650 500,590 T 1000,590" fill="none" />
                          <path d="M 0,610 Q 250,670 500,610 T 1000,610" fill="none" />
                          <line x1="0" y1="0" x2="1000" y2="707" strokeDasharray="5 5" />
                          <line x1="1000" y1="0" x2="0" y2="707" strokeDasharray="5 5" />
                        </g>

                        {/* Inner Guilloche Border Insets */}
                        <rect x="14" y="14" width="972" height="679" rx="18" stroke="url(#certGoldPrimary)" strokeWidth="2" fill="none" opacity="0.7" />
                        <rect x="22" y="22" width="956" height="663" rx="14" stroke="#fef08a" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.45" />

                        {/* ========================================================================= */}
                        {/* LEFT WATERMARK: AUTHENTIC DAIRY TESTING LABORATORY INSTRUMENTS */}
                        {/* ========================================================================= */}
                        <g opacity="0.32" transform="translate(36, 125)">
                          {/* 1. Quevenne / Zeal Lactometer in Graduated Cylinder */}
                          <g stroke="url(#cyanStrokeGrad)" strokeWidth="1.4" fill="none">
                            {/* Cylinder base & jar */}
                            <ellipse cx="45" cy="285" rx="38" ry="11" fill="#0369a1" fillOpacity="0.3" strokeWidth="1.6" />
                            <rect x="24" y="48" width="42" height="237" rx="5" fill="#0369a1" fillOpacity="0.08" />
                            <path d="M21,48 L69,48 M21,48 L18,40 L72,40 L69,48" strokeWidth="1.4" />
                            {/* Milk Meniscus Level at 200 ml */}
                            <path d="M24,105 Q45,112 66,105" stroke="#fef08a" strokeWidth="1.8" strokeOpacity="0.7" />
                            {/* Graduated volumetric markings */}
                            <line x1="24" y1="125" x2="36" y2="125" />
                            <line x1="24" y1="150" x2="33" y2="150" />
                            <line x1="24" y1="175" x2="36" y2="175" />
                            <line x1="24" y1="200" x2="33" y2="200" />
                            <line x1="24" y1="225" x2="36" y2="225" />
                            <line x1="24" y1="250" x2="33" y2="250" />

                            {/* Floating Lactometer Body */}
                            <rect x="42.5" y="58" width="5" height="130" rx="2" stroke="#f59e0b" strokeWidth="1.4" fill="#fef08a" fillOpacity="0.3" />
                            {/* Lactometer CLR Scale Lines (20 to 32 CLR) */}
                            <line x1="40" y1="74" x2="50" y2="74" stroke="#fef08a" strokeWidth="0.9" />
                            <line x1="40" y1="86" x2="50" y2="86" stroke="#fef08a" strokeWidth="0.9" />
                            <line x1="40" y1="96" x2="52" y2="96" stroke="#fef08a" strokeWidth="1.4" />
                            <line x1="40" y1="108" x2="50" y2="108" stroke="#fef08a" strokeWidth="0.9" />
                            <line x1="40" y1="120" x2="50" y2="120" stroke="#fef08a" strokeWidth="0.9" />
                            {/* Lactometer Float Bulb & Shot Ballast */}
                            <path d="M36,188 C36,182 54,182 54,188 L54,242 C54,255 36,255 36,242 Z" stroke="#f59e0b" strokeWidth="1.5" fill="#f59e0b" fillOpacity="0.25" />
                            <circle cx="41" cy="245" r="2.2" fill="#fef08a" stroke="none" />
                            <circle cx="49" cy="245" r="2.2" fill="#fef08a" stroke="none" />
                            <circle cx="45" cy="239" r="2" fill="#fef08a" stroke="none" />
                          </g>
                          <text x="45" y="308" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="800" letterSpacing="1" fontFamily="monospace">LACTOMETER • CLR / SNF</text>

                          {/* 2. Gerber Butyrometer (Milk Fat Determination 0-10%) */}
                          <g transform="translate(90, 18)" stroke="#f59e0b" strokeWidth="1.4" fill="none">
                            {/* Lock Stopper */}
                            <rect x="22" y="248" width="16" height="16" rx="3" fill="#d97706" fillOpacity="0.3" stroke="#f59e0b" />
                            {/* Lower bulb */}
                            <path d="M18,198 C18,244 42,244 42,198 L37,175 L23,175 Z" fill="#f59e0b" fillOpacity="0.2" />
                            {/* Flat Calibrated Stem */}
                            <rect x="26" y="55" width="8" height="120" rx="1.5" stroke="#fef08a" fill="#fef08a" fillOpacity="0.2" />
                            {/* Graduated Fat% Ticks */}
                            <line x1="23" y1="75" x2="37" y2="75" stroke="#fef08a" strokeWidth="1" />
                            <text x="40" y="78" fill="#fef08a" fontSize="7" fontWeight="bold" fontFamily="monospace" stroke="none">8%</text>
                            <line x1="24" y1="95" x2="36" y2="95" stroke="#fef08a" strokeWidth="0.8" />
                            <line x1="23" y1="110" x2="37" y2="110" stroke="#fef08a" strokeWidth="1" />
                            <text x="40" y="113" fill="#fef08a" fontSize="7" fontWeight="bold" fontFamily="monospace" stroke="none">4%</text>
                            <line x1="24" y1="128" x2="36" y2="128" stroke="#fef08a" strokeWidth="0.8" />
                            <line x1="23" y1="145" x2="37" y2="145" stroke="#fef08a" strokeWidth="1" />
                            <text x="40" y="148" fill="#fef08a" fontSize="7" fontWeight="bold" fontFamily="monospace" stroke="none">0%</text>
                            {/* Upper Bulb */}
                            <circle cx="30" cy="38" r="15" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" />
                            <path d="M9,24 A26,26 0 0,1 51,24" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 2" />
                          </g>
                          <text x="120" y="308" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="800" letterSpacing="1" fontFamily="monospace">GERBER BUTYROMETER (FAT%)</text>
                        </g>

                        {/* Left Lower: Dairy Transport Can & Silo / Pasteurizer HTST */}
                        <g opacity="0.28" transform="translate(42, 475)" stroke="url(#cyanStrokeGrad)" strokeWidth="1.3" fill="none">
                          {/* Classic 40-Liter Milk Can */}
                          <g transform="translate(0, 5)">
                            <path d="M12,30 L18,15 L42,15 L48,30 L52,90 C52,98 8,98 8,90 Z" fill="#0369a1" fillOpacity="0.25" />
                            <rect x="20" y="8" width="20" height="7" rx="2" fill="#38bdf8" fillOpacity="0.3" />
                            <path d="M22,8 Q30,2 38,8" strokeWidth="1.8" />
                            <path d="M12,40 C5,45 5,55 12,60 M48,40 C55,45 55,55 48,60" strokeWidth="1.6" />
                            <line x1="10" y1="52" x2="50" y2="52" strokeDasharray="2 2" strokeOpacity="0.6" />
                          </g>
                          {/* Dairy Processing Silo & HTST Exchanger */}
                          <g transform="translate(68, 0)">
                            <path d="M15,15 L15,92 C15,98 55,98 55,92 L55,15 C55,5 15,5 15,15 Z" fill="#0f172a" fillOpacity="0.35" />
                            <line x1="15" y1="35" x2="55" y2="35" strokeDasharray="3 2" />
                            <line x1="15" y1="60" x2="55" y2="60" strokeDasharray="3 2" />
                            <path d="M35,96 L35,108 L50,108" strokeWidth="1.5" />
                            {/* HTST Plates */}
                            <path d="M72,25 L72,95 L115,95 L115,25 Z" fill="#0284c7" fillOpacity="0.15" />
                            <line x1="80" y1="25" x2="80" y2="95" strokeWidth="1.2" />
                            <line x1="88" y1="25" x2="88" y2="95" strokeWidth="1.2" />
                            <line x1="96" y1="25" x2="96" y2="95" strokeWidth="1.2" />
                            <line x1="104" y1="25" x2="104" y2="95" strokeWidth="1.2" />
                          </g>
                          <text x="92" y="122" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="800" letterSpacing="1" fontFamily="monospace">MILK CAN • SILO & HTST PROCESSING</text>
                        </g>

                        {/* ========================================================================= */}
                        {/* RIGHT WATERMARK: AUTHENTIC FOOD TESTING & MICROBIOLOGY INSTRUMENTS */}
                        {/* ========================================================================= */}
                        <g opacity="0.32" transform="translate(765, 125)">
                          {/* 1. Laboratory Research Compound Microscope */}
                          <g stroke="url(#cyanStrokeGrad)" strokeWidth="1.3" fill="none">
                            {/* Dual Binocular Eyepieces */}
                            <rect x="52" y="8" width="8" height="28" rx="2" transform="rotate(-15 52 8)" fill="#0284c7" fillOpacity="0.25" />
                            <rect x="68" y="4" width="8" height="28" rx="2" transform="rotate(-15 68 4)" fill="#0284c7" fillOpacity="0.25" />
                            {/* Head & Revolving Turret */}
                            <path d="M58,32 L50,70 L72,70 L76,32 Z" fill="#0369a1" fillOpacity="0.2" />
                            <path d="M46,70 Q61,80 76,70 Z" fill="#f59e0b" fillOpacity="0.35" stroke="#f59e0b" strokeWidth="1.4" />
                            {/* 3 Objectives */}
                            <rect x="48" y="76" width="6" height="18" rx="1.5" fill="#fef08a" fillOpacity="0.3" stroke="#fef08a" strokeWidth="1" />
                            <rect x="57" y="78" width="7" height="24" rx="1.5" fill="#fef08a" fillOpacity="0.35" stroke="#fef08a" strokeWidth="1.2" />
                            <rect x="68" y="76" width="6" height="16" rx="1.5" fill="#fef08a" fillOpacity="0.3" stroke="#fef08a" strokeWidth="1" />
                            {/* Specimen Stage & Slide */}
                            <rect x="30" y="110" width="64" height="8" rx="2" fill="#f59e0b" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="1.4" />
                            <line x1="42" y1="108" x2="78" y2="108" stroke="#fef08a" strokeWidth="1.8" />
                            {/* Abbe Condenser */}
                            <circle cx="61" cy="126" r="6.5" stroke="#94a3b8" strokeWidth="1.2" />
                            {/* Coarse & Fine Focus Knobs */}
                            <circle cx="94" cy="148" r="9" stroke="#f59e0b" fill="#f59e0b" fillOpacity="0.25" strokeWidth="1.4" />
                            <circle cx="94" cy="148" r="4.5" stroke="#fef08a" fill="#fef08a" fillOpacity="0.4" />
                            {/* Curved C-Arm and Heavy Base */}
                            <path d="M72,48 C110,65 110,165 74,188" stroke="#38bdf8" strokeWidth="3.2" />
                            <path d="M28,202 C28,190 94,190 94,202 L88,210 L34,210 Z" fill="#0f172a" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="1.8" />
                          </g>
                          <text x="62" y="226" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="800" letterSpacing="1" fontFamily="monospace">COMPOUND MICROSCOPE (MICRO)</text>

                          {/* 2. Burette Stand & Acidity Titration (N/10 NaOH / Acidity) */}
                          <g transform="translate(115, 8)" stroke="url(#certGoldPrimary)" strokeWidth="1.3" fill="none">
                            {/* Retort Stand Rod & Base */}
                            <line x1="15" y1="8" x2="15" y2="198" stroke="#94a3b8" strokeWidth="2.2" />
                            <rect x="0" y="195" width="58" height="8" rx="2" stroke="#94a3b8" fill="#94a3b8" fillOpacity="0.25" />
                            {/* Clamp */}
                            <rect x="15" y="68" width="16" height="6" rx="1.5" stroke="#f59e0b" fill="#f59e0b" fillOpacity="0.35" />
                            {/* Graduated Burette Tube */}
                            <rect x="29" y="18" width="8" height="124" rx="1.5" stroke="#38bdf8" fill="#38bdf8" fillOpacity="0.12" strokeWidth="1.3" />
                            <line x1="29" y1="38" x2="35" y2="38" stroke="#38bdf8" strokeWidth="0.9" />
                            <line x1="29" y1="62" x2="35" y2="62" stroke="#38bdf8" strokeWidth="0.9" />
                            <line x1="29" y1="88" x2="35" y2="88" stroke="#38bdf8" strokeWidth="0.9" />
                            <line x1="29" y1="112" x2="35" y2="112" stroke="#38bdf8" strokeWidth="0.9" />
                            {/* Stopcock valve & suspended droplet */}
                            <path d="M26,142 L40,142 M33,142 L33,150" stroke="#f59e0b" strokeWidth="1.8" />
                            <circle cx="33" cy="157" r="1.8" fill="#fef08a" stroke="none" />
                            {/* Erlenmeyer Conical Flask */}
                            <path d="M28,162 L38,162 L38,168 L50,193 C52,197 49,199 45,199 L21,199 C17,199 14,197 16,193 L28,168 Z" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.4" />
                            <path d="M20,188 Q33,191 46,188" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.8" />
                          </g>
                          <text x="144" y="226" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="800" letterSpacing="1" fontFamily="monospace">N/10 NaOH TITRATION (ACIDITY)</text>
                        </g>

                        {/* Right Lower: Microbial Agar Petri Dish with Colonies & Inoculation Loop */}
                        <g opacity="0.32" transform="translate(765, 475)" stroke="url(#emeraldStrokeGrad)" strokeWidth="1.3" fill="none">
                          <ellipse cx="60" cy="45" rx="52" ry="20" fill="#064e3b" fillOpacity="0.25" strokeWidth="1.6" />
                          <ellipse cx="60" cy="43" rx="45" ry="16" strokeDasharray="3 2" />
                          {/* Bacterial culture colonies */}
                          <circle cx="42" cy="42" r="3" fill="#34d399" stroke="none" />
                          <circle cx="56" cy="49" r="3.5" fill="#fde047" stroke="none" />
                          <circle cx="76" cy="39" r="2.5" fill="#34d399" stroke="none" />
                          <circle cx="63" cy="37" r="3" fill="#38bdf8" stroke="none" />
                          <circle cx="84" cy="48" r="2.5" fill="#fde047" stroke="none" />
                          <circle cx="36" cy="47" r="2.2" fill="#34d399" stroke="none" />
                          <circle cx="50" cy="36" r="2" fill="#6ee7b7" stroke="none" />
                          {/* Streak pattern lines */}
                          <path d="M30,42 Q45,35 60,42 T85,38" stroke="#34d399" strokeWidth="1" strokeOpacity="0.6" />
                          {/* Inoculation Loop */}
                          <path d="M85,15 L120,5 M85,15 A4,4 0 1,1 81,19" stroke="#fef08a" strokeWidth="1.5" />
                          {/* Volumetric Pipette */}
                          <path d="M15,88 L125,72" stroke="#fef08a" strokeWidth="1.6" />
                          <ellipse cx="70" cy="80" rx="8" ry="4" stroke="#fef08a" fill="#fef08a" fillOpacity="0.3" />
                          <text x="68" y="116" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontWeight="800" letterSpacing="1" fontFamily="monospace">PETRI DISH • MICROBIAL SPC/COLIFORM</text>
                        </g>

                        {/* ========================================================================= */}
                        {/* CENTER EMBOSSED WATERMARK: ROYAL "DAIRY HUB" HERALDIC MEDALLION */}
                        {/* ========================================================================= */}
                        <g opacity="0.26" transform="translate(500, 350)">
                          {/* Sunburst Rays (36 Fine Golden Rays radiating outward) */}
                          {Array.from({ length: 36 }).map((_, i) => (
                            <line
                              key={`sunray-${i}`}
                              x1={(85 * Math.cos((i * Math.PI) / 18)).toFixed(2)}
                              y1={(85 * Math.sin((i * Math.PI) / 18)).toFixed(2)}
                              x2={(185 * Math.cos((i * Math.PI) / 18)).toFixed(2)}
                              y2={(185 * Math.sin((i * Math.PI) / 18)).toFixed(2)}
                              stroke="#f59e0b"
                              strokeWidth="0.9"
                              strokeOpacity="0.45"
                            />
                          ))}

                          {/* Concentric Guilloche Rings */}
                          <circle cx="0" cy="0" r="175" stroke="url(#certGoldPrimary)" strokeWidth="1.8" strokeOpacity="0.5" />
                          <circle cx="0" cy="0" r="165" stroke="#fef08a" strokeWidth="0.9" strokeDasharray="3 2" strokeOpacity="0.6" />
                          <circle cx="0" cy="0" r="132" stroke="url(#certGoldPrimary)" strokeWidth="1.4" strokeOpacity="0.45" />
                          <circle cx="0" cy="0" r="98" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" />

                          {/* Laurel Wreath Left & Right of Medallion */}
                          <path
                            d="M -120,0 C -132,-65 -85,-120 -10,-130 C -75,-95 -100,-48 -100,0 C -100,48 -75,95 -10,130 C -85,120 -132,65 -120,0 Z"
                            fill="url(#certGoldPrimary)"
                            fillOpacity="0.3"
                          />
                          <path
                            d="M 120,0 C 132,-65 85,-120 10,-130 C 75,-95 100,-48 100,0 C 100,48 75,95 10,130 C 85,120 132,65 120,0 Z"
                            fill="url(#certGoldPrimary)"
                            fillOpacity="0.3"
                          />

                          {/* Center Pure Milk Droplet & Laboratory Shield Emblem */}
                          <path
                            d="M0,-48 C20,-22 30,-5 30,16 C30,32 18,44 0,44 C-18,44 -30,32 -30,16 C-30,-5 -20,-22 0,-48 Z"
                            fill="url(#certGoldPrimary)"
                            fillOpacity="0.25"
                            stroke="#fef08a"
                            strokeWidth="1.4"
                          />

                          {/* PROMINENT AUTHORITATIVE "DAIRY HUB" WATERMARK TEXT */}
                          <text
                            x="0"
                            y="-66"
                            textAnchor="middle"
                            fill="url(#certGoldPrimary)"
                            fontSize="44"
                            fontWeight="900"
                            letterSpacing="14"
                            fontFamily="serif"
                            stroke="#fef08a"
                            strokeWidth="0.6"
                          >
                            DAIRY HUB
                          </text>

                          <text
                            x="0"
                            y="68"
                            textAnchor="middle"
                            fill="#fde68a"
                            fontSize="11.5"
                            fontWeight="900"
                            letterSpacing="4.5"
                            fontFamily="sans-serif"
                          >
                            NATIONAL QUALITY & METROLOGY STANDARDS
                          </text>

                          <text
                            x="0"
                            y="86"
                            textAnchor="middle"
                            fill="#94a3b8"
                            fontSize="8.5"
                            fontWeight="800"
                            letterSpacing="2.5"
                            fontFamily="sans-serif"
                          >
                            ACCREDITED FOOD & DAIRY TESTING COUNCIL
                          </text>
                        </g>

                        {/* ========================================================================= */}
                        {/* FOUR CORNER ROYAL VICTORIAN BAROQUE GOLD FILIGREE ORNAMENTS */}
                        {/* ========================================================================= */}
                        {/* Top-Left Corner */}
                        <g transform="translate(18, 18)" stroke="url(#certGoldPrimary)" strokeWidth="1.6" fill="none">
                          <path d="M0,48 C0,16 16,0 48,0 M10,48 C10,22 22,10 48,10 M0,0 L20,20" />
                          <circle cx="20" cy="20" r="3.2" fill="#fef08a" />
                          <path d="M26,6 Q48,26 26,48 Q6,26 26,6 Z" fill="#f59e0b" fillOpacity="0.35" />
                        </g>

                        {/* Top-Right Corner */}
                        <g transform="translate(982, 18) scale(-1, 1)" stroke="url(#certGoldPrimary)" strokeWidth="1.6" fill="none">
                          <path d="M0,48 C0,16 16,0 48,0 M10,48 C10,22 22,10 48,10 M0,0 L20,20" />
                          <circle cx="20" cy="20" r="3.2" fill="#fef08a" />
                          <path d="M26,6 Q48,26 26,48 Q6,26 26,6 Z" fill="#f59e0b" fillOpacity="0.35" />
                        </g>

                        {/* Bottom-Left Corner */}
                        <g transform="translate(18, 689) scale(1, -1)" stroke="url(#certGoldPrimary)" strokeWidth="1.6" fill="none">
                          <path d="M0,48 C0,16 16,0 48,0 M10,48 C10,22 22,10 48,10 M0,0 L20,20" />
                          <circle cx="20" cy="20" r="3.2" fill="#fef08a" />
                          <path d="M26,6 Q48,26 26,48 Q6,26 26,6 Z" fill="#f59e0b" fillOpacity="0.35" />
                        </g>

                        {/* Bottom-Right Corner */}
                        <g transform="translate(982, 689) scale(-1, -1)" stroke="url(#certGoldPrimary)" strokeWidth="1.6" fill="none">
                          <path d="M0,48 C0,16 16,0 48,0 M10,48 C10,22 22,10 48,10 M0,0 L20,20" />
                          <circle cx="20" cy="20" r="3.2" fill="#fef08a" />
                          <path d="M26,6 Q48,26 26,48 Q6,26 26,6 Z" fill="#f59e0b" fillOpacity="0.35" />
                        </g>

                        {/* Micro-Security Ribbon Text at Top and Bottom Margins */}
                        <text
                          x="500"
                          y="22"
                          textAnchor="middle"
                          fill="#f59e0b"
                          fillOpacity="0.75"
                          fontSize="7.5"
                          fontWeight="800"
                          letterSpacing="3.5"
                          fontFamily="monospace"
                        >
                          ★ DAIRYHUB NATIONAL BOARD OF TESTING & ACCREDITATION ★ OFFICIAL PERFORMANCE CERTIFICATE ★ FSSAI & ISO 22000 COMPLIANT ★
                        </text>

                        <text
                          x="500"
                          y="695"
                          textAnchor="middle"
                          fill="#f59e0b"
                          fillOpacity="0.75"
                          fontSize="7.5"
                          fontWeight="800"
                          letterSpacing="3.5"
                          fontFamily="monospace"
                        >
                          ★ AUTHENTIC DIGITAL CREDENTIAL ★ VERIFIED BY DAIRYHUB ACADEMIC & LABORATORY COUNCIL ★ SECURE HASH VERIFIABLE ★
                        </text>
                      </svg>

                      {/* Inner Gold Filigree Hairline Security Frames */}
                      <div className="absolute inset-2.5 rounded-[20px] border border-amber-400/50 pointer-events-none z-10" />
                      <div className="absolute inset-3.5 rounded-[16px] border border-amber-400/25 pointer-events-none border-dashed z-10" />

                      {/* Certificate Header */}
                      <div className="flex items-center justify-between border-b-2 border-amber-400/80 pb-3.5 relative z-10">
                        <div className="flex items-center gap-3.5">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.5)] shrink-0">
                            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center p-1.5 border border-amber-300/40">
                              <img src="/dairyhub-logo.png" alt="DairyHub" className="w-full h-full object-contain rounded-lg drop-shadow" />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-xl font-black text-white tracking-wider uppercase font-serif">
                                Dairy<span className="text-amber-400">Hub</span> Test Series
                              </h4>
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                                ISO 22000 Aligned
                              </span>
                            </div>
                            <p className="text-[10px] text-amber-300 font-extrabold uppercase tracking-widest mt-0.5">
                              Official Performance & Skill Certification Portal
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 bg-slate-900/95 border-2 border-amber-400/80 p-2.5 rounded-2xl shadow-2xl backdrop-blur-md">
                          <div className="bg-white p-1.5 rounded-xl shadow-md shrink-0 flex items-center justify-center border border-amber-300">
                            <QRCodeSVG
                              value={`https://dairyhub.in/verify?id=CERT-DH-2026-${paperMetadata.paperId}-${paperSeedCounter}&n=${encodeURIComponent((studentName.trim() || user?.displayName || "Scholar").slice(0, 20))}&s=${stats.score}&a=${stats.accuracy}`}
                              size={78}
                              level="L"
                              includeMargin={true}
                              fgColor="#000000"
                              bgColor="#ffffff"
                            />
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-400 font-black uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                              Scan to Verify
                            </div>
                            <span className="text-[9px] text-slate-400 font-mono block uppercase tracking-wider mt-0.5">Credential ID</span>
                            <span className="text-xs font-mono font-black text-amber-300 tracking-wider block">
                              CERT-DH-2026-#{paperMetadata.paperId}-{paperSeedCounter}
                            </span>
                            <span className="text-[8.5px] text-slate-300 font-bold block mt-0.5">
                              Score: <span className="text-amber-300">{stats.score}/{stats.maxScore}</span> • <span className="text-emerald-400">{stats.accuracy}%</span>
                            </span>
                            <span className="text-[8px] text-amber-400 font-extrabold block mt-0.5 tracking-tight uppercase">
                              ★ Verified Credential
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Main Title & Presentation */}
                      <div className="text-center space-y-2 py-1 relative z-10">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 border border-amber-400/80 px-5 py-1 rounded-full text-amber-300 font-black text-xs tracking-widest uppercase shadow-md">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                          Official Certificate of Proficiency & Mastery
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                        </div>

                        {/* Golden Accent Lines Flanking Radiant Title */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 my-1.5 py-0.5">
                          <div className="h-0.5 w-20 sm:w-28 bg-gradient-to-r from-transparent via-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.9)] shrink-0" />
                          <h2 className={cn("text-3xl font-serif font-black uppercase tracking-wider text-center drop-shadow-[0_2px_12px_rgba(245,158,11,0.7)] whitespace-nowrap", currentTierInfo.textColor)}>
                            {currentTierInfo.icon} {currentTierInfo.fullName}
                          </h2>
                          <div className="h-0.5 w-20 sm:w-28 bg-gradient-to-l from-transparent via-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.9)] shrink-0" />
                        </div>

                        <p className="text-xs text-slate-300 font-medium italic tracking-wide">
                          This prestigious credential is conferred with highest academic honors upon
                        </p>

                        {/* Candidate Name in Grand Calligraphic Gold Foil */}
                        <div className="py-1">
                          <h1
                            id="cert-candidate-name"
                            className="text-[38px] font-serif font-black tracking-wide text-yellow-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] inline-block px-6"
                          >
                            {studentName.trim() || user?.displayName || "Dairy Technology Scholar"}
                          </h1>
                          {/* Underline Flourish with Center Diamond */}
                          <div className="flex items-center justify-center gap-2 -mt-1">
                            <div className="h-[2px] w-36 bg-gradient-to-r from-transparent via-amber-400 to-amber-300" />
                            <div className="w-2.5 h-2.5 rotate-45 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                            <div className="h-[2px] w-36 bg-gradient-to-l from-transparent via-amber-400 to-amber-300" />
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
                          for successfully passing the National CBT Examination and demonstrating professional competency in
                        </p>

                        <div className="inline-block bg-gradient-to-r from-indigo-950/90 via-slate-900/90 to-indigo-950/90 border border-indigo-400/50 px-6 py-1.5 rounded-xl text-indigo-200 font-black text-xs uppercase tracking-wider shadow-lg">
                          DAIRY, FOOD TECH & BIOTECHNOLOGY NATIONAL EXAMINATION (Passing Cut-off: 40 Marks Cleared • 50 Qs Comprehensive CBT Exam)
                        </div>
                      </div>

                      {/* Official Performance Breakdown Metrics (Glassmorphic Cards) */}
                      <div className="grid grid-cols-4 gap-3.5 bg-slate-950/80 p-3.5 rounded-2xl border-2 border-amber-400/80 text-center shadow-xl relative z-10 backdrop-blur-sm">
                        <div className="p-2.5 bg-gradient-to-b from-amber-950/50 to-slate-950/80 rounded-xl border border-amber-400/40 shadow-inner">
                          <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">Final Score</span>
                          <span className="text-xl font-black text-amber-300 font-mono drop-shadow">{stats.score} / {stats.maxScore}</span>
                        </div>
                        <div className="p-2.5 bg-gradient-to-b from-emerald-950/50 to-slate-950/80 rounded-xl border border-emerald-400/40 shadow-inner">
                          <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider block">Accuracy Rate</span>
                          <span className="text-xl font-black text-emerald-400 font-mono drop-shadow">{stats.accuracy}%</span>
                        </div>
                        <div className="p-2.5 bg-gradient-to-b from-sky-950/50 to-slate-950/80 rounded-xl border border-sky-400/40 shadow-inner">
                          <span className="text-[10px] text-sky-300 font-bold uppercase tracking-wider block">Correct Qs</span>
                          <span className="text-xl font-black text-sky-400 font-mono drop-shadow">{stats.correct}</span>
                        </div>
                        <div className="p-2.5 bg-gradient-to-b from-purple-950/50 to-slate-950/80 rounded-xl border border-purple-400/40 shadow-inner">
                          <span className="text-[10px] text-purple-300 font-bold uppercase tracking-wider block">Merit & Division</span>
                          <span className="text-xl font-black text-purple-300 font-mono drop-shadow">
                            {stats.percentage >= 85 ? "Distinction (85%+)" : stats.percentage >= 70 ? "First Class (70%+)" : stats.percentage >= 55 ? "Second Class (55%+)" : "Passed (Min. 40 Marks)"}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Signatures & Seal Footer */}
                      <div className="flex items-center justify-between pt-3 border-t-2 border-amber-400/80 text-xs relative z-10">
                        {/* Left: Authorized Controller of Examinations */}
                        <div className="text-left space-y-1">
                          <div className="h-8 flex items-end">
                            <svg className="w-28 h-7 text-amber-300 stroke-current" viewBox="0 0 120 30" fill="none">
                              <path d="M5,22 Q25,5 45,18 T75,12 Q90,25 110,8" strokeWidth="1.8" strokeLinecap="round" />
                              <path d="M20,25 Q50,28 85,24" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                          </div>
                          <div className="border-t border-slate-700/80 pt-1">
                            <span className="text-[11px] font-extrabold text-white block uppercase">Controller of Examinations</span>
                            <span className="text-[9px] text-slate-400 font-mono block">
                              Issued on {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                            </span>
                          </div>
                        </div>

                        {/* Center: Royal 32-Point Chakra Cut Gold Certificate Seal */}
                        <div className="relative w-24 h-24 flex items-center justify-center shrink-0 filter drop-shadow-[0_4px_16px_rgba(245,158,11,0.7)]">
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

                            {/* Top Curved Text: DAIRYHUB */}
                            <text x="36.85" y="26.99" transform="rotate(-29.8 36.85 26.99)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">D</text>
                            <text x="40.40" y="25.30" transform="rotate(-21.3 40.40 25.30)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">A</text>
                            <text x="44.15" y="24.15" transform="rotate(-12.8 44.15 24.15)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">I</text>
                            <text x="48.04" y="23.57" transform="rotate(-4.3 48.04 23.57)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">R</text>
                            <text x="51.96" y="23.57" transform="rotate(4.3 51.96 23.57)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">Y</text>
                            <text x="55.85" y="24.15" transform="rotate(12.8 55.85 24.15)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">H</text>
                            <text x="59.60" y="25.30" transform="rotate(21.3 59.60 25.30)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">U</text>
                            <text x="63.15" y="26.99" transform="rotate(29.8 63.15 26.99)" textAnchor="middle" dominantBaseline="central" fill="#fef08a" fontSize="5.2" fontWeight="900" fontFamily="sans-serif">B</text>

                            {/* Bottom Curved Text: OFFICIAL SEAL */}
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

                          {/* Center Shield Emblem */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                            <ShieldCheck className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                          </div>
                        </div>

                        {/* Right: Academic Director & Board */}
                        <div className="text-right space-y-1">
                          <div className="h-8 flex items-end justify-end">
                            <svg className="w-28 h-7 text-amber-300 stroke-current" viewBox="0 0 120 30" fill="none">
                              <path d="M10,12 Q30,26 55,8 T90,20 Q105,6 115,18" strokeWidth="1.8" strokeLinecap="round" />
                              <path d="M35,26 Q65,22 105,25" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                          </div>
                          <div className="border-t border-slate-700/80 pt-1">
                            <span className="text-[11px] font-extrabold text-white block uppercase">Director of Academic Standards</span>
                            <span className="text-[9px] text-amber-400 font-mono block">DairyHub National Evaluation Board</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                  <RotateCcw className="w-3.5 h-3.5 mr-1" /> Retake Fresh Test (Next 50 Questions)
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
