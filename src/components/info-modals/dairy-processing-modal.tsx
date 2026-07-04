"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  Thermometer,
  Settings,
  Factory,
  Wind,
  Snowflake,
  Flame,
  Combine,
  Layers,
  Zap,
  RotateCw,
  FlaskConical,
  Filter,
  CloudFog,
  Cog,
  BookOpen,
  Play,
  ChevronRight,
  LayoutGrid,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

import { pasteurizationContent } from "@/lib/content/dairy-processing/pasteurization";
import { standardizationContent } from "@/lib/content/dairy-processing/standardization";
import { separationContent } from "@/lib/content/dairy-processing/separation";
import { clarificationContent } from "@/lib/content/dairy-processing/clarification";
import { homogenizationContent } from "@/lib/content/dairy-processing/homogenization";
import { refrigerationContent } from "@/lib/content/dairy-processing/refrigeration";
import { sterilizationContent } from "@/lib/content/dairy-processing/sterilization";
import { evaporationContent } from "@/lib/content/dairy-processing/evaporation";
import { uhtContent } from "@/lib/content/dairy-processing/uht";
import { sprayDryingContent } from "@/lib/content/dairy-processing/spray-drying";
import { fermentationContent } from "@/lib/content/dairy-processing/fermentation";
import { churningContent } from "@/lib/content/dairy-processing/churning";
import { boilerContent } from "@/lib/content/dairy-processing/boiler";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Process Groups",
    langPill: "Processing Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Process Groups",
    langPill: "Processing English Content",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─────────────────────────────────────────────
// Configuration & Styling
// ─────────────────────────────────────────────
const processingConfig: Record<string, { icon: any; color: string; bgLight: string; borderColor: string }> = {
  pasteurization: { icon: Thermometer, color: "text-orange-600", bgLight: "bg-orange-50 hover:bg-orange-100", borderColor: "border-orange-200 hover:border-orange-400" },
  standardization: { icon: Settings, color: "text-blue-600", bgLight: "bg-blue-50 hover:bg-blue-100", borderColor: "border-blue-200 hover:border-blue-400" },
  separation: { icon: Layers, color: "text-cyan-600", bgLight: "bg-cyan-50 hover:bg-cyan-100", borderColor: "border-cyan-200 hover:border-cyan-400" },
  clarification: { icon: Filter, color: "text-teal-600", bgLight: "bg-teal-50 hover:bg-teal-100", borderColor: "border-teal-200 hover:border-teal-400" },
  homogenization: { icon: Combine, color: "text-violet-600", bgLight: "bg-violet-50 hover:bg-violet-100", borderColor: "border-violet-200 hover:border-violet-400" },
  refrigeration: { icon: Snowflake, color: "text-sky-600", bgLight: "bg-sky-50 hover:bg-sky-100", borderColor: "border-sky-200 hover:border-sky-400" },
  sterilization: { icon: Flame, color: "text-red-600", bgLight: "bg-red-50 hover:bg-red-100", borderColor: "border-red-200 hover:border-red-400" },
  evaporation: { icon: CloudFog, color: "text-slate-600", bgLight: "bg-slate-50 hover:bg-slate-100", borderColor: "border-slate-200 hover:border-slate-400" },
  uht: { icon: Zap, color: "text-amber-600", bgLight: "bg-amber-50 hover:bg-amber-100", borderColor: "border-amber-200 hover:border-amber-400" },
  "spray-drying": { icon: Wind, color: "text-yellow-600", bgLight: "bg-yellow-50 hover:bg-yellow-100", borderColor: "border-yellow-200 hover:border-yellow-400" },
  fermentation: { icon: FlaskConical, color: "text-emerald-600", bgLight: "bg-emerald-50 hover:bg-emerald-100", borderColor: "border-emerald-200 hover:border-emerald-400" },
  churning: { icon: RotateCw, color: "text-amber-500", bgLight: "bg-amber-50 hover:bg-amber-100", borderColor: "border-amber-200 hover:border-amber-400" },
  boiler: { icon: Factory, color: "text-gray-600", bgLight: "bg-gray-50 hover:bg-gray-100", borderColor: "border-gray-200 hover:border-gray-400" },
};

