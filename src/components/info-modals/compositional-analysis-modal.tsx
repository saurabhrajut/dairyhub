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
import { Button } from "@/components/ui/button"; // Adjusted path
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
  Zap,
  FileSpreadsheet,
  Search, // ✅ Added Search Icon
} from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "@/components/icons"; // Adjusted path
import { useLanguage } from "@/context/language-context";
import { compositionalAnalysisContent } from "@/lib/content/compositional-analysis-content";
import { cn } from "@/lib/utils";

// ✅ 1. Added Proper TypeScript Interfaces
interface TestDetail {
  title: string;
  purpose: string;
  reference?: string;
  procedure: string;
}

interface TopicContent {
  title: string;
  tests: TestDetail[];
}

const InfoCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-card p-4 sm:p-6 rounded-xl shadow-sm border mt-4", className)}>
    {children}
  </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <h3 id={id} className="text-xl font-semibold text-primary scroll-mt-24 font-headline mb-4">
    {children}
  </h3>
);

// ✅ 2. Improved HTML Rendering & Styling without depending purely on 'prose'
const Procedure = ({ test }: { test: TestDetail }) => (
  <AccordionItem value={test.title.replace(/\s+/g, "-").toLowerCase()}>
    <AccordionTrigger className="text-left hover:no-underline px-1">
      <div className="flex flex-col text-left pr-4">
        <span className="font-bold text-base sm:text-lg text-slate-800">{test.title}</span>
        <span className="text-xs text-muted-foreground font-normal mt-1 leading-snug">
          {test.purpose}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-1 pb-4">
      <div className="max-w-none break-words text-slate-700
        [&_h4]:text-primary [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-base
        [&_p]:text-sm [&_p]:mb-3 [&_p]:leading-relaxed
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-sm [&_li]:mb-1.5
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:text-sm [&_li]:mb-1.5
        [&_pre]:bg-slate-100/80 [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-slate-200 [&_pre]:text-indigo-800 [&_pre]:my-3
        [&_code]:font-mono [&_code]:text-sm
        [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4 [&_table]:text-sm
        [&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-100 [&_th]:p-2 [&_th]:text-left
        [&_td]:border [&_td]:border-slate-300 [&_td]:p-2
        [&_strong]:text-slate-900"
      >
        <div dangerouslySetInnerHTML={{ __html: test.procedure }} />
        {test.reference && (
          <div className="mt-5 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-800 m-0">
              <strong className="text-blue-900">Reference:</strong> {test.reference}
            </p>
          </div>
        )}
      </div>
    </AccordionContent>
  </AccordionItem>
);

const analysisTopics = [
  { value: "processed-milk", title: "Milk", icon: Droplet, color: "from-blue-500 to-cyan-500" },
  { value: "cream", title: "Cream", icon: Droplet, color: "from-yellow-400 to-amber-300" },
  { value: "cream-powder", title: "Cream Powder", icon: Wind, color: "from-orange-200 to-orange-400" },
  { value: "butter", title: "Butter", icon: Component, color: "from-yellow-500 to-orange-500" },
  { value: "ghee-butter-oil", title: "Ghee / Butter Oil", icon: FlaskConical, color: "from-amber-500 to-yellow-600" },
  { value: "cheese-paneer", title: "Paneer / Cheese", icon: PaneerIcon, color: "from-green-400 to-emerald-600" },
  { value: "dahi-yoghurt", title: "Dahi / Yoghurt", icon: Beaker, color: "from-indigo-400 to-blue-500" },
  { value: "chakka-shrikhand", title: "Chakka / Shrikhand", icon: Beaker, color: "from-yellow-500 to-orange-600" },
  { value: "khoa", title: "Khoa", icon: Component, color: "from-orange-700 to-red-700" },
  { value: "ice-cream", title: "Ice Cream", icon: IceCreamIcon, color: "from-pink-500 to-rose-500" },
  { value: "condensed-milk", title: "Condensed Milk", icon: Thermometer, color: "from-amber-200 to-amber-400" },
  { value: "milk-powder", title: "Milk Powder", icon: Wind, color: "from-slate-400 to-gray-500" },
  { value: "casein", title: "Casein", icon: FlaskConical, color: "from-violet-500 to-purple-600" },
  { value: "whey-powder", title: "Whey Powder", icon: Archive, color: "from-lime-400 to-green-500" },
  { value: "lassi", title: "Lassi", icon: Beaker, color: "from-cyan-400 to-blue-400" },
  { value: "chhena-rasogolla", title: "Chhena / Rasogolla", icon: Component, color: "from-rose-400 to-red-500" },
  { value: "rabri", title: "Rabri", icon: Beaker, color: "from-amber-400 to-orange-400" },
  { value: "flavoured-milk", title: "Flavoured Milk", icon: Droplet, color: "from-pink-400 to-purple-400" },
  { value: "buttermilk-chaas", title: "Buttermilk / Chaas", icon: Droplet, color: "from-emerald-300 to-teal-400" },
  { value: "dairy-whitener", title: "Dairy Whitener", icon: Wind, color: "from-slate-200 to-slate-400" },
  { value: "uht-milk", title: "UHT Milk", icon: ShieldCheck, color: "from-blue-600 to-indigo-700" },
  { value: "traditional-sweets", title: "Traditional Sweets", icon: Component, color: "from-orange-500 to-red-600" },
  { value: "infant-formula", title: "Infant Formula", icon: ShieldCheck, color: "from-teal-400 to-cyan-500" },
];

export function CompositionalAnalysisModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(compositionalAnalysisContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  
  // ✅ 3. Added Search State
  const [searchQuery, setSearchQuery] = useState("");
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      setSearchQuery(""); // Reset search on close
    }
    setIsOpen(open);
  };

  const selectedTopic = analysisTopics.find((t) => t.value === activeTopic);
  const selectedContent = selectedTopic
    ? (content.topics[selectedTopic.value as keyof typeof content.topics] as TopicContent)
    : null;

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setSearchQuery(""); // Reset search when switching topics
    setActiveTopic(topicValue);
  };

  const handleBack = () => {
    setActiveTopic(null);
    setSearchQuery("");
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

  const renderContent = () => {
    if (!selectedContent) return null;

    // ✅ 4. Filter logic based on search
    const filteredTests = selectedContent.tests.filter(
      (test) =>
        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.purpose.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="w-full">
        {/* Search Bar UI */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-slate-50 to-slate-100 pb-2 pt-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search in ${selectedContent.title}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm transition-all"
            />
          </div>
        </div>

        <InfoCard>
          <SectionTitle id={`${activeTopic}-analysis`}>{selectedContent.title}</SectionTitle>
          
          {filteredTests.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredTests.map((test, index) => (
                <Procedure key={index} test={test} />
              ))}
            </Accordion>
          ) : (
             // ✅ 5. Empty state if search fails
            <div className="text-center py-10 px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <p className="text-slate-600 font-medium">No tests found for "{searchQuery}"</p>
              <p className="text-sm text-slate-400 mt-1">Try searching with a different keyword</p>
            </div>
          )}
        </InfoCard>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden rounded-xl sm:rounded-2xl">
        {selectedTopic ? (
          // === ACTIVE TOPIC VIEW ===
          <div className="flex-1 flex flex-col min-h-0">
            <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0 sm:pb-4 border-b sm:border-none bg-white sm:bg-transparent z-20">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="shrink-0 hover:bg-slate-200/50"
              >
                <ArrowLeft className="h-5 w-5 text-slate-700" />
              </Button>
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-2 rounded-lg bg-gradient-to-br text-white shadow-md",
                    selectedTopic.color
                  )}
                >
                  <selectedTopic.icon className="h-5 w-5" />
                </div>
                <div>
                  <DialogTitle className="text-lg sm:text-xl font-bold font-headline text-slate-800">
                    {selectedContent?.title || selectedTopic.title}
                  </DialogTitle>
                </div>
              </div>
            </DialogHeader>

            <ScrollArea className="flex-1 w-full relative">
              <div className="p-4 sm:p-0 px-2 sm:px-1 max-w-4xl mx-auto w-full pb-10">
                {renderContent()}
              </div>
            </ScrollArea>
          </div>
        ) : (
          // === DASHBOARD GRID VIEW ===
          <div className="flex-1 flex flex-col min-h-0">
            <DialogHeader className="p-5 sm:p-0 sm:pt-4 shrink-0">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <FileSpreadsheet className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-center font-headline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {content.main_title}
              </DialogTitle>
              <DialogDescription className="text-center text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mt-2">
                {content.main_description}
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="flex-1 mt-2 sm:mt-6 w-full" viewportRef={scrollAreaRef}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-1 pb-10">
                {analysisTopics.map((topic) => (
                  <button
                    key={topic.value}
                    onClick={() => handleSelectTopic(topic.value)}
                    className="group relative flex flex-col items-center justify-center p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center transition-all duration-300 transform hover:-translate-y-1 h-[140px] sm:h-[160px]"
                  >
                    <div
                      className={cn(
                        "p-3.5 sm:p-4 rounded-full bg-gradient-to-br text-white mb-3 shadow-md transition-transform group-hover:scale-110",
                        topic.color
                      )}
                    >
                      <topic.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <span className="font-bold text-xs sm:text-sm font-headline text-slate-700 group-hover:text-primary transition-colors line-clamp-2 px-1">
                      {content.topics[topic.value as keyof typeof content.topics]?.title || topic.title}
                    </span>

                    <Zap className="absolute top-3 right-3 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-sm" />
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
