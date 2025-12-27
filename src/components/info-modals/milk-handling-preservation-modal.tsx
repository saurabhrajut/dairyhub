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
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Truck, Warehouse, Shield, CheckCircle, Droplet } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { milkHandlingPreservationContent } from "@/lib/content/milk-handling-preservation-content";


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
    introduction: ({ content }: { content: any }) => (
        <Section title={content.sections.introduction.title} id="introduction">
            <p dangerouslySetInnerHTML={{ __html: content.sections.introduction.p1 }} />
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p dangerouslySetInnerHTML={{ __html: content.sections.introduction.p2 }} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: content.sections.introduction.p3 }} />
        </Section>
    ),
    reception: ({ content }: { content: any }) => (
         <Section title={content.sections.reception.title} id="reception">
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.p1 }} />
            
            <SubHeading>{content.sections.reception.farm_practices.title}</SubHeading>
            <div className="pl-4 border-l-2 border-green-100">
                <p dangerouslySetInnerHTML={{ __html: content.sections.reception.farm_practices.p1 }} />
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.sections.reception.farm_practices.p2 }} />
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.sections.reception.farm_practices.p3 }} />
            </div>

            <SubHeading>{content.sections.reception.plant_reception.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.plant_reception.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.plant_reception.p2 }} />
            <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-2">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong className="font-semibold text-green-900">{content.sections.reception.plant_reception.measurement_methods.by_weight.title}:</strong> {content.sections.reception.plant_reception.measurement_methods.by_weight.text}</li>
                    <li><strong className="font-semibold text-green-900">{content.sections.reception.plant_reception.measurement_methods.by_volume.title}:</strong> {content.sections.reception.plant_reception.measurement_methods.by_volume.text}</li>
                </ul>
            </div>
            <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.sections.reception.plant_reception.p3 }} />
            
            <SubHeading>{content.sections.reception.hygiene_cleaning.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p4 }} />
        </Section>
    ),
    transportation: ({ content }: { content: any }) => (
         <Section title={content.sections.transportation.title} id="transportation">
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.p1 }} />
            
            <SubHeading>{content.sections.transportation.tanker_design.title}</SubHeading>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.tanker_design.p1 }} />
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.sections.transportation.tanker_design.p2 }} />
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.sections.transportation.tanker_design.p3 }} />
            </div>

            <SubHeading>{content.sections.transportation.hygienic_transport.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.hygienic_transport.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.hygienic_transport.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.hygienic_transport.p3 }} />
            
            <SubHeading>{content.sections.transportation.temp_control.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.temp_control.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.temp_control.p2 }} />
            
            <SubHeading>{content.sections.transportation.monitoring_logistics.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p4 }} />
        </Section>
    ),
    storage: ({ content }: { content: any }) => (
         <Section title={content.sections.storage.title} id="storage">
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.p1 }} />
            
            <SubHeading>{content.sections.storage.raw_milk_silos.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.raw_milk_silos.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.raw_milk_silos.p2 }} />
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 mt-2">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.temp.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.temp.text}</li>
                    <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.level.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.level.text}</li>
                    <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.low_level.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.low_level.text}</li>
                    <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.overflow.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.overflow.text}</li>
                </ul>
            </div>

            <SubHeading>{content.sections.storage.refrigerated_storage.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.refrigerated_storage.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.refrigerated_storage.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.refrigerated_storage.p3 }} />
            
            <SubHeading>{content.sections.storage.uht_storage.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.uht_storage.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.uht_storage.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.uht_storage.p3 }} />
        </Section>
    ),
    preservation: ({ content }: { content: any }) => (
        <Section title={content.sections.preservation.title} id="chemical">
            <SubHeading>{content.sections.preservation.principles.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.principles.p1 }} />
            
            <SubHeading>{content.sections.preservation.chemicals.title}</SubHeading>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 space-y-4">
                <div>
                    <h4 className="font-bold text-purple-900">{content.sections.preservation.chemicals.h2o2.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.h2o2.p1 }} />
                    <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.h2o2.p2 }} />
                </div>
                <div>
                    <h4 className="font-bold text-purple-900">{content.sections.preservation.chemicals.lp_system.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.lp_system.p1 }} />
                    <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.lp_system.p2 }} />
                </div>
                <div>
                    <h4 className="font-bold text-purple-900">{content.sections.preservation.chemicals.other.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.other.p1 }} />
                </div>
            </div>

            <SubHeading>{content.sections.preservation.regulatory.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.regulatory.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.regulatory.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.regulatory.p3 }} />
            
            <SubHeading>{content.sections.preservation.comparison.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.comparison.p1 }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border p-3 rounded-lg">
                    <h4 className="font-bold text-primary">{content.sections.preservation.comparison.refrigeration.title}</h4>
                    <p className="text-sm mt-1"><strong className="text-green-600">Adv:</strong> {content.sections.preservation.comparison.refrigeration.advantages.text}</p>
                    <p className="text-sm"><strong className="text-red-600">Dis:</strong> {content.sections.preservation.comparison.refrigeration.disadvantages.text}</p>
                </div>
                <div className="border p-3 rounded-lg">
                    <h4 className="font-bold text-primary">{content.sections.preservation.comparison.pasteurization.title}</h4>
                    <p className="text-sm mt-1"><strong className="text-green-600">Adv:</strong> {content.sections.preservation.comparison.pasteurization.advantages.text}</p>
                    <p className="text-sm"><strong className="text-red-600">Dis:</strong> {content.sections.preservation.comparison.pasteurization.disadvantages.text}</p>
                </div>
                <div className="border p-3 rounded-lg">
                    <h4 className="font-bold text-primary">{content.sections.preservation.comparison.uht.title}</h4>
                    <p className="text-sm mt-1"><strong className="text-green-600">Adv:</strong> {content.sections.preservation.comparison.uht.advantages.text}</p>
                    <p className="text-sm"><strong className="text-red-600">Dis:</strong> {content.sections.preservation.comparison.uht.disadvantages.text}</p>
                </div>
                <div className="border p-3 rounded-lg">
                    <h4 className="font-bold text-primary">{content.sections.preservation.comparison.chemical.title}</h4>
                    <p className="text-sm mt-1"><strong className="text-green-600">Adv:</strong> {content.sections.preservation.comparison.chemical.advantages.text}</p>
                    <p className="text-sm"><strong className="text-red-600">Dis:</strong> {content.sections.preservation.comparison.chemical.disadvantages.text}</p>
                </div>
            </div>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: content.sections.preservation.comparison.p2 }} />
        </Section>
    ),
    conclusions: ({ content }: { content: any }) => (
        <Section title={content.sections.conclusions.title} id="conclusions">
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 text-teal-900">
                <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p1 }} />
                <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p2 }} />
                <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p3 }} />
                <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p4 }} />
                <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p5 }} />
                <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p6 }} />
            </div>
        </Section>
    ),
};


