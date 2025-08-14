
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const milkChemistryTabs = [
    { value: "composition", label: "Composition" },
    { value: "proteins", label: "Proteins" },
    { value: "fat", label: "Fat" },
    { value: "lactose", label: "Lactose" },
    { value: "minerals", label: "Minerals" },
    { value: "vitamins", label: "Vitamins" },
    { value: "properties", label: "Properties" },
];

const physicalProperties = [
    { property: "Colour and optical properties", value: "White to yellow opaque", details: "Opacity is due to light scattering by fat globules and casein micelles. Yellow color is due to carotene from feed." },
    { property: "Flavour", value: "Pleasant, slightly sweet", details: "Combined effect of components. Off-flavors can develop from feed, bacterial growth, or oxidation." },
    { property: "Refractive Index (at 20°C)", value: "1.3440 - 1.3485", details: "Used for quick estimation of total solids and to detect water adulteration." },
    { property: "Density (at 20°C)", value: "Cow: 1.028-1.032 g/mL, Buffalo: 1.030-1.034 g/mL", details: "Milk is denser than water due to its solid content (SNF). Higher fat content slightly lowers density." },
    { property: "Viscosity (at 25°C)", value: "~2.0 cP", details: "About twice as viscous as water. Depends on temperature and composition (fat, protein). Homogenization increases viscosity." },
    { property: "Surface Tension (at 20°C)", value: "50 dyne/cm", details: "Lower than water (72 dyne/cm) due to surfactants like proteins and free fatty acids." },
    { property: "Freezing Point", value: "-0.512 to -0.575 °C", details: "A reliable indicator for detecting added water, as added water raises the freezing point closer to 0°C." },
    { property: "Boiling Point", value: "100.17 °C", details: "Slightly higher than water due to dissolved solids." },
    { property: "Acidity (Titratable)", value: "Cow: 0.14-0.16% LA, Buffalo: 0.17-0.18% LA", details: "Natural acidity is due to casein, phosphates, citrates, etc. Not due to lactic acid in fresh milk." },
    { property: "pH", value: "6.5 - 6.7", details: "Slightly acidic. Lower pH suggests bacterial action (souring)." },
    { property: "Heat Stability", value: "Varies, depends on salt balance", details: "Ability to withstand high temperatures without coagulation. Crucial for sterilized milk products." },
];

const InfoBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
    </div>
);

