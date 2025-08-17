
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
import { cipProcessContent } from "@/lib/content/cip-process-content";

const Section = ({ title, id, children, defaultOpen = false }: { title: string, id: string, children: React.ReactNode, defaultOpen?: boolean }) => (
    <Accordion type="single" collapsible className="w-full mb-6" defaultValue={defaultOpen ? "item-1" : undefined}>
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-bold text-blue-700 bg-blue-50 p-4 rounded-lg mt-6 border-l-4 border-blue-700 font-headline hover:no-underline text-left">
                {title}
            </AccordionTrigger>
            <AccordionContent>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed pt-4 break-words">
                    {children}
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

export function CipProcessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(cipProcessContent);
  
  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 font-headline">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.main_description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 p-4 sm:p-0">
          <Section id="intro" title={content.intro.title} defaultOpen>
              <div dangerouslySetInnerHTML={{ __html: content.intro.htmlContent }} />
          </Section>

          <Section id="cip-cycle" title={content.cip_cycle.title}>
            <p>{content.cip_cycle.intro}</p>
            <ol className="list-decimal list-outside pl-5 mt-4 space-y-4">
                {content.cip_cycle.steps.map((step: any, index: number) => (
                    <li key={index}>
                        <strong className="text-gray-800">{step.title}</strong>
                        <div className="pl-2" dangerouslySetInnerHTML={{ __html: step.details }} />
                    </li>
                ))}
            </ol>
          </Section>

          <Section id="chemicals" title={content.chemicals.title}>
              <p>{content.chemicals.intro}</p>
              {content.chemicals.types.map((type: any, index: number) => (
                  <div key={index} className="mt-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{type.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: type.details }} />
                  </div>
              ))}
          </Section>

           <Section id="advantages" title={content.advantages.title}>
              <ul className="list-disc list-inside space-y-2">
                 {content.advantages.list.map((adv: string, index: number) => (
                    <li key={index}>{adv}</li>
                 ))}
              </ul>
          </Section>

          <Section id="cleaning-procedures" title={content.cleaning_procedures.title}>
              {content.cleaning_procedures.sections.map((sec: any, index: number) => (
                  <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{sec.title}</h3>
                      <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: sec.content }} />
                  </div>
              ))}
          </Section>

          <Section id="teepol-detergent" title={content.teepol_detergent.title}>
              <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: content.teepol_detergent.htmlContent }} />
          </Section>
          
           <Section id="sip" title={content.sip.title}>
              <p>{content.sip.intro}</p>
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: content.sip.process }} />
          </Section>

          <Section id="solution-strength" title={content.solution_strength.title}>
            <p>{content.solution_strength.intro}</p>
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 overflow-x-auto" dangerouslySetInnerHTML={{ __html: content.solution_strength.alkalinity_test.content }} />
          </Section>

        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
