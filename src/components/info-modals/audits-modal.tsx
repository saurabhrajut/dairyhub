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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/context/language-context";
import { auditsModalContent } from "@/lib/content/audits-modal-content";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Shield,
  Building,
  Search,
  AlertTriangle,
  FileText,
  Award,
} from "lucide-react";

// --- Helper Components ---

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
    <div className="bg-muted/30 p-3 sm:p-4 border-b border-border">
      <h2 className="text-lg sm:text-xl font-bold text-primary font-headline leading-tight">
        {title}
      </h2>
    </div>
    <div className="p-3 sm:p-5 text-card-foreground text-gray-700 leading-relaxed">
      <div className="space-y-3">{children}</div>
    </div>
  </div>
);

const SubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-4 mb-3">
    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 font-headline flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0"></span>
      <span>{title}</span>
    </h3>
    <div className="pl-3 sm:pl-4 border-l-2 border-gray-100 text-gray-700 text-sm sm:text-base">
      {children}
    </div>
  </div>
);

// --- Content Components ---

const topicComponents = {
  intro: function IntroContent({ content }: { content: any }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.executive_summary.title}>
          <div
            className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100 italic text-blue-900 text-sm sm:text-base"
            dangerouslySetInnerHTML={{
              __html: content.sections.executive_summary.content,
            }}
          />
        </Section>
        <Section title={content.sections.introduction.title}>
          <div
            className="text-sm sm:text-base"
            dangerouslySetInnerHTML={{
              __html: content.sections.introduction.content,
            }}
          />
          <SubSection
            title={
              content.sections.introduction.subsections.purpose_and_benefits
                .title
            }
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  content.sections.introduction.subsections.purpose_and_benefits
                    .content,
              }}
            />
          </SubSection>
          <SubSection
            title={
              content.sections.introduction.subsections.distinction_audits.title
            }
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  content.sections.introduction.subsections.distinction_audits
                    .content,
              }}
            />
          </SubSection>
        </Section>
      </div>
    );
  },

  regulatory: function RegulatoryContent({ content }: { content: any }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.regulatory_frameworks.title}>
          <div
            dangerouslySetInnerHTML={{
              __html: content.sections.regulatory_frameworks.content,
            }}
          />
          <div className="grid gap-3 mt-3">
            {["fssai", "iso22000", "haccp"].map((key) => (
              <div
                key={key}
                className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-100"
              >
                <SubSection
                  title={
                    content.sections.regulatory_frameworks.subsections[key]
                      .title
                  }
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        content.sections.regulatory_frameworks.subsections[key]
                          .content,
                    }}
                  />
                </SubSection>
              </div>
            ))}
          </div>
        </Section>
      </div>
    );
  },

  internal: function InternalAuditsContent({ content }: { content: any }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.internal_audits.title}>
          <div
            dangerouslySetInnerHTML={{
              __html: content.sections.internal_audits.content,
            }}
          />
          <SubSection
            title={content.sections.internal_audits.subsections.purpose.title}
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  content.sections.internal_audits.subsections.purpose.content,
              }}
            />
          </SubSection>
          <SubSection
            title={content.sections.internal_audits.subsections.process.title}
          >
            <div
              className="bg-yellow-50 p-3 sm:p-4 rounded-lg border border-yellow-100"
              dangerouslySetInnerHTML={{
                __html:
                  content.sections.internal_audits.subsections.process.content,
              }}
            />
          </SubSection>
        </Section>
      </div>
    );
  },

  external: function ExternalAuditsContent({ content }: { content: any }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.external_audits.title}>
          <div
            dangerouslySetInnerHTML={{
              __html: content.sections.external_audits.content,
            }}
          />
          <SubSection
            title={content.sections.external_audits.subsections.types.title}
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  content.sections.external_audits.subsections.types.content,
              }}
            />
          </SubSection>
          <SubSection
            title={content.sections.external_audits.subsections.process.title}
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  content.sections.external_audits.subsections.process.content,
              }}
            />
          </SubSection>
          <SubSection
            title={
              content.sections.external_audits.subsections.fssai_system.title
            }
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  content.sections.external_audits.subsections.fssai_system
                    .content,
              }}
            />
            {/* Responsive table wrapper */}
            <div className="overflow-x-auto mt-3 rounded-lg border border-gray-200 -mx-1">
              <Table className="min-w-[320px]">
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                      Audit Score Range
                    </TableHead>
                    <TableHead className="font-bold text-primary text-xs sm:text-sm">
                      Recommended Audit Frequency (Dairy)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-green-600 text-xs sm:text-sm">
                      81-100%
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Once in 12 months
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-yellow-600 text-xs sm:text-sm">
                      51-80%
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Once in 9 months
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-red-600 text-xs sm:text-sm">
                      &lt;50%
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Once in 6 months
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </SubSection>
        </Section>
      </div>
    );
  },

  focus_areas: function FocusAreasContent({ content }: { content: any }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.focus_areas.title}>
          <div
            dangerouslySetInnerHTML={{
              __html: content.sections.focus_areas.content,
            }}
          />
        </Section>
      </div>
    );
  },

  challenges: function ChallengesContent({ content }: { content: any }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.challenges.title}>
          <div className="grid gap-3">
            <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-100">
              <SubSection
                title={
                  content.sections.challenges.subsections.common_challenges
                    .title
                }
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      content.sections.challenges.subsections.common_challenges
                        .content,
                  }}
                />
              </SubSection>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100">
              <SubSection
                title={
                  content.sections.challenges.subsections.best_practices.title
                }
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      content.sections.challenges.subsections.best_practices
                        .content,
                  }}
                />
              </SubSection>
            </div>
            <SubSection
              title={
                content.sections.challenges.subsections.fostering_culture.title
              }
            >
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content.sections.challenges.subsections.fostering_culture
                      .content,
                }}
              />
            </SubSection>
          </div>
        </Section>
      </div>
    );
  },

  conclusion: function ConclusionContent({ content }: { content: any }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.conclusion.title}>
          <div
            className="bg-emerald-50 p-4 sm:p-6 rounded-lg border border-emerald-100 text-emerald-900 font-medium"
            dangerouslySetInnerHTML={{
              __html: content.sections.conclusion.content,
            }}
          />
        </Section>
      </div>
    );
  },

  recommendations: function RecommendationsContent({
    content,
  }: {
    content: any;
  }) {
    return (
      <div className="text-sm sm:text-base">
        <Section title={content.sections.recommendations.title}>
          <div
            dangerouslySetInnerHTML={{
              __html: content.sections.recommendations.content,
            }}
          />
        </Section>
      </div>
    );
  },
};

