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
      <h2 className="text-base sm:text-lg font-bold text-primary font-headline leading-tight break-words">
        {title}
      </h2>
    </div>
    <div className="p-3 sm:p-5 text-card-foreground text-gray-700 leading-relaxed overflow-hidden">
      <div className="space-y-3 text-sm sm:text-base break-words overflow-wrap-anywhere">
        {children}
      </div>
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
    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2 font-headline flex items-start gap-2">
      <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0 mt-1.5"></span>
      <span className="break-words">{title}</span>
    </h3>
    <div className="pl-3 sm:pl-4 border-l-2 border-gray-100 text-gray-700 text-sm sm:text-base break-words">
      {children}
    </div>
  </div>
);

// --- Shared prose styles injected via a wrapper ---
// These target the raw HTML coming from dangerouslySetInnerHTML
const proseClass = [
  "[&_p]:mb-3",
  "[&_p]:leading-relaxed",
  "[&_p]:break-words",
  "[&_ul]:pl-4",
  "[&_ul]:list-disc",
  "[&_ul]:space-y-1",
  "[&_ul]:mb-3",
  "[&_ol]:pl-4",
  "[&_ol]:list-decimal",
  "[&_ol]:space-y-1",
  "[&_ol]:mb-3",
  "[&_li]:break-words",
  "[&_li]:leading-relaxed",
  "[&_table]:w-full",
  "[&_table]:border-collapse",
  "[&_table]:text-xs",
  "[&_table]:sm:text-sm",
  "[&_th]:border",
  "[&_th]:border-gray-300",
  "[&_th]:p-2",
  "[&_th]:text-left",
  "[&_th]:bg-gray-100",
  "[&_th]:break-words",
  "[&_td]:border",
  "[&_td]:border-gray-300",
  "[&_td]:p-2",
  "[&_td]:break-words",
  "[&_b]:font-semibold",
  "[&_h4]:text-sm",
  "[&_h4]:sm:text-base",
  "[&_h4]:font-semibold",
  "[&_h4]:text-gray-700",
  "[&_h4]:mt-3",
  "[&_h4]:mb-2",
].join(" ");

