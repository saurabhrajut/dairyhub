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
import { 
    ArrowLeft, 
    Milk, 
    Droplet, 
    Utensils, 
    Flame, 
    Cookie, 
    Snowflake, 
    IceCream, 
    Layers, 
    PackageOpen, 
    ShoppingBag,
    CupSoda,
    Coffee,
    Box,
    Factory,
    Zap,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

// Import individual content files
import { marketMilkContent } from "@/lib/content/processing/market-milk";
import { creamContent } from "@/lib/content/processing/cream";
import { butterContent } from "@/lib/content/processing/butter";
import { gheeContent } from "@/lib/content/processing/ghee";
import { curdContent } from "@/lib/content/processing/curd";
import { buttermilkContent } from "@/lib/content/processing/buttermilk";
import { lassiContent } from "@/lib/content/processing/lassi";
import { iceCreamContent } from "@/lib/content/processing/ice-cream";
import { yoghurtContent } from "@/lib/content/processing/yoghurt";
import { chhanaContent } from "@/lib/content/processing/chhana";
import { rasgullaContent } from "@/lib/content/processing/rasgulla";
import { khoaContent } from "@/lib/content/processing/khoa";
import { sandeshContent } from "@/lib/content/processing/sandesh";
import { barfiContent } from "@/lib/content/processing/barfi";
import { shrikhandContent } from "@/lib/content/processing/shrikhand";
import { condensedMilkContent } from "@/lib/content/processing/condensed-milk";
import { milkPowderContent } from "@/lib/content/processing/milk-powder";
import { paneerProcessingContent } from "@/lib/content/processing/paneer";
import { cheeseContent } from "@/lib/content/processing/cheese";
import { flavouredMilkContent } from "@/lib/content/processing/flavoured-milk";
import { wheyBeverageContent } from "@/lib/content/processing/whey-beverage";

// ✅ Configuration for Icons and Colors
const productsConfig: Record<string, { icon: any, color: string }> = {
  "market-milk": { icon: Milk, color: "from-blue-500 to-cyan-500" },
  "cream": { icon: Droplet, color: "from-yellow-400 to-amber-300" },
  "butter": { icon: Utensils, color: "from-yellow-500 to-orange-400" },
  "ghee": { icon: Flame, color: "from-amber-500 to-orange-600" },
  "curd": { icon: Cookie, color: "from-slate-400 to-gray-500" },
  "buttermilk": { icon: Milk, color: "from-teal-400 to-emerald-400" },
  "lassi": { icon: CupSoda, color: "from-pink-400 to-rose-400" },
  "ice-cream": { icon: IceCream, color: "from-fuchsia-500 to-purple-500" },
  "yoghurt": { icon: Snowflake, color: "from-indigo-500 to-blue-600" },
  "chhana": { icon: Layers, color: "from-orange-300 to-amber-400" },
  "rasgulla": { icon: Cookie, color: "from-rose-300 to-pink-400" },
  "khoa": { icon: Box, color: "from-orange-700 to-red-700" },
  "sandesh": { icon: Cookie, color: "from-amber-300 to-yellow-500" },
  "barfi": { icon: Layers, color: "from-emerald-400 to-green-600" },
  "shrikhand": { icon: IceCream, color: "from-yellow-500 to-orange-500" },
  "condensed-milk": { icon: PackageOpen, color: "from-amber-200 to-orange-300" },
  "milk-powder": { icon: ShoppingBag, color: "from-slate-500 to-gray-600" },
  "paneer": { icon: Layers, color: "from-green-500 to-emerald-600" },
  "cheese": { icon: Layers, color: "from-yellow-400 to-orange-500" },
  "flavoured-milk": { icon: Coffee, color: "from-purple-500 to-pink-600" },
  "whey-beverage": { icon: Droplet, color: "from-lime-500 to-green-500" },
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed mt-6">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        <div className="prose prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);

const ProductContent = ({ content }: { content: any }) => {
    if (!content) return <p>Content coming soon...</p>;
    
    if (content.subTopics) {
        return (
             <div>
                <Section title={content.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.content }} />
                </Section>
                {Object.keys(content.subTopics).map(subKey => {
                    const subTopic = content.subTopics[subKey];
                    return (
                        <div key={subKey} className="mt-8">
                           <ProductContent content={subTopic} />
                        </div>
                    )
                })}
            </div>
        );
    }
    
    return (
        <Section title={content.title}>
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </Section>
    );
};

