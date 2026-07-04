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
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { useLanguage } from "@/context/language-context";
import { cipProcessContent } from "@/lib/content/cip-process-content";
import {
  ArrowLeft,
  BookOpen,
  ChevronsRight,
  Recycle,
  Settings,
  TestTube,
  Wind,
  FlaskConical,
  Thermometer,
  Layers,
  Droplets,
  Leaf,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  LayoutGrid,
  Droplet,
  Beaker,
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Modules",
    langPill: "CIP Process Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Modules",
    langPill: "CIP Process English Content",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─────────────────────────────────────────────
// Table Scroll & Prose Wrapper
// ─────────────────────────────────────────────
const wrapTablesInScrollDiv = (container: HTMLElement) => {
  container.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-scroll-wrap")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll-wrap overflow-x-auto w-full my-4 rounded-xl border border-gray-200 shadow-sm";
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
};

const SectionBody = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current) wrapTablesInScrollDiv(ref.current); }, [children]);
  return (
    <div ref={ref} className="p-4 sm:p-6 md:p-8 text-sm sm:text-base text-gray-700 leading-relaxed
      [&_h4]:font-bold [&_h4]:text-indigo-900 [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-sm sm:[&_h4]:text-lg [&_h4]:border-b [&_h4]:border-indigo-100 [&_h4]:pb-1
      [&_h5]:font-semibold [&_h5]:text-gray-800 [&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:text-xs sm:[&_h5]:text-sm
      [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:break-words
      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4
      [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:mb-4
      [&_li]:leading-relaxed [&_li]:break-words [&_li]:text-gray-600
      [&_strong]:text-gray-900 [&_em]:italic
      [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[11px] sm:[&_code]:text-[13px] [&_code]:font-mono [&_code]:break-all
      [&_sub]:text-[10px] [&_sup]:text-[10px]
      w-full max-w-full overflow-hidden box-border
    ">
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────
// Section Wrapper for Details
// ─────────────────────────────────────────────
const Section = ({
  title,
  children,
  icon: Icon,
  accentColor = "blue",
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  accentColor?: string;
}) => {
  const headerGradients: Record<string, string> = {
    blue:    "from-blue-600 to-blue-500",
    orange:  "from-orange-600 to-orange-500",
    cyan:    "from-cyan-600 to-cyan-500",
    emerald: "from-emerald-600 to-emerald-500",
    red:     "from-red-600 to-red-500",
    purple:  "from-purple-600 to-purple-500",
    rose:    "from-rose-600 to-rose-500",
    amber:   "from-amber-600 to-amber-500",
    teal:    "from-teal-600 to-teal-500",
    indigo:  "from-indigo-600 to-indigo-500",
    slate:   "from-slate-600 to-slate-500",
    green:   "from-green-600 to-green-500",
    sky:     "from-sky-600 to-sky-500",
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
      <SectionBody>{children}</SectionBody>
    </div>
  );
};

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-5 mb-4 w-full max-w-full overflow-hidden box-border">
    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-3 font-headline flex items-start gap-2">
      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block shrink-0 mt-1.5"></span>
      <span className="flex-1 break-words">{children}</span>
    </h3>
  </div>
);

// Collapsible card for CIP cycle steps
const CollapsibleStep = ({ step, index, total }: { step: any; index: number; total: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full min-w-0">
      <div className={`border rounded-xl shadow-sm transition-all w-full min-w-0 max-w-full ${step.colorClass || "bg-white border-gray-200"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-3 sm:p-4 text-left flex items-center gap-3 group"
        >
          <span className="bg-emerald-100 text-emerald-700 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border border-emerald-200 shrink-0">
            {index + 1}
          </span>
          <span className="font-bold text-sm sm:text-base text-gray-800 flex-1 group-hover:text-emerald-700 transition-colors break-words w-full min-w-0">
            {step.title}
          </span>
          {open ? (
            <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
          )}
        </button>
        {open && (
          <div
            className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-gray-700 border-t border-black/5 pt-3 w-full max-w-full strict-html-wrap prose max-w-none"
            dangerouslySetInnerHTML={{ __html: step.details }}
          />
        )}
      </div>
      {index < total - 1 && (
        <div className="flex justify-center my-1">
          <div className="h-4 sm:h-5 w-0.5 bg-gray-200" />
        </div>
      )}
    </div>
  );
};

const RawHTML = ({ html }: { html: string }) => (
  <div className="w-full max-w-full overflow-hidden break-words strict-html-wrap" dangerouslySetInnerHTML={{ __html: html }} />
);

// ─────────────────────────────────────────────
// Topic Content Renderers
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string }>> = {
  intro: ({ content, accent }) => (
    <Section title={content.intro.title} icon={BookOpen} accentColor={accent}>
      <RawHTML html={content.intro.htmlContent} />
    </Section>
  ),
  cip_cycle: ({ content, accent }) => (
    <Section title={content.cip_cycle.title} icon={Recycle} accentColor={accent}>
      <p className="mb-5 text-gray-600 strict-html-wrap">{content.cip_cycle.intro}</p>
      
      {/* Structural visual aid for learning the cycle */}
      
      
      <div className="space-y-1 mt-6 w-full min-w-0 max-w-full">
        {content.cip_cycle.steps.map((step: any, i: number) => (
          <CollapsibleStep key={i} step={step} index={i} total={content.cip_cycle.steps.length} />
        ))}
      </div>
    </Section>
  ),
  chemicals: ({ content, accent }) => (
    <Section title={content.chemicals.title} icon={FlaskConical} accentColor={accent}>
      <p className="mb-4 text-gray-600 strict-html-wrap">{content.chemicals.intro}</p>
      <div className="grid gap-4 w-full min-w-0 max-w-full">
        {content.chemicals.types.map((type: any, i: number) => (
          <div key={i} className="bg-purple-50/50 p-4 sm:p-5 rounded-xl border border-purple-100 w-full min-w-0 max-w-full">
            <h3 className="text-sm sm:text-base font-bold mb-2 text-purple-900 flex items-center gap-2 w-full min-w-0">
              <FlaskConical className="w-4 h-4 shrink-0" /><span className="flex-1 strict-html-wrap">{type.title}</span>
            </h3>
            <div className="text-purple-800/90 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: type.details }} />
          </div>
        ))}
      </div>
    </Section>
  ),
  advantages: ({ content, accent }) => (
    <Section title={content.advantages.title} icon={ChevronsRight} accentColor={accent}>
      <div className="bg-teal-50/50 p-4 sm:p-5 rounded-xl border border-teal-100 w-full min-w-0 max-w-full">
        <ul className="grid gap-3 w-full min-w-0">
          {content.advantages.list.map((adv: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-teal-900 text-sm w-full min-w-0">
              <ChevronsRight className="w-4 h-4 shrink-0 mt-0.5 text-teal-600" /><span className="flex-1 strict-html-wrap">{adv}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  ),
  cleaning_procedures: ({ content, accent }) => (
    <Section title={content.cleaning_procedures.title} icon={Settings} accentColor={accent}>
      {content.cleaning_procedures.sections.map((sec: any, i: number) => (
        <div key={i} className="mb-6 last:mb-0 w-full min-w-0 max-w-full">
          <SubHeading>{sec.title}</SubHeading>
          <div className="text-gray-700 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: sec.content }} />
        </div>
      ))}
    </Section>
  ),
  teepol_detergent: ({ content, accent }) => (
    <Section title={content.teepol_detergent.title} icon={Wind} accentColor={accent}>
      <RawHTML html={content.teepol_detergent.htmlContent} />
    </Section>
  ),
  sip: ({ content, accent }) => (
    <Section title={content.sip.title} icon={Thermometer} accentColor={accent}>
      <p className="mb-4 text-gray-600 strict-html-wrap">{content.sip.intro}</p>
      <div className="bg-red-50/50 p-4 sm:p-5 rounded-xl border border-red-100 w-full min-w-0 max-w-full">
        <div className="text-red-900 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: content.sip.process }} />
      </div>
    </Section>
  ),
  biofilm: ({ content, accent }) => (
    <Section title={content.biofilm.title} icon={Layers} accentColor={accent}>
      <p className="mb-4 text-gray-600 strict-html-wrap">{content.biofilm.intro}</p>
      <div className="bg-rose-50/50 p-4 sm:p-5 rounded-xl border border-rose-100 w-full min-w-0 max-w-full">
        <div className="text-rose-900 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: content.biofilm.htmlContent }} />
      </div>
    </Section>
  ),
  water_quality: ({ content, accent }) => (
    <Section title={content.water_quality.title} icon={Droplets} accentColor={accent}>
      <p className="mb-4 text-gray-600 strict-html-wrap">{content.water_quality.intro}</p>
      <div className="bg-sky-50/50 p-4 sm:p-5 rounded-xl border border-sky-100 w-full min-w-0 max-w-full">
        <div className="text-sky-900 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: content.water_quality.htmlContent }} />
      </div>
    </Section>
  ),
  environmental_compliance: ({ content, accent }) => (
    <Section title={content.environmental_compliance.title} icon={Leaf} accentColor={accent}>
      <p className="mb-4 text-gray-600 strict-html-wrap">{content.environmental_compliance.intro}</p>
      <div className="bg-green-50/50 p-4 sm:p-5 rounded-xl border border-green-100 w-full min-w-0 max-w-full">
        <div className="text-green-900 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: content.environmental_compliance.htmlContent }} />
      </div>
    </Section>
  ),
  haccp_cip: ({ content, accent }) => (
    <Section title={content.haccp_cip.title} icon={ShieldCheck} accentColor={accent}>
      <p className="mb-4 text-gray-600 strict-html-wrap">{content.haccp_cip.intro}</p>
      <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 w-full min-w-0 max-w-full">
        <div className="text-slate-800 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: content.haccp_cip.htmlContent }} />
      </div>
    </Section>
  ),
  solution_strength: ({ content, accent }) => (
    <Section title={content.solution_strength.title} icon={TestTube} accentColor={accent}>
      <p className="mb-4 text-gray-600 strict-html-wrap">{content.solution_strength.intro}</p>
      <div className="mt-4 p-4 sm:p-5 bg-indigo-50/50 border border-indigo-100 rounded-xl w-full min-w-0 max-w-full">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-sm sm:text-base w-full min-w-0">
          <TestTube className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /><span className="flex-1 strict-html-wrap">{content.solution_strength.alkalinity_test.title}</span>
        </h4>
        <div className="text-indigo-900/90 strict-html-wrap text-sm" dangerouslySetInnerHTML={{ __html: content.solution_strength.alkalinity_test.content }} />
      </div>
    </Section>
  ),
};

// ─────────────────────────────────────────────
// Topic Configuration
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "मुख्य विषय (Core Topics)" : "Core Topics",
      groupIcon: Droplets,
      topics: [
        { value: "intro", title: c.intro.title, subtitle: "Cleaning basics & definitions", icon: BookOpen, accent: "blue", badge: "Foundation", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "cip_cycle", title: c.cip_cycle.title, subtitle: "Step-by-step cleaning process", icon: Recycle, accent: "emerald", badge: "Process", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
        { value: "chemicals", title: c.chemicals.title, subtitle: "Alkalis, acids & sanitizers", icon: FlaskConical, accent: "purple", badge: "Chemistry", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
        { value: "cleaning_procedures", title: c.cleaning_procedures.title, subtitle: "Tanks, pasteurizers & silos", icon: Settings, accent: "orange", badge: "Operations", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "teepol_detergent", title: c.teepol_detergent.title, subtitle: "Detergent properties & use", icon: Wind, accent: "cyan", badge: "Materials", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "उन्नत विज्ञान (Advanced Science)" : "Advanced Science",
      groupIcon: Layers,
      topics: [
        { value: "sip", title: c.sip.title, subtitle: "Sterilization-In-Place methods", icon: Thermometer, accent: "red", badge: "Sterile", badgeVariant: "destructive" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
        { value: "biofilm", title: c.biofilm.title, subtitle: "Bacterial resistance & removal", icon: Layers, accent: "rose", badge: "Hygiene", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
        { value: "water_quality", title: c.water_quality.title, subtitle: "Hardness & purification", icon: Droplets, accent: "sky", badge: "Crucial", badgeVariant: "secondary" as const, colorClass: "text-sky-600", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400" },
        { value: "advantages", title: c.advantages.title, subtitle: "Benefits of automated cleaning", icon: ChevronsRight, accent: "teal", badge: "Benefits", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "परीक्षण और अनुपालन (Testing & Compliance)" : "Testing & Compliance",
      groupIcon: ShieldCheck,
      topics: [
        { value: "environmental_compliance", title: c.environmental_compliance.title, subtitle: "Waste management & eco-friendly", icon: Leaf, accent: "green", badge: "Eco", badgeVariant: "secondary" as const, colorClass: "text-green-600", bgClass: "bg-green-50 hover:bg-green-100", borderClass: "border-green-200 hover:border-green-400" },
        { value: "haccp_cip", title: c.haccp_cip.title, subtitle: "Food safety & critical points", icon: ShieldCheck, accent: "slate", badge: "Safety", badgeVariant: "secondary" as const, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400" },
        { value: "solution_strength", title: c.solution_strength.title, subtitle: "Titration & alkalinity tests", icon: TestTube, accent: "indigo", badge: "Lab", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
      ],
    },
  ];
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function CipProcessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(cipProcessContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  if (!content) return null;

  const TOPIC_GROUPS = getTopicGroups(content, lang);
  const ALL_TOPICS = TOPIC_GROUPS.flatMap((g) => g.topics);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const selectedTopicInfo = ALL_TOPICS.find((tp) => tp.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic] : null;

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
        .strict-html-wrap table {
          display: block !important;
          overflow-x: auto !important;
          width: 100% !important;
        }
      `}} />

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
              🫧 {content.main_title}
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
        {selectedTopicInfo && ActiveComponent ? (

          /* ── Topic Detail View ─────────────────── */
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50 strict-html-wrap">
            <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full">
              <ActiveComponent content={content} accent={selectedTopicInfo.accent} />
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
                            ${(topic as any).wide ? "sm:col-span-2 lg:col-span-3" : ""}
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
  );
}