// Wrapper that applies prose styles to raw HTML
const RawHTML = ({ html }: { html: string }) => (
  <div
    className={proseClass}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

// --- Content Components ---

const topicComponents = {
  intro: function IntroContent({ content }: { content: any }) {
    return (
      <div>
        <Section title={content.sections.executive_summary.title}>
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100 italic text-blue-900">
            <RawHTML html={content.sections.executive_summary.content} />
          </div>
        </Section>

        <Section title={content.sections.introduction.title}>
          <RawHTML html={content.sections.introduction.content} />
          <SubSection
            title={
              content.sections.introduction.subsections.purpose_and_benefits
                .title
            }
          >
            <RawHTML
              html={
                content.sections.introduction.subsections.purpose_and_benefits
                  .content
              }
            />
          </SubSection>
          <SubSection
            title={
              content.sections.introduction.subsections.distinction_audits.title
            }
          >
            <RawHTML
              html={
                content.sections.introduction.subsections.distinction_audits
                  .content
              }
            />
          </SubSection>
        </Section>
      </div>
    );
  },

  regulatory: function RegulatoryContent({ content }: { content: any }) {
    return (
      <div>
        <Section title={content.sections.regulatory_frameworks.title}>
          <RawHTML html={content.sections.regulatory_frameworks.content} />
          <div className="grid gap-3 mt-3">
            {(["fssai", "iso22000", "haccp"] as const).map((key) => (
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
                  <RawHTML
                    html={
                      content.sections.regulatory_frameworks.subsections[key]
                        .content
                    }
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
      <div>
        <Section title={content.sections.internal_audits.title}>
          <RawHTML html={content.sections.internal_audits.content} />
          <SubSection
            title={content.sections.internal_audits.subsections.purpose.title}
          >
            <RawHTML
              html={
                content.sections.internal_audits.subsections.purpose.content
              }
            />
          </SubSection>
          <SubSection
            title={content.sections.internal_audits.subsections.process.title}
          >
            <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border border-yellow-100">
              <RawHTML
                html={
                  content.sections.internal_audits.subsections.process.content
                }
              />
            </div>
          </SubSection>
        </Section>
      </div>
    );
  },

  external: function ExternalAuditsContent({ content }: { content: any }) {
    return (
      <div>
        <Section title={content.sections.external_audits.title}>
          <RawHTML html={content.sections.external_audits.content} />

          <SubSection
            title={content.sections.external_audits.subsections.types.title}
          >
            <RawHTML
              html={content.sections.external_audits.subsections.types.content}
            />
          </SubSection>

          <SubSection
            title={content.sections.external_audits.subsections.process.title}
          >
            <RawHTML
              html={
                content.sections.external_audits.subsections.process.content
              }
            />
          </SubSection>

          <SubSection
            title={
              content.sections.external_audits.subsections.fssai_system.title
            }
          >
            <RawHTML
              html={
                content.sections.external_audits.subsections.fssai_system
                  .content
              }
            />

            {/* Responsive table — scrolls horizontally if needed */}
            <div className="overflow-x-auto mt-3 rounded-lg border border-gray-200 max-w-full">
              <Table className="min-w-[280px] text-xs sm:text-sm">
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="font-bold text-primary whitespace-nowrap">
                      Audit Score Range
                    </TableHead>
                    <TableHead className="font-bold text-primary">
                      Recommended Audit Frequency (Dairy)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-green-600 whitespace-nowrap">
                      81–100%
                    </TableCell>
                    <TableCell>Once in 12 months</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-yellow-600 whitespace-nowrap">
                      51–80%
                    </TableCell>
                    <TableCell>Once in 9 months</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-red-600 whitespace-nowrap">
                      &lt;50%
                    </TableCell>
                    <TableCell>Once in 6 months</TableCell>
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
      <div>
        <Section title={content.sections.focus_areas.title}>
          <RawHTML html={content.sections.focus_areas.content} />
        </Section>
      </div>
    );
  },

  challenges: function ChallengesContent({ content }: { content: any }) {
    return (
      <div>
        <Section title={content.sections.challenges.title}>
          <div className="grid gap-3">
            <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-100">
              <SubSection
                title={
                  content.sections.challenges.subsections.common_challenges
                    .title
                }
              >
                <RawHTML
                  html={
                    content.sections.challenges.subsections.common_challenges
                      .content
                  }
                />
              </SubSection>
            </div>

            <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100">
              <SubSection
                title={
                  content.sections.challenges.subsections.best_practices.title
                }
              >
                <RawHTML
                  html={
                    content.sections.challenges.subsections.best_practices
                      .content
                  }
                />
              </SubSection>
            </div>

            <SubSection
              title={
                content.sections.challenges.subsections.fostering_culture.title
              }
            >
              <RawHTML
                html={
                  content.sections.challenges.subsections.fostering_culture
                    .content
                }
              />
            </SubSection>
          </div>
        </Section>
      </div>
    );
  },

  conclusion: function ConclusionContent({ content }: { content: any }) {
    return (
      <div>
        <Section title={content.sections.conclusion.title}>
          <div className="bg-emerald-50 p-3 sm:p-5 rounded-lg border border-emerald-100 text-emerald-900 font-medium">
            <RawHTML html={content.sections.conclusion.content} />
          </div>
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
      <div>
        <Section title={content.sections.recommendations.title}>
          <RawHTML html={content.sections.recommendations.content} />
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
      <DialogContent
        className="
          flex flex-col
          w-[95vw] max-w-4xl lg:max-w-6xl
          h-[90dvh]
          p-0
          gap-0
          overflow-hidden
        "
      >
        {/* ── FIXED HEADER — never scrolls ── */}
        <DialogHeader
          className="
            shrink-0
            px-4 pt-4 pb-3
            sm:px-6 sm:pt-5
            border-b border-border
            bg-background
          "
        >
          <DialogTitle className="text-lg sm:text-2xl md:text-3xl font-bold text-center text-primary font-headline leading-tight">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base text-muted-foreground mt-1">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {/* ── BODY — takes all remaining height ── */}
        {selectedTopic && ActiveComponent ? (
          /*
           * Content view
           * The outer div is a flex column that fills the remaining height.
           * The back-button strip is fixed (shrink-0).
           * The ScrollArea fills the rest and scrolls internally.
           */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {/* Back button strip — does NOT scroll */}
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

            {/*
             * ScrollArea must have a definite height.
             * flex-1 + min-h-0 gives it the remaining height of the flex parent.
             * "h-full" on the inner viewport is handled by Radix internally.
             */}
            <ScrollArea className="flex-1 min-h-0 w-full">
              <div className="p-3 sm:p-5 max-w-full">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* Topics grid view */
          <ScrollArea
            className="flex-1 min-h-0 w-full"
            viewportRef={scrollAreaRef}
          >
            <div
              className="
                grid
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                gap-3 sm:gap-4
                p-3 sm:p-5
              "
            >
              {topics.map((topic) => (
                <button
                  key={topic.value}
                  onClick={() => handleSelectTopic(topic.value)}
                  className={`
                    flex items-center gap-3
                    p-4 sm:p-5
                    rounded-xl border
                    transition-all duration-200
                    text-left shadow-sm hover:shadow-md
                    ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                    group
                  `}
                >
                  <topic.icon
                    className={`
                      w-7 h-7 sm:w-8 sm:h-8
                      shrink-0
                      transition-transform duration-200
                      group-hover:scale-110
                      ${topic.colorClass}
                    `}
                  />
                  <span className="font-bold font-headline text-base sm:text-lg text-gray-800 group-hover:text-black leading-tight">
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
