"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Beaker,
  Droplet,
  Wind,
  ShieldCheck,
  Component,
  FlaskConical,
  Snowflake,
  Thermometer,
  Archive,
  Zap,
  FileSpreadsheet,
  Search,
  ChevronRight,
  LayoutGrid,
} from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "@/components/icons";
import { useLanguage } from "@/context/language-context";
import { compositionalAnalysisContent } from "@/lib/content/compositional-analysis-content";
import { cn } from "@/lib/utils";

interface TestDetail {
  title: string;
  purpose: string;
  reference?: string;
  procedure: string;
}

interface TopicContent {
  title: string;
  tests: TestDetail[];
}

// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Products",
    modules: "Categories",
    langPill: "Compositional Analysis Hindi Content",
    topicsCount: (n: number) => `${n} products`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Products",
    modules: "Categories",
    langPill: "Compositional Analysis English Content",
    topicsCount: (n: number) => `${n} products`,
  },
};

// ✅ Custom hook to wrap tables in scrollable containers after render
function useTableWrapper(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return;

    const tables = ref.current.querySelectorAll("table");
    tables.forEach((table) => {
      // Skip if already wrapped
      if (table.parentElement?.classList.contains("table-scroll-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "table-scroll-wrapper";
      wrapper.style.overflowX = "auto";
      wrapper.style.overflowY = "hidden";
      wrapper.style.maxWidth = "100%";
      (wrapper.style as any).WebkitOverflowScrolling = "touch";
      wrapper.style.marginBottom = "1rem";
      wrapper.style.borderRadius = "8px";
      wrapper.style.border = "1px solid #e2e8f0";

      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);

      // Force table to not collapse
      table.style.minWidth = "400px";
      table.style.width = "100%";
    });

    // Also fix any images
    const images = ref.current.querySelectorAll("img");
    images.forEach((img) => {
      img.style.maxWidth = "100%";
      img.style.height = "auto";
    });

    // Fix pre/code blocks
    const preBlocks = ref.current.querySelectorAll("pre");
    preBlocks.forEach((pre) => {
      pre.style.overflowX = "auto";
      pre.style.maxWidth = "100%";
      pre.style.whiteSpace = "pre-wrap";
      pre.style.wordBreak = "break-word";
    });
  });
}

const InfoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-card p-3 sm:p-6 rounded-xl shadow-sm border mt-4 min-w-0",
      className
    )}
  >
    {children}
  </div>
);

const SectionTitle = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <h3
    id={id}
    className="text-lg sm:text-xl font-semibold text-primary scroll-mt-24 font-headline mb-4 break-words"
  >
    {children}
  </h3>
);

