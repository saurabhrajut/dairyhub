
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/context/language-context";
import { waterTestingContent } from "@/lib/content/water-testing-content";

const Formula = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-muted/50 rounded-lg text-center font-mono text-sm my-4 text-primary"
     dangerouslySetInnerHTML={{ __html: children as string }} />
);

const WaterTestSection = ({ title, intro, procedure, calculation }: { title: string, intro: string, procedure: string[], calculation: string }) => {
    return (
        <section className="mb-8 p-6 bg-blue-50/60 border border-blue-200 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 font-headline">{title}</h2>
            <p className="mt-2 text-gray-600">{intro}</p>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Prakriya (Procedure)</h3>
            <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-600">
                {procedure.map((step, i) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
            </ol>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Ganana (Calculation)</h3>
            <Formula>{calculation}</Formula>
        </section>
    );
};


export function WaterTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(waterTestingContent);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center font-headline">{content.title}</DialogTitle>
          <DialogDescription className="text-center">
            {content.description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full pr-6 mt-4">
            <div className="prose max-w-none text-gray-700 text-base leading-relaxed">
                <p><strong>{content.note_title}:</strong> {content.note_text}</p>
                
                {content.tests.map(test => (
                    <WaterTestSection 
                        key={test.id}
                        title={test.title}
                        intro={test.intro}
                        procedure={test.procedure}
                        calculation={test.calculation}
                    />
                ))}

                 <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg">
                    <p className="font-bold">{content.important_note.title}</p>
                    <p>{content.important_note.text}</p>
                </div>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

    