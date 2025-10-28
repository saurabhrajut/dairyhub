
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Bug, ShieldCheck, Settings, Search } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { pestControlContent } from "@/lib/content/pest-control-content";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        <div className="prose prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);

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
        return <Section title={content.sections.conclusion.title}><div dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }} /></Section>
    },
}

export function PestControlModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(pestControlContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
    { value: "intro", title: content.tabs.intro, icon: BookOpen, component: topicComponents.intro },
    { value: "types", title: content.tabs.types, icon: Bug, component: topicComponents.types },
    { value: "ipm", title: content.tabs.ipm, icon: ShieldCheck, component: topicComponents.ipm },
    { value: "control_methods", title: content.tabs.control_methods, icon: Settings, component: topicComponents.control_methods },
    { value: "prevention", title: content.tabs.prevention, icon: ShieldCheck, component: topicComponents.prevention },
    { value: "monitoring", title: content.tabs.monitoring, icon: Search, component: topicComponents.monitoring },
    { value: "conclusion", title: content.tabs.conclusion, icon: BookOpen, component: topicComponents.conclusion },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>
        
        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={() => setActiveTopic(null)}>
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
          <ScrollArea className="flex-1 mt-4 sm:pr-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
              {topics.map(topic => (
                <button
                  key={topic.value}
                  onClick={() => setActiveTopic(topic.value)}
                  className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                >
                  <topic.icon className="w-8 h-8 text-primary mr-4 shrink-0" />
                  <div>
                    <span className="font-semibold font-headline text-card-foreground">{topic.title}</span>
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