// ✅ SafeHTML component — renders HTML + wraps tables after mount
const SafeHTML = ({ html }: { html: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useTableWrapper(containerRef);

  return (
    <div
      ref={containerRef}
      className="safe-html-content"
      style={{
        overflowWrap: "anywhere",
        wordBreak: "break-word",
        minWidth: 0,
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const Procedure = ({ test }: { test: TestDetail }) => (
  <AccordionItem value={test.title.replace(/\s+/g, "-").toLowerCase()}>
    <AccordionTrigger className="text-left hover:no-underline px-1">
      <div className="flex flex-col text-left pr-4 min-w-0 max-w-full">
        <span className="font-bold text-sm sm:text-lg text-slate-800 break-words">
          {test.title}
        </span>
        <span className="text-xs text-muted-foreground font-normal mt-1 leading-snug break-words">
          {test.purpose}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-0 sm:px-1 pb-4 min-w-0">
      {/* ✅ Triple-layered overflow protection */}
      <div
        className="w-full min-w-0"
        style={{ maxWidth: "100%", overflow: "hidden" }}
      >
        <div
          className="min-w-0"
          style={{
            maxWidth: "calc(100vw - 48px)",
            overflow: "hidden",
          }}
        >
          <div
            className="
              max-w-none text-slate-700 min-w-0
              [&_h4]:text-primary [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-sm sm:[&_h4]:text-base
              [&_p]:text-xs sm:[&_p]:text-sm [&_p]:mb-3 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:mb-4 [&_ul]:text-xs sm:[&_ul]:text-sm [&_li]:mb-1.5
              [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:mb-4 [&_ol]:text-xs sm:[&_ol]:text-sm [&_li]:mb-1.5
              [&_pre]:bg-slate-100/80 [&_pre]:p-2 [&_pre]:rounded-lg [&_pre]:text-[10px] sm:[&_pre]:text-sm [&_pre]:border [&_pre]:border-slate-200 [&_pre]:text-indigo-800 [&_pre]:my-3
              [&_code]:font-mono [&_code]:text-[10px] sm:[&_code]:text-sm
              [&_table]:text-[10px] sm:[&_table]:text-sm [&_table]:border-collapse
              [&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-100 [&_th]:p-1 sm:[&_th]:p-2 [&_th]:text-left [&_th]:text-[10px] sm:[&_th]:text-sm
              [&_td]:border [&_td]:border-slate-300 [&_td]:p-1 sm:[&_td]:p-2 [&_td]:text-[10px] sm:[&_td]:text-sm
              [&_strong]:text-slate-900
              [&_img]:max-w-full [&_img]:h-auto
            "
          >
            <SafeHTML html={test.procedure} />

            {test.reference && (
              <div className="mt-5 p-2 sm:p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                <p className="text-[10px] sm:text-xs text-blue-800 m-0 break-words">
                  <strong className="text-blue-900">Reference:</strong>{" "}
                  {test.reference}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
);

// ─────────────────────────────────────────────
// Topic Groups Configuration
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  const t = c.topics;
  return [
    {
      groupLabel: lang === "hi" ? "तरल दूध और वसा उत्पाद (Liquid Milk & Fats)" : "Liquid Milk & Fats",
      groupIcon: Droplet,
      topics: [
        { value: "processed-milk", title: t["processed-milk"]?.title || "Milk", subtitle: "Fat, SNF & Gerber method details", icon: Droplet, accent: "blue", badge: "Liquid", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "flavoured-milk", title: t["flavoured-milk"]?.title || "Flavoured Milk", subtitle: "Sugar, Fat & Total Solids", icon: Droplet, accent: "pink", badge: "Liquid", badgeVariant: "secondary" as const, colorClass: "text-pink-600", bgClass: "bg-pink-50 hover:bg-pink-100", borderClass: "border-pink-200 hover:border-pink-400" },
        { value: "uht-milk", title: t["uht-milk"]?.title || "UHT Milk", subtitle: "Sterility, packaging & quality", icon: ShieldCheck, accent: "indigo", badge: "UHT", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
        { value: "buttermilk-chaas", title: t["buttermilk-chaas"]?.title || "Buttermilk / Chaas", subtitle: "Acidity & total solids", icon: Droplet, accent: "emerald", badge: "Fat", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
        { value: "cream", title: t["cream"]?.title || "Cream", subtitle: "Fat content & acidity tests", icon: Droplet, accent: "amber", badge: "Fat", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "butter", title: t["butter"]?.title || "Butter", subtitle: "Kohman method for moisture & salt", icon: Component, accent: "orange", badge: "Fat", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "ghee-butter-oil", title: t["ghee-butter-oil"]?.title || "Ghee / Butter Oil", subtitle: "RM value, FFA & Baudouin test", icon: FlaskConical, accent: "yellow", badge: "Fat", badgeVariant: "secondary" as const, colorClass: "text-yellow-600", bgClass: "bg-yellow-50 hover:bg-yellow-100", borderClass: "border-yellow-200 hover:border-yellow-400" },
      ].filter(item => item.title),
    },
    {
      groupLabel: lang === "hi" ? "संघनित और पाउडर उत्पाद (Condensed & Powders)" : "Condensed & Powders",
      groupIcon: Wind,
      topics: [
        { value: "condensed-milk", title: t["condensed-milk"]?.title || "Condensed Milk", subtitle: "Total solids & sucrose content", icon: Thermometer, accent: "amber", badge: "Condensed", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "milk-powder", title: t["milk-powder"]?.title || "Milk Powder", subtitle: "Solubility index & bulk density", icon: Wind, accent: "slate", badge: "Powder", badgeVariant: "secondary" as const, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400" },
        { value: "cream-powder", title: t["cream-powder"]?.title || "Cream Powder", subtitle: "Fat, moisture & solubility", icon: Wind, accent: "orange", badge: "Powder", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "casein", title: t["casein"]?.title || "Casein", subtitle: "Acid insoluble ash & protein", icon: FlaskConical, accent: "purple", badge: "Protein", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
        { value: "whey-powder", title: t["whey-powder"]?.title || "Whey Powder", subtitle: "Lactose & protein content", icon: Archive, accent: "green", badge: "Powder", badgeVariant: "secondary" as const, colorClass: "text-green-600", bgClass: "bg-green-50 hover:bg-green-100", borderClass: "border-green-200 hover:border-green-400" },
        { value: "dairy-whitener", title: t["dairy-whitener"]?.title || "Dairy Whitener", subtitle: "Sucrose & solubility index", icon: Wind, accent: "slate", badge: "Powder", badgeVariant: "secondary" as const, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400" },
        { value: "infant-formula", title: t["infant-formula"]?.title || "Infant Formula", subtitle: "Required nutrient profile tests", icon: ShieldCheck, accent: "teal", badge: "Formula", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
      ].filter(item => item.title),
    },
    {
      groupLabel: lang === "hi" ? "पारंपरिक और किण्वित उत्पाद (Traditional & Fermented)" : "Traditional & Fermented",
      groupIcon: PaneerIcon,
      topics: [
        { value: "cheese-paneer", title: t["cheese-paneer"]?.title || "Paneer / Cheese", subtitle: "Moisture & fat on dry matter", icon: PaneerIcon, accent: "emerald", badge: "Coagulated", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
        { value: "dahi-yoghurt", title: c.topics["dahi-yoghurt"]?.title || "Dahi / Yoghurt", subtitle: "Acidity, syneresis & solid content", icon: Beaker, accent: "indigo", badge: "Fermented", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
        { value: "chakka-shrikhand", title: t["chakka-shrikhand"]?.title || "Chakka / Shrikhand", subtitle: "Acidity, total sugar & solids", icon: Beaker, accent: "yellow", badge: "Fermented", badgeVariant: "secondary" as const, colorClass: "text-yellow-600", bgClass: "bg-yellow-50 hover:bg-yellow-100", borderClass: "border-yellow-200 hover:border-yellow-400" },
        { value: "lassi", title: t["lassi"]?.title || "Lassi", subtitle: "Fat, SNF & total solids", icon: Beaker, accent: "cyan", badge: "Fermented", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "khoa", title: t["khoa"]?.title || "Khoa", subtitle: "Moisture, fat & starch detection", icon: Component, accent: "rose", badge: "Sweets Base", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
        { value: "rabri", title: t["rabri"]?.title || "Rabri", subtitle: "Sucrose & total solids", icon: Beaker, accent: "orange", badge: "Sweets", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "chhena-rasogolla", title: t["chhena-rasogolla"]?.title || "Chhena / Rasogolla", subtitle: "Moisture, fat & sucrose", icon: Component, accent: "red", badge: "Sweets", badgeVariant: "secondary" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
        { value: "traditional-sweets", title: t["traditional-sweets"]?.title || "Traditional Sweets", subtitle: "Soya/starch/synthetic milk checks", icon: Component, accent: "orange", badge: "Sweets", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "ice-cream", title: t["ice-cream"]?.title || "Ice Cream", subtitle: "Overrun, fat & total solids", icon: IceCreamIcon, accent: "pink", badge: "Frozen", badgeVariant: "secondary" as const, colorClass: "text-pink-600", bgClass: "bg-pink-50 hover:bg-pink-100", borderClass: "border-pink-200 hover:border-pink-400" },
      ].filter(item => item.title),
    },
  ].filter(g => g.topics.length > 0);
};

export function CompositionalAnalysisModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(compositionalAnalysisContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  if (!content) return null;

  const TOPIC_GROUPS = getTopicGroups(content, lang);
  const ALL_TOPICS = TOPIC_GROUPS.flatMap((g) => g.topics);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      setSearchQuery("");
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const selectedTopicInfo = ALL_TOPICS.find((t) => t.value === activeTopic);
  const selectedContent = selectedTopicInfo
    ? (content.topics[selectedTopicInfo.value as keyof typeof content.topics] as TopicContent)
    : null;

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        scrollPosition.current = viewport.scrollTop;
      }
    }
    setSearchQuery("");
    setActiveTopic(topicValue);
  };

  const handleBack = () => {
    setActiveTopic(null);
    setSearchQuery("");
  };

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      const timeoutId = setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
          if (viewport) {
            viewport.scrollTop = scrollPosition.current;
          }
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [activeTopic]);

  const totalTopics = ALL_TOPICS.length;

  const renderContent = () => {
    if (!selectedContent) return null;

    const filteredTests = selectedContent.tests.filter(
      (test) =>
        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.purpose.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="w-full min-w-0">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-slate-50 to-slate-100 pb-3 pt-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search in ${selectedContent.title}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm transition-all"
            />
          </div>
        </div>

        <InfoCard>
          <SectionTitle id={`${activeTopic}-analysis`}>
            {selectedContent.title}
          </SectionTitle>

          {filteredTests.length > 0 ? (
            <Accordion type="single" collapsible className="w-full min-w-0">
              {filteredTests.map((test, index) => (
                <Procedure key={index} test={test} />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-10 px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <p className="text-slate-600 font-medium break-words">
                No tests found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Try searching with a different keyword
              </p>
            </div>
          )}
        </InfoCard>
      </div>
    );
  };

  return (
    <>
      {/* ✅ Global styles for HTML content overflow protection & table layout overrides */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .safe-html-content * {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .safe-html-content table {
          font-size: 10px !important;
          border-collapse: collapse !important;
        }
        @media (min-width: 640px) {
          .safe-html-content table {
            font-size: 14px !important;
          }
        }
        .safe-html-content td,
        .safe-html-content th {
          padding: 4px !important;
          word-break: normal !important;
        }
        @media (min-width: 640px) {
          .safe-html-content td,
          .safe-html-content th {
            padding: 8px !important;
          }
        }
        .safe-html-content pre {
          white-space: pre-wrap !important;
          word-break: break-word !important;
          overflow-x: auto !important;
        }
        .safe-html-content img {
          max-width: 100% !important;
          height: auto !important;
        }
        .table-scroll-wrapper {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }
        .table-scroll-wrapper::-webkit-scrollbar {
          height: 6px;
        }
        .table-scroll-wrapper::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .table-scroll-wrapper::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
      `}} />

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="
          w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
          sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
          lg:max-w-6xl
          flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
          [&>button]:!text-white
        ">
          {/* ── Top Header Bar ─────────────────────── */}
          <div className="bg-gradient-to-br from-indigo-900 via-sky-900 to-indigo-950 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
            <DialogHeader>
              <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
                🔬 {content.main_title}
              </DialogTitle>
              <DialogDescription className={`text-center text-sky-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
                {selectedTopicInfo ? selectedTopicInfo.subtitle : content.main_description}
              </DialogDescription>
            </DialogHeader>

            {/* Stats pills — hidden on mobile to save vertical space */}
            {!activeTopic && (
              <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
                <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  <Droplet className="w-3 h-3 shrink-0" /> 3 {lbl.modules}
                </span>
                <span className="inline-flex items-center gap-1 bg-sky-500/30 text-sky-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-sky-500/40">
                  <Beaker className="w-3 h-3 shrink-0" /> {lbl.langPill}
                </span>
              </div>
            )}

            {/* Back button */}
            {activeTopic && selectedTopicInfo && (
              <div className="flex items-center gap-2 mt-1.5 sm:mt-2 min-w-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg shrink-0 text-xs px-2 h-6 sm:h-7"
                >
                  <ArrowLeft className="w-3 h-3 mr-1" />
                  {lbl.backToTopics}
                </Button>
                <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs min-w-0 overflow-hidden">
                  <selectedTopicInfo.icon className="w-3 h-3 shrink-0" />
                  <span className="font-medium truncate min-w-0">{selectedTopicInfo.title}</span>
                  <Badge variant="secondary" className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none">
                    {selectedTopicInfo.badge}
                  </Badge>
                </div>
              </div>
            )}
          </div>

          {/* ── Content Area ───────────────────────── */}
          {selectedTopicInfo ? (

            /* ── Topic Detail View ─────────────────── */
            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50">
              <div
                className="p-3 sm:p-4 max-w-4xl mx-auto w-full pb-10 min-w-0"
                style={{ maxWidth: "100%", overflowX: "hidden" }}
              >
                {renderContent()}
              </div>
            </div>

          ) : (

            /* ── Topic Grid / Home View ─────────────── */
            <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
              <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
                <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto">
                  {TOPIC_GROUPS.map((group) => (
                    <div key={group.groupLabel}>

                      {/* Group header */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <group.groupIcon className="w-4 h-4 text-sky-500" />
                          <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-600">
                            {group.groupLabel}
                          </h3>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-sky-200 to-transparent" />
                        <span className="text-[10px] text-sky-600 font-medium tabular-nums bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                          {lbl.topicsCount(group.topics.length)}
                        </span>
                      </div>

                      {/* Cards grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {group.topics.map((topic) => (
                          <button
                            key={topic.value}
                            onClick={() => handleSelectTopic(topic.value)}
                            className={`
                              relative flex items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                              text-left shadow-sm hover:shadow-md hover:-translate-y-1
                              ${topic.bgClass} ${topic.borderClass}
                              group w-full bg-white box-border
                            `}
                          >
                            {/* Icon */}
                            <div className={`p-2 sm:p-2.5 rounded-lg shadow-sm mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100`}>
                              <topic.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${topic.colorClass}`} />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0 overflow-hidden pt-0.5">
                              <div className="flex items-start gap-1.5 flex-wrap mb-1">
                                <span className="font-bold text-gray-800 text-[13px] sm:text-[15px] leading-tight break-words group-hover:text-black transition-colors">
                                  {topic.title}
                                </span>
                                <Badge
                                  variant={topic.badgeVariant}
                                  className="text-[9px] px-1.5 py-0 shrink-0 hidden xs:inline-flex font-medium"
                                >
                                  {topic.badge}
                                </Badge>
                              </div>
                              <p className="text-[10px] sm:text-xs text-gray-500 leading-snug line-clamp-2 break-words">
                                {topic.subtitle}
                              </p>
                            </div>

                            {/* Arrow */}
                            <ChevronRight
                              className={`w-4 h-4 shrink-0 ml-1 mt-1.5 transition-transform duration-200 group-hover:translate-x-1 ${topic.colorClass} opacity-50`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="h-6" />
                </div>
              </ScrollArea>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
