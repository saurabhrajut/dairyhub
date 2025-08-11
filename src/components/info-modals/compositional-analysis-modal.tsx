
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


const InfoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-card p-6 rounded-xl shadow-sm border mt-6 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-semibold mb-2 text-primary scroll-mt-24">
        {children}
    </h3>
);

const ProcedureList = ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside space-y-2 mt-2">{children}</ol>
);

const ReagentList = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-2 space-y-1 text-sm">{children}</div>
);

const CalculationBox = ({ children }: { children: React.ReactNode }) => (
     <div className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm text-primary-foreground bg-gray-800 overflow-x-auto">
        <h4 className="font-sans font-bold text-base text-white mb-2">Calculation</h4>
        <code>{children}</code>
    </div>
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
                    <TabsTrigger value="cheese-paneer">Cheese/Paneer</TabsTrigger>
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
                            <Tabs defaultValue="gerber" className="w-full mt-4">
                                <TabsList>
                                    <TabsTrigger value="gerber">Gerber Method</TabsTrigger>
                                    <TabsTrigger value="rose-gottlieb">Rose-Gottlieb Method</TabsTrigger>
                                    <TabsTrigger value="werner-schmidt">Werner-Schmidt Method</TabsTrigger>
                                </TabsList>
                                <TabsContent value="gerber">
                                    <p className="mt-4"><strong>Purpose:</strong> A routine screening test for fat content. The milk is mixed with sulphuric acid and iso-amyl alcohol in a Gerber tube. The acid dissolves the protein, releasing the fat which is then measured after centrifugation.</p>
                                    <p><strong>Ref:</strong> IS 1479 (Part I) 1961 (Reaffirmed 2003)</p>
                                    <h4 className="font-semibold mt-4 mb-2">Reagents/Apparatus:</h4>
                                    <ReagentList>
                                        <p><strong>A. Sulphuric acid:</strong> 90-91% concentration, density 1.807-1.812 g/ml at 27°C.</p>
                                        <p><strong>B. Amyl alcohol:</strong> Furfural-free, density 0.808-0.818 g/ml at 27°C.</p>
                                        <p><strong>C. Gerber Butyrometers:</strong> ISI marked, appropriate range (e.g., 0-10%).</p>
                                        <p><strong>D. Pipettes:</strong> 10.75 ml for milk, 10 ml for acid, 1 ml for amyl alcohol.</p>
                                        <p><strong>E. Water Bath:</strong> Maintained at 65 ± 2°C.</p>
                                        <p><strong>F. Gerber Centrifuge:</strong> Capable of 1100-1200 rpm.</p>
                                    </ReagentList>
                                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                                    <ProcedureList>
                                        <li>Measure 10 ml of sulphuric acid into a butyrometer tube without wetting the neck.</li>
                                        <li>Pipette 10.75 ml of well-mixed milk into the butyrometer along the side wall.</li>
                                        <li>Add 1 ml of Amyl alcohol.</li>
                                        <li>Close with a lock stopper, shake until homogeneous, and invert for complete mixing.</li>
                                        <li>Place in a water bath at 65±2°C for 5 minutes.</li>
                                        <li>Centrifuge for 4-5 minutes at 1100-1200 rpm.</li>
                                        <li>Place back in the water bath for 5 minutes.</li>
                                        <li>Read the percentage of fat from the calibrated stem.</li>
                                    </ProcedureList>
                                </TabsContent>
                                <TabsContent value="rose-gottlieb">
                                    <p className="mt-4"><strong>Purpose:</strong> A highly accurate reference method. Protein is dissolved with ammonia, and fat is extracted using a mix of diethyl ether and petroleum ether. The solvent is evaporated, and the remaining fat is weighed.</p>
                                     <p><strong>Ref:</strong> A.O.A.C 17th edn, 2000 Official method 905.02</p>
                                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                                     <ProcedureList>
                                        <li>Weigh ~10 g of milk into a Mojonnier fat extraction flask.</li>
                                        <li>Add 1.25 ml of ammonia solution, mix well.</li>
                                        <li>Add 10 ml of ethyl alcohol, mix again.</li>
                                        <li>Add 25 ml of diethyl ether, stopper, and shake vigorously for 1 minute.</li>
                                        <li>Add 25 ml of petroleum ether and shake again for 30 seconds.</li>
                                        <li>Allow layers to separate (or centrifuge at low speed).</li>
                                        <li>Decant the top ether layer into a pre-weighed flask.</li>
                                        <li>Repeat the extraction twice with 15 ml of each ether.</li>
                                        <li>Evaporate the solvents completely from the collection flask.</li>
                                        <li>Dry the flask in an oven at 102 ± 2°C, cool, and weigh to determine the mass of the fat.</li>
                                    </ProcedureList>
                                </TabsContent>
                                <TabsContent value="werner-schmidt">
                                    <p className="mt-4"><strong>Purpose:</strong> An acid digestion method suitable for soured or preserved milk. Concentrated HCl digests the protein, after which fat is extracted with ethers.</p>
                                    <p><strong>Ref:</strong> Pearson’s Composition and analysis of foods, 9th edn, 1991 page 538</p>
                                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                                    <ProcedureList>
                                        <li>Weigh ~10 g of milk into a beaker.</li>
                                        <li>Add 10 ml of concentrated HCl and heat until the contents turn dark brown.</li>
                                        <li>Cool and transfer to an extraction flask.</li>
                                        <li>Add 10 ml of ethyl alcohol, then proceed with diethyl ether and petroleum ether extraction as in the Rose-Gottlieb method.</li>
                                        <li>Evaporate the solvent and weigh the extracted fat.</li>
                                    </ProcedureList>
                                    <Alert variant="destructive" className="mt-4"><AlertDescription>Note: This method is not suitable if the sample contains added sugar.</AlertDescription></Alert>
                                </TabsContent>
                            </Tabs>
                        </InfoCard>

                        <InfoCard>
                            <SectionTitle id="milk-protein">Determination of Protein in Milk (Kjeldahl Method)</SectionTitle>
                             <p><strong>Purpose:</strong> The Kjeldahl method is the standard reference method for determining the total nitrogen content in a sample. This nitrogen value is then multiplied by a factor (6.38 for milk) to calculate the crude protein content.</p>
                            <p><strong>Ref:</strong> IDF 20B: 1993; A.O.A.C 17th edn, 2000 Official Method 991.23</p>
                            <h4 className="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>The method involves three steps:</p>
                            <ProcedureList>
                                <li><strong>Digestion:</strong> The sample is heated with concentrated sulfuric acid and a catalyst (copper sulfate, potassium sulfate). This converts the organic nitrogen into ammonium sulfate.</li>
                                <li><strong>Distillation:</strong> The digested sample is made alkaline with NaOH to liberate ammonia gas, which is then distilled and trapped in a boric acid solution.</li>
                                <li><strong>Titration:</strong> The trapped ammonia is titrated with a standard acid (HCl). The amount of acid used is proportional to the nitrogen in the original sample.</li>
                            </ProcedureList>
                             <CalculationBox>
                                % Total Nitrogen = [1.4007 * (V_sample - V_blank) * N_acid] / W_sample
                                <br />
                                % Crude Protein = % Nitrogen * 6.38
                            </CalculationBox>
                        </InfoCard>

                        <InfoCard>
                             <SectionTitle id="milk-misc">Other Tests for Liquid Milk</SectionTitle>
                             <Tabs defaultValue="phosphatase" className="w-full mt-4">
                                <TabsList>
                                    <TabsTrigger value="phosphatase">Alkaline Phosphatase Test</TabsTrigger>
                                    <TabsTrigger value="turbidity">Turbidity Test</TabsTrigger>
                                </TabsList>
                                <TabsContent value="phosphatase">
                                    <p className="mt-4"><strong>Purpose:</strong> To check the efficiency of pasteurization. The enzyme alkaline phosphatase is naturally present in raw milk and is destroyed at a temperature just above that required to kill pathogenic bacteria. A negative test indicates proper pasteurization.</p>
                                    <p><strong>Ref:</strong> IS 1479 (Part II) 1961 (Reaffirmed 1997)</p>
                                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                                     <ProcedureList>
                                        <li>A buffer-substrate solution (disodium p-nitrophenyl phosphate) is incubated with the milk sample at 37°C.</li>
                                        <li>If the enzyme is active, it liberates p-nitrophenol, which gives an intense yellow color under alkaline conditions.</li>
                                        <li>The color intensity is measured using a Lovibond comparator and compared to standards.</li>
                                    </ProcedureList>
                                </TabsContent>
                                <TabsContent value="turbidity">
                                     <p className="mt-4"><strong>Purpose:</strong> To check the efficiency of sterilization. This test is not suitable for UHT milk.</p>
                                     <p><strong>Principle:</strong> Proper sterilization denatures all whey proteins, including albumin. If sterilization is incomplete, albumin remains soluble and will cause turbidity upon heating the filtrate.</p>
                                    <p><strong>Ref:</strong> IS 1479 (Part II) 1961 (Reaffirmed 1997)</p>
                                    <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                                     <ProcedureList>
                                        <li>Milk is treated with ammonium sulfate to precipitate casein.</li>
                                        <li>The mixture is filtered.</li>
                                        <li>The clear filtrate is heated in a boiling water bath.</li>
                                        <li>If the filtrate remains clear, the milk is properly sterilized. If it becomes turbid, sterilization was inefficient.</li>
                                    </ProcedureList>
                                </TabsContent>
                             </Tabs>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="cream">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                             <SectionTitle id="cream-fat">Determination of Fat in Cream</SectionTitle>
                             <p><strong>Ref:</strong> IS 3509- 1966</p>
                             <p className="mt-2">Use either the Rose-Gottlieb or Werner-Schmidt method. Weigh accurately 1-2g of cream, disperse it in 9ml of 0.5% NaCl solution (for Rose-Gottlieb) or dissolve it in 10ml concentrated HCl (for Werner-Schmidt), and then proceed with the respective extraction method as described for liquid milk.</p>
                        </InfoCard>
                        <InfoCard>
                             <SectionTitle id="cream-thickeners">Detection of Thickeners in Cream</SectionTitle>
                              <p className="mt-2"><strong>Starch:</strong> Detected by adding Iodine solution. A blue color indicates the presence of starch.</p>
                              <p className="mt-2"><strong>Gelatine:</strong> Detected by Stokes Test. Mix 10ml cream, 20ml water, and 20ml of Stokes reagent (acid mercuric nitrate). To the filtrate, add saturated picric acid. A yellow precipitate indicates gelatine.</p>
                              <p><strong>Ref:</strong> A.O.A.C. Official method 920.106</p>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="butter">
                     <div className="prose prose-sm max-w-none break-words">
                         <InfoCard>
                            <SectionTitle id="butter-moisture">Determination of Moisture in Butter</SectionTitle>
                            <p><strong>Ref:</strong> IS 3507 – 1966; A.O.A.C 920.116</p>
                             <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                             <ProcedureList>
                                 <li>Weigh 3-4 g of prepared butter sample into a pre-weighed flat-bottomed dish.</li>
                                 <li>Heat the dish on a boiling water-bath for ~20 min, stirring frequently.</li>
                                 <li>Transfer to a hot air oven at 100 ± 1°C and dry to a constant weight.</li>
                                 <li>The loss in weight represents the moisture content.</li>
                             </ProcedureList>
                         </InfoCard>
                         <InfoCard>
                            <SectionTitle id="butter-fat-curd">Determination of Fat and Curd (MSNF)</SectionTitle>
                            <p><strong>Ref:</strong> IS 3507 – 1966</p>
                            <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ProcedureList>
                                <li>Use the residue from the moisture determination.</li>
                                <li>Extract the fat by repeatedly washing the residue with a fat solvent (petroleum ether).</li>
                                <li>The remaining residue after extraction is dried and weighed. This gives the weight of Curd + Salt.</li>
                                <li>Fat percentage is calculated by difference: 100 - (%Moisture + %Curd&Salt).</li>
                                <li>To find the curd content, the salt content must be determined separately and subtracted from the Curd + Salt value.</li>
                            </ProcedureList>
                         </InfoCard>
                          <InfoCard>
                            <SectionTitle id="butter-salt">Determination of Salt (NaCl)</SectionTitle>
                             <p><strong>Ref:</strong> IS 3507 – 1966</p>
                             <p className="mt-2">Use Mohr's Method. Weigh 5g of butter, add 100ml boiling water, cool to 50-55°C. Add potassium chromate indicator and titrate with standard silver nitrate (AgNO₃) solution until a brownish color persists.</p>
                         </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="ghee-butter-oil">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="ghee-rm-pv">Reichert-Meissel (RM) & Polenske Value (PV)</SectionTitle>
                             <p><strong>Purpose:</strong> These values are crucial for checking the purity of ghee. The RM value measures short-chain water-soluble fatty acids (like butyric acid), which are characteristic of milk fat. The PV value measures water-insoluble volatile acids, which can indicate adulteration with coconut oil.</p>
                             <p><strong>Ref:</strong> IS 3508 – 1966</p>
                            <h4 className="font-semibold mt-4 mb-2">Procedure:</h4>
                             <ProcedureList>
                                <li><strong>Saponification:</strong> 5g of ghee is saponified (turned into soap) using glycerol and NaOH.</li>
                                <li><strong>Distillation:</strong> The soap is acidified, and the volatile fatty acids are steam-distilled.</li>
                                <li><strong>Titration (RM Value):</strong> The water-soluble part of the distillate is titrated with 0.1 N NaOH.</li>
                                <li><strong>Titration (PV Value):</strong> The water-insoluble part is dissolved in alcohol and then titrated.</li>
                             </ProcedureList>
                              <CalculationBox>
                                RM Value = 1.10 * (T1 – T2)
                                <br/>
                                Polenske Value = T3 – T4
                            </CalculationBox>
                        </InfoCard>
                        <InfoCard>
                            <SectionTitle id="ghee-br">Butyro-Refractometer (BR) Reading</SectionTitle>
                             <p><strong>Purpose:</strong> A rapid test to detect adulteration with vegetable oils and fats, which generally have a higher BR reading than pure ghee.</p>
                             <p><strong>Ref:</strong> IS 3508 – 1966</p>
                             <p>The reading is taken at 40°C. Pure ghee typically has a BR reading between 40-43. Values outside this range suggest adulteration.</p>
                        </InfoCard>
                         <InfoCard>
                            <SectionTitle id="ghee-ffa">Free Fatty Acids (FFA)</SectionTitle>
                            <p><strong>Purpose:</strong> Measures the extent of fat breakdown (hydrolysis), which indicates the freshness and quality of ghee. High FFA leads to rancidity.</p>
                             <p><strong>Ref:</strong> IS 3508 – 1966</p>
                            <p>The sample is dissolved in hot neutralized alcohol and titrated with standard NaOH solution using phenolphthalein indicator. Acidity is usually expressed as % oleic acid.</p>
                         </InfoCard>
                          <InfoCard>
                            <SectionTitle id="ghee-vanaspati">Baudouin Test for Vanaspati</SectionTitle>
                            <p><strong>Purpose:</strong> Detects vanaspati (hydrogenated vegetable oil) in ghee, based on the mandatory addition of 5% sesame oil to vanaspati.</p>
                             <p><strong>Ref:</strong> IS 3508 – 1966</p>
                             <p>Melted ghee is shaken with concentrated HCl and furfural solution. A pink or red color in the acid layer indicates the presence of vanaspati.</p>
                         </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="cheese-paneer" className="mt-0">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="cheese-moisture">Determination of Moisture</SectionTitle>
                            <p><strong>Ref:</strong> IS 2785 -1979</p>
                             <p>Weigh 3g of grated sample into a pre-weighed dish containing about 20g of dried sand. Mix well, dry on a water bath, and then dry to a constant weight in a hot air oven at 102 ± 1°C. The loss in weight is the moisture content.</p>
                        </InfoCard>
                        <InfoCard>
                            <SectionTitle id="cheese-fat">Determination of Fat (Acid Digestion)</SectionTitle>
                            <p><strong>Ref:</strong> IS 2785 -1979</p>
                            <p>Weigh 1-2g of prepared sample, dissolve it in concentrated HCl by heating. Cool the solution and then perform fat extraction using the Werner-Schmidt method (as described for liquid milk).</p>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="dahi-yoghurt" className="mt-0">
                    <div className="prose prose-sm max-w-none break-words">
                         <InfoCard>
                            <SectionTitle id="dahi-solids">Determination of Total Solids</SectionTitle>
                             <p><strong>Purpose:</strong> Since dahi is acidic, the acidity must be neutralized before determining total solids to prevent loss of volatile acids during drying.</p>
                             <p><strong>Ref:</strong> IS 12333 – 1997 / I.S.O 6731-1989</p>
                             <p>Weigh 4-5g of sample, neutralize with 0.1 N NaOH using phenolphthalein indicator. Evaporate on a water bath and then dry in an oven at 100 ± 2°C to a constant weight. The weight of added alkali is subtracted from the final residue.</p>
                        </InfoCard>
                        <InfoCard>
                            <SectionTitle id="dahi-fat">Determination of Fat</SectionTitle>
                             <p>Use the Rose-Gottlieb method as described for liquid milk. (See Section 1.3.4.2).</p>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="ice-cream" className="mt-0">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="icecream-fat">Determination of Fat</SectionTitle>
                            <p><strong>Ref:</strong> Pearson’s Composition and analysis of foods 9th edn, 1991 page 604</p>
                            <p>Use the Rose-Gottlieb method. Weigh 4-5g of melted and mixed ice cream sample. Dilute with water, add ammonia, and heat at 60°C for 20 min. Cool and then proceed with the standard ether extraction.</p>
                        </InfoCard>
                        <InfoCard>
                            <SectionTitle id="icecream-overrun">Determination of Weight per Unit Volume or Overrun</SectionTitle>
                            <p><strong>Purpose:</strong> Overrun is the percentage increase in the volume of ice cream over the volume of the mix, due to the incorporation of air during freezing.</p>
                            <p><strong>Ref:</strong> IS:2802: 1964</p>
                            <p>It is calculated by comparing the weight of a fixed volume of ice cream mix with the weight of the same volume of the finished frozen ice cream.</p>
                            <CalculationBox>
                                % Overrun = [ (Weight of mix - Weight of ice cream) / Weight of ice cream ] * 100
                            </CalculationBox>
                        </InfoCard>
                         <InfoCard>
                            <SectionTitle id="icecream-protein">Determination of Protein</SectionTitle>
                            <p>Use the Kjeldahl method as described for liquid milk. Use about 5-8g of sample.</p>
                             <CalculationBox>
                                % Milk Protein (in Dairy Ice Cream) = % Nitrogen * 6.38
                                <br />
                                % Total Protein (in Frozen Dessert) = % Nitrogen * 6.25
                            </CalculationBox>
                         </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="condensed-milk" className="mt-0">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="condensed-solids">Determination of Total Solids</SectionTitle>
                            <p><strong>Ref:</strong> IS 12333 – 1997 / ISO 6731 -1989</p>
                             <p>Weigh ~2g of sample into a dish with sand. Add 5ml water and mix to a paste. Dry on a water bath for 30 mins, then dry in an oven at 102 ± 2°C to constant weight.</p>
                        </InfoCard>
                         <InfoCard>
                            <SectionTitle id="condensed-sucrose">Determination of Sucrose</SectionTitle>
                             <p><strong>Purpose:</strong> To measure the amount of added sugar, a key component in sweetened condensed milk.</p>
                            <p><strong>Ref:</strong> IS 4079 – 1967</p>
                            <p>This is typically done using the Lane-Eynon (Volumetric) method or a Polarimetric method. The Lane-Eynon method involves clarifying the sample and determining reducing sugars (lactose) before and after acid inversion (which converts sucrose to reducing sugars). The difference gives the sucrose content.</p>
                        </InfoCard>
                    </div>
                 </TabsContent>
                 <TabsContent value="milk-powder" className="mt-0">
                    <div className="prose prose-sm max-w-none break-words">
                        <InfoCard>
                            <SectionTitle id="powder-moisture">Determination of Moisture</SectionTitle>
                             <p><strong>Ref:</strong> IS 16072 : 2012</p>
                             <p>Weigh ~1g of powder into a pre-weighed dish. Dry in a hot air oven at 102 ± 2°C for 2 hours, then for 1-hour intervals until a constant weight is achieved. The loss in weight is the moisture content.</p>
                        </InfoCard>
                        <InfoCard>
                             <SectionTitle id="powder-fat">Determination of Fat</SectionTitle>
                             <p><strong>Ref:</strong> A.O.A.C 17th edn, 2000 Official method 932.06</p>
                            <p>Weigh ~1g of powder, reconstitute it with 10ml warm water, add ammonia, and then extract the fat using the Rose-Gottlieb method.</p>
                        </InfoCard>
                        <InfoCard>
                            <SectionTitle id="powder-solubility">Determination of Solubility Index</SectionTitle>
                            <p><strong>Purpose:</strong> Measures the amount of undissolved powder after reconstitution under standard conditions. A low solubility index indicates good quality powder.</p>
                             <p><strong>Ref:</strong> ISI Hand book of Food Analysis (Part XI) – 1981</p>
                             <p>A standard solution is prepared and centrifuged. The volume of the sediment is measured in a graduated centrifuge tube and reported as the solubility index in ml.</p>
                        </InfoCard>
                    </div>
                 </TabsContent>
            </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}


