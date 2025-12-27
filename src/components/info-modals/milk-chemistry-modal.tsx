"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Atom, Droplets, FlaskConical, Gem, Dna, TestTube, Cpu } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { milkChemistryContent } from "@/lib/content/milk-chemistry-content";

// --- Helper Components ---

const InfoBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card p-4 sm:p-6 rounded-xl shadow-sm border mt-6">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="text-base leading-relaxed text-gray-700 break-words prose max-w-none force-wrap">
            {children}
        </div>
    </div>
);


const Section = ({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) => (
    <div>
        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 font-headline">
            <Icon className="w-6 h-6" />
            <span>{title}</span>
        </h3>
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
            {children}
        </div>
    </div>
);

// --- Content Components ---

function CompositionContent({ content }: { content: any }) {
    return (
        <Section title={content.composition.title} icon={BookOpen}>
            <InfoBlock title={content.composition.whatIsMilk.title}>
                <p dangerouslySetInnerHTML={{ __html: content.composition.whatIsMilk.fssaiDef }} />
                <p dangerouslySetInnerHTML={{ __html: content.composition.whatIsMilk.codexDef }} />
                <p dangerouslySetInnerHTML={{ __html: content.composition.whatIsMilk.usaDef }} />
                <p>{content.composition.whatIsMilk.p1}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    {content.composition.whatIsMilk.phases.map((phase: string, i: number) => <li key={i}>{phase}</li>)}
                </ul>
            </InfoBlock>
            
            <InfoBlock title={content.composition.generalComposition.title}>
                <div className="table-container">
                     <Table>
                        <TableHeader>
                           <TableRow>
                               <TableHead>{content.composition.generalComposition.headers[0]}</TableHead>
                               <TableHead>{content.composition.generalComposition.headers[1]}</TableHead>
                               <TableHead>{content.composition.generalComposition.headers[2]}</TableHead>
                               <TableHead>{content.composition.generalComposition.headers[3]}</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.composition.generalComposition.rows.map((row: any, i: number) => (
                                <TableRow key={i}>
                                    <TableCell>{row.c1}</TableCell>
                                    <TableCell>{row.v1}</TableCell>
                                    <TableCell>{row.c2}</TableCell>
                                    <TableCell>{row.v2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </InfoBlock>

            <InfoBlock title={content.composition.speciesDifferences.title}>
                 <div className="table-container">
                    <Table>
                         <TableHeader>
                            <TableRow>
                                {content.composition.speciesDifferences.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                             {content.composition.speciesDifferences.rows.map((row: any, i: number) => (
                                <TableRow key={i}>
                                    <TableCell>{row.species}</TableCell>
                                    <TableCell>{row.water}</TableCell>
                                    <TableCell>{row.fat}</TableCell>
                                    <TableCell>{row.sugar}</TableCell>
                                    <TableCell>{row.protein}</TableCell>
                                    <TableCell>{row.ash}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </InfoBlock>
            <InfoBlock title={content.composition.water.title}>
                <p>{content.composition.water.p1}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                     {content.composition.water.forms.map((form: any, i: number) => <li key={i}><strong className="font-semibold">{form.name}:</strong> {form.desc}</li>)}
                </ul>
            </InfoBlock>
        </Section>
    )
}

function MammaryGlandContent({ content }: { content: any }) {
    const data = content?.mammaryGland || content?.mammary_gland;

    if (!data) {
        return (
            <div className="p-4 text-center text-gray-500">
                Data not available for Mammary Gland section.
            </div>
        );
    }

    return (
        <Section title={data?.title || "Mammary Gland"} icon={Cpu}>
            {data?.structure && (
                <InfoBlock title={data.structure.title}>
                    <p>{data.structure.p1}</p>
                    <p className="mt-2">{data.structure.p2}</p>
                </InfoBlock>
            )}
            
            {data?.physiology && (
                <InfoBlock title={data.physiology.title}>
                    <p>{data.physiology.p1}</p>
                    <p className="mt-2">
                        <strong className="font-semibold">{data.physiology.ejectionTitle}:</strong> {data.physiology.ejectionText}
                    </p>
                </InfoBlock>
            )}
            
            {data?.precursors && (
                <InfoBlock title={data.precursors.title}>
                    <div className="table-container">
                        <Table>
                            <TableCaption>{data.precursors.caption}</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    {data.precursors.headers?.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.precursors.rows?.map((row: any, i: number) => (
                                    <TableRow key={i}>
                                        <TableCell>{row.constituent}</TableCell>
                                        <TableCell>{row.plasma}</TableCell>
                                        <TableCell dangerouslySetInnerHTML={{ __html: row.milk }} />
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </InfoBlock>
            )}
        </Section>
    );
}

function ProteinsContent({ content }: { content: any }) {
    return (
        <Section title={content.proteins.title} icon={Dna}>
             <InfoBlock title={content.proteins.overview.title}>
                <p dangerouslySetInnerHTML={{ __html: content.proteins.overview.p1 }} />
            </InfoBlock>
            <InfoBlock title={content.proteins.casein.title}>
                <p dangerouslySetInnerHTML={{ __html: content.proteins.casein.p1 }} />
                <h5 className="font-bold mt-4">{content.proteins.casein.fractionsTitle}</h5>
                <p>{content.proteins.casein.fractionsText}</p>
                <h5 className="font-bold mt-4">{content.proteins.casein.coagulationTitle}</h5>
                <p>{content.proteins.casein.coagulationText}</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    {content.proteins.casein.coagulationTypes.map((type: any, i: number) => <li key={i}><strong className="font-semibold">{type.name}:</strong> {type.desc}</li>)}
                </ul>
            </InfoBlock>

            <InfoBlock title={content.proteins.whey.title}>
                <p>{content.proteins.whey.p1}</p>
                <h5 className="font-bold mt-4">{content.proteins.whey.fractionsTitle}</h5>
                {content.proteins.whey.fractions.map((frac: any, i: number) => <p key={i} className="mt-2"><strong className="font-semibold">{frac.name}:</strong> {frac.desc}</p>)}
            </InfoBlock>
        </Section>
    )
}

function FatContent({ content }: { content: any }) {
    return (
        <Section title={content.fat.title} icon={Droplets}>
            <InfoBlock title={content.fat.characteristics.title}>
                <p>{content.fat.characteristics.p1}</p>
                <p className="mt-2">{content.fat.characteristics.p2}</p>
            </InfoBlock>
            <InfoBlock title={content.fat.stability.title}>
                 <p>{content.fat.stability.p1}</p>
                 <p className="mt-2"><strong className="font-semibold">{content.fat.stability.creamingTitle}:</strong> {content.fat.stability.creamingText}</p>
                 <p className="mt-2"><strong className="font-semibold">{content.fat.stability.lipolysisTitle}:</strong> {content.fat.stability.lipolysisText}</p>
            </InfoBlock>
            <InfoBlock title={content.fat.autoxidation.title}>
                <p><strong className="font-semibold">{content.fat.autoxidation.autoxidationTitle}:</strong> {content.fat.autoxidation.autoxidationText}</p>
                <p className="mt-2"><strong className="font-semibold">{content.fat.autoxidation.crystallizationTitle}:</strong> {content.fat.autoxidation.crystallizationText}</p>
            </InfoBlock>
        </Section>
    )
}

function LactoseContent({ content }: { content: any }) {
    return (
        <Section title={content.lactose.title} icon={Atom}>
             <InfoBlock title={content.lactose.properties.title}>
               <p>{content.lactose.properties.p1}</p>
               <p className="mt-2">{content.lactose.properties.p2}</p>
                <h5 className="font-bold mt-4">{content.lactose.properties.crystallizationTitle}</h5>
                <p className="mt-2" dangerouslySetInnerHTML={{__html: content.lactose.properties.crystallizationText1}} />
                <p className="mt-2">{content.lactose.properties.crystallizationText2}</p>
            </InfoBlock>
        </Section>
    )
}

function MineralsContent({ content }: { content: any }) {
    return (
        <Section title={content.minerals.title} icon={Gem}>
             <InfoBlock title={content.minerals.composition.title}>
               <p>{content.minerals.composition.p1}</p>
               <p className="mt-2">{content.minerals.composition.p2}</p>
            </InfoBlock>
             <InfoBlock title={content.minerals.trace.title}>
                <p>{content.minerals.trace.p1}</p>
             </InfoBlock>
        </Section>
    )
}

function VitaminsEnzymesContent({ content }: { content: any }) {
    const isTableFormat = content.vitaminsEnzymes.enzymes.headers ? true : false;

    return (
        <Section title={content.vitaminsEnzymes.title} icon={FlaskConical}>
             <InfoBlock title={content.vitaminsEnzymes.vitamins.title}>
                <p>{content.vitaminsEnzymes.vitamins.p1}</p>
            </InfoBlock>

             <InfoBlock title={content.vitaminsEnzymes.enzymes.title}>
                <p className="mb-4">{content.vitaminsEnzymes.enzymes.overview?.p1 || content.vitaminsEnzymes.enzymes.p1}</p>
                
                {isTableFormat ? (
                    <div className="table-container border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    {content.vitaminsEnzymes.enzymes.headers.map((h: string, i: number) => (
                                        <TableHead key={i}>{h}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {content.vitaminsEnzymes.enzymes.rows.map((row: any, i: number) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-bold align-top">{row.name}</TableCell>
                                        <TableCell className="text-red-600 font-medium align-top text-xs sm:text-sm">{row.stability}</TableCell>
                                        <TableCell className="text-sm text-gray-600 align-top">{row.details}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        {content.vitaminsEnzymes.enzymes.list?.map((enzyme: any, i: number) => (
                            <li key={i}><strong className="font-semibold">{enzyme.name}:</strong> {enzyme.desc}</li>
                        ))}
                    </ul>
                )}
            </InfoBlock>
        </Section>
    )
}

function PropertiesContent({ content }: { content: any }) {
    return (
        <Section title={content.properties.title} icon={TestTube}>
             {content.properties.overview && (
                 <InfoBlock title={content.properties.overview.title}>
                    <p>{content.properties.overview.p1}</p>
                </InfoBlock>
             )}

            <div className="table-container mt-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {content.properties.headers?.map((h: string, i: number) => (
                                <TableHead key={i} className={i === 0 ? "w-[200px]" : ""}>{h}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {content.properties.rows.map((prop: any, i: number) => (
                            <TableRow key={i}>
                                <TableCell className="font-semibold align-top">{prop.property}</TableCell>
                                <TableCell className="align-top font-mono text-sm">{prop.value}</TableCell>
                                <TableCell className="text-sm text-gray-600 align-top">{prop.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>
    )
}

function OtherComponentsContent({ content }: { content: any }) {
    return (
        <Section title={content.other.title} icon={FlaskConical}>
            <InfoBlock title={content.other.minor.title}>
                <ul className="list-disc list-inside space-y-2">
                    {content.other.minor.list.map((item: any, i: number) => <li key={i}><strong className="font-semibold">{item.name}:</strong> {item.desc}</li>)}
                </ul>
            </InfoBlock>
            <InfoBlock title={content.other.contaminants.title}>
                <p>{content.other.contaminants.p1}</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    {content.other.contaminants.list.map((item: any, i: number) => <li key={i}><strong className="font-semibold">{item.name}:</strong> {item.desc}</li>)}
                </ul>
            </InfoBlock>
        </Section>
    );
}

const chemistryTopicComponents: { [key: string]: React.FC<{ content: any }> } = {
    "composition": CompositionContent,
    "mammary_gland": MammaryGlandContent,
    "proteins": ProteinsContent,
    "fat": FatContent,
    "lactose": LactoseContent,
    "minerals": MineralsContent,
    "vitamins_enzymes": VitaminsEnzymesContent,
    "properties": PropertiesContent,
    "other": OtherComponentsContent,
};


// --- Main Component ---

export function MilkChemistryModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { language } = useLanguage(); 

  const rawContent = milkChemistryContent as any;
  const content = rawContent[language] || rawContent['en'];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  // --- COLOR CONFIGURATION (हर कार्ड का अपना अलग रंग) ---
  const chemistryTopics = [
    { 
        value: "composition", 
        title: content?.composition?.title || "Composition", 
        icon: BookOpen,
        // Blue Theme
        colorClass: "text-blue-700",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
      value: "mammary_gland", 
      title: content?.mammaryGland?.title || content?.mammary_gland?.title || "Mammary Gland", 
      icon: Cpu,
      // Pink/Rose Theme
      colorClass: "text-pink-700",
      bgClass: "bg-pink-50",
      borderClass: "border-pink-200",
      hoverClass: "hover:bg-pink-100"
    },
    { 
        value: "proteins", 
        title: content?.proteins?.title || "Proteins", 
        icon: Dna,
        // Purple/Violet Theme
        colorClass: "text-purple-700",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
    { 
        value: "fat", 
        title: content?.fat?.title || "Fat", 
        icon: Droplets,
        // Yellow/Amber Theme
        colorClass: "text-amber-700",
        bgClass: "bg-yellow-50",
        borderClass: "border-yellow-200",
        hoverClass: "hover:bg-yellow-100"
    },
    { 
        value: "lactose", 
        title: content?.lactose?.title || "Lactose", 
        icon: Atom,
        // Cyan/Sky Theme
        colorClass: "text-cyan-700",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
    { 
        value: "minerals", 
        title: content?.minerals?.title || "Minerals", 
        icon: Gem,
        // Green/Emerald Theme
        colorClass: "text-green-700",
        bgClass: "bg-green-50",
        borderClass: "border-green-200",
        hoverClass: "hover:bg-green-100"
    },
    { 
        value: "vitamins_enzymes", 
        title: content?.vitaminsEnzymes?.title || "Vitamins & Enzymes", 
        icon: FlaskConical,
        // Orange Theme
        colorClass: "text-orange-700",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "properties", 
        title: content?.properties?.title || "Properties", 
        icon: TestTube,
        // Indigo Theme
        colorClass: "text-indigo-700",
        bgClass: "bg-indigo-50",
        borderClass: "border-indigo-200",
        hoverClass: "hover:bg-indigo-100"
    },
    { 
        value: "other", 
        title: content?.other?.title || "Other", 
        icon: FlaskConical,
        // Slate/Grey Theme
        colorClass: "text-slate-700",
        bgClass: "bg-slate-100",
        borderClass: "border-slate-300",
        hoverClass: "hover:bg-slate-200"
    },
  ];

  const selectedTopic = chemistryTopics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? chemistryTopicComponents[activeTopic] : null;
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="font-headline text-2xl md:text-3xl text-center">{content.mainTitle}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={() => setActiveTopic(null)} className="hover:bg-slate-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
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
          <ScrollArea className="flex-1 mt-4 sm:pr-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-2">
              {chemistryTopics.map(topic => (
                <button
                  key={topic.value}
                  onClick={() => setActiveTopic(topic.value)}
                  // यहाँ हर कार्ड के लिए अलग Background (bgClass) और Border (borderClass) सेट किया गया है
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
                        {topic.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
