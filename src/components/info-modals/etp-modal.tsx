
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from "@/context/language-context";
import { etpModalContent } from "@/lib/content/etp-modal-content";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        {children}
    </div>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{title}</h3>
        {children}
    </>
);

export function EtpModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(etpModalContent);
  
  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.description}
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
          <ScrollArea className="flex-shrink-0">
            <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <TabsTrigger value="intro">{content.tabs.intro}</TabsTrigger>
              <TabsTrigger value="processes">{content.tabs.processes}</TabsTrigger>
              <TabsTrigger value="benefits">{content.tabs.benefits}</TabsTrigger>
              <TabsTrigger value="factors">{content.tabs.factors}</TabsTrigger>
              <TabsTrigger value="challenges">{content.tabs.challenges}</TabsTrigger>
              <TabsTrigger value="future">{content.tabs.future}</TabsTrigger>
            </TabsList>
          </ScrollArea>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">

              <TabsContent value="intro" className="mt-0">
                <Section title={content.sections.executive_summary.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.executive_summary.content }} />
                </Section>
                 <Section title={content.sections.introduction.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }} />
                    <SubSection title={content.sections.introduction.subsections.characteristics.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.characteristics.content }} />
                        <div className="overflow-x-auto">
                           <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header1}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header2}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header3}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header4}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header5}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header6}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.sections.introduction.subsections.characteristics.table.rows.map((row: any, index: number) => (
                                      <TableRow key={index}>
                                        <TableCell>{row.param}</TableCell>
                                        <TableCell>{row.butter}</TableCell>
                                        <TableCell>{row.cream}</TableCell>
                                        <TableCell>{row.milk}</TableCell>
                                        <TableCell>{row.cheese}</TableCell>
                                        <TableCell>{row.powdered}</TableCell>
                                      </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="processes" className="mt-0">
                <Section title={content.sections.treatment_processes.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.content }} />
                    <SubSection title={content.sections.treatment_processes.subsections.preliminary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.preliminary.content }} />
                    </SubSection>
                    <SubSection title={content.sections.treatment_processes.subsections.primary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.primary.content }} />
                    </SubSection>
                    <SubSection title={content.sections.treatment_processes.subsections.secondary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.secondary.content }} />
                    </SubSection>
                    <SubSection title={content.sections.treatment_processes.subsections.tertiary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.tertiary.content }} />
                    </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-0">
                  <Section title={content.sections.benefits.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.content }} />
                        <SubSection title={content.sections.benefits.subsections.environmental.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.environmental.content }} />
                        </SubSection>
                         <SubSection title={content.sections.benefits.subsections.economic.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.economic.content }} />
                        </SubSection>
                        <SubSection title={content.sections.benefits.subsections.operational.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.operational.content }} />
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="factors" className="mt-0">
                  <Section title={content.sections.key_factors.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.content }} />
                        <SubSection title={content.sections.key_factors.subsections.characteristics.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.characteristics.content }} />
                        </SubSection>
                        <SubSection title={content.sections.key_factors.subsections.compliance.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.compliance.content }} />
                             <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>{content.sections.key_factors.subsections.compliance.table.header1}</TableHead>
                                            <TableHead>{content.sections.key_factors.subsections.compliance.table.header2}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {content.sections.key_factors.subsections.compliance.table.rows.map((row: any, index: number) => (
                                        <TableRow key={index}>
                                          <TableCell>{row.param}</TableCell>
                                          <TableCell>{row.limit}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </SubSection>
                        <SubSection title={content.sections.key_factors.subsections.technology.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.technology.content }} />
                        </SubSection>
                  </Section>
              </TabsContent>

               <TabsContent value="challenges" className="mt-0">
                  <Section title={content.sections.challenges.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.content }} />
                  </Section>
              </TabsContent>
              
               <TabsContent value="future" className="mt-0">
                  <Section title={content.sections.future_outlook.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.content }} />
                    <SubSection title={content.sections.future_outlook.subsections.innovations.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.subsections.innovations.content }} />
                    </SubSection>
                     <SubSection title={content.sections.future_outlook.subsections.conclusion.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.subsections.conclusion.content }} />
                    </SubSection>
                  </Section>
              </TabsContent>

            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

    