export function MilkChemistryModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl md:text-3xl text-center">Chemistry of Milk</DialogTitle>
          <DialogDescription className="text-center">A deep dive into the science of milk.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="composition" className="flex flex-col flex-1 min-h-0">
            <ScrollArea className="flex-shrink-0">
              <TabsList className="grid w-full h-auto grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
                  {milkChemistryTabs.map(tab => (
                      <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">{tab.label}</TabsTrigger>
                  ))}
              </TabsList>
            </ScrollArea>
            <ScrollArea className="flex-1 mt-4 pr-4">
                <TabsContent value="composition" className="mt-0">
                    <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="What is Milk? (Doodh Kya Hai?)">
                            <p><strong>Scientific Definition:</strong> “Milk is the normal secretion of the mammary glands of mammals, obtained without any colostrum, and is composed of water, fat, proteins, lactose, minerals, and vitamins in a naturally balanced form.”</p>
                            <p><strong>FSSAI Definition:</strong> “Doodh ka matlab hai ek swasth doodh dene wale pashu se poori tarah se doodh nikalne se prapt सामान्य mammary srav, jismein koi milavat ya nikasi na ki gayi ho, jo liquid doodh ke roop mein upbhog ke liye ya aage ki processing ke liye ho.”</p>
                            <p>Doodh ek complex biological fluid hai jo teen alag-alag phases mein dekha ja sakta hai:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>Emulsion:</strong> Fat globules paani mein bikhre rehte hain.</li>
                            <li><strong>Colloidal Suspension:</strong> Casein protein micelles paani mein suspended rehte hain.</li>
                            <li><strong>True Solution:</strong> Lactose, whey proteins, minerals, aur vitamins paani mein poori tarah ghule rehte hain.</li>
                            </ul>
                        </InfoBlock>
                        
                        <InfoBlock title="Milk Constituents (Doodh ke Ghatak)">
                            <p>Doodh ek complex colloidal system hai jo multiple components ka mixture hota hai. Har constituent milk ki nutritional aur functional properties ko define karta hai.</p>
                            
                            <h5 className="font-bold mt-4">1. Water (Paani) – 87-88%</h5>
                            <p>Doodh ka sabse bada hissa paani hota hai, jo milk ko fluid nature deta hai aur baki constituents ke liye solvent ka kaam karta hai.</p>

                            <h5 className="font-bold mt-4">2. Fat (Lipids) – 3-6%</h5>
                            <p>Milk fat ek emulsion (fat droplets dispersed in water) ki tarah hota hai. Ye doodh ka sabse energy-rich component hai (9 kcal/g) aur flavor, texture aur fat-soluble vitamins (A, D, E, K) provide karta hai.</p>
                           
                            <h5 className="font-bold mt-4">3. Protein – 3-4%</h5>
                            <p>Milk protein high biological value ka hota hai aur essential amino acids provide karta hai. Yeh do prakar ke hote hain: Casein (~80%) aur Whey (~20%).</p>
                            
                            <h5 className="font-bold mt-4">4. Lactose (Milk Sugar) – 4.5-5.0%</h5>
                            <p>Yeh doodh ka primary carbohydrate hai (glucose + galactose) jo doodh ko halka meetha swaad deta hai. Bacteria isse ferment karke lactic acid banate hain, jo dahi jaise products ke liye zaroori hai.</p>

                            <h5 className="font-bold mt-4">5. Minerals & Salts (Ash) – 0.7-0.9%</h5>
                            <p>Doodh minerals ka ek accha source hai, jismein Calcium (Ca) aur Phosphorus (P) pramukh hain. Yeh milk ki stability aur pH ko maintain karne mein bhi madad karte hain.</p>
                           
                            <h5 className="font-bold mt-4">6. Vitamins</h5>
                            <p><strong>Fat-Soluble:</strong> A, D, E, K. <strong>Water-Soluble:</strong> B-Complex (B1, B2, B12) and C.</p>

                            <h5 className="font-bold mt-4">7. Enzymes</h5>
                            <p><strong>Lipase</strong> (fat breakdown), <strong>Lactoperoxidase</strong> (natural antimicrobial), <strong>Alkaline Phosphatase</strong> (pasteurization indicator).</p>
                        </InfoBlock>
                    </div>
                </TabsContent>
                <TabsContent value="proteins" className="mt-0">
                    <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                       <InfoBlock title="Milk Proteins Overview">
                            <p>The caseins, whey proteins and non-protein nitrogen (NPN) make up the nitrogen content of milk (76%, 18% and 6% respectively). The Rowland fraction method facilitates the separation of caseins, whey proteins and NPN. Casein precipitates at pH 4.6 and is thus separated from whey nitrogen. Total proteins may be separated from whey NPN at pH 5 with sodium acetate and acetic acid.</p>
                        </InfoBlock>

                        <InfoBlock title="Casein (~80% of Milk Protein)">
                            <p>Casein constitutes about 80% of the total proteins present in milk. In fresh milk, casein is held in colloidal suspension. Casein contributes in a big way to the viscosity and white colour of milk. Free casein is almost insoluble in water but is rapidly dissolved by dilute alkalies. Casein in milk can be precipitated with dilute acids, salts or rennet. All caseins precipitate at pH 4.6. Casein particles are termed as ‘casein micelles’. Biologically, casein serves as a carrier for calcium and phosphate to nurture the young calf and form a clot in the stomach to aid easier digestion. The micelle also contains citrate, minor ions, lipase and plasmin enzymes, and entrapped milk serum.</p>
                            
                            <h5 className="font-bold mt-4">Casein Fractions</h5>
                            <p>Caseins can be further classified into three major groups as alpha (α), beta (β) and kappa (κ). Alpha casein is further sub-divided into αs1 and αs2 fractions.</p>

                            <h5 className="font-bold mt-4">Casein Coagulation (Curd Formation)</h5>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Acid Coagulation:</strong> Jab doodh ka pH 4.6 tak kam hota hai, toh casein micelles apna charge kho dete hain aur judkar gel banate hain (e.g., Paneer, Yogurt).</li>
                                <li><strong>Enzymatic Coagulation:</strong> Rennet enzyme κ-casein ko todta hai, jisse micelles unstable ho jaate hain aur calcium ki maujoodgi mein judkar curd banate hain (e.g., Cheese).</li>
                            </ul>
                        </InfoBlock>

                        <InfoBlock title="Whey Proteins (~20% of Milk Protein)">
                            <p>The greenish-yellow clear liquid that separates out of milk after precipitation of caseins at pH 4.6 is called whey and the proteins contained therein are whey proteins. These globular proteins are more water soluble than caseins and are prone to heat denaturation. Denaturation increases their water holding capacity. Native whey proteins have good gelling and whipping properties.</p>
                            <h5 className="font-bold mt-4">Whey Protein Fractions</h5>
                            <p><strong>Beta–lactoglobulins</strong> comprises approximately half the total whey proteins. It is coagulated by heat, which is why colostrum curdles when heated. It binds fat-soluble vitamins making them more available to the body and provides an excellent source of essential and branched chain amino acids. These help prevent muscle breakdown and spare glycogen during exercise. Beta–lactoglobulins may also be helpful in controlling certain liver conditions such as cirrhosis.</p>
                            <p><strong>Alpha lactalbumin</strong> is not coagulated by rennet or acids but is precipitated by heat. The extent of coagulation depends on temperature of holding, salt concentration and pH of milk. It is the primary protein found in human breast milk and is a good source of essential amino acids (particularly tryptophan) and branched chain amino acids. This is the only whey protein component capable of binding calcium.</p>
                            <p>The <strong>immunoglobulins</strong> provide protective effect to the offspring against enteropathogenic micro-organisms. It is the predominant whey protein component found in colostrum. Bovine milk contains only traces of IgA. <strong>Bovine serum albumin</strong> is a large sized protein with a good essential amino acid profile and fat binding properties.</p>
                        </InfoBlock>
                         <InfoBlock title="Milk Enzymes and Non-Protein Nitrogenous (NPN) Substances">
                             <p>Some indigenous enzymes that have been isolated from milk are lipase, aryl esterase, alkaline phosphatase, acid phosphatase, xanthine oxidase, peroxidase, protease, amylase, catalase and lactase. The most significant group is the hydrolases, comprising of lipoprotein lipase, plasmin and alkaline phosphatase. Milk contains some NPN substances that constitute about 5 percent of the total nitrogen in milk. Some examples of this group are amino acids, creatine, urea, uric acid, creatinine and hipuric acid.</p>
                            <p><strong>Lactoferrin (LF)</strong> is a single-chain, metal-binding glycoprotein. It is a red coloured iron-binding protein and may also mediate some effects of inflammation and have a role in regulating various components of the immune system. It has antibacterial, antifungal, anti-endotoxin, and antiviral activities. It inhibits enteropathogenic organisms due to its ability to bind iron, as iron is an essential nutrient often required for bacterial growth. It promotes the growth of beneficial bacteria such as bifidobacteria.</p>
                            <p><strong>Lactoperoxidase</strong> is an oxido-reductase enzyme that occurs in milk, saliva, tears, cervical mucus. It is a relatively heat resistant enzyme whose activity remains sufficient even after pasteurization. Cow milk has 1.4 units/ml of lactoperoxidase, whereas buffalo milk has 0.9 units/ml. The thermal stability of buffalo milk lactoperoxidase is higher than that of cow milk. Lactoperoxidase has been widely researched for its ability to preserve raw milk.</p>
                            <p><strong>Lysozyme</strong> is an enzyme that is abundantly present in the mucosal membranes that line the human nasal cavity and tear ducts. It can also be found in high concentration in egg white. Lysozyme destroys bacterial cell walls by hydrolyzing the polysaccharide component of the cell wall. Human milk contains 0.4 g/L of lysozyme, an enzyme that contributes to antibacterial activity in human milk.</p>
                        </InfoBlock>
                    </div>
                </TabsContent>
                <TabsContent value="fat" className="mt-0">
                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="Milk Fat">
                            <p>Fat is the most commercially significant and most variable constituent of milk. Fat content varies from breed to breed and also among individuals of the same breed, the variation being caused by many factors. Most of the (> 95%) milk fat exists in the form of globules of 0.1-15 µ diameter (cow milk fat – ~ 3-8 µ, buffalo milk fat – ~ 4-10 µ). A thin membrane (8-10 nm thick) covers these liquid fat droplets. The properties of this membrane are vastly different from both milk fat and plasma. The fat globule membrane is rich in phospholipids and also contains lipoproteins and other glycerides. These phospholipids are involved in the oxidation of milk. The membrane decreases the lipid-serum interface to very low values, 1-2.5 mN/m, preventing the globules from immediate flocculation and coalescence, as well as protecting them from enzymatic action. Fat comprises of different glycerides of low melting point. The composition of fat varies with the feed plan, nutrition, stage of lactation, breed and species, the first being the most important.</p>
                            <p>The size and number of fat globules vary depending on the breed of the animal and method of milking. The globules become smaller and more numerous as lactation advances. Machine milking produces fat globules of more uniform size than hand milking. Homogenization reduces the fat globules to a small size and reduces the tendency of separation during storage. The larger the size of the globules, the quicker they rise as cream to the top of the milk and easier it is to churn such cream into butter. For this reason buffalo milk fat is more easily churned into butter than cow milk fat. The milk of animals in advance lactation is less suitable for being churned into butter. Milk containing small globules is, however, more suitable for cheese making, since less fat is lost in whey. Milk fat is quite bland in taste and imparts smoothness and palatability to fat-containing dairy products.</p>
                            <p>In milk fat, butyric, caproic, caprylic and capric acids, present in high proportions, are characterized by strong odours and flavour. These volatile acids are not present in such high proportion in other naturally occurring fats. The fatty acid content of milk fat can also be influenced by the amount and type of feeds consumed, stage of lactation and breed of the animal. Milk fat also contains cholesterol, thus differentiating it from vegetable fats, which contain phytosterols. Milk contains 0.1 to 0.23% phospholipids, viz. lecithin, phosphatidyl serine, sphingomyelin, inositol, cerebrosides etc. Some of these phospholipids serve as antioxidants in prolonging the shelf-life of ghee.</p>
                            <p>The colour of fat depends upon its carotene content and varies with the species, breed and feed of the animal. The yellow colour of cow milk is due to the carotene. Buffalo milk does not contain carotene. Ghee from cow fed on an abundant green fodder is more yellow than when fed on dry food. Similarly some breeds such as Jersey and Guernsey may produce milk deep yellow in colour.</p>
                            <p>Saturated fatty acids (no double bonds), such as myristic, palmitic and stearic constitute two thirds of milk fatty acids. Oleic acid is the most abundant unsaturated fatty acid in milk with one double bond.</p>
                        </InfoBlock>
                    </div>
                </TabsContent>
                <TabsContent value="lactose" className="mt-0">
                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="Lactose (Milk Sugar)">
                           <p>Lactose is the major milk sugar or carbohydrate. Fresh milk also contains other carbohydrates in small amounts, including glucose, galactose, and oligosaccharides. Lactose is present in true solution and, therefore, goes into whey when caseins are separated. Lactose constitutes 4.8 to 5.2% of milk, 52% of milk SNF, and 70% of whey solids. Lactose can be quickly fermented by micro-organisms to lactic acid and is, therefore, essential in the manufacture of cultured dairy products like cheese, dahi and butter-milk. It contributes to the nutritive value of milk and milk products, and is responsible for the texture and miscibility of some milk products. Lactose imparts colour and flavour to dairy products heated to high temperatures. Sucrose is six times sweeter than lactose.</p>
                           <p>Lactose is a disaccharide made up of two monosaccharides, glucose and galactose. Lactose is hydrolyzed by the enzyme µ-galactosidase (lactase), the results being the two monosaccharides, increased sweetness and depressed freezing point. People suffering from lactose intolerance lack this enzyme and therefore, cannot digest lactose. This sugar crystallizes in an alpha form and results in the defect called sandiness in ice cream.</p>
                        </InfoBlock>
                    </div>
                </TabsContent>
                <TabsContent value="minerals" className="mt-0">
                     <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="Minerals & Salts (Ash)">
                           <p>All 22 minerals considered essential to the human diet are present in milk. Milk is an important source of dietary calcium, magnesium, phosphorus, potassium, selenium, and zinc. In milk, approximately 67% of the calcium, 35% of the magnesium, and 44% of the phosphate are bound to salts within the casein micelle and the rest are soluble in the serum phase. Milk contains very small amounts of copper, iron, manganese and sodium. Other minerals such as aluminium, boron, zinc, cobalt, iodine, fluorine, molybdenum, nickel, lithium, barium, strontium and silica are also present in milk, but in minute amounts.</p>
                        </InfoBlock>
                    </div>
                </TabsContent>
                <TabsContent value="vitamins" className="mt-0">
                     <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="Vitamins">
                            <p>Vitamins are organic substances that are essential to normal life processes, but cannot be synthesized by the body. They occur in very small concentrations in both plants and animals. Milk is a good source of vitamins. Milk contains the fat soluble vitamins A, D, E, and K. As milk fat is an important dietary source of vitamin A, low fat products are normally supplemented with this vitamin. The content of Vitamin D, which also aids in the absorption of calcium, is influenced by the feed of the animals. Milk is a fair source of vitamin E. It is also a fairly good source of water soluble B vitamins such as thiamine (B1), riboflavin (B2), niacin (B3), pantothenic acid (B5), pyridoxine (B6) and cyanocobalamin (B12). Milk is, however, a poor source of vitamin C (ascorbic acid). The little quantity of vitamin C that is present in raw milk is very heat-labile and easily destroyed by pasteurization.</p>
                        </InfoBlock>
                    </div>
                </TabsContent>
                <TabsContent value="properties" className="mt-0">
                    <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none">
                        <InfoBlock title="Introduction to Milk Properties">
                            <p>Milk is a complex biological fluid consisting of seven main components: water, fat, protein, sugar (lactose), minerals, vitamins and enzymes. It is a white opaque fluid in which fat is present as an emulsion, protein and some mineral matters in colloidal suspension and lactose together with some minerals and soluble proteins in true solution.</p>
                            <p>The opacity of milk is due to its content of suspended particles of fat, proteins and certain minerals. The colour varies from white to yellow depending on the carotene content of the fat. Milk has a pleasant, slightly sweet taste, and pleasant odour. It is an excellent source of calcium, phosphates and riboflavin.</p>
                        </InfoBlock>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[200px]">Property</TableHead>
                                        <TableHead>Value</TableHead>
                                        <TableHead>Significance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {physicalProperties.map(prop => (
                                        <TableRow key={prop.property}>
                                            <TableCell className="font-medium">{prop.property}</TableCell>
                                            <TableCell>{prop.value}</TableCell>
                                            <TableCell>{prop.details}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </TabsContent>
            </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
