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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowLeft, BookOpen, Droplets, TestTube, Thermometer,
  FlaskConical, Gauge, Scale, Beaker, Activity,
  FileText, ClipboardList, AlertTriangle, Info, CheckCircle2, ChevronRight,
  Sparkles, LayoutGrid, PackageCheck, Search
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { calibrationStandardizationContent } from "@/lib/content/calibration-standardization-content";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "विषयों पर वापस (Back)",
    topics: "Calibrations",
    modules: "Standards",
    langPill: "QC Hindi",
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Calibrations",
    modules: "Standards",
    langPill: "QC English",
  },
};

// ─── STYLES ────────────────────────────────────────────────────────────────
const CONTENT_STYLES = `
  .strict-html-wrap {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .strict-html-wrap * {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
    box-sizing: border-box !important;
  }
`;

// ─────────────────────────────────────────────
// TYPES & INTERFACES
// ─────────────────────────────────────────────

type ColorVariant = "blue" | "yellow" | "green" | "red" | "purple" | "cyan" | "orange" | "emerald" | "indigo" | "rose" | "teal" | "amber";

// ─────────────────────────────────────────────
// SHARED PRIMITIVE COMPONENTS
// ─────────────────────────────────────────────

const Section = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => (
  <section id={id} className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden w-full">
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 px-4 sm:px-5 py-3 border-b border-gray-200">
      <h2 className="text-base sm:text-lg font-bold text-slate-800 font-headline leading-snug">{title}</h2>
    </div>
    <div className="p-4 sm:p-6 text-gray-700 text-sm sm:text-base leading-relaxed break-words">
      <div className="space-y-4">{children}</div>
    </div>
  </section>
);

const SubHeading = ({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) => (
  <div className="mt-6 mb-2 flex items-center gap-2">
    {icon ? (
      <span className="text-primary">{icon}</span>
    ) : (
      <span className="w-2 h-2 rounded-full bg-primary shrink-0 inline-block mt-0.5" />
    )}
    <h3 className="text-[15px] sm:text-base font-bold text-gray-800 font-headline break-words">{children}</h3>
  </div>
);

const InfoBox = ({ children, color = "blue" }: { children: React.ReactNode; color?: ColorVariant }) => {
  const styles: Record<ColorVariant, string> = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-900",
    green: "bg-green-50 border-green-200 text-green-900",
    red: "bg-red-50 border-red-200 text-red-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
    cyan: "bg-cyan-50 border-cyan-200 text-cyan-900",
    orange: "bg-orange-50 border-orange-200 text-orange-900",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-900",
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-900",
    rose: "bg-rose-50 border-rose-200 text-rose-900",
    teal: "bg-teal-50 border-teal-200 text-teal-900",
    amber: "bg-amber-50 border-amber-200 text-amber-900",
  };
  return (
    <div className={cn("rounded-xl border p-3 sm:p-4 text-sm shadow-sm w-full", styles[color])}>
      {children}
    </div>
  );
};

const NoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mt-3 shadow-sm w-full overflow-hidden">
    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
    <div className="text-sm text-amber-800 min-w-0 flex-1 break-words">{children}</div>
  </div>
);

const FormulaBox = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-[13px] sm:text-sm bg-slate-900 text-slate-100 rounded-xl px-4 py-3 mt-2 overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-sm w-full">
    {children}
  </div>
);

const StepList = ({ steps, html = false }: { steps: string[]; html?: boolean }) => (
  <ol className="space-y-3 mt-3 w-full">
    {steps.map((step, i) => (
      <li key={i} className="flex gap-3 items-start min-w-0">
        <span className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold flex items-center justify-center mt-0.5">
          {i + 1}
        </span>
        {html
          ? <div className="text-gray-700 text-sm leading-relaxed min-w-0 flex-1 break-words" dangerouslySetInnerHTML={{ __html: step }} />
          : <div className="text-gray-700 text-sm leading-relaxed min-w-0 flex-1 break-words">{step}</div>
        }
      </li>
    ))}
  </ol>
);

const BulletList = ({ items, html = false }: { items: string[]; html?: boolean }) => (
  <ul className="space-y-2 mt-3 w-full">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 min-w-0">
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        {html
          ? <span className="text-gray-700 text-sm min-w-0 flex-1 break-words" dangerouslySetInnerHTML={{ __html: item }} />
          : <span className="text-gray-700 text-sm min-w-0 flex-1 break-words">{item}</span>
        }
      </li>
    ))}
  </ul>
);

