
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
import { IceCreamIcon, PaneerIcon } from "../icons";
import { useLanguage } from "@/context/language-context";
import { fssaiStandardsContent } from "@/lib/content/fssai-standards-content";
import { useState, useRef, useEffect } from "react";

const ProductCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
        <div className="bg-gray-100 p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6">
            {children}
        </div>
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-semibold mt-4 mb-3 text-gray-700 font-headline">{children}</h3>
);

const Note = ({ children }: { children: React.ReactNode }) => (
     <p className="text-xs italic mt-2 text-gray-500">*{children}</p>
);

// Generic function to render a table
const renderTable = (tableData: any) => {
    if (!tableData || !tableData.headers || !tableData.rows) return null;
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        {tableData.headers.map((header: string, index: number) => (
                            <TableHead key={index}>{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.rows.map((row: any, rowIndex: number) => (
                        <TableRow key={rowIndex}>
                            {Object.values(row).map((cell: any, cellIndex: number) => (
                                <TableCell key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};


const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
    general: function Content({ content }: { content: any }) {
        if (!content) return null;
        const sectionContent = content.topics.general;
        return (
            <ProductCard title={sectionContent.title}>
                <div className="prose prose-sm max-w-none break-words">
                    <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{__html: sectionContent.p1}} />
                    <SectionTitle>{sectionContent.definitions.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.definitions?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                    <SectionTitle>{content.principles.title}</SectionTitle>
                    <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: content.principles.p1 }}/>

                    <SectionTitle>{content.microbiological.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{content.microbiological.p1}</p>
                     <ul className="list-disc pl-5 space-y-1">
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
                <div className="prose prose-sm max-w-none break-words">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <div className="prose prose-sm max-w-none break-words mt-4">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.yoghurt.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.yoghurt)}
                <div className="prose prose-sm max-w-none break-words mt-4">
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
                <div className="prose prose-sm max-w-none break-words">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                 <div className="prose prose-sm max-w-none break-words mt-4">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
                    <SectionTitle>{sectionContent.definition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.definition.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                <div className="prose prose-sm max-w-none break-words mt-4">
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
                <div className="prose prose-sm max-w-none break-words">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.composition)}
                 <div className="prose prose-sm max-w-none break-words mt-4">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
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
                <div className="prose prose-sm max-w-none break-words">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                     <ul className="list-disc pl-5 space-y-1">
                        {sectionContent?.description?.list?.map((item:any, index:any) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <SectionTitle>{sectionContent.compositionColostrum.title}</SectionTitle>
                </div>
                {renderTable(sectionContent.compositionColostrum)}
                <div className="prose prose-sm max-w-none break-words mt-4">
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
                <div className="prose prose-sm max-w-none break-words">
                    <SectionTitle>{sectionContent.description.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.description.p1}</p>
                    <SectionTitle>{sectionContent.composition.title}</SectionTitle>
                    <p className="font-medium leading-relaxed">{sectionContent.composition.p1}</p>
                </div>
            </ProductCard>
        )
    },
};

const topics = [
    { value: "general", icon: BookOpen },
    { value: "milk", icon: Droplet },
    { value: "flavouredMilk", icon: Droplet },
    { value: "evaporatedMilk", icon: Thermometer },
    { value: "sweetenedCondensedMilk", icon: Thermometer },
    { value: "khoa", icon: Component },
    { value: "cream", icon: Droplet },
    { value: "fatProducts", icon: FlaskConical },
    { value: "butter", icon: Factory },
    { value: "milkPowders", icon: Wind },
    { value: "fermented", icon: Beaker },
    { value: "iceCream", icon: IceCreamIcon },
    { value: "frozenDessert", icon: Snowflake },
    { value: "chhanaPaneer", icon: PaneerIcon },
    { value: "cheese", icon: Component },
    { value: "casein", icon: FlaskConical },
    { value: "lactose", icon: Atom },
    { value: "wheyProtein", icon: Archive },
    { value: "colostrum", icon: ShieldCheck },
    { value: "dairyPermeatePowders", icon: Wind }
];

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
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 font-headline">
            {content.mainTitle}
          </DialogTitle>
           <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? getTopicTitle(selectedTopic.value) : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={handleBack}>
                        <ArrowLeft className="mr-2" />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
                    {topics.map(topic => {
                        const topicTitle = getTopicTitle(topic.value);
                        return (
                            <button
                                key={topic.value}
                                onClick={() => handleSelectTopic(topic.value)}
                                className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                            >
                                <topic.icon className="w-8 h-8 text-primary mr-4 shrink-0" />
                                <div>
                                    <span className="font-semibold font-headline text-card-foreground">
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

    

    
