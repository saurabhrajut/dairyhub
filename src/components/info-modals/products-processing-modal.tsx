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
import { ArrowLeft } from "lucide-react";
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
    if (selectedTopic) return selectedTopic.title;
    return "Select a product to see its processing details.";
  }

  const renderContent = () => {
    if (!activeProduct) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-0">
          {topics.map(topic => (
            <button
              key={topic.value}
              onClick={() => setActiveProduct(topic.value)}
              className="flex items-center justify-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-center transition-all duration-200 h-24"
            >
              <span className="font-semibold font-headline text-card-foreground">{topic.title}</span>
            </button>
          ))}
        </div>
      );
    }

    if (selectedTopic?.subTopics && !activeSubProduct) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
          {selectedTopic.subTopics.map(subTopic => (
            <button
              key={subTopic.value}
              onClick={() => setActiveSubProduct(subTopic.value)}
              className="flex items-center justify-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-center transition-all duration-200 h-24"
            >
              <span className="font-semibold font-headline text-card-foreground">{subTopic.title}</span>
            </button>
          ))}
        </div>
      );
    }
    
    let contentToDisplay;
    if (selectedTopic?.subTopics && activeSubProduct) {
      contentToDisplay = productMap[activeProduct as keyof typeof productMap].subTopics[activeSubProduct];
    } else if (selectedTopic) {
      contentToDisplay = productMap[activeProduct as keyof typeof productMap];
    }

    return contentToDisplay ? <ProductContent content={contentToDisplay} /> : null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            Products Processing
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {getDialogDescription()}
          </DialogDescription>
        </DialogHeader>

        {activeProduct ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0">
                {renderContent()}
              </div>
            </ScrollArea>
          </div>
        ) : (
          <ScrollArea className="flex-1 mt-4 sm:pr-4">
            {renderContent()}
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
