
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
import { ArrowLeft, BookOpen, Settings, Droplet, TestTube, Wind, FlaskConical, Layers } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { HplcIcon } from "@/components/icons";

// Import individual content files
import { hplcContent } from "@/lib/content/chromatography/hplc-content";
import { gcContent } from "@/lib/content/chromatography/gc-content";
import { tlcContent } from "@/lib/content/chromatography/tlc-content";
import { ionExchangeContent } from "@/lib/content/chromatography/ion-exchange-content";
import { sizeExclusionContent } from "@/lib/content/chromatography/size-exclusion-content";
import { testingMethodsContent } from "@/lib/content/chromatography/testing-methods-content";
import { cn } from "@/lib/utils";

// --- Helper Components ---

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        <div className="prose prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);

const TopicContent = ({ content }: { content: any }) => {
    if (!content) return <p>Content coming soon...</p>;
    
    return (
        <div>
            {Object.keys(content).map(key => {
                const section = content[key];
                if (typeof section === 'object' && section.title && section.content) {
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

  const topics = [
    { value: "hplc", title: topicMap.hplc.mainTitle, icon: HplcIcon },
    { value: "gc", title: topicMap.gc.mainTitle, icon: Settings },
    { value: "tlc", title: topicMap.tlc.mainTitle, icon: Layers },
    { value: "ion-exchange", title: topicMap["ion-exchange"].mainTitle, icon: Droplet },
    { value: "size-exclusion", title: topicMap["size-exclusion"].mainTitle, icon: TestTube },
    { value: "testing-methods", title: topicMap["testing-methods"].mainTitle, icon: FlaskConical },
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
    if (selectedTopic) return selectedTopic.description;
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
              <Button variant="ghost" onClick={handleBack}>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 sm:p-0">
                {topics.map(topic => (
                    <button
                      key={topic.value}
                      onClick={() => handleSelectTopic(topic.value)}
                      className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                    >
                      <topic.icon className="w-8 h-8 text-primary mr-4 shrink-0" />
                      <div>
                        <span className="font-semibold font-headline text-card-foreground">{topic.title}</span>
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
