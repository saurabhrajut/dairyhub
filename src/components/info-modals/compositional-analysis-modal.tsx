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
import { Button } from "../ui/button";
import { ArrowLeft, Beaker, Droplet, Wind, ShieldCheck, Component, FlaskConical, Snowflake, Thermometer, Archive } from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";
import { useLanguage } from "@/context/language-context";
import { compositionalAnalysisContent } from "@/lib/content/compositional-analysis-content";

// --- Helper Components ---

const InfoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-card border border-border rounded-xl shadow-sm mt-6 overflow-hidden ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-bold text-primary scroll-mt-24 font-headline border-b p-4 bg-muted/30">
        {children}
    </h3>
);

const Procedure = ({ test }: { test: any }) => (
    <AccordionItem value={test.title.replace(/\s+/g, '-').toLowerCase()} className="border-b last:border-0">
        <AccordionTrigger className="text-left hover:no-underline px-4 py-3 hover:bg-slate-50 transition-colors">
            <div className="flex flex-col text-left">
                <span className="font-bold text-base sm:text-lg text-gray-800">{test.title}</span>
                {test.purpose && <span className="text-xs text-muted-foreground font-normal mt-1">{test.purpose}</span>}
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-4 bg-white">
            <div className="prose prose-sm max-w-none break-words text-gray-700 leading-relaxed">
                {test.procedure && <div dangerouslySetInnerHTML={{ __html: test.procedure }} />}
                
                {test.reference && (
                    <div className="mt-4 pt-2 border-t border-dashed">
                        <p className="text-xs text-muted-foreground italic">
                            <strong>Reference:</strong> {test.reference}
                        </p>
                    </div>
                )}
            </div>
        </AccordionContent>
    </AccordionItem>
);

// --- Content Data with Color Themes ---

const analysisTopics = [
    { 
        value: "processed-milk", 
        title: "Milk", 
        icon: Droplet,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "cream", 
        title: "Cream", 
        icon: Droplet,
        colorClass: "text-sky-600",
        bgClass: "bg-sky-50",
        borderClass: "border-sky-200",
        hoverClass: "hover:bg-sky-100"
    },
    { 
        value: "cream-powder", 
        title: "Cream Powder", 
        icon: Wind,
        colorClass: "text-slate-600",
        bgClass: "bg-slate-100",
        borderClass: "border-slate-300",
        hoverClass: "hover:bg-slate-200"
    },
    { 
        value: "butter", 
        title: "Butter", 
        icon: Component,
        colorClass: "text-yellow-600",
        bgClass: "bg-yellow-50",
        borderClass: "border-yellow-200",
        hoverClass: "hover:bg-yellow-100"
    },
    { 
        value: "ghee-butter-oil", 
        title: "Ghee / Butter Oil", 
        icon: FlaskConical,
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        hoverClass: "hover:bg-amber-100"
    },
    { 
        value: "cheese-paneer", 
        title: "Paneer / Cheese", 
        icon: PaneerIcon,
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "dahi-yoghurt", 
        title: "Dahi / Yoghurt", 
        icon: Beaker,
        colorClass: "text-teal-600",
        bgClass: "bg-teal-50",
        borderClass: "border-teal-200",
        hoverClass: "hover:bg-teal-100"
    },
    { 
        value: "chakka-shrikhand", 
        title: "Chakka / Shrikhand", 
        icon: Beaker,
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "khoa", 
        title: "Khoa", 
        icon: Component,
        colorClass: "text-rose-600",
        bgClass: "bg-rose-50",
        borderClass: "border-rose-200",
        hoverClass: "hover:bg-rose-100"
    },
    { 
        value: "ice-cream", 
        title: "Ice Cream", 
        icon: IceCreamIcon,
        colorClass: "text-pink-600",
        bgClass: "bg-pink-50",
        borderClass: "border-pink-200",
        hoverClass: "hover:bg-pink-100"
    },
    { 
        value: "condensed-milk", 
        title: "Condensed Milk", 
        icon: Thermometer,
        colorClass: "text-indigo-600",
        bgClass: "bg-indigo-50",
        borderClass: "border-indigo-200",
        hoverClass: "hover:bg-indigo-100"
    },
    { 
        value: "milk-powder", 
        title: "Milk Powder", 
        icon: Wind,
        colorClass: "text-gray-600",
        bgClass: "bg-gray-100",
        borderClass: "border-gray-300",
        hoverClass: "hover:bg-gray-200"
    },
    { 
        value: "casein", 
        title: "Casein", 
        icon: FlaskConical,
        colorClass: "text-violet-600",
        bgClass: "bg-violet-50",
        borderClass: "border-violet-200",
        hoverClass: "hover:bg-violet-100"
    },
    { 
        value: "whey-powder", 
        title: "Whey Powder", 
        icon: Archive,
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
];

// --- Main Component ---

export function CompositionalAnalysisModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(compositionalAnalysisContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  const selectedTopic = analysisTopics.find(t => t.value === activeTopic);
  const selectedContent = selectedTopic ? content.topics[selectedTopic.value as keyof typeof content.topics] : null;

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


  const renderContent = () => {
    if (!selectedContent) return null;
    return (
      <div className="prose prose-sm max-w-none break-words">
          <InfoCard className="mt-0">
              <SectionTitle id={`${activeTopic}-analysis`}>{selectedContent.title}</SectionTitle>
              <Accordion type="single" collapsible className="w-full">
                  {selectedContent.tests.map((test: any, index: number) => (
                      <Procedure key={index} test={test} />
                  ))}
              </Accordion>
          </InfoCard>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-primary mb-2 font-headline">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground">
             {selectedContent ? selectedContent.title : content.main_description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic ? (
             <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {content.back_to_topics}
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                       {renderContent()}
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4 sm:p-2">
                    {analysisTopics.map(topic => (
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
                                    {content.topics[topic.value as keyof typeof content.topics].title}
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
