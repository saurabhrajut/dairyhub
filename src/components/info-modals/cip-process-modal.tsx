
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useLanguage } from "@/context/language-context";
import { cipProcessContent } from "@/lib/content/cip-process-content";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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


const AlkalinityTestCalc = ({ content }: { content: any }) => {
    const { toast } = useToast();
    const [detergentSolution, setDetergentSolution] = useState("10");
    const [hclForQualitative, setHclForQualitative] = useState("12.5");
    const [qualitativeResult, setQualitativeResult] = useState<string | null>(null);

    const [directTitre, setDirectTitre] = useState("");
    const [directResult, setDirectResult] = useState<string | null>(null);

    const [labTitreA, setLabTitreA] = useState("");
    const [labTitreB, setLabTitreB] = useState("");
    const [labResult, setLabResult] = useState<{ freeCaustic: string, totalAlkali: string } | null>(null);

    const handleQualitativeCheck = () => {
        const detMl = parseFloat(detergentSolution);
        const hclMl = parseFloat(hclForQualitative);
        if (isNaN(detMl) || isNaN(hclMl)) {
            toast({ variant: 'destructive', title: 'Error', description: 'Please enter valid numbers.' });
            return;
        }
        setQualitativeResult(content.calculators.alkalinity.qualitative_result);
    }

    const handleDirectCalc = () => {
        const acidUsed = parseFloat(directTitre);
        if(isNaN(acidUsed) || acidUsed < 0){
             toast({ variant: 'destructive', title: 'Error', description: 'Please enter a valid acid volume.' });
            return;
        }
        setDirectResult(`${content.calculators.alkalinity.direct_result_prefix} ${acidUsed.toFixed(2)}%`);
    }

    const handleLabCalc = () => {
        const readingA = parseFloat(labTitreA);
        const readingB = parseFloat(labTitreB);

        if (isNaN(readingA) || isNaN(readingB) || readingA < 0 || readingB < 0) {
            toast({ variant: 'destructive', title: 'Error', description: 'Please enter valid, positive titre values.' });
            return;
        }
        
        // This calculation is based on the new lab procedure provided.
        // A is the first titration, B is the second part. The total acid used is A.
        const freeCaustic = (2 * readingB - readingA) * 0.4;
        const totalAlkali = readingA * 0.4;
        
        setLabResult({
            freeCaustic: `${content.calculators.alkalinity.lab_result_free} ${freeCaustic > 0 ? freeCaustic.toFixed(3) : '0.000'}%`,
            totalAlkali: `${content.calculators.alkalinity.lab_result_total} ${totalAlkali.toFixed(3)}%`
        });
    }

    return (
        <div className="bg-muted p-6 rounded-lg border mt-4 space-y-8">
            {/* Qualitative Test */}
            <div>
                <h4 className="font-bold text-lg mb-2">{content.calculators.alkalinity.qualitative_title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <div><Label>{content.calculators.alkalinity.detergent_label}</Label><Input value={detergentSolution} onChange={e => setDetergentSolution(e.target.value)} /></div>
                    <div><Label>{content.calculators.alkalinity.hcl_label}</Label><Input value={hclForQualitative} onChange={e => setHclForQualitative(e.target.value)} /></div>
                </div>
                <Button onClick={handleQualitativeCheck} className="w-full mt-4">{content.calculators.alkalinity.qualitative_button}</Button>
                {qualitativeResult && <Alert className="mt-4"><AlertDescription>{qualitativeResult}</AlertDescription></Alert>}
            </div>

             {/* Quantitative Direct Test */}
            <div>
                <h4 className="font-bold text-lg mb-2">{content.calculators.alkalinity.direct_title}</h4>
                 <div className="space-y-4">
                    <div><Label>{content.calculators.alkalinity.direct_label}</Label><Input type="number" value={directTitre} onChange={e => setDirectTitre(e.target.value)} placeholder="e.g., 0.5"/></div>
                </div>
                <Button onClick={handleDirectCalc} className="w-full mt-4">{content.calculators.alkalinity.direct_button}</Button>
                {directResult && <Alert className="mt-4"><AlertDescription className="font-bold">{directResult}</AlertDescription></Alert>}
            </div>

            {/* Quantitative Lab Method */}
            <div>
                <h4 className="font-bold text-lg mb-2">{content.calculators.alkalinity.lab_title}</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label>{content.calculators.alkalinity.lab_label_a}</Label><Input type="number" value={labTitreA} onChange={e => setLabTitreA(e.target.value)} placeholder="e.g., 2.5"/></div>
                    <div><Label>{content.calculators.alkalinity.lab_label_b}</Label><Input type="number" value={labTitreB} onChange={e => setLabTitreB(e.target.value)} placeholder="e.g., 0.5"/></div>
                </div>
                 <p className="text-xs text-muted-foreground mt-2">{content.calculators.alkalinity.lab_note}</p>
                <Button onClick={handleLabCalc} className="w-full mt-4">{content.calculators.alkalinity.lab_button}</Button>
                 {labResult && (
                    <Alert className="mt-4">
                        <AlertDescription>
                            <p className="font-bold">{labResult.freeCaustic}</p>
                            <p className="font-bold mt-2">{labResult.totalAlkali}</p>
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </div>
    )
}

const ChlorineTestCalc = ({ content }: { content: any }) => {
    const { toast } = useToast();
    const [titreValue, setTitreValue] = useState("");
    const [result, setResult] = useState<string | null>(null);

    const calculateChlorine = () => {
        const V = parseFloat(titreValue);
        if(isNaN(V) || V < 0){
            toast({ variant: 'destructive', title: 'Error', description: 'Please enter a valid titre value.' });
            return;
        }

        const chlorine_in_250ml = (V * 0.003546 * 250) / 25;
        const percent_chlorine = (chlorine_in_250ml / 10) * 100;
        
        setResult(`${content.calculators.chlorine.result_prefix} ${percent_chlorine.toFixed(3)}%`);
    }
    
    return (
         <div className="bg-muted p-6 rounded-lg border mt-4">
            <h4 className="font-bold text-lg mb-2">{content.calculators.chlorine.title}</h4>
            <div className="space-y-4">
                <div>
                    <Label>{content.calculators.chlorine.label}</Label>
                    <Input type="number" value={titreValue} onChange={e => setTitreValue(e.target.value)} placeholder="e.g., 28.2"/>
                    <p className="text-xs text-muted-foreground mt-1">{content.calculators.chlorine.note}</p>
                </div>
            </div>
            <Button onClick={calculateChlorine} className="w-full mt-4">{content.calculators.chlorine.button}</Button>
            {result && <Alert className="mt-4"><AlertDescription className="font-bold">{result}</AlertDescription></Alert>}
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[95vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2 font-headline">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.main_description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
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

          <Section id="cleaning-procedures" title={content.cleaning_procedures.title}>
              {content.cleaning_procedures.sections.map((sec: any, index: number) => (
                  <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{sec.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: sec.content }} />
                  </div>
              ))}
          </Section>

          <Section id="solution-strength" title={content.solution_strength.title}>
            <p>{content.solution_strength.intro}</p>
            <AlkalinityTestCalc content={content.solution_strength} />
            <ChlorineTestCalc content={content.solution_strength} />
          </Section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

    