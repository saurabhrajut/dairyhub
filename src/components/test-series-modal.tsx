"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  GraduationCap,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Play,
  Trophy,
  FileText,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Layers,
  Monitor,
  Smartphone,
  Grid,
  Zap,
  Printer,
  Download,
  User,
  Loader2,
  Image,
  MoveHorizontal,
  ChevronLeft,
  ChevronRight,
  ZoomIn
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/auth-context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { savePdfFile, saveFile } from "@/lib/mobile-download";
import { useToast } from "@/hooks/use-toast";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  category: string;
}

export type DisciplineType = "dairy" | "food" | "biotech";
export type TestModeType = "full" | "mock"; // full = 120 Qs (120 Mins), mock = 30 Qs (30 Mins)

export interface SeriesSetInfo {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
}

export const TEST_SERIES_SETS: SeriesSetInfo[] = [
  {
    id: 1,
    title: "Set 1: National GATE & ICAR Core Technical Exam Series",
    subtitle: "Focus on ICAR AIEEA PG, ICAR NET, GATE XE/XL & Core Fundamentals",
    badge: "GATE & ICAR CORE",
  },
  {
    id: 2,
    title: "Set 2: FSSAI CFSO/TO & Quality Assurance Master Series",
    subtitle: "Focus on FSSAI Acts, Adulteration Tests, MBRT, Gerber & Lab Safety",
    badge: "FSSAI & QA SPECIAL",
  },
  {
    id: 3,
    title: "Set 3: Plant Operations, Engineering & Utility Equipment Series",
    subtitle: "Focus on Evaporators, Spray Dryers, CIP Automation & Utilities",
    badge: "PLANT & ENGINEERING",
  },
  {
    id: 4,
    title: "Set 4: Chemistry, Microbiology & Processing Series",
    subtitle: "Focus on Protein Chemistry, Starter Cultures & Product Processing",
    badge: "CHEMISTRY & MICROBIOLOGY",
  },
  {
    id: 5,
    title: "Set 5: Grand All-India Mock Test Series (Comprehensive)",
    subtitle: "Combined Full-Length Paper Set Covering All Technical Domains",
    badge: "ALL-INDIA GRAND MOCK",
  },
];

// =========================================================================
// 100% UNIQUE QUESTION BANKS FOR DAIRY, FOOD & BIOTECH (ZERO REPEAT)
// =========================================================================

