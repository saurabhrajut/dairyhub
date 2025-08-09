
"use client";

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
import {
  CheckCircle,
  Thermometer,
  Settings,
  Filter,
  Droplet,
  Wind,
  Layers,
  Archive,
  RotateCw,
  Scaling,
  Zap,
  Clock
} from "lucide-react";

function Section({ title, icon: Icon, children, value }: { title: string, icon: React.ElementType, children: React.ReactNode, value: string }) {
    return (
        <AccordionItem value={value}>
            <AccordionTrigger className="text-xl font-bold hover:no-underline font-headline">
                <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <span>{title}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed pl-9 break-words">
                    {children}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}

export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            The Science of Dairy Processing
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A deep-dive into the core technologies that transform raw milk.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 mt-4 pr-6">
            <Accordion type="single" collapsible className="w-full" defaultValue="heat-treatment">
                <Section value="workflow" title="Workflow Overview" icon={Settings}>
                    <p>Dairy processing ek sequence of operations hai jismein raw milk ko safe, high-quality, aur shelf-stable products mein badla jaata hai. Har step ka ek specific purpose hota hai.</p>
                    <ol className="list-decimal pl-5 mt-4 space-y-2">
                        <li><strong>Reception & Testing:</strong> Plant mein aane wale doodh ki quality (Fat, SNF, Acidity, Adulterants) jaanchi jaati hai.</li>
                        <li><strong>Chilling:</strong> Doodh ko turant 4-5°C tak thanda kiya jaata hai taaki bacteria ki growth ruk jaaye.</li>
                        <li><strong>Filtration/Clarification:</strong> Doodh se visible dirt aur foreign matter ko hataya jaata hai.</li>
                        <li><strong>Standardization:</strong> Fat aur SNF content ko product (toned, double toned, etc.) ke hisaab se adjust kiya jaata hai.</li>
                        <li><strong>Homogenization:</strong> Fat globules ko todkar doodh ko uniform banaya jaata hai.</li>
                        <li><strong>Pasteurization/Sterilization:</strong> Doodh ko heat-treat karke harmful bacteria ko khatam kiya jaata hai.</li>
                        <li><strong>Packaging:</strong> Sterile conditions mein doodh ko pack kiya jaata hai.</li>
                        <li><strong>Storage & Despatch:</strong> Final products ko cold storage mein rakha jaata hai aur market mein bheja jaata hai.</li>
                    </ol>
                </Section>
                 <Section value="filtration" title="Filtration and Clarification" icon={Filter}>
                    <h4>Parichay (Introduction)</h4>
                    <p>Doodh ke handling aur transportation ke dauran, kuch dikhne wale kan aur gandagi doodh mein aa sakti hai, jise filtration ya centrifugal clarification se hataya jaa sakta hai. Garam doodh ki taralta (fluidity) zyada hone ke kaaran, iska separation process adhik prabhavi hota hai. Isliye doodh ko lagbhag 35-40°C tak pre-heat kiya jaata hai.</p>
                    <h4 className="mt-4">Filtration</h4>
                    <p>Filtration doodh se dikhne wale sediment (foreign matter) ko straining process se hatata hai. Iske fayde hain ki preheating zaroori nahi hai aur ghulansheel gandagi ke ghulne ki sambhavna kam hoti hai, lekin doodh ka flow dheema hota hai. Filter material mein 25-100 µm ke pores hone chahiye.</p>
                     <h4 className="mt-4">Clarification</h4>
                    <p>Clarification filtration se zyada prabhavi hai. Yeh centrifugal force ka istemal karke leucocytes, udder tissues, aur anya fine dirt ko hatata hai. Clarifier cream separator ke saman hota hai lekin isme sirf ek inlet aur ek outlet hota hai aur sludge ke liye zyada jagah hoti hai.</p>
                    <p><strong>Factors Affecting Clarification:</strong> Viscosity, Temperature (garam doodh behtar), Bowl Speed, aur Microbial Load. Dhyan den ki clarification se doodh ki keeping quality nahi badhti hai.</p>
                </Section>
                <Section value="separation" title="Cream Separation" icon={Droplet}>
                    <h4>Siddhant (Principles)</h4>
                    <p>Cream separation doodh se fat ko alag karne ki prakriya hai. Yeh fat (density ~0.93 g/mL) aur skim milk (density ~1.036 g/mL) ke घनत्व (density) ke antar par aadharit hai.</p>
                    <p><strong>Gravity Separation:</strong> Stoke's Law ke anusaar, kam घनत्व wale fat globules dheere-dheere upar uthkar ek parat banate hain. Yeh ek dheema process hai.</p>
                    <p><strong>Centrifugal Separation:</strong> Doodh ko tezi se ghumakar centrifugal force paida ki jaati hai. Bhaari skim milk bahar ki taraf phenk diya jaata hai aur halki cream kendra (center) mein ikatthi ho jaati hai. Yeh process bahut tez aur prabhavi hai.</p>
                    <h4 className="mt-4">Cream Separator ke Mukhya Bhaag</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Bowl and Disc Assembly:</strong> Separator ka mukhya hissa, jismein ek ke upar ek kai saare cone-shaped discs hote hain. In discs ke beech ki choti jagah (separation channels) mein doodh patli paraton mein behta hai, jisse fat aur skim milk alag hote hain.</li>
                        <li><strong>Inlet/Outlet:</strong> Doodh bowl ke neeche se enter karta hai aur alag hone ke baad cream aur skim milk ke liye alag-alag outlets se bahar nikalta hai.</li>
                        <li><strong>Cream Regulating Screw:</strong> Is screw ko adjust karke cream ke outlet ke size ko badla jaa sakta hai, jisse cream mein fat ka percentage control kiya jaata hai.</li>
                    </ul>
                </Section>
                <Section value="standardization" title="Standardization of Milk" icon={Scaling}>
                  <h4>Parichay (Introduction)</h4>
                  <p>Standardization doodh ke ek ya ek se adhik ghatakon (constituents) ko ek nirdharit star par adjust karne ki prakriya hai. Market milk industry mein, iska matlab aam taur par skim milk milakar ya cream nikal kar butterfat content ko kam karna hota hai.</p>
                  <h4 className="mt-4">Uddeshya (Objectives)</h4>
                  <ul className="list-disc pl-5 space-y-2">
                      <li>Vishesh doodh/dairy utpadon ke liye kanooni avashyaktaon ka palan karna.</li>
                      <li>Upbhokta ko ek saman utpad pradan karna.</li>
                      <li>Utpadan mein arthikta sunishchit karna.</li>
                  </ul>
                  <h4 className="mt-4">Ganana ke Tarike (Methods of Calculation)</h4>
                  <p>Standardization ke liye aam taur par Pearson's Square method ya algebraic equations ka istemal hota hai.</p>
                  <h5>Pearson’s Square Method</h5>
                  <p>Ek square banayein aur uske kendra mein vanchhit fat pratishat rakhein. Square ke baayein kono par milaye jaane wale padarthon ka fat pratishat rakhein. Phir, kendra ke number ko baayein taraf ke bade number se ghatayein aur shesh ko tirche viprit daayein kono par rakhein. Daayein taraf ke number ab un mool padarthon ke hisson ko darshate hain jinhe milana hai.</p>
                  <h5>Algebraic Equations</h5>
                  <p>Is vidhi mein, milaye jaane wale utpadon, antim utpad, aur kisi ek utpad ki matra ka pata hona chahiye. Mass balance equations banakar unhe hal kiya jaata hai.</p>
                  <h4 className="mt-4">Standardization ke Prakar (Methods of Standardization)</h4>
                   <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Batch Standardization:</strong> Dairies mein sabse aam prakriya. Ismein doodh ke ek bade batch ka fat content test kiya jaata hai aur phir ganana ke anusar skim milk ya cream milakar use aavashyak star par laya jaata hai.</li>
                      <li><strong>Continuous Standardization:</strong> Ismein ek inline sampler aur testing device ka upyog hota hai jo lagatar fat content ko maapta hai. Operator is reading ko dekhkar milk line mein skim milk ya cream ke pravaah ko adjust karta hai.</li>
                      <li><strong>Automatic Standardization:</strong> Yeh continuous process ka ek vistar hai jismein ek microprocessor sampler/tester system se juda hota hai aur automatically skim milk ke pravaah ko niyantrit karta hai.</li>
                  </ul>
                  <h4 className="mt-4">Tri-Process Machine</h4>
                  <p>Tri-process machine ek hi unit mein doodh ko clarify, separate, aur standardize karne ke liye design ki gayi hai.</p>
                </Section>
                <Section value="homogenization" title="Homogenization" icon={Layers}>
                     <h4>Parichay aur Paribhasha (Introduction and Definition)</h4>
                     <p>Homogenization ek mechanical process hai jiska uddeshya doodh mein maujood bade fat globules ko chote, uniform size ke globules (&lt;2 µm) mein todna hai. Isse doodh mein ek sthir emulsion banta hai, jisse fat upar aakar malai ki parat (cream layer) nahi banata.</p>
                      <h4 className="mt-4">Fayde aur Nuksan (Merits and Demerits)</h4>
                      <p><strong>Fayde:</strong> Cream layer nahi banti, doodh gaadha aur swadisht lagta hai, aur aasani se pach jaata hai. <strong>Nuksan:</strong> Utpadan lagat badh jaati hai aur galat taapman par karne se rancidity (kadwahat) ho sakti hai.</p>
                     <h4 className="mt-4">Siddhant aur Prakriya (Principles and Process)</h4>
                     <p>Doodh ko ek high-pressure pump ke zariye ek homogenizer valve (ek bahut choti si jagah) se force kiya jaata hai. Jab doodh is valve se bahut tezi se guzarta hai, toh turbulence, shear, aur cavitation forces milkar bade fat globules ko chote globules mein tod dete hain. Homogenization aam taur par pasteurization se pehle kiya jaata hai.</p>
                      <h4 className="mt-4">Doodh ke Gunon par Prabhav (Effect on Milk Properties)</h4>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Safed Rang:</strong> Chote fat globules प्रकाश ko zyada bikhherte hain, jisse doodh zyada safed aur apardarshi (opaque) dikhta hai.</li>
                        <li><strong>Fuller Body & Richer Taste:</strong> Homogenized doodh peene mein zyada gaadha aur swadisht lagta hai.</li>
                        <li><strong>Lipase ke prati Samvedansheelta:</strong> Agar homogenization se pehle doodh ko theek se garam nahi kiya gaya, to lipase enzyme tezi se fat ko todkar rancid flavor paida kar sakta hai.</li>
                     </ul>
                </Section>
                 <Section value="bactofugation" title="Bactofugation" icon={RotateCw}>
                    <h4>Parichay (Introduction)</h4>
                    <p>Bactofugation centrifugal force ka upyog karke doodh se microorganisms, khaaskar heat-resistant spores (jaise Bacillus/Clostridia), ko hatane ki prakriya hai. Iska mukhya uddeshya doodh ki hygienic quality ko sudharna hai, taaki use kam temperature-time combination par sterilize kiya jaa sake. Yeh khaaskar un products ke liye mahatvapurna hai jinki shelf-life lambi hoti hai, jaise hard cheese aur UHT milk.</p>
                     <h4 className="mt-4">Bactotherm Process</h4>
                     <p>Is process mein, doodh ko 60-75°C tak garam kiya jaata hai aur phir ek special high-efficiency centrifuge (Bactofuge) mein bheja jaata hai. Yahan, bacteria (jinki density doodh se zyada hoti hai) alag hokar ek concentrate ke roop mein nikalte hain, jise 'bactofugate' kehte hain. Is bactofugate ko alag se UHT treat (130-140°C par 3-4 seconds) karke wapas doodh mein mix kar diya jaata hai. Isse doodh ke solids ka nuksan nahi hota aur bacterial load bhi bahut kam ho jaata hai.</p>
                </Section>
                <Section value="heat-treatment" title="Principles of Heat Treatment" icon={Thermometer}>
                    <h4>Parichay (Introduction)</h4>
                    <p>Dairy industry mein, thermal processing ek swikrit shabdavali hai jo doodh ke kharab hone aur bhojan se hone wali bimariyon ke avasaron ko kam karne/samapt karne ke liye avashyak ushma upchar ka varnan karti hai. Pasteurization ek prakar ka thermal processing hai jo ek vishisht rogjanak sukshmajiv ke liye design kiya gaya hai, lekin yah refrigeration ke bina ek shelf-stable utpad pradan nahi karta hai. Ushma upchar doodh mein ushma urja ka sthanantaran hai. Doodh ke aise ushma upchar mein bahut sari urja kharch hoti hai. Ushma upchar ka uddeshya doodh mein maujood sabhi sukshmajivon aur adhikansh enzymes ko poori tarah se nishkriya karna hai.</p>
                    <h4 className="mt-4">Pasteurization</h4>
                    <p>Yah ek ushma upchar prakriya hai jiska uddeshya doodh mein maujood sabhi rogjanak (bimari phailane wale) sukshmajivon ko nasht karna hai aur kharab karne wale sukshmajivon ki sankhya ko kam karna hai, taki doodh pine ke liye surakshit ho jaye aur uski shelf life badh jaye. Sabse aam vidhi <strong>High-Temperature Short-Time (HTST)</strong> hai.</p>
                    <h4 className="mt-4">Doodh ke Ghatakon par Prabhav</h4>
                    <p>Badhte taapman aur samay ke saath, whey proteins mein parivartan hota hai, ve ghulanshilta kam kar dete hain aur pH 4.6 par casein ke saath jam jate hain. Ushma upchar se 'paka hua swad' (cooked taste) bhi aa sakta hai. Casein samanya pasteurization taapman par lagbhag aparivartit rahta hai.</p>
                    <h4 className="mt-4">Heat Treatment Processes</h4>
                     <div className="overflow-x-auto"><table className="w-full text-left border-collapse"><thead><tr className="bg-muted"><th className="p-2 border">Process</th><th className="p-2 border">Temp (°C)</th><th className="p-2 border">Time</th></tr></thead><tbody>
                        <tr><td className="p-2 border">Thermization</td><td className="p-2 border">63-65</td><td className="p-2 border">15s</td></tr>
                        <tr><td className="p-2 border">LTLT Pasteurization</td><td className="p-2 border">63</td><td className="p-2 border">30 min</td></tr>
                        <tr><td className="p-2 border">HTST Pasteurization</td><td className="p-2 border">72-75</td><td className="p-2 border">15-20s</td></tr>
                        <tr><td className="p-2 border">UHT</td><td className="p-2 border">135-150</td><td className="p-2 border">1-4s</td></tr>
                        <tr><td className="p-2 border">Sterilization</td><td className="p-2 border">115-121</td><td className="p-2 border">15-30 min</td></tr>
                    </tbody></table></div>
                </Section>
                <Section value="kinetics" title="Kinetic Parameters" icon={Clock}>
                    <p>Microorganisms ko garmi se nasht kiya jata hai jab unke proteins jam jate hain aur unke metabolism ke liye avashyak enzymes nishkriya ho jate hain. Garmi pratirodh ko darshane ke liye kai shabd istemal kiye jate hain:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>D-Value (Decimal Reduction Time):</strong> Ek vishisht taapman par jeevon ki sankhya ko uske moolya ke 1/10 tak kam karne ke liye avashyak samay (minute mein).</li>
                      <li><strong>Z-Value:</strong> 1/10 samay mein vahi ghatak prabhav prapt karne ke liye avashyak taapman mein vriddhi.</li>
                      <li><strong>F0 Value:</strong> 121°C par ek jeev ka thermal death time (minute mein). Yah ek thermal process ke microbial kathorta ko mapne ke liye ek kul ekikrit ghatak prabhav hai.</li>
                      <li><strong>Q10-Value:</strong> Jab taapman 10°C badhaya jata hai to abhikriya ki gati mein vriddhi.</li>
                    </ul>
                </Section>
                <Section value="pasteurization" title="Methods of Pasteurization" icon={Zap}>
                    <p>Pasteurization ke do mukhya tarike hain:</p>
                    <h4 className="mt-4">Low-Temperature Long-Time (LTLT) / Batch Pasteurization</h4>
                    <p>Doodh ko 63°C par kam se kam 30 minute tak garam kiya, roka aur thanda kiya jata hai. Yah chhote volumes ke liye upyukt hai aur aksar multipurpose vats mein kiya jata hai.</p>
                    <h4 className="mt-4">High-Temperature Short-Time (HTST) Pasteurization</h4>
                    <p>Yah doodh ko pasteurize karne ka aadhunik tarika hai aur bade volumes ke liye istemal kiya jata hai. HTST pasteurizer doodh ko 72°C par 15 second tak garam karta hai aur phir turant 5°C ya usse kam tak thanda karta hai.</p>
                     <h5>HTST Pasteurizer ke Mukhya Bhaag</h5>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Balance Tank:</strong> Pasteurizer ko lagatar doodh ki supply deta hai.</li>
                        <li><strong>Regeneration Section:</strong> Urja bachane wala hissa jahan thanda kachcha doodh garam pasteurized doodh se garmi leta hai.</li>
                        <li><strong>Heating Section:</strong> Doodh ko antim pasteurization taapman tak garam karta hai.</li>
                        <li><strong>Holding Tube:</strong> Doodh ko nirdharit samay ke liye nirdharit taapman par rakhta hai.</li>
                        <li><strong>Flow Diversion Valve (FDV):</strong> Ek suraksha upkaran jo kam garam doodh ko aage jane se rokta hai aur punah-prakriya ke liye wapas bhejta hai.</li>
                        <li><strong>Cooling Section:</strong> Garam pasteurized doodh ko thanda karta hai.</li>
                    </ul>
                </Section>
                
                <Section value="sterilization" title="Sterilization & UHT" icon={CheckCircle}>
                    <p>Sterilization ka matlab hai doodh se sabhi prakaar ke microorganisms, including unke spores ko, poori tarah se khatam karna. Isse doodh commercially sterile ho jaata hai aur bina refrigeration ke mahino tak store kiya jaa sakta hai.</p>
                    <h4 className="mt-4">In-Container Sterilization</h4>
                    <p>Is method mein doodh ko pehle bottles ya cans mein bhara jaata hai aur phir unhein seal karke ek retort (bada pressure cooker) mein rakha jaata hai. Yahan unhein <strong>115-121°C par 15-30 minutes</strong> tak garam kiya jaata hai. Is process se doodh ka rang thoda bhura ho jaata hai aur usmein "cooked" flavor aa jaata hai. Yeh ek batch process hai.</p>
                    
                    <h4 className="mt-4">Ultra-High Temperature (UHT) Processing</h4>
                    <p>Yeh ek continuous process hai jismein doodh ko bahut tezi se bahut adhik taapman tak garam kiya jaata hai aur phir turant thanda kiya jaata hai. Aam taur par, doodh ko <strong>135-150°C par 1-4 seconds</strong> ke liye treat kiya jaata hai. Iske baad, doodh ko ek sterile (aseptic) environment mein pre-sterilized cartons (jaise Tetra Pak) mein bhara jaata hai. UHT processing se doodh ki nutritional quality aur flavor par sterilization ki tulna mein kam asar padta hai.</p>
                </Section>
                                
                <Section value="drying" title="Milk Drying" icon={Wind}>
                    <p>Milk drying ka mukhya uddeshya doodh se paani hatakar ek powder banana hai, jisse uski shelf life bahut badh jaati hai aur transport karna aasan ho jaata hai. Do mukhya methods hain:</p>
                    <h4 className="mt-4">Spray Drying</h4>
                    <p>Yeh sabse aam method hai. Ismein, concentrated doodh ko ek bade drying chamber ke upar lage atomizer (nozzle) ke zariye choti-choti boondon (spray) mein convert kiya jaata hai. Chamber mein neeche se garam hawa (150-220°C) bheji jaati hai. Jaise hi doodh ki boondein garam hawa ke sampark mein aati hain, unmein se paani turant evaporate ho jaata hai aur sookha milk powder neeche ikattha ho jaata hai. Yeh process bahut tezi se hota hai, isliye powder ki quality achhi rehti hai.</p>
                    <h4 className="mt-4">Drum Drying</h4>
                    <p>Is method mein, do internally heated metal drums (rollers) dheere-dheere ek doosre ki taraf ghoomte hain. Unke beech doodh ki ek patli film lagayi jaati hai. Garam drum ke sampark mein aane se paani evaporate ho jaata hai aur sookhi doodh ki ek sheet ban jaati hai, jise scraper blades se khurach kar alag kar liya jaata hai aur phir pees kar powder banaya jaata hai. Is method mein doodh zyada heat ke sampark mein aata hai, isliye powder ki solubility aur flavor spray-dried powder se thodi kamतर ho sakti hai.</p>
                </Section>

                <Section value="membrane" title="Membrane Filtration" icon={Archive}>
                    <p>Yeh ek modern technology hai jo doodh ke alag-alag components ko bina heat ka istemal kiye unke size ke aadhar par alag karti hai. Ismein ek semi-permeable membrane ka upyog hota hai jo kuch cheezon ko paar jaane deti hai aur kuch ko rok leti hai.</p>
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Microfiltration (MF):</strong> Iske pores sabse bade hote hain. Yeh bacteria aur fat globules ko rokta hai, jabki proteins, lactose, aur minerals ko paar jaane deta hai. Iska upyog doodh ko 'cold pasteurize' karne aur whey se casein alag karne mein hota hai.</li>
                        <li><strong>Ultrafiltration (UF):</strong> Iske pores MF se chote hote hain. Yeh fat aur proteins (casein aur whey dono) ko rokta hai, lekin lactose aur minerals ko paar jaane deta hai. Iska upyog cheese banane (yield badhane ke liye), aur whey protein concentrate (WPC) banane mein hota hai.</li>
                        <li><strong>Nanofiltration (NF):</strong> Yeh bade ions (jaise Calcium) ko rokta hai, lekin chote ions (jaise Sodium) aur paani ko paar jaane deta hai. Iska upyog whey se minerals hatane (demineralization) mein hota hai.</li>
                        <li><strong>Reverse Osmosis (RO):</strong> Iske pores sabse chote hote hain. Yeh lagbhag sab kuch rokta hai aur sirf paani ko paar jaane deta hai. Iska upyog doodh ya whey se paani hatakar unhein concentrate karne mein hota hai.</li>
                    </ul>
                </Section>
            </Accordion>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
