
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from "@/context/language-context";
import { fermentedProductsModalContent } from "@/lib/content/fermented-products-modal-content";

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

export function FermentedProductsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(fermentedProductsModalContent);
  
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
            <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              <TabsTrigger value="intro">{content.tabs.intro}</TabsTrigger>
              <TabsTrigger value="processing">{content.tabs.processing}</TabsTrigger>
              <TabsTrigger value="quality-control">{content.tabs.quality_control}</TabsTrigger>
              <TabsTrigger value="defects">{content.tabs.defects}</TabsTrigger>
              <TabsTrigger value="shelf-life">{content.tabs.shelf_life}</TabsTrigger>
              <TabsTrigger value="yield">{content.tabs.yield}</TabsTrigger>
              <TabsTrigger value="innovations">{content.tabs.innovations}</TabsTrigger>
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
                    <SubSection title={content.sections.introduction.table.title}>
                        <p>{content.sections.introduction.table.description}</p>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader><TableRow>
                                  {content.sections.introduction.table.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                                </TableRow></TableHeader>
                                <TableBody>
                                    {content.sections.introduction.table.rows.map((row: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell>{row[0]}</TableCell>
                                            <TableCell>{row[1]}</TableCell>
                                            <TableCell>{row[2]}</TableCell>
                                            <TableCell>{row[3]}</TableCell>
                                            <TableCell>{row[4]}</TableCell>
                                            <TableCell>{row[5]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="processing" className="mt-0">
                 <Section title={content.sections.processing.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.processing.content }} />
                    <SubSection title={content.sections.processing.subsections.raw_milk_prep.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.raw_milk_prep.content }} />
                    </SubSection>
                     <SubSection title={content.sections.processing.subsections.pre_fermentation.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.pre_fermentation.content }} />
                     </SubSection>
                     <SubSection title={content.sections.processing.subsections.fermentation_process.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.fermentation_process.content }} />
                     </SubSection>
                     <SubSection title={content.sections.processing.subsections.post_fermentation.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.post_fermentation.content }} />
                     </SubSection>
                     <SubSection title={content.sections.processing.subsections.packaging.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.packaging.content }} />
                     </SubSection>
                 </Section>
              </TabsContent>
              
              <TabsContent value="quality-control">
                  <Section title={content.sections.quality_control.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.quality_control.content }} />
                        <SubSection title={content.sections.quality_control.subsections.assessment.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.quality_control.subsections.assessment.content }} />
                        </SubSection>
                         <SubSection title={content.sections.quality_control.subsections.hygiene.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.sections.quality_control.subsections.hygiene.content }} />
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="defects">
                  <Section title={content.sections.defects.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.defects.content }} />
                        <SubSection title={content.sections.defects.subsections.sourness.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.defects.subsections.sourness.content }} />
                        </SubSection>
                        <SubSection title={content.sections.defects.subsections.bitterness.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.defects.subsections.bitterness.content }} />
                        </SubSection>
                         <SubSection title={content.sections.defects.subsections.syneresis.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.defects.subsections.syneresis.content }} />
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="shelf-life">
                  <Section title={content.sections.shelf_life.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.content }} />
                         <SubSection title={content.sections.shelf_life.subsections.lactic_acid.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.subsections.lactic_acid.content }} />
                        </SubSection>
                        <SubSection title={content.sections.shelf_life.subsections.thermization.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.subsections.thermization.content }} />
                        </SubSection>
                        <SubSection title={content.sections.shelf_life.subsections.aseptic.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.subsections.aseptic.content }} />
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="yield">
                  <Section title={content.sections.yield.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.yield.content }} />
                        <SubSection title={content.sections.yield.subsections.composition.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.composition.content }} />
                        </SubSection>
                         <SubSection title={content.sections.yield.subsections.parameters.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.parameters.content }} />
                        </SubSection>
                         <SubSection title={content.sections.yield.subsections.culture.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.culture.content }} />
                        </SubSection>
                         <SubSection title={content.sections.yield.subsections.stabilizers.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.stabilizers.content }} />
                        </SubSection>
                  </Section>
              </TabsContent>
              
              <TabsContent value="innovations">
                  <Section title={content.sections.innovations.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.content }} />
                        <SubSection title={content.sections.innovations.subsections.techniques.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.techniques.content }} />
                        </SubSection>
                        <SubSection title={content.sections.innovations.subsections.fortification.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.fortification.content }} />
                        </SubSection>
                        <SubSection title={content.sections.innovations.subsections.technologies.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.technologies.content }} />
                        </SubSection>
                        <SubSection title={content.sections.innovations.subsections.packaging.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.packaging.content }} />
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