// --- Main Component ---

export function AuditsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(auditsModalContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  if (!content) return null;

  const topics = [
    {
      value: "intro",
      title: content.tabs.intro,
      icon: BookOpen,
      component: topicComponents.intro,
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50",
      borderClass: "border-blue-200",
      hoverClass: "hover:bg-blue-100",
    },
    {
      value: "regulatory",
      title: content.tabs.regulatory,
      icon: Shield,
      component: topicComponents.regulatory,
      colorClass: "text-purple-600",
      bgClass: "bg-purple-50",
      borderClass: "border-purple-200",
      hoverClass: "hover:bg-purple-100",
    },
    {
      value: "internal",
      title: content.tabs.internal,
      icon: Search,
      component: topicComponents.internal,
      colorClass: "text-amber-600",
      bgClass: "bg-amber-50",
      borderClass: "border-amber-200",
      hoverClass: "hover:bg-amber-100",
    },
    {
      value: "external",
      title: content.tabs.external,
      icon: Building,
      component: topicComponents.external,
      colorClass: "text-indigo-600",
      bgClass: "bg-indigo-50",
      borderClass: "border-indigo-200",
      hoverClass: "hover:bg-indigo-100",
    },
    {
      value: "focus_areas",
      title: content.tabs.focus_areas,
      icon: FileText,
      component: topicComponents.focus_areas,
      colorClass: "text-teal-600",
      bgClass: "bg-teal-50",
      borderClass: "border-teal-200",
      hoverClass: "hover:bg-teal-100",
    },
    {
      value: "challenges",
      title: content.tabs.challenges,
      icon: AlertTriangle,
      component: topicComponents.challenges,
      colorClass: "text-red-600",
      bgClass: "bg-red-50",
      borderClass: "border-red-200",
      hoverClass: "hover:bg-red-100",
    },
    {
      value: "conclusion",
      title: content.tabs.conclusion,
      icon: CheckCircle,
      component: topicComponents.conclusion,
      colorClass: "text-emerald-600",
      bgClass: "bg-emerald-50",
      borderClass: "border-emerald-200",
      hoverClass: "hover:bg-emerald-100",
    },
    {
      value: "recommendations",
      title: content.tabs.recommendations,
      icon: Award,
      component: topicComponents.recommendations,
      colorClass: "text-cyan-600",
      bgClass: "bg-cyan-50",
      borderClass: "border-cyan-200",
      hoverClass: "hover:bg-cyan-100",
    },
  ];

  const selectedTopic = topics.find((t) => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(topicValue);
  };

  const handleBack = () => {
    setActiveTopic(null);
  };

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPosition.current;
        }
      }, 0);
    }
  }, [activeTopic]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/*
        KEY FIXES:
        1. Fixed height using dvh units for mobile browser chrome
        2. overflow-hidden on DialogContent to prevent outer scroll
        3. Proper flex column layout with min-h-0 at each level
      */}
      <DialogContent
        className="
          max-w-4xl lg:max-w-6xl
          w-[95vw]
          h-[92dvh] sm:h-[90dvh]
          max-h-[92dvh] sm:max-h-[90dvh]
          flex flex-col
          p-0
          overflow-hidden
          gap-0
        "
      >
        {/* ── Fixed Header ── */}
        <DialogHeader className="shrink-0 px-4 pt-4 pb-3 sm:px-6 sm:pt-5 border-b border-border">
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary font-headline leading-tight">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base text-muted-foreground mt-1">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {/* ── Scrollable Body ── */}
        {selectedTopic && ActiveComponent ? (
          /* Content View */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {/* Back button — fixed, not scrolling */}
            <div className="shrink-0 px-3 sm:px-5 py-2 border-b border-border bg-background">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="hover:bg-slate-100 text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Back to Topics
              </Button>
            </div>

            {/* Actual scrollable content */}
            <ScrollArea className="flex-1 min-h-0">
              <div className="p-3 sm:p-5">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* Topics Grid View */
          <ScrollArea className="flex-1 min-h-0" viewportRef={scrollAreaRef}>
            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-3
                p-3 sm:p-5
              "
            >
              {topics.map((topic) => (
                <button
                  key={topic.value}
                  onClick={() => handleSelectTopic(topic.value)}
                  className={`
                    flex items-center gap-3
                    p-3 sm:p-4
                    rounded-xl border
                    transition-all duration-200
                    text-left shadow-sm hover:shadow-md
                    ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                    group
                  `}
                >
                  {/* Icon */}
                  <topic.icon
                    className={`
                      w-6 h-6 sm:w-7 sm:h-7
                      shrink-0
                      transition-transform duration-200
                      group-hover:scale-110
                      ${topic.colorClass}
                    `}
                  />
                  {/* Label */}
                  <span className="font-semibold font-headline text-sm sm:text-base text-gray-800 group-hover:text-black leading-tight">
                    {topic.title}
                  </span>
                </button>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
