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
import { etpModalContent } from "@/lib/content/etp-modal-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Settings, Award, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";


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
        <h3 className="text-lg font-bold text-gray-800 mb-2 font-headline flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            {title}
        </h3>
        <div className="pl-4 border-l-2 border-gray-100 text-gray-700">
            {children}
        </div>
    </div>
);

// --- Content Components ---

const topicComponents = {
    intro: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.executive_summary.title}>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-900" dangerouslySetInnerHTML={{ __html: content.sections.executive_summary.content }} />
                </Section>
                 <Section title={content.sections.introduction.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }} />
                    <SubSection title={content.sections.introduction.subsections.characteristics.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.characteristics.content }} />
                        <div className="overflow-x-auto mt-4 rounded-lg border border-gray-200">
                           <Table>
                                <TableHeader className="bg-muted/50">
                                    <TableRow>
                                        <TableHead className="font-bold text-primary whitespace-nowrap">{content.sections.introduction.subsections.characteristics.table.header1}</TableHead>
                                        <TableHead className="font-bold text-primary whitespace-nowrap">{content.sections.introduction.subsections.characteristics.table.header2}</TableHead>
                                        <TableHead className="font-bold text-primary whitespace-nowrap">{content.sections.introduction.subsections.characteristics.table.header3}</TableHead>
                                        <TableHead className="font-bold text-primary whitespace-nowrap">{content.sections.introduction.subsections.characteristics.table.header4}</TableHead>
                                        <TableHead className="font-bold text-primary whitespace-nowrap">{content.sections.introduction.subsections.characteristics.table.header5}</TableHead>
                                        <TableHead className="font-bold text-primary whitespace-nowrap">{content.sections.introduction.subsections.characteristics.table.header6}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.sections.introduction.subsections.characteristics.table.rows.map((row: any, index: number) => (
                                      <TableRow key={index}>
                                        <TableCell className="font-medium">{row.param}</TableCell>
                                        <TableCell>{row.butter}</TableCell>
                                        <TableCell>{row.cream}</TableCell>
                                        <TableCell>{row.milk}</TableCell>
                                        <TableCell>{row.cheese}</TableCell>
                                        <TableCell>{row.powdered}</TableCell>
                                      </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
            </div>
        )
    },
    processes: function Content({ content }: { content: any }) {
        const processContent = content.sections.treatment_processes;
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={processContent.title}>
                    <p>{processContent.content}</p>
                    <div className="mt-8 space-y-4">
                        {processContent.flowchart.map((step: any, index: number) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-full bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-lg text-emerald-800 flex items-center gap-2">
                                        <div className="bg-emerald-200 text-emerald-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">{step.step.split(' ')[1]}</div>
                                        {step.title}
                                    </h4>
                                    <div className="mt-2 text-sm text-gray-700 pl-8" dangerouslySetInnerHTML={{ __html: step.details }}/>
                                </div>
                                {index < processContent.flowchart.length - 1 && (
                                    <div className="text-2xl text-emerald-300 my-2">↓</div>
                                )}
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        )
    },
    benefits: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.benefits.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.content }} />
                    <div className="grid gap-4 mt-4">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <SubSection title={content.sections.benefits.subsections.environmental.title}>
                                <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.environmental.content }} />
                            </SubSection>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <SubSection title={content.sections.benefits.subsections.economic.title}>
                                <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.economic.content }} />
                            </SubSection>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <SubSection title={content.sections.benefits.subsections.operational.title}>
                                <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.operational.content }} />
                            </SubSection>
                        </div>
                    </div>
                </Section>
            </div>
        )
    },
    factors: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.key_factors.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.content }} />
                    <SubSection title={content.sections.key_factors.subsections.characteristics.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.characteristics.content }} />
                    </SubSection>
                    <SubSection title={content.sections.key_factors.subsections.compliance.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.compliance.content }} />
                            <div className="overflow-x-auto mt-4 rounded-lg border border-gray-200">
                            <Table>
                                <TableHeader className="bg-muted/50">
                                    <TableRow>
                                        <TableHead className="font-bold text-primary">{content.sections.key_factors.subsections.compliance.table.header1}</TableHead>
                                        <TableHead className="font-bold text-primary">{content.sections.key_factors.subsections.compliance.table.header2}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.sections.key_factors.subsections.compliance.table.rows.map((row: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{row.param}</TableCell>
                                        <TableCell>{row.limit}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                    <SubSection title={content.sections.key_factors.subsections.technology.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.technology.content }} />
                    </SubSection>
                </Section>
            </div>
        )
    },
    challenges: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.challenges.title}>
                    <div className="bg-red-50 p-5 rounded-lg border border-red-100 text-gray-800" dangerouslySetInnerHTML={{ __html: content.sections.challenges.content }} />
                </Section>
            </div>
        )
    },
    future: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.future_outlook.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.content }} />
                <SubSection title={content.sections.future_outlook.subsections.innovations.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.subsections.innovations.content }} />
                </SubSection>
                    <SubSection title={content.sections.future_outlook.subsections.conclusion.title}>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100" dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.subsections.conclusion.content }} />
                </SubSection>
                </Section>
            </div>
        )
    },
}

// --- Main Component ---

export function EtpModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(etpModalContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
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
        // Blue Theme
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "processes", 
        title: content.tabs.processes, 
        icon: Settings, 
        component: topicComponents.processes,
        // Green Theme (Eco/Process)
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "benefits", 
        title: content.tabs.benefits, 
        icon: Award, 
        component: topicComponents.benefits,
        // Amber Theme (Value)
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        hoverClass: "hover:bg-amber-100"
    },
    { 
        value: "factors", 
        title: content.tabs.factors, 
        icon: CheckCircle, 
        component: topicComponents.factors,
        // Teal Theme (Key Points)
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
        // Red Theme (Alert)
        colorClass: "text-red-600",
        bgClass: "bg-red-50",
        borderClass: "border-red-200",
        hoverClass: "hover:bg-red-100"
    },
    { 
        value: "future", 
        title: content.tabs.future, 
        icon: TrendingUp, 
        component: topicComponents.future,
        // Purple Theme (Innovation)
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-2">
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
