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
import {
  ArrowLeft, BookOpen, Droplets, TestTube, Thermometer,
  FlaskConical, Gauge, Scale, Beaker, Activity,
  FileText, ClipboardList, AlertTriangle, Info, CheckCircle2, ChevronRight
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { calibrationStandardizationContent } from "@/lib/content/calibration-standardization-content";


// ─────────────────────────────────────────────
// SHARED PRIMITIVE COMPONENTS
// ─────────────────────────────────────────────

const Section = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => (
  <section id={id} className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
    <div className="bg-primary/5 px-5 py-4 border-b border-border">
      <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
    </div>
    <div className="p-5 sm:p-6 text-card-foreground text-base leading-relaxed break-words">
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
    <h3 className="text-base font-bold text-gray-800 font-headline">{children}</h3>
  </div>
);

const InfoBox = ({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "yellow" | "green" | "red" | "purple" | "cyan" | "orange" | "emerald" }) => {
  const styles: Record<string, string> = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-900",
    green: "bg-green-50 border-green-200 text-green-900",
    red: "bg-red-50 border-red-200 text-red-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
    cyan: "bg-cyan-50 border-cyan-200 text-cyan-900",
    orange: "bg-orange-50 border-orange-200 text-orange-900",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-900",
  };
  return (
    <div className={`rounded-lg border p-4 text-sm ${styles[color]}`}>
      {children}
    </div>
  );
};

const NoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mt-2">
    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
    <p className="text-sm text-amber-800">{children}</p>
  </div>
);

const FormulaBox = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-sm bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 mt-2 text-gray-800 overflow-x-auto">
    {children}
  </div>
);

const StepList = ({ steps, html = false }: { steps: string[]; html?: boolean }) => (
  <ol className="space-y-2 mt-3 counter-reset-list">
    {steps.map((step, i) => (
      <li key={i} className="flex gap-3">
        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
          {i + 1}
        </span>
        {html
          ? <span className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
          : <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
        }
      </li>
    ))}
  </ol>
);

const BulletList = ({ items, html = false }: { items: string[]; html?: boolean }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2.5">
        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        {html
          ? <span className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
          : <span className="text-gray-700 text-sm">{item}</span>
        }
      </li>
    ))}
  </ul>
);

const MethodCard = ({ title, children, color = "blue" }: { title: string; children: React.ReactNode; color?: string }) => {
  const border: Record<string, string> = {
    blue: "border-blue-300 bg-blue-50/60",
    green: "border-green-300 bg-green-50/60",
    purple: "border-purple-300 bg-purple-50/60",
  };
  return (
    <div className={`rounded-xl border-2 ${border[color] || border.blue} p-4 mt-4`}>
      <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">{title}</h4>
      {children}
    </div>
  );
};

const KeyValueGrid = ({ items }: { items: { label: string; value: string }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
    {items.map((item, i) => (
      <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.label}</p>
        <p className="text-sm font-medium text-gray-800 mt-0.5">{item.value}</p>
      </div>
    ))}
  </div>
);


// ─────────────────────────────────────────────
// TOPIC CONTENT COMPONENTS
// ─────────────────────────────────────────────

