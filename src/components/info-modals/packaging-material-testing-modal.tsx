
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/language-context";
import { packagingContent } from "@/lib/content/packaging-content";


const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div id={id} className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        {children}
    </div>
);

const SubHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-24 font-headline">{children}</h3>
);

const TestProcedure = ({ test }: { test: any }) => (
    <AccordionItem value={test.title.replace(/\s+/g, '-').toLowerCase()}>
        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{test.title}</AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none">
                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: test.procedure }} />
                {test.calculation && (
                    <>
                        <h4 className="font-bold mt-4">{packagingContent.hi.testing.calculation_title}</h4>
                        <pre className="bg-muted p-3 rounded-lg font-mono text-sm text-primary"><code>{test.calculation}</code></pre>
                    </>
                )}
            </div>
        </AccordionContent>
    </AccordionItem>
);


export function PackagingMaterialTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(packagingContent);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">{content.title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="introduction" className="w-full flex-1 flex flex-col min-h-0">
            <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="introduction">{content.tabs.intro}</TabsTrigger>
                <TabsTrigger value="materials">{content.tabs.materials}</TabsTrigger>
                <TabsTrigger value="forms-processes">{content.tabs.forms}</TabsTrigger>
                <TabsTrigger value="testing">{content.tabs.testing}</TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-1 mt-4 pr-6">
                 <TabsContent value="introduction" className="mt-0">
                    <Section title={content.introduction.title} id="introduction">
                        <p>{content.introduction.p1}</p>
                        <p>{content.introduction.p2}</p>
                        <h3 className="font-bold mt-4">{content.introduction.purpose_title}</h3>
                         <ul className="list-disc list-inside space-y-2">
                           {content.introduction.purposes.map((purpose, index) => <li key={index}>{purpose}</li>)}
                        </ul>
                         <p>{content.introduction.p3}</p>
                    </Section>
                 </TabsContent>
                 <TabsContent value="materials" className="mt-0">
                    <Section title={content.materials.title} id="materials">
                        <SubHeading id="glass">{content.materials.glass.title}</SubHeading>
                        <p>{content.materials.glass.p1}</p>
                        
                        <SubHeading id="plastics">{content.materials.plastics.title}</SubHeading>
                        <p>{content.materials.plastics.p1}</p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                           {content.materials.plastics.types.map((type, index) => <li key={index} dangerouslySetInnerHTML={{ __html: type }}/>)}
                        </ul>

                        <SubHeading id="laminates">{content.materials.laminates.title}</SubHeading>
                        <p>{content.materials.laminates.p1}</p>
                    </Section>
                 </TabsContent>
                 <TabsContent value="forms-processes" className="mt-0">
                    <Section title={content.forms.title} id="forms-processes">
                        <p>{content.forms.p1}</p>
                        
                        <SubHeading id="aseptic">{content.forms.aseptic.title}</SubHeading>
                        <p>{content.forms.aseptic.p1}</p>
                        
                        <SubHeading id="fino">{content.forms.fino.title}</SubHeading>
                        <p>{content.forms.fino.p1}</p>

                        <SubHeading id="pet">{content.forms.pet.title}</SubHeading>
                        <p>{content.forms.pet.p1}</p>

                        <SubHeading id="retort">{content.forms.retort.title}</SubHeading>
                        <p>{content.forms.retort.p1}</p>
                    </Section>
                 </TabsContent>
                  <TabsContent value="testing" className="mt-0">
                     <Section title={content.testing.title} id="testing">
                        <p><strong>{content.testing.sampling_title}:</strong> {content.testing.sampling_text}</p>
                        <p><strong>{content.testing.conditioning_title}:</strong> {content.testing.conditioning_text}</p>
                        <Accordion type="single" collapsible className="w-full">
                            {content.testing.tests.map(test => <TestProcedure key={test.title} test={test} />)}
                        </Accordion>
                    </Section>
                  </TabsContent>
            </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
