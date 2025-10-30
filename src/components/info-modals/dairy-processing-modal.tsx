"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Thermometer, Settings, Droplet, CheckSquare, Factory, Wind, Snowflake } from "lucide-react";
import { useLanguage } from "@/context/language-context";

// Import individual content files
import { pasteurizationContent } from "@/lib/content/dairy-processing/pasteurization";
import { standardizationContent } from "@/lib/content/dairy-processing/standardization";
import { separationContent } from "@/lib/content/dairy-processing/separation";
import { clarificationContent } from "@/lib/content/dairy-processing/clarification";
import { homogenizationContent } from "@/lib/content/dairy-processing/homogenization";
import { refrigerationContent } from "@/lib/content/dairy-processing/refrigeration";
import { sterilizationContent } from "@/lib/content/dairy-processing/sterilization";
import { evaporationContent } from "@/lib/content/dairy-processing/evaporation";
import { uhtContent } from "@/lib/content/dairy-processing/uht";
import { sprayDryingContent } from "@/lib/content/dairy-processing/spray-drying";
import { fermentationContent } from "@/lib/content/dairy-processing/fermentation";
import { churningContent } from "@/lib/content/dairy-processing/churning";
import { boilerContent } from "@/lib/content/dairy-processing/boiler";


const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed mt-6">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        <div className="prose prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);

const TopicContent = ({ content }: { content: any }) => {
    if (!content) return <p>Content will be available soon.</p>;
    
    return (
        <Section title={content.title}>
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </Section>
    );
};

export function DairyProcessingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topicMap = useMemo(() => ({
    "pasteurization": t(pasteurizationContent),
    "standardization": t(standardizationContent),
    "separation": t(separationContent),
    "clarification": t(clarificationContent),
    "homogenization": t(homogenizationContent),
    "refrigeration": t(refrigerationContent),
    "sterilization": t(sterilizationContent),
    "evaporation": t(evaporationContent),
    "uht": t(uhtContent),
    "spray-drying": t(sprayDryingContent),
    "fermentation": t(fermentationContent),
    "churning": t(churningContent),
    "boiler": t(boilerContent),
  }), [t]);

  const topics = Object.keys(topicMap).map(key => {
    const topic = topicMap[key as keyof typeof topicMap];
    let icon = Settings; // Default icon
    if (key.includes('pasteurization') || key.includes('sterilization') || key.includes('uht') || key.includes('boiler')) icon = Thermometer;
    if (key.includes('separation') || key.includes('clarification') || key.includes('churning')) icon = Droplet;
    if (key.includes('spray-drying')) icon = Wind;
    if (key.includes('refrigeration')) icon = Snowflake;

    return {
      value: key,
      title: topic.title,
      icon: icon,
    };
  });

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  const handleBack = () => {
    setActiveTopic(null);
  }

  const selectedTopic = activeTopic ? topicMap[activeTopic as keyof typeof topicMap] : null;
  
  const getDialogDescription = () => {
    if (selectedTopic) return selectedTopic.title;
    return "Explore core dairy processing techniques.";
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            Dairy Processing
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
                Back
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0">
                <TopicContent content={selectedTopic} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          <ScrollArea className="flex-1 mt-4 sm:pr-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-0">
                {topics.map(topic => (
                    <button
                    key={topic.value}
                    onClick={() => setActiveTopic(topic.value)}
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
