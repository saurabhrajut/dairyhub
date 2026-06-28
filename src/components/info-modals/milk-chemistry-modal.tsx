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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeft, BookOpen, Atom, Droplets, FlaskConical,
  Gem, Dna, TestTube, Cpu, ChevronRight, Microscope,
  Thermometer, Beaker, Activity, Shield, Layers,
  BarChart3, Zap, Search, LayoutGrid, PackageCheck
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
    modules: "Categories",
    langPill: "Chem Hindi",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Concepts",
    modules: "Categories",
    langPill: "Chem English",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─── STYLES: Mobile-Proof Zero Overflow Engine ───────────────────────────────
const CONTENT_STYLES = `
  .strict-html-wrap {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }
  .strict-html-wrap * {
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
    white-space: normal !important;
  }
  .strict-html-wrap table {
    display: block !important;
    max-width: 100% !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
  }
`;

// ─────────────────────────────────────────────
// Table Scroll & Prose Wrapper (CIP Style)
// ─────────────────────────────────────────────
const wrapTablesInScrollDiv = (container: HTMLElement) => {
  container.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-scroll-wrap")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll-wrap overflow-x-auto w-full my-4 rounded-xl border border-gray-200 shadow-sm bg-white";
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
    <div ref={ref} className="p-4 sm:p-6 md:p-8 text-sm sm:text-base text-gray-700 leading-relaxed strict-html-wrap
      [&_h4]:font-bold [&_h4]:text-indigo-900 [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-sm sm:[&_h4]:text-lg [&_h4]:border-b [&_h4]:border-indigo-100 [&_h4]:pb-1
      [&_h5]:font-semibold [&_h5]:text-gray-800 [&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:text-xs sm:[&_h5]:text-sm
      [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:break-words
      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4
      [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:mb-4
      [&_li]:leading-relaxed [&_li]:break-words [&_li]:text-gray-600
      [&_strong]:text-gray-900 [&_em]:italic
    ">
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────
// CIP Style Wrappers
// ─────────────────────────────────────────────
const Section = ({ title, children, icon: Icon, accentColor = "blue" }: { title: string; children: React.ReactNode; icon?: React.ElementType; accentColor?: string; }) => {
  const headerGradients: Record<string, string> = {
    blue: "from-blue-600 to-blue-500", orange: "from-orange-600 to-orange-500", cyan: "from-cyan-600 to-cyan-500",
    emerald: "from-emerald-600 to-emerald-500", red: "from-red-600 to-red-500", purple: "from-purple-600 to-purple-500",
    rose: "from-rose-600 to-rose-500", amber: "from-amber-600 to-amber-500", teal: "from-teal-600 to-teal-500",
    indigo: "from-indigo-600 to-indigo-500", slate: "from-slate-600 to-slate-500"
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

// ─────────────────────────────────────────────────────────────────
// PRESERVED LEGACY HELPERS (For Nested Milk Chemistry JSON Data)
// ─────────────────────────────────────────────────────────────────
const HScroll = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-full min-w-0 overflow-hidden my-4">
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white pb-2 touch-pan-x">
      {children}
    </div>
  </div>
);

const P = ({ children, className = "", dangerouslySetInnerHTML }: { children?: React.ReactNode; className?: string; dangerouslySetInnerHTML?: { __html: string } }) => {
  if (dangerouslySetInnerHTML) return <p className={`text-sm sm:text-base leading-relaxed text-slate-700 mb-3 strict-html-wrap ${className}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />;
  return <p className={`text-sm sm:text-base leading-relaxed text-slate-700 mb-3 strict-html-wrap ${className}`}>{children}</p>;
};

const accentStyles: Record<string, { border: string; bg: string; head: string; badge: string }> = {
  teal:    { border: "border-teal-500",    bg: "bg-teal-50/80",    head: "text-teal-800",    badge: "bg-teal-100 text-teal-700" },
  amber:   { border: "border-amber-500",   bg: "bg-amber-50/80",   head: "text-amber-800",   badge: "bg-amber-100 text-amber-700" },
  rose:    { border: "border-rose-500",    bg: "bg-rose-50/80",    head: "text-rose-800",    badge: "bg-rose-100 text-rose-700" },
  indigo:  { border: "border-indigo-500",  bg: "bg-indigo-50/80",  head: "text-indigo-800",  badge: "bg-indigo-100 text-indigo-700" },
  emerald: { border: "border-emerald-500", bg: "bg-emerald-50/80", head: "text-emerald-800", badge: "bg-emerald-100 text-emerald-700" },
  slate:   { border: "border-slate-400",   bg: "bg-slate-50/80",   head: "text-slate-800",   badge: "bg-slate-100 text-slate-700" },
};

const Card = ({ title, accent = "teal", children }: { title?: string; accent?: keyof typeof accentStyles; children: React.ReactNode }) => {
  const c = accentStyles[accent] ?? accentStyles.teal;
  return (
    <div className={`border-l-4 ${c.border} ${c.bg} rounded-r-xl px-3 sm:px-5 py-4 shadow-sm w-full max-w-full box-border mb-4 overflow-hidden`}>
      {title && <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2.5 ${c.head} break-words`}>{title}</p>}
      <div className="space-y-3 strict-html-wrap w-full max-w-full box-border">{children}</div>
    </div>
  );
};

const Th = ({ children }: { children: React.ReactNode }) => <th className="bg-slate-800 text-slate-100 text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wide border-b border-slate-700 whitespace-nowrap">{children}</th>;
const Td = ({ children, highlight = false }: { children?: React.ReactNode; highlight?: boolean }) => <td className={`px-3 py-2 border-b border-slate-200 align-top text-xs leading-relaxed ${highlight ? "bg-slate-50/80 font-bold text-slate-800" : "bg-white text-slate-700"}`}>{children}</td>;
const SimpleTable = ({ headers, children, minW = 400 }: { headers: string[]; children: React.ReactNode; minW?: number; }) => (
  <HScroll><table className="w-full text-xs sm:text-sm border-collapse bg-white table-auto" style={{ minWidth: `${minW}px` }}><thead><tr>{headers.map((h) => <Th key={h}>{h}</Th>)}</tr></thead><tbody>{children}</tbody></table></HScroll>
);

// ─────────────────────────────────────────────────────────────────
// CONTENT RENDERERS
// ─────────────────────────────────────────────────────────────────

function CompositionContent({ content }: { content: any }) {
  const d = content?.composition;
  if (!d) return null;
  return (
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Composition</SubHeading>
      {d.whatIsMilk && (
        <Card title={d.whatIsMilk.title} accent="teal">
          {d.whatIsMilk.fssaiDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.fssaiDef }} />}
          {d.whatIsMilk.usaDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.usaDef }} />}
          {d.whatIsMilk.p1 && <P>{d.whatIsMilk.p1}</P>}
          {d.whatIsMilk.phases?.map((ph: string, i: number) => (
            <div key={i} className="pl-3 border-l-2 border-teal-400 mt-2 text-sm safe-text-wrap" dangerouslySetInnerHTML={{ __html: ph }} />
          ))}
        </Card>
      )}
      {d.generalComposition && (
        <Card title={d.generalComposition.title} accent="indigo">
          <SimpleTable headers={d.generalComposition.headers || []} minW={400}>
            {d.generalComposition.rows?.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-slate-50/50"><Td highlight>{row.c1}</Td><Td>{row.v1}</Td><Td>{row.c2}</Td></tr>
            ))}
          </SimpleTable>
        </Card>
      )}
      {d.speciesDifferences && (
        <Card title={d.speciesDifferences.title} accent="emerald">
          <SimpleTable headers={d.speciesDifferences.headers || []} minW={500}>
            {d.speciesDifferences.rows?.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-slate-50/50"><Td highlight>{row.species}</Td><Td>{row.water}</Td><Td>{row.fat}</Td><Td>{row.sugar}</Td><Td>{row.protein}</Td><Td>{row.ash}</Td></tr>
            ))}
          </SimpleTable>
        </Card>
      )}
      {d.water && (
        <Card title={d.water.title} accent="slate">
          <P>{d.water.p1}</P>
          {d.water.forms?.map((form: any, i: number) => (
            <div key={i} className="mt-3 bg-white rounded-xl p-3 border border-slate-200 shadow-sm w-full">
              <p className="text-sm font-bold text-slate-800 mb-1">{form.name}</p><P>{form.desc}</P>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
}

function MammaryGlandContent({ content }: { content: any }) {
  const d = content?.mammaryGland;
  if (!d) return null;
  return (
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Mammary Gland</SubHeading>
      {d.structure && (
        <Card title={d.structure.title} accent="rose">
          <P>{d.structure.p1}</P>
          {d.structure.structureLevels?.map((lvl: any, i: number) => (
            <div key={i} className="mt-2 flex gap-2 items-start bg-white p-3 rounded-xl border border-rose-100">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-rose-400" />
              <p className="text-sm leading-relaxed text-slate-700 min-w-0 flex-1 break-words"><strong className="text-rose-700">{lvl.level}: </strong>{lvl.desc}</p>
            </div>
          ))}
        </Card>
      )}
      {d.physiology && (
        <Card title={d.physiology.title} accent="teal">
          <P>{d.physiology.p1}</P>
          {d.physiology.secretoryPathways?.map((path: any, i: number) => (
            <div key={i} className="mt-3 bg-white rounded-xl p-3 border-l-4 border-teal-400 shadow-sm w-full"><p className="text-sm font-bold text-teal-800 mb-1">{path.name}</p><P>{path.desc}</P></div>
          ))}
          {d.physiology.precursors && (
            <div className="mt-4"><p className="text-sm font-bold text-teal-800 mb-2">{d.physiology.precursors.title}</p>
              <SimpleTable headers={d.physiology.precursors.headers || []} minW={400}>
                {d.physiology.precursors.rows?.map((row: any, i: number) => (<tr key={i} className="hover:bg-slate-100/50"><Td highlight>{row.constituent}</Td><Td>{row.plasma}</Td><Td>{row.milk}</Td></tr>))}
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
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Proteins</SubHeading>
      {d.overview && (
        <Card title={d.overview.title} accent="teal">
          <P dangerouslySetInnerHTML={{ __html: d.overview.p1 }} />
          {d.overview.aminoAcidProfile && (
            <div className="mt-4 w-full">
              <p className="text-sm font-bold text-teal-800 mb-2">{d.overview.aminoAcidProfile.title}</p>
              <SimpleTable headers={d.overview.aminoAcidProfile.headers || []} minW={480}>
                {d.overview.aminoAcidProfile.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-100/50">
                    <Td highlight>{row.aa}</Td><Td>{row.casein}</Td><Td>{row.whey}</Td><Td>{row.milk}</Td><Td>{row.egg}</Td><Td>{row.sig}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
        </Card>
      )}
      {d.casein && (
        <Card title={d.casein.title} accent="indigo">
          <P dangerouslySetInnerHTML={{ __html: d.casein.p1 }} />
          {d.casein.fractionsTitle && <p className="mt-5 text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">{d.casein.fractionsTitle}</p>}
          <div className="mt-3 space-y-3">
            {d.casein.fractions?.map((f: any, i: number) => (<div key={i} className="bg-white p-3 rounded-xl border border-indigo-100 shadow-sm"><p className="text-sm font-bold text-indigo-700 mb-1">{f.name}</p><P>{f.desc}</P></div>))}
          </div>
        </Card>
      )}
      {d.whey && (
        <Card title={d.whey.title} accent="emerald">
          <P dangerouslySetInnerHTML={{ __html: d.whey.p1 }} />
          {d.whey.fractionsTitle && <p className="mt-4 text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">{d.whey.fractionsTitle}</p>}
          <div className="mt-3 space-y-3">
            {d.whey.fractions?.map((f: any, i: number) => (<div key={i} className="bg-emerald-50/80 p-3 rounded-xl border-l-4 border-emerald-500 shadow-sm"><p className="text-sm font-bold text-emerald-800 mb-1">{f.name}</p><P dangerouslySetInnerHTML={{ __html: f.desc }} /></div>))}
          </div>
        </Card>
      )}
    </div>
  );
}

function FatContent({ content }: { content: any }) {
  const d = content?.fat;
  if (!d) return null;
  return (
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Fat Chemistry</SubHeading>
      {d.characteristics && (
        <Card title={d.characteristics.title} accent="teal">
          {["p1","p2","p3"].map(k => d.characteristics[k] && <P key={k}>{d.characteristics[k]}</P>)}
          {d.characteristics.fattyAcidTable && (
            <div className="mt-4 w-full">
              <p className="text-sm font-bold text-teal-800 mb-2">{d.characteristics.fattyAcidTable.title}</p>
              <SimpleTable headers={d.characteristics.fattyAcidTable.headers || []} minW={400}>
                {d.characteristics.fattyAcidTable.rows?.map((r: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-100/50"><Td highlight>{r.name}</Td><Td>{r.chain}</Td><Td>{r.avg}</Td><Td>{r.significance}</Td></tr>
                ))}
              </SimpleTable>
            </div>
          )}
        </Card>
      )}
      {d.mfgm?.architecture && (
        <Card title={d.mfgm.title} accent="indigo">
          {["p1","p2"].map(k => d.mfgm.architecture[k] && <P key={k}>{d.mfgm.architecture[k]}</P>)}
          {d.mfgm.architecture.compositionTable && (
            <div className="mt-4 w-full">
              <SimpleTable headers={d.mfgm.architecture.compositionTable.headers || []} minW={380}>
                {d.mfgm.architecture.compositionTable.rows?.map((r: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50"><Td highlight>{r.component}</Td><Td>{r.percent}</Td><Td>{r.function}</Td></tr>
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
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Lactose</SubHeading>
      {props && (
        <Card title={props.title} accent="teal">
          <P>{props.p1}</P>
          <P>{props.p2}</P>
          {props.propertiesTable && (
            <div className="mt-4">
              <SimpleTable headers={props.propertiesTable.headers || []} minW={350}>
                {props.propertiesTable.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-100/50"><Td highlight>{row.prop}</Td><Td>{row.value}</Td><Td>{row.significance}</Td></tr>
                ))}
              </SimpleTable>
            </div>
          )}
        </Card>
      )}
      {d.maillardReaction && (
        <Card title={d.maillardReaction.title} accent="rose">
          <P>{d.maillardReaction.overview?.p1}</P>
          {d.maillardReaction.stages && (
            <>
              <p className="mt-4 text-sm font-bold text-rose-800">{d.maillardReaction.stages.title}</p>
              <div className="mt-3 space-y-3">
                {d.maillardReaction.stages.stagesList?.map((s: any, i: number) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-rose-100 shadow-sm"><p className="text-sm font-bold text-rose-800 mb-1">{s.name}</p><P>{s.desc}</P></div>
                ))}
              </div>
            </>
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
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Minerals</SubHeading>
      {d.composition && (
        <Card title={d.composition.title} accent="emerald">
          <P>{d.composition.two_phase_distribution?.p1}</P>
          <P>{d.composition.two_phase_distribution?.p2}</P>
          <P>{d.composition.calcium_detail?.p1}</P>
        </Card>
      )}
    </div>
  );
}

function VitaminsEnzymesContent({ content }: { content: any }) {
  const d = content?.vitaminsEnzymes;
  if (!d) return null;
  return (
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Vitamins & Enzymes</SubHeading>
      {d.enzymes?.rows ? (
        <Card title={d.enzymes.title} accent="teal">
          <SimpleTable headers={d.enzymes.headers || []} minW={400}>
            {d.enzymes.rows.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-slate-100/50"><Td highlight>{row.name}</Td><Td>{row.stability}</Td><Td>{row.details}</Td></tr>
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
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>Physical & Chemical Properties</SubHeading>
      {d.rows && (
        <Card title="Property Reference" accent="indigo">
          <SimpleTable headers={d.headers || []} minW={400}>
            {d.rows.map((prop: any, i: number) => (
              <tr key={i} className="hover:bg-slate-100/50"><Td highlight>{prop.property}</Td><Td>{prop.value}</Td><Td>{prop.details}</Td></tr>
            ))}
          </SimpleTable>
        </Card>
      )}
    </div>
  );
}

function GenericContent({ data }: { data: any }) {
  if (!data) return null;
  return (
    <div className="space-y-4 w-full max-w-full min-w-0 overflow-hidden">
      <SubHeading>{data.title || "Topic"}</SubHeading>
      {Object.entries(data).map(([key, value]) => {
        if (key === "title") return null;
        if (typeof value === "string") return <Card key={key} accent="teal"><P>{value}</P></Card>;
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

// ─────────────────────────────────────────────
// TOPIC COMPONENTS MAP (CIP Style)
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string }>> = {
  composition: ({ content, accent }) => <Section title="Composition" icon={BookOpen} accentColor={accent}><CompositionContent content={content} /></Section>,
  mammaryGland: ({ content, accent }) => <Section title="Mammary Gland" icon={Cpu} accentColor={accent}><MammaryGlandContent content={content} /></Section>,
  proteins: ({ content, accent }) => <Section title="Proteins" icon={Dna} accentColor={accent}><ProteinsContent content={content} /></Section>,
  fat: ({ content, accent }) => <Section title="Fat Chemistry" icon={Droplets} accentColor={accent}><FatContent content={content} /></Section>,
  lactose: ({ content, accent }) => <Section title="Lactose" icon={Atom} accentColor={accent}><LactoseContent content={content} /></Section>,
  minerals: ({ content, accent }) => <Section title="Minerals" icon={Gem} accentColor={accent}><MineralsContent content={content} /></Section>,
  vitaminsEnzymes: ({ content, accent }) => <Section title="Vitamins & Enzymes" icon={FlaskConical} accentColor={accent}><VitaminsEnzymesContent content={content} /></Section>,
  properties: ({ content, accent }) => <Section title="Properties" icon={TestTube} accentColor={accent}><PropertiesContent content={content} /></Section>,
  other: ({ content, accent }) => <Section title="Other Constituents" icon={Layers} accentColor={accent}><GenericContent data={content?.other} /></Section>,
};

// ─────────────────────────────────────────────
// TOPIC GROUPS (CIP Style)
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "मूल रसायन (Core Chemistry)" : "Core Chemistry",
      groupIcon: FlaskConical,
      topics: [
        { value: "composition", title: c.composition?.title || "Composition", subtitle: "Basic Components", icon: BookOpen, accent: "teal", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
        { value: "mammaryGland", title: c.mammaryGland?.title || "Mammary Gland", subtitle: "Physiology & Structure", icon: Cpu, accent: "rose", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
        { value: "proteins", title: c.proteins?.title || "Proteins", subtitle: "Casein & Whey", icon: Dna, accent: "indigo", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
        { value: "fat", title: c.fat?.title || "Fat Chemistry", subtitle: "MFGM & Characteristics", icon: Droplets, accent: "amber", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "घटक और गुण (Components & Properties)" : "Components & Properties",
      groupIcon: Atom,
      topics: [
        { value: "lactose", title: c.lactose?.title || "Lactose", subtitle: "Properties & Reactions", icon: Atom, accent: "cyan", badge: "Chem", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "minerals", title: c.minerals?.title || "Minerals", subtitle: "Salts & Trace Elements", icon: Gem, accent: "emerald", badge: "Chem", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
        { value: "vitaminsEnzymes", title: c.vitaminsEnzymes?.title || "Vitamins & Enzymes", subtitle: "Biological Catalysts", icon: FlaskConical, accent: "orange", badge: "Bio", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "properties", title: c.properties?.title || "Properties", subtitle: "Physical & Chemical", icon: TestTube, accent: "blue", badge: "Physics", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400", wide: true },
      ],
    },
    {
      groupLabel: lang === "hi" ? "उन्नत विषय (Advanced Topics)" : "Advanced Topics",
      groupIcon: Microscope,
      topics: [
        { value: "other", title: c.other?.title || "Other Constituents", subtitle: "Minor Constituents", icon: Layers, accent: "slate", badge: "Misc", badgeVariant: "secondary" as const, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400" },
        { value: "microbiology", title: "Microbiology", subtitle: "Pathogens & Spoilage", icon: Microscope, accent: "lime", badge: "Adv", badgeVariant: "secondary" as const, colorClass: "text-lime-600", bgClass: "bg-lime-50 hover:bg-lime-100", borderClass: "border-lime-200 hover:border-lime-400" },
        { value: "thermal", title: "Thermal Processing", subtitle: "Heat Processing", icon: Thermometer, accent: "red", badge: "Adv", badgeVariant: "secondary" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
        { value: "fermentation", title: "Fermentation", subtitle: "Lactic Acid Bacteria", icon: Beaker, accent: "fuchsia", badge: "Adv", badgeVariant: "secondary" as const, colorClass: "text-fuchsia-600", bgClass: "bg-fuchsia-50 hover:bg-fuchsia-100", borderClass: "border-fuchsia-200 hover:border-fuchsia-400" },
        { value: "analytical", title: "Analytical", subtitle: "Testing Methods", icon: BarChart3, accent: "sky", badge: "Adv", badgeVariant: "secondary" as const, colorClass: "text-sky-600", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400" },
        { value: "quality", title: "Quality", subtitle: "Safety & Standards", icon: Shield, accent: "teal", badge: "Adv", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
      ],
    },
  ];
};

// ─────────────────────────────────────────────────────────────────
// MAIN MODAL COMPONENT (CIP Style UI)
// ─────────────────────────────────────────────────────────────────
export function MilkChemistryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawContent = milkChemistryContent as any;
  const content = rawContent[language] || rawContent["en"] || rawContent["hi"];
  
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
  
  // Try mapping to detailed component, fallback to GenericContent
  const ActiveComponent = activeTopic ? (topicComponents[activeTopic] || (({ content, accent }: any) => <Section title={selectedTopicInfo?.title || "Topic"} icon={selectedTopicInfo?.icon} accentColor={accent}><GenericContent data={content[activeTopic]} icon={selectedTopicInfo?.icon as any} /></Section>)) : null;

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
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border strict-html-wrap
      ">

        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10 w-full max-w-full box-border">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🧪 {content?.mainTitle || "Milk Chemistry"}
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo ? selectedTopicInfo.subtitle : "Advanced Dairy Chemistry · Physics · Microbiology"}
            </DialogDescription>
          </DialogHeader>

          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <PackageCheck className="w-3 h-3 shrink-0" /> {TOPIC_GROUPS.length} {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <Activity className="w-3 h-3 shrink-0" /> {lbl.langPill}
              </span>
            </div>
          )}

          {activeTopic && selectedTopicInfo && (
            <div className="flex items-center gap-2 mt-1.5 sm:mt-2 min-w-0 w-full max-w-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg shrink-0 text-xs px-2 h-6 sm:h-7"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                {lbl.backToTopics}
              </Button>
              <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs min-w-0 flex-1 overflow-hidden">
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
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50 w-full max-w-full strict-html-wrap box-border">
            <ScrollArea className="h-full w-full max-w-full">
              <div className="p-3 sm:p-5 md:p-8 max-w-5xl mx-auto w-full max-w-full pb-10 overflow-hidden box-border">
                <ActiveComponent content={content} accent={selectedTopicInfo.accent} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50/50 w-full max-w-full box-border">
            <ScrollArea className="flex-1 h-full w-full max-w-full box-border" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 pb-10 max-w-6xl mx-auto space-y-6 sm:space-y-8 w-full max-w-full overflow-hidden box-border">
                {TOPIC_GROUPS.map((group) => (
                  <div key={group.groupLabel} className="w-full max-w-full box-border">
                    <div className="flex items-center gap-2 mb-3 w-full max-w-full box-border">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <group.groupIcon className="w-4 h-4 text-indigo-500" />
                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent min-w-0" />
                      <span className="text-[10px] text-indigo-600 font-medium tabular-nums bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 shrink-0">
                        {group.topics.length} topics
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4 w-full max-w-full box-border">
                      {group.topics.map((topic) => (
                        <button
                          key={topic.value}
                          onClick={() => handleSelectTopic(topic.value)}
                          className={cn(
                            "group relative flex flex-col items-center justify-center",
                            "p-3 sm:p-5 bg-white hover:shadow-lg rounded-xl sm:rounded-2xl",
                            "border border-gray-100 hover:border-transparent",
                            "text-center aspect-square",
                            "transition-all duration-300 transform hover:scale-[1.03]",
                            "active:scale-95",
                            "hover:ring-2 hover:ring-offset-1 hover:ring-indigo-200 box-border w-full overflow-hidden",
                            (topic as any).wide ? "sm:col-span-2 lg:col-span-3 xl:col-span-4" : ""
                          )}
                        >
                          <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", topic.bgClass)} />
                          
                          {topic.badge && (
                            <span className="absolute top-1.5 right-1.5 z-20 hidden xs:inline-block">
                              <Badge variant="secondary" className={cn(
                                "text-[8px] px-1 py-0 font-bold border shrink-0 scale-90 sm:scale-100", 
                                topic.badge === "Adv" ? "bg-purple-100 text-purple-700 border-purple-200" : "bg-blue-100 text-blue-700 border-blue-200"
                              )}>
                                {topic.badge}
                              </Badge>
                            </span>
                          )}

                          <div className="relative z-10">
                            <div className={cn("p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br text-white mb-2 sm:mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md", topic.colorClass)}>
                              <topic.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                            </div>
                          </div>
                          <span className="relative z-10 font-bold text-[10px] sm:text-[13px] font-headline text-slate-600 group-hover:text-slate-800 transition-colors leading-tight line-clamp-2 px-0.5 break-words w-full">
                            {topic.title}
                          </span>
                          {topic.subtitle && (
                            <span className="relative z-10 text-[8px] sm:text-[10px] text-slate-400 mt-1 line-clamp-1 group-hover:text-slate-500 transition-colors hidden sm:block">
                              {topic.subtitle}
                            </span>
                          )}
                          <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                          <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
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
