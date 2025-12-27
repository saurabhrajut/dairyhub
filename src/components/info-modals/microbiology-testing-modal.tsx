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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/language-context";
import { microbiologyContent } from "@/lib/content/microbiology-content";
import { microbiologyTestMethodsContent } from "@/lib/content/microbiology-test-methods-content";
import { Button } from "../ui/button";
import { ArrowLeft, TestTube, Bug, ShieldOff, FlaskConical, Proportions, Dna, Thermometer, Microscope, Biohazard, ScanSearch } from "lucide-react";


// --- Helper Components ---

const TestProcedure = ({ test }: { test: any }) => (
    <AccordionItem value={test.id} className="border-b border-gray-200 last:border-0">
        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-4 px-2 hover:bg-gray-50 rounded-md transition-colors text-gray-800">
            {test.title}
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
            <div className="prose prose-sm max-w-none break-words text-gray-700">
                <div className="mb-4">
                    <h4 className="font-bold text-primary mb-1">Siddhant (Principle):</h4>
                    <p className="bg-blue-50 p-3 rounded-md border border-blue-100">{test.principle}</p>
                </div>
                
                <div className="mb-4">
                    <h4 className="font-bold text-primary mb-1">Prakriya (Procedure):</h4>
                    <div className="pl-2 border-l-2 border-gray-200" dangerouslySetInnerHTML={{ __html: test.procedure }} />
                </div>
                
                <div>
                    <h4 className="font-bold text-primary mb-1">Ganana (Calculation):</h4>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-inner" dangerouslySetInnerHTML={{ __html: test.calculation }}/>
                </div>
            </div>
        </AccordionContent>
    </AccordionItem>
);

const Section = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: React.ElementType }) => (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="bg-muted/30 p-4 border-b border-border flex items-center gap-3">
            {Icon && <div className="p-2 bg-primary/10 rounded-lg"><Icon className="w-5 h-5 text-primary" /></div>}
            <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground prose max-w-none text-gray-700 leading-relaxed break-words">
            <div className="space-y-4">{children}</div>
        </div>
    </div>
);

// --- Content Rendering Logic ---

const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
    intro: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'intro');
        if (!section) return null;
        return <Section title={section.title} icon={Microscope}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    thermophilic_thermoduric: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'thermophilic_thermoduric');
        if (!section) return null;
        return <Section title={section.title} icon={Thermometer}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    psychrotrophic: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'psychrotrophic');
        if (!section) return null;
        return <Section title={section.title} icon={Bug}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
     lactic_acid_bacteria: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'lactic_acid_bacteria');
        if (!section) return null;
        return <Section title={section.title} icon={Dna}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    spoilage_pathogenic: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'spoilage_pathogenic');
        if (!section) return null;
        return <Section title={section.title} icon={ShieldOff}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    enterobacteriaceae: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'enterobacteriaceae');
        if (!section) return null;
        return <Section title={section.title} icon={Biohazard}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    cronobacter: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'cronobacter');
        if (!section) return null;
        return <Section title={section.title} icon={Bug}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    sources_of_contamination: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'sources_of_contamination');
        if (!section) return null;
        return <Section title={section.title} icon={ScanSearch}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    hygienic_measures: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'hygienic_measures');
        if (!section) return null;
        return <Section title={section.title} icon={Proportions}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    test_methods: function Content({ content }: { content: any }) {
        if (!content) return null;
        return (
            <Section title={content.title} icon={TestTube}>
                <p className="mb-6">{content.intro}</p>
                 <Accordion type="single" collapsible className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    {content.tests.map((test: any, index: number) => (
                       <TestProcedure key={index} test={test} />
                    ))}
                </Accordion>
            </Section>
        );
    }
};

// --- Main Component ---