const topicComponents = {

  definitions: ({ content }: { content: any }) => (
    <Section title={content.definitions.title} id="definitions">
      <SubHeading>{content.definitions.reagent}</SubHeading>
      <p className="text-gray-700 text-sm">{content.definitions.reagent_desc}</p>

      <SubHeading>{content.definitions.solution}</SubHeading>
      <p className="text-gray-700 text-sm">{content.definitions.solution_desc}</p>
      <InfoBox color="blue">
        <BulletList html items={[
          content.definitions.dilute_sol,
          content.definitions.concentrated_sol,
          content.definitions.saturated_sol,
          content.definitions.supersaturated_sol,
        ]} />
      </InfoBox>

      <SubHeading>{content.definitions.standard_sol}</SubHeading>
      <p className="text-gray-700 text-sm">{content.definitions.standard_sol_desc}</p>

      <SubHeading>{content.definitions.primary_standard}</SubHeading>
      <p className="text-gray-700 text-sm">{content.definitions.primary_standard_desc}</p>

      <SubHeading>{content.definitions.normal_sol}</SubHeading>
      <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: content.definitions.normal_sol_desc }} />
      <FormulaBox><span dangerouslySetInnerHTML={{ __html: content.definitions.normal_sol_formula }} /></FormulaBox>

      <SubHeading>{content.definitions.molar_sol}</SubHeading>
      <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: content.definitions.molar_sol_desc }} />

      <SubHeading>{content.definitions.molal_sol}</SubHeading>
      <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: content.definitions.molal_sol_desc }} />

      <SubHeading>{content.definitions.percent_sol}</SubHeading>
      <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: content.definitions.percent_sol_desc }} />

      <SubHeading>{content.definitions.ppm_ppb}</SubHeading>
      <p className="text-gray-700 text-sm">{content.definitions.ppm_ppb_desc}</p>

      <NoteBox>{content.definitions.note}</NoteBox>
    </Section>
  ),

  pipette: ({ content }: { content: any }) => (
    <Section title={content.pipette.title} id="pipette">
      <p className="text-gray-700 text-sm">{content.pipette.intro}</p>

      <InfoBox color="red">
        <p className="font-semibold text-sm mb-1 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> {content.pipette.sources_of_error}
        </p>
        <p className="text-sm">{content.pipette.sources_of_error_desc}</p>
      </InfoBox>

      <MethodCard title={content.pipette.comparison.title} color="blue">
        <p className="text-gray-700 text-sm">{content.pipette.comparison.desc}</p>
      </MethodCard>

      <MethodCard title={content.pipette.bis.title} color="green">
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: content.pipette.bis.desc }} />
        <StepList steps={content.pipette.bis.steps} html />
      </MethodCard>

      <MethodCard title={content.pipette.mathematical.title} color="purple">
        <p className="text-gray-700 text-sm italic">{content.pipette.mathematical.desc}</p>
      </MethodCard>
    </Section>
  ),

  butyrometer: ({ content }: { content: any }) => (
    <Section title={content.butyrometer.title} id="butyrometer">
      <p className="text-gray-700 text-sm">{content.butyrometer.intro}</p>

      <SubHeading>{content.butyrometer.principle.title}</SubHeading>
      <InfoBox color="yellow">
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: content.butyrometer.principle.desc }} />
      </InfoBox>

      <NoteBox>{content.butyrometer.mercury_density_table}</NoteBox>

      <SubHeading>{content.butyrometer.methods.title}</SubHeading>

      <MethodCard title={content.butyrometer.methods.comparison.title} color="blue">
        <p className="text-gray-700 text-sm">{content.butyrometer.methods.comparison.desc}</p>
        <BulletList items={content.butyrometer.methods.comparison.points} />
        <p className="mt-3 text-sm font-medium text-gray-700">{content.butyrometer.methods.comparison.conclusion}</p>
      </MethodCard>

      <MethodCard title={content.butyrometer.methods.bis.title} color="green">
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: content.butyrometer.methods.bis.desc }} />
        <StepList steps={content.butyrometer.methods.bis.steps} />
      </MethodCard>

      <MethodCard title={content.butyrometer.methods.gravimetric.title} color="purple">
        <p className="text-gray-700 text-sm">{content.butyrometer.methods.gravimetric.desc}</p>
        <StepList steps={content.butyrometer.methods.gravimetric.steps} html />
      </MethodCard>

      <InfoBox color="blue">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">Uncertainty Analysis</p>
        <p className="text-sm">{content.butyrometer.uncertainty_analysis}</p>
      </InfoBox>

      <div className="overflow-x-auto mt-6 rounded-xl border border-gray-200 shadow-sm">
        <Table>
          <TableCaption className="text-xs text-gray-500 pb-3">{content.butyrometer.table.caption}</TableCaption>
          <TableHeader>
            <TableRow className="bg-primary/5">
              <TableHead className="font-bold text-primary">{content.butyrometer.table.header1}</TableHead>
              <TableHead className="font-bold text-primary">{content.butyrometer.table.header2}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.butyrometer.table.rows.map((row: any, i: number) => (
              <TableRow key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <TableCell className="font-mono font-semibold text-primary">{row.scale}</TableCell>
                <TableCell>{row.product}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>
  ),

  lactometer: ({ content }: { content: any }) => (
    <Section title={content.lactometer.title} id="lactometer">
      <p className="text-gray-700 text-sm">{content.lactometer.intro}</p>

      <SubHeading>{content.lactometer.principle.title}</SubHeading>
      <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: content.lactometer.principle.desc1 }} />
      <p className="mt-2 text-gray-700 text-sm">{content.lactometer.principle.desc2}</p>

      <InfoBox color="cyan">
        <BulletList html items={content.lactometer.principle.types} />
      </InfoBox>

      <FormulaBox>
        <span dangerouslySetInnerHTML={{ __html: content.lactometer.principle.temperature_correction }} />
      </FormulaBox>

      <InfoBox color="green">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1">CLR Formula</p>
        <p className="text-sm">{content.lactometer.clr_formula}</p>
      </InfoBox>

      <SubHeading>{content.lactometer.methods.title}</SubHeading>

      <MethodCard title={content.lactometer.methods.comparison.title} color="blue">
        <p className="text-gray-700 text-sm">{content.lactometer.methods.comparison.desc}</p>
      </MethodCard>

      <MethodCard title={content.lactometer.methods.bis.title} color="green">
        <p className="text-gray-700 text-sm">{content.lactometer.methods.bis.desc}</p>
        <StepList steps={content.lactometer.methods.bis.steps} />
      </MethodCard>
    </Section>
  ),

  other: ({ content }: { content: any }) => (
    <Section title={content.other_glassware.title} id="other-glassware">
      <p className="text-gray-700 text-sm">{content.other_glassware.intro}</p>

      <SubHeading>{content.other_glassware.principle.title}</SubHeading>
      <InfoBox color="purple">
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: content.other_glassware.principle.desc }} />
      </InfoBox>

      <SubHeading>{content.other_glassware.procedure.title}</SubHeading>
      <StepList steps={content.other_glassware.procedure.steps} html />

      <NoteBox>{content.other_glassware.burette_calibration}</NoteBox>
    </Section>
  ),

  thermometer: ({ content }: { content: any }) => (
    <Section title={content.thermometer.title} id="thermometer">
      <p className="text-gray-700 text-sm">{content.thermometer.intro}</p>

      <InfoBox color="blue">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">Thermometer Types</p>
        <p className="text-sm">{content.thermometer.thermometer_types}</p>
      </InfoBox>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="rounded-xl border-2 border-blue-200 bg-blue-50/60 p-4">
          <SubHeading>{content.thermometer.ice_point.title}</SubHeading>
          <InfoBox color="cyan">
            <p className="text-xs italic">{content.thermometer.ice_point.scientific_basis}</p>
          </InfoBox>
          <StepList steps={content.thermometer.ice_point.steps} />
        </div>
        <div className="rounded-xl border-2 border-red-200 bg-red-50/60 p-4">
          <SubHeading>{content.thermometer.boiling_point.title}</SubHeading>
          <InfoBox color="orange">
            <p className="text-xs italic">{content.thermometer.boiling_point.scientific_basis}</p>
          </InfoBox>
          <StepList steps={content.thermometer.boiling_point.steps} />
        </div>
      </div>

      <NoteBox>{content.thermometer.rtd_calibration}</NoteBox>
    </Section>
  ),

  balance: ({ content }: { content: any }) => (
    <Section title={content.balance.title} id="balance">
      <p className="text-gray-700 text-sm">{content.balance.intro}</p>

      <InfoBox color="red">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-700 mb-1 flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5" /> Environmental Factors
        </p>
        <p className="text-sm">{content.balance.environmental_factors}</p>
      </InfoBox>

      <SubHeading>Calibration Tests</SubHeading>
      <div className="space-y-3 mt-3">
        {content.balance.tests.map((test: string, i: number) => (
          <div key={i} className="flex gap-3 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: test }} />
          </div>
        ))}
      </div>

      <NoteBox>{content.balance.calibration_weights}</NoteBox>
      <NoteBox>{content.balance.buoyancy_correction}</NoteBox>
    </Section>
  ),

  chemical: ({ content }: { content: any }) => (
    <Section title={content.chemical.title} id="chemical">
      <p className="text-gray-700 text-sm">{content.chemical.intro}</p>

      <SubHeading>{content.chemical.primary_standards_list}</SubHeading>

      {[
        { label: "Na₂CO₃", text: content.chemical.anhydrous_na2co3, color: "blue" },
        { label: "K₂Cr₂O₇", text: content.chemical.potassium_dichromate, color: "yellow" },
        { label: "Oxalic Acid", text: content.chemical.oxalic_acid, color: "purple" },
      ].map((item, i) => (
        <MethodCard key={i} title={item.label} color={item.color as any}>
          <p className="text-sm text-gray-700">{item.text}</p>
        </MethodCard>
      ))}

      <SubHeading>Secondary Standard Standardization</SubHeading>

      <MethodCard title="NaOH" color="green">
        <p className="text-sm text-gray-700">{content.chemical.naoh_standardization}</p>
      </MethodCard>
      <MethodCard title="H₂SO₄" color="blue">
        <p className="text-sm text-gray-700">{content.chemical.h2so4_standardization}</p>
      </MethodCard>
      <MethodCard title="EDTA" color="purple">
        <p className="text-sm text-gray-700">{content.chemical.edta_standardization}</p>
      </MethodCard>

      <InfoBox color="red">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-700 mb-1 flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5" /> Shelf Life & Storage
        </p>
        <p className="text-sm">{content.chemical.shelf_life}</p>
      </InfoBox>
    </Section>
  ),

  spectrophotometer: ({ content }: { content: any }) => (
    <Section title={content.spectrophotometer.title} id="spectrophotometer">
      <p className="text-gray-700 text-sm">{content.spectrophotometer.intro}</p>

      <SubHeading>Beer-Lambert Law</SubHeading>
      <InfoBox color="blue">
        <p className="text-sm">{content.spectrophotometer.beer_lambert_law}</p>
      </InfoBox>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <MethodCard title="Wavelength Calibration" color="blue">
          <p className="text-sm text-gray-700">{content.spectrophotometer.wavelength_calibration}</p>
        </MethodCard>
        <MethodCard title="Photometric Calibration" color="green">
          <p className="text-sm text-gray-700">{content.spectrophotometer.photometric_calibration}</p>
        </MethodCard>
        <MethodCard title="Stray Light Check" color="purple">
          <p className="text-sm text-gray-700">{content.spectrophotometer.stray_light}</p>
        </MethodCard>
        <MethodCard title="Linearity Verification" color="blue">
          <p className="text-sm text-gray-700">{content.spectrophotometer.linearity}</p>
        </MethodCard>
      </div>
    </Section>
  ),

  ph_meter: ({ content }: { content: any }) => (
    <Section title={content.ph_meter.title} id="ph_meter">
      <p className="text-gray-700 text-sm">{content.ph_meter.intro}</p>

      <SubHeading>Nernst Equation</SubHeading>
      <InfoBox color="blue">
        <p className="text-sm">{content.ph_meter.nernst_equation}</p>
      </InfoBox>

      <SubHeading>pH Buffer Standards</SubHeading>
      <InfoBox color="green">
        <p className="text-sm">{content.ph_meter.buffer_standards}</p>
      </InfoBox>

      <SubHeading>Two-Point Calibration</SubHeading>
      <MethodCard title="Calibration Procedure" color="blue">
        <p className="text-sm text-gray-700">{content.ph_meter.two_point_calibration}</p>
      </MethodCard>

      <SubHeading>Milk pH Reference Values</SubHeading>
      <InfoBox color="cyan">
        <p className="text-sm">{content.ph_meter.milk_ph}</p>
      </InfoBox>

      <SubHeading>Electrode Maintenance</SubHeading>
      <InfoBox color="orange">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-700 mb-1">Maintenance Protocol</p>
        <p className="text-sm">{content.ph_meter.maintenance}</p>
      </InfoBox>
    </Section>
  ),

  uncertainty: ({ content }: { content: any }) => (
    <Section title={content.uncertainty.title} id="uncertainty">
      <p className="text-gray-700 text-sm">{content.uncertainty.intro}</p>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="rounded-xl border-2 border-blue-200 bg-blue-50/60 p-4">
          <h4 className="font-bold text-blue-700 mb-2 text-sm">Type A Uncertainty</h4>
          <p className="text-sm text-gray-700">{content.uncertainty.type_a}</p>
        </div>
        <div className="rounded-xl border-2 border-purple-200 bg-purple-50/60 p-4">
          <h4 className="font-bold text-purple-700 mb-2 text-sm">Type B Uncertainty</h4>
          <p className="text-sm text-gray-700">{content.uncertainty.type_b}</p>
        </div>
      </div>

      <SubHeading>Combined & Expanded Uncertainty</SubHeading>
      <FormulaBox>{content.uncertainty.combined_uncertainty}</FormulaBox>

      <SubHeading>Practical Example — Fat Test Budget</SubHeading>
      <InfoBox color="green">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Worked Example
        </p>
        <p className="text-sm">{content.uncertainty.fat_test_example}</p>
      </InfoBox>
    </Section>
  ),

  documentation: ({ content }: { content: any }) => (
    <Section title={content.documentation.title} id="documentation">
      <p className="text-gray-700 text-sm">{content.documentation.intro}</p>

      <SubHeading>Calibration Record Elements</SubHeading>
      <InfoBox color="blue">
        <p className="text-sm">{content.documentation.calibration_record}</p>
      </InfoBox>

      <SubHeading>Recommended Calibration Schedule</SubHeading>
      <InfoBox color="green">
        <p className="text-sm">{content.documentation.calibration_schedule}</p>
      </InfoBox>

      <SubHeading>SOP Requirements</SubHeading>
      <InfoBox color="purple">
        <p className="text-sm">{content.documentation.sop_requirement}</p>
      </InfoBox>

      <SubHeading>Out-of-Tolerance Action Plan</SubHeading>
      <InfoBox color="red">
        <p className="text-xs font-semibold uppercase tracking-wide text-red-700 mb-1 flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5" /> OOT Response Protocol
        </p>
        <p className="text-sm">{content.documentation.out_of_tolerance}</p>
      </InfoBox>
    </Section>
  ),

  sop: ({ content }: { content: any }) => (
    <Section title={content.sop.title} id="sop">
      <p className="text-gray-700 text-sm">{content.sop.intro}</p>

      <SubHeading>Essential SOP Elements</SubHeading>
      <InfoBox color="blue">
        <p className="text-sm">{content.sop.sop_elements}</p>
      </InfoBox>

      <SubHeading>Competency & Training Requirements</SubHeading>
      <InfoBox color="green">
        <p className="text-sm">{content.sop.training_requirements}</p>
      </InfoBox>

      <SubHeading>Document Change Control</SubHeading>
      <InfoBox color="purple">
        <p className="text-sm">{content.sop.change_control}</p>
      </InfoBox>
    </Section>
  ),
};