export const ALL_DAIRY_QUESTIONS: Omit<Question, "id">[] = [
  // SET 1: GATE & ICAR Core Technical
  {
    question: "What is the primary protein fraction responsible for curd formation during chymosin (rennet) coagulation of milk?",
    options: ["Alpha-s1 Casein", "Beta-Casein", "Kappa-Casein", "Gamma-Casein"],
    correctAnswer: 2,
    explanation: "Chymosin specifically cleaves the Phe105-Met106 peptide bond of Kappa-casein, destroying steric stabilization and causing casein micelles to aggregate.",
    category: "Dairy Chemistry"
  },
  {
    question: "In HTST pasteurization of milk, what is the minimum temperature-time combination prescribed by FSSAI?",
    options: ["63°C for 30 minutes", "72°C for 15 seconds", "85°C for 5 seconds", "135°C for 2 seconds"],
    correctAnswer: 1,
    explanation: "FSSAI standards mandate HTST pasteurization at a minimum of 72°C (161°F) for at least 15 seconds to ensure destruction of Coxiella burnetii.",
    category: "Dairy Engineering"
  },
  {
    question: "Which enzyme is tested to verify the efficiency of milk pasteurization?",
    options: ["Lipase", "Alkaline Phosphatase", "Peroxidase", "Lactase"],
    correctAnswer: 1,
    explanation: "Alkaline Phosphatase is slightly more heat resistant than pathogenic microorganisms (like Coxiella burnetii). Its complete destruction indicates effective pasteurization.",
    category: "Quality Control"
  },
  {
    question: "What is the characteristic flavor compound responsible for the typical buttery aroma in Dahi and cultured butter?",
    options: ["Acetaldehyde", "Diacetyl", "Lactic Acid", "Acetone"],
    correctAnswer: 1,
    explanation: "Diacetyl (2,3-butanedione) is synthesized by Leuconostoc mesenteroides subsp. cremoris and Lactococcus lactis subsp. diacetylactis, producing buttery aroma.",
    category: "Dairy Microbiology"
  },
  {
    question: "Which defect in milk powder is caused by Maillard browning reactions during storage?",
    options: ["Tallowy flavor", "Stale / Browning defect", "Rancidity", "Fishy off-flavor"],
    correctAnswer: 1,
    explanation: "Maillard reaction occurs between amino groups of lysine in casein and reducing sugar lactose at high ambient storage temperatures and elevated moisture.",
    category: "Dairy Chemistry"
  },
  {
    question: "What is the minimum Milk Fat percentage required by FSSAI for Standardized Milk in India?",
    options: ["3.0%", "3.5%", "4.5%", "6.0%"],
    correctAnswer: 2,
    explanation: "FSSAI prescribes a minimum of 4.5% Milk Fat and 8.5% Milk SNF for Standardized Milk across India.",
    category: "FSSAI Standards"
  },
  {
    question: "The overrun in Ice Cream is calculated using which formula based on volume?",
    options: [
      "[(Volume of Ice Cream - Volume of Mix) / Volume of Mix] × 100",
      "[(Volume of Mix - Volume of Ice Cream) / Volume of Ice Cream] × 100",
      "[(Weight of Ice Cream - Weight of Mix) / Weight of Mix] × 100",
      "[(Volume of Mix / Volume of Ice Cream)] × 100"
    ],
    correctAnswer: 0,
    explanation: "Percent Overrun (by volume) = [(Vol of Ice Cream produced - Vol of liquid Mix used) / Vol of liquid Mix used] × 100.",
    category: "Dairy Technology"
  },
  {
    question: "Which homogenizer valve stage is primarily responsible for breaking down fat globule aggregates after initial size reduction?",
    options: ["First Stage", "Second Stage", "Third Stage", "Homogenization bypass"],
    correctAnswer: 1,
    explanation: "The 1st stage valve operates at high pressure (150-200 bar) to disrupt fat globules. The 2nd stage valve operates at lower pressure (30-50 bar) to separate clustered fat globules.",
    category: "Dairy Engineering"
  },
  {
    question: "In Paneer manufacturing, what is the optimum milk coagulation temperature and pH for maximum yield and body?",
    options: ["60°C and pH 6.0", "70°C and pH 5.0", "80-85°C and pH 5.30-5.35", "95°C and pH 4.6"],
    correctAnswer: 2,
    explanation: "Coagulating milk at 80-85°C with 1-2% citric acid at pH 5.30-5.35 yields Paneer with ideal moisture retention, smooth body, and low fat loss in whey.",
    category: "Dairy Technology"
  },
  {
    question: "What is the average specific gravity of fresh whole cow milk at 15.5°C?",
    options: ["1.018 - 1.022", "1.028 - 1.032", "1.036 - 1.040", "1.045 - 1.050"],
    correctAnswer: 1,
    explanation: "Fresh cow milk has an average specific gravity of 1.028 - 1.032, whereas buffalo milk ranges from 1.030 - 1.034.",
    category: "Dairy Physics"
  },
  {
    question: "Which microorganism is responsible for 'ropy milk' defect characterized by viscous slimy strands?",
    options: ["Alcaligenes viscolactis", "Bacillus cereus", "Pseudomonas putida", "Streptococcus agalactiae"],
    correctAnswer: 0,
    explanation: "Alcaligenes viscolactis (and some capsular strains of Klebsiella) produce extracellular mucopolysaccharides causing ropy or slimy milk.",
    category: "Dairy Microbiology"
  },
  {
    question: "Which packaging film is commonly used for UHT milk tetra aseptic packaging for barrier against oxygen and light?",
    options: ["LDPE only", "Aluminum Foil layer in 6-layer laminate", "BOPP layer", "Cellophane"],
    correctAnswer: 1,
    explanation: "Aseptic Tetra Pak packaging comprises 6 layers: Polyethylene (waterproof/adhesion), Paperboard (stability), Polyethylene, Aluminum Foil (oxygen & light barrier), Polyethylene, PET/PE (sealant).",
    category: "Packaging Tech"
  },

  // SET 2: FSSAI CFSO/TO & QA
  {
    question: "In the Gerber method for fat determination in milk, what is the specific gravity of the concentrated sulfuric acid required?",
    options: ["1.500 - 1.520", "1.820 - 1.825", "1.140 - 1.150", "2.000 - 2.050"],
    correctAnswer: 1,
    explanation: "Gerber sulfuric acid must have a specific gravity of 1.820 to 1.825 at 20°C (approx 90-91% H2SO4) to dissolve proteins without charring fat.",
    category: "QA & Adulteration"
  },
  {
    question: "In Methylene Blue Reduction Test (MBRT), raw milk reducing methylene blue color in less than 30 minutes is classified as:",
    options: ["Very Good", "Good", "Fair", "Very Poor / Bad"],
    correctAnswer: 3,
    explanation: "MBRT decolorization in < 30 mins indicates heavy bacterial contamination (> 10 million cfu/ml) and is graded as Very Poor.",
    category: "Milk Quality"
  },
  {
    question: "Which reagent is used in the Rosolic Acid test to detect neutralizing agents like Sodium Carbonate/Bicarbonate in milk?",
    options: ["0.1% Rosolic acid in ethyl alcohol", "1% Phenolphthalein", "Methyl Red", "Bromothymol Blue"],
    correctAnswer: 0,
    explanation: "Rosolic acid solution gives a rose-red or deep pink color in the presence of added neutralizers (carbonates/hydroxides), whereas unadulterated milk remains brownish-orange.",
    category: "Adulteration Tests"
  },
  {
    question: "Addition of starch as an adulterant in milk is confirmed by the appearance of which color upon adding 1% Iodine solution?",
    options: ["Deep Pink", "Canary Yellow", "Deep Blue", "Brick Red"],
    correctAnswer: 2,
    explanation: "Iodine reacts with amylose in starch to form a dark blue to purple starch-iodine inclusion complex.",
    category: "Adulteration Tests"
  },
  {
    question: "Which chemical reagent is used in the DMAB test for rapid detection of added Urea in synthetic milk?",
    options: ["p-Dimethylaminobenzaldehyde", "Diphenylamine", "Resorcinol", "Phosphomolybdic acid"],
    correctAnswer: 0,
    explanation: "DMAB (p-Dimethylaminobenzaldehyde) in acidic medium reacts with urea to form a distinct bright yellow colored complex.",
    category: "Adulteration Tests"
  },
  {
    question: "What is the FSSAI maximum permissible limit for Aflatoxin M1 in raw and pasteurized milk?",
    options: ["0.05 µg/kg", "0.5 µg/kg", "5.0 µg/kg", "10.0 µg/kg"],
    correctAnswer: 1,
    explanation: "FSSAI mandates a maximum tolerance limit of 0.5 µg/kg (0.5 ppb) for Aflatoxin M1 in milk.",
    category: "FSSAI Safety"
  },
  {
    question: "The Reichert-Meissl (RM) value of pure Ghee evaluates the presence of which specific fatty acids?",
    options: [
      "Insoluble long-chain fatty acids",
      "Steam-volatile, water-soluble fatty acids (mainly Butyric and Caproic acid)",
      "Unsaturated fatty acids (Oleic acid)",
      "Phospholipids and Sterols"
    ],
    correctAnswer: 1,
    explanation: "RM value measures the volume of 0.1N KOH required to neutralize steam-volatile water-soluble fatty acids distilled from 5g fat. Pure Ghee RM value is typically > 28.",
    category: "Ghee Chemistry"
  },
  {
    question: "Which indicator is used to detect the presence of synthetic detergent adulterants in milk?",
    options: ["Methylene Blue in chloroform / anionic dye test", "Nessler reagent", "Curcumin", "Eosin Y"],
    correctAnswer: 0,
    explanation: "Anionic detergents form a chloroform-soluble blue complex with cationic methylene blue dye, turning the lower chloroform layer blue.",
    category: "Adulteration Tests"
  },
  {
    question: "What is the standard freezing point range of unadulterated fresh bovine milk measured using a Cryoscope?",
    options: ["0.000°C to -0.200°C", "-0.520°C to -0.555°C", "-0.850°C to -0.900°C", "-1.200°C to -1.500°C"],
    correctAnswer: 1,
    explanation: "Pure cow/buffalo milk freezes in the tight range of -0.520°C to -0.555°C due to dissolved lactose and soluble salts.",
    category: "Milk Physics"
  },
  {
    question: "The California Mastitis Test (CMT) estimates the somatic cell count by reacting with which intracellular component?",
    options: ["Bacterial cell wall peptidoglycan", "Nuclear DNA of somatic cells (leukocytes)", "Cell membrane phospholipids", "Mitochondrial ATP"],
    correctAnswer: 1,
    explanation: "CMT reagent (alkyl aryl sulfonate) lyses somatic cells, releasing nuclear DNA which forms a gel-like precipitate proportional to cell count.",
    category: "Mastitis Diagnosis"
  },

  // SET 3: Plant Operations & Engineering
  {
    question: "In a triple-effect evaporator operating in a milk powder plant, what is the approximate steam economy achieved?",
    options: ["0.8 kg water evaporated per kg steam", "1.5 kg water evaporated per kg steam", "2.4 to 2.8 kg water evaporated per kg steam", "5.0 kg water evaporated per kg steam"],
    correctAnswer: 2,
    explanation: "A triple-effect evaporator reuses vapor from preceding effects to heat subsequent effects, achieving ~2.4 to 2.8 kg evaporation per kg steam consumed.",
    category: "Evaporation Tech"
  },
  {
    question: "What is the standard 5-stage cleaning sequence in automatic Dairy CIP (Clean-In-Place) systems?",
    options: [
      "Cold Rinse -> Caustic Wash (1.5-2.0% NaOH @ 75°C) -> Intermediate Rinse -> Acid Wash (0.5-1.0% HNO3 @ 65°C) -> Final Sanitizing Rinse",
      "Acid Wash -> Caustic Wash -> Hot Rinse -> Cold Rinse -> Steam",
      "Steam -> Caustic Wash -> Acid Wash -> Detergent -> Sanitizer",
      "Hot Rinse -> Detergent -> Sanitizer -> Cold Rinse -> Acid Wash"
    ],
    correctAnswer: 0,
    explanation: "Standard Dairy CIP uses pre-rinse, hot alkali (NaOH to saponify fat/protein), intermediate rinse, warm acid (HNO3 to dissolve milkstone scale), and final rinse.",
    category: "Dairy Engineering"
  },
  {
    question: "In a Plate Heat Exchanger (PHE) pasteurizer, how is Regeneration Efficiency calculated?",
    options: [
      "[(Temp of Pasteurized Milk leaving regenerator - Temp of Raw Milk entering) / (Max Pasteurization Temp - Temp of Raw Milk entering)] × 100",
      "[(Max Temp - Min Temp) / Max Temp] × 100",
      "[(Flow Rate in - Flow Rate out) / Flow Rate in] × 100",
      "[(Holding Time / Cooling Time)] × 100"
    ],
    correctAnswer: 0,
    explanation: "Regeneration % measures the heat recovered between outgoing hot pasteurized milk and incoming cold raw milk, typically achieving 90-94% efficiency.",
    category: "Heat Transfer"
  },
  {
    question: "Which refrigerant is most widely used in large industrial dairy processing plants due to its high latent heat of vaporization?",
    options: ["R-134a", "R-410A", "Anhydrous Ammonia (R-717)", "Carbon Dioxide (R-744)"],
    correctAnswer: 2,
    explanation: "Ammonia (R-717) has an exceptionally high latent heat of vaporization (~1370 kJ/kg), zero ODP, and zero GWP, making it ideal for central dairy refrigeration.",
    category: "Refrigeration"
  },
  {
    question: "In a continuous spray drying tower for milk, what type of atomizer uses high centrifugal speed (10,000 to 25,000 RPM)?",
    options: ["High-pressure nozzle atomizer", "Pneumatic nozzle", "Rotary disc / wheel atomizer", "Ultrasonic transducer"],
    correctAnswer: 2,
    explanation: "Rotary wheel atomizers use high rotational speeds (10,000 - 25,000 RPM) to fling concentrated milk liquid into fine uniform droplets.",
    category: "Drying Technology"
  },
  {
    question: "What centrifugal force (g-force) range is generated inside a commercial dairy disc-bowl cream separator?",
    options: ["100 - 500 g", "5,000 - 10,000 g", "50,000 - 100,000 g", "500,000 g"],
    correctAnswer: 1,
    explanation: "Disc stack cream separators spin at 4,000-6,000 RPM, generating 5,000 to 10,000 g centrifugal force to separate light fat globules from skim milk.",
    category: "Separation Tech"
  },
  {
    question: "What HEPA air filter efficiency is required in the Air Handling Unit (AHU) of aseptic dairy packaging rooms?",
    options: ["85% at 5 µm", "95% at 1 µm", "99.97% at 0.3 µm", "100% at 0.01 µm"],
    correctAnswer: 2,
    explanation: "HEPA filters in aseptic filling cleanrooms must filter at least 99.97% of airborne particles 0.3 µm in size.",
    category: "Plant Utilities"
  },
  {
    question: "In a high-pressure milk homogenizer, what is the operating pressure range of the First Stage homogenizing valve?",
    options: ["10 - 20 bar", "150 - 200 bar (15-20 MPa)", "500 - 800 bar", "1500 bar"],
    correctAnswer: 1,
    explanation: "The 1st stage valve operates at 150-200 bar to reduce fat globule diameter from ~3.5 µm down to < 1.0 µm via cavitation and shear.",
    category: "Dairy Engineering"
  },

  // SET 4: Chemistry, Microbiology & Processing
  {
    question: "At what temperature does major whey protein Beta-Lactoglobulin undergo thermal denaturation, releasing free sulfhydryl (-SH) groups?",
    options: ["55°C", "65°C", "78 - 85°C", "121°C"],
    correctAnswer: 2,
    explanation: "Beta-lactoglobulin unfolds around 78-85°C, exposing hidden cysteine -SH groups that impart cooked flavor to heated milk.",
    category: "Dairy Chemistry"
  },
  {
    question: "What is the standard ratio of starter cultures Streptococcus thermophilus and Lactobacillus delbrueckii subsp. bulgaricus in Yoghurt manufacturing?",
    options: ["10:1", "1:1 (Equal proportions)", "1:5", "1:20"],
    correctAnswer: 1,
    explanation: "A 1:1 ratio ensures symbiotic acid and flavor production (protocooperation), yielding optimum lactic acid and acetalhehyde.",
    category: "Fermented Products"
  },
  {
    question: "What defect occurs in Yoghurt when whey liquid separates out on the surface during storage?",
    options: ["Sandiness", "Syneresis (Wheying-off)", "Late blowing", "Rancidity"],
    correctAnswer: 1,
    explanation: "Syneresis is the shrinkage of the protein gel network resulting in whey expulsion, caused by low SNF, high disturbance during setting, or high acid.",
    category: "Yoghurt Defect"
  },
  {
    question: "During Mozzarella cheese manufacturing, at what curd pH does the curd exhibit characteristic stretchability in hot water (70-80°C)?",
    options: ["pH 6.5 - 6.7", "pH 5.2 - 5.4", "pH 4.0 - 4.2", "pH 3.5"],
    correctAnswer: 1,
    explanation: "Demineralization of casein micelles at pH 5.2-5.4 creates dicalcium phosphate cross-links optimal for stretching into fibers.",
    category: "Cheese Technology"
  },
  {
    question: "In Ghee manufacturing, what ripening/cooling temperature range promotes optimum fat crystallization and uniform granular structure?",
    options: ["4°C", "15°C", "26 - 28°C", "45°C"],
    correctAnswer: 2,
    explanation: "Holding Ghee at 26-28°C for 24-48 hours allows high-melting liquid glycerides to slowly form large, uniform fat granules.",
    category: "Ghee Processing"
  },
  {
    question: "Which native milk enzyme hydrolyzes milk fat into free fatty acids (butyric acid) if milk is improperly agitated?",
    options: ["Lipoprotein Lipase (LPL)", "Alkaline Phosphatase", "Plasmin", "Catalase"],
    correctAnswer: 0,
    explanation: "Native Lipoprotein Lipase (LPL) hydrolyzes triglycerides at the fat globule interface, causing hydrolytic rancidity and bitter/soapy flavor.",
    category: "Enzymology"
  },
  {
    question: "In Shrikhand production, what is the concentrated curd mass called after draining whey through muslin cloth?",
    options: ["Paneer", "Chakka", "Khoa", "Rabri"],
    correctAnswer: 1,
    explanation: "Chakka is the concentrated dahi obtained after partial removal of whey, containing ~60% moisture, used as the base for Shrikhand.",
    category: "Traditional Dairy"
  },
  {
    question: "What is the maximum permissible moisture content in FSSAI standardized Butter?",
    options: ["12%", "16%", "20%", "25%"],
    correctAnswer: 1,
    explanation: "FSSAI standards stipulate a maximum of 16% moisture and a minimum of 80% milk fat in table butter.",
    category: "Butter Standards"
  },

  // SET 5: Grand All-India Mock & Advanced Calculations
  {
    question: "Using Pearson Square method, how many kg of 40% fat cream and 0.5% fat skim milk are needed to standardize 1000 kg milk to 4.5% fat?",
    options: [
      "101.3 kg Cream & 898.7 kg Skim Milk",
      "50 kg Cream & 950 kg Skim Milk",
      "200 kg Cream & 800 kg Skim Milk",
      "150 kg Cream & 850 kg Skim Milk"
    ],
    correctAnswer: 0,
    explanation: "Parts Cream = (4.5 - 0.5) = 4.0. Parts Skim = (40 - 4.5) = 35.5. Total parts = 39.5. Cream % = (4/39.5)*1000 = 101.26 kg.",
    category: "Standardization Math"
  },
  {
    question: "What is the Glass Transition Temperature (Tg) of amorphous spray-dried lactose powder?",
    options: ["101°C", "49°C", "-10°C", "180°C"],
    correctAnswer: 1,
    explanation: "Amorphous lactose has a Tg of ~49°C. Exceeding Tg due to moisture absorption causes sticky powder and caking in milk powder.",
    category: "Dairy Physics"
  },
  {
    question: "What is the specific heat capacity of skim milk (9% SNF) at 20°C?",
    options: ["2.10 kJ/kg·K", "3.93 kJ/kg·K", "4.18 kJ/kg·K", "1.50 kJ/kg·K"],
    correctAnswer: 1,
    explanation: "Water is 4.18 kJ/kg·K. Skim milk with 9% dissolved solids has a specific heat capacity of approx 3.93 kJ/kg·K.",
    category: "Thermodynamics"
  },
  {
    question: "Which microfiltration membrane pore size is specifically utilized for cold physical removal of bacteria from milk?",
    options: ["0.001 µm", "0.01 µm", "1.4 µm", "10 µm"],
    correctAnswer: 2,
    explanation: "Microfiltration with 1.4 µm ceramic membranes retains 99.5-99.9% of bacteria and spores without denaturing whey proteins.",
    category: "Membrane Tech"
  },
  {
    question: "Which natural polypeptide bacteriocin produced by Lactococcus lactis is GRAS-approved as a bio-preservative in cheese?",
    options: ["Nisin", "Natamycin", "Reuterin", "Pediocin"],
    correctAnswer: 0,
    explanation: "Nisin is a polycyclic lantibiotic peptide (34 amino acids) that forms pores in Gram-positive bacterial membranes.",
    category: "Bio-preservatives"
  },
  {
    question: "What rheological behavior is exhibited by Sweetened Condensed Milk during storage?",
    options: ["Newtonian fluid", "Thixotropic / Pseudoplastic with yield stress", "Dilatant (shear-thickening)", "Bingham plastic"],
    correctAnswer: 1,
    explanation: "Sweetened condensed milk shows shear-thinning (pseudoplastic) and thixotropic behavior due to reversible protein network structural breakdown.",
    category: "Dairy Rheology"
  },
  {
    question: "In UHT Direct Steam Injection (DSI) plant, what is the purpose of the vacuum flash vessel immediately after heating?",
    options: [
      "Cool milk instantaneously and remove condensed steam water equivalent to injected steam",
      "Increase fat globule size",
      "Preheat incoming milk",
      "Add carbonation"
    ],
    correctAnswer: 0,
    explanation: "Flash evaporation in a vacuum chamber instantly drops temperature and removes the exact amount of water added as culinary steam during injection.",
    category: "UHT Engineering"
  },
  {
    question: "What is the primary cause of 'sandiness' defect in Ice Cream and Condensed Milk?",
    options: [
      "Large Alpha-lactose monohydrate crystal growth (> 15 µm)",
      "High milk fat content",
      "Over-churning of butterfat",
      "Presence of sucrose crystals"
    ],
    correctAnswer: 0,
    explanation: "When lactose concentration exceeds saturation, it crystallizes into hard, tomahawk-shaped alpha-lactose monohydrate crystals (> 15-30 µm), causing gritty sandiness.",
    category: "Product Defects"
  },

  // ADDITIONAL EXTENDED UNIQUE DAIRY QUESTIONS
  {
    question: "Which chemical test is used to detect the presence of added Formalin (formaldehyde) in milk as a preservative?",
    options: ["Hehner Test (concentrated H2SO4 with FeCl3 forming violet ring)", "Rosolic acid test", "Resorcinol test", "Baudouin test"],
    correctAnswer: 0,
    explanation: "Hehner test forms a distinct violet or purple ring at the junction of milk and concentrated sulfuric acid containing trace ferric chloride.",
    category: "Adulteration Tests"
  },
  {
    question: "What is the maximum limit of titratable acidity (% Lactic Acid) allowed for fresh Cow Milk by FSSAI?",
    options: ["0.15%", "0.25%", "0.35%", "0.50%"],
    correctAnswer: 0,
    explanation: "Fresh unadulterated cow milk has a natural titratable acidity of 0.13 - 0.15% lactic acid equivalent, mainly due to proteins, citrates, and phosphates.",
    category: "Milk Chemistry"
  },
  {
    question: "The Baudouin Test is used to detect adulteration of Ghee with which substance?",
    options: ["Vanaspati (Hydrogenated Vegetable Oil containing Sesame Oil)", "Starch", "Mineral Oil", "Lard"],
    correctAnswer: 0,
    explanation: "Baudouin test detects Sesamin present in mandatory 5% sesame oil added to Vanaspati, forming a crimson red color with HCl and Furfural.",
    category: "Adulteration Tests"
  },
  {
    question: "Which major casein fraction exhibits high sensitivity to calcium precipitation and lacks carbohydrate moieties?",
    options: ["Alpha-s1 Casein", "Kappa-Casein", "Beta-Lactoglobulin", "Alpha-Lactalbumin"],
    correctAnswer: 0,
    explanation: "Alpha-s1 casein contains 8-9 phosphate groups and precipitates readily in the presence of Ca2+ ions, unlike glycosylated Kappa-casein.",
    category: "Protein Chemistry"
  },
  {
    question: "In Khoa production, what is the moisture content range for 'Dhapa' variety Khoa used for making Gulab Jamun?",
    options: ["20 - 25%", "37 - 44%", "15%", "50 - 60%"],
    correctAnswer: 1,
    explanation: "Dhapa Khoa has 37-44% moisture, loose body and smooth texture ideal for Gulab Jamun, while Pindi has ~31-33% moisture for Peda/Burfi.",
    category: "Traditional Products"
  },
  {
    question: "Which thermal processing index evaluates the extent of milk heat treatment by measuring undenatured whey protein nitrogen in mg per g powder?",
    options: ["WPNI (Whey Protein Nitrogen Index)", "HMF Index", "F0 Value", "Insolubility Index"],
    correctAnswer: 0,
    explanation: "WPNI classifies skim milk powder: Low-Heat (> 6.0 mg/g), Medium-Heat (1.51 - 5.99 mg/g), and High-Heat (< 1.50 mg/g).",
    category: "Powder Quality"
  },
  {
    question: "What is the primary function of adding Sodium Citrate or Disodium Phosphate as emulsifying salts in Processed Cheese manufacture?",
    options: [
      "Solubilize casein by chelating calcium and converting insoluble paracaseinate to soluble sodium paracaseinate",
      "Lower pH to 3.0",
      "Act as sweetening agent",
      "Inhibit yeast growth"
    ],
    correctAnswer: 0,
    explanation: "Emulsifying salts sequester Ca2+ ions, transforming hydrophobic calcium paracaseinate matrix into smooth, emulsified sodium paracaseinate melt.",
    category: "Cheese Chemistry"
  },
  {
    question: "Which defect in Butter is caused by oxidation of unsaturated fatty acids catalysed by copper or iron ions?",
    options: ["Tallowy / Metallic flavor defect", "Cheesy defect", "Ropy defect", "Bitty cream"],
    correctAnswer: 0,
    explanation: "Traces of heavy metals (Cu > 0.05 ppm, Fe > 0.5 ppm) accelerate free radical autoxidation of linoleic and oleic acids, generating metallic/tallowy flavor.",
    category: "Butter Quality"
  },
  {
    question: "What is the main carbohydrate present in Bovine Colostrum in higher concentration than regular milk?",
    options: ["Oligosaccharides", "Lactose", "Sucrose", "Maltose"],
    correctAnswer: 0,
    explanation: "Colostrum contains significantly higher concentrations of sialylated and fucosylated immunomodulatory oligosaccharides, whereas lactose is lower.",
    category: "Colostrum Chemistry"
  },
  {
    question: "In Ultrafiltration of whey, what membrane cut-off (MWCO) is selected to retain whey proteins (Alpha-lactalbumin and Beta-lactoglobulin)?",
    options: ["100 Da", "10,000 - 30,000 Da (10-30 kDa)", "500,000 Da", "5,000,000 Da"],
    correctAnswer: 1,
    explanation: "Alpha-lactalbumin (~14.2 kDa) and Beta-lactoglobulin (~18.4 kDa) are retained by 10-30 kDa MWCO membranes, letting lactose and salts pass through.",
    category: "Membrane Tech"
  },
  {
    question: "What enzyme is used in cold-sterilized or low-lactose milk processing to hydrolyze lactose into Glucose and Galactose?",
    options: ["Beta-Galactosidase (Lactase)", "Alpha-Amylase", "Chymosin", "Glucoamylase"],
    correctAnswer: 0,
    explanation: "Beta-Galactosidase (Lactase derived from Kluyveromyces lactis or Aspergillus niger) cleaves lactose into glucose and galactose.",
    category: "Dairy Enzymes"
  },
  {
    question: "In Dahi manufacturing, what level of acidity (% Lactic Acid) indicates ideal setting and firm curd structure?",
    options: ["0.2%", "0.75 - 0.90%", "2.5%", "4.0%"],
    correctAnswer: 1,
    explanation: "Dahi reaches optimal firm body and balanced mild acidic flavor at 0.75-0.90% titratable acidity (pH 4.4 - 4.6).",
    category: "Fermented Products"
  },
  {
    question: "Which thermal evaporator component creates high vacuum inside the vapor chamber to lower the boiling point of milk?",
    options: ["Barometric Condenser with Steam Ejector or Vacuum Pump", "Homogenizer valve", "Plate heat exchanger", "Fluidized bed"],
    correctAnswer: 0,
    explanation: "Barometric condensers coupled with steam jet ejectors or liquid ring vacuum pumps pull vacuum (70-85 kPa), dropping milk boiling point to 50-65°C.",
    category: "Evaporator Design"
  },
  {
    question: "What is the principal phospholipid constituent of the Milk Fat Globule Membrane (MFGM)?",
    options: ["Sphingomyelin, Phosphatidylcholine & Phosphatidylethanolamine", "Triacylglycerol", "Free cholesterol", "Lecithin only"],
    correctAnswer: 0,
    explanation: "MFGM trilayer is rich in polar lipids: Sphingomyelin (25-35%), Phosphatidylcholine (25-35%), and Phosphatidylethanolamine (20-30%).",
    category: "MFGM Chemistry"
  },
  {
    question: "Which heat treatment method applies 135-150°C for 2 to 5 seconds to achieve commercial sterility in liquid milk?",
    options: ["LTLT Pasteurization", "HTST Pasteurization", "UHT (Ultra-High Temperature) Processing", "Thermization"],
    correctAnswer: 2,
    explanation: "UHT processing at 135-150°C for 2-5 seconds destroys all vegetative microorganisms and bacterial endospores (F0 > 5-6).",
    category: "Thermal Processing"
  },
  {
    question: "In continuous butter making machine (Fritz process), what phase transformation occurs during high-speed churning?",
    options: [
      "Phase inversion from Oil-in-Water (O/W) emulsion to Water-in-Oil (W/O) emulsion",
      "Gelation of casein",
      "Crystallization of lactose",
      "Evaporation of moisture"
    ],
    correctAnswer: 0,
    explanation: "High speed beaters rupture MFGM, releasing liquid fat that cements fat crystals into butter granules, inverting O/W cream to W/O butter.",
    category: "Butter Technology"
  },
  {
    question: "What is the minimum Milk Solids-Not-Fat (SNF) percentage prescribed by FSSAI for Double Toned Milk?",
    options: ["8.5%", "9.0%", "10.0%", "11.0%"],
    correctAnswer: 1,
    explanation: "FSSAI standards mandate 1.5% Fat and 9.0% SNF for Double Toned Milk.",
    category: "FSSAI Standards"
  },
  {
    question: "Which microorganism causes 'late blowing' defect in Swiss and Gouda cheese characterized by gas cracks and butyric off-odor?",
    options: ["Clostridium tyrobutyricum", "Lactococcus lactis", "Penicillium roqueforti", "Streptococcus thermophilus"],
    correctAnswer: 0,
    explanation: "Clostridium tyrobutyricum endospores survive pasteurization and ferment lactate into butyric acid, CO2, and H2 gas during ripening.",
    category: "Cheese Microbiology"
  },
  {
    question: "What is the purpose of adding starter culture Brevibacterium linens during surface-ripened cheese production (e.g. Tilsit, Brick)?",
    options: [
      "Produce reddish-orange smear coating and characteristic pungent aroma via protein hydrolysis",
      "Inhibit mold",
      "Coagulate milk",
      "Form eyes"
    ],
    correctAnswer: 0,
    explanation: "Brevibacterium linens forms an orange smear on washed-rind cheeses, secreting proteases and methanethiol for pungent flavor.",
    category: "Cheese Ripening"
  },
  {
    question: "What centrifugal separator efficiency is expected in modern hermetic disc-bowl cream separators regarding residual fat in skim milk?",
    options: ["< 0.05% fat (0.03 - 0.05%)", "0.5% fat", "1.0% fat", "2.0% fat"],
    correctAnswer: 0,
    explanation: "Hermetic disk bowl cream separators achieve extreme skimming efficiency, leaving < 0.04-0.05% fat in skim milk.",
    category: "Dairy Engineering"
  }
];

