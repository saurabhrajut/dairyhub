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

export function ValidationVerificationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Validation & Verification in Dairy
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A guide to the core principles of food safety assurance.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="intro">Introduction</TabsTrigger>
            <TabsTrigger value="raw-milk">Raw Milk Handling</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="storage">Storage & Other</TabsTrigger>
            <TabsTrigger value="conclusion">Conclusion</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">

              <TabsContent value="intro" className="mt-0">
                <Section title="I. Introduction: The Cornerstone of Dairy Food Safety">
                  <p>The global dairy industry operates within a highly complex and sensitive food production environment, where ensuring product safety and quality is paramount. In this intricate landscape, the terms "validation" and "verification" are foundational concepts, often mistakenly used interchangeably, yet serving distinct and complementary functions critical to robust food safety management systems. Their rigorous application is not merely a best practice but a legal mandate across various regulatory frameworks worldwide.</p>
                  
                  <SubSection title="Defining Validation and Verification in Food Safety">
                    <p><strong>Validation</strong> is the foundational process of accumulating scientific and technical evidence to conclusively demonstrate that a specific control measure, or an entire food safety plan, is inherently capable of effectively managing an identified food safety hazard. It fundamentally addresses the question: <strong>"Is our plan effective?"</strong>. This process rigorously focuses on the design and theoretical accuracy of the food safety plan, ensuring its scientific soundness. Methods for validation include citing scientific principles and data from peer-reviewed journals, referencing regulatory guidance, using mathematical models, conducting in-plant tests, and consulting food safety experts.</p>
                    <p><strong>Verification</strong>, conversely, is the ongoing, routine application of checks, tests, and observations designed to confirm that a previously validated plan is being implemented correctly, consistently, and as intended. It answers the critical question: <strong>"Are we following our plan?"</strong>. This involves the systematic application of methods, procedures, tests, and other evaluations, beyond mere monitoring, to ensure the validated plan is adhered to daily. Types of verification activities include regular calibration checks, targeted product sampling and microbiological testing, reviewing monitoring records, visual inspections, environmental monitoring, and performing internal or third-party audits.</p>
                  </SubSection>

                  <SubSection title="The Indispensable Role of Validation and Verification in the Dairy Industry">
                    <p>Validation and verification are paramount in the dairy sector, serving as the bedrock for ensuring product safety throughout the entire supply chain. These processes are instrumental in proactively identifying and addressing any weaknesses or gaps within food safety management systems, enabling timely corrective actions that prevent contamination or other safety issues from escalating. Their rigorous application is critical for mitigating the risk of foodborne illness outbreaks and for maintaining strict adherence to regulatory requirements, thereby safeguarding public health and consumer trust.</p>
                  </SubSection>

                   <SubSection title="Overview of Key Regulatory Frameworks">
                    <p>The dairy industry operates under a complex web of national and international regulations, all emphasizing the importance of validation and verification.</p>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>HACCP (Hazard Analysis and Critical Control Points):</strong> A systematic, preventive approach to food safety. Validation is a core principle, ensuring the system can control hazards, while verification confirms its ongoing effective operation.</li>
                        <li><strong>ISO 22000 (Food Safety Management Systems):</strong> An international standard for a comprehensive FSMS, integrating HACCP principles.</li>
                        <li><strong>USDA/FDA (United States):</strong> Both agencies mandate validation and verification, with specific requirements for processes like High Pressure Processing (HPP).</li>
                        <li><strong>EU Regulations:</strong> European Union regulations establish specific hygiene rules and mandate HACCP, including validation and verification procedures.</li>
                        <li><strong>FSSAI (India):</strong> FSSAI regulates the dairy industry in India, mandating that analytical methods and testing kits used for compliance must be validated according to its guidelines.</li>
                        <li><strong>Codex Alimentarius:</strong> An intergovernmental body that develops international food standards, recommending the use of validated control measures.</li>
                    </ul>
                  </SubSection>
                  
                  <div className="overflow-x-auto mt-6">
                    <Table>
                        <TableHeader><TableRow><TableHead colSpan={3} className="text-center">Table 1: Key Distinctions: Validation vs. Verification</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-bold">Feature</TableCell><TableCell className="font-bold">Validation</TableCell><TableCell className="font-bold">Verification</TableCell></TableRow>
                            <TableRow><TableCell>Definition</TableCell><TableCell>Gathering scientific and technical evidence to prove a control measure or plan is capable of controlling a specific food safety hazard.</TableCell><TableCell>Routine checks, tests, and observations to confirm a validated plan is implemented correctly and consistently.</TableCell></TableRow>
                            <TableRow><TableCell>Primary Question</TableCell><TableCell>"Is our plan effective?"</TableCell><TableCell>"Are we following our plan?"</TableCell></TableRow>
                            <TableRow><TableCell>Focus</TableCell><TableCell>Design and accuracy of the food safety plan; theoretical soundness.</TableCell><TableCell>Implementation and consistency of the food safety plan; practical adherence.</TableCell></TableRow>
                            <TableRow><TableCell>Timing</TableCell><TableCell>Primarily before implementation of a new process or control; also upon significant changes.</TableCell><TableCell>Ongoing, routine activities performed daily, weekly, or at other defined frequencies.</TableCell></TableRow>
                            <TableRow><TableCell>Methods (Examples)</TableCell><TableCell>Citing scientific literature, regulatory guidance, mathematical models, in-plant tests, expert consultation, challenge studies.</TableCell><TableCell>Calibration checks, product sampling, record review, visual inspections, environmental monitoring, audits.</TableCell></TableRow>
                        </TableBody>
                    </Table>
                  </div>
                </Section>
              </TabsContent>

              <TabsContent value="raw-milk" className="mt-0">
                <Section title="II. Validation and Verification in Raw Milk Handling">
                    <p>The journey of dairy products begins with raw milk, and its initial handling and reception are foundational to the safety and quality of all subsequent products. The intrinsic quality of raw milk is the single most critical determinant of the safety, quality, and shelf life of the final dairy products.</p>
                    <SubSection title="Raw Milk Quality Control: Methods and Validation Protocols">
                        <p>The raw milk reception dock (RMRD) is the first critical point. Initial quality checks, often called "platform tests," include:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Organoleptic Tests:</strong> Sensory evaluation of appearance, odor, and taste.</li>
                          <li><strong>Temperature Measurement:</strong> Vital indicator of bacterial quality. US regulations often require cooling to ≤10°C within 4 hours and ≤7.2°C within 2 hours after milking.</li>
                          <li><strong>Somatic Cell Count (SCC):</strong> Indicator of udder health. US limit is typically ≤750,000 cells/mL, while the EU limit for export is stricter at ≤400,000 cells/mL.</li>
                          <li><strong>Drug Residue Level:</strong> Zero tolerance for positive results for drug residues like beta-lactams.</li>
                          <li><strong>Other Rapid Tests:</strong> COB test, Alcohol test, and reduction tests (Resazurin, Methylene Blue) assess bacterial activity and stability.</li>
                        </ul>
                    </SubSection>
                    <SubSection title="Raw Milk Tanker Cleaning and Sanitation: Validation and Verification">
                        <p>Maintaining the hygienic integrity of raw milk tankers is crucial. Cleaning must occur at least once every 24 hours.</p>
                        <p><strong>A typical CIP cycle includes:</strong></p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Preliminary Pre-rinse (cold/lukewarm water).</li>
                          <li>Detergent Circulation (alkaline for organic matter, acid for mineral deposits).</li>
                          <li>Intermediate and Final Rinses.</li>
                          <li>Disinfection (thermal or chemical).</li>
                        </ol>
                        <p><strong>Validation</strong> of the cleaning process provides documented evidence that the procedure consistently achieves predetermined levels of cleanliness. <strong>Verification</strong> includes ongoing monitoring through visual inspection, microbiological testing (swabbing), rapid tests (ATP, protein), and chemical monitoring of detergents.</p>
                    </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="processing" className="mt-0">
                <Section title="III. Validation and Verification in Dairy Processing">
                  <p>Each processing stage, from thermal treatments to homogenization and fermentation, requires meticulous validation and ongoing verification to guarantee product integrity.</p>
                  <SubSection title="Thermal Processing (Pasteurization, UHT)">
                    <p><strong>Pasteurization:</strong> Validation involves demonstrating that the time/temperature regime is sufficient to reduce target microorganisms. Verification includes checking for alkaline phosphatase (ALP) enzyme inactivation, with a standard of &lt;350mU, and daily monitoring of temperature records.</p>
                    <p><strong>UHT Processing:</strong> Validation focuses on achieving commercial sterility (F-value) and maintaining aseptic conditions. Verification involves continuous monitoring of temperature and time, often using data loggers and specialized software.</p>
                  </SubSection>
                  <SubSection title="Non-Thermal Processing (HPP, PEF, UV)">
                    <p><strong>High Pressure Processing (HPP):</strong> Validation requires scientific support to demonstrate the desired pathogen reduction (e.g., 5-log reduction) at a specific pressure and hold time.</p>
                    <p><strong>Pulsed Electric Fields (PEF):</strong> Validation studies investigate the microbicidal effects, often in synergy with mild heat, to ensure safety and quality preservation.</p>
                    <p><strong>UV Treatment:</strong> For process water, validation must demonstrate compliance with regulations like the Pasteurized Milk Ordinance (PMO), ensuring an adequate UV dose is delivered.</p>
                  </SubSection>
                  <SubSection title="Homogenization and Fermentation">
                    <p><strong>Homogenization:</strong> Efficiency is verified through methods like the Farrall Index or particle size analysis. Food safety is indirectly assured by the preceding pasteurization step.</p>
                    <p><strong>Fermentation:</strong> A primary CCP is achieving a specific pH (e.g., &lt;4.6) within a validated time frame. Verification involves routine pH checks and sensory evaluation.</p>
                  </SubSection>
                  <SubSection title="Cleaning-in-Place (CIP) and Cleaning-out-of-Place (COP)">
                    <p>Effective cleaning and sanitation are crucial. CIP validation demonstrates that the cleaning procedure effectively removes residues. Verification involves real-time monitoring of parameters (temperature, conductivity, flow) and regular analytical testing (ATP, protein swabs).</p>
                  </SubSection>
                </Section>
              </TabsContent>

              <TabsContent value="storage" className="mt-0">
                <Section title="IV. Validation and Verification in Storage and Other Factors">
                  <p>A comprehensive FSMS extends to storage, distribution, and a range of supporting programs.</p>
                  <SubSection title="Cold Chain Management">
                    <p>Validation involves temperature mapping of storage areas and transport to identify hotspots and ensure uniformity. Verification includes continuous real-time monitoring of temperature at all control points.</p>
                  </SubSection>
                   <SubSection title="Equipment Calibration and Performance Verification">
                    <p>A robust calibration program ensures all monitoring and measuring equipment is accurate. Verification includes regular checks of thermometers, flow controls, and other critical devices according to a defined schedule.</p>
                  </SubSection>
                  <SubSection title="Microbiological Control Programs">
                    <p>Environmental Monitoring Programs (EMPs) verify the effectiveness of sanitation and hygiene practices. Microbial Challenge Studies are a validation method where products are intentionally inoculated to determine their ability to inhibit microbial growth over their shelf life.</p>
                  </SubSection>
                  <SubSection title="Allergen Management and Chemical Residue Monitoring">
                    <p>Allergen cleaning validation proves that cleaning processes effectively remove allergens, verified by allergen-specific tests (ELISA, LFD). Chemical residue monitoring programs validate and verify that products comply with established Maximum Residue Limits (MRLs).</p>
                  </SubSection>
                  <SubSection title="Shelf-Life Determination">
                    <p>The "Use-By" date is validated through analysis and challenge studies to ensure the product remains safe. Verification involves ongoing monitoring of product quality and consumer feedback.</p>
                  </SubSection>
                   <SubSection title="Documentation and Record-Keeping">
                    <p>Meticulous documentation is the backbone of any FSMS, providing the objective evidence needed for all validation and verification activities, ensuring compliance and traceability.</p>
                  </SubSection>
                </Section>
              </TabsContent>
              
              <TabsContent value="conclusion" className="mt-0">
                <Section title="V. Conclusions and Recommendations">
                    <p>Validation and verification are not merely regulatory hurdles but are the scientific and operational pillars upon which dairy food safety is built. They represent a proactive, evidence-based approach that extends across the entire dairy supply chain. While technological advancements offer increasingly rapid and objective methods for monitoring, the indispensable role of human expertise, training, and diligence remains paramount.</p>
                    <p><strong>Recommendations:</strong></p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Integrate Validation and Verification into a Continuous Improvement Cycle:</strong> View these as an iterative, ongoing process, not one-time events.</li>
                        <li><strong>Invest in Advanced Analytical Technologies and Data Management:</strong> Adopt rapid, objective methods for quality control and hygiene monitoring.</li>
                        <li><strong>Enhance Training and Competency Programs:</strong> Recognize that human factors are critical for the successful implementation of validated procedures.</li>
                        <li><strong>Adopt a Holistic, Systemic Approach to FSMS:</strong> Understand that food safety is a function of interconnected programs.</li>
                        <li><strong>Leverage International Standards for Global Competitiveness:</strong> Align FSMS with the most stringent global standards to ensure broad market access.</li>
                        <li><strong>Prioritize Challenge Studies for Product Development and Shelf-Life Validation:</strong> Use microbial challenge studies to scientifically determine product safety and support accurate shelf-life declarations.</li>
                    </ul>
                </Section>
              </TabsContent>

            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
