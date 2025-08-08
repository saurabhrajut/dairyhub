
"use client";

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const TestProcedure = ({ test }: { test: any }) => (
    <AccordionItem value={test.id}>
        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{test.title}</AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none">
                <h4 className="font-bold">Siddhant (Principle):</h4>
                <p>{test.principle}</p>
                <h4 className="font-bold mt-4">Prakriya (Procedure):</h4>
                <div dangerouslySetInnerHTML={{ __html: test.procedure }} />
                <h4 className="font-bold mt-4">Ganana (Calculation):</h4>
                <pre className="bg-muted p-3 rounded-lg font-mono text-sm text-primary" dangerouslySetInnerHTML={{ __html: test.calculation }}/>
            </div>
        </AccordionContent>
    </AccordionItem>
);

export function MicrobiologyTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(microbiologyContent);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 mt-4 pr-6">
            <Accordion type="single" collapsible className="w-full" defaultValue={content.sections[0].id}>
                {content.sections.map((section) => (
                     <AccordionItem key={section.id} value={section.id}>
                        <AccordionTrigger className="text-xl font-bold hover:no-underline font-headline text-left">
                           {section.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                                 dangerouslySetInnerHTML={{ __html: section.content }} />
                            {section.table && (
                                <Table className="mt-4">
                                    <TableHeader>
                                        <TableRow>
                                            {section.table.headers.map(header => <TableHead key={header}>{header}</TableHead>)}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {section.table.rows.map((row, index) => (
                                            <TableRow key={index}>
                                                {row.map(cell => <TableCell key={cell}>{cell}</TableCell>)}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            
            <section className="mt-10">
                <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{content.testMethods.title}</h2>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                     <p>{content.testMethods.intro}</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                        {content.testMethods.tests.map((test, index) => (
                           <TestProcedure key={index} test={test} />
                        ))}
                    </Accordion>
                </div>
            </section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
