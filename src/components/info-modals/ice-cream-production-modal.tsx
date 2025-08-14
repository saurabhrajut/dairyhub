
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
import { iceCreamProductionContent } from "@/lib/content/ice-cream-production-content";

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

export function IceCreamProductionModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(iceCreamProductionContent);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.description}
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
          <ScrollArea className="flex-shrink-0">
            <TabsList className="grid w-full h-auto grid-cols-3 sm:grid-cols-5 lg:grid-cols-10">
              <TabsTrigger value="intro">{content.tabs.intro}</TabsTrigger>
              <TabsTrigger value="diff">{content.tabs.diff}</TabsTrigger>
              <TabsTrigger value="process">{content.tabs.process}</TabsTrigger>
              <TabsTrigger value="ingredients">{content.tabs.ingredients}</TabsTrigger>
              <TabsTrigger value="factors">{content.tabs.factors}</TabsTrigger>
              <TabsTrigger value="crystallization">{content.tabs.crystallization}</TabsTrigger>
              <TabsTrigger value="other">{content.tabs.other}</TabsTrigger>
              <TabsTrigger value="implementation">{content.tabs.implementation}</TabsTrigger>
              <TabsTrigger value="conclusion">{content.tabs.conclusion}</TabsTrigger>
            </TabsList>
          </ScrollArea>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">
                <TabsContent value="intro" className="mt-0">
                    <Section title={content.summary.title}>
                        <p>{content.summary.content}</p>
                    </Section>
                    <Section title={content.introduction.title}>
                        <p>{content.introduction.p1}</p>
                        <p>{content.introduction.p2}</p>
                        <p>{content.introduction.p3}</p>
                        <p>{content.introduction.p4}</p>
                        <div className="overflow-x-auto mt-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{content.introduction.table.headers.category}</TableHead>
                                        <TableHead>{content.introduction.table.headers.examples}</TableHead>
                                        <TableHead>{content.introduction.table.headers.role}</TableHead>
                                        <TableHead>{content.introduction.table.headers.impact}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.introduction.table.rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{row.category}</TableCell>
                                            <TableCell>{row.examples}</TableCell>
                                            <TableCell>{row.role}</TableCell>
                                            <TableCell>{row.impact}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Section>
                </TabsContent>
                <TabsContent value="diff" className="mt-0">
                    <Section title={content.iceCreamVsFrozenDessert.title}>
                        <p>{content.iceCreamVsFrozenDessert.intro}</p>
                        <SubSection title={content.iceCreamVsFrozenDessert.definitions.title}>
                           <p><strong>{content.iceCreamVsFrozenDessert.definitions.iceCream.title}:</strong> {content.iceCreamVsFrozenDessert.definitions.iceCream.content}</p>
                           <p><strong>{content.iceCreamVsFrozenDessert.definitions.frozenDessert.title}:</strong> {content.iceCreamVsFrozenDessert.definitions.frozenDessert.content}</p>
                        </SubSection>
                        <SubSection title={content.iceCreamVsFrozenDessert.impact.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.iceCreamVsFrozenDessert.impact.content }} />
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="process" className="mt-0">
                    <Section title={content.manufacturingProcess.title}>
                        <p>{content.manufacturingProcess.intro}</p>
                        <div dangerouslySetInnerHTML={{ __html: content.manufacturingProcess.steps }} />
                    </Section>
                </TabsContent>
                 <TabsContent value="ingredients" className="mt-0">
                    <Section title={content.ingredientFunctionality.title}>
                        <p>{content.ingredientFunctionality.intro}</p>
                        <SubSection title={content.ingredientFunctionality.stabilizers.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.ingredientFunctionality.stabilizers.content }} />
                        </SubSection>
                        <SubSection title={content.ingredientFunctionality.emulsifiers.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.ingredientFunctionality.emulsifiers.content }} />
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="factors" className="mt-0">
                     <Section title={content.physicochemicalFactors.title}>
                        <p>{content.physicochemicalFactors.intro}</p>
                        <SubSection title={content.physicochemicalFactors.fatEmulsion.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.physicochemicalFactors.fatEmulsion.content }} />
                        </SubSection>
                        <SubSection title={content.physicochemicalFactors.waterActivity.title}>
                           <p>{content.physicochemicalFactors.waterActivity.content}</p>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="crystallization" className="mt-0">
                    <Section title={content.crystallization.title}>
                         <p>{content.crystallization.intro}</p>
                        <SubSection title={content.crystallization.ice.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.crystallization.ice.content }} />
                        </SubSection>
                        <SubSection title={content.crystallization.lactose.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.crystallization.lactose.content }} />
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="other" className="mt-0">
                     <Section title={content.otherFactors.title}>
                        <p>{content.otherFactors.intro}</p>
                         <SubSection title={content.otherFactors.melting.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.otherFactors.melting.content }} />
                        </SubSection>
                        <SubSection title={content.otherFactors.tempControl.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.otherFactors.tempControl.content }} />
                        </SubSection>
                         <SubSection title={content.otherFactors.equipment.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.otherFactors.equipment.content }} />
                        </SubSection>
                         <SubSection title={content.otherFactors.packaging.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.otherFactors.packaging.content }} />
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="implementation" className="mt-0">
                     <Section title={content.implementation.title}>
                        <p>{content.implementation.intro}</p>
                        <div dangerouslySetInnerHTML={{ __html: content.implementation.strategies }} />
                    </Section>
                </TabsContent>
                 <TabsContent value="conclusion" className="mt-0">
                     <Section title={content.conclusion.title}>
                        <p>{content.conclusion.content}</p>
                    </Section>
                </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

    