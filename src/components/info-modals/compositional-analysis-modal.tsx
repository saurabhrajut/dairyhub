
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const navLinks = [
    { href: "#processed-milk", text: "Processed Milk" },
    { href: "#cheese-paneer", text: "Cheese/Paneer/Khoa" },
    { href: "#dahi-yoghurt", text: "Dahi/Yoghurt" },
    { href: "#ice-cream", text: "Ice Cream" },
    { href: "#condensed-milk", text: "Condensed Milk" },
    { href: "#ghee-butter-oil", text: "Ghee/Butter Oil" },
    { href: "#butter", text: "Butter" },
    { href: "#milk-powder", text: "Milk Powder" },
];

const InfoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-card p-6 rounded-xl mb-6 shadow-md border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h2 id={id} className="text-2xl font-bold text-primary mt-8 mb-6 border-b-2 border-primary/20 pb-2 scroll-mt-24">
        {children}
    </h2>
);

const ProcedureList = ({ children }: { children: React.ReactNode }) => (
    <ol className="list-none p-0 counter-reset-list-item">{children}</ol>
);

const ProcedureListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="relative pl-8 mb-3 leading-relaxed before:content-[counter(list-item)] before:counter-increment-list-item before:absolute before:left-0 before:top-1 before:bg-primary before:text-primary-foreground before:w-6 before:h-6 before:rounded-full before:flex before:items-center before:justify-center before:text-sm before:font-bold">
        {children}
    </li>
);

