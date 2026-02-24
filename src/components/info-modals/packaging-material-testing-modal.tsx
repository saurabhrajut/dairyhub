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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft, BookOpen, Layers, Package, FlaskConical,
  Tag, Leaf, Zap, Truck, ChevronRight, AlertTriangle,
  Info, CheckCircle2, Beaker, Boxes, Thermometer,
  ShieldCheck, Recycle, Cpu, Globe,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { packagingContent } from "@/lib/content/packaging-content";


// ═══════════════════════════════════════════════════════════
// SHARED PRIMITIVE COMPONENTS
// ═══════════════════════════════════════════════════════════

const Section = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => (
  <section id={id} className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
    <div className="bg-primary/5 px-5 py-4 border-b border-border">
      <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
    </div>
    <div className="p-5 sm:p-6 text-base leading-relaxed break-words">
      <div className="space-y-4">{children}</div>
    </div>
  </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-5 mb-2 flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-primary shrink-0 inline-block" />
    <h3 className="text-base font-bold text-gray-800 font-headline">{children}</h3>
  </div>
);

const InfoBox = ({
  children, color = "blue", label, icon,
}: {
  children: React.ReactNode;
  color?: "blue" | "yellow" | "green" | "red" | "purple" | "cyan" | "orange" | "emerald" | "indigo" | "rose" | "teal" | "amber";
  label?: string;
  icon?: React.ReactNode;
}) => {
  const styles: Record<string, string> = {
    blue:    "bg-blue-50 border-blue-200 text-blue-900",
    yellow:  "bg-yellow-50 border-yellow-200 text-yellow-900",
    green:   "bg-green-50 border-green-200 text-green-900",
    red:     "bg-red-50 border-red-200 text-red-900",
    purple:  "bg-purple-50 border-purple-200 text-purple-900",
    cyan:    "bg-cyan-50 border-cyan-200 text-cyan-900",
    orange:  "bg-orange-50 border-orange-200 text-orange-900",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-900",
    indigo:  "bg-indigo-50 border-indigo-200 text-indigo-900",
    rose:    "bg-rose-50 border-rose-200 text-rose-900",
    teal:    "bg-teal-50 border-teal-200 text-teal-900",
    amber:   "bg-amber-50 border-amber-200 text-amber-900",
  };
  const labelStyles: Record<string, string> = {
    blue: "text-blue-700", yellow: "text-yellow-700", green: "text-green-700",
    red: "text-red-700", purple: "text-purple-700", cyan: "text-cyan-700",
    orange: "text-orange-700", emerald: "text-emerald-700", indigo: "text-indigo-700",
    rose: "text-rose-700", teal: "text-teal-700", amber: "text-amber-700",
  };
  return (
    <div className={`rounded-lg border p-4 text-sm ${styles[color]}`}>
      {label && (
        <p className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${labelStyles[color]}`}>
          {icon}{label}
        </p>
      )}
      {children}
    </div>
  );
};

const NoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mt-3">
    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
    <p className="text-sm text-amber-800">{children}</p>
  </div>
);

const FormulaBox = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-sm bg-slate-900 text-slate-100 rounded-lg px-4 py-3 mt-2 overflow-x-auto whitespace-pre-wrap leading-relaxed">
    {children}
  </div>
);

const BulletList = ({ items, html = false }: { items: string[]; html?: boolean }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2.5">
        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        {html ? (
          <span className="text-gray-700 text-sm [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: item }} />
        ) : (
          <span className="text-gray-700 text-sm">{item}</span>
        )}
      </li>
    ))}
  </ul>
);

const MethodCard = ({
  title, badge, children, color = "blue",
}: {
  title: string; badge?: string; children: React.ReactNode;
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "rose" | "amber" | "teal" | "indigo";
}) => {
  const borders: Record<string, string> = {
    blue:   "border-blue-200 bg-blue-50/50",
    green:  "border-green-200 bg-green-50/50",
    purple: "border-purple-200 bg-purple-50/50",
    orange: "border-orange-200 bg-orange-50/50",
    cyan:   "border-cyan-200 bg-cyan-50/50",
    rose:   "border-rose-200 bg-rose-50/50",
    amber:  "border-amber-200 bg-amber-50/50",
    teal:   "border-teal-200 bg-teal-50/50",
    indigo: "border-indigo-200 bg-indigo-50/50",
  };
  const badgeColors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700", green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700", orange: "bg-orange-100 text-orange-700",
    cyan: "bg-cyan-100 text-cyan-700", rose: "bg-rose-100 text-rose-700",
    amber: "bg-amber-100 text-amber-700", teal: "bg-teal-100 text-teal-700",
    indigo: "bg-indigo-100 text-indigo-700",
  };
  return (
    <div className={`rounded-xl border-2 ${borders[color]} p-4 mt-4`}>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
        {badge && (
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColors[color]}`}>{badge}</span>
        )}
      </div>
      {children}
    </div>
  );
};

