
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckCircle,
  Thermometer,
  Scale,
  Package,
  Warehouse,
  ChevronRight,
  TestTube,
  Wind,
} from "lucide-react";

const processingSteps = [
  {
    icon: TestTube,
    title: "1. Reception & Quality Testing (Doodh Praapti aur Gunvatta Jaanch)",
    description: "Jaise hi doodh plant mein aata hai, use स्वीकार karne se pehle uski quality jaanchi jaati hai. Isme fat, SNF (Solids-Not-Fat), acidity, aur milawat (adulterants) ke test shamil hain. Saath hi, MBRT (Methylene Blue Reduction Time) test se doodh mein microbial load ka pata lagaya jaata hai. Sirf achhi quality ka doodh hi aage processing ke liye bheja jaata hai. Kharab quality ka doodh turant reject kar diya jaata hai.",
    color: "bg-sky-100 text-sky-800",
  },
  {
    icon: Thermometer,
    title: "2. Chilling (Thanda Karna)",
    description: "Test mein paas hue doodh ko turant 4-5°C tak thanda kiya jaata hai. Aisa isliye zaroori hai taaki usme bacteria ki growth ruk jaaye aur processing shuru hone tak doodh ki freshness bani rahe. Iske liye Plate Heat Exchangers (PHE) ka istemal hota hai, jo kam samay mein doodh ko thanda kar dete hain.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: Scale,
    title: "3. Standardization (Maanakikaran)",
    description: "Is step mein, doodh ke fat aur SNF content ko FSSAI ke niyamano aur product ki zaroorat ke hisaab se adjust kiya jaata hai. Jaise, toned milk ke liye fat 3.0% aur SNF 8.5% hona chahiye. Iske liye, doodh mein se cream (fat) nikala jaata hai ya usme Skimmed Milk Powder (SNF) milaya jaata hai taaki sahi ratio banaya ja sake. Yeh ek computer-controlled process hota hai.",
    color: "bg-indigo-100 text-indigo-800",
  },
    {
    icon: Wind,
    title: "4. Homogenization (Samaangikaran)",
    description: "Pasteurization se pehle, doodh ko high-pressure homogenizer se guzara jaata hai. Is machine mein, doodh ke bade fat globules (vasa ke kan) ko bahut chote-chote tukdo mein tod diya jaata hai. Isse doodh mein fat evenly fail jaata hai aur upar malai ki parat nahi jamti. Isse doodh peene mein zyada gaadha aur swadisht lagta hai.",
    color: "bg-orange-100 text-orange-800",
  },
  {
    icon: CheckCircle,
    title: "5. Pasteurization (Paasteurikaran)",
    description: "Yeh sabse important step hai. Yahan doodh ko 72°C par 15 second ke liye garam kiya jaata hai (ise HTST - High Temperature Short Time kehte hain) aur phir turant 4°C tak thanda kar liya jaata hai. Isse doodh mein maujood sabhi haanikarak bacteria (pathogens) mar jaate hain, jisse doodh peene ke liye surakshit ho jaata hai aur uski shelf life bhi badh jaati hai.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: Package,
    title: "6. Packaging (Paikejing)",
    description: "Pasteurize kiye gaye thande doodh ko ek sterile (keetanu-rahit) mahaul mein sanitized pouches ya cartons mein bhara jaata hai. Yeh automatic machines se hota hai taaki doodh mein dobara koi contamination na ho. Har packet par batch number, manufacturing date, aur expiry date print ki jaati hai.",
    color: "bg-green-100 text-green-800",
  },
  {
    icon: Warehouse,
    title: "7. Storage & Despatch (Bhandaran aur Ravaanagi)",
    description: "Pack kiye gaye doodh ke packets ko crates mein rakha jaata hai aur cold storage (jiska taapman 5°C se kam ho) mein store kiya jaata hai. Yahan se, unhe refrigerated (thandi) gaadiyon mein market tak bheja jaata hai taaki consumers tak pahunchne tak doodh ekdum fresh aur surakshit rahe.",
    color: "bg-gray-200 text-gray-800",
  },
];

export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            The Journey of Milk: From Farm to Table
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            An overview of the industrial milk processing workflow.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 mt-4">
          <div className="space-y-4">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg" style={{backgroundColor: step.color.split(' ')[0]}}>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md`}>
                  <step.icon className={`w-6 h-6 ${step.color.split(' ')[1]}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 font-headline">{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">{step.description}</p>
                </div>
              </div>
            ))}
             <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
                <h4 className="font-bold text-primary font-headline">Did you know?</h4>
                <p className="text-sm text-primary/90 mt-1">
                    Pasteurization ke baad, doodh ko alag-alag value-added products jaise Dahi (Curd), Paneer, Cheese, Shrikhand, aur Lassi banane ke liye bhi istemal kiya jaa sakta hai!
                </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
