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
import { pestControlContent } from "@/lib/content/pest-control-content";
import {
  ArrowLeft,
  BookOpen,
  Bug,
  ShieldCheck,
  Settings,
  Search,
  CheckCircle,
  AlertTriangle,
  Shield,
  ChevronRight,
  LayoutGrid,
  Activity,
  BugOff,
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Categories",
    langPill: "Pest Control Hindi",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Categories",
    langPill: "Pest Control English",
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
      w-full max-w-full overflow-hidden box-border
    ">
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────
// Section & SafeHTML Wrappers
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

const SafeHTML = ({ html }: { html: string }) => (
  <div className="w-full max-w-full overflow-hidden break-words strict-html-wrap" dangerouslySetInnerHTML={{ __html: html }} />
);

// ─────────────────────────────────────────────
// Topic Content Renderers
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string }>> = {
  intro: ({ content, accent }) => (
    <Section title={content.sections.introduction.title} icon={BookOpen} accentColor={accent}>
      <SafeHTML html={content.sections.introduction.content} />
    </Section>
  ),
  biology: ({ content, accent }) => (
    <Section title={content.sections.biology.title} icon={Bug} accentColor={accent}>
      <SafeHTML html={content.sections.biology.content} />
    </Section>
  ),
  ipm: ({ content, accent }) => (
    <Section title={content.sections.ipm.title} icon={ShieldCheck} accentColor={accent}>
      <SafeHTML html={content.sections.ipm.content} />
    </Section>
  ),
  zoning: ({ content, accent }) => (
    <Section title={content.sections.zoning.title} icon={LayoutGrid} accentColor={accent}>
      <SafeHTML html={content.sections.zoning.content} />
    </Section>
  ),
  physical: ({ content, accent }) => (
    <Section title={content.sections.physical.title} icon={Settings} accentColor={accent}>
      <SafeHTML html={content.sections.physical.content} />
    </Section>
  ),
  chemical: ({ content, accent }) => (
    <Section title={content.sections.chemical.title} icon={BugOff} accentColor={accent}>
      <SafeHTML html={content.sections.chemical.content} />
    </Section>
  ),
  spp: ({ content, accent }) => (
    <Section title={content.sections.spp.title} icon={AlertTriangle} accentColor={accent}>
      <SafeHTML html={content.sections.spp.content} />
    </Section>
  ),
  rodent: ({ content, accent }) => (
    <Section title={content.sections.rodent.title} icon={Shield} accentColor={accent}>
      <SafeHTML html={content.sections.rodent.content} />
    </Section>
  ),
  digital: ({ content, accent }) => (
    <Section title={content.sections.digital.title} icon={Activity} accentColor={accent}>
      <SafeHTML html={content.sections.digital.content} />
    </Section>
  ),
  compliance: ({ content, accent }) => (
    <Section title={content.sections.compliance.title} icon={Search} accentColor={accent}>
      <SafeHTML html={content.sections.compliance.content} />
    </Section>
  ),
  training: ({ content, accent }) => (
    <Section title={content.sections.training.title} icon={BookOpen} accentColor={accent}>
      <SafeHTML html={content.sections.training.content} />
    </Section>
  ),
  conclusion: ({ content, accent }) => (
    <Section title={content.sections.conclusion.title} icon={CheckCircle} accentColor={accent}>
      <div className="bg-emerald-50/80 p-5 rounded-xl border border-emerald-100 text-emerald-950 font-medium">
        <SafeHTML html={content.sections.conclusion.content} />
      </div>
    </Section>
  ),
};

// ─────────────────────────────────────────────
// Topic Group Configuration
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "बुनियाद और जीव विज्ञान (Foundation & Biology)" : "Foundation & Biology",
      groupIcon: BookOpen,
      topics: [
        { value: "intro", title: c.tabs.intro, subtitle: "Importance & PRP", icon: BookOpen, accent: "blue", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "biology", title: c.tabs.biology, subtitle: "Identification Key", icon: Bug, accent: "red", badge: "Biology", badgeVariant: "destructive" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
        { value: "ipm", title: c.tabs.ipm, subtitle: "7 Pillars Framework", icon: ShieldCheck, accent: "emerald", badge: "System", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "नियंत्रण और ज़ोनिंग (Controls & Zoning)" : "Controls & Zoning",
      groupIcon: ShieldCheck,
      topics: [
        { value: "zoning", title: c.tabs.zoning, subtitle: "Risk Zones & Traffic", icon: LayoutGrid, accent: "indigo", badge: "Zoning", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
        { value: "physical", title: c.tabs.physical, subtitle: "ILTs, Air Curtains & Heat", icon: Settings, accent: "orange", badge: "Physical", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "chemical", title: c.tabs.chemical, subtitle: "IRAC MoA & Baits", icon: BugOff, accent: "rose", badge: "Chemical", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "विशिष्ट कीट और डिजिटल (Specialized & Digital)" : "Specialized & Digital",
      groupIcon: Search,
      topics: [
        { value: "spp", title: c.tabs.spp, subtitle: "Powder & Storage Pests", icon: AlertTriangle, accent: "amber", badge: "SPP", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "rodent", title: c.tabs.rodent, subtitle: "3-Zone Rodent Defense", icon: Shield, accent: "teal", badge: "Rodent", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
        { value: "digital", title: c.tabs.digital, subtitle: "Smart Traps & IoT", icon: Activity, accent: "purple", badge: "Digital", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "अनुपालन और निष्कर्ष (Compliance & Summary)" : "Compliance & Summary",
      groupIcon: CheckCircle,
      topics: [
        { value: "compliance", title: c.tabs.compliance, subtitle: "Audit & Documentation", icon: Search, accent: "cyan", badge: "Audit", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "training", title: c.tabs.training, subtitle: "Culture & Response", icon: BookOpen, accent: "blue", badge: "SOP", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "conclusion", title: c.tabs.conclusion, subtitle: "Final Summary", icon: CheckCircle, accent: "emerald", badge: "Wrap-up", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
      ],
    },
  ];
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function PestControlModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(pestControlContent);
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
        .strict-html-wrap * {
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
        [&>button]:!text-white
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-800 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🛡️ {content.title}
            </DialogTitle>
            <DialogDescription className={`text-center text-emerald-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo ? selectedTopicInfo.subtitle : content.description}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <Shield className="w-3 h-3 shrink-0" /> {TOPIC_GROUPS.length} {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-500/30 text-emerald-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-500/40">
                <BugOff className="w-3 h-3 shrink-0" /> {lbl.langPill}
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
            <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full pb-10">
              <ActiveComponent content={content} accent={selectedTopicInfo.accent} />
            </div>
          </div>

        ) : (

          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
            <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto pb-10">
                {TOPIC_GROUPS.map((group) => (
                  <div key={group.groupLabel}>

                    {/* Group header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <group.groupIcon className="w-4 h-4 text-emerald-500" />
                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent" />
                      <span className="text-[10px] text-emerald-600 font-medium tabular-nums bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
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
                              {topic.badge && (
                                <Badge
                                  variant={topic.badgeVariant}
                                  className="text-[9px] px-1.5 py-0 shrink-0 hidden xs:inline-flex font-medium"
                                >
                                  {topic.badge}
                                </Badge>
                              )}
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
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
