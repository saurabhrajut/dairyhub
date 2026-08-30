import { FoodTestItem } from "./types";

export const NAMKEENS_SNACKS_TESTS: FoodTestItem[] = [
  // 1. PHYSICAL & CHEMICAL TEST: Total Fat, Acid Value of Extracted Fat & Salt (NaCl) in Namkeens & Potato Chips
  {
    id: "snack-chem-1",
    category: "Namkeens & Snacks",
    testType: "Chemical",
    productName: "Bhujia, Fried Snacks, Potato Chips, Roasted Namkeen, Mixture, Chanachur",
    testName: "Total Fat (Soxhlet Extraction), Acid Value of Extracted Fat & Salt (NaCl) Content",
    shortSummary: "Determines total lipid content, hydrolytic degradation of frying oil, and sodium chloride concentration in commercial fried snacks and namkeens.",
    detailedScientificRationale:
      "Fried snacks and Namkeens (Bhujia, Potato Chips, Chanachur) absorb significant quantities of frying oil (fat content typically 20 - 40%). During continuous industrial deep-fat frying at 170-190°C, the frying oil is subjected to thermal oxidation, polymerization, and hydrolysis (caused by steam evaporating from the snack dough).\n\nHydrolysis breaks triglycerides down into unesterified Free Fatty Acids (FFA). Acid Value of the fat extracted from fried snacks directly reflects the degree of thermal breakdown of the frying medium. FSSAI mandates that the Acid Value of fat extracted from fried snacks must not exceed 2.0 mg KOH/g fat. Furthermore, Sodium Chloride (Salt) content must be controlled to prevent hypertension and satisfy statutory labeling.",
    detailedTestPrinciple:
      "Total Fat is determined by continuous Soxhlet extraction of 10.0g ground dried snack with Petroleum Ether (40-60°C) for 6 hours. The solvent is evaporated, and the residue is weighed as Total Fat.\n\nAcid Value: The extracted fat is dissolved in neutral ethanol-ether (1:1 v/v) and titrated against 0.1 N KOH using phenolphthalein. Salt (NaCl): 5.0g crushed snack is extracted with warm water, and chloride ions (Cl-) are titrated against 0.1 N Silver Nitrate (AgNO3) using Potassium Chromate indicator (Volhard / Mohr Method) until a brick-red Silver Chromate endpoint.",
    chemicalEquation: "NaCl (Snack Extract) + AgNO3 (Standard Titrant) ⟶ AgCl ↓ (White Precipitate) + NaNO3   |   2 AgNO3 (Excess) + K2CrO4 ⟶ Ag2CrO4 ↓ (Brick Red Endpoint at Cl- Exhaustion)",
    formulaBreakdown: {
      formula: "% Total Fat = (W_fat / W_sample) × 100   |   % NaCl = (V_AgNO3 × N × 5.85) / W_sample",
      variables: [
        { symbol: "W_fat", description: "Mass of solvent-extracted lipid residue after oven drying (g)" },
        { symbol: "V_AgNO3", description: "Volume of 0.1 N AgNO3 consumed in Mohr titration (mL)" },
        { symbol: "N", description: "Normality of Silver Nitrate solution (0.1 N)" },
        { symbol: "5.85", description: "Milliequivalent factor for Sodium Chloride (58.44 g/mol ÷ 10)" },
        { symbol: "W_sample", description: "Mass of ground snack sample taken (g)" }
      ]
    },
    referenceStandard: "FSSAI Manual 03 & Manual 04 / IS 12566 (Fried Snacks) / AOAC 960.29",
    reagentsAndApparatus: [
      "Soxhlet Extraction Apparatus & Water Bath (40-60°C Petroleum Ether)",
      "0.1 N Standardized Silver Nitrate (AgNO3) & 0.1 N Potassium Hydroxide (KOH)",
      "5% Potassium Chromate (K2CrO4) Indicator Solution",
      "1% Phenolphthalein Indicator Solution in Ethanol",
      "Analytical Balance (0.0001g) & High-Speed Sample Mill"
    ],
    prescribedLimit: "Acid Value of Extracted Fat: Max 2.0 mg KOH/g fat | Total Fat: 20.0 - 38.0% | Salt (NaCl): Max 2.5% w/w",
    riskIfFailed: "Severe rancidity, acrid off-flavor, high Total Polar Compounds (TPC), accelerated lipid autoxidation, regulatory non-compliance under FSS Act.",
    procedureSteps: [
      "For Total Fat: Grind 10.0g snack, dry at 105°C, transfer into Soxhlet thimble, extract with Petroleum Ether for 6 hours. Distill solvent and weigh dry fat (W_fat).",
      "For Acid Value: Dissolve 5.0g extracted fat in 50mL neutral ethanol-ether (1:1), add 1mL phenolphthalein, titrate against 0.1 N KOH to faint pink.",
      "For Salt (NaCl): Boil 5.0g ground snack in 100mL distilled water for 15 min; filter into 250mL flask.",
      "Pipette 25mL filtrate, add 1mL 5% K2CrO4 indicator.",
      "Titrate against 0.1 N AgNO3 until yellow solution turns to a persistent brick-red Ag2CrO4 precipitate. Calculate % NaCl."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Soxhlet Lipid Extraction",
        title: "Continuous Soxhlet Fat Extraction",
        action: "Extract 10g ground snack with Petroleum Ether (40-60°C) in Soxhlet for 6 hours.",
        scientificMechanism: "Non-polar petroleum ether quantitatively dissolves all neutral lipids, free fatty acids, and phospholipids.",
        controlPoint: "CCP 1: Perform extraction rate at 6-8 siphons per hour.",
        reagentsInvolved: ["Petroleum Ether", "Soxhlet Apparatus"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Extracted Fat Acid Value Titration",
        title: "Alkalimetric Acid Value Titration",
        action: "Dissolve 5g extracted fat in 50mL neutral ethanol-ether; titrate with 0.1N KOH to pink endpoint.",
        scientificMechanism: "Quantifies free fatty acids liberated during commercial deep-fat frying operations.",
        controlPoint: "CCP 2: Titrate immediately to prevent atmospheric autoxidation.",
        reagentsInvolved: ["0.1N KOH", "Phenolphthalein"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Chloride Aqueous Extraction",
        title: "Aqueous Salt Boiling Extraction",
        action: "Boil 5g ground snack in 100mL distilled water for 15 min; filter through Whatman No. 1.",
        scientificMechanism: "Solubilizes highly water-soluble Sodium Chloride (NaCl) from snack matrix into aqueous filtrate.",
        controlPoint: "CCP 3: Cool filtrate to 25°C before titration.",
        reagentsInvolved: ["Distilled Water"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Mohr Precipitation Titration",
        title: "Argentometric Mohr Titration",
        action: "Titrate 25mL filtrate with 0.1N AgNO3 using 5% K2CrO4 indicator until brick-red precipitate forms.",
        scientificMechanism: "Ag+ ions precipitate Cl- as white AgCl; excess Ag+ reacts with chromate to form brick-red Ag2CrO4 precipitate.",
        controlPoint: "CCP 4: Maintain titration solution pH between 6.5 - 9.0.",
        reagentsInvolved: ["0.1N AgNO3", "5% K2CrO4 Indicator"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Snack Quality & Rancidity Gate",
        title: "Fat Acid Value & Salt Compliance Audit Gate",
        action: "Calculate % Fat, Acid Value (mg KOH/g), and % NaCl. Verify Acid Value <= 2.0.",
        scientificMechanism: "Assesses hydrolytic breakdown of frying oil and checks dietary sodium compliance.",
        controlPoint: "Quality Gate: Acid Value > 2.0 mg KOH/g indicates degraded, rancid frying oil requiring rejection.",
        reagentsInvolved: ["FSSAI Manual 03"]
      }
    ]
  }
];
