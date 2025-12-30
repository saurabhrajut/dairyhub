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
import { Button } from "../ui/button";
import { ArrowLeft, Settings, Droplet, TestTube, FlaskConical, Layers, ListChecks } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { HplcIcon } from "@/components/icons";

// Import individual content files
import { hplcContent } from "@/lib/content/chromatography/hplc-content";
import { gcContent } from "@/lib/content/chromatography/gc-content";
import { tlcContent } from "@/lib/content/chromatography/tlc-content";
import { ionExchangeContent } from "@/lib/content/chromatography/ion-exchange-content";
import { sizeExclusionContent } from "@/lib/content/chromatography/size-exclusion-content";
import { testingMethodsContent } from "@/lib/content/chromatography/testing-methods-content";

// --- Helper Components ---

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="bg-muted/30 p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground prose max-w-none text-gray-700 leading-relaxed break-words">
            {children}
        </div>
    </div>
);

const TopicContent = ({ content }: { content: any }) => {
    if (!content) return <p className="text-center text-muted-foreground p-8">Content coming soon...</p>;
    
    return (
        <div>
            {Object.keys(content).map(key => {
                const section = content[key];
                // Filter out metadata keys like 'mainTitle' or 'description'
                if (typeof section === 'object' && section !== null && section.title && section.content) {
                    return (
                        <Section key={key} title={section.title}>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </Section>
                    );
                }
                return null;
            })}
        </div>
    );
};

// --- Main Component ---

export function ChromatographyModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const topicMap = {
    "hplc": t(hplcContent),
    "gc": t(gcContent),
    "tlc": t(tlcContent),
    "ion-exchange": t(ionExchangeContent),
    "size-exclusion": t(sizeExclusionContent),
    "testing-methods": t(testingMethodsContent),
  };

  // --- COLOR CONFIGURATION ---
  const topics = [
    { 
        value: "hplc", 
        title: topicMap.hplc?.mainTitle || "HPLC", 
        icon: HplcIcon,
        // Blue Theme
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "gc", 
        title: topicMap.gc?.mainTitle || "Gas Chromatography", 
        icon: Settings, // Often complex machinery
        // Purple Theme
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
    { 
        value: "tlc", 
        title: topicMap.tlc?.mainTitle || "Thin Layer (TLC)", 
        icon: Layers,
        // Amber Theme
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        hoverClass: "hover:bg-amber-100"
    },
    { 
        value: "ion-exchange", 
        title: topicMap["ion-exchange"]?.mainTitle || "Ion Exchange", 
        icon: Droplet, // Liquid/Resin
        // Emerald Theme
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "size-exclusion", 
        title: topicMap["size-exclusion"]?.mainTitle || "Size Exclusion", 
        icon: TestTube,
        // Orange Theme
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "testing-methods", 
        title: topicMap["testing-methods"]?.mainTitle || "Test Methods", 
        icon: ListChecks,
        // Red Theme
        colorClass: "text-red-600",
        bgClass: "bg-red-50",
        borderClass: "border-red-200",
        hoverClass: "hover:bg-red-100"
    },
  ];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };

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

  const selectedTopic = activeTopic ? topicMap[activeTopic as keyof typeof topicMap] : null;
  
  const getDialogDescription = () => {
    if (selectedTopic && selectedTopic.description) return selectedTopic.description;
    return "Explore different chromatography methods used in the dairy industry.";
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            Chromatography Methods
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {getDialogDescription()}
          </DialogDescription>
        </DialogHeader>

        {activeTopic && selectedTopic ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0">
                <TopicContent content={selectedTopic} />
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