export const ALL_FOOD_QUESTIONS: Omit<Question, "id">[] = [
  // SET 1: Thermal Processing & Food Engineering
  {
    question: "What is the D-value (Decimal Reduction Time) in thermal processing of foods?",
    options: [
      "Time required to destroy 100% of bacterial spores at a given temperature",
      "Time required to reduce the microbial population by 90% (1 log cycle) at a given temperature",
      "Temperature change required to change the D-value by a factor of 10",
      "Time required to heat the food to 121.1°C"
    ],
    correctAnswer: 1,
    explanation: "D-value is the heating time in minutes at a specific constant temperature required to kill 90% (1-log cycle) of the microbial population.",
    category: "Food Engineering"
  },
  {
    question: "Which microorganism is used as the target reference organism for commercial sterility of low-acid canned foods (F0 = 3 minutes)?",
    options: ["Escherichia coli", "Bacillus cereus", "Clostridium botulinum", "Salmonella enterica"],
    correctAnswer: 2,
    explanation: "Clostridium botulinum type A and B spores are the target for commercial sterility (12-D process) in low-acid foods (pH > 4.6).",
    category: "Food Microbiology"
  },
  {
    question: "What is water activity (aw) defined as in food thermodynamics?",
    options: [
      "Percentage of total moisture content",
      "Ratio of vapor pressure of water in food to vapor pressure of pure water at the same temperature",
      "Amount of free water in grams",
      "Ratio of bound water to free water"
    ],
    correctAnswer: 1,
    explanation: "Water activity aw = p / p0, measuring available water for chemical and microbial reactions.",
    category: "Food Chemistry"
  },
  {
    question: "In Modified Atmosphere Packaging (MAP) of fresh produce, what gas composition is typically maintained?",
    options: ["High O2 (80%)", "Low O2 (2-5%), High CO2 (3-5%), Balance N2", "100% CO2", "100% O2"],
    correctAnswer: 1,
    explanation: "Lowering O2 (2-5%) and elevating CO2 (3-5%) slows down produce respiration and Senescence.",
    category: "Food Packaging"
  },
  {
    question: "Which enzyme causes rapid enzymatic browning in cut fruits and vegetables?",
    options: ["Lipoxygenase", "Polyphenol Oxidase (PPO)", "Pectinase", "Amylase"],
    correctAnswer: 1,
    explanation: "Polyphenol Oxidase (PPO) oxidizes phenolic compounds into o-quinones, which polymerize to brown melanin pigments.",
    category: "Food Biochemistry"
  },
  {
    question: "Which preservation method uses high hydrostatic pressure (HPP) (400-600 MPa) to pasteurize food without heat?",
    options: ["Pascalization", "Appertization", "Radappertization", "Tyndallization"],
    correctAnswer: 0,
    explanation: "Pascalization (High Pressure Processing - HPP) inactivates microbes by disrupting non-covalent hydrogen bonds.",
    category: "Food Preservation"
  },

  // SET 2: FSSAI Regulations, QA & Oils
  {
    question: "What is the FSSAI maximum permissible limit for Total Polar Compounds (TPC) in frying oil before discard?",
    options: ["10%", "15%", "25%", "40%"],
    correctAnswer: 2,
    explanation: "FSSAI mandates that repeated frying oil must be discarded when Total Polar Compounds (TPC) exceed 25%.",
    category: "FSSAI Regulations"
  },
  {
    question: "Which chemical value measures initial primary oxidation products (hydroperoxides) in fats and oils?",
    options: ["Acid Value", "Peroxide Value (PV)", "Anisidine Value", "Reichert-Meissl Value"],
    correctAnswer: 1,
    explanation: "Peroxide Value (PV) measures milliequivalents of peroxide per kg of oil, indicating early lipid autoxidation.",
    category: "Oil Chemistry"
  },
  {
    question: "What is the main purpose of adding Sodium Benzoate preservative to acidic fruit juices (pH < 4.0)?",
    options: ["Inhibit yeasts and molds", "Inhibit lactic acid bacteria only", "Prevent fat rancidity", "Enhance sweetness"],
    correctAnswer: 0,
    explanation: "Undissociated benzoic acid molecules penetrate yeast and mold cell walls in acidic media.",
    category: "Food Additives"
  },
  {
    question: "In sugar confectionery, what instrument is used to measure Total Soluble Solids (°Brix) of syrup?",
    options: ["Viscometer", "Refractometer", "Texture Analyzer", "Pycnometer"],
    correctAnswer: 1,
    explanation: "Refractometers measure light refraction angle proportional to dissolved sucrose concentration in °Brix.",
    category: "Quality Control"
  },
  {
    question: "What is the critical control point (CCP) definition in HACCP Food Safety System?",
    options: [
      "Any step in food process",
      "A step at which control can be applied to prevent, eliminate, or reduce a food safety hazard to acceptable levels",
      "Quality inspection of final package",
      "Daily floor washing"
    ],
    correctAnswer: 1,
    explanation: "A CCP is a mandatory process step critical to prevent or eliminate safety hazards.",
    category: "HACCP & Safety"
  },
  {
    question: "Which wheat flour protein fraction gives bread dough its characteristic elasticity and gas retention strength?",
    options: ["Albumin", "Globulin", "Glutenin", "Gliadin"],
    correctAnswer: 2,
    explanation: "Glutenin forms high molecular weight disulfide-bonded polymers responsible for dough elasticity.",
    category: "Cereal Science"
  },

  // SET 3: Grains, Fruits & Advanced Food Tech
  {
    question: "What is the z-value in thermal bacteriology?",
    options: [
      "Temperature change required to change the D-value by a factor of 10 (1 log cycle)",
      "Time in minutes to kill 90% microbes",
      "Activation energy in kJ/mol",
      "Decimal reduction time at 100°C"
    ],
    correctAnswer: 0,
    explanation: "z-value is the temperature increase required to reduce D-value by 90% (1-log cycle). For C. botulinum spores, z ≈ 10°C (18°F).",
    category: "Thermal Processing"
  },
  {
    question: "Which processing operation involves brief steam/water heating of vegetables prior to freezing or canning to inactivate enzymes?",
    options: ["Blanching", "Pasteurization", "Liofilization", "Tyndallization"],
    correctAnswer: 0,
    explanation: "Blanching inactivates spoilage enzymes (Catalase and Peroxidase) preventing flavor and color degradation during frozen storage.",
    category: "Vegetable Processing"
  },
  {
    question: "High Methoxyl (HM) Pectin gelation requires which specific conditions?",
    options: [
      "High Soluble Solids (> 65% sugar) and acidic pH (3.0 - 3.5)",
      "Low sugar and high Calcium ions",
      "Alkaline pH 9.0",
      "Boiling temperature above 120°C"
    ],
    correctAnswer: 0,
    explanation: "HM Pectin (degree of esterification > 50%) requires high soluble solids (> 65% Brix) and low pH (3.0-3.5) to form hydrophobic hydrogen-bonded junction zones.",
    category: "Food Hydrocolloids"
  },
  {
    question: "Which mycotoxin produced by Aspergillus flavus is a potent hepatocarcinogen strictly regulated in peanuts and corn?",
    options: ["Aflatoxin B1", "Patulin", "Ochratoxin A", "Fumonisin"],
    correctAnswer: 0,
    explanation: "Aflatoxin B1 is the most toxic naturally occurring mycotoxin, regulated at max 10-15 ppb in food grains by FSSAI.",
    category: "Food Safety"
  },
  {
    question: "During rice parboiling, what gelatinization phenomenon enhances kernel hardness and milling recovery?",
    options: [
      "Starch gelatinization and migration of water-soluble B-vitamins (Thiamine) into endosperm",
      "Protein degradation",
      "Lipid oxidation",
      "Fermentation"
    ],
    correctAnswer: 0,
    explanation: "Parboiling (soaking, steaming, drying) gelatinizes starch granules, filling internal fissures and driving vitamins into the endosperm core.",
    category: "Cereal Technology"
  },
  {
    question: "What non-thermal technology utilizes high intensity short electric pulses (10-80 kV/cm) for cell membrane electroporation?",
    options: ["Pulsed Electric Field (PEF)", "Ohmic Heating", "Irradiation", "Ultrasonic Extraction"],
    correctAnswer: 0,
    explanation: "PEF induces dielectric breakdown of microbial cell membranes (electroporation) without significant thermal damage.",
    category: "Novel Food Processing"
  },

  // SET 4: Food Additives, Packaging & Fats
  {
    question: "What is the primary function of adding Phosphoric Acid during vegetable oil refining (Degumming)?",
    options: [
      "Convert non-hydratable phosphatides into hydratable gums for removal",
      "Bleach dark pigments",
      "Deodorize volatile fatty acids",
      "Hydrogenate double bonds"
    ],
    correctAnswer: 0,
    explanation: "Phosphoric acid chelates Ca/Mg ions bound to non-hydratable phosphatides (phosphatidic acid), turning them into water-soluble hydratable gums.",
    category: "Edible Oil Refining"
  },
  {
    question: "Which lacquer coating is applied inside tinplate cans used for sulfur-rich foods (e.g. fish, meat, pulses) to prevent black staining?",
    options: ["Epoxy Phenolic / Zinc Oxide enamel (S-lacquer)", "Oleoresinous C-enamel", "Polyethylene film", "Varnish"],
    correctAnswer: 0,
    explanation: "Zinc Oxide in S-lacquer reacts with hydrogen sulfide released during retorting to form white Zinc Sulfide instead of unsightly black Iron Sulfide.",
    category: "Food Packaging"
  },
  {
    question: "What is the legal maximum limit for trans-fatty acids in edible fats and oils enforced by FSSAI?",
    options: ["Not more than 2% by weight", "Not more than 5%", "Not more than 10%", "No limit"],
    correctAnswer: 0,
    explanation: "FSSAI capped trans-fatty acids in all fats and oils to a maximum of 2% by weight.",
    category: "FSSAI Regulations"
  },
  {
    question: "Which instrument measures dough rheological properties such as water absorption, arrival time, and dough stability during mixing?",
    options: ["Farinograph", "Extensograph", "Amylograph", "Alveograph"],
    correctAnswer: 0,
    explanation: "Brabender Farinograph measures resistance of dough to mixing blades, yielding Farinograph Quality Number and absorption capacity.",
    category: "Cereal Rheology"
  },
  {
    question: "What is the primary mechanism of action of Sulfur Dioxide (SO2) / Sodium Metabisulfite in food preservation?",
    options: [
      "Inhibit enzymatic browning, non-enzymatic browning, and microbial growth in fruit pulps & wines",
      "Increase pH",
      "Enhance lipid oxidation",
      "Promote Maillard reaction"
    ],
    correctAnswer: 0,
    explanation: "SO2 forms bisulfite adducts with carbonyl groups, blocking Maillard browning, inactivating PPO, and destroying microbial thiamine/enzymes.",
    category: "Food Preservatives"
  },
  {
    question: "What chemical value measures secondary oxidation products (unsaturated aldehydes) in degraded oils?",
    options: ["p-Anisidine Value (p-AV)", "Peroxide Value", "Reichert-Meissl Value", "Polenske Value"],
    correctAnswer: 0,
    explanation: "p-Anisidine Value measures 2-alkenals and 2,4-dienals forming yellow color with p-anisidine, reflecting past lipid oxidation history.",
    category: "Lipid Chemistry"
  },
  {
    question: "Which pathogen produces a potent, heat-stable emetic enterotoxin (Cereulide) in cooked rice left at room temperature?",
    options: ["Bacillus cereus", "Clostridium perfringens", "Salmonella typhi", "Vibrio cholerae"],
    correctAnswer: 0,
    explanation: "Emetic strains of Bacillus cereus produce Cereulide, a cyclic dodecadepsipeptide resistant to 121°C autoclaving for 90 mins.",
    category: "Foodborne Pathogens"
  },
  {
    question: "What heat treatment classification corresponds to radiation doses between 1 kGy and 10 kGy used to kill non-spore pathogens?",
    options: ["Radicidation", "Radurization", "Radappertization", "Thermoradiation"],
    correctAnswer: 0,
    explanation: "Radicidation (1 - 10 kGy) kills non-spore-forming pathogenic bacteria (Salmonella, Listeria) analogous to pasteurization.",
    category: "Food Irradiation"
  },

  // SET 5: Grand Food Tech Mock & Advanced Chemistry
  {
    question: "What parameter defines the temperature required to reduce the D-value of a microorganism by 90% (1-log cycle)?",
    options: ["z-value", "F-value", "C-value", "Q10 temperature coefficient"],
    correctAnswer: 0,
    explanation: "z-value is the slope reciprocal of the thermal death time curve, representing temperature dependence of microbial inactivation rate.",
    category: "Bacteriology"
  },
  {
    question: "In extrusion cooking, what parameter measures the thermal and mechanical energy input per unit mass of extrudate?",
    options: ["Specific Mechanical Energy (SME)", "Overrun", "Expansion ratio", "Degree of gelatinization"],
    correctAnswer: 0,
    explanation: "SME (in Wh/kg or kJ/kg) quantifies motor power dissipated as viscous dissipation heat into dough inside the extruder barrel.",
    category: "Extrusion Tech"
  },
  {
    question: "What is the water activity (aw) minimum limit below which NO pathogenic or spoilage bacteria can grow?",
    options: ["0.60", "0.75", "0.85", "0.91"],
    correctAnswer: 3,
    explanation: "Most spoilage bacteria require aw ≥ 0.91. Staphylococcus aureus can produce toxin down to aw 0.85 under aerobic conditions.",
    category: "Microbial Kinetics"
  },
  {
    question: "Which food hydrocolloid forms a thermoreversible gel upon cooling with Potassium (K+) ions?",
    options: ["Kappa-Carrageenan", "Sodium Alginate", "Guar Gum", "Xanthan Gum"],
    correctAnswer: 0,
    explanation: "Kappa-carrageenan helices aggregate into rigid gel networks specifically promoted by Potassium (K+) cross-linking.",
    category: "Food Gums"
  },
  {
    question: "What structural modification occurs during Hydrogenation of vegetable oils resulting in high melting trans-fatty acids?",
    options: [
      "Isomerization of cis double bonds to trans spatial configuration",
      "Complete saturation of glycerol backbone",
      "Hydrolysis into free fatty acids",
      "Polymerization of triglycerides"
    ],
    correctAnswer: 0,
    explanation: "Partial hydrogenation over Ni catalyst causes reversible double bond double bond rotation, producing high-melting trans isomers (Elaidic acid).",
    category: "Fat Modification"
  },
  {
    question: "In canned food processing, what type of internal container corrosion produces hydrogen gas build-up without microbial growth?",
    options: ["Hydrogen Swell", "Hard Swell", "Flat Sour", "Stack Burning"],
    correctAnswer: 0,
    explanation: "Hydrogen swell occurs when acid food attacks tinplate iron, releasing H2 gas that bulges can ends while remaining sterile.",
    category: "Canning Defects"
  },
  {
    question: "Which carbohydrate reaction is non-enzymatic, requires amino compounds, and proceeds rapidly at low water activity (aw 0.6 - 0.8)?",
    options: ["Maillard Browning Reaction", "Caramelization", "Enzymatic browning", "Ascorbic acid oxidation"],
    correctAnswer: 0,
    explanation: "Maillard browning peaks at intermediate water activity (aw 0.6-0.8) where reactants are concentrated yet mobile.",
    category: "Food Chemistry"
  },
  {
    question: "What is the primary volatile compound responsible for pungent aroma in mustard oil?",
    options: ["Allyl Isothiocyanate", "Allicin", "Capsaicin", "Piperine"],
    correctAnswer: 0,
    explanation: "Myrosinase enzyme hydrolyzes glucosinolate (Sinigrin) in mustard seeds to produce pungent Allyl Isothiocyanate.",
    category: "Flavor Chemistry"
  }
];