export function MilkHandlingPreservationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { t } = useLanguage();
  const content = t(milkHandlingPreservationContent);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  // --- COLOR CONFIGURATION ---
  const topics = [
    { 
        value: "introduction", 
        title: content.tabs.introduction, 
        icon: BookOpen, 
        component: topicComponents.introduction,
        // Blue Theme
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "reception", 
        title: content.tabs.reception, 
        icon: Droplet, 
        component: topicComponents.reception,
        // Green Theme (Farm/Nature)
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "transportation", 
        title: content.tabs.transportation, 
        icon: Truck, 
        component: topicComponents.transportation,
        // Orange/Amber Theme (Logistics)
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "storage", 
        title: content.tabs.storage, 
        icon: Warehouse, 
        component: topicComponents.storage,
        // Cyan Theme (Cold Chain)
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
    { 
        value: "preservation", 
        title: content.tabs.preservation, 
        icon: Shield, 
        component: topicComponents.preservation,
        // Purple Theme (Safety/Chemical)
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
    { 
        value: "conclusions", 
        title: content.tabs.conclusions, 
        icon: CheckCircle, 
        component: topicComponents.conclusions,
        // Teal Theme
        colorClass: "text-teal-600",
        bgClass: "bg-teal-50",
        borderClass: "border-teal-200",
        hoverClass: "hover:bg-teal-100"
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
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-primary mb-2 font-headline">{content.title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
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