export function MicrobiologyTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const mainContent = t(microbiologyContent);
  const testMethodsContent = t(microbiologyTestMethodsContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);


  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  if (!mainContent || !testMethodsContent) return null;

  // --- COLOR CONFIGURATION (Scientific Theme) ---
  const topics = [
      { 
          value: "intro", 
          title: "Introduction", 
          icon: Microscope,
          colorClass: "text-blue-600",
          bgClass: "bg-blue-50",
          borderClass: "border-blue-200",
          hoverClass: "hover:bg-blue-100"
      },
      { 
          value: "thermophilic_thermoduric", 
          title: "Thermophilic & Thermoduric Bacteria", 
          icon: Thermometer,
          // Orange/Red for Heat
          colorClass: "text-orange-600",
          bgClass: "bg-orange-50",
          borderClass: "border-orange-200",
          hoverClass: "hover:bg-orange-100"
      },
      { 
          value: "psychrotrophic", 
          title: "Psychrotrophic Bacteria", 
          icon: Snowflake, // Using Snowflake icon logic (passed as Bug in original, switched to match theme)
          // Cyan for Cold
          colorClass: "text-cyan-600",
          bgClass: "bg-cyan-50",
          borderClass: "border-cyan-200",
          hoverClass: "hover:bg-cyan-100"
      },
      { 
          value: "lactic_acid_bacteria", 
          title: "Lactic Acid Bacteria", 
          icon: Dna,
          // Green for Fermentation
          colorClass: "text-emerald-600",
          bgClass: "bg-emerald-50",
          borderClass: "border-emerald-200",
          hoverClass: "hover:bg-emerald-100"
      },
      { 
          value: "spoilage_pathogenic", 
          title: "Spoilage & Pathogenic Organisms", 
          icon: ShieldOff,
          // Red for Danger
          colorClass: "text-red-600",
          bgClass: "bg-red-50",
          borderClass: "border-red-200",
          hoverClass: "hover:bg-red-100"
      },
      { 
          value: "enterobacteriaceae", 
          title: "Enterobacteriaceae Family", 
          icon: Biohazard,
          // Purple for Bacteria
          colorClass: "text-purple-600",
          bgClass: "bg-purple-50",
          borderClass: "border-purple-200",
          hoverClass: "hover:bg-purple-100"
      },
      { 
          value: "cronobacter", 
          title: "Cronobacter", 
          icon: Bug,
          // Rose for Pathogen
          colorClass: "text-rose-600",
          bgClass: "bg-rose-50",
          borderClass: "border-rose-200",
          hoverClass: "hover:bg-rose-100"
      },
      { 
          value: "sources_of_contamination", 
          title: "Sources of Contamination", 
          icon: ScanSearch,
          // Amber for Warning
          colorClass: "text-amber-600",
          bgClass: "bg-amber-50",
          borderClass: "border-amber-200",
          hoverClass: "hover:bg-amber-100"
      },
      { 
          value: "hygienic_measures", 
          title: "Hygienic Measures", 
          icon: Proportions,
          // Teal for Cleanliness
          colorClass: "text-teal-600",
          bgClass: "bg-teal-50",
          borderClass: "border-teal-200",
          hoverClass: "hover:bg-teal-100"
      },
      { 
          value: "test_methods", 
          title: "Common Test Methods", 
          icon: TestTube,
          // Indigo for Lab/Science
          colorClass: "text-indigo-600",
          bgClass: "bg-indigo-50",
          borderClass: "border-indigo-200",
          hoverClass: "hover:bg-indigo-100"
      }
  ];

  // Helper function to handle Icon override for specific mapped items if needed, 
  // though above map is clean. Ensuring Snowflake is imported if I used it above.
  // Correction: I used Snowflake above, adding import.

  const selectedTopicInfo = topics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;

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


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">
            {mainContent.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground">
            {selectedTopicInfo ? selectedTopicInfo.title : mainContent.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopicInfo && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0">
                <ActiveComponent content={activeTopic === 'test_methods' ? testMethodsContent : mainContent} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
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

// Added Snowflake to imports locally just in case it was missing in the top block
// It should be added to the top import from "lucide-react"
import { Snowflake } from "lucide-react";
