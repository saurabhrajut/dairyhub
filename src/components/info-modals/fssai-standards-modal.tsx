
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Droplet, Wind, ShieldCheck, ChevronsRight, Component, Factory, FlaskConical, Snowflake, Thermometer, Beaker, Archive } from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";

const ProductCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
        <div className="bg-gray-100 p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6">
            {children}
        </div>
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-semibold mt-4 mb-3 text-gray-700 font-headline">{children}</h3>
);

const Note = ({ children }: { children: React.ReactNode }) => (
     <p className="text-xs italic mt-2 text-gray-500">*{children}</p>
);

const topics = [
    { value: "general", label: "General", icon: BookOpen, component: GeneralContent },
    { value: "milk", label: "Milk", icon: Droplet, component: MilkContent },
    { value: "khoa", label: "Khoa", icon: Component, component: KhoaContent },
    { value: "cream", label: "Cream", icon: Droplet, component: CreamContent },
    { value: "fat-products", label: "Fat Products", icon: FlaskConical, component: FatProductsContent },
    { value: "butter", label: "Butter", icon: Factory, component: ButterContent },
    { value: "milk-powders", label: "Milk Powders", icon: Wind, component: MilkPowdersContent },
    { value: "fermented", label: "Fermented", icon: Beaker, component: FermentedContent },
    { value: "ice-cream", label: "Ice Cream", icon: IceCreamIcon, component: IceCreamContent },
    { value: "chhana-paneer", label: "Paneer", icon: PaneerIcon, component: ChhanaPaneerContent },
    { value: "cheese", label: "Cheese", icon: Thermometer, component: CheeseContent },
    { value: "casein", label: "Casein", icon: FlaskConical, component: CaseinContent },
    { value: "lactose", label: "Lactose", icon: Snowflake, component: LactoseContent },
    { value: "whey-protein", label: "Whey Protein", icon: Archive, component: WheyProteinContent },
    { value: "colostrum", label: "Colostrum", icon: ShieldCheck, component: ColostrumContent },
];


export function FssaiStandardsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 font-headline">
            FSSAI Standards for Dairy Products
          </DialogTitle>
           <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.label : "A guide to official dairy standards."}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Topics
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
                        <ActiveComponent />
                    </div>
                </ScrollArea>
            </div>
        ) : (
             <ScrollArea className="flex-1 mt-4 sm:pr-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
                    {topics.map(topic => (
                        <button
                        key={topic.value}
                        onClick={() => setActiveTopic(topic.value)}
                        className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                        >
                        <topic.icon className="w-8 h-8 text-primary mr-4 shrink-0" />
                        <div>
                            <span className="font-semibold font-headline text-card-foreground">{topic.label}</span>
                        </div>
                        </button>
                    ))}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}


// Content Components
function GeneralContent() {
    return (
        <ProductCard title="2.1.1 General Standards for Milk and Milk Products">
            <p className="font-medium leading-relaxed">General standard milk aur milk products ke liye overarching definitions aur consumers ya aage ki processing ke liye offer kiye jaane wale foods ke sambandh mein dairy terms ke upyog par guidance pradan karta hai.</p>
            <SectionTitle>Paribhashayein (Definitions)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Ubalna (Boiling):</b> Milk ko lagatar garam karke atmospheric pressure par ubalne ki prakriya ko sandarbhit karta hai.</li>
                <li><b>Anukriti (Analogue):</b> Ek product jismein milk se prapt na hone wale ghatak, anshik ya poorn roop se, kisi bhi milk ghatak ko replace karte hain aur antim utpad organoleptically aur/ya functionally ek milk product jaisa dikhta hai.</li>
                <li><b>Sanyukt Dudh Utpad (Composite milk product):</b> Ek product jiska milk, milk products, ya milk ghatak antim utpad mein matra ke mamle mein ek avashyak hissa hain.</li>
                <li><b>Dudh (Milk):</b> Ek swasth dudharu pashu se poorn doodh nikalne se prapt samanya mamari srav, bina kisi yog ya nishkarshan ke, jab tak anyatha pradan na kiya gaya ho. Yeh colostrum se mukt hona chahiye.</li>
                <li><b>Dudh Utpad (Milk Product):</b> Milk ke processing se prapt ek product, jismein anumati prapt khadya additives aur anya samagri ho sakti hai.</li>
                <li><b>Pasteurization:</b> Milk ka ek microbicidal heat treatment kam se kam 63°C par 30 minute ya 72°C par 15 second ke liye.</li>
                <li><b>Punar sanyojit dudh (Recombined milk):</b> Milk fat aur milk-solids-non-fat ke sanrakshit roopon ke sanyojan se prapt ek product, peyjal ke saath ya bina.</li>
                <li><b>Punar nirmit dudh (Reconstituted milk):</b> Milk ke sukhe ya kendrit roop mein peyjal milane se prapt ek product.</li>
                <li><b>Nasbandi (Sterilisation):</b> Milk ya milk products ko vyavsayik roop se sterile banane ke liye uchch tapman (kam se kam 115°C par 15 minute) par garmi ka anuprayog.</li>
                <li><b>Ati Uchch Tapman (UHT) upchar:</b> Milk ko kam se kam 135°C par ek second ya adhik ke liye ek nirantar pravah mein garam karna aur phir aseptic sthitiyon mein pack karna.</li>
            </ul>
            <SectionTitle>Samanya Siddhant (General Principles)</SectionTitle>
            <p className="font-medium leading-relaxed">Foods ko is tarah se varnan ya prastut kiya jana chahiye ki dairy terms ka sahi upyog sunishchit ho, upbhoktaon ko gumrah hone se bachaya ja sake, aur uchit vyapar prathaon ko sunishchit kiya ja sake.</p>
        </ProductCard>
    )
}