// Collapsible Test Card for Testing tab
const TestCard = ({ test }: { test: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Beaker className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="font-semibold text-gray-800 text-sm">{test.title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{test.standard}</p>
          </div>
        </div>
        <ChevronRight className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-3 space-y-4 border-t border-gray-100">
          <div
            className="text-sm text-gray-700 [&_h4]:font-bold [&_h4]:text-gray-800 [&_h4]:mt-2 [&_h4]:mb-1 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ol]:text-gray-700 [&_h4]:text-xs [&_h4]:uppercase [&_h4]:tracking-wider [&_h4]:text-primary"
            dangerouslySetInnerHTML={{ __html: test.procedure }}
          />
          {test.calculation && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Calculation</p>
              <FormulaBox>{test.calculation}</FormulaBox>
            </div>
          )}
          <InfoBox color="green" label="Acceptance Criteria" icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
            <span className="whitespace-pre-line">{test.acceptance}</span>
          </InfoBox>
        </div>
      )}
    </div>
  );
};


// ═══════════════════════════════════════════════════════════
// TOPIC CONTENT COMPONENTS (8 tabs)
// ═══════════════════════════════════════════════════════════

const topicComponents = {

  // ── 1. INTRODUCTION ──────────────────────────────────────
  intro: ({ content }: { content: any }) => {
    const c = content.introduction;
    return (
      <Section title={c.title} id="intro">
        <p className="text-gray-700 text-sm">{c.p1}</p>
        <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.p2 }} />
        <p className="text-gray-700 text-sm">{c.p3}</p>

        <SubHeading>{c.purpose_title}</SubHeading>
        <div className="space-y-3">
          {c.purposes.map((p: string, i: number) => (
            <div key={i} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: p }} />
            </div>
          ))}
        </div>

        <NoteBox>{c.p4}</NoteBox>

        {c.key_standards && (
          <>
            <SubHeading>{c.key_standards}</SubHeading>
            <BulletList items={c.standards_list} html />
          </>
        )}
      </Section>
    );
  },

  // ── 2. MATERIALS ─────────────────────────────────────────
  materials: ({ content }: { content: any }) => {
    const c = content.materials;
    return (
      <Section title={c.title} id="materials">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        {/* Glass */}
        <MethodCard title={c.glass.title} badge="Traditional" color="cyan">
          <p className="text-sm text-gray-700">{c.glass.p1}</p>
          <InfoBox color="yellow" label="Limitations" icon={<AlertTriangle className="w-3.5 h-3.5" />}>
            <p className="text-sm">{c.glass.p2}</p>
          </InfoBox>
          <p className="text-sm text-gray-700 mt-2">{c.glass.p3}</p>
          {c.glass.scientific_data && (
            <FormulaBox>{c.glass.scientific_data}</FormulaBox>
          )}
        </MethodCard>

        {/* Plastics */}
        <MethodCard title={c.plastics.title} badge="92% Market Share" color="blue">
          <p className="text-sm text-gray-700">{c.plastics.p1}</p>
          <div className="mt-3 space-y-3">
            {c.plastics.types.map((type: string, i: number) => (
              <div
                key={i}
                className="bg-white border border-blue-100 rounded-lg p-3 text-sm text-gray-700 [&_h4]:font-bold [&_h4]:text-primary [&_h4]:mb-1 [&_h4]:text-sm"
                dangerouslySetInnerHTML={{ __html: type }}
              />
            ))}
          </div>
        </MethodCard>

        {/* Laminates - FIX APPLIED HERE */}
        <MethodCard title={c.laminates.title} badge="6-Layer UHT Grade" color="purple">
          <p className="text-sm text-gray-700">{c.laminates.p1}</p>
          <div
            className="mt-3 text-sm text-gray-700 space-y-2 bg-white border border-purple-100 rounded-lg p-4 [&_strong]:font-bold [&_strong]:text-purple-700"
            // FIX: Added (c.laminates.p2 || "") to prevent crash if p2 is undefined
            dangerouslySetInnerHTML={{ __html: (c.laminates.p2 || "").replace(/<br><br>/g, "<br/>") }}
          />
          <p className="text-sm text-gray-700 mt-3">{c.laminates.p3}</p>
          {c.laminates.layer_comparison && (
            <NoteBox>{c.laminates.layer_comparison}</NoteBox>
          )}
        </MethodCard>

        {/* Additional Materials */}
        <SubHeading>{c.additionalMaterials.title}</SubHeading>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.additionalMaterials.items.map((item: string, i: number) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-gray-800"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
      </Section>
    );
  },

  // ── 3. FORMS & PROCESSES ─────────────────────────────────
  forms: ({ content }: { content: any }) => {
    const c = content.forms;
    const formItems = [
      { key: "aseptic",    color: "blue"   as const, badge: "6–12 Month Shelf Life" },
      { key: "fino",       color: "green"  as const, badge: "90–120 Days Ambient" },
      { key: "pet",        color: "cyan"   as const, badge: "Premium Reclosable" },
      { key: "retort",     color: "orange" as const, badge: "In-Container Sterilization" },
      { key: "pouches",    color: "purple" as const, badge: "92% Market Share" },
      { key: "cups",       color: "rose"   as const, badge: "Fermented Products" },
      { key: "bag_in_box", color: "teal"   as const, badge: "Institutional Bulk" },
    ];
    return (
      <Section title={c.title} id="forms">
        <InfoBox color="blue" label="Indian Dairy Market Distribution">
          <p className="text-sm">{c.p1}</p>
        </InfoBox>

        {formItems.map(({ key, color, badge }) => {
          const form = c[key];
          if (!form) return null;
          return (
            <MethodCard key={key} title={form.title} badge={badge} color={color}>
              <p className="text-sm text-gray-700">{form.p1}</p>
              {form.p2 && (
                <div className="text-sm text-gray-700 mt-2 [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: form.p2 }} />
              )}
              {form.p3 && (
                <p className="text-sm text-gray-700 mt-2">{form.p3}</p>
              )}
              {form.p4 && (
                <div className="mt-3 bg-white border rounded-lg p-3 text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-primary" dangerouslySetInnerHTML={{ __html: form.p4 }} />
              )}
            </MethodCard>
          );
        })}
      </Section>
    );
  },

  // ── 4. TESTING ───────────────────────────────────────────
  testing: ({ content }: { content: any }) => {
    const c = content.testing;
    const paperTests = c.tests.filter((t: any) => t.title.toLowerCase().includes("paper") || t.title.toLowerCase().includes("gsm") || t.title.toLowerCase().includes("cobb") || t.title.toLowerCase().includes("bursting"));
    const filmTests  = c.tests.filter((t: any) => t.title.toLowerCase().includes("film") || t.title.toLowerCase().includes("thickness") || t.title.toLowerCase().includes("tensile") || t.title.toLowerCase().includes("wvtr") || t.title.toLowerCase().includes("otr"));
    const otherTests = c.tests.filter((t: any) =>
      !paperTests.includes(t) && !filmTests.includes(t)
    );

    const TestGroup = ({ label, tests, color }: { label: string; tests: any[]; color: string }) => (
      <div>
        <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${color}`}>{label}</p>
        <div className="space-y-3">{tests.map((t: any, i: number) => <TestCard key={i} test={t} />)}</div>
      </div>
    );

    return (
      <Section title={c.title} id="testing">
        <p className="text-gray-700 text-sm">{c.intro}</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <InfoBox color="blue" label={c.sampling_title} icon={<Boxes className="w-3.5 h-3.5" />}>
            <p className="text-sm">{c.sampling_text}</p>
          </InfoBox>
          <InfoBox color="orange" label={c.conditioning_title} icon={<Thermometer className="w-3.5 h-3.5" />}>
            <p className="text-sm">{c.conditioning_text}</p>
          </InfoBox>
        </div>

        <div className="mt-6 space-y-8">
          {paperTests.length > 0  && <TestGroup label="📄 Paper / Paperboard Tests" tests={paperTests}  color="text-yellow-700" />}
          {filmTests.length > 0   && <TestGroup label="🎞️ Film & Barrier Tests"     tests={filmTests}   color="text-blue-700" />}
          {otherTests.length > 0  && <TestGroup label="📦 Container & Seal Tests"   tests={otherTests}  color="text-purple-700" />}
        </div>
      </Section>
    );
  },

  // ── 5. LABELING & REGULATIONS ────────────────────────────
  labeling: ({ content }: { content: any }) => {
    const c = content.labeling || {};
    // Content keys map
    const fssaiItems = c.fssai_items || [];
    const bisItems = c.bis_items || [];

    return (
      <Section title={c.title} id="labeling">
        <InfoBox color="red" label="Regulatory Compliance" icon={<AlertTriangle className="w-3.5 h-3.5" />}>
          <p className="text-sm">{c.intro}</p>
        </InfoBox>

        {/* FSSAI Section */}
        <SubHeading>{c.fssai_requirements}</SubHeading>
        <div className="space-y-2 mt-2">
          {fssaiItems.map((item: string, i: number) => (
            <div key={i} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-blue-700" dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          ))}
        </div>

        {/* BIS Standards Section */}
        {c.bis_standards && (
          <>
            <SubHeading>{c.bis_standards}</SubHeading>
            <div className="space-y-2 mt-2">
              {bisItems.map((item: string, i: number) => (
                <div key={i} className="flex gap-3 bg-blue-50/50 border border-blue-100 rounded-lg p-3">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-blue-800" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Eco Labeling Section */}
        {c.eco_labeling && (
          <>
            <SubHeading>Eco-labeling & Sustainability</SubHeading>
            <InfoBox color="green" icon={<Recycle className="w-3.5 h-3.5" />}>
              <p className="text-sm">{c.eco_labeling}</p>
            </InfoBox>
          </>
        )}
      </Section>
    );
  },

  // ── 6. SUSTAINABILITY ────────────────────────────────────
  sustainability: ({ content }: { content: any }) => {
    const c = content.sustainability || {};
    const plasticItems = c.plastic_items || [];

    return (
      <Section title={c.title} id="sustainability">
        <InfoBox color="green" label="Why Sustainability Matters" icon={<Leaf className="w-3.5 h-3.5" />}>
          <p className="text-sm">{c.intro}</p>
        </InfoBox>

        {/* LCA Section */}
        <SubHeading>{c.lca?.split("—")[0] || "Life Cycle Assessment"}</SubHeading>
        <InfoBox color="indigo" icon={<Globe className="w-3.5 h-3.5" />}>
          <p className="text-sm">{c.lca}</p>
        </InfoBox>

        {/* Material Comparison Section */}
        <SubHeading>{c.plastic_alternatives}</SubHeading>
        <div className="space-y-3">
          {plasticItems.map((item: string, i: number) => (
            <div
              key={i}
              className="flex gap-3 bg-emerald-50/60 border border-emerald-200 rounded-lg p-3"
            >
              <Recycle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-emerald-700" dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          ))}
        </div>

        {/* EPR Compliance */}
        {c.epr_compliance && (
           <>
            <SubHeading>EPR Compliance</SubHeading>
            <InfoBox color="red" icon={<AlertTriangle className="w-3.5 h-3.5" />}>
              <p className="text-sm">{c.epr_compliance}</p>
            </InfoBox>
           </>
        )}
      </Section>
    );
  },

  // ── 7. ACTIVE & INTELLIGENT PACKAGING ────────────────────
  active_intelligent: ({ content }: { content: any }) => {
    const c = content.active_intelligent || {};
    const activeItems = c.active_items || [];
    const intelItems = c.intelligent_items || [];

    return (
      <Section title={c.title} id="active_intelligent">
        <InfoBox color="indigo" label="Overview" icon={<Zap className="w-3.5 h-3.5" />}>
          <p className="text-sm">{c.intro}</p>
        </InfoBox>

        <SubHeading>{c.active_types}</SubHeading>
        <div className="space-y-3">
          {activeItems.map((item: string, i: number) => (
            <MethodCard
              key={i}
              title=""
              color={["blue","green","orange","purple","teal","cyan"][i % 6] as any}
            >
              <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: item }} />
            </MethodCard>
          ))}
        </div>

        <SubHeading>{c.intelligent_types}</SubHeading>
        <div className="space-y-3">
          {intelItems.map((item: string, i: number) => (
            <div key={i} className="flex gap-3 bg-violet-50 border border-violet-200 rounded-lg p-3">
              <Cpu className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-violet-700" dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          ))}
        </div>
      </Section>
    );
  },

  // ── 8. COLD CHAIN & LOGISTICS ────────────────────────────
  cold_chain: ({ content }: { content: any }) => {
    const c = content.cold_chain || {};
    // Use temp_items (array of strings) instead of temp_table (array of objects)
    const tempItems = c.temp_items || [];
    
    return (
      <Section title={c.title} id="cold_chain">
        <InfoBox color="cyan" label="Cold Chain Integration" icon={<Thermometer className="w-3.5 h-3.5" />}>
          <p className="text-sm">{c.intro}</p>
        </InfoBox>

        {/* Temperature Zones List */}
        <SubHeading>{c.temperature_zones}</SubHeading>
        <div className="space-y-3 mt-2">
            {tempItems.map((item: string, i: number) => (
               <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-blue-800" dangerouslySetInnerHTML={{ __html: item }} />
               </div>
            ))}
        </div>

        {/* Insulated Packaging */}
        {c.insulated_packaging && (
          <>
            <SubHeading>Insulated Packaging</SubHeading>
            <InfoBox color="blue">
              <p className="text-sm">{c.insulated_packaging}</p>
            </InfoBox>
          </>
        )}

        {/* Distribution Packaging */}
        {c.distribution_packaging && (
           <>
             <SubHeading>Distribution Layers</SubHeading>
             <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-2">
               <Truck className="w-5 h-5 text-orange-500 mb-2" />
               <p className="text-sm text-gray-700">{c.distribution_packaging}</p>
             </div>
           </>
        )}

        {/* Nanotechnology */}
        {c.nanotechnology && (
           <>
             <SubHeading>Future: Nanotechnology</SubHeading>
             <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mt-2">
               <div className="flex gap-2">
                 <FlaskConical className="w-4 h-4 text-purple-500 mt-1" />
                 <p className="text-sm text-gray-700">{c.nanotechnology}</p>
               </div>
             </div>
           </>
        )}
      </Section>
    );
  },
};

// ═══════════════════════════════════════════════════════════
// TOPICS REGISTRY — 8 tabs
// ═══════════════════════════════════════════════════════════

const topics = [
  {
    value: "intro",
    icon: BookOpen,
    colorClass:  "text-blue-600",
    bgClass:     "bg-blue-50",
    borderClass: "border-blue-200",
    hoverClass:  "hover:bg-blue-100",
    badgeClass:  "bg-blue-100 text-blue-700",
    sub: "Overview & 5P Framework",
  },
  {
    value: "materials",
    icon: Layers,
    colorClass:  "text-purple-600",
    bgClass:     "bg-purple-50",
    borderClass: "border-purple-200",
    hoverClass:  "hover:bg-purple-100",
    badgeClass:  "bg-purple-100 text-purple-700",
    sub: "Glass, Plastics, Laminates",
  },
  {
    value: "forms",
    icon: Package,
    colorClass:  "text-emerald-600",
    bgClass:     "bg-emerald-50",
    borderClass: "border-emerald-200",
    hoverClass:  "hover:bg-emerald-100",
    badgeClass:  "bg-emerald-100 text-emerald-700",
    sub: "Aseptic, Pouches, PET, Cups, BIB",
  },
  {
    value: "testing",
    icon: FlaskConical,
    colorClass:  "text-rose-600",
    bgClass:     "bg-rose-50",
    borderClass: "border-rose-200",
    hoverClass:  "hover:bg-rose-100",
    badgeClass:  "bg-rose-100 text-rose-700",
    sub: "17 Standardised Tests",
  },
  {
    value: "labeling",
    icon: Tag,
    colorClass:  "text-orange-600",
    bgClass:     "bg-orange-50",
    borderClass: "border-orange-200",
    hoverClass:  "hover:bg-orange-100",
    badgeClass:  "bg-orange-100 text-orange-700",
    sub: "FSSAI 2020, Mandatory Fields",
  },
  {
    value: "sustainability",
    icon: Leaf,
    colorClass:  "text-green-600",
    bgClass:     "bg-green-50",
    borderClass: "border-green-200",
    hoverClass:  "hover:bg-green-100",
    badgeClass:  "bg-green-100 text-green-700",
    sub: "EPR, LCA, Bio-materials",
  },
  {
    value: "active_intelligent",
    icon: Zap,
    colorClass:  "text-violet-600",
    bgClass:     "bg-violet-50",
    borderClass: "border-violet-200",
    hoverClass:  "hover:bg-violet-100",
    badgeClass:  "bg-violet-100 text-violet-700",
    sub: "O₂ Scavengers, TTI, RFID",
  },
  {
    value: "cold_chain",
    icon: Truck,
    colorClass:  "text-cyan-600",
    bgClass:     "bg-cyan-50",
    borderClass: "border-cyan-200",
    hoverClass:  "hover:bg-cyan-100",
    badgeClass:  "bg-cyan-100 text-cyan-700",
    sub: "Temperature Table, Distribution",
  },
];


// ═══════════════════════════════════════════════════════════
// MAIN MODAL COMPONENT
// ═══════════════════════════════════════════════════════════

export function PackagingMaterialTestingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { t } = useLanguage();
  const content = t(packagingContent);
  const scrollPosition = useRef(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null); // Kept for viewportRef if needed, but not used for logic

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  // FIX: Scroll Saving Logic
  const handleSelectTopic = (val: string) => {
    // 1. Topic open hone se pehle Current Scroll Position save karo
    const viewport = document.querySelector('#home-grid-area [data-radix-scroll-area-viewport]');
    if (viewport) {
      scrollPosition.current = viewport.scrollTop;
    }
    setActiveTopic(val);
  };

  const handleBack = () => setActiveTopic(null);

  // FIX: Scroll Restoration Logic
  useEffect(() => {
    if (!activeTopic) {
      setTimeout(() => {
        // 2. Jab wapas aao (!activeTopic), to Scroll Position restore karo
        const viewport = document.querySelector('#home-grid-area [data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = scrollPosition.current;
        }
      }, 10); // Thoda sa delay taaki DOM ready ho jaye
    }
  }, [activeTopic]);

  if (!content) return null;

  const selectedTopic = topics.find((t) => t.value === activeTopic);
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic as keyof typeof topicComponents]
    : null;

  // ── Topic Card (home grid) ──
  const TopicCard = ({ topic }: { topic: (typeof topics)[0] }) => (
    <button
      onClick={() => handleSelectTopic(topic.value)}
      className={`
        flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200
        text-left shadow-sm hover:shadow-md active:scale-[0.98]
        ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
        group
      `}
    >
      <div className="p-3 rounded-xl bg-white/70 shadow-sm shrink-0">
        <topic.icon className={`w-6 h-6 transition-transform duration-200 group-hover:scale-110 ${topic.colorClass}`} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-bold text-base text-gray-800 block leading-tight font-headline">
          {content.tabs[topic.value as keyof typeof content.tabs]}
        </span>
        <span className="text-xs text-gray-500 mt-0.5 block">{topic.sub}</span>
      </div>
      <ChevronRight className={`w-4 h-4 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity ${topic.colorClass}`} />
    </button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6 gap-0">

        {/* ── HEADER ── */}
        <DialogHeader className="px-5 pt-5 pb-3 sm:px-0 sm:pt-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-base text-muted-foreground mt-1">
            {selectedTopic
              ? content.tabs[selectedTopic.value as keyof typeof content.tabs]
              : content.description}
          </DialogDescription>
        </DialogHeader>

        {/* ── TOPIC DETAIL VIEW ── */}
        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 py-2 sm:px-0 flex items-center gap-3 shrink-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100 text-sm">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Back to Topics
              </Button>
              <Badge className={`text-xs px-2 py-0.5 border-0 ${selectedTopic.badgeClass}`}>
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
          /* ── HOME GRID ── */
          // FIX: Added ID 'home-grid-area' for scroll restoration
          <ScrollArea className="flex-1 mt-2" id="home-grid-area">
            <div className="px-4 sm:px-0 pb-6 space-y-5">

              {/* Intro banner */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-800 text-sm uppercase tracking-wide">
                    Dairy Packaging — Complete Scientific Guide
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{content.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {[
                    { label: "Market Share",   value: "92%",  sub: "Flexible Pouches" },
                    { label: "Shelf Life",     value: "12mo", sub: "Aseptic / UHT" },
                    { label: "Tests Covered",  value: "17+",  sub: "BIS / ASTM / ISO" },
                    { label: "Topics",         value: "8",    sub: "Comprehensive" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/80 rounded-lg p-3 text-center border border-blue-100">
                      <p className="text-xl font-black text-blue-700">{stat.value}</p>
                      <p className="text-xs font-semibold text-gray-700 mt-0.5">{stat.label}</p>
                      <p className="text-xs text-gray-400">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topic grid — 2 columns */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-0.5">
                  Select a Topic
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topics.map((topic) => (
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
