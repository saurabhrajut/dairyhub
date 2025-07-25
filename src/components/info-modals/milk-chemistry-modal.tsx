
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const milkChemistryTabs = [
    { value: "composition", label: "Composition" },
    { value: "proteins", label: "Proteins" },
    { value: "other", label: "Other" },
    { value: "properties", label: "Properties" },
    { value: "processing", label: "Processing" },
    { value: "fun-facts", label: "Fun Facts" },
];

const physicalProperties = [
    { property: "Density (at 20°C)", value: "Cow: 1.028-1.032 g/mL, Buffalo: 1.030-1.034 g/mL", details: "Milk is denser than water due to its solid content (SNF). Higher fat content slightly lowers density." },
    { property: "Viscosity (at 20°C)", value: "~2.0 cP", details: "About twice as viscous as water. Depends on temperature and composition (fat, protein)." },
    { property: "Freezing Point", value: "-0.522 to -0.565 °C", details: "Lower than water due to dissolved lactose and minerals. Used to detect added water." },
    { property: "Boiling Point", value: "~100.17 °C", details: "Slightly higher than water due to dissolved solids." },
    { property: "Acidity (Titratable)", value: "Cow: 0.14-0.16% LA, Buffalo: 0.17-0.18% LA", details: "Natural acidity is due to casein, phosphates, citrates, etc. Not due to lactic acid in fresh milk." },
    { property: "pH", value: "6.6 - 6.8", details: "Slightly acidic. Lower pH suggests bacterial action (souring)." },
    { property: "Refractive Index", value: "1.3440 - 1.3485", details: "Used for quick estimation of total solids content." },
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
            <TabsContent value="properties">
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Physical Properties of Milk</h4>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">Property</TableHead>
                                <TableHead>Value</TableHead>
                                <TableHead>Significance</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {physicalProperties.map(prop => (
                                <TableRow key={prop.property}>
                                    <TableCell className="font-medium">{prop.property}</TableCell>
                                    <TableCell>{prop.value}</TableCell>
                                    <TableCell>{prop.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </TabsContent>
            <TabsContent value="processing">
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                     <h4 className="text-lg font-bold text-primary mb-2 font-headline">Effect of Thermal Processing on Milk</h4>
                     <p>Garam karne se doodh mein kai badlav aate hain jo uski suraksha, shelf-life, aur gunon ko prabhavit karte hain.</p>
                     
                     <div className="p-4 bg-gray-50 rounded-lg border">
                         <h5 className="font-bold font-headline text-gray-800 mb-2">Pasteurization (LTLT/HTST)</h5>
                         <ul className="list-disc list-inside mt-2">
                             <li><strong>Benefits:</strong> Destroys pathogenic bacteria (like TB, Brucella), inactivates enzymes (lipase), increases shelf life.</li>
                             <li><strong>Changes:</strong> Minimal changes to nutritional value. Slight loss of Vitamin C and B-group vitamins. Whey proteins may slightly denature.</li>
                         </ul>
                     </div>

                     <div className="p-4 bg-gray-50 rounded-lg border">
                         <h5 className="font-bold font-headline text-gray-800 mb-2">UHT (Ultra-High Temperature) Processing</h5>
                         <ul className="list-disc list-inside mt-2">
                             <li><strong>Benefits:</strong> Makes milk commercially sterile, allowing for long-term storage at room temperature.</li>
                             <li><strong>Changes:</strong> More pronounced changes. Maillard browning (reaction between lactose and protein) can cause a slightly "cooked" flavor and browning. Significant denaturation of whey proteins. More vitamin loss than pasteurization.</li>
                         </ul>
                     </div>

                     <div className="p-4 bg-gray-50 rounded-lg border">
                         <h5 className="font-bold font-headline text-gray-800 mb-2">Sterilization</h5>
                         <ul className="list-disc list-inside mt-2">
                             <li><strong>Benefits:</strong> Complete destruction of all microorganisms and spores.</li>
                             <li><strong>Changes:</strong> Severe heat treatment. Causes significant browning, cooked flavor, and substantial nutritional loss, especially of heat-sensitive vitamins. Major protein denaturation and changes in mineral balance.</li>
                         </ul>
                     </div>
                </div>
            </TabsContent>
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
