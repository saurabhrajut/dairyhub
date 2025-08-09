
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
  Scaling
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
            <Accordion type="single" collapsible className="w-full" defaultValue="Pasteurization">
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
                  <p>Tri-process machine ek hi unit mein doodh ko clarify, separate, aur standardize karne ke liye design ki gayi hai. Ismein cream aur skim milk ke discharge lines mein external valves hote hain, jisse standardization process ko aasan banaya jaata hai.</p>
                </Section>
                <Section value="homogenization" title="Homogenization" icon={Layers}>
                     <h4>Parichay aur Paribhasha (Introduction and Definition)</h4>
                     <p>Homogenization ek mechanical process hai jiska uddeshya doodh mein maujood bade fat globules ko chote, uniform size ke globules (&lt;2 µm) mein todna hai. Isse doodh mein ek sthir emulsion banta hai, jisse fat upar aakar malai ki parat (cream layer) nahi banata.</p>
                      <h4 className="mt-4">Fayde aur Nuksan (Merits and Demerits)</h4>
                      <p><strong>Fayde:</strong> Cream layer nahi banti, doodh gaadha aur swadisht lagta hai, aur aasani se pach jaata hai. <strong>Nuksan:</strong> Utpadan lagat badh jaati hai aur galat taapman par karne se rancidity (kadwahat) ho sakti hai.</p>
                     <h4 className="mt-4">Siddhant aur Prakriya (Principles and Process)</h4>
                     <p>Doodh ko ek high-pressure pump ke zariye ek homogenizer valve (ek bahut choti si jagah) se force kiya jaata hai. Jab doodh is valve se bahut tezi se guzarta hai, toh turbulence, shear, aur cavitation forces milkar bade fat globules ko chote globules mein tod dete hain. Homogenization aam taur par pasteurization se pehle kiya jaata hai.</p>
                     <h4 className="mt-4">Homogenization ke Siddhant (Theories of Homogenization)</h4>
                     <p>Fat globule ke tootne ko samjhane ke liye kai siddhant hain, jaise Shattering & Impact, Explosion, Shearing & Grinding, aur Cavitation.</p>
                     <h4 className="mt-4">Homogenizer ke Prakar aur Sanchalan (Types and Operation of Homogenizers)</h4>
                     <p>Homogenizers high-pressure, low-pressure, ya sonic vibrators ho sakte hain. Aam taur par two-stage high-pressure homogenizers ka istemal hota hai (e.g., 2000 psi pehle stage mein aur 500 psi doosre stage mein). Inke sanchalan mein savdhani baratni chahiye, jaise machine ko kabhi sookha na chalana aur pressure ko dheere-dheere badhana.</p>
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
                <Section value="Pasteurization" title="Pasteurization" icon={Thermometer}>
                    <h4>Siddhant (Principle)</h4>
                    <p>Pasteurization ek heat treatment process hai jiska uddeshya doodh mein maujood sabhi pathogenic (bimari failane wale) microorganisms ko nasht karna hai aur spoilage karne wale microorganisms ki sankhya ko kam karna hai, taaki doodh peene ke liye surakshit ho jaaye aur uski shelf life badh jaaye. Yeh doodh ke nutritional aur sensory qualities ko kam se kam nuksan pahunchata hai. Sabse common method <strong>High-Temperature Short-Time (HTST)</strong> hai.</p>
                    
                    <h4 className="mt-4">HTST Pasteurizer ke Parts aur Working</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Balance Tank:</strong> Yeh pasteurizer ko constant doodh supply provide karta hai.</li>
                        <li><strong>Regeneration Section:</strong> Yeh energy bachane wala sabse important hissa hai. Yahan, thanda raw milk garam pasteurized milk se garmi leta hai. Raw milk pre-heat hota hai aur pasteurized milk pre-cool hota hai.</li>
                        <li><strong>Heating Section:</strong> Yahan, pre-heated doodh ko garam paani ya steam ka istemal karke final pasteurization temperature (e.g., 72°C) tak garam kiya jaata hai.</li>
                        <li><strong>Holding Tube:</strong> Doodh ko is tube mein ek nishchit samay (e.g., 15 seconds) ke liye rakha jaata hai taaki sabhi pathogens khatam ho jaayein.</li>
                        <li><strong>Flow Diversion Valve (FDV):</strong> Yeh ek safety device hai. Agar doodh ka temperature holding tube ke ant mein aavashyak temperature se kam hai, toh yeh valve automatically doodh ko wapas balance tank mein bhej deta hai re-pasteurization ke liye.</li>
                        <li><strong>Cooling Section:</strong> Garam pasteurized doodh ko thande paani ya chilled water ka istemal karke 4-5°C tak thanda kiya jaata hai.</li>
                    </ul>
                    
                    <h4 className="mt-4">Regeneration Efficiency</h4>
                    <p>Yeh pasteurizer ki energy-saving capability ko maapta hai. Yeh batata hai ki raw milk pasteurization temperature tak pahunchne ke liye kitni garmi pasteurized milk se recover karta hai.</p>
                    <pre className="bg-muted p-3 rounded-lg font-mono text-sm text-primary overflow-x-auto"><code>Efficiency (%) = [(Temp. after Regeneration - Initial Temp.) / (Pasteurization Temp. - Initial Temp.)] * 100</code></pre>
                    <p><strong>Example:</strong> Agar raw milk 5°C par enter karta hai, regeneration ke baad 65°C tak pahunchta hai, aur pasteurization temperature 72°C hai, toh efficiency hogi: <br/><code>[(65 - 5) / (72 - 5)] * 100 = (60 / 67) * 100 ≈ 89.5%</code>. Ek achhe pasteurizer ki efficiency 90-95% tak ho sakti hai.</p>
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

    