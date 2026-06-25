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
import { validationVerificationContent } from "@/lib/content/validation-verification-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Droplet, Settings, FolderClock, CheckCircle } from "lucide-react";


// --- Helper Components with Professional Styling ---

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden w-full max-w-full box-border">
        <div className="bg-muted/30 p-4 border-b border-border w-full">
            <h2 className="text-xl font-bold text-primary font-headline strict-html-wrap">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground text-gray-700 leading-relaxed w-full min-w-0 max-w-full box-border">
            <div className="space-y-4 w-full min-w-0 max-w-full">{children}</div>
        </div>
    </div>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mt-6 mb-4 w-full min-w-0 max-w-full">
        <h3 className="text-lg font-bold text-gray-800 mb-2 font-headline flex items-center gap-2 w-full max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>
            <span className="flex-1 strict-html-wrap">{title}</span>
        </h3>
        <div className="pl-4 border-l-2 border-gray-100 text-gray-700 w-full min-w-0 max-w-full">
            {children}
        </div>
    </div>
);

// --- Content Components ---

const topicComponents = {
    intro: function Content({ content }: { content: any }) {
        return (
             <Section title={content.sections.introduction.title}>
                <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }}/>
                
                <SubSection title={content.sections.introduction.subsections.defining.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.defining.content }}/>
                </SubSection>

                <SubSection title={content.sections.introduction.subsections.indispensable_role.title}>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 w-full min-w-0 max-w-full overflow-hidden">
                        <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.indispensable_role.content }}/>
                    </div>
                </SubSection>

                <SubSection title={content.sections.introduction.subsections.regulatory_frameworks.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.regulatory_frameworks.content }}/>
                </SubSection>
                
                <div className="overflow-x-auto mt-6 rounded-lg border border-gray-200 w-full max-w-full">
                    <Table className="w-full strict-html-wrap">
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead colSpan={3} className="text-center font-bold text-primary text-base">Table 1: Key Distinctions: Validation vs. Verification</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="bg-muted/20">
                                <TableCell className="font-bold border-r">Feature</TableCell>
                                <TableCell className="font-bold border-r">Validation</TableCell>
                                <TableCell className="font-bold">Verification</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium border-r">Definition</TableCell>
                                <TableCell className="border-r">Gathering scientific and technical evidence to prove a control measure or plan is capable of controlling a specific food safety hazard.</TableCell>
                                <TableCell>Routine checks, tests, and observations to confirm a validated plan is implemented correctly and consistently.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium border-r">Primary Question</TableCell>
                                <TableCell className="border-r italic text-blue-700">"Is our plan effective?"</TableCell>
                                <TableCell className="italic text-green-700">"Are we following our plan?"</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium border-r">Focus</TableCell>
                                <TableCell className="border-r">Design and accuracy of the food safety plan; theoretical soundness.</TableCell>
                                <TableCell>Implementation and consistency of the food safety plan; practical adherence.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium border-r">Timing</TableCell>
                                <TableCell className="border-r">Primarily before implementation of a new process or control; also upon significant changes.</TableCell>
                                <TableCell>Ongoing, routine activities performed daily, weekly, or at other defined frequencies.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium border-r">Methods (Examples)</TableCell>
                                <TableCell className="border-r">Citing scientific literature, regulatory guidance, mathematical models, in-plant tests, expert consultation, challenge studies.</TableCell>
                                <TableCell>Calibration checks, product sampling, record review, visual inspections, environmental monitoring, audits.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Section>
        )
    },
    raw_milk: function RawMilkContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.raw_milk_handling.title}>
                <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.content }}/>
                <div className="grid gap-4 mt-2 w-full min-w-0 max-w-full">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 w-full min-w-0 max-w-full overflow-hidden">
                        <SubSection title={content.sections.raw_milk_handling.subsections.quality_control.title}>
                            <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.subsections.quality_control.content }}/>
                        </SubSection>
                    </div>
                    <SubSection title={content.sections.raw_milk_handling.subsections.tanker_cleaning.title}>
                        <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.subsections.tanker_cleaning.content }}/>
                    </SubSection>
                </div>
            </Section>
        )
    },
    processing: function ProcessingContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.processing.title}>
                <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.processing.content }}/>
                
                <SubSection title={content.sections.processing.subsections.thermal.title}>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 strict-html-wrap prose prose-sm max-w-none w-full min-w-0 max-w-full overflow-hidden" dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.thermal.content }}/>
                </SubSection>
                
                <SubSection title={content.sections.processing.subsections.non_thermal.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.non_thermal.content }}/>
                </SubSection>
                <SubSection title={content.sections.processing.subsections.homogenization.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.homogenization.content }}/>
                </SubSection>
                <SubSection title={content.sections.processing.subsections.cip_cop.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.cip_cop.content }}/>
                </SubSection>
            </Section>
        )
    },
    storage: function StorageContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.storage.title}>
                <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.storage.content }}/>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full min-w-0 max-w-full">
                     <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 w-full min-w-0 max-w-full overflow-hidden">
                        <SubSection title={content.sections.storage.subsections.cold_chain.title}>
                            <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.cold_chain.content }}/>
                        </SubSection>
                     </div>
                     <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 w-full min-w-0 max-w-full overflow-hidden">
                        <SubSection title={content.sections.storage.subsections.calibration.title}>
                            <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.calibration.content }}/>
                        </SubSection>
                     </div>
                </div>

                <SubSection title={content.sections.storage.subsections.microbiological.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.microbiological.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.allergen.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.allergen.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.shelf_life.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.shelf_life.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.documentation.title}>
                    <div className="strict-html-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.documentation.content }}/>
                </SubSection>
            </Section>
        )
    },
    conclusion: function ConclusionContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.conclusion.title}>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 text-purple-900 font-medium leading-relaxed strict-html-wrap prose prose-sm max-w-none w-full min-w-0 max-w-full overflow-hidden" dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }}/>
            </Section>
        )
    }
}


