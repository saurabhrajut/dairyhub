"use client"

import { useState, useRef, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useLanguage } from "@/context/language-context";
import { dairyIndustryContent } from "@/lib/content/dairy-industry-content";
import { Button } from "../ui/button";
import {
  ArrowLeft, BookOpen, Users, TrendingUp, Ship, CheckCircle,
  BarChart4, Leaf, Microscope, FlaskConical, Dna, Thermometer,
  ShieldCheck, Globe, Landmark, ChevronRight
} from "lucide-react";

// ─────────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────────

const SectionTitle = ({ title, id }: { title: string; id: string }) => (
  <h2
    id={id}
    className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline"
  >
    {title}
  </h2>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="p-4 bg-card/50 rounded-lg border border-border mt-6 shadow-sm">
    <h4 className="text-lg font-bold text-primary mb-3 font-headline">{title}</h4>
    <div className="space-y-3 text-gray-700 text-sm leading-relaxed prose-sm max-w-none break-words">
      {children}
    </div>
  </div>
);

const InfoTable = ({ rows, header1, header2 }: {
  rows: { col1: string; col2: string }[];
  header1: string;
  header2: string;
}) => (
  <div className="overflow-x-auto mt-4 rounded-lg border">
    <Table>
      <TableHeader className="bg-muted/50">
        <TableRow>
          <TableHead className="font-bold text-primary">{header1}</TableHead>
          <TableHead className="font-bold text-primary">{header2}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/20"}>
            <TableCell className="font-medium">{row.col1}</TableCell>
            <TableCell>{row.col2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

// ─────────────────────────────────────────────
// Content Section Components
// ─────────────────────────────────────────────

const IntroContent = ({ content }: { content: any }) => (
  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
      <p dangerouslySetInnerHTML={{ __html: content.intro1 }} />
      <br />
      <p dangerouslySetInnerHTML={{ __html: content.intro2 }} />
    </div>
  </div>
);

const OverviewContent = ({ content }: { content: any }) => {
  const t = content.overview.drivers_challenges.table;
  const rows = [
    { col1: t.row1_col1, col2: t.row1_col2 },
    { col1: t.row2_col1, col2: t.row2_col2 },
    { col1: t.row3_col1, col2: t.row3_col2 },
    { col1: t.row4_col1, col2: t.row4_col2 },
    { col1: t.row5_col1, col2: t.row5_col2 },
    { col1: t.row6_col1, col2: t.row6_col2 },
    { col1: t.row7_col1, col2: t.row7_col2 },
    { col1: t.row8_col1, col2: t.row8_col2 },
    { col1: t.row9_col1, col2: t.row9_col2 },
    { col1: t.row10_col1, col2: t.row10_col2 },
  ].filter(r => r.col1);
  return (
    <>
      <SectionTitle title={content.overview.title} id="overview" />
      <SubSection title={content.overview.market_size.title}>
        <p dangerouslySetInnerHTML={{ __html: content.overview.market_size.text }} />
      </SubSection>
      <SubSection title={content.overview.contribution.title}>
        <p dangerouslySetInnerHTML={{ __html: content.overview.contribution.text }} />
      </SubSection>
      <SubSection title={content.overview.production_trends.title}>
        <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text1 }} />
        <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text2 }} />
      </SubSection>
      <SubSection title={content.overview.drivers_challenges.title}>
        <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.drivers }} />
        <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.challenges }} />
        <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.opportunities }} />
        <InfoTable rows={rows} header1={t.header1} header2={t.header2} />
      </SubSection>
    </>
  );
};

const AnimalNutritionContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.animal_nutrition.title} id="animal_nutrition" />
    <SubSection title={content.animal_nutrition.title}>
      <p dangerouslySetInnerHTML={{ __html: content.animal_nutrition.text1 }} />
      <p className="mt-3" dangerouslySetInnerHTML={{ __html: content.animal_nutrition.text2 }} />
    </SubSection>
  </>
);

const AnimalHealthContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.animal_health.title} id="animal_health" />
    <SubSection title={content.animal_health.title}>
      <p dangerouslySetInnerHTML={{ __html: content.animal_health.text1 }} />
      <p className="mt-3" dangerouslySetInnerHTML={{ __html: content.animal_health.text2 }} />
    </SubSection>
  </>
);

const MilkScienceContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.milk_science.title} id="milk_science" />
    <SubSection title={content.milk_science.title}>
      <p dangerouslySetInnerHTML={{ __html: content.milk_science.text1 }} />
      <p className="mt-3" dangerouslySetInnerHTML={{ __html: content.milk_science.text2 }} />
    </SubSection>
  </>
);

const CooperativesContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.cooperatives.title} id="cooperatives" />
    <SubSection title={content.cooperatives.operation_flood.title}>
      <p dangerouslySetInnerHTML={{ __html: content.cooperatives.operation_flood.text }} />
      <h5 className="font-bold mt-4 text-primary">{content.cooperatives.operation_flood.objectives_title}</h5>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        {content.cooperatives.operation_flood.objectives.map((obj: string, i: number) => (
          <li key={i}>{obj}</li>
        ))}
      </ul>
      <h5 className="font-bold mt-4 text-primary">{content.cooperatives.operation_flood.phases_title}</h5>
      <ul className="list-disc pl-5 mt-2 space-y-2">
        {content.cooperatives.operation_flood.phases.map((phase: string, i: number) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: phase }} />
        ))}
      </ul>
    </SubSection>
    <SubSection title={content.cooperatives.anand_pattern.title}>
      <p dangerouslySetInnerHTML={{ __html: content.cooperatives.anand_pattern.intro }} />
      <ul className="list-disc pl-5 mt-3 space-y-2">
        {content.cooperatives.anand_pattern.tiers.map((tier: string, i: number) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: tier }} />
        ))}
      </ul>
    </SubSection>
    <SubSection title={content.cooperatives.empowerment.title}>
      <p dangerouslySetInnerHTML={{ __html: content.cooperatives.empowerment.text }} />
    </SubSection>
  </>
);

const BreedingGeneticsContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.breeding_genetics.title} id="breeding_genetics" />
    <SubSection title={content.breeding_genetics.title}>
      <p dangerouslySetInnerHTML={{ __html: content.breeding_genetics.text1 }} />
      <p className="mt-3" dangerouslySetInnerHTML={{ __html: content.breeding_genetics.text2 }} />
    </SubSection>
  </>
);

const ColdChainContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.cold_chain.title} id="cold_chain" />
    <SubSection title={content.cold_chain.title}>
      <p dangerouslySetInnerHTML={{ __html: content.cold_chain.text1 }} />
      <p className="mt-3" dangerouslySetInnerHTML={{ __html: content.cold_chain.text2 }} />
    </SubSection>
  </>
);

const QualityStandardsContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.quality_standards.title} id="quality_standards" />
    <SubSection title={content.quality_standards.title}>
      <p dangerouslySetInnerHTML={{ __html: content.quality_standards.text1 }} />
      <p className="mt-3" dangerouslySetInnerHTML={{ __html: content.quality_standards.text2 }} />
    </SubSection>
  </>
);

const TrendsContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.trends.title} id="trends" />
    <SubSection title={content.trends.modernization.title}>
      <p dangerouslySetInnerHTML={{ __html: content.trends.modernization.text }} />
    </SubSection>
    <SubSection title={content.trends.startups.title}>
      <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text1 }} />
      <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.trends.startups.text2 }} />
    </SubSection>
    {content.trends.sustainability && (
      <SubSection title={content.trends.sustainability.title}>
        <p dangerouslySetInnerHTML={{ __html: content.trends.sustainability.text }} />
      </SubSection>
    )}
  </>
);

const ExportsContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.exports.title} id="exports" />
    <SubSection title={content.exports.status.title}>
      <p dangerouslySetInnerHTML={{ __html: content.exports.status.text1 }} />
      <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.exports.status.text2 }} />
    </SubSection>
  </>
);

const PolicyContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.policy_governance.title} id="policy_governance" />
    <SubSection title={content.policy_governance.title}>
      <p dangerouslySetInnerHTML={{ __html: content.policy_governance.text }} />
    </SubSection>
  </>
);

const GlobalComparisonContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.global_comparison.title} id="global_comparison" />
    <SubSection title={content.global_comparison.title}>
      <p dangerouslySetInnerHTML={{ __html: content.global_comparison.text }} />
    </SubSection>
  </>
);

const ConclusionContent = ({ content }: { content: any }) => (
  <>
    <SectionTitle title={content.conclusion.title} id="conclusion" />
    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
      <p
        className="text-base font-medium text-green-900 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content.conclusion.text }}
      />
    </div>
  </>
);

// ─────────────────────────────────────────────
// Topic Registry
// ─────────────────────────────────────────────

