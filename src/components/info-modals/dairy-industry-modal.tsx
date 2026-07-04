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
import { useLanguage } from "@/context/language-context";
import { dairyIndustryContent } from "@/lib/content/dairy-industry-content";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  BookOpen,
  Users,
  TrendingUp,
  Ship,
  CheckCircle,
  BarChart4,
  Leaf,
  FlaskConical,
  Dna,
  Thermometer,
  ShieldCheck,
  Globe,
  Landmark,
  ChevronRight,
  LayoutGrid,
  Beaker,
  Milk,
  Building2,
  Factory,
  Microscope // <-- Yeh import add kiya gaya hai
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Modules",
    langPill: "Dairy Industry Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Modules",
    langPill: "Dairy Industry English Content",
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
    violet:  "from-violet-600 to-violet-500",
    sky:     "from-sky-600 to-sky-500",
    lime:    "from-lime-600 to-lime-500",
    pink:    "from-pink-600 to-pink-500",
    fuchsia: "from-fuchsia-600 to-fuchsia-500",
    green:   "from-green-600 to-green-500",
  };
  const gradient = headerGradients[accentColor] ?? headerGradients.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm mb-4 sm:mb-5">
      <div className={`bg-gradient-to-r ${gradient} p-3 sm:p-5 flex items-center gap-2 sm:gap-3 rounded-t-xl sm:rounded-t-2xl`}>
        {Icon && (
          <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        )}
        <h2 className="text-sm sm:text-xl font-bold text-white font-headline leading-tight">{title}</h2>
      </div>
      <SectionBody>{children}</SectionBody>
    </div>
  );
};

// Custom Table Component for Overview Section
const InfoTable = ({ rows, header1, header2 }: { rows: { col1: string; col2: string }[]; header1: string; header2: string; }) => (
  <table className="w-full text-sm text-left">
    <thead>
      <tr><th>{header1}</th><th>{header2}</th></tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={i}><td>{row.col1}</td><td>{row.col2}</td></tr>
      ))}
    </tbody>
  </table>
);

