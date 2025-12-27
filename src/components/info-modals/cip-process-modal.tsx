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
import { ArrowLeft, BookOpen, ChevronsRight, Recycle, Settings, TestTube, Wind, FlaskConical, Thermometer } from "lucide-react";


// --- Helper Components ---

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

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-6 mb-3">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 font-headline">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            {children}
        </h3>
    </div>
);

// --- Content Components ---

const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
    intro: function Content({ content }: { content: any }) {
        return (
            <Section title={content.intro.title}>
                <div dangerouslySetInnerHTML={{ __html: content.intro.htmlContent }} />
                <div className="my-4">
                    
                </div>
            </Section>
        );
    },
    cip_cycle: function Content({ content }: { content: any }) {
        return (
            <Section title={content.cip_cycle.title}>
                <p className="mb-4">{content.cip_cycle.intro}</p>
                
                <div className="my-4 flex justify-center">
                    
                </div>

                <div className="space-y-4 font-mono text-center mt-6">
                    {content.cip_cycle.steps.map((step: any, index: number) => (
                       <div key={index} className="relative">
                            <div className={`p-5 border rounded-xl shadow-sm text-left transition-all hover:shadow-md ${step.colorClass || 'bg-white border-gray-200'}`}>
                                <h4 className="font-sans font-bold text-lg text-primary mb-2 flex items-center gap-2">
                                    <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs border border-primary/20">{index + 1}</span>
                                    {step.title}
                                </h4>
                                <div className="font-sans text-sm text-gray-600 prose prose-sm max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: step.details }} />
                            </div>
                            {index < content.cip_cycle.steps.length - 1 && (
                                <div className="flex justify-center my-2">
                                    <div className="h-6 w-0.5 bg-gray-300"></div>
                                </div>
                            )}
                       </div>
                    ))}
                </div>
            </Section>
        )
    },
    chemicals: function Content({ content }: { content: any }) {
        return (
             <Section title={content.chemicals.title}>
              <p className="mb-4">{content.chemicals.intro}</p>
              <div className="grid gap-6">
                {content.chemicals.types.map((type: any, index: number) => (
                    <div key={index} className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                        <h3 className="text-lg font-bold mb-2 text-purple-900 flex items-center gap-2">
                            <FlaskConical className="w-5 h-5" />
                            {type.title}
                        </h3>
                        <div className="text-purple-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: type.details }} />
                    </div>
                ))}
              </div>
          </Section>
        )
    },
    advantages: function Content({ content }: { content: any }) {
        return (
            <Section title={content.advantages.title}>
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <ul className="grid gap-3">
                     {content.advantages.list.map((adv: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-emerald-900">
                            <ChevronsRight className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{adv}</span>
                        </li>
                     ))}
                  </ul>
              </div>
          </Section>
        )
    },
    cleaning_procedures: function Content({ content }: { content: any }) {
        return (
             <Section title={content.cleaning_procedures.title}>
              {content.cleaning_procedures.sections.map((sec: any, index: number) => (
                  <div key={index} className="mb-8 last:mb-0">
                      <SubHeading>{sec.title}</SubHeading>
                      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-3" dangerouslySetInnerHTML={{ __html: sec.content }} />
                  </div>
              ))}
          </Section>
        )
    },
    teepol_detergent: function Content({ content }: { content: any }) {
        return (
            <Section title={content.teepol_detergent.title}>
              <div className="overflow-x-auto rounded-lg border border-gray-200" dangerouslySetInnerHTML={{ __html: content.teepol_detergent.htmlContent }} />
          </Section>
        )
    },
    sip: function Content({ content }: { content: any }) {
        return (
            <Section title={content.sip.title}>
              <p className="mb-4">{content.sip.intro}</p>
              <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                <div className="prose prose-sm max-w-none text-red-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.sip.process }} />
              </div>
          </Section>
        )
    },
    solution_strength: function Content({ content }: { content: any }) {
        return (
            <Section title={content.solution_strength.title}>
                <p className="mb-4">{content.solution_strength.intro}</p>
                <div className="mt-4 p-5 bg-indigo-50 border border-indigo-100 rounded-xl overflow-x-auto">
                    <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                        <TestTube className="w-5 h-5" />
                        Alkalinity Test Procedure
                    </h4>
                    <div className="text-indigo-900 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: content.solution_strength.alkalinity_test.content }} />
                </div>
            </Section>
        )
    }
}


// --- Main Component ---

export function CipProcessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(cipProcessContent);
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
        title: content.intro.title, 
        icon: BookOpen,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "cip_cycle", 
        title: content.cip_cycle.title, 
        icon: Recycle,
        // Green Theme (Process/Recycle)
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "chemicals", 
        title: content.chemicals.title, 
        icon: FlaskConical,
        // Purple Theme (Chemistry)
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
    { 
        value: "advantages", 
        title: content.advantages.title, 
        icon: ChevronsRight,
        // Teal Theme (Benefits)
        colorClass: "text-teal-600",
        bgClass: "bg-teal-50",
        borderClass: "border-teal-200",
        hoverClass: "hover:bg-teal-100"
    },
    { 
        value: "cleaning_procedures", 
        title: content.cleaning_procedures.title, 
        icon: Settings,
        // Orange Theme (Operations)
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "teepol_detergent", 
        title: content.teepol_detergent.title, 
        icon: Wind,
        // Cyan Theme (Detergent)
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
    { 
        value: "sip", 
        title: content.sip.title, 
        icon: Thermometer,
        // Red Theme (Heat/Sterilization)
        colorClass: "text-red-600",
        bgClass: "bg-red-50",
        borderClass: "border-red-200",
        hoverClass: "hover:bg-red-100"
    },
    { 
        value: "solution_strength", 
        title: content.solution_strength.title, 
        icon: TestTube,
        // Indigo Theme (Lab/Analysis)
        colorClass: "text-indigo-600",
        bgClass: "bg-indigo-50",
        borderClass: "border-indigo-200",
        hoverClass: "hover:bg-indigo-100"
    },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;

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
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground">
            {selectedTopic ? selectedTopic.title : content.main_description}
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
