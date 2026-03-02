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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { 
    ArrowLeft, 
    Thermometer, 
    Settings, 
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

const processingConfig: Record<string, { icon: any, color: string }> = {
    "pasteurization": { icon: Thermometer, color: "from-orange-500 to-red-500" },
    "standardization": { icon: Settings, color: "from-blue-500 to-indigo-600" },
    "separation": { icon: Layers, color: "from-cyan-400 to-blue-500" },
    "clarification": { icon: Filter, color: "from-teal-400 to-emerald-500" },
    "homogenization": { icon: Combine, color: "from-violet-500 to-purple-600" },
    "refrigeration": { icon: Snowflake, color: "from-sky-400 to-blue-600" },
    "sterilization": { icon: Flame, color: "from-red-500 to-rose-600" },
    "evaporation": { icon: CloudFog, color: "from-gray-400 to-slate-500" },
    "uht": { icon: Zap, color: "from-orange-400 to-amber-500" },
    "spray-drying": { icon: Wind, color: "from-yellow-400 to-orange-400" },
    "fermentation": { icon: FlaskConical, color: "from-green-500 to-emerald-700" },
    "churning": { icon: RotateCw, color: "from-yellow-300 to-amber-400" },
    "boiler": { icon: Factory, color: "from-slate-500 to-gray-700" },
};

// ─── Injected once, applies to all dangerouslySetInnerHTML content ──────────
const CONTENT_STYLES = `
  .dairy-content { word-break: break-word; overflow-wrap: break-word; }

  /* Tables: always scrollable on small screens */
  .dairy-content table {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-collapse: collapse;
    font-size: 0.8rem;
  }
  @media (min-width: 640px) {
    .dairy-content table { font-size: 0.875rem; }
  }
  .dairy-content th,
  .dairy-content td {
    padding: 6px 10px;
    border: 1px solid #d1d5db;
    vertical-align: top;
    min-width: 80px;      /* prevents columns from collapsing to 0 */
    word-break: break-word;
  }
  .dairy-content thead tr { background: #f3f4f6; }

  /* Code / pre blocks: scroll instead of overflow */
  .dairy-content pre,
  .dairy-content code {
    display: block;
    overflow-x: auto;
    white-space: pre-wrap;    /* wrap long lines */
    word-break: break-all;
    font-size: 0.75rem;
    max-width: 100%;
  }

  /* Math-like inline content (long formulas in <p>) */
  .dairy-content p {
    overflow-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    max-width: 100%;
  }

  /* List items */
  .dairy-content li {
    overflow-wrap: break-word;
    word-break: break-word;
  }

  /* Images */
  .dairy-content img {
    max-width: 100%;
    height: auto;
  }

  /* Links */
  .dairy-content a {
    word-break: break-all;
  }

  /* Headings */
  .dairy-content h3,
  .dairy-content h4 {
    overflow-wrap: break-word;
  }
`;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4 text-gray-700 leading-relaxed mt-6">
    {/* Inject styles once */}
    <style dangerouslySetInnerHTML={{ __html: CONTENT_STYLES }} />

    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline break-words">
      {title}
    </h2>

    {/* 
      .dairy-content applies overflow rules to ALL injected HTML children.
      min-w-0 is critical so the flex child doesn't push beyond its container.
    */}
    <div className="dairy-content min-w-0 w-full prose prose-sm sm:prose-base max-w-none">
      {children}
    </div>
  </div>
);

const TopicContent = ({ content }: { content: any }) => {
  const [activeTab, setActiveTab] = useState("info");

  if (!content) return <p>Content will be available soon.</p>;

  if (content.simulation) {
    return (
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full min-w-0">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="simulation">3D Simulation</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="mt-0 min-w-0">
          <Section title={content.title}>
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
          </Section>
        </TabsContent>
        <TabsContent
          value="simulation"
          className="h-[60vh] sm:h-[70vh] border rounded-xl overflow-hidden shadow-sm mt-0"
        >
          <iframe
            srcDoc={content.simulation}
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Processing Simulation"
          />
        </TabsContent>
      </Tabs>
    );
  }

  return (
    <Section title={content.title}>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </Section>
  );
};

export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const topicMap = useMemo(
    () => ({
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
    }),
    [t]
  );

  const topics = Object.keys(topicMap).map((key) => {
    const topic = topicMap[key as keyof typeof topicMap];
    const config = processingConfig[key] || { icon: Cog, color: "from-gray-400 to-gray-600" };
    return { value: key, title: topic.title, icon: config.icon, color: config.color };
  });

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
    setIsOpen(open);
  };

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) scrollPosition.current = scrollAreaRef.current.scrollTop;
    setActiveTopic(topicValue);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current) scrollAreaRef.current.scrollTop = scrollPosition.current;
      }, 0);
    }
  }, [activeTopic]);

  const selectedTopic = activeTopic ? topicMap[activeTopic as keyof typeof topicMap] : null;
  const selectedConfig = activeTopic ? processingConfig[activeTopic] : null;

  const getDialogDescription = () =>
    selectedTopic ? "Detailed process explanation." : "Explore core dairy processing techniques and equipment.";

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* overflow-hidden on DialogContent so nothing escapes the modal */}
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">

        {activeTopic && selectedTopic ? (
          <div className="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
            <DialogHeader className="flex-row items-center gap-3 pr-8 shrink-0 p-4 sm:p-0 sm:pb-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="shrink-0 hover:bg-white/50"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3 min-w-0">
                <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md shrink-0", selectedConfig?.color)}>
                  {selectedConfig && <selectedConfig.icon className="h-5 w-5" />}
                </div>
                <div className="min-w-0">
                  <DialogTitle className="text-lg sm:text-xl font-bold font-headline truncate">
                    {selectedTopic.title}
                  </DialogTitle>
                  <DialogDescription className="hidden sm:block text-xs">
                    {getDialogDescription()}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {/* 
              The ScrollArea handles ALL vertical scroll.
              Inner div is constrained: px for breathing room, no horizontal overflow.
            */}
            <ScrollArea className="flex-1 mt-2 w-full min-w-0">
              <div className="px-4 pb-8 sm:px-1 sm:pr-4 min-w-0 max-w-full overflow-hidden">
                <TopicContent content={selectedTopic} />
              </div>
            </ScrollArea>
          </div>
        ) : (
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
              <DialogDescription className="text-center text-base text-gray-500">
                {getDialogDescription()}
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-4">
                {topics.map((topic) => (
                  <button
                    key={topic.value}
                    onClick={() => handleSelectTopic(topic.value)}
                    className="group relative flex flex-col items-center justify-center p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center aspect-square transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={cn(
                      "p-3 sm:p-4 rounded-full bg-gradient-to-br text-white mb-3 shadow-md transition-transform group-hover:scale-110",
                      topic.color
                    )}>
                      <topic.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm font-headline text-slate-700 group-hover:text-primary transition-colors leading-tight">
                      {topic.title}
                    </span>
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
