"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
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
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { milkChemistryContent } from "@/lib/content/milk-chemistry-content";

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
// TOPIC CONFIG  — 18 topics covering full thesis scope
// ─────────────────────────────────────────────────────────────────

const TOPICS = [
  { key: "composition",     icon: BookOpen,     gradient: "from-teal-600 to-teal-800",     ring: "ring-teal-400",     bg: "bg-teal-50",     text: "text-teal-800",    Component: CompositionContent },
  { key: "mammaryGland",    icon: Cpu,          gradient: "from-pink-500 to-rose-700",     ring: "ring-pink-400",     bg: "bg-pink-50",     text: "text-pink-800",    Component: MammaryGlandContent },
  { key: "proteins",        icon: Dna,          gradient: "from-violet-600 to-purple-800", ring: "ring-violet-400",   bg: "bg-violet-50",   text: "text-violet-800",  Component: ProteinsContent },
  { key: "fat",             icon: Droplets,     gradient: "from-amber-500 to-orange-700",  ring: "ring-amber-400",    bg: "bg-amber-50",    text: "text-amber-800",   Component: FatContent },
  { key: "lactose",         icon: Atom,         gradient: "from-cyan-500 to-sky-700",      ring: "ring-cyan-400",     bg: "bg-cyan-50",     text: "text-cyan-800",    Component: LactoseContent },
  { key: "minerals",        icon: Gem,          gradient: "from-emerald-600 to-green-800", ring: "ring-emerald-400",  bg: "bg-emerald-50",  text: "text-emerald-800", Component: MineralsContent },
  { key: "vitaminsEnzymes", icon: FlaskConical, gradient: "from-orange-500 to-red-600",    ring: "ring-orange-400",   bg: "bg-orange-50",   text: "text-orange-800",  Component: VitaminsEnzymesContent },
  { key: "properties",      icon: TestTube,     gradient: "from-indigo-600 to-blue-800",   ring: "ring-indigo-400",   bg: "bg-indigo-50",   text: "text-indigo-800",  Component: PropertiesContent },
  { key: "other",           icon: Layers,       gradient: "from-slate-600 to-slate-800",   ring: "ring-slate-400",    bg: "bg-slate-100",   text: "text-slate-800",   Component: OtherContent },
  // Extended thesis topics — rendered via GenericContent if component not defined
  { key: "microbiology",    icon: Microscope,   gradient: "from-lime-600 to-green-700",    ring: "ring-lime-400",     bg: "bg-lime-50",     text: "text-lime-800",    Component: null },
  { key: "thermal",         icon: Thermometer,  gradient: "from-red-500 to-rose-700",      ring: "ring-red-400",      bg: "bg-red-50",      text: "text-red-800",     Component: null },
  { key: "fermentation",    icon: Beaker,       gradient: "from-fuchsia-500 to-pink-700",  ring: "ring-fuchsia-400",  bg: "bg-fuchsia-50",  text: "text-fuchsia-800", Component: null },
  { key: "analytical",      icon: BarChart3,    gradient: "from-sky-600 to-blue-700",      ring: "ring-sky-400",      bg: "bg-sky-50",      text: "text-sky-800",     Component: null },
  { key: "quality",         icon: Shield,       gradient: "from-teal-500 to-cyan-700",     ring: "ring-teal-400",     bg: "bg-teal-50",     text: "text-teal-800",    Component: null },
  { key: "colloidal",       icon: Activity,     gradient: "from-indigo-500 to-violet-700", ring: "ring-indigo-400",   bg: "bg-indigo-50",   text: "text-indigo-800",  Component: null },
  { key: "processing",      icon: Zap,          gradient: "from-yellow-500 to-amber-700",  ring: "ring-yellow-400",   bg: "bg-yellow-50",   text: "text-yellow-800",  Component: null },
  { key: "bioactive",       icon: Dna,          gradient: "from-rose-500 to-pink-700",     ring: "ring-rose-400",     bg: "bg-rose-50",     text: "text-rose-800",    Component: null },
  { key: "thermodynamics",  icon: Activity,     gradient: "from-cyan-600 to-teal-700",     ring: "ring-cyan-400",     bg: "bg-cyan-50",     text: "text-cyan-800",    Component: null },
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
  const { language } = useLanguage();

  const rawContent = milkChemistryContent as any;
  const content = rawContent[language] || rawContent["en"] || rawContent["hi"];

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveKey(null);
    setIsOpen(open);
  };

  // Build topic list — only show topics that have content
  const topics = TOPICS
    .map((t) => ({
      ...t,
      title: content?.[t.key]?.title || null,
    }))
    .filter((t) => t.title !== null);

  const activeTopic = activeKey ? topics.find((t) => t.key === activeKey) : null;

  const renderContent = () => {
    if (!activeTopic || !content) return null;
    const topicData = content[activeTopic.key];
    if (!topicData) return null;

    if (activeTopic.Component) {
      const Comp = activeTopic.Component as React.ComponentType<{ content: any }>;
      return <Comp content={content} />;
    }
    // Fallback generic renderer
    return <GenericContent data={topicData} icon={activeTopic.icon} />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="flex flex-col p-0"
        style={{
          width: "min(95vw, 72rem)",
          maxWidth: "95vw",
          height: "min(92vh, 900px)",
          maxHeight: "92dvh",
          borderRadius: 16,
          boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
          overflow: "hidden",
          contain: "layout",
        }}
      >
        {/* ── HEADER ── */}
        <div
          className="shrink-0 px-4 pt-4 pb-3"
          style={{ background: "linear-gradient(135deg,#0f172a 0%,#134e4a 100%)" }}
        >
          <DialogHeader>
            <DialogTitle
              className="text-white text-center text-base sm:text-xl font-bold leading-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {content?.mainTitle || "Milk Chemistry"}
            </DialogTitle>
            {/* Show subtitle only in main grid, show topic title in detail view */}
            <DialogDescription className="text-teal-300 text-center text-[11px] sm:text-xs mt-0.5">
              {activeTopic
                ? activeTopic.title
                : (content?.subtitle || "Advanced Dairy Chemistry · Physics · Microbiology")}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* ── BODY ── */}
        {activeTopic ? (
          <div className="flex flex-col flex-1 min-h-0" style={{ overflow: "hidden" }}>
            {/* Back bar */}
            <div className="shrink-0 px-3 py-2 border-b border-slate-200 bg-white">
              <button
                onClick={() => setActiveKey(null)}
                className="flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {content?.backToTopics || "Back to Topics"}
              </button>
            </div>

            {/* Scrollable content */}
            <div
              className="flex-1"
              style={{ overflowY: "auto", overflowX: "hidden", WebkitOverflowScrolling: "touch" }}
            >
              <div
                className="px-3 sm:px-5 py-5 pb-12"
                style={{ maxWidth: "100%", boxSizing: "border-box", overflowX: "hidden", wordBreak: "break-word", overflowWrap: "anywhere" }}
              >
                {renderContent()}
              </div>
            </div>
          </div>
        ) : (
          /* ── TOPIC GRID ── */
          <div
            className="flex-1"
            style={{ overflowY: "auto", overflowX: "hidden", WebkitOverflowScrolling: "touch" }}
          >
            <div className="p-3 pb-8">
              {/* Topic count badge */}
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-[11px] font-semibold px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
                  {topics.length} Topics · 200+ Concepts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {topics.map((topic) => {
                  const Icon = topic.icon;
                  return (
                    <button
                      key={topic.key}
                      onClick={() => setActiveKey(topic.key)}
                      className={`
                        flex items-center gap-3 p-3 rounded-xl text-left w-full
                        border border-transparent transition-all duration-200 active:scale-95
                        ${topic.bg} hover:ring-2 ${topic.ring} shadow-sm hover:shadow-md group
                      `}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-br ${topic.gradient} shadow group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <p
                        className={`font-semibold text-xs leading-snug flex-1 min-w-0 ${topic.text}`}
                        style={{ wordBreak: "break-word" }}
                      >
                        {topic.title}
                      </p>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 ${topic.text} opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