export function ProductsProcessingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [activeSubProduct, setActiveSubProduct] = useState<string | null>(null);

  const productMap = useMemo(() => ({
    "market-milk": t(marketMilkContent),
    "cream": t(creamContent),
    "butter": t(butterContent),
    "ghee": t(gheeContent),
    "curd": t(curdContent),
    "buttermilk": t(buttermilkContent),
    "lassi": t(lassiContent),
    "barfi": t(barfiContent),
    "ice-cream": t(iceCreamContent),
    "yoghurt": t(yoghurtContent),
    "chhana": t(chhanaContent),
    "rasgulla": t(rasgullaContent),
    "khoa": t(khoaContent),
    "sandesh": t(sandeshContent),
    "shrikhand": t(shrikhandContent),
    "condensed-milk": t(condensedMilkContent),
    "milk-powder": t(milkPowderContent),
    "paneer": t(paneerProcessingContent),
    "cheese": t(cheeseContent),
    "flavoured-milk": t(flavouredMilkContent),
    "whey-beverage": t(wheyBeverageContent),
  }), [t]);

  const topics = Object.keys(productMap).map(key => {
    const product = productMap[key as keyof typeof productMap];
    return {
      value: key,
      title: product.title,
      // ✅ Merge Config Data
      icon: productsConfig[key]?.icon || Box,
      color: productsConfig[key]?.color || "from-gray-400 to-slate-500",
      subTopics: product.subTopics ? Object.keys(product.subTopics).map(subKey => ({
        value: subKey,
        title: product.subTopics[subKey].title
      })) : null
    };
  });

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveProduct(null);
      setActiveSubProduct(null);
    }
    setIsOpen(open);
  };
  
  const handleBack = () => {
    if(activeSubProduct) {
      setActiveSubProduct(null);
    } else {
      setActiveProduct(null);
    }
  }

  const selectedTopic = activeProduct ? topics.find(t => t.value === activeProduct) : null;
  
  const getDialogDescription = () => {
    if (activeSubProduct && selectedTopic && selectedTopic.subTopics) {
      return selectedTopic.subTopics.find(st => st.value === activeSubProduct)?.title || "Select a product";
    }
    if (selectedTopic) return "Detailed processing steps & flow.";
    return "Explore detailed manufacturing processes for various dairy products.";
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
       {/* ✅ Mobile Width Fix */}
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        
        {activeProduct && selectedTopic ? (
             // === ACTIVE VIEW (CONTENT) ===
            <div className="flex-1 flex flex-col min-h-0">
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
                     <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                        <ArrowLeft className="h-5 w-5" />
                     </Button>
                     <div className="flex items-center gap-3">
                         {/* ✅ Colorful Header Icon */}
                        <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md", selectedTopic.color)}>
                             <selectedTopic.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold font-headline">
                                {selectedTopic.title}
                            </DialogTitle>
                             {/* Show Sub-topic title if active */}
                             {activeSubProduct && (
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                   <ChevronRight className="w-3 h-3" />
                                   {selectedTopic.subTopics?.find(s => s.value === activeSubProduct)?.title}
                                </p>
                             )}
                        </div>
                     </div>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:pr-4 w-full">
                    <div className="p-4 pt-0 sm:p-0 px-2">
                        {/* Sub-products Selection Grid (if exists and no sub-product selected) */}
                        {selectedTopic.subTopics && !activeSubProduct ? (
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {selectedTopic.subTopics.map(subTopic => (
                                    <button
                                    key={subTopic.value}
                                    onClick={() => setActiveSubProduct(subTopic.value)}
                                    className="group flex items-center p-4 bg-white hover:shadow-lg rounded-xl border-2 border-transparent hover:border-primary/20 transition-all duration-200 text-left"
                                    >
                                        <div className={cn("p-3 rounded-full bg-gradient-to-br text-white mr-4 shadow-sm opacity-80 group-hover:opacity-100", selectedTopic.color)}>
                                           <selectedTopic.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-slate-700 group-hover:text-primary">{subTopic.title}</span>
                                        <ChevronRight className="w-4 h-4 ml-auto text-slate-300 group-hover:text-primary" />
                                    </button>
                                ))}
                            </div>
                        ) : (
                             // Show Content
                             <ProductContent content={
                                 activeSubProduct 
                                 ? productMap[activeProduct as keyof typeof productMap].subTopics![activeSubProduct] 
                                 : productMap[activeProduct as keyof typeof productMap]
                             } />
                        )}
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
                        Products Processing
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm sm:text-lg text-gray-500">
                        {getDialogDescription()}
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    {/* ✅ Colorful Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-4">
                        {topics.map(topic => (
                            <button
                            key={topic.value}
                            onClick={() => setActiveProduct(topic.value)}
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
