"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { FlaskConical, Microscope, Shield, ArrowLeft, Search, Zap } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { adulterationContent } from "@/lib/content/adulteration-content";
import { cn } from "@/lib/utils";

type AdulterationCategory = 'platform-tests' | 'preservatives' | 'adulterants';

export function AdulterationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<AdulterationCategory | null>(null);
  const { t } = useLanguage();
  const content = t(adulterationContent);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const categories = [
    {
      id: 'platform-tests',
      title: content.tabs.platform,
      description: content.tabs.platform_desc,
      data: content.platformTests,
      icon: Microscope,
      intro: content.intros.platform,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'preservatives',
      title: content.tabs.preservatives,
      description: content.tabs.preservatives_desc,
      data: content.preservatives,
      icon: Shield,
      intro: content.intros.preservatives,
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 'adulterants',
      title: content.tabs.adulterants,
      description: content.tabs.adulterants_desc,
      data: content.adulterants,
      icon: FlaskConical,
      intro: content.intros.adulterants,
      color: "from-red-500 to-rose-600"
    },
  ];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveCategory(null);
    }
    setIsOpen(open);
  };

  const handleSelectCategory = (category: AdulterationCategory) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveCategory(category);
  };

  const handleBack = () => {
    setActiveCategory(null);
  };

  useEffect(() => {
    if (!activeCategory && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPosition.current;
        }
      }, 0);
    }
  }, [activeCategory]);

  const selectedCategory = categories.find(c => c.id === activeCategory);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          // Full screen on mobile, constrained on desktop
          "w-screen h-[100dvh] max-w-full",
          "sm:w-[95vw] sm:h-[95vh] sm:max-w-4xl lg:max-w-6xl sm:rounded-2xl",
          // Remove default dialog padding — we handle it ourselves
          "flex flex-col p-0 gap-0",
          "bg-gradient-to-br from-slate-50 to-slate-100",
          // Prevent outer overflow
          "overflow-hidden"
        )}
      >
        {selectedCategory ? (
          // === ACTIVE CATEGORY VIEW ===
          <div className="flex flex-col h-full min-h-0 overflow-hidden">
            {/* Header — fixed height, no shrink */}
            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="shrink-0 hover:bg-slate-100 rounded-xl h-9 w-9"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>

              <div className={cn(
                "p-2 rounded-xl bg-gradient-to-br text-white shadow-md shrink-0",
                selectedCategory.color
              )}>
                <selectedCategory.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <div className="min-w-0">
                <DialogTitle className="text-base sm:text-xl font-bold font-headline text-left leading-tight truncate">
                  {selectedCategory.title}
                </DialogTitle>
                <DialogDescription className="text-left text-xs sm:text-sm hidden sm:block">
                  Detection &amp; Analysis
                </DialogDescription>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
              <div className="p-4 sm:p-6">
                {/* Intro box */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-5">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {selectedCategory.intro}
                  </p>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {selectedCategory.data.map((item: any) => (
                    <AccordionItem
                      key={item.title}
                      value={item.title.replace(/\s/g, '-')}
                      className="bg-white border rounded-xl px-4 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-primary/20"
                    >
                      <AccordionTrigger className="font-semibold text-left py-4 hover:no-underline text-sm sm:text-base">
                        <span className="flex items-center gap-3 pr-2">
                          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                          <span className="leading-snug">{item.title}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                        {/* Key fix: overflow-x-auto + max-w-full keeps tables from blowing out */}
                        <div
                          className={cn(
                            "prose prose-sm max-w-none",
                            // Tables: scroll horizontally instead of overflow
                            "[&_table]:w-full [&_table]:text-xs [&_table]:sm:text-sm",
                            "[&_.overflow-x-auto]:overflow-x-auto [&_.overflow-x-auto]:-mx-1 [&_.overflow-x-auto]:px-1",
                            // Preformatted text: scroll instead of overflow
                            "[&_pre]:overflow-x-auto [&_pre]:max-w-full [&_pre]:text-xs",
                            "[&_code]:break-words [&_code]:whitespace-pre-wrap",
                            // General word break
                            "break-words"
                          )}
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

        ) : (
          // === DASHBOARD GRID VIEW ===
          <div className="flex flex-col h-full min-h-0 overflow-hidden">
            {/* Header */}
            <div className="px-4 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-6 shrink-0 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white rounded-xl shadow-md">
                  <Search className="h-7 w-7 sm:h-8 sm:w-8 text-indigo-600" />
                </div>
              </div>
              <DialogTitle className="text-xl sm:text-3xl font-bold font-headline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                {content.main_title}
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base max-w-2xl mx-auto mt-2 text-slate-500 px-2">
                {content.main_description}
              </DialogDescription>
            </div>

            {/* Scrollable grid */}
            <div
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
              ref={scrollAreaRef}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-6 pb-8">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleSelectCategory(category.id as AdulterationCategory)}
                    className="group relative flex flex-col items-center justify-center p-6 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className={cn(
                      "p-4 sm:p-5 rounded-full bg-gradient-to-br text-white mb-4 shadow-lg transition-transform group-hover:scale-110",
                      category.color
                    )}>
                      <category.icon className="w-7 h-7 sm:w-10 sm:h-10" />
                    </div>

                    <h3 className="font-bold text-base sm:text-lg font-headline text-slate-800 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2">
                      {category.description}
                    </p>

                    <Zap className="absolute top-3 right-3 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