function MilkContent() {
    return (
        <ProductCard title="2.1.2 Standard for Milk">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Prajaati pehchana gaya dudh (Species identified milk):</b> Ek vishisht janwar (jaise, gay, bhains) se prapt dudh.</li>
                <li><b>Mishrit Dudh (Mixed Milk):</b> Prajaati pehchane gaye dudh ka koi bhi sanyojan.</li>
                <li><b>Manakikrit dudh (Standardized milk):</b> Vishisht vasa aur thos-na-vasa pratishat ke liye manakikrit dudh.</li>
                <li><b>Kam Lactose ya Lactose mukt dudh:</b> Dudh jismein lactose ki matra hydrolysis ke madhyam se kafi kam kar di gayi hai.</li>
            </ul>
            <SectionTitle>Sanrachnatmak Avashyaktaein (Minimum)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Doodh ka Varg (Class of Milk)</TableHead>
                            <TableHead>Nyuntam Dudh Vasa (pratishat, m/m)</TableHead>
                            <TableHead>Nyuntam Dudh Thos-na-Vasa (SNF) (pratishat, m/m)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Bhains ka Dudh (Buffalo Milk)</td><td>5.0</td><td>9.0</td></TableRow>
                        <TableRow><td>Gaay ka Dudh (Cow Milk)</td><td>3.2</td><td>8.3</td></TableRow>
                        <TableRow><td>Bakri ya Bhed ka Dudh (Goat or Sheep Milk)</td><td>3.0</td><td>8.0</td></TableRow>
                        <TableRow><td>Unt ka Dudh (Camel Milk)</td><td>2.0</td><td>6.0</td></TableRow>
                        <TableRow><td>Mishrit Dudh (Mixed Milk)</td><td>4.5</td><td>8.5</td></TableRow>
                        <TableRow><td>Manakikrit Dudh (Standardized Milk)</td><td>4.5</td><td>8.5</td></TableRow>
                        <TableRow><td>Toned Dudh (Toned Milk)</td><td>3.0</td><td>8.5</td></TableRow>
                        <TableRow><td>Double Toned Dudh (Double Toned Milk)</td><td>1.5</td><td>9.0</td></TableRow>
                        <TableRow><td>Skimmed Dudh (Skimmed Milk)</td><td>0.5 se adhik nahi</td><td>8.7</td></TableRow>
                        <TableRow><td>Full Cream Dudh (Full Cream Milk)</td><td>6.0</td><td>9.0</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <SectionTitle>Khadya Yogaj (Food Additives)</SectionTitle>
            <p className="font-medium leading-relaxed">Doodh mein koi khadya yogaj nahi hona chahiye, sivay 2.1.2 (1)(c) mein nirdisht utpadon mein anumati prapt carry-over khadya yogajon aur sterilized dudh mein vishisht yogajon ke.</p>
            <SectionTitle>Swachhata (Hygiene)</SectionTitle>
            <p className="font-medium leading-relaxed">Utpadon ko nirdharit swachhata manakon ke anusar taiyar aur handle kiya jana chahiye aur sukshmjiviy avashyaktaon ke anuroop hona chahiye.</p>
            <SectionTitle>Labeling</SectionTitle>
            <p className="font-medium leading-relaxed">Doodh ka varg aur ushma upchar label par ghoshit kiya jana chahiye. Yadi koi ushma upchar nahi kiya gaya hai to doodh ke naam se pehle "Kachcha (Raw)" likha jana chahiye.</p>
        </ProductCard>
    )
}

