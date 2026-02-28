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
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { milkChemistryContent } from "@/lib/content/milk-chemistry-content";

// ─────────────────────────────────────────────────────────────────
// PRIMITIVE LAYOUT HELPERS  — these are the overflow-prevention core
// ─────────────────────────────────────────────────────────────────

/** Forces any child (especially tables) to scroll horizontally instead of overflowing */
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

/** Safe paragraph: wraps, breaks words, no overflow */
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

/** Styled card with left-border accent */
const Card = ({
  title,
  accent = "teal",
  children,
}: {
  title?: string;
  accent?: "teal" | "amber" | "rose" | "indigo" | "emerald" | "slate" | "violet";
  children: React.ReactNode;
}) => {
  const map: Record<string, { border: string; bg: string; head: string }> = {
    teal:    { border: "border-teal-500",   bg: "bg-teal-50/70",   head: "text-teal-800" },
    amber:   { border: "border-amber-500",  bg: "bg-amber-50/70",  head: "text-amber-800" },
    rose:    { border: "border-rose-500",   bg: "bg-rose-50/70",   head: "text-rose-800" },
    indigo:  { border: "border-indigo-500", bg: "bg-indigo-50/70", head: "text-indigo-800" },
    emerald: { border: "border-emerald-500",bg: "bg-emerald-50/70",head: "text-emerald-800" },
    slate:   { border: "border-slate-400",  bg: "bg-slate-50/70",  head: "text-slate-800" },
    violet:  { border: "border-violet-500", bg: "bg-violet-50/70", head: "text-violet-800" },
  };
  const c = map[accent];
  return (
    <div
      className={`border-l-4 ${c.border} ${c.bg} rounded-r-xl px-4 py-4 shadow-sm`}
      style={{ maxWidth: "100%", overflow: "hidden" }}
    >
      {title && (
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-3 ${c.head}`}
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", wordBreak: "break-word" }}
        >
          {title}
        </p>
      )}
      <div className="space-y-2" style={{ maxWidth: "100%", wordBreak: "break-word", overflowWrap: "anywhere" }}>
        {children}
      </div>
    </div>
  );
};

/** Section headline with icon */
const SectionHead = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200">
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: "linear-gradient(135deg,#0f766e,#134e4a)" }}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h2
      className="text-lg sm:text-xl font-bold text-slate-800 leading-tight"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif", wordBreak: "break-word" }}
    >
      {title}
    </h2>
  </div>
);

// Table primitives — always inside HScroll
const Th = ({ children, nowrap = true }: { children: React.ReactNode; nowrap?: boolean }) => (
  <th
    className="bg-slate-800 text-slate-100 text-left px-3 py-2 text-xs font-semibold border border-slate-700"
    style={{ whiteSpace: nowrap ? "nowrap" : "normal" }}
  >
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
        <tr>
          {headers.map((h) => (
            <Th key={h}>{h}</Th>
          ))}
        </tr>
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
    <div className="space-y-5">
      <SectionHead title={d.title || "Composition"} icon={BookOpen} />

      {d.whatIsMilk && (
        <Card title={d.whatIsMilk.title} accent="teal">
          <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.fssaiDef }} />
          <P dangerouslySetInnerHTML={{ __html: d.whatIsMilk.usaDef }} />
          <P>{d.whatIsMilk.p1}</P>
          {d.whatIsMilk.phases?.map((ph: string, i: number) => (
            <div
              key={i}
              className="pl-3 border-l-2 border-teal-300 mt-2"
              style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
              dangerouslySetInnerHTML={{ __html: ph }}
            />
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
            <div key={i} className="mt-3 bg-white rounded-lg p-3 border border-slate-200 shadow-xs">
              <p className="text-xs font-bold text-slate-800 mb-1" style={{ wordBreak: "break-word" }}>{form.name}</p>
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
              <p className="text-xs leading-5 text-slate-700" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
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
              <p className="text-xs leading-5" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
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
            <p className="mt-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-300 pb-1">
              {d.casein.fractionsTitle}
            </p>
          )}
          <div className="mt-2 space-y-2">
            {d.casein.fractions?.map((f: any, i: number) => (
              <div key={i} className="bg-white p-3 rounded border border-indigo-100 shadow-xs">
                <p className="text-xs font-bold text-indigo-600 mb-1">{f.name}</p>
                <P>{f.desc}</P>
              </div>
            ))}
          </div>
          {d.casein.coagulationTitle && (
            <p className="mt-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-300 pb-1">
              {d.casein.coagulationTitle}
            </p>
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
            <p className="mt-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-300 pb-1">
              {d.whey.fractionsTitle}
            </p>
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
          <P>{d.introduction.p1}</P>
          <P>{d.introduction.p2}</P>
          <P>{d.introduction.p3}</P>
        </Card>
      )}

      {d.characteristics && (
        <Card title={d.characteristics.title} accent="teal">
          <P>{d.characteristics.p1}</P>
          <P>{d.characteristics.p2}</P>
          <P>{d.characteristics.p3}</P>
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
          <P>{d.mfgm.architecture.p1}</P>
          <P>{d.mfgm.architecture.p2}</P>
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
                <p key={i} className="text-[10px] text-green-300 leading-4" style={{ wordBreak: "break-word" }}>{t}</p>
              ))}
              {d.stability.creaming.stokesLaw.explanation && (
                <p className="mt-2 text-[10px] text-green-200 leading-4" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
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

      {/* Dynamic extra subsections */}
      {(["autoxidation", "crystallization", "butterChemistry", "gheeChemistry", "lipolysis", "cholesterol", "phospholipids"] as const).map((key) => {
        const section = (d as any)[key];
        if (!section) return null;
        const accentMap: Record<string, any> = {
          autoxidation: "rose",
          crystallization: "violet",
          butterChemistry: "amber",
          gheeChemistry: "emerald",
          lipolysis: "rose",
          cholesterol: "slate",
          phospholipids: "indigo",
        };
        return (
          <Card key={key} title={section.title || key} accent={accentMap[key]}>
            {/* Render mechanism / sub-objects */}
            {Object.entries(section).map(([k, v]) => {
              if (k === "title") return null;
              if (typeof v === "string") return <P key={k} className="mt-1">{v as string}</P>;
              if (typeof v === "object" && v !== null) {
                const obj = v as any;
                if (typeof obj.p1 === "string") return <P key={k} className="mt-1">{obj.p1}</P>;
                if (Array.isArray(obj)) return null;
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
      {d.introduction && (
        <Card title={d.introduction.title} accent="emerald">
          <P>{d.introduction.p1}</P>
          <P>{d.introduction.p2}</P>
          {d.introduction.p3 && <P className="font-semibold text-emerald-700">{d.introduction.p3}</P>}
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
          {/* Table-based */}
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
            /* Card-based */
            <div className="mt-3 space-y-3">
              {["alkaline_phosphatase", "lactoperoxidase", "plasmin", "lipoprotein_lipase", "catalase"].map((key) => {
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

// ─────────────────────────────────────────────────────────────────
// TOPIC CONFIG
// ─────────────────────────────────────────────────────────────────

const TOPICS = [
  {
    key: "composition",
    contentKey: "composition",
    icon: BookOpen,
    gradient: "from-teal-600 to-teal-800",
    ring: "ring-teal-400",
    bg: "bg-teal-50",
    text: "text-teal-800",
    Component: CompositionContent,
  },
  {
    key: "mammaryGland",
    contentKey: "mammaryGland",
    icon: Cpu,
    gradient: "from-pink-500 to-rose-700",
    ring: "ring-pink-400",
    bg: "bg-pink-50",
    text: "text-pink-800",
    Component: MammaryGlandContent,
  },
  {
    key: "proteins",
    contentKey: "proteins",
    icon: Dna,
    gradient: "from-violet-600 to-purple-800",
    ring: "ring-violet-400",
    bg: "bg-violet-50",
    text: "text-violet-800",
    Component: ProteinsContent,
  },
  {
    key: "fat",
    contentKey: "fat",
    icon: Droplets,
    gradient: "from-amber-500 to-orange-700",
    ring: "ring-amber-400",
    bg: "bg-amber-50",
    text: "text-amber-800",
    Component: FatContent,
  },
  {
    key: "lactose",
    contentKey: "lactose",
    icon: Atom,
    gradient: "from-cyan-500 to-sky-700",
    ring: "ring-cyan-400",
    bg: "bg-cyan-50",
    text: "text-cyan-800",
    Component: LactoseContent,
  },
  {
    key: "minerals",
    contentKey: "minerals",
    icon: Gem,
    gradient: "from-emerald-600 to-green-800",
    ring: "ring-emerald-400",
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    Component: MineralsContent,
  },
  {
    key: "vitaminsEnzymes",
    contentKey: "vitaminsEnzymes",
    icon: FlaskConical,
    gradient: "from-orange-500 to-red-600",
    ring: "ring-orange-400",
    bg: "bg-orange-50",
    text: "text-orange-800",
    Component: VitaminsEnzymesContent,
  },
  {
    key: "properties",
    contentKey: "properties",
    icon: TestTube,
    gradient: "from-indigo-600 to-blue-800",
    ring: "ring-indigo-400",
    bg: "bg-indigo-50",
    text: "text-indigo-800",
    Component: PropertiesContent,
  },
  {
    key: "other",
    contentKey: "other",
    icon: FlaskConical,
    gradient: "from-slate-600 to-slate-800",
    ring: "ring-slate-400",
    bg: "bg-slate-100",
    text: "text-slate-800",
    Component: OtherContent,
  },
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

  const activeTopic = activeKey ? TOPICS.find((t) => t.key === activeKey) : null;
  const ActiveComponent = activeTopic?.Component ?? null;

  // Enrich topics with localised titles
  const topics = TOPICS.map((t) => ({
    ...t,
    title: content?.[t.contentKey]?.title || t.key,
  }));

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
          overflow: "hidden",            // HARD container boundary
          contain: "layout",
        }}
      >
        {/* ── HEADER ── */}
        <div
          className="shrink-0 px-4 pt-5 pb-4"
          style={{ background: "linear-gradient(135deg,#0f172a 0%,#134e4a 100%)" }}
        >
          <DialogHeader>
            <DialogTitle
              className="text-white text-center text-lg sm:text-2xl font-bold leading-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {content?.mainTitle || "Milk Chemistry"}
            </DialogTitle>
            <DialogDescription className="text-teal-300 text-center text-xs sm:text-sm mt-1">
              {activeTopic ? activeTopic.title : content?.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* ── BODY ── */}
        {activeTopic && ActiveComponent ? (
          <div className="flex flex-col flex-1 min-h-0" style={{ overflow: "hidden" }}>
            {/* Back bar */}
            <div className="shrink-0 px-3 py-2 border-b border-slate-200 bg-white">
              <button
                onClick={() => setActiveKey(null)}
                className="flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {content?.backToTopics || "Back"}
              </button>
            </div>

            {/* Scrollable content — overflow-x HIDDEN here, overflow-y auto */}
            <div
              className="flex-1"
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div
                className="px-3 sm:px-5 py-5 pb-12"
                style={{
                  maxWidth: "100%",
                  boxSizing: "border-box",
                  overflowX: "hidden",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                <ActiveComponent content={content} />
              </div>
            </div>
          </div>
        ) : (
          /* ── TOPIC GRID ── */
          <div
            className="flex-1"
            style={{
              overflowY: "auto",
              overflowX: "hidden",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="p-4 pb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {topics.map((topic) => {
                  const Icon = topic.icon;
                  return (
                    <button
                      key={topic.key}
                      onClick={() => setActiveKey(topic.key)}
                      className={`
                        flex items-center gap-4 p-4 rounded-2xl text-left w-full
                        border-2 border-transparent transition-all duration-200 active:scale-95
                        ${topic.bg} hover:ring-2 ${topic.ring} shadow-sm hover:shadow-md group
                      `}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${topic.gradient} shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`font-bold text-sm leading-tight ${topic.text}`}
                          style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            wordBreak: "break-word",
                          }}
                        >
                          {topic.title}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 ${topic.text} opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all`}
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