const topicComponents: Record<string, React.ComponentType<{ content: any }>> = {
  intro: IntroContent,
  overview: OverviewContent,
  animal_nutrition: AnimalNutritionContent,
  animal_health: AnimalHealthContent,
  milk_science: MilkScienceContent,
  cooperatives: CooperativesContent,
  breeding_genetics: BreedingGeneticsContent,
  cold_chain: ColdChainContent,
  quality_standards: QualityStandardsContent,
  trends: TrendsContent,
  exports: ExportsContent,
  policy_governance: PolicyContent,
  global_comparison: GlobalComparisonContent,
  conclusion: ConclusionContent,
};

// ─────────────────────────────────────────────
// Topic Definitions with Color Themes
// ─────────────────────────────────────────────

const getTopics = (content: any) => [
  {
    value: "intro",
    label: "Introduction",
    icon: BookOpen,
    colorClass: "text-blue-700",
    bgClass: "bg-blue-50",
    borderClass: "border-blue-200",
    hoverClass: "hover:bg-blue-100",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    value: "overview",
    label: content.overview.title,
    icon: BarChart4,
    colorClass: "text-indigo-700",
    bgClass: "bg-indigo-50",
    borderClass: "border-indigo-200",
    hoverClass: "hover:bg-indigo-100",
    badgeClass: "bg-indigo-100 text-indigo-700",
  },
  {
    value: "animal_nutrition",
    label: content.animal_nutrition.title,
    icon: Leaf,
    colorClass: "text-lime-700",
    bgClass: "bg-lime-50",
    borderClass: "border-lime-200",
    hoverClass: "hover:bg-lime-100",
    badgeClass: "bg-lime-100 text-lime-700",
  },
  {
    value: "animal_health",
    label: content.animal_health.title,
    icon: Thermometer,
    colorClass: "text-red-700",
    bgClass: "bg-red-50",
    borderClass: "border-red-200",
    hoverClass: "hover:bg-red-100",
    badgeClass: "bg-red-100 text-red-700",
  },
  {
    value: "milk_science",
    label: content.milk_science.title,
    icon: FlaskConical,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50",
    borderClass: "border-amber-200",
    hoverClass: "hover:bg-amber-100",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  {
    value: "cooperatives",
    label: content.cooperatives.title,
    icon: Users,
    colorClass: "text-emerald-700",
    bgClass: "bg-emerald-50",
    borderClass: "border-emerald-200",
    hoverClass: "hover:bg-emerald-100",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  {
    value: "breeding_genetics",
    label: content.breeding_genetics.title,
    icon: Dna,
    colorClass: "text-pink-700",
    bgClass: "bg-pink-50",
    borderClass: "border-pink-200",
    hoverClass: "hover:bg-pink-100",
    badgeClass: "bg-pink-100 text-pink-700",
  },
  {
    value: "cold_chain",
    label: content.cold_chain.title,
    icon: Thermometer,
    colorClass: "text-sky-700",
    bgClass: "bg-sky-50",
    borderClass: "border-sky-200",
    hoverClass: "hover:bg-sky-100",
    badgeClass: "bg-sky-100 text-sky-700",
  },
  {
    value: "quality_standards",
    label: content.quality_standards.title,
    icon: ShieldCheck,
    colorClass: "text-teal-700",
    bgClass: "bg-teal-50",
    borderClass: "border-teal-200",
    hoverClass: "hover:bg-teal-100",
    badgeClass: "bg-teal-100 text-teal-700",
  },
  {
    value: "trends",
    label: content.trends.title,
    icon: TrendingUp,
    colorClass: "text-violet-700",
    bgClass: "bg-violet-50",
    borderClass: "border-violet-200",
    hoverClass: "hover:bg-violet-100",
    badgeClass: "bg-violet-100 text-violet-700",
  },
  {
    value: "exports",
    label: content.exports.title,
    icon: Ship,
    colorClass: "text-cyan-700",
    bgClass: "bg-cyan-50",
    borderClass: "border-cyan-200",
    hoverClass: "hover:bg-cyan-100",
    badgeClass: "bg-cyan-100 text-cyan-700",
  },
  {
    value: "policy_governance",
    label: content.policy_governance.title,
    icon: Landmark,
    colorClass: "text-orange-700",
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200",
    hoverClass: "hover:bg-orange-100",
    badgeClass: "bg-orange-100 text-orange-700",
  },
  {
    value: "global_comparison",
    label: content.global_comparison.title,
    icon: Globe,
    colorClass: "text-fuchsia-700",
    bgClass: "bg-fuchsia-50",
    borderClass: "border-fuchsia-200",
    hoverClass: "hover:bg-fuchsia-100",
    badgeClass: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    value: "conclusion",
    label: content.conclusion.title,
    icon: CheckCircle,
    colorClass: "text-green-700",
    bgClass: "bg-green-50",
    borderClass: "border-green-200",
    hoverClass: "hover:bg-green-100",
    badgeClass: "bg-green-100 text-green-700",
  },
];

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────

export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(dairyIndustryContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  if (!content) return null;

  const topics = getTopics(content);
  const selectedTopic = topics.find((tp) => tp.value === activeTopic);
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic]
    : null;

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

  // Navigation: prev / next topic
  const currentIndex = topics.findIndex((tp) => tp.value === activeTopic);
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex >= 0 && currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-5xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 gap-0">

        {/* ── Header ── */}
        <DialogHeader className="p-4 sm:p-0 pb-2 shrink-0">
          <DialogTitle className="font-headline text-2xl md:text-3xl text-center">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-base text-gray-500 mt-1">
            {selectedTopic ? (
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${selectedTopic.badgeClass}`}>
                <selectedTopic.icon className="w-3.5 h-3.5" />
                {selectedTopic.label}
              </span>
            ) : (
              content.description
            )}
          </DialogDescription>
        </DialogHeader>

        {/* ── Detail View ── */}
        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0 mt-2">

            {/* Top nav bar */}
            <div className="flex items-center justify-between px-4 sm:px-0 mb-2 shrink-0">
              <Button variant="ghost" size="sm" onClick={handleBack} className="hover:bg-slate-100 text-sm">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                All Topics
              </Button>
              <div className="flex gap-2">
                {prevTopic && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSelectTopic(prevTopic.value)}
                    className="text-xs hidden sm:flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    {prevTopic.label}
                  </Button>
                )}
                {nextTopic && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSelectTopic(nextTopic.value)}
                    className={`text-xs hidden sm:flex items-center gap-1 ${nextTopic.colorClass} border-current`}
                  >
                    {nextTopic.label}
                    <ChevronRight className="w-3 h-3" />
                  </Button>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="px-4 sm:px-0 mb-3 shrink-0">
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / topics.length) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1 text-right">
                {currentIndex + 1} / {topics.length}
              </p>
            </div>

            {/* Scrollable content */}
            <ScrollArea className="flex-1 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
                <ActiveComponent content={content} />
              </div>

              {/* Bottom navigation (mobile-friendly) */}
              <div className="flex justify-between mt-8 pt-4 border-t p-4 sm:p-0 gap-3">
                {prevTopic ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSelectTopic(prevTopic.value)}
                    className="flex items-center gap-1.5 text-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">{prevTopic.label}</span>
                    <span className="xs:hidden">Prev</span>
                  </Button>
                ) : <div />}
                {nextTopic ? (
                  <Button
                    size="sm"
                    onClick={() => handleSelectTopic(nextTopic.value)}
                    className={`flex items-center gap-1.5 text-sm text-white`}
                  >
                    <span className="hidden xs:inline">{nextTopic.label}</span>
                    <span className="xs:hidden">Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-sm"
                  >
                    All Topics
                  </Button>
                )}
              </div>
            </ScrollArea>
          </div>

        ) : (
          /* ── Topic Grid ── */
          <ScrollArea className="flex-1 mt-3 sm:pr-2" viewportRef={scrollAreaRef}>
            <p className="text-xs text-center text-gray-400 mb-4 px-4">
              {topics.length} topics — select one to explore
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-2">
              {topics.map((topic, idx) => (
                <button
                  key={topic.value}
                  onClick={() => handleSelectTopic(topic.value)}
                  className={`
                    relative flex items-center p-5 rounded-xl border transition-all duration-200
                    text-left shadow-sm hover:shadow-md active:scale-[0.98]
                    ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                    group
                  `}
                >
                  {/* Index badge */}
                  <span className={`
                    absolute top-2.5 right-3 text-xs font-mono opacity-40 font-bold
                    ${topic.colorClass}
                  `}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className={`
                    w-10 h-10 mr-4 shrink-0 rounded-lg flex items-center justify-center
                    transition-transform duration-200 group-hover:scale-110
                    ${topic.bgClass} border ${topic.borderClass}
                  `}>
                    <topic.icon className={`w-5 h-5 ${topic.colorClass}`} />
                  </div>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <span className="font-bold font-headline text-sm text-gray-800 group-hover:text-black line-clamp-2 leading-snug block">
                      {topic.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className={`w-4 h-4 ml-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${topic.colorClass}`} />
                </button>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
