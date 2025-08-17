
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
import { evaporationDryingContent } from "@/lib/content/evaporation-drying-content";

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


export function EvaporationDryingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(evaporationDryingContent);

  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.description}
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-shrink-0">
                <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-2 sm:p-0">
                    <TabsTrigger value="intro">{content.tabs.intro}</TabsTrigger>
                    <TabsTrigger value="evaporated-milk">{content.tabs.evaporated_milk}</TabsTrigger>
                    <TabsTrigger value="milk-powder">{content.tabs.milk_powder}</TabsTrigger>
                    <TabsTrigger value="whey-processing">{content.tabs.whey_processing}</TabsTrigger>
                    <TabsTrigger value="casein-production">{content.tabs.casein_production}</TabsTrigger>
                    <TabsTrigger value="drying-principles">{content.tabs.drying_principles}</TabsTrigger>
                </TabsList>
            </ScrollArea>
          <ScrollArea className="flex-1 mt-4 sm:pr-4">
            <div className="prose prose-sm max-w-none break-words p-4 sm:p-0">

              <TabsContent value="intro" className="mt-0">
                <Section title={content.sections.introduction.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }} />
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {content.sections.introduction.table.headers.map((header: string) => <TableHead key={header}>{header}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {content.sections.introduction.table.rows.map((row: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.product_type}</TableCell>
                                        <TableCell>{row.base_material}</TableCell>
                                        <TableCell>{row.water_reduction}</TableCell>
                                        <TableCell>{row.characteristics}</TableCell>
                                        <TableCell>{row.fat_content}</TableCell>
                                        <TableCell>{row.protein_content}</TableCell>
                                        <TableCell>{row.shelf_life}</TableCell>
                                        <TableCell>{row.refrigeration_required}</TableCell>
                                        <TableCell>{row.primary_uses}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Section>
              </TabsContent>

              <TabsContent value="evaporated-milk" className="mt-0">
                <Section title={content.sections.evaporated_milk.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.content }} />
                    <SubSection title={content.sections.evaporated_milk.subsections.pre_treatment.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.pre_treatment.content }} />
                    </SubSection>
                    <SubSection title={content.sections.evaporated_milk.subsections.evaporation.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.evaporation.content }} />
                    </SubSection>
                     <SubSection title={content.sections.evaporated_milk.subsections.evaporator_types.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.evaporator_types.content }} />
                    </SubSection>
                    <SubSection title={content.sections.evaporated_milk.subsections.sterilization.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.sterilization.content }} />
                    </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="milk-powder" className="mt-0">
                <Section title={content.sections.milk_powder.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.milk_powder.content }} />
                    <SubSection title={content.sections.milk_powder.subsections.initial_processing.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.milk_powder.subsections.initial_processing.content }} />
                    </SubSection>
                     <SubSection title={content.sections.milk_powder.subsections.composition.title}>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {content.sections.milk_powder.subsections.composition.table.headers.map((header: string) => <TableHead key={header}>{header}</TableHead>)}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.sections.milk_powder.subsections.composition.table.rows.map((row: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell>{row.component}</TableCell>
                                            <TableCell>{row.wmp}</TableCell>
                                            <TableCell>{row.smp}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="whey-processing" className="mt-0">
                <Section title={content.sections.whey_processing.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.content }} />
                    <SubSection title={content.sections.whey_processing.subsections.initial_separation.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.subsections.initial_separation.content }} />
                    </SubSection>
                    <SubSection title={content.sections.whey_processing.subsections.protein_concentration.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.subsections.protein_concentration.content }} />
                    </SubSection>
                    <SubSection title={content.sections.whey_processing.subsections.drying_applications.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.subsections.drying_applications.content }} />
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="casein-production" className="mt-0">
                <Section title={content.sections.casein_production.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.casein_production.content }} />
                    <SubSection title={content.sections.casein_production.subsections.precipitation_methods.title}>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader><TableRow>
                                  {content.sections.casein_production.subsections.precipitation_methods.table.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                                </TableRow></TableHeader>
                                <TableBody>
                                  {content.sections.casein_production.subsections.precipitation_methods.table.rows.map((row: any, index: number) => (
                                    <TableRow key={index}>
                                      <TableCell>{row.stage}</TableCell>
                                      <TableCell>{row.acid_casein}</TableCell>
                                      <TableCell>{row.rennet_casein}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                    <SubSection title={content.sections.casein_production.subsections.drying_applications.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.casein_production.subsections.drying_applications.content }} />
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="drying-principles" className="mt-0">
                <Section title={content.sections.drying_principles.title}>
                     <SubSection title={content.sections.drying_principles.subsections.technologies.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.drying_principles.subsections.technologies.content }} />
                         <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {content.sections.drying_principles.subsections.technologies.table.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.sections.drying_principles.subsections.technologies.table.rows.map((row: any, index: number) => (
                                      <TableRow key={index}>
                                        <TableCell>{row.technology}</TableCell>
                                        <TableCell>{row.principle}</TableCell>
                                        <TableCell>{row.product_form}</TableCell>
                                        <TableCell>{row.advantages}</TableCell>
                                        <TableCell>{row.limitations}</TableCell>
                                      </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                    <SubSection title={content.sections.drying_principles.subsections.post_drying.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.drying_principles.subsections.post_drying.content }} />
                    </SubSection>
                     <SubSection title={content.sections.drying_principles.subsections.conclusion.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.drying_principles.subsections.conclusion.content }} />
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

    