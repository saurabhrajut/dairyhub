"use client"

import { useState, useRef, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "../ui/button"
import { FlaskConical, Microscope, Shield, ArrowLeft, Search, Zap } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { adulterationContent } from "@/lib/content/adulteration-content"
import { cn } from "@/lib/utils" // ✅ Ensure cn is imported

type AdulterationCategory = 'platform-tests' | 'preservatives' | 'adulterants';

export function AdulterationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [activeCategory, setActiveCategory] = useState<AdulterationCategory | null>(null);
  const { t } = useLanguage();
  const content = t(adulterationContent);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  // ✅ Define Categories with Gradient Colors
  const categories = [
    { 
        id: 'platform-tests', 
        title: content.tabs.platform, 
        description: content.tabs.platform_desc, 
        data: content.platformTests, 
        icon: Microscope, 
        intro: content.intros.platform,
        color: "from-blue-500 to-cyan-500" // 🔵 Scientific Blue
    },
    { 
        id: 'preservatives', 
        title: content.tabs.preservatives, 
        description: content.tabs.preservatives_desc, 
        data: content.preservatives, 
        icon: Shield, 
        intro: content.intros.preservatives,
        color: "from-emerald-500 to-green-600" // 🛡️ Safety Green
    },
    { 
        id: 'adulterants', 
        title: content.tabs.adulterants, 
        description: content.tabs.adulterants_desc, 
        data: content.adulterants, 
        icon: FlaskConical, 
        intro: content.intros.adulterants,
        color: "from-red-500 to-rose-600" // 🧪 Danger Red
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
      {/* ✅ Mobile Friendly Width & Padding */}
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-[95vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        
        {selectedCategory ? (
            // === ACTIVE CATEGORY VIEW ===
            <>
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
                    <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-3">
                         {/* ✅ Gradient Icon in Header */}
                        <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md", selectedCategory.color)}>
                             <selectedCategory.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold font-headline text-left">
                                {selectedCategory.title}
                            </DialogTitle>
                            <DialogDescription className="text-left hidden sm:block">
                                Detection & Analysis
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-2 sm:mt-4 w-full">
                    <div className="p-4 sm:p-0 px-1">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                {selectedCategory.intro}
                            </p>
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {selectedCategory.data.map((item) => (
                                <AccordionItem 
                                    key={item.title} 
                                    value={item.title.replace(/\s/g, '-')}
                                    className="bg-white border rounded-lg px-4 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-primary/20"
                                >
                                    <AccordionTrigger className="font-semibold text-left py-4 hover:no-underline">
                                        <span className="flex items-center gap-3">
                                            <Search className="w-4 h-4 text-muted-foreground" />
                                            {item.title}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                                        <div className="prose prose-sm max-w-none break-words" dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </ScrollArea>
            </>
        ) : (
             // === DASHBOARD GRID VIEW ===
             <>
                <DialogHeader className="p-4 sm:p-0">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                            <Search className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-center font-headline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {content.main_title}
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm sm:text-lg max-w-2xl mx-auto mt-2">
                        {content.main_description}
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 pr-2" viewportRef={scrollAreaRef}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6">
                        {categories.map(category => (
                            <button
                            key={category.id}
                            onClick={() => handleSelectCategory(category.id as AdulterationCategory)}
                            className="group relative flex flex-col items-center justify-center p-6 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center transition-all duration-300 transform hover:scale-105"
                            >
                                {/* ✅ Gradient Circle */}
                                <div className={cn(
                                    "p-5 rounded-full bg-gradient-to-br text-white mb-4 shadow-lg transition-transform group-hover:scale-110",
                                    category.color
                                )}>
                                    <category.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                                </div>
                                
                                <h3 className="font-bold text-lg font-headline text-slate-800 group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2">
                                    {category.description}
                                </p>

                                {/* Flash Icon */}
                                <Zap className="absolute top-3 right-3 h-5 w-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </>
        )}
      </DialogContent>
    </Dialog>
  )
}
