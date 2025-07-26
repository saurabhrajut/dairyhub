
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
        <div className="space-y-4">{children}</div>
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
            <div className="prose max-w-none text-gray-700 text-base leading-relaxed">
                <section className="mb-8 space-y-4">
                    <p><strong>Calibration</strong> ka matlab hai kisi maapne wale upkaran (measuring equipment) ki tulna ek standard upkaran se karna jiska measurement pehle se hi sahi mana gaya ho. Isse yeh pata chalta hai ki humara upkaran kitna sateek (accurate) hai. Ismein adjustment shamil nahi hota, lekin yeh adjustment ki zaroorat ko dikha sakta hai.</p>
                    <p>Dairy plant mein, doodh ki composition (fat, SNF, etc.) aur quality ko reception se lekar dispatch tak kai baar analyze kiya jaata hai. Yeh product ki sahi keemat, processing ke liye uski upyuktta, aur kanooni manakon (legal standards) ko poora karne ke liye zaroori hai. Isliye, analysis mein istemal hone se pehle glassware (butyrometer, pipette, etc.) aur chemicals ka calibration aur standardization bahut zaroori hai, taaki galat results se bacha ja sake.</p>
                </section>
                
                <Section title="Mukhya Paribhashayein (Key Definitions)" id="definitions">
                    <SubHeading>Reagent</SubHeading>
                    <p>Ek padarth jo doosre padarth ke saath react karke chemical badlav laata hai.</p>
                    
                    <SubHeading>Solution (Ghol)</SubHeading>
                    <p>Solution do ya do se adhik padartho ka ek homogeneous mishran hai. Jismein ek solute (jo kam matra mein ho) aur ek solvent (jo adhik matra mein ho) hota hai.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Dilute Solution:</strong> Jismein solute ki matra kam ho.</li>
                        <li><strong>Concentrated Solution:</strong> Jismein solute ki matra zyada ho.</li>
                        <li><strong>Saturated Solution:</strong> Jismein ek nishchit taapman par aur solute na ghul sake.</li>
                    </ul>

                    <SubHeading>Standard Solution</SubHeading>
                    <p>Ek aisa solution jiski strength ya concentration bilkul sahi pata ho.</p>
                    
                    <SubHeading>Normal Solution (Normality - N)</SubHeading>
                    <p>Yeh 1 liter solution mein ghule hue solute ke gram equivalents ki sankhya hai. <code className="bg-muted p-1 rounded">N = gram equivalent of solute / volume of solution (L)</code>.</p>
                    <p>Gram equivalent weight = <code className="bg-muted p-1 rounded">Molar mass / n-factor</code>. (n-factor acid ke liye H+ ions ki sankhya aur base ke liye OH- ions ki sankhya hoti hai).</p>

                    <SubHeading>Molar Solution (Molarity - M)</SubHeading>
                    <p>Yeh 1 liter solution mein ghule hue solute ke moles ki sankhya hai. <code className="bg-muted p-1 rounded">M = moles of solute / volume of solution (L)</code>.</p>
                    
                    <SubHeading>Molal Solution (Molality - m)</SubHeading>
                    <p>Yeh 1000g (1 kg) solvent mein ghule hue solute ke moles ki sankhya hai. <code className="bg-muted p-1 rounded">m = No. of moles of solute / weight of solvent (kg)</code>.</p>
                    <p className="font-semibold mt-2">Note: Normality aur Molarity taapman par nirbhar karte hain kyunki volume taapman ke saath badalta hai, jabki Molality taapman se swatantra hai.</p>
                </Section>
                
                <Section title="Milk Pipette ka Calibration" id="pipette">
                     <SubHeading>(a) Tulna Vidhi (Comparison Method)</SubHeading>
                     <p>Is vidhi mein, ek nayi pipette se doodh ka fat test karke uski tulna ek purani, pehle se calibrate ki hui pipette ke result se ki jaati hai. Agar dono ka result same aata hai, to nayi pipette sahi maani jaati hai. Yeh sabse aasan par kam sateek tarika hai.</p>
                     
                     <SubHeading>(b) BIS Vidhi (Gravimetric Method)</SubHeading>
                     <p>Yeh sabse sateek vidhi hai. Ismein yeh jaancha jaata hai ki pipette 27°C par <strong>10.75 ± 0.03 ml</strong> distilled water dispense karti hai ya nahi.</p>
                     <ol className="list-decimal list-inside space-y-2 mt-2">
                         <li>Pipette ko saaf karke 27°C distilled water se mark ke upar tak bharein.</li>
                         <li>Meniscus ko mark par adjust karein.</li>
                         <li>Paani ko ek pehle se tole hue (weighed) beaker mein dispense karein.</li>
                         <li>Paani ke saath beaker ko tolein aur paani ka vajan (mass) nikaalein.</li>
                         <li>Volume calculate karein: <code className="bg-muted p-1 rounded">Volume = Mass / Density</code>. 27°C par paani ki density 0.99654 g/mL hoti hai.</li>
                         <li>Agar nikala gaya volume 10.72 ml se 10.78 ml ke beech hai, to pipette sahi hai.</li>
                     </ol>
                     
                     <SubHeading>(c) Ganitiya Vidhi (Mathematical Method)</SubHeading>
                     <p>Is vidhi mein pipette ke stem ke per unit length ka volume calculate kiya jaata hai aur phir do temporary points ke maapan ke आधार par 10.75 ml ka sahi point nirdharit karke ek permanent mark lagaya jaata hai.</p>
                </Section>
                
                <Section title="Butyrometer ka Calibration" id="butyrometer">
                     <SubHeading>Siddhant (Principle)</SubHeading>
                     <p>Butyrometer calibration ka mukhya siddhant yeh hai ki uske stem (patli nali) par bane nishaan ek nishchit volume ko darshate hain. <strong>Milk butyrometer</strong> ke liye, har <strong>1% fat mark 0.125 ml</strong> ke internal volume ke barabar hota hai. Isliye, 0 se 10% tak ki poori scale ka volume 1.25 ml hona chahiye. Calibration mein hum isi volume ko jaanchte hain. Iske liye aam taur par shuddh mercury (paara) ka istemal kiya jaata hai kyunki woh kaanch se chipakta nahi hai aur uski density bahut zyada hoti hai.</p>

                    <SubHeading>Calibration ke Alag-Alag Tarike</SubHeading>
                    
                    <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">1. Tulna Vidhi (Comparison Method)</h4>
                    <p>Yeh sabse aasan tarika hai. Ismein ek hi doodh ke sample ka fat do alag-alag butyrometers mein test kiya jaata hai:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Ek pehle se calibrate kiya hua (standard) butyrometer.</li>
                        <li>Ek naya butyrometer jise calibrate karna hai.</li>
                    </ul>
                    <p>Agar dono butyrometers mein fat ki reading same aati hai, to naye butyrometer ko sahi maan liya jaata hai. Lekin yeh method bahut sateek nahi hai kyunki ho sakta hai ki purana (standard) butyrometer bhi sahi na ho.</p>

                    <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">2. BIS Vidhi (Mercury Pipette Method)</h4>
                    <p>Yeh ek zyada sateek aur standard tarika hai. Ismein ek khaas tarah ki automatic mercury pipette ka istemal hota hai jo ek baar mein theek <strong>0.3125 ml</strong> mercury dispense karti hai. Yeh volume butyrometer ke <strong>2.5% fat scale</strong> ke barabar hota hai.</p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Butyrometer ko saaf karke sukha lein.</li>
                        <li>Butyrometer ko 10% mark tak mercury se bhar lein. Isko hum base (zero) point maante hain.</li>
                        <li>Mercury pipette se 0.3125 ml mercury butyrometer mein daalein. Mercury ka level 10% se 7.5% tak aa jaana chahiye.</li>
                        <li>Is process ko 3 baar aur repeat karein. Har baar mercury 2.5% scale ko bharega (7.5% -> 5.0% -> 2.5% -> 0%).</li>
                        <li>Agar 4 baar mercury daalne par butyrometer ki scale 0 se 10% tak poori tarah sahi-sahi bhar jaati hai, to butyrometer calibrate maana jaata hai.</li>
                    </ol>
                    
                    <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">3. Gravimetric Vidhi (Mercury Tolekar)</h4>
                    <p>Yeh sabse sateek (accurate) tarika hai. Ismein alag-alag marks ke beech mercury ka vajan (weight) karke volume nikala jaata hai.</p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Ek saaf, sukhe butyrometer ko tolein.</li>
                        <li>Usmein 10% mark tak mercury bharein aur dobara tolein.</li>
                        <li>Ab 9% mark tak mercury bharein aur phir tolein. Dono vajan ke antar se 9% aur 10% ke beech mercury ka vajan pata chalega.</li>
                        <li>Mercury ki density (jo taapman par nirbhar karti hai) ka istemal karke, is vajan ko volume mein convert karein: <code className="bg-muted p-1 rounded">Volume = Mass / Density</code>.</li>
                        <li>Yeh volume <strong>0.125 ± 0.001 ml</strong> ke beech hona chahiye (1% fat ke liye).</li>
                        <li>Isi prakar, butyrometer ke scale par 2-3 alag-alag points (jaise 5-6% aur 1-2%) par is test ko repeat karein taaki poori scale ki accuracy check ho sake.</li>
                    </ol>

                     <Table>
                        <TableCaption>Table 6.1: Alag-alag products ke liye Butyrometer ke types</TableCaption>
                        <TableHeader>
                            <TableRow><TableHead>Scale Range (%)</TableHead><TableHead>Product</TableHead></TableRow>
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
                    <SubHeading>Siddhant (Principle)</SubHeading>
                    <p>Lactometer <strong>Archimedes ke siddhant</strong> par kaam karte hain: koi bhi vastu jab kisi liquid mein duboyi jaati hai, to us par upar ki taraf ek bal lagta hai jo us vastu dwara hataye gaye liquid ke bhar ke barabar hota hai. Lactometer liquid ki specific gravity (vishesh gurutva) maapta hai. Doodh jitna gaadha hoga (zyada SNF), lactometer utna hi kam dubega aur reading zyada aayegi. Paani milane par doodh patla ho jaata hai, jisse lactometer zyada dubta hai aur reading kam aati hai.</p>
                    <p>Aam taur par 3 prakaar ke lactometers istemal hote hain, jo alag-alag taapman par calibrate kiye jaate hain:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Quevenne’s Lactometer:</strong> 15.5°C par calibrate hota hai.</li>
                        <li><strong>BIS Lactometer:</strong> 27°C par calibrate hota hai.</li>
                        <li><strong>Zeal Lactometer:</strong> 29.4°C par calibrate hota hai.</li>
                    </ul>
                    <p>Ek standard BIS lactometer mein 1.020 se 1.035 tak specific gravity range hoti hai, jise scale par 20 se 35 ke roop mein darshaya jaata hai.</p>

                    <SubHeading>Calibration ke Alag-Alag Tarike</SubHeading>
                    <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">1. Tulna Vidhi (Comparison Method)</h4>
                    <p>Yeh sabse aasan tarika hai. Ismein ek hi doodh ke sample mein do lactometers (ek naya aur ek pehle se calibrate kiya hua standard lactometer) ek saath duboye jaate hain. Agar dono ki reading same aati hai, to naye lactometer ko sahi maan liya jaata hai.</p>

                    <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">2. BIS Vidhi (Standard Solution Method)</h4>
                    <p>Yeh ek sateek (accurate) tarika hai jismein pehle se jyat specific gravity wale solutions ka istemal hota hai. Aam taur par, <strong>anhydrous sodium carbonate</strong> ya <strong>sodium chloride</strong> ke solutions banaye jaate hain.</p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Table ke anusar, alag-alag specific gravity (jaise 1.025, 1.030) ke liye nirdharit matra mein anhydrous sodium carbonate ko distilled water mein gholein.</li>
                        <li>Is solution ka surface tension doodh ke barabar laane ke liye thoda ethyl alcohol milayein.</li>
                        <li>Solution ko lactometer jar mein daalein aur taapman ko lactometer ke calibration temperature (jaise BIS ke liye 27°C) par laayein.</li>
                        <li>Lactometer ko dheere se solution mein duboye aur sthir hone dein.</li>
                        <li>Reading note karein. Aapki reading standard solution ki specific gravity se match karni chahiye. BIS ke anusar, 0.0005 se zyada ka antar nahi hona chahiye.</li>
                    </ol>
                </Section>
                
                <Section title="Anya Glassware ka Calibration" id="other-glassware">
                    <p>Volumetric flasks, measuring cylinders, aur beakers jaise glassware ko calibrate karna bhi utna hi zaroori hai jitna pipettes aur butyrometers ko. Inka calibration bhi <strong>Gravimetric Method</strong> (vajan maap kar) se kiya jaata hai.</p>
                    <SubHeading>Siddhant (Principle)</SubHeading>
                    <p>Is vidhi ka siddhant bahut saral hai: hum glassware mein aane wale distilled water ke vajan (mass) ko ek nishchit taapman par tolekar uske volume ka pata lagate hain, kyunki har taapman par paani ki density jyat hoti hai (<code className="bg-muted p-1 rounded">Volume = Mass / Density</code>). Is nikale gaye volume ki tulna glassware par likhi hui capacity se ki jaati hai.</p>
                    
                    <SubHeading>Volumetric Flask/Measuring Cylinder/Beaker ki Calibration Vidhi</SubHeading>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Ek saaf aur poori tarah se sukhe hue volumetric flask (ya cylinder/beaker) ko ek sateek (accurate) weighing balance par tolein. Is vajan ko <strong>W1</strong> ke roop mein note karein.</li>
                        <li>Ab, us flask mein nishchit taapman (aam taur par 27°C) wala distilled water uske graduation mark tak dheere-dheere bharein. Meniscus ka nichla hissa mark par hona chahiye.</li>
                        <li>Paani se bhare hue flask ko dobara tolein. Is vajan ko <strong>W2</strong> ke roop mein note karein.</li>
                        <li>Paani ka vajan (mass) nikaalein: <strong>Mass of Water = W2 - W1</strong>.</li>
                        <li>Ab is vajan se paani ka volume calculate karein: <strong>Volume (ml) = Mass of Water (g) / Density of Water at 27°C (0.99654 g/ml)</strong>.</li>
                        <li>Calculate kiye gaye volume ki tulna flask par likhi hui capacity (jaise 100 ml, 250 ml) se karein.</li>
                        <li>Har glassware ki ek tolerance limit hoti hai (Class A ke liye kam, Class B ke liye zyada). Agar calculate kiya gaya volume is limit ke andar hai, to glassware sahi hai, varna use reject kar diya jaata hai.</li>
                    </ol>
                </Section>
                
                <Section title="Thermometer ka Calibration" id="thermometer">
                    <p>Thermometers ko do fixed points par calibrate kiya jaata hai:</p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li><strong>Ice Point (0°C):</strong> Shuddh pighalti hui barf (ice-water mixture) ka istemal karke 0°C ka point check kiya jaata hai.</li>
                        <li><strong>Boiling Point (100°C):</strong> Ubalte hue shuddh paani (boiling distilled water) ka istemal karke 100°C ka point check kiya jaata hai. Ismein atmospheric pressure ka dhyan rakhna zaroori hai.</li>
                    </ol>
                </Section>
                
                <Section title="Weighing Balance ka Calibration" id="balance">
                    <p>Weighing balance ko standard, certified weights ka istemal karke calibrate kiya jaata hai. Iske liye teen mukhya tests kiye jaate hain:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li><strong>Eccentricity Test:</strong> Ismein standard weight ko weighing pan ke alag-alag kono par rakh kar dekha jaata hai ki reading badal to nahi rahi.</li>
                        <li><strong>Repeatability Test:</strong> Ismein ek hi weight ko baar-baar rakh kar check kiya jaata hai ki balance har baar same reading de raha hai ya nahi.</li>
                        <li><strong>Linearity Test:</strong> Ismein balance ki poori measuring range (e.g., 0g se 200g) mein alag-alag standard weights (e.g., 20g, 50g, 100g, 150g) rakh kar accuracy jaanchi jaati hai.</li>
                    </ul>
                </Section>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
