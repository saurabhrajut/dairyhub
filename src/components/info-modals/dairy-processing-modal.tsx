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
  Sparkles,
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

const processingConfig: Record<
  string,
  { icon: any; color: string; bgLight: string; borderColor: string }
> = {
  pasteurization: {
    icon: Thermometer,
    color: "from-orange-500 to-red-500",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  standardization: {
    icon: Settings,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  separation: {
    icon: Layers,
    color: "from-cyan-400 to-blue-500",
    bgLight: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  clarification: {
    icon: Filter,
    color: "from-teal-400 to-emerald-500",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-200",
  },
  homogenization: {
    icon: Combine,
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  refrigeration: {
    icon: Snowflake,
    color: "from-sky-400 to-blue-600",
    bgLight: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  sterilization: {
    icon: Flame,
    color: "from-red-500 to-rose-600",
    bgLight: "bg-red-50",
    borderColor: "border-red-200",
  },
  evaporation: {
    icon: CloudFog,
    color: "from-gray-400 to-slate-500",
    bgLight: "bg-gray-50",
    borderColor: "border-gray-200",
  },
  uht: {
    icon: Zap,
    color: "from-orange-400 to-amber-500",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  "spray-drying": {
    icon: Wind,
    color: "from-yellow-400 to-orange-400",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  fermentation: {
    icon: FlaskConical,
    color: "from-green-500 to-emerald-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-200",
  },
  churning: {
    icon: RotateCw,
    color: "from-yellow-300 to-amber-400",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  boiler: {
    icon: Factory,
    color: "from-slate-500 to-gray-700",
    bgLight: "bg-slate-50",
    borderColor: "border-slate-200",
  },
};

// ─── STYLES: Mobile-proof, no overflow ────────────────────────────────────
const CONTENT_STYLES = `
  /* ═══ ROOT ═══ */
  .dairy-content {
    word-break: break-word;
    overflow-wrap: anywhere;
    overflow-x: hidden !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
    font-size: 0.84rem;
    line-height: 1.7;
    color: #374151;
  }
  @media (min-width: 640px) {
    .dairy-content { font-size: 0.95rem; line-height: 1.8; }
  }

  /* Every child constrained */
  .dairy-content * {
    max-width: 100% !important;
    box-sizing: border-box;
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
    overflow-wrap: anywhere;
    word-break: break-word;
    line-height: 1.4;
  }
  @media (min-width: 640px) {
    .dairy-content h3 {
      font-size: 1.15rem;
      padding: 0.6rem 1rem;
      border-left-width: 4px;
      margin-top: 1.8rem;
    }
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
    overflow-wrap: anywhere;
    word-break: break-word;
    line-height: 1.4;
  }
  @media (min-width: 640px) {
    .dairy-content h4 { font-size: 1.02rem; padding: 0.45rem 0.7rem; }
  }

  /* ═══ PARAGRAPHS ═══ */
  .dairy-content p {
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
    margin-bottom: 0.55rem;
    color: #4B5563;
    line-height: 1.7;
  }
  .dairy-content strong { color: #1F2937; font-weight: 600; }
  .dairy-content i, .dairy-content em { color: #7C3AED; font-style: italic; }

  /* ═══ LISTS ═══ */
  .dairy-content ul, .dairy-content ol {
    padding-left: 0.9rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }
  @media (min-width: 640px) {
    .dairy-content ul, .dairy-content ol { padding-left: 1.3rem; }
  }

  .dairy-content li {
    overflow-wrap: anywhere;
    word-break: break-word;
    margin-bottom: 0.35rem;
    padding-left: 0.15rem;
    line-height: 1.6;
  }

  .dairy-content ul > li {
    list-style: none;
    padding-left: 0.9rem;
    position: relative;
  }
  .dairy-content ul > li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366F1, #8B5CF6);
  }

  .dairy-content ol > li { padding-left: 0.25rem; }
  .dairy-content ol > li::marker {
    color: #6366F1;
    font-weight: 700;
    font-size: 0.84rem;
  }

  .dairy-content li > ul, .dairy-content li > ol {
    margin-top: 0.25rem;
    margin-bottom: 0.15rem;
    padding-left: 0.65rem;
  }
  @media (min-width: 640px) {
    .dairy-content li > ul, .dairy-content li > ol { padding-left: 1.1rem; }
  }

  /* ═══ TABLE — MOBILE: CARD LAYOUT ═══ */
  @media (max-width: 639px) {
    .dc-table-responsive {
      width: 100% !important;
      max-width: 100% !important;
      overflow: hidden !important;
      margin: 0.6rem 0;
    }

    .dc-table-responsive table,
    .dc-table-responsive thead,
    .dc-table-responsive tbody,
    .dc-table-responsive tfoot,
    .dc-table-responsive th,
    .dc-table-responsive td,
    .dc-table-responsive tr {
      display: block !important;
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      overflow: hidden !important;
    }

    .dc-table-responsive table {
      border: none !important;
      box-shadow: none !important;
      background: transparent !important;
    }

    /* Hide the header row on mobile */
    .dc-table-responsive thead {
      display: none !important;
    }

    /* Each row = a card */
    .dc-table-responsive tbody > tr {
      margin-bottom: 0.6rem !important;
      border: 1px solid #E5E7EB !important;
      border-left: 3px solid #6366F1 !important;
      border-radius: 0.6rem !important;
      overflow: hidden !important;
      background: #FEFEFE !important;
      box-shadow: 0 1px 3px rgba(99,102,241,0.08) !important;
      padding: 0.15rem 0 !important;
    }
    .dc-table-responsive tbody > tr:nth-child(3n+2) {
      border-left-color: #8B5CF6 !important;
    }
    .dc-table-responsive tbody > tr:nth-child(3n+3) {
      border-left-color: #10B981 !important;
    }

    /* Each cell = label + value stacked */
    .dc-table-responsive td {
      padding: 0.3rem 0.6rem !important;
      border: none !important;
      border-bottom: 1px solid #F3F4F6 !important;
      text-align: left !important;
      font-size: 0.73rem !important;
      color: #4B5563 !important;
      line-height: 1.5 !important;
      background: transparent !important;
    }

    .dc-table-responsive td::before {
      content: attr(data-label);
      display: block;
      font-weight: 700;
      color: #4338CA;
      font-size: 0.58rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1px;
      line-height: 1.3;
    }
    .dc-table-responsive td[data-label=""]::before,
    .dc-table-responsive td:not([data-label])::before {
      display: none;
    }

    .dc-table-responsive td:last-child {
      border-bottom: none !important;
    }
  }

  /* ═══ TABLE — DESKTOP: NORMAL ═══ */
  @media (min-width: 640px) {
    .dc-table-responsive {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin: 0.75rem 0;
      border-radius: 0.6rem;
      border: 1px solid #E5E7EB;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .dc-table-responsive table {
      display: table;
      width: 100%;
      border-collapse: collapse;
      font-size: 0.82rem;
    }

    .dc-table-responsive thead tr {
      background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
    }

    .dc-table-responsive th {
      padding: 0.6rem 0.75rem;
      border: 1px solid #D1D5DB;
      font-weight: 700;
      color: #312E81;
      text-align: left;
      font-size: 0.8rem;
    }

    .dc-table-responsive td {
      padding: 0.5rem 0.75rem;
      border: 1px solid #E5E7EB;
      vertical-align: top;
      color: #4B5563;
      font-size: 0.8rem;
      word-break: break-word;
      overflow-wrap: anywhere;
    }

    .dc-table-responsive tbody tr:nth-child(even) {
      background-color: #F9FAFB;
    }
    .dc-table-responsive tbody tr:hover {
      background-color: #EEF2FF;
      transition: background-color 0.15s;
    }

    /* Hide the ::before labels on desktop */
    .dc-table-responsive td::before {
      display: none !important;
    }
  }

  /* ═══ CODE / PRE ═══ */
  .dairy-content pre, .dairy-content code {
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-all;
    overflow-wrap: anywhere;
    font-size: 0.7rem;
    background: #F3F4F6;
    padding: 0.45rem;
    border-radius: 0.35rem;
    border: 1px solid #E5E7EB;
    display: block;
  }

  /* ═══ IMAGES ═══ */
  .dairy-content img {
    max-width: 100% !important;
    height: auto;
    border-radius: 0.4rem;
    margin: 0.4rem 0;
  }

  /* ═══ LINKS ═══ */
  .dairy-content a {
    word-break: break-all;
    overflow-wrap: anywhere;
    color: #6366F1;
    text-decoration: underline;
  }

  /* ═══ SUB/SUPER ═══ */
  .dairy-content sub, .dairy-content sup {
    font-size: 0.7em;
    line-height: 0;
  }
`;

// ─── Transform tables: add data-label for mobile cards ─────────────────────
function processTablesForMobile(html: string): string {
  const tableRegex = /<table[\s\S]*?<\/table>/gi;

  return html.replace(tableRegex, (tableHtml) => {
    // 1) Extract header texts
    const headers: string[] = [];
    const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/gi;
    let thMatch;
    while ((thMatch = thRegex.exec(tableHtml)) !== null) {
      // Strip inner HTML tags to get plain text
      const plainText = thMatch[1].replace(/<[^>]*>/g, "").trim();
      headers.push(plainText);
    }

    // 2) For each <tr> that has <td> (not header rows), add data-label
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    const processed = tableHtml.replace(trRegex, (fullTr, trInner) => {
      // Skip header rows (rows containing <th>)
      if (/<th[\s>]/i.test(trInner)) return fullTr;

      let colIdx = 0;
      const newInner = trInner.replace(/<td/gi, () => {
        const label = headers[colIdx] || "";
        const escaped = label
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        colIdx++;
        return `<td data-label="${escaped}"`;
      });

      return fullTr.replace(trInner, newInner);
    });

    // 3) Wrap in responsive container
    return `<div class="dc-table-responsive">${processed}</div>`;
  });
}

// ─── Section Component ─────────────────────────────────────────────────────
const Section = ({
  title,
  children,
  config,
}: {
  title: string;
  children: React.ReactNode;
  config?: { icon: any; color: string; bgLight: string; borderColor: string };
}) => (
  <div className="w-full max-w-full overflow-hidden mt-3">
    <style dangerouslySetInnerHTML={{ __html: CONTENT_STYLES }} />

    {/* Title Banner */}
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-3 sm:p-4 border mb-3",
        config?.bgLight || "bg-indigo-50",
        config?.borderColor || "border-indigo-200"
      )}
    >
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/30 blur-sm" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/20 blur-sm" />
      <div className="relative flex items-center gap-2.5">
        {config && (
          <div
            className={cn(
              "p-2 rounded-lg bg-gradient-to-br text-white shadow-md shrink-0",
              config.color
            )}
          >
            <config.icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h2 className="text-sm sm:text-lg font-bold font-headline break-words text-gray-800 leading-tight">
            {title}
          </h2>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 hidden sm:block">
            Dairy Processing Technology
          </p>
        </div>
      </div>
    </div>

    {/* Content Card */}
    <div className="dairy-content w-full max-w-full overflow-hidden bg-white rounded-xl p-3 sm:p-5 border border-gray-100 shadow-sm">
      {children}
    </div>
  </div>
);

// ─── TopicContent ──────────────────────────────────────────────────────────
const TopicContent = ({
  content,
  config,
}: {
  content: any;
  config?: { icon: any; color: string; bgLight: string; borderColor: string };
}) => {
  const [activeTab, setActiveTab] = useState("info");

  if (!content)
    return <p className="text-gray-500 italic text-sm">Content coming soon.</p>;

  const processedHtml = processTablesForMobile(content.content);

  if (content.simulation) {
    return (
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-full overflow-hidden"
      >
        <TabsList className="grid w-full grid-cols-2 mb-3 bg-gray-100/80 p-1 rounded-lg h-auto">
          <TabsTrigger
            value="info"
            className="rounded-md py-2 text-[11px] sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-indigo-600 flex items-center gap-1"
          >
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
            Info
          </TabsTrigger>
          <TabsTrigger
            value="simulation"
            className="rounded-md py-2 text-[11px] sm:text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-emerald-600 flex items-center gap-1"
          >
            <Play className="h-3 w-3 sm:h-4 sm:w-4" />
            3D Sim
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="mt-0 w-full max-w-full overflow-hidden">
          <Section title={content.title} config={config}>
            <div dangerouslySetInnerHTML={{ __html: processedHtml }} />
          </Section>
        </TabsContent>
        <TabsContent
          value="simulation"
          className="h-[50vh] sm:h-[65vh] border border-dashed border-gray-200 rounded-xl overflow-hidden bg-gray-50 mt-0"
        >
          <iframe
            srcDoc={content.simulation}
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Processing Simulation"
          />
        </TabsContent>
      </Tabs>
    );
  }

  return (
    <Section title={content.title} config={config}>
      <div dangerouslySetInnerHTML={{ __html: processedHtml }} />
    </Section>
  );
};

// ─── Main Modal ────────────────────────────────────────────────────────────
export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
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

  const topics = Object.keys(topicMap).map((key) => {
    const topic = topicMap[key as keyof typeof topicMap];
    const config = processingConfig[key] || {
      icon: Cog,
      color: "from-gray-400 to-gray-600",
      bgLight: "bg-gray-50",
      borderColor: "border-gray-200",
    };
    return {
      value: key,
      title: topic.title,
      icon: config.icon,
      color: config.color,
      bgLight: config.bgLight,
      borderColor: config.borderColor,
    };
  });

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current)
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    setActiveTopic(topicValue);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current)
          scrollAreaRef.current.scrollTop = scrollPosition.current;
      }, 0);
    }
  }, [activeTopic]);

  const selectedTopic = activeTopic
    ? topicMap[activeTopic as keyof typeof topicMap]
    : null;
  const selectedConfig = activeTopic ? processingConfig[activeTopic] : null;

  const getDialogDescription = () =>
    selectedTopic
      ? "Detailed process explanation."
      : "Explore core dairy processing techniques and equipment.";

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "flex flex-col p-0 overflow-hidden",
          "w-[100vw] sm:w-[95vw] max-w-4xl lg:max-w-6xl",
          "h-[100dvh] sm:h-auto sm:max-h-[90vh]",
          "rounded-none sm:rounded-2xl",
          "bg-gradient-to-br from-slate-50 via-white to-indigo-50/30",
          "border-0 shadow-2xl"
        )}
      >
        {activeTopic && selectedTopic ? (
          <div className="flex-1 flex flex-col min-h-0 w-full max-w-full overflow-hidden">
            {/* ── Header ── */}
            <DialogHeader className="shrink-0 px-3 py-2.5 sm:px-5 sm:py-3 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleBack}
                  className="shrink-0 hover:bg-gray-100 rounded-lg h-8 w-8 sm:h-9 sm:w-9"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div
                  className={cn(
                    "p-1.5 sm:p-2 rounded-lg bg-gradient-to-br text-white shadow shrink-0",
                    selectedConfig?.color
                  )}
                >
                  {selectedConfig && (
                    <selectedConfig.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <DialogTitle className="text-sm sm:text-base font-bold font-headline truncate text-gray-800">
                    {selectedTopic.title}
                  </DialogTitle>
                  <DialogDescription className="text-[9px] sm:text-xs text-gray-400 truncate">
                    {getDialogDescription()}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {/* ── Content ── */}
            <ScrollArea className="flex-1 w-full max-w-full">
              <div className="w-full max-w-full overflow-hidden px-2 pb-6 sm:px-4 sm:pb-8">
                <TopicContent
                  content={selectedTopic}
                  config={selectedConfig!}
                />
              </div>
            </ScrollArea>
          </div>
        ) : (
          <>
            {/* ── Grid Header ── */}
            <DialogHeader className="px-4 pt-4 pb-2 sm:px-6 sm:pt-6 sm:pb-3 shrink-0 border-b border-gray-100/50">
              <div className="flex flex-col items-center">
                <div className="relative mb-2 sm:mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl blur-lg opacity-30 scale-110" />
                  <div className="relative p-2.5 sm:p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-xl">
                    <Factory className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                  </div>
                </div>
                <DialogTitle className="text-lg sm:text-2xl font-bold text-center font-headline">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                    Dairy Processing
                  </span>
                </DialogTitle>
                <DialogDescription className="text-center text-[11px] sm:text-sm text-gray-400 mt-0.5">
                  {getDialogDescription()}
                </DialogDescription>
              </div>
            </DialogHeader>

            {/* ── Topic Grid ── */}
            <ScrollArea className="flex-1" viewportRef={scrollAreaRef}>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-4">
                {topics.map((topic) => (
                  <button
                    key={topic.value}
                    onClick={() => handleSelectTopic(topic.value)}
                    className={cn(
                      "group relative flex flex-col items-center justify-center",
                      "p-2 sm:p-3 bg-white hover:shadow-lg rounded-xl sm:rounded-2xl",
                      "border border-gray-100 hover:border-transparent",
                      "text-center aspect-square",
                      "transition-all duration-300 transform hover:scale-[1.03]",
                      "active:scale-95",
                      "hover:ring-2 hover:ring-offset-1 hover:ring-indigo-200"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
                        topic.bgLight
                      )}
                    />
                    <div className="relative z-10">
                      <div
                        className={cn(
                          "p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br text-white",
                          "mb-1.5 sm:mb-2 shadow-sm",
                          "transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md",
                          topic.color
                        )}
                      >
                        <topic.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                    <span className="relative z-10 font-bold text-[9px] sm:text-[11px] font-headline text-slate-600 group-hover:text-slate-800 transition-colors leading-tight line-clamp-2 px-0.5">
                      {topic.title}
                    </span>
                    <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
                  </button>
                ))}
              </div>
              <div className="h-3 sm:h-4" />
            </ScrollArea>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