// --- Main Component ---

export function ValidationVerificationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(validationVerificationContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
      scrollPosition.current = 0; // Reset scroll
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
        value: "raw_milk", 
        title: content.tabs.raw_milk, 
        icon: Droplet, 
        component: topicComponents.raw_milk,
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "processing", 
        title: content.tabs.processing, 
        icon: Settings, 
        component: topicComponents.processing,
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "storage", 
        title: content.tabs.storage, 
        icon: FolderClock, 
        component: topicComponents.storage,
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
    { 
        value: "conclusion", 
        title: content.tabs.conclusion, 
        icon: CheckCircle, 
        component: topicComponents.conclusion,
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    }
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  // Save the scroll position of Radix Viewport before leaving
  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        scrollPosition.current = viewport.scrollTop;
      }
    }
    setActiveTopic(topicValue);
  };

  const handleBack = () => {
    setActiveTopic(null);
  };

  // Restore the scroll position targeting the Radix viewport when topic is cleared
  useEffect(() => {
    if (!activeTopic) {
      const timeoutId = setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
          if (viewport) {
            viewport.scrollTop = scrollPosition.current;
          }
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [activeTopic]);
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* GLOBAL CSS OVERRIDE to force Android WebView to respect boundaries */}
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

      <DialogContent className="max-w-4xl lg:max-w-6xl w-[90vw] sm:w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 overflow-hidden box-border">
        <DialogHeader className="p-4 sm:p-0 shrink-0 w-full max-w-full box-border">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline strict-html-wrap">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground strict-html-wrap">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0 w-full min-w-0 max-w-full box-border overflow-hidden">
            <div className="px-4 sm:px-0 w-full shrink-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4 w-full min-w-0 max-w-full overflow-hidden">
              <div className="p-4 pt-0 sm:p-0 w-full min-w-0 max-w-full overflow-hidden">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* Using ref={scrollAreaRef} so we can query Radix Viewport later */
          <ScrollArea className="flex-1 mt-4 sm:pr-4 w-full min-w-0 max-w-full overflow-hidden" ref={scrollAreaRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-2 w-full min-w-0 max-w-full">
              {topics.map(topic => (
                <button
                  key={topic.value}
                  onClick={() => handleSelectTopic(topic.value)}
                  className={`
                    flex items-center p-5 rounded-xl border transition-all duration-200
                    text-left shadow-sm hover:shadow-md w-full min-w-0 max-w-full box-border
                    ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                    group
                  `}
                >
                  <topic.icon className={`w-8 h-8 mr-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${topic.colorClass}`} />
                  <div className="min-w-0 flex-1">
                    <span className="font-bold font-headline text-lg text-gray-800 group-hover:text-black strict-html-wrap">
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
