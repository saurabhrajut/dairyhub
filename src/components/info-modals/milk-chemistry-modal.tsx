"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowLeft, BookOpen, Atom, Droplets, FlaskConical,
  Gem, Dna, TestTube, Cpu, ChevronRight, Microscope,
  Thermometer, Beaker, Activity, Shield, Layers,
  BarChart3, Zap, Search, Sparkles, LayoutGrid, PackageCheck
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { milkChemistryContent } from "@/lib/content/milk-chemistry-content";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "विषयों पर वापस (Back)",
    topics: "Concepts",
    modules: "Chemistry",
    langPill: "Chem Hindi",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Concepts",
    modules: "Chemistry",
    langPill: "Chem English",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─────────────────────────────────────────────────────────────────
// PRIMITIVE LAYOUT HELPERS (100% Mobile Safe)
// ─────────────────────────────────────────────────────────────────

// ✅ Bulletproof Table Wrapper for Mobile Horizontal Scrolling
const SimpleTable = ({
  headers,
  children,
  minW = 500,
}: {
  headers: string[];
  children: React.ReactNode;
  minW?: number;
}) => (
  <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white my-4 custom-scrollbar">
    <table className="w-full text-left border-collapse text-xs sm:text-sm" style={{ minWidth: `${minW}px` }}>
      <thead className="bg-slate-800 text-slate-100">
        <tr>
          {headers.map((h, idx) => (
            <th key={idx} className="px-3 sm:px-4 py-3 font-bold uppercase tracking-wide border-b border-slate-700 whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        {children}
      </tbody>
    </table>
  </div>
);

const Td = ({ children, highlight = false, nowrap = false }: { children?: React.ReactNode; highlight?: boolean; nowrap?: boolean }) => (
  <td className={cn(
    "px-3 sm:px-4 py-2.5 align-top leading-relaxed",
    highlight ? "bg-slate-50 font-semibold text-slate-800" : "bg-white text-slate-700",
    nowrap ? "whitespace-nowrap" : "whitespace-normal"
  )}>
    {children}
  </td>
);

const P = ({ children, className = "", dangerouslySetInnerHTML }: { children?: React.ReactNode; className?: string; dangerouslySetInnerHTML?: { __html: string } }) => {
  if (dangerouslySetInnerHTML) {
    return <p className={`text-sm sm:text-base leading-relaxed text-slate-700 mb-3 break-words ${className}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />;
  }
  return <p className={`text-sm sm:text-base leading-relaxed text-slate-700 mb-3 break-words ${className}`}>{children}</p>;
};

const accentStyles: Record<string, { border: string; bg: string; head: string }> = {
  teal:    { border: "border-teal-500",    bg: "bg-teal-50/50",    head: "text-teal-800" },
  amber:   { border: "border-amber-500",   bg: "bg-amber-50/50",   head: "text-amber-800" },
  rose:    { border: "border-rose-500",    bg: "bg-rose-50/50",    head: "text-rose-800" },
  indigo:  { border: "border-indigo-500",  bg: "bg-indigo-50/50",  head: "text-indigo-800" },
  emerald: { border: "border-emerald-500", bg: "bg-emerald-50/50", head: "text-emerald-800" },
  slate:   { border: "border-slate-400",   bg: "bg-slate-50/50",   head: "text-slate-800" },
};

const Card = ({ title, accent = "teal", children }: { title?: string; accent?: keyof typeof accentStyles; children: React.ReactNode }) => {
  const c = accentStyles[accent] ?? accentStyles.teal;
  return (
    <div className={`border-l-4 ${c.border} ${c.bg} rounded-r-xl px-3 sm:px-5 py-4 shadow-sm w-full min-w-0 mb-4`}>
      {title && <p className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 ${c.head}`}>{title}</p>}
      <div className="w-full min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const SectionHead = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="flex items-center gap-3 mt-6 mb-4 pb-3 border-b border-slate-200 w-full">
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-indigo-500 to-blue-600 shadow-sm">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </div>
    <h2 className="text-base sm:text-xl font-bold text-slate-800 font-headline leading-tight flex-1 break-words">
      {title}
    </h2>
  </div>
);

// ─────────────────────────────────────────────────────────────────
// CONTENT COMPONENTS (Safely wrapping tables & paragraphs)
// ─────────────────────────────────────────────────────────────────

function CompositionContent({ content }: { content: any }) {
  const d = content?.composition;
  if (!d) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title || "Composition"} icon={BookOpen} />
      {d.whatIsMilk && (
        <Card title={d.whatIsMilk.title} accent="teal">
          {d.whatIsMilk.fssaiDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.fssaiDef }} />}
          {d.whatIsMilk.usaDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.usaDef }} />}
          {d.whatIsMilk.p1 && <P>{d.whatIsMilk.p1}</P>}
          {d.whatIsMilk.phases?.map((ph: string, i: number) => (
            <div key={i} className="pl-3 border-l-2 border-teal-400 mt-2 text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: ph }} />
          ))}
        </Card>
      )}
      {d.generalComposition && (
        <Card title={d.generalComposition.title} accent="indigo">
          <SimpleTable headers={d.generalComposition.headers || []} minW={400}>
            {d.generalComposition.rows?.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-slate-100/50">
                <Td highlight>{row.c1}</Td>
                <Td nowrap>{row.v1}</Td>
                <Td>{row.c2}</Td>
              </tr>
            ))}
          </SimpleTable>
        </Card>
      )}
      {d.speciesDifferences && (
        <Card title={d.speciesDifferences.title} accent="emerald">
          <SimpleTable headers={d.speciesDifferences.headers || []} minW={550}>
            {d.speciesDifferences.rows?.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-slate-100/50">
                <Td highlight nowrap>{row.species}</Td>
                <Td nowrap>{row.water}</Td>
                <Td nowrap>{row.fat}</Td>
                <Td nowrap>{row.sugar}</Td>
                <Td nowrap>{row.protein}</Td>
                <Td>{row.ash}</Td>
              </tr>
            ))}
          </SimpleTable>
        </Card>
      )}
    </div>
  );
}

