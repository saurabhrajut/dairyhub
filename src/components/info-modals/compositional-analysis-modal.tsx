
"use client";

import { useState } from "react";
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
import { Button } from "../ui/button";
import { ArrowLeft, Beaker, Droplet, Wind, ShieldCheck, Component, FlaskConical, Snowflake, Thermometer, Archive } from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";


const InfoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-card p-4 sm:p-6 rounded-xl shadow-sm border mt-6 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-semibold text-primary scroll-mt-24 font-headline">
        {children}
    </h3>
);

const Procedure = ({ title, purpose, reference, children }: { title: string, purpose: string, reference?: string, children: React.ReactNode }) => (
    <AccordionItem value={title.replace(/\s+/g, '-').toLowerCase()}>
        <AccordionTrigger className="text-left hover:no-underline">
            <div className="flex flex-col text-left">
                <span className="font-bold text-base sm:text-lg">{title}</span>
                <span className="text-xs text-muted-foreground font-normal">{purpose}</span>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none break-words">
                {children}
                {reference && <p className="text-xs text-muted-foreground mt-4"><strong>Ref:</strong> {reference}</p>}
            </div>
        </AccordionContent>
    </AccordionItem>
);

const analysisTopics = [
    { value: "processed-milk", title: "Milk", icon: Droplet },
    { value: "cream", title: "Cream", icon: Droplet },
    { value: "cream-powder", title: "Cream Powder", icon: Wind },
    { value: "butter", title: "Butter", icon: Component },
    { value: "ghee-butter-oil", title: "Ghee / Butter Oil", icon: FlaskConical },
    { value: "cheese-paneer", title: "Paneer / Cheese", icon: PaneerIcon },
    { value: "dahi-yoghurt", title: "Dahi / Yoghurt", icon: Beaker },
    { value: "chakka-shrikhand", title: "Chakka / Shrikhand", icon: Beaker },
    { value: "khoa", title: "Khoa", icon: Component },
    { value: "ice-cream", title: "Ice Cream", icon: IceCreamIcon },
    { value: "condensed-milk", title: "Condensed Milk", icon: Thermometer },
    { value: "milk-powder", title: "Milk Powder", icon: Wind },
    { value: "casein", title: "Casein", icon: FlaskConical },
    { value: "whey-powder", title: "Whey Powder", icon: Archive },
];