// ─────────────────────────────────────────────
// Topic → Component map
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string; lang?: "hi" | "en" }>> = {
  intro: ({ content, accent }) => (
    <Section title="Introduction" icon={BookOpen} accentColor={accent}>
      <div className="bg-blue-50/50 p-4 sm:p-6 rounded-xl border border-blue-100/50 mb-6">
        <p dangerouslySetInnerHTML={{ __html: content.intro1 }} />
        <p dangerouslySetInnerHTML={{ __html: content.intro2 }} />
      </div>
    </Section>
  ),
  overview: ({ content, accent }) => {
    const t = content.overview.drivers_challenges.table;
    const rows = [
      { col1: t.row1_col1, col2: t.row1_col2 }, { col1: t.row2_col1, col2: t.row2_col2 },
      { col1: t.row3_col1, col2: t.row3_col2 }, { col1: t.row4_col1, col2: t.row4_col2 },
      { col1: t.row5_col1, col2: t.row5_col2 }, { col1: t.row6_col1, col2: t.row6_col2 },
      { col1: t.row7_col1, col2: t.row7_col2 }, { col1: t.row8_col1, col2: t.row8_col2 },
      { col1: t.row9_col1, col2: t.row9_col2 }, { col1: t.row10_col1, col2: t.row10_col2 },
    ].filter(r => r.col1);
    return (
      <Section title={content.overview.title} icon={BarChart4} accentColor={accent}>
        <h4>{content.overview.market_size.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: content.overview.market_size.text }} />
        <h4>{content.overview.contribution.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: content.overview.contribution.text }} />
        <h4>{content.overview.production_trends.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text1 }} />
        <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text2 }} />
        <h4>{content.overview.drivers_challenges.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.drivers }} />
        <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.challenges }} />
        <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.opportunities }} />
        <InfoTable rows={rows} header1={t.header1} header2={t.header2} />
      </Section>
    );
  },
  animal_nutrition: ({ content, accent }) => (
    <Section title={content.animal_nutrition.title} icon={Leaf} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.animal_nutrition.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.animal_nutrition.text2 }} />
    </Section>
  ),
  animal_health: ({ content, accent }) => (
    <Section title={content.animal_health.title} icon={Thermometer} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.animal_health.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.animal_health.text2 }} />
    </Section>
  ),
  milk_science: ({ content, accent }) => (
    <Section title={content.milk_science.title} icon={FlaskConical} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.milk_science.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.milk_science.text2 }} />
    </Section>
  ),
  cooperatives: ({ content, accent }) => (
    <Section title={content.cooperatives.title} icon={Users} accentColor={accent}>
      <h4>{content.cooperatives.operation_flood.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: content.cooperatives.operation_flood.text }} />
      <h5>{content.cooperatives.operation_flood.objectives_title}</h5>
      <ul>
        {content.cooperatives.operation_flood.objectives.map((obj: string, i: number) => (
          <li key={i}>{obj}</li>
        ))}
      </ul>
      <h5>{content.cooperatives.operation_flood.phases_title}</h5>
      <ul>
        {content.cooperatives.operation_flood.phases.map((phase: string, i: number) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: phase }} />
        ))}
      </ul>
      <h4>{content.cooperatives.anand_pattern.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: content.cooperatives.anand_pattern.intro }} />
      <ul>
        {content.cooperatives.anand_pattern.tiers.map((tier: string, i: number) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: tier }} />
        ))}
      </ul>
      <h4>{content.cooperatives.empowerment.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: content.cooperatives.empowerment.text }} />
    </Section>
  ),
  breeding_genetics: ({ content, accent }) => (
    <Section title={content.breeding_genetics.title} icon={Dna} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.breeding_genetics.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.breeding_genetics.text2 }} />
    </Section>
  ),
  cold_chain: ({ content, accent }) => (
    <Section title={content.cold_chain.title} icon={Thermometer} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.cold_chain.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.cold_chain.text2 }} />
    </Section>
  ),
  quality_standards: ({ content, accent }) => (
    <Section title={content.quality_standards.title} icon={ShieldCheck} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.quality_standards.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.quality_standards.text2 }} />
    </Section>
  ),
  trends: ({ content, accent }) => (
    <Section title={content.trends.title} icon={TrendingUp} accentColor={accent}>
      <h4>{content.trends.modernization.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: content.trends.modernization.text }} />
      <h4>{content.trends.startups.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text2 }} />
      {content.trends.sustainability && (
        <>
          <h4>{content.trends.sustainability.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: content.trends.sustainability.text }} />
        </>
      )}
    </Section>
  ),
  exports: ({ content, accent }) => (
    <Section title={content.exports.title} icon={Ship} accentColor={accent}>
      <h4>{content.exports.status.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: content.exports.status.text1 }} />
      <p dangerouslySetInnerHTML={{ __html: content.exports.status.text2 }} />
    </Section>
  ),
  policy_governance: ({ content, accent }) => (
    <Section title={content.policy_governance.title} icon={Landmark} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.policy_governance.text }} />
    </Section>
  ),
  global_comparison: ({ content, accent }) => (
    <Section title={content.global_comparison.title} icon={Globe} accentColor={accent}>
      <p dangerouslySetInnerHTML={{ __html: content.global_comparison.text }} />
    </Section>
  ),
  conclusion: ({ content, accent }) => (
    <Section title={content.conclusion.title} icon={CheckCircle} accentColor={accent}>
      <div className="bg-emerald-50 p-4 sm:p-6 rounded-xl border border-emerald-100">
        <p className="text-emerald-900 m-0 font-medium" dangerouslySetInnerHTML={{ __html: content.conclusion.text }} />
      </div>
    </Section>
  ),
};


