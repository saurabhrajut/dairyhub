"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Droplet, Wind, ShieldCheck, Component, Factory, FlaskConical, Snowflake, Thermometer, Beaker, Archive, Atom, Loader2 } from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons"; // Assuming these accept className
import { useLanguage } from "@/context/language-context";
import { fssaiStandardsContent } from "@/lib/content/fssai-standards-content";
import { useState, useRef, useEffect } from "react";

// --- Helper Components ---

const ProductCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
        <div className="bg-muted/30 p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground">
            {children}
        </div>
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-bold mt-6 mb-3 text-primary/90 font-headline border-b pb-1 inline-block border-primary/20">{children}</h3>
);

const Note = ({ children }: { children: React.ReactNode }) => (
     <div className="bg-yellow-50 text-yellow-800 text-xs sm:text-sm p-3 rounded-md mt-4 border border-yellow-100 italic">
        <strong>Note:</strong> {children}
     </div>
);

// Generic function to render a table with professional styling
const renderTable = (tableData: any) => {
    if (!tableData || !tableData.headers || !tableData.rows) return null;
    return (
        <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <Table>
                <TableHeader className="bg-muted/50">
                    <TableRow>
                        {tableData.headers.map((header: string, index: number) => (
                            <TableHead key={index} className="font-bold text-primary">{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.rows.map((row: any, rowIndex: number) => (
                        <TableRow key={rowIndex}>
                            {Object.values(row).map((cell: any, cellIndex: number) => (
                                <TableCell key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} className="text-sm" />
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};


// --- Content Components ---
// (Rendering logic remains the same, just utilizing the styled components above)

const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
    general: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.general;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{__html: sectionContent.p1}} />
                    <SectionTitle>{sectionContent.definitions.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-2">
                        {sectionContent?.definitions?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                    <SectionTitle>{content.principles.title}</SectionTitle>
                    <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: content.principles.p1 }}/>

                    <SectionTitle>{content.microbiological.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{content.microbiological.p1}</p>
                     <ul className="list-disc pl-5 space-y-2 mt-2">
                        {content.microbiological.list.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                </div>
            </ProductCard>
        )
    },
    milk: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.milk;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <div className="prose prose-sm max-w-none break-words mt-4 text-gray-700">
                    <SectionTitle>{sectionContent.additives.title}</SectionTitle>
                    <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{__html: sectionContent.additives.p1}}></p>
                    <SectionTitle>{sectionContent.hygiene.title}</SectionTitle>
                    <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{__html: sectionContent.hygiene.p1}}></p>
                    <SectionTitle>{sectionContent.labeling.title}</SectionTitle>
                    <div className="font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: sectionContent.labeling.p1 }}></div>
                </div>
            </ProductCard>
        )
    },
    flavouredMilk: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.flavouredMilk;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.composition.p1}</p>
                </div>
            </ProductCard>
        )
    },
    evaporatedMilk: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.evaporatedMilk;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
            </ProductCard>
        )
    },
    sweetenedCondensedMilk: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.sweetenedCondensedMilk;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
            </ProductCard>
        )
    },
    khoa: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.khoa;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
            </ProductCard>
        )
    },
    cream: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.cream;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                     <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.composition.p1}</p>
                    <SectionTitle>{sectionContent.labeling.title}</SectionTitle>
                    <div className="font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: sectionContent.labeling.p1 }}></div>
                </div>
            </ProductCard>
        )
    },
    fatProducts: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.fatProducts;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
            </ProductCard>
        )
    },
    butter: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.butter;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.definition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.definition.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <Note>{sectionContent.note}</Note>
            </ProductCard>
        )
    },
    milkPowders: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.milkPowders;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <Note>{sectionContent.note}</Note>
            </ProductCard>
        )
    },
     fermented: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.fermented;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.yoghurt.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.yoghurt)}
                <div className="prose prose-sm max-w-none break-words mt-4 text-gray-700">
                    <SectionTitle>{sectionContent.chakka.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.chakka)}
            </ProductCard>
        )
    },
    iceCream: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.iceCream;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                 <div className="prose prose-sm max-w-none break-words mt-4 text-gray-700">
                    <SectionTitle>{sectionContent.milkIce.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.milkIce)}
                <Note>{sectionContent.note}</Note>
            </ProductCard>
        )
    },
    frozenDessert: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.frozenDessert;
         return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.composition.p1}</p>
                </div>
            </ProductCard>
        )
    },
    chhanaPaneer: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.chhanaPaneer;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.definition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.definition.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <div className="prose prose-sm max-w-none break-words mt-4 text-gray-700">
                    <SectionTitle>{sectionContent.labeling.title}</SectionTitle>
                    <div className="font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: sectionContent.labeling.p1 }}></div>
                </div>
            </ProductCard>
        )
    },
     cheese: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.cheese;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                 <div className="prose prose-sm max-w-none break-words mt-4 text-gray-700">
                    <SectionTitle>{sectionContent.labeling.title}</SectionTitle>
                    <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: sectionContent.labeling.p1 }}></p>
                </div>
            </ProductCard>
        )
    },
    casein: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.casein;
         return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <Note>{sectionContent.note}</Note>
            </ProductCard>
        )
    },
    lactose: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.lactose;
         return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
            </ProductCard>
        )
    },
    wheyProtein: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.wheyProtein;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <Note>{sectionContent.note}</Note>
            </ProductCard>
        )
    },
    colostrum: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.colostrum;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                     <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.compositionColostrum.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.compositionColostrum)}
                <div className="prose prose-sm max-w-none break-words mt-4 text-gray-700">
                    <SectionTitle>{sectionContent.compositionPowder.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.compositionPowder)}
                <Note>{sectionContent.note}</Note>
            </ProductCard>
        )
    },
    dairyPermeatePowders: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.dairyPermeatePowders;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words text-gray-700">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.composition.p1}</p>
                </div>
            </ProductCard>
        )
    },
};

