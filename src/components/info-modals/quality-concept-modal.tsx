
"use client";

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


const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <section id={id} className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        <div className="space-y-4">{children}</div>
    </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{children}</h3>
);


export function QualityConceptModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(qualityContent);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">{content.title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full pr-6 mt-4">
            <div className="prose max-w-none text-gray-700 text-base leading-relaxed">
                <p>{content.intro1}</p>
                <p>{content.intro2}</p>
                <p>{content.intro3}</p>
                 <ul className="list-disc list-inside mt-2 space-y-1">
                    {content.introBenefits.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

                <Section title={content.whatIsQuality.title} id="quality">
                    <p>{content.whatIsQuality.p1}</p>
                    <blockquote className="border-l-4 border-primary bg-muted p-4 my-4">
                        Quality $\propto$ 1 / {content.whatIsQuality.variability}
                    </blockquote>
                    <p>{content.whatIsQuality.p2}</p>
                    <p>{content.whatIsQuality.p3}</p>
                    <p>{content.whatIsQuality.p4}</p>
                </Section>

                <Section title={content.qc.title} id="qc">
                    <p>{content.qc.p1}</p>
                    <p>{content.qc.p2}</p>
                    
                    <SubHeading>{content.qc.responsibilities.title}</SubHeading>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        {content.qc.responsibilities.list.map((item, index) => <li key={index}>{item}</li>)}
                    </ol>
                </Section>
                
                <Section title={content.qa.title} id="qa">
                     <p>{content.qa.p1}</p>
                     <p>{content.qa.p2}</p>

                    <Table>
                        <TableCaption>{content.qa.table.caption}</TableCaption>
                        <TableHeader>
                            <TableRow><TableHead>{content.qa.table.header1}</TableHead><TableHead>{content.qa.table.header2}</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.qa.table.rows.map((row, index) => (
                                <TableRow key={index}><TableCell>{row.qc}</TableCell><TableCell>{row.qa}</TableCell></TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Section>
                
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
                        {content.juran.trilogy.list.map((item, index) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                    <p>{content.juran.p2}</p>
                </Section>

                <Section title={content.tqm.title} id="tqm">
                    <p>{content.tqm.p1}</p>
                    <SubHeading>{content.tqm.principles.title}</SubHeading>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        {content.tqm.principles.list.map((item, index) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                </Section>
                
                 <Section title={content.iso.title} id="iso">
                    <p>{content.iso.p1}</p>
                    
                    <SubHeading>{content.iso.qms.title}</SubHeading>
                    <p>{content.iso.qms.p1}</p>
                    <p><strong>{content.iso.qms.elementsTitle}:</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        {content.iso.qms.list.map((item, index) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>

                    <SubHeading>{content.iso.fsms.title}</SubHeading>
                    <p>{content.iso.fsms.p1}</p>
                    <p><strong>{content.iso.fsms.elementsTitle}:</strong></p>
                     <ul className="list-disc list-inside space-y-2">
                        {content.iso.fsms.list.map((item, index) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                    <p className="mt-4">{content.iso.fsms.p2}</p>
                </Section>

                 <Section title={content.haccp.title} id="haccp">
                    <p>{content.haccp.p1}</p>
                    <SubHeading>{content.haccp.principles.title}</SubHeading>
                    <ol className="list-decimal list-inside space-y-3">
                        {content.haccp.principles.list.map((item, index) => (
                             <li key={index}>
                                <strong className="text-blue-600">{item.title}</strong>
                                <p className="ml-4">{item.description}</p>
                            </li>
                        ))}
                    </ol>
                </Section>

                <Section title={content.prps.title} id="prps">
                    <p>{content.prps.p1}</p>
                    <SubHeading>{content.prps.prp.title}</SubHeading>
                    <p>{content.prps.prp.p1}</p>
                    <ul className="list-disc list-inside space-y-2">
                        {content.prps.prp.list.map((item, index) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>

                    <SubHeading>{content.prps.oprp.title}</SubHeading>
                    <p>{content.prps.oprp.p1}</p>
                    <ul className="list-disc list-inside space-y-2">
                         {content.prps.oprp.list.map((item, index) => <li key={index}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                </Section>

                <Section title={content.ccps.title} id="ccps">
                    <p>{content.ccps.p1}</p>
                     <ol className="list-decimal list-inside space-y-3">
                        {content.ccps.list.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}</strong>
                                <p className="ml-4">{item.description}</p>
                            </li>
                        ))}
                    </ol>
                </Section>

            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

    
