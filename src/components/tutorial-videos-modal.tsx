"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Video, Clock, CheckCircle, ExternalLink, RefreshCw, Tag, Code, Search, X, Sparkles, Heart, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VideoTutorial {
  id: string;
  title: string;
  duration: string;
  category: "std1" | "std2" | "production" | "lab-testing" | "qa-qc" | "sarathi" | "formats" | "general";
  description: string;
  youtubeId: string; // YouTube Video Embed ID - edit this value to link your YouTube video
  thumbnailBg: string;
  bullets: string[];
}

export function triggerVideoTutorial(videoId?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-video-tutorial", { detail: { videoId } }));
  }
}

export const TUTORIAL_VIDEOS: VideoTutorial[] = [
  // --- GENERAL & LOGIN ---
  {
    id: "how-to-login",
    title: "How to Login & Sign Up in Dairy Hub App",
    duration: "2:15",
    category: "general",
    description: "Complete walkthrough on creating an account, logging in with Google or Email, and managing profile settings.",
    youtubeId: "5qap5aO4i9A",
    thumbnailBg: "from-blue-600 to-indigo-800",
    bullets: [
      "Creating a new Dairy Hub account in seconds",
      "One-click Google Sign-In walkthrough",
      "Unlocking Pro features and saving favorites",
    ],
  },

  // --- STANDARDIZATION I ---
  {
    id: "std1-pearson",
    title: "Standardization I - Pearson Square Method",
    duration: "1:00",
    category: "std1",
    description: "Learn basic Pearson Square calculation for fat & SNF standardization in raw milk batches.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-600 to-indigo-700",
    bullets: [
      "Target Fat & SNF calculation methodology",
      "Blending skim milk & cream proportioning",
      "Avoiding costly milk solids loss in plant batches",
    ],
  },
  {
    id: "std1-single-milk",
    title: "Standardization I - Single Source Milk Adjustment",
    duration: "0:00",
    category: "std1",
    description: "Standardize raw milk to Toned, Double Toned, Full Cream or Standardized milk using Skim/Cream.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-sky-600 to-blue-700",
    bullets: [
      "Adjusting raw milk to Toned or Double Toned standards",
      "Cream and Skim Milk dosing formula",
      "Mass balance equation step-by-step",
    ],
  },
  {
    id: "std1-smp-water",
    title: "Standardization I - SMP & Water Addition",
    duration: "0:00",
    category: "std1",
    description: "Calculate Skimmed Milk Powder (SMP) and water addition for target SNF & TS adjustment.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-indigo-600 to-cyan-700",
    bullets: [
      "Skimmed Milk Powder (SMP) addition for SNF correction",
      "Water addition for high Fat raw milk dilution",
      "Precise solids and volume adjustment",
    ],
  },

  // --- STANDARDIZATION II ---
  {
    id: "std2-batch",
    title: "Standardization II - Multi-Solids Batch (Curd/Lassi)",
    duration: "0:00",
    category: "std2",
    description: "Multi-solids batch standardization for Sweet Curd, Lassi, Dahi, Paneer & Ice Cream mix.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-purple-600 to-indigo-700",
    bullets: [
      "Sweet Curd & Lassi batch solids target calculation",
      "Sugar, Fat & SNF simultaneous balance",
      "Preventing curd separation & syneresis",
    ],
  },
  {
    id: "multi-solids-batch",
    title: "Multi-Solids Batch Standardization (Sweet Curd, Lassi, Paneer, Ice Cream)",
    duration: "0:00",
    category: "std2",
    description: "Advanced multi-component mass balance for products requiring Fat, SNF, Sugar, and total solids control.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-fuchsia-600 to-pink-700",
    bullets: [
      "Complex mass balance equations for multi-ingredient batches",
      "Calculating exact sugar, fat, and SNF percentage",
      "Optimizing batch yield & texture stability",
    ],
  },
  {
    id: "std2-multi-milk",
    title: "Standardization II - Multi-Milk Blending (2 to 6 Milks)",
    duration: "0:00",
    category: "std2",
    description: "Blend 2, 3, 4, 5, or 6 different raw milk batches to hit target Fat & SNF percentages.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-violet-600 to-fuchsia-700",
    bullets: [
      "Blending 2, 3, 4, 5, or 6 raw milk silos",
      "Weighted average Fat & SNF calculation",
      "Cost-optimal raw milk utilization in plant",
    ],
  },
  {
    id: "std2-fat-snf-clr",
    title: "Standardization II - Fat, SNF, CLR & Total Solids",
    duration: "0:00",
    category: "std2",
    description: "Calculate Total Solids (TS) and SNF from Fat and CLR reading using ISI/Richmond formulas.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-600 to-cyan-600",
    bullets: [
      "ISI & Richmond formula SNF calculation",
      "Total Solids (TS %) determination",
      "CLR lactometer reading verification",
    ],
  },
  {
    id: "std2-pearson-fat",
    title: "Standardization II - Pearson Square Fat Blending",
    duration: "0:00",
    category: "std2",
    description: "Advanced Pearson square blending for fat proportioning in dairy silos.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-700 to-indigo-800",
    bullets: [
      "Pearson square matrix for fat blending",
      "High fat and low fat milk mixing ratio",
      "Quick calculations for plant operators",
    ],
  },
  {
    id: "std2-reconstituted",
    title: "Standardization II - Reconstituted Milk Preparation",
    duration: "0:00",
    category: "std2",
    description: "Calculate SMP powder and water requirement for reconstituting skim milk batches.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-sky-500 to-blue-600",
    bullets: [
      "SMP powder & water ratio calculation",
      "Preparing reconstituted skim milk batches",
      "Powder hydration & solubility tips",
    ],
  },
  {
    id: "std2-recombined",
    title: "Standardization II - Recombined Milk Calculation",
    duration: "0:00",
    category: "std2",
    description: "Recombine Butter Oil / White Butter, SMP, and Water to prepare market milk.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-cyan-600 to-teal-700",
    bullets: [
      "Anhydrous Milk Fat (AMF) / Butter + SMP + Water ratio",
      "Recombining market milk to FSSAI standards",
      "Homogenization & fat dispersion guidelines",
    ],
  },
  {
    id: "std2-clr-increase",
    title: "Standardization II - CLR Increase by SMP",
    duration: "0:00",
    category: "std2",
    description: "Calculate exact SMP requirement to raise lactometer CLR reading in raw milk.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-emerald-600 to-teal-700",
    bullets: [
      "Increasing lactometer CLR reading using SMP",
      "Exact SMP powder quantity per 1000L milk",
      "SNF correction without affecting Fat %",
    ],
  },
  {
    id: "std2-clr-correction",
    title: "Standardization II - CLR Temperature Correction",
    duration: "0:00",
    category: "std2",
    description: "Correct lactometer reading (CLR) based on sample temperature (15°C / 20°C / 27°C / 29°C).",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-red-600 to-rose-700",
    bullets: [
      "Lactometer temperature correction table",
      "Standardizing CLR reading at 15°C / 20°C / 27°C / 29°C",
      "Avoiding false SNF estimations",
    ],
  },
  {
    id: "std2-auto-std",
    title: "Standardization II - Automated Two-Component Standardization",
    duration: "0:00",
    category: "std2",
    description: "Automated calculation for simultaneous Fat and SNF adjustment using cream and skim milk.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-teal-600 to-emerald-700",
    bullets: [
      "Automated simultaneous Fat & SNF adjustment",
      "Cream & Skim milk double equation solver",
      "Zero-error precision batch standardization",
    ],
  },

  // --- PRODUCTION CALCULATIONS ---
  {
    id: "shift-report",
    title: "Shift Report & Production Reconciliation",
    duration: "0:00",
    category: "production",
    description: "Step-by-step guide on shift milk intake, processing reconciliation, losses tracking & shift handover report.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-teal-600 to-emerald-700",
    bullets: [
      "Shift milk reception & transfer accounting",
      "Processing loss % calculation per shift",
      "Filling out shift logs for plant supervisors",
    ],
  },
  {
    id: "prod-cream-sep",
    title: "Cream Separation & Skim Milk Output",
    duration: "0:00",
    category: "production",
    description: "Calculate cream yield, skim milk yield, and fat separation efficiency in cream separator.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-amber-600 to-orange-700",
    bullets: [
      "Cream yield and skim milk volume ratio",
      "Separator efficiency and fat loss in skim milk",
      "Adjusting cream fat % (30% to 50%)",
    ],
  },
  {
    id: "prod-butter-yield",
    title: "Butter Yield & Churning Fat Loss",
    duration: "0:00",
    category: "production",
    description: "Calculate butter yield from cream, overrun %, and fat loss in buttermilk (छाछ).",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-yellow-600 to-amber-700",
    bullets: [
      "Butter yield per 100 kg cream",
      "Overrun percentage calculation",
      "Buttermilk (छाछ) fat loss tracking",
    ],
  },
  {
    id: "prod-khoa-yield",
    title: "Khoa / Mawa Yield Calculation",
    duration: "0:00",
    category: "production",
    description: "Calculate Khoa yield %, moisture evaporation, and fat-SNF recovery from whole milk.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-orange-600 to-amber-800",
    bullets: [
      "Khoa yield % from buffalo & cow milk",
      "Moisture evaporation tracking",
      "Fat and SNF recovery in Khoa batch",
    ],
  },
  {
    id: "prod-shrikhand",
    title: "Shrikhand & Chakka Yield Calculation",
    duration: "0:00",
    category: "production",
    description: "Calculate Chakka yield from curd, whey drainage loss %, and sugar dosing for Shrikhand.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-amber-500 to-yellow-600",
    bullets: [
      "Chakka yield from curd / dahi",
      "Whey drainage loss percentage",
      "Sugar addition ratio for Shrikhand",
    ],
  },
  {
    id: "prod-pedha-burfi",
    title: "Pedha & Burfi Production Yield",
    duration: "0:00",
    category: "production",
    description: "Calculate Pedha and Burfi batch yield, sugar ratio, and moisture control.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-amber-600 to-yellow-700",
    bullets: [
      "Pedha and Burfi batch yield calculation",
      "Khoa to sugar ratio calculation",
      "Final product moisture and shelf-life factor",
    ],
  },
  {
    id: "prod-cheese",
    title: "Cheese & Paneer Yield Calculation",
    duration: "0:00",
    category: "production",
    description: "Calculate Paneer and Cheese yield based on Fat & Casein using Van Slyke formula.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-emerald-600 to-teal-700",
    bullets: [
      "Paneer and Cheese yield based on Fat & Casein",
      "Van Slyke cheese yield formula",
      "Whey fat & solids loss reduction",
    ],
  },
  {
    id: "prod-ghee-recovery",
    title: "Ghee Production & Fat Recovery %",
    duration: "0:00",
    category: "production",
    description: "Calculate Ghee yield from butter/cream, residue loss (गड्डी %), and net fat recovery.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-yellow-600 to-orange-600",
    bullets: [
      "Ghee yield from white butter & cream",
      "Residue loss (गड्डी) percentage",
      "Total fat recovery efficiency %",
    ],
  },
  {
    id: "prod-pasteurization",
    title: "Pasteurization Hold Time & HTST Flow Rate",
    duration: "0:00",
    category: "production",
    description: "Calculate pasteurizer holding tube volume, flow rate (LPH), and log lethality (F0).",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-red-600 to-rose-700",
    bullets: [
      "Pasteurizer holding tube volume & time (15 sec)",
      "Flow rate calculation in Liters Per Hour (LPH)",
      "Temperature and lethality validation",
    ],
  },
  {
    id: "prod-evaporator",
    title: "Evaporator Water Removal & Condensing",
    duration: "0:00",
    category: "production",
    description: "Calculate water evaporation rate (kg/h), steam economy, and condensed milk yield.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-cyan-600 to-blue-700",
    bullets: [
      "Water evaporation rate (kg/h)",
      "Steam economy in multiple-effect evaporators",
      "Condensed milk Total Solids concentration",
    ],
  },
  {
    id: "prod-drying",
    title: "Spray Dryer Milk Powder Yield",
    duration: "0:00",
    category: "production",
    description: "Calculate WMP / SMP powder yield, inlet & outlet air temp efficiency, and powder moisture.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-600 to-indigo-700",
    bullets: [
      "WMP / SMP powder yield per hour",
      "Inlet & outlet air temp energy balance",
      "Powder moisture and stack loss control",
    ],
  },
  {
    id: "prod-paneer-coagulant",
    title: "Paneer Coagulant Acid Dosing",
    duration: "0:00",
    category: "production",
    description: "Calculate Citric Acid / Lactic Acid solution volume and temperature for paneer coagulation.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-lime-600 to-green-700",
    bullets: [
      "Citric acid & lactic acid solution dosing",
      "Coagulation temperature (80-85°C) & pH (5.3)",
      "Paneer texture and yield optimization",
    ],
  },
  {
    id: "prod-culture-dosing",
    title: "Starter Culture Dosing (Dahi/Yogurt)",
    duration: "0:00",
    category: "production",
    description: "Calculate freeze-dried / DVS culture dosing rate for curd and fermented milk.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-purple-600 to-pink-700",
    bullets: [
      "Freeze-dried / DVS culture dosing rate",
      "Incubation time and acidity development",
      "Curd firmness and syneresis prevention",
    ],
  },
  {
    id: "prod-cip-dosing",
    title: "CIP Chemical Dosing (Caustic & Acid)",
    duration: "5:30",
    category: "production",
    description: "Calculate caustic soda (NaOH) and nitric acid volume for CIP tank preparation.",
    youtubeId: "J---aiyznGQ",
    thumbnailBg: "from-indigo-600 to-purple-700",
    bullets: [
      "Caustic soda (NaOH) 1.5-2.0% solution prep",
      "Nitric acid (HNO3) 0.5-1.0% solution prep",
      "Chemical dosing calculation for CIP tanks",
    ],
  },
  {
    id: "prod-tank-volume",
    title: "Tank Volume & Dipstick Calibration",
    duration: "0:00",
    category: "production",
    description: "Calculate horizontal/vertical cylindrical silo volume and dipstick height to liters.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-slate-600 to-gray-700",
    bullets: [
      "Cylindrical & dish-bottom tank volume",
      "Dipstick height (cm/inch) to Liters conversion",
      "Silo stock reconciliation",
    ],
  },
  {
    id: "prod-pipeline-loss",
    title: "Pipeline Milk Volume & Flushing Loss",
    duration: "0:00",
    category: "production",
    description: "Calculate milk volume held in plant pipelines and water flushing push loss.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-600 to-sky-700",
    bullets: [
      "Internal volume calculation of SS pipes",
      "Water push flushing milk recovery",
      "Reducing milk loss during plant transfers",
    ],
  },
  {
    id: "prod-packaging-film",
    title: "Packaging Film & Pouch Weight Ratio",
    duration: "0:00",
    category: "production",
    description: "Calculate milk pouch packaging film consumption (kg) per 1000 liters / pouches.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-violet-600 to-purple-700",
    bullets: [
      "Poly film thickness (micron) & roll weight",
      "Film consumption per 1000 milk pouches",
      "Pouch leak & pouch weight loss control",
    ],
  },
  {
    id: "prod-chilling-load",
    title: "Chilling Load & Refrigeration Tons (TR)",
    duration: "0:00",
    category: "production",
    description: "Calculate PHE milk chilling heat load in kcal/h and required Refrigeration Tons (TR).",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-cyan-600 to-teal-700",
    bullets: [
      "Milk cooling heat load (Q = m × Cp × ΔT)",
      "PHE plate heat exchanger cooling load",
      "Required Refrigeration TR capacity",
    ],
  },
  {
    id: "prod-boiler-cost",
    title: "Boiler Steam & Fuel Cost Calculation",
    duration: "0:00",
    category: "production",
    description: "Calculate steam requirement (kg/h), fuel consumption (diesel/briquette), and steam cost.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-orange-600 to-red-700",
    bullets: [
      "Steam requirement for pasteurization & boiling",
      "Fuel consumption (Diesel/Gas/Briquette)",
      "Cost per kg of steam generated",
    ],
  },
  {
    id: "prod-ibt-ice",
    title: "Ice Build Tank (IBT) Storage Capacity",
    duration: "0:00",
    category: "production",
    description: "Calculate IBT ice build thickness, ice storage capacity (kg), and cooling backup hours.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-sky-600 to-blue-800",
    bullets: [
      "Ice thickness build on evaporator coils",
      "Latent heat energy storage capacity",
      "Chilled water availability during peak load",
    ],
  },
  {
    id: "prod-wmr-water",
    title: "Water Monitoring Ratio (WMR)",
    duration: "0:00",
    category: "production",
    description: "Calculate plant water consumption per liter of milk processed (WMR ratio).",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-500 to-cyan-600",
    bullets: [
      "Water consumption per liter milk processed",
      "Benchmarking plant water efficiency",
      "Wastewater reduction strategies",
    ],
  },
  {
    id: "prod-etp-load",
    title: "ETP Wastewater & Effluent Load",
    duration: "0:00",
    category: "production",
    description: "Calculate ETP effluent generation (BOD, COD, TSS) and chemical treatment dosing.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-green-600 to-emerald-700",
    bullets: [
      "BOD, COD, and TSS load in dairy effluent",
      "Chemical treatment dosing (Alum, Lime, Polymer)",
      "ETP discharge compliance standards",
    ],
  },

  // --- LAB TESTING & CHEMICAL ANALYSIS ---
  {
    id: "solutions-prep",
    title: "Solution Preparation & Reagent Titration",
    duration: "3:50",
    category: "lab-testing",
    description: "How to prepare standard N/10 NaOH, Phenolphthalein indicator, Gerber acid & standard lab reagents.",
    youtubeId: "8rQI8RyaVvw",
    thumbnailBg: "from-amber-600 to-orange-700",
    bullets: [
      "Normality & Molarity calculation formulas",
      "Safe acid dilution & temperature safety",
      "Standardization against Oxalic Acid",
    ],
  },
  {
    id: "water-testing",
    title: "Water Testing (WTP / ETP Hardness, pH & Chlorine)",
    duration: "0:00",
    category: "lab-testing",
    description: "Complete lab guide on boiler feed water, WTP softener testing, EDTA hardness titration & residual chlorine.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-600 to-cyan-700",
    bullets: [
      "EDTA titration for Total & Permanent Hardness",
      "pH & Total Dissolved Solids (TDS) measurement",
      "Chlorine dosing validation for CIP rinse water",
    ],
  },
  {
    id: "compositional-analysis",
    title: "Compositional Analysis of Milk & Dairy Products",
    duration: "0:00",
    category: "lab-testing",
    description: "Comprehensive guide on testing Fat, Protein, Lactose, Ash, Moisture & Total Solids in dairy samples.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-indigo-600 to-purple-700",
    bullets: [
      "Chemical testing standards for Milk, Dahi & Paneer",
      "MilkoScan & FT-IR calibration principles",
      "Wet chemical reference test validation",
    ],
  },
  {
    id: "lab-pricing",
    title: "Milk Pricing & TS / Fat / SNF Rate",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate milk price per liter based on Fat rate, SNF rate, or TS rate matrix.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-emerald-600 to-teal-700",
    bullets: [
      "Fat rate + SNF rate milk pricing matrix",
      "Two-axis milk payment calculation",
      "Quality penalty & bonus deduction",
    ],
  },
  {
    id: "lab-rm-polenske",
    title: "Reichert-Meissl (RM) & Polenske Value",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate RM value and Polenske value for detecting adulteration in Ghee & Butter fat.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-amber-600 to-orange-700",
    bullets: [
      "RM value test for Ghee purity",
      "Polenske value for detecting coconut oil",
      "Distillation and titration procedure",
    ],
  },
  {
    id: "lab-ffa-acid",
    title: "Free Fatty Acids (FFA %) & Acid Value",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate FFA % and Acid Value in Ghee, Butter, and Milk Fat by NaOH titration.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-yellow-600 to-amber-700",
    bullets: [
      "FFA % titration in Ghee and Butter fat",
      "N/10 NaOH & phenolphthalein titration",
      "Lipolysis and fat quality evaluation",
    ],
  },
  {
    id: "lab-peroxide",
    title: "Peroxide Value (PV) Test in Dairy Fat",
    duration: "0:00",
    category: "lab-testing",
    description: "Determine peroxide value for rancidity and oxidative stability assessment in fat samples.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-rose-600 to-red-700",
    bullets: [
      "Determining Peroxide Value by thiosulfate titration",
      "Oxidative rancidity assessment",
      "Storage stability of Ghee and Butter",
    ],
  },
  {
    id: "lab-salt-test",
    title: "Salt % (NaCl) in Butter & Cheese",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate salt percentage in salted butter and cheese using AgNO3 Volhard/Mohr titration.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-600 to-indigo-700",
    bullets: [
      "Volhard / Mohr silver nitrate titration",
      "Salt percentage in table butter",
      "Quality compliance for salted products",
    ],
  },
  {
    id: "lab-soxhlet-oil",
    title: "Fat / Oil % Determination (Soxhlet Method)",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate total fat/oil percentage in dairy powders and feed samples by solvent extraction.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-violet-600 to-purple-700",
    bullets: [
      "Soxhlet solvent extraction with petroleum ether",
      "Crude fat % in dairy powders & cattle feed",
      "Gravimetric fat residue calculation",
    ],
  },
  {
    id: "lab-acidity",
    title: "Titratable Acidity (% Lactic Acid / °SH)",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate titratable acidity in milk, dahi, cream, and whey using N/10 NaOH titration.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-teal-600 to-cyan-700",
    bullets: [
      "Titratable acidity calculation in milk & whey",
      "Converting % Lactic Acid to °SH and °D",
      "Detecting sour milk at reception dock",
    ],
  },
  {
    id: "lab-protein-casein",
    title: "Milk Protein & Casein % (Kjeldahl Method)",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate Total Nitrogen, Crude Protein %, and Casein content in raw and processed milk.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-purple-600 to-indigo-700",
    bullets: [
      "Kjeldahl digestion, distillation & titration",
      "Converting Total Nitrogen % to Protein % (6.38)",
      "Casein precipitation and fraction estimation",
    ],
  },
  {
    id: "lab-minerals-nak",
    title: "Sodium & Potassium Estimation (Flame Photometer)",
    duration: "0:00",
    category: "lab-testing",
    description: "Determine Na and K mineral levels in milk serum to detect synthetic milk adulteration.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-sky-600 to-blue-700",
    bullets: [
      "Flame photometer analysis for Na and K",
      "Normal sodium/potassium ratio in genuine milk",
      "Detecting synthetic milk neutralizers (NaOH/NaCl)",
    ],
  },
  {
    id: "lab-gerber-fat",
    title: "Gerber Fat Test & Cream Butyrometer",
    duration: "3:50",
    category: "lab-testing",
    description: "Calculate milk and cream fat percentage using Gerber butyrometer and sulfuric acid.",
    youtubeId: "8rQI8RyaVvw",
    thumbnailBg: "from-amber-600 to-orange-700",
    bullets: [
      "Gerber method sulfuric acid & isoamyl alcohol",
      "Centrifugation at 1100 RPM for 5 mins",
      "Reading fat meniscus accurately",
    ],
  },
  {
    id: "lab-total-solids",
    title: "Total Solids & Moisture % (Gravimetric)",
    duration: "0:00",
    category: "lab-testing",
    description: "Calculate Total Solids (TS) and Moisture content by oven drying method at 102°C.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-indigo-600 to-blue-700",
    bullets: [
      "Oven drying method at 102°C ± 2°C",
      "Gravimetric moisture loss calculation",
      "Total Solids (TS %) precision determination",
    ],
  },
  {
    id: "lab-cip-strength",
    title: "CIP Solution Concentration & Strength %",
    duration: "3:50",
    category: "lab-testing",
    description: "Calculate caustic (NaOH) and acid concentration % by acid-base titration in lab.",
    youtubeId: "8rQI8RyaVvw",
    thumbnailBg: "from-purple-600 to-violet-700",
    bullets: [
      "Acid-base titration for caustic & acid strength",
      "Calculating chemical top-up requirement",
      "Ensuring effective CIP wash cycles",
    ],
  },

  // --- QA/QC & COMPLIANCE ---
  {
    id: "calibration",
    title: "Calibration of Glassware, Lactometers & Thermometers",
    duration: "0:00",
    category: "qa-qc",
    description: "How to calibrate lactometers, glass volumetric pipettes, butyrometers & lab thermometers.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-red-600 to-orange-700",
    bullets: [
      "Lactometer stem error verification with distilled water",
      "Volumetric calibration of 10.75 ml milk pipette",
      "Thermometer calibration against ice point & boiling point",
    ],
  },
  {
    id: "microbiology",
    title: "Microbiology Testing, Microbial Plating & MBRT",
    duration: "0:00",
    category: "qa-qc",
    description: "Guide on SPC (Standard Plate Count), Coliform estimation, Yeast & Mold plating, and MBRT test.",
    youtubeId: "3Q9Zp8x9Wms",
    thumbnailBg: "from-purple-600 to-violet-800",
    bullets: [
      "Aseptic sampling technique on reception dock",
      "Serial dilution & agar medium preparation (PCA / VRBA)",
      "MBRT reduction time grading (Good/Fair/Poor)",
    ],
  },
  {
    id: "fssai-standards",
    title: "FSSAI Standards & Dairy Regulatory Rules",
    duration: "0:00",
    category: "qa-qc",
    description: "Overview of FSSAI Food Safety regulations, fat/SNF standards for Toned, Standardized, Buffalo & Cow milk.",
    youtubeId: "5qap5aO4i9A",
    thumbnailBg: "from-emerald-600 to-teal-700",
    bullets: [
      "FSSAI minimum Fat & SNF standards table",
      "Labeling & nutritional declaration requirements",
      "Adulterant limit compliance & legal testing",
    ],
  },
  {
    id: "quality-concepts",
    title: "Quality Concepts (HACCP, ISO 22000, TQM & GMP)",
    duration: "0:00",
    category: "qa-qc",
    description: "Understanding HACCP Hazard Analysis, Critical Control Points (CCPs), ISO 22000 FSMS & TQM in dairy.",
    youtubeId: "J---aiyznGQ",
    thumbnailBg: "from-cyan-600 to-sky-700",
    bullets: [
      "Identifying CCPs in pasteurization & metal detection",
      "PRP (Prerequisite Programs) & OPRP guidelines",
      "Audit compliance and zero-defect quality mindset",
    ],
  },
  {
    id: "platform-test",
    title: "Platform Testing & Quality Control",
    duration: "6:10",
    category: "qa-qc",
    description: "Step-by-step visual demonstration of platform tests: MBRT, alcohol test, lactometer SNF estimation, and adulterant testing.",
    youtubeId: "3Q9Zp8x9Wms",
    thumbnailBg: "from-emerald-600 to-teal-700",
    bullets: [
      "Correct lactometer reading & temperature correction",
      "Rapid adulteration detection (starch, urea, detergent)",
      "Quality grading on milk reception dock",
    ],
  },
  {
    id: "cip-guide",
    title: "CIP System Optimization & Sanitization",
    duration: "5:30",
    category: "qa-qc",
    description: "Master Clean-In-Place chemical dosing calculations, temperature-time cycles, and sanitization validation for pasteurizers & silos.",
    youtubeId: "J---aiyznGQ",
    thumbnailBg: "from-purple-600 to-violet-700",
    bullets: [
      "Caustic & acid solution strength calculation",
      "Rinse cycle efficiency & chemical conservation",
      "Preventing milk stone accumulation",
    ],
  },

  // --- FORMATS & LOG SHEETS ---
  {
    id: "plant-formats",
    title: "Plant Formats, Log Sheets & Operating Records",
    duration: "0:00",
    category: "formats",
    description: "Guide on using digital plant log sheets for Pasteurizer, CIP, Silo stock & Packaging reconciliation.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-teal-600 to-emerald-700",
    bullets: [
      "Pasteurizer hourly log sheet recording",
      "Silo stock balance & milk loss tracking",
      "Downloading PDF plant formats",
    ],
  },
  {
    id: "lab-formats",
    title: "Lab Formats, QA/QC Registers & Sample Logs",
    duration: "0:00",
    category: "formats",
    description: "Digital formats for Milk Reception Dock log, Chemical Analysis register & Microbiology test reports.",
    youtubeId: "dyuTFg28TO0",
    thumbnailBg: "from-blue-600 to-indigo-700",
    bullets: [
      "Dock reception quality testing log sheet",
      "Chemical reagent preparation & standardized solution log",
      "Audit-ready QA/QC digital registers",
    ],
  },

  // --- SARATHI AI & SUPPORT ---
  {
    id: "expert-support",
    title: "Expert Support & Dairy Technology Guidance",
    duration: "0:00",
    category: "sarathi",
    description: "How to consult dairy technologists, ask technical questions, and resolve plant troubleshooting issues.",
    youtubeId: "5qap5aO4i9A",
    thumbnailBg: "from-amber-600 to-orange-700",
    bullets: [
      "Submitting technical queries to Sarathi AI & experts",
      "Troubleshooting ghee aroma, dahi sourness & paneer hardness",
      "Plant operational optimization advice",
    ],
  },
  {
    id: "sarathi-ai",
    title: "Sarathi AI Assistant - Instant Dairy Solutions",
    duration: "3:15",
    category: "sarathi",
    description: "How to use Sarathi AI to resolve complex processing issues, troubleshoot product defects, and ask dairy technology questions.",
    youtubeId: "5qap5aO4i9A",
    thumbnailBg: "from-cyan-600 to-blue-700",
    bullets: [
      "Voice & text prompt best practices",
      "Troubleshooting cheese, dahi & ghee defects",
      "FSSAI standards quick search",
    ],
  },
];

