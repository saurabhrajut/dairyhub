
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { funFacts } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const milkChemistryTabs = [
    { value: "composition", label: "Composition" },
    { value: "proteins", label: "Proteins" },
    { value: "properties", label: "Properties" },
    { value: "processing", label: "Processing & Fermentation" },
    { value: "cultures", label: "Cultures" },
    { value: "fun-facts", label: "Fun Facts" },
];

const physicalProperties = [
    { property: "Density (at 20°C)", value: "Cow: 1.028-1.032 g/mL, Buffalo: 1.030-1.034 g/mL", details: "Milk is denser than water due to its solid content (SNF). Higher fat content slightly lowers density. Used to detect water adulteration." },
    { property: "Viscosity (at 20°C)", value: "~2.0 cP", details: "About twice as viscous as water. Depends on temperature and composition (fat, protein). Homogenization increases viscosity." },
    { property: "Surface Tension", value: "50-60 mN/m", details: "Lower than water (72 mN/m) due to surfactants like proteins and free fatty acids." },
    { property: "Refractive Index (at 40°C)", value: "1.3440 - 1.3485", details: "Used for quick estimation of total solids and to detect water adulteration." },
    { property: "Freezing Point", value: "-0.522 to -0.540 °C", details: "A reliable indicator for detecting added water, as added water raises the freezing point closer to 0°C." },
    { property: "Acidity (Titratable)", value: "Cow: 0.14-0.16% LA, Buffalo: 0.17-0.18% LA", details: "Natural acidity is due to casein, phosphates, citrates, etc. Not due to lactic acid in fresh milk." },
    { property: "pH", value: "6.4 - 6.8", details: "Slightly acidic. Lower pH suggests bacterial action (souring)." },
    { property: "Specific Heat", value: "0.9454 kcal/kg·°C", details: "Energy required to raise the temperature by 1°C. Crucial for designing heat treatments." },
    { property: "Electric Conductivity", value: "0.005 mho/cm at 20°C", details: "Depends on soluble salt concentration. Used to detect mastitis (infection increases EC)." },
    { property: "Heat Stability", value: "Cow milk is stable at 130°C for 30 mins", details: "Ability to withstand high temperatures without coagulation. Affected by pH, protein, and mineral balance." },
];

const InfoBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
    </div>
);

