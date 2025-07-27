
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";


const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        <div className="space-y-4">{children}</div>
    </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{children}</h3>
);


export function QualityConceptModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Quality Concepts</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            Dairy Industry mein Quality sunishchit karne ke liye ek guide.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full pr-6 mt-4">
            <div className="prose max-w-none text-gray-700 text-base leading-relaxed">
                <p>Food industry ke liberalization ke baad, food safety concepts ka mahatva bahut badh gaya hai. Aaj, banaye ja rahe food products ki quality sabse zaroori hai. Food supply chains ke ekikaran (integration) ke liye ab food safety sunishchit karne ke naye tareeke chahiye. Dairy industry bhi ab in tareekon ko apna rahi hai taaki doodh aur doodh se bane products ki safety bani rahe. Food regulatory bodies ne bhi doodh aur doodh se bane products ke liye sakht kanoon aur standards banaye hain. Ab food safety sirf export hone wale products tak hi seemit nahi hai, balki gharelu (domestic) market aur consumers ke liye bhi zaroori hai. Isliye, public aur private sector dono ne apne production process ko nayi technologies ke saath badla hai aur product safety ke liye sakht kanoon lagoo kiye hain.</p>
                <p>Ek product ki safety aur quality poori chain mein, yaani pashu ke than (udder) se lekar consumer tak ya "farm to fork" tak, sunishchit ki jaani chahiye. Doodh ek jaldi kharab hone wali cheez hai aur ismein environmental factors ya kharab farm practices ki vajah se contamination ka khatra zyada hota hai. Isliye doodh utpadakon aur industry ke logon ko iski safety aur quality banaye rakhne ke liye bahut savdhan rehna padta hai, khaaskar jahan infrastructure theek na ho.</p>
                <p>Dairy industry ke liye quality assurance aur kuch quality concepts ko apnane se nimnlikhit fayde honge:</p>
                 <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Milawat ki samasya par rok lagegi, jiska asar doodh aur doodh se bane products ki quality par dikhega.</li>
                    <li>Gharelu aur antarrashtriya (international) consumers ka doodh aur doodh se bane products ki quality par vishwas badhega.</li>
                    <li>Dairy industry ko zyada revenue milega, jisse karmachariyon aur kisano ko fayda hoga.</li>
                </ul>

                <Section title="Quality Kya Hai?">
                    <p>ISO 9001:2005 ke anusaar, quality woh degree hai jisse kisi vastu ki anivarya visheshtayein (inherent characteristics) zarooraton ko poora karti hain. Yeh kisi product ya service ki sabhi features aur characteristics ka total hai jo uski batayi gayi ya samjhi gayi zarooraton ko poora karne ki क्षमता par nirbhar karta hai.</p>
                    <blockquote className="border-l-4 border-primary bg-muted p-4 my-4">
                        Quality $\propto$ 1 / Variability (Vividhata)
                    </blockquote>
                    <p>Quality ka vividhata (variability) ke saath ulta sambandh hai. Jaise-jaise kisi product ya service ki visheshtaon mein vividhata kam hoti hai, product ya service ki quality badh jaati hai.</p>
                    <p>Quality kai visheshtaon ko shaamil karti hai: Physical, Chemical, Technological, Bacteriological, Nutritional, Aesthetic (Dikhawat).</p>
                    <p>Ek consumer mukhya roop se kisi product ya service ke specifications par dhyan deta hai aur alag-alag manufacturers se milne wale usi product ki tulna karta hai.</p>
                </Section>

                <Section title="Quality Control (QC) Kya Hai?">
                    <p>Yeh un gatividhiyon ka set hai jo sunishchit karti hain ki products aur services quality ki zarooraton ko poora karte hain. Yeh ek laboratory function ke roop mein dekha jaata tha jiska uddeshya samples ka analysis karke taiyar maal (finished goods) ki end-point testing karna aur unhein accept ya reject karne ka faisla lena tha.</p>
                    <p>Quality control ek failure detection system hai jo niyamit antral par ek nirdharit lot se random samples lekar products mein dosh (flaws) aur trutiyon (errors) ko pehchanne ke liye testing technique ka upyog karta hai. Yeh detection par dhyan kendrit karta hai, roktham par nahi.</p>
                    
                    <SubHeading>Quality Control Department ki Zimmedariyan</SubHeading>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Raw material, additives, packaging material jaise supplies ka nirikshan (inspection) karna.</li>
                        <li>Production operations ka scheduling aur verification.</li>
                        <li>Production aur equipment ki efficiency (kshamata) ka maapan.</li>
                        <li>Finished product ka chemical, microbial, aur sensory analysis karna.</li>
                        <li>Storage aur shipping ko control karna.</li>
                        <li>Standard Operating Procedures (SOPs) aur specifications taiyar karna.</li>
                        <li>Safai (sanitation) ka nirikshan.</li>
                        <li>Kanooni niyamon ka paalan sunishchit karna.</li>
                        <li>Waste disposal (kachra prabandhan) ko control karna.</li>
                    </ol>
                </Section>
                
                <Section title="Quality Assurance (QA) Kya Hai?">
                     <p>Yeh un gatividhiyon ka set hai jo sunishchit karti hain ki products aur services ke quality levels theek se banaye rakhe jaate hain aur supplier aur customer ke quality issues theek se hal kiye jaate hain. Quality assurance galti aur dosh hone se rokne ki ek vidhi hai.</p>
                     <p>ISO, quality assurance ko "quality management ka woh hissa jo yeh vishwas dilane par kendrit hai ki quality ki zarooraten poori hongi" ke roop mein paribhashit karta hai. Yeh ek proactive (sakriya) drishtikon hai, reactive (pratikriyatmak) nahi. Product ko har kadam par monitor kiya jaata hai.</p>

                    <Table>
                        <TableCaption>Table 9.1: Quality Control vs. Quality Assurance</TableCaption>
                        <TableHeader>
                            <TableRow><TableHead>Quality Control</TableHead><TableHead>Quality Assurance</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Product par kendrit</TableCell><TableCell>Process par kendrit</TableCell></TableRow>
                            <TableRow><TableCell>Reactive (Pratikriyatmak) drishtikon</TableCell><TableCell>Proactive (Sakriya) drishtikon</TableCell></TableRow>
                            <TableRow><TableCell>Sudharatmak karrawai (Corrective action)</TableCell><TableCell>Roktham karrawai (Preventive action)</TableCell></TableRow>
                            <TableRow><TableCell>Quality test karne par focus</TableCell><TableCell>Quality banane par focus</TableCell></TableRow>
                            <TableRow><TableCell>Doshon ka pata lagana</TableCell><TableCell>Doshon ko rokna</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </Section>
                
                <Section title="Deming's Philosophy">
                    <p>William Edwards Deming ek American professor, statistician, aur management consultant the. Unhone Japan mein process control sikhaya aur yeh sandesh diya ki "quality sudhar kar, companies apne kharche kam kar sakti hain aur productivity aur market share badha sakti hain." Unke ideas ne Toyota aur Sony jaisi companies ko safal hone mein madad ki.</p>
                    <SubHeading>The Deming Cycle (PDCA Cycle)</SubHeading>
                    <p>Deming ne ek cycle prastavit kiya jise aksar PDCA cycle kehte hain. PDCA ek char-charan wali management technique hai, jiska matlab hai Plan-Do-Check-Act. Yeh concept process ki monitoring aur har kadam par asafalta ke mool karan ko samapt karne par kendrit hai.</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li><strong>Plan (Yojana Banayein):</strong> Company ke lakshya sthapit karein. Un lakshyon ko prapt karne ke liye strategy banayein.</li>
                        <li><strong>Do (Karein):</strong> Yojana ke anusaar kaam karein. Sahi raw material, additives aur packaging material ka upyog karein.</li>
                        <li><strong>Check (Jaanch Karein):</strong> Niyamit roop se jaanch karein ki sabhi protocols plan ke anusaar ho rahe hain ya nahi. Kisi bhi deviation ko theek karein.</li>
                        <li><strong>Act (Karrawai Karein):</strong> Jab koi non-compliance payi jaaye, to uske mool karan ko pehchanein aur use door karne ke liye plan banayein.</li>
                    </ul>
                </Section>

                <Section title="Juran’s Philosophy">
                    <p>Joseph Juran ek American engineer aur management consultant the. Unhone quality prapt karne ke liye ek vyapak sangathanik star ke drishtikon ke mahatva par jor diya. Unhone kaha ki quality management top management se shuru hokar neeche tak jaata hai.</p>
                     <SubHeading>The Juran Trilogy</SubHeading>
                     <p>Juran ne quality ke liye ek drishtikon diya jise Juran Trilogy kaha jaata hai. Is quality concept mein shamil hain:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Quality Planning:</strong> Product aur process design karna jo customer ki zarooraton ko poora karein.</li>
                        <li><strong>Quality Control:</strong> Process ko monitor karna aur performance ko standards ke saath tulna karke use theek karna.</li>
                        <li><strong>Quality Improvement:</strong> Lagatar behtar performance ke star tak pahunchne ke liye projects banana.</li>
                    </ul>
                    <p>Juran ke anusaar, quality ke mudde ka mukhya karan badlav ka virodh aur manav sambandh ki samasyayein thi.</p>
                </Section>

                <Section title="Total Quality Management (TQM)">
                    <p>TQM ek management philosophy hai jiska uddeshya customer satisfaction ke madhyam se long-term success prapt karna hai. TQM mein, ek organization ke sabhi sadasya processes, products, services, aur jis culture mein ve kaam karte hain, usmein lagatar sudhar karne mein bhaag lete hain. Yeh QC aur QA se aage badhkar poore organization ko quality ke prati zimmedar banata hai.</p>
                    <SubHeading>TQM ke Mukhya Siddhant</SubHeading>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li><strong>Customer-Focused:</strong> Customer ant mein quality ke level ko nirdharit karta hai. Unki zarooraton ko samajhna aur poora karna TQM ka mool hai.</li>
                        <li><strong>Total Employee Involvement:</strong> Sabhi employees, management se lekar shop floor workers tak, ek common goal ke liye kaam karte hain. Har koi quality ke liye zimmedar hai.</li>
                        <li><strong>Process-Centered:</strong> TQM process thinking par dhyan kendrit karta hai. Ek process steps ka ek series hai jo inputs ko lekar outputs banata hai. Process ko define karna aur uski performance ko monitor karna zaroori hai.</li>
                        <li><strong>Integrated System:</strong> Ek organization mein alag-alag departments ko ek saath milkar kaam karna chahiye. Horizontal processes jo departments ko jodte hain, TQM ke liye mahatvapurna hain.</li>
                        <li><strong>Strategic and Systematic Approach:</strong> Quality ko ek strategic management ka anivarya hissa maana jaata hai. Ek strategic plan banaya jaata hai jismein quality ko mool tatva ke roop mein shamil kiya jaata hai.</li>
                        <li><strong>Continuous Improvement (Kaizen):</strong> TQM lagatar sudhar (continuous improvement) par jor deta hai. Yeh ek "zero defects" ki taraf badhne ka prayas hai.</li>
                        <li><strong>Fact-Based Decision Making:</strong> Decisions data aur facts par aadharit hone chahiye, na ki anumanon par. Performance ko track karne ke liye data ka upyog kiya jaata hai.</li>
                        <li><strong>Communications:</strong> Effective communication TQM ka ek mahatvapurna hissa hai, jo morale banaye rakhta hai aur employees ko motivate karta hai.</li>
                    </ul>
                </Section>
                
                 <Section title="ISO Standards">
                    <p>ISO (International Organization for Standardization) ek vishvavyapi sangathan hai jo alag-alag industries ke liye standards banata hai. Dairy industry ke liye, ISO 9001 aur ISO 22000 sabse mahatvapurna hain.</p>
                    
                    <SubHeading>ISO 9001: Quality Management Systems (QMS)</SubHeading>
                    <p>ISO 9001 ek standard hai jo ek Quality Management System (QMS) ke liye avashyakataon ko nirdharit karta hai. Yeh is baat par kendrit hai ki ek organization lagatar aise products aur services pradan kare jo customer aur regulatory zarooraton ko poora karte hain. Yeh product ki quality par focus karta hai, na ki food safety par.</p>
                    <p><strong>Mukhya Tatva:</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li><strong>Customer Focus:</strong> Customer ki zarooraton ko samajhna aur unhein poora karne ka prayas karna.</li>
                        <li><strong>Leadership:</strong> Top management quality ke prati pratibaddh hona chahiye aur ek clear vision pradan karna chahiye.</li>
                        <li><strong>Engagement of People:</strong> Sabhi levels ke employees ko quality sudhar mein shamil karna.</li>
                        <li><strong>Process Approach:</strong> Gatividhiyon ko ek-doosre se jude processes ke roop mein samajhna aur manage karna.</li>
                        <li><strong>Improvement:</strong> Lagatar sudhar ko ek sthayi lakshya banana.</li>
                        <li><strong>Evidence-based Decision Making:</strong> Data aur information ke vishleshan par aadharit nirnay lena.</li>
                        <li><strong>Relationship Management:</strong> Suppliers jaise interested parties ke saath sambandhon ko manage karna.</li>
                    </ul>

                    <SubHeading>ISO 22000: Food Safety Management Systems (FSMS)</SubHeading>
                    <p>ISO 22000 ek food-specific standard hai jo ek Food Safety Management System (FSMS) ke liye avashyakataon ko batata hai. Yeh ISO 9001 ke management principles ko HACCP ke food safety principles ke saath jodta hai. Yeh "farm to fork" tak food chain ke sabhi sangathanon ke liye design kiya gaya hai.</p>
                    <p><strong>Mukhya Tatva:</strong></p>
                     <ul className="list-disc list-inside space-y-2">
                        <li><strong>Interactive Communication:</strong> Food chain ke sabhi staron par (suppliers, customers, regulators) communication bahut zaroori hai.</li>
                        <li><strong>System Management:</strong> Ek structured management system (jaise ISO 9001) ki zaroorat.</li>
                        <li><strong>Prerequisite Programs (PRPs):</strong> Ek saaf, hygienic environment banaye rakhne ke liye buniyadi shartein aur gatividhiyan.</li>
                        <li><strong>HACCP Principles:</strong> Food safety hazards ko control karne ke liye HACCP ke saat siddhanto ko shamil karna.</li>
                    </ul>
                    <p className="mt-4">Ek dairy plant ke liye, ISO 22000 certification yeh darshata hai ki unke paas food safety ke liye ek majboot aur vishvavyapi roop se maanyata prapt system hai, jo HACCP aur PRPs ko ek formal management framework mein ekatrit karta hai.</p>
                </Section>

                 <Section title="HACCP - Khatre ka Vishleshan aur Mahatvapurna Niyantran Bindu">
                    <p>HACCP (Hazard Analysis and Critical Control Points) ek systematic aur preventive tareeka hai food safety ke liye. Ismein production process mein hone wale biological (jaise bacteria), chemical (jaise chemicals), aur physical (jaise kaanch) khatron ko pehchana jaata hai, jo final product ko unsafe bana sakte hain. Phir in risks ko safe level tak kam karne ke liye measures banaye jaate hain.</p>
                    <SubHeading>HACCP ke Saat Siddhant</SubHeading>
                    <ol className="list-decimal list-inside space-y-3">
                        <li>
                            <strong className="text-blue-600">Khatre ka Vishleshan Karein (Conduct a Hazard Analysis):</strong>
                            <p className="ml-4">Dairy production ke har step ka gehra vishleshan karna, raw milk se lekar packaging tak. Har step par potential biological (Listeria, Salmonella), chemical (antibiotics, cleaning agents), aur physical (metal, glass) khatron ko pehchana jaata hai.</p>
                        </li>
                        <li>
                            <strong className="text-blue-600">Mahatvapurna Niyantran Bindu Nirdharit Karein (Determine CCPs):</strong>
                            <p className="ml-4">CCPs woh points hain jahan control lagakar food safety hazard ko roka, khatam, ya ek acceptable level tak kam kiya jaa sakta hai. Jaise, pasteurization ek CCP hai.</p>
                        </li>
                        <li>
                            <strong className="text-blue-600">Critical Limits Nirdharit Karein (Establish Critical Limits):</strong>
                            <p className="ml-4">Har CCP ke liye measurable limits set karna, jaise temperature (≥72°C), time (≥15 seconds), pH (≤4.6). Yeh limits safe aur unsafe conditions ke beech ki boundary hote hain.</p>
                        </li>
                        <li>
                            <strong className="text-blue-600">Monitoring Procedures Banayein (Establish Monitoring Procedures):</strong>
                            <p className="ml-4">Yeh observations ya measurements ka ek planned sequence hai, jisse yeh assess kiya ja sake ki ek CCP control mein hai ya nahi. Ismein specify hota hai ki kya, kaise, kab, aur kaun monitor karega.</p>
                        </li>
                        <li>
                            <strong className="text-blue-600">Sudharak Karyavahiyan Nirdharit Karein (Establish Corrective Actions):</strong>
                            <p className="ml-4">Yeh pehle se tay ki gayi karyavahiyan hain jo tab ki jaati hain jab monitoring se pata chalta hai ki critical limit se deviation ho gaya hai. Ismein product ko isolate karna aur aage ki karrawai karna shamil hai.</p>
                        </li>
                        <li>
                            <strong className="text-blue-600">Satyapan Procedures Banayein (Establish Verification Procedures):</strong>
                            <p className="ml-4">Yeh activities is baat ki pushti karti hain ki HACCP system sahi tarah se kaam kar raha hai. Ismein HACCP plan ka audit, equipment ka calibration, aur testing shamil hai.</p>
                        </li>
                        <li>
                            <strong className="text-blue-600">Record-Keeping aur Documentation Procedures Banayein (Establish Record-Keeping Procedures):</strong>
                            <p className="ml-4">Sahi aur poora documentation HACCP system ke prabhavi karyanvayan ke liye bahut zaroori hai. Ismein hazard analysis, monitoring logs, corrective actions, aur verification activities ke records shamil hote hain.</p>
                        </li>
                    </ol>
                </Section>

                <Section title="PRPs aur OPRPs">
                    <p>Yeh karyakram ek prabhavi HACCP system ki neev hain.</p>
                    <SubHeading>Prerequisite Programs (PRPs): Food Safety ki Neev</SubHeading>
                    <p>PRPs woh fundamental programs aur practices hain jo safe food produce karne ke liye zaroori basic environmental aur operational conditions banate hain. Inka prabhavi karyanvayan food chain mein khatron ke pravesh ki sambhavna ko kam karta hai.</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Good Manufacturing Practices (GMPs):</strong> Personnel practices, facility design, aur general operational procedures.</li>
                        <li><strong>Sanitation Standard Operating Procedures (SSOPs):</strong> Equipment ko saaf aur sanitize karne ke liye likhit procedures.</li>
                        <li><strong>Pest Control:</strong> Pests (keede, chuhe) ko rokne aur khatam karne ke upay.</li>
                        <li><strong>Personnel Hygiene and Training:</strong> Karmachariyon ke swasthya, swachhata, aur food safety par prashikshan.</li>
                        <li><strong>Supplier Approval Programs:</strong> Raw material ke liye approved suppliers ka upyog.</li>
                        <li><strong>Traceability and Recall Procedures:</strong> Zaroorat padne par products ko track aur recall karne ki pranali.</li>
                    </ul>

                    <SubHeading>Operational Prerequisite Programs (OPRPs): Targeted Control</SubHeading>
                    <p>OPRPs woh PRPs hain jinhe hazard analysis ne food safety hazards ko control karne ke liye bahut zaroori maana hai. Yeh CCPs se alag hain lekin inmein bhi specific monitoring aur corrective actions ki zaroorat hoti hai.</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Allergen Control Procedures:</strong> Cross-contamination ko rokne ke liye cleaning procedures.</li>
                        <li><strong>Raw Milk Storage Temperature Monitoring:</strong> Pasteurization se pehle milk mein microbial growth ko rokne ke liye.</li>
                        <li><strong>Cleaning-in-Place (CIP) Effectiveness Verification:</strong> CIP cycles ke parameters ko monitor karna.</li>
                        <li><strong>Environmental Monitoring Program (EMP):</strong> Processing environment mein pathogens ki jaanch karna.</li>
                    </ul>
                </Section>

                <Section title="Dairy Industry mein Mahatvapurna Niyantran Bindu (CCPs)">
                    <p>CCPs dairy processing chain mein specific, measurable points hain jahan food safety hazard ko roka ja sakta hai, khatam kiya ja sakta hai, ya ek acceptable level tak kam kiya ja sakta hai. In par control final product ki safety ke liye anivarya hai.</p>
                     <ol className="list-decimal list-inside space-y-3">
                        <li>
                            <strong>Pasteurization (Thermal Processing):</strong>
                            <p className="ml-4">Yeh sabse mahatvapurna CCP hai. Doodh ko ek nishchit taapman (jaise HTST ke liye ≥72°C) par ek nishchit samay (≥15 seconds) ke liye garam kiya jaata hai taaki sabhi pathogenic bacteria nasht ho jayein.</p>
                        </li>
                         <li>
                            <strong>Cooling of Pasteurized Product:</strong>
                            <p className="ml-4">Pasteurization ke baad, doodh ko jaldi se kam taapman (≤4°C) tak thanda karna zaroori hai taaki bache hue bacteria ki growth ko roka ja sake.</p>
                        </li>
                         <li>
                            <strong>Metal Detection/X-ray Inspection:</strong>
                            <p className="ml-4">Packaging se pehle, metal ke tukde ya anya bhautik khatron ka pata lagane ke liye iska upyog kiya jaata hai.</p>
                        </li>
                         <li>
                            <strong>pH Control (for Fermented Products):</strong>
                            <p className="ml-4">Dahi aur paneer jaise products ke liye, fermentation ke baad ek nishchit pH (jaise ≤4.6) tak pahunchna zaroori hai, jo anavashyak bacteria ki growth ko rokta hai.</p>
                        </li>
                    </ol>
                </Section>

            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

    