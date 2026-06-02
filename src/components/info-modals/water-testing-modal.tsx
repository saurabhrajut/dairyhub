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
    Magnet,
    Gem,
    Gauge,
    Filter,
    Atom,
    Factory,
    Wind,
    Flask,
    Pipette,
    FlaskRound,
    Leaf,
    Microscope,
    GlassWater,
    Sparkles,
    Layers,
    CircleDot,
    Radiation,
    TestTubeDiagonal,
    BadgeAlert,
    Chrome,
    Eye,
    Fingerprint,
    Palmtree,
    Boxes
} from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ COMPLETE ICON MAPPING FOR ALL WATER TESTS
const testsConfig: Record<string, { icon: any, color: string }> = {
    // Alkalinity Tests
    "alkalinity_p": { 
        icon: Beaker, 
        color: "from-violet-500 to-purple-600" 
    },
    "alkalinity_t": { 
        icon: FlaskConical, 
        color: "from-indigo-500 to-violet-600" 
    },
    
    // Metals
    "aluminum": { 
        icon: Chrome, 
        color: "from-slate-400 to-gray-600" 
    },
    "iron": { 
        icon: Magnet, 
        color: "from-red-600 to-orange-700" 
    },
    "calcium": { 
        icon: Boxes, 
        color: "from-sky-400 to-cyan-500" 
    },
    "magnesium": { 
        icon: Sparkles, 
        color: "from-emerald-400 to-green-500" 
    },
    "manganese": { 
        icon: Radiation, 
        color: "from-pink-500 to-rose-600" 
    },
    "potassium": { 
        icon: Palmtree, 
        color: "from-lime-500 to-green-600" 
    },
    "sodium": { 
        icon: CircleDot, 
        color: "from-yellow-400 to-amber-500" 
    },
    
    // Oxygen Demand Tests
    "bod": { 
        icon: Activity, 
        color: "from-green-500 to-emerald-600" 
    },
    "cod": { 
        icon: Factory, 
        color: "from-orange-500 to-red-600" 
    },
    "do": { 
        icon: Wind, 
        color: "from-cyan-400 to-blue-500" 
    },
    
    // Minerals & Compounds
    "boron": { 
        icon: Leaf, 
        color: "from-teal-500 to-cyan-600" 
    },
    "chloride": { 
        icon: TestTubeDiagonal, 
        color: "from-teal-400 to-emerald-600" 
    },
    "fluoride": { 
        icon: Fingerprint, 
        color: "from-blue-400 to-indigo-500" 
    },
    "hardness": { 
        icon: Gem, 
        color: "from-slate-500 to-zinc-600" 
    },
    "silicate": { 
        icon: Layers, 
        color: "from-amber-400 to-orange-500" 
    },
    "sulphate": { 
        icon: Atom, 
        color: "from-yellow-400 to-amber-500" 
    },
    
    // Nitrogen Compounds
    "ammonia": { 
        icon: FlaskRound, 
        color: "from-purple-400 to-pink-500" 
    },
    "nitrate": { 
        icon: Pipette, 
        color: "from-blue-500 to-indigo-600" 
    },
    "nitrite": { 
        icon: Microscope, 
        color: "from-rose-400 to-red-500" 
    },
    "organic_nitrogen": { 
        icon: Leaf, 
        color: "from-green-600 to-teal-600" 
    },
    "ton": { 
        icon: TestTube, 
        color: "from-indigo-400 to-blue-600" 
    },
    
    // Phosphorus
    "orthophosphate": { 
        icon: Waves, 
        color: "from-lime-400 to-green-500" 
    },
    "total_phosphorus": { 
        icon: GlassWater, 
        color: "from-emerald-500 to-teal-600" 
    },
    
    // Physical Parameters
    "ph": { 
        icon: Gauge, 
        color: "from-pink-500 to-rose-600" 
    },
    "temperature": { 
        icon: Thermometer, 
        color: "from-orange-500 to-red-500" 
    },
    "tds": { 
        icon: Filter, 
        color: "from-cyan-500 to-blue-600" 
    },
    "tss": { 
        icon: Scale, 
        color: "from-gray-500 to-slate-600" 
    },
    "turbidity": { 
        icon: Eye, 
        color: "from-sky-400 to-blue-500" 
    },
    "odour": { 
        icon: Wind, 
        color: "from-purple-300 to-pink-400" 
    },
    
    // Fallback
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
            {/* Introduction */}
            {test.intro && (
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base break-words" 
                         dangerouslySetInnerHTML={{ __html: test.intro }} />
                </div>
            )}
            
            {/* Apparatus */}
            {test.apparatus && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2 font-headline">
                        <TestTube className="w-5 h-5 text-blue-600" />
                        Apparatus
                    </h3>
                    <div className="bg-white p-4 rounded-xl border shadow-sm prose max-w-none text-gray-600 text-sm sm:text-base"
                         dangerouslySetInnerHTML={{ __html: test.apparatus }} />
                </div>
            )}
            
            {/* Reagents */}
            {test.reagents && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2 font-headline">
                        <Flask className="w-5 h-5 text-green-600" />
                        Reagents
                    </h3>
                    <div className="bg-white p-4 rounded-xl border shadow-sm prose max-w-none text-gray-600 text-sm sm:text-base"
                         dangerouslySetInnerHTML={{ __html: test.reagents }} />
                </div>
            )}
            
            {/* Procedure */}
            {test.procedure && test.procedure.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2 font-headline">
                        <FlaskConical className="w-5 h-5 text-purple-600" />
                        Procedure
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 mt-2 text-gray-600 text-sm sm:text-base bg-white p-4 rounded-xl border shadow-sm">
                        {test.procedure.map((step: any, i: number) => (
                            <li key={i} className="break-words pl-1 marker:font-bold marker:text-primary" 
                                dangerouslySetInnerHTML={{__html: step}}/>
                        ))}
                    </ol>
                </div>
            )}

            {/* Calculation */}
            {test.calculation && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2 font-headline">
                        <Calculator className="w-5 h-5 text-orange-500" />
                        Calculation
                    </h3>
                    <Formula>{test.calculation}</Formula>
                </div>
            )}
        </section>
    );
};


