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
import { useLanguage } from "@/context/language-context";
import { cipProcessContent } from "@/lib/content/cip-process-content";
import { Button } from "../ui/button";
import {
  ArrowLeft, BookOpen, ChevronsRight, Recycle, Settings,
  TestTube, Wind, FlaskConical, Thermometer, Layers,
  Droplets, Leaf, ShieldCheck, ChevronDown, ChevronUp
} from "lucide-react";

// ─────────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────────

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden w-full max-w-full">
    <div className="bg-muted/40 px-5 py-3 border-b border-border w-full">
      <h2 className="text-xl font-bold text-primary font-headline break-words">{title}</h2>
    </div>
    <div className="p-4 sm:p-6 text-card-foreground text-gray-700 w-full min-w-0 max-w-full">
      <div className="space-y-4 w-full min-w-0">{children}</div>
    </div>
  </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 mb-3 w-full min-w-0">
    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 font-headline w-full max-w-full">
      <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
      <span className="flex-1 break-words strict-html-wrap">{children}</span>
    </h3>
  </div>
);

// Collapsible card for CIP cycle steps
const CollapsibleStep = ({ step, index, total }: { step: any; index: number; total: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full min-w-0">
      <div className={`border rounded-xl shadow-sm transition-all w-full min-w-0 max-w-full ${step.colorClass || "bg-white border-gray-200"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-4 text-left flex items-center gap-3 group"
        >
          <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border border-primary/20 shrink-0">
            {index + 1}
          </span>
          <span className="font-bold text-base text-primary flex-1 group-hover:text-primary/80 break-words w-full min-w-0">
            {step.title}
          </span>
          {open ? (
            <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
          )}
        </button>
        {open && (
          <div
            className="px-5 pb-4 text-sm text-gray-700 border-t border-black/5 pt-3 w-full max-w-full strict-html-wrap prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: step.details }}
          />
        )}
      </div>
      {index < total - 1 && (
        <div className="flex justify-center my-1">
          <div className="h-5 w-0.5 bg-gray-300" />
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────
// Topic Content Renderers
// ─────────────────────────────────────────────

const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
  intro({ content }) {
    return (
      <Section title={content.intro.title}>
        <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.intro.htmlContent }} />
      </Section>
    );
  },

  cip_cycle({ content }) {
    return (
      <Section title={content.cip_cycle.title}>
        <p className="mb-5 text-gray-600 strict-html-wrap">{content.cip_cycle.intro}</p>
        <div className="space-y-1 w-full min-w-0 max-w-full">
          {content.cip_cycle.steps.map((step: any, i: number) => (
            <CollapsibleStep
              key={i}
              step={step}
              index={i}
              total={content.cip_cycle.steps.length}
            />
          ))}
        </div>
      </Section>
    );
  },

  chemicals({ content }) {
    return (
      <Section title={content.chemicals.title}>
        <p className="mb-4 text-gray-600 strict-html-wrap">{content.chemicals.intro}</p>
        <div className="grid gap-4 w-full min-w-0 max-w-full">
          {content.chemicals.types.map((type: any, i: number) => (
            <div key={i} className="bg-purple-50 p-5 rounded-xl border border-purple-100 w-full min-w-0 max-w-full">
              <h3 className="text-base font-bold mb-2 text-purple-900 flex items-center gap-2 w-full min-w-0">
                <FlaskConical className="w-4 h-4 shrink-0" />
                <span className="flex-1 strict-html-wrap">{type.title}</span>
              </h3>
              <div
                className="text-purple-800 strict-html-wrap prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: type.details }}
              />
            </div>
          ))}
        </div>
      </Section>
    );
  },

  advantages({ content }) {
    return (
      <Section title={content.advantages.title}>
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 w-full min-w-0 max-w-full">
          <ul className="grid gap-3 w-full min-w-0">
            {content.advantages.list.map((adv: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-emerald-900 text-sm w-full min-w-0">
                <ChevronsRight className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                <span className="flex-1 strict-html-wrap">{adv}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
  },

  cleaning_procedures({ content }) {
    return (
      <Section title={content.cleaning_procedures.title}>
        {content.cleaning_procedures.sections.map((sec: any, i: number) => (
          <div key={i} className="mb-6 last:mb-0 w-full min-w-0 max-w-full">
            <SubHeading>{sec.title}</SubHeading>
            <div
              className="text-gray-700 strict-html-wrap prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: sec.content }}
            />
          </div>
        ))}
      </Section>
    );
  },

  teepol_detergent({ content }) {
    return (
      <Section title={content.teepol_detergent.title}>
        <div
          className="text-gray-800 strict-html-wrap prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content.teepol_detergent.htmlContent }}
        />
      </Section>
    );
  },

  sip({ content }) {
    return (
      <Section title={content.sip.title}>
        <p className="mb-4 text-gray-600 strict-html-wrap">{content.sip.intro}</p>
        <div className="bg-red-50 p-5 rounded-xl border border-red-100 w-full min-w-0 max-w-full">
          <div
            className="text-red-900 strict-html-wrap prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content.sip.process }}
          />
        </div>
      </Section>
    );
  },

  biofilm({ content }) {
    return (
      <Section title={content.biofilm.title}>
        <p className="mb-4 text-gray-600 strict-html-wrap">{content.biofilm.intro}</p>
        <div className="bg-rose-50 p-5 rounded-xl border border-rose-200 w-full min-w-0 max-w-full">
          <div
            className="text-rose-900 strict-html-wrap prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content.biofilm.htmlContent }}
          />
        </div>
      </Section>
    );
  },

  water_quality({ content }) {
    return (
      <Section title={content.water_quality.title}>
        <p className="mb-4 text-gray-600 strict-html-wrap">{content.water_quality.intro}</p>
        <div className="bg-sky-50 p-5 rounded-xl border border-sky-200 w-full min-w-0 max-w-full">
          <div
            className="text-sky-900 strict-html-wrap prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content.water_quality.htmlContent }}
          />
        </div>
      </Section>
    );
  },

  environmental_compliance({ content }) {
    return (
      <Section title={content.environmental_compliance.title}>
        <p className="mb-4 text-gray-600 strict-html-wrap">{content.environmental_compliance.intro}</p>
        <div className="bg-green-50 p-5 rounded-xl border border-green-200 w-full min-w-0 max-w-full">
          <div
            className="text-green-900 strict-html-wrap prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content.environmental_compliance.htmlContent }}
          />
        </div>
      </Section>
    );
  },

  haccp_cip({ content }) {
    return (
      <Section title={content.haccp_cip.title}>
        <p className="mb-4 text-gray-600 strict-html-wrap">{content.haccp_cip.intro}</p>
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 w-full min-w-0 max-w-full">
          <div
            className="text-slate-800 strict-html-wrap prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content.haccp_cip.htmlContent }}
          />
        </div>
      </Section>
    );
  },

  solution_strength({ content }) {
    return (
      <Section title={content.solution_strength.title}>
        <p className="mb-4 text-gray-600 strict-html-wrap">{content.solution_strength.intro}</p>
        <div className="mt-4 p-5 bg-indigo-50 border border-indigo-100 rounded-xl w-full min-w-0 max-w-full">
          <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-base w-full min-w-0">
            <TestTube className="w-5 h-5 shrink-0" />
            <span className="flex-1 strict-html-wrap">{content.solution_strength.alkalinity_test.title}</span>
          </h4>
          <div
            className="text-indigo-900 strict-html-wrap prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content.solution_strength.alkalinity_test.content }}
          />
        </div>
      </Section>
    );
  },
};

// ─────────────────────────────────────────────
// Topic Configuration
// ─────────────────────────────────────────────

type TopicConfig = {
  value: string;
  titleKey: keyof typeof cipProcessContent.en;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  hoverClass: string;
  badgeClass: string;
  category: "core" | "advanced" | "compliance";
};

const TOPIC_CONFIGS: TopicConfig[] = [
  { value: "intro", titleKey: "intro", icon: BookOpen, colorClass: "text-blue-600", bgClass: "bg-blue-50", borderClass: "border-blue-200", hoverClass: "hover:bg-blue-100", badgeClass: "bg-blue-100 text-blue-700", category: "core" },
  { value: "cip_cycle", titleKey: "cip_cycle", icon: Recycle, colorClass: "text-emerald-600", bgClass: "bg-emerald-50", borderClass: "border-emerald-200", hoverClass: "hover:bg-emerald-100", badgeClass: "bg-emerald-100 text-emerald-700", category: "core" },
  { value: "chemicals", titleKey: "chemicals", icon: FlaskConical, colorClass: "text-purple-600", bgClass: "bg-purple-50", borderClass: "border-purple-200", hoverClass: "hover:bg-purple-100", badgeClass: "bg-purple-100 text-purple-700", category: "core" },
  { value: "cleaning_procedures", titleKey: "cleaning_procedures", icon: Settings, colorClass: "text-orange-600", bgClass: "bg-orange-50", borderClass: "border-orange-200", hoverClass: "hover:bg-orange-100", badgeClass: "bg-orange-100 text-orange-700", category: "core" },
  { value: "teepol_detergent", titleKey: "teepol_detergent", icon: Wind, colorClass: "text-cyan-600", bgClass: "bg-cyan-50", borderClass: "border-cyan-200", hoverClass: "hover:bg-cyan-100", badgeClass: "bg-cyan-100 text-cyan-700", category: "core" },
  { value: "sip", titleKey: "sip", icon: Thermometer, colorClass: "text-red-600", bgClass: "bg-red-50", borderClass: "border-red-200", hoverClass: "hover:bg-red-100", badgeClass: "bg-red-100 text-red-700", category: "advanced" },
  { value: "biofilm", titleKey: "biofilm", icon: Layers, colorClass: "text-rose-600", bgClass: "bg-rose-50", borderClass: "border-rose-200", hoverClass: "hover:bg-rose-100", badgeClass: "bg-rose-100 text-rose-700", category: "advanced" },
  { value: "water_quality", titleKey: "water_quality", icon: Droplets, colorClass: "text-sky-600", bgClass: "bg-sky-50", borderClass: "border-sky-200", hoverClass: "hover:bg-sky-100", badgeClass: "bg-sky-100 text-sky-700", category: "advanced" },
  { value: "advantages", titleKey: "advantages", icon: ChevronsRight, colorClass: "text-teal-600", bgClass: "bg-teal-50", borderClass: "border-teal-200", hoverClass: "hover:bg-teal-100", badgeClass: "bg-teal-100 text-teal-700", category: "advanced" },
  { value: "environmental_compliance", titleKey: "environmental_compliance", icon: Leaf, colorClass: "text-green-600", bgClass: "bg-green-50", borderClass: "border-green-200", hoverClass: "hover:bg-green-100", badgeClass: "bg-green-100 text-green-700", category: "compliance" },
  { value: "haccp_cip", titleKey: "haccp_cip", icon: ShieldCheck, colorClass: "text-slate-600", bgClass: "bg-slate-50", borderClass: "border-slate-200", hoverClass: "hover:bg-slate-100", badgeClass: "bg-slate-100 text-slate-700", category: "compliance" },
  { value: "solution_strength", titleKey: "solution_strength", icon: TestTube, colorClass: "text-indigo-600", bgClass: "bg-indigo-50", borderClass: "border-indigo-200", hoverClass: "hover:bg-indigo-100", badgeClass: "bg-indigo-100 text-indigo-700", category: "compliance" },
];

const CATEGORY_LABELS = {
  core: { en: "Core Topics", hi: "मुख्य विषय", color: "text-gray-700 border-gray-200 bg-gray-50" },
  advanced: { en: "Advanced Science", hi: "Advanced Science", color: "text-gray-700 border-gray-200 bg-gray-50" },
  compliance: { en: "Testing & Compliance", hi: "Testing & Compliance", color: "text-gray-700 border-gray-200 bg-gray-50" },
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────

export function CipProcessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const content = t(cipProcessContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  if (!content) return null;

  const topics = TOPIC_CONFIGS.map((cfg) => {
    const section = content[cfg.titleKey] as any;
    return {
      ...cfg,
      title: section?.title ?? cfg.value,
    };
  });

  const selectedTopic = topics.find((t) => t.value === activeTopic);
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic as keyof typeof topicComponents]
    : null;

  const handleSelectTopic = (value: string) => {
    if (scrollAreaRef.current) scrollPosition.current = scrollAreaRef.current.scrollTop;
    setActiveTopic(value);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current)
          scrollAreaRef.current.scrollTop = scrollPosition.current;
      }, 0);
    }
  }, [activeTopic]);

  const categories = (["core", "advanced", "compliance"] as const).map((cat) => ({
    key: cat,
    label: language === "hi"
      ? CATEGORY_LABELS[cat].hi
      : CATEGORY_LABELS[cat].en,
    color: CATEGORY_LABELS[cat].color,
    topics: topics.filter((t) => t.category === cat),
  }));

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* GLOBAL CSS OVERRIDE: Yeh tag HTML engine ko force karega ki wo width break na kare */}
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

      {/* Reduced w-[95vw] to w-[90vw] to guarantee mobile padding safety */}
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[90vw] sm:w-[95vw] h-full max-h-[92vh] flex flex-col p-0 sm:p-6 gap-0 overflow-hidden box-border">
        {/* Header */}
        <DialogHeader className="px-4 pt-4 pb-3 sm:px-0 sm:pt-0 shrink-0 border-b border-border sm:border-none w-full max-w-full box-border">
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary font-headline strict-html-wrap">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base text-muted-foreground mt-1 strict-html-wrap">
            {selectedTopic ? selectedTopic.title : content.main_description}
          </DialogDescription>
        </DialogHeader>

        {/* Body */}
        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0 min-w-0 max-w-full w-full overflow-hidden box-border">
            {/* Back button + breadcrumb */}
            <div className="flex items-center gap-2 px-4 pt-3 pb-1 sm:px-0 w-full min-w-0 max-w-full shrink-0">
              <Button variant="ghost" size="sm" onClick={handleBack} className="hover:bg-slate-100 gap-1.5 shrink-0">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Topics</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <span className="text-muted-foreground text-xs hidden sm:flex items-center gap-1 min-w-0 max-w-full">
                <span className="shrink-0">/</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium truncate ${selectedTopic.badgeClass}`}
                >
                  {selectedTopic.title}
                </span>
              </span>
            </div>
            
            <ScrollArea className="flex-1 mt-2 sm:pr-2 w-full min-w-0 max-w-full overflow-hidden">
              <div className="px-4 pb-6 sm:px-0 sm:pb-4 w-full min-w-0 max-w-full overflow-hidden">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* Topic Grid */
          <ScrollArea className="flex-1 mt-3 w-full min-w-0 max-w-full overflow-hidden" viewportRef={scrollAreaRef}>
            <div className="px-4 pb-6 sm:px-2 space-y-6 w-full min-w-0 max-w-full">
              {categories.map((cat) => (
                <div key={cat.key} className="w-full min-w-0 max-w-full">
                  <div className={`flex items-center gap-2 mb-3 pb-2 border-b ${cat.color} w-full`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 shrink-0">
                      {cat.label}
                    </span>
                    <span className="text-xs text-gray-400 ml-auto shrink-0">
                      {cat.topics.length} topics
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full min-w-0 max-w-full">
                    {cat.topics.map((topic) => (
                      <button
                        key={topic.value}
                        onClick={() => handleSelectTopic(topic.value)}
                        className={`
                          flex items-center p-4 rounded-xl border transition-all duration-200
                          text-left shadow-sm hover:shadow-md active:scale-[0.98]
                          ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                          group w-full min-w-0 max-w-full
                        `}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 shrink-0 ${topic.badgeClass} transition-transform duration-200 group-hover:scale-110`}>
                          <topic.icon className={`w-5 h-5 ${topic.colorClass}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="font-semibold text-sm text-gray-800 group-hover:text-black line-clamp-2 leading-snug strict-html-wrap">
                            {topic.title}
                          </span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto shrink-0 rotate-[-90deg] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