function KhoaContent() {
    return (
        <ProductCard title="2.1.6 Standard for Khoa">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <p className="font-medium leading-relaxed">Khoa ya Mawa ek utpad hai jo kisi bhi prakar ke doodh se anshik roop se pani hatakar prapt kiya jata hai, jismein doodh thos padarth joda ja sakta hai ya nahi, niyantrit paristhitiyon mein garam karke.</p>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Avashyakta (Requirement)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Kul thos, nyuntam, % (m/m)</td><td>55.0</td></TableRow>
                        <TableRow><td>Doodh vasa, nyuntam, % (m/m), shushk padarth aadhar par</td><td>30.0</td></TableRow>
                        <TableRow><td>Kul raakh, adhiktam, % (m/m)</td><td>6.0</td></TableRow>
                        <TableRow><td>Anumey amlata (% lactic acid ke roop mein), adhiktam, %</td><td>0.9</td></TableRow>
                    </TableBody>
                </Table>
            </div>
        </ProductCard>
    )
}

function CreamContent() {
    return (
        <ProductCard title="2.1.7 Standard for Cream and Malai">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Cream:</b> Vasa se bharpur taral utpad, fat-in-skimmed milk ke emulsion ke roop mein, jo gay ya bhains ke doodh ya mishran se bhautik alagav dwara prapt kiya jata hai.</li>
                <li><b>Malai:</b> Vasa se bharpur utpad jo doodh ko ubalne aur thanda karne se taiyar kiya jata hai, jismein ek aghulanshil dravyaman ki upasthiti hoti hai, mukhya roop se vasa aur vikrt protein.</li>
            </ul>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <p className="font-medium leading-relaxed">Utpad mein nyuntam 10.0% (m/m) doodh vasa hona chahiye. Fermented aur amlikrt cream ke alawa, antim utpad ki amlata 0.15% (lactic acid ke roop mein) se adhik nahi honi chahiye.</p>
            <SectionTitle>Labeling</SectionTitle>
            <p className="font-medium leading-relaxed">Bhojan ka naam nirdisht kiya jana chahiye, aur vasa ki matra ka ullekh kiya jana chahiye (jaise, "Kam vasa wali cream," "Madhyam vasa wali cream," "Uchch vasa wali cream").</p>
        </ProductCard>
    )
}

function FatProductsContent() {
    return (
        <ProductCard title="2.1.8 Standard for Milk Fat Products">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <p className="font-medium leading-relaxed">Vasa yukt utpad jo keval doodh se prakriyaon dwara prapt kiye jate hain jiske parinamaswaroop pani aur doodh ke thos-na-vasa lagbhag poori tarah se hat jate hain.</p>
            <SectionTitle>Sanrachnatmak Avashyaktaein (Compositional Requirements)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Doodh Vasa, Makkhan Tel</TableHead>
                            <TableHead>Nirjal Dudh Vasa, Nirjal Makkhan Tel</TableHead>
                            <TableHead>Ghee</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami, adhiktam, % (m/m)</td><td>0.4</td><td>0.1</td><td>0.5</td></TableRow>
                        <TableRow><td>Doodh vasa, nyuntam, % (m/m)</td><td>99.6</td><td>99.8</td><td>99.5</td></TableRow>
                        <TableRow><td>Butyro-refractometer Reading 40°C par</td><td>40.0 se 44.0</td><td>40.0 se 44.0</td><td>40.0 se 44.0</td></TableRow>
                        <TableRow><td>Reichert Meissl Value, nyuntam</td><td>24.0</td><td>24.0</td><td>24.0</td></TableRow>
                        <TableRow><td>FFA Oleic Acid ke roop mein, adhiktam %</td><td>0.4</td><td>0.3</td><td>2.0</td></TableRow>
                        <TableRow><td>Baudouin Test</td><td>Nakaratmak</td><td>Nakaratmak</td><td>Nakaratmak</td></TableRow>
                        <TableRow><td>Iodine Value</td><td>-</td><td>-</td><td>25-38</td></TableRow>
                        <TableRow><td>Saponification value</td><td>-</td><td>-</td><td>205-235</td></TableRow>
                        <TableRow><td>Beta-sitosterol ki upasthiti</td><td>Anupasthit</td><td>Anupasthit</td><td>Anupasthit</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <SectionTitle>Ghee ki Vasa Aml Sanrachna (Fatty Acid Composition of Ghee)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Vasa Aml ka Prakar</TableHead>
                            <TableHead>Vasa Aml Sanrachna (pratishat)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>C4:0, Butyric acid</td><td>1-5</td></TableRow>
                        <TableRow><td>C6:0, Hexanoic acid</td><td>0.5-2.2</td></TableRow>
                        <TableRow><td>C16:0, Hexadecanoic acid</td><td>22-38</td></TableRow>
                        <TableRow><td>C18:0, Octadecanoic acid</td><td>8-19</td></TableRow>
                        <TableRow><td>C18:1 (cis 9) 9-Octadecenoic acid (Oleic acid)</td><td>19-32</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <Note>Ghee mein vanaspati tel ki milawat ka pata lagane ke liye RP-HPLC dwara nirdharan ki vidhi jaisa ki FSSAI karyalay aadesh dwara adhisuchit kiya gaya hai: File No. 1-90/FSSAI/SP (MS&A)/2009 dinank 25 March, 2019</Note>
        </ProductCard>
    )
}

