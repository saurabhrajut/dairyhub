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
import { useLanguage } from "@/context/language-context";
import { microbiologyContent } from "@/lib/content/microbiology-content";
import { microbiologyTestMethodsContent } from "@/lib/content/microbiology-test-methods-content";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  TestTube,
  Bug,
  ShieldOff,
  FlaskConical,
  Proportions,
  Dna,
  Thermometer,
  Microscope,
  Biohazard,
  ScanSearch,
  Snowflake,
  Activity,
  Waves,
  ShieldAlert,
  BookOpen,
  ChevronRight,
  Beaker,
  LayoutGrid,
} from "lucide-react";


// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    principle: "Siddhant (Principle)",
    procedure: "Prakriya (Procedure)",
    calcInterp: "Ganana / Vyakhya (Calculation & Interpretation)",
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    labTests: "Lab Tests",
    langPill: "Scientific Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    principle: "Principle",
    procedure: "Procedure",
    calcInterp: "Calculation & Interpretation",
    backToTopics: "Back to Topics",
    topics: "Topics",
    labTests: "Lab Tests",
    langPill: "Scientific English Content",
    topicsCount: (n: number) => `${n} topics`,
  },
};


const wrapTablesInScrollDiv = (container: HTMLElement) => {
  container.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-scroll-wrap")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll-wrap overflow-x-auto w-full my-2 rounded border border-gray-100";
    table.parentNode?.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    table.style.borderCollapse = "collapse";
    table.style.fontSize = "11px";
    table.style.width = "max-content";
    table.style.minWidth = "100%";
    table.querySelectorAll("td").forEach((td) => {
      (td as HTMLElement).style.border = "1px solid #e5e7eb";
      (td as HTMLElement).style.padding = "5px 8px";
      (td as HTMLElement).style.verticalAlign = "top";
      (td as HTMLElement).style.whiteSpace = "normal";
      (td as HTMLElement).style.minWidth = "90px";
    });
    table.querySelectorAll("th").forEach((th) => {
      (th as HTMLElement).style.border = "1px solid #e5e7eb";
      (th as HTMLElement).style.padding = "5px 8px";
      (th as HTMLElement).style.backgroundColor = "#f9fafb";
      (th as HTMLElement).style.fontWeight = "600";
      (th as HTMLElement).style.whiteSpace = "nowrap";
    });
  });
};

// ─────────────────────────────────────────────
// ProcedureHtml: renders dangerousHTML and wraps
// every <table> in a scrollable div via useEffect
// ─────────────────────────────────────────────
const PROSE_CLS = `text-xs leading-relaxed text-gray-700
  [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mt-3 [&_h4]:mb-1 [&_h4]:text-xs
  [&_h5]:font-medium [&_h5]:text-gray-700 [&_h5]:mt-2 [&_h5]:text-[11px]
  [&_p]:mb-2 [&_p]:break-words
  [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-0.5
  [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:space-y-0.5
  [&_li]:break-words
  [&_strong]:font-semibold [&_em]:italic
  [&_code]:bg-slate-100 [&_code]:px-1 [&_code]:rounded [&_code]:text-[10px] [&_code]:font-mono
`;