export function CompositionalAnalysisModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  const selectedTopic = analysisTopics.find(t => t.value === activeTopic);

  const renderContent = () => {
    if (!activeTopic) return null;
    switch (activeTopic) {
        case "processed-milk": return <MilkContent />;
        case "cream": return <CreamContent />;
        case "cream-powder": return <CreamPowderContent />;
        case "butter": return <ButterContent />;
        case "ghee-butter-oil": return <GheeContent />;
        case "cheese-paneer": return <CheesePaneerContent />;
        case "dahi-yoghurt": return <DahiYoghurtContent />;
        case "chakka-shrikhand": return <ChakkaShrikhandContent />;
        case "khoa": return <KhoaContent />;
        case "ice-cream": return <IceCreamContent />;
        case "condensed-milk": return <CondensedMilkContent />;
        case "milk-powder": return <MilkPowderContent />;
        case "casein": return <CaseinContent />;
        case "whey-powder": return <WheyPowderContent />;
        default: return null;
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Compositional Analysis of Dairy Products
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
             {selectedTopic ? selectedTopic.title : "A detailed guide to chemical quality assurance."}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic ? (
             <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Topics
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                       {renderContent()}
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 sm:p-0">
                    {analysisTopics.map(topic => (
                        <button
                            key={topic.value}
                            onClick={() => setActiveTopic(topic.value)}
                            className="flex flex-col items-center justify-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-center transition-all duration-200 aspect-square"
                        >
                            <topic.icon className="w-10 h-10 text-primary mb-3 shrink-0" />
                            <span className="font-semibold font-headline text-card-foreground text-sm">{topic.title}</span>
                        </button>
                    ))}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}


// CONTENT COMPONENTS
const MilkContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="milk-analysis">Analysis of Milk</SectionTitle>
             <Accordion type="single" collapsible className="w-full">
                <Procedure 
                    title="Determination of Fat (Gerber Method)"
                    purpose="A routine screening test for fat content using acid digestion and centrifugation."
                    reference="IS 1479 (Part I) 1961 (Reaffirmed 2003)"
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>The milk is mixed with sulphuric acid and iso-amyl alcohol in a special Gerber tube (butyrometer). The acid dissolves the protein and other solids, releasing the fat. The iso-amyl alcohol helps in a clear separation of the fat layer. The tubes are centrifuged, and the fat, being lighter, rises into the calibrated stem of the butyrometer, where its percentage is directly read.</p>
                    <h4 className="font-semibold mt-4 mb-2">Reagents & Apparatus:</h4>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sulphuric acid:</strong> 90-91% concentration, sp. gr. 1.807-1.812 at 27°C.</li>
                        <li><strong>Amyl alcohol:</strong> Furfural-free, sp. gr. 0.808-0.818 at 27°C.</li>
                        <li><strong>Gerber Butyrometers:</strong> ISI marked, appropriate range (e.g., 0-10%).</li>
                        <li><strong>Pipettes:</strong> 10.75 ml (milk), 10 ml (acid), 1 ml (amyl alcohol).</li>
                        <li><strong>Water Bath:</strong> Maintained at 65 ± 2°C.</li>
                        <li><strong>Gerber Centrifuge:</strong> Capable of 1100-1200 rpm.</li>
                    </ul>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Measure 10 ml of sulphuric acid into a butyrometer tube without wetting the neck.</li>
                        <li>Pipette 10.75 ml of well-mixed milk into the butyrometer along the side wall.</li>
                        <li>Add 1 ml of Amyl alcohol.</li>
                        <li>Close with a lock stopper, shake until homogeneous, and invert for complete mixing.</li>
                        <li>Place in a water bath at 65±2°C for 5 minutes to ensure all casein particles are dissolved.</li>
                        <li>Centrifuge for 4-5 minutes at 1100-1200 rpm.</li>
                        <li>Place back in the water bath for 5 minutes.</li>
                        <li>Read the percentage of fat from the calibrated stem by adjusting the stopper. The reading is taken from the bottom of the fat column meniscus.</li>
                    </ol>
                </Procedure>
                <Procedure 
                    title="Determination of Total Solids (Gravimetric Method)"
                    purpose="The standard reference method for accurately determining the total solids content."
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>A known weight of milk is heated to evaporate all the water. The weight of the remaining dry residue represents the total solids.</p>
                     <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh an empty, clean, dry flat-bottomed dish with its lid (W1).</li>
                        <li>Add about 5g of prepared milk sample into the dish and weigh again (W2).</li>
                        <li>Heat the dish without the lid on a boiling water bath for 30 minutes.</li>
                        <li>Transfer the dish to a hot air oven at 102 ± 2°C for 2 hours.</li>
                        <li>Cover the dish with the lid, cool in a desiccator, and weigh (W3).</li>
                        <li>Repeat the heating and cooling process until a constant weight is achieved.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>% Total Solids = [ (W3 - W1) / (W2 - W1) ] * 100</code></pre>
                </Procedure>
                <Procedure 
                    title="Total Protein Content (Kjeldahl Method)"
                    purpose="The standard reference method for determining the total nitrogen content, which is then converted to crude protein content."
                    reference="IDF 20B: 1993; A.O.A.C 17th edn, 2000 Official Method 991.23"
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>The Kjeldahl method determines the total nitrogen in a sample. The nitrogen in the protein is first converted to ammonium sulfate using concentrated sulfuric acid (digestion). Then, ammonia gas is released and titrated to determine the amount of nitrogen. This nitrogen amount is multiplied by a factor (6.38 for milk) to calculate the crude protein content.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                     <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li><strong>Digestion:</strong> Weigh ~5 g of milk into a Kjeldahl flask. Add 25 ml concentrated sulfuric acid and a catalyst mixture (copper sulfate & potassium sulfate). Heat until the solution is clear.</li>
                        <li><strong>Distillation:</strong> Cool the digestate, dilute with water, and add excess NaOH. Steam-distill the released ammonia into a known volume of standard acid (e.g., boric acid with indicator).</li>
                        <li><strong>Titration:</strong> Titrate the trapped ammonia with a standard acid (e.g., 0.1 N HCl) until the indicator changes color. A blank determination is also performed.</li>
                     </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>% Total Nitrogen = [ 1.4007 * (V_sample - V_blank) * N_acid ] / Weight_sample</code></pre><br/>
                     <pre><code>% Crude Protein = % Total Nitrogen * 6.38</code></pre>
                </Procedure>
                <Procedure 
                    title="Casein Content (Kjeldahl Method)"
                    purpose="To determine the amount of casein, the main protein in milk, by precipitating it before nitrogen analysis."
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>Casein is precipitated from milk at its isoelectric point (pH 4.6) using acetic acid. The whey proteins remain in the filtrate. The nitrogen content of the casein precipitate is then determined by the Kjeldahl method.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                     <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh 10g of milk into a 250ml beaker. Add 90ml distilled water at 40-42°C.</li>
                        <li>Add 1.5ml of 10% acetic acid solution drop by drop while stirring.</li>
                        <li>Let the mixture stand for 10 minutes. The supernatant should be clear.</li>
                        <li>Filter the mixture through a filter paper. Wash the precipitate with cold water.</li>
                        <li>Transfer the filter paper and precipitate into a Kjeldahl flask for nitrogen determination as described in the Total Protein method.</li>
                     </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>% Casein = % Nitrogen in Precipitate * 6.38</code></pre>
                </Procedure>
                 <Procedure 
                    title="Titratable Acidity"
                    purpose="To measure the total acidity (natural + developed) of milk."
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>The total acidity of milk is measured by titrating it with a standard alkali solution (NaOH) to a specific endpoint, indicated by a color change with phenolphthalein.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Take 10 ml of milk sample in a porcelain dish.</li>
                        <li>Add a few drops of 1% phenolphthalein solution.</li>
                        <li>Titrate with 0.1 N NaOH solution.</li>
                        <li>Stop the titration when a faint pink color appears (endpoint).</li>
                        <li>Note the volume of alkali used.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>% Acidity (as Lactic Acid) = (9 * V * N) / W</code></pre>
                    <p className="text-xs">Where V = volume of NaOH, N = normality of NaOH, W = weight of milk sample.</p>
                </Procedure>
             </Accordion>
        </InfoCard>
    </div>
);

const CreamContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="cream-analysis">Analysis of Cream</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
               <Procedure 
                    title="Determination of Fat"
                    purpose="To determine the fat content in cream, which is its primary commercial value."
                    reference="IS 3509-1966"
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>Due to the high viscosity of cream, the Gerber or Rose-Gottlieb/Werner-Schmidt methods are used with a smaller, accurately weighed sample.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure (Gerber Method for Cream):</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh 5g of well-mixed cream directly into a special cream butyrometer.</li>
                        <li>Add 5ml of water.</li>
                        <li>Add 10ml of Gerber's acid and 1ml of amyl alcohol.</li>
                        <li>Proceed as for the Gerber method for milk (centrifugation, water bath, reading). The reading is multiplied by a factor depending on the butyrometer to get the fat percentage.</li>
                    </ol>
                    <p className="mt-2">Alternatively, for higher accuracy, use the <strong>Rose-Gottlieb</strong> or <strong>Werner-Schmidt</strong> method. Weigh accurately 1-2g of cream, disperse it in 9ml of 0.5% NaCl solution (for Rose-Gottlieb) or dissolve it in 10ml concentrated HCl (for Werner-Schmidt), and then proceed with the respective extraction method as described for liquid milk.</p>
                </Procedure>
                 <Procedure 
                    title="Titratable Acidity"
                    purpose="To determine the acidity of cream."
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh 10g of cream into a porcelain dish.</li>
                        <li>Add 10ml of hot, neutral distilled water to disperse the sample.</li>
                        <li>Add a few drops of phenolphthalein indicator.</li>
                        <li>Titrate with 0.1 N NaOH to a faint pink endpoint.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>% Acidity = (Titre volume * Normality of NaOH * 9) / Weight of sample</code></pre>
                </Procedure>
               <Procedure 
                    title="Detection of Thickeners in Cream"
                    purpose="To detect illegal additives like starch or gelatine used to artificially thicken cream."
                    reference="A.O.A.C. Official method 920.106"
                >
                  <p><strong>Starch:</strong> Dilute 10ml of cream with 10ml water and boil. Cool and add a few drops of iodine solution. A blue color indicates the presence of starch.</p>
                  <p className="mt-2"><strong>Gelatine:</strong> Detected by Stokes Test. Mix 10ml cream, 20ml water, and 20ml of Stokes reagent (acid mercuric nitrate). Filter the mixture. To the filtrate, add an equal volume of saturated picric acid. A yellow precipitate indicates gelatine.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const CreamPowderContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="cream-powder-analysis">Analysis of Cream Powder</SectionTitle>
             <Accordion type="single" collapsible className="w-full">
               <Procedure 
                    title="Determination of Moisture"
                    purpose="To determine the free moisture content, which is critical for shelf life."
                    reference="IS 16072: 2012"
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh a clean, dry, empty moisture dish with its lid (W1).</li>
                        <li>Add about 1g of sample into the dish and weigh again (W2).</li>
                        <li>Place the dish without the lid in a hot air oven at 102 ± 2°C for 2 hours.</li>
                        <li>Cover the dish, cool in a desiccator, and weigh (W3).</li>
                        <li>Repeat heating for 1-hour intervals until a constant weight is achieved.</li>
                    </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>% Moisture = [ (W2 - W3) / (W2 - W1) ] * 100</code></pre>
                </Procedure>
                <Procedure 
                    title="Determination of Fat"
                    purpose="To determine the fat content in cream powder."
                    reference="A.O.A.C 932.06"
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure (Rose-Gottlieb Method):</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                         <li>Weigh accurately ~1g of powder into an extraction flask.</li>
                         <li>Add 10ml of warm water and mix well to reconstitute the powder.</li>
                         <li>Add 1.25ml of ammonia solution and mix.</li>
                         <li>Proceed with the standard Rose-Gottlieb extraction using diethyl ether and petroleum ether, as described for liquid milk.</li>
                    </ol>
                </Procedure>
                <Procedure 
                    title="Determination of Milk Protein"
                    purpose="To determine the protein content using the Kjeldahl method."
                    reference="A.O.A.C 991.23, 991.20, 991.21"
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Determine Total Nitrogen (TN) content of the powder using the Kjeldahl method.</li>
                        <li>Determine Non-Protein Nitrogen (NPN) from a trichloroacetic acid (TCA) filtrate of the reconstituted sample, also using the Kjeldahl method.</li>
                    </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>% True Protein = (% TN - % NPN) * 6.38</code></pre>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const ButterContent = () => (
    <div className="prose prose-sm max-w-none break-words">
         <InfoCard>
            <SectionTitle id="butter-analysis">Analysis of Butter</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
               <Procedure 
                    title="Determination of Moisture"
                    purpose="To determine the water content, a key quality and legal parameter."
                    reference="IS 3507 – 1966; A.O.A.C 920.116"
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh 3-4 g of prepared butter sample into a pre-weighed flat-bottomed dish (W1).</li>
                        <li>Heat the dish on a boiling water-bath for ~20 min, stirring frequently.</li>
                        <li>Transfer to a hot air oven at 100 ± 1°C and dry to a constant weight (W2).</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>Moisture % = [ (W1 - W2) / Initial Weight of sample ] * 100</code></pre>
                </Procedure>
               <Procedure 
                    title="Determination of Fat and Curd (MSNF)"
                    purpose="To determine fat and non-fat solids content."
                    reference="IS 3507 – 1966"
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Use the residue from the moisture determination (W2).</li>
                        <li>Extract the fat by repeatedly washing the residue with a fat solvent (petroleum ether) and decanting the solvent.</li>
                        <li>After all fat is extracted, dry the remaining residue in the oven to remove all solvent and weigh it (W3). This gives the weight of Curd + Salt.</li>
                        <li>To find the curd content, the salt content must be determined separately and subtracted from this value.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>% Fat = 100 - (%Moisture + %Curd&Salt)</code></pre>
                    <pre><code>% Curd = %Curd&Salt - %Salt</code></pre>
                </Procedure>
               <Procedure 
                    title="Determination of Salt (NaCl)"
                    purpose="To measure the salt content, important for flavor and legal standards."
                >
                    <h4 className="font-semibold mt-4 mb-2">Method 1: Mohr's Method</h4>
                    <p>Weigh 5g of butter, add 100ml boiling water, and cool to 50-55°C. Add potassium chromate indicator and titrate with standard silver nitrate (AgNO₃) solution until a brownish color persists.</p>
                    <pre><code>NaCl % = [5.844 * N_AgNO3 * (V_sample - V_blank)] / Weight_sample</code></pre>
                    
                    <h4 className="font-semibold mt-4 mb-2">Method 2: Volhard's Method</h4>
                    <p>Extract salt with hot water. Add excess standard silver nitrate to precipitate chlorides. Back-titrate the excess silver nitrate with potassium thiocyanate using ferric alum indicator.</p>
                    <pre><code>NaCl % = [23.38 * N_KCNS * (V_blank - V_sample)] / Weight_sample</code></pre>
                </Procedure>
            </Accordion>
         </InfoCard>
    </div>
);

const GheeContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="ghee-analysis">Analysis of Ghee / Butter Oil</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
               <Procedure 
                    title="Reichert-Meissel (RM) & Polenske Value (PV)"
                    purpose="To check the purity of ghee. RM value measures short-chain fatty acids characteristic of milk fat. PV value helps detect adulteration with coconut oil."
                    reference="IS 3508 – 1966"
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li><strong>Saponification:</strong> 5.00 g of ghee is saponified (turned into soap) using 20g glycerol and 2 ml 50% NaOH. Heat until the liquid is clear.</li>
                        <li><strong>Dilution & Acidification:</strong> Add 93 ml of boiled, cooled water, and then 50 ml of dilute sulfuric acid.</li>
                        <li><strong>Distillation:</strong> Distill 110 ml of the mixture in 19-21 minutes using a Polenske distillation apparatus.</li>
                        <li><strong>RM Value Titration:</strong> Filter the distillate and titrate 100 ml of the filtrate with 0.1 N NaOH.</li>
                        <li><strong>Polenske Value Titration:</strong> Wash the condenser and filter paper three times with 15 ml of neutralized ethanol. Titrate the combined washings with 0.1 N NaOH.</li>
                    </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>RM Value = 1.1 * (Titration_Sample - Titration_Blank)</code></pre>
                     <pre><code>Polenske Value = Titration_Insoluble_Acids - Titration_Blank_Insoluble</code></pre>
                </Procedure>
               <Procedure 
                    title="Free Fatty Acids (FFA)"
                    purpose="Measures the extent of fat breakdown (hydrolysis), which indicates freshness. High FFA leads to rancidity."
                    reference="IS 3508 – 1966"
                >
                    <p>The sample is dissolved in hot neutralized alcohol and titrated with standard 0.1 N NaOH solution using phenolphthalein indicator. Acidity is usually expressed as % oleic acid.</p>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>% FFA (as Oleic acid) = [Titre * N_NaOH * 28.2] / Weight_sample</code></pre>
                </Procedure>
               <Procedure 
                    title="Baudouin Test for Vanaspati"
                    purpose="Detects vanaspati (hydrogenated vegetable oil) in ghee."
                    reference="IS 3508 – 1966"
                >
                    <p>Based on the mandatory addition of 5% sesame oil to vanaspati. Melted ghee (5ml) is shaken vigorously for 2 mins with 5ml of concentrated HCl and 0.4ml of 2% furfural solution. A pink or red color in the acid layer indicates the presence of vanaspati.</p>
                </Procedure>
                <Procedure 
                    title="Detection of Mineral Oil (Holde's Test)"
                    purpose="Detects non-edible mineral oils used as adulterants."
                >
                    <p>Saponify 1g of fat with 25ml of 4% alcoholic KOH. Add 100ml of hot water. The appearance of turbidity indicates the presence of mineral oil, which does not saponify.</p>
                </Procedure>
                <Procedure 
                    title="Peroxide Value (PV)"
                    purpose="Measures the initial stages of oxidative rancidity."
                    reference="A.O.A.C 965.33"
                >
                    <p>The ghee sample is dissolved in an acetic acid-chloroform mixture. Saturated potassium iodide (KI) solution is added. Peroxides in the fat liberate iodine from KI. The liberated iodine is then titrated with a standard sodium thiosulphate solution using starch as an indicator.</p>
                    <pre><code>PV (meq/kg) = (S * N * 1000) / Weight of Sample</code></pre>
                    <p className="text-xs">Where S = ml of Na₂S₂O₃ (blank corrected) and N = Normality of Na₂S₂O₃</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const CheesePaneerContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="paneer-analysis">Analysis of Paneer / Cheese</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
               <Procedure 
                    title="Determination of Moisture & Total Solids"
                    purpose="To measure the water content, affecting texture and shelf life."
                    reference="IS 2785 -1979"
                >
                  <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                  <ol className="list-decimal list-outside pl-5 space-y-2">
                      <li>Weigh a clean, dry, empty aluminum moisture dish with sand and a glass rod.</li>
                      <li>Weigh 3g of grated sample into the dish.</li>
                      <li>Add a few drops of distilled water and mix the sample with the sand.</li>
                      <li>Evaporate the water by placing the dish on a hot plate.</li>
                      <li>Dry the dish in a hot air oven at 102 ± 2°C for 4 hours.</li>
                      <li>Cool in a desiccator and weigh. Repeat until a constant weight is achieved.</li>
                  </ol>
                </Procedure>
               <Procedure 
                    title="Determination of Fat (Acid Digestion - Werner-Schmidt Method)"
                    purpose="To determine the fat content on a dry matter basis."
                    reference="IS 2785 -1979"
                >
                  <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                  <ol className="list-decimal list-outside pl-5 space-y-2">
                      <li>Weigh 1-2g of the prepared sample into a 100 ml beaker.</li>
                      <li>Add 10 ml of concentrated HCl and heat on a water bath until all solid particles dissolve.</li>
                      <li>Cool the solution, add 10 ml of ethanol, and transfer to a Mojonnier flask.</li>
                      <li>Add 25 ml of diethyl ether, shake for 1 minute. Then add 25 ml of petroleum ether and shake again.</li>
                      <li>Centrifuge and transfer the ethereal layer to a pre-weighed conical flask.</li>
                      <li>Repeat the extraction twice.</li>
                      <li>Evaporate the ether and dry the residue to find the fat content.</li>
                  </ol>
                </Procedure>
                <Procedure 
                    title="Detection of Starch in Paneer"
                    purpose="To detect illegal addition of starch as a filler."
                >
                    <p>Macerate 1g of the paneer sample with 1ml of distilled water in a porcelain dish. Then add a drop of iodine solution. A blue color indicates the presence of starch.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const DahiYoghurtContent = () => (
     <div className="prose prose-sm max-w-none break-words">
         <InfoCard>
            <SectionTitle id="dahi-analysis">Analysis of Dahi / Yoghurt</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
               <Procedure 
                    title="Titratable Acidity"
                    purpose="To determine the acidity developed during fermentation."
                >
                  <ol className="list-decimal list-outside pl-5 space-y-2">
                    <li>Weigh 10g of sample in a beaker.</li>
                    <li>Add 10 ml of distilled water to make a paste.</li>
                    <li>Add a few drops of phenolphthalein indicator and titrate with 0.1 N NaOH until a faint pink color appears.</li>
                  </ol>
                  <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                  <pre><code>% Acidity (as Lactic Acid) = (9 * V * N) / W</code></pre>
                  <p className="text-xs">Where V = volume of NaOH, N = normality of NaOH, W = weight of sample.</p>
                </Procedure>
                <Procedure
                    title="Determination of Total Solids"
                    purpose="To determine the total solids content, often done after neutralizing acidity."
                    reference="IS 12333: 1997 / IDF 151: 1991"
                >
                    <p><strong>NaOH Method:</strong> Weigh 4-5g of sample, neutralize with 0.1N NaOH, and then dry on a water bath followed by an oven at 100±2°C to a constant weight. The weight of added NaOH is subtracted from the final residue.</p>
                    <p><strong>Zinc Oxide Method:</strong> Weigh 1g of sample, mix with 2g of zinc oxide, and dry to a constant weight. The developed lactic acid is determined separately and added to the moisture value to get the correct total solids.</p>
                </Procedure>
               <Procedure 
                    title="Diacetyl Content"
                    purpose="To measure a key flavor compound."
                >
                    <p>Diacetyl is a characteristic flavor compound produced during fermentation. Its quantity is measured spectrophotometrically at 570 nm after a series of chemical reactions.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const ChakkaShrikhandContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="chakka-analysis">Analysis of Chakka / Shrikhand</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
                <Procedure title="Determination of Milk Solids" purpose="To determine total milk solids.">
                    <p>Follow the procedure for Dahi. For Shrikhand, determine sucrose content separately and subtract it from the total solids to get milk solids.</p>
                </Procedure>
                <Procedure title="Determination of Fat" purpose="To determine fat content.">
                    <p>Follow the Werner-Schmidt Method as for Paneer.</p>
                </Procedure>
                <Procedure title="Determination of Protein" purpose="To determine protein content.">
                    <p>Follow the Kjeldahl method as for Ice Cream.</p>
                </Procedure>
                <Procedure title="Determination of Titratable Acidity" purpose="To determine acidity.">
                    <p>Follow the procedure for Condensed Milk.</p>
                </Procedure>
                <Procedure title="Determination of Total Ash" purpose="To determine mineral content.">
                    <p>Follow the procedure for Milk Powder.</p>
                </Procedure>
                <Procedure title="Determination of Sucrose Content" purpose="To determine added sugar.">
                    <p>Follow the procedure for Condensed Milk (Lane-Eynon method).</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const KhoaContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="khoa-analysis">Analysis of Khoa</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
                <Procedure title="Determination of Moisture" purpose="To determine water content.">
                    <p>Follow the procedure for Paneer (drying with sand).</p>
                </Procedure>
                <Procedure title="Determination of Fat" purpose="To determine fat content.">
                    <p>If the sample contains added sugar, use the Rose-Gottlieb method. If no sugar is present, the Werner-Schmidt acid digestion method can be used.</p>
                </Procedure>
                <Procedure title="Detection of Starch" purpose="To detect illegal addition of starch.">
                    <p>Disperse 11g of grated khoa in 50ml hot water. Take 5ml of this dispersion, add 0.2ml iodine solution. A blue color indicates starch.</p>
                </Procedure>
                <Procedure title="Detection of Sucrose" purpose="To detect added sugar.">
                    <p>Take 5ml of the prepared khoa dispersion, add 0.5ml conc. HCl and 0.005g resorcinol. Heat in a boiling water bath for 5 mins. A deep red color indicates sucrose.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const IceCreamContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="icecream-analysis">Analysis of Ice Cream</SectionTitle>
             <Accordion type="single" collapsible className="w-full">
               <Procedure 
                    title="Determination of Fat (Rose-Gottlieb method)"
                    purpose="To determine the fat content, crucial for legal standards and texture."
                    reference="Pearson’s Composition and analysis of foods 9th edn, 1991 page 604"
                >
                  <ol className="list-decimal list-outside pl-5 space-y-2">
                    <li>Weigh 4-5 g of sample into a Mojonnier tube.</li>
                    <li>Add 10 ml of distilled water and mix.</li>
                    <li>Add 2 ml of ammonia, mix, and heat in a 60°C water bath for 20 min.</li>
                    <li>Cool, and add 10 ml of ethanol, 25 ml of diethyl ether, and mix.</li>
                    <li>Then add 25 ml of petroleum ether and mix.</li>
                    <li>Allow the layers to separate, or centrifuge.</li>
                    <li>Decant the ethereal layer into a weighed vessel.</li>
                    <li>Repeat the extraction twice.</li>
                    <li>Evaporate the ether and dry the residue at 102 ± 2°C for 3 hours.</li>
                  </ol>
                </Procedure>
               <Procedure 
                    title="Determination of Overrun"
                    purpose="Overrun is the percentage increase in the volume of ice cream over the volume of the mix, due to the incorporation of air during freezing."
                    reference="IS:2802: 1964"
                >
                  <ol className="list-decimal list-outside pl-5 space-y-2">
                    <li>Weigh a unit of ice cream (e.g., a full cup or carton) to get its net weight. Let this be W_icecream.</li>
                    <li>Melt the same volume of ice cream completely, removing all air (a drop of amyl alcohol can help).</li>
                    <li>Weigh the melted mix. Let this be W_mix.</li>
                  </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>% Overrun = [ (Weight of mix - Weight of ice cream) / Weight of ice cream ] * 100</code></pre>
                </Procedure>
               <Procedure 
                    title="Total Solids Content"
                    purpose="To determine the total solids in ice cream."
                >
                  <ol className="list-decimal list-outside pl-5 space-y-2">
                    <li>Weigh 5g of sample into a weighed dish containing sand.</li>
                    <li>Add a few drops of water to make a paste.</li>
                    <li>Dry the sample on a boiling water bath for 20-30 min.</li>
                    <li>Dry the dish in a hot air oven at 100 ± 2°C for 4 hours.</li>
                    <li>Cool and weigh. Repeat until constant weight is achieved.</li>
                  </ol>
                </Procedure>
                <Procedure 
                    title="Determination of Protein (Kjeldahl Method)"
                    purpose="To determine protein content."
                    reference="Pearson’s Composition and Analysis of Foods,9th edn,1991 page 17"
                >
                    <p>Weigh 5-8g of sample and determine the total nitrogen content using the Kjeldahl method (as described for liquid milk). The protein content is calculated by multiplying the nitrogen percentage by a factor of 6.38 for dairy ice cream or 6.25 for frozen desserts.</p>
                </Procedure>
                <Procedure 
                    title="Determination of Added Starch"
                    purpose="To detect illegal addition of starch."
                    reference="A.O.A.C 17th edn,2000 Modified Official method- 925.50"
                >
                    <p>Defat the sample with petroleum ether. Precipitate starch with alcohol. Hydrolyze the precipitate with acid to convert starch to reducing sugars. Determine the amount of reducing sugars using the Lane-Eynon method and multiply by 0.9 to get the starch content.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const CondensedMilkContent = () => (
     <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="condensed-analysis">Analysis of Condensed Milk</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
                <Procedure 
                    title="Determination of Total Solids"
                    purpose="To measure the total solid content, a key parameter for condensed milk."
                    reference="IS 12333 – 1997 / ISO 6731 -1989"
                >
                     <p>Weigh ~2g of sample into a dish with sand. Add 5ml water and mix to a paste. Dry on a water bath for 30 mins, then dry in an oven at 102 ± 2°C to constant weight.</p>
                </Procedure>
                 <Procedure 
                    title="Determination of Fat"
                    purpose="To measure the fat content."
                    reference="Rose-Gottlieb Method"
                >
                     <p>Weigh 2-2.5g of sample, reconstitute with warm water and ammonia. Proceed with the Rose-Gottlieb method as for liquid milk.</p>
                </Procedure>
                <Procedure 
                    title="Determination of Sucrose"
                    purpose="To measure the amount of added sugar, a key component in sweetened condensed milk."
                >
                    <h4 className="font-semibold mt-4 mb-2">Lane-Eynon Method (Volumetric)</h4>
                    <p>This method involves clarifying the sample and determining reducing sugars (lactose) before and after acid inversion (which converts sucrose to reducing sugars). The difference gives the sucrose content.</p>
                    <pre><code>Sucrose % = (Total Reducing Sugars % - Original Reducing Sugars %) * 0.95</code></pre>
                    
                    <h4 className="font-semibold mt-4 mb-2">Polarimetric Method</h4>
                    <p>This method is based on the change in the optical rotation of a clarified sample solution before and after acid inversion. The change in rotation is proportional to the sucrose content.</p>
                </Procedure>
                <Procedure title="Determination of Titratable Acidity" purpose="To determine acidity.">
                    <p>Weigh 10g of sample, dilute with 30ml warm water, add phenolphthalein indicator, and titrate with 0.1N NaOH.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const MilkPowderContent = () => (
     <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="powder-analysis">Analysis of Milk Powder</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
                <Procedure 
                    title="Determination of Moisture & Total Solids"
                    purpose="To determine the free moisture content, critical for shelf life."
                    reference="IS 16072 : 2012"
                >
                   <ol className="list-decimal list-outside pl-5 space-y-2">
                      <li>Weigh a clean, dry, empty dish (W1).</li>
                      <li>Weigh 1 g of sample into it and weigh again (W2).</li>
                      <li>Dry the dish in a hot air oven at 102 ± 2°C for 2 hours.</li>
                      <li>Cool the dish in a desiccator to room temperature.</li>
                      <li>Weigh the dish and note the weight (W3).</li>
                      <li>Repeat heating and cooling until a constant weight is obtained.</li>
                   </ol>
                   <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                   <pre><code>% Total Solids = [ (W3 - W1) / (W2 - W1) ] * 100</code></pre>
                   <pre><code>% Moisture = 100 - % Total Solids</code></pre>
                </Procedure>
               <Procedure 
                    title="Determination of Fat"
                    purpose="To measure the fat content."
                    reference="A.O.A.C 17th edn, 2000 Official method 932.06"
                >
                    <p>Weigh ~1g of powder, reconstitute it with 10ml warm water, add ammonia, and then extract the fat using the Rose-Gottlieb method.</p>
                </Procedure>
                <Procedure title="Determination of Titratable Acidity" purpose="To determine acidity.">
                    <p>Reconstitute 10g of powder to 100ml. Titrate 10ml of this reconstituted milk with 0.1N NaOH using phenolphthalein, comparing the endpoint color to a reference standard (rosaniline acetate or cobalt sulphate).</p>
                </Procedure>
               <Procedure 
                    title="Determination of Solubility Index"
                    purpose="Measures the amount of undissolved powder after reconstitution, indicating quality."
                    reference="ISI Hand book of Food Analysis (Part XI) – 1981"
                >
                    <p>A standard solution is prepared and centrifuged. The volume of the sediment is measured in a graduated centrifuge tube and reported as the solubility index in ml. A low index is desirable.</p>
                </Procedure>
                <Procedure 
                    title="Determination of Total Ash"
                    purpose="To determine the mineral content."
                    reference="IS 1165 - 2005"
                >
                    <p>Weigh ~3g of powder in a crucible. Heat gently and then strongly in a muffle furnace at 550 ± 20°C until grey ash is obtained. The final constant weight of the residue is the total ash.</p>
                </Procedure>
                <Procedure title="Determination of Crude Fibre" purpose="For cereal-based weaning foods.">
                    <p>The defatted sample is sequentially boiled with dilute acid and then with dilute alkali. The remaining insoluble residue is dried, weighed, ignited, and weighed again. The loss in weight on ignition represents the crude fibre.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const CaseinContent = () => (
     <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="casein-analysis">Analysis of Edible Casein Products</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
                <Procedure title="Determination of Moisture" purpose="To determine water content.">
                    <p>Follow the procedure for Milk Powder (drying at 102±2°C).</p>
                </Procedure>
                <Procedure title="Determination of Fat" purpose="To determine fat content.">
                    <p>The sample is digested with HCl, and fat is extracted using the Schmid-Bondzynski-Ratzlaff (SBR) principle (similar to Werner-Schmidt method) using diethyl ether and petroleum ether.</p>
                </Procedure>
                <Procedure title="Determination of Protein" purpose="To determine protein content.">
                    <p>Total nitrogen is determined by the Kjeldahl method. For true protein, non-protein nitrogen (NPN) is determined separately from a TCA filtrate and subtracted from the total nitrogen.</p>
                </Procedure>
                <Procedure title="Determination of Lactose" purpose="To determine residual lactose.">
                    <p>Using a photometric method. The casein is precipitated, and the lactose in the filtrate reacts with phenol and sulfuric acid to produce a color, which is measured at 490 nm.</p>
                </Procedure>
                <Procedure title="Determination of Ash" purpose="To determine mineral content.">
                    <p>The sample is incinerated at 825 ± 25°C until all carbon is removed. For fixed ash, magnesium acetate is added before incineration to retain all phosphorus.</p>
                </Procedure>
                <Procedure title="Determination of Free Acidity & pH" purpose="To determine acidity.">
                    <p>An aqueous extract of the sample is titrated with 0.1N NaOH (for free acidity) or measured with a pH meter (for pH).</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

const WheyPowderContent = () => (
    <div className="prose prose-sm max-w-none break-words">
        <InfoCard>
            <SectionTitle id="whey-powder-analysis">Analysis of Whey Powder</SectionTitle>
            <Accordion type="single" collapsible className="w-full">
                <Procedure title="Determination of Moisture" purpose="To determine water content.">
                    <p>Follow the procedure for Milk Powder.</p>
                </Procedure>
                <Procedure title="Determination of Fat" purpose="To determine fat content.">
                    <p>Follow the Rose-Gottlieb method as for Milk Powder.</p>
                </Procedure>
                <Procedure title="Determination of Protein" purpose="To determine protein content.">
                    <p>Follow the Kjeldahl method as for milk powder, using a conversion factor of 6.38.</p>
                </Procedure>
                <Procedure title="Determination of Total Ash" purpose="To determine mineral content.">
                    <p>Follow the procedure for Milk Powder.</p>
                </Procedure>
                <Procedure title="Determination of pH" purpose="To determine pH.">
                    <p>Prepare a 10% reconstituted solution of the whey powder and measure the pH using a calibrated pH meter.</p>
                </Procedure>
                <Procedure title="Determination of Lactose" purpose="To determine lactose content.">
                    <p>Determine the reducing sugars using the Lane-Eynon method (as for condensed milk) and calculate as anhydrous lactose.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);

    