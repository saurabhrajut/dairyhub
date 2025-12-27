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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from "@/context/language-context";
import { auditsModalContent } from "@/lib/content/audits-modal-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, CheckCircle, Shield, Building, Search, AlertTriangle, FileText, Award } from "lucide-react";


// --- Helper Components with Professional Styling ---

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="bg-muted/30 p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground prose max-w-none text-gray-700 leading-relaxed break-words">
            <div className="space-y-4">{children}</div>
        </div>
    </div>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mt-6 mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-3 font-headline flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            {title}
        </h3>
        <div className="pl-4 border-l-2 border-gray-100 text-gray-700">
            {children}
        </div>
    </div>
);

// --- Content Components ---

const topicComponents = {
    intro: function IntroContent({ content }: { content: any }) {
        return (
             <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.executive_summary.title}>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 italic text-blue-900" dangerouslySetInnerHTML={{ __html: content.sections.executive_summary.content }}/>
                </Section>
                <Section title={content.sections.introduction.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }}/>
                    <SubSection title={content.sections.introduction.subsections.purpose_and_benefits.title}>
                         <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.purpose_and_benefits.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.introduction.subsections.distinction_audits.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.distinction_audits.content }}/>
                    </SubSection>
                </Section>
            </div>
        )
    },
    regulatory: function RegulatoryContent({ content }: { content: any }) {
        return (
             <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.regulatory_frameworks.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.content }}/>
                    <div className="grid gap-4 mt-4">
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <SubSection title={content.sections.regulatory_frameworks.subsections.fssai.title}>
                                <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.fssai.content }}/>
                            </SubSection>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <SubSection title={content.sections.regulatory_frameworks.subsections.iso22000.title}>
                                <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.iso22000.content }}/>
                            </SubSection>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <SubSection title={content.sections.regulatory_frameworks.subsections.haccp.title}>
                                <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.haccp.content }}/>
                            </SubSection>
                        </div>
                    </div>
                </Section>
            </div>
        )
    },
    internal: function InternalAuditsContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.internal_audits.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.content }}/>
                    <SubSection title={content.sections.internal_audits.subsections.purpose.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.subsections.purpose.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.internal_audits.subsections.process.title}>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100" dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.subsections.process.content }}/>
                    </SubSection>
                </Section>
            </div>
        )
    },
    external: function ExternalAuditsContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.external_audits.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.content }}/>
                     <SubSection title={content.sections.external_audits.subsections.types.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.types.content }}/>
                    </SubSection>
                     <SubSection title={content.sections.external_audits.subsections.process.title}>
                         <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.process.content }}/>
                    </SubSection>
                     <SubSection title={content.sections.external_audits.subsections.fssai_system.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.fssai_system.content }}/>
                         <div className="overflow-x-auto mt-4 rounded-lg border border-gray-200">
                            <Table>
                                <TableHeader className="bg-muted/50">
                                    <TableRow>
                                        <TableHead className="font-bold text-primary">Audit Score Range</TableHead>
                                        <TableHead className="font-bold text-primary">Recommended Audit Frequency (Dairy)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow><TableCell className="font-medium text-green-600">81-100%</TableCell><TableCell>Once in 12 months</TableCell></TableRow>
                                    <TableRow><TableCell className="font-medium text-yellow-600">51-80%</TableCell><TableCell>Once in 9 months</TableCell></TableRow>
                                    <TableRow><TableCell className="font-medium text-red-600">&lt;50%</TableCell><TableCell>Once in 6 months</TableCell></TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
            </div>
        )
    },
    focus_areas: function FocusAreasContent({ content }: { content: any }) {
        return (
             <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.focus_areas.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.sections.focus_areas.content }}/>
                </Section>
            </div>
        )
    },
    challenges: function ChallengesContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.challenges.title}>
                    <div className="grid gap-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                             <SubSection title={content.sections.challenges.subsections.common_challenges.title}>
                                <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.common_challenges.content }}/>
                            </SubSection>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                            <SubSection title={content.sections.challenges.subsections.best_practices.title}>
                                 <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.best_practices.content }}/>
                            </SubSection>
                        </div>
                         <SubSection title={content.sections.challenges.subsections.fostering_culture.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.fostering_culture.content }}/>
                        </SubSection>
                    </div>
                </Section>
            </div>
        )
    },
    conclusion: function ConclusionContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.conclusion.title}>
                    <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 text-emerald-900 font-medium" dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }}/>
                </Section>
            </div>
        )
    },
    recommendations: function RecommendationsContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.recommendations.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.recommendations.content }}/>
                </Section>
            </div>
        )
    }
}


// --- Main Component ---

export function AuditsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(auditsModalContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  // --- COLOR CONFIGURATION ---
  const topics = [
    { 
        value: "intro", 
        title: content.tabs.intro, 
        icon: BookOpen, 
        component: topicComponents.intro,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "regulatory", 
        title: content.tabs.regulatory, 
        icon: Shield, 
        component: topicComponents.regulatory,
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
    { 
        value: "internal", 
        title: content.tabs.internal, 
        icon: Search, 
        component: topicComponents.internal,
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        hoverClass: "hover:bg-amber-100"
    },
    { 
        value: "external", 
        title: content.tabs.external, 
        icon: Building, 
        component: topicComponents.external,
        colorClass: "text-indigo-600",
        bgClass: "bg-indigo-50",
        borderClass: "border-indigo-200",
        hoverClass: "hover:bg-indigo-100"
    },
    { 
        value: "focus_areas", 
        title: content.tabs.focus_areas, 
        icon: FileText, 
        component: topicComponents.focus_areas,
        colorClass: "text-teal-600",
        bgClass: "bg-teal-50",
        borderClass: "border-teal-200",
        hoverClass: "hover:bg-teal-100"
    },
    { 
        value: "challenges", 
        title: content.tabs.challenges, 
        icon: AlertTriangle, 
        component: topicComponents.challenges,
        colorClass: "text-red-600",
        bgClass: "bg-red-50",
        borderClass: "border-red-200",
        hoverClass: "hover:bg-red-100"
    },
    { 
        value: "conclusion", 
        title: content.tabs.conclusion, 
        icon: CheckCircle, 
        component: topicComponents.conclusion,
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "recommendations", 
        title: content.tabs.recommendations, 
        icon: Award, 
        component: topicComponents.recommendations,
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    }
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
        scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(topicValue);
  }

  const handleBack = () => {
    setActiveTopic(null);
  }

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
        setTimeout(() => {
            if(scrollAreaRef.current) {
                scrollAreaRef.current.scrollTop = scrollPosition.current;
            }
        }, 0);
    }
  }, [activeTopic]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Topics
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                        <ActiveComponent content={content} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4 sm:p-2">
                  {topics.map(topic => (
                    <button
                      key={topic.value}
                      onClick={() => handleSelectTopic(topic.value)}
                      className={`
                        flex items-center p-5 rounded-xl border transition-all duration-200
                        text-left shadow-sm hover:shadow-md
                        ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                        group
                      `}
                    >
                      <topic.icon className={`w-8 h-8 mr-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${topic.colorClass}`} />
                      <div>
                        <span className="font-bold font-headline text-lg text-gray-800 group-hover:text-black">
                            {topic.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
