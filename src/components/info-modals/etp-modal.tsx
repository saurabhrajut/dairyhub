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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";
import { etpModalContent } from "@/lib/content/etp-modal-content";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  BookOpen,
  Settings,
  Award,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  FlaskConical,
  Droplets,
  Scale,
  FileText,
  ChevronRight,
  LayoutGrid,
  Activity,
  Factory,
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Modules",
    langPill: "ETP Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Modules",
    langPill: "ETP English Content",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─────────────────────────────────────────────
// Table Scroll & Prose Wrapper
// ─────────────────────────────────────────────
const wrapTablesInScrollDiv = (container: HTMLElement) => {
  container.querySelectorAll("table").forEach((table) => {
    // Skip if it's already inside our custom responsive DataTable
    if (table.closest('.custom-data-table-wrapper')) return;
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
    green:   "from-green-600 to-green-500",
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

const SubSection = ({
  title,
  children,
  accent = "border-gray-200",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) => (
  <div className="mt-5 mb-4 w-full max-w-full overflow-hidden box-border">
    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-3 font-headline flex items-start gap-2">
      <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0 mt-1.5"></span>
      <span className="flex-1 break-words">{title}</span>
    </h3>
    <div className={`pl-3 sm:pl-4 border-l-2 ${accent} w-full max-w-full overflow-hidden box-border`}>
      {children}
    </div>
  </div>
);

const RawHTML = ({ html }: { html: string }) => (
  <div className="w-full max-w-full overflow-hidden break-words strict-html-wrap" dangerouslySetInnerHTML={{ __html: html }} />
);

/**
 * Responsive DataTable:
 * - Mobile  → each row rendered as a vertical card (label + value stacked)
 * - Desktop → normal horizontal table
 */
const DataTable = ({
  headers,
  rows,
  cells,
}: {
  headers: string[];
  rows: any[];
  cells: (row: any) => React.ReactNode[];
}) => {
  return (
    <div className="custom-data-table-wrapper w-full max-w-full overflow-hidden">
      {/* ── MOBILE CARD VIEW ─────────────────────────── */}
      <div className="sm:hidden mt-4 space-y-3">
        {rows.map((row, ri) => {
          const rowCells = cells(row);
          return (
            <div key={ri} className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              {rowCells.map((cell, ci) => (
                <div key={ci} className={`flex gap-3 px-4 py-2.5 text-xs ${ci % 2 === 0 ? "bg-slate-50/50" : "bg-white"} border-b border-gray-100 last:border-0`}>
                  <span className="font-bold text-slate-700 shrink-0 w-2/5 leading-tight">{headers[ci]}</span>
                  <span className={`w-3/5 break-words ${ci === 0 ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                    {cell}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP TABLE VIEW ────────────────────── */}
      <div className="hidden sm:block mt-4 rounded-xl border border-gray-200 overflow-x-auto shadow-sm">
        <Table className="w-full min-w-[500px]">
          <TableHeader className="bg-slate-50 border-b border-gray-200">
            <TableRow>
              {headers.map((h, i) => (
                <TableHead key={i} className="font-bold text-slate-700 whitespace-nowrap text-sm px-4 py-3">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, ri) => (
              <TableRow key={ri} className="hover:bg-slate-50/50 transition-colors">
                {cells(row).map((cell, ci) => (
                  <TableCell key={ci} className={`text-sm px-4 py-3 border-r border-gray-100 last:border-0 ${ci === 0 ? "font-medium text-slate-900" : "text-gray-700"}`}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Topic Content Renderers
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string }>> = {
  intro: ({ content, accent }) => {
    const intro = content.sections.introduction;
    const chars = intro.subsections.characteristics;
    const why = intro.subsections.why_treatment;

    return (
      <>
        <Section title={content.sections.executive_summary.title} icon={BookOpen} accentColor={accent}>
          <div className="bg-blue-50/50 p-4 sm:p-6 rounded-xl border border-blue-100/50 italic text-blue-900 mb-2">
            <RawHTML html={content.sections.executive_summary.content} />
          </div>
        </Section>
        <Section title={intro.title} icon={BookOpen} accentColor={accent}>
          <RawHTML html={intro.content} />
          <SubSection title={chars.title} accent="border-blue-200">
            <RawHTML html={chars.content} />
            <DataTable
              headers={[chars.table.header1, chars.table.header2, chars.table.header3, chars.table.header4, chars.table.header5, chars.table.header6, chars.table.header7]}
              rows={chars.table.rows}
              cells={(r) => [
                r.param, r.butter, r.cream, r.milk, r.cheese, r.powdered,
                <span key="limit" className="text-red-600 font-semibold">{r.limit}</span>,
              ]}
            />
          </SubSection>
          {why && (
            <SubSection title={why.title} accent="border-blue-200">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <RawHTML html={why.content} />
              </div>
            </SubSection>
          )}
        </Section>
      </>
    );
  },

  processes: ({ content, accent }) => {
    const proc = content.sections.treatment_processes;
    return (
      <Section title={proc.title} icon={Settings} accentColor={accent}>
        <RawHTML html={proc.content} />
        <div className="mt-8 space-y-4">
          {proc.flowchart.map((step: any, index: number) => {
            const num = step.step.match(/\d+/)?.[0] ?? index + 1;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full bg-emerald-50/50 border border-emerald-100 p-4 sm:p-5 rounded-xl shadow-sm">
                  <h4 className="!mt-0 !mb-2 font-bold text-base sm:text-lg text-emerald-800 flex items-center gap-3 !border-none">
                    <div className="bg-emerald-200 text-emerald-800 w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 font-bold border border-emerald-300">
                      {num}
                    </div>
                    {step.title}
                  </h4>
                  <div className="mt-2 text-sm text-gray-700 sm:pl-10">
                    <RawHTML html={step.details} />
                  </div>
                </div>
                {index < proc.flowchart.length - 1 && (
                  <div className="text-2xl text-emerald-300 my-2">↓</div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    );
  },

  benefits: ({ content, accent }) => {
    const ben = content.sections.benefits;
    const subs = ben.subsections;
    const cards = [{ key: "environmental" }, { key: "economic" }, { key: "operational" }];
    return (
      <Section title={ben.title} icon={Award} accentColor={accent}>
        <RawHTML html={ben.content} />
        <div className="grid gap-4 mt-5">
          {cards.map(({ key }) => (
            <div key={key} className="bg-amber-50/50 p-4 sm:p-5 rounded-xl border border-amber-100">
              <h4 className="!mt-0 !mb-2 !border-none !text-amber-900 flex items-center gap-2">
                <Award className="w-4 h-4" /> {subs[key].title}
              </h4>
              <div className="text-amber-800/90 text-sm">
                <RawHTML html={subs[key].content} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  },

  factors: ({ content, accent }) => {
    const kf = content.sections.key_factors;
    const comp = kf.subsections.compliance;
    const monitoring = kf.subsections.monitoring;
    const hasMultipleLimitCols = comp.table.header3 !== undefined;

    return (
      <Section title={kf.title} icon={CheckCircle} accentColor={accent}>
        <RawHTML html={kf.content} />
        <SubSection title={kf.subsections.characteristics.title} accent="border-teal-200">
          <RawHTML html={kf.subsections.characteristics.content} />
        </SubSection>
        <SubSection title={comp.title} accent="border-teal-200">
          <RawHTML html={comp.content} />
          {hasMultipleLimitCols ? (
            <DataTable
              headers={[comp.table.header1, comp.table.header2, comp.table.header3, comp.table.header4, comp.table.header5]}
              rows={comp.table.rows}
              cells={(r) => [r.param, r.general, r.inland, r.sewer, r.land]}
            />
          ) : (
            <DataTable
              headers={[comp.table.header1, comp.table.header2]}
              rows={comp.table.rows}
              cells={(r) => [r.param, r.limit]}
            />
          )}
        </SubSection>
        <SubSection title={kf.subsections.technology.title} accent="border-teal-200">
          <RawHTML html={kf.subsections.technology.content} />
        </SubSection>
        {monitoring && (
          <SubSection title={monitoring.title} accent="border-teal-200">
            <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100">
              <RawHTML html={monitoring.content} />
            </div>
          </SubSection>
        )}
      </Section>
    );
  },

  challenges: ({ content, accent }) => (
    <Section title={content.sections.challenges.title} icon={AlertTriangle} accentColor={accent}>
      <div className="bg-red-50/50 p-4 sm:p-6 rounded-xl border border-red-100 text-gray-800">
        <RawHTML html={content.sections.challenges.content} />
      </div>
    </Section>
  ),

  future: ({ content, accent }) => {
    const fo = content.sections.future_outlook;
    const circular = fo.subsections.circular_economy;
    return (
      <Section title={fo.title} icon={TrendingUp} accentColor={accent}>
        <RawHTML html={fo.content} />
        <SubSection title={fo.subsections.innovations.title} accent="border-purple-200">
          <RawHTML html={fo.subsections.innovations.content} />
        </SubSection>
        {circular && (
          <SubSection title={circular.title} accent="border-purple-200">
            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
              <RawHTML html={circular.content} />
            </div>
          </SubSection>
        )}
        <SubSection title={fo.subsections.conclusion.title} accent="border-purple-200">
          <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
            <RawHTML html={fo.subsections.conclusion.content} />
          </div>
        </SubSection>
      </Section>
    );
  },

  science: ({ content, accent }) => {
    const sci = content.sections.science;
    if (!sci) return null;
    const subs = sci.subsections;
    return (
      <Section title={sci.title} icon={FlaskConical} accentColor={accent}>
        <RawHTML html={sci.content} />
        {subs?.microbiology && (
          <SubSection title={subs.microbiology.title} accent="border-indigo-200">
            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
              <RawHTML html={subs.microbiology.content} />
            </div>
          </SubSection>
        )}
        {subs?.chemistry && (
          <SubSection title={subs.chemistry.title} accent="border-indigo-200">
            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
              <RawHTML html={subs.chemistry.content} />
            </div>
          </SubSection>
        )}
      </Section>
    );
  },

  parameters: ({ content, accent }) => {
    const par = content.sections.parameters;
    if (!par) return null;
    const subs = par.subsections;
    return (
      <Section title={par.title} icon={Droplets} accentColor={accent}>
        <RawHTML html={par.content} />
        {subs?.physical && (
          <SubSection title={subs.physical.title} accent="border-cyan-200">
            <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
              <RawHTML html={subs.physical.content} />
            </div>
          </SubSection>
        )}
        {subs?.chemical && (
          <SubSection title={subs.chemical.title} accent="border-cyan-200">
            <div className="bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
              <RawHTML html={subs.chemical.content} />
            </div>
          </SubSection>
        )}
      </Section>
    );
  },

  regulations: ({ content, accent }) => {
    const reg = content.sections.regulations;
    if (!reg) return null;
    const subs = reg.subsections;
    return (
      <Section title={reg.title} icon={Scale} accentColor={accent}>
        <RawHTML html={reg.content} />
        {subs?.indian && (
          <SubSection title={subs.indian.title} accent="border-orange-200">
            <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
              <RawHTML html={subs.indian.content} />
            </div>
          </SubSection>
        )}
        {subs?.international && (
          <SubSection title={subs.international.title} accent="border-orange-200">
            <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
              <RawHTML html={subs.international.content} />
            </div>
          </SubSection>
        )}
      </Section>
    );
  },

  casestudy: ({ content, accent }) => {
    const cs = content.sections.casestudy;
    if (!cs) return null;
    const subs = cs.subsections;
    return (
      <Section title={cs.title} icon={FileText} accentColor={accent}>
        <RawHTML html={cs.content} />
        {subs?.case1 && (
          <div className="mt-6 bg-green-50/50 border border-green-200 rounded-xl p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-bold text-green-800 mb-3 font-headline flex items-center gap-2">
              <span className="bg-green-200 text-green-800 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
                Case 1
              </span>
              {subs.case1.title}
            </h3>
            <div className="text-sm text-gray-700">
              <RawHTML html={subs.case1.content} />
            </div>
          </div>
        )}
        {subs?.case2 && (
          <div className="mt-6 bg-sky-50/50 border border-sky-200 rounded-xl p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-bold text-sky-800 mb-3 font-headline flex items-center gap-2">
              <span className="bg-sky-200 text-sky-800 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
                Case 2
              </span>
              {subs.case2.title}
            </h3>
            <div className="text-sm text-gray-700">
              <RawHTML html={subs.case2.content} />
            </div>
          </div>
        )}
      </Section>
    );
  },
};

// ─────────────────────────────────────────────
// Topic Group Configuration
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "बुनियाद और विज्ञान (Foundation & Science)" : "Foundation & Science",
      groupIcon: BookOpen,
      topics: [
        { value: "intro", title: c.tabs.intro, subtitle: "Executive summary & basics", icon: BookOpen, accent: "blue", colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "science", title: c.tabs.science, subtitle: "Microbiology & Chemistry", icon: FlaskConical, accent: "indigo", badge: "New", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
        { value: "parameters", title: c.tabs.parameters, subtitle: "Physical & Chemical checks", icon: Droplets, accent: "cyan", badge: "New", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "प्रक्रिया और संचालन (Processes & Operations)" : "Processes & Operations",
      groupIcon: Settings,
      topics: [
        { value: "processes", title: c.tabs.processes, subtitle: "Primary, secondary, tertiary", icon: Settings, accent: "emerald", colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400", wide: true },
        { value: "factors", title: c.tabs.factors, subtitle: "Key operational factors", icon: CheckCircle, accent: "teal", colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
        { value: "challenges", title: c.tabs.challenges, subtitle: "Issues & mitigations", icon: AlertTriangle, accent: "red", colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "अनुपालन और परिणाम (Compliance & Outcomes)" : "Compliance & Outcomes",
      groupIcon: Award,
      topics: [
        { value: "regulations", title: c.tabs.regulations, subtitle: "Standards & guidelines", icon: Scale, accent: "orange", badge: "New", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "benefits", title: c.tabs.benefits, subtitle: "Environmental & Economic", icon: Award, accent: "amber", colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "casestudy", title: c.tabs.casestudy, subtitle: "Real-world implementations", icon: FileText, accent: "green", badge: "New", badgeVariant: "secondary" as const, colorClass: "text-green-600", bgClass: "bg-green-50 hover:bg-green-100", borderClass: "border-green-200 hover:border-green-400" },
        { value: "future", title: c.tabs.future, subtitle: "Innovations & circular economy", icon: TrendingUp, accent: "purple", colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
      ],
    },
  ];
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function EtpModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(etpModalContent);
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
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-800 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              ♻️ {content.title}
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
                <Factory className="w-3 h-3 shrink-0" /> {TOPIC_GROUPS.length} {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-500/30 text-emerald-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-500/40">
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
              <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto">
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
                      <span className="text-[10px] text-emerald-600 font-medium tabular-nums bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
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
                            ${(topic as any).wide ? "sm:col-span-2 lg:col-span-3 xl:col-span-4" : ""}
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
                <div className="h-6" />
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
