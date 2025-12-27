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
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Bug, ShieldCheck, Settings, Search, CheckCircle, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { pestControlContent } from "@/lib/content/pest-control-content";

// --- Helper Components with Professional Styling ---

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="bg-muted/30 p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6 text-card-foreground prose max-w-none text-gray-700 leading-relaxed break-words">
            {children}
        </div>
    </div>
);

// --- Content Components ---

const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
    intro: function Content({ content }: { content: any }) {
        return <Section title={content.sections.introduction.title}><div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }} /></Section>
    },
    types: function Content({ content }: { content: any }) {
        return <Section title={content.sections.types_of_pests.title}><div dangerouslySetInnerHTML={{ __html: content.sections.types_of_pests.content }} /></Section>
    },
    ipm: function Content({ content }: { content: any }) {
        return <Section title={content.sections.ipm.title}><div dangerouslySetInnerHTML={{ __html: content.sections.ipm.content }} /></Section>
    },
    control_methods: function Content({ content }: { content: any }) {
        return <Section title={content.sections.control_methods.title}><div dangerouslySetInnerHTML={{ __html: content.sections.control_methods.content }} /></Section>
    },
    prevention: function Content({ content }: { content: any }) {
        return <Section title={content.sections.prevention.title}><div dangerouslySetInnerHTML={{ __html: content.sections.prevention.content }} /></Section>
    },
    monitoring: function Content({ content }: { content: any }) {
        return <Section title={content.sections.monitoring.title}><div dangerouslySetInnerHTML={{ __html: content.sections.monitoring.content }} /></Section>
    },
    conclusion: function Content({ content }: { content: any }) {
        return <Section title={content.sections.conclusion.title}><div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-emerald-900" dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }} /></Section>
    },
}

// --- Main Component ---

export function PestControlModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(pestControlContent);
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
        value: "intro", 
        title: content.tabs.intro, 
        icon: BookOpen, 
        component: topicComponents.intro,
        // Blue Theme
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100"
    },
    { 
        value: "types", 
        title: content.tabs.types, 
        icon: Bug, 
        component: topicComponents.types,
        // Red Theme (Danger/Pests)
        colorClass: "text-red-600",
        bgClass: "bg-red-50",
        borderClass: "border-red-200",
        hoverClass: "hover:bg-red-100"
    },
    { 
        value: "ipm", 
        title: content.tabs.ipm, 
        icon: ShieldCheck, 
        component: topicComponents.ipm,
        // Green Theme (Eco-friendly/System)
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "control_methods", 
        title: content.tabs.control_methods, 
        icon: Settings, 
        component: topicComponents.control_methods,
        // Orange Theme (Action/Methods)
        colorClass: "text-orange-600",
        bgClass: "bg-orange-50",
        borderClass: "border-orange-200",
        hoverClass: "hover:bg-orange-100"
    },
    { 
        value: "prevention", 
        title: content.tabs.prevention, 
        icon: ShieldCheck, 
        component: topicComponents.prevention,
        // Teal Theme (Protection)
        colorClass: "text-teal-600",
        bgClass: "bg-teal-50",
        borderClass: "border-teal-200",
        hoverClass: "hover:bg-teal-100"
    },
    { 
        value: "monitoring", 
        title: content.tabs.monitoring, 
        icon: Search, 
        component: topicComponents.monitoring,
        // Purple Theme (Inspection/Analysis)
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        borderClass: "border-purple-200",
        hoverClass: "hover:bg-purple-100"
    },
    { 
        value: "conclusion", 
        title: content.tabs.conclusion, 
        icon: CheckCircle, 
        component: topicComponents.conclusion,
        // Cyan Theme (Summary)
        colorClass: "text-cyan-600",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

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
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">
            {content.title}
          </DialogTitle>
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