const MethodCard = ({ title, children, color = "blue" }: { title: string; children: React.ReactNode; color?: ColorVariant }) => {
  const border: Record<string, string> = {
    blue: "border-blue-200 bg-blue-50/50",
    green: "border-green-200 bg-green-50/50",
    purple: "border-purple-200 bg-purple-50/50",
    orange: "border-orange-200 bg-orange-50/50",
    cyan: "border-cyan-200 bg-cyan-50/50",
  };
  const titleColors: Record<string, string> = {
    blue: "text-blue-700", green: "text-green-700", purple: "text-purple-700", orange: "text-orange-700", cyan: "text-cyan-700"
  };
  return (
    <div className={cn("rounded-xl border shadow-sm p-4 mt-4 w-full", border[color] || border.blue)}>
      <h4 className={cn("font-bold mb-3 text-sm uppercase tracking-wide", titleColors[color] || titleColors.blue)}>{title}</h4>
      {children}
    </div>
  );
};

// ── Topic Card (Extracted for performance) ──
const TopicCard = ({
  topic,
  tabTitle,
  onClick,
}: {
  topic: (typeof topics)[0];
  tabTitle: string;
  onClick: (val: string) => void;
}) => (
  <button
    onClick={() => onClick(topic.value)}
    className={cn(
      "group relative flex flex-col items-center justify-center",
      "p-3 sm:p-5 bg-white hover:shadow-lg rounded-xl sm:rounded-2xl",
      "border border-gray-100 hover:border-transparent",
      "text-center aspect-square",
      "transition-all duration-300 transform hover:scale-[1.03]",
      "active:scale-95",
      "hover:ring-2 hover:ring-offset-1 hover:ring-indigo-200 box-border w-full"
    )}
  >
    <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", topic.bgLight)} />
    
    {/* Premium Badge Position */}
    {topic.badge && (
      <span className="absolute top-2 right-2 z-20">
        <Badge variant="secondary" className={cn(
          "text-[9px] px-1.5 py-0 font-bold leading-4 border", 
          topic.badge === "Advanced" ? "bg-purple-100 text-purple-700 border-purple-200" : "bg-blue-100 text-blue-700 border-blue-200"
        )}>
          {topic.badge}
        </Badge>
      </span>
    )}

    <div className="relative z-10">
      <div className={cn("p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br text-white mb-2 sm:mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md", topic.color)}>
        <topic.icon className="w-5 h-5 sm:w-7 sm:h-7" />
      </div>
    </div>
    <span className="relative z-10 font-bold text-[10px] sm:text-[13px] font-headline text-slate-600 group-hover:text-slate-800 transition-colors leading-tight line-clamp-2 px-0.5 break-words w-full">
      {tabTitle}
    </span>
    <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
    <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
  </button>
);