function ButterContent() {
    return (
        <ProductCard title="2.1.9 Standard for Butter">
            <SectionTitle>Paribhasha (Definition)</SectionTitle>
            <p className="font-medium leading-relaxed">Makkhan ek vasa yukt utpad hai, mukhya roop se ek pani-mein-tel emulsion jo keval doodh ya doodh utpadon se prapt kiya jata hai. Yeh do prakar ka ho sakta hai: Table butter aur White butter/Cooking butter.</p>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Table butter</TableHead>
                            <TableHead>White butter / Cooking butter</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami, adhiktam, % (m/m)</td><td>16.0</td><td>-</td></TableRow>
                        <TableRow><td>Doodh vasa, nyuntam, % (m/m)</td><td>80.0</td><td>76.0</td></TableRow>
                        <TableRow><td>Doodh thos-na-vasa, adhiktam, % (m/m)</td><td>2.0</td><td>-</td></TableRow>
                        <TableRow><td>Sadharan namak, adhiktam, % (m/m)</td><td>3.0</td><td>-</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <Note>Makkhan se nikale gaye vasa ko Ghee ke Reichert Meissl value aur Butyro-refractometer reading ke manakon ko poora karna hoga.</Note>
        </ProductCard>
    )
}

function MilkPowdersContent() {
    return (
        <ProductCard title="2.1.10 Standard for Milk Powders and Cream Powder">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <p className="font-medium leading-relaxed">Doodh powder aur cream powder doodh utpad hain jo doodh ya cream se anshik roop se pani hatakar prapt kiye jate hain, jiske parinamaswaroop ek powdered roop milta hai.</p>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Whole Milk Powder</TableHead>
                            <TableHead>Partly Skimmed Milk Powder</TableHead>
                            <TableHead>Skimmed Milk Powder</TableHead>
                            <TableHead>Cream Powder</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami*, adhiktam, % (m/m)</td><td>5.0</td><td>5.0</td><td>5.0</td><td>5.0</td></TableRow>
                        <TableRow><td>Doodh vasa, % (m/m)</td><td>Nyuntam 26.0</td><td>{">1.5 aur <26.0"}</td><td>1.5 (adhiktam)</td><td>42.0 (nyuntam)</td></TableRow>
                        <TableRow><td>Doodh thos-na-vasa mein doodh protein, nyuntam, % (m/m)</td><td>34.0</td><td>34.0</td><td>34.0</td><td>34.0</td></TableRow>
                        <TableRow><td>Aghulanshilta Index, adhiktam, ml</td><td>2.0</td><td>2.0</td><td>2.0</td><td>-</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <Note>Nami ki matra mein lactose ke crystallization ka pani shamil nahi hai. Protein ki matra kul nitrogen nirdharit karke 6.38 se guna karke nikali jati hai.</Note>
        </ProductCard>
    )
}

