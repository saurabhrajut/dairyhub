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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";
import { microbiologyContent } from "@/lib/content/microbiology-content";
import { microbiologyTestMethodsContent } from "@/lib/content/microbiology-test-methods-content";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  TestTube,
  Bug,
  ShieldOff,
  FlaskConical,
  Proportions,
  Dna,
  Thermometer,
  Microscope,
  Biohazard,
  ScanSearch,
  Snowflake,
  Activity,
  Waves,
  ShieldAlert,
  BookOpen,
  ChevronRight,
} from "lucide-react";


// ─────────────────────────────────────────────
// Helper: renders a single test inside the accordion
// ─────────────────────────────────────────────
const TestProcedure = ({ test }: { test: any }) => (
  <AccordionItem
    value={test.id}
    className="border-b border-gray-200 last:border-0"
  >
    <AccordionTrigger className="text-left font-semibold text-base sm:text-lg hover:no-underline py-4 px-3 hover:bg-indigo-50/60 rounded-md transition-colors text-gray-800 gap-3">
      <span className="flex items-center gap-2">
        <FlaskConical className="w-4 h-4 shrink-0 text-indigo-400" />
        {test.title}
      </span>
    </AccordionTrigger>

    <AccordionContent className="px-4 pb-6">
      <div className="prose prose-sm max-w-none break-words text-gray-700 space-y-5">

        {/* Principle */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-indigo-700 mb-2 text-sm uppercase tracking-wide">
            <BookOpen className="w-4 h-4" /> Siddhant (Principle)
          </h4>
          <p className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 leading-relaxed">
            {test.principle}
          </p>
        </div>

        {/* Procedure */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-2 text-sm uppercase tracking-wide">
            <Activity className="w-4 h-4" /> Prakriya (Procedure)
          </h4>
          <div
            className="pl-3 border-l-4 border-emerald-200 space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mt-3 [&_h5]:font-medium [&_h5]:text-gray-700 [&_h5]:mt-2 [&_p]:leading-relaxed [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_th]:border [&_th]:px-2 [&_th]:py-1.5 [&_th]:bg-gray-100 [&_td]:border [&_td]:px-2 [&_td]:py-1.5"
            dangerouslySetInnerHTML={{ __html: test.procedure }}
          />
        </div>

        {/* Calculation / Interpretation */}
        {test.calculation && (
          <div>
            <h4 className="flex items-center gap-2 font-bold text-amber-700 mb-2 text-sm uppercase tracking-wide">
              <Waves className="w-4 h-4" /> Ganana / Vyakhya (Calculation & Interpretation)
            </h4>
            <div
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 [&_code]:block [&_code]:bg-slate-800 [&_code]:text-green-300 [&_code]:p-3 [&_code]:rounded-lg [&_code]:font-mono [&_code]:text-sm [&_code]:my-2 [&_code]:overflow-x-auto [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mt-3 [&_p]:leading-relaxed [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_th]:border [&_th]:px-2 [&_th]:py-1.5 [&_th]:bg-amber-50 [&_td]:border [&_td]:px-2 [&_td]:py-1.5"
              dangerouslySetInnerHTML={{ __html: test.calculation }}
            />
          </div>
        )}
      </div>
    </AccordionContent>
  </AccordionItem>
);


// ─────────────────────────────────────────────
// Helper: card wrapper for every topic view
// ─────────────────────────────────────────────
const Section = ({
  title,
  children,
  icon: Icon,
  accentColor = "blue",
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  accentColor?: string;
}) => {
  const headerGradients: Record<string, string> = {
    blue:    "from-blue-600 to-blue-500",
    orange:  "from-orange-600 to-orange-500",
    cyan:    "from-cyan-600 to-cyan-500",
    emerald: "from-emerald-600 to-emerald-500",
    red:     "from-red-600 to-red-500",
    purple:  "from-purple-600 to-purple-500",
    rose:    "from-rose-600 to-rose-500",
    amber:   "from-amber-600 to-amber-500",
    teal:    "from-teal-600 to-teal-500",
    indigo:  "from-indigo-600 to-indigo-500",
    violet:  "from-violet-600 to-violet-500",
    sky:     "from-sky-600 to-sky-500",
  };
  const gradient = headerGradients[accentColor] ?? headerGradients.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden">
      <div className={`bg-gradient-to-r ${gradient} p-5 flex items-center gap-3`}>
        {Icon && (
          <div className="p-2 bg-white/20 rounded-xl">
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
        <h2 className="text-xl font-bold text-white font-headline">{title}</h2>
      </div>
      <div
        className="p-5 sm:p-7 text-gray-700 leading-relaxed
          prose prose-sm max-w-none
          [&_h4]:font-bold [&_h4]:text-gray-800 [&_h4]:mt-5 [&_h4]:mb-2
          [&_h5]:font-semibold [&_h5]:text-gray-700 [&_h5]:mt-3
          [&_p]:leading-relaxed [&_p]:mb-3
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2
          [&_li]:leading-relaxed
          [&_strong]:text-gray-900
          [&_em]:italic
          [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono
          [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:my-3
          [&_th]:border [&_th]:px-3 [&_th]:py-2 [&_th]:bg-gray-50 [&_th]:font-semibold
          [&_td]:border [&_td]:px-3 [&_td]:py-2
          [&_.overflow-x-auto]:overflow-x-auto
        "
      >
        {children}
      </div>
    </div>
  );
};


// ─────────────────────────────────────────────
// Topic → Component map  (ALL sections)
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string }>> = {

  intro: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "intro");
    if (!s) return null;
    return <Section title={s.title} icon={Microscope} accentColor={accent ?? "blue"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  thermophilic_thermoduric: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "thermophilic_thermoduric");
    if (!s) return null;
    return <Section title={s.title} icon={Thermometer} accentColor={accent ?? "orange"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  psychrotrophic: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "psychrotrophic");
    if (!s) return null;
    return <Section title={s.title} icon={Snowflake} accentColor={accent ?? "cyan"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  lactic_acid_bacteria: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "lactic_acid_bacteria");
    if (!s) return null;
    return <Section title={s.title} icon={Dna} accentColor={accent ?? "emerald"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  spoilage_pathogenic: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "spoilage_pathogenic");
    if (!s) return null;
    return <Section title={s.title} icon={ShieldOff} accentColor={accent ?? "red"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  enterobacteriaceae: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "enterobacteriaceae");
    if (!s) return null;
    return <Section title={s.title} icon={Biohazard} accentColor={accent ?? "purple"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  cronobacter: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "cronobacter");
    if (!s) return null;
    return <Section title={s.title} icon={Bug} accentColor={accent ?? "rose"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  sources_of_contamination: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "sources_of_contamination");
    if (!s) return null;
    return <Section title={s.title} icon={ScanSearch} accentColor={accent ?? "amber"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  hygienic_measures: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "hygienic_measures");
    if (!s) return null;
    return <Section title={s.title} icon={Proportions} accentColor={accent ?? "teal"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  coliforms_and_indicators: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "coliforms_and_indicators");
    if (!s) return null;
    return <Section title={s.title} icon={ShieldAlert} accentColor={accent ?? "violet"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  bacteriophages: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "bacteriophages");
    if (!s) return null;
    return <Section title={s.title} icon={Activity} accentColor={accent ?? "sky"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  milk_quality_tests_overview: ({ content, accent }) => {
    const s = content.sections?.find((s: any) => s.id === "milk_quality_tests_overview");
    if (!s) return null;
    return <Section title={s.title} icon={Microscope} accentColor={accent ?? "indigo"}><div dangerouslySetInnerHTML={{ __html: s.content }} /></Section>;
  },

  test_methods: ({ content, accent }) => {
    if (!content) return null;
    return (
      <Section title={content.title} icon={TestTube} accentColor={accent ?? "indigo"}>
        <p className="mb-6 text-gray-600 leading-relaxed">{content.intro}</p>
        <Accordion type="single" collapsible className="w-full border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
          {content.tests.map((test: any, i: number) => (
            <TestProcedure key={i} test={test} />
          ))}
        </Accordion>
      </Section>
    );
  },
};


// ─────────────────────────────────────────────
// Topic config — all metadata in one place
// ─────────────────────────────────────────────
const TOPIC_GROUPS = [
  {
    groupLabel: "Microbiology Concepts",
    topics: [
      {
        value: "intro",
        title: "Introduction & Basics",
        subtitle: "Milk as substrate, growth phases, natural antimicrobials",
        icon: Microscope,
        accent: "blue",
        badge: "Foundation",
        badgeVariant: "secondary" as const,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50 hover:bg-blue-100",
        borderClass: "border-blue-200 hover:border-blue-400",
      },
      {
        value: "thermophilic_thermoduric",
        title: "Thermophilic & Thermoduric",
        subtitle: "Heat-loving & heat-resistant bacteria",
        icon: Thermometer,
        accent: "orange",
        badge: "Heat",
        badgeVariant: "secondary" as const,
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50 hover:bg-orange-100",
        borderClass: "border-orange-200 hover:border-orange-400",
      },
      {
        value: "psychrotrophic",
        title: "Psychrotrophic Bacteria",
        subtitle: "Cold-tolerant spoilage organisms",
        icon: Snowflake,
        accent: "cyan",
        badge: "Cold",
        badgeVariant: "secondary" as const,
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50 hover:bg-cyan-100",
        borderClass: "border-cyan-200 hover:border-cyan-400",
      },
      {
        value: "lactic_acid_bacteria",
        title: "Lactic Acid Bacteria",
        subtitle: "Fermentation, flavor, preservation",
        icon: Dna,
        accent: "emerald",
        badge: "Fermentation",
        badgeVariant: "secondary" as const,
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50 hover:bg-emerald-100",
        borderClass: "border-emerald-200 hover:border-emerald-400",
      },
      {
        value: "spoilage_pathogenic",
        title: "Spoilage & Pathogenic Organisms",
        subtitle: "Listeria, Salmonella, E. coli & more",
        icon: ShieldOff,
        accent: "red",
        badge: "Safety",
        badgeVariant: "destructive" as const,
        colorClass: "text-red-600",
        bgClass: "bg-red-50 hover:bg-red-100",
        borderClass: "border-red-200 hover:border-red-400",
      },
      {
        value: "enterobacteriaceae",
        title: "Enterobacteriaceae",
        subtitle: "Indicator organisms & food safety",
        icon: Biohazard,
        accent: "purple",
        badge: "Indicator",
        badgeVariant: "secondary" as const,
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50 hover:bg-purple-100",
        borderClass: "border-purple-200 hover:border-purple-400",
      },
      {
        value: "cronobacter",
        title: "Cronobacter",
        subtitle: "Infant formula pathogen",
        icon: Bug,
        accent: "rose",
        badge: "High Risk",
        badgeVariant: "destructive" as const,
        colorClass: "text-rose-600",
        bgClass: "bg-rose-50 hover:bg-rose-100",
        borderClass: "border-rose-200 hover:border-rose-400",
      },
      {
        value: "coliforms_and_indicators",
        title: "Coliforms & Indicator Organisms",
        subtitle: "MPN, IMViC, fecal indicators",
        icon: ShieldAlert,
        accent: "violet",
        badge: "Hygiene",
        badgeVariant: "secondary" as const,
        colorClass: "text-violet-600",
        bgClass: "bg-violet-50 hover:bg-violet-100",
        borderClass: "border-violet-200 hover:border-violet-400",
      },
      {
        value: "bacteriophages",
        title: "Bacteriophages in Dairy",
        subtitle: "Phage biology, starter culture failure",
        icon: Activity,
        accent: "sky",
        badge: "New",
        badgeVariant: "secondary" as const,
        colorClass: "text-sky-600",
        bgClass: "bg-sky-50 hover:bg-sky-100",
        borderClass: "border-sky-200 hover:border-sky-400",
      },
    ],
  },
  {
    groupLabel: "Contamination & Control",
    topics: [
      {
        value: "sources_of_contamination",
        title: "Sources of Contamination",
        subtitle: "Intramammary, equipment, environment",
        icon: ScanSearch,
        accent: "amber",
        badge: "Control",
        badgeVariant: "secondary" as const,
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50 hover:bg-amber-100",
        borderClass: "border-amber-200 hover:border-amber-400",
      },
      {
        value: "hygienic_measures",
        title: "Hygienic Measures & Prevention",
        subtitle: "GMP, CIP, cold chain, pasteurization",
        icon: Proportions,
        accent: "teal",
        badge: "Prevention",
        badgeVariant: "secondary" as const,
        colorClass: "text-teal-600",
        bgClass: "bg-teal-50 hover:bg-teal-100",
        borderClass: "border-teal-200 hover:border-teal-400",
      },
      {
        value: "milk_quality_tests_overview",
        title: "Milk Quality Tests: Overview",
        subtitle: "MBRT, resazurin, ATP, MALDI-TOF",
        icon: Microscope,
        accent: "indigo",
        badge: "Rapid Methods",
        badgeVariant: "secondary" as const,
        colorClass: "text-indigo-600",
        bgClass: "bg-indigo-50 hover:bg-indigo-100",
        borderClass: "border-indigo-200 hover:border-indigo-400",
      },
    ],
  },
  {
    groupLabel: "Laboratory Test Methods",
    topics: [
      {
        value: "test_methods",
        title: "Standard Test Methods",
        subtitle: "SPC, Coliform, DMSCC, Delvotest, Listeria, Salmonella & more",
        icon: TestTube,
        accent: "indigo",
        badge: "Lab Manual",
        badgeVariant: "secondary" as const,
        colorClass: "text-indigo-600",
        bgClass: "bg-indigo-50 hover:bg-indigo-100",
        borderClass: "border-indigo-200 hover:border-indigo-400",
        wide: true,
      },
    ],
  },
];

// Flat list for easy lookup
const ALL_TOPICS = TOPIC_GROUPS.flatMap((g) => g.topics);


// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function MicrobiologyTestingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const mainContent = t(microbiologyContent);
  const testMethodsContent = t(microbiologyTestMethodsContent);

  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  if (!mainContent || !testMethodsContent) return null;

  const selectedTopicInfo = ALL_TOPICS.find((t) => t.value === activeTopic);
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic as keyof typeof topicComponents]
    : null;

  const handleSelectTopic = (value: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(value);
  };

  const handleBack = () => setActiveTopic(null);

  // Restore scroll position when returning to topic list
  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current)
          scrollAreaRef.current.scrollTop = scrollPosition.current;
      }, 0);
    }
  }, [activeTopic]);

  // ── Header stats bar ──────────────────────────
  const totalTopics = ALL_TOPICS.length;
  const totalTests = testMethodsContent?.tests?.length ?? 0;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[92vh] flex flex-col p-0 gap-0 rounded-2xl overflow-hidden shadow-2xl">

        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 px-6 py-5 shrink-0">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-white mb-1 font-headline tracking-tight">
              🔬 {mainContent.title}
            </DialogTitle>
            <DialogDescription className="text-center text-slate-300 text-sm md:text-base">
              {selectedTopicInfo
                ? selectedTopicInfo.subtitle
                : mainContent.description}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — shown only on topic list view */}
          {!activeTopic && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                <BookOpen className="w-3 h-3" /> {totalTopics} Topics
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                <TestTube className="w-3 h-3" /> {totalTests} Lab Tests
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                <Microscope className="w-3 h-3" /> Scientific Hindi Content
              </span>
            </div>
          )}

          {/* Back button — shown when a topic is active */}
          {activeTopic && selectedTopicInfo && (
            <div className="flex items-center gap-3 mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Back to Topics
              </Button>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <selectedTopicInfo.icon className="w-4 h-4" />
                <span className="font-medium">{selectedTopicInfo.title}</span>
                <Badge variant="secondary" className="text-xs ml-1">
                  {selectedTopicInfo.badge}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {selectedTopicInfo && ActiveComponent ? (

          /* ── Topic Detail View ─────────────────── */
          <ScrollArea className="flex-1 min-h-0">
            <div className="p-4 sm:p-6">
              <ActiveComponent
                content={activeTopic === "test_methods" ? testMethodsContent : mainContent}
                accent={selectedTopicInfo.accent}
              />
            </div>
          </ScrollArea>

        ) : (

          /* ── Topic Grid / Home View ─────────────── */
          <ScrollArea className="flex-1 min-h-0" viewportRef={scrollAreaRef}>
            <div className="p-4 sm:p-6 space-y-8">
              {TOPIC_GROUPS.map((group) => (
                <div key={group.groupLabel}>

                  {/* Group header */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      {group.groupLabel}
                    </h3>
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400 tabular-nums">
                      {group.topics.length} topics
                    </span>
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.topics.map((topic) => (
                      <button
                        key={topic.value}
                        onClick={() => handleSelectTopic(topic.value)}
                        className={`
                          relative flex items-start p-5 rounded-2xl border-2 transition-all duration-200
                          text-left shadow-sm hover:shadow-lg hover:-translate-y-0.5
                          ${topic.bgClass} ${topic.borderClass}
                          group
                          ${(topic as any).wide ? "sm:col-span-2 lg:col-span-3" : ""}
                        `}
                      >
                        {/* Icon */}
                        <div className={`p-2.5 rounded-xl bg-white shadow-sm mr-4 shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                          <topic.icon className={`w-5 h-5 ${topic.colorClass}`} />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
                              {topic.title}
                            </span>
                            <Badge
                              variant={topic.badgeVariant}
                              className="text-[10px] px-1.5 py-0 shrink-0"
                            >
                              {topic.badge}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500 leading-snug">
                            {topic.subtitle}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 ml-2 mt-1 transition-transform duration-200 group-hover:translate-x-1 ${topic.colorClass} opacity-60`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Bottom padding */}
              <div className="h-4" />
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