export function CompositionalAnalysisModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[95vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Compositional Analysis of Dairy Products
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A detailed guide to chemical quality assurance for milk and milk products.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 flex flex-col min-h-0">
            <div className="bg-background/80 backdrop-blur-sm z-10 p-2 -mx-6 mb-4 sticky top-0">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="px-3 py-1.5 bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-full text-xs sm:text-sm font-medium transition-colors">
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>

            <ScrollArea className="flex-1 -mx-6 px-6">
                <section id="processed-milk">
                    <SectionTitle id="processed-milk">Processed Doodh ke liye Chemical Tests</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Fat Test (Gerber Method)</h3>
                        <p>Is method ka siddhant yeh hai ki jab doodh mein sulfuric acid (90–91%) milaya jaata hai, toh woh doodh ke proteins ko ghol deta hai jabki fat ke gole (globules) acid se paida hui garmi ke kaaran liquid form mein free rehte hain.</p>
                        <h4 className="font-semibold mt-4 mb-2">Prakriya (Procedure)</h4>
                        <ProcedureList>
                            <ProcedureListItem>Automatic tilt measure se 10 ml sulfuric acid (Gerber acid) milk butyrometer (range 0–10%) mein daalein.</ProcedureListItem>
                            <ProcedureListItem>Doodh ke sample ko theek se mix karein aur milk pipette ka istemal karke 10.75 ml doodh butyrometer mein daalein.</ProcedureListItem>
                            <ProcedureListItem>Doodh ko butyrometer ki deewar ke side se dheere-dheere daalna chahiye taaki charring (jalna) na ho.</ProcedureListItem>
                            <ProcedureListItem>Automatic tilt measure se 1 ml amyl alcohol daalein.</ProcedureListItem>
                            <ProcedureListItem>Butyrometer ko lock stopper se band karein aur contents ko theek se mix karein.</ProcedureListItem>
                            <ProcedureListItem>Butyrometer ko 65°C par maintain kiye gaye water bath mein 5 minute ke liye rakhein.</ProcedureListItem>
                            <ProcedureListItem>Butyrometer ko Gerber centrifuge mein transfer karein aur 1100–1200 rpm par 5 minute ke liye centrifuge karein.</ProcedureListItem>
                            <ProcedureListItem>Butyrometer ko phir se 65°C par maintain kiye gaye water bath mein 2 minute ke liye rakhein.</ProcedureListItem>
                            <ProcedureListItem>Butyrometer stem par bane nishano ki madad se fat content padhein.</ProcedureListItem>
                        </ProcedureList>
                        <Alert className="mt-6 bg-blue-50 border-blue-200">
                            <AlertTitle className="font-bold text-blue-800">Gerber Method mein 10.75 ml Doodh Kyun Liya Jaata Hai?</AlertTitle>
                            <AlertDescription className="text-blue-700 prose-sm max-w-none">
                                <p>Butyrometer par 1% ka nishan 0.125 ml volume ke barabar hota hai. Doodh ke fat ki density 0.9 g/ml hoti hai.</p>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li>1% fat ka mass = 0.125 ml × 0.9 g/ml = 0.1125 g.</li>
                                    <li>Is hisab se 100% fat ke liye 11.25 g doodh lena chahiye.</li>
                                    <li>Lekin, amyl alcohol mein ashuddhiyon ke kaaran fat ki reading 2.5-3% zyada aati hai.</li>
                                    <li>Isliye, asli doodh ki matra 11.25 g se thodi kam, yani lagbhag 10.95 g honi chahiye.</li>
                                    <li>10.95 g doodh ka volume (1.028 density par) lagbhag 10.65 ml hota hai.</li>
                                    <li>Pipette mein lagbhag 0.1 ml doodh chipak jaata hai.</li>
                                    <li>Isliye, poora volume 10.65 ml + 0.1 ml = <strong>10.75 ml</strong> liya jaata hai.</li>
                                </ul>
                            </AlertDescription>
                        </Alert>
                    </InfoCard>

                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Methylene Blue Reduction Test (MBRT)</h3>
                        <p>Yeh test doodh ki microbiological quality jaanchne ke liye kiya jaata hai. Jitni jaldi rang udta hai, doodh mein utne hi zyada bacteria hote hain, yaani quality utni hi kharab hoti hai.</p>
                        <h4 className="font-semibold mt-4 mb-2">Prakriya (Procedure)</h4>
                        <ProcedureList>
                            <ProcedureListItem>Ek sterile (keetanu-rahit) test tube mein 10 ml doodh ka sample lein.</ProcedureListItem>
                            <ProcedureListItem>Usme 1 ml Methylene Blue solution daalein.</ProcedureListItem>
                            <ProcedureListItem>Test tube ko stopper se band karein aur dheere se ulta karke mix karein.</ProcedureListItem>
                            <ProcedureListItem>Test tube ko 37°C par maintain kiye gaye water bath mein rakhein.</ProcedureListItem>
                            <ProcedureListItem>Har aadhe ghante mein tube ko check karein aur woh samay note karein jab neela rang poori tarah se gayab ho jaata hai.</ProcedureListItem>
                        </ProcedureList>
                        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                            <h4 className="font-bold mb-2">Interpretation:</h4>
                            <ul className="list-disc list-inside">
                                <li><strong>8 ghante se zyada:</strong> Excellent quality</li>
                                <li><strong>6 se 8 ghante:</strong> Good quality</li>
                                <li><strong>2 se 6 ghante:</strong> Fair quality</li>
                                <li><strong>2 ghante se kam:</strong> Poor quality</li>
                            </ul>
                        </div>
                    </InfoCard>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Phosphatase Test</h3>
                        <p>Alkaline phosphatase doodh mein naturally paaya jaata hai. Jab doodh ko pasteurization temperature ya usse zyada temperature par rakha jaata hai toh yeh apni activity kho deta hai. Isliye, is enzyme ko pasteurization ki efficiency ke index ke roop mein apnaya jaata hai. Agar enzyme active hoga, toh ek peela (yellow) rang ka compound banega.</p>
                        <h4 className="font-semibold mt-4 mb-2">Prakriya (Procedure)</h4>
                        <ProcedureList>
                            <ProcedureListItem>Ek test tube mein 5 ml buffer substrate (disodium p-nitrophenyl phosphate) solution daalein.</ProcedureListItem>
                            <ProcedureListItem>Tube ko stopper se band karein aur 37°C ke water bath mein rakhein.</ProcedureListItem>
                            <ProcedureListItem>Usme 1 ml doodh ka sample daalein aur 37°C par 2 ghante ke liye incubate karein.</ProcedureListItem>
                            <ProcedureListItem>Saath hi, uble hue (sahi se pasteurized) doodh ke saath ek blank sample taiyar karein aur yahi steps repeat karein.</ProcedureListItem>
                            <ProcedureListItem>Dono test tubes ke rang ko Lovibond comparator mein compare karein.</ProcedureListItem>
                            <ProcedureListItem>Test reading ko record karein.</ProcedureListItem>
                        </ProcedureList>
                        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                            <h4 className="font-bold mb-2">Interpretation:</h4>
                            <ul className="list-disc list-inside">
                            <li><strong>Disk Reading 0–3:</strong> Properly pasteurized</li>
                            <li><strong>Disk Reading 2–6:</strong> Doubtful</li>
                            <li><strong>Disk Reading 10 aur usse zyada:</strong> Under pasteurized</li>
                            </ul>
                        </div>
                    </InfoCard>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Ash Content</h3>
                        <p>Ash doodh ke organic matter ko 500-550°C par jalane (incineration) ke baad bacha hua inorganic residue hai. Yeh doodh ke mineral content ko darshata hai.</p>
                        <h4 className="font-semibold mt-4 mb-2">Prakriya (Procedure)</h4>
                        <ProcedureList>
                            <ProcedureListItem>Ek khaali silica crucible ko tolein (Weight W).</ProcedureListItem>
                            <ProcedureListItem>Usme 5 g doodh ka sample tolein (Weight W1).</ProcedureListItem>
                            <ProcedureListItem>Sample ko hot plate par sukha lein.</ProcedureListItem>
                            <ProcedureListItem>Crucible ko muffle furnace mein 550°C par 4 ghante ya ash ke carbon-free hone tak rakhein.</ProcedureListItem>
                            <ProcedureListItem>Crucible ko desiccator mein thanda karein.</ProcedureListItem>
                            <ProcedureListItem>Ash ke saath crucible ko tolein (Weight W2).</ProcedureListItem>
                            <ProcedureListItem>Heating aur cooling ko constant weight aane tak repeat karein.</ProcedureListItem>
                        </ProcedureList>
                        <pre className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm"><code>% Ash = [ (W2 - W) / (W1 - W) ] * 100</code></pre>
                    </InfoCard>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Titratable Acidity</h3>
                        <p>Doodh ki kul acidity (natural + developed) ko ek standard alkali solution (NaOH) ke saath titrate karke maapa jaata hai.</p>
                        <h4 className="font-semibold mt-4 mb-2">Prakriya (Procedure)</h4>
                        <ProcedureList>
                        <ProcedureListItem>Ek porcelain dish mein 10 ml doodh ka sample lein.</ProcedureListItem>
                        <ProcedureListItem>Kuch boondein 1% phenolphthalein solution ki daalein.</ProcedureListItem>
                        <ProcedureListItem>0.1 N NaOH solution ke saath titrate karein.</ProcedureListItem>
                        <ProcedureListItem>Jab halka gulabi rang aa jaaye (end point), to titration rok dein.</ProcedureListItem>
                        <ProcedureListItem>Istemaal hue alkali ka volume note karein.</ProcedureListItem>
                        </ProcedureList>
                        <pre className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm"><code>% Acidity (% Lactic Acid) = (9 * V * N) / W</code></pre>
                    </InfoCard>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Protein Content (Kjeldahl Method)</h3>
                        <p>Protein content nirdharit karne ke liye sabse zyada istemal hone wala method Kjeldahl method hai. Is method mein, protein ke nitrogen ko pehle concentrated sulfuric acid ka istemal karke ammonium sulfate mein convert kiya jaata hai. Fir isse ammonia gas nikalkar use titrate kiya jaata hai, jisse nitrogen ki matra pata chalti hai. Is nitrogen ki matra ko ek factor (doodh ke liye 6.38) se guna karke crude protein content nikala jaata hai.</p>
                        <h4 className="font-semibold mt-4 mb-2">Prakriya (Procedure)</h4>
                        <ProcedureList>
                            <ProcedureListItem><strong>Digestion:</strong> 5 g doodh ko ek saaf Kjeldahl flask mein tolein. 25 ml concentrated sulfuric acid, 0.2 g copper sulfate, aur 10 g potassium sulfate (catalyst mixture) daalein. Flask ko halke se garam karein jab tak contents saaf na ho jaayein. Digestion ko 2 ghante aur continue karein.</ProcedureListItem>
                            <ProcedureListItem><strong>Dilution:</strong> Liquid ko thanda hone dein aur 300-500 ml distilled water se dilute karein.</ProcedureListItem>
                            <ProcedureListItem><strong>Neutralization & Distillation:</strong> Digestion assembly fit karein. 75 ml 50% NaOH daalein. Flask ko distillation assembly se connect karein jiska tip 50 ml boric acid solution (indicator ke saath) mein dooba ho. Garam karna shuru karein.</ProcedureListItem>
                            <ProcedureListItem>Jab distillate 150 ml tak pahunch jaaye to distillation rok dein.</ProcedureListItem>
                            <ProcedureListItem><strong>Titration:</strong> Boric acid solution jisme ammonia trap hui hai, use std. HCl solution (0.1 N) se titrate karein jab tak gulabi rang na aa jaaye. Reading note karein.</ProcedureListItem>
                            <ProcedureListItem>Ek blank test bhi karein.</ProcedureListItem>
                        </ProcedureList>
                        <pre className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm">
                            <code>
                                % Total Nitrogen = [ 1.4007 * (Vs - Vb) * N ] / W
                                <br />
                                % Crude Protein = % Nitrogen * 6.38
                            </code>
                        </pre>
                    </InfoCard>
                </section>

                <section id="cheese-paneer">
                    <SectionTitle id="cheese-paneer">Cheese, Paneer, Channa, aur Khoa</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Fat Test (SBR Method)</h3>
                        <ProcedureList>
                            <ProcedureListItem>1-2 g sample ko 100 ml beaker mein lein.</ProcedureListItem>
                            <ProcedureListItem>10 ml concentrated HCl daalein aur garam karke solid particles ko dissolve karein.</ProcedureListItem>
                            <ProcedureListItem>Thanda karke 10 ml ethanol daalein aur Mojonnier flask mein transfer karein.</ProcedureListItem>
                            <ProcedureListItem>25 ml diethyl ether daalkar 1 minute tak hilayein. Fir 25 ml petroleum ether daalkar hilayein.</ProcedureListItem>
                            <ProcedureListItem>Centrifuge karein aur ethereal layer ko conical flask mein transfer karein.</ProcedureListItem>
                            <ProcedureListItem>Extraction ko do baar repeat karein.</ProcedureListItem>
                            <ProcedureListItem>Ether ko evaporate karein aur residue ko oven mein sukhaayein.</ProcedureListItem>
                        </ProcedureList>
                    </InfoCard>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Moisture and Total Solids</h3>
                        <ProcedureList>
                        <ProcedureListItem>Ek saaf, sukhi, khaali aluminum moisture dish (jisme sand aur glass rod ho) ko tolein.</ProcedureListItem>
                        <ProcedureListItem>Usme 3g sample tolein.</ProcedureListItem>
                        <ProcedureListItem>Kuch boondein distilled water ki daalkar sample ko sand ke saath mix karein.</ProcedureListItem>
                        <ProcedureListItem>Dish ko hot plate par rakhein taaki paani evaporate ho jaaye.</ProcedureListItem>
                        <ProcedureListItem>Dish ko hot air oven mein 102 ± 2°C par 4 ghante ke liye rakhein.</ProcedureListItem>
                        <ProcedureListItem>Thanda karke tolein. Constant weight aane tak repeat karein.</ProcedureListItem>
                        </ProcedureList>
                    </InfoCard>
                </section>
                
                <section id="dahi-yoghurt">
                    <SectionTitle id="dahi-yoghurt">Dahi & Yoghurt</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Titratable Acidity</h3>
                        <ProcedureList>
                            <ProcedureListItem>1 g sample ko beaker mein lein.</ProcedureListItem>
                            <ProcedureListItem>10 ml distilled water daalkar paste banayein.</ProcedureListItem>
                            <ProcedureListItem>Kuch boondein phenolphthalein indicator ki daalein aur 0.1 N NaOH se titrate karein jab tak halka gulabi rang na aa jaaye.</ProcedureListItem>
                        </ProcedureList>
                        <pre className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm"><code>% Acidity (% Lactic Acid) = (9 * A * N) / W</code></pre>
                    </InfoCard>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Diacetyl Content</h3>
                        <p>Diacetyl ek khas flavor compound hai jo fermentation ke dauran banta hai. Iski matra spectrophotometrically 570 nm par maapi jaati hai.</p>
                    </InfoCard>
                </section>
                
                <section id="ice-cream">
                    <SectionTitle id="ice-cream">Ice Cream</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Fat Content (Rose-Gottlieb method)</h3>
                        <ProcedureList>
                            <ProcedureListItem>4-5 g sample ko Mojonnier tube mein tolein.</ProcedureListItem>
                            <ProcedureListItem>10 ml distilled water daalkar mix karein.</ProcedureListItem>
                            <ProcedureListItem>2 ml ammonia daalein, mix karein aur 60°C ke water bath mein 20 min garam karein.</ProcedureListItem>
                            <ProcedureListItem>Thanda karein aur 10 ml ethanol, 25 ml diethyl ether daalkar mix karein.</ProcedureListItem>
                            <ProcedureListItem>Fir 25 ml petroleum ether daalkar mix karein.</ProcedureListItem>
                            <ProcedureListItem>Layers alag hone dein, ya centrifuge karein.</ProcedureListItem>
                            <ProcedureListItem>Ethereal layer ko tole gaye vessel mein nikaalein.</ProcedureListItem>
                            <ProcedureListItem>Extraction do baar repeat karein.</ProcedureListItem>
                            <ProcedureListItem>Ether ko evaporate karein aur residue ko 102 ± 2°C par 3 ghante sukhaayein.</ProcedureListItem>
                        </ProcedureList>
                    </InfoCard>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Overrun in Ice Cream</h3>
                        <p>Overrun ice cream ka woh volume hai jo mix ke volume se zyada hota hai. Yeh freezing ke dauran hawa ke incorporation ke kaaran hota hai.</p>
                        <ProcedureList>
                            <ProcedureListItem>Ice cream ke sample (cup ya carton) ko tolein.</ProcedureListItem>
                            <ProcedureListItem>Ek beaker ka weight record karein.</ProcedureListItem>
                            <ProcedureListItem>Jami hui ice cream ko beaker mein daalein aur 45°C ke water bath par pighlayein.</ProcedureListItem>
                            <ProcedureListItem>1-2 boond amyl alcohol (anti-foaming agent) daalkar hawa nikaalein.</ProcedureListItem>
                            <ProcedureListItem>Cup ya carton ko pighli hui ice cream (bina hawa ke) se bharein.</ProcedureListItem>
                            <ProcedureListItem>Cup ya carton ka weight record karein.</ProcedureListItem>
                        </ProcedureList>
                        <pre className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm"><code>% Overrun = [ (W3 - W2) / (W2 - W1) ] * 100</code></pre>
                    </InfoCard>
                </section>
                
                <section id="condensed-milk">
                    <SectionTitle id="condensed-milk">Condensed Milk</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Total Solids Content</h3>
                        <ProcedureList>
                            <ProcedureListItem>1.5-2.0 g sample ko ek tole huye dish mein lein.</ProcedureListItem>
                            <ProcedureListItem>Usme 3-5 ml distilled water daalkar paste banayein.</ProcedureListItem>
                            <ProcedureListItem>Sample ko ubalte huye water bath par 20-30 min tak sukhaayein.</ProcedureListItem>
                            <ProcedureListItem>Dish ko hot air oven mein 100 ± 2°C par 2 ghante ke liye rakhein.</ProcedureListItem>
                            <ProcedureListItem>Thanda karke tolein aur constant weight aane tak repeat karein.</ProcedureListItem>
                        </ProcedureList>
                    </InfoCard>
                </section>

                <section id="ghee-butter-oil">
                    <SectionTitle id="ghee-butter-oil">Ghee & Butter Oil</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Reichert-Meissel (RM) & Polenske Value</h3>
                        <p><strong>RM Value:</strong> Yeh ghee ki shuddhta ka ek mahatvapurna suchak hai. Shuddh ghee ke liye RM value kam se kam 28 honi chahiye.</p>
                        <p><strong>Polenske Value:</strong> Yeh steam volatile aur water-insoluble fatty acids ko maapta hai. Iski value badhne ka matlab coconut oil jaisi milavat ho sakti hai.</p>
                        <ProcedureList>
                            <ProcedureListItem><strong>Saponification:</strong> 5.00 g ghee ko flask mein tolein. 20 g glycerol aur 2 ml 50% NaOH daalein. Garam karein jab tak saaf na ho.</ProcedureListItem>
                            <ProcedureListItem><strong>Dilution & Acidification:</strong> 93 ml ubla hua thanda paani aur 50 ml dilute sulfuric acid daalein.</ProcedureListItem>
                            <ProcedureListItem><strong>Distillation:</strong> 110 ml distillate 19-21 minute mein collect karein.</ProcedureListItem>
                            <ProcedureListItem><strong>RM Value Titration:</strong> 100 ml filtrate ko 0.1 N NaOH se titrate karein.</ProcedureListItem>
                            <ProcedureListItem><strong>Polenske Value Titration:</strong> Condenser aur filter paper ko teen baar 15 ml neutralized ethanol se dhoyein. Washings ko 0.1 N NaOH se titrate karein.</ProcedureListItem>
                        </ProcedureList>
                        <pre className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm">
                            <code>
                                RM Value = 1.1 * (Titration_Sample - Titration_Blank)
                                <br/>
                                Polenske Value = Titration_Insoluble_Acids - Titration_Blank_Insoluble
                            </code>
                        </pre>
                    </InfoCard>
                </section>
                
                <section id="butter">
                    <SectionTitle id="butter">Butter</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Moisture Content</h3>
                        <ProcedureList>
                            <ProcedureListItem>Ek saaf, sukhi dish ko tolein.</ProcedureListItem>
                            <ProcedureListItem>Usme 5-10 g butter ka sample tolein.</ProcedureListItem>
                            <ProcedureListItem>Dish ko 100°C par garam karein, jisse paani evaporate ho jaaye.</ProcedureListItem>
                            <ProcedureListItem>Constant weight aane tak thanda karein aur tolein.</ProcedureListItem>
                        </ProcedureList>
                    </InfoCard>
                </section>

                <section id="milk-powder">
                    <SectionTitle id="milk-powder">Milk Powder</SectionTitle>
                    <InfoCard>
                        <h3 className="text-xl font-semibold mb-2">Moisture and Total Solids</h3>
                        <ProcedureList>
                            <ProcedureListItem>Ek saaf, sukhi, pehle se toli hui dish lein (Weight W).</ProcedureListItem>
                            <ProcedureListItem>Usme 3 g sample tolein aur dobara tolein (Weight W1).</ProcedureListItem>
                            <ProcedureListItem>Dish ko hot air oven mein 102 ± 2°C par 3 ghante ke liye rakhein.</ProcedureListItem>
                            <ProcedureListItem>Dish ko desiccator mein room temperature tak thanda karein.</ProcedureListItem>
                            <ProcedureListItem>Dish ko tolein aur weight note karein (Weight W2).</ProcedureListItem>
                            <ProcedureListItem>Heating aur cooling ko tab tak repeat karein jab tak constant weight na mil jaaye.</ProcedureListItem>
                        </ProcedureList>
                        <pre className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm">
                            <code>
                                % Total Solids = [ (W2 - W) / (W1 - W) ] * 100
                                <br />
                                % Moisture = 100 - % Total Solids
                            </code>
                        </pre>
                    </InfoCard>
                </section>
            </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
