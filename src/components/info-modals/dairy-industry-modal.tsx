"use client"

import { useState, useRef, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useLanguage } from "@/context/language-context";
import { dairyIndustryContent } from "@/lib/content/dairy-industry-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Users, TrendingUp, Ship, CheckCircle, BarChart4 } from "lucide-react";

// --- Helper Components ---

const SectionTitle = ({ title, id }: { title: string, id: string }) => (
    <h2 id={id} className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">
        {title}
    </h2>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    // Updated styling for subsections for a more professional look
    <div className="p-4 bg-card/50 rounded-lg border border-border mt-6 shadow-sm">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);

// --- Content Components ---

const IntroContent = ({ content }: { content: any }) => (
    <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
        {/* Added a professional container for intro */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
            <p dangerouslySetInnerHTML={{ __html: content.intro1 }} />
            <br/>
            <p dangerouslySetInnerHTML={{ __html: content.intro2 }} />
        </div>
    </div>
);

const OverviewContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.overview.title} id="overview" />
        <SubSection title={content.overview.market_size.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.market_size.text }} />
        </SubSection>
        <SubSection title={content.overview.contribution.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.contribution.text }} />
        </SubSection>
            <SubSection title={content.overview.production_trends.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text2 }} />
        </SubSection>
        <SubSection title={content.overview.drivers_challenges.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.drivers }} />
            <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.challenges }} />
            <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.opportunities }} />
            <div className="overflow-x-auto mt-4 rounded-lg border">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="font-bold text-primary">{content.overview.drivers_challenges.table.header1}</TableHead>
                            <TableHead className="font-bold text-primary">{content.overview.drivers_challenges.table.header2}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell className="font-medium">{content.overview.drivers_challenges.table.row1_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row1_col2}</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">{content.overview.drivers_challenges.table.row2_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row2_col2}</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">{content.overview.drivers_challenges.table.row3_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row3_col2}</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">{content.overview.drivers_challenges.table.row4_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row4_col2}</TableCell></TableRow>
                        <TableRow><TableCell className="font-medium">{content.overview.drivers_challenges.table.row5_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row5_col2}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </div>
        </SubSection>
    </>
);

const CooperativesContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.cooperatives.title} id="cooperatives" />
            <SubSection title={content.cooperatives.operation_flood.title}>
            <p dangerouslySetInnerHTML={{ __html: content.cooperatives.operation_flood.text }} />
                <h5 className="font-bold mt-4 text-primary">{content.cooperatives.operation_flood.objectives_title}</h5>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                {content.cooperatives.operation_flood.objectives.map((obj: string, i: number) => <li key={i}>{obj}</li>)}
                </ul>
                <h5 className="font-bold mt-4 text-primary">{content.cooperatives.operation_flood.phases_title}</h5>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    {content.cooperatives.operation_flood.phases.map((phase: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: phase }} />)}
                </ul>
        </SubSection>
        <SubSection title={content.cooperatives.anand_pattern.title}>
            <p>{content.cooperatives.anand_pattern.intro}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                {content.cooperatives.anand_pattern.tiers.map((tier: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: tier }} />)}
            </ul>
        </SubSection>
            <SubSection title={content.cooperatives.empowerment.title}>
            <p dangerouslySetInnerHTML={{ __html: content.cooperatives.empowerment.text }} />
        </SubSection>
    </>
);

const TrendsContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.trends.title} id="trends" />
            <SubSection title={content.trends.modernization.title}>
            <p dangerouslySetInnerHTML={{ __html: content.trends.modernization.text }} />
        </SubSection>
        <SubSection title={content.trends.startups.title}>
                <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text1 }} />
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.trends.startups.text2 }} />
        </SubSection>
    </>
);

const ExportsContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.exports.title} id="exports" />
        <SubSection title={content.exports.status.title}>
            <p dangerouslySetInnerHTML={{ __html: content.exports.status.text1 }} />
            <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.exports.status.text2 }} />
        </SubSection>
    </>
);

const ConclusionContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.conclusion.title} id="conclusion" />
        {/* Added a professional container for conclusion */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
             <p className="text-lg font-medium text-green-900" dangerouslySetInnerHTML={{ __html: content.conclusion.text }} />
        </div>
    </>
);


const topicComponents = {
    intro: IntroContent,
    overview: OverviewContent,
    cooperatives: CooperativesContent,
    trends: TrendsContent,
    exports: ExportsContent,
    conclusion: ConclusionContent
};


// --- Main Component ---

export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const { t } = useLanguage();
  const content = t(dairyIndustryContent);
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
        title: "Introduction", 
        icon: BookOpen,
        // Blue Theme
        colorClass: "text-blue-700",
        bgClass: "bg-blue-50",
        borderClass: "border-blue-200",
        hoverClass: "hover:bg-blue-100" 
    },
    { 
        value: "overview", 
        title: content.overview.title, 
        icon: BarChart4,
        // Indigo Theme
        colorClass: "text-indigo-700",
        bgClass: "bg-indigo-50",
        borderClass: "border-indigo-200",
        hoverClass: "hover:bg-indigo-100"
    },
    { 
        value: "cooperatives", 
        title: content.cooperatives.title, 
        icon: Users,
        // Emerald/Green Theme
        colorClass: "text-emerald-700",
        bgClass: "bg-emerald-50",
        borderClass: "border-emerald-200",
        hoverClass: "hover:bg-emerald-100"
    },
    { 
        value: "trends", 
        title: content.trends.title, 
        icon: TrendingUp,
        // Violet/Purple Theme
        colorClass: "text-violet-700",
        bgClass: "bg-violet-50",
        borderClass: "border-violet-200",
        hoverClass: "hover:bg-violet-100"
    },
    { 
        value: "exports", 
        title: content.exports.title, 
        icon: Ship,
        // Cyan/Sky Theme
        colorClass: "text-cyan-700",
        bgClass: "bg-cyan-50",
        borderClass: "border-cyan-200",
        hoverClass: "hover:bg-cyan-100"
    },
    { 
        value: "conclusion", 
        title: content.conclusion.title, 
        icon: CheckCircle,
        // Teal Theme
        colorClass: "text-teal-700",
        bgClass: "bg-teal-50",
        borderClass: "border-teal-200",
        hoverClass: "hover:bg-teal-100"
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
      <DialogContent className="max-w-4xl lg:max-w-5xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="font-headline text-2xl md:text-3xl text-center">{content.main_title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
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
                    <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
                        <ActiveComponent content={content} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
                {/* Updated grid layout for better spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-2">
                    {topics.map(topic => (
                        <button
                          key={topic.value}
                          onClick={() => handleSelectTopic(topic.value)}
                          // Applied professional color classes here
                          className={`
                            flex items-center p-5 rounded-xl border transition-all duration-200
                            text-left shadow-sm hover:shadow-md
                            ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                            group
                          `}
                        >
                          {/* Icon color and animation */}
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
  )
}
