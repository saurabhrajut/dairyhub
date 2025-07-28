
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
  Layers
} from "lucide-react";

function Section({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) {
    return (
        <AccordionItem value={title}>
            <AccordionTrigger className="text-xl font-bold hover:no-underline font-headline">
                <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <span>{title}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed pl-9">
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
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            The Science of Dairy Processing
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A deep-dive into the core technologies that transform raw milk.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 mt-4">
            <Accordion type="single" collapsible className="w-full" defaultValue="Pasteurization">
                <Section title="Workflow Overview" icon={Settings}>
                    <p>Dairy processing ek sequence of operations hai jismein raw milk ko safe, high-quality, aur shelf-stable products mein badla jaata hai. Har step ka ek specific purpose hota hai.</p>
                    <ol className="list-decimal pl-5 mt-4 space-y-2">
                        <li><strong>Reception & Testing:</strong> Plant mein aane wale doodh ki quality (Fat, SNF, Acidity, Adulterants) jaanchi jaati hai.</li>
                        <li><strong>Chilling:</strong> Doodh ko turant 4-5°C tak thanda kiya jaata hai taaki bacteria ki growth ruk jaaye.</li>
                        <li><strong>Standardization:</strong> Fat aur SNF content ko product (toned, double toned, etc.) ke hisaab se adjust kiya jaata hai.</li>
                        <li><strong>Homogenization:</strong> Fat globules ko todkar doodh ko uniform banaya jaata hai.</li>
                        <li><strong>Pasteurization/Sterilization:</strong> Doodh ko heat-treat karke harmful bacteria ko khatam kiya jaata hai.</li>
                        <li><strong>Packaging:</strong> Sterile conditions mein doodh ko pack kiya jaata hai.</li>
                        <li><strong>Storage & Despatch:</strong> Final products ko cold storage mein rakha jaata hai aur market mein bheja jaata hai.</li>
                    </ol>
                </Section>
                
                <Section title="Pasteurization" icon={Thermometer}>
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
                    <pre className="bg-muted p-3 rounded-lg font-mono text-sm text-primary"><code>Efficiency (%) = [(Temp. after Regeneration - Initial Temp.) / (Pasteurization Temp. - Initial Temp.)] * 100</code></pre>
                    <p><strong>Example:</strong> Agar raw milk 5°C par enter karta hai, regeneration ke baad 65°C tak pahunchta hai, aur pasteurization temperature 72°C hai, toh efficiency hogi: <br/><code>[(65 - 5) / (72 - 5)] * 100 = (60 / 67) * 100 ≈ 89.5%</code>. Ek achhe pasteurizer ki efficiency 90-95% tak ho sakti hai.</p>
                </Section>
                
                <Section title="Sterilization & UHT" icon={CheckCircle}>
                    <p>Sterilization ka matlab hai doodh se sabhi prakaar ke microorganisms, including unke spores ko, poori tarah se khatam karna. Isse doodh commercially sterile ho jaata hai aur bina refrigeration ke mahino tak store kiya jaa sakta hai.</p>
                    <h4 className="mt-4">In-Container Sterilization</h4>
                    <p>Is method mein doodh ko pehle bottles ya cans mein bhara jaata hai aur phir unhein seal karke ek retort (bada pressure cooker) mein rakha jaata hai. Yahan unhein <strong>115-121°C par 15-30 minutes</strong> tak garam kiya jaata hai. Is process se doodh ka rang thoda bhura ho jaata hai aur usmein "cooked" flavor aa jaata hai. Yeh ek batch process hai.</p>
                    
                    <h4 className="mt-4">Ultra-High Temperature (UHT) Processing</h4>
                    <p>Yeh ek continuous process hai jismein doodh ko bahut tezi se bahut adhik taapman tak garam kiya jaata hai aur phir turant thanda kiya jaata hai. Aam taur par, doodh ko <strong>135-150°C par 1-4 seconds</strong> ke liye treat kiya jaata hai. Iske baad, doodh ko ek sterile (aseptic) environment mein pre-sterilized cartons (jaise Tetra Pak) mein bhara jaata hai. UHT processing se doodh ki nutritional quality aur flavor par sterilization ki tulna mein kam asar padta hai.</p>
                </Section>
                
                <Section title="Homogenization" icon={Layers}>
                     <h4>Siddhant (Principle)</h4>
                     <p>Homogenization ek mechanical process hai jiska uddeshya doodh mein maujood bade fat globules ko chote, uniform size ke globules mein todna hai. Isse doodh mein ek sthir emulsion banta hai, jisse fat upar aakar malai ki parat (cream layer) nahi banata.</p>
                     <h4 className="mt-4">Kaise Kaam Karta Hai?</h4>
                     <p>Doodh ko ek high-pressure pump ke zariye ek homogenizer valve (ek bahut choti si jagah) se force kiya jaata hai. Jab doodh is valve se bahut tezi se guzarta hai, toh turbulence, shear, aur cavitation forces milkar bade fat globules (average size 3-6 microns) ko chote globules (size <2 microns) mein tod dete hain. Homogenization aam taur par pasteurization se pehle kiya jaata hai.</p>
                     <h4 className="mt-4">Prabhav (Effects)</h4>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Cream Layer Rokna:</strong> Sabse mukhya prabhav.</li>
                        <li><strong>Safed Rang:</strong> Chote fat globules प्रकाश ko zyada bikhherte hain, jisse doodh zyada safed aur apardarshi (opaque) dikhta hai.</li>
                        <li><strong>Fuller Body & Richer Taste:</strong> Homogenized doodh peene mein zyada gaadha aur swadisht lagta hai.</li>
                        <li><strong>Protein Denaturation:</strong> Naye bane chote fat globules ki satah badh jaati hai. Is nayi satah ko cover karne ke liye casein aur whey proteins use hote hain, jisse unke structure mein badlav aata hai.</li>
                     </ul>
                </Section>

                <Section title="Cream Separation & Butter" icon={Droplet}>
                    <h4>Cream Separation</h4>
                    <p>Yeh ek centrifugal process hai jismein doodh se fat (cream) ko alag kiya jaata hai. Doodh aur fat ki density mein antar hota hai (doodh ~1.032 g/mL, fat ~0.93 g/mL). Cream separator machine doodh ko bahut tezi se ghumati hai. Centrifugal force ke kaaran, bhaari skim milk bahar ki taraf chala jaata hai aur halki cream beech mein ikatthi ho jaati hai, jinhein alag-alag outlets se nikal liya jaata hai.</p>
                    <h4 className="mt-4">Types of Cream</h4>
                    <p>Cream ko uske fat content ke aadhar par classify kiya jaata hai: Table cream (18-25% fat), Whipping cream (30-40% fat), Plastic cream (65-85% fat).</p>
                    <h4 className="mt-4">Butter Making Process</h4>
                    <p>Butter banane ke liye, pehle cream ko pasteurize kiya jaata hai, phir thanda karke 'age' kiya jaata hai taaki fat crystallize ho sake. Iske baad, cream ko ek churner mein daalkar tezi se hilaya jaata hai. Is 'churning' process se fat globules aapas mein judkar butter grains banate hain aur liquid (buttermilk) alag ho jaata hai. Buttermilk ko nikalne ke baad, butter grains ko dhoya jaata hai aur phir 'work' kiya jaata hai (gunda jaata hai) taaki usmein se bacha hua paani nikal jaaye aur ek uniform texture ban jaaye. Ant mein namak milakar use pack kiya jaata hai.</p>
                </Section>
                
                <Section title="Milk Drying" icon={Wind}>
                    <p>Milk drying ka mukhya uddeshya doodh se paani hatakar ek powder banana hai, jisse uski shelf life bahut badh jaati hai aur transport karna aasan ho jaata hai. Do mukhya methods hain:</p>
                    <h4 className="mt-4">Spray Drying</h4>
                    <p>Yeh sabse aam method hai. Ismein, concentrated doodh ko ek bade drying chamber ke upar lage atomizer (nozzle) ke zariye choti-choti boondon (spray) mein convert kiya jaata hai. Chamber mein neeche se garam hawa (150-220°C) bheji jaati hai. Jaise hi doodh ki boondein garam hawa ke sampark mein aati hain, unmein se paani turant evaporate ho jaata hai aur sookha milk powder neeche ikattha ho jaata hai. Yeh process bahut tezi se hota hai, isliye powder ki quality achhi rehti hai.</p>
                    <h4 className="mt-4">Drum Drying</h4>
                    <p>Is method mein, do internally heated metal drums (rollers) dheere-dheere ek doosre ki taraf ghoomte hain. Unke beech doodh ki ek patli film lagayi jaati hai. Garam drum ke sampark mein aane se paani evaporate ho jaata hai aur sookhi doodh ki ek sheet ban jaati hai, jise scraper blades se khurach kar alag kar liya jaata hai aur phir pees kar powder banaya jaata hai. Is method mein doodh zyada heat ke sampark mein aata hai, isliye powder ki solubility aur flavor spray-dried powder se thodi kamतर ho sakti hai.</p>
                </Section>

                <Section title="Membrane Filtration" icon={Filter}>
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