function FermentedContent() {
    return (
        <ProductCard title="2.1.13 Standard for Fermented Milk Products">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Kinvidit Dudh (Fermented Milk):</b> Sukshmajeevon dwara doodh ke kinvan se prapt hota hai, jiske parinamaswaroop pH kam ho jata hai. Ismein Dahi aur Yoghurt shamil hain.</li>
                <li><b>Chakka:</b> Dahi ya Yoghurt se anshik roop se whey hatakar prapt kinvidit aur kendrit doodh utpad.</li>
                <li><b>Shrikhand:</b> Chakka se prapt ardh-mulayam kendrit sanyukt doodh utpad, jismein doodh vasa aur chini milayi jati hai.</li>
            </ul>
            <SectionTitle>Sanrachnatmak Visheshtayein (Yoghurt aur Flavoured Dahi)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Yoghurt aur Flavoured Dahi</TableHead>
                            <TableHead>Partly skimmed Yoghurt / Flavoured Partly Skimmed Dahi</TableHead>
                            <TableHead>Skimmed Yoghurt / Flavoured Skimmed Dahi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Doodh Vasa, % (m/m)</td><td>3.0 se kam nahi aur 15 se adhik nahi</td><td>0.5 se adhik aur 3.0 se kam</td><td>0.5 (adhiktam)</td></TableRow>
                        <TableRow><td>Doodh thos-na-vasa, nyuntam, % (m/m)</td><td>8.5</td><td>8.5</td><td>8.5</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <SectionTitle>Sanrachnatmak Visheshtayein (Chakka)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Chakka</TableHead>
                            <TableHead>Skimmed Milk Chakka</TableHead>
                            <TableHead>Full Cream Chakka</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Kul thos, nyuntam, % (m/m)</td><td>30.0</td><td>20.0</td><td>28.0</td></TableRow>
                        <TableRow><td>Doodh vasa, % (m/m), shushk aadhar par</td><td>33.0 (nyuntam)</td><td>5.0 (adhiktam)</td><td>38.0 (nyuntam)</td></TableRow>
                    </TableBody>
                </Table>
            </div>
        </ProductCard>
    )
}

function IceCreamContent() {
    return (
        <ProductCard title="2.1.14 Standard for Ice Cream, Kulfi, etc.">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <p className="font-medium leading-relaxed">Doodh ya anya doodh-utpado se bane pasteurized mishran ko mithaas aur anya anumati prapt gair-dairy samagri ke saath jamakar prapt kiye gaye jame hue doodh utpad.</p>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Ice cream ya Kulfi</TableHead>
                            <TableHead>Madhyam Vasa Ice Cream ya Kulfi</TableHead>
                            <TableHead>Kam Vasa Ice Cream ya Kulfi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Kul Thos, nyuntam, % (m/m)</td><td>36.0</td><td>30.0</td><td>26.0</td></TableRow>
                        <TableRow><td>Wajan, nyuntam, g/l</td><td>525.0</td><td>475.0</td><td>475.0</td></TableRow>
                        <TableRow><td>Doodh Vasa, % (m/m)</td><td>10.0 (nyuntam)</td><td>2.5 se adhik aur 10.0 se kam</td><td>2.5 (adhiktam)</td></TableRow>
                        <TableRow><td>Doodh Protein, nyuntam, % (m/m)</td><td>3.5</td><td>3.5</td><td>3.0</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <SectionTitle>Doodh Baraf ya Doodh Lolly (Milk Ice or Milk Lolly)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Avashyakta (Requirement)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Kul Thos, nyuntam, % (m/m)</td><td>20.0</td></TableRow>
                        <TableRow><td>Doodh Vasa, adhiktam, % (m/m)</td><td>2.0</td></TableRow>
                        <TableRow><td>Doodh Protein, nyuntam, % (m/m)</td><td>3.5</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <Note>Protein ki matra kul nitrogen nirdharit karke 6.38 se guna karke nikali jati hai.</Note>
        </ProductCard>
    )
}