const ProcedureHtml = ({
  html,
  borderColor = "border-gray-200",
  isCalc = false,
}: {
  html: string;
  borderColor?: string;
  isCalc?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current) wrapTablesInScrollDiv(ref.current); }, [html]);

  if (isCalc) {
    return (
      <div ref={ref} className={`p-2.5 sm:p-4 ${PROSE_CLS}`}
        dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
  return (
    <div ref={ref} className={`pl-3 border-l-4 ${borderColor} ${PROSE_CLS}`}
      dangerouslySetInnerHTML={{ __html: html }} />
  );
};

// ─────────────────────────────────────────────
// Helper: renders a single test inside the accordion
// ─────────────────────────────────────────────
const TestProcedure = ({ test, lang }: { test: any; lang: "hi" | "en" }) => {
  const lbl = LABELS[lang];
  return (
    <AccordionItem
      value={test.id}
      className="border-b border-gray-200 last:border-0"
    >
      <AccordionTrigger className="text-left font-semibold text-sm sm:text-base hover:no-underline py-3 px-3 hover:bg-indigo-50/60 rounded-md transition-colors text-gray-800 gap-2 min-w-0">
        <span className="flex items-center gap-2 min-w-0">
          <FlaskConical className="w-4 h-4 shrink-0 text-indigo-400" />
          <span className="truncate sm:whitespace-normal">{test.title}</span>
        </span>
      </AccordionTrigger>

      <AccordionContent className="px-0 pb-4 sm:pb-6">
        <div className="text-gray-700 space-y-4 px-2 sm:px-3">

          {/* Principle */}
          <div>
            <h4 className="flex items-center gap-2 font-bold text-indigo-700 mb-2 text-xs uppercase tracking-wide">
              <BookOpen className="w-3.5 h-3.5 shrink-0" /> {lbl.principle}
            </h4>
            <p className="bg-indigo-50 p-2.5 sm:p-4 rounded-xl border border-indigo-100 leading-relaxed text-xs sm:text-sm break-words">
              {test.principle}
            </p>
          </div>

          {/* Procedure */}
          <div>
            <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-2 text-xs uppercase tracking-wide">
              <Activity className="w-3.5 h-3.5 shrink-0" /> {lbl.procedure}
            </h4>
            <ProcedureHtml html={test.procedure} borderColor="border-emerald-200" />
          </div>

          {/* Calculation / Interpretation */}
          {test.calculation && (
            <div>
              <h4 className="flex items-center gap-2 font-bold text-amber-700 mb-2 text-xs uppercase tracking-wide">
                <Waves className="w-3.5 h-3.5 shrink-0" /> {lbl.calcInterp}
              </h4>
              <div className="bg-slate-50 border border-slate-200 rounded-xl">
                <ProcedureHtml html={test.calculation} isCalc />
              </div>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};


const SectionBody = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current) wrapTablesInScrollDiv(ref.current); }, [children]);
  return (
    <div ref={ref} className="p-2.5 sm:p-5 md:p-7 text-xs sm:text-sm text-gray-700 leading-relaxed
      [&_h4]:font-bold [&_h4]:text-gray-800 [&_h4]:mt-4 [&_h4]:mb-1.5 [&_h4]:text-xs sm:[&_h4]:text-base
      [&_h5]:font-semibold [&_h5]:text-gray-700 [&_h5]:mt-2.5 [&_h5]:text-[11px]
      [&_p]:leading-relaxed [&_p]:mb-2 [&_p]:break-words
      [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1
      [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:space-y-1.5
      [&_li]:leading-relaxed [&_li]:break-words
      [&_strong]:text-gray-900 [&_em]:italic
      [&_code]:bg-slate-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[10px] [&_code]:font-mono [&_code]:break-all
      [&_sub]:text-[10px] [&_sup]:text-[10px]
    ">
      {children}
    </div>
  );
};


// ─────────────────────────────────────────────
// Helper: card wrapper for every topic view
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
    violet:  "from-violet-600 to-violet-500",
    sky:     "from-sky-600 to-sky-500",
  };
  const gradient = headerGradients[accentColor] ?? headerGradients.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm mb-4 sm:mb-5">
      <div className={`bg-gradient-to-r ${gradient} p-2.5 sm:p-5 flex items-center gap-2 sm:gap-3`}>
        {Icon && (
          <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl shrink-0">
            <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
          </div>
        )}
        <h2 className="text-xs sm:text-xl font-bold text-white font-headline leading-tight">{title}</h2>
      </div>
      <SectionBody>{children}</SectionBody>
    </div>
  );
};




// ─────────────────────────────────────────────
// Topic → Component map  (ALL sections)
// ─────────────────────────────────────────────
const topicComponents: Record<
  string,
  React.FC<{ content: any; accent?: string; lang?: "hi" | "en" }>
