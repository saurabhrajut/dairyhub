"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
import { Button } from "@/components/ui/button";
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
  Search,
} from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "@/components/icons";
import { useLanguage } from "@/context/language-context";
import { compositionalAnalysisContent } from "@/lib/content/compositional-analysis-content";
import { cn } from "@/lib/utils";

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

// ✅ Custom hook to wrap tables in scrollable containers after render
function useTableWrapper(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return;

    const tables = ref.current.querySelectorAll("table");
    tables.forEach((table) => {
      // Skip if already wrapped
      if (table.parentElement?.classList.contains("table-scroll-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "table-scroll-wrapper";
      wrapper.style.overflowX = "auto";
      wrapper.style.overflowY = "hidden";
      wrapper.style.maxWidth = "100%";
      wrapper.style.WebkitOverflowScrolling = "touch";
      wrapper.style.marginBottom = "1rem";
      wrapper.style.borderRadius = "8px";
      wrapper.style.border = "1px solid #e2e8f0";

      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);

      // Force table to not collapse
      table.style.minWidth = "400px";
      table.style.width = "100%";
    });

    // Also fix any images
    const images = ref.current.querySelectorAll("img");
    images.forEach((img) => {
      img.style.maxWidth = "100%";
      img.style.height = "auto";
    });

    // Fix pre/code blocks
    const preBlocks = ref.current.querySelectorAll("pre");
    preBlocks.forEach((pre) => {
      pre.style.overflowX = "auto";
      pre.style.maxWidth = "100%";
      pre.style.whiteSpace = "pre-wrap";
      pre.style.wordBreak = "break-word";
    });
  });
}

const InfoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-card p-3 sm:p-6 rounded-xl shadow-sm border mt-4 min-w-0",
      className
    )}
  >
    {children}
  </div>
);

const SectionTitle = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <h3
    id={id}
    className="text-lg sm:text-xl font-semibold text-primary scroll-mt-24 font-headline mb-4 break-words"
  >
    {children}
  </h3>
);

