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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Droplets, TestTube, Thermometer, Weight, FlaskConical, Gauge, Scale } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { calibrationStandardizationContent } from "@/lib/content/calibration-standardization-content";


// --- Helper Components with Professional Styling ---

const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <section id={id} className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="bg-muted/30 p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground prose prose-sm max-w-none text-gray-700 text-base leading-relaxed break-words">
            <div className="space-y-4">{children}</div>
        </div>
    </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-6 mb-3">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 font-headline">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            {children}
        </h3>
    </div>
);

// --- Content Components ---

const topicComponents = {
    definitions: ({ content }: { content: any }) => (
        <Section title={content.definitions.title} id="definitions">
            <SubHeading>{content.definitions.reagent}</SubHeading>
            <p>{content.definitions.reagent_desc}</p>
            
            <SubHeading>{content.definitions.solution}</SubHeading>
            <p>{content.definitions.solution_desc}</p>
            <ul className="list-disc list-inside mt-2 space-y-1 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <li dangerouslySetInnerHTML={{ __html: content.definitions.dilute_sol }}/>
                <li dangerouslySetInnerHTML={{ __html: content.definitions.concentrated_sol }}/>
                <li dangerouslySetInnerHTML={{ __html: content.definitions.saturated_sol }}/>
            </ul>

            <SubHeading>{content.definitions.standard_sol}</SubHeading>
            <p>{content.definitions.standard_sol_desc}</p>
            
            <SubHeading>{content.definitions.normal_sol}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.definitions.normal_sol_desc }}/>
            <p className="font-mono bg-gray-100 p-2 rounded mt-2 text-sm" dangerouslySetInnerHTML={{ __html: content.definitions.normal_sol_formula }}/>

            <SubHeading>{content.definitions.molar_sol}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.definitions.molar_sol_desc }}/>
            
            <SubHeading>{content.definitions.molal_sol}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.definitions.molal_sol_desc }}/>
            <p className="font-semibold mt-4 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 text-sm">Note: {content.definitions.note}</p>
        </Section>
    ),
    pipette: ({ content }: { content: any }) => (
         <Section title={content.pipette.title} id="pipette">
             <SubHeading>{content.pipette.comparison.title}</SubHeading>
             <p>{content.pipette.comparison.desc}</p>
             
             <SubHeading>{content.pipette.bis.title}</SubHeading>
             <p dangerouslySetInnerHTML={{ __html: content.pipette.bis.desc }}/>
             <ol className="list-decimal list-inside space-y-2 mt-2 pl-2">
                 {content.pipette.bis.steps.map((step: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
             </ol>
             
             <SubHeading>{content.pipette.mathematical.title}</SubHeading>
             <p className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 italic">{content.pipette.mathematical.desc}</p>
        </Section>
    ),
    butyrometer: ({ content }: { content: any }) => (
         <Section title={content.butyrometer.title} id="butyrometer">
             <SubHeading>{content.butyrometer.principle.title}</SubHeading>
             <p dangerouslySetInnerHTML={{ __html: content.butyrometer.principle.desc }}/>

            <SubHeading>{content.butyrometer.methods.title}</SubHeading>
            
            <div className="mt-4">
                <h4 className="font-bold text-primary mb-2">{content.butyrometer.methods.comparison.title}</h4>
                <p>{content.butyrometer.methods.comparison.desc}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                    {content.butyrometer.methods.comparison.points.map((point: string, i: number) => <li key={i}>{point}</li>)}
                </ul>
                <p className="mt-2 font-medium">{content.butyrometer.methods.comparison.conclusion}</p>
            </div>

            <div className="mt-6">
                <h4 className="font-bold text-primary mb-2">{content.butyrometer.methods.bis.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: content.butyrometer.methods.bis.desc }}/>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-2">
                     {content.butyrometer.methods.bis.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
                </ol>
            </div>
            
            <div className="mt-6">
                <h4 className="font-bold text-primary mb-2">{content.butyrometer.methods.gravimetric.title}</h4>
                <p>{content.butyrometer.methods.gravimetric.desc}</p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-2">
                    {content.butyrometer.methods.gravimetric.steps.map((step: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
                </ol>
            </div>

             <div className="overflow-x-auto mt-6 rounded-lg border border-gray-200">
                 <Table>
                    <TableCaption>{content.butyrometer.table.caption}</TableCaption>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="font-bold text-primary">{content.butyrometer.table.header1}</TableHead>
                            <TableHead className="font-bold text-primary">{content.butyrometer.table.header2}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {content.butyrometer.table.rows.map((row: any, i: number) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium">{row.scale}</TableCell>
                                <TableCell>{row.product}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                 </Table>
             </div>
        </Section>
    ),
    lactometer: ({ content }: { content: any }) => (
         <Section title={content.lactometer.title} id="lactometer">
            <SubHeading>{content.lactometer.principle.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.lactometer.principle.desc1 }}/>
            <p className="mt-2">{content.lactometer.principle.desc2}</p>
            <ul className="list-disc list-inside mt-2 space-y-1 bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                 {content.lactometer.principle.types.map((type: string, i: number) => <li key={i}>{type}</li>)}
            </ul>
            <p className="mt-2">{content.lactometer.principle.desc3}</p>

            <SubHeading>{content.lactometer.methods.title}</SubHeading>
            <h4 className="font-bold text-primary mt-4 mb-2">{content.lactometer.methods.comparison.title}</h4>
            <p>{content.lactometer.methods.comparison.desc}</p>

            <h4 className="font-bold text-primary mt-4 mb-2">{content.lactometer.methods.bis.title}</h4>
            <p>{content.lactometer.methods.bis.desc}</p>
            <ol className="list-decimal list-inside space-y-2 mt-2 ml-2">
                 {content.lactometer.methods.bis.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
            </ol>
        </Section>
    ),
    other: ({ content }: { content: any }) => (
         <Section title={content.other_glassware.title} id="other-glassware">
            <p>{content.other_glassware.intro}</p>
            <SubHeading>{content.other_glassware.principle.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.other_glassware.principle.desc }}/>
            
            <SubHeading>{content.other_glassware.procedure.title}</SubHeading>
            <ol className="list-decimal list-inside space-y-2 mt-2 ml-2 bg-purple-50 p-4 rounded-lg border border-purple-100">
                 {content.other_glassware.procedure.steps.map((step: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
            </ol>
        </Section>
    ),
    thermometer: ({ content }: { content: any }) => (
         <Section title={content.thermometer.title} id="thermometer">
            <p>{content.thermometer.intro}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <SubHeading>{content.thermometer.ice_point.title}</SubHeading>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        {content.thermometer.ice_point.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
                    </ol>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <SubHeading>{content.thermometer.boiling_point.title}</SubHeading>
                     <ol className="list-decimal list-inside space-y-2 mt-2">
                         {content.thermometer.boiling_point.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
                    </ol>
                </div>
            </div>
        </Section>
    ),
    balance: ({ content }: { content: any }) => (
        <Section title={content.balance.title} id="balance">
            <p>{content.balance.intro}</p>
            <ul className="list-disc list-inside space-y-3 mt-4 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                 {content.balance.tests.map((test: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: test}}/>)}
            </ul>
        </Section>
    )
};

// --- Main Component ---

export function CalibrationStandardizationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { t } = useLanguage();
  const content = t(calibrationStandardizationContent);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);


  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  // --- COLOR CONFIGURATION ---
  const topics = [
    { 
        value: 'definitions', 
        title: "Key Definitions", 
        icon: BookOpen,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: 'pipette', 
        title: "Pipette Calibration", 
        icon: Droplets,
        colorClass: "text-sky-600",
        bgClass: "bg-sky-50",
        borderClass: "border-sky-200",
        hoverClass: "hover:bg-sky-100"
    },
    { 
        value: 'butyrometer', 
        title: "Butyrometer Calibration", 
        icon: FlaskConical,
        colorClass: "text-yellow-600",
        bgClass: "bg-yellow-50",
        borderClass: "border-yellow-200",
        hoverClass: "hover:bg-yellow-100"
    },
    { 
        value: 'lactometer', 
        title: "Lactometer Calibration", 
        icon: Gauge,
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
    { 
        value: 'other', 
        title: "Other Glassware", 
        icon: TestTube,
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
    { 
        value: 'thermometer', 
        title: "Thermometer Calibration", 
        icon: Thermometer,
        colorClass: "text-red-600",
        bgClass: "bg-red-50",
        borderClass: "border-red-200",
        hoverClass: "hover:bg-red-100"
    },
    { 
        value: 'balance', 
        title: "Weighing Balance", 
        icon: Scale,
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
        scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(topicValue);
  }

  const handleBack = () => {
    setActiveTopic(null);
  }

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
        setTimeout(() => {
            if(scrollAreaRef.current) {
                scrollAreaRef.current.scrollTop = scrollPosition.current;
            }
        }, 0);
    }
  }, [activeTopic]);


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">{content.mainTitle}</DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
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
          <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
            <section className="mb-8 space-y-4 p-4 sm:p-0 bg-blue-50/50 p-6 rounded-xl border border-blue-100 mx-4 sm:mx-0">
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.intro_p1 }}/>
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.intro_p2 }}/>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-2">
              {topics.map(topic => (
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
                        {content.tabs[topic.value as keyof typeof content.tabs]}
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
