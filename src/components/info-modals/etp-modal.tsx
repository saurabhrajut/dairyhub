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
} from "lucide-react";

// ---------------------------------------------------------------------------
// Helper Components
// ---------------------------------------------------------------------------

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
    <div className="bg-muted/30 p-4 border-b border-border">
      <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
    </div>
    <div className="p-3 sm:p-6 text-card-foreground prose max-w-none text-gray-700 leading-relaxed break-words overflow-hidden">
      <div className="space-y-4">{children}</div>
    </div>
  </div>
);

const SubSection = ({
  title,
  children,
  accent = "border-gray-100",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) => (
  <div className="mt-6 mb-4">
    <h3 className="text-lg font-bold text-gray-800 mb-2 font-headline flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
      {title}
    </h3>
    <div className={`pl-2 sm:pl-4 border-l-2 ${accent} text-gray-700 overflow-hidden`}>{children}</div>
  </div>
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
    <>
      {/* ── MOBILE CARD VIEW (hidden on sm+) ─────────────────────────── */}
      <div className="sm:hidden mt-4 space-y-3">
        {rows.map((row, ri) => {
          const rowCells = cells(row);
          return (
            <div
              key={ri}
              className="rounded-lg border border-gray-200 overflow-hidden"
            >
              {rowCells.map((cell, ci) => (
                <div
                  key={ci}
                  className={`flex gap-2 px-3 py-2 text-xs ${
                    ci % 2 === 0 ? "bg-muted/30" : "bg-white"
                  }`}
                >
                  <span className="font-bold text-primary shrink-0 w-2/5 leading-tight">
                    {headers[ci]}
                  </span>
                  <span className={`w-3/5 break-words ${ci === 0 ? "font-semibold text-gray-800" : "text-gray-700"}`}>
                    {cell}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP TABLE VIEW (hidden on mobile) ────────────────────── */}
      <div className="hidden sm:block mt-4 rounded-lg border border-gray-200 overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              {headers.map((h, i) => (
                <TableHead key={i} className="font-bold text-primary whitespace-nowrap text-sm px-4 py-2">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, ri) => (
              <TableRow key={ri}>
                {cells(row).map((cell, ci) => (
                  <TableCell key={ci} className={`text-sm px-4 py-2 ${ci === 0 ? "font-medium" : ""}`}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Topic Content Components
// ---------------------------------------------------------------------------

const topicComponents = {
  // ── INTRODUCTION ──────────────────────────────────────────────────────────
  intro: function Content({ content }: { content: any }) {
    const intro = content.sections.introduction;
    const chars = intro.subsections.characteristics;
    const why = intro.subsections.why_treatment;

    return (
      <div className="prose prose-sm max-w-none break-words overflow-hidden w-full">
        {/* Executive Summary */}
        <Section title={content.sections.executive_summary.title}>
          <div
            className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-900"
            dangerouslySetInnerHTML={{
              __html: content.sections.executive_summary.content,
            }}
          />
        </Section>

        {/* Introduction */}
        <Section title={intro.title}>
          <div dangerouslySetInnerHTML={{ __html: intro.content }} />

          {/* Characteristics */}
          <SubSection title={chars.title} accent="border-blue-100">
            <div dangerouslySetInnerHTML={{ __html: chars.content }} />
            <DataTable
              headers={[
                chars.table.header1,
                chars.table.header2,
                chars.table.header3,
                chars.table.header4,
                chars.table.header5,
                chars.table.header6,
                chars.table.header7,
              ]}
              rows={chars.table.rows}
              cells={(r) => [
                r.param,
                r.butter,
                r.cream,
                r.milk,
                r.cheese,
                r.powdered,
                <span className="text-red-600 font-semibold">{r.limit}</span>,
              ]}
            />
          </SubSection>

          {/* Why Treatment */}
          {why && (
            <SubSection title={why.title} accent="border-red-100">
              <div
                className="bg-red-50 p-4 rounded-lg border border-red-100"
                dangerouslySetInnerHTML={{ __html: why.content }}
              />
            </SubSection>
          )}
        </Section>
      </div>
    );
  },

  // ── TREATMENT PROCESSES ───────────────────────────────────────────────────
  processes: function Content({ content }: { content: any }) {
    const proc = content.sections.treatment_processes;
    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={proc.title}>
          <div dangerouslySetInnerHTML={{ __html: proc.content }} />
          <div className="mt-8 space-y-4">
            {proc.flowchart.map((step: any, index: number) => {
              // step number badge
              const num = step.step.match(/\d+/)?.[0] ?? index + 1;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-full bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg text-emerald-800 flex items-center gap-2">
                      <div className="bg-emerald-200 text-emerald-800 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">
                        {num}
                      </div>
                      {step.title}
                    </h4>
                    <div
                      className="mt-2 text-sm text-gray-700 pl-8"
                      dangerouslySetInnerHTML={{ __html: step.details }}
                    />
                  </div>
                  {index < proc.flowchart.length - 1 && (
                    <div className="text-2xl text-emerald-300 my-2">↓</div>
                  )}
                </div>
              );
            })}
          </div>
        </Section>
      </div>
    );
  },

  // ── BENEFITS ──────────────────────────────────────────────────────────────
  benefits: function Content({ content }: { content: any }) {
    const ben = content.sections.benefits;
    const subs = ben.subsections;
    const cards = [
      { key: "environmental", color: "amber" },
      { key: "economic", color: "amber" },
      { key: "operational", color: "amber" },
    ];
    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={ben.title}>
          <div dangerouslySetInnerHTML={{ __html: ben.content }} />
          <div className="grid gap-4 mt-4">
            {cards.map(({ key }) => (
              <div
                key={key}
                className="bg-amber-50 p-4 rounded-lg border border-amber-100"
              >
                <SubSection title={subs[key].title} accent="border-amber-200">
                  <div
                    dangerouslySetInnerHTML={{ __html: subs[key].content }}
                  />
                </SubSection>
              </div>
            ))}
          </div>
        </Section>
      </div>
    );
  },

  // ── KEY FACTORS ───────────────────────────────────────────────────────────
  factors: function Content({ content }: { content: any }) {
    const kf = content.sections.key_factors;
    const comp = kf.subsections.compliance;
    const monitoring = kf.subsections.monitoring;

    // Detect updated table shape (4-col vs 2-col)
    const hasMultipleLimitCols =
      comp.table.header3 !== undefined;

    return (
      <div className="prose prose-sm max-w-none break-words overflow-hidden w-full">
        <Section title={kf.title}>
          <div dangerouslySetInnerHTML={{ __html: kf.content }} />

          <SubSection title={kf.subsections.characteristics.title} accent="border-teal-100">
            <div
              dangerouslySetInnerHTML={{
                __html: kf.subsections.characteristics.content,
              }}
            />
          </SubSection>

          <SubSection title={comp.title} accent="border-teal-100">
            <div dangerouslySetInnerHTML={{ __html: comp.content }} />
            {hasMultipleLimitCols ? (
              <DataTable
                headers={[
                  comp.table.header1,
                  comp.table.header2,
                  comp.table.header3,
                  comp.table.header4,
                  comp.table.header5,
                ]}
                rows={comp.table.rows}
                cells={(r) => [
                  r.param,
                  r.general,
                  r.inland,
                  r.sewer,
                  r.land,
                ]}
              />
            ) : (
              <DataTable
                headers={[comp.table.header1, comp.table.header2]}
                rows={comp.table.rows}
                cells={(r) => [r.param, r.limit]}
              />
            )}
          </SubSection>

          <SubSection title={kf.subsections.technology.title} accent="border-teal-100">
            <div
              dangerouslySetInnerHTML={{
                __html: kf.subsections.technology.content,
              }}
            />
          </SubSection>

          {/* NEW: Monitoring subsection */}
          {monitoring && (
            <SubSection title={monitoring.title} accent="border-teal-100">
              <div
                className="bg-teal-50 p-4 rounded-lg border border-teal-100"
                dangerouslySetInnerHTML={{ __html: monitoring.content }}
              />
            </SubSection>
          )}
        </Section>
      </div>
    );
  },

  // ── CHALLENGES ────────────────────────────────────────────────────────────
  challenges: function Content({ content }: { content: any }) {
    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={content.sections.challenges.title}>
          <div
            className="bg-red-50 p-5 rounded-lg border border-red-100 text-gray-800"
            dangerouslySetInnerHTML={{
              __html: content.sections.challenges.content,
            }}
          />
        </Section>
      </div>
    );
  },

  // ── FUTURE OUTLOOK ────────────────────────────────────────────────────────
  future: function Content({ content }: { content: any }) {
    const fo = content.sections.future_outlook;
    const circular = fo.subsections.circular_economy;

    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={fo.title}>
          <div dangerouslySetInnerHTML={{ __html: fo.content }} />

          <SubSection title={fo.subsections.innovations.title} accent="border-purple-100">
            <div
              dangerouslySetInnerHTML={{
                __html: fo.subsections.innovations.content,
              }}
            />
          </SubSection>

          {/* NEW: Circular Economy */}
          {circular && (
            <SubSection title={circular.title} accent="border-purple-100">
              <div
                className="bg-purple-50 p-4 rounded-lg border border-purple-100"
                dangerouslySetInnerHTML={{ __html: circular.content }}
              />
            </SubSection>
          )}

          <SubSection title={fo.subsections.conclusion.title} accent="border-purple-100">
            <div
              className="bg-purple-50 p-4 rounded-lg border border-purple-100"
              dangerouslySetInnerHTML={{
                __html: fo.subsections.conclusion.content,
              }}
            />
          </SubSection>
        </Section>
      </div>
    );
  },

  // ── SCIENTIFIC PRINCIPLES (NEW) ───────────────────────────────────────────
  science: function Content({ content }: { content: any }) {
    const sci = content.sections.science;
    if (!sci) return null;
    const subs = sci.subsections;

    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={sci.title}>
          <div dangerouslySetInnerHTML={{ __html: sci.content }} />

          {subs?.microbiology && (
            <SubSection title={subs.microbiology.title} accent="border-indigo-100">
              <div
                className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                dangerouslySetInnerHTML={{ __html: subs.microbiology.content }}
              />
            </SubSection>
          )}

          {subs?.chemistry && (
            <SubSection title={subs.chemistry.title} accent="border-indigo-100">
              <div
                className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                dangerouslySetInnerHTML={{ __html: subs.chemistry.content }}
              />
            </SubSection>
          )}
        </Section>
      </div>
    );
  },

  // ── WATER QUALITY PARAMETERS (NEW) ────────────────────────────────────────
  parameters: function Content({ content }: { content: any }) {
    const par = content.sections.parameters;
    if (!par) return null;
    const subs = par.subsections;

    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={par.title}>
          <div dangerouslySetInnerHTML={{ __html: par.content }} />

          {subs?.physical && (
            <SubSection title={subs.physical.title} accent="border-cyan-100">
              <div
                className="bg-cyan-50 p-4 rounded-lg border border-cyan-100"
                dangerouslySetInnerHTML={{ __html: subs.physical.content }}
              />
            </SubSection>
          )}

          {subs?.chemical && (
            <SubSection title={subs.chemical.title} accent="border-cyan-100">
              <div
                className="bg-cyan-50 p-4 rounded-lg border border-cyan-100"
                dangerouslySetInnerHTML={{ __html: subs.chemical.content }}
              />
            </SubSection>
          )}
        </Section>
      </div>
    );
  },

  // ── REGULATIONS (NEW) ─────────────────────────────────────────────────────
  regulations: function Content({ content }: { content: any }) {
    const reg = content.sections.regulations;
    if (!reg) return null;
    const subs = reg.subsections;

    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={reg.title}>
          <div dangerouslySetInnerHTML={{ __html: reg.content }} />

          {subs?.indian && (
            <SubSection title={subs.indian.title} accent="border-orange-100">
              <div
                className="bg-orange-50 p-4 rounded-lg border border-orange-100"
                dangerouslySetInnerHTML={{ __html: subs.indian.content }}
              />
            </SubSection>
          )}

          {subs?.international && (
            <SubSection title={subs.international.title} accent="border-orange-100">
              <div
                className="bg-orange-50 p-4 rounded-lg border border-orange-100"
                dangerouslySetInnerHTML={{ __html: subs.international.content }}
              />
            </SubSection>
          )}
        </Section>
      </div>
    );
  },

  // ── CASE STUDIES (NEW) ────────────────────────────────────────────────────
  casestudy: function Content({ content }: { content: any }) {
    const cs = content.sections.casestudy;
    if (!cs) return null;
    const subs = cs.subsections;

    return (
      <div className="prose prose-sm max-w-none break-words">
        <Section title={cs.title}>
          <div dangerouslySetInnerHTML={{ __html: cs.content }} />

          {subs?.case1 && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-green-800 mb-3 font-headline flex items-center gap-2">
                <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  Case 1
                </span>
                {subs.case1.title}
              </h3>
              <div
                className="text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: subs.case1.content }}
              />
            </div>
          )}

          {subs?.case2 && (
            <div className="mt-6 bg-sky-50 border border-sky-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-sky-800 mb-3 font-headline flex items-center gap-2">
                <span className="bg-sky-200 text-sky-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  Case 2
                </span>
                {subs.case2.title}
              </h3>
              <div
                className="text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: subs.case2.content }}
              />
            </div>
          )}
        </Section>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Topic Config
// ---------------------------------------------------------------------------

type TopicKey = keyof typeof topicComponents;

interface Topic {
  value: TopicKey;
  title: string;
  icon: React.ElementType;
  component: (props: { content: any }) => React.ReactElement | null;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  hoverClass: string;
  badge?: string;
}

// ---------------------------------------------------------------------------
// Main Modal Component
// ---------------------------------------------------------------------------

export function EtpModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(etpModalContent);
  const [activeTopic, setActiveTopic] = useState<TopicKey | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  if (!content) return null;

  const topics: Topic[] = [
    {
      value: "intro",
      title: content.tabs.intro,
      icon: BookOpen,
      component: topicComponents.intro,
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50",
      borderClass: "border-blue-200",
      hoverClass: "hover:bg-blue-100",
    },
    {
      value: "processes",
      title: content.tabs.processes,
      icon: Settings,
      component: topicComponents.processes,
      colorClass: "text-emerald-600",
      bgClass: "bg-emerald-50",
      borderClass: "border-emerald-200",
      hoverClass: "hover:bg-emerald-100",
    },
    {
      value: "benefits",
      title: content.tabs.benefits,
      icon: Award,
      component: topicComponents.benefits,
      colorClass: "text-amber-600",
      bgClass: "bg-amber-50",
      borderClass: "border-amber-200",
      hoverClass: "hover:bg-amber-100",
    },
    {
      value: "factors",
      title: content.tabs.factors,
      icon: CheckCircle,
      component: topicComponents.factors,
      colorClass: "text-teal-600",
      bgClass: "bg-teal-50",
      borderClass: "border-teal-200",
      hoverClass: "hover:bg-teal-100",
    },
    {
      value: "challenges",
      title: content.tabs.challenges,
      icon: AlertTriangle,
      component: topicComponents.challenges,
      colorClass: "text-red-600",
      bgClass: "bg-red-50",
      borderClass: "border-red-200",
      hoverClass: "hover:bg-red-100",
    },
    {
      value: "future",
      title: content.tabs.future,
      icon: TrendingUp,
      component: topicComponents.future,
      colorClass: "text-purple-600",
      bgClass: "bg-purple-50",
      borderClass: "border-purple-200",
      hoverClass: "hover:bg-purple-100",
    },
    // ── NEW TOPICS ──────────────────────────────────────────────────────────
    {
      value: "science",
      title: content.tabs.science,
      icon: FlaskConical,
      component: topicComponents.science,
      colorClass: "text-indigo-600",
      bgClass: "bg-indigo-50",
      borderClass: "border-indigo-200",
      hoverClass: "hover:bg-indigo-100",
      badge: "New",
    },
    {
      value: "parameters",
      title: content.tabs.parameters,
      icon: Droplets,
      component: topicComponents.parameters,
      colorClass: "text-cyan-600",
      bgClass: "bg-cyan-50",
      borderClass: "border-cyan-200",
      hoverClass: "hover:bg-cyan-100",
      badge: "New",
    },
    {
      value: "regulations",
      title: content.tabs.regulations,
      icon: Scale,
      component: topicComponents.regulations,
      colorClass: "text-orange-600",
      bgClass: "bg-orange-50",
      borderClass: "border-orange-200",
      hoverClass: "hover:bg-orange-100",
      badge: "New",
    },
    {
      value: "casestudy",
      title: content.tabs.casestudy,
      icon: FileText,
      component: topicComponents.casestudy,
      colorClass: "text-green-600",
      bgClass: "bg-green-50",
      borderClass: "border-green-200",
      hoverClass: "hover:bg-green-100",
      badge: "New",
    },
  ];

  const selectedTopic = topics.find((t) => t.value === activeTopic);
  const ActiveComponent = selectedTopic?.component ?? null;

  const handleSelectTopic = (topicValue: TopicKey) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(topicValue);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPosition.current;
        }
      }, 0);
    }
  }, [activeTopic]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
          /* ── DETAIL VIEW ─────────────────────────────────────────────────── */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            <div className="px-4 sm:px-0 shrink-0">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="hover:bg-slate-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-2 sm:pr-4">
              <div className="p-3 pt-0 sm:p-0 max-w-full overflow-hidden">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* ── TOPIC GRID ──────────────────────────────────────────────────── */
          <ScrollArea
            className="flex-1 mt-4 sm:pr-4"
            viewportRef={scrollAreaRef}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 p-3 sm:p-2">
              {topics.map((topic) => (
                <button
                  key={topic.value}
                  onClick={() => handleSelectTopic(topic.value)}
                  className={`
                    relative flex flex-col sm:flex-row items-center sm:items-center
                    p-3 sm:p-5 rounded-xl border transition-all duration-200
                    text-center sm:text-left shadow-sm hover:shadow-md w-full min-w-0
                    ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                    group
                  `}
                >
                  {/* "New" badge */}
                  {topic.badge && (
                    <span
                      className={`
                        absolute top-1.5 right-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full
                        ${topic.colorClass} bg-white border ${topic.borderClass}
                      `}
                    >
                      {topic.badge}
                    </span>
                  )}
                  <topic.icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 mb-1.5 sm:mb-0 sm:mr-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${topic.colorClass}`}
                  />
                  <span className="font-bold font-headline text-xs sm:text-base text-gray-800 group-hover:text-black leading-tight min-w-0 break-words line-clamp-2">
                    {topic.title}
                  </span>
                </button>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