export function WaterTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(waterTestingContent);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTestId(null);
      scrollPositionRef.current = 0;
    }
    setIsOpen(open);
  };

  const handleSelectTest = (testId: string) => {
    // ✅ Save current scroll position BEFORE switching
    if (scrollAreaRef.current) {
      scrollPositionRef.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTestId(testId);
  };

  const handleBack = () => {
    setActiveTestId(null);
    // ✅ Restore scroll position after going back
    requestAnimationFrame(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = scrollPositionRef.current;
      }
    });
  };

  // ✅ Restore scroll position when returning to grid view
  useEffect(() => {
    if (!activeTestId && scrollAreaRef.current && scrollPositionRef.current > 0) {
      // Use setTimeout to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPositionRef.current;
        }
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [activeTestId]);

  if (!content || !content.tests) {
      return null;
  }

  const selectedTest = content.tests.find(t => t.id === activeTestId);
  
  // ✅ Safe Lookup with Fallback
  const activeConfig = activeTestId 
    ? (testsConfig[activeTestId] || testsConfig["default"]) 
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        
        {selectedTest && activeConfig ? (
             // === ACTIVE VIEW (Detailed Content) ===
             <div className="flex-1 flex flex-col min-h-0">
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0 bg-transparent">
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={handleBack} 
                        className="shrink-0 hover:bg-white/80 rounded-full shadow-sm"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-3">
                        {/* ✅ Colorful Header Icon */}
                        <div className={cn("p-3 rounded-xl bg-gradient-to-br text-white shadow-lg", activeConfig.color)}>
                            <activeConfig.icon className="h-6 w-6" />
                        </div>
                        <div>
                             <DialogTitle className="text-xl sm:text-2xl font-bold font-headline text-left bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                {selectedTest.title}
                            </DialogTitle>
                        </div>
                    </div>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:mt-6 sm:pr-4 w-full">
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
                        <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                            <Droplet className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 font-headline">
                        {content.title}
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm sm:text-base text-gray-600 mt-2 max-w-3xl mx-auto">
                        {content.description}
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-6 sm:pr-4" viewportRef={scrollAreaRef}>
                    {/* Important Note Section */}
                    {content.important_note && (
                      <div className="p-4 sm:p-5 mx-4 mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-lg shadow-sm">
                        <div className="flex items-start gap-3">
                            <BadgeAlert className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div className="prose max-w-none text-gray-700 text-sm sm:text-base">
                                <p className="font-bold text-orange-800 mb-2">{content.important_note.title}</p>
                                <div className="text-gray-600 whitespace-pre-line">{content.important_note.text}</div>
                            </div>
                        </div>
                      </div>
                    )}

                    {/* ✅ Colorful Grid of Tests with Categories */}
                    <div className="p-4 sm:p-0 space-y-8">
                        {/* Group tests by category for better organization */}
                        {[
                            {
                                name: "Basic Parameters",
                                tests: content.tests.filter(t => 
                                    ['ph', 'temperature', 'tds', 'tss', 'turbidity', 'odour', 'do'].includes(t.id)
                                )
                            },
                            {
                                name: "Alkalinity & Hardness",
                                tests: content.tests.filter(t => 
                                    ['alkalinity_p', 'alkalinity_t', 'hardness'].includes(t.id)
                                )
                            },
                            {
                                name: "Metals",
                                tests: content.tests.filter(t => 
                                    ['iron', 'aluminum', 'calcium', 'magnesium', 'manganese', 'potassium', 'sodium'].includes(t.id)
                                )
                            },
                            {
                                name: "Nitrogen Compounds",
                                tests: content.tests.filter(t => 
                                    ['ammonia', 'nitrate', 'nitrite', 'organic_nitrogen', 'ton'].includes(t.id)
                                )
                            },
                            {
                                name: "Phosphorus & Other Compounds",
                                tests: content.tests.filter(t => 
                                    ['orthophosphate', 'total_phosphorus', 'boron', 'chloride', 'fluoride', 'silicate', 'sulphate'].includes(t.id)
                                )
                            },
                            {
                                name: "Oxygen Demand",
                                tests: content.tests.filter(t => 
                                    ['bod', 'cod'].includes(t.id)
                                )
                            }
                        ].filter(category => category.tests.length > 0).map((category, idx) => (
                            <div key={idx}>
                                <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                                    <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
                                    {category.name}
                                    <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
                                </h3>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                                    {category.tests.map(test => {
                                        const config = testsConfig[test.id] || testsConfig["default"];
                                        
                                        return (
                                            <button
                                                key={test.id}
                                                onClick={() => handleSelectTest(test.id)}
                                                className="group relative flex flex-col items-center justify-center p-5 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:shadow-2xl rounded-2xl border-2 border-gray-100 hover:border-blue-200 text-center aspect-square transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                                            >
                                                {/* ✅ Gradient Circle Icon */}
                                                <div className={cn(
                                                    "p-4 rounded-2xl bg-gradient-to-br text-white mb-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl",
                                                    config.color
                                                )}>
                                                    <config.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                                </div>

                                                <span className="font-bold text-xs sm:text-sm font-headline text-slate-700 group-hover:text-blue-700 transition-colors break-words line-clamp-3 px-2">
                                                    {test.title}
                                                </span>

                                                {/* Sparkle effect on hover */}
                                                <Sparkles className="absolute top-2 right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                
                                                {/* Subtle gradient overlay on hover */}
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/5 group-hover:to-cyan-400/5 transition-all duration-300"></div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        
                        {/* Fallback: Show all uncategorized tests */}
                        {content.tests.filter(t => 
                            ![
                                'ph', 'temperature', 'tds', 'tss', 'turbidity', 'odour', 'do',
                                'alkalinity_p', 'alkalinity_t', 'hardness',
                                'iron', 'aluminum', 'calcium', 'magnesium', 'manganese', 'potassium', 'sodium',
                                'ammonia', 'nitrate', 'nitrite', 'organic_nitrogen', 'ton',
                                'orthophosphate', 'total_phosphorus', 'boron', 'chloride', 'fluoride', 'silicate', 'sulphate',
                                'bod', 'cod'
                            ].includes(t.id)
                        ).length > 0 && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                                    <div className="h-1 w-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded"></div>
                                    Other Tests
                                    <div className="h-1 flex-1 bg-gradient-to-r from-gray-500 to-transparent rounded"></div>
                                </h3>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                                    {content.tests.filter(t => 
                                        ![
                                            'ph', 'temperature', 'tds', 'tss', 'turbidity', 'odour', 'do',
                                            'alkalinity_p', 'alkalinity_t', 'hardness',
                                            'iron', 'aluminum', 'calcium', 'magnesium', 'manganese', 'potassium', 'sodium',
                                            'ammonia', 'nitrate', 'nitrite', 'organic_nitrogen', 'ton',
                                            'orthophosphate', 'total_phosphorus', 'boron', 'chloride', 'fluoride', 'silicate', 'sulphate',
                                            'bod', 'cod'
                                        ].includes(t.id)
                                    ).map(test => {
                                        const config = testsConfig[test.id] || testsConfig["default"];
                                        
                                        return (
                                            <button
                                                key={test.id}
                                                onClick={() => handleSelectTest(test.id)}
                                                className="group relative flex flex-col items-center justify-center p-5 bg-white hover:shadow-2xl rounded-2xl border-2 border-gray-100 hover:border-blue-200 text-center aspect-square transition-all duration-300 transform hover:scale-105"
                                            >
                                                <div className={cn(
                                                    "p-4 rounded-2xl bg-gradient-to-br text-white mb-3 shadow-lg transition-transform group-hover:scale-110",
                                                    config.color
                                                )}>
                                                    <config.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                                </div>

                                                <span className="font-bold text-xs sm:text-sm font-headline text-slate-700 group-hover:text-blue-700 transition-colors break-words line-clamp-3 px-2">
                                                    {test.title}
                                                </span>

                                                <Sparkles className="absolute top-2 right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </>
        )}

      </DialogContent>
    </Dialog>
  );
}