interface TutorialVideosModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialVideoId?: string;
}

export function TutorialVideosModal({ open, onOpenChange, initialVideoId }: TutorialVideosModalProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(TUTORIAL_VIDEOS[0]);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (initialVideoId) {
      const found = TUTORIAL_VIDEOS.find((v) => v.id === initialVideoId);
      if (found) {
        setSelectedVideo(found);
      }
    }
  }, [initialVideoId]);

  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ videoId?: string }>;
      if (customEvent.detail?.videoId) {
        const found = TUTORIAL_VIDEOS.find((v) => v.id === customEvent.detail.videoId);
        if (found) {
          setSelectedVideo(found);
          setIsPlaying(true);
        }
      }
      onOpenChange(true);
    };

    window.addEventListener("open-video-tutorial", handleOpenEvent);
    return () => window.removeEventListener("open-video-tutorial", handleOpenEvent);
  }, [onOpenChange]);

  const filteredVideos = TUTORIAL_VIDEOS.filter((v) => {
    const matchesCategory = filterCategory === "all" || v.category === filterCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.id.toLowerCase().includes(q) ||
      v.bullets.some((b) => b.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handleSelectVideo = (video: VideoTutorial) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl rounded-2xl bg-slate-950 text-white border border-slate-800 p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900/60 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Dairy Hub Video Tutorials 📺
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-[10px]">
                  {TUTORIAL_VIDEOS.length} Video Handles
                </Badge>
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-400">
                Step-by-step video guides for Standardization I, Standardization II, Production, Lab & Quality.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[78vh] overflow-y-auto">
          {/* Main Video View Area */}
          <div className="md:col-span-7 p-4 sm:p-5 bg-slate-950 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800/80 space-y-4">
            {selectedVideo ? (
              <div className="space-y-4">
                {/* Video Player Screen Overlay */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 group shadow-xl">
                  <div className={cn("absolute inset-0 bg-gradient-to-br flex flex-col items-center justify-center p-4 sm:p-6 text-center space-y-3 z-20 backdrop-blur-md", selectedVideo.thumbnailBg)}>
                    {/* Floating Lovely Animated Badge */}
                    <span className="bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-bounce border border-white/40">
                      <span>🚀 Open in Future Update</span> 🎥✨
                    </span>

                    {/* Sweet Lovely Message Card on Video Screen */}
                    <div className="bg-slate-950/90 border border-amber-500/50 rounded-2xl p-4 sm:p-5 max-w-md mx-auto shadow-2xl text-center space-y-2">
                      <h4 className="text-sm sm:text-base font-extrabold text-amber-300 flex items-center justify-center gap-1.5">
                        <span>{selectedVideo.title}</span> 💖
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                        प्यारे साथी! 💖 यह विशेष HD वीडियो ट्यूटोरियल भविष्य के नए अपडेट में बहुत जल्द लाइव रिलीज़ किया जाएगा! 🌟
                      </p>
                      <p className="text-[11px] text-amber-200 bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-xl font-semibold">
                        तब तक आप नीचे दिए गए मुख्य बिंदु (Key Takeaways) व गाइड देखकर आसानी से समझ सकते हैं! 🥛✨
                      </p>
                      <div className="flex items-center justify-center gap-2 pt-1 text-[11px]">
                        <span className="bg-amber-500/30 text-amber-200 px-2.5 py-0.5 rounded-full border border-amber-400/40 font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-300" /> {selectedVideo.duration !== "0:00" ? `${selectedVideo.duration} mins` : "Tutorial Video"}
                        </span>
                        <span className="bg-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full border border-blue-400/40 font-mono">
                          ID: {selectedVideo.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-white">{selectedVideo.title}</h3>
                    <div className="flex items-center gap-2">
                      {isPlaying && (
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                        >
                          <RefreshCw className="w-3 h-3" /> Replay Thumbnail
                        </button>
                      )}
                      <a
                        href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-blue-400 hover:underline flex items-center gap-1 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60"
                      >
                        <ExternalLink className="w-3 h-3" /> YouTube
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{selectedVideo.description}</p>
                </div>

                <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-lg p-2 text-[11px] text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-blue-400" />
                    <span>Handle Key: <strong>{selectedVideo.id}</strong></span>
                  </div>
                  <span className="text-slate-400 text-[10px]">YouTube ID: <code className="text-emerald-400">{selectedVideo.youtubeId}</code></span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Key Takeaways</span>
                  <ul className="space-y-1">
                    {selectedVideo.bullets.map((b, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-slate-500 text-xs">Select a video tutorial to begin watching.</div>
            )}
          </div>

          {/* Video List Sidebar */}
          <div className="md:col-span-5 p-4 bg-slate-900/40 space-y-3">
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search video tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-7 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
              {[
                { id: "all", label: "All" },
                { id: "std1", label: "Std I" },
                { id: "std2", label: "Std II" },
                { id: "production", label: "Production" },
                { id: "lab-testing", label: "Lab Testing" },
                { id: "qa-qc", label: "QA / QC" },
                { id: "formats", label: "Formats" },
                { id: "general", label: "App Guide" },
                { id: "sarathi", label: "AI Guide" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors",
                    filterCategory === cat.id
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-slate-800/80 text-slate-400 hover:text-slate-200"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* List items */}
            <div className="space-y-2 max-h-[55vh] overflow-y-auto pr-1">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => {
                  const isSelected = selectedVideo?.id === video.id;
                  return (
                    <div
                      key={video.id}
                      onClick={() => handleSelectVideo(video)}
                      className={cn(
                        "p-2.5 rounded-xl border text-left cursor-pointer transition-all flex items-start justify-between gap-2 group",
                        isSelected
                          ? "bg-blue-950/60 border-blue-500 text-white shadow-md"
                          : "bg-slate-900/80 border-slate-800/80 text-slate-300 hover:border-slate-700"
                      )}
                    >
                      <div className="space-y-1 overflow-hidden">
                        <div className="flex items-center gap-1.5">
                          <Play className={cn("w-3.5 h-3.5 shrink-0", isSelected ? "text-blue-400 fill-blue-400" : "text-slate-400")} />
                          <h4 className="text-xs font-semibold group-hover:text-white truncate">{video.title}</h4>
                        </div>
                        <p className="text-[10px] text-slate-400 truncate">{video.description}</p>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded shrink-0">
                        {video.id}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-slate-500 text-xs">
                  No video tutorials found matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