// --- Main Component ---

export function FssaiStandardsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(fssaiStandardsContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  // --- COLOR CONFIGURATION (Each Topic has unique theme) ---
  const topics = [
    { 
        value: "general", 
        icon: BookOpen,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "milk", 
        icon: Droplet,
        colorClass: "text-sky-600",
        bgClass: "bg-sky-50",
        borderClass: "border-sky-200",
        hoverClass: "hover:bg-sky-100"
    },
    { 
        value: "flavouredMilk", 
        icon: Droplet,
        colorClass: "text-pink-600",
        bgClass: "bg-pink-50",
        borderClass: "border-pink-200",
        hoverClass: "hover:bg-pink-100"
    },
    { 
        value: "evaporatedMilk", 
        icon: Thermometer,
        colorClass: "text-amber-600",
        bgClass: "bg-amber-50",
        borderClass: "border-amber-200",
        hoverClass: "hover:bg-amber-100"
    },
    { 
        value: "sweetenedCondensedMilk", 
        icon: Thermometer,
        colorClass: "text-yellow-600",
        bgClass: "bg-yellow-50",
        borderClass: "border-yellow-200",
        hoverClass: "hover:bg-yellow-100"
    },
    { 
        value: "khoa", 
        icon: Component,
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "cream", 
        icon: Droplet,
        colorClass: "text-rose-600",
        bgClass: "bg-rose-50",
        borderClass: "border-rose-200",
        hoverClass: "hover:bg-rose-100"
    },
    { 
        value: "fatProducts", 
        icon: FlaskConical,
        colorClass: "text-red-600",
        bgClass: "bg-red-50",
        borderClass: "border-red-200",
        hoverClass: "hover:bg-red-100"
    },
    { 
        value: "butter", 
        icon: Factory,
        colorClass: "text-amber-500",
        bgClass: "bg-yellow-100", // Slightly darker yellow for butter
        borderClass: "border-yellow-300",
        hoverClass: "hover:bg-yellow-200"
    },
    { 
        value: "milkPowders", 
        icon: Wind,
        colorClass: "text-slate-600",
        bgClass: "bg-slate-100",
        borderClass: "border-slate-300",
        hoverClass: "hover:bg-slate-200"
    },
    { 
        value: "fermented", 
        icon: Beaker,
        colorClass: "text-lime-600",
        bgClass: "bg-lime-50",
        borderClass: "border-lime-200",
        hoverClass: "hover:bg-lime-100"
    },
    { 
        value: "iceCream", 
        icon: IceCreamIcon,
        colorClass: "text-fuchsia-600",
        bgClass: "bg-fuchsia-50",
        borderClass: "border-fuchsia-200",
        hoverClass: "hover:bg-fuchsia-100"
    },
    { 
        value: "frozenDessert", 
        icon: Snowflake,
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
    { 
        value: "chhanaPaneer", 
        icon: PaneerIcon,
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "cheese", 
        icon: Component,
        colorClass: "text-orange-700",
        bgClass: "bg-orange-100",
        borderClass: "border-orange-300",
        hoverClass: "hover:bg-orange-200"
    },
    { 
        value: "casein", 
        icon: FlaskConical,
        colorClass: "text-violet-600",
        bgClass: "bg-violet-50",
        borderClass: "border-violet-200",
        hoverClass: "hover:bg-violet-100"
    },
    { 
        value: "lactose", 
        icon: Atom,
        colorClass: "text-indigo-600",
        bgClass: "bg-indigo-50",
        borderClass: "border-indigo-200",
        hoverClass: "hover:bg-indigo-100"
    },
    { 
        value: "wheyProtein", 
        icon: Archive,
        colorClass: "text-teal-600",
        bgClass: "bg-teal-50",
        borderClass: "border-teal-200",
        hoverClass: "hover:bg-teal-100"
    },
    { 
        value: "colostrum", 
        icon: ShieldCheck,
        colorClass: "text-rose-700",
        bgClass: "bg-rose-100",
        borderClass: "border-rose-300",
        hoverClass: "hover:bg-rose-200"
    },
    { 
        value: "dairyPermeatePowders", 
        icon: Wind,
        colorClass: "text-stone-600",
        bgClass: "bg-stone-100",
        borderClass: "border-stone-300",
        hoverClass: "hover:bg-stone-200"
    }
  ];

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(topicValue);
  };

  const handleBack = () => {
    setActiveTopic(null);
  };

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if(scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPosition.current;
        }
      }, 0);
    }
  }, [activeTopic]);

  const selectedTopic = activeTopic ? topics.find(t => t.value === activeTopic) : null;
  const ActiveComponent = selectedTopic ? topicComponents[selectedTopic.value] : null;

  const getTopicTitle = (topicValue: string) => {
    if (!content) return topicValue;
    const topicData = content.topics[topicValue as keyof typeof content.topics];
    return topicData?.title || topicValue;
  };
  
  if (!content) {
    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent>
                <div className="flex items-center justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                </div>
            </DialogContent>
        </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">
            {content.mainTitle}
          </DialogTitle>
           <DialogDescription className="text-center text-lg text-muted-foreground">
            {selectedTopic ? getTopicTitle(selectedTopic.value) : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {content.backToTopics}
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                        <ActiveComponent content={content} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
             <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-2">
                    {topics.map(topic => {
                        const topicTitle = getTopicTitle(topic.value);
                        return (
                            <button
                                key={topic.value}
                                onClick={() => handleSelectTopic(topic.value)}
                                className={`
                                    flex items-center p-5 rounded-xl border transition-all duration-200
                                    text-left shadow-sm hover:shadow-md
                                    ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                                    group
                                `}
                            >
                                <topic.icon className={`w-8 h-8 mr-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${topic.colorClass}`} />
                                <div>
                                    <span className="font-bold font-headline text-lg text-gray-800 group-hover:text-black">
                                        {topicTitle}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