function ChhanaPaneerContent() {
    return (
        <ProductCard title="2.1.16 Standard for Chhana and Paneer">
            <SectionTitle>Paribhasha (Definition)</SectionTitle>
            <p className="font-medium leading-relaxed">Chhana ya Paneer doodh ke kisi bhi prakar se anumati prapt amlon aur garmi ke saath avkshepan dwara prapt utpad hai.</p>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Chhana ya Paneer</TableHead>
                            <TableHead>Madhyam vasa Chhana ya Paneer</TableHead>
                            <TableHead>Kam vasa Chhana ya Paneer</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami, adhiktam, % (m/m)</td><td>65.0 (Chhana ke liye) / 60.0 (Paneer ke liye)</td><td>65.0 (Chhana ke liye) / 60.0 (Paneer ke liye)</td><td>70.0 (Chhana ke liye) / 70.0 (Paneer ke liye)</td></TableRow>
                        <TableRow><td>Doodh vasa, % (m/m), shushk aadhar par</td><td>50.0 (nyuntam)</td><td>20.0 se adhik aur 50.0 se kam</td><td>20.0 (adhiktam)</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <SectionTitle>Labeling</SectionTitle>
            <p className="font-medium leading-relaxed">Naam sanrachna ke anusar ghoshit kiya jana chahiye. "Kam Vasa" ya "Madhyam Vasa" utpadon ko uchit ghoshnaon ke saath seal band package mein becha jana chahiye.</p>
        </ProductCard>
    )
}

function CheeseContent() {
    return (
        <ProductCard title="2.1.17 Standard for Cheese and Cheese Products">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Cheese:</b> Doodh protein ke jamne se prapt ek paka hua ya kachcha utpad.</li>
                <li><b>Processed Cheese:</b> Ek ya adhik prakar ke cheese ko peesne, milane, pighlane aur emulsify karne se prapt kiya jata hai, garmi aur emulsifying agents ki sahayata se.</li>
            </ul>
            <SectionTitle>Sanrachnatmak Avashyaktaein (Udahaaran)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Utpad</TableHead>
                            <TableHead>Nami, Adhiktam, % (m/m)</TableHead>
                            <TableHead>Doodh vasa, Nyuntam, % (shushk aadhar par)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Hard-Pressed Cheese</td><td>39.0</td><td>48.0</td></TableRow>
                        <TableRow><td>Cheddar Cheese</td><td>39.0</td><td>48.0</td></TableRow>
                        <TableRow><td>Mozzarella Cheese</td><td>60.0</td><td>35.0</td></TableRow>
                        <TableRow><td>Processed Cheese</td><td>47.0</td><td>40.0</td></TableRow>
                        <TableRow><td>Processed Cheese Spread</td><td>60.0</td><td>40.0</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <SectionTitle>Labeling</SectionTitle>
            <p className="font-medium leading-relaxed">Bhojan utpad ka naam 'cheese' ya ek su-sthapit kism ka naam hona chahiye. Satah-upcharit cheese ke liye vishesh ghoshnaein avashyak hain (jaise, "NATAMYCIN SE SATAH UPCHARIT").</p>
        </ProductCard>
    )
}

function CaseinContent() {
    return (
        <ProductCard title="2.1.18 Standard for Edible Casein Products">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li><b>Edible Acid Casein:</b> Skimmed milk ke acid se avkshepit coagulum ko alag karne, dhone aur sukhane se prapt utpad.</li>
                <li><b>Edible Rennet Casein:</b> Gair-pashu rennet dwara jamaye gaye skimmed milk se whey alag karne ke baad bache coagulum ko dhone aur sukhane ke baad prapt utpad.</li>
                <li><b>Edible Caseinate:</b> Edible casein ya casein curd coagulum ki khadya-grade udasinikaran agents ke saath pratikriya ke baad sukhakar prapt kiya gaya shushk utpad.</li>
            </ul>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Edible Acid Casein</TableHead>
                            <TableHead>Edible Rennet Casein</TableHead>
                            <TableHead>Edible Caseinate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami, adhiktam, % (m/m)</td><td>12.0</td><td>12.0</td><td>8.0</td></TableRow>
                        <TableRow><td>Doodh vasa, adhiktam, % (m/m)</td><td>2.0</td><td>2.0</td><td>2.0</td></TableRow>
                        <TableRow><td>Doodh protein, nyuntam, % (m/m), shushk aadhar par</td><td>90.0</td><td>84.0</td><td>88.0</td></TableRow>
                        <TableRow><td>Protein mein casein, nyuntam, % (m/m)</td><td>95.0</td><td>95.0</td><td>95.0</td></TableRow>
                        <TableRow><td>Lactose, adhiktam, % (m/m)</td><td>1.0</td><td>1.0</td><td>1.0</td></TableRow>
                        <TableRow><td>Kul raakh P2O5 sahit, % (m/m)</td><td>2.5 (adhiktam)</td><td>7.5 (nyuntam)</td><td>-</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <Note>Protein ki matra kul nitrogen nirdharit karke 6.38 se guna karke nikali jati hai. Lactose ki matra nirjal lactose ke roop mein vyakt ki jati hai.</Note>
        </ProductCard>
    )
}

