
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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

export function FermentedProductsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Processing of Fermented Milk Products
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A comprehensive guide to the production of fermented dairy items.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <TabsTrigger value="intro">Introduction</TabsTrigger>
            <TabsTrigger value="processing">Processing Steps</TabsTrigger>
            <TabsTrigger value="quality-control">Quality Control</TabsTrigger>
            <TabsTrigger value="defects">Common Defects</TabsTrigger>
            <TabsTrigger value="shelf-life">Shelf Life</TabsTrigger>
            <TabsTrigger value="yield">Optimizing Yield</TabsTrigger>
            <TabsTrigger value="innovations">Innovations</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">

              <TabsContent value="intro" className="mt-0">
                <Section title="I. Executive Summary">
                    <p>Fermented milk products represent a significant segment of the global dairy industry, valued for their unique sensory attributes, nutritional benefits, and extended shelf life compared to raw milk. This report provides an in-depth analysis of the processing of fermented milk products, detailing the step-by-step manufacturing procedures, critical quality control measures, strategies for enhancing shelf life and yield, and methods for preventing common defects such as sourness, bitterness, and syneresis. The discussion emphasizes the intricate interplay of microbial activity, processing parameters, and technological innovations that collectively determine the final product’s characteristics and market viability.</p>
                </Section>
                <Section title="II. Introduction to Fermented Milk Products">
                    <p>Fermented milk, a dairy product with a rich history, is fundamentally milk that has been inoculated with a starter culture. This culture initiates a biochemical conversion process, primarily transforming lactose into lactic acid.[1] This acidification is central to the product's identity, leading to a decrease in pH that causes milk proteins, specifically casein, to aggregate and form a protein network known as a "coagulum".[1] This coagulum is perceived by consumers as the characteristic soft gel texture of fermented milk products.[1] Beyond texture, the lactic acid production confers a significant preservative effect by lowering the milk's pH, which inhibits spoilage microorganisms and the growth of detrimental bacteria, thereby extending the product's shelf life.[1, 2]</p>
                    <p>Historically, the production of fermented milks was a "crude art," relying on spontaneous fermentation by ill-defined microbial cultures.[3] Over centuries, people discovered that sour milk could be preserved longer and possessed a pleasant flavor.[4] This empirical knowledge has evolved into modern, scientifically-driven processes, leading to "nontraditional" fermented milk products based on known scientific principles and optimized microbial cultures.[3] This evolution from traditional, unpredictable methods to controlled, optimized biotechnology underscores a continuous drive in food science for consistency, enhanced safety, and tailored sensory profiles in contemporary dairy production.</p>
                    <p>The microorganisms primarily responsible for milk fermentation are Lactic Acid Bacteria (LAB), including genera such as Lactobacillus, Lactococcus, and Leuconostoc.[5] These microorganisms are vital not only for acid production but also for generating a diverse array of metabolic byproducts, including carbon dioxide, acetic acid, diacetyl, acetaldehyde, and ethyl alcohol (in products like kefir and koumiss), which contribute to the distinct taste and aroma profiles of various fermented products.[1, 6] Furthermore, LAB produce exopolysaccharides (EPS) that are essential for texture formation and contribute to the viscosifying properties of the product.[6] Some LAB strains also produce bacteriocins, which are protein-structured antimicrobial substances that further enhance product preservation.[6] The intricate biochemical interplay of these metabolites is central to the quality of fermented milk. For instance, the symbiotic relationship between Streptococcus thermophilus and Lactobacillus delbrueckii subsp. bulgaricus, commonly used in yogurt production, significantly enhances culture growth rate, flavor, and overall product quality due to their metabolic co-dependence and cellular interactions.[7]</p>
                    <p>Fermented milk products encompass a wide variety of offerings, each with unique characteristics influenced by the type of milk used (e.g., cow, buffalo, sheep, goat, horse) [3], the specific starter cultures, and subsequent processing. Beyond traditional milk, other substrates like cream, whey, and dry milk solids can serve as fermentation media.[3] Modern innovations also include mixtures with other foodstuffs, such as milk-vegetable or milk-meat extract products, aimed at enhancing nutritional status and culinary variety.[3] This diversification highlights the industry's exploration of new substrates and complex formulations to meet evolving consumer demands.</p>
                    <SubSection title="Table 1: Classification and Characteristics of Common Fermented Milk Products">
                        <p>This table provides a concise, comparative overview of some of the most common fermented milk products, highlighting their key characteristics. This structured presentation is valuable for quickly understanding the diversity of products and the specific microbial requirements for each.[2, 4, 5]</p>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader><TableRow><TableHead>Product Name</TableHead><TableHead>Alternative Names</TableHead><TableHead>Typical Milkfat Content</TableHead><TableHead>Typical Shelf Life at 4 °C</TableHead><TableHead>Fermentation Agent(s)</TableHead><TableHead>Description</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>Yogurt</TableCell><TableCell>yoghurt, yogourt, yoghourt</TableCell><TableCell>0.5–4%</TableCell><TableCell>35–40 days</TableCell><TableCell>Lactobacillus bulgaricus and Streptococcus thermophilus</TableCell><TableCell>Thermophilic fermented milk, cultured with specific bacteria for gel-like consistency and tangy taste.[4, 5]</TableCell></TableRow>
                                    <TableRow><TableCell>Kefir</TableCell><TableCell>kephir, milkkefir, búlgaros</TableCell><TableCell>0-4%</TableCell><TableCell>10–14 days</TableCell><TableCell>Kefir grains (mixture of bacteria and yeasts)</TableCell><TableCell>A fermented beverage, often carbonated and slightly alcoholic, made with kefir grains; can be made with various sugary liquids.[5, 8]</TableCell></TableRow>
                                    <TableRow><TableCell>Cultured Buttermilk</TableCell><TableCell></TableCell><TableCell>1–2%</TableCell><TableCell>10 days</TableCell><TableCell>Lactococcus lactis (subsp. lactis, cremoris, biovar. diacetylactis) and Leuconostoc mesenteroides subsp. cremoris</TableCell><TableCell>Mesophilic fermented pasteurized milk, often a byproduct of butter-making or made from skim milk.[5, 9, 10]</TableCell></TableRow>
                                    <TableRow><TableCell>Cultured Sour Cream</TableCell><TableCell>sour cream</TableCell><TableCell>14–40%</TableCell><TableCell>4 weeks</TableCell><TableCell>Lactococcus lactis subsp. lactis</TableCell><TableCell>Mesophilic fermented pasteurized cream with an acidity of at least 0.5%; rennet may be added for thickness.[4, 5]</TableCell></TableRow>
                                    <TableRow><TableCell>Acidophilus Milk</TableCell><TableCell>acidophilus cultured milk</TableCell><TableCell>0.5-2%</TableCell><TableCell>2 weeks</TableCell><TableCell>Lactobacillus acidophilus</TableCell><TableCell>Thermophilic fermented milk, often low-fat, thought to inhibit harmful gas-producing organisms in the intestinal tract.[4, 5]</TableCell></TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="processing" className="mt-0">
                 <Section title="III. Step-by-Step Processing of Fermented Milk Products">
                    <p>The production of fermented milk products involves a series of meticulously controlled steps, from raw milk reception to final packaging, each designed to ensure product quality, safety, and desired sensory attributes.</p>
                    <SubSection title="A. Raw Milk Preparation">
                        <p>The initial quality of raw milk is paramount for successful fermentation. Milk selected for fermented products must have a low bacterial count and be free from enzymes, chemical substances, antibiotics, and bacteriophages that could inhibit or slow down the starter culture's development.[1] Rigorous analysis of incoming milk is therefore crucial.[1]</p>
                        <p>Following quality checks, milk often undergoes standardization to adjust its fat and dry solids (DM) content. For yogurt, fat content commonly ranges from 0.5% to 3.5%, though it can vary from 0% to 10%.[1] Increasing the total DM content, particularly casein and whey proteins, is a common practice as it leads to a firmer coagulum and reduces whey separation in the final product.[1] Common methods for DM standardization include evaporation (typically 10-20% of milk volume), addition of skim milk powder or milk protein powder, addition of milk concentrate, or concentration via membrane filtration (e.g., Ultrafiltration or Reverse Osmosis).[1] This meticulous control over milk composition is a foundational engineering step that pre-conditions the milk to ensure optimal microbial activity and subsequent gel formation, directly impacting the final product's texture, stability, and yield. The dairy matrix is thus precisely engineered before biological transformation.</p>
                        <p>Deaeration is another crucial step, aiming to reduce the air content in the milk to as low a level as possible.[1] This process offers several advantages, including improved stability and viscosity of the final product, shortened fermentation time, enhanced working conditions for the homogenizer, reduced risk of fouling during heat treatment, and removal of volatile off-flavors (deodorization).[1] Typically, milk is pre-heated regeneratively to about 65°C before entering the deaerator.[1]</p>
                    </SubSection>
                     <SubSection title="B. Pre-Fermentation Treatments">
                        <p>Before inoculation, milk undergoes specific heat and mechanical treatments. Heat treatment, commonly pasteurization, is applied to the milk to destroy any competing microorganisms and improve the milk's properties as a substrate for the starter culture.[1, 11] This process is vital for ensuring a firm coagulum and reducing the risk of whey separation in the end product.[1] For yogurt, milk is often heated to 90°C for five minutes [11] or 180°F (82.2°C) for 10-20 minutes.[12] This denatures whey proteins, allowing them to participate in the protein network, thereby increasing viscosity and improving mouthfeel.[11, 12, 13] For buttermilk, continuous High Temperature Short Time (HTST) pasteurization involves heating milk to 90-95°C for 15-40 seconds.[10] Pasteurization also inactivates enzymes responsible for milk spoilage.[14] Inadequate pasteurization can lead to inefficient pathogen elimination and rapid microbial multiplication.[15]</p>
                        <p>Homogenization typically follows heat treatment.[14] This mechanical process reduces the size of fat molecules, ensuring their uniform distribution throughout the milk and preventing the formation of a cream layer.[14] It also aids in dissolving milk powders and further improves mouthfeel.[11] Homogenization is particularly essential for lower-fat and skim milk products.[14]</p>
                     </SubSection>
                     <SubSection title="C. Fermentation Process">
                        <p>The core of fermented milk production is the fermentation process itself. Inoculation involves adding the selected starter culture to the prepared milk. For most yogurt production, a symbiotic blend of Streptococcus thermophilus and Lactobacillus bulgaricus is used, as their co-cultivation enhances growth rate and acid production.[11] The dosage is critical; for yogurt, approximately 2-3 teaspoons of starter per cup of milk is typical, with excessive amounts potentially leading to a sour taste and premature lactose depletion.[12] For kefir, 2-5% kefir grains-to-milk proportion is common [8], while buttermilk typically uses a 1% starter culture.[10] Aseptic technique during inoculation is crucial to prevent contamination by undesired microbes.[15]</p>
                        <p>Incubation is the period during which the starter cultures ferment the milk. The optimal temperature and time are highly specific to the product and culture, representing a delicate balance between microbial activity, acid production, and the development of desired sensory and textural attributes. For yogurt, incubation generally occurs at 38-42°C for 4-6 hours.[11] Kefir ferments at a milder 20-25°C for 12-24 hours [8], and cultured buttermilk at 22°C for 12-16 hours until a lactic acid content of 0.7-0.8% is reached.[10] Maintaining a stable, continuous temperature is vital, as deviations can lead to slower fermentation, off-flavors, or failure to achieve the desired product characteristics.[24, 25] pH is continuously monitored during this phase.[15]</p>
                     </SubSection>
                     <SubSection title="D. Post-Fermentation Handling">
                        <p>Once the desired flavor and texture have been achieved, the fermentation process must be halted. Cooling is rapidly applied to stop further acid development and microbial activity.[1, 10, 11] For yogurt, cooling to below 30°C is necessary to prevent excess acid production.[11] Cultured buttermilk is cooled to 15°C.[10] Post-fermentation cooling is essential to prevent contaminant proliferation and enhance shelf life, with EU guidelines suggesting cooling to around 4°C or lower, and FDA to 7°C or lower.[15]</p>
                        <p>After cooling, flavors, fruits, and other ingredients are often added, particularly for stirred and drinking yogurt varieties.[11] Fruit preparations, which may include aroma, sugar, and stabilizers, are typically mixed with the yogurt before or during filling.[1] For stirred products, mechanical treatment, such as gentle agitation, breaks the coagulum to achieve a smooth consistency, often after the addition of other ingredients.[11]</p>
                     </SubSection>
                     <SubSection title="E. Packaging">
                        <p>Packaging is a critical final step that protects the product, extends shelf life, and influences consumer perception. Various packaging types are used depending on the product format and desired shelf life. For cultured buttermilk, laminated cardboard boxes or plastic tubs with foil caps are common.[10] Plastic is a popular choice for yogurt due to its lightweight nature, production efficiency, durability, and recyclability.[26] Modern packaging trends emphasize "design for recycling" using mono-materials, post-consumer recycled (PCR) plastics, and overall material reduction to meet sustainability demands.[26]</p>
                        <p>For extended shelf life without refrigeration, aseptic packaging is employed. This involves sterilizing both the product (e.g., through thermization) and the packaging material, followed by filling in a sterile environment.[27, 28] Aseptic carton packages, often multi-layered with paper for strength, polymer for moisture barrier, and aluminum for protection against light, oxygen, and microorganisms, can preserve product quality for up to a year.[28] This approach not only ensures safety and quality but also enables efficient, cost-effective transport chains and reduces food waste.[28] The choice and management of packaging is an active component of product quality, safety, and shelf-life strategy, reflecting a drive towards extended distribution, reduced waste, and meeting evolving consumer demands for sustainability.</p>
                     </SubSection>
                 </Section>
              </TabsContent>
              
              <TabsContent value="quality-control">
                  <Section title="IV. Quality Control and Food Safety in Fermented Milk Production">
                        <p>Maintaining stringent quality control and food safety standards is paramount in fermented milk production, ensuring consumer health, product consistency, and brand reputation.</p>
                        <SubSection title="A. General Quality Assessment Parameters">
                            <p>The quality of fermented milk products is comprehensively assessed across several dimensions:</p>
                            <ul>
                                <li>Microflora: Verification of the presence of the correct type and number of microorganisms, often specified by legislation, and crucially, the absence of contaminating microorganisms such as yeasts and molds.[1]</li>
                                <li>Appearance: Visual assessment of the product's look, including color, consistency, and absence of defects like mold growth or discoloration.[1, 34]</li>
                                <li>Body and Texture: Evaluation of how the product behaves when poured or spooned, and its mouthfeel. This includes assessing firmness, viscosity, and the absence of defects like syneresis, graininess, or ropiness.[1, 34, 35]</li>
                                <li>Flavor: Sensory evaluation of the product's smell and taste, ensuring it possesses characteristic fresh notes and is free from undesirable off-flavors like sour, bitter, yeasty, rancid, or metallic tastes.[1, 34, 36, 37]</li>
                            </ul>
                            <p>Beyond these sensory and microbiological attributes, quality control also involves assessing raw materials for purity, freshness, and composition, and monitoring critical processing parameters such as temperature, time, and pH levels during pasteurization, homogenization, and fermentation.[38] Laboratory tests, including chemical, physical, and microbiological analyses (e.g., fat and protein content, bacterial counts), are routinely performed to ensure compliance with regulatory standards.[38]</p>
                        </SubSection>
                        <SubSection title="B. Hygiene and Sanitation Practices">
                             <p>Strict adherence to hygiene and sanitation protocols is fundamental to preventing microbial contamination and ensuring product safety.[15, 38] This is a critical upstream control point that profoundly impacts the success and safety of downstream fermentation, as quality control begins long before processing, at the farm level, and is fundamental to preventing product failures.</p>
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="defects">
                  <Section title="V. Addressing Common Problems and Defects">
                        <p>Fermented milk products, despite controlled processing, can exhibit various defects impacting their sensory appeal, texture, and overall quality. Understanding the causes and implementing targeted prevention strategies is crucial for consistent production. Many common defects are not isolated issues but often stem from a shared set of underlying causes related to microbial imbalance, suboptimal processing parameters, or raw material quality, suggesting that a holistic approach to process control and ingredient management is more effective than addressing defects in isolation.</p>
                        <SubSection title="A. Excessive Sourness">
                            <p>Excessive sourness, characterized by an overly acidic taste, is a common flavor defect. It primarily results from over-acidification, which occurs when the fermentation process is not stopped at the appropriate time.[34] Prolonged fermentation time allows starter cultures to produce too much lactic acid.[1] An overdose of starter culture can also lead to a rapid and excessive drop in pH, resulting in an undesirable sour taste.[12]</p>
                        </SubSection>
                        <SubSection title="B. Bitterness">
                            <p>This defect is primarily attributed to the accumulation of bitter-tasting peptides.[48] These peptides are formed through the action of proteolytic enzymes on casein. The enzymes responsible can originate from the starter cultures, milk proteinases (like plasmin), or contaminating bacteria.[48, 49] Selecting appropriate starter cultures is paramount to prevent this.</p>
                        </SubSection>
                         <SubSection title="C. Syneresis (Whey Separation)">
                            <p>Syneresis is the undesirable expulsion of liquid whey from the solid curd.[34, 35] It is primarily caused by the disruption of the protein gel structure.[20] Factors include low protein/fat content, insufficient heat treatment, high incubation temperature, or physical disturbance.[35, 20] Increasing total solids and using stabilizers can prevent this.[50, 52]</p>
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="shelf-life">
                  <Section title="VI. Strategies for Increasing Shelf Life">
                        <p>Extending the shelf life of fermented milk products is crucial for broader distribution, reduced food waste, and consumer convenience. This involves a multi-layered strategy.</p>
                         <SubSection title="A. Role of Lactic Acid and pH">
                            <p>The fundamental mechanism is the production of lactic acid by starter cultures. This lowers pH, creating an acidic environment that inhibits spoilage microorganisms.[1, 6]</p>
                        </SubSection>
                        <SubSection title="B. Post-Processing Heat Treatment (Thermization)">
                            <p>This involves heating the finished product to inactivate starter bacteria and contaminants like yeasts and molds, preventing post-acidification. While effective for shelf life, it destroys beneficial live cultures.[1, 55, 57]</p>
                        </SubSection>
                        <SubSection title="C. Aseptic Production and Packaging">
                            <p>This technology ensures that both the product and the packaging are commercially sterile, allowing products to remain safe and flavorful for months without refrigeration.[1, 27, 57]</p>
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="yield">
                  <Section title="VII. Optimizing Yield in Fermented Milk Production">
                        <p>Optimizing yield encompasses not only the quantity but also the quality and consistency of the final product. Factors influencing yield are linked to milk composition, processing parameters, and starter culture activity.</p>
                        <SubSection title="A. Impact of Milk Composition">
                            <p>The protein content of milk is a primary determinant of yogurt thickness and firmness.[13, 78] Increasing the total solids (TS) content, often by adding skim milk powder, directly contributes to a firmer coagulum and significantly reduces syneresis, which increases sellable yield.[12, 79, 81]</p>
                        </SubSection>
                         <SubSection title="B. Impact of Processing Parameters">
                            <p>Pre-fermentation heat treatment denatures whey proteins, enhancing water-holding capacity and improving yield.[1, 12, 35] Homogenization improves viscosity and reduces syneresis.[35, 50, 78] Controlling fermentation temperature and time is also critical.[24]</p>
                        </SubSection>
                         <SubSection title="C. Impact of Starter Culture Activity">
                            <p>A rapid and consistent rate of acid production is crucial for efficient coagulation.[6, 86] Exopolysaccharide (EPS) production by certain strains acts as a viscosifying agent, improving texture and preventing syneresis.[6, 54, 21]</p>
                        </SubSection>
                         <SubSection title="D. Impact of Stabilizers">
                            <p>Stabilizers like gelatin and pectin bind water, increase viscosity, and reinforce the protein network, significantly reducing whey separation and directly contributing to a higher sellable yield.[50, 87, 88]</p>
                        </SubSection>
                  </Section>
              </TabsContent>
              
              <TabsContent value="innovations">
                  <Section title="VIII. Innovations and Future Trends">
                        <p>The fermented milk industry is continuously evolving, driven by consumer demand for healthier, more diverse, and sustainable products.</p>
                        <SubSection title="A. Novel Fermentation Techniques">
                            <p>Innovations include lactose-free fermented milk using lactase enzymes, and ambient yogurt that is heat-treated post-fermentation for non-refrigerated storage.[1, 57]</p>
                        </SubSection>
                        <SubSection title="B. Probiotic and Prebiotic Fortification">
                            <p>A major trend driven by consumer awareness of gut health. Fermented milks are excellent vehicles for delivering beneficial probiotic strains like Lactobacillus and Bifidobacterium.[58, 91]</p>
                        </SubSection>
                        <SubSection title="C. Advanced Processing Technologies">
                            <p>Non-thermal technologies like High-Pressure Processing (HPP) and Pulsed Electric Fields (PEF) are gaining traction for preserving nutritional and sensory quality while ensuring safety.[70, 74]</p>
                        </SubSection>
                        <SubSection title="D. Active and Smart Packaging">
                            <p>Innovations include packaging that absorbs oxygen or releases antimicrobials to extend shelf life, alongside a strong industry push towards sustainable and recyclable materials.[26, 62]</p>
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