export function MilkChemistryModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Chemistry of Milk</DialogTitle>
          <DialogDescription className="text-center">A deep dive into the science of milk.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="composition" className="flex flex-col h-full">
            <div className="w-full">
                <ScrollArea className="w-full whitespace-nowrap rounded-md pb-4">
                    <TabsList className="inline-flex h-auto">
                        {milkChemistryTabs.map(tab => (
                            <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">{tab.label}</TabsTrigger>
                        ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <ScrollArea className="h-full pr-4 flex-1">
                <TabsContent value="composition">
                    <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="What is Milk? (Doodh Kya Hai?)">
                            <p><strong>Scientific Definition:</strong> “Milk is the normal secretion of the mammary glands of mammals, obtained without any colostrum, and is composed of water, fat, proteins, lactose, minerals, and vitamins in a naturally balanced form.”</p>
                            <p><strong>FSSAI Definition:</strong> “Doodh ka matlab hai ek swasth doodh dene wale pashu se poori tarah se doodh nikalne se prapt सामान्य mammary srav, jismein koi milavat ya nikasi na ki gayi ho, jo liquid doodh ke roop mein upbhog ke liye ya aage ki processing ke liye ho.”</p>
                            <p className="mt-2"><strong>Codex Alimentarius Definition:</strong> “Doodh doodh dene wale pashuon ka normal mammary srav hai, jo colostrum se mukt ho, seedhe upbhog ya aage ki processing ke liye ho.”</p>
                            <p>Doodh ek complex biological fluid hai jo teen alag-alag phases mein dekha ja sakta hai:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>Emulsion:</strong> Fat globules paani mein bikhre rehte hain.</li>
                            <li><strong>Colloidal Suspension:</strong> Casein protein micelles paani mein suspended rehte hain.</li>
                            <li><strong>True Solution:</strong> Lactose, whey proteins, minerals, aur vitamins paani mein poori tarah ghule rehte hain.</li>
                            </ul>
                        </InfoBlock>
                        
                        <InfoBlock title="Milk Constituents (Doodh ke Ghatak)">
                            <p>Doodh ek complex colloidal system hai jo multiple components ka mixture hota hai. Har constituent milk ki nutritional aur functional properties ko define karta hai.</p>
                            
                            <h5 className="font-bold mt-4">1. Water (Paani) – 87-88%</h5>
                            <p>Doodh ka sabse bada hissa paani hota hai, jo milk ko fluid nature deta hai aur baki constituents ke liye solvent ka kaam karta hai.</p>

                            <h5 className="font-bold mt-4">2. Fat (Lipids) – 3-6%</h5>
                            <p>Milk fat ek emulsion (fat droplets dispersed in water) ki tarah hota hai. Ye doodh ka sabse energy-rich component hai (9 kcal/g) aur flavor, texture aur fat-soluble vitamins (A, D, E, K) provide karta hai.</p>
                            <Table className="my-2">
                                <TableHeader><TableRow><TableHead>Type of Milk</TableHead><TableHead>Fat % (Approx)</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>Cow Milk</TableCell><TableCell>3.5-4.5%</TableCell></TableRow>
                                    <TableRow><TableCell>Buffalo Milk</TableCell><TableCell>6-7%</TableCell></TableRow>
                                </TableBody>
                            </Table>

                            <h5 className="font-bold mt-4">3. Protein – 3-4%</h5>
                            <p>Milk protein high biological value ka hota hai aur essential amino acids provide karta hai. Yeh do prakar ke hote hain: Casein (~80%) aur Whey (~20%).</p>
                            
                            <h5 className="font-bold mt-4">4. Lactose (Milk Sugar) – 4.5-5.0%</h5>
                            <p>Yeh doodh ka primary carbohydrate hai (glucose + galactose) jo doodh ko halka meetha swaad deta hai. Bacteria isse ferment karke lactic acid banate hain, jo dahi jaise products ke liye zaroori hai.</p>

                            <h5 className="font-bold mt-4">5. Minerals & Salts (Ash) – 0.7-0.9%</h5>
                            <p>Doodh minerals ka ek accha source hai, jismein Calcium (Ca) aur Phosphorus (P) pramukh hain. Yeh milk ki stability aur pH ko maintain karne mein bhi madad karte hain.</p>
                            <Table className="my-2">
                                <TableHeader><TableRow><TableHead>Mineral</TableHead><TableHead>Quantity (mg per 100g milk)</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>Calcium</TableCell><TableCell>120-130 mg</TableCell></TableRow>
                                    <TableRow><TableCell>Phosphorus</TableCell><TableCell>90-100 mg</TableCell></TableRow>
                                    <TableRow><TableCell>Potassium</TableCell><TableCell>140-150 mg</TableCell></TableRow>
                                </TableBody>
                            </Table>
                            
                            <h5 className="font-bold mt-4">6. Vitamins</h5>
                            <p><strong>Fat-Soluble:</strong> A, D, E, K. <strong>Water-Soluble:</strong> B-Complex (B1, B2, B12) and C.</p>

                            <h5 className="font-bold mt-4">7. Enzymes</h5>
                            <p><strong>Lipase</strong> (fat breakdown), <strong>Lactoperoxidase</strong> (natural antimicrobial), <strong>Alkaline Phosphatase</strong> (pasteurization indicator).</p>
                        </InfoBlock>
                    </div>
                </TabsContent>
                <TabsContent value="proteins">
                    <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="Casein (~80% of Milk Protein)">
                            <p>Casein doodh ka mukhya protein hai jo 'micelles' naam ke complex, spherical structures banata hai. Yeh paneer aur dahi banane ke liye zimmedar hai. Iska isoelectric point 4.6 pH hota hai.</p>
                            
                            <h5 className="font-bold mt-4">Casein Fractions</h5>
                            <ul className="list-disc list-inside space-y-2">
                            <li><strong>αS1-Casein (~40-45%):</strong> Sabse abundant, calcium-sensitive, aur cheese me firm gel banata hai.</li>
                            <li><strong>αS2-Casein (~10-15%):</strong> More hydrophilic, water-holding capacity badhata hai.</li>
                            <li><strong>β-Casein (~25-35%):</strong> Micelle ko stable rakhta hai. Iske A1 aur A2 variants hote hain.</li>
                            <li><strong>κ-Casein (~10-15%):</strong> Micelle ki satah par rehta hai aur use sthir (stable) banata hai. Rennet (chymosin) enzyme isiko todta hai.</li>
                            </ul>

                            <h5 className="font-bold mt-4">Casein Coagulation (Curd Formation)</h5>
                            <ul className="list-disc list-inside space-y-2">
                            <li><strong>Acid Coagulation:</strong> Jab doodh ka pH 4.6 tak kam hota hai, toh casein micelles apna charge kho dete hain aur judkar gel banate hain (e.g., Paneer, Yogurt).</li>
                            <li><strong>Enzymatic Coagulation:</strong> Rennet enzyme κ-casein ko todta hai, jisse micelles unstable ho jaate hain aur calcium ki maujoodgi mein judkar curd banate hain (e.g., Cheese).</li>
                            </ul>
                        </InfoBlock>

                        <InfoBlock title="Whey Proteins (~20% of Milk Protein)">
                            <p>Paneer ya cheese banne ke baad bache hue liquid (whey) mein yeh proteins hote hain. Yeh fast-digesting aur high nutritional value wale hote hain.</p>
                            <h5 className="font-bold mt-4">Whey Protein Fractions</h5>
                            <ul className="list-disc list-inside space-y-2">
                            <li><strong>β-Lactoglobulin (~50-55%):</strong> Sabse zyada, heat-sensitive, foaming aur gelation mein madad karta hai.</li>
                            <li><strong>α-Lactalbumin (~20-25%):</strong> Lactose synthesis ke liye zaroori, infant formula me use hota hai.</li>
                            <li><strong>Serum Albumin (BSA) (~5-10%):</strong> Antioxidant properties.</li>
                            <li><strong>Immunoglobulins (Ig) (~8-10%):</strong> Immune system support.</li>
                            <li><strong>Lactoferrin (~1-2%):</strong> Iron-binding, antimicrobial properties.</li>
                            </ul>
                        </InfoBlock>
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
                        <InfoBlock title="Factors Affecting Milk Product Quality">
                            <p>Milk products ki quality milk ke inherent properties aur processing techniques par depend karti hai.</p>
                            <h5 className="font-bold mt-3">A) Milk Quality</h5>
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong>Protein & Fat Content:</strong> Directly impact texture, viscosity, flavor aur nutritional value.</li>
                                <li><strong>Inhibitors:</strong> Antibiotics ya natural inhibitors fermentation process ko disturb kar sakte hain.</li>
                            </ul>
                            <h5 className="font-bold mt-3">B) Milk Processing</h5>
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong>Standardization:</strong> Fat aur protein content ko adjust karna consistency ke liye zaroori hai.</li>
                                <li><strong>Homogenization:</strong> Fat globules ko break karke cream separation ko rokta hai.</li>
                                <li><strong>Heat Treatment:</strong> Pasteurization aur UHT jaise process shelf life badhane aur safety ensure karne me madad karte hain.</li>
                            </ul>
                        </InfoBlock>
                        
                        <InfoBlock title="Thermal Processing of Milk">
                            <p>Thermal processing doodh ki safety aur shelf life badhane ke liye zaroori hai.</p>
                            <h5 className="font-bold mt-3">1. Pasteurization</h5>
                            <p>A mild heat treatment to kill pathogens. The most common method is High-Temperature Short-Time (HTST): 72°C (161°F) for 15 seconds.</p>
                            <h5 className="font-bold mt-3">2. Ultra-High-Temperature (UHT) Processing</h5>
                            <p>Milk is heated to 135°C - 150°C for a few seconds, making it commercially sterile with a long shelf life at room temperature.</p>
                            <h5 className="font-bold mt-3">3. Sterilization</h5>
                            <p>A more intense heat treatment (e.g., 116°C for 15 min) that kills all microorganisms, including spores.</p>
                        </InfoBlock>

                        <InfoBlock title="Heat Induced Changes in Milk">
                            <p>Heating milk causes several physical and chemical changes:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Protein denaturation (especially whey proteins).</li>
                                <li>Maillard reaction (browning) between lactose and proteins.</li>
                                <li>Precipitation of some milk salts.</li>
                                <li>Release of SH groups, leading to a "cooked" flavor.</li>
                                <li>Reduction of some heat-sensitive vitamins.</li>
                            </ul>
                        </InfoBlock>
                        
                        <InfoBlock title="Popular Fermented Dairy Products">
                            <p>Fermented dairy products India ke traditional food culture ka ek important hissa hain.</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Dahi (Curd):</strong> Traditional Indian fermented milk product.</li>
                                <li><strong>Yogurt & Flavored Dahi:</strong> Similar to dahi, often with added flavors.</li>
                                <li><strong>Lassi – Sweet ya Salted:</strong> A yogurt-based drink blended with water and spices/sugar.</li>
                                <li><strong>Buttermilk/Chhach:</strong> The liquid left after churning butter, often spiced.</li>
                                <li><strong>Probiotic Drinks:</strong> Functional beverages enriched with live beneficial bacteria.</li>
                            </ol>
                        </InfoBlock>

                    </div>
                </TabsContent>
                <TabsContent value="cultures">
                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="Lactic Acid Bacteria (LAB) Cultures">
                            <p>Lactic acid bacteria (LAB) dairy products ke fermentation process mein ek important role play karti hain. Ye bacteria lactose ko lactic acid me convert karte hain. Inhe unke optimal growth temperature ke basis par categorize kiya jata hai:</p>
                            
                            <h5 className="font-bold mt-3">1. Mesophilic Cultures</h5>
                            <p><strong>Optimal Growth Temperature:</strong> Below 30°C</p>
                            <p><strong>Function:</strong> Inka mukhya kaam lactic acid banana hai. Yeh diacetyl jaise flavor compounds bhi banate hain (buttery aroma) aur pH kam karke harmful bacteria ko rokte hain.</p>

                            <h5 className="font-bold mt-3">2. Thermophilic Cultures</h5>
                            <p><strong>Optimal Growth Temperature:</strong> Above 37°C</p>
                            <p><strong>Function:</strong> Yeh tezi se acid banate hain, jo high-temperature cooking wale cheese ke liye zaroori hai. Yeh bhi specific flavor profiles banate hain.</p>
                        </InfoBlock>
                        <InfoBlock title="Factors in Culture Selection">
                            <p>Sahi microbial culture ka chunaav product ki quality, taste, texture aur shelf life ko સીਧે taur par prabhavit karta hai.</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Type of Product:</strong> Har product (Yogurt, Lassi, Buttermilk) ke liye specific strains (e.g., <em>Lactobacillus bulgaricus</em>, <em>Streptococcus thermophilus</em>) use hote hain.</li>
                                <li><strong>Flavor & Texture:</strong> Kuch strains (<em>Lactococcus lactis</em>) tangy flavor dete hain, jabki kuch (<em>Leuconostoc</em>) buttery flavor dete hain. Exopolysaccharide (EPS) producing bacteria thickness badhate hain.</li>
                                <li><strong>Regulatory Requirements:</strong> Cultures FSSAI/FDA dwara approved (GRAS) hone chahiye.</li>
                                <li><strong>Manufacturing Constraints:</strong> Fast-fermenting strains processing time kam karte hain. Incubation temperature (mesophilic/thermophilic) bhi ek factor hai.</li>
                                <li><strong>Phage Resistance:</strong> Bacteriophages (viruses) fermentation fail kar sakte hain. Isliye, phage-resistant cultures ka istemal aur strains ka rotation karna zaroori hai.</li>
                            </ol>
                        </InfoBlock>
                        <InfoBlock title="Important Parameters in Yogurt Manufacturing">
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Heat Treatment:</strong> Doodh ko 85–95°C tak 5–10 minutes ke liye garam kiya jata hai. Isse whey proteins denature hokar yogurt ki texture aur viscosity ko enhance karte hain.</li>
                                <li><strong>Inoculation (Culture Addition):</strong> Doodh ko 43°C tak thanda karke starter culture add kiya jata hai.</li>
                                <li><strong>Incubation (Fermentation):</strong> Containers ko 42–43°C par 4 se 6 ghante tak incubate kiya jata hai, jab tak desired acidity (pH ~4.6) achieve na ho jaye.</li>
                                <li><strong>Cooling:</strong> Fermentation rokne ke liye yogurt ko 5°C tak thanda kiya jata hai. Gradual cooling syneresis (whey separation) ko rokta hai.</li>
                            </ol>
                        </InfoBlock>
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
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
