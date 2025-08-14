
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
import { validationVerificationContent } from "@/lib/content/validation-verification-content";


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

export function ValidationVerificationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(validationVerificationContent);
  
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
            <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <TabsTrigger value="intro">{content.tabs.intro}</TabsTrigger>
              <TabsTrigger value="raw-milk">{content.tabs.raw_milk}</TabsTrigger>
              <TabsTrigger value="processing">{content.tabs.processing}</TabsTrigger>
              <TabsTrigger value="storage">{content.tabs.storage}</TabsTrigger>
              <TabsTrigger value="conclusion">{content.tabs.conclusion}</TabsTrigger>
            </TabsList>
          </ScrollArea>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">

              <TabsContent value="intro" className="mt-0">
                <Section title={content.sections.introduction.title}>
                  <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }}/>
                  <SubSection title={content.sections.introduction.subsections.defining.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.defining.content }}/>
                  </SubSection>

                  <SubSection title={content.sections.introduction.subsections.indispensable_role.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.indispensable_role.content }}/>
                  </SubSection>

                   <SubSection title={content.sections.introduction.subsections.regulatory_frameworks.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.regulatory_frameworks.content }}/>
                  </SubSection>
                  
                  <div className="overflow-x-auto mt-6">
                    <Table>
                        <TableHeader><TableRow><TableHead colSpan={3} className="text-center">Table 1: Key Distinctions: Validation vs. Verification</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-bold">Feature</TableCell><TableCell className="font-bold">Validation</TableCell><TableCell className="font-bold">Verification</TableCell></TableRow>
                            <TableRow><TableCell>Definition</TableCell><TableCell>Gathering scientific and technical evidence to prove a control measure or plan is capable of controlling a specific food safety hazard.</TableCell><TableCell>Routine checks, tests, and observations to confirm a validated plan is implemented correctly and consistently.</TableCell></TableRow>
                            <TableRow><TableCell>Primary Question</TableCell><TableCell>"Is our plan effective?"</TableCell><TableCell>"Are we following our plan?"</TableCell></TableRow>
                            <TableRow><TableCell>Focus</TableCell><TableCell>Design and accuracy of the food safety plan; theoretical soundness.</TableCell><TableCell>Implementation and consistency of the food safety plan; practical adherence.</TableCell></TableRow>
                            <TableRow><TableCell>Timing</TableCell><TableCell>Primarily before implementation of a new process or control; also upon significant changes.</TableCell><TableCell>Ongoing, routine activities performed daily, weekly, or at other defined frequencies.</TableCell></TableRow>
                            <TableRow><TableCell>Methods (Examples)</TableCell><TableCell>Citing scientific literature, regulatory guidance, mathematical models, in-plant tests, expert consultation, challenge studies.</TableCell><TableCell>Calibration checks, product sampling, record review, visual inspections, environmental monitoring, audits.</TableCell></TableRow>
                        </TableBody>
                    </Table>
                  </div>
                </Section>
              </TabsContent>

              <TabsContent value="raw-milk" className="mt-0">
                <Section title={content.sections.raw_milk_handling.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.content }}/>
                    <SubSection title={content.sections.raw_milk_handling.subsections.quality_control.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.subsections.quality_control.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.raw_milk_handling.subsections.tanker_cleaning.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.subsections.tanker_cleaning.content }}/>
                    </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="processing" className="mt-0">
                <Section title={content.sections.processing.title}>
                  <div dangerouslySetInnerHTML={{ __html: content.sections.processing.content }}/>
                  <SubSection title={content.sections.processing.subsections.thermal.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.thermal.content }}/>
                  </SubSection>
                  <SubSection title={content.sections.processing.subsections.non_thermal.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.non_thermal.content }}/>
                  </SubSection>
                  <SubSection title={content.sections.processing.subsections.homogenization.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.homogenization.content }}/>
                  </SubSection>
                  <SubSection title={content.sections.processing.subsections.cip_cop.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.cip_cop.content }}/>
                  </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="storage" className="mt-0">
                <Section title={content.sections.storage.title}>
                  <div dangerouslySetInnerHTML={{ __html: content.sections.storage.content }}/>
                  <SubSection title={content.sections.storage.subsections.cold_chain.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.cold_chain.content }}/>
                  </SubSection>
                   <SubSection title={content.sections.storage.subsections.calibration.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.calibration.content }}/>
                  </SubSection>
                  <SubSection title={content.sections.storage.subsections.microbiological.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.microbiological.content }}/>
                  </SubSection>
                  <SubSection title={content.sections.storage.subsections.allergen.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.allergen.content }}/>
                  </SubSection>
                  <SubSection title={content.sections.storage.subsections.shelf_life.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.shelf_life.content }}/>
                  </SubSection>
                   <SubSection title={content.sections.storage.subsections.documentation.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.documentation.content }}/>
                  </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="conclusion" className="mt-0">
                <Section title={content.sections.conclusion.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }}/>
                </Section>
              </TabsContent>

            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
