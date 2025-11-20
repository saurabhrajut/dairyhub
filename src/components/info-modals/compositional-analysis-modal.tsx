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
import { 
    ArrowLeft, 
    Beaker, 
    Droplet, 
    Wind, 
    ShieldCheck, 
    Component, 
    FlaskConical, 
    Snowflake, 
    Thermometer, 
    Archive,
    Zap, // ✅ Added for hover effect
    FileSpreadsheet // ✅ Generic icon for header
} from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";
import { useLanguage } from "@/context/language-context";
import { compositionalAnalysisContent } from "@/lib/content/compositional-analysis-content";
import { cn } from "@/lib/utils"; // ✅ Ensure cn is imported

const InfoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-card p-4 sm:p-6 rounded-xl shadow-sm border mt-6 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-semibold text-primary scroll-mt-24 font-headline">
        {children}
    </h3>
);

const Procedure = ({ test }: { test: any }) => (
    <AccordionItem value={test.title.replace(/\s+/g, '-').toLowerCase()}>
        <AccordionTrigger className="text-left hover:no-underline">
            <div className="flex flex-col text-left">
                <span className="font-bold text-base sm:text-lg">{test.title}</span>
                <span className="text-xs text-muted-foreground font-normal">{test.purpose}</span>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none break-words">
                {test.procedure && <div dangerouslySetInnerHTML={{ __html: test.procedure }} />}
                {test.reference && <p className="text-xs text-muted-foreground mt-4"><strong>Ref:</strong> {test.reference}</p>}
            </div>
        </AccordionContent>
    </AccordionItem>
);

// ✅ Updated Data with Colors
const analysisTopics = [
    { 
        value: "processed-milk", 
        title: "Milk", 
        icon: Droplet, 
        color: "from-blue-500 to-cyan-500" // 🥛 Blue
    },
    { 
        value: "cream", 
        title: "Cream", 
        icon: Droplet, 
        color: "from-yellow-400 to-amber-300" // 🧈 Creamy Yellow
    },
    { 
        value: "cream-powder", 
        title: "Cream Powder", 
        icon: Wind, 
        color: "from-orange-200 to-orange-400" // 🌬️ Powder/Orange
    },
    { 
        value: "butter", 
        title: "Butter", 
        icon: Component, 
        color: "from-yellow-500 to-orange-500" // 🧈 Deep Yellow
    },
    { 
        value: "ghee-butter-oil", 
        title: "Ghee / Butter Oil", 
        icon: FlaskConical, 
        color: "from-amber-500 to-yellow-600" // 🔥 Golden
    },
    { 
        value: "cheese-paneer", 
        title: "Paneer / Cheese", 
        icon: PaneerIcon, 
        color: "from-green-400 to-emerald-600" // 🧀 Green/Fresh
    },
    { 
        value: "dahi-yoghurt", 
        title: "Dahi / Yoghurt", 
        icon: Beaker, 
        color: "from-indigo-400 to-blue-500" // 🥣 Indigo/Cool
    },
    { 
        value: "chakka-shrikhand", 
        title: "Chakka / Shrikhand", 
        icon: Beaker, 
        color: "from-yellow-500 to-orange-600" // 🥭 Saffron
    },
    { 
        value: "khoa", 
        title: "Khoa", 
        icon: Component, 
        color: "from-orange-700 to-red-700" // 🧱 Brownish
    },
    { 
        value: "ice-cream", 
        title: "Ice Cream", 
        icon: IceCreamIcon, 
        color: "from-pink-500 to-rose-500" // 🍦 Pink
    },
    { 
        value: "condensed-milk", 
        title: "Condensed Milk", 
        icon: Thermometer, 
        color: "from-amber-200 to-amber-400" // 🍯 Sweet
    },
    { 
        value: "milk-powder", 
        title: "Milk Powder", 
        icon: Wind, 
        color: "from-slate-400 to-gray-500" // 🌫️ Grey
    },
    { 
        value: "casein", 
        title: "Casein", 
        icon: FlaskConical, 
        color: "from-violet-500 to-purple-600" // 🧬 Protein/Violet
    },
    { 
        value: "whey-powder", 
        title: "Whey Powder", 
        icon: Archive, 
        color: "from-lime-400 to-green-500" // 🍏 Whey/Green
    },
];


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
          <InfoCard>
              <SectionTitle id={`${activeTopic}-analysis`}>{selectedContent.title}</SectionTitle>
              <Accordion type="single" collapsible className="w-full">
                  {selectedContent.tests.map((test, index) => (
                      <Procedure key={index} test={test} />
                  ))}
              </Accordion>
          </InfoCard>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* ✅ Mobile Width Fix */}
      <DialogContent className="max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        
        {selectedTopic ? (
             // === ACTIVE VIEW ===
             <div className="flex-1 flex flex-col min-h-0">
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
                    <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-3">
                        {/* ✅ Colorful Icon in Header */}
                        <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md", selectedTopic.color)}>
                            <selectedTopic.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold font-headline">
                                {content.topics[selectedTopic.value as keyof typeof content.topics].title}
                            </DialogTitle>
                        </div>
                    </div>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-2 sm:mt-4 w-full">
                    <div className="p-4 sm:p-0 px-1">
                       {renderContent()}
                    </div>
                </ScrollArea>
            </div>
        ) : (
            // === DASHBOARD GRID VIEW ===
            <>
                <DialogHeader className="p-4 sm:p-0 shrink-0">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                            <FileSpreadsheet className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-center font-headline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {content.main_title}
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm sm:text-lg text-gray-500">
                        {content.main_description}
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 pr-2" viewportRef={scrollAreaRef}>
                    {/* ✅ Colorful Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-4">
                        {analysisTopics.map(topic => (
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
                                    {content.topics[topic.value as keyof typeof content.topics].title}
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
