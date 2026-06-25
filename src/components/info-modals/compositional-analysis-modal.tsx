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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Beaker,
  Droplet,
  Wind,
  ShieldCheck,
  Component,
  FlaskConical,
  Thermometer,
  Archive,
  Search,
  ChevronRight,
  LayoutGrid,
  TestTube,
  Layers,
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

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Categories",
    langPill: "Compositional Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Categories",
    langPill: "Compositional English Content",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─────────────────────────────────────────────
// HTML Safety & Table Wrapping Hook
// ─────────────────────────────────────────────
function useTableWrapper(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return;

    const tables = ref.current.querySelectorAll("table");
    tables.forEach((table) => {
      if (table.parentElement?.classList.contains("table-scroll-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "table-scroll-wrapper overflow-x-auto w-full my-4 rounded-xl border border-gray-200 shadow-sm";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);

      table.style.borderCollapse = "collapse";
      table.style.fontSize = "12px";
      table.style.width = "max-content";
      table.style.minWidth = "100%";
      table.querySelectorAll("td").forEach((td) => {
        (td as HTMLElement).style.border = "1px solid #e5e7eb";
        (td as HTMLElement).style.padding = "8px 12px";
        (td as HTMLElement).style.verticalAlign = "top";
        (td as HTMLElement).style.whiteSpace = "normal";
        (td as HTMLElement).style.minWidth = "120px";
      });
      table.querySelectorAll("th").forEach((th) => {
        (th as HTMLElement).style.border = "1px solid #e5e7eb";
        (th as HTMLElement).style.padding = "8px 12px";
        (th as HTMLElement).style.backgroundColor = "#f8fafc";
        (th as HTMLElement).style.fontWeight = "600";
        (th as HTMLElement).style.textAlign = "left";
        (th as HTMLElement).style.whiteSpace = "nowrap";
        (th as HTMLElement).style.color = "#334155";
      });
    });

    const images = ref.current.querySelectorAll("img");
    images.forEach((img) => {
      img.style.maxWidth = "100%";
      img.style.height = "auto";
    });

    const preBlocks = ref.current.querySelectorAll("pre");
    preBlocks.forEach((pre) => {
      pre.style.overflowX = "auto";
      pre.style.maxWidth = "100%";
      pre.style.whiteSpace = "pre-wrap";
      pre.style.wordBreak = "break-word";
    });
  });
}