> = {
  intro: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "intro");
    if (!s) return null;
    return <Section title={s.title} icon={Microscope} accentColor={accent ?? "blue"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  thermophilic_thermoduric: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "thermophilic_thermoduric");
    if (!s) return null;
    return <Section title={s.title} icon={Thermometer} accentColor={accent ?? "orange"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  psychrotrophic: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "psychrotrophic");
    if (!s) return null;
    return <Section title={s.title} icon={Snowflake} accentColor={accent ?? "cyan"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  lactic_acid_bacteria: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "lactic_acid_bacteria");
    if (!s) return null;
    return <Section title={s.title} icon={Dna} accentColor={accent ?? "emerald"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  spoilage_pathogenic: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "spoilage_pathogenic");
    if (!s) return null;
    return <Section title={s.title} icon={ShieldOff} accentColor={accent ?? "red"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  enterobacteriaceae: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "enterobacteriaceae");
    if (!s) return null;
    return <Section title={s.title} icon={Biohazard} accentColor={accent ?? "purple"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  cronobacter: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "cronobacter");
    if (!s) return null;
    return <Section title={s.title} icon={Bug} accentColor={accent ?? "rose"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  sources_of_contamination: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "sources_of_contamination");
    if (!s) return null;
    return <Section title={s.title} icon={ScanSearch} accentColor={accent ?? "amber"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  hygienic_measures: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "hygienic_measures");
    if (!s) return null;
    return <Section title={s.title} icon={Proportions} accentColor={accent ?? "teal"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  coliforms_and_indicators: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "coliforms_and_indicators");
    if (!s) return null;
    return <Section title={s.title} icon={ShieldAlert} accentColor={accent ?? "violet"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  bacteriophages: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "bacteriophages");
    if (!s) return null;
    return <Section title={s.title} icon={Activity} accentColor={accent ?? "sky"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  milk_quality_tests_overview: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "milk_quality_tests_overview");
    if (!s) return null;
    return <Section title={s.title} icon={Microscope} accentColor={accent ?? "indigo"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },
  test_methods: ({ content, accent, lang = "hi" }) => {
    if (!content) return null;
    return (
      <Section title={content.title} icon={TestTube} accentColor={accent ?? "indigo"}>
        <p className="mb-5 text-gray-600 leading-relaxed text-sm break-words">{content.intro}</p>
        <Accordion type="single" collapsible className="w-full border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
          {content.tests.map((test: any, i: number) => (
            <TestProcedure key={i} test={test} lang={lang} />
          ))}
        </Accordion>
      </Section>
    );
  },
};