// ─────────────────────────────────────────────
// TOPICS REGISTRY (icon + color config)
// ─────────────────────────────────────────────

const topics = [
  {
    value: "definitions",
    icon: BookOpen,
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
    borderClass: "border-blue-200",
    hoverClass: "hover:bg-blue-100",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    value: "pipette",
    icon: Droplets,
    colorClass: "text-sky-600",
    bgClass: "bg-sky-50",
    borderClass: "border-sky-200",
    hoverClass: "hover:bg-sky-100",
    badgeClass: "bg-sky-100 text-sky-700",
  },
  {
    value: "butyrometer",
    icon: FlaskConical,
    colorClass: "text-yellow-600",
    bgClass: "bg-yellow-50",
    borderClass: "border-yellow-200",
    hoverClass: "hover:bg-yellow-100",
    badgeClass: "bg-yellow-100 text-yellow-700",
  },
  {
    value: "lactometer",
    icon: Gauge,
    colorClass: "text-cyan-600",
    bgClass: "bg-cyan-50",
    borderClass: "border-cyan-200",
    hoverClass: "hover:bg-cyan-100",
    badgeClass: "bg-cyan-100 text-cyan-700",
  },
  {
    value: "other",
    icon: TestTube,
    colorClass: "text-purple-600",
    bgClass: "bg-purple-50",
    borderClass: "border-purple-200",
    hoverClass: "hover:bg-purple-100",
    badgeClass: "bg-purple-100 text-purple-700",
  },
  {
    value: "thermometer",
    icon: Thermometer,
    colorClass: "text-red-600",
    bgClass: "bg-red-50",
    borderClass: "border-red-200",
    hoverClass: "hover:bg-red-100",
    badgeClass: "bg-red-100 text-red-700",
  },
  {
    value: "balance",
    icon: Scale,
    colorClass: "text-emerald-600",
    bgClass: "bg-emerald-50",
    borderClass: "border-emerald-200",
    hoverClass: "hover:bg-emerald-100",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  {
    value: "chemical",
    icon: Beaker,
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200",
    hoverClass: "hover:bg-orange-100",
    badgeClass: "bg-orange-100 text-orange-700",
  },
  {
    value: "spectrophotometer",
    icon: Activity,
    colorClass: "text-violet-600",
    bgClass: "bg-violet-50",
    borderClass: "border-violet-200",
    hoverClass: "hover:bg-violet-100",
    badgeClass: "bg-violet-100 text-violet-700",
  },
  {
    value: "ph_meter",
    icon: Gauge,
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50",
    borderClass: "border-teal-200",
    hoverClass: "hover:bg-teal-100",
    badgeClass: "bg-teal-100 text-teal-700",
  },
  {
    value: "uncertainty",
    icon: Activity,
    colorClass: "text-indigo-600",
    bgClass: "bg-indigo-50",
    borderClass: "border-indigo-200",
    hoverClass: "hover:bg-indigo-100",
    badgeClass: "bg-indigo-100 text-indigo-700",
  },
  {
    value: "documentation",
    icon: FileText,
    colorClass: "text-rose-600",
    bgClass: "bg-rose-50",
    borderClass: "border-rose-200",
    hoverClass: "hover:bg-rose-100",
    badgeClass: "bg-rose-100 text-rose-700",
  },
  {
    value: "sop",
    icon: ClipboardList,
    colorClass: "text-lime-600",
    bgClass: "bg-lime-50",
    borderClass: "border-lime-200",
    hoverClass: "hover:bg-lime-100",
    badgeClass: "bg-lime-100 text-lime-700",
  },
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
  const { t } = useLanguage();
  const content = t(calibrationStandardizationContent);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  const handleSelectTopic = (topicValue: string) => {
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

  const selectedTopic = topics.find((t) => t.value === activeTopic);
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic as keyof typeof topicComponents]
    : null;

  // Group topics for the grid
  const instrumentTopics = topics.filter((t) =>
    ["definitions", "pipette", "butyrometer", "lactometer", "other", "thermometer", "balance"].includes(t.value)
  );
  const advancedTopics = topics.filter((t) =>
    ["chemical", "spectrophotometer", "ph_meter", "uncertainty", "documentation", "sop"].includes(t.value)
  );

  const TopicCard = ({ topic }: { topic: typeof topics[0] }) => (
    <button
      onClick={() => handleSelectTopic(topic.value)}
      className={`
        flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200
        text-left shadow-sm hover:shadow-md active:scale-[0.98]
        ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
        group
      `}
    >
      <div className={`p-2.5 rounded-lg bg-white/70 shadow-sm`}>
        <topic.icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${topic.colorClass}`} />
      </div>
      <span className="font-semibold text-sm text-gray-800 group-hover:text-black leading-tight">
        {content.tabs[topic.value as keyof typeof content.tabs]}
      </span>
      <ChevronRight className={`w-4 h-4 ml-auto shrink-0 opacity-40 group-hover:opacity-100 transition-opacity ${topic.colorClass}`} />
    </button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6 gap-0">

        {/* ── HEADER ── */}
        <DialogHeader className="px-5 pt-5 pb-3 sm:px-0 sm:pt-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary font-headline">
            {content.mainTitle}
          </DialogTitle>
          <DialogDescription className="text-center text-base text-muted-foreground mt-1">
            {selectedTopic
              ? content.tabs[selectedTopic.value as keyof typeof content.tabs]
              : content.description}
          </DialogDescription>
        </DialogHeader>

        {/* ── TOPIC VIEW ── */}
        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 py-2 sm:px-0 flex items-center gap-3 shrink-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100 text-sm">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                {content.backToTopics}
              </Button>
              <Badge className={`text-xs px-2 py-0.5 ${selectedTopic.badgeClass} border-0`}>
                {content.tabs[selectedTopic.value as keyof typeof content.tabs]}
              </Badge>
            </div>
            <ScrollArea className="flex-1 mt-2">
              <div className="px-4 pb-6 sm:px-0">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>

        ) : (
          /* ── TOPIC GRID (Home) ── */
          <ScrollArea className="flex-1 mt-2" viewportRef={scrollAreaRef}>
            <div className="px-4 sm:px-0 pb-6 space-y-6">

              {/* Intro block */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content.intro_p1 }} />
                <p className="text-gray-700 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content.intro_p2 }} />
                {content.intro_p3 && (
                  <p className="text-gray-700 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content.intro_p3 }} />
                )}
              </div>

              {/* Instrument & Methods */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">
                  Instruments & Methods
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {instrumentTopics.map((topic) => (
                    <TopicCard key={topic.value} topic={topic} />
                  ))}
                </div>
              </div>

              {/* Advanced Topics */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">
                  Advanced Topics
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {advancedTopics.map((topic) => (
                    <TopicCard key={topic.value} topic={topic} />
                  ))}
                </div>
              </div>

            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
