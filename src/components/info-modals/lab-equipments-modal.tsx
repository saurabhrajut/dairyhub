
"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from 'next/image';
import { useLanguage } from "@/context/language-context";
import { labEquipmentsContent } from "@/lib/content/lab-equipments-content";

export function LabEquipmentsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(labEquipmentsContent);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEquipments = content.equipments.filter(equip => 
    equip.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    equip.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {content.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative my-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={content.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 rounded-full shadow-sm bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ScrollArea className="flex-1 mt-4 pr-6">
            <Accordion type="single" collapsible className="w-full">
                {filteredEquipments.map((equip) => (
                     <AccordionItem key={equip.id} value={equip.id}>
                        <AccordionTrigger className="text-xl font-bold hover:no-underline font-headline text-left">
                           {equip.name}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-1">
                                    <Image 
                                        src={`https://placehold.co/400x300.png`} 
                                        data-ai-hint={equip.imageHint}
                                        alt={equip.name}
                                        width={400}
                                        height={300}
                                        className="rounded-lg shadow-md object-cover"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <h4 className="font-bold text-lg not-prose">{content.purposeTitle}</h4>
                                    <p>{equip.purpose}</p>

                                    <h4 className="font-bold text-lg mt-4 not-prose">{content.principleTitle}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: equip.principle }} />

                                    {equip.parts && equip.parts.length > 0 && (
                                        <>
                                            <h4 className="font-bold text-lg mt-4 not-prose">{content.partsTitle}</h4>
                                            <ul className="list-disc list-inside">
                                                {equip.parts.map((part, index) => (
                                                    <li key={index}><strong>{part.name}:</strong> {part.description}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
                 {filteredEquipments.length === 0 && (
                    <div className="text-center py-10 text-muted-foreground">
                        <p>{content.noResults}</p>
                    </div>
                )}
            </Accordion>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
