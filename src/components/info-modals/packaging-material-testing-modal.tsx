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
import { packagingContent } from "@/lib/content/packaging-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Layers, Settings, TestTube } from "lucide-react";


// --- Helper Components with Professional Styling ---

const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div id={id} className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="bg-muted/30 p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground prose max-w-none text-gray-700 leading-relaxed break-words">
            <div className="space-y-4">{children}</div>
        </div>
    </div>
);

const SubHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <div id={id} className="mt-6 mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 font-headline flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            {children}
        </h3>
    </div>
);

const TestProcedure = ({ test, content }: { test: any, content: any }) => {
    return (
        <AccordionItem value={test.title.replace(/\s+/g, '-').toLowerCase()} className="border-b border-gray-100 last:border-0">
            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline px-2 hover:bg-slate-50 rounded transition-colors text-gray-800">
                {test.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2">
                <div className="prose prose-sm max-w-none">
                    <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: test.procedure }} />
                    {test.calculation && (
                        <div className="mt-4">
                            <h4 className="font-bold text-primary text-xs uppercase tracking-wide mb-2">{content.testing.calculation_title}</h4>
                            <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-inner">
                                {test.calculation}
                            </div>
                        </div>
                    )}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

// --- Content Components ---

const topicComponents = {
    introduction: ({ content }: { content: any }) => (
        <Section title={content.introduction.title} id="introduction">
            <div className="prose prose-sm max-w-none break-words">
                <p>{content.introduction.p1}</p>
                <p>{content.introduction.p2}</p>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mt-4">
                    <h3 className="font-bold text-blue-900 mb-2">{content.introduction.purpose_title}</h3>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                        {content.introduction.purposes.map((purpose:any, index:number) => <li key={index}>{purpose}</li>)}
                    </ul>
                </div>
                
                <p className="mt-4">{content.introduction.p3}</p>
            </div>
        </Section>
    ),
    materials: ({ content }: { content: any }) => (
        <Section title={content.materials.title} id="materials">
            <div className="prose prose-sm max-w-none break-words">
                <SubHeading id="glass">{content.materials.glass.title}</SubHeading>
                <p>{content.materials.glass.p1}</p>
                
                <SubHeading id="plastics">{content.materials.plastics.title}</SubHeading>
                <p>{content.materials.plastics.p1}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {content.materials.plastics.types.map((type:any, index:number) => (
                        <div key={index} className="bg-emerald-50 p-3 rounded border border-emerald-100 text-sm" dangerouslySetInnerHTML={{ __html: type }}/>
                    ))}
                </div>

                <SubHeading id="laminates">{content.materials.laminates.title}</SubHeading>
                <p>{content.materials.laminates.p1}</p>
            </div>
        </Section>
    ),
    forms: ({ content }: { content: any }) => (
        <Section title={content.forms.title} id="forms-processes">
            <div className="prose prose-sm max-w-none break-words">
                <p>{content.forms.p1}</p>
                
                <div className="space-y-6 mt-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <SubHeading id="aseptic">{content.forms.aseptic.title}</SubHeading>
                        <p>{content.forms.aseptic.p1}</p>
                    </div>
                    
                    <div>
                        <SubHeading id="fino">{content.forms.fino.title}</SubHeading>
                        <p>{content.forms.fino.p1}</p>
                    </div>

                    <div>
                        <SubHeading id="pet">{content.forms.pet.title}</SubHeading>
                        <p>{content.forms.pet.p1}</p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <SubHeading id="retort">{content.forms.retort.title}</SubHeading>
                        <p>{content.forms.retort.p1}</p>
                    </div>
                </div>
            </div>
        </Section>
    ),
    testing: ({ content }: { content: any }) => (
        <Section title={content.testing.title} id="testing">
            <div className="prose prose-sm max-w-none break-words">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex-1 bg-purple-50 p-4 rounded-lg border border-purple-100">
                        <p className="text-purple-900"><strong>{content.testing.sampling_title}:</strong> {content.testing.sampling_text}</p>
                    </div>
                    <div className="flex-1 bg-purple-50 p-4 rounded-lg border border-purple-100">
                        <p className="text-purple-900"><strong>{content.testing.conditioning_title}:</strong> {content.testing.conditioning_text}</p>
                    </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <Accordion type="single" collapsible className="w-full bg-white">
                        {content.testing.tests.map((test:any) => <TestProcedure key={test.title} test={test} content={content} />)}
                    </Accordion>
                </div>
            </div>
        </Section>
    )
};


// --- Main Component ---

export function PackagingMaterialTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(packagingContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  // --- COLOR CONFIGURATION ---
  const topics = [
      { 
          value: "introduction", 
          title: content.tabs.intro, 
          icon: BookOpen, 
          component: topicComponents.introduction,
          // Blue Theme
          colorClass: "text-blue-600",
          bgClass: "bg-blue-50",
          borderClass: "border-blue-200",
          hoverClass: "hover:bg-blue-100"
      },
      { 
          value: "materials", 
          title: content.tabs.materials, 
          icon: Layers, 
          component: topicComponents.materials,
          // Emerald Theme (Materials/Eco)
          colorClass: "text-emerald-600",
          bgClass: "bg-emerald-50",
          borderClass: "border-emerald-200",
          hoverClass: "hover:bg-emerald-100"
      },
      { 
          value: "forms-processes", 
          title: content.tabs.forms, 
          icon: Settings, 
          component: topicComponents.forms,
          // Amber Theme (Industrial/Process)
          colorClass: "text-amber-600",
          bgClass: "bg-amber-50",
          borderClass: "border-amber-200",
          hoverClass: "hover:bg-amber-100"
      },
      { 
          value: "testing", 
          title: content.tabs.testing, 
          icon: TestTube, 
          component: topicComponents.testing,
          // Purple Theme (Lab/Testing)
          colorClass: "text-purple-600",
          bgClass: "bg-purple-50",
          borderClass: "border-purple-200",
          hoverClass: "hover:bg-purple-100"
      },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

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
      <DialogContent className="max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-primary mb-2 font-headline">{content.title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-muted-foreground">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none break-words">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 sm:p-2">
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
