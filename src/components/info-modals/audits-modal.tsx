
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

export function AuditsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Audits in the Dairy Industry
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A comprehensive guide to food safety audits for dairy plants.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="intro" className="w-full flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="intro">Intro</TabsTrigger>
            <TabsTrigger value="regulatory">Frameworks</TabsTrigger>
            <TabsTrigger value="internal">Internal Audits</TabsTrigger>
            <TabsTrigger value="external">External Audits</TabsTrigger>
            <TabsTrigger value="focus_areas">Focus Areas</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="conclusion">Conclusion</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1 mt-4 pr-4">
            <div className="prose prose-sm max-w-none break-words">
                <TabsContent value="intro" className="mt-0">
                    <Section title="1. Executive Summary">
                        <p>The integrity of dairy products, from farm to consumer, hinges critically on robust food safety management systems, rigorously evaluated through both internal and external audits. This report provides a comprehensive examination of the audit landscape within the dairy industry, detailing the intricate requirements and operational mechanisms. It delineates the roles of national regulatory bodies, such as India's Food Safety and Standards Authority of India (FSSAI), and international standards, including ISO 22000 and Hazard Analysis and Critical Control Point (HACCP) principles. The structured processes for conducting these audits, their inherent benefits, and the strategic imperative of fostering a proactive approach to continuous audit readiness are also explored. The analysis highlights that effective internal auditing directly enhances external audit outcomes, leading to reduced regulatory scrutiny and improved operational efficiency. Furthermore, the evolution of regulatory frameworks towards systemic assurance, the critical role of data-driven verification, and the development of integrated practices for systemic resilience are discussed as foundational elements for ensuring food safety and quality in the dairy sector.</p>
                    </Section>
                    <Section title="2. Introduction to Food Safety Audits in Dairy Plants">
                        <p>Food safety audits represent a systematic, independent, and documented process meticulously designed to evaluate a dairy plant's adherence to specified food safety standards, regulatory mandates, and internal operational protocols. These assessments are indispensable for safeguarding public health, preserving product integrity, and ensuring the long-term viability of dairy businesses.</p>
                        <SubSection title="2.1. Purpose and Benefits of Audits">
                            <p>Food safety audits serve multiple critical functions within the dairy industry. Foremost, they ensure regulatory compliance, verifying that dairy plants operate in strict adherence to local, national, and international food safety laws and regulations. In India, for instance, FSSAI mandates specific licenses and compliance with detailed standards governing dairy product manufacturing, processing, and distribution.</p>
                            <p>Beyond mere compliance, audits are instrumental in quality assurance, confirming that established quality management systems effectively and consistently produce safe and high-quality dairy products. They play a pivotal role in risk mitigation by identifying potential hazards and control failures, thereby preventing foodborne disease outbreaks, reducing public health risks, and protecting a brand's reputation. A well-functioning audit program also contributes significantly to operational efficiency and cost reduction. By eliminating duplication of efforts and optimizing resource utilization, such programs can lead to lower labor costs and fewer customer complaints, ultimately enhancing overall product quality and minimizing the potential for costly recalls.</p>
                            <p>Finally, successful audits and certifications provide crucial third-party assurance to various stakeholders, including consumers and customers, that dairy products are safe and manufactured under stringent conditions. This external validation is increasingly becoming a contractual prerequisite for market access, underscoring the commercial importance of robust audit performance.</p>
                        </SubSection>
                        <SubSection title="2.2. Distinction Between Internal and External Audits">
                            <p>Food safety audits are broadly categorized into internal and external assessments, each serving distinct yet complementary roles.</p>
                            <p><b>Internal Audits (First-Party)</b> are self-assessments conducted by an organization's own personnel or a dedicated internal team. The primary objective of these audits is to identify inherent strengths and weaknesses within the food safety management system, uncover areas ripe for improvement, and ensure a state of readiness for upcoming external audits. Internal audits are often designed to be more stringent and rigorous than their external counterparts, reflecting a commitment to thorough self-examination.</p>
                            <p><b>External Audits</b>, conversely, are performed by entities outside the organization. These are further divided into two types:</p>
                            <ul className="list-disc pl-5">
                                <li><b>Second-Party Audits</b> occur when a customer assesses their supplier, or vice versa. These assessments typically concentrate on specific customer requirements or the integrity of the supply chain.</li>
                                <li><b>Third-Party Audits</b> are conducted by independent, accredited certification bodies (e.g., for ISO 22000, or Global Food Safety Initiative (GFSI) schemes such as SQF, BRC, IFS, FSSC 22000) or by governmental agencies. These audits typically result in formal certifications or official verification of regulatory compliance.</li>
                            </ul>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="regulatory">
                    <Section title="3. Regulatory Frameworks and International Standards">
                        <p>Dairy plants operate within an intricate framework of regulatory requirements and international standards, all designed to ensure food safety across the entire supply chain. Key frameworks include India's FSSAI regulations, the globally recognized ISO 22000, and the foundational principles of HACCP.</p>
                        <SubSection title="3.1. FSSAI Regulations for Dairy Plants (India)">
                            <p>The Food Safety and Standards Authority of India (FSSAI) serves as the primary regulatory body overseeing dairy products in India. Its mandate is to ensure the safety and quality of these products through comprehensive regulations.</p>
                            <p><b>Licensing and Registration Requirements:</b> A FSSAI license is a mandatory prerequisite for businesses engaged in the manufacturing or trading of dairy products. The licensing structure is tiered, dependent on the operational scale and annual turnover of the business.</p>
                            <p><b>Specific Standards for Milk and Dairy Products:</b> FSSAI establishes detailed compositional and quality standards for a wide array of dairy products to ensure consistency and integrity across the industry. These standards encompass various parameters for milk, fermented products, cheese, and more.</p>
                            <p><b>Processing, Packaging, and Warehousing Standards:</b> FSSAI provides comprehensive manuals that outline detailed guidelines and procedures for dairy product production, encompassing all stages from initial processing to final storage.</p>
                        </SubSection>
                        <SubSection title="3.2. ISO 22000: Food Safety Management System (FSMS)">
                            <p>ISO 22000 is an international standard developed by the International Organization for Standardization, providing a robust framework for a Food Safety Management System (FSMS).</p>
                             <p><b>Key Elements:</b> Interactive Communication, System Management, Prerequisite Programs (PRPs), and Hazard Analysis and Critical Control Point (HACCP) Principles.</p>
                        </SubSection>
                        <SubSection title="3.3. Hazard Analysis and Critical Control Point (HACCP)">
                            <p>HACCP is a preventative food safety system originally conceived by the Pillsbury Company for the United States space program. The seven principles of HACCP are: Conduct a Hazard Analysis, Determine Critical Control Points (CCPs), Establish Critical Limits, Establish Monitoring Procedures, Establish Corrective Actions, Establish Record Keeping Systems, and Establish Verification Procedures.</p>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="internal">
                     <Section title="4. Internal Audit Requirements and Process">
                        <p>Internal audits constitute a fundamental pillar of any effective Food Safety Management System (FSMS), serving as an essential tool for self-assessment and driving continuous improvement within dairy plants.</p>
                        <SubSection title="4.1. Purpose and Value of Internal Audits">
                            <p>Internal audits are designed to assess the effectiveness of Good Manufacturing Practices (GMPs), HACCP programs, and other food safety systems. They help in identifying strengths and weaknesses and ensure proactive readiness for external audits.</p>
                        </SubSection>
                        <SubSection title="4.2. Step-by-Step Process (PDCA Cycle)">
                            <p>Internal audits typically follow the Plan-Do-Check-Act (PDCA) cycle:</p>
                            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Plan:</h4>
                            <p>Establish audit objectives, scope, and schedule. A key part of planning is to integrate all relevant legal compliance requirements into the audit checklist. This includes national laws like FSSAI regulations and international standards like ISO 22000. The checklist must verify adherence to specific legal parameters for processing, packaging, and labeling.</p>
                            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Do:</h4>
                            <p>Conduct the audit through documentation review and on-site verification. Auditors must verify that practices not only follow internal SOPs but also comply with all applicable laws and regulations.</p>
                            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Check:</h4>
                             <p>Evaluate findings and report them accurately. Any deviation from legal standards must be classified as a major non-conformity and prioritized for immediate action.</p>
                            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Act:</h4>
                             <p>Develop and implement corrective action plans and follow up on their effectiveness to ensure both internal and legal compliance.</p>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="external">
                    <Section title="5. External Audit Requirements and Process">
                        <p>External audits provide independent assurance to stakeholders that a dairy plant's food safety system is robust, properly implemented, and effectively controls hazards. These audits are critical for legal compliance.</p>
                         <SubSection title="5.1. Types of External Audits">
                            <p><b>Second-Party Audits:</b> Conducted by a customer on their supplier.</p>
                            <p><b>Third-Party Audits:</b> Performed by independent, accredited organizations for certification (e.g., ISO, GFSI) or for regulatory compliance verification.</p>
                            <p><b>Regulatory Audits:</b> Conducted by government agencies like FSSAI to enforce legal standards. This is a direct check of legal compliance.</p>
                        </SubSection>
                         <SubSection title="5.2. The External Audit Process & Legal Compliance">
                            <p>The external audit process is fundamentally designed to verify legal compliance. The auditors check if the facility's operations meet all requirements of laws like the Food Safety and Standards Act. This includes checking licenses, product standards, and processing guidelines. The process generally includes application and planning, a thorough documentation review against legal requirements, an on-site verification audit to see the laws in practice, and a closing meeting where any legal non-conformities are presented.</p>
                        </SubSection>
                         <SubSection title="5.3. FSSAI Third-Party Audit System (India Specific)">
                            <p>FSSAI's third-party audit system is a formal mechanism to ensure legal compliance. Mandatory audits for high-risk categories like dairy are a legal requirement. The audit frequency itself is determined by the FSSAI based on performance, making continuous compliance a legal and operational necessity.</p>
                             <Table>
                                <TableHeader><TableRow><TableHead>Audit Score Range</TableHead><TableHead>Recommended Audit Frequency (Dairy)</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    <TableRow><td>81-100%</td><td>Once in 12 months</td></TableRow>
                                    <TableRow><td>51-80%</td><td>Once in 9 months</td></TableRow>
                                    <TableRow><td>&lt;50%</td><td>Once in 6 months</td></TableRow>
                                </TableBody>
                            </Table>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="focus_areas">
                    <Section title="6. Key Audit Focus Areas in Dairy Plants">
                        <p>Audits in dairy plants meticulously examine various critical operational areas:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Raw Milk Reception and Quality Control:</b> Checking temperature, microbial limits, and antibiotic residues.</li>
                            <li><b>Pasteurization Efficacy and Monitoring:</b> Verifying time-temperature parameters and ALP testing.</li>
                            <li><b>Clean-in-Place (CIP) Systems:</b> Ensuring proper maintenance and validation of cleaning processes.</li>
                            <li><b>Cold Chain Management and Storage:</b> Monitoring temperatures throughout storage and distribution.</li>
                            <li><b>Hygiene, Sanitation, and Pest Control:</b> Assessing facility cleanliness and pest management programs.</li>
                            <li><b>Equipment Maintenance and Calibration:</b> Verifying routine maintenance and calibration of all equipment.</li>
                            <li><b>Traceability and Allergen Management:</b> Ensuring robust systems for tracking products and managing allergens.</li>
                            <li><b>Personnel Hygiene and Training:</b> Assessing employee hygiene practices and training records.</li>
                        </ul>
                    </Section>
                </TabsContent>
                 <TabsContent value="challenges">
                     <Section title="7. Common Challenges and Best Practices for Audit Readiness">
                         <SubSection title="7.1. Common Challenges in Dairy Plant Audits">
                            <p>Challenges include regulatory complexity, difficulties in cleaning and sanitation, inadequate data management, operational interruptions, and maintaining consistency in employee practices.</p>
                        </SubSection>
                        <SubSection title="7.2. Best Practices for Continuous Audit Readiness">
                             <ul className="list-disc pl-5 space-y-2">
                                <li>Conduct ongoing internal risk assessments.</li>
                                <li>Stay updated with regulatory changes.</li>
                                <li>Organize all documentation in an accessible manner.</li>
                                <li>Use comprehensive audit checklists and conduct regular internal audits.</li>
                                <li>Analyze audit findings for trends to drive continuous improvement.</li>
                                <li>Provide comprehensive and regular training to all employees.</li>
                                <li>Leverage technology for asset management and real-time monitoring.</li>
                                <li>Invest in hygienically designed equipment (e.g., 3-A Standards).</li>
                            </ul>
                        </SubSection>
                         <SubSection title="7.3. Fostering a Strong Food Safety Culture">
                            <p>A strong food safety culture, driven by leadership commitment and employee engagement, is the foundation of audit readiness. It ensures that food safety is an integral part of daily operations.</p>
                        </SubSection>
                    </Section>
                </TabsContent>
                <TabsContent value="conclusion">
                     <Section title="8. Conclusion">
                        <p>Effective food safety management in dairy plants is a dynamic interplay of rigorous regulatory compliance, adherence to international standards like ISO 22000 and HACCP, and a proactive, continuous improvement mindset. A dairy plant's unwavering commitment to integrated audit practices is paramount for safeguarding public health, ensuring consistent product quality, and securing long-term business resilience.</p>
                    </Section>
                </TabsContent>
                 <TabsContent value="recommendations">
                    <Section title="9. Recommendations for Dairy Plant Operators">
                        <ul className="list-disc pl-5 space-y-2">
                           <li>Invest in a Robust, Integrated Food Safety Management System (FSMS).</li>
                           <li>Strengthen Internal Audit Programs.</li>
                           <li>Prioritize Comprehensive Documentation and Record-Keeping.</li>
                           <li>Embrace Technology for Operational Control and Data Management.</li>
                           <li>Foster a Strong Food Safety Culture.</li>
                           <li>Proactively Monitor Regulatory Changes and Industry Standards.</li>
                           <li>Strategically Engage with FSSAI's Third-Party Audit System.</li>
                           <li>Optimize Critical Control Points (CCPs) and Prerequisite Programs (PRPs).</li>
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
