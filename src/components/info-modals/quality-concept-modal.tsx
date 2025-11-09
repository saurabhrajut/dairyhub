
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
import { ArrowLeft, Book, Award, ShieldCheck, CheckSquare, Settings, Users, TestTube, ClipboardCheck, Droplet, PackageCheck, Lock, DollarSign, Microscope, Recycle, Bug, FileSpreadsheet, Search, Wind, Factory, SortAsc, FileText, Forward, ShieldAlert, BadgeCheck } from "lucide-react";


const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div id={id} className="prose max-w-none text-gray-700 text-base leading-relaxed break-words">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        <div className="space-y-4">{children}</div>
    </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{children}</h3>
);

const topicComponents = {
    intro: function Content({ content }: { content: any }) {
        return (
             <div className="prose max-w-none text-gray-700 text-base leading-relaxed break-words">
                <p>{content.intro1}</p>
                <p>{content.intro2}</p>
                <p>{content.intro3}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    {content.introBenefits.map((item:any, index:number) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    },
    what_is_quality: function Content({ content }: { content: any }) {
        return (
            <Section title={content.whatIsQuality.title} id="quality">
                <p>{content.whatIsQuality.p1}</p>
                <blockquote className="border-l-4 border-primary bg-muted p-4 my-4">
                    Quality &prop; 1 / {content.whatIsQuality.variability}
                </blockquote>
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
                <ol className="list-decimal list-inside space-y-2 mt-2">
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
                <div className="overflow-x-auto">
                    <Table>
                        <TableCaption>{content.qa.table.caption}</TableCaption>
                        <TableHeader>
                            <TableRow><TableHead>{content.qa.table.header1}</TableHead><TableHead>{content.qa.table.header2}</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.qa.table.rows.map((row: any, index: number) => (
                                <TableRow key={index}><TableCell>{row.qc}</TableCell><TableCell>{row.qa}</TableCell></TableRow>
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
                <SubHeading>{content.prps.gmp.title}</SubHeading>
                <p>{content.prps.gmp.p1}</p>
                <ul className="list-disc list-inside space-y-2">
                    {content.prps.gmp.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                </ul>

                <SubHeading>{content.prps.ghp.title}</SubHeading>
                <p>{content.prps.ghp.p1}</p>
                <ul className="list-disc list-inside space-y-2">
                    {content.prps.ghp.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                </ul>

                <SubHeading>{content.prps.glp.title}</SubHeading>
                <p>{content.prps.glp.p1}</p>
                <ul className="list-disc list-inside space-y-2">
                    {content.prps.glp.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                </ul>
            </Section>
        )
    },
    oprps: function Content({ content }: { content: any }) {
        return (
            <Section title={content.oprps.title} id="oprps">
                <p>{content.oprps.p1}</p>
                <SubHeading>{content.oprps.p2}</SubHeading>
                 <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{content.oprps.table.header1}</TableHead>
                                <TableHead>{content.oprps.table.header2}</TableHead>
                                <TableHead>{content.oprps.table.header3}</TableHead>
                                <TableHead>{content.oprps.table.header4}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.oprps.table.rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{row.c1}</TableCell>
                                    <TableCell>{row.c2}</TableCell>
                                    <TableCell>{row.c3}</TableCell>
                                    <TableCell>{row.c4}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <SubHeading>{content.oprps.dairy_examples.title}</SubHeading>
                <ul className="list-disc list-inside space-y-2">
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
                    <SubHeading>{content.deming.cycle.title}</SubHeading>
                    <p>{content.deming.cycle.p1}</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li><strong>{content.deming.cycle.plan.title}:</strong> {content.deming.cycle.plan.description}</li>
                        <li><strong>{content.deming.cycle.do.title}:</strong> {content.deming.cycle.do.description}</li>
                        <li><strong>{content.deming.cycle.check.title}:</strong> {content.deming.cycle.check.description}</li>
                        <li><strong>{content.deming.cycle.act.title}:</strong> {content.deming.cycle.act.description}</li>
                    </ul>
                </Section>

                <Section title={content.juran.title} id="juran">
                    <p>{content.juran.p1}</p>
                    <SubHeading>{content.juran.trilogy.title}</SubHeading>
                    <p>{content.juran.trilogy.p1}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        {content.juran.trilogy.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                    <p>{content.juran.p2}</p>
                </Section>
            </>
        )
    },
    tqm: function Content({ content }: { content: any }) {
        return (
            <Section title={content.tqm.title} id="tqm">
                <p>{content.tqm.p1}</p>
                <SubHeading>{content.tqm.principles.title}</SubHeading>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    {content.tqm.principles.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                </ul>
            </Section>
        )
    },
    haccp: function Content({ content }: { content: any }) {
        return (
            <Section title={content.haccp.title} id="haccp">
                <p>{content.haccp.p1}</p>
                <SubHeading>{content.haccp.principles.title}</SubHeading>
                <ol className="list-decimal list-inside space-y-3">
                    {content.haccp.principles.list.map((item: any, index: number) => (
                        <li key={index}>
                            <strong className="text-blue-600">{item.title}</strong>
                            <p className="ml-4">{item.description}</p>
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
                
                <SubHeading>{content.iso.qms.title}</SubHeading>
                <p>{content.iso.qms.p1}</p>
                <p><strong>{content.iso.qms.elementsTitle}:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    {content.iso.qms.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                </ul>

                <SubHeading>{content.iso.fsms.title}</SubHeading>
                <p>{content.iso.fsms.p1}</p>
                <p><strong>{content.iso.fsms.elementsTitle}:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                    {content.iso.fsms.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                </ul>
                <p className="mt-4">{content.iso.fsms.p2}</p>
            </Section>
        )
    },
    bodies: function Content({ content }: { content: any }) {
        return (
            <Section title={content.regulatory_bodies.title} id="regulatory_bodies">
                <p>{content.regulatory_bodies.p1}</p>
                <SubHeading>{content.regulatory_bodies.fssai.title}</SubHeading>
                <p>{content.regulatory_bodies.fssai.p1}</p>
                <SubHeading>{content.regulatory_bodies.bis.title}</SubHeading>
                <p>{content.regulatory_bodies.bis.p1}</p>
                <SubHeading>{content.regulatory_bodies.agmark.title}</SubHeading>
                <p>{content.regulatory_bodies.agmark.p1}</p>
                <SubHeading>{content.regulatory_bodies.mmpo.title}</SubHeading>
                <p>{content.regulatory_bodies.mmpo.p1}</p>
                <SubHeading>{content.regulatory_bodies.export_act.title}</SubHeading>
                <p>{content.regulatory_bodies.export_act.p1}</p>
            </Section>
        )
    },
    "5s": function Content({ content }: { content: any }) {
        return (
            <Section title={content.fiveS.title} id="5s">
                <p>{content.fiveS.p1}</p>
                <ul className="list-decimal list-inside space-y-3 mt-4">
                    {content.fiveS.principles.list.map((item: any, index: number) => (
                        <li key={index}>
                            <strong className="text-blue-600">{item.title} ({item.japanese}):</strong>
                            <p className="ml-4">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </Section>
        );
    },
    sop: function Content({ content }: { content: any }) {
        return (
            <Section title={content.sop.title} id="sop">
                <p>{content.sop.p1}</p>
                <SubHeading>{content.sop.importance.title}</SubHeading>
                <ul className="list-disc list-inside space-y-2">
                    {content.sop.importance.list.map((item: string, index: number) => <li key={index}>{item}</li>)}
                </ul>
                <SubHeading>{content.sop.structure.title}</SubHeading>
                <ul className="list-disc list-inside space-y-2">
                     {content.sop.structure.list.map((item: any, index: number) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                </ul>
            </Section>
        );
    },
    fifo_fefo: function Content({ content }: { content: any }) {
        return (
            <Section title={content.fifo_fefo.title} id="fifo-fefo">
                <p>{content.fifo_fefo.p1}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="p-4 border rounded-lg bg-blue-50">
                        <h4 className="font-bold text-lg text-blue-700">{content.fifo_fefo.fifo.title}</h4>
                        <p className="mt-2">{content.fifo_fefo.fifo.description}</p>
                    </div>
                     <div className="p-4 border rounded-lg bg-green-50">
                        <h4 className="font-bold text-lg text-green-700">{content.fifo_fefo.fefo.title}</h4>
                        <p className="mt-2">{content.fifo_fefo.fefo.description}</p>
                    </div>
                </div>
                 <p className="mt-4"><strong>{content.fifo_fefo.dairy_importance.title}:</strong> {content.fifo_fefo.dairy_importance.description}</p>
            </Section>
        );
    },
    taccp_vaccp: function Content({ content }: { content: any }) {
        return (
            <Section title={content.taccp_vaccp.title} id="taccp-vaccp">
                <p>{content.taccp_vaccp.p1}</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="p-4 border rounded-lg bg-red-50">
                        <h4 className="font-bold text-lg text-red-700">{content.taccp_vaccp.taccp.title}</h4>
                        <p className="mt-2">{content.taccp_vaccp.taccp.description}</p>
                    </div>
                     <div className="p-4 border rounded-lg bg-yellow-50">
                        <h4 className="font-bold text-lg text-yellow-700">{content.taccp_vaccp.vaccp.title}</h4>
                        <p className="mt-2">{content.taccp_vaccp.vaccp.description}</p>
                    </div>
                </div>
                <p className="mt-4">{content.taccp_vaccp.p2}</p>
            </Section>
        );
    }
};

export function QualityConceptModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(qualityContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
      { value: "intro", title: content.tabs.intro, icon: Book },
      { value: "what_is_quality", title: content.whatIsQuality.title, icon: CheckSquare },
      { value: "qc", title: content.tabs.qc, icon: TestTube },
      { value: "qa", title: content.tabs.qa, icon: BadgeCheck },
      { value: "prps", title: content.tabs.prps, icon: Settings },
      { value: "oprps", title: content.tabs.oprps, icon: ShieldCheck },
      { value: "5s", title: content.tabs.fiveS, icon: SortAsc },
      { value: "sop", title: content.tabs.sop, icon: FileText },
      { value: "fifo_fefo", title: content.tabs.fifo_fefo, icon: Forward },
      { value: "philosophy", title: content.tabs.philosophy, icon: Users },
      { value: "tqm", title: content.tabs.tqm, icon: Award },
      { value: "haccp", title: content.tabs.haccp, icon: ShieldCheck },
      { value: "taccp_vaccp", title: content.tabs.taccp_vaccp, icon: ShieldAlert },
      { value: "iso", title: content.tabs.iso, icon: FileSpreadsheet },
      { value: "bodies", title: content.tabs.bodies, icon: Factory }
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
      <DialogContent className="max-w-4xl lg:max-w-5xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">{content.title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={handleBack}>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 sm:p-0">
                    {topics.map(topic => (
                        <button
                          key={topic.value}
                          onClick={() => handleSelectTopic(topic.value)}
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