const SafeHTML = ({ html }: { html: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useTableWrapper(containerRef);

  return (
    <div
      ref={containerRef}
      className="safe-html-content text-slate-700
        [&_h4]:text-indigo-900 [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-sm sm:[&_h4]:text-base [&_h4]:border-b [&_h4]:border-indigo-100 [&_h4]:pb-1
        [&_p]:text-xs sm:[&_p]:text-sm [&_p]:mb-3 [&_p]:leading-relaxed
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-xs sm:[&_ul]:text-sm [&_li]:mb-1.5
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:text-xs sm:[&_ol]:text-sm [&_li]:mb-1.5
        [&_pre]:bg-slate-100/80 [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:text-[10px] sm:[&_pre]:text-sm [&_pre]:border [&_pre]:border-slate-200 [&_pre]:text-indigo-800 [&_pre]:my-3
        [&_code]:font-mono [&_code]:text-[10px] sm:[&_code]:text-sm [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
        [&_strong]:text-slate-900
      "
      style={{ overflowWrap: "anywhere", wordBreak: "break-word", minWidth: 0 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// ─────────────────────────────────────────────
// UI Components
// ─────────────────────────────────────────────
const Section = ({ title, children, icon: Icon, accentColor = "blue" }: { title: string; children: React.ReactNode; icon?: React.ElementType; accentColor?: string }) => {
  const headerGradients: Record<string, string> = {
    blue: "from-blue-600 to-blue-500", orange: "from-orange-600 to-orange-500", cyan: "from-cyan-600 to-cyan-500",
    emerald: "from-emerald-600 to-emerald-500", red: "from-red-600 to-red-500", purple: "from-purple-600 to-purple-500",
    rose: "from-rose-600 to-rose-500", amber: "from-amber-600 to-amber-500", teal: "from-teal-600 to-teal-500",
    indigo: "from-indigo-600 to-indigo-500", slate: "from-slate-600 to-slate-500", lime: "from-lime-600 to-lime-500",
    pink: "from-pink-600 to-pink-500", yellow: "from-yellow-600 to-yellow-500"
  };
  const gradient = headerGradients[accentColor] ?? headerGradients.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm mb-4 sm:mb-5 w-full max-w-full overflow-hidden box-border">
      <div className={`bg-gradient-to-r ${gradient} p-3 sm:p-5 flex items-center gap-2 sm:gap-3 rounded-t-xl sm:rounded-t-2xl`}>
        {Icon && (
          <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        )}
        <h2 className="text-sm sm:text-xl font-bold text-white font-headline leading-tight break-words">{title}</h2>
      </div>
      <div className="p-4 sm:p-6 text-card-foreground text-gray-700 w-full min-w-0 max-w-full">{children}</div>
    </div>
  );
};

const Procedure = ({ test }: { test: TestDetail }) => (
  <AccordionItem value={test.title.replace(/\s+/g, "-").toLowerCase()} className="border-b border-gray-100 last:border-0 bg-white sm:rounded-lg sm:mb-2 sm:border sm:overflow-hidden">
    <AccordionTrigger className="text-left hover:no-underline px-3 py-3 sm:px-4 sm:py-4 hover:bg-slate-50 transition-colors">
      <div className="flex flex-col text-left pr-4 min-w-0 max-w-full">
        <span className="font-bold text-sm sm:text-base text-indigo-900 break-words flex items-center gap-2">
          <TestTube className="w-4 h-4 shrink-0 text-indigo-400" />
          {test.title}
        </span>
        <span className="text-xs text-slate-500 font-normal mt-1.5 leading-snug break-words pl-6">
          {test.purpose}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-3 sm:px-4 pb-4 min-w-0">
      <div className="pl-2 sm:pl-6 border-l-2 border-indigo-100/50 mt-2">
        <SafeHTML html={test.procedure} />
        {test.reference && (
          <div className="mt-5 p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
            <p className="text-[10px] sm:text-xs text-indigo-800 m-0 break-words">
              <strong className="text-indigo-900">Reference:</strong> {test.reference}
            </p>
          </div>
        )}
      </div>
    </AccordionContent>
  </AccordionItem>
);

// ─────────────────────────────────────────────
// Topic Configuration & Grouping
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "तरल डेयरी और क्रीम (Liquid Dairy & Creams)" : "Liquid Dairy & Creams",
      groupIcon: Droplet,
      topics: [
        { value: "processed-milk", title: c.topics["processed-milk"]?.title || "Milk", subtitle: "Standard tests for processed milk", icon: Droplet, accent: "blue", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "cream", title: c.topics["cream"]?.title || "Cream", subtitle: "Fat and quality analysis", icon: Droplet, accent: "amber", badge: "Fat", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "flavoured-milk", title: c.topics["flavoured-milk"]?.title || "Flavoured Milk", subtitle: "Sugar and additive checks", icon: Beaker, accent: "pink", badge: "Variant", badgeVariant: "secondary" as const, colorClass: "text-pink-600", bgClass: "bg-pink-50 hover:bg-pink-100", borderClass: "border-pink-200 hover:border-pink-400" },
        { value: "uht-milk", title: c.topics["uht-milk"]?.title || "UHT Milk", subtitle: "Sterility and shelf-life tests", icon: ShieldCheck, accent: "indigo", badge: "Sterile", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "वसा और तेल (Fats & Oils)" : "Fats & Oils",
      groupIcon: Droplet,
      topics: [
        { value: "butter", title: c.topics["butter"]?.title || "Butter", subtitle: "Moisture, curd and salt tests", icon: Component, accent: "orange", badge: "High Fat", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "ghee-butter-oil", title: c.topics["ghee-butter-oil"]?.title || "Ghee / Butter Oil", subtitle: "Purity and adulteration checks", icon: FlaskConical, accent: "yellow", badge: "Pure Fat", badgeVariant: "secondary" as const, colorClass: "text-yellow-600", bgClass: "bg-yellow-50 hover:bg-yellow-100", borderClass: "border-yellow-200 hover:border-yellow-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "पाउडर और सांद्रित (Powders & Concentrates)" : "Powders & Concentrates",
      groupIcon: Wind,
      topics: [
        { value: "milk-powder", title: c.topics["milk-powder"]?.title || "Milk Powder", subtitle: "Solubility and moisture", icon: Wind, accent: "slate", badge: "Dry", badgeVariant: "secondary" as const, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400" },
        { value: "cream-powder", title: c.topics["cream-powder"]?.title || "Cream Powder", subtitle: "Fat content in dry form", icon: Wind, accent: "orange", badge: "Dry Fat", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "condensed-milk", title: c.topics["condensed-milk"]?.title || "Condensed Milk", subtitle: "Sucrose and total solids", icon: Thermometer, accent: "amber", badge: "Concentrate", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "whey-powder", title: c.topics["whey-powder"]?.title || "Whey Powder", subtitle: "Protein and ash analysis", icon: Archive, accent: "lime", badge: "Byproduct", badgeVariant: "secondary" as const, colorClass: "text-lime-600", bgClass: "bg-lime-50 hover:bg-lime-100", borderClass: "border-lime-200 hover:border-lime-400" },
        { value: "dairy-whitener", title: c.topics["dairy-whitener"]?.title || "Dairy Whitener", subtitle: "Additives and solubility", icon: Wind, accent: "slate", badge: "Blend", badgeVariant: "secondary" as const, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400" },
        { value: "infant-formula", title: c.topics["infant-formula"]?.title || "Infant Formula", subtitle: "Strict nutritional compliance", icon: ShieldCheck, accent: "teal", badge: "Sensitive", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "किण्वित और जमा हुआ (Fermented & Coagulated)" : "Fermented & Coagulated",
      groupIcon: Layers,
      topics: [
        { value: "cheese-paneer", title: c.topics["cheese-paneer"]?.title || "Paneer / Cheese", subtitle: "Moisture and fat in dry matter", icon: PaneerIcon, accent: "emerald", badge: "Protein", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
        { value: "dahi-yoghurt", title: c.topics["dahi-yoghurt"]?.title || "Dahi / Yoghurt", subtitle: "Acidity and active cultures", icon: Beaker, accent: "blue", badge: "Culture", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "chakka-shrikhand", title: c.topics["chakka-shrikhand"]?.title || "Chakka / Shrikhand", subtitle: "Sugar and total solids", icon: Beaker, accent: "orange", badge: "Sweet", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "lassi", title: c.topics["lassi"]?.title || "Lassi", subtitle: "Acidity and sugar tests", icon: Beaker, accent: "cyan", badge: "Drink", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "buttermilk-chaas", title: c.topics["buttermilk-chaas"]?.title || "Buttermilk / Chaas", subtitle: "Salt and spices analysis", icon: Droplet, accent: "teal", badge: "Drink", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "पारंपरिक और अन्य (Traditional & Others)" : "Traditional & Others",
      groupIcon: Component,
      topics: [
        { value: "khoa", title: c.topics["khoa"]?.title || "Khoa", subtitle: "Desiccated milk properties", icon: Component, accent: "red", badge: "Desiccated", badgeVariant: "secondary" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
        { value: "chhena-rasogolla", title: c.topics["chhena-rasogolla"]?.title || "Chhena / Rasogolla", subtitle: "Syrup and sponge quality", icon: Component, accent: "rose", badge: "Sweet", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
        { value: "rabri", title: c.topics["rabri"]?.title || "Rabri", subtitle: "Flakes and sweetness", icon: Beaker, accent: "amber", badge: "Sweet", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "traditional-sweets", title: c.topics["traditional-sweets"]?.title || "Traditional Sweets", subtitle: "Peda, Burfi, Gulab Jamun", icon: Component, accent: "orange", badge: "Varied", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "ice-cream", title: c.topics["ice-cream"]?.title || "Ice Cream", subtitle: "Overrun and fat analysis", icon: IceCreamIcon, accent: "pink", badge: "Frozen", badgeVariant: "secondary" as const, colorClass: "text-pink-600", bgClass: "bg-pink-50 hover:bg-pink-100", borderClass: "border-pink-200 hover:border-pink-400" },
        { value: "casein", title: c.topics["casein"]?.title || "Casein", subtitle: "Protein extraction tests", icon: FlaskConical, accent: "purple", badge: "Protein", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
      ],
    },
  ];
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
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

  const selectedTopicInfo = ALL_TOPICS.find((tp) => tp.value === activeTopic);
  const selectedContent = selectedTopicInfo
    ? (content.topics[selectedTopicInfo.value as keyof typeof content.topics] as TopicContent)
    : null;

  const handleSelectTopic = (value: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        scrollPosition.current = viewport.scrollTop;
      }
    }
    setSearchQuery("");
    setActiveTopic(value);
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

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <style dangerouslySetInnerHTML={{ __html: `
        .strict-html-wrap {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .strict-html-wrap, .strict-html-wrap * {
          overflow-wrap: break-word !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
        }
      `}} />

      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🧪 Compositional Analysis
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo ? selectedTopicInfo.subtitle : "Explore compositional tests for various dairy products"}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <Layers className="w-3 h-3 shrink-0" /> 5 {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <TestTube className="w-3 h-3 shrink-0" /> {lbl.langPill}
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
                <span className="font-medium truncate min-w-0">{selectedContent?.title || selectedTopicInfo.title}</span>
                <Badge variant="secondary" className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none">
                  {selectedTopicInfo.badge}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {selectedTopicInfo && selectedContent ? (
          /* ── Topic Detail View ─────────────────── */
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50 flex flex-col strict-html-wrap">
            {/* Sticky Search Bar */}
            <div className="px-3 sm:px-6 py-3 bg-white border-b border-gray-200 shrink-0 shadow-sm z-10">
              <div className="relative max-w-4xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={`Search tests in ${selectedContent.title}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white transition-all"
                />
              </div>
            </div>

            <ScrollArea className="flex-1 overflow-y-auto w-full">
              <div className="p-3 sm:p-6 max-w-4xl mx-auto w-full pb-10">
                <Section title={`${selectedContent.title} Tests`} icon={selectedTopicInfo.icon} accentColor={selectedTopicInfo.accent}>
                  {(() => {
                    const filteredTests = selectedContent.tests.filter(
                      (test) =>
                        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        test.purpose.toLowerCase().includes(searchQuery.toLowerCase())
                    );

                    if (filteredTests.length > 0) {
                      return (
                        <Accordion type="single" collapsible className="w-full min-w-0">
                          {filteredTests.map((test, index) => (
                            <Procedure key={index} test={test} />
                          ))}
                        </Accordion>
                      );
                    } else {
                      return (
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
                      );
                    }
                  })()}
                </Section>
              </div>
            </ScrollArea>
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
                        <group.groupIcon className="w-4 h-4 text-indigo-500" />
                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent" />
                      <span className="text-[10px] text-indigo-600 font-medium tabular-nums bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                        {lbl.topicsCount(group.topics.length)}
                      </span>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
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
                                {content.topics[topic.value as keyof typeof content.topics]?.title || topic.title}
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
                            className={`w-4 h-4 shrink-0 ml-1 mt-1.5 transition-transform duration-200 group-hover:translate-x-1 ${topic.colorClass} opacity-50 hidden sm:block`}
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
  );
}
