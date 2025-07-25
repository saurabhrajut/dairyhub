
"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { adulterantsData, preservativesData, reagentRecipes } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const sortedReagentKeys = Object.keys(reagentRecipes).sort((a,b) => reagentRecipes[a as keyof typeof reagentRecipes].name.localeCompare(reagentRecipes[b as keyof typeof reagentRecipes].name));

function ReagentCalculator() {
    const [selectedReagent, setSelectedReagent] = useState("");
    const [volume, setVolume] = useState("100");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = () => {
        setError(null);
        setResult(null);

        const vol = parseFloat(volume);
        if (!selectedReagent) {
            setError("Kripya pehle ek reagent chunein.");
            return;
        }
        if (isNaN(vol) || vol <= 0) {
            setError("Kripya sahi volume (ml mein) daalein.");
            return;
        }

        const recipe = reagentRecipes[selectedReagent as keyof typeof reagentRecipes];
        let resultHTML = `<h4 class="font-bold text-lg mb-2">${vol}ml ${recipe.name} Banane ki Vidhi:</h4>`;
        
        const factor = vol / 100;

        switch(recipe.type) {
            case 'w/v':
            case 'v/v':
            case 'w/v_in_acid':
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (c.amount * factor).toFixed(3);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ${c.unit}</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;
            
            case 'complex':
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (c.amount * factor).toFixed(2);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ${c.unit}</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;

            case 'ratio':
                const totalParts = recipe.components.reduce((sum, c) => sum + c.ratio, 0);
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (vol * c.ratio / totalParts).toFixed(2);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ml</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;

            case 'fixed':
                resultHTML += `<p class="text-gray-700">${recipe.instructions}</p>`;
                break;
        }
        setResult(resultHTML);
    }

    return (
        <section id="reagent-calculator" className="mt-12 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2 mb-6 font-headline">Reagent Banane ka Calculator</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <div>
                        <Label htmlFor="reagent-select">Reagent Chunein:</Label>
                        <Select value={selectedReagent} onValueChange={setSelectedReagent}>
                            <SelectTrigger id="reagent-select"><SelectValue placeholder="-- Kripya ek reagent chunein --" /></SelectTrigger>
                            <SelectContent>
                                {sortedReagentKeys.map(key => (
                                    <SelectItem key={key} value={key}>{reagentRecipes[key as keyof typeof reagentRecipes].name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="reagent-volume">Kitna Volume (ml) Banana Hai?</Label>
                        <Input type="number" id="reagent-volume" value={volume} onChange={e => setVolume(e.target.value)} placeholder="e.g., 100" />
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <Button onClick={handleCalculate} className="w-full md:w-auto bg-purple-600 text-white hover:bg-purple-700">
                        Calculate Karein
                    </Button>
                </div>
                {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && (
                    <Alert className="mt-6 prose prose-sm max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: result }} />
                    </Alert>
                )}
            </div>
        </section>
    );
}


export function AdulterationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl text-center">Kachhe Doodh ki Quality ka Aakalan</DialogTitle>
          <DialogDescription className="text-center">
            Preservatives aur Milawat ka Pata Lagane ke liye ek Guide
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <section id="preservatives" className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2 mb-6 font-headline">Doodh mein Preservatives ka Pata Lagana</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Kanoon ke anusaar, doodh mein kisi bhi prakaar ka preservative milana mana hai. Preservatives aam taur par doodh mein tab milaye jaate hain jab thanda karne ya transport ki suvidha theek na ho. Aam taur par istemal hone wale preservatives hain neutralizers, boric acid, formalin, aadi.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {preservativesData.map((item, index) => (
                        <AccordionItem key={`preservative-${index}`} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section id="adulterants" className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6 font-headline">Milawat ka Pata Lagana</h2>
                 <p className="mb-6 text-gray-700 leading-relaxed">
                    Milawati padarth woh hote hain jo doodh mein uski matra ya solids-not-fat content badhane ke liye milaye jaate hain, taaki quality test ko dhokha de sakein. Aam milawati cheezon mein cheeni, starch, urea, aur vanaspati tel shamil hain.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {adulterantsData.map((item, index) => (
                        <AccordionItem key={`adulterant-${index}`} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
            
            <ReagentCalculator />

            <footer className="text-center mt-12 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Yeh guide sirf jaankari ke liye hai. Hamesha official laboratory standards aur suraksha niyamon ka paalan karein.</p>
            </footer>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