// ─────────────────────────────────────────────
// Topic group config — bilingual
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "परिचय और विज्ञान (Introduction & Sciences)" : "Introduction & Sciences",
      groupIcon: Microscope,
      topics: [
        { value: "intro", title: "Introduction", subtitle: "Dairy basics & foundational concepts", icon: BookOpen, accent: "blue", badge: "Foundation", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "milk_science", title: c.milk_science.title, subtitle: "Composition & biochemistry of milk", icon: FlaskConical, accent: "amber", badge: "Science", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "animal_nutrition", title: c.animal_nutrition.title, subtitle: "Fodder, feed & yield management", icon: Leaf, accent: "lime", badge: "Nutrition", badgeVariant: "secondary" as const, colorClass: "text-lime-600", bgClass: "bg-lime-50 hover:bg-lime-100", borderClass: "border-lime-200 hover:border-lime-400" },
        { value: "animal_health", title: c.animal_health.title, subtitle: "Veterinary care & disease control", icon: Thermometer, accent: "red", badge: "Health", badgeVariant: "destructive" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
        { value: "breeding_genetics", title: c.breeding_genetics.title, subtitle: "Artificial insemination & genetics", icon: Dna, accent: "pink", badge: "Genetics", badgeVariant: "secondary" as const, colorClass: "text-pink-600", bgClass: "bg-pink-50 hover:bg-pink-100", borderClass: "border-pink-200 hover:border-pink-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "बाजार और रुझान (Market & Trends)" : "Market & Trends",
      groupIcon: TrendingUp,
      topics: [
        { value: "overview", title: c.overview.title, subtitle: "Market size, growth & drivers", icon: BarChart4, accent: "indigo", badge: "Market", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400", wide: true },
        { value: "trends", title: c.trends.title, subtitle: "Modernization & emerging startups", icon: TrendingUp, accent: "violet", badge: "Future", badgeVariant: "secondary" as const, colorClass: "text-violet-600", bgClass: "bg-violet-50 hover:bg-violet-100", borderClass: "border-violet-200 hover:border-violet-400" },
        { value: "exports", title: c.exports.title, subtitle: "International trade & status", icon: Ship, accent: "cyan", badge: "Trade", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "global_comparison", title: c.global_comparison.title, subtitle: "India vs the world dairy market", icon: Globe, accent: "fuchsia", badge: "Global", badgeVariant: "secondary" as const, colorClass: "text-fuchsia-600", bgClass: "bg-fuchsia-50 hover:bg-fuchsia-100", borderClass: "border-fuchsia-200 hover:border-fuchsia-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "संचालन और प्रशासन (Operations & Governance)" : "Operations & Governance",
      groupIcon: Building2,
      topics: [
        { value: "cooperatives", title: c.cooperatives.title, subtitle: "Amul model & Operation Flood", icon: Users, accent: "emerald", badge: "Core Model", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
        { value: "cold_chain", title: c.cold_chain.title, subtitle: "Logistics, storage & preservation", icon: Thermometer, accent: "sky", badge: "Logistics", badgeVariant: "secondary" as const, colorClass: "text-sky-600", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400" },
        { value: "quality_standards", title: c.quality_standards.title, subtitle: "FSSAI compliance & testing", icon: ShieldCheck, accent: "teal", badge: "Safety", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
        { value: "policy_governance", title: c.policy_governance.title, subtitle: "Government schemes & support", icon: Landmark, accent: "orange", badge: "Govt", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "conclusion", title: c.conclusion.title, subtitle: "Summary & path forward", icon: CheckCircle, accent: "green", badge: "Wrap Up", badgeVariant: "secondary" as const, colorClass: "text-green-600", bgClass: "bg-green-50 hover:bg-green-100", borderClass: "border-green-200 hover:border-green-400" },
      ],
    },
  ];
};


// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(dairyIndustryContent);

  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  if (!content) return null;

  const TOPIC_GROUPS = getTopicGroups(content, lang) as any;
  const ALL_TOPICS = TOPIC_GROUPS.flatMap((g: any) => g.topics) as any[];

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  const selectedTopicInfo = ALL_TOPICS.find((tp: any) => tp.value === activeTopic);
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
        <div className="bg-gradient-to-br from-indigo-900 via-slate-800 to-indigo-950 px-3 sm:px-6 py-2 sm:py-4 shrink-0">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🐄 {content.main_title}
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
                <Factory className="w-3 h-3 shrink-0" /> 3 {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <Milk className="w-3 h-3 shrink-0" /> {lbl.langPill}
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
            <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto">
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
                {TOPIC_GROUPS.map((group: any) => (
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
                      {group.topics.map((topic: any) => (
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
