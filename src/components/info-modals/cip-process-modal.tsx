
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLanguage } from "@/context/language-context";
import { cipProcessContent } from "@/lib/content/cip-process-content";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const SolutionStrengthCalc = ({ content }: { content: any }) => {
    const { toast } = useToast();
    const [naohTitre, setNaohTitre] = useState("");
    const [naohResult, setNaohResult] = useState<string | null>(null);

    const [hno3Titre, setHno3Titre] = useState("");
    const [hno3Result, setHno3Result] = useState<string | null>(null);
    
    const [h3po4Titre, setH3po4Titre] = useState("");
    const [h3po4Result, setH3po4Result] = useState<string | null>(null);

    const [chlorineTitre, setChlorineTitre] = useState("");
    const [chlorineResult, setChlorineResult] = useState<string | null>(null);


    const handleCalc = (type: 'naoh' | 'hno3' | 'h3po4' | 'chlorine') => {
        let titre, resultText;

        try {
            switch(type) {
                case 'naoh':
                    titre = parseFloat(naohTitre);
                    if(isNaN(titre) || titre < 0) throw new Error(content.calculators.error_invalid_titre);
                    resultText = `${content.calculators.naoh.result_prefix} ${(titre * 0.4).toFixed(3)}%`;
                    setNaohResult(resultText);
                    break;
                case 'hno3':
                    titre = parseFloat(hno3Titre);
                     if(isNaN(titre) || titre < 0) throw new Error(content.calculators.error_invalid_titre);
                    resultText = `${content.calculators.hno3.result_prefix} ${(titre * 0.63).toFixed(3)}%`;
                    setHno3Result(resultText);
                    break;
                case 'h3po4':
                    titre = parseFloat(h3po4Titre);
                     if(isNaN(titre) || titre < 0) throw new Error(content.calculators.error_invalid_titre);
                    // H3PO4 has n-factor of 3, but in titration often only 1 or 2 protons react. Assuming reaction to HPO4(2-), n=2.
                    // Eq. Wt = 98/2 = 49. Strength % = Titre * N_base * Eq. Wt / (Sample_Vol * 10)
                    resultText = `${content.calculators.h3po4.result_prefix} ${(titre * 0.49).toFixed(3)}%`;
                    setH3po4Result(resultText);
                    break;
                case 'chlorine':
                    titre = parseFloat(chlorineTitre);
                     if(isNaN(titre) || titre < 0) throw new Error(content.calculators.error_invalid_titre);
                     const ppm = titre * 35.45; // V * N_thio * Eq.Wt_Cl * 1000 / Sample_Vol. For 0.01N Thio & 100ml sample, it simplifies
                    resultText = `${content.calculators.chlorine.result_prefix} ${ppm.toFixed(2)} ppm`;
                    setChlorineResult(resultText);
                    break;
            }
            toast({ title: content.calculators.success_title, description: resultText });
        } catch(e: any) {
            toast({ variant: 'destructive', title: content.calculators.error_title, description: e.message });
        }
    }


    return (
        <div className="bg-muted p-6 rounded-lg border mt-4 space-y-8">
            <Tabs defaultValue="naoh">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                    <TabsTrigger value="naoh">{content.calculators.naoh.title}</TabsTrigger>
                    <TabsTrigger value="hno3">{content.calculators.hno3.title}</TabsTrigger>
                    <TabsTrigger value="h3po4">{content.calculators.h3po4.title}</TabsTrigger>
                    <TabsTrigger value="chlorine">{content.calculators.chlorine.title}</TabsTrigger>
                </TabsList>
                <TabsContent value="naoh" className="pt-4">
                     <p className="text-sm text-muted-foreground mb-4">{content.calculators.naoh.description}</p>
                    <div><Label>{content.calculators.naoh.label}</Label><Input type="number" value={naohTitre} onChange={e => setNaohTitre(e.target.value)} placeholder="e.g., 2.5"/></div>
                    <Button onClick={() => handleCalc('naoh')} className="w-full mt-4">{content.calculators.naoh.button}</Button>
                    {naohResult && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{naohResult}</AlertDescription></Alert>}
                </TabsContent>
                 <TabsContent value="hno3" className="pt-4">
                     <p className="text-sm text-muted-foreground mb-4">{content.calculators.hno3.description}</p>
                    <div><Label>{content.calculators.hno3.label}</Label><Input type="number" value={hno3Titre} onChange={e => setHno3Titre(e.target.value)} placeholder="e.g., 1.8"/></div>
                    <Button onClick={() => handleCalc('hno3')} className="w-full mt-4">{content.calculators.hno3.button}</Button>
                    {hno3Result && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{hno3Result}</AlertDescription></Alert>}
                </TabsContent>
                <TabsContent value="h3po4" className="pt-4">
                     <p className="text-sm text-muted-foreground mb-4">{content.calculators.h3po4.description}</p>
                    <div><Label>{content.calculators.h3po4.label}</Label><Input type="number" value={h3po4Titre} onChange={e => setH3po4Titre(e.target.value)} placeholder="e.g., 2.1"/></div>
                    <Button onClick={() => handleCalc('h3po4')} className="w-full mt-4">{content.calculators.h3po4.button}</Button>
                    {h3po4Result && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{h3po4Result}</AlertDescription></Alert>}
                </TabsContent>
                 <TabsContent value="chlorine" className="pt-4">
                     <p className="text-sm text-muted-foreground mb-4">{content.calculators.chlorine.description}</p>
                    <div><Label>{content.calculators.chlorine.label}</Label><Input type="number" value={chlorineTitre} onChange={e => setChlorineTitre(e.target.value)} placeholder="e.g., 4.2"/></div>
                    <Button onClick={() => handleCalc('chlorine')} className="w-full mt-4">{content.calculators.chlorine.button}</Button>
                    {chlorineResult && <Alert className="mt-4"><AlertDescription className="font-bold text-center">{chlorineResult}</AlertDescription></Alert>}
                </TabsContent>
            </Tabs>
        </div>
    )
}

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
            <SolutionStrengthCalc content={content.solution_strength} />
          </Section>

        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
