
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
                <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-4 h-auto">
                    {milkChemistryTabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">{tab.label}</TabsTrigger>
                    ))}
                </TabsList>
            </div>
            <div className="flex-1 overflow-auto">
            <ScrollArea className="h-full pr-4">
            <TabsContent value="composition">
                <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-bold text-primary mb-2 font-headline">What is Milk? (Doodh Kya Hai?)</h4>
                        <p><strong>FSSAI Definition:</strong> “Doodh ka matlab hai ek swasth doodh dene wale pashu se poori tarah se doodh nikalne se prapt सामान्य mammary srav, jismein koi milavat ya nikasi na ki gayi ho, jo liquid doodh ke roop mein upbhog ke liye ya aage ki processing ke liye ho.”</p>
                        <p className="mt-2"><strong>Codex Alimentarius Definition:</strong> “Doodh doodh dene wale pashuon ka normal mammary srav hai, jo colostrum se mukt ho, seedhe upbhog ya aage ki processing ke liye ho.”</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-bold text-primary mb-2 font-headline">Milk Constituents (Doodh ke Ghatak)</h4>
                        <p>Doodh ek complex colloidal system hai jismein paani, fat, protein, lactose, minerals, vitamins, aur enzymes shamil hote hain. Doodh ko teen alag-alag phases mein dekha ja sakta hai:</p>
                         <ul className="list-disc list-inside mt-2 space-y-1">
                          <li><strong>Emulsion:</strong> Fat globules paani mein bikhre rehte hain.</li>
                          <li><strong>Colloidal Suspension:</strong> Casein protein micelles paani mein suspended rehte hain.</li>
                          <li><strong>True Solution:</strong> Lactose, whey proteins, minerals, aur vitamins paani mein poori tarah ghule rehte hain.</li>
                        </ul>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="proteins">
                <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-bold text-primary mb-2 font-headline">Milk Proteins (~3.5%)</h4>
                        <p>Doodh ke proteins do mukhya shreniyon mein aate hain: <strong>Casein</strong> aur <strong>Whey (Serum) Proteins</strong>. Yeh doodh ke poshan aur bhautik gunon ke liye bahut mahatvapurna hain.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-50 rounded-lg border">
                            <h5 className="font-bold font-headline text-gray-800 mb-2">1. Casein (~80%)</h5>
                            <p>Casein doodh ka mukhya protein hai. Yeh paneer aur dahi banane ke liye zimmedar hai.</p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li><strong>Structure:</strong> Casein 'micelles' naam ke complex, spherical structures banata hai jo doodh mein suspended rehte hain.</li>
                                <li><strong>Fractions:</strong> Iske mukhya fractions hain: αs1-casein, αs2-casein, β-casein, aur κ-casein (Kappa-casein). κ-casein micelle ki satah par rehta hai aur use sthir (stable) banata hai.</li>
                                <li><strong>Acid Coagulation:</strong> Jab doodh ka pH 4.6 tak kam hota hai (lactic acid fermentation se), toh casein micelles apna charge kho dete hain aur aapas mein judkar ek gel banate hain. Yahi dahi jamne ka siddhant hai.</li>
                                <li><strong>Rennet Coagulation:</strong> Rennet enzyme (chymosin) khaas taur par κ-casein ko todta hai, jisse micelles unstable ho jaate hain aur calcium ki maujoodgi mein judkar ek thos curd (dahi) banate hain. Yahi cheese banane ka siddhant hai.</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border">
                            <h5 className="font-bold font-headline text-gray-800 mb-2">2. Whey Proteins (~20%)</h5>
                            <p>Paneer ya cheese banne ke baad bache hue liquid (whey) mein yeh proteins hote hain. Inhe serum proteins bhi kehte hain.</p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li><strong>Major Types:</strong> β-Lactoglobulin (sabse zyada), α-Lactalbumin, Bovine Serum Albumin (BSA), aur Immunoglobulins.</li>
                                <li><strong>Solubility:</strong> Yeh proteins acid mein ghulansheel hote hain, yaani pH 4.6 par precipitate nahi hote.</li>
                                <li><strong>Heat Sensitivity:</strong> Garam karne par yeh 'denature' (apna natural structure kho dena) ho jaate hain. Whey protein denaturation paneer ki yield badhane mein madad karta hai.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="other">
                 <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h5 className="font-bold font-headline text-green-800 mb-2">Lactose (~4.8%)</h5>
                        <p>Lactose doodh ka mukhya carbohydrate hai, jise 'milk sugar' bhi kehte hain. Yeh ek disaccharide hai jo glucose aur galactose se bana hota hai. Yeh doodh ko halka meetha swaad deta hai. Bacteria is lactose ko ferment karke lactic acid banate hain, jo dahi jaise fermented products banane ke liye zaroori hai.</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h5 className="font-bold font-headline text-yellow-800 mb-2">Milk Fat (~3.9%)</h5>
                        <p>Milk fat 'fat globules' ke roop mein hota hai. Har globule ke chaaron taraf ek protective layer (membrane) hoti hai jise <strong>Milk Fat Globule Membrane (MFGM)</strong> kehte hain. Yeh membrane fat ko paani mein emulsified rakhti hai. Homogenization process is membrane ko todkar fat globules ko chota kar deta hai.</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h5 className="font-bold font-headline text-purple-800 mb-2">Minerals (Ash) (~0.7%)</h5>
                        <p>Doodh minerals ka ek accha source hai, jismein Calcium (Ca), Phosphorus (P), Potassium (K), aur Magnesium (Mg) shamil hain. Calcium aur phosphorus haddiyon ke liye bahut zaroori hain. Doodh ke minerals uski stability aur pH ko maintain karne mein bhi madad karte hain.</p>
                    </div>
                 </div>
            </TabsContent>
            <TabsContent value="properties">
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Physical Properties of Milk (Doodh ke Bhautik Gun)</h4>
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
                     <h4 className="text-lg font-bold text-primary mb-2 font-headline">Effect of Thermal Processing on Milk (Doodh par Garmi ka Prabhav)</h4>
                     <p>Garam karne se doodh mein kai badlav aate hain jo uski suraksha, shelf-life, aur gunon ko prabhavit karte hain.</p>
                     
                     <div className="p-4 bg-gray-50 rounded-lg border">
                         <h5 className="font-bold font-headline text-gray-800 mb-2">Pasteurization (LTLT/HTST)</h5>
                         <ul className="list-disc list-inside mt-2">
                             <li><strong>Benefits:</strong> Hanikarak bacteria (pathogens) jaise TB aur Brucella ko nasht karta hai, lipase jaise enzymes ko nishkriya karta hai, aur shelf life badhata hai.</li>
                             <li><strong>Changes:</strong> Poshan mein na ke barabar badlav. Vitamin C aur B-group vitamins ka halka nuksan. Whey proteins thode denature ho sakte hain.</li>
                         </ul>
                     </div>

                     <div className="p-4 bg-gray-50 rounded-lg border">
                         <h5 className="font-bold font-headline text-gray-800 mb-2">UHT (Ultra-High Temperature) Processing</h5>
                         <ul className="list-disc list-inside mt-2">
                             <li><strong>Benefits:</strong> Doodh ko commercially sterile banata hai, jisse kamre ke taapman par lambe samay tak store kiya ja sakta hai.</li>
                             <li><strong>Changes:</strong> Zyada badlav. Maillard browning (lactose aur protein ke beech reaction) se halka "paka hua" swaad aur rang aa sakta hai. Whey proteins kaafi had tak denature ho jaate hain. Pasteurization se zyada vitamin ka nuksan hota hai.</li>
                         </ul>
                     </div>

                     <div className="p-4 bg-gray-50 rounded-lg border">
                         <h5 className="font-bold font-headline text-gray-800 mb-2">Sterilization</h5>
                         <ul className="list-disc list-inside mt-2">
                             <li><strong>Benefits:</strong> Sabhi microorganisms aur unke spores ka poorn vinash.</li>
                             <li><strong>Changes:</strong> Bahut zyada heat treatment. Kaafi browning, paka hua swaad, aur poshan mein, khaaskar heat-sensitive vitamins mein, bada nuksan hota hai. Protein ka major denaturation aur mineral balance mein badlav hota hai.</li>
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

    