// ─────────────────────────────────────────────
// TOPIC CONTENT COMPONENTS
// ─────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const topicComponents: Record<string, React.FC<{ content: any }>> = {

  definitions: ({ content }) => {
    const c = content.definitions || {};
    return (
      <Section title={c.title} id="definitions">
        <SubHeading>{c.reagent}</SubHeading>
        <p className="text-gray-700 text-sm">{c.reagent_desc}</p>

        <SubHeading>{c.solution}</SubHeading>
        <p className="text-gray-700 text-sm">{c.solution_desc}</p>
        <InfoBox color="blue">
          <BulletList html items={[
            c.dilute_sol,
            c.concentrated_sol,
            c.saturated_sol,
            c.supersaturated_sol,
          ].filter(Boolean)} />
        </InfoBox>

        <SubHeading>{c.standard_sol}</SubHeading>
        <p className="text-gray-700 text-sm">{c.standard_sol_desc}</p>

        <SubHeading>{c.primary_standard}</SubHeading>
        <p className="text-gray-700 text-sm">{c.primary_standard_desc}</p>

        <SubHeading>{c.normal_sol}</SubHeading>
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.normal_sol_desc || "" }} />
        {c.normal_sol_formula && <FormulaBox><span dangerouslySetInnerHTML={{ __html: c.normal_sol_formula }} /></FormulaBox>}

        <SubHeading>{c.molar_sol}</SubHeading>
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.molar_sol_desc || "" }} />

        <SubHeading>{c.molal_sol}</SubHeading>
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.molal_sol_desc || "" }} />

        <SubHeading>{c.percent_sol}</SubHeading>
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.percent_sol_desc || "" }} />

        <SubHeading>{c.ppm_ppb}</SubHeading>
        <p className="text-gray-700 text-sm">{c.ppm_ppb_desc}</p>

        {c.note && <NoteBox>{c.note}</NoteBox>}
      </Section>
    );
  },

  pipette: ({ content }) => {
    const c = content.pipette || {};
    return (
      <Section title={c.title} id="pipette">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <InfoBox color="red">
          <p className="font-semibold text-sm mb-1 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> {c.sources_of_error}
          </p>
          <p className="text-sm">{c.sources_of_error_desc}</p>
        </InfoBox>

        {c.comparison && (
          <MethodCard title={c.comparison.title} color="blue">
            <p className="text-gray-700 text-sm">{c.comparison.desc}</p>
          </MethodCard>
        )}

        {c.bis && (
          <MethodCard title={c.bis.title} color="green">
            <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.bis.desc || "" }} />
            <StepList steps={c.bis.steps || []} html />
          </MethodCard>
        )}

        {c.mathematical && (
          <MethodCard title={c.mathematical.title} color="purple">
            <p className="text-gray-700 text-sm italic">{c.mathematical.desc}</p>
          </MethodCard>
        )}
      </Section>
    );
  },

  butyrometer: ({ content }) => {
    const c = content.butyrometer || {};
    return (
      <Section title={c.title} id="butyrometer">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>{c.principle?.title}</SubHeading>
        <InfoBox color="yellow">
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: c.principle?.desc || "" }} />
        </InfoBox>

        {c.mercury_density_table && <NoteBox>{c.mercury_density_table}</NoteBox>}

        <SubHeading>{c.methods?.title}</SubHeading>

        {c.methods?.comparison && (
          <MethodCard title={c.methods.comparison.title} color="blue">
            <p className="text-gray-700 text-sm">{c.methods.comparison.desc}</p>
            <BulletList items={c.methods.comparison.points || []} />
            <p className="mt-3 text-sm font-medium text-gray-700">{c.methods.conclusion || c.methods.comparison.conclusion}</p>
          </MethodCard>
        )}

        {c.methods?.bis && (
          <MethodCard title={c.methods.bis.title} color="green">
            <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.methods.bis.desc || "" }} />
            <StepList steps={c.methods.bis.steps || []} />
          </MethodCard>
        )}

        {c.methods?.gravimetric && (
          <MethodCard title={c.methods.gravimetric.title} color="purple">
            <p className="text-gray-700 text-sm">{c.methods.gravimetric.desc}</p>
            <StepList steps={c.methods.gravimetric.steps || []} html />
          </MethodCard>
        )}

        {c.uncertainty_analysis && (
          <InfoBox color="blue">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">Uncertainty Analysis</p>
            <p className="text-sm">{c.uncertainty_analysis}</p>
          </InfoBox>
        )}

        {/* Robust Mobile Wrapping for Table */}
        {c.table && (
          <>
            <div className="hidden sm:block overflow-x-auto mt-6 rounded-xl border border-gray-200 shadow-sm bg-white">
              <Table>
                <TableCaption className="text-xs text-gray-500 pb-3">{c.table.caption}</TableCaption>
                <TableHeader>
                  <TableRow className="bg-slate-700 hover:bg-slate-700">
                    <TableHead className="font-bold text-white text-xs uppercase tracking-wide py-2.5 px-3">{c.table.header1}</TableHead>
                    <TableHead className="font-bold text-white text-xs uppercase tracking-wide py-2.5 px-3">{c.table.header2}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {c.table.rows?.map((row: any, i: number) => (
                    <TableRow key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <TableCell className="font-mono font-semibold text-slate-700">{row.scale}</TableCell>
                      <TableCell className="text-slate-600">{row.product}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="sm:hidden space-y-3 mt-6 w-full">
              <p className="text-xs text-gray-500 italic mb-2 px-1">{c.table.caption}</p>
              {c.table.rows?.map((row: any, rowIndex: number) => (
                <div key={rowIndex} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm w-full bg-white">
                  <div className="bg-slate-700 text-white text-[11px] font-bold px-3 py-2 leading-snug break-words">
                    {c.table.header1}: {row.scale}
                  </div>
                  <div className="px-3 py-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5 block">
                      {c.table.header2}
                    </span>
                    <span className="text-xs text-slate-700 leading-snug break-words block">
                      {row.product}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Section>
    );
  },

  lactometer: ({ content }) => {
    const c = content.lactometer || {};
    return (
      <Section title={c.title} id="lactometer">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>{c.principle?.title}</SubHeading>
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.principle?.desc1 || "" }} />
        <p className="mt-2 text-gray-700 text-sm">{c.principle?.desc2}</p>

        <InfoBox color="cyan">
          <BulletList html items={c.principle?.types || []} />
        </InfoBox>

        {c.principle?.temperature_correction && (
          <FormulaBox>
            <span dangerouslySetInnerHTML={{ __html: c.principle.temperature_correction }} />
          </FormulaBox>
        )}

        <InfoBox color="green">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1">CLR Formula</p>
          <p className="text-sm">{c.clr_formula}</p>
        </InfoBox>

        <SubHeading>{c.methods?.title}</SubHeading>

        {c.methods?.comparison && (
          <MethodCard title={c.methods.comparison.title} color="blue">
            <p className="text-gray-700 text-sm">{c.methods.comparison.desc}</p>
          </MethodCard>
        )}

        {c.methods?.bis && (
          <MethodCard title={c.methods.bis.title} color="green">
            <p className="text-gray-700 text-sm">{c.methods.bis.desc}</p>
            <StepList steps={c.methods.bis.steps || []} />
          </MethodCard>
        )}
      </Section>
    );
  },

  other: ({ content }) => {
    const c = content.other_glassware || {};
    return (
      <Section title={c.title} id="other-glassware">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>{c.principle?.title}</SubHeading>
        <InfoBox color="purple">
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: c.principle?.desc || "" }} />
        </InfoBox>

        <SubHeading>{c.procedure?.title}</SubHeading>
        <StepList steps={c.procedure?.steps || []} html />

        {c.burette_calibration && <NoteBox>{c.burette_calibration}</NoteBox>}
      </Section>
    );
  },

  thermometer: ({ content }) => {
    const c = content.thermometer || {};
    return (
      <Section title={c.title} id="thermometer">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <InfoBox color="blue">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">Thermometer Types</p>
          <p className="text-sm">{c.thermometer_types}</p>
        </InfoBox>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 shadow-sm">
            <SubHeading>{c.ice_point?.title}</SubHeading>
            <InfoBox color="cyan">
              <p className="text-xs italic">{c.ice_point?.scientific_basis}</p>
            </InfoBox>
            <StepList steps={c.ice_point?.steps || []} />
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50/60 p-4 shadow-sm">
            <SubHeading>{c.boiling_point?.title}</SubHeading>
            <InfoBox color="orange">
              <p className="text-xs italic">{c.boiling_point?.scientific_basis}</p>
            </InfoBox>
            <StepList steps={c.boiling_point?.steps || []} />
          </div>
        </div>

        {c.rtd_calibration && <NoteBox>{c.rtd_calibration}</NoteBox>}
      </Section>
    );
  },

  balance: ({ content }) => {
    const c = content.balance || {};
    return (
      <Section title={c.title} id="balance">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <InfoBox color="red">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-700 mb-1 flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5" /> Environmental Factors
          </p>
          <p className="text-sm">{c.environmental_factors}</p>
        </InfoBox>

        <SubHeading>Calibration Tests</SubHeading>
        <div className="space-y-3 mt-3">
          {c.tests?.map((test: string, i: number) => (
            <div key={i} className="flex gap-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3 sm:p-4 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 break-words" dangerouslySetInnerHTML={{ __html: test }} />
            </div>
          ))}
        </div>

        {c.calibration_weights && <NoteBox>{c.calibration_weights}</NoteBox>}
        {c.buoyancy_correction && <NoteBox>{c.buoyancy_correction}</NoteBox>}
      </Section>
    );
  },

  chemical: ({ content }) => {
    const c = content.chemical || {};
    return (
      <Section title={c.title} id="chemical">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>{c.primary_standards_list}</SubHeading>

        {[
          { label: "Na₂CO₃", text: c.anhydrous_na2co3, color: "blue" },
          { label: "K₂Cr₂O₇", text: c.potassium_dichromate, color: "orange" },
          { label: "Oxalic Acid", text: c.oxalic_acid, color: "purple" },
        ].map((item, i) => (
          <MethodCard key={i} title={item.label} color={item.color as ColorVariant}>
            <p className="text-sm text-gray-700">{item.text}</p>
          </MethodCard>
        ))}

        <SubHeading>Secondary Standard Standardization</SubHeading>

        <MethodCard title="NaOH" color="green">
          <p className="text-sm text-gray-700">{c.naoh_standardization}</p>
        </MethodCard>
        <MethodCard title="H₂SO₄" color="blue">
          <p className="text-sm text-gray-700">{c.h2so4_standardization}</p>
        </MethodCard>
        <MethodCard title="EDTA" color="purple">
          <p className="text-sm text-gray-700">{c.edta_standardization}</p>
        </MethodCard>

        <div className="mt-4">
          <InfoBox color="red">
            <p className="text-xs font-semibold uppercase tracking-wide text-red-700 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5" /> Shelf Life & Storage
            </p>
            <p className="text-sm">{c.shelf_life}</p>
          </InfoBox>
        </div>
      </Section>
    );
  },

  spectrophotometer: ({ content }) => {
    const c = content.spectrophotometer || {};
    return (
      <Section title={c.title} id="spectrophotometer">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>Beer-Lambert Law</SubHeading>
        <InfoBox color="blue">
          <p className="text-sm">{c.beer_lambert_law}</p>
        </InfoBox>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <MethodCard title="Wavelength Calibration" color="blue">
            <p className="text-sm text-gray-700">{c.wavelength_calibration}</p>
          </MethodCard>
          <MethodCard title="Photometric Calibration" color="green">
            <p className="text-sm text-gray-700">{c.photometric_calibration}</p>
          </MethodCard>
          <MethodCard title="Stray Light Check" color="purple">
            <p className="text-sm text-gray-700">{c.stray_light}</p>
          </MethodCard>
          <MethodCard title="Linearity Verification" color="cyan">
            <p className="text-sm text-gray-700">{c.linearity}</p>
          </MethodCard>
        </div>
      </Section>
    );
  },

  ph_meter: ({ content }) => {
    const c = content.ph_meter || {};
    return (
      <Section title={c.title} id="ph_meter">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>Nernst Equation</SubHeading>
        <InfoBox color="blue">
          <p className="text-sm">{c.nernst_equation}</p>
        </InfoBox>

        <SubHeading>pH Buffer Standards</SubHeading>
        <InfoBox color="green">
          <p className="text-sm">{c.buffer_standards}</p>
        </InfoBox>

        <SubHeading>Two-Point Calibration</SubHeading>
        <MethodCard title="Calibration Procedure" color="blue">
          <p className="text-sm text-gray-700">{c.two_point_calibration}</p>
        </MethodCard>

        <SubHeading>Milk pH Reference Values</SubHeading>
        <InfoBox color="cyan">
          <p className="text-sm">{c.milk_ph}</p>
        </InfoBox>

        <div className="mt-4">
          <InfoBox color="orange">
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-700 mb-1">Maintenance Protocol</p>
            <p className="text-sm">{c.maintenance}</p>
          </InfoBox>
        </div>
      </Section>
    );
  },

  uncertainty: ({ content }) => {
    const c = content.uncertainty || {};
    return (
      <Section title={c.title} id="uncertainty">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 shadow-sm">
            <h4 className="font-bold text-blue-700 mb-2 text-sm">Type A Uncertainty</h4>
            <p className="text-sm text-gray-700">{c.type_a}</p>
          </div>
          <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-4 shadow-sm">
            <h4 className="font-bold text-purple-700 mb-2 text-sm">Type B Uncertainty</h4>
            <p className="text-sm text-gray-700">{c.type_b}</p>
          </div>
        </div>

        <SubHeading>Combined & Expanded Uncertainty</SubHeading>
        <FormulaBox>{c.combined_uncertainty}</FormulaBox>

        <div className="mt-4">
          <SubHeading>Practical Example — Fat Test Budget</SubHeading>
          <InfoBox color="green">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Worked Example
            </p>
            <p className="text-sm">{c.fat_test_example}</p>
          </InfoBox>
        </div>
      </Section>
    );
  },

  documentation: ({ content }) => {
    const c = content.documentation || {};
    return (
      <Section title={c.title} id="documentation">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>Calibration Record Elements</SubHeading>
        <InfoBox color="blue">
          <p className="text-sm">{c.calibration_record}</p>
        </InfoBox>

        <SubHeading>Recommended Calibration Schedule</SubHeading>
        <InfoBox color="green">
          <p className="text-sm">{c.calibration_schedule}</p>
        </InfoBox>

        <SubHeading>SOP Requirements</SubHeading>
        <InfoBox color="purple">
          <p className="text-sm">{c.sop_requirement}</p>
        </InfoBox>

        <div className="mt-4">
          <SubHeading>Out-of-Tolerance Action Plan</SubHeading>
          <InfoBox color="red">
            <p className="text-xs font-semibold uppercase tracking-wide text-red-700 mb-1 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> OOT Response Protocol
            </p>
            <p className="text-sm">{c.out_of_tolerance}</p>
          </InfoBox>
        </div>
      </Section>
    );
  },

  sop: ({ content }) => {
    const c = content.sop || {};
    return (
      <Section title={c.title} id="sop">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <SubHeading>Essential SOP Elements</SubHeading>
        <InfoBox color="blue">
          <p className="text-sm">{c.sop_elements}</p>
        </InfoBox>

        <SubHeading>Competency & Training Requirements</SubHeading>
        <InfoBox color="green">
          <p className="text-sm">{c.training_requirements}</p>
        </InfoBox>

        <SubHeading>Document Change Control</SubHeading>
        <InfoBox color="purple">
          <p className="text-sm">{c.change_control}</p>
        </InfoBox>
      </Section>
    );
  },
};

// ─────────────────────────────────────────────
// PREMIUM TOPICS REGISTRY
// ─────────────────────────────────────────────

const topics = [
  { value: "definitions", icon: BookOpen, color: "from-blue-500 to-cyan-500", bgLight: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200", badge: "Core" },
  { value: "pipette", icon: Droplets, color: "from-sky-400 to-blue-500", bgLight: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200" },
  { value: "butyrometer", icon: FlaskConical, color: "from-amber-400 to-orange-500", bgLight: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200" },
  { value: "lactometer", icon: Gauge, color: "from-teal-400 to-emerald-500", bgLight: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200" },
  { value: "other", icon: TestTube, color: "from-purple-400 to-fuchsia-500", bgLight: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200" },
  { value: "thermometer", icon: Thermometer, color: "from-red-400 to-rose-500", bgLight: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200" },
  { value: "balance", icon: Scale, color: "from-emerald-400 to-green-500", bgLight: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200" },
  { value: "chemical", icon: Beaker, color: "from-orange-400 to-amber-500", bgLight: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200", badge: "Advanced" },
  { value: "spectrophotometer", icon: Activity, color: "from-indigo-400 to-blue-600", bgLight: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200", badge: "Advanced" },
  { value: "ph_meter", icon: Gauge, color: "from-cyan-400 to-teal-500", bgLight: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200", badge: "Advanced" },
  { value: "uncertainty", icon: Activity, color: "from-violet-400 to-purple-600", bgLight: "bg-violet-50 hover:bg-violet-100", borderClass: "border-violet-200", badge: "Advanced" },
  { value: "documentation", icon: FileText, color: "from-rose-400 to-pink-500", bgLight: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200" },
  { value: "sop", icon: ClipboardList, color: "from-lime-400 to-green-600", bgLight: "bg-lime-50 hover:bg-lime-100", borderClass: "border-lime-200" },
];

// ─────────────────────────────────────────────
// MAIN MODAL COMPONENT
// ─────────────────────────────────────────────

export function CalibrationStandardizationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { t, language } = useLanguage();
  const content = t(calibrationStandardizationContent);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      setSearchQuery("");
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const handleSelectTopic = (topicValue: string) => {
    const viewport = document.querySelector('#calib-grid-area [data-radix-scroll-area-viewport]');
    if (viewport) {
      scrollPosition.current = viewport.scrollTop;
    }
    setActiveTopic(topicValue);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic) {
      const timer = setTimeout(() => {
        const viewport = document.querySelector('#calib-grid-area [data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = scrollPosition.current;
        }
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [activeTopic]);

  if (!content) return null;

  const getTopicTitle = (topicValue: string): string => {
    if (!content || !content.tabs) return topicValue;
    return content.tabs[topicValue as keyof typeof content.tabs] || topicValue;
  };

  const filteredTopics = searchQuery.trim()
    ? topics.filter(t => getTopicTitle(t.value).toLowerCase().includes(searchQuery.toLowerCase()))
    : topics;

  const selectedTopic = activeTopic ? topics.find((t) => t.value === activeTopic) : null;
  const ActiveComponent = activeTopic ? topicComponents[activeTopic] : null;

  const instrumentTopics = filteredTopics.filter((t) =>
    ["definitions", "pipette", "butyrometer", "lactometer", "other", "thermometer", "balance"].includes(t.value)
  );
  const advancedTopics = filteredTopics.filter((t) =>
    ["chemical", "spectrophotometer", "ph_meter", "uncertainty", "documentation", "sop"].includes(t.value)
  );

  const getDialogDescription = () => {
    if (selectedTopic) return "Detailed calibration protocols and standardization steps.";
    return content.description || "Explore complete calibration methods for dairy instruments.";
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <style dangerouslySetInnerHTML={{ __html: CONTENT_STYLES }} />

      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border strict-html-wrap
        [&>button]:!text-white [&>button]:opacity-80 [&>button]:hover:opacity-100
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🔬 {content.mainTitle || "Calibration & Standardization"}
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {getDialogDescription()}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {topics.length} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <PackageCheck className="w-3 h-3 shrink-0" /> {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <Activity className="w-3 h-3 shrink-0" /> {lbl.langPill}
              </span>
            </div>
          )}

          {/* Back button Breadcrumb */}
          {activeTopic && selectedTopic && (
            <div className="flex items-center gap-2 mt-1.5 sm:mt-2 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg shrink-0 text-xs px-2 h-6 sm:h-7"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                {content.backToTopics || lbl.backToTopics}
              </Button>
              <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs min-w-0 overflow-hidden">
                <selectedTopic.icon className="w-3 h-3 shrink-0" />
                <span className="font-medium truncate min-w-0">{getTopicTitle(selectedTopic.value)}</span>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {activeTopic && selectedTopic && ActiveComponent ? (
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50">
            <ScrollArea className="h-full w-full max-w-full">
              <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full pb-10 mt-2 sm:mt-3">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50/50">
            {/* Elegant Search Bar */}
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-white border-b border-gray-100 shrink-0 shadow-sm z-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-between">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search calibrations..."
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-full px-4 py-1.5 sm:py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 transition-all placeholder:text-slate-400"
                />
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium whitespace-nowrap hidden sm:block">
                Showing {filteredTopics.length} entries
              </p>
            </div>

            <ScrollArea className="flex-1 h-full w-full" id="calib-grid-area" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 pb-10 max-w-6xl mx-auto space-y-6 sm:space-y-8">
                
                {/* Intro block */}
                {!searchQuery && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-6 shadow-sm">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: content.intro_p1 || "" }} />
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: content.intro_p2 || "" }} />
                    {content.intro_p3 && (
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: content.intro_p3 }} />
                    )}
                  </div>
                )}

                {/* Instrument & Methods */}
                {instrumentTopics.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <TestTube className="w-4 h-4 text-indigo-500" />
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">Instruments & Methods</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                      {instrumentTopics.map((topic) => (
                        <TopicCard 
                          key={topic.value} 
                          topic={topic} 
                          tabTitle={getTopicTitle(topic.value)}
                          onClick={handleSelectTopic} 
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Advanced Topics */}
                {advancedTopics.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <Activity className="w-4 h-4 text-rose-500" />
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">Advanced Standardizations</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                      {advancedTopics.map((topic) => (
                        <TopicCard 
                          key={topic.value} 
                          topic={topic} 
                          tabTitle={getTopicTitle(topic.value)}
                          onClick={handleSelectTopic} 
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {filteredTopics.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <Search className="w-10 h-10 mb-3 opacity-20" />
                    <p className="text-sm font-medium">No calibrations match "{searchQuery}"</p>
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
