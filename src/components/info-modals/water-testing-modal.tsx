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
import { waterTestingContent } from "@/lib/content/water-testing-content";
import { Button } from "../ui/button";
import { 
    ArrowLeft, 
    TestTube, 
    Droplet, 
    Waves, 
    FlaskConical, 
    Beaker, 
    Zap, 
    Scale, 
    Calculator, 
    Thermometer, 
    Activity,
    // ✅ NEW UNIQUE ICONS
    Magnet,     // Iron
    Gem,        // Hardness (Minerals)
    Gauge,      // pH (Meter)
    Filter,     // TDS (Filtration)
    Atom,       // Sulfates (Chemicals)
    Search      // Dashboard Icon
} from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ COMPLETE UNIQUE ICON MAPPING
const testsConfig: Record<string, { icon: any, color: string }> = {
    "hardness": { 
        icon: Gem, // 💎 Minerals (Calcium/Magnesium)
        color: "from-slate-500 to-zinc-600" // Stone/Mineral color
    }, 
    "ph": { 
        icon: Gauge, // ⏲️ pH Meter
        color: "from-pink-500 to-rose-600" // Litmus paper color
    }, 
    "tds": { 
        icon: Filter, // 🔽 Dissolved Solids
        color: "from-cyan-500 to-blue-600" 
    }, 
    "chlorides": { 
        icon: FlaskConical, // 🧪 Titration
        color: "from-teal-400 to-emerald-600" 
    }, 
    "alkalinity": { 
        icon: Beaker, // 🥛 Base Solution
        color: "from-violet-500 to-purple-600" 
    }, 
    "sulfates": { 
        icon: Atom, // ⚛️ Chemical Compound
        color: "from-yellow-400 to-amber-500" 
    }, 
    "iron": { 
        icon: Magnet, // 🧲 Iron Metal
        color: "from-red-600 to-orange-700" // Rust color
    }, 
    "temperature": { 
        icon: Thermometer, // 🌡️ Temp
        color: "from-orange-500 to-red-500" 
    },
    // Fallback for others
    "default": { 
        icon: TestTube, 
        color: "from-blue-400 to-indigo-500" 
    }
};

const Formula = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-muted/50 rounded-lg text-center font-mono text-sm my-4 text-primary border border-primary/10 overflow-x-auto"
     dangerouslySetInnerHTML={{ __html: children as string }} />
);

const WaterTestSection = ({ test }: { test: any }) => {
    return (
        <section className="p-1">
            <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base break-words">{test.intro}</p>
            
            <div className="mt-6">
                <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2 font-headline">
                    <FlaskConical className="w-5 h-5 text-purple-600" />
                    Prakriya (Procedure)
                </h3>
                <ol className="list-decimal list-inside space-y-3 mt-2 text-gray-600 text-sm sm:text-base bg-white p-4 rounded-xl border shadow-sm">
                    {test.procedure.map((step: any, i: number) => (
                        <li key={i} className="break-words pl-1 marker:font-bold marker:text-primary" dangerouslySetInnerHTML={{__html: step}}/>
                    ))}
                </ol>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2 font-headline">
                    <Calculator className="w-5 h-5 text-orange-500" />
                    Ganana (Calculation)
                </h3>
                <Formula>{test.calculation}</Formula>
            </div>
        </section>
    );
};


export function WaterTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(waterTestingContent);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTestId(null);
    }
    setIsOpen(open);
  };

  const handleSelectTest = (testId: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTestId(testId);
  };

  const handleBack = () => {
    setActiveTestId(null);
  };

  useEffect(() => {
    if (!activeTestId && scrollAreaRef.current) {
      setTimeout(() => {
        if(scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPosition.current;
        }
      }, 0);
    }
  }, [activeTestId]);

  if (!content || !content.tests) {
      return null;
  }

  const selectedTest = content.tests.find(t => t.id === activeTestId);
  
  // ✅ Safe Lookup with Fallback
  const activeConfig = activeTestId 
    ? (testsConfig[activeTestId] || testsConfig[activeTestId.toLowerCase()] || testsConfig["default"]) 
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        
        {selectedTest && activeConfig ? (
             // === ACTIVE VIEW (Detailed Content) ===
             <div className="flex-1 flex flex-col min-h-0">
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0 bg-transparent">
                    <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-3">
                        {/* ✅ Colorful Header Icon */}
                        <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md", activeConfig.color)}>
                            <activeConfig.icon className="h-5 w-5" />
                        </div>
                        <div>
                             <DialogTitle className="text-xl font-bold font-headline text-left">
                                {selectedTest.title}
                            </DialogTitle>
                        </div>
                    </div>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:pr-4 w-full">
                    <div className="p-4 sm:p-0 px-2">
                        <WaterTestSection test={selectedTest} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            // === DASHBOARD GRID VIEW (List of Tests) ===
            <>
                <DialogHeader className="p-4 sm:p-0 shrink-0 bg-transparent">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                            <Droplet className="h-8 w-8 text-cyan-600" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-headline">
                        {content.title}
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm sm:text-lg text-gray-500">
                        {content.description}
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
                    {/* Important Note Section */}
                    {content.important_note && (
                      <div className="p-4 pt-0 sm:p-0 prose max-w-none text-gray-600 text-sm text-center bg-blue-50 border border-blue-200 rounded-lg mx-4 mb-6 shadow-sm">
                        <p className="m-2"><strong>{content.important_note.title}</strong> {content.important_note.text}</p>
                      </div>
                    )}

                    {/* ✅ Colorful Grid of Tests */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-0">
                        {content.tests.map(test => {
                            // ✅ Fallback added here also
                            const config = testsConfig[test.id] || testsConfig[test.id.toLowerCase()] || testsConfig["default"];
                            
                            return (
                                <button
                                key={test.id}
                                onClick={() => handleSelectTest(test.id)}
                                className="group relative flex flex-col items-center justify-center p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center aspect-square transition-all duration-300 transform hover:scale-105"
                                >
                                    {/* ✅ Gradient Circle Icon */}
                                    <div className={cn(
                                        "p-4 rounded-full bg-gradient-to-br text-white mb-3 shadow-md transition-transform group-hover:scale-110",
                                        config.color
                                    )}>
                                        <config.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                    </div>

                                    <span className="font-bold text-sm sm:text-base font-headline text-slate-700 group-hover:text-primary transition-colors break-words line-clamp-2">
                                        {test.title}
                                    </span>

                                    {/* Flash Icon effect on hover */}
                                    <Zap className="absolute top-2 right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            );
                        })}
                    </div>
                </ScrollArea>
            </>
        )}

      </DialogContent>
    </Dialog>
  );
}
