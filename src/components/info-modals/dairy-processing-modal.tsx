"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { 
    ArrowLeft, 
    Thermometer, 
    Settings, 
    Droplet, 
    Factory, 
    Wind, 
    Snowflake, 
    Flame, 
    Combine, 
    Layers, 
    Zap, 
    RotateCw, 
    FlaskConical, 
    Filter, 
    CloudFog,
    Cog
} from "lucide-react";
import { cn } from "@/lib/utils";
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

// ✅ Configuration for Icons and Colors
const processingConfig: Record<string, { icon: any, color: string }> = {
    "pasteurization": { icon: Thermometer, color: "from-orange-500 to-red-500" }, // Heat
    "standardization": { icon: Settings, color: "from-blue-500 to-indigo-600" }, // Adjustment
    "separation": { icon: Layers, color: "from-cyan-400 to-blue-500" }, // Layers
    "clarification": { icon: Filter, color: "from-teal-400 to-emerald-500" }, // Cleaning
    "homogenization": { icon: Combine, color: "from-violet-500 to-purple-600" }, // Mixing
    "refrigeration": { icon: Snowflake, color: "from-sky-400 to-blue-600" }, // Cold
    "sterilization": { icon: Flame, color: "from-red-500 to-rose-600" }, // High Heat
    "evaporation": { icon: CloudFog, color: "from-gray-400 to-slate-500" }, // Steam/Vapor
    "uht": { icon: Zap, color: "from-orange-400 to-amber-500" }, // Rapid/Intense
    "spray-drying": { icon: Wind, color: "from-yellow-400 to-orange-400" }, // Air/Drying
    "fermentation": { icon: FlaskConical, color: "from-green-500 to-emerald-700" }, // Biology
    "churning": { icon: RotateCw, color: "from-yellow-300 to-amber-400" }, // Rotation
    "boiler": { icon: Factory, color: "from-slate-500 to-gray-700" }, // Industry
};

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
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

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
    // ✅ Get config or default
    const config = processingConfig[key] || { icon: Cog, color: "from-gray-400 to-gray-600" };

    return {
      value: key,
      title: topic.title,
      icon: config.icon,
      color: config.color
    };
  });

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
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPosition.current;
        }
      }, 0);
    }
  }, [activeTopic]);


  const selectedTopic = activeTopic ? topicMap[activeTopic as keyof typeof topicMap] : null;
  const selectedConfig = activeTopic ? processingConfig[activeTopic] : null;

  const getDialogDescription = () => {
    if (selectedTopic) return "Detailed process explanation.";
    return "Explore core dairy processing techniques and equipment.";
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* ✅ Mobile Width Fix */}
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        
        {activeTopic && selectedTopic ? (
             // === ACTIVE VIEW ===
            <div className="flex-1 flex flex-col min-h-0">
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
                    <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-3">
                         {/* ✅ Colorful Header Icon */}
                        <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md", selectedConfig?.color)}>
                             {selectedConfig && <selectedConfig.icon className="h-5 w-5" />}
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold font-headline">
                                {selectedTopic.title}
                            </DialogTitle>
                             <DialogDescription className="hidden sm:block text-xs">
                                {getDialogDescription()}
                             </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:pr-4 w-full">
                    <div className="p-4 pt-0 sm:p-0 px-2">
                        <TopicContent content={selectedTopic} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
             // === DASHBOARD GRID VIEW ===
             <>
                <DialogHeader className="p-4 sm:p-0 shrink-0">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                            <Factory className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-headline">
                        Dairy Processing
                    </DialogTitle>
                    <DialogDescription className="text-center text-lg text-gray-500">
                        {getDialogDescription()}
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
                    {/* ✅ Colorful Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-4">
                        {topics.map(topic => (
                            <button
                                key={topic.value}
                                onClick={() => handleSelectTopic(topic.value)}
                                className="group relative flex flex-col items-center justify-center p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center aspect-square transition-all duration-300 transform hover:scale-105"
                            >
                                {/* ✅ Gradient Circle */}
                                <div className={cn(
                                    "p-4 rounded-full bg-gradient-to-br text-white mb-3 shadow-md transition-transform group-hover:scale-110",
                                    topic.color
                                )}>
                                    <topic.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                </div>

                                <span className="font-bold text-sm sm:text-base font-headline text-slate-700 group-hover:text-primary transition-colors">
                                    {topic.title}
                                </span>

                                {/* Flash Icon */}
                                <Zap className="absolute top-2 right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>
                </ScrollArea>
             </>
        )}
      </DialogContent>
    </Dialog>
  );
}
