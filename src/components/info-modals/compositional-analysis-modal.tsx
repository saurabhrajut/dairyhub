
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
            <SectionTitle id="milk-fat">Determination of Fat in Milk</SectionTitle>
             <Accordion type="single" collapsible className="w-full">
                <Procedure 
                    title="Gerber Method"
                    purpose="A routine screening test for fat content using acid digestion and centrifugation."
                    reference="IS 1479 (Part I) 1961 (Reaffirmed 2003)"
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>The milk is mixed with sulphuric acid and iso-amyl alcohol in a special Gerber tube (butyrometer). The acid dissolves the protein and other solids, releasing the fat. The iso-amyl alcohol helps in a clear separation of the fat layer. The tubes are centrifuged, and the fat, being lighter, rises into the calibrated stem of the butyrometer, where its percentage is directly read.</p>
                    <h4 className="font-semibold mt-4 mb-2">Why 10.75 ml of Milk is Taken in Gerber Method?</h4>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                      <li>1% mark on the butyrometer is equivalent to 0.125 ml volume.</li>
                      <li>Density of milk fat is 0.9 g/ml.</li>
                      <li>Mass of 1% fat = 0.125 ml × 0.9 g/ml = 0.1125 g.</li>
                      <li>Therefore, for 100% fat, 11.25 g of milk should be taken.</li>
                      <li>However, due to impurities in amyl alcohol, the fat reading is 2.5-3% higher.</li>
                      <li>So, the actual amount of milk should be slightly less, about 10.95 g.</li>
                      <li>The volume of 10.95 g of milk (at a density of 1.028) is approximately 10.65 ml.</li>
                      <li>About 0.1 ml of milk adheres to the pipette.</li>
                      <li>Hence, the total volume taken is 10.65 ml + 0.1 ml = 10.75 ml.</li>
                    </ul>
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
                    title="Rose-Gottlieb Method (Reference Method)"
                    purpose="A highly accurate reference method for fat determination using solvent extraction."
                    reference="A.O.A.C 17th edn, 2000 Official method 905.02"
                >
                     <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                     <p>Protein is dissolved with ammonia, and ethanol is added to help precipitate the proteins. Fat is then extracted using a mixture of diethyl ether and petroleum ether. The solvent is evaporated, and the remaining fat is weighed.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                     <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh accurately about 10 g of milk into a Mojonnier fat extraction flask.</li>
                        <li>Add 1.25 ml of ammonia solution and mix well.</li>
                        <li>Add 10 ml of ethyl alcohol, and mix again.</li>
                        <li>Add 25 ml of diethyl ether, stopper, and shake vigorously for 1 minute.</li>
                        <li>Add 25 ml of petroleum ether and shake again for 30 seconds.</li>
                        <li>Allow layers to separate (or centrifuge at low speed).</li>
                        <li>Decant the top ether layer into a pre-weighed flask.</li>
                        <li>Repeat the extraction twice more with 15 ml of each ether.</li>
                        <li>Evaporate the solvents completely from the collection flask.</li>
                        <li>Dry the flask in an oven at 102 ± 2°C, cool, and weigh to determine the mass of the fat. A blank determination with reagents is also performed.</li>
                    </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>Fat % (w/w) = (Weight of extracted fat / Weight of milk) x 100</code></pre>
                </Procedure>
                <Procedure 
                    title="Werner-Schmidt Method (Acid Digestion)"
                    purpose="An acid digestion method suitable for soured or preserved milk."
                    reference="Pearson’s Composition and analysis of foods, 9th edn, 1991 page 538"
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                     <p>Concentrated HCl digests the protein, freeing the fat, which is then extracted with ethers. This method is not suitable if the sample contains added sugar.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh ~10 g of milk into a small beaker.</li>
                        <li>Add 10 ml of concentrated HCl and heat until the contents turn dark brown.</li>
                        <li>Cool and transfer to an extraction flask.</li>
                        <li>Add 10 ml of ethyl alcohol, then proceed with diethyl ether and petroleum ether extraction as in the Rose-Gottlieb method.</li>
                        <li>Evaporate the solvent and weigh the extracted fat.</li>
                    </ol>
                </Procedure>
             </Accordion>
        </InfoCard>

         <InfoCard>
             <SectionTitle id="milk-misc">Other Quality Tests for Liquid Milk</SectionTitle>
             <Accordion type="single" collapsible className="w-full">
                <Procedure title="Methylene Blue Reduction Test (MBRT)" purpose="To assess the microbiological quality of raw milk.">
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>Methylene blue is a redox indicator that is blue in its oxidized state and becomes colorless when reduced. Bacteria in milk consume oxygen and lower the oxidation-reduction potential, causing the dye to lose its color. The faster the color disappears, the higher the bacterial load, and thus the poorer the milk quality.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Take 10 ml of milk sample in a sterile test tube.</li>
                        <li>Add 1 ml of Methylene Blue solution.</li>
                        <li>Stopper the tube and gently invert to mix.</li>
                        <li>Place the test tube in a water bath maintained at 37°C.</li>
                        <li>Check the tube every half hour and note the time when the blue color completely disappears.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Interpretation:</h4>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                        <li>More than 8 hours: Excellent quality</li>
                        <li>6 to 8 hours: Good quality</li>
                        <li>2 to 6 hours: Fair quality</li>
                        <li>Less than 2 hours: Poor quality</li>
                    </ul>
                </Procedure>
                <Procedure 
                    title="Alkaline Phosphatase Test"
                    purpose="To check the efficiency of pasteurization."
                    reference="IS 1479 (Part II) 1961 (Reaffirmed 1997)"
                >
                     <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                     <p>The enzyme alkaline phosphatase is naturally present in raw milk and is destroyed at a temperature just above that required to kill pathogenic bacteria. A negative test indicates proper pasteurization. The test uses a buffer-substrate solution (disodium p-nitrophenyl phosphate). If the enzyme is active, it liberates p-nitrophenol, which gives an intense yellow color under alkaline conditions.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                     <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Pipette 5 ml of buffer-substrate solution into a test tube and bring to 37°C.</li>
                        <li>Add 1 ml of the test milk, shake, and incubate at 37°C for 2 hours.</li>
                        <li>Run a blank with boiled milk alongside.</li>
                        <li>After incubation, compare the color with standard discs in a Lovibond comparator.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Interpretation:</h4>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                       <li>Disk Reading 0–3: Properly pasteurized</li>
                       <li>Disk Reading 2–6: Doubtful</li>
                       <li>Disk Reading 10 and above: Under-pasteurized</li>
                    </ul>
                </Procedure>
                <Procedure 
                    title="Ash Content"
                    purpose="To determine the mineral content of milk."
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>Ash is the inorganic residue remaining after the incineration of organic matter from milk at 500-550°C. It represents the mineral content of the milk.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Weigh an empty silica crucible (Weight W).</li>
                        <li>Weigh 5 g of milk sample into the crucible (Weight W1).</li>
                        <li>Dry the sample on a hot plate.</li>
                        <li>Place the crucible in a muffle furnace at 550°C for 4 hours or until the ash is carbon-free.</li>
                        <li>Cool the crucible in a desiccator.</li>
                        <li>Weigh the crucible with ash (Weight W2).</li>
                        <li>Repeat heating and cooling until a constant weight is achieved.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>% Ash = [ (W2 - W) / (W1 - W) ] * 100</code></pre>
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
                <Procedure 
                    title="Protein Content (Kjeldahl Method)"
                    purpose="The standard reference method for determining the total nitrogen content, which is then converted to crude protein content."
                    reference="IDF 20B: 1993; A.O.A.C 17th edn, 2000 Official Method 991.23"
                >
                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                    <p>The Kjeldahl method is the most widely used for determining protein content. In this method, the nitrogen in the protein is first converted to ammonium sulfate using concentrated sulfuric acid. Then, ammonia gas is released from this and titrated to determine the amount of nitrogen. This amount of nitrogen is multiplied by a factor (6.38 for milk) to calculate the crude protein content.</p>
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                     <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li><strong>Digestion:</strong> Weigh 5 g of milk in a clean Kjeldahl flask. Add 25 ml concentrated sulfuric acid, 0.2 g copper sulfate, and 10 g potassium sulfate (catalyst mixture). Heat the flask gently until the contents are clear. Continue digestion for 2 more hours.</li>
                        <li><strong>Dilution:</strong> Let the liquid cool and dilute with 300-500 ml distilled water.</li>
                        <li><strong>Neutralization & Distillation:</strong> Fit the digestion assembly. Add 75 ml of 50% NaOH. Connect the flask to the distillation assembly whose tip is dipped in 50 ml boric acid solution (with indicator). Start heating. Stop distillation when the distillate reaches 150 ml.</li>
                        <li><strong>Titration:</strong> Titrate the boric acid solution, which has trapped the ammonia, with std. HCl solution (0.1 N) until a pink color appears. Note the reading. Also, perform a blank test.</li>
                     </ol>
                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                     <pre><code>% Total Nitrogen = [ 1.4007 * (Vs - Vb) * N ] / W</code></pre><br/>
                     <pre><code>% Crude Protein = % Nitrogen * 6.38</code></pre>
                     <p className="text-xs">Vs=Sample Titre, Vb=Blank Titre, N=Normality of HCl, W=Weight of sample</p>
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
                    title="Determination of Fat in Cream"
                    purpose="To determine the fat content in cream, which is its primary commercial value."
                    reference="IS 3509-1966"
                >
                    <p>Use either the <strong>Rose-Gottlieb</strong> or <strong>Werner-Schmidt</strong> method. Weigh accurately 1-2g of cream, disperse it in 9ml of 0.5% NaCl solution (for Rose-Gottlieb) or dissolve it in 10ml concentrated HCl (for Werner-Schmidt), and then proceed with the respective extraction method as described for liquid milk.</p>
                </Procedure>
               <Procedure 
                    title="Detection of Thickeners in Cream"
                    purpose="To detect illegal additives like starch or gelatine used to artificially thicken cream."
                    reference="A.O.A.C. Official method 920.106"
                >
                  <p><strong>Starch:</strong> Detected by adding Iodine solution. A blue color indicates the presence of starch.</p>
                  <p className="mt-2"><strong>Gelatine:</strong> Detected by Stokes Test. Mix 10ml cream, 20ml water, and 20ml of Stokes reagent (acid mercuric nitrate). To the filtrate, add saturated picric acid. A yellow precipitate indicates gelatine.</p>
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
                    <p>Weigh 1g of sample into a pre-weighed dish. Dry in a hot air oven at 102 ± 2°C for 2 hours. Cool in a desiccator and weigh. Repeat heating for 1-hour intervals until a constant weight is achieved.</p>
                </Procedure>
                <Procedure 
                    title="Determination of Fat"
                    purpose="To determine the fat content in cream powder."
                    reference="A.O.A.C 932.06"
                >
                    <p>Weigh ~1g of powder, reconstitute it with 10ml warm water, add 1.25ml ammonia solution, and then extract the fat using the Rose-Gottlieb method as for liquid milk.</p>
                </Procedure>
                <Procedure 
                    title="Determination of Milk Protein"
                    purpose="To determine the protein content using the Kjeldahl method."
                    reference="A.O.A.C 991.23, 991.20, 991.21"
                >
                    <p>Determine Total Nitrogen and Non-Protein Nitrogen (NPN) separately using the Kjeldahl method. True milk protein is calculated by subtracting NPN from Total Nitrogen and multiplying the result by the factor 6.38.</p>
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
                        <li>Weigh 3-4 g of prepared butter sample into a pre-weighed flat-bottomed dish.</li>
                        <li>Heat the dish on a boiling water-bath for ~20 min, stirring frequently.</li>
                        <li>Transfer to a hot air oven at 100 ± 1°C and dry to a constant weight.</li>
                        <li>The loss in weight represents the moisture content.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>Moisture % = (Initial Weight - Final Weight) / Initial Weight * 100</code></pre>
                </Procedure>
               <Procedure 
                    title="Determination of Fat and Curd (MSNF)"
                    purpose="To determine fat and non-fat solids content."
                    reference="IS 3507 – 1966"
                >
                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                        <li>Use the residue from the moisture determination.</li>
                        <li>Extract the fat by repeatedly washing the residue with a fat solvent (petroleum ether).</li>
                        <li>The remaining residue after extraction is dried and weighed. This gives the weight of Curd + Salt.</li>
                        <li>To find the curd content, the salt content must be determined separately and subtracted from the Curd + Salt value.</li>
                    </ol>
                    <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                    <pre><code>Fat % = 100 - (%Moisture + %Curd&Salt)</code></pre>
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
                    title="Fatty Acid Composition (GLC)"
                    purpose="Determines the detailed fatty acid profile to check for authenticity and detect adulteration."
                >
                    <p>This is an advanced instrumental method. The fatty acids in the ghee are converted to their volatile methyl esters (FAMEs). These FAMEs are then separated and quantified using a Gas-Liquid Chromatograph (GLC) with a Flame Ionization Detector (FID). The resulting profile is compared to standard milk fat profiles.</p>
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
                    <p>Follow the procedure for Dahi (Section 4.4). For Shrikhand, determine sucrose content separately and subtract it from the total solids to get milk solids.</p>
                </Procedure>
                <Procedure title="Determination of Fat" purpose="To determine fat content.">
                    <p>Follow the procedure for Chhanna/Paneer (Section 5.3).</p>
                </Procedure>
                <Procedure title="Determination of Protein" purpose="To determine protein content.">
                    <p>Follow the procedure for Ice Cream (Section 7.5).</p>
                </Procedure>
                <Procedure title="Determination of Titratable Acidity" purpose="To determine acidity.">
                    <p>Follow the procedure for Condensed Milk (Section 9.5).</p>
                </Procedure>
                <Procedure title="Determination of Total Ash" purpose="To determine mineral content.">
                    <p>Follow the procedure for Milk Powder (Section 10.7).</p>
                </Procedure>
                <Procedure title="Determination of Sucrose Content" purpose="To determine added sugar.">
                    <p>Follow the procedure for Condensed Milk (Section 9.4).</p>
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
                    <p>Follow the procedure for Channa/Paneer (Section 5.2).</p>
                </Procedure>
                <Procedure title="Determination of Fat" purpose="To determine fat content.">
                    <p>If the sample contains added sugar, use the Rose-Gottlieb method (Section 1.3.4.2). If no sugar is present, the Werner-Schmidt acid digestion method (Section 5.3) can be used.</p>
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
                      <li>Weigh a clean, dry, empty dish (Weight W).</li>
                      <li>Weigh 1 g of sample into it and weigh again (Weight W1).</li>
                      <li>Dry the dish in a hot air oven at 102 ± 2°C for 2 hours.</li>
                      <li>Cool the dish in a desiccator to room temperature.</li>
                      <li>Weigh the dish and note the weight (Weight W2).</li>
                      <li>Repeat heating and cooling until a constant weight is obtained.</li>
                   </ol>
                   <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                   <pre><code>% Total Solids = [ (W2 - W) / (W1 - W) ] * 100</code></pre>
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
                    <p>Follow the procedure for Milk Powder (Section 10.2).</p>
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
                    <p>Follow the procedure for Milk Powder (Section 10.2).</p>
                </Procedure>
                <Procedure title="Determination of Fat" purpose="To determine fat content.">
                    <p>Follow the procedure for Milk Powder (Section 10.3).</p>
                </Procedure>
                <Procedure title="Determination of Protein" purpose="To determine protein content.">
                    <p>Follow the Kjeldahl method as for milk powder, using a conversion factor of 6.38.</p>
                </Procedure>
                <Procedure title="Determination of Total Ash" purpose="To determine mineral content.">
                    <p>Follow the procedure for Milk Powder (Section 10.7).</p>
                </Procedure>
                <Procedure title="Determination of pH" purpose="To determine pH.">
                    <p>Prepare a 10% reconstituted solution of the whey powder and measure the pH using a calibrated pH meter.</p>
                </Procedure>
                <Procedure title="Determination of Lactose" purpose="To determine lactose content.">
                    <p>Determine the reducing sugars using the Lane-Eynon method (as for condensed milk, Section 9.4) and calculate as anhydrous lactose.</p>
                </Procedure>
            </Accordion>
        </InfoCard>
    </div>
);
