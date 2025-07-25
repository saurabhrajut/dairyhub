"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { funFacts } from "@/lib/data";

const milkChemistryTabs = [
    { value: "composition", label: "Composition" },
    { value: "proteins", label: "Proteins" },
    { value: "other", label: "Other" },
    { value: "properties", label: "Properties" },
    { value: "processing", label: "Processing" },
    { value: "fun-facts", label: "Fun Facts" },
];

export function MilkChemistryModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Chemistry of Milk</DialogTitle>
          <DialogDescription className="text-center">A deep dive into the science of milk.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="composition" className="flex flex-col h-full">
            <div className="flex justify-center">
                <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-4">
                    {milkChemistryTabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                    ))}
                </TabsList>
            </div>
            <div className="flex-1 overflow-auto">
            <ScrollArea className="h-full pr-4">
            <TabsContent value="composition">
                <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-bold text-primary mb-2 font-headline">What is Milk?</h4>
                        <p><strong>FSSAI Definition:</strong> “Milk means the normal mammary secretion derived from complete milking of a healthy milch animal, without addition or extraction, intended for consumption as liquid milk or for further processing.”</p>
                        <p className="mt-2"><strong>Codex Alimentarius Definition:</strong> “Milk is the normal mammary secretion of milking animals, free from colostrum, intended for direct consumption or further processing.”</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-bold text-primary mb-2 font-headline">Milk Constituents</h4>
                        <p>Doodh ek complex colloidal system hai jo multiple components ka mixture hota hai. Isme water, fat, protein, lactose, minerals, vitamins, aur enzymes shamil hote hain. Har constituent milk ki nutritional aur functional properties ko define karta hai.</p>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="proteins">
                <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-bold text-primary mb-2 font-headline">Milk Proteins (~3.5%)</h4>
                        <p>Milk proteins do major categories me aate hain: <strong>Casein</strong> aur <strong>Whey (Serum) Proteins</strong>. Ye milk ke nutritional value aur physical properties ke liye bahut important hain.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-50 rounded-lg border">
                            <h5 className="font-bold font-headline text-gray-800 mb-2">1. Casein (~80%)</h5>
                            <p>Casein milk ka primary protein hai. Yeh paneer aur dahi banane ke liye responsible hai.</p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li><strong>Structure:</strong> Casein 'micelles' naam ke complex structures banata hai.</li>
                                <li><strong>Fractions:</strong> αs1, αs2, β, aur κ-casein (Kappa-casein).</li>
                                <li><strong>Acid Coagulation:</strong> pH 4.6 par dahi/paneer banata hai.</li>
                                <li><strong>Rennet Coagulation:</strong> Rennet enzyme (chymosin) κ-casein ko todkar cheese banata hai.</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border">
                            <h5 className="font-bold font-headline text-gray-800 mb-2">2. Whey Proteins (~20%)</h5>
                            <p>Paneer banne ke baad bache hue liquid me yeh proteins hote hain.</p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li><strong>Major Types:</strong> β-Lactoglobulin, α-Lactalbumin, BSA, Immunoglobulins.</li>
                                <li><strong>Solubility:</strong> Acid me soluble hote hain (pH 4.6 par precipitate nahi hote).</li>
                                <li><strong>Heat Sensitivity:</strong> Garam karne par 'denature' ho jaate hain.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="other">
                 <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h5 className="font-bold font-headline text-green-800 mb-2">Lactose (~4.8%)</h5>
                        <p>Lactose milk ka main carbohydrate hai, jise 'milk sugar' bhi kehte hain. Yeh milk ko meetha swaad deta hai.</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h5 className="font-bold font-headline text-yellow-800 mb-2">Milk Fat (~3.9%)</h5>
                        <p>Milk fat 'fat globules' ke roop me hota hai. Har globule ke chaaron taraf ek protective layer (MFGM) hoti hai.</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h5 className="font-bold font-headline text-purple-800 mb-2">Minerals (Ash) (~0.7%)</h5>
                        <p>Milk minerals ka ek accha source hai, jaise Calcium, Phosphorus, Potassium.</p>
                    </div>
                 </div>
            </TabsContent>
            <TabsContent value="properties"><p>Physical properties content coming soon.</p></TabsContent>
            <TabsContent value="processing"><p>Thermal processing content coming soon.</p></TabsContent>
            <TabsContent value="fun-facts">
                <div className="space-y-4 prose max-w-none">
                    {funFacts.map((fact, index) => (
                        <div key={index} className="p-4 bg-amber-100/60 rounded-lg not-prose">
                             <p className="font-semibold text-amber-900 font-headline">Q: {fact.q}</p>
                             <p className="mt-2 text-gray-700"><strong className="text-amber-800">A:</strong> {fact.a}</p>
                        </div>
                    ))}
                </div>
            </TabsContent>
            </ScrollArea>
            </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
