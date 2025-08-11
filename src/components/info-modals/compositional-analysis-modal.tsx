
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


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

const Procedure = ({ title, purpose, reference, children }: { title: string, purpose: string, reference: string, children: React.ReactNode }) => (
    <AccordionItem value={title}>
        <AccordionTrigger className="text-left hover:no-underline">
            <div className="flex flex-col text-left">
                <span className="font-bold text-base sm:text-lg">{title}</span>
                <span className="text-xs text-muted-foreground font-normal">{purpose}</span>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none break-words">
                {children}
                <p className="text-xs text-muted-foreground mt-4"><strong>Ref:</strong> {reference}</p>
            </div>
        </AccordionContent>
    </AccordionItem>
);


export function CompositionalAnalysisModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[95vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Compositional Analysis of Dairy Products
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A detailed guide to chemical quality assurance for milk and milk products.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="processed-milk" className="w-full flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-shrink-0">
                <TabsList className="grid w-full h-auto grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
                    <TabsTrigger value="processed-milk">Milk</TabsTrigger>
                    <TabsTrigger value="cream">Cream</TabsTrigger>
                    <TabsTrigger value="butter">Butter</TabsTrigger>
                    <TabsTrigger value="ghee-butter-oil">Ghee</TabsTrigger>
                    <TabsTrigger value="cheese-paneer">Paneer</TabsTrigger>
                    <TabsTrigger value="dahi-yoghurt">Dahi/Yoghurt</TabsTrigger>
                    <TabsTrigger value="ice-cream">Ice Cream</TabsTrigger>
                    <TabsTrigger value="condensed-milk">Condensed Milk</TabsTrigger>
                    <TabsTrigger value="milk-powder">Milk Powder</TabsTrigger>
                </TabsList>
            </ScrollArea>
            <ScrollArea className="flex-1 mt-4 pr-4">
                 <TabsContent value="processed-milk" className="mt-0">
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
                                     <p>Protein is dissolved with ammonia, and ethanol is added to precipitate the proteins. Fat is then extracted using a mixture of diethyl ether and petroleum ether. The solvent is evaporated, and the remaining fat is weighed.</p>
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
                                     <code>Fat % (w/w) = (Weight of extracted fat / Weight of milk) x 100</code>
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
                                        <li>Weigh ~10 g of milk into a beaker.</li>
                                        <li>Add 10 ml of concentrated HCl and heat until the contents turn dark brown.</li>
                                        <li>Cool and transfer to an extraction flask.</li>
                                        <li>Add 10 ml of ethyl alcohol, then proceed with diethyl ether and petroleum ether extraction as in the Rose-Gottlieb method.</li>
                                        <li>Evaporate the solvent and weigh the extracted fat.</li>
                                    </ol>
                                    <Alert variant="destructive" className="mt-4"><AlertDescription>Note: This method is not suitable if the sample contains added sugar.</AlertDescription></Alert>
                                </Procedure>
                             </Accordion>
                        </InfoCard>

                        <InfoCard>
                            <SectionTitle id="milk-protein">Determination of Protein in Milk (Kjeldahl Method)</SectionTitle>
                             <Accordion type="single" collapsible className="w-full">
                                <Procedure 
                                    title="Kjeldahl Method"
                                    purpose="The standard reference method for determining the total nitrogen content, which is then converted to crude protein content."
                                    reference="IDF 20B: 1993; A.O.A.C 17th edn, 2000 Official Method 991.23"
                                >
                                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                                    <p>The method involves three steps:</p>
                                    <ol className="list-decimal list-outside pl-5 space-y-2">
                                        <li><strong>Digestion:</strong> The sample is heated with concentrated sulfuric acid and a catalyst (copper sulfate, potassium sulfate). This converts the organic nitrogen into ammonium sulfate.</li>
                                        <li><strong>Distillation:</strong> The digested sample is made alkaline with NaOH to liberate ammonia gas, which is then distilled and trapped in a boric acid solution.</li>
                                        <li><strong>Titration:</strong> The trapped ammonia is titrated with a standard acid (HCl). The amount of acid used is proportional to the nitrogen in the original sample.</li>
                                    </ol>
                                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                                     <code>% Total Nitrogen = [1.4007 * (V_sample - V_blank) * N_acid] / W_sample</code><br/>
                                     <code>% Crude Protein = % Nitrogen * 6.38</code>
                                </Procedure>
                             </Accordion>
                        </InfoCard>

                        <InfoCard>
                             <SectionTitle id="milk-misc">Other Tests for Liquid Milk</SectionTitle>
                             <Accordion type="single" collapsible className="w-full">
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
                                        <li>After incubation, compare the color with standard discs in a Lovibond comparator. A reading of 10 µg or less of p-nitrophenol/ml of milk is considered satisfactory.</li>
                                    </ol>
                                </Procedure>
                                <Procedure 
                                    title="Turbidity Test"
                                    purpose="To check the efficiency of in-bottle sterilization (not for UHT milk)."
                                    reference="IS 1479 (Part II) 1961 (Reaffirmed 1997)"
                                >
                                    <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                                    <p>Proper sterilization denatures all whey proteins, including albumin. If sterilization is incomplete, soluble albumin remains. When the filtrate of the milk (after casein precipitation) is heated, this remaining albumin will cause turbidity.</p>
                                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                                    <ol className="list-decimal list-outside pl-5 space-y-2">
                                        <li>Pipette 20 ml of milk into a flask, add 4.0g of ammonium sulfate, and shake to dissolve.</li>
                                        <li>Let it stand for 5 mins and filter through a folded filter paper.</li>
                                        <li>Heat about 5 ml of the clear filtrate in a boiling water bath for 5 minutes.</li>
                                        <li>Cool and examine for turbidity. Properly sterilized milk will show no turbidity.</li>
                                    </ol>
                                </Procedure>
                             </Accordion>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="cream">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="cream-analysis">Analysis of Cream</SectionTitle>
                            <Accordion type="single" collapsible className="w-full">
                               <Procedure 
                                    title="Determination of Fat in Cream"
                                    purpose="To determine the fat content in cream, which is its primary commercial value."
                                    reference="IS 3509- 1966"
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
                 </TabsContent>
                 <TabsContent value="butter">
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
                                        <li>Fat percentage is calculated by difference: 100 - (%Moisture + %Curd&Salt).</li>
                                        <li>To find the curd content, the salt content must be determined separately and subtracted from the Curd + Salt value.</li>
                                    </ol>
                                </Procedure>
                               <Procedure 
                                    title="Determination of Salt (NaCl)"
                                    purpose="To measure the salt content, important for flavor and legal standards."
                                    reference="IS 3507 – 1966"
                                >
                                    <p>Use <strong>Mohr's Method</strong>. Weigh 5g of butter, add 100ml boiling water, and cool to 50-55°C. Add potassium chromate indicator and titrate with standard silver nitrate (AgNO₃) solution until a brownish color persists.</p>
                                </Procedure>
                            </Accordion>
                         </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="ghee-butter-oil">
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
                                        <li><strong>Saponification:</strong> 5g of ghee is saponified (turned into soap) using glycerol and NaOH.</li>
                                        <li><strong>Distillation:</strong> The soap is acidified, and the volatile fatty acids are steam-distilled.</li>
                                        <li><strong>Titration (RM Value):</strong> The water-soluble part of the distillate is titrated with 0.1 N NaOH.</li>
                                        <li><strong>Titration (PV Value):</strong> The water-insoluble part is dissolved in alcohol and then titrated.</li>
                                    </ol>
                                </Procedure>
                               <Procedure 
                                    title="Butyro-Refractometer (BR) Reading"
                                    purpose="A rapid test to detect adulteration with vegetable oils and fats."
                                    reference="IS 3508 – 1966"
                                >
                                    <p>The reading of the filtered fat sample is taken at 40°C. Pure ghee typically has a BR reading between 40-43. Values outside this range suggest adulteration.</p>
                                </Procedure>
                               <Procedure 
                                    title="Free Fatty Acids (FFA)"
                                    purpose="Measures the extent of fat breakdown (hydrolysis), which indicates freshness. High FFA leads to rancidity."
                                    reference="IS 3508 – 1966"
                                >
                                    <p>The sample is dissolved in hot neutralized alcohol and titrated with standard NaOH solution using phenolphthalein indicator. Acidity is usually expressed as % oleic acid.</p>
                                </Procedure>
                               <Procedure 
                                    title="Baudouin Test for Vanaspati"
                                    purpose="Detects vanaspati (hydrogenated vegetable oil) in ghee."
                                    reference="IS 3508 – 1966"
                                >
                                    <p>Based on the mandatory addition of 5% sesame oil to vanaspati. Melted ghee is shaken with concentrated HCl and furfural solution. A pink or red color in the acid layer indicates the presence of vanaspati.</p>
                                </Procedure>
                            </Accordion>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="cheese-paneer">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="paneer-analysis">Analysis of Paneer / Cheese</SectionTitle>
                            <Accordion type="single" collapsible className="w-full">
                               <Procedure 
                                    title="Determination of Moisture"
                                    purpose="To measure the water content, affecting texture and shelf life."
                                    reference="IS 2785 -1979"
                                >
                                    <p>Weigh 3g of grated sample into a pre-weighed dish containing about 20g of dried sand. Mix well, dry on a water bath, and then dry to a constant weight in a hot air oven at 102 ± 1°C. The loss in weight is the moisture content.</p>
                                </Procedure>
                               <Procedure 
                                    title="Determination of Fat (Acid Digestion)"
                                    purpose="To determine the fat content on a dry matter basis."
                                    reference="IS 2785 -1979"
                                >
                                    <p>Weigh 1-2g of prepared sample, dissolve it in concentrated HCl by heating. Cool the solution and then perform fat extraction using the Werner-Schmidt method (as described for liquid milk).</p>
                                </Procedure>
                                <Procedure 
                                    title="Detection of Starch in Paneer"
                                    purpose="To detect illegal addition of starch as a filler."
                                    reference="Internal Method"
                                >
                                    <p>Macerate 1g of the paneer sample with 1ml of distilled water in a porcelain dish. Then add a drop of iodine solution. A blue color indicates the presence of starch.</p>
                                </Procedure>
                            </Accordion>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="dahi-yoghurt">
                    <div className="prose prose-sm max-w-none break-words">
                         <InfoCard>
                            <SectionTitle id="dahi-analysis">Analysis of Dahi / Yoghurt</SectionTitle>
                            <Accordion type="single" collapsible className="w-full">
                               <Procedure 
                                    title="Determination of Total Solids"
                                    purpose="To determine total solids content, accounting for developed acidity."
                                    reference="IS 12333 – 1997 / I.S.O 6731-1989"
                                >
                                     <p>Since dahi is acidic, the acidity must be neutralized before determining total solids to prevent loss of volatile acids during drying. Weigh 4-5g of sample, neutralize with 0.1 N NaOH using phenolphthalein indicator. Evaporate on a water bath and then dry in an oven at 100 ± 2°C to a constant weight. The weight of added alkali is subtracted from the final residue.</p>
                                </Procedure>
                               <Procedure 
                                    title="Determination of Fat"
                                    purpose="To measure the fat content."
                                    reference="General"
                                >
                                    <p>Use the Rose-Gottlieb method as described for liquid milk.</p>
                                </Procedure>
                            </Accordion>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="ice-cream">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="icecream-analysis">Analysis of Ice Cream</SectionTitle>
                             <Accordion type="single" collapsible className="w-full">
                               <Procedure 
                                    title="Determination of Fat"
                                    purpose="To determine the fat content, crucial for legal standards and texture."
                                    reference="Pearson’s Composition and analysis of foods 9th edn, 1991 page 604"
                                >
                                    <p>Use the Rose-Gottlieb method. Weigh 4-5g of melted and mixed ice cream sample. Dilute with water, add ammonia, and heat at 60°C for 20 min. Cool and then proceed with the standard ether extraction.</p>
                                </Procedure>
                               <Procedure 
                                    title="Determination of Weight per Unit Volume or Overrun"
                                    purpose="Overrun is the percentage increase in the volume of ice cream over the volume of the mix, due to the incorporation of air during freezing."
                                    reference="IS:2802: 1964"
                                >
                                    <p>It is calculated by comparing the weight of a fixed volume of ice cream mix with the weight of the same volume of the finished frozen ice cream.</p>
                                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                                     <code>% Overrun = [ (Weight of mix - Weight of ice cream) / Weight of ice cream ] * 100</code>
                                </Procedure>
                               <Procedure 
                                    title="Determination of Protein"
                                    purpose="To measure the protein content."
                                    reference="General Kjeldahl"
                                >
                                    <p>Use the Kjeldahl method as described for liquid milk. Use about 5-8g of sample.</p>
                                     <h4 className="font-semibold mt-4 mb-2">Calculation:</h4>
                                     <code>% Milk Protein (in Dairy Ice Cream) = % Nitrogen * 6.38</code><br/>
                                     <code>% Total Protein (in Frozen Dessert) = % Nitrogen * 6.25</code>
                                </Procedure>
                                <Procedure 
                                    title="Determination of Added Starch"
                                    purpose="To detect starch used as a stabilizer or filler."
                                    reference="A.O.A.C 17th edn, 2000, Modified Official method- 925.50"
                                >
                                    <p>The sample is defatted, and starch is precipitated with alcohol. The precipitated starch is then hydrolyzed with acid to convert it into reducing sugars, which are determined by the Lane and Eynon method. The result is multiplied by 0.9 to get the starch content.</p>
                                </Procedure>
                            </Accordion>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="condensed-milk">
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
                                    reference="General (Rose-Gottlieb)"
                                >
                                     <p>Weigh 2-2.5g of sample, reconstitute with warm water and ammonia. Proceed with the Rose-Gottlieb method as for liquid milk.</p>
                                </Procedure>
                                <Procedure 
                                    title="Determination of Sucrose"
                                    purpose="To measure the amount of added sugar, a key component in sweetened condensed milk."
                                    reference="IS 4079 – 1967"
                                >
                                    <p>This is typically done using the <strong>Lane-Eynon (Volumetric) method</strong> or a <strong>Polarimetric method</strong>. The Lane-Eynon method involves clarifying the sample and determining reducing sugars (lactose) before and after acid inversion (which converts sucrose to reducing sugars). The difference gives the sucrose content.</p>
                                </Procedure>
                            </Accordion>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="milk-powder">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="powder-analysis">Analysis of Milk Powder</SectionTitle>
                            <Accordion type="single" collapsible className="w-full">
                                <Procedure 
                                    title="Determination of Moisture"
                                    purpose="To determine the free moisture content, critical for shelf life."
                                    reference="IS 16072 : 2012"
                                >
                                     <p>Weigh ~1g of powder into a pre-weighed dish. Dry in a hot air oven at 102 ± 2°C for 2 hours, then for 1-hour intervals until a constant weight is achieved. The loss in weight is the moisture content.</p>
                                </Procedure>
                               <Procedure 
                                    title="Determination of Fat"
                                    purpose="To measure the fat content."
                                    reference="A.O.A.C 17th edn, 2000 Official method 932.06"
                                >
                                    <p>Weigh ~1g of powder, reconstitute it with 10ml warm water, add ammonia, and then extract the fat using the Rose-Gottlieb method.</p>
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
                            </Accordion>
                        </InfoCard>
                    </div>
                 </TabsContent>
            </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

    