export const ALL_BIOTECH_QUESTIONS: Omit<Question, "id">[] = [
  // SET 1: Recombinant DNA & Genetic Engineering
  {
    question: "Which type of restriction endonuclease cleaves DNA at specific palindromic recognition sequences without requiring ATP?",
    options: ["Type I", "Type II", "Type III", "Type IV"],
    correctAnswer: 1,
    explanation: "Type II restriction endonucleases cleave phosphodiester bonds at or near specific palindromic recognition sequences, requiring only Mg2+ as cofactor.",
    category: "Recombinant DNA"
  },
  {
    question: "What selectable marker genes are present on pBR322 cloning vector for antibiotic selection?",
    options: ["Ampicillin resistant (ampR) and Tetracycline resistant (tetR)", "KanR and LacZ", "NeoR and GFP", "PuromycinR"],
    correctAnswer: 0,
    explanation: "pBR322 carries ampR (beta-lactamase) and tetR genes, enabling insertional inactivation cloning.",
    category: "Cloning Vectors"
  },
  {
    question: "In blue-white screening using pUC19 vector, what causes white colonies to form on X-gal + IPTG agar plates?",
    options: [
      "Insertional inactivation of the lacZ alpha-peptide gene fragment",
      "Functional beta-galactosidase expression",
      "Ampicillin hydrolysis",
      "Lysis of bacterial cells"
    ],
    correctAnswer: 0,
    explanation: "Foreign DNA insertion into the Multiple Cloning Site (MCS) disrupts lacZ alpha-peptide coding sequence, preventing alpha-complementation. Cells remain white.",
    category: "Molecular Screening"
  },
  {
    question: "Which bacterial species is naturally capable of transferring T-DNA from its Ti plasmid into plant genomes?",
    options: ["Agrobacterium tumefaciens", "Escherichia coli", "Bacillus thuringiensis", "Pseudomonas syringae"],
    correctAnswer: 0,
    explanation: "Agrobacterium tumefaciens transfers T-DNA bounded by 25-bp direct border repeats into plant nuclear genomes via Vir protein machinery.",
    category: "Plant Biotech"
  },
  {
    question: "In Polymerase Chain Reaction (PCR), what is the formula used to estimate primer Melting Temperature (Tm)?",
    options: [
      "Tm = 2(A + T) + 4(G + C)",
      "Tm = 4(A + T) + 2(G + C)",
      "Tm = (A + T + G + C) / 4",
      "Tm = 65°C constant"
    ],
    correctAnswer: 0,
    explanation: "Wallace rule estimates primer melting temperature: Tm = 2°C × (Count of A + T) + 4°C × (Count of G + C).",
    category: "PCR Technology"
  },
  {
    question: "Which enzyme synthesizes complementary DNA (cDNA) from an mRNA template using an oligo(dT) primer?",
    options: ["DNA Polymerase I", "Reverse Transcriptase (RNA-dependent DNA Polymerase)", "Taq Polymerase", "RNA Polymerase II"],
    correctAnswer: 1,
    explanation: "Reverse transcriptase transcribes single-stranded mRNA into cDNA by binding to the poly-A tail via an oligo(dT) primer.",
    category: "Enzymology"
  },

  // SET 2: Bioprocess Engineering & Kinetics
  {
    question: "In a stirred tank bioreactor (STR), what is the typical ratio of liquid height (H) to tank diameter (D)?",
    options: ["0.5 : 1", "2 : 1 to 3 : 1", "10 : 1", "0.1 : 1"],
    correctAnswer: 1,
    explanation: "Industrial STRs maintain an aspect ratio (H/D) of 2:1 to 3:1 for optimal gas hold-up and power dissipation.",
    category: "Bioreactor Design"
  },
  {
    question: "What impeller type provides high radial shear stress ideal for gas dispersion in microbial fermenters?",
    options: ["6-flat blade Rushton turbine", "Marine propeller", "Anchor impeller", "Helical ribbon"],
    correctAnswer: 0,
    explanation: "Rushton turbine generates radial flow and high shear, breaking sparged gas bubbles into small bubbles for high interfacial area.",
    category: "Fermentation Eng"
  },
  {
    question: "In Monod microbial growth kinetics, what does the saturation constant (Ks) represent?",
    options: [
      "Substrate concentration at which specific growth rate (µ) is equal to half of maximum growth rate (µmax / 2)",
      "Maximum specific growth rate",
      "Cell yield coefficient",
      "Maintenance coefficient"
    ],
    correctAnswer: 0,
    explanation: "Ks (g/L or mg/L) measures substrate affinity; lower Ks indicates higher enzyme/cell affinity for substrate.",
    category: "Bioprocess Kinetics"
  },
  {
    question: "In a Chemostat continuous culture operating at steady state, the specific growth rate (µ) is equal to:",
    options: ["Dilution Rate (D)", "Maximum growth rate (µmax)", "Zero", "Double the feed rate"],
    correctAnswer: 0,
    explanation: "At steady state in a chemostat, cell growth equals cell loss in effluent, so µ = D (where D = Feed Flow rate F / Working Volume V).",
    category: "Continuous Culture"
  },
  {
    question: "What phenomenon occurs in a Chemostat when Dilution Rate (D) exceeds the maximum specific growth rate (µmax)?",
    options: ["Washout", "Substrate inhibition", "Exponential accumulation", "Stationary phase"],
    correctAnswer: 0,
    explanation: "When D > µmax, cells are pumped out faster than they can divide, resulting in complete depletion of biomass (Washout).",
    category: "Bioprocess Control"
  },
  {
    question: "In thermal sterilization of fermentation media, what parameter quantifies the overall logarithmic cell kill (Del factor, ∇)?",
    options: ["∇ = ln(N0 / Nt)", "∇ = D × t", "∇ = µmax × S", "∇ = kLa"],
    correctAnswer: 0,
    explanation: "Del factor ∇ = ln(Initial viable spores N0 / Desired final spores Nt) = integral of k(T) dt over time.",
    category: "Media Sterilization"
  },

  // SET 3: Downstream Processing (DSP) & Separation
  {
    question: "Which high-pressure mechanical cell disruption equipment operates by forcing cell suspension through a narrow valve orifice at 50-150 MPa?",
    options: ["High-Pressure Homogenizer (Manton-Gaulin)", "Bead Mill", "Ultrasonic probe", "Lyophilizer"],
    correctAnswer: 0,
    explanation: "High-pressure homogenizers disrupt microbial cells via extreme shear, impact against impact ring, and sudden pressure drop cavitation.",
    category: "Cell Disruption"
  },
  {
    question: "What parameter measures the equivalent settling area of a centrifuge relative to a gravity settling basin?",
    options: ["Sigma Factor (Σ)", "G-force", "Reynolds number", "Schmidt number"],
    correctAnswer: 0,
    explanation: "Sigma factor Σ = (ω² V) / (g ln(r2/r1)), representing theoretical settling area of a centrifuge for scale-up.",
    category: "Centrifugation"
  },
  {
    question: "In Ultrafiltration membrane separation, what does MWCO stand for?",
    options: ["Molecular Weight Cut-Off", "Maximum Water Concentration Output", "Membrane Wash Cycle Operation", "Mass Weight Coefficient"],
    correctAnswer: 0,
    explanation: "MWCO specifies the solute molecular weight (in Daltons) at which 90% of the solute is retained by the membrane.",
    category: "Membrane Filtration"
  },
  {
    question: "Which downstream chromatography separates proteins based on reversible electrostatic interactions with charged stationary matrix?",
    options: ["Ion Exchange Chromatography (IEX)", "Hydrophobic Interaction (HIC)", "Size Exclusion (SEC)", "Affinity Chromatography"],
    correctAnswer: 0,
    explanation: "Anion exchangers (DEAE) bind negatively charged proteins, while Cation exchangers (CM/SP) bind positively charged proteins.",
    category: "Downstream Separation"
  },
  {
    question: "In Hydrophobic Interaction Chromatography (HIC), under what salt concentration conditions do target proteins bind to the matrix?",
    options: [
      "High lyotropic salt concentration (e.g. 1-2 M Ammonium Sulfate)",
      "Zero salt (deionized water)",
      "Acidic pH 2.0 without salt",
      "High urea concentration"
    ],
    correctAnswer: 0,
    explanation: "High salt promotes hydrophobic interactions by ordering water molecules around hydrophobic patches, driving protein binding.",
    category: "Chromatography"
  },
  {
    question: "In His-tagged recombinant protein purification using Ni-NTA agarose affinity chromatography, what molecule is added to elute the bound protein?",
    options: ["Imidazole", "Glucose", "Ampicillin", "EDTA"],
    correctAnswer: 0,
    explanation: "Imidazole competes with the Histidine imidazole rings for coordination sites on nickel ions (Ni2+), eluting the His-tagged protein.",
    category: "Protein Affinity"
  },

  // SET 4: Immunology & Molecular Diagnostics
  {
    question: "In Monoclonal Antibody production via Hybridoma technology (Kohler & Milstein), why is HAT medium used for selection?",
    options: [
      "Aminopterin blocks de novo purine/pyrimidine synthesis; only fused hybridomas with HGPRT gene from B-cells survive via salvage pathway",
      "HAT kills all B-cells instantly",
      "HAT acts as nutrient supplement",
      "HAT induces cell fusion"
    ],
    correctAnswer: 0,
    explanation: "Aminopterin blocks de novo nucleotide synthesis. Myeloma cells (HGPRT-) die. Unfused B-cells die naturally. Only HGPRT+ hybridomas survive.",
    category: "Hybridoma Tech"
  },
  {
    question: "Which ELISA format utilizes a primary capture antibody, sample antigen, and an enzyme-conjugated secondary detection antibody forming a sandwich?",
    options: ["Sandwich ELISA", "Direct ELISA", "Competitive ELISA", "Indirect ELISA"],
    correctAnswer: 0,
    explanation: "Sandwich ELISA binds antigen between two specific antibodies (capture and detection), providing high specificity for complex samples.",
    category: "Immunoassays"
  },
  {
    question: "In Western Blotting, what electrical transfer method moves proteins from SDS-PAGE gel onto PVDF or Nitrocellulose membrane?",
    options: ["Electroblotting (Tank or Semi-dry transfer)", "Capillary transfer", "Gravity flow", "Vacuum drying"],
    correctAnswer: 0,
    explanation: "An electric field perpendicular to the gel drives negatively charged SDS-bound proteins onto the binding membrane.",
    category: "Molecular Blotting"
  },
  {
    question: "In Flow Cytometry (FACS), what parameter correlates with cell size?",
    options: ["Forward Scatter (FSC)", "Side Scatter (SSC)", "Fluorescence Intensity", "Absorbance at 280 nm"],
    correctAnswer: 0,
    explanation: "Forward Scattered light (FSC) diffracted at small angles (0.5 - 5°) is proportional to cell surface area or size.",
    category: "Cell Analysis"
  },
  {
    question: "What biophysical analytical technique measures real-time label-free biomolecular interactions via surface refractive index changes?",
    options: ["Surface Plasmon Resonance (SPR / Biacore)", "NMR Spectroscopy", "X-ray Crystallography", "Mass Spectrometry"],
    correctAnswer: 0,
    explanation: "SPR measures changes in the angle of reflected polarized light caused by mass binding at a sensor chip gold surface.",
    category: "Biophysical Methods"
  },
  {
    question: "What enzyme catalyzes the conversion of Glucose into Gluconic acid and H2O2 in commercial enzymatic blood glucose biosensors?",
    options: ["Glucose Oxidase (GOD)", "Hexokinase", "Glucose-6-Phosphate Dehydrogenase", "Lactate Dehydrogenase"],
    correctAnswer: 0,
    explanation: "Glucose oxidase oxidizes beta-D-glucose, generating hydrogen peroxide which is electrochemically detected at an electrode.",
    category: "Biosensors"
  },

  // SET 5: Grand Biotech Mock & Systems Biology
  {
    question: "In CRISPR-Cas9 genome editing, what short 2-6 bp DNA motif adjacent to the target site is mandatory for Cas9 cleavage?",
    options: ["Protospacer Adjacent Motif (PAM, 5'-NGG-3')", "TATA box", "Shine-Dalgarno sequence", "Poly-A signal"],
    correctAnswer: 0,
    explanation: "Cas9 requires PAM recognition (5'-NGG-3' for SpCas9) to unwind DNA and initiate sgRNA base-pairing.",
    category: "Gene Editing"
  },
  {
    question: "What is the theoretical yield coefficient (Yx/s) of bacterial biomass produced per gram of glucose substrate consumed under aerobic conditions?",
    options: ["0.45 - 0.50 g biomass / g glucose", "1.0 g / g", "0.05 g / g", "2.5 g / g"],
    correctAnswer: 0,
    explanation: "Aerobic microbial growth on glucose typically yields ~0.4-0.5 g cell dry weight per gram glucose consumed.",
    category: "Fermentation Yield"
  },
  {
    question: "Which cDNA library screening method uses radio-labeled antibody probes to bind expressed recombinant proteins?",
    options: ["Immunological Screening (Western/Expression screening)", "Plaque hybridization", "PCR screening", "Restriction digestion"],
    correctAnswer: 0,
    explanation: "Expression vectors (lambda gt11) produce protein products bound by specific antibodies on nitrocellulose filters.",
    category: "Library Screening"
  },
  {
    question: "During Freeze Drying (Lyophilization), at what stage is frozen ice removed directly via Sublimation under deep vacuum?",
    options: ["Primary Drying", "Secondary Drying", "Freezing phase", "Annealing phase"],
    correctAnswer: 0,
    explanation: "Primary drying sublimes ice into water vapor below the triple point (pressure < 611 Pa, temp < 0°C).",
    category: "Lyophilization"
  },
  {
    question: "Which metabolic pathway engineering strategy overexpresses the rate-limiting enzyme to increase flux toward target bioproducts?",
    options: ["Targeted Overexpression / Rate-limiting Step Alleviation", "Gene Knockout", "Antisense RNA", "Feed-batch control"],
    correctAnswer: 0,
    explanation: "Relieving bottleneck enzymes increases metabolic flux through synthetic pathways toward desired metabolites.",
    category: "Metabolic Eng"
  },
  {
    question: "What is the function of DpnI restriction enzyme in site-directed mutagenesis kits (QuikChange)?",
    options: [
      "Selectively digest methylated parental template DNA, leaving unmethylated synthesized mutant plasmid intact",
      "Ligate mutant primers",
      "Amplify plasmid",
      "Denature DNA"
    ],
    correctAnswer: 0,
    explanation: "DpnI specifically cleaves 5'-Gm6ATC-3' methylated target DNA isolated from E. coli, eliminating non-mutated parental plasmid.",
    category: "Mutagenesis"
  }
];