function MammaryGlandContent({ content }: { content: any }) {
  const d = content?.mammaryGland;
  if (!d) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title || "Mammary Gland"} icon={Cpu} />
      {d.structure && (
        <Card title={d.structure.title} accent="rose">
          <P>{d.structure.p1}</P>
          {d.structure.structureLevels?.map((lvl: any, i: number) => (
            <div key={i} className="mt-2 flex gap-2 items-start bg-white p-3 rounded-xl border border-rose-100">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-rose-400" />
              <p className="text-sm leading-relaxed text-slate-700 min-w-0 flex-1 break-words">
                <strong className="text-rose-700">{lvl.level}: </strong>{lvl.desc}
              </p>
            </div>
          ))}
        </Card>
      )}
      {d.physiology && (
        <Card title={d.physiology.title} accent="teal">
          <P>{d.physiology.p1}</P>
          {d.physiology.precursors && (
            <div className="mt-4">
              <p className="text-sm font-bold text-teal-800 mb-2">{d.physiology.precursors.title}</p>
              <SimpleTable headers={d.physiology.precursors.headers || []} minW={400}>
                {d.physiology.precursors.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-100/50">
                    <Td highlight nowrap>{row.constituent}</Td>
                    <Td>{row.plasma}</Td>
                    <Td>{row.milk}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

function ProteinsContent({ content }: { content: any }) {
  const d = content?.proteins;
  if (!d) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title} icon={Dna} />
      {d.overview && (
        <Card title={d.overview.title} accent="teal">
          <P dangerouslySetInnerHTML={{ __html: d.overview.p1 }} />
          {d.overview.aminoAcidProfile && (
            <div className="mt-4">
              <p className="text-sm font-bold text-teal-800 mb-2">{d.overview.aminoAcidProfile.title}</p>
              <SimpleTable headers={d.overview.aminoAcidProfile.headers || []} minW={500}>
                {d.overview.aminoAcidProfile.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-100/50">
                    <Td highlight nowrap>{row.aa}</Td>
                    <Td nowrap>{row.casein}</Td>
                    <Td nowrap>{row.whey}</Td>
                    <Td nowrap>{row.milk}</Td>
                    <Td nowrap>{row.egg}</Td>
                    <Td>{row.sig}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

function FatContent({ content }: { content: any }) {
  const d = content?.fat;
  if (!d) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title} icon={Droplets} />
      {d.characteristics && (
        <Card title={d.characteristics.title} accent="teal">
          {["p1","p2","p3"].map(k => d.characteristics[k] && <P key={k}>{d.characteristics[k]}</P>)}
          {d.characteristics.fattyAcidTable && (
            <div className="mt-4">
              <p className="text-sm font-bold text-teal-800 mb-2">{d.characteristics.fattyAcidTable.title}</p>
              <SimpleTable headers={d.characteristics.fattyAcidTable.headers || []} minW={400}>
                {d.characteristics.fattyAcidTable.rows?.map((r: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-100/50">
                    <Td highlight nowrap>{r.name}</Td>
                    <Td nowrap>{r.chain}</Td>
                    <Td nowrap>{r.avg}</Td>
                    <Td>{r.significance}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

function LactoseContent({ content }: { content: any }) {
  const d = content?.lactose;
  if (!d) return null;
  const props = d.properties;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title} icon={Atom} />
      {props && (
        <Card title={props.title} accent="teal">
          <P>{props.p1}</P>
          <P>{props.p2}</P>
          {props.propertiesTable && (
            <div className="mt-4">
              <SimpleTable headers={props.propertiesTable.headers || []} minW={350}>
                {props.propertiesTable.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-100/50">
                    <Td highlight nowrap>{row.prop}</Td>
                    <Td nowrap>{row.value}</Td>
                    <Td>{row.significance}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

function MineralsContent({ content }: { content: any }) {
  const d = content?.minerals;
  if (!d) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title} icon={Gem} />
      {d.introduction && (
        <Card title={d.introduction.title} accent="emerald">
          <P>{d.introduction.p1}</P>
        </Card>
      )}
    </div>
  );
}

function VitaminsEnzymesContent({ content }: { content: any }) {
  const d = content?.vitaminsEnzymes;
  if (!d) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title} icon={FlaskConical} />
      {d.enzymes?.rows ? (
        <Card title={d.enzymes.title} accent="teal">
          <SimpleTable headers={d.enzymes.headers || []} minW={400}>
            {d.enzymes.rows.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-slate-100/50">
                <Td highlight nowrap>{row.name}</Td>
                <Td>{row.stability}</Td>
                <Td>{row.details}</Td>
              </tr>
            ))}
          </SimpleTable>
        </Card>
      ) : null}
    </div>
  );
}

function PropertiesContent({ content }: { content: any }) {
  const d = content?.properties;
  if (!d) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={d.title} icon={TestTube} />
      {d.rows && (
        <Card title="Property Reference" accent="indigo">
          <SimpleTable headers={d.headers || []} minW={400}>
            {d.rows.map((prop: any, i: number) => (
              <tr key={i} className="hover:bg-slate-100/50">
                <Td highlight nowrap>{prop.property}</Td>
                <Td nowrap>{prop.value}</Td>
                <Td>{prop.details}</Td>
              </tr>
            ))}
          </SimpleTable>
        </Card>
      )}
    </div>
  );
}

function GenericContent({ data, icon: Icon }: { data: any; icon: React.ElementType }) {
  if (!data) return null;
  return (
    <div className="w-full min-w-0">
      <SectionHead title={data.title || "Topic"} icon={Icon} />
      {Object.entries(data).map(([key, value]) => {
        if (key === "title") return null;
        if (typeof value === "string") {
          return <Card key={key} accent="teal"><P>{value}</P></Card>;
        }
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          const obj = value as any;
          return (
            <Card key={key} title={obj.title || key} accent="indigo">
              {Object.entries(obj).map(([k, v]) => {
                if (k === "title") return null;
                if (typeof v === "string") return <P key={k}>{v}</P>;
                return null;
              })}
            </Card>
          );
        }
        return null;
      })}
    </div>
  );
}

const TopicCard = ({
  topic,
  tabTitle,
  onClick,
}: {
  topic: any;
  tabTitle: string;
  onClick: (val: string) => void;
}) => (
  <button
    onClick={() => onClick(topic.key)}
    className="group relative flex flex-col items-center justify-center p-3 sm:p-5 bg-white hover:shadow-lg rounded-xl border border-gray-200 hover:border-indigo-300 text-center transition-all active:scale-95 w-full min-w-0 overflow-hidden"
  >
    <div className={cn("p-2 sm:p-3 rounded-xl bg-gradient-to-br text-white mb-2 shadow-sm transition-transform group-hover:scale-110", topic.color)}>
      <topic.icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    <span className="font-bold text-[11px] sm:text-xs leading-tight text-slate-700 group-hover:text-indigo-700 break-words w-full px-1 line-clamp-2">
      {tabTitle}
    </span>
    {topic.badge && (
      <Badge variant="secondary" className="mt-1.5 text-[8px] sm:text-[9px] px-1 py-0 bg-slate-100 text-slate-500">
        {topic.badge}
      </Badge>
    )}
  </button>
);

// ─────────────────────────────────────────────────────────────────
// TOPIC CONFIG
// ─────────────────────────────────────────────────────────────────
const TOPICS = [
  { key: "composition", icon: BookOpen, color: "from-teal-400 to-teal-600", Component: CompositionContent, badge: "Core", group: "core" },
  { key: "mammaryGland", icon: Cpu, color: "from-pink-400 to-rose-600", Component: MammaryGlandContent, badge: "Core", group: "core" },
  { key: "proteins", icon: Dna, color: "from-violet-400 to-purple-600", Component: ProteinsContent, badge: "Core", group: "core" },
  { key: "fat", icon: Droplets, color: "from-amber-400 to-orange-500", Component: FatContent, badge: "Core", group: "core" },
  { key: "lactose", icon: Atom, color: "from-cyan-400 to-sky-600", Component: LactoseContent, badge: "Core", group: "core" },
  { key: "minerals", icon: Gem, color: "from-emerald-400 to-green-600", Component: MineralsContent, badge: "Core", group: "core" },
  { key: "vitaminsEnzymes", icon: FlaskConical, color: "from-orange-400 to-red-500", Component: VitaminsEnzymesContent, badge: "Core", group: "core" },
  { key: "properties", icon: TestTube, color: "from-indigo-400 to-blue-600", Component: PropertiesContent, badge: "Core", group: "core" },
  
  { key: "microbiology", icon: Microscope, color: "from-lime-400 to-green-500", Component: null, badge: "Advanced", group: "advanced" },
  { key: "thermal", icon: Thermometer, color: "from-red-400 to-rose-600", Component: null, badge: "Advanced", group: "advanced" },
  { key: "fermentation", icon: Beaker, color: "from-fuchsia-400 to-pink-600", Component: null, badge: "Advanced", group: "advanced" },
  { key: "analytical", icon: BarChart3, color: "from-sky-400 to-blue-600", Component: null, badge: "Advanced", group: "advanced" },
  { key: "quality", icon: Shield, color: "from-teal-400 to-cyan-600", Component: null, badge: "Advanced", group: "advanced" },
  { key: "colloidal", icon: Activity, color: "from-indigo-400 to-violet-600", Component: null, badge: "Advanced", group: "advanced" },
  { key: "processing", icon: Zap, color: "from-yellow-400 to-amber-600", Component: null, badge: "Advanced", group: "advanced" },
  { key: "bioactive", icon: Dna, color: "from-rose-400 to-pink-600", Component: null, badge: "Advanced", group: "advanced" },
  { key: "thermodynamics", icon: Activity, color: "from-cyan-500 to-teal-600", Component: null, badge: "Advanced", group: "advanced" },
];

// ─────────────────────────────────────────────────────────────────
// MAIN MODAL
// ─────────────────────────────────────────────────────────────────
export function MilkChemistryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { language } = useLanguage();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawContent = milkChemistryContent as any;
  const content = rawContent[language] || rawContent["en"] || rawContent["hi"];
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveKey(null);
      setSearchQuery("");
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const handleSelectTopic = (val: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) scrollPosition.current = viewport.scrollTop;
    }
    setActiveKey(val);
  };

  const handleBack = () => {
    setActiveKey(null);
    setSearchQuery("");
  };

  useEffect(() => {
    if (!activeKey && scrollAreaRef.current) {
      const timer = setTimeout(() => {
        const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) viewport.scrollTop = scrollPosition.current;
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeKey]);

  const validTopics = TOPICS
    .map((t) => ({ ...t, title: content?.[t.key]?.title || null }))
    .filter((t) => t.title !== null);

  const filteredTopics = searchQuery.trim()
    ? validTopics.filter(t => (t.title || "").toLowerCase().includes(searchQuery.toLowerCase()))
    : validTopics;

  const groupedTopics = [
    {
      groupLabel: lang === "hi" ? "मूल रसायन (Core Chemistry)" : "Core Chemistry",
      groupIcon: FlaskConical,
      topics: filteredTopics.filter(t => t.group === "core"),
    },
    {
      groupLabel: lang === "hi" ? "उन्नत विषय (Advanced Topics)" : "Advanced Topics",
      groupIcon: Microscope,
      topics: filteredTopics.filter(t => t.group === "advanced"),
    },
  ].filter(g => g.topics.length > 0);

  const activeTopic = activeKey ? validTopics.find((t) => t.key === activeKey) : null;

  const renderContent = () => {
    if (!activeTopic || !content) return null;
    const topicData = content[activeTopic.key];
    if (!topicData) return null;

    if (activeTopic.Component) {
      const Comp = activeTopic.Component as React.ComponentType<{ content: any }>;
      return <Comp content={content} />;
    }
    return <GenericContent data={topicData} icon={activeTopic.icon} />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="
        w-[95vw] sm:w-[95vw] max-w-6xl
        h-[95dvh] sm:h-[95dvh] max-h-[95dvh]
        rounded-2xl p-0 flex flex-col overflow-hidden shadow-2xl bg-slate-50 border-0
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-4 sm:px-6 py-3 sm:py-4 shrink-0 shadow-md z-10 w-full">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-xl md:text-2xl font-bold text-white font-headline tracking-tight flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-indigo-400 hidden sm:block" />
              {content?.mainTitle || "Milk Chemistry"}
            </DialogTitle>
          </DialogHeader>

          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap gap-2 mt-3">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                <LayoutGrid className="w-3 h-3 mr-1" /> {validTopics.length} {lbl.topics}
              </Badge>
              <Badge variant="outline" className="bg-indigo-500/30 text-indigo-200 border-indigo-500/40">
                <Activity className="w-3 h-3 mr-1" /> {lbl.langPill}
              </Badge>
            </div>
          )}

          {activeTopic && (
            <div className="flex items-center gap-2 mt-2 w-full min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 h-7 px-2 shrink-0"
              >
                <ArrowLeft className="w-4 h-4 sm:mr-1" />
                <span className="hidden sm:inline">{content?.backToTopics || lbl.backToTopics}</span>
              </Button>
              <div className="flex items-center gap-1.5 text-white/80 text-xs font-medium min-w-0 overflow-hidden">
                <ChevronRight className="w-3 h-3 shrink-0 opacity-50" />
                <span className="truncate">{activeTopic.title}</span>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {activeTopic ? (
          <ScrollArea className="flex-1 w-full bg-slate-50">
            <div className="p-3 sm:p-6 md:p-8 max-w-4xl mx-auto w-full pb-10">
              {renderContent()}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden w-full">
            <div className="p-3 sm:p-4 bg-white border-b border-gray-200 shrink-0">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search chemistry concepts..."
                  className="w-full text-sm border border-slate-200 rounded-full pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 transition-all"
                />
              </div>
            </div>

            <ScrollArea className="flex-1 w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-6 pb-10 max-w-5xl mx-auto space-y-6">
                {groupedTopics.length > 0 ? (
                  groupedTopics.map((group) => (
                    <div key={group.groupLabel} className="w-full">
                      <div className="flex items-center gap-2 mb-4">
                        <group.groupIcon className="w-4 h-4 text-indigo-500 shrink-0" />
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700">
                          {group.groupLabel}
                        </h3>
                        <div className="flex-1 h-px bg-indigo-100 ml-2" />
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full">
                        {group.topics.map((topic) => (
                          <TopicCard 
                            key={topic.key} 
                            topic={topic} 
                            tabTitle={topic.title || ""}
                            onClick={handleSelectTopic} 
                          />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <Search className="w-10 h-10 mb-3 opacity-20" />
                    <p className="text-sm font-medium">No results found.</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
