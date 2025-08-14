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

export function EtpModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Effluent Treatment Plants (ETP) in Dairy Industry
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A guide to wastewater treatment processes, benefits, and challenges.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
            <TabsTrigger value="intro">Introduction</TabsTrigger>
            <TabsTrigger value="processes">Treatment Processes</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="factors">Key Factors</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="future">Future Outlook</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">

              <TabsContent value="intro" className="mt-0">
                <Section title="I. Executive Summary">
                    <p>The dairy industry, a cornerstone of global food production, generates substantial volumes of wastewater characterized by high organic loads, fluctuating pH, and significant concentrations of fats, oils, grease (FOG), and nutrients. Effective management of this wastewater is not merely a regulatory obligation but a strategic imperative for environmental protection, resource stewardship, and long-term economic viability. Effluent Treatment Plants (ETPs) are meticulously engineered systems designed to purify this industrial wastewater, enabling its safe discharge or beneficial reuse. This report provides a comprehensive examination of ETPs within the dairy sector, detailing their fundamental concepts, the multi-stage processes involved, the multifaceted environmental, economic, and operational advantages they confer, and the critical factors that influence their design, performance, and regulatory compliance. Furthermore, it explores the landscape of emerging technologies and their potential to drive the dairy industry towards a more sustainable and circular future, transforming waste into valuable resources such as renewable energy and agricultural fertilizers.</p>
                </Section>
                 <Section title="II. Introduction to Dairy Wastewater Treatment">
                    <p>An Effluent Treatment Plant (ETP) represents a meticulously designed process system engineered to treat industrial wastewater. This untreated industrial wastewater is often referred to as "influent" upon its entry into the treatment system. The primary objective of an ETP is to purify this influent to a standard suitable for either safe and compliant discharge into the environment or for beneficial reuse within industrial operations, thereby fostering a more circular economy.</p>
                    <SubSection title="Characteristics of Dairy Industry Wastewater">
                        <p>Dairy industry wastewater presents a unique and complex challenge for treatment due to its distinct characteristics. It is typically white in color, possesses an unpleasant odor, and carries a high pollutant load. This load includes significant concentrations of Chemical Oxygen Demand (COD), Biological Oxygen Demand (BOD), and Total Suspended Solids (TSS).</p>
                        <p>The key contaminants found in dairy wastewater are diverse and problematic. High concentrations of Phosphorus (P) and Nitrogen (N) are common, and if discharged untreated, these nutrients can lead to eutrophication in receiving water bodies. Furthermore, dairy wastewater contains substantial amounts of Fats, Oils, and Grease (FOG). These FOGs can cause significant operational issues within treatment plants, such as clogging pipes and pumps, and can disrupt biological treatment processes by forming a thick surface layer that hinders oxygen transfer.</p>
                        <div className="overflow-x-auto">
                           <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Parameter (mg/l)</TableHead>
                                        <TableHead>Butter Products</TableHead>
                                        <TableHead>Cream Products</TableHead>
                                        <TableHead>Milk Products</TableHead>
                                        <TableHead>Cheese Products</TableHead>
                                        <TableHead>Powdered Products</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>BOD</TableCell><TableCell>200-2500</TableCell><TableCell>2500</TableCell><TableCell>500-1300</TableCell><TableCell>500-5000</TableCell><TableCell>1500</TableCell></TableRow>
                                    <TableRow><TableCell>TSS</TableCell><TableCell>700-5000</TableCell><TableCell>3000</TableCell><TableCell>100-450</TableCell><TableCell>-</TableCell><TableCell>100-3000</TableCell></TableRow>
                                    <TableRow><TableCell>FOG</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>350-2750</TableCell><TableCell>-</TableCell></TableRow>
                                    <TableRow><TableCell>COD</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>1000-2500</TableCell><TableCell>-</TableCell><TableCell>3000</TableCell></TableRow>
                                    <TableRow><TableCell>TN</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>250</TableCell></TableRow>
                                    <TableRow><TableCell>TP</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>-</TableCell><TableCell>20</TableCell></TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="processes" className="mt-0">
                <Section title="III. Stages of Dairy Wastewater Treatment Processes">
                    <p>Wastewater treatment in the dairy industry typically involves a series of sequential stages, each designed to remove specific types of pollutants, progressively purifying the influent to meet discharge or reuse standards. These stages include preliminary, primary, secondary, and tertiary/advanced treatment.</p>
                    <SubSection title="A. Preliminary Treatment">
                        <p>Preliminary treatment constitutes the initial stage, focused on the physical separation of large-sized impurities like plastics, wood logs, and paper. Key operations include Screening to remove large solids and an Equalization Tank to homogenize the wastewater, balance flow rates, and prevent "shock loading" on subsequent treatment systems.</p>
                    </SubSection>
                    <SubSection title="B. Primary Treatment">
                        <p>Primary treatment focuses on removing floating and settleable materials. Key operations include:</p>
                        <ul>
                            <li><strong>Coagulation and Flocculation:</strong> Chemicals are added to destabilize and clump together fine suspended particles, which then settle out.</li>
                            <li><strong>Dissolved Air Flotation (DAF):</strong> This is crucial for dairy wastewater due to its high fat content. Microscopic air bubbles attach to suspended particles (including FOG), causing them to float to the surface where they are skimmed off. DAF can achieve up to 99% FOG removal.</li>
                        </ul>
                    </SubSection>
                    <SubSection title="C. Secondary Treatment (Biological Treatment)">
                        <p>This stage utilizes microorganisms to break down organic pollutants. Common methods include:</p>
                        <ul>
                            <li><strong>Activated Sludge Process (ASP):</strong> An aerobic process where microorganisms consume organic matter in aerated tanks. It's effective but energy-intensive.</li>
                            <li><strong>Anaerobic Digestion (AD):</strong> An oxygen-free process where bacteria break down organic matter, producing biogas (a valuable renewable energy source) and less sludge. It's highly suitable for high-strength dairy wastewater.</li>
                            <li><strong>Membrane Bioreactor (MBR):</strong> Combines biological treatment with membrane filtration, producing high-quality effluent suitable for reuse, but involves high capital and maintenance costs.</li>
                        </ul>
                    </SubSection>
                    <SubSection title="D. Tertiary/Advanced Treatment">
                        <p>The final stage for further purification to remove remaining inorganic compounds, nutrients, and pathogens. Methods include:</p>
                        <ul>
                            <li><strong>Filtration:</strong> Using sand or activated carbon to remove fine particles.</li>
                            <li><strong>Disinfection:</strong> Using Chlorine, UV light, or Ozone to kill or inactivate remaining microorganisms.</li>
                            <li><strong>Advanced Oxidation Processes (AOPs):</strong> Powerful processes that use hydroxyl radicals to degrade a wide range of organic compounds.</li>
                            <li><strong>Nutrient Removal:</strong> Specialized biological or chemical processes to remove nitrogen and phosphorus, which can be recovered as valuable fertilizers like struvite.</li>
                        </ul>
                    </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-0">
                  <Section title="IV. Benefits of Dairy Wastewater Treatment">
                        <p>Implementing effective wastewater treatment yields a wide array of benefits, extending beyond mere compliance to encompass significant environmental, economic, and operational advantages.</p>
                        <SubSection title="Environmental Benefits">
                           <p>Protects aquatic ecosystems by preventing oxygen depletion and eutrophication. Conserves water resources by enabling reuse. Reduces the overall environmental footprint of dairy operations.</p>
                        </SubSection>
                         <SubSection title="Economic Benefits">
                           <p>Leads to substantial operational savings by reducing water procurement and waste disposal costs. Avoids significant regulatory fines. Creates new revenue streams from byproducts like biogas and recovered nutrients. Extends the lifespan of equipment by removing corrosive contaminants.</p>
                        </SubSection>
                        <SubSection title="Operational Benefits">
                           <p>Enhances brand reputation and competitive edge by demonstrating a commitment to sustainability. Simplifies further treatment processes by reducing the organic load. Leads to more stable and efficient ETP operations.</p>
                        </SubSection>
                  </Section>
              </TabsContent>

              <TabsContent value="factors" className="mt-0">
                  <Section title="V. Key Factors Influencing ETP Design, Operation, and Effectiveness">
                        <p>The success of an ETP is influenced by a complex interplay of factors.</p>
                        <SubSection title="Wastewater Characteristics and Variability">
                            <p>The strength, pH, temperature, flow rates, and specific contaminants of dairy wastewater are highly variable. ETPs must be designed with flexibility and robustness to handle these fluctuations and prevent "shock loading."</p>
                        </SubSection>
                        <SubSection title="Regulatory Compliance and Standards">
                            <p>Legal requirements are a primary driver. For example, India's Central Pollution Control Board (CPCB) sets specific limits for pH, BOD, Suspended Solids, and Oil & Grease.</p>
                             <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Parameter</TableHead>
                                            <TableHead>CPCB Standard Limit (mg/l)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow><td>pH</td><td>6.5 – 8.5</td></TableRow>
                                        <TableRow><td>BOD (3 days at 27°C)</td><td>100</td></TableRow>
                                        <TableRow><td>Suspended Solids</td><td>150</td></TableRow>
                                        <TableRow><td>Oil and Grease</td><td>10</td></TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </SubSection>
                        <SubSection title="Technological Selection and Economic Considerations">
                             <p>The choice of technology must be economical and suitable for the specific wastewater characteristics and site conditions. While advanced technologies can be costly, they often offer long-term economic benefits through resource recovery and operational savings.</p>
                        </SubSection>
                  </Section>
              </TabsContent>

               <TabsContent value="challenges" className="mt-0">
                  <Section title="VI. Challenges in Dairy Wastewater Treatment">
                        <p>The dairy industry faces several distinct challenges in the efficient and affordable treatment of its wastewater.</p>
                         <ul className="list-disc pl-5 space-y-2">
                           <li><strong>High Organic Load:</strong> Requires robust and advanced treatment processes.</li>
                           <li><strong>Fluctuating pH Levels:</strong> Necessitates constant monitoring and adjustment.</li>
                           <li><strong>High Fats, Oils, and Grease (FOG):</strong> Can clog pipes and hinder biological treatment if not effectively removed.</li>
                           <li><strong>High Nutrient Load:</strong> Requires advanced nutrient removal techniques to prevent eutrophication.</li>
                           <li><strong>Large Wastewater Volumes:</strong> Treatment plants must handle significant and fluctuating volumes.</li>
                           <li><strong>Cost:</strong> High capital and operational costs can be a significant barrier.</li>
                        </ul>
                  </Section>
              </TabsContent>
              
               <TabsContent value="future" className="mt-0">
                  <Section title="VII. Emerging Technologies and Future Outlook">
                    <p>The future of dairy wastewater treatment is characterized by a continued shift towards integrated, resource-efficient systems that emphasize a circular economy model.</p>
                    <SubSection title="Key Innovations">
                        <ul>
                           <li><strong>Membrane Separation Technology (MST):</strong> Offers efficient separation and purification with lower energy consumption.</li>
                           <li><strong>Advanced Oxidation Processes (AOPs):</strong> Highly powerful solutions for treating difficult wastewater without producing harmful byproducts.</li>
                           <li><strong>Resource Recovery and Valorization:</strong> Transforming waste into valuable resources like biogas, fertilizers (struvite, biochar), and even bioplastics from manure.</li>
                           <li><strong>Digitalization and Automation:</strong> Using data analytics and automation to optimize treatment processes, reduce human error, and ensure compliance.</li>
                        </ul>
                    </SubSection>
                     <SubSection title="Conclusion">
                        <p>The effective management of effluent in the dairy industry is fundamentally important for environmental stewardship, economic viability, and operational resilience. The future lies in embracing a holistic approach where wastewater is not seen as a liability but as a valuable resource. By investing in advanced, integrated treatment systems, the dairy industry can move towards a more sustainable and circular future, enhancing both its environmental performance and economic competitiveness.</p>
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
