
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

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
);

const TestProcedure = ({ title, procedure, calculation }: { title: string, procedure: string, calculation?: string }) => (
    <AccordionItem value={title.replace(/\s+/g, '-').toLowerCase()}>
        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{title}</AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none">
                <p dangerouslySetInnerHTML={{ __html: procedure }} />
                {calculation && (
                    <>
                        <h4 className="font-bold mt-4">Calculation:</h4>
                        <pre className="bg-muted p-3 rounded-lg font-mono text-sm text-primary"><code>{calculation}</code></pre>
                    </>
                )}
            </div>
        </AccordionContent>
    </AccordionItem>
);


export function PackagingMaterialTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Packaging Material Testing</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A guide to ensuring the quality and safety of dairy packaging materials.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full pr-6 mt-4">
          <Section title="13.1 Introduction (Parichay)">
            <p>Packaging food product ki suraksha aur quality banaye rakhne mein ek mahatvapurna bhumika nibhata hai. Dairy products, jo jaldi kharab ho sakte hain, unke liye sahi packaging material chunna aur uski quality jaanchna bahut zaroori hai. Packaging material testing yeh sunishchit karta hai ki material product ko physical, chemical, aur microbial contamination se bachayega aur uski shelf-life tak uski integrity banaye rakhega.</p>
          </Section>

          <Section title="13.2 & 13.3 Sampling and Conditioning">
            <p><strong>Sampling Plan (Namuna Lene ki Yojana):</strong> Testing ke liye packaging material ka ek representative sample liya jaata hai. Yeh aam taur par AQL (Acceptable Quality Limit) standards ke anusaar kiya jaata hai, jisse yeh tay hota hai ki poore lot se kitne sample lene hain.</p>
            <p><strong>Conditioning of Test Specimen (Namune ka Anukoolan):</strong> Test karne se pehle, samples ko ek nishchit taapman aur relative humidity (RH) par condition kiya jaata hai (aam taur par 23±2°C aur 50±5% RH). Aisa isliye kiya jaata hai taaki test results consistent aur tulna karne yogya hon, kyunki kai materials ki properties environment se prabhavit hoti hain.</p>
          </Section>

          <Section title="13.5 Flexible Packaging Materials (Lachile Packaging)">
            <Accordion type="single" collapsible className="w-full">
              <TestProcedure 
                title="Paper and Paper Board - GSM (Grams per Square Meter)"
                procedure="<strong>Siddhant:</strong> Yeh paper ki 'motai' ya घनत्व (density) ko maapta hai. <strong>Procedure:</strong> Ek standard size (aam taur par 10x10 cm) ka paper sample kaata jaata hai aur use ek sateek (accurate) weighing balance par tola jaata hai. Is vajan ko uske area se divide karke GSM nikala jaata hai."
                calculation="GSM = [Weight of Sample (g) / Area of Sample (m²)]"
              />
              <TestProcedure 
                title="Paper and Paper Board - Bursting Strength (Fatne ki Takat)"
                procedure="<strong>Siddhant:</strong> Yeh paper ki us takat ko maapta hai jo uske fatne tak hydraulic pressure se lagayi jaati hai. <strong>Procedure:</strong> Paper sample ko ek Mullen Burst Tester mein clamp kiya jaata hai. Neeche se ek rubber diaphragm par hydraulic pressure badhaya jaata hai, jo paper ko upar ki taraf dhakelta hai. Jis pressure par paper fat jaata hai, use note kar liya jaata hai."
                calculation="Burst Factor = [Bursting Strength (kg/cm²) / GSM (g/m²)]"
              />
               <TestProcedure 
                title="Paper and Paper Board - Cobb Test (Paani Sokhne ki Chamta)"
                procedure="<strong>Siddhant:</strong> Yeh maapta hai ki ek nishchit samay mein paper kitna paani sokhta hai. <strong>Procedure:</strong> Ek tole huye (weighed) paper sample ko ek Cobb testing apparatus mein rakha jaata hai. Upar se ek nishchit volume (100 ml) paani daala jaata hai aur ek nishchit samay (jaise 60 seconds) tak rakha jaata hai. Baad mein, extra paani ko roller se hata kar sample ko dobara tola jaata hai. Vajan mein badhotri se paani sokhne ki matra pata chalti hai."
                calculation="Cobb Value (g/m²) = (Weight of sample after test - Weight of sample before test) x 100"
              />
              <TestProcedure 
                title="Plastic Films - Thickness (Motai)"
                procedure="<strong>Siddhant:</strong> Film ki motai uniform honi chahiye taaki uski barrier properties aur strength बनी rahe. <strong>Procedure:</strong> Ek digital micrometer ya thickness gauge ka istemal karke film ke alag-alag jagahon par motai maapi jaati hai. Results ko microns (µm) mein report kiya jaata hai."
              />
              <TestProcedure 
                title="Plastic Films - Tensile Strength & Elongation"
                procedure="<strong>Siddhant:</strong> Yeh maapta hai ki film tootne se pehle kitna khichav (stretch) seh sakti hai. <strong>Procedure:</strong> Film ki ek standard size ki strip ko ek tensile testing machine ke jaws mein lagaya jaata hai. Machine strip ko ek constant speed se kheenchti hai jab tak woh toot na jaaye. Jis force par woh tootti hai (Tensile Strength) aur kitni kheenchti hai (Elongation), use record kiya jaata hai."
              />
              <TestProcedure 
                title="Plastic Films - Water Vapor Transmission Rate (WVTR)"
                procedure="<strong>Siddhant:</strong> Yeh maapta hai ki ek nishchit samay mein film ke ek nishchit area se kitni paani ki bhaap (water vapor) guzar sakti hai. Kam WVTR product ko nami se bachata hai. <strong>Procedure:</strong> Test film ko ek aisi dish par seal kiya jaata hai jismein desiccant (nami sokhne wala padarth) ho. Is assembly ko ek controlled humidity chamber mein rakha jaata hai. Samay-samay par dish ka vajan karke yeh pata lagaya jaata hai ki desiccant ne kitni nami sokhi hai."
                calculation="WVTR (g/m²/day) = [Change in Weight (g) x 24] / [Area of Sample (m²) x Time (hours)]"
              />
               <TestProcedure 
                title="Aluminum Foil - Pinhole Test"
                procedure="<strong>Siddhant:</strong> Aluminum foil mein chote chhed (pinholes) uski barrier properties ko kamzor kar sakte hain. <strong>Procedure:</strong> Foil ke sample ko ek light box ke upar rakha jaata hai. Andhere kamre mein, upar se dekhne par jo bhi roshni ke points dikhte hain, woh pinholes hote hain. Unki ginti aur size ko standard charts se compare kiya jaata hai."
              />
            </Accordion>
          </Section>

          <Section title="13.6 Rigid Packaging Materials (Kathor Packaging)">
            <Accordion type="single" collapsible className="w-full">
              <TestProcedure 
                title="Glass Containers - Thermal Shock Test"
                procedure="<strong>Siddhant:</strong> Yeh test kaanch ki botal ki achanak taapman badlav ko sehne ki क्षमता ko jaanchta hai. <strong>Procedure:</strong> Bottles ko pehle garam paani ke bath mein rakha jaata hai, phir turant thande paani ke bath mein transfer kiya jaata hai. Agar bottle crack ya break nahi hoti, toh woh pass maani jaati hai."
              />
              <TestProcedure 
                title="Metal Containers - Leak Test"
                procedure="<strong>Siddhant:</strong> Yeh sunishchit karta hai ki can ke seams (jod) aacchi tarah se sealed hain. <strong>Procedure:</strong> Can ko paani ke neeche rakha jaata hai aur usme hawa ka pressure daala jaata hai. Agar kahin se bhi hawa ke bulbule nikalte hain, toh iska matlab hai ki can leak kar raha hai."
              />
              <TestProcedure 
                title="Plastic Containers - Drop Test"
                procedure="<strong>Siddhant:</strong> Yeh container ki girne par tootne se bachne ki takat ko maapta hai. <strong>Procedure:</strong> Product se bhare hue containers ko ek nishchit unchai se alag-alag angles par ek kathor satah par giraya jaata hai. Girne ke baad container mein koi leakage ya damage nahi hona chahiye."
              />
               <TestProcedure 
                title="Corrugated Fibre Board (CFB) Boxes - Compression Test"
                procedure="<strong>Siddhant:</strong> Yeh box ki stacking (ek ke upar ek rakhne) ki takat ko maapta hai. <strong>Procedure:</strong> Ek khaali box ko ek compression tester mein rakha jaata hai. Machine upar se dheere-dheere pressure lagati hai jab tak box deform ya collapse na ho jaaye. Maximum load jo box seh sakta hai, use record kiya jaata hai."
              />
            </Accordion>
          </Section>
          
           <Section title="13.7 Semi-Rigid Packaging Materials (Ardh-Kathor Packaging)">
            <Accordion type="single" collapsible className="w-full">
              <TestProcedure 
                title="Aseptic Cartons - Seal Integrity Test"
                procedure="<strong>Siddhant:</strong> Yeh sunishchit karta hai ki carton ke sabhi seals (top, bottom, longitudinal) poori tarah se band hain taaki microbial contamination na ho. <strong>Procedure:</strong> Carton ko ek special dye (jaise methylene blue) ke solution mein duboya jaata hai aur vacuum lagaya jaata hai. Agar seal kamzor hai, toh dye carton ke andar chala jaayega, jise kaat kar dekha ja sakta hai."
              />
               <TestProcedure 
                title="Thermoformed Containers (e.g., Yogurt Cups) - Top Load Test"
                procedure="<strong>Siddhant:</strong> Yeh container ki upar se aane wale pressure ko sehne ki क्षमता ko maapta hai, jo stacking aur sealing ke dauran hota hai. <strong>Procedure:</strong> Ek khaali cup ko ek compression tester mein rakha jaata hai aur upar se pressure lagaya jaata hai. Jis force par cup deform ya buckle hota hai, use record kiya jaata hai."
              />
            </Accordion>
          </Section>

        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
