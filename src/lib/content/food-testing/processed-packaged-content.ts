import { FoodTestItem } from "./types";

export const PROCESSED_PACKAGED_TESTS: FoodTestItem[] = [
  // 1. PHYSICAL TEST: Net Weight, Drained Weight & Total Soluble Solids (°Brix)
  {
    id: "processed-phys-1",
    category: "Processed & Packaged Foods",
    testType: "Physical",
    productName: "Pickle, Jam, Jelly, Ketchup, Tomato Sauce, Mayonnaise, Chutney, Canned Food",
    testName: "Drained Weight & Refractometric °Brix Determination",
    shortSummary: "Determines proportion of solid food particles relative to liquid medium and measures dissolved soluble solids in preserves and sauces.",
    detailedScientificRationale:
      "Processed fruit and vegetable preserves (Jams, Jellies, Pickles, Canned Foods) are formulated with specific solid-to-liquid packing ratios. In canned fruits/vegetables and pickles, 'Drained Weight' measures the actual mass of edible solid food components remaining after draining the packing liquid (brine, syrup, or oil) through a standardized US No. 8 (2.36mm) sieve.\n\nTotal Soluble Solids (TSS) measured in °Brix represents the percentage of dissolved sucrose, fruit sugars, and soluble solids. In Jams and Jellies, achieving a minimum °Brix of 65.0° is mandatory to lower water activity (a_w < 0.80), creating osmotic pressure that prevents bacterial and yeast spoilage while enabling High Methoxyl (HM) Pectin to form a firm polymer gel network at pH 3.0-3.5.",
    detailedTestPrinciple:
      "For Drained Weight: Container contents are poured onto a pre-weighed circular 2.36mm sieve inclined at a 17-20° angle and allowed to drain for exactly 2 minutes. The sieve with drained solids is weighed. For °Brix: A drop of clarified juice/sauce is placed on the prism of a temperature-compensated digital or Abbe Refractometer. Light refraction angle changes proportionally to dissolved sugar concentration, calibrated against pure sucrose standard scales at 20°C.",
    chemicalEquation: "Refractive Index (n_D at 20°C) ∝ Concentrated Soluble Sucrose Mass % (°Brix)",
    formulaBreakdown: {
      formula: "% Drained Weight = [(W_sieve+solids - W_sieve) / Net Mass W_total] × 100",
      variables: [
        { symbol: "W_sieve", description: "Tare mass of clean dry 2.36mm circular sieve (g)" },
        { symbol: "W_sieve+solids", description: "Mass of sieve + drained solid food after 2 min draining (g)" },
        { symbol: "W_total", description: "Total net mass of entire container contents (g)" }
      ]
    },
    referenceStandard: "FSSAI Manual 05 (Fruit & Veg) / IS 5861 / ISO 2173 / AOAC 932.12",
    reagentsAndApparatus: [
      "Digital Handheld or Abbe Refractometer (0-90°Brix range, 0.1°Brix precision)",
      "ISO/US No. 8 Circular Sieves (2.36mm mesh, 200mm diameter)",
      "Analytical Balance (0.01g precision)",
      "Distilled Water (for refractometer zeroing)"
    ],
    prescribedLimit: "Jam/Jelly °Brix: Min 65.0° | Tomato Ketchup °Brix: Min 25.0° | Pickle Drained Weight: Min 60.0% | Canned Fruits Drained Weight: Min 50.0%",
    riskIfFailed: "Fermentation of jams due to low sugar, gel breakdown, economic short-weight fraud, bacterial canned spoilage, and non-compliance with Legal Metrology laws.",
    procedureSteps: [
      "For Drained Weight: Open can/jar, record total gross weight. Pour contents onto 2.36mm sieve inclined at 20° for 2 minutes.",
      "Weigh sieve + drained solids; calculate % Drained Weight relative to declared net mass.",
      "For °Brix: Clean refractometer prism with distilled water and dry with lens paper. Zero instrument at 20°C.",
      "Place 2 drops of homogenized juice/sauce sample onto prism, close daylight plate.",
      "Read °Brix directly on scale or digital screen. Apply temperature correction if measured at temp != 20°C."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sieve Preparation & Inclination",
        title: "Standard Sieve Setup",
        action: "Tare clean dry 2.36mm mesh circular sieve; place over receiving pan at 17-20° tilt angle.",
        scientificMechanism: "Allows gravitational drainage of free liquid packing medium (syrup/brine/oil).",
        controlPoint: "CCP 1: Sieve mesh aperture must be certified 2.36mm.",
        reagentsInvolved: ["2.36mm Sieve"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Gravimetric Draining",
        title: "Two-Minute Liquid Drainage",
        action: "Pour container contents onto sieve evenly; drain for exactly 120 seconds.",
        scientificMechanism: "Surface tension and viscosity equilibrium reached at 2 minutes.",
        controlPoint: "CCP 2: Do not press or squeeze food solids during draining.",
        reagentsInvolved: ["Timer"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Drained Mass Calculation",
        title: "Drained Weight Computation",
        action: "Weigh drained solids + sieve. Calculate % Drained Weight.",
        scientificMechanism: "Quantifies net solid edible fraction relative to container package claim.",
        controlPoint: "CCP 3: Verify Drained Weight >= 60% (Pickles) / >= 50% (Canned foods).",
        reagentsInvolved: ["Analytical Balance"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Refractometer Zero Calibration",
        title: "Optical Prism Zeroing",
        action: "Clean refractometer prism with distilled water; zero instrument at 20°C (n_D = 1.3330).",
        scientificMechanism: "Establishes pure water optical refractive index baseline.",
        controlPoint: "CCP 4: Prism surface must be completely free of micro-scratches.",
        reagentsInvolved: ["Distilled Water"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: °Brix Refractive Index Measurement",
        title: "Soluble Solids Determination & Audit",
        action: "Place 2 drops sample on prism, record °Brix. Verify Jam >= 65.0°Brix / Ketchup >= 25.0°Brix.",
        scientificMechanism: "Refraction angle of light ray changes proportionally to solute concentration.",
        controlPoint: "Quality Gate: Jam °Brix < 65° leads to yeast fermentation and loss of gel structure.",
        reagentsInvolved: ["Abbe Refractometer"]
      }
    ]
  },

  // 2. CHEMICAL TEST: Sodium Benzoate & Preservative Quantification in Sauces & Jams
  {
    id: "processed-chem-1",
    category: "Processed & Packaged Foods",
    testType: "Chemical",
    productName: "Ketchup, Tomato Sauce, Mayonnaise, Pickle, Jam, Jelly, Chutney",
    testName: "Benzoic Acid & Sodium Benzoate Preservative Estimation (Spectrophotometric / Titrimetric Method)",
    shortSummary: "Quantifies chemical preservative Sodium Benzoate (E211) added to acidic foods to ensure compliance with FSSAI statutory safety ceilings.",
    detailedScientificRationale:
      "Sodium Benzoate (C6H5COONa) is a widely used chemical preservative in acidic processed foods (pH < 4.5) such as Ketchup, Sauces, Mayonnaise, and Pickles. In acidic media, Sodium Benzoate dissociates into undissociated Benzoic Acid molecules (C6H5COOH, pKa = 4.2). Undissociated benzoic acid is lipophilic and readily permeates fungal and bacterial cell membranes.\n\nOnce inside the neutral cytoplasm (pH ~7.0), it ionizes into protons (H+), causing intracellular acidification, inhibiting key glycolytic enzymes (Phosphofructokinase), and disrupting nutrient transport. However, excess Benzoic Acid consumption causes pseudo-allergic reactions, hives, and potential formation of carcinogenic Benzene if ascorbic acid (Vitamin C) is present. FSSAI prescribes strict maximum statutory limits (typically 750 ppm for sauces, 200 ppm for jams).",
    detailedTestPrinciple:
      "Benzoic acid is extracted from acidified food sample using diethyl ether or petroleum ether solvent. The ether extract containing dissolved benzoic acid is washed with water to remove mineral acids, and ether is evaporated at low temperature. The residue is dissolved in neutral 50% ethanol and titrated against standard 0.05 N NaOH using phenolphthalein indicator (or quantified UV-spectrophotometrically at 228 nm wavelength).",
    chemicalEquation: "C6H5COOH (Extracted Benzoic Acid in Ethanol) + NaOH ⟶ C6H5COONa (Sodium Benzoate) + H2O [Endpoint pH 8.3]",
    formulaBreakdown: {
      formula: "Benzoic Acid (ppm / mg/kg) = [(V × N × 122.12 × 1,000,000) / (W × 1000)]",
      variables: [
        { symbol: "V", description: "Volume of 0.05 N NaOH consumed in titration (mL)" },
        { symbol: "N", description: "Exact Normality of NaOH titrant (0.05 N)" },
        { symbol: "122.12", description: "Molecular Weight of Benzoic Acid (g/mol)" },
        { symbol: "W", description: "Mass of food sample extracted (g)" }
      ]
    },
    referenceStandard: "FSSAI Manual 05 (Fruit & Veg) / AOAC 963.19 / IS 4708",
    reagentsAndApparatus: [
      "Diethyl Ether or Petroleum Ether (40-60°C fraction)",
      "0.05 N Standardized Sodium Hydroxide (NaOH) Solution",
      "1:3 Dilute Hydrochloric Acid (HCl) & NaCl saturated solution",
      "Separatory Funnel (500mL) & UV-Vis Spectrophotometer (228 nm)"
    ],
    prescribedLimit: "Tomato Ketchup / Sauces: Max 750 ppm (mg/kg) | Jams / Jellies: Max 200 ppm | Pickles: Max 250 ppm",
    riskIfFailed: "Exceeding statutory chemical preservative limits, potential benzene formation, hypersensitivity reactions, legal prosecution under FSS Act.",
    procedureSteps: [
      "Homogenize 25.0g sample in 100mL water, acidify with 10mL 1:3 HCl, and add 50g NaCl to salt-out organic acids.",
      "Transfer to 500mL separatory funnel, extract thrice with 50mL portions of diethyl ether.",
      "Combine ether extracts, wash with 20mL saturated NaCl solution to remove trace mineral acid.",
      "Evaporate ether gently over 45°C water bath. Dissolve residue in 20mL neutral 50% ethanol.",
      "Add 3 drops phenolphthalein and titrate against 0.05 N NaOH until faint pink. Calculate Benzoic Acid in ppm."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Acidification & Salting-Out",
        title: "Protonation & Salting-Out",
        action: "Acidify 25g ketchup with 10mL HCl; saturate solution with 50g NaCl.",
        scientificMechanism: "Converts soluble benzoate ions into un-ionized lipophilic Benzoic Acid; high salt concentration forces organic acid into ether layer (salting-out).",
        controlPoint: "CCP 1: Verify pH < 2.0 with indicator paper to ensure complete protonation.",
        reagentsInvolved: ["1:3 HCl", "NaCl"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Liquid-Liquid Ether Extraction",
        title: "Separatory Funnel Solvent Extraction",
        action: "Extract acidified slurry 3 times with 50mL diethyl ether in separatory funnel.",
        scientificMechanism: "Benzoic acid partitions selectively into non-polar diethyl ether solvent layer.",
        controlPoint: "CCP 2: Vent separatory funnel frequently to release ether vapor pressure.",
        reagentsInvolved: ["Diethyl Ether", "Separatory Funnel"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Mineral Acid Wash",
        title: "Aqueous Salt Wash",
        action: "Wash combined ether extract with 20mL saturated NaCl solution.",
        scientificMechanism: "Removes carried-over traces of HCl mineral acid without dissolving organic benzoic acid.",
        controlPoint: "CCP 3: Discard lower wash water completely.",
        reagentsInvolved: ["Saturated NaCl"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Low-Temp Solvent Evaporation",
        title: "Thermal Solvent Removal",
        action: "Evaporate ether layer over 45°C water bath; dissolve residue in 20mL neutral 50% ethanol.",
        scientificMechanism: "Removes volatile ether solvent without subliming benzoic acid (sublimation point ~100°C).",
        controlPoint: "CCP 4: Perform inside fume hood. Water bath temp must not exceed 50°C.",
        reagentsInvolved: ["Neutral 50% Ethanol"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Titrimetric Quantification",
        title: "Alkalimetric Titration & Statutory Audit",
        action: "Titrate alcoholic solution with 0.05N NaOH to persistent pink. Calculate Benzoic Acid ppm.",
        scientificMechanism: "Stoichiometric neutralization of carboxylic group yields exact benzoic acid mass.",
        controlPoint: "Quality Gate: Ketchup Benzoic acid > 750 ppm violates FSSAI statutory safety regulations.",
        reagentsInvolved: ["0.05N NaOH", "Phenolphthalein"]
      }
    ]
  },

  // 3. MICROBIOLOGICAL TEST: Commercial Sterility in Canned Foods & Ready-To-Eat (RTE)
  {
    id: "processed-micro-1",
    category: "Processed & Packaged Foods",
    testType: "Microbiological",
    productName: "Canned Food, Ready-to-Eat Food, Instant Noodles, Pasta, Soup",
    testName: "Commercial Sterility & Thermophilic / Mesophilic Spore Test",
    shortSummary: "Evaluates hermetic seal integrity and absence of viable mesophilic/thermophilic bacterial spores (Clostridium, Bacillus) in retorted canned and RTE foods.",
    detailedScientificRationale:
      "Low-acid canned foods (pH > 4.6, a_w > 0.85) and retorted Ready-to-Eat (RTE) pouches undergo high-temperature thermal sterilization (121.1°C under pressure) to achieve 'Commercial Sterility'. Commercial sterility means the destruction of all pathogenic spores (specifically Clostridium botulinum 12-D lethality process, F0 ≥ 3.0 min) and spoilage organisms capable of growing at ambient storage temperatures.\n\nInadequate thermal processing or container leakage leads to two major canning spoilage types: 1) Flat Sour Spoilage caused by thermophilic Bacillus stearothermophilus (produces acid without gas, so can ends remain flat), and 2) Hard Swell / Bomb Spoilage caused by obligate anaerobes like Clostridium sporogenes or C. botulinum (produces massive CO2 and H2 gas, bulging container ends). Testing commercial sterility via incubation at 37°C and 55°C is mandatory.",
    detailedTestPrinciple:
      "Sealed cans/retort pouches are inspected for physical defects (swelling, flanging, seam leaks). Intact cans are divided into two incubation lots: Lot A incubated at 37°C ± 1°C for 14 days (mesophilic test) and Lot B incubated at 55°C ± 1°C for 14 days (thermophilic test). Cans showing swelling or vacuum loss are sampled aseptically. Contents are inoculated into Cooked Meat Medium (CMM) and Dextrose Tryptone Agar (DTA), followed by Gram staining and microscopic analysis.",
    chemicalEquation: "Glucose / Carbohydrates + Clostridium Spores (Anaerobic) ⟶ Butyric Acid + CO2 (Gas ↑) + H2 (Gas ↑) [Can Swelling / Bomb Spoilage]",
    formulaBreakdown: {
      formula: "Commercial Sterility = Zero Viable Growth (Mesophilic & Thermophilic) in Incubation Lots A & B",
      variables: [
        { symbol: "Lot A (37°C)", description: "14-day incubation for mesophilic anaerobes (Clostridium botulinum / C. sporogenes)" },
        { symbol: "Lot B (55°C)", description: "14-day incubation for thermophilic sporeformers (Bacillus stearothermophilus)" }
      ]
    },
    referenceStandard: "FSSAI Manual 14 (Microbiology) / IS 2168 / ISO 18419 / AOAC 972.44",
    reagentsAndApparatus: [
      "Cooked Meat Medium (CMM) & Dextrose Tryptone Agar (DTA)",
      "Anaerobic Jar with GasPak H2+CO2 Generator Envelope",
      "Incubators (37°C ± 1°C & 55°C ± 1°C)",
      "Gram Stain Kit (Crystal Violet, Iodine, Safranin) & Compound Microscope (1000x Oil Immersion)",
      "Can Opener & Aseptic Sampling Syringes"
    ],
    prescribedLimit: "Must pass Commercial Sterility test (No pouch/can swelling, zero microbial growth after 14 days incubation at 37°C and 55°C)",
    riskIfFailed: "Lethal botulism food poisoning (Clostridium botulinum neurotoxin), container explosion, flat sour spoilage, and total product destruction.",
    procedureSteps: [
      "Inspect cans/pouches visually for vacuum, leaks, denting, or swelling. Sanitise outer container surface with 70% ethanol.",
      "Place Lot A cans in 37°C incubator and Lot B cans in 55°C incubator for 14 days. Observe daily for swelling.",
      "After 14 days, sterilize container lid with flame, open aseptically using sterile can opener inside laminar airflow.",
      "Check pH of food contents using calibrated pH meter (drop in pH > 0.5 indicates flat sour acid production).",
      "Inoculate 1g contents into CMM (incubate anaerobically at 37°C) and DTA agar (incubate at 55°C). Perform Gram stain on growth."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Hermetic Inspection & Sanitization",
        title: "Visual Seam & Surface Sanitization",
        action: "Inspect container seam integrity; sanitize outer surface with 70% ethanol.",
        scientificMechanism: "Destroys external surface microbial contaminants before opening.",
        controlPoint: "CCP 1: Reject cans showing pre-existing leaks or hard swells.",
        reagentsInvolved: ["70% Ethanol"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Dual Temperature Incubation",
        title: "14-Day Incubation Challenge",
        action: "Incubate Lot A at 37°C and Lot B at 55°C for 14 days. Inspect daily.",
        scientificMechanism: "Triggers germination and outgrowth of dormant mesophilic and thermophilic endospores.",
        controlPoint: "CCP 2: Maintain incubators strictly at 37°C and 55°C ± 1°C.",
        reagentsInvolved: ["Dual Incubators (37°C & 55°C)"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Aseptic Sampling & pH Check",
        title: "Aseptic Sampling & Acid Drift",
        action: "Flame lid, open aseptically; record internal pH of food.",
        scientificMechanism: "Thermophilic Bacillus stearothermophilus ferments sugars to lactic acid without gas, dropping pH by > 0.5 units (Flat Sour).",
        controlPoint: "CCP 3: Open inside Class 100 Biosafety Cabinet.",
        reagentsInvolved: ["pH Meter"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Anaerobic & Aerobic Subculture",
        title: "CMM & DTA Media Subculture",
        action: "Inoculate 1g contents into Cooked Meat Medium (anaerobic) and DTA agar (aerobic).",
        scientificMechanism: "Cooked meat medium provides low redox potential (Eh) for obligate anaerobes (Clostridium species).",
        controlPoint: "CCP 4: Incubate CMM inside GasPak Anaerobic Jar.",
        reagentsInvolved: ["CMM Media", "DTA Agar", "GasPak"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Microscopic Morphotype Audit",
        title: "Gram Stain & Commercial Sterility Gate",
        action: "Prepare Gram stain slide from growth; view at 1000x oil immersion. Confirm Commercial Sterility.",
        scientificMechanism: "Identifies Gram-positive rod-shaped sporeformers (Bacillus / Clostridium).",
        controlPoint: "Quality Gate: Any microbial growth or pH drop > 0.5 constitutes Commercial Sterility Failure.",
        reagentsInvolved: ["Gram Stain Kit", "Microscope"]
      }
    ]
  }
];
