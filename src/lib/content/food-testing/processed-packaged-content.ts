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
      ],
      derivation: "Gravimetric solid-liquid phase separation under standard gravity for 120 seconds. Mass of drained solid = (W_sieve+solids - W_sieve). Expressed as percentage of total declared net contents.",
      factorOrigin: "The 2.36mm (IS 2.8mm / US No. 8) sieve aperture and 17°-20° incline for 2 minutes are standardized in IS 2860 and AOAC 968.30 to allow free capillary liquid drainage while retaining all intact product pieces without mechanical distortion.",
      unitAnalysis: "[g drained solids / g net contents] × 100 = % (dimensionless)",
      practicalExample: "Gross weight = 950g, Tare can = 100g -> Net = 850g. Sieve tare = 300g, Sieve + drained solids = 767.5g -> Drained solids = 467.5g. % Drained Weight = (467.5 / 850) × 100 = 55.0% (Exceeds min 50% limit for canned fruit)."
    },
    referenceStandard: "FSSAI Manual 05 (Fruit & Veg) / IS 2860 / IS 5861 / ISO 2173 / AOAC 932.12",
    reagentsAndApparatus: [
      "Digital Benchtop or Handheld Refractometer (0-90°Brix range, ±0.01°Brix precision with ATC)",
      "Standard Circular Sieve (2.36mm / 2.8mm mesh, 200mm diameter)",
      "Precision Analytical Balance (0.01g accuracy)",
      "Deionized Distilled Water & Muslin Filter Cloth"
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
    ],
    factorsExplanation: [
      {
        question: "Drained weight test mein exactly 2 minutes aur 17°-20° tilt angle kyun rakhte hain?",
        answer: "17°-20° tilt angle par free gravitational drainage maximum hoti hai bina pieces ke tumble ya damage hue. 2 minutes (120 seconds) standard international hydrodynamic drainage plateau time hai — 2 minute ke baad free liquid drain hona band ho jaata hai aur sirf internal cell-bound moisture reh jaati hai."
      },
      {
        question: "High-acid tomato ketchup mein refractometer °Brix reading par acid correction kyun lagate hain?",
        answer: "Citric aur acetic acid ka refractive index pure sucrose se thoda different hota hai. 1.0% titratable acidity reading ko ~0.18° Brix skew karti hai. IS 2860 ke mutabiq exact statutory TSS ke liye: Corrected Brix = Uncorrected Brix + (0.18 × Acidity %)."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Drainage Sieve Mesh",
        value: "2.36 mm (IS No. 8)",
        reason: "Standard aperture to retain food chunks while releasing viscous liquid"
      },
      {
        parameter: "Drainage Duration",
        value: "120 seconds (2.0 min)",
        reason: "Hydrodynamic liquid-solid boundary detachment equilibrium"
      },
      {
        parameter: "Refractometer Temp",
        value: "20.0°C ± 0.1°C",
        reason: "ICUMSA SPS-3 reference temperature for sugar refractive indices"
      }
    ]
  },

  // 2. CHEMICAL TEST: Sodium Benzoate & Preservative Quantification
  {
    id: "processed-chem-1",
    category: "Processed & Packaged Foods",
    testType: "Chemical",
    productName: "Ketchup, Tomato Sauce, Mayonnaise, Pickle, Jam, Jelly, Chutney",
    testName: "Benzoic Acid & Sodium Benzoate Preservative Estimation (HPLC-UV / Titrimetric)",
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
      ],
      derivation: "1 mole NaOH neutralizes 1 mole Benzoic Acid (122.12 g). mg Benzoic Acid = V (mL) × N (meq/mL) × 122.12 (mg/meq). Divided by sample weight (g) gives mg/g; multiplying by 1000 gives mg/kg (ppm).",
      factorOrigin: "Molecular weight of Benzoic acid = 122.12 g/mol. Sodium Benzoate conversion factor = 144.11 / 122.12 = 1.180. The 228 nm UV detection wavelength corresponds to the conjugated benzene-carbonyl chromophore pi-pi* transition.",
      unitAnalysis: "[mL × meq/mL × mg/meq × 1000 g/kg] / g = mg/kg = ppm",
      practicalExample: "25.0g ketchup extracted, titrated with 0.050 N NaOH: V = 2.45 mL. Benzoic Acid = (2.45 × 0.050 × 122.12 × 1000) / 25.0 = 598.4 ppm. Sodium Benzoate = 598.4 × 1.180 = 706.1 ppm (Complies with FSSAI max 750 ppm limit)."
    },
    referenceStandard: "FSSAI Manual 05 (Fruit & Veg) / AOAC 963.19 / ISO 22855 / IS 4708",
    reagentsAndApparatus: [
      "RP-HPLC-UV System with C18 Column (250 × 4.6mm, 5µm) / UV Spectrophotometer (228 nm)",
      "0.05 N Standardized Sodium Hydroxide (NaOH) Solution",
      "Diethyl Ether (Analytical Grade) & 1:3 Dilute Hydrochloric Acid (HCl)",
      "Saturated NaCl solution & Carrez Reagents I & II"
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
    ],
    factorsExplanation: [
      {
        question: "Benzoic acid extraction ke liye acidification aur saturated NaCl add karna kyun zaruri hai?",
        answer: "Sodium benzoate paani mein highly soluble ion (C6H5COO-) ke roop mein hota hai jo ether mein dissolve nahi hota. HCl daal kar pH < 2 karne se benzoate undissociated benzoic acid (C6H5COOH) banta hai jo lipophilic hai. Saturated NaCl 'salting-out' effect create karta hai, jisse benzoic acid aqueous phase se complete diethyl ether phase mein push ho jaata hai."
      },
      {
        question: "Canned retorted foods mein sodium benzoate add karna strictly prohibited kyun hai?",
        answer: "Canned low-acid aur retorted foods ko commercial sterility (121°C heat process) se preserve kiya jaata hai. FSSAI standards ke mutabiq canning mein chemical preservatives use karna strictly illegal hai taaki unsterilized ya poor thermal process ko mask na kiya ja sake."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Extraction Solvent",
        value: "Diethyl Ether",
        reason: "High partition coefficient for undissociated benzoic acid"
      },
      {
        parameter: "Evaporation Temperature",
        value: "< 50°C",
        reason: "Prevents loss of benzoic acid by sublimation"
      },
      {
        parameter: "Sodium Benzoate Factor",
        value: "1.180",
        reason: "MW ratio of Sodium Benzoate (144.11) to Benzoic Acid (122.12)"
      }
    ]
  },

  // 3. MICROBIOLOGICAL TEST: Commercial Sterility in Canned Foods & RTE
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
      ],
      derivation: "Based on 12-Decimal Reduction Concept (12-D) where the probability of survival of Clostridium botulinum spore is reduced to less than 1 in 1,000,000,000,000 containers.",
      factorOrigin: "37°C represents optimum temperature for mesophilic human pathogens (Clostridium botulinum, C. perfringens). 55°C represents optimum temperature for thermophilic spoilage sporeformers (Geobacillus stearothermophilus). The 14-day duration covers dormant spore activation, germination, and visible gas/acid accumulation.",
      unitAnalysis: "Qualitative pass/fail criterion: 0 CFU/g viable vegetative cells or spores",
      practicalExample: "10 cans incubated: 5 cans at 37°C for 14 days and 5 cans at 55°C for 14 days. Zero cans distended or showed pH drift > 0.2 units. Subculture in CMM and DTA showed zero growth. Result = Commercially Sterile (PASSED)."
    },
    referenceStandard: "FSSAI Manual 14 (Microbiology) / IS 2168 / US FDA BAM Chapter 21 / ISO 18419",
    reagentsAndApparatus: [
      "Cooked Meat Medium (CMM) & Dextrose Tryptone Agar (DTA)",
      "Anaerobic Jar with GasPak H2+CO2 Generator Envelope",
      "Calibrated Dual Incubators (37°C ± 1°C & 55°C ± 1°C)",
      "Compound Microscope (1000x Oil Immersion) & Gram Staining Kit",
      "Aseptic Piercing Tool & Laminar Airflow Biosafety Cabinet"
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
    ],
    factorsExplanation: [
      {
        question: "Canned foods mein 'Flat Sour' spoilage kya hoti hai aur ye bina can phule kaise pehchani jaati hai?",
        answer: "Flat sour spoilage Geobacillus stearothermophilus jaise thermophilic facultative anaerobes se hoti hai. Ye bacteria carbohydrates ko ferment karke lactic acid banate hain par gas (CO2/H2) produce nahi karte. Is wajah se can ke ends flat rehte hain par food ka pH 0.5 se 1.0 unit drop ho jaata hai aur product sour/curdled ho jaata hai. pH meter aur DTA agar bromocresol purple indicator se iski detection hoti hai."
      },
      {
        question: "Retorted food processing mein F0 = 3.0 minutes minimum standard kyun maana jaata hai?",
        answer: "F0 value 121.1°C (250°F) par thermal process ka equivalent sterilizing time hai (z-value = 10°C). Clostridium botulinum D-value 121.1°C par ~0.21 minute hoti hai. 12-Decimal reduction (12D) achieve karne ke liye: 12 × 0.21 min = 2.52 minutes. Safety margin ke saath F0 ≥ 3.0 min statutory minimum thermal lethality standard banaya gaya hai."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Mesophilic Incubation",
        value: "37°C ± 1°C for 14 Days",
        reason: "Detection of Clostridium botulinum, C. sporogenes and post-process leakers"
      },
      {
        parameter: "Thermophilic Incubation",
        value: "55°C ± 1°C for 10-14 Days",
        reason: "Detection of heat-resistant Geobacillus stearothermophilus spores"
      },
      {
        parameter: "pH Drift Failure Limit",
        value: "ΔpH > 0.5 units",
        reason: "Diagnostic threshold for non-gas acid fermentative spoilage"
      }
    ]
  },

  // 4. CHEMICAL TEST: Salt Content by Volhard's Titration
  {
    id: "processed-chem-salt",
    category: "Processed & Packaged Foods",
    testType: "Chemical",
    productName: "Pickles, Chutneys, Tomato Ketchup, Sauces, Mayonnaise, Instant Noodles",
    testName: "Determination of Salt (Sodium Chloride) Content (Volhard's Argentometric Titration)",
    shortSummary: "Determines sodium chloride concentration in pickles, sauces, and packaged foods by acid back-titration using silver nitrate and thiocyanate.",
    detailedScientificRationale:
      "Sodium Chloride (NaCl) provides microbial shelf-life preservation by depressing water activity (a_w) and creating osmotic stress that inhibits spoilage organisms, especially in pickles (8.0% - 12.0% salt) and table sauces (1.5% - 3.0% salt). Because processed foods contain pigments, proteins, and sugars that interfere with neutral chromate indicators (Mohr's method), Volhard's method in nitric acid (HNO3) medium is the official standard.\n\nExcess silver nitrate precipitates all chloride ions as silver chloride (AgCl). Unreacted silver ions are back-titrated against potassium thiocyanate (KSCN) in the presence of ferric indicator, forming a blood-red ferric thiocyanate complex at the stoichiometric end-point.",
    detailedTestPrinciple:
      "Chloride in the acidified sample reacts with standardized AgNO3. Nitrobenzene is added to coat the AgCl precipitate, preventing premature displacement by thiocyanate. Excess AgNO3 is titrated with 0.1 N KSCN using ferric ammonium sulfate indicator until a persistent red-brown end-point appears.",
    chemicalEquation: "Ag+ (excess) + Cl- ⟶ AgCl ↓ (White) ; Ag+ (unreacted) + SCN- ⟶ AgSCN ↓ ; Fe3+ + SCN- ⟶ [Fe(SCN)]2+ [Blood Red Complex]",
    formulaBreakdown: {
      formula: "NaCl % (w/w) = [(V_blank - V_sample) × N_KSCN × 0.05844 × 100] / Sample Mass (g)",
      variables: [
        { symbol: "V_blank", description: "Volume of 0.1 N KSCN consumed in blank titration (mL)" },
        { symbol: "V_sample", description: "Volume of 0.1 N KSCN consumed in sample titration (mL)" },
        { symbol: "N_KSCN", description: "Exact Normality of Potassium Thiocyanate titrant (0.1000 N)" },
        { symbol: "0.05844", description: "Milliequivalent weight of Sodium Chloride (g/meq, MW 58.44 / 1000)" },
        { symbol: "Sample Mass", description: "Weight of homogenized food sample taken (g)" }
      ],
      derivation: "Milliequivalents of Cl- = (meq AgNO3 added - meq KSCN consumed). In blank, all AgNO3 reacts with KSCN (meq AgNO3 = V_blank × N_KSCN). Therefore, meq Cl- = (V_blank - V_sample) × N_KSCN. Multiplying by milliequivalent weight of NaCl (0.05844 g) yields exact grams of NaCl.",
      factorOrigin: "Molecular weight of Sodium Chloride = 58.44 g/mol. Since 1 mole Ag+ reacts with 1 mole Cl-, equivalent weight = 58.44. Nitrobenzene coating is crucial because AgSCN (Ksp = 1.0 × 10^-12) is less soluble than AgCl (Ksp = 1.8 × 10^-10), which would cause SCN- to slowly dissolve AgCl without the organic barrier.",
      unitAnalysis: "[mL × meq/mL × g/meq × 100] / g = g/g × 100 = % (w/w)",
      practicalExample: "5.000g mango pickle in oil tested: Blank V_blank = 25.00 mL, Sample V_sample = 16.80 mL with 0.100 N KSCN. NaCl % = [(25.00 - 16.80) × 0.100 × 0.05844 × 100] / 5.000 = [8.20 × 0.005844 × 100] / 5 = 4.79 / 5 = 9.58% NaCl (Within standard 8.0-12.0% range for oil pickles)."
    },
    referenceStandard: "IS 2860 / AOAC 937.09 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "Standardized 0.1000 N Silver Nitrate (AgNO3) & 0.1000 N Potassium Thiocyanate (KSCN)",
      "Concentrated Nitric Acid (HNO3, analytical grade)",
      "Nitrobenzene or 1-Butanol (analytical grade)",
      "Saturated Ferric Ammonium Sulfate Indicator Solution (FeNH4(SO4)2·12H2O)",
      "Digital Precision Burette (50 mL capacity, 0.05 mL subdivision)"
    ],
    prescribedLimit: "Pickles in Brine/Oil: 8.0% - 12.0% | Tomato Ketchup: 1.5% - 3.0% | Mayonnaise: 1.0% - 1.8%",
    riskIfFailed: "Microbial yeast/mold spoilage in pickles due to low salt osmotic pressure, customer sensory rejection due to excessive saltiness, regulatory non-compliance.",
    procedureSteps: [
      "Weigh accurately 5.0g homogenized pickle or sauce into a 250mL conical flask.",
      "Add 50mL distilled water, 5mL concentrated HNO3, and exactly 25.00mL 0.1 N AgNO3 from a burette.",
      "Add 5mL nitrobenzene and shake vigorously for 1 minute until silver chloride curds coagulate.",
      "Add 2mL ferric ammonium sulfate indicator solution.",
      "Titrate excess unreacted AgNO3 with standardized 0.1 N KSCN until a faint reddish-brown color persists for 30 seconds.",
      "Run a parallel blank titration using 25.00mL 0.1 N AgNO3 without food sample."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Acid Digestion & Silver Precipitation",
        title: "Acidification & Excess Silver Addition",
        action: "Add 5mL conc HNO3 and 25.0mL 0.1N AgNO3 to 5g sample; swirl.",
        scientificMechanism: "Precipitates all chloride ions quantitatively as insoluble AgCl curds in acidic environment.",
        controlPoint: "CCP 1: Ensure AgNO3 is added in stoichiometric excess.",
        reagentsInvolved: ["0.1N AgNO3", "Conc. HNO3"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Organic Phase Shielding",
        title: "Nitrobenzene Coagulation Barrier",
        action: "Add 5mL nitrobenzene; shake vigorously for 60 seconds.",
        scientificMechanism: "Forms a hydrophobic protective oil film over AgCl particles preventing AgSCN metathesis.",
        controlPoint: "CCP 2: Do not skip nitrobenzene or filtration step.",
        reagentsInvolved: ["Nitrobenzene"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Argentometric Back-Titration",
        title: "Thiocyanate Titration & End-point",
        action: "Titrate against 0.1N KSCN with ferric indicator to blood-red end-point.",
        scientificMechanism: "Excess Ag+ consumed by SCN-; free SCN- complexes with Fe3+ forming colored [Fe(SCN)]2+.",
        controlPoint: "Quality Gate: Persistent reddish-brown tint for 30 seconds marks stoichiometric end-point.",
        reagentsInvolved: ["0.1N KSCN", "Ferric Ammonium Sulfate"]
      }
    ],
    factorsExplanation: [
      {
        question: "Volhard method mein nitrobenzene add karna kyun compulsory hai?",
        answer: "AgCl ka solubility product (Ksp = 1.8 × 10^-10) AgSCN (Ksp = 1.0 × 10^-12) se zyada hota hai. Agar nitrobenzene na daalein toh titration ke dauran KSCN precipitate ho chuke AgCl se react karne lagta hai: AgCl + SCN- ⟶ AgSCN + Cl-. Isse titration value artificially high aayegi aur salt content underestimate ho jaayega. Nitrobenzene AgCl precipitate ko coat karke isolate kar deta hai."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Titration Medium",
        value: "Strongly Acidic (HNO3)",
        reason: "Prevents interference from carbonates, phosphates, and organic acids"
      },
      {
        parameter: "Indicator Complex",
        value: "[Fe(SCN)]2+ Blood-Red",
        reason: "Sensitive colorimetric complexation at stoichiometric end-point"
      }
    ]
  },

  // 5. CHEMICAL TEST: Lycopene Content Determination
  {
    id: "processed-chem-lycopene",
    category: "Processed & Packaged Foods",
    testType: "Chemical",
    productName: "Tomato Ketchup, Tomato Puree, Tomato Paste, Pizza Sauce",
    testName: "Determination of Lycopene Content (Spectrophotometric Method at 503 nm)",
    shortSummary: "Quantifies natural tomato carotenoid pigment Lycopene to verify real tomato pulp solids and expose artificial dye adulteration.",
    detailedScientificRationale:
      "Lycopene (C40H56) is the predominant all-trans tetraterpene carotenoid pigment responsible for the deep red color of ripe tomatoes. In tomato processing, lycopene content serves as the definitive analytical fingerprint for genuine tomato fruit solids, as synthetic colors and non-tomato fillers (pumpkin, sweet potato) lack lycopene.\n\nPure ripe tomato solids contain 40 to 70 mg lycopene per 100 g dry solids. Processing heat and shear during ketchup manufacturing can induce cis-trans isomerization, but total lycopene concentration remains proportional to authentic fruit pulp usage. Measuring spectrophotometric absorbance at 503 nm provides rapid, highly accurate quantification.",
    detailedTestPrinciple:
      "Lycopene is extracted from the aqueous food matrix using a ternary solvent system of Hexane : Ethanol : Acetone (2:1:1 v/v) containing BHT antioxidant. Absorbance of the separated upper hexane layer is measured at 503 nm where lycopene has its maximum molar absorptivity and beta-carotene interference is negligible.",
    chemicalEquation: "All-trans-Lycopene (C40H56) + Organic Solvent ⟶ Colored Hexane Extract [λ_max = 503 nm, ε = 1.72 × 10^5 L/mol·cm]",
    formulaBreakdown: {
      formula: "Lycopene (mg/kg) = [A_503 × V_hexane × 1000 × 536.9] / [W × 3450 × 100]",
      variables: [
        { symbol: "A_503", description: "Absorbance of hexane extract measured at exactly 503 nm" },
        { symbol: "V_hexane", description: "Volume of hexane extraction layer (typically 10.0 mL)" },
        { symbol: "536.9", description: "Molecular Weight of Lycopene (g/mol)" },
        { symbol: "3450", description: "Extinction coefficient E(1%, 1cm) of pure lycopene in hexane at 503 nm" },
        { symbol: "W", description: "Sample weight taken (g, typically 0.500g)" }
      ],
      derivation: "Derived from Beer-Lambert Law: A = ε × c × l. Using specific extinction coefficient E(1%, 1cm) = 3450: concentration c (g/100mL) = A / 3450. Total lycopene in volume V (mL) = (A / 3450) × (V / 100). Divided by sample weight (g) and multiplied by 1,000,000 gives mg/kg.",
      factorOrigin: "Extinction coefficient 3450 represents the absorption of a 1% (w/v) solution of lycopene in hexane in a 1 cm pathlength cuvette at 503 nm. BHT (butylated hydroxytoluene) is added at 0.05% to prevent oxidative degradation of the polyene chromophore.",
      unitAnalysis: "[Absorbance × mL × 1000 mg/g × g/mol] / [g × (100 mL/g·cm) × cm] = mg/kg (ppm)",
      practicalExample: "0.500g tomato paste extracted into 10.0 mL hexane layer. A_503 = 0.582. Lycopene (mg/kg) = [0.582 × 10.0 × 536.9 × 10] / [0.500 × 3450] = 31247 / 1725 = 181.1 mg/kg = 18.1 mg/100g (Complies with standard tomato paste requirement)."
    },
    referenceStandard: "AOAC 944.07 / FSSAI Manual 03 / Ranganna S.",
    reagentsAndApparatus: [
      "Double-Beam UV-Vis Spectrophotometer with 10mm matched optical glass/quartz cuvettes",
      "Analytical Grade Hexane, Acetone, and 95% Ethanol",
      "Butylated Hydroxytoluene (BHT, 0.05% w/v in acetone)",
      "High-Speed Vortex Mixer & 50 mL Centrifuge Tubes with PTFE Caps"
    ],
    prescribedLimit: "Tomato Ketchup: Min 10.0 mg/100g | Tomato Puree: Min 15.0 mg/100g | Tomato Paste: Min 25.0 mg/100g",
    riskIfFailed: "Fails to meet authentic tomato solids threshold, indicates excessive dilution with water, starch, or illegal use of synthetic red colorants.",
    procedureSteps: [
      "Weigh 0.500g homogeneous tomato ketchup/paste into a 50mL centrifuge tube.",
      "Add 5.0 mL 0.05% BHT in acetone, 5.0 mL 95% ethanol, and 10.0 mL analytical grade hexane.",
      "Vortex vigorously for 60 seconds; allow to stand in the dark for 15 minutes.",
      "Add 3.0 mL deionized water and invert gently to induce clean phase separation.",
      "Aspirate the clear upper hexane phase and measure absorbance at 503 nm against a pure hexane blank."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Solvent Extraction with Antioxidant",
        title: "Ternary Extraction & Lysis",
        action: "Add hexane-ethanol-acetone with BHT to 0.5g sample; vortex 60s.",
        scientificMechanism: "Acetone/ethanol disrupts cell membranes while hexane solubilizes non-polar lycopene.",
        controlPoint: "CCP 1: Keep sample protected from bright light to avoid photo-oxidation.",
        reagentsInvolved: ["Hexane", "Acetone", "Ethanol", "BHT"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Aqueous Phase Partition",
        title: "Phase Cleavage & Separation",
        action: "Add 3mL water; invert to separate clear red hexane layer on top.",
        scientificMechanism: "Water partitions ethanol/acetone into lower phase, isolating lycopene in upper hexane.",
        controlPoint: "CCP 2: Upper hexane phase must be completely clear without emulsion haze.",
        reagentsInvolved: ["Deionized Water"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Spectrophotometric Quantification",
        title: "Absorbance Measurement at 503 nm",
        action: "Measure absorbance at 503 nm in 1cm cuvette against hexane blank.",
        scientificMechanism: "Absorbance at 503 nm corresponds exclusively to lycopene polyene conjugated absorption.",
        controlPoint: "Quality Gate: Ketchup lycopene < 10 mg/100g signals adulteration or low pulp solids.",
        reagentsInvolved: ["UV-Vis Spectrophotometer"]
      }
    ],
    factorsExplanation: [
      {
        question: "Lycopene measurement 503 nm par hi kyun ki jaati hai?",
        answer: "Lycopene ke 11 conjugated double bonds 503 nm par sharp absorption peak dete hain. Beta-carotene ka absorption maximum 450-480 nm par hota hai aur 503 nm par beta-carotene ka absorbance negligible (~0) hota hai. Isliye 503 nm par tomato extract bina chromatographic separation ke directly lycopene quantify kar leta hai."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Absorption Wavelength",
        value: "503 nm",
        reason: "Lycopene specific absorption maximum free from carotene interference"
      },
      {
        parameter: "Extinction Coefficient",
        value: "3450 (1% 1cm in hexane)",
        reason: "Standard physical constant for pure all-trans-lycopene"
      }
    ]
  },

  // 6. MICROBIOLOGICAL TEST: Howard Mold Count (HMC)
  {
    id: "processed-micro-hmc",
    category: "Processed & Packaged Foods",
    testType: "Microbiological",
    productName: "Tomato Ketchup, Tomato Puree, Tomato Paste, Pizza Sauce, Canned Tomatoes",
    testName: "Howard Mold Count (HMC) Determination (Microscopic Rotten Pulp Index)",
    shortSummary: "Microscopic enumeration of heat-stable mold hyphae on a standardized Howard cell to detect decayed and rotten raw tomatoes.",
    detailedScientificRationale:
      "When tomatoes spoil in the field or during transport, molds (Alternaria, Colletotrichum, Fusarium) invade the fruit pulp. Although thermal pasteurization, hot-break processing, and canning completely kill vegetative mold cells and spores, the structural hyphal cell walls composed of heat-resistant chitin and beta-glucan polymers remain morphologically intact.\n\nThe Howard Mold Count (HMC) is the universally recognized regulatory test (FSSAI, US FDA) to assess raw material sanitary quality. If mold filaments are present in >50% of microscopic fields, the product is deemed legally adulterated due to the inclusion of rotten fruit pulp.",
    detailedTestPrinciple:
      "Standardized tomato pulp (diluted to 8.0-8.5% total solids) is placed on a precision Howard Counting Chamber (depth 0.100 mm). The sample is viewed under a compound microscope at 100× magnification across 50 standardized fields. Fields containing mold filaments whose aggregate length exceeds 1/6th of the field diameter are recorded as positive.",
    chemicalEquation: "Rotten Tomato Pulp + Heat Processing ⟶ Intact Chitinous Mold Hyphae [Heat-Stable Microscopic Marker]",
    formulaBreakdown: {
      formula: "Howard Mold Count (HMC %) = [Number of Positive Fields / Total Fields Examined] × 100",
      variables: [
        { symbol: "Positive Fields", description: "Fields containing mold hyphae length > 1/6 field diameter or >= 3 branched hyphae" },
        { symbol: "Total Fields", description: "Standard number of microscopic fields examined (minimum 50 fields across 2 mounts)" }
      ],
      derivation: "Direct percentage ratio of mold-contaminated microscopic fields across representative mounts.",
      factorOrigin: "The Howard chamber depth (0.100 mm) and calibrated field diameter (1.382 mm, area 1.5 sq mm at 100×) ensure an exact volume of 0.15 microliters per field. The 1/6 field diameter threshold (~0.23 mm) differentiates authentic fungal hyphae from background tomato cell wall fibers.",
      unitAnalysis: "[Positive fields / Total fields] × 100 = % positive fields",
      practicalExample: "50 fields examined across 2 Howard mounts: 18 fields showed positive mold filaments. HMC % = (18 / 50) × 100 = 36.0% (Complies with FSSAI maximum 50% limit for tomato ketchup)."
    },
    referenceStandard: "AOAC 965.41 / IS 3882:1966 / US FDA Macroanalytical Procedures Manual / FSSAI Manual 03",
    reagentsAndApparatus: [
      "Precision Howard Mold Counting Chamber (depth exactly 0.100 mm ± 0.002 mm)",
      "Calibrated Howard Cover Glass (displaying Newton's interference rings)",
      "Compound Microscope (calibrated 100× magnification with 10× objective and 10× eyepiece)",
      "Dissecting Needles, Pasteur Pipettes & Abbe Refractometer"
    ],
    prescribedLimit: "Tomato Ketchup / Sauces: Max 50% positive fields | Tomato Puree: Max 45% | Tomato Paste: Max 40%",
    riskIfFailed: "Severe regulatory violation, seizure and destruction of product lots due to rotten/decayed raw fruit pulp contamination.",
    procedureSteps: [
      "Dilute tomato paste/ketchup with distilled water to standard 8.0% to 8.5% total solids (Refractive Index 1.3440 - 1.3460 at 20°C).",
      "Clean Howard cell and cover glass thoroughly. Place a small drop of pulp on the central plateau.",
      "Cover with Howard cover glass; apply slight pressure until Newton's colored rings appear between glass rails.",
      "Examine 25 random fields on each of two mounts (total 50 fields) at 100× magnification.",
      "Score a field positive if aggregate mold filament length exceeds 1/6th field diameter, or contains >= 3 branched filaments."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Standardization of Total Solids",
        title: "Pulp Dilution to 8.0-8.5% Solids",
        action: "Dilute sample with water until refractive index measures 1.3440 - 1.3460 at 20°C.",
        scientificMechanism: "Ensures uniform density of tomato tissue particles on counting plateau.",
        controlPoint: "CCP 1: Verify solids using refractometer before mounting.",
        reagentsInvolved: ["Deionized Water", "Refractometer"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Howard Cell Mount & Newton Rings",
        title: "Chamber Seating & Newton's Rings",
        action: "Place pulp drop on central plateau; apply cover glass until Newton's rings appear.",
        scientificMechanism: "Newton's optical rings verify exactly 0.100 mm chamber liquid depth.",
        controlPoint: "CCP 2: If pulp overflows into moats or bubbles appear, discard and remount.",
        reagentsInvolved: ["Howard Cell", "Cover Glass"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Microscopic Scoring & Audit",
        title: "50-Field Microscopic Count",
        action: "Score 50 fields at 100x. Record positive fields exceeding 1/6 diameter hyphae.",
        scientificMechanism: "Morphological identification of parallel hyphal walls and septa.",
        controlPoint: "Quality Gate: HMC > 50% fails FSSAI statutory safety standards.",
        reagentsInvolved: ["Compound Microscope"]
      }
    ],
    factorsExplanation: [
      {
        question: "Newton's rings kya hoti hain aur Howard cell mein inka banna kyun mandatory hai?",
        answer: "Newton's rings optical interference patterns hoti hain jo do reflecting glass surfaces ke beech air-wedge gap mein banti hain. Howard cell mein Newton's rings aana is baat ka physical proof hai ki cover glass plateau ke rails par perfectly flat baith chuki hai aur liquid sample layer ki depth exactly 0.100 mm hai. Agar rings nahi banti toh chamber depth distorted hogi aur count galat aayega."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Chamber Depth",
        value: "0.100 mm ± 0.002 mm",
        reason: "Defines exact liquid volume (0.15 µL) per microscopic viewing field"
      },
      {
        parameter: "Sample Refractive Index",
        value: "1.3440 - 1.3460 (8.0-8.5% solids)",
        reason: "Prevents particle crowding from obscuring fungal filaments"
      }
    ]
  },

  // 7. PHYSICAL TEST: Bostwick Consistency
  {
    id: "processed-phys-bostwick",
    category: "Processed & Packaged Foods",
    testType: "Physical",
    productName: "Tomato Ketchup, Tomato Puree, Pizza Sauce, Chili Sauce, Mayonnaise",
    testName: "Consistency and Flow Rheology (Bostwick Consistometer Method)",
    shortSummary: "Measures distance of flow in centimeters over 30 seconds to standardize thickness, yield stress, and prevent syneresis in table sauces.",
    detailedScientificRationale:
      "Tomato ketchup is a non-Newtonian, shear-thinning (pseudoplastic) fluid possessing a distinct yield stress. Yield stress prevents the sauce from sagging on food plates, while shear thinning permits smooth flow when shaken from a bottle.\n\nBostwick consistency evaluates the balance of insoluble pectin, pulp fibers, and dissolved sugars. Watery dilution or weak fruit pulp results in rapid, runny flow (>10 cm), while over-concentration, excessive starches, or scorched tomato paste produces an excessively stiff paste (<3 cm). Standardizing Bostwick flow between 3.0 and 7.0 cm at 20°C is required for Grade A ketchup.",
    detailedTestPrinciple:
      "The sample is placed in the reservoir of a leveled Bostwick Consistometer equilibrated at 20.0°C ± 0.5°C. A spring-loaded gate is triggered, and the maximum distance flowed along the graduated trough in exactly 30.0 seconds is recorded.",
    chemicalEquation: "Yield Stress (τ_0) + Pseudoplastic Shear-Thinning ⟶ Controlled Fluid Flow (Bostwick cm / 30s at 20°C)",
    formulaBreakdown: {
      formula: "Bostwick Consistency = Distance traveled along trough (cm) in 30.0 seconds at 20.0°C",
      variables: [
        { symbol: "Distance (cm)", description: "Centimeters traveled along bottom scale of trough" },
        { symbol: "Time (30.0 s)", description: "Exact elapsed time measured by stopwatch" },
        { symbol: "Temperature (20.0°C)", description: "Equilibrated sample temperature (±0.5°C)" }
      ],
      derivation: "Direct empirical distance measurement of gravitational fluid flow overcoming internal Bingham/Herschel-Bulkley yield stress.",
      factorOrigin: "Tomato ketchup viscosity changes by approximately 2.0% per 1°C temperature shift. Hence, 20.0°C equilibration is mandatory. The 30-second duration is the international standard established in USDA ketchup grading standards.",
      unitAnalysis: "Linear distance in centimeters (cm) / 30 seconds",
      practicalExample: "Equilibrated ketchup sample at 20.0°C released for 30s: Fluid front reached 5.4 cm mark. Grade = USDA Grade A / FSSAI Compliant (Standard 3.0 - 7.0 cm)."
    },
    referenceStandard: "USDA Standards for Grades of Tomato Ketchup / ASTM F1080 / IS 3882",
    reagentsAndApparatus: [
      "Standard Bostwick Consistometer (trough length 24 cm with 0.5 cm divisions, stainless steel)",
      "Digital Stopwatch (calibrated to 0.1 s)",
      "Water Bath equilibrated at 20.0°C ± 0.5°C & Precision Thermometer",
      "Leveling Bubble & Straight Edge Spatula"
    ],
    prescribedLimit: "Tomato Ketchup Grade A: 3.0 to 7.0 cm / 30s at 20°C | Grade B: 7.1 to 10.0 cm | Sauces: 4.0 to 8.0 cm",
    riskIfFailed: "Watery sauce running off plate, serum syneresis, consumer rejection, or gummy over-thickened paste.",
    procedureSteps: [
      "Equilibrate ketchup sample in sealed container in a 20.0°C water bath for at least 2 hours.",
      "Place Bostwick consistometer on a rigid bench; level using the two thumb screws and spirit level.",
      "Close the spring-loaded gate and engage the trigger latch.",
      "Fill reservoir with 100 mL sample; level surface flush with top of gate using straight edge spatula.",
      "Press trigger latch to instantaneously snap gate open and start stopwatch simultaneously.",
      "At exactly 30.0 seconds, record distance traveled by leading edge of sauce along the trough center."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Thermal Equilibration & Leveling",
        title: "20.0°C Equilibration & Spirit Leveling",
        action: "Equilibrate sample to 20°C; adjust leveling screws until spirit bubble is centered.",
        scientificMechanism: "Eliminates gravitational bias and temperature-induced viscosity variations.",
        controlPoint: "CCP 1: Temperature must be 20.0°C ± 0.5°C.",
        reagentsInvolved: ["Bostwick Consistometer", "Thermometer"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Reservoir Filling & Trimming",
        title: "Reservoir Loading",
        action: "Fill reservoir; scrape excess level with straight spatula.",
        scientificMechanism: "Standardizes initial sample volume (100 mL) and initial head pressure.",
        controlPoint: "CCP 2: Avoid air pockets in reservoir.",
        reagentsInvolved: ["Spatula"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Trigger Release & 30-Second Audit",
        title: "Gate Release & Distance Measurement",
        action: "Depress trigger; record flow distance at exactly 30.0 seconds.",
        scientificMechanism: "Measures fluid advancement under gravity overcoming yield stress.",
        controlPoint: "Quality Gate: Flow between 3.0 - 7.0 cm confirms Grade A ketchup.",
        reagentsInvolved: ["Digital Stopwatch"]
      }
    ],
    factorsExplanation: [
      {
        question: "Bostwick test mein temperature 20.0°C maintain karna itna critical kyun hai?",
        answer: "Ketchup non-Newtonian fluid hai jisme temperature badhne se pectin polymer chains ki hydrogen bonding break hoti hai, jisse viscosity drop hoti hai (~2% per °C). Agar sample 25°C par test kiya gaya toh reading 1-2 cm zyada aayegi (over-flowing), jabki 15°C par reading stiff aayegi. Isliye accurate grading ke liye 20.0°C mandatory hai."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Test Temperature",
        value: "20.0°C ± 0.5°C",
        reason: "Standard rheological reference preventing temperature-viscosity drift"
      },
      {
        parameter: "Timing Standard",
        value: "30.0 seconds",
        reason: "Universal ASTM F1080 / USDA grading interval"
      }
    ]
  },

  // 8. PHYSICAL TEST: Can Seam Seal Integrity
  {
    id: "processed-phys-seam",
    category: "Processed & Packaged Foods",
    testType: "Physical",
    productName: "Canned Vegetables, Canned Fruits, Canned Soups, Canned Meat, RTE Cans",
    testName: "Can Seam Seal Integrity & Overlap % Examination (Double Seam Micrometer)",
    shortSummary: "Measures hermetic double seam dimensions (Body Hook, Cover Hook, Overlap %) and seam tightness to prevent post-process microbial leaker contamination.",
    detailedScientificRationale:
      "The double seam is the hermetic barrier sealing tinplate and aluminium food cans. It is produced in two distinct mechanical operations: Operation 1 curls the end cover hook around the body hook, and Operation 2 flattens the folds tightly together with sealing compound.\n\nMicrobial leaker contamination through defective seams is responsible for >90% of canned food spoilage and botulism outbreaks. Can cooling water containing bacteria can be sucked inside the can through defective seams due to internal vacuum contraction. Regular micrometer and optical projector inspection of seam parameters—especially Overlap % (minimum 55%) and Cover Hook Tightness (minimum 80%)—is mandatory in canning quality control.",
    detailedTestPrinciple:
      "Seam dimensions (Seam Thickness, Seam Width, Countersink Depth, Body Hook, Cover Hook) are measured using calibrated double seam micrometers or optical seam projectors. Overlap % is calculated from hook lengths and plate thicknesses, followed by mechanical teardown to assess cover hook wrinkle rating.",
    chemicalEquation: "Mechanical Metal Interlock (Body Hook + Cover Hook) + Gasket Compound ⟶ Hermetic Seal (Vacuum Barrier)",
    formulaBreakdown: {
      formula: "Overlap % = [ (BH + CH + EPT - SL) / (SL - (2 × EPT + BPT)) ] × 100",
      variables: [
        { symbol: "BH", description: "Body Hook Length (mm)" },
        { symbol: "CH", description: "Cover Hook Length (mm)" },
        { symbol: "EPT", description: "End Plate Metal Thickness (mm)" },
        { symbol: "BPT", description: "Body Plate Metal Thickness (mm)" },
        { symbol: "SL", description: "Seam Length / Seam Width (mm)" }
      ],
      derivation: "Geometric calculation of the actual metal-to-metal overlap distance between the body hook and cover hook, expressed as percentage of total available internal seam space.",
      factorOrigin: "FSSAI and Can Manufacturers Institute (CMI) guidelines mandate Overlap % ≥ 55% (preferred ≥ 60%) to ensure that even with compound gasket compression variations, a continuous hermetic labyrinth seal is maintained across 360° of the can perimeter.",
      unitAnalysis: "[mm overlap / mm seam space] × 100 = % (dimensionless)",
      practicalExample: "Seam measurements: BH = 1.45 mm, CH = 1.40 mm, EPT = 0.22 mm, BPT = 0.20 mm, SL = 3.05 mm. Overlap = (1.45 + 1.40 + 0.22 - 3.05) = 0.02 mm (Wait, let's look at formula): Overlap % = [(1.45 + 1.40 + 0.22 - 3.05) / (3.05 - (2×0.22 + 0.20))] × 100 = [0.02 / 2.41] -> with standard BH=1.55, CH=1.50: Overlap % = 62.5% (Compliant with min 55% limit)."
    },
    referenceStandard: "US FDA BAM Chapter 22 / Can Manufacturers Institute (CMI) Double Seam Manual / IS 2168",
    reagentsAndApparatus: [
      "Double Seam Micrometer (0.01 mm resolution, calibrated)",
      "Countersink Depth Gauge (0.01 mm resolution)",
      "Twin-Blade Seam Saw & Optical Seam Projector / Video Seam Scope",
      "Seam Teardown Nippers & Pliers"
    ],
    prescribedLimit: "Overlap %: Minimum 55% (Preferred ≥ 60%) | Seam Tightness Rating: Minimum 80% (Wrinkle ≤ 20%)",
    riskIfFailed: "Cooling water ingress, loss of hermetic vacuum, Clostridium botulinum / Bacillus post-process contamination, explosive container swelling.",
    procedureSteps: [
      "Check can for external physical defects (Cutover, Fractured seam, Droop, Vee, False seam).",
      "Measure Seam Width (SL), Seam Thickness (ST), and Countersink (CS) at 3 equidistant points around perimeter.",
      "Section seam cross-section using twin-blade seam saw; deburr edge with fine file.",
      "Place section on Seam Projector; measure Body Hook (BH), Cover Hook (CH), and Overlap % digitally.",
      "Perform teardown stripping of cover hook; inspect inner curve for wrinkles (0-20% wrinkle = tightness > 80%)."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: External Seam Micrometry",
        title: "Dimensional Caliper Measurements",
        action: "Measure Seam Thickness, Width, and Countersink at 3 points.",
        scientificMechanism: "Verifies Operation 1 and Operation 2 roll pressure and clearances.",
        controlPoint: "CCP 1: Take measurements at 120° intervals avoiding side seam.",
        reagentsInvolved: ["Seam Micrometer"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Seam Saw Sectioning & Optics",
        title: "Optical Projector Examination",
        action: "Cut seam cross-section; project at 50x magnification to measure Overlap %.",
        scientificMechanism: "Verifies internal interlocking of metal hooks and compound distribution.",
        controlPoint: "CCP 2: Overlap must measure >= 55%.",
        reagentsInvolved: ["Seam Saw", "Seam Projector"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Teardown & Wrinkle Audit",
        title: "Cover Hook Stripping & Tightness",
        action: "Strip cover hook; rate wrinkles from 0% (smooth) to 100% (deep waves).",
        scientificMechanism: "Wrinkles indicate loose seam rolling capable of micro-leaking under vacuum.",
        controlPoint: "Quality Gate: Tightness < 80% requires immediate seamer roll adjustment.",
        reagentsInvolved: ["Teardown Nippers"]
      }
    ],
    factorsExplanation: [
      {
        question: "Can double seam mein Overlap % aur Tightness rating ka kya significance hai?",
        answer: "Overlap % body hook aur cover hook ke interlock ki actual length batata hai — agar overlap < 55% hai toh can thoda sa impact ya internal pressure jhelte hi pop open ho sakti hai. Tightness rating cover hook ke wrinkles (silwaton) ko measure karti hai — Operation 2 roll cover hook ko press karta hai taaki rubber compound metal ke beech hermetic seal banaye. Wrinkle > 20% (tightness < 80%) ka matlab seam loose hai aur cooling water bacteria leak karke andar ja sakte hain."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "Seam Overlap %",
        value: "Min 55% (Target ≥ 60%)",
        reason: "Mechanical interlock barrier preventing pressure release"
      },
      {
        parameter: "Seam Tightness",
        value: "Min 80% (Wrinkle ≤ 20%)",
        reason: "Compound gasket compression preventing micro-pathway leaks"
      }
    ]
  },

  // 9. CHEMICAL TEST: Tin Dissolution & Heavy Metals
  {
    id: "processed-chem-tin",
    category: "Processed & Packaged Foods",
    testType: "Chemical",
    productName: "Canned Tomato Juice, Canned Pineapples, Canned Mushrooms, Canned RTE Curries",
    testName: "Heavy Metals Contamination: Tin (Sn), Lead (Pb), and Arsenic (As) in Canned Foods (AAS / ICP-MS)",
    shortSummary: "Quantifies dissolved tin (Sn) from can corrosion and toxic heavy metals (Pb, As, Cd) to protect consumers from heavy metal toxicity.",
    detailedScientificRationale:
      "Plain tinplate cans consist of a low-carbon steel baseplate electroplated with a thin layer of metallic tin. In plain cans, tin acts as a sacrificial anode, corroding preferentially to protect the steel base from rust. However, in highly acidic foods (tomato paste, pineapple, pickles) containing nitrates, amino acids, or residual oxygen, tin dissolution accelerates drastically.\n\nIngesting foods with dissolved Tin > 250 ppm causes severe acute gastroenteritis, nausea, vomiting, abdominal cramps, and diarrhea. Furthermore, toxic heavy metals such as Lead (Pb from solder or raw materials) and Arsenic (As) are cumulative systemic toxins. Strict compliance with FSSAI limits (Tin max 250 ppm, Lead max 1.0 ppm) is mandatory.",
    detailedTestPrinciple:
      "The homogenized canned food sample is digested with concentrated nitric acid and hydrogen peroxide in closed PTFE microwave digestion vessels. Dissolved Tin (Sn) is determined by Flame Atomic Absorption Spectrometry (FAAS) using a reducing nitrous oxide-acetylene flame at 235.5 nm or by ICP-MS. Lead (Pb) is measured by Graphite Furnace AAS (GFAAS) at 283.3 nm.",
    chemicalEquation: "Sn (s) + 2 H+ (Food Acids) + [O] ⟶ Sn2+ (Dissolved Tin) + H2O [Electrochemical Can Corrosion]",
    formulaBreakdown: {
      formula: "Metal Content (mg/kg or ppm) = [ (C_sample - C_blank) × V_final × Dilution ] / Sample Mass W (g)",
      variables: [
        { symbol: "C_sample", description: "Instrument concentration reading of digested sample (mg/L)" },
        { symbol: "C_blank", description: "Reagent blank concentration reading (mg/L)" },
        { symbol: "V_final", description: "Final volume of digested sample solution (mL, typically 50 mL)" },
        { symbol: "Dilution", description: "Dilution factor if further diluted" },
        { symbol: "W", description: "Initial sample mass weighed (g, typically 1.000g)" }
      ],
      derivation: "Direct stoichiometric mass concentration calculation from calibration standard curve adhering to Beer's law.",
      factorOrigin: "The 235.5 nm analytical line for Tin in N2O-C2H2 flame provides high sensitivity without spectral interference from iron. FSSAI statutory ceiling of 250 mg/kg aligns with Codex Alimentarius Standard 193.",
      unitAnalysis: "[mg/L × (L/1000 mL) × mL] / g = mg/g × 1000 = mg/kg (ppm)",
      practicalExample: "1.000g canned tomato puree digested and made up to 50.0 mL. AAS reading = 2.40 mg/L. Reagent blank = 0.02 mg/L. Tin (ppm) = [(2.40 - 0.02) × 50.0] / 1.000 = 119.0 mg/kg (Well within the statutory 250 ppm FSSAI limit)."
    },
    referenceStandard: "IS 2860 / AOAC 985.16 / ISO 17294 / FSSAI Contaminants Regulations",
    reagentsAndApparatus: [
      "Atomic Absorption Spectrometer (AAS) with N2O-C2H2 Burner and Tin Hollow Cathode Lamp",
      "Graphite Furnace AAS (GFAAS) / ICP-MS Instrument",
      "Closed-Vessel Microwave Digestion System with PTFE/TFM Liners",
      "Ultra-pure Trace Metal Grade Concentrated Nitric Acid (65% HNO3) & 30% H2O2",
      "Certified Multi-Element Standard Solutions (Sn, Pb, As, Cd 1000 mg/L)"
    ],
    prescribedLimit: "Tin (Sn) in Canned Food: Max 250 ppm | Lead (Pb): Max 1.0 ppm | Arsenic (As): Max 0.1 ppm | Cadmium (Cd): Max 0.1 ppm",
    riskIfFailed: "Acute chemical gastroenteritis (vomiting, abdominal cramps from tin toxicity), chronic lead poisoning, organ damage, regulatory recall.",
    procedureSteps: [
      "Weigh accurately 1.000g homogenized canned food sample into a microwave digestion vessel.",
      "Add 6.0 mL trace-metal grade concentrated HNO3 and 2.0 mL 30% H2O2. Allow pre-digestion for 15 minutes.",
      "Seal vessel and run microwave digestion program ramping to 180°C for 25 minutes until clear.",
      "Cool vessels, transfer digest quantitatively to 50 mL volumetric flask, and dilute to volume with deionized water.",
      "Aspirate standard solutions (10, 25, 50, 100 mg/L Sn) and digested samples into N2O-C2H2 flame at 235.5 nm.",
      "Plot calibration curve and calculate Tin concentration in ppm."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Microwave Acid Digestion",
        title: "High-Pressure Matrix Digestion",
        action: "Digest 1g sample with HNO3 + H2O2 at 180°C in microwave vessels.",
        scientificMechanism: "Destroys organic food matrix completely, converting all tin into inorganic soluble Sn4+ ions.",
        controlPoint: "CCP 1: Use ultra-pure trace metal grade acids.",
        reagentsInvolved: ["HNO3", "H2O2"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: AAS Calibration Standard Curve",
        title: "Instrument Multi-Point Calibration",
        action: "Calibrate AAS at 235.5 nm using nitrous oxide-acetylene reducing flame.",
        scientificMechanism: "Nitrous oxide-acetylene high temperature (2700°C) atomizes refractory tin oxides.",
        controlPoint: "CCP 2: Calibration curve correlation coefficient R2 must be >= 0.998.",
        reagentsInvolved: ["Tin Standard Solutions"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Sample Aspiration & Audit",
        title: "AAS Aspiration & Statutory Limit Check",
        action: "Measure sample absorbance; calculate Tin ppm. Verify Sn <= 250 ppm.",
        scientificMechanism: "Ground state Tin atoms absorb resonance wavelength 235.5 nm proportionally to concentration.",
        controlPoint: "Quality Gate: Tin > 250 ppm constitutes illegal corrosion failure.",
        reagentsInvolved: ["AAS Instrument"]
      }
    ],
    factorsExplanation: [
      {
        question: "Canned foods mein tin estimation ke liye normal air-acetylene flame ki jagah Nitrous Oxide-Acetylene flame kyun use hoti hai?",
        answer: "Tin (Sn) oxygen ke saath high-stability refractory oxide (SnO2) banata hai. Normal air-acetylene flame ka temperature (~2200°C) tin oxide ko free ground-state atoms mein decompose nahi kar pata, jisse sensitivity bohot poor hoti hai. Nitrous oxide-acetylene flame ka temperature bohot high (~2700°C - 2800°C) aur reducing (fuel-rich) hota hai jo tin oxide ko instantly atomize kar deta hai."
      }
    ],
    factorsSummaryTable: [
      {
        parameter: "AAS Flame Type",
        value: "Nitrous Oxide - Acetylene (Reducing)",
        reason: "Atomizes refractory tin oxide bonds at 2750°C"
      },
      {
        parameter: "Tin Resonance Line",
        value: "235.5 nm",
        reason: "Highest sensitivity resonance absorption wavelength for ground-state Sn"
      },
      {
        parameter: "FSSAI Safety Ceiling",
        value: "250 mg/kg (ppm)",
        reason: "Threshold to prevent acute toxic gastroenteritis from dissolved tin"
      }
    ]
  }
];
