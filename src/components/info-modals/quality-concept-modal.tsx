
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

            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