function LactoseContent() {
    return (
        <ProductCard title="2.1.20 Standards for Edible Lactose">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <p className="font-medium leading-relaxed">Lactose ek safed se halka peela crystalline, halka meetha disaccharide chini hai jo doodh mein paya jata hai.</p>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameters</TableHead>
                            <TableHead>Limits</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Kul nami, adhiktam, % (m/m)</td><td>6.0</td></TableRow>
                        <TableRow><td>Lactose, nyuntam, % (m/m) shushk aadhar par</td><td>99.0</td></TableRow>
                        <TableRow><td>Sulphated raakh, adhiktam, % (m/m)</td><td>0.3</td></TableRow>
                    </TableBody>
                </Table>
            </div>
        </ProductCard>
    )
}

function WheyProteinContent() {
    return (
        <ProductCard title="2.1.22 Whey Protein Concentrate">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <p className="font-medium leading-relaxed">Whey se gair-protein ghatakon ko bhautik alagav taknikon dwara hatakar prapt kiya gaya ek utpad, jiske baad sukhaya jata hai.</p>
            <SectionTitle>Sanrachnatmak Visheshtayein (Compositional Specifications)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameters</TableHead>
                            <TableHead>Limits</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami, adhiktam, % (m/m)</td><td>6.0</td></TableRow>
                        <TableRow><td>Doodh Protein, nyuntam, % (m/m)</td><td>35.0</td></TableRow>
                        <TableRow><td>Doodh Vasa, adhiktam, % (m/m)</td><td>10</td></TableRow>
                        <TableRow><td>Jale hue kan, adhiktam</td><td>Disc B (15 mg)</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <Note>Protein ki matra kul nitrogen nirdharit karke 6.38 se guna karke nikali jati hai.</Note>
        </ProductCard>
    )
}

function ColostrumContent() {
    return (
        <ProductCard title="2.1.23 Standards for Cow or Buffalo Colostrum and Colostrum products">
            <SectionTitle>Varnan (Description)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
            <li><b>Colostrum:</b> Ek gay ya bhains ke mammary granthiyon se prapt lacteal srav jo prasav ke baad teen se panch din tak prapt hota hai.</li>
            <li><b>Colostrum-aadhaarit utpad:</b> Colostrum se bane processed utpad.</li>
            <li><b>Colostrum powder:</b> Colostrum ko sukhakar prapt kiya gaya ek colostrum-aadhaarit utpad.</li>
            </ul>
            <SectionTitle>Sanrachnatmak Visheshtayein (Colostrum)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameters</TableHead>
                            <TableHead>Avashyaktaein (Requirements)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami, adhiktam, % (m/m)</td><td>80.0</td></TableRow>
                        <TableRow><td>Protein, nyuntam, % (m/m)</td><td>7.0</td></TableRow>
                        <TableRow><td>Vasa, nyuntam, % (m/m)</td><td>4.0</td></TableRow>
                        <TableRow><td>Immunoglobulins, nyuntam, % (m/m)</td><td>1.8</td></TableRow>
                        <TableRow><td>Lactoferrin, nyuntam, % (m/m)</td><td>0.2</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <SectionTitle>Sanrachnatmak Visheshtayein (Colostrum Powder)</SectionTitle>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameters</TableHead>
                            <TableHead>Avashyaktaein (Requirements)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><td>Nami, adhiktam, % (m/m)</td><td>4.0</td></TableRow>
                        <TableRow><td>Protein, nyuntam, % (m/m)</td><td>40.0</td></TableRow>
                        <TableRow><td>Vasa, nyuntam, % (m/m)</td><td>17.5</td></TableRow>
                        <TableRow><td>Immunoglobulins, nyuntam, % (m/m)</td><td>12.5</td></TableRow>
                        <TableRow><td>Lactoferrin, nyuntam, % (m/m)</td><td>1.2</td></TableRow>
                    </TableBody>
                </Table>
            </div>
            <Note>Protein ki matra kul nitrogen nirdharit karke 6.38 se guna karke nikali jati hai.</Note>
        </ProductCard>
    )
}
