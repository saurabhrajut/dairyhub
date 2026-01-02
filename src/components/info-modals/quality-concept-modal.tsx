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
import { useLanguage } from "@/context/language-context";
import { qualityContent } from "@/lib/content/quality-content";
import { Button } from "../ui/button";
import { ArrowLeft, Book, Award, ShieldCheck, CheckSquare, Settings, Users, TestTube, BadgeCheck, FileSpreadsheet, Search, Factory, SortAsc, FileText, Forward, ShieldAlert, Zap } from "lucide-react";

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
        <h3 className="text-lg font-bold text-gray-800 mb-2 font-headline flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            {children}
        </h3>
    </div>
);

// --- Content Components ---

const topicComponents = {
    intro: function Content({ content }: { content: any }) {
        return (
             <div className="prose max-w-none text-gray-700 text-base leading-relaxed break-words">
                <p>{content.intro1}</p>
                <p>{content.intro2}</p>
                <p>{content.intro3}</p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                    <h4 className="font-bold text-blue-900 mb-2">Key Benefits:</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                        {content.introBenefits.map((item:any, index:number) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    },
    what_is_quality: function Content({ content }: { content: any }) {
        return (
            <Section title={content.whatIsQuality.title} id="quality">
                <p>{content.whatIsQuality.p1}</p>
                <div className="flex justify-center my-6">
                    <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg text-xl font-mono text-indigo-900 shadow-sm">
                        Quality ∝ 1 / {content.whatIsQuality.variability}
                    </blockquote>
                </div>
                <p>{content.whatIsQuality.p2}</p>
                <p>{content.whatIsQuality.p3}</p>
                <p>{content.whatIsQuality.p4}</p>
            </Section>
        )
    },
    qc: function Content({ content }: { content: any }) {
        return (
             <Section title={content.qc.title} id="qc">
                <p>{content.qc.p1}</p>
                <p>{content.qc.p2}</p>
                
                <SubHeading>{content.qc.responsibilities.title}</SubHeading>
                <ol className="list-decimal list-inside space-y-2 mt-2 bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                    {content.qc.responsibilities.list.map((item: string, index: number) => <li key={index}>{item}</li>)}
                </ol>
            </Section>
        )
    },
    qa: function Content({ content }: { content: any }) {
        return (
            <Section title={content.qa.title} id="qa">
                <p>{content.qa.p1}</p>
                <p>{content.qa.p2}</p>
                <div className="overflow-x-auto mt-4 rounded-lg border border-gray-200 w-full">
                    {/* Fixed: Added min-w to table */}
                    <Table className="min-w-[500px]">
                        <TableCaption>{content.qa.table.caption}</TableCaption>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="font-bold text-primary">{content.qa.table.header1}</TableHead>
                                <TableHead className="font-bold text-primary">{content.qa.table.header2}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.qa.table.rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium text-cyan-700">{row.qc}</TableCell>
                                    <TableCell className="font-medium text-teal-700">{row.qa}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Section>
        )
    },
    prps: function Content({ content }: { content: any }) {
        return (
            <Section title={content.prps.title} id="prps">
                <p>{content.prps.p1}</p>
                
                <div className="space-y-6 mt-4">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <SubHeading>{content.prps.gmp.title}</SubHeading>
                        <p className="mb-2">{content.prps.gmp.p1}</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {content.prps.gmp.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <SubHeading>{content.prps.ghp.title}</SubHeading>
                        <p className="mb-2">{content.prps.ghp.p1}</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {content.prps.ghp.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <SubHeading>{content.prps.glp.title}</SubHeading>
                        <p className="mb-2">{content.prps.glp.p1}</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {content.prps.glp.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                        </ul>
                    </div>
                </div>
            </Section>
        )
    },
    oprps: function Content({ content }: { content: any }) {
        return (
            <Section title={content.oprps.title} id="oprps">
                <p>{content.oprps.p1}</p>
                <SubHeading>{content.oprps.p2}</SubHeading>
                 {/* FIXED: Added overflow-x-auto and min-width to table for mobile scrolling */}
                 <div className="overflow-x-auto mt-4 rounded-lg border border-gray-200 w-full">
                    <Table className="min-w-[600px]">
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="font-bold whitespace-nowrap">{content.oprps.table.header1}</TableHead>
                                <TableHead className="font-bold whitespace-nowrap">{content.oprps.table.header2}</TableHead>
                                <TableHead className="font-bold whitespace-nowrap">{content.oprps.table.header3}</TableHead>
                                <TableHead className="font-bold whitespace-nowrap">{content.oprps.table.header4}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.oprps.table.rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{row.c1}</TableCell>
                                    <TableCell>{row.c2}</TableCell>
                                    <TableCell>{row.c3}</TableCell>
                                    <TableCell>{row.c4}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <SubHeading>{content.oprps.dairy_examples.title}</SubHeading>
                <ul className="list-disc list-inside space-y-2 bg-green-50 p-4 rounded-lg border border-green-100">
                    {content.oprps.dairy_examples.list.map((item: any, index: number) => (
                        <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                    ))}
                </ul>
            </Section>
        )
    },
    philosophy: function Content({ content }: { content: any }) {
        return (
            <>
                <Section title={content.deming.title} id="deming">
                    <p>{content.deming.p1}</p>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mt-4">
                        <SubHeading>{content.deming.cycle.title}</SubHeading>
                        <p>{content.deming.cycle.p1}</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li><strong>{content.deming.cycle.plan.title}:</strong> {content.deming.cycle.plan.description}</li>
                            <li><strong>{content.deming.cycle.do.title}:</strong> {content.deming.cycle.do.description}</li>
                            <li><strong>{content.deming.cycle.check.title}:</strong> {content.deming.cycle.check.description}</li>
                            <li><strong>{content.deming.cycle.act.title}:</strong> {content.deming.cycle.act.description}</li>
                        </ul>
                    </div>
                </Section>

                <Section title={content.juran.title} id="juran">
                    <p>{content.juran.p1}</p>
                    <div className="bg-violet-50 p-4 rounded-lg border border-violet-100 mt-4">
                        <SubHeading>{content.juran.trilogy.title}</SubHeading>
                        <p>{content.juran.trilogy.p1}</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            {content.juran.trilogy.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                        </ul>
                        <p className="mt-2 italic">{content.juran.p2}</p>
                    </div>
                </Section>
            </>
        )
    },
    tqm: function Content({ content }: { content: any }) {
        return (
            <Section title={content.tqm.title} id="tqm">
                <p>{content.tqm.p1}</p>
                <SubHeading>{content.tqm.principles.title}</SubHeading>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {content.tqm.principles.list.map((item: any, index: number) => (
                        <li key={index} className="bg-pink-50 p-3 rounded border border-pink-100 list-none">
                            <strong>{item.title}:</strong> <br/>
                            <span className="text-sm text-gray-600">{item.description}</span>
                        </li>
                    ))}
                </ul>
            </Section>
        )
    },
    haccp: function Content({ content }: { content: any }) {
        return (
            <Section title={content.haccp.title} id="haccp">
                <p>{content.haccp.p1}</p>
                <SubHeading>{content.haccp.principles.title}</SubHeading>
                <ol className="list-decimal list-inside space-y-3 mt-4">
                    {content.haccp.principles.list.map((item: any, index: number) => (
                        <li key={index} className="p-3 bg-red-50 rounded-lg border border-red-100">
                            <strong className="text-red-700">{item.title}</strong>
                            <p className="ml-4 text-sm text-gray-700 mt-1">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </Section>
        )
    },
    iso: function Content({ content }: { content: any }) {
        return (
            <Section title={content.iso.title} id="iso">
                <p>{content.iso.p1}</p>
                <p>{content.iso.p2}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <SubHeading>{content.iso.qms.title}</SubHeading>
                        <p>{content.iso.qms.p1}</p>
                        <p className="mt-2 font-semibold">{content.iso.qms.elementsTitle}:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                            {content.iso.qms.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <SubHeading>{content.iso.fsms.title}</SubHeading>
                        <p>{content.iso.fsms.p1}</p>
                        <p className="mt-2 font-semibold">{content.iso.fsms.elementsTitle}:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                            {content.iso.fsms.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                        </ul>
                        <p className="mt-4 text-sm italic">{content.iso.fsms.p2}</p>
                    </div>
                </div>
            </Section>
        )
    },
    bodies: function Content({ content }: { content: any }) {
        return (
            <Section title={content.regulatory_bodies.title} id="regulatory_bodies">
                <p>{content.regulatory_bodies.p1}</p>
                <div className="grid gap-4 mt-6">
                    <div className="bg-stone-50 p-4 rounded border border-stone-200">
                        <SubHeading>{content.regulatory_bodies.fssai.title}</SubHeading>
                        <p>{content.regulatory_bodies.fssai.p1}</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded border border-stone-200">
                        <SubHeading>{content.regulatory_bodies.bis.title}</SubHeading>
                        <p>{content.regulatory_bodies.bis.p1}</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded border border-stone-200">
                        <SubHeading>{content.regulatory_bodies.agmark.title}</SubHeading>
                        <p>{content.regulatory_bodies.agmark.p1}</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded border border-stone-200">
                        <SubHeading>{content.regulatory_bodies.mmpo.title}</SubHeading>
                        <p>{content.regulatory_bodies.mmpo.p1}</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded border border-stone-200">
                        <SubHeading>{content.regulatory_bodies.export_act.title}</SubHeading>
                        <p>{content.regulatory_bodies.export_act.p1}</p>
                    </div>
                </div>
            </Section>
        )
    },
    "5s": function Content({ content }: { content: any }) {
        return (
            <Section title={content.fiveS.title} id="5s">
                <p>{content.fiveS.p1}</p>
                <div className="grid gap-3 mt-4">
                    {content.fiveS.principles.list.map((item: any, index: number) => (
                        <div key={index} className="flex items-start p-3 bg-orange-50 rounded-lg border border-orange-100">
                            <span className="font-bold text-orange-600 text-lg mr-3">{index + 1}.</span>
                            <div>
                                <strong className="text-gray-900 block">{item.title} ({item.japanese})</strong>
                                <span className="text-gray-600 text-sm">{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        );
    },
    sop: function Content({ content }: { content: any }) {
        return (
            <Section title={content.sop.title} id="sop">
                <p>{content.sop.p1}</p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4">
                    <SubHeading>{content.sop.importance.title}</SubHeading>
                    <ul className="list-disc list-inside space-y-1">
                        {content.sop.importance.list.map((item: string, index: number) => <li key={index}>{item}</li>)}
                    </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4">
                    <SubHeading>{content.sop.structure.title}</SubHeading>
                    <ul className="list-disc list-inside space-y-1">
                          {content.sop.structure.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                </div>
            </Section>
        );
    },
    fifo_fefo: function Content({ content }: { content: any }) {
        return (
            <Section title={content.fifo_fefo.title} id="fifo-fefo">
                <p>{content.fifo_fefo.p1}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="p-5 border rounded-xl bg-amber-50 border-amber-100">
                        <h4 className="font-bold text-xl text-amber-700 mb-2">{content.fifo_fefo.fifo.title}</h4>
                        <p className="text-gray-700">{content.fifo_fefo.fifo.description}</p>
                    </div>
                     <div className="p-5 border rounded-xl bg-lime-50 border-lime-100">
                        <h4 className="font-bold text-xl text-lime-700 mb-2">{content.fifo_fefo.fefo.title}</h4>
                        <p className="text-gray-700">{content.fifo_fefo.fefo.description}</p>
                    </div>
                </div>
                 <p className="mt-6 bg-gray-50 p-4 rounded border"><strong>{content.fifo_fefo.dairy_importance.title}:</strong> {content.fifo_fefo.dairy_importance.description}</p>
            </Section>
        );
    },
    taccp_vaccp: function Content({ content }: { content: any }) {
        return (
            <Section title={content.taccp_vaccp.title} id="taccp-vaccp">
                <p>{content.taccp_vaccp.p1}</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 border rounded-xl bg-red-50 border-red-100">
                        <h4 className="font-bold text-xl text-red-700 flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5"/>
                            {content.taccp_vaccp.taccp.title}
                        </h4>
                        <p className="mt-2 text-red-900">{content.taccp_vaccp.taccp.description}</p>
                    </div>
                     <div className="p-5 border rounded-xl bg-yellow-50 border-yellow-100">
                        <h4 className="font-bold text-xl text-yellow-700 flex items-center gap-2">
                            <Zap className="w-5 h-5"/>
                            {content.taccp_vaccp.vaccp.title}
                        </h4>
                        <p className="mt-2 text-yellow-900">{content.taccp_vaccp.vaccp.description}</p>
                    </div>
                </div>
                <p className="mt-6 italic text-gray-500">{content.taccp_vaccp.p2}</p>
            </Section>
        );
    }
};

// --- Main Component ---

export function QualityConceptModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(qualityContent);
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
          icon: Book,
          // Blue Theme
          colorClass: "text-blue-600",
          bgClass: "bg-blue-50",
          borderClass: "border-blue-200",
          hoverClass: "hover:bg-blue-100"
      },
      { 
          value: "what_is_quality", 
          title: content.whatIsQuality.title, 
          icon: CheckSquare,
          // Indigo Theme
          colorClass: "text-indigo-600",
          bgClass: "bg-indigo-50",
          borderClass: "border-indigo-200",
          hoverClass: "hover:bg-indigo-100"
      },
      { 
          value: "qc", 
          title: content.tabs.qc, 
          icon: TestTube,
          // Cyan Theme
          colorClass: "text-cyan-600",
          bgClass: "bg-cyan-50",
          borderClass: "border-cyan-200",
          hoverClass: "hover:bg-cyan-100"
      },
      { 
          value: "qa", 
          title: content.tabs.qa, 
          icon: BadgeCheck,
          // Teal Theme
          colorClass: "text-teal-600",
          bgClass: "bg-teal-50",
          borderClass: "border-teal-200",
          hoverClass: "hover:bg-teal-100"
      },
      { 
          value: "prps", 
          title: content.tabs.prps, 
          icon: Settings,
          // Emerald Theme
          colorClass: "text-emerald-600",
          bgClass: "bg-emerald-50",
          borderClass: "border-emerald-200",
          hoverClass: "hover:bg-emerald-100"
      },
      { 
          value: "oprps", 
          title: content.tabs.oprps, 
          icon: ShieldCheck,
          // Green Theme
          colorClass: "text-green-600",
          bgClass: "bg-green-50",
          borderClass: "border-green-200",
          hoverClass: "hover:bg-green-100"
      },
      { 
          value: "5s", 
          title: content.tabs.fiveS, 
          icon: SortAsc,
          // Orange Theme
          colorClass: "text-orange-600",
          bgClass: "bg-orange-50",
          borderClass: "border-orange-200",
          hoverClass: "hover:bg-orange-100"
      },
      { 
          value: "sop", 
          title: content.tabs.sop, 
          icon: FileText,
          // Slate Theme
          colorClass: "text-slate-600",
          bgClass: "bg-slate-100",
          borderClass: "border-slate-300",
          hoverClass: "hover:bg-slate-200"
      },
      { 
          value: "fifo_fefo", 
          title: content.tabs.fifo_fefo, 
          icon: Forward,
          // Amber Theme
          colorClass: "text-amber-600",
          bgClass: "bg-amber-50",
          borderClass: "border-amber-200",
          hoverClass: "hover:bg-amber-100"
      },
      { 
          value: "philosophy", 
          title: content.tabs.philosophy, 
          icon: Users,
          // Violet Theme
          colorClass: "text-violet-600",
          bgClass: "bg-violet-50",
          borderClass: "border-violet-200",
          hoverClass: "hover:bg-violet-100"
      },
      { 
          value: "tqm", 
          title: content.tabs.tqm, 
          icon: Award,
          // Pink Theme
          colorClass: "text-pink-600",
          bgClass: "bg-pink-50",
          borderClass: "border-pink-200",
          hoverClass: "hover:bg-pink-100"
      },
      { 
          value: "haccp", 
          title: content.tabs.haccp, 
          icon: ShieldCheck,
          // Red Theme
          colorClass: "text-red-600",
          bgClass: "bg-red-50",
          borderClass: "border-red-200",
          hoverClass: "hover:bg-red-100"
      },
      { 
          value: "taccp_vaccp", 
          title: content.tabs.taccp_vaccp, 
          icon: ShieldAlert,
          // Rose Theme
          colorClass: "text-rose-600",
          bgClass: "bg-rose-50",
          borderClass: "border-rose-200",
          hoverClass: "hover:bg-rose-100"
      },
      { 
          value: "iso", 
          title: content.tabs.iso, 
          icon: FileSpreadsheet,
          // Purple Theme
          colorClass: "text-purple-600",
          bgClass: "bg-purple-50",
          borderClass: "border-purple-200",
          hoverClass: "hover:bg-purple-100"
      },
      { 
          value: "bodies", 
          title: content.tabs.bodies, 
          icon: Factory,
          // Stone Theme
          colorClass: "text-stone-600",
          bgClass: "bg-stone-100",
          borderClass: "border-stone-300",
          hoverClass: "hover:bg-stone-200"
      }
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
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
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-2 font-headline">{content.title}</DialogTitle>
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
                    <div className="p-4 pt-0 sm:p-0">
                        <ActiveComponent content={content} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4" viewportRef={scrollAreaRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4 sm:p-2">
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
