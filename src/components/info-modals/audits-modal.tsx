
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
import { auditsModalContent } from "@/lib/content/audits-modal-content";


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

export function AuditsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(auditsModalContent);
  
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
            <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="intro">{content.tabs.intro}</TabsTrigger>
              <TabsTrigger value="regulatory">{content.tabs.regulatory}</TabsTrigger>
              <TabsTrigger value="internal">{content.tabs.internal}</TabsTrigger>
              <TabsTrigger value="external">{content.tabs.external}</TabsTrigger>
              <TabsTrigger value="focus_areas">{content.tabs.focus_areas}</TabsTrigger>
              <TabsTrigger value="challenges">{content.tabs.challenges}</TabsTrigger>
              <TabsTrigger value="conclusion">{content.tabs.conclusion}</TabsTrigger>
              <TabsTrigger value="recommendations">{content.tabs.recommendations}</TabsTrigger>
            </TabsList>
          </ScrollArea>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">
                <TabsContent value="intro" className="mt-0">
                    <Section title={content.sections.executive_summary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.executive_summary.content }}/>
                    </Section>
                    <Section title={content.sections.introduction.title}>
                         <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }}/>
                        <SubSection title={content.sections.introduction.subsections.purpose_and_benefits.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.purpose_and_benefits.content }}/>
                        </SubSection>
                        <SubSection title={content.sections.introduction.subsections.distinction_audits.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.distinction_audits.content }}/>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="regulatory" className="mt-0">
                    <Section title={content.sections.regulatory_frameworks.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.content }}/>
                        <SubSection title={content.sections.regulatory_frameworks.subsections.fssai.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.fssai.content }}/>
                        </SubSection>
                        <SubSection title={content.sections.regulatory_frameworks.subsections.iso22000.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.iso22000.content }}/>
                        </SubSection>
                        <SubSection title={content.sections.regulatory_frameworks.subsections.haccp.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.haccp.content }}/>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="internal" className="mt-0">
                     <Section title={content.sections.internal_audits.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.content }}/>
                        <SubSection title={content.sections.internal_audits.subsections.purpose.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.subsections.purpose.content }}/>
                        </SubSection>
                        <SubSection title={content.sections.internal_audits.subsections.process.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.subsections.process.content }}/>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="external" className="mt-0">
                    <Section title={content.sections.external_audits.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.content }}/>
                         <SubSection title={content.sections.external_audits.subsections.types.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.types.content }}/>
                        </SubSection>
                         <SubSection title={content.sections.external_audits.subsections.process.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.process.content }}/>
                        </SubSection>
                         <SubSection title={content.sections.external_audits.subsections.fssai_system.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.fssai_system.content }}/>
                             <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader><TableRow><TableHead>Audit Score Range</TableHead><TableHead>Recommended Audit Frequency (Dairy)</TableHead></TableRow></TableHeader>
                                    <TableBody>
                                        <TableRow><td>81-100%</td><td>Once in 12 months</td></TableRow>
                                        <TableRow><td>51-80%</td><td>Once in 9 months</td></TableRow>
                                        <TableRow><td>&lt;50%</td><td>Once in 6 months</td></TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="focus_areas" className="mt-0">
                    <Section title={content.sections.focus_areas.title}>
                         <div dangerouslySetInnerHTML={{ __html: content.sections.focus_areas.content }}/>
                    </Section>
                </TabsContent>
                 <TabsContent value="challenges" className="mt-0">
                     <Section title={content.sections.challenges.title}>
                         <SubSection title={content.sections.challenges.subsections.common_challenges.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.common_challenges.content }}/>
                        </SubSection>
                        <SubSection title={content.sections.challenges.subsections.best_practices.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.best_practices.content }}/>
                        </SubSection>
                         <SubSection title={content.sections.challenges.subsections.fostering_culture.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.fostering_culture.content }}/>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="conclusion" className="mt-0">
                     <Section title={content.sections.conclusion.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }}/>
                    </Section>
                </TabsContent>
                 <TabsContent value="recommendations" className="mt-0">
                    <Section title={content.sections.recommendations.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.recommendations.content }}/>
                    </Section>
                </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