const CONTENT_STYLES = `
  /* ═══ ROOT & STRICT WRAPPING ═══ */
  .strict-html-wrap {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .strict-html-wrap * {
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
  }
  .dairy-content {
    font-size: 0.84rem;
    line-height: 1.7;
    color: #374151;
  }
  @media (min-width: 640px) {
    .dairy-content { font-size: 0.95rem; line-height: 1.8; }
  }

  /* ═══ HEADINGS ═══ */
  .dairy-content h3 {
    font-size: 0.92rem;
    font-weight: 700;
    margin-top: 1.4rem;
    margin-bottom: 0.5rem;
    padding: 0.45rem 0.65rem;
    border-radius: 0.5rem;
    background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
    border-left: 3px solid #6366F1;
    color: #312E81;
    line-height: 1.4;
  }
  @media (min-width: 640px) {
    .dairy-content h3 { font-size: 1.15rem; padding: 0.6rem 1rem; border-left-width: 4px; margin-top: 1.8rem; }
  }

  .dairy-content h4 {
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 1.1rem;
    margin-bottom: 0.35rem;
    padding: 0.35rem 0.55rem;
    border-radius: 0.4rem;
    background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
    border-left: 3px solid #22C55E;
    color: #166534;
    line-height: 1.4;
  }
  @media (min-width: 640px) {
    .dairy-content h4 { font-size: 1.02rem; padding: 0.45rem 0.7rem; }
  }

  /* ═══ PARAGRAPHS & INLINE ═══ */
  .dairy-content p { margin-bottom: 0.55rem; color: #4B5563; line-height: 1.7; }
  .dairy-content strong { color: #1F2937; font-weight: 600; }
  .dairy-content i, .dairy-content em { color: #7C3AED; font-style: italic; }

  /* ═══ LISTS ═══ */
  .dairy-content ul, .dairy-content ol { padding-left: 0.9rem; margin-bottom: 0.5rem; overflow: hidden; }
  @media (min-width: 640px) { .dairy-content ul, .dairy-content ol { padding-left: 1.3rem; } }
  .dairy-content li { margin-bottom: 0.35rem; padding-left: 0.15rem; line-height: 1.6; }
  .dairy-content ul > li { list-style: none; position: relative; }
  .dairy-content ul > li::before {
    content: ""; position: absolute; left: -0.7rem; top: 0.5rem; width: 5px; height: 5px;
    border-radius: 50%; background: linear-gradient(135deg, #6366F1, #8B5CF6);
  }
  .dairy-content ol > li::marker { color: #6366F1; font-weight: 700; font-size: 0.84rem; }

  /* ═══ TABLE — MOBILE: CARD LAYOUT ═══ */
  @media (max-width: 639px) {
    .dc-table-responsive { width: 100% !important; margin: 0.6rem 0; }
    .dc-table-responsive table, .dc-table-responsive thead, .dc-table-responsive tbody,
    .dc-table-responsive th, .dc-table-responsive td, .dc-table-responsive tr {
      display: block !important; width: 100% !important;
    }
    .dc-table-responsive table { border: none !important; background: transparent !important; }
    .dc-table-responsive thead { display: none !important; }
    .dc-table-responsive tbody > tr {
      margin-bottom: 0.6rem !important; border: 1px solid #E5E7EB !important;
      border-left: 3px solid #6366F1 !important; border-radius: 0.6rem !important;
      background: #FEFEFE !important; padding: 0.15rem 0 !important;
    }
    .dc-table-responsive tbody > tr:nth-child(3n+2) { border-left-color: #8B5CF6 !important; }
    .dc-table-responsive tbody > tr:nth-child(3n+3) { border-left-color: #10B981 !important; }
    .dc-table-responsive td {
      padding: 0.3rem 0.6rem !important; border: none !important;
      border-bottom: 1px solid #F3F4F6 !important; font-size: 0.73rem !important;
    }
    .dc-table-responsive td::before {
      content: attr(data-label); display: block; font-weight: 700; color: #4338CA;
      font-size: 0.58rem; text-transform: uppercase; margin-bottom: 1px;
    }
    .dc-table-responsive td:last-child { border-bottom: none !important; }
  }

  /* ═══ TABLE — DESKTOP ═══ */
  @media (min-width: 640px) {
    .dc-table-responsive {
      overflow-x: auto; margin: 0.75rem 0; border-radius: 0.6rem;
      border: 1px solid #E5E7EB; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    .dc-table-responsive table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
    .dc-table-responsive thead tr { background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%); }
    .dc-table-responsive th { padding: 0.6rem 0.75rem; border: 1px solid #D1D5DB; font-weight: 700; color: #312E81; text-align: left; }
    .dc-table-responsive td { padding: 0.5rem 0.75rem; border: 1px solid #E5E7EB; vertical-align: top; }
    .dc-table-responsive tbody tr:nth-child(even) { background-color: #F9FAFB; }
    .dc-table-responsive tbody tr:hover { background-color: #EEF2FF; }
    .dc-table-responsive td::before { display: none !important; }
  }

  /* ═══ CODE & IMAGES ═══ */
  .dairy-content pre, .dairy-content code {
    white-space: pre-wrap; font-size: 0.7rem; background: #F3F4F6;
    padding: 0.45rem; border-radius: 0.35rem; border: 1px solid #E5E7EB; display: block;
  }
  .dairy-content img { border-radius: 0.4rem; margin: 0.4rem 0; }
  .dairy-content a { color: #6366F1; text-decoration: underline; }
`;