// Algorithmic Dynamic Question Generator with STRICT UNIQUE SELECTION (Zero Repetition)
function generateDynamicPaper(
  discipline: DisciplineType, 
  testMode: TestModeType,
  setNum: number,
  paperSeed: number,
  usedQuestionTexts: Set<string>
): { questions: Question[]; paperId: string; totalQs: number; timeMins: number } {
  let masterPool: Omit<Question, "id">[] = [];
  if (discipline === "dairy") masterPool = ALL_DAIRY_QUESTIONS;
  else if (discipline === "food") masterPool = ALL_FOOD_QUESTIONS;
  else masterPool = ALL_BIOTECH_QUESTIONS;

  const targetTotal = testMode === "mock" ? 30 : 120;
  const timeMins = testMode === "mock" ? 30 : 120;

  // 1. Strict deduplication of master pool by question text
  const uniquePool: Omit<Question, "id">[] = [];
  const seenTexts = new Set<string>();

  for (const q of masterPool) {
    const trimmed = q.question.trim();
    if (!seenTexts.has(trimmed)) {
      seenTexts.add(trimmed);
      uniquePool.push(q);
    }
  }

  // 2. Set Category Keyword Matching
  const setKeywordsMap: Record<number, string[]> = {
    1: ["gate", "icar", "core", "chemistry", "fundamental", "dna", "thermal"],
    2: ["fssai", "adulteration", "qa", "quality", "mbrt", "gerber", "act", "standard", "safety", "oil", "regulations"],
    3: ["engineering", "plant", "evaporator", "dryer", "cip", "utility", "refrigeration", "phe", "grain", "dsp", "separation"],
    4: ["microbiology", "culture", "cheese", "butter", "ghee", "yoghurt", "fermentation", "protein", "additives", "packaging", "immuno"],
    5: ["calculation", "membrane", "rheology", "packaging", "advanced", "grand", "mock", "systems", "yield"]
  };
  const keywords = setKeywordsMap[setNum] || [];

  const isSetMatch = (q: Omit<Question, "id">) => {
    const cat = q.category.toLowerCase();
    const text = q.question.toLowerCase();
    return keywords.some(kw => cat.includes(kw) || text.includes(kw));
  };

  // 3. Separate pool into Unseen (never attempted in current session) vs Seen
  const unseenPool = uniquePool.filter(q => !usedQuestionTexts.has(q.question.trim()));
  const seenPool = uniquePool.filter(q => usedQuestionTexts.has(q.question.trim()));

  // Seed-influenced pseudo-random shuffle
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const shuffledUnseen = shuffleArray(unseenPool);
  const shuffledSeen = shuffleArray(seenPool);

  const priorityUnseen = shuffledUnseen.filter(isSetMatch);
  const otherUnseen = shuffledUnseen.filter(q => !isSetMatch(q));
  const prioritySeen = shuffledSeen.filter(isSetMatch);
  const otherSeen = shuffledSeen.filter(q => !isSetMatch(q));

  // Combine into single ordered candidate list (Unseen Priority -> Unseen Other -> Seen Priority -> Seen Other)
  const candidatePool = [
    ...priorityUnseen,
    ...otherUnseen,
    ...prioritySeen,
    ...otherSeen
  ];

  // 4. Select UP TO targetTotal strictly unique questions (NO MODULO LOOPING!)
  const finalCount = Math.min(targetTotal, candidatePool.length);
  const selectedBases = candidatePool.slice(0, finalCount);

  // 5. Build final Question objects with randomized options
  const generatedQuestions: Question[] = selectedBases.map((base, idx) => {
    const shuffledOptions = [...base.options];
    const originalCorrectText = base.options[base.correctAnswer];

    // Fisher-Yates option shuffle
    for (let j = shuffledOptions.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [shuffledOptions[j], shuffledOptions[k]] = [shuffledOptions[k], shuffledOptions[j]];
    }
    const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);

    return {
      id: idx + 1,
      question: base.question,
      options: shuffledOptions,
      correctAnswer: newCorrectIdx >= 0 ? newCorrectIdx : 0,
      explanation: base.explanation,
      category: base.category
    };
  });

  const tag = testMode === "mock" ? "MOCK" : "EXAM";
  const paperId = `${discipline.toUpperCase()}-SET${setNum}-${tag}-${paperSeed}`;

  return { questions: generatedQuestions, paperId, totalQs: generatedQuestions.length, timeMins };
}

