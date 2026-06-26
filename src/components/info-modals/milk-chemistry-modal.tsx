"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
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

// ─── STYLES: Mobile-Proof Zero Overflow Engine ───────────────────────────────
const CONTENT_STYLES = `
  .strict-html-wrap {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .strict-html-wrap * {
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
  }
  .dairy-content-body {
    width: 100% !important;
    max-width: 100% !important;
  }
`;

// ─────────────────────────────────────────────────────────────────
// PRIMITIVE LAYOUT HELPERS (Enhanced for Zero Mobile Bleed)
// ─────────────────────────────────────────────────────────────────

const HScroll = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-full rounded-xl border border-slate-200 overflow-x-auto shadow-sm my-4 bg-white"
    style={{
      WebkitOverflowScrolling: "touch",
      maxWidth: "100%",
    }}
  >
    <div className="inline-block min-w-full align-middle">
      {children}
    </div>
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
        className={`text-xs sm:text-sm leading-relaxed text-slate-700 mb-3 strict-html-wrap ${className}`}
        style={style}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }
  return (
    <p className={`text-xs sm:text-sm leading-relaxed text-slate-700 mb-3 strict-html-wrap ${className}`} style={style}>
      {children}
    </p>
  );
};

const accentStyles: Record<string, { border: string; bg: string; head: string; badge: string }> = {
  teal:    { border: "border-teal-500",    bg: "bg-teal-50/60",    head: "text-teal-800",    badge: "bg-teal-100 text-teal-700" },
  amber:   { border: "border-amber-500",   bg: "bg-amber-50/60",   head: "text-amber-800",   badge: "bg-amber-100 text-amber-700" },
  rose:    { border: "border-rose-500",    bg: "bg-rose-50/60",    head: "text-rose-800",    badge: "bg-rose-100 text-rose-700" },
  indigo:  { border: "border-indigo-500",  bg: "bg-indigo-50/60",  head: "text-indigo-800",  badge: "bg-indigo-100 text-indigo-700" },
  emerald: { border: "border-emerald-500", bg: "bg-emerald-50/60", head: "text-emerald-800", badge: "bg-emerald-100 text-emerald-700" },
  slate:   { border: "border-slate-400",   bg: "bg-slate-50/60",   head: "text-slate-800",   badge: "bg-slate-100 text-slate-700" },
  violet:  { border: "border-violet-500",  bg: "bg-violet-50/60",  head: "text-violet-800",  badge: "bg-violet-100 text-violet-700" },
  cyan:    { border: "border-cyan-500",    bg: "bg-cyan-50/60",    head: "text-cyan-800",    badge: "bg-cyan-100 text-cyan-700" },
  orange:  { border: "border-orange-500",  bg: "bg-orange-50/60",  head: "text-orange-800",  badge: "bg-orange-100 text-orange-700" },
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
      className={`border-l-4 ${c.border} ${c.bg} rounded-r-xl px-3 py-3 sm:px-5 sm:py-5 shadow-sm w-full max-w-full overflow-hidden box-border mb-4`}
    >
      {title && (
        <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2.5 ${c.head} break-words`}>
          {title}
        </p>
      )}
      <div className="space-y-3 strict-html-wrap w-full max-w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const SectionHead = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="flex items-center gap-2.5 mt-4 mb-4 pb-2 border-b border-slate-200 w-full max-w-full overflow-hidden">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-indigo-500 to-blue-600 shadow-sm">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </div>
    <h2 className="text-sm sm:text-lg font-bold text-slate-800 font-headline leading-tight min-w-0 flex-1 break-words">
      {title}
    </h2>
  </div>
);

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="bg-slate-800 text-slate-100 text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wide border-b border-slate-700 whitespace-nowrap">
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
    className={`px-3 py-2 border-b border-slate-200 align-top text-xs leading-relaxed ${
      highlight ? "bg-slate-50/80 font-bold text-slate-800" : "bg-white text-slate-700"
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
    <table className="w-full text-xs border-collapse bg-white table-auto" style={{ minWidth: `${minW}px` }}>
      <thead>
        <tr>{headers.map((h) => <Th key={h}>{h}</Th>)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </HScroll>
);

// ─────────────────────────────────────────────────────────────────
// CONTENT SECTION COMPONENTS
// ─────────────────────────────────────────────────────────────────

function CompositionContent({ content }: { content: any }) {
  const d = content?.composition;
  if (!d) return null;
  return (
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
      <SectionHead title={d.title || "Composition"} icon={BookOpen} />
      {d.whatIsMilk && (
        <Card title={d.whatIsMilk.title} accent="teal">
          {d.whatIsMilk.fssaiDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.fssaiDef }} />}
          {d.whatIsMilk.usaDef && <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.usaDef }} />}
          {d.whatIsMilk.p1 && <P>{d.whatIsMilk.p1}</P>}
          {d.whatIsMilk.phases?.map((ph: string, i: number) => (
            <div key={i} className="pl-3 border-l-2 border-teal-400 mt-2 strict-html-wrap text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: ph }} />
          ))}
        </Card>
      )}
      {d.generalComposition && (
        <Card title={d.generalComposition.title} accent="indigo">
          <SimpleTable headers={d.generalComposition.headers || []} minW={450}>
            {d.generalComposition.rows?.map((row: any, i: number) => (
              <tr key={i} className="hover:bg-slate-50/50">
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
              <tr key={i} className="hover:bg-slate-50/50">
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
            <div key={i} className="mt-3 bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm w-full max-w-full overflow-hidden">
              <p className="text-xs sm:text-sm font-bold text-slate-800 mb-1 break-words">{form.name}</p>
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
      <SectionHead title={d.title || "Mammary Gland"} icon={Cpu} />
      {d.structure && (
        <Card title={d.structure.title} accent="rose">
          <P>{d.structure.p1}</P>
          {d.structure.structureLevels?.map((lvl: any, i: number) => (
            <div key={i} className="mt-2 flex gap-2.5 items-start bg-white p-3 rounded-xl border border-rose-100 w-full max-w-full overflow-hidden">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-rose-400" />
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 min-w-0 flex-1 break-words">
                <strong className="text-rose-700">{lvl.level}: </strong>{lvl.desc}
              </p>
            </div>
          ))}
          {d.structure.p2 && <P className="mt-2.5">{d.structure.p2}</P>}
        </Card>
      )}
      {d.physiology && (
        <Card title={d.physiology.title} accent="teal">
          <P>{d.physiology.p1}</P>
          {d.physiology.secretoryPathways?.map((path: any, i: number) => (
            <div key={i} className="mt-3 bg-white rounded-xl p-3 sm:p-4 border-l-4 border-teal-400 shadow-sm w-full max-w-full overflow-hidden">
              <p className="text-xs sm:text-sm font-bold text-teal-800 mb-1 break-words">{path.name}</p>
              <P>{path.desc}</P>
            </div>
          ))}
          {d.physiology.ejectionTitle && (
            <div className="mt-4 bg-slate-900 rounded-xl p-4 sm:p-5 border border-slate-800 shadow-md w-full max-w-full overflow-hidden">
              <p className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-2">{d.physiology.ejectionTitle}</p>
              <p className="text-xs sm:text-sm leading-relaxed text-green-50" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", overflowWrap: "anywhere" }}>
                {d.physiology.ejectionText}
              </p>
            </div>
          )}
          {d.physiology.precursors && (
            <div className="mt-5 w-full max-w-full overflow-hidden">
              <p className="text-xs sm:text-sm font-bold text-teal-800 mb-2 break-words">{d.physiology.precursors.title}</p>
              <SimpleTable headers={d.physiology.precursors.headers || []} minW={450}>
                {d.physiology.precursors.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <Td highlight nowrap>{row.constituent}</Td>
                    <Td>{row.plasma}</Td>
                    <Td>{row.milk}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          )}
          {d.physiology.hormones && (
            <div className="mt-5 w-full max-w-full overflow-hidden">
              <p className="text-xs sm:text-sm font-bold text-teal-800 mb-2 break-words">{d.physiology.hormones.title}</p>
              <P>{d.physiology.hormones.p1}</P>
              <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
                {d.physiology.hormones.hormoneList?.map((h: any, i: number) => (
                  <div key={i} className="bg-amber-50/80 rounded-xl p-3 sm:p-4 border border-amber-200 w-full max-w-full overflow-hidden">
                    <p className="text-xs sm:text-sm font-bold text-amber-800 mb-1 break-words">{h.name}</p>
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
      <SectionHead title={d.title} icon={Dna} />
      {d.overview && (
        <Card title={d.overview.title} accent="teal">
          <P dangerouslySetInnerHTML={{ __html: d.overview.p1 }} />
          {d.overview.aminoAcidProfile && (
            <div className="mt-4 w-full max-w-full overflow-hidden">
              <p className="text-xs sm:text-sm font-bold text-teal-800 mb-2 break-words">{d.overview.aminoAcidProfile.title}</p>
              <SimpleTable headers={d.overview.aminoAcidProfile.headers || []} minW={450}>
                {d.overview.aminoAcidProfile.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50">
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
            <div key={i} className="mt-3 bg-indigo-50/80 p-3 sm:p-4 rounded-xl border-l-4 border-indigo-400 w-full max-w-full overflow-hidden">
              <p className="text-xs sm:text-sm font-bold text-indigo-800 mb-1 break-words">{m.name}</p>
              <P>{m.desc}</P>
            </div>
          ))}
          {d.casein.fractionsTitle && (
            <p className="mt-5 text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2 break-words">{d.casein.fractionsTitle}</p>
          )}
          <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
            {d.casein.fractions?.map((f: any, i: number) => (
              <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-indigo-100 shadow-sm w-full max-w-full overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-indigo-700 mb-1 break-words">{f.name}</p>
                <P>{f.desc}</P>
              </div>
            ))}
          </div>
          {d.casein.coagulationTitle && (
            <p className="mt-5 text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2 break-words">{d.casein.coagulationTitle}</p>
          )}
          {d.casein.coagulationText && <P className="mt-3">{d.casein.coagulationText}</P>}
          <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
            {d.casein.coagulationTypes?.map((t: any, i: number) => (
              <div key={i} className="bg-slate-50 p-3 sm:p-4 rounded-xl border-l-4 border-slate-400 shadow-sm w-full max-w-full overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-slate-800 mb-1 break-words">{t.name}</p>
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
            <p className="mt-4 text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2 break-words">{d.whey.fractionsTitle}</p>
          )}
          <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
            {d.whey.fractions?.map((f: any, i: number) => (
              <div key={i} className="bg-emerald-50/80 p-3 sm:p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm w-full max-w-full overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-emerald-800 mb-1 break-words">{f.name}</p>
                <P dangerouslySetInnerHTML={{ __html: f.desc }} />
              </div>
            ))}
          </div>
        </Card>
      )}
      {d.bioactivePeptides && (
        <Card title={d.bioactivePeptides.title} accent="amber">
          <P>{d.bioactivePeptides.p1}</P>
          <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
            {d.bioactivePeptides.peptideCategories?.map((cat: any, i: number) => (
              <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-amber-200 shadow-sm w-full max-w-full overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-amber-800 mb-1 break-words">{cat.name}</p>
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
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
            <div className="mt-4 w-full max-w-full overflow-hidden">
              <p className="text-xs sm:text-sm font-bold text-teal-800 mb-2 break-words">{d.characteristics.fattyAcidTable.title}</p>
              <SimpleTable headers={d.characteristics.fattyAcidTable.headers || []} minW={480}>
                {d.characteristics.fattyAcidTable.rows?.map((r: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50">
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
            <div className="mt-4 w-full max-w-full overflow-hidden">
              <SimpleTable headers={d.mfgm.architecture.compositionTable.headers || []} minW={420}>
                {d.mfgm.architecture.compositionTable.rows?.map((r: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50">
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
          <p className="text-xs sm:text-sm font-bold text-rose-800 mb-2 break-words">{d.stability.creaming.title}</p>
          <P>{d.stability.creaming.p1}</P>
          {d.stability.creaming.stokesLaw && (
            <div className="mt-3 bg-slate-900 text-green-400 rounded-xl p-3 sm:p-4 shadow-sm overflow-x-auto w-full max-w-full">
              <p className="font-mono text-xs sm:text-[13px] font-bold mb-3 break-all text-white">{d.stability.creaming.stokesLaw.formula}</p>
              {d.stability.creaming.stokesLaw.terms?.map((t: string, i: number) => (
                <p key={i} className="text-[11px] sm:text-xs text-green-300 leading-relaxed mb-1 break-words">{t}</p>
              ))}
              {d.stability.creaming.stokesLaw.explanation && (
                <p className="mt-3 text-[11px] sm:text-xs text-green-100 leading-relaxed pt-2 border-t border-slate-700" style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", wordBreak: "break-word" }}>
                  {d.stability.creaming.stokesLaw.explanation}
                </p>
              )}
            </div>
          )}
          <P className="mt-3">{d.stability.creaming.p2}</P>
          <P className="mt-2">{d.stability.creaming.p3}</P>
          {d.stability.homogenization && (
            <>
              <p className="mt-5 text-xs sm:text-sm font-bold text-rose-800 border-t border-rose-200 pt-3 mb-2 break-words">{d.stability.homogenization.title}</p>
              <P>{d.stability.homogenization.p2}</P>
              <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
                {d.stability.homogenization.consequences?.map((c: any, i: number) => (
                  <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-rose-100 shadow-sm w-full max-w-full overflow-hidden">
                    <p className="text-xs sm:text-sm font-bold text-rose-800 mb-1 break-words">{c.name}</p>
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
      <SectionHead title={d.title} icon={Atom} />
      {props && (
        <Card title={props.title} accent="teal">
          <P>{props.p1}</P>
          <P>{props.p2}</P>
          {props.crystallizationTitle && (
            <p className="mt-4 text-xs sm:text-sm font-bold text-teal-800 border-t border-teal-200 pt-3 break-words">{props.crystallizationTitle}</p>
          )}
          <P>{props.crystallizationText1}</P>
          <P>{props.crystallizationText2}</P>
          {props.propertiesTable && (
            <div className="mt-4 w-full max-w-full overflow-hidden">
              <SimpleTable headers={props.propertiesTable.headers || []} minW={400}>
                {props.propertiesTable.rows?.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50">
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
              <p className="mt-4 text-xs sm:text-sm font-bold text-rose-800 break-words">{d.maillardReaction.stages.title}</p>
              <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
                {d.maillardReaction.stages.stagesList?.map((s: any, i: number) => (
                  <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-rose-100 shadow-sm w-full max-w-full overflow-hidden">
                    <p className="text-xs sm:text-sm font-bold text-rose-800 mb-1 break-words">{s.name}</p>
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
      <SectionHead title={d.title} icon={Gem} />
      {d.introduction && (
        <Card title={d.introduction.title} accent="emerald">
          <P>{d.introduction.p1}</P>
          <P>{d.introduction.p2}</P>
          {d.introduction.p3 && <p className="font-bold text-emerald-800 text-xs sm:text-sm break-words mb-2">{d.introduction.p3}</p>}
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
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
              <p className="text-xs sm:text-sm font-bold text-teal-800 mb-2 break-words">{d.enzymes.overview.title}</p>
              <P>{d.enzymes.overview.p1}</P>
              {d.enzymes.overview.p2 && <P>{d.enzymes.overview.p2}</P>}
            </>
          )}
          {d.enzymes.rows ? (
            <div className="mt-4 w-full max-w-full overflow-hidden">
              <SimpleTable headers={d.enzymes.headers || []} minW={440}>
                {d.enzymes.rows.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <Td highlight nowrap>{row.name}</Td>
                    <Td>{row.stability}</Td>
                    <Td>{row.details}</Td>
                  </tr>
                ))}
              </SimpleTable>
            </div>
          ) : (
            <div className="mt-4 space-y-3 w-full max-w-full overflow-hidden">
              {["alkaline_phosphatase","lactoperoxidase","plasmin","lipoprotein_lipase","catalase"].map((key) => {
                const enz = (d.enzymes as any)[key];
                if (!enz) return null;
                return (
                  <div key={key} className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm w-full max-w-full overflow-hidden">
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mb-1 break-words">{enz.title}</p>
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
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
              <tr key={i} className="hover:bg-slate-50/50">
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
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
      <SectionHead title={d.title} icon={Layers} />
      {d.minor && (
        <Card title={d.minor.title} accent="slate">
          <div className="space-y-3 w-full max-w-full overflow-hidden">
            {d.minor.list?.map((item: any, i: number) => (
              <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm w-full max-w-full overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-slate-800 mb-1 break-words">{item.name}</p>
                <P>{item.desc}</P>
              </div>
            ))}
          </div>
        </Card>
      )}
      {d.contaminants && (
        <Card title={d.contaminants.title} accent="rose">
          <P className="text-rose-700 font-bold">{d.contaminants.p1}</P>
          <div className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
            {d.contaminants.list?.map((item: any, i: number) => (
              <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-rose-200 shadow-sm w-full max-w-full overflow-hidden">
                <p className="text-xs sm:text-sm font-bold text-rose-800 mb-1 break-words">{item.name}</p>
                <P>{item.desc}</P>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function GenericContent({ data, icon: Icon }: { data: any; icon: React.ElementType }) {
  if (!data) return null;
  return (
    <div className="space-y-4 w-full max-w-full overflow-hidden dairy-content-body">
      <SectionHead title={data.title || "Topic"} icon={Icon} />
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
                    <div key={k} className="mt-3 space-y-3 w-full max-w-full overflow-hidden">
                      {v.map((item: any, i: number) => (
                        <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm w-full max-w-full overflow-hidden">
                          {typeof item === "string" ? (
                            <P>{item}</P>
                          ) : (
                            <>
                              {item.name && <p className="text-xs sm:text-sm font-bold text-slate-800 mb-1 break-words">{item.name}</p>}
                              {item.title && <p className="text-xs sm:text-sm font-bold text-slate-800 mb-1 break-words">{item.title}</p>}
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
                  if (inner.p1) return <P key={k} className="mt-2">{inner.p1}</P>;
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

const TopicCard = ({
  topic,
  tabTitle,
  onClick,
}: {
  topic: (typeof TOPICS)[0];
  tabTitle: string;
  onClick: (val: string) => void;
}) => (
  <button
    onClick={() => onClick(topic.key)}
    className={cn(
      "group relative flex flex-col items-center justify-center",
      "p-2.5 sm:p-5 bg-white hover:shadow-lg rounded-xl sm:rounded-2xl",
      "border border-gray-100 hover:border-transparent",
      "text-center aspect-square",
      "transition-all duration-300 transform hover:scale-[1.03]",
      "active:scale-95",
      "hover:ring-2 hover:ring-offset-1 hover:ring-indigo-200 box-border w-full overflow-hidden"
    )}
  >
    <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", topic.bgLight)} />
    
    {topic.badge && (
      <span className="absolute top-1.5 right-1.5 z-20 hidden xs:inline-block">
        <Badge variant="secondary" className={cn(
          "text-[8px] px-1 py-0 font-bold border shrink-0 scale-90 sm:scale-100", 
          topic.badge === "Advanced" ? "bg-purple-100 text-purple-700 border-purple-200" : "bg-blue-100 text-blue-700 border-blue-200"
        )}>
          {topic.badge}
        </Badge>
      </span>
    )}

    <div className="relative z-10">
      <div className={cn("p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br text-white mb-1.5 sm:mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md", topic.color)}>
        <topic.icon className="w-4 h-4 sm:w-6 sm:h-6" />
      </div>
    </div>
    <span className="relative z-10 font-bold text-[9px] sm:text-[13px] font-headline text-slate-600 group-hover:text-slate-800 transition-colors leading-tight line-clamp-2 px-0.5 break-words w-full">
      {tabTitle}
    </span>
    {topic.sub && (
      <span className="relative z-10 text-[8px] sm:text-[10px] text-slate-400 mt-1 line-clamp-1 group-hover:text-slate-500 transition-colors hidden md:block">
        {topic.sub}
      </span>
    )}
  </button>
);

const TOPICS = [
  { key: "composition", icon: BookOpen, color: "from-teal-400 to-teal-600", bgLight: "bg-teal-50 hover:bg-teal-100", Component: CompositionContent, badge: "Core", sub: "Basic Components", group: "core" },
  { key: "mammaryGland", icon: Cpu, color: "from-pink-400 to-rose-600", bgLight: "bg-pink-50 hover:bg-pink-100", Component: MammaryGlandContent, badge: "Core", sub: "Physiology & Structure", group: "core" },
  { key: "proteins", icon: Dna, color: "from-violet-400 to-purple-600", bgLight: "bg-violet-50 hover:bg-violet-100", Component: ProteinsContent, badge: "Core", sub: "Casein & Whey", group: "core" },
  { key: "fat", icon: Droplets, color: "from-amber-400 to-orange-500", bgLight: "bg-amber-50 hover:bg-amber-100", Component: FatContent, badge: "Core", sub: "MFGM & Characteristics", group: "core" },
  { key: "lactose", icon: Atom, color: "from-cyan-400 to-sky-600", bgLight: "bg-cyan-50 hover:bg-cyan-100", Component: LactoseContent, badge: "Core", sub: "Properties & Reactions", group: "core" },
  { key: "minerals", icon: Gem, color: "from-emerald-400 to-green-600", bgLight: "bg-emerald-50 hover:bg-emerald-100", Component: MineralsContent, badge: "Core", sub: "Salts & Trace Elements", group: "core" },
  { key: "vitaminsEnzymes", icon: FlaskConical, color: "from-orange-400 to-red-500", bgLight: "bg-orange-50 hover:bg-orange-100", Component: VitaminsEnzymesContent, badge: "Core", sub: "Biological Catalysts", group: "core" },
  { key: "properties", icon: TestTube, color: "from-indigo-400 to-blue-600", bgLight: "bg-indigo-50 hover:bg-indigo-100", Component: PropertiesContent, badge: "Core", sub: "Physical & Chemical", group: "core" },
  { key: "other", icon: Layers, color: "from-slate-400 to-slate-600", bgLight: "bg-slate-50 hover:bg-slate-100", Component: OtherContent, badge: "Core", sub: "Minor Constituents", group: "core" },
  
  { key: "microbiology", icon: Microscope, color: "from-lime-400 to-green-500", bgLight: "bg-lime-50 hover:bg-lime-100", Component: null, badge: "Advanced", sub: "Pathogens & Spoilage", group: "advanced" },
  { key: "thermal", icon: Thermometer, color: "from-red-400 to-rose-600", bgLight: "bg-red-50 hover:bg-red-100", Component: null, badge: "Advanced", sub: "Heat Processing", group: "advanced" },
  { key: "fermentation", icon: Beaker, color: "from-fuchsia-400 to-pink-600", bgLight: "bg-fuchsia-50 hover:bg-fuchsia-100", Component: null, badge: "Advanced", sub: "Lactic Acid Bacteria", group: "advanced" },
  { key: "analytical", icon: BarChart3, color: "from-sky-400 to-blue-600", bgLight: "bg-sky-50 hover:bg-sky-100", Component: null, badge: "Advanced", sub: "Testing Methods", group: "advanced" },
  { key: "quality", icon: Shield, color: "from-teal-400 to-cyan-600", bgLight: "bg-teal-50 hover:bg-teal-100", Component: null, badge: "Advanced", sub: "Safety & Standards", group: "advanced" },
  { key: "colloidal", icon: Activity, color: "from-indigo-400 to-violet-600", bgLight: "bg-indigo-50 hover:bg-indigo-100", Component: null, badge: "Advanced", sub: "Suspensions & Emulsions", group: "advanced" },
  { key: "processing", icon: Zap, color: "from-yellow-400 to-amber-600", bgLight: "bg-yellow-50 hover:bg-yellow-100", Component: null, badge: "Advanced", sub: "Industrial Ops", group: "advanced" },
  { key: "bioactive", icon: Dna, color: "from-rose-400 to-pink-600", bgLight: "bg-rose-50 hover:bg-rose-100", Component: null, badge: "Advanced", sub: "Health Benefits", group: "advanced" },
  { key: "thermodynamics", icon: Activity, color: "from-cyan-500 to-teal-600", bgLight: "bg-cyan-50 hover:bg-cyan-100", Component: null, badge: "Advanced", sub: "Energy Kinetics", group: "advanced" },
];

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

  const handleBack = () => setActiveKey(null);

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
    .map((t) => ({
      ...t,
      title: content?.[t.key]?.title || null,
    }))
    .filter((t) => t.title !== null);

  const filteredTopics = searchQuery.trim()
    ? validTopics.filter(t => (t.title || "").toLowerCase().includes(searchQuery.toLowerCase()) || (t.sub || "").toLowerCase().includes(searchQuery.toLowerCase()))
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

  const getDialogDescription = () => {
    if (activeTopic) return activeTopic.sub || "Detailed chemical composition and analysis.";
    return content?.subtitle || "Advanced Dairy Chemistry · Physics · Microbiology";
  };

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
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🧪 {content?.mainTitle || "Milk Chemistry"}
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {getDialogDescription()}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {validTopics.length} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <PackageCheck className="w-3 h-3 shrink-0" /> {groupedTopics.length} {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <Activity className="w-3 h-3 shrink-0" /> {lbl.langPill}
              </span>
            </div>
          )}

          {/* Back button Breadcrumb */}
          {activeTopic && (
            <div className="flex items-center gap-2 mt-1.5 sm:mt-2 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg shrink-0 text-xs px-2 h-6 sm:h-7"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                {content?.backToTopics || lbl.backToTopics}
              </Button>
              <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs min-w-0 overflow-hidden">
                <activeTopic.icon className="w-3 h-3 shrink-0" />
                <span className="font-medium truncate min-w-0">{activeTopic.title}</span>
                <Badge variant="secondary" className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none">
                  {activeTopic.badge}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {activeTopic ? (
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50 w-full max-w-full strict-html-wrap">
            <ScrollArea className="h-full w-full max-w-full" ref={scrollAreaRef}>
              <div className="p-3 sm:p-5 md:p-8 max-w-5xl mx-auto w-full pb-10 box-border overflow-hidden strict-html-wrap">
                {renderContent()}
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50/50 w-full max-w-full">
            
            {/* Elegant Search Bar */}
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-white border-b border-gray-100 shrink-0 shadow-sm z-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-between w-full">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search chemistry concepts..."
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-full px-4 py-1.5 sm:py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 transition-all placeholder:text-slate-400"
                />
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium whitespace-nowrap hidden sm:block">
                Showing {filteredTopics.length} entries
              </p>
            </div>

            <ScrollArea className="flex-1 h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 pb-10 max-w-6xl mx-auto space-y-6 sm:space-y-8 w-full box-border overflow-hidden">
                {groupedTopics.length > 0 ? (
                  groupedTopics.map((group) => (
                    <div key={group.groupLabel} className="w-full">
                      {/* Group header */}
                      <div className="flex items-center gap-2 mb-3 w-full">
                        <div className="flex items-center gap-1.5">
                          <group.groupIcon className="w-4 h-4 text-indigo-500" />
                          <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600">
                            {group.groupLabel}
                          </h3>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent" />
                        <span className="text-[10px] text-indigo-600 font-medium tabular-nums bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                          {lbl.topicsCount(group.topics.length)}
                        </span>
                      </div>

                      {/* Cards grid - Optimized for Small Mobile Viewports */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4 w-full">
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
                    <p className="text-sm font-medium">No concepts match "{searchQuery}"</p>
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
