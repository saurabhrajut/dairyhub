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
import { Button } from "../ui/button";
import {
  ArrowLeft,
  BookOpen,
  Atom,
  Droplets,
  FlaskConical,
  Gem,
  Dna,
  TestTube,
  Cpu,
  ChevronRight,
  Microscope,
  Thermometer,
  Beaker,
  Activity,
  Shield,
  Layers,
  BarChart3,
  Zap,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Droplet,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { milkChemistryContent } from "@/lib/content/milk-chemistry-content";

// ─────────────────────────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Modules",
    langPill: "Milk Chemistry Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Modules",
    langPill: "Milk Chemistry English Content",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─────────────────────────────────────────────────────────────────
// PRIMITIVE LAYOUT HELPERS
// ─────────────────────────────────────────────────────────────────

const HScroll = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-full"
    style={{
      overflowX: "auto",
      overflowY: "visible",
      WebkitOverflowScrolling: "touch",
      maxWidth: "100%",
    }}
  >
    {children}
  </div>
);

const P = ({
  children,
  className = "",
  dangerouslySetInnerHTML,
}: {
  children?: React.ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
}) => {
  const style: React.CSSProperties = {
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    maxWidth: "100%",
  };
  if (dangerouslySetInnerHTML) {
    return (
      <p
        className={`text-sm leading-6 text-slate-700 ${className}`}
        style={style}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }
  return (
    <p className={`text-sm leading-6 text-slate-700 ${className}`} style={style}>
      {children}
    </p>
  );
};

const accentStyles: Record<string, { border: string; bg: string; head: string; badge: string }> = {
  teal:    { border: "border-teal-500",    bg: "bg-teal-50/80",    head: "text-teal-800",    badge: "bg-teal-100 text-teal-700" },
  amber:   { border: "border-amber-500",   bg: "bg-amber-50/80",   head: "text-amber-800",   badge: "bg-amber-100 text-amber-700" },
  rose:    { border: "border-rose-500",    bg: "bg-rose-50/80",    head: "text-rose-800",    badge: "bg-rose-100 text-rose-700" },
  indigo:  { border: "border-indigo-500",  bg: "bg-indigo-50/80",  head: "text-indigo-800",  badge: "bg-indigo-100 text-indigo-700" },
  emerald: { border: "border-emerald-500", bg: "bg-emerald-50/80", head: "text-emerald-800", badge: "bg-emerald-100 text-emerald-700" },
  slate:   { border: "border-slate-400",   bg: "bg-slate-50/80",   head: "text-slate-800",   badge: "bg-slate-100 text-slate-700" },
  violet:  { border: "border-violet-500",  bg: "bg-violet-50/80",  head: "text-violet-800",  badge: "bg-violet-100 text-violet-700" },
  cyan:    { border: "border-cyan-500",    bg: "bg-cyan-50/80",    head: "text-cyan-800",    badge: "bg-cyan-100 text-cyan-700" },
  orange:  { border: "border-orange-500",  bg: "bg-orange-50/80",  head: "text-orange-800",  badge: "bg-orange-100 text-orange-700" },
};

const Card = ({
  title,
  accent = "teal",
  children,
}: {
  title?: string;
  accent?: keyof typeof accentStyles;
  children: React.ReactNode;
}) => {
  const c = accentStyles[accent] ?? accentStyles.teal;
  return (
    <div
      className={`border-l-4 ${c.border} ${c.bg} rounded-r-xl px-4 py-4 shadow-sm`}
      style={{ maxWidth: "100%", overflow: "hidden" }}
    >
      {title && (
        <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${c.head}`}>
          {title}
        </p>
      )}
      <div className="space-y-2" style={{ maxWidth: "100%", wordBreak: "break-word", overflowWrap: "anywhere" }}>
        {children}
      </div>
    </div>
  );
};

const SectionHead = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200">
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: "linear-gradient(135deg,#0f766e,#134e4a)" }}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h2 className="text-base sm:text-lg font-bold text-slate-800 leading-tight" style={{ wordBreak: "break-word" }}>
      {title}
    </h2>
  </div>
);

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="bg-slate-800 text-slate-100 text-left px-3 py-2 text-xs font-semibold border border-slate-700 whitespace-nowrap">
    {children}
  </th>
);

const Td = ({
  children,
  nowrap = false,
  highlight = false,
}: {
  children?: React.ReactNode;
  nowrap?: boolean;
  highlight?: boolean;
}) => (
  <td
    className={`px-3 py-2 border border-slate-200 align-top text-xs leading-5 ${
      highlight ? "bg-teal-50 font-semibold text-teal-800" : "bg-white text-slate-700"
    }`}
    style={{
      whiteSpace: nowrap ? "nowrap" : "normal",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
    }}
  >
    {children}
  </td>
);

const SimpleTable = ({
  headers,
  children,
  minW = 400,
}: {
  headers: string[];
  children: React.ReactNode;
  minW?: number;
}) => (
  <HScroll>
    <table className="w-full text-xs border-collapse" style={{ minWidth: minW }}>
      <thead>
        <tr>{headers.map((h) => <Th key={h}>{h}</Th>)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </HScroll>
);

// ─────────────────────────────────────────────────────────────────
// CONTENT SECTION COMPONENTS (unchanged logic, improved structure)
// ─────────────────────────────────────────────────────────────────

function CompositionContent({ content }: { content: any }) {
  const d = content?.composition;
  if (!d) return null;
  return (
    <div className="space-y-5">
      <SectionHead title={d.title || "Composition"} icon={BookOpen} />
      {d.whatIsMilk && (
        <Card title={d.whatIsMilk.title} accent="teal">
          {d.whatIsMilk.fssaiDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.fssaiDef }} />}
          {d.whatIsMilk.usaDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.usaDef }} />}
          {d.whatIsMilk.p1 && <P>{d.whatIsMilk.p1}</P>}
          {d.whatIsMilk.phases?.map((ph: string, i: number) => (
            <div key={i} className="pl-3 border-l-2 border-teal-300 mt-2" dangerouslySetInnerHTML={{ __html: ph }} />
          ))}
        </Card>
      )}
      {d.generalComposition && (
        <Card title={d.generalComposition.title} accent="indigo">
          <SimpleTable headers={d.generalComposition.headers || []} minW={500}>
            {d.generalComposition.rows?.map((row: any, i: number) => (
              <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
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
          <SimpleTable headers={d.speciesDifferences.headers || []} minW={600}>
            {d.speciesDifferences.rows?.map((row: any, i: number) => (
              <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
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
      {d.water && (
        <Card title={d.water.title} accent="slate">
          <P>{d.water.p1}</P>
          {d.water.forms?.map((form: any, i: number) => (
            <div key={i} className="mt-3 bg-white rounded-lg p-3 border border-slate-200">
              <p className="text-xs font-bold text-slate-800 mb-1">{form.name}</p>
              <P>{form.desc}</P>
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
    <div className="space-y-5">
      <SectionHead title={d.title || "Mammary Gland"} icon={Cpu} />
      {d.structure && (
        <Card title={d.structure.title} accent="rose">
          <P>{d.structure.p1}</P>
          {d.structure.structureLevels?.map((lvl: any, i: number) => (
            <div key={i} className="mt-2 flex gap-2 items-start">
              <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-rose-400" />
              <p className="text-xs leading-5 text-slate-700" style={{ wordBreak: "break-word" }}>
                <strong className="text-rose-700">{lvl.level}: </strong>{lvl.desc}
              </p>
            </div>
          ))}
          {d.structure.p2 && <P className="mt-2">{d.structure.p2}</P>}
        </Card>
      )}
      {d.physiology && (
        <Card title={d.physiology.title} accent="teal">
          <P>{d.physiology.p1}</P>
          {d.physiology.secretoryPathways?.map((path: any, i: number) => (
            <div key={i} className="mt-2 bg-white rounded p-3 border-l-2 border-teal-400">
              <p className="text-xs font-bold text-teal-700 mb-1">{path.name}</p>
              <P>{path.desc}</P>
            </div>
          ))}
          {d.physiology.ejectionTitle && (
            <div className="mt-4 bg-slate-900 rounded-xl p-4 text-green-300">
              <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">{d.physiology.ejectionTitle}</p>
              <p className="text-xs leading-5 text-green-300" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {d.physiology.ejectionText}
              </p>
            </div>
          )}
          {d.physiology.precursors && (
            <div className="mt-4">
              <p className="text-xs font-bold text-teal-800 mb-2">{d.physiology.precursors.title}</p>
              <SimpleTable headers={d.physiology.precursors.headers || []} minW={480}>
                {d.physiology.precursors.rows?.map((row: any, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
                    <Td highlight nowrap>{row.constituent}</Td>
                    <Td>{row.plasma}</Td>
                    <Td>{row.milk}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
          {d.physiology.hormones && (
            <div className="mt-4">
              <p className="text-xs font-bold text-teal-800 mb-2">{d.physiology.hormones.title}</p>
              <P>{d.physiology.hormones.p1}</P>
              <div className="mt-2 space-y-2">
                {d.physiology.hormones.hormoneList?.map((h: any, i: number) => (
                  <div key={i} className="bg-amber-50 rounded p-3 border border-amber-200">
                    <p className="text-xs font-bold text-amber-800 mb-1">{h.name}</p>
                    <P>{h.desc}</P>
                  </div>
                ))}
              </div>
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
    <div className="space-y-5">
      <SectionHead title={d.title} icon={Dna} />
      {d.overview && (
        <Card title={d.overview.title} accent="teal">
          <P dangerouslySetInnerHTML={{ __html: d.overview.p1 }} />
          {d.overview.aminoAcidProfile && (
            <div className="mt-3">
              <p className="text-xs font-bold text-teal-800 mb-2">{d.overview.aminoAcidProfile.title}</p>
              <SimpleTable headers={d.overview.aminoAcidProfile.headers || []} minW={480}>
                {d.overview.aminoAcidProfile.rows?.map((row: any, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
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
      {d.casein && (
        <Card title={d.casein.title} accent="indigo">
          <P dangerouslySetInnerHTML={{ __html: d.casein.p1 }} />
          {d.casein.micelleModels?.map((m: any, i: number) => (
            <div key={i} className="mt-2 bg-indigo-50 p-3 rounded border-l-2 border-indigo-400">
              <p className="text-xs font-bold text-indigo-700 mb-1">{m.name}</p>
              <P>{m.desc}</P>
            </div>
          ))}
          {d.casein.fractionsTitle && (
            <p className="mt-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-300 pb-1">{d.casein.fractionsTitle}</p>
          )}
          <div className="mt-2 space-y-2">
            {d.casein.fractions?.map((f: any, i: number) => (
              <div key={i} className="bg-white p-3 rounded border border-indigo-100">
                <p className="text-xs font-bold text-indigo-600 mb-1">{f.name}</p>
                <P>{f.desc}</P>
              </div>
            ))}
          </div>
          {d.casein.coagulationTitle && (
            <p className="mt-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-300 pb-1">{d.casein.coagulationTitle}</p>
          )}
          {d.casein.coagulationText && <P className="mt-2">{d.casein.coagulationText}</P>}
          <div className="mt-2 space-y-2">
            {d.casein.coagulationTypes?.map((t: any, i: number) => (
              <div key={i} className="bg-slate-50 p-3 rounded border-l-2 border-slate-400">
                <p className="text-xs font-bold text-slate-700 mb-1">{t.name}</p>
                <P dangerouslySetInnerHTML={{ __html: t.desc }} />
              </div>
            ))}
          </div>
        </Card>
      )}
      {d.whey && (
        <Card title={d.whey.title} accent="emerald">
          <P dangerouslySetInnerHTML={{ __html: d.whey.p1 }} />
          {d.whey.fractionsTitle && (
            <p className="mt-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-300 pb-1">{d.whey.fractionsTitle}</p>
          )}
          <div className="mt-2 space-y-2">
            {d.whey.fractions?.map((f: any, i: number) => (
              <div key={i} className="bg-emerald-50 p-3 rounded border-l-2 border-emerald-400">
                <p className="text-xs font-bold text-emerald-700 mb-1">{f.name}</p>
                <P dangerouslySetInnerHTML={{ __html: f.desc }} />
              </div>
            ))}
          </div>
        </Card>
      )}
      {d.bioactivePeptides && (
        <Card title={d.bioactivePeptides.title} accent="amber">
          <P>{d.bioactivePeptides.p1}</P>
          <div className="mt-2 space-y-2">
            {d.bioactivePeptides.peptideCategories?.map((cat: any, i: number) => (
              <div key={i} className="bg-amber-50 p-3 rounded border border-amber-200">
                <p className="text-xs font-bold text-amber-800 mb-1">{cat.name}</p>
                <P>{cat.desc}</P>
              </div>
            ))}
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
    <div className="space-y-5">
      <SectionHead title={d.title} icon={Droplets} />
      {d.introduction && (
        <Card title={d.introduction.title} accent="amber">
          {["p1","p2","p3"].map(k => d.introduction[k] && <P key={k}>{d.introduction[k]}</P>)}
        </Card>
      )}
      {d.characteristics && (
        <Card title={d.characteristics.title} accent="teal">
          {["p1","p2","p3"].map(k => d.characteristics[k] && <P key={k}>{d.characteristics[k]}</P>)}
          {d.characteristics.fattyAcidTable && (
            <div className="mt-3">
              <p className="text-xs font-bold text-teal-800 mb-2">{d.characteristics.fattyAcidTable.title}</p>
              <SimpleTable headers={d.characteristics.fattyAcidTable.headers || []} minW={500}>
                {d.characteristics.fattyAcidTable.rows?.map((r: any, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
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
      {d.mfgm?.architecture && (
        <Card title={d.mfgm.title} accent="indigo">
          {["p1","p2"].map(k => d.mfgm.architecture[k] && <P key={k}>{d.mfgm.architecture[k]}</P>)}
          {d.mfgm.architecture.compositionTable && (
            <div className="mt-3">
              <SimpleTable headers={d.mfgm.architecture.compositionTable.headers || []} minW={420}>
                {d.mfgm.architecture.compositionTable.rows?.map((r: any, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
                    <Td highlight nowrap>{r.component}</Td>
                    <Td nowrap>{r.percent}</Td>
                    <Td>{r.function}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
          {d.mfgm.architecture.p4 && <P className="mt-3">{d.mfgm.architecture.p4}</P>}
        </Card>
      )}
      {d.stability?.creaming && (
        <Card title={d.stability.title} accent="rose">
          <p className="text-xs font-bold text-rose-700 mb-2">{d.stability.creaming.title}</p>
          <P>{d.stability.creaming.p1}</P>
          {d.stability.creaming.stokesLaw && (
            <div className="mt-3 bg-slate-900 text-green-400 rounded-xl p-3">
              <p className="font-mono text-xs font-bold mb-2 break-all">{d.stability.creaming.stokesLaw.formula}</p>
              {d.stability.creaming.stokesLaw.terms?.map((t: string, i: number) => (
                <p key={i} className="text-[10px] text-green-300 leading-4">{t}</p>
              ))}
              {d.stability.creaming.stokesLaw.explanation && (
                <p className="mt-2 text-[10px] text-green-200 leading-4" style={{ whiteSpace: "pre-wrap" }}>
                  {d.stability.creaming.stokesLaw.explanation}
                </p>
              )}
            </div>
          )}
          <P className="mt-2">{d.stability.creaming.p2}</P>
          <P className="mt-2">{d.stability.creaming.p3}</P>
          {d.stability.homogenization && (
            <>
              <p className="mt-4 text-xs font-bold text-rose-700 border-t border-rose-200 pt-3 mb-2">{d.stability.homogenization.title}</p>
              <P>{d.stability.homogenization.p2}</P>
              <div className="mt-2 space-y-2">
                {d.stability.homogenization.consequences?.map((c: any, i: number) => (
                  <div key={i} className="bg-rose-50 p-2 rounded border border-rose-100">
                    <p className="text-xs font-semibold text-rose-700 mb-1">{c.name}</p>
                    <P>{c.desc}</P>
                  </div>
                ))}
              </div>
            </>
          )}
        </Card>
      )}
      {(["autoxidation","crystallization","butterChemistry","gheeChemistry","lipolysis","cholesterol","phospholipids"] as const).map((key) => {
        const section = (d as any)[key];
        if (!section) return null;
        const accentMap: Record<string, any> = {
          autoxidation: "rose", crystallization: "violet", butterChemistry: "amber",
          gheeChemistry: "emerald", lipolysis: "rose", cholesterol: "slate", phospholipids: "indigo",
        };
        return (
          <Card key={key} title={section.title || key} accent={accentMap[key]}>
            {Object.entries(section).map(([k, v]) => {
              if (k === "title") return null;
              if (typeof v === "string") return <P key={k} className="mt-1">{v as string}</P>;
              if (typeof v === "object" && v !== null) {
                const obj = v as any;
                if (typeof obj.p1 === "string") return <P key={k} className="mt-1">{obj.p1}</P>;
              }
              return null;
            })}
          </Card>
        );
      })}
    </div>
  );
}

function LactoseContent({ content }: { content: any }) {
  const d = content?.lactose;
  if (!d) return null;
  const props = d.properties;
  return (
    <div className="space-y-5">
      <SectionHead title={d.title} icon={Atom} />
      {props && (
        <Card title={props.title} accent="teal">
          <P>{props.p1}</P>
          <P>{props.p2}</P>
          {props.crystallizationTitle && (
            <p className="mt-3 text-xs font-bold text-teal-800 border-t border-teal-200 pt-2">{props.crystallizationTitle}</p>
          )}
          <P>{props.crystallizationText1}</P>
          <P>{props.crystallizationText2}</P>
          {props.propertiesTable && (
            <div className="mt-3">
              <SimpleTable headers={props.propertiesTable.headers || []} minW={380}>
                {props.propertiesTable.rows?.map((row: any, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
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
      {d.maillardReaction && (
        <Card title={d.maillardReaction.title} accent="rose">
          <P>{d.maillardReaction.overview?.p1}</P>
          {d.maillardReaction.stages && (
            <>
              <p className="mt-3 text-xs font-bold text-rose-700">{d.maillardReaction.stages.title}</p>
              <div className="mt-2 space-y-2">
                {d.maillardReaction.stages.stagesList?.map((s: any, i: number) => (
                  <div key={i} className="bg-rose-50 p-3 rounded border border-rose-100">
                    <p className="text-xs font-bold text-rose-800 mb-1">{s.name}</p>
                    <P>{s.desc}</P>
                  </div>
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
    <div className="space-y-5">
      <SectionHead title={d.title} icon={Gem} />
      {d.introduction && (
        <Card title={d.introduction.title} accent="emerald">
          <P>{d.introduction.p1}</P>
          <P>{d.introduction.p2}</P>
          {d.introduction.p3 && <P className="font-semibold text-emerald-700">{d.introduction.p3}</P>}
        </Card>
      )}
      {d.composition && (
        <Card title={d.composition.title} accent="emerald">
          <P>{d.composition.two_phase_distribution?.p1}</P>
          <P>{d.composition.two_phase_distribution?.p2}</P>
          <P>{d.composition.calcium_detail?.p1}</P>
          <P>{d.composition.calcium_detail?.p2}</P>
          {d.composition.p1 && <P>{d.composition.p1}</P>}
          {d.composition.p2 && <P>{d.composition.p2}</P>}
        </Card>
      )}
      {d.salt_balance && (
        <Card title={d.salt_balance.title} accent="indigo">
          <P>{d.salt_balance.original_theory?.p1 || d.salt_balance.p1}</P>
          <P>{d.salt_balance.factors_affecting?.p1}</P>
          <P>{d.salt_balance.factors_affecting?.p3}</P>
        </Card>
      )}
      {d.trace && (
        <Card title={d.trace.title} accent="amber">
          <P>{d.trace.p1}</P>
        </Card>
      )}
    </div>
  );
}

function VitaminsEnzymesContent({ content }: { content: any }) {
  const d = content?.vitaminsEnzymes;
  if (!d) return null;
  return (
    <div className="space-y-5">
      <SectionHead title={d.title} icon={FlaskConical} />
      {d.vitamins && (
        <Card title={d.vitamins.title} accent="amber">
          <P>{d.vitamins.p1}</P>
        </Card>
      )}
      {d.enzymes && (
        <Card title={d.enzymes.title} accent="teal">
          {d.enzymes.overview && (
            <>
              <p className="text-xs font-bold text-teal-800 mb-1">{d.enzymes.overview.title}</p>
              <P>{d.enzymes.overview.p1}</P>
              {d.enzymes.overview.p2 && <P>{d.enzymes.overview.p2}</P>}
            </>
          )}
          {d.enzymes.rows ? (
            <div className="mt-3">
              <SimpleTable headers={d.enzymes.headers || []} minW={440}>
                {d.enzymes.rows.map((row: any, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
                    <Td highlight nowrap>{row.name}</Td>
                    <Td>{row.stability}</Td>
                    <Td>{row.details}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              {["alkaline_phosphatase","lactoperoxidase","plasmin","lipoprotein_lipase","catalase"].map((key) => {
                const enz = (d.enzymes as any)[key];
                if (!enz) return null;
                return (
                  <div key={key} className="bg-slate-50 p-3 rounded border border-slate-200">
                    <p className="text-xs font-bold text-slate-700 mb-1">{enz.title}</p>
                    <P>{enz.basic_info?.p1 || enz.lp_system?.p1 || enz.thermal_stability?.p1 || enz.p1}</P>
                  </div>
                );
              })}
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

function PropertiesContent({ content }: { content: any }) {
  const d = content?.properties;
  if (!d) return null;
  return (
    <div className="space-y-5">
      <SectionHead title={d.title} icon={TestTube} />
      {d.overview && (
        <Card title={d.overview.title} accent="teal">
          <P>{d.overview.p1}</P>
        </Card>
      )}
      {d.rows && (
        <Card title="Property Reference" accent="indigo">
          <SimpleTable headers={d.headers || []} minW={460}>
            {d.rows.map((prop: any, i: number) => (
              <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
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

function OtherContent({ content }: { content: any }) {
  const d = content?.other;
  if (!d) return null;
  return (
    <div className="space-y-5">
      <SectionHead title={d.title} icon={FlaskConical} />
      {d.minor && (
        <Card title={d.minor.title} accent="slate">
          <div className="space-y-3">
            {d.minor.list?.map((item: any, i: number) => (
              <div key={i} className="bg-white p-3 rounded border border-slate-200">
                <p className="text-xs font-bold text-slate-700 mb-1">{item.name}</p>
                <P>{item.desc}</P>
              </div>
            ))}
          </div>
        </Card>
      )}
      {d.contaminants && (
        <Card title={d.contaminants.title} accent="rose">
          <P className="text-red-700 font-medium">{d.contaminants.p1}</P>
          <div className="mt-3 space-y-2">
            {d.contaminants.list?.map((item: any, i: number) => (
              <div key={i} className="bg-rose-50 p-3 rounded border border-rose-200">
                <p className="text-xs font-bold text-rose-800 mb-1">{item.name}</p>
                <P>{item.desc}</P>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

// Generic fallback for new topics that may exist in content
function GenericContent({ data, icon }: { data: any; icon: React.ElementType }) {
  if (!data) return null;
  return (
    <div className="space-y-5">
      <SectionHead title={data.title || "Topic"} icon={icon} />
      {Object.entries(data).map(([key, value]) => {
        if (key === "title") return null;
        if (typeof value === "string") {
          return (
            <Card key={key} accent="teal">
              <P>{value}</P>
            </Card>
          );
        }
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          const obj = value as any;
          return (
            <Card key={key} title={obj.title || key} accent="indigo">
              {Object.entries(obj).map(([k, v]) => {
                if (k === "title") return null;
                if (typeof v === "string") return <P key={k}>{v}</P>;
                if (Array.isArray(v)) {
                  return (
                    <div key={k} className="mt-2 space-y-2">
                      {v.map((item: any, i: number) => (
                        <div key={i} className="bg-white p-3 rounded border border-slate-200">
                          {typeof item === "string" ? (
                            <P>{item}</P>
                          ) : (
                            <>
                              {item.name && <p className="text-xs font-bold text-slate-700 mb-1">{item.name}</p>}
                              {item.title && <p className="text-xs font-bold text-slate-700 mb-1">{item.title}</p>}
                              {item.desc && <P>{item.desc}</P>}
                              {item.p1 && <P>{item.p1}</P>}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                }
                if (typeof v === "object" && v !== null) {
                  const inner = v as any;
                  if (inner.p1) return <P key={k} className="mt-1">{inner.p1}</P>;
                }
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


// ─────────────────────────────────────────────────────────────────
// Topic Content Renderers
// ─────────────────────────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string }>> = {
  composition: ({ content }) => <CompositionContent content={content} />,
  mammaryGland: ({ content }) => <MammaryGlandContent content={content} />,
  proteins: ({ content }) => <ProteinsContent content={content} />,
  fat: ({ content }) => <FatContent content={content} />,
  lactose: ({ content }) => <LactoseContent content={content} />,
  minerals: ({ content }) => <MineralsContent content={content} />,
  vitaminsEnzymes: ({ content }) => <VitaminsEnzymesContent content={content} />,
  properties: ({ content }) => <PropertiesContent content={content} />,
  other: ({ content }) => <OtherContent content={content} />,
};

// ─────────────────────────────────────────────────────────────────
// Topic Configuration
// ─────────────────────────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "मुख्य रसायन (Core Chemistry)" : "Core Chemistry",
      groupIcon: Atom,
      topics: [
        { value: "composition", title: c.composition?.title, subtitle: "Milk phases & composition", icon: BookOpen, accent: "blue", badge: "Foundation", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
        { value: "mammaryGland", title: c.mammaryGland?.title, subtitle: "Biosynthesis & physiology", icon: Cpu, accent: "rose", badge: "Biology", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
        { value: "proteins", title: c.proteins?.title, subtitle: "Casein, whey & peptides", icon: Dna, accent: "purple", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
        { value: "fat", title: c.fat?.title, subtitle: "Lipids, MFGM & stability", icon: Droplets, accent: "amber", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
      ].filter(t => t.title),
    },
    {
      groupLabel: lang === "hi" ? "घटक और गुण (Components & Properties)" : "Components & Properties",
      groupIcon: FlaskConical,
      topics: [
        { value: "lactose", title: c.lactose?.title, subtitle: "Sugar & Maillard reaction", icon: Atom, accent: "cyan", badge: "Sugar", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "minerals", title: c.minerals?.title, subtitle: "Calcium, phosphorus & salts", icon: Gem, accent: "emerald", badge: "Essential", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
        { value: "vitaminsEnzymes", title: c.vitaminsEnzymes?.title, subtitle: "Enzymes & micronutrients", icon: FlaskConical, accent: "orange", badge: "Nutrition", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
        { value: "properties", title: c.properties?.title, subtitle: "pH, density & colligative", icon: TestTube, accent: "indigo", badge: "Physics", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
        { value: "other", title: c.other?.title, subtitle: "Minor components & contaminants", icon: Layers, accent: "slate", badge: "Misc", badgeVariant: "secondary" as const, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400" },
      ].filter(t => t.title),
    },
    {
      groupLabel: lang === "hi" ? "उन्नत विज्ञान (Advanced Science)" : "Advanced Science",
      groupIcon: Microscope,
      topics: [
        { value: "microbiology", title: c.microbiology?.title, subtitle: "Pathogens & safety", icon: Microscope, accent: "green", badge: "Micro", badgeVariant: "secondary" as const, colorClass: "text-green-600", bgClass: "bg-green-50 hover:bg-green-100", borderClass: "border-green-200 hover:border-green-400" },
        { value: "thermal", title: c.thermal?.title, subtitle: "Heat treatment science", icon: Thermometer, accent: "red", badge: "Heat", badgeVariant: "destructive" as const, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400" },
        { value: "fermentation", title: c.fermentation?.title, subtitle: "LAB & fermented products", icon: Beaker, accent: "purple", badge: "Process", badgeVariant: "secondary" as const, colorClass: "text-fuchsia-600", bgClass: "bg-fuchsia-50 hover:bg-fuchsia-100", borderClass: "border-fuchsia-200 hover:border-fuchsia-400" },
        { value: "analytical", title: c.analytical?.title, subtitle: "Testing & instruments", icon: BarChart3, accent: "sky", badge: "Lab", badgeVariant: "secondary" as const, colorClass: "text-sky-600", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400" },
        { value: "quality", title: c.quality?.title, subtitle: "Standards & QC", icon: Shield, accent: "teal", badge: "QC", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
        { value: "colloidal", title: c.colloidal?.title, subtitle: "Colloidal science", icon: Activity, accent: "indigo", badge: "Science", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
        { value: "processing", title: c.processing?.title, subtitle: "Industrial technology", icon: Zap, accent: "amber", badge: "Industry", badgeVariant: "secondary" as const, colorClass: "text-yellow-600", bgClass: "bg-yellow-50 hover:bg-yellow-100", borderClass: "border-yellow-200 hover:border-yellow-400" },
        { value: "bioactive", title: c.bioactive?.title, subtitle: "Bioactive compounds", icon: Dna, accent: "rose", badge: "Bio", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
        { value: "thermodynamics", title: c.thermodynamics?.title, subtitle: "Energy & phase transitions", icon: Activity, accent: "cyan", badge: "Thermo", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
      ].filter(t => t.title),
    },
  ].filter(g => g.topics.length > 0);
};

// ─────────────────────────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────────────────────────
export function MilkChemistryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(milkChemistryContent);
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

  // For generic topics that don't have dedicated components
  const renderContent = () => {
    if (!selectedTopicInfo) return null;
    if (ActiveComponent) {
      return <ActiveComponent content={content} accent={selectedTopicInfo.accent} />;
    }
    // Fallback generic renderer
    const topicData = (content as any)[selectedTopicInfo.value];
    if (!topicData) return null;
    return <GenericContent data={topicData} icon={selectedTopicInfo.icon} />;
  };

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
        <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-950 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🧪 {(content as any).mainTitle || "Milk Chemistry"}
            </DialogTitle>
            <DialogDescription className={`text-center text-teal-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo ? selectedTopicInfo.subtitle : ((content as any).description || "Advanced Dairy Chemistry · Physics · Microbiology")}
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
              <span className="inline-flex items-center gap-1 bg-teal-500/30 text-teal-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-teal-500/40">
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
        {selectedTopicInfo ? (

          /* ── Topic Detail View ─────────────────── */
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50 strict-html-wrap">
            <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full">
              {renderContent()}
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
                        <group.groupIcon className="w-4 h-4 text-teal-500" />
                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-600">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-teal-200 to-transparent" />
                      <span className="text-[10px] text-teal-600 font-medium tabular-nums bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
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