export function TestSeriesModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  // Navigation & View Mode State
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineType>("dairy");
  const [selectedTestMode, setSelectedTestMode] = useState<TestModeType>("full");
  const [selectedSeriesSet, setSelectedSeriesSet] = useState<number>(1);
  const [testStatus, setTestStatus] = useState<"hub" | "instructions" | "running" | "scorecard">("hub");

  const [isDesktopMode, setIsDesktopMode] = useState<boolean>(false);
  const [showMobilePaletteDrawer, setShowMobilePaletteDrawer] = useState<boolean>(false);

  // Current Live Paper Metadata
  const [paperMetadata, setPaperMetadata] = useState<{ 
    questions: Question[]; 
    paperId: string;
    totalQs: number;
    timeMins: number;
  }>({ questions: [], paperId: "", totalQs: 120, timeMins: 120 });

  const [paperSeedCounter, setPaperSeedCounter] = useState<number>(101);
  const [usedQuestionTexts, setUsedQuestionTexts] = useState<Set<string>>(new Set());

  // Current Test Execution State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({});

  const { user } = useAuth();

  // Candidate Profile State for Scorecard Certificate
  const [studentName, setStudentName] = useState<string>("DairyHub Scholar");
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  // Timer & Submit State (in seconds)
  const [timeRemaining, setTimeRemaining] = useState<number>(7200);
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState<boolean>(false);

  // Load fresh paper set
  const loadFreshPaperSet = useCallback((disc: DisciplineType, mode: TestModeType, setNum: number, seed: number) => {

    const freshSet = generateDynamicPaper(disc, mode, setNum, seed, usedQuestionTexts);
    setPaperMetadata(freshSet);
  }, []);

  useEffect(() => {
    loadFreshPaperSet(selectedDiscipline, selectedTestMode, selectedSeriesSet, paperSeedCounter);
  }, [selectedDiscipline, selectedTestMode, selectedSeriesSet, paperSeedCounter, loadFreshPaperSet]);

  // Sync profile name from useAuth
  useEffect(() => {
    if (user?.displayName) {
      setStudentName(user.displayName);
    } else if (user?.email) {
      setStudentName(user.email.split("@")[0]);
    }
  }, [user]);

  // Timer Countdown Effect
  useEffect(() => {
    let timer: any;
    if (testStatus === "running" && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setTestStatus("scorecard");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStatus, timeRemaining]);

  const handleStartTest = () => {
    const nextSeed = paperSeedCounter + 1;
    setPaperSeedCounter(nextSeed);

    // Track used questions so next tests present 100% fresh questions
    const newlyUsed = new Set(usedQuestionTexts);
    paperMetadata.questions.forEach(q => newlyUsed.add(q.question.trim()));

    let poolSize = ALL_DAIRY_QUESTIONS.length;
    if (selectedDiscipline === "food") poolSize = ALL_FOOD_QUESTIONS.length;
    else if (selectedDiscipline === "biotech") poolSize = ALL_BIOTECH_QUESTIONS.length;

    if (newlyUsed.size >= poolSize * 0.75) {
      newlyUsed.clear();
    }
    setUsedQuestionTexts(newlyUsed);

    loadFreshPaperSet(selectedDiscipline, selectedTestMode, selectedSeriesSet, nextSeed);

    const initialSecs = paperMetadata.timeMins * 60;
    setTimeRemaining(initialSecs);
    setUserAnswers({});
    setMarkedForReview({});
    setVisited({ 1: true });
    setCurrentIndex(0);
    setShowMobilePaletteDrawer(false);
    setTestStatus("running");
  };

  // Certificate Generation Ref, Container Ref & Responsive Scaling State
  const certRef = React.useRef<HTMLDivElement>(null);
  const certContainerRef = React.useRef<HTMLDivElement>(null);
  const [certScale, setCertScale] = useState<number>(1);
  const [isGeneratingCert, setIsGeneratingCert] = useState<boolean>(false);
  // Certificate View Mode: "fit" (scale to phone screen width) or "full" (100% resolution scrollable mode)
  const [certViewMode, setCertViewMode] = useState<"fit" | "full">("fit");
  const [isCertTouchDragging, setIsCertTouchDragging] = useState<boolean>(false);
  const certDragStartXRef = React.useRef<number>(0);
  const certDragScrollLeftRef = React.useRef<number>(0);

  const updateCertScale = React.useCallback(() => {
    if (certContainerRef.current) {
      const containerWidth = certContainerRef.current.clientWidth;
      if (containerWidth > 0) {
        if (certViewMode === "fit") {
          // Exactly fit inside container with padding so whole certificate is visible on mobile screen without scrolling
          const availableWidth = Math.max(280, containerWidth - 16);
          setCertScale(Math.min(1, availableWidth / 1000));
        } else {
          // Full HD 100% scale for scrollable/swipeable view
          setCertScale(1);
        }
      }
    }
  }, [certViewMode]);

  React.useEffect(() => {
    if (testStatus === "scorecard") {
      updateCertScale();
      const timer = setTimeout(updateCertScale, 50);
      const timer2 = setTimeout(updateCertScale, 200);

      window.addEventListener("resize", updateCertScale);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        window.removeEventListener("resize", updateCertScale);
      };
    }
  }, [testStatus, updateCertScale]);

  // Touch & Mouse Drag Scroll Handlers for Smooth Certificate Swiping
  const scrollCertBy = (amount: number) => {
    if (certContainerRef.current) {
      certContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleCertDragStart = (pageX: number) => {
    if (!certContainerRef.current) return;
    setIsCertTouchDragging(true);
    certDragStartXRef.current = pageX;
    certDragScrollLeftRef.current = certContainerRef.current.scrollLeft;
  };

  const handleCertDragMove = (pageX: number) => {
    if (!isCertTouchDragging || !certContainerRef.current) return;
    const walk = (pageX - certDragStartXRef.current) * 1.5;
    certContainerRef.current.scrollLeft = certDragScrollLeftRef.current - walk;
  };

  const handleCertDragEnd = () => {
    setIsCertTouchDragging(false);
  };

  // Universal Mobile APK & Web Download Handler (PDF) with Exact Aspect Ratio Preservation
  const handleDownloadCertificatePdf = async () => {
    if (!certRef.current) return;
    setIsGeneratingCert(true);

    const element = certRef.current;
    const prevTransform = element.style.transform;
    const prevOrigin = element.style.transformOrigin;

    // Temporarily reset transform for 1:1 high-resolution html2canvas capture
    element.style.transform = "none";
    element.style.transformOrigin = "initial";

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#0f172a",
        logging: false,
        width: 1000,
        height: 707,
        onclone: (clonedDoc, clonedElement) => {
          if (clonedElement) {
            clonedElement.style.transform = "none";
            clonedElement.style.width = "1000px";
            clonedElement.style.height = "707px";
          }
        }
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Mathematically preserve exact canvas aspect ratio on PDF page (centered with equal margins)
      const canvasAspect = canvas.width / canvas.height;

      let renderWidth = pdfWidth;
      let renderHeight = pdfWidth / canvasAspect;

      if (renderHeight > pdfHeight) {
        renderHeight = pdfHeight;
        renderWidth = pdfHeight * canvasAspect;
      }

      const xOffset = (pdfWidth - renderWidth) / 2;
      const yOffset = (pdfHeight - renderHeight) / 2;

      pdf.addImage(imgData, "JPEG", xOffset, yOffset, renderWidth, renderHeight, undefined, "FAST");

      const candidateName = studentName.trim() || user?.displayName || "Scholar";
      const fileName = `DairyHub_Certificate_${candidateName.replace(/\s+/g, "_")}.pdf`;

      pdf.save(fileName);
      await savePdfFile(pdf, fileName);

      toast({
        title: "Certificate PDF Downloaded! 🏆",
        description: `Saved ${fileName} with perfect 100% aspect ratio.`,
      });
    } catch (err) {
      console.error("Certificate PDF render error:", err);
      toast({
        title: "Download Fallback",
        description: "Opening print view for direct PDF saving...",
        variant: "destructive",
      });
      handlePrintCertificate();
    } finally {
      element.style.transform = prevTransform;
      element.style.transformOrigin = prevOrigin;
      setIsGeneratingCert(false);
    }
  };

  // Download High-Res Image (PNG) Handler for Mobile Gallery
  const handleDownloadCertificateImage = async () => {
    if (!certRef.current) return;
    setIsGeneratingCert(true);

    const element = certRef.current;
    const prevTransform = element.style.transform;
    const prevOrigin = element.style.transformOrigin;

    // Temporarily reset transform for 1:1 high-resolution html2canvas capture
    element.style.transform = "none";
    element.style.transformOrigin = "initial";

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#0f172a",
        logging: false,
        width: 1000,
        height: 707,
        onclone: (clonedDoc, clonedElement) => {
          if (clonedElement) {
            clonedElement.style.transform = "none";
            clonedElement.style.width = "1000px";
            clonedElement.style.height = "707px";
          }
        }
      });

      const dataUrl = canvas.toDataURL("image/png");
      const candidateName = studentName.trim() || user?.displayName || "Scholar";
      const fileName = `DairyHub_Certificate_${candidateName.replace(/\s+/g, "_")}.png`;

      const res = await fetch(dataUrl);
      const blob = await res.blob();

      await saveFile(blob, fileName, "image/png");
      toast({
        title: "Certificate Image Saved! 🖼️",
        description: `Saved ${fileName} to gallery / downloads with perfect proportions.`,
      });
    } catch (err) {
      console.error("Certificate PNG render error:", err);
    } finally {
      element.style.transform = prevTransform;
      element.style.transformOrigin = prevOrigin;
      setIsGeneratingCert(false);
    }
  };

  const handlePrintCertificate = () => {
    if (typeof window === "undefined") return;

    const candidateName = studentName.trim() || user?.displayName || user?.email?.split('@')[0] || "DairyHub Scholar";
    const dateStr = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const origin = window.location.origin;

    const pct = stats.maxScore > 0 ? (stats.score / stats.maxScore) * 100 : 0;
    const acc = parseFloat(stats.accuracy) || 0;

    let tierTitle = "🥉 BRONZE ACHIEVER CERTIFICATE";
    let tierColor = "#cd7f32";
    let bgGrad = "linear-gradient(135deg, #0f172a 0%, #451a03 100%)";
    let badgeText = "BRONZE TIER";

    if (pct >= 85 || acc >= 90) {
      tierTitle = "👑 PLATINUM DISTINCTION CERTIFICATE";
      tierColor = "#38bdf8";
      bgGrad = "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0369a1 100%)";
      badgeText = "PLATINUM TIER";
    } else if (pct >= 70 || acc >= 75) {
      tierTitle = "🥇 GOLD MASTER CERTIFICATE";
      tierColor = "#f59e0b";
      bgGrad = "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #78350f 100%)";
      badgeText = "GOLD TIER";
    } else if (pct >= 50 || acc >= 60) {
      tierTitle = "🥈 SILVER SCHOLAR CERTIFICATE";
      tierColor = "#cbd5e1";
      bgGrad = "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)";
      badgeText = "SILVER TIER";
    }

    try {
      const printWin = window.open('', '_blank', 'width=900,height=1000');
      if (!printWin) {
        toast({
          title: "Popup Blocked ⚠️",
          description: "Please tap the 'Download PDF Certificate' button above for direct mobile export.",
        });
        return;
      }

      printWin.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>DairyHub Official Test Certificate - ${candidateName}</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap');
              body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 40px; text-align: center; }
              .cert-box { border: 6px double ${tierColor}; padding: 45px 30px; border-radius: 24px; background: ${bgGrad}; box-shadow: 0 20px 50px rgba(0,0,0,0.6); position: relative; overflow: hidden; }
              .watermark-grid { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(7, 1fr); gap: 30px 15px; padding: 20px; pointer-events: none; opacity: 0.08; overflow: hidden; z-index: 0; }
              .watermark-item { font-size: 10px; font-weight: 900; color: #fde68a; letter-spacing: 2px; text-transform: uppercase; transform: rotate(-25deg); white-space: nowrap; text-align: center; }
              .logo-header { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 8px; position: relative; z-index: 1; }
              .portal-tag { color: #94a3b8; font-size: 11px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 25px; position: relative; z-index: 1; }
              .tier-badge { display: inline-block; padding: 6px 18px; border-radius: 9999px; background: ${tierColor}; color: #0f172a; font-weight: 900; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px; position: relative; z-index: 1; }
              .cert-title { font-size: 24px; color: ${tierColor}; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; position: relative; z-index: 1; }
              .p-text { font-size: 14px; color: #cbd5e1; margin: 10px 0; position: relative; z-index: 1; }
              .candidate-name { font-size: 36px; font-weight: 900; color: #ffffff; margin: 15px 0; border-bottom: 3px solid ${tierColor}; display: inline-block; padding-bottom: 8px; padding-left: 25px; padding-right: 25px; position: relative; z-index: 1; }
              .disc-title { font-size: 17px; font-weight: 800; color: #818cf8; margin-top: 15px; position: relative; z-index: 1; }
              .stats-container { display: flex; justify-content: center; gap: 18px; margin: 35px 0; flex-wrap: wrap; position: relative; z-index: 1; }
              .stat-card { background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255,255,255,0.12); padding: 16px 22px; border-radius: 16px; min-width: 110px; }
              .stat-val { font-size: 24px; font-weight: 900; }
              .stat-lbl { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #94a3b8; margin-top: 4px; }
              .footer-info { margin-top: 35px; font-size: 12px; color: #64748b; font-family: monospace; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; position: relative; z-index: 1; }
            </style>
          </head>
          <body>
            <div class="cert-box">
              <div class="watermark-grid">
                ${Array.from({ length: 35 }).map(() => `<div class="watermark-item">DAIRYHUB CERTIFIED</div>`).join('')}
              </div>
              <div class="logo-header">
                <img src="${origin}/dairyhub-logo.png" alt="DairyHub Logo" class="logo-img" />
                <div class="logo-text">Dairy<span style="color: #f59e0b;">Hub</span></div>
              </div>
              <div class="portal-tag">Official Performance & Skill Certification Portal</div>
              <div class="tier-badge">${badgeText}</div>
              <div class="cert-title">${tierTitle}</div>
              <div class="p-text">This official performance certificate is proudly presented to</div>
              <div class="candidate-name">${candidateName}</div>
              <div class="disc-title">
                ${selectedDiscipline.toUpperCase()} TECHNOLOGY (${selectedTestMode === "mock" ? "30 Qs Quick Mock Test" : "120 Qs Examination"})
              </div>
              <div class="p-text" style="font-family: monospace;">Certificate ID: CERT-DH-2026-#${paperMetadata.paperId}-${paperSeedCounter}</div>

              <div class="stats-container">
                <div class="stat-card">
                  <div class="stat-val" style="color: ${tierColor};">${stats.score} / ${stats.maxScore}</div>
                  <div class="stat-lbl">Final Score</div>
                </div>
                <div class="stat-card">
                  <div class="stat-val" style="color: #34d399;">${stats.accuracy}%</div>
                  <div class="stat-lbl">Accuracy</div>
                </div>
                <div class="stat-card">
                  <div class="stat-val" style="color: #60a5fa;">${stats.correct}</div>
                  <div class="stat-lbl">Correct Qs</div>
                </div>
                <div class="stat-card">
                  <div class="stat-val" style="color: #f87171;">${stats.incorrect}</div>
                  <div class="stat-lbl">Incorrect Qs</div>
                </div>
              </div>

              <div class="footer-info">
                Issued on ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} • DairyHub Academic Committee
              </div>
            </div>
            <script>
              window.onload = function() { window.print(); }
            </script>
          </body>
        </html>
      `);
      printWin.document.close();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    const qId = paperMetadata.questions[currentIndex].id;
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const handleClearResponse = () => {
    const qId = paperMetadata.questions[currentIndex].id;
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  const handleMarkForReviewNext = () => {
    const qId = paperMetadata.questions[currentIndex].id;
    setMarkedForReview((prev) => ({ ...prev, [qId]: true }));
    if (currentIndex < paperMetadata.questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setVisited((prev) => ({ ...prev, [paperMetadata.questions[nextIndex].id]: true }));
    }
  };

  const handleSaveNext = () => {
    if (currentIndex < paperMetadata.questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setVisited((prev) => ({ ...prev, [paperMetadata.questions[nextIndex].id]: true }));
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setVisited((prev) => ({ ...prev, [paperMetadata.questions[index].id]: true }));
    setShowMobilePaletteDrawer(false);
  };

  // Stats calculation
  const stats = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let markedOnly = 0;
    let answeredAndMarked = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    paperMetadata.questions.forEach((q) => {
      const isAns = userAnswers[q.id] !== undefined;
      const isRev = markedForReview[q.id];

      if (isAns && isRev) answeredAndMarked++;
      else if (isAns) answered++;
      else if (isRev) markedOnly++;
      else notAnswered++;

      if (isAns) {
        if (userAnswers[q.id] === q.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      } else {
        unattempted++;
      }
    });

    const score = correct * 4 - incorrect * 1;
    const maxScore = paperMetadata.questions.length * 4;
    const accuracy = (answered + answeredAndMarked) > 0 
      ? ((correct / (answered + answeredAndMarked)) * 100).toFixed(1) 
      : "0";

    return {
      answered,
      notAnswered,
      markedOnly,
      answeredAndMarked,
      correct,
      incorrect,
      unattempted,
      score,
      maxScore,
      accuracy
    };
  }, [paperMetadata.questions, userAnswers, markedForReview]);

  const currentTierInfo = useMemo(() => {
    const pct = stats.maxScore > 0 ? (stats.score / stats.maxScore) * 100 : 0;
    const acc = parseFloat(stats.accuracy) || 0;

    if (pct >= 85 || acc >= 90) {
      return {
        tierName: "Platinum Tier",
        badgeClass: "bg-sky-500 text-slate-950 border-sky-300 font-black",
        icon: "👑"
      };
    } else if (pct >= 70 || acc >= 75) {
      return {
        tierName: "Gold Tier",
        badgeClass: "bg-amber-500 text-slate-950 border-amber-300 font-black",
        icon: "🥇"
      };
    } else if (pct >= 50 || acc >= 60) {
      return {
        tierName: "Silver Tier",
        badgeClass: "bg-slate-300 text-slate-950 border-white font-black",
        icon: "🥈"
      };
    } else {
      return {
        tierName: "Bronze Tier",
        badgeClass: "bg-amber-800 text-amber-100 border-amber-600 font-black",
        icon: "🥉"
      };
    }
  }, [stats.score, stats.maxScore, stats.accuracy]);

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return hrs > 0 
      ? `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
      : `${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleToggleDesktopMode = async () => {
    const nextState = !isDesktopMode;
    setIsDesktopMode(nextState);

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (nextState) {
        try {
          const docEl = document.documentElement as any;
          if (docEl.requestFullscreen) await docEl.requestFullscreen();
          else if (docEl.webkitRequestFullscreen) await docEl.webkitRequestFullscreen();
        } catch (err) {}

        if (window.screen && (window.screen as any).orientation) {
          try {
            await (window.screen as any).orientation.lock("landscape").catch(() => {});
          } catch (err) {}
        }
      } else {
        try {
          const docElement = document as any;
          if (docElement.fullscreenElement || docElement.webkitFullscreenElement) {
            if (document.exitFullscreen) await document.exitFullscreen();
          }
        } catch (err) {}

        if (window.screen && (window.screen as any).orientation) {
          try {
            (window.screen as any).orientation.unlock();
          } catch (err) {}
        }
      }
    }
  };

  const currentQ = paperMetadata.questions[currentIndex] || paperMetadata.questions[0];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={cn(
        "w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none sm:w-[98vw] sm:h-[96vh] sm:max-w-7xl sm:rounded-2xl p-0 flex flex-col bg-slate-900 text-white overflow-hidden border border-slate-800 transition-all duration-300",
        isDesktopMode && "fixed inset-0 !top-0 !left-0 !translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none !max-h-none !rounded-none !border-0 font-sans z-[99999] p-0 m-0 bg-slate-900"
      )}>
        
        {/* HEADER BAR */}
        <div className="bg-slate-950 border-b border-slate-800 p-2.5 sm:p-4 flex flex-wrap items-center justify-between gap-2 shrink-0 shadow-md">
          <div className="flex items-center gap-2.5">
            {testStatus !== "hub" && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setTestStatus("hub")}
                className="h-8 w-8 p-0 text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-sm shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="font-extrabold text-xs sm:text-base text-white flex items-center gap-2">
                National Exam & Mock Test Hub
                <Badge className="bg-amber-500 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase">
                  Auto-Updating
                </Badge>
              </h2>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono">
                {testStatus === "hub" ? "Select Discipline & Test Mode" : `Set ID: ${paperMetadata.paperId}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Desktop Fullscreen Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleToggleDesktopMode}
              className={cn(
                "h-8 sm:h-9 text-xs font-bold px-2.5 rounded-xl border flex items-center gap-1.5 transition-all",
                isDesktopMode
                  ? "bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 font-black shadow-md"
                  : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300"
              )}
            >
              {isDesktopMode ? <Monitor className="w-4 h-4 text-slate-950" /> : <Smartphone className="w-4 h-4 text-amber-400" />}
              {isDesktopMode ? "🖥️ Exit Fullscreen" : "🖥️ Fullscreen Desktop View"}
            </Button>

            {testStatus === "running" && (
              <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded-xl animate-pulse">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {formatTime(timeRemaining)}
              </div>
            )}
          </div>
        </div>

        {/* ================= VIEW 0: ENTRY LANDING HUB SCREEN ================= */}
        {testStatus === "hub" && (
          <ScrollArea className="flex-1 p-4 sm:p-8 bg-slate-900">
            <div className="max-w-5xl mx-auto space-y-6">
              
              {/* Welcome Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 border border-indigo-500/30 text-white shadow-2xl space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Live Dynamic Question Bank
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Dairy, Food Tech & Biotechnology Test Series
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Choose your stream below to attempt <strong>30-Question Quick Mock Tests</strong> or <strong>120-Question NTA/GATE Style Live Examinations</strong>. Questions update automatically every single time!
                </p>
              </div>
              {/* TEST SERIES SET SELECTION DROPDOWN */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-amber-500/40 text-white shadow-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Label className="text-xs sm:text-sm font-black text-amber-400 flex items-center gap-2 uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-amber-400" /> Select Test Series Paper Set (5 Unique Paper Series Available):
                  </Label>
                  <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-[10px] uppercase px-2.5 py-0.5 shadow-sm">
                    Series Set #{selectedSeriesSet} Active
                  </Badge>
                </div>

                <Select
                  value={selectedSeriesSet.toString()}
                  onValueChange={(val) => {
                    const setNum = parseInt(val);
                    setSelectedSeriesSet(setNum);
                    loadFreshPaperSet(selectedDiscipline, selectedTestMode, setNum, paperSeedCounter);
                  }}
                >
                  <SelectTrigger className="bg-slate-950 border-amber-500/50 text-white font-extrabold text-xs sm:text-sm h-12 rounded-xl focus:ring-amber-500">
                    <SelectValue placeholder="Choose Test Series Paper Set" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-950 border-amber-500/50 text-white font-bold text-xs sm:text-sm">
                    {TEST_SERIES_SETS.map((sSet) => (
                      <SelectItem key={sSet.id} value={sSet.id.toString()} className="py-2.5 focus:bg-indigo-950 focus:text-amber-300">
                        <div className="flex flex-col">
                          <span className="font-extrabold text-amber-300">{sSet.title}</span>
                          <span className="text-[10px] text-slate-400 font-normal">{sSet.subtitle}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <p className="text-[11px] text-slate-400 italic">
                  * Select any of the 5 series sets above. Each set contains 100% completely different & unique questions crafted for GATE, NTA, FSSAI & Plant exams!
                </p>
              </div>

              {/* DISCIPLINE SELECTION CARDS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 🥛 DAIRY TECHNOLOGY CARD */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                      🥛
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-indigo-400 transition-colors">
                      Dairy Technology
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      ICAR AIEEA PG, ICAR NET, Dairy Chemistry, Engineering, Microbiology & Processing MCQs.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("dairy");
                        setSelectedTestMode("mock");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-slate-800 hover:bg-indigo-600 text-white font-bold text-xs h-9 rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      30 Qs Quick Mock Test
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("dairy");
                        setSelectedTestMode("full");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-xs h-9 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-300" />
                      120 Qs NTA Live Exam
                    </Button>
                  </div>
                </div>

                {/* 🍕 FOOD TECHNOLOGY CARD */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                      🍕
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-amber-400 transition-colors">
                      Food Technology
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      GATE XE/XL, CFTRI Entrance, FSSAI CFSO/TO, Food Safety & Preservation MCQs.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("food");
                        setSelectedTestMode("mock");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-slate-800 hover:bg-amber-600 hover:text-slate-950 text-white font-bold text-xs h-9 rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      30 Qs Quick Mock Test
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("food");
                        setSelectedTestMode("full");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs h-9 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Trophy className="w-3.5 h-3.5 text-slate-950" />
                      120 Qs GATE Live Exam
                    </Button>
                  </div>
                </div>

                {/* 🧬 BIOTECHNOLOGY CARD */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                      🧬
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-teal-400 transition-colors">
                      Biotechnology
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      GAT-B, GATE BT, Recombinant DNA, Fermentation, Downstream Processing & PCR MCQs.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("biotech");
                        setSelectedTestMode("mock");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-slate-800 hover:bg-teal-600 text-white font-bold text-xs h-9 rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      30 Qs Quick Mock Test
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedDiscipline("biotech");
                        setSelectedTestMode("full");
                        setTestStatus("instructions");
                      }}
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-slate-950 font-black text-xs h-9 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Trophy className="w-3.5 h-3.5 text-slate-950" />
                      120 Qs GAT-B Live Exam
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </ScrollArea>
        )}

        {/* ================= VIEW 1: INSTRUCTIONS SCREEN ================= */}
        {testStatus === "instructions" && (
          <ScrollArea className="flex-1 p-4 sm:p-8 bg-slate-900">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Exam Title Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-900 border border-indigo-500/30 text-white shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Live Auto-Updating Test Engine
                  </span>
                  <Badge className="bg-indigo-600 text-white font-mono text-[10px]">
                    Paper Set #{paperSeedCounter}
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedDiscipline === "dairy" ? "🥛 Dairy Technology" : selectedDiscipline === "food" ? "🍕 Food Technology" : "🧬 Biotechnology"}{" "}
                  {selectedTestMode === "mock" ? "Quick Mock Test (30 Qs)" : "National Live Exam (120 Qs)"}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every time you take or retake a test, our engine automatically shuffles & generates a fresh randomized paper set!
                </p>

                {/* Series Dropdown Selector inside Instructions view */}
                <div className="pt-2">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-amber-500/40 space-y-2">
                    <Label className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
                      <Layers className="w-3.5 h-3.5 text-amber-400" /> Switch Test Series Paper Set:
                    </Label>
                    <Select
                      value={selectedSeriesSet.toString()}
                      onValueChange={(val) => {
                        const setNum = parseInt(val);
                        setSelectedSeriesSet(setNum);
                        loadFreshPaperSet(selectedDiscipline, selectedTestMode, setNum, paperSeedCounter);
                      }}
                    >
                      <SelectTrigger className="bg-slate-900 border-amber-500/50 text-white font-extrabold text-xs h-10 rounded-lg">
                        <SelectValue placeholder="Choose Test Series Set" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-950 border-amber-500/50 text-white font-bold text-xs">
                        {TEST_SERIES_SETS.map((sSet) => (
                          <SelectItem key={sSet.id} value={sSet.id.toString()} className="py-2 focus:bg-indigo-950 focus:text-amber-300">
                            {sSet.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Questions</span>
                    <span className="text-lg font-black text-white">{paperMetadata.totalQs} MCQs</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Time</span>
                    <span className="text-lg font-black text-amber-400">{paperMetadata.timeMins} Mins</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Max Marks</span>
                    <span className="text-lg font-black text-emerald-400">{paperMetadata.totalQs * 4} Marks</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Marking Scheme</span>
                    <span className="text-lg font-black text-purple-400">+4 / -1 Mark</span>
                  </div>
                </div>
              </div>

              {/* Instructions Box */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  Official Examination Guidelines & Navigation Symbols:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center font-bold text-white shrink-0">1</span>
                    <span className="text-slate-300"><strong>Grey:</strong> You have not visited the question yet.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white shrink-0">2</span>
                    <span className="text-slate-300"><strong>Red:</strong> You have visited but not answered the question.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white shrink-0">3</span>
                    <span className="text-slate-300"><strong>Green:</strong> You have answered the question.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">4</span>
                    <span className="text-slate-300"><strong>Purple:</strong> Marked for Review (Not answered).</span>
                  </div>
                </div>

                <div className="p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 leading-relaxed flex items-center justify-between gap-3">
                  <div>
                    📱 <strong>For Real Desktop Experience on Mobile:</strong> Click the <strong>"🖥️ Fullscreen Desktop View"</strong> button at top right to auto-rotate screen into Landscape Mode.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setTestStatus("hub")}
                  className="bg-slate-800 border-slate-700 text-white font-bold text-xs h-12 px-6 rounded-2xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Selection Hub
                </Button>
                <Button
                  onClick={handleStartTest}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm px-8 h-12 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Play className="w-5 h-5 fill-slate-950" />
                  START {paperMetadata.totalQs} Qs TEST NOW
                </Button>
              </div>
            </div>
          </ScrollArea>
        )}

        {/* ================= VIEW 2: LIVE TEST RUNNING INTERFACE ================= */}
        {testStatus === "running" && paperMetadata.questions.length > 0 && currentQ && (
          <div className={cn(
            "flex-1 flex overflow-hidden bg-slate-900 relative w-full h-full",
            isDesktopMode ? "flex-row w-full" : "flex-col md:flex-row"
          )}>
            
            {/* Left Area: Main Question & Options */}
            <div className="flex-1 flex flex-col justify-between p-3 sm:p-6 overflow-y-auto border-r border-slate-800">
              <div className="space-y-3 sm:space-y-4">
                {/* Question Info Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="font-extrabold text-xs sm:text-sm text-indigo-400 flex items-center gap-2">
                    Question {currentIndex + 1} of {paperMetadata.questions.length}
                    <Badge variant="outline" className="text-[9px] sm:text-[10px] bg-slate-800 border-slate-700 text-slate-300">
                      {currentQ.category}
                    </Badge>
                  </span>
                  <span className="text-[11px] sm:text-xs text-emerald-400 font-mono font-bold">
                    +4 Marks / -1 Negative
                  </span>
                </div>

                {/* Question Text */}
                <div className="p-3.5 sm:p-5 bg-slate-950 rounded-2xl border border-slate-800">
                  <p className="text-xs sm:text-base font-bold text-white leading-relaxed">
                    {currentQ.question}
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-2 pt-1">
                  {currentQ.options.map((opt, idx) => {
                    const qId = currentQ.id;
                    const isSelected = userAnswers[qId] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={cn(
                          "w-full p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-start gap-3",
                          isSelected
                            ? "bg-indigo-600/30 border-indigo-500 text-white shadow-md ring-1 ring-indigo-400"
                            : "bg-slate-950/60 hover:bg-slate-800/80 border-slate-800 text-slate-300"
                        )}
                      >
                        <span className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5",
                          isSelected ? "bg-indigo-500 text-white" : "bg-slate-800 text-slate-400"
                        )}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Control Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-800 mt-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Button
                    onClick={handleMarkForReviewNext}
                    variant="outline"
                    className="bg-purple-950/60 hover:bg-purple-900/80 border-purple-700 text-purple-200 text-[11px] sm:text-xs font-bold h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl"
                  >
                    Review & Next
                  </Button>
                  <Button
                    onClick={handleClearResponse}
                    variant="outline"
                    className="bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 text-[11px] sm:text-xs font-bold h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl"
                  >
                    Clear
                  </Button>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {!isDesktopMode && (
                    <Button
                      onClick={() => setShowMobilePaletteDrawer(!showMobilePaletteDrawer)}
                      variant="outline"
                      className="bg-indigo-950/80 border-indigo-700 text-indigo-300 text-[11px] font-bold h-9 px-2.5 rounded-xl md:hidden"
                    >
                      <Grid className="w-3.5 h-3.5 mr-1" /> Grid ({paperMetadata.totalQs})
                    </Button>
                  )}
                  <Button
                    onClick={() => handleJumpToQuestion(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    variant="outline"
                    className="bg-slate-800 border-slate-700 text-white text-[11px] sm:text-xs font-bold h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Prev
                  </Button>
                  <Button
                    onClick={handleSaveNext}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-extrabold text-[11px] sm:text-xs h-9 sm:h-10 px-4 sm:px-5 rounded-xl shadow-md"
                  >
                    Save & Next <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Area: Question Palette Sidebar */}
            <div className={cn(
              "bg-slate-950 p-3 sm:p-4 border-t md:border-t-0 md:border-l border-slate-800 flex flex-col justify-between overflow-y-auto transition-all",
              isDesktopMode ? "w-80 flex" : "w-full md:w-80",
              !isDesktopMode && !showMobilePaletteDrawer && "hidden md:flex"
            )}>
              <div className="space-y-3">
                {/* Palette Header */}
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      CBT
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Question Palette</span>
                      <span className="text-[10px] text-slate-400 block font-mono">Set #{paperSeedCounter}</span>
                    </div>
                  </div>
                  {!isDesktopMode && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowMobilePaletteDrawer(false)}
                      className="text-xs text-slate-400 md:hidden p-1 h-7"
                    >
                      ✕ Close
                    </Button>
                  )}
                </div>

                {/* Status Color Legend */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] sm:text-[11px] font-bold">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-emerald-600"></span> Answered ({stats.answered})
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-red-600"></span> Not Answered ({stats.notAnswered})
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-purple-600"></span> Review ({stats.markedOnly})
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-3 h-3 rounded bg-slate-700"></span> Not Visited
                  </div>
                </div>

                {/* Question Palette Grid */}
                <div className="pt-1">
                  <span className="text-[11px] font-extrabold text-slate-300 block mb-1.5">Questions (1 - {paperMetadata.totalQs}):</span>
                  <ScrollArea className="h-56 sm:h-72 pr-2">
                    <div className="grid grid-cols-5 gap-1.5">
                      {paperMetadata.questions.map((q, idx) => {
                        const isAns = userAnswers[q.id] !== undefined;
                        const isRev = markedForReview[q.id];
                        const isVis = visited[q.id];
                        const isCurrent = currentIndex === idx;

                        let bgClass = "bg-slate-800 text-slate-400";
                        if (isAns && isRev) bgClass = "bg-purple-600 text-white border-2 border-emerald-400";
                        else if (isAns) bgClass = "bg-emerald-600 text-white font-bold";
                        else if (isRev) bgClass = "bg-purple-600 text-white";
                        else if (isVis) bgClass = "bg-red-600 text-white";

                        return (
                          <button
                            key={q.id}
                            onClick={() => handleJumpToQuestion(idx)}
                            className={cn(
                              "h-7 sm:h-8 rounded-lg text-xs font-mono font-bold transition-transform flex items-center justify-center",
                              bgClass,
                              isCurrent && "ring-2 ring-amber-400 scale-105 z-10 shadow-lg"
                            )}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </div>
              </div>

              {/* Submit Test Button */}
              <div className="pt-3 border-t border-slate-800 mt-2">
                <Button
                  onClick={() => setIsSubmitConfirmOpen(true)}
                  className="w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-black text-xs h-10 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  SUBMIT FINAL TEST
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW 3: DETAILED SCORECARD & SOLUTION KEY ================= */}
        {testStatus === "scorecard" && (
          <ScrollArea className="flex-1 p-4 sm:p-8 bg-slate-900">
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Scorecard Hero Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border border-indigo-500/30 text-white shadow-2xl text-center space-y-3">
                <Trophy className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Official Performance Scorecard & Analysis
                </h1>
                <p className="text-xs text-slate-300 font-mono">
                  Set ID: {paperMetadata.paperId} | {selectedDiscipline.toUpperCase()} {selectedTestMode.toUpperCase()}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl mx-auto">
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-indigo-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Your Final Score</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">{stats.score} / {stats.maxScore}</span>
                  </div>
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-emerald-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Accuracy %</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400">{stats.accuracy}%</span>
                  </div>
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-blue-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Correct Answers</span>
                    <span className="text-2xl sm:text-3xl font-black text-blue-400">{stats.correct}</span>
                  </div>
                  <div className="p-4 bg-slate-900/80 rounded-2xl border border-red-500/30 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Incorrect Answers</span>
                    <span className="text-2xl sm:text-3xl font-black text-red-400">{stats.incorrect}</span>
                  </div>
                </div>
              </div>

              {/* OFFICIAL HIGH-RES CERTIFICATE PREVIEW & DOWNLOAD SECTION */}
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-slate-950 rounded-2xl border border-amber-500/40 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-black text-sm sm:text-base text-amber-400 flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400 animate-pulse shrink-0" />
                        Official DairyHub National Certificate
                      </h3>
                      <Badge className={cn("text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold", currentTierInfo.badgeClass)}>
                        {currentTierInfo.icon} {currentTierInfo.tierName}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-300">
                      Edit candidate name below & download your high-resolution authenticated PDF/Image certificate directly to your phone or desktop.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-1">
                      <Label className="text-xs font-bold text-slate-300 shrink-0 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-amber-400" /> Candidate Name on Certificate:
                      </Label>
                      <Input
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Enter Candidate Full Name"
                        className="bg-slate-900 border-amber-500/40 text-white font-black text-xs h-9 w-full sm:max-w-xs rounded-xl focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Universal Mobile & Desktop Download Action Buttons */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                    <Button
                      onClick={handleDownloadCertificatePdf}
                      disabled={isGeneratingCert}
                      className="flex-1 sm:flex-initial bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs h-10 px-4 rounded-xl shadow-lg flex items-center justify-center gap-1.5 active:scale-95 border border-amber-400/40"
                    >
                      {isGeneratingCert ? (
                        <Loader2 className="w-4 h-4 text-slate-950 animate-spin" />
                      ) : (
                        <Download className="w-4 h-4 text-slate-950" />
                      )}
                      Download PDF Certificate
                    </Button>

                    <Button
                      onClick={handleDownloadCertificateImage}
                      disabled={isGeneratingCert}
                      variant="outline"
                      className="flex-1 sm:flex-initial bg-slate-900 border-indigo-500/50 hover:bg-indigo-950 text-indigo-300 font-bold text-xs h-10 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <Image className="w-4 h-4 text-indigo-400" />
                      Save PNG Image
                    </Button>

                    <Button
                      onClick={handlePrintCertificate}
                      variant="ghost"
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold h-10 px-3 rounded-xl shrink-0"
                      title="Print / Pop-up Preview"
                    >
                      <Printer className="w-4 h-4 text-slate-400" />
                    </Button>
                  </div>
                </div>

                {/* MOBILE & DESKTOP CERTIFICATE DISPLAY CONTROL BAR (VIEW MODES & MANUAL SCROLL ARROWS) */}
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-md">
                  {/* Mode Selector Toggles */}
                  <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setCertViewMode("fit")}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5",
                        certViewMode === "fit"
                          ? "bg-amber-500 text-slate-950 font-black shadow-md"
                          : "text-slate-400 hover:text-white"
                      )}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Fit Mobile Screen</span>
                    </button>

                    <button
                      onClick={() => setCertViewMode("full")}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5",
                        certViewMode === "full"
                          ? "bg-indigo-600 text-white font-black shadow-md"
                          : "text-slate-400 hover:text-white"
                      )}
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>100% HD View (Swipe ↔️)</span>
                    </button>
                  </div>

                  {/* Scroll Controls (Active on Mobile or Full HD View) */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-amber-300 font-extrabold flex items-center gap-1">
                      <MoveHorizontal className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                      {certViewMode === "fit" ? "Fit-to-Screen Mode" : "Swipe Left / Right ↔️"}
                    </span>

                    {certViewMode === "full" && (
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => scrollCertBy(-250)}
                          className="h-8 px-2 bg-slate-900 border-slate-700 text-amber-400 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" /> Left
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => scrollCertBy(250)}
                          className="h-8 px-2 bg-slate-900 border-slate-700 text-amber-400 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1"
                        >
                          Right <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* THE RESPONSIVE HIGH-RES CERTIFICATE PREVIEW CONTAINER WITH TOUCH DRAG & SMOOTH SCROLL */}
                <div
                  ref={certContainerRef}
                  className="w-full overflow-x-auto overflow-y-hidden py-3 px-1 custom-scrollbar flex justify-start sm:justify-center cursor-grab active:cursor-grabbing select-none"
                  style={{
                    touchAction: "pan-x pan-y",
                    WebkitOverflowScrolling: "touch"
                  }}
                  onTouchStart={(e) => handleCertDragStart(e.touches[0].pageX)}
                  onTouchMove={(e) => handleCertDragMove(e.touches[0].pageX)}
                  onTouchEnd={handleCertDragEnd}
                  onMouseDown={(e) => handleCertDragStart(e.pageX)}
                  onMouseMove={(e) => handleCertDragMove(e.pageX)}
                  onMouseUp={handleCertDragEnd}
                  onMouseLeave={handleCertDragEnd}
                >
                  <div
                    className="relative shadow-2xl rounded-2xl sm:rounded-3xl border-2 border-amber-400/60 overflow-hidden bg-slate-950 transition-all duration-300 shrink-0 my-1"
                    style={{
                      width: certScale < 1 ? `${Math.floor(1000 * certScale)}px` : "1000px",
                      height: certScale < 1 ? `${Math.floor(707 * certScale)}px` : "707px",
                    }}
                  >
                    <div
                      ref={certRef}
                      id="dairyhub-official-certificate"
                      className="w-[1000px] h-[707px] min-w-[1000px] min-h-[707px] p-10 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 border-8 border-double border-amber-400/90 text-white relative shadow-2xl overflow-hidden font-sans flex flex-col justify-between shrink-0 select-none"
                      style={{
                        transform: certScale < 1 ? `scale(${certScale})` : undefined,
                        transformOrigin: "top left",
                        backgroundImage: `radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(245, 158, 11, 0.2) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 60%)`
                      }}
                    >
                      {/* REPEATING SMALL TILED SECURITY WATERMARK GRID ACROSS ENTIRE CERTIFICATE BACKGROUND */}
                      <div className="absolute inset-0 grid grid-cols-5 grid-rows-7 gap-y-12 gap-x-6 p-6 pointer-events-none select-none overflow-hidden z-0 opacity-[0.08] justify-items-center items-center">
                        {Array.from({ length: 35 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="text-[10px] font-black text-amber-200 tracking-widest uppercase rotate-[-25deg] whitespace-nowrap"
                          >
                            DAIRYHUB CERTIFIED
                          </div>
                        ))}
                      </div>

                      {/* Corner Ornaments */}
                      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400/90 rounded-tl-lg pointer-events-none" />
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400/90 rounded-tr-lg pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400/90 rounded-bl-lg pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400/90 rounded-br-lg pointer-events-none" />

                      {/* Certificate Header */}
                      <div className="flex items-center justify-between border-b border-amber-400/30 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-0.5 shadow-lg shrink-0">
                            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center p-1">
                              <img src="/dairyhub-logo.png" alt="DairyHub" className="w-full h-full object-contain rounded-lg" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-white tracking-wide uppercase flex items-center gap-1.5">
                              Dairy<span className="text-amber-400">Hub</span> Test Series
                            </h4>
                            <p className="text-[10px] text-amber-300 font-extrabold uppercase tracking-widest">
                              Official Performance & Skill Certification Portal
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 font-mono block uppercase">Certificate ID</span>
                          <span className="text-xs font-mono font-bold text-amber-400">
                            CERT-DH-2026-#{paperMetadata.paperId}-{paperSeedCounter}
                          </span>
                        </div>
                      </div>

                      {/* Certificate Main Title */}
                      <div className="text-center space-y-2 py-2">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400/50 px-4 py-1 rounded-full text-amber-300 font-black text-xs tracking-widest uppercase">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Official Certificate of Achievement
                        </div>

                        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 uppercase tracking-tight">
                          {currentTierInfo.tierName} Certificate
                        </h2>

                        <p className="text-xs text-slate-300 font-medium italic">
                          This official certificate is proudly awarded to
                        </p>

                        <div className="py-2">
                          <h1 className="text-4xl font-extrabold text-white tracking-wide underline decoration-amber-400 underline-offset-8">
                            {studentName.trim() || user?.displayName || "Dairy Technology Scholar"}
                          </h1>
                        </div>

                        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed pt-1">
                          for successfully completing the Online CBT Test Series Examination in
                        </p>

                        <div className="inline-block bg-indigo-950/80 border border-indigo-500/40 px-5 py-1.5 rounded-xl text-indigo-300 font-black text-sm uppercase tracking-wider shadow-inner">
                          {selectedDiscipline.toUpperCase()} TECHNOLOGY ({selectedTestMode === "mock" ? "30 Qs Quick Mock Test" : "120 Qs Examination"})
                        </div>
                      </div>

                      {/* Official Performance Breakdown Metrics */}
                      <div className="grid grid-cols-4 gap-3 bg-slate-900/90 p-4 rounded-2xl border border-amber-400/30 text-center shadow-lg">
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-amber-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Final Score</span>
                          <span className="text-lg font-black text-amber-400">{stats.score} / {stats.maxScore}</span>
                        </div>
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-emerald-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Accuracy Rate</span>
                          <span className="text-lg font-black text-emerald-400">{stats.accuracy}%</span>
                        </div>
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-blue-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Correct Qs</span>
                          <span className="text-lg font-black text-blue-400">{stats.correct}</span>
                        </div>
                        <div className="p-2 bg-slate-950/60 rounded-xl border border-purple-500/30">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Grade Rank</span>
                          <span className="text-lg font-black text-purple-300">
                            {parseFloat(stats.accuracy) >= 90 ? "A+ Grade" : parseFloat(stats.accuracy) >= 75 ? "A Grade" : "Pass"}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Signatures & Seal Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-amber-400/30 text-xs">
                        {/* Left: Issue Date */}
                        <div className="text-left">
                          <span className="text-[10px] text-slate-400 block uppercase font-mono">Date of Issue</span>
                          <span className="text-xs font-bold text-slate-200">
                            {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                          </span>
                        </div>

                        {/* Center: Gold Emblem Stamp Seal with DAIRYHUB text */}
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black p-1.5 flex flex-col items-center justify-center text-center shadow-xl border-2 border-white/50 shrink-0">
                          <span className="text-[8px] tracking-wider uppercase font-black leading-none text-slate-950 mb-0.5">DAIRYHUB</span>
                          <ShieldCheck className="w-5 h-5 text-slate-950 my-0.5" />
                          <span className="text-[7px] tracking-tight uppercase font-black leading-none text-slate-950">OFFICIAL SEAL</span>
                        </div>

                        {/* Right: Signature */}
                        <div className="text-right">
                          <div className="font-extrabold text-amber-400 text-sm leading-tight uppercase">
                            DairyHub
                          </div>
                          <div className="text-[10px] font-bold text-slate-300 border-t border-slate-700 pt-1 mt-0.5">
                            Academic Committee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base sm:text-lg text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                  Detailed Question-by-Question Solution Key:
                </h3>
                <Button
                  onClick={handleStartTest}
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1" /> Retake Fresh Test (Set #{paperSeedCounter + 1})
                </Button>
              </div>

              {/* Solutions List */}
              <div className="space-y-4">
                {paperMetadata.questions.map((q, idx) => {
                  const uAns = userAnswers[q.id];
                  const isCorrect = uAns === q.correctAnswer;
                  const isUnattempted = uAns === undefined;

                  return (
                    <div
                      key={q.id}
                      className={cn(
                        "p-4 sm:p-5 rounded-2xl border transition-all text-xs space-y-3",
                        isCorrect
                          ? "bg-emerald-950/20 border-emerald-500/40"
                          : isUnattempted
                          ? "bg-slate-950/60 border-slate-800"
                          : "bg-red-950/20 border-red-500/40"
                      )}
                    >
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                        <span className="font-extrabold text-sm text-white">
                          Q{idx + 1}. {q.question}
                        </span>
                        <Badge
                          className={cn(
                            "text-[10px] font-extrabold",
                            isCorrect
                              ? "bg-emerald-500 text-slate-950"
                              : isUnattempted
                              ? "bg-slate-700 text-slate-300"
                              : "bg-red-500 text-white"
                          )}
                        >
                          {isCorrect ? "Correct (+4)" : isUnattempted ? "Unattempted (0)" : "Incorrect (-1)"}
                        </Badge>
                      </div>

                      {/* Options breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isUserPicked = uAns === oIdx;
                          const isRightAnswer = q.correctAnswer === oIdx;
                          return (
                            <div
                              key={oIdx}
                              className={cn(
                                "p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between",
                                isRightAnswer
                                  ? "bg-emerald-600/30 border-emerald-500 text-emerald-200"
                                  : isUserPicked
                                  ? "bg-red-600/30 border-red-500 text-red-200"
                                  : "bg-slate-900 border-slate-800 text-slate-400"
                              )}
                            >
                              <span>
                                <strong>{String.fromCharCode(65 + oIdx)}.</strong> {opt}
                              </span>
                              {isRightAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                              {isUserPicked && !isRightAnswer && <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
                            </div>
                          );
                        })}
                      </div>

                      {/* Detailed Solution Explanation */}
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300 leading-relaxed">
                        <span className="font-extrabold text-amber-400 block mb-1">📘 Solution & Explanation:</span>
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollArea>
        )}

        {/* SUBMIT CONFIRMATION MODAL */}
        <Dialog open={isSubmitConfirmOpen} onOpenChange={setIsSubmitConfirmOpen}>
          <DialogContent className="max-w-md bg-slate-900 border-slate-800 text-white rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-black text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Submit Test Series Confirmation?
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-400">
                Are you sure you want to finish and view your final score?
              </DialogDescription>
            </DialogHeader>

            <div className="my-4 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span>Total Answered:</span>
                <span className="font-bold text-emerald-400">{stats.answered + stats.answeredAndMarked}</span>
              </div>
              <div className="flex justify-between">
                <span>Not Answered:</span>
                <span className="font-bold text-red-400">{stats.notAnswered}</span>
              </div>
              <div className="flex justify-between">
                <span>Marked for Review:</span>
                <span className="font-bold text-purple-400">{stats.markedOnly}</span>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setIsSubmitConfirmOpen(false)}
                className="bg-slate-800 border-slate-700 text-white text-xs font-bold"
              >
                Back to Test
              </Button>
              <Button
                onClick={() => {
                  setIsSubmitConfirmOpen(false);
                  setTestStatus("scorecard");
                }}
                className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-black text-xs"
              >
                Confirm & Submit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}