// ─────────────────────────────────────────────
// Topic group config — bilingual
// ─────────────────────────────────────────────
const TOPIC_GROUPS_CONFIG = {
  hi: [
    {
      groupLabel: "Microbiology Concepts",
      groupIcon: Microscope,
      topics: [
        { value: "intro", title: "Introduction & Basics", subtitle: "Milk substrate, growth phases, natural antimicrobials", icon: Microscope, accent: "blue", badge: "Foundation", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400", dotClass: "bg-blue-400" },
        { value: "thermophilic_thermoduric", title: "Thermophilic & Thermoduric", subtitle: "Heat-loving & heat-resistant bacteria", icon: Thermometer, accent: "orange", badge: "Heat", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400", dotClass: "bg-orange-400" },
        { value: "psychrotrophic", title: "Psychrotrophic Bacteria", subtitle: "Cold-tolerant spoilage organisms", icon: Snowflake, accent: "cyan", badge: "Cold", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400", dotClass: "bg-cyan-400" },
        { value: "lactic_acid_bacteria", title: "Lactic Acid Bacteria", subtitle: "Fermentation, flavor, preservation", icon: Dna, accent: "emerald", badge: "Fermentation", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400", dotClass: "bg-emerald-400" },
        { value: "spoilage_pathogenic", title: "Spoilage & Pathogenic Organisms", subtitle: "Listeria, Salmonella, E. coli aur aur bhi", icon: ShieldOff, accent: "red", badge: "Safety", badgeVariant: "destructive" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400", dotClass: "bg-red-400" },
        { value: "enterobacteriaceae", title: "Enterobacteriaceae", subtitle: "Indicator organisms & food safety", icon: Biohazard, accent: "purple", badge: "Indicator", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400", dotClass: "bg-purple-400" },
        { value: "cronobacter", title: "Cronobacter", subtitle: "Infant formula pathogen", icon: Bug, accent: "rose", badge: "High Risk", badgeVariant: "destructive" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400", dotClass: "bg-rose-400" },
        { value: "coliforms_and_indicators", title: "Coliforms & Indicator Organisms", subtitle: "MPN, IMViC, fecal indicators", icon: ShieldAlert, accent: "violet", badge: "Hygiene", badgeVariant: "secondary" as const, colorClass: "text-violet-600", bgClass: "bg-violet-50 hover:bg-violet-100", borderClass: "border-violet-200 hover:border-violet-400", dotClass: "bg-violet-400" },
        { value: "bacteriophages", title: "Dairy mein Bacteriophages", subtitle: "Phage biology, starter culture failure", icon: Activity, accent: "sky", badge: "Naya", badgeVariant: "secondary" as const, colorClass: "text-sky-600", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400", dotClass: "bg-sky-400" },
      ],
    },
    {
      groupLabel: "Contamination & Control",
      groupIcon: ScanSearch,
      topics: [
        { value: "sources_of_contamination", title: "Contamination ke Sources", subtitle: "Intramammary, equipment, environment", icon: ScanSearch, accent: "amber", badge: "Control", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400", dotClass: "bg-amber-400" },
        { value: "hygienic_measures", title: "Hygienic Measures & Prevention", subtitle: "GMP, CIP, cold chain, pasteurization", icon: Proportions, accent: "teal", badge: "Prevention", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400", dotClass: "bg-teal-400" },
        { value: "milk_quality_tests_overview", title: "Milk Quality Tests: Overview", subtitle: "MBRT, resazurin, ATP, MALDI-TOF", icon: Microscope, accent: "indigo", badge: "Rapid Methods", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400", dotClass: "bg-indigo-400" },
      ],
    },
    {
      groupLabel: "Laboratory Test Methods",
      groupIcon: TestTube,
      topics: [
        { value: "test_methods", title: "Standard Test Methods", subtitle: "SPC, Coliform, DMSCC, Delvotest, Listeria, Salmonella aur aur bhi", icon: TestTube, accent: "indigo", badge: "Lab Manual", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400", dotClass: "bg-indigo-400", wide: true },
      ],
    },
  ],
  en: [
    {
      groupLabel: "Microbiology Concepts",
      groupIcon: Microscope,
      topics: [
        { value: "intro", title: "Introduction & Basics", subtitle: "Milk as substrate, growth phases, natural antimicrobials", icon: Microscope, accent: "blue", badge: "Foundation", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400", dotClass: "bg-blue-400" },
        { value: "thermophilic_thermoduric", title: "Thermophilic & Thermoduric", subtitle: "Heat-loving & heat-resistant bacteria", icon: Thermometer, accent: "orange", badge: "Heat", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400", dotClass: "bg-orange-400" },
        { value: "psychrotrophic", title: "Psychrotrophic Bacteria", subtitle: "Cold-tolerant spoilage organisms", icon: Snowflake, accent: "cyan", badge: "Cold", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400", dotClass: "bg-cyan-400" },
        { value: "lactic_acid_bacteria", title: "Lactic Acid Bacteria", subtitle: "Fermentation, flavor, preservation", icon: Dna, accent: "emerald", badge: "Fermentation", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400", dotClass: "bg-emerald-400" },
        { value: "spoilage_pathogenic", title: "Spoilage & Pathogenic Organisms", subtitle: "Listeria, Salmonella, E. coli & more", icon: ShieldOff, accent: "red", badge: "Safety", badgeVariant: "destructive" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400", dotClass: "bg-red-400" },
        { value: "enterobacteriaceae", title: "Enterobacteriaceae", subtitle: "Indicator organisms & food safety", icon: Biohazard, accent: "purple", badge: "Indicator", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400", dotClass: "bg-purple-400" },
        { value: "cronobacter", title: "Cronobacter", subtitle: "Infant formula pathogen", icon: Bug, accent: "rose", badge: "High Risk", badgeVariant: "destructive" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400", dotClass: "bg-rose-400" },
        { value: "coliforms_and_indicators", title: "Coliforms & Indicator Organisms", subtitle: "MPN, IMViC, fecal indicators", icon: ShieldAlert, accent: "violet", badge: "Hygiene", badgeVariant: "secondary" as const, colorClass: "text-violet-600", bgClass: "bg-violet-50 hover:bg-violet-100", borderClass: "border-violet-200 hover:border-violet-400", dotClass: "bg-violet-400" },
        { value: "bacteriophages", title: "Bacteriophages in Dairy", subtitle: "Phage biology, starter culture failure", icon: Activity, accent: "sky", badge: "New", badgeVariant: "secondary" as const, colorClass: "text-sky-600", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400", dotClass: "bg-sky-400" },
      ],
    },
    {
      groupLabel: "Contamination & Control",
      groupIcon: ScanSearch,
      topics: [
        { value: "sources_of_contamination", title: "Sources of Contamination", subtitle: "Intramammary, equipment, environment", icon: ScanSearch, accent: "amber", badge: "Control", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400", dotClass: "bg-amber-400" },
        { value: "hygienic_measures", title: "Hygienic Measures & Prevention", subtitle: "GMP, CIP, cold chain, pasteurization", icon: Proportions, accent: "teal", badge: "Prevention", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400", dotClass: "bg-teal-400" },
        { value: "milk_quality_tests_overview", title: "Milk Quality Tests: Overview", subtitle: "MBRT, Resazurin, ATP, MALDI-TOF", icon: Microscope, accent: "indigo", badge: "Rapid Methods", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400", dotClass: "bg-indigo-400" },
      ],
    },
    {
      groupLabel: "Laboratory Test Methods",
      groupIcon: TestTube,
      topics: [
        { value: "test_methods", title: "Standard Test Methods", subtitle: "SPC, Coliform, DMSCC, Delvotest, Listeria, Salmonella & more", icon: TestTube, accent: "indigo", badge: "Lab Manual", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400", dotClass: "bg-indigo-400", wide: true },
      ],
    },
  ],
};


// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function MicrobiologyTestingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const mainContent = t(microbiologyContent);
  const testMethodsContent = t(microbiologyTestMethodsContent);

  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const TOPIC_GROUPS = TOPIC_GROUPS_CONFIG[lang];
  const ALL_TOPICS = TOPIC_GROUPS.flatMap((g) => g.topics);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  if (!mainContent || !testMethodsContent) return null;

  const selectedTopicInfo = ALL_TOPICS.find((t) => t.value === activeTopic);
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic as keyof typeof topicComponents]
    : null;

  const handleSelectTopic = (value: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(value);
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

  const totalTopics = ALL_TOPICS.length;
  const totalTests = testMethodsContent?.tests?.length ?? 0;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* 
        KEY FIX: overflow-hidden on DialogContent prevents any child from bleeding out.
        w-[95vw] ensures it never exceeds screen width.
      */}
      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl
      ">

        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🔬 {mainContent.title}
            </DialogTitle>
            <DialogDescription className={`text-center text-slate-300 text-[10px] sm:text-sm line-clamp-1 px-2 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo
                ? selectedTopicInfo.subtitle
                : mainContent.description}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <Beaker className="w-3 h-3 shrink-0" /> {totalTests} {lbl.labTests}
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-500/30 text-emerald-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-500/40">
                <Microscope className="w-3 h-3 shrink-0" /> {lbl.langPill}
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
                <Badge variant="secondary" className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex">
                  {selectedTopicInfo.badge}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {selectedTopicInfo && ActiveComponent ? (

          /* ── Topic Detail View ─────────────────── */
          /* Plain div with overflow-y-auto, overflow-x-auto for table scroll */
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto">
            <div className="p-2 sm:p-4 md:p-6">
              <ActiveComponent
                content={activeTopic === "test_methods" ? testMethodsContent : mainContent}
                accent={selectedTopicInfo.accent}
                lang={lang}
              />
            </div>
          </div>

        ) : (

          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 min-h-0 overflow-hidden">
            <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-7">
                {TOPIC_GROUPS.map((group) => (
                  <div key={group.groupLabel}>

                    {/* Group header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <group.groupIcon className="w-3.5 h-3.5 text-gray-400" />
                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                      <span className="text-[10px] text-gray-400 tabular-nums bg-gray-100 px-1.5 py-0.5 rounded-full">
                        {lbl.topicsCount(group.topics.length)}
                      </span>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                      {group.topics.map((topic) => (
                        <button
                          key={topic.value}
                          onClick={() => handleSelectTopic(topic.value)}
                          className={`
                            relative flex items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                            text-left shadow-sm hover:shadow-md hover:-translate-y-0.5
                            ${topic.bgClass} ${topic.borderClass}
                            group w-full
                            ${(topic as any).wide ? "sm:col-span-2 lg:col-span-3" : ""}
                          `}
                        >
                          {/* Icon */}
                          <div className="p-2 rounded-lg bg-white shadow-sm mr-2.5 sm:mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110">
                            <topic.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${topic.colorClass}`} />
                          </div>

                          {/* Text — min-w-0 + overflow-hidden prevents text overflow */}
                          <div className="flex-1 min-w-0 overflow-hidden">
                            <div className="flex items-start gap-1.5 flex-wrap mb-0.5">
                              <span className="font-bold text-gray-800 text-xs sm:text-sm leading-tight break-words">
                                {topic.title}
                              </span>
                              <Badge
                                variant={topic.badgeVariant}
                                className="text-[9px] px-1 py-0 shrink-0 mt-0.5 hidden xs:inline-flex"
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
                            className={`w-3.5 h-3.5 shrink-0 ml-1 mt-0.5 transition-transform duration-200 group-hover:translate-x-1 ${topic.colorClass} opacity-60`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="h-4" />
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
