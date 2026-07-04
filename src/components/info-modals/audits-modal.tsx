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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/context/language-context";
import { auditsModalContent } from "@/lib/content/audits-modal-content";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Shield,
  Building,
  Search,
  AlertTriangle,
  FileText,
  Award,
  ChevronRight,
  LayoutGrid,
  ShieldCheck,
  ClipboardList,
  Target,
  Lightbulb,
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Audit Modules",
    langPill: "Audits Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Audit Modules",
    langPill: "Audits English Content",
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
// Section & SubSection Wrappers
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

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-5 mb-4 w-full max-w-full overflow-hidden box-border">
    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-3 font-headline flex items-start gap-2">
      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block shrink-0 mt-1.5"></span>
      <span className="flex-1 break-words">{title}</span>
    </h3>
    <div className="pl-3 sm:pl-4 border-l-2 border-indigo-100/50 w-full max-w-full overflow-hidden box-border">
      {children}
    </div>
  </div>
);

const RawHTML = ({ html }: { html: string }) => (
  <div className="w-full max-w-full overflow-hidden break-words" dangerouslySetInnerHTML={{ __html: html }} />
);

// ─────────────────────────────────────────────
// Topic → Component map
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string; lang?: "hi" | "en" }>> = {
  intro: ({ content, accent }) => (
    <>
      <Section title={content.sections.executive_summary.title} icon={Lightbulb} accentColor={accent}>
        <div className="bg-blue-50/50 p-4 sm:p-6 rounded-xl border border-blue-100/50 italic text-blue-900 mb-2">
          <RawHTML html={content.sections.executive_summary.content} />
        </div>
      </Section>
      <Section title={content.sections.introduction.title} icon={BookOpen} accentColor={accent}>
        <RawHTML html={content.sections.introduction.content} />
        <SubSection title={content.sections.introduction.subsections.purpose_and_benefits.title}>
          <RawHTML html={content.sections.introduction.subsections.purpose_and_benefits.content} />
        </SubSection>
        <SubSection title={content.sections.introduction.subsections.distinction_audits.title}>
          <RawHTML html={content.sections.introduction.subsections.distinction_audits.content} />
        </SubSection>
      </Section>
    </>
  ),
  regulatory: ({ content, accent }) => (
    <Section title={content.sections.regulatory_frameworks.title} icon={Shield} accentColor={accent}>
      <RawHTML html={content.sections.regulatory_frameworks.content} />
      <div className="grid gap-4 mt-5">
        {(["fssai", "iso22000", "haccp"] as const).map((key) => (
          <div key={key} className="bg-purple-50/50 p-4 sm:p-5 rounded-xl border border-purple-100">
            <h4 className="!mt-0 !mb-2 !border-none !text-purple-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> {content.sections.regulatory_frameworks.subsections[key].title}
            </h4>
            <div className="text-purple-800/90">
              <RawHTML html={content.sections.regulatory_frameworks.subsections[key].content} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  ),
  internal: ({ content, accent }) => (
    <Section title={content.sections.internal_audits.title} icon={Search} accentColor={accent}>
      <RawHTML html={content.sections.internal_audits.content} />
      <SubSection title={content.sections.internal_audits.subsections.purpose.title}>
        <RawHTML html={content.sections.internal_audits.subsections.purpose.content} />
      </SubSection>
      <SubSection title={content.sections.internal_audits.subsections.process.title}>
        <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
          <RawHTML html={content.sections.internal_audits.subsections.process.content} />
        </div>
      </SubSection>
    </Section>
  ),
  external: ({ content, accent }) => (
    <Section title={content.sections.external_audits.title} icon={Building} accentColor={accent}>
      <RawHTML html={content.sections.external_audits.content} />
      <SubSection title={content.sections.external_audits.subsections.types.title}>
        <RawHTML html={content.sections.external_audits.subsections.types.content} />
      </SubSection>
      <SubSection title={content.sections.external_audits.subsections.process.title}>
        <RawHTML html={content.sections.external_audits.subsections.process.content} />
      </SubSection>
      <SubSection title={content.sections.external_audits.subsections.fssai_system.title}>
        <RawHTML html={content.sections.external_audits.subsections.fssai_system.content} />
        
        {/* Responsive Table Preserved & Styled */}
        <div className="overflow-x-auto mt-4 rounded-xl border border-gray-200 shadow-sm w-full max-w-full">
          <Table className="w-full text-xs sm:text-sm min-w-[300px]">
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="font-bold text-slate-700 whitespace-nowrap py-3">Audit Score Range</TableHead>
                <TableHead className="font-bold text-slate-700 py-3">Recommended Audit Frequency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-slate-50/50">
                <TableCell className="font-semibold text-emerald-600 whitespace-nowrap border-r">81–100%</TableCell>
                <TableCell>Once in 12 months</TableCell>
              </TableRow>
              <TableRow className="bg-slate-50/30 hover:bg-slate-50/50">
                <TableCell className="font-semibold text-amber-600 whitespace-nowrap border-r">51–80%</TableCell>
                <TableCell>Once in 9 months</TableCell>
              </TableRow>
              <TableRow className="hover:bg-slate-50/50">
                <TableCell className="font-semibold text-red-600 whitespace-nowrap border-r">&lt;50%</TableCell>
                <TableCell>Once in 6 months</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </SubSection>
    </Section>
  ),
  focus_areas: ({ content, accent }) => (
    <Section title={content.sections.focus_areas.title} icon={Target} accentColor={accent}>
      <RawHTML html={content.sections.focus_areas.content} />
    </Section>
  ),
  challenges: ({ content, accent }) => (
    <Section title={content.sections.challenges.title} icon={AlertTriangle} accentColor={accent}>
      <div className="grid gap-4 w-full">
        <div className="bg-red-50/50 p-4 sm:p-5 rounded-xl border border-red-100">
          <h4 className="!mt-0 !mb-2 !border-none !text-red-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> {content.sections.challenges.subsections.common_challenges.title}
          </h4>
          <RawHTML html={content.sections.challenges.subsections.common_challenges.content} />
        </div>
        <div className="bg-emerald-50/50 p-4 sm:p-5 rounded-xl border border-emerald-100">
          <h4 className="!mt-0 !mb-2 !border-none !text-emerald-900 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> {content.sections.challenges.subsections.best_practices.title}
          </h4>
          <RawHTML html={content.sections.challenges.subsections.best_practices.content} />
        </div>
        <SubSection title={content.sections.challenges.subsections.fostering_culture.title}>
          <RawHTML html={content.sections.challenges.subsections.fostering_culture.content} />
        </SubSection>
      </div>
    </Section>
  ),
  conclusion: ({ content, accent }) => (
    <Section title={content.sections.conclusion.title} icon={CheckCircle} accentColor={accent}>
      <div className="bg-emerald-50/80 p-4 sm:p-6 rounded-xl border border-emerald-200">
        <p className="text-emerald-950 font-medium m-0 leading-relaxed">
          <RawHTML html={content.sections.conclusion.content} />
        </p>
      </div>
    </Section>
  ),
  recommendations: ({ content, accent }) => (
    <Section title={content.sections.recommendations.title} icon={Award} accentColor={accent}>
      <RawHTML html={content.sections.recommendations.content} />
    </Section>
  ),
};

// ─────────────────────────────────────────────
// Topic group config — bilingual
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "बुनियाद और फ्रेमवर्क (Foundation & Frameworks)" : "Foundation & Frameworks",
      groupIcon: BookOpen,
      topics: [
        { value: "intro", title: c.tabs.intro, subtitle: "Executive summary & audit basics", icon: BookOpen, accent: "blue", badge: "Foundation", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "regulatory", title: c.tabs.regulatory, subtitle: "FSSAI, ISO 22000, HACCP standards", icon: Shield, accent: "purple", badge: "Compliance", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "ऑडिट के प्रकार (Types of Audits)" : "Types of Audits",
      groupIcon: Search,
      topics: [
        { value: "internal", title: c.tabs.internal, subtitle: "Self-assessment & continuous monitoring", icon: Search, accent: "amber", badge: "Internal", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "external", title: c.tabs.external, subtitle: "Third-party & regulatory inspections", icon: Building, accent: "indigo", badge: "External", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "निष्पादन और रणनीति (Execution & Strategy)" : "Execution & Strategy",
      groupIcon: Target,
      topics: [
        { value: "focus_areas", title: c.tabs.focus_areas, subtitle: "Key hygiene & sanitation checkpoints", icon: Target, accent: "teal", badge: "Checklist", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
        { value: "challenges", title: c.tabs.challenges, subtitle: "Common pitfalls & best practices", icon: AlertTriangle, accent: "red", badge: "Strategy", badgeVariant: "destructive" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "निष्कर्ष और सुझाव (Outcomes & Path Forward)" : "Outcomes & Path Forward",
      groupIcon: Award,
      topics: [
        { value: "recommendations", title: c.tabs.recommendations, subtitle: "Actionable steps for compliance", icon: Award, accent: "cyan", badge: "Action", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "conclusion", title: c.tabs.conclusion, subtitle: "Final wrap-up on audit importance", icon: CheckCircle, accent: "emerald", badge: "Summary", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
      ],
    },
  ];
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function AuditsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(auditsModalContent);

  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  if (!content) return null;

  const TOPIC_GROUPS = getTopicGroups(content, lang);
  const ALL_TOPICS = TOPIC_GROUPS.flatMap((g) => g.topics);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  const selectedTopicInfo = ALL_TOPICS.find((tp) => tp.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic] : null;

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

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl
        [&>button]:!text-white
      ">

        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 px-3 sm:px-6 py-2 sm:py-4 shrink-0">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              📋 {content.title}
            </DialogTitle>
            <DialogDescription className={`text-center text-slate-300 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo
                ? selectedTopicInfo.subtitle
                : content.description}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <ClipboardList className="w-3 h-3 shrink-0" /> 4 {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <ShieldCheck className="w-3 h-3 shrink-0" /> {lbl.langPill}
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
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50">
            <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full">
              <ActiveComponent
                content={content}
                accent={selectedTopicInfo.accent}
                lang={lang}
              />
            </div>
          </div>

        ) : (

          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
            <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto">
                {TOPIC_GROUPS.map((group) => (
                  <div key={group.groupLabel}>

                    {/* Group header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <group.groupIcon className="w-4 h-4 text-indigo-400" />
                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-indigo-500">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent" />
                      <span className="text-[10px] text-indigo-500 font-medium tabular-nums bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                        {lbl.topicsCount(group.topics.length)}
                      </span>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
                      {group.topics.map((topic) => (
                        <button
                          key={topic.value}
                          onClick={() => handleSelectTopic(topic.value)}
                          className={`
                            relative flex items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                            text-left shadow-sm hover:shadow-md hover:-translate-y-1
                            ${topic.bgClass} ${topic.borderClass}
                            group w-full bg-white
                            ${(topic as any).wide ? "sm:col-span-2 lg:col-span-3" : ""}
                          `}
                        >
                          {/* Icon */}
                          <div className={`p-2 rounded-lg shadow-sm mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100`}>
                            <topic.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${topic.colorClass}`} />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0 overflow-hidden pt-0.5">
                            <div className="flex items-start gap-1.5 flex-wrap mb-1">
                              <span className="font-bold text-gray-800 text-xs sm:text-[15px] leading-tight break-words group-hover:text-black transition-colors">
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
                            className={`w-4 h-4 shrink-0 ml-1 mt-1 transition-transform duration-200 group-hover:translate-x-1 ${topic.colorClass} opacity-50`}
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