// ✅ SafeHTML component — renders HTML + wraps tables after mount
const SafeHTML = ({ html }: { html: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useTableWrapper(containerRef);

  return (
    <div
      ref={containerRef}
      className="safe-html-content"
      style={{
        overflowWrap: "anywhere",
        wordBreak: "break-word",
        minWidth: 0,
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const Procedure = ({ test }: { test: TestDetail }) => (
  <AccordionItem value={test.title.replace(/\s+/g, "-").toLowerCase()}>
    <AccordionTrigger className="text-left hover:no-underline px-1">
      <div className="flex flex-col text-left pr-4 min-w-0 max-w-full">
        <span className="font-bold text-sm sm:text-lg text-slate-800 break-words">
          {test.title}
        </span>
        <span className="text-xs text-muted-foreground font-normal mt-1 leading-snug break-words">
          {test.purpose}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-0 sm:px-1 pb-4 min-w-0">
      {/* ✅ Triple-layered overflow protection */}
      <div
        className="w-full min-w-0"
        style={{ maxWidth: "100%", overflow: "hidden" }}
      >
        <div
          className="min-w-0"
          style={{
            maxWidth: "calc(100vw - 48px)",
            overflow: "hidden",
          }}
        >
          <div
            className="
              max-w-none text-slate-700 min-w-0
              [&_h4]:text-primary [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-sm sm:[&_h4]:text-base
              [&_p]:text-xs sm:[&_p]:text-sm [&_p]:mb-3 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:mb-4 [&_ul]:text-xs sm:[&_ul]:text-sm [&_li]:mb-1.5
              [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:mb-4 [&_ol]:text-xs sm:[&_ol]:text-sm [&_li]:mb-1.5
              [&_pre]:bg-slate-100/80 [&_pre]:p-2 [&_pre]:rounded-lg [&_pre]:text-[10px] sm:[&_pre]:text-sm [&_pre]:border [&_pre]:border-slate-200 [&_pre]:text-indigo-800 [&_pre]:my-3
              [&_code]:font-mono [&_code]:text-[10px] sm:[&_code]:text-sm
              [&_table]:text-[10px] sm:[&_table]:text-sm [&_table]:border-collapse
              [&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-100 [&_th]:p-1 sm:[&_th]:p-2 [&_th]:text-left [&_th]:text-[10px] sm:[&_th]:text-sm
              [&_td]:border [&_td]:border-slate-300 [&_td]:p-1 sm:[&_td]:p-2 [&_td]:text-[10px] sm:[&_td]:text-sm
              [&_strong]:text-slate-900
              [&_img]:max-w-full [&_img]:h-auto
            "
          >
            <SafeHTML html={test.procedure} />

            {test.reference && (
              <div className="mt-5 p-2 sm:p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                <p className="text-[10px] sm:text-xs text-blue-800 m-0 break-words">
                  <strong className="text-blue-900">Reference:</strong>{" "}
                  {test.reference}
                </p>
              </div>
            )}
          </div>
        </div>
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

export function CompositionalAnalysisModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(compositionalAnalysisContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      setSearchQuery("");
    }
    setIsOpen(open);
  };

  const selectedTopic = analysisTopics.find((t) => t.value === activeTopic);
  const selectedContent = selectedTopic
    ? (content.topics[
        selectedTopic.value as keyof typeof content.topics
      ] as TopicContent)
    : null;

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setSearchQuery("");
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

    const filteredTests = selectedContent.tests.filter(
      (test) =>
        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.purpose.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="w-full min-w-0">
        {/* Search Bar */}
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
          <SectionTitle id={`${activeTopic}-analysis`}>
            {selectedContent.title}
          </SectionTitle>

          {filteredTests.length > 0 ? (
            <Accordion type="single" collapsible className="w-full min-w-0">
              {filteredTests.map((test, index) => (
                <Procedure key={index} test={test} />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-10 px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <p className="text-slate-600 font-medium break-words">
                No tests found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Try searching with a different keyword
              </p>
            </div>
          )}
        </InfoCard>
      </div>
    );
  };

  return (
    <>
      {/* ✅ Global styles for HTML content overflow protection */}
      <style jsx global>{`
        .safe-html-content * {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .safe-html-content table {
          font-size: 10px !important;
          border-collapse: collapse !important;
        }
        @media (min-width: 640px) {
          .safe-html-content table {
            font-size: 14px !important;
          }
        }
        .safe-html-content td,
        .safe-html-content th {
          padding: 4px !important;
          word-break: break-word !important;
        }
        @media (min-width: 640px) {
          .safe-html-content td,
          .safe-html-content th {
            padding: 8px !important;
          }
        }
        .safe-html-content pre {
          white-space: pre-wrap !important;
          word-break: break-word !important;
          overflow-x: auto !important;
        }
        .safe-html-content img {
          max-width: 100% !important;
          height: auto !important;
        }
        .table-scroll-wrapper {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }
        .table-scroll-wrapper::-webkit-scrollbar {
          height: 6px;
        }
        .table-scroll-wrapper::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .table-scroll-wrapper::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
      `}</style>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          className={cn(
            "max-w-6xl w-[calc(100vw-16px)] sm:w-[95vw] h-full max-h-[95vh] sm:max-h-[90vh]",
            "flex flex-col p-0 bg-gradient-to-br from-slate-50 to-slate-100",
            "overflow-hidden rounded-xl sm:rounded-2xl"
          )}
        >
          {selectedTopic ? (
            // === ACTIVE TOPIC VIEW ===
            <div className="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden w-full">
              {/* ✅ Fixed header */}
              <DialogHeader className="flex-row items-center gap-2 sm:gap-4 pr-10 sm:pr-6 shrink-0 p-3 sm:p-4 sm:pb-4 border-b bg-white sm:bg-transparent z-20 min-w-0 w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleBack}
                  className="shrink-0 hover:bg-slate-200/50 h-8 w-8 sm:h-10 sm:w-10"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
                </Button>
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 overflow-hidden">
                  <div
                    className={cn(
                      "p-1.5 sm:p-2 rounded-lg bg-gradient-to-br text-white shadow-md shrink-0",
                      selectedTopic.color
                    )}
                  >
                    <selectedTopic.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <DialogTitle className="text-sm sm:text-xl font-bold font-headline text-slate-800 truncate">
                      {selectedContent?.title || selectedTopic.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              {/* ✅ Content area with strict overflow control */}
              <ScrollArea className="flex-1 w-full min-w-0">
                <div
                  className="p-3 sm:p-4 max-w-4xl mx-auto w-full pb-10 min-w-0"
                  style={{ maxWidth: "100%", overflowX: "hidden" }}
                >
                  {renderContent()}
                </div>
              </ScrollArea>
            </div>
          ) : (
            // === DASHBOARD GRID VIEW ===
            <div className="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
              <DialogHeader className="p-4 sm:p-5 sm:pt-6 shrink-0">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="p-2.5 sm:p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <FileSpreadsheet className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
                  </div>
                </div>
                <DialogTitle className="text-xl sm:text-3xl font-bold text-center font-headline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {content.main_title}
                </DialogTitle>
                <DialogDescription className="text-center text-xs sm:text-base text-slate-500 max-w-2xl mx-auto mt-1 sm:mt-2 px-2">
                  {content.main_description}
                </DialogDescription>
              </DialogHeader>

              <ScrollArea
                className="flex-1 mt-1 sm:mt-4 w-full min-w-0"
                viewportRef={scrollAreaRef}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4 p-3 sm:p-4 pb-10">
                  {analysisTopics.map((topic) => (
                    <button
                      key={topic.value}
                      onClick={() => handleSelectTopic(topic.value)}
                      className="group relative flex flex-col items-center justify-center p-3 sm:p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center transition-all duration-300 transform hover:-translate-y-1 h-[120px] sm:h-[160px]"
                    >
                      <div
                        className={cn(
                          "p-2.5 sm:p-4 rounded-full bg-gradient-to-br text-white mb-2 sm:mb-3 shadow-md transition-transform group-hover:scale-110",
                          topic.color
                        )}
                      >
                        <topic.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>

                      <span className="font-bold text-[11px] sm:text-sm font-headline text-slate-700 group-hover:text-primary transition-colors line-clamp-2 px-0.5 sm:px-1 leading-tight">
                        {content.topics[
                          topic.value as keyof typeof content.topics
                        ]?.title || topic.title}
                      </span>

                      <Zap className="absolute top-2 right-2 sm:top-3 sm:right-3 h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-sm" />
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
