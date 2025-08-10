"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const SectionTitle = ({ title, id }: { title: string, id: string }) => (
    <h2 id={id} className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">
        {title}
    </h2>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed prose-sm max-w-none">
            {children}
        </div>
    </div>
);


export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-center">The Indian Dairy Industry</DialogTitle>
          <DialogDescription className="text-center">A Comprehensive Overview of a Global Leader</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 mt-4">
             <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>India's dairy industry is a crucial economic pillar, playing a leading role in global milk production. With an estimated market size of INR 18.97 trillion (USD 135.30 billion) in 2024, the sector is projected to reach INR 57.00 trillion (USD 274.09 billion) by 2033, exhibiting a Compound Annual Growth Rate (CAGR) of 9.33% to 14.00%. This industry contributes 4-5% to the national Gross Domestic Product (GDP) and provides livelihoods to over 80 million rural households, including a large number of women.</p>
                <p>The growth of this sector is primarily driven by a burgeoning population, rising incomes, and increasing health consciousness, leading to a surge in demand for value-added products. Dairy cooperatives, particularly the Anand Pattern model established under the visionary leadership of Dr. Verghese Kurien's 'Operation Flood,' have been the backbone of this industry. These cooperatives provide farmers with direct market access, technical assistance, and economic empowerment, thereby increasing rural incomes and promoting social equality.</p>

                <SectionTitle title="Overview of the Indian Dairy Industry" id="overview" />
                <SubSection title="Market Size and Growth Trajectory">
                    <p>The Indian dairy industry is renowned for its vastness and dynamic growth, serving as a critical component of the nation's agricultural economy. In 2024, the market size of this industry reached <strong>INR 18.97 trillion</strong> (approximately USD 135.30 billion). Looking ahead, the industry is projected to reach <strong>INR 57.00 trillion</strong> (approximately USD 274.09 billion) by 2033, indicating a robust expansion opportunity with projected high Compound Annual Growth Rates (CAGR) ranging from <strong>9.33% to 14.00%</strong>.</p>
                </SubSection>
                <SubSection title="Contribution to National Economy">
                    <p>The dairy sector plays a pivotal role in the Indian economy, contributing approximately <strong>4-5% to the national Gross Domestic Product (GDP)</strong>. It directly provides livelihoods to over <strong>80 million rural households</strong>, the majority of whom are small and marginal farmers, and significantly empowers women in rural communities.</p>
                </SubSection>
                 <SubSection title="Milk Production and Consumption Trends">
                    <p>India is the world's largest milk producer, accounting for <strong>23-24% of global milk production</strong>. Milk production has seen a Compound Annual Growth Rate of 5.62% from 146.31 million tonnes (MT) in 2014-15 to 239.3 MT in 2023-24. Per capita milk availability has significantly improved, reaching <strong>459 grams per day</strong> in 2022-23, which is considerably higher than the global average of 322 grams per day.</p>
                    <p>Uttar Pradesh is the largest milk-producing state. Buffaloes dominate milk production at 45.32%, but indigenous and non-descript cows have shown a significant increase in production.</p>
                </SubSection>
                <SubSection title="Key Driving Factors, Challenges and Opportunities">
                    <p><strong>Driving Factors:</strong> Growth is propelled by population growth, rising incomes, and increasing health consciousness. Government initiatives like the National Animal Disease Control Program and the Animal Husbandry Infrastructure Development Fund also provide crucial support.</p>
                    <p><strong>Challenges:</strong> Key challenges include a slowdown in milk production growth, low productivity per animal (India: 987 kg/lactation vs. Global: 2038 kg/lactation), high feed costs, severe fodder shortages, and the impacts of climate change.</p>
                    <p><strong>Opportunities:</strong> Significant opportunities lie in the value-added products segment (cheese, yogurt, ice cream), the fast-growing A2 milk market, and leveraging technology for efficiency gains. There is also immense potential for organized private players and startups in the D2C space.</p>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Characteristic</TableHead>
                                    <TableHead>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>Market Size (2024)</TableCell><TableCell>INR 18.97 Trillion / USD 135.30 Billion</TableCell></TableRow>
                                <TableRow><TableCell>Projected Market Size (by 2033/2034)</TableCell><TableCell>INR 57.00 Trillion / USD 274.09 Billion</TableCell></TableRow>
                                <TableRow><TableCell>Total Milk Production (2023-24)</TableCell><TableCell>239.3 Million Tonnes</TableCell></TableRow>
                                <TableRow><TableCell>India's Share in Global Milk Production</TableCell><TableCell>23-24% (Largest in the world)</TableCell></TableRow>
                                <TableRow><TableCell>Per Capita Milk Availability (2022-23)</TableCell><TableCell>459 grams per day</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </SubSection>

                <SectionTitle title="Role of Dairy Cooperatives" id="cooperatives" />
                 <SubSection title="Operation Flood and the White Revolution">
                    <p>The Operation Flood, also known as White Revolution in India was launched in 1970s to make India self dependent in milk production. Dr Verghese Kurien is known as the father of The White Revolution in India. White Revolution is associated with a sharp increase in the milk production. Operation Flood has helped dairy farmers direct their own development, placing control of the resources they create in their own hands. A National Milk Grid links milk producers throughout India with consumers in over 700 towns and cities, reducing seasonal and regional price variations while ensuring that the producer gets fair market prices in a transparent manner on a regular basis.</p>
                     <h5 className="font-bold mt-2">Objectives:</h5>
                     <ul className="list-disc pl-5">
                        <li>Increase milk production ("a flood of milk").</li>
                        <li>Augment rural incomes.</li>
                        <li>Reasonable prices for consumers.</li>
                     </ul>
                      <h5 className="font-bold mt-2">Phases of Operation Flood:</h5>
                     <ul className="list-disc pl-5">
                        <li><strong>Phase I (1970–1980):</strong> Financed by the sale of skimmed milk powder and butter oil donated by the European Union (then the European Economic Community) through the World Food Program.</li>
                        <li><strong>Phase II (1981–1985):</strong> Increased the milk-sheds from 18 to 136; urban markets expanded the outlets for milk to 290. By the end of 1985, a self-sustaining system of 43,000 village cooperatives with 4.25 million milk producers were covered.</li>
                        <li><strong>Phase III (1985–1996):</strong> Enabled dairy cooperatives to expand and strengthen the infrastructure required to procure and market increasing volumes of milk. This phase added 30000 new dairy cooperatives which led to 73000.</li>
                     </ul>
                </SubSection>
                <SubSection title="The Anand Pattern: Three-Tier Structure">
                    <p>The success of Operation Flood is built on the Anand Pattern, a three-tier cooperative structure:</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Village Dairy Cooperative Society (DCS):</strong> The base unit where farmers sell milk, with payments based on quality.</li>
                        <li><strong>District Cooperative Milk Producers' Union:</strong> Owned by DCSs, it processes and markets milk products.</li>
                        <li><strong>State Federation:</strong> The apex marketing body for the unions in a state.</li>
                    </ul>
                </SubSection>
                 <SubSection title="Farmer Empowerment and Socio-Economic Impact">
                    <p>Cooperatives have been the most significant step in improving the milk marketing system, increasing farmers' income by an average of 20% for members. They provide crucial support like veterinary care, AI, and balanced feed. This model has profoundly empowered women by establishing numerous women-led societies and has helped break down social barriers like caste.</p>
                </SubSection>

                <SectionTitle title="New Trends: Modernization and Startups" id="trends" />
                 <SubSection title="Modernization Initiatives and Technological Advancements">
                    <p>The industry is adopting advanced technologies like <strong>Automated Milking Systems (AMS)</strong>, IoT devices for livestock management (smart collars, rumen boluses), and AI-powered precision feeding. Blockchain is emerging for quality assurance and traceability. Government schemes like 'White Revolution 2.0' and the Animal Husbandry Infrastructure Development Fund (AHIDF) are further propelling this transformation.</p>
                </SubSection>
                <SubSection title="Rise of Dairy Startups and Innovation">
                     <p>A significant shift is occurring with B2C startups leveraging digital platforms for direct-to-consumer (D2C) delivery. These startups focus on value-added and niche products, catering to modern consumers' demand for convenience and health.</p>
                     <p>Prominent startups include <strong>Country Delight, Stellapps, Happy Milk, and Milk Mantra</strong>, who are using innovative models to deliver fresh, organic, or specialized dairy products directly to customers.</p>
                </SubSection>
                
                 <SectionTitle title="Dairy Export Status" id="exports" />
                 <SubSection title="Current Export Status and Challenges">
                    <p>Despite being the largest producer, India's share in global dairy trade is less than 0.25%. In FY 2023-24, exports were approximately <strong>INR 2,260.94 crore (USD 272.64 million)</strong>. The primary export products are ghee and butter (59.32%), followed by milk powder and cheese.</p>
                    <p>Exports are limited mainly due to high domestic consumption and trade policies that protect domestic farmers from foreign competition. The main export markets are neighboring countries and the Middle East, including the UAE, Bangladesh, and Saudi Arabia.</p>
                </SubSection>

                 <SectionTitle title="Conclusion and Future Outlook" id="conclusion" />
                 <p>The Indian dairy industry holds immense potential. Future growth depends on addressing key challenges like low per-animal productivity, high feed costs, and infrastructure deficits. A multi-pronged approach focusing on genetic improvement, sustainable practices, technological adoption, and strengthening the cold chain is essential. By leveraging innovation and addressing these impediments, India can solidify its position as a global dairy leader, ensuring food security and economic prosperity for millions.</p>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
