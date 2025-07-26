
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <section id={id} className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        {children}
    </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{children}</h3>
);


export function CalibrationStandardizationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Calibration aur Standardization</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            Dairy laboratory mein sahi maap sunishchit karne ke liye ek guide.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full pr-6 mt-4">
            <div className="prose max-w-none text-gray-700 text-sm leading-relaxed">
                <section className="mb-8">
                    <p>Calibration ka matlab hai maapne wale upkaran (measuring equipment) ki measurement uncertainty ko sthapit karna aur record karna. Ismein adjustment shamil nahi hai, lekin yeh adjustment ki zaroorat ko dikha sakta hai. Saral shabdon mein, calibration ek takneek hai jismein ek device se ki gayi jaani maap (known magnitude) ki tulna, doosre device se usi tarah se ki gayi maap se ki jaati hai.</p>
                    <p>Dairy plant mein, doodh ki composition aur quality jaise kai factors ka vishleshan kiya jaata hai. Yeh product ki sahi keemat, processing ke liye uski upyuktta, aur kanooni manakon (legal standards) ko poora karne ke liye zaroori hai. Isliye, analysis mein istemal hone se pehle glassware ka calibration bahut zaroori hai, taaki galat results se bacha ja sake.</p>
                    <p>Dairy lab mein aam taur par istemal hone wale glassware hain: butyrometer, lactometer, milk pipette, volumetric flask, measuring cylinder, beaker, thermometer, aadi.</p>
                    <p>Results ki vishvasniyata (reliability) sirf glassware par hi nahi, balki chemicals par bhi nirbhar karti hai. Isliye, taiyar kiye gaye solutions ki shuddhta sunishchit karne ke liye, unhe primary standard padartho jaise oxalic acid, sodium carbonate, aadi ka istemal karke standardize karna zaroori hai. Iske liye normality, molarity, aur molality jaise terms ki basic jaankari hona anivarya hai.</p>
                </section>
                
                <Section title="Mukhya Paribhashayein (Key Definitions)" id="definitions">
                    <SubHeading>Reagent</SubHeading>
                    <p>Ek padarth jo doosre padarth ke saath react karke chemical badlav laata hai.</p>
                    
                    <SubHeading>Solution (Ghol)</SubHeading>
                    <p>Solution do ya do se adhik padartho ka ek homogeneous mishran hai. Jismein ek solute (jo kam matra mein ho) aur ek solvent (jo adhik matra mein ho) hota hai.</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Dilute Solution:</strong> Jismein solute ki matra kam ho.</li>
                        <li><strong>Concentrated Solution:</strong> Jismein solute ki matra zyada ho.</li>
                        <li><strong>Saturated Solution:</strong> Jismein ek nishchit taapman par aur solute na ghul sake.</li>
                    </ul>

                    <SubHeading>Standard Solution</SubHeading>
                    <p>Ek aisa solution jiski strength ya concentration pata ho.</p>
                    
                    <SubHeading>Normal Solution (Normality)</SubHeading>
                    <p>Yeh 1 liter solution mein ghule hue solute ke gram equivalents ki sankhya hai (N se darshaya jaata hai). N = gram equivalent of solute / volume of solution (L).</p>
                    <p>Gram equivalent weight = Molar mass / n-factor (Valency/replaceable ions).</p>

                    <SubHeading>Molarity</SubHeading>
                    <p>1 liter solution mein ghule hue solute ke moles ki sankhya (M se darshaya jaata hai). M = moles of solute / volume of solution (L).</p>
                    
                    <SubHeading>Molality</SubHeading>
                    <p>1000g (1 kg) solvent mein ghule hue solute ke moles ki sankhya (m se darshaya jaata hai). m = No. of moles of solute / weight of solvent (kg).</p>
                    <p className="font-semibold mt-2">Note: Normality aur Molarity taapman par nirbhar karte hain kyunki volume taapman ke saath badalta hai, jabki Molality taapman se swatantra hai.</p>
                </Section>
                
                <Section title="Milk Pipette ka Calibration" id="pipette">
                     <SubHeading>(a) Tulna Vidhi (Comparison Method)</SubHeading>
                     <p>Nayi pipette se nikale gaye doodh ke fat ki tulna ek purani, calibrated pipette se nikale gaye fat se ki jaati hai. Agar result same hai, to nayi pipette स्वीकार kar li jaati hai.</p>
                     
                     <SubHeading>(b) BIS Vidhi (BIS Method)</SubHeading>
                     <p>Yeh vidhi yeh jaanchti hai ki pipette 27°C par 10.75 ± 0.03 ml distilled water dispense karti hai ya nahi.</p>
                     <ol className="list-decimal list-inside space-y-1">
                         <li>Pipette ko saaf karke 27°C distilled water se mark ke upar tak bharein.</li>
                         <li>Meniscus ko mark par adjust karein.</li>
                         <li>Paani ko ek pehle se tole hue beaker mein dispense karein.</li>
                         <li>Paani ke saath beaker ko tolein aur paani ka mass nikaalein.</li>
                         <li>Volume calculate karein: Volume = Mass / Density (27°C par paani ka density 0.99654 g/mL hota hai).</li>
                         <li>Agar volume tolerance ke andar hai to pipette स्वीकार karein.</li>
                     </ol>
                     
                     <SubHeading>(c) Ganitiya Vidhi (Mathematical Method)</SubHeading>
                     <p>Is vidhi mein pipette stem ke per unit length ka volume calculate kiya jaata hai aur phir do temporary points ke maapan ke आधार par 10.75 ml ka sahi point nirdharit kiya jaata hai.</p>
                </Section>
                
                <Section title="Butyrometer ka Calibration" id="butyrometer">
                     <p>Butyrometer ko is siddhant par calibrate kiya jaata hai ki har 1% fat mark 0.125 ml ke internal volume ke barabar hota hai. Iski jaanch aam taur par shuddh mercury (paara) se ki jaati hai.</p>
                     
                     <Table>
                        <TableCaption>Table 6.1: BIS ke anusaar Butyrometer ka vargikaran</TableCaption>
                        <TableHeader>
                            <TableRow><TableHead>Scale (%)</TableHead><TableHead>Product</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>0–0.5</TableCell><TableCell>Skim milk</TableCell></TableRow>
                            <TableRow><TableCell>0–4</TableCell><TableCell>Partly skimmed milk, buttermilk</TableCell></TableRow>
                            <TableRow><TableCell>0–10</TableCell><TableCell>Whole milk, evaporated milk (unsweetened)</TableCell></TableRow>
                            <TableRow><TableCell>0–20</TableCell><TableCell>Dry milk powder</TableCell></TableRow>
                            <TableRow><TableCell>0–40</TableCell><TableCell>Ice cream, condensed milk, cheese</TableCell></TableRow>
                            <TableRow><TableCell>0–70</TableCell><TableCell>Cream</TableCell></TableRow>
                            <TableRow><TableCell>0–90</TableCell><TableCell>Butter</TableCell></TableRow>
                        </TableBody>
                     </Table>
                </Section>

                <Section title="Lactometer ka Calibration" id="lactometer">
                     <p>Lactometers ko jyat specific gravity wale solutions ka istemal karke calibrate kiya jaata hai, aam taur par anhydrous sodium carbonate ya sodium chloride solutions. Lactometer reading ko in standard solutions ki jyat specific gravity ke saath ek nishchit taapman par (jaise BIS lactometer ke liye 27°C) check kiya jaata hai.</p>
                </Section>
                
                <Section title="Anya Glassware ka Calibration" id="other-glassware">
                    <p>Volumetric flasks, measuring cylinders, aur beakers ko unmein aane wale distilled water ke volume ko ek nishchit taapman (jaise 27°C) par tolekar calibrate kiya jaata hai aur uski tulna uski nirdharit capacity se ki jaati hai, yeh sunishchit karte hue ki yeh uske class (Class A ya Class B) ke tolerance limits ke andar ho.</p>
                </Section>
                
                <Section title="Thermometer ka Calibration" id="thermometer">
                    <p>Thermometers ko fixed points par calibrate kiya jaata hai. Ek 0-100°C thermometer ke liye, yeh ice point (0°C) par barf-paani ke mishran ka istemal karke aur boiling point (100°C, atmospheric pressure ke liye adjust kiya gaya) par ubalte hue distilled water ka istemal karke kiya jaata hai.</p>
                </Section>
                
                <Section title="Weighing Balance ka Calibration" id="balance">
                    <p>Weighing balance ko teen mukhya tests ka istemal karke calibrate kiya jaata hai:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Eccentric Test:</strong> Jab weight ko platform par alag-alag jagahon par rakha jaata hai to accuracy jaanchta hai.</li>
                        <li><strong>Repeatability Test:</strong> Jaanchta hai ki balance ek hi weight ke liye baar-baar same reading deta hai ya nahi.</li>
                        <li><strong>Linearity Test:</strong> Balance ki poori measuring range mein accuracy jaanchta hai.</li>
                    </ul>
                </Section>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
