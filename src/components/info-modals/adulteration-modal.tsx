
"use client"

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
import { adulterantsData, preservativesData } from "@/lib/data"

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
            
            <footer className="text-center mt-12 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Yeh guide sirf jaankari ke liye hai. Hamesha official laboratory standards aur suraksha niyamon ka paalan karein.</p>
            </footer>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
