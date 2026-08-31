import { FoodTestItem } from "./types";

export const PULSES_OILS_SPICES_TESTS: FoodTestItem[] = [
  // 1. PHYSICAL TEST: Extraneous Matter, Foreign Seeds & Damaged Grains in Pulses & Spices
  {
    id: "spices-phys-1",
    category: "Pulses, Oil & Spices",
    testType: "Physical",
    productName: "Dal, Pulses, Spices, Turmeric, Red Chilli, Coriander, Garam Masala",
    testName: "Extraneous Matter & Inorganic Foreign Matter Determination",
    shortSummary: "Determines physical contamination including inorganic stones, dust, weed seeds, insect damaged pulses, and extraneous plant parts.",
    detailedScientificRationale:
      "Pulses (Dal, Whole Grams) and Ground Spices (Turmeric, Red Chilli, Coriander) are susceptible to physical contamination during harvesting, sun-drying, threshing, and milling. Extraneous matter is classified into two distinct physical fractions: 1) Inorganic Extraneous Matter (stones, gravel, dirt, clay lumps, metallic dust), and 2) Organic Extraneous Matter (chaff, straw, stems, weed seeds, insect-bitten/damaged grains).\n\nInorganic matter like stones and sand poses acute physical hazards (dental fractures, digestive tract abrasion) and increases Acid Insoluble Ash. Insect-damaged pulses harboring weevils (Callosobruchus maculatus) exhibit severe loss of protein quality and high uric acid contamination. FSSAI mandates strict statutory ceilings for foreign matter (max 1.0% in pulses, max 1.0-2.0% in spices).",
    detailedTestPrinciple:
      "A 500g representative pulse sample (or 100g whole spice sample) is weighed accurately and spread on a clean white sorting tray. Foreign matter fractions are physically separated using magnifying illuminated lamps, precision forceps, and calibrated analytical test sieves (IS 1.0mm, 2.0mm, 4.0mm). Separated fractions (inorganic stones vs organic weed seeds/damaged grains) are weighed individually on an analytical balance.",
    chemicalEquation: "Sample Mass (500g) ⟶ Physical Hand Sorting & Sieve Fractionation ⟶ Separated Inorganic Stones + Organic Matter (Gravimetric %)",
    formulaBreakdown: {
      formula: "% Extraneous Matter = (W_foreign / W_sample) × 100",
      variables: [
        { symbol: "W_foreign", description: "Mass of separated foreign matter fraction (g)" },
        { symbol: "W_sample", description: "Initial mass of pulses/spices sample taken (g)" }
      ]
    },
    referenceStandard: "FSSAI Manual 03 (Pulses) & Manual 10 (Spices) / IS 4333 (Part 1) / ISO 927",
    reagentsAndApparatus: [
      "White Enameled Sorting Trays & Illuminated Magnifying Glass (5x magnification)",
      "Certified IS Test Sieves (4.0mm, 2.0mm, 1.0mm apertures)",
      "Precision Stainless Steel Tweezers & Analytical Balance (0.001g)",
      "Sub-sampling Sample Divider (Riffle Sampler)"
    ],
    prescribedLimit: "Pulses (Dal): Total Extraneous Matter Max 1.0% (Inorganic Max 0.25%) | Whole Spices: Max 2.0%",
    riskIfFailed: "Dental trauma, ingestion of silica dust, uric acid toxicity from bruchid weevils, adulteration with toxic weed seeds (Datura/Argemone).",
    procedureSteps: [
      "Homogenize pulse sample using Riffle Sampler; weigh exactly 500.0g representative test portion (W_sample).",
      "Spread sample on white sorting tray under 5x illuminated magnifying lamp.",
      "Separate inorganic stones, gravel, and dirt lumps into Dish A using tweezers.",
      "Separate organic chaff, stems, weed seeds, and weeviled pulses into Dish B.",
      "Weigh Dish A and Dish B to 0.001g precision; calculate % Inorganic and % Organic Extraneous Matter."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Representative Sub-Sampling",
        title: "Riffle Sample Homogenization",
        action: "Pass 2kg bulk pulse lot through Riffle Sampler to obtain 500g test portion.",
        scientificMechanism: "Eliminates particle size and density segregation for statistical sample representation.",
        controlPoint: "CCP 1: Perform 3 successive riffle splits.",
        reagentsInvolved: ["Riffle Sampler"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Tray Sorting & Optical Magnification",
        title: "Optical Physical Sorting",
        action: "Spread 500g sample on white tray; inspect under 5x illuminated magnifier.",
        scientificMechanism: "Visual contrast on white background aids identification of color and morphology anomalies.",
        controlPoint: "CCP 2: Ensure 1000 lux illumination intensity.",
        reagentsInvolved: ["Illuminated Magnifier"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Sieve Density Fractionation",
        title: "Mechanical Sieve Separation",
        action: "Pass sample through 2.0mm and 1.0mm IS sieves to isolate dust and sand.",
        scientificMechanism: "Particle size exclusion separates fine silica sand from larger pulse seeds.",
        controlPoint: "CCP 3: Shake sieves for 2 minutes consistently.",
        reagentsInvolved: ["IS Test Sieves"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Fraction Gravimetric Weighing",
        title: "Gravimetric Mass Determination",
        action: "Weigh separated inorganic stones (Dish A) and organic weed seeds (Dish B).",
        scientificMechanism: "Quantifies exact mass proportion of non-conforming foreign matter.",
        controlPoint: "CCP 4: Balance accuracy must be 0.001g.",
        reagentsInvolved: ["Analytical Balance"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Statutory Compliance Audit Gate",
        title: "Extraneous Percentage Audit Gate",
        action: "Calculate % Extraneous Matter. Verify Total <= 1.0% and Inorganic <= 0.25%.",
        scientificMechanism: "Ensures compliance with FSSAI physical purity safety mandates.",
        controlPoint: "Quality Gate: Inorganic matter > 0.25% mandates mechanical gravity-table cleaning.",
        reagentsInvolved: ["FSSAI Manual 03"]
      }
    ]
  },

  // 2. CHEMICAL TEST: Curcumin Content in Turmeric & Sudan Dye Adulteration in Chilli
  {
    id: "spices-chem-1",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Turmeric Powder, Whole Turmeric, Red Chilli Powder, Spices",
    testName: "Curcumin Content Spectrophotometry & Sudan Dye Adulteration Screening",
    shortSummary: "Quantifies active bio-functional polyphenol Curcumin in turmeric and screens red chilli powder for illegal carcinogenic Sudan I-IV synthetic dyes.",
    detailedScientificRationale:
      "Turmeric (Curcuma longa) derives its intense yellow color and therapeutic anti-inflammatory properties from Curcuminoids — primarily Curcumin (diferuloylmethane), Demethoxycurcumin, and Bisdemethoxycurcumin. FSSAI mandates a minimum Curcumin content of 2.0 - 3.0% w/w in turmeric powder.\n\nConversely, Red Chilli powder is frequently adulterated with illegal, lipid-soluble azo dyes known as Sudan Dyes (Sudan I, II, III, IV, and Para-Red) or Lead Chromate to impart an artificially bright red or yellow color. Sudan dyes are classified as Category 3 Carcinogens by IARC and are banned globally. Extracting turmeric with alcohol and measuring UV-Vis absorbance at 425 nm quantifies Curcumin, while TLC/HPLC screens for Sudan dye adulteration.",
    detailedTestPrinciple:
      "For Curcumin: 0.1g turmeric powder is extracted with 95% Ethanol by refluxing for 1 hour. The diluted clear alcoholic extract is measured for absorbance at 425 nm wavelength using a UV-Vis Spectrophotometer against ethanol blank. Specific absorbance E(1%, 1cm) of pure Curcumin at 425 nm is 1607.\n\nFor Sudan Dyes: 5.0g chilli powder is extracted with n-Hexane. The concentrated extract is spotted onto Silica Gel 60 F254 Thin Layer Chromatography (TLC) plates and developed in Hexane : Ethyl Acetate (9:1 v/v) mobile phase. Migration of synthetic red spots (Rf matching Sudan standards) under 254/366nm UV confirms illegal dye addition.",
    chemicalEquation: "Curcumin Molecule (λ_max = 425 nm) + Monochromatic Light ⟶ Absorbance A425 [Beer-Lambert Law: A = ε · c · l]",
    formulaBreakdown: {
      formula: "% Curcumin (w/w) = (A_425 × Dilution Factor × 100) / (1607 × Sample Mass W)",
      variables: [
        { symbol: "A_425", description: "Spectrophotometric absorbance of alcoholic extract at 425 nm" },
        { symbol: "1607", description: "Specific extinction coefficient E(1%, 1cm) of pure Curcumin in ethanol at 425 nm" },
        { symbol: "Dilution Factor", description: "Total volumetric dilution factor (mL)" },
        { symbol: "Sample Mass W", description: "Mass of turmeric powder sample taken (g)" }
      ]
    },
    referenceStandard: "FSSAI Manual 10 (Spices) / IS 3576 (Turmeric) / IS 2445 (Chilli) / ASTA Method 18.0",
    reagentsAndApparatus: [
      "Double-Beam UV-Vis Spectrophotometer & 10mm Quartz Cuvettes",
      "Silica Gel 60 F254 TLC Plates & Developing Chamber",
      "Certified Reference Standards: Curcumin (>= 98%) & Sudan I, II, III, IV Dyes",
      "Absolute Ethanol (95% v/v) & n-Hexane : Ethyl Acetate (9:1 v/v)",
      "Reflux Condenser & 250mL Round-Bottom Flask"
    ],
    prescribedLimit: "Turmeric Powder Curcumin: Min 2.0% w/w (Good quality > 3.0%) | Sudan Dyes: ABSENT (Zero Tolerance)",
    riskIfFailed: "Severe carcinogenesis (Sudan dye liver/bladder cancer), lead chromate heavy metal poisoning, commercial adulteration fraud.",
    procedureSteps: [
      "For Curcumin: Weigh 0.100g turmeric powder into 250mL flask, add 80mL 95% ethanol, reflux for 1 hour.",
      "Cool, filter through Whatman No. 42 into 100mL volumetric flask, dilute to mark with 95% ethanol.",
      "Dilute 5mL of above solution to 100mL with ethanol. Measure absorbance at 425 nm against ethanol blank.",
      "Calculate % Curcumin using extinction coefficient formula (E 1% = 1607).",
      "For Sudan Dye: Extract 5g chilli powder with 20mL n-Hexane. Spot 10 µL on Silica TLC plate alongside Sudan standards. Develop in 9:1 Hexane:Ethyl Acetate. Inspect under UV light."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Ethanol Reflux Extraction",
        title: "Curcuminoid Solvent Extraction",
        action: "Reflux 0.10g turmeric with 80mL 95% ethanol for 60 min; filter into 100mL flask.",
        scientificMechanism: "Boiling ethanol quantitatively dissolves lipophilic polyphenol curcuminoids.",
        controlPoint: "CCP 1: Protect flask from direct sunlight (curcumin is photo-degradable).",
        reagentsInvolved: ["95% Ethanol", "Reflux Condenser"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Serial Volumetric Dilution",
        title: "Beer-Lambert Absorbance Range Dilution",
        action: "Dilute 5mL extract to 100mL with 95% ethanol.",
        scientificMechanism: "Brings concentration within linear spectrophotometric absorbance range (0.2 - 0.8 AU).",
        controlPoint: "CCP 2: Use Grade A volumetric flasks.",
        reagentsInvolved: ["Volumetric Flasks"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Spectrophotometric Measurement",
        title: "425 nm Absorbance Measurement",
        action: "Measure absorbance at 425 nm in 10mm quartz cuvette against ethanol blank.",
        scientificMechanism: "Feruloylmethane conjugated double-bond system exhibits maximum pi-pi* absorption at 425 nm.",
        controlPoint: "CCP 3: Zero spectrophotometer using 95% ethanol blank.",
        reagentsInvolved: ["UV-Vis Spectrophotometer"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: TLC Sudan Dye Screening",
        title: "Thin Layer Chromatography Adulterant Screen",
        action: "Spot n-Hexane chilli extract on Silica TLC plate; develop in 9:1 Hexane:Ethyl Acetate.",
        scientificMechanism: "Synthetic azo dyes migrate based on differential adsorption on silica gel matrix.",
        controlPoint: "CCP 4: Run certified Sudan I-IV standard spots simultaneously.",
        reagentsInvolved: ["Silica TLC Plate", "n-Hexane"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Curcumin & Adulterant Audit Gate",
        title: "Curcumin % Calculation & Zero-Tolerance Gate",
        action: "Calculate % Curcumin. Verify Curcumin >= 2.0% and Sudan Dyes ABSENT.",
        scientificMechanism: "Assesses bio-functional quality and confirms zero carcinogenic synthetic dye contamination.",
        controlPoint: "Quality Gate: Detection of any Sudan dye spot triggers immediate seizure under FSS Act.",
        reagentsInvolved: ["Calculation Formula"]
      }
    ]
  },

  // 3. CHEMICAL TEST: Peroxide Value (PV) & Argemone Oil Adulteration in Mustard Oil
  {
    id: "oils-chem-1",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Mustard Oil, Edible Oil, Soybean Oil, Groundnut Oil",
    testName: "Peroxide Value (PV) & Argemone / Mineral Oil Adulteration Tests",
    shortSummary: "Measures primary oxidative rancidity (hydroperoxides) and detects deadly Argemone mexicana oil adulteration in mustard oil.",
    detailedScientificRationale:
      "Edible oils (Mustard, Soybean, Groundnut) undergo autoxidation when exposed to atmospheric oxygen, light, and heat. Free radicals attack double bonds in unsaturated fatty acids (oleic, linoleic, linolenic), forming hydroperoxides — the primary products of lipid oxidation. Peroxide Value (PV) measures milliequivalents of active peroxide oxygen per kg oil.\n\nFurthermore, Mustard Oil is vulnerable to dangerous adulteration with Argemone Oil (from Argemone mexicana seeds) or Mineral Oil. Argemone oil contains toxic benzophenanthridine alkaloids (Sanguinarine and Dihydrosanguinarine) which inhibit Na+/K+-ATPase pumps, causing Epidemic Dropsy — characterized by severe edema, cardiac failure, and blindness. Testing PV and Argemone oil presence is mandatory.",
    detailedTestPrinciple:
      "For PV: 5.0g oil is dissolved in Acetic Acid : Chloroform solvent (3:2 v/v) and reacted with 1mL saturated Potassium Iodide (KI). Peroxides oxidize iodide ions (I-) to free Iodine (I2). The liberated iodine is titrated against standardized 0.01 N Sodium Thiosulfate (Na2S2O3) using starch indicator.\n\nFor Argemone Oil (FSSAI / Nitric Acid Test): 5mL oil is treated with 5mL concentrated Nitric Acid (HNO3) in a test tube and heated in boiling water bath for 2 minutes. Development of a distinct crimson-red color in the acid layer confirms sanguinarine alkaloid presence.",
    chemicalEquation: "R-OOH (Hydroperoxide) + 2 I- + 2 H+ ⟶ R-OH + I2 (Free Iodine) + H2O   |   I2 + 2 Na2S2O3 ⟶ 2 NaI + Na2S4O6 (Starch Endpoint Disappearance)",
    formulaBreakdown: {
      formula: "Peroxide Value (meq O2 / kg oil) = [(S - B) × N × 1000] / W",
      variables: [
        { symbol: "S", description: "Volume of 0.01 N Na2S2O3 titrant consumed by oil sample (mL)" },
        { symbol: "B", description: "Volume of 0.01 N Na2S2O3 consumed by blank (mL)" },
        { symbol: "N", description: "Exact Normality of Sodium Thiosulfate (0.01 N)" },
        { symbol: "W", description: "Mass of oil sample taken (g)" }
      ]
    },
    referenceStandard: "FSSAI Manual 04 (Oils & Fats) / IS 548 (Part 2) / ISO 3960 / AOAC 965.33",
    reagentsAndApparatus: [
      "Glacial Acetic Acid : Chloroform Mixture (3:2 v/v)",
      "Saturated Potassium Iodide (KI) Solution (freshly prepared)",
      "0.01 N Standardized Sodium Thiosulfate (Na2S2O3) Solution",
      "1% Soluble Starch Indicator Solution",
      "Concentrated Nitric Acid (HNO3, sp gr 1.42)"
    ],
    prescribedLimit: "Peroxide Value: Max 10.0 meq O2/kg oil | Argemone Oil: ABSENT (Zero Tolerance) | Mineral Oil: ABSENT",
    riskIfFailed: "Epidemic Dropsy (cardiac failure, glaucoma/blindness due to Sanguinarine toxin), oxidative tissue damage, severe liver toxicity.",
    procedureSteps: [
      "For PV: Weigh 5.000g oil into 250mL stoppered flask, add 30mL Acetic Acid-Chloroform (3:2), add 0.5mL saturated KI.",
      "Stopper, swirl for 1 min, place in dark for 5 min. Add 30mL distilled water.",
      "Titrate liberated iodine with 0.01 N Na2S2O3 until pale yellow. Add 1mL starch indicator (turns dark blue) and titrate until blue disappears. Run blank.",
      "Calculate PV in meq O2/kg.",
      "For Argemone Oil: Pipette 5mL oil into test tube, add 5mL conc. HNO3. Shake and heat in boiling water bath for 2 minutes. Observe for crimson-red color in acid layer."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Solvent Dissolution & Dark Reaction",
        title: "Iodide Reduction Reaction",
        action: "Dissolve 5g oil in 30mL Acetic-Chloroform; add 0.5mL saturated KI; react in dark for 5 min.",
        scientificMechanism: "Lipid hydroperoxides quantitatively oxidize iodide ions (I-) to molecular iodine (I2).",
        controlPoint: "CCP 1: Perform in dark to prevent photo-oxidation of KI.",
        reagentsInvolved: ["Acetic-Chloroform", "Saturated KI"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Iodometric Thiosulfate Titration",
        title: "Starch Indicator Endpoint Titration",
        action: "Add 30mL water; titrate with 0.01N Na2S2O3 using starch indicator to blue disappearance.",
        scientificMechanism: "Thiosulfate reduces free iodine to iodide; starch-iodine blue complex discharges at endpoint.",
        controlPoint: "CCP 2: Add starch indicator only near pale-yellow endpoint.",
        reagentsInvolved: ["0.01N Na2S2O3", "1% Starch Indicator"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Nitric Acid Argemone Test",
        title: "Sanguinarine Nitric Acid Test",
        action: "Heat 5mL oil + 5mL conc. HNO3 in boiling water bath for 2 minutes.",
        scientificMechanism: "Sanguinarine benzophenanthridine alkaloid forms crimson-red nitrated adduct with HNO3.",
        controlPoint: "CCP 3: Perform inside fume hood. Conc. HNO3 is highly corrosive.",
        reagentsInvolved: ["Conc. Nitric Acid"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Color Layer Observation",
        title: "Acid Layer Color Audit",
        action: "Inspect lower acid layer for crimson-red to reddish-brown coloration.",
        scientificMechanism: "Confirms presence of toxic Argemone mexicana seed oil adulterant.",
        controlPoint: "CCP 4: Yellow/orange layer indicates negative result.",
        reagentsInvolved: ["Test Tube"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Quality & Toxicity Audit Gate",
        title: "Peroxide Value & Epidemic Dropsy Gate",
        action: "Calculate PV meq/kg. Verify PV <= 10.0 and Argemone Oil ABSENT.",
        scientificMechanism: "Guarantees oil freshness and absolute safety from Epidemic Dropsy alkaloid poisoning.",
        controlPoint: "Quality Gate: Positive Argemone test mandates immediate seizure under FSS Act.",
        reagentsInvolved: ["FSSAI Manual 04"]
      }
    ]
  }
];
