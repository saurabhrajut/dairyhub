
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Droplets, Thermometer, Zap, Recycle, FlaskConical, Beaker, ChevronsRight, Calculator } from "lucide-react";


const cipCycles = [
  { step: 1, stage: "Pre-Rinse (Pahla Dholan)", icon: Droplets, description: "System se bache hue doodh ke अवशेष (residue) ko hatane ke liye normal ya garam paani (40-50°C) se 5-10 minute tak circulate kiya jaata hai. Garam paani fat ko pighlane mein madad karta hai." },
  { step: 2, stage: "Alkali Wash (Kshaareey Dholan)", icon: Beaker, description: "Garam (70-80°C) <strong>Caustic Soda (NaOH)</strong> solution (1-2% strength) ko 15-30 minute tak circulate kiya jaata hai. Yeh doodh ke fat (saponification se) aur protein ko prabhavi dhang se saaf karta hai." },
  { step: 3, stage: "Intermediate Rinse (Madhyavarti Dholan)", icon: Droplets, description: "System se caustic solution ko hatane ke liye normal paani se 5 minute tak dholan kiya jaata hai." },
  { step: 4, stage: "Acid Wash (Amleey Dholan)", icon: FlaskConical, description: "Garam (60-70°C) <strong>Nitric Acid (HNO₃)</strong> solution (0.5-1.5% strength) ko 10-20 minute tak circulate kiya jaata hai. Yeh doodh se bane mineral deposits (milk stone) ko hatata hai aur bache hue caustic ko neutralize karta hai." },
  { step: 5, stage: "Final Rinse (Antim Dholan)", icon: Droplets, description: "System se acid solution ko poori tarah hatane ke liye thande, saaf paani se 5-10 minute tak dholan kiya jaata hai, jab tak ki nikalne wale paani ka pH normal na ho jaaye." },
  { step: 6, stage: "Sanitization (Keetanu-Nashan)", icon: Zap, description: "Production shuru karne se theek pehle, system ko sterilize karne ke liye chlorine solution (100-200 ppm) ya garam paani (85-90°C) ko 10-15 minute tak circulate kiya jaata hai. Isse bache hue sabhi microorganisms nasht ho jaate hain." }
];

const chemicalsInfo = [
  { name: "Caustic Soda (Sodium Hydroxide, NaOH)", type: "Alkali (Base)", purpose: "Doodh ke protein aur fat ko todkar saaf karna (Saponification). Yeh ek bahut shaktishali cleaning agent hai." },
  { name: "Nitric Acid (HNO₃)", type: "Acid", purpose: "Doodh ke garam hone se bane mineral deposits (milk stone) ko ghol kar hatana. Yeh passivation mein bhi madad karta hai, jo stainless steel ko jung lagne se bachata hai." },
  { name: "Phosphoric Acid (H₃PO₄)", type: "Acid", purpose: "Nitric acid ka ek halka vikalp. Iska istemal bhi milk stone hatane ke liye hota hai." },
  { name: "Sodium Hypochlorite / Chlorine", type: "Sanitizer", purpose: "Ek prabhavi aur sasta keetanu-nashak jo bacteria, yeast, aur mold ko nasht karta hai." },
  { name: "Peracetic Acid (PAA)", type: "Sanitizer", purpose: "Ek shaktishali, no-rinse sanitizer jo oxygen, paani aur acetic acid mein toot jaata hai. Iska istemal aakhri sanitization ke liye kiya jaata hai." },
];

