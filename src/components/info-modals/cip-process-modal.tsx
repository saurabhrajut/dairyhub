
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

const Section = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => (
    <Accordion type="single" collapsible className="w-full mb-6" defaultValue={defaultOpen ? title : undefined}>
        <AccordionItem value={title}>
            <AccordionTrigger className="text-2xl font-bold text-blue-700 bg-blue-50 p-4 rounded-lg mt-6 border-l-4 border-blue-700 font-headline hover:no-underline">
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
    const [qualitativeResult, setQualitativeResult] = useState<string | null>(null);
    const [quantitativeDirectResult, setQuantitativeDirectResult] = useState<string | null>(null);
    const [quantitativeLabResult, setQuantitativeLabResult] = useState<{freeCaustic: string, totalAlkali: string} | null>(null);
    const [detergentSolution, setDetergentSolution] = useState("10");
    const [hclForQualitative, setHclForQualitative] = useState("12.5");
    const [acidForDirect, setAcidForDirect] = useState("");
    const [acidForLabA, setAcidForLabA] = useState("");
    const [acidForLabB, setAcidForLabB] = useState("");

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
        const acidUsed = parseFloat(acidForDirect);
        if(isNaN(acidUsed) || acidUsed < 0){
             toast({ variant: 'destructive', title: 'Error', description: 'Please enter a valid acid volume.' });
            return;
        }
        setQuantitativeDirectResult(`${content.calculators.alkalinity.direct_result_prefix} ${acidUsed.toFixed(2)}%`);
    }

    const handleLabCalc = () => {
        const readingA = parseFloat(acidForLabA);
        const readingB = parseFloat(acidForLabB);
        if(isNaN(readingA) || isNaN(readingB) || readingA < readingB) {
            toast({ variant: 'destructive', title: 'Error', description: 'Please enter valid readings. Reading A must be greater than or equal to Reading B.' });
            return;
        }
        const freeCaustic = (readingA - readingB) * 0.4;
        const totalAlkali = (readingA + readingB) * 0.4;
        setQuantitativeLabResult({
            freeCaustic: `${content.calculators.alkalinity.lab_result_free} ${freeCaustic.toFixed(2)}%`,
            totalAlkali: `${content.calculators.alkalinity.lab_result_total} ${totalAlkali.toFixed(2)}%`
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
                    <div><Label>{content.calculators.alkalinity.direct_label}</Label><Input type="number" value={acidForDirect} onChange={e => setAcidForDirect(e.target.value)} placeholder="e.g., 0.5"/></div>
                </div>
                <Button onClick={handleDirectCalc} className="w-full mt-4">{content.calculators.alkalinity.direct_button}</Button>
                {quantitativeDirectResult && <Alert className="mt-4"><AlertDescription className="font-bold">{quantitativeDirectResult}</AlertDescription></Alert>}
            </div>

            {/* Quantitative Lab Method */}
            <div>
                <h4 className="font-bold text-lg mb-2">{content.calculators.alkalinity.lab_title}</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label>{content.calculators.alkalinity.lab_label_a}</Label><Input type="number" value={acidForLabA} onChange={e => setAcidForLabA(e.target.value)} placeholder="e.g., 2.5"/></div>
                    <div><Label>{content.calculators.alkalinity.lab_label_b}</Label><Input type="number" value={acidForLabB} onChange={e => setAcidForLabB(e.target.value)} placeholder="e.g., 0.5"/></div>
                </div>
                <Button onClick={handleLabCalc} className="w-full mt-4">{content.calculators.alkalinity.lab_button}</Button>
                 {quantitativeLabResult && (
                    <Alert className="mt-4">
                        <AlertDescription>
                            <p className="font-bold">{quantitativeLabResult.freeCaustic}</p>
                            <p className="font-bold mt-2">{quantitativeLabResult.totalAlkali}</p>
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
          <Section title={content.intro.title} defaultOpen>
              <p>{content.intro.p1}</p>
              <h4 className="font-bold mt-4">{content.intro.milkstone_title}</h4>
              <p>{content.intro.milkstone_desc}</p>
              <p><strong>{content.intro.composition_title}:</strong> {content.intro.composition_desc}</p>
          </Section>

          <Section title={content.cleaning_procedures.title}>
              {content.cleaning_procedures.sections.map((sec: any, index: number) => (
                  <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{sec.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: sec.content }} />
                  </div>
              ))}
          </Section>

          <Section title={content.solution_strength.title}>
            <p>{content.solution_strength.intro}</p>
            <AlkalinityTestCalc content={content.solution_strength} />
            <ChlorineTestCalc content={content.solution_strength} />
          </Section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
