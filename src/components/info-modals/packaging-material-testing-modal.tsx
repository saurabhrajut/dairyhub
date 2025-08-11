
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div id={id} className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        {children}
    </div>
);

const SubHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-24 font-headline">{children}</h3>
);

const TestProcedure = ({ title, procedure, calculation }: { title: string, procedure: React.ReactNode, calculation?: string }) => (
    <AccordionItem value={title.replace(/\s+/g, '-').toLowerCase()}>
        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{title}</AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none">
                <div className="text-gray-700">{procedure}</div>
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
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Packaging - Materials and Process</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A guide to packaging materials, processes, and quality testing for the dairy industry.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="introduction" className="w-full flex-1 flex flex-col min-h-0">
            <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="introduction">Introduction</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="forms-processes">Forms & Processes</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-1 mt-4 pr-6">
                 <TabsContent value="introduction" className="mt-0">
                    <Section title="Introduction & Purpose" id="introduction">
                        <p>Milk being extremely perishable product requires suitable packaging to preserve its initial quality for a predetermined length of time. The unique advantages offered by the plastic packages are that they have good barrier properties, permit visibility of the contents, are light in weight, can be used for single service, are easy to carry home, are more economical and can be made more attractive.</p>
                        <p>At present, only 15% of all milk produced is packaged by the commercial dairy industry and the flexible pouch accounts for approximately 92% of total marketing. Inadequate packaging leads to rapid degradation of product's quality.</p>
                        <h3 className="font-bold mt-4">Purpose of Packaging</h3>
                         <ul className="list-disc list-inside space-y-2">
                            <li>To contain and protect the product during handling and storage thereby increasing shelf life.</li>
                            <li>To inform consumers about product quality and facilitate transportation.</li>
                            <li>To attract the attention of consumers and increase sale.</li>
                            <li>To prevent scope of adulteration (tamper proof system).</li>
                        </ul>
                         <p>The name, trade name, description of food contained in the package, the name and business address of the manufacturer etc. are printed on the package. A statement about the addition of preservative and its class, permitted colouring agent/antioxidant/vitamins, and other details are also mentioned on the package.</p>
                    </Section>
                 </TabsContent>
                 <TabsContent value="materials" className="mt-0">
                    <Section title="Different Packaging Materials" id="materials">
                        <SubHeading id="glass">Glass</SubHeading>
                        <p>Earlier market milk was distributed in glass bottles. Glass does not react chemically with the product and has excellent barrier property. But glasses are brittle, prone to breakage, and heavier than modern alternatives. Sterilized flavoured milk drinks are still being packaged in heat-resistant glass bottles in India.</p>
                        
                        <SubHeading id="plastics">Plastics</SubHeading>
                        <p>Plastic packaging materials include polyolefins like LDPE (Low density polyethylene), LLDPE (Linear low density polyethylene), HDPE (High density polyethylene), and others like BOPP, PET, etc. They are flexible and mostly used as wrappers, sachets, bags or pouches.</p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>LDPE:</strong> Initially, single layer LDPE film was used, but it had issues with pin-holes. Coextruded double layer LDPE films improved this.</li>
                            <li><strong>Butane LLDPE:</strong> Introduced in the 1970s, it gained popularity over LDPE due to better puncture resistance, sealing characteristics, and mechanical properties.</li>
                            <li><strong>Octane LLDPE:</strong> When blended with LDPE, it provides excellent puncture resistance, superior seal strength, and is suitable for low-temperature storage. Its high hot tack strength is ideal for high-speed packing with minimal leakage.</li>
                        </ul>

                        <SubHeading id="laminates">Coextruded and Multilayered Packaging Materials (Laminates)</SubHeading>
                        <p>It is a combination of two or more different films. Laminations are done for strengthening the film material, to improve grease-resistance and to increase barrier properties. Some examples are polyethylene/paper and polyethylene/aluminium foil/polyethylene.</p>
                    </Section>
                 </TabsContent>
                 <TabsContent value="forms-processes" className="mt-0">
                    <Section title="Packaging Forms and Processes" id="forms-processes">
                        <p>Of the different forms used for milk packaging, flexible pouches dominate with 92% market share. The remaining comprises of glass bottle (7%) and Tetra-paks for UHT products (1%).</p>
                        
                        <SubHeading id="aseptic">Aseptic Packaging</SubHeading>
                        <p>Aseptic packaging refers to a technique in which previously sterilized food is aseptically packaged in a sterile package and hermetically sealed to have prolonged shelf life even under ambient conditions. The Tetra Pak is a prime example, comprising six layers (polyethylene, paper, aluminium foil etc.) that work together to keep the product fresh for up to 6 months without refrigeration.</p>
                        
                        <SubHeading id="fino">Fino (Fibre pillow) Package</SubHeading>
                        <p>The Fino package is a multilayered fibre based tamper-proof aseptic pack with its shape similar to a plastic pouch. This package has six protective layers to extend the shelf-life of UHT milk. The filling process involves sterilizing the packaging material with hydrogen peroxide, forming it into a tube, and filling it in a sterile environment.</p>

                        <SubHeading id="pet">PET (Polyethylene Terephthalate) Packaging</SubHeading>
                        <p>PET bottles give a perfect finish, are re-closable, clear, transparent, recyclable, and have excellent oxygen barrier properties. For UHT milk, multilayer PET bottles or monolayer bottles with a full light barrier are used to achieve a shelf-life of up to six months at ambient temperature.</p>

                        <SubHeading id="retort">Retort Packaging</SubHeading>
                        <p>It is the oldest process and is still used for products like flavoured milks. It involves filling milk into heat-resistant glass or plastic bottles, sealing them with air-tight caps, and then sterilizing the entire package.</p>
                    </Section>
                 </TabsContent>
                  <TabsContent value="testing" className="mt-0">
                     <Section title="Packaging Material Testing" id="testing">
                        <p><strong>Sampling Plan:</strong> Testing is done on a representative sample from a lot, typically based on AQL (Acceptable Quality Limit) standards.</p>
                        <p><strong>Conditioning of Test Specimen:</strong> Before testing, samples are conditioned at a specific temperature and relative humidity (usually 23±2°C and 50±5% RH) to ensure consistent and comparable results.</p>
                        <Accordion type="single" collapsible className="w-full">
                        <TestProcedure 
                            title="Paper and Paper Board - GSM (Grams per Square Meter)"
                            procedure={<><strong>Siddhant:</strong> Yeh paper ki 'motai' ya घनत्व (density) ko maapta hai. <strong>Procedure:</strong> Ek standard size (aam taur par 10x10 cm) ka paper sample kaata jaata hai aur use ek sateek (accurate) weighing balance par tola jaata hai. Is vajan ko uske area se divide karke GSM nikala jaata hai.</>}
                            calculation="GSM = [Weight of Sample (g) / Area of Sample (m²)]"
                        />
                        <TestProcedure 
                            title="Paper and Paper Board - Bursting Strength"
                            procedure={<><strong>Siddhant:</strong> Yeh paper ki us takat ko maapta hai jo uske fatne tak hydraulic pressure se lagayi jaati hai. <strong>Procedure:</strong> Paper sample ko ek Mullen Burst Tester mein clamp kiya jaata hai. Neeche se ek rubber diaphragm par hydraulic pressure badhaya jaata hai, jo paper ko upar ki taraf dhakelta hai. Jis pressure par paper fat jaata hai, use note kar liya jaata hai.</>}
                            calculation="Burst Factor = [Bursting Strength (kg/cm²) / GSM (g/m²)]"
                        />
                        <TestProcedure 
                            title="Paper and Paper Board - Cobb Test (Water Absorptiveness)"
                            procedure={<><strong>Siddhant:</strong> Yeh maapta hai ki ek nishchit samay mein paper kitna paani sokhta hai. <strong>Procedure:</strong> Ek tole huye (weighed) paper sample ko ek Cobb testing apparatus mein rakha jaata hai. Upar se ek nishchit volume (100 ml) paani daala jaata hai aur ek nishchit samay (jaise 60 seconds) tak rakha jaata hai. Baad mein, extra paani ko roller se hata kar sample ko dobara tola jaata hai. Vajan mein badhotri se paani sokhne ki matra pata chalti hai.</>}
                            calculation="Cobb Value (g/m²) = (Weight of sample after test - Weight of sample before test) x 100"
                        />
                        <TestProcedure 
                            title="Plastic Films - Thickness"
                            procedure={<><strong>Siddhant:</strong> Film ki motai uniform honi chahiye taaki uski barrier properties aur strength bani rahe. <strong>Procedure:</strong> Ek digital micrometer ya thickness gauge ka istemal karke film ke alag-alag jagahon par motai maapi jaati hai. Results ko microns (µm) mein report kiya jaata hai.</>}
                        />
                        <TestProcedure 
                            title="Plastic Films - Tensile Strength & Elongation"
                            procedure={<><strong>Siddhant:</strong> Yeh maapta hai ki film tootne se pehle kitna khichav (stretch) seh sakti hai. <strong>Procedure:</strong> Film ki ek standard size ki strip ko ek tensile testing machine ke jaws mein lagaya jaata hai. Machine strip ko ek constant speed se kheenchti hai jab tak woh toot na jaaye. Jis force par woh tootti hai (Tensile Strength) aur kitni kheenchti hai (Elongation), use record kiya jaata hai.</>}
                        />
                        <TestProcedure 
                            title="Plastic Films - Water Vapor Transmission Rate (WVTR)"
                            procedure={<><strong>Siddhant:</strong> Yeh maapta hai ki ek nishchit samay mein film ke ek nishchit area se kitni paani ki bhaap (water vapor) guzar sakti hai. Kam WVTR product ko nami se bachata hai. <strong>Procedure:</strong> Test film ko ek aisi dish par seal kiya jaata hai jismein desiccant (nami sokhne wala padarth) ho. Is assembly ko ek controlled humidity chamber mein rakha jaata hai. Samay-samay par dish ka vajan karke yeh pata lagaya jaata hai ki desiccant ne kitni nami sokhi hai.</>}
                            calculation="WVTR (g/m²/day) = [Change in Weight (g) x 24] / [Area of Sample (m²) x Time (hours)]"
                        />
                        <TestProcedure 
                            title="Aluminum Foil - Pinhole Test"
                            procedure={<><strong>Siddhant:</strong> Aluminum foil mein chote chhed (pinholes) uski barrier properties ko kamzor kar sakte hain. <strong>Procedure:</strong> Foil ke sample ko ek light box ke upar rakha jaata hai. Andhere kamre mein, upar se dekhne par jo bhi roshni ke points dikhte hain, woh pinholes hote hain. Unki ginti aur size ko standard charts se compare kiya jaata hai.</>}
                        />
                        <TestProcedure 
                            title="Glass Containers - Thermal Shock Test"
                            procedure={<><strong>Siddhant:</strong> Yeh test kaanch ki botal ki achanak taapman badlav ko sehne ki क्षमता ko jaanchta hai. <strong>Procedure:</strong> Bottles ko pehle garam paani ke bath mein rakha jaata hai, phir turant thande paani ke bath mein transfer kiya jaata hai. Agar bottle crack ya break nahi hoti, toh woh pass maani jaati hai.</>}
                        />
                        <TestProcedure 
                            title="Metal Containers - Leak Test"
                            procedure={<><strong>Siddhant:</strong> Yeh sunishchit karta hai ki can ke seams (jod) aacchi tarah se sealed hain. <strong>Procedure:</strong> Can ko paani ke neeche rakha jaata hai aur usme hawa ka pressure daala jaata hai. Agar kahin se bhi hawa ke bulbule nikalte hain, toh iska matlab hai ki can leak kar raha hai.</>}
                        />
                        <TestProcedure 
                            title="Plastic Containers - Drop Test"
                            procedure={<><strong>Siddhant:</strong> Yeh container ki girne par tootne se bachne ki takat ko maapta hai. <strong>Procedure:</strong> Product se bhare hue containers ko ek nishchit unchai se alag-alag angles par ek kathor satah par giraya jaata hai. Girne ke baad container mein koi leakage ya damage nahi hona chahiye.</>}
                        />
                        <TestProcedure 
                            title="Corrugated Fibre Board (CFB) Boxes - Compression Test"
                            procedure={<><strong>Siddhant:</strong> Yeh box ki stacking (ek ke upar ek rakhne) ki takat ko maapta hai. <strong>Procedure:</strong> Ek khaali box ko ek compression tester mein rakha jaata hai. Machine upar se dheere-dheere pressure lagati hai jab tak box deform ya collapse na ho jaaye. Maximum load jo box seh sakta hai, use record kiya jaata hai.</>}
                        />
                        <TestProcedure 
                            title="Aseptic Cartons - Seal Integrity Test"
                            procedure={<><strong>Siddhant:</strong> Yeh sunishchit karta hai ki carton ke sabhi seals (top, bottom, longitudinal) poori tarah se band hain taaki microbial contamination na ho. <strong>Procedure:</strong> Carton ko ek special dye (jaise methylene blue) ke solution mein duboya jaata hai aur vacuum lagaya jaata hai. Agar seal kamzor hai, toh dye carton ke andar chala jaayega, jise kaat kar dekha ja sakta hai.</>}
                        />
                        <TestProcedure 
                            title="Thermoformed Containers (e.g., Yogurt Cups) - Top Load Test"
                            procedure={<><strong>Siddhant:</strong> Yeh container ki upar se aane wale pressure ko sehne ki क्षमता ko maapta hai, jo stacking aur sealing ke dauran hota hai. <strong>Procedure:</strong> Ek khaali cup ko ek compression tester mein rakha jaata hai aur upar se pressure lagaya jaata hai. Jis force par cup deform ya buckle hota hai, use record kiya jaata hai.</>}
                        />
                        </Accordion>
                    </Section>
                  </TabsContent>
            </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
