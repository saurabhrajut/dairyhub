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
// SHARED PRIMITIVE COMPONENTS (Crash-Safe)
// ═══════════════════════════════════════════════════════════

const Section = ({ title, id, children }: { title?: string; id: string; children: React.ReactNode }) => (
  <section id={id} className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
    {title && (
      <div className="bg-primary/5 px-5 py-4 border-b border-border">
        <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
      </div>
    )}
    <div className="p-5 sm:p-6 text-base leading-relaxed break-words">
      <div className="space-y-4">{children}</div>
    </div>
  </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  if (!children) return null;
  return (
    <div className="mt-5 mb-2 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary shrink-0 inline-block" />
      <h3 className="text-base font-bold text-gray-800 font-headline">{children}</h3>
    </div>
  );
};

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

  const safeColor = styles[color] ? color : "blue";

  return (
    <div className={`rounded-lg border p-4 text-sm ${styles[safeColor]}`}>
      {label && (
        <p className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${labelStyles[safeColor]}`}>
          {icon}{label}
        </p>
      )}
      {children}
    </div>
  );
};

const NoteBox = ({ children }: { children: React.ReactNode }) => {
  if (!children) return null;
  return (
    <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mt-3">
      <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">{children}</p>
    </div>
  );
};

const FormulaBox = ({ children }: { children: React.ReactNode }) => {
  if (!children) return null;
  return (
    <div className="font-mono text-sm bg-slate-900 text-slate-100 rounded-lg px-4 py-3 mt-2 overflow-x-auto whitespace-pre-wrap leading-relaxed">
      {children}
    </div>
  );
};

const BulletList = ({ items = [], html = false }: { items?: string[]; html?: boolean }) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          {html ? (
            <span className="text-gray-700 text-sm [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: item || "" }} />
          ) : (
            <span className="text-gray-700 text-sm">{item}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

const MethodCard = ({
  title, badge, children, color = "blue",
}: {
  title?: string; badge?: string; children: React.ReactNode;
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

  const safeColor = borders[color] ? color : "blue";

  return (
    <div className={`rounded-xl border-2 ${borders[safeColor]} p-4 mt-4`}>
      {(title || badge) && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {title && <h4 className="font-bold text-gray-800 text-sm">{title}</h4>}
          {badge && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColors[safeColor]}`}>{badge}</span>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

const TestCard = ({ test }: { test: any }) => {
  const [open, setOpen] = useState(false);
  if (!test) return null;

  return (
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Beaker className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="font-semibold text-gray-800 text-sm">{test.title || "Standard Test"}</p>
            {test.standard && <p className="text-xs text-gray-500 mt-0.5">{test.standard}</p>}
          </div>
        </div>
        <ChevronRight className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-3 space-y-4 border-t border-gray-100">
          {test.procedure && (
            <div
              className="text-sm text-gray-700 [&_h4]:font-bold [&_h4]:text-gray-800 [&_h4]:mt-2 [&_h4]:mb-1 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ol]:text-gray-700 [&_h4]:text-xs [&_h4]:uppercase [&_h4]:tracking-wider [&_h4]:text-primary"
              dangerouslySetInnerHTML={{ __html: test.procedure }}
            />
          )}
          {test.calculation && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Calculation</p>
              <FormulaBox>{test.calculation}</FormulaBox>
            </div>
          )}
          {test.acceptance && (
            <InfoBox color="green" label="Acceptance Criteria" icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
              <span className="whitespace-pre-line">{test.acceptance}</span>
            </InfoBox>
          )}
        </div>
      )}
    </div>
  );
};


// ═══════════════════════════════════════════════════════════
// TOPIC CONTENT COMPONENTS (8 tabs - Deep Null Protected)
// ═══════════════════════════════════════════════════════════

