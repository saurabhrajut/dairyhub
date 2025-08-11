
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";


const foodTechTopics = [
    { id: "intro-food-tech", title: "Introduction to Food Technology" },
    { id: "eng-props", title: "Engineering Properties" },
    { id: "food-biochem", title: "Food Biochemistry" },
    { id: "processing-methods", title: "Processing Methods" },
    { id: "food-engineering", title: "Food Engineering" },
    { id: "food-microbiology", title: "Food Microbiology" },
    { id: "heat-mass-transfer", title: "Heat & Mass Transfer" },
    { id: "food-biotech", title: "Food Biotechnology" },
    { id: "food-composition", title: "Food Composition & Analysis" },
    { id: "food-nutrition", title: "Food Nutrition" },
    { id: "fruit-veg-processing", title: "Fruits & Veg Processing" },
    { id: "food-safety-regs", title: "Food Safety & Regulations" },
    { id: "refrigeration", title: "Refrigeration & Cold Storage" },
    { id: "milk-products-tech", title: "Milk Products Technology" },
    { id: "fermentation-tech", title: "Fermentation Technology" },
    { id: "post-harvest", title: "Post Harvest Handling" },
    { id: "instrumental-analysis", title: "Instrumental Analysis" },
    { id: "waste-management", title: "Waste Management" },
    { id: "plant-design", title: "Food Plant Design" },
    { id: "flavors-colors", title: "Food Flavours & Colours" },
    { id: "frozen-foods", title: "Technology of Frozen Foods" },
    { id: "meat-fish-poultry", title: "Meat, Fish & Poultry" },
    { id: "product-dev", title: "Product Dev & Sensory" },
    { id: "food-packaging", title: "Food Packaging" },
    { id: "food-storage", title: "Food Storage Engineering" },
    { id: "baking-confectionery", title: "Baking & Confectionery" },
    { id: "fats-oils", title: "Technology of Fats & Oils" },
];


export function FoodTechModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const isMobile = useIsMobile();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Foundations of Food Technology
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A comprehensive guide to the core principles of food science.
          </DialogDescription>
        </DialogHeader>
         <Tabs defaultValue={foodTechTopics[0].id} orientation={isMobile ? "horizontal" : "vertical"} className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 pt-4">
            <div className={cn("flex-shrink-0", isMobile ? "w-full border-b" : "w-56 border-r pr-4")}>
                <ScrollArea className={cn("w-full h-auto", isMobile ? "whitespace-nowrap" : "")}>
                    <TabsList className={cn("w-full h-auto flex bg-transparent p-0", isMobile ? "flex-row" : "flex-col items-start")}>
                        {foodTechTopics.map(topic => (
                             <TabsTrigger key={topic.id} value={topic.id} className="text-left justify-start w-full md:w-full shrink-0 px-4 py-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none rounded-lg font-medium">
                                {topic.title}
                             </TabsTrigger>
                        ))}
                    </TabsList>
                    {isMobile && <ScrollBar orientation="horizontal" />}
                </ScrollArea>
            </div>
            <div className="flex-1 min-w-0">
                <ScrollArea className="h-full pr-2">
                    {foodTechTopics.map(topic => (
                         <TabsContent key={topic.id} value={topic.id} className="mt-0">
                             <div className="p-4 bg-muted/50 rounded-lg">
                                <h3 className="text-2xl font-bold text-primary mb-4 font-headline">{topic.title}</h3>
                                <p className="text-gray-600">Content for {topic.title} goes here.</p>
                            </div>
                        </TabsContent>
                    ))}
                </ScrollArea>
            </div>
          </Tabs>
      </DialogContent>
    </Dialog>
  );
}
