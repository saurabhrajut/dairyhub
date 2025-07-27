
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Formula = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-muted/50 rounded-lg text-center font-mono text-sm my-4 text-primary"
     dangerouslySetInnerHTML={{ __html: children as string }} />
);


export function WaterTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center font-headline">A to Z Water Testing Guide</DialogTitle>
          <DialogDescription className="text-center">
            Paani ki quality check karne ke common parameters, unke simplified procedures aur calculation methods ke baare mein guide.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full pr-6 mt-4">
            <div className="prose max-w-none text-gray-700 text-base leading-relaxed">
                <p><strong>Dhyan rahe:</strong> Yeh sirf kuch tests hain, poori "A to Z" list nahi. Actual laboratory procedures zyada detailed ho sakte hain aur special equipment aur chemicals ki zaroorat pad sakti hai.</p>

                {/* Alkalinity */}
                <section id="alkalinity" className="mb-8 p-6 bg-blue-50 rounded-lg">
                    <h2 className="text-2xl font-bold text-blue-800 font-headline">Alkalinity (Khaarepan)</h2>
                    <p>Alkalinity paani ki acids ko neutralize karne ki capacity ko measure karti hai. Yeh mainly bicarbonate, carbonate, aur hydroxide ions ki wajah se hoti hai.</p>
                    <h3 className="text-xl font-semibold mt-4">Procedure (Titration Method)</h3>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Ek clean conical flask mein paani sample ka ek fixed volume (jaise 100 mL) lein.</li>
                        <li>2-3 drops phenolphthalein indicator daalein. Agar solution pink ho jaaye, toh standard acid solution (jaise 0.02 N H₂SO₄) se titrate karein jab tak pink color gayab na ho jaaye. Acid ka volume (V₁) note karein.</li>
                        <li>Ussi solution mein 2-3 drops methyl orange indicator daalein.</li>
                        <li>Standard acid solution se titrate karna continue karein jab tak color yellow se orange/red na ho jaaye. Total acid ka volume (V₂) note karein.</li>
                    </ol>
                    <h3 className="text-xl font-semibold mt-4">Calculation</h3>
                    <Formula>Total Alkalinity (mg/L as CaCO₃) = (V₂ &times; N &times; 50000) / Volume of Sample (mL)</Formula>
                </section>

                {/* BOD */}
                <section id="bod" className="mb-8 p-6 bg-green-50 rounded-lg">
                    <h2 className="text-2xl font-bold text-green-800 font-headline">Biochemical Oxygen Demand (BOD)</h2>
                    <p>BOD paani ke sample mein organic matter ko decompose karne mein microorganisms dwara consume ki gayi oxygen ki amount ko measure karta hai (usually 5 din 20°C par).</p>
                    <h3 className="text-xl font-semibold mt-4">Procedure (Dilution Method)</h3>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>BOD dilution water use karke paani sample ki alag-alag dilutions banayein.</li>
                        <li>Har dilution ke liye do BOD bottles bharein: ek initial DO ke liye aur ek incubation ke liye.</li>
                        <li>Initial Dissolved Oxygen (DOᵢ) measure karein.</li>
                        <li>Baaki bottles ko 5 din ke liye 20°C par andhere mein incubate karein.</li>
                        <li>5 din baad, Final Dissolved Oxygen (DOբ) measure karein.</li>
                    </ol>
                    <h3 className="text-xl font-semibold mt-4">Calculation</h3>
                    <Formula>BOD₅ (mg/L) = [ (DOᵢ - DOբ) - (Bᵢ - Bբ) &times; f ] / Dilution Factor</Formula>
                </section>

                {/* Chloride */}
                <section id="chloride" className="mb-8 p-6 bg-yellow-50 rounded-lg">
                    <h2 className="text-2xl font-bold text-yellow-800 font-headline">Chloride</h2>
                    <p>Chloride ions paani mein naturally hote hain lekin industrial wastes ya sewage se pollution bhi indicate kar sakte hain.</p>
                    <h3 className="text-xl font-semibold mt-4">Procedure (Argentometric Method)</h3>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Ek conical flask mein paani sample (jaise 50 mL) lein.</li>
                        <li>pH ko 7 se 10 ke beech adjust karein.</li>
                        <li>1 mL potassium chromate indicator daalein.</li>
                        <li>Standard silver nitrate (AgNO₃) solution se titrate karein jab tak ek persistent reddish-brown precipitate na ban jaaye. Volume (V_sample) note karein.</li>
                        <li>Distilled water ke saath ek blank titration bhi karein (V_blank).</li>
                    </ol>
                    <h3 className="text-xl font-semibold mt-4">Calculation</h3>
                    <Formula>Chloride (mg/L) = [ (V_sample - V_blank) &times; N &times; 35.45 &times; 1000 ] / Volume of Sample (mL)</Formula>
                </section>

                {/* Dissolved Oxygen (DO) */}
                <section id="do" className="mb-8 p-6 bg-purple-50 rounded-lg">
                    <h2 className="text-2xl font-bold text-purple-800 font-headline">Dissolved Oxygen (DO)</h2>
                    <p>Dissolved oxygen aquatic life ke liye bahut zaruri hai aur paani ki quality ka indicator hai.</p>
                    <h3 className="text-xl font-semibold mt-4">Procedure (Winkler Method)</h3>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Ek 300 mL BOD bottle ko paani se carefully bharein.</li>
                        <li>2 mL manganese sulfate solution, phir 2 mL alkali-iodide-azide reagent daalein. Mix karein.</li>
                        <li>Precipitate ko settle hone dein.</li>
                        <li>2 mL concentrated sulfuric acid daalein aur dissolve hone tak mix karein.</li>
                        <li>200 mL solution ko titrate karein standard sodium thiosulfate se jab tak pale straw color na reh jaaye.</li>
                        <li>1-2 mL starch indicator daalein (solution blue ho jaayega).</li>
                        <li>Titrate karna continue karein jab tak blue color gayab na ho jaaye. Volume (V) note karein.</li>
                    </ol>
                    <h3 className="text-xl font-semibold mt-4">Calculation</h3>
                    <Formula>DO (mg/L) = (V &times; N &times; 8000) / Volume of Sample Titrated (mL)</Formula>
                </section>

                {/* Total Hardness */}
                <section id="hardness" className="mb-8 p-6 bg-red-50 rounded-lg">
                    <h2 className="text-2xl font-bold text-red-800 font-headline">Total Hardness (Kul Kathorta)</h2>
                    <p>Paani ki hardness mainly calcium aur magnesium ions ki wajah se hoti hai.</p>
                    <h3 className="text-xl font-semibold mt-4">Procedure (EDTA Titration Method)</h3>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Ek conical flask mein paani sample (jaise 50 mL) lein.</li>
                        <li>1-2 mL ammonia buffer solution daal kar pH 10 karein.</li>
                        <li>Ek chutki Eriochrome Black T (EBT) indicator daalein (solution wine red ho jaayega).</li>
                        <li>Standard EDTA solution se titrate karein jab tak wine red color sky blue mein change na ho jaaye. Volume (V) note karein.</li>
                    </ol>
                    <h3 className="text-xl font-semibold mt-4">Calculation</h3>
                    <Formula>Total Hardness (mg/L as CaCO₃) = (V &times; M &times; 100.086 &times; 1000) / Volume of Sample (mL)</Formula>
                </section>

                {/* ETP Testing */}
                <section id="etp" className="mb-8 p-6 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 font-headline">Effluent Treatment Plant (ETP) Testing</h2>
                    <h3 className="text-xl font-semibold mt-4">Chemical Oxygen Demand (COD)</h3>
                    <p>COD organic aur inorganic pollutants ko oxidize karne ke liye required oxygen ki total amount ko measure karta hai.</p>
                    <h4 className="font-semibold mt-2">Procedure (Dichromate Reflux Method)</h4>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Sample ko digestion solution aur sulfuric acid reagent ke saath mix karein.</li>
                        <li>Sample ko COD reactor mein 150°C par 2 ghante ke liye reflux karein.</li>
                        <li>Thanda karke sample ko standard Ferrous Ammonium Sulfate (FAS) solution se titrate karein. Volume (V_sample) note karein.</li>
                        <li>Ek blank titration bhi karein (V_blank).</li>
                    </ol>
                    <h4 className="font-semibold mt-2">Calculation</h4>
                    <Formula>COD (mg/L) = [ (V_blank - V_sample) &times; N &times; 8000 ] / Volume of Sample (mL)</Formula>

                    <h3 className="text-xl font-semibold mt-4">Total Suspended Solids (TSS)</h3>
                    <p>TSS paani mein ghule hue solid particles ka measure hai jo filter paper par reh jaate hain.</p>
                    <h4 className="font-semibold mt-2">Procedure (Gravimetric Method)</h4>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Ek tole huye (weighed) glass fiber filter paper (W₁) se paani ka fixed volume filter karein.</li>
                        <li>Filter paper ko solids ke saath 103-105°C par sukhaayein.</li>
                        <li>Desiccator mein thanda karke dobara tolein (W₂).</li>
                    </ol>
                    <h4 className="font-semibold mt-2">Calculation</h4>
                    <Formula>TSS (mg/L) = [ (W₂ - W₁) &times; 1000 ] / Volume of Sample (mL)</Formula>
                </section>

                {/* WTP Testing */}
                <section id="wtp" className="mb-8 p-6 bg-cyan-50 rounded-lg">
                    <h2 className="text-2xl font-bold text-cyan-800 font-headline">Water Treatment Plant (WTP) Testing</h2>
                    <h3 className="text-xl font-semibold mt-4">Residual Chlorine</h3>
                    <p>Chlorine ko paani ko disinfect karne ke liye use kiya jaata hai.</p>
                    <h4 className="font-semibold mt-2">Procedure (DPD Colorimetric Method)</h4>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Paani ke sample mein DPD reagent daalein.</li>
                        <li>Color develop hone dein (pink/red).</li>
                        <li>Colorimeter ya standard color chart se color compare karke concentration read karein.</li>
                    </ol>

                    <h3 className="text-xl font-semibold mt-4">Iron (Loha)</h3>
                    <p>Paani mein iron ki presence se uska taste aur color kharab ho sakta hai.</p>
                    <h4 className="font-semibold mt-2">Procedure (Phenanthroline Method)</h4>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Sample mein HCl aur hydroxylamine daalein.</li>
                        <li>Phenanthroline solution aur buffer daalkar color develop karein (orange-red).</li>
<li>Spectrophotometer se 510 nm par absorbance measure karein.</li>
                        <li>Iron standards se calibration curve banakar concentration pata karein.</li>
                    </ol>
                </section>

                 <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg">
                    <p className="font-bold">Zaruri Baat:</p>
                    <p>Hamesha safety rules follow karein aur lab mein kaam karte waqt sahi protective gear (PPE) pehnein. Accurate results ke liye, certified labs aur standard methods ko follow karna behtar hai.</p>
                </div>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