const topicComponents = {

  // ── 1. INTRODUCTION ──────────────────────────────────────
  intro: ({ content }: { content: any }) => {
    const c = content?.introduction || {};
    const purposes = Array.isArray(c.purposes) ? c.purposes : [];
    const standardsList = Array.isArray(c.standards_list) ? c.standards_list : [];

    return (
      <Section title={c.title || "Introduction"} id="intro">
        {c.p1 && <p className="text-gray-700 text-sm">{c.p1}</p>}
        {c.p2 && <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: c.p2 }} />}
        {c.p3 && <p className="text-gray-700 text-sm">{c.p3}</p>}

        {c.purpose_title && <SubHeading>{c.purpose_title}</SubHeading>}
        {purposes.length > 0 && (
          <div className="space-y-3">
            {purposes.map((p: string, i: number) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: p || "" }} />
              </div>
            ))}
          </div>
        )}

        {c.p4 && <NoteBox>{c.p4}</NoteBox>}

        {c.key_standards && (
          <>
            <SubHeading>{c.key_standards}</SubHeading>
            <BulletList items={standardsList} html />
          </>
        )}
      </Section>
    );
  },

  // ── 2. MATERIALS ─────────────────────────────────────────
  materials: ({ content }: { content: any }) => {
    const c = content?.materials || {};
    const glass = c.glass || {};
    const plastics = c.plastics || {};
    const plasticTypes = Array.isArray(plastics.types) ? plastics.types : [];
    const laminates = c.laminates || {};
    const addMat = c.additionalMaterials || {};
    const addMatItems = Array.isArray(addMat.items) ? addMat.items : [];

    return (
      <Section title={c.title || "Packaging Materials"} id="materials">
        {c.intro && <p className="text-gray-700 text-sm">{c.intro}</p>}

        {/* Glass */}
        <MethodCard title={glass.title || "Glass"} badge="Traditional" color="cyan">
          {glass.p1 && <p className="text-sm text-gray-700">{glass.p1}</p>}
          {glass.p2 && (
            <InfoBox color="yellow" label="Limitations" icon={<AlertTriangle className="w-3.5 h-3.5" />}>
              <p className="text-sm">{glass.p2}</p>
            </InfoBox>
          )}
          {glass.p3 && <p className="text-sm text-gray-700 mt-2">{glass.p3}</p>}
          {glass.scientific_data && <FormulaBox>{glass.scientific_data}</FormulaBox>}
        </MethodCard>

        {/* Plastics */}
        <MethodCard title={plastics.title || "Plastics"} badge="92% Market Share" color="blue">
          {plastics.p1 && <p className="text-sm text-gray-700">{plastics.p1}</p>}
          {plasticTypes.length > 0 && (
            <div className="mt-3 space-y-3">
              {plasticTypes.map((type: string, i: number) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-lg p-3 text-sm text-gray-700 [&_h4]:font-bold [&_h4]:text-primary [&_h4]:mb-1 [&_h4]:text-sm"
                  dangerouslySetInnerHTML={{ __html: type || "" }}
                />
              ))}
            </div>
          )}
        </MethodCard>

        {/* Laminates */}
        <MethodCard title={laminates.title || "Laminates"} badge="6-Layer UHT Grade" color="purple">
          {laminates.p1 && <p className="text-sm text-gray-700">{laminates.p1}</p>}
          {laminates.p2 && (
            <div
              className="mt-3 text-sm text-gray-700 space-y-2 bg-white border border-purple-100 rounded-lg p-4 [&_strong]:font-bold [&_strong]:text-purple-700"
              dangerouslySetInnerHTML={{ __html: laminates.p2.replace(/<br\s*[\/]?>/gi, "<br/>") }}
            />
          )}
          {laminates.p3 && <p className="text-sm text-gray-700 mt-3">{laminates.p3}</p>}
          {laminates.layer_comparison && <NoteBox>{laminates.layer_comparison}</NoteBox>}
        </MethodCard>

        {/* Additional Materials */}
        {addMat.title && <SubHeading>{addMat.title}</SubHeading>}
        {addMatItems.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-3">
            {addMatItems.map((item: string, i: number) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-gray-800"
                dangerouslySetInnerHTML={{ __html: item || "" }}
              />
            ))}
          </div>
        )}
      </Section>
    );
  },

  // ── 3. FORMS & PROCESSES ─────────────────────────────────
  forms: ({ content }: { content: any }) => {
    const c = content?.forms || {};
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
      <Section title={c.title || "Forms & Processes"} id="forms">
        {c.p1 && (
          <InfoBox color="blue" label="Indian Dairy Market Distribution">
            <p className="text-sm">{c.p1}</p>
          </InfoBox>
        )}

        {formItems.map(({ key, color, badge }) => {
          const form = c[key];
          if (!form) return null;
          return (
            <MethodCard key={key} title={form.title || key} badge={badge} color={color}>
              {form.p1 && <p className="text-sm text-gray-700">{form.p1}</p>}
              {form.p2 && (
                <div className="text-sm text-gray-700 mt-2 [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: form.p2 }} />
              )}
              {form.p3 && <p className="text-sm text-gray-700 mt-2">{form.p3}</p>}
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
    const c = content?.testing || {};
    const allTests = Array.isArray(c.tests) ? c.tests : [];

    // Safe lowercase matching to prevent crashes
    const paperTests = allTests.filter((t: any) => {
      const title = (t?.title || "").toLowerCase();
      return title.includes("paper") || title.includes("gsm") || title.includes("cobb") || title.includes("bursting");
    });
    const filmTests = allTests.filter((t: any) => {
      const title = (t?.title || "").toLowerCase();
      return title.includes("film") || title.includes("thickness") || title.includes("tensile") || title.includes("wvtr") || title.includes("otr");
    });
    const otherTests = allTests.filter((t: any) => !paperTests.includes(t) && !filmTests.includes(t));

    const TestGroup = ({ label, tests, color }: { label: string; tests: any[]; color: string }) => {
      if (tests.length === 0) return null;
      return (
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${color}`}>{label}</p>
          <div className="space-y-3">{tests.map((t: any, i: number) => <TestCard key={i} test={t} />)}</div>
        </div>
      );
    };

    return (
      <Section title={c.title || "Standard Testing"} id="testing">
        {c.intro && <p className="text-gray-700 text-sm">{c.intro}</p>}

        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          {c.sampling_title && (
            <InfoBox color="blue" label={c.sampling_title} icon={<Boxes className="w-3.5 h-3.5" />}>
              <p className="text-sm">{c.sampling_text || ""}</p>
            </InfoBox>
          )}
          {c.conditioning_title && (
            <InfoBox color="orange" label={c.conditioning_title} icon={<Thermometer className="w-3.5 h-3.5" />}>
              <p className="text-sm">{c.conditioning_text || ""}</p>
            </InfoBox>
          )}
        </div>

        <div className="mt-6 space-y-8">
          <TestGroup label="📄 Paper / Paperboard Tests" tests={paperTests} color="text-yellow-700" />
          <TestGroup label="🎞️ Film & Barrier Tests" tests={filmTests} color="text-blue-700" />
          <TestGroup label="📦 Container & Seal Tests" tests={otherTests} color="text-purple-700" />
        </div>
      </Section>
    );
  },

  // ── 5. LABELING & REGULATIONS ────────────────────────────
  labeling: ({ content }: { content: any }) => {
    const c = content?.labeling || {};
    const fssaiItems = Array.isArray(c.fssai_items) ? c.fssai_items : [];
    const bisItems = Array.isArray(c.bis_items) ? c.bis_items : [];

    return (
      <Section title={c.title || "Labeling & Regulations"} id="labeling">
        {c.intro && (
          <InfoBox color="red" label="Regulatory Compliance" icon={<AlertTriangle className="w-3.5 h-3.5" />}>
            <p className="text-sm">{c.intro}</p>
          </InfoBox>
        )}

        {c.fssai_requirements && <SubHeading>{c.fssai_requirements}</SubHeading>}
        {fssaiItems.length > 0 && (
          <div className="space-y-2 mt-2">
            {fssaiItems.map((item: string, i: number) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-blue-700" dangerouslySetInnerHTML={{ __html: item || "" }} />
              </div>
            ))}
          </div>
        )}

        {c.bis_standards && (
          <>
            <SubHeading>{c.bis_standards}</SubHeading>
            {bisItems.length > 0 && (
              <div className="space-y-2 mt-2">
                {bisItems.map((item: string, i: number) => (
                  <div key={i} className="flex gap-3 bg-blue-50/50 border border-blue-100 rounded-lg p-3">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-blue-800" dangerouslySetInnerHTML={{ __html: item || "" }} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

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
    const c = content?.sustainability || {};
    const plasticItems = Array.isArray(c.plastic_items) ? c.plastic_items : [];

    return (
      <Section title={c.title || "Sustainability"} id="sustainability">
        {c.intro && (
          <InfoBox color="green" label="Why Sustainability Matters" icon={<Leaf className="w-3.5 h-3.5" />}>
            <p className="text-sm">{c.intro}</p>
          </InfoBox>
        )}

        {c.lca && (
          <>
            <SubHeading>{(c.lca || "").split("—")[0] || "Life Cycle Assessment"}</SubHeading>
            <InfoBox color="indigo" icon={<Globe className="w-3.5 h-3.5" />}>
              <p className="text-sm">{c.lca}</p>
            </InfoBox>
          </>
        )}

        {c.plastic_alternatives && <SubHeading>{c.plastic_alternatives}</SubHeading>}
        {plasticItems.length > 0 && (
          <div className="space-y-3">
            {plasticItems.map((item: string, i: number) => (
              <div key={i} className="flex gap-3 bg-emerald-50/60 border border-emerald-200 rounded-lg p-3">
                <Recycle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-emerald-700" dangerouslySetInnerHTML={{ __html: item || "" }} />
              </div>
            ))}
          </div>
        )}

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
    const c = content?.active_intelligent || {};
    const activeItems = Array.isArray(c.active_items) ? c.active_items : [];
    const intelItems = Array.isArray(c.intelligent_items) ? c.intelligent_items : [];
    const cardColors = ["blue", "green", "orange", "purple", "teal", "cyan"] as const;

    return (
      <Section title={c.title || "Active & Intelligent Packaging"} id="active_intelligent">
        {c.intro && (
          <InfoBox color="indigo" label="Overview" icon={<Zap className="w-3.5 h-3.5" />}>
            <p className="text-sm">{c.intro}</p>
          </InfoBox>
        )}

        {c.active_types && <SubHeading>{c.active_types}</SubHeading>}
        {activeItems.length > 0 && (
          <div className="space-y-3">
            {activeItems.map((item: string, i: number) => (
              <MethodCard
                key={i}
                color={cardColors[i % cardColors.length]}
              >
                <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: item || "" }} />
              </MethodCard>
            ))}
          </div>
        )}

        {c.intelligent_types && <SubHeading>{c.intelligent_types}</SubHeading>}
        {intelItems.length > 0 && (
          <div className="space-y-3">
            {intelItems.map((item: string, i: number) => (
              <div key={i} className="flex gap-3 bg-violet-50 border border-violet-200 rounded-lg p-3">
                <Cpu className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-violet-700" dangerouslySetInnerHTML={{ __html: item || "" }} />
              </div>
            ))}
          </div>
        )}
      </Section>
    );
  },

  // ── 8. COLD CHAIN & LOGISTICS ────────────────────────────
  cold_chain: ({ content }: { content: any }) => {
    const c = content?.cold_chain || {};
    const tempItems = Array.isArray(c.temp_items) ? c.temp_items : [];
    
    return (
      <Section title={c.title || "Cold Chain & Logistics"} id="cold_chain">
        {c.intro && (
          <InfoBox color="cyan" label="Cold Chain Integration" icon={<Thermometer className="w-3.5 h-3.5" />}>
            <p className="text-sm">{c.intro}</p>
          </InfoBox>
        )}

        {c.temperature_zones && <SubHeading>{c.temperature_zones}</SubHeading>}
        {tempItems.length > 0 && (
          <div className="space-y-3 mt-2">
            {tempItems.map((item: string, i: number) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                <p className="text-sm text-gray-700 [&_strong]:font-bold [&_strong]:text-blue-800" dangerouslySetInnerHTML={{ __html: item || "" }} />
              </div>
            ))}
          </div>
        )}

        {c.insulated_packaging && (
          <>
            <SubHeading>Insulated Packaging</SubHeading>
            <InfoBox color="blue">
              <p className="text-sm">{c.insulated_packaging}</p>
            </InfoBox>
          </>
        )}

        {c.distribution_packaging && (
          <>
            <SubHeading>Distribution Layers</SubHeading>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-2">
              <Truck className="w-5 h-5 text-orange-500 mb-2" />
              <p className="text-sm text-gray-700">{c.distribution_packaging}</p>
            </div>
          </>
        )}

        {c.nanotechnology && (
          <>
            <SubHeading>Future: Nanotechnology</SubHeading>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mt-2">
              <div className="flex gap-2">
                <FlaskConical className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
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

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  const handleSelectTopic = (val: string) => {
    const viewport = document.querySelector('#home-grid-area [data-radix-scroll-area-viewport]');
    if (viewport) {
      scrollPosition.current = viewport.scrollTop;
    }
    setActiveTopic(val);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic) {
      const timer = setTimeout(() => {
        const viewport = document.querySelector('#home-grid-area [data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = scrollPosition.current;
        }
      }, 15);
      return () => clearTimeout(timer); // Leak protection added
    }
  }, [activeTopic]);

  if (!content || !content.tabs) return null;

  const selectedTopic = topics.find((t) => t.value === activeTopic);
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic as keyof typeof topicComponents]
    : null;

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
          {content.tabs[topic.value as keyof typeof content.tabs] || topic.value}
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
            {content.title || "Packaging & Testing"}
          </DialogTitle>
          <DialogDescription className="text-center text-base text-muted-foreground mt-1">
            {selectedTopic
              ? content.tabs[selectedTopic.value as keyof typeof content.tabs] || selectedTopic.sub
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

              {/* Topic grid */}
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
