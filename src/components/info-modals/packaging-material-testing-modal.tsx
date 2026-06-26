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
import { cn } from "@/lib/utils";
import {
  ArrowLeft, BookOpen, Layers, Package, FlaskConical,
  Tag, Leaf, Zap, Truck, ChevronRight, AlertTriangle,
  Info, CheckCircle2, Beaker, Boxes, Thermometer,
  ShieldCheck, Recycle, Cpu, Globe, Search,
  Sparkles, LayoutGrid, Activity, PackageCheck,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { packagingContent } from "@/lib/content/packaging-content";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "विषयों पर वापस (Back)",
    topics: "Topics",
    modules: "Packaging",
    langPill: "QC Hindi",
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Packaging",
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

// ═══════════════════════════════════════════════════════════
// TYPES & INTERFACES
// ═══════════════════════════════════════════════════════════

type ColorVariant = 
  | "blue" | "yellow" | "green" | "red" | "purple" 
  | "cyan" | "orange" | "emerald" | "indigo" | "rose" 
  | "teal" | "amber";

type MethodColorVariant = 
  | "blue" | "green" | "purple" | "orange" 
  | "cyan" | "rose" | "amber" | "teal" | "indigo";

// ═══════════════════════════════════════════════════════════
// SHARED PRIMITIVE COMPONENTS (Crash-Safe & Premium)
// ═══════════════════════════════════════════════════════════

const Section = ({ title, id, children }: { title?: string; id: string; children: React.ReactNode }) => (
  <section id={id} className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden w-full">
    {title && (
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 px-4 sm:px-5 py-3 border-b border-gray-200">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 font-headline leading-snug">{title}</h2>
      </div>
    )}
    <div className="p-4 sm:p-6 text-gray-700 text-sm sm:text-base leading-relaxed break-words">
      <div className="space-y-4">{children}</div>
    </div>
  </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  if (!children) return null;
  return (
    <div className="mt-6 mb-2 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary shrink-0 inline-block mt-0.5" />
      <h3 className="text-[15px] sm:text-base font-bold text-gray-800 font-headline break-words">{children}</h3>
    </div>
  );
};

const InfoBox = ({
  children, color = "blue", label, icon,
}: {
  children: React.ReactNode;
  color?: ColorVariant;
  label?: string;
  icon?: React.ReactNode;
}) => {
  const styles: Record<ColorVariant, string> = {
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
  const labelStyles: Record<ColorVariant, string> = {
    blue: "text-blue-700", yellow: "text-yellow-700", green: "text-green-700",
    red: "text-red-700", purple: "text-purple-700", cyan: "text-cyan-700",
    orange: "text-orange-700", emerald: "text-emerald-700", indigo: "text-indigo-700",
    rose: "text-rose-700", teal: "text-teal-700", amber: "text-amber-700",
  };

  const safeColor = styles[color] ? color : "blue";

  return (
    <div className={cn("rounded-xl border p-3 sm:p-4 text-sm shadow-sm w-full", styles[safeColor])}>
      {label && (
        <p className={cn("text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5", labelStyles[safeColor])}>
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
    <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mt-3 shadow-sm w-full overflow-hidden">
      <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
      <div className="text-sm text-amber-800 min-w-0 flex-1 break-words">{children}</div>
    </div>
  );
};

const FormulaBox = ({ children }: { children: React.ReactNode }) => {
  if (!children) return null;
  return (
    <div className="font-mono text-[13px] sm:text-sm bg-slate-900 text-slate-100 rounded-xl px-4 py-3 mt-2 overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-sm w-full">
      {children}
    </div>
  );
};

const BulletList = ({ items = [], html = false }: { items?: string[]; html?: boolean }) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;
  return (
    <ul className="space-y-2 mt-3 w-full">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 min-w-0">
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          {html ? (
            <span className="text-gray-700 text-sm min-w-0 flex-1 break-words [&_strong]:font-bold [&_strong]:text-gray-800" dangerouslySetInnerHTML={{ __html: item || "" }} />
          ) : (
            <span className="text-gray-700 text-sm min-w-0 flex-1 break-words">{item}</span>
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
  color?: MethodColorVariant;
}) => {
  const borders: Record<MethodColorVariant, string> = {
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
  const badgeColors: Record<MethodColorVariant, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200", green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200", orange: "bg-orange-100 text-orange-700 border-orange-200",
    cyan: "bg-cyan-100 text-cyan-700 border-cyan-200", rose: "bg-rose-100 text-rose-700 border-rose-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200", teal: "bg-teal-100 text-teal-700 border-teal-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };

  const safeColor = borders[color] ? color : "blue";

  return (
    <div className={cn("rounded-xl border shadow-sm p-4 mt-4 w-full", borders[safeColor])}>
      {(title || badge) && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {title && <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">{title}</h4>}
          {badge && (
            <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-bold border", badgeColors[safeColor])}>{badge}</span>
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
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Beaker className="w-4 h-4 text-primary shrink-0" />
          <div className="min-w-0 flex-1 pr-2">
            <p className="font-semibold text-gray-800 text-sm break-words">{test.title || "Standard Test"}</p>
            {test.standard && <p className="text-xs text-gray-500 mt-0.5 break-words">{test.standard}</p>}
          </div>
        </div>
        <ChevronRight className={cn("w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200", open ? "rotate-90" : "")} />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-3 space-y-4 border-t border-gray-100">
          {test.procedure && (
            <div
              className="text-sm text-gray-700 break-words [&_h4]:font-bold [&_h4]:text-gray-800 [&_h4]:mt-2 [&_h4]:mb-1 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ol]:text-gray-700 [&_h4]:text-xs [&_h4]:uppercase [&_h4]:tracking-wider [&_h4]:text-primary"
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
              <span className="whitespace-pre-line break-words">{test.acceptance}</span>
            </InfoBox>
          )}
        </div>
      )}
    </div>
  );
};

// ── Topic Card (Premium Square) ──
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
          topic.badge === "Eco" ? "bg-green-100 text-green-700 border-green-200" :
          topic.badge === "Lab" ? "bg-rose-100 text-rose-700 border-rose-200" :
          "bg-blue-100 text-blue-700 border-blue-200"
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
    {topic.sub && (
      <span className="relative z-10 text-[9px] sm:text-[10px] text-slate-400 mt-1 line-clamp-1 group-hover:text-slate-500 transition-colors hidden sm:block">
        {topic.sub}
      </span>
    )}
    <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
    <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
  </button>
);


// ═══════════════════════════════════════════════════════════
// TOPIC CONTENT COMPONENTS (8 tabs - Deep Null Protected)
// ═══════════════════════════════════════════════════════════

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const topicComponents: Record<string, React.FC<{ content: any }>> = {

  intro: ({ content }) => {
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

  materials: ({ content }) => {
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

  forms: ({ content }) => {
    const c = content?.forms || {};
    const formItems = [
      { key: "aseptic",    color: "blue"   as MethodColorVariant, badge: "6–12 Month Shelf Life" },
      { key: "fino",       color: "green"  as MethodColorVariant, badge: "90–120 Days Ambient" },
      { key: "pet",        color: "cyan"   as MethodColorVariant, badge: "Premium Reclosable" },
      { key: "retort",     color: "orange" as MethodColorVariant, badge: "In-Container Sterilization" },
      { key: "pouches",    color: "purple" as MethodColorVariant, badge: "92% Market Share" },
      { key: "cups",       color: "rose"   as MethodColorVariant, badge: "Fermented Products" },
      { key: "bag_in_box", color: "teal"   as MethodColorVariant, badge: "Institutional Bulk" },
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

  testing: ({ content }) => {
    const c = content?.testing || {};
    const allTests = Array.isArray(c.tests) ? c.tests : [];

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
          <p className={cn("text-xs font-bold uppercase tracking-widest mb-3", color)}>{label}</p>
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

  labeling: ({ content }) => {
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

  sustainability: ({ content }) => {
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

  active_intelligent: ({ content }) => {
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

  cold_chain: ({ content }) => {
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
// PREMIUM TOPICS REGISTRY
// ═══════════════════════════════════════════════════════════

const topics = [
  { value: "intro", icon: BookOpen, color: "from-blue-500 to-cyan-500", bgLight: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200", badge: "Core", sub: "Overview & 5P Framework" },
  { value: "materials", icon: Layers, color: "from-purple-500 to-fuchsia-600", bgLight: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200", badge: "Core", sub: "Glass, Plastics, Laminates" },
  { value: "forms", icon: Package, color: "from-emerald-400 to-green-500", bgLight: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200", badge: null, sub: "Aseptic, Pouches, PET, Cups, BIB" },
  { value: "testing", icon: FlaskConical, color: "from-rose-400 to-red-500", bgLight: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200", badge: "Lab", sub: "17 Standardised Tests" },
  { value: "labeling", icon: Tag, color: "from-orange-400 to-amber-500", bgLight: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200", badge: "Legal", sub: "FSSAI 2020, Mandatory Fields" },
  { value: "sustainability", icon: Leaf, color: "from-green-500 to-emerald-600", bgLight: "bg-green-50 hover:bg-green-100", borderClass: "border-green-200", badge: "Eco", sub: "EPR, LCA, Bio-materials" },
  { value: "active_intelligent", icon: Zap, color: "from-violet-500 to-purple-600", bgLight: "bg-violet-50 hover:bg-violet-100", borderClass: "border-violet-200", badge: "Tech", sub: "O₂ Scavengers, TTI, RFID" },
  { value: "cold_chain", icon: Truck, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200", badge: "Logistics", sub: "Temperature Table, Distribution" },
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
  const [searchQuery, setSearchQuery] = useState("");
  const { t, language } = useLanguage();
  const content = t(packagingContent);
  const scrollPosition = useRef(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
      return () => clearTimeout(timer);
    }
  }, [activeTopic]);

  if (!content || !content.tabs) return null;

  const getTopicTitle = (topicValue: string): string => {
    return content.tabs[topicValue as keyof typeof content.tabs] || topicValue;
  };

  const filteredTopics = searchQuery.trim()
    ? topics.filter(t => getTopicTitle(t.value).toLowerCase().includes(searchQuery.toLowerCase()))
    : topics;

  const selectedTopic = activeTopic ? topics.find((t) => t.value === activeTopic) : null;
  const ActiveComponent = activeTopic ? topicComponents[activeTopic] : null;

  const getDialogDescription = () => {
    if (selectedTopic) return "Detailed packaging protocols & standards.";
    return content.description || "Explore complete dairy packaging techniques and tests.";
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
              📦 {content.title || "Packaging & Testing"}
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
                {lbl.backToTopics}
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
                  placeholder="Search packaging topics..."
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-full px-4 py-1.5 sm:py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 transition-all placeholder:text-slate-400"
                />
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium whitespace-nowrap hidden sm:block">
                Showing {filteredTopics.length} entries
              </p>
            </div>

            <ScrollArea className="flex-1 h-full w-full" id="home-grid-area" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 pb-10 max-w-6xl mx-auto space-y-6 sm:space-y-8">

                {/* Intro banner */}
                {!searchQuery && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <span className="font-bold text-blue-800 text-xs sm:text-sm uppercase tracking-wide">
                        Dairy Packaging — Complete Scientific Guide
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{content.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {[
                        { label: "Market Share",   value: "92%",  sub: "Flexible Pouches" },
                        { label: "Shelf Life",     value: "12mo", sub: "Aseptic / UHT" },
                        { label: "Tests Covered",  value: "17+",  sub: "BIS / ASTM / ISO" },
                        { label: "Topics",         value: "8",    sub: "Comprehensive" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/80 rounded-xl p-3 text-center border border-blue-100">
                          <p className="text-lg sm:text-xl font-black text-blue-700">{stat.value}</p>
                          <p className="text-[11px] sm:text-xs font-semibold text-gray-700 mt-0.5">{stat.label}</p>
                          <p className="text-[9px] sm:text-[10px] text-gray-400">{stat.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Topic grid */}
                {filteredTopics.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <Package className="w-4 h-4 text-indigo-500" />
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                        Select a Topic
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                      {filteredTopics.map((topic) => (
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
                    <p className="text-sm font-medium">No topics match "{searchQuery}"</p>
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