export function CipProcessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[95vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2 font-headline">
            CIP/CAC Process Guide
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A guide to Cleaning-In-Place & Cleaning-Out-of-Place in Dairy Plants.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
          <section id="cip-intro" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 font-headline mb-4">What is CIP/CAC?</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>CIP (Cleaning-In-Place)</strong> ek automatic method hai jismein dairy plant ke pipelines, tanks, aur process equipment ko bina khole (dismantle kiye) saaf kiya jaata hai.
              <br/>
              <strong>CAC (Cleaning-Out-of-Place)</strong> mein, equipment ke parts (jaise valves, pumps) ko alag karke ek central washing area mein saaf kiya jaata hai. Dono ka mukhya uddeshya product quality aur safety sunishchit karna hai.
            </p>
          </section>

          <section id="cip-cycle" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 font-headline mb-4">Standard 5-Step CIP Cycle</h2>
            <div className="space-y-4">
              {cipCycles.map((item, index) => (
                <div key={item.step} className={`p-4 border-l-4 rounded-r-lg flex items-start gap-4 ${index % 2 === 0 ? 'bg-blue-50 border-blue-500' : 'bg-indigo-50 border-indigo-500'}`}>
                  <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-md"><item.icon className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{item.step}. {item.stage}</h3>
                    <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item.description }}/>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="chemicals" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 font-headline mb-4">Chemicals Used in CIP</h2>
            <Accordion type="single" collapsible className="w-full">
                {chemicalsInfo.map(chem => (
                     <AccordionItem key={chem.name} value={chem.name}>
                        <AccordionTrigger className="font-semibold text-lg">{chem.name}</AccordionTrigger>
                        <AccordionContent>
                           <p><strong>Type:</strong> {chem.type}</p>
                           <p><strong>Purpose:</strong> {chem.purpose}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </section>

          <StrengthCalculator />

        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}


function StrengthCalculator() {
  const [solutionType, setSolutionType] = useState<"acid" | "base">("base");
  const [titrantVolume, setTitrantVolume] = useState("");
  const [sampleVolume, setSampleVolume] = useState("10");
  const [result, setResult] = useState<string | null>(null);

  const calculateStrength = () => {
    const V = parseFloat(titrantVolume);
    const S = parseFloat(sampleVolume);
    
    if (isNaN(V) || isNaN(S) || S <= 0) {
      setResult("Kripya sahi volume daalein.");
      return;
    }
    
    // Titration is with 0.1N Acid/Base. The formula is: % Strength = (V_titrant * N_titrant * Eq.Wt * 100) / (V_sample * 1000)
    // For NaOH (Eq. Wt = 40) with 0.1N titrant: (V * 0.1 * 40 * 100) / (S * 1000) = (V * 40) / (S * 100) = (V * 0.4) / S
    // For HNO3 (Eq. Wt = 63) with 0.1N titrant: (V * 0.1 * 63 * 100) / (S * 1000) = (V * 63) / (S * 100) = (V * 0.63) / S
    
    let strength = 0;
    if (solutionType === "base") {
        strength = (V * 0.4) / S;
    } else { // acid
        strength = (V * 0.63) / S;
    }

    setResult(`Solution ki strength lagbhag <strong>${strength.toFixed(3)}%</strong> hai.`);
  }

  return (
    <section id="strength-calculator" className="mb-8">
      <h2 className="text-2xl font-bold text-blue-700 font-headline mb-4 flex items-center gap-2">
        <Calculator/> CIP Solution Strength Calculator
      </h2>
      <div className="bg-muted p-6 rounded-lg border">
        <p className="text-sm text-muted-foreground mb-4">
          Yeh calculator titration method ka istemal karke Caustic (Base) ya Nitric Acid (Acid) solution ki strength (%) nikalne mein madad karta hai.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Label htmlFor="solution-type">Solution kiska hai?</Label>
                <Select value={solutionType} onValueChange={(val) => setSolutionType(val as "acid" | "base")}>
                    <SelectTrigger id="solution-type"><SelectValue /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="base">Caustic Soda (NaOH)</SelectItem>
                        <SelectItem value="acid">Nitric Acid (HNO₃)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div>
                <Label htmlFor="sample-volume">Sample Volume (ml)</Label>
                <Input id="sample-volume" type="number" value={sampleVolume} onChange={e => setSampleVolume(e.target.value)} placeholder="e.g., 10"/>
            </div>
        </div>
        <div className="mt-4">
            <Label htmlFor="titrant-volume">
                Titration me istemal hua {solutionType === 'base' ? '0.1N Acid' : '0.1N Base'} ka Volume (ml)
            </Label>
            <Input id="titrant-volume" type="number" value={titrantVolume} onChange={e => setTitrantVolume(e.target.value)} placeholder="e.g., 15.5"/>
        </div>
        <Button onClick={calculateStrength} className="w-full mt-6">Calculate Strength</Button>
        {result && (
            <Alert className="mt-4">
                <AlertTitle>Result</AlertTitle>
                <AlertDescription dangerouslySetInnerHTML={{__html: result}}/>
            </Alert>
        )}
      </div>
    </section>
  )
}
