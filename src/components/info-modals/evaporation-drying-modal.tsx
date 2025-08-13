
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        {children}
    </div>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{title}</h3>
        {children}
    </>
);


export function EvaporationDryingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Evaporation & Drying
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A guide to dehydrated dairy products and processes.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-shrink-0">
                <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <TabsTrigger value="intro">Introduction</TabsTrigger>
                    <TabsTrigger value="evaporated-milk">Evaporated Milk</TabsTrigger>
                    <TabsTrigger value="milk-powder">Milk Powder</TabsTrigger>
                    <TabsTrigger value="whey-processing">Whey Processing</TabsTrigger>
                    <TabsTrigger value="casein-production">Casein Production</TabsTrigger>
                    <TabsTrigger value="drying-principles">Drying Principles</TabsTrigger>
                </TabsList>
            </ScrollArea>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">

              <TabsContent value="intro" className="mt-0">
                <Section title="1. Introduction to Dairy Product Dehydration">
                    <p>The inherent perishability of liquid milk, primarily due to its high water content, necessitates advanced preservation techniques to extend its usability and facilitate global distribution. Raw milk's composition, rich in water, provides an ideal environment for microbial growth and enzymatic reactions, leading to rapid spoilage. Dehydration, fundamentally, addresses this challenge by significantly reducing the water content, thereby lowering the water activity. This critical reduction in water activity inhibits the proliferation of spoilage microorganisms and arrests enzymatic degradation, transforming a highly perishable liquid into a shelf-stable product. This transformation is not merely about removing water; it is a precise manipulation of the product's environment to suppress biological activity, which guides the selection of specific drying methods and their operational parameters.</p>
                    <p>The ability to convert liquid milk into concentrated or powdered forms has profound implications for the dairy industry and global food supply chains. The reduced bulk and extended shelf life afforded by dehydration processes significantly lower transportation and storage costs. This economic advantage allows dairy products, often produced in regions with abundant milk supply, to be efficiently distributed worldwide, reaching diverse markets and populations, including those in need of humanitarian aid. This broader implication underscores dehydration as a pivotal enabler of the global dairy supply chain and a crucial contributor to food security.</p>
                    <p>This report will delve into the intricate processes involved in the manufacturing of key evaporated and dried dairy products, including evaporated milk, skim milk powder (SMP), whole milk powder (WMP), whey, and casein. It will explore their unique characteristics, diverse applications, and the sophisticated technologies employed in their production, from initial pre-treatment to final packaging.</p>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product Type</TableHead>
                                    <TableHead>Base Material</TableHead>
                                    <TableHead>Water Content Reduction</TableHead>
                                    <TableHead>Key Characteristics</TableHead>
                                    <TableHead>Fat Content (Approx.)</TableHead>
                                    <TableHead>Protein Content (Approx.)</TableHead>
                                    <TableHead>Shelf Life (Unopened)</TableHead>
                                    <TableHead>Refrigeration Required (Unopened)</TableHead>
                                    <TableHead>Primary Uses</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Evaporated Milk</TableCell>
                                    <TableCell>Cow's Milk</TableCell>
                                    <TableCell>~60%</TableCell>
                                    <TableCell>Rich, creamy liquid</TableCell>
                                    <TableCell>Higher than regular milk (per volume)</TableCell>
                                    <TableCell>Similar to liquid milk</TableCell>
                                    <TableCell>Months (canned)</TableCell>
                                    <TableCell>No</TableCell>
                                    <TableCell>Cooking/Baking (creamy texture), sauces, soups, coffee, mashed potatoes</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Skim Milk Powder (SMP)</TableCell>
                                    <TableCell>Skim Milk</TableCell>
                                    <TableCell>~87-91%</TableCell>
                                    <TableCell>Fine powder (low fat)</TableCell>
                                    <TableCell>Little to no fat</TableCell>
                                    <TableCell>34-37%</TableCell>
                                    <TableCell>Up to 18 months</TableCell>
                                    <TableCell>No</TableCell>
                                    <TableCell>Therapeutic foods, low-fat formulations, bakery, dairy products, beverages, nutritional supplements, humanitarian aid</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Whole Milk Powder (WMP)</TableCell>
                                    <TableCell>Whole Milk</TableCell>
                                    <TableCell>~87%</TableCell>
                                    <TableCell>Fine powder (full fat)</TableCell>
                                    <TableCell>Min. 26%</TableCell>
                                    <TableCell>Similar to liquid milk</TableCell>
                                    <TableCell>~6 months</TableCell>
                                    <TableCell>No</TableCell>
                                    <TableCell>Bakery, confectionery, beverages, infant formula, sauces, soups, industrial uses</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Section>
              </TabsContent>

              <TabsContent value="evaporated-milk" className="mt-0">
                <Section title="2. Evaporated Milk Production">
                    <p>Evaporated milk is a dairy product derived from cow's milk, distinguished by the removal of approximately 60 percent of its water content. This process yields a thicker, richer, and creamier liquid compared to regular milk. A notable characteristic of evaporated milk is its extended shelf life, typically lasting for several months when stored in unopened cans without the need for refrigeration. Its versatility makes it a staple in various culinary applications, enhancing both sweet and savory dishes. Nutritionally, evaporated milk retains properties similar to full cream milk, serving as a valuable source of essential vitamins and minerals, including calcium and vitamin D.</p>
                    <SubSection title="Pre-treatment of Raw Milk">
                        <p>The production of evaporated milk begins with meticulous pre-treatment of raw milk to ensure product quality and stability. Initially, raw milk undergoes standardization to achieve a specific fat content. Following standardization, partial homogenization is often performed. A critical pre-evaporation step is forewarming (pasteurization, e.g., 72°C for 15 seconds), which eliminates harmful bacteria, inactivates undesirable enzymes, and increases the milk's heat stability to prevent coagulation during sterilization.</p>
                    </SubSection>
                    <SubSection title="Evaporation (Concentration)">
                        <p>Evaporation is the core process for concentrating milk, involving the removal of water molecules by transforming them from a liquid to a vapor state through heating. Operating under vacuum significantly lowers the boiling point of water, allowing it to evaporate at much lower temperatures (40-50°C), which is paramount for preserving the integrity of heat-sensitive milk components. Modern evaporators, especially falling film types, create a thin film of milk over heated surfaces to maximize heat transfer and minimize processing time. Multi-effect evaporator systems are frequently employed in large-scale operations, where multiple stages operate at progressively lower pressures and temperatures. The vapor generated in one effect is used as the heating medium for the subsequent effect, significantly improving overall energy efficiency.</p>
                    </SubSection>
                     <SubSection title="Types of Evaporators">
                        <p>Various designs of evaporators are used in the dairy industry, each with its own advantages and disadvantages.</p>
                        <ul>
                            <li><strong>Horizontal Tube Evaporators:</strong> In this design, steam is inside the tubes and milk is outside in the shell. While simple, they are less efficient due to poor milk circulation and are difficult to clean.</li>
                            <li><strong>Vertical Tube Evaporators (Calandria Type):</strong> Here, milk is inside the tubes and steam is outside. This design, especially the short-tube version known as the **Calandria Evaporator**, offers better heat transfer due to natural circulation (thermosyphon effect). They are commonly used for pre-condensing milk.</li>
                            <li><strong>Falling Film Evaporators:</strong> This is the most widely used type in modern dairies. Milk is fed to the top of long vertical tubes and flows down as a thin film on the inside walls, while steam heats the outside. This provides very efficient heat transfer, short contact time for the milk, and is suitable for heat-sensitive products.</li>
                            <li><strong>Rising Film Evaporators:</strong> Milk is fed to the bottom of the tubes. As it boils, the vapor bubbles cause the liquid to rise up the tubes as a film. This design is also efficient but can have longer contact times than falling film evaporators.</li>
                        </ul>
                    </SubSection>
                    <SubSection title="Sterilization Methods">
                        <h4>In-Can Sterilization (Traditional)</h4>
                        <p>Traditionally, evaporated milk is filled into cans, hermetically sealed, and then subjected to high temperatures (115-118°C for 15 minutes) within retorts. This method can lead to undesirable changes such as darkening, a "cooked" flavor, and potential gelling during storage. Stabilizing salts are often added to mitigate these issues.</p>
                        <h4>Aseptic Processing (UHT + Aseptic Filling)</h4>
                        <p>A modern and recommended approach is aseptic processing. The concentrated milk is sterilized online by rapid heating to very high temperatures (135-150°C for a few seconds) before being filled into pre-sterilized aseptic containers. This minimizes heat damage, preserves natural color and flavor, and prevents gelling issues. This technological evolution addresses both regulatory pressures and market demands for a cleaner label and superior product attributes.</p>
                    </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="milk-powder" className="mt-0">
                <Section title="3. Milk Powder Manufacturing (SMP & WMP)">
                    <p>Milk powders, including Skim Milk Powder (SMP) and Whole Milk Powder (WMP), are concentrated and shelf-stable forms of milk.</p>
                    <ul>
                        <li><strong>SMP (Non-Fat Dry Milk):</strong> Produced from skimmed milk, it retains proteins, lactose, and minerals but has very little fat. Its high protein content (34-37%) makes it valuable for low-fat formulations, bakery, and nutritional supplements.</li>
                        <li><strong>WMP (Full Cream Milk Powder):</strong> Produced from whole milk, it retains all natural fats and vitamins. It must contain at least 26% milk fat and is widely used in confectionery, ice cream, infant formula, and bakery products for its rich flavor and functional properties.</li>
                    </ul>
                    <SubSection title="Initial Processing Steps">
                        <p>The process starts with pasteurized milk, which is then separated into skim milk and cream. For WMP, cream is added back to achieve the desired fat content. The standardized milk is then preheated (75-120°C) to denature whey proteins, influencing the final powder's properties. A crucial step is pre-concentration in multi-effect evaporators, where over 85% of the water is removed under vacuum, significantly reducing energy costs for the final drying stage.</p>
                    </SubSection>
                     <SubSection title="Composition of Milk Powders">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Component (%)</TableHead>
                                        <TableHead>Whole Milk Powder (WMP)</TableHead>
                                        <TableHead>Skim Milk Powder (SMP)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Moisture</TableCell>
                                        <TableCell>2.5 - 4.0</TableCell>
                                        <TableCell>3.0 - 4.0</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Fat</TableCell>
                                        <TableCell>26.0 - 40.0</TableCell>
                                        <TableCell>Max 1.5</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Protein</TableCell>
                                        <TableCell>25.0 - 27.0</TableCell>
                                        <TableCell>34.0 - 37.0</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lactose</TableCell>
                                        <TableCell>36.0 - 38.0</TableCell>
                                        <TableCell>49.0 - 52.0</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ash (Minerals)</TableCell>
                                        <TableCell>5.5 - 6.5</TableCell>
                                        <TableCell>7.9 - 8.2</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="whey-processing" className="mt-0">
                <Section title="4. Whey and Whey Protein Processing">
                    <p>Whey is the liquid byproduct of cheese or casein manufacturing. It is a valuable source of high-quality proteins.</p>
                    <SubSection title="Initial Separation and Pre-treatment">
                        <p>After being separated from the curd, whey is filtered to remove residual cheese particles, pasteurized again, and defatted using high-speed separators. This yields defatted whey ready for protein concentration.</p>
                    </SubSection>
                    <SubSection title="Protein Concentration and Isolation">
                        <p>The transformation of whey into high-value ingredients is a hallmark of advanced dairy processing.</p>
                        <ul>
                            <li><strong>Membrane Filtration:</strong> This is the key technology. Microfiltration (MF) first removes bacteria and fat. Then, Ultrafiltration (UF) concentrates the proteins to produce Whey Protein Concentrate (WPC) by allowing smaller molecules like lactose and minerals to pass through. To achieve higher purity for Whey Protein Isolate (WPI), a process called Diafiltration is used, which "washes" out more lactose and minerals.</li>
                            <li><strong>Ion Exchange Chromatography:</strong> An alternative method that separates proteins based on their electrical charge.</li>
                        </ul>
                    </SubSection>
                    <SubSection title="Drying and Applications">
                        <p>The concentrated whey protein solution is then spray-dried to produce the final powder. Whey protein's high nutritional value and rapid digestion rate make it a premium ingredient in sports nutrition, supplements, and various food products to enhance texture and nutritional content.</p>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="casein-production" className="mt-0">
                <Section title="5. Casein and Caseinate Production">
                    <p>Casein, making up about 80% of milk protein, is known for its slow-digesting properties and is a major component of cheese. Its production involves precipitating it from skim milk.</p>
                    <SubSection title="Precipitation Methods">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader><TableRow><TableHead>Processing Stage</TableHead><TableHead>Acid Casein</TableHead><TableHead>Rennet Casein</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>Coagulation Principle</TableCell><TableCell>Isoelectric Precipitation</TableCell><TableCell>Enzymatic Coagulation</TableCell></TableRow>
                                    <TableRow><TableCell>Coagulant</TableCell><TableCell>Acid (Lactic, HCl)</TableCell><TableCell>Rennet + Calcium Chloride</TableCell></TableRow>
                                    <TableRow><TableCell>Coagulation Conditions</TableCell><TableCell>pH 4.6</TableCell><TableCell>30-32°C</TableCell></TableRow>
                                    <TableRow><TableCell>Key Steps</TableCell><TableCell>Washing, Pressing, Milling</TableCell><TableCell>Curd Cutting, Cooking, Washing, Pressing</TableCell></TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                    <SubSection title="Drying and Applications">
                        <p>After precipitation, washing, and pressing, the casein curd is milled and then dried using technologies like Flash Dryers or Fluidized Bed Dryers. The final casein powder has diverse applications, from being a food additive and emulsifier to being used in non-food industries like paints, glues, and plastics.</p>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="drying-principles" className="mt-0">
                <Section title="6. General Principles of Milk Drying and Quality Control">
                     <SubSection title="Drying Technologies and Principles">
                        <p>The choice of drying technology is a strategic decision that balances desired product attributes with economic factors. Each method offers unique advantages and limitations.</p>
                         <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Drying Technology</TableHead>
                                        <TableHead>Principle</TableHead>
                                        <TableHead>Product Form</TableHead>
                                        <TableHead>Key Advantages</TableHead>
                                        <TableHead>Key Limitations</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Spray Drying</TableCell>
                                        <TableCell>Atomization into hot air</TableCell>
                                        <TableCell>Fine powder</TableCell>
                                        <TableCell>High throughput, preserves nutrients/solubility, rapid</TableCell>
                                        <TableCell>High energy use, high equipment cost</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Drum Drying</TableCell>
                                        <TableCell>Thin film on heated drums</TableCell>
                                        <TableCell>Flakes/coarser powder</TableCell>
                                        <TableCell>Cost-effective, compact</TableCell>
                                        <TableCell>Lower solubility, cooked flavor, nutrient loss</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Freeze Drying</TableCell>
                                        <TableCell>Sublimation from frozen state under vacuum</TableCell>
                                        <TableCell>Highly porous powder</TableCell>
                                        <TableCell>Maximum nutrient/flavor retention, excellent rehydration</TableCell>
                                        <TableCell>Slow, very expensive, high energy use</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Vacuum Drying</TableCell>
                                        <TableCell>Evaporation at low pressure/temperature</TableCell>
                                        <TableCell>Various (powder, paste)</TableCell>
                                        <TableCell>Gentle on heat-sensitive materials, superior quality</TableCell>
                                        <TableCell>Slower than spray drying</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                    <SubSection title="Post-Drying Treatments & Quality Control">
                        <p>After primary drying, milk powders often undergo agglomeration for "instantization," which improves how easily they dissolve. The powder is then cooled and packaged in specialized materials (e.g., multi-layer bags, gas-flushed cans) to protect against moisture, oxygen, and light.</p>
                        <p>Rigorous quality control is essential. Key parameters monitored include moisture content, water activity, particle size, bulk density, solubility, fat and protein content, and microbiological safety. This ensures the final product is safe, stable, and functional for its intended use.</p>
                    </SubSection>
                     <SubSection title="7. Conclusion">
                        <p>Dairy dehydration is a sophisticated industrial process that transforms a perishable liquid into a stable, functional powder. The success of these processes relies on a deep understanding of heat and mass transfer principles, milk chemistry, and advanced engineering. The strategic choice of pre-concentration and drying technologies allows the industry to produce a wide array of specialized dairy ingredients efficiently. Rigorous quality control, from raw material to final packaging, underpins the safety, functionality, and consumer trust in these essential products. Future innovations will continue to focus on enhancing energy efficiency, improving product quality, and promoting sustainable practices.</p>
                    </SubSection>
                </Section>
              </TabsContent>

            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