function processTablesForMobile(html: string): string {
  const tableRegex = /<table[\s\S]*?<\/table>/gi;
  return html.replace(tableRegex, (tableHtml) => {
    const headers: string[] = [];
    const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/gi;
    let thMatch;
    while ((thMatch = thRegex.exec(tableHtml)) !== null) {
      headers.push(thMatch[1].replace(/<[^>]*>/g, "").trim());
    }

    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    const processed = tableHtml.replace(trRegex, (fullTr, trInner) => {
      if (/<th[\s>]/i.test(trInner)) return fullTr;
      let colIdx = 0;
      const newInner = trInner.replace(/<td/gi, () => {
        const label = headers[colIdx] || "";
        const escaped = label.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        colIdx++;
        return `<td data-label="${escaped}"`;
      });
      return fullTr.replace(trInner, newInner);
    });

    return `<div class="dc-table-responsive">${processed}</div>`;
  });
}

// ─────────────────────────────────────────────
// Topic Group Configuration
// ─────────────────────────────────────────────
const getTopicGroups = (topicMap: any, lang: "hi" | "en") => {
  const build = (key: string, subtitle: string, badge: string, badgeVariant: any = "secondary") => ({
    value: key,
    title: topicMap[key]?.title || key,
    subtitle,
    badge,
    badgeVariant,
    ...(processingConfig[key] || processingConfig.boiler),
  });

  return [
    {
      groupLabel: lang === "hi" ? "तापीय प्रसंस्करण (Thermal Processing)" : "Thermal Processing",
      groupIcon: Flame,
      topics: [
        build("pasteurization", "Controlled heat treatment", "Core"),
        build("sterilization", "Complete microbial elimination", "Heat", "destructive"),
        build("uht", "Ultra-High Temp processing", "Advanced"),
      ],
    },
    {
      groupLabel: lang === "hi" ? "यांत्रिक पृथक्करण (Mechanical Separation)" : "Mechanical Separation",
      groupIcon: Filter,
      topics: [
        build("standardization", "Fat adjustment & consistency", "Core"),
        build("separation", "Cream & skim milk extraction", "Physical"),
        build("clarification", "Solid impurity removal", "Clean"),
        build("homogenization", "Fat globule reduction", "Texture"),
      ],
    },
    {
      groupLabel: lang === "hi" ? "सांद्रण और सुखाने (Concentration & Drying)" : "Concentration & Drying",
      groupIcon: CloudFog,
      topics: [
        build("evaporation", "Moisture reduction", "Concentrate"),
        build("spray-drying", "Powder production", "Powder"),
      ],
    },
    {
      groupLabel: lang === "hi" ? "विशिष्ट और उपयोगिता (Specialized & Utilities)" : "Specialized & Utilities",
      groupIcon: Settings,
      topics: [
        build("fermentation", "Cultured dairy products", "Bio", "secondary"),
        build("churning", "Butter making process", "Physical"),
        build("refrigeration", "Cooling & cold storage", "Utility"),
        build("boiler", "Steam & heat generation", "Utility"),
      ],
    },
  ];
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const topicMap = useMemo(
    () => ({
      pasteurization: t(pasteurizationContent),
      standardization: t(standardizationContent),
      separation: t(separationContent),
      clarification: t(clarificationContent),
      homogenization: t(homogenizationContent),
      refrigeration: t(refrigerationContent),
      sterilization: t(sterilizationContent),
      evaporation: t(evaporationContent),
      uht: t(uhtContent),
      "spray-drying": t(sprayDryingContent),
      fermentation: t(fermentationContent),
      churning: t(churningContent),
      boiler: t(boilerContent),
    }),
    [t]
  );

  const TOPIC_GROUPS = getTopicGroups(topicMap, lang) as any;
  const ALL_TOPICS = TOPIC_GROUPS.flatMap((g: any) => g.topics) as any[];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const selectedTopicInfo = ALL_TOPICS.find((tp: any) => tp.value === activeTopic);
  const selectedContent = activeTopic ? (topicMap[activeTopic as keyof typeof topicMap] as any) : null;

  const handleSelectTopic = (value: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        scrollPosition.current = viewport.scrollTop;
      }
    }
    setActiveTopic(value);
  };

  const handleBack = () => {
    setActiveTopic(null);
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
      <style dangerouslySetInnerHTML={{ __html: CONTENT_STYLES }} />

      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
        [&>button]:!text-white
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              ⚙️ Dairy Processing
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo ? selectedTopicInfo.subtitle : "Explore core dairy processing techniques and equipment"}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <Factory className="w-3 h-3 shrink-0" /> {TOPIC_GROUPS.length} {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <Activity className="w-3 h-3 shrink-0" /> {lbl.langPill}
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
            {selectedContent.simulation ? (
              <Tabs defaultValue="info" className="w-full h-full flex flex-col overflow-hidden">
                <div className="px-3 sm:px-6 py-3 bg-white border-b border-gray-200 shrink-0 shadow-sm z-10">
                  <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 bg-slate-100 p-1 rounded-lg">
                    <TabsTrigger value="info" className="rounded-md py-1.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-indigo-600 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Info
                    </TabsTrigger>
                    <TabsTrigger value="simulation" className="rounded-md py-1.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-emerald-600 flex items-center gap-1.5">
                      <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 3D Sim
                    </TabsTrigger>
                  </TabsList>
                </div>
                <ScrollArea className="flex-1 w-full overflow-y-auto">
                  <TabsContent value="info" className="m-0 p-3 sm:p-6 max-w-4xl mx-auto w-full pb-10">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 dairy-content">
                      <div dangerouslySetInnerHTML={{ __html: processTablesForMobile(selectedContent.content) }} />
                    </div>
                  </TabsContent>
                  <TabsContent value="simulation" className="m-0 w-full h-[65vh] sm:h-[75vh] p-3 sm:p-6 max-w-6xl mx-auto pb-10">
                    <div className="w-full h-full border border-dashed border-gray-300 rounded-xl overflow-hidden bg-slate-100 shadow-inner relative">
                      <iframe
                        srcDoc={selectedContent.simulation}
                        className="absolute inset-0 w-full h-full border-none"
                        title={`${selectedContent.title} Simulation`}
                      />
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            ) : (
              <ScrollArea className="flex-1 w-full overflow-y-auto">
                <div className="p-3 sm:p-6 max-w-4xl mx-auto w-full pb-10">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 dairy-content">
                    <div dangerouslySetInnerHTML={{ __html: processTablesForMobile(selectedContent.content) }} />
                  </div>
                </div>
              </ScrollArea>
            )}
          </div>

        ) : (

          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
            <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto">
                {TOPIC_GROUPS.map((group: any) => (
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
                      {group.topics.map((topic: any) => (
                        <button
                          key={topic.value}
                          onClick={() => handleSelectTopic(topic.value)}
                          className={`
                            relative flex items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                            text-left shadow-sm hover:shadow-md hover:-translate-y-1
                            ${topic.bgLight} ${topic.borderColor}
                            group w-full bg-white box-border
                          `}
                        >
                          {/* Icon */}
                          <div className={`p-2 sm:p-2.5 rounded-lg shadow-sm mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100`}>
                            <topic.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${topic.color}`} />
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
                            className={`w-4 h-4 shrink-0 ml-1 mt-1.5 transition-transform duration-200 group-hover:translate-x-1 ${topic.color} opacity-50 hidden sm:block`}